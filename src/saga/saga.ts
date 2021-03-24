import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, put, call, takeEvery, all } from 'redux-saga/effects';
import { ParamConversionPayload, ParamConverterPayload } from '../types';
import { actions } from './slice';

const paramConverters = {};

function* convertParams(action: PayloadAction<ParamConversionPayload>) {
  for (const [param, value] of Object.entries(action.payload.params)) {
    const converter = action.payload.overrides && action.payload.overrides[param] ? action.payload.overrides[param] : param;
    if (paramConverters[converter]) {
      yield call(paramConverters[converter], [param, value]);
    } else {
      yield put(
        actions.setParam({
          param,
          value,
        }),
      );
    }
  }
  yield put(actions.setHasLoaded(true));
}

function* addParamConverter(action: PayloadAction<ParamConverterPayload>) {
  paramConverters[action.payload.param] = action.payload.fn;
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.convertParams.type, convertParams),
    takeEvery(actions.addParamConverter.type, addParamConverter)
  ]);
}
