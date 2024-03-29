import {a as x} from "./KABAR2T5.js";
import {a as A} from "./MRK6U32E.js";
import {i as D, j as W, o as z, r as g} from "./V56SQG4X.js";
import {c as i, d as F, j as E, m as j, n as se, o as C, p as w, t as I, u as G, w as L} from "./B5YK3YMW.js";
import {a as S} from "./TSKJWQGO.js";
import {a as M} from "./Q6TZRKPZ.js";
import {f as s} from "./PQ35KENF.js";
F();
var m = s(M());
var _ = s(S())
  , K = s(D())
  , P = s(se());
var q = s(E())
  , H = s(w());
function J(e) {
    return (0,
    H.default)("MuiListItemButton", e)
}
var re = (0,
q.unstable_generateUtilityClasses)("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"])
  , u = re;
var U = s(j())
  , ae = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"]
  , ie = (e,t)=>{
    let {ownerState: o} = e;
    return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters]
}
  , ne = e=>{
    let {alignItems: t, classes: o, dense: a, disabled: n, disableGutters: d, divider: p, selected: T} = e
      , l = (0,
    K.unstable_composeClasses)({
        root: ["root", a && "dense", !d && "gutters", p && "divider", n && "disabled", t === "flex-start" && "alignItemsFlexStart", T && "selected"]
    }, J, o);
    return i({}, o, l)
}
  , pe = L(z, {
    shouldForwardProp: e=>G(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: ie
})(({theme: e, ownerState: t})=>i({
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minWidth: 0,
    boxSizing: "border-box",
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 8,
    transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
    }),
    "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": {
            backgroundColor: "transparent"
        }
    },
    [`&.${u.selected}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0,
        P.alpha)(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${u.focusVisible}`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : (0,
            P.alpha)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
    },
    [`&.${u.selected}:hover`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : (0,
        P.alpha)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0,
            P.alpha)(e.palette.primary.main, e.palette.action.selectedOpacity)
        }
    },
    [`&.${u.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${u.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
    }
}, t.divider && {
    borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
    backgroundClip: "padding-box"
}, t.alignItems === "flex-start" && {
    alignItems: "flex-start"
}, !t.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
}, t.dense && {
    paddingTop: 4,
    paddingBottom: 4
}))
  , le = m.forwardRef(function(t, o) {
    let a = I({
        props: t,
        name: "MuiListItemButton"
    })
      , {alignItems: n="center", autoFocus: d=!1, component: p="div", children: T, dense: f=!1, disableGutters: l=!1, divider: B=!1, focusVisibleClassName: R, selected: N=!1, className: v} = a
      , r = C(a, ae)
      , c = m.useContext(x)
      , b = m.useMemo(()=>({
        dense: f || c.dense || !1,
        alignItems: n,
        disableGutters: l
    }), [n, c.dense, f, l])
      , y = m.useRef(null);
    A(()=>{
        d && y.current && y.current.focus()
    }
    , [d]);
    let V = i({}, a, {
        alignItems: n,
        dense: b.dense,
        disableGutters: l,
        divider: B,
        selected: N
    })
      , $ = ne(V)
      , oe = W(y, o);
    return (0,
    U.jsx)(x.Provider, {
        value: b,
        children: (0,
        U.jsx)(pe, i({
            ref: oe,
            href: r.href || r.to,
            component: (r.href || r.to) && p === "div" ? "a" : p,
            focusVisibleClassName: (0,
            _.default)($.focusVisible, R),
            ownerState: V,
            className: (0,
            _.default)($.root, v)
        }, r, {
            classes: $,
            children: T
        }))
    })
})
  , ce = le;
F();
var h = s(M());
var Z = s(S())
  , ee = s(D());
var Q = s(E())
  , X = s(w());
function Y(e) {
    return (0,
    X.default)("MuiListItemText", e)
}
var de = (0,
Q.unstable_generateUtilityClasses)("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"])
  , O = de;
var k = s(j())
  , te = s(j())
  , me = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]
  , ye = e=>{
    let {classes: t, inset: o, primary: a, secondary: n, dense: d} = e;
    return (0,
    ee.unstable_composeClasses)({
        root: ["root", o && "inset", d && "dense", a && n && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"]
    }, Y, t)
}
  , ue = L("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e,t)=>{
        let {ownerState: o} = e;
        return [{
            [`& .${O.primary}`]: t.primary
        }, {
            [`& .${O.secondary}`]: t.secondary
        }, t.root, o.inset && t.inset, o.primary && o.secondary && t.multiline, o.dense && t.dense]
    }
})(({ownerState: e})=>i({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
}, e.primary && e.secondary && {
    marginTop: 6,
    marginBottom: 6
}, e.inset && {
    paddingLeft: 56
}))
  , fe = h.forwardRef(function(t, o) {
    let a = I({
        props: t,
        name: "MuiListItemText"
    })
      , {children: n, className: d, disableTypography: p=!1, inset: T=!1, primary: f, primaryTypographyProps: l, secondary: B, secondaryTypographyProps: R} = a
      , N = C(a, me)
      , {dense: v} = h.useContext(x)
      , r = f ?? n
      , c = B
      , b = i({}, a, {
        disableTypography: p,
        inset: T,
        primary: !!r,
        secondary: !!c,
        dense: v
    })
      , y = ye(b);
    return r != null && r.type !== g && !p && (r = (0,
    k.jsx)(g, i({
        variant: v ? "body2" : "body1",
        className: y.primary,
        component: l != null && l.variant ? void 0 : "span",
        display: "block"
    }, l, {
        children: r
    }))),
    c != null && c.type !== g && !p && (c = (0,
    k.jsx)(g, i({
        variant: "body2",
        className: y.secondary,
        color: "text.secondary",
        display: "block"
    }, R, {
        children: c
    }))),
    (0,
    te.jsxs)(ue, i({
        className: (0,
        Z.default)(y.root, d),
        ownerState: b,
        ref: o
    }, N, {
        children: [r, c]
    }))
})
  , Te = fe;
export {u as a, ce as b, O as c, Te as d};
