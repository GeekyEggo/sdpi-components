/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'stream-deck' {
    /**
     * Defines possible device types.
     */
    export const enum DeviceType {
        StreamDeck = 0,
        StreamDeckMini = 1,
        StreamDeckXL = 2,
        StreamDeckMobile = 3,
        CorsairGKeys = 4
    }

    /**
     * The connection information supplied to the property inspector when initializing.
     */
    export type ConnectionInfo = {
        actionInfo: ActionInfo;
        info: RegistrationInfo;
        propertyInspectorUUID: string;
        registerEvent: string;
    };

    /**
     * Defines information about devices, the operating system, and the plugin, that is provided to the Stream Deck property inspector as a JSON object.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/registration-procedure/#info-parameter}
     */
    export type RegistrationInfo = {
        application: {
            font: string;
            language: string;
            platform: 'mac' | 'windows';
            platformVersion: string;
            version: string;
        };
        color: {
            buttonMouseOverBackgroundColor: string;
            buttonPressedBackgroundColor: string;
            buttonPressedBorderColor: string;
            buttonPressedTextColor: string;
            highlightColor: string;
        };
        devicePixelRatio: number;
        devices: {
            id: string;
            name: string;
            size: {
                columns: number;
                rows: number;
            };
            type: DeviceType;
        };
        plugin: {
            uuid: string;
            version: string;
        };
    };

    /**
     * Defines information about the action provided to the Stream Deck property inspector as a JSON object.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/registration-procedure/#inactioninfo-parameter}
     */
    export type ActionInfo = DidReceiveSettingsEvent & {
        payload: {
            isInMultiAction: boolean;
        };
    };

    /**
     * Defines the types of messages that can be sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent}
     */
    export type EventSent = SetSettingsEvent | GetSettingsEvents | SetGlobalSettingsEvent | GetGlobalSettingsEvent | OpenUrlEvent | LogMessageEvent | SendToPluginEvent;

    /**
     * Defines the message structure of the `setSettings` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#setsettings}
     */
    export type SetSettingsEvent = {
        event: 'setSettings';
        context: string;
        payload: unknown;
    };

    /**
     * Defines the message structure of the `getSettings` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#getsettings}
     */
    export type GetSettingsEvents = {
        event: 'getSettings';
        context: string;
    };

    /**
     * Defines the message structure of the `setGlobalSettings` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#setglobalsettings}
     */
    export type SetGlobalSettingsEvent = {
        event: 'setGlobalSettings';
        payload: unknown;
    };

    /**
     * Defines the message structure of the `getGlobalSettings` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#getglobalsettings}
     */
    export type GetGlobalSettingsEvent = {
        event: 'getGlobalSettings';
    };

    /**
     * Defines the message structure of the `openUrl` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#openurl}
     */
    export type OpenUrlEvent = {
        event: 'openUrl';
        payload: {
            url: string;
        };
    };

    /**
     * Defines the message structure of the `logMessage` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#logmessage}
     */
    export type LogMessageEvent = {
        event: 'logMessage';
        payload: {
            message: string;
        };
    };

    /**
     * Defines the message structure of the `sendToPlugin` event sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#sendtoplugin}
     */
    export type SendToPluginEvent = {
        event: 'sendToPlugin';
        action?: string;
        context?: string;
        payload: unknown;
    };

    /**
     * Defines the types of messages that can be received from the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-received}
     */
    export type EventReceived = DidReceiveGlobalSettingsEvent | DidReceiveSettingsEvent | SendToPropertyInspectorEvent;

    /**
     * Defines the message structure of the `didReceiveSettings` received from the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-received/#didreceivesettings}
     */
    export type DidReceiveGlobalSettingsEvent = {
        event: 'didReceiveGlobalSettings';
        payload: SettingsPayload;
    };

    /**
     * Defines the message structure of the `didReceiveSettings` received from the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-received/#didreceiveglobalsettings}
     */
    export type DidReceiveSettingsEvent = {
        action: string;
        context: string;
        device: string;
        event: 'didReceiveSettings';
        payload: ActionSettingsPayload;
    };

    /**
     * Defines the message structure of the `sendToPropertyInspector` received from the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-received/#sendtopropertyinspector}
     */
    export type SendToPropertyInspectorEvent = {
        action?: string;
        event: 'sendToPropertyInspector';
        context?: string;
        payload: any;
    };

    /**
     * Defines the payload relating to an action instance.
     */
    export type ActionSettingsPayload = {
        coordinates?: {
            column: number;
            row: number;
        };
    } & SettingsPayload;

    /**
     * Defines the structure of settings.
     */
    export type SettingsPayload = {
        settings: Record<string, unknown>;
    };

    /**
     * All possible events sent and received between the Stream Deck, and the property inspector.
     */
    export type Event = EventSent | EventReceived;

    /**
     * Provides a helper type for converting an event to its corresponding type, by its unique event literal.
     */
    export type AsEvent<TEvent extends Event['event']> = Extract<Event, { event: TEvent }>;
}
