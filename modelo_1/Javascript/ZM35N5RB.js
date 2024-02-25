import {i as ee} from "./V56SQG4X.js";
import {e as j} from "./SUT4BSCK.js";
import {c as T, d as A, j as H, m as J, n as Q, o as W, p as X, t as z, w as V} from "./B5YK3YMW.js";
import {a as Y} from "./TSKJWQGO.js";
import {a as N} from "./Q6TZRKPZ.js";
import {f as m} from "./PQ35KENF.js";
A();
var w = m(N());
var R = m(Y())
  , l = m(Q())
  , q = m(ee());
var B = m(N())
  , re = B.createContext()
  , h = re;
var M = m(H())
  , _ = m(X());
function E(e) {
    return (0,
    _.default)("MuiGrid", e)
}
var oe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , se = ["column-reverse", "column", "row-reverse", "row"]
  , ne = ["nowrap", "wrap-reverse", "wrap"]
  , x = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  , pe = (0,
M.unstable_generateUtilityClasses)("MuiGrid", ["root", "container", "item", "zeroMinWidth", ...oe.map(e=>`spacing-xs-${e}`), ...se.map(e=>`direction-xs-${e}`), ...ne.map(e=>`wrap-xs-${e}`), ...x.map(e=>`grid-xs-${e}`), ...x.map(e=>`grid-sm-${e}`), ...x.map(e=>`grid-md-${e}`), ...x.map(e=>`grid-lg-${e}`), ...x.map(e=>`grid-xl-${e}`)])
  , P = pe;
var S = m(J())
  , te = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function g(e) {
    let r = parseFloat(e);
    return `${r}${String(e).replace(String(r), "") || "px"}`
}
function ie({theme: e, ownerState: r}) {
    let n;
    return e.breakpoints.keys.reduce((s,o)=>{
        let p = {};
        if (r[o] && (n = r[o]),
        !n)
            return s;
        if (n === !0)
            p = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: "100%"
            };
        else if (n === "auto")
            p = {
                flexBasis: "auto",
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: "none",
                width: "auto"
            };
        else {
            let i = (0,
            l.unstable_resolveBreakpointValues)({
                values: r.columns,
                breakpoints: e.breakpoints.values
            })
              , c = typeof i == "object" ? i[o] : i;
            if (c == null)
                return s;
            let u = `${Math.round(n / c * 1e8) / 1e6}%`
              , a = {};
            if (r.container && r.item && r.columnSpacing !== 0) {
                let t = e.spacing(r.columnSpacing);
                if (t !== "0px") {
                    let f = `calc(${u} + ${g(t)})`;
                    a = {
                        flexBasis: f,
                        maxWidth: f
                    }
                }
            }
            p = T({
                flexBasis: u,
                flexGrow: 0,
                maxWidth: u
            }, a)
        }
        return e.breakpoints.values[o] === 0 ? Object.assign(s, p) : s[e.breakpoints.up(o)] = p,
        s
    }
    , {})
}
function ae({theme: e, ownerState: r}) {
    let n = (0,
    l.unstable_resolveBreakpointValues)({
        values: r.direction,
        breakpoints: e.breakpoints.values
    });
    return (0,
    l.handleBreakpoints)({
        theme: e
    }, n, s=>{
        let o = {
            flexDirection: s
        };
        return s.indexOf("column") === 0 && (o[`& > .${P.item}`] = {
            maxWidth: "none"
        }),
        o
    }
    )
}
function D({breakpoints: e, values: r}) {
    let n = "";
    Object.keys(r).forEach(o=>{
        n === "" && r[o] !== 0 && (n = o)
    }
    );
    let s = Object.keys(e).sort((o,p)=>e[o] - e[p]);
    return s.slice(0, s.indexOf(n))
}
function ce({theme: e, ownerState: r}) {
    let {container: n, rowSpacing: s} = r
      , o = {};
    if (n && s !== 0) {
        let p = (0,
        l.unstable_resolveBreakpointValues)({
            values: s,
            breakpoints: e.breakpoints.values
        }), i;
        typeof p == "object" && (i = D({
            breakpoints: e.breakpoints.values,
            values: p
        })),
        o = (0,
        l.handleBreakpoints)({
            theme: e
        }, p, (c,u)=>{
            var a;
            let t = e.spacing(c);
            return t !== "0px" ? {
                marginTop: `-${g(t)}`,
                [`& > .${P.item}`]: {
                    paddingTop: g(t)
                }
            } : (a = i) != null && a.includes(u) ? {} : {
                marginTop: 0,
                [`& > .${P.item}`]: {
                    paddingTop: 0
                }
            }
        }
        )
    }
    return o
}
function ue({theme: e, ownerState: r}) {
    let {container: n, columnSpacing: s} = r
      , o = {};
    if (n && s !== 0) {
        let p = (0,
        l.unstable_resolveBreakpointValues)({
            values: s,
            breakpoints: e.breakpoints.values
        }), i;
        typeof p == "object" && (i = D({
            breakpoints: e.breakpoints.values,
            values: p
        })),
        o = (0,
        l.handleBreakpoints)({
            theme: e
        }, p, (c,u)=>{
            var a;
            let t = e.spacing(c);
            return t !== "0px" ? {
                width: `calc(100% + ${g(t)})`,
                marginLeft: `-${g(t)}`,
                [`& > .${P.item}`]: {
                    paddingLeft: g(t)
                }
            } : (a = i) != null && a.includes(u) ? {} : {
                width: "100%",
                marginLeft: 0,
                [`& > .${P.item}`]: {
                    paddingLeft: 0
                }
            }
        }
        )
    }
    return o
}
function le(e, r, n={}) {
    if (!e || e <= 0)
        return [];
    if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
        return [n[`spacing-xs-${String(e)}`]];
    let s = [];
    return r.forEach(o=>{
        let p = e[o];
        Number(p) > 0 && s.push(n[`spacing-${o}-${String(p)}`])
    }
    ),
    s
}
var fe = V("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e,r)=>{
        let {ownerState: n} = e
          , {container: s, direction: o, item: p, spacing: i, wrap: c, zeroMinWidth: u, breakpoints: a} = n
          , t = [];
        s && (t = le(i, a, r));
        let f = [];
        return a.forEach(y=>{
            let d = n[y];
            d && f.push(r[`grid-${y}-${String(d)}`])
        }
        ),
        [r.root, s && r.container, p && r.item, u && r.zeroMinWidth, ...t, o !== "row" && r[`direction-xs-${String(o)}`], c !== "wrap" && r[`wrap-xs-${String(c)}`], ...f]
    }
})(({ownerState: e})=>T({
    boxSizing: "border-box"
}, e.container && {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
}, e.item && {
    margin: 0
}, e.zeroMinWidth && {
    minWidth: 0
}, e.wrap !== "wrap" && {
    flexWrap: e.wrap
}), ae, ce, ue, ie);
function me(e, r) {
    if (!e || e <= 0)
        return [];
    if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
        return [`spacing-xs-${String(e)}`];
    let n = [];
    return r.forEach(s=>{
        let o = e[s];
        if (Number(o) > 0) {
            let p = `spacing-${s}-${String(o)}`;
            n.push(p)
        }
    }
    ),
    n
}
var ye = e=>{
    let {classes: r, container: n, direction: s, item: o, spacing: p, wrap: i, zeroMinWidth: c, breakpoints: u} = e
      , a = [];
    n && (a = me(p, u));
    let t = [];
    u.forEach(y=>{
        let d = e[y];
        d && t.push(`grid-${y}-${String(d)}`)
    }
    );
    let f = {
        root: ["root", n && "container", o && "item", c && "zeroMinWidth", ...a, s !== "row" && `direction-xs-${String(s)}`, i !== "wrap" && `wrap-xs-${String(i)}`, ...t]
    };
    return (0,
    q.unstable_composeClasses)(f, E, r)
}
  , de = w.forwardRef(function(r, n) {
    let s = z({
        props: r,
        name: "MuiGrid"
    })
      , {breakpoints: o} = j()
      , p = (0,
    l.unstable_extendSxProp)(s)
      , {className: i, columns: c, columnSpacing: u, component: a="div", container: t=!1, direction: f="row", item: y=!1, rowSpacing: d, spacing: v=0, wrap: K="wrap", zeroMinWidth: U=!1} = p
      , O = W(p, te)
      , I = d || v
      , L = u || v
      , F = w.useContext(h)
      , $ = t ? c || 12 : F
      , G = {}
      , k = T({}, O);
    o.keys.forEach(b=>{
        O[b] != null && (G[b] = O[b],
        delete k[b])
    }
    );
    let C = T({}, p, {
        columns: $,
        container: t,
        direction: f,
        item: y,
        rowSpacing: I,
        columnSpacing: L,
        wrap: K,
        zeroMinWidth: U,
        spacing: v
    }, G, {
        breakpoints: o.keys
    })
      , Z = ye(C);
    return (0,
    S.jsx)(h.Provider, {
        value: $,
        children: (0,
        S.jsx)(fe, T({
            ownerState: C,
            className: (0,
            R.default)(Z.root, i),
            as: a,
            ref: n
        }, k))
    })
})
  , Te = de;
export {Te as a};
