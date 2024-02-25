import {b as c} from "./2WSYMSYY.js";
import {i as N} from "./V56SQG4X.js";
import {c as t, d as g, j as U, m as _, o as n, p as j, t as l, w as m} from "./B5YK3YMW.js";
import {a as w} from "./TSKJWQGO.js";
import {a as v} from "./Q6TZRKPZ.js";
import {f as o} from "./PQ35KENF.js";
g();
var y = o(v());
var C = o(w());
var T = o(N());
var d = o(U())
  , f = o(j());
function u(r) {
    return (0,
    f.default)("MuiCard", r)
}
var D = (0,
d.unstable_generateUtilityClasses)("MuiCard", ["root"]);
var P = o(_())
  , R = ["className", "raised"]
  , M = r=>{
    let {classes: e} = r;
    return (0,
    T.unstable_composeClasses)({
        root: ["root"]
    }, u, e)
}
  , O = m(c, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (r,e)=>e.root
})(()=>({
    overflow: "hidden"
}))
  , E = y.forwardRef(function(e, p) {
    let s = l({
        props: e,
        name: "MuiCard"
    })
      , {className: x, raised: a=!1} = s
      , b = n(s, R)
      , i = t({}, s, {
        raised: a
    })
      , h = M(i);
    return (0,
    P.jsx)(O, t({
        className: (0,
        C.default)(h.root, x),
        elevation: a ? 8 : void 0,
        ref: p,
        ownerState: i
    }, b))
})
  , S = E;
export {S as a};
