declare module 'stream-deck' {
    export const enum DeviceType {
        StreamDeck = 'kESDSDKDeviceType_StreamDeck',
        StreamDeckMini = 'kESDSDKDeviceType_StreamDeckMini',
        StreamDeckXL = 'kESDSDKDeviceType_StreamDeckXL',
        StreamDeckMobile = 'kESDSDKDeviceType_StreamDeckMobile',
        CorsairGKeys = 'kESDSDKDeviceType_CorsairGKeys'
    }

    export const enum FontFamilyType {
        Arial = 'Arial',
        ArialBlack = 'Arial Black',
        ComicSansMS = 'Comic Sans MS',
        Courier = 'Courier',
        CourierNew = 'Courier New',
        Georgia = 'Georgia',
        Impact = 'Impact',
        MicrosoftSansSerif = 'Microsoft Sans Serif',
        Symbol = 'Symbol',
        Tahoma = 'Tahoma',
        TimesNewRoman = 'Times New Roman',
        TrebuchetMS = 'Trebuchet MS',
        Verdana = 'Verdana',
        Webdings = 'Webdings',
        Wingdings = 'Wingdings'
    }

    export const enum FontStyleType {
        Regular = 'Regular',
        Bold = 'Bold',
        Italic = 'Italic',
        BoldItalic = 'Bold Italic'
    }

    export const enum PlatformType {
        Mac = 'mac',
        Windows = 'windows'
    }

    export const enum TargetType {
        Both = 0,
        Hardware = 1,
        Software = 2
    }

    export const enum TitleAlignmentType {
        Top = 'top',
        Middle = 'middle',
        Bottom = 'bottom'
    }

    export interface ActionEventArgs extends StreamDeckEventArgs {
        action: string;
        context: string;
        device: string;
    }

    export interface ActionEventArgsWithPayload<TPayload> extends StreamDeckEventArgsWithPayload<TPayload> {
        action: string;
        context: string;
        device: string;
    }

    export interface ActionMessage<TPayload> extends ContextMessageWithPayload<TPayload> {
        action: string;
    }

    export interface ActionPayload extends SettingsPayload {
        coordinates: Coordinates;
        isInMultiAction: boolean;
    }

    export interface AppearancePayload extends ActionPayload {
        state: number;
    }

    export interface Application {
        language: string;
        platform: PlatformType;
        version: string;
    }

    export interface ApplicationPayload {
        application: string;
    }

    export interface ContextMessage extends Message {
        context: string;
    }

    export interface ContextMessageWithPayload<TPayload> extends MessageWithPayload<TPayload> {
        context: string;
    }

    export interface Coordinates {
        column: number;
        row: number;
    }

    export interface DeviceConnectEventArgs extends DeviceEventArgs {
        deviceInfo: DeviceInfo;
    }

    export interface DeviceEventArgs extends StreamDeckEventArgs {
        device: string;
    }

    export interface DeviceInfo {
        name: string;
        size: Size;
        type: DeviceType;
    }

    export interface DeviceMessage<TPayload> extends ContextMessageWithPayload<TPayload> {
        device: string;
    }

    export interface IdentifiableDeviceInfo extends DeviceInfo {
        id: string;
    }

    export interface KeyPayload extends AppearancePayload {
        userDesiredState: number;
    }

    export interface LogPayload {
        message: string;
    }

    export interface Message {
        event: string;
    }

    export interface MessageWithPayload<TPayload> extends Message {
        payload: TPayload;
    }

    export interface PluginInfo {
        version: string;
    }

    export interface RegistrationInfo {
        application: Application;
        devicePixelRatio: number;
        plugin: PluginInfo;
        devices: IdentifiableDeviceInfo[];
    }

    export interface RegistrationMessage extends Message {
        UUID: string;
    }

    export interface RegistrationParameters {
        event: string;
        info: RegistrationInfo;
        port: number;
        pluginUUID: string;
    }

    export interface SetImagePayload extends TargetPayload {
        image: string;
    }

    export interface SetStatePayload {
        state: number;
    }

    export interface SettingsPayload {
        settings: Record<string, unknown>;
    }

    export interface SetTitlePayload extends TargetPayload {
        title: string;
    }

    export interface Size {
        columns: number;
        rows: number;
    }

    export interface StreamDeckEventArgs {
        event: string;
    }

    export interface StreamDeckEventArgsWithPayload<TPayload> extends StreamDeckEventArgs {
        payload: TPayload;
    }

    export interface SwitchToProfilePayload {
        profile: string;
    }

    export interface TargetPayload {
        state: number | null;
        target: TargetType;
    }

    export interface TitleParameters {
        fontFamily: string;
        fontSize: number;
        fontStyle: string;
        fontUnderline: boolean;
        showTitle: boolean;
        titleAlignment: TitleAlignmentType;
        titleColor: string;
    }

    export interface TitlePayload {
        title: string;
        titleParameters: TitleParameters;
    }

    export interface UrlPayload {
        url: string;
    }
}
