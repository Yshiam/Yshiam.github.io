!
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.app = e() : t.app = e()
} (this,
function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(i.exports, i, i.exports, e),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    } (function(t) {
        for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
        case "function":
            break;
        case "object":
            t[e] = function(e) {
                var n = e.slice(1),
                r = t[e[0]];
                return function(t, e, i) {
                    r.apply(this, [t, e, i].concat(n))
                }
            } (t[e]);
            break;
        default:
            t[e] = t[t[e]]
        }
        return t
    } ([function(t, e, n) {
        "use strict";
        function r() {
            return f.async(function(t) {
                for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.prev = 0,
                    t.next = 3,
                    f.awrap(o(k, g[0], 0, x, !0, 1));
                case 3:
                    return t.next = 5,
                    f.awrap(o(k, g[1], 0, x, !0, 1));
                case 5:
                    t.next = 14;
                    break;
                case 7:
                    if (t.prev = 7, t.t0 = t["catch"](0), "SKIP IT" !== t.t0.message) {
                        t.next = 13;
                        break
                    }
                    i(),
                    t.next = 14;
                    break;
                case 13:
                    throw t.t0;
                case 14:
                case "end":
                    return t.stop()
                }
            },
            null, this, [[0, 7]])
        }
        function i() {
            var t, e, n, r;
            return f.async(function(i) {
                for (;;) switch (i.prev = i.next) {
                case 0:
                    if (!A) {
                        i.next = 2;
                        break
                    }
                    return i.abrupt("return");
                case 2:
                    for (A = !0, S.innerHTML = v, t = g.join("\n"), j.textContent = "#work-text * { " + P + "transition: none; }", j.textContent += t, e = "", n = 0; n < t.length; n++) e = b.handleChar(e, t[n]);
                    k.innerHTML = e,
                    l(),
                    r = Date.now();
                case 12:
                    if (! (Date.now() - 1e3 > r)) {
                        i.next = 19;
                        break
                    }
                    return E.scrollTop = 1 / 0,
                    k.scrollTop = S.scrollTop = 1 / 0,
                    i.next = 17,
                    f.awrap(p.delay(16));
                case 17:
                    i.next = 12;
                    break;
                case 19:
                case "end":
                    return i.stop()
                }
            },
            null, this)
        }
        function o(t, e, n, r, i, s) {
            var a, c, u;
            return f.async(function(l) {
                for (;;) switch (l.prev = l.next) {
                case 0:
                    if (!F) {
                        l.next = 2;
                        break
                    }
                    throw new Error("SKIP IT");
                case 2:
                    if (a = e.slice(n, n + s), n += s, t.scrollTop = t.scrollHeight, i ? b(t, a, j) : b.simple(t, a), !(n < e.length)) {
                        l.next = 15;
                        break
                    }
                    c = r,
                    u = e.slice(n - 2, n + 1),
                    R.test(u) && (c *= 70),
                    L.test(u) && (c *= 50);
                case 11:
                    return l.next = 13,
                    f.awrap(p.delay(c));
                case 13:
                    if (O) {
                        l.next = 11;
                        break
                    }
                case 14:
                    return l.abrupt("return", o(t, e, n, r, i, s));
                case 15:
                case "end":
                    return l.stop()
                }
            },
            null, this)
        }
        function s() {
            P = n(32)(),
            P && (g = g.map(function(t) {
                return t.replace(/-webkit-/g, P)
            }))
        }
        function a() {
            var t = document.createElement("style");
            t.textContent = _,
            document.head.insertBefore(t, document.getElementsByTagName("style")[0]),
            j = document.getElementById("style-tag"),
            k = document.getElementById("style-text"),
            E = document.getElementById("work-text"),
            S = document.getElementById("pgp-text"),
            T = document.getElementById("skip-animation"),
            C = document.getElementById("pause-resume")
        }
        function c() {
            var t = document.getElementById("header");
            t.innerHTML = m
        }
        function u() {
            k.addEventListener("input",
            function() {
                j.textContent = k.textContent
            }),
            T.addEventListener("click",
            function(t) {
                t.preventDefault(),
                F = !0
            }),
            C.addEventListener("click",
            function(t) {
                t.preventDefault(),
                O ? (C.textContent = "Pause ||", O = !1) : (C.textContent = "Resume >>", O = !0)
            })
        }
        function l() {
            if (!E.classList.contains("flipped")) {
                E.innerHTML = '<div class="text">' + y(d) + '</div><div class="md">' + y(h(d)) + "<div>",
                E.classList.add("flipped"),
                E.scrollTop = 9999;
                var t = 0;
                n(82)(E,
                function(e, n) {
                    var r, i, o;
                    return f.async(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (r = E.classList.contains("flipped"), i = (E.scrollHeight - E.clientHeight) / 2, o = r ? E.scrollTop < i: E.scrollTop > i, !o) {
                                e.next = 12;
                                break
                            }
                            return E.classList.toggle("flipped"),
                            t = !0,
                            e.next = 10,
                            f.awrap(p.delay(500));
                        case 10:
                            E.scrollTop = r ? 0 : 9999,
                            t = !1;
                        case 12:
                            E.scrollTop += n * (r ? -1 : 1);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                    },
                    null, this)
                },
                !0)
            }
        }
        var f = n(74)["default"];
        n(77);
        var p = n(76),
        h = n(78).markdown.toHTML,
        d = n(93),
        v = n(84),
        m = n(83),
        g = [0, 1, 2, 3].map(function(t) {
            return n(31)("./styles" + t + ".css")
        }),
        _ = n(85),
        y = n(33),
        b = n(34),
        w = "localhost" === window.location.hostname,
        x = w ? 0 : 16,
        j = void 0,
        k = void 0,
        E = void 0,
        S = void 0,
        T = void 0,
        C = void 0,
        F = !1,
        A = !1,
        O = !1,
        P = void 0;
        document.addEventListener("DOMContentLoaded",
        function() {
            s(),
            c(),
            a(),
            u(),
            r()
        });
        var R = /[\.\?\!]\s$/,
        L = /[^\/]\n\n$/
    },
    function(t, e) {
        var n = Object;
        t.exports = {
            create: n.create,
            getProto: n.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: n.getOwnPropertyDescriptor,
            setDesc: n.defineProperty,
            setDescs: n.defineProperties,
            getKeys: n.keys,
            getNames: n.getOwnPropertyNames,
            getSymbols: n.getOwnPropertySymbols,
            each: [].forEach
        }
    },
    function(t, e, n) {
        var r = n(27)("wks"),
        i = n(29),
        o = n(3).Symbol;
        t.exports = function(t) {
            return r[t] || (r[t] = o && o[t] || (o || i)("Symbol." + t))
        }
    },
    function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    function(t, e) {
        var n = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = n)
    },
    function(t, e, n) {
        var r = n(11);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    function(t, e, n) {
        var r = n(15);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    function(t, e) {
        t.exports = {}
    },
    function(t, e, n) {
        t.exports = !n(24)(function() {
            return 7 != Object.defineProperty({},
            "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    function(t, e, n) {
        var r = n(3),
        i = n(4),
        o = n(7),
        s = "prototype",
        a = function(t, e, n) {
            var c, u, l, f = t & a.F,
            p = t & a.G,
            h = t & a.S,
            d = t & a.P,
            v = t & a.B,
            m = t & a.W,
            g = p ? i: i[e] || (i[e] = {}),
            _ = p ? r: h ? r[e] : (r[e] || {})[s];
            p && (n = e);
            for (c in n) u = !f && _ && c in _,
            u && c in g || (l = u ? _[c] : n[c], g[c] = p && "function" != typeof _[c] ? n[c] : v && u ? o(l, r) : m && _[c] == l ?
            function(t) {
                var e = function(e) {
                    return this instanceof t ? new t(e) : t(e)
                };
                return e[s] = t[s],
                e
            } (l) : d && "function" == typeof l ? o(Function.call, l) : l, d && ((g[s] || (g[s] = {}))[c] = l))
        };
        a.F = 1,
        a.G = 2,
        a.S = 4,
        a.P = 8,
        a.B = 16,
        a.W = 32,
        t.exports = a
    },
    function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t: "function" == typeof t
        }
    },
    function(t, e, n) {
        var r = n(1).setDesc,
        i = n(16),
        o = n(2)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t: t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    function(t, e, n) {
        var r = n(50),
        i = n(23);
        t.exports = function(t) {
            return r(i(t))
        }
    },
    function(t, e) {
        function n() {
            u = !1,
            s.length ? c = s.concat(c) : l = -1,
            c.length && r()
        }
        function r() {
            if (!u) {
                var t = setTimeout(n);
                u = !0;
                for (var e = c.length; e;) {
                    for (s = c, c = []; ++l < e;) s && s[l].run();
                    l = -1,
                    e = c.length
                }
                s = null,
                u = !1,
                clearTimeout(t)
            }
        }
        function i(t, e) {
            this.fun = t,
            this.array = e
        }
        function o() {}
        var s, a = t.exports = {},
        c = [],
        u = !1,
        l = -1;
        a.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new i(t, e)),
            1 !== c.length || u || setTimeout(r, 0)
        },
        i.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        a.title = "browser",
        a.browser = !0,
        a.env = {},
        a.argv = [],
        a.version = "",
        a.versions = {},
        a.on = o,
        a.addListener = o,
        a.once = o,
        a.off = o,
        a.removeListener = o,
        a.removeAllListeners = o,
        a.emit = o,
        a.binding = function(t) {
            throw new Error("process.binding is not supported")
        },
        a.cwd = function() {
            return "/"
        },
        a.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        },
        a.umask = function() {
            return 0
        }
    },
    function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    function(t, e, n) {
        var r = n(1),
        i = n(19);
        t.exports = n(9) ?
        function(t, e, n) {
            return r.setDesc(t, e, i(1, n))
        }: function(t, e, n) {
            return t[e] = n,
            t
        }
    },
    function(t, e) {
        t.exports = !0
    },
    function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    function(t, e, n) {
        t.exports = n(17)
    },
    function(t, e, n) { (function(t, r) {
            function i(t, e) {
                this._id = t,
                this._clearFn = e
            }
            var o = n(14).nextTick,
            s = Function.prototype.apply,
            a = Array.prototype.slice,
            c = {},
            u = 0;
            e.setTimeout = function() {
                return new i(s.call(setTimeout, window, arguments), clearTimeout)
            },
            e.setInterval = function() {
                return new i(s.call(setInterval, window, arguments), clearInterval)
            },
            e.clearTimeout = e.clearInterval = function(t) {
                t.close()
            },
            i.prototype.unref = i.prototype.ref = function() {},
            i.prototype.close = function() {
                this._clearFn.call(window, this._id)
            },
            e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = e
            },
            e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = -1
            },
            e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                },
                e))
            },
            e.setImmediate = "function" == typeof t ? t: function(t) {
                var n = u++,
                r = arguments.length < 2 ? !1 : a.call(arguments, 1);
                return c[n] = !0,
                o(function() {
                    c[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n))
                }),
                n
            },
            e.clearImmediate = "function" == typeof r ? r: function(t) {
                delete c[t]
            }
        }).call(e, n(21).setImmediate, n(21).clearImmediate)
    },
    function(t, e, n) {
        var r = n(6),
        i = n(2)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        } ());
        t.exports = function(t) {
            var e, n, s;
            return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = (e = Object(t))[i]) ? n: o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments": s
        }
    },
    function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    function(t, e) {
        t.exports = function(t) {
            try {
                return !! t()
            } catch(e) {
                return ! 0
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(18),
        i = n(10),
        o = n(20),
        s = n(17),
        a = n(16),
        c = n(8),
        u = n(54),
        l = n(12),
        f = n(1).getProto,
        p = n(2)("iterator"),
        h = !([].keys && "next" in [].keys()),
        d = "@@iterator",
        v = "keys",
        m = "values",
        g = function() {
            return this
        };
        t.exports = function(t, e, n, _, y, b, w) {
            u(n, e, _);
            var x, j, k = function(t) {
                if (!h && t in C) return C[t];
                switch (t) {
                case v:
                    return function() {
                        return new n(this, t)
                    };
                case m:
                    return function() {
                        return new n(this, t)
                    }
                }
                return function() {
                    return new n(this, t)
                }
            },
            E = e + " Iterator",
            S = y == m,
            T = !1,
            C = t.prototype,
            F = C[p] || C[d] || y && C[y],
            A = F || k(y);
            if (F) {
                var O = f(A.call(new t));
                l(O, E, !0),
                !r && a(C, d) && s(O, p, g),
                S && F.name !== m && (T = !0, A = function() {
                    return F.call(this)
                })
            }
            if (r && !w || !h && !T && C[p] || s(C, p, A), c[e] = A, c[E] = g, y) if (x = {
                values: S ? A: k(m),
                keys: b ? A: k(v),
                entries: S ? k("entries") : A
            },
            w) for (j in x) j in C || o(C, j, x[j]);
            else i(i.P + i.F * (h || T), e, x);
            return x
        }
    },
    function(t, e, n) {
        var r = n(1).getDesc,
        i = n(11),
        o = n(5),
        s = function(t, e) {
            if (o(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ?
            function(t, e, i) {
                try {
                    i = n(7)(Function.call, r(Object.prototype, "__proto__").set, 2),
                    i(t, []),
                    e = !(t instanceof Array)
                } catch(o) {
                    e = !0
                }
                return function(t, n) {
                    return s(t, n),
                    e ? t.__proto__ = n: i(t, n),
                    t
                }
            } ({},
            !1) : void 0),
            check: s
        }
    },
    function(t, e, n) {
        var r = n(3),
        i = "__core-js_shared__",
        o = r[i] || (r[i] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    },
    function(t, e) {
        var n = Math.ceil,
        r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r: n)(t)
        }
    },
    function(t, e) {
        var n = 0,
        r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "": t, ")_", (++n + r).toString(36))
        }
    },
    function(t, e) {},
    function(t, e, n) {
        function r(t) {
            return n(i(t))
        }
        function i(t) {
            return o[t] ||
            function() {
                throw new Error("Cannot find module '" + t + "'.")
            } ()
        }
        var o = {
            "./styles0.css": 86,
            "./styles1.css": 87,
            "./styles2.css": 88,
            "./styles3.css": 89,
            "./stylesheets/github-light.css": 90,
            "./stylesheets/normalize.css": 91,
            "./stylesheets/stylesheet.css": 92
        };
        r.keys = function() {
            return Object.keys(o)
        },
        r.resolve = i,
        t.exports = r,
        r.id = 31
    },
    function(t, e) {
        "use strict";
        t.exports = function() {
            var t = window.getComputedStyle(document.documentElement, ""),
            e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1];
            return "-" + e + "-"
        }
    },
    function(t, e) {
        "use strict";
        function n(t, e, n) {
            var r = t.match(e);
            if (r && r.length) for (var i = 0; i < r.length; i++) t = t.replace(r[i], "function" == typeof n ? n(r[i]) : n);
            return t
        }
        var r = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w\-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w!\/]*))?)/g;
        t.exports = function(t) {
            return n(t, r,
            function(e) {
                if (/(src=|href=|mailto:)/.test(t.slice(t.indexOf(e) - 7).slice(0, 7))) return e;
                var n = e;
                return "http" !== e.slice(0, 4) && (n = "http://" + n),
                '<a href="' + n + '" target="_blank">' + e.replace("www.", "") + "</a>"
            })
        }
    },
    function(t, e) {
        "use strict";
        var n = "",
        r = {};
        t.exports = function(e, i, o) {
            var s = r[e.id];
            s || (s = r[e.id] = e.innerHTML),
            s = t.exports.handleChar(s, i),
            e.innerHTML = r[e.id] = s,
            n += i,
            ";" === i && (o.textContent += n, n = "")
        },
        t.exports.simple = function(t, e) {
            t.innerHTML += e
        };
        var i = !1,
        o = /(\/\*(?:[^](?!\/\*))*\*)$/,
        s = /([a-zA-Z- ^\n]*)$/,
        a = /([^:]*)$/,
        c = /(.*)$/,
        u = /\dp/,
        l = /p$/;
        t.exports.handleChar = function(t, e) {
            return i && "/" !== e ? t += e: "/" === e && i === !1 ? (i = !0, t += e) : "/" === e && "*" === t.slice( - 1) && i === !0 ? (i = !1, t = t.replace(o, '<span class="comment">$1/</span>')) : ":" === e ? t = t.replace(s, '<span class="key">$1</span>:') : ";" === e ? t = t.replace(a, '<span class="value">$1</span>;') : "{" === e ? t = t.replace(c, '<span class="selector">$1</span>{') : "x" === e && u.test(t.slice( - 2)) ? t = t.replace(l, '<span class="value px">px</span>') : t += e,
            t
        }
    },
    function(t, e, n) {
        t.exports = {
            "default": n(39),
            __esModule: !0
        }
    },
    function(t, e, n) {
        t.exports = {
            "default": n(40),
            __esModule: !0
        }
    },
    function(t, e, n) {
        t.exports = {
            "default": n(41),
            __esModule: !0
        }
    },
    function(t, e, n) {
        t.exports = {
            "default": n(42),
            __esModule: !0
        }
    },
    function(t, e, n) {
        var r = n(1);
        t.exports = function(t, e) {
            return r.create(t, e)
        }
    },
    function(t, e, n) {
        n(69),
        t.exports = n(4).Object.setPrototypeOf
    },
    function(t, e, n) {
        n(30),
        n(71),
        n(73),
        n(70),
        t.exports = n(4).Promise
    },
    function(t, e, n) {
        n(72),
        n(30),
        t.exports = n(4).Symbol
    },
    function(t, e) {
        t.exports = function() {}
    },
    function(t, e, n) {
        var r = n(11),
        i = n(3).document,
        o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    },
    function(t, e, n) {
        var r = n(1);
        t.exports = function(t) {
            var e = r.getKeys(t),
            n = r.getSymbols;
            if (n) for (var i, o = n(t), s = r.isEnum, a = 0; o.length > a;) s.call(t, i = o[a++]) && e.push(i);
            return e
        }
    },
    function(t, e, n) {
        var r = n(7),
        i = n(53),
        o = n(51),
        s = n(5),
        a = n(66),
        c = n(67);
        t.exports = function(t, e, n, u) {
            var l, f, p, h = c(t),
            d = r(n, u, e ? 2 : 1),
            v = 0;
            if ("function" != typeof h) throw TypeError(t + " is not iterable!");
            if (o(h)) for (l = a(t.length); l > v; v++) e ? d(s(f = t[v])[0], f[1]) : d(t[v]);
            else for (p = h.call(t); ! (f = p.next()).done;) i(p, d, f.value, e)
        }
    },
    function(t, e, n) {
        var r = n(13),
        i = n(1).getNames,
        o = {}.toString,
        s = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function(t) {
            try {
                return i(t)
            } catch(e) {
                return s.slice()
            }
        };
        t.exports.get = function(t) {
            return s && "[object Window]" == o.call(t) ? a(t) : i(r(t))
        }
    },
    function(t, e, n) {
        t.exports = n(3).document && document.documentElement
    },
    function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    },
    function(t, e, n) {
        var r = n(6);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    function(t, e, n) {
        var r = n(8),
        i = n(2)("iterator"),
        o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    },
    function(t, e, n) {
        var r = n(6);
        t.exports = Array.isArray ||
        function(t) {
            return "Array" == r(t)
        }
    },
    function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch(o) {
                var s = t["return"];
                throw void 0 !== s && r(s.call(t)),
                o
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(1),
        i = n(19),
        o = n(12),
        s = {};
        n(17)(s, n(2)("iterator"),
        function() {
            return this
        }),
        t.exports = function(t, e, n) {
            t.prototype = r.create(s, {
                next: i(1, n)
            }),
            o(t, e + " Iterator")
        }
    },
    function(t, e, n) {
        var r = n(2)("iterator"),
        i = !1;
        try {
            var o = [7][r]();
            o["return"] = function() {
                i = !0
            },
            Array.from(o,
            function() {
                throw 2
            })
        } catch(s) {}
        t.exports = function(t, e) {
            if (!e && !i) return ! 1;
            var n = !1;
            try {
                var o = [7],
                s = o[r]();
                s.next = function() {
                    n = !0
                },
                o[r] = function() {
                    return s
                },
                t(o)
            } catch(a) {}
            return n
        }
    },
    function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    function(t, e, n) {
        var r = n(1),
        i = n(13);
        t.exports = function(t, e) {
            for (var n, o = i(t), s = r.getKeys(o), a = s.length, c = 0; a > c;) if (o[n = s[c++]] === e) return n
        }
    },
    function(t, e, n) {
        var r, i, o, s = n(3),
        a = n(65).set,
        c = s.MutationObserver || s.WebKitMutationObserver,
        u = s.process,
        l = s.Promise,
        f = "process" == n(6)(u),
        p = function() {
            var t, e, n;
            for (f && (t = u.domain) && (u.domain = null, t.exit()); r;) e = r.domain,
            n = r.fn,
            e && e.enter(),
            n(),
            e && e.exit(),
            r = r.next;
            i = void 0,
            t && t.enter()
        };
        if (f) o = function() {
            u.nextTick(p)
        };
        else if (c) {
            var h = 1,
            d = document.createTextNode("");
            new c(p).observe(d, {
                characterData: !0
            }),
            o = function() {
                d.data = h = -h
            }
        } else o = l && l.resolve ?
        function() {
            l.resolve().then(p)
        }: function() {
            a.call(s, p)
        };
        t.exports = function(t) {
            var e = {
                fn: t,
                next: void 0,
                domain: f && u.domain
            };
            i && (i.next = e),
            r || (r = e, o()),
            i = e
        }
    },
    function(t, e, n) {
        var r = n(20);
        t.exports = function(t, e) {
            for (var n in e) r(t, n, e[n]);
            return t
        }
    },
    function(t, e) {
        t.exports = Object.is ||
        function(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e: t != t && e != e
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(4),
        i = n(1),
        o = n(9),
        s = n(2)("species");
        t.exports = function(t) {
            var e = r[t];
            o && e && !e[s] && i.setDesc(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    function(t, e, n) {
        var r = n(5),
        i = n(15),
        o = n(2)("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || void 0 == (n = r(s)[o]) ? e: i(n)
        }
    },
    function(t, e) {
        t.exports = function(t, e, n) {
            if (! (t instanceof e)) throw TypeError(n + ": use the 'new' operator!");
            return t
        }
    },
    function(t, e, n) {
        var r = n(28),
        i = n(23);
        t.exports = function(t) {
            return function(e, n) {
                var o, s, a = String(i(e)),
                c = r(n),
                u = a.length;
                return 0 > c || c >= u ? t ? "": void 0 : (o = a.charCodeAt(c), 55296 > o || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o: t ? a.slice(c, c + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
            }
        }
    },
    function(t, e, n) {
        var r, i, o, s = n(7),
        a = n(49),
        c = n(48),
        u = n(44),
        l = n(3),
        f = l.process,
        p = l.setImmediate,
        h = l.clearImmediate,
        d = l.MessageChannel,
        v = 0,
        m = {},
        g = "onreadystatechange",
        _ = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t],
                e()
            }
        },
        y = function(t) {
            _.call(t.data)
        };
        p && h || (p = function(t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return m[++v] = function() {
                a("function" == typeof t ? t: Function(t), e)
            },
            r(v),
            v
        },
        h = function(t) {
            delete m[t]
        },
        "process" == n(6)(f) ? r = function(t) {
            f.nextTick(s(_, t, 1))
        }: d ? (i = new d, o = i.port2, i.port1.onmessage = y, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
            l.postMessage(t + "", "*")
        },
        l.addEventListener("message", y, !1)) : r = g in u("script") ?
        function(t) {
            c.appendChild(u("script"))[g] = function() {
                c.removeChild(this),
                _.call(t)
            }
        }: function(t) {
            setTimeout(s(_, t, 1), 0)
        }),
        t.exports = {
            set: p,
            clear: h
        }
    },
    function(t, e, n) {
        var r = n(28),
        i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    },
    function(t, e, n) {
        var r = n(22),
        i = n(2)("iterator"),
        o = n(8);
        t.exports = n(4).getIteratorMethod = function(t) {
            return void 0 != t ? t[i] || t["@@iterator"] || o[r(t)] : void 0
        }
    },
    function(t, e, n) {
        "use strict";
        var r = n(43),
        i = n(56),
        o = n(8),
        s = n(13);
        t.exports = n(25)(Array, "Array",
        function(t, e) {
            this._t = s(t),
            this._i = 0,
            this._k = e
        },
        function() {
            var t = this._t,
            e = this._k,
            n = this._i++;
            return ! t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
        },
        "values"),
        o.Arguments = o.Array,
        r("keys"),
        r("values"),
        r("entries")
    },
    function(t, e, n) {
        var r = n(10);
        r(r.S, "Object", {
            setPrototypeOf: n(26).set
        })
    },
    function(t, e, n) {
        "use strict";
        var r, i = n(1),
        o = n(18),
        s = n(3),
        a = n(7),
        c = n(22),
        u = n(10),
        l = n(11),
        f = n(5),
        p = n(15),
        h = n(63),
        d = n(46),
        v = n(26).set,
        m = n(60),
        g = n(2)("species"),
        _ = n(62),
        y = n(58),
        b = "Promise",
        w = s.process,
        x = "process" == c(w),
        j = s[b],
        k = function(t) {
            var e = new j(function() {});
            return t && (e.constructor = Object),
            j.resolve(e) === e
        },
        E = function() {
            function t(e) {
                var n = new j(e);
                return v(n, t.prototype),
                n
            }
            var e = !1;
            try {
                if (e = j && j.resolve && k(), v(t, j), t.prototype = i.create(j.prototype, {
                    constructor: {
                        value: t
                    }
                }), t.resolve(5).then(function() {}) instanceof t || (e = !1), e && n(9)) {
                    var r = !1;
                    j.resolve(i.setDesc({},
                    "then", {
                        get: function() {
                            r = !0
                        }
                    })),
                    e = r
                }
            } catch(o) {
                e = !1
            }
            return e
        } (),
        S = function(t, e) {
            return o && t === j && e === r ? !0 : m(t, e)
        },
        T = function(t) {
            var e = f(t)[g];
            return void 0 != e ? e: t
        },
        C = function(t) {
            var e;
            return l(t) && "function" == typeof(e = t.then) ? e: !1
        },
        F = function(t) {
            var e, n;
            this.promise = new t(function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t,
                n = r
            }),
            this.resolve = p(e),
            this.reject = p(n)
        },
        A = function(t) {
            try {
                t()
            } catch(e) {
                return {
                    error: e
                }
            }
        },
        O = function(t, e) {
            if (!t.n) {
                t.n = !0;
                var n = t.c;
                y(function() {
                    for (var r = t.v,
                    i = 1 == t.s,
                    o = 0,
                    a = function(e) {
                        var n, o, s = i ? e.ok: e.fail,
                        a = e.resolve,
                        c = e.reject;
                        try {
                            s ? (i || (t.h = !0), n = s === !0 ? r: s(r), n === e.promise ? c(TypeError("Promise-chain cycle")) : (o = C(n)) ? o.call(n, a, c) : a(n)) : c(r)
                        } catch(u) {
                            c(u)
                        }
                    }; n.length > o;) a(n[o++]);
                    n.length = 0,
                    t.n = !1,
                    e && setTimeout(function() {
                        var e, n, i = t.p;
                        P(i) && (x ? w.emit("unhandledRejection", r, i) : (e = s.onunhandledrejection) ? e({
                            promise: i,
                            reason: r
                        }) : (n = s.console) && n.error && n.error("Unhandled promise rejection", r)),
                        t.a = void 0
                    },
                    1)
                })
            }
        },
        P = function(t) {
            var e, n = t._d,
            r = n.a || n.c,
            i = 0;
            if (n.h) return ! 1;
            for (; r.length > i;) if (e = r[i++], e.fail || !P(e.promise)) return ! 1;
            return ! 0
        },
        R = function(t) {
            var e = this;
            e.d || (e.d = !0, e = e.r || e, e.v = t, e.s = 2, e.a = e.c.slice(), O(e, !0))
        },
        L = function(t) {
            var e, n = this;
            if (!n.d) {
                n.d = !0,
                n = n.r || n;
                try {
                    if (n.p === t) throw TypeError("Promise can't be resolved itself"); (e = C(t)) ? y(function() {
                        var r = {
                            r: n,
                            d: !1
                        };
                        try {
                            e.call(t, a(L, r, 1), a(R, r, 1))
                        } catch(i) {
                            R.call(r, i)
                        }
                    }) : (n.v = t, n.s = 1, O(n, !1))
                } catch(r) {
                    R.call({
                        r: n,
                        d: !1
                    },
                    r)
                }
            }
        };
        E || (j = function(t) {
            p(t);
            var e = this._d = {
                p: h(this, j, b),
                c: [],
                a: void 0,
                s: 0,
                d: !1,
                v: void 0,
                h: !1,
                n: !1
            };
            try {
                t(a(L, e, 1), a(R, e, 1))
            } catch(n) {
                R.call(e, n)
            }
        },
        n(59)(j.prototype, {
            then: function(t, e) {
                var n = new F(_(this, j)),
                r = n.promise,
                i = this._d;
                return n.ok = "function" == typeof t ? t: !0,
                n.fail = "function" == typeof e && e,
                i.c.push(n),
                i.a && i.a.push(n),
                i.s && O(i, !1),
                r
            },
            "catch": function(t) {
                return this.then(void 0, t)
            }
        })),
        u(u.G + u.W + u.F * !E, {
            Promise: j
        }),
        n(12)(j, b),
        n(61)(b),
        r = n(4)[b],
        u(u.S + u.F * !E, b, {
            reject: function(t) {
                var e = new F(this),
                n = e.reject;
                return n(t),
                e.promise
            }
        }),
        u(u.S + u.F * (!E || k(!0)), b, {
            resolve: function(t) {
                if (t instanceof j && S(t.constructor, this)) return t;
                var e = new F(this),
                n = e.resolve;
                return n(t),
                e.promise
            }
        }),
        u(u.S + u.F * !(E && n(55)(function(t) {
            j.all(t)["catch"](function() {})
        })), b, {
            all: function(t) {
                var e = T(this),
                n = new F(e),
                r = n.resolve,
                o = n.reject,
                s = [],
                a = A(function() {
                    d(t, !1, s.push, s);
                    var n = s.length,
                    a = Array(n);
                    n ? i.each.call(s,
                    function(t, i) {
                        var s = !1;
                        e.resolve(t).then(function(t) {
                            s || (s = !0, a[i] = t, --n || r(a))
                        },
                        o)
                    }) : r(a)
                });
                return a && o(a.error),
                n.promise
            },
            race: function(t) {
                var e = T(this),
                n = new F(e),
                r = n.reject,
                i = A(function() {
                    d(t, !1,
                    function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return i && r(i.error),
                n.promise
            }
        })
    },
    function(t, e, n) {
        "use strict";
        var r = n(64)(!0);
        n(25)(String, "String",
        function(t) {
            this._t = String(t),
            this._i = 0
        },
        function() {
            var t, e = this._t,
            n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            }: (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    function(t, e, n) {
        "use strict";
        var r = n(1),
        i = n(3),
        o = n(16),
        s = n(9),
        a = n(10),
        c = n(20),
        u = n(24),
        l = n(27),
        f = n(12),
        p = n(29),
        h = n(2),
        d = n(57),
        v = n(47),
        m = n(45),
        g = n(52),
        _ = n(5),
        y = n(13),
        b = n(19),
        w = r.getDesc,
        x = r.setDesc,
        j = r.create,
        k = v.get,
        E = i.Symbol,
        S = i.JSON,
        T = S && S.stringify,
        C = !1,
        F = h("_hidden"),
        A = r.isEnum,
        O = l("symbol-registry"),
        P = l("symbols"),
        R = "function" == typeof E,
        L = Object.prototype,
        I = s && u(function() {
            return 7 != j(x({},
            "a", {
                get: function() {
                    return x(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ?
        function(t, e, n) {
            var r = w(L, e);
            r && delete L[e],
            x(t, e, n),
            r && t !== L && x(L, e, r)
        }: x,
        D = function(t) {
            var e = P[t] = j(E.prototype);
            return e._k = t,
            s && C && I(L, t, {
                configurable: !0,
                set: function(e) {
                    o(this, F) && o(this[F], t) && (this[F][t] = !1),
                    I(this, t, b(1, e))
                }
            }),
            e
        },
        M = function(t) {
            return "symbol" == typeof t
        },
        z = function(t, e, n) {
            return n && o(P, e) ? (n.enumerable ? (o(t, F) && t[F][e] && (t[F][e] = !1), n = j(n, {
                enumerable: b(0, !1)
            })) : (o(t, F) || x(t, F, b(1, {})), t[F][e] = !0), I(t, e, n)) : x(t, e, n)
        },
        N = function(t, e) {
            _(t);
            for (var n, r = m(e = y(e)), i = 0, o = r.length; o > i;) z(t, n = r[i++], e[n]);
            return t
        },
        H = function(t, e) {
            return void 0 === e ? j(t) : N(j(t), e)
        },
        $ = function(t) {
            var e = A.call(this, t);
            return e || !o(this, t) || !o(P, t) || o(this, F) && this[F][t] ? e: !0
        },
        U = function(t, e) {
            var n = w(t = y(t), e);
            return ! n || !o(P, e) || o(t, F) && t[F][e] || (n.enumerable = !0),
            n
        },
        V = function(t) {
            for (var e, n = k(y(t)), r = [], i = 0; n.length > i;) o(P, e = n[i++]) || e == F || r.push(e);
            return r
        },
        B = function(t) {
            for (var e, n = k(y(t)), r = [], i = 0; n.length > i;) o(P, e = n[i++]) && r.push(P[e]);
            return r
        },
        J = function(t) {
            if (void 0 !== t && !M(t)) {
                for (var e, n, r = [t], i = 1, o = arguments; o.length > i;) r.push(o[i++]);
                return e = r[1],
                "function" == typeof e && (n = e),
                !n && g(e) || (e = function(t, e) {
                    return n && (e = n.call(this, t, e)),
                    M(e) ? void 0 : e
                }),
                r[1] = e,
                T.apply(S, r)
            }
        },
        G = u(function() {
            var t = E();
            return "[null]" != T([t]) || "{}" != T({
                a: t
            }) || "{}" != T(Object(t))
        });
        R || (E = function() {
            if (M(this)) throw TypeError("Symbol is not a constructor");
            return D(p(arguments.length > 0 ? arguments[0] : void 0))
        },
        c(E.prototype, "toString",
        function() {
            return this._k
        }), M = function(t) {
            return t instanceof E
        },
        r.create = H, r.isEnum = $, r.getDesc = U, r.setDesc = z, r.setDescs = N, r.getNames = v.get = V, r.getSymbols = B, s && !n(18) && c(L, "propertyIsEnumerable", $, !0));
        var q = {
            "for": function(t) {
                return o(O, t += "") ? O[t] : O[t] = E(t)
            },
            keyFor: function(t) {
                return d(O, t)
            },
            useSetter: function() {
                C = !0
            },
            useSimple: function() {
                C = !1
            }
        };
        r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),
        function(t) {
            var e = h(t);
            q[t] = R ? e: D(e)
        }),
        C = !0,
        a(a.G + a.W, {
            Symbol: E
        }),
        a(a.S, "Symbol", q),
        a(a.S + a.F * !R, "Object", {
            create: H,
            defineProperty: z,
            defineProperties: N,
            getOwnPropertyDescriptor: U,
            getOwnPropertyNames: V,
            getOwnPropertySymbols: B
        }),
        S && a(a.S + a.F * (!R || G), "JSON", {
            stringify: J
        }),
        f(E, "Symbol"),
        f(Math, "Math", !0),
        f(i.JSON, "JSON", !0)
    },
    function(t, e, n) {
        n(68);
        var r = n(8);
        r.NodeList = r.HTMLCollection = r.Array
    },
    function(t, e, n) { (function(e) {
            var r = "object" == typeof e ? e: "object" == typeof window ? window: "object" == typeof self ? self: this,
            i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
            o = i && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0, t.exports = n(75), i) r.regeneratorRuntime = o;
            else try {
                delete r.regeneratorRuntime
            } catch(s) {
                r.regeneratorRuntime = void 0
            }
            t.exports = {
                "default": t.exports,
                __esModule: !0
            }
        }).call(e,
        function() {
            return this
        } ())
    },
    function(t, e, n) { (function(e, r) {
            "use strict";
            var i = n(38)["default"],
            o = n(35)["default"],
            s = n(36)["default"],
            a = n(37)["default"]; !
            function(e) {
                function n(t, e, n, r) {
                    var i = o((e || u).prototype),
                    s = new _(r || []);
                    return i._invoke = v(t, n, s),
                    i
                }
                function c(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch(r) {
                        return {
                            type: "throw",
                            arg: r
                        }
                    }
                }
                function u() {}
                function l() {}
                function f() {}
                function p(t) { ["next", "throw", "return"].forEach(function(e) {
                        t[e] = function(t) {
                            return this._invoke(e, t)
                        }
                    })
                }
                function h(t) {
                    this.arg = t
                }
                function d(t) {
                    function e(n, r, i, o) {
                        var s = c(t[n], t, r);
                        if ("throw" !== s.type) {
                            var u = s.arg,
                            l = u.value;
                            return l instanceof h ? a.resolve(l.arg).then(function(t) {
                                e("next", t, i, o)
                            },
                            function(t) {
                                e("throw", t, i, o)
                            }) : a.resolve(l).then(function(t) {
                                u.value = t,
                                i(u)
                            },
                            o)
                        }
                        o(s.arg)
                    }
                    function n(t, n) {
                        function r() {
                            return new a(function(r, i) {
                                e(t, n, r, i)
                            })
                        }
                        return i = i ? i.then(r, r) : r()
                    }
                    "object" == typeof r && r.domain && (e = r.domain.bind(e));
                    var i;
                    this._invoke = n
                }
                function v(t, e, n) {
                    var r = C;
                    return function(i, o) {
                        if (r === A) throw new Error("Generator is already running");
                        if (r === O) {
                            if ("throw" === i) throw o;
                            return b()
                        }
                        for (;;) {
                            var s = n.delegate;
                            if (s) {
                                if ("return" === i || "throw" === i && s.iterator[i] === w) {
                                    n.delegate = null;
                                    var a = s.iterator["return"];
                                    if (a) {
                                        var u = c(a, s.iterator, o);
                                        if ("throw" === u.type) {
                                            i = "throw",
                                            o = u.arg;
                                            continue
                                        }
                                    }
                                    if ("return" === i) continue
                                }
                                var u = c(s.iterator[i], s.iterator, o);
                                if ("throw" === u.type) {
                                    n.delegate = null,
                                    i = "throw",
                                    o = u.arg;
                                    continue
                                }
                                i = "next",
                                o = w;
                                var l = u.arg;
                                if (!l.done) return r = F,
                                l;
                                n[s.resultName] = l.value,
                                n.next = s.nextLoc,
                                n.delegate = null
                            }
                            if ("next" === i) r === F ? n.sent = o: n.sent = w;
                            else if ("throw" === i) {
                                if (r === C) throw r = O,
                                o;
                                n.dispatchException(o) && (i = "next", o = w)
                            } else "return" === i && n.abrupt("return", o);
                            r = A;
                            var u = c(t, e, n);
                            if ("normal" === u.type) {
                                r = n.done ? O: F;
                                var l = {
                                    value: u.arg,
                                    done: n.done
                                };
                                if (u.arg !== P) return l;
                                n.delegate && "next" === i && (o = w)
                            } else "throw" === u.type && (r = O, i = "throw", o = u.arg)
                        }
                    }
                }
                function m(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function g(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(m, this),
                    this.reset(!0)
                }
                function y(t) {
                    if (t) {
                        var e = t[k];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                            r = function i() {
                                for (; ++n < t.length;) if (x.call(t, n)) return i.value = t[n],
                                i.done = !1,
                                i;
                                return i.value = w,
                                i.done = !0,
                                i
                            };
                            return r.next = r
                        }
                    }
                    return {
                        next: b
                    }
                }
                function b() {
                    return {
                        value: w,
                        done: !0
                    }
                }
                var w, x = Object.prototype.hasOwnProperty,
                j = "function" == typeof i ? i: {},
                k = j.iterator || "@@iterator",
                E = j.toStringTag || "@@toStringTag",
                S = "object" == typeof t,
                T = e.regeneratorRuntime;
                if (T) return void(S && (t.exports = T));
                T = e.regeneratorRuntime = S ? t.exports: {},
                T.wrap = n;
                var C = "suspendedStart",
                F = "suspendedYield",
                A = "executing",
                O = "completed",
                P = {},
                R = f.prototype = u.prototype;
                l.prototype = R.constructor = f,
                f.constructor = l,
                f[E] = l.displayName = "GeneratorFunction",
                T.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return e ? e === l || "GeneratorFunction" === (e.displayName || e.name) : !1
                },
                T.mark = function(t) {
                    return s ? s(t, f) : (t.__proto__ = f, E in t || (t[E] = "GeneratorFunction")),
                    t.prototype = o(R),
                    t
                },
                T.awrap = function(t) {
                    return new h(t)
                },
                p(d.prototype),
                T.async = function(t, e, r, i) {
                    var o = new d(n(t, e, r, i));
                    return T.isGeneratorFunction(e) ? o: o.next().then(function(t) {
                        return t.done ? t.value: o.next()
                    })
                },
                p(R),
                R[k] = function() {
                    return this
                },
                R[E] = "Generator",
                R.toString = function() {
                    return "[object Generator]"
                },
                T.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                    function r() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return r.value = n,
                            r.done = !1,
                            r
                        }
                        return r.done = !0,
                        r
                    }
                },
                T.values = y,
                _.prototype = {
                    constructor: _,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = w, this.done = !1, this.delegate = null, this.tryEntries.forEach(g), !t) for (var e in this)"t" === e.charAt(0) && x.call(this, e) && !isNaN( + e.slice(1)) && (this[e] = w)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0],
                        e = t.completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        function e(e, r) {
                            return o.type = "throw",
                            o.arg = t,
                            n.next = e,
                            !!r
                        }
                        if (this.done) throw t;
                        for (var n = this,
                        r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                            o = i.completion;
                            if ("root" === i.tryLoc) return e("end");
                            if (i.tryLoc <= this.prev) {
                                var s = x.call(i, "catchLoc"),
                                a = x.call(i, "finallyLoc");
                                if (s && a) {
                                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                                } else {
                                    if (!a) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && x.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var o = i ? i.completion: {};
                        return o.type = t,
                        o.arg = e,
                        i ? this.next = i.finallyLoc: this.complete(o),
                        P
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        "break" === t.type || "continue" === t.type ? this.next = t.arg: "return" === t.type ? (this.rval = t.arg, this.next = "end") : "normal" === t.type && e && (this.next = e)
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc),
                            g(n),
                            P
                        }
                    },
                    "catch": function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    g(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: y(t),
                            resultName: e,
                            nextLoc: n
                        },
                        P
                    }
                }
            } ("object" == typeof e ? e: "object" == typeof window ? window: "object" == typeof self ? self: void 0)
        }).call(e,
        function() {
            return this
        } (), n(14))
    },
    function(t, e, n) { (function(e, n, r) {
            /* @preserve
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2013-2015 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
            !
            function(e) {
                t.exports = e()
            } (function() {
                var t, i, o;
                return function s(t, e, n) {
                    function r(o, a) {
                        if (!e[o]) {
                            if (!t[o]) {
                                var c = "function" == typeof _dereq_ && _dereq_;
                                if (!a && c) return c(o, !0);
                                if (i) return i(o, !0);
                                var u = new Error("Cannot find module '" + o + "'");
                                throw u.code = "MODULE_NOT_FOUND",
                                u
                            }
                            var l = e[o] = {
                                exports: {}
                            };
                            t[o][0].call(l.exports,
                            function(e) {
                                var n = t[o][1][e];
                                return r(n ? n: e)
                            },
                            l, l.exports, s, t, e, n)
                        }
                        return e[o].exports
                    }
                    for (var i = "function" == typeof _dereq_ && _dereq_,
                    o = 0; o < n.length; o++) r(n[o]);
                    return r
                } ({
                    1 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(t) {
                            function e(t) {
                                var e = new n(t),
                                r = e.promise();
                                return e.setHowMany(1),
                                e.setUnwrap(),
                                e.init(),
                                r
                            }
                            var n = t._SomePromiseArray;
                            t.any = function(t) {
                                return e(t)
                            },
                            t.prototype.any = function() {
                                return e(this)
                            }
                        }
                    },
                    {}],
                    2 : [function(t, e, n) {
                        "use strict";
                        function r() {
                            this._isTickUsed = !1,
                            this._lateQueue = new l(16),
                            this._normalQueue = new l(16),
                            this._trampolineEnabled = !0;
                            var t = this;
                            this.drainQueues = function() {
                                t._drainQueues()
                            },
                            this._schedule = u.isStatic ? u(this.drainQueues) : u
                        }
                        function i(t, e, n) {
                            this._lateQueue.push(t, e, n),
                            this._queueTick()
                        }
                        function o(t, e, n) {
                            this._normalQueue.push(t, e, n),
                            this._queueTick()
                        }
                        function s(t) {
                            this._normalQueue._pushOne(t),
                            this._queueTick()
                        }
                        var a;
                        try {
                            throw new Error
                        } catch(c) {
                            a = c
                        }
                        var u = t("./schedule.js"),
                        l = t("./queue.js"),
                        f = t("./util.js");
                        r.prototype.disableTrampolineIfNecessary = function() {
                            f.hasDevTools && (this._trampolineEnabled = !1)
                        },
                        r.prototype.enableTrampoline = function() {
                            this._trampolineEnabled || (this._trampolineEnabled = !0, this._schedule = function(t) {
                                setTimeout(t, 0)
                            })
                        },
                        r.prototype.haveItemsQueued = function() {
                            return this._normalQueue.length() > 0
                        },
                        r.prototype.throwLater = function(t, e) {
                            if (1 === arguments.length && (e = t, t = function() {
                                throw e
                            }), "undefined" != typeof setTimeout) setTimeout(function() {
                                t(e)
                            },
                            0);
                            else try {
                                this._schedule(function() {
                                    t(e)
                                })
                            } catch(n) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
                            }
                        },
                        f.hasDevTools ? (u.isStatic && (u = function(t) {
                            setTimeout(t, 0)
                        }), r.prototype.invokeLater = function(t, e, n) {
                            this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function() {
                                setTimeout(function() {
                                    t.call(e, n)
                                },
                                100)
                            })
                        },
                        r.prototype.invoke = function(t, e, n) {
                            this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function() {
                                t.call(e, n)
                            })
                        },
                        r.prototype.settlePromises = function(t) {
                            this._trampolineEnabled ? s.call(this, t) : this._schedule(function() {
                                t._settlePromises()
                            })
                        }) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = s),
                        r.prototype.invokeFirst = function(t, e, n) {
                            this._normalQueue.unshift(t, e, n),
                            this._queueTick()
                        },
                        r.prototype._drainQueue = function(t) {
                            for (; t.length() > 0;) {
                                var e = t.shift();
                                if ("function" == typeof e) {
                                    var n = t.shift(),
                                    r = t.shift();
                                    e.call(n, r)
                                } else e._settlePromises()
                            }
                        },
                        r.prototype._drainQueues = function() {
                            this._drainQueue(this._normalQueue),
                            this._reset(),
                            this._drainQueue(this._lateQueue)
                        },
                        r.prototype._queueTick = function() {
                            this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
                        },
                        r.prototype._reset = function() {
                            this._isTickUsed = !1
                        },
                        e.exports = new r,
                        e.exports.firstLineError = a
                    },
                    {
                        "./queue.js": 28,
                        "./schedule.js": 31,
                        "./util.js": 38
                    }],
                    3 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(t, e, n) {
                            var r = function(t, e) {
                                this._reject(e)
                            },
                            i = function(t, e) {
                                e.promiseRejectionQueued = !0,
                                e.bindingPromise._then(r, r, null, this, t)
                            },
                            o = function(t, e) {
                                this._isPending() && this._resolveCallback(e.target)
                            },
                            s = function(t, e) {
                                e.promiseRejectionQueued || this._reject(t)
                            };
                            t.prototype.bind = function(r) {
                                var a = n(r),
                                c = new t(e);
                                c._propagateFrom(this, 1);
                                var u = this._target();
                                if (c._setBoundTo(a), a instanceof t) {
                                    var l = {
                                        promiseRejectionQueued: !1,
                                        promise: c,
                                        target: u,
                                        bindingPromise: a
                                    };
                                    u._then(e, i, c._progress, c, l),
                                    a._then(o, s, c._progress, c, l)
                                } else c._resolveCallback(u);
                                return c
                            },
                            t.prototype._setBoundTo = function(t) {
                                void 0 !== t ? (this._bitField = 131072 | this._bitField, this._boundTo = t) : this._bitField = -131073 & this._bitField
                            },
                            t.prototype._isBound = function() {
                                return 131072 === (131072 & this._bitField)
                            },
                            t.bind = function(r, i) {
                                var o = n(r),
                                s = new t(e);
                                return s._setBoundTo(o),
                                o instanceof t ? o._then(function() {
                                    s._resolveCallback(i)
                                },
                                s._reject, s._progress, s, null) : s._resolveCallback(i),
                                s
                            }
                        }
                    },
                    {}],
                    4 : [function(t, e, n) {
                        "use strict";
                        function r() {
                            try {
                                Promise === o && (Promise = i)
                            } catch(t) {}
                            return o
                        }
                        var i;
                        "undefined" != typeof Promise && (i = Promise);
                        var o = t("./promise.js")();
                        o.noConflict = r,
                        e.exports = o
                    },
                    {
                        "./promise.js": 23
                    }],
                    5 : [function(t, e, n) {
                        "use strict";
                        var r = Object.create;
                        if (r) {
                            var i = r(null),
                            o = r(null);
                            i[" size"] = o[" size"] = 0
                        }
                        e.exports = function(e) {
                            function n(t, n) {
                                var r;
                                if (null != t && (r = t[n]), "function" != typeof r) {
                                    var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";
                                    throw new e.TypeError(i)
                                }
                                return r
                            }
                            function r(t) {
                                var e = this.pop(),
                                r = n(t, e);
                                return r.apply(t, this)
                            }
                            function i(t) {
                                return t[this]
                            }
                            function o(t) {
                                var e = +this;
                                return 0 > e && (e = Math.max(0, e + t.length)),
                                t[e]
                            }
                            var s, a = t("./util.js"),
                            c = a.canEvaluate;
                            a.isIdentifier;
                            e.prototype.call = function(t) {
                                for (var e = arguments.length,
                                n = new Array(e - 1), i = 1; e > i; ++i) n[i - 1] = arguments[i];
                                return n.push(t),
                                this._then(r, void 0, void 0, n, void 0)
                            },
                            e.prototype.get = function(t) {
                                var e, n = "number" == typeof t;
                                if (n) e = o;
                                else if (c) {
                                    var r = s(t);
                                    e = null !== r ? r: i
                                } else e = i;
                                return this._then(e, void 0, void 0, t, void 0)
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    6 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e) {
                            var n = t("./errors.js"),
                            r = t("./async.js"),
                            i = n.CancellationError;
                            e.prototype._cancel = function(t) {
                                if (!this.isCancellable()) return this;
                                for (var e, n = this; void 0 !== (e = n._cancellationParent) && e.isCancellable();) n = e;
                                this._unsetCancellable(),
                                n._target()._rejectCallback(t, !1, !0)
                            },
                            e.prototype.cancel = function(t) {
                                return this.isCancellable() ? (void 0 === t && (t = new i), r.invokeLater(this._cancel, this, t), this) : this
                            },
                            e.prototype.cancellable = function() {
                                return this._cancellable() ? this: (r.enableTrampoline(), this._setCancellable(), this._cancellationParent = void 0, this)
                            },
                            e.prototype.uncancellable = function() {
                                var t = this.then();
                                return t._unsetCancellable(),
                                t
                            },
                            e.prototype.fork = function(t, e, n) {
                                var r = this._then(t, e, n, void 0, void 0);
                                return r._setCancellable(),
                                r._cancellationParent = void 0,
                                r
                            }
                        }
                    },
                    {
                        "./async.js": 2,
                        "./errors.js": 13
                    }],
                    7 : [function(t, n, r) {
                        "use strict";
                        n.exports = function() {
                            function n(t) {
                                this._parent = t;
                                var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                                w(this, n),
                                e > 32 && this.uncycle()
                            }
                            function r(t, e) {
                                for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"),
                                e[n] = e[n].join("\n");
                                return n < e.length && (e[n] = e[n].join("\n")),
                                t + "\n" + e.join("\n")
                            }
                            function i(t) {
                                for (var e = 0; e < t.length; ++e)(0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
                            }
                            function o(t) {
                                for (var e = t[0], n = 1; n < t.length; ++n) {
                                    for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a) if (r[a] === o) {
                                        s = a;
                                        break
                                    }
                                    for (var a = s; a >= 0; --a) {
                                        var c = r[a];
                                        if (e[i] !== c) break;
                                        e.pop(),
                                        i--
                                    }
                                    e = r
                                }
                            }
                            function s(t) {
                                for (var e = [], n = 0; n < t.length; ++n) {
                                    var r = t[n],
                                    i = v.test(r) || "    (No stack trace)" === r,
                                    o = i && _(r);
                                    i && !o && (g && " " !== r.charAt(0) && (r = "    " + r), e.push(r))
                                }
                                return e
                            }
                            function a(t) {
                                for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
                                    var r = e[n];
                                    if ("    (No stack trace)" === r || v.test(r)) break
                                }
                                return n > 0 && (e = e.slice(n)),
                                e
                            }
                            function c(t) {
                                var e;
                                if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
                                else {
                                    e = t.toString();
                                    var n = /\[object [a-zA-Z0-9$_]+\]/;
                                    if (n.test(e)) try {
                                        var r = JSON.stringify(t);
                                        e = r
                                    } catch(i) {}
                                    0 === e.length && (e = "(empty array)")
                                }
                                return "(<" + u(e) + ">, no stack trace)"
                            }
                            function u(t) {
                                var e = 41;
                                return t.length < e ? t: t.substr(0, e - 3) + "..."
                            }
                            function l(t) {
                                var e = t.match(y);
                                return e ? {
                                    fileName: e[1],
                                    line: parseInt(e[2], 10)
                                }: void 0
                            }
                            var f, p = t("./async.js"),
                            h = t("./util.js"),
                            d = /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,
                            v = null,
                            m = null,
                            g = !1;
                            h.inherits(n, Error),
                            n.prototype.uncycle = function() {
                                var t = this._length;
                                if (! (2 > t)) {
                                    for (var e = [], n = {},
                                    r = 0, i = this; void 0 !== i; ++r) e.push(i),
                                    i = i._parent;
                                    t = this._length = r;
                                    for (var r = t - 1; r >= 0; --r) {
                                        var o = e[r].stack;
                                        void 0 === n[o] && (n[o] = r)
                                    }
                                    for (var r = 0; t > r; ++r) {
                                        var s = e[r].stack,
                                        a = n[s];
                                        if (void 0 !== a && a !== r) {
                                            a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1),
                                            e[r]._parent = void 0,
                                            e[r]._length = 1;
                                            var c = r > 0 ? e[r - 1] : this;
                                            t - 1 > a ? (c._parent = e[a + 1], c._parent.uncycle(), c._length = c._parent._length + 1) : (c._parent = void 0, c._length = 1);
                                            for (var u = c._length + 1,
                                            l = r - 2; l >= 0; --l) e[l]._length = u,
                                            u++;
                                            return
                                        }
                                    }
                                }
                            },
                            n.prototype.parent = function() {
                                return this._parent
                            },
                            n.prototype.hasParent = function() {
                                return void 0 !== this._parent
                            },
                            n.prototype.attachExtraTrace = function(t) {
                                if (!t.__stackCleaned__) {
                                    this.uncycle();
                                    for (var e = n.parseStackAndMessage(t), a = e.message, c = [e.stack], u = this; void 0 !== u;) c.push(s(u.stack.split("\n"))),
                                    u = u._parent;
                                    o(c),
                                    i(c),
                                    h.notEnumerableProp(t, "stack", r(a, c)),
                                    h.notEnumerableProp(t, "__stackCleaned__", !0)
                                }
                            },
                            n.parseStackAndMessage = function(t) {
                                var e = t.stack,
                                n = t.toString();
                                return e = "string" == typeof e && e.length > 0 ? a(t) : ["    (No stack trace)"],
                                {
                                    message: n,
                                    stack: s(e)
                                }
                            },
                            n.formatAndLogError = function(t, e) {
                                if ("undefined" != typeof console) {
                                    var n;
                                    if ("object" == typeof t || "function" == typeof t) {
                                        var r = t.stack;
                                        n = e + m(r, t)
                                    } else n = e + String(t);
                                    "function" == typeof f ? f(n) : "function" != typeof console.log && "object" != typeof console.log || console.log(n)
                                }
                            },
                            n.unhandledRejection = function(t) {
                                n.formatAndLogError(t, "^--- With additional stack trace: ")
                            },
                            n.isSupported = function() {
                                return "function" == typeof w
                            },
                            n.fireRejectionEvent = function(t, e, r, i) {
                                var o = !1;
                                try {
                                    "function" == typeof e && (o = !0, "rejectionHandled" === t ? e(i) : e(r, i))
                                } catch(s) {
                                    p.throwLater(s)
                                }
                                var a = !1;
                                try {
                                    a = x(t, r, i)
                                } catch(s) {
                                    a = !0,
                                    p.throwLater(s)
                                }
                                var c = !1;
                                if (b) try {
                                    c = b(t.toLowerCase(), {
                                        reason: r,
                                        promise: i
                                    })
                                } catch(s) {
                                    c = !0,
                                    p.throwLater(s)
                                }
                                a || o || c || "unhandledRejection" !== t || n.formatAndLogError(r, "Unhandled rejection ")
                            };
                            var _ = function() {
                                return ! 1
                            },
                            y = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                            n.setBounds = function(t, e) {
                                if (n.isSupported()) {
                                    for (var r, i, o = t.stack.split("\n"), s = e.stack.split("\n"), a = -1, c = -1, u = 0; u < o.length; ++u) {
                                        var f = l(o[u]);
                                        if (f) {
                                            r = f.fileName,
                                            a = f.line;
                                            break
                                        }
                                    }
                                    for (var u = 0; u < s.length; ++u) {
                                        var f = l(s[u]);
                                        if (f) {
                                            i = f.fileName,
                                            c = f.line;
                                            break
                                        }
                                    }
                                    0 > a || 0 > c || !r || !i || r !== i || a >= c || (_ = function(t) {
                                        if (d.test(t)) return ! 0;
                                        var e = l(t);
                                        return !! (e && e.fileName === r && a <= e.line && e.line <= c)
                                    })
                                }
                            };
                            var b, w = function() {
                                var t = /^\s*at\s*/,
                                e = function(t, e) {
                                    return "string" == typeof t ? t: void 0 !== e.name && void 0 !== e.message ? e.toString() : c(e)
                                };
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit = Error.stackTraceLimit + 6,
                                    v = t,
                                    m = e;
                                    var n = Error.captureStackTrace;
                                    return _ = function(t) {
                                        return d.test(t)
                                    },
                                    function(t, e) {
                                        Error.stackTraceLimit = Error.stackTraceLimit + 6,
                                        n(t, e),
                                        Error.stackTraceLimit = Error.stackTraceLimit - 6
                                    }
                                }
                                var r = new Error;
                                if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return v = /@/,
                                m = e,
                                g = !0,
                                function(t) {
                                    t.stack = (new Error).stack
                                };
                                var i;
                                try {
                                    throw new Error
                                } catch(o) {
                                    i = "stack" in o
                                }
                                return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (m = function(t, e) {
                                    return "string" == typeof t ? t: "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? c(e) : e.toString()
                                },
                                null) : (v = t, m = e,
                                function(t) {
                                    Error.stackTraceLimit = Error.stackTraceLimit + 6;
                                    try {
                                        throw new Error
                                    } catch(e) {
                                        t.stack = e.stack
                                    }
                                    Error.stackTraceLimit = Error.stackTraceLimit - 6
                                })
                            } ([]),
                            x = function() {
                                if (h.isNode) return function(t, n, r) {
                                    return "rejectionHandled" === t ? e.emit(t, r) : e.emit(t, n, r)
                                };
                                var t = !1,
                                n = !0;
                                try {
                                    var r = new self.CustomEvent("test");
                                    t = r instanceof CustomEvent
                                } catch(i) {}
                                if (!t) try {
                                    var o = document.createEvent("CustomEvent");
                                    o.initCustomEvent("testingtheevent", !1, !0, {}),
                                    self.dispatchEvent(o)
                                } catch(i) {
                                    n = !1
                                }
                                n && (b = function(e, n) {
                                    var r;
                                    return t ? r = new self.CustomEvent(e, {
                                        detail: n,
                                        bubbles: !1,
                                        cancelable: !0
                                    }) : self.dispatchEvent && (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, !1, !0, n)),
                                    r ? !self.dispatchEvent(r) : !1
                                });
                                var s = {};
                                return s.unhandledRejection = "onunhandledRejection".toLowerCase(),
                                s.rejectionHandled = "onrejectionHandled".toLowerCase(),
                                function(t, e, n) {
                                    var r = s[t],
                                    i = self[r];
                                    return i ? ("rejectionHandled" === t ? i.call(self, n) : i.call(self, e, n), !0) : !1
                                }
                            } ();
                            return "undefined" != typeof console && "undefined" != typeof console.warn && (f = function(t) {
                                console.warn(t)
                            },
                            h.isNode && e.stderr.isTTY ? f = function(t) {
                                e.stderr.write("[31m" + t + "[39m\n")
                            }: h.isNode || "string" != typeof(new Error).stack || (f = function(t) {
                                console.warn("%c" + t, "color: red")
                            })),
                            n
                        }
                    },
                    {
                        "./async.js": 2,
                        "./util.js": 38
                    }],
                    8 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t, e, n) {
                                this._instances = t,
                                this._callback = e,
                                this._promise = n
                            }
                            function r(t, e) {
                                var n = {},
                                r = s(t).call(n, e);
                                if (r === a) return r;
                                var i = c(n);
                                return i.length ? (a.e = new u("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"), a) : r
                            }
                            var i = t("./util.js"),
                            o = t("./errors.js"),
                            s = i.tryCatch,
                            a = i.errorObj,
                            c = t("./es5.js").keys,
                            u = o.TypeError;
                            return n.prototype.doFilter = function(t) {
                                for (var n = this._callback,
                                i = this._promise,
                                o = i._boundValue(), c = 0, u = this._instances.length; u > c; ++c) {
                                    var l = this._instances[c],
                                    f = l === Error || null != l && l.prototype instanceof Error;
                                    if (f && t instanceof l) {
                                        var p = s(n).call(o, t);
                                        return p === a ? (e.e = p.e, e) : p
                                    }
                                    if ("function" == typeof l && !f) {
                                        var h = r(l, t);
                                        if (h === a) {
                                            t = a.e;
                                            break
                                        }
                                        if (h) {
                                            var p = s(n).call(o, t);
                                            return p === a ? (e.e = p.e, e) : p
                                        }
                                    }
                                }
                                return e.e = t,
                                e
                            },
                            n
                        }
                    },
                    {
                        "./errors.js": 13,
                        "./es5.js": 14,
                        "./util.js": 38
                    }],
                    9 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(t, e, n) {
                            function r() {
                                this._trace = new e(o())
                            }
                            function i() {
                                return n() ? new r: void 0
                            }
                            function o() {
                                var t = s.length - 1;
                                return t >= 0 ? s[t] : void 0
                            }
                            var s = [];
                            return r.prototype._pushContext = function() {
                                n() && void 0 !== this._trace && s.push(this._trace)
                            },
                            r.prototype._popContext = function() {
                                n() && void 0 !== this._trace && s.pop()
                            },
                            t.prototype._peekContext = o,
                            t.prototype._pushContext = r.prototype._pushContext,
                            t.prototype._popContext = r.prototype._popContext,
                            i
                        }
                    },
                    {}],
                    10 : [function(t, n, r) {
                        "use strict";
                        n.exports = function(n, r) {
                            var i, o, s = n._getDomain,
                            a = t("./async.js"),
                            c = t("./errors.js").Warning,
                            u = t("./util.js"),
                            l = u.canAttachTrace,
                            f = u.isNode && ( !! e.env.BLUEBIRD_DEBUG || "development" === e.env.NODE_ENV);
                            return u.isNode && 0 == e.env.BLUEBIRD_DEBUG && (f = !1),
                            f && a.disableTrampolineIfNecessary(),
                            n.prototype._ignoreRejections = function() {
                                this._unsetRejectionIsUnhandled(),
                                this._bitField = 16777216 | this._bitField
                            },
                            n.prototype._ensurePossibleRejectionHandled = function() {
                                0 === (16777216 & this._bitField) && (this._setRejectionIsUnhandled(), a.invokeLater(this._notifyUnhandledRejection, this, void 0))
                            },
                            n.prototype._notifyUnhandledRejectionIsHandled = function() {
                                r.fireRejectionEvent("rejectionHandled", i, void 0, this)
                            },
                            n.prototype._notifyUnhandledRejection = function() {
                                if (this._isRejectionUnhandled()) {
                                    var t = this._getCarriedStackTrace() || this._settledValue;
                                    this._setUnhandledRejectionIsNotified(),
                                    r.fireRejectionEvent("unhandledRejection", o, t, this)
                                }
                            },
                            n.prototype._setUnhandledRejectionIsNotified = function() {
                                this._bitField = 524288 | this._bitField
                            },
                            n.prototype._unsetUnhandledRejectionIsNotified = function() {
                                this._bitField = -524289 & this._bitField
                            },
                            n.prototype._isUnhandledRejectionNotified = function() {
                                return (524288 & this._bitField) > 0
                            },
                            n.prototype._setRejectionIsUnhandled = function() {
                                this._bitField = 2097152 | this._bitField
                            },
                            n.prototype._unsetRejectionIsUnhandled = function() {
                                this._bitField = -2097153 & this._bitField,
                                this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                            },
                            n.prototype._isRejectionUnhandled = function() {
                                return (2097152 & this._bitField) > 0
                            },
                            n.prototype._setCarriedStackTrace = function(t) {
                                this._bitField = 1048576 | this._bitField,
                                this._fulfillmentHandler0 = t
                            },
                            n.prototype._isCarryingStackTrace = function() {
                                return (1048576 & this._bitField) > 0
                            },
                            n.prototype._getCarriedStackTrace = function() {
                                return this._isCarryingStackTrace() ? this._fulfillmentHandler0: void 0
                            },
                            n.prototype._captureStackTrace = function() {
                                return f && (this._trace = new r(this._peekContext())),
                                this
                            },
                            n.prototype._attachExtraTrace = function(t, e) {
                                if (f && l(t)) {
                                    var n = this._trace;
                                    if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                                    else if (!t.__stackCleaned__) {
                                        var i = r.parseStackAndMessage(t);
                                        u.notEnumerableProp(t, "stack", i.message + "\n" + i.stack.join("\n")),
                                        u.notEnumerableProp(t, "__stackCleaned__", !0)
                                    }
                                }
                            },
                            n.prototype._warn = function(t) {
                                var e = new c(t),
                                n = this._peekContext();
                                if (n) n.attachExtraTrace(e);
                                else {
                                    var i = r.parseStackAndMessage(e);
                                    e.stack = i.message + "\n" + i.stack.join("\n")
                                }
                                r.formatAndLogError(e, "")
                            },
                            n.onPossiblyUnhandledRejection = function(t) {
                                var e = s();
                                o = "function" == typeof t ? null === e ? t: e.bind(t) : void 0
                            },
                            n.onUnhandledRejectionHandled = function(t) {
                                var e = s();
                                i = "function" == typeof t ? null === e ? t: e.bind(t) : void 0
                            },
                            n.longStackTraces = function() {
                                if (a.haveItemsQueued() && f === !1) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");
                                f = r.isSupported(),
                                f && a.disableTrampolineIfNecessary()
                            },
                            n.hasLongStackTraces = function() {
                                return f && r.isSupported()
                            },
                            r.isSupported() || (n.longStackTraces = function() {},
                            f = !1),
                            function() {
                                return f
                            }
                        }
                    },
                    {
                        "./async.js": 2,
                        "./errors.js": 13,
                        "./util.js": 38
                    }],
                    11 : [function(t, e, n) {
                        "use strict";
                        var r = t("./util.js"),
                        i = r.isPrimitive;
                        e.exports = function(t) {
                            var e = function() {
                                return this
                            },
                            n = function() {
                                throw this
                            },
                            r = function() {},
                            o = function() {
                                throw void 0
                            },
                            s = function(t, e) {
                                return 1 === e ?
                                function() {
                                    throw t
                                }: 2 === e ?
                                function() {
                                    return t
                                }: void 0
                            };
                            t.prototype["return"] = t.prototype.thenReturn = function(n) {
                                return void 0 === n ? this.then(r) : i(n) ? this._then(s(n, 2), void 0, void 0, void 0, void 0) : (n instanceof t && n._ignoreRejections(), this._then(e, void 0, void 0, n, void 0))
                            },
                            t.prototype["throw"] = t.prototype.thenThrow = function(t) {
                                return void 0 === t ? this.then(o) : i(t) ? this._then(s(t, 1), void 0, void 0, void 0, void 0) : this._then(n, void 0, void 0, t, void 0)
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    12 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(t, e) {
                            var n = t.reduce;
                            t.prototype.each = function(t) {
                                return n(this, t, null, e)
                            },
                            t.each = function(t, r) {
                                return n(t, r, null, e)
                            }
                        }
                    },
                    {}],
                    13 : [function(t, e, n) {
                        "use strict";
                        function r(t, e) {
                            function n(r) {
                                return this instanceof n ? (f(this, "message", "string" == typeof r ? r: e), f(this, "name", t), void(Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r)
                            }
                            return l(n, Error),
                            n
                        }
                        function i(t) {
                            return this instanceof i ? (f(this, "name", "OperationalError"), f(this, "message", t), this.cause = t, this.isOperational = !0, void(t instanceof Error ? (f(this, "message", t.message), f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t)
                        }
                        var o, s, a = t("./es5.js"),
                        c = a.freeze,
                        u = t("./util.js"),
                        l = u.inherits,
                        f = u.notEnumerableProp,
                        p = r("Warning", "warning"),
                        h = r("CancellationError", "cancellation error"),
                        d = r("TimeoutError", "timeout error"),
                        v = r("AggregateError", "aggregate error");
                        try {
                            o = TypeError,
                            s = RangeError
                        } catch(m) {
                            o = r("TypeError", "type error"),
                            s = r("RangeError", "range error")
                        }
                        for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), _ = 0; _ < g.length; ++_)"function" == typeof Array.prototype[g[_]] && (v.prototype[g[_]] = Array.prototype[g[_]]);
                        a.defineProperty(v.prototype, "length", {
                            value: 0,
                            configurable: !1,
                            writable: !0,
                            enumerable: !0
                        }),
                        v.prototype.isOperational = !0;
                        var y = 0;
                        v.prototype.toString = function() {
                            var t = Array(4 * y + 1).join(" "),
                            e = "\n" + t + "AggregateError of:\n";
                            y++,
                            t = Array(4 * y + 1).join(" ");
                            for (var n = 0; n < this.length; ++n) {
                                for (var r = this[n] === this ? "[Circular AggregateError]": this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];
                                r = i.join("\n"),
                                e += r + "\n"
                            }
                            return y--,
                            e
                        },
                        l(i, Error);
                        var b = Error.__BluebirdErrorTypes__;
                        b || (b = c({
                            CancellationError: h,
                            TimeoutError: d,
                            OperationalError: i,
                            RejectionError: i,
                            AggregateError: v
                        }), f(Error, "__BluebirdErrorTypes__", b)),
                        e.exports = {
                            Error: Error,
                            TypeError: o,
                            RangeError: s,
                            CancellationError: b.CancellationError,
                            OperationalError: b.OperationalError,
                            TimeoutError: b.TimeoutError,
                            AggregateError: b.AggregateError,
                            Warning: p
                        }
                    },
                    {
                        "./es5.js": 14,
                        "./util.js": 38
                    }],
                    14 : [function(t, e, n) {
                        var r = function() {
                            "use strict";
                            return void 0 === this
                        } ();
                        if (r) e.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: r,
                            propertyIsWritable: function(t, e) {
                                var n = Object.getOwnPropertyDescriptor(t, e);
                                return ! (n && !n.writable && !n.set)
                            }
                        };
                        else {
                            var i = {}.hasOwnProperty,
                            o = {}.toString,
                            s = {}.constructor.prototype,
                            a = function(t) {
                                var e = [];
                                for (var n in t) i.call(t, n) && e.push(n);
                                return e
                            },
                            c = function(t, e) {
                                return {
                                    value: t[e]
                                }
                            },
                            u = function(t, e, n) {
                                return t[e] = n.value,
                                t
                            },
                            l = function(t) {
                                return t
                            },
                            f = function(t) {
                                try {
                                    return Object(t).constructor.prototype
                                } catch(e) {
                                    return s
                                }
                            },
                            p = function(t) {
                                try {
                                    return "[object Array]" === o.call(t)
                                } catch(e) {
                                    return ! 1
                                }
                            };
                            e.exports = {
                                isArray: p,
                                keys: a,
                                names: a,
                                defineProperty: u,
                                getDescriptor: c,
                                freeze: l,
                                getPrototypeOf: f,
                                isES5: r,
                                propertyIsWritable: function() {
                                    return ! 0
                                }
                            }
                        }
                    },
                    {}],
                    15 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(t, e) {
                            var n = t.map;
                            t.prototype.filter = function(t, r) {
                                return n(this, t, r, e)
                            },
                            t.filter = function(t, r, i) {
                                return n(t, r, i, e)
                            }
                        }
                    },
                    {}],
                    16 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r) {
                            function i() {
                                return this
                            }
                            function o() {
                                throw this
                            }
                            function s(t) {
                                return function() {
                                    return t
                                }
                            }
                            function a(t) {
                                return function() {
                                    throw t
                                }
                            }
                            function c(t, e, n) {
                                var r;
                                return r = p(e) ? n ? s(e) : a(e) : n ? i: o,
                                t._then(r, h, void 0, e, void 0)
                            }
                            function u(t) {
                                var i = this.promise,
                                o = this.handler,
                                s = i._isBound() ? o.call(i._boundValue()) : o();
                                if (void 0 !== s) {
                                    var a = r(s, i);
                                    if (a instanceof e) return a = a._target(),
                                    c(a, t, i.isFulfilled())
                                }
                                return i.isRejected() ? (n.e = t, n) : t
                            }
                            function l(t) {
                                var n = this.promise,
                                i = this.handler,
                                o = n._isBound() ? i.call(n._boundValue(), t) : i(t);
                                if (void 0 !== o) {
                                    var s = r(o, n);
                                    if (s instanceof e) return s = s._target(),
                                    c(s, t, !0)
                                }
                                return t
                            }
                            var f = t("./util.js"),
                            p = f.isPrimitive,
                            h = f.thrower;
                            e.prototype._passThroughHandler = function(t, e) {
                                if ("function" != typeof t) return this.then();
                                var n = {
                                    promise: this,
                                    handler: t
                                };
                                return this._then(e ? u: l, e ? u: void 0, void 0, n, void 0)
                            },
                            e.prototype.lastly = e.prototype["finally"] = function(t) {
                                return this._passThroughHandler(t, !0)
                            },
                            e.prototype.tap = function(t) {
                                return this._passThroughHandler(t, !1)
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    17 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t, n, r) {
                                for (var o = 0; o < n.length; ++o) {
                                    r._pushContext();
                                    var s = f(n[o])(t);
                                    if (r._popContext(), s === l) {
                                        r._pushContext();
                                        var a = e.reject(l.e);
                                        return r._popContext(),
                                        a
                                    }
                                    var c = i(s, r);
                                    if (c instanceof e) return c
                                }
                                return null
                            }
                            function s(t, n, i, o) {
                                var s = this._promise = new e(r);
                                s._captureStackTrace(),
                                this._stack = o,
                                this._generatorFunction = t,
                                this._receiver = n,
                                this._generator = void 0,
                                this._yieldHandlers = "function" == typeof i ? [i].concat(p) : p
                            }
                            var a = t("./errors.js"),
                            c = a.TypeError,
                            u = t("./util.js"),
                            l = u.errorObj,
                            f = u.tryCatch,
                            p = [];
                            s.prototype.promise = function() {
                                return this._promise
                            },
                            s.prototype._run = function() {
                                this._generator = this._generatorFunction.call(this._receiver),
                                this._receiver = this._generatorFunction = void 0,
                                this._next(void 0)
                            },
                            s.prototype._continue = function(t) {
                                if (t === l) return this._promise._rejectCallback(t.e, !1, !0);
                                var n = t.value;
                                if (t.done === !0) this._promise._resolveCallback(n);
                                else {
                                    var r = i(n, this._promise);
                                    if (! (r instanceof e) && (r = o(r, this._yieldHandlers, this._promise), null === r)) return void this._throw(new c("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s", n) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                    r._then(this._next, this._throw, void 0, this, null)
                                }
                            },
                            s.prototype._throw = function(t) {
                                this._promise._attachExtraTrace(t),
                                this._promise._pushContext();
                                var e = f(this._generator["throw"]).call(this._generator, t);
                                this._promise._popContext(),
                                this._continue(e)
                            },
                            s.prototype._next = function(t) {
                                this._promise._pushContext();
                                var e = f(this._generator.next).call(this._generator, t);
                                this._promise._popContext(),
                                this._continue(e)
                            },
                            e.coroutine = function(t, e) {
                                if ("function" != typeof t) throw new c("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                                var n = Object(e).yieldHandler,
                                r = s,
                                i = (new Error).stack;
                                return function() {
                                    var e = t.apply(this, arguments),
                                    o = new r(void 0, void 0, n, i);
                                    return o._generator = e,
                                    o._next(void 0),
                                    o.promise()
                                }
                            },
                            e.coroutine.addYieldHandler = function(t) {
                                if ("function" != typeof t) throw new c("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                p.push(t)
                            },
                            e.spawn = function(t) {
                                if ("function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                                var r = new s(t, this),
                                i = r.promise();
                                return r._run(e.spawn),
                                i
                            }
                        }
                    },
                    {
                        "./errors.js": 13,
                        "./util.js": 38
                    }],
                    18 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            var o = t("./util.js");
                            o.canEvaluate,
                            o.tryCatch,
                            o.errorObj;
                            e.join = function() {
                                var t, e = arguments.length - 1;
                                if (e > 0 && "function" == typeof arguments[e]) {
                                    t = arguments[e];
                                    var r
                                }
                                for (var i = arguments.length,
                                o = new Array(i), s = 0; i > s; ++s) o[s] = arguments[s];
                                t && o.pop();
                                var r = new n(o).promise();
                                return void 0 !== t ? r.spread(t) : r
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    19 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i, o) {
                            function s(t, e, n, r) {
                                this.constructor$(t),
                                this._promise._captureStackTrace();
                                var i = u();
                                this._callback = null === i ? e: i.bind(e),
                                this._preservedValues = r === o ? new Array(this.length()) : null,
                                this._limit = n,
                                this._inFlight = 0,
                                this._queue = n >= 1 ? [] : v,
                                l.invoke(a, this, void 0)
                            }
                            function a() {
                                this._init$(void 0, -2)
                            }
                            function c(t, e, n, r) {
                                var i = "object" == typeof n && null !== n ? n.concurrency: 0;
                                return i = "number" == typeof i && isFinite(i) && i >= 1 ? i: 0,
                                new s(t, e, i, r)
                            }
                            var u = e._getDomain,
                            l = t("./async.js"),
                            f = t("./util.js"),
                            p = f.tryCatch,
                            h = f.errorObj,
                            d = {},
                            v = [];
                            f.inherits(s, n),
                            s.prototype._init = function() {},
                            s.prototype._promiseFulfilled = function(t, n) {
                                var r = this._values,
                                o = this.length(),
                                s = this._preservedValues,
                                a = this._limit;
                                if (r[n] === d) {
                                    if (r[n] = t, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return
                                } else {
                                    if (a >= 1 && this._inFlight >= a) return r[n] = t,
                                    void this._queue.push(n);
                                    null !== s && (s[n] = t);
                                    var c = this._callback,
                                    u = this._promise._boundValue();
                                    this._promise._pushContext();
                                    var l = p(c).call(u, t, n, o);
                                    if (this._promise._popContext(), l === h) return this._reject(l.e);
                                    var f = i(l, this._promise);
                                    if (f instanceof e) {
                                        if (f = f._target(), f._isPending()) return a >= 1 && this._inFlight++,
                                        r[n] = d,
                                        f._proxyPromiseArray(this, n);
                                        if (!f._isFulfilled()) return this._reject(f._reason());
                                        l = f._value()
                                    }
                                    r[n] = l
                                }
                                var v = ++this._totalResolved;
                                v >= o && (null !== s ? this._filter(r, s) : this._resolve(r))
                            },
                            s.prototype._drainQueue = function() {
                                for (var t = this._queue,
                                e = this._limit,
                                n = this._values; t.length > 0 && this._inFlight < e;) {
                                    if (this._isResolved()) return;
                                    var r = t.pop();
                                    this._promiseFulfilled(n[r], r)
                                }
                            },
                            s.prototype._filter = function(t, e) {
                                for (var n = e.length,
                                r = new Array(n), i = 0, o = 0; n > o; ++o) t[o] && (r[i++] = e[o]);
                                r.length = i,
                                this._resolve(r)
                            },
                            s.prototype.preservedValues = function() {
                                return this._preservedValues
                            },
                            e.prototype.map = function(t, e) {
                                return "function" != typeof t ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : c(this, t, e, null).promise()
                            },
                            e.map = function(t, e, n, i) {
                                return "function" != typeof e ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : c(t, e, n, i).promise()
                            }
                        }
                    },
                    {
                        "./async.js": 2,
                        "./util.js": 38
                    }],
                    20 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            var o = t("./util.js"),
                            s = o.tryCatch;
                            e.method = function(t) {
                                if ("function" != typeof t) throw new e.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                return function() {
                                    var r = new e(n);
                                    r._captureStackTrace(),
                                    r._pushContext();
                                    var i = s(t).apply(this, arguments);
                                    return r._popContext(),
                                    r._resolveFromSyncValue(i),
                                    r
                                }
                            },
                            e.attempt = e["try"] = function(t, r, a) {
                                if ("function" != typeof t) return i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                var c = new e(n);
                                c._captureStackTrace(),
                                c._pushContext();
                                var u = o.isArray(r) ? s(t).apply(a, r) : s(t).call(a, r);
                                return c._popContext(),
                                c._resolveFromSyncValue(u),
                                c
                            },
                            e.prototype._resolveFromSyncValue = function(t) {
                                t === o.errorObj ? this._rejectCallback(t.e, !1, !0) : this._resolveCallback(t, !0)
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    21 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t, e) {
                                var n = this;
                                if (!o.isArray(t)) return r.call(n, t, e);
                                var i = a(e).apply(n._boundValue(), [null].concat(t));
                                i === c && s.throwLater(i.e)
                            }
                            function r(t, e) {
                                var n = this,
                                r = n._boundValue(),
                                i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);
                                i === c && s.throwLater(i.e)
                            }
                            function i(t, e) {
                                var n = this;
                                if (!t) {
                                    var r = n._target(),
                                    i = r._getCarriedStackTrace();
                                    i.cause = t,
                                    t = i
                                }
                                var o = a(e).call(n._boundValue(), t);
                                o === c && s.throwLater(o.e)
                            }
                            var o = t("./util.js"),
                            s = t("./async.js"),
                            a = o.tryCatch,
                            c = o.errorObj;
                            e.prototype.asCallback = e.prototype.nodeify = function(t, e) {
                                if ("function" == typeof t) {
                                    var o = r;
                                    void 0 !== e && Object(e).spread && (o = n),
                                    this._then(o, i, void 0, this, t)
                                }
                                return this
                            }
                        }
                    },
                    {
                        "./async.js": 2,
                        "./util.js": 38
                    }],
                    22 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n) {
                            var r = t("./util.js"),
                            i = t("./async.js"),
                            o = r.tryCatch,
                            s = r.errorObj;
                            e.prototype.progressed = function(t) {
                                return this._then(void 0, void 0, t, void 0, void 0)
                            },
                            e.prototype._progress = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._target()._progressUnchecked(t)
                            },
                            e.prototype._progressHandlerAt = function(t) {
                                return 0 === t ? this._progressHandler0: this[(t << 2) + t - 5 + 2]
                            },
                            e.prototype._doProgressWith = function(t) {
                                var n = t.value,
                                i = t.handler,
                                a = t.promise,
                                c = t.receiver,
                                u = o(i).call(c, n);
                                if (u === s) {
                                    if (null != u.e && "StopProgressPropagation" !== u.e.name) {
                                        var l = r.canAttachTrace(u.e) ? u.e: new Error(r.toString(u.e));
                                        a._attachExtraTrace(l),
                                        a._progress(u.e)
                                    }
                                } else u instanceof e ? u._then(a._progress, null, null, a, void 0) : a._progress(u)
                            },
                            e.prototype._progressUnchecked = function(t) {
                                for (var r = this._length(), o = this._progress, s = 0; r > s; s++) {
                                    var a = this._progressHandlerAt(s),
                                    c = this._promiseAt(s);
                                    if (c instanceof e)"function" == typeof a ? i.invoke(this._doProgressWith, this, {
                                        handler: a,
                                        promise: c,
                                        receiver: this._receiverAt(s),
                                        value: t
                                    }) : i.invoke(o, c, t);
                                    else {
                                        var u = this._receiverAt(s);
                                        "function" == typeof a ? a.call(u, t, c) : u instanceof n && !u._isResolved() && u._promiseProgressed(t, c)
                                    }
                                }
                            }
                        }
                    },
                    {
                        "./async.js": 2,
                        "./util.js": 38
                    }],
                    23 : [function(t, n, r) {
                        "use strict";
                        n.exports = function() {
                            function n(t) {
                                if ("function" != typeof t) throw new p("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");
                                if (this.constructor !== n) throw new p("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");
                                this._bitField = 0,
                                this._fulfillmentHandler0 = void 0,
                                this._rejectionHandler0 = void 0,
                                this._progressHandler0 = void 0,
                                this._promise0 = void 0,
                                this._receiver0 = void 0,
                                this._settledValue = void 0,
                                t !== h && this._resolveFromResolver(t)
                            }
                            function r(t) {
                                var e = new n(h);
                                e._fulfillmentHandler0 = t,
                                e._rejectionHandler0 = t,
                                e._progressHandler0 = t,
                                e._promise0 = t,
                                e._receiver0 = t,
                                e._settledValue = t
                            }
                            var i, o = function() {
                                return new p("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n")
                            },
                            s = function() {
                                return new n.PromiseInspection(this._target())
                            },
                            a = function(t) {
                                return n.reject(new p(t))
                            },
                            c = t("./util.js");
                            i = c.isNode ?
                            function() {
                                var t = e.domain;
                                return void 0 === t && (t = null),
                                t
                            }: function() {
                                return null
                            },
                            c.notEnumerableProp(n, "_getDomain", i);
                            var u = {},
                            l = t("./async.js"),
                            f = t("./errors.js"),
                            p = n.TypeError = f.TypeError;
                            n.RangeError = f.RangeError,
                            n.CancellationError = f.CancellationError,
                            n.TimeoutError = f.TimeoutError,
                            n.OperationalError = f.OperationalError,
                            n.RejectionError = f.OperationalError,
                            n.AggregateError = f.AggregateError;
                            var h = function() {},
                            d = {},
                            v = {
                                e: null
                            },
                            m = t("./thenables.js")(n, h),
                            g = t("./promise_array.js")(n, h, m, a),
                            _ = t("./captured_trace.js")(),
                            y = t("./debuggability.js")(n, _),
                            b = t("./context.js")(n, _, y),
                            w = t("./catch_filter.js")(v),
                            x = t("./promise_resolver.js"),
                            j = x._nodebackForPromise,
                            k = c.errorObj,
                            E = c.tryCatch;
                            return n.prototype.toString = function() {
                                return "[object Promise]"
                            },
                            n.prototype.caught = n.prototype["catch"] = function(t) {
                                var e = arguments.length;
                                if (e > 1) {
                                    var r, i = new Array(e - 1),
                                    o = 0;
                                    for (r = 0; e - 1 > r; ++r) {
                                        var s = arguments[r];
                                        if ("function" != typeof s) return n.reject(new p("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));
                                        i[o++] = s
                                    }
                                    i.length = o,
                                    t = arguments[r];
                                    var a = new w(i, t, this);
                                    return this._then(void 0, a.doFilter, void 0, a, void 0)
                                }
                                return this._then(void 0, t, void 0, void 0, void 0)
                            },
                            n.prototype.reflect = function() {
                                return this._then(s, s, void 0, this, void 0)
                            },
                            n.prototype.then = function(t, e, n) {
                                if (y() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                                    var r = ".then() only accepts functions but was passed: " + c.classString(t);
                                    arguments.length > 1 && (r += ", " + c.classString(e)),
                                    this._warn(r)
                                }
                                return this._then(t, e, n, void 0, void 0)
                            },
                            n.prototype.done = function(t, e, n) {
                                var r = this._then(t, e, n, void 0, void 0);
                                r._setIsFinal()
                            },
                            n.prototype.spread = function(t, e) {
                                return this.all()._then(t, e, void 0, d, void 0)
                            },
                            n.prototype.isCancellable = function() {
                                return ! this.isResolved() && this._cancellable()
                            },
                            n.prototype.toJSON = function() {
                                var t = {
                                    isFulfilled: !1,
                                    isRejected: !1,
                                    fulfillmentValue: void 0,
                                    rejectionReason: void 0
                                };
                                return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0),
                                t
                            },
                            n.prototype.all = function() {
                                return new g(this).promise()
                            },
                            n.prototype.error = function(t) {
                                return this.caught(c.originatesFromRejection, t)
                            },
                            n.is = function(t) {
                                return t instanceof n
                            },
                            n.fromNode = function(t) {
                                var e = new n(h),
                                r = E(t)(j(e));
                                return r === k && e._rejectCallback(r.e, !0, !0),
                                e
                            },
                            n.all = function(t) {
                                return new g(t).promise()
                            },
                            n.defer = n.pending = function() {
                                var t = new n(h);
                                return new x(t)
                            },
                            n.cast = function(t) {
                                var e = m(t);
                                if (! (e instanceof n)) {
                                    var r = e;
                                    e = new n(h),
                                    e._fulfillUnchecked(r)
                                }
                                return e
                            },
                            n.resolve = n.fulfilled = n.cast,
                            n.reject = n.rejected = function(t) {
                                var e = new n(h);
                                return e._captureStackTrace(),
                                e._rejectCallback(t, !0),
                                e
                            },
                            n.setScheduler = function(t) {
                                if ("function" != typeof t) throw new p("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                var e = l._schedule;
                                return l._schedule = t,
                                e
                            },
                            n.prototype._then = function(t, e, r, o, s) {
                                var a = void 0 !== s,
                                c = a ? s: new n(h);
                                a || (c._propagateFrom(this, 5), c._captureStackTrace());
                                var u = this._target();
                                u !== this && (void 0 === o && (o = this._boundTo), a || c._setIsMigrated());
                                var f = u._addCallbacks(t, e, r, c, o, i());
                                return u._isResolved() && !u._isSettlePromisesQueued() && l.invoke(u._settlePromiseAtPostResolution, u, f),
                                c
                            },
                            n.prototype._settlePromiseAtPostResolution = function(t) {
                                this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(),
                                this._settlePromiseAt(t)
                            },
                            n.prototype._length = function() {
                                return 131071 & this._bitField
                            },
                            n.prototype._isFollowingOrFulfilledOrRejected = function() {
                                return (939524096 & this._bitField) > 0
                            },
                            n.prototype._isFollowing = function() {
                                return 536870912 === (536870912 & this._bitField)
                            },
                            n.prototype._setLength = function(t) {
                                this._bitField = -131072 & this._bitField | 131071 & t
                            },
                            n.prototype._setFulfilled = function() {
                                this._bitField = 268435456 | this._bitField
                            },
                            n.prototype._setRejected = function() {
                                this._bitField = 134217728 | this._bitField
                            },
                            n.prototype._setFollowing = function() {
                                this._bitField = 536870912 | this._bitField
                            },
                            n.prototype._setIsFinal = function() {
                                this._bitField = 33554432 | this._bitField
                            },
                            n.prototype._isFinal = function() {
                                return (33554432 & this._bitField) > 0
                            },
                            n.prototype._cancellable = function() {
                                return (67108864 & this._bitField) > 0
                            },
                            n.prototype._setCancellable = function() {
                                this._bitField = 67108864 | this._bitField
                            },
                            n.prototype._unsetCancellable = function() {
                                this._bitField = -67108865 & this._bitField
                            },
                            n.prototype._setIsMigrated = function() {
                                this._bitField = 4194304 | this._bitField
                            },
                            n.prototype._unsetIsMigrated = function() {
                                this._bitField = -4194305 & this._bitField
                            },
                            n.prototype._isMigrated = function() {
                                return (4194304 & this._bitField) > 0
                            },
                            n.prototype._receiverAt = function(t) {
                                var e = 0 === t ? this._receiver0: this[5 * t - 5 + 4];
                                if (e !== u) return void 0 === e && this._isBound() ? this._boundValue() : e
                            },
                            n.prototype._promiseAt = function(t) {
                                return 0 === t ? this._promise0: this[5 * t - 5 + 3]
                            },
                            n.prototype._fulfillmentHandlerAt = function(t) {
                                return 0 === t ? this._fulfillmentHandler0: this[5 * t - 5 + 0]
                            },
                            n.prototype._rejectionHandlerAt = function(t) {
                                return 0 === t ? this._rejectionHandler0: this[5 * t - 5 + 1]
                            },
                            n.prototype._boundValue = function() {
                                var t = this._boundTo;
                                return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t
                            },
                            n.prototype._migrateCallbacks = function(t, e) {
                                var r = t._fulfillmentHandlerAt(e),
                                i = t._rejectionHandlerAt(e),
                                o = t._progressHandlerAt(e),
                                s = t._promiseAt(e),
                                a = t._receiverAt(e);
                                s instanceof n && s._setIsMigrated(),
                                void 0 === a && (a = u),
                                this._addCallbacks(r, i, o, s, a, null)
                            },
                            n.prototype._addCallbacks = function(t, e, n, r, i, o) {
                                var s = this._length();
                                if (s >= 131066 && (s = 0, this._setLength(0)), 0 === s) this._promise0 = r,
                                void 0 !== i && (this._receiver0 = i),
                                "function" != typeof t || this._isCarryingStackTrace() || (this._fulfillmentHandler0 = null === o ? t: o.bind(t)),
                                "function" == typeof e && (this._rejectionHandler0 = null === o ? e: o.bind(e)),
                                "function" == typeof n && (this._progressHandler0 = null === o ? n: o.bind(n));
                                else {
                                    var a = 5 * s - 5;
                                    this[a + 3] = r,
                                    this[a + 4] = i,
                                    "function" == typeof t && (this[a + 0] = null === o ? t: o.bind(t)),
                                    "function" == typeof e && (this[a + 1] = null === o ? e: o.bind(e)),
                                    "function" == typeof n && (this[a + 2] = null === o ? n: o.bind(n))
                                }
                                return this._setLength(s + 1),
                                s
                            },
                            n.prototype._setProxyHandlers = function(t, e) {
                                var n = this._length();
                                if (n >= 131066 && (n = 0, this._setLength(0)), 0 === n) this._promise0 = e,
                                this._receiver0 = t;
                                else {
                                    var r = 5 * n - 5;
                                    this[r + 3] = e,
                                    this[r + 4] = t
                                }
                                this._setLength(n + 1)
                            },
                            n.prototype._proxyPromiseArray = function(t, e) {
                                this._setProxyHandlers(t, e)
                            },
                            n.prototype._resolveCallback = function(t, e) {
                                if (!this._isFollowingOrFulfilledOrRejected()) {
                                    if (t === this) return this._rejectCallback(o(), !1, !0);
                                    var r = m(t, this);
                                    if (! (r instanceof n)) return this._fulfill(t);
                                    var i = 1 | (e ? 4 : 0);
                                    this._propagateFrom(r, i);
                                    var s = r._target();
                                    if (s._isPending()) {
                                        for (var a = this._length(), c = 0; a > c; ++c) s._migrateCallbacks(this, c);
                                        this._setFollowing(),
                                        this._setLength(0),
                                        this._setFollowee(s)
                                    } else s._isFulfilled() ? this._fulfillUnchecked(s._value()) : this._rejectUnchecked(s._reason(), s._getCarriedStackTrace())
                                }
                            },
                            n.prototype._rejectCallback = function(t, e, n) {
                                n || c.markAsOriginatingFromRejection(t);
                                var r = c.ensureErrorObject(t),
                                i = r === t;
                                this._attachExtraTrace(r, e ? i: !1),
                                this._reject(t, i ? void 0 : r)
                            },
                            n.prototype._resolveFromResolver = function(t) {
                                var e = this;
                                this._captureStackTrace(),
                                this._pushContext();
                                var n = !0,
                                r = E(t)(function(t) {
                                    null !== e && (e._resolveCallback(t), e = null)
                                },
                                function(t) {
                                    null !== e && (e._rejectCallback(t, n), e = null)
                                });
                                n = !1,
                                this._popContext(),
                                void 0 !== r && r === k && null !== e && (e._rejectCallback(r.e, !0, !0), e = null)
                            },
                            n.prototype._settlePromiseFromHandler = function(t, e, n, r) {
                                if (!r._isRejected()) {
                                    r._pushContext();
                                    var i;
                                    if (i = e !== d || this._isRejected() ? E(t).call(e, n) : E(t).apply(this._boundValue(), n), r._popContext(), i === k || i === r || i === v) {
                                        var s = i === r ? o() : i.e;
                                        r._rejectCallback(s, !1, !0)
                                    } else r._resolveCallback(i)
                                }
                            },
                            n.prototype._target = function() {
                                for (var t = this; t._isFollowing();) t = t._followee();
                                return t
                            },
                            n.prototype._followee = function() {
                                return this._rejectionHandler0
                            },
                            n.prototype._setFollowee = function(t) {
                                this._rejectionHandler0 = t
                            },
                            n.prototype._cleanValues = function() {
                                this._cancellable() && (this._cancellationParent = void 0)
                            },
                            n.prototype._propagateFrom = function(t, e) { (1 & e) > 0 && t._cancellable() && (this._setCancellable(), this._cancellationParent = t),
                                (4 & e) > 0 && t._isBound() && this._setBoundTo(t._boundTo)
                            },
                            n.prototype._fulfill = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t)
                            },
                            n.prototype._reject = function(t, e) {
                                this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t, e)
                            },
                            n.prototype._settlePromiseAt = function(t) {
                                var e = this._promiseAt(t),
                                r = e instanceof n;
                                if (r && e._isMigrated()) return e._unsetIsMigrated(),
                                l.invoke(this._settlePromiseAt, this, t);
                                var i = this._isFulfilled() ? this._fulfillmentHandlerAt(t) : this._rejectionHandlerAt(t),
                                o = this._isCarryingStackTrace() ? this._getCarriedStackTrace() : void 0,
                                s = this._settledValue,
                                a = this._receiverAt(t);
                                this._clearCallbackDataAtIndex(t),
                                "function" == typeof i ? r ? this._settlePromiseFromHandler(i, a, s, e) : i.call(a, s, e) : a instanceof g ? a._isResolved() || (this._isFulfilled() ? a._promiseFulfilled(s, e) : a._promiseRejected(s, e)) : r && (this._isFulfilled() ? e._fulfill(s) : e._reject(s, o)),
                                t >= 4 && 4 === (31 & t) && l.invokeLater(this._setLength, this, 0)
                            },
                            n.prototype._clearCallbackDataAtIndex = function(t) {
                                if (0 === t) this._isCarryingStackTrace() || (this._fulfillmentHandler0 = void 0),
                                this._rejectionHandler0 = this._progressHandler0 = this._receiver0 = this._promise0 = void 0;
                                else {
                                    var e = 5 * t - 5;
                                    this[e + 3] = this[e + 4] = this[e + 0] = this[e + 1] = this[e + 2] = void 0
                                }
                            },
                            n.prototype._isSettlePromisesQueued = function() {
                                return - 1073741824 === ( - 1073741824 & this._bitField)
                            },
                            n.prototype._setSettlePromisesQueued = function() {
                                this._bitField = -1073741824 | this._bitField
                            },
                            n.prototype._unsetSettlePromisesQueued = function() {
                                this._bitField = 1073741823 & this._bitField
                            },
                            n.prototype._queueSettlePromises = function() {
                                l.settlePromises(this),
                                this._setSettlePromisesQueued()
                            },
                            n.prototype._fulfillUnchecked = function(t) {
                                if (t === this) {
                                    var e = o();
                                    return this._attachExtraTrace(e),
                                    this._rejectUnchecked(e, void 0)
                                }
                                this._setFulfilled(),
                                this._settledValue = t,
                                this._cleanValues(),
                                this._length() > 0 && this._queueSettlePromises()
                            },
                            n.prototype._rejectUncheckedCheckError = function(t) {
                                var e = c.ensureErrorObject(t);
                                this._rejectUnchecked(t, e === t ? void 0 : e)
                            },
                            n.prototype._rejectUnchecked = function(t, e) {
                                if (t === this) {
                                    var n = o();
                                    return this._attachExtraTrace(n),
                                    this._rejectUnchecked(n)
                                }
                                return this._setRejected(),
                                this._settledValue = t,
                                this._cleanValues(),
                                this._isFinal() ? void l.throwLater(function(t) {
                                    throw "stack" in t && l.invokeFirst(_.unhandledRejection, void 0, t),
                                    t
                                },
                                void 0 === e ? t: e) : (void 0 !== e && e !== t && this._setCarriedStackTrace(e), void(this._length() > 0 ? this._queueSettlePromises() : this._ensurePossibleRejectionHandled()))
                            },
                            n.prototype._settlePromises = function() {
                                this._unsetSettlePromisesQueued();
                                for (var t = this._length(), e = 0; t > e; e++) this._settlePromiseAt(e)
                            },
                            c.notEnumerableProp(n, "_makeSelfResolutionError", o),
                            t("./progress.js")(n, g),
                            t("./method.js")(n, h, m, a),
                            t("./bind.js")(n, h, m),
                            t("./finally.js")(n, v, m),
                            t("./direct_resolve.js")(n),
                            t("./synchronous_inspection.js")(n),
                            t("./join.js")(n, g, m, h),
                            n.Promise = n,
                            t("./map.js")(n, g, a, m, h),
                            t("./cancel.js")(n),
                            t("./using.js")(n, a, m, b),
                            t("./generators.js")(n, a, h, m),
                            t("./nodeify.js")(n),
                            t("./call_get.js")(n),
                            t("./props.js")(n, g, m, a),
                            t("./race.js")(n, h, m, a),
                            t("./reduce.js")(n, g, a, m, h),
                            t("./settle.js")(n, g),
                            t("./some.js")(n, g, a),
                            t("./promisify.js")(n, h),
                            t("./any.js")(n),
                            t("./each.js")(n, h),
                            t("./timers.js")(n, h),
                            t("./filter.js")(n, h),
                            c.toFastProperties(n),
                            c.toFastProperties(n.prototype),
                            r({
                                a: 1
                            }),
                            r({
                                b: 2
                            }),
                            r({
                                c: 3
                            }),
                            r(1),
                            r(function() {}),
                            r(void 0),
                            r(!1),
                            r(new n(h)),
                            _.setBounds(l.firstLineError, c.lastLineError),
                            n
                        }
                    },
                    {
                        "./any.js": 1,
                        "./async.js": 2,
                        "./bind.js": 3,
                        "./call_get.js": 5,
                        "./cancel.js": 6,
                        "./captured_trace.js": 7,
                        "./catch_filter.js": 8,
                        "./context.js": 9,
                        "./debuggability.js": 10,
                        "./direct_resolve.js": 11,
                        "./each.js": 12,
                        "./errors.js": 13,
                        "./filter.js": 15,
                        "./finally.js": 16,
                        "./generators.js": 17,
                        "./join.js": 18,
                        "./map.js": 19,
                        "./method.js": 20,
                        "./nodeify.js": 21,
                        "./progress.js": 22,
                        "./promise_array.js": 24,
                        "./promise_resolver.js": 25,
                        "./promisify.js": 26,
                        "./props.js": 27,
                        "./race.js": 29,
                        "./reduce.js": 30,
                        "./settle.js": 32,
                        "./some.js": 33,
                        "./synchronous_inspection.js": 34,
                        "./thenables.js": 35,
                        "./timers.js": 36,
                        "./using.js": 37,
                        "./util.js": 38
                    }],
                    24 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t) {
                                switch (t) {
                                case - 2 : return [];
                                case - 3 : return {}
                                }
                            }
                            function s(t) {
                                var r, i = this._promise = new e(n);
                                t instanceof e && (r = t, i._propagateFrom(r, 5)),
                                this._values = t,
                                this._length = 0,
                                this._totalResolved = 0,
                                this._init(void 0, -2)
                            }
                            var a = t("./util.js"),
                            c = a.isArray;
                            return s.prototype.length = function() {
                                return this._length
                            },
                            s.prototype.promise = function() {
                                return this._promise
                            },
                            s.prototype._init = function u(t, n) {
                                var s = r(this._values, this._promise);
                                if (s instanceof e) {
                                    if (s = s._target(), this._values = s, !s._isFulfilled()) return s._isPending() ? void s._then(u, this._reject, void 0, this, n) : void this._reject(s._reason());
                                    if (s = s._value(), !c(s)) {
                                        var a = new e.TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                                        return void this.__hardReject__(a)
                                    }
                                } else if (!c(s)) return void this._promise._reject(i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());
                                if (0 === s.length) return void( - 5 === n ? this._resolveEmptyArray() : this._resolve(o(n)));
                                var l = this.getActualLength(s.length);
                                this._length = l,
                                this._values = this.shouldCopyValues() ? new Array(l) : this._values;
                                for (var f = this._promise,
                                p = 0; l > p; ++p) {
                                    var h = this._isResolved(),
                                    d = r(s[p], f);
                                    d instanceof e ? (d = d._target(), h ? d._ignoreRejections() : d._isPending() ? d._proxyPromiseArray(this, p) : d._isFulfilled() ? this._promiseFulfilled(d._value(), p) : this._promiseRejected(d._reason(), p)) : h || this._promiseFulfilled(d, p)
                                }
                            },
                            s.prototype._isResolved = function() {
                                return null === this._values
                            },
                            s.prototype._resolve = function(t) {
                                this._values = null,
                                this._promise._fulfill(t)
                            },
                            s.prototype.__hardReject__ = s.prototype._reject = function(t) {
                                this._values = null,
                                this._promise._rejectCallback(t, !1, !0)
                            },
                            s.prototype._promiseProgressed = function(t, e) {
                                this._promise._progress({
                                    index: e,
                                    value: t
                                })
                            },
                            s.prototype._promiseFulfilled = function(t, e) {
                                this._values[e] = t;
                                var n = ++this._totalResolved;
                                n >= this._length && this._resolve(this._values)
                            },
                            s.prototype._promiseRejected = function(t, e) {
                                this._totalResolved++,
                                this._reject(t)
                            },
                            s.prototype.shouldCopyValues = function() {
                                return ! 0
                            },
                            s.prototype.getActualLength = function(t) {
                                return t
                            },
                            s
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    25 : [function(t, e, n) {
                        "use strict";
                        function r(t) {
                            return t instanceof Error && h.getPrototypeOf(t) === Error.prototype
                        }
                        function i(t) {
                            var e;
                            if (r(t)) {
                                e = new f(t),
                                e.name = t.name,
                                e.message = t.message,
                                e.stack = t.stack;
                                for (var n = h.keys(t), i = 0; i < n.length; ++i) {
                                    var o = n[i];
                                    d.test(o) || (e[o] = t[o])
                                }
                                return e
                            }
                            return a.markAsOriginatingFromRejection(t),
                            t
                        }
                        function o(t) {
                            return function(e, n) {
                                if (null !== t) {
                                    if (e) {
                                        var r = i(c(e));
                                        t._attachExtraTrace(r),
                                        t._reject(r)
                                    } else if (arguments.length > 2) {
                                        for (var o = arguments.length,
                                        s = new Array(o - 1), a = 1; o > a; ++a) s[a - 1] = arguments[a];
                                        t._fulfill(s)
                                    } else t._fulfill(n);
                                    t = null
                                }
                            }
                        }
                        var s, a = t("./util.js"),
                        c = a.maybeWrapAsError,
                        u = t("./errors.js"),
                        l = u.TimeoutError,
                        f = u.OperationalError,
                        p = a.haveGetters,
                        h = t("./es5.js"),
                        d = /^(?:name|message|stack|cause)$/;
                        if (s = p ?
                        function(t) {
                            this.promise = t
                        }: function(t) {
                            this.promise = t,
                            this.asCallback = o(t),
                            this.callback = this.asCallback
                        },
                        p) {
                            var v = {
                                get: function() {
                                    return o(this.promise)
                                }
                            };
                            h.defineProperty(s.prototype, "asCallback", v),
                            h.defineProperty(s.prototype, "callback", v)
                        }
                        s._nodebackForPromise = o,
                        s.prototype.toString = function() {
                            return "[object PromiseResolver]"
                        },
                        s.prototype.resolve = s.prototype.fulfill = function(t) {
                            if (! (this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                            this.promise._resolveCallback(t)
                        },
                        s.prototype.reject = function(t) {
                            if (! (this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                            this.promise._rejectCallback(t)
                        },
                        s.prototype.progress = function(t) {
                            if (! (this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                            this.promise._progress(t)
                        },
                        s.prototype.cancel = function(t) {
                            this.promise.cancel(t)
                        },
                        s.prototype.timeout = function() {
                            this.reject(new l("timeout"))
                        },
                        s.prototype.isResolved = function() {
                            return this.promise.isResolved()
                        },
                        s.prototype.toJSON = function() {
                            return this.promise.toJSON()
                        },
                        e.exports = s
                    },
                    {
                        "./errors.js": 13,
                        "./es5.js": 14,
                        "./util.js": 38
                    }],
                    26 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t) {
                                return ! x.test(t)
                            }
                            function i(t) {
                                try {
                                    return t.__isPromisified__ === !0
                                } catch(e) {
                                    return ! 1
                                }
                            }
                            function o(t, e, n) {
                                var r = h.getDataPropertyOrDefault(t, e + n, b);
                                return r ? i(r) : !1
                            }
                            function s(t, e, n) {
                                for (var r = 0; r < t.length; r += 2) {
                                    var i = t[r];
                                    if (n.test(i)) for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2) if (t[s] === o) throw new _("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s", e))
                                }
                            }
                            function a(t, e, n, r) {
                                for (var a = h.inheritedDataKeys(t), c = [], u = 0; u < a.length; ++u) {
                                    var l = a[u],
                                    f = t[l],
                                    p = r === j ? !0 : j(l, f, t);
                                    "function" != typeof f || i(f) || o(t, l, e) || !r(l, f, t, p) || c.push(l, f)
                                }
                                return s(c, e, n),
                                c
                            }
                            function c(t, r, i, o) {
                                function s() {
                                    var i = r;
                                    r === p && (i = this);
                                    var o = new e(n);
                                    o._captureStackTrace();
                                    var s = "string" == typeof c && this !== a ? this[c] : t,
                                    u = d(o);
                                    try {
                                        s.apply(i, v(arguments, u))
                                    } catch(l) {
                                        o._rejectCallback(m(l), !0, !0)
                                    }
                                    return o
                                }
                                var a = function() {
                                    return this
                                } (),
                                c = t;
                                return "string" == typeof c && (t = o),
                                h.notEnumerableProp(s, "__isPromisified__", !0),
                                s
                            }
                            function u(t, e, n, r) {
                                for (var i = new RegExp(k(e) + "$"), o = a(t, e, i, n), s = 0, c = o.length; c > s; s += 2) {
                                    var u = o[s],
                                    l = o[s + 1],
                                    f = u + e;
                                    if (r === E) t[f] = E(u, p, u, l, e);
                                    else {
                                        var d = r(l,
                                        function() {
                                            return E(u, p, u, l, e)
                                        });
                                        h.notEnumerableProp(d, "__isPromisified__", !0),
                                        t[f] = d
                                    }
                                }
                                return h.toFastProperties(t),
                                t
                            }
                            function l(t, e) {
                                return E(t, e, void 0, t)
                            }
                            var f, p = {},
                            h = t("./util.js"),
                            d = t("./promise_resolver.js")._nodebackForPromise,
                            v = h.withAppended,
                            m = h.maybeWrapAsError,
                            g = h.canEvaluate,
                            _ = t("./errors").TypeError,
                            y = "Async",
                            b = {
                                __isPromisified__: !0
                            },
                            w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                            x = new RegExp("^(?:" + w.join("|") + ")$"),
                            j = function(t) {
                                return h.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
                            },
                            k = function(t) {
                                return t.replace(/([$])/, "\\$")
                            },
                            E = g ? f: c;
                            e.promisify = function(t, e) {
                                if ("function" != typeof t) throw new _("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                if (i(t)) return t;
                                var n = l(t, arguments.length < 2 ? p: e);
                                return h.copyDescriptors(t, n, r),
                                n
                            },
                            e.promisifyAll = function(t, e) {
                                if ("function" != typeof t && "object" != typeof t) throw new _("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");
                                e = Object(e);
                                var n = e.suffix;
                                "string" != typeof n && (n = y);
                                var r = e.filter;
                                "function" != typeof r && (r = j);
                                var i = e.promisifier;
                                if ("function" != typeof i && (i = E), !h.isIdentifier(n)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");
                                for (var o = h.inheritedDataKeys(t), s = 0; s < o.length; ++s) {
                                    var a = t[o[s]];
                                    "constructor" !== o[s] && h.isClass(a) && (u(a.prototype, n, r, i), u(a, n, r, i))
                                }
                                return u(t, n, r, i)
                            }
                        }
                    },
                    {
                        "./errors": 13,
                        "./promise_resolver.js": 25,
                        "./util.js": 38
                    }],
                    27 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t) {
                                for (var e = u.keys(t), n = e.length, r = new Array(2 * n), i = 0; n > i; ++i) {
                                    var o = e[i];
                                    r[i] = t[o],
                                    r[i + n] = o
                                }
                                this.constructor$(r)
                            }
                            function s(t) {
                                var n, s = r(t);
                                return c(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 4), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n")
                            }
                            var a = t("./util.js"),
                            c = a.isObject,
                            u = t("./es5.js");
                            a.inherits(o, n),
                            o.prototype._init = function() {
                                this._init$(void 0, -3)
                            },
                            o.prototype._promiseFulfilled = function(t, e) {
                                this._values[e] = t;
                                var n = ++this._totalResolved;
                                if (n >= this._length) {
                                    for (var r = {},
                                    i = this.length(), o = 0, s = this.length(); s > o; ++o) r[this._values[o + i]] = this._values[o];
                                    this._resolve(r)
                                }
                            },
                            o.prototype._promiseProgressed = function(t, e) {
                                this._promise._progress({
                                    key: this._values[e + this.length()],
                                    value: t
                                })
                            },
                            o.prototype.shouldCopyValues = function() {
                                return ! 1
                            },
                            o.prototype.getActualLength = function(t) {
                                return t >> 1
                            },
                            e.prototype.props = function() {
                                return s(this)
                            },
                            e.props = function(t) {
                                return s(t)
                            }
                        }
                    },
                    {
                        "./es5.js": 14,
                        "./util.js": 38
                    }],
                    28 : [function(t, e, n) {
                        "use strict";
                        function r(t, e, n, r, i) {
                            for (var o = 0; i > o; ++o) n[o + r] = t[o + e],
                            t[o + e] = void 0
                        }
                        function i(t) {
                            this._capacity = t,
                            this._length = 0,
                            this._front = 0
                        }
                        i.prototype._willBeOverCapacity = function(t) {
                            return this._capacity < t
                        },
                        i.prototype._pushOne = function(t) {
                            var e = this.length();
                            this._checkCapacity(e + 1);
                            var n = this._front + e & this._capacity - 1;
                            this[n] = t,
                            this._length = e + 1
                        },
                        i.prototype._unshiftOne = function(t) {
                            var e = this._capacity;
                            this._checkCapacity(this.length() + 1);
                            var n = this._front,
                            r = (n - 1 & e - 1 ^ e) - e;
                            this[r] = t,
                            this._front = r,
                            this._length = this.length() + 1
                        },
                        i.prototype.unshift = function(t, e, n) {
                            this._unshiftOne(n),
                            this._unshiftOne(e),
                            this._unshiftOne(t)
                        },
                        i.prototype.push = function(t, e, n) {
                            var r = this.length() + 3;
                            if (this._willBeOverCapacity(r)) return this._pushOne(t),
                            this._pushOne(e),
                            void this._pushOne(n);
                            var i = this._front + r - 3;
                            this._checkCapacity(r);
                            var o = this._capacity - 1;
                            this[i + 0 & o] = t,
                            this[i + 1 & o] = e,
                            this[i + 2 & o] = n,
                            this._length = r
                        },
                        i.prototype.shift = function() {
                            var t = this._front,
                            e = this[t];
                            return this[t] = void 0,
                            this._front = t + 1 & this._capacity - 1,
                            this._length--,
                            e
                        },
                        i.prototype.length = function() {
                            return this._length
                        },
                        i.prototype._checkCapacity = function(t) {
                            this._capacity < t && this._resizeTo(this._capacity << 1)
                        },
                        i.prototype._resizeTo = function(t) {
                            var e = this._capacity;
                            this._capacity = t;
                            var n = this._front,
                            i = this._length,
                            o = n + i & e - 1;
                            r(this, 0, this, e, o)
                        },
                        e.exports = i
                    },
                    {}],
                    29 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t, o) {
                                var c = r(t);
                                if (c instanceof e) return a(c);
                                if (!s(t)) return i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                                var u = new e(n);
                                void 0 !== o && u._propagateFrom(o, 5);
                                for (var l = u._fulfill,
                                f = u._reject,
                                p = 0,
                                h = t.length; h > p; ++p) {
                                    var d = t[p]; (void 0 !== d || p in t) && e.cast(d)._then(l, f, void 0, u, null)
                                }
                                return u
                            }
                            var s = t("./util.js").isArray,
                            a = function(t) {
                                return t.then(function(e) {
                                    return o(e, t)
                                })
                            };
                            e.race = function(t) {
                                return o(t, void 0)
                            },
                            e.prototype.race = function() {
                                return o(this, void 0)
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    30 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i, o) {
                            function s(t, n, r, s) {
                                this.constructor$(t),
                                this._promise._captureStackTrace(),
                                this._preservedValues = s === o ? [] : null,
                                this._zerothIsAccum = void 0 === r,
                                this._gotAccum = !1,
                                this._reducingIndex = this._zerothIsAccum ? 1 : 0,
                                this._valuesPhase = void 0;
                                var c = i(r, this._promise),
                                f = !1,
                                p = c instanceof e;
                                p && (c = c._target(), c._isPending() ? c._proxyPromiseArray(this, -1) : c._isFulfilled() ? (r = c._value(), this._gotAccum = !0) : (this._reject(c._reason()), f = !0)),
                                p || this._zerothIsAccum || (this._gotAccum = !0);
                                var h = u();
                                this._callback = null === h ? n: h.bind(n),
                                this._accum = r,
                                f || l.invoke(a, this, void 0)
                            }
                            function a() {
                                this._init$(void 0, -5)
                            }
                            function c(t, e, n, i) {
                                if ("function" != typeof e) return r("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                var o = new s(t, e, n, i);
                                return o.promise()
                            }
                            var u = e._getDomain,
                            l = t("./async.js"),
                            f = t("./util.js"),
                            p = f.tryCatch,
                            h = f.errorObj;
                            f.inherits(s, n),
                            s.prototype._init = function() {},
                            s.prototype._resolveEmptyArray = function() { (this._gotAccum || this._zerothIsAccum) && this._resolve(null !== this._preservedValues ? [] : this._accum)
                            },
                            s.prototype._promiseFulfilled = function(t, n) {
                                var r = this._values;
                                r[n] = t;
                                var o, s = this.length(),
                                a = this._preservedValues,
                                c = null !== a,
                                u = this._gotAccum,
                                l = this._valuesPhase;
                                if (!l) for (l = this._valuesPhase = new Array(s), o = 0; s > o; ++o) l[o] = 0;
                                if (o = l[n], 0 === n && this._zerothIsAccum ? (this._accum = t, this._gotAccum = u = !0, l[n] = 0 === o ? 1 : 2) : -1 === n ? (this._accum = t, this._gotAccum = u = !0) : 0 === o ? l[n] = 1 : (l[n] = 2, this._accum = t), u) {
                                    for (var f, d = this._callback,
                                    v = this._promise._boundValue(), m = this._reducingIndex; s > m; ++m) if (o = l[m], 2 !== o) {
                                        if (1 !== o) return;
                                        if (t = r[m], this._promise._pushContext(), c ? (a.push(t), f = p(d).call(v, t, m, s)) : f = p(d).call(v, this._accum, t, m, s), this._promise._popContext(), f === h) return this._reject(f.e);
                                        var g = i(f, this._promise);
                                        if (g instanceof e) {
                                            if (g = g._target(), g._isPending()) return l[m] = 4,
                                            g._proxyPromiseArray(this, m);
                                            if (!g._isFulfilled()) return this._reject(g._reason());
                                            f = g._value()
                                        }
                                        this._reducingIndex = m + 1,
                                        this._accum = f
                                    } else this._reducingIndex = m + 1;
                                    this._resolve(c ? a: this._accum)
                                }
                            },
                            e.prototype.reduce = function(t, e) {
                                return c(this, t, e, null)
                            },
                            e.reduce = function(t, e, n, r) {
                                return c(t, e, n, r)
                            }
                        }
                    },
                    {
                        "./async.js": 2,
                        "./util.js": 38
                    }],
                    31 : [function(t, i, o) {
                        "use strict";
                        var s, a = t("./util"),
                        c = function() {
                            throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
                        };
                        if (a.isNode && "undefined" == typeof MutationObserver) {
                            var u = n.setImmediate,
                            l = e.nextTick;
                            s = a.isRecentNode ?
                            function(t) {
                                u.call(n, t)
                            }: function(t) {
                                l.call(e, t)
                            }
                        } else "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && window.navigator.standalone ? s = "undefined" != typeof r ?
                        function(t) {
                            r(t)
                        }: "undefined" != typeof setTimeout ?
                        function(t) {
                            setTimeout(t, 0)
                        }: c: (s = function(t) {
                            var e = document.createElement("div"),
                            n = new MutationObserver(t);
                            return n.observe(e, {
                                attributes: !0
                            }),
                            function() {
                                e.classList.toggle("foo")
                            }
                        },
                        s.isStatic = !0);
                        i.exports = s
                    },
                    {
                        "./util": 38
                    }],
                    32 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t) {
                                this.constructor$(t)
                            }
                            var i = e.PromiseInspection,
                            o = t("./util.js");
                            o.inherits(r, n),
                            r.prototype._promiseResolved = function(t, e) {
                                this._values[t] = e;
                                var n = ++this._totalResolved;
                                n >= this._length && this._resolve(this._values)
                            },
                            r.prototype._promiseFulfilled = function(t, e) {
                                var n = new i;
                                n._bitField = 268435456,
                                n._settledValue = t,
                                this._promiseResolved(e, n)
                            },
                            r.prototype._promiseRejected = function(t, e) {
                                var n = new i;
                                n._bitField = 134217728,
                                n._settledValue = t,
                                this._promiseResolved(e, n)
                            },
                            e.settle = function(t) {
                                return new r(t).promise()
                            },
                            e.prototype.settle = function() {
                                return new r(this).promise()
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    33 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r) {
                            function i(t) {
                                this.constructor$(t),
                                this._howMany = 0,
                                this._unwrap = !1,
                                this._initialized = !1
                            }
                            function o(t, e) {
                                if ((0 | e) !== e || 0 > e) return r("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");
                                var n = new i(t),
                                o = n.promise();
                                return n.setHowMany(e),
                                n.init(),
                                o
                            }
                            var s = t("./util.js"),
                            a = t("./errors.js").RangeError,
                            c = t("./errors.js").AggregateError,
                            u = s.isArray;
                            s.inherits(i, n),
                            i.prototype._init = function() {
                                if (this._initialized) {
                                    if (0 === this._howMany) return void this._resolve([]);
                                    this._init$(void 0, -5);
                                    var t = u(this._values); ! this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                                }
                            },
                            i.prototype.init = function() {
                                this._initialized = !0,
                                this._init()
                            },
                            i.prototype.setUnwrap = function() {
                                this._unwrap = !0
                            },
                            i.prototype.howMany = function() {
                                return this._howMany
                            },
                            i.prototype.setHowMany = function(t) {
                                this._howMany = t
                            },
                            i.prototype._promiseFulfilled = function(t) {
                                this._addFulfilled(t),
                                this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values))
                            },
                            i.prototype._promiseRejected = function(t) {
                                if (this._addRejected(t), this.howMany() > this._canPossiblyFulfill()) {
                                    for (var e = new c,
                                    n = this.length(); n < this._values.length; ++n) e.push(this._values[n]);
                                    this._reject(e)
                                }
                            },
                            i.prototype._fulfilled = function() {
                                return this._totalResolved
                            },
                            i.prototype._rejected = function() {
                                return this._values.length - this.length()
                            },
                            i.prototype._addRejected = function(t) {
                                this._values.push(t)
                            },
                            i.prototype._addFulfilled = function(t) {
                                this._values[this._totalResolved++] = t
                            },
                            i.prototype._canPossiblyFulfill = function() {
                                return this.length() - this._rejected()
                            },
                            i.prototype._getRangeError = function(t) {
                                var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
                                return new a(e)
                            },
                            i.prototype._resolveEmptyArray = function() {
                                this._reject(this._getRangeError(0))
                            },
                            e.some = function(t, e) {
                                return o(t, e)
                            },
                            e.prototype.some = function(t) {
                                return o(this, t)
                            },
                            e._SomePromiseArray = i
                        }
                    },
                    {
                        "./errors.js": 13,
                        "./util.js": 38
                    }],
                    34 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(t) {
                            function e(t) {
                                void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValue = t._settledValue) : (this._bitField = 0, this._settledValue = void 0)
                            }
                            e.prototype.value = function() {
                                if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
                                return this._settledValue
                            },
                            e.prototype.error = e.prototype.reason = function() {
                                if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
                                return this._settledValue
                            },
                            e.prototype.isFulfilled = t.prototype._isFulfilled = function() {
                                return (268435456 & this._bitField) > 0
                            },
                            e.prototype.isRejected = t.prototype._isRejected = function() {
                                return (134217728 & this._bitField) > 0
                            },
                            e.prototype.isPending = t.prototype._isPending = function() {
                                return 0 === (402653184 & this._bitField)
                            },
                            e.prototype.isResolved = t.prototype._isResolved = function() {
                                return (402653184 & this._bitField) > 0
                            },
                            t.prototype.isPending = function() {
                                return this._target()._isPending()
                            },
                            t.prototype.isRejected = function() {
                                return this._target()._isRejected()
                            },
                            t.prototype.isFulfilled = function() {
                                return this._target()._isFulfilled()
                            },
                            t.prototype.isResolved = function() {
                                return this._target()._isResolved()
                            },
                            t.prototype._value = function() {
                                return this._settledValue
                            },
                            t.prototype._reason = function() {
                                return this._unsetRejectionIsUnhandled(),
                                this._settledValue
                            },
                            t.prototype.value = function() {
                                var t = this._target();
                                if (!t.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
                                return t._settledValue
                            },
                            t.prototype.reason = function() {
                                var t = this._target();
                                if (!t.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
                                return t._unsetRejectionIsUnhandled(),
                                t._settledValue
                            },
                            t.PromiseInspection = e
                        }
                    },
                    {}],
                    35 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t, r) {
                                if (u(t)) {
                                    if (t instanceof e) return t;
                                    if (o(t)) {
                                        var l = new e(n);
                                        return t._then(l._fulfillUnchecked, l._rejectUncheckedCheckError, l._progressUnchecked, l, null),
                                        l
                                    }
                                    var f = a.tryCatch(i)(t);
                                    if (f === c) {
                                        r && r._pushContext();
                                        var l = e.reject(f.e);
                                        return r && r._popContext(),
                                        l
                                    }
                                    if ("function" == typeof f) return s(t, f, r)
                                }
                                return t
                            }
                            function i(t) {
                                return t.then
                            }
                            function o(t) {
                                return l.call(t, "_promise0")
                            }
                            function s(t, r, i) {
                                function o(t) {
                                    l && (l._resolveCallback(t), l = null)
                                }
                                function s(t) {
                                    l && (l._rejectCallback(t, p, !0), l = null)
                                }
                                function u(t) {
                                    l && "function" == typeof l._progress && l._progress(t)
                                }
                                var l = new e(n),
                                f = l;
                                i && i._pushContext(),
                                l._captureStackTrace(),
                                i && i._popContext();
                                var p = !0,
                                h = a.tryCatch(r).call(t, o, s, u);
                                return p = !1,
                                l && h === c && (l._rejectCallback(h.e, !0, !0), l = null),
                                f
                            }
                            var a = t("./util.js"),
                            c = a.errorObj,
                            u = a.isObject,
                            l = {}.hasOwnProperty;
                            return r
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    36 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t) {
                                var e = this;
                                return e instanceof Number && (e = +e),
                                clearTimeout(e),
                                t
                            }
                            function i(t) {
                                var e = this;
                                throw e instanceof Number && (e = +e),
                                clearTimeout(e),
                                t
                            }
                            var o = t("./util.js"),
                            s = e.TimeoutError,
                            a = function(t, e) {
                                if (t.isPending()) {
                                    var n; ! o.isPrimitive(e) && e instanceof Error ? n = e: ("string" != typeof e && (e = "operation timed out"), n = new s(e)),
                                    o.markAsOriginatingFromRejection(n),
                                    t._attachExtraTrace(n),
                                    t._cancel(n)
                                }
                            },
                            c = function(t) {
                                return u( + this).thenReturn(t)
                            },
                            u = e.delay = function(t, r) {
                                if (void 0 === r) {
                                    r = t,
                                    t = void 0;
                                    var i = new e(n);
                                    return setTimeout(function() {
                                        i._fulfill()
                                    },
                                    r),
                                    i
                                }
                                return r = +r,
                                e.resolve(t)._then(c, null, null, r, void 0)
                            };
                            e.prototype.delay = function(t) {
                                return u(this, t)
                            },
                            e.prototype.timeout = function(t, e) {
                                t = +t;
                                var n = this.then().cancellable();
                                n._cancellationParent = this;
                                var o = setTimeout(function() {
                                    a(n, e)
                                },
                                t);
                                return n._then(r, i, void 0, o, void 0)
                            }
                        }
                    },
                    {
                        "./util.js": 38
                    }],
                    37 : [function(t, e, n) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t) {
                                for (var n = t.length,
                                r = 0; n > r; ++r) {
                                    var i = t[r];
                                    if (i.isRejected()) return e.reject(i.error());
                                    t[r] = i._settledValue
                                }
                                return t
                            }
                            function s(t) {
                                setTimeout(function() {
                                    throw t
                                },
                                0)
                            }
                            function a(t) {
                                var e = r(t);
                                return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()),
                                e
                            }
                            function c(t, n) {
                                function i() {
                                    if (o >= c) return u.resolve();
                                    var l = a(t[o++]);
                                    if (l instanceof e && l._isDisposable()) {
                                        try {
                                            l = r(l._getDisposer().tryDispose(n), t.promise)
                                        } catch(f) {
                                            return s(f)
                                        }
                                        if (l instanceof e) return l._then(i, s, null, null, null)
                                    }
                                    i()
                                }
                                var o = 0,
                                c = t.length,
                                u = e.defer();
                                return i(),
                                u.promise
                            }
                            function u(t) {
                                var e = new m;
                                return e._settledValue = t,
                                e._bitField = 268435456,
                                c(this, e).thenReturn(t)
                            }
                            function l(t) {
                                var e = new m;
                                return e._settledValue = t,
                                e._bitField = 134217728,
                                c(this, e).thenThrow(t)
                            }
                            function f(t, e, n) {
                                this._data = t,
                                this._promise = e,
                                this._context = n
                            }
                            function p(t, e, n) {
                                this.constructor$(t, e, n)
                            }
                            function h(t) {
                                return f.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
                            }
                            var d = t("./errors.js").TypeError,
                            v = t("./util.js").inherits,
                            m = e.PromiseInspection;
                            f.prototype.data = function() {
                                return this._data
                            },
                            f.prototype.promise = function() {
                                return this._promise
                            },
                            f.prototype.resource = function() {
                                return this.promise().isFulfilled() ? this.promise().value() : null
                            },
                            f.prototype.tryDispose = function(t) {
                                var e = this.resource(),
                                n = this._context;
                                void 0 !== n && n._pushContext();
                                var r = null !== e ? this.doDispose(e, t) : null;
                                return void 0 !== n && n._popContext(),
                                this._promise._unsetDisposable(),
                                this._data = null,
                                r
                            },
                            f.isDisposer = function(t) {
                                return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                            },
                            v(p, f),
                            p.prototype.doDispose = function(t, e) {
                                var n = this.data();
                                return n.call(t, t, e)
                            },
                            e.using = function() {
                                var t = arguments.length;
                                if (2 > t) return n("you must pass at least 2 arguments to Promise.using");
                                var i = arguments[t - 1];
                                if ("function" != typeof i) return n("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                var s, a = !0;
                                2 === t && Array.isArray(arguments[0]) ? (s = arguments[0], t = s.length, a = !1) : (s = arguments, t--);
                                for (var c = new Array(t), p = 0; t > p; ++p) {
                                    var d = s[p];
                                    if (f.isDisposer(d)) {
                                        var v = d;
                                        d = d.promise(),
                                        d._setDisposable(v)
                                    } else {
                                        var m = r(d);
                                        m instanceof e && (d = m._then(h, null, null, {
                                            resources: c,
                                            index: p
                                        },
                                        void 0))
                                    }
                                    c[p] = d
                                }
                                var g = e.settle(c).then(o).then(function(t) {
                                    g._pushContext();
                                    var e;
                                    try {
                                        e = a ? i.apply(void 0, t) : i.call(void 0, t)
                                    } finally {
                                        g._popContext()
                                    }
                                    return e
                                })._then(u, l, void 0, c, void 0);
                                return c.promise = g,
                                g
                            },
                            e.prototype._setDisposable = function(t) {
                                this._bitField = 262144 | this._bitField,
                                this._disposer = t
                            },
                            e.prototype._isDisposable = function() {
                                return (262144 & this._bitField) > 0
                            },
                            e.prototype._getDisposer = function() {
                                return this._disposer
                            },
                            e.prototype._unsetDisposable = function() {
                                this._bitField = -262145 & this._bitField,
                                this._disposer = void 0
                            },
                            e.prototype.disposer = function(t) {
                                if ("function" == typeof t) return new p(t, this, i());
                                throw new d
                            }
                        }
                    },
                    {
                        "./errors.js": 13,
                        "./util.js": 38
                    }],
                    38 : [function(t, n, r) {
                        "use strict";
                        function i() {
                            try {
                                var t = T;
                                return T = null,
                                t.apply(this, arguments)
                            } catch(e) {
                                return S.e = e,
                                S
                            }
                        }
                        function o(t) {
                            return T = t,
                            i
                        }
                        function s(t) {
                            return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
                        }
                        function a(t) {
                            return ! s(t)
                        }
                        function c(t) {
                            return s(t) ? new Error(g(t)) : t
                        }
                        function u(t, e) {
                            var n, r = t.length,
                            i = new Array(r + 1);
                            for (n = 0; r > n; ++n) i[n] = t[n];
                            return i[n] = e,
                            i
                        }
                        function l(t, e, n) {
                            if (!j.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                            var r = Object.getOwnPropertyDescriptor(t, e);
                            return null != r ? null == r.get && null == r.set ? r.value: n: void 0
                        }
                        function f(t, e, n) {
                            if (s(t)) return t;
                            var r = {
                                value: n,
                                configurable: !0,
                                enumerable: !1,
                                writable: !0
                            };
                            return j.defineProperty(t, e, r),
                            t
                        }
                        function p(t) {
                            throw t
                        }
                        function h(t) {
                            try {
                                if ("function" == typeof t) {
                                    var e = j.names(t.prototype),
                                    n = j.isES5 && e.length > 1,
                                    r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
                                    i = A.test(t + "") && j.names(t).length > 0;
                                    if (n || r || i) return ! 0
                                }
                                return ! 1
                            } catch(o) {
                                return ! 1
                            }
                        }
                        function d(t) {
                            function e() {}
                            e.prototype = t;
                            for (var n = 8; n--;) new e;
                            return t
                        }
                        function v(t) {
                            return O.test(t)
                        }
                        function m(t, e, n) {
                            for (var r = new Array(t), i = 0; t > i; ++i) r[i] = e + i + n;
                            return r
                        }
                        function g(t) {
                            try {
                                return t + ""
                            } catch(e) {
                                return "[no string representation]"
                            }
                        }
                        function _(t) {
                            try {
                                f(t, "isOperational", !0)
                            } catch(e) {}
                        }
                        function y(t) {
                            return null == t ? !1 : t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0
                        }
                        function b(t) {
                            return t instanceof Error && j.propertyIsWritable(t, "stack")
                        }
                        function w(t) {
                            return {}.toString.call(t)
                        }
                        function x(t, e, n) {
                            for (var r = j.names(t), i = 0; i < r.length; ++i) {
                                var o = r[i];
                                if (n(o)) try {
                                    j.defineProperty(e, o, j.getDescriptor(t, o))
                                } catch(s) {}
                            }
                        }
                        var j = t("./es5.js"),
                        k = "undefined" == typeof navigator,
                        E = function() {
                            try {
                                var t = {};
                                return j.defineProperty(t, "f", {
                                    get: function() {
                                        return 3
                                    }
                                }),
                                3 === t.f
                            } catch(e) {
                                return ! 1
                            }
                        } (),
                        S = {
                            e: {}
                        },
                        T,
                        C = function(t, e) {
                            function n() {
                                this.constructor = t,
                                this.constructor$ = e;
                                for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n])
                            }
                            var r = {}.hasOwnProperty;
                            return n.prototype = e.prototype,
                            t.prototype = new n,
                            t.prototype
                        },
                        F = function() {
                            var t = [Array.prototype, Object.prototype, Function.prototype],
                            e = function(e) {
                                for (var n = 0; n < t.length; ++n) if (t[n] === e) return ! 0;
                                return ! 1
                            };
                            if (j.isES5) {
                                var n = Object.getOwnPropertyNames;
                                return function(t) {
                                    for (var r = [], i = Object.create(null); null != t && !e(t);) {
                                        var o;
                                        try {
                                            o = n(t)
                                        } catch(s) {
                                            return r
                                        }
                                        for (var a = 0; a < o.length; ++a) {
                                            var c = o[a];
                                            if (!i[c]) {
                                                i[c] = !0;
                                                var u = Object.getOwnPropertyDescriptor(t, c);
                                                null != u && null == u.get && null == u.set && r.push(c)
                                            }
                                        }
                                        t = j.getPrototypeOf(t)
                                    }
                                    return r
                                }
                            }
                            var r = {}.hasOwnProperty;
                            return function(n) {
                                if (e(n)) return [];
                                var i = [];
                                t: for (var o in n) if (r.call(n, o)) i.push(o);
                                else {
                                    for (var s = 0; s < t.length; ++s) if (r.call(t[s], o)) continue t;
                                    i.push(o)
                                }
                                return i
                            }
                        } (),
                        A = /this\s*\.\s*\S+\s*=/,
                        O = /^[a-z$_][a-z$_0-9]*$/i,
                        P = function() {
                            return "stack" in new Error ?
                            function(t) {
                                return b(t) ? t: new Error(g(t))
                            }: function(t) {
                                if (b(t)) return t;
                                try {
                                    throw new Error(g(t))
                                } catch(e) {
                                    return e
                                }
                            }
                        } (),
                        R = {
                            isClass: h,
                            isIdentifier: v,
                            inheritedDataKeys: F,
                            getDataPropertyOrDefault: l,
                            thrower: p,
                            isArray: j.isArray,
                            haveGetters: E,
                            notEnumerableProp: f,
                            isPrimitive: s,
                            isObject: a,
                            canEvaluate: k,
                            errorObj: S,
                            tryCatch: o,
                            inherits: C,
                            withAppended: u,
                            maybeWrapAsError: c,
                            toFastProperties: d,
                            filledRange: m,
                            toString: g,
                            canAttachTrace: b,
                            ensureErrorObject: P,
                            originatesFromRejection: y,
                            markAsOriginatingFromRejection: _,
                            classString: w,
                            copyDescriptors: x,
                            hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                            isNode: "undefined" != typeof e && "[object process]" === w(e).toLowerCase()
                        };
                        R.isRecentNode = R.isNode &&
                        function() {
                            var t = e.versions.node.split(".").map(Number);
                            return 0 === t[0] && t[1] > 10 || t[0] > 0
                        } (),
                        R.isNode && R.toFastProperties(e);
                        try {
                            throw new Error
                        } catch(L) {
                            R.lastLineError = L
                        }
                        n.exports = R
                    },
                    {
                        "./es5.js": 14
                    }]
                },
                {},
                [4])(4)
            }),
            "undefined" != typeof window && null !== window ? window.P = window.Promise: "undefined" != typeof self && null !== self && (self.P = self.Promise)
        }).call(e, n(14),
        function() {
            return this
        } (), n(21).setImmediate)
    },
    function(t, e) {
        "document" in window.self && ("classList" in document.createElement("_") ? !
        function() {
            "use strict";
            var t = document.createElement("_");
            if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var e = function(t) {
                    var e = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function(t) {
                        var n, r = arguments.length;
                        for (n = 0; r > n; n++) t = arguments[n],
                        e.call(this, t)
                    }
                };
                e("add"),
                e("remove")
            }
            if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                var n = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(t, e) {
                    return 1 in arguments && !this.contains(t) == !e ? e: n.call(this, t)
                }
            }
            t = null
        } () : !
        function(t) {
            "use strict";
            if ("Element" in t) {
                var e = "classList",
                n = "prototype",
                r = t.Element[n],
                i = Object,
                o = String[n].trim ||
                function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                s = Array[n].indexOf ||
                function(t) {
                    for (var e = 0,
                    n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
                    return - 1
                },
                a = function(t, e) {
                    this.name = t,
                    this.code = DOMException[t],
                    this.message = e
                },
                c = function(t, e) {
                    if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return s.call(t, e)
                },
                u = function(t) {
                    for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], r = 0, i = n.length; i > r; r++) this.push(n[r]);
                    this._updateClassName = function() {
                        t.setAttribute("class", this.toString())
                    }
                },
                l = u[n] = [],
                f = function() {
                    return new u(this)
                };
                if (a[n] = Error[n], l.item = function(t) {
                    return this[t] || null
                },
                l.contains = function(t) {
                    return t += "",
                    -1 !== c(this, t)
                },
                l.add = function() {
                    var t, e = arguments,
                    n = 0,
                    r = e.length,
                    i = !1;
                    do t = e[n] + "",
                    -1 === c(this, t) && (this.push(t), i = !0);
                    while (++n < r);
                    i && this._updateClassName()
                },
                l.remove = function() {
                    var t, e, n = arguments,
                    r = 0,
                    i = n.length,
                    o = !1;
                    do
                    for (t = n[r] + "", e = c(this, t); - 1 !== e;) this.splice(e, 1),
                    o = !0,
                    e = c(this, t);
                    while (++r < i);
                    o && this._updateClassName()
                },
                l.toggle = function(t, e) {
                    t += "";
                    var n = this.contains(t),
                    r = n ? e !== !0 && "remove": e !== !1 && "add";
                    return r && this[r](t),
                    e === !0 || e === !1 ? e: !n
                },
                l.toString = function() {
                    return this.join(" ")
                },
                i.defineProperty) {
                    var p = {
                        get: f,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        i.defineProperty(r, e, p)
                    } catch(h) { - 2146823252 === h.number && (p.enumerable = !1, i.defineProperty(r, e, p))
                    }
                } else i[n].__defineGetter__ && r.__defineGetter__(e, f)
            }
        } (window.self))
    },
    function(t, e, n) {
        e.markdown = n(79),
        e.parse = e.markdown.toHTML
    },
    function(t, e, n) { !
        function(t) {
            function e() {
                return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
            }
            function r() {
                var t = n(96);
                return "Markdown.mk_block( " + t.inspect(this.toString()) + ", " + t.inspect(this.trailing) + ", " + t.inspect(this.lineNumber) + " )"
            }
            function i(t) {
                for (var e = 0,
                n = -1; - 1 !== (n = t.indexOf("\n", n + 1));) e++;
                return e
            }
            function o(t, e) {
                function n(t) {
                    this.len_after = t,
                    this.name = "close_" + e
                }
                var r = t + "_state",
                i = "strong" == t ? "em_state": "strong_state";
                return function(o, s) {
                    if (this[r][0] == e) return this[r].shift(),
                    [o.length, new n(o.length - e.length)];
                    var a = this[i].slice(),
                    c = this[r].slice();
                    this[r].unshift(e);
                    var u = this.processInline(o.substr(e.length)),
                    l = u[u.length - 1];
                    this[r].shift();
                    if (l instanceof n) {
                        u.pop();
                        var f = o.length - l.len_after;
                        return [f, [t].concat(u)]
                    }
                    return this[i] = a,
                    this[r] = c,
                    [e.length, e]
                }
            }
            function s(t) {
                for (var e = t.split(""), n = [""], r = !1; e.length;) {
                    var i = e.shift();
                    switch (i) {
                    case " ":
                        r ? n[n.length - 1] += i: n.push("");
                        break;
                    case "'":
                    case '"':
                        r = !r;
                        break;
                    case "\\":
                        i = e.shift();
                    default:
                        n[n.length - 1] += i
                    }
                }
                return n
            }
            function c(t) {
                return g(t) && t.length > 1 && "object" == typeof t[1] && !g(t[1]) ? t[1] : void 0
            }
            function u(t) {
                return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }
            function l(t) {
                if ("string" == typeof t) return u(t);
                var e = t.shift(),
                n = {},
                r = [];
                for (!t.length || "object" != typeof t[0] || t[0] instanceof Array || (n = t.shift()); t.length;) r.push(l(t.shift()));
                var i = "";
                for (var o in n) i += " " + o + '="' + u(n[o]) + '"';
                return "img" == e || "br" == e || "hr" == e ? "<" + e + i + "/>": "<" + e + i + ">" + r.join("") + "</" + e + ">"
            }
            function f(t, e, n) {
                var r;
                n = n || {};
                var i = t.slice(0);
                "function" == typeof n.preprocessTreeNode && (i = n.preprocessTreeNode(i, e));
                var o = c(i);
                if (o) {
                    i[1] = {};
                    for (r in o) i[1][r] = o[r];
                    o = i[1]
                }
                if ("string" == typeof i) return i;
                switch (i[0]) {
                case "header":
                    i[0] = "h" + i[1].level,
                    delete i[1].level;
                    break;
                case "bulletlist":
                    i[0] = "ul";
                    break;
                case "numberlist":
                    i[0] = "ol";
                    break;
                case "listitem":
                    i[0] = "li";
                    break;
                case "para":
                    i[0] = "p";
                    break;
                case "markdown":
                    i[0] = "html",
                    o && delete o.references;
                    break;
                case "code_block":
                    i[0] = "pre",
                    r = o ? 2 : 1;
                    var s = ["code"];
                    s.push.apply(s, i.splice(r, i.length - r)),
                    i[r] = s;
                    break;
                case "inlinecode":
                    i[0] = "code";
                    break;
                case "img":
                    i[1].src = i[1].href,
                    delete i[1].href;
                    break;
                case "linebreak":
                    i[0] = "br";
                    break;
                case "link":
                    i[0] = "a";
                    break;
                case "link_ref":
                    i[0] = "a";
                    var a = e[o.ref];
                    if (!a) return o.original;
                    delete o.ref,
                    o.href = a.href,
                    a.title && (o.title = a.title),
                    delete o.original;
                    break;
                case "img_ref":
                    i[0] = "img";
                    var a = e[o.ref];
                    if (!a) return o.original;
                    delete o.ref,
                    o.src = a.href,
                    a.title && (o.title = a.title),
                    delete o.original
                }
                if (r = 1, o) {
                    for (var u in i[1]) {
                        r = 2;
                        break
                    }
                    1 === r && i.splice(r, 1)
                }
                for (; r < i.length; ++r) i[r] = f(i[r], e, n);
                return i
            }
            function h(t) {
                for (var e = c(t) ? 2 : 1; e < t.length;)"string" == typeof t[e] ? e + 1 < t.length && "string" == typeof t[e + 1] ? t[e] += t.splice(e + 1, 1)[0] : ++e: (h(t[e]), ++e)
            }
            var d = t.Markdown = function(t) {
                switch (typeof t) {
                case "undefined":
                    this.dialect = d.dialects.Gruber;
                    break;
                case "object":
                    this.dialect = t;
                    break;
                default:
                    if (! (t in d.dialects)) throw new Error("Unknown Markdown dialect '" + String(t) + "'");
                    this.dialect = d.dialects[t]
                }
                this.em_state = [],
                this.strong_state = [],
                this.debug_indent = ""
            };
            t.parse = function(t, e) {
                var n = new d(e);
                return n.toTree(t)
            },
            t.toHTML = function(e, n, r) {
                var i = t.toHTMLTree(e, n, r);
                return t.renderJsonML(i)
            },
            t.toHTMLTree = function(t, e, n) {
                "string" == typeof t && (t = this.parse(t, e));
                var r = c(t),
                i = {};
                r && r.references && (i = r.references);
                var o = f(t, i, n);
                return h(o),
                o
            };
            var v = d.mk_block = function(t, n, i) {
                1 == arguments.length && (n = "\n\n");
                var o = new String(t);
                return o.trailing = n,
                o.inspect = r,
                o.toSource = e,
                void 0 != i && (o.lineNumber = i),
                o
            };
            d.prototype.split_blocks = function(t, e) {
                t = t.replace(/(\r\n|\n|\r)/g, "\n");
                var n, r = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
                o = [],
                s = 1;
                for (null != (n = /^(\s*\n)/.exec(t)) && (s += i(n[0]), r.lastIndex = n[0].length); null !== (n = r.exec(t));)"\n#" == n[2] && (n[2] = "\n", r.lastIndex--),
                o.push(v(n[1], n[2], s)),
                s += i(n[0]);
                return o
            },
            d.prototype.processBlock = function(t, e) {
                var n = this.dialect.block,
                r = n.__order__;
                if ("__call__" in n) return n.__call__.call(this, t, e);
                for (var i = 0; i < r.length; i++) {
                    var o = n[r[i]].call(this, t, e);
                    if (o) return (!g(o) || o.length > 0 && !g(o[0])) && this.debug(r[i], "didn't return a proper array"),
                    o
                }
                return []
            },
            d.prototype.processInline = function(t) {
                return this.dialect.inline.__call__.call(this, String(t))
            },
            d.prototype.toTree = function(t, e) {
                var n = t instanceof Array ? t: this.split_blocks(t),
                r = this.tree;
                try {
                    for (this.tree = e || this.tree || ["markdown"]; n.length;) {
                        var i = this.processBlock(n.shift(), n);
                        i.length && this.tree.push.apply(this.tree, i)
                    }
                    return this.tree
                } finally {
                    e && (this.tree = r)
                }
            },
            d.prototype.debug = function() {
                var t = Array.prototype.slice.call(arguments);
                t.unshift(this.debug_indent),
                "undefined" != typeof print && print.apply(print, t),
                "undefined" != typeof console && "undefined" != typeof console.log && console.log.apply(null, t)
            },
            d.prototype.loop_re_over_block = function(t, e, n) {
                for (var r, i = e.valueOf(); i.length && null != (r = t.exec(i));) i = i.substr(r[0].length),
                n.call(this, r);
                return i
            },
            d.dialects = {},
            d.dialects.Gruber = {
                block: {
                    atxHeader: function(t, e) {
                        var n = t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
                        if (n) {
                            var r = ["header", {
                                level: n[1].length
                            }];
                            return Array.prototype.push.apply(r, this.processInline(n[2])),
                            n[0].length < t.length && e.unshift(v(t.substr(n[0].length), t.trailing, t.lineNumber + 2)),
                            [r]
                        }
                    },
                    setextHeader: function(t, e) {
                        var n = t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
                        if (n) {
                            var r = "=" === n[2] ? 1 : 2,
                            i = ["header", {
                                level: r
                            },
                            n[1]];
                            return n[0].length < t.length && e.unshift(v(t.substr(n[0].length), t.trailing, t.lineNumber + 2)),
                            [i]
                        }
                    },
                    code: function(t, e) {
                        var n = [],
                        r = /^(?: {0,3}\t| {4})(.*)\n?/;
                        if (t.match(r)) {
                            t: for (;;) {
                                var i = this.loop_re_over_block(r, t.valueOf(),
                                function(t) {
                                    n.push(t[1])
                                });
                                if (i.length) {
                                    e.unshift(v(i, t.trailing));
                                    break t
                                }
                                if (!e.length) break t;
                                if (!e[0].match(r)) break t;
                                n.push(t.trailing.replace(/[^\n]/g, "").substring(2)),
                                t = e.shift()
                            }
                            return [["code_block", n.join("\n")]]
                        }
                    },
                    horizRule: function(t, e) {
                        var n = t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
                        if (n) {
                            var r = [["hr"]];
                            return n[1] && r.unshift.apply(r, this.processBlock(n[1], [])),
                            n[3] && e.unshift(v(n[3])),
                            r
                        }
                    },
                    lists: function() {
                        function t(t) {
                            return new RegExp("(?:^(" + c + "{0," + t + "} {0,3})(" + o + ")\\s+)|(^" + c + "{0," + (t - 1) + "}[ ]{0,4})")
                        }
                        function e(t) {
                            return t.replace(/ {0,3}\t/g, "    ")
                        }
                        function n(t, e, n, r) {
                            if (e) return void t.push(["para"].concat(n));
                            var i = t[t.length - 1] instanceof Array && "para" == t[t.length - 1][0] ? t[t.length - 1] : t;
                            r && t.length > 1 && n.unshift(r);
                            for (var o = 0; o < n.length; o++) {
                                var s = n[o],
                                a = "string" == typeof s;
                                a && i.length > 1 && "string" == typeof i[i.length - 1] ? i[i.length - 1] += s: i.push(s)
                            }
                        }
                        function r(t, e) {
                            for (var n = new RegExp("^(" + c + "{" + t + "}.*?\\n?)*$"), r = new RegExp("^" + c + "{" + t + "}", "gm"), i = []; e.length > 0 && n.exec(e[0]);) {
                                var o = e.shift(),
                                s = o.replace(r, "");
                                i.push(v(s, o.trailing, o.lineNumber))
                            }
                            return i
                        }
                        function i(t, e, n) {
                            var r = t.list,
                            i = r[r.length - 1];
                            if (! (i[1] instanceof Array && "para" == i[1][0])) if (e + 1 == n.length) i.push(["para"].concat(i.splice(1, i.length - 1)));
                            else {
                                var o = i.pop();
                                i.push(["para"].concat(i.splice(1, i.length - 1)), o)
                            }
                        }
                        var o = "[*+-]|\\d+\\.",
                        s = /[*+-]/,
                        a = new RegExp("^( {0,3})(" + o + ")[ 	]+"),
                        c = "(?: {0,3}\\t| {4})";
                        return function(o, c) {
                            function u(t) {
                                var e = s.exec(t[2]) ? ["bulletlist"] : ["numberlist"];
                                return h.push({
                                    list: e,
                                    indent: t[1]
                                }),
                                e
                            }
                            var l = o.match(a);
                            if (l) {
                                for (var f, p, h = [], d = u(l), v = !1, g = [h[0].list];;) {
                                    for (var _ = o.split(/(?=\n)/), y = "", b = 0; b < _.length; b++) {
                                        var w = "",
                                        x = _[b].replace(/^\n/,
                                        function(t) {
                                            return w = t,
                                            ""
                                        }),
                                        j = t(h.length);
                                        if (l = x.match(j), void 0 !== l[1]) {
                                            y.length && (n(f, v, this.processInline(y), w), v = !1, y = ""),
                                            l[1] = e(l[1]);
                                            var k = Math.floor(l[1].length / 4) + 1;
                                            if (k > h.length) d = u(l),
                                            f.push(d),
                                            f = d[1] = ["listitem"];
                                            else {
                                                var E = !1;
                                                for (p = 0; p < h.length; p++) if (h[p].indent == l[1]) {
                                                    d = h[p].list,
                                                    h.splice(p + 1, h.length - (p + 1)),
                                                    E = !0;
                                                    break
                                                }
                                                E || (k++, k <= h.length ? (h.splice(k, h.length - k), d = h[k - 1].list) : (d = u(l), f.push(d))),
                                                f = ["listitem"],
                                                d.push(f)
                                            }
                                            w = ""
                                        }
                                        x.length > l[0].length && (y += w + x.substr(l[0].length))
                                    }
                                    y.length && (n(f, v, this.processInline(y), w), v = !1, y = "");
                                    var S = r(h.length, c);
                                    S.length > 0 && (m(h, i, this), f.push.apply(f, this.toTree(S, [])));
                                    var T = c[0] && c[0].valueOf() || "";
                                    if (!T.match(a) && !T.match(/^ /)) break;
                                    o = c.shift();
                                    var C = this.dialect.block.horizRule(o, c);
                                    if (C) {
                                        g.push.apply(g, C);
                                        break
                                    }
                                    m(h, i, this),
                                    v = !0
                                }
                                return g
                            }
                        }
                    } (),
                    blockquote: function(t, e) {
                        if (t.match(/^>/m)) {
                            var n = [];
                            if (">" != t[0]) {
                                for (var r = t.split(/\n/), i = [], o = t.lineNumber; r.length && ">" != r[0][0];) i.push(r.shift()),
                                o++;
                                var s = v(i.join("\n"), "\n", t.lineNumber);
                                n.push.apply(n, this.processBlock(s, [])),
                                t = v(r.join("\n"), t.trailing, o)
                            }
                            for (; e.length && ">" == e[0][0];) {
                                var a = e.shift();
                                t = v(t + t.trailing + a, a.trailing, t.lineNumber)
                            }
                            var u = t.replace(/^> ?/gm, ""),
                            l = (this.tree, this.toTree(u, ["blockquote"])),
                            f = c(l);
                            return f && f.references && (delete f.references, _(f) && l.splice(1, 1)),
                            n.push(l),
                            n
                        }
                    },
                    referenceDefn: function(t, e) {
                        var n = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                        if (t.match(n)) {
                            c(this.tree) || this.tree.splice(1, 0, {});
                            var r = c(this.tree);
                            void 0 === r.references && (r.references = {});
                            var i = this.loop_re_over_block(n, t,
                            function(t) {
                                t[2] && "<" == t[2][0] && ">" == t[2][t[2].length - 1] && (t[2] = t[2].substring(1, t[2].length - 1));
                                var e = r.references[t[1].toLowerCase()] = {
                                    href: t[2]
                                };
                                void 0 !== t[4] ? e.title = t[4] : void 0 !== t[5] && (e.title = t[5])
                            });
                            return i.length && e.unshift(v(i, t.trailing)),
                            []
                        }
                    },
                    para: function(t, e) {
                        return [["para"].concat(this.processInline(t))]
                    }
                }
            },
            d.dialects.Gruber.inline = {
                __oneElement__: function(t, e, n) {
                    var r, i;
                    e = e || this.dialect.inline.__patterns__;
                    var o = new RegExp("([\\s\\S]*?)(" + (e.source || e) + ")");
                    if (r = o.exec(t), !r) return [t.length, t];
                    if (r[1]) return [r[1].length, r[1]];
                    var i;
                    return r[2] in this.dialect.inline && (i = this.dialect.inline[r[2]].call(this, t.substr(r.index), r, n || [])),
                    i = i || [r[2].length, r[2]]
                },
                __call__: function(t, e) {
                    function n(t) {
                        "string" == typeof t && "string" == typeof i[i.length - 1] ? i[i.length - 1] += t: i.push(t)
                    }
                    for (var r, i = []; t.length > 0;) r = this.dialect.inline.__oneElement__.call(this, t, e, i),
                    t = t.substr(r.shift()),
                    m(r, n);
                    return i
                },
                "]": function() {},
                "}": function() {},
                __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
                "\\": function(t) {
                    return this.dialect.inline.__escape__.exec(t) ? [2, t.charAt(1)] : [1, "\\"]
                },
                "![": function(t) {
                    var e = t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
                    if (e) {
                        e[2] && "<" == e[2][0] && ">" == e[2][e[2].length - 1] && (e[2] = e[2].substring(1, e[2].length - 1)),
                        e[2] = this.dialect.inline.__call__.call(this, e[2], /\\/)[0];
                        var n = {
                            alt: e[1],
                            href: e[2] || ""
                        };
                        return void 0 !== e[4] && (n.title = e[4]),
                        [e[0].length, ["img", n]]
                    }
                    return e = t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),
                    e ? [e[0].length, ["img_ref", {
                        alt: e[1],
                        ref: e[2].toLowerCase(),
                        original: e[0]
                    }]] : [2, "!["]
                },
                "[": function y(t) {
                    var e = String(t),
                    n = d.DialectHelpers.inline_until_char.call(this, t.substr(1), "]");
                    if (!n) return [1, "["];
                    var y, r, i = 1 + n[0],
                    o = n[1];
                    t = t.substr(i);
                    var s = t.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
                    if (s) {
                        var a = s[1];
                        if (i += s[0].length, a && "<" == a[0] && ">" == a[a.length - 1] && (a = a.substring(1, a.length - 1)), !s[3]) for (var c = 1,
                        u = 0; u < a.length; u++) switch (a[u]) {
                        case "(":
                            c++;
                            break;
                        case ")":
                            0 == --c && (i -= a.length - u, a = a.substring(0, u))
                        }
                        return a = this.dialect.inline.__call__.call(this, a, /\\/)[0],
                        r = {
                            href: a || ""
                        },
                        void 0 !== s[3] && (r.title = s[3]),
                        y = ["link", r].concat(o),
                        [i, y]
                    }
                    return s = t.match(/^\s*\[(.*?)\]/),
                    s ? (i += s[0].length, r = {
                        ref: (s[1] || String(o)).toLowerCase(),
                        original: e.substr(0, i)
                    },
                    y = ["link_ref", r].concat(o), [i, y]) : 1 == o.length && "string" == typeof o[0] ? (r = {
                        ref: o[0].toLowerCase(),
                        original: e.substr(0, i)
                    },
                    y = ["link_ref", r, o[0]], [i, y]) : [1, "["]
                },
                "<": function(t) {
                    var e;
                    return null != (e = t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) ? e[3] ? [e[0].length, ["link", {
                        href: "mailto:" + e[3]
                    },
                    e[3]]] : "mailto" == e[2] ? [e[0].length, ["link", {
                        href: e[1]
                    },
                    e[1].substr("mailto:".length)]] : [e[0].length, ["link", {
                        href: e[1]
                    },
                    e[1]]] : [1, "<"]
                },
                "`": function(t) {
                    var e = t.match(/(`+)(([\s\S]*?)\1)/);
                    return e && e[2] ? [e[1].length + e[2].length, ["inlinecode", e[3]]] : [1, "`"]
                },
                "  \n": function(t) {
                    return [3, ["linebreak"]]
                }
            },
            d.dialects.Gruber.inline["**"] = o("strong", "**"),
            d.dialects.Gruber.inline.__ = o("strong", "__"),
            d.dialects.Gruber.inline["*"] = o("em", "*"),
            d.dialects.Gruber.inline._ = o("em", "_"),
            d.buildBlockOrder = function(t) {
                var e = [];
                for (var n in t)"__order__" != n && "__call__" != n && e.push(n);
                t.__order__ = e
            },
            d.buildInlinePatterns = function(t) {
                var e = [];
                for (var n in t) if (!n.match(/^__.*__$/)) {
                    var r = n.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
                    e.push(1 == n.length ? r: "(?:" + r + ")")
                }
                e = e.join("|"),
                t.__patterns__ = e;
                var i = t.__call__;
                t.__call__ = function(t, n) {
                    return void 0 != n ? i.call(this, t, n) : i.call(this, t, e)
                }
            },
            d.DialectHelpers = {},
            d.DialectHelpers.inline_until_char = function(t, e) {
                for (var n = 0,
                r = [];;) {
                    if (t.charAt(n) == e) return n++,
                    [n, r];
                    if (n >= t.length) return null;
                    var i = this.dialect.inline.__oneElement__.call(this, t.substr(n));
                    n += i[0],
                    r.push.apply(r, i.slice(1))
                }
            },
            d.subclassDialect = function(t) {
                function e() {}
                function n() {}
                return e.prototype = t.block,
                n.prototype = t.inline,
                {
                    block: new e,
                    inline: new n
                }
            },
            d.buildBlockOrder(d.dialects.Gruber.block),
            d.buildInlinePatterns(d.dialects.Gruber.inline),
            d.dialects.Maruku = d.subclassDialect(d.dialects.Gruber),
            d.dialects.Maruku.processMetaHash = function(t) {
                for (var e = s(t), n = {},
                r = 0; r < e.length; ++r) if (/^#/.test(e[r])) n.id = e[r].substring(1);
                else if (/^\./.test(e[r])) n["class"] ? n["class"] = n["class"] + e[r].replace(/./, " ") : n["class"] = e[r].substring(1);
                else if (/\=/.test(e[r])) {
                    var i = e[r].split(/\=/);
                    n[i[0]] = i[1]
                }
                return n
            },
            d.dialects.Maruku.block.document_meta = function(t, e) {
                if (! (t.lineNumber > 1) && t.match(/^(?:\w+:.*\n)*\w+:.*$/)) {
                    c(this.tree) || this.tree.splice(1, 0, {});
                    var n = t.split(/\n/);
                    for (p in n) {
                        var r = n[p].match(/(\w+):\s*(.*)$/),
                        i = r[1].toLowerCase(),
                        o = r[2];
                        this.tree[1][i] = o
                    }
                    return []
                }
            },
            d.dialects.Maruku.block.block_meta = function(t, e) {
                var n = t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
                if (n) {
                    var r, i = this.dialect.processMetaHash(n[2]);
                    if ("" === n[1]) {
                        var o = this.tree[this.tree.length - 1];
                        if (r = c(o), "string" == typeof o) return;
                        r || (r = {},
                        o.splice(1, 0, r));
                        for (a in i) r[a] = i[a];
                        return []
                    }
                    var s = t.replace(/\n.*$/, ""),
                    u = this.processBlock(s, []);
                    r = c(u[0]),
                    r || (r = {},
                    u[0].splice(1, 0, r));
                    for (a in i) r[a] = i[a];
                    return u
                }
            },
            d.dialects.Maruku.block.definition_list = function(t, e) {
                var n, r, i = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
                o = ["dl"];
                if (r = t.match(i)) {
                    for (var s = [t]; e.length && i.exec(e[0]);) s.push(e.shift());
                    for (var a = 0; a < s.length; ++a) {
                        var r = s[a].match(i),
                        c = r[1].replace(/\n$/, "").split(/\n/),
                        u = r[2].split(/\n:\s+/);
                        for (n = 0; n < c.length; ++n) o.push(["dt", c[n]]);
                        for (n = 0; n < u.length; ++n) o.push(["dd"].concat(this.processInline(u[n].replace(/(\n)\s+/, "$1"))))
                    }
                    return [o]
                }
            },
            d.dialects.Maruku.block.table = function b(t, e) {
                var n, r, i = function(t, e) {
                    e = e || "\\s",
                    e.match(/^[\\|\[\]{}?*.+^$]$/) && (e = "\\" + e);
                    for (var n, r = [], i = new RegExp("^((?:\\\\.|[^\\\\" + e + "])*)" + e + "(.*)"); n = t.match(i);) r.push(n[1]),
                    t = n[2];
                    return r.push(t),
                    r
                },
                o = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
                s = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;
                if (r = t.match(o)) r[3] = r[3].replace(/^\s*\|/gm, "");
                else if (! (r = t.match(s))) return;
                var b = ["table", ["thead", ["tr"]], ["tbody"]];
                r[2] = r[2].replace(/\|\s*$/, "").split("|");
                var a = [];
                for (m(r[2],
                function(t) {
                    t.match(/^\s*-+:\s*$/) ? a.push({
                        align: "right"
                    }) : t.match(/^\s*:-+\s*$/) ? a.push({
                        align: "left"
                    }) : t.match(/^\s*:-+:\s*$/) ? a.push({
                        align: "center"
                    }) : a.push({})
                }), r[1] = i(r[1].replace(/\|\s*$/, ""), "|"), n = 0; n < r[1].length; n++) b[1][1].push(["th", a[n] || {}].concat(this.processInline(r[1][n].trim())));
                return m(r[3].replace(/\|\s*$/gm, "").split("\n"),
                function(t) {
                    var e = ["tr"];
                    for (t = i(t, "|"), n = 0; n < t.length; n++) e.push(["td", a[n] || {}].concat(this.processInline(t[n].trim())));
                    b[2].push(e)
                },
                this),
                [b]
            },
            d.dialects.Maruku.inline["{:"] = function(t, e, n) {
                if (!n.length) return [2, "{:"];
                var r = n[n.length - 1];
                if ("string" == typeof r) return [2, "{:"];
                var i = t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
                if (!i) return [2, "{:"];
                var o = this.dialect.processMetaHash(i[1]),
                s = c(r);
                s || (s = {},
                r.splice(1, 0, s));
                for (var a in o) s[a] = o[a];
                return [i[0].length, ""]
            },
            d.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/,
            d.buildBlockOrder(d.dialects.Maruku.block),
            d.buildInlinePatterns(d.dialects.Maruku.inline);
            var m, g = Array.isArray ||
            function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            };
            m = Array.prototype.forEach ?
            function(t, e, n) {
                return t.forEach(e, n)
            }: function(t, e, n) {
                for (var r = 0; r < t.length; r++) e.call(n || t, t[r], r, t)
            };
            var _ = function(t) {
                for (var e in t) if (hasOwnProperty.call(t, e)) return ! 1;
                return ! 0
            };
            t.renderJsonML = function(t, e) {
                e = e || {},
                e.root = e.root || !1;
                var n = [];
                if (e.root) n.push(l(t));
                else for (t.shift(), !t.length || "object" != typeof t[0] || t[0] instanceof Array || t.shift(); t.length;) n.push(l(t.shift()));
                return n.join("\n\n")
            }
        } (function() {
            return e
        } ())
    },
    function(t, e) {
        t.exports = function(t, e) {
            e || (e = [0, ""]),
            t = String(t);
            var n = parseFloat(t, 10);
            return e[0] = n,
            e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "",
            e
        }
    },
    function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = s(getComputedStyle(t).getPropertyValue(e));
            return n[0] * o(n[1], t)
        }
        function i(t, e) {
            var n = document.createElement("div");
            n.style["font-size"] = "128" + t,
            e.appendChild(n);
            var i = r(n, "font-size") / 128;
            return e.removeChild(n),
            i
        }
        function o(t, e) {
            switch (e = e || document.body, t = (t || "px").trim().toLowerCase(), e !== window && e !== document || (e = document.body), t) {
            case "%":
                return e.clientHeight / 100;
            case "ch":
            case "ex":
                return i(t, e);
            case "em":
                return r(e, "font-size");
            case "rem":
                return r(document.body, "font-size");
            case "vw":
                return window.innerWidth / 100;
            case "vh":
                return window.innerHeight / 100;
            case "vmin":
                return Math.min(window.innerWidth, window.innerHeight) / 100;
            case "vmax":
                return Math.max(window.innerWidth, window.innerHeight) / 100;
            case "in":
                return a;
            case "cm":
                return a / 2.54;
            case "mm":
                return a / 25.4;
            case "pt":
                return a / 72;
            case "pc":
                return a / 6
            }
            return 1
        }
        var s = n(80);
        t.exports = o;
        var a = 96
    },
    function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            "function" == typeof t && (n = !!e, e = t, t = window);
            var r = i("ex", t),
            o = function(t) {
                n && t.preventDefault();
                var i = t.deltaX || 0,
                o = t.deltaY || 0,
                s = t.deltaZ || 0,
                a = t.deltaMode,
                c = 1;
                switch (a) {
                case 1:
                    c = r;
                    break;
                case 2:
                    c = window.innerHeight
                }
                return i *= c,
                o *= c,
                s *= c,
                i || o || s ? e(i, o, s) : void 0
            };
            return t.addEventListener("wheel", o),
            o
        }
        var i = n(81);
        t.exports = r
    },
    function(t, e) {
        t.exports = '<a href="#" id="pause-resume">Pause ||</a>\r\n<a href="#" id="skip-animation">Skip Animation --></a>\r\n'
    },
    function(t, e) {
        t.exports = "我说道：“爸爸，你走吧。”他望车外看了看，说：“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。父亲是一个胖子，走过去自然要费事些。我本来要去的，他不肯，只好让他去。我看见他戴着黑布小帽，穿着黑布大马褂12，深青布棉袍，蹒跚13地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪。怕他看见，也怕别人看见。我再向外看时，他已抱了朱红的橘子往回走了。过铁道时，他先将橘子散放在地上，自己慢慢爬下，再抱起橘子走。到这边时，我赶紧去搀他。他和我走到车上，将橘子一股脑儿放在我的皮大衣上。于是扑扑衣上的泥土，心里很轻松似的。过一会儿说：“我走了，到那边来信！”我望着他走出去。他走了几步，回过头看见我，说：“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了。"
    },
    function(t, e) {
        t.exports = "/* I'm cheating a bit */\r\n\r\nhtml, body {\r\n  margin-top: 0;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\npre {\r\n  overflow: auto;\r\n  max-height: 90%;\r\n  width: 100%;\r\n  border-radius: 1px; /* Prevents bad clipping in Chrome */\r\n}\r\n\r\n#content {\r\n  position: absolute;\r\n  top: 0; right: 0; left: 0; bottom: 20px;\r\n}\r\n\r\n#header {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 20px;\r\n  left: 0;\r\n  right: 0;\r\n  padding: 0 10px;\r\n}\r\n\r\na:after {\r\n  content: '';\r\n  padding-right: 5px;\r\n  border-right-width: 1px;\r\n  border-right-style: solid;\r\n  border-color: inherit;\r\n}\r\n\r\na:last-of-type:after {\r\n  border: none;\r\n}\r\n\r\n#skip-animation{\r\n  display: none;\r\n}\r\n\r\n"
    },
    function(t, e) {
        t.exports = "/**\r\n *\r\n * 你好，请把你的名字写在这里.\r\n *\r\n *\r\n * 2004年 初一五班 皱巴巴的座次表和一支铅笔.\r\n *\r\n * 茫茫人海中，我们用这样的开场白相遇.\r\n *\r\n *\r\n * 真不浪漫呀...\r\n *\r\n * 和未来女朋友的初见怎么这样平淡随意.\r\n *\r\n *\r\n * 可是幸好...\r\n * \r\n * 一路风风雨雨，我们最终走在一起.\r\n *\r\n */\r\n\r\n* {\r\n  -webkit-transition: all 1s;\r\n}\r\n\r\n/*\r\n * 和你在一起, 天是天, 云是云.\r\n * \r\n * 你治好我的忧郁，然后赐我欣喜.\r\n * \r\n */\r\n\r\nhtml {\r\n  background: rgb(63, 82, 99);\r\n}\r\n\r\npre, a {\r\n  color: white;\r\n}\r\n\r\n\r\npre:not(:empty) {\r\n  overflow: auto;\r\n  background: rgb(48, 48, 48);\r\n  border: 1px solid #ccc;\r\n  max-height: 44.6%;\r\n  width: 49%;\r\n  font-size: 14px;\r\n  font-family: monospace;\r\n  padding: 10px 10px 20px;\r\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\r\n  white-space: pre-wrap;\r\n  outline: 0;\r\n}\r\n\r\n/**\r\n * 我一直是单单调调的黑白格.\r\n *\r\n * 可是你突然打翻颜料盒.\r\n *\r\n * 我的横平竖直一下子有了五光十色.\r\n * \r\n */\r\n\r\n\r\n.comment       { color: #857F6B; font-style: italic; }\r\n.selector      { color: #E69F0F; }\r\n.selector .key { color: #64D5EA; }\r\n.key           { color: #64D5EA; }\r\n.value         { color: #BE84F2; }\r\n.value.px      { color: #F92772; }\r\n\r\n#style-text {\r\n  -webkit-transform: translateX(95%);\r\n  position: absolute;\r\n}\r\n\r\nbody {\r\n  -webkit-perspective: 1000px;\r\n}\r\n\r\n\r\n/*\r\n * 我记得第一次牵你手时夏末的晚风.\r\n *\r\n * 喧嚣的体育场只听得见心跳声扑通扑通... \r\n * \r\n */\r\n\r\n#style-text {\r\n  -webkit-transform-origin: right;\r\n  max-height: 94.5%;\r\n}\r\n\r\n\r\npre:not(#style-text) {\r\n  -webkit-transform: rotateY(10deg);\r\n  -webkit-transform-origin: left;\r\n}\r\n\r\n\r\n "
    },
    function(t, e) {
        t.exports = "\r\n#heart,#echo{\r\n position: absolute;\r\n top: 100px; \r\n left: 125px;\r\n height: 400px;\r\n width: 400px; \r\n text-align:center;\r\n -webkit-transform: scale(0.95);\r\n         transform: scale(0.95);\r\n}\r\n\r\n#heart{\r\n z-index: 8;\r\n}\r\n\r\n#echo{\r\n z-index: 7;\r\n}\r\n\r\n/*\r\n * 我记得陪你跨年的元旦深冬. \r\n *\r\n * 天幕城的星星那么低, 臂弯里的你让我那么着迷...\r\n *\r\n */\r\n\r\n#heart::before,#echo::before{\r\n content: '';\r\n position: absolute;\r\n top: 60px;\r\n left: 135px;\r\n width: 100px;\r\n height: 160px;\r\n background: #c66c75;\r\n border-radius: 150px 150px 0 0;\r\n -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n#heart::after,#echo::before{\r\n content: '';\r\n position: absolute;\r\n top: 60px;\r\n left: 178px;\r\n width: 100px;;\r\n height: 160px;\r\n background: #c66c75;\r\n border-radius: 150px 150px 0 0;\r\n -webkit-transform: rotate(45deg);\r\n}\r\n\r\n/*\r\n * 我还记得.\r\n *\r\n * 吃完小龙虾，我们一起压马路.\r\n *\r\n * 你说明天你就要走了，时间过得慢一点好不好啊.\r\n *\r\n *\r\n * 那一刻我再次确定.\r\n *\r\n * 你就是我一生的归宿...\r\n *\r\n */\r\n\r\n#heart::before{\r\nbox-shadow:\r\n   inset 6px 6px 0px 6px rgba(255,255,255,0.1);\r\n}\r\n\r\n#heart::after{\r\nbox-shadow:\r\n   inset -6px -6px 0px 6px rgba(255,255,255,0.1);\r\n}\r\n\r\n/*\r\n * 我记得与你分别时的时令与天气，更记得每次见你时你在人群中亭亭玉立.\r\n *\r\n *\r\n * 可是我不记得.\r\n *\r\n * 你是什么时候不知不觉将名字刻在我心里... \r\n *\r\n */\r\n\r\n#heart i::before{\r\n content: '悦悦';\r\n position: absolute;\r\n z-index: 9;\r\n left: 160px;\r\n top: 125px;\r\n font-style: normal;\r\n color: rgba(255,255,255,0.8);\r\n}\r\n\r\n/*\r\n * 我看着你的眼睛说过我爱你.\r\n *\r\n *\r\n * 鼻尖碰鼻尖轻喃过我想你.\r\n *\r\n *\r\n * 我说过的晚安从黑夜蜿蜒到黎明.\r\n *\r\n *\r\n * 我从身体里 灵魂里一遍一遍呼唤你...\r\n *\r\n */\r\n\r\n@-webkit-keyframes heartbeat {\r\n  0%, 100% { \r\n    -webkit-transform: scale(0.95); \r\n            transform: scale(0.95); \r\n  }\r\n  50% { \r\n    -webkit-transform: scale(1.00); \r\n            transform: scale(1.00); \r\n  }\r\n}\r\n\r\n@keyframes heartbeat {\r\n  0%, 100% { transform: scale(0.95); }\r\n  50%      { transform: scale(1.00); }\r\n}\r\n\r\n/*\r\n * 我对你说过好多好多话.\r\n * \r\n * 我想把自己写进词里唱给你听.\r\n * \r\n */\r\n *@-webkit-keyframes echo {\r\n  0%   { \r\n    opacity: 0.1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n  100% { \r\n    opacity: 0;\r\n    -webkit-transform: scale(1.4);\r\n            transform: scale(1.4);\r\n  }\r\n}\r\n\r\n@keyframes echo {\r\n  0%   { \r\n    opacity: 0.1;\r\n    transform: scale(1);\r\n  }\r\n  100% { \r\n    opacity: 0;\r\n    transform: scale(1.4);\r\n  }\r\n}\r\n\r\n\r\n/* \r\n * 可是有一句话我从来没有说起.\r\n *\r\n * 这是一生只能说给一人听的话语.\r\n *\r\n */\r\n\r\n#heart, #echo {\r\n  -webkit-animation-duration: 2000ms;\r\n          animation-duration: 2000ms;\r\n  -webkit-animation-timing-function: \r\n    cubic-bezier(0, 0, 0, 1.74);\r\n          animation-timing-function: \r\n            cubic-bezier(0, 0, 0, 1.74);\r\n  -webkit-animation-delay: 500ms;\r\n          animation-delay: 500ms;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-play-state: paused;\r\n          animation-play-state: paused;\r\n}\r\n\r\n/* \r\n * 为了实现它的魔力.\r\n *\r\n * 我会努力去做更好的自己.\r\n *\r\n * 架起屋脊为你挡风遮雨.\r\n *\r\n * 细心经营生活的幸福甜蜜.\r\n *\r\n * 当然也不会忘记制造小小惊喜.\r\n *\r\n */\r\n\r\n#heart { \r\n  -webkit-animation-name: heartbeat; \r\n          animation-name: heartbeat; \r\n}\r\n#echo { \r\n  -webkit-animation-name: echo; \r\n          animation-name: echo; \r\n}\r\n\r\n#heart, #echo {\r\n\r\n/* \r\n * 我已经等不及了...\r\n * \r\n * 所以. \r\n * \r\n * 宝贝你准备好了么?\r\n * \r\n * 3...\r\n * 2..\r\n * 1.\r\n *        \r\n */\r\n  \r\n  -webkit-animation-play-state: running;\r\n          animation-play-state: running;\r\n  \r\n  \r\n}#heart i::before{\r\n content: '悦悦，Marry me!';\r\n position: absolute;\r\n z-index: 9;\r\n left: 160px;\r\n top: 125px;\r\n font-style: normal;\r\n color: rgba(255,255,255,0.8);\r\n}\r\n\r\n\r\n/* \r\n * by yuxi \r\n * \r\n */\r\n\r\n\r\n"
    },
    function(t, e) {
        t.exports = "/*\r\n*/"
    },
    88,
    function(t, e) {
        t.exports = '/*\r\n   Copyright 2014 GitHub Inc.\r\n\r\n   Licensed under the Apache License, Version 2.0 (the "License");\r\n   you may not use this file except in compliance with the License.\r\n   You may obtain a copy of the License at\r\n\r\n       http://www.apache.org/licenses/LICENSE-2.0\r\n\r\n   Unless required by applicable law or agreed to in writing, software\r\n   distributed under the License is distributed on an "AS IS" BASIS,\r\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n   See the License for the specific language governing permissions and\r\n   limitations under the License.\r\n\r\n*/\r\n\r\n.pl-c /* comment */ {\r\n  color: #969896;\r\n}\r\n\r\n.pl-c1      /* constant, markup.raw, meta.diff.header, meta.module-reference, meta.property-name, support, support.constant, support.variable, variable.other.constant */,\r\n.pl-s .pl-v /* string variable */ {\r\n  color: #0086b3;\r\n}\r\n\r\n.pl-e  /* entity */,\r\n.pl-en /* entity.name */ {\r\n  color: #795da3;\r\n}\r\n\r\n.pl-s .pl-s1 /* string source */,\r\n.pl-smi      /* storage.modifier.import, storage.modifier.package, storage.type.java, variable.other, variable.parameter.function */ {\r\n  color: #333;\r\n}\r\n\r\n.pl-ent /* entity.name.tag */ {\r\n  color: #63a35c;\r\n}\r\n\r\n.pl-k /* keyword, storage, storage.type */ {\r\n  color: #a71d5d;\r\n}\r\n\r\n.pl-pds              /* punctuation.definition.string, string.regexp.character-class */,\r\n.pl-s                /* string */,\r\n.pl-s .pl-pse .pl-s1 /* string punctuation.section.embedded source */,\r\n.pl-sr               /* string.regexp */,\r\n.pl-sr .pl-cce       /* string.regexp constant.character.escape */,\r\n.pl-sr .pl-sra       /* string.regexp string.regexp.arbitrary-repitition */,\r\n.pl-sr .pl-sre       /* string.regexp source.ruby.embedded */ {\r\n  color: #183691;\r\n}\r\n\r\n.pl-v /* variable */ {\r\n  color: #ed6a43;\r\n}\r\n\r\n.pl-id /* invalid.deprecated */ {\r\n  color: #b52a1d;\r\n}\r\n\r\n.pl-ii /* invalid.illegal */ {\r\n  background-color: #b52a1d;\r\n  color: #f8f8f8;\r\n}\r\n\r\n.pl-sr .pl-cce /* string.regexp constant.character.escape */ {\r\n  color: #63a35c;\r\n  font-weight: bold;\r\n}\r\n\r\n.pl-ml /* markup.list */ {\r\n  color: #693a17;\r\n}\r\n\r\n.pl-mh        /* markup.heading */,\r\n.pl-mh .pl-en /* markup.heading entity.name */,\r\n.pl-ms        /* meta.separator */ {\r\n  color: #1d3e81;\r\n  font-weight: bold;\r\n}\r\n\r\n.pl-mq /* markup.quote */ {\r\n  color: #008080;\r\n}\r\n\r\n.pl-mi /* markup.italic */ {\r\n  color: #333;\r\n  font-style: italic;\r\n}\r\n\r\n.pl-mb /* markup.bold */ {\r\n  color: #333;\r\n  font-weight: bold;\r\n}\r\n\r\n.pl-md /* markup.deleted, meta.diff.header.from-file */ {\r\n  background-color: #ffecec;\r\n  color: #bd2c00;\r\n}\r\n\r\n.pl-mi1 /* markup.inserted, meta.diff.header.to-file */ {\r\n  background-color: #eaffea;\r\n  color: #55a532;\r\n}\r\n\r\n.pl-mdr /* meta.diff.range */ {\r\n  color: #795da3;\r\n  font-weight: bold;\r\n}\r\n\r\n.pl-mo /* meta.output */ {\r\n  color: #1d3e81;\r\n}\r\n\r\n';
    },
    function(t, e) {
        t.exports = '/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Contain overflow in all browsers.\r\n */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\r\n\r\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type="button"], /* 1 */\r\ninput[type="reset"],\r\ninput[type="submit"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * It\'s recommended that you don\'t attempt to style these elements.\r\n * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\r\n\r\ninput[type="number"]::-webkit-inner-spin-button,\r\ninput[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */ /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Don\'t inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n'
    },
    function(t, e) {
        t.exports = '* {\r\n  box-sizing: border-box; }\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  color: #606c71; }\r\n\r\na {\r\n  color: #1e6bb8;\r\n  text-decoration: none; }\r\n  a:hover {\r\n    text-decoration: underline; }\r\n\r\n.btn {\r\n  display: inline-block;\r\n  margin-bottom: 1rem;\r\n  color: rgba(255, 255, 255, 0.7);\r\n  background-color: rgba(255, 255, 255, 0.08);\r\n  border-color: rgba(255, 255, 255, 0.2);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 0.3rem;\r\n  transition: color 0.2s, background-color 0.2s, border-color 0.2s; }\r\n  .btn + .btn {\r\n    margin-left: 1rem; }\r\n\r\n.btn:hover {\r\n  color: rgba(255, 255, 255, 0.8);\r\n  text-decoration: none;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  border-color: rgba(255, 255, 255, 0.3); }\r\n\r\n@media screen and (min-width: 64em) {\r\n  .btn {\r\n    padding: 0.75rem 1rem; } }\r\n\r\n@media screen and (min-width: 42em) and (max-width: 64em) {\r\n  .btn {\r\n    padding: 0.6rem 0.9rem;\r\n    font-size: 0.9rem; } }\r\n\r\n@media screen and (max-width: 42em) {\r\n  .btn {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.75rem;\r\n    font-size: 0.9rem; }\r\n    .btn + .btn {\r\n      margin-top: 1rem;\r\n      margin-left: 0; } }\r\n\r\n.page-header {\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #159957;\r\n  background-image: linear-gradient(120deg, #155799, #159957); }\r\n\r\n@media screen and (min-width: 64em) {\r\n  .page-header {\r\n    padding: 5rem 6rem; } }\r\n\r\n@media screen and (min-width: 42em) and (max-width: 64em) {\r\n  .page-header {\r\n    padding: 3rem 4rem; } }\r\n\r\n@media screen and (max-width: 42em) {\r\n  .page-header {\r\n    padding: 2rem 1rem; } }\r\n\r\n.project-name {\r\n  margin-top: 0;\r\n  margin-bottom: 0.1rem; }\r\n\r\n@media screen and (min-width: 64em) {\r\n  .project-name {\r\n    font-size: 3.25rem; } }\r\n\r\n@media screen and (min-width: 42em) and (max-width: 64em) {\r\n  .project-name {\r\n    font-size: 2.25rem; } }\r\n\r\n@media screen and (max-width: 42em) {\r\n  .project-name {\r\n    font-size: 1.75rem; } }\r\n\r\n.project-tagline {\r\n  margin-bottom: 2rem;\r\n  font-weight: normal;\r\n  opacity: 0.7; }\r\n\r\n@media screen and (min-width: 64em) {\r\n  .project-tagline {\r\n    font-size: 1.25rem; } }\r\n\r\n@media screen and (min-width: 42em) and (max-width: 64em) {\r\n  .project-tagline {\r\n    font-size: 1.15rem; } }\r\n\r\n@media screen and (max-width: 42em) {\r\n  .project-tagline {\r\n    font-size: 1rem; } }\r\n\r\n.main-content :first-child {\r\n  margin-top: 0; }\r\n.main-content img {\r\n  max-width: 100%; }\r\n.main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-weight: normal;\r\n  color: #159957; }\r\n.main-content p {\r\n  margin-bottom: 1em; }\r\n.main-content code {\r\n  padding: 2px 4px;\r\n  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  font-size: 0.9rem;\r\n  color: #383e41;\r\n  background-color: #f3f6fa;\r\n  border-radius: 0.3rem; }\r\n.main-content pre {\r\n  padding: 0.8rem;\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  font: 1rem Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  color: #567482;\r\n  word-wrap: normal;\r\n  background-color: #f3f6fa;\r\n  border: solid 1px #dce6f0;\r\n  border-radius: 0.3rem; }\r\n  .main-content pre > code {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 0.9rem;\r\n    color: #567482;\r\n    word-break: normal;\r\n    white-space: pre;\r\n    background: transparent;\r\n    border: 0; }\r\n.main-content .highlight {\r\n  margin-bottom: 1rem; }\r\n  .main-content .highlight pre {\r\n    margin-bottom: 0;\r\n    word-break: normal; }\r\n.main-content .highlight pre, .main-content pre {\r\n  padding: 0.8rem;\r\n  overflow: auto;\r\n  font-size: 0.9rem;\r\n  line-height: 1.45;\r\n  border-radius: 0.3rem; }\r\n.main-content pre code, .main-content pre tt {\r\n  display: inline;\r\n  max-width: initial;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: initial;\r\n  line-height: inherit;\r\n  word-wrap: normal;\r\n  background-color: transparent;\r\n  border: 0; }\r\n  .main-content pre code:before, .main-content pre code:after, .main-content pre tt:before, .main-content pre tt:after {\r\n    content: normal; }\r\n.main-content ul, .main-content ol {\r\n  margin-top: 0; }\r\n.main-content blockquote {\r\n  padding: 0 1rem;\r\n  margin-left: 0;\r\n  color: #819198;\r\n  border-left: 0.3rem solid #dce6f0; }\r\n  .main-content blockquote > :first-child {\r\n    margin-top: 0; }\r\n  .main-content blockquote > :last-child {\r\n    margin-bottom: 0; }\r\n.main-content table {\r\n  display: block;\r\n  width: 100%;\r\n  overflow: auto;\r\n  word-break: normal;\r\n  word-break: keep-all; }\r\n  .main-content table th {\r\n    font-weight: bold; }\r\n  .main-content table th, .main-content table td {\r\n    padding: 0.5rem 1rem;\r\n    border: 1px solid #e9ebec; }\r\n.main-content dl {\r\n  padding: 0; }\r\n  .main-content dl dt {\r\n    padding: 0;\r\n    margin-top: 1rem;\r\n    font-size: 1rem;\r\n    font-weight: bold; }\r\n  .main-content dl dd {\r\n    padding: 0;\r\n    margin-bottom: 1rem; }\r\n.main-content hr {\r\n  height: 2px;\r\n  padding: 0;\r\n  margin: 1rem 0;\r\n  background-color: #eff0f1;\r\n  border: 0; }\r\n\r\n@media screen and (min-width: 64em) {\r\n  .main-content {\r\n    max-width: 64rem;\r\n    padding: 2rem 6rem;\r\n    margin: 0 auto;\r\n    font-size: 1.1rem; } }\r\n\r\n@media screen and (min-width: 42em) and (max-width: 64em) {\r\n  .main-content {\r\n    padding: 2rem 4rem;\r\n    font-size: 1.1rem; } }\r\n\r\n@media screen and (max-width: 42em) {\r\n  .main-content {\r\n    padding: 2rem 1rem;\r\n    font-size: 1rem; } }\r\n\r\n.site-footer {\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: solid 1px #eff0f1; }\r\n\r\n.site-footer-owner {\r\n  display: block;\r\n  font-weight: bold; }\r\n\r\n.site-footer-credits {\r\n  color: #819198; }\r\n\r\n@media screen and (min-width: 64em) {\r\n  .site-footer {\r\n    font-size: 1rem; } }\r\n\r\n@media screen and (min-width: 42em) and (max-width: 64em) {\r\n  .site-footer {\r\n    font-size: 1rem; } }\r\n\r\n@media screen and (max-width: 42em) {\r\n  .site-footer {\r\n    font-size: 0.9rem; } }\r\n'
    },
    function(t, e) {
        t.exports = 'SpireCat\r\n=========\r\n\r\n<<<<<<< HEAD\r\nSamuel Reed\r\nCTO, BitMEX (The Bitcoin Mercantile Exchange)\r\nFrontend / NodeJS Developer\r\n=======\r\nSun Jian\r\nCoder / Poet / Foodie\r\n>>>>>>> parent of b41e433... Revert "anicat_heart"\r\n\r\nContact [MD5]\r\n-------\r\n\r\n<<<<<<< HEAD\r\n* sam at bitmex dot com\r\n* samuel.trace.reed at gmail dot com\r\n* STRML on irc.freenode.net\r\n\r\nAvailability\r\n------------\r\n\r\nAt this time, I am busy. I am happy to entertain\r\nproposals for later work but immediate availability\r\nis scarce.\r\n=======\r\n* Q : 572a271b798d9b6b2ee49df61ff7acd3\r\n* T : 95fdc85b4964408c5971864465b1ec91\r\n* E : 724e80d40c4de63fe3abce20b2542380\r\n>>>>>>> parent of b41e433... Revert "anicat_heart"\r\n\r\nProjects\r\n--------\r\n\r\n* Android Malware Analysis\r\n* Web Vulnerabilities \r\n* Private Blogs\r\n* Android Applications\r\n\r\nAbout This\r\n-----------\r\n\r\n<<<<<<< HEAD\r\n* OpenBazaar\r\n* JSXHint\r\n* btchip-signing-tools\r\n* react-grid-layout\r\n* react-localstorage\r\n* react-router-component\r\n* react-resizable\r\n* react-draggable\r\n* textFit\r\n* imgur-to-gfycat\r\n* backbone.queryRouter\r\n* backbone.layoutManager\r\n* mongoose-filter-denormalize\r\n=======\r\n* JavaScript\r\n* NodeJS\r\n* Webpack\r\n* Git\r\n* Html & CSS\r\n* React\r\n>>>>>>> parent of b41e433... Revert "anicat_heart"\r\n\r\n\r\n<<<<<<< HEAD\r\n=======\r\nI\'m trying to set up a studio. Come on and join us \r\n>>>>>>> parent of b41e433... Revert "anicat_heart"\r\n'
    },
    function(t, e) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            t.super_ = e,
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }: t.exports = function(t, e) {
            t.super_ = e;
            var n = function() {};
            n.prototype = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t
        }
    },
    function(t, e) {
        t.exports = function(t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    },
    function(t, e, n) { (function(t, r) {
            function i(t, n) {
                var r = {
                    seen: [],
                    stylize: s
                };
                return arguments.length >= 3 && (r.depth = arguments[2]),
                arguments.length >= 4 && (r.colors = arguments[3]),
                v(n) ? r.showHidden = n: n && e._extend(r, n),
                w(r.showHidden) && (r.showHidden = !1),
                w(r.depth) && (r.depth = 2),
                w(r.colors) && (r.colors = !1),
                w(r.customInspect) && (r.customInspect = !0),
                r.colors && (r.stylize = o),
                c(r, t, r.depth)
            }
            function o(t, e) {
                var n = i.styles[e];
                return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m": t
            }
            function s(t, e) {
                return t
            }
            function a(t) {
                var e = {};
                return t.forEach(function(t, n) {
                    e[t] = !0
                }),
                e
            }
            function c(t, n, r) {
                if (t.customInspect && n && S(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(r, t);
                    return y(i) || (i = c(t, i, r)),
                    i
                }
                var o = u(t, n);
                if (o) return o;
                var s = Object.keys(n),
                v = a(s);
                if (t.showHidden && (s = Object.getOwnPropertyNames(n)), E(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(n);
                if (0 === s.length) {
                    if (S(n)) {
                        var m = n.name ? ": " + n.name: "";
                        return t.stylize("[Function" + m + "]", "special")
                    }
                    if (x(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (k(n)) return t.stylize(Date.prototype.toString.call(n), "date");
                    if (E(n)) return l(n)
                }
                var g = "",
                _ = !1,
                b = ["{", "}"];
                if (d(n) && (_ = !0, b = ["[", "]"]), S(n)) {
                    var w = n.name ? ": " + n.name: "";
                    g = " [Function" + w + "]"
                }
                if (x(n) && (g = " " + RegExp.prototype.toString.call(n)), k(n) && (g = " " + Date.prototype.toUTCString.call(n)), E(n) && (g = " " + l(n)), 0 === s.length && (!_ || 0 == n.length)) return b[0] + g + b[1];
                if (0 > r) return x(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");
                t.seen.push(n);
                var j;
                return j = _ ? f(t, n, r, v, s) : s.map(function(e) {
                    return p(t, n, r, v, e, _)
                }),
                t.seen.pop(),
                h(j, g, b)
            }
            function u(t, e) {
                if (w(e)) return t.stylize("undefined", "undefined");
                if (y(e)) {
                    var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(n, "string")
                }
                return _(e) ? t.stylize("" + e, "number") : v(e) ? t.stylize("" + e, "boolean") : m(e) ? t.stylize("null", "null") : void 0
            }
            function l(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }
            function f(t, e, n, r, i) {
                for (var o = [], s = 0, a = e.length; a > s; ++s) O(e, String(s)) ? o.push(p(t, e, n, r, String(s), !0)) : o.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || o.push(p(t, e, n, r, i, !0))
                }),
                o
            }
            function p(t, e, n, r, i, o) {
                var s, a, u;
                if (u = Object.getOwnPropertyDescriptor(e, i) || {
                    value: e[i]
                },
                u.get ? a = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (a = t.stylize("[Setter]", "special")), O(r, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(u.value) < 0 ? (a = m(n) ? c(t, u.value, null) : c(t, u.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + a.split("\n").map(function(t) {
                    return "   " + t
                }).join("\n"))) : a = t.stylize("[Circular]", "special")), w(s)) {
                    if (o && i.match(/^\d+$/)) return a;
                    s = JSON.stringify("" + i),
                    s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
                }
                return s + ": " + a
            }
            function h(t, e, n) {
                var r = 0,
                i = t.reduce(function(t, e) {
                    return r++,
                    e.indexOf("\n") >= 0 && r++,
                    t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                },
                0);
                return i > 60 ? n[0] + ("" === e ? "": e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
            }
            function d(t) {
                return Array.isArray(t)
            }
            function v(t) {
                return "boolean" == typeof t
            }
            function m(t) {
                return null === t
            }
            function g(t) {
                return null == t
            }
            function _(t) {
                return "number" == typeof t
            }
            function y(t) {
                return "string" == typeof t
            }
            function b(t) {
                return "symbol" == typeof t
            }
            function w(t) {
                return void 0 === t
            }
            function x(t) {
                return j(t) && "[object RegExp]" === C(t)
            }
            function j(t) {
                return "object" == typeof t && null !== t
            }
            function k(t) {
                return j(t) && "[object Date]" === C(t)
            }
            function E(t) {
                return j(t) && ("[object Error]" === C(t) || t instanceof Error)
            }
            function S(t) {
                return "function" == typeof t
            }
            function T(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
            }
            function C(t) {
                return Object.prototype.toString.call(t)
            }
            function F(t) {
                return 10 > t ? "0" + t.toString(10) : t.toString(10)
            }
            function A() {
                var t = new Date,
                e = [F(t.getHours()), F(t.getMinutes()), F(t.getSeconds())].join(":");
                return [t.getDate(), I[t.getMonth()], e].join(" ")
            }
            function O(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            var P = /%[sdj%]/g;
            e.format = function(t) {
                if (!y(t)) {
                    for (var e = [], n = 0; n < arguments.length; n++) e.push(i(arguments[n]));
                    return e.join(" ")
                }
                for (var n = 1,
                r = arguments,
                o = r.length,
                s = String(t).replace(P,
                function(t) {
                    if ("%%" === t) return "%";
                    if (n >= o) return t;
                    switch (t) {
                    case "%s":
                        return String(r[n++]);
                    case "%d":
                        return Number(r[n++]);
                    case "%j":
                        try {
                            return JSON.stringify(r[n++])
                        } catch(e) {
                            return "[Circular]"
                        }
                    default:
                        return t
                    }
                }), a = r[n]; o > n; a = r[++n]) s += m(a) || !j(a) ? " " + a: " " + i(a);
                return s
            },
            e.deprecate = function(n, i) {
                function o() {
                    if (!s) {
                        if (r.throwDeprecation) throw new Error(i);
                        r.traceDeprecation ? console.trace(i) : console.error(i),
                        s = !0
                    }
                    return n.apply(this, arguments)
                }
                if (w(t.process)) return function() {
                    return e.deprecate(n, i).apply(this, arguments)
                };
                if (r.noDeprecation === !0) return n;
                var s = !1;
                return o
            };
            var R, L = {};
            e.debuglog = function(t) {
                if (w(R) && (R = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !L[t]) if (new RegExp("\\b" + t + "\\b", "i").test(R)) {
                    var n = r.pid;
                    L[t] = function() {
                        var r = e.format.apply(e, arguments);
                        console.error("%s %d: %s", t, n, r)
                    }
                } else L[t] = function() {};
                return L[t]
            },
            e.inspect = i,
            i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            },
            i.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            },
            e.isArray = d,
            e.isBoolean = v,
            e.isNull = m,
            e.isNullOrUndefined = g,
            e.isNumber = _,
            e.isString = y,
            e.isSymbol = b,
            e.isUndefined = w,
            e.isRegExp = x,
            e.isObject = j,
            e.isDate = k,
            e.isError = E,
            e.isFunction = S,
            e.isPrimitive = T,
            e.isBuffer = n(95);
            var I = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            e.log = function() {
                console.log("%s - %s", A(), e.format.apply(e, arguments))
            },
            e.inherits = n(94),
            e._extend = function(t, e) {
                if (!e || !j(e)) return t;
                for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
                return t
            }
        }).call(e,
        function() {
            return this
        } (), n(14))
    }]))
});
//# sourceMappingURL=app.js.map
