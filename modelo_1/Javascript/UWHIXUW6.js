import {c as d, ka as a} from "./OKMCQT75.js";
import {a as K} from "./Q6TZRKPZ.js";
import {f as C} from "./PQ35KENF.js";
var e = C(K());
var w = ()=>{
    let[f,m] = (0,
    e.useState)(!1)
      , [c,h] = (0,
    e.useState)(void 0)
      , [l,g] = (0,
    e.useState)(void 0)
      , [y,r] = (0,
    e.useState)([]);
    return (0,
    e.useEffect)(()=>{
        let o = !1
          , s = async()=>{
            if (o)
                return;
            let t = await a(), u, i;
            d(t) && t.length > 0 ? (t.forEach(n=>{
                n.name === "_execute_action" ? u = n.shortcut : n.name === "show-floating-menu" && (i = n.shortcut)
            }
            ),
            r(t)) : r([]),
            h(u),
            g(i)
        }
        ;
        return window.addEventListener("focus", s),
        s().then(()=>{
            o || m(!0)
        }
        ),
        ()=>{
            o = !0,
            window.removeEventListener("focus", s)
        }
    }
    , []),
    {
        loaded: f,
        chatBoxShortCutKey: c,
        floatingMenuShortCutKey: l,
        commands: y
    }
}
  , x = w;
export {x as a};
