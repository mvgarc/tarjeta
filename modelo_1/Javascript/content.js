import {b as g, d as _} from "./chunks/IR37EEUS.js";
import {a as b} from "./chunks/RT6UAELS.js";
import {a as I} from "./chunks/M4JCZULX.js";
import {a as z} from "./chunks/YQRNDXQO.js";
import "./chunks/FMCNH4BF.js";
import {a as E} from "./chunks/IIL46OSS.js";
import "./chunks/SUT4BSCK.js";
import {a as A, b as k, e as C, g as U} from "./chunks/B5YK3YMW.js";
import {d as l, e as u} from "./chunks/DWH3I5CV.js";
import {D as x, a as L, c as v, m as P, o as p, p as R, q as S, u as M} from "./chunks/Q6TZRKPZ.js";
import {a as X} from "./chunks/3JX3VARJ.js";
import {f as s} from "./chunks/PQ35KENF.js";
k();
U();
var e = s(L())
  , h = s(z());
var c = s(X());
var w = String(P).toLowerCase().replace(/_/g, "-");
E.unstable_ClassNameGenerator.configure(o=>`${w}--${o}`);
var D = "customElements"in window;
if (location.host === "chat.openai.com") {
    let o = document.createElement("script");
    o.type = "module",
    o.src = c.default.runtime.getURL("/pages/chatgpt/fileUploadServer.js"),
    (document.head || document.documentElement).append(o),
    import("./chunks/6RLZSFVD.js").then(d=>{
        let {default: a} = d
          , n = document.createElement("div");
        n.id = S,
        document.body.appendChild(n);
        let i = (0,
        h.createRoot)(n)
          , r = document.createElement("style");
        r.innerHTML = `#__next.ezmail-ai-running > div > div {
  padding-top: 40px;
}
.ezmail-ai-setting-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 2s linear infinite;
}
#__next.use-chat-gpt-ai-running > div > div {
  padding-top: 40px;
}
.use-chat-gpt-ai-setting-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(1turn);
  }
}
a.chatgpt-ad {
  display: none;
}
`,
        document.head.appendChild(r),
        i.render(e.default.createElement(e.default.StrictMode, null, e.default.createElement(a, null)))
    }
    )
}
function N() {
    let o = e.default.lazy(()=>import("./chunks/CKVZC3S3.js"))
      , d = e.default.lazy(()=>import("./chunks/FNEP7OWT.js"))
      , a = document.createElement("link");
    a.rel = "stylesheet",
    a.href = c.default.runtime.getURL("content.css"),
    document.head.appendChild(a);
    let n = document.createElement(D ? "use-chat-gpt-ai-content-menu" : "div");
    n.id = M,
    (l() === "youtube.com" || l() === "studio.youtube.com") && (n.contentEditable = "true"),
    document.body.appendChild(n);
    let i = document.createElement(D ? "use-chat-gpt-ai" : "div");
    i.id = p,
    i.style.display = "none",
    i.setAttribute("data-version", x),
    document.body.appendChild(i);
    let r = i.attachShadow({
        mode: "open"
    })
      , f = document.createElement("style")
      , t = document.createElement("div");
    t.id = R,
    t.style.display = "flex",
    t.style.flexDirection = "column",
    t.style.flex = "1",
    t.style.height = "100vh",
    u() && t.setAttribute("data-maxai-newtab", "true"),
    r.appendChild(f),
    r.appendChild(t);
    let m = document.createElement("link");
    m.rel = "stylesheet",
    m.href = c.default.runtime.getURL("content_style.css"),
    r.appendChild(m);
    let T = A({
        key: `${w}-emotion-cache`,
        prepend: !0,
        container: f
    })
      , O = new g
      , y = (0,
    h.createRoot)(t);
    b.addProtectedRoot({
        rootId: p,
        reactRoot: y,
        renderFn: N
    }),
    y.render(e.default.createElement(e.default.StrictMode, null, e.default.createElement(v, null, e.default.createElement(_, {
        client: O
    }, e.default.createElement(C, {
        value: T
    }, e.default.createElement(I, {
        shadowRootElement: t
    }, u() ? e.default.createElement(d, null) : e.default.createElement(o, null)))))))
}
N();
