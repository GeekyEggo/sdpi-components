declare module 'sharp-deck' {
    export interface PropertyInspectorPayload<TData> {
        event?: string
        requestId: string;
        data?: TData;
    }
}
