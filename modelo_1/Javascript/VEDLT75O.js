import {a as l} from "./MRK6U32E.js";
import {n as M} from "./B5YK3YMW.js";
import {a as y} from "./Q6TZRKPZ.js";
import {f as p} from "./PQ35KENF.js";
var o = p(y())
  , f = p(M());
function v(e, c, t, r, u) {
    let a = typeof window < "u" && typeof window.matchMedia < "u"
      , [d,m] = o.useState(()=>u && a ? t(e).matches : r ? r(e).matches : c);
    return l(()=>{
        let s = !0;
        if (!a)
            return;
        let n = t(e)
          , i = ()=>{
            s && m(n.matches)
        }
        ;
        return i(),
        n.addListener(i),
        ()=>{
            s = !1,
            n.removeListener(i)
        }
    }
    , [e, t, a]),
    d
}
var h = o.useSyncExternalStore;
function S(e, c, t, r) {
    let u = o.useCallback(()=>c, [c])
      , a = o.useMemo(()=>{
        if (r !== null) {
            let {matches: n} = r(e);
            return ()=>n
        }
        return u
    }
    , [u, e, r])
      , [d,m] = o.useMemo(()=>{
        if (t === null)
            return [u, ()=>()=>{}
            ];
        let n = t(e);
        return [()=>n.matches, i=>(n.addListener(i),
        ()=>{
            n.removeListener(i)
        }
        )]
    }
    , [u, t, e]);
    return h(m, d, a)
}
function w(e, c={}) {
    let t = (0,
    f.useThemeWithoutDefault)()
      , r = typeof window < "u" && typeof window.matchMedia < "u"
      , {defaultMatches: u=!1, matchMedia: a=r ? window.matchMedia : null, ssrMatchMedia: d=null, noSsr: m} = (0,
    f.getThemeProps)({
        name: "MuiUseMediaQuery",
        props: c,
        theme: t
    })
      , s = typeof e == "function" ? e(t) : e;
    return s = s.replace(/^@media( ?)/m, ""),
    (h !== void 0 ? S : v)(s, u, a, d, m)
}
export {w as a};
