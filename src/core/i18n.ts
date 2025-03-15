import { get } from "./utils";

type Locales = {
	[language in string]: Record<string, string>;
};

/**
 * Provides information and helpers to assist with i18n functionality.
 */
export class Internationalization {
	public language = this.getUILanguage();
	public fallbackLanguage = this.getFallbackLanguage();
	public locales?: Locales;

	/**
	 * Gets the localized string for the specified message. If the message is missing, this method returns an empty string. This is comparable to chrome.i18n.getMessage.
	 * @param messageName The name of the message
	 * @returns Message localized for current locale.
	 * {@link https://developer.chrome.com/docs/extensions/reference/i18n/#method-getMessage}
	 */
	public getMessage(messageName: string | undefined): string {
		// Determine if we can translate.
		if (!this.locales || messageName === undefined) {
			return "";
		}

		const localize = (lang: string): string | undefined => get(`${lang}.${messageName}`, this.locales);

		// When the language and fallback are the same, only check the language.
		if (this.language === this.fallbackLanguage) {
			return localize(this.language) || "";
		}

		return localize(this.language) || localize(this.fallbackLanguage) || "";
	}

	/**
	 * Gets the browser UI language of the browser, based on the navigator.
	 * @returns The browser UI language code such as en or fr.
	 * {@link https://developer.chrome.com/docs/extensions/reference/i18n/#method-getUILanguage}
	 */
	public getUILanguage(): string {
		const language = window?.navigator?.language;

		// Chinese Traditional
		if (language === "zh-Hant" || language === "zh-TW") {
			return "zh_TW";
		}

		// Chinese Simplified
		if (language === "zh-Hans" || language === "zh-CN" || language === "zh") {
			return "zh_CN";
		}

		return window.navigator.language ? window.navigator.language.split("-")[0] : "en";
	}

	/**
	 * Gets the fallback language based on the current language.
	 * @returns The fallback language code such as zh or en.
	 */
	public getFallbackLanguage(): string {
		return this.language.startsWith("zh") ? "zh" : "en";
	}
}

const i18n = new Internationalization();
export default i18n;
