import {a as u} from "./chunks/RT6UAELS.js";
import {a as s} from "./chunks/M4JCZULX.js";
import {a as N} from "./chunks/YQRNDXQO.js";
import "./chunks/FMCNH4BF.js";
import "./chunks/SUT4BSCK.js";
import {a as d, b as P, e as c, g as M} from "./chunks/B5YK3YMW.js";
import {D as l, a as v, c as a, m as h, t as r} from "./chunks/Q6TZRKPZ.js";
import "./chunks/3JX3VARJ.js";
import {f as p} from "./chunks/PQ35KENF.js";
P();
M();
var o = p(v())
  , A = p(N());
var S = String(h).toLowerCase().replace(/_/g, "-");
function R() {
    import("./chunks/JLIAOCAL.js").then(C=>{
        let {default: E} = C
          , f = "customElements"in window
          , e = document.createElement(f ? "max-ai-minimum-app" : "div");
        e.id = r,
        e.setAttribute("data-version", l),
        document.body.appendChild(e);
        let m = e.attachShadow({
            mode: "open"
        })
          , n = document.createElement("style")
          , t = document.createElement("div");
        m.appendChild(n),
        m.appendChild(t);
        let I = d({
            key: `${S}-emotion-cache`,
            prepend: !0,
            container: n
        })
          , i = (0,
        A.createRoot)(t);
        u.addProtectedRoot({
            rootId: r,
            reactRoot: i,
            renderFn: R
        }),
        i.render(o.default.createElement(o.default.StrictMode, null, o.default.createElement(a, null, o.default.createElement(c, {
            value: I
        }, o.default.createElement(s, {
            shadowRootElement: t
        }, o.default.createElement(E, null))))))
    }
    )
}
R();
