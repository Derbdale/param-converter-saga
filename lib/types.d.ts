export declare type ParamConverterFunction = ([param, value]: [any, any]) => void;
export interface ParamConversionOverrides {
    [key: string]: string;
}
export interface ParamConversionPayload {
    params: {
        [key: string]: any;
    };
    overrides?: ParamConversionOverrides;
}
export interface ParamPayload {
    param: string;
    value: any;
}
export interface ParamConverterPayload {
    param: string;
    fn: ParamConverterFunction;
}
export interface RoutingState {
    isLoading: boolean;
    params: {
        [key: string]: any;
    };
}
export interface RootState {
    routing: RoutingState;
}
