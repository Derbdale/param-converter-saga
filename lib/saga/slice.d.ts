import { PayloadAction } from '@reduxjs/toolkit';
import { RoutingState, ParamConverterPayload, RootState, ParamConversionPayload, ParamPayload } from '../types';
export declare const initialState: RoutingState;
export declare const selectIsLoading: import("reselect").OutputSelector<RootState, boolean, (res: RoutingState) => boolean>;
export declare const selectParams: import("reselect").OutputSelector<RootState, {
    [key: string]: any;
}, (res: RoutingState) => {
    [key: string]: any;
}>;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    convertParams(state: import("immer/dist/internal").WritableDraft<RoutingState>, action: PayloadAction<ParamConversionPayload>): void;
    setParam(state: import("immer/dist/internal").WritableDraft<RoutingState>, action: PayloadAction<ParamPayload>): void;
    setHasLoaded(state: import("immer/dist/internal").WritableDraft<RoutingState>, action: PayloadAction<boolean>): void;
    addParamConverter(state: import("immer/dist/internal").WritableDraft<RoutingState>, action: PayloadAction<ParamConverterPayload>): void;
}>, reducer: import("redux").Reducer<RoutingState, import("redux").AnyAction>, sliceKey: "routing";
export declare const convertParams: import("@reduxjs/toolkit").ActionCreatorWithPayload<ParamConversionPayload, string>;
