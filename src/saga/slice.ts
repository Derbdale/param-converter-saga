import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RoutingState, ParamConverterPayload, RootState, ParamConversionPayload, ParamPayload } from '../types';

export const initialState: RoutingState = {
  isLoading: true,
  params: {}
};

const routingSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    convertParams(state, action: PayloadAction<ParamConversionPayload>) {
      state.isLoading = true;
    },
    setParam(state, action: PayloadAction<ParamPayload>) {
      state.isLoading = false;
      state.params = {
        ...state.params,
        [action.payload.param]: action.payload.value,
      };
    },
    setHasLoaded(state, action: PayloadAction<boolean>) {
      state.isLoading = !action.payload;
    },
    addParamConverter(state, action: PayloadAction<ParamConverterPayload>) {},
  },
});

export const selectIsLoading = createSelector(
  [(state: RootState) => state.routing || initialState],
  routing => routing.isLoading,
);

export const selectParams = createSelector(
  [(state: RootState) => state.routing || initialState],
  routing => routing.params,
);

export const { actions, reducer, name: sliceKey } = routingSlice;
export const { convertParams } = actions;
