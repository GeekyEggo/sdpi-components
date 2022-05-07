/**
 * Initializes a new instance of `T`.
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

/**
 * An event triggered by an HTML input element, that allows for the target to be typed.
 */
type HTMLInputEvent<Target> = InputEvent & { target: Target };

interface Window {
    /**
     * Called by the Stream Deck to enable registration of the property inspector.
     * @param inPort The port that should be used to create the WebSocket.
     * @param inPropertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
     * @param inRegisterEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
     * @param inInfo A json object containing information about the application.
     * @param inActionInfo A json object containing information about the action.
     */
    connectElgatoStreamDeckSocket?(inPort: string, inPropertyInspectorUUID: string, inRegisterEvent: string, inInfo: string, inActionInfo: string): void;

    /**
     * The SDPI Components library namespace.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SDPIComponents: any;
}
