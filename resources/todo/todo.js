function Kb(W) {
  return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W;
}
var v0 = { exports: {} }, Yp = {}, h0 = { exports: {} }, Rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function Zb() {
  if (K1)
    return Rt;
  K1 = 1;
  var W = Symbol.for("react.element"), K = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), st = Symbol.for("react.provider"), ye = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), qe = Symbol.for("react.suspense"), ie = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), he = Symbol.iterator;
  function X(R) {
    return R === null || typeof R != "object" ? null : (R = he && R[he] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var be = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ue = Object.assign, we = {};
  function dt(R, $, Se) {
    this.props = R, this.context = $, this.refs = we, this.updater = Se || be;
  }
  dt.prototype.isReactComponent = {}, dt.prototype.setState = function(R, $) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, $, "setState");
  }, dt.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function xn() {
  }
  xn.prototype = dt.prototype;
  function Qt(R, $, Se) {
    this.props = R, this.context = $, this.refs = we, this.updater = Se || be;
  }
  var tt = Qt.prototype = new xn();
  tt.constructor = Qt, ue(tt, dt.prototype), tt.isPureReactComponent = !0;
  var Fe = Array.isArray, xt = Object.prototype.hasOwnProperty, Re = { current: null }, Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(R, $, Se) {
    var Be, $e = {}, vt = null, ct = null;
    if ($ != null)
      for (Be in $.ref !== void 0 && (ct = $.ref), $.key !== void 0 && (vt = "" + $.key), $)
        xt.call($, Be) && !Me.hasOwnProperty(Be) && ($e[Be] = $[Be]);
    var ht = arguments.length - 2;
    if (ht === 1)
      $e.children = Se;
    else if (1 < ht) {
      for (var ft = Array(ht), tn = 0; tn < ht; tn++)
        ft[tn] = arguments[tn + 2];
      $e.children = ft;
    }
    if (R && R.defaultProps)
      for (Be in ht = R.defaultProps, ht)
        $e[Be] === void 0 && ($e[Be] = ht[Be]);
    return { $$typeof: W, type: R, key: vt, ref: ct, props: $e, _owner: Re.current };
  }
  function wn(R, $) {
    return { $$typeof: W, type: R.type, key: $, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function mn(R) {
    return typeof R == "object" && R !== null && R.$$typeof === W;
  }
  function Wt(R) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(Se) {
      return $[Se];
    });
  }
  var St = /\/+/g;
  function en(R, $) {
    return typeof R == "object" && R !== null && R.key != null ? Wt("" + R.key) : $.toString(36);
  }
  function We(R, $, Se, Be, $e) {
    var vt = typeof R;
    (vt === "undefined" || vt === "boolean") && (R = null);
    var ct = !1;
    if (R === null)
      ct = !0;
    else
      switch (vt) {
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case W:
            case K:
              ct = !0;
          }
      }
    if (ct)
      return ct = R, $e = $e(ct), R = Be === "" ? "." + en(ct, 0) : Be, Fe($e) ? (Se = "", R != null && (Se = R.replace(St, "$&/") + "/"), We($e, $, Se, "", function(tn) {
        return tn;
      })) : $e != null && (mn($e) && ($e = wn($e, Se + (!$e.key || ct && ct.key === $e.key ? "" : ("" + $e.key).replace(St, "$&/") + "/") + R)), $.push($e)), 1;
    if (ct = 0, Be = Be === "" ? "." : Be + ":", Fe(R))
      for (var ht = 0; ht < R.length; ht++) {
        vt = R[ht];
        var ft = Be + en(vt, ht);
        ct += We(vt, $, Se, ft, $e);
      }
    else if (ft = X(R), typeof ft == "function")
      for (R = ft.call(R), ht = 0; !(vt = R.next()).done; )
        vt = vt.value, ft = Be + en(vt, ht++), ct += We(vt, $, Se, ft, $e);
    else if (vt === "object")
      throw $ = String(R), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return ct;
  }
  function rt(R, $, Se) {
    if (R == null)
      return R;
    var Be = [], $e = 0;
    return We(R, Be, "", "", function(vt) {
      return $.call(Se, vt, $e++);
    }), Be;
  }
  function wt(R) {
    if (R._status === -1) {
      var $ = R._result;
      $ = $(), $.then(function(Se) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = Se);
      }, function(Se) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = Se);
      }), R._status === -1 && (R._status = 0, R._result = $);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var at = { current: null }, B = { transition: null }, ge = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: B, ReactCurrentOwner: Re };
  return Rt.Children = { map: rt, forEach: function(R, $, Se) {
    rt(R, function() {
      $.apply(this, arguments);
    }, Se);
  }, count: function(R) {
    var $ = 0;
    return rt(R, function() {
      $++;
    }), $;
  }, toArray: function(R) {
    return rt(R, function($) {
      return $;
    }) || [];
  }, only: function(R) {
    if (!mn(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Rt.Component = dt, Rt.Fragment = L, Rt.Profiler = Xe, Rt.PureComponent = Qt, Rt.StrictMode = Pe, Rt.Suspense = qe, Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, Rt.cloneElement = function(R, $, Se) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Be = ue({}, R.props), $e = R.key, vt = R.ref, ct = R._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (vt = $.ref, ct = Re.current), $.key !== void 0 && ($e = "" + $.key), R.type && R.type.defaultProps)
        var ht = R.type.defaultProps;
      for (ft in $)
        xt.call($, ft) && !Me.hasOwnProperty(ft) && (Be[ft] = $[ft] === void 0 && ht !== void 0 ? ht[ft] : $[ft]);
    }
    var ft = arguments.length - 2;
    if (ft === 1)
      Be.children = Se;
    else if (1 < ft) {
      ht = Array(ft);
      for (var tn = 0; tn < ft; tn++)
        ht[tn] = arguments[tn + 2];
      Be.children = ht;
    }
    return { $$typeof: W, type: R.type, key: $e, ref: vt, props: Be, _owner: ct };
  }, Rt.createContext = function(R) {
    return R = { $$typeof: ye, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: st, _context: R }, R.Consumer = R;
  }, Rt.createElement = Ie, Rt.createFactory = function(R) {
    var $ = Ie.bind(null, R);
    return $.type = R, $;
  }, Rt.createRef = function() {
    return { current: null };
  }, Rt.forwardRef = function(R) {
    return { $$typeof: S, render: R };
  }, Rt.isValidElement = mn, Rt.lazy = function(R) {
    return { $$typeof: ee, _payload: { _status: -1, _result: R }, _init: wt };
  }, Rt.memo = function(R, $) {
    return { $$typeof: ie, type: R, compare: $ === void 0 ? null : $ };
  }, Rt.startTransition = function(R) {
    var $ = B.transition;
    B.transition = {};
    try {
      R();
    } finally {
      B.transition = $;
    }
  }, Rt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Rt.useCallback = function(R, $) {
    return at.current.useCallback(R, $);
  }, Rt.useContext = function(R) {
    return at.current.useContext(R);
  }, Rt.useDebugValue = function() {
  }, Rt.useDeferredValue = function(R) {
    return at.current.useDeferredValue(R);
  }, Rt.useEffect = function(R, $) {
    return at.current.useEffect(R, $);
  }, Rt.useId = function() {
    return at.current.useId();
  }, Rt.useImperativeHandle = function(R, $, Se) {
    return at.current.useImperativeHandle(R, $, Se);
  }, Rt.useInsertionEffect = function(R, $) {
    return at.current.useInsertionEffect(R, $);
  }, Rt.useLayoutEffect = function(R, $) {
    return at.current.useLayoutEffect(R, $);
  }, Rt.useMemo = function(R, $) {
    return at.current.useMemo(R, $);
  }, Rt.useReducer = function(R, $, Se) {
    return at.current.useReducer(R, $, Se);
  }, Rt.useRef = function(R) {
    return at.current.useRef(R);
  }, Rt.useState = function(R) {
    return at.current.useState(R);
  }, Rt.useSyncExternalStore = function(R, $, Se) {
    return at.current.useSyncExternalStore(R, $, Se);
  }, Rt.useTransition = function() {
    return at.current.useTransition();
  }, Rt.version = "18.2.0", Rt;
}
var Wp = { exports: {} };
Wp.exports;
var Z1;
function Jb() {
  return Z1 || (Z1 = 1, function(W, K) {
    var L = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    L.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Pe = "18.2.0", Xe = Symbol.for("react.element"), st = Symbol.for("react.portal"), ye = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), ee = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), dt = Symbol.for("react.offscreen"), xn = Symbol.iterator, Qt = "@@iterator";
      function tt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = xn && h[xn] || h[Qt];
        return typeof C == "function" ? C : null;
      }
      var Fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, xt = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, wn = null;
      function mn(h) {
        wn = h;
      }
      Ie.setExtraStackFrame = function(h) {
        wn = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        wn && (h += wn);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Wt = !1, St = !1, en = !1, We = !1, rt = !1, wt = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: xt,
        ReactCurrentOwner: Me
      };
      wt.ReactDebugCurrentFrame = Ie, wt.ReactCurrentActQueue = Re;
      function at(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          ge("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          ge("error", h, M);
        }
      }
      function ge(h, C, M) {
        {
          var j = wt.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", M = M.concat([Z]));
          var xe = M.map(function(de) {
            return String(de);
          });
          xe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, xe);
        }
      }
      var R = {};
      function $(h, C) {
        {
          var M = h.constructor, j = M && (M.displayName || M.name) || "ReactClass", Z = j + "." + C;
          if (R[Z])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), R[Z] = !0;
        }
      }
      var Se = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          $(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, j) {
          $(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, j) {
          $(h, "setState");
        }
      }, Be = Object.assign, $e = {};
      Object.freeze($e);
      function vt(h, C, M) {
        this.props = h, this.context = C, this.refs = $e, this.updater = M || Se;
      }
      vt.prototype.isReactComponent = {}, vt.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, vt.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(h, C) {
          Object.defineProperty(vt.prototype, h, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in ct)
          ct.hasOwnProperty(ft) && ht(ft, ct[ft]);
      }
      function tn() {
      }
      tn.prototype = vt.prototype;
      function er(h, C, M) {
        this.props = h, this.context = C, this.refs = $e, this.updater = M || Se;
      }
      var tr = er.prototype = new tn();
      tr.constructor = er, Be(tr, vt.prototype), tr.isPureReactComponent = !0;
      function Hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var mr = Array.isArray;
      function yn(h) {
        return mr(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Vn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function Un(h) {
        if (Vn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), zn(h);
      }
      function wr(h, C, M) {
        var j = h.displayName;
        if (j)
          return j;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? M + "(" + Z + ")" : M;
      }
      function yr(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ye:
            return "Fragment";
          case st:
            return "Portal";
          case qe:
            return "Profiler";
          case S:
            return "StrictMode";
          case X:
            return "Suspense";
          case be:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ee:
              var C = h;
              return yr(C) + ".Consumer";
            case ie:
              var M = h;
              return yr(M._context) + ".Provider";
            case he:
              return wr(h, h.render, "ForwardRef");
            case ue:
              var j = h.displayName || null;
              return j !== null ? j : Pn(h.type) || "Memo";
            case we: {
              var Z = h, xe = Z._payload, de = Z._init;
              try {
                return Pn(de(xe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var oa = Object.prototype.hasOwnProperty, sa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, ca, rr;
      rr = {};
      function _r(h) {
        if (oa.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function on(h) {
        if (oa.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function fa(h, C) {
        var M = function() {
          gr || (gr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function da(h, C) {
        var M = function() {
          ca || (ca = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function pa(h) {
        if (typeof h.ref == "string" && Me.current && h.__self && Me.current.stateNode !== h.__self) {
          var C = Pn(Me.current.type);
          rr[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), rr[C] = !0);
        }
      }
      var ae = function(h, C, M, j, Z, xe, de) {
        var Qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Xe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: de,
          // Record the component responsible for creating this element.
          _owner: xe
        };
        return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
      };
      function Ne(h, C, M) {
        var j, Z = {}, xe = null, de = null, Qe = null, ot = null;
        if (C != null) {
          _r(C) && (de = C.ref, pa(C)), on(C) && (Un(C.key), xe = "" + C.key), Qe = C.__self === void 0 ? null : C.__self, ot = C.__source === void 0 ? null : C.__source;
          for (j in C)
            oa.call(C, j) && !sa.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var At = arguments.length - 2;
        if (At === 1)
          Z.children = M;
        else if (At > 1) {
          for (var Ht = Array(At), Vt = 0; Vt < At; Vt++)
            Ht[Vt] = arguments[Vt + 2];
          Object.freeze && Object.freeze(Ht), Z.children = Ht;
        }
        if (h && h.defaultProps) {
          var Pt = h.defaultProps;
          for (j in Pt)
            Z[j] === void 0 && (Z[j] = Pt[j]);
        }
        if (xe || de) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          xe && fa(Z, rn), de && da(Z, rn);
        }
        return ae(h, xe, de, Qe, ot, Me.current, Z);
      }
      function lt(h, C) {
        var M = ae(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function zt(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = Be({}, h.props), xe = h.key, de = h.ref, Qe = h._self, ot = h._source, At = h._owner;
        if (C != null) {
          _r(C) && (de = C.ref, At = Me.current), on(C) && (Un(C.key), xe = "" + C.key);
          var Ht;
          h.type && h.type.defaultProps && (Ht = h.type.defaultProps);
          for (j in C)
            oa.call(C, j) && !sa.hasOwnProperty(j) && (C[j] === void 0 && Ht !== void 0 ? Z[j] = Ht[j] : Z[j] = C[j]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          Z.children = M;
        else if (Vt > 1) {
          for (var Pt = Array(Vt), rn = 0; rn < Vt; rn++)
            Pt[rn] = arguments[rn + 2];
          Z.children = Pt;
        }
        return ae(h.type, xe, de, Qe, ot, At, Z);
      }
      function Dt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Xe;
      }
      var _n = ".", cn = ":";
      function Sr(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return M[Z];
        });
        return "$" + j;
      }
      var Ft = !1, Gn = /\/+/g;
      function Ut(h) {
        return h.replace(Gn, "$&/");
      }
      function Gt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Un(h.key), Sr("" + h.key)) : C.toString(36);
      }
      function Ka(h, C, M, j, Z) {
        var xe = typeof h;
        (xe === "undefined" || xe === "boolean") && (h = null);
        var de = !1;
        if (h === null)
          de = !0;
        else
          switch (xe) {
            case "string":
            case "number":
              de = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Xe:
                case st:
                  de = !0;
              }
          }
        if (de) {
          var Qe = h, ot = Z(Qe), At = j === "" ? _n + Gt(Qe, 0) : j;
          if (yn(ot)) {
            var Ht = "";
            At != null && (Ht = Ut(At) + "/"), Ka(ot, C, Ht, "", function(Wf) {
              return Wf;
            });
          } else
            ot != null && (Dt(ot) && (ot.key && (!Qe || Qe.key !== ot.key) && Un(ot.key), ot = lt(
              ot,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ot.key && (!Qe || Qe.key !== ot.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ut("" + ot.key) + "/"
              ) : "") + At
            )), C.push(ot));
          return 1;
        }
        var Vt, Pt, rn = 0, bt = j === "" ? _n : j + cn;
        if (yn(h))
          for (var El = 0; El < h.length; El++)
            Vt = h[El], Pt = bt + Gt(Vt, El), rn += Ka(Vt, C, M, Pt, Z);
        else {
          var Gu = tt(h);
          if (typeof Gu == "function") {
            var as = h;
            Gu === as.entries && (Ft || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ft = !0);
            for (var is = Gu.call(as), Vi, ls = 0; !(Vi = is.next()).done; )
              Vt = Vi.value, Pt = bt + Gt(Vt, ls++), rn += Ka(Vt, C, M, Pt, Z);
          } else if (xe === "object") {
            var us = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (us === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : us) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function ba(h, C, M) {
        if (h == null)
          return h;
        var j = [], Z = 0;
        return Ka(h, j, "", "", function(xe) {
          return C.call(M, xe, Z++);
        }), j;
      }
      function dl(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function Xl(h, C, M) {
        ba(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Kl(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function pl(h) {
        if (!Dt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Za(h) {
        var C = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ie,
          _context: C
        };
        var M = !1, j = !1, Z = !1;
        {
          var xe = {
            $$typeof: ee,
            _context: C
          };
          Object.defineProperties(xe, {
            Provider: {
              get: function() {
                return j || (j = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(de) {
                C.Provider = de;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(de) {
                C._currentValue = de;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(de) {
                C._currentValue2 = de;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(de) {
                C._threadCount = de;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(de) {
                Z || (at("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", de), Z = !0);
              }
            }
          }), C.Consumer = xe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Ja = -1, ka = 0, Mi = 1, Vr = 2;
      function Pr(h) {
        if (h._status === Ja) {
          var C = h._result, M = C();
          if (M.then(function(xe) {
            if (h._status === ka || h._status === Ja) {
              var de = h;
              de._status = Mi, de._result = xe;
            }
          }, function(xe) {
            if (h._status === ka || h._status === Ja) {
              var de = h;
              de._status = Vr, de._result = xe;
            }
          }), h._status === Ja) {
            var j = h;
            j._status = ka, j._result = M;
          }
        }
        if (h._status === Mi) {
          var Z = h._result;
          return Z === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function va(h) {
        var C = {
          // We use these fields to store the result.
          _status: Ja,
          _result: h
        }, M = {
          $$typeof: we,
          _payload: C,
          _init: Pr
        };
        {
          var j, Z;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(xe) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = xe, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(xe) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = xe, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === ue ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: he,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(j) {
              M = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ye || h === qe || rt || h === S || h === X || h === be || We || h === dt || Wt || St || en || typeof h == "object" && h !== null && (h.$$typeof === we || h.$$typeof === ue || h.$$typeof === ie || h.$$typeof === ee || h.$$typeof === he || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        I(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(Z) {
              j = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return M;
      }
      function le() {
        var h = Fe.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function pt(h) {
        var C = le();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Et(h) {
        var C = le();
        return C.useState(h);
      }
      function it(h, C, M) {
        var j = le();
        return j.useReducer(h, C, M);
      }
      function ze(h) {
        var C = le();
        return C.useRef(h);
      }
      function An(h, C) {
        var M = le();
        return M.useEffect(h, C);
      }
      function qt(h, C) {
        var M = le();
        return M.useInsertionEffect(h, C);
      }
      function Xt(h, C) {
        var M = le();
        return M.useLayoutEffect(h, C);
      }
      function Er(h, C) {
        var M = le();
        return M.useCallback(h, C);
      }
      function ci(h, C) {
        var M = le();
        return M.useMemo(h, C);
      }
      function Kt(h, C, M) {
        var j = le();
        return j.useImperativeHandle(h, C, M);
      }
      function Br(h, C) {
        {
          var M = le();
          return M.useDebugValue(h, C);
        }
      }
      function Wo() {
        var h = le();
        return h.useTransition();
      }
      function fi(h) {
        var C = le();
        return C.useDeferredValue(h);
      }
      function ut() {
        var h = le();
        return h.useId();
      }
      function Zl(h, C, M) {
        var j = le();
        return j.useSyncExternalStore(h, C, M);
      }
      var Ui = 0, vl, $r, Go, br, qo, Xo, Ko;
      function Jl() {
      }
      Jl.__reactDisabledLog = !0;
      function Vu() {
        {
          if (Ui === 0) {
            vl = console.log, $r = console.info, Go = console.warn, br = console.error, qo = console.group, Xo = console.groupCollapsed, Ko = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Jl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ui++;
        }
      }
      function Ai() {
        {
          if (Ui--, Ui === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Be({}, h, {
                value: vl
              }),
              info: Be({}, h, {
                value: $r
              }),
              warn: Be({}, h, {
                value: Go
              }),
              error: Be({}, h, {
                value: br
              }),
              group: Be({}, h, {
                value: qo
              }),
              groupCollapsed: Be({}, h, {
                value: Xo
              }),
              groupEnd: Be({}, h, {
                value: Ko
              })
            });
          }
          Ui < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = wt.ReactCurrentDispatcher, Da;
      function hl(h, C, M) {
        {
          if (Da === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              Da = j && j[1] || "";
            }
          return `
` + Da + h;
        }
      }
      var pi = !1, eu;
      {
        var tu = typeof WeakMap == "function" ? WeakMap : Map;
        eu = new tu();
      }
      function ml(h, C) {
        if (!h || pi)
          return "";
        {
          var M = eu.get(h);
          if (M !== void 0)
            return M;
        }
        var j;
        pi = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var xe;
        xe = di.current, di.current = null, Vu();
        try {
          if (C) {
            var de = function() {
              throw Error();
            };
            if (Object.defineProperty(de.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(de, []);
              } catch (bt) {
                j = bt;
              }
              Reflect.construct(h, [], de);
            } else {
              try {
                de.call();
              } catch (bt) {
                j = bt;
              }
              h.call(de.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bt) {
              j = bt;
            }
            h();
          }
        } catch (bt) {
          if (bt && j && typeof bt.stack == "string") {
            for (var Qe = bt.stack.split(`
`), ot = j.stack.split(`
`), At = Qe.length - 1, Ht = ot.length - 1; At >= 1 && Ht >= 0 && Qe[At] !== ot[Ht]; )
              Ht--;
            for (; At >= 1 && Ht >= 0; At--, Ht--)
              if (Qe[At] !== ot[Ht]) {
                if (At !== 1 || Ht !== 1)
                  do
                    if (At--, Ht--, Ht < 0 || Qe[At] !== ot[Ht]) {
                      var Vt = `
` + Qe[At].replace(" at new ", " at ");
                      return h.displayName && Vt.includes("<anonymous>") && (Vt = Vt.replace("<anonymous>", h.displayName)), typeof h == "function" && eu.set(h, Vt), Vt;
                    }
                  while (At >= 1 && Ht >= 0);
                break;
              }
          }
        } finally {
          pi = !1, di.current = xe, Ai(), Error.prepareStackTrace = Z;
        }
        var Pt = h ? h.displayName || h.name : "", rn = Pt ? hl(Pt) : "";
        return typeof h == "function" && eu.set(h, rn), rn;
      }
      function Zo(h, C, M) {
        return ml(h, !1);
      }
      function Jo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function gt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return ml(h, Jo(h));
        if (typeof h == "string")
          return hl(h);
        switch (h) {
          case X:
            return hl("Suspense");
          case be:
            return hl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case he:
              return Zo(h.render);
            case ue:
              return gt(h.type, C, M);
            case we: {
              var j = h, Z = j._payload, xe = j._init;
              try {
                return gt(xe(Z), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var es = {}, Pu = wt.ReactDebugCurrentFrame;
      function yl(h) {
        if (h) {
          var C = h._owner, M = gt(h.type, h._source, C ? C.type : null);
          Pu.setExtraStackFrame(M);
        } else
          Pu.setExtraStackFrame(null);
      }
      function ts(h, C, M, j, Z) {
        {
          var xe = Function.call.bind(oa);
          for (var de in h)
            if (xe(h, de)) {
              var Qe = void 0;
              try {
                if (typeof h[de] != "function") {
                  var ot = Error((j || "React class") + ": " + M + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ot.name = "Invariant Violation", ot;
                }
                Qe = h[de](C, de, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (At) {
                Qe = At;
              }
              Qe && !(Qe instanceof Error) && (yl(Z), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, de, typeof Qe), yl(null)), Qe instanceof Error && !(Qe.message in es) && (es[Qe.message] = !0, yl(Z), B("Failed %s type: %s", M, Qe.message), yl(null));
            }
        }
      }
      function _t(h) {
        if (h) {
          var C = h._owner, M = gt(h.type, h._source, C ? C.type : null);
          mn(M);
        } else
          mn(null);
      }
      var Bu;
      Bu = !1;
      function nu() {
        if (Me.current) {
          var h = Pn(Me.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ke(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function ei(h) {
        return h != null ? Ke(h.__source) : "";
      }
      var fn = {};
      function Yr(h) {
        var C = nu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Oa(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Yr(C);
          if (!fn[M]) {
            fn[M] = !0;
            var j = "";
            h && h._owner && h._owner !== Me.current && (j = " It was passed a child from " + Pn(h._owner.type) + "."), _t(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), _t(null);
          }
        }
      }
      function gl(h, C) {
        if (typeof h == "object") {
          if (yn(h))
            for (var M = 0; M < h.length; M++) {
              var j = h[M];
              Dt(j) && Oa(j, C);
            }
          else if (Dt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = tt(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var xe = Z.call(h), de; !(de = xe.next()).done; )
                Dt(de.value) && Oa(de.value, C);
          }
        }
      }
      function nn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === he || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            M = C.propTypes;
          else
            return;
          if (M) {
            var j = Pn(C);
            ts(M, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Bu) {
            Bu = !0;
            var Z = Pn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function dn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var j = C[M];
            if (j !== "children" && j !== "key") {
              _t(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), _t(null);
              break;
            }
          }
          h.ref !== null && (_t(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
        }
      }
      function ns(h, C, M) {
        var j = I(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = ei(C);
          xe ? Z += xe : Z += nu();
          var de;
          h === null ? de = "null" : yn(h) ? de = "array" : h !== void 0 && h.$$typeof === Xe ? (de = "<" + (Pn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, Z);
        }
        var Qe = Ne.apply(this, arguments);
        if (Qe == null)
          return Qe;
        if (j)
          for (var ot = 2; ot < arguments.length; ot++)
            gl(arguments[ot], h);
        return h === ye ? dn(Qe) : nn(Qe), Qe;
      }
      var ar = !1;
      function Ir(h) {
        var C = ns.bind(null, h);
        return C.type = h, ar || (ar = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function ti(h, C, M) {
        for (var j = zt.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          gl(arguments[Z], j.type);
        return nn(j), j;
      }
      function $u(h, C) {
        var M = xt.transition;
        xt.transition = {};
        var j = xt.transition;
        xt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (xt.transition = M, M === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var ru = !1, au = null;
      function Sl(h) {
        if (au === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = W && W[C];
            au = M.call(W, "timers").setImmediate;
          } catch {
            au = function(Z) {
              ru === !1 && (ru = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var xe = new MessageChannel();
              xe.port1.onmessage = Z, xe.port2.postMessage(void 0);
            };
          }
        return au(h);
      }
      var La = 0, ji = !1;
      function Yu(h) {
        {
          var C = La;
          La++, Re.current === null && (Re.current = []);
          var M = Re.isBatchingLegacy, j;
          try {
            if (Re.isBatchingLegacy = !0, j = h(), !M && Re.didScheduleLegacyUpdate) {
              var Z = Re.current;
              Z !== null && (Re.didScheduleLegacyUpdate = !1, Hi(Z));
            }
          } catch (Pt) {
            throw Fi(C), Pt;
          } finally {
            Re.isBatchingLegacy = M;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var xe = j, de = !1, Qe = {
              then: function(Pt, rn) {
                de = !0, xe.then(function(bt) {
                  Fi(C), La === 0 ? Iu(bt, Pt, rn) : Pt(bt);
                }, function(bt) {
                  Fi(C), rn(bt);
                });
              }
            };
            return !ji && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (ji = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Qe;
          } else {
            var ot = j;
            if (Fi(C), La === 0) {
              var At = Re.current;
              At !== null && (Hi(At), Re.current = null);
              var Ht = {
                then: function(Pt, rn) {
                  Re.current === null ? (Re.current = [], Iu(ot, Pt, rn)) : Pt(ot);
                }
              };
              return Ht;
            } else {
              var Vt = {
                then: function(Pt, rn) {
                  Pt(ot);
                }
              };
              return Vt;
            }
          }
        }
      }
      function Fi(h) {
        h !== La - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function Iu(h, C, M) {
        {
          var j = Re.current;
          if (j !== null)
            try {
              Hi(j), Sl(function() {
                j.length === 0 ? (Re.current = null, C(h)) : Iu(h, C, M);
              });
            } catch (Z) {
              M(Z);
            }
          else
            C(h);
        }
      }
      var vi = !1;
      function Hi(h) {
        if (!vi) {
          vi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            vi = !1;
          }
        }
      }
      var Qu = ns, rs = ti, ni = Ir, Wu = {
        map: ba,
        forEach: Xl,
        count: dl,
        toArray: Kl,
        only: pl
      };
      K.Children = Wu, K.Component = vt, K.Fragment = ye, K.Profiler = qe, K.PureComponent = er, K.StrictMode = S, K.Suspense = X, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt, K.cloneElement = rs, K.createContext = Za, K.createElement = Qu, K.createFactory = ni, K.createRef = Hr, K.forwardRef = zi, K.isValidElement = Dt, K.lazy = va, K.memo = ne, K.startTransition = $u, K.unstable_act = Yu, K.useCallback = Er, K.useContext = pt, K.useDebugValue = Br, K.useDeferredValue = fi, K.useEffect = An, K.useId = ut, K.useImperativeHandle = Kt, K.useInsertionEffect = qt, K.useLayoutEffect = Xt, K.useMemo = ci, K.useReducer = it, K.useRef = ze, K.useState = Et, K.useSyncExternalStore = Zl, K.useTransition = Wo, K.version = Pe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Wp, Wp.exports)), Wp.exports;
}
var ek = {};
ek.NODE_ENV === "production" ? h0.exports = Zb() : h0.exports = Jb();
var Wn = h0.exports;
const tk = /* @__PURE__ */ Kb(Wn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function nk() {
  if (J1)
    return Yp;
  J1 = 1;
  var W = Wn, K = Symbol.for("react.element"), L = Symbol.for("react.fragment"), Pe = Object.prototype.hasOwnProperty, Xe = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, st = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(S, qe, ie) {
    var ee, he = {}, X = null, be = null;
    ie !== void 0 && (X = "" + ie), qe.key !== void 0 && (X = "" + qe.key), qe.ref !== void 0 && (be = qe.ref);
    for (ee in qe)
      Pe.call(qe, ee) && !st.hasOwnProperty(ee) && (he[ee] = qe[ee]);
    if (S && S.defaultProps)
      for (ee in qe = S.defaultProps, qe)
        he[ee] === void 0 && (he[ee] = qe[ee]);
    return { $$typeof: K, type: S, key: X, ref: be, props: he, _owner: Xe.current };
  }
  return Yp.Fragment = L, Yp.jsx = ye, Yp.jsxs = ye, Yp;
}
var Ip = {}, eT;
function rk() {
  if (eT)
    return Ip;
  eT = 1;
  var W = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return W.NODE_ENV !== "production" && function() {
    var K = Wn, L = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), Xe = Symbol.for("react.fragment"), st = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), qe = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), we = Symbol.iterator, dt = "@@iterator";
    function xn(T) {
      if (T === null || typeof T != "object")
        return null;
      var I = we && T[we] || T[dt];
      return typeof I == "function" ? I : null;
    }
    var Qt = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function tt(T) {
      {
        for (var I = arguments.length, ne = new Array(I > 1 ? I - 1 : 0), le = 1; le < I; le++)
          ne[le - 1] = arguments[le];
        Fe("error", T, ne);
      }
    }
    function Fe(T, I, ne) {
      {
        var le = Qt.ReactDebugCurrentFrame, pt = le.getStackAddendum();
        pt !== "" && (I += "%s", ne = ne.concat([pt]));
        var Et = ne.map(function(it) {
          return String(it);
        });
        Et.unshift("Warning: " + I), Function.prototype.apply.call(console[T], console, Et);
      }
    }
    var xt = !1, Re = !1, Me = !1, Ie = !1, wn = !1, mn;
    mn = Symbol.for("react.module.reference");
    function Wt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === Xe || T === ye || wn || T === st || T === ee || T === he || Ie || T === ue || xt || Re || Me || typeof T == "object" && T !== null && (T.$$typeof === be || T.$$typeof === X || T.$$typeof === S || T.$$typeof === qe || T.$$typeof === ie || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === mn || T.getModuleId !== void 0));
    }
    function St(T, I, ne) {
      var le = T.displayName;
      if (le)
        return le;
      var pt = I.displayName || I.name || "";
      return pt !== "" ? ne + "(" + pt + ")" : ne;
    }
    function en(T) {
      return T.displayName || "Context";
    }
    function We(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && tt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case Xe:
          return "Fragment";
        case Pe:
          return "Portal";
        case ye:
          return "Profiler";
        case st:
          return "StrictMode";
        case ee:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case qe:
            var I = T;
            return en(I) + ".Consumer";
          case S:
            var ne = T;
            return en(ne._context) + ".Provider";
          case ie:
            return St(T, T.render, "ForwardRef");
          case X:
            var le = T.displayName || null;
            return le !== null ? le : We(T.type) || "Memo";
          case be: {
            var pt = T, Et = pt._payload, it = pt._init;
            try {
              return We(it(Et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var rt = Object.assign, wt = 0, at, B, ge, R, $, Se, Be;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function vt() {
      {
        if (wt === 0) {
          at = console.log, B = console.info, ge = console.warn, R = console.error, $ = console.group, Se = console.groupCollapsed, Be = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        wt++;
      }
    }
    function ct() {
      {
        if (wt--, wt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, T, {
              value: at
            }),
            info: rt({}, T, {
              value: B
            }),
            warn: rt({}, T, {
              value: ge
            }),
            error: rt({}, T, {
              value: R
            }),
            group: rt({}, T, {
              value: $
            }),
            groupCollapsed: rt({}, T, {
              value: Se
            }),
            groupEnd: rt({}, T, {
              value: Be
            })
          });
        }
        wt < 0 && tt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = Qt.ReactCurrentDispatcher, ft;
    function tn(T, I, ne) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (pt) {
            var le = pt.stack.trim().match(/\n( *(at )?)/);
            ft = le && le[1] || "";
          }
        return `
` + ft + T;
      }
    }
    var er = !1, tr;
    {
      var Hr = typeof WeakMap == "function" ? WeakMap : Map;
      tr = new Hr();
    }
    function mr(T, I) {
      if (!T || er)
        return "";
      {
        var ne = tr.get(T);
        if (ne !== void 0)
          return ne;
      }
      var le;
      er = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Et;
      Et = ht.current, ht.current = null, vt();
      try {
        if (I) {
          var it = function() {
            throw Error();
          };
          if (Object.defineProperty(it.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(it, []);
            } catch (Br) {
              le = Br;
            }
            Reflect.construct(T, [], it);
          } else {
            try {
              it.call();
            } catch (Br) {
              le = Br;
            }
            T.call(it.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Br) {
            le = Br;
          }
          T();
        }
      } catch (Br) {
        if (Br && le && typeof Br.stack == "string") {
          for (var ze = Br.stack.split(`
`), An = le.stack.split(`
`), qt = ze.length - 1, Xt = An.length - 1; qt >= 1 && Xt >= 0 && ze[qt] !== An[Xt]; )
            Xt--;
          for (; qt >= 1 && Xt >= 0; qt--, Xt--)
            if (ze[qt] !== An[Xt]) {
              if (qt !== 1 || Xt !== 1)
                do
                  if (qt--, Xt--, Xt < 0 || ze[qt] !== An[Xt]) {
                    var Er = `
` + ze[qt].replace(" at new ", " at ");
                    return T.displayName && Er.includes("<anonymous>") && (Er = Er.replace("<anonymous>", T.displayName)), typeof T == "function" && tr.set(T, Er), Er;
                  }
                while (qt >= 1 && Xt >= 0);
              break;
            }
        }
      } finally {
        er = !1, ht.current = Et, ct(), Error.prepareStackTrace = pt;
      }
      var ci = T ? T.displayName || T.name : "", Kt = ci ? tn(ci) : "";
      return typeof T == "function" && tr.set(T, Kt), Kt;
    }
    function yn(T, I, ne) {
      return mr(T, !1);
    }
    function nr(T) {
      var I = T.prototype;
      return !!(I && I.isReactComponent);
    }
    function Vn(T, I, ne) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return mr(T, nr(T));
      if (typeof T == "string")
        return tn(T);
      switch (T) {
        case ee:
          return tn("Suspense");
        case he:
          return tn("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case ie:
            return yn(T.render);
          case X:
            return Vn(T.type, I, ne);
          case be: {
            var le = T, pt = le._payload, Et = le._init;
            try {
              return Vn(Et(pt), I, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, Un = {}, wr = Qt.ReactDebugCurrentFrame;
    function yr(T) {
      if (T) {
        var I = T._owner, ne = Vn(T.type, T._source, I ? I.type : null);
        wr.setExtraStackFrame(ne);
      } else
        wr.setExtraStackFrame(null);
    }
    function Pn(T, I, ne, le, pt) {
      {
        var Et = Function.call.bind(zn);
        for (var it in T)
          if (Et(T, it)) {
            var ze = void 0;
            try {
              if (typeof T[it] != "function") {
                var An = Error((le || "React class") + ": " + ne + " type `" + it + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[it] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw An.name = "Invariant Violation", An;
              }
              ze = T[it](I, it, le, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              ze = qt;
            }
            ze && !(ze instanceof Error) && (yr(pt), tt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", ne, it, typeof ze), yr(null)), ze instanceof Error && !(ze.message in Un) && (Un[ze.message] = !0, yr(pt), tt("Failed %s type: %s", ne, ze.message), yr(null));
          }
      }
    }
    var oa = Array.isArray;
    function sa(T) {
      return oa(T);
    }
    function gr(T) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, ne = I && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ne;
      }
    }
    function ca(T) {
      try {
        return rr(T), !1;
      } catch {
        return !0;
      }
    }
    function rr(T) {
      return "" + T;
    }
    function _r(T) {
      if (ca(T))
        return tt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(T)), rr(T);
    }
    var on = Qt.ReactCurrentOwner, fa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, pa, ae;
    ae = {};
    function Ne(T) {
      if (zn.call(T, "ref")) {
        var I = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function lt(T) {
      if (zn.call(T, "key")) {
        var I = Object.getOwnPropertyDescriptor(T, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function zt(T, I) {
      if (typeof T.ref == "string" && on.current && I && on.current.stateNode !== I) {
        var ne = We(on.current.type);
        ae[ne] || (tt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', We(on.current.type), T.ref), ae[ne] = !0);
      }
    }
    function Dt(T, I) {
      {
        var ne = function() {
          da || (da = !0, tt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ne.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function _n(T, I) {
      {
        var ne = function() {
          pa || (pa = !0, tt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ne.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var cn = function(T, I, ne, le, pt, Et, it) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: L,
        // Built-in properties that belong on the element
        type: T,
        key: I,
        ref: ne,
        props: it,
        // Record the component responsible for creating this element.
        _owner: Et
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function Sr(T, I, ne, le, pt) {
      {
        var Et, it = {}, ze = null, An = null;
        ne !== void 0 && (_r(ne), ze = "" + ne), lt(I) && (_r(I.key), ze = "" + I.key), Ne(I) && (An = I.ref, zt(I, pt));
        for (Et in I)
          zn.call(I, Et) && !fa.hasOwnProperty(Et) && (it[Et] = I[Et]);
        if (T && T.defaultProps) {
          var qt = T.defaultProps;
          for (Et in qt)
            it[Et] === void 0 && (it[Et] = qt[Et]);
        }
        if (ze || An) {
          var Xt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          ze && Dt(it, Xt), An && _n(it, Xt);
        }
        return cn(T, ze, An, pt, le, on.current, it);
      }
    }
    var Ft = Qt.ReactCurrentOwner, Gn = Qt.ReactDebugCurrentFrame;
    function Ut(T) {
      if (T) {
        var I = T._owner, ne = Vn(T.type, T._source, I ? I.type : null);
        Gn.setExtraStackFrame(ne);
      } else
        Gn.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function Ka(T) {
      return typeof T == "object" && T !== null && T.$$typeof === L;
    }
    function ba() {
      {
        if (Ft.current) {
          var T = We(Ft.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function dl(T) {
      {
        if (T !== void 0) {
          var I = T.fileName.replace(/^.*[\\\/]/, ""), ne = T.lineNumber;
          return `

Check your code at ` + I + ":" + ne + ".";
        }
        return "";
      }
    }
    var Xl = {};
    function Kl(T) {
      {
        var I = ba();
        if (!I) {
          var ne = typeof T == "string" ? T : T.displayName || T.name;
          ne && (I = `

Check the top-level render call using <` + ne + ">.");
        }
        return I;
      }
    }
    function pl(T, I) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ne = Kl(I);
        if (Xl[ne])
          return;
        Xl[ne] = !0;
        var le = "";
        T && T._owner && T._owner !== Ft.current && (le = " It was passed a child from " + We(T._owner.type) + "."), Ut(T), tt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, le), Ut(null);
      }
    }
    function Za(T, I) {
      {
        if (typeof T != "object")
          return;
        if (sa(T))
          for (var ne = 0; ne < T.length; ne++) {
            var le = T[ne];
            Ka(le) && pl(le, I);
          }
        else if (Ka(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var pt = xn(T);
          if (typeof pt == "function" && pt !== T.entries)
            for (var Et = pt.call(T), it; !(it = Et.next()).done; )
              Ka(it.value) && pl(it.value, I);
        }
      }
    }
    function Ja(T) {
      {
        var I = T.type;
        if (I == null || typeof I == "string")
          return;
        var ne;
        if (typeof I == "function")
          ne = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ie || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === X))
          ne = I.propTypes;
        else
          return;
        if (ne) {
          var le = We(I);
          Pn(ne, T.props, "prop", le, T);
        } else if (I.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var pt = We(I);
          tt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && tt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ka(T) {
      {
        for (var I = Object.keys(T.props), ne = 0; ne < I.length; ne++) {
          var le = I[ne];
          if (le !== "children" && le !== "key") {
            Ut(T), tt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Ut(null);
            break;
          }
        }
        T.ref !== null && (Ut(T), tt("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    function Mi(T, I, ne, le, pt, Et) {
      {
        var it = Wt(T);
        if (!it) {
          var ze = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var An = dl(pt);
          An ? ze += An : ze += ba();
          var qt;
          T === null ? qt = "null" : sa(T) ? qt = "array" : T !== void 0 && T.$$typeof === L ? (qt = "<" + (We(T.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof T, tt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, ze);
        }
        var Xt = Sr(T, I, ne, pt, Et);
        if (Xt == null)
          return Xt;
        if (it) {
          var Er = I.children;
          if (Er !== void 0)
            if (le)
              if (sa(Er)) {
                for (var ci = 0; ci < Er.length; ci++)
                  Za(Er[ci], T);
                Object.freeze && Object.freeze(Er);
              } else
                tt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Za(Er, T);
        }
        return T === Xe ? ka(Xt) : Ja(Xt), Xt;
      }
    }
    function Vr(T, I, ne) {
      return Mi(T, I, ne, !0);
    }
    function Pr(T, I, ne) {
      return Mi(T, I, ne, !1);
    }
    var va = Pr, zi = Vr;
    Ip.Fragment = Xe, Ip.jsx = va, Ip.jsxs = zi;
  }(), Ip;
}
var ak = {};
ak.NODE_ENV === "production" ? v0.exports = nk() : v0.exports = rk();
var oe = v0.exports, Gp = {}, m0 = { exports: {} }, qa = {}, Fm = { exports: {} }, d0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function ik() {
  return tT || (tT = 1, function(W) {
    function K(B, ge) {
      var R = B.length;
      B.push(ge);
      e:
        for (; 0 < R; ) {
          var $ = R - 1 >>> 1, Se = B[$];
          if (0 < Xe(Se, ge))
            B[$] = ge, B[R] = Se, R = $;
          else
            break e;
        }
    }
    function L(B) {
      return B.length === 0 ? null : B[0];
    }
    function Pe(B) {
      if (B.length === 0)
        return null;
      var ge = B[0], R = B.pop();
      if (R !== ge) {
        B[0] = R;
        e:
          for (var $ = 0, Se = B.length, Be = Se >>> 1; $ < Be; ) {
            var $e = 2 * ($ + 1) - 1, vt = B[$e], ct = $e + 1, ht = B[ct];
            if (0 > Xe(vt, R))
              ct < Se && 0 > Xe(ht, vt) ? (B[$] = ht, B[ct] = R, $ = ct) : (B[$] = vt, B[$e] = R, $ = $e);
            else if (ct < Se && 0 > Xe(ht, R))
              B[$] = ht, B[ct] = R, $ = ct;
            else
              break e;
          }
      }
      return ge;
    }
    function Xe(B, ge) {
      var R = B.sortIndex - ge.sortIndex;
      return R !== 0 ? R : B.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var st = performance;
      W.unstable_now = function() {
        return st.now();
      };
    } else {
      var ye = Date, S = ye.now();
      W.unstable_now = function() {
        return ye.now() - S;
      };
    }
    var qe = [], ie = [], ee = 1, he = null, X = 3, be = !1, ue = !1, we = !1, dt = typeof setTimeout == "function" ? setTimeout : null, xn = typeof clearTimeout == "function" ? clearTimeout : null, Qt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function tt(B) {
      for (var ge = L(ie); ge !== null; ) {
        if (ge.callback === null)
          Pe(ie);
        else if (ge.startTime <= B)
          Pe(ie), ge.sortIndex = ge.expirationTime, K(qe, ge);
        else
          break;
        ge = L(ie);
      }
    }
    function Fe(B) {
      if (we = !1, tt(B), !ue)
        if (L(qe) !== null)
          ue = !0, wt(xt);
        else {
          var ge = L(ie);
          ge !== null && at(Fe, ge.startTime - B);
        }
    }
    function xt(B, ge) {
      ue = !1, we && (we = !1, xn(Ie), Ie = -1), be = !0;
      var R = X;
      try {
        for (tt(ge), he = L(qe); he !== null && (!(he.expirationTime > ge) || B && !Wt()); ) {
          var $ = he.callback;
          if (typeof $ == "function") {
            he.callback = null, X = he.priorityLevel;
            var Se = $(he.expirationTime <= ge);
            ge = W.unstable_now(), typeof Se == "function" ? he.callback = Se : he === L(qe) && Pe(qe), tt(ge);
          } else
            Pe(qe);
          he = L(qe);
        }
        if (he !== null)
          var Be = !0;
        else {
          var $e = L(ie);
          $e !== null && at(Fe, $e.startTime - ge), Be = !1;
        }
        return Be;
      } finally {
        he = null, X = R, be = !1;
      }
    }
    var Re = !1, Me = null, Ie = -1, wn = 5, mn = -1;
    function Wt() {
      return !(W.unstable_now() - mn < wn);
    }
    function St() {
      if (Me !== null) {
        var B = W.unstable_now();
        mn = B;
        var ge = !0;
        try {
          ge = Me(!0, B);
        } finally {
          ge ? en() : (Re = !1, Me = null);
        }
      } else
        Re = !1;
    }
    var en;
    if (typeof Qt == "function")
      en = function() {
        Qt(St);
      };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), rt = We.port2;
      We.port1.onmessage = St, en = function() {
        rt.postMessage(null);
      };
    } else
      en = function() {
        dt(St, 0);
      };
    function wt(B) {
      Me = B, Re || (Re = !0, en());
    }
    function at(B, ge) {
      Ie = dt(function() {
        B(W.unstable_now());
      }, ge);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, W.unstable_continueExecution = function() {
      ue || be || (ue = !0, wt(xt));
    }, W.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, W.unstable_getFirstCallbackNode = function() {
      return L(qe);
    }, W.unstable_next = function(B) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = X;
      }
      var R = X;
      X = ge;
      try {
        return B();
      } finally {
        X = R;
      }
    }, W.unstable_pauseExecution = function() {
    }, W.unstable_requestPaint = function() {
    }, W.unstable_runWithPriority = function(B, ge) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var R = X;
      X = B;
      try {
        return ge();
      } finally {
        X = R;
      }
    }, W.unstable_scheduleCallback = function(B, ge, R) {
      var $ = W.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? $ + R : $) : R = $, B) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return Se = R + Se, B = { id: ee++, callback: ge, priorityLevel: B, startTime: R, expirationTime: Se, sortIndex: -1 }, R > $ ? (B.sortIndex = R, K(ie, B), L(qe) === null && B === L(ie) && (we ? (xn(Ie), Ie = -1) : we = !0, at(Fe, R - $))) : (B.sortIndex = Se, K(qe, B), ue || be || (ue = !0, wt(xt))), B;
    }, W.unstable_shouldYield = Wt, W.unstable_wrapCallback = function(B) {
      var ge = X;
      return function() {
        var R = X;
        X = ge;
        try {
          return B.apply(this, arguments);
        } finally {
          X = R;
        }
      };
    };
  }(d0)), d0;
}
var p0 = {}, nT;
function lk() {
  return nT || (nT = 1, function(W) {
    var K = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    K.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var L = !1, Pe = !1, Xe = 5;
      function st(ae, Ne) {
        var lt = ae.length;
        ae.push(Ne), qe(ae, Ne, lt);
      }
      function ye(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function S(ae) {
        if (ae.length === 0)
          return null;
        var Ne = ae[0], lt = ae.pop();
        return lt !== Ne && (ae[0] = lt, ie(ae, lt, 0)), Ne;
      }
      function qe(ae, Ne, lt) {
        for (var zt = lt; zt > 0; ) {
          var Dt = zt - 1 >>> 1, _n = ae[Dt];
          if (ee(_n, Ne) > 0)
            ae[Dt] = Ne, ae[zt] = _n, zt = Dt;
          else
            return;
        }
      }
      function ie(ae, Ne, lt) {
        for (var zt = lt, Dt = ae.length, _n = Dt >>> 1; zt < _n; ) {
          var cn = (zt + 1) * 2 - 1, Sr = ae[cn], Ft = cn + 1, Gn = ae[Ft];
          if (ee(Sr, Ne) < 0)
            Ft < Dt && ee(Gn, Sr) < 0 ? (ae[zt] = Gn, ae[Ft] = Ne, zt = Ft) : (ae[zt] = Sr, ae[cn] = Ne, zt = cn);
          else if (Ft < Dt && ee(Gn, Ne) < 0)
            ae[zt] = Gn, ae[Ft] = Ne, zt = Ft;
          else
            return;
        }
      }
      function ee(ae, Ne) {
        var lt = ae.sortIndex - Ne.sortIndex;
        return lt !== 0 ? lt : ae.id - Ne.id;
      }
      var he = 1, X = 2, be = 3, ue = 4, we = 5;
      function dt(ae, Ne) {
      }
      var xn = typeof performance == "object" && typeof performance.now == "function";
      if (xn) {
        var Qt = performance;
        W.unstable_now = function() {
          return Qt.now();
        };
      } else {
        var tt = Date, Fe = tt.now();
        W.unstable_now = function() {
          return tt.now() - Fe;
        };
      }
      var xt = 1073741823, Re = -1, Me = 250, Ie = 5e3, wn = 1e4, mn = xt, Wt = [], St = [], en = 1, We = null, rt = be, wt = !1, at = !1, B = !1, ge = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Se(ae) {
        for (var Ne = ye(St); Ne !== null; ) {
          if (Ne.callback === null)
            S(St);
          else if (Ne.startTime <= ae)
            S(St), Ne.sortIndex = Ne.expirationTime, st(Wt, Ne);
          else
            return;
          Ne = ye(St);
        }
      }
      function Be(ae) {
        if (B = !1, Se(ae), !at)
          if (ye(Wt) !== null)
            at = !0, _r($e);
          else {
            var Ne = ye(St);
            Ne !== null && on(Be, Ne.startTime - ae);
          }
      }
      function $e(ae, Ne) {
        at = !1, B && (B = !1, fa()), wt = !0;
        var lt = rt;
        try {
          var zt;
          if (!Pe)
            return vt(ae, Ne);
        } finally {
          We = null, rt = lt, wt = !1;
        }
      }
      function vt(ae, Ne) {
        var lt = Ne;
        for (Se(lt), We = ye(Wt); We !== null && !L && !(We.expirationTime > lt && (!ae || yr())); ) {
          var zt = We.callback;
          if (typeof zt == "function") {
            We.callback = null, rt = We.priorityLevel;
            var Dt = We.expirationTime <= lt, _n = zt(Dt);
            lt = W.unstable_now(), typeof _n == "function" ? We.callback = _n : We === ye(Wt) && S(Wt), Se(lt);
          } else
            S(Wt);
          We = ye(Wt);
        }
        if (We !== null)
          return !0;
        var cn = ye(St);
        return cn !== null && on(Be, cn.startTime - lt), !1;
      }
      function ct(ae, Ne) {
        switch (ae) {
          case he:
          case X:
          case be:
          case ue:
          case we:
            break;
          default:
            ae = be;
        }
        var lt = rt;
        rt = ae;
        try {
          return Ne();
        } finally {
          rt = lt;
        }
      }
      function ht(ae) {
        var Ne;
        switch (rt) {
          case he:
          case X:
          case be:
            Ne = be;
            break;
          default:
            Ne = rt;
            break;
        }
        var lt = rt;
        rt = Ne;
        try {
          return ae();
        } finally {
          rt = lt;
        }
      }
      function ft(ae) {
        var Ne = rt;
        return function() {
          var lt = rt;
          rt = Ne;
          try {
            return ae.apply(this, arguments);
          } finally {
            rt = lt;
          }
        };
      }
      function tn(ae, Ne, lt) {
        var zt = W.unstable_now(), Dt;
        if (typeof lt == "object" && lt !== null) {
          var _n = lt.delay;
          typeof _n == "number" && _n > 0 ? Dt = zt + _n : Dt = zt;
        } else
          Dt = zt;
        var cn;
        switch (ae) {
          case he:
            cn = Re;
            break;
          case X:
            cn = Me;
            break;
          case we:
            cn = mn;
            break;
          case ue:
            cn = wn;
            break;
          case be:
          default:
            cn = Ie;
            break;
        }
        var Sr = Dt + cn, Ft = {
          id: en++,
          callback: Ne,
          priorityLevel: ae,
          startTime: Dt,
          expirationTime: Sr,
          sortIndex: -1
        };
        return Dt > zt ? (Ft.sortIndex = Dt, st(St, Ft), ye(Wt) === null && Ft === ye(St) && (B ? fa() : B = !0, on(Be, Dt - zt))) : (Ft.sortIndex = Sr, st(Wt, Ft), !at && !wt && (at = !0, _r($e))), Ft;
      }
      function er() {
      }
      function tr() {
        !at && !wt && (at = !0, _r($e));
      }
      function Hr() {
        return ye(Wt);
      }
      function mr(ae) {
        ae.callback = null;
      }
      function yn() {
        return rt;
      }
      var nr = !1, Vn = null, zn = -1, Un = Xe, wr = -1;
      function yr() {
        var ae = W.unstable_now() - wr;
        return !(ae < Un);
      }
      function Pn() {
      }
      function oa(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Un = Math.floor(1e3 / ae) : Un = Xe;
      }
      var sa = function() {
        if (Vn !== null) {
          var ae = W.unstable_now();
          wr = ae;
          var Ne = !0, lt = !0;
          try {
            lt = Vn(Ne, ae);
          } finally {
            lt ? gr() : (nr = !1, Vn = null);
          }
        } else
          nr = !1;
      }, gr;
      if (typeof $ == "function")
        gr = function() {
          $(sa);
        };
      else if (typeof MessageChannel < "u") {
        var ca = new MessageChannel(), rr = ca.port2;
        ca.port1.onmessage = sa, gr = function() {
          rr.postMessage(null);
        };
      } else
        gr = function() {
          ge(sa, 0);
        };
      function _r(ae) {
        Vn = ae, nr || (nr = !0, gr());
      }
      function on(ae, Ne) {
        zn = ge(function() {
          ae(W.unstable_now());
        }, Ne);
      }
      function fa() {
        R(zn), zn = -1;
      }
      var da = Pn, pa = null;
      W.unstable_IdlePriority = we, W.unstable_ImmediatePriority = he, W.unstable_LowPriority = ue, W.unstable_NormalPriority = be, W.unstable_Profiling = pa, W.unstable_UserBlockingPriority = X, W.unstable_cancelCallback = mr, W.unstable_continueExecution = tr, W.unstable_forceFrameRate = oa, W.unstable_getCurrentPriorityLevel = yn, W.unstable_getFirstCallbackNode = Hr, W.unstable_next = ht, W.unstable_pauseExecution = er, W.unstable_requestPaint = da, W.unstable_runWithPriority = ct, W.unstable_scheduleCallback = tn, W.unstable_shouldYield = yr, W.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(p0)), p0;
}
var rT;
function uT() {
  if (rT)
    return Fm.exports;
  rT = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Fm.exports = ik() : Fm.exports = lk(), Fm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function uk() {
  if (aT)
    return qa;
  aT = 1;
  var W = Wn, K = uT();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Pe = /* @__PURE__ */ new Set(), Xe = {};
  function st(n, r) {
    ye(n, r), ye(n + "Capture", r);
  }
  function ye(n, r) {
    for (Xe[n] = r, n = 0; n < r.length; n++)
      Pe.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qe = Object.prototype.hasOwnProperty, ie = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, he = {};
  function X(n) {
    return qe.call(he, n) ? !0 : qe.call(ee, n) ? !1 : ie.test(n) ? he[n] = !0 : (ee[n] = !0, !1);
  }
  function be(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ue(n, r, l, o) {
    if (r === null || typeof r > "u" || be(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function we(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var dt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    dt[n] = new we(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    dt[r] = new we(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    dt[n] = new we(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    dt[n] = new we(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    dt[n] = new we(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    dt[n] = new we(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    dt[n] = new we(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    dt[n] = new we(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    dt[n] = new we(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var xn = /[\-:]([a-z])/g;
  function Qt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      xn,
      Qt
    );
    dt[r] = new we(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(xn, Qt);
    dt[r] = new we(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(xn, Qt);
    dt[r] = new we(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    dt[n] = new we(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), dt.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    dt[n] = new we(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function tt(n, r, l, o) {
    var c = dt.hasOwnProperty(r) ? dt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, l, c, o) && (l = null), o || c === null ? X(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Fe = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = Symbol.for("react.element"), Re = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), Wt = Symbol.for("react.context"), St = Symbol.for("react.forward_ref"), en = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, $;
  function Se(n) {
    if ($ === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        $ = r && r[1] || "";
      }
    return `
` + $ + n;
  }
  var Be = !1;
  function $e(n, r) {
    if (!n || Be)
      return "";
    Be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var x = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Se(n) : "";
  }
  function vt(n) {
    switch (n.tag) {
      case 5:
        return Se(n.type);
      case 16:
        return Se("Lazy");
      case 13:
        return Se("Suspense");
      case 19:
        return Se("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = $e(n.type, !1), n;
      case 11:
        return n = $e(n.type.render, !1), n;
      case 1:
        return n = $e(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Me:
        return "Fragment";
      case Re:
        return "Portal";
      case wn:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case en:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Wt:
          return (n.displayName || "Context") + ".Consumer";
        case mn:
          return (n._context.displayName || "Context") + ".Provider";
        case St:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case rt:
          return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
        case wt:
          r = n._payload, n = n._init;
          try {
            return ct(n(r));
          } catch {
          }
      }
    return null;
  }
  function ht(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ct(r);
      case 8:
        return r === Ie ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ft(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function tn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function er(n) {
    var r = tn(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function tr(n) {
    n._valueTracker || (n._valueTracker = er(n));
  }
  function Hr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = tn(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function mr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function yn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function nr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ft(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && tt(n, "checked", r, !1);
  }
  function zn(n, r) {
    Vn(n, r);
    var l = ft(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? wr(n, r.type, l) : r.hasOwnProperty("defaultValue") && wr(n, r.type, ft(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Un(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function wr(n, r, l) {
    (r !== "number" || mr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var yr = Array.isArray;
  function Pn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ft(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function oa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(L(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function sa(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(L(92));
        if (yr(l)) {
          if (1 < l.length)
            throw Error(L(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ft(l) };
  }
  function gr(n, r) {
    var l = ft(r.value), o = ft(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ca(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function rr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _r(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? rr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var on, fa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (on = on || document.createElement("div"), on.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = on.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var pa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pa).forEach(function(n) {
    ae.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pa[r] = pa[n];
    });
  });
  function Ne(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || pa.hasOwnProperty(n) && pa[n] ? ("" + r).trim() : r + "px";
  }
  function lt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Ne(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var zt = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dt(n, r) {
    if (r) {
      if (zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(L(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cn = null;
  function Sr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ft = null, Gn = null, Ut = null;
  function Gt(n) {
    if (n = mi(n)) {
      if (typeof Ft != "function")
        throw Error(L(280));
      var r = n.stateNode;
      r && (r = Tc(r), Ft(n.stateNode, n.type, r));
    }
  }
  function Ka(n) {
    Gn ? Ut ? Ut.push(n) : Ut = [n] : Gn = n;
  }
  function ba() {
    if (Gn) {
      var n = Gn, r = Ut;
      if (Ut = Gn = null, Gt(n), r)
        for (n = 0; n < r.length; n++)
          Gt(r[n]);
    }
  }
  function dl(n, r) {
    return n(r);
  }
  function Xl() {
  }
  var Kl = !1;
  function pl(n, r, l) {
    if (Kl)
      return n(r, l);
    Kl = !0;
    try {
      return dl(n, r, l);
    } finally {
      Kl = !1, (Gn !== null || Ut !== null) && (Xl(), ba());
    }
  }
  function Za(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Tc(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(L(231, r, typeof l));
    return l;
  }
  var Ja = !1;
  if (S)
    try {
      var ka = {};
      Object.defineProperty(ka, "passive", { get: function() {
        Ja = !0;
      } }), window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka);
    } catch {
      Ja = !1;
    }
  function Mi(n, r, l, o, c, d, m, E, x) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Vr = !1, Pr = null, va = !1, zi = null, T = { onError: function(n) {
    Vr = !0, Pr = n;
  } };
  function I(n, r, l, o, c, d, m, E, x) {
    Vr = !1, Pr = null, Mi.apply(T, arguments);
  }
  function ne(n, r, l, o, c, d, m, E, x) {
    if (I.apply(this, arguments), Vr) {
      if (Vr) {
        var A = Pr;
        Vr = !1, Pr = null;
      } else
        throw Error(L(198));
      va || (va = !0, zi = A);
    }
  }
  function le(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Et(n) {
    if (le(n) !== n)
      throw Error(L(188));
  }
  function it(n) {
    var r = n.alternate;
    if (!r) {
      if (r = le(n), r === null)
        throw Error(L(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Et(c), n;
          if (d === o)
            return Et(c), r;
          d = d.sibling;
        }
        throw Error(L(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(L(189));
        }
      }
      if (l.alternate !== o)
        throw Error(L(190));
    }
    if (l.tag !== 3)
      throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function ze(n) {
    return n = it(n), n !== null ? An(n) : null;
  }
  function An(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = An(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var qt = K.unstable_scheduleCallback, Xt = K.unstable_cancelCallback, Er = K.unstable_shouldYield, ci = K.unstable_requestPaint, Kt = K.unstable_now, Br = K.unstable_getCurrentPriorityLevel, Wo = K.unstable_ImmediatePriority, fi = K.unstable_UserBlockingPriority, ut = K.unstable_NormalPriority, Zl = K.unstable_LowPriority, Ui = K.unstable_IdlePriority, vl = null, $r = null;
  function Go(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function")
      try {
        $r.onCommitFiberRoot(vl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var br = Math.clz32 ? Math.clz32 : Ko, qo = Math.log, Xo = Math.LN2;
  function Ko(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (qo(n) / Xo | 0) | 0;
  }
  var Jl = 64, Vu = 4194304;
  function Ai(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ai(E) : (d &= m, d !== 0 && (o = Ai(d)));
    } else
      m = l & ~c, m !== 0 ? o = Ai(m) : d !== 0 && (o = Ai(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - br(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Da(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - br(d), E = 1 << m, x = c[m];
      x === -1 ? (!(E & l) || E & o) && (c[m] = Da(E, r)) : x <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function eu() {
    var n = Jl;
    return Jl <<= 1, !(Jl & 4194240) && (Jl = 64), n;
  }
  function tu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function ml(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - br(r), n[r] = l;
  }
  function Zo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - br(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Jo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - br(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var gt = 0;
  function es(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Pu, yl, ts, _t, Bu, nu = !1, Ke = [], ei = null, fn = null, Yr = null, Oa = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), nn = [], dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ns(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ei = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Yr = null;
        break;
      case "pointerover":
      case "pointerout":
        Oa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function ar(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = mi(r), r !== null && yl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ir(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return ei = ar(ei, n, r, l, o, c), !0;
      case "dragenter":
        return fn = ar(fn, n, r, l, o, c), !0;
      case "mouseover":
        return Yr = ar(Yr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Oa.set(d, ar(Oa.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, ar(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ti(n) {
    var r = Wi(n.target);
    if (r !== null) {
      var l = le(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, Bu(n.priority, function() {
              ts(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function $u(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Qu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        cn = o, l.target.dispatchEvent(o), cn = null;
      } else
        return r = mi(l), r !== null && yl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ru(n, r, l) {
    $u(n) && l.delete(r);
  }
  function au() {
    nu = !1, ei !== null && $u(ei) && (ei = null), fn !== null && $u(fn) && (fn = null), Yr !== null && $u(Yr) && (Yr = null), Oa.forEach(ru), gl.forEach(ru);
  }
  function Sl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, nu || (nu = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, au)));
  }
  function La(n) {
    function r(c) {
      return Sl(c, n);
    }
    if (0 < Ke.length) {
      Sl(Ke[0], n);
      for (var l = 1; l < Ke.length; l++) {
        var o = Ke[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (ei !== null && Sl(ei, n), fn !== null && Sl(fn, n), Yr !== null && Sl(Yr, n), Oa.forEach(r), gl.forEach(r), l = 0; l < nn.length; l++)
      o = nn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < nn.length && (l = nn[0], l.blockedOn === null); )
      ti(l), l.blockedOn === null && nn.shift();
  }
  var ji = Fe.ReactCurrentBatchConfig, Yu = !0;
  function Fi(n, r, l, o) {
    var c = gt, d = ji.transition;
    ji.transition = null;
    try {
      gt = 1, vi(n, r, l, o);
    } finally {
      gt = c, ji.transition = d;
    }
  }
  function Iu(n, r, l, o) {
    var c = gt, d = ji.transition;
    ji.transition = null;
    try {
      gt = 4, vi(n, r, l, o);
    } finally {
      gt = c, ji.transition = d;
    }
  }
  function vi(n, r, l, o) {
    if (Yu) {
      var c = Qu(n, r, l, o);
      if (c === null)
        id(n, r, o, Hi, l), ns(n, o);
      else if (Ir(c, n, r, l, o))
        o.stopPropagation();
      else if (ns(n, o), r & 4 && -1 < dn.indexOf(n)) {
        for (; c !== null; ) {
          var d = mi(c);
          if (d !== null && Pu(d), d = Qu(n, r, l, o), d === null && id(n, r, o, Hi, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        id(n, r, o, null, l);
    }
  }
  var Hi = null;
  function Qu(n, r, l, o) {
    if (Hi = null, n = Sr(o), n = Wi(n), n !== null)
      if (r = le(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = pt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Hi = n, null;
  }
  function rs(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Br()) {
          case Wo:
            return 1;
          case fi:
            return 4;
          case ut:
          case Zl:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, Wu = null, h = null;
  function C() {
    if (h)
      return h;
    var n, r = Wu, l = r.length, o, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function j() {
    return !0;
  }
  function Z() {
    return !1;
  }
  function xe(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : Z, this.isPropagationStopped = Z, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = j);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = j);
    }, persist: function() {
    }, isPersistent: j }), r;
  }
  var de = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qe = xe(de), ot = R({}, de, { view: 0, detail: 0 }), At = xe(ot), Ht, Vt, Pt, rn = R({}, ot, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Pt && (Pt && n.type === "mousemove" ? (Ht = n.screenX - Pt.screenX, Vt = n.screenY - Pt.screenY) : Vt = Ht = 0, Pt = n), Ht);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Vt;
  } }), bt = xe(rn), El = R({}, rn, { dataTransfer: 0 }), Gu = xe(El), as = R({}, ot, { relatedTarget: 0 }), is = xe(as), Vi = R({}, de, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ls = xe(Vi), us = R({}, de, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wf = xe(us), Pm = R({}, de, { data: 0 }), qp = xe(Pm), Xp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Gf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function dc() {
    return Zp;
  }
  var Bm = R({}, ot, { key: function(n) {
    if (n.key) {
      var r = Xp[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Pi = xe(Bm), $m = R({}, rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pc = xe($m), qf = R({}, ot, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dc }), Xf = xe(qf), Ym = R({}, de, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vc = xe(Ym), Jp = R({}, rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qr = xe(Jp), Bi = [9, 13, 27, 32], gn = S && "CompositionEvent" in window, ha = null;
  S && "documentMode" in document && (ha = document.documentMode);
  var Kf = S && "TextEvent" in window && !ha, os = S && (!gn || ha && 8 < ha && 11 >= ha), ev = " ", qu = !1;
  function tv(n, r) {
    switch (n) {
      case "keyup":
        return Bi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Cl = !1;
  function Im(n, r) {
    switch (n) {
      case "compositionend":
        return nv(r);
      case "keypress":
        return r.which !== 32 ? null : (qu = !0, ev);
      case "textInput":
        return n = r.data, n === ev && qu ? null : n;
      default:
        return null;
    }
  }
  function Qm(n, r) {
    if (Cl)
      return n === "compositionend" || !gn && tv(n, r) ? (n = C(), h = Wu = ni = null, Cl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return os && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wm[n.type] : r === "textarea";
  }
  function rv(n, r, l, o) {
    Ka(o), r = Ec(r, "onChange"), 0 < r.length && (l = new Qe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ss = null, cs = null;
  function av(n) {
    Ev(n, 0);
  }
  function $i(n) {
    var r = Ju(n);
    if (Hr(r))
      return n;
  }
  function Jf(n, r) {
    if (n === "change")
      return r;
  }
  var ed = !1;
  if (S) {
    var hc;
    if (S) {
      var td = "oninput" in document;
      if (!td) {
        var iv = document.createElement("div");
        iv.setAttribute("oninput", "return;"), td = typeof iv.oninput == "function";
      }
      hc = td;
    } else
      hc = !1;
    ed = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function lv() {
    ss && (ss.detachEvent("onpropertychange", uv), cs = ss = null);
  }
  function uv(n) {
    if (n.propertyName === "value" && $i(cs)) {
      var r = [];
      rv(r, cs, n, Sr(n)), pl(av, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (lv(), ss = r, cs = l, ss.attachEvent("onpropertychange", uv)) : n === "focusout" && lv();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return $i(cs);
  }
  function Xm(n, r) {
    if (n === "click")
      return $i(r);
  }
  function Km(n, r) {
    if (n === "input" || n === "change")
      return $i(r);
  }
  function ov(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : ov;
  function Xu(n, r) {
    if (ri(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!qe.call(r, c) || !ri(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function sv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function cv(n, r) {
    var l = sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = sv(l);
    }
  }
  function fv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? fv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function dv() {
    for (var n = window, r = mr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = mr(n.document);
    }
    return r;
  }
  function fs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function iu(n) {
    var r = dv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && fv(l.ownerDocument.documentElement, l)) {
      if (o !== null && fs(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = cv(l, d);
          var m = cv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var mc = S && "documentMode" in document && 11 >= document.documentMode, lu = null, Tl = null, ds = null, nd = !1;
  function pv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nd || lu == null || lu !== mr(o) || (o = lu, "selectionStart" in o && fs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ds && Xu(ds, o) || (ds = o, o = Ec(Tl, "onSelect"), 0 < o.length && (r = new Qe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = lu)));
  }
  function yc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ku = { animationend: yc("Animation", "AnimationEnd"), animationiteration: yc("Animation", "AnimationIteration"), animationstart: yc("Animation", "AnimationStart"), transitionend: yc("Transition", "TransitionEnd") }, gc = {}, vv = {};
  S && (vv = document.createElement("div").style, "AnimationEvent" in window || (delete Ku.animationend.animation, delete Ku.animationiteration.animation, delete Ku.animationstart.animation), "TransitionEvent" in window || delete Ku.transitionend.transition);
  function ps(n) {
    if (gc[n])
      return gc[n];
    if (!Ku[n])
      return n;
    var r = Ku[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in vv)
        return gc[n] = r[l];
    return n;
  }
  var Cr = ps("animationend"), rd = ps("animationiteration"), hv = ps("animationstart"), mv = ps("transitionend"), yv = /* @__PURE__ */ new Map(), gv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Rl(n, r) {
    yv.set(n, r), st(r, [n]);
  }
  for (var Sc = 0; Sc < gv.length; Sc++) {
    var vs = gv[Sc], hs = vs.toLowerCase(), Zm = vs[0].toUpperCase() + vs.slice(1);
    Rl(hs, "on" + Zm);
  }
  Rl(Cr, "onAnimationEnd"), Rl(rd, "onAnimationIteration"), Rl(hv, "onAnimationStart"), Rl("dblclick", "onDoubleClick"), Rl("focusin", "onFocus"), Rl("focusout", "onBlur"), Rl(mv, "onTransitionEnd"), ye("onMouseEnter", ["mouseout", "mouseover"]), ye("onMouseLeave", ["mouseout", "mouseover"]), ye("onPointerEnter", ["pointerout", "pointerover"]), ye("onPointerLeave", ["pointerout", "pointerover"]), st("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), st("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), st("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), st("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), st("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), st("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
  function Sv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
  }
  function Ev(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], x = E.instance, A = E.currentTarget;
            if (E = E.listener, x !== d && c.isPropagationStopped())
              break e;
            Sv(c, E, A), d = x;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], x = E.instance, A = E.currentTarget, E = E.listener, x !== d && c.isPropagationStopped())
              break e;
            Sv(c, E, A), d = x;
          }
      }
    }
    if (va)
      throw n = zi, va = !1, zi = null, n;
  }
  function Yt(n, r) {
    var l = r[pd];
    l === void 0 && (l = r[pd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ad(r, n, 2, !1), l.add(o));
  }
  function ms(n, r, l) {
    var o = 0;
    r && (o |= 4), ad(l, n, o, r);
  }
  var Ii = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(n) {
    if (!n[Ii]) {
      n[Ii] = !0, Pe.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || ms(l, !1, n), ms(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ii] || (r[Ii] = !0, ms("selectionchange", !1, r));
    }
  }
  function ad(n, r, l, o) {
    switch (rs(r)) {
      case 1:
        var c = Fi;
        break;
      case 4:
        c = Iu;
        break;
      default:
        c = vi;
    }
    l = c.bind(null, r, l, n), c = void 0, !Ja || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function id(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var x = m.tag;
                if ((x === 3 || x === 4) && (x = m.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Wi(E), m === null)
                return;
              if (x = m.tag, x === 5 || x === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    pl(function() {
      var A = d, Q = Sr(l), G = [];
      e: {
        var Y = yv.get(n);
        if (Y !== void 0) {
          var ce = Qe, Ee = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ce = Pi;
              break;
            case "focusin":
              Ee = "focus", ce = is;
              break;
            case "focusout":
              Ee = "blur", ce = is;
              break;
            case "beforeblur":
            case "afterblur":
              ce = is;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = bt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Gu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Xf;
              break;
            case Cr:
            case rd:
            case hv:
              ce = ls;
              break;
            case mv:
              ce = vc;
              break;
            case "scroll":
              ce = At;
              break;
            case "wheel":
              ce = Qr;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Wf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = pc;
          }
          var _e = (r & 4) !== 0, Nn = !_e && n === "scroll", k = _e ? Y !== null ? Y + "Capture" : null : Y;
          _e = [];
          for (var _ = A, N; _ !== null; ) {
            N = _;
            var J = N.stateNode;
            if (N.tag === 5 && J !== null && (N = J, k !== null && (J = Za(_, k), J != null && _e.push(Zu(_, J, N)))), Nn)
              break;
            _ = _.return;
          }
          0 < _e.length && (Y = new ce(Y, Ee, null, l, Q), G.push({ event: Y, listeners: _e }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", Y && l !== cn && (Ee = l.relatedTarget || l.fromElement) && (Wi(Ee) || Ee[ai]))
            break e;
          if ((ce || Y) && (Y = Q.window === Q ? Q : (Y = Q.ownerDocument) ? Y.defaultView || Y.parentWindow : window, ce ? (Ee = l.relatedTarget || l.toElement, ce = A, Ee = Ee ? Wi(Ee) : null, Ee !== null && (Nn = le(Ee), Ee !== Nn || Ee.tag !== 5 && Ee.tag !== 6) && (Ee = null)) : (ce = null, Ee = A), ce !== Ee)) {
            if (_e = bt, J = "onMouseLeave", k = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (_e = pc, J = "onPointerLeave", k = "onPointerEnter", _ = "pointer"), Nn = ce == null ? Y : Ju(ce), N = Ee == null ? Y : Ju(Ee), Y = new _e(J, _ + "leave", ce, l, Q), Y.target = Nn, Y.relatedTarget = N, J = null, Wi(Q) === A && (_e = new _e(k, _ + "enter", Ee, l, Q), _e.target = N, _e.relatedTarget = Nn, J = _e), Nn = J, ce && Ee)
              t: {
                for (_e = ce, k = Ee, _ = 0, N = _e; N; N = uu(N))
                  _++;
                for (N = 0, J = k; J; J = uu(J))
                  N++;
                for (; 0 < _ - N; )
                  _e = uu(_e), _--;
                for (; 0 < N - _; )
                  k = uu(k), N--;
                for (; _--; ) {
                  if (_e === k || k !== null && _e === k.alternate)
                    break t;
                  _e = uu(_e), k = uu(k);
                }
                _e = null;
              }
            else
              _e = null;
            ce !== null && ld(G, Y, ce, _e, !1), Ee !== null && Nn !== null && ld(G, Nn, Ee, _e, !0);
          }
        }
        e: {
          if (Y = A ? Ju(A) : window, ce = Y.nodeName && Y.nodeName.toLowerCase(), ce === "select" || ce === "input" && Y.type === "file")
            var De = Jf;
          else if (Zf(Y))
            if (ed)
              De = Km;
            else {
              De = qm;
              var Ve = Gm;
            }
          else
            (ce = Y.nodeName) && ce.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (De = Xm);
          if (De && (De = De(n, A))) {
            rv(G, De, l, Q);
            break e;
          }
          Ve && Ve(n, Y, A), n === "focusout" && (Ve = Y._wrapperState) && Ve.controlled && Y.type === "number" && wr(Y, "number", Y.value);
        }
        switch (Ve = A ? Ju(A) : window, n) {
          case "focusin":
            (Zf(Ve) || Ve.contentEditable === "true") && (lu = Ve, Tl = A, ds = null);
            break;
          case "focusout":
            ds = Tl = lu = null;
            break;
          case "mousedown":
            nd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nd = !1, pv(G, l, Q);
            break;
          case "selectionchange":
            if (mc)
              break;
          case "keydown":
          case "keyup":
            pv(G, l, Q);
        }
        var Ce;
        if (gn)
          e: {
            switch (n) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          Cl ? tv(n, l) && (Ye = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ye = "onCompositionStart");
        Ye && (os && l.locale !== "ko" && (Cl || Ye !== "onCompositionStart" ? Ye === "onCompositionEnd" && Cl && (Ce = C()) : (ni = Q, Wu = "value" in ni ? ni.value : ni.textContent, Cl = !0)), Ve = Ec(A, Ye), 0 < Ve.length && (Ye = new qp(Ye, n, null, l, Q), G.push({ event: Ye, listeners: Ve }), Ce ? Ye.data = Ce : (Ce = nv(l), Ce !== null && (Ye.data = Ce)))), (Ce = Kf ? Im(n, l) : Qm(n, l)) && (A = Ec(A, "onBeforeInput"), 0 < A.length && (Q = new qp("onBeforeInput", "beforeinput", null, l, Q), G.push({ event: Q, listeners: A }), Q.data = Ce));
      }
      Ev(G, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ec(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Za(n, l), d != null && o.unshift(Zu(n, d, c)), d = Za(n, r), d != null && o.push(Zu(n, d, c))), n = n.return;
    }
    return o;
  }
  function uu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ld(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, x = E.alternate, A = E.stateNode;
      if (x !== null && x === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (x = Za(l, d), x != null && m.unshift(Zu(l, x, E))) : c || (x = Za(l, d), x != null && m.push(Zu(l, x, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Cv = /\r\n?/g, ud = /\u0000|\uFFFD/g;
  function Tv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Cv, `
`).replace(ud, "");
  }
  function ys(n, r, l) {
    if (r = Tv(r), Tv(n) !== r && l)
      throw Error(L(425));
  }
  function Cc() {
  }
  var od = null, sd = null;
  function ou(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var gs = typeof setTimeout == "function" ? setTimeout : void 0, Ss = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof cd < "u" ? function(n) {
    return cd.resolve(null).then(n).catch(fd);
  } : gs;
  function fd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function dd(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), La(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    La(r);
  }
  function ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Es(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Qi = Math.random().toString(36).slice(2), Na = "__reactFiber$" + Qi, Cs = "__reactProps$" + Qi, ai = "__reactContainer$" + Qi, pd = "__reactEvents$" + Qi, ey = "__reactListeners$" + Qi, ty = "__reactHandles$" + Qi;
  function Wi(n) {
    var r = n[Na];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ai] || l[Na]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Es(n); n !== null; ) {
            if (l = n[Na])
              return l;
            n = Es(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function mi(n) {
    return n = n[Na] || n[ai], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ju(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(L(33));
  }
  function Tc(n) {
    return n[Cs] || null;
  }
  var Ue = [], ii = -1;
  function It(n) {
    return { current: n };
  }
  function ke(n) {
    0 > ii || (n.current = Ue[ii], Ue[ii] = null, ii--);
  }
  function Ot(n, r) {
    ii++, Ue[ii] = n.current, n.current = r;
  }
  var Ma = {}, qn = It(Ma), Ze = It(!1), kr = Ma;
  function ya(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ma;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Wr() {
    ke(Ze), ke(qn);
  }
  function yi(n, r, l) {
    if (qn.current !== Ma)
      throw Error(L(168));
    Ot(qn, r), Ot(Ze, l);
  }
  function xl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(L(108, ht(n) || "Unknown", c));
    return R({}, l, o);
  }
  function su(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ma, kr = qn.current, Ot(qn, n), Ot(Ze, Ze.current), !0;
  }
  function xv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(L(169));
    l ? (n = xl(n, r, kr), o.__reactInternalMemoizedMergedChildContext = n, ke(Ze), ke(qn), Ot(qn, n)) : ke(Ze), Ot(Ze, l);
  }
  var Gi = null, wl = !1, ir = !1;
  function Rc(n) {
    Gi === null ? Gi = [n] : Gi.push(n);
  }
  function wv(n) {
    wl = !0, Rc(n);
  }
  function gi() {
    if (!ir && Gi !== null) {
      ir = !0;
      var n = 0, r = gt;
      try {
        var l = Gi;
        for (gt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Gi = null, wl = !1;
      } catch (c) {
        throw Gi !== null && (Gi = Gi.slice(n + 1)), qt(Wo, gi), c;
      } finally {
        gt = r, ir = !1;
      }
    }
    return null;
  }
  var za = [], _l = 0, Ua = null, cu = 0, Gr = [], qr = 0, li = null, Xr = 1, lr = "";
  function fu(n, r) {
    za[_l++] = cu, za[_l++] = Ua, Ua = n, cu = r;
  }
  function bl(n, r, l) {
    Gr[qr++] = Xr, Gr[qr++] = lr, Gr[qr++] = li, li = n;
    var o = Xr;
    n = lr;
    var c = 32 - br(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - br(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Xr = 1 << 32 - br(r) + c | l << c | o, lr = d + n;
    } else
      Xr = 1 << d | l << c | o, lr = n;
  }
  function xc(n) {
    n.return !== null && (fu(n, 1), bl(n, 1, 0));
  }
  function wc(n) {
    for (; n === Ua; )
      Ua = za[--_l], za[_l] = null, cu = za[--_l], za[_l] = null;
    for (; n === li; )
      li = Gr[--qr], Gr[qr] = null, lr = Gr[--qr], Gr[qr] = null, Xr = Gr[--qr], Gr[qr] = null;
  }
  var ga = null, Sa = null, an = !1, Aa = null;
  function vd(n, r) {
    var l = $a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, Sa = ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, Sa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = li !== null ? { id: Xr, overflow: lr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ga = n, Sa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _c(n) {
    if (an) {
      var r = Sa;
      if (r) {
        var l = r;
        if (!hd(n, r)) {
          if (md(n))
            throw Error(L(418));
          r = ma(l.nextSibling);
          var o = ga;
          r && hd(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, an = !1, ga = n);
        }
      } else {
        if (md(n))
          throw Error(L(418));
        n.flags = n.flags & -4097 | 2, an = !1, ga = n;
      }
    }
  }
  function yd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ga = n;
  }
  function bc(n) {
    if (n !== ga)
      return !1;
    if (!an)
      return yd(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ou(n.type, n.memoizedProps)), r && (r = Sa)) {
      if (md(n))
        throw _v(), Error(L(418));
      for (; r; )
        vd(n, r), r = ma(r.nextSibling);
    }
    if (yd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(L(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Sa = ma(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Sa = null;
      }
    } else
      Sa = ga ? ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _v() {
    for (var n = Sa; n; )
      n = ma(n.nextSibling);
  }
  function eo() {
    Sa = ga = null, an = !1;
  }
  function Fn(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var ny = Fe.ReactCurrentBatchConfig;
  function Kr(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var to = It(null), Si = null, no = null, Ts = null;
  function gd() {
    Ts = no = Si = null;
  }
  function Sd(n) {
    var r = to.current;
    ke(to), n._currentValue = r;
  }
  function kl(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function bn(n, r) {
    Si = n, Ts = no = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ea = !0), n.firstContext = null);
  }
  function te(n) {
    var r = n._currentValue;
    if (Ts !== n)
      if (n = { context: n, memoizedValue: r, next: null }, no === null) {
        if (Si === null)
          throw Error(L(308));
        no = n, Si.dependencies = { lanes: 0, firstContext: n };
      } else
        no = no.next = n;
    return r;
  }
  var Tr = null;
  function Ea(n) {
    Tr === null ? Tr = [n] : Tr.push(n);
  }
  function bv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ea(r)) : (l.next = c.next, c.next = l), r.interleaved = l, qi(n, o);
  }
  function qi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Dl = !1;
  function Ed(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function kv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zt(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ol(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, mt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, qi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ea(o)) : (r.next = c.next, c.next = r), o.interleaved = r, qi(n, l);
  }
  function kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Jo(n, l);
    }
  }
  function Dv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Rs(n, r, l, o) {
    var c = n.updateQueue;
    Dl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var x = E, A = x.next;
      x.next = null, m === null ? d = A : m.next = A, m = x;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = A : E.next = A, Q.lastBaseUpdate = x));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, Q = A = x = null, E = d;
      do {
        var Y = E.lane, ce = E.eventTime;
        if ((o & Y) === Y) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ee = n, _e = E;
            switch (Y = r, ce = l, _e.tag) {
              case 1:
                if (Ee = _e.payload, typeof Ee == "function") {
                  G = Ee.call(ce, G, Y);
                  break e;
                }
                G = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = _e.payload, Y = typeof Ee == "function" ? Ee.call(ce, G, Y) : Ee, Y == null)
                  break e;
                G = R({}, G, Y);
                break e;
              case 2:
                Dl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else
          ce = { eventTime: ce, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (A = Q = ce, x = G) : Q = Q.next = ce, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (x = G), c.baseState = x, c.firstBaseUpdate = A, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ru |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function ro(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(L(191, c));
          c.call(o);
        }
      }
  }
  var du = new W.Component().refs;
  function Cd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Dc = { isMounted: function(n) {
    return (n = n._reactInternals) ? le(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zn(), c = Ji(n), d = Zt(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ol(n, d, c), r !== null && (vn(r, n, c, o), kc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zn(), c = Ji(n), d = Zt(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ol(n, d, c), r !== null && (vn(r, n, c, o), kc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Zn(), o = Ji(n), c = Zt(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ol(n, c, o), r !== null && (vn(r, n, o, l), kc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Xu(l, o) || !Xu(c, d) : !0;
  }
  function Lv(n, r, l) {
    var o = !1, c = Ma, d = r.contextType;
    return typeof d == "object" && d !== null ? d = te(d) : (c = jn(r) ? kr : qn.current, o = r.contextTypes, d = (o = o != null) ? ya(n, c) : Ma), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Nv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Dc.enqueueReplaceState(r, r.state, null);
  }
  function Td(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = du, Ed(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = te(d) : (d = jn(r) ? kr : qn.current, c.context = ya(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Cd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Dc.enqueueReplaceState(c, c.state, null), Rs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ao(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === du && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(L(284));
      if (!l._owner)
        throw Error(L(290, n));
    }
    return n;
  }
  function xs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(k, _) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [_], k.flags |= 16) : N.push(_);
      }
    }
    function l(k, _) {
      if (!n)
        return null;
      for (; _ !== null; )
        r(k, _), _ = _.sibling;
      return null;
    }
    function o(k, _) {
      for (k = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? k.set(_.key, _) : k.set(_.index, _), _ = _.sibling;
      return k;
    }
    function c(k, _) {
      return k = Fl(k, _), k.index = 0, k.sibling = null, k;
    }
    function d(k, _, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < _ ? (k.flags |= 2, _) : N) : (k.flags |= 2, _)) : (k.flags |= 1048576, _);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, _, N, J) {
      return _ === null || _.tag !== 6 ? (_ = ff(N, k.mode, J), _.return = k, _) : (_ = c(_, N), _.return = k, _);
    }
    function x(k, _, N, J) {
      var De = N.type;
      return De === Me ? Q(k, _, N.props.children, J, N.key) : _ !== null && (_.elementType === De || typeof De == "object" && De !== null && De.$$typeof === wt && Mv(De) === _.type) ? (J = c(_, N.props), J.ref = ao(k, _, N), J.return = k, J) : (J = sf(N.type, N.key, N.props, null, k.mode, J), J.ref = ao(k, _, N), J.return = k, J);
    }
    function A(k, _, N, J) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== N.containerInfo || _.stateNode.implementation !== N.implementation ? (_ = $s(N, k.mode, J), _.return = k, _) : (_ = c(_, N.children || []), _.return = k, _);
    }
    function Q(k, _, N, J, De) {
      return _ === null || _.tag !== 7 ? (_ = bu(N, k.mode, J, De), _.return = k, _) : (_ = c(_, N), _.return = k, _);
    }
    function G(k, _, N) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return _ = ff("" + _, k.mode, N), _.return = k, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case xt:
            return N = sf(_.type, _.key, _.props, null, k.mode, N), N.ref = ao(k, null, _), N.return = k, N;
          case Re:
            return _ = $s(_, k.mode, N), _.return = k, _;
          case wt:
            var J = _._init;
            return G(k, J(_._payload), N);
        }
        if (yr(_) || ge(_))
          return _ = bu(_, k.mode, N, null), _.return = k, _;
        xs(k, _);
      }
      return null;
    }
    function Y(k, _, N, J) {
      var De = _ !== null ? _.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return De !== null ? null : E(k, _, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case xt:
            return N.key === De ? x(k, _, N, J) : null;
          case Re:
            return N.key === De ? A(k, _, N, J) : null;
          case wt:
            return De = N._init, Y(
              k,
              _,
              De(N._payload),
              J
            );
        }
        if (yr(N) || ge(N))
          return De !== null ? null : Q(k, _, N, J, null);
        xs(k, N);
      }
      return null;
    }
    function ce(k, _, N, J, De) {
      if (typeof J == "string" && J !== "" || typeof J == "number")
        return k = k.get(N) || null, E(_, k, "" + J, De);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case xt:
            return k = k.get(J.key === null ? N : J.key) || null, x(_, k, J, De);
          case Re:
            return k = k.get(J.key === null ? N : J.key) || null, A(_, k, J, De);
          case wt:
            var Ve = J._init;
            return ce(k, _, N, Ve(J._payload), De);
        }
        if (yr(J) || ge(J))
          return k = k.get(N) || null, Q(_, k, J, De, null);
        xs(_, J);
      }
      return null;
    }
    function Ee(k, _, N, J) {
      for (var De = null, Ve = null, Ce = _, Ye = _ = 0, In = null; Ce !== null && Ye < N.length; Ye++) {
        Ce.index > Ye ? (In = Ce, Ce = null) : In = Ce.sibling;
        var Lt = Y(k, Ce, N[Ye], J);
        if (Lt === null) {
          Ce === null && (Ce = In);
          break;
        }
        n && Ce && Lt.alternate === null && r(k, Ce), _ = d(Lt, _, Ye), Ve === null ? De = Lt : Ve.sibling = Lt, Ve = Lt, Ce = In;
      }
      if (Ye === N.length)
        return l(k, Ce), an && fu(k, Ye), De;
      if (Ce === null) {
        for (; Ye < N.length; Ye++)
          Ce = G(k, N[Ye], J), Ce !== null && (_ = d(Ce, _, Ye), Ve === null ? De = Ce : Ve.sibling = Ce, Ve = Ce);
        return an && fu(k, Ye), De;
      }
      for (Ce = o(k, Ce); Ye < N.length; Ye++)
        In = ce(Ce, k, Ye, N[Ye], J), In !== null && (n && In.alternate !== null && Ce.delete(In.key === null ? Ye : In.key), _ = d(In, _, Ye), Ve === null ? De = In : Ve.sibling = In, Ve = In);
      return n && Ce.forEach(function(el) {
        return r(k, el);
      }), an && fu(k, Ye), De;
    }
    function _e(k, _, N, J) {
      var De = ge(N);
      if (typeof De != "function")
        throw Error(L(150));
      if (N = De.call(N), N == null)
        throw Error(L(151));
      for (var Ve = De = null, Ce = _, Ye = _ = 0, In = null, Lt = N.next(); Ce !== null && !Lt.done; Ye++, Lt = N.next()) {
        Ce.index > Ye ? (In = Ce, Ce = null) : In = Ce.sibling;
        var el = Y(k, Ce, Lt.value, J);
        if (el === null) {
          Ce === null && (Ce = In);
          break;
        }
        n && Ce && el.alternate === null && r(k, Ce), _ = d(el, _, Ye), Ve === null ? De = el : Ve.sibling = el, Ve = el, Ce = In;
      }
      if (Lt.done)
        return l(
          k,
          Ce
        ), an && fu(k, Ye), De;
      if (Ce === null) {
        for (; !Lt.done; Ye++, Lt = N.next())
          Lt = G(k, Lt.value, J), Lt !== null && (_ = d(Lt, _, Ye), Ve === null ? De = Lt : Ve.sibling = Lt, Ve = Lt);
        return an && fu(k, Ye), De;
      }
      for (Ce = o(k, Ce); !Lt.done; Ye++, Lt = N.next())
        Lt = ce(Ce, k, Ye, Lt.value, J), Lt !== null && (n && Lt.alternate !== null && Ce.delete(Lt.key === null ? Ye : Lt.key), _ = d(Lt, _, Ye), Ve === null ? De = Lt : Ve.sibling = Lt, Ve = Lt);
      return n && Ce.forEach(function(Cy) {
        return r(k, Cy);
      }), an && fu(k, Ye), De;
    }
    function Nn(k, _, N, J) {
      if (typeof N == "object" && N !== null && N.type === Me && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case xt:
            e: {
              for (var De = N.key, Ve = _; Ve !== null; ) {
                if (Ve.key === De) {
                  if (De = N.type, De === Me) {
                    if (Ve.tag === 7) {
                      l(k, Ve.sibling), _ = c(Ve, N.props.children), _.return = k, k = _;
                      break e;
                    }
                  } else if (Ve.elementType === De || typeof De == "object" && De !== null && De.$$typeof === wt && Mv(De) === Ve.type) {
                    l(k, Ve.sibling), _ = c(Ve, N.props), _.ref = ao(k, Ve, N), _.return = k, k = _;
                    break e;
                  }
                  l(k, Ve);
                  break;
                } else
                  r(k, Ve);
                Ve = Ve.sibling;
              }
              N.type === Me ? (_ = bu(N.props.children, k.mode, J, N.key), _.return = k, k = _) : (J = sf(N.type, N.key, N.props, null, k.mode, J), J.ref = ao(k, _, N), J.return = k, k = J);
            }
            return m(k);
          case Re:
            e: {
              for (Ve = N.key; _ !== null; ) {
                if (_.key === Ve)
                  if (_.tag === 4 && _.stateNode.containerInfo === N.containerInfo && _.stateNode.implementation === N.implementation) {
                    l(k, _.sibling), _ = c(_, N.children || []), _.return = k, k = _;
                    break e;
                  } else {
                    l(k, _);
                    break;
                  }
                else
                  r(k, _);
                _ = _.sibling;
              }
              _ = $s(N, k.mode, J), _.return = k, k = _;
            }
            return m(k);
          case wt:
            return Ve = N._init, Nn(k, _, Ve(N._payload), J);
        }
        if (yr(N))
          return Ee(k, _, N, J);
        if (ge(N))
          return _e(k, _, N, J);
        xs(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, _ !== null && _.tag === 6 ? (l(k, _.sibling), _ = c(_, N), _.return = k, k = _) : (l(k, _), _ = ff(N, k.mode, J), _.return = k, k = _), m(k)) : l(k, _);
    }
    return Nn;
  }
  var io = zv(!0), Uv = zv(!1), ws = {}, Ei = It(ws), lo = It(ws), _s = It(ws);
  function Ll(n) {
    if (n === ws)
      throw Error(L(174));
    return n;
  }
  function Rd(n, r) {
    switch (Ot(_s, r), Ot(lo, n), Ot(Ei, ws), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _r(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _r(r, n);
    }
    ke(Ei), Ot(Ei, r);
  }
  function uo() {
    ke(Ei), ke(lo), ke(_s);
  }
  function Oc(n) {
    Ll(_s.current);
    var r = Ll(Ei.current), l = _r(r, n.type);
    r !== l && (Ot(lo, n), Ot(Ei, l));
  }
  function Ae(n) {
    lo.current === n && (ke(Ei), ke(lo));
  }
  var Oe = It(0);
  function kt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Sn = [];
  function ja() {
    for (var n = 0; n < Sn.length; n++)
      Sn[n]._workInProgressVersionPrimary = null;
    Sn.length = 0;
  }
  var bs = Fe.ReactCurrentDispatcher, xd = Fe.ReactCurrentBatchConfig, pu = 0, pn = null, kn = null, V = null, Dn = !1, He = !1, Ci = 0, Xi = 0;
  function En() {
    throw Error(L(321));
  }
  function Fa(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ri(n[l], r[l]))
        return !1;
    return !0;
  }
  function vu(n, r, l, o, c, d) {
    if (pu = d, pn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bs.current = n === null || n.memoizedState === null ? ry : ay, n = l(o, c), He) {
      d = 0;
      do {
        if (He = !1, Ci = 0, 25 <= d)
          throw Error(L(301));
        d += 1, V = kn = null, r.updateQueue = null, bs.current = iy, n = l(o, c);
      } while (He);
    }
    if (bs.current = Yc, r = kn !== null && kn.next !== null, pu = 0, V = kn = pn = null, Dn = !1, r)
      throw Error(L(300));
    return n;
  }
  function Nl() {
    var n = Ci !== 0;
    return Ci = 0, n;
  }
  function Zr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return V === null ? pn.memoizedState = V = n : V = V.next = n, V;
  }
  function Jr() {
    if (kn === null) {
      var n = pn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = kn.next;
    var r = V === null ? pn.memoizedState : V.next;
    if (r !== null)
      V = r, kn = n;
    else {
      if (n === null)
        throw Error(L(310));
      kn = n, n = { memoizedState: kn.memoizedState, baseState: kn.baseState, baseQueue: kn.baseQueue, queue: kn.queue, next: null }, V === null ? pn.memoizedState = V = n : V = V.next = n;
    }
    return V;
  }
  function hu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ks(n) {
    var r = Jr(), l = r.queue;
    if (l === null)
      throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = kn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, x = null, A = d;
      do {
        var Q = A.lane;
        if ((pu & Q) === Q)
          x !== null && (x = x.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var G = {
            lane: Q,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          x === null ? (E = x = G, m = o) : x = x.next = G, pn.lanes |= Q, Ru |= Q;
        }
        A = A.next;
      } while (A !== null && A !== d);
      x === null ? m = o : x.next = E, ri(o, r.memoizedState) || (ea = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = x, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, pn.lanes |= d, Ru |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ds(n) {
    var r = Jr(), l = r.queue;
    if (l === null)
      throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ri(d, r.memoizedState) || (ea = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Lc() {
  }
  function Nc(n, r) {
    var l = pn, o = Jr(), c = r(), d = !ri(o.memoizedState, c);
    if (d && (o.memoizedState = c, ea = !0), o = o.queue, Os(Uc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || V !== null && V.memoizedState.tag & 1) {
      if (l.flags |= 2048, mu(9, zc.bind(null, l, o, c, r), void 0, null), Tn === null)
        throw Error(L(349));
      pu & 30 || Mc(l, r, c);
    }
    return c;
  }
  function Mc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = pn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function zc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Ac(r) && jc(n);
  }
  function Uc(n, r, l) {
    return l(function() {
      Ac(r) && jc(n);
    });
  }
  function Ac(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function jc(n) {
    var r = qi(n, 1);
    r !== null && vn(r, n, 1, -1);
  }
  function Fc(n) {
    var r = Zr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hu, lastRenderedState: n }, r.queue = n, n = n.dispatch = $c.bind(null, pn, n), [r.memoizedState, n];
  }
  function mu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = pn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Hc() {
    return Jr().memoizedState;
  }
  function oo(n, r, l, o) {
    var c = Zr();
    pn.flags |= n, c.memoizedState = mu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yu(n, r, l, o) {
    var c = Jr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (kn !== null) {
      var m = kn.memoizedState;
      if (d = m.destroy, o !== null && Fa(o, m.deps)) {
        c.memoizedState = mu(r, l, d, o);
        return;
      }
    }
    pn.flags |= n, c.memoizedState = mu(1 | r, l, d, o);
  }
  function gu(n, r) {
    return oo(8390656, 8, n, r);
  }
  function Os(n, r) {
    return yu(2048, 8, n, r);
  }
  function Vc(n, r) {
    return yu(4, 2, n, r);
  }
  function Pc(n, r) {
    return yu(4, 4, n, r);
  }
  function Bc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function wd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yu(4, 4, Bc.bind(null, r, n), l);
  }
  function Su() {
  }
  function _d(n, r) {
    var l = Jr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fa(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function so(n, r) {
    var l = Jr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fa(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ml(n, r, l) {
    return pu & 21 ? (ri(l, r) || (l = eu(), pn.lanes |= l, Ru |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ea = !0), n.memoizedState = l);
  }
  function Ca(n, r) {
    var l = gt;
    gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = xd.transition;
    xd.transition = {};
    try {
      n(!1), r();
    } finally {
      gt = l, xd.transition = o;
    }
  }
  function Av() {
    return Jr().memoizedState;
  }
  function Jt(n, r, l) {
    var o = Ji(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Ls(n))
      co(r, l);
    else if (l = bv(n, r, l, o), l !== null) {
      var c = Zn();
      vn(l, n, o, c), Ns(l, r, o);
    }
  }
  function $c(n, r, l) {
    var o = Ji(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(n))
      co(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ri(E, m)) {
            var x = r.interleaved;
            x === null ? (c.next = c, Ea(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = bv(n, r, c, o), l !== null && (c = Zn(), vn(l, n, o, c), Ns(l, r, o));
    }
  }
  function Ls(n) {
    var r = n.alternate;
    return n === pn || r !== null && r === pn;
  }
  function co(n, r) {
    He = Dn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ns(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Jo(n, l);
    }
  }
  var Yc = { readContext: te, useCallback: En, useContext: En, useEffect: En, useImperativeHandle: En, useInsertionEffect: En, useLayoutEffect: En, useMemo: En, useReducer: En, useRef: En, useState: En, useDebugValue: En, useDeferredValue: En, useTransition: En, useMutableSource: En, useSyncExternalStore: En, useId: En, unstable_isNewReconciler: !1 }, ry = { readContext: te, useCallback: function(n, r) {
    return Zr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: te, useEffect: gu, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, oo(
      4194308,
      4,
      Bc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return oo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return oo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Zr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Zr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Jt.bind(null, pn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Zr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Fc, useDebugValue: Su, useDeferredValue: function(n) {
    return Zr().memoizedState = n;
  }, useTransition: function() {
    var n = Fc(!1), r = n[0];
    return n = Ca.bind(null, n[1]), Zr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = pn, c = Zr();
    if (an) {
      if (l === void 0)
        throw Error(L(407));
      l = l();
    } else {
      if (l = r(), Tn === null)
        throw Error(L(349));
      pu & 30 || Mc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, gu(Uc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, mu(9, zc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zr(), r = Tn.identifierPrefix;
    if (an) {
      var l = lr, o = Xr;
      l = (o & ~(1 << 32 - br(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ci++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Xi++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ay = {
    readContext: te,
    useCallback: _d,
    useContext: te,
    useEffect: Os,
    useImperativeHandle: wd,
    useInsertionEffect: Vc,
    useLayoutEffect: Pc,
    useMemo: so,
    useReducer: ks,
    useRef: Hc,
    useState: function() {
      return ks(hu);
    },
    useDebugValue: Su,
    useDeferredValue: function(n) {
      var r = Jr();
      return Ml(r, kn.memoizedState, n);
    },
    useTransition: function() {
      var n = ks(hu)[0], r = Jr().memoizedState;
      return [n, r];
    },
    useMutableSource: Lc,
    useSyncExternalStore: Nc,
    useId: Av,
    unstable_isNewReconciler: !1
  }, iy = { readContext: te, useCallback: _d, useContext: te, useEffect: Os, useImperativeHandle: wd, useInsertionEffect: Vc, useLayoutEffect: Pc, useMemo: so, useReducer: Ds, useRef: Hc, useState: function() {
    return Ds(hu);
  }, useDebugValue: Su, useDeferredValue: function(n) {
    var r = Jr();
    return kn === null ? r.memoizedState = n : Ml(r, kn.memoizedState, n);
  }, useTransition: function() {
    var n = Ds(hu)[0], r = Jr().memoizedState;
    return [n, r];
  }, useMutableSource: Lc, useSyncExternalStore: Nc, useId: Av, unstable_isNewReconciler: !1 };
  function zl(n, r) {
    try {
      var l = "", o = r;
      do
        l += vt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function bd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ms(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var jv = typeof WeakMap == "function" ? WeakMap : Map;
  function Fv(n, r, l) {
    l = Zt(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      nf || (nf = !0, Ad = o), Ms(n, r);
    }, l;
  }
  function Hv(n, r, l) {
    l = Zt(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ms(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ms(n, r), typeof o != "function" && (Pa === null ? Pa = /* @__PURE__ */ new Set([this]) : Pa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function zs(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new jv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = hy.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function kd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Zt(-1, 1), r.tag = 2, Ol(l, r, 1))), l.lanes |= 1), n);
  }
  var Pv = Fe.ReactCurrentOwner, ea = !1;
  function On(n, r, l, o) {
    r.child = n === null ? Uv(r, null, l, o) : io(r, n.child, l, o);
  }
  function fo(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return bn(r, c), o = vu(n, r, l, o, d, c), l = Nl(), n !== null && !ea ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (an && l && xc(r), r.flags |= 1, On(n, r, o, c), r.child);
  }
  function Ul(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Pd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ic(n, r, d, o, c)) : (n = sf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Xu, l(m, o) && n.ref === r.ref)
        return Ln(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ic(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Xu(d, o) && n.ref === r.ref)
        if (ea = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (ea = !0);
        else
          return r.lanes = n.lanes, Ln(n, r, c);
    }
    return nt(n, r, l, o, c);
  }
  function ta(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ot(To, na), na |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ot(To, na), na |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ot(To, na), na |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ot(To, na), na |= o;
    return On(n, r, c, l), r.child;
  }
  function Eu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function nt(n, r, l, o, c) {
    var d = jn(l) ? kr : qn.current;
    return d = ya(r, d), bn(r, c), l = vu(n, r, l, o, d, c), o = Nl(), n !== null && !ea ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (an && o && xc(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function Us(n, r, l, o, c) {
    if (jn(l)) {
      var d = !0;
      su(r);
    } else
      d = !1;
    if (bn(r, c), r.stateNode === null)
      js(n, r), Lv(r, l, o), Td(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var x = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = te(A) : (A = jn(l) ? kr : qn.current, A = ya(r, A));
      var Q = l.getDerivedStateFromProps, G = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || x !== A) && Nv(r, m, o, A), Dl = !1;
      var Y = r.memoizedState;
      m.state = Y, Rs(r, o, m, c), x = r.memoizedState, E !== o || Y !== x || Ze.current || Dl ? (typeof Q == "function" && (Cd(r, l, Q, o), x = r.memoizedState), (E = Dl || Ov(r, l, E, o, Y, x, A)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = x), m.props = o, m.state = x, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, kv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : Kr(r.type, E), m.props = A, G = r.pendingProps, Y = m.context, x = l.contextType, typeof x == "object" && x !== null ? x = te(x) : (x = jn(l) ? kr : qn.current, x = ya(r, x));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || Y !== x) && Nv(r, m, o, x), Dl = !1, Y = r.memoizedState, m.state = Y, Rs(r, o, m, c);
      var Ee = r.memoizedState;
      E !== G || Y !== Ee || Ze.current || Dl ? (typeof ce == "function" && (Cd(r, l, ce, o), Ee = r.memoizedState), (A = Dl || Ov(r, l, A, o, Y, Ee, x) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ee, x), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ee, x)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ee), m.props = o, m.state = Ee, m.context = x, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Qc(n, r, l, o, d, c);
  }
  function Qc(n, r, l, o, c, d) {
    Eu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && xv(r, l, !1), Ln(n, r, d);
    o = r.stateNode, Pv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = io(r, n.child, null, d), r.child = io(r, null, E, d)) : On(n, r, E, d), r.memoizedState = o.state, c && xv(r, l, !0), r.child;
  }
  function ly(n) {
    var r = n.stateNode;
    r.pendingContext ? yi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && yi(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function Bv(n, r, l, o, c) {
    return eo(), Fn(c), r.flags |= 256, On(n, r, l, o), r.child;
  }
  var As = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function $v(n, r, l) {
    var o = r.pendingProps, c = Oe.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ot(Oe, c & 1), n === null)
      return _c(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = cf(m, o, 0, null), n = bu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Cu(l), r.memoizedState = As, n) : Wc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return Dd(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var x = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = x, r.deletions = null) : (o = Fl(c, x), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = bu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Cu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = As, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Wc(n, r) {
    return r = cf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Gc(n, r, l, o) {
    return o !== null && Fn(o), io(r, n.child, null, l), n = Wc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Dd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = bd(Error(L(422))), Gc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = cf({ mode: "visible", children: o.children }, c, 0, null), d = bu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && io(r, n.child, null, m), r.child.memoizedState = Cu(m), r.memoizedState = As, d);
    if (!(r.mode & 1))
      return Gc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(L(419)), o = bd(d, o, void 0), Gc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, ea || E) {
      if (o = Tn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, qi(n, c), vn(o, n, c, -1));
      }
      return Bs(), o = bd(Error(L(421))), Gc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Vd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Sa = ma(c.nextSibling), ga = r, an = !0, Aa = null, n !== null && (Gr[qr++] = Xr, Gr[qr++] = lr, Gr[qr++] = li, Xr = n.id, lr = n.overflow, li = r), r = Wc(r, o.children), r.flags |= 4096, r);
  }
  function Yv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), kl(n.return, r, l);
  }
  function qc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Od(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (On(n, r, o.children, l), o = Oe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Yv(n, l, r);
            else if (n.tag === 19)
              Yv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Ot(Oe, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && kt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), qc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && kt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          qc(r, !0, l, null, d);
          break;
        case "together":
          qc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function js(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ln(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ru |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ki(n, r, l) {
    switch (r.tag) {
      case 3:
        ly(r), eo();
        break;
      case 5:
        Oc(r);
        break;
      case 1:
        jn(r.type) && su(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ot(to, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ot(Oe, Oe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? $v(n, r, l) : (Ot(Oe, Oe.current & 1), n = Ln(n, r, l), n !== null ? n.sibling : null);
        Ot(Oe, Oe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Od(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ot(Oe, Oe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ta(n, r, l);
    }
    return Ln(n, r, l);
  }
  var Ti, po, vo, Ha;
  Ti = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, po = function() {
  }, vo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Ll(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = yn(n, c), o = yn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = oa(n, c), o = oa(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Cc);
      }
      Dt(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (Xe.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var x = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && x !== E && (x != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || x && x.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in x)
                x.hasOwnProperty(m) && E[m] !== x[m] && (l || (l = {}), l[m] = x[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = x;
          else
            A === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, E = E ? E.__html : void 0, x != null && E !== x && (d = d || []).push(A, x)) : A === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(A, "" + x) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (Xe.hasOwnProperty(A) ? (x != null && A === "onScroll" && Yt("scroll", n), d || E === x || (d = [])) : (d = d || []).push(A, x));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Ha = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Cn(n, r) {
    if (!an)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (wc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rr(r), null;
      case 1:
        return jn(r.type) && Wr(), Rr(r), null;
      case 3:
        return o = r.stateNode, uo(), ke(Ze), ke(qn), ja(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (jd(Aa), Aa = null))), po(n, r), Rr(r), null;
      case 5:
        Ae(r);
        var c = Ll(_s.current);
        if (l = r.type, n !== null && r.stateNode != null)
          vo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(L(166));
            return Rr(r), null;
          }
          if (n = Ll(Ei.current), bc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Na] = r, o[Cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", o), Yt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Yi.length; c++)
                  Yt(Yi[c], o);
                break;
              case "source":
                Yt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  o
                ), Yt("load", o);
                break;
              case "details":
                Yt("toggle", o);
                break;
              case "input":
                nr(o, d), Yt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", o);
                break;
              case "textarea":
                sa(o, d), Yt("invalid", o);
            }
            Dt(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && ys(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && ys(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : Xe.hasOwnProperty(m) && E != null && m === "onScroll" && Yt("scroll", o);
              }
            switch (l) {
              case "input":
                tr(o), Un(o, d, !0);
                break;
              case "textarea":
                tr(o), ca(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = rr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Na] = r, n[Cs] = o, Ti(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = _n(l, o), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Yi.length; c++)
                    Yt(Yi[c], n);
                  c = o;
                  break;
                case "source":
                  Yt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = o;
                  break;
                case "details":
                  Yt("toggle", n), c = o;
                  break;
                case "input":
                  nr(n, o), c = yn(n, o), Yt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  sa(n, o), c = oa(n, o), Yt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dt(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var x = E[d];
                  d === "style" ? lt(n, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && fa(n, x)) : d === "children" ? typeof x == "string" ? (l !== "textarea" || x !== "") && da(n, x) : typeof x == "number" && da(n, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Xe.hasOwnProperty(d) ? x != null && d === "onScroll" && Yt("scroll", n) : x != null && tt(n, d, x, m));
                }
              switch (l) {
                case "input":
                  tr(n), Un(n, o, !1);
                  break;
                case "textarea":
                  tr(n), ca(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ft(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ha(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(L(166));
          if (l = Ll(_s.current), Ll(Ei.current), bc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Na] = r, (d = o.nodeValue !== l) && (n = ga, n !== null))
              switch (n.tag) {
                case 3:
                  ys(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && ys(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Na] = r, r.stateNode = o;
        }
        return Rr(r), null;
      case 13:
        if (ke(Oe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && Sa !== null && r.mode & 1 && !(r.flags & 128))
            _v(), eo(), r.flags |= 98560, d = !1;
          else if (d = bc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(L(317));
              d[Na] = r;
            } else
              eo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rr(r), d = !1;
          } else
            Aa !== null && (jd(Aa), Aa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Oe.current & 1 ? $n === 0 && ($n = 3) : Bs())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return uo(), po(n, r), n === null && hi(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return Sd(r.type._context), Rr(r), null;
      case 17:
        return jn(r.type) && Wr(), Rr(r), null;
      case 19:
        if (ke(Oe), d = r.memoizedState, d === null)
          return Rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Cn(d, !1);
          else {
            if ($n !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = kt(n), m !== null) {
                  for (r.flags |= 128, Cn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ot(Oe, Oe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Kt() > xo && (r.flags |= 128, o = !0, Cn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = kt(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Cn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an)
                return Rr(r), null;
            } else
              2 * Kt() - d.renderingStartTime > xo && l !== 1073741824 && (r.flags |= 128, o = !0, Cn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Kt(), r.sibling = null, l = Oe.current, Ot(Oe, o ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return uf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? na & 1073741824 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function oy(n, r) {
    switch (wc(r), r.tag) {
      case 1:
        return jn(r.type) && Wr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return uo(), ke(Ze), ke(qn), ja(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ae(r), null;
      case 13:
        if (ke(Oe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(L(340));
          eo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ke(Oe), null;
      case 4:
        return uo(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return uf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ho = !1, ur = !1, Xc = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function mo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Rn(n, r, o);
        }
      else
        l.current = null;
  }
  function Ld(n, r, l) {
    try {
      l();
    } catch (o) {
      Rn(n, r, o);
    }
  }
  var Kc = !1;
  function sy(n, r) {
    if (od = Yu, n = dv(), fs(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, x = -1, A = 0, Q = 0, G = n, Y = null;
            t:
              for (; ; ) {
                for (var ce; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (x = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (ce = G.firstChild) !== null; )
                  Y = G, G = ce;
                for (; ; ) {
                  if (G === n)
                    break t;
                  if (Y === l && ++A === c && (E = m), Y === d && ++Q === o && (x = m), (ce = G.nextSibling) !== null)
                    break;
                  G = Y, Y = G.parentNode;
                }
                G = ce;
              }
            l = E === -1 || x === -1 ? null : { start: E, end: x };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (sd = { focusedElem: n, selectionRange: l }, Yu = !1, me = r; me !== null; )
      if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, me = n;
      else
        for (; me !== null; ) {
          r = me;
          try {
            var Ee = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ee !== null) {
                    var _e = Ee.memoizedProps, Nn = Ee.memoizedState, k = r.stateNode, _ = k.getSnapshotBeforeUpdate(r.elementType === r.type ? _e : Kr(r.type, _e), Nn);
                    k.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var N = r.stateNode.containerInfo;
                  N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(L(163));
              }
          } catch (J) {
            Rn(r, r.return, J);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, me = n;
            break;
          }
          me = r.return;
        }
    return Ee = Kc, Kc = !1, Ee;
  }
  function yo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ld(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Zc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Iv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Iv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Na], delete r[Cs], delete r[pd], delete r[ey], delete r[ty])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Nd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Nd(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Fs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Cc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Fs(n, r, l), n = n.sibling; n !== null; )
        Fs(n, r, l), n = n.sibling;
  }
  function go(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (go(n, r, l), n = n.sibling; n !== null; )
        go(n, r, l), n = n.sibling;
  }
  var sn = null, Xn = !1;
  function Dr(n, r, l) {
    for (l = l.child; l !== null; )
      So(n, r, l), l = l.sibling;
  }
  function So(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function")
      try {
        $r.onCommitFiberUnmount(vl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ur || mo(l, r);
      case 6:
        var o = sn, c = Xn;
        sn = null, Dr(n, r, l), sn = o, Xn = c, sn !== null && (Xn ? (n = sn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : sn.removeChild(l.stateNode));
        break;
      case 18:
        sn !== null && (Xn ? (n = sn, l = l.stateNode, n.nodeType === 8 ? dd(n.parentNode, l) : n.nodeType === 1 && dd(n, l), La(n)) : dd(sn, l.stateNode));
        break;
      case 4:
        o = sn, c = Xn, sn = l.stateNode.containerInfo, Xn = !0, Dr(n, r, l), sn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ld(l, r, m), c = c.next;
          } while (c !== o);
        }
        Dr(n, r, l);
        break;
      case 1:
        if (!ur && (mo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            Rn(l, r, E);
          }
        Dr(n, r, l);
        break;
      case 21:
        Dr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ur = (o = ur) || l.memoizedState !== null, Dr(n, r, l), ur = o) : Dr(n, r, l);
        break;
      default:
        Dr(n, r, l);
    }
  }
  function Eo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Xc()), r.forEach(function(o) {
        var c = my.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Kn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  sn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  sn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  sn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (sn === null)
            throw Error(L(160));
          So(d, m, c), sn = null, Xn = !1;
          var x = c.alternate;
          x !== null && (x.return = null), c.return = null;
        } catch (A) {
          Rn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Wv(r, n), r = r.sibling;
  }
  function Wv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Kn(r, n), Ri(n), o & 4) {
          try {
            yo(3, n, n.return), Zc(3, n);
          } catch (_e) {
            Rn(n, n.return, _e);
          }
          try {
            yo(5, n, n.return);
          } catch (_e) {
            Rn(n, n.return, _e);
          }
        }
        break;
      case 1:
        Kn(r, n), Ri(n), o & 512 && l !== null && mo(l, l.return);
        break;
      case 5:
        if (Kn(r, n), Ri(n), o & 512 && l !== null && mo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (_e) {
            Rn(n, n.return, _e);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Vn(c, d), _n(E, m);
              var A = _n(E, d);
              for (m = 0; m < x.length; m += 2) {
                var Q = x[m], G = x[m + 1];
                Q === "style" ? lt(c, G) : Q === "dangerouslySetInnerHTML" ? fa(c, G) : Q === "children" ? da(c, G) : tt(c, Q, G, A);
              }
              switch (E) {
                case "input":
                  zn(c, d);
                  break;
                case "textarea":
                  gr(c, d);
                  break;
                case "select":
                  var Y = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ce = d.value;
                  ce != null ? Pn(c, !!d.multiple, ce, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Pn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Cs] = d;
            } catch (_e) {
              Rn(n, n.return, _e);
            }
        }
        break;
      case 6:
        if (Kn(r, n), Ri(n), o & 4) {
          if (n.stateNode === null)
            throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (_e) {
            Rn(n, n.return, _e);
          }
        }
        break;
      case 3:
        if (Kn(r, n), Ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            La(r.containerInfo);
          } catch (_e) {
            Rn(n, n.return, _e);
          }
        break;
      case 4:
        Kn(r, n), Ri(n);
        break;
      case 13:
        Kn(r, n), Ri(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (tf = Kt())), o & 4 && Eo(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (ur = (A = ur) || Q, Kn(r, n), ur = A) : Kn(r, n), Ri(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !Q && n.mode & 1)
            for (me = n, Q = n.child; Q !== null; ) {
              for (G = me = Q; me !== null; ) {
                switch (Y = me, ce = Y.child, Y.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yo(4, Y, Y.return);
                    break;
                  case 1:
                    mo(Y, Y.return);
                    var Ee = Y.stateNode;
                    if (typeof Ee.componentWillUnmount == "function") {
                      o = Y, l = Y.return;
                      try {
                        r = o, Ee.props = r.memoizedProps, Ee.state = r.memoizedState, Ee.componentWillUnmount();
                      } catch (_e) {
                        Rn(o, l, _e);
                      }
                    }
                    break;
                  case 5:
                    mo(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      Gv(G);
                      continue;
                    }
                }
                ce !== null ? (ce.return = Y, me = ce) : Gv(G);
              }
              Q = Q.sibling;
            }
          e:
            for (Q = null, G = n; ; ) {
              if (G.tag === 5) {
                if (Q === null) {
                  Q = G;
                  try {
                    c = G.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, x = G.memoizedProps.style, m = x != null && x.hasOwnProperty("display") ? x.display : null, E.style.display = Ne("display", m));
                  } catch (_e) {
                    Rn(n, n.return, _e);
                  }
                }
              } else if (G.tag === 6) {
                if (Q === null)
                  try {
                    G.stateNode.nodeValue = A ? "" : G.memoizedProps;
                  } catch (_e) {
                    Rn(n, n.return, _e);
                  }
              } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
                G.child.return = G, G = G.child;
                continue;
              }
              if (G === n)
                break e;
              for (; G.sibling === null; ) {
                if (G.return === null || G.return === n)
                  break e;
                Q === G && (Q = null), G = G.return;
              }
              Q === G && (Q = null), G.sibling.return = G.return, G = G.sibling;
            }
        }
        break;
      case 19:
        Kn(r, n), Ri(n), o & 4 && Eo(n);
        break;
      case 21:
        break;
      default:
        Kn(
          r,
          n
        ), Ri(n);
    }
  }
  function Ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Nd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(L(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = Qv(n);
            go(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Qv(n);
            Fs(n, E, m);
            break;
          default:
            throw Error(L(161));
        }
      } catch (x) {
        Rn(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function cy(n, r, l) {
    me = n, Md(n);
  }
  function Md(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ho;
        if (!m) {
          var E = c.alternate, x = E !== null && E.memoizedState !== null || ur;
          E = ho;
          var A = ur;
          if (ho = m, (ur = x) && !A)
            for (me = c; me !== null; )
              m = me, x = m.child, m.tag === 22 && m.memoizedState !== null ? zd(c) : x !== null ? (x.return = m, me = x) : zd(c);
          for (; d !== null; )
            me = d, Md(d), d = d.sibling;
          me = c, ho = E, ur = A;
        }
        Co(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Co(n);
    }
  }
  function Co(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ur || Zc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ur)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Kr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ro(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  ro(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var x = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && l.focus();
                      break;
                    case "img":
                      x.src && (l.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var Q = A.memoizedState;
                    if (Q !== null) {
                      var G = Q.dehydrated;
                      G !== null && La(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(L(163));
            }
          ur || r.flags & 512 && Jc(r);
        } catch (Y) {
          Rn(r, r.return, Y);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Gv(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function zd(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Zc(4, r);
            } catch (x) {
              Rn(r, l, x);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (x) {
                Rn(r, c, x);
              }
            }
            var d = r.return;
            try {
              Jc(r);
            } catch (x) {
              Rn(r, d, x);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Jc(r);
            } catch (x) {
              Rn(r, m, x);
            }
        }
      } catch (x) {
        Rn(r, r.return, x);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var fy = Math.ceil, Tu = Fe.ReactCurrentDispatcher, ef = Fe.ReactCurrentOwner, Va = Fe.ReactCurrentBatchConfig, mt = 0, Tn = null, ln = null, Bn = 0, na = 0, To = It(0), $n = 0, Hs = null, Ru = 0, Ro = 0, Ud = 0, Al = null, xr = null, tf = 0, xo = 1 / 0, Zi = null, nf = !1, Ad = null, Pa = null, wo = !1, Ba = null, rf = 0, Vs = 0, af = null, Ps = -1, xu = 0;
  function Zn() {
    return mt & 6 ? Kt() : Ps !== -1 ? Ps : Ps = Kt();
  }
  function Ji(n) {
    return n.mode & 1 ? mt & 2 && Bn !== 0 ? Bn & -Bn : ny.transition !== null ? (xu === 0 && (xu = eu()), xu) : (n = gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : rs(n.type)), n) : 1;
  }
  function vn(n, r, l, o) {
    if (50 < Vs)
      throw Vs = 0, af = null, Error(L(185));
    ml(n, l, o), (!(mt & 2) || n !== Tn) && (n === Tn && (!(mt & 2) && (Ro |= l), $n === 4 && xi(n, Bn)), Yn(n, o), l === 1 && mt === 0 && !(r.mode & 1) && (xo = Kt() + 500, wl && gi()));
  }
  function Yn(n, r) {
    var l = n.callbackNode;
    hl(n, r);
    var o = di(n, n === Tn ? Bn : 0);
    if (o === 0)
      l !== null && Xt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Xt(l), r === 1)
        n.tag === 0 ? wv(_o.bind(null, n)) : Rc(_o.bind(null, n)), Rv(function() {
          !(mt & 6) && gi();
        }), l = null;
      else {
        switch (es(o)) {
          case 1:
            l = Wo;
            break;
          case 4:
            l = fi;
            break;
          case 16:
            l = ut;
            break;
          case 536870912:
            l = Ui;
            break;
          default:
            l = ut;
        }
        l = nh(l, lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function lf(n, r) {
    if (Ps = -1, xu = 0, mt & 6)
      throw Error(L(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l)
      return null;
    var o = di(n, n === Tn ? Bn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = of(n, o);
    else {
      r = o;
      var c = mt;
      mt |= 2;
      var d = Xv();
      (Tn !== n || Bn !== r) && (Zi = null, xo = Kt() + 500, _u(n, r));
      do
        try {
          py();
          break;
        } catch (E) {
          qv(n, E);
        }
      while (!0);
      gd(), Tu.current = d, mt = c, ln !== null ? r = 0 : (Tn = null, Bn = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = pi(n), c !== 0 && (o = c, r = wu(n, c))), r === 1)
        throw l = Hs, _u(n, 0), xi(n, o), Yn(n, Kt()), l;
      if (r === 6)
        xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fd(c) && (r = of(n, o), r === 2 && (d = pi(n), d !== 0 && (o = d, r = wu(n, d))), r === 1))
          throw l = Hs, _u(n, 0), xi(n, o), Yn(n, Kt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            jl(n, xr, Zi);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = tf + 500 - Kt(), 10 < r)) {
              if (di(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Zn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = gs(jl.bind(null, n, xr, Zi), r);
              break;
            }
            jl(n, xr, Zi);
            break;
          case 4:
            if (xi(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - br(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Kt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * fy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = gs(jl.bind(null, n, xr, Zi), o);
              break;
            }
            jl(n, xr, Zi);
            break;
          case 5:
            jl(n, xr, Zi);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return Yn(n, Kt()), n.callbackNode === l ? lf.bind(null, n) : null;
  }
  function wu(n, r) {
    var l = Al;
    return n.current.memoizedState.isDehydrated && (_u(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = xr, xr = l, r !== null && jd(r)), n;
  }
  function jd(n) {
    xr === null ? xr = n : xr.push.apply(xr, n);
  }
  function Fd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ri(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function xi(n, r) {
    for (r &= ~Ud, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - br(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function _o(n) {
    if (mt & 6)
      throw Error(L(327));
    bo();
    var r = di(n, 0);
    if (!(r & 1))
      return Yn(n, Kt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = pi(n);
      o !== 0 && (r = o, l = wu(n, o));
    }
    if (l === 1)
      throw l = Hs, _u(n, 0), xi(n, r), Yn(n, Kt()), l;
    if (l === 6)
      throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jl(n, xr, Zi), Yn(n, Kt()), null;
  }
  function Hd(n, r) {
    var l = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = l, mt === 0 && (xo = Kt() + 500, wl && gi());
    }
  }
  function wi(n) {
    Ba !== null && Ba.tag === 0 && !(mt & 6) && bo();
    var r = mt;
    mt |= 1;
    var l = Va.transition, o = gt;
    try {
      if (Va.transition = null, gt = 1, n)
        return n();
    } finally {
      gt = o, Va.transition = l, mt = r, !(mt & 6) && gi();
    }
  }
  function uf() {
    na = To.current, ke(To);
  }
  function _u(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ss(l)), ln !== null)
      for (l = ln.return; l !== null; ) {
        var o = l;
        switch (wc(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Wr();
            break;
          case 3:
            uo(), ke(Ze), ke(qn), ja();
            break;
          case 5:
            Ae(o);
            break;
          case 4:
            uo();
            break;
          case 13:
            ke(Oe);
            break;
          case 19:
            ke(Oe);
            break;
          case 10:
            Sd(o.type._context);
            break;
          case 22:
          case 23:
            uf();
        }
        l = l.return;
      }
    if (Tn = n, ln = n = Fl(n.current, null), Bn = na = r, $n = 0, Hs = null, Ud = Ro = Ru = 0, xr = Al = null, Tr !== null) {
      for (r = 0; r < Tr.length; r++)
        if (l = Tr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      Tr = null;
    }
    return n;
  }
  function qv(n, r) {
    do {
      var l = ln;
      try {
        if (gd(), bs.current = Yc, Dn) {
          for (var o = pn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dn = !1;
        }
        if (pu = 0, V = kn = pn = null, He = !1, Ci = 0, ef.current = null, l === null || l.return === null) {
          $n = 1, Hs = r, ln = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, x = r;
          if (r = Bn, E.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var A = x, Q = E, G = Q.tag;
            if (!(Q.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var Y = Q.alternate;
              Y ? (Q.updateQueue = Y.updateQueue, Q.memoizedState = Y.memoizedState, Q.lanes = Y.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = Vv(m);
            if (ce !== null) {
              ce.flags &= -257, kd(ce, m, E, d, r), ce.mode & 1 && zs(d, A, r), r = ce, x = A;
              var Ee = r.updateQueue;
              if (Ee === null) {
                var _e = /* @__PURE__ */ new Set();
                _e.add(x), r.updateQueue = _e;
              } else
                Ee.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                zs(d, A, r), Bs();
                break e;
              }
              x = Error(L(426));
            }
          } else if (an && E.mode & 1) {
            var Nn = Vv(m);
            if (Nn !== null) {
              !(Nn.flags & 65536) && (Nn.flags |= 256), kd(Nn, m, E, d, r), Fn(zl(x, E));
              break e;
            }
          }
          d = x = zl(x, E), $n !== 4 && ($n = 2), Al === null ? Al = [d] : Al.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Fv(d, x, r);
                Dv(d, k);
                break e;
              case 1:
                E = x;
                var _ = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Pa === null || !Pa.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Hv(d, E, r);
                  Dv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Zv(l);
      } catch (De) {
        r = De, ln === l && l !== null && (ln = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xv() {
    var n = Tu.current;
    return Tu.current = Yc, n === null ? Yc : n;
  }
  function Bs() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Tn === null || !(Ru & 268435455) && !(Ro & 268435455) || xi(Tn, Bn);
  }
  function of(n, r) {
    var l = mt;
    mt |= 2;
    var o = Xv();
    (Tn !== n || Bn !== r) && (Zi = null, _u(n, r));
    do
      try {
        dy();
        break;
      } catch (c) {
        qv(n, c);
      }
    while (!0);
    if (gd(), mt = l, Tu.current = o, ln !== null)
      throw Error(L(261));
    return Tn = null, Bn = 0, $n;
  }
  function dy() {
    for (; ln !== null; )
      Kv(ln);
  }
  function py() {
    for (; ln !== null && !Er(); )
      Kv(ln);
  }
  function Kv(n) {
    var r = th(n.alternate, n, na);
    n.memoizedProps = n.pendingProps, r === null ? Zv(n) : ln = r, ef.current = null;
  }
  function Zv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = oy(l, r), l !== null) {
          l.flags &= 32767, ln = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, ln = null;
          return;
        }
      } else if (l = uy(l, r, na), l !== null) {
        ln = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        ln = r;
        return;
      }
      ln = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function jl(n, r, l) {
    var o = gt, c = Va.transition;
    try {
      Va.transition = null, gt = 1, vy(n, r, l, o);
    } finally {
      Va.transition = c, gt = o;
    }
    return null;
  }
  function vy(n, r, l, o) {
    do
      bo();
    while (Ba !== null);
    if (mt & 6)
      throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zo(n, d), n === Tn && (ln = Tn = null, Bn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || wo || (wo = !0, nh(ut, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Va.transition, Va.transition = null;
      var m = gt;
      gt = 1;
      var E = mt;
      mt |= 4, ef.current = null, sy(n, l), Wv(l, n), iu(sd), Yu = !!od, sd = od = null, n.current = l, cy(l), ci(), mt = E, gt = m, Va.transition = d;
    } else
      n.current = l;
    if (wo && (wo = !1, Ba = n, rf = c), d = n.pendingLanes, d === 0 && (Pa = null), Go(l.stateNode), Yn(n, Kt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (nf)
      throw nf = !1, n = Ad, Ad = null, n;
    return rf & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === af ? Vs++ : (Vs = 0, af = n) : Vs = 0, gi(), null;
  }
  function bo() {
    if (Ba !== null) {
      var n = es(rf), r = Va.transition, l = gt;
      try {
        if (Va.transition = null, gt = 16 > n ? 16 : n, Ba === null)
          var o = !1;
        else {
          if (n = Ba, Ba = null, rf = 0, mt & 6)
            throw Error(L(331));
          var c = mt;
          for (mt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var x = 0; x < E.length; x++) {
                  var A = E[x];
                  for (me = A; me !== null; ) {
                    var Q = me;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(8, Q, d);
                    }
                    var G = Q.child;
                    if (G !== null)
                      G.return = Q, me = G;
                    else
                      for (; me !== null; ) {
                        Q = me;
                        var Y = Q.sibling, ce = Q.return;
                        if (Iv(Q), Q === A) {
                          me = null;
                          break;
                        }
                        if (Y !== null) {
                          Y.return = ce, me = Y;
                          break;
                        }
                        me = ce;
                      }
                  }
                }
                var Ee = d.alternate;
                if (Ee !== null) {
                  var _e = Ee.child;
                  if (_e !== null) {
                    Ee.child = null;
                    do {
                      var Nn = _e.sibling;
                      _e.sibling = null, _e = Nn;
                    } while (_e !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, me = m;
            else
              e:
                for (; me !== null; ) {
                  if (d = me, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(9, d, d.return);
                    }
                  var k = d.sibling;
                  if (k !== null) {
                    k.return = d.return, me = k;
                    break e;
                  }
                  me = d.return;
                }
          }
          var _ = n.current;
          for (me = _; me !== null; ) {
            m = me;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null)
              N.return = m, me = N;
            else
              e:
                for (m = _; me !== null; ) {
                  if (E = me, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Zc(9, E);
                      }
                    } catch (De) {
                      Rn(E, E.return, De);
                    }
                  if (E === m) {
                    me = null;
                    break e;
                  }
                  var J = E.sibling;
                  if (J !== null) {
                    J.return = E.return, me = J;
                    break e;
                  }
                  me = E.return;
                }
          }
          if (mt = c, gi(), $r && typeof $r.onPostCommitFiberRoot == "function")
            try {
              $r.onPostCommitFiberRoot(vl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        gt = l, Va.transition = r;
      }
    }
    return !1;
  }
  function Jv(n, r, l) {
    r = zl(l, r), r = Fv(n, r, 1), n = Ol(n, r, 1), r = Zn(), n !== null && (ml(n, 1, r), Yn(n, r));
  }
  function Rn(n, r, l) {
    if (n.tag === 3)
      Jv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Jv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pa === null || !Pa.has(o))) {
            n = zl(l, n), n = Hv(r, n, 1), r = Ol(r, n, 1), n = Zn(), r !== null && (ml(r, 1, n), Yn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function hy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Zn(), n.pingedLanes |= n.suspendedLanes & l, Tn === n && (Bn & l) === l && ($n === 4 || $n === 3 && (Bn & 130023424) === Bn && 500 > Kt() - tf ? _u(n, 0) : Ud |= l), Yn(n, r);
  }
  function eh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Vu, Vu <<= 1, !(Vu & 130023424) && (Vu = 4194304)) : r = 1);
    var l = Zn();
    n = qi(n, r), n !== null && (ml(n, r, l), Yn(n, l));
  }
  function Vd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), eh(n, l);
  }
  function my(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    o !== null && o.delete(r), eh(n, l);
  }
  var th;
  th = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ze.current)
        ea = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return ea = !1, Ki(n, r, l);
        ea = !!(n.flags & 131072);
      }
    else
      ea = !1, an && r.flags & 1048576 && bl(r, cu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        js(n, r), n = r.pendingProps;
        var c = ya(r, qn.current);
        bn(r, l), c = vu(null, r, o, n, c, l);
        var d = Nl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(o) ? (d = !0, su(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ed(r), c.updater = Dc, r.stateNode = c, c._reactInternals = r, Td(r, o, n, l), r = Qc(null, r, o, !0, d, l)) : (r.tag = 0, an && d && xc(r), On(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (js(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = Kr(o, n), c) {
            case 0:
              r = nt(null, r, o, n, l);
              break e;
            case 1:
              r = Us(null, r, o, n, l);
              break e;
            case 11:
              r = fo(null, r, o, n, l);
              break e;
            case 14:
              r = Ul(null, r, o, Kr(o.type, n), l);
              break e;
          }
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), nt(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Us(n, r, o, c, l);
      case 3:
        e: {
          if (ly(r), n === null)
            throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, kv(n, r), Rs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = zl(Error(L(423)), r), r = Bv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = zl(Error(L(424)), r), r = Bv(n, r, o, l, c);
              break e;
            } else
              for (Sa = ma(r.stateNode.containerInfo.firstChild), ga = r, an = !0, Aa = null, l = Uv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (eo(), o === c) {
              r = Ln(n, r, l);
              break e;
            }
            On(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Oc(r), n === null && _c(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ou(o, c) ? m = null : d !== null && ou(o, d) && (r.flags |= 32), Eu(n, r), On(n, r, m, l), r.child;
      case 6:
        return n === null && _c(r), null;
      case 13:
        return $v(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = io(r, null, o, l) : On(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), fo(n, r, o, c, l);
      case 7:
        return On(n, r, r.pendingProps, l), r.child;
      case 8:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ot(to, o._currentValue), o._currentValue = m, d !== null)
            if (ri(d.value, m)) {
              if (d.children === c.children && !Ze.current) {
                r = Ln(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var x = E.firstContext; x !== null; ) {
                    if (x.context === o) {
                      if (d.tag === 1) {
                        x = Zt(-1, l & -l), x.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var Q = A.pending;
                          Q === null ? x.next = x : (x.next = Q.next, Q.next = x), A.pending = x;
                        }
                      }
                      d.lanes |= l, x = d.alternate, x !== null && (x.lanes |= l), kl(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(L(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), kl(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          On(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, bn(r, l), c = te(c), o = o(c), r.flags |= 1, On(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Kr(o, r.pendingProps), c = Kr(o.type, c), Ul(n, r, o, c, l);
      case 15:
        return Ic(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), js(n, r), r.tag = 1, jn(o) ? (n = !0, su(r)) : n = !1, bn(r, l), Lv(r, o, c), Td(r, o, c, l), Qc(null, r, o, !0, n, l);
      case 19:
        return Od(n, r, l);
      case 22:
        return ta(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function nh(n, r) {
    return qt(n, r);
  }
  function rh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, l, o) {
    return new rh(n, r, l, o);
  }
  function Pd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function")
      return Pd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === St)
        return 11;
      if (n === rt)
        return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = $a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function sf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Pd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Me:
            return bu(l.children, c, d, r);
          case Ie:
            m = 8, c |= 8;
            break;
          case wn:
            return n = $a(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
          case en:
            return n = $a(13, l, r, c), n.elementType = en, n.lanes = d, n;
          case We:
            return n = $a(19, l, r, c), n.elementType = We, n.lanes = d, n;
          case at:
            return cf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case mn:
                  m = 10;
                  break e;
                case Wt:
                  m = 9;
                  break e;
                case St:
                  m = 11;
                  break e;
                case rt:
                  m = 14;
                  break e;
                case wt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(L(130, n == null ? n : typeof n, ""));
        }
    return r = $a(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function bu(n, r, l, o) {
    return n = $a(7, n, o, r), n.lanes = l, n;
  }
  function cf(n, r, l, o) {
    return n = $a(22, n, o, r), n.elementType = at, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function ff(n, r, l) {
    return n = $a(6, n, null, r), n.lanes = l, n;
  }
  function $s(n, r, l) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ys(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tu(0), this.expirationTimes = tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Bd(n, r, l, o, c, d, m, E, x) {
    return n = new Ys(n, r, l, E, x), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = $a(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(d), n;
  }
  function ah(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function $d(n) {
    if (!n)
      return Ma;
    n = n._reactInternals;
    e: {
      if (le(n) !== n || n.tag !== 1)
        throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (jn(l))
        return xl(n, l, r);
    }
    return r;
  }
  function Yd(n, r, l, o, c, d, m, E, x) {
    return n = Bd(l, o, !0, n, c, d, m, E, x), n.context = $d(null), l = n.current, o = Zn(), c = Ji(l), d = Zt(o, c), d.callback = r ?? null, Ol(l, d, c), n.current.lanes = c, ml(n, c, o), Yn(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = Zn(), m = Ji(c);
    return l = $d(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zt(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ol(c, r, m), n !== null && (vn(n, c, m, d), kc(n, c, m)), m;
  }
  function Is(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ih(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Id(n, r) {
    ih(n, r), (n = n.alternate) && ih(n, r);
  }
  function gy() {
    return null;
  }
  var Qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function pf(n) {
    this._internalRoot = n;
  }
  Qs.prototype.render = pf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(L(409));
    df(n, r, null, null);
  }, Qs.prototype.unmount = pf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      wi(function() {
        df(null, n, null, null);
      }), r[ai] = null;
    }
  };
  function Qs(n) {
    this._internalRoot = n;
  }
  Qs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = _t();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < nn.length && r !== 0 && r < nn[l].priority; l++)
        ;
      nn.splice(l, 0, n), l === 0 && ti(n);
    }
  };
  function Hl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function lh() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = Is(m);
          d.call(A);
        };
      }
      var m = Yd(r, o, n, 0, null, !1, !1, "", lh);
      return n._reactRootContainer = m, n[ai] = m.current, hi(n.nodeType === 8 ? n.parentNode : n), wi(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = Is(x);
        E.call(A);
      };
    }
    var x = Bd(n, 0, !1, null, null, !1, !1, "", lh);
    return n._reactRootContainer = x, n[ai] = x.current, hi(n.nodeType === 8 ? n.parentNode : n), wi(function() {
      df(r, x, l, o);
    }), x;
  }
  function hf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var x = Is(m);
          E.call(x);
        };
      }
      df(r, m, n, c);
    } else
      m = Sy(l, r, n, c, o);
    return Is(m);
  }
  Pu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ai(r.pendingLanes);
          l !== 0 && (Jo(r, l | 1), Yn(r, Kt()), !(mt & 6) && (xo = Kt() + 500, gi()));
        }
        break;
      case 13:
        wi(function() {
          var o = qi(n, 1);
          if (o !== null) {
            var c = Zn();
            vn(o, n, 1, c);
          }
        }), Id(n, 1);
    }
  }, yl = function(n) {
    if (n.tag === 13) {
      var r = qi(n, 134217728);
      if (r !== null) {
        var l = Zn();
        vn(r, n, 134217728, l);
      }
      Id(n, 134217728);
    }
  }, ts = function(n) {
    if (n.tag === 13) {
      var r = Ji(n), l = qi(n, r);
      if (l !== null) {
        var o = Zn();
        vn(l, n, r, o);
      }
      Id(n, r);
    }
  }, _t = function() {
    return gt;
  }, Bu = function(n, r) {
    var l = gt;
    try {
      return gt = n, r();
    } finally {
      gt = l;
    }
  }, Ft = function(n, r, l) {
    switch (r) {
      case "input":
        if (zn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Tc(o);
              if (!c)
                throw Error(L(90));
              Hr(o), zn(o, c);
            }
          }
        }
        break;
      case "textarea":
        gr(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, dl = Hd, Xl = wi;
  var Ey = { usingClientEntryPoint: !1, Events: [mi, Ju, Tc, Ka, ba, Hd] }, Ws = { findFiberByHostInstance: Wi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, uh = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Fe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ze(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || gy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mf.isDisabled && mf.supportsFiber)
      try {
        vl = mf.inject(uh), $r = mf;
      } catch {
      }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hl(r))
      throw Error(L(200));
    return ah(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!Hl(n))
      throw Error(L(299));
    var l = !1, o = "", c = Qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Bd(n, 1, !1, null, null, l, !1, o, c), n[ai] = r.current, hi(n.nodeType === 8 ? n.parentNode : n), new pf(r);
  }, qa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = ze(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return wi(n);
  }, qa.hydrate = function(n, r, l) {
    if (!vf(r))
      throw Error(L(200));
    return hf(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!Hl(n))
      throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Yd(r, null, n, 1, l ?? null, c, !1, d, m), n[ai] = r.current, hi(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Qs(r);
  }, qa.render = function(n, r, l) {
    if (!vf(r))
      throw Error(L(200));
    return hf(null, n, r, !1, l);
  }, qa.unmountComponentAtNode = function(n) {
    if (!vf(n))
      throw Error(L(40));
    return n._reactRootContainer ? (wi(function() {
      hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ai] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = Hd, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!vf(l))
      throw Error(L(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(L(38));
    return hf(n, r, l, !1, o);
  }, qa.version = "18.2.0-next-9e3b772b8-20220608", qa;
}
var Xa = {}, iT;
function ok() {
  if (iT)
    return Xa;
  iT = 1;
  var W = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return W.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var K = Wn, L = uT(), Pe = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xe = !1;
    function st(e) {
      Xe = e;
    }
    function ye(e) {
      if (!Xe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        qe("warn", e, a);
      }
    }
    function S(e) {
      if (!Xe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        qe("error", e, a);
      }
    }
    function qe(e, t, a) {
      {
        var i = Pe.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ie = 0, ee = 1, he = 2, X = 3, be = 4, ue = 5, we = 6, dt = 7, xn = 8, Qt = 9, tt = 10, Fe = 11, xt = 12, Re = 13, Me = 14, Ie = 15, wn = 16, mn = 17, Wt = 18, St = 19, en = 21, We = 22, rt = 23, wt = 24, at = 25, B = !0, ge = !1, R = !1, $ = !1, Se = !1, Be = !0, $e = !1, vt = !1, ct = !0, ht = !0, ft = !0, tn = /* @__PURE__ */ new Set(), er = {}, tr = {};
    function Hr(e, t) {
      mr(e, t), mr(e + "Capture", t);
    }
    function mr(e, t) {
      er[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), er[e] = t;
      {
        var a = e.toLowerCase();
        tr[a] = e, e === "onDoubleClick" && (tr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tn.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nr = Object.prototype.hasOwnProperty;
    function Vn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zn(e) {
      try {
        return Un(e), !1;
      } catch {
        return !0;
      }
    }
    function Un(e) {
      return "" + e;
    }
    function wr(e, t) {
      if (zn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), Un(e);
    }
    function yr(e) {
      if (zn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), Un(e);
    }
    function Pn(e, t) {
      if (zn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), Un(e);
    }
    function oa(e, t) {
      if (zn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), Un(e);
    }
    function sa(e) {
      if (zn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), Un(e);
    }
    function gr(e) {
      if (zn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), Un(e);
    }
    var ca = 0, rr = 1, _r = 2, on = 3, fa = 4, da = 5, pa = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + ae + "][" + Ne + "]*$"), zt = {}, Dt = {};
    function _n(e) {
      return nr.call(Dt, e) ? !0 : nr.call(zt, e) ? !1 : lt.test(e) ? (Dt[e] = !0, !0) : (zt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === ca : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Sr(e, t, a, i) {
      if (a !== null && a.type === ca)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ft(e, t, a, i) {
      if (t === null || typeof t > "u" || Sr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case on:
            return !t;
          case fa:
            return t === !1;
          case da:
            return isNaN(t);
          case pa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Gn(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Ut(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === _r || t === on || t === fa, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Gt = {}, Ka = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ka.forEach(function(e) {
      Gt[e] = new Ut(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Gt[t] = new Ut(
        t,
        rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        _r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        _r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        on,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        on,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        da,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ba = /[\-\:]([a-z])/g, dl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, dl);
      Gt[t] = new Ut(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, dl);
      Gt[t] = new Ut(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, dl);
      Gt[t] = new Ut(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Xl = "xlinkHref";
    Gt[Xl] = new Ut(
      "xlinkHref",
      rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new Ut(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Kl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, pl = !1;
    function Za(e) {
      !pl && Kl.test(e) && (pl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ja(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        wr(a, t), i.sanitizeURL && Za("" + a);
        var s = i.attributeName, f = null;
        if (i.type === fa) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ft(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ft(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === on)
            return a;
          f = e.getAttribute(s);
        }
        return Ft(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ka(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return wr(a, t), u === "" + a ? a : u;
      }
    }
    function Mi(e, t, a, i) {
      var u = Gn(t);
      if (!cn(t, u, i)) {
        if (Ft(t, a, u, i) && (a = null), i || u === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (wr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === on ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === on || b === fa && a === !0 ? w = "" : (wr(a, y), w = "" + a, u.sanitizeURL && Za(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Vr = Symbol.for("react.element"), Pr = Symbol.for("react.portal"), va = Symbol.for("react.fragment"), zi = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), ne = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Et = Symbol.for("react.suspense_list"), it = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), An = Symbol.for("react.scope"), qt = Symbol.for("react.debug_trace_mode"), Xt = Symbol.for("react.offscreen"), Er = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.cache"), Kt = Symbol.for("react.tracing_marker"), Br = Symbol.iterator, Wo = "@@iterator";
    function fi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Br && e[Br] || e[Wo];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, Zl = 0, Ui, vl, $r, Go, br, qo, Xo;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function Jl() {
      {
        if (Zl === 0) {
          Ui = console.log, vl = console.info, $r = console.warn, Go = console.error, br = console.group, qo = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ko,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Zl++;
      }
    }
    function Vu() {
      {
        if (Zl--, Zl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: Ui
            }),
            info: ut({}, e, {
              value: vl
            }),
            warn: ut({}, e, {
              value: $r
            }),
            error: ut({}, e, {
              value: Go
            }),
            group: ut({}, e, {
              value: br
            }),
            groupCollapsed: ut({}, e, {
              value: qo
            }),
            groupEnd: ut({}, e, {
              value: Xo
            })
          });
        }
        Zl < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = Pe.ReactCurrentDispatcher, di;
    function Da(e, t, a) {
      {
        if (di === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            di = i && i[1] || "";
          }
        return `
` + di + e;
      }
    }
    var hl = !1, pi;
    {
      var eu = typeof WeakMap == "function" ? WeakMap : Map;
      pi = new eu();
    }
    function tu(e, t) {
      if (!e || hl)
        return "";
      {
        var a = pi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      hl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ai.current, Ai.current = null, Jl();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && pi.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        hl = !1, Ai.current = s, Vu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", z = w ? Da(w) : "";
      return typeof e == "function" && pi.set(e, z), z;
    }
    function ml(e, t, a) {
      return tu(e, !0);
    }
    function Zo(e, t, a) {
      return tu(e, !1);
    }
    function Jo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return tu(e, Jo(e));
      if (typeof e == "string")
        return Da(e);
      switch (e) {
        case pt:
          return Da("Suspense");
        case Et:
          return Da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
            return Zo(e.render);
          case it:
            return gt(e.type, t, a);
          case ze: {
            var i = e, u = i._payload, s = i._init;
            try {
              return gt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function es(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return Da(e.type);
        case wn:
          return Da("Lazy");
        case Re:
          return Da("Suspense");
        case St:
          return Da("SuspenseList");
        case ie:
        case he:
        case Ie:
          return Zo(e.type);
        case Fe:
          return Zo(e.type.render);
        case ee:
          return ml(e.type);
        default:
          return "";
      }
    }
    function Pu(e) {
      try {
        var t = "", a = e;
        do
          t += es(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function yl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ts(e) {
      return e.displayName || "Context";
    }
    function _t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case va:
          return "Fragment";
        case Pr:
          return "Portal";
        case T:
          return "Profiler";
        case zi:
          return "StrictMode";
        case pt:
          return "Suspense";
        case Et:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            var t = e;
            return ts(t) + ".Consumer";
          case I:
            var a = e;
            return ts(a._context) + ".Provider";
          case le:
            return yl(e, e.render, "ForwardRef");
          case it:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case ze: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Bu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function nu(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case wt:
          return "Cache";
        case Qt:
          var i = a;
          return nu(i) + ".Consumer";
        case tt:
          var u = a;
          return nu(u._context) + ".Provider";
        case Wt:
          return "DehydratedFragment";
        case Fe:
          return Bu(a, a.render, "ForwardRef");
        case dt:
          return "Fragment";
        case ue:
          return a;
        case be:
          return "Portal";
        case X:
          return "Root";
        case we:
          return "Text";
        case wn:
          return _t(a);
        case xn:
          return a === zi ? "StrictMode" : "Mode";
        case We:
          return "Offscreen";
        case xt:
          return "Profiler";
        case en:
          return "Scope";
        case Re:
          return "Suspense";
        case St:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        case ee:
        case ie:
        case mn:
        case he:
        case Me:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ei = Pe.ReactDebugCurrentFrame, fn = null, Yr = !1;
    function Oa() {
      {
        if (fn === null)
          return null;
        var e = fn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function gl() {
      return fn === null ? "" : Pu(fn);
    }
    function nn() {
      ei.getCurrentStack = null, fn = null, Yr = !1;
    }
    function dn(e) {
      ei.getCurrentStack = e === null ? null : gl, fn = e, Yr = !1;
    }
    function ns() {
      return fn;
    }
    function ar(e) {
      Yr = e;
    }
    function Ir(e) {
      return "" + e;
    }
    function ti(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return gr(e), e;
        default:
          return "";
      }
    }
    var $u = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ru(e, t) {
      $u[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function au(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function ji(e) {
      var t = "";
      return e && (au(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Yu(e) {
      var t = au(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      gr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            gr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            gr(p), i = "" + p;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Fi(e) {
      Sl(e) || (e._valueTracker = Yu(e));
    }
    function Iu(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ji(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function vi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Hi = !1, Qu = !1, rs = !1, ni = !1;
    function Wu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      ru("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Qu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component", t.type), Qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Hi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component", t.type), Hi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ti(t.value != null ? t.value : i),
        controlled: Wu(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Mi(a, "checked", i, !1);
    }
    function j(e, t) {
      var a = e;
      {
        var i = Wu(t);
        !a._wrapperState.controlled && i && !ni && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ni = !0), a._wrapperState.controlled && !i && !rs && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), rs = !0);
      }
      M(e, t);
      var u = ti(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Ir(u)) : a.value !== Ir(u) && (a.value = Ir(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Qe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Qe(a, t.type, ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ir(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function xe(e, t) {
      var a = e;
      j(a, t), de(a, t);
    }
    function de(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        wr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Iu(f), j(f, p);
          }
        }
      }
    }
    function Qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || vi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ir(e._wrapperState.initialValue) : e.defaultValue !== Ir(a) && (e.defaultValue = Ir(a)));
    }
    var ot = !1, At = !1, Ht = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? K.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || At || (At = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ht || (Ht = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ot && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ot = !0);
    }
    function Pt(e, t) {
      t.value != null && e.setAttribute("value", Ir(ti(t.value)));
    }
    var rn = Array.isArray;
    function bt(e) {
      return rn(e);
    }
    var El;
    El = !1;
    function Gu() {
      var e = Oa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var as = ["value", "defaultValue"];
    function is(e) {
      {
        ru("select", e);
        for (var t = 0; t < as.length; t++) {
          var a = as[t];
          if (e[a] != null) {
            var i = bt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Gu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Gu());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Ir(ti(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function ls(e, t) {
      return ut({}, t, {
        value: void 0
      });
    }
    function us(e, t) {
      var a = e;
      is(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !El && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), El = !0);
    }
    function Wf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qp(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var Xp = !1;
    function Gf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kp(e, t) {
      var a = e;
      ru("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Xp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component"), Xp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (bt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ti(i)
      };
    }
    function Zp(e, t) {
      var a = e, i = ti(t.value), u = ti(t.defaultValue);
      if (i != null) {
        var s = Ir(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Ir(u));
    }
    function dc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Bm(e, t) {
      Zp(e, t);
    }
    var Pi = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", pc = "http://www.w3.org/2000/svg";
    function qf(e) {
      switch (e) {
        case "svg":
          return pc;
        case "math":
          return $m;
        default:
          return Pi;
      }
    }
    function Xf(e, t) {
      return e == null || e === Pi ? qf(t) : e === pc && t === "foreignObject" ? Pi : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vc, Jp = Ym(function(e, t) {
      if (e.namespaceURI === pc && !("innerHTML" in e)) {
        vc = vc || document.createElement("div"), vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Bi = 3, gn = 8, ha = 9, Kf = 11, os = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, qu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qu).forEach(function(e) {
      nv.forEach(function(t) {
        qu[tv(t, e)] = qu[e];
      });
    });
    function Cl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(qu.hasOwnProperty(e) && qu[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var Im = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(Im, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var Zf = function() {
    };
    {
      var rv = /^(?:webkit|moz|o)[A-Z]/, ss = /^-ms-/, cs = /-(.)/g, av = /;\s*$/, $i = {}, Jf = {}, ed = !1, hc = !1, td = function(e) {
        return e.replace(cs, function(t, a) {
          return a.toUpperCase();
        });
      }, iv = function(e) {
        $i.hasOwnProperty(e) && $i[e] || ($i[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          td(e.replace(ss, "ms-"))
        ));
      }, lv = function(e) {
        $i.hasOwnProperty(e) && $i[e] || ($i[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, uv = function(e, t) {
        Jf.hasOwnProperty(t) && Jf[t] || (Jf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(av, "")));
      }, Gm = function(e, t) {
        ed || (ed = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qm = function(e, t) {
        hc || (hc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Zf = function(e, t) {
        e.indexOf("-") > -1 ? iv(e) : rv.test(e) ? lv(e) : av.test(t) && uv(e, t), typeof t == "number" && (isNaN(t) ? Gm(e, t) : isFinite(t) || qm(e, t));
      };
    }
    var Xm = Zf;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += Cl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ov(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = Cl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ri(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Xu(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function sv(e, t) {
      {
        if (!t)
          return;
        var a = Xu(e), i = Xu(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ri(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var cv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, fv = ut({
      menuitem: !0
    }, cv), dv = "__html";
    function fs(e, t) {
      if (t) {
        if (fv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(dv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function iu(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var mc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, lu = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Tl = {}, ds = new RegExp("^(aria)-[" + Ne + "]*$"), nd = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function pv(e, t) {
      {
        if (nr.call(Tl, t) && Tl[t])
          return !0;
        if (nd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = lu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Tl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Tl[t] = !0, !0;
        }
        if (ds.test(t)) {
          var u = t.toLowerCase(), s = lu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Tl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Tl[t] = !0, !0;
        }
      }
      return !0;
    }
    function yc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = pv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ku(e, t) {
      iu(e, t) || yc(e, t);
    }
    var gc = !1;
    function vv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !gc && (gc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ps = function() {
    };
    {
      var Cr = {}, rd = /^on./, hv = /^on[^A-Z]/, mv = new RegExp("^(aria)-[" + Ne + "]*$"), yv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      ps = function(e, t, a, i) {
        if (nr.call(Cr, t) && Cr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Cr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Cr[t] = !0, !0;
          if (rd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Cr[t] = !0, !0;
        } else if (rd.test(t))
          return hv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Cr[t] = !0, !0;
        if (mv.test(t) || yv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Cr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Cr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Cr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Cr[t] = !0, !0;
        var v = Gn(t), y = v !== null && v.type === ca;
        if (mc.hasOwnProperty(u)) {
          var g = mc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Cr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Cr[t] = !0, !0;
        return typeof a == "boolean" && Sr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Cr[t] = !0, !0) : y ? !0 : Sr(t, a, v, !1) ? (Cr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === on && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Cr[t] = !0), !0);
      };
    }
    var gv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ps(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rl(e, t, a) {
      iu(e, t) || gv(e, t, a);
    }
    var Sc = 1, vs = 2, hs = 4, Zm = Sc | vs | hs, Yi = null;
    function Jm(e) {
      Yi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Yi = e;
    }
    function Sv() {
      Yi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Yi = null;
    }
    function Ev(e) {
      return e === Yi;
    }
    function Yt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var ms = null, Ii = null, hi = null;
    function ad(e) {
      var t = Oo(e);
      if (t) {
        if (typeof ms != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          ms(t.stateNode, t.type, i);
        }
      }
    }
    function id(e) {
      ms = e;
    }
    function Zu(e) {
      Ii ? hi ? hi.push(e) : hi = [e] : Ii = e;
    }
    function Ec() {
      return Ii !== null || hi !== null;
    }
    function uu() {
      if (Ii) {
        var e = Ii, t = hi;
        if (Ii = null, hi = null, ad(e), t)
          for (var a = 0; a < t.length; a++)
            ad(t[a]);
      }
    }
    var ld = function(e, t) {
      return e(t);
    }, Cv = function() {
    }, ud = !1;
    function Tv() {
      var e = Ec();
      e && (Cv(), uu());
    }
    function ys(e, t, a) {
      if (ud)
        return e(t, a);
      ud = !0;
      try {
        return ld(e, t, a);
      } finally {
        ud = !1, Tv();
      }
    }
    function Cc(e, t, a) {
      ld = e, Cv = a;
    }
    function od(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function sd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && od(t));
        default:
          return !1;
      }
    }
    function ou(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (sd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var gs = !1;
    if (yn)
      try {
        var Ss = {};
        Object.defineProperty(Ss, "passive", {
          get: function() {
            gs = !0;
          }
        }), window.addEventListener("test", Ss, Ss), window.removeEventListener("test", Ss, Ss);
      } catch {
        gs = !1;
      }
    function cd(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rv = cd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var fd = document.createElement("react");
      Rv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, z = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          fd.removeEventListener(H, je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var pe = Array.prototype.slice.call(arguments, 3);
        function je() {
          b = !0, F(), a.apply(i, pe), w = !1;
        }
        var Le, Tt = !1, yt = !1;
        function D(O) {
          if (Le = O.error, Tt = !0, Le === null && O.colno === 0 && O.lineno === 0 && (yt = !0), O.defaultPrevented && Le != null && typeof Le == "object")
            try {
              Le._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), fd.addEventListener(H, je, !1), g.initEvent(H, !1, !1), fd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Tt ? yt && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", D), !b)
          return F(), cd.apply(this, arguments);
      };
    }
    var dd = Rv, ma = !1, Es = null, Qi = !1, Na = null, Cs = {
      onError: function(e) {
        ma = !0, Es = e;
      }
    };
    function ai(e, t, a, i, u, s, f, p, v) {
      ma = !1, Es = null, dd.apply(Cs, arguments);
    }
    function pd(e, t, a, i, u, s, f, p, v) {
      if (ai.apply(this, arguments), ma) {
        var y = Wi();
        Qi || (Qi = !0, Na = y);
      }
    }
    function ey() {
      if (Qi) {
        var e = Na;
        throw Qi = !1, Na = null, e;
      }
    }
    function ty() {
      return ma;
    }
    function Wi() {
      if (ma) {
        var e = Es;
        return ma = !1, Es = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mi(e) {
      return e._reactInternals;
    }
    function Ju(e) {
      return e._reactInternals !== void 0;
    }
    function Tc(e, t) {
      e._reactInternals = t;
    }
    var Ue = (
      /*                      */
      0
    ), ii = (
      /*                */
      1
    ), It = (
      /*                    */
      2
    ), ke = (
      /*                       */
      4
    ), Ot = (
      /*                */
      16
    ), Ma = (
      /*                 */
      32
    ), qn = (
      /*                     */
      64
    ), Ze = (
      /*                   */
      128
    ), kr = (
      /*            */
      256
    ), ya = (
      /*                          */
      512
    ), jn = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), yi = (
      /*                    */
      4096
    ), xl = (
      /*                   */
      8192
    ), su = (
      /*             */
      16384
    ), xv = Wr | ke | qn | ya | jn | su, Gi = (
      /*               */
      32767
    ), wl = (
      /*                   */
      32768
    ), ir = (
      /*                */
      65536
    ), Rc = (
      /* */
      131072
    ), wv = (
      /*                       */
      1048576
    ), gi = (
      /*                    */
      2097152
    ), za = (
      /*                 */
      4194304
    ), _l = (
      /*                */
      8388608
    ), Ua = (
      /*               */
      16777216
    ), cu = (
      /*              */
      33554432
    ), Gr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ke | jn | 0
    ), qr = It | ke | Ot | Ma | ya | yi | xl, li = ke | qn | ya | xl, Xr = Wr | Ot, lr = za | _l | gi, fu = Pe.ReactCurrentOwner;
    function bl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (It | yi)) !== Ue && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === X ? a : null;
    }
    function xc(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wc(e) {
      return e.tag === X ? e.stateNode.containerInfo : null;
    }
    function ga(e) {
      return bl(e) === e;
    }
    function Sa(e) {
      {
        var t = fu.current;
        if (t !== null && t.tag === ee) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mi(e);
      return u ? bl(u) === u : !1;
    }
    function an(e) {
      if (bl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Aa(e) {
      var t = e.alternate;
      if (!t) {
        var a = bl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return an(s), e;
            if (v === u)
              return an(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== X)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function vd(e) {
      var t = Aa(e);
      return t !== null ? hd(t) : null;
    }
    function hd(e) {
      if (e.tag === ue || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function md(e) {
      var t = Aa(e);
      return t !== null ? _c(t) : null;
    }
    function _c(e) {
      if (e.tag === ue || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== be) {
          var a = _c(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var yd = L.unstable_scheduleCallback, bc = L.unstable_cancelCallback, _v = L.unstable_shouldYield, eo = L.unstable_requestPaint, Fn = L.unstable_now, ny = L.unstable_getCurrentPriorityLevel, Kr = L.unstable_ImmediatePriority, to = L.unstable_UserBlockingPriority, Si = L.unstable_NormalPriority, no = L.unstable_LowPriority, Ts = L.unstable_IdlePriority, gd = L.unstable_yieldValue, Sd = L.unstable_setDisableYieldValue, kl = null, bn = null, te = null, Tr = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function bv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ct && (e = ut({}, e, {
          getLaneLabelMap: kc,
          injectProfilingHooks: Ol
        })), kl = t.inject(e), bn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function qi(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(kl, e, t);
        } catch (a) {
          Tr || (Tr = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Dl(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ze) === Ze;
          if (ht) {
            var i;
            switch (t) {
              case Ln:
                i = Kr;
                break;
              case Ki:
                i = to;
                break;
              case Ti:
                i = Si;
                break;
              case po:
                i = Ts;
                break;
              default:
                i = Si;
                break;
            }
            bn.onCommitFiberRoot(kl, e, i, a);
          }
        } catch (u) {
          Tr || (Tr = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(kl, e);
        } catch (t) {
          Tr || (Tr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function kv(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(kl, e);
        } catch (t) {
          Tr || (Tr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Zt(e) {
      if (typeof gd == "function" && (Sd(e), st(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(kl, e);
        } catch (t) {
          Tr || (Tr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ol(e) {
      te = e;
    }
    function kc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kn; a++) {
          var i = Av(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dv(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Rs() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function ro(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function du() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Cd(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Dc() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Ov(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Lv() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Nv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function Td() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function ao(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function xs() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Mv(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function zv(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function io(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function Uv() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function ws(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function Ei() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function lo(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function _s() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function Ll() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function Rd(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function uo(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function Oc(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Ae = (
      /*                         */
      0
    ), Oe = (
      /*                 */
      1
    ), kt = (
      /*                    */
      2
    ), Sn = (
      /*               */
      8
    ), ja = (
      /*              */
      16
    ), bs = Math.clz32 ? Math.clz32 : pn, xd = Math.log, pu = Math.LN2;
    function pn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (xd(t) / pu | 0) | 0;
    }
    var kn = 31, V = (
      /*                        */
      0
    ), Dn = (
      /*                          */
      0
    ), He = (
      /*                        */
      1
    ), Ci = (
      /*    */
      2
    ), Xi = (
      /*             */
      4
    ), En = (
      /*            */
      8
    ), Fa = (
      /*                     */
      16
    ), vu = (
      /*                */
      32
    ), Nl = (
      /*                       */
      4194240
    ), Zr = (
      /*                        */
      64
    ), Jr = (
      /*                        */
      128
    ), hu = (
      /*                        */
      256
    ), ks = (
      /*                        */
      512
    ), Ds = (
      /*                        */
      1024
    ), Lc = (
      /*                        */
      2048
    ), Nc = (
      /*                        */
      4096
    ), Mc = (
      /*                        */
      8192
    ), zc = (
      /*                        */
      16384
    ), Uc = (
      /*                       */
      32768
    ), Ac = (
      /*                       */
      65536
    ), jc = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), mu = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), oo = (
      /*                       */
      2097152
    ), yu = (
      /*                            */
      130023424
    ), gu = (
      /*                             */
      4194304
    ), Os = (
      /*                             */
      8388608
    ), Vc = (
      /*                             */
      16777216
    ), Pc = (
      /*                             */
      33554432
    ), Bc = (
      /*                             */
      67108864
    ), wd = gu, Su = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), so = (
      /*               */
      268435456
    ), Ml = (
      /*                        */
      536870912
    ), Ca = (
      /*                   */
      1073741824
    );
    function Av(e) {
      {
        if (e & He)
          return "Sync";
        if (e & Ci)
          return "InputContinuousHydration";
        if (e & Xi)
          return "InputContinuous";
        if (e & En)
          return "DefaultHydration";
        if (e & Fa)
          return "Default";
        if (e & vu)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & yu)
          return "Retry";
        if (e & Su)
          return "SelectiveHydration";
        if (e & so)
          return "IdleHydration";
        if (e & Ml)
          return "Idle";
        if (e & Ca)
          return "Offscreen";
      }
    }
    var Jt = -1, $c = Zr, Ls = gu;
    function co(e) {
      switch (On(e)) {
        case He:
          return He;
        case Ci:
          return Ci;
        case Xi:
          return Xi;
        case En:
          return En;
        case Fa:
          return Fa;
        case vu:
          return vu;
        case Zr:
        case Jr:
        case hu:
        case ks:
        case Ds:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case mu:
        case Hc:
        case oo:
          return e & Nl;
        case gu:
        case Os:
        case Vc:
        case Pc:
        case Bc:
          return e & yu;
        case Su:
          return Su;
        case so:
          return so;
        case Ml:
          return Ml;
        case Ca:
          return Ca;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ns(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = co(p);
        else {
          var v = f & s;
          v !== V && (i = co(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = co(y) : s !== V && (i = co(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = On(i), b = On(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Fa && (b & Nl) !== V
        )
          return t;
      }
      (i & Xi) !== V && (i |= a & Fa);
      var w = e.entangledLanes;
      if (w !== V)
        for (var z = e.entanglements, U = i & w; U > 0; ) {
          var F = Ul(U), pe = 1 << F;
          i |= z[F], U &= ~pe;
        }
      return i;
    }
    function Yc(e, t) {
      for (var a = e.eventTimes, i = Jt; t > 0; ) {
        var u = Ul(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ry(e, t) {
      switch (e) {
        case He:
        case Ci:
        case Xi:
          return t + 250;
        case En:
        case Fa:
        case vu:
        case Zr:
        case Jr:
        case hu:
        case ks:
        case Ds:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case mu:
        case Hc:
        case oo:
          return t + 5e3;
        case gu:
        case Os:
        case Vc:
        case Pc:
        case Bc:
          return Jt;
        case Su:
        case so:
        case Ml:
        case Ca:
          return Jt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Jt;
      }
    }
    function ay(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ul(f), v = 1 << p, y = s[p];
        y === Jt ? ((v & i) === V || (v & u) !== V) && (s[p] = ry(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function iy(e) {
      return co(e.pendingLanes);
    }
    function zl(e) {
      var t = e.pendingLanes & ~Ca;
      return t !== V ? t : t & Ca ? Ca : V;
    }
    function bd(e) {
      return (e & He) !== V;
    }
    function Ms(e) {
      return (e & _d) !== V;
    }
    function jv(e) {
      return (e & yu) === e;
    }
    function Fv(e) {
      var t = He | Xi | Fa;
      return (e & t) === V;
    }
    function Hv(e) {
      return (e & Nl) === e;
    }
    function zs(e, t) {
      var a = Ci | Xi | En | Fa;
      return (t & a) !== V;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function kd(e) {
      return (e & Nl) !== V;
    }
    function Pv() {
      var e = $c;
      return $c <<= 1, ($c & Nl) === V && ($c = Zr), e;
    }
    function ea() {
      var e = Ls;
      return Ls <<= 1, (Ls & yu) === V && (Ls = gu), e;
    }
    function On(e) {
      return e & -e;
    }
    function fo(e) {
      return On(e);
    }
    function Ul(e) {
      return 31 - bs(e);
    }
    function Ic(e) {
      return Ul(e);
    }
    function ta(e, t) {
      return (e & t) !== V;
    }
    function Eu(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function Us(e, t) {
      return e & ~t;
    }
    function Qc(e, t) {
      return e & t;
    }
    function ly(e) {
      return e;
    }
    function Bv(e, t) {
      return e !== Dn && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < kn; a++)
        t.push(e);
      return t;
    }
    function Cu(e, t, a) {
      e.pendingLanes |= t, t !== Ml && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Ic(t);
      i[u] = a;
    }
    function $v(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ul(i), s = 1 << u;
        a[u] = Jt, i &= ~s;
      }
    }
    function Wc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Gc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ul(f), v = 1 << p;
        i[p] = V, u[p] = Jt, s[p] = Jt, f &= ~v;
      }
    }
    function Dd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ul(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Yv(e, t) {
      var a = On(t), i;
      switch (a) {
        case Xi:
          i = Ci;
          break;
        case Fa:
          i = En;
          break;
        case Zr:
        case Jr:
        case hu:
        case ks:
        case Ds:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case mu:
        case Hc:
        case oo:
        case gu:
        case Os:
        case Vc:
        case Pc:
        case Bc:
          i = vu;
          break;
        case Ml:
          i = so;
          break;
        default:
          i = Dn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dn ? Dn : i;
    }
    function qc(e, t, a) {
      if (Ea)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Ic(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Od(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Ic(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function js(e, t) {
      return null;
    }
    var Ln = He, Ki = Xi, Ti = Fa, po = Ml, vo = Dn;
    function Ha() {
      return vo;
    }
    function Cn(e) {
      vo = e;
    }
    function Rr(e, t) {
      var a = vo;
      try {
        return vo = e, t();
      } finally {
        vo = a;
      }
    }
    function uy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function oy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ho(e, t) {
      return e !== 0 && e < t;
    }
    function ur(e) {
      var t = On(e);
      return ho(Ln, t) ? ho(Ki, t) ? Ms(t) ? Ti : po : Ki : Ln;
    }
    function Xc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var me;
    function mo(e) {
      me = e;
    }
    function Ld(e) {
      me(e);
    }
    var Kc;
    function sy(e) {
      Kc = e;
    }
    var yo;
    function Zc(e) {
      yo = e;
    }
    var Jc;
    function Iv(e) {
      Jc = e;
    }
    var Nd;
    function Qv(e) {
      Nd = e;
    }
    var Fs = !1, go = [], sn = null, Xn = null, Dr = null, So = /* @__PURE__ */ new Map(), Eo = /* @__PURE__ */ new Map(), Kn = [], Wv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ri(e) {
      return Wv.indexOf(e) > -1;
    }
    function cy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Md(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          sn = null;
          break;
        case "dragenter":
        case "dragleave":
          Xn = null;
          break;
        case "mouseover":
        case "mouseout":
          Dr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          So.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Eo.delete(i);
          break;
        }
      }
    }
    function Co(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = cy(t, a, i, u, s);
        if (t !== null) {
          var p = Oo(t);
          p !== null && Kc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Gv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return sn = Co(sn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Xn = Co(Xn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Dr = Co(Dr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return So.set(y, Co(So.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Eo.set(b, Co(Eo.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function zd(e) {
      var t = Xs(e.target);
      if (t !== null) {
        var a = bl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = xc(a);
            if (u !== null) {
              e.blockedOn = u, Nd(e.priority, function() {
                yo(a);
              });
              return;
            }
          } else if (i === X) {
            var s = a.stateNode;
            if (Xc(s)) {
              e.blockedOn = wc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function fy(e) {
      for (var t = Jc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Kn.length && ho(t, Kn[i].priority); i++)
        ;
      Kn.splice(i, 0, a), i === 0 && zd(a);
    }
    function Tu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Jm(s), u.target.dispatchEvent(s), Sv();
        } else {
          var f = Oo(i);
          return f !== null && Kc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ef(e, t, a) {
      Tu(e) && a.delete(t);
    }
    function Va() {
      Fs = !1, sn !== null && Tu(sn) && (sn = null), Xn !== null && Tu(Xn) && (Xn = null), Dr !== null && Tu(Dr) && (Dr = null), So.forEach(ef), Eo.forEach(ef);
    }
    function mt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Fs || (Fs = !0, L.unstable_scheduleCallback(L.unstable_NormalPriority, Va)));
    }
    function Tn(e) {
      if (go.length > 0) {
        mt(go[0], e);
        for (var t = 1; t < go.length; t++) {
          var a = go[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      sn !== null && mt(sn, e), Xn !== null && mt(Xn, e), Dr !== null && mt(Dr, e);
      var i = function(p) {
        return mt(p, e);
      };
      So.forEach(i), Eo.forEach(i);
      for (var u = 0; u < Kn.length; u++) {
        var s = Kn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Kn.length > 0; ) {
        var f = Kn[0];
        if (f.blockedOn !== null)
          break;
        zd(f), f.blockedOn === null && Kn.shift();
      }
    }
    var ln = Pe.ReactCurrentBatchConfig, Bn = !0;
    function na(e) {
      Bn = !!e;
    }
    function To() {
      return Bn;
    }
    function $n(e, t, a) {
      var i = tf(t), u;
      switch (i) {
        case Ln:
          u = Hs;
          break;
        case Ki:
          u = Ru;
          break;
        case Ti:
        default:
          u = Ro;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Hs(e, t, a, i) {
      var u = Ha(), s = ln.transition;
      ln.transition = null;
      try {
        Cn(Ln), Ro(e, t, a, i);
      } finally {
        Cn(u), ln.transition = s;
      }
    }
    function Ru(e, t, a, i) {
      var u = Ha(), s = ln.transition;
      ln.transition = null;
      try {
        Cn(Ki), Ro(e, t, a, i);
      } finally {
        Cn(u), ln.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      Bn && Ud(e, t, a, i);
    }
    function Ud(e, t, a, i) {
      var u = xr(e, t, a, i);
      if (u === null) {
        ky(e, t, i, Al, a), Md(e, i);
        return;
      }
      if (Gv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Md(e, i), t & hs && Ri(e)) {
        for (; u !== null; ) {
          var s = Oo(u);
          s !== null && Ld(s);
          var f = xr(e, t, a, i);
          if (f === null && ky(e, t, i, Al, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      ky(e, t, i, null, a);
    }
    var Al = null;
    function xr(e, t, a, i) {
      Al = null;
      var u = Yt(i), s = Xs(u);
      if (s !== null) {
        var f = bl(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = xc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === X) {
            var y = f.stateNode;
            if (Xc(y))
              return wc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Al = s, null;
    }
    function tf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ln;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ki;
        case "message": {
          var t = ny();
          switch (t) {
            case Kr:
              return Ln;
            case to:
              return Ki;
            case Si:
            case no:
              return Ti;
            case Ts:
              return po;
            default:
              return Ti;
          }
        }
        default:
          return Ti;
      }
    }
    function xo(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Zi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function nf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ad(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Pa = null, wo = null, Ba = null;
    function rf(e) {
      return Pa = e, wo = Ps(), !0;
    }
    function Vs() {
      Pa = null, wo = null, Ba = null;
    }
    function af() {
      if (Ba)
        return Ba;
      var e, t = wo, a = t.length, i, u = Ps(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ba = u.slice(e, p), Ba;
    }
    function Ps() {
      return "value" in Pa ? Pa.value : Pa.textContent;
    }
    function xu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Zn() {
      return !0;
    }
    function Ji() {
      return !1;
    }
    function vn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Zn : this.isDefaultPrevented = Ji, this.isPropagationStopped = Ji, this;
      }
      return ut(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Zn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Zn);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Zn
      }), t;
    }
    var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, lf = vn(Yn), wu = ut({}, Yn, {
      view: 0,
      detail: 0
    }), jd = vn(wu), Fd, xi, _o;
    function Hd(e) {
      e !== _o && (_o && e.type === "mousemove" ? (Fd = e.screenX - _o.screenX, xi = e.screenY - _o.screenY) : (Fd = 0, xi = 0), _o = e);
    }
    var wi = ut({}, wu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Vd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Hd(e), Fd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : xi;
      }
    }), uf = vn(wi), _u = ut({}, wi, {
      dataTransfer: 0
    }), qv = vn(_u), Xv = ut({}, wu, {
      relatedTarget: 0
    }), Bs = vn(Xv), of = ut({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dy = vn(of), py = ut({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Kv = vn(py), Zv = ut({}, Yn, {
      data: 0
    }), jl = vn(Zv), vy = jl, bo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Jv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Rn(e) {
      if (e.key) {
        var t = bo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = xu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Jv[e.keyCode] || "Unidentified" : "";
    }
    var hy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function eh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = hy[e];
      return i ? !!a[i] : !1;
    }
    function Vd(e) {
      return eh;
    }
    var my = ut({}, wu, {
      key: Rn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Vd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? xu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? xu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), th = vn(my), nh = ut({}, wi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), rh = vn(nh), $a = ut({}, wu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vd
    }), Pd = vn($a), yy = ut({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fl = vn(yy), sf = ut({}, wi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), bu = vn(sf), cf = [9, 13, 27, 32], ff = 229, $s = yn && "CompositionEvent" in window, Ys = null;
    yn && "documentMode" in document && (Ys = document.documentMode);
    var Bd = yn && "TextEvent" in window && !Ys, ah = yn && (!$s || Ys && Ys > 8 && Ys <= 11), $d = 32, Yd = String.fromCharCode($d);
    function df() {
      Hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Is = !1;
    function ih(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Id(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function gy(e, t) {
      return e === "keydown" && t.keyCode === ff;
    }
    function Qd(e, t) {
      switch (e) {
        case "keyup":
          return cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ff;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Qs(e) {
      return e.locale === "ko";
    }
    var Hl = !1;
    function vf(e, t, a, i, u) {
      var s, f;
      if ($s ? s = Id(t) : Hl ? Qd(t, i) && (s = "onCompositionEnd") : gy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ah && !Qs(i) && (!Hl && s === "onCompositionStart" ? Hl = rf(u) : s === "onCompositionEnd" && Hl && (f = af()));
      var p = fh(a, s);
      if (p.length > 0) {
        var v = new jl(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function lh(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== $d ? null : (Is = !0, Yd);
        case "textInput":
          var i = t.data;
          return i === Yd && Is ? null : i;
        default:
          return null;
      }
    }
    function Sy(e, t) {
      if (Hl) {
        if (e === "compositionend" || !$s && Qd(e, t)) {
          var a = af();
          return Vs(), Hl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ih(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ah && !Qs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Bd ? s = lh(t, i) : s = Sy(t, i), !s)
        return null;
      var f = fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new vy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ey(e, t, a, i, u, s, f) {
      vf(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var Ws = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function uh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ws[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function mf(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Zu(i);
      var u = fh(t, "onChange");
      if (u.length > 0) {
        var s = new lf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Yt(e)), ys(m, t);
    }
    function m(e) {
      D0(e, 0);
    }
    function E(e) {
      var t = Tf(e);
      if (Iu(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var A = !1;
    yn && (A = mf("input") && (!document.documentMode || document.documentMode > 9));
    function Q(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", Y);
    }
    function G() {
      l && (l.detachEvent("onpropertychange", Y), l = null, o = null);
    }
    function Y(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (G(), Q(t, a)) : e === "focusout" && G();
    }
    function Ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Nn(e, t) {
      if (e === "click")
        return E(t);
    }
    function k(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function _(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Qe(e, "number", e.value);
    }
    function N(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window, v, y;
      if (c(p) ? v = x : uh(p) ? A ? v = k : (v = Ee, y = ce) : _e(p) && (v = Nn), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && _(p);
    }
    function J() {
      mr("onMouseEnter", ["mouseout", "mouseover"]), mr("onMouseLeave", ["mouseout", "mouseover"]), mr("onPointerEnter", ["pointerout", "pointerover"]), mr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function De(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Ev(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Xs(y) || lp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, z;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, z = U ? Xs(U) : null, z !== null) {
            var F = bl(z);
            (z !== F || z.tag !== ue && z.tag !== we) && (z = null);
          }
        } else
          w = null, z = a;
        if (w !== z) {
          var pe = uf, je = "onMouseLeave", Le = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (pe = rh, je = "onPointerLeave", Le = "onPointerEnter", Tt = "pointer");
          var yt = w == null ? g : Tf(w), D = z == null ? g : Tf(z), H = new pe(je, Tt + "leave", w, i, u);
          H.target = yt, H.relatedTarget = D;
          var O = null, q = Xs(u);
          if (q === a) {
            var ve = new pe(Le, Tt + "enter", z, i, u);
            ve.target = D, ve.relatedTarget = yt, O = ve;
          }
          OT(e, H, O, w, z);
        }
      }
    }
    function Ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : Ve;
    function Ye(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!nr.call(t, s) || !Ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function In(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Lt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function el(e, t) {
      for (var a = In(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = In(Lt(a));
      }
    }
    function Cy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return cT(e, u, s, f, p);
    }
    function cT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            b = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function fT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = el(e, f), g = el(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function y0(e) {
      return e && e.nodeType === Bi;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : y0(e) ? !1 : y0(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function dT(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function pT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement; ) {
        if (pT(t))
          e = t.contentWindow;
        else
          return t;
        t = vi(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vT() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? mT(e) : null
      };
    }
    function hT(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && dT(a)) {
        i !== null && Ty(a) && yT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function mT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Cy(e), t || {
        start: 0,
        end: 0
      };
    }
    function yT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : fT(e, t);
    }
    var gT = yn && "documentMode" in document && document.documentMode <= 11;
    function ST() {
      Hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, Ry = null, Wd = null, xy = !1;
    function ET(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function CT(e) {
      return e.window === e ? e.document : e.nodeType === ha ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = CT(a);
      if (!(xy || yf == null || yf !== vi(i))) {
        var u = ET(yf);
        if (!Wd || !Ye(Wd, u)) {
          Wd = u;
          var s = fh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new lf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function TT(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window;
      switch (t) {
        case "focusin":
          (uh(p) || p.contentEditable === "true") && (yf = p, Ry = a, Wd = null);
          break;
        case "focusout":
          yf = null, Ry = null, Wd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, E0(e, i, u);
          break;
        case "selectionchange":
          if (gT)
            break;
        case "keydown":
        case "keyup":
          E0(e, i, u);
      }
    }
    function oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: oh("Animation", "AnimationEnd"),
      animationiteration: oh("Animation", "AnimationIteration"),
      animationstart: oh("Animation", "AnimationStart"),
      transitionend: oh("Transition", "TransitionEnd")
    }, wy = {}, C0 = {};
    yn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function sh(e) {
      if (wy[e])
        return wy[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return wy[e] = t[a];
      return e;
    }
    var T0 = sh("animationend"), R0 = sh("animationiteration"), x0 = sh("animationstart"), w0 = sh("transitionend"), _0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      _0.set(e, t), Hr(t, [e]);
    }
    function RT() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(T0, "onAnimationEnd"), ko(R0, "onAnimationIteration"), ko(x0, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(w0, "onTransitionEnd");
    }
    function xT(e, t, a, i, u, s, f) {
      var p = _0.get(t);
      if (p !== void 0) {
        var v = lf, y = t;
        switch (t) {
          case "keypress":
            if (xu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = th;
            break;
          case "focusin":
            y = "focus", v = Bs;
            break;
          case "focusout":
            y = "blur", v = Bs;
            break;
          case "beforeblur":
          case "afterblur":
            v = Bs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Pd;
            break;
          case T0:
          case R0:
          case x0:
            v = dy;
            break;
          case w0:
            v = Fl;
            break;
          case "scroll":
            v = jd;
            break;
          case "wheel":
            v = bu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Kv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = rh;
            break;
        }
        var g = (s & hs) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = kT(a, p, i.type, g, b);
          if (w.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: w
            });
          }
        }
      }
    }
    RT(), J(), n(), ST(), df();
    function wT(e, t, a, i, u, s, f) {
      xT(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (De(e, t, a, i, u), N(e, t, a, i, u), TT(e, t, a, i, u), Ey(e, t, a, i, u));
    }
    var Gd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Gd));
    function k0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, pd(i, t, void 0, e), e.currentTarget = null;
    }
    function _T(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          k0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, z = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          k0(e, z, w), i = b;
        }
    }
    function D0(e, t) {
      for (var a = (t & hs) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        _T(s, f, a);
      }
      ey();
    }
    function bT(e, t, a, i, u) {
      var s = Yt(a), f = [];
      wT(f, e, i, a, s, t), D0(f, t);
    }
    function hn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = rx(t), u = LT(e, a);
      i.has(u) || (O0(t, e, vs, a), i.add(u));
    }
    function by(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= hs), O0(a, e, i, t);
    }
    var ch = "_reactListening" + Math.random().toString(36).slice(2);
    function qd(e) {
      if (!e[ch]) {
        e[ch] = !0, tn.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === ha ? e : e.ownerDocument;
        t !== null && (t[ch] || (t[ch] = !0, by("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = $n(e, t, a), f = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? nf(e, t, s, f) : Zi(e, t, s) : f !== void 0 ? Ad(e, t, s, f) : xo(e, t, s);
    }
    function L0(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function ky(e, t, a, i, u) {
      var s = i;
      if (!(t & Sc) && !(t & vs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === X || v === be) {
                var y = p.stateNode.containerInfo;
                if (L0(y, f))
                  break;
                if (v === be)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === X || b === be) {
                      var w = g.stateNode.containerInfo;
                      if (L0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var z = Xs(y);
                  if (z === null)
                    return;
                  var U = z.tag;
                  if (U === ue || U === we) {
                    p = s = z;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      ys(function() {
        return bT(e, t, a, s);
      });
    }
    function Xd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, z = b.tag;
        if (z === ue && w !== null && (g = w, p !== null)) {
          var U = ou(y, p);
          U != null && v.push(Xd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function fh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = ou(u, a);
          y != null && i.unshift(Xd(u, y, v));
          var g = ou(u, t);
          g != null && i.push(Xd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Sf(s))
        u++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; u - f > 0; )
        a = Sf(a), u--;
      for (; f - u > 0; )
        i = Sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function N0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var z = ou(p, s);
            z != null && f.unshift(Xd(p, z, w));
          } else if (!u) {
            var U = ou(p, s);
            U != null && f.push(Xd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function OT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function LT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ya = !1, Kd = "dangerouslySetInnerHTML", dh = "suppressContentEditableWarning", Do = "suppressHydrationWarning", M0 = "autoFocus", Gs = "children", qs = "style", ph = "__html", Dy, vh, Zd, z0, hh, U0, A0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, vh = function(e, t) {
      Ku(e, t), vv(e, t), Rl(e, t, {
        registrationNameDependencies: er,
        possibleRegistrationNames: tr
      });
    }, U0 = yn && !document.documentMode, Zd = function(e, t, a) {
      if (!Ya) {
        var i = mh(a), u = mh(t);
        u !== i && (Ya = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!Ya) {
        Ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, hh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === Pi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var NT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function mh(e) {
      sa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(NT, `
`).replace(MT, "");
    }
    function yh(e, t, a, i) {
      var u = mh(t), s = mh(e);
      if (s !== u && (i && (Ya || (Ya = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function j0(e) {
      return e.nodeType === ha ? e : e.ownerDocument;
    }
    function zT() {
    }
    function gh(e) {
      e.onclick = zT;
    }
    function UT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === qs)
            f && Object.freeze(f), ov(t, f);
          else if (s === Kd) {
            var p = f ? f[ph] : void 0;
            p != null && Jp(t, p);
          } else if (s === Gs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && os(t, f);
            } else
              typeof f == "number" && os(t, "" + f);
          else
            s === dh || s === Do || s === M0 || (er.hasOwnProperty(s) ? f != null && (typeof f != "function" && hh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && Mi(t, s, f, u));
        }
    }
    function AT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === qs ? ov(e, f) : s === Kd ? Jp(e, f) : s === Gs ? os(e, f) : Mi(e, s, f, i);
      }
    }
    function jT(e, t, a, i) {
      var u, s = j0(a), f, p = i;
      if (p === Pi && (p = qf(e)), p === Pi) {
        if (u = iu(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Pi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !nr.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FT(e, t) {
      return j0(t).createTextNode(e);
    }
    function HT(e, t, a, i) {
      var u = iu(t, a);
      vh(t, a);
      var s;
      switch (t) {
        case "dialog":
          hn("cancel", e), hn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Gd.length; f++)
            hn(Gd[f], e);
          s = a;
          break;
        case "source":
          hn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e), s = a;
          break;
        case "details":
          hn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), hn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          us(e, a), s = ls(e, a), hn("invalid", e);
          break;
        case "textarea":
          Kp(e, a), s = Gf(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fs(t, s), UT(t, e, i, s, u), t) {
        case "input":
          Fi(e), Z(e, a, !1);
          break;
        case "textarea":
          Fi(e), dc(e);
          break;
        case "option":
          Pt(e, a);
          break;
        case "select":
          Wf(e, a);
          break;
        default:
          typeof s.onClick == "function" && gh(e);
          break;
      }
    }
    function VT(e, t, a, i, u) {
      vh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = ls(e, a), p = ls(e, i), s = [];
          break;
        case "textarea":
          f = Gf(e, a), p = Gf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && gh(e);
          break;
      }
      fs(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === qs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Kd || v === Gs || v === dh || v === Do || v === M0 || (er.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === z || w == null && z == null))
          if (v === qs)
            if (w && Object.freeze(w), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && z[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === Kd) {
            var U = w ? w[ph] : void 0, F = z ? z[ph] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else
            v === Gs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === dh || v === Do || (er.hasOwnProperty(v) ? (w != null && (typeof w != "function" && hh(v, w), v === "onScroll" && hn("scroll", e)), !s && z !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (sv(g, p[qs]), (s = s || []).push(qs, g)), s;
    }
    function PT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = iu(a, i), f = iu(a, u);
      switch (AT(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          Zp(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function BT(e) {
      {
        var t = e.toLowerCase();
        return mc.hasOwnProperty(t) && mc[t] || null;
      }
    }
    function $T(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = iu(t, a), vh(t, a), t) {
        case "dialog":
          hn("cancel", e), hn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Gd.length; y++)
            hn(Gd[y], e);
          break;
        case "source":
          hn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e);
          break;
        case "details":
          hn("toggle", e);
          break;
        case "input":
          C(e, a), hn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          us(e, a), hn("invalid", e);
          break;
        case "textarea":
          Kp(e, a), hn("invalid", e);
          break;
      }
      fs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var z = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var F = a[U];
          if (U === Gs)
            typeof F == "string" ? e.textContent !== F && (a[Do] !== !0 && yh(e.textContent, F, s, f), z = [Gs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[Do] !== !0 && yh(e.textContent, F, s, f), z = [Gs, "" + F]);
          else if (er.hasOwnProperty(U))
            F != null && (typeof F != "function" && hh(U, F), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var pe = void 0, je = p && $e ? null : Gn(U);
            if (a[Do] !== !0) {
              if (!(U === dh || U === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Kd) {
                  var Le = e.innerHTML, Tt = F ? F[ph] : void 0;
                  if (Tt != null) {
                    var yt = A0(e, Tt);
                    yt !== Le && Zd(U, Le, yt);
                  }
                } else if (U === qs) {
                  if (v.delete(U), U0) {
                    var D = Km(F);
                    pe = e.getAttribute("style"), D !== pe && Zd(U, pe, D);
                  }
                } else if (p && !$e)
                  v.delete(U.toLowerCase()), pe = ka(e, U, F), F !== pe && Zd(U, pe, F);
                else if (!cn(U, je, p) && !Ft(U, F, je, p)) {
                  var H = !1;
                  if (je !== null)
                    v.delete(je.attributeName), pe = Ja(e, U, F, je);
                  else {
                    var O = i;
                    if (O === Pi && (O = qf(t)), O === Pi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = BT(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    pe = ka(e, U, F);
                  }
                  var ve = $e;
                  !ve && F !== pe && !H && Zd(U, pe, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && z0(v), t) {
        case "input":
          Fi(e), Z(e, a, !0);
          break;
        case "textarea":
          Fi(e), dc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && gh(e);
          break;
      }
      return z;
    }
    function YT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t, a) {
      {
        if (Ya)
          return;
        Ya = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Ya)
          return;
        Ya = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function IT(e, t, a) {
      switch (t) {
        case "input":
          xe(e, a);
          return;
        case "textarea":
          Bm(e, a);
          return;
        case "select":
          qp(e, a);
          return;
      }
    }
    var Jd = function() {
    }, ep = function() {
    };
    {
      var QT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], F0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], WT = F0.concat(["button"]), GT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], H0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ep = function(e, t) {
        var a = ut({}, e || H0), i = {
          tag: t
        };
        return F0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), WT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), QT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return GT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, XT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, V0 = {};
      Jd = function(e, t, a) {
        a = a || H0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = qT(e, u) ? null : i, f = s ? null : XT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!V0[y]) {
            V0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Sh = "suppressHydrationWarning", Eh = "$", Ch = "/$", tp = "$?", np = "$!", KT = "style", zy = null, Uy = null;
    function ZT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ha:
        case Kf: {
          t = i === ha ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Xf(null, "");
          break;
        }
        default: {
          var s = i === gn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Xf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ep(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function JT(e, t, a) {
      {
        var i = e, u = Xf(i.namespace, t), s = ep(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function gk(e) {
      return e;
    }
    function eR(e) {
      zy = To(), Uy = vT();
      var t = null;
      return na(!1), t;
    }
    function tR(e) {
      hT(Uy), na(zy), zy = null, Uy = null;
    }
    function nR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Jd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ep(f.ancestorInfo, e);
          Jd(null, p, v);
        }
        s = f.namespace;
      }
      var y = jT(e, t, a, s);
      return ip(u, y), $y(y, t), y;
    }
    function rR(e, t) {
      e.appendChild(t);
    }
    function aR(e, t, a, i, u) {
      switch (HT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function iR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ep(f.ancestorInfo, t);
          Jd(null, p, v);
        }
      }
      return VT(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function lR(e, t, a, i) {
      {
        var u = a;
        Jd(null, e, u.ancestorInfo);
      }
      var s = FT(e, t);
      return ip(i, s), s;
    }
    function uR() {
      var e = window.event;
      return e === void 0 ? Ti : tf(e.type);
    }
    var jy = typeof setTimeout == "function" ? setTimeout : void 0, oR = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, P0 = typeof Promise == "function" ? Promise : void 0, sR = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(cR);
    } : jy;
    function cR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function fR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function dR(e, t, a, i, u, s) {
      PT(e, t, a, i, u), $y(e, u);
    }
    function B0(e) {
      os(e, "");
    }
    function pR(e, t, a) {
      e.nodeValue = a;
    }
    function vR(e, t) {
      e.appendChild(t);
    }
    function hR(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && gh(a);
    }
    function mR(e, t, a) {
      e.insertBefore(t, a);
    }
    function yR(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function gR(e, t) {
      e.removeChild(t);
    }
    function SR(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Hy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === gn) {
          var s = u.data;
          if (s === Ch)
            if (i === 0) {
              e.removeChild(u), Tn(t);
              return;
            } else
              i--;
          else
            (s === Eh || s === tp || s === np) && i++;
        }
        a = u;
      } while (a);
      Tn(t);
    }
    function ER(e, t) {
      e.nodeType === gn ? Hy(e.parentNode, t) : e.nodeType === Qr && Hy(e, t), Tn(e);
    }
    function CR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function TR(e) {
      e.nodeValue = "";
    }
    function RR(e, t) {
      e = e;
      var a = t[KT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Cl("display", i);
    }
    function xR(e, t) {
      e.nodeValue = t;
    }
    function wR(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === ha && e.documentElement && e.removeChild(e.documentElement);
    }
    function _R(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bR(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function kR(e) {
      return e.nodeType !== gn ? null : e;
    }
    function $0(e) {
      return e.data === tp;
    }
    function Vy(e) {
      return e.data === np;
    }
    function DR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function OR(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Bi)
          break;
        if (t === gn) {
          var a = e.data;
          if (a === Eh || a === np || a === tp)
            break;
          if (a === Ch)
            return null;
        }
      }
      return e;
    }
    function rp(e) {
      return Th(e.nextSibling);
    }
    function LR(e) {
      return Th(e.firstChild);
    }
    function NR(e) {
      return Th(e.firstChild);
    }
    function MR(e) {
      return Th(e.nextSibling);
    }
    function zR(e, t, a, i, u, s, f) {
      ip(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Oe) !== Ae;
      return $T(e, t, a, p, i, y, f);
    }
    function UR(e, t, a, i) {
      return ip(a, e), a.mode & Oe, YT(e, t);
    }
    function AR(e, t) {
      ip(t, e);
    }
    function jR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var i = t.data;
          if (i === Ch) {
            if (a === 0)
              return rp(t);
            a--;
          } else
            (i === Eh || i === np || i === tp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var i = t.data;
          if (i === Eh || i === np || i === tp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Ch && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function FR(e) {
      Tn(e);
    }
    function HR(e) {
      Tn(e);
    }
    function VR(e) {
      return e !== "head" && e !== "body";
    }
    function PR(e, t, a, i) {
      var u = !0;
      yh(t.nodeValue, a, i, u);
    }
    function BR(e, t, a, i, u, s) {
      if (t[Sh] !== !0) {
        var f = !0;
        yh(i.nodeValue, u, s, f);
      }
    }
    function $R(e, t) {
      t.nodeType === Qr ? Oy(e, t) : t.nodeType === gn || Ly(e, t);
    }
    function YR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Oy(a, t) : t.nodeType === gn || Ly(a, t));
      }
    }
    function IR(e, t, a, i, u) {
      (u || t[Sh] !== !0) && (i.nodeType === Qr ? Oy(a, i) : i.nodeType === gn || Ly(a, i));
    }
    function QR(e, t, a) {
      Ny(e, t);
    }
    function WR(e, t) {
      My(e, t);
    }
    function GR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function qR(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function XR(e, t, a, i, u, s) {
      (s || t[Sh] !== !0) && Ny(a, i);
    }
    function KR(e, t, a, i, u) {
      (u || t[Sh] !== !0) && My(a, i);
    }
    function ZR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function JR(e) {
      qd(e);
    }
    var Ef = Math.random().toString(36).slice(2), Cf = "__reactFiber$" + Ef, Py = "__reactProps$" + Ef, ap = "__reactContainer$" + Ef, By = "__reactEvents$" + Ef, ex = "__reactListeners$" + Ef, tx = "__reactHandles$" + Ef;
    function nx(e) {
      delete e[Cf], delete e[Py], delete e[By], delete e[ex], delete e[tx];
    }
    function ip(e, t) {
      t[Cf] = e;
    }
    function Rh(e, t) {
      t[ap] = e;
    }
    function I0(e) {
      e[ap] = null;
    }
    function lp(e) {
      return !!e[ap];
    }
    function Xs(e) {
      var t = e[Cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ap] || a[Cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[Cf];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Oo(e) {
      var t = e[Cf] || e[ap];
      return t && (t.tag === ue || t.tag === we || t.tag === Re || t.tag === X) ? t : null;
    }
    function Tf(e) {
      if (e.tag === ue || e.tag === we)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[Py] || null;
    }
    function $y(e, t) {
      e[Py] = t;
    }
    function rx(e) {
      var t = e[By];
      return t === void 0 && (t = e[By] = /* @__PURE__ */ new Set()), t;
    }
    var Q0 = {}, W0 = Pe.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = gt(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(nr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in Q0) && (Q0[p.message] = !0, wh(u), S("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var Yy = [], _h;
    _h = [];
    var ku = -1;
    function Lo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (ku < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== _h[ku] && S("Unexpected Fiber popped."), e.current = Yy[ku], Yy[ku] = null, _h[ku] = null, ku--;
    }
    function aa(e, t, a) {
      ku++, Yy[ku] = e.current, _h[ku] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ui = {};
    Object.freeze(ui);
    var Du = Lo(ui), Vl = Lo(!1), Qy = ui;
    function Rf(e, t, a) {
      return a && Pl(t) ? Qy : Du.current;
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ke(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && G0(e, t, s), s;
      }
    }
    function bh() {
      return Vl.current;
    }
    function Pl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function kh(e) {
      ra(Vl, e), ra(Du, e);
    }
    function Wy(e) {
      ra(Vl, e), ra(Du, e);
    }
    function q0(e, t, a) {
      {
        if (Du.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Du, t, e), aa(Vl, a, e);
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return ut({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Qy = Du.current, aa(Du, a, e), aa(Vl, Vl.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = X0(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Vl, e), ra(Du, e), aa(Du, u, e), aa(Vl, a, e);
        } else
          ra(Vl, e), aa(Vl, a, e);
      }
    }
    function ax(e) {
      {
        if (!ga(e) || e.tag !== ee)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case X:
              return t.stateNode.context;
            case ee: {
              var a = t.type;
              if (Pl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var No = 0, Oh = 1, Ou = null, Gy = !1, qy = !1;
    function Z0(e) {
      Ou === null ? Ou = [e] : Ou.push(e);
    }
    function ix(e) {
      Gy = !0, Z0(e);
    }
    function J0() {
      Gy && Mo();
    }
    function Mo() {
      if (!qy && Ou !== null) {
        qy = !0;
        var e = 0, t = Ha();
        try {
          var a = !0, i = Ou;
          for (Cn(Ln); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ou = null, Gy = !1;
        } catch (s) {
          throw Ou !== null && (Ou = Ou.slice(e + 1)), yd(Kr, Mo), s;
        } finally {
          Cn(t), qy = !1;
        }
      }
      return null;
    }
    var wf = [], _f = 0, Lh = null, Nh = 0, _i = [], bi = 0, Ks = null, Lu = 1, Nu = "";
    function lx(e) {
      return Js(), (e.flags & wv) !== Ue;
    }
    function ux(e) {
      return Js(), Nh;
    }
    function ox() {
      var e = Nu, t = Lu, a = t & ~sx(t);
      return a.toString(32) + e;
    }
    function Zs(e, t) {
      Js(), wf[_f++] = Nh, wf[_f++] = Lh, Lh = e, Nh = t;
    }
    function eE(e, t, a) {
      Js(), _i[bi++] = Lu, _i[bi++] = Nu, _i[bi++] = Ks, Ks = e;
      var i = Lu, u = Nu, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, z = s - y, U = Mh(t) + z, F = p << z, pe = F | w, je = b + u;
        Lu = 1 << U | pe, Nu = je;
      } else {
        var Le = p << s, Tt = Le | f, yt = u;
        Lu = 1 << v | Tt, Nu = yt;
      }
    }
    function Xy(e) {
      Js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Zs(e, a), eE(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - bs(e);
    }
    function sx(e) {
      return 1 << Mh(e) - 1;
    }
    function Ky(e) {
      for (; e === Lh; )
        Lh = wf[--_f], wf[_f] = null, Nh = wf[--_f], wf[_f] = null;
      for (; e === Ks; )
        Ks = _i[--bi], _i[bi] = null, Nu = _i[--bi], _i[bi] = null, Lu = _i[--bi], _i[bi] = null;
    }
    function cx() {
      return Js(), Ks !== null ? {
        id: Lu,
        overflow: Nu
      } : null;
    }
    function fx(e, t) {
      Js(), _i[bi++] = Lu, _i[bi++] = Nu, _i[bi++] = Ks, Lu = t.id, Nu = t.overflow, Ks = e;
    }
    function Js() {
      Lr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Or = null, ki = null, nl = !1, ec = !1, zo = null;
    function dx() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tE() {
      ec = !0;
    }
    function px() {
      return ec;
    }
    function vx(e) {
      var t = e.stateNode.containerInfo;
      return ki = NR(t), Or = e, nl = !0, zo = null, ec = !1, !0;
    }
    function hx(e, t, a) {
      return ki = MR(t), Or = e, nl = !0, zo = null, ec = !1, a !== null && fx(e, a), !0;
    }
    function nE(e, t) {
      switch (e.tag) {
        case X: {
          $R(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & Oe) !== Ae;
          IR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && YR(i.dehydrated, t);
          break;
        }
      }
    }
    function rE(e, t) {
      nE(e, t);
      var a = gb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ot) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case X: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, QR(a, i);
                break;
              case we:
                var u = t.pendingProps;
                WR(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Oe) !== Ae;
                XR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case we: {
                var b = t.pendingProps, w = (e.mode & Oe) !== Ae;
                KR(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var z = e.memoizedState, U = z.dehydrated;
            if (U !== null)
              switch (t.tag) {
                case ue:
                  var F = t.type;
                  t.pendingProps, GR(U, F);
                  break;
                case we:
                  var pe = t.pendingProps;
                  qR(U, pe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function aE(e, t) {
      t.flags = t.flags & ~yi | It, Zy(e, t);
    }
    function iE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = _R(t, a);
          return i !== null ? (e.stateNode = i, Or = e, ki = LR(i), !0) : !1;
        }
        case we: {
          var u = e.pendingProps, s = bR(t, u);
          return s !== null ? (e.stateNode = s, Or = e, ki = null, !0) : !1;
        }
        case Re: {
          var f = kR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: cx(),
              retryLane: Ca
            };
            e.memoizedState = p;
            var v = Sb(f);
            return v.return = e, e.child = v, Or = e, ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & Oe) !== Ae && (e.flags & Ze) === Ue;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (nl) {
        var t = ki;
        if (!t) {
          Jy(e) && (Zy(Or, e), eg()), aE(Or, e), nl = !1, Or = e;
          return;
        }
        var a = t;
        if (!iE(e, t)) {
          Jy(e) && (Zy(Or, e), eg()), t = rp(a);
          var i = Or;
          if (!t || !iE(e, t)) {
            aE(Or, e), nl = !1, Or = e;
            return;
          }
          rE(i, a);
        }
      }
    }
    function mx(e, t, a) {
      var i = e.stateNode, u = !ec, s = zR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function yx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = UR(t, a, e);
      if (i) {
        var u = Or;
        if (u !== null)
          switch (u.tag) {
            case X: {
              var s = u.stateNode.containerInfo, f = (u.mode & Oe) !== Ae;
              PR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Oe) !== Ae;
              BR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function gx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      AR(a, e);
    }
    function Sx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return jR(a);
    }
    function lE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== X && t.tag !== Re; )
        t = t.return;
      Or = t;
    }
    function zh(e) {
      if (e !== Or)
        return !1;
      if (!nl)
        return lE(e), nl = !0, !1;
      if (e.tag !== X && (e.tag !== ue || VR(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = ki;
        if (t)
          if (Jy(e))
            uE(e), eg();
          else
            for (; t; )
              rE(e, t), t = rp(t);
      }
      return lE(e), e.tag === Re ? ki = Sx(e) : ki = Or ? rp(e.stateNode) : null, !0;
    }
    function Ex() {
      return nl && ki !== null;
    }
    function uE(e) {
      for (var t = ki; t; )
        nE(e, t), t = rp(t);
    }
    function bf() {
      Or = null, ki = null, nl = !1, ec = !1;
    }
    function oE() {
      zo !== null && (n1(zo), zo = null);
    }
    function Lr() {
      return nl;
    }
    function ng(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var Cx = Pe.ReactCurrentBatchConfig, Tx = null;
    function Rx() {
      return Cx.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var xx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Sn && (t = a), a = a.return;
        return t;
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, up = [], op = [], sp = [], cp = [], fp = [], dp = [], nc = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillMount == "function" && op.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillUpdate == "function" && dp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(w) {
          e.add(Ke(w) || "Component"), nc.add(w.type);
        }), up = []);
        var t = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          t.add(Ke(w) || "Component"), nc.add(w.type);
        }), op = []);
        var a = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          a.add(Ke(w) || "Component"), nc.add(w.type);
        }), sp = []);
        var i = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          i.add(Ke(w) || "Component"), nc.add(w.type);
        }), cp = []);
        var u = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          u.add(Ke(w) || "Component"), nc.add(w.type);
        }), fp = []);
        var s = /* @__PURE__ */ new Set();
        if (dp.length > 0 && (dp.forEach(function(w) {
          s.add(Ke(w) || "Component"), nc.add(w.type);
        }), dp = []), t.size > 0) {
          var f = tc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = tc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = tc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = tc(e);
          ye(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = tc(a);
          ye(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = tc(u);
          ye(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Uh = /* @__PURE__ */ new Map(), sE = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = xx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sE.has(e.type)) {
          var i = Uh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Uh.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Uh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), sE.add(s.type);
            });
            var u = tc(i);
            try {
              dn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              nn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        up = [], op = [], sp = [], cp = [], fp = [], dp = [], Uh = /* @__PURE__ */ new Map();
      };
    }
    function al(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var rg = Lo(null), ag;
    ag = {};
    var Ah = null, kf = null, ig = null, jh = !1;
    function Fh() {
      Ah = null, kf = null, ig = null, jh = !1;
    }
    function cE() {
      jh = !0;
    }
    function fE() {
      jh = !1;
    }
    function dE(e, t, a) {
      aa(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function lg(e, t) {
      var a = rg.current;
      ra(rg, t), e._currentValue = a;
    }
    function ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Eu(i.childLanes, t) ? u !== null && !Eu(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wx(e, t, a) {
      _x(e, t, a);
    }
    function _x(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ee) {
                var p = fo(a), v = Mu(Jt, p);
                v.tag = Vh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = nt(w.lanes, a)), ug(i.return, a, e), s.lanes = nt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === tt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Wt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = nt(z.lanes, a);
          var U = z.alternate;
          U !== null && (U.lanes = nt(U.lanes, a)), ug(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Ah = e, kf = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ta(a.lanes, t) && _p(), a.firstContext = null);
      }
    }
    function Jn(e) {
      jh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Ah === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Ah.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var rc = null;
    function og(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function bx() {
      if (rc !== null) {
        for (var e = 0; e < rc.length; e++) {
          var t = rc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        rc = null;
      }
    }
    function pE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Hh(e, i);
    }
    function kx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Dx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Hh(e, i);
    }
    function Ia(e, t) {
      return Hh(e, t);
    }
    var Ox = Hh;
    function Hh(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (It | yi)) !== Ue && v1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = nt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (u.flags & (It | yi)) !== Ue && v1(e), i = u, u = u.return;
      if (i.tag === X) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var vE = 0, hE = 1, Vh = 2, sg = 3, Ph = !1, cg, Bh;
    cg = !1, Bh = null;
    function fg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function mE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Mu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: vE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Bh === u && !cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), O_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Ox(e, a);
      } else
        return Dx(e, u, t, a);
    }
    function $h(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (kd(a)) {
          var s = u.lanes;
          s = Qc(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, Dd(e, f);
        }
      }
    }
    function dg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Lx(e, t, a, i, u, s) {
      switch (a.tag) {
        case hE: {
          var f = a.payload;
          if (typeof f == "function") {
            cE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Sn) {
                Zt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Zt(!1);
                }
              }
              fE();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~ir | Ze;
        case vE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            cE(), y = v.call(s, i, u);
            {
              if (e.mode & Sn) {
                Zt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Zt(!1);
                }
              }
              fE();
            }
          } else
            y = v;
          return y == null ? i : ut({}, i, y);
        }
        case Vh:
          return Ph = !0, i;
      }
      return i;
    }
    function Yh(e, t, a, i) {
      var u = e.updateQueue;
      Ph = !1, Bh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, U = V, F = null, pe = null, je = null, Le = s;
        do {
          var Tt = Le.lane, yt = Le.eventTime;
          if (Eu(i, Tt)) {
            if (je !== null) {
              var H = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                tag: Le.tag,
                payload: Le.payload,
                callback: Le.callback,
                next: null
              };
              je = je.next = H;
            }
            z = Lx(e, u, Le, z, t, a);
            var O = Le.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Le.lane !== Dn) {
              e.flags |= qn;
              var q = u.effects;
              q === null ? u.effects = [Le] : q.push(Le);
            }
          } else {
            var D = {
              eventTime: yt,
              lane: Tt,
              tag: Le.tag,
              payload: Le.payload,
              callback: Le.callback,
              next: null
            };
            je === null ? (pe = je = D, F = z) : je = je.next = D, U = nt(U, Tt);
          }
          if (Le = Le.next, Le === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, Le = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        je === null && (F = z), u.baseState = F, u.firstBaseUpdate = pe, u.lastBaseUpdate = je;
        var Ge = u.shared.interleaved;
        if (Ge !== null) {
          var et = Ge;
          do
            U = nt(U, et.lane), et = et.next;
          while (et !== Ge);
        } else
          s === null && (u.shared.lanes = V);
        Fp(U), e.lanes = U, e.memoizedState = z;
      }
      Bh = null;
    }
    function Nx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function yE() {
      Ph = !1;
    }
    function Ih() {
      return Ph;
    }
    function gE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nx(f, a));
        }
    }
    var pg = {}, SE = new K.Component().refs, vg, hg, mg, yg, gg, EE, Qh, Sg, Eg, Cg;
    {
      vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set();
      var CE = /* @__PURE__ */ new Set();
      Qh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          CE.has(a) || (CE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, EE = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
          gg.has(a) || (gg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(pg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(pg);
    }
    function Tg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Sn) {
          Zt(!0);
          try {
            s = a(i, u);
          } finally {
            Zt(!1);
          }
        }
        EE(t, s);
      }
      var f = s == null ? u : ut({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Rg = {
      isMounted: Sa,
      enqueueSetState: function(e, t, a) {
        var i = mi(e), u = xa(), s = $o(i), f = Mu(u, s);
        f.payload = t, a != null && (Qh(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (hr(p, i, s, u), $h(p, i, s)), Oc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mi(e), u = xa(), s = $o(i), f = Mu(u, s);
        f.tag = hE, f.payload = t, a != null && (Qh(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (hr(p, i, s, u), $h(p, i, s)), Oc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mi(e), i = xa(), u = $o(a), s = Mu(i, u);
        s.tag = Vh, t != null && (Qh(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (hr(f, a, u, i), $h(f, a, u)), uo(a, u);
      }
    };
    function TE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Sn) {
            Zt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Zt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ye(a, i) || !Ye(u, s) : !0;
    }
    function Mx(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Eg.has(t) && (Eg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !mg.has(t) && (mg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || bt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function RE(e, t) {
      t.updater = Rg, e.stateNode = t, Tc(t, e), t._reactInternalInstance = pg;
    }
    function xE(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ne && f._context === void 0
        );
        if (!p && !Cg.has(t)) {
          Cg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === I ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Sn) {
        Zt(!0);
        try {
          g = new t(a, s);
        } finally {
          Zt(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      RE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = _t(t) || "Component";
          hg.has(w) || (hg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || U !== null || F !== null) {
            var pe = _t(t) || "Component", je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yg.has(pe) || (yg.add(pe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, pe, je, z !== null ? `
  ` + z : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && G0(e, u, s), g;
    }
    function zx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), Rg.enqueueReplaceState(t, t.state, null));
    }
    function wE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          vg.has(s) || (vg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Rg.enqueueReplaceState(t, t.state, null);
      }
    }
    function xg(e, t, a, i) {
      Mx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = SE, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = Rf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = _t(t) || "Component";
          Sg.has(p) || (Sg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Sn && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Tg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (zx(e, u), Yh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = ke;
        y |= za, (e.mode & ja) !== Ae && (y |= Ua), e.flags |= y;
      }
    }
    function Ux(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = Rf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && wE(e, u, a, v), yE();
      var w = e.memoizedState, z = u.state = w;
      if (Yh(e, a, u, i), z = e.memoizedState, s === a && w === z && !bh() && !Ih()) {
        if (typeof u.componentDidMount == "function") {
          var U = ke;
          U |= za, (e.mode & ja) !== Ae && (U |= Ua), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (Tg(e, t, g, a), z = e.memoizedState);
      var F = Ih() || TE(e, t, s, a, w, z, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var pe = ke;
          pe |= za, (e.mode & ja) !== Ae && (pe |= Ua), e.flags |= pe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var je = ke;
          je |= za, (e.mode & ja) !== Ae && (je |= Ua), e.flags |= je;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, F;
    }
    function Ax(e, t, a, i, u) {
      var s = t.stateNode;
      mE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : al(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = Jn(g);
      else {
        var w = Rf(t, a, !0);
        b = xf(t, w);
      }
      var z = a.getDerivedStateFromProps, U = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && wE(t, s, i, b), yE();
      var F = t.memoizedState, pe = s.state = F;
      if (Yh(t, i, s, u), pe = t.memoizedState, f === v && F === pe && !bh() && !Ih() && !R)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= jn), !1;
      typeof z == "function" && (Tg(t, a, z, i), pe = t.memoizedState);
      var je = Ih() || TE(t, a, p, i, F, pe, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      R;
      return je ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, pe, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, pe, b)), typeof s.componentDidUpdate == "function" && (t.flags |= ke), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= jn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= jn), t.memoizedProps = i, t.memoizedState = pe), s.props = i, s.state = pe, s.context = b, je;
    }
    var wg, _g, bg, kg, Dg, _E = function(e, t) {
    };
    wg = !1, _g = !1, bg = {}, kg = {}, Dg = {}, _E = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        kg[a] || (kg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function pp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Sn || vt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ke(e) || "Component";
          bg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), bg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ee)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Pn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            w === SE && (w = v.refs = {}), b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Wh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Gh(e) {
      {
        var t = Ke(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function bE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kE(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= Ot) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(D, H) {
        var O = fc(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= wv, H;
        var q = D.alternate;
        if (q !== null) {
          var ve = q.index;
          return ve < H ? (D.flags |= It, H) : ve;
        } else
          return D.flags |= It, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= It), D;
      }
      function p(D, H, O, q) {
        if (H === null || H.tag !== we) {
          var ve = n0(O, D.mode, q);
          return ve.return = D, ve;
        } else {
          var se = u(H, O);
          return se.return = D, se;
        }
      }
      function v(D, H, O, q) {
        var ve = O.type;
        if (ve === va)
          return g(D, H, O.props.children, q, O.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        g1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === ze && bE(ve) === H.type)) {
          var se = u(H, O.props);
          return se.ref = pp(D, H, O), se.return = D, se._debugSource = O._source, se._debugOwner = O._owner, se;
        }
        var Ge = t0(O, D.mode, q);
        return Ge.ref = pp(D, H, O), Ge.return = D, Ge;
      }
      function y(D, H, O, q) {
        if (H === null || H.tag !== be || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ve = r0(O, D.mode, q);
          return ve.return = D, ve;
        } else {
          var se = u(H, O.children || []);
          return se.return = D, se;
        }
      }
      function g(D, H, O, q, ve) {
        if (H === null || H.tag !== dt) {
          var se = Io(O, D.mode, q, ve);
          return se.return = D, se;
        } else {
          var Ge = u(H, O);
          return Ge.return = D, Ge;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = n0("" + H, D.mode, O);
          return q.return = D, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Vr: {
              var ve = t0(H, D.mode, O);
              return ve.ref = pp(D, null, H), ve.return = D, ve;
            }
            case Pr: {
              var se = r0(H, D.mode, O);
              return se.return = D, se;
            }
            case ze: {
              var Ge = H._payload, et = H._init;
              return b(D, et(Ge), O);
            }
          }
          if (bt(H) || fi(H)) {
            var $t = Io(H, D.mode, O, null);
            return $t.return = D, $t;
          }
          Wh(D, H);
        }
        return typeof H == "function" && Gh(D), null;
      }
      function w(D, H, O, q) {
        var ve = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(D, H, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Vr:
              return O.key === ve ? v(D, H, O, q) : null;
            case Pr:
              return O.key === ve ? y(D, H, O, q) : null;
            case ze: {
              var se = O._payload, Ge = O._init;
              return w(D, H, Ge(se), q);
            }
          }
          if (bt(O) || fi(O))
            return ve !== null ? null : g(D, H, O, q, null);
          Wh(D, O);
        }
        return typeof O == "function" && Gh(D), null;
      }
      function z(D, H, O, q, ve) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var se = D.get(O) || null;
          return p(H, se, "" + q, ve);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Vr: {
              var Ge = D.get(q.key === null ? O : q.key) || null;
              return v(H, Ge, q, ve);
            }
            case Pr: {
              var et = D.get(q.key === null ? O : q.key) || null;
              return y(H, et, q, ve);
            }
            case ze:
              var $t = q._payload, Nt = q._init;
              return z(D, H, O, Nt($t), ve);
          }
          if (bt(q) || fi(q)) {
            var Qn = D.get(O) || null;
            return g(H, Qn, q, ve, null);
          }
          Wh(H, q);
        }
        return typeof q == "function" && Gh(H), null;
      }
      function U(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case Vr:
            case Pr:
              _E(D, O);
              var q = D.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case ze:
              var ve = D._payload, se = D._init;
              U(se(ve), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, q) {
        for (var ve = null, se = 0; se < O.length; se++) {
          var Ge = O[se];
          ve = U(Ge, ve, D);
        }
        for (var et = null, $t = null, Nt = H, Qn = 0, Mt = 0, Hn = null; Nt !== null && Mt < O.length; Mt++) {
          Nt.index > Mt ? (Hn = Nt, Nt = null) : Hn = Nt.sibling;
          var la = w(D, Nt, O[Mt], q);
          if (la === null) {
            Nt === null && (Nt = Hn);
            break;
          }
          e && Nt && la.alternate === null && t(D, Nt), Qn = s(la, Qn, Mt), $t === null ? et = la : $t.sibling = la, $t = la, Nt = Hn;
        }
        if (Mt === O.length) {
          if (a(D, Nt), Lr()) {
            var Fr = Mt;
            Zs(D, Fr);
          }
          return et;
        }
        if (Nt === null) {
          for (; Mt < O.length; Mt++) {
            var si = b(D, O[Mt], q);
            si !== null && (Qn = s(si, Qn, Mt), $t === null ? et = si : $t.sibling = si, $t = si);
          }
          if (Lr()) {
            var wa = Mt;
            Zs(D, wa);
          }
          return et;
        }
        for (var _a = i(D, Nt); Mt < O.length; Mt++) {
          var ua = z(_a, D, Mt, O[Mt], q);
          ua !== null && (e && ua.alternate !== null && _a.delete(ua.key === null ? Mt : ua.key), Qn = s(ua, Qn, Mt), $t === null ? et = ua : $t.sibling = ua, $t = ua);
        }
        if (e && _a.forEach(function(Qf) {
          return t(D, Qf);
        }), Lr()) {
          var Hu = Mt;
          Zs(D, Hu);
        }
        return et;
      }
      function pe(D, H, O, q) {
        var ve = fi(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (_g || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _g = !0), O.entries === ve && (wg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var se = ve.call(O);
          if (se)
            for (var Ge = null, et = se.next(); !et.done; et = se.next()) {
              var $t = et.value;
              Ge = U($t, Ge, D);
            }
        }
        var Nt = ve.call(O);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Mt = null, Hn = H, la = 0, Fr = 0, si = null, wa = Nt.next(); Hn !== null && !wa.done; Fr++, wa = Nt.next()) {
          Hn.index > Fr ? (si = Hn, Hn = null) : si = Hn.sibling;
          var _a = w(D, Hn, wa.value, q);
          if (_a === null) {
            Hn === null && (Hn = si);
            break;
          }
          e && Hn && _a.alternate === null && t(D, Hn), la = s(_a, la, Fr), Mt === null ? Qn = _a : Mt.sibling = _a, Mt = _a, Hn = si;
        }
        if (wa.done) {
          if (a(D, Hn), Lr()) {
            var ua = Fr;
            Zs(D, ua);
          }
          return Qn;
        }
        if (Hn === null) {
          for (; !wa.done; Fr++, wa = Nt.next()) {
            var Hu = b(D, wa.value, q);
            Hu !== null && (la = s(Hu, la, Fr), Mt === null ? Qn = Hu : Mt.sibling = Hu, Mt = Hu);
          }
          if (Lr()) {
            var Qf = Fr;
            Zs(D, Qf);
          }
          return Qn;
        }
        for (var $p = i(D, Hn); !wa.done; Fr++, wa = Nt.next()) {
          var ql = z($p, D, Fr, wa.value, q);
          ql !== null && (e && ql.alternate !== null && $p.delete(ql.key === null ? Fr : ql.key), la = s(ql, la, Fr), Mt === null ? Qn = ql : Mt.sibling = ql, Mt = ql);
        }
        if (e && $p.forEach(function(Xb) {
          return t(D, Xb);
        }), Lr()) {
          var qb = Fr;
          Zs(D, qb);
        }
        return Qn;
      }
      function je(D, H, O, q) {
        if (H !== null && H.tag === we) {
          a(D, H.sibling);
          var ve = u(H, O);
          return ve.return = D, ve;
        }
        a(D, H);
        var se = n0(O, D.mode, q);
        return se.return = D, se;
      }
      function Le(D, H, O, q) {
        for (var ve = O.key, se = H; se !== null; ) {
          if (se.key === ve) {
            var Ge = O.type;
            if (Ge === va) {
              if (se.tag === dt) {
                a(D, se.sibling);
                var et = u(se, O.props.children);
                return et.return = D, et._debugSource = O._source, et._debugOwner = O._owner, et;
              }
            } else if (se.elementType === Ge || // Keep this check inline so it only runs on the false path:
            g1(se, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === ze && bE(Ge) === se.type) {
              a(D, se.sibling);
              var $t = u(se, O.props);
              return $t.ref = pp(D, se, O), $t.return = D, $t._debugSource = O._source, $t._debugOwner = O._owner, $t;
            }
            a(D, se);
            break;
          } else
            t(D, se);
          se = se.sibling;
        }
        if (O.type === va) {
          var Nt = Io(O.props.children, D.mode, q, O.key);
          return Nt.return = D, Nt;
        } else {
          var Qn = t0(O, D.mode, q);
          return Qn.ref = pp(D, H, O), Qn.return = D, Qn;
        }
      }
      function Tt(D, H, O, q) {
        for (var ve = O.key, se = H; se !== null; ) {
          if (se.key === ve)
            if (se.tag === be && se.stateNode.containerInfo === O.containerInfo && se.stateNode.implementation === O.implementation) {
              a(D, se.sibling);
              var Ge = u(se, O.children || []);
              return Ge.return = D, Ge;
            } else {
              a(D, se);
              break;
            }
          else
            t(D, se);
          se = se.sibling;
        }
        var et = r0(O, D.mode, q);
        return et.return = D, et;
      }
      function yt(D, H, O, q) {
        var ve = typeof O == "object" && O !== null && O.type === va && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Vr:
              return f(Le(D, H, O, q));
            case Pr:
              return f(Tt(D, H, O, q));
            case ze:
              var se = O._payload, Ge = O._init;
              return yt(D, H, Ge(se), q);
          }
          if (bt(O))
            return F(D, H, O, q);
          if (fi(O))
            return pe(D, H, O, q);
          Wh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(je(D, H, "" + O, q)) : (typeof O == "function" && Gh(D), a(D, H));
      }
      return yt;
    }
    var Of = kE(!0), DE = kE(!1);
    function jx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = fc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = fc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Fx(e, t) {
      for (var a = e.child; a !== null; )
        pb(a, t), a = a.sibling;
    }
    var vp = {}, Ao = Lo(vp), hp = Lo(vp), qh = Lo(vp);
    function Xh(e) {
      if (e === vp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OE() {
      var e = Xh(qh.current);
      return e;
    }
    function Og(e, t) {
      aa(qh, t, e), aa(hp, e, e), aa(Ao, vp, e);
      var a = ZT(t);
      ra(Ao, e), aa(Ao, a, e);
    }
    function Lf(e) {
      ra(Ao, e), ra(hp, e), ra(qh, e);
    }
    function Lg() {
      var e = Xh(Ao.current);
      return e;
    }
    function LE(e) {
      Xh(qh.current);
      var t = Xh(Ao.current), a = JT(t, e.type);
      t !== a && (aa(hp, e, e), aa(Ao, a, e));
    }
    function Ng(e) {
      hp.current === e && (ra(Ao, e), ra(hp, e));
    }
    var Hx = 0, NE = 1, ME = 1, mp = 2, il = Lo(Hx);
    function Mg(e, t) {
      return (e & t) !== 0;
    }
    function Nf(e) {
      return e & NE;
    }
    function zg(e, t) {
      return e & NE | t;
    }
    function Vx(e, t) {
      return e | t;
    }
    function jo(e, t) {
      aa(il, t, e);
    }
    function Mf(e) {
      ra(il, e);
    }
    function Px(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Kh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || Vy(i))
              return t;
          }
        } else if (t.tag === St && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ze) !== Ue;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), or = (
      /* */
      1
    ), Bl = (
      /*  */
      2
    ), sr = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), Ug = [];
    function Ag() {
      for (var e = 0; e < Ug.length; e++) {
        var t = Ug[e];
        t._workInProgressVersionPrimary = null;
      }
      Ug.length = 0;
    }
    function Bx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = Pe.ReactCurrentDispatcher, yp = Pe.ReactCurrentBatchConfig, jg, zf;
    jg = /* @__PURE__ */ new Set();
    var ac = V, Bt = null, cr = null, fr = null, Zh = !1, gp = !1, Sp = 0, $x = 0, Yx = 25, P = null, Di = null, Fo = -1, Fg = !1;
    function jt() {
      {
        var e = P;
        Di === null ? Di = [e] : Di.push(e);
      }
    }
    function re() {
      {
        var e = P;
        Di !== null && (Fo++, Di[Fo] !== e && Ix(e));
      }
    }
    function Uf(e) {
      e != null && !bt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Ix(e) {
      {
        var t = Ke(Bt);
        if (!jg.has(t) && (jg.add(t), Di !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = Di[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Hg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      ac = s, Bt = t, Di = e !== null ? e._debugHookTypes : null, Fo = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? fe.current = tC : Di !== null ? fe.current = eC : fe.current = JE;
      var f = a(i, u);
      if (gp) {
        var p = 0;
        do {
          if (gp = !1, Sp = 0, p >= Yx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, cr = null, fr = null, t.updateQueue = null, Fo = -1, fe.current = nC, f = a(i, u);
        } while (gp);
      }
      fe.current = fm, t._debugHookTypes = Di;
      var v = cr !== null && cr.next !== null;
      if (ac = V, Bt = null, cr = null, fr = null, P = null, Di = null, Fo = -1, e !== null && (e.flags & lr) !== (t.flags & lr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Oe) !== Ae && S("Internal React error: Expected static flag was missing. Please notify the React team."), Zh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = Sp !== 0;
      return Sp = 0, e;
    }
    function zE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ja) !== Ae ? t.flags &= ~(cu | Ua | Wr | ke) : t.flags &= ~(Wr | ke), e.lanes = Us(e.lanes, a);
    }
    function UE() {
      if (fe.current = fm, Zh) {
        for (var e = Bt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Zh = !1;
      }
      ac = V, Bt = null, cr = null, fr = null, Di = null, Fo = -1, P = null, GE = !1, gp = !1, Sp = 0;
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fr === null ? Bt.memoizedState = fr = e : fr = fr.next = e, fr;
    }
    function Oi() {
      var e;
      if (cr === null) {
        var t = Bt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = cr.next;
      var a;
      if (fr === null ? a = Bt.memoizedState : a = fr.next, a !== null)
        fr = a, a = fr.next, cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        cr = e;
        var i = {
          memoizedState: cr.memoizedState,
          baseState: cr.baseState,
          baseQueue: cr.baseQueue,
          queue: cr.queue,
          next: null
        };
        fr === null ? Bt.memoizedState = fr = i : fr = fr.next = i;
      }
      return fr;
    }
    function AE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Vg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = $l(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = qx.bind(null, Bt, s);
      return [i.memoizedState, f];
    }
    function Bg(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = cr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, z = null, U = null, F = g;
        do {
          var pe = F.lane;
          if (Eu(ac, pe)) {
            if (U !== null) {
              var Le = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = Le;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Tt = F.action;
              b = e(b, Tt);
            }
          } else {
            var je = {
              lane: pe,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (z = U = je, w = b) : U = U.next = je, Bt.lanes = nt(Bt.lanes, pe), Fp(pe);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? w = b : U.next = z, Ce(b, i.memoizedState) || _p(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var D = yt;
        do {
          var H = D.lane;
          Bt.lanes = nt(Bt.lanes, H), Fp(H), D = D.next;
        } while (D !== yt);
      } else
        f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function $g(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Ce(p, i.memoizedState) || _p(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Sk(e, t, a) {
    }
    function Ek(e, t, a) {
    }
    function Yg(e, t, a) {
      var i = Bt, u = $l(), s, f = Lr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          Ce(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(v, ac) || jE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, rm(HE.bind(null, i, y, e), [e]), i.flags |= Wr, Ep(or | Nr, FE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Jh(e, t, a) {
      var i = Bt, u = Oi(), s = t();
      if (!zf) {
        var f = t();
        Ce(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, v = !Ce(p, s);
      v && (u.memoizedState = s, _p());
      var y = u.queue;
      if (Tp(HE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      fr !== null && fr.memoizedState.tag & or) {
        i.flags |= Wr, Ep(or | Nr, FE.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(g, ac) || jE(i, t, s);
      }
      return s;
    }
    function jE(e, t, a) {
      e.flags |= su;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Bt.updateQueue;
      if (u === null)
        u = AE(), Bt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function FE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, VE(t) && PE(e);
    }
    function HE(e, t, a) {
      var i = function() {
        VE(t) && PE(e);
      };
      return a(i);
    }
    function VE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ce(a, i);
      } catch {
        return !0;
      }
    }
    function PE(e) {
      var t = Ia(e, He);
      t !== null && hr(t, e, He, Jt);
    }
    function em(e) {
      var t = $l();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: Vg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Xx.bind(null, Bt, a);
      return [t.memoizedState, i];
    }
    function Ig(e) {
      return Bg(Vg);
    }
    function Qg(e) {
      return $g(Vg);
    }
    function Ep(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Bt.updateQueue;
      if (s === null)
        s = AE(), Bt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Wg(e) {
      var t = $l();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function tm(e) {
      var t = Oi();
      return t.memoizedState;
    }
    function Cp(e, t, a, i) {
      var u = $l(), s = i === void 0 ? null : i;
      Bt.flags |= e, u.memoizedState = Ep(or | t, a, void 0, s);
    }
    function nm(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i, f = void 0;
      if (cr !== null) {
        var p = cr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Hg(s, v)) {
            u.memoizedState = Ep(t, a, f, s);
            return;
          }
        }
      }
      Bt.flags |= e, u.memoizedState = Ep(or | t, a, f, s);
    }
    function rm(e, t) {
      return (Bt.mode & ja) !== Ae ? Cp(cu | Wr | _l, Nr, e, t) : Cp(Wr | _l, Nr, e, t);
    }
    function Tp(e, t) {
      return nm(Wr, Nr, e, t);
    }
    function Gg(e, t) {
      return Cp(ke, Bl, e, t);
    }
    function am(e, t) {
      return nm(ke, Bl, e, t);
    }
    function qg(e, t) {
      var a = ke;
      return a |= za, (Bt.mode & ja) !== Ae && (a |= Ua), Cp(a, sr, e, t);
    }
    function im(e, t) {
      return nm(ke, sr, e, t);
    }
    function BE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Xg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ke;
      return u |= za, (Bt.mode & ja) !== Ae && (u |= Ua), Cp(u, sr, BE.bind(null, t, e), i);
    }
    function lm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return nm(ke, sr, BE.bind(null, t, e), i);
    }
    function Qx(e, t) {
    }
    var um = Qx;
    function Kg(e, t) {
      var a = $l(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function om(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Hg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Zg(e, t) {
      var a = $l(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function sm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Hg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = $l();
      return t.memoizedState = e, e;
    }
    function $E(e) {
      var t = Oi(), a = cr, i = a.memoizedState;
      return IE(t, i, e);
    }
    function YE(e) {
      var t = Oi();
      if (cr === null)
        return t.memoizedState = e, e;
      var a = cr.memoizedState;
      return IE(t, a, e);
    }
    function IE(e, t, a) {
      var i = !Fv(ac);
      if (i) {
        if (!Ce(a, t)) {
          var u = Pv();
          Bt.lanes = nt(Bt.lanes, u), Fp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, _p()), e.memoizedState = a, a;
    }
    function Wx(e, t, a) {
      var i = Ha();
      Cn(uy(i, Ki)), e(!0);
      var u = yp.transition;
      yp.transition = {};
      var s = yp.transition;
      yp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Cn(i), yp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function eS() {
      var e = em(!1), t = e[0], a = e[1], i = Wx.bind(null, a), u = $l();
      return u.memoizedState = i, [t, i];
    }
    function QE() {
      var e = Ig(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function WE() {
      var e = Qg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var GE = !1;
    function Gx() {
      return GE;
    }
    function tS() {
      var e = $l(), t = Dm(), a = t.identifierPrefix, i;
      if (Lr()) {
        var u = ox();
        i = ":" + a + "R" + u;
        var s = Sp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = $x++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function cm() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function qx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qE(e))
        XE(t, u);
      else {
        var s = pE(e, t, u, i);
        if (s !== null) {
          var f = xa();
          hr(s, e, i, f), KE(s, t, i);
        }
      }
      ZE(e, i);
    }
    function Xx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qE(e))
        XE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Ce(y, v)) {
                kx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = pE(e, t, u, i);
        if (g !== null) {
          var b = xa();
          hr(g, e, i, b), KE(g, t, i);
        }
      }
      ZE(e, i);
    }
    function qE(e) {
      var t = e.alternate;
      return e === Bt || t !== null && t === Bt;
    }
    function XE(e, t) {
      gp = Zh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KE(e, t, a) {
      if (kd(a)) {
        var i = t.lanes;
        i = Qc(i, e.pendingLanes);
        var u = nt(i, a);
        t.lanes = u, Dd(e, u);
      }
    }
    function ZE(e, t, a) {
      Oc(e, t);
    }
    var fm = {
      readContext: Jn,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: ge
    }, JE = null, eC = null, tC = null, nC = null, Yl = null, ll = null, dm = null;
    {
      var nS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Je = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", jt(), Uf(t), Kg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", jt(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", jt(), Uf(t), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", jt(), Uf(a), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", jt(), Uf(t), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", jt(), Uf(t), qg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", jt(), Uf(t);
          var a = fe.current;
          fe.current = Yl;
          try {
            return Zg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", jt();
          var i = fe.current;
          fe.current = Yl;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", jt(), Wg(e);
        },
        useState: function(e) {
          P = "useState", jt();
          var t = fe.current;
          fe.current = Yl;
          try {
            return em(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", jt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", jt(), Jg(e);
        },
        useTransition: function() {
          return P = "useTransition", jt(), eS();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", jt(), Yg(e, t, a);
        },
        useId: function() {
          return P = "useId", jt(), tS();
        },
        unstable_isNewReconciler: ge
      }, eC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), Kg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), qg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = fe.current;
          fe.current = Yl;
          try {
            return Zg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = fe.current;
          fe.current = Yl;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), Wg(e);
        },
        useState: function(e) {
          P = "useState", re();
          var t = fe.current;
          fe.current = Yl;
          try {
            return em(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), Jg(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), eS();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Yg(e, t, a);
        },
        useId: function() {
          return P = "useId", re(), tS();
        },
        unstable_isNewReconciler: ge
      }, tC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = fe.current;
          fe.current = ll;
          try {
            return sm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = fe.current;
          fe.current = ll;
          try {
            return Bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), tm();
        },
        useState: function(e) {
          P = "useState", re();
          var t = fe.current;
          fe.current = ll;
          try {
            return Ig(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), $E(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), QE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", re(), cm();
        },
        unstable_isNewReconciler: ge
      }, nC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = fe.current;
          fe.current = dm;
          try {
            return sm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = fe.current;
          fe.current = dm;
          try {
            return $g(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), tm();
        },
        useState: function(e) {
          P = "useState", re();
          var t = fe.current;
          fe.current = dm;
          try {
            return Qg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), YE(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", re(), cm();
        },
        unstable_isNewReconciler: ge
      }, Yl = {
        readContext: function(e) {
          return nS(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Je(), jt(), Kg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Je(), jt(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Je(), jt(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Je(), jt(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Je(), jt(), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Je(), jt(), qg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Je(), jt();
          var a = fe.current;
          fe.current = Yl;
          try {
            return Zg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Je(), jt();
          var i = fe.current;
          fe.current = Yl;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Je(), jt(), Wg(e);
        },
        useState: function(e) {
          P = "useState", Je(), jt();
          var t = fe.current;
          fe.current = Yl;
          try {
            return em(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Je(), jt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Je(), jt(), Jg(e);
        },
        useTransition: function() {
          return P = "useTransition", Je(), jt(), eS();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Je(), jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Je(), jt(), Yg(e, t, a);
        },
        useId: function() {
          return P = "useId", Je(), jt(), tS();
        },
        unstable_isNewReconciler: ge
      }, ll = {
        readContext: function(e) {
          return nS(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Je(), re(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Je(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Je(), re(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Je(), re(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Je(), re(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Je(), re(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Je(), re();
          var a = fe.current;
          fe.current = ll;
          try {
            return sm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Je(), re();
          var i = fe.current;
          fe.current = ll;
          try {
            return Bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Je(), re(), tm();
        },
        useState: function(e) {
          P = "useState", Je(), re();
          var t = fe.current;
          fe.current = ll;
          try {
            return Ig(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Je(), re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Je(), re(), $E(e);
        },
        useTransition: function() {
          return P = "useTransition", Je(), re(), QE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Je(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Je(), re(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", Je(), re(), cm();
        },
        unstable_isNewReconciler: ge
      }, dm = {
        readContext: function(e) {
          return nS(), Jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Je(), re(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Je(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Je(), re(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Je(), re(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Je(), re(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Je(), re(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Je(), re();
          var a = fe.current;
          fe.current = ll;
          try {
            return sm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Je(), re();
          var i = fe.current;
          fe.current = ll;
          try {
            return $g(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Je(), re(), tm();
        },
        useState: function(e) {
          P = "useState", Je(), re();
          var t = fe.current;
          fe.current = ll;
          try {
            return Qg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Je(), re(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Je(), re(), YE(e);
        },
        useTransition: function() {
          return P = "useTransition", Je(), re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Je(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Je(), re(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", Je(), re(), cm();
        },
        unstable_isNewReconciler: ge
      };
    }
    var Ho = L.unstable_now, rC = 0, pm = -1, Rp = -1, vm = -1, rS = !1, hm = !1;
    function aC() {
      return rS;
    }
    function Kx() {
      hm = !0;
    }
    function Zx() {
      rS = !1, hm = !1;
    }
    function Jx() {
      rS = hm, hm = !1;
    }
    function iC() {
      return rC;
    }
    function lC() {
      rC = Ho();
    }
    function aS(e) {
      Rp = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function uC(e) {
      Rp = -1;
    }
    function mm(e, t) {
      if (Rp >= 0) {
        var a = Ho() - Rp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Rp = -1;
      }
    }
    function Il(e) {
      if (pm >= 0) {
        var t = Ho() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case xt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function iS(e) {
      if (vm >= 0) {
        var t = Ho() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case xt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ql() {
      pm = Ho();
    }
    function lS() {
      vm = Ho();
    }
    function uS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ic(e, t) {
      return {
        value: e,
        source: t,
        stack: Pu(t),
        digest: null
      };
    }
    function oS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ew(e, t) {
      return !0;
    }
    function sS(e, t) {
      try {
        var a = ew(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ee)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === X)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var tw = typeof WeakMap == "function" ? WeakMap : Map;
    function oC(e, t, a) {
      var i = Mu(Jt, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        W_(u), sS(e, t);
      }, i;
    }
    function cS(e, t, a) {
      var i = Mu(Jt, a);
      i.tag = sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          S1(e), sS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        S1(e), sS(e, t), typeof u != "function" && I_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ta(e.lanes, He) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function sC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = G_.bind(null, e, t, a);
        Ea && Hp(e, a), t.then(s, s);
      }
    }
    function nw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rw(e, t) {
      var a = e.tag;
      if ((e.mode & Oe) === Ae && (a === ie || a === Fe || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cC(e) {
      var t = e;
      do {
        if (t.tag === Re && Px(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fC(e, t, a, i, u) {
      if ((e.mode & Oe) === Ae) {
        if (e === t)
          e.flags |= ir;
        else {
          if (e.flags |= Ze, a.flags |= Rc, a.flags &= ~(xv | wl), a.tag === ee) {
            var s = a.alternate;
            if (s === null)
              a.tag = mn;
            else {
              var f = Mu(Jt, He);
              f.tag = Vh, Uo(a, f, He);
            }
          }
          a.lanes = nt(a.lanes, He);
        }
        return e;
      }
      return e.flags |= ir, e.lanes = u, e;
    }
    function aw(e, t, a, i, u) {
      if (a.flags |= wl, Ea && Hp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rw(a), Lr() && a.mode & Oe && tE();
        var f = cC(t);
        if (f !== null) {
          f.flags &= ~kr, fC(f, t, a, e, u), f.mode & Oe && sC(e, s, u), nw(f, e, s);
          return;
        } else {
          if (!bd(u)) {
            sC(e, s, u), $S();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Lr() && a.mode & Oe) {
        tE();
        var v = cC(t);
        if (v !== null) {
          (v.flags & ir) === Ue && (v.flags |= kr), fC(v, t, a, e, u), ng(ic(i, a));
          return;
        }
      }
      i = ic(i, a), j_(i);
      var y = t;
      do {
        switch (y.tag) {
          case X: {
            var g = i;
            y.flags |= ir;
            var b = fo(u);
            y.lanes = nt(y.lanes, b);
            var w = oC(y, g, b);
            dg(y, w);
            return;
          }
          case ee:
            var z = i, U = y.type, F = y.stateNode;
            if ((y.flags & Ze) === Ue && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !c1(F))) {
              y.flags |= ir;
              var pe = fo(u);
              y.lanes = nt(y.lanes, pe);
              var je = cS(y, z, pe);
              dg(y, je);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function iw() {
      return null;
    }
    var xp = Pe.ReactCurrentOwner, ul = !1, fS, wp, dS, pS, vS, lc, hS, ym;
    fS = {}, wp = {}, dS = {}, pS = {}, vS = {}, lc = !1, hS = {}, ym = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = DE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function lw(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), ro(t);
      {
        if (xp.current = t, ar(!0), v = Af(e, t, f, i, p, u), y = jf(), t.mode & Sn) {
          Zt(!0);
          try {
            v = Af(e, t, f, i, p, u), y = jf();
          } finally {
            Zt(!1);
          }
        }
        ar(!1);
      }
      return du(), e !== null && !ul ? (zE(e, t, u), zu(e, t, u)) : (Lr() && y && Xy(t), t.flags |= ii, Ta(e, t, v, u), t.child);
    }
    function pC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (fb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = Ie, t.type = f, gS(t, s), vC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && tl(
            p,
            i,
            // Resolved props
            "prop",
            _t(s)
          );
        }
        var v = e0(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && tl(
          g,
          i,
          // Resolved props
          "prop",
          _t(y)
        );
      }
      var b = e.child, w = xS(e, u);
      if (!w) {
        var z = b.memoizedProps, U = a.compare;
        if (U = U !== null ? U : Ye, U(z, i) && e.ref === t.ref)
          return zu(e, t, u);
      }
      t.flags |= ii;
      var F = fc(b, i);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function vC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ze) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && tl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ye(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, xS(e, u))
            (e.flags & Rc) !== Ue && (ul = !0);
          else
            return t.lanes = e.lanes, zu(e, t, u);
      }
      return mS(e, t, a, i, u);
    }
    function hC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || $)
        if ((t.mode & Oe) === Ae) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Om(t, a);
        } else if (ta(a, Ca)) {
          var b = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Om(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = nt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Ca;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Om(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = nt(s.baseLanes, a), t.memoizedState = null) : z = a, Om(t, z);
      }
      return Ta(e, t, u, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function sw(e, t, a) {
      {
        t.flags |= ke;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function mC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ya, t.flags |= gi);
    }
    function mS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Df(t, u), ro(t);
      {
        if (xp.current = t, ar(!0), v = Af(e, t, a, i, f, u), y = jf(), t.mode & Sn) {
          Zt(!0);
          try {
            v = Af(e, t, a, i, f, u), y = jf();
          } finally {
            Zt(!1);
          }
        }
        ar(!1);
      }
      return du(), e !== null && !ul ? (zE(e, t, u), zu(e, t, u)) : (Lr() && y && Xy(t), t.flags |= ii, Ta(e, t, v, u), t.child);
    }
    function yC(e, t, a, i, u) {
      {
        switch (_b(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ze, t.flags |= ir;
            var y = new Error("Simulated error coming from DevTools"), g = fo(u);
            t.lanes = nt(t.lanes, g);
            var b = cS(t, ic(y, t), g);
            dg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && tl(
            w,
            i,
            // Resolved props
            "prop",
            _t(a)
          );
        }
      }
      var z;
      Pl(a) ? (z = !0, Dh(t)) : z = !1, Df(t, u);
      var U = t.stateNode, F;
      U === null ? (Sm(e, t), xE(t, a, i), xg(t, a, i, u), F = !0) : e === null ? F = Ux(t, a, i, u) : F = Ax(e, t, a, i, u);
      var pe = yS(e, t, a, F, z, u);
      {
        var je = t.stateNode;
        F && je.props !== i && (lc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), lc = !0);
      }
      return pe;
    }
    function yS(e, t, a, i, u, s) {
      mC(e, t);
      var f = (t.flags & Ze) !== Ue;
      if (!i && !f)
        return u && K0(t, a, !1), zu(e, t, s);
      var p = t.stateNode;
      xp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, uC();
      else {
        ro(t);
        {
          if (ar(!0), v = p.render(), t.mode & Sn) {
            Zt(!0);
            try {
              p.render();
            } finally {
              Zt(!1);
            }
          }
          ar(!1);
        }
        du();
      }
      return t.flags |= ii, e !== null && f ? lw(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function gC(e) {
      var t = e.stateNode;
      t.pendingContext ? q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && q0(e, t.context, !1), Og(e, t.containerInfo);
    }
    function cw(e, t, a) {
      if (gC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      mE(e, t), Yh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & kr) {
          var g = ic(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return SC(e, t, p, a, g);
        } else if (p !== s) {
          var b = ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return SC(e, t, p, a, b);
        } else {
          vx(t);
          var w = DE(t, null, p, a);
          t.child = w;
          for (var z = w; z; )
            z.flags = z.flags & ~It | yi, z = z.sibling;
        }
      } else {
        if (bf(), p === s)
          return zu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function SC(e, t, a, i, u) {
      return bf(), ng(u), t.flags |= kr, Ta(e, t, a, i), t.child;
    }
    function fw(e, t, a) {
      LE(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= Ma), mC(e, t), Ta(e, t, f, a), t.child;
    }
    function dw(e, t) {
      return e === null && tg(t), null;
    }
    function pw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = db(v), g = al(v, u), b;
      switch (y) {
        case ie:
          return gS(t, v), t.type = v = If(v), b = mS(null, t, v, g, i), b;
        case ee:
          return t.type = v = GS(v), b = yC(null, t, v, g, i), b;
        case Fe:
          return t.type = v = qS(v), b = dC(null, t, v, g, i), b;
        case Me: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && tl(
              w,
              g,
              // Resolved for outer only
              "prop",
              _t(v)
            );
          }
          return b = pC(
            null,
            t,
            v,
            al(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ze && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function vw(e, t, a, i, u) {
      Sm(e, t), t.tag = ee;
      var s;
      return Pl(a) ? (s = !0, Dh(t)) : s = !1, Df(t, u), xE(t, a, i), xg(t, a, i, u), yS(null, t, a, !0, s, u);
    }
    function hw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = xf(t, f);
      }
      Df(t, i);
      var p, v;
      ro(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = _t(a) || "Unknown";
          fS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), fS[y] = !0);
        }
        t.mode & Sn && rl.recordLegacyContextWarning(t, null), ar(!0), xp.current = t, p = Af(null, t, a, u, s, i), v = jf(), ar(!1);
      }
      if (du(), t.flags |= ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = _t(a) || "Unknown";
        wp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), wp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = _t(a) || "Unknown";
          wp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), wp[b] = !0);
        }
        t.tag = ee, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Pl(a) ? (w = !0, Dh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), RE(t, p), xg(t, a, u, i), yS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ie, t.mode & Sn) {
          Zt(!0);
          try {
            p = Af(null, t, a, u, s, i), v = jf();
          } finally {
            Zt(!1);
          }
        }
        return Lr() && v && Xy(t), Ta(null, t, p, i), gS(t, a), t.child;
      }
    }
    function gS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Oa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), vS[u] || (vS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = _t(t) || "Unknown";
          pS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), pS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = _t(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support contextType.", p), dS[p] = !0);
        }
      }
    }
    var SS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dn
    };
    function ES(e) {
      return {
        baseLanes: e,
        cachePool: iw(),
        transitions: null
      };
    }
    function mw(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Mg(e, mp);
    }
    function gw(e, t) {
      return Us(e.childLanes, t);
    }
    function EC(e, t, a) {
      var i = t.pendingProps;
      bb(t) && (t.flags |= Ze);
      var u = il.current, s = !1, f = (t.flags & Ze) !== Ue;
      if (f || yw(u, e) ? (s = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (u = Vx(u, ME)), u = Nf(u), jo(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Sw(t, y, g, a), w = t.child;
          return w.memoizedState = ES(a), t.memoizedState = SS, b;
        } else
          return CS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var U = z.dehydrated;
          if (U !== null)
            return xw(e, t, f, i, U, z, a);
        }
        if (s) {
          var F = i.fallback, pe = i.children, je = Cw(e, t, pe, F, a), Le = t.child, Tt = e.child.memoizedState;
          return Le.memoizedState = Tt === null ? ES(a) : mw(Tt, a), Le.childLanes = gw(e, a), t.memoizedState = SS, je;
        } else {
          var yt = i.children, D = Ew(e, t, yt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function CS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Sw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Oe) === Ae && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & kt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = TS(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return C1(e, t, V, null);
    }
    function CC(e, t) {
      return fc(e, t);
    }
    function Ew(e, t, a, i) {
      var u = e.child, s = u.sibling, f = CC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Oe) === Ae && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ot) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Oe) === Ae && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & kt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = CC(f, v), y.subtreeFlags = f.subtreeFlags & lr;
      var b;
      return p !== null ? b = fc(p, i) : (b = Io(i, s, u, null), b.flags |= It), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function gm(e, t, a, i) {
      i !== null && ng(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = CS(t, s);
      return f.flags |= It, t.memoizedState = null, f;
    }
    function Tw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Io(i, s, u, null);
      return v.flags |= It, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Oe) !== Ae && Of(t, e.child, null, u), v;
    }
    function Rw(e, t, a) {
      return (e.mode & Oe) === Ae ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = He) : Vy(t) ? e.lanes = En : e.lanes = Ca, null;
    }
    function xw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var D = oS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return gm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ze, null;
          var H = i.children, O = i.fallback, q = Tw(e, t, H, O, f), ve = t.child;
          return ve.memoizedState = ES(f), t.memoizedState = SS, q;
        }
      else {
        if (dx(), (t.mode & Oe) === Ae)
          return gm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = DR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = oS(b, p, y);
          return gm(e, t, f, w);
        }
        var z = ta(f, e.childLanes);
        if (ul || z) {
          var U = Dm();
          if (U !== null) {
            var F = Yv(U, f);
            if (F !== Dn && F !== s.retryLane) {
              s.retryLane = F;
              var pe = Jt;
              Ia(e, F), hr(U, e, F, pe);
            }
          }
          $S();
          var je = oS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return gm(e, t, f, je);
        } else if ($0(u)) {
          t.flags |= Ze, t.child = e.child;
          var Le = q_.bind(null, e);
          return OR(u, Le), null;
        } else {
          hx(t, u, s.treeContext);
          var Tt = i.children, yt = CS(t, Tt);
          return yt.flags |= yi, yt;
        }
      }
    }
    function TC(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), ug(e.return, t, a);
    }
    function ww(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && TC(i, a, e);
        } else if (i.tag === St)
          TC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _w(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Kh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !hS[e])
        if (hS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function kw(e, t) {
      e !== void 0 && !ym[e] && (e !== "collapsed" && e !== "hidden" ? (ym[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ym[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RC(e, t) {
      {
        var a = bt(e), i = !a && typeof fi(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (bt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!RC(e[a], a))
              return;
        } else {
          var i = fi(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!RC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      bw(u), kw(s, u), Dw(f, u), Ta(e, t, f, a);
      var p = il.current, v = Mg(p, mp);
      if (v)
        p = zg(p, mp), t.flags |= Ze;
      else {
        var y = e !== null && (e.flags & Ze) !== Ue;
        y && ww(t, t.child, a), p = Nf(p);
      }
      if (jo(t, p), (t.mode & Oe) === Ae)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = _w(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var U = z.alternate;
              if (U !== null && Kh(U) === null) {
                t.child = z;
                break;
              }
              var F = z.sibling;
              z.sibling = w, w = z, z = F;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ow(e, t, a) {
      Og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var wC = !1;
    function Lw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || wC || (wC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (dE(t, u, p), f !== null) {
        var y = f.value;
        if (Ce(y, p)) {
          if (f.children === s.children && !bh())
            return zu(e, t, a);
        } else
          wx(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var _C = !1;
    function Nw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_C || (_C = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = Jn(i);
      ro(t);
      var p;
      return xp.current = t, ar(!0), p = s(f), ar(!1), du(), t.flags |= ii, Ta(e, t, p, a), t.child;
    }
    function _p() {
      ul = !0;
    }
    function Sm(e, t) {
      (t.mode & Oe) === Ae && e !== null && (e.alternate = null, t.alternate = null, t.flags |= It);
    }
    function zu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), uC(), Fp(t.lanes), ta(a, t.childLanes) ? (jx(e, t), t.child) : null;
    }
    function Mw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ot) : s.push(e), a.flags |= It, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function zw(e, t, a) {
      switch (t.tag) {
        case X:
          gC(t), t.stateNode, bf();
          break;
        case ue:
          LE(t);
          break;
        case ee: {
          var i = t.type;
          Pl(i) && Dh(t);
          break;
        }
        case be:
          Og(t, t.stateNode.containerInfo);
          break;
        case tt: {
          var u = t.memoizedProps.value, s = t.type._context;
          dE(t, s, u);
          break;
        }
        case xt:
          {
            var f = ta(a, t.childLanes);
            f && (t.flags |= ke);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, Nf(il.current)), t.flags |= Ze, null;
            var y = t.child, g = y.childLanes;
            if (ta(a, g))
              return EC(e, t, a);
            jo(t, Nf(il.current));
            var b = zu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            jo(t, Nf(il.current));
          break;
        }
        case St: {
          var w = (e.flags & Ze) !== Ue, z = ta(a, t.childLanes);
          if (w) {
            if (z)
              return xC(e, t, a);
            t.flags |= Ze;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), jo(t, il.current), z)
            break;
          return null;
        }
        case We:
        case rt:
          return t.lanes = V, hC(e, t, a);
      }
      return zu(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mw(e, t, e0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ze) === Ue)
            return ul = !1, zw(e, t, a);
          (e.flags & Rc) !== Ue ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Lr() && lx(t)) {
        var f = t.index, p = ux();
        eE(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case he:
          return hw(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return pw(e, t, v, a);
        }
        case ie: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : al(y, g);
          return mS(e, t, y, b, a);
        }
        case ee: {
          var w = t.type, z = t.pendingProps, U = t.elementType === w ? z : al(w, z);
          return yC(e, t, w, U, a);
        }
        case X:
          return cw(e, t, a);
        case ue:
          return fw(e, t, a);
        case we:
          return dw(e, t);
        case Re:
          return EC(e, t, a);
        case be:
          return Ow(e, t, a);
        case Fe: {
          var F = t.type, pe = t.pendingProps, je = t.elementType === F ? pe : al(F, pe);
          return dC(e, t, F, je, a);
        }
        case dt:
          return uw(e, t, a);
        case xn:
          return ow(e, t, a);
        case xt:
          return sw(e, t, a);
        case tt:
          return Lw(e, t, a);
        case Qt:
          return Nw(e, t, a);
        case Me: {
          var Le = t.type, Tt = t.pendingProps, yt = al(Le, Tt);
          if (t.type !== t.elementType) {
            var D = Le.propTypes;
            D && tl(
              D,
              yt,
              // Resolved for outer only
              "prop",
              _t(Le)
            );
          }
          return yt = al(Le.type, yt), pC(e, t, Le, yt, a);
        }
        case Ie:
          return vC(e, t, t.type, t.pendingProps, a);
        case mn: {
          var H = t.type, O = t.pendingProps, q = t.elementType === H ? O : al(H, O);
          return vw(e, t, H, q, a);
        }
        case St:
          return xC(e, t, a);
        case en:
          break;
        case We:
          return hC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= ke;
    }
    function kC(e) {
      e.flags |= ya, e.flags |= gi;
    }
    var DC, wS, OC, LC;
    DC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === we)
          rR(e, u.stateNode);
        else if (u.tag !== be) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, OC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = iR(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, LC = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function bp(e, t) {
      if (!Lr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Mr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = Ue;
      if (t) {
        if ((e.mode & kt) !== Ae) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), i |= y.subtreeFlags & lr, i |= y.flags & lr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & lr, i |= g.flags & lr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & kt) !== Ae) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = nt(a, nt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = nt(a, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Uw(e, t, a) {
      if (Ex() && (t.mode & Oe) !== Ae && (t.flags & Ze) === Ue)
        return uE(t), bf(), t.flags |= kr | wl | ir, !1;
      var i = zh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (gx(t), Mr(t), (t.mode & kt) !== Ae) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & Ze) === Ue && (t.memoizedState = null), t.flags |= ke, Mr(t), (t.mode & kt) !== Ae) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oE(), !0;
    }
    function NC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case he:
        case wn:
        case Ie:
        case ie:
        case Fe:
        case dt:
        case xn:
        case xt:
        case Qt:
        case Me:
          return Mr(t), null;
        case ee: {
          var u = t.type;
          return Pl(u) && kh(t), Mr(t), null;
        }
        case X: {
          var s = t.stateNode;
          if (Lf(t), Wy(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = zh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== Ue) && (t.flags |= jn, oE());
            }
          }
          return wS(e, t), Mr(t), null;
        }
        case ue: {
          Ng(t);
          var v = OE(), y = t.type;
          if (e !== null && t.stateNode != null)
            OC(e, t, y, i, v), e.ref !== t.ref && kC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Mr(t), null;
            }
            var g = Lg(), b = zh(t);
            if (b)
              mx(t, v, g) && Ff(t);
            else {
              var w = nR(y, i, v, g, t);
              DC(w, t, !1, !1), t.stateNode = w, aR(w, y, i, v) && Ff(t);
            }
            t.ref !== null && kC(t);
          }
          return Mr(t), null;
        }
        case we: {
          var z = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            LC(e, t, U, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = OE(), pe = Lg(), je = zh(t);
            je ? yx(t) && Ff(t) : t.stateNode = lR(z, F, pe, t);
          }
          return Mr(t), null;
        }
        case Re: {
          Mf(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Uw(e, t, Le);
            if (!Tt)
              return t.flags & ir ? t : null;
          }
          if ((t.flags & Ze) !== Ue)
            return t.lanes = a, (t.mode & kt) !== Ae && uS(t), t;
          var yt = Le !== null, D = e !== null && e.memoizedState !== null;
          if (yt !== D && yt) {
            var H = t.child;
            if (H.flags |= xl, (t.mode & Oe) !== Ae) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Se);
              O || Mg(il.current, ME) ? A_() : $S();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= ke), Mr(t), (t.mode & kt) !== Ae && yt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case be:
          return Lf(t), wS(e, t), e === null && JR(t.stateNode.containerInfo), Mr(t), null;
        case tt:
          var se = t.type._context;
          return lg(se, t), Mr(t), null;
        case mn: {
          var Ge = t.type;
          return Pl(Ge) && kh(t), Mr(t), null;
        }
        case St: {
          Mf(t);
          var et = t.memoizedState;
          if (et === null)
            return Mr(t), null;
          var $t = (t.flags & Ze) !== Ue, Nt = et.rendering;
          if (Nt === null)
            if ($t)
              bp(et, !1);
            else {
              var Qn = F_() && (e === null || (e.flags & Ze) === Ue);
              if (!Qn)
                for (var Mt = t.child; Mt !== null; ) {
                  var Hn = Kh(Mt);
                  if (Hn !== null) {
                    $t = !0, t.flags |= Ze, bp(et, !1);
                    var la = Hn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= ke), t.subtreeFlags = Ue, Fx(t, a), jo(t, zg(il.current, mp)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              et.tail !== null && Fn() > JC() && (t.flags |= Ze, $t = !0, bp(et, !1), t.lanes = wd);
            }
          else {
            if (!$t) {
              var Fr = Kh(Nt);
              if (Fr !== null) {
                t.flags |= Ze, $t = !0;
                var si = Fr.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= ke), bp(et, !0), et.tail === null && et.tailMode === "hidden" && !Nt.alternate && !Lr())
                  return Mr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Fn() * 2 - et.renderingStartTime > JC() && a !== Ca && (t.flags |= Ze, $t = !0, bp(et, !1), t.lanes = wd);
            }
            if (et.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var wa = et.last;
              wa !== null ? wa.sibling = Nt : t.child = Nt, et.last = Nt;
            }
          }
          if (et.tail !== null) {
            var _a = et.tail;
            et.rendering = _a, et.tail = _a.sibling, et.renderingStartTime = Fn(), _a.sibling = null;
            var ua = il.current;
            return $t ? ua = zg(ua, mp) : ua = Nf(ua), jo(t, ua), _a;
          }
          return Mr(t), null;
        }
        case en:
          break;
        case We:
        case rt: {
          BS(t);
          var Hu = t.memoizedState, Qf = Hu !== null;
          if (e !== null) {
            var $p = e.memoizedState, ql = $p !== null;
            ql !== Qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !$ && (t.flags |= xl);
          }
          return !Qf || (t.mode & Oe) === Ae ? Mr(t) : ta(Gl, Ca) && (Mr(t), t.subtreeFlags & (It | ke) && (t.flags |= xl)), null;
        }
        case wt:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Aw(e, t, a) {
      switch (Ky(t), t.tag) {
        case ee: {
          var i = t.type;
          Pl(i) && kh(t);
          var u = t.flags;
          return u & ir ? (t.flags = u & ~ir | Ze, (t.mode & kt) !== Ae && uS(t), t) : null;
        }
        case X: {
          t.stateNode, Lf(t), Wy(t), Ag();
          var s = t.flags;
          return (s & ir) !== Ue && (s & Ze) === Ue ? (t.flags = s & ~ir | Ze, t) : null;
        }
        case ue:
          return Ng(t), null;
        case Re: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & ir ? (t.flags = p & ~ir | Ze, (t.mode & kt) !== Ae && uS(t), t) : null;
        }
        case St:
          return Mf(t), null;
        case be:
          return Lf(t), null;
        case tt:
          var v = t.type._context;
          return lg(v, t), null;
        case We:
        case rt:
          return BS(t), null;
        case wt:
          return null;
        default:
          return null;
      }
    }
    function MC(e, t, a) {
      switch (Ky(t), t.tag) {
        case ee: {
          var i = t.type.childContextTypes;
          i != null && kh(t);
          break;
        }
        case X: {
          t.stateNode, Lf(t), Wy(t), Ag();
          break;
        }
        case ue: {
          Ng(t);
          break;
        }
        case be:
          Lf(t);
          break;
        case Re:
          Mf(t);
          break;
        case St:
          Mf(t);
          break;
        case tt:
          var u = t.type._context;
          lg(u, t);
          break;
        case We:
        case rt:
          BS(t);
          break;
      }
    }
    var zC = null;
    zC = /* @__PURE__ */ new Set();
    var Em = !1, zr = !1, jw = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Hf = null, Vf = null;
    function Fw(e) {
      ai(null, function() {
        throw e;
      }), Wi();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & kt)
        try {
          Ql(), t.componentWillUnmount();
        } finally {
          Il(e);
        }
      else
        t.componentWillUnmount();
    };
    function UC(e, t) {
      try {
        Vo(sr, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function Vw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function AC(e, t) {
      try {
        FC(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && ft && e.mode & kt)
              try {
                Ql(), i = a(null);
              } finally {
                Il(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function Cm(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var jC = !1;
    function Pw(e, t) {
      eR(e.containerInfo), Te = t, Bw();
      var a = jC;
      return jC = !1, a;
    }
    function Bw() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & Gr) !== Ue && t !== null ? (t.return = e, Te = t) : $w();
      }
    }
    function $w() {
      for (; Te !== null; ) {
        var e = Te;
        dn(e);
        try {
          Yw(e);
        } catch (a) {
          un(e, e.return, a);
        }
        nn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function Yw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & jn) !== Ue) {
        switch (dn(e), e.tag) {
          case ie:
          case Fe:
          case Ie:
            break;
          case ee: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !lc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : al(e.type, i), u);
              {
                var p = zC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case X: {
            {
              var v = e.stateNode;
              wR(v.containerInfo);
            }
            break;
          }
          case ue:
          case we:
          case be:
          case mn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        nn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Qa ? Ov(t) : (e & sr) !== Qa && ao(t), (e & Bl) !== Qa && Vp(!0), Cm(t, a, p), (e & Bl) !== Qa && Vp(!1), (e & Nr) !== Qa ? Lv() : (e & sr) !== Qa && xs());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Qa ? Cd(t) : (e & sr) !== Qa && Nv(t);
            var f = s.create;
            (e & Bl) !== Qa && Vp(!0), s.destroy = f(), (e & Bl) !== Qa && Vp(!1), (e & Nr) !== Qa ? Dc() : (e & sr) !== Qa && Td();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & sr) !== Ue ? v = "useLayoutEffect" : (s.tag & Bl) !== Ue ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Iw(e, t) {
      if ((t.flags & ke) !== Ue)
        switch (t.tag) {
          case xt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = iC(), p = t.alternate === null ? "mount" : "update";
            aC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case X:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case xt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Qw(e, t, a, i) {
      if ((a.flags & li) !== Ue)
        switch (a.tag) {
          case ie:
          case Fe:
          case Ie: {
            if (!zr)
              if (a.mode & kt)
                try {
                  Ql(), Vo(sr | or, a);
                } finally {
                  Il(a);
                }
              else
                Vo(sr | or, a);
            break;
          }
          case ee: {
            var u = a.stateNode;
            if (a.flags & ke && !zr)
              if (t === null)
                if (a.type === a.elementType && !lc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & kt)
                  try {
                    Ql(), u.componentDidMount();
                  } finally {
                    Il(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : al(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !lc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & kt)
                  try {
                    Ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Il(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !lc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), gE(a, p, u));
            break;
          }
          case X: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case ee:
                    y = a.child.stateNode;
                    break;
                }
              gE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & ke) {
              var b = a.type, w = a.memoizedProps;
              fR(g, b, w);
            }
            break;
          }
          case we:
            break;
          case be:
            break;
          case xt: {
            {
              var z = a.memoizedProps, U = z.onCommit, F = z.onRender, pe = a.stateNode.effectDuration, je = iC(), Le = t === null ? "mount" : "update";
              aC() && (Le = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, je);
              {
                typeof U == "function" && U(a.memoizedProps.id, Le, pe, je), $_(a);
                var Tt = a.return;
                e:
                  for (; Tt !== null; ) {
                    switch (Tt.tag) {
                      case X:
                        var yt = Tt.stateNode;
                        yt.effectDuration += pe;
                        break e;
                      case xt:
                        var D = Tt.stateNode;
                        D.effectDuration += pe;
                        break e;
                    }
                    Tt = Tt.return;
                  }
              }
            }
            break;
          }
          case Re: {
            e_(e, a);
            break;
          }
          case St:
          case mn:
          case en:
          case We:
          case rt:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || a.flags & ya && FC(a);
    }
    function Ww(e) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie: {
          if (e.mode & kt)
            try {
              Ql(), UC(e, e.return);
            } finally {
              Il(e);
            }
          else
            UC(e, e.return);
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vw(e, e.return, t), AC(e, e.return);
          break;
        }
        case ue: {
          AC(e, e.return);
          break;
        }
      }
    }
    function Gw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? CR(u) : RR(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === we) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? TR(s) : xR(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === We || i.tag === rt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function FC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & kt)
            try {
              Ql(), u = t(i);
            } finally {
              Il(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function HC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, HC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && nx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xw(e) {
      for (var t = e.return; t !== null; ) {
        if (VC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VC(e) {
      return e.tag === ue || e.tag === X || e.tag === be;
    }
    function PC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || VC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== we && t.tag !== Wt; ) {
            if (t.flags & It || t.child === null || t.tag === be)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & It))
            return t.stateNode;
        }
    }
    function Kw(e) {
      var t = Xw(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Ma && (B0(a), t.flags &= ~Ma);
          var i = PC(e);
          kS(e, i, a);
          break;
        }
        case X:
        case be: {
          var u = t.stateNode.containerInfo, s = PC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ue || i === we;
      if (u) {
        var s = e.stateNode;
        t ? yR(a, s, t) : hR(a, s);
      } else if (i !== be) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === ue || i === we;
      if (u) {
        var s = e.stateNode;
        t ? mR(a, s, t) : vR(a, s);
      } else if (i !== be) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    var Ur = null, sl = !1;
    function Zw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                Ur = i.stateNode, sl = !1;
                break e;
              }
              case X: {
                Ur = i.stateNode.containerInfo, sl = !0;
                break e;
              }
              case be: {
                Ur = i.stateNode.containerInfo, sl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BC(e, t, a), Ur = null, sl = !1;
      }
      qw(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        BC(e, t, i), i = i.sibling;
    }
    function BC(e, t, a) {
      switch (kv(a), a.tag) {
        case ue:
          zr || Pf(a, t);
        case we: {
          {
            var i = Ur, u = sl;
            Ur = null, Po(e, t, a), Ur = i, sl = u, Ur !== null && (sl ? SR(Ur, a.stateNode) : gR(Ur, a.stateNode));
          }
          return;
        }
        case Wt: {
          Ur !== null && (sl ? ER(Ur, a.stateNode) : Hy(Ur, a.stateNode));
          return;
        }
        case be: {
          {
            var s = Ur, f = sl;
            Ur = a.stateNode.containerInfo, sl = !0, Po(e, t, a), Ur = s, sl = f;
          }
          return;
        }
        case ie:
        case Fe:
        case Me:
        case Ie: {
          if (!zr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, z = b.tag;
                  w !== void 0 && ((z & Bl) !== Qa ? Cm(a, t, w) : (z & sr) !== Qa && (ao(a), a.mode & kt ? (Ql(), Cm(a, t, w), Il(a)) : Cm(a, t, w), xs())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case ee: {
          if (!zr) {
            Pf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && _S(a, t, U);
          }
          Po(e, t, a);
          return;
        }
        case en: {
          Po(e, t, a);
          return;
        }
        case We: {
          if (
            // TODO: Remove this dead flag
            a.mode & Oe
          ) {
            var F = zr;
            zr = F || a.memoizedState !== null, Po(e, t, a), zr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Jw(e) {
      e.memoizedState;
    }
    function e_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && HR(s);
          }
        }
      }
    }
    function $C(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new jw()), t.forEach(function(i) {
          var u = X_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ea)
              if (Hf !== null && Vf !== null)
                Hp(Vf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function t_(e, t, a) {
      Hf = a, Vf = e, dn(t), YC(t, e), dn(t), Hf = null, Vf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zw(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = ns();
      if (t.subtreeFlags & qr)
        for (var p = t.child; p !== null; )
          dn(p), YC(p, e), p = p.sibling;
      dn(f);
    }
    function YC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ie:
        case Fe:
        case Me:
        case Ie: {
          if (cl(t, e), Wl(e), u & ke) {
            try {
              ol(Bl | or, e, e.return), Vo(Bl | or, e);
            } catch (Ge) {
              un(e, e.return, Ge);
            }
            if (e.mode & kt) {
              try {
                Ql(), ol(sr | or, e, e.return);
              } catch (Ge) {
                un(e, e.return, Ge);
              }
              Il(e);
            } else
              try {
                ol(sr | or, e, e.return);
              } catch (Ge) {
                un(e, e.return, Ge);
              }
          }
          return;
        }
        case ee: {
          cl(t, e), Wl(e), u & ya && i !== null && Pf(i, i.return);
          return;
        }
        case ue: {
          cl(t, e), Wl(e), u & ya && i !== null && Pf(i, i.return);
          {
            if (e.flags & Ma) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (Ge) {
                un(e, e.return, Ge);
              }
            }
            if (u & ke) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    dR(f, g, y, v, p, e);
                  } catch (Ge) {
                    un(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case we: {
          if (cl(t, e), Wl(e), u & ke) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, z = i !== null ? i.memoizedProps : w;
            try {
              pR(b, z, w);
            } catch (Ge) {
              un(e, e.return, Ge);
            }
          }
          return;
        }
        case X: {
          if (cl(t, e), Wl(e), u & ke && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                FR(t.containerInfo);
              } catch (Ge) {
                un(e, e.return, Ge);
              }
          }
          return;
        }
        case be: {
          cl(t, e), Wl(e);
          return;
        }
        case Re: {
          cl(t, e), Wl(e);
          var F = e.child;
          if (F.flags & xl) {
            var pe = F.stateNode, je = F.memoizedState, Le = je !== null;
            if (pe.isHidden = Le, Le) {
              var Tt = F.alternate !== null && F.alternate.memoizedState !== null;
              Tt || U_();
            }
          }
          if (u & ke) {
            try {
              Jw(e);
            } catch (Ge) {
              un(e, e.return, Ge);
            }
            $C(e);
          }
          return;
        }
        case We: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Oe
          ) {
            var D = zr;
            zr = D || yt, cl(t, e), zr = D;
          } else
            cl(t, e);
          if (Wl(e), u & xl) {
            var H = e.stateNode, O = e.memoizedState, q = O !== null, ve = e;
            if (H.isHidden = q, q && !yt && (ve.mode & Oe) !== Ae) {
              Te = ve;
              for (var se = ve.child; se !== null; )
                Te = se, r_(se), se = se.sibling;
            }
            Gw(ve, q);
          }
          return;
        }
        case St: {
          cl(t, e), Wl(e), u & ke && $C(e);
          return;
        }
        case en:
          return;
        default: {
          cl(t, e), Wl(e);
          return;
        }
      }
    }
    function Wl(e) {
      var t = e.flags;
      if (t & It) {
        try {
          Kw(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~It;
      }
      t & yi && (e.flags &= ~yi);
    }
    function n_(e, t, a) {
      Hf = a, Vf = t, Te = e, IC(e, t, a), Hf = null, Vf = null;
    }
    function IC(e, t, a) {
      for (var i = (e.mode & Oe) !== Ae; Te !== null; ) {
        var u = Te, s = u.child;
        if (u.tag === We && i) {
          var f = u.memoizedState !== null, p = f || Em;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || zr, b = Em, w = zr;
            Em = p, zr = g, zr && !w && (Te = u, a_(u));
            for (var z = s; z !== null; )
              Te = z, IC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Te = u, Em = b, zr = w, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & li) !== Ue && s !== null ? (s.return = u, Te = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Te !== null; ) {
        var i = Te;
        if ((i.flags & li) !== Ue) {
          var u = i.alternate;
          dn(i);
          try {
            Qw(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          nn();
        }
        if (i === e) {
          Te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Te = s;
          return;
        }
        Te = i.return;
      }
    }
    function r_(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case ie:
          case Fe:
          case Me:
          case Ie: {
            if (t.mode & kt)
              try {
                Ql(), ol(sr, t, t.return);
              } finally {
                Il(t);
              }
            else
              ol(sr, t, t.return);
            break;
          }
          case ee: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case ue: {
            Pf(t, t.return);
            break;
          }
          case We: {
            var u = t.memoizedState !== null;
            if (u) {
              QC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : QC(e);
      }
    }
    function QC(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function a_(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === We) {
          var i = t.memoizedState !== null;
          if (i) {
            WC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : WC(e);
      }
    }
    function WC(e) {
      for (; Te !== null; ) {
        var t = Te;
        dn(t);
        try {
          Ww(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (nn(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function i_(e, t, a, i) {
      Te = t, l_(t, e, a, i);
    }
    function l_(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te, s = u.child;
        (u.subtreeFlags & Xr) !== Ue && s !== null ? (s.return = u, Te = s) : u_(e, t, a, i);
      }
    }
    function u_(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te;
        if ((u.flags & Wr) !== Ue) {
          dn(u);
          try {
            o_(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          nn();
        }
        if (u === e) {
          Te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Te = s;
          return;
        }
        Te = u.return;
      }
    }
    function o_(e, t, a, i) {
      switch (t.tag) {
        case ie:
        case Fe:
        case Ie: {
          if (t.mode & kt) {
            lS();
            try {
              Vo(Nr | or, t);
            } finally {
              iS(t);
            }
          } else
            Vo(Nr | or, t);
          break;
        }
      }
    }
    function s_(e) {
      Te = e, c_();
    }
    function c_() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & Ot) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Te = u, p_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Te = e;
          }
        }
        (e.subtreeFlags & Xr) !== Ue && t !== null ? (t.return = e, Te = t) : f_();
      }
    }
    function f_() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & Wr) !== Ue && (dn(e), d_(e), nn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function d_(e) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie: {
          e.mode & kt ? (lS(), ol(Nr | or, e, e.return), iS(e)) : ol(Nr | or, e, e.return);
          break;
        }
      }
    }
    function p_(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        dn(a), h_(a, t), nn();
        var i = a.child;
        i !== null ? (i.return = a, Te = i) : v_(e);
      }
    }
    function v_(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, i = t.return;
        if (HC(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = i, Te = a;
          return;
        }
        Te = i;
      }
    }
    function h_(e, t) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie: {
          e.mode & kt ? (lS(), ol(Nr, e, t), iS(e)) : ol(Nr, e, t);
          break;
        }
      }
    }
    function m_(e) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie: {
          try {
            Vo(sr | or, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie: {
          try {
            Vo(Nr | or, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie: {
          try {
            ol(sr | or, e, e.return);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function S_(e) {
      switch (e.tag) {
        case ie:
        case Fe:
        case Ie:
          try {
            ol(Nr | or, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var kp = Symbol.for;
      kp("selector.component"), kp("selector.has_pseudo_class"), kp("selector.role"), kp("selector.test_id"), kp("selector.text");
    }
    var E_ = [];
    function C_() {
      E_.forEach(function(e) {
        return e();
      });
    }
    var T_ = Pe.ReactCurrentActQueue;
    function R_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function GC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && T_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x_ = Math.ceil, OS = Pe.ReactCurrentDispatcher, LS = Pe.ReactCurrentOwner, Ar = Pe.ReactCurrentBatchConfig, fl = Pe.ReactCurrentActQueue, dr = (
      /*             */
      0
    ), qC = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Uu = 0, Dp = 1, uc = 2, Tm = 3, Op = 4, XC = 5, NS = 6, Ct = dr, Ra = null, Mn = null, pr = V, Gl = V, MS = Lo(V), vr = Uu, Lp = null, Rm = V, Np = V, xm = V, Mp = null, Wa = null, zS = 0, KC = 500, ZC = 1 / 0, w_ = 500, Au = null;
    function zp() {
      ZC = Fn() + w_;
    }
    function JC() {
      return ZC;
    }
    var wm = !1, US = null, Bf = null, oc = !1, Bo = null, Up = V, AS = [], jS = null, __ = 50, Ap = 0, FS = null, HS = !1, _m = !1, b_ = 50, $f = 0, bm = null, jp = Jt, km = V, e1 = !1;
    function Dm() {
      return Ra;
    }
    function xa() {
      return (Ct & (jr | Li)) !== dr ? Fn() : (jp !== Jt || (jp = Fn()), jp);
    }
    function $o(e) {
      var t = e.mode;
      if ((t & Oe) === Ae)
        return He;
      if ((Ct & jr) !== dr && pr !== V)
        return fo(pr);
      var a = Rx() !== Tx;
      if (a) {
        if (Ar.transition !== null) {
          var i = Ar.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return km === Dn && (km = Pv()), km;
      }
      var u = Ha();
      if (u !== Dn)
        return u;
      var s = uR();
      return s;
    }
    function k_(e) {
      var t = e.mode;
      return (t & Oe) === Ae ? He : ea();
    }
    function hr(e, t, a, i) {
      Z_(), e1 && S("useInsertionEffect must not schedule updates."), HS && (_m = !0), Cu(e, a, i), (Ct & jr) !== V && e === Ra ? tb(t) : (Ea && qc(e, t, a), nb(t), e === Ra && ((Ct & jr) === dr && (Np = nt(Np, a)), vr === Op && Yo(e, pr)), Ga(e, i), a === He && Ct === dr && (t.mode & Oe) === Ae && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (zp(), J0()));
    }
    function D_(e, t, a) {
      var i = e.current;
      i.lanes = t, Cu(e, t, a), Ga(e, a);
    }
    function O_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & jr) !== dr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      ay(e, t);
      var i = Ns(e, e === Ra ? pr : V);
      if (i === V) {
        a !== null && m1(a), e.callbackNode = null, e.callbackPriority = Dn;
        return;
      }
      var u = On(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== QS)) {
        a == null && s !== He && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && m1(a);
      var f;
      if (u === He)
        e.tag === No ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), ix(r1.bind(null, e))) : Z0(r1.bind(null, e)), fl.current !== null ? fl.current.push(Mo) : sR(function() {
          (Ct & (jr | Li)) === dr && Mo();
        }), f = null;
      else {
        var p;
        switch (ur(i)) {
          case Ln:
            p = Kr;
            break;
          case Ki:
            p = to;
            break;
          case Ti:
            p = Si;
            break;
          case po:
            p = Ts;
            break;
          default:
            p = Si;
            break;
        }
        f = WS(p, t1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function t1(e, t) {
      if (Zx(), jp = Jt, km = V, (Ct & (jr | Li)) !== dr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ns(e, e === Ra ? pr : V);
      if (u === V)
        return null;
      var s = !zs(e, u) && !Vv(e, u) && !t, f = s ? V_(e, u) : Lm(e, u);
      if (f !== Uu) {
        if (f === uc) {
          var p = zl(e);
          p !== V && (u = p, f = VS(e, p));
        }
        if (f === Dp) {
          var v = Lp;
          throw sc(e, V), Yo(e, u), Ga(e, Fn()), v;
        }
        if (f === NS)
          Yo(e, u);
        else {
          var y = !zs(e, u), g = e.current.alternate;
          if (y && !N_(g)) {
            if (f = Lm(e, u), f === uc) {
              var b = zl(e);
              b !== V && (u = b, f = VS(e, b));
            }
            if (f === Dp) {
              var w = Lp;
              throw sc(e, V), Yo(e, u), Ga(e, Fn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, L_(e, f, u);
        }
      }
      return Ga(e, Fn()), e.callbackNode === a ? t1.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Mp;
      if (Xc(e)) {
        var i = sc(e, t);
        i.flags |= kr, ZR(e.containerInfo);
      }
      var u = Lm(e, t);
      if (u !== uc) {
        var s = Wa;
        Wa = a, s !== null && n1(s);
      }
      return u;
    }
    function n1(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function L_(e, t, a) {
      switch (t) {
        case Uu:
        case Dp:
          throw new Error("Root did not complete. This is a bug in React.");
        case uc: {
          cc(e, Wa, Au);
          break;
        }
        case Tm: {
          if (Yo(e, a), jv(a) && // do not delay if we're inside an act() scope
          !y1()) {
            var i = zS + KC - Fn();
            if (i > 10) {
              var u = Ns(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!Eu(s, a)) {
                xa(), Wc(e, s);
                break;
              }
              e.timeoutHandle = jy(cc.bind(null, e, Wa, Au), i);
              break;
            }
          }
          cc(e, Wa, Au);
          break;
        }
        case Op: {
          if (Yo(e, a), Hv(a))
            break;
          if (!y1()) {
            var f = Yc(e, a), p = f, v = Fn() - p, y = K_(v) - v;
            if (y > 10) {
              e.timeoutHandle = jy(cc.bind(null, e, Wa, Au), y);
              break;
            }
          }
          cc(e, Wa, Au);
          break;
        }
        case XC: {
          cc(e, Wa, Au);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function N_(e) {
      for (var t = e; ; ) {
        if (t.flags & su) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & su && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = Us(t, xm), t = Us(t, Np), $v(e, t);
    }
    function r1(e) {
      if (Jx(), (Ct & (jr | Li)) !== dr)
        throw new Error("Should not already be working.");
      Fu();
      var t = Ns(e, V);
      if (!ta(t, He))
        return Ga(e, Fn()), null;
      var a = Lm(e, t);
      if (e.tag !== No && a === uc) {
        var i = zl(e);
        i !== V && (t = i, a = VS(e, i));
      }
      if (a === Dp) {
        var u = Lp;
        throw sc(e, V), Yo(e, t), Ga(e, Fn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, cc(e, Wa, Au), Ga(e, Fn()), null;
    }
    function M_(e, t) {
      t !== V && (Dd(e, nt(t, He)), Ga(e, Fn()), (Ct & (jr | Li)) === dr && (zp(), Mo()));
    }
    function PS(e, t) {
      var a = Ct;
      Ct |= qC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (zp(), J0());
      }
    }
    function z_(e, t, a, i, u) {
      var s = Ha(), f = Ar.transition;
      try {
        return Ar.transition = null, Cn(Ln), e(t, a, i, u);
      } finally {
        Cn(s), Ar.transition = f, Ct === dr && zp();
      }
    }
    function ju(e) {
      Bo !== null && Bo.tag === No && (Ct & (jr | Li)) === dr && Fu();
      var t = Ct;
      Ct |= qC;
      var a = Ar.transition, i = Ha();
      try {
        return Ar.transition = null, Cn(Ln), e ? e() : void 0;
      } finally {
        Cn(i), Ar.transition = a, Ct = t, (Ct & (jr | Li)) === dr && Mo();
      }
    }
    function a1() {
      return (Ct & (jr | Li)) !== dr;
    }
    function Om(e, t) {
      aa(MS, Gl, e), Gl = nt(Gl, t);
    }
    function BS(e) {
      Gl = MS.current, ra(MS, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, oR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          MC(u, i), i = i.return;
        }
      Ra = e;
      var s = fc(e.current, null);
      return Mn = s, pr = Gl = t, vr = Uu, Lp = null, Rm = V, Np = V, xm = V, Mp = null, Wa = null, bx(), rl.discardPendingWarnings(), s;
    }
    function i1(e, t) {
      do {
        var a = Mn;
        try {
          if (Fh(), UE(), nn(), LS.current = null, a === null || a.return === null) {
            vr = Dp, Lp = t, Mn = null;
            return;
          }
          if (ht && a.mode & kt && mm(a, !0), ct)
            if (du(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zv(a, i, pr);
            } else
              Mv(a, t, pr);
          aw(e, a.return, a, t, pr), s1(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function l1() {
      var e = OS.current;
      return OS.current = fm, e === null ? fm : e;
    }
    function u1(e) {
      OS.current = e;
    }
    function U_() {
      zS = Fn();
    }
    function Fp(e) {
      Rm = nt(e, Rm);
    }
    function A_() {
      vr === Uu && (vr = Tm);
    }
    function $S() {
      (vr === Uu || vr === Tm || vr === uc) && (vr = Op), Ra !== null && (Ms(Rm) || Ms(Np)) && Yo(Ra, pr);
    }
    function j_(e) {
      vr !== Op && (vr = uc), Mp === null ? Mp = [e] : Mp.push(e);
    }
    function F_() {
      return vr === Uu;
    }
    function Lm(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = l1();
      if (Ra !== e || pr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, pr), u.clear()), Od(e, t);
        }
        Au = js(), sc(e, t);
      }
      lo(t);
      do
        try {
          H_();
          break;
        } catch (s) {
          i1(e, s);
        }
      while (!0);
      if (Fh(), Ct = a, u1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ll(), Ra = null, pr = V, vr;
    }
    function H_() {
      for (; Mn !== null; )
        o1(Mn);
    }
    function V_(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = l1();
      if (Ra !== e || pr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, pr), u.clear()), Od(e, t);
        }
        Au = js(), zp(), sc(e, t);
      }
      lo(t);
      do
        try {
          P_();
          break;
        } catch (s) {
          i1(e, s);
        }
      while (!0);
      return Fh(), u1(i), Ct = a, Mn !== null ? (_s(), Uu) : (Ll(), Ra = null, pr = V, vr);
    }
    function P_() {
      for (; Mn !== null && !_v(); )
        o1(Mn);
    }
    function o1(e) {
      var t = e.alternate;
      dn(e);
      var a;
      (e.mode & kt) !== Ae ? (aS(e), a = YS(t, e, Gl), mm(e, !0)) : a = YS(t, e, Gl), nn(), e.memoizedProps = e.pendingProps, a === null ? s1(e) : Mn = a, LS.current = null;
    }
    function s1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & wl) === Ue) {
          dn(t);
          var u = void 0;
          if ((t.mode & kt) === Ae ? u = NC(a, t, Gl) : (aS(t), u = NC(a, t, Gl), mm(t, !1)), nn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Aw(a, t);
          if (s !== null) {
            s.flags &= Gi, Mn = s;
            return;
          }
          if ((t.mode & kt) !== Ae) {
            mm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= wl, i.subtreeFlags = Ue, i.deletions = null;
          else {
            vr = NS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      vr === Uu && (vr = XC);
    }
    function cc(e, t, a) {
      var i = Ha(), u = Ar.transition;
      try {
        Ar.transition = null, Cn(Ln), B_(e, t, a, i);
      } finally {
        Ar.transition = u, Cn(i);
      }
      return null;
    }
    function B_(e, t, a, i) {
      do
        Fu();
      while (Bo !== null);
      if (J_(), (Ct & (jr | Li)) !== dr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Dv(s), u === null)
        return Rs(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dn;
      var f = nt(u.lanes, u.childLanes);
      Gc(e, f), e === Ra && (Ra = null, Mn = null, pr = V), ((u.subtreeFlags & Xr) !== Ue || (u.flags & Xr) !== Ue) && (oc || (oc = !0, jS = a, WS(Si, function() {
        return Fu(), null;
      })));
      var p = (u.subtreeFlags & (Gr | qr | li | Xr)) !== Ue, v = (u.flags & (Gr | qr | li | Xr)) !== Ue;
      if (p || v) {
        var y = Ar.transition;
        Ar.transition = null;
        var g = Ha();
        Cn(Ln);
        var b = Ct;
        Ct |= Li, LS.current = null, Pw(e, u), lC(), t_(e, u, s), tR(e.containerInfo), e.current = u, io(s), n_(u, e, s), Uv(), eo(), Ct = b, Cn(g), Ar.transition = y;
      } else
        e.current = u, lC();
      var w = oc;
      if (oc ? (oc = !1, Bo = e, Up = s) : ($f = 0, bm = null), f = e.pendingLanes, f === V && (Bf = null), w || p1(e.current, !1), Dl(u.stateNode, i), Ea && e.memoizedUpdaters.clear(), C_(), Ga(e, Fn()), t !== null)
        for (var z = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], pe = F.stack, je = F.digest;
          z(F.value, {
            componentStack: pe,
            digest: je
          });
        }
      if (wm) {
        wm = !1;
        var Le = US;
        throw US = null, Le;
      }
      return ta(Up, He) && e.tag !== No && Fu(), f = e.pendingLanes, ta(f, He) ? (Kx(), e === FS ? Ap++ : (Ap = 0, FS = e)) : Ap = 0, Mo(), Rs(), null;
    }
    function Fu() {
      if (Bo !== null) {
        var e = ur(Up), t = oy(Ti, e), a = Ar.transition, i = Ha();
        try {
          return Ar.transition = null, Cn(t), Y_();
        } finally {
          Cn(i), Ar.transition = a;
        }
      }
      return !1;
    }
    function $_(e) {
      AS.push(e), oc || (oc = !0, WS(Si, function() {
        return Fu(), null;
      }));
    }
    function Y_() {
      if (Bo === null)
        return !1;
      var e = jS;
      jS = null;
      var t = Bo, a = Up;
      if (Bo = null, Up = V, (Ct & (jr | Li)) !== dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      HS = !0, _m = !1, ws(a);
      var i = Ct;
      Ct |= Li, s_(t.current), i_(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Iw(t, f);
        }
      }
      Ei(), p1(t.current, !0), Ct = i, Mo(), _m ? t === bm ? $f++ : ($f = 0, bm = t) : $f = 0, HS = !1, _m = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function c1(e) {
      return Bf !== null && Bf.has(e);
    }
    function I_(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function Q_(e) {
      wm || (wm = !0, US = e);
    }
    var W_ = Q_;
    function f1(e, t, a) {
      var i = ic(a, t), u = oC(e, i, He), s = Uo(e, u, He), f = xa();
      s !== null && (Cu(s, He, f), Ga(s, f));
    }
    function un(e, t, a) {
      if (Fw(a), Vp(!1), e.tag === X) {
        f1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === X) {
          f1(i, e, a);
          return;
        } else if (i.tag === ee) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !c1(s)) {
            var f = ic(a, e), p = cS(i, f, He), v = Uo(i, p, He), y = xa();
            v !== null && (Cu(v, He, y), Ga(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function G_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = xa();
      Wc(e, a), rb(e), Ra === e && Eu(pr, a) && (vr === Op || vr === Tm && jv(pr) && Fn() - zS < KC ? sc(e, V) : xm = nt(xm, a)), Ga(e, u);
    }
    function d1(e, t) {
      t === Dn && (t = k_(e));
      var a = xa(), i = Ia(e, t);
      i !== null && (Cu(i, t, a), Ga(i, a));
    }
    function q_(e) {
      var t = e.memoizedState, a = Dn;
      t !== null && (a = t.retryLane), d1(e, a);
    }
    function X_(e, t) {
      var a = Dn, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case St:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), d1(e, a);
    }
    function K_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x_(e / 1960) * 1960;
    }
    function Z_() {
      if (Ap > __)
        throw Ap = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > b_ && ($f = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function J_() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function p1(e, t) {
      dn(e), Nm(e, Ua, g_), t && Nm(e, cu, S_), Nm(e, Ua, m_), t && Nm(e, cu, y_), nn();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ue ? i = i.child : ((i.flags & t) !== Ue && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function v1(e) {
      {
        if ((Ct & jr) !== dr || !(e.mode & Oe))
          return;
        var t = e.tag;
        if (t !== he && t !== X && t !== ee && t !== ie && t !== Fe && t !== Me && t !== Ie)
          return;
        var a = Ke(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = fn;
        try {
          dn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? dn(e) : nn();
        }
      }
    }
    var YS;
    {
      var eb = null;
      YS = function(e, t, a) {
        var i = T1(eb, t);
        try {
          return bC(e, t, a);
        } catch (s) {
          if (px() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fh(), UE(), MC(e, t), T1(t, i), t.mode & kt && aS(t), ai(null, bC, null, e, t, a), ty()) {
            var u = Wi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var h1 = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function tb(e) {
      if (Yr && !Gx())
        switch (e.tag) {
          case ie:
          case Fe:
          case Ie: {
            var t = Mn && Ke(Mn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ee: {
            h1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), h1 = !0);
            break;
          }
        }
    }
    function Hp(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          qc(e, i, t);
        });
      }
    }
    var QS = {};
    function WS(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), QS) : yd(e, t);
      }
    }
    function m1(e) {
      if (e !== QS)
        return bc(e);
    }
    function y1() {
      return fl.current !== null;
    }
    function nb(e) {
      {
        if (e.mode & Oe) {
          if (!GC())
            return;
        } else if (!R_() || Ct !== dr || e.tag !== ie && e.tag !== Fe && e.tag !== Ie)
          return;
        if (fl.current === null) {
          var t = fn;
          try {
            dn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? dn(e) : nn();
          }
        }
      }
    }
    function rb(e) {
      e.tag !== No && GC() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Vp(e) {
      e1 = e;
    }
    var Ni = null, Yf = null, ab = function(e) {
      Ni = e;
    };
    function If(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        return t === void 0 ? e : t.current;
      }
    }
    function GS(e) {
      return If(e);
    }
    function qS(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: le,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function g1(e, t) {
      {
        if (Ni === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ee: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ie: {
            (typeof i == "function" || s === ze) && (u = !0);
            break;
          }
          case Fe: {
            (s === le || s === ze) && (u = !0);
            break;
          }
          case Me:
          case Ie: {
            (s === it || s === ze) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ni(a);
          if (f !== void 0 && f === Ni(i))
            return !0;
        }
        return !1;
      }
    }
    function S1(e) {
      {
        if (Ni === null || typeof WeakSet != "function")
          return;
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var ib = function(e, t) {
      {
        if (Ni === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fu(), ju(function() {
          XS(e.current, i, a);
        });
      }
    }, lb = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Fu(), ju(function() {
          Pp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ie:
          case Ie:
          case ee:
            v = p;
            break;
          case Fe:
            v = p.render;
            break;
        }
        if (Ni === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Ni(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === ee ? g = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ia(e, He);
          w !== null && hr(w, e, He, Jt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var ub = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ie:
          case Ie:
          case ee:
            p = f;
            break;
          case Fe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ob(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function ob(e, t) {
      {
        var a = sb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case be:
              t.add(i.stateNode.containerInfo);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function sb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var E1 = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function cb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new cb(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fb(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function db(e) {
      if (typeof e == "function")
        return JS(e) ? ee : ie;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return Fe;
        if (t === it)
          return Me;
      }
      return he;
    }
    function fc(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ue, a.subtreeFlags = Ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & lr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case he:
        case ie:
        case Ie:
          a.type = If(e.type);
          break;
        case ee:
          a.type = GS(e.type);
          break;
        case Fe:
          a.type = qS(e.type);
          break;
      }
      return a;
    }
    function pb(e, t) {
      e.flags &= lr | It;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = Ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ue, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function vb(e, t, a) {
      var i;
      return e === Oh ? (i = Oe, t === !0 && (i |= Sn, i |= ja)) : i = Ae, Ea && (i |= kt), oi(X, null, null, i);
    }
    function e0(e, t, a, i, u, s) {
      var f = he, p = e;
      if (typeof e == "function")
        JS(e) ? (f = ee, p = GS(p)) : p = If(p);
      else if (typeof e == "string")
        f = ue;
      else
        e:
          switch (e) {
            case va:
              return Io(a.children, u, s, t);
            case zi:
              f = xn, u |= Sn, (u & Oe) !== Ae && (u |= ja);
              break;
            case T:
              return hb(a, u, s, t);
            case pt:
              return mb(a, u, s, t);
            case Et:
              return yb(a, u, s, t);
            case Xt:
              return C1(a, u, s, t);
            case Er:
            case An:
            case ci:
            case Kt:
            case qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case I:
                    f = tt;
                    break e;
                  case ne:
                    f = Qt;
                    break e;
                  case le:
                    f = Fe, p = qS(p);
                    break e;
                  case it:
                    f = Me;
                    break e;
                  case ze:
                    f = wn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ke(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function t0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = e0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = oi(dt, e, i, t);
      return u.lanes = a, u;
    }
    function hb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(xt, e, i, t | kt);
      return u.elementType = T, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function mb(e, t, a, i) {
      var u = oi(Re, e, i, t);
      return u.elementType = pt, u.lanes = a, u;
    }
    function yb(e, t, a, i) {
      var u = oi(St, e, i, t);
      return u.elementType = Et, u.lanes = a, u;
    }
    function C1(e, t, a, i) {
      var u = oi(We, e, i, t);
      u.elementType = Xt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function n0(e, t, a) {
      var i = oi(we, e, null, t);
      return i.lanes = a, i;
    }
    function gb() {
      var e = oi(ue, null, null, Ae);
      return e.elementType = "DELETED", e;
    }
    function Sb(e) {
      var t = oi(Wt, null, null, Ae);
      return t.stateNode = e, t;
    }
    function r0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(be, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function T1(e, t) {
      return e === null && (e = oi(he, null, null, Ae)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Eb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dn, this.eventTimes = As(V), this.expirationTimes = As(Jt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = As(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Oh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case No:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function R1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Eb(e, t, a, p, v), b = vb(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return fg(b), g;
    }
    var a0 = "18.2.0";
    function Cb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Pr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var i0, l0;
    i0 = !1, l0 = {};
    function x1(e) {
      if (!e)
        return ui;
      var t = mi(e), a = ax(t);
      if (t.tag === ee) {
        var i = t.type;
        if (Pl(i))
          return X0(t, i, a);
      }
      return a;
    }
    function Tb(e, t) {
      {
        var a = mi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = vd(a);
        if (u === null)
          return null;
        if (u.mode & Sn) {
          var s = Ke(a) || "Component";
          if (!l0[s]) {
            l0[s] = !0;
            var f = fn;
            try {
              dn(u), a.mode & Sn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? dn(f) : nn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function w1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return R1(e, t, v, y, a, i, u, s, f);
    }
    function _1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = R1(a, i, g, e, u, s, f, p, v);
      b.context = x1(null);
      var w = b.current, z = xa(), U = $o(w), F = Mu(z, U);
      return F.callback = t ?? null, Uo(w, F, U), D_(b, U, z), b;
    }
    function Pp(e, t, a, i) {
      qi(t, e);
      var u = t.current, s = xa(), f = $o(u);
      Rd(f);
      var p = x1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Yr && fn !== null && !i0 && (i0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(fn) || "Unknown"));
      var v = Mu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uo(u, v, f);
      return y !== null && (hr(y, u, f, s), $h(y, u, f)), f;
    }
    function zm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case X: {
          var t = e.stateNode;
          if (Xc(t)) {
            var a = iy(t);
            M_(t, a);
          }
          break;
        }
        case Re: {
          ju(function() {
            var u = Ia(e, He);
            if (u !== null) {
              var s = xa();
              hr(u, e, He, s);
            }
          });
          var i = He;
          u0(e, i);
          break;
        }
      }
    }
    function b1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Bv(a.retryLane, t));
    }
    function u0(e, t) {
      b1(e, t);
      var a = e.alternate;
      a && b1(a, t);
    }
    function xb(e) {
      if (e.tag === Re) {
        var t = Su, a = Ia(e, t);
        if (a !== null) {
          var i = xa();
          hr(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function wb(e) {
      if (e.tag === Re) {
        var t = $o(e), a = Ia(e, t);
        if (a !== null) {
          var i = xa();
          hr(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function k1(e) {
      var t = md(e);
      return t === null ? null : t.stateNode;
    }
    var D1 = function(e) {
      return null;
    };
    function _b(e) {
      return D1(e);
    }
    var O1 = function(e) {
      return !1;
    };
    function bb(e) {
      return O1(e);
    }
    var L1 = null, N1 = null, M1 = null, z1 = null, U1 = null, A1 = null, j1 = null, F1 = null, H1 = null;
    {
      var V1 = function(e, t, a) {
        var i = t[a], u = bt(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (bt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = V1(e[i], t, a + 1), u);
      }, P1 = function(e, t) {
        return V1(e, t, 0);
      }, B1 = function(e, t, a, i) {
        var u = t[i], s = bt(e) ? e.slice() : ut({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], bt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = B1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $1 = function(e, t, a) {
        if (t.length !== a.length) {
          ye("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ye("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return B1(e, t, a, 0);
      }, Y1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = bt(e) ? e.slice() : ut({}, e);
        return s[u] = Y1(e[u], t, a + 1, i), s;
      }, I1 = function(e, t, a) {
        return Y1(e, t, 0, a);
      }, o0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      L1 = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = I1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Ia(e, He);
          f !== null && hr(f, e, He, Jt);
        }
      }, N1 = function(e, t, a) {
        var i = o0(e, t);
        if (i !== null) {
          var u = P1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ut({}, e.memoizedProps);
          var s = Ia(e, He);
          s !== null && hr(s, e, He, Jt);
        }
      }, M1 = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = $1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Ia(e, He);
          f !== null && hr(f, e, He, Jt);
        }
      }, z1 = function(e, t, a) {
        e.pendingProps = I1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, He);
        i !== null && hr(i, e, He, Jt);
      }, U1 = function(e, t) {
        e.pendingProps = P1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ia(e, He);
        a !== null && hr(a, e, He, Jt);
      }, A1 = function(e, t, a) {
        e.pendingProps = $1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, He);
        i !== null && hr(i, e, He, Jt);
      }, j1 = function(e) {
        var t = Ia(e, He);
        t !== null && hr(t, e, He, Jt);
      }, F1 = function(e) {
        D1 = e;
      }, H1 = function(e) {
        O1 = e;
      };
    }
    function kb(e) {
      var t = vd(e);
      return t === null ? null : t.stateNode;
    }
    function Db(e) {
      return null;
    }
    function Ob() {
      return fn;
    }
    function Lb(e) {
      var t = e.findFiberByHostInstance, a = Pe.ReactCurrentDispatcher;
      return bv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: L1,
        overrideHookStateDeletePath: N1,
        overrideHookStateRenamePath: M1,
        overrideProps: z1,
        overridePropsDeletePath: U1,
        overridePropsRenamePath: A1,
        setErrorHandler: F1,
        setSuspenseHandler: H1,
        scheduleUpdate: j1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: kb,
        findFiberByHostInstance: t || Db,
        // React Refresh
        findHostInstancesForRefresh: ub,
        scheduleRefresh: ib,
        scheduleRoot: lb,
        setRefreshHandler: ab,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ob,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: a0
      });
    }
    var Q1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function s0(e) {
      this._internalRoot = e;
    }
    Um.prototype.render = s0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Am(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gn) {
          var i = k1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Pp(e, t, null, null);
    }, Um.prototype.unmount = s0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        a1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ju(function() {
          Pp(null, e, null, null);
        }), I0(t);
      }
    };
    function Nb(e, t) {
      if (!Am(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      W1(e);
      var a = !1, i = !1, u = "", s = Q1;
      t != null && (t.hydrate ? ye("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Vr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = w1(e, Oh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === gn ? e.parentNode : e;
      return qd(p), new s0(f);
    }
    function Um(e) {
      this._internalRoot = e;
    }
    function Mb(e) {
      e && fy(e);
    }
    Um.prototype.unstable_scheduleHydration = Mb;
    function zb(e, t, a) {
      if (!Am(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      W1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Q1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = _1(t, null, e, Oh, i, s, f, p, v);
      if (Rh(y.current, e), qd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Bx(y, b);
        }
      return new Um(y);
    }
    function Am(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ha || e.nodeType === Kf || !Be));
    }
    function Bp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ha || e.nodeType === Kf || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function W1(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), lp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ub = Pe.ReactCurrentOwner, G1;
    G1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = k1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = c0(e), u = !!(i && Oo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function c0(e) {
      return e ? e.nodeType === ha ? e.documentElement : e.firstChild : null;
    }
    function q1() {
    }
    function Ab(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = zm(f);
            s.call(w);
          };
        }
        var f = _1(
          t,
          i,
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          q1
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === gn ? e.parentNode : e;
        return qd(p), ju(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = zm(g);
            y.call(w);
          };
        }
        var g = w1(
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          q1
        );
        e._reactRootContainer = g, Rh(g.current, e);
        var b = e.nodeType === gn ? e.parentNode : e;
        return qd(b), ju(function() {
          Pp(t, g, a, i);
        }), g;
      }
    }
    function jb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function jm(e, t, a, i, u) {
      G1(a), jb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ab(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = zm(f);
            p.call(v);
          };
        }
        Pp(t, f, e, u);
      }
      return zm(f);
    }
    function Fb(e) {
      {
        var t = Ub.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : Tb(e, "findDOMNode");
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = lp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return jm(null, e, t, !0, a);
    }
    function Vb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = lp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return jm(null, e, t, !1, a);
    }
    function Pb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ju(e))
        throw new Error("parentComponent must be a valid React Component");
      return jm(e, t, a, !1, i);
    }
    function Bb(e) {
      if (!Bp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = lp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = c0(e), i = a && !Oo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ju(function() {
          jm(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = c0(e), s = !!(u && Oo(u)), f = e.nodeType === Qr && Bp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    mo(Rb), sy(xb), Zc(wb), Iv(Ha), Qv(Rr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), id(IT), Cc(PS, z_, ju);
    function $b(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Am(t))
        throw new Error("Target container is not a DOM element.");
      return Cb(e, t, null, a);
    }
    function Yb(e, t, a, i) {
      return Pb(e, t, a, i);
    }
    var f0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Oo, Tf, xh, Zu, uu, PS]
    };
    function Ib(e, t) {
      return f0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Nb(e, t);
    }
    function Qb(e, t, a) {
      return f0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zb(e, t, a);
    }
    function Wb(e) {
      return a1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ju(e);
    }
    var Gb = Lb({
      findFiberByHostInstance: Xs,
      bundleType: 1,
      version: a0,
      rendererPackageName: "react-dom"
    });
    if (!Gb && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var X1 = window.location.protocol;
      /^(https?|file):$/.test(X1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (X1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0, Xa.createPortal = $b, Xa.createRoot = Ib, Xa.findDOMNode = Fb, Xa.flushSync = Wb, Xa.hydrate = Hb, Xa.hydrateRoot = Qb, Xa.render = Vb, Xa.unmountComponentAtNode = Bb, Xa.unstable_batchedUpdates = PS, Xa.unstable_renderSubtreeIntoContainer = Yb, Xa.version = a0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Xa;
}
var oT = {};
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (oT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (W) {
      console.error(W);
    }
  }
}
oT.NODE_ENV === "production" ? (sT(), m0.exports = uk()) : m0.exports = ok();
var sk = m0.exports, ck = {}, Qp = sk;
if (ck.NODE_ENV === "production")
  Gp.createRoot = Qp.createRoot, Gp.hydrateRoot = Qp.hydrateRoot;
else {
  var Hm = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Gp.createRoot = function(W, K) {
    Hm.usingClientEntryPoint = !0;
    try {
      return Qp.createRoot(W, K);
    } finally {
      Hm.usingClientEntryPoint = !1;
    }
  }, Gp.hydrateRoot = function(W, K, L) {
    Hm.usingClientEntryPoint = !0;
    try {
      return Qp.hydrateRoot(W, K, L);
    } finally {
      Hm.usingClientEntryPoint = !1;
    }
  };
}
const Vm = "/todo/task", fk = "/todo/tasksets", lT = "/todo/taskset";
function dk(W) {
  const { index: K, task: L, parent: Pe } = W, [Xe, st] = Wn.useState(L.name), [ye, S] = Wn.useState(L.status), [qe, ie] = Wn.useState(0), [ee, he] = Wn.useState("none"), [X, be] = Wn.useState("");
  function ue() {
    var Me;
    ye === "TODO" ? Me = "DONE" : Me = "TODO", S(Me);
    const Ie = { ...L };
    Ie.status = Me, L.status = Me, Pe.UpdateTask(K, Ie);
  }
  function we() {
    Pe.DeleteTask(K);
  }
  function dt() {
    switch (ye) {
      case "TODO":
        return "#050";
      case "DONE":
        return "#222";
    }
    return "transparent";
  }
  function xn(Me) {
    return Me ? "none" : "";
  }
  function Qt(Me) {
    return Me ? "block" : "none";
  }
  function tt(Me) {
    he(Qt(Me)), be(xn(Me)), ie(Me ? 3 : 0);
  }
  function Fe() {
    tt(!0);
  }
  function xt() {
    tt(!1);
    const Me = { ...L };
    L.name = Me.name = Xe, Pe.UpdateTask(K, Me);
  }
  function Re() {
    tt(!1), st(L.name);
  }
  return /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    /* @__PURE__ */ oe.jsxs("div", { className: "task-card", style: { zIndex: qe }, children: [
      /* @__PURE__ */ oe.jsx("span", { className: "todo-tag", style: { backgroundColor: dt() }, children: /* @__PURE__ */ oe.jsx("p", { children: ye }) }),
      /* @__PURE__ */ oe.jsxs("span", { className: "task-card-content", children: [
        /* @__PURE__ */ oe.jsx("p", { style: { display: X }, children: Xe }),
        /* @__PURE__ */ oe.jsx(
          "textarea",
          {
            value: Xe,
            style: { display: ee },
            onChange: (Me) => st(Me.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ oe.jsx("span", { className: "button", style: { display: X }, children: /* @__PURE__ */ oe.jsx("button", { onClick: Fe, children: /* @__PURE__ */ oe.jsx(Qo, { name: "edit" }) }) }),
      /* @__PURE__ */ oe.jsxs("span", { className: "edit-controls", style: { display: ee }, children: [
        /* @__PURE__ */ oe.jsx("button", { onClick: Re, style: { top: "-3em" }, children: /* @__PURE__ */ oe.jsx(Qo, { name: "cancel" }) }),
        /* @__PURE__ */ oe.jsx("button", { onClick: xt, style: { top: "0em" }, children: "Save" }),
        /* @__PURE__ */ oe.jsx("button", { onClick: we, style: { top: "3em" }, children: /* @__PURE__ */ oe.jsx(Qo, { name: "delete" }) }),
        /* @__PURE__ */ oe.jsx("button", { onClick: ue, style: { top: "6em" }, children: ye })
      ] })
    ] }),
    /* @__PURE__ */ oe.jsx("div", { className: "overlay", onClick: Re, style: { display: ee } })
  ] });
}
function pk(W) {
  const { parent: K, taskset: L } = W, [Pe, Xe] = Wn.useState(!0), [st, ye] = Wn.useState(""), [S, qe] = Wn.useState("");
  function ie(X) {
    qe(X.target.value);
  }
  function ee(X) {
    ye(X.target.value);
  }
  function he() {
    K.AddTask({ taskset_id: L.id, name: S, description: st, status: "TODO" }), Xe(!0), qe(""), ye("");
  }
  return Pe ? /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsx("div", { className: "card", children: /* @__PURE__ */ oe.jsx("button", { onClick: () => Xe(!1), children: /* @__PURE__ */ oe.jsx(Qo, { name: "add" }) }) }) }) : /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    /* @__PURE__ */ oe.jsxs("label", { children: [
      "Summary:",
      /* @__PURE__ */ oe.jsx("input", { type: "text", value: S, onChange: ie })
    ] }),
    /* @__PURE__ */ oe.jsx("br", {}),
    /* @__PURE__ */ oe.jsxs("label", { children: [
      "Details:",
      /* @__PURE__ */ oe.jsx("input", { value: st, onChange: ee })
    ] }),
    /* @__PURE__ */ oe.jsx("button", { onClick: he, children: "add" })
  ] });
}
function vk(W) {
  const { tasksets: K, parent: L } = W;
  function Pe() {
    L.selectTaskset({});
  }
  function Xe(ye) {
    L.selectTaskset(ye);
  }
  function st(ye) {
    const { taskset: S, parent: qe } = ye;
    return /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsx("button", { onClick: () => qe.selectTaskset(S), children: S.name }) });
  }
  return /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    /* @__PURE__ */ oe.jsx("h3", { children: "TOADO" }),
    /* @__PURE__ */ oe.jsx("div", { className: "tasksets", children: K.map((ye, S) => /* @__PURE__ */ oe.jsx(
      st,
      {
        taskset: ye,
        parent: { selectTaskset: Xe }
      },
      S
    )) }),
    /* @__PURE__ */ oe.jsx("button", { onClick: Pe, children: /* @__PURE__ */ oe.jsx(Qo, { name: "add" }) })
  ] });
}
function hk(W) {
  const { taskset: K } = W, [L, Pe] = Wn.useState([]);
  Wn.useEffect(Xe, [K]);
  function Xe() {
    fetch(Vm + "?" + new URLSearchParams({ tasksetid: K.id })).then((ie) => ie.json()).then((ie) => Pe(ie.tasks));
  }
  function st(ie) {
    const ee = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskset_id: K.id, tasks: ie })
    };
    fetch(Vm, ee).then((he) => he.json()).then((he) => Pe(he.tasks));
  }
  function ye(ie) {
    K.id != null && (ie.taskset_id = K.id);
    const ee = L.concat([ie]);
    st([ie]), console.log(ee), Pe(ee);
  }
  function S(ie) {
    const ee = [L[ie]], he = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskset_id: K.id, tasks: ee })
    };
    fetch(Vm, he).then((X) => X.json()).then((X) => Pe(X.tasks));
  }
  function qe(ie, ee) {
    const he = [...L], X = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tasks: [ee] })
    };
    fetch(Vm, X).then((be) => be.json()).then(() => {
      he[ie] = ee, Pe(he);
    });
  }
  return /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    /* @__PURE__ */ oe.jsx("div", { className: "tasks", children: L.map((ie, ee) => /* @__PURE__ */ oe.jsx(
      dk,
      {
        index: ee,
        task: ie,
        parent: { DeleteTask: S, UpdateTask: qe }
      },
      ee
    )) }),
    /* @__PURE__ */ oe.jsx("br", {}),
    /* @__PURE__ */ oe.jsx(pk, { taskset: K, parent: { AddTask: ye } })
  ] });
}
function Qo({ name: W }) {
  return /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsx("span", { className: "material-symbols-outlined", children: W }) });
}
function mk(W) {
  const { taskset: K, parent: L } = W, [Pe, Xe] = Wn.useState(!1), [st, ye] = Wn.useState("");
  Wn.useEffect(() => {
    ye(K.name), Xe(K.id == null);
  }, [K]);
  function S() {
    Xe(!0);
  }
  function qe() {
    const he = { ...K };
    he.name = st, he.edittime = /* @__PURE__ */ new Date();
    const X = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskset: he })
    };
    fetch(lT, X).then((be) => be.json()).then((be) => L.selectTaskset(be)), Xe(!1);
  }
  function ie(he) {
    ye(he.target.value);
  }
  function ee() {
    const he = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskset: K })
    };
    fetch(lT, he).then((X) => X.json()).then(() => L.selectTaskset(null));
  }
  return Pe ? /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsxs("div", { className: "heading-with-stacked-buttons", children: [
    /* @__PURE__ */ oe.jsx("input", { type: "text", value: st, onChange: ie }),
    /* @__PURE__ */ oe.jsx("div", { className: "stacked-buttons", children: /* @__PURE__ */ oe.jsx("button", { onClick: qe, children: /* @__PURE__ */ oe.jsx(Qo, { name: "done" }) }) })
  ] }) }) : /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsxs("div", { className: "heading-with-stacked-buttons", children: [
    /* @__PURE__ */ oe.jsx("h1", { children: st }),
    /* @__PURE__ */ oe.jsxs("div", { className: "stacked-buttons", children: [
      /* @__PURE__ */ oe.jsx("button", { onClick: S, children: /* @__PURE__ */ oe.jsx(Qo, { name: "edit" }) }),
      /* @__PURE__ */ oe.jsx("button", { onClick: ee, children: /* @__PURE__ */ oe.jsx(Qo, { name: "delete" }) })
    ] })
  ] }) });
}
function yk() {
  const [W, K] = Wn.useState(null), [L, Pe] = Wn.useState([]);
  Wn.useEffect(Xe, []);
  function Xe() {
    fetch(fk).then((ye) => ye.json()).then((ye) => Pe(ye.tasksets));
  }
  function st(ye) {
    K(ye), Xe();
  }
  return /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsxs("div", { className: "main", children: [
    /* @__PURE__ */ oe.jsx("div", { className: "sidebar", children: /* @__PURE__ */ oe.jsx(vk, { tasksets: L, parent: { selectTaskset: st } }) }),
    W != null && /* @__PURE__ */ oe.jsx(mk, { taskset: W, parent: { selectTaskset: st } }),
    W != null && W.id != null && /* @__PURE__ */ oe.jsx(hk, { taskset: W })
  ] }) });
}
Gp.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ oe.jsx(tk.StrictMode, { children: /* @__PURE__ */ oe.jsx(yk, {}) })
);
