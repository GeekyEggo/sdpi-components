import { delay, get, IEventSubscriber, set } from "../core";
import streamDeckClient from "./stream-deck-client";

export type SettingsEventArgs = {
	payload: {
		settings: unknown;
	};
};

/**
 * Provides a wrapper around loading, managing, and persisting settings within the Stream Deck.
 */
export class Settings<TEventArgs extends SettingsEventArgs> {
	private readonly _initialization;
	private _settings: unknown;

	/**
	 * Initializes a new instance of the settings.
	 * @param didReceive The event invoked when the settings are received from the Stream Deck.
	 * @param save The delegate responsible for persisting the settings in the Stream Deck.
	 */
	constructor(
		private didReceive: IEventSubscriber<TEventArgs>,
		private save: (settings: unknown) => Promise<void>,
	) {
		this._initialization = new Promise<void>((resolve) => {
			didReceive.subscribe((data) => {
				this._settings = data.payload.settings;
				resolve();
			});
		});
	}

	/**
	 * Registers the given key as a setting to be persisted in the Stream Deck; when the settings change, the callback is invoked.
	 * @param key The key.
	 * @param changeCallback Optional callback invoked when the settings change from the Stream Deck.
	 * @param timeout Optional delay awaited before applying a save; this can be useful if a value can change frequently, i.e. if it is being typed.
	 * @param save Indicates whether the setting should be persisted to the Stream Deck.
	 * @returns The getter and setter, capable of retrieving and persisting the setting.
	 */
	public use<T>(
		key: string,
		changeCallback?: ((value?: T) => void) | null,
		timeout: number | null = 250,
		save: boolean | null = true,
	): [() => Promise<T | undefined>, (value?: T) => Promise<void>] {
		// Register the change callback.
		if (changeCallback) {
			this.didReceive.subscribe((data: TEventArgs) => {
				if (data?.payload?.settings !== undefined) {
					changeCallback(get(key, data.payload.settings));
				}
			});
		}

		// Construct getter and setter.
		const getter = async (): Promise<T> => {
			await this._initialization;
			return get(key, await this._settings);
		};
		const setter = timeout
			? delay((value) => this.set(key, value, save), timeout)
			: (value?: unknown) => this.set(key, value, save);

		return [getter, setter];
	}

	/**
	 * Sets the value, for the specified key, to the persistent settings.
	 * @param key The key.
	 * @param value The value.
	 * @param save Indicates whether the setting should be persisted to the Stream Deck.
	 */
	private async set(key: string, value?: unknown, save: boolean | null = true): Promise<void> {
		await this._initialization;

		const oldValue = get(key, this._settings);
		if (oldValue === value) {
			return;
		}

		set(key, this._settings, value);
		if (save) {
			await this.save(this._settings);
		}
	}
}

// Action instance specific settings.
const settings = new Settings(streamDeckClient.didReceiveSettings, (value) => streamDeckClient.setSettings(value));
export const useSettings = settings.use.bind(settings);

// Global plugin settings.
let didRequestGlobalSettings = false;
const globalSettings = new Settings(streamDeckClient.didReceiveGlobalSettings, (value) =>
	streamDeckClient.setGlobalSettings(value),
);

export const useGlobalSettings = <T>(
	key: string,
	changeCallback?: ((value?: T) => void) | null,
	timeout: number | null = 250,
	save: boolean | null = true,
): [() => Promise<T | undefined>, (value?: T) => Promise<void>] => {
	if (!didRequestGlobalSettings) {
		streamDeckClient.getGlobalSettings();
		didRequestGlobalSettings = true;
	}

	return globalSettings.use(key, changeCallback, timeout, save);
};
