import {i as oo, o as k, p as n} from "./V56SQG4X.js";
import {c as i, d as X, j as R, m as h, n as Y, o as B, p as Z, t as O, u as E, w as f} from "./B5YK3YMW.js";
import {a as w} from "./TSKJWQGO.js";
import {a as $} from "./Q6TZRKPZ.js";
import {f as s} from "./PQ35KENF.js";
X();
var y = s($());
var g = s(w())
  , V = s(R())
  , L = s(oo())
  , d = s(Y());
var N = s(R())
  , W = s(Z());
function _(o) {
    return (0,
    W.default)("MuiButton", o)
}
var ro = (0,
N.unstable_generateUtilityClasses)("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"])
  , c = ro;
var M = s($())
  , ao = M.createContext({})
  , S = ao;
var m = s(h())
  , j = s(h())
  , io = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]
  , no = o=>{
    let {color: r, disableElevation: a, fullWidth: t, size: l, variant: e, classes: u} = o
      , x = {
        root: ["root", e, `${e}${n(r)}`, `size${n(l)}`, `${e}Size${n(l)}`, r === "inherit" && "colorInherit", a && "disableElevation", t && "fullWidth"],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${n(l)}`],
        endIcon: ["endIcon", `iconSize${n(l)}`]
    }
      , v = (0,
    L.unstable_composeClasses)(x, _, u);
    return i({}, u, v)
}
  , U = o=>i({}, o.size === "small" && {
    "& > *:nth-of-type(1)": {
        fontSize: 18
    }
}, o.size === "medium" && {
    "& > *:nth-of-type(1)": {
        fontSize: 20
    }
}, o.size === "large" && {
    "& > *:nth-of-type(1)": {
        fontSize: 22
    }
})
  , so = f(k, {
    shouldForwardProp: o=>E(o) || o === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (o,r)=>{
        let {ownerState: a} = o;
        return [r.root, r[a.variant], r[`${a.variant}${n(a.color)}`], r[`size${n(a.size)}`], r[`${a.variant}Size${n(a.size)}`], a.color === "inherit" && r.colorInherit, a.disableElevation && r.disableElevation, a.fullWidth && r.fullWidth]
    }
})(({theme: o, ownerState: r})=>{
    var a, t;
    return i({}, o.typography.button, {
        minWidth: 64,
        padding: "6px 16px",
        borderRadius: (o.vars || o).shape.borderRadius,
        transition: o.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
            duration: o.transitions.duration.short
        }),
        "&:hover": i({
            textDecoration: "none",
            backgroundColor: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : (0,
            d.alpha)(o.palette.text.primary, o.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }, r.variant === "text" && r.color !== "inherit" && {
            backgroundColor: o.vars ? `rgba(${o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : (0,
            d.alpha)(o.palette[r.color].main, o.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }, r.variant === "outlined" && r.color !== "inherit" && {
            border: `1px solid ${(o.vars || o).palette[r.color].main}`,
            backgroundColor: o.vars ? `rgba(${o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : (0,
            d.alpha)(o.palette[r.color].main, o.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }, r.variant === "contained" && {
            backgroundColor: (o.vars || o).palette.grey.A100,
            boxShadow: (o.vars || o).shadows[4],
            "@media (hover: none)": {
                boxShadow: (o.vars || o).shadows[2],
                backgroundColor: (o.vars || o).palette.grey[300]
            }
        }, r.variant === "contained" && r.color !== "inherit" && {
            backgroundColor: (o.vars || o).palette[r.color].dark,
            "@media (hover: none)": {
                backgroundColor: (o.vars || o).palette[r.color].main
            }
        }),
        "&:active": i({}, r.variant === "contained" && {
            boxShadow: (o.vars || o).shadows[8]
        }),
        [`&.${c.focusVisible}`]: i({}, r.variant === "contained" && {
            boxShadow: (o.vars || o).shadows[6]
        }),
        [`&.${c.disabled}`]: i({
            color: (o.vars || o).palette.action.disabled
        }, r.variant === "outlined" && {
            border: `1px solid ${(o.vars || o).palette.action.disabledBackground}`
        }, r.variant === "contained" && {
            color: (o.vars || o).palette.action.disabled,
            boxShadow: (o.vars || o).shadows[0],
            backgroundColor: (o.vars || o).palette.action.disabledBackground
        })
    }, r.variant === "text" && {
        padding: "6px 8px"
    }, r.variant === "text" && r.color !== "inherit" && {
        color: (o.vars || o).palette[r.color].main
    }, r.variant === "outlined" && {
        padding: "5px 15px",
        border: "1px solid currentColor"
    }, r.variant === "outlined" && r.color !== "inherit" && {
        color: (o.vars || o).palette[r.color].main,
        border: o.vars ? `1px solid rgba(${o.vars.palette[r.color].mainChannel} / 0.5)` : `1px solid ${(0,
        d.alpha)(o.palette[r.color].main, .5)}`
    }, r.variant === "contained" && {
        color: o.vars ? o.vars.palette.text.primary : (a = (t = o.palette).getContrastText) == null ? void 0 : a.call(t, o.palette.grey[300]),
        backgroundColor: (o.vars || o).palette.grey[300],
        boxShadow: (o.vars || o).shadows[2]
    }, r.variant === "contained" && r.color !== "inherit" && {
        color: (o.vars || o).palette[r.color].contrastText,
        backgroundColor: (o.vars || o).palette[r.color].main
    }, r.color === "inherit" && {
        color: "inherit",
        borderColor: "currentColor"
    }, r.size === "small" && r.variant === "text" && {
        padding: "4px 5px",
        fontSize: o.typography.pxToRem(13)
    }, r.size === "large" && r.variant === "text" && {
        padding: "8px 11px",
        fontSize: o.typography.pxToRem(15)
    }, r.size === "small" && r.variant === "outlined" && {
        padding: "3px 9px",
        fontSize: o.typography.pxToRem(13)
    }, r.size === "large" && r.variant === "outlined" && {
        padding: "7px 21px",
        fontSize: o.typography.pxToRem(15)
    }, r.size === "small" && r.variant === "contained" && {
        padding: "4px 10px",
        fontSize: o.typography.pxToRem(13)
    }, r.size === "large" && r.variant === "contained" && {
        padding: "8px 22px",
        fontSize: o.typography.pxToRem(15)
    }, r.fullWidth && {
        width: "100%"
    })
}
, ({ownerState: o})=>o.disableElevation && {
    boxShadow: "none",
    "&:hover": {
        boxShadow: "none"
    },
    [`&.${c.focusVisible}`]: {
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none"
    },
    [`&.${c.disabled}`]: {
        boxShadow: "none"
    }
})
  , to = f("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (o,r)=>{
        let {ownerState: a} = o;
        return [r.startIcon, r[`iconSize${n(a.size)}`]]
    }
})(({ownerState: o})=>i({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4
}, o.size === "small" && {
    marginLeft: -2
}, U(o)))
  , eo = f("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (o,r)=>{
        let {ownerState: a} = o;
        return [r.endIcon, r[`iconSize${n(a.size)}`]]
    }
})(({ownerState: o})=>i({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8
}, o.size === "small" && {
    marginRight: -2
}, U(o)))
  , lo = y.forwardRef(function(r, a) {
    let t = y.useContext(S)
      , l = (0,
    V.internal_resolveProps)(t, r)
      , e = O({
        props: l,
        name: "MuiButton"
    })
      , {children: u, color: x="primary", component: v="button", className: F, disabled: z=!1, disableElevation: G=!1, disableFocusRipple: T=!1, endIcon: P, focusVisibleClassName: D, fullWidth: A=!1, size: q="medium", startIcon: C, type: I, variant: H="text"} = e
      , J = B(e, io)
      , b = i({}, e, {
        color: x,
        component: v,
        disabled: z,
        disableElevation: G,
        disableFocusRipple: T,
        fullWidth: A,
        size: q,
        type: I,
        variant: H
    })
      , p = no(b)
      , K = C && (0,
    m.jsx)(to, {
        className: p.startIcon,
        ownerState: b,
        children: C
    })
      , Q = P && (0,
    m.jsx)(eo, {
        className: p.endIcon,
        ownerState: b,
        children: P
    });
    return (0,
    j.jsxs)(so, i({
        ownerState: b,
        className: (0,
        g.default)(t.className, p.root, F),
        component: v,
        disabled: z,
        focusRipple: !T,
        focusVisibleClassName: (0,
        g.default)(p.focusVisible, D),
        ref: a,
        type: I
    }, J, {
        classes: p,
        children: [K, u, Q]
    }))
})
  , po = lo;
export {po as a};
