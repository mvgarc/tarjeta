import {Ha as d} from "./OKMCQT75.js";
import {c as g} from "./TSKJWQGO.js";
import {a as p, f as u, k as c} from "./Q6TZRKPZ.js";
import {a as l} from "./3JX3VARJ.js";
import {f} from "./PQ35KENF.js";
var t = f(p());
var i = f(l());
var a = new d("i18n")
  , m = ()=>{
    let {userSettings: o} = u(c)
      , {i18n: e} = g();
    (0,
    t.useEffect)(()=>{
        let r = o?.preferredLanguage || e.language;
        e?.hasResourceBundle?.(r, "name") || fetch(i.default.runtime.getURL(`i18n/locales/${r}/index.json`)).then(n=>n.json()).then(n=>{
            Object.keys(n).forEach(s=>{
                e.addResourceBundle(r, s, n[s], !0, !0)
            }
            ),
            a.info("load i18n resources success", r)
        }
        ).catch(n=>{
            a.error("load i18n resources error", n)
        }
        )
    }
    , [e, o?.preferredLanguage])
}
  , x = (o,e)=>new Promise(r=>{
    o?.language && !o?.hasResourceBundle?.(e, "name") ? fetch(i.default.runtime.getURL(`i18n/locales/${e}/index.json`)).then(n=>n.json()).then(n=>{
        Object.keys(n).forEach(s=>{
            o.addResourceBundle(e, s, n[s], !0, !0)
        }
        ),
        a.info("load i18n resources success", e),
        r(!0)
    }
    ).catch(n=>{
        a.error("load i18n resources error", n),
        r(!1)
    }
    ) : r(!0)
}
)
  , j = ()=>{
    let {i18n: o} = g()
      , {userSettings: e} = u(c);
    m(),
    (0,
    t.useEffect)(()=>{
        e?.preferredLanguage && o.changeLanguage(e?.preferredLanguage, r=>{
            r && a.error("change language error", r)
        }
        )
    }
    , [e?.preferredLanguage]),
    (0,
    t.useEffect)(()=>{
        e?.preferredLanguage && o.changeLanguage(e?.preferredLanguage, r=>{
            r && a.error("change language error", r)
        }
        )
    }
    , [e])
}
;
export {x as a, j as b};
