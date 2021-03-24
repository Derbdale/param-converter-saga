import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouteComponentProps, useParams } from 'react-router';

import {
  actions as routingActions,
  selectIsLoading,
} from './saga/slice';

import {
  useInjectReducer,
  useInjectSaga,
} from 'redux-injectors';
import { reducer, sliceKey } from './saga/slice';
import RoutingSaga from './saga/saga';
import { ParamConversionOverrides } from './types';

const ParamConverter = ({ component: Component, overrides, loader, ...props }) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: RoutingSaga });

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const params = useParams();

  const updateParams = () => {
    dispatch(
      routingActions.convertParams({
        params,
        overrides,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      routingActions.convertParams({
        params,
        overrides
      }),
    );
  }, []);

  return (isLoading ? loader : (
    <Component updateParams={updateParams} {...props} />
  ));
};

export const renderWithParamConverter = (BaseComponent: React.Component|React.FunctionComponent, overrides: ParamConversionOverrides | undefined = undefined, loader: React.Component | React.FunctionComponent | null = null) => {
  return routeProps => (
    <ParamConverter
      {...routeProps}
      overrides={overrides}
      component={BaseComponent}
      loader={loader}
    />
  );
};


export * as slice from './saga/slice';
export { default as saga } from './saga/saga';
export * as types from './types';