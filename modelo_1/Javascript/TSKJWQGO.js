import {a as g} from "./Q6TZRKPZ.js";
import {c as B, f} from "./PQ35KENF.js";
var X = B((Pe,Y)=>{
    Y.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
}
);
var me = B((bt,A)=>{
    function _(t) {
        var e, n, s = "";
        if (typeof t == "string" || typeof t == "number")
            s += t;
        else if (typeof t == "object")
            if (Array.isArray(t))
                for (e = 0; e < t.length; e++)
                    t[e] && (n = _(t[e])) && (s && (s += " "),
                    s += n);
            else
                for (e in t)
                    t[e] && (s && (s += " "),
                    s += e);
        return s
    }
    function Q() {
        for (var t, e, n = 0, s = ""; n < arguments.length; )
            (t = arguments[n++]) && (e = _(t)) && (s && (s += " "),
            s += e);
        return s
    }
    A.exports = Q,
    A.exports.clsx = Q
}
);
var i = f(g(), 1);
var W = f(g(), 1);
var ee = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , te = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "\xA9",
    "&#169;": "\xA9",
    "&reg;": "\xAE",
    "&#174;": "\xAE",
    "&hellip;": "\u2026",
    "&#8230;": "\u2026",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , ne = t=>te[t]
  , D = t=>t.replace(ee, ne);
var O = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: D
};
function $() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    O = {
        ...O,
        ...t
    }
}
function w() {
    return O
}
var K;
function C(t) {
    K = t
}
function h() {
    return K
}
var U = {
    type: "3rdParty",
    init(t) {
        $(t.options.react),
        C(t)
    }
};
var b = (0,
W.createContext)()
  , P = class {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(e) {
        e.forEach(n=>{
            this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
        }
        )
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
;
function J() {
    if (console && console.warn) {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`)
    }
}
var M = {};
function T() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
    typeof e[0] == "string" && M[e[0]] || (typeof e[0] == "string" && (M[e[0]] = new Date),
    J(...e))
}
var V = (t,e)=>()=>{
    if (t.isInitialized)
        e();
    else {
        let n = ()=>{
            setTimeout(()=>{
                t.off("initialized", n)
            }
            , 0),
            e()
        }
        ;
        t.on("initialized", n)
    }
}
;
function k(t, e, n) {
    t.loadNamespaces(e, V(t, n))
}
function j(t, e, n, s) {
    typeof n == "string" && (n = [n]),
    n.forEach(u=>{
        t.options.ns.indexOf(u) < 0 && t.options.ns.push(u)
    }
    ),
    t.loadLanguages(e, V(t, s))
}
function re(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , s = e.languages[0]
      , u = e.options ? e.options.fallbackLng : !1
      , r = e.languages[e.languages.length - 1];
    if (s.toLowerCase() === "cimode")
        return !0;
    let m = (S,E)=>{
        let o = e.services.backendConnector.state[`${S}|${E}`];
        return o === -1 || o === 2
    }
    ;
    return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !m(e.isLanguageChangingTo, t) ? !1 : !!(e.hasResourceBundle(s, t) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || m(s, t) && (!u || m(r, t)))
}
function q(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !e.languages || !e.languages.length ? (T("i18n.languages were undefined or empty", e.languages),
    !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(t, {
        lng: n.lng,
        precheck: (u,r)=>{
            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && u.services.backendConnector.backend && u.isLanguageChangingTo && !r(u.isLanguageChangingTo, t))
                return !1
        }
    }) : re(t, e, n)
}
var se = (t,e)=>{
    let n = (0,
    i.useRef)();
    return (0,
    i.useEffect)(()=>{
        n.current = e ? n.current : t
    }
    , [t, e]),
    n.current
}
;
function R(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , {i18n: n} = e
      , {i18n: s, defaultNS: u} = (0,
    i.useContext)(b) || {}
      , r = n || s || h();
    if (r && !r.reportNamespaces && (r.reportNamespaces = new P),
    !r) {
        T("You will need to pass in an i18next instance by using initReactI18next");
        let a = (l,c)=>typeof c == "string" ? c : c && typeof c == "object" && typeof c.defaultValue == "string" ? c.defaultValue : Array.isArray(l) ? l[l.length - 1] : l
          , p = [a, {}, !1];
        return p.t = a,
        p.i18n = {},
        p.ready = !1,
        p
    }
    r.options.react && r.options.react.wait !== void 0 && T("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    let m = {
        ...w(),
        ...r.options.react,
        ...e
    }
      , {useSuspense: S, keyPrefix: E} = m
      , o = t || u || r.options && r.options.defaultNS;
    o = typeof o == "string" ? [o] : o || ["translation"],
    r.reportNamespaces.addUsedNamespaces && r.reportNamespaces.addUsedNamespaces(o);
    let x = (r.isInitialized || r.initializedStoreOnce) && o.every(a=>q(a, r, m));
    function y() {
        return r.getFixedT(e.lng || null, m.nsMode === "fallback" ? o : o[0], E)
    }
    let[F,v] = (0,
    i.useState)(y)
      , N = o.join();
    e.lng && (N = `${e.lng}${N}`);
    let H = se(N)
      , d = (0,
    i.useRef)(!0);
    (0,
    i.useEffect)(()=>{
        let {bindI18n: a, bindI18nStore: p} = m;
        d.current = !0,
        !x && !S && (e.lng ? j(r, e.lng, o, ()=>{
            d.current && v(y)
        }
        ) : k(r, o, ()=>{
            d.current && v(y)
        }
        )),
        x && H && H !== N && d.current && v(y);
        function l() {
            d.current && v(y)
        }
        return a && r && r.on(a, l),
        p && r && r.store.on(p, l),
        ()=>{
            d.current = !1,
            a && r && a.split(" ").forEach(c=>r.off(c, l)),
            p && r && p.split(" ").forEach(c=>r.store.off(c, l))
        }
    }
    , [r, N]);
    let z = (0,
    i.useRef)(!0);
    (0,
    i.useEffect)(()=>{
        d.current && !z.current && v(y),
        z.current = !1
    }
    , [r, E]);
    let I = [F, r, x];
    if (I.t = F,
    I.i18n = r,
    I.ready = x,
    x || !x && !S)
        return I;
    throw new Promise(a=>{
        e.lng ? j(r, e.lng, o, ()=>a()) : k(r, o, ()=>a())
    }
    )
}
var ie = f(g(), 1);
var L = f(g(), 1);
var oe = f(X());
var Z = f(g(), 1);
var G = f(g(), 1);
var fe = f(g(), 1);
var ce = f(g(), 1);
export {me as a, U as b, R as c};
