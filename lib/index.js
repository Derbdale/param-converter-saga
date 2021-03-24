Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRedux = require('react-redux');
var reactRouter = require('react-router');
var toolkit = require('@reduxjs/toolkit');
var reduxInjectors = require('redux-injectors');
var effects = require('redux-saga/effects');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var initialState = {
    isLoading: true,
    params: {}
};
var routingSlice = toolkit.createSlice({
    name: 'routing',
    initialState: initialState,
    reducers: {
        convertParams: function (state, action) {
            state.isLoading = true;
        },
        setParam: function (state, action) {
            var _a;
            state.isLoading = false;
            state.params = __assign(__assign({}, state.params), (_a = {}, _a[action.payload.param] = action.payload.value, _a));
        },
        setHasLoaded: function (state, action) {
            state.isLoading = !action.payload;
        },
        addParamConverter: function (state, action) { },
    },
});
var selectIsLoading = toolkit.createSelector([function (state) { return state.routing || initialState; }], function (routing) { return routing.isLoading; });
var selectParams = toolkit.createSelector([function (state) { return state.routing || initialState; }], function (routing) { return routing.params; });
var actions = routingSlice.actions, reducer = routingSlice.reducer, sliceKey = routingSlice.name;
var convertParams$1 = actions.convertParams;

var slice = /*#__PURE__*/Object.freeze({
    __proto__: null,
    initialState: initialState,
    selectIsLoading: selectIsLoading,
    selectParams: selectParams,
    actions: actions,
    reducer: reducer,
    sliceKey: sliceKey,
    convertParams: convertParams$1
});

var paramConverters = {};
function convertParams(action) {
    var _i, _a, _b, param, value, converter;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _i = 0, _a = Object.entries(action.payload.params);
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                _b = _a[_i], param = _b[0], value = _b[1];
                converter = action.payload.overrides && action.payload.overrides[param] ? action.payload.overrides[param] : param;
                if (!paramConverters[converter]) return [3 /*break*/, 3];
                return [4 /*yield*/, effects.call(paramConverters[converter], [param, value])];
            case 2:
                _c.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, effects.put(actions.setParam({
                    param: param,
                    value: value,
                }))];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: return [4 /*yield*/, effects.put(actions.setHasLoaded(true))];
            case 7:
                _c.sent();
                return [2 /*return*/];
        }
    });
}
function addParamConverter(action) {
    return __generator(this, function (_a) {
        paramConverters[action.payload.param] = action.payload.fn;
        return [2 /*return*/];
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects.all([
                    effects.takeLatest(actions.convertParams.type, convertParams),
                    effects.takeEvery(actions.addParamConverter.type, addParamConverter)
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}

var types = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var ParamConverter = function (_a) {
    var Component = _a.component, overrides = _a.overrides, loader = _a.loader, props = __rest(_a, ["component", "overrides", "loader"]);
    reduxInjectors.useInjectReducer({ key: sliceKey, reducer: reducer });
    reduxInjectors.useInjectSaga({ key: sliceKey, saga: rootSaga });
    var dispatch = reactRedux.useDispatch();
    var isLoading = reactRedux.useSelector(selectIsLoading);
    var params = reactRouter.useParams();
    var updateParams = function () {
        dispatch(actions.convertParams({
            params: params,
            overrides: overrides,
        }));
    };
    React.useEffect(function () {
        dispatch(actions.convertParams({
            params: params,
            overrides: overrides
        }));
    }, []);
    return (isLoading ? loader : (React__default['default'].createElement(Component, __assign({ updateParams: updateParams }, props))));
};
var renderWithParamConverter = function (BaseComponent, overrides, loader) {
    if (overrides === void 0) { overrides = undefined; }
    if (loader === void 0) { loader = null; }
    return function (routeProps) { return (React__default['default'].createElement(ParamConverter, __assign({}, routeProps, { overrides: overrides, component: BaseComponent, loader: loader }))); };
};

exports.renderWithParamConverter = renderWithParamConverter;
exports.saga = rootSaga;
exports.slice = slice;
exports.types = types;
//# sourceMappingURL=index.js.map
