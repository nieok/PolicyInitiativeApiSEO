/**
 * Included:
 * AngularJS                v1.6.1          line: 22
 * angular-ui-router        v1.0.5-rc.1     line: 354
 * angular-local-storage    v0.5.2          line: 366
 * FastClick                v?              line: 376    
 * Ng-Map                   v1.18.4         line: 384
 * Ng-Animate               v1.6.1         line: 421
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (z) {
    'use strict';

    function M(a, b) {
        b = b || Error;
        return function () {
            var d = arguments[0],
                c;
            c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.1/" + (a ? a + "/" : "") + d;
            for (d = 1; d < arguments.length; d++) {
                c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";
                var f = encodeURIComponent,
                    e;
                e = arguments[d];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += f(e)
            }
            return new b(c)
        }
    }

    function ta(a) {
        if (null == a || Wa(a)) return !1;
        if (C(a) || E(a) || D && a instanceof D) return !0;
        var b = "length" in Object(a) && a.length;
        return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item)
    }

    function q(a, b, d) {
        var c, f;
        if (a)
            if (y(a))
                for (c in a) "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
            else if (C(a) || ta(a)) {
            var e = "object" !== typeof a;
            c = 0;
            for (f = a.length; c < f; c++)(e || c in a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);
        else if (Dc(a))
            for (c in a) b.call(d, a[c], c, a);
        else if ("function" === typeof a.hasOwnProperty)
            for (c in a) a.hasOwnProperty(c) &&
                b.call(d, a[c], c, a);
        else
            for (c in a) va.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function Ec(a, b, d) {
        for (var c = Object.keys(a).sort(), f = 0; f < c.length; f++) b.call(d, a[c[f]], c[f]);
        return c
    }

    function Fc(a) {
        return function (b, d) {
            a(d, b)
        }
    }

    function ie() {
        return ++rb
    }

    function Sb(a, b, d) {
        for (var c = a.$$hashKey, f = 0, e = b.length; f < e; ++f) {
            var g = b[f];
            if (F(g) || y(g))
                for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                    var m = h[k],
                        n = g[m];
                    d && F(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) :
                        Tb(n) ? a[m] = n.clone() : (F(a[m]) || (a[m] = C(n) ? [] : {}), Sb(a[m], [n], !0)) : a[m] = n
                }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }

    function R(a) {
        return Sb(a, wa.call(arguments, 1), !1)
    }

    function je(a) {
        return Sb(a, wa.call(arguments, 1), !0)
    }

    function Z(a) {
        return parseInt(a, 10)
    }

    function Ub(a, b) {
        return R(Object.create(a), b)
    }

    function w() {}

    function Ya(a) {
        return a
    }

    function ma(a) {
        return function () {
            return a
        }
    }

    function Vb(a) {
        return y(a.toString) && a.toString !== na
    }

    function x(a) {
        return "undefined" === typeof a
    }

    function v(a) {
        return "undefined" !==
            typeof a
    }

    function F(a) {
        return null !== a && "object" === typeof a
    }

    function Dc(a) {
        return null !== a && "object" === typeof a && !Gc(a)
    }

    function E(a) {
        return "string" === typeof a
    }

    function Y(a) {
        return "number" === typeof a
    }

    function fa(a) {
        return "[object Date]" === na.call(a)
    }

    function y(a) {
        return "function" === typeof a
    }

    function Xa(a) {
        return "[object RegExp]" === na.call(a)
    }

    function Wa(a) {
        return a && a.window === a
    }

    function Za(a) {
        return a && a.$evalAsync && a.$watch
    }

    function Ia(a) {
        return "boolean" === typeof a
    }

    function ke(a) {
        return a && Y(a.length) &&
            le.test(na.call(a))
    }

    function Tb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function me(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++) b[a[d]] = !0;
        return b
    }

    function xa(a) {
        return P(a.nodeName || a[0] && a[0].nodeName)
    }

    function $a(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }

    function Fa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey,
                e;
            if (C(a)) {
                e = 0;
                for (var f = a.length; e < f; e++) b.push(c(a[e]))
            } else if (Dc(a))
                for (e in a) b[e] = c(a[e]);
            else if (a && "function" === typeof a.hasOwnProperty)
                for (e in a) a.hasOwnProperty(e) &&
                    (b[e] = c(a[e]));
            else
                for (e in a) va.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }

        function c(a) {
            if (!F(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return g[b];
            if (Wa(a) || Za(a)) throw Ga("cpws");
            var b = !1,
                c = f(a);
            void 0 === c && (c = C(a) ? [] : Object.create(Gc(a)), b = !0);
            e.push(a);
            g.push(c);
            return b ? d(a, c) : c
        }

        function f(a) {
            switch (na.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(c(a.buffer),
                        a.byteOffset, a.length);
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        (new Uint8Array(b)).set(new Uint8Array(a));
                        return b
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                case "[object Blob]":
                    return new a.constructor([a], {
                        type: a.type
                    })
            }
            if (y(a.cloneNode)) return a.cloneNode(!0)
        }
        var e = [],
            g = [];
        if (b) {
            if (ke(b) || "[object ArrayBuffer]" === na.call(b)) throw Ga("cpta");
            if (a === b) throw Ga("cpi");
            C(b) ? b.length = 0 : q(b, function (a, d) {
                "$$hashKey" !== d && delete b[d]
            });
            e.push(a);
            g.push(b);
            return d(a, b)
        }
        return c(a)
    }

    function qa(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d = typeof a,
            c;
        if (d === typeof b && "object" === d)
            if (C(a)) {
                if (!C(b)) return !1;
                if ((d = a.length) === b.length) {
                    for (c = 0; c < d; c++)
                        if (!qa(a[c], b[c])) return !1;
                    return !0
                }
            } else {
                if (fa(a)) return fa(b) ? qa(a.getTime(),
                    b.getTime()) : !1;
                if (Xa(a)) return Xa(b) ? a.toString() === b.toString() : !1;
                if (Za(a) || Za(b) || Wa(a) || Wa(b) || C(b) || fa(b) || Xa(b)) return !1;
                d = W();
                for (c in a)
                    if ("$" !== c.charAt(0) && !y(a[c])) {
                        if (!qa(a[c], b[c])) return !1;
                        d[c] = !0
                    } for (c in b)
                    if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !y(b[c])) return !1;
                return !0
            } return !1
    }

    function ab(a, b, d) {
        return a.concat(wa.call(b, d))
    }

    function bb(a, b) {
        var d = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a,
                ab(d, arguments, 0)) : b.apply(a, d)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function Hc(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && z.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
        return d
    }

    function cb(a, b) {
        if (!x(a)) return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Hc, b)
    }

    function Ic(a) {
        return E(a) ? JSON.parse(a) : a
    }

    function Jc(a, b) {
        a = a.replace(ne, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
        return ga(d) ? b : d
    }

    function Wb(a,
        b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = Jc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a
    }

    function ya(a) {
        a = D(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var d = D("<div>").append(a).html();
        try {
            return a[0].nodeType === Ja ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
                return "<" + P(b)
            })
        } catch (c) {
            return P(d)
        }
    }

    function Kc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function Lc(a) {
        var b = {};
        q((a || "").split("&"), function (a) {
            var c, f, e;
            a && (f = a = a.replace(/\+/g, "%20"),
                c = a.indexOf("="), -1 !== c && (f = a.substring(0, c), e = a.substring(c + 1)), f = Kc(f), v(f) && (e = v(e) ? Kc(e) : !0, va.call(b, f) ? C(b[f]) ? b[f].push(e) : b[f] = [b[f], e] : b[f] = e))
        });
        return b
    }

    function Xb(a) {
        var b = [];
        q(a, function (a, c) {
            C(a) ? q(a, function (a) {
                b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)))
            }) : b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }

    function db(a) {
        return ka(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ka(a, b) {
        return encodeURIComponent(a).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function oe(a, b) {
        var d, c, f = Ka.length;
        for (c = 0; c < f; ++c)
            if (d = Ka[c] + b, E(d = a.getAttribute(d))) return d;
        return null
    }

    function pe(a, b) {
        var d, c, f = {};
        q(Ka, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        });
        q(Ka, function (b) {
            b += "app";
            var f;
            !d && (f = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = f, c = f.getAttribute(b))
        });
        d && (qe ? (f.strictDi = null !== oe(d, "strict-di"),
            b(d, c ? [c] : [], f)) : z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function Mc(a, b, d) {
        F(d) || (d = {});
        d = R({
            strictDi: !1
        }, d);
        var c = function () {
                a = D(a);
                if (a.injector()) {
                    var c = a[0] === z.document ? "document" : ya(a);
                    throw Ga("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                b = b || [];
                b.unshift(["$provide", function (b) {
                    b.value("$rootElement", a)
                }]);
                d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                    a.debugInfoEnabled(!0)
                }]);
                b.unshift("ng");
                c = eb(b, d.strictDi);
                c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, d, c) {
                    a.$apply(function () {
                        b.data("$injector", c);
                        d(b)(a)
                    })
                }]);
                return c
            },
            f = /^NG_ENABLE_DEBUG_INFO!/,
            e = /^NG_DEFER_BOOTSTRAP!/;
        z && f.test(z.name) && (d.debugInfoEnabled = !0, z.name = z.name.replace(f, ""));
        if (z && !e.test(z.name)) return c();
        z.name = z.name.replace(e, "");
        $.resumeBootstrap = function (a) {
            q(a, function (a) {
                b.push(a)
            });
            return c()
        };
        y($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap()
    }

    function re() {
        z.name =
            "NG_ENABLE_DEBUG_INFO!" + z.name;
        z.location.reload()
    }

    function se(a) {
        a = $.element(a).injector();
        if (!a) throw Ga("test");
        return a.get("$$testability")
    }

    function Nc(a, b) {
        b = b || "_";
        return a.replace(te, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function ue() {
        var a;
        if (!Oc) {
            var b = sb();
            (oa = x(b) ? z.jQuery : b ? z[b] : void 0) && oa.fn.on ? (D = oa, R(oa.fn, {
                scope: Oa.scope,
                isolateScope: Oa.isolateScope,
                controller: Oa.controller,
                injector: Oa.injector,
                inheritedData: Oa.inheritedData
            }), a = oa.cleanData, oa.cleanData = function (b) {
                for (var c,
                        f = 0, e; null != (e = b[f]); f++)(c = oa._data(e, "events")) && c.$destroy && oa(e).triggerHandler("$destroy");
                a(b)
            }) : D = X;
            $.element = D;
            Oc = !0
        }
    }

    function fb(a, b, d) {
        if (!a) throw Ga("areq", b || "?", d || "required");
        return a
    }

    function tb(a, b, d) {
        d && C(a) && (a = a[a.length - 1]);
        fb(y(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }

    function Pa(a, b) {
        if ("hasOwnProperty" === a) throw Ga("badname", b);
    }

    function Pc(a, b, d) {
        if (!b) return a;
        b = b.split(".");
        for (var c, f = a, e = b.length, g = 0; g < e; g++) c =
            b[g], a && (a = (f = a)[c]);
        return !d && y(a) ? bb(f, a) : a
    }

    function ub(a) {
        for (var b = a[0], d = a[a.length - 1], c, f = 1; b !== d && (b = b.nextSibling); f++)
            if (c || a[f] !== b) c || (c = D(wa.call(a, 0, f))), c.push(b);
        return c || a
    }

    function W() {
        return Object.create(null)
    }

    function Yb(a) {
        if (null == a) return "";
        switch (typeof a) {
            case "string":
                break;
            case "number":
                a = "" + a;
                break;
            default:
                a = !Vb(a) || C(a) || fa(a) ? cb(a) : a.toString()
        }
        return a
    }

    function ve(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var d = M("$injector"),
            c = M("ng");
        a = b(a, "angular", Object);
        a.$$minErr =
            a.$$minErr || M;
        return b(a, "module", function () {
            var a = {};
            return function (e, g, h) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                g && a.hasOwnProperty(e) && (a[e] = null);
                return b(a, e, function () {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function () {
                            f[e || "push"]([b, d, arguments]);
                            return J
                        }
                    }

                    function b(a, d, f) {
                        f || (f = c);
                        return function (b, c) {
                            c && y(c) && (c.$$moduleName = e);
                            f.push([a, d, arguments]);
                            return J
                        }
                    }
                    if (!g) throw d("nomod", e);
                    var c = [],
                        f = [],
                        p = [],
                        r = a("$injector", "invoke", "push", f),
                        J = {
                            _invokeQueue: c,
                            _configBlocks: f,
                            _runBlocks: p,
                            requires: g,
                            name: e,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: b("$provide", "decorator", f),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            component: b("$compileProvider", "component"),
                            config: r,
                            run: function (a) {
                                p.push(a);
                                return this
                            }
                        };
                    h && r(h);
                    return J
                })
            }
        })
    }

    function ra(a, b) {
        if (C(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++) b[d] = a[d]
        } else if (F(a))
            for (d in b = b || {}, a)
                if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
        return b || a
    }

    function we(a) {
        var b = [];
        return JSON.stringify(a, function (a, c) {
            c = Hc(a, c);
            if (F(c)) {
                if (0 <= b.indexOf(c)) return "...";
                b.push(c)
            }
            return c
        })
    }

    function xe(a) {
        R(a, {
            bootstrap: Mc,
            copy: Fa,
            extend: R,
            merge: je,
            equals: qa,
            element: D,
            forEach: q,
            injector: eb,
            noop: w,
            bind: bb,
            toJson: cb,
            fromJson: Ic,
            identity: Ya,
            isUndefined: x,
            isDefined: v,
            isString: E,
            isFunction: y,
            isObject: F,
            isNumber: Y,
            isElement: Tb,
            isArray: C,
            version: ye,
            isDate: fa,
            lowercase: P,
            uppercase: vb,
            callbacks: {
                $$counter: 0
            },
            getTestability: se,
            reloadWithDebugInfo: re,
            $$minErr: M,
            $$csp: za,
            $$encodeUriSegment: db,
            $$encodeUriQuery: ka,
            $$stringify: Yb
        });
        Zb = ve(z);
        Zb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({
                $$sanitizeUri: ze
            });
            a.provider("$compile", Qc).directive({
                a: Ae,
                input: Rc,
                textarea: Rc,
                form: Be,
                script: Ce,
                select: De,
                option: Ee,
                ngBind: Fe,
                ngBindHtml: Ge,
                ngBindTemplate: He,
                ngClass: Ie,
                ngClassEven: Je,
                ngClassOdd: Ke,
                ngCloak: Le,
                ngController: Me,
                ngForm: Ne,
                ngHide: Oe,
                ngIf: Pe,
                ngInclude: Qe,
                ngInit: Re,
                ngNonBindable: Se,
                ngPluralize: Te,
                ngRepeat: Ue,
                ngShow: Ve,
                ngStyle: We,
                ngSwitch: Xe,
                ngSwitchWhen: Ye,
                ngSwitchDefault: Ze,
                ngOptions: $e,
                ngTransclude: af,
                ngModel: bf,
                ngList: cf,
                ngChange: df,
                pattern: Sc,
                ngPattern: Sc,
                required: Tc,
                ngRequired: Tc,
                minlength: Uc,
                ngMinlength: Uc,
                maxlength: Vc,
                ngMaxlength: Vc,
                ngValue: ef,
                ngModelOptions: ff
            }).directive({
                ngInclude: gf
            }).directive(wb).directive(Wc);
            a.provider({
                $anchorScroll: hf,
                $animate: jf,
                $animateCss: kf,
                $$animateJs: lf,
                $$animateQueue: mf,
                $$AnimateRunner: nf,
                $$animateAsyncRun: of ,
                $browser: pf,
                $cacheFactory: qf,
                $controller: rf,
                $document: sf,
                $$isDocumentHidden: tf,
                $exceptionHandler: uf,
                $filter: Xc,
                $$forceReflow: vf,
                $interpolate: wf,
                $interval: xf,
                $http: yf,
                $httpParamSerializer: zf,
                $httpParamSerializerJQLike: Af,
                $httpBackend: Bf,
                $xhrFactory: Cf,
                $jsonpCallbacks: Df,
                $location: Ef,
                $log: Ff,
                $parse: Gf,
                $rootScope: Hf,
                $q: If,
                $$q: Jf,
                $sce: Kf,
                $sceDelegate: Lf,
                $sniffer: Mf,
                $templateCache: Nf,
                $templateRequest: Of,
                $$testability: Pf,
                $timeout: Qf,
                $window: Rf,
                $$rAF: Sf,
                $$jqLite: Tf,
                $$HashMap: Uf,
                $$cookieReader: Vf
            })
        }])
    }

    function gb(a, b) {
        return b.toUpperCase()
    }

    function xb(a) {
        return a.replace(Wf, gb)
    }

    function Yc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }

    function Zc(a, b) {
        var d, c, f = b.createDocumentFragment(),
            e = [];
        if ($b.test(a)) {
            d = f.appendChild(b.createElement("div"));
            c = (Xf.exec(a) || ["", ""])[1].toLowerCase();
            c = ha[c] || ha._default;
            d.innerHTML = c[1] + a.replace(Yf, "<$1></$2>") + c[2];
            for (c = c[0]; c--;) d = d.lastChild;
            e = ab(e, d.childNodes);
            d = f.firstChild;
            d.textContent = ""
        } else e.push(b.createTextNode(a));
        f.textContent = "";
        f.innerHTML = "";
        q(e, function (a) {
            f.appendChild(a)
        });
        return f
    }

    function X(a) {
        if (a instanceof X) return a;
        var b;
        E(a) && (a = S(a), b = !0);
        if (!(this instanceof X)) {
            if (b && "<" !== a.charAt(0)) throw ac("nosel");
            return new X(a)
        }
        if (b) {
            b = z.document;
            var d;
            a = (d = Zf.exec(a)) ? [b.createElement(d[1])] : (d = Zc(a, b)) ? d.childNodes : [];
            bc(this, a)
        } else y(a) ? $c(a) : bc(this, a)
    }

    function cc(a) {
        return a.cloneNode(!0)
    }

    function yb(a, b) {
        b || hb(a);
        if (a.querySelectorAll)
            for (var d = a.querySelectorAll("*"), c = 0, f = d.length; c < f; c++) hb(d[c])
    }

    function ad(a, b, d, c) {
        if (v(c)) throw ac("offargs");
        var f = (c = zb(a)) && c.events,
            e = c && c.handle;
        if (e)
            if (b) {
                var g = function (b) {
                    var c = f[b];
                    v(d) && $a(c || [], d);
                    v(d) && c && 0 < c.length || (a.removeEventListener(b, e), delete f[b])
                };
                q(b.split(" "), function (a) {
                    g(a);
                    Ab[a] && g(Ab[a])
                })
            } else
                for (b in f) "$destroy" !== b && a.removeEventListener(b, e), delete f[b]
    }

    function hb(a, b) {
        var d = a.ng339,
            c = d && ib[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), ad(a)), delete ib[d], a.ng339 = void 0))
    }

    function zb(a,
        b) {
        var d = a.ng339,
            d = d && ib[d];
        b && !d && (a.ng339 = d = ++$f, d = ib[d] = {
            events: {},
            data: {},
            handle: void 0
        });
        return d
    }

    function dc(a, b, d) {
        if (Yc(a)) {
            var c, f = v(d),
                e = !f && b && !F(b),
                g = !b;
            a = (a = zb(a, !e)) && a.data;
            if (f) a[xb(b)] = d;
            else {
                if (g) return a;
                if (e) return a && a[xb(b)];
                for (c in b) a[xb(c)] = b[c]
            }
        }
    }

    function Bb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function Cb(a, b) {
        b && a.setAttribute && q(b.split(" "), function (b) {
            a.setAttribute("class", S((" " + (a.getAttribute("class") ||
                "") + " ").replace(/[\n\t]/g, " ").replace(" " + S(b) + " ", " ")))
        })
    }

    function Db(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function (a) {
                a = S(a); - 1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", S(d))
        }
    }

    function bc(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var d = b.length;
                if ("number" === typeof d && b.window !== b) {
                    if (d)
                        for (var c = 0; c < d; c++) a[a.length++] = b[c]
                } else a[a.length++] = b
            }
    }

    function bd(a, b) {
        return Eb(a, "$" + (b || "ngController") +
            "Controller")
    }

    function Eb(a, b, d) {
        9 === a.nodeType && (a = a.documentElement);
        for (b = C(b) ? b : [b]; a;) {
            for (var c = 0, f = b.length; c < f; c++)
                if (v(d = D.data(a, b[c]))) return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function cd(a) {
        for (yb(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Fb(a, b) {
        b || yb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function ag(a, b) {
        b = b || z;
        if ("complete" === b.document.readyState) b.setTimeout(a);
        else D(b).on("load", a)
    }

    function $c(a) {
        function b() {
            z.document.removeEventListener("DOMContentLoaded",
                b);
            z.removeEventListener("load", b);
            a()
        }
        "complete" === z.document.readyState ? z.setTimeout(a) : (z.document.addEventListener("DOMContentLoaded", b), z.addEventListener("load", b))
    }

    function dd(a, b) {
        var d = Gb[b.toLowerCase()];
        return d && ed[xa(a)] && d
    }

    function bg(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var e = b[d || c.type],
                g = e ? e.length : 0;
            if (g) {
                if (x(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                var k = e.specialHandlerWrapper || cg;
                1 < g && (e = ra(e));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, e[l])
            }
        };
        d.elem = a;
        return d
    }

    function cg(a, b, d) {
        d.call(a, b)
    }

    function dg(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || eg.call(a, c)) || d.call(a, b)
    }

    function Tf() {
        this.$get = function () {
            return R(X, {
                hasClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Bb(a, b)
                },
                addClass: function (a,
                    b) {
                    a.attr && (a = a[0]);
                    return Db(a, b)
                },
                removeClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Cb(a, b)
                }
            })
        }
    }

    function la(a, b) {
        var d = a && a.$$hashKey;
        if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || ie)() : d + ":" + a
    }

    function Qa(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function () {
                return ++d
            }
        }
        q(a, this.put, this)
    }

    function fd(a) {
        a = (Function.prototype.toString.call(a) + " ").replace(fg, "");
        return a.match(gg) || a.match(hg)
    }

    function ig(a) {
        return (a = fd(a)) ?
            "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function eb(a, b) {
        function d(a) {
            return function (b, c) {
                if (F(b)) q(b, Fc(a));
                else return a(b, c)
            }
        }

        function c(a, b) {
            Pa(a, "service");
            if (y(b) || C(b)) b = p.instantiate(b);
            if (!b.$get) throw da("pget", a);
            return n[a + "Provider"] = b
        }

        function f(a, b) {
            return function () {
                var c = O.invoke(b, this);
                if (x(c)) throw da("undef", a);
                return c
            }
        }

        function e(a, b, d) {
            return c(a, {
                $get: !1 !== d ? f(a, b) : b
            })
        }

        function g(a) {
            fb(x(a) || C(a), "modulesToLoad", "not an array");
            var b = [],
                c;
            q(a, function (a) {
                function d(a) {
                    var b,
                        c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = p.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        E(a) ? (c = Zb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : y(a) ? b.push(p.invoke(a)) : C(a) ? b.push(p.invoke(a)) : tb(a, "module")
                    } catch (e) {
                        throw C(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), da("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] ===
                        k) throw da("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b]
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift()
                }
            }

            function e(a, c, f) {
                var g = [];
                a = eb.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l) throw da("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f))
                }
                return g
            }
            return {
                invoke: function (a, b, c, d) {
                    "string" === typeof c && (d = c, c = null);
                    c = e(a, c, d);
                    C(a) && (a = a[a.length - 1]);
                    d = a;
                    if (La || "function" !== typeof d) d = !1;
                    else {
                        var f = d.$$ngIsClass;
                        Ia(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d) + " "));
                        d = f
                    }
                    return d ? (c.unshift(null), new(Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                },
                instantiate: function (a, b, c) {
                    var d = C(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new(Function.prototype.bind.apply(d, a))
                },
                get: d,
                annotate: eb.$$annotate,
                has: function (b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }
        b = !0 === b;
        var k = {},
            l = [],
            m = new Qa([], !0),
            n = {
                $provide: {
                    provider: d(c),
                    factory: d(e),
                    service: d(function (a, b) {
                        return e(a, ["$injector", function (a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: d(function (a, b) {
                        return e(a, ma(b), !1)
                    }),
                    constant: d(function (a, b) {
                        Pa(a, "constant");
                        n[a] = b;
                        r[a] = b
                    }),
                    decorator: function (a, b) {
                        var c = p.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function () {
                            var a = O.invoke(d, c);
                            return O.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            p = n.$injector = h(n, function (a, b) {
                $.isString(b) && l.push(b);
                throw da("unpr", l.join(" <- "));
            }),
            r = {},
            J = h(r, function (a, b) {
                var c = p.get(a + "Provider", b);
                return O.invoke(c.$get, c,
                    void 0, a)
            }),
            O = J;
        n.$injectorProvider = {
            $get: ma(J)
        };
        var u = g(a),
            O = J.get("$injector");
        O.strictDi = b;
        q(u, function (a) {
            a && O.invoke(a)
        });
        return O
    }

    function hf() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function f(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === xa(a)) return b = a, !0
                });
                return b
            }

            function e(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    y(c) ? c = c() : Tb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) :
                        Y(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = E(a) ? a : Y(a) ? a.toString() : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? e(b) : (b = f(h.getElementsByName(a))) ? e(b) : "top" === a && e(null) : e(null)
            }
            var h = b.document;
            a && c.$watch(function () {
                return d.hash()
            }, function (a, b) {
                a === b && "" === a || ag(function () {
                    c.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function jb(a, b) {
        if (!a && !b) return "";
        if (!a) return b;
        if (!b) return a;
        C(a) && (a = a.join(" "));
        C(b) && (b = b.join(" "));
        return a + " " + b
    }

    function jg(a) {
        E(a) &&
            (a = a.split(" "));
        var b = W();
        q(a, function (a) {
            a.length && (b[a] = !0)
        });
        return b
    }

    function Aa(a) {
        return F(a) ? a : {}
    }

    function kg(a, b, d, c) {
        function f(a) {
            try {
                a.apply(null, wa.call(arguments, 1))
            } finally {
                if (J--, 0 === J)
                    for (; O.length;) try {
                        O.pop()()
                    } catch (b) {
                        d.error(b)
                    }
            }
        }

        function e() {
            ia = null;
            g();
            h()
        }

        function g() {
            u = A();
            u = x(u) ? null : u;
            qa(u, B) && (u = B);
            B = u
        }

        function h() {
            if (U !== k.url() || H !== u) U = k.url(), H = u, q(K, function (a) {
                a(k.url(), u)
            })
        }
        var k = this,
            l = a.location,
            m = a.history,
            n = a.setTimeout,
            p = a.clearTimeout,
            r = {};
        k.isMock = !1;
        var J =
            0,
            O = [];
        k.$$completeOutstandingRequest = f;
        k.$$incOutstandingRequestCount = function () {
            J++
        };
        k.notifyWhenNoOutstandingRequests = function (a) {
            0 === J ? a() : O.push(a)
        };
        var u, H, U = l.href,
            t = b.find("base"),
            ia = null,
            A = c.history ? function () {
                try {
                    return m.state
                } catch (a) {}
            } : w;
        g();
        H = u;
        k.url = function (b, d, e) {
            x(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = H === e;
                if (U === b && (!c.history || f)) return k;
                var h = U && Ba(U) === Ba(b);
                U = b;
                H = e;
                !c.history || h && f ? (h || (ia = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"),
                    e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (ia = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), H = u);
                ia && (ia = b);
                return k
            }
            return ia || l.href.replace(/%27/g, "'")
        };
        k.state = function () {
            return u
        };
        var K = [],
            I = !1,
            B = null;
        k.onUrlChange = function (b) {
            if (!I) {
                if (c.history) D(a).on("popstate", e);
                D(a).on("hashchange", e);
                I = !0
            }
            K.push(b);
            return b
        };
        k.$$applicationDestroyed = function () {
            D(a).off("hashchange popstate", e)
        };
        k.$$checkUrlChange = h;
        k.baseHref = function () {
            var a = t.attr("href");
            return a ? a.replace(/^(https?:)?\/\/[^/]*/,
                "") : ""
        };
        k.defer = function (a, b) {
            var c;
            J++;
            c = n(function () {
                delete r[c];
                f(a)
            }, b || 0);
            r[c] = !0;
            return c
        };
        k.defer.cancel = function (a) {
            return r[a] ? (delete r[a], p(a), f(w), !0) : !1
        }
    }

    function pf() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new kg(a, c, b, d)
        }]
    }

    function qf() {
        this.$get = function () {
            function a(a, c) {
                function f(a) {
                    a !== n && (p ? p === a && (p = a.n) : p = a, e(a.n, a.p), e(a, n), n = a, n.n = null)
                }

                function e(a, b) {
                    a !== b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw M("$cacheFactory")("iid", a);
                var g = 0,
                    h =
                    R({}, c, {
                        id: a
                    }),
                    k = W(),
                    l = c && c.capacity || Number.MAX_VALUE,
                    m = W(),
                    n = null,
                    p = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!x(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {
                                    key: a
                                });
                                f(c)
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(p.key);
                            return b
                        }
                    },
                    get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            f(b)
                        }
                        return k[a]
                    },
                    remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b === n && (n = b.p);
                            b === p && (p = b.n);
                            e(b.n, b.p);
                            delete m[a]
                        }
                        a in k && (delete k[a], g--)
                    },
                    removeAll: function () {
                        k = W();
                        g = 0;
                        m = W();
                        n = p = null
                    },
                    destroy: function () {
                        m =
                            h = k = null;
                        delete b[a]
                    },
                    info: function () {
                        return R({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            a.info = function () {
                var a = {};
                q(b, function (b, f) {
                    a[f] = b.info()
                });
                return a
            };
            a.get = function (a) {
                return b[a]
            };
            return a
        }
    }

    function Nf() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Qc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = W();
            q(a, function (a, f) {
                if (a in n) e[f] = n[a];
                else {
                    var g = a.match(d);
                    if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {
                        mode: g[1][0],
                        collection: "*" === g[2],
                        optional: "?" === g[3],
                        attrName: g[4] || f
                    };
                    g[4] && (n[a] = e[f])
                }
            });
            return e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== P(b)) throw ea("baddir", a);
            if (a !== a.trim()) throw ea("baddir", a);
        }

        function f(a) {
            var b = a.require || a.controller && a.name;
            !C(b) && F(b) && q(b, function (a, c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c)
            });
            return b
        }
        var e = {},
            g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
            h = /(([\w-]+)(?::([^;]+))?;?)/,
            k = me("ngSrc,ngSrcset,src,srcset"),
            l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            m = /^(on[a-z]+|formaction)$/,
            n = W();
        this.directive = function U(b, d) {
            fb(b, "name");
            Pa(b, "directive");
            E(b) ? (c(b), fb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                q(e[b], function (e, g) {
                    try {
                        var h = a.invoke(e);
                        y(h) ? h = {
                            compile: ma(h)
                        } : !h.compile && h.link && (h.compile = ma(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = f(h);
                        var k = h,
                            l = h.restrict;
                        if (l && (!E(l) || !/[EACM]/.test(l))) throw ea("badrestrict", l, b);
                        k.restrict =
                            l || "EA";
                        h.$$moduleName = e.$$moduleName;
                        d.push(h)
                    } catch (m) {
                        c(m)
                    }
                });
                return d
            }])), e[b].push(d)) : q(b, Fc(U));
            return this
        };
        this.component = function (a, b) {
            function c(a) {
                function e(b) {
                    return y(b) || C(b) ? function (c, d) {
                        return a.invoke(b, this, {
                            $element: c,
                            $attrs: d
                        })
                    } : b
                }
                var f = b.template || b.templateUrl ? b.template : "",
                    g = {
                        controller: d,
                        controllerAs: lg(b.controller) || b.controllerAs || "$ctrl",
                        template: e(f),
                        templateUrl: e(b.templateUrl),
                        transclude: b.transclude,
                        scope: {},
                        bindToController: b.bindings || {},
                        restrict: "E",
                        require: b.require
                    };
                q(b, function (a, b) {
                    "$" === b.charAt(0) && (g[b] = a)
                });
                return g
            }
            var d = b.controller || function () {};
            q(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a, y(d) && (d[b] = a))
            });
            c.$inject = ["$injector"];
            return this.directive(a, c)
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
        };
        var p = !0;
        this.debugInfoEnabled = function (a) {
            return v(a) ?
                (p = a, this) : p
        };
        var r = !1;
        this.preAssignBindingsEnabled = function (a) {
            return v(a) ? (r = a, this) : r
        };
        var J = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (J = a, this) : J
        };
        var O = !0;
        this.commentDirectivesEnabled = function (a) {
            return arguments.length ? (O = a, this) : O
        };
        var u = !0;
        this.cssClassDirectivesEnabled = function (a) {
            return arguments.length ? (u = a, this) : u
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a,
            b, c, f, n, I, B, L, N, G) {
            function T() {
                try {
                    if (!--za) throw da = void 0, ea("infchng", J);
                    B.$apply(function () {
                        for (var a = [], b = 0, c = da.length; b < c; ++b) try {
                            da[b]()
                        } catch (d) {
                            a.push(d)
                        }
                        da = void 0;
                        if (a.length) throw a;
                    })
                } finally {
                    za++
                }
            }

            function s(a, b) {
                if (b) {
                    var c = Object.keys(b),
                        d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            }

            function Q(a, b, c) {
                ua.innerHTML = "<span " + b + ">";
                b = ua.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name);
                d.value = c;
                a.attributes.setNamedItem(d)
            }

            function Ma(a,
                b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function ba(a, b, c, d, e) {
                a instanceof D || (a = D(a));
                var f = Na(a, b, a, c, d, e);
                ba.$$addScopeClass(a);
                var g = null;
                return function (b, c, d) {
                    if (!a) throw ea("multilink");
                    fb(b, "scope");
                    e && e.needsNewScope && (b = b.$parent.$new());
                    d = d || {};
                    var h = d.parentBoundTranscludeFn,
                        k = d.transcludeControllers;
                    d = d.futureParentElement;
                    h && h.$$boundTransclude && (h = h.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== xa(d) && na.call(d).match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? D(ha(g, D("<div>").append(a).html())) :
                        c ? Oa.clone.call(a) : a;
                    if (k)
                        for (var l in k) d.data("$" + l + "Controller", k[l].instance);
                    ba.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, h);
                    c || (a = f = null);
                    return d
                }
            }

            function Na(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, n, p, r;
                    if (K)
                        for (r = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], r[f] = c[f];
                    else r = c;
                    m = 0;
                    for (n = h.length; m < n;) k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ba.$$addScopeInfo(D(k), l)) : l = a, p = c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null, c(f, l,
                        k, d, p)) : f && f(a, k.childNodes, void 0, e)
                }
                for (var h = [], k = C(a) || a instanceof D, l, m, n, p, K, r = 0; r < a.length; r++) {
                    l = new s;
                    11 === La && M(a, r, k);
                    m = fc(a[r], [], l, 0 === r ? d : void 0, e);
                    (f = m.length ? X(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Na(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l) h.push(r, f, l), p = !0, K = K || f;
                    f = null
                }
                return p ? g : null
            }

            function M(a, b, c) {
                var d = a[b],
                    e = d.parentNode,
                    f;
                if (d.nodeType ===
                    Ja)
                    for (;;) {
                        f = e ? d.nextSibling : a[b + 1];
                        if (!f || f.nodeType !== Ja) break;
                        d.nodeValue += f.nodeValue;
                        f.parentNode && f.parentNode.removeChild(f);
                        c && f === a[b + 1] && a.splice(b + 1, 1)
                    }
            }

            function ja(a, b, c) {
                function d(e, f, g, h, k) {
                    e || (e = a.$new(!1, k), e.$$transcluded = !0);
                    return b(e, f, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: g,
                        futureParentElement: h
                    })
                }
                var e = d.$$slots = W(),
                    f;
                for (f in b.$$slots) e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;
                return d
            }

            function fc(a, b, c, d, e) {
                var f = c.$attr,
                    g;
                switch (a.nodeType) {
                    case 1:
                        g = xa(a);
                        Y(b,
                            Ca(g), "E", d, e);
                        for (var k, l, m, n, p = a.attributes, K = 0, r = p && p.length; K < r; K++) {
                            var A = !1,
                                B = !1;
                            k = p[K];
                            l = k.name;
                            m = k.value;
                            k = Ca(l);
                            (n = Ha.test(k)) && (l = l.replace(gd, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            }));
                            (k = k.match(Ka)) && Z(k[1]) && (A = l, B = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = Ca(l.toLowerCase());
                            f[k] = l;
                            if (n || !c.hasOwnProperty(k)) c[k] = m, dd(a, k) && (c[k] = !0);
                            ra(a, b, m, k, n);
                            Y(b, k, "A", d, e, A, B)
                        }
                        "input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete",
                            "off");
                        if (!Ga) break;
                        f = a.className;
                        F(f) && (f = f.animVal);
                        if (E(f) && "" !== f)
                            for (; a = h.exec(f);) k = Ca(a[2]), Y(b, k, "C", d, e) && (c[k] = S(a[3])), f = f.substr(a.index + a[0].length);
                        break;
                    case Ja:
                        ma(b, a.nodeValue);
                        break;
                    case 8:
                        if (!Fa) break;
                        kb(a, b, c, d, e)
                }
                b.sort(ka);
                return b
            }

            function kb(a, b, c, d, e) {
                try {
                    var f = g.exec(a.nodeValue);
                    if (f) {
                        var h = Ca(f[1]);
                        Y(b, h, "M", d, e) && (c[h] = S(f[2]))
                    }
                } catch (k) {}
            }

            function hd(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ea("uterdir", b, c);
                        1 === a.nodeType && (a.hasAttribute(b) &&
                            e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return D(d)
            }

            function id(a, b, c) {
                return function (d, e, f, g, h) {
                    e = hd(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function gc(a, b, c, d, e, f) {
                var g;
                return a ? ba(b, c, d, e, f) : function () {
                    g || (g = ba(b, c, d, e, f), b = c = f = null);
                    return g.apply(this, arguments)
                }
            }

            function X(a, b, d, e, f, g, h, k, l) {
                function m(a, b, c, d) {
                    if (a) {
                        c && (a = id(a, c, d));
                        a.require = t.require;
                        a.directiveName = L;
                        if (B === t || t.$$isolateScope) a = sa(a, {
                            isolateScope: !0
                        });
                        h.push(a)
                    }
                    if (b) {
                        c && (b = id(b, c, d));
                        b.require =
                            t.require;
                        b.directiveName = L;
                        if (B === t || t.$$isolateScope) b = sa(b, {
                            isolateScope: !0
                        });
                        k.push(b)
                    }
                }

                function n(a, e, f, g, l) {
                    function m(a, b, c, d) {
                        var e;
                        Za(a) || (d = c, c = b, b = a, a = void 0);
                        U && (e = N);
                        c || (c = U ? L.parent() : L);
                        if (d) {
                            var f = l.$$slots[d];
                            if (f) return f(a, b, e, c, Q);
                            if (x(f)) throw ea("noslot", d, ya(L));
                        } else return l(a, b, e, c, Q)
                    }
                    var p, t, u, G, J, N, T, L;
                    b === f ? (g = d, L = d.$$element) : (L = D(f), g = new s(L, d));
                    J = e;
                    B ? G = e.$new(!0) : K && (J = e.$parent);
                    l && (T = m, T.$$boundTransclude = l, T.isSlotFilled = function (a) {
                        return !!l.$$slots[a]
                    });
                    A && (N =
                        ca(L, g, T, A, G, e, B));
                    B && (ba.$$addScopeInfo(L, G, !0, !(I && (I === B || I === B.$$originalDirective))), ba.$$addScopeClass(L, !0), G.$$isolateBindings = B.$$isolateBindings, t = oa(e, g, G, G.$$isolateBindings, B), t.removeWatches && G.$on("$destroy", t.removeWatches));
                    for (p in N) {
                        t = A[p];
                        u = N[p];
                        var Hb = t.$$bindings.bindToController;
                        if (r) {
                            u.bindingInfo = Hb ? oa(J, g, u.instance, Hb, t) : {};
                            var O = u();
                            O !== u.instance && (u.instance = O, L.data("$" + t.name + "Controller", O), u.bindingInfo.removeWatches && u.bindingInfo.removeWatches(), u.bindingInfo =
                                oa(J, g, u.instance, Hb, t))
                        } else u.instance = u(), L.data("$" + t.name + "Controller", u.instance), u.bindingInfo = oa(J, g, u.instance, Hb, t)
                    }
                    q(A, function (a, b) {
                        var c = a.require;
                        a.bindToController && !C(c) && F(c) && R(N[b].instance, V(b, c, L, N))
                    });
                    q(N, function (a) {
                        var b = a.instance;
                        if (y(b.$onChanges)) try {
                            b.$onChanges(a.bindingInfo.initialChanges)
                        } catch (d) {
                            c(d)
                        }
                        if (y(b.$onInit)) try {
                            b.$onInit()
                        } catch (e) {
                            c(e)
                        }
                        y(b.$doCheck) && (J.$watch(function () {
                            b.$doCheck()
                        }), b.$doCheck());
                        y(b.$onDestroy) && J.$on("$destroy", function () {
                            b.$onDestroy()
                        })
                    });
                    p = 0;
                    for (t = h.length; p < t; p++) u = h[p], ta(u, u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
                    var Q = e;
                    B && (B.template || null === B.templateUrl) && (Q = G);
                    a && a(Q, f.childNodes, void 0, l);
                    for (p = k.length - 1; 0 <= p; p--) u = k[p], ta(u, u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
                    q(N, function (a) {
                        a = a.instance;
                        y(a.$postLink) && a.$postLink()
                    })
                }
                l = l || {};
                for (var p = -Number.MAX_VALUE, K = l.newScopeDirective, A = l.controllerDirectives, B = l.newIsolateScopeDirective, I = l.templateDirective, u = l.nonTlbTranscludeDirective,
                        J = !1, N = !1, U = l.hasElementTranscludeDirective, G = d.$$element = D(b), t, L, T, O = e, Q, v = !1, Ma = !1, w, z = 0, E = a.length; z < E; z++) {
                    t = a[z];
                    var Na = t.$$start,
                        M = t.$$end;
                    Na && (G = hd(b, Na, M));
                    T = void 0;
                    if (p > t.priority) break;
                    if (w = t.scope) t.templateUrl || (F(w) ? ($("new/isolated scope", B || K, t, G), B = t) : $("new/isolated scope", B, t, G)), K = K || t;
                    L = t.name;
                    if (!v && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
                        for (w = z + 1; v = a[w++];)
                            if (v.transclude && !v.$$tlb || v.replace && (v.templateUrl || v.template)) {
                                Ma = !0;
                                break
                            } v = !0
                    }!t.templateUrl &&
                        t.controller && (A = A || W(), $("'" + L + "' controller", A[L], t, G), A[L] = t);
                    if (w = t.transclude)
                        if (J = !0, t.$$tlb || ($("transclusion", u, t, G), u = t), "element" === w) U = !0, p = t.priority, T = G, G = d.$$element = D(ba.$$createComment(L, d[L])), b = G[0], la(f, wa.call(T, 0), b), T[0].$$parentNode = T[0].parentNode, O = gc(Ma, T, e, p, g && g.name, {
                            nonTlbTranscludeDirective: u
                        });
                        else {
                            var ja = W();
                            if (F(w)) {
                                T = [];
                                var P = W(),
                                    kb = W();
                                q(w, function (a, b) {
                                    var c = "?" === a.charAt(0);
                                    a = c ? a.substring(1) : a;
                                    P[a] = b;
                                    ja[b] = null;
                                    kb[b] = c
                                });
                                q(G.contents(), function (a) {
                                    var b = P[Ca(xa(a))];
                                    b ? (kb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : T.push(a)
                                });
                                q(kb, function (a, b) {
                                    if (!a) throw ea("reqslot", b);
                                });
                                for (var ec in ja) ja[ec] && (ja[ec] = gc(Ma, ja[ec], e))
                            } else T = D(cc(b)).contents();
                            G.empty();
                            O = gc(Ma, T, e, void 0, void 0, {
                                needsNewScope: t.$$isolateScope || t.$$newScope
                            });
                            O.$$slots = ja
                        } if (t.template)
                        if (N = !0, $("template", I, t, G), I = t, w = y(t.template) ? t.template(G, d) : t.template, w = Ea(w), t.replace) {
                            g = t;
                            T = $b.test(w) ? jd(ha(t.templateNamespace, S(w))) : [];
                            b = T[0];
                            if (1 !== T.length || 1 !== b.nodeType) throw ea("tplrt", L, "");
                            la(f, G, b);
                            E = {
                                $attr: {}
                            };
                            w = fc(b, [], E);
                            var Y = a.splice(z + 1, a.length - (z + 1));
                            (B || K) && aa(w, B, K);
                            a = a.concat(w).concat(Y);
                            fa(d, E);
                            E = a.length
                        } else G.html(w);
                    if (t.templateUrl) N = !0, $("template", I, t, G), I = t, t.replace && (g = t), n = ga(a.splice(z, a.length - z), G, d, f, J && O, h, k, {
                        controllerDirectives: A,
                        newScopeDirective: K !== t && K,
                        newIsolateScopeDirective: B,
                        templateDirective: I,
                        nonTlbTranscludeDirective: u
                    }), E = a.length;
                    else if (t.compile) try {
                        Q = t.compile(G, d, O);
                        var Z = t.$$originalDirective || t;
                        y(Q) ? m(null, bb(Z, Q), Na, M) : Q && m(bb(Z, Q.pre),
                            bb(Z, Q.post), Na, M)
                    } catch (da) {
                        c(da, ya(G))
                    }
                    t.terminal && (n.terminal = !0, p = Math.max(p, t.priority))
                }
                n.scope = K && !0 === K.scope;
                n.transcludeOnThisElement = J;
                n.templateOnThisElement = N;
                n.transclude = O;
                l.hasElementTranscludeDirective = U;
                return n
            }

            function V(a, b, c, d) {
                var e;
                if (E(b)) {
                    var f = b.match(l);
                    b = b.substring(f[0].length);
                    var g = f[1] || f[3],
                        f = "?" === f[2];
                    "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                    if (!e) {
                        var h = "$" + b + "Controller";
                        e = g ? c.inheritedData(h) : c.data(h)
                    }
                    if (!e && !f) throw ea("ctreq", b, a);
                } else if (C(b))
                    for (e = [], g = 0, f = b.length; g < f; g++) e[g] = V(a, b[g], c, d);
                else F(b) && (e = {}, q(b, function (b, f) {
                    e[f] = V(a, b, c, d)
                }));
                return e || null
            }

            function ca(a, b, c, d, e, f, g) {
                var h = W(),
                    k;
                for (k in d) {
                    var l = d[k],
                        m = {
                            $scope: l === g || l.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        },
                        n = l.controller;
                    "@" === n && (n = b[l.name]);
                    m = I(n, m, !0, l.controllerAs);
                    h[l.name] = m;
                    a.data("$" + l.name + "Controller", m.instance)
                }
                return h
            }

            function aa(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d] = Ub(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                })
            }

            function Y(b, c, f, g, h, k, l) {
                if (c ===
                    h) return null;
                var m = null;
                if (e.hasOwnProperty(c)) {
                    h = a.get(c + "Directive");
                    for (var n = 0, p = h.length; n < p; n++)
                        if (c = h[n], (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(f)) {
                            k && (c = Ub(c, {
                                $$start: k,
                                $$end: l
                            }));
                            if (!c.$$bindings) {
                                var K = m = c,
                                    r = c.name,
                                    A = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                F(K.scope) && (!0 === K.bindToController ? (A.bindToController = d(K.scope, r, !0), A.isolateScope = {}) : A.isolateScope = d(K.scope, r, !1));
                                F(K.bindToController) && (A.bindToController = d(K.bindToController, r, !0));
                                if (A.bindToController && !K.controller) throw ea("noctrl",
                                    r);
                                m = m.$$bindings = A;
                                F(m.isolateScope) && (c.$$isolateBindings = m.isolateScope)
                            }
                            b.push(c);
                            m = c
                        }
                }
                return m
            }

            function Z(b) {
                if (e.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)
                        if (b = c[d], b.multiElement) return !0;
                return !1
            }

            function fa(a, b) {
                var c = b.$attr,
                    d = a.$attr;
                q(a, function (d, e) {
                    "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]))
                });
                q(b, function (b, e) {
                    a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]))
                })
            }

            function ga(a, b, d, e, g, h, k, l) {
                var m = [],
                    n, p, K = b[0],
                    r = a.shift(),
                    u = Ub(r, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: r
                    }),
                    t = y(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl,
                    B = r.templateNamespace;
                b.empty();
                f(t).then(function (c) {
                    var f, A;
                    c = Ea(c);
                    if (r.replace) {
                        c = $b.test(c) ? jd(ha(B, S(c))) : [];
                        f = c[0];
                        if (1 !== c.length || 1 !== f.nodeType) throw ea("tplrt", r.name, t);
                        c = {
                            $attr: {}
                        };
                        la(e, b, f);
                        var I = fc(f, [], c);
                        F(r.scope) && aa(I, !0);
                        a = I.concat(a);
                        fa(d, c)
                    } else f = K, b.html(c);
                    a.unshift(u);
                    n = X(a, f, d, g, b,
                        r, h, k, l);
                    q(e, function (a, c) {
                        a === f && (e[c] = b[0])
                    });
                    for (p = Na(b[0].childNodes, g); m.length;) {
                        c = m.shift();
                        A = m.shift();
                        var G = m.shift(),
                            J = m.shift(),
                            I = b[0];
                        if (!c.$$destroyed) {
                            if (A !== K) {
                                var N = A.className;
                                l.hasElementTranscludeDirective && r.replace || (I = cc(f));
                                la(G, D(A), I);
                                Ma(D(I), N)
                            }
                            A = n.transcludeOnThisElement ? ja(c, n.transclude, J) : J;
                            n(p, c, I, e, A)
                        }
                    }
                    m = null
                }).catch(function (a) {
                    a instanceof Error && c(a)
                }).catch(w);
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude,
                        e)), n(p, b, c, d, a)))
                }
            }

            function ka(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function $(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }
                if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
            }

            function ma(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && ba.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || ba.$$addBindingClass(e);
                            ba.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function ha(a, b) {
                a = P(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = z.document.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function pa(a, b) {
                if ("srcdoc" === b) return L.HTML;
                var c = xa(a);
                if ("src" === b || "ngSrc" === b) {
                    if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return L.RESOURCE_URL
                } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return L.RESOURCE_URL
            }

            function ra(a,
                c, d, e, f) {
                var g = pa(a, e),
                    h = k[e] || f,
                    l = b(d, !f, g, h);
                if (l) {
                    if ("multiple" === e && "select" === xa(a)) throw ea("selmulti", ya(a));
                    if (m.test(e)) throw ea("nodomevents");
                    c.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (a, c, f) {
                                    c = f.$$observers || (f.$$observers = W());
                                    var k = f[e];
                                    k !== d && (l = k && b(k, !0, g, h), d = k);
                                    l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                                        "class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function la(a, b, c) {
                var d = b[0],
                    e =
                    b.length,
                    f = d.parentNode,
                    g, h;
                if (a)
                    for (g = 0, h = a.length; g < h; g++)
                        if (a[g] === d) {
                            a[g++] = c;
                            h = g + e - 1;
                            for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        } f && f.replaceChild(c, d);
                a = z.document.createDocumentFragment();
                for (g = 0; g < e; g++) a.appendChild(b[g]);
                D.hasData(d) && (D.data(c, D.data(d)), D(d).off("$destroy"));
                D.cleanData(a.querySelectorAll("*"));
                for (g = 1; g < e; g++) delete b[g];
                b[0] = c;
                b.length = 1
            }

            function sa(a, b) {
                return R(function () {
                        return a.apply(null, arguments)
                    },
                    a, b)
            }

            function ta(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, ya(d))
                }
            }

            function oa(a, c, d, e, f) {
                function g(b, c, e) {
                    !y(d.$onChanges) || c === e || c !== c && e !== e || (da || (a.$$postDigest(T), da = []), m || (m = {}, da.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Ib(e, c))
                }

                function h() {
                    d.$onChanges(m);
                    m = void 0
                }
                var k = [],
                    l = {},
                    m;
                q(e, function (e, h) {
                    var m = e.attrName,
                        p = e.optional,
                        r, A, u, B;
                    switch (e.mode) {
                        case "@":
                            p || va.call(c, m) || (d[h] = c[m] = void 0);
                            p = c.$observe(m, function (a) {
                                if (E(a) || Ia(a)) g(h, a, d[h]), d[h] = a
                            });
                            c.$$observers[m].$$scope =
                                a;
                            r = c[m];
                            E(r) ? d[h] = b(r)(a) : Ia(r) && (d[h] = r);
                            l[h] = new Ib(hc, d[h]);
                            k.push(p);
                            break;
                        case "=":
                            if (!va.call(c, m)) {
                                if (p) break;
                                c[m] = void 0
                            }
                            if (p && !c[m]) break;
                            A = n(c[m]);
                            B = A.literal ? qa : function (a, b) {
                                return a === b || a !== a && b !== b
                            };
                            u = A.assign || function () {
                                r = d[h] = A(a);
                                throw ea("nonassign", c[m], m, f.name);
                            };
                            r = d[h] = A(a);
                            p = function (b) {
                                B(b, d[h]) || (B(b, r) ? u(a, b = d[h]) : d[h] = b);
                                return r = b
                            };
                            p.$stateful = !0;
                            p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, A.literal);
                            k.push(p);
                            break;
                        case "<":
                            if (!va.call(c, m)) {
                                if (p) break;
                                c[m] = void 0
                            }
                            if (p && !c[m]) break;
                            A = n(c[m]);
                            var I = A.literal,
                                G = d[h] = A(a);
                            l[h] = new Ib(hc, d[h]);
                            p = a.$watch(A, function (a, b) {
                                if (b === a) {
                                    if (b === G || I && qa(b, G)) return;
                                    b = G
                                }
                                g(h, a, b);
                                d[h] = a
                            }, I);
                            k.push(p);
                            break;
                        case "&":
                            A = c.hasOwnProperty(m) ? n(c[m]) : w;
                            if (A === w && p) break;
                            d[h] = function (b) {
                                return A(a, b)
                            }
                    }
                });
                return {
                    initialChanges: l,
                    removeWatches: k.length && function () {
                        for (var a = 0, b = k.length; a < b; ++a) k[a]()
                    }
                }
            }
            var Da = /^\w/,
                ua = z.document.createElement("div"),
                Fa = O,
                Ga = u,
                za = J,
                da;
            s.prototype = {
                $normalize: Ca,
                $addClass: function (a) {
                    a &&
                        0 < a.length && N.addClass(this.$$element, a)
                },
                $removeClass: function (a) {
                    a && 0 < a.length && N.removeClass(this.$$element, a)
                },
                $updateClass: function (a, b) {
                    var c = kd(a, b);
                    c && c.length && N.addClass(this.$$element, c);
                    (c = kd(b, a)) && c.length && N.removeClass(this.$$element, c)
                },
                $set: function (a, b, d, e) {
                    var f = dd(this.$$element[0], a),
                        g = ld[a],
                        h = a;
                    f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Nc(a, "-"));
                    f = xa(this.$$element);
                    if ("a" === f && ("href" === a || "xlinkHref" ===
                            a) || "img" === f && "src" === a) this[a] = b = G(b, "src" === a);
                    else if ("img" === f && "srcset" === a && v(b)) {
                        for (var f = "", g = S(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l,
                            f = f + G(S(g[m]), !0),
                            f = f + (" " + S(g[m + 1]));
                        g = S(g[2 * l]).split(/\s/);
                        f += G(S(g[0]), !0);
                        2 === g.length && (f += " " + S(g[1]));
                        this[a] = b = f
                    }!1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Da.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));
                    (a = this.$$observers) && q(a[h], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                },
                $observe: function (a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = W()),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    B.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a])
                    });
                    return function () {
                        $a(e, b)
                    }
                }
            };
            var Aa = b.startSymbol(),
                Ba = b.endSymbol(),
                Ea = "{{" === Aa && "}}" === Ba ? Ya : function (a) {
                    return a.replace(/\{\{/g, Aa).replace(/}}/g, Ba)
                },
                Ha = /^ngAttr[A-Z]/,
                Ka = /^(.+)Start$/;
            ba.$$addBindingInfo = p ? function (a, b) {
                var c = a.data("$binding") || [];
                C(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : w;
            ba.$$addBindingClass =
                p ? function (a) {
                    Ma(a, "ng-binding")
                } : w;
            ba.$$addScopeInfo = p ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : w;
            ba.$$addScopeClass = p ? function (a, b) {
                Ma(a, b ? "ng-isolate-scope" : "ng-scope")
            } : w;
            ba.$$createComment = function (a, b) {
                var c = "";
                p && (c = " " + (a || "") + ": ", b && (c += b + " "));
                return z.document.createComment(c)
            };
            return ba
        }]
    }

    function Ib(a, b) {
        this.previousValue = a;
        this.currentValue = b
    }

    function Ca(a) {
        return a.replace(gd, "").replace(mg, gb)
    }

    function kd(a, b) {
        var d = "",
            c = a.split(/\s+/),
            f = b.split(/\s+/),
            e = 0;
        a: for (; e < c.length; e++) {
            for (var g = c[e], h = 0; h < f.length; h++)
                if (g === f[h]) continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function jd(a) {
        a = D(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) {
            var d = a[b];
            (8 === d.nodeType || d.nodeType === Ja && "" === d.nodeValue.trim()) && ng.call(a, b, 1)
        }
        return a
    }

    function lg(a, b) {
        if (b && E(b)) return b;
        if (E(a)) {
            var d = md.exec(a);
            if (d) return d[3]
        }
    }

    function rf() {
        var a = {},
            b = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b)
        };
        this.register = function (b, c) {
            Pa(b, "controller");
            F(b) ?
                R(a, b) : a[b] = c
        };
        this.allowGlobals = function () {
            b = !0
        };
        this.$get = ["$injector", "$window", function (d, c) {
            function f(a, b, c, d) {
                if (!a || !F(a.$scope)) throw M("$controller")("noscp", d, b);
                a.$scope[b] = c
            }
            return function (e, g, h, k) {
                var l, m, n;
                h = !0 === h;
                k && E(k) && (n = k);
                if (E(e)) {
                    k = e.match(md);
                    if (!k) throw nd("ctrlfmt", e);
                    m = k[1];
                    n = n || k[3];
                    e = a.hasOwnProperty(m) ? a[m] : Pc(g.$scope, m, !0) || (b ? Pc(c, m, !0) : void 0);
                    if (!e) throw nd("ctrlreg", m);
                    tb(e, m, !0)
                }
                if (h) return h = (C(e) ? e[e.length - 1] : e).prototype, l = Object.create(h || null), n && f(g, n,
                    l, m || e.name), R(function () {
                    var a = d.invoke(e, l, g, m);
                    a !== l && (F(a) || y(a)) && (l = a, n && f(g, n, l, m || e.name));
                    return l
                }, {
                    instance: l,
                    identifier: n
                });
                l = d.instantiate(e, g, m);
                n && f(g, n, l, m || e.name);
                return l
            }
        }]
    }

    function sf() {
        this.$get = ["$window", function (a) {
            return D(a.document)
        }]
    }

    function tf() {
        this.$get = ["$document", "$rootScope", function (a, b) {
            function d() {
                f = c.hidden
            }
            var c = a[0],
                f = c && c.hidden;
            a.on("visibilitychange", d);
            b.$on("$destroy", function () {
                a.off("visibilitychange", d)
            });
            return function () {
                return f
            }
        }]
    }

    function uf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function ic(a) {
        return F(a) ? fa(a) ? a.toISOString() : cb(a) : a
    }

    function zf() {
        this.$get = function () {
            return function (a) {
                if (!a) return "";
                var b = [];
                Ec(a, function (a, c) {
                    null === a || x(a) || (C(a) ? q(a, function (a) {
                        b.push(ka(c) + "=" + ka(ic(a)))
                    }) : b.push(ka(c) + "=" + ka(ic(a))))
                });
                return b.join("&")
            }
        }
    }

    function Af() {
        this.$get = function () {
            return function (a) {
                function b(a, f, e) {
                    null === a || x(a) || (C(a) ? q(a, function (a, c) {
                        b(a, f + "[" + (F(a) ? c : "") + "]")
                    }) : F(a) && !fa(a) ? Ec(a,
                        function (a, c) {
                            b(a, f + (e ? "" : "[") + c + (e ? "" : "]"))
                        }) : d.push(ka(f) + "=" + ka(ic(a))))
                }
                if (!a) return "";
                var d = [];
                b(a, "", !0);
                return d.join("&")
            }
        }
    }

    function jc(a, b) {
        if (E(a)) {
            var d = a.replace(og, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(od)) || (c = (c = d.match(pg)) && qg[c[0]].test(d));
                c && (a = Ic(d))
            }
        }
        return a
    }

    function pd(a) {
        var b = W(),
            d;
        E(a) ? q(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var f = P(S(a.substr(0, d)));
            a = S(a.substr(d + 1));
            f && (b[f] = b[f] ? b[f] + ", " + a : a)
        }) : F(a) && q(a, function (a, d) {
            var e = P(d),
                g = S(a);
            e &&
                (b[e] = b[e] ? b[e] + ", " + g : g)
        });
        return b
    }

    function qd(a) {
        var b;
        return function (d) {
            b || (b = pd(a));
            return d ? (d = b[P(d)], void 0 === d && (d = null), d) : b
        }
    }

    function rd(a, b, d, c) {
        if (y(c)) return c(a, b, d);
        q(c, function (c) {
            a = c(a, b, d)
        });
        return a
    }

    function yf() {
        var a = this.defaults = {
                transformResponse: [jc],
                transformRequest: [function (a) {
                    return F(a) && "[object File]" !== na.call(a) && "[object Blob]" !== na.call(a) && "[object FormData]" !== na.call(a) ? cb(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: ra(kc),
                    put: ra(kc),
                    patch: ra(kc)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer",
                jsonpCallbackParam: "callback"
            },
            b = !1;
        this.useApplyAsync = function (a) {
            return v(a) ? (b = !!a, this) : b
        };
        var d = this.interceptors = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, f, e, g, h, k, l, m) {
            function n(b) {
                function d(a, b) {
                    for (var c = 0, e = b.length; c < e;) {
                        var f = b[c++],
                            g = b[c++];
                        a = a.then(f, g)
                    }
                    b.length = 0;
                    return a
                }

                function e(a, b) {
                    var c,
                        d = {};
                    q(a, function (a, e) {
                        y(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    });
                    return d
                }

                function f(a) {
                    var b = R({}, a);
                    b.data = rd(a.data, a.headers, a.status, g.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 > a ? b : k.reject(b)
                }
                if (!F(b)) throw M("$http")("badreq", b);
                if (!E(m.valueOf(b.url))) throw M("$http")("badreq", b.url);
                var g = R({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer,
                    jsonpCallbackParam: a.jsonpCallbackParam
                }, b);
                g.headers = function (b) {
                    var c =
                        a.headers,
                        d = R({}, b.headers),
                        f, g, h, c = R({}, c.common, c[P(b.method)]);
                    a: for (f in c) {
                        g = P(f);
                        for (h in d)
                            if (P(h) === g) continue a;
                        d[f] = c[f]
                    }
                    return e(d, ra(b))
                }(b);
                g.method = vb(g.method);
                g.paramSerializer = E(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;
                c.$$incOutstandingRequestCount();
                var h = [],
                    n = [];
                b = k.resolve(g);
                q(u, function (a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && n.push(a.response, a.responseError)
                });
                b = d(b, h);
                b = b.then(function (b) {
                    var c =
                        b.headers,
                        d = rd(b.data, qd(c), void 0, b.transformRequest);
                    x(d) && q(c, function (a, b) {
                        "content-type" === P(b) && delete c[b]
                    });
                    x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return p(b, d).then(f, f)
                });
                b = d(b, n);
                return b = b.finally(function () {
                    c.$$completeOutstandingRequest(w)
                })
            }

            function p(c, d) {
                function g(a) {
                    if (a) {
                        var c = {};
                        q(a, function (a, d) {
                            c[d] = function (c) {
                                function d() {
                                    a(c)
                                }
                                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d)
                            }
                        });
                        return c
                    }
                }

                function l(a, c, d, e) {
                    function f() {
                        p(c, a, d, e)
                    }
                    N &&
                        (200 <= a && 300 > a ? N.put(Q, [a, c, pd(d), e]) : N.remove(Q));
                    b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
                }

                function p(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? B.resolve : B.reject)({
                        data: a,
                        status: b,
                        headers: qd(d),
                        config: c,
                        statusText: e
                    })
                }

                function K(a) {
                    p(a.data, a.status, ra(a.headers()), a.statusText)
                }

                function u() {
                    var a = n.pendingRequests.indexOf(c); - 1 !== a && n.pendingRequests.splice(a, 1)
                }
                var B = k.defer(),
                    L = B.promise,
                    N, G, T = c.headers,
                    s = "jsonp" === P(c.method),
                    Q = c.url;
                s ? Q = m.getTrustedResourceUrl(Q) : E(Q) || (Q = m.valueOf(Q));
                Q = r(Q,
                    c.paramSerializer(c.params));
                s && (Q = J(Q, c.jsonpCallbackParam));
                n.pendingRequests.push(c);
                L.then(u, u);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = F(c.cache) ? c.cache : F(a.cache) ? a.cache : O);
                N && (G = N.get(Q), v(G) ? G && y(G.then) ? G.then(K, K) : C(G) ? p(G[1], G[0], ra(G[2]), G[3]) : p(G, 200, {}, "OK") : N.put(Q, L));
                x(G) && ((G = sd(c.url) ? e()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (T[c.xsrfHeaderName || a.xsrfHeaderName] = G), f(c.method, Q, d, l, T, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers),
                    g(c.uploadEventHandlers)));
                return L
            }

            function r(a, b) {
                0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
                return a
            }

            function J(a, b) {
                if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw td("badjsonp", a);
                if ((new RegExp("[&?]" + b + "=")).test(a)) throw td("badjsonp", b, a);
                return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK"
            }
            var O = g("$http");
            a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var u = [];
            q(d, function (a) {
                u.unshift(E(a) ? l.get(a) : l.invoke(a))
            });
            n.pendingRequests = [];
            (function (a) {
                q(arguments,
                    function (a) {
                        n[a] = function (b, c) {
                            return n(R({}, c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                q(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(R({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            })("post", "put", "patch");
            n.defaults = a;
            return n
        }]
    }

    function Cf() {
        this.$get = function () {
            return function () {
                return new z.XMLHttpRequest
            }
        }
    }

    function Bf() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
            return rg(a, c, a.defer, b, d[0])
        }]
    }

    function rg(a, b, d, c, f) {
        function e(a,
            b, d) {
            a = a.replace("JSON_CALLBACK", b);
            var e = f.createElement("script"),
                m = null;
            e.type = "text/javascript";
            e.src = a;
            e.async = !0;
            m = function (a) {
                e.removeEventListener("load", m);
                e.removeEventListener("error", m);
                f.body.removeChild(e);
                e = null;
                var g = -1,
                    r = "unknown";
                a && ("load" !== a.type || c.wasCalled(b) || (a = {
                    type: "error"
                }), r = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, r)
            };
            e.addEventListener("load", m);
            e.addEventListener("error", m);
            f.body.appendChild(e);
            return m
        }
        return function (f, h, k, l, m, n, p, r, J, O) {
            function u() {
                U && U();
                t &&
                    t.abort()
            }
            h = h || a.url();
            if ("jsonp" === P(f)) var H = c.createCallback(h),
                U = e(h, H, function (a, b) {
                    var e = 200 === a && c.getResponse(H);
                    v(A) && d.cancel(A);
                    U = t = null;
                    l(a, e, "", b);
                    c.removeCallback(H)
                });
            else {
                var t = b(f, h);
                t.open(f, h, !0);
                q(m, function (a, b) {
                    v(a) && t.setRequestHeader(b, a)
                });
                t.onload = function () {
                    var a = t.statusText || "",
                        b = "response" in t ? t.response : t.responseText,
                        c = 1223 === t.status ? 204 : t.status;
                    0 === c && (c = b ? 200 : "file" === Da(h).protocol ? 404 : 0);
                    var e = t.getAllResponseHeaders();
                    v(A) && d.cancel(A);
                    U = t = null;
                    l(c, b, e, a)
                };
                f =
                    function () {
                        v(A) && d.cancel(A);
                        U = t = null;
                        l(-1, null, null, "")
                    };
                t.onerror = f;
                t.onabort = f;
                t.ontimeout = f;
                q(J, function (a, b) {
                    t.addEventListener(b, a)
                });
                q(O, function (a, b) {
                    t.upload.addEventListener(b, a)
                });
                p && (t.withCredentials = !0);
                if (r) try {
                    t.responseType = r
                } catch (s) {
                    if ("json" !== r) throw s;
                }
                t.send(x(k) ? null : k)
            }
            if (0 < n) var A = d(u, n);
            else n && y(n.then) && n.then(u)
        }
    }

    function wf() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.$get = ["$parse", "$exceptionHandler",
            "$sce",
            function (d, c, f) {
                function e(a) {
                    return "\\\\\\" + a
                }

                function g(c) {
                    return c.replace(n, a).replace(p, b)
                }

                function h(a, b, c, d) {
                    var e = a.$watch(function (a) {
                        e();
                        return d(a)
                    }, b, c);
                    return e
                }

                function k(e, k, n, p) {
                    function H(a) {
                        try {
                            var b = a;
                            a = n ? f.getTrusted(n, b) : f.valueOf(b);
                            return p && !v(a) ? a : Yb(a)
                        } catch (d) {
                            c(Ea.interr(e, d))
                        }
                    }
                    if (!e.length || -1 === e.indexOf(a)) {
                        var q;
                        k || (k = g(e), q = ma(k), q.exp = e, q.expressions = [], q.$$watchDelegate = h);
                        return q
                    }
                    p = !!p;
                    var t, s, A = 0,
                        K = [],
                        I = [];
                    q = e.length;
                    for (var B = [], L = []; A < q;)
                        if (-1 !== (t = e.indexOf(a,
                                A)) && -1 !== (s = e.indexOf(b, t + l))) A !== t && B.push(g(e.substring(A, t))), A = e.substring(t + l, s), K.push(A), I.push(d(A, H)), A = s + m, L.push(B.length), B.push("");
                        else {
                            A !== q && B.push(g(e.substring(A)));
                            break
                        } n && 1 < B.length && Ea.throwNoconcat(e);
                    if (!k || K.length) {
                        var N = function (a) {
                            for (var b = 0, c = K.length; b < c; b++) {
                                if (p && x(a[b])) return;
                                B[L[b]] = a[b]
                            }
                            return B.join("")
                        };
                        return R(function (a) {
                            var b = 0,
                                d = K.length,
                                f = Array(d);
                            try {
                                for (; b < d; b++) f[b] = I[b](a);
                                return N(f)
                            } catch (g) {
                                c(Ea.interr(e, g))
                            }
                        }, {
                            exp: e,
                            expressions: K,
                            $$watchDelegate: function (a,
                                b) {
                                var c;
                                return a.$watchGroup(I, function (d, e) {
                                    var f = N(d);
                                    y(b) && b.call(this, f, d !== e ? c : f, a);
                                    c = f
                                })
                            }
                        })
                    }
                }
                var l = a.length,
                    m = b.length,
                    n = new RegExp(a.replace(/./g, e), "g"),
                    p = new RegExp(b.replace(/./g, e), "g");
                k.startSymbol = function () {
                    return a
                };
                k.endSymbol = function () {
                    return b
                };
                return k
            }
        ]
    }

    function xf() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, f) {
            function e(e, k, l, m) {
                function n() {
                    p ? e.apply(null, r) : e(u)
                }
                var p = 4 < arguments.length,
                    r = p ? wa.call(arguments, 4) : [],
                    J = b.setInterval,
                    q = b.clearInterval,
                    u = 0,
                    H = v(m) && !m,
                    U = (H ? c : d).defer(),
                    t = U.promise;
                l = v(l) ? l : 0;
                t.$$intervalId = J(function () {
                    H ? f.defer(n) : a.$evalAsync(n);
                    U.notify(u++);
                    0 < l && u >= l && (U.resolve(u), q(t.$$intervalId), delete g[t.$$intervalId]);
                    H || a.$apply()
                }, k);
                g[t.$$intervalId] = U;
                return t
            }
            var g = {};
            e.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.catch(w), g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function lc(a) {
        a = a.split("/");
        for (var b = a.length; b--;) a[b] =
            db(a[b]);
        return a.join("/")
    }

    function ud(a, b) {
        var d = Da(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = Z(d.port) || sg[d.protocol] || null
    }

    function vd(a, b) {
        if (tg.test(a)) throw lb("badpath", a);
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = Da(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = Lc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function mc(a, b) {
        return a.slice(0, b.length) ===
            b
    }

    function sa(a, b) {
        if (mc(b, a)) return b.substr(a.length)
    }

    function Ba(a) {
        var b = a.indexOf("#");
        return -1 === b ? a : a.substr(0, b)
    }

    function mb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function nc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        ud(a, this);
        this.$$parse = function (a) {
            var d = sa(b, a);
            if (!E(d)) throw lb("ipthprfx", a, b);
            vd(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Xb(this.$$search),
                d = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b +
                this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (c, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var e, g;
            v(e = sa(a, c)) ? (g = e, g = d && v(e = sa(d, e)) ? b + (sa("/", e) || e) : a + g) : v(e = sa(b, c)) ? g = b + e : b === c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }

    function oc(a, b, d) {
        ud(a, this);
        this.$$parse = function (c) {
            var f = sa(a, c) || sa(b, c),
                e;
            x(f) || "#" !== f.charAt(0) ? this.$$html5 ? e = f : (e = "", x(f) && (a = c, this.replace())) : (e = sa(d, f), x(e) && (e = f));
            vd(e, this);
            c = this.$$path;
            var f = a,
                g = /^\/[A-Z]:(\/.*)/;
            mc(e, f) && (e = e.replace(f, ""));
            g.exec(e) ||
                (c = (e = g.exec(c)) ? e[1] : c);
            this.$$path = c;
            this.$$compose()
        };
        this.$$compose = function () {
            var b = Xb(this.$$search),
                f = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        };
        this.$$parseLinkUrl = function (b, d) {
            return Ba(a) === Ba(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function wd(a, b, d) {
        this.$$html5 = !0;
        oc.apply(this, arguments);
        this.$$parseLinkUrl = function (c, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var e, g;
            a === Ba(c) ? e = c : (g = sa(b, c)) ? e = a + d + g : b ===
                c + "/" && (e = b);
            e && this.$$parse(e);
            return !!e
        };
        this.$$compose = function () {
            var b = Xb(this.$$search),
                f = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f;
            this.$$absUrl = a + d + this.$$url
        }
    }

    function Jb(a) {
        return function () {
            return this[a]
        }
    }

    function xd(a, b) {
        return function (d) {
            if (x(d)) return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }

    function Ef() {
        var a = "!",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.html5Mode = function (a) {
            if (Ia(a)) return b.enabled =
                a, this;
            if (F(a)) {
                Ia(a.enabled) && (b.enabled = a.enabled);
                Ia(a.requireBase) && (b.requireBase = a.requireBase);
                if (Ia(a.rewriteLinks) || E(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;
                return this
            }
            return b
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, f, e, g) {
            function h(a, b, d) {
                var e = l.url(),
                    f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }
            var l, m;
            m = c.baseHref();
            var n = c.url(),
                p;
            if (b.enabled) {
                if (!m && b.requireBase) throw lb("nobase");
                p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = f.history ? nc : wd
            } else p = Ba(n), m = oc;
            var r = p.substr(0, Ba(p).lastIndexOf("/") + 1);
            l = new m(p, r, "#" + a);
            l.$$parseLinkUrl(n, n);
            l.$$state = c.state();
            var J = /^\s*(javascript|mailto):/i;
            e.on("click", function (a) {
                var f = b.rewriteLinks;
                if (f && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
                    for (var h = D(a.target);
                        "a" !== xa(h[0]);)
                        if (h[0] === e[0] || !(h = h.parent())[0]) return;
                    if (!E(f) ||
                        !x(h.attr(f))) {
                        var f = h.prop("href"),
                            k = h.attr("href") || h.attr("xlink:href");
                        F(f) && "[object SVGAnimatedString]" === f.toString() && (f = Da(f.animVal).href);
                        J.test(f) || !f || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(f, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            });
            mb(l.absUrl()) !== mb(n) && c.url(l.absUrl(), !0);
            var q = !0;
            c.onUrlChange(function (a, b) {
                mc(a, r) ? (d.$evalAsync(function () {
                    var c = l.absUrl(),
                        e = l.$$state,
                        f;
                    a = mb(a);
                    l.$$parse(a);
                    l.$$state =
                        b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)))
                }), d.$$phase || d.$digest()) : g.location.href = a
            });
            d.$watch(function () {
                var a = mb(c.url()),
                    b = mb(l.absUrl()),
                    e = c.state(),
                    g = l.$$replace,
                    m = a !== b || l.$$html5 && f.history && e !== l.$$state;
                if (q || m) q = !1, d.$evalAsync(function () {
                    var b = l.absUrl(),
                        c = d.$broadcast("$locationChangeStart", b, a, l.$$state, e).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = e) : (m && h(b, g, e === l.$$state ?
                        null : l.$$state), k(a, e)))
                });
                l.$$replace = !1
            });
            return l
        }]
    }

    function Ff() {
        var a = !0,
            b = this;
        this.debugEnabled = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.$get = ["$window", function (d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function f(a) {
                var b = d.console || {},
                    f = b[a] || b.log || w;
                a = !1;
                try {
                    a = !!f.apply
                } catch (k) {}
                return a ? function () {
                    var a = [];
                    q(arguments, function (b) {
                        a.push(c(b))
                    });
                    return f.apply(b, a)
                } : function (a, b) {
                    f(a, null == b ? "" : b)
                }
            }
            return {
                log: f("log"),
                info: f("info"),
                warn: f("warn"),
                error: f("error"),
                debug: function () {
                    var c = f("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function ug(a) {
        return a + ""
    }

    function vg(a, b) {
        return "undefined" !== typeof a ? a : b
    }

    function yd(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }

    function V(a, b) {
        var d, c, f;
        switch (a.type) {
            case s.Program:
                d = !0;
                q(a.body, function (a) {
                    V(a.expression, b);
                    d = d && a.expression.constant
                });
                a.constant = d;
                break;
            case s.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case s.UnaryExpression:
                V(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case s.BinaryExpression:
                V(a.left, b);
                V(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case s.LogicalExpression:
                V(a.left, b);
                V(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.ConditionalExpression:
                V(a.test, b);
                V(a.alternate, b);
                V(a.consequent,
                    b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case s.MemberExpression:
                V(a.object, b);
                a.computed && V(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case s.CallExpression:
                d = f = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                q(a.arguments, function (a) {
                    V(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = f ? c : [a];
                break;
            case s.AssignmentExpression:
                V(a.left, b);
                V(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case s.ArrayExpression:
                d = !0;
                c = [];
                q(a.elements, function (a) {
                    V(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ObjectExpression:
                d = !0;
                c = [];
                q(a.properties, function (a) {
                    V(a.value, b);
                    d = d && a.value.constant && !a.computed;
                    a.value.constant || c.push.apply(c, a.value.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case s.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function zd(a) {
        if (1 === a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0
        }
    }

    function Ad(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression
    }

    function Bd(a) {
        if (1 === a.body.length && Ad(a.body[0].expression)) return {
            type: s.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: s.NGValueParameter
            },
            operator: "="
        }
    }

    function Cd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type ===
            s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
    }

    function Dd(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function Ed(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function pc(a) {
        return y(a.valueOf) ? a.valueOf() : wg.call(a)
    }

    function Gf() {
        var a = W(),
            b = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: void 0
            },
            d, c;
        this.addLiteral = function (a, c) {
            b[a] = c
        };
        this.setIdentifierFns = function (a, b) {
            d = a;
            c = b;
            return this
        };
        this.$get = ["$filter", function (f) {
            function e(a, b) {
                return null ==
                    a || null == b ? a === b : "object" === typeof a && (a = pc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function g(a, b, c, d, f) {
                var g = d.inputs,
                    h;
                if (1 === g.length) {
                    var k = e,
                        g = g[0];
                    return a.$watch(function (a) {
                        var b = g(a);
                        e(b, k) || (h = d(a, void 0, void 0, [b]), k = b && pc(b));
                        return h
                    }, b, c, f)
                }
                for (var l = [], m = [], n = 0, I = g.length; n < I; n++) l[n] = e, m[n] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, f = g.length; c < f; c++) {
                        var k = g[c](a);
                        if (b || (b = !e(k, l[c]))) m[c] = k, l[c] = k && pc(k)
                    }
                    b && (h = d(a, void 0, void 0, m));
                    return h
                }, b, c, f)
            }

            function h(a,
                b, c, d, e) {
                function f(a) {
                    return d(a)
                }

                function h(a, c, d) {
                    l = a;
                    y(b) && b(a, c, d);
                    v(a) && d.$$postDigest(function () {
                        v(l) && k()
                    })
                }
                var k, l;
                return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    q(a, function (a) {
                        v(a) || (b = !1)
                    });
                    return b
                }
                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    y(b) && b(a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }

            function l(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c);
                return e
            }

            function m(a, b) {
                if (!b) return a;
                var c =
                    a.$$watchDelegate,
                    d = !1,
                    c = c !== k && c !== h ? function (c, e, f, g) {
                        f = d && g ? g[0] : a(c, e, f, g);
                        return b(f, c, e)
                    } : function (c, d, e, f) {
                        e = a(c, d, e, f);
                        c = b(e, c, d);
                        return v(e) ? c : e
                    },
                    d = !a.inputs;
                a.$$watchDelegate && a.$$watchDelegate !== g ? (c.$$watchDelegate = a.$$watchDelegate, c.inputs = a.inputs) : b.$stateful || (c.$$watchDelegate = g, c.inputs = a.inputs ? a.inputs : [a]);
                return c
            }
            var n = {
                csp: za().noUnsafeEval,
                literals: Fa(b),
                isIdentifierStart: y(d) && d,
                isIdentifierContinue: y(c) && c
            };
            return function (b, c) {
                var d, e, u;
                switch (typeof b) {
                    case "string":
                        return u =
                            b = b.trim(), d = a[u], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (e = !0, b = b.substring(2)), d = new qc(n), d = (new rc(d, f, n)).parse(b), d.constant ? d.$$watchDelegate = l : e ? d.$$watchDelegate = d.literal ? k : h : d.inputs && (d.$$watchDelegate = g), a[u] = d), m(d, c);
                    case "function":
                        return m(b, c);
                    default:
                        return m(w, c)
                }
            }
        }]
    }

    function If() {
        var a = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
            return Fd(function (a) {
                b.$evalAsync(a)
            }, d, a)
        }];
        this.errorOnUnhandledRejections = function (b) {
            return v(b) ? (a = b, this) : a
        }
    }

    function Jf() {
        var a = !0;
        this.$get = ["$browser", "$exceptionHandler", function (b, d) {
            return Fd(function (a) {
                b.defer(a)
            }, d, a)
        }];
        this.errorOnUnhandledRejections = function (b) {
            return v(b) ? (a = b, this) : a
        }
    }

    function Fd(a, b, d) {
        function c() {
            return new f
        }

        function f() {
            var a = this.promise = new e;
            this.resolve = function (b) {
                k(a, b)
            };
            this.reject = function (b) {
                m(a, b)
            };
            this.notify = function (b) {
                p(a, b)
            }
        }

        function e() {
            this.$$state = {
                status: 0
            }
        }

        function g() {
            for (; !v && t.length;) {
                var a = t.shift();
                if (!a.pur) {
                    a.pur = !0;
                    var c = a.value,
                        c = "Possibly unhandled rejection: " +
                        ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : x(c) ? "undefined" : "string" !== typeof c ? we(c) : c);
                    a.value instanceof Error ? b(a.value, c) : b(c)
                }
            }
        }

        function h(b) {
            !d || b.pending || 2 !== b.status || b.pur || (0 === v && 0 === t.length && a(g), t.push(b));
            !b.processScheduled && b.pending && (b.processScheduled = !0, ++v, a(function () {
                var c, e, f;
                f = b.pending;
                b.processScheduled = !1;
                b.pending = void 0;
                try {
                    for (var h = 0, l = f.length; h < l; ++h) {
                        b.pur = !0;
                        e = f[h][0];
                        c = f[h][b.status];
                        try {
                            y(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e,
                                b.value)
                        } catch (n) {
                            m(e, n)
                        }
                    }
                } finally {
                    --v, d && 0 === v && a(g)
                }
            }))
        }

        function k(a, b) {
            a.$$state.status || (b === a ? n(a, H("qcycle", b)) : l(a, b))
        }

        function l(a, b) {
            function c(b) {
                g || (g = !0, l(a, b))
            }

            function d(b) {
                g || (g = !0, n(a, b))
            }

            function e(b) {
                p(a, b)
            }
            var f, g = !1;
            try {
                if (F(b) || y(b)) f = b.then;
                y(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state))
            } catch (k) {
                d(k)
            }
        }

        function m(a, b) {
            a.$$state.status || n(a, b)
        }

        function n(a, b) {
            a.$$state.value = b;
            a.$$state.status = 2;
            h(a.$$state)
        }

        function p(c, d) {
            var e =
                c.$$state.pending;
            0 >= c.$$state.status && e && e.length && a(function () {
                for (var a, c, f = 0, g = e.length; f < g; f++) {
                    c = e[f][0];
                    a = e[f][3];
                    try {
                        p(c, y(a) ? a(d) : d)
                    } catch (h) {
                        b(h)
                    }
                }
            })
        }

        function r(a) {
            var b = new e;
            m(b, a);
            return b
        }

        function J(a, b, c) {
            var d = null;
            try {
                y(c) && (d = c())
            } catch (e) {
                return r(e)
            }
            return d && y(d.then) ? d.then(function () {
                return b(a)
            }, r) : b(a)
        }

        function s(a, b, c, d) {
            var f = new e;
            k(f, a);
            return f.then(b, c, d)
        }

        function u(a) {
            if (!y(a)) throw H("norslvr", a);
            var b = new e;
            a(function (a) {
                k(b, a)
            }, function (a) {
                m(b, a)
            });
            return b
        }
        var H =
            M("$q", TypeError),
            v = 0,
            t = [];
        R(e.prototype, {
            then: function (a, b, c) {
                if (x(a) && x(b) && x(c)) return this;
                var d = new e;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && h(this.$$state);
                return d
            },
            "catch": function (a) {
                return this.then(null, a)
            },
            "finally": function (a, b) {
                return this.then(function (b) {
                    return J(b, w, a)
                }, function (b) {
                    return J(b, r, a)
                }, b)
            }
        });
        var w = s;
        u.prototype = e.prototype;
        u.defer = c;
        u.reject = r;
        u.when = s;
        u.resolve = w;
        u.all = function (a) {
            var b = new e,
                c = 0,
                d = C(a) ? [] : {};
            q(a, function (a, e) {
                c++;
                s(a).then(function (a) {
                    d[e] = a;
                    --c || k(b, d)
                }, function (a) {
                    m(b, a)
                })
            });
            0 === c && k(b, d);
            return b
        };
        u.race = function (a) {
            var b = c();
            q(a, function (a) {
                s(a).then(b.resolve, b.reject)
            });
            return b.promise
        };
        return u
    }

    function Sf() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                f = !!d,
                e = f ? function (a) {
                    var b = d(a);
                    return function () {
                        c(b)
                    }
                } : function (a) {
                    var c =
                        b(a, 16.66, !1);
                    return function () {
                        b.cancel(c)
                    }
                };
            e.supported = f;
            return e
        }]
    }

    function Hf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++rb;
                this.$$ChildScope = null
            }
            b.prototype = a;
            return b
        }
        var b = 10,
            d = M("$rootScope"),
            c = null,
            f = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (e, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === La && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++rb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function n(a) {
                if (H.$$phase) throw d("inprog",
                    H.$$phase);
                H.$$phase = a
            }

            function p(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function r(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function J() {}

            function s() {
                for (; ia.length;) try {
                    ia.shift()()
                } catch (a) {
                    e(a)
                }
                f = null
            }

            function u() {
                null === f && (f = h.defer(function () {
                    H.$apply(s)
                }))
            }
            m.prototype = {
                constructor: m,
                $new: function (b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c !== this) && d.$on("$destroy", k);
                    return d
                },
                $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
                    var h = this,
                        k = h.$$watchers,
                        l = {
                            fn: b,
                            last: J,
                            get: f,
                            exp: e || a,
                            eq: !!d
                        };
                    c = null;
                    y(b) || (l.fn = w);
                    k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
                    k.unshift(l);
                    k.$$digestWatchIndex++;
                    p(this, 1);
                    return function () {
                        var a = $a(k, l);
                        0 <= a && (p(h, -1),
                            a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
                        c = null
                    }
                },
                $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g)
                    }
                    var d = Array(a.length),
                        e = Array(a.length),
                        f = [],
                        g = this,
                        h = !1,
                        k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function () {
                            l && b(e, e, g)
                        });
                        return function () {
                            l = !1
                        }
                    }
                    if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    q(a, function (a, b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(k)
                    });
                    return function () {
                        for (; f.length;) f.shift()()
                    }
                },
                $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!x(e)) {
                            if (F(e))
                                if (ta(e))
                                    for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                                else {
                                    f !== p && (f = p = {}, u = 0, l++);
                                    a = 0;
                                    for (b in e) va.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                                    if (u > a)
                                        for (b in l++, f) va.call(e, b) || (u--, delete f[b])
                                }
                            else f !== e && (f = e, l++);
                            return l
                        }
                    }
                    c.$stateful = !0;
                    var d = this,
                        e, f, h, k = 1 < b.length,
                        l = 0,
                        m =
                        g(a, c),
                        n = [],
                        p = {},
                        r = !0,
                        u = 0;
                    return this.$watch(m, function () {
                        r ? (r = !1, b(e, e, d)) : b(e, h, d);
                        if (k)
                            if (F(e))
                                if (ta(e)) {
                                    h = Array(e.length);
                                    for (var a = 0; a < e.length; a++) h[a] = e[a]
                                } else
                                    for (a in h = {}, e) va.call(e, a) && (h[a] = e[a]);
                        else h = e
                    })
                },
                $digest: function () {
                    var a, g, k, l, m, p, r, u = b,
                        q, w = [],
                        x, ia;
                    n("$digest");
                    h.$$checkUrlChange();
                    this === H && null !== f && (h.defer.cancel(f), s());
                    c = null;
                    do {
                        r = !1;
                        q = this;
                        for (p = 0; p < v.length; p++) {
                            try {
                                ia = v[p], ia.scope.$eval(ia.expression, ia.locals)
                            } catch (z) {
                                e(z)
                            }
                            c = null
                        }
                        v.length = 0;
                        a: do {
                            if (p = q.$$watchers)
                                for (p.$$digestWatchIndex =
                                    p.length; p.$$digestWatchIndex--;) try {
                                    if (a = p[p.$$digestWatchIndex])
                                        if (m = a.get, (g = m(q)) !== (k = a.last) && !(a.eq ? qa(g, k) : ga(g) && ga(k))) r = !0, c = a, a.last = a.eq ? Fa(g, null) : g, l = a.fn, l(g, k === J ? g : k, q), 5 > u && (x = 4 - u, w[x] || (w[x] = []), w[x].push({
                                            msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            newVal: g,
                                            oldVal: k
                                        }));
                                        else if (a === c) {
                                        r = !1;
                                        break a
                                    }
                                } catch (D) {
                                    e(D)
                                }
                            if (!(p = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling))
                                for (; q !== this && !(p = q.$$nextSibling);) q = q.$parent
                        } while (q = p);
                        if ((r || v.length) && !u--) throw H.$$phase =
                            null, d("infdig", b, w);
                    } while (r || v.length);
                    for (H.$$phase = null; A < t.length;) try {
                        t[A++]()
                    } catch (E) {
                        e(E)
                    }
                    t.length = A = 0
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === H && h.$$applicationDestroyed();
                        p(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) r(this, this.$$listenerCount[b], b);
                        a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling =
                            this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return w
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this)
                    }
                },
                $eval: function (a, b) {
                    return g(a)(this, b)
                },
                $evalAsync: function (a, b) {
                    H.$$phase || v.length || h.defer(function () {
                        v.length && H.$digest()
                    });
                    v.push({
                        scope: this,
                        expression: g(a),
                        locals: b
                    })
                },
                $$postDigest: function (a) {
                    t.push(a)
                },
                $apply: function (a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            H.$$phase = null
                        }
                    } catch (b) {
                        e(b)
                    } finally {
                        try {
                            H.$digest()
                        } catch (c) {
                            throw e(c), c;
                        }
                    }
                },
                $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && ia.push(b);
                    a = g(a);
                    u()
                },
                $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, r(e, 1, a))
                    }
                },
                $emit: function (a, b) {
                    var c = [],
                        d, f = this,
                        g = !1,
                        h = {
                            name: a,
                            targetScope: f,
                            stopPropagation: function () {
                                g = !0
                            },
                            preventDefault: function () {
                                h.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = ab([h], arguments, 1),
                        l, m;
                    do {
                        d = f.$$listeners[a] || c;
                        h.currentScope = f;
                        l = 0;
                        for (m = d.length; l < m; l++)
                            if (d[l]) try {
                                d[l].apply(null, k)
                            } catch (n) {
                                e(n)
                            } else d.splice(l, 1), l--, m--;
                        if (g) return h.currentScope = null, h;
                        f = f.$parent
                    } while (f);
                    h.currentScope = null;
                    return h
                },
                $broadcast: function (a, b) {
                    var c = this,
                        d = this,
                        f = {
                            name: a,
                            targetScope: this,
                            preventDefault: function () {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a]) return f;
                    for (var g = ab([f], arguments, 1), h, k; c = d;) {
                        f.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)
                            if (d[h]) try {
                                d[h].apply(null, g)
                            } catch (l) {
                                e(l)
                            } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    f.currentScope = null;
                    return f
                }
            };
            var H = new m,
                v = H.$$asyncQueue = [],
                t = H.$$postDigestQueue = [],
                ia = H.$$applyAsyncQueue = [],
                A = 0;
            return H
        }]
    }

    function ze() {
        var a =
            /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return v(a) ? (b = a, this) : b
        };
        this.$get = function () {
            return function (d, c) {
                var f = c ? b : a,
                    e;
                e = Da(d).href;
                return "" === e || e.match(f) ? d : "unsafe:" + e
            }
        }
    }

    function xg(a) {
        if ("self" === a) return a;
        if (E(a)) {
            if (-1 < a.indexOf("***")) throw ua("iwcard", a);
            a = Gd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
            return new RegExp("^" +
                a + "$")
        }
        if (Xa(a)) return new RegExp("^" + a.source + "$");
        throw ua("imatcher");
    }

    function Hd(a) {
        var b = [];
        v(a) && q(a, function (a) {
            b.push(xg(a))
        });
        return b
    }

    function Lf() {
        this.SCE_CONTEXTS = pa;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = Hd(b));
            return a
        };
        this.resourceUrlBlacklist = function (a) {
            arguments.length && (b = Hd(a));
            return b
        };
        this.$get = ["$injector", function (d) {
            function c(a, b) {
                return "self" === a ? sd(b) : !!a.exec(b.href)
            }

            function f(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue =
                        function () {
                            return a
                        }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var e = function (a) {
                throw ua("unsafe");
            };
            d.has("$sanitize") && (e = d.get("$sanitize"));
            var g = f(),
                h = {};
            h[pa.HTML] = f(g);
            h[pa.CSS] = f(g);
            h[pa.URL] = f(g);
            h[pa.JS] = f(g);
            h[pa.RESOURCE_URL] = f(h[pa.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw ua("icontext", a, b);
                    if (null === b || x(b) ||
                        "" === b) return b;
                    if ("string" !== typeof b) throw ua("itype", a);
                    return new c(b)
                },
                getTrusted: function (d, f) {
                    if (null === f || x(f) || "" === f) return f;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && f instanceof g) return f.$$unwrapTrustedValue();
                    if (d === pa.RESOURCE_URL) {
                        var g = Da(f.toString()),
                            n, p, r = !1;
                        n = 0;
                        for (p = a.length; n < p; n++)
                            if (c(a[n], g)) {
                                r = !0;
                                break
                            } if (r)
                            for (n = 0, p = b.length; n < p; n++)
                                if (c(b[n], g)) {
                                    r = !1;
                                    break
                                } if (r) return f;
                        throw ua("insecurl", f.toString());
                    }
                    if (d === pa.HTML) return e(f);
                    throw ua("unsafe");
                },
                valueOf: function (a) {
                    return a instanceof
                    g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Kf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a
        };
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > La) throw ua("iequirks");
            var c = ra(pa);
            c.isEnabled = function () {
                return a
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function (a, b) {
                return b
            }, c.valueOf = Ya);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            };
            var f = c.parseAs,
                e = c.getTrusted,
                g = c.trustAs;
            q(pa, function (a, b) {
                var d = P(b);
                c[("parse_as_" + d).replace(sc, gb)] = function (b) {
                    return f(a, b)
                };
                c[("get_trusted_" + d).replace(sc, gb)] = function (b) {
                    return e(a, b)
                };
                c[("trust_as_" + d).replace(sc, gb)] = function (b) {
                    return g(a, b)
                }
            });
            return c
        }]
    }

    function Mf() {
        this.$get = ["$window", "$document", function (a, b) {
            var d = {},
                c = !(a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
                f = Z((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]),
                e = /Boxee/i.test((a.navigator || {}).userAgent),
                g = b[0] || {},
                h = g.body && g.body.style,
                k = !1,
                l = !1;
            h && (k = !!("transition" in h || "webkitTransition" in h), l = !!("animation" in h || "webkitAnimation" in h));
            return {
                history: !(!c || 4 > f || e),
                hasEvent: function (a) {
                    if ("input" === a && La) return !1;
                    if (x(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                },
                csp: za(),
                transitions: k,
                animations: l,
                android: f
            }
        }]
    }

    function Of() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$exceptionHandler",
            "$templateCache", "$http", "$q", "$sce",
            function (b, d, c, f, e) {
                function g(h, k) {
                    g.totalPendingRequests++;
                    if (!E(h) || x(d.get(h))) h = e.getTrustedResourceUrl(h);
                    var l = c.defaults && c.defaults.transformResponse;
                    C(l) ? l = l.filter(function (a) {
                        return a !== jc
                    }) : l === jc && (l = null);
                    return c.get(h, R({
                        cache: d,
                        transformResponse: l
                    }, a)).finally(function () {
                        g.totalPendingRequests--
                    }).then(function (a) {
                        d.put(h, a.data);
                        return a.data
                    }, function (a) {
                        k || (a = yg("tpload", h, a.status, a.statusText), b(a));
                        return f.reject(a)
                    })
                }
                g.totalPendingRequests =
                    0;
                return g
            }
        ]
    }

    function Pf() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    q(a, function (a) {
                        var c = $.element(a).data("$binding");
                        c && q(c, function (c) {
                            d ? (new RegExp("(^|\\s)" + Gd(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                },
                findModels: function (a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length) return k
                    }
                },
                getLocation: function () {
                    return d.url()
                },
                setLocation: function (b) {
                    b !== d.url() && (d.url(b), a.$digest())
                },
                whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Qf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, f) {
            function e(e, k, l) {
                y(e) || (l = k, k = e, e = w);
                var m = wa.call(arguments, 3),
                    n = v(l) && !l,
                    p = (n ? c : d).defer(),
                    r = p.promise,
                    q;
                q = b.defer(function () {
                    try {
                        p.resolve(e.apply(null, m))
                    } catch (b) {
                        p.reject(b), f(b)
                    } finally {
                        delete g[r.$$timeoutId]
                    }
                    n ||
                        a.$apply()
                }, k);
                r.$$timeoutId = q;
                g[q] = p;
                return r
            }
            var g = {};
            e.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.catch(w), g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            };
            return e
        }]
    }

    function Da(a) {
        La && (ca.setAttribute("href", a), a = ca.href);
        ca.setAttribute("href", a);
        return {
            href: ca.href,
            protocol: ca.protocol ? ca.protocol.replace(/:$/, "") : "",
            host: ca.host,
            search: ca.search ? ca.search.replace(/^\?/, "") : "",
            hash: ca.hash ? ca.hash.replace(/^#/, "") : "",
            hostname: ca.hostname,
            port: ca.port,
            pathname: "/" === ca.pathname.charAt(0) ? ca.pathname : "/" + ca.pathname
        }
    }

    function sd(a) {
        a = E(a) ? Da(a) : a;
        return a.protocol === Id.protocol && a.host === Id.host
    }

    function Rf() {
        this.$get = ma(z)
    }

    function Jd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var d = a[0] || {},
            c = {},
            f = "";
        return function () {
            var a, g, h, k, l;
            try {
                a = d.cookie || ""
            } catch (m) {
                a = ""
            }
            if (a !== f)
                for (f = a, a = f.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) &&
                    (c[l] = b(g.substring(k + 1))));
            return c
        }
    }

    function Vf() {
        this.$get = Jd
    }

    function Xc(a) {
        function b(d, c) {
            if (F(d)) {
                var f = {};
                q(d, function (a, c) {
                    f[c] = b(c, a)
                });
                return f
            }
            return a.factory(d + "Filter", c)
        }
        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        b("currency", Kd);
        b("date", Ld);
        b("filter", zg);
        b("json", Ag);
        b("limitTo", Bg);
        b("lowercase", Cg);
        b("number", Md);
        b("orderBy", Nd);
        b("uppercase", Dg)
    }

    function zg() {
        return function (a, b, d, c) {
            if (!ta(a)) {
                if (null == a) return a;
                throw M("filter")("notarray",
                    a);
            }
            c = c || "$";
            var f;
            switch (tc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    f = !0;
                case "object":
                    b = Eg(b, d, c, f);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function Eg(a, b, d, c) {
        var f = F(a) && d in a;
        !0 === b ? b = qa : y(b) || (b = function (a, b) {
            if (x(a)) return !1;
            if (null === a || null === b) return a === b;
            if (F(b) || F(a) && !Vb(a)) return !1;
            a = P("" + a);
            b = P("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return f && !F(e) ? Ha(e, a[d], b, d, !1) : Ha(e, a, b, d, c)
        }
    }

    function Ha(a, b, d, c, f,
        e) {
        var g = tc(a),
            h = tc(b);
        if ("string" === h && "!" === b.charAt(0)) return !Ha(a, b.substring(1), d, c, f);
        if (C(a)) return a.some(function (a) {
            return Ha(a, b, d, c, f)
        });
        switch (g) {
            case "object":
                var k;
                if (f) {
                    for (k in a)
                        if ("$" !== k.charAt(0) && Ha(a[k], b, d, c, !0)) return !0;
                    return e ? !1 : Ha(a, b, d, c, !1)
                }
                if ("object" === h) {
                    for (k in b)
                        if (e = b[k], !y(e) && !x(e) && (g = k === c, !Ha(g ? a : a[k], e, d, c, g, g))) return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function tc(a) {
        return null === a ? "null" : typeof a
    }

    function Kd(a) {
        var b =
            a.NUMBER_FORMATS;
        return function (a, c, f) {
            x(c) && (c = b.CURRENCY_SYM);
            x(f) && (f = b.PATTERNS[1].maxFrac);
            return null == a ? a : Od(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, f).replace(/\u00A4/g, c)
        }
    }

    function Md(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Od(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Fg(a) {
        var b = 0,
            d, c, f, e, g; - 1 < (c = a.indexOf(Pd)) && (a = a.replace(Pd, ""));
        0 < (f = a.search(/e/i)) ? (0 > c && (c = f), c += +a.slice(f + 1), a = a.substring(0, f)) : 0 > c && (c = a.length);
        for (f = 0; a.charAt(f) === uc; f++);
        if (f === (g = a.length)) d = [0], c = 1;
        else {
            for (g--; a.charAt(g) === uc;) g--;
            c -= f;
            d = [];
            for (e = 0; f <= g; f++, e++) d[e] = +a.charAt(f)
        }
        c > Qd && (d = d.splice(0, Qd - 1), b = c - 1, c = 1);
        return {
            d: d,
            e: b,
            i: c
        }
    }

    function Gg(a, b, d, c) {
        var f = a.d,
            e = f.length - a.i;
        b = x(b) ? Math.min(Math.max(d, e), c) : +b;
        d = b + a.i;
        c = f[d];
        if (0 < d) {
            f.splice(Math.max(a.i, d));
            for (var g = d; g < f.length; g++) f[g] = 0
        } else
            for (e = Math.max(0, e), a.i = 1, f.length = Math.max(1, d = b + 1), f[0] = 0, g = 1; g < d; g++) f[g] = 0;
        if (5 <= c)
            if (0 > d - 1) {
                for (c = 0; c > d; c--) f.unshift(0), a.i++;
                f.unshift(1);
                a.i++
            } else f[d -
                1]++;
        for (; e < Math.max(0, b); e++) f.push(0);
        if (b = f.reduceRight(function (a, b, c, d) {
                b += a;
                d[c] = b % 10;
                return Math.floor(b / 10)
            }, 0)) f.unshift(b), a.i++
    }

    function Od(a, b, d, c, f) {
        if (!E(a) && !Y(a) || isNaN(a)) return "";
        var e = !isFinite(a),
            g = !1,
            h = Math.abs(a) + "",
            k = "";
        if (e) k = "\u221e";
        else {
            g = Fg(h);
            Gg(g, f, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            f = g.e;
            e = [];
            for (g = k.reduce(function (a, b) {
                    return a && !b
                }, !0); 0 > h;) k.unshift(0), h++;
            0 < h ? e = k.splice(h, k.length) : (e = k, k = [0]);
            h = [];
            for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length >
                b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));
            k.length && h.unshift(k.join(""));
            k = h.join(d);
            e.length && (k += c + e.join(""));
            f && (k += "e+" + f)
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }

    function Kb(a, b, d, c) {
        var f = "";
        if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, f = "-");
        for (a = "" + a; a.length < b;) a = uc + a;
        d && (a = a.substr(a.length - b));
        return f + a
    }

    function aa(a, b, d, c, f) {
        d = d || 0;
        return function (e) {
            e = e["get" + a]();
            if (0 < d || e > -d) e += d;
            0 === e && -12 === d && (e = 12);
            return Kb(e, b, c, f)
        }
    }

    function nb(a, b, d) {
        return function (c, f) {
            var e =
                c["get" + a](),
                g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
            return f[g][e]
        }
    }

    function Rd(a) {
        var b = (new Date(a, 0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Sd(a) {
        return function (b) {
            var d = Rd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Kb(b, a)
        }
    }

    function vc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function Ld(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var e = 0,
                    g = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (e = Z(b[9] + b[10]), g = Z(b[9] + b[11]));
                h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
                e = Z(b[4] || 0) - e;
                g = Z(b[5] || 0) - g;
                h = Z(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, e, g, h, b)
            }
            return a
        }
        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, e) {
            var g = "",
                h = [],
                k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            E(c) && (c = Hg.test(c) ? Z(c) : b(c));
            Y(c) && (c = new Date(c));
            if (!fa(c) || !isFinite(c.getTime())) return c;
            for (; d;)(l = Ig.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            e && (m = Jc(e, m), c = Wb(c, e, !0));
            q(h, function (b) {
                k = Jg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Ag() {
        return function (a, b) {
            x(b) && (b = 2);
            return cb(a, b)
        }
    }

    function Bg() {
        return function (a, b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);
            if (ga(b)) return a;
            Y(a) && (a = a.toString());
            if (!ta(a)) return a;
            d = !d || isNaN(d) ? 0 : Z(d);
            d = 0 > d ? Math.max(0, a.length +
                d) : d;
            return 0 <= b ? wc(a, d, d + b) : 0 === d ? wc(a, b, a.length) : wc(a, Math.max(0, d + b), d)
        }
    }

    function wc(a, b, d) {
        return E(a) ? a.slice(b, d) : wa.call(a, b, d)
    }

    function Nd(a) {
        function b(b) {
            return b.map(function (b) {
                var c = 1,
                    d = Ya;
                if (y(b)) d = b;
                else if (E(b)) {
                    if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (d = a(b), d.constant)) var f = d(),
                        d = function (a) {
                            return a[f]
                        }
                }
                return {
                    get: d,
                    descending: c
                }
            })
        }

        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function c(a, b) {
            var c = 0,
                d = a.type,
                k = b.type;
            if (d === k) {
                var k = a.value,
                    l = b.value;
                "string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (F(k) && (k = a.index), F(l) && (l = b.index));
                k !== l && (c = k < l ? -1 : 1)
            } else c = d < k ? -1 : 1;
            return c
        }
        return function (a, e, g, h) {
            if (null == a) return a;
            if (!ta(a)) throw M("orderBy")("notarray", a);
            C(e) || (e = [e]);
            0 === e.length && (e = ["+"]);
            var k = b(e),
                l = g ? -1 : 1,
                m = y(h) ? h : c;
            a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a,
                    tieBreaker: {
                        value: b,
                        type: "number",
                        index: b
                    },
                    predicateValues: k.map(function (c) {
                        var e =
                            c.get(a);
                        c = typeof e;
                        if (null === e) c = "string", e = "null";
                        else if ("object" === c) a: {
                            if (y(e.valueOf) && (e = e.valueOf(), d(e))) break a;Vb(e) && (e = e.toString(), d(e))
                        }
                        return {
                            value: e,
                            type: c,
                            index: b
                        }
                    })
                }
            });
            a.sort(function (a, b) {
                for (var c = 0, d = k.length; c < d; c++) {
                    var e = m(a.predicateValues[c], b.predicateValues[c]);
                    if (e) return e * k[c].descending * l
                }
                return m(a.tieBreaker, b.tieBreaker) * l
            });
            return a = a.map(function (a) {
                return a.value
            })
        }
    }

    function Ra(a) {
        y(a) && (a = {
            link: a
        });
        a.restrict = a.restrict || "AC";
        return ma(a)
    }

    function Lb(a, b, d,
        c, f) {
        this.$$controls = [];
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = f(b.name || b.ngForm || "")(d);
        this.$dirty = !1;
        this.$valid = this.$pristine = !0;
        this.$submitted = this.$invalid = !1;
        this.$$parentForm = Mb;
        this.$$element = a;
        this.$$animate = c;
        Td(this)
    }

    function Td(a) {
        a.$$classCache = {};
        a.$$classCache[Ud] = !(a.$$classCache[ob] = a.$$element.hasClass(ob))
    }

    function Vd(a) {
        function b(a, b, c) {
            c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element,
                b), a.$$classCache[b] = !1)
        }

        function d(a, c, d) {
            c = c ? "-" + Nc(c, "-") : "";
            b(a, ob + c, !0 === d);
            b(a, Ud + c, !1 === d)
        }
        var c = a.set,
            f = a.unset;
        a.clazz.prototype.$setValidity = function (a, g, h) {
            x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && f(this.$pending, a, h), Wd(this.$pending) && (this.$pending = void 0));
            Ia(g) ? g ? (f(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), f(this.$$success, a, h)) : (f(this.$error, a, h), f(this.$$success, a, h));
            this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid =
                void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = Wd(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));
            g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
            d(this, a, g);
            this.$$parentForm.$setValidity(a, g, this)
        }
    }

    function Wd(a) {
        if (a)
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
        return !0
    }

    function xc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function Sa(a, b, d, c, f, e) {
        var g = P(b[0].type);
        if (!f.android) {
            var h = !1;
            b.on("compositionstart",
                function () {
                    h = !0
                });
            b.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var k, l = function (a) {
            k && (e.defer.cancel(k), k = null);
            if (!h) {
                var f = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (f = S(f));
                (c.$viewValue !== f || "" === f && c.$$hasNativeValidators) && c.$setViewValue(f, a)
            }
        };
        if (f.hasEvent("input")) b.on("input", l);
        else {
            var m = function (a, b, c) {
                k || (k = e.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (f.hasEvent("paste")) b.on("paste cut",
                m)
        }
        b.on("change", l);
        if (Xd[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
            if (!k) {
                var b = this.validity,
                    c = b.badInput,
                    d = b.typeMismatch;
                k = e.defer(function () {
                    k = null;
                    b.badInput === c && b.typeMismatch === d || l(a)
                })
            }
        });
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Nb(a, b) {
        return function (d, c) {
            var f, e;
            if (fa(d)) return d;
            if (E(d)) {
                '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (Kg.test(d)) return new Date(d);
                a.lastIndex = 0;
                if (f = a.exec(d)) return f.shift(), e = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, q(f, function (a, c) {
                    c < b.length && (e[b[c]] = +a)
                }), new Date(e.yyyy, e.MM - 1, e.dd, e.HH, e.mm, e.ss || 0, 1E3 * e.sss || 0)
            }
            return NaN
        }
    }

    function pb(a, b, d, c) {
        return function (f, e, g, h, k, l, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function p(a) {
                return v(a) && !fa(a) ? d(a) ||
                    void 0 : a
            }
            yc(f, e, g, h);
            Sa(f, e, g, h, k, l);
            var r = h && h.$options.getOption("timezone"),
                q;
            h.$$parserName = a;
            h.$parsers.push(function (a) {
                if (h.$isEmpty(a)) return null;
                if (b.test(a)) return a = d(a, q), r && (a = Wb(a, r)), a
            });
            h.$formatters.push(function (a) {
                if (a && !fa(a)) throw qb("datefmt", a);
                if (n(a)) return (q = a) && r && (q = Wb(q, r, !0)), m("date")(a, c, r);
                q = null;
                return ""
            });
            if (v(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function (a) {
                    return !n(a) || x(s) || d(a) >= s
                };
                g.$observe("min", function (a) {
                    s = p(a);
                    h.$validate()
                })
            }
            if (v(g.max) || g.ngMax) {
                var u;
                h.$validators.max = function (a) {
                    return !n(a) || x(u) || d(a) <= u
                };
                g.$observe("max", function (a) {
                    u = p(a);
                    h.$validate()
                })
            }
        }
    }

    function yc(a, b, d, c) {
        (c.$$hasNativeValidators = F(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a
        })
    }

    function Yd(a) {
        a.$$parserName = "number";
        a.$parsers.push(function (b) {
            if (a.$isEmpty(b)) return null;
            if (Lg.test(b)) return parseFloat(b)
        });
        a.$formatters.push(function (b) {
            if (!a.$isEmpty(b)) {
                if (!Y(b)) throw qb("numfmt", b);
                b = b.toString()
            }
            return b
        })
    }

    function Ta(a) {
        v(a) && !Y(a) && (a = parseFloat(a));
        return ga(a) ? void 0 : a
    }

    function zc(a) {
        var b = a.toString(),
            d = b.indexOf(".");
        return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1
    }

    function Zd(a, b, d) {
        a = Number(a);
        if ((a | 0) !== a || (b | 0) !== b || (d | 0) !== d) {
            var c = Math.max(zc(a), zc(b), zc(d)),
                c = Math.pow(10, c);
            a *= c;
            b *= c;
            d *= c
        }
        return 0 === (a - b) % d
    }

    function $d(a, b, d, c, f) {
        if (v(c)) {
            a = a(c);
            if (!a.constant) throw qb("constexpr", d, c);
            return a(b)
        }
        return f
    }

    function Ac(a, b) {
        function d(a, b) {
            if (!a || !a.length) return [];
            if (!b || !b.length) return a;
            var c = [],
                d = 0;
            a: for (; d < a.length; d++) {
                for (var e = a[d], f = 0; f < b.length; f++)
                    if (e === b[f]) continue a;
                c.push(e)
            }
            return c
        }

        function c(a) {
            var b = a;
            C(a) ? b = a.map(c).join(" ") : F(a) && (b = Object.keys(a).filter(function (b) {
                return a[b]
            }).join(" "));
            return b
        }

        function f(a) {
            var b = a;
            if (C(a)) b = a.map(f);
            else if (F(a)) {
                var c = !1,
                    b = Object.keys(a).filter(function (b) {
                        b = a[b];
                        !c && x(b) && (c = !0);
                        return b
                    });
                c && b.push(void 0)
            }
            return b
        }
        a = "ngClass" + a;
        var e;
        return ["$parse", function (g) {
            return {
                restrict: "AC",
                link: function (h,
                    k, l) {
                    function m(a, b) {
                        var c = [];
                        q(a, function (a) {
                            if (0 < b || H[a]) H[a] = (H[a] || 0) + b, H[a] === +(0 < b) && c.push(a)
                        });
                        return c.join(" ")
                    }

                    function n(a) {
                        if (a === b) {
                            var c = t,
                                c = m(c && c.split(" "), 1);
                            l.$addClass(c)
                        } else c = t, c = m(c && c.split(" "), -1), l.$removeClass(c);
                        w = a
                    }

                    function p(a) {
                        a = c(a);
                        a !== t && r(a)
                    }

                    function r(a) {
                        if (w === b) {
                            var c = t && t.split(" "),
                                e = a && a.split(" "),
                                f = d(c, e),
                                c = d(e, c),
                                f = m(f, -1),
                                c = m(c, 1);
                            l.$addClass(c);
                            l.$removeClass(f)
                        }
                        t = a
                    }
                    var s = l[a].trim(),
                        v = ":" === s.charAt(0) && ":" === s.charAt(1),
                        s = g(s, v ? f : c),
                        u = v ? p : r,
                        H = k.data("$classCounts"),
                        w = !0,
                        t;
                    H || (H = W(), k.data("$classCounts", H));
                    "ngClass" !== a && (e || (e = g("$index", function (a) {
                        return a & 1
                    })), h.$watch(e, n));
                    h.$watch(s, u, v)
                }
            }
        }]
    }

    function Ob(a, b, d, c, f, e, g, h, k) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = void 0;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = k(d.name || "", !1)(a);
        this.$$parentForm = Mb;
        this.$options = Pb;
        this.$$parsedNgModel = f(d.ngModel);
        this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
        this.$$ngModelGet = this.$$parsedNgModel;
        this.$$ngModelSet = this.$$parsedNgModelAssign;
        this.$$pendingDebounce = null;
        this.$$parserValid = void 0;
        this.$$currentValidationRunId = 0;
        this.$$scope = a;
        this.$$attr = d;
        this.$$element = c;
        this.$$animate = e;
        this.$$timeout = g;
        this.$$parse = f;
        this.$$q = h;
        this.$$exceptionHandler = b;
        Td(this);
        Mg(this)
    }

    function Mg(a) {
        a.$$scope.$watch(function () {
            var b =
                a.$$ngModelGet(a.$$scope);
            if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
                a.$modelValue = a.$$rawModelValue = b;
                a.$$parserValid = void 0;
                for (var d = a.$formatters, c = d.length, f = b; c--;) f = d[c](f);
                a.$viewValue !== f && (a.$$updateEmptyClasses(f), a.$viewValue = a.$$lastCommittedViewValue = f, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, w))
            }
            return b
        })
    }

    function Bc(a) {
        this.$$options = a
    }

    function ae(a, b) {
        q(b, function (b, c) {
            v(a[c]) || (a[c] = b)
        })
    }
    var Ng = /^\/(.+)\/([a-z]*)$/,
        va = Object.prototype.hasOwnProperty,
        P = function (a) {
            return E(a) ? a.toLowerCase() : a
        },
        vb = function (a) {
            return E(a) ? a.toUpperCase() : a
        },
        La, D, oa, wa = [].slice,
        ng = [].splice,
        Og = [].push,
        na = Object.prototype.toString,
        Gc = Object.getPrototypeOf,
        Ga = M("ng"),
        $ = z.angular || (z.angular = {}),
        Zb, rb = 0;
    La = z.document.documentMode;
    var ga = Number.isNaN || function (a) {
        return a !== a
    };
    w.$inject = [];
    Ya.$inject = [];
    var C = Array.isArray,
        le = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        S = function (a) {
            return E(a) ? a.trim() : a
        },
        Gd = function (a) {
            return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
                "\\$1").replace(/\x08/g, "\\x08")
        },
        za = function () {
            if (!v(za.rules)) {
                var a = z.document.querySelector("[ng-csp]") || z.document.querySelector("[data-ng-csp]");
                if (a) {
                    var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                    za.rules = {
                        noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                        noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                    }
                } else {
                    a = za;
                    try {
                        new Function(""), b = !1
                    } catch (d) {
                        b = !0
                    }
                    a.rules = {
                        noUnsafeEval: b,
                        noInlineStyle: !1
                    }
                }
            }
            return za.rules
        },
        sb = function () {
            if (v(sb.name_)) return sb.name_;
            var a, b, d = Ka.length,
                c, f;
            for (b = 0; b < d; ++b)
                if (c = Ka[b], a = z.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
                    f = a.getAttribute(c + "jq");
                    break
                } return sb.name_ = f
        },
        ne = /:/g,
        Ka = ["ng-", "data-ng-", "ng:", "x-ng-"],
        qe = function (a) {
            if (!a.currentScript) return !0;
            var b = a.currentScript.getAttribute("src"),
                d = a.createElement("a");
            d.href = b;
            if (a.location.origin === d.origin) return !0;
            switch (d.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "blob:":
                case "file:":
                case "data:":
                    return !0;
                default:
                    return !1
            }
        }(z.document),
        te = /[A-Z]/g,
        Oc = !1,
        Ja =
        3,
        ye = {
            full: "1.6.1",
            major: 1,
            minor: 6,
            dot: 1,
            codeName: "promise-rectification"
        };
    X.expando = "ng339";
    var ib = X.cache = {},
        $f = 1;
    X._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var Wf = /-([a-z])/g,
        Pg = /^-ms-/,
        Ab = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        ac = M("jqLite"),
        Zf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        $b = /<|&#?\w+;/,
        Xf = /<([\w:-]+)/,
        Yf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ha = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ha.optgroup = ha.option;
    ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
    ha.th = ha.td;
    var eg = z.Node.prototype.contains || function (a) {
            return !!(this.compareDocumentPosition(a) & 16)
        },
        Oa = X.prototype = {
            ready: $c,
            toString: function () {
                var a = [];
                q(this, function (b) {
                    a.push("" + b)
                });
                return "[" + a.join(", ") + "]"
            },
            eq: function (a) {
                return 0 <= a ? D(this[a]) : D(this[this.length +
                    a])
            },
            length: 0,
            push: Og,
            sort: [].sort,
            splice: [].splice
        },
        Gb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Gb[P(a)] = a
    });
    var ed = {};
    q("input select option textarea button form details".split(" "), function (a) {
        ed[a] = !0
    });
    var ld = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    q({
        data: dc,
        removeData: hb,
        hasData: function (a) {
            for (var b in ib[a.ng339]) return !0;
            return !1
        },
        cleanData: function (a) {
            for (var b = 0, d = a.length; b <
                d; b++) hb(a[b])
        }
    }, function (a, b) {
        X[b] = a
    });
    q({
        data: dc,
        inheritedData: Eb,
        scope: function (a) {
            return D.data(a, "$scope") || Eb(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function (a) {
            return D.data(a, "$isolateScope") || D.data(a, "$isolateScopeNoTemplate")
        },
        controller: bd,
        injector: function (a) {
            return Eb(a, "$injector")
        },
        removeAttr: function (a, b) {
            a.removeAttribute(b)
        },
        hasClass: Bb,
        css: function (a, b, d) {
            b = xb(b.replace(Pg, "ms-"));
            if (v(d)) a.style[b] = d;
            else return a.style[b]
        },
        attr: function (a, b, d) {
            var c = a.nodeType;
            if (c !== Ja && 2 !== c && 8 !== c && a.getAttribute) {
                var c = P(b),
                    f = Gb[c];
                if (v(d)) null === d || !1 === d && f ? a.removeAttribute(b) : a.setAttribute(b, f ? c : d);
                else return a = a.getAttribute(b), f && null !== a && (a = c), null === a ? void 0 : a
            }
        },
        prop: function (a, b, d) {
            if (v(d)) a[b] = d;
            else return a[b]
        },
        text: function () {
            function a(a, d) {
                if (x(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Ja ? a.textContent : ""
                }
                a.textContent = d
            }
            a.$dv = "";
            return a
        }(),
        val: function (a, b) {
            if (x(b)) {
                if (a.multiple && "select" === xa(a)) {
                    var d = [];
                    q(a.options, function (a) {
                        a.selected && d.push(a.value ||
                            a.text)
                    });
                    return d
                }
                return a.value
            }
            a.value = b
        },
        html: function (a, b) {
            if (x(b)) return a.innerHTML;
            yb(a, !0);
            a.innerHTML = b
        },
        empty: cd
    }, function (a, b) {
        X.prototype[b] = function (b, c) {
            var f, e, g = this.length;
            if (a !== cd && x(2 === a.length && a !== Bb && a !== bd ? b : c)) {
                if (F(b)) {
                    for (f = 0; f < g; f++)
                        if (a === dc) a(this[f], b);
                        else
                            for (e in b) a(this[f], e, b[e]);
                    return this
                }
                f = a.$dv;
                g = x(f) ? Math.min(g, 1) : g;
                for (e = 0; e < g; e++) {
                    var h = a(this[e], b, c);
                    f = f ? f + h : h
                }
                return f
            }
            for (f = 0; f < g; f++) a(this[f], b, c);
            return this
        }
    });
    q({
        removeData: hb,
        on: function (a, b, d,
            c) {
            if (v(c)) throw ac("onargs");
            if (Yc(a)) {
                c = zb(a, !0);
                var f = c.events,
                    e = c.handle;
                e || (e = c.handle = bg(a, f));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function (b, c, g) {
                        var h = f[b];
                        h || (h = f[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, e));
                        h.push(d)
                    }; g--;) b = c[g], Ab[b] ? (h(Ab[b], dg), h(b, void 0, !0)) : h(b)
            }
        },
        off: ad,
        one: function (a, b, d) {
            a = D(a);
            a.on(b, function f() {
                a.off(b, d);
                a.off(b, f)
            });
            a.on(b, d)
        },
        replaceWith: function (a, b) {
            var d, c = a.parentNode;
            yb(a);
            q(new X(b), function (b) {
                d ?
                    c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        },
        children: function (a) {
            var b = [];
            q(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        },
        contents: function (a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new X(b);
                for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d])
            }
        },
        prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new X(b), function (b) {
                    a.insertBefore(b, d)
                })
            }
        },
        wrap: function (a, b) {
            var d = D(b).eq(0).clone()[0],
                c = a.parentNode;
            c && c.replaceChild(d, a);
            d.appendChild(a)
        },
        remove: Fb,
        detach: function (a) {
            Fb(a, !0)
        },
        after: function (a, b) {
            var d = a,
                c = a.parentNode;
            if (c) {
                b = new X(b);
                for (var f = 0, e = b.length; f < e; f++) {
                    var g = b[f];
                    c.insertBefore(g, d.nextSibling);
                    d = g
                }
            }
        },
        addClass: Db,
        removeClass: Cb,
        toggleClass: function (a, b, d) {
            b && q(b.split(" "), function (b) {
                var f = d;
                x(f) && (f = !Bb(a, b));
                (f ? Db : Cb)(a, b)
            })
        },
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function (a) {
            return a.nextElementSibling
        },
        find: function (a, b) {
            return a.getElementsByTagName ?
                a.getElementsByTagName(b) : []
        },
        clone: cc,
        triggerHandler: function (a, b, d) {
            var c, f, e = b.type || b,
                g = zb(a);
            if (g = (g = g && g.events) && g[e]) c = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: w,
                type: e,
                target: a
            }, b.type && (c = R(c, b)), b = ra(g), f = d ? [c].concat(d) : [c], q(b, function (b) {
                c.isImmediatePropagationStopped() ||
                    b.apply(a, f)
            })
        }
    }, function (a, b) {
        X.prototype[b] = function (b, c, f) {
            for (var e, g = 0, h = this.length; g < h; g++) x(e) ? (e = a(this[g], b, c, f), v(e) && (e = D(e))) : bc(e, a(this[g], b, c, f));
            return v(e) ? e : this
        }
    });
    X.prototype.bind = X.prototype.on;
    X.prototype.unbind = X.prototype.off;
    Qa.prototype = {
        put: function (a, b) {
            this[la(a, this.nextUid)] = b
        },
        get: function (a) {
            return this[la(a, this.nextUid)]
        },
        remove: function (a) {
            var b = this[a = la(a, this.nextUid)];
            delete this[a];
            return b
        }
    };
    var Uf = [function () {
            this.$get = [function () {
                return Qa
            }]
        }],
        gg = /^([^(]+?)=>/,
        hg = /^[^(]*\(\s*([^)]*)\)/m,
        Qg = /,/,
        Rg = /^\s*(_?)(\S+?)\1\s*$/,
        fg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        da = M("$injector");
    eb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b) throw E(d) && d || (d = a.name || ig(a)), da("strictdi", d);
                    b = fd(a);
                    q(b[1].split(Qg), function (a) {
                        a.replace(Rg, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else C(a) ? (b = a.length - 1, tb(a[b], "fn"), c = a.slice(0, b)) : tb(a, "fn", !0);
        return c
    };
    var be = M("$animate"),
        lf = function () {
            this.$get = w
        },
        mf = function () {
            var a =
                new Qa,
                b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
                function f(a, b, c) {
                    var d = !1;
                    b && (b = E(b) ? b.split(" ") : C(b) ? b : [], q(b, function (b) {
                        b && (d = !0, a[b] = c)
                    }));
                    return d
                }

                function e() {
                    q(b, function (b) {
                        var c = a.get(b);
                        if (c) {
                            var d = jg(b.attr("class")),
                                e = "",
                                f = "";
                            q(c, function (a, b) {
                                a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                            });
                            q(b, function (a) {
                                e && Db(a, e);
                                f && Cb(a, f)
                            });
                            a.remove(b)
                        }
                    });
                    b.length = 0
                }
                return {
                    enabled: w,
                    on: w,
                    off: w,
                    pin: w,
                    push: function (g, h, k, l) {
                        l && l();
                        k = k || {};
                        k.from && g.css(k.from);
                        k.to && g.css(k.to);
                        if (k.addClass || k.removeClass)
                            if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = f(k, h, !0), l = f(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(e);
                        g = new d;
                        g.complete();
                        return g
                    }
                }
            }]
        },
        jf = ["$provide", function (a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null);
            this.register = function (d, c) {
                if (d && "." !== d.charAt(0)) throw be("notcsel", d);
                var f = d + "-animation";
                b.$$registeredAnimations[d.substr(1)] = f;
                a.factory(f, c)
            };
            this.classNameFilter = function (a) {
                if (1 === arguments.length &&
                    (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw be("nongcls", "ng-animate");
                return this.$$classNameFilter
            };
            this.$get = ["$$animateQueue", function (a) {
                function b(a, c, d) {
                    if (d) {
                        var h;
                        a: {
                            for (h = 0; h < d.length; h++) {
                                var k = d[h];
                                if (1 === k.nodeType) {
                                    h = k;
                                    break a
                                }
                            }
                            h = void 0
                        }!h || h.parentNode || h.previousElementSibling || (d = null)
                    }
                    d ? d.after(a) : c.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function (a) {
                        a.end && a.end()
                    },
                    enter: function (f, e, g, h) {
                        e = e && D(e);
                        g = g && D(g);
                        e = e || g.parent();
                        b(f, e, g);
                        return a.push(f, "enter", Aa(h))
                    },
                    move: function (f, e, g, h) {
                        e = e && D(e);
                        g = g && D(g);
                        e = e || g.parent();
                        b(f, e, g);
                        return a.push(f, "move", Aa(h))
                    },
                    leave: function (b, c) {
                        return a.push(b, "leave", Aa(c), function () {
                            b.remove()
                        })
                    },
                    addClass: function (b, c, g) {
                        g = Aa(g);
                        g.addClass = jb(g.addclass, c);
                        return a.push(b, "addClass", g)
                    },
                    removeClass: function (b, c, g) {
                        g = Aa(g);
                        g.removeClass = jb(g.removeClass, c);
                        return a.push(b, "removeClass", g)
                    },
                    setClass: function (b, c, g, h) {
                        h = Aa(h);
                        h.addClass = jb(h.addClass, c);
                        h.removeClass = jb(h.removeClass, g);
                        return a.push(b, "setClass", h)
                    },
                    animate: function (b, c, g, h, k) {
                        k = Aa(k);
                        k.from = k.from ? R(k.from, c) : c;
                        k.to = k.to ? R(k.to, g) : g;
                        k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate");
                        return a.push(b, "animate", k)
                    }
                }
            }]
        }],
        of = function () {
            this.$get = ["$$rAF", function (a) {
                function b(b) {
                    d.push(b);
                    1 < d.length || a(function () {
                        for (var a = 0; a < d.length; a++) d[a]();
                        d = []
                    })
                }
                var d = [];
                return function () {
                    var a = !1;
                    b(function () {
                        a = !0
                    });
                    return function (d) {
                        a ? d() : b(d)
                    }
                }
            }]
        },
        nf = function () {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, f) {
                function e(a) {
                    this.setHost(a);
                    var b = d();
                    this._doneCallbacks = [];
                    this._tick = function (a) {
                        c() ? f(a, 0, !1) : b(a)
                    };
                    this._state = 0
                }
                e.chain = function (a, b) {
                    function c() {
                        if (d === a.length) b(!0);
                        else a[d](function (a) {
                            !1 === a ? b(!1) : (d++, c())
                        })
                    }
                    var d = 0;
                    c()
                };
                e.all = function (a, b) {
                    function c(f) {
                        e = e && f;
                        ++d === a.length && b(e)
                    }
                    var d = 0,
                        e = !0;
                    q(a, function (a) {
                        a.done(c)
                    })
                };
                e.prototype = {
                    setHost: function (a) {
                        this.host = a || {}
                    },
                    done: function (a) {
                        2 ===
                            this._state ? a() : this._doneCallbacks.push(a)
                    },
                    progress: w,
                    getPromise: function () {
                        if (!this.promise) {
                            var b = this;
                            this.promise = a(function (a, c) {
                                b.done(function (b) {
                                    !1 === b ? c() : a()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function (a, b) {
                        return this.getPromise().then(a, b)
                    },
                    "catch": function (a) {
                        return this.getPromise()["catch"](a)
                    },
                    "finally": function (a) {
                        return this.getPromise()["finally"](a)
                    },
                    pause: function () {
                        this.host.pause && this.host.pause()
                    },
                    resume: function () {
                        this.host.resume && this.host.resume()
                    },
                    end: function () {
                        this.host.end &&
                            this.host.end();
                        this._resolve(!0)
                    },
                    cancel: function () {
                        this.host.cancel && this.host.cancel();
                        this._resolve(!1)
                    },
                    complete: function (a) {
                        var b = this;
                        0 === b._state && (b._state = 1, b._tick(function () {
                            b._resolve(a)
                        }))
                    },
                    _resolve: function (a) {
                        2 !== this._state && (q(this._doneCallbacks, function (b) {
                            b(a)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                };
                return e
            }]
        },
        kf = function () {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
                return function (b, f) {
                    function e() {
                        a(function () {
                            g.addClass && (b.addClass(g.addClass), g.addClass =
                                null);
                            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                            g.to && (b.css(g.to), g.to = null);
                            h || k.complete();
                            h = !0
                        });
                        return k
                    }
                    var g = f || {};
                    g.$$prepared || (g = Fa(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (b.css(g.from), g.from = null);
                    var h, k = new d;
                    return {
                        start: e,
                        end: e
                    }
                }
            }]
        },
        ea = M("$compile"),
        hc = new function () {};
    Qc.$inject = ["$provide", "$$sanitizeUriProvider"];
    Ib.prototype.isFirstChange = function () {
        return this.previousValue === hc
    };
    var gd = /^((?:x|data)[:\-_])/i,
        mg = /[:\-_]+(.)/g,
        nd = M("$controller"),
        md = /^(\S+)(\s+as\s+([\w$]+))?$/,
        vf = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    b ? !b.nodeType && b instanceof D && (b = b[0]) : b = a[0].body;
                    return b.offsetWidth + 1
                }
            }]
        },
        od = "application/json",
        kc = {
            "Content-Type": od + ";charset=utf-8"
        },
        pg = /^\[|^\{(?!\{)/,
        qg = {
            "[": /]$/,
            "{": /}$/
        },
        og = /^\)]\}',?\n/,
        td = M("$http"),
        Ea = $.$interpolateMinErr = M("$interpolate");
    Ea.throwNoconcat = function (a) {
        throw Ea("noconcat", a);
    };
    Ea.interr = function (a, b) {
        return Ea("interr", a, b.toString())
    };
    var Df = function () {
            this.$get = ["$window",
                function (a) {
                    function b(a) {
                        var b = function (a) {
                            b.data = a;
                            b.called = !0
                        };
                        b.id = a;
                        return b
                    }
                    var d = a.angular.callbacks,
                        c = {};
                    return {
                        createCallback: function (a) {
                            a = "_" + (d.$$counter++).toString(36);
                            var e = "angular.callbacks." + a,
                                g = b(a);
                            c[e] = d[a] = g;
                            return e
                        },
                        wasCalled: function (a) {
                            return c[a].called
                        },
                        getResponse: function (a) {
                            return c[a].data
                        },
                        removeCallback: function (a) {
                            delete d[c[a].id];
                            delete c[a]
                        }
                    }
                }
            ]
        },
        Sg = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        sg = {
            http: 80,
            https: 443,
            ftp: 21
        },
        lb = M("$location"),
        tg = /^\s*[\\/]{2,}/,
        Tg = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: Jb("$$absUrl"),
            url: function (a) {
                if (x(a)) return this.$$url;
                var b = Sg.exec(a);
                (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
                (b[2] || b[1] || "" === a) && this.search(b[3] || "");
                this.hash(b[5] || "");
                return this
            },
            protocol: Jb("$$protocol"),
            host: Jb("$$host"),
            port: Jb("$$port"),
            path: xd("$$path", function (a) {
                a = null !== a ? a.toString() : "";
                return "/" === a.charAt(0) ? a : "/" + a
            }),
            search: function (a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (E(a) || Y(a)) a = a.toString(), this.$$search =
                            Lc(a);
                        else if (F(a)) a = Fa(a, {}), q(a, function (b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a;
                        else throw lb("isrcharg");
                        break;
                    default:
                        x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                this.$$compose();
                return this
            },
            hash: xd("$$hash", function (a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    q([wd, oc, nc], function (a) {
        a.prototype = Object.create(Tg);
        a.prototype.state = function (b) {
            if (!arguments.length) return this.$$state;
            if (a !== nc || !this.$$html5) throw lb("nostate");
            this.$$state =
                x(b) ? null : b;
            return this
        }
    });
    var Ua = M("$parse"),
        wg = {}.constructor.prototype.valueOf,
        Qb = W();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Qb[a] = !0
    });
    var Ug = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        qc = function (a) {
            this.options = a
        };
    qc.prototype = {
        constructor: qc,
        lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
            else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++;
            else if (this.isWhitespace(a)) this.index++;
            else {
                var b = a + this.peek(),
                    d = b + this.peek(2),
                    c = Qb[b],
                    f = Qb[d];
                Qb[a] || c || f ? (a = f ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function (a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function (a) {
            a =
                a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        },
        isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdentifierStart: function (a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
        },
        isValidIdentifierStart: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isIdentifierContinue: function (a) {
            return this.options.isIdentifierContinue ?
                this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
        },
        isValidIdentifierContinue: function (a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a)
        },
        codePointAt: function (a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
        },
        peekMultichar: function () {
            var a = this.text.charAt(this.index),
                b = this.peek();
            if (!b) return a;
            var d = a.charCodeAt(0),
                c = b.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a
        },
        isExpOperator: function (a) {
            return "-" ===
                a || "+" === a || this.isNumber(a)
        },
        throwError: function (a, b, d) {
            d = d || this.index;
            b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw Ua("lexerr", a, b, this.text);
        },
        readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = P(this.text.charAt(this.index));
                if ("." === d || this.isNumber(d)) a += d;
                else {
                    var c = this.peek();
                    if ("e" === d && this.isExpOperator(c)) a += d;
                    else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) ||
                        c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function () {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b)) break;
                this.index += b.length
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, f = !1; this.index < this.text.length;) {
                var e = this.text.charAt(this.index),
                    c = c + e;
                if (f) "u" === e ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ug[e] || e, f = !1;
                else if ("\\" === e) f = !0;
                else {
                    if (e === a) {
                        this.index++;
                        this.tokens.push({
                            index: b,
                            text: c,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += e
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var s = function (a, b) {
        this.lexer =
            a;
        this.options = b
    };
    s.Program = "Program";
    s.ExpressionStatement = "ExpressionStatement";
    s.AssignmentExpression = "AssignmentExpression";
    s.ConditionalExpression = "ConditionalExpression";
    s.LogicalExpression = "LogicalExpression";
    s.BinaryExpression = "BinaryExpression";
    s.UnaryExpression = "UnaryExpression";
    s.CallExpression = "CallExpression";
    s.MemberExpression = "MemberExpression";
    s.Identifier = "Identifier";
    s.Literal = "Literal";
    s.ArrayExpression = "ArrayExpression";
    s.Property = "Property";
    s.ObjectExpression = "ObjectExpression";
    s.ThisExpression = "ThisExpression";
    s.LocalsExpression = "LocalsExpression";
    s.NGValueParameter = "NGValueParameter";
    s.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        },
        program: function () {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: s.Program,
                    body: a
                }
        },
        expressionStatement: function () {
            return {
                type: s.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary();
            if (this.expect("=")) {
                if (!Ad(a)) throw Ua("lval");
                a = {
                    type: s.AssignmentExpression,
                    left: a,
                    right: this.assignment(),
                    operator: "="
                }
            }
            return a
        },
        ternary: function () {
            var a = this.logicalOR(),
                b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: s.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        },
        logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: s.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");) a = {
                type: s.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function () {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        },
        relational: function () {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a
        },
        additive: function () {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        },
        multiplicative: function () {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        },
        unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = Fa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                    type: s.Literal,
                    value: this.options.literals[this.consume().text]
                } :
                this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: s.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: s.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: s.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function (a) {
            a = [a];
            for (var b = {
                    type: s.CallExpression,
                    callee: this.identifier(),
                    arguments: a,
                    filter: !0
                }; this.expect(":");) a.push(this.expression());
            return b
        },
        parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.filterChain()); while (this.expect(","))
            }
            return a
        },
        identifier: function () {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {
                type: s.Identifier,
                name: a.text
            }
        },
        constant: function () {
            return {
                type: s.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {
                type: s.ArrayExpression,
                elements: a
            }
        },
        object: function () {
            var a = [],
                b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    b = {
                        type: s.Property,
                        kind: "init"
                    };
                    this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ?
                        (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {
                type: s.ObjectExpression,
                properties: a
            }
        },
        throwError: function (a, b) {
            throw Ua("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function (a) {
            if (0 === this.tokens.length) throw Ua("ueoe",
                this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw Ua("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        },
        peekAhead: function (a, b, d, c, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var e = a.text;
                if (e === b || e === d || e === c || e === f || !(b || d || c || f)) return a
            }
            return !1
        },
        expect: function (a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
        },
        selfReferential: {
            "this": {
                type: s.ThisExpression
            },
            $locals: {
                type: s.LocalsExpression
            }
        }
    };
    Dd.prototype = {
        compile: function (a) {
            var b = this;
            a = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            };
            V(a, b.$filter);
            var d = "",
                c;
            this.stage = "assign";
            if (c = Bd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            c = zd(a.body);
            b.stage = "inputs";
            q(c, function (a, c) {
                var d = "fn" + c;
                b.state[d] = {
                    vars: [],
                    body: [],
                    own: {}
                };
                b.state.computing =
                    d;
                var h = b.nextId();
                b.recurse(a, h);
                b.return_(h);
                b.state.inputs.push(d);
                a.watchId = c
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(a);
            d = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";
            d = (new Function("$filter", "getStringValue", "ifDefined", "plus", d))(this.$filter, ug, vg, yd);
            this.state = this.stage = void 0;
            d.literal = Cd(a);
            d.constant = a.constant;
            return d
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
            var a = [],
                b = this.state.inputs,
                d = this;
            q(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"))
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("")
        },
        generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function () {
            var a = [],
                b = this;
            q(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") +
                ";" : ""
        },
        body: function (a) {
            return this.state[a].body.join("")
        },
        recurse: function (a, b, d, c, f, e) {
            var g, h, k = this,
                l, m, n;
            c = c || w;
            if (!e && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, f, !0));
            else switch (a.type) {
                case s.Program:
                    q(a.body, function (b, c) {
                        k.recurse(b.expression, void 0, void 0, function (a) {
                            h = a
                        });
                        c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                    });
                    break;
                case s.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(b || m);
                    break;
                case s.UnaryExpression:
                    this.recurse(a.argument, void 0, void 0, function (a) {
                        h = a
                    });
                    m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.BinaryExpression:
                    this.recurse(a.left, void 0, void 0, function (a) {
                        g = a
                    });
                    this.recurse(a.right, void 0, void 0, function (a) {
                        h = a
                    });
                    m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.LogicalExpression:
                    b = b || this.nextId();
                    k.recurse(a.left,
                        b);
                    k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case s.ConditionalExpression:
                    b = b || this.nextId();
                    k.recurse(a.test, b);
                    k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case s.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if_("inputs" === k.stage || "s", function () {
                            f &&
                                1 !== f && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(b, k.nonComputedMember("s", a.name))
                        })
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                    c(b);
                    break;
                case s.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    k.recurse(a.object, g, void 0, function () {
                        k.if_(k.notNull(g), function () {
                            a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), f && 1 !== f && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g,
                                h), "{}")), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (f && 1 !== f && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name))
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }, !!f);
                    break;
                case s.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
                            var b = k.nextId();
                            k.recurse(a, b);
                            l.push(b)
                        }),
                        m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                        k.if_(k.notNull(h), function () {
                            q(a.arguments, function (b) {
                                k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                                    l.push(a)
                                })
                            });
                            m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")";
                            k.assign(b, m)
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }));
                    break;
                case s.AssignmentExpression:
                    h = this.nextId();
                    g = {};
                    this.recurse(a.left, void 0, g, function () {
                        k.if_(k.notNull(g.context),
                            function () {
                                k.recurse(a.right, h);
                                m = k.member(g.context, g.name, g.computed) + a.operator + h;
                                k.assign(b, m);
                                c(b || m)
                            })
                    }, 1);
                    break;
                case s.ArrayExpression:
                    l = [];
                    q(a.elements, function (b) {
                        k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                            l.push(a)
                        })
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(b || m);
                    break;
                case s.ObjectExpression:
                    l = [];
                    n = !1;
                    q(a.properties, function (a) {
                        a.computed && (n = !0)
                    });
                    n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
                        a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type ===
                            s.Identifier ? a.key.name : "" + a.key.value;
                        h = k.nextId();
                        k.recurse(a.value, h);
                        k.assign(k.member(b, g, a.computed), h)
                    })) : (q(a.properties, function (b) {
                        k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                            l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
                        })
                    }), m = "{" + l.join(",") + "}", this.assign(b, m));
                    c(b || m);
                    break;
                case s.ThisExpression:
                    this.assign(b, "s");
                    c(b || "s");
                    break;
                case s.LocalsExpression:
                    this.assign(b, "l");
                    c(b || "l");
                    break;
                case s.NGValueParameter:
                    this.assign(b, "v"), c(b ||
                        "v")
            }
        },
        getHasOwnProperty: function (a, b) {
            var d = a + "." + b,
                c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d]
        },
        assign: function (a, b) {
            if (a) return this.current().body.push(a, "=", b, ";"), a
        },
        filter: function (a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a]
        },
        ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function (a) {
            this.current().body.push("return ",
                a, ";")
        },
        if_: function (a, b, d) {
            if (!0 === a) b();
            else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"))
            }
        },
        not: function (a) {
            return "!(" + a + ")"
        },
        isNull: function (a) {
            return a + "==null"
        },
        notNull: function (a) {
            return a + "!=null"
        },
        nonComputedMember: function (a, b) {
            var d = /[^$_a-zA-Z0-9]/g;
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
        },
        computedMember: function (a, b) {
            return a + "[" + b + "]"
        },
        member: function (a, b, d) {
            return d ? this.computedMember(a,
                b) : this.nonComputedMember(a, b)
        },
        getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        },
        lazyRecurse: function (a, b, d, c, f, e) {
            var g = this;
            return function () {
                g.recurse(a, b, d, c, f, e)
            }
        },
        lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function (a) {
            if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (Y(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if ("undefined" === typeof a) return "undefined";
            throw Ua("esc");
        },
        nextId: function (a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        },
        current: function () {
            return this.state[this.state.computing]
        }
    };
    Ed.prototype = {
        compile: function (a) {
            var b = this;
            a = this.astBuilder.ast(a);
            V(a, b.$filter);
            var d, c;
            if (d = Bd(a)) c = this.recurse(d);
            d = zd(a.body);
            var f;
            d && (f = [], q(d, function (a, c) {
                var d = b.recurse(a);
                a.input = d;
                f.push(d);
                a.watchId = c
            }));
            var e = [];
            q(a.body, function (a) {
                e.push(b.recurse(a.expression))
            });
            d = 0 === a.body.length ? w : 1 === a.body.length ? e[0] : function (a, b) {
                var c;
                q(e, function (d) {
                    c = d(a, b)
                });
                return c
            };
            c && (d.assign = function (a, b, d) {
                return c(a, d, b)
            });
            f && (d.inputs = f);
            d.literal = Cd(a);
            d.constant = a.constant;
            return d
        },
        recurse: function (a, b, d) {
            var c, f, e = this,
                g;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case s.Literal:
                    return this.value(a.value, b);
                case s.UnaryExpression:
                    return f = this.recurse(a.argument), this["unary" +
                        a.operator](f, b);
                case s.BinaryExpression:
                    return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);
                case s.LogicalExpression:
                    return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);
                case s.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case s.Identifier:
                    return e.identifier(a.name, b, d);
                case s.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (f = a.property.name),
                        a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(c, f, b, d) : this.nonComputedMember(c, f, b, d);
                case s.CallExpression:
                    return g = [], q(a.arguments, function (a) {
                        g.push(e.recurse(a))
                    }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, e) {
                        for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, e));
                        a = f.apply(void 0, n, e);
                        return b ? {
                            context: void 0,
                            name: void 0,
                            value: a
                        } : a
                    } : function (a, c, d, e) {
                        var n = f(a, c, d, e),
                            p;
                        if (null != n.value) {
                            p = [];
                            for (var r = 0; r <
                                g.length; ++r) p.push(g[r](a, c, d, e));
                            p = n.value.apply(n.context, p)
                        }
                        return b ? {
                            value: p
                        } : p
                    };
                case s.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), f = this.recurse(a.right),
                        function (a, d, e, g) {
                            var n = c(a, d, e, g);
                            a = f(a, d, e, g);
                            n.context[n.name] = a;
                            return b ? {
                                value: a
                            } : a
                        };
                case s.ArrayExpression:
                    return g = [], q(a.elements, function (a) {
                            g.push(e.recurse(a))
                        }),
                        function (a, c, d, e) {
                            for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        };
                case s.ObjectExpression:
                    return g = [], q(a.properties, function (a) {
                            a.computed ?
                                g.push({
                                    key: e.recurse(a.key),
                                    computed: !0,
                                    value: e.recurse(a.value)
                                }) : g.push({
                                    key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                                    computed: !1,
                                    value: e.recurse(a.value)
                                })
                        }),
                        function (a, c, d, e) {
                            for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        };
                case s.ThisExpression:
                    return function (a) {
                        return b ? {
                            value: a
                        } : a
                    };
                case s.LocalsExpression:
                    return function (a, c) {
                        return b ? {
                            value: c
                        } : c
                    };
                case s.NGValueParameter:
                    return function (a,
                        c, d) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function (a, b) {
            return function (d, c, f, e) {
                d = a(d, c, f, e);
                d = v(d) ? +d : 0;
                return b ? {
                    value: d
                } : d
            }
        },
        "unary-": function (a, b) {
            return function (d, c, f, e) {
                d = a(d, c, f, e);
                d = v(d) ? -d : -0;
                return b ? {
                    value: d
                } : d
            }
        },
        "unary!": function (a, b) {
            return function (d, c, f, e) {
                d = !a(d, c, f, e);
                return b ? {
                    value: d
                } : d
            }
        },
        "binary+": function (a, b, d) {
            return function (c, f, e, g) {
                var h = a(c, f, e, g);
                c = b(c, f, e, g);
                h = yd(h, c);
                return d ? {
                    value: h
                } : h
            }
        },
        "binary-": function (a, b, d) {
            return function (c, f, e, g) {
                var h = a(c, f, e, g);
                c = b(c, f, e, g);
                h = (v(h) ? h : 0) - (v(c) ? c : 0);
                return d ? {
                    value: h
                } : h
            }
        },
        "binary*": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) * b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary/": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) / b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary%": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) % b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary===": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) === b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary!==": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c,
                    f, e, g) !== b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary==": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) == b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary!=": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) != b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary<": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) < b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary>": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) > b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary<=": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e,
                    g) <= b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary>=": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) >= b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary&&": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) && b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary||": function (a, b, d) {
            return function (c, f, e, g) {
                c = a(c, f, e, g) || b(c, f, e, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "ternary?:": function (a, b, d, c) {
            return function (f, e, g, h) {
                f = a(f, e, g, h) ? b(f, e, g, h) : d(f, e, g, h);
                return c ? {
                    value: f
                } : f
            }
        },
        value: function (a, b) {
            return function () {
                return b ? {
                    context: void 0,
                    name: void 0,
                    value: a
                } : a
            }
        },
        identifier: function (a, b, d) {
            return function (c, f, e, g) {
                c = f && a in f ? f : c;
                d && 1 !== d && c && null == c[a] && (c[a] = {});
                f = c ? c[a] : void 0;
                return b ? {
                    context: c,
                    name: a,
                    value: f
                } : f
            }
        },
        computedMember: function (a, b, d, c) {
            return function (f, e, g, h) {
                var k = a(f, e, g, h),
                    l, m;
                null != k && (l = b(f, e, g, h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);
                return d ? {
                    context: k,
                    name: l,
                    value: m
                } : m
            }
        },
        nonComputedMember: function (a, b, d, c) {
            return function (f, e, g, h) {
                f = a(f, e, g, h);
                c && 1 !== c && f && null == f[b] && (f[b] = {});
                e = null != f ? f[b] : void 0;
                return d ? {
                    context: f,
                    name: b,
                    value: e
                } : e
            }
        },
        inputs: function (a, b) {
            return function (d, c, f, e) {
                return e ? e[b] : a(d, c, f)
            }
        }
    };
    var rc = function (a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new s(a, d);
        this.astCompiler = d.csp ? new Ed(this.ast, b) : new Dd(this.ast, b)
    };
    rc.prototype = {
        constructor: rc,
        parse: function (a) {
            return this.astCompiler.compile(a)
        }
    };
    var ua = M("$sce"),
        pa = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        sc = /_([a-z])/g,
        yg = M("$compile"),
        ca = z.document.createElement("a"),
        Id =
        Da(z.location.href);
    Jd.$inject = ["$document"];
    Xc.$inject = ["$provide"];
    var Qd = 22,
        Pd = ".",
        uc = "0";
    Kd.$inject = ["$locale"];
    Md.$inject = ["$locale"];
    var Jg = {
            yyyy: aa("FullYear", 4, 0, !1, !0),
            yy: aa("FullYear", 2, 0, !0, !0),
            y: aa("FullYear", 1, 0, !1, !0),
            MMMM: nb("Month"),
            MMM: nb("Month", !0),
            MM: aa("Month", 2, 1),
            M: aa("Month", 1, 1),
            LLLL: nb("Month", !1, !0),
            dd: aa("Date", 2),
            d: aa("Date", 1),
            HH: aa("Hours", 2),
            H: aa("Hours", 1),
            hh: aa("Hours", 2, -12),
            h: aa("Hours", 1, -12),
            mm: aa("Minutes", 2),
            m: aa("Minutes", 1),
            ss: aa("Seconds", 2),
            s: aa("Seconds",
                1),
            sss: aa("Milliseconds", 3),
            EEEE: nb("Day"),
            EEE: nb("Day", !0),
            a: function (a, b) {
                return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
            },
            Z: function (a, b, d) {
                a = -1 * d;
                return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2))
            },
            ww: Sd(2),
            w: Sd(1),
            G: vc,
            GG: vc,
            GGG: vc,
            GGGG: function (a, b) {
                return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
            }
        },
        Ig = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Hg = /^-?\d+$/;
    Ld.$inject = ["$locale"];
    var Cg = ma(P),
        Dg = ma(vb);
    Nd.$inject = ["$parse"];
    var Ae = ma({
            restrict: "E",
            compile: function (a, b) {
                if (!b.href && !b.xlinkHref) return function (a, b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var f = "[object SVGAnimatedString]" === na.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function (a) {
                            b.attr(f) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        wb = {};
    q(Gb, function (a, b) {
        function d(a, d, f) {
            a.$watch(f[c], function (a) {
                f.$set(b, !!a)
            })
        }
        if ("multiple" !== a) {
            var c = Ca("ng-" + b),
                f = d;
            "checked" === a && (f = function (a, b, f) {
                f.ngModel !== f[c] && d(a, b, f)
            });
            wb[c] = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    link: f
                }
            }
        }
    });
    q(ld, function (a, b) {
        wb[b] = function () {
            return {
                priority: 100,
                link: function (a, c, f) {
                    if ("ngPattern" === b && "/" === f.ngPattern.charAt(0) && (c = f.ngPattern.match(Ng))) {
                        f.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(f[b], function (a) {
                        f.$set(b, a)
                    })
                }
            }
        }
    });
    q(["src", "srcset", "href"], function (a) {
        var b = Ca("ng-" + a);
        wb[b] = function () {
            return {
                priority: 99,
                link: function (d, c, f) {
                    var e = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === na.call(c.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href",
                        e = null);
                    f.$observe(b, function (b) {
                        b ? (f.$set(g, b), La && e && c.prop(e, f[g])) : "href" === a && f.$set(g, null)
                    })
                }
            }
        }
    });
    var Mb = {
        $addControl: w,
        $$renameControl: function (a, b) {
            a.$name = b
        },
        $removeControl: w,
        $setValidity: w,
        $setDirty: w,
        $setPristine: w,
        $setSubmitted: w
    };
    Lb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    Lb.prototype = {
        $rollbackViewValue: function () {
            q(this.$$controls, function (a) {
                a.$rollbackViewValue()
            })
        },
        $commitViewValue: function () {
            q(this.$$controls, function (a) {
                a.$commitViewValue()
            })
        },
        $addControl: function (a) {
            Pa(a.$name,
                "input");
            this.$$controls.push(a);
            a.$name && (this[a.$name] = a);
            a.$$parentForm = this
        },
        $$renameControl: function (a, b) {
            var d = a.$name;
            this[d] === a && delete this[d];
            this[b] = a;
            a.$name = b
        },
        $removeControl: function (a) {
            a.$name && this[a.$name] === a && delete this[a.$name];
            q(this.$pending, function (b, d) {
                this.$setValidity(d, null, a)
            }, this);
            q(this.$error, function (b, d) {
                this.$setValidity(d, null, a)
            }, this);
            q(this.$$success, function (b, d) {
                this.$setValidity(d, null, a)
            }, this);
            $a(this.$$controls, a);
            a.$$parentForm = Mb
        },
        $setDirty: function () {
            this.$$animate.removeClass(this.$$element,
                Va);
            this.$$animate.addClass(this.$$element, Rb);
            this.$dirty = !0;
            this.$pristine = !1;
            this.$$parentForm.$setDirty()
        },
        $setPristine: function () {
            this.$$animate.setClass(this.$$element, Va, Rb + " ng-submitted");
            this.$dirty = !1;
            this.$pristine = !0;
            this.$submitted = !1;
            q(this.$$controls, function (a) {
                a.$setPristine()
            })
        },
        $setUntouched: function () {
            q(this.$$controls, function (a) {
                a.$setUntouched()
            })
        },
        $setSubmitted: function () {
            this.$$animate.addClass(this.$$element, "ng-submitted");
            this.$submitted = !0;
            this.$$parentForm.$setSubmitted()
        }
    };
    Vd({
        clazz: Lb,
        set: function (a, b, d) {
            var c = a[b];
            c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d]
        },
        unset: function (a, b, d) {
            var c = a[b];
            c && ($a(c, d), 0 === c.length && delete a[b])
        }
    });
    var ce = function (a) {
            return ["$timeout", "$parse", function (b, d) {
                function c(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || w
                }
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Lb,
                    compile: function (d, e) {
                        d.addClass(Va).addClass(ob);
                        var g = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (a, d, e, f) {
                                var n = f[0];
                                if (!("action" in
                                        e)) {
                                    var p = function (b) {
                                        a.$apply(function () {
                                            n.$commitViewValue();
                                            n.$setSubmitted()
                                        });
                                        b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", p);
                                    d.on("$destroy", function () {
                                        b(function () {
                                            d[0].removeEventListener("submit", p)
                                        }, 0, !1)
                                    })
                                }(f[1] || n.$$parentForm).$addControl(n);
                                var r = g ? c(n.$name) : w;
                                g && (r(a, n), e.$observe(g, function (b) {
                                    n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), r = c(n.$name), r(a, n))
                                }));
                                d.on("$destroy", function () {
                                    n.$$parentForm.$removeControl(n);
                                    r(a, void 0);
                                    R(n, Mb)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Be = ce(),
        Ne = ce(!0),
        Kg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Vg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Wg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Lg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        de = /^(\d{4,})-(\d{2})-(\d{2})$/,
        ee = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Cc = /^(\d{4,})-W(\d\d)$/,
        fe = /^(\d{4,})-(\d\d)$/,
        ge = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Xd = W();
    q(["date", "datetime-local", "month", "time", "week"], function (a) {
        Xd[a] = !0
    });
    var he = {
            text: function (a, b, d, c, f, e) {
                Sa(a, b, d, c, f, e);
                xc(c)
            },
            date: pb("date", de, Nb(de, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": pb("datetimelocal", ee, Nb(ee, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: pb("time", ge, Nb(ge, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: pb("week", Cc, function (a, b) {
                if (fa(a)) return a;
                if (E(a)) {
                    Cc.lastIndex = 0;
                    var d = Cc.exec(a);
                    if (d) {
                        var c = +d[1],
                            f = +d[2],
                            e = d = 0,
                            g = 0,
                            h = 0,
                            k = Rd(c),
                            f = 7 * (f - 1);
                        b && (d = b.getHours(), e = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                        return new Date(c, 0, k.getDate() + f, d, e, g, h)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: pb("month", fe, Nb(fe, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, b, d, c, f, e) {
                yc(a, b, d, c);
                Yd(c);
                Sa(a, b, d, c, f, e);
                var g, h;
                if (v(d.min) || d.ngMin) c.$validators.min = function (a) {
                    return c.$isEmpty(a) || x(g) || a >= g
                }, d.$observe("min", function (a) {
                    g = Ta(a);
                    c.$validate()
                });
                if (v(d.max) || d.ngMax) c.$validators.max = function (a) {
                    return c.$isEmpty(a) || x(h) || a <= h
                }, d.$observe("max", function (a) {
                    h = Ta(a);
                    c.$validate()
                });
                if (v(d.step) || d.ngStep) {
                    var k;
                    c.$validators.step = function (a, b) {
                        return c.$isEmpty(b) || x(k) || Zd(b, g || 0, k)
                    };
                    d.$observe("step", function (a) {
                        k = Ta(a);
                        c.$validate()
                    })
                }
            },
            url: function (a, b, d, c, f, e) {
                Sa(a, b, d, c, f, e);
                xc(c);
                c.$$parserName = "url";
                c.$validators.url = function (a, b) {
                    var d = a || b;
                    return c.$isEmpty(d) || Vg.test(d)
                }
            },
            email: function (a, b, d, c, f, e) {
                Sa(a, b, d, c, f, e);
                xc(c);
                c.$$parserName =
                    "email";
                c.$validators.email = function (a, b) {
                    var d = a || b;
                    return c.$isEmpty(d) || Wg.test(d)
                }
            },
            radio: function (a, b, d, c) {
                var f = !d.ngTrim || "false" !== S(d.ngTrim);
                x(d.name) && b.attr("name", ++rb);
                b.on("click", function (a) {
                    var g;
                    b[0].checked && (g = d.value, f && (g = S(g)), c.$setViewValue(g, a && a.type))
                });
                c.$render = function () {
                    var a = d.value;
                    f && (a = S(a));
                    b[0].checked = a === c.$viewValue
                };
                d.$observe("value", c.$render)
            },
            range: function (a, b, d, c, f, e) {
                function g(a, c) {
                    b.attr(a, d[a]);
                    d.$observe(a, c)
                }

                function h(a) {
                    n = Ta(a);
                    ga(c.$modelValue) ||
                        (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate())
                }

                function k(a) {
                    p = Ta(a);
                    ga(c.$modelValue) || (m ? (a = b.val(), p < a && (b.val(p), a = p < n ? n : p), c.$setViewValue(a)) : c.$validate())
                }

                function l(a) {
                    r = Ta(a);
                    ga(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate())
                }
                yc(a, b, d, c);
                Yd(c);
                Sa(a, b, d, c, f, e);
                var m = c.$$hasNativeValidators && "range" === b[0].type,
                    n = m ? 0 : void 0,
                    p = m ? 100 : void 0,
                    r = m ? 1 : void 0,
                    q = b[0].validity;
                a = v(d.min);
                f = v(d.max);
                e = v(d.step);
                var s = c.$render;
                c.$render = m && v(q.rangeUnderflow) &&
                    v(q.rangeOverflow) ? function () {
                        s();
                        c.$setViewValue(b.val())
                    } : s;
                a && (c.$validators.min = m ? function () {
                    return !0
                } : function (a, b) {
                    return c.$isEmpty(b) || x(n) || b >= n
                }, g("min", h));
                f && (c.$validators.max = m ? function () {
                    return !0
                } : function (a, b) {
                    return c.$isEmpty(b) || x(p) || b <= p
                }, g("max", k));
                e && (c.$validators.step = m ? function () {
                    return !q.stepMismatch
                } : function (a, b) {
                    return c.$isEmpty(b) || x(r) || Zd(b, n || 0, r)
                }, g("step", l))
            },
            checkbox: function (a, b, d, c, f, e, g, h) {
                var k = $d(h, a, "ngTrueValue", d.ngTrueValue, !0),
                    l = $d(h, a, "ngFalseValue",
                        d.ngFalseValue, !1);
                b.on("click", function (a) {
                    c.$setViewValue(b[0].checked, a && a.type)
                });
                c.$render = function () {
                    b[0].checked = c.$viewValue
                };
                c.$isEmpty = function (a) {
                    return !1 === a
                };
                c.$formatters.push(function (a) {
                    return qa(a, k)
                });
                c.$parsers.push(function (a) {
                    return a ? k : l
                })
            },
            hidden: w,
            button: w,
            submit: w,
            reset: w,
            file: w
        },
        Rc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function (f, e, g, h) {
                        h[0] && (he[P(g.type)] || he.text)(f, e, g, h[0], b, a, d, c)
                    }
                }
            }
        }],
        Xg = /^(true|false|\d+)$/,
        ef = function () {
            return {
                restrict: "A",
                priority: 100,
                compile: function (a, b) {
                    return Xg.test(b.ngValue) ? function (a, b, f) {
                        a = a.$eval(f.ngValue);
                        b.prop("value", a);
                        f.$set("value", a)
                    } : function (a, b, f) {
                        a.$watch(f.ngValue, function (a) {
                            b.prop("value", a);
                            f.$set("value", a)
                        })
                    }
                }
            }
        },
        Fe = ["$compile", function (a) {
            return {
                restrict: "AC",
                compile: function (b) {
                    a.$$addBindingClass(b);
                    return function (b, c, f) {
                        a.$$addBindingInfo(c, f.ngBind);
                        c = c[0];
                        b.$watch(f.ngBind, function (a) {
                            c.textContent = Yb(a)
                        })
                    }
                }
            }
        }],
        He = ["$interpolate", "$compile", function (a,
            b) {
            return {
                compile: function (d) {
                    b.$$addBindingClass(d);
                    return function (c, d, e) {
                        c = a(d.attr(e.$attr.ngBindTemplate));
                        b.$$addBindingInfo(d, c.expressions);
                        d = d[0];
                        e.$observe("ngBindTemplate", function (a) {
                            d.textContent = x(a) ? "" : a
                        })
                    }
                }
            }
        }],
        Ge = ["$sce", "$parse", "$compile", function (a, b, d) {
            return {
                restrict: "A",
                compile: function (c, f) {
                    var e = b(f.ngBindHtml),
                        g = b(f.ngBindHtml, function (b) {
                            return a.valueOf(b)
                        });
                    d.$$addBindingClass(c);
                    return function (b, c, f) {
                        d.$$addBindingInfo(c, f.ngBindHtml);
                        b.$watch(g, function () {
                            var d = e(b);
                            c.html(a.getTrustedHtml(d) || "")
                        })
                    }
                }
            }
        }],
        df = ma({
            restrict: "A",
            require: "ngModel",
            link: function (a, b, d, c) {
                c.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }),
        Ie = Ac("", !0),
        Ke = Ac("Odd", 0),
        Je = Ac("Even", 1),
        Le = Ra({
            compile: function (a, b) {
                b.$set("ngCloak", void 0);
                a.removeClass("ng-cloak")
            }
        }),
        Me = [function () {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Wc = {},
        Yg = {
            blur: !0,
            focus: !0
        };
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function (a) {
            var b = Ca("ng-" + a);
            Wc[b] = ["$parse", "$rootScope", function (d, c) {
                return {
                    restrict: "A",
                    compile: function (f, e) {
                        var g = d(e[b], null, !0);
                        return function (b, d) {
                            d.on(a, function (d) {
                                var e = function () {
                                    g(b, {
                                        $event: d
                                    })
                                };
                                Yg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                            })
                        }
                    }
                }
            }]
        });
    var Pe = ["$animate", "$compile", function (a, b) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (d, c, f, e, g) {
                    var h, k, l;
                    d.$watch(f.ngIf, function (d) {
                        d ? k || g(function (d, e) {
                            k = e;
                            d[d.length++] =
                                b.$$createComment("end ngIf", f.ngIf);
                            h = {
                                clone: d
                            };
                            a.enter(d, c.parent(), c)
                        }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).done(function (a) {
                            !1 !== a && (l = null)
                        }), h = null))
                    })
                }
            }
        }],
        Qe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: $.noop,
                compile: function (c, f) {
                    var e = f.ngInclude || f.src,
                        g = f.onload || "",
                        h = f.autoscroll;
                    return function (c, f, m, n, p) {
                        var q = 0,
                            s, w, u, H = function () {
                                w && (w.remove(),
                                    w = null);
                                s && (s.$destroy(), s = null);
                                u && (d.leave(u).done(function (a) {
                                    !1 !== a && (w = null)
                                }), w = u, u = null)
                            };
                        c.$watch(e, function (e) {
                            var m = function (a) {
                                    !1 === a || !v(h) || h && !c.$eval(h) || b()
                                },
                                w = ++q;
                            e ? (a(e, !0).then(function (a) {
                                if (!c.$$destroyed && w === q) {
                                    var b = c.$new();
                                    n.template = a;
                                    a = p(b, function (a) {
                                        H();
                                        d.enter(a, null, f).done(m)
                                    });
                                    s = b;
                                    u = a;
                                    s.$emit("$includeContentLoaded", e);
                                    c.$eval(g)
                                }
                            }, function () {
                                c.$$destroyed || w !== q || (H(), c.$emit("$includeContentError", e))
                            }), c.$emit("$includeContentRequested", e)) : (H(), n.template = null)
                        })
                    }
                }
            }
        }],
        gf = ["$compile", function (a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (b, d, c, f) {
                    na.call(d[0]).match(/SVG/) ? (d.empty(), a(Zc(f.template, z.document).childNodes)(b, function (a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), a(d.contents())(b))
                }
            }
        }],
        Re = Ra({
            priority: 450,
            compile: function () {
                return {
                    pre: function (a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        cf = function () {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function (a, b, d, c) {
                    var f = d.ngList || ", ",
                        e = "false" !== d.ngTrim,
                        g =
                        e ? S(f) : f;
                    c.$parsers.push(function (a) {
                        if (!x(a)) {
                            var b = [];
                            a && q(a.split(g), function (a) {
                                a && b.push(e ? S(a) : a)
                            });
                            return b
                        }
                    });
                    c.$formatters.push(function (a) {
                        if (C(a)) return a.join(f)
                    });
                    c.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        },
        ob = "ng-valid",
        Ud = "ng-invalid",
        Va = "ng-pristine",
        Rb = "ng-dirty",
        qb = M("ngModel");
    Ob.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
    Ob.prototype = {
        $$initGetterSetters: function () {
            if (this.$options.getOption("getterSetter")) {
                var a =
                    this.$$parse(this.$$attr.ngModel + "()"),
                    b = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function (b) {
                    var c = this.$$parsedNgModel(b);
                    y(c) && (c = a(b));
                    return c
                };
                this.$$ngModelSet = function (a, c) {
                    y(this.$$parsedNgModel(a)) ? b(a, {
                        $$$p: c
                    }) : this.$$parsedNgModelAssign(a, c)
                }
            } else if (!this.$$parsedNgModel.assign) throw qb("nonassign", this.$$attr.ngModel, ya(this.$$element));
        },
        $render: w,
        $isEmpty: function (a) {
            return x(a) || "" === a || null === a || a !== a
        },
        $$updateEmptyClasses: function (a) {
            this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element,
                "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
        },
        $setPristine: function () {
            this.$dirty = !1;
            this.$pristine = !0;
            this.$$animate.removeClass(this.$$element, Rb);
            this.$$animate.addClass(this.$$element, Va)
        },
        $setDirty: function () {
            this.$dirty = !0;
            this.$pristine = !1;
            this.$$animate.removeClass(this.$$element, Va);
            this.$$animate.addClass(this.$$element, Rb);
            this.$$parentForm.$setDirty()
        },
        $setUntouched: function () {
            this.$touched = !1;
            this.$untouched = !0;
            this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
        },
        $setTouched: function () {
            this.$touched = !0;
            this.$untouched = !1;
            this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
        },
        $rollbackViewValue: function () {
            this.$$timeout.cancel(this.$$pendingDebounce);
            this.$viewValue = this.$$lastCommittedViewValue;
            this.$render()
        },
        $validate: function () {
            if (!ga(this.$modelValue)) {
                var a = this.$$lastCommittedViewValue,
                    b = this.$$rawModelValue,
                    d = this.$valid,
                    c = this.$modelValue,
                    f = this.$options.getOption("allowInvalid"),
                    e = this;
                this.$$runValidators(b, a, function (a) {
                    f || d === a || (e.$modelValue = a ? b : void 0, e.$modelValue !== c && e.$$writeModelToScope())
                })
            }
        },
        $$runValidators: function (a, b, d) {
            function c() {
                var c = !0;
                q(k.$validators, function (d, f) {
                    var g = Boolean(d(a, b));
                    c = c && g;
                    e(f, g)
                });
                return c ? !0 : (q(k.$asyncValidators, function (a, b) {
                    e(b, null)
                }), !1)
            }

            function f() {
                var c = [],
                    d = !0;
                q(k.$asyncValidators, function (f, g) {
                    var h = f(a, b);
                    if (!h || !y(h.then)) throw qb("nopromise",
                        h);
                    e(g, void 0);
                    c.push(h.then(function () {
                        e(g, !0)
                    }, function () {
                        d = !1;
                        e(g, !1)
                    }))
                });
                c.length ? k.$$q.all(c).then(function () {
                    g(d)
                }, w) : g(!0)
            }

            function e(a, b) {
                h === k.$$currentValidationRunId && k.$setValidity(a, b)
            }

            function g(a) {
                h === k.$$currentValidationRunId && d(a)
            }
            this.$$currentValidationRunId++;
            var h = this.$$currentValidationRunId,
                k = this;
            (function () {
                var a = k.$$parserName || "parse";
                if (x(k.$$parserValid)) e(a, null);
                else return k.$$parserValid || (q(k.$validators, function (a, b) {
                    e(b, null)
                }), q(k.$asyncValidators, function (a,
                    b) {
                    e(b, null)
                })), e(a, k.$$parserValid), k.$$parserValid;
                return !0
            })() ? c() ? f() : g(!1): g(!1)
        },
        $commitViewValue: function () {
            var a = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce);
            if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate()
        },
        $$parseAndValidate: function () {
            var a = this.$$lastCommittedViewValue,
                b = this;
            if (this.$$parserValid = x(a) ? void 0 : !0)
                for (var d = 0; d <
                    this.$parsers.length; d++)
                    if (a = this.$parsers[d](a), x(a)) {
                        this.$$parserValid = !1;
                        break
                    } ga(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var c = this.$modelValue,
                f = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = a;
            f && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
            this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
                f || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope())
            })
        },
        $$writeModelToScope: function () {
            this.$$ngModelSet(this.$$scope,
                this.$modelValue);
            q(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (b) {
                    this.$$exceptionHandler(b)
                }
            }, this)
        },
        $setViewValue: function (a, b) {
            this.$viewValue = a;
            this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b)
        },
        $$debounceViewValueCommit: function (a) {
            var b = this.$options.getOption("debounce");
            Y(b[a]) ? b = b[a] : Y(b["default"]) && (b = b["default"]);
            this.$$timeout.cancel(this.$$pendingDebounce);
            var d = this;
            0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
                    d.$commitViewValue()
                }, b) : this.$$scope.$root.$$phase ?
                this.$commitViewValue() : this.$$scope.$apply(function () {
                    d.$commitViewValue()
                })
        }
    };
    Vd({
        clazz: Ob,
        set: function (a, b) {
            a[b] = !0
        },
        unset: function (a, b) {
            delete a[b]
        }
    });
    var bf = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Ob,
                priority: 1,
                compile: function (b) {
                    b.addClass(Va).addClass("ng-untouched").addClass(ob);
                    return {
                        pre: function (a, b, f, e) {
                            var g = e[0];
                            b = e[1] || g.$$parentForm;
                            if (e = e[2]) g.$options = e.$options;
                            g.$$initGetterSetters();
                            b.$addControl(g);
                            f.$observe("name",
                                function (a) {
                                    g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                                });
                            a.$on("$destroy", function () {
                                g.$$parentForm.$removeControl(g)
                            })
                        },
                        post: function (b, c, f, e) {
                            function g() {
                                h.$setTouched()
                            }
                            var h = e[0];
                            if (h.$options.getOption("updateOn")) c.on(h.$options.getOption("updateOn"), function (a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            c.on("blur", function () {
                                h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g))
                            })
                        }
                    }
                }
            }
        }],
        Pb, Zg = /(\s+|^)default(\s+|$)/;
    Bc.prototype = {
        getOption: function (a) {
            return this.$$options[a]
        },
        createChild: function (a) {
            var b = !1;
            a = R({}, a);
            q(a, function (d, c) {
                "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = S(d.replace(Zg, function () {
                    a.updateOnDefault = !0;
                    return " "
                })))
            }, this);
            b && (delete a["*"], ae(a, this.$$options));
            ae(a, Pb.$$options);
            return new Bc(a)
        }
    };
    Pb = new Bc({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var ff = function () {
            function a(a, d) {
                this.$$attrs = a;
                this.$$scope =
                    d
            }
            a.$inject = ["$attrs", "$scope"];
            a.prototype = {
                $onInit: function () {
                    var a = this.parentCtrl ? this.parentCtrl.$options : Pb,
                        d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = a.createChild(d)
                }
            };
            return {
                restrict: "A",
                priority: 10,
                require: {
                    parentCtrl: "?^^ngModelOptions"
                },
                bindToController: !0,
                controller: a
            }
        },
        Se = Ra({
            terminal: !0,
            priority: 1E3
        }),
        $g = M("ngOptions"),
        ah = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        $e = ["$compile", "$document", "$parse", function (a, b, d) {
            function c(a, b, c) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue = b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }

                function f(a) {
                    var b;
                    if (!q && ta(a)) b = a;
                    else {
                        b = [];
                        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }
                var n = a.match(ah);
                if (!n) throw $g("iexp", a, ya(b));
                var p = n[5] || n[7],
                    q = n[6];
                a = / as /.test(n[0]) && n[1];
                var s = n[9];
                b = d(n[2] ? n[1] : p);
                var v = a && d(a) || b,
                    u = s && d(s),
                    w = s ? function (a, b) {
                        return u(c, b)
                    } : function (a) {
                        return la(a)
                    },
                    x = function (a, b) {
                        return w(a, B(a, b))
                    },
                    t = d(n[2] || n[1]),
                    z = d(n[3] || ""),
                    A = d(n[4] || ""),
                    K = d(n[8]),
                    I = {},
                    B = q ? function (a, b) {
                        I[q] = b;
                        I[p] = a;
                        return I
                    } : function (a) {
                        I[p] = a;
                        return I
                    };
                return {
                    trackBy: s,
                    getTrackByValue: x,
                    getWatchables: d(K, function (a) {
                        var b = [];
                        a = a || [];
                        for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                            var h = a === d ? g : d[g],
                                l = a[h],
                                h = B(l, h),
                                l = w(l, h);
                            b.push(l);
                            if (n[2] || n[1]) l = t(c, h), b.push(l);
                            n[4] && (h = A(c, h), b.push(h))
                        }
                        return b
                    }),
                    getOptions: function () {
                        for (var a = [], b = {}, d = K(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                            var p = d ===
                                g ? n : g[n],
                                q = B(d[p], p),
                                r = v(c, q),
                                p = w(r, q),
                                u = t(c, q),
                                I = z(c, q),
                                q = A(c, q),
                                r = new e(p, r, u, I, q);
                            a.push(r);
                            b[p] = r
                        }
                        return {
                            items: a,
                            selectValueMap: b,
                            getOptionFromViewValue: function (a) {
                                return b[x(a)]
                            },
                            getViewValueFromOption: function (a) {
                                return s ? Fa(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }
            var f = z.document.createElement("option"),
                e = z.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = w
                    },
                    post: function (d, h, k, l) {
                        function m(a) {
                            var b = (a = t.getOptionFromViewValue(a)) &&
                                a.element;
                            b && !b.selected && (b.selected = !0);
                            return a
                        }

                        function n(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                            b.value = a.selectValue
                        }

                        function p() {
                            var a = t && r.readValue();
                            if (t)
                                for (var b = t.items.length - 1; 0 <= b; b--) {
                                    var c = t.items[b];
                                    v(c.group) ? Fb(c.element.parentNode) : Fb(c.element)
                                }
                            t = y.getOptions();
                            var d = {};
                            z && h.prepend(r.emptyOption);
                            t.items.forEach(function (a) {
                                var b;
                                if (v(a.group)) {
                                    b = d[a.group];
                                    b || (b = e.cloneNode(!1), A.appendChild(b), b.label = null === a.group ?
                                        "null" : a.group, d[a.group] = b);
                                    var c = f.cloneNode(!1)
                                } else b = A, c = f.cloneNode(!1);
                                b.appendChild(c);
                                n(a, c)
                            });
                            h[0].appendChild(A);
                            s.$render();
                            s.$isEmpty(a) || (b = r.readValue(), (y.trackBy || w ? qa(a, b) : a === b) || (s.$setViewValue(b), s.$render()))
                        }
                        var r = l[0],
                            s = l[1],
                            w = k.multiple;
                        l = 0;
                        for (var u = h.children(), x = u.length; l < x; l++)
                            if ("" === u[l].value) {
                                r.hasEmptyOption = !0;
                                r.emptyOption = u.eq(l);
                                break
                            } var z = !!r.emptyOption;
                        D(f.cloneNode(!1)).val("?");
                        var t, y = c(k.ngOptions, h, d),
                            A = b[0].createDocumentFragment();
                        r.generateUnknownOptionValue =
                            function (a) {
                                return "?"
                            };
                        w ? (r.writeValue = function (a) {
                            var b = a && a.map(m) || [];
                            t.items.forEach(function (a) {
                                a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1)
                            })
                        }, r.readValue = function () {
                            var a = h.val() || [],
                                b = [];
                            q(a, function (a) {
                                (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a))
                            });
                            return b
                        }, y.trackBy && d.$watchCollection(function () {
                            if (C(s.$viewValue)) return s.$viewValue.map(function (a) {
                                return y.getTrackByValue(a)
                            })
                        }, function () {
                            s.$render()
                        })) : (r.writeValue =
                            function (a) {
                                var b = t.selectValueMap[h.val()],
                                    c = t.getOptionFromViewValue(a);
                                b && b.element.removeAttribute("selected");
                                c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : z ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a)
                            }, r.readValue = function () {
                                var a = t.selectValueMap[h.val()];
                                return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(),
                                    t.getViewValueFromOption(a)) : null
                            }, y.trackBy && d.$watch(function () {
                                return y.getTrackByValue(s.$viewValue)
                            }, function () {
                                s.$render()
                            }));
                        z && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, r.registerOption = function (a, b) {
                            "" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), s.$render(), b.on("$destroy", function () {
                                r.hasEmptyOption = !1;
                                r.emptyOption = void 0
                            }))
                        }) : r.emptyOption.removeClass("ng-scope"));
                        h.empty();
                        p();
                        d.$watchCollection(y.getWatchables,
                            p)
                    }
                }
            }
        }],
        Te = ["$locale", "$interpolate", "$log", function (a, b, d) {
            var c = /{}/g,
                f = /^when(Minus)?(.+)$/;
            return {
                link: function (e, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }
                    var l = h.count,
                        m = h.$attr.when && g.attr(h.$attr.when),
                        n = h.offset || 0,
                        p = e.$eval(m) || {},
                        r = {},
                        s = b.startSymbol(),
                        v = b.endSymbol(),
                        u = s + l + "-" + n + v,
                        H = $.noop,
                        y;
                    q(h, function (a, b) {
                        var c = f.exec(b);
                        c && (c = (c[1] ? "-" : "") + P(c[2]), p[c] = g.attr(h.$attr[b]))
                    });
                    q(p, function (a, d) {
                        r[d] = b(a.replace(c, u))
                    });
                    e.$watch(l, function (b) {
                        var c = parseFloat(b),
                            f = ga(c);
                        f || c in p || (c = a.pluralCat(c -
                            n));
                        c === y || f && ga(y) || (H(), f = r[c], x(f) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), H = w, k()) : H = e.$watch(f, k), y = c)
                    })
                }
            }
        }],
        Ue = ["$parse", "$animate", "$compile", function (a, b, d) {
            var c = M("ngRepeat"),
                f = function (a, b, c, d, f, m, n) {
                    a[c] = d;
                    f && (a[f] = m);
                    a.$index = b;
                    a.$first = 0 === b;
                    a.$last = b === n - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even = 0 === (b & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (e, g) {
                    var h = g.ngRepeat,
                        k = d.$$createComment("end ngRepeat",
                            h),
                        l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l) throw c("iexp", h);
                    var m = l[1],
                        n = l[2],
                        p = l[3],
                        r = l[4],
                        l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
                    if (!l) throw c("iidexp", m);
                    var s = l[3] || l[1],
                        v = l[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
                    var u, w, x, t, y = {
                        $id: la
                    };
                    r ? u = a(r) : (x = function (a, b) {
                            return la(b)
                        },
                        t = function (a) {
                            return a
                        });
                    return function (a, d, e, g, l) {
                        u && (w = function (b, c, d) {
                            v && (y[v] = b);
                            y[s] = c;
                            y.$index = d;
                            return u(a, y)
                        });
                        var m = W();
                        a.$watchCollection(n, function (e) {
                            var g, n, r = d[0],
                                u, y = W(),
                                z, D, E, B, F, C, I;
                            p && (a[p] = e);
                            if (ta(e)) F = e, n = w || x;
                            else
                                for (I in n = w || t, F = [], e) va.call(e, I) && "$" !== I.charAt(0) && F.push(I);
                            z = F.length;
                            I = Array(z);
                            for (g = 0; g < z; g++)
                                if (D = e === F ? g : F[g], E = e[D], B = n(D, E, g), m[B]) C = m[B], delete m[B], y[B] = C, I[g] = C;
                                else {
                                    if (y[B]) throw q(I, function (a) {
                                        a && a.scope && (m[a.id] = a)
                                    }), c("dupes", h, B, E);
                                    I[g] = {
                                        id: B,
                                        scope: void 0,
                                        clone: void 0
                                    };
                                    y[B] = !0
                                } for (u in m) {
                                C = m[u];
                                B = ub(C.clone);
                                b.leave(B);
                                if (B[0].parentNode)
                                    for (g = 0, n = B.length; g < n; g++) B[g].$$NG_REMOVED = !0;
                                C.scope.$destroy()
                            }
                            for (g = 0; g < z; g++)
                                if (D = e === F ? g : F[g], E = e[D], C = I[g], C.scope) {
                                    u = r;
                                    do u = u.nextSibling; while (u && u.$$NG_REMOVED);
                                    C.clone[0] !== u && b.move(ub(C.clone), null, r);
                                    r = C.clone[C.clone.length - 1];
                                    f(C.scope, g, s, E, v, D, z)
                                } else l(function (a, c) {
                                    C.scope = c;
                                    var d = k.cloneNode(!1);
                                    a[a.length++] = d;
                                    b.enter(a, null, r);
                                    r = d;
                                    C.clone = a;
                                    y[C.id] = C;
                                    f(C.scope, g, s, E, v, D, z)
                                });
                            m =
                                y
                        })
                    }
                }
            }
        }],
        Ve = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (b, d, c) {
                    b.$watch(c.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Oe = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        We = Ra(function (a, b, d) {
            a.$watch(d.ngStyle, function (a, d) {
                    d && a !== d && q(d, function (a, c) {
                        b.css(c, "")
                    });
                    a && b.css(a)
                },
                !0)
        }),
        Xe = ["$animate", "$compile", function (a, b) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (d, c, f, e) {
                    var g = [],
                        h = [],
                        k = [],
                        l = [],
                        m = function (a, b) {
                            return function (c) {
                                !1 !== c && a.splice(b, 1)
                            }
                        };
                    d.$watch(f.ngSwitch || f.on, function (c) {
                        for (var d, f; k.length;) a.cancel(k.pop());
                        d = 0;
                        for (f = l.length; d < f; ++d) {
                            var s = ub(h[d].clone);
                            l[d].$destroy();
                            (k[d] = a.leave(s)).done(m(k, d))
                        }
                        h.length = 0;
                        l.length = 0;
                        (g = e.cases["!" + c] || e.cases["?"]) && q(g, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen");
                                h.push({
                                    clone: d
                                });
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        Ye = Ra({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, f) {
                a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
                    return c[b - 1] !== a
                });
                q(a, function (a) {
                    c.cases["!" + a] = c.cases["!" + a] || [];
                    c.cases["!" + a].push({
                        transclude: f,
                        element: b
                    })
                })
            }
        }),
        Ze = Ra({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a,
                b, d, c, f) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({
                    transclude: f,
                    element: b
                })
            }
        }),
        bh = M("ngTransclude"),
        af = ["$compile", function (a) {
            return {
                restrict: "EAC",
                terminal: !0,
                compile: function (b) {
                    var d = a(b.contents());
                    b.empty();
                    return function (a, b, e, g, h) {
                        function k() {
                            d(a, function (a) {
                                b.append(a)
                            })
                        }
                        if (!h) throw bh("orphan", ya(b));
                        e.ngTransclude === e.$attr.ngTransclude && (e.ngTransclude = "");
                        e = e.ngTransclude || e.ngTranscludeSlot;
                        h(function (a, c) {
                            var d;
                            if (d = a.length) a: {
                                d = 0;
                                for (var e = a.length; d < e; d++) {
                                    var g = a[d];
                                    if (g.nodeType !==
                                        Ja || g.nodeValue.trim()) {
                                        d = !0;
                                        break a
                                    }
                                }
                                d = void 0
                            }
                            d ? b.append(a) : (k(), c.$destroy())
                        }, null, e);
                        e && !h.isSlotFilled(e) && k()
                    }
                }
            }
        }],
        Ce = ["$templateCache", function (a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (b, d) {
                    "text/ng-template" === d.type && a.put(d.id, b[0].text)
                }
            }
        }],
        ch = {
            $setViewValue: w,
            $render: w
        },
        dh = ["$element", "$scope", function (a, b) {
            function d() {
                h || (h = !0, b.$$postDigest(function () {
                    h = !1;
                    e.ngModelCtrl.$render()
                }))
            }

            function c(a) {
                k || (k = !0, b.$$postDigest(function () {
                    b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()),
                        a && e.ngModelCtrl.$render())
                }))
            }

            function f(a) {
                a.prop("selected", !0);
                a.attr("selected", !0)
            }
            var e = this,
                g = new Qa;
            e.selectValueMap = {};
            e.ngModelCtrl = ch;
            e.multiple = !1;
            e.unknownOption = D(z.document.createElement("option"));
            e.hasEmptyOption = !1;
            e.emptyOption = void 0;
            e.renderUnknownOption = function (b) {
                b = e.generateUnknownOptionValue(b);
                e.unknownOption.val(b);
                a.prepend(e.unknownOption);
                f(e.unknownOption);
                a.val(b)
            };
            e.updateUnknownOption = function (b) {
                b = e.generateUnknownOptionValue(b);
                e.unknownOption.val(b);
                f(e.unknownOption);
                a.val(b)
            };
            e.generateUnknownOptionValue = function (a) {
                return "? " + la(a) + " ?"
            };
            e.removeUnknownOption = function () {
                e.unknownOption.parent() && e.unknownOption.remove()
            };
            e.selectEmptyOption = function () {
                e.emptyOption && (a.val(""), f(e.emptyOption))
            };
            e.unselectEmptyOption = function () {
                e.hasEmptyOption && e.emptyOption.removeAttr("selected")
            };
            b.$on("$destroy", function () {
                e.renderUnknownOption = w
            });
            e.readValue = function () {
                var b = a.val(),
                    b = b in e.selectValueMap ? e.selectValueMap[b] : b;
                return e.hasOption(b) ? b : null
            };
            e.writeValue =
                function (b) {
                    var c = a[0].options[a[0].selectedIndex];
                    c && c.removeAttribute("selected");
                    e.hasOption(b) ? (e.removeUnknownOption(), c = la(b), a.val(c in e.selectValueMap ? c : b), f(D(a[0].options[a[0].selectedIndex]))) : null == b && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b)
                };
            e.addOption = function (a, b) {
                if (8 !== b[0].nodeType) {
                    Pa(a, '"option value"');
                    "" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
                    var c = g.get(a) || 0;
                    g.put(a,
                        c + 1);
                    d()
                }
            };
            e.removeOption = function (a) {
                var b = g.get(a);
                b && (1 === b ? (g.remove(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : g.put(a, b - 1))
            };
            e.hasOption = function (a) {
                return !!g.get(a)
            };
            var h = !1,
                k = !1;
            e.registerOption = function (a, b, d, f, g) {
                if (d.$attr.ngValue) {
                    var h, k = NaN;
                    d.$observe("value", function (a) {
                        var d, f = b.prop("selected");
                        v(k) && (e.removeOption(h), delete e.selectValueMap[k], d = !0);
                        k = la(a);
                        h = a;
                        e.selectValueMap[k] = a;
                        e.addOption(a, b);
                        b.attr("value", k);
                        d && f && c()
                    })
                } else f ? d.$observe("value", function (a) {
                    e.readValue();
                    var d, f = b.prop("selected");
                    v(h) && (e.removeOption(h), d = !0);
                    h = a;
                    e.addOption(a, b);
                    d && f && c()
                }) : g ? a.$watch(g, function (a, f) {
                    d.$set("value", a);
                    var g = b.prop("selected");
                    f !== a && e.removeOption(f);
                    e.addOption(a, b);
                    f && g && c()
                }) : e.addOption(d.value, b);
                d.$observe("disabled", function (a) {
                    if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render())
                });
                b.on("$destroy", function () {
                    var a = e.readValue(),
                        b = d.value;
                    e.removeOption(b);
                    e.ngModelCtrl.$render();
                    (e.multiple && a &&
                        -1 !== a.indexOf(b) || a === b) && c(!0)
                })
            }
        }],
        De = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: dh,
                priority: 1,
                link: {
                    pre: function (a, b, d, c) {
                        var f = c[0],
                            e = c[1];
                        if (e) {
                            if (f.ngModelCtrl = e, b.on("change", function () {
                                    f.removeUnknownOption();
                                    a.$apply(function () {
                                        e.$setViewValue(f.readValue())
                                    })
                                }), d.multiple) {
                                f.multiple = !0;
                                f.readValue = function () {
                                    var a = [];
                                    q(b.find("option"), function (b) {
                                        b.selected && !b.disabled && (b = b.value, a.push(b in f.selectValueMap ? f.selectValueMap[b] : b))
                                    });
                                    return a
                                };
                                f.writeValue =
                                    function (a) {
                                        var c = new Qa(a);
                                        q(b.find("option"), function (a) {
                                            a.selected = v(c.get(a.value)) || v(c.get(f.selectValueMap[a.value]))
                                        })
                                    };
                                var g, h = NaN;
                                a.$watch(function () {
                                    h !== e.$viewValue || qa(g, e.$viewValue) || (g = ra(e.$viewValue), e.$render());
                                    h = e.$viewValue
                                });
                                e.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        } else f.registerOption = w
                    },
                    post: function (a, b, d, c) {
                        var f = c[1];
                        if (f) {
                            var e = c[0];
                            f.$render = function () {
                                e.writeValue(f.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        Ee = ["$interpolate", function (a) {
            return {
                restrict: "E",
                priority: 100,
                compile: function (b,
                    d) {
                    var c, f;
                    v(d.ngValue) || (v(d.value) ? c = a(d.value, !0) : (f = a(b.text(), !0)) || d.$set("value", b.text()));
                    return function (a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, f)
                    }
                }
            }
        }],
        Tc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    c && (d.required = !0, c.$validators.required = function (a, b) {
                        return !d.required || !c.$isEmpty(b)
                    }, d.$observe("required", function () {
                        c.$validate()
                    }))
                }
            }
        },
        Sc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var f, e = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test) throw M("ngPattern")("noregexp", e, a, ya(b));
                            f = a || void 0;
                            c.$validate()
                        });
                        c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || x(f) || f.test(b)
                        }
                    }
                }
            }
        },
        Vc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var f = -1;
                        d.$observe("maxlength", function (a) {
                            a = Z(a);
                            f = ga(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function (a, b) {
                            return 0 >
                                f || c.$isEmpty(b) || b.length <= f
                        }
                    }
                }
            }
        },
        Uc = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var f = 0;
                        d.$observe("minlength", function (a) {
                            f = Z(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= f
                        }
                    }
                }
            }
        };
    z.angular.bootstrap ? z.console && console.log("WARNING: Tried to load angular more than once.") : (ue(), xe($), $.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\u00a4",
                    negSuf: "",
                    posPre: "\u00a4",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (a,
                c) {
                var f = a | 0,
                    e = c;
                void 0 === e && (e = Math.min(b(a), 3));
                Math.pow(10, e);
                return 1 == f && 0 == e ? "one" : "other"
            }
        })
    }]), D(function () {
        pe(z.document, Mc)
    }))
})(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map


/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see http://ui-router.github.io/blog/angular-ui-router-umd-bundles
 * @version v1.0.5
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("angular")) : "function" == typeof define && define.amd ? define(["exports", "angular"], e) : e(t["@uirouter/angularjs"] = t["@uirouter/angularjs"] || {}, t.angular)
}(this, function (t, e) {
    "use strict";

    function r(t) {
        function e(r) {
            return r.length >= n ? t.apply(null, r) : function () {
                return e(r.concat([].slice.apply(arguments)))
            }
        }
        var r = [].slice.apply(arguments, [1]),
            n = t.length;
        return e(r)
    }

    function n() {
        var t = arguments,
            e = t.length - 1;
        return function () {
            for (var r = e, n = t[e].apply(this, arguments); r--;) n = t[r].call(this, n);
            return n
        }
    }

    function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return n.apply(null, [].slice.call(arguments).reverse())
    }

    function o(t, e) {
        return function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return t.apply(null, r) && e.apply(null, r)
        }
    }

    function a(t, e) {
        return function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return t.apply(null, r) || e.apply(null, r)
        }
    }

    function u(t, e) {
        return function (r) {
            return r[t].apply(r, e)
        }
    }

    function s(t) {
        return function (e) {
            for (var r = 0; r < t.length; r++)
                if (t[r][0](e)) return t[r][1](e)
        }
    }

    function c(t) {
        if (re(t) && t.length) {
            var e = t.slice(0, -1),
                r = t.slice(-1);
            return !(e.filter(Dt(te)).length || r.filter(Dt(Zt)).length)
        }
        return Zt(t)
    }

    function f(t) {
        return t
    }

    function l() {}

    function p(t, e, r, n, i) {
        void 0 === i && (i = !1);
        var o = function (e) {
                return t()[e].bind(r())
            },
            a = function (t) {
                return function () {
                    return e[t] = o(t), e[t].apply(null, arguments)
                }
            };
        return n = n || Object.keys(t()), n.reduce(function (t, e) {
            return t[e] = i ? a(e) : o(e), t
        }, e)
    }

    function h(t, e) {
        return -1 !== t.indexOf(e)
    }

    function d(t, e) {
        var r = t.indexOf(e);
        return r >= 0 && t.splice(r, 1), t
    }

    function v(t, e) {
        return t.push(e), e
    }

    function m(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        var n = e.concat({}).reverse(),
            i = ve.apply(null, n);
        return ve({}, i, g(t || {}, Object.keys(i)))
    }

    function y(t, e) {
        var r = [];
        for (var n in t.path) {
            if (t.path[n] !== e.path[n]) break;
            r.push(t.path[n])
        }
        return r
    }

    function g(t, e) {
        var r = {};
        for (var n in t) - 1 !== e.indexOf(n) && (r[n] = t[n]);
        return r
    }

    function w(t, e) {
        return Object.keys(t).filter(Dt(ge(e))).reduce(function (e, r) {
            return e[r] = t[r], e
        }, {})
    }

    function _(t, e) {
        return b(t, At(e))
    }

    function $(t, e) {
        var r = re(t),
            n = r ? [] : {},
            i = r ? function (t) {
                return n.push(t)
            } : function (t, e) {
                return n[e] = t
            };
        return de(t, function (t, r) {
            e(t, r) && i(t, r)
        }), n
    }

    function S(t, e) {
        var r;
        return de(t, function (t, n) {
            r || e(t, n) && (r = t)
        }), r
    }

    function b(t, e) {
        var r = re(t) ? [] : {};
        return de(t, function (t, n) {
            return r[n] = e(t, n)
        }), r
    }

    function R(t, e) {
        return t.push(e), t
    }

    function E(t, e) {
        return void 0 === e && (e = "assert failure"),
            function (r) {
                var n = t(r);
                if (!n) throw new Error(Zt(e) ? e(r) : e);
                return n
            }
    }

    function C() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return [];
        var r, n = t.reduce(function (t, e) {
                return Math.min(e.length, t)
            }, 9007199254740991),
            i = [];
        for (r = 0; r < n; r++) switch (t.length) {
            case 1:
                i.push([t[0][r]]);
                break;
            case 2:
                i.push([t[0][r], t[1][r]]);
                break;
            case 3:
                i.push([t[0][r], t[1][r], t[2][r]]);
                break;
            case 4:
                i.push([t[0][r], t[1][r], t[2][r], t[3][r]]);
                break;
            default:
                i.push(t.map(function (t) {
                    return t[r]
                }))
        }
        return i
    }

    function T(t, e) {
        var r, n;
        if (re(e) && (r = e[0], n = e[1]), !te(r)) throw new Error("invalid parameters to applyPairs");
        return t[r] = n, t
    }

    function P(t) {
        return t.length && t[t.length - 1] || void 0
    }

    function k(t, e) {
        return e && Object.keys(e).forEach(function (t) {
            return delete e[t]
        }), e || (e = {}), ve(e, t)
    }

    function O(t, e, r) {
        if (re(t)) return t.forEach(e, r);
        Object.keys(t).forEach(function (r) {
            return e(t[r], r)
        })
    }

    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            if (r)
                for (var n = Object.keys(r), i = 0; i < n.length; i++) t[n[i]] = r[n[i]]
        }
        return t
    }

    function j(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var r = typeof t;
        if (r !== typeof e || "object" !== r) return !1;
        var n = [t, e];
        if (Nt(re)(n)) return I(t, e);
        if (Nt(ne)(n)) return t.getTime() === e.getTime();
        if (Nt(ie)(n)) return t.toString() === e.toString();
        if (Nt(Zt)(n)) return !0;
        if ([Zt, re, ne, ie].map(Ft).reduce(function (t, e) {
                return t || !!e(n)
            }, !1)) return !1;
        var i, o = {};
        for (i in t) {
            if (!j(t[i], e[i])) return !1;
            o[i] = !0
        }
        for (i in e)
            if (!o[i]) return !1;
        return !0
    }

    function I(t, e) {
        return t.length === e.length && C(t, e).reduce(function (t, e) {
            return t && j(e[0], e[1])
        }, !0)
    }

    function V(t) {
        if (!t) return "ui-view (defunct)";
        var e = t.creationContext ? t.creationContext.name || "(root)" : "(none)";
        return "[ui-view#" + t.id + " " + t.$type + ":" + t.fqn + " (" + t.name + "@" + e + ")]"
    }

    function A(e) {
        return Xt(e) ? t.Category[e] : t.Category[t.Category[e]]
    }

    function H(t, e) {
        function r(t) {
            for (var e = n, r = 0; r < e.length; r++) {
                var i = new Bt(e[r]);
                if (i && i.matches(t.name) || !i && e[r] === t.name) return !0
            }
            return !1
        }
        var n = te(e) ? [e] : e;
        return !!(Zt(n) ? n : r)(t)
    }

    function q(t, e, r) {
        function n(t, n, i) {
            void 0 === i && (i = {});
            var a = new Ye(e, r, n, t, i);
            return o.push(a),
                function () {
                    a._deregistered = !0, we(o)(a)
                }
        }
        var i = t._registeredHooks = t._registeredHooks || {},
            o = i[r.name] = [];
        return t[r.name] = n, n
    }

    function D(t) {
        return void 0 === t && (t = !1),
            function (e, r) {
                var n = t ? -1 : 1,
                    i = (e.node.state.path.length - r.node.state.path.length) * n;
                return 0 !== i ? i : r.hook.priority - e.hook.priority
            }
    }

    function N(t, e) {
        function r(t) {
            return re(t) ? t : Qt(t) ? [t] : []
        }

        function n(t) {
            switch (t.length) {
                case 0:
                    return;
                case 1:
                    return "auto" === e ? t[0] : t;
                default:
                    return t
            }
        }

        function i(t, e) {
            return function (i) {
                if (re(i) && 0 === i.length) return i;
                var o = r(i),
                    a = b(o, t);
                return !0 === e ? 0 === $(a, function (t) {
                    return !t
                }).length : n(a)
            }
        }

        function o(t) {
            return function (e, n) {
                var i = r(e),
                    o = r(n);
                if (i.length !== o.length) return !1;
                for (var a = 0; a < i.length; a++)
                    if (!t(i[a], o[a])) return !1;
                return !0
            }
        }
        var a = this;
        ["encode", "decode", "equals", "$normalize"].forEach(function (e) {
            var r = t[e].bind(t),
                n = "equals" === e ? o : i;
            a[e] = n(r)
        }), ve(this, {
            dynamic: t.dynamic,
            name: t.name,
            pattern: t.pattern,
            inherit: t.inherit,
            is: i(t.is.bind(t), !0),
            $arrayMode: e
        })
    }

    function F(t) {
        function e() {
            return t.value
        }
        return t = er(t) && {
            value: t
        } || t, e.__cacheable = !0, ve(t, {
            $$fn: c(t.value) ? t.value : e
        })
    }

    function U(e, r, n, i, o) {
        if (e.type && r && "string" !== r.name) throw new Error("Param '" + i + "' has two type configurations.");
        if (e.type && r && "string" === r.name && o.type(e.type)) return o.type(e.type);
        if (r) return r;
        if (!e.type) {
            var a = n === t.DefType.CONFIG ? "any" : n === t.DefType.PATH ? "path" : n === t.DefType.SEARCH ? "query" : "string";
            return o.type(a)
        }
        return e.type instanceof Xe ? e.type : o.type(e.type)
    }

    function L(t, e, r) {
        var n = t.squash;
        if (!e || !1 === n) return !1;
        if (!Qt(n) || null == n) return r;
        if (!0 === n || te(n)) return n;
        throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
    }

    function M(t, e, r, n) {
        var i, o, a = [{
            from: "",
            to: r || e ? void 0 : ""
        }, {
            from: null,
            to: r || e ? void 0 : ""
        }];
        return i = re(t.replace) ? t.replace : [], te(n) && i.push({
            from: n,
            to: void 0
        }), o = b(i, At("from")), $(a, function (t) {
            return -1 === o.indexOf(t.from)
        }).concat(i)
    }

    function B(t, e) {
        return e.length <= t ? e : e.substr(0, t - 3) + "..."
    }

    function G(t, e) {
        for (; e.length < t;) e += " ";
        return e
    }

    function W(t) {
        return t.replace(/^([A-Z])/, function (t) {
            return t.toLowerCase()
        }).replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function z(t) {
        var e = J(t),
            r = e.match(/^(function [^ ]+\([^)]*\))/),
            n = r ? r[1] : e,
            i = t.name || "";
        return i && n.match(/function \(/) ? "function " + i + n.substr(9) : n
    }

    function J(t) {
        var e = re(t) ? t.slice(-1)[0] : t;
        return e && e.toString() || "undefined"
    }

    function Q(t) {
        function e(t) {
            if (ee(t)) {
                if (-1 !== r.indexOf(t)) return "[circular ref]";
                r.push(t)
            }
            return yr(t)
        }
        var r = [];
        return JSON.stringify(t, function (t, r) {
            return e(r)
        }).replace(/\\"/g, '"')
    }

    function K(t) {
        var e = new RegExp("(" + t + ")", "g");
        return function (t) {
            return t.split(e).filter(f)
        }
    }

    function Y(t, e) {
        return te(P(t)) && te(e) ? t.slice(0, -1).concat(P(t) + e) : R(t, e)
    }

    function Z(t) {
        return t.name
    }

    function X(t) {
        return t.self.$$state = function () {
            return t
        }, t.self
    }

    function tt(t) {
        return t.parent && t.parent.data && (t.data = t.self.data = ye(t.parent.data, t.data)), t.data
    }

    function et(t) {
        return t.parent ? t.parent.path.concat(t) : [t]
    }

    function rt(t) {
        var e = t.parent ? ve({}, t.parent.includes) : {};
        return e[t.name] = !0, e
    }

    function nt(t) {
        var e = function (t) {
                var e = se.$injector;
                return t.$inject || e && e.annotate(t, e.strictDi) || "deferred"
            },
            r = function (t) {
                return !(!t.token || !t.resolveFn)
            },
            n = function (t) {
                return !(!t.provide && !t.token || !(t.useValue || t.useFactory || t.useExisting || t.useClass))
            },
            o = function (t) {
                return !!(t && t.val && (te(t.val) || re(t.val) || Zt(t.val)))
            },
            a = function (t) {
                return t.provide || t.token
            },
            u = s([
                [At("resolveFn"), function (t) {
                    return new ar(a(t), t.resolveFn, t.deps, t.policy)
                }],
                [At("useFactory"), function (t) {
                    return new ar(a(t), t.useFactory, t.deps || t.dependencies, t.policy)
                }],
                [At("useClass"), function (t) {
                    return new ar(a(t), function () {
                        return new t.useClass
                    }, [], t.policy)
                }],
                [At("useValue"), function (t) {
                    return new ar(a(t), function () {
                        return t.useValue
                    }, [], t.policy, t.useValue)
                }],
                [At("useExisting"), function (t) {
                    return new ar(a(t), f, [t.useExisting], t.policy)
                }]
            ]),
            c = s([
                [i(At("val"), te), function (t) {
                    return new ar(t.token, f, [t.val], t.policy)
                }],
                [i(At("val"), re), function (t) {
                    return new ar(t.token, P(t.val), t.val.slice(0, -1), t.policy)
                }],
                [i(At("val"), Zt), function (t) {
                    return new ar(t.token, t.val, e(t.val), t.policy)
                }]
            ]),
            l = s([
                [Ut(ar), function (t) {
                    return t
                }],
                [r, u],
                [n, u],
                [o, c],
                [Mt(!0), function (t) {
                    throw new Error("Invalid resolve value: " + Q(t))
                }]
            ]),
            p = t.resolve;
        return (re(p) ? p : function (t, e) {
            return Object.keys(t || {}).map(function (r) {
                return {
                    token: r,
                    val: t[r],
                    deps: void 0,
                    policy: e[r]
                }
            })
        }(p, t.resolvePolicy || {})).map(l)
    }

    function it(t, e) {
        var r = ["", ""],
            n = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!e) return n;
        switch (e.squash) {
            case !1:
                r = ["(", ")" + (e.isOptional ? "?" : "")];
                break;
            case !0:
                n = n.replace(/\/$/, ""), r = ["(?:/(", ")|/)?"];
                break;
            default:
                r = ["(" + e.squash + "|", ")?"]
        }
        return n + r[0] + e.type.pattern.source + r[1]
    }

    function ot(t, e, r, n) {
        return "/" === n ? t : e ? n.slice(0, -1) + t : r ? n.slice(1) + t : t
    }

    function at(t) {
        if (!(Zt(t) || te(t) || Ut(Je)(t) || Je.isDef(t))) throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
        return Zt(t) ? t : Mt(t)
    }

    function ut(t) {
        t.addResolvable({
            token: Jr,
            deps: [],
            resolveFn: function () {
                return t.router
            },
            data: t.router
        }, ""), t.addResolvable({
            token: vr,
            deps: [],
            resolveFn: function () {
                return t
            },
            data: t
        }, ""), t.addResolvable({
            token: "$transition$",
            deps: [],
            resolveFn: function () {
                return t
            },
            data: t
        }, ""), t.addResolvable({
            token: "$stateParams",
            deps: [],
            resolveFn: function () {
                return t.params()
            },
            data: t.params()
        }, ""), t.entering().forEach(function (e) {
            t.addResolvable({
                token: "$state$",
                deps: [],
                resolveFn: function () {
                    return e
                },
                data: e
            }, e)
        })
    }

    function st(t) {
        return function (e, r) {
            return (0, r.$$state()[t])(e, r)
        }
    }

    function ct(t, e) {
        function r(e) {
            return e && Array.isArray(e.states) && e.states.forEach(function (e) {
                return t.router.stateRegistry.register(e)
            }), e
        }
        var n = e.$$state().lazyLoad,
            i = n._promise;
        if (!i) {
            var o = function (t) {
                    return delete e.lazyLoad, delete e.$$state().lazyLoad, delete n._promise, t
                },
                a = function (t) {
                    return delete n._promise, se.$q.reject(t)
                };
            i = n._promise = se.$q.when(n(t, e)).then(r).then(o, a)
        }
        return i
    }

    function ft(t) {
        var e = t._ignoredReason();
        if (e) {
            ze.traceTransitionIgnored(t);
            var r = t.router.globals.transition;
            return "SameAsCurrent" === e && r && r.abort(), Ue.ignored().toPromise()
        }
    }

    function lt(t) {
        if (!t.valid()) throw new Error(t.error())
    }

    function pt(t) {
        var e = function (t) {
                return t || ""
            },
            r = xn(t).map(e),
            n = r[0],
            i = r[1],
            o = jn(n).map(e);
        return {
            path: o[0],
            search: o[1],
            hash: i,
            url: t
        }
    }

    function ht(t, e, r, n) {
        return function (i) {
            function o(t) {
                t.dispose(a), t.dispose(u)
            }
            var a = i.locationService = new r(i),
                u = i.locationConfig = new n(i, e);
            return {
                name: t,
                service: a,
                configuration: u,
                dispose: o
            }
        }
    }

    function dt(t) {
        return se.$injector = kn, se.$q = En, {
            name: "vanilla.services",
            $q: En,
            $injector: kn,
            dispose: function () {
                return null
            }
        }
    }

    function vt() {
        var t = null;
        return function (e, r) {
            return t = t || se.$injector.get("$templateFactory"), [new ti(e, r, t)]
        }
    }

    function mt(t) {
        if (!t.parent) return {};
        var e = ["templateProvider", "templateUrl", "template", "notify", "async"],
            r = ["controller", "controllerProvider", "controllerAs", "resolveAs"],
            n = ["component", "bindings", "componentProvider"],
            i = e.concat(r),
            o = n.concat(i);
        if (Qt(t.views) && Zn(o, t)) throw new Error("State '" + t.name + "' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  " + o.filter(function (e) {
            return Qt(t[e])
        }).join(", "));
        var a = {},
            u = t.views || {
                $default: g(t, o)
            };
        return de(u, function (e, r) {
            if (r = r || "$default", te(e) && (e = {
                    component: e
                }), e = ve({}, e), Zn(n, e) && Zn(i, e)) throw new Error("Cannot combine: " + n.join("|") + " with: " + i.join("|") + " in stateview: '" + r + "@" + t.name + "'");
            e.resolveAs = e.resolveAs || "$resolve", e.$type = "ng1", e.$context = t, e.$name = r;
            var o = Dr.normalizeUIViewTarget(e.$context, e.$name);
            e.$uiViewName = o.uiViewName, e.$uiViewContextAnchor = o.uiViewContextAnchor, a[r] = e
        }), a
    }

    function yt(t) {
        var e = se.$injector.get(t + "Directive");
        if (!e || !e.length) throw new Error("Unable to find component named '" + t + "'");
        return e.map(ri).reduce(Te, [])
    }

    function gt(t) {
        function e(t, e, n, i, o, a) {
            return r._runtimeServices(i, t, n, e), delete hi.router, delete hi.$get, hi
        }
        hi = this.router = new Jr, hi.stateProvider = new ii(hi.stateRegistry, hi.stateService), hi.stateRegistry.decorator("views", mt), hi.stateRegistry.decorator("onExit", oi("onExit")), hi.stateRegistry.decorator("onRetain", oi("onRetain")), hi.stateRegistry.decorator("onEnter", oi("onEnter")), hi.viewService._pluginapi._viewConfigFactory("ng1", vt());
        var r = hi.locationService = hi.locationConfig = new ai(t);
        return ai.monkeyPatchPathParameterType(hi), hi.router = hi, hi.$get = e, e.$inject = ["$location", "$browser", "$sniffer", "$rootScope", "$http", "$templateCache"], hi
    }

    function wt(t, e, r) {
        se.$injector = t, se.$q = e, r.stateRegistry.get().map(function (t) {
            return t.$$state().resolvables
        }).reduce(Te, []).filter(function (t) {
            return "deferred" === t.deps
        }).forEach(function (e) {
            return e.deps = t.annotate(e.resolveFn, t.strictDi)
        })
    }

    function _t(t) {
        t.$watch(function () {
            ze.approximateDigests++
        })
    }

    function $t(t) {
        var e, r = t.match(/^\s*({[^}]*})\s*$/);
        if (r && (t = "(" + r[1] + ")"), !(e = t.replace(/\n/g, " ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/)) || 4 !== e.length) throw new Error("Invalid state ref '" + t + "'");
        return {
            state: e[1] || null,
            paramExpr: e[3] || null
        }
    }

    function St(t) {
        var e = t.parent().inheritedData("$uiView"),
            r = qt("$cfg.path")(e);
        return r ? P(r).state.name : void 0
    }

    function bt(t, e, r) {
        var n = r.uiState || t.current.name,
            i = ve(Ct(e, t), r.uiStateOpts || {}),
            o = t.href(n, r.uiStateParams, i);
        return {
            uiState: n,
            uiStateParams: r.uiStateParams,
            uiStateOpts: i,
            href: o
        }
    }

    function Rt(t) {
        var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href")),
            r = "FORM" === t[0].nodeName;
        return {
            attr: r ? "action" : e ? "xlink:href" : "href",
            isAnchor: "A" === t.prop("tagName").toUpperCase(),
            clickable: !r
        }
    }

    function Et(t, e, r, n, i) {
        return function (o) {
            var a = o.which || o.button,
                u = i();
            if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr("target"))) {
                var s = r(function () {
                    e.go(u.uiState, u.uiStateParams, u.uiStateOpts)
                });
                o.preventDefault();
                var c = n.isAnchor && !u.href ? 1 : 0;
                o.preventDefault = function () {
                    c-- <= 0 && r.cancel(s)
                }
            }
        }
    }

    function Ct(t, e) {
        return {
            relative: St(t) || e.$current,
            inherit: !0,
            source: "sref"
        }
    }

    function Tt(t, e, r, n) {
        var i;
        n && (i = n.events), re(i) || (i = ["click"]);
        for (var o = t.on ? "on" : "bind", a = 0, u = i; a < u.length; a++) {
            var s = u[a];
            t[o](s, r)
        }
        e.$on("$destroy", function () {
            for (var e = t.off ? "off" : "unbind", n = 0, o = i; n < o.length; n++) {
                var a = o[n];
                t[e](a, r)
            }
        })
    }

    function Pt(t) {
        var e = function (e, r, n) {
            return t.is(e, r, n)
        };
        return e.$stateful = !0, e
    }

    function kt(t) {
        var e = function (e, r, n) {
            return t.includes(e, r, n)
        };
        return e.$stateful = !0, e
    }

    function Ot(t, r, n, i, o, a) {
        var u = qt("viewDecl.controllerAs"),
            s = qt("viewDecl.resolveAs");
        return {
            restrict: "ECA",
            priority: -400,
            compile: function (i) {
                var a = i.html();
                return i.empty(),
                    function (i, c) {
                        var f = c.data("$uiView");
                        if (!f) return c.html(a), void t(c.contents())(i);
                        var l = f.$cfg || {
                                viewDecl: {},
                                getTemplate: e.noop
                            },
                            p = l.path && new pr(l.path);
                        c.html(l.getTemplate(c, p) || a), ze.traceUIViewFill(f.$uiView, c.html());
                        var h = t(c.contents()),
                            d = l.controller,
                            v = u(l),
                            m = s(l),
                            y = p && gi(p);
                        if (i[m] = y, d) {
                            var g = r(d, ve({}, y, {
                                $scope: i,
                                $element: c
                            }));
                            v && (i[v] = g, i[v][m] = y), c.data("$ngControllerController", g), c.children().data("$ngControllerController", g), xt(o, n, g, i, l)
                        }
                        if (te(l.viewDecl.component)) var w = l.viewDecl.component,
                            _ = W(w),
                            $ = new RegExp("^(x-|data-)?" + _ + "$", "i"),
                            S = function () {
                                var t = [].slice.call(c[0].children).filter(function (t) {
                                    return t && t.tagName && $.exec(t.tagName)
                                });
                                return t && Vt.element(t).data("$" + w + "Controller")
                            },
                            b = i.$watch(S, function (t) {
                                t && (xt(o, n, t, i, l), b())
                            });
                        h(i)
                    }
            }
        }
    }

    function xt(t, e, r, n, i) {
        !Zt(r.$onInit) || i.viewDecl.component && Si || r.$onInit();
        var o = P(i.path).state.self,
            a = {
                bind: r
            };
        if (Zt(r.uiOnParamsChanged)) {
            var u = new pr(i.path),
                s = u.getResolvable("$transition$").data,
                c = function (t) {
                    if (t !== s && -1 === t.exiting().indexOf(o)) {
                        var e = t.params("to"),
                            n = t.params("from"),
                            i = t.treeChanges().to.map(function (t) {
                                return t.paramSchema
                            }).reduce(Te, []),
                            a = t.treeChanges().from.map(function (t) {
                                return t.paramSchema
                            }).reduce(Te, []),
                            u = i.filter(function (t) {
                                var r = a.indexOf(t);
                                return -1 === r || !a[r].type.equals(e[t.id], n[t.id])
                            });
                        if (u.length) {
                            var c = u.map(function (t) {
                                    return t.id
                                }),
                                f = $(e, function (t, e) {
                                    return -1 !== c.indexOf(e)
                                });
                            r.uiOnParamsChanged(f, t)
                        }
                    }
                };
            n.$on("$destroy", e.onSuccess({}, c, a))
        }
        if (Zt(r.uiCanExit)) {
            var f = bi++,
                l = function (t) {
                    return !!t && (t._uiCanExitIds && !0 === t._uiCanExitIds[f] || l(t.redirectedFrom()))
                },
                p = function (e) {
                    var n, i = e._uiCanExitIds = e._uiCanExitIds || {};
                    return l(e) || (n = t.when(r.uiCanExit(e)), n.then(function (t) {
                        return i[f] = !1 !== t
                    })), n
                },
                h = {
                    exiting: o.name
                };
            n.$on("$destroy", e.onBefore(h, p, a))
        }
    }

    function jt() {
        var t = !1;
        this.useAnchorScroll = function () {
            t = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (e, r) {
            return t ? e : function (t) {
                return r(function () {
                    t[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }
    var It = angular,
        Vt = e && e.module ? e : It,
        At = function (t) {
            return function (e) {
                return e && e[t]
            }
        },
        Ht = r(function (t, e, r) {
            return r && r[t] === e
        }),
        qt = function (t) {
            return i.apply(null, t.split(".").map(At))
        },
        Dt = function (t) {
            return function () {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return !t.apply(null, e)
            }
        },
        Nt = function (t) {
            return function (e) {
                return e.reduce(function (e, r) {
                    return e && !!t(r)
                }, !0)
            }
        },
        Ft = function (t) {
            return function (e) {
                return e.reduce(function (e, r) {
                    return e || !!t(r)
                }, !1)
            }
        },
        Ut = function (t) {
            return function (e) {
                return null != e && e.constructor === t || e instanceof t
            }
        },
        Lt = function (t) {
            return function (e) {
                return t === e
            }
        },
        Mt = function (t) {
            return function () {
                return t
            }
        },
        Bt = function () {
            function t(t) {
                this.text = t, this.glob = t.split(".");
                var e = this.text.split(".").map(function (t) {
                    return "**" === t ? "(?:|(?:\\.[^.]*)*)" : "*" === t ? "\\.[^.]*" : "\\." + t
                }).join("");
                this.regexp = new RegExp("^" + e + "$")
            }
            return t.prototype.matches = function (t) {
                return this.regexp.test("." + t)
            }, t.is = function (t) {
                return !!/[!,*]+/.exec(t)
            }, t.fromString = function (e) {
                return t.is(e) ? new t(e) : null
            }, t
        }(),
        Gt = function () {
            function t(e) {
                return t.create(e || {})
            }
            return t.create = function (e) {
                e = t.isStateClass(e) ? new e : e;
                var r = ye(ye(e, t.prototype));
                return e.$$state = function () {
                    return r
                }, r.self = e, r.__stateObjectCache = {
                    nameGlob: Bt.fromString(r.name)
                }, r
            }, t.prototype.is = function (t) {
                return this === t || this.self === t || this.fqn() === t
            }, t.prototype.fqn = function () {
                if (!(this.parent && this.parent instanceof this.constructor)) return this.name;
                var t = this.parent.fqn();
                return t ? t + "." + this.name : this.name
            }, t.prototype.root = function () {
                return this.parent && this.parent.root() || this
            }, t.prototype.parameters = function (t) {
                return t = m(t, {
                    inherit: !0,
                    matchingKeys: null
                }), (t.inherit && this.parent && this.parent.parameters() || []).concat(Re(this.params)).filter(function (e) {
                    return !t.matchingKeys || t.matchingKeys.hasOwnProperty(e.id)
                })
            }, t.prototype.parameter = function (t, e) {
                return void 0 === e && (e = {}), this.url && this.url.parameter(t, e) || S(Re(this.params), Ht("id", t)) || e.inherit && this.parent && this.parent.parameter(t)
            }, t.prototype.toString = function () {
                return this.fqn()
            }, t.isStateClass = function (t) {
                return Zt(t) && !0 === t.__uiRouterState
            }, t.isState = function (t) {
                return ee(t.__stateObjectCache)
            }, t
        }(),
        Wt = Object.prototype.toString,
        zt = function (t) {
            return function (e) {
                return typeof e === t
            }
        },
        Jt = zt("undefined"),
        Qt = Dt(Jt),
        Kt = function (t) {
            return null === t
        },
        Yt = a(Kt, Jt),
        Zt = zt("function"),
        Xt = zt("number"),
        te = zt("string"),
        ee = function (t) {
            return null !== t && "object" == typeof t
        },
        re = Array.isArray,
        ne = function (t) {
            return "[object Date]" === Wt.call(t)
        },
        ie = function (t) {
            return "[object RegExp]" === Wt.call(t)
        },
        oe = Gt.isState,
        ae = o(ee, i(At("then"), Zt)),
        ue = function (t) {
            return function () {
                throw new Error(t + "(): No coreservices implementation for UI-Router is loaded.")
            }
        },
        se = {
            $q: void 0,
            $injector: void 0
        },
        ce = "undefined" == typeof window ? {} : window,
        fe = ce.angular || {},
        le = fe.fromJson || JSON.parse.bind(JSON),
        pe = fe.toJson || JSON.stringify.bind(JSON),
        he = fe.copy || k,
        de = fe.forEach || O,
        ve = Object.assign || x,
        me = fe.equals || j,
        ye = function (t, e) {
            return ve(Object.create(t), e)
        },
        ge = r(h),
        we = r(d),
        _e = r(v),
        $e = function (t) {
            return t.slice().forEach(function (e) {
                "function" == typeof e && e(), we(t, e)
            })
        },
        Se = function (t, e) {
            return ve(t, e)
        },
        be = b,
        Re = function (t) {
            return Object.keys(t).map(function (e) {
                return t[e]
            })
        },
        Ee = function (t, e) {
            return t && e
        },
        Ce = function (t, e) {
            return t || e
        },
        Te = function (t, e) {
            return t.concat(e)
        },
        Pe = function (t, e) {
            return re(e) ? t.concat(e.reduce(Pe, [])) : R(t, e)
        },
        ke = function (t, e) {
            return ge(t, e) ? t : R(t, e)
        },
        Oe = function (t) {
            return t.reduce(Te, [])
        },
        xe = function (t) {
            return t.reduce(Pe, [])
        },
        je = E,
        Ie = E,
        Ve = function (t) {
            return Object.keys(t).map(function (e) {
                return [e, t[e]]
            })
        },
        Ae = function (t, e) {
            return void 0 === e && (e = Mt(!0)),
                function (r, n) {
                    return e(r) && e(n) ? t(r) - t(n) : 0
                }
        },
        He = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function (e, r) {
                return t.reduce(function (t, n) {
                    return t || n(e, r)
                }, 0)
            }
        },
        qe = function (t) {
            return t.catch(function (t) {
                return 0
            }) && t
        },
        De = function (t) {
            return qe(se.$q.reject(t))
        },
        Ne = function () {
            function t(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = null), this._items = t, this._limit = e
            }
            return t.prototype.enqueue = function (t) {
                var e = this._items;
                return e.push(t), this._limit && e.length > this._limit && e.shift(), t
            }, t.prototype.dequeue = function () {
                if (this.size()) return this._items.splice(0, 1)[0]
            }, t.prototype.clear = function () {
                var t = this._items;
                return this._items = [], t
            }, t.prototype.size = function () {
                return this._items.length
            }, t.prototype.remove = function (t) {
                var e = this._items.indexOf(t);
                return e > -1 && this._items.splice(e, 1)[0]
            }, t.prototype.peekTail = function () {
                return this._items[this._items.length - 1]
            }, t.prototype.peekHead = function () {
                if (this.size()) return this._items[0]
            }, t
        }();
    ! function (t) {
        t[t.SUPERSEDED = 2] = "SUPERSEDED", t[t.ABORTED = 3] = "ABORTED", t[t.INVALID = 4] = "INVALID", t[t.IGNORED = 5] = "IGNORED", t[t.ERROR = 6] = "ERROR"
    }(t.RejectType || (t.RejectType = {}));
    var Fe = 0,
        Ue = function () {
            function e(t, e, r) {
                this.$id = Fe++, this.type = t, this.message = e, this.detail = r
            }
            return e.prototype.toString = function () {
                var t = function (t) {
                        return t && t.toString !== Object.prototype.toString ? t.toString() : Q(t)
                    }(this.detail),
                    e = this;
                return "Transition Rejection($id: " + e.$id + " type: " + e.type + ", message: " + e.message + ", detail: " + t + ")"
            }, e.prototype.toPromise = function () {
                return ve(De(this), {
                    _transitionRejection: this
                })
            }, e.isRejectionPromise = function (t) {
                return t && "function" == typeof t.then && Ut(e)(t._transitionRejection)
            }, e.superseded = function (r, n) {
                var i = new e(t.RejectType.SUPERSEDED, "The transition has been superseded by a different transition", r);
                return n && n.redirected && (i.redirected = !0), i
            }, e.redirected = function (t) {
                return e.superseded(t, {
                    redirected: !0
                })
            }, e.invalid = function (r) {
                return new e(t.RejectType.INVALID, "This transition is invalid", r)
            }, e.ignored = function (r) {
                return new e(t.RejectType.IGNORED, "The transition was ignored", r)
            }, e.aborted = function (r) {
                return new e(t.RejectType.ABORTED, "The transition has been aborted", r)
            }, e.errored = function (r) {
                return new e(t.RejectType.ERROR, "The transition errored", r)
            }, e.normalize = function (t) {
                return Ut(e)(t) ? t : e.errored(t)
            }, e
        }(),
        Le = function (t) {
            var e = t.viewDecl,
                r = e.$context.name || "(root)";
            return "[View#" + t.$id + " from '" + r + "' state]: target ui-view: '" + e.$uiViewName + "@" + e.$uiViewContextAnchor + "'"
        };
    ! function (t) {
        t[t.RESOLVE = 0] = "RESOLVE", t[t.TRANSITION = 1] = "TRANSITION", t[t.HOOK = 2] = "HOOK", t[t.UIVIEW = 3] = "UIVIEW", t[t.VIEWCONFIG = 4] = "VIEWCONFIG"
    }(t.Category || (t.Category = {}));
    var Me = qt("$id"),
        Be = qt("router.$id"),
        Ge = function (t) {
            return "Transition #" + Me(t) + "-" + Be(t)
        },
        We = function () {
            function e() {
                this._enabled = {}, this.approximateDigests = 0
            }
            return e.prototype._set = function (e, r) {
                var n = this;
                r.length || (r = Object.keys(t.Category).map(function (t) {
                    return parseInt(t, 10)
                }).filter(function (t) {
                    return !isNaN(t)
                }).map(function (e) {
                    return t.Category[e]
                })), r.map(A).forEach(function (t) {
                    return n._enabled[t] = e
                })
            }, e.prototype.enable = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._set(!0, t)
            }, e.prototype.disable = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._set(!1, t)
            }, e.prototype.enabled = function (t) {
                return !!this._enabled[A(t)]
            }, e.prototype.traceTransitionStart = function (e) {
                this.enabled(t.Category.TRANSITION) && console.log(Ge(e) + ": Started  -> " + Q(e))
            }, e.prototype.traceTransitionIgnored = function (e) {
                this.enabled(t.Category.TRANSITION) && console.log(Ge(e) + ": Ignored  <> " + Q(e))
            }, e.prototype.traceHookInvocation = function (e, r, n) {
                if (this.enabled(t.Category.HOOK)) {
                    var i = qt("traceData.hookType")(n) || "internal",
                        o = qt("traceData.context.state.name")(n) || qt("traceData.context")(n) || "unknown",
                        a = z(e.registeredHook.callback);
                    console.log(Ge(r) + ":   Hook -> " + i + " context: " + o + ", " + B(200, a))
                }
            }, e.prototype.traceHookResult = function (e, r, n) {
                this.enabled(t.Category.HOOK) && console.log(Ge(r) + ":   <- Hook returned: " + B(200, Q(e)))
            }, e.prototype.traceResolvePath = function (e, r, n) {
                this.enabled(t.Category.RESOLVE) && console.log(Ge(n) + ":         Resolving " + e + " (" + r + ")")
            }, e.prototype.traceResolvableResolved = function (e, r) {
                this.enabled(t.Category.RESOLVE) && console.log(Ge(r) + ":               <- Resolved  " + e + " to: " + B(200, Q(e.data)))
            }, e.prototype.traceError = function (e, r) {
                this.enabled(t.Category.TRANSITION) && console.log(Ge(r) + ": <- Rejected " + Q(r) + ", reason: " + e)
            }, e.prototype.traceSuccess = function (e, r) {
                this.enabled(t.Category.TRANSITION) && console.log(Ge(r) + ": <- Success  " + Q(r) + ", final state: " + e.name)
            }, e.prototype.traceUIViewEvent = function (e, r, n) {
                void 0 === n && (n = ""), this.enabled(t.Category.UIVIEW) && console.log("ui-view: " + G(30, e) + " " + V(r) + n)
            }, e.prototype.traceUIViewConfigUpdated = function (e, r) {
                this.enabled(t.Category.UIVIEW) && this.traceUIViewEvent("Updating", e, " with ViewConfig from context='" + r + "'")
            }, e.prototype.traceUIViewFill = function (e, r) {
                this.enabled(t.Category.UIVIEW) && this.traceUIViewEvent("Fill", e, " with: " + B(200, r))
            }, e.prototype.traceViewSync = function (e) {
                if (this.enabled(t.Category.VIEWCONFIG)) {
                    var r = e.map(function (t) {
                        var e = t[0],
                            r = t[1];
                        return {
                            "ui-view fqn": e.$type + ":" + e.fqn,
                            "state: view name": r && r.viewDecl.$context.name + ": " + r.viewDecl.$name + " (" + r.viewDecl.$type + ")"
                        }
                    }).sort(function (t, e) {
                        return t["ui-view fqn"].localeCompare(e["ui-view fqn"])
                    });
                    console.table(r)
                }
            }, e.prototype.traceViewServiceEvent = function (e, r) {
                this.enabled(t.Category.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + Le(r))
            }, e.prototype.traceViewServiceUIViewEvent = function (e, r) {
                this.enabled(t.Category.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + V(r))
            }, e
        }(),
        ze = new We;
    ! function (t) {
        t[t.CREATE = 0] = "CREATE", t[t.BEFORE = 1] = "BEFORE", t[t.RUN = 2] = "RUN", t[t.SUCCESS = 3] = "SUCCESS", t[t.ERROR = 4] = "ERROR"
    }(t.TransitionHookPhase || (t.TransitionHookPhase = {})),
    function (t) {
        t[t.TRANSITION = 0] = "TRANSITION", t[t.STATE = 1] = "STATE"
    }(t.TransitionHookScope || (t.TransitionHookScope = {}));
    var Je = function () {
            function t(t, e, r, n) {
                void 0 === n && (n = {}), this._identifier = t, this._definition = e, this._options = n, this._params = r || {}
            }
            return t.prototype.name = function () {
                return this._definition && this._definition.name || this._identifier
            }, t.prototype.identifier = function () {
                return this._identifier
            }, t.prototype.params = function () {
                return this._params
            }, t.prototype.$state = function () {
                return this._definition
            }, t.prototype.state = function () {
                return this._definition && this._definition.self
            }, t.prototype.options = function () {
                return this._options
            }, t.prototype.exists = function () {
                return !(!this._definition || !this._definition.self)
            }, t.prototype.valid = function () {
                return !this.error()
            }, t.prototype.error = function () {
                var t = this.options().relative;
                if (!this._definition && t) {
                    var e = t.name ? t.name : t;
                    return "Could not resolve '" + this.name() + "' from state '" + e + "'"
                }
                return this._definition ? this._definition.self ? void 0 : "State '" + this.name() + "' has an invalid definition" : "No such state '" + this.name() + "'"
            }, t.prototype.toString = function () {
                return "'" + this.name() + "'" + pe(this.params())
            }, t.isDef = function (t) {
                return t && t.state && (te(t.state) || te(t.state.name))
            }, t
        }(),
        Qe = {
            current: l,
            transition: null,
            traceData: {},
            bind: null
        },
        Ke = function () {
            function e(e, r, n, i) {
                var o = this;
                this.transition = e, this.stateContext = r, this.registeredHook = n, this.options = i, this.isSuperseded = function () {
                    return o.type.hookPhase === t.TransitionHookPhase.RUN && !o.options.transition.isActive()
                }, this.options = m(i, Qe), this.type = n.eventType
            }
            return e.prototype.logError = function (t) {
                this.transition.router.stateService.defaultErrorHandler()(t)
            }, e.prototype.invokeHook = function () {
                var t = this,
                    e = this.registeredHook;
                if (!e._deregistered) {
                    var r = this.getNotCurrentRejection();
                    if (r) return r;
                    var n = this.options;
                    ze.traceHookInvocation(this, this.transition, n);
                    var i = function (t) {
                            return Ue.normalize(t).toPromise()
                        },
                        o = function (r) {
                            return e.eventType.getErrorHandler(t)(r)
                        },
                        a = function (r) {
                            return e.eventType.getResultHandler(t)(r)
                        };
                    try {
                        var u = function () {
                            return e.callback.call(n.bind, t.transition, t.stateContext)
                        }();
                        return !this.type.synchronous && ae(u) ? u.catch(i).then(a, o) : a(u)
                    } catch (t) {
                        return o(Ue.normalize(t))
                    }
                }
            }, e.prototype.handleHookResult = function (t) {
                var e = this,
                    r = this.getNotCurrentRejection();
                return r || (ae(t) ? t.then(function (t) {
                    return e.handleHookResult(t)
                }) : (ze.traceHookResult(t, this.transition, this.options), !1 === t ? Ue.aborted("Hook aborted transition").toPromise() : Ut(Je)(t) ? Ue.redirected(t).toPromise() : void 0))
            }, e.prototype.getNotCurrentRejection = function () {
                var t = this.transition.router;
                return t._disposed ? Ue.aborted("UIRouter instance #" + t.$id + " has been stopped (disposed)").toPromise() : this.transition._aborted ? Ue.aborted().toPromise() : this.isSuperseded() ? Ue.superseded(this.options.current()).toPromise() : void 0
            }, e.prototype.toString = function () {
                var t = this,
                    e = t.options,
                    r = t.registeredHook;
                return (qt("traceData.hookType")(e) || "internal") + " context: " + (qt("traceData.context.state.name")(e) || qt("traceData.context")(e) || "unknown") + ", " + B(200, J(r.callback))
            }, e.chain = function (t, e) {
                var r = function (t, e) {
                    return t.then(function () {
                        return e.invokeHook()
                    })
                };
                return t.reduce(r, e || se.$q.when())
            }, e.invokeHooks = function (t, r) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n].invokeHook();
                    if (ae(i)) {
                        var o = t.slice(n + 1);
                        return e.chain(o, i).then(r)
                    }
                }
                return r()
            }, e.runAllHooks = function (t) {
                t.forEach(function (t) {
                    return t.invokeHook()
                })
            }, e.HANDLE_RESULT = function (t) {
                return function (e) {
                    return t.handleHookResult(e)
                }
            }, e.LOG_REJECTED_RESULT = function (t) {
                return function (e) {
                    ae(e) && e.catch(function (e) {
                        return t.logError(Ue.normalize(e))
                    })
                }
            }, e.LOG_ERROR = function (t) {
                return function (e) {
                    return t.logError(e)
                }
            }, e.REJECT_ERROR = function (t) {
                return function (t) {
                    return De(t)
                }
            }, e.THROW_ERROR = function (t) {
                return function (t) {
                    throw t
                }
            }, e
        }(),
        Ye = function () {
            function e(t, e, r, n, i) {
                void 0 === i && (i = {}), this.tranSvc = t, this.eventType = e, this.callback = r, this.matchCriteria = n, this.priority = i.priority || 0, this.bind = i.bind || null, this._deregistered = !1
            }
            return e.prototype._matchingNodes = function (t, e) {
                if (!0 === e) return t;
                var r = t.filter(function (t) {
                    return H(t.state, e)
                });
                return r.length ? r : null
            }, e.prototype._getDefaultMatchCriteria = function () {
                return b(this.tranSvc._pluginapi._getPathTypes(), function () {
                    return !0
                })
            }, e.prototype._getMatchingNodes = function (e) {
                var r = this,
                    n = ve(this._getDefaultMatchCriteria(), this.matchCriteria);
                return Re(this.tranSvc._pluginapi._getPathTypes()).reduce(function (i, o) {
                    var a = o.scope === t.TransitionHookScope.STATE,
                        u = e[o.name] || [],
                        s = a ? u : [P(u)];
                    return i[o.name] = r._matchingNodes(s, n[o.name]), i
                }, {})
            }, e.prototype.matches = function (t) {
                var e = this._getMatchingNodes(t);
                return Re(e).every(f) ? e : null
            }, e
        }(),
        Ze = function () {
            function e(t) {
                this.transition = t
            }
            return e.prototype.buildHooksForPhase = function (t) {
                var e = this;
                return this.transition.router.transitionService._pluginapi._getEvents(t).map(function (t) {
                    return e.buildHooks(t)
                }).reduce(Te, []).filter(f)
            }, e.prototype.buildHooks = function (e) {
                var r = this.transition,
                    n = r.treeChanges(),
                    i = this.getMatchingHooks(e, n);
                if (!i) return [];
                var o = {
                        transition: r,
                        current: r.options().current
                    },
                    a = function (i) {
                        return i.matches(n)[e.criteriaMatchPath.name].map(function (n) {
                            var a = ve({
                                    bind: i.bind,
                                    traceData: {
                                        hookType: e.name,
                                        context: n
                                    }
                                }, o),
                                u = e.criteriaMatchPath.scope === t.TransitionHookScope.STATE ? n.state.self : null,
                                s = new Ke(r, u, i, a);
                            return {
                                hook: i,
                                node: n,
                                transitionHook: s
                            }
                        })
                    };
                return i.map(a).reduce(Te, []).sort(D(e.reverseSort)).map(function (t) {
                    return t.transitionHook
                })
            }, e.prototype.getMatchingHooks = function (e, r) {
                var n = e.hookPhase === t.TransitionHookPhase.CREATE,
                    i = this.transition.router.transitionService;
                return (n ? [i] : [this.transition, i]).map(function (t) {
                    return t.getHooks(e.name)
                }).filter(je(re, "broken event named: " + e.name)).reduce(Te, []).filter(function (t) {
                    return t.matches(r)
                })
            }, e
        }(),
        Xe = function () {
            function t(t) {
                this.pattern = /.*/, this.inherit = !0, ve(this, t)
            }
            return t.prototype.is = function (t, e) {
                return !0
            }, t.prototype.encode = function (t, e) {
                return t
            }, t.prototype.decode = function (t, e) {
                return t
            }, t.prototype.equals = function (t, e) {
                return t == e
            }, t.prototype.$subPattern = function () {
                var t = this.pattern.toString();
                return t.substr(1, t.length - 2)
            }, t.prototype.toString = function () {
                return "{ParamType:" + this.name + "}"
            }, t.prototype.$normalize = function (t) {
                return this.is(t) ? t : this.decode(t)
            }, t.prototype.$asArray = function (t, e) {
                if (!t) return this;
                if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");
                return new N(this, t)
            }, t
        }(),
        tr = Object.prototype.hasOwnProperty,
        er = function (t) {
            return 0 === ["value", "type", "squash", "array", "dynamic"].filter(tr.bind(t || {})).length
        };
    ! function (t) {
        t[t.PATH = 0] = "PATH", t[t.SEARCH = 1] = "SEARCH", t[t.CONFIG = 2] = "CONFIG"
    }(t.DefType || (t.DefType = {}));
    var rr = function () {
            function e(e, r, n, i, o) {
                n = F(n), r = U(n, r, i, e, o.paramTypes);
                var a = function () {
                    var r = {
                            array: i === t.DefType.SEARCH && "auto"
                        },
                        o = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return ve(r, o, n).array
                }();
                r = a ? r.$asArray(a, i === t.DefType.SEARCH) : r;
                var u = void 0 !== n.value || i === t.DefType.SEARCH,
                    s = Qt(n.dynamic) ? !!n.dynamic : !!r.dynamic,
                    c = Qt(n.raw) ? !!n.raw : !!r.raw,
                    f = L(n, u, o.defaultSquashPolicy()),
                    l = M(n, a, u, f),
                    p = Qt(n.inherit) ? !!n.inherit : !!r.inherit;
                ve(this, {
                    id: e,
                    type: r,
                    location: i,
                    isOptional: u,
                    dynamic: s,
                    raw: c,
                    squash: f,
                    replace: l,
                    inherit: p,
                    array: a,
                    config: n
                })
            }
            return e.prototype.isDefaultValue = function (t) {
                return this.isOptional && this.type.equals(this.value(), t)
            }, e.prototype.value = function (t) {
                var e = this;
                return t = function (t) {
                    for (var r = 0, n = e.replace; r < n.length; r++) {
                        var i = n[r];
                        if (i.from === t) return i.to
                    }
                    return t
                }(t), Jt(t) ? function () {
                    if (e._defaultValueCache) return e._defaultValueCache.defaultValue;
                    if (!se.$injector) throw new Error("Injectable functions cannot be called at configuration time");
                    var t = se.$injector.invoke(e.config.$$fn);
                    if (null !== t && void 0 !== t && !e.type.is(t)) throw new Error("Default value (" + t + ") for parameter '" + e.id + "' is not an instance of ParamType (" + e.type.name + ")");
                    return e.config.$$fn.__cacheable && (e._defaultValueCache = {
                        defaultValue: t
                    }), t
                }() : this.type.$normalize(t)
            }, e.prototype.isSearch = function () {
                return this.location === t.DefType.SEARCH
            }, e.prototype.validates = function (t) {
                if ((Jt(t) || null === t) && this.isOptional) return !0;
                var e = this.type.$normalize(t);
                if (!this.type.is(e)) return !1;
                var r = this.type.encode(e);
                return !(te(r) && !this.type.pattern.exec(r))
            }, e.prototype.toString = function () {
                return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}"
            }, e.values = function (t, e) {
                void 0 === e && (e = {});
                for (var r = {}, n = 0, i = t; n < i.length; n++) {
                    var o = i[n];
                    r[o.id] = o.value(e[o.id])
                }
                return r
            }, e.changed = function (t, e, r) {
                return void 0 === e && (e = {}), void 0 === r && (r = {}), t.filter(function (t) {
                    return !t.type.equals(e[t.id], r[t.id])
                })
            }, e.equals = function (t, r, n) {
                return void 0 === r && (r = {}), void 0 === n && (n = {}), 0 === e.changed(t, r, n).length
            }, e.validates = function (t, e) {
                return void 0 === e && (e = {}), t.map(function (t) {
                    return t.validates(e[t.id])
                }).reduce(Ee, !0)
            }, e
        }(),
        nr = function () {
            function t(e) {
                if (e instanceof t) {
                    var r = e;
                    this.state = r.state, this.paramSchema = r.paramSchema.slice(), this.paramValues = ve({}, r.paramValues), this.resolvables = r.resolvables.slice(), this.views = r.views && r.views.slice()
                } else {
                    var n = e;
                    this.state = n, this.paramSchema = n.parameters({
                        inherit: !1
                    }), this.paramValues = {}, this.resolvables = n.resolvables.map(function (t) {
                        return t.clone()
                    })
                }
            }
            return t.prototype.applyRawParams = function (t) {
                var e = function (e) {
                    return [e.id, e.value(t[e.id])]
                };
                return this.paramValues = this.paramSchema.reduce(function (t, r) {
                    return T(t, e(r))
                }, {}), this
            }, t.prototype.parameter = function (t) {
                return S(this.paramSchema, Ht("id", t))
            }, t.prototype.equals = function (t, e) {
                var r = this.diff(t, e);
                return r && 0 === r.length
            }, t.prototype.diff = function (t, e) {
                if (this.state !== t.state) return !1;
                var r = e ? e(this) : this.paramSchema;
                return rr.changed(r, this.paramValues, t.paramValues)
            }, t.clone = function (e) {
                return new t(e)
            }, t
        }(),
        ir = function () {
            function t() {}
            return t.makeTargetState = function (t) {
                var e = P(t).state;
                return new Je(e, e, t.map(At("paramValues")).reduce(Se, {}))
            }, t.buildPath = function (t) {
                var e = t.params();
                return t.$state().path.map(function (t) {
                    return new nr(t).applyRawParams(e)
                })
            }, t.buildToPath = function (e, r) {
                var n = t.buildPath(r);
                return r.options().inherit ? t.inheritParams(e, n, Object.keys(r.params())) : n
            }, t.applyViewConfigs = function (e, r, n) {
                r.filter(function (t) {
                    return ge(n, t.state)
                }).forEach(function (n) {
                    var i = Re(n.state.views || {}),
                        o = t.subPath(r, function (t) {
                            return t === n
                        }),
                        a = i.map(function (t) {
                            return e.createViewConfig(o, t)
                        });
                    n.views = a.reduce(Te, [])
                })
            }, t.inheritParams = function (t, e, r) {
                function n(t, e) {
                    var r = S(t, Ht("state", e));
                    return ve({}, r && r.paramValues)
                }

                function i(e) {
                    var i = ve({}, e && e.paramValues),
                        a = g(i, r);
                    i = w(i, r);
                    var u = w(n(t, e.state) || {}, o),
                        s = ve(i, u, a);
                    return new nr(e.state).applyRawParams(s)
                }
                void 0 === r && (r = []);
                var o = t.map(function (t) {
                    return t.paramSchema
                }).reduce(Te, []).filter(function (t) {
                    return !t.inherit
                }).map(At("id"));
                return e.map(i)
            }, t.treeChanges = function (e, r, n) {
                function i(t, e) {
                    var n = nr.clone(t);
                    return n.paramValues = r[e].paramValues, n
                }
                for (var o = 0, a = Math.min(e.length, r.length); o < a && e[o].state !== n && function (e, r) {
                        return e.equals(r, t.nonDynamicParams)
                    }(e[o], r[o]);) o++;
                var u, s, c, f, l;
                u = e, s = u.slice(0, o), c = u.slice(o);
                var p = s.map(i);
                return f = r.slice(o), l = p.concat(f), {
                    from: u,
                    to: l,
                    retained: s,
                    exiting: c,
                    entering: f
                }
            }, t.matching = function (t, e, r) {
                var n = !1;
                return C(t, e).reduce(function (t, e) {
                    var i = e[0],
                        o = e[1];
                    return n = n || !i.equals(o, r), n ? t : t.concat(i)
                }, [])
            }, t.equals = function (e, r, n) {
                return e.length === r.length && t.matching(e, r, n).length === e.length
            }, t.subPath = function (t, e) {
                var r = S(t, e),
                    n = t.indexOf(r);
                return -1 === n ? void 0 : t.slice(0, n + 1)
            }, t.nonDynamicParams = function (t) {
                return t.state.parameters({
                    inherit: !1
                }).filter(function (t) {
                    return !t.dynamic
                })
            }, t.paramValues = function (t) {
                return t.reduce(function (t, e) {
                    return ve(t, e.paramValues)
                }, {})
            }, t
        }(),
        or = {
            when: "LAZY",
            async: "WAIT"
        },
        ar = function () {
            function t(e, r, n, i, o) {
                if (this.resolved = !1, this.promise = void 0, e instanceof t) ve(this, e);
                else if (Zt(r)) {
                    if (Yt(e)) throw new Error("new Resolvable(): token argument is required");
                    if (!Zt(r)) throw new Error("new Resolvable(): resolveFn argument must be a function");
                    this.token = e, this.policy = i, this.resolveFn = r, this.deps = n || [], this.data = o, this.resolved = void 0 !== o, this.promise = this.resolved ? se.$q.when(this.data) : void 0
                } else if (ee(e) && e.token && Zt(e.resolveFn)) {
                    var a = e;
                    return new t(a.token, a.resolveFn, a.deps, a.policy, a.data)
                }
            }
            return t.prototype.getPolicy = function (t) {
                var e = this.policy || {},
                    r = t && t.resolvePolicy || {};
                return {
                    when: e.when || r.when || or.when,
                    async: e.async || r.async || or.async
                }
            }, t.prototype.resolve = function (t, e) {
                var r = this,
                    n = se.$q,
                    i = function () {
                        return n.all(t.getDependencies(r).map(function (r) {
                            return r.get(t, e)
                        }))
                    },
                    o = function (t) {
                        return r.resolveFn.apply(null, t)
                    },
                    a = function (t) {
                        var e = t.cache(1);
                        return e.take(1).toPromise().then(function () {
                            return e
                        })
                    },
                    u = t.findNode(this),
                    s = u && u.state,
                    c = "RXWAIT" === this.getPolicy(s).async ? a : f,
                    l = function (t) {
                        return r.data = t, r.resolved = !0, ze.traceResolvableResolved(r, e), r.data
                    };
                return this.promise = n.when().then(i).then(o).then(c).then(l)
            }, t.prototype.get = function (t, e) {
                return this.promise || this.resolve(t, e)
            }, t.prototype.toString = function () {
                return "Resolvable(token: " + Q(this.token) + ", requires: [" + this.deps.map(Q) + "])"
            }, t.prototype.clone = function () {
                return new t(this)
            }, t.fromData = function (e, r) {
                return new t(e, function () {
                    return r
                }, null, null, r)
            }, t
        }(),
        ur = {
            when: {
                LAZY: "LAZY",
                EAGER: "EAGER"
            },
            async: {
                WAIT: "WAIT",
                NOWAIT: "NOWAIT",
                RXWAIT: "RXWAIT"
            }
        },
        sr = ur.when,
        cr = [sr.EAGER, sr.LAZY],
        fr = [sr.EAGER],
        lr = "Native Injector",
        pr = function () {
            function t(t) {
                this._path = t
            }
            return t.prototype.getTokens = function () {
                return this._path.reduce(function (t, e) {
                    return t.concat(e.resolvables.map(function (t) {
                        return t.token
                    }))
                }, []).reduce(ke, [])
            }, t.prototype.getResolvable = function (t) {
                return P(this._path.map(function (t) {
                    return t.resolvables
                }).reduce(Te, []).filter(function (e) {
                    return e.token === t
                }))
            }, t.prototype.getPolicy = function (t) {
                var e = this.findNode(t);
                return t.getPolicy(e.state)
            }, t.prototype.subContext = function (e) {
                return new t(ir.subPath(this._path, function (t) {
                    return t.state === e
                }))
            }, t.prototype.addResolvables = function (t, e) {
                var r = S(this._path, Ht("state", e)),
                    n = t.map(function (t) {
                        return t.token
                    });
                r.resolvables = r.resolvables.filter(function (t) {
                    return -1 === n.indexOf(t.token)
                }).concat(t)
            }, t.prototype.resolvePath = function (t, e) {
                var r = this;
                void 0 === t && (t = "LAZY");
                var n = ge(cr, t) ? t : "LAZY",
                    i = n === ur.when.EAGER ? fr : cr;
                ze.traceResolvePath(this._path, t, e);
                var o = function (t, e) {
                        return function (n) {
                            return ge(t, r.getPolicy(n)[e])
                        }
                    },
                    a = this._path.reduce(function (t, n) {
                        var a = n.resolvables.filter(o(i, "when")),
                            u = a.filter(o(["NOWAIT"], "async")),
                            s = a.filter(Dt(o(["NOWAIT"], "async"))),
                            c = r.subContext(n.state),
                            f = function (t) {
                                return t.get(c, e).then(function (e) {
                                    return {
                                        token: t.token,
                                        value: e
                                    }
                                })
                            };
                        return u.forEach(f), t.concat(s.map(f))
                    }, []);
                return se.$q.all(a)
            }, t.prototype.injector = function () {
                return this._injector || (this._injector = new hr(this))
            }, t.prototype.findNode = function (t) {
                return S(this._path, function (e) {
                    return ge(e.resolvables, t)
                })
            }, t.prototype.getDependencies = function (t) {
                var e = this,
                    r = this.findNode(t),
                    n = ir.subPath(this._path, function (t) {
                        return t === r
                    }) || this._path,
                    i = n.reduce(function (t, e) {
                        return t.concat(e.resolvables)
                    }, []).filter(function (e) {
                        return e !== t
                    }),
                    o = function (t) {
                        var r = i.filter(function (e) {
                            return e.token === t
                        });
                        if (r.length) return P(r);
                        var n = e.injector().getNative(t);
                        if (!n) throw new Error("Could not find Dependency Injection token: " + Q(t));
                        return new ar(t, function () {
                            return n
                        }, [], n)
                    };
                return t.deps.map(o)
            }, t
        }(),
        hr = function () {
            function t(t) {
                this.context = t, this.native = this.get(lr) || se.$injector
            }
            return t.prototype.get = function (t) {
                var e = this.context.getResolvable(t);
                if (e) {
                    if ("NOWAIT" === this.context.getPolicy(e).async) return e.get(this.context);
                    if (!e.resolved) throw new Error("Resolvable async .get() not complete:" + Q(e.token));
                    return e.data
                }
                return this.native && this.native.get(t)
            }, t.prototype.getAsync = function (t) {
                var e = this.context.getResolvable(t);
                return e ? e.get(this.context) : se.$q.when(this.native.get(t))
            }, t.prototype.getNative = function (t) {
                return this.native && this.native.get(t)
            }, t
        }(),
        dr = At("self"),
        vr = function () {
            function e(e, r, n) {
                var i = this;
                if (this._deferred = se.$q.defer(), this.promise = this._deferred.promise, this._registeredHooks = {}, this._hookBuilder = new Ze(this), this.isActive = function () {
                        return i.router.globals.transition === i
                    }, this.router = n, this._targetState = r, !r.valid()) throw new Error(r.error());
                this._options = ve({
                    current: Mt(this)
                }, r.options()), this.$id = n.transitionService._transitionCount++;
                var o = ir.buildToPath(e, r);
                this._treeChanges = ir.treeChanges(e, o, this._options.reloadState), this.createTransitionHookRegFns();
                var a = this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);
                Ke.invokeHooks(a, function () {
                    return null
                }), this.applyViewConfigs(n)
            }
            return e.prototype.onBefore = function (t, e, r) {}, e.prototype.onStart = function (t, e, r) {}, e.prototype.onExit = function (t, e, r) {}, e.prototype.onRetain = function (t, e, r) {}, e.prototype.onEnter = function (t, e, r) {}, e.prototype.onFinish = function (t, e, r) {}, e.prototype.onSuccess = function (t, e, r) {}, e.prototype.onError = function (t, e, r) {}, e.prototype.createTransitionHookRegFns = function () {
                var e = this;
                this.router.transitionService._pluginapi._getEvents().filter(function (e) {
                    return e.hookPhase !== t.TransitionHookPhase.CREATE
                }).forEach(function (t) {
                    return q(e, e.router.transitionService, t)
                })
            }, e.prototype.getHooks = function (t) {
                return this._registeredHooks[t]
            }, e.prototype.applyViewConfigs = function (t) {
                var e = this._treeChanges.entering.map(function (t) {
                    return t.state
                });
                ir.applyViewConfigs(t.transitionService.$view, this._treeChanges.to, e)
            }, e.prototype.$from = function () {
                return P(this._treeChanges.from).state
            }, e.prototype.$to = function () {
                return P(this._treeChanges.to).state
            }, e.prototype.from = function () {
                return this.$from().self
            }, e.prototype.to = function () {
                return this.$to().self
            }, e.prototype.targetState = function () {
                return this._targetState
            }, e.prototype.is = function (t) {
                return t instanceof e ? this.is({
                    to: t.$to().name,
                    from: t.$from().name
                }) : !(t.to && !H(this.$to(), t.to) || t.from && !H(this.$from(), t.from))
            }, e.prototype.params = function (t) {
                return void 0 === t && (t = "to"), Object.freeze(this._treeChanges[t].map(At("paramValues")).reduce(Se, {}))
            }, e.prototype.injector = function (t, e) {
                void 0 === e && (e = "to");
                var r = this._treeChanges[e];
                return t && (r = ir.subPath(r, function (e) {
                    return e.state === t || e.state.name === t
                })), new pr(r).injector()
            }, e.prototype.getResolveTokens = function (t) {
                return void 0 === t && (t = "to"), new pr(this._treeChanges[t]).getTokens()
            }, e.prototype.addResolvable = function (t, e) {
                void 0 === e && (e = ""), t = Ut(ar)(t) ? t : new ar(t);
                var r = "string" == typeof e ? e : e.name,
                    n = this._treeChanges.to,
                    i = S(n, function (t) {
                        return t.state.name === r
                    });
                new pr(n).addResolvables([t], i.state)
            }, e.prototype.redirectedFrom = function () {
                return this._options.redirectedFrom || null
            }, e.prototype.originalTransition = function () {
                var t = this.redirectedFrom();
                return t && t.originalTransition() || this
            }, e.prototype.options = function () {
                return this._options
            }, e.prototype.entering = function () {
                return b(this._treeChanges.entering, At("state")).map(dr)
            }, e.prototype.exiting = function () {
                return b(this._treeChanges.exiting, At("state")).map(dr).reverse()
            }, e.prototype.retained = function () {
                return b(this._treeChanges.retained, At("state")).map(dr)
            }, e.prototype.views = function (t, e) {
                void 0 === t && (t = "entering");
                var r = this._treeChanges[t];
                return r = e ? r.filter(Ht("state", e)) : r, r.map(At("views")).filter(f).reduce(Te, [])
            }, e.prototype.treeChanges = function (t) {
                return t ? this._treeChanges[t] : this._treeChanges
            }, e.prototype.redirect = function (t) {
                for (var e = 1, r = this; null != (r = r.redirectedFrom());)
                    if (++e > 20) throw new Error("Too many consecutive Transition redirects (20+)");
                var n = {
                    redirectedFrom: this,
                    source: "redirect"
                };
                "url" === this.options().source && !1 !== t.options().location && (n.location = "replace");
                var i = ve({}, this.options(), t.options(), n);
                t = new Je(t.identifier(), t.$state(), t.params(), i);
                var o = this.router.transitionService.create(this._treeChanges.from, t),
                    a = this._treeChanges.entering,
                    u = o._treeChanges.entering;
                return ir.matching(u, a, ir.nonDynamicParams).filter(Dt(function (t) {
                    return function (e) {
                        return t && e.state.includes[t.name]
                    }
                }(t.options().reloadState))).forEach(function (t, e) {
                    t.resolvables = a[e].resolvables
                }), o
            }, e.prototype._changedParams = function () {
                var t = this._treeChanges;
                if (!this._options.reload && !t.exiting.length && !t.entering.length && t.to.length === t.from.length) {
                    if (!C(t.to, t.from).map(function (t) {
                            return t[0].state !== t[1].state
                        }).reduce(Ce, !1)) {
                        var e = t.to.map(function (t) {
                                return t.paramSchema
                            }),
                            r = [t.to, t.from].map(function (t) {
                                return t.map(function (t) {
                                    return t.paramValues
                                })
                            });
                        return C(e, r[0], r[1]).map(function (t) {
                            var e = t[0],
                                r = t[1],
                                n = t[2];
                            return rr.changed(e, r, n)
                        }).reduce(Te, [])
                    }
                }
            }, e.prototype.dynamic = function () {
                var t = this._changedParams();
                return !!t && t.map(function (t) {
                    return t.dynamic
                }).reduce(Ce, !1)
            }, e.prototype.ignored = function () {
                return !!this._ignoredReason()
            }, e.prototype._ignoredReason = function () {
                var t = this.router.globals.transition,
                    e = this._options.reloadState,
                    r = function (t, r) {
                        if (t.length !== r.length) return !1;
                        var n = ir.matching(t, r);
                        return t.length === n.filter(function (t) {
                            return !e || !t.state.includes[e.name]
                        }).length
                    },
                    n = this.treeChanges(),
                    i = t && t.treeChanges();
                return i && r(i.to, n.to) && r(i.exiting, n.exiting) ? "SameAsPending" : 0 === n.exiting.length && 0 === n.entering.length && r(n.from, n.to) ? "SameAsCurrent" : void 0
            }, e.prototype.run = function () {
                var e = this,
                    r = Ke.runAllHooks,
                    n = function (t) {
                        return e._hookBuilder.buildHooksForPhase(t)
                    },
                    i = function () {
                        ze.traceSuccess(e.$to(), e), e.success = !0, e._deferred.resolve(e.to()), r(n(t.TransitionHookPhase.SUCCESS))
                    },
                    o = function (i) {
                        ze.traceError(i, e), e.success = !1, e._deferred.reject(i), e._error = i, r(n(t.TransitionHookPhase.ERROR))
                    },
                    a = function () {
                        var e = n(t.TransitionHookPhase.RUN),
                            r = function () {
                                return se.$q.when(void 0)
                            };
                        return Ke.invokeHooks(e, r)
                    },
                    u = function () {
                        var t = e.router.globals;
                        return t.lastStartedTransitionId = e.$id, t.transition = e, t.transitionHistory.enqueue(e), ze.traceTransitionStart(e), se.$q.when(void 0)
                    },
                    s = n(t.TransitionHookPhase.BEFORE);
                return Ke.invokeHooks(s, u).then(a).then(i, o), this.promise
            }, e.prototype.valid = function () {
                return !this.error() || void 0 !== this.success
            }, e.prototype.abort = function () {
                Jt(this.success) && (this._aborted = !0)
            }, e.prototype.error = function () {
                var t = this.$to();
                if (t.self.abstract) return "Cannot transition to abstract state '" + t.name + "'";
                var e = t.parameters(),
                    r = this.params(),
                    n = e.filter(function (t) {
                        return !t.validates(r[t.id])
                    });
                return n.length ? "Param values not valid for state '" + t.name + "'. Invalid params: [ " + n.map(function (t) {
                    return t.id
                }).join(", ") + " ]" : !1 === this.success ? this._error : void 0
            }, e.prototype.toString = function () {
                var t = this.from(),
                    e = this.to(),
                    r = function (t) {
                        return null !== t["#"] && void 0 !== t["#"] ? t : w(t, ["#"])
                    };
                return "Transition#" + this.$id + "( '" + (ee(t) ? t.name : t) + "'" + pe(r(this._treeChanges.from.map(At("paramValues")).reduce(Se, {}))) + " -> " + (this.valid() ? "" : "(X) ") + "'" + (ee(e) ? e.name : e) + "'" + pe(r(this.params())) + " )"
            }, e.diToken = e, e
        }(),
        mr = null,
        yr = function (t) {
            var e = Ue.isRejectionPromise;
            return (mr = mr || s([
                [Dt(Qt), Mt("undefined")],
                [Kt, Mt("null")],
                [ae, Mt("[Promise]")],
                [e, function (t) {
                    return t._transitionRejection.toString()
                }],
                [Ut(Ue), u("toString")],
                [Ut(vr), u("toString")],
                [Ut(ar), u("toString")],
                [c, z],
                [Mt(!0), f]
            ]))(t)
        },
        gr = function (t) {
            return function (e) {
                if (!e) return ["", ""];
                var r = e.indexOf(t);
                return -1 === r ? [e, ""] : [e.substr(0, r), e.substr(r + 1)]
            }
        },
        wr = function () {
            function t() {
                this.enqueue = !0, this.typeQueue = [], this.defaultTypes = g(t.prototype, ["hash", "string", "query", "path", "int", "bool", "date", "json", "any"]);
                var e = function (t, e) {
                    return new Xe(ve({
                        name: e
                    }, t))
                };
                this.types = ye(b(this.defaultTypes, e), {})
            }
            return t.prototype.dispose = function () {
                this.types = {}
            }, t.prototype.type = function (t, e, r) {
                if (!Qt(e)) return this.types[t];
                if (this.types.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");
                return this.types[t] = new Xe(ve({
                    name: t
                }, e)), r && (this.typeQueue.push({
                    name: t,
                    def: r
                }), this.enqueue || this._flushTypeQueue()), this
            }, t.prototype._flushTypeQueue = function () {
                for (; this.typeQueue.length;) {
                    var t = this.typeQueue.shift();
                    if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    ve(this.types[t.name], se.$injector.invoke(t.def))
                }
            }, t
        }();
    ! function () {
        var t = function (t) {
            var e = function (t) {
                    return null != t ? t.toString() : t
                },
                r = {
                    encode: e,
                    decode: e,
                    is: Ut(String),
                    pattern: /.*/,
                    equals: function (t, e) {
                        return t == e
                    }
                };
            return ve({}, r, t)
        };
        ve(wr.prototype, {
            string: t({}),
            path: t({
                pattern: /[^\/]*/
            }),
            query: t({}),
            hash: t({
                inherit: !1
            }),
            int: t({
                decode: function (t) {
                    return parseInt(t, 10)
                },
                is: function (t) {
                    return !Yt(t) && this.decode(t.toString()) === t
                },
                pattern: /-?\d+/
            }),
            bool: t({
                encode: function (t) {
                    return t && 1 || 0
                },
                decode: function (t) {
                    return 0 !== parseInt(t, 10)
                },
                is: Ut(Boolean),
                pattern: /0|1/
            }),
            date: t({
                encode: function (t) {
                    return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : void 0
                },
                decode: function (t) {
                    if (this.is(t)) return t;
                    var e = this.capture.exec(t);
                    return e ? new Date(e[1], e[2] - 1, e[3]) : void 0
                },
                is: function (t) {
                    return t instanceof Date && !isNaN(t.valueOf())
                },
                equals: function (t, e) {
                    return ["getFullYear", "getMonth", "getDate"].reduce(function (r, n) {
                        return r && t[n]() === e[n]()
                    }, !0)
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            }),
            json: t({
                encode: pe,
                decode: le,
                is: Ut(Object),
                equals: me,
                pattern: /[^\/]*/
            }),
            any: t({
                encode: f,
                decode: f,
                is: function () {
                    return !0
                },
                equals: me
            })
        })
    }();
    var _r, $r = function () {
            function t(t) {
                void 0 === t && (t = {}), ve(this, t)
            }
            return t.prototype.$inherit = function (t, e, r) {
                var n, i = y(e, r),
                    o = {},
                    a = [];
                for (var u in i)
                    if (i[u] && i[u].params && (n = Object.keys(i[u].params), n.length))
                        for (var s in n) a.indexOf(n[s]) >= 0 || (a.push(n[s]), o[n[s]] = this[n[s]]);
                return ve({}, o, t)
            }, t
        }(),
        Sr = function (t) {
            if (!te(t)) return !1;
            var e = "^" === t.charAt(0);
            return {
                val: e ? t.substring(1) : t,
                root: e
            }
        },
        br = function (t, e) {
            return function (r) {
                var n = r;
                n && n.url && n.name && n.name.match(/\.\*\*$/) && (n.url += "{remainder:any}");
                var i = Sr(n.url),
                    o = r.parent,
                    a = i ? t.compile(i.val, {
                        params: r.params || {},
                        paramMap: function (t, e) {
                            return !1 === n.reloadOnSearch && e && (t = ve(t || {}, {
                                dynamic: !0
                            })), t
                        }
                    }) : n.url;
                if (!a) return null;
                if (!t.isMatcher(a)) throw new Error("Invalid url '" + a + "' in state '" + r + "'");
                return i && i.root ? a : (o && o.navigable || e()).url.append(a)
            }
        },
        Rr = function (t) {
            return function (e) {
                return !t(e) && e.url ? e : e.parent ? e.parent.navigable : null
            }
        },
        Er = function (t) {
            return function (e) {
                var r = function (e, r) {
                        return t.fromConfig(r, null, e)
                    },
                    n = e.url && e.url.parameters({
                        inherit: !1
                    }) || [],
                    i = Re(be(w(e.params || {}, n.map(At("id"))), r));
                return n.concat(i).map(function (t) {
                    return [t.id, t]
                }).reduce(T, {})
            }
        },
        Cr = function () {
            function t(t, e) {
                function r(e) {
                    return o(e) ? null : t.find(n.parentName(e)) || i()
                }
                this.matcher = t;
                var n = this,
                    i = function () {
                        return t.find("")
                    },
                    o = function (t) {
                        return "" === t.name
                    };
                this.builders = {
                    name: [Z],
                    self: [X],
                    parent: [r],
                    data: [tt],
                    url: [br(e, i)],
                    navigable: [Rr(o)],
                    params: [Er(e.paramFactory)],
                    views: [],
                    path: [et],
                    includes: [rt],
                    resolvables: [nt]
                }
            }
            return t.prototype.builder = function (t, e) {
                var r = this.builders,
                    n = r[t] || [];
                return te(t) && !Qt(e) ? n.length > 1 ? n : n[0] : te(t) && Zt(e) ? (r[t] = n, r[t].push(e), function () {
                    return r[t].splice(r[t].indexOf(e, 1)) && null
                }) : void 0
            }, t.prototype.build = function (t) {
                var e = this,
                    r = e.matcher,
                    n = e.builders,
                    i = this.parentName(t);
                if (i && !r.find(i, void 0, !1)) return null;
                for (var o in n)
                    if (n.hasOwnProperty(o)) {
                        var a = n[o].reduce(function (t, e) {
                            return function (r) {
                                return e(r, t)
                            }
                        }, l);
                        t[o] = a(t)
                    } return t
            }, t.prototype.parentName = function (t) {
                var e = t.name || "",
                    r = e.split(".");
                if ("**" === r.pop() && r.pop(), r.length) {
                    if (t.parent) throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + e + ")");
                    return r.join(".")
                }
                return t.parent ? te(t.parent) ? t.parent : t.parent.name : ""
            }, t.prototype.name = function (t) {
                var e = t.name;
                if (-1 !== e.indexOf(".") || !t.parent) return e;
                var r = te(t.parent) ? t.parent : t.parent.name;
                return r ? r + "." + e : e
            }, t
        }(),
        Tr = function () {
            function t(t) {
                this._states = t
            }
            return t.prototype.isRelative = function (t) {
                return t = t || "", 0 === t.indexOf(".") || 0 === t.indexOf("^")
            }, t.prototype.find = function (t, e, r) {
                if (void 0 === r && (r = !0), t || "" === t) {
                    var n = te(t),
                        i = n ? t : t.name;
                    this.isRelative(i) && (i = this.resolvePath(i, e));
                    var o = this._states[i];
                    if (o && (n || !(n || o !== t && o.self !== t))) return o;
                    if (n && r) {
                        var a = Re(this._states),
                            u = a.filter(function (t) {
                                return t.__stateObjectCache.nameGlob && t.__stateObjectCache.nameGlob.matches(i)
                            });
                        return u.length > 1 && console.log("stateMatcher.find: Found multiple matches for " + i + " using glob: ", u.map(function (t) {
                            return t.name
                        })), u[0]
                    }
                }
            }, t.prototype.resolvePath = function (t, e) {
                if (!e) throw new Error("No reference point given for path '" + t + "'");
                for (var r = this.find(e), n = t.split("."), i = 0, o = n.length, a = r; i < o; i++)
                    if ("" !== n[i] || 0 !== i) {
                        if ("^" !== n[i]) break;
                        if (!a.parent) throw new Error("Path '" + t + "' not valid for state '" + r.name + "'");
                        a = a.parent
                    } else a = r;
                var u = n.slice(i).join(".");
                return a.name + (a.name && u ? "." : "") + u
            }, t
        }(),
        Pr = function () {
            function t(t, e, r, n, i) {
                this.$registry = t, this.$urlRouter = e, this.states = r, this.builder = n, this.listeners = i, this.queue = [], this.matcher = t.matcher
            }
            return t.prototype.dispose = function () {
                this.queue = []
            }, t.prototype.register = function (t) {
                var e = this.queue,
                    r = Gt.create(t),
                    n = r.name;
                if (!te(n)) throw new Error("State must have a valid name");
                if (this.states.hasOwnProperty(n) || ge(e.map(At("name")), n)) throw new Error("State '" + n + "' is already defined");
                return e.push(r), this.flush(), r
            }, t.prototype.flush = function () {
                for (var t = this, e = this, r = e.queue, n = e.states, i = e.builder, o = [], a = [], u = {}, s = function (e) {
                        return t.states.hasOwnProperty(e) && t.states[e]
                    }; r.length > 0;) {
                    var c = r.shift(),
                        f = c.name,
                        l = i.build(c),
                        p = a.indexOf(c);
                    if (l) {
                        var h = s(f);
                        if (h && h.name === f) throw new Error("State '" + f + "' is already defined");
                        var d = s(f + ".**");
                        d && this.$registry.deregister(d), n[f] = c, this.attachRoute(c), p >= 0 && a.splice(p, 1), o.push(c)
                    } else {
                        var v = u[f];
                        if (u[f] = r.length, p >= 0 && v === r.length) return r.push(c), n;
                        p < 0 && a.push(c), r.push(c)
                    }
                }
                return o.length && this.listeners.forEach(function (t) {
                    return t("registered", o.map(function (t) {
                        return t.self
                    }))
                }), n
            }, t.prototype.attachRoute = function (t) {
                !t.abstract && t.url && this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))
            }, t
        }(),
        kr = function () {
            function t(t) {
                this._router = t, this.states = {}, this.listeners = [], this.matcher = new Tr(this.states), this.builder = new Cr(this.matcher, t.urlMatcherFactory), this.stateQueue = new Pr(this, t.urlRouter, this.states, this.builder, this.listeners), this._registerRoot()
            }
            return t.prototype._registerRoot = function () {
                var t = {
                    name: "",
                    url: "^",
                    views: null,
                    params: {
                        "#": {
                            value: null,
                            type: "hash",
                            dynamic: !0
                        }
                    },
                    abstract: !0
                };
                (this._root = this.stateQueue.register(t)).navigable = null
            }, t.prototype.dispose = function () {
                var t = this;
                this.stateQueue.dispose(), this.listeners = [], this.get().forEach(function (e) {
                    return t.get(e) && t.deregister(e)
                })
            }, t.prototype.onStatesChanged = function (t) {
                return this.listeners.push(t),
                    function () {
                        we(this.listeners)(t)
                    }.bind(this)
            }, t.prototype.root = function () {
                return this._root
            }, t.prototype.register = function (t) {
                return this.stateQueue.register(t)
            }, t.prototype._deregisterTree = function (t) {
                var e = this,
                    r = this.get().map(function (t) {
                        return t.$$state()
                    }),
                    n = function (t) {
                        var e = r.filter(function (e) {
                            return -1 !== t.indexOf(e.parent)
                        });
                        return 0 === e.length ? e : e.concat(n(e))
                    },
                    i = n([t]),
                    o = [t].concat(i).reverse();
                return o.forEach(function (t) {
                    var r = e._router.urlRouter;
                    r.rules().filter(Ht("state", t)).forEach(r.removeRule.bind(r)), delete e.states[t.name]
                }), o
            }, t.prototype.deregister = function (t) {
                var e = this.get(t);
                if (!e) throw new Error("Can't deregister state; not found: " + t);
                var r = this._deregisterTree(e.$$state());
                return this.listeners.forEach(function (t) {
                    return t("deregistered", r.map(function (t) {
                        return t.self
                    }))
                }), r
            }, t.prototype.get = function (t, e) {
                var r = this;
                if (0 === arguments.length) return Object.keys(this.states).map(function (t) {
                    return r.states[t].self
                });
                var n = this.matcher.find(t, e);
                return n && n.self || null
            }, t.prototype.decorator = function (t, e) {
                return this.builder.builder(t, e)
            }, t
        }(),
        Or = function (t, e, r) {
            return t[e] = t[e] || r()
        },
        xr = K("/"),
        jr = function () {
            function e(t, r, n, i) {
                var o = this;
                this.config = i, this._cache = {
                    path: [this]
                }, this._children = [], this._params = [], this._segments = [], this._compiled = [], this.pattern = t, this.config = m(this.config, {
                    params: {},
                    strict: !0,
                    caseInsensitive: !1,
                    paramMap: f
                });
                for (var a, u, s, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, p = 0, h = [], d = function (r) {
                        if (!e.nameValidator.test(r)) throw new Error("Invalid parameter name '" + r + "' in pattern '" + t + "'");
                        if (S(o._params, Ht("id", r))) throw new Error("Duplicate parameter name '" + r + "' in pattern '" + t + "'")
                    }, v = function (e, n) {
                        var i = e[2] || e[3],
                            a = n ? e[4] : e[4] || ("*" === e[1] ? "[\\s\\S]*" : null);
                        return {
                            id: i,
                            regexp: a,
                            cfg: o.config.params[i],
                            segment: t.substring(p, e.index),
                            type: a ? r.type(a) || function (t) {
                                return ye(r.type(n ? "query" : "path"), {
                                    pattern: new RegExp(t, o.config.caseInsensitive ? "i" : void 0)
                                })
                            }(a) : null
                        }
                    };
                    (a = c.exec(t)) && (u = v(a, !1), !(u.segment.indexOf("?") >= 0));) d(u.id), this._params.push(n.fromPath(u.id, u.type, this.config.paramMap(u.cfg, !1))), this._segments.push(u.segment), h.push([u.segment, P(this._params)]), p = c.lastIndex;
                s = t.substring(p);
                var y = s.indexOf("?");
                if (y >= 0) {
                    var g = s.substring(y);
                    if (s = s.substring(0, y), g.length > 0)
                        for (p = 0; a = l.exec(g);) u = v(a, !0), d(u.id), this._params.push(n.fromSearch(u.id, u.type, this.config.paramMap(u.cfg, !0))), p = c.lastIndex
                }
                this._segments.push(s), this._compiled = h.map(function (t) {
                    return it.apply(null, t)
                }).concat(it(s))
            }
            return e.prototype.append = function (t) {
                return this._children.push(t), t._cache = {
                    path: this._cache.path.concat(t),
                    parent: this,
                    pattern: null
                }, t
            }, e.prototype.isRoot = function () {
                return this._cache.path[0] === this
            }, e.prototype.toString = function () {
                return this.pattern
            }, e.prototype.exec = function (t, e, r, n) {
                var i = this;
                void 0 === e && (e = {}), void 0 === n && (n = {});
                var o = Or(this._cache, "pattern", function () {
                    return new RegExp(["^", Oe(i._cache.path.map(At("_compiled"))).join(""), !1 === i.config.strict ? "/?" : "", "$"].join(""), i.config.caseInsensitive ? "i" : void 0)
                }).exec(t);
                if (!o) return null;
                var a = this.parameters(),
                    u = a.filter(function (t) {
                        return !t.isSearch()
                    }),
                    s = a.filter(function (t) {
                        return t.isSearch()
                    }),
                    c = this._cache.path.map(function (t) {
                        return t._segments.length - 1
                    }).reduce(function (t, e) {
                        return t + e
                    }),
                    f = {};
                if (c !== o.length - 1) throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
                for (var l = 0; l < c; l++) {
                    for (var p = u[l], h = o[l + 1], d = 0; d < p.replace.length; d++) p.replace[d].from === h && (h = p.replace[d].to);
                    h && !0 === p.array && (h = function (t) {
                        var e = function (t) {
                                return t.split("").reverse().join("")
                            },
                            r = function (t) {
                                return t.replace(/\\-/g, "-")
                            };
                        return b(b(e(t).split(/-(?!\\)/), e), r).reverse()
                    }(h)), Qt(h) && (h = p.type.decode(h)), f[p.id] = p.value(h)
                }
                return s.forEach(function (t) {
                    for (var r = e[t.id], n = 0; n < t.replace.length; n++) t.replace[n].from === r && (r = t.replace[n].to);
                    Qt(r) && (r = t.type.decode(r)), f[t.id] = t.value(r)
                }), r && (f["#"] = r), f
            }, e.prototype.parameters = function (t) {
                return void 0 === t && (t = {}), !1 === t.inherit ? this._params : Oe(this._cache.path.map(function (t) {
                    return t._params
                }))
            }, e.prototype.parameter = function (t, e) {
                var r = this;
                void 0 === e && (e = {});
                var n = this._cache.parent;
                return function () {
                    for (var e = 0, n = r._params; e < n.length; e++) {
                        var i = n[e];
                        if (i.id === t) return i
                    }
                }() || !1 !== e.inherit && n && n.parameter(t, e) || null
            }, e.prototype.validates = function (t) {
                var e = function (t, e) {
                    return !t || t.validates(e)
                };
                return t = t || {}, this.parameters().filter(function (e) {
                    return t.hasOwnProperty(e.id)
                }).map(function (r) {
                    return e(r, t[r.id])
                }).reduce(Ee, !0)
            }, e.prototype.format = function (t) {
                function r(e) {
                    var r = e.value(t[e.id]),
                        n = e.validates(r),
                        i = e.isDefaultValue(r);
                    return {
                        param: e,
                        value: r,
                        isValid: n,
                        isDefaultValue: i,
                        squash: !!i && e.squash,
                        encoded: e.type.encode(r)
                    }
                }
                void 0 === t && (t = {});
                var n = this._cache.path,
                    i = n.map(e.pathSegmentsAndParams).reduce(Te, []).map(function (t) {
                        return te(t) ? t : r(t)
                    }),
                    o = n.map(e.queryParams).reduce(Te, []).map(r),
                    a = function (t) {
                        return !1 === t.isValid
                    };
                if (i.concat(o).filter(a).length) return null;
                var u = i.reduce(function (t, r) {
                        if (te(r)) return t + r;
                        var n = r.squash,
                            i = r.encoded,
                            o = r.param;
                        return !0 === n ? t.match(/\/$/) ? t.slice(0, -1) : t : te(n) ? t + n : !1 !== n ? t : null == i ? t : re(i) ? t + b(i, e.encodeDashes).join("-") : o.raw ? t + i : t + encodeURIComponent(i)
                    }, ""),
                    s = o.map(function (t) {
                        var e = t.param,
                            r = t.squash,
                            n = t.encoded,
                            i = t.isDefaultValue;
                        if (!(null == n || i && !1 !== r) && (re(n) || (n = [n]), 0 !== n.length)) return e.raw || (n = b(n, encodeURIComponent)), n.map(function (t) {
                            return e.id + "=" + t
                        })
                    }).filter(f).reduce(Te, []).join("&");
                return u + (s ? "?" + s : "") + (t["#"] ? "#" + t["#"] : "")
            }, e.encodeDashes = function (t) {
                return encodeURIComponent(t).replace(/-/g, function (t) {
                    return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
                })
            }, e.pathSegmentsAndParams = function (e) {
                return C(e._segments, e._params.filter(function (e) {
                    return e.location === t.DefType.PATH
                }).concat(void 0)).reduce(Te, []).filter(function (t) {
                    return "" !== t && Qt(t)
                })
            }, e.queryParams = function (e) {
                return e._params.filter(function (e) {
                    return e.location === t.DefType.SEARCH
                })
            }, e.compare = function (t, r) {
                var n, i, o = function (t) {
                        return t._cache.segments = t._cache.segments || t._cache.path.map(e.pathSegmentsAndParams).reduce(Te, []).reduce(Y, []).map(function (t) {
                            return te(t) ? xr(t) : t
                        }).reduce(Te, [])
                    },
                    a = function (t) {
                        return t._cache.weights = t._cache.weights || o(t).map(function (t) {
                            return "/" === t ? 1 : te(t) ? 2 : t instanceof rr ? 3 : void 0
                        })
                    },
                    u = C(a(t), a(r));
                for (i = 0; i < u.length; i++)
                    if (0 !== (n = u[i][0] - u[i][1])) return n;
                return 0
            }, e.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/, e
        }(),
        Ir = function () {
            function e() {
                var e = this;
                this.paramTypes = new wr, this._isCaseInsensitive = !1, this._isStrictMode = !0, this._defaultSquashPolicy = !1, this._getConfig = function (t) {
                    return ve({
                        strict: e._isStrictMode,
                        caseInsensitive: e._isCaseInsensitive
                    }, t)
                }, this.paramFactory = {
                    fromConfig: function (r, n, i) {
                        return new rr(r, n, i, t.DefType.CONFIG, e)
                    },
                    fromPath: function (r, n, i) {
                        return new rr(r, n, i, t.DefType.PATH, e)
                    },
                    fromSearch: function (r, n, i) {
                        return new rr(r, n, i, t.DefType.SEARCH, e)
                    }
                }, ve(this, {
                    UrlMatcher: jr,
                    Param: rr
                })
            }
            return e.prototype.caseInsensitive = function (t) {
                return this._isCaseInsensitive = Qt(t) ? t : this._isCaseInsensitive
            }, e.prototype.strictMode = function (t) {
                return this._isStrictMode = Qt(t) ? t : this._isStrictMode
            }, e.prototype.defaultSquashPolicy = function (t) {
                if (Qt(t) && !0 !== t && !1 !== t && !te(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
                return this._defaultSquashPolicy = Qt(t) ? t : this._defaultSquashPolicy
            }, e.prototype.compile = function (t, e) {
                return new jr(t, this.paramTypes, this.paramFactory, this._getConfig(e))
            }, e.prototype.isMatcher = function (t) {
                if (!ee(t)) return !1;
                var e = !0;
                return de(jr.prototype, function (r, n) {
                    Zt(r) && (e = e && Qt(t[n]) && Zt(t[n]))
                }), e
            }, e.prototype.type = function (t, e, r) {
                var n = this.paramTypes.type(t, e, r);
                return Qt(e) ? this : n
            }, e.prototype.$get = function () {
                return this.paramTypes.enqueue = !1, this.paramTypes._flushTypeQueue(), this
            }, e.prototype.dispose = function () {
                this.paramTypes.dispose()
            }, e
        }(),
        Vr = function () {
            function t(t) {
                this.router = t
            }
            return t.prototype.compile = function (t) {
                return this.router.urlMatcherFactory.compile(t)
            }, t.prototype.create = function (t, e) {
                var r = this,
                    n = s([
                        [te, function (t) {
                            return n(r.compile(t))
                        }],
                        [Ut(jr), function (t) {
                            return r.fromUrlMatcher(t, e)
                        }],
                        [oe, function (t) {
                            return r.fromState(t, r.router)
                        }],
                        [Ut(RegExp), function (t) {
                            return r.fromRegExp(t, e)
                        }],
                        [Zt, function (t) {
                            return new Ar(t, e)
                        }]
                    ]),
                    i = n(t);
                if (!i) throw new Error("invalid 'what' in when()");
                return i
            }, t.prototype.fromUrlMatcher = function (t, e) {
                function r(e) {
                    var r = t.exec(e.path, e.search, e.hash);
                    return t.validates(r) && r
                }

                function n(e) {
                    var r = t.parameters().filter(function (t) {
                        return t.isOptional
                    });
                    return r.length ? r.filter(function (t) {
                        return e[t.id]
                    }).length / r.length : 1e-6
                }
                var i = e;
                te(e) && (e = this.router.urlMatcherFactory.compile(e)), Ut(jr)(e) && (i = function (t) {
                    return e.format(t)
                });
                var o = {
                    urlMatcher: t,
                    matchPriority: n,
                    type: "URLMATCHER"
                };
                return ve(new Ar(r, i), o)
            }, t.prototype.fromState = function (t, e) {
                var r = function (r) {
                        var n = e.stateService,
                            i = e.globals;
                        n.href(t, r) !== n.href(i.current, i.params) && n.transitionTo(t, r, {
                            inherit: !0,
                            source: "url"
                        })
                    },
                    n = {
                        state: t,
                        type: "STATE"
                    };
                return ve(this.fromUrlMatcher(t.url, r), n)
            }, t.prototype.fromRegExp = function (t, e) {
                if (t.global || t.sticky) throw new Error("Rule RegExp must not be global or sticky");
                var r = function (t) {
                        return e.replace(/\$(\$|\d{1,2})/, function (e, r) {
                            return t["$" === r ? 0 : Number(r)]
                        })
                    },
                    n = te(e) ? r : e,
                    i = function (e) {
                        return t.exec(e.path)
                    },
                    o = {
                        regexp: t,
                        type: "REGEXP"
                    };
                return ve(new Ar(i, n), o)
            }, t.isUrlRule = function (t) {
                return t && ["type", "match", "handler"].every(function (e) {
                    return Qt(t[e])
                })
            }, t
        }(),
        Ar = function () {
            function t(t, e) {
                var r = this;
                this.match = t, this.type = "RAW", this.matchPriority = function (t) {
                    return 0 - r.$id
                }, this.handler = e || f
            }
            return t
        }(),
        Hr = At("urlMatcher");
    _r = He(Ae(i(At("priority"), function (t) {
        return -t
    })), Ae(i(At("type"), function (t) {
        return {
            STATE: 4,
            URLMATCHER: 4,
            REGEXP: 3,
            RAW: 2,
            OTHER: 1
        } [t]
    })), function (t, e) {
        return Hr(t) && Hr(e) ? jr.compare(Hr(t), Hr(e)) : 0
    }, Ae(At("$id"), ge(["REGEXP", "RAW", "OTHER"])));
    var qr = function () {
            function t(e) {
                this._sortFn = _r, this._rules = [], this.interceptDeferred = !1, this._id = 0, this._sorted = !1, this._router = e, this.urlRuleFactory = new Vr(e), p(Mt(t.prototype), this, Mt(this))
            }
            return t.prototype.dispose = function () {
                this.listen(!1), this._rules = [], delete this._otherwiseFn
            }, t.prototype.sort = function (t) {
                this._rules.sort(this._sortFn = t || this._sortFn), this._sorted = !0
            }, t.prototype.ensureSorted = function () {
                this._sorted || this.sort()
            }, t.prototype.match = function (t) {
                var e = this;
                this.ensureSorted(), t = ve({
                    path: "",
                    search: {},
                    hash: ""
                }, t);
                var r = this.rules();
                this._otherwiseFn && r.push(this._otherwiseFn);
                for (var n, i = 0; i < r.length && (!n || 0 === this._sortFn(r[i], n.rule)); i++) {
                    var o = function (r) {
                        var n = r.match(t, e._router);
                        return n && {
                            match: n,
                            rule: r,
                            weight: r.matchPriority(n)
                        }
                    }(r[i]);
                    n = !n || o && o.weight > n.weight ? o : n
                }
                return n
            }, t.prototype.sync = function (t) {
                if (!t || !t.defaultPrevented) {
                    var e = this._router,
                        r = e.urlService,
                        n = e.stateService,
                        i = {
                            path: r.path(),
                            search: r.search(),
                            hash: r.hash()
                        },
                        o = this.match(i);
                    s([
                        [te, function (t) {
                            return r.url(t, !0)
                        }],
                        [Je.isDef, function (t) {
                            return n.go(t.state, t.params, t.options)
                        }],
                        [Ut(Je), function (t) {
                            return n.go(t.state(), t.params(), t.options())
                        }]
                    ])(o && o.rule.handler(o.match, i, e))
                }
            }, t.prototype.listen = function (t) {
                var e = this;
                if (!1 !== t) return this._stopFn = this._stopFn || this._router.urlService.onChange(function (t) {
                    return e.sync(t)
                });
                this._stopFn && this._stopFn(), delete this._stopFn
            }, t.prototype.update = function (t) {
                var e = this._router.locationService;
                if (t) return void(this.location = e.path());
                e.path() !== this.location && e.url(this.location, !0)
            }, t.prototype.push = function (t, e, r) {
                var n = r && !!r.replace;
                this._router.urlService.url(t.format(e || {}), n)
            }, t.prototype.href = function (t, e, r) {
                var n = t.format(e);
                if (null == n) return null;
                r = r || {
                    absolute: !1
                };
                var i = this._router.urlService.config,
                    o = i.html5Mode();
                if (o || null === n || (n = "#" + i.hashPrefix() + n), n = ot(n, o, r.absolute, i.baseHref()), !r.absolute || !n) return n;
                var a = !o && n ? "/" : "",
                    u = i.port();
                return u = 80 === u || 443 === u ? "" : ":" + u, [i.protocol(), "://", i.host(), u, a, n].join("")
            }, t.prototype.rule = function (t) {
                var e = this;
                if (!Vr.isUrlRule(t)) throw new Error("invalid rule");
                return t.$id = this._id++, t.priority = t.priority || 0, this._rules.push(t), this._sorted = !1,
                    function () {
                        return e.removeRule(t)
                    }
            }, t.prototype.removeRule = function (t) {
                we(this._rules, t)
            }, t.prototype.rules = function () {
                return this.ensureSorted(), this._rules.slice()
            }, t.prototype.otherwise = function (t) {
                var e = at(t);
                this._otherwiseFn = this.urlRuleFactory.create(Mt(!0), e), this._sorted = !1
            }, t.prototype.initial = function (t) {
                var e = at(t),
                    r = function (t, e) {
                        return 0 === e.globals.transitionHistory.size() && !!/^\/?$/.exec(t.path)
                    };
                this.rule(this.urlRuleFactory.create(r, e))
            }, t.prototype.when = function (t, e, r) {
                var n = this.urlRuleFactory.create(t, e);
                return Qt(r && r.priority) && (n.priority = r.priority), this.rule(n), n
            }, t.prototype.deferIntercept = function (t) {
                void 0 === t && (t = !0), this.interceptDeferred = t
            }, t
        }(),
        Dr = function () {
            function t() {
                var t = this;
                this._uiViews = [], this._viewConfigs = [], this._viewConfigFactories = {}, this._pluginapi = {
                    _rootViewContext: this._rootViewContext.bind(this),
                    _viewConfigFactory: this._viewConfigFactory.bind(this),
                    _registeredUIViews: function () {
                        return t._uiViews
                    },
                    _activeViewConfigs: function () {
                        return t._viewConfigs
                    }
                }
            }
            return t.prototype._rootViewContext = function (t) {
                return this._rootContext = t || this._rootContext
            }, t.prototype._viewConfigFactory = function (t, e) {
                this._viewConfigFactories[t] = e
            }, t.prototype.createViewConfig = function (t, e) {
                var r = this._viewConfigFactories[e.$type];
                if (!r) throw new Error("ViewService: No view config factory registered for type " + e.$type);
                var n = r(t, e);
                return re(n) ? n : [n]
            }, t.prototype.deactivateViewConfig = function (t) {
                ze.traceViewServiceEvent("<- Removing", t), we(this._viewConfigs, t)
            }, t.prototype.activateViewConfig = function (t) {
                ze.traceViewServiceEvent("-> Registering", t), this._viewConfigs.push(t)
            }, t.prototype.sync = function () {
                function e(t) {
                    var e = function (t) {
                        return t && t.parent ? e(t.parent) + 1 : 1
                    };
                    return 1e4 * t.fqn.split(".").length + e(t.creationContext)
                }

                function n(t) {
                    for (var e = t.viewDecl.$context, r = 0; ++r && e.parent;) e = e.parent;
                    return r
                }
                var i = this,
                    o = this._uiViews.map(function (t) {
                        return [t.fqn, t]
                    }).reduce(T, {}),
                    a = r(function (t, e, r, n) {
                        return e * (t(r) - t(n))
                    }),
                    u = function (e) {
                        var r = i._viewConfigs.filter(t.matches(o, e));
                        return r.length > 1 && r.sort(a(n, -1)), [e, r[0]]
                    },
                    s = function (t) {
                        var e = t[0],
                            r = t[1]; - 1 !== i._uiViews.indexOf(e) && e.configUpdated(r)
                    },
                    c = this._uiViews.sort(a(e, 1)).map(u);
                ze.traceViewSync(c), c.forEach(s)
            }, t.prototype.registerUIView = function (t) {
                ze.traceViewServiceUIViewEvent("-> Registering", t);
                var e = this._uiViews,
                    r = function (e) {
                        return e.fqn === t.fqn && e.$type === t.$type
                    };
                return e.filter(r).length && ze.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", t), e.push(t), this.sync(),
                    function () {
                        if (-1 === e.indexOf(t)) return void ze.traceViewServiceUIViewEvent("Tried removing non-registered uiView", t);
                        ze.traceViewServiceUIViewEvent("<- Deregistering", t), we(e)(t)
                    }
            }, t.prototype.available = function () {
                return this._uiViews.map(At("fqn"))
            }, t.prototype.active = function () {
                return this._uiViews.filter(At("$config")).map(At("name"))
            }, t.normalizeUIViewTarget = function (t, e) {
                void 0 === e && (e = "");
                var r = e.split("@"),
                    n = r[0] || "$default",
                    i = te(r[1]) ? r[1] : "^",
                    o = /^(\^(?:\.\^)*)\.(.*$)/.exec(n);
                (o && (i = o[1], n = o[2]), "!" === n.charAt(0) && (n = n.substr(1), i = ""), /^(\^(?:\.\^)*)$/.exec(i)) ? i = i.split(".").reduce(function (t, e) {
                    return t.parent
                }, t).name: "." === i && (i = t.name);
                return {
                    uiViewName: n,
                    uiViewContextAnchor: i
                }
            }, t.matches = function (t, e) {
                return function (r) {
                    if (e.$type !== r.viewDecl.$type) return !1;
                    var n = r.viewDecl,
                        i = n.$uiViewName.split("."),
                        o = e.fqn.split(".");
                    if (!me(i, o.slice(0 - i.length))) return !1;
                    var a = 1 - i.length || void 0,
                        u = o.slice(0, a).join("."),
                        s = t[u].creationContext;
                    return n.$uiViewContextAnchor === (s && s.name)
                }
            }, t
        }(),
        Nr = function () {
            function t() {
                this.params = new $r, this.lastStartedTransitionId = -1, this.transitionHistory = new Ne([], 1), this.successfulTransitions = new Ne([], 1)
            }
            return t.prototype.dispose = function () {
                this.transitionHistory.clear(), this.successfulTransitions.clear(), this.transition = null
            }, t
        }(),
        Fr = function (t) {
            return t.reduce(function (t, e) {
                return t[e] = ue(e), t
            }, {
                dispose: l
            })
        },
        Ur = ["url", "path", "search", "hash", "onChange"],
        Lr = ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"],
        Mr = ["type", "caseInsensitive", "strictMode", "defaultSquashPolicy"],
        Br = ["sort", "when", "initial", "otherwise", "rules", "rule", "removeRule"],
        Gr = ["deferIntercept", "listen", "sync", "match"],
        Wr = function () {
            function t(t, e) {
                void 0 === e && (e = !0), this.router = t, this.rules = {}, this.config = {};
                var r = function () {
                    return t.locationService
                };
                p(r, this, r, Ur, e);
                var n = function () {
                    return t.locationConfig
                };
                p(n, this.config, n, Lr, e);
                var i = function () {
                    return t.urlMatcherFactory
                };
                p(i, this.config, i, Mr);
                var o = function () {
                    return t.urlRouter
                };
                p(o, this.rules, o, Br), p(o, this, o, Gr)
            }
            return t.prototype.url = function (t, e, r) {}, t.prototype.path = function () {}, t.prototype.search = function () {}, t.prototype.hash = function () {}, t.prototype.onChange = function (t) {}, t.prototype.parts = function () {
                return {
                    path: this.path(),
                    search: this.search(),
                    hash: this.hash()
                }
            }, t.prototype.dispose = function () {}, t.prototype.sync = function (t) {}, t.prototype.listen = function (t) {}, t.prototype.deferIntercept = function (t) {}, t.prototype.match = function (t) {}, t.locationServiceStub = Fr(Ur), t.locationConfigStub = Fr(Lr), t
        }(),
        zr = 0,
        Jr = function () {
            function t(t, e) {
                void 0 === t && (t = Wr.locationServiceStub), void 0 === e && (e = Wr.locationConfigStub), this.locationService = t, this.locationConfig = e, this.$id = zr++, this._disposed = !1, this._disposables = [], this.trace = ze, this.viewService = new Dr, this.transitionService = new bn(this), this.globals = new Nr, this.urlMatcherFactory = new Ir, this.urlRouter = new qr(this), this.stateRegistry = new kr(this), this.stateService = new Rn(this), this.urlService = new Wr(this), this._plugins = {}, this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()), this.globals.$current = this.stateRegistry.root(), this.globals.current = this.globals.$current.self, this.disposable(this.globals), this.disposable(this.stateService), this.disposable(this.stateRegistry), this.disposable(this.transitionService), this.disposable(this.urlRouter), this.disposable(t), this.disposable(e)
            }
            return t.prototype.disposable = function (t) {
                this._disposables.push(t)
            }, t.prototype.dispose = function (t) {
                var e = this;
                if (t && Zt(t.dispose)) return void t.dispose(this);
                this._disposed = !0, this._disposables.slice().forEach(function (t) {
                    try {
                        "function" == typeof t.dispose && t.dispose(e), we(e._disposables, t)
                    } catch (t) {}
                })
            }, t.prototype.plugin = function (t, e) {
                void 0 === e && (e = {});
                var r = new t(this, e);
                if (!r.name) throw new Error("Required property `name` missing on plugin: " + r);
                return this._disposables.push(r), this._plugins[r.name] = r
            }, t.prototype.getPlugin = function (t) {
                return t ? this._plugins[t] : Re(this._plugins)
            }, t
        }(),
        Qr = function (t) {
            return t.onCreate({}, ut)
        },
        Kr = function (t) {
            function e(e) {
                if (e) return e instanceof Je ? e : te(e) ? n.target(e, t.params(), t.options()) : e.state || e.params ? n.target(e.state || t.to(), e.params || t.params(), t.options()) : void 0
            }
            var r = t.to().redirectTo;
            if (r) {
                var n = t.router.stateService;
                return Zt(r) ? se.$q.when(r(t)).then(e) : e(r)
            }
        },
        Yr = function (t) {
            return t.onStart({
                to: function (t) {
                    return !!t.redirectTo
                }
            }, Kr)
        },
        Zr = st("onExit"),
        Xr = function (t) {
            return t.onExit({
                exiting: function (t) {
                    return !!t.onExit
                }
            }, Zr)
        },
        tn = st("onRetain"),
        en = function (t) {
            return t.onRetain({
                retained: function (t) {
                    return !!t.onRetain
                }
            }, tn)
        },
        rn = st("onEnter"),
        nn = function (t) {
            return t.onEnter({
                entering: function (t) {
                    return !!t.onEnter
                }
            }, rn)
        },
        on = function (t) {
            return new pr(t.treeChanges().to).resolvePath("EAGER", t).then(l)
        },
        an = function (t) {
            return t.onStart({}, on, {
                priority: 1e3
            })
        },
        un = function (t, e) {
            return new pr(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY", t).then(l)
        },
        sn = function (t) {
            return t.onEnter({
                entering: Mt(!0)
            }, un, {
                priority: 1e3
            })
        },
        cn = function (t) {
            var e = se.$q,
                r = t.views("entering");
            if (r.length) return e.all(r.map(function (t) {
                return e.when(t.load())
            })).then(l)
        },
        fn = function (t) {
            return t.onFinish({}, cn)
        },
        ln = function (t) {
            var e = t.views("entering"),
                r = t.views("exiting");
            if (e.length || r.length) {
                var n = t.router.viewService;
                r.forEach(function (t) {
                    return n.deactivateViewConfig(t)
                }), e.forEach(function (t) {
                    return n.activateViewConfig(t)
                }), n.sync()
            }
        },
        pn = function (t) {
            return t.onSuccess({}, ln)
        },
        hn = function (t) {
            var e = t.router.globals,
                r = function () {
                    e.successfulTransitions.enqueue(t), e.$current = t.$to(), e.current = e.$current.self, he(t.params(), e.params)
                },
                n = function () {
                    e.transition === t && (e.transition = null)
                };
            t.onSuccess({}, r, {
                priority: 1e4
            }), t.promise.then(n, n)
        },
        dn = function (t) {
            return t.onCreate({}, hn)
        },
        vn = function (t) {
            var e = t.options(),
                r = t.router.stateService,
                n = t.router.urlRouter;
            if ("url" !== e.source && e.location && r.$current.navigable) {
                var i = {
                    replace: "replace" === e.location
                };
                n.push(r.$current.navigable.url, r.params, i)
            }
            n.update(!0)
        },
        mn = function (t) {
            return t.onSuccess({}, vn, {
                priority: 9999
            })
        },
        yn = function (t) {
            function e() {
                if ("url" !== t.originalTransition().options().source) {
                    var e = t.targetState();
                    return r.stateService.target(e.identifier(), e.params(), e.options())
                }
                var n = r.urlService,
                    i = n.match(n.parts()),
                    o = i && i.rule;
                if (o && "STATE" === o.type) {
                    var a = o.state,
                        u = i.match;
                    return r.stateService.target(a, u, t.options())
                }
                r.urlService.sync()
            }
            var r = t.router,
                n = t.entering().filter(function (t) {
                    return !!t.$$state().lazyLoad
                }).map(function (e) {
                    return ct(t, e)
                });
            return se.$q.all(n).then(e)
        },
        gn = function (t) {
            return t.onBefore({
                entering: function (t) {
                    return !!t.lazyLoad
                }
            }, yn)
        },
        wn = function () {
            function t(t, e, r, n, i, o, a, u) {
                void 0 === i && (i = !1), void 0 === o && (o = Ke.HANDLE_RESULT), void 0 === a && (a = Ke.REJECT_ERROR), void 0 === u && (u = !1), this.name = t, this.hookPhase = e, this.hookOrder = r, this.criteriaMatchPath = n, this.reverseSort = i, this.getResultHandler = o, this.getErrorHandler = a, this.synchronous = u
            }
            return t
        }(),
        _n = function (t) {
            return t.onBefore({}, ft, {
                priority: -9999
            })
        },
        $n = function (t) {
            return t.onBefore({}, lt, {
                priority: -1e4
            })
        },
        Sn = {
            location: !0,
            relative: null,
            inherit: !1,
            notify: !0,
            reload: !1,
            custom: {},
            current: function () {
                return null
            },
            source: "unknown"
        },
        bn = function () {
            function e(t) {
                this._transitionCount = 0, this._eventTypes = [], this._registeredHooks = {}, this._criteriaPaths = {}, this._router = t, this.$view = t.viewService, this._deregisterHookFns = {}, this._pluginapi = p(Mt(this), {}, Mt(this), ["_definePathType", "_defineEvent", "_getPathTypes", "_getEvents", "getHooks"]), this._defineCorePaths(), this._defineCoreEvents(), this._registerCoreTransitionHooks()
            }
            return e.prototype.onCreate = function (t, e, r) {}, e.prototype.onBefore = function (t, e, r) {}, e.prototype.onStart = function (t, e, r) {}, e.prototype.onExit = function (t, e, r) {}, e.prototype.onRetain = function (t, e, r) {}, e.prototype.onEnter = function (t, e, r) {}, e.prototype.onFinish = function (t, e, r) {}, e.prototype.onSuccess = function (t, e, r) {}, e.prototype.onError = function (t, e, r) {}, e.prototype.dispose = function (t) {
                Re(this._registeredHooks).forEach(function (t) {
                    return t.forEach(function (e) {
                        e._deregistered = !0, we(t, e)
                    })
                })
            }, e.prototype.create = function (t, e) {
                return new vr(t, e, this._router)
            }, e.prototype._defineCoreEvents = function () {
                var e = t.TransitionHookPhase,
                    r = Ke,
                    n = this._criteriaPaths;
                this._defineEvent("onCreate", e.CREATE, 0, n.to, !1, r.LOG_REJECTED_RESULT, r.THROW_ERROR, !0), this._defineEvent("onBefore", e.BEFORE, 0, n.to), this._defineEvent("onStart", e.RUN, 0, n.to), this._defineEvent("onExit", e.RUN, 100, n.exiting, !0), this._defineEvent("onRetain", e.RUN, 200, n.retained), this._defineEvent("onEnter", e.RUN, 300, n.entering), this._defineEvent("onFinish", e.RUN, 400, n.to), this._defineEvent("onSuccess", e.SUCCESS, 0, n.to, !1, r.LOG_REJECTED_RESULT, r.LOG_ERROR, !0), this._defineEvent("onError", e.ERROR, 0, n.to, !1, r.LOG_REJECTED_RESULT, r.LOG_ERROR, !0)
            }, e.prototype._defineCorePaths = function () {
                var e = t.TransitionHookScope.STATE,
                    r = t.TransitionHookScope.TRANSITION;
                this._definePathType("to", r), this._definePathType("from", r), this._definePathType("exiting", e), this._definePathType("retained", e), this._definePathType("entering", e)
            }, e.prototype._defineEvent = function (t, e, r, n, i, o, a, u) {
                void 0 === i && (i = !1), void 0 === o && (o = Ke.HANDLE_RESULT), void 0 === a && (a = Ke.REJECT_ERROR), void 0 === u && (u = !1);
                var s = new wn(t, e, r, n, i, o, a, u);
                this._eventTypes.push(s), q(this, this, s)
            }, e.prototype._getEvents = function (t) {
                return (Qt(t) ? this._eventTypes.filter(function (e) {
                    return e.hookPhase === t
                }) : this._eventTypes.slice()).sort(function (t, e) {
                    var r = t.hookPhase - e.hookPhase;
                    return 0 === r ? t.hookOrder - e.hookOrder : r
                })
            }, e.prototype._definePathType = function (t, e) {
                this._criteriaPaths[t] = {
                    name: t,
                    scope: e
                }
            }, e.prototype._getPathTypes = function () {
                return this._criteriaPaths
            }, e.prototype.getHooks = function (t) {
                return this._registeredHooks[t]
            }, e.prototype._registerCoreTransitionHooks = function () {
                var t = this._deregisterHookFns;
                t.addCoreResolves = Qr(this), t.ignored = _n(this), t.invalid = $n(this), t.redirectTo = Yr(this), t.onExit = Xr(this), t.onRetain = en(this), t.onEnter = nn(this), t.eagerResolve = an(this), t.lazyResolve = sn(this), t.loadViews = fn(this), t.activateViews = pn(this), t.updateGlobals = dn(this), t.updateUrl = mn(this), t.lazyLoad = gn(this)
            }, e
        }(),
        Rn = function () {
            function e(t) {
                this.router = t, this.invalidCallbacks = [], this._defaultErrorHandler = function (t) {
                    t instanceof Error && t.stack ? (console.error(t), console.error(t.stack)) : t instanceof Ue ? (console.error(t.toString()), t.detail && t.detail.stack && console.error(t.detail.stack)) : console.error(t)
                };
                var r = ["current", "$current", "params", "transition"],
                    n = Object.keys(e.prototype).filter(Dt(ge(r)));
                p(Mt(e.prototype), this, Mt(this), n)
            }
            return Object.defineProperty(e.prototype, "transition", {
                get: function () {
                    return this.router.globals.transition
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "params", {
                get: function () {
                    return this.router.globals.params
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "current", {
                get: function () {
                    return this.router.globals.current
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "$current", {
                get: function () {
                    return this.router.globals.$current
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.defaultErrorHandler(l), this.invalidCallbacks = []
            }, e.prototype._handleInvalidTargetState = function (t, e) {
                function r() {
                    var t = s.dequeue();
                    return void 0 === t ? Ue.invalid(e.error()).toPromise() : se.$q.when(t(e, i, c)).then(f).then(function (t) {
                        return t || r()
                    })
                }
                var n = this,
                    i = ir.makeTargetState(t),
                    o = this.router.globals,
                    a = function () {
                        return o.transitionHistory.peekTail()
                    },
                    u = a(),
                    s = new Ne(this.invalidCallbacks.slice()),
                    c = new pr(t).injector(),
                    f = function (t) {
                        if (t instanceof Je) {
                            var e = t;
                            return e = n.target(e.identifier(), e.params(), e.options()), e.valid() ? a() !== u ? Ue.superseded().toPromise() : n.transitionTo(e.identifier(), e.params(), e.options()) : Ue.invalid(e.error()).toPromise()
                        }
                    };
                return r()
            }, e.prototype.onInvalid = function (t) {
                return this.invalidCallbacks.push(t),
                    function () {
                        we(this.invalidCallbacks)(t)
                    }.bind(this)
            }, e.prototype.reload = function (t) {
                return this.transitionTo(this.current, this.params, {
                    reload: !Qt(t) || t,
                    inherit: !1,
                    notify: !1
                })
            }, e.prototype.go = function (t, e, r) {
                var n = {
                        relative: this.$current,
                        inherit: !0
                    },
                    i = m(r, n, Sn);
                return this.transitionTo(t, e, i)
            }, e.prototype.target = function (t, e, r) {
                if (void 0 === r && (r = {}), ee(r.reload) && !r.reload.name) throw new Error("Invalid reload state object");
                var n = this.router.stateRegistry;
                if (r.reloadState = !0 === r.reload ? n.root() : n.matcher.find(r.reload, r.relative), r.reload && !r.reloadState) throw new Error("No such reload state '" + (te(r.reload) ? r.reload : r.reload.name) + "'");
                var i = n.matcher.find(t, r.relative);
                return new Je(t, i, e, r)
            }, e.prototype.getCurrentPath = function () {
                var t = this,
                    e = this.router.globals,
                    r = e.successfulTransitions.peekTail();
                return r ? r.treeChanges().to : function () {
                    return [new nr(t.router.stateRegistry.root())]
                }()
            }, e.prototype.transitionTo = function (e, r, n) {
                var i = this;
                void 0 === r && (r = {}), void 0 === n && (n = {});
                var o = this.router,
                    a = o.globals;
                n = m(n, Sn), n = ve(n, {
                    current: function () {
                        return a.transition
                    }
                });
                var u = this.target(e, r, n),
                    s = this.getCurrentPath();
                if (!u.exists()) return this._handleInvalidTargetState(s, u);
                if (!u.valid()) return De(u.error());
                var c = function (e) {
                        return function (r) {
                            if (r instanceof Ue) {
                                var n = o.globals.lastStartedTransitionId === e.$id;
                                if (r.type === t.RejectType.IGNORED) return n && o.urlRouter.update(), se.$q.when(a.current);
                                var u = r.detail;
                                if (r.type === t.RejectType.SUPERSEDED && r.redirected && u instanceof Je) {
                                    var s = e.redirect(u);
                                    return s.run().catch(c(s))
                                }
                                if (r.type === t.RejectType.ABORTED) return n && o.urlRouter.update(), se.$q.reject(r)
                            }
                            return i.defaultErrorHandler()(r), se.$q.reject(r)
                        }
                    },
                    f = this.router.transitionService.create(s, u),
                    l = f.run().catch(c(f));
                return qe(l), ve(l, {
                    transition: f
                })
            }, e.prototype.is = function (t, e, r) {
                r = m(r, {
                    relative: this.$current
                });
                var n = this.router.stateRegistry.matcher.find(t, r.relative);
                if (Qt(n)) {
                    if (this.$current !== n) return !1;
                    if (!e) return !0;
                    var i = n.parameters({
                        inherit: !0,
                        matchingKeys: e
                    });
                    return rr.equals(i, rr.values(i, e), this.params)
                }
            }, e.prototype.includes = function (t, e, r) {
                r = m(r, {
                    relative: this.$current
                });
                var n = te(t) && Bt.fromString(t);
                if (n) {
                    if (!n.matches(this.$current.name)) return !1;
                    t = this.$current.name
                }
                var i = this.router.stateRegistry.matcher.find(t, r.relative),
                    o = this.$current.includes;
                if (Qt(i)) {
                    if (!Qt(o[i.name])) return !1;
                    if (!e) return !0;
                    var a = i.parameters({
                        inherit: !0,
                        matchingKeys: e
                    });
                    return rr.equals(a, rr.values(a, e), this.params)
                }
            }, e.prototype.href = function (t, e, r) {
                r = m(r, {
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: this.$current
                }), e = e || {};
                var n = this.router.stateRegistry.matcher.find(t, r.relative);
                if (!Qt(n)) return null;
                r.inherit && (e = this.params.$inherit(e, this.$current, n));
                var i = n && r.lossy ? n.navigable : n;
                return i && void 0 !== i.url && null !== i.url ? this.router.urlRouter.href(i.url, e, {
                    absolute: r.absolute
                }) : null
            }, e.prototype.defaultErrorHandler = function (t) {
                return this._defaultErrorHandler = t || this._defaultErrorHandler
            }, e.prototype.get = function (t, e) {
                var r = this.router.stateRegistry;
                return 0 === arguments.length ? r.get() : r.get(t, e || this.$current)
            }, e.prototype.lazyLoad = function (t, e) {
                var r = this.get(t);
                if (!r || !r.lazyLoad) throw new Error("Can not lazy load " + t);
                var n = this.getCurrentPath(),
                    i = ir.makeTargetState(n);
                return e = e || this.router.transitionService.create(n, i), ct(e, r)
            }, e
        }(),
        En = {
            when: function (t) {
                return new Promise(function (e, r) {
                    return e(t)
                })
            },
            reject: function (t) {
                return new Promise(function (e, r) {
                    r(t)
                })
            },
            defer: function () {
                var t = {};
                return t.promise = new Promise(function (e, r) {
                    t.resolve = e, t.reject = r
                }), t
            },
            all: function (t) {
                if (re(t)) return Promise.all(t);
                if (ee(t)) {
                    var e = Object.keys(t).map(function (e) {
                        return t[e].then(function (t) {
                            return {
                                key: e,
                                val: t
                            }
                        })
                    });
                    return En.all(e).then(function (t) {
                        return t.reduce(function (t, e) {
                            return t[e.key] = e.val, t
                        }, {})
                    })
                }
            }
        },
        Cn = {},
        Tn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Pn = /([^\s,]+)/g,
        kn = {
            get: function (t) {
                return Cn[t]
            },
            has: function (t) {
                return null != kn.get(t)
            },
            invoke: function (t, e, r) {
                var n = ve({}, Cn, r || {}),
                    i = kn.annotate(t),
                    o = je(function (t) {
                        return n.hasOwnProperty(t)
                    }, function (t) {
                        return "DI can't find injectable: '" + t + "'"
                    }),
                    a = i.filter(o).map(function (t) {
                        return n[t]
                    });
                return Zt(t) ? t.apply(e, a) : t.slice(-1)[0].apply(e, a)
            },
            annotate: function (t) {
                if (!c(t)) throw new Error("Not an injectable function: " + t);
                if (t && t.$inject) return t.$inject;
                if (re(t)) return t.slice(0, -1);
                var e = t.toString().replace(Tn, "");
                return e.slice(e.indexOf("(") + 1, e.indexOf(")")).match(Pn) || []
            }
        },
        On = function (t) {
            return function (e) {
                if (!e) return ["", ""];
                var r = e.indexOf(t);
                return -1 === r ? [e, ""] : [e.substr(0, r), e.substr(r + 1)]
            }
        },
        xn = On("#"),
        jn = On("?"),
        In = On("="),
        Vn = function (t) {
            return t ? t.replace(/^#/, "") : ""
        },
        An = function (t, e) {
            var r = e[0],
                n = e[1];
            return t.hasOwnProperty(r) ? re(t[r]) ? t[r].push(n) : t[r] = [t[r], n] : t[r] = n, t
        },
        Hn = function (t) {
            return t.split("&").filter(f).map(In).reduce(An, {})
        },
        qn = function (t) {
            var e = t.path(),
                r = t.search(),
                n = t.hash(),
                i = Object.keys(r).map(function (t) {
                    var e = r[t];
                    return (re(e) ? e : [e]).map(function (e) {
                        return t + "=" + e
                    })
                }).reduce(Te, []).join("&");
            return e + (i ? "?" + i : "") + (n ? "#" + n : "")
        },
        Dn = function () {
            function t(t, e) {
                var r = this;
                this.fireAfterUpdate = e, this._listener = function (t) {
                    return r._listeners.forEach(function (e) {
                        return e(t)
                    })
                }, this._listeners = [], this.hash = function () {
                    return pt(r._get()).hash
                }, this.path = function () {
                    return pt(r._get()).path
                }, this.search = function () {
                    return Hn(pt(r._get()).search)
                }, this._location = window && window.location, this._history = window && window.history
            }
            return t.prototype.url = function (t, e) {
                if (void 0 === e && (e = !0), Qt(t) && t !== this._get() && (this._set(null, null, t, e), this.fireAfterUpdate)) {
                    var r = ve(new Event("locationchange"), {
                        url: t
                    });
                    this._listeners.forEach(function (t) {
                        return t(r)
                    })
                }
                return qn(this)
            }, t.prototype.onChange = function (t) {
                var e = this;
                return this._listeners.push(t),
                    function () {
                        return we(e._listeners, t)
                    }
            }, t.prototype.dispose = function (t) {
                $e(this._listeners)
            }, t
        }(),
        Nn = function () {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fn = function (t) {
            function e(e) {
                var r = t.call(this, e, !1) || this;
                return window.addEventListener("hashchange", r._listener, !1), r
            }
            return Nn(e, t), e.prototype._get = function () {
                return Vn(this._location.hash)
            }, e.prototype._set = function (t, e, r, n) {
                this._location.hash = r
            }, e.prototype.dispose = function (e) {
                t.prototype.dispose.call(this, e), window.removeEventListener("hashchange", this._listener)
            }, e
        }(Dn),
        Un = function () {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Ln = function (t) {
            function e(e) {
                return t.call(this, e, !0) || this
            }
            return Un(e, t), e.prototype._get = function () {
                return this._url
            }, e.prototype._set = function (t, e, r, n) {
                this._url = r
            }, e
        }(Dn),
        Mn = function () {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Bn = function (t) {
            function e(e) {
                var r = t.call(this, e, !0) || this;
                return r._config = e.urlService.config, window.addEventListener("popstate", r._listener, !1), r
            }
            return Mn(e, t), e.prototype._get = function () {
                var t = this._location,
                    e = t.pathname,
                    r = t.hash,
                    n = t.search;
                return n = jn(n)[1], r = xn(r)[1], e + (n ? "?" + n : "") + (r ? "$" + n : "")
            }, e.prototype._set = function (t, e, r, n) {
                var i = this,
                    o = i._config,
                    a = i._history,
                    u = o.baseHref() + r;
                n ? a.replaceState(t, e, u) : a.pushState(t, e, u)
            }, e.prototype.dispose = function (e) {
                t.prototype.dispose.call(this, e), window.removeEventListener("popstate", this._listener)
            }, e
        }(Dn),
        Gn = function () {
            function t() {
                var t = this;
                this._baseHref = "", this._port = 80, this._protocol = "http", this._host = "localhost", this._hashPrefix = "", this.port = function () {
                    return t._port
                }, this.protocol = function () {
                    return t._protocol
                }, this.host = function () {
                    return t._host
                }, this.baseHref = function () {
                    return t._baseHref
                }, this.html5Mode = function () {
                    return !1
                }, this.hashPrefix = function (e) {
                    return Qt(e) ? t._hashPrefix = e : t._hashPrefix
                }, this.dispose = l
            }
            return t
        }(),
        Wn = function () {
            function t(t, e) {
                void 0 === e && (e = !1), this._isHtml5 = e, this._baseHref = void 0, this._hashPrefix = ""
            }
            return t.prototype.port = function () {
                return location.port ? Number(location.port) : "https" === this.protocol() ? 443 : 80
            }, t.prototype.protocol = function () {
                return location.protocol.replace(/:/g, "")
            }, t.prototype.host = function () {
                return location.host
            }, t.prototype.html5Mode = function () {
                return this._isHtml5
            }, t.prototype.hashPrefix = function (t) {
                return Qt(t) ? this._hashPrefix = t : this._hashPrefix
            }, t.prototype.baseHref = function (t) {
                return Qt(t) ? this._baseHref = t : this._baseHref || this.applyDocumentBaseHref()
            }, t.prototype.applyDocumentBaseHref = function () {
                var t = document.getElementsByTagName("base");
                return this._baseHref = t.length ? t[0].href.substr(location.origin.length) : ""
            }, t.prototype.dispose = function () {}, t
        }(),
        zn = ht("vanilla.hashBangLocation", !1, Fn, Wn),
        Jn = ht("vanilla.pushStateLocation", !0, Bn, Wn),
        Qn = ht("vanilla.memoryLocation", !1, Ln, Gn),
        Kn = function () {
            function t() {}
            return t.prototype.dispose = function (t) {}, t
        }(),
        Yn = Object.freeze({
            fromJson: le,
            toJson: pe,
            copy: he,
            forEach: de,
            extend: ve,
            equals: me,
            identity: f,
            noop: l,
            createProxyFunctions: p,
            inherit: ye,
            inArray: ge,
            _inArray: h,
            removeFrom: we,
            _removeFrom: d,
            pushTo: _e,
            _pushTo: v,
            deregAll: $e,
            defaults: m,
            mergeR: Se,
            ancestors: y,
            pick: g,
            omit: w,
            pluck: _,
            filter: $,
            find: S,
            mapObj: be,
            map: b,
            values: Re,
            allTrueR: Ee,
            anyTrueR: Ce,
            unnestR: Te,
            flattenR: Pe,
            pushR: R,
            uniqR: ke,
            unnest: Oe,
            flatten: xe,
            assertPredicate: je,
            assertMap: Ie,
            assertFn: E,
            pairs: Ve,
            arrayTuples: C,
            applyPairs: T,
            tail: P,
            _extend: x,
            sortBy: Ae,
            composeSort: He,
            silenceUncaughtInPromise: qe,
            silentRejection: De,
            notImplemented: ue,
            services: se,
            Glob: Bt,
            curry: r,
            compose: n,
            pipe: i,
            prop: At,
            propEq: Ht,
            parse: qt,
            not: Dt,
            and: o,
            or: a,
            all: Nt,
            any: Ft,
            is: Ut,
            eq: Lt,
            val: Mt,
            invoke: u,
            pattern: s,
            isUndefined: Jt,
            isDefined: Qt,
            isNull: Kt,
            isNullOrUndefined: Yt,
            isFunction: Zt,
            isNumber: Xt,
            isString: te,
            isObject: ee,
            isArray: re,
            isDate: ne,
            isRegExp: ie,
            isState: oe,
            isInjectable: c,
            isPromise: ae,
            Queue: Ne,
            maxLength: B,
            padString: G,
            kebobString: W,
            functionToString: z,
            fnToString: J,
            stringify: Q,
            beforeAfterSubstr: gr,
            splitOnDelim: K,
            joinNeighborsR: Y,
            get Category() {
                return t.Category
            },
            Trace: We,
            trace: ze,
            get DefType() {
                return t.DefType
            },
            Param: rr,
            ParamTypes: wr,
            StateParams: $r,
            ParamType: Xe,
            PathNode: nr,
            PathUtils: ir,
            resolvePolicies: ur,
            defaultResolvePolicy: or,
            Resolvable: ar,
            NATIVE_INJECTOR_TOKEN: lr,
            ResolveContext: pr,
            resolvablesBuilder: nt,
            StateBuilder: Cr,
            StateObject: Gt,
            StateMatcher: Tr,
            StateQueueManager: Pr,
            StateRegistry: kr,
            StateService: Rn,
            TargetState: Je,
            get TransitionHookPhase() {
                return t.TransitionHookPhase
            },
            get TransitionHookScope() {
                return t.TransitionHookScope
            },
            HookBuilder: Ze,
            matchState: H,
            RegisteredHook: Ye,
            makeEvent: q,
            get RejectType() {
                return t.RejectType
            },
            Rejection: Ue,
            Transition: vr,
            TransitionHook: Ke,
            TransitionEventType: wn,
            defaultTransOpts: Sn,
            TransitionService: bn,
            UrlMatcher: jr,
            UrlMatcherFactory: Ir,
            UrlRouter: qr,
            UrlRuleFactory: Vr,
            BaseUrlRule: Ar,
            UrlService: Wr,
            ViewService: Dr,
            UIRouterGlobals: Nr,
            UIRouter: Jr,
            $q: En,
            $injector: kn,
            BaseLocationServices: Dn,
            HashLocationService: Fn,
            MemoryLocationService: Ln,
            PushStateLocationService: Bn,
            MemoryLocationConfig: Gn,
            BrowserLocationConfig: Wn,
            splitHash: xn,
            splitQuery: jn,
            splitEqual: In,
            trimHashVal: Vn,
            keyValsToObjectR: An,
            getParams: Hn,
            parseUrl: pt,
            buildUrl: qn,
            locationPluginFactory: ht,
            servicesPlugin: dt,
            hashLocationPlugin: zn,
            pushStateLocationPlugin: Jn,
            memoryLocationPlugin: Qn,
            UIRouterPluginBase: Kn
        }),
        Zn = function (t, e) {
            return t.reduce(function (t, r) {
                return t || Qt(e[r])
            }, !1)
        },
        Xn = 0,
        ti = function () {
            function t(t, e, r) {
                var n = this;
                this.path = t, this.viewDecl = e, this.factory = r, this.$id = Xn++, this.loaded = !1, this.getTemplate = function (t, e) {
                    return n.component ? n.factory.makeComponentTemplate(t, e, n.component, n.viewDecl.bindings) : n.template
                }
            }
            return t.prototype.load = function () {
                    var t = this,
                        e = se.$q,
                        r = new pr(this.path),
                        n = this.path.reduce(function (t, e) {
                            return ve(t, e.paramValues)
                        }, {}),
                        i = {
                            template: e.when(this.factory.fromConfig(this.viewDecl, n, r)),
                            controller: e.when(this.getController(r))
                        };
                    return e.all(i).then(function (e) {
                        return ze.traceViewServiceEvent("Loaded", t), t.controller = e.controller, ve(t, e.template), t
                    })
                },
                t.prototype.getController = function (t) {
                    var e = this.viewDecl.controllerProvider;
                    if (!c(e)) return this.viewDecl.controller;
                    var r = se.$injector.annotate(e),
                        n = re(e) ? P(e) : e;
                    return new ar("", n, r).get(t)
                }, t
        }(),
        ei = function () {
            function t() {
                var t = this;
                this._useHttp = Vt.version.minor < 3, this.$get = ["$http", "$templateCache", "$injector", function (e, r, n) {
                    return t.$templateRequest = n.has && n.has("$templateRequest") && n.get("$templateRequest"), t.$http = e, t.$templateCache = r, t
                }]
            }
            return t.prototype.useHttpService = function (t) {
                this._useHttp = t
            }, t.prototype.fromConfig = function (t, e, r) {
                var n = function (t) {
                        return se.$q.when(t).then(function (t) {
                            return {
                                template: t
                            }
                        })
                    },
                    i = function (t) {
                        return se.$q.when(t).then(function (t) {
                            return {
                                component: t
                            }
                        })
                    };
                return Qt(t.template) ? n(this.fromString(t.template, e)) : Qt(t.templateUrl) ? n(this.fromUrl(t.templateUrl, e)) : Qt(t.templateProvider) ? n(this.fromProvider(t.templateProvider, e, r)) : Qt(t.component) ? i(t.component) : Qt(t.componentProvider) ? i(this.fromComponentProvider(t.componentProvider, e, r)) : n("<ui-view></ui-view>")
            }, t.prototype.fromString = function (t, e) {
                return Zt(t) ? t(e) : t
            }, t.prototype.fromUrl = function (t, e) {
                return Zt(t) && (t = t(e)), null == t ? null : this._useHttp ? this.$http.get(t, {
                    cache: this.$templateCache,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function (t) {
                    return t.data
                }) : this.$templateRequest(t)
            }, t.prototype.fromProvider = function (t, e, r) {
                var n = se.$injector.annotate(t),
                    i = re(t) ? P(t) : t;
                return new ar("", i, n).get(r)
            }, t.prototype.fromComponentProvider = function (t, e, r) {
                var n = se.$injector.annotate(t),
                    i = re(t) ? P(t) : t;
                return new ar("", i, n).get(r)
            }, t.prototype.makeComponentTemplate = function (t, e, r, n) {
                n = n || {};
                var i = Vt.version.minor >= 3 ? "::" : "",
                    o = function (t) {
                        var e = W(t);
                        return /^(x|data)-/.exec(e) ? "x-" + e : e
                    },
                    a = function (r) {
                        var a = r.name,
                            u = r.type,
                            s = o(a);
                        if (t.attr(s) && !n[a]) return s + "='" + t.attr(s) + "'";
                        var c = n[a] || a;
                        if ("@" === u) return s + "='{{" + i + "$resolve." + c + "}}'";
                        if ("&" === u) {
                            var f = e.getResolvable(c),
                                l = f && f.data,
                                p = l && se.$injector.annotate(l) || [];
                            return s + "='$resolve." + c + (re(l) ? "[" + (l.length - 1) + "]" : "") + "(" + p.join(",") + ")'"
                        }
                        return s + "='" + i + "$resolve." + c + "'"
                    },
                    u = yt(r).map(a).join(" "),
                    s = o(r);
                return "<" + s + " " + u + "></" + s + ">"
            }, t
        }(),
        ri = function (t) {
            return ni(ee(t.bindToController) ? t.bindToController : t.scope)
        },
        ni = function (t) {
            return Object.keys(t || {}).map(function (e) {
                return [e, /^([=<@&])[?]?(.*)/.exec(t[e])]
            }).filter(function (t) {
                return Qt(t) && re(t[1])
            }).map(function (t) {
                return {
                    name: t[1][2] || t[0],
                    type: t[1][1]
                }
            })
        },
        ii = function () {
            function t(e, r) {
                this.stateRegistry = e, this.stateService = r, p(Mt(t.prototype), this, Mt(this))
            }
            return t.prototype.decorator = function (t, e) {
                return this.stateRegistry.decorator(t, e) || this
            }, t.prototype.state = function (t, e) {
                return ee(t) ? e = t : e.name = t, this.stateRegistry.register(e), this
            }, t.prototype.onInvalid = function (t) {
                return this.stateService.onInvalid(t)
            }, t
        }(),
        oi = function (t) {
            return function (e, r) {
                function n(t, e) {
                    var r = new pr(t.treeChanges(o)),
                        n = ve(gi(r), {
                            $state$: e,
                            $transition$: t
                        });
                    return se.$injector.invoke(i, this, n)
                }
                var i = e[t],
                    o = "onExit" === t ? "from" : "to";
                return i ? n : void 0
            }
        },
        ai = function () {
            function t(t) {
                this._urlListeners = [], this.$locationProvider = t;
                var e = Mt(t);
                p(e, this, e, ["hashPrefix"])
            }
            return t.prototype.dispose = function () {}, t.prototype.onChange = function (t) {
                var e = this;
                return this._urlListeners.push(t),
                    function () {
                        return we(e._urlListeners)(t)
                    }
            }, t.prototype.html5Mode = function () {
                var t = this.$locationProvider.html5Mode();
                return (t = ee(t) ? t.enabled : t) && this.$sniffer.history
            }, t.prototype.url = function (t, e, r) {
                return void 0 === e && (e = !1), t && this.$location.url(t), e && this.$location.replace(), r && this.$location.state(r), this.$location.url()
            }, t.prototype._runtimeServices = function (t, e, r, n) {
                var i = this;
                this.$location = e, this.$sniffer = r, t.$on("$locationChangeSuccess", function (t) {
                    return i._urlListeners.forEach(function (e) {
                        return e(t)
                    })
                });
                var o = Mt(e),
                    a = Mt(n);
                p(o, this, o, ["replace", "path", "search", "hash"]), p(o, this, o, ["port", "protocol", "host"]), p(a, this, a, ["baseHref"])
            }, t.monkeyPatchPathParameterType = function (t) {
                var e = t.urlMatcherFactory.type("path");
                e.encode = function (t) {
                    return null != t ? t.toString().replace(/(~|\/)/g, function (t) {
                        return {
                            "~": "~~",
                            "/": "~2F"
                        } [t]
                    }) : t
                }, e.decode = function (t) {
                    return null != t ? t.toString().replace(/(~~|~2F)/g, function (t) {
                        return {
                            "~~": "~",
                            "~2F": "/"
                        } [t]
                    }) : t
                }
            }, t
        }(),
        ui = function () {
            function t(t) {
                this._router = t, this._urlRouter = t.urlRouter
            }
            return t.prototype.$get = function () {
                var t = this._urlRouter;
                return t.update(!0), t.interceptDeferred || t.listen(), t
            }, t.prototype.rule = function (t) {
                var e = this;
                if (!Zt(t)) throw new Error("'rule' must be a function");
                var r = function () {
                        return t(se.$injector, e._router.locationService)
                    },
                    n = new Ar(r, f);
                return this._urlRouter.rule(n), this
            }, t.prototype.otherwise = function (t) {
                var e = this,
                    r = this._urlRouter;
                if (te(t)) r.otherwise(t);
                else {
                    if (!Zt(t)) throw new Error("'rule' must be a string or function");
                    r.otherwise(function () {
                        return t(se.$injector, e._router.locationService)
                    })
                }
                return this
            }, t.prototype.when = function (e, r) {
                return (re(r) || Zt(r)) && (r = t.injectableHandler(this._router, r)), this._urlRouter.when(e, r), this
            }, t.injectableHandler = function (t, e) {
                return function (r) {
                    return se.$injector.invoke(e, null, {
                        $match: r,
                        $stateParams: t.globals.params
                    })
                }
            }, t.prototype.deferIntercept = function (t) {
                this._urlRouter.deferIntercept(t)
            }, t
        }();
    Vt.module("ui.router.angular1", []);
    var si = Vt.module("ui.router.init", []),
        ci = Vt.module("ui.router.util", ["ng", "ui.router.init"]),
        fi = Vt.module("ui.router.router", ["ui.router.util"]),
        li = Vt.module("ui.router.state", ["ui.router.router", "ui.router.util", "ui.router.angular1"]),
        pi = Vt.module("ui.router", ["ui.router.init", "ui.router.state", "ui.router.angular1"]),
        hi = (Vt.module("ui.router.compat", ["ui.router"]), null);
    gt.$inject = ["$locationProvider"];
    var di = function (t) {
        return ["$uiRouterProvider", function (e) {
            var r = e.router[t];
            return r.$get = function () {
                return r
            }, r
        }]
    };
    wt.$inject = ["$injector", "$q", "$uiRouter"];
    var vi = function (t) {
            return t.urlRouterProvider = new ui(t)
        },
        mi = function () {
            return ve(hi.stateProvider, {
                $get: function () {
                    return hi.stateService
                }
            })
        };
    _t.$inject = ["$rootScope"], si.provider("$uiRouter", gt), fi.provider("$urlRouter", ["$uiRouterProvider", vi]), ci.provider("$urlService", di("urlService")), ci.provider("$urlMatcherFactory", ["$uiRouterProvider", function () {
        return hi.urlMatcherFactory
    }]), ci.provider("$templateFactory", function () {
        return new ei
    }), li.provider("$stateRegistry", di("stateRegistry")), li.provider("$uiRouterGlobals", di("globals")), li.provider("$transitions", di("transitionService")), li.provider("$state", ["$uiRouterProvider", mi]), li.factory("$stateParams", ["$uiRouter", function (t) {
        return t.globals.params
    }]), pi.factory("$view", function () {
        return hi.viewService
    }), pi.service("$trace", function () {
        return ze
    }), pi.run(_t), ci.run(["$urlMatcherFactory", function (t) {}]), li.run(["$state", function (t) {}]), fi.run(["$urlRouter", function (t) {}]), si.run(wt);
    var yi, gi = function (t) {
        return t.getTokens().filter(te).map(function (e) {
            var r = t.getResolvable(e);
            return [e, "NOWAIT" === t.getPolicy(r).async ? r.promise : r.data]
        }).reduce(T, {})
    };
    yi = ["$uiRouter", "$timeout", function (t, e) {
        var r = t.stateService;
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function (n, i, o, a) {
                function u() {
                    var t = h();
                    l && l(), f && (l = f.$$addStateInfo(t.uiState, t.uiStateParams)), null != t.href && o.$set(c.attr, t.href)
                }
                var s, c = Rt(i),
                    f = a[1] || a[0],
                    l = null,
                    p = {},
                    h = function () {
                        return bt(r, i, p)
                    },
                    d = $t(o.uiSref);
                p.uiState = d.state, p.uiStateOpts = o.uiSrefOpts ? n.$eval(o.uiSrefOpts) : {}, d.paramExpr && (n.$watch(d.paramExpr, function (t) {
                    p.uiStateParams = ve({}, t), u()
                }, !0), p.uiStateParams = ve({}, n.$eval(d.paramExpr))), u(), n.$on("$destroy", t.stateRegistry.onStatesChanged(u)), n.$on("$destroy", t.transitionService.onSuccess({}, u)), c.clickable && (s = Et(i, r, e, c, h), Tt(i, n, s, p.uiStateOpts))
            }
        }
    }];
    var wi;
    wi = ["$uiRouter", "$timeout", function (t, e) {
        var r = t.stateService;
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function (n, i, o, a) {
                function u() {
                    var t = d();
                    p && p(), f && (p = f.$$addStateInfo(t.uiState, t.uiStateParams)), null != t.href && o.$set(c.attr, t.href)
                }
                var s, c = Rt(i),
                    f = a[1] || a[0],
                    p = null,
                    h = {},
                    d = function () {
                        return bt(r, i, h)
                    },
                    v = ["uiState", "uiStateParams", "uiStateOpts"],
                    m = v.reduce(function (t, e) {
                        return t[e] = l, t
                    }, {});
                v.forEach(function (t) {
                    h[t] = o[t] ? n.$eval(o[t]) : null, o.$observe(t, function (e) {
                        m[t](), m[t] = n.$watch(e, function (e) {
                            h[t] = e, u()
                        }, !0)
                    })
                }), u(), n.$on("$destroy", t.stateRegistry.onStatesChanged(u)), n.$on("$destroy", t.transitionService.onSuccess({}, u)), c.clickable && (s = Et(i, r, e, c, d), Tt(i, n, s, h.uiStateOpts))
            }
        }
    }];
    var _i;
    _i = ["$state", "$stateParams", "$interpolate", "$uiRouter", function (t, e, r, n) {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", function (e, i, o) {
                function a(t) {
                    t.promise.then(s, l)
                }

                function u(e, r, n) {
                    var o = t.get(e, St(i)),
                        a = {
                            state: o || {
                                name: e
                            },
                            params: r,
                            activeClass: n
                        };
                    return h.push(a),
                        function () {
                            we(h)(a)
                        }
                }

                function s() {
                    var r = function (t) {
                            return t.split(/\s/).filter(f)
                        },
                        n = function (t) {
                            return t.map(function (t) {
                                return t.activeClass
                            }).map(r).reduce(Te, [])
                        },
                        o = n(h).concat(r(c)).reduce(ke, []),
                        a = n(h.filter(function (e) {
                            return t.includes(e.state.name, e.params)
                        })),
                        u = !!h.filter(function (e) {
                            return t.is(e.state.name, e.params)
                        }).length,
                        s = u ? r(c) : [],
                        l = a.concat(s).reduce(ke, []),
                        p = o.filter(function (t) {
                            return !ge(l, t)
                        });
                    e.$evalAsync(function () {
                        l.forEach(function (t) {
                            return i.addClass(t)
                        }), p.forEach(function (t) {
                            return i.removeClass(t)
                        })
                    })
                }
                var c, p, h = [];
                c = r(o.uiSrefActiveEq || "", !1)(e);
                try {
                    p = e.$eval(o.uiSrefActive)
                } catch (t) {}
                p = p || r(o.uiSrefActive || "", !1)(e), ee(p) && de(p, function (t, r) {
                    if (te(t)) {
                        var n = $t(t);
                        u(n.state, e.$eval(n.paramExpr), r)
                    }
                }), this.$$addStateInfo = function (t, e) {
                    if (!(ee(p) && h.length > 0)) {
                        var r = u(t, e, p);
                        return s(), r
                    }
                }, e.$on("$stateChangeSuccess", s), e.$on("$destroy", n.transitionService.onStart({}, a)), n.globals.transition && a(n.globals.transition), s()
            }]
        }
    }], Vt.module("ui.router.state").directive("uiSref", yi).directive("uiSrefActive", _i).directive("uiSrefActiveEq", _i).directive("uiState", wi), Pt.$inject = ["$state"], kt.$inject = ["$state"], Vt.module("ui.router.state").filter("isState", Pt).filter("includedByState", kt);
    var $i;
    $i = ["$view", "$animate", "$uiViewScroll", "$interpolate", "$q", function (t, e, r, n, i) {
        function o(t, r) {
            return {
                enter: function (t, r, n) {
                    Vt.version.minor > 2 ? e.enter(t, null, r).then(n) : e.enter(t, null, r, n)
                },
                leave: function (t, r) {
                    Vt.version.minor > 2 ? e.leave(t).then(r) : e.leave(t, r)
                }
            }
        }

        function a(t, e) {
            return t === e
        }
        var u = {
                $cfg: {
                    viewDecl: {
                        $context: t._pluginapi._rootViewContext()
                    }
                },
                $uiView: {}
            },
            s = {
                count: 0,
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                compile: function (e, c, f) {
                    return function (e, c, l) {
                        function p(t) {
                            (!t || t instanceof ti) && (a(S, t) || (ze.traceUIViewConfigUpdated(E, t && t.viewDecl && t.viewDecl.$context), S = t, d(t)))
                        }

                        function h() {
                            if (v && (ze.traceUIViewEvent("Removing (previous) el", v.data("$uiView")), v.remove(), v = null), y && (ze.traceUIViewEvent("Destroying scope", E), y.$destroy(), y = null), m) {
                                var t = m.data("$uiViewAnim");
                                ze.traceUIViewEvent("Animate out", t), $.leave(m, function () {
                                    t.$$animLeave.resolve(), v = null
                                }), v = m, m = null
                            }
                        }

                        function d(t) {
                            var n = e.$new(),
                                o = i.defer(),
                                a = i.defer(),
                                u = {
                                    $cfg: t,
                                    $uiView: E
                                },
                                s = {
                                    $animEnter: o.promise,
                                    $animLeave: a.promise,
                                    $$animLeave: a
                                };
                            n.$emit("$viewContentLoading", R);
                            var l = f(n, function (t) {
                                t.data("$uiViewAnim", s), t.data("$uiView", u), $.enter(t, c, function () {
                                    o.resolve(), y && y.$emit("$viewContentAnimationEnded"), (Qt(_) && !_ || e.$eval(_)) && r(t)
                                }), h()
                            });
                            m = l, y = n, y.$emit("$viewContentLoaded", t || S), y.$eval(w)
                        }
                        var v, m, y, g, w = l.onload || "",
                            _ = l.autoscroll,
                            $ = o(l, e),
                            S = void 0,
                            b = c.inheritedData("$uiView") || u,
                            R = n(l.uiView || l.name || "")(e) || "$default",
                            E = {
                                $type: "ng1",
                                id: s.count++,
                                name: R,
                                fqn: b.$uiView.fqn ? b.$uiView.fqn + "." + R : R,
                                config: null,
                                configUpdated: p,
                                get creationContext() {
                                    var t = qt("$cfg.viewDecl.$context")(b),
                                        e = qt("$uiView.creationContext")(b);
                                    return t || e
                                }
                            };
                        ze.traceUIViewEvent("Linking", E), c.data("$uiView", {
                            $uiView: E
                        }), d(), g = t.registerUIView(E), e.$on("$destroy", function () {
                            ze.traceUIViewEvent("Destroying/Unregistering", E), g()
                        })
                    }
                }
            };
        return s
    }], Ot.$inject = ["$compile", "$controller", "$transitions", "$view", "$q", "$timeout"];
    var Si = "function" == typeof Vt.module("ui.router").component,
        bi = 0;
    Vt.module("ui.router.state").directive("uiView", $i), Vt.module("ui.router.state").directive("uiView", Ot), Vt.module("ui.router.state").provider("$uiViewScroll", jt);
    t.default = "ui.router", t.core = Yn, t.watchDigests = _t, t.getLocals = gi, t.getNg1ViewConfigFactory = vt, t.ng1ViewsBuilder = mt, t.Ng1ViewConfig = ti, t.StateProvider = ii, t.UrlRouterProvider = ui, t.fromJson = le, t.toJson = pe, t.copy = he, t.forEach = de, t.extend = ve, t.equals = me, t.identity = f, t.noop = l, t.createProxyFunctions = p, t.inherit = ye, t.inArray = ge, t._inArray = h, t.removeFrom = we, t._removeFrom = d, t.pushTo = _e, t._pushTo = v, t.deregAll = $e, t.defaults = m, t.mergeR = Se, t.ancestors = y, t.pick = g, t.omit = w, t.pluck = _, t.filter = $, t.find = S, t.mapObj = be, t.map = b, t.values = Re, t.allTrueR = Ee, t.anyTrueR = Ce, t.unnestR = Te, t.flattenR = Pe, t.pushR = R, t.uniqR = ke, t.unnest = Oe, t.flatten = xe, t.assertPredicate = je, t.assertMap = Ie, t.assertFn = E, t.pairs = Ve, t.arrayTuples = C, t.applyPairs = T, t.tail = P, t._extend = x, t.sortBy = Ae, t.composeSort = He, t.silenceUncaughtInPromise = qe, t.silentRejection = De, t.notImplemented = ue, t.services = se, t.Glob = Bt, t.curry = r, t.compose = n, t.pipe = i, t.prop = At, t.propEq = Ht, t.parse = qt, t.not = Dt, t.and = o, t.or = a, t.all = Nt, t.any = Ft, t.is = Ut, t.eq = Lt, t.val = Mt, t.invoke = u, t.pattern = s, t.isUndefined = Jt, t.isDefined = Qt, t.isNull = Kt, t.isNullOrUndefined = Yt, t.isFunction = Zt, t.isNumber = Xt, t.isString = te, t.isObject = ee, t.isArray = re, t.isDate = ne, t.isRegExp = ie, t.isState = oe, t.isInjectable = c, t.isPromise = ae, t.Queue = Ne, t.maxLength = B, t.padString = G, t.kebobString = W, t.functionToString = z, t.fnToString = J, t.stringify = Q, t.beforeAfterSubstr = gr, t.splitOnDelim = K, t.joinNeighborsR = Y, t.Trace = We, t.trace = ze, t.Param = rr, t.ParamTypes = wr, t.StateParams = $r, t.ParamType = Xe, t.PathNode = nr, t.PathUtils = ir, t.resolvePolicies = ur, t.defaultResolvePolicy = or, t.Resolvable = ar, t.NATIVE_INJECTOR_TOKEN = lr, t.ResolveContext = pr, t.resolvablesBuilder = nt, t.StateBuilder = Cr, t.StateObject = Gt, t.StateMatcher = Tr, t.StateQueueManager = Pr, t.StateRegistry = kr, t.StateService = Rn, t.TargetState = Je, t.HookBuilder = Ze, t.matchState = H, t.RegisteredHook = Ye, t.makeEvent = q, t.Rejection = Ue, t.Transition = vr, t.TransitionHook = Ke, t.TransitionEventType = wn, t.defaultTransOpts = Sn, t.TransitionService = bn, t.UrlMatcher = jr, t.UrlMatcherFactory = Ir, t.UrlRouter = qr, t.UrlRuleFactory = Vr, t.BaseUrlRule = Ar, t.UrlService = Wr, t.ViewService = Dr, t.UIRouterGlobals = Nr, t.UIRouter = Jr, t.$q = En, t.$injector = kn, t.BaseLocationServices = Dn, t.HashLocationService = Fn, t.MemoryLocationService = Ln, t.PushStateLocationService = Bn, t.MemoryLocationConfig = Gn, t.BrowserLocationConfig = Wn, t.splitHash = xn, t.splitQuery = jn, t.splitEqual = In, t.trimHashVal = Vn, t.keyValsToObjectR = An, t.getParams = Hn, t.parseUrl = pt, t.buildUrl = qn, t.locationPluginFactory = ht, t.servicesPlugin = dt, t.hashLocationPlugin = zn, t.pushStateLocationPlugin = Jn, t.memoryLocationPlugin = Qn, t.UIRouterPluginBase = Kn, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=angular-ui-router.min.js.map

/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.5.2 - 2016-09-28
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
! function (a, b) {
    var c = b.isDefined,
        d = b.isUndefined,
        e = b.isNumber,
        f = b.isObject,
        g = b.isArray,
        h = b.isString,
        i = b.extend,
        j = b.toJson;
    b.module("LocalStorageModule", []).provider("localStorageService", function () {
        this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
            expiry: 30,
            path: "/",
            secure: !1
        }, this.defaultToCookie = !0, this.notify = {
            setItem: !0,
            removeItem: !1
        }, this.setPrefix = function (a) {
            return this.prefix = a, this
        }, this.setStorageType = function (a) {
            return this.storageType = a, this
        }, this.setDefaultToCookie = function (a) {
            return this.defaultToCookie = !!a, this
        }, this.setStorageCookie = function (a, b, c) {
            return this.cookie.expiry = a, this.cookie.path = b, this.cookie.secure = c, this
        }, this.setStorageCookieDomain = function (a) {
            return this.cookie.domain = a, this
        }, this.setNotify = function (a, b) {
            return this.notify = {
                setItem: a,
                removeItem: b
            }, this
        }, this.$get = ["$rootScope", "$window", "$document", "$parse", "$timeout", function (a, b, k, l, m) {
            function n(c) {
                if (c || (c = b.event), s.setItem && h(c.key) && w(c.key)) {
                    var d = v(c.key);
                    m(function () {
                        a.$broadcast("LocalStorageModule.notification.changed", {
                            key: d,
                            newvalue: c.newValue,
                            storageType: p.storageType
                        })
                    })
                }
            }
            var o, p = this,
                q = p.prefix,
                r = p.cookie,
                s = p.notify,
                t = p.storageType;
            k ? k[0] && (k = k[0]) : k = document, "." !== q.substr(-1) && (q = q ? q + "." : "");
            var u = function (a) {
                    return q + a
                },
                v = function (a) {
                    return a.replace(new RegExp("^" + q, "g"), "")
                },
                w = function (a) {
                    return 0 === a.indexOf(q)
                },
                x = function () {
                    try {
                        var c = t in b && null !== b[t],
                            d = u("__" + Math.round(1e7 * Math.random()));
                        return c && (o = b[t], o.setItem(d, ""), o.removeItem(d)), c
                    } catch (e) {
                        return p.defaultToCookie && (t = "cookie"), a.$broadcast("LocalStorageModule.notification.error", e.message), !1
                    }
                },
                y = x(),
                z = function (b, c, e) {
                    if (K(e), c = d(c) ? null : j(c), !y && p.defaultToCookie || "cookie" === p.storageType) return y || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), s.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
                        key: b,
                        newvalue: c,
                        storageType: "cookie"
                    }), F(b, c);
                    try {
                        o && o.setItem(u(b), c), s.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
                            key: b,
                            newvalue: c,
                            storageType: p.storageType
                        })
                    } catch (f) {
                        return a.$broadcast("LocalStorageModule.notification.error", f.message), F(b, c)
                    }
                    return !0
                },
                A = function (b, c) {
                    if (K(c), !y && p.defaultToCookie || "cookie" === p.storageType) return y || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), G(b);
                    var d = o ? o.getItem(u(b)) : null;
                    if (!d || "null" === d) return null;
                    try {
                        return JSON.parse(d)
                    } catch (e) {
                        return d
                    }
                },
                B = function () {
                    var b = 0;
                    arguments.length >= 1 && ("localStorage" === arguments[arguments.length - 1] || "sessionStorage" === arguments[arguments.length - 1]) && (b = 1, K(arguments[arguments.length - 1]));
                    var c, d;
                    for (c = 0; c < arguments.length - b; c++)
                        if (d = arguments[c], !y && p.defaultToCookie || "cookie" === p.storageType) y || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), s.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                            key: d,
                            storageType: "cookie"
                        }), H(d);
                        else try {
                            o.removeItem(u(d)), s.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                                key: d,
                                storageType: p.storageType
                            })
                        } catch (e) {
                            a.$broadcast("LocalStorageModule.notification.error", e.message), H(d)
                        }
                },
                C = function (b) {
                    if (K(b), !y) return a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), [];
                    var c = q.length,
                        d = [];
                    for (var e in o)
                        if (e.substr(0, c) === q) try {
                            d.push(e.substr(c))
                        } catch (f) {
                            return a.$broadcast("LocalStorageModule.notification.error", f.Description), []
                        }
                    return d
                },
                D = function (b, c) {
                    K(c);
                    var d = q ? new RegExp("^" + q) : new RegExp,
                        e = b ? new RegExp(b) : new RegExp;
                    if (!y && p.defaultToCookie || "cookie" === p.storageType) return y || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), I();
                    if (!y && !p.defaultToCookie) return !1;
                    var f = q.length;
                    for (var g in o)
                        if (d.test(g) && e.test(g.substr(f))) try {
                            B(g.substr(f))
                        } catch (h) {
                            return a.$broadcast("LocalStorageModule.notification.error", h.message), I()
                        }
                    return !0
                },
                E = function () {
                    try {
                        return b.navigator.cookieEnabled || "cookie" in k && (k.cookie.length > 0 || (k.cookie = "test").indexOf.call(k.cookie, "test") > -1)
                    } catch (c) {
                        return a.$broadcast("LocalStorageModule.notification.error", c.message), !1
                    }
                }(),
                F = function (b, c, h, i) {
                    if (d(c)) return !1;
                    if ((g(c) || f(c)) && (c = j(c)), !E) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
                    try {
                        var l = "",
                            m = new Date,
                            n = "";
                        if (null === c ? (m.setTime(m.getTime() + -864e5), l = "; expires=" + m.toGMTString(), c = "") : e(h) && 0 !== h ? (m.setTime(m.getTime() + 24 * h * 60 * 60 * 1e3), l = "; expires=" + m.toGMTString()) : 0 !== r.expiry && (m.setTime(m.getTime() + 24 * r.expiry * 60 * 60 * 1e3), l = "; expires=" + m.toGMTString()), b) {
                            var o = "; path=" + r.path;
                            r.domain && (n = "; domain=" + r.domain), "boolean" == typeof i ? i === !0 && (n += "; secure") : r.secure === !0 && (n += "; secure"), k.cookie = u(b) + "=" + encodeURIComponent(c) + l + o + n
                        }
                    } catch (p) {
                        return a.$broadcast("LocalStorageModule.notification.error", p.message), !1
                    }
                    return !0
                },
                G = function (b) {
                    if (!E) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
                    for (var c = k.cookie && k.cookie.split(";") || [], d = 0; d < c.length; d++) {
                        for (var e = c[d];
                            " " === e.charAt(0);) e = e.substring(1, e.length);
                        if (0 === e.indexOf(u(b) + "=")) {
                            var f = decodeURIComponent(e.substring(q.length + b.length + 1, e.length));
                            try {
                                var g = JSON.parse(f);
                                return "number" == typeof g ? f : g
                            } catch (h) {
                                return f
                            }
                        }
                    }
                    return null
                },
                H = function (a) {
                    F(a, null)
                },
                I = function () {
                    for (var a = null, b = q.length, c = k.cookie.split(";"), d = 0; d < c.length; d++) {
                        for (a = c[d];
                            " " === a.charAt(0);) a = a.substring(1, a.length);
                        var e = a.substring(b, a.indexOf("="));
                        H(e)
                    }
                },
                J = function () {
                    return t
                },
                K = function (a) {
                    return a && t !== a && (t = a, y = x()), y
                },
                L = function (a, b, d, e, g) {
                    e = e || b;
                    var h = A(e, g);
                    return null === h && c(d) ? h = d : f(h) && f(d) && (h = i(h, d)), l(b).assign(a, h), a.$watch(b, function (a) {
                        z(e, a, g)
                    }, f(a[b]))
                };
            y && (b.addEventListener ? (b.addEventListener("storage", n, !1), a.$on("$destroy", function () {
                b.removeEventListener("storage", n)
            })) : b.attachEvent && (b.attachEvent("onstorage", n), a.$on("$destroy", function () {
                b.detachEvent("onstorage", n)
            })));
            var M = function (a) {
                K(a);
                for (var c = 0, d = b[t], e = 0; e < d.length; e++) 0 === d.key(e).indexOf(q) && c++;
                return c
            };
            return {
                isSupported: y,
                getStorageType: J,
                setStorageType: K,
                set: z,
                add: z,
                get: A,
                keys: C,
                remove: B,
                clearAll: D,
                bind: L,
                deriveKey: u,
                underiveKey: v,
                length: M,
                defaultToCookie: this.defaultToCookie,
                cookie: {
                    isSupported: E,
                    set: F,
                    add: F,
                    get: G,
                    remove: H,
                    clearAll: I
                }
            }
        }]
    })
}(window, window.angular);
//# sourceMappingURL=angular-local-storage.min.js.map

// /**
//  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
//  *
//  * @codingstandard ftlabs-jsv2
//  * @copyright The Financial Times Limited [All Rights Reserved]
//  * @license MIT License (see LICENSE.txt)
//  */

// !function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();


! function (e, t) {
    "object" == typeof exports ? module.exports = t(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], t) : t(e.angular)
}(this, function (angular) {
    /**
     * AngularJS Google Maps Ver. 1.18.4
     *
     * The MIT License (MIT)
     * 
     * Copyright (c) 2014, 2015, 1016 Allen Kim
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    return angular.module("ngMap", []),
        function () {
            "use strict";
            var e, t = function (t, n, o, a, r, i, s, p, c) {
                e = i;
                var u = this,
                    l = r.startSymbol(),
                    g = r.endSymbol();
                u.mapOptions, u.mapEvents, u.eventListeners, u.addObject = function (e, t) {
                    if (u.map) {
                        u.map[e] = u.map[e] || {};
                        var n = Object.keys(u.map[e]).length;
                        u.map[e][t.id || n] = t, u.map instanceof google.maps.Map && ("infoWindows" != e && t.setMap && t.setMap && t.setMap(u.map), t.centered && t.position && u.map.setCenter(t.position), "markers" == e && u.objectChanged("markers"), "customMarkers" == e && u.objectChanged("customMarkers"))
                    }
                }, u.deleteObject = function (e, t) {
                    if (t.map) {
                        var n = t.map[e];
                        for (var o in n) n[o] === t && (google.maps.event.clearInstanceListeners(t), delete n[o]);
                        t.map && t.setMap && t.setMap(null), "markers" == e && u.objectChanged("markers"), "customMarkers" == e && u.objectChanged("customMarkers")
                    }
                }, u.observeAttrSetObj = function (t, n, o) {
                    if (n.noWatcher) return !1;
                    for (var a = e.getAttrsToObserve(t), r = 0; r < a.length; r++) {
                        var i = a[r];
                        n.$observe(i, s.observeAndSet(i, o))
                    }
                }, u.zoomToIncludeMarkers = function () {
                    if (null != u.map.markers && Object.keys(u.map.markers).length > 0 || null != u.map.customMarkers && Object.keys(u.map.customMarkers).length > 0) {
                        var e = new google.maps.LatLngBounds;
                        for (var t in u.map.markers) e.extend(u.map.markers[t].getPosition());
                        for (var n in u.map.customMarkers) e.extend(u.map.customMarkers[n].getPosition());
                        u.mapOptions.maximumZoom && (u.enableMaximumZoomCheck = !0), u.map.fitBounds(e)
                    }
                }, u.objectChanged = function (e) {
                    !u.map || "markers" != e && "customMarkers" != e || "auto" != u.map.zoomToIncludeMarkers || u.zoomToIncludeMarkers()
                }, u.initializeMap = function () {
                    var r = u.mapOptions,
                        i = u.mapEvents,
                        m = u.map;
                    if (u.map = p.getMapInstance(n[0]), s.setStyle(n[0]), m) {
                        var f = e.filter(o),
                            v = e.getOptions(f),
                            y = e.getControlOptions(f);
                        r = angular.extend(v, y);
                        for (var h in m) {
                            var b = m[h];
                            if ("object" == typeof b)
                                for (var M in b) u.addObject(h, b[M])
                        }
                        u.map.showInfoWindow = u.showInfoWindow, u.map.hideInfoWindow = u.hideInfoWindow
                    }
                    r.zoom = r.zoom && !isNaN(r.zoom) ? +r.zoom : 15;
                    var O = r.center,
                        w = new RegExp(c(l) + ".*" + c(g));
                    if (!r.center || "string" == typeof O && O.match(w)) r.center = new google.maps.LatLng(0, 0);
                    else if ("string" == typeof O && O.match(/^[0-9.-]*,[0-9.-]*$/)) {
                        var L = parseFloat(O.split(",")[0]),
                            k = parseFloat(O.split(",")[1]);
                        r.center = new google.maps.LatLng(L, k)
                    } else if (!(O instanceof google.maps.LatLng)) {
                        var $ = r.center;
                        delete r.center, s.getGeoLocation($, r.geoLocationOptions).then(function (e) {
                            u.map.setCenter(e);
                            var n = r.geoCallback;
                            n && a(n)(t)
                        }, function () {
                            r.geoFallbackCenter && u.map.setCenter(r.geoFallbackCenter)
                        })
                    }
                    u.map.setOptions(r);
                    for (var C in i) {
                        var j = i[C],
                            A = google.maps.event.addListener(u.map, C, j);
                        u.eventListeners[C] = A
                    }
                    u.observeAttrSetObj(d, o, u.map), u.singleInfoWindow = r.singleInfoWindow, google.maps.event.trigger(u.map, "resize"), google.maps.event.addListenerOnce(u.map, "idle", function () {
                        s.addMap(u), r.zoomToIncludeMarkers && u.zoomToIncludeMarkers(), t.map = u.map, t.$emit("mapInitialized", u.map), o.mapInitialized && a(o.mapInitialized)(t, {
                            map: u.map
                        })
                    }), r.zoomToIncludeMarkers && r.maximumZoom && google.maps.event.addListener(u.map, "zoom_changed", function () {
                        1 == u.enableMaximumZoomCheck && (u.enableMaximumZoomCheck = !1, google.maps.event.addListenerOnce(u.map, "bounds_changed", function () {
                            u.map.setZoom(Math.min(r.maximumZoom, u.map.getZoom()))
                        }))
                    })
                }, t.google = google;
                var d = e.orgAttributes(n),
                    m = e.filter(o),
                    f = e.getOptions(m, {
                        scope: t
                    }),
                    v = e.getControlOptions(m),
                    y = angular.extend(f, v),
                    h = e.getEvents(t, m);
                if (Object.keys(h).length && void 0, u.mapOptions = y, u.mapEvents = h, u.eventListeners = {}, f.lazyInit) {
                    if (o.id && 0 === o.id.indexOf(l, 0) && -1 !== o.id.indexOf(g, o.id.length - g.length)) var b = o.id.slice(2, -2),
                        M = a(b)(t);
                    else var M = o.id;
                    u.map = {
                        id: M
                    }, s.addMap(u)
                } else u.initializeMap();
                f.triggerResize && google.maps.event.trigger(u.map, "resize"), n.bind("$destroy", function () {
                    p.returnMapInstance(u.map), s.deleteMap(u)
                })
            };
            t.$inject = ["$scope", "$element", "$attrs", "$parse", "$interpolate", "Attr2MapOptions", "NgMap", "NgMapPool", "escapeRegexpFilter"], angular.module("ngMap").controller("__MapController", t)
        }(),
        function () {
            "use strict";
            var e, t = function (t, o, a, r) {
                    r = r[0] || r[1];
                    var i = e.orgAttributes(o),
                        s = e.filter(a),
                        p = e.getOptions(s, {
                            scope: t
                        }),
                        c = e.getEvents(t, s),
                        u = n(p, c);
                    r.addObject("bicyclingLayers", u), r.observeAttrSetObj(i, a, u), o.bind("$destroy", function () {
                        r.deleteObject("bicyclingLayers", u)
                    })
                },
                n = function (e, t) {
                    var n = new google.maps.BicyclingLayer(e);
                    for (var o in t) google.maps.event.addListener(n, o, t[o]);
                    return n
                },
                o = function (n) {
                    return e = n, {
                        restrict: "E",
                        require: ["?^map", "?^ngMap"],
                        link: t
                    }
                };
            o.$inject = ["Attr2MapOptions"], angular.module("ngMap").directive("bicyclingLayer", o)
        }(),
        function () {
            "use strict";
            var e, t, n = function (t, n, o, a, r) {
                    a = a[0] || a[1];
                    var i = e.filter(o),
                        s = e.getOptions(i, {
                            scope: t
                        }),
                        p = e.getEvents(t, i),
                        c = n[0].parentElement.removeChild(n[0]),
                        u = r();
                    angular.element(c).append(u);
                    for (var l in p) google.maps.event.addDomListener(c, l, p[l]);
                    a.addObject("customControls", c);
                    var g = s.position;
                    a.map.controls[google.maps.ControlPosition[g]].push(c), n.bind("$destroy", function () {
                        a.deleteObject("customControls", c)
                    })
                },
                o = function (o, a) {
                    return e = o, t = a, {
                        restrict: "E",
                        require: ["?^map", "?^ngMap"],
                        link: n,
                        transclude: !0
                    }
                };
            o.$inject = ["Attr2MapOptions", "NgMap"], angular.module("ngMap").directive("customControl", o)
        }(),
        function () {
            "use strict";
            var e, t, n, o, a = function (e) {
                    e = e || {}, this.el = document.createElement("div"), this.el.style.display = "inline-block", this.el.style.visibility = "hidden", this.visible = !0;
                    for (var t in e) this[t] = e[t]
                },
                r = function () {
                    a.prototype = new google.maps.OverlayView, a.prototype.setContent = function (e, t) {
                        this.el.innerHTML = e, this.el.style.position = "absolute", t && n(angular.element(this.el).contents())(t)
                    }, a.prototype.getDraggable = function () {
                        return this.draggable
                    }, a.prototype.setDraggable = function (e) {
                        this.draggable = e
                    }, a.prototype.getPosition = function () {
                        return this.position
                    }, a.prototype.setPosition = function (e) {
                        e && (this.position = e);
                        var n = this;
                        if (this.getProjection() && "function" == typeof this.position.lng) {
                            var o = function () {
                                if (n.getProjection()) {
                                    var e = n.getProjection().fromLatLngToDivPixel(n.position),
                                        t = Math.round(e.x - n.el.offsetWidth / 2),
                                        o = Math.round(e.y - n.el.offsetHeight - 10);
                                    n.el.style.left = t + "px", n.el.style.top = o + "px", n.el.style.visibility = "visible"
                                }
                            };
                            n.el.offsetWidth && n.el.offsetHeight ? o() : t(o, 300)
                        }
                    }, a.prototype.setZIndex = function (e) {
                        e && (this.zIndex = e), this.el.style.zIndex = this.zIndex
                    }, a.prototype.getVisible = function () {
                        return this.visible
                    }, a.prototype.setVisible = function (e) {
                        this.el.style.display = e ? "inline-block" : "none", this.visible = e
                    }, a.prototype.addClass = function (e) {
                        var t = this.el.className.trim().split(" "); - 1 == t.indexOf(e) && t.push(e), this.el.className = t.join(" ")
                    }, a.prototype.removeClass = function (e) {
                        var t = this.el.className.split(" "),
                            n = t.indexOf(e);
                        n > -1 && t.splice(n, 1), this.el.className = t.join(" ")
                    }, a.prototype.onAdd = function () {
                        this.getPanes().overlayMouseTarget.appendChild(this.el)
                    }, a.prototype.draw = function () {
                        this.setPosition(), this.setZIndex(this.zIndex), this.setVisible(this.visible)
                    }, a.prototype.onRemove = function () {
                        this.el.parentNode.removeChild(this.el)
                    }
                },
                i = function (n, r) {
                    return function (i, s, p, c) {
                        c = c[0] || c[1];
                        var u = e.orgAttributes(s),
                            l = e.filter(p),
                            g = e.getOptions(l, {
                                scope: i
                            }),
                            d = e.getEvents(i, l);
                        s[0].style.display = "none";
                        var m = new a(g);
                        t(function () {
                            i.$watch("[" + r.join(",") + "]", function () {
                                m.setContent(n, i)
                            }, !0), m.setContent(s[0].innerHTML, i);
                            var e = s[0].firstElementChild.className;
                            m.addClass("custom-marker"), m.addClass(e), g.position instanceof google.maps.LatLng || o.getGeoLocation(g.position).then(function (e) {
                                m.setPosition(e)
                            })
                        });
                        for (var f in d) google.maps.event.addDomListener(m.el, f, d[f]);
                        c.addObject("customMarkers", m), c.observeAttrSetObj(u, p, m), s.bind("$destroy", function () {
                            c.deleteObject("customMarkers", m)
                        })
                    }
                },
                s = function (a, s, p, c, u, l) {
                    e = c, t = a, n = s, o = u;
                    var g = p.startSymbol(),
                        d = p.endSymbol(),
                        m = new RegExp(l(g) + "([^" + d.substring(0, 1) + "]+)" + l(d), "g");
                    return {
                        restrict: "E",
                        require: ["?^map", "?^ngMap"],
                        compile: function (e) {
                            r(), e[0].style.display = "none";
                            var t = e.html(),
                                n = t.match(m),
                                o = [];
                            return (n || []).forEach(function (e) {
                                var t = e.replace(g, "").replace(d, ""); - 1 == e.indexOf("::") && -1 == e.indexOf("this.") && -1 == o.indexOf(t) && o.push(e.replace(g, "").replace(d, ""))
                            }), i(t, o)
                        }
                    }
                };
            s.$inject = ["$timeout", "$compile", "$interpolate", "Attr2MapOptions", "NgMap", "escapeRegexpFilter"], angular.module("ngMap").directive("customMarker", s)
        }(),
        function () {
            "use strict";
            var e, t, n, o = function (e, t) {
                    e.panel && (e.panel = document.getElementById(e.panel) || document.querySelector(e.panel));
                    var n = new google.maps.DirectionsRenderer(e);
                    for (var o in t) google.maps.event.addListener(n, o, t[o]);
                    return n
                },
                a = function (e, o) {
                    var a = new google.maps.DirectionsService,
                        r = o;
                    r.travelMode = r.travelMode || "DRIVING";
                    var i = ["origin", "destination", "travelMode", "transitOptions", "unitSystem", "durationInTraffic", "waypoints", "optimizeWaypoints", "provideRouteAlternatives", "avoidHighways", "avoidTolls", "region"];
                    for (var s in r) - 1 === i.indexOf(s) && delete r[s];
                    r.waypoints && ("[]" == r.waypoints || "" === r.waypoints) && delete r.waypoints;
                    var p = function (n) {
                        a.route(n, function (n, o) {
                            o == google.maps.DirectionsStatus.OK && t(function () {
                                e.setDirections(n)
                            })
                        })
                    };
                    r.origin && r.destination && ("current-location" == r.origin ? n.getCurrentPosition().then(function (e) {
                        r.origin = new google.maps.LatLng(e.coords.latitude, e.coords.longitude), p(r)
                    }) : "current-location" == r.destination ? n.getCurrentPosition().then(function (e) {
                        r.destination = new google.maps.LatLng(e.coords.latitude, e.coords.longitude), p(r)
                    }) : p(r))
                },
                r = function (r, i, s, p) {
                    var c = r;
                    e = p, t = i, n = s;
                    var u = function (n, r, i, s) {
                        s = s[0] || s[1];
                        var p = c.orgAttributes(r),
                            u = c.filter(i),
                            l = c.getOptions(u, {
                                scope: n
                            }),
                            g = c.getEvents(n, u),
                            d = c.getAttrsToObserve(p),
                            m = o(l, g);
                        s.addObject("directionsRenderers", m), d.forEach(function (e) {
                            ! function (e) {
                                i.$observe(e, function (n) {
                                    if ("panel" == e) t(function () {
                                        var e = document.getElementById(n) || document.querySelector(n);
                                        e && m.setPanel(e)
                                    });
                                    else if (l[e] !== n) {
                                        var o = c.toOptionValue(n, {
                                            key: e
                                        });
                                        l[e] = o, a(m, l)
                                    }
                                })
                            }(e)
                        }), e.getMap().then(function () {
                            a(m, l)
                        }), r.bind("$destroy", function () {
                            s.deleteObject("directionsRenderers", m)
                        })
                    };
                    return {
                        restrict: "E",
                        require: ["?^map", "?^ngMap"],
                        link: u
                    }
                };
            r.$inject = ["Attr2MapOptions", "$timeout", "NavigatorGeolocation", "NgMap"], angular.module("ngMap").directive("directions", r)
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("drawingManager", ["Attr2MapOptions", function (e) {
                var t = e;
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, n, o, a) {
                        a = a[0] || a[1];
                        var r = t.filter(o),
                            i = t.getOptions(r, {
                                scope: e
                            }),
                            s = t.getControlOptions(r),
                            p = t.getEvents(e, r),
                            c = new google.maps.drawing.DrawingManager({
                                drawingMode: i.drawingmode,
                                drawingControl: i.drawingcontrol,
                                drawingControlOptions: s.drawingControlOptions,
                                circleOptions: i.circleoptions,
                                markerOptions: i.markeroptions,
                                polygonOptions: i.polygonoptions,
                                polylineOptions: i.polylineoptions,
                                rectangleOptions: i.rectangleoptions
                            });
                        o.$observe("drawingControlOptions", function (e) {
                            c.drawingControlOptions = t.getControlOptions({
                                drawingControlOptions: e
                            }).drawingControlOptions, c.setDrawingMode(null), c.setMap(a.map)
                        });
                        for (var u in p) google.maps.event.addListener(c, u, p[u]);
                        a.addObject("mapDrawingManager", c), n.bind("$destroy", function () {
                            a.deleteObject("mapDrawingManager", c)
                        })
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("dynamicMapsEngineLayer", ["Attr2MapOptions", function (e) {
                var t = e,
                    n = function (e, t) {
                        var n = new google.maps.visualization.DynamicMapsEngineLayer(e);
                        for (var o in t) google.maps.event.addListener(n, o, t[o]);
                        return n
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = t.filter(a),
                            s = t.getOptions(i, {
                                scope: e
                            }),
                            p = t.getEvents(e, i, p),
                            c = n(s, p);
                        r.addObject("mapsEngineLayers", c)
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("fusionTablesLayer", ["Attr2MapOptions", function (e) {
                var t = e,
                    n = function (e, t) {
                        var n = new google.maps.FusionTablesLayer(e);
                        for (var o in t) google.maps.event.addListener(n, o, t[o]);
                        return n
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = t.filter(a),
                            s = t.getOptions(i, {
                                scope: e
                            }),
                            p = t.getEvents(e, i, p),
                            c = n(s, p);
                        r.addObject("fusionTablesLayers", c), o.bind("$destroy", function () {
                            r.deleteObject("fusionTablesLayers", c)
                        })
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("heatmapLayer", ["Attr2MapOptions", "$window", function (e, t) {
                var n = e;
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = n.filter(a),
                            s = n.getOptions(i, {
                                scope: e
                            });
                        if (s.data = t[a.data] || e[a.data], !(s.data instanceof Array)) throw "invalid heatmap data";
                        s.data = new google.maps.MVCArray(s.data); {
                            var p = new google.maps.visualization.HeatmapLayer(s);
                            n.getEvents(e, i)
                        }
                        r.addObject("heatmapLayers", p)
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            var e = function (e, t, n, o, a, r, i) {
                var s = e,
                    p = function (e, r, i) {
                        var s;
                        !e.position || e.position instanceof google.maps.LatLng || delete e.position, s = new google.maps.InfoWindow(e);
                        for (var p in r) p && google.maps.event.addListener(s, p, r[p]);
                        var c = n(function (e) {
                            angular.isString(i) ? o(i).then(function (t) {
                                e(angular.element(t).wrap("<div>").parent())
                            }, function (e) {
                                throw "info-window template request failed: " + e
                            }) : e(i)
                        }).then(function (e) {
                            var t = e.html().trim();
                            if (1 != angular.element(t).length) throw "info-window working as a template must have a container";
                            s.__template = t.replace(/\s?ng-non-bindable[='"]+/, "")
                        });
                        return s.__open = function (e, n, o) {
                            c.then(function () {
                                a(function () {
                                    o && (n.anchor = o);
                                    var a = t(s.__template)(n);
                                    s.setContent(a[0]), n.$apply(), o && o.getPosition ? s.open(e, o) : o && o instanceof google.maps.LatLng ? (s.open(e), s.setPosition(o)) : s.open(e);
                                    var r = s.content.parentElement.parentElement.parentElement;
                                    r.className = "ng-map-info-window"
                                })
                            })
                        }, s
                    },
                    c = function (e, t, n, o) {
                        o = o[0] || o[1], t.css("display", "none");
                        var a, c = s.orgAttributes(t),
                            u = s.filter(n),
                            l = s.getOptions(u, {
                                scope: e
                            }),
                            g = s.getEvents(e, u),
                            d = p(l, g, l.template || t);
                        !l.position || l.position instanceof google.maps.LatLng || (a = l.position), a && i.getGeoLocation(a).then(function (t) {
                            d.setPosition(t), d.__open(o.map, e, t);
                            var a = n.geoCallback;
                            a && r(a)(e)
                        }), o.addObject("infoWindows", d), o.observeAttrSetObj(c, n, d), o.showInfoWindow = o.map.showInfoWindow = o.showInfoWindow || function (t, n, a) {
                            var r = "string" == typeof t ? t : n,
                                i = "string" == typeof t ? n : a;
                            if ("string" == typeof i)
                                if ("undefined" != typeof o.map.markers && "undefined" != typeof o.map.markers[i]) i = o.map.markers[i];
                                else {
                                    if ("undefined" == typeof o.map.customMarkers || "undefined" == typeof o.map.customMarkers[i]) throw new Error("Cant open info window for id " + i + ". Marker or CustomMarker is not defined");
                                    i = o.map.customMarkers[i]
                                } var s = o.map.infoWindows[r],
                                p = i ? i : this.getPosition ? this : null;
                            s.__open(o.map, e, p), o.singleInfoWindow && (o.lastInfoWindow && e.hideInfoWindow(o.lastInfoWindow), o.lastInfoWindow = r)
                        }, o.hideInfoWindow = o.map.hideInfoWindow = o.hideInfoWindow || function (e, t) {
                            var n = "string" == typeof e ? e : t,
                                a = o.map.infoWindows[n];
                            a.close()
                        }, e.showInfoWindow = o.map.showInfoWindow, e.hideInfoWindow = o.map.hideInfoWindow;
                        var m = d.mapId ? {
                            id: d.mapId
                        } : 0;
                        i.getMap(m).then(function (t) {
                            if (d.visible && d.__open(t, e), d.visibleOnMarker) {
                                var n = d.visibleOnMarker;
                                d.__open(t, e, t.markers[n])
                            }
                        })
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: c
                }
            };
            e.$inject = ["Attr2MapOptions", "$compile", "$q", "$templateRequest", "$timeout", "$parse", "NgMap"], angular.module("ngMap").directive("infoWindow", e)
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("kmlLayer", ["Attr2MapOptions", function (e) {
                var t = e,
                    n = function (e, t) {
                        var n = new google.maps.KmlLayer(e);
                        for (var o in t) google.maps.event.addListener(n, o, t[o]);
                        return n
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = t.orgAttributes(o),
                            s = t.filter(a),
                            p = t.getOptions(s, {
                                scope: e
                            }),
                            c = t.getEvents(e, s),
                            u = n(p, c);
                        r.addObject("kmlLayers", u), r.observeAttrSetObj(i, a, u), o.bind("$destroy", function () {
                            r.deleteObject("kmlLayers", u)
                        })
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("mapData", ["Attr2MapOptions", "NgMap", function (e, t) {
                var n = e;
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = n.filter(a),
                            s = n.getOptions(i, {
                                scope: e
                            }),
                            p = n.getEvents(e, i, p);
                        t.getMap(r.map.id).then(function (t) {
                            for (var n in s) {
                                var o = s[n];
                                "function" == typeof e[o] ? t.data[n](e[o]) : t.data[n](o)
                            }
                            for (var a in p) t.data.addListener(a, p[a])
                        })
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            var e, t, n, o = [],
                a = [],
                r = function (n, r, i) {
                    var s = i.mapLazyLoadParams || i.mapLazyLoad;
                    if (void 0 === window.google || void 0 === window.google.maps) {
                        a.push({
                            scope: n,
                            element: r,
                            savedHtml: o[a.length]
                        }), window.lazyLoadCallback = function () {
                            e(function () {
                                a.forEach(function (e) {
                                    e.element.html(e.savedHtml), t(e.element.contents())(e.scope)
                                })
                            }, 100)
                        };
                        var p = document.createElement("script");
                        p.src = s + (s.indexOf("?") > -1 ? "&" : "?") + "callback=lazyLoadCallback", document.querySelector('script[src="' + p.src + '"]') || document.body.appendChild(p)
                    } else r.html(o), t(r.contents())(n)
                },
                i = function (e, t) {
                    return !t.mapLazyLoad && void 0, o.push(e.html()), n = t.mapLazyLoad, void 0 !== window.google && void 0 !== window.google.maps ? !1 : (e.html(""), {
                        pre: r
                    })
                },
                s = function (n, o) {
                    return t = n, e = o, {
                        compile: i
                    }
                };
            s.$inject = ["$compile", "$timeout"], angular.module("ngMap").directive("mapLazyLoad", s)
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("mapType", ["$parse", "NgMap", function (e, t) {
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (n, o, a, r) {
                        r = r[0] || r[1];
                        var i, s = a.name;
                        if (!s) throw "invalid map-type name";
                        if (i = e(a.object)(n), !i) throw "invalid map-type object";
                        t.getMap().then(function (e) {
                            e.mapTypes.set(s, i)
                        }), r.addObject("mapTypes", i)
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            var e = function () {
                return {
                    restrict: "AE",
                    controller: "__MapController",
                    controllerAs: "ngmap"
                }
            };
            angular.module("ngMap").directive("map", [e]), angular.module("ngMap").directive("ngMap", [e])
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("mapsEngineLayer", ["Attr2MapOptions", function (e) {
                var t = e,
                    n = function (e, t) {
                        var n = new google.maps.visualization.MapsEngineLayer(e);
                        for (var o in t) google.maps.event.addListener(n, o, t[o]);
                        return n
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = t.filter(a),
                            s = t.getOptions(i, {
                                scope: e
                            }),
                            p = t.getEvents(e, i, p),
                            c = n(s, p);
                        r.addObject("mapsEngineLayers", c)
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            var e, t, n, o = function (e, t) {
                    var o;
                    if (n.defaultOptions.marker)
                        for (var a in n.defaultOptions.marker) "undefined" == typeof e[a] && (e[a] = n.defaultOptions.marker[a]);
                    e.position instanceof google.maps.LatLng || (e.position = new google.maps.LatLng(0, 0)), o = new google.maps.Marker(e), Object.keys(t).length > 0;
                    for (var r in t) r && google.maps.event.addListener(o, r, t[r]);
                    return o
                },
                a = function (a, r, i, s) {
                    s = s[0] || s[1];
                    var p, c = e.orgAttributes(r),
                        u = e.filter(i),
                        l = e.getOptions(u, a, {
                            scope: a
                        }),
                        g = e.getEvents(a, u);
                    l.position instanceof google.maps.LatLng || (p = l.position);
                    var d = o(l, g);
                    s.addObject("markers", d), p && n.getGeoLocation(p).then(function (e) {
                        d.setPosition(e), l.centered && d.map.setCenter(e);
                        var n = i.geoCallback;
                        n && t(n)(a)
                    }), s.observeAttrSetObj(c, i, d), r.bind("$destroy", function () {
                        s.deleteObject("markers", d)
                    })
                },
                r = function (o, r, i) {
                    return e = o, t = r, n = i, {
                        restrict: "E",
                        require: ["^?map", "?^ngMap"],
                        link: a
                    }
                };
            r.$inject = ["Attr2MapOptions", "$parse", "NgMap"], angular.module("ngMap").directive("marker", r)
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("overlayMapType", ["NgMap", function (e) {
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (t, n, o, a) {
                        a = a[0] || a[1];
                        var r = o.initMethod || "insertAt",
                            i = t[o.object];
                        e.getMap().then(function (e) {
                            if ("insertAt" == r) {
                                var t = parseInt(o.index, 10);
                                e.overlayMapTypes.insertAt(t, i)
                            } else "push" == r && e.overlayMapTypes.push(i)
                        }), a.addObject("overlayMapTypes", i)
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            var e = function (e, t) {
                var n = e,
                    o = function (e, o, a, r) {
                        if ("false" === a.placesAutoComplete) return !1;
                        var i = n.filter(a),
                            s = n.getOptions(i, {
                                scope: e
                            }),
                            p = n.getEvents(e, i),
                            c = new google.maps.places.Autocomplete(o[0], s);
                        c.setOptions({
                            strictBounds: s.strictBounds === !0
                        });
                        for (var u in p) google.maps.event.addListener(c, u, p[u]);
                        var l = function () {
                            t(function () {
                                r && r.$setViewValue(o.val())
                            }, 100)
                        };
                        google.maps.event.addListener(c, "place_changed", l), o[0].addEventListener("change", l), a.$observe("rectBounds", function (e) {
                            if (e) {
                                var t = n.toOptionValue(e, {
                                    key: "rectBounds"
                                });
                                c.setBounds(new google.maps.LatLngBounds(new google.maps.LatLng(t.south_west.lat, t.south_west.lng), new google.maps.LatLng(t.north_east.lat, t.north_east.lng)))
                            }
                        }), a.$observe("circleBounds", function (e) {
                            if (e) {
                                var t = n.toOptionValue(e, {
                                        key: "circleBounds"
                                    }),
                                    o = new google.maps.Circle(t);
                                c.setBounds(o.getBounds())
                            }
                        }), a.$observe("types", function (e) {
                            if (e) {
                                var t = n.toOptionValue(e, {
                                    key: "types"
                                });
                                c.setTypes(t)
                            }
                        }), a.$observe("componentRestrictions", function (t) {
                            t && c.setComponentRestrictions(e.$eval(t))
                        })
                    };
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: o
                }
            };
            e.$inject = ["Attr2MapOptions", "$timeout"], angular.module("ngMap").directive("placesAutoComplete", e)
        }(),
        function () {
            "use strict";
            var e = function (e, t) {
                    var n, o = e.name;
                    switch (delete e.name, o) {
                        case "circle":
                            e.center instanceof google.maps.LatLng || (e.center = new google.maps.LatLng(0, 0)), n = new google.maps.Circle(e);
                            break;
                        case "polygon":
                            n = new google.maps.Polygon(e);
                            break;
                        case "polyline":
                            n = new google.maps.Polyline(e);
                            break;
                        case "rectangle":
                            n = new google.maps.Rectangle(e);
                            break;
                        case "groundOverlay":
                        case "image":
                            var a = e.url,
                                r = {
                                    opacity: e.opacity,
                                    clickable: e.clickable,
                                    id: e.id
                                };
                            n = new google.maps.GroundOverlay(a, e.bounds, r)
                    }
                    for (var i in t) t[i] && google.maps.event.addListener(n, i, t[i]);
                    return n
                },
                t = function (t, n, o) {
                    var a = t,
                        r = function (t, r, i, s) {
                            s = s[0] || s[1];
                            var p, c, u = a.orgAttributes(r),
                                l = a.filter(i),
                                g = a.getOptions(l, {
                                    scope: t
                                }),
                                d = a.getEvents(t, l);
                            c = g.name, g.center instanceof google.maps.LatLng || (p = g.center);
                            var m = e(g, d);
                            s.addObject("shapes", m), p && "circle" == c && o.getGeoLocation(p).then(function (e) {
                                m.setCenter(e), m.centered && m.map.setCenter(e);
                                var o = i.geoCallback;
                                o && n(o)(t)
                            }), s.observeAttrSetObj(u, i, m), r.bind("$destroy", function () {
                                s.deleteObject("shapes", m)
                            })
                        };
                    return {
                        restrict: "E",
                        require: ["?^map", "?^ngMap"],
                        link: r
                    }
                };
            t.$inject = ["Attr2MapOptions", "$parse", "NgMap"], angular.module("ngMap").directive("shape", t)
        }(),
        function () {
            "use strict";
            var e = function (e, t) {
                var n = e,
                    o = function (e, t, n) {
                        var o, a;
                        t.container && (a = document.getElementById(t.container), a = a || document.querySelector(t.container)), a ? o = new google.maps.StreetViewPanorama(a, t) : (o = e.getStreetView(), o.setOptions(t));
                        for (var r in n) r && google.maps.event.addListener(o, r, n[r]);
                        return o
                    },
                    a = function (e, a, r) {
                        var i = n.filter(r),
                            s = n.getOptions(i, {
                                scope: e
                            }),
                            p = n.getControlOptions(i),
                            c = angular.extend(s, p),
                            u = n.getEvents(e, i);
                        t.getMap().then(function (e) {
                            var t = o(e, c, u);
                            e.setStreetView(t), !t.getPosition() && t.setPosition(e.getCenter()), google.maps.event.addListener(t, "position_changed", function () {
                                t.getPosition() !== e.getCenter() && e.setCenter(t.getPosition())
                            });
                            var n = google.maps.event.addListener(e, "center_changed", function () {
                                t.setPosition(e.getCenter()), google.maps.event.removeListener(n)
                            })
                        })
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: a
                }
            };
            e.$inject = ["Attr2MapOptions", "NgMap"], angular.module("ngMap").directive("streetViewPanorama", e)
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("trafficLayer", ["Attr2MapOptions", function (e) {
                var t = e,
                    n = function (e, t) {
                        var n = new google.maps.TrafficLayer(e);
                        for (var o in t) google.maps.event.addListener(n, o, t[o]);
                        return n
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = t.orgAttributes(o),
                            s = t.filter(a),
                            p = t.getOptions(s, {
                                scope: e
                            }),
                            c = t.getEvents(e, s),
                            u = n(p, c);
                        r.addObject("trafficLayers", u), r.observeAttrSetObj(i, a, u), o.bind("$destroy", function () {
                            r.deleteObject("trafficLayers", u)
                        })
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            angular.module("ngMap").directive("transitLayer", ["Attr2MapOptions", function (e) {
                var t = e,
                    n = function (e, t) {
                        var n = new google.maps.TransitLayer(e);
                        for (var o in t) google.maps.event.addListener(n, o, t[o]);
                        return n
                    };
                return {
                    restrict: "E",
                    require: ["?^map", "?^ngMap"],
                    link: function (e, o, a, r) {
                        r = r[0] || r[1];
                        var i = t.orgAttributes(o),
                            s = t.filter(a),
                            p = t.getOptions(s, {
                                scope: e
                            }),
                            c = t.getEvents(e, s),
                            u = n(p, c);
                        r.addObject("transitLayers", u), r.observeAttrSetObj(i, a, u), o.bind("$destroy", function () {
                            r.deleteObject("transitLayers", u)
                        })
                    }
                }
            }])
        }(),
        function () {
            "use strict";
            var e = /([\:\-\_]+(.))/g,
                t = /^moz([A-Z])/,
                n = function () {
                    return function (n) {
                        return n.replace(e, function (e, t, n, o) {
                            return o ? n.toUpperCase() : n
                        }).replace(t, "Moz$1")
                    }
                };
            angular.module("ngMap").filter("camelCase", n)
        }(),
        function () {
            "use strict";
            var e = function () {
                return function (e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                }
            };
            angular.module("ngMap").filter("escapeRegexp", e)
        }(),
        function () {
            "use strict";
            var e = function () {
                return function (e) {
                    try {
                        return JSON.parse(e), e
                    } catch (t) {
                        return e.replace(/([\$\w]+)\s*:/g, function (e, t) {
                            return '"' + t + '":'
                        }).replace(/'([^']+)'/g, function (e, t) {
                            return '"' + t + '"'
                        }).replace(/''/g, '""')
                    }
                }
            };
            angular.module("ngMap").filter("jsonize", e)
        }(),
        function () {
            "use strict";
            var isoDateRE = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/,
                Attr2MapOptions = function ($parse, $timeout, $log, $interpolate, NavigatorGeolocation, GeoCoder, camelCaseFilter, jsonizeFilter, escapeRegExp) {
                    var exprStartSymbol = $interpolate.startSymbol(),
                        exprEndSymbol = $interpolate.endSymbol(),
                        orgAttributes = function (e) {
                            e.length > 0 && (e = e[0]);
                            for (var t = {}, n = 0; n < e.attributes.length; n++) {
                                var o = e.attributes[n];
                                t[o.name] = o.value
                            }
                            return t
                        },
                        getJSON = function (e) {
                            var t = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/;
                            return e.match(t) && (e = "[" + e + "]"), JSON.parse(jsonizeFilter(e))
                        },
                        getLatLng = function (e) {
                            var t = e;
                            if (e[0].constructor == Array)
                                if (e[0][0].constructor == Array && 2 == e[0][0].length || e[0][0].constructor == Object) {
                                    for (var n, o = [], a = 0; a < e.length; a++) n = e[a].map(function (e) {
                                        return new google.maps.LatLng(e[0], e[1])
                                    }), o.push(n);
                                    t = o
                                } else t = e.map(function (e) {
                                    return new google.maps.LatLng(e[0], e[1])
                                });
                            else !isNaN(parseFloat(e[0])) && isFinite(e[0]) && (t = new google.maps.LatLng(t[0], t[1]));
                            return t
                        },
                        toOptionValue = function (input, options) {
                            var output;
                            try {
                                output = getNumber(input)
                            } catch (err) {
                                try {
                                    var output = getJSON(input);
                                    if (output instanceof Array) output = output[0].constructor == Object ? output : output[0] instanceof Array ? output[0][0].constructor == Object ? output : getLatLng(output) : getLatLng(output);
                                    else if (output === Object(output)) {
                                        var newOptions = options;
                                        newOptions.doNotConverStringToNumber = !0, output = getOptions(output, newOptions)
                                    }
                                } catch (err2) {
                                    if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) try {
                                        var exp = "new google.maps." + input;
                                        output = eval(exp)
                                    } catch (e) {
                                        output = input
                                    } else if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) try {
                                        var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                                        output = google.maps[matches[1]][matches[2]]
                                    } catch (e) {
                                        output = input
                                    } else if (input.match(/^[A-Z]+$/)) try {
                                        var capitalizedKey = options.key.charAt(0).toUpperCase() + options.key.slice(1);
                                        options.key.match(/temperatureUnit|windSpeedUnit|labelColor/) ? (capitalizedKey = capitalizedKey.replace(/s$/, ""), output = google.maps.weather[capitalizedKey][input]) : output = google.maps[capitalizedKey][input]
                                    } catch (e) {
                                        output = input
                                    } else if (input.match(isoDateRE)) try {
                                        output = new Date(input)
                                    } catch (e) {
                                        output = input
                                    } else if (input.match(new RegExp("^" + escapeRegExp(exprStartSymbol))) && options.scope) try {
                                        var expr = input.replace(new RegExp(escapeRegExp(exprStartSymbol)), "").replace(new RegExp(escapeRegExp(exprEndSymbol), "g"), "");
                                        output = options.scope.$eval(expr)
                                    } catch (err) {
                                        output = input
                                    } else output = input
                                }
                            }
                            if (("center" == options.key || "position" == options.key) && output instanceof Array && (output = new google.maps.LatLng(output[0], output[1])), "bounds" == options.key && output instanceof Array && (output = new google.maps.LatLngBounds(output[0], output[1])), "icons" == options.key && output instanceof Array)
                                for (var i = 0; i < output.length; i++) {
                                    var el = output[i];
                                    el.icon.path.match(/^[A-Z_]+$/) && (el.icon.path = google.maps.SymbolPath[el.icon.path])
                                }
                            if ("icon" == options.key && output instanceof Object) {
                                ("" + output.path).match(/^[A-Z_]+$/) && (output.path = google.maps.SymbolPath[output.path]);
                                for (var key in output) {
                                    var arr = output[key];
                                    "anchor" == key || "origin" == key || "labelOrigin" == key ? output[key] = new google.maps.Point(arr[0], arr[1]) : ("size" == key || "scaledSize" == key) && (output[key] = new google.maps.Size(arr[0], arr[1]))
                                }
                            }
                            return output
                        },
                        getAttrsToObserve = function (e) {
                            var t = [],
                                n = new RegExp(escapeRegExp(exprStartSymbol) + ".*" + escapeRegExp(exprEndSymbol), "g");
                            if (!e.noWatcher)
                                for (var o in e) {
                                    var a = e[o];
                                    a && a.match(n) && t.push(camelCaseFilter(o))
                                }
                            return t
                        },
                        filter = function (e) {
                            var t = {};
                            for (var n in e) n.match(/^\$/) || n.match(/^ng[A-Z]/) || (t[n] = e[n]);
                            return t
                        },
                        getOptions = function (e, t) {
                            t = t || {};
                            var n = {};
                            for (var o in e)
                                if (e[o] || 0 === e[o]) {
                                    if (o.match(/^on[A-Z]/)) continue;
                                    if (o.match(/ControlOptions$/)) continue;
                                    n[o] = "string" != typeof e[o] ? e[o] : t.doNotConverStringToNumber && e[o].match(/^[0-9]+$/) ? e[o] : toOptionValue(e[o], {
                                        key: o,
                                        scope: t.scope
                                    })
                                } return n
                        },
                        getEvents = function (e, t) {
                            var n = {},
                                o = function (e) {
                                    return "_" + e.toLowerCase()
                                },
                                a = function (t) {
                                    var n = t.match(/([^\(]+)\(([^\)]*)\)/),
                                        o = n[1],
                                        a = n[2].replace(/event[ ,]*/, ""),
                                        r = $parse("[" + a + "]");
                                    return function (t) {
                                        function n(e, t) {
                                            return e[t]
                                        }
                                        var a = r(e),
                                            i = o.split(".").reduce(n, e);
                                        i && i.apply(this, [t].concat(a)), $timeout(function () {
                                            e.$apply()
                                        })
                                    }
                                };
                            for (var r in t)
                                if (t[r]) {
                                    if (!r.match(/^on[A-Z]/)) continue;
                                    var i = r.replace(/^on/, "");
                                    i = i.charAt(0).toLowerCase() + i.slice(1), i = i.replace(/([A-Z])/g, o);
                                    var s = t[r];
                                    n[i] = new a(s)
                                } return n
                        },
                        getControlOptions = function (e) {
                            var t = {};
                            if ("object" != typeof e) return !1;
                            for (var n in e)
                                if (e[n]) {
                                    if (!n.match(/(.*)ControlOptions$/)) continue;
                                    var o = e[n],
                                        a = o.replace(/'/g, '"');
                                    a = a.replace(/([^"]+)|("[^"]+")/g, function (e, t, n) {
                                        return t ? t.replace(/([a-zA-Z0-9]+?):/g, '"$1":') : n
                                    });
                                    try {
                                        var r = JSON.parse(a);
                                        for (var i in r)
                                            if (r[i]) {
                                                var s = r[i];
                                                if ("string" == typeof s ? s = s.toUpperCase() : "mapTypeIds" === i && (s = s.map(function (e) {
                                                        return e.match(/^[A-Z]+$/) ? google.maps.MapTypeId[e.toUpperCase()] : e
                                                    })), "style" === i) {
                                                    var p = n.charAt(0).toUpperCase() + n.slice(1),
                                                        c = p.replace(/Options$/, "") + "Style";
                                                    r[i] = google.maps[c][s]
                                                } else r[i] = "position" === i ? google.maps.ControlPosition[s] : s
                                            } t[n] = r
                                    } catch (u) {}
                                } return t
                        };
                    return {
                        filter: filter,
                        getOptions: getOptions,
                        getEvents: getEvents,
                        getControlOptions: getControlOptions,
                        toOptionValue: toOptionValue,
                        getAttrsToObserve: getAttrsToObserve,
                        orgAttributes: orgAttributes
                    }
                };
            Attr2MapOptions.$inject = ["$parse", "$timeout", "$log", "$interpolate", "NavigatorGeolocation", "GeoCoder", "camelCaseFilter", "jsonizeFilter", "escapeRegexpFilter"], angular.module("ngMap").service("Attr2MapOptions", Attr2MapOptions)
        }(),
        function () {
            "use strict";
            var e, t = function (t) {
                    var n = e.defer(),
                        o = new google.maps.Geocoder;
                    return o.geocode(t, function (e, t) {
                        t == google.maps.GeocoderStatus.OK ? n.resolve(e) : n.reject(t)
                    }), n.promise
                },
                n = function (n) {
                    return e = n, {
                        geocode: t
                    }
                };
            n.$inject = ["$q"], angular.module("ngMap").service("GeoCoder", n)
        }(),
        function () {
            "use strict";
            var e, t, n = function (n, o) {
                return e = n, t = o, {
                    load: function (n) {
                        var o = e.defer();
                        if (void 0 === window.google || void 0 === window.google.maps) {
                            window.lazyLoadCallback = function () {
                                t(function () {
                                    o.resolve(window.google)
                                }, 100)
                            };
                            var a = document.createElement("script");
                            a.src = n + (n.indexOf("?") > -1 ? "&" : "?") + "callback=lazyLoadCallback", document.querySelector('script[src="' + a.src + '"]') || document.body.appendChild(a)
                        } else o.resolve(window.google);
                        return o.promise
                    }
                }
            };
            n.$inject = ["$q", "$timeout"], angular.module("ngMap").service("GoogleMapsApi", n)
        }(),
        function () {
            "use strict";
            var e, t = function (t) {
                    var n = e.defer();
                    return navigator.geolocation ? (void 0 === t ? t = {
                        timeout: 5e3
                    } : void 0 === t.timeout && (t.timeout = 5e3), navigator.geolocation.getCurrentPosition(function (e) {
                        n.resolve(e)
                    }, function (e) {
                        n.reject(e)
                    }, t)) : n.reject("Browser Geolocation service failed."), n.promise
                },
                n = function (n) {
                    return e = n, {
                        getCurrentPosition: t
                    }
                };
            n.$inject = ["$q"], angular.module("ngMap").service("NavigatorGeolocation", n)
        }(),
        function () {
            "use strict";
            var e, t, n, o = [],
                a = function (n) {
                    var a = t.createElement("div");
                    a.style.width = "100%", a.style.height = "100%", n.appendChild(a);
                    var r = new e.google.maps.Map(a, {});
                    return o.push(r), r
                },
                r = function (e, t) {
                    for (var n, a = 0; a < o.length; a++) {
                        var r = o[a];
                        if (r.id == t && !r.inUse) {
                            var i = r.getDiv();
                            e.appendChild(i), n = r;
                            break
                        }
                    }
                    return n
                },
                i = function (e) {
                    for (var t, n = 0; n < o.length; n++) {
                        var a = o[n];
                        if (!a.id && !a.inUse) {
                            var r = a.getDiv();
                            e.appendChild(r), t = a;
                            break
                        }
                    }
                    return t
                },
                s = function (e) {
                    var t = r(e, e.id) || i(e);
                    return t ? n(function () {
                        google.maps.event.trigger(t, "idle")
                    }, 100) : t = a(e), t.inUse = !0, t
                },
                p = function (e) {
                    e.inUse = !1
                },
                c = function () {
                    for (var e = 0; e < o.length; e++) o[e] = null;
                    o = []
                },
                u = function (e) {
                    for (var t = 0; t < o.length; t++) null !== o[t] && o[t].id == e && (o[t] = null, o.splice(t, 1))
                },
                l = function (a, r, i) {
                    return t = a[0], e = r, n = i, {
                        mapInstances: o,
                        resetMapInstances: c,
                        getMapInstance: s,
                        returnMapInstance: p,
                        deleteMapInstance: u
                    }
                };
            l.$inject = ["$document", "$window", "$timeout"], angular.module("ngMap").factory("NgMapPool", l)
        }(),
        function () {
            "use strict";
            var e, t, n, o, a, r, i, s, p = {},
                c = function (n, o) {
                    var a;
                    return n.currentStyle ? a = n.currentStyle[o] : e.getComputedStyle && (a = t.defaultView.getComputedStyle(n, null).getPropertyValue(o)), a
                },
                u = function (e) {
                    var t = p[e || 0];
                    return t.map instanceof google.maps.Map ? void 0 : (t.initializeMap(), t.map)
                },
                l = function (t, o) {
                    function a(n) {
                        var o = Object.keys(p),
                            s = p[o[0]];
                        t && p[t] ? r.resolve(p[t].map) : !t && s && s.map ? r.resolve(s.map) : n > i ? r.reject("could not find map") : e.setTimeout(function () {
                            a(n + 100)
                        }, 100)
                    }
                    o = o || {}, t = "object" == typeof t ? t.id : t;
                    var r = n.defer(),
                        i = o.timeout || 1e4;
                    return a(0), r.promise
                },
                g = function (e) {
                    if (e.map) {
                        var t = Object.keys(p).length;
                        p[e.map.id || t] = e
                    }
                },
                d = function (e) {
                    var t = Object.keys(p).length - 1,
                        n = e.map.id || t;
                    if (e.map) {
                        for (var o in e.eventListeners) {
                            var a = e.eventListeners[o];
                            google.maps.event.removeListener(a)
                        }
                        e.map.controls && e.map.controls.forEach(function (e) {
                            e.clear()
                        })
                    }
                    e.map.heatmapLayers && Object.keys(e.map.heatmapLayers).forEach(function (t) {
                        e.deleteObject("heatmapLayers", e.map.heatmapLayers[t])
                    }), s.deleteMapInstance(n), delete p[n]
                },
                m = function (e, t) {
                    var a = n.defer();
                    return !e || e.match(/^current/i) ? o.getCurrentPosition(t).then(function (e) {
                        var t = e.coords.latitude,
                            n = e.coords.longitude,
                            o = new google.maps.LatLng(t, n);
                        a.resolve(o)
                    }, function (e) {
                        a.reject(e)
                    }) : r.geocode({
                        address: e
                    }).then(function (e) {
                        a.resolve(e[0].geometry.location)
                    }, function (e) {
                        a.reject(e)
                    }), a.promise
                },
                f = function (e, t) {
                    return function (n) {
                        if (n) {
                            var o = i("set-" + e),
                                r = a.toOptionValue(n, {
                                    key: e
                                });
                            t[o] && (e.match(/center|position/) && "string" == typeof r ? m(r).then(function (e) {
                                t[o](e)
                            }) : t[o](r))
                        }
                    }
                },
                v = function (e) {
                    var t = e.getAttribute("default-style");
                    "true" == t ? (e.style.display = "block", e.style.height = "300px") : ("block" != c(e, "display") && (e.style.display = "block"), c(e, "height").match(/^(0|auto)/) && (e.style.height = "300px"))
                };
            angular.module("ngMap").provider("NgMap", function () {
                var p = {};
                this.setDefaultOptions = function (e) {
                    p = e
                };
                var c = function (c, y, h, b, M, O, w, L) {
                    return e = c, t = y[0], n = h, o = b, a = M, r = O, i = w, s = L, {
                        defaultOptions: p,
                        addMap: g,
                        deleteMap: d,
                        getMap: l,
                        initMap: u,
                        setStyle: v,
                        getGeoLocation: m,
                        observeAndSet: f
                    }
                };
                c.$inject = ["$window", "$document", "$q", "NavigatorGeolocation", "Attr2MapOptions", "GeoCoder", "camelCaseFilter", "NgMapPool"], this.$get = c
            })
        }(),
        function () {
            "use strict";
            var e, t = function (t, n) {
                    n = n || t.getCenter();
                    var o = e.defer(),
                        a = new google.maps.StreetViewService;
                    return a.getPanoramaByLocation(n || t.getCenter, 100, function (e, t) {
                        t === google.maps.StreetViewStatus.OK ? o.resolve(e.location.pano) : o.resolve(!1)
                    }), o.promise
                },
                n = function (e, t) {
                    var n = new google.maps.StreetViewPanorama(e.getDiv(), {
                        enableCloseButton: !0
                    });
                    n.setPano(t)
                },
                o = function (o) {
                    return e = o, {
                        getPanorama: t,
                        setPanorama: n
                    }
                };
            o.$inject = ["$q"], angular.module("ngMap").service("StreetView", o)
        }(), "ngMap"
});




/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (U, C) {
    'use strict';

    function Ea(a, b, c) {
        if (!a) throw Oa("areq", b || "?", c || "required");
        return a
    }

    function Fa(a, b) {
        if (!a && !b) return "";
        if (!a) return b;
        if (!b) return a;
        X(a) && (a = a.join(" "));
        X(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Pa(a) {
        var b = {};
        a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
        return b
    }

    function Y(a, b, c) {
        var d = "";
        a = X(a) ? a : a && G(a) && a.length ? a.split(/\s+/) : [];
        r(a, function (a, e) {
            a && 0 < a.length && (d += 0 < e ? " " : "", d += c ? b + a : a + b)
        });
        return d
    }

    function Qa(a) {
        if (a instanceof w) switch (a.length) {
            case 0:
                return a;
            case 1:
                if (1 === a[0].nodeType) return a;
                break;
            default:
                return w(ua(a))
        }
        if (1 === a.nodeType) return w(a)
    }

    function ua(a) {
        if (!a[0]) return a;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (1 === c.nodeType) return c
        }
    }

    function Ra(a, b, c) {
        r(b, function (b) {
            a.addClass(b, c)
        })
    }

    function Sa(a, b, c) {
        r(b, function (b) {
            a.removeClass(b, c)
        })
    }

    function Z(a) {
        return function (b, c) {
            c.addClass && (Ra(a, b, c.addClass), c.addClass = null);
            c.removeClass && (Sa(a, b, c.removeClass), c.removeClass = null)
        }
    }

    function oa(a) {
        a = a || {};
        if (!a.$$prepared) {
            var b = a.domOperation ||
                N;
            a.domOperation = function () {
                a.$$domOperationFired = !0;
                b();
                b = N
            };
            a.$$prepared = !0
        }
        return a
    }

    function ha(a, b) {
        Ga(a, b);
        Ha(a, b)
    }

    function Ga(a, b) {
        b.from && (a.css(b.from), b.from = null)
    }

    function Ha(a, b) {
        b.to && (a.css(b.to), b.to = null)
    }

    function V(a, b, c) {
        var d = b.options || {};
        c = c.options || {};
        var f = (d.addClass || "") + " " + (c.addClass || ""),
            e = (d.removeClass || "") + " " + (c.removeClass || "");
        a = Ta(a.attr("class"), f, e);
        c.preparationClasses && (d.preparationClasses = ea(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
        f = d.domOperation !== N ? d.domOperation : null;
        va(d, c);
        f && (d.domOperation = f);
        d.addClass = a.addClass ? a.addClass : null;
        d.removeClass = a.removeClass ? a.removeClass : null;
        b.addClass = d.addClass;
        b.removeClass = d.removeClass;
        return d
    }

    function Ta(a, b, c) {
        function d(a) {
            G(a) && (a = a.split(" "));
            var b = {};
            r(a, function (a) {
                a.length && (b[a] = !0)
            });
            return b
        }
        var f = {};
        a = d(a);
        b = d(b);
        r(b, function (a, b) {
            f[b] = 1
        });
        c = d(c);
        r(c, function (a, b) {
            f[b] = 1 === f[b] ? null : -1
        });
        var e = {
            addClass: "",
            removeClass: ""
        };
        r(f, function (b, c) {
            var d, f;
            1 === b ? (d = "addClass",
                f = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", f = a[c] || a[c + "-add"]);
            f && (e[d].length && (e[d] += " "), e[d] += c)
        });
        return e
    }

    function z(a) {
        return a instanceof w ? a[0] : a
    }

    function Ua(a, b, c) {
        var d = "";
        b && (d = Y(b, "ng-", !0));
        c.addClass && (d = ea(d, Y(c.addClass, "-add")));
        c.removeClass && (d = ea(d, Y(c.removeClass, "-remove")));
        d.length && (c.preparationClasses = d, a.addClass(d))
    }

    function pa(a, b) {
        var c = b ? "-" + b + "s" : "";
        ka(a, [la, c]);
        return [la, c]
    }

    function wa(a, b) {
        var c = b ? "paused" : "",
            d = $ + "PlayState";
        ka(a, [d, c]);
        return [d, c]
    }

    function ka(a,
        b) {
        a.style[b[0]] = b[1]
    }

    function ea(a, b) {
        return a ? b ? a + " " + b : a : b
    }

    function Ia(a, b, c) {
        var d = Object.create(null),
            f = a.getComputedStyle(b) || {};
        r(c, function (a, b) {
            var c = f[a];
            if (c) {
                var y = c.charAt(0);
                if ("-" === y || "+" === y || 0 <= y) c = Va(c);
                0 === c && (c = null);
                d[b] = c
            }
        });
        return d
    }

    function Va(a) {
        var b = 0;
        a = a.split(/\s*,\s*/);
        r(a, function (a) {
            "s" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
            a = parseFloat(a) || 0;
            b = b ? Math.max(a, b) : a
        });
        return b
    }

    function xa(a) {
        return 0 === a || null != a
    }

    function Ja(a, b) {
        var c = R,
            d = a + "s";
        b ? c += "Duration" :
            d += " linear all";
        return [c, d]
    }

    function Ka() {
        var a = Object.create(null);
        return {
            flush: function () {
                a = Object.create(null)
            },
            count: function (b) {
                return (b = a[b]) ? b.total : 0
            },
            get: function (b) {
                return (b = a[b]) && b.value
            },
            put: function (b, c) {
                a[b] ? a[b].total++ : a[b] = {
                    total: 1,
                    value: c
                }
            }
        }
    }

    function La(a, b, c) {
        r(c, function (c) {
            a[c] = ya(a[c]) ? a[c] : b.style.getPropertyValue(c)
        })
    }
    var R, za, $, Aa;
    void 0 === U.ontransitionend && void 0 !== U.onwebkittransitionend ? (R = "WebkitTransition", za = "webkitTransitionEnd transitionend") : (R = "transition", za =
        "transitionend");
    void 0 === U.onanimationend && void 0 !== U.onwebkitanimationend ? ($ = "WebkitAnimation", Aa = "webkitAnimationEnd animationend") : ($ = "animation", Aa = "animationend");
    var qa = $ + "Delay",
        Ba = $ + "Duration",
        la = R + "Delay",
        Ma = R + "Duration",
        Oa = C.$$minErr("ng"),
        Wa = {
            transitionDuration: Ma,
            transitionDelay: la,
            transitionProperty: R + "Property",
            animationDuration: Ba,
            animationDelay: qa,
            animationIterationCount: $ + "IterationCount"
        },
        Xa = {
            transitionDuration: Ma,
            transitionDelay: la,
            animationDuration: Ba,
            animationDelay: qa
        },
        Ca, va,
        r, X, ya, aa, Da, ra, G, K, w, N;
    C.module("ngAnimate", [], function () {
        N = C.noop;
        Ca = C.copy;
        va = C.extend;
        w = C.element;
        r = C.forEach;
        X = C.isArray;
        G = C.isString;
        ra = C.isObject;
        K = C.isUndefined;
        ya = C.isDefined;
        Da = C.isFunction;
        aa = C.isElement
    }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
        return {
            restrict: "A",
            transclude: "element",
            terminal: !0,
            priority: 600,
            link: function (b, d, f, e, m) {
                var A, y;
                b.$watchCollection(f.ngAnimateSwap || f["for"], function (f) {
                    A && a.leave(A);
                    y && (y.$destroy(), y = null);
                    if (f || 0 === f) y = b.$new(), m(y,
                        function (b) {
                            A = b;
                            a.enter(b, null, d)
                        })
                })
            }
        }
    }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
        return {
            link: function (b, c, d) {
                function f(a) {
                    c.data("$$ngAnimateChildren", "on" === a || "true" === a)
                }
                var e = d.ngAnimateChildren;
                G(e) && 0 === e.length ? c.data("$$ngAnimateChildren", !0) : (f(a(e)(b)), d.$observe("ngAnimateChildren", f))
            }
        }
    }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
        function b(a) {
            d = d.concat(a);
            c()
        }

        function c() {
            if (d.length) {
                for (var b = d.shift(), m = 0; m < b.length; m++) b[m]();
                f || a(function () {
                    f || c()
                })
            }
        }
        var d,
            f;
        d = b.queue = [];
        b.waitUntilQuiet = function (b) {
            f && f();
            f = a(function () {
                f = null;
                b();
                c()
            })
        };
        return b
    }]).provider("$$animateQueue", ["$animateProvider", function (a) {
        function b(a) {
            if (!a) return null;
            a = a.split(" ");
            var b = Object.create(null);
            r(a, function (a) {
                b[a] = !0
            });
            return b
        }

        function c(a, c) {
            if (a && c) {
                var d = b(c);
                return a.split(" ").some(function (a) {
                    return d[a]
                })
            }
        }

        function d(a, b, c, d) {
            return e[a].some(function (a) {
                return a(b, c, d)
            })
        }

        function f(a, b) {
            var c = 0 < (a.addClass || "").length,
                d = 0 < (a.removeClass || "").length;
            return b ?
                c && d : c || d
        }
        var e = this.rules = {
            skip: [],
            cancel: [],
            join: []
        };
        e.join.push(function (a, b, c) {
            return !b.structural && f(b)
        });
        e.skip.push(function (a, b, c) {
            return !b.structural && !f(b)
        });
        e.skip.push(function (a, b, c) {
            return "leave" === c.event && b.structural
        });
        e.skip.push(function (a, b, c) {
            return c.structural && 2 === c.state && !b.structural
        });
        e.cancel.push(function (a, b, c) {
            return c.structural && b.structural
        });
        e.cancel.push(function (a, b, c) {
            return 2 === c.state && b.structural
        });
        e.cancel.push(function (a, b, d) {
            if (d.structural) return !1;
            a =
                b.addClass;
            b = b.removeClass;
            var f = d.addClass;
            d = d.removeClass;
            return K(a) && K(b) || K(f) && K(d) ? !1 : c(a, d) || c(b, f)
        });
        this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function (b, c, y, e, ba, Ya, O, v, H, S, P) {
            function I() {
                var a = !1;
                return function (b) {
                    a ? b() : c.$$postDigest(function () {
                        a = !0;
                        b()
                    })
                }
            }

            function B(a, b, c) {
                var g = z(b),
                    d = z(a),
                    E = [];
                (a = t[c]) && r(a, function (a) {
                    J.call(a.node, g) ? E.push(a.callback) :
                        "leave" === c && J.call(a.node, d) && E.push(a.callback)
                });
                return E
            }

            function n(a, b, c) {
                var g = ua(b);
                return a.filter(function (a) {
                    return !(a.node === g && (!c || a.callback === c))
                })
            }

            function p(a, h, u) {
                function p(c, g, d, h) {
                    y(function () {
                        var c = B(S, a, g);
                        c.length ? b(function () {
                            r(c, function (b) {
                                b(a, d, h)
                            });
                            "close" !== d || a[0].parentNode || sa.off(a)
                        }) : "close" !== d || a[0].parentNode || sa.off(a)
                    });
                    c.progress(g, d, h)
                }

                function n(b) {
                    var c = a,
                        g = k;
                    g.preparationClasses && (c.removeClass(g.preparationClasses), g.preparationClasses = null);
                    g.activeClasses &&
                        (c.removeClass(g.activeClasses), g.activeClasses = null);
                    Na(a, k);
                    ha(a, k);
                    k.domOperation();
                    e.complete(!b)
                }
                var k = Ca(u),
                    t, S;
                if (a = Qa(a)) t = z(a), S = a.parent();
                var k = oa(k),
                    e = new O,
                    y = I();
                X(k.addClass) && (k.addClass = k.addClass.join(" "));
                k.addClass && !G(k.addClass) && (k.addClass = null);
                X(k.removeClass) && (k.removeClass = k.removeClass.join(" "));
                k.removeClass && !G(k.removeClass) && (k.removeClass = null);
                k.from && !ra(k.from) && (k.from = null);
                k.to && !ra(k.to) && (k.to = null);
                if (!t) return n(), e;
                u = [t.getAttribute("class"), k.addClass,
                    k.removeClass
                ].join(" ");
                if (!F(u)) return n(), e;
                var s = 0 <= ["enter", "move", "leave"].indexOf(h),
                    x = P(),
                    v = !ma || x || g.get(t);
                u = !v && E.get(t) || {};
                var J = !!u.state;
                v || J && 1 === u.state || (v = !L(a, S, h));
                if (v) return x && p(e, h, "start"), n(), x && p(e, h, "close"), e;
                s && ta(a);
                x = {
                    structural: s,
                    element: a,
                    event: h,
                    addClass: k.addClass,
                    removeClass: k.removeClass,
                    close: n,
                    options: k,
                    runner: e
                };
                if (J) {
                    if (d("skip", a, x, u)) {
                        if (2 === u.state) return n(), e;
                        V(a, u, x);
                        return u.runner
                    }
                    if (d("cancel", a, x, u))
                        if (2 === u.state) u.runner.end();
                        else if (u.structural) u.close();
                    else return V(a, u, x), u.runner;
                    else if (d("join", a, x, u))
                        if (2 === u.state) V(a, x, {});
                        else return Ua(a, s ? h : null, k), h = x.event = u.event, k = V(a, u, x), u.runner
                } else V(a, x, {});
                (J = x.structural) || (J = "animate" === x.event && 0 < Object.keys(x.options.to || {}).length || f(x));
                if (!J) return n(), l(a), e;
                var H = (u.counter || 0) + 1;
                x.counter = H;
                Q(a, 1, x);
                c.$$postDigest(function () {
                    var b = E.get(t),
                        c = !b,
                        b = b || {},
                        g = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || f(b));
                    if (c || b.counter !== H || !g) {
                        c && (Na(a, k), ha(a, k));
                        if (c || s && b.event !==
                            h) k.domOperation(), e.end();
                        g || l(a)
                    } else h = !b.structural && f(b, !0) ? "setClass" : b.event, Q(a, 2), b = Ya(a, h, b.options), e.setHost(b), p(e, h, "start", {}), b.done(function (b) {
                        n(!b);
                        (b = E.get(t)) && b.counter === H && l(z(a));
                        p(e, h, "close", {})
                    })
                });
                return e
            }

            function ta(a) {
                a = z(a).querySelectorAll("[data-ng-animate]");
                r(a, function (a) {
                    var b = parseInt(a.getAttribute("data-ng-animate"), 10),
                        c = E.get(a);
                    if (c) switch (b) {
                        case 2:
                            c.runner.end();
                        case 1:
                            E.remove(a)
                    }
                })
            }

            function l(a) {
                a = z(a);
                a.removeAttribute("data-ng-animate");
                E.remove(a)
            }

            function k(a, b) {
                return z(a) === z(b)
            }

            function L(a, b, c) {
                c = w(e[0].body);
                var d = k(a, c) || "HTML" === a[0].nodeName,
                    h = k(a, y),
                    f = !1,
                    B, p = g.get(z(a));
                (a = w.data(a[0], "$ngAnimatePin")) && (b = a);
                for (b = z(b); b;) {
                    h || (h = k(b, y));
                    if (1 !== b.nodeType) break;
                    a = E.get(b) || {};
                    if (!f) {
                        var n = g.get(b);
                        if (!0 === n && !1 !== p) {
                            p = !0;
                            break
                        } else !1 === n && (p = !1);
                        f = a.structural
                    }
                    if (K(B) || !0 === B) a = w.data(b, "$$ngAnimateChildren"), ya(a) && (B = a);
                    if (f && !1 === B) break;
                    d || (d = k(b, c));
                    if (d && h) break;
                    if (!h && (a = w.data(b, "$ngAnimatePin"))) {
                        b = z(a);
                        continue
                    }
                    b = b.parentNode
                }
                return (!f ||
                    B) && !0 !== p && h && d
            }

            function Q(a, b, c) {
                c = c || {};
                c.state = b;
                a = z(a);
                a.setAttribute("data-ng-animate", b);
                c = (b = E.get(a)) ? va(b, c) : c;
                E.put(a, c)
            }
            var E = new ba,
                g = new ba,
                ma = null,
                h = c.$watch(function () {
                    return 0 === v.totalPendingRequests
                }, function (a) {
                    a && (h(), c.$$postDigest(function () {
                        c.$$postDigest(function () {
                            null === ma && (ma = !0)
                        })
                    }))
                }),
                t = Object.create(null),
                x = a.classNameFilter(),
                F = x ? function (a) {
                    return x.test(a)
                } : function () {
                    return !0
                },
                Na = Z(H),
                J = U.Node.prototype.contains || function (a) {
                    return this === a || !!(this.compareDocumentPosition(a) &
                        16)
                },
                sa = {
                    on: function (a, b, c) {
                        var g = ua(b);
                        t[a] = t[a] || [];
                        t[a].push({
                            node: g,
                            callback: c
                        });
                        w(b).on("$destroy", function () {
                            E.get(g) || sa.off(a, b, c)
                        })
                    },
                    off: function (a, b, c) {
                        if (1 !== arguments.length || G(arguments[0])) {
                            var g = t[a];
                            g && (t[a] = 1 === arguments.length ? null : n(g, b, c))
                        } else
                            for (g in b = arguments[0], t) t[g] = n(t[g], b)
                    },
                    pin: function (a, b) {
                        Ea(aa(a), "element", "not an element");
                        Ea(aa(b), "parentElement", "not an element");
                        a.data("$ngAnimatePin", b)
                    },
                    push: function (a, b, c, g) {
                        c = c || {};
                        c.domOperation = g;
                        return p(a, b, c)
                    },
                    enabled: function (a,
                        b) {
                        var c = arguments.length;
                        if (0 === c) b = !!ma;
                        else if (aa(a)) {
                            var d = z(a);
                            1 === c ? b = !g.get(d) : g.put(d, !b)
                        } else b = ma = !!a;
                        return b
                    }
                };
            return sa
        }]
    }]).provider("$$animation", ["$animateProvider", function (a) {
        var b = this.drivers = [];
        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, f, e, m, A) {
            function y(a) {
                function b(a) {
                    if (a.processed) return a;
                    a.processed = !0;
                    var d = a.domNode,
                        n = d.parentNode;
                    f.put(d, a);
                    for (var p; n;) {
                        if (p = f.get(n)) {
                            p.processed || (p = b(p));
                            break
                        }
                        n = n.parentNode
                    }(p ||
                        c).children.push(a);
                    return a
                }
                var c = {
                        children: []
                    },
                    d, f = new m;
                for (d = 0; d < a.length; d++) {
                    var e = a[d];
                    f.put(e.domNode, a[d] = {
                        domNode: e.domNode,
                        fn: e.fn,
                        children: []
                    })
                }
                for (d = 0; d < a.length; d++) b(a[d]);
                return function (a) {
                    var b = [],
                        c = [],
                        d;
                    for (d = 0; d < a.children.length; d++) c.push(a.children[d]);
                    a = c.length;
                    var f = 0,
                        e = [];
                    for (d = 0; d < c.length; d++) {
                        var k = c[d];
                        0 >= a && (a = f, f = 0, b.push(e), e = []);
                        e.push(k.fn);
                        k.children.forEach(function (a) {
                            f++;
                            c.push(a)
                        });
                        a--
                    }
                    e.length && b.push(e);
                    return b
                }(c)
            }
            var s = [],
                ba = Z(a);
            return function (m, O, v) {
                function H(a) {
                    a =
                        a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
                    var b = [];
                    r(a, function (a) {
                        var c = a.getAttribute("ng-animate-ref");
                        c && c.length && b.push(a)
                    });
                    return b
                }

                function S(a) {
                    var b = [],
                        c = {};
                    r(a, function (a, d) {
                        var h = z(a.element),
                            k = 0 <= ["enter", "move"].indexOf(a.event),
                            h = a.structural ? H(h) : [];
                        if (h.length) {
                            var f = k ? "to" : "from";
                            r(h, function (a) {
                                var b = a.getAttribute("ng-animate-ref");
                                c[b] = c[b] || {};
                                c[b][f] = {
                                    animationID: d,
                                    element: w(a)
                                }
                            })
                        } else b.push(a)
                    });
                    var d = {},
                        k = {};
                    r(c, function (c, f) {
                        var e = c.from,
                            B = c.to;
                        if (e && B) {
                            var p = a[e.animationID],
                                n = a[B.animationID],
                                l = e.animationID.toString();
                            if (!k[l]) {
                                var m = k[l] = {
                                    structural: !0,
                                    beforeStart: function () {
                                        p.beforeStart();
                                        n.beforeStart()
                                    },
                                    close: function () {
                                        p.close();
                                        n.close()
                                    },
                                    classes: P(p.classes, n.classes),
                                    from: p,
                                    to: n,
                                    anchors: []
                                };
                                m.classes.length ? b.push(m) : (b.push(p), b.push(n))
                            }
                            k[l].anchors.push({
                                out: e.element,
                                "in": B.element
                            })
                        } else e = e ? e.animationID : B.animationID, B = e.toString(), d[B] || (d[B] = !0, b.push(a[e]))
                    });
                    return b
                }

                function P(a, b) {
                    a = a.split(" ");
                    b = b.split(" ");
                    for (var c = [], d = 0; d < a.length; d++) {
                        var k = a[d];
                        if ("ng-" !== k.substring(0, 3))
                            for (var f = 0; f < b.length; f++)
                                if (k === b[f]) {
                                    c.push(k);
                                    break
                                }
                    }
                    return c.join(" ")
                }

                function I(a) {
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = f.get(b[c])(a);
                        if (d) return d
                    }
                }

                function B(a, b) {
                    function c(a) {
                        (a = a.data("$$animationRunner")) && a.setHost(b)
                    }
                    a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
                }

                function n() {
                    var a = m.data("$$animationRunner");
                    !a || "leave" === O && v.$$domOperationFired || a.end()
                }

                function p(b) {
                    m.off("$destroy", n);
                    m.removeData("$$animationRunner");
                    ba(m, v);
                    ha(m, v);
                    v.domOperation();
                    L && a.removeClass(m, L);
                    m.removeClass("ng-animate");
                    l.complete(!b)
                }
                v = oa(v);
                var ta = 0 <= ["enter", "move", "leave"].indexOf(O),
                    l = new e({
                        end: function () {
                            p()
                        },
                        cancel: function () {
                            p(!0)
                        }
                    });
                if (!b.length) return p(), l;
                m.data("$$animationRunner", l);
                var k = Fa(m.attr("class"), Fa(v.addClass, v.removeClass)),
                    L = v.tempClasses;
                L && (k += " " + L, v.tempClasses = null);
                var Q;
                ta && (Q = "ng-" + O + "-prepare", a.addClass(m, Q));
                s.push({
                    element: m,
                    classes: k,
                    event: O,
                    structural: ta,
                    options: v,
                    beforeStart: function () {
                        m.addClass("ng-animate");
                        L && a.addClass(m, L);
                        Q && (a.removeClass(m, Q), Q = null)
                    },
                    close: p
                });
                m.on("$destroy", n);
                if (1 < s.length) return l;
                d.$$postDigest(function () {
                    var a = [];
                    r(s, function (b) {
                        b.element.data("$$animationRunner") ? a.push(b) : b.close()
                    });
                    s.length = 0;
                    var b = S(a),
                        c = [];
                    r(b, function (a) {
                        c.push({
                            domNode: z(a.from ? a.from.element : a.element),
                            fn: function () {
                                a.beforeStart();
                                var b, c = a.close;
                                if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                                    var d = I(a);
                                    d && (b = d.start)
                                }
                                b ? (b = b(), b.done(function (a) {
                                        c(!a)
                                    }), B(a, b)) :
                                    c()
                            }
                        })
                    });
                    A(y(c))
                });
                return l
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = Ka(),
            c = Ka();
        this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, f, e, m, A, y, s, ba) {
            function C(a, b) {
                var c = a.parentNode;
                return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++P)) + "-" + a.getAttribute("class") + "-" + b
            }

            function O(e, n, p, m) {
                var l;
                0 < b.count(p) && (l = c.get(p), l || (n = Y(n, "-stagger"), f.addClass(e, n), l = Ia(a, e, m), l.animationDuration =
                    Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), f.removeClass(e, n), c.put(p, l)));
                return l || {}
            }

            function v(a) {
                I.push(a);
                s.waitUntilQuiet(function () {
                    b.flush();
                    c.flush();
                    for (var a = A(), d = 0; d < I.length; d++) I[d](a);
                    I.length = 0
                })
            }

            function H(c, f, e) {
                f = b.get(e);
                f || (f = Ia(a, c, Wa), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1));
                b.put(e, f);
                c = f;
                e = c.animationDelay;
                f = c.transitionDelay;
                c.maxDelay = e && f ? Math.max(e, f) : e || f;
                c.maxDuration = Math.max(c.animationDuration *
                    c.animationIterationCount, c.transitionDuration);
                return c
            }
            var S = Z(f),
                P = 0,
                I = [];
            return function (a, c) {
                function d() {
                    l()
                }

                function s() {
                    l(!0)
                }

                function l(b) {
                    if (!(A || P && J)) {
                        A = !0;
                        J = !1;
                        g.$$skipPreparationClasses || f.removeClass(a, ga);
                        f.removeClass(a, ea);
                        wa(h, !1);
                        pa(h, !1);
                        r(t, function (a) {
                            h.style[a[0]] = ""
                        });
                        S(a, g);
                        ha(a, g);
                        Object.keys(I).length && r(I, function (a, b) {
                            a ? h.style.setProperty(b, a) : h.style.removeProperty(b)
                        });
                        if (g.onDone) g.onDone();
                        fa && fa.length && a.off(fa.join(" "), Q);
                        var c = a.data("$$animateCss");
                        c && (m.cancel(c[0].timer),
                            a.removeData("$$animateCss"));
                        w && w.complete(!b)
                    }
                }

                function k(a) {
                    q.blockTransition && pa(h, a);
                    q.blockKeyframeAnimation && wa(h, !!a)
                }

                function L() {
                    w = new e({
                        end: d,
                        cancel: s
                    });
                    v(N);
                    l();
                    return {
                        $$willAnimate: !1,
                        start: function () {
                            return w
                        },
                        end: d
                    }
                }

                function Q(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || Date.now();
                    b = parseFloat(b.elapsedTime.toFixed(3));
                    Math.max(a - V, 0) >= K && b >= M && (P = !0, l())
                }

                function E() {
                    function b() {
                        if (!A) {
                            k(!1);
                            r(t, function (a) {
                                h.style[a[0]] = a[1]
                            });
                            S(a, g);
                            f.addClass(a, ea);
                            if (q.recalculateTimingStyles) {
                                na =
                                    h.getAttribute("class") + " " + ga;
                                ja = C(h, na);
                                D = H(h, na, ja);
                                ca = D.maxDelay;
                                u = Math.max(ca, 0);
                                M = D.maxDuration;
                                if (0 === M) {
                                    l();
                                    return
                                }
                                q.hasTransitions = 0 < D.transitionDuration;
                                q.hasAnimations = 0 < D.animationDuration
                            }
                            q.applyAnimationDelay && (ca = "boolean" !== typeof g.delay && xa(g.delay) ? parseFloat(g.delay) : ca, u = Math.max(ca, 0), D.animationDelay = ca, da = [qa, ca + "s"], t.push(da), h.style[da[0]] = da[1]);
                            K = 1E3 * u;
                            U = 1E3 * M;
                            if (g.easing) {
                                var d, e = g.easing;
                                q.hasTransitions && (d = R + "TimingFunction", t.push([d, e]), h.style[d] = e);
                                q.hasAnimations &&
                                    (d = $ + "TimingFunction", t.push([d, e]), h.style[d] = e)
                            }
                            D.transitionDuration && fa.push(za);
                            D.animationDuration && fa.push(Aa);
                            V = Date.now();
                            var E = K + 1.5 * U;
                            d = V + E;
                            var e = a.data("$$animateCss") || [],
                                n = !0;
                            if (e.length) {
                                var p = e[0];
                                (n = d > p.expectedEndTime) ? m.cancel(p.timer): e.push(l)
                            }
                            n && (E = m(c, E, !1), e[0] = {
                                timer: E,
                                expectedEndTime: d
                            }, e.push(l), a.data("$$animateCss", e));
                            if (fa.length) a.on(fa.join(" "), Q);
                            g.to && (g.cleanupStyles && La(I, h, Object.keys(g.to)), Ha(a, g))
                        }
                    }

                    function c() {
                        var b = a.data("$$animateCss");
                        if (b) {
                            for (var d =
                                    1; d < b.length; d++) b[d]();
                            a.removeData("$$animateCss")
                        }
                    }
                    if (!A)
                        if (h.parentNode) {
                            var d = function (a) {
                                    if (P) J && a && (J = !1, l());
                                    else if (J = !a, D.animationDuration)
                                        if (a = wa(h, J), J) t.push(a);
                                        else {
                                            var b = t,
                                                c = b.indexOf(a);
                                            0 <= a && b.splice(c, 1)
                                        }
                                },
                                e = 0 < aa && (D.transitionDuration && 0 === W.transitionDuration || D.animationDuration && 0 === W.animationDuration) && Math.max(W.animationDelay, W.transitionDelay);
                            e ? m(b, Math.floor(e * aa * 1E3), !1) : b();
                            G.resume = function () {
                                d(!0)
                            };
                            G.pause = function () {
                                d(!1)
                            }
                        } else l()
                }
                var g = c || {};
                g.$$prepared || (g = oa(Ca(g)));
                var I = {},
                    h = z(a);
                if (!h || !h.parentNode || !ba.enabled()) return L();
                var t = [],
                    x = a.attr("class"),
                    F = Pa(g),
                    A, J, P, w, G, u, K, M, U, V, fa = [];
                if (0 === g.duration || !y.animations && !y.transitions) return L();
                var ia = g.event && X(g.event) ? g.event.join(" ") : g.event,
                    Z = "",
                    T = "";
                ia && g.structural ? Z = Y(ia, "ng-", !0) : ia && (Z = ia);
                g.addClass && (T += Y(g.addClass, "-add"));
                g.removeClass && (T.length && (T += " "), T += Y(g.removeClass, "-remove"));
                g.applyClassesEarly && T.length && S(a, g);
                var ga = [Z, T].join(" ").trim(),
                    na = x + " " + ga,
                    ea = Y(ga, "-active"),
                    x = F.to &&
                    0 < Object.keys(F.to).length;
                if (!(0 < (g.keyframeStyle || "").length || x || ga)) return L();
                var ja, W;
                0 < g.stagger ? (F = parseFloat(g.stagger), W = {
                    transitionDelay: F,
                    animationDelay: F,
                    transitionDuration: 0,
                    animationDuration: 0
                }) : (ja = C(h, na), W = O(h, ga, ja, Xa));
                g.$$skipPreparationClasses || f.addClass(a, ga);
                g.transitionStyle && (F = [R, g.transitionStyle], ka(h, F), t.push(F));
                0 <= g.duration && (F = 0 < h.style[R].length, F = Ja(g.duration, F), ka(h, F), t.push(F));
                g.keyframeStyle && (F = [$, g.keyframeStyle], ka(h, F), t.push(F));
                var aa = W ? 0 <= g.staggerIndex ?
                    g.staggerIndex : b.count(ja) : 0;
                (ia = 0 === aa) && !g.skipBlocking && pa(h, 9999);
                var D = H(h, na, ja),
                    ca = D.maxDelay;
                u = Math.max(ca, 0);
                M = D.maxDuration;
                var q = {};
                q.hasTransitions = 0 < D.transitionDuration;
                q.hasAnimations = 0 < D.animationDuration;
                q.hasTransitionAll = q.hasTransitions && "all" === D.transitionProperty;
                q.applyTransitionDuration = x && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);
                q.applyAnimationDuration = g.duration && q.hasAnimations;
                q.applyTransitionDelay = xa(g.delay) && (q.applyTransitionDuration ||
                    q.hasTransitions);
                q.applyAnimationDelay = xa(g.delay) && q.hasAnimations;
                q.recalculateTimingStyles = 0 < T.length;
                if (q.applyTransitionDuration || q.applyAnimationDuration) M = g.duration ? parseFloat(g.duration) : M, q.applyTransitionDuration && (q.hasTransitions = !0, D.transitionDuration = M, F = 0 < h.style[R + "Property"].length, t.push(Ja(M, F))), q.applyAnimationDuration && (q.hasAnimations = !0, D.animationDuration = M, t.push([Ba, M + "s"]));
                if (0 === M && !q.recalculateTimingStyles) return L();
                if (null != g.delay) {
                    var da;
                    "boolean" !== typeof g.delay &&
                        (da = parseFloat(g.delay), u = Math.max(da, 0));
                    q.applyTransitionDelay && t.push([la, da + "s"]);
                    q.applyAnimationDelay && t.push([qa, da + "s"])
                }
                null == g.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ia);
                K = 1E3 * u;
                U = 1E3 * M;
                g.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < W.animationDelay && 0 === W.animationDuration);
                g.from && (g.cleanupStyles && La(I, h, Object.keys(g.from)), Ga(a, g));
                q.blockTransition || q.blockKeyframeAnimation ?
                    k(M) : g.skipBlocking || pa(h, !1);
                return {
                    $$willAnimate: !0,
                    end: d,
                    start: function () {
                        if (!A) return G = {
                            end: d,
                            cancel: s,
                            resume: null,
                            pause: null
                        }, w = new e(G), v(E), w
                    }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateCssDriver");
        this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, f, e, m, A) {
            function y(a) {
                return a.replace(/\bng-\S+\b/g, "")
            }

            function s(a, b) {
                G(a) && (a = a.split(" "));
                G(b) && (b = b.split(" "));
                return a.filter(function (a) {
                    return -1 ===
                        b.indexOf(a)
                }).join(" ")
            }

            function ba(c, e, f) {
                function m(a) {
                    var b = {},
                        c = z(a).getBoundingClientRect();
                    r(["width", "height", "top", "left"], function (a) {
                        var d = c[a];
                        switch (a) {
                            case "top":
                                d += v.scrollTop;
                                break;
                            case "left":
                                d += v.scrollLeft
                        }
                        b[a] = Math.floor(d) + "px"
                    });
                    return b
                }

                function n() {
                    var c = y(f.attr("class") || ""),
                        d = s(c, l),
                        c = s(l, c),
                        d = a(A, {
                            to: m(f),
                            addClass: "ng-anchor-in " + d,
                            removeClass: "ng-anchor-out " + c,
                            delay: !0
                        });
                    return d.$$willAnimate ? d : null
                }

                function p() {
                    A.remove();
                    e.removeClass("ng-animate-shim");
                    f.removeClass("ng-animate-shim")
                }
                var A = w(z(e).cloneNode(!0)),
                    l = y(A.attr("class") || "");
                e.addClass("ng-animate-shim");
                f.addClass("ng-animate-shim");
                A.addClass("ng-anchor");
                H.append(A);
                var k;
                c = function () {
                    var c = a(A, {
                        addClass: "ng-anchor-out",
                        delay: !0,
                        from: m(e)
                    });
                    return c.$$willAnimate ? c : null
                }();
                if (!c && (k = n(), !k)) return p();
                var L = c || k;
                return {
                    start: function () {
                        function a() {
                            c && c.end()
                        }
                        var b, c = L.start();
                        c.done(function () {
                            c = null;
                            if (!k && (k = n())) return c = k.start(), c.done(function () {
                                c = null;
                                p();
                                b.complete()
                            }), c;
                            p();
                            b.complete()
                        });
                        return b = new d({
                            end: a,
                            cancel: a
                        })
                    }
                }
            }

            function C(a, b, c, e) {
                var f = O(a, N),
                    m = O(b, N),
                    y = [];
                r(e, function (a) {
                    (a = ba(c, a.out, a["in"])) && y.push(a)
                });
                if (f || m || 0 !== y.length) return {
                    start: function () {
                        function a() {
                            r(b, function (a) {
                                a.end()
                            })
                        }
                        var b = [];
                        f && b.push(f.start());
                        m && b.push(m.start());
                        r(y, function (a) {
                            b.push(a.start())
                        });
                        var c = new d({
                            end: a,
                            cancel: a
                        });
                        d.all(b, function (a) {
                            c.complete(a)
                        });
                        return c
                    }
                }
            }

            function O(c) {
                var d = c.element,
                    e = c.options || {};
                c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone =
                    e.domOperation));
                e.preparationClasses && (e.event = ea(e.event, e.preparationClasses));
                c = a(d, e);
                return c.$$willAnimate ? c : null
            }
            if (!e.animations && !e.transitions) return N;
            var v = A[0].body;
            c = z(f);
            var H = w(c.parentNode && 11 === c.parentNode.nodeType || v.contains(c) ? c : v);
            return function (a) {
                return a.from && a.to ? C(a.from, a.to, a.classes, a.anchors) : O(a)
            }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
            function f(c) {
                c = X(c) ? c : c.split(" ");
                for (var d = [], e = {}, f = 0; f < c.length; f++) {
                    var r = c[f],
                        w = a.$$registeredAnimations[r];
                    w && !e[r] && (d.push(b.get(w)), e[r] = !0)
                }
                return d
            }
            var e = Z(d);
            return function (a, b, d, s) {
                function w() {
                    s.domOperation();
                    e(a, s)
                }

                function C(a, b, d, e, f) {
                    switch (d) {
                        case "animate":
                            b = [b, e.from, e.to, f];
                            break;
                        case "setClass":
                            b = [b, G, P, f];
                            break;
                        case "addClass":
                            b = [b, G, f];
                            break;
                        case "removeClass":
                            b = [b, P, f];
                            break;
                        default:
                            b = [b, f]
                    }
                    b.push(e);
                    if (a = a.apply(a, b))
                        if (Da(a.start) && (a = a.start()), a instanceof c) a.done(f);
                        else if (Da(a)) return a;
                    return N
                }

                function z(a,
                    b, d, e, f) {
                    var l = [];
                    r(e, function (e) {
                        var m = e[f];
                        m && l.push(function () {
                            var e, f, g = !1,
                                h = function (a) {
                                    g || (g = !0, (f || N)(a), e.complete(!a))
                                };
                            e = new c({
                                end: function () {
                                    h()
                                },
                                cancel: function () {
                                    h(!0)
                                }
                            });
                            f = C(m, a, b, d, function (a) {
                                h(!1 === a)
                            });
                            return e
                        })
                    });
                    return l
                }

                function v(a, b, d, e, f) {
                    var l = z(a, b, d, e, f);
                    if (0 === l.length) {
                        var h, m;
                        "beforeSetClass" === f ? (h = z(a, "removeClass", d, e, "beforeRemoveClass"), m = z(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = z(a, "removeClass", d, e, "removeClass"), m = z(a, "addClass", d, e, "addClass"));
                        h && (l = l.concat(h));
                        m && (l = l.concat(m))
                    }
                    if (0 !== l.length) return function (a) {
                        var b = [];
                        l.length && r(l, function (a) {
                            b.push(a())
                        });
                        b.length ? c.all(b, a) : a();
                        return function (a) {
                            r(b, function (b) {
                                a ? b.cancel() : b.end()
                            })
                        }
                    }
                }
                var H = !1;
                3 === arguments.length && ra(d) && (s = d, d = null);
                s = oa(s);
                d || (d = a.attr("class") || "", s.addClass && (d += " " + s.addClass), s.removeClass && (d += " " + s.removeClass));
                var G = s.addClass,
                    P = s.removeClass,
                    I = f(d),
                    B, n;
                if (I.length) {
                    var p, K;
                    "leave" === b ? (K = "leave", p = "afterLeave") : (K = "before" + b.charAt(0).toUpperCase() +
                        b.substr(1), p = b);
                    "enter" !== b && "move" !== b && (B = v(a, b, s, I, K));
                    n = v(a, b, s, I, p)
                }
                if (B || n) {
                    var l;
                    return {
                        $$willAnimate: !0,
                        end: function () {
                            l ? l.end() : (H = !0, w(), ha(a, s), l = new c, l.complete(!0));
                            return l
                        },
                        start: function () {
                            function b(c) {
                                H = !0;
                                w();
                                ha(a, s);
                                l.complete(c)
                            }
                            if (l) return l;
                            l = new c;
                            var d, e = [];
                            B && e.push(function (a) {
                                d = B(a)
                            });
                            e.length ? e.push(function (a) {
                                w();
                                a(!0)
                            }) : w();
                            n && e.push(function (a) {
                                d = n(a)
                            });
                            l.setHost({
                                end: function () {
                                    H || ((d || N)(void 0), b(void 0))
                                },
                                cancel: function () {
                                    H || ((d || N)(!0), b(!0))
                                }
                            });
                            c.chain(e,
                                b);
                            return l
                        }
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver");
        this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
            function d(c) {
                return a(c.element, c.event, c.classes, c.options)
            }
            return function (a) {
                if (a.from && a.to) {
                    var b = d(a.from),
                        m = d(a.to);
                    if (b || m) return {
                        start: function () {
                            function a() {
                                return function () {
                                    r(d, function (a) {
                                        a.end()
                                    })
                                }
                            }
                            var d = [];
                            b && d.push(b.start());
                            m && d.push(m.start());
                            c.all(d, function (a) {
                                f.complete(a)
                            });
                            var f = new c({
                                end: a(),
                                cancel: a()
                            });
                            return f
                        }
                    }
                } else return d(a)
            }
        }]
    }])
})(window, window.angular);


/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (y, l) {
    'use strict';

    function w() {
        return ["$animate", function (t) {
            return {
                restrict: "AE",
                transclude: "element",
                priority: 1,
                terminal: !0,
                require: "^^ngMessages",
                link: function (u, n, a, c, f) {
                    var e = n[0],
                        d, r = a.ngMessage || a.when;
                    a = a.ngMessageExp || a.whenExp;
                    var k = function (a) {
                        d = a ? p(a) ? a : a.split(/[\s,]+/) : null;
                        c.reRender()
                    };
                    a ? (k(u.$eval(a)), u.$watchCollection(a, k)) : k(r);
                    var g, s;
                    c.register(e, s = {
                        test: function (a) {
                            var m = d;
                            a = m ? p(m) ? 0 <= m.indexOf(a) : m.hasOwnProperty(a) : void 0;
                            return a
                        },
                        attach: function () {
                            g || f(function (a,
                                m) {
                                t.enter(a, null, n);
                                g = a;
                                var d = g.$$attachId = c.getAttachId();
                                g.on("$destroy", function () {
                                    g && g.$$attachId === d && (c.deregister(e), s.detach());
                                    m.$destroy()
                                })
                            })
                        },
                        detach: function () {
                            if (g) {
                                var a = g;
                                g = null;
                                t.leave(a)
                            }
                        }
                    })
                }
            }
        }]
    }
    var v, p, q, x;
    l.module("ngMessages", [], function () {
        v = l.forEach;
        p = l.isArray;
        q = l.isString;
        x = l.element
    }).directive("ngMessages", ["$animate", function (t) {
        function u(a, c) {
            return q(c) && 0 === c.length || n(a.$eval(c))
        }

        function n(a) {
            return q(a) ? a.length : !!a
        }
        return {
            require: "ngMessages",
            restrict: "AE",
            controller: ["$element",
                "$scope", "$attrs",
                function (a, c, f) {
                    function e(a, c) {
                        for (var b = c, d = []; b && b !== a;) {
                            var h = b.$$ngMessageNode;
                            if (h && h.length) return g[h];
                            b.childNodes.length && -1 === d.indexOf(b) ? (d.push(b), b = b.childNodes[b.childNodes.length - 1]) : b.previousSibling ? b = b.previousSibling : (b = b.parentNode, d.push(b))
                        }
                    }
                    var d = this,
                        r = 0,
                        k = 0;
                    this.getAttachId = function () {
                        return k++
                    };
                    var g = this.messages = {},
                        s, l;
                    this.render = function (m) {
                        m = m || {};
                        s = !1;
                        l = m;
                        for (var g = u(c, f.ngMessagesMultiple) || u(c, f.multiple), b = [], e = {}, h = d.head, r = !1, k = 0; null != h;) {
                            k++;
                            var q = h.message,
                                p = !1;
                            r || v(m, function (a, b) {
                                !p && n(a) && q.test(b) && !e[b] && (p = e[b] = !0, q.attach())
                            });
                            p ? r = !g : b.push(q);
                            h = h.next
                        }
                        v(b, function (a) {
                            a.detach()
                        });
                        b.length !== k ? t.setClass(a, "ng-active", "ng-inactive") : t.setClass(a, "ng-inactive", "ng-active")
                    };
                    c.$watchCollection(f.ngMessages || f["for"], d.render);
                    a.on("$destroy", function () {
                        v(g, function (a) {
                            a.message.detach()
                        })
                    });
                    this.reRender = function () {
                        s || (s = !0, c.$evalAsync(function () {
                            s && l && d.render(l)
                        }))
                    };
                    this.register = function (c, f) {
                        var b = r.toString();
                        g[b] = {
                            message: f
                        };
                        var k = a[0],
                            h = g[b];
                        d.head ? (k = e(k, c)) ? (h.next = k.next, k.next = h) : (h.next = d.head, d.head = h) : d.head = h;
                        c.$$ngMessageNode = b;
                        r++;
                        d.reRender()
                    };
                    this.deregister = function (c) {
                        var f = c.$$ngMessageNode;
                        delete c.$$ngMessageNode;
                        var b = g[f];
                        (c = e(a[0], c)) ? c.next = b.next: d.head = b.next;
                        delete g[f];
                        d.reRender()
                    }
                }
            ]
        }
    }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function (l, p, n) {
        function a(a, f) {
            var e = n.$$createComment ? n.$$createComment("ngMessagesInclude", f) : p[0].createComment(" ngMessagesInclude: " +
                    f + " "),
                e = x(e);
            a.after(e);
            a.remove()
        }
        return {
            restrict: "AE",
            require: "^^ngMessages",
            link: function (c, f, e) {
                var d = e.ngMessagesInclude || e.src;
                l(d).then(function (e) {
                    c.$$destroyed || (q(e) && !e.trim() ? a(f, d) : n(e)(c, function (c) {
                        f.after(c);
                        a(f, d)
                    }))
                })
            }
        }
    }]).directive("ngMessage", w()).directive("ngMessageExp", w())
})(window, window.angular);