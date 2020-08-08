declare module 'stream-deck' {
    export enum DeviceType {
        StreamDeck = 0,
        StreamDeckMini = 1,
        StreamDeckXL = 2,
        StreamDeckMobile = 3,
        CorsairGKeys = 4
    }

    export enum FontFamilyType {
        Arial = 1,
        ArialBlack = 2,
        ComicSansMS = 3,
        Courier = 4,
        CourierNew = 5,
        Georgia = 6,
        Impact = 7,
        MicrosoftSansSerif = 8,
        Symbol = 9,
        Tahoma = 10,
        TimesNewRoman = 11,
        TrebuchetMS = 12,
        Verdana = 13,
        Webdings = 14,
        Wingdings = 15
    }

    export enum FontStyleType {
        Regular = 0,
        Bold = 1,
        Italic = 2,
        BoldItalic = 3
    }

    export enum PlatformType {
        Mac = 0,
        Windows = 1
    }

    export enum TargetType {
        Both = 0,
        Hardware = 1,
        Software = 2
    }

    export enum TitleAlignmentType {
        Top = 0,
        Middle = 1,
        Bottom = 2
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
        uUID: string;
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
        settings: any;
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
