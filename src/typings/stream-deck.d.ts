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
    export type ActionInfo = {
        action: string;
        context: string;
        device: string;
        payload: {
            coordinates?: {
                column: number;
                row: number;
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            settings?: Record<string, any>;
        };
    };

    /**
     * Defines the types of messages that can be sent to the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent}
     */
    export type MessageSent =
        | {
              event: 'setSettings';
              context: string;
              payload: unknown;
          }
        | {
              event: 'getSettings';
              context: string;
          }
        | {
              event: 'setGlobalSettings';
              payload: unknown;
          }
        | {
              event: 'getGlobalSettings';
          }
        | {
              event: 'openUrl';
              payload: {
                  url: string;
              };
          }
        | {
              event: 'logMessage';
              payload: {
                  message: string;
              };
          }
        | {
              event: 'sendToPlugin';
              action?: string;
              context?: string;
              payload: unknown;
          };

    /**
     * Defines the types of messages that can be received from the Stream Deck.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-received}
     */
    export type MessageReceived =
        | ({
              event: 'didReceiveGlobalSettings';
              action: string;
          } & AnyPayload)
        | ({
              event: 'didReceiveSettings';
          } & AnyPayload)
        | ({
              action?: string;
              event: 'sendToPropertyInspector';
              context?: string;
          } & AnyPayload);

    /**
     * Defines the type of messages that are handled client-side, and therefore require the `any` keyword.
     */
    type AnyPayload = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload: any;
    };

    /**
     * All possible messages sent and received between the Stream Deck, and the property inspector.
     */
    export type Message = MessageSent | MessageReceived;

    /**
     * A helper type for extracting the message type by the messages `event` value.
     */
    export type Event<TEvent extends Message['event']> = Extract<Message, { event: TEvent }>;
}
