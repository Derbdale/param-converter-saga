import React from 'react';
import { ParamConversionOverrides } from './types';
export declare const renderWithParamConverter: (BaseComponent: React.Component | React.FunctionComponent, overrides?: ParamConversionOverrides | undefined, loader?: React.Component | React.FunctionComponent | null) => (routeProps: any) => JSX.Element;
export * as slice from './saga/slice';
export { default as saga } from './saga/saga';
export * as types from './types';
