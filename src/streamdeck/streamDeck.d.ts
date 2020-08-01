// https://developer.elgato.com/documentation/stream-deck/sdk/registration-procedure/#Info-parameter

export interface Info {
    application: Application;
    colors: Colors;
    plugin: Plugin;
    devicePixelRatio: number;
    devices: Device[];
}

export interface Application {
    language: string;
    platform: string;
    version: string;
}

export interface Colors {
    buttonMouseOverBackgroundColor: string;
    buttonPressedBackgroundColor: string;
    buttonPressedBorderColor: string;
    buttonPressedTextColor: string;
    highlightColor: string;
}

export interface Plugin {
    version: string;
}

export interface Device {
    id: string;
    name: string;
    size: Size;
    type: DeviceType;
}

export interface Size {
    columns: number;
    rows: number;
}

export enum DeviceType {
    StreamDeck = 0,
    StreamDeckMini = 1,
    StreamDeckXL = 2,
    StreamDeckMobile = 3,
    CorsairGKeys = 4
}

// https://developer.elgato.com/documentation/stream-deck/sdk/registration-procedure/#inactioninfo-parameter

export interface ActionInfo {
    action: string;
    context: string;
    device: string;
    payload: Payload;
}

export interface Payload {
    settings: any;
    coordinates: Coordinates;
}

export interface Coordinates {
    column: number;
    row: number;
}
