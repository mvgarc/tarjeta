import {a as xe} from "./G6LCACX7.js";
import {j as Pe} from "./PAF4YU3F.js";
import {a as be} from "./OBRG2XHR.js";
import {a as Le} from "./ZGSU7SL6.js";
import {a as Ge} from "./YQRNDXQO.js";
import {a as oe} from "./FMCNH4BF.js";
import {a as Re, c as Me, d as H, g as ve} from "./E4LACLO2.js";
import {L as q, N as Q, R as Ie, S as Ee, T as z, V as j, Z as _e, _ as Te, da as ye, e as he, k as ge, w as Ae, x as M, z as D} from "./LJ7CGGK3.js";
import {j as de} from "./OIC7JTCT.js";
import {h as fe} from "./PXPB4JBM.js";
import {a as se} from "./2WSYMSYY.js";
import {a as ae} from "./ZQWRROIX.js";
import {a as X, b as qe, e as J, f as Z, g as He} from "./B5YK3YMW.js";
import {a as Ce, l as Se} from "./DAGKPUP3.js";
import {E as ce, F as pe, a as Be, c as W, ca as Y, d as V, da as ue, ja as me, l as k, q as ie, r as ne, u as le, yb as N} from "./OKMCQT75.js";
import {c as re} from "./TSKJWQGO.js";
import {a as F, c as ee, f as B, h as te} from "./Q6TZRKPZ.js";
import {f as v} from "./PQ35KENF.js";
var E = v(F());
var Oe = v(Be());
var We = `You are a research expert who is good at coming up with the perfect search query to help find answers to any question. Your task is to think of the most effective search query for the following question delimited by <question></question>:

<question>
{{current_question}}
</question>

The question is the final one in a series of previous questions and answers. Here are the earlier questions listed in the order they were asked, from the very first to the one before the final question, delimited by <previous_questions></previous_questions>:
<previous_questions>
{{previous_questions}}
</previous_questions>

For your reference, today's date is {{CURRENT_DATE}}.

Output 3 search queries as JSON Array format without additional number, context, explanation, or extra wording, site information, just 3 text search queries as JSON Array format.`
  , Ve = `You are a research expert who is good at coming up with the perfect search query to help find answers to any question. Your task is to think of the most effective search query for the following question delimited by <question></question>:

<question>
{{current_question}}
</question>

The question is the final one in a series of previous questions and answers. Here are the earlier questions listed in the order they were asked, from the very first to the one before the final question, delimited by <previous_questions></previous_questions>:
<previous_questions>
{{previous_questions}}
</previous_questions>

For your reference, today's date is {{CURRENT_DATE}}.

Output 1 search query as JSON Array format without additional number, context, explanation, or extra wording, site information, just 1 text search query as JSON Array format.`
  , Ye = ","
  , we = (e,t=!1)=>{
    let a = t ? We : Ve;
    a = a.replaceAll("{{CURRENT_DATE}}", (0,
    Oe.default)().format("YYYY-MM-DD HH:mm:ss"));
    let c = e[e.length - 1]
      , f = e.slice(0, -1);
    a = a.replaceAll("{{current_question}}", c);
    let n = "";
    return f.forEach((h,s)=>{
        n += `${s + 1}) ${h}${s < f.length - 1 ? `
` : ""}`
    }
    ),
    a = a.replaceAll("{{previous_questions}}", n),
    a
}
  , Qe = async e=>{
    let t = Ce;
    return t ? (t = t.replaceAll("{query}", e),
    t = t.replace("{web_results}", "{{PAGE_CONTENT}}"),
    t = t.replaceAll("{current_date}", "{{CURRENT_DATE}}"),
    t) : e
}
  , Ue = async(e,t,a)=>{
    let {searchEngine: c="google", maxResultsCount: f=6, copilot: n=!1} = (await N()).sidebarSettings?.search || {}
      , h = k()
      , s = e
      , u = ""
      , C = e.match(/\/site:(\S+)/);
    return C && (u = C[1],
    s = e.replace(C[0], "")),
    s = be(s, {
        trim: !0,
        noQuotes: !0,
        noCommand: !0
    }),
    {
        actions: [{
            type: "DATE",
            parameters: {
                DateActionMode: "Current Date",
                DateFormatStyle: "YYYY-MM-DD HH:mm:ss"
            }
        }, {
            type: "SET_VARIABLE",
            parameters: {
                VariableName: "CURRENT_DATE"
            }
        }, {
            type: "CHAT_MESSAGE",
            parameters: {
                ActionChatMessageOperationType: "add",
                ActionChatMessageConfig: {
                    type: "ai",
                    messageId: h,
                    text: "",
                    originalMessage: {
                        metadata: {
                            shareType: "search",
                            title: {
                                title: e
                            },
                            copilot: {
                                title: {
                                    title: n ? "Copilot" : "Quick search",
                                    titleIcon: n ? "Awesome" : "Bolt",
                                    titleIconSize: 24
                                },
                                steps: [{
                                    title: "Understanding question",
                                    status: "loading",
                                    icon: "CheckCircle"
                                }]
                            }
                        },
                        include_history: a
                    }
                }
            }
        }, {
            type: "SET_VARIABLE",
            parameters: {
                VariableName: "AI_RESPONSE_MESSAGE_ID"
            }
        }, {
            type: "SET_VARIABLE_MAP",
            parameters: {
                VariableMap: {
                    SELECTED_TEXT: s
                }
            }
        }, {
            type: "ASK_CHATGPT",
            parameters: {
                AskChatGPTWithHistory: a,
                template: we(a ? t.concat(s) : [s], n),
                AskChatGPTActionType: "ASK_CHAT_GPT_HIDDEN",
                AskChatGPTActionMeta: {
                    temperature: 0,
                    messageVisibleText: e,
                    contextMenu: {
                        id: "b481731b-19e3-4713-8f0b-81fd7b2d5169",
                        droppable: !1,
                        parent: "",
                        text: "[Search] smart query",
                        data: {
                            editable: !1,
                            type: "shortcuts",
                            actions: []
                        }
                    }
                }
            }
        }, {
            type: "TEXT_HANDLER",
            parameters: {
                ActionTextHandleParameters: {
                    trim: !0,
                    noQuotes: !0,
                    noCommand: !0,
                    matchSquareBracketContent: !0
                }
            }
        }, {
            type: "SET_VARIABLE",
            parameters: {
                VariableName: "SMART_SEARCH_QUERY"
            }
        }, {
            type: "CHAT_MESSAGE",
            parameters: {
                ActionChatMessageOperationType: "update",
                ActionChatMessageConfig: {
                    type: "ai",
                    messageId: "{{AI_RESPONSE_MESSAGE_ID}}",
                    text: "",
                    originalMessage: {
                        metadata: {
                            copilot: {
                                steps: [{
                                    title: "Understanding question",
                                    status: "complete",
                                    icon: "CheckCircle"
                                }, {
                                    title: "Searching web",
                                    status: "loading",
                                    icon: "Search"
                                }]
                            },
                            sources: {
                                status: "loading",
                                links: []
                            }
                        },
                        content: {
                            contentType: "text",
                            text: ""
                        }
                    }
                }
            }
        }, {
            type: "GET_CONTENTS_OF_SEARCH_ENGINE",
            parameters: {
                URLSearchEngine: c,
                URLSearchEngineParams: {
                    q: "{{SMART_SEARCH_QUERY}}",
                    region: "",
                    limit: `${f}`,
                    btf: "",
                    nojs: "1",
                    ei: "UTF-8",
                    csp: "1",
                    site: u,
                    splitWith: Ye
                }
            }
        }, {
            type: "SET_VARIABLE",
            parameters: {
                VariableName: "SEARCH_SOURCES"
            }
        }, {
            type: "CHAT_MESSAGE",
            parameters: {
                ActionChatMessageOperationType: "update",
                ActionChatMessageConfig: {
                    type: "ai",
                    messageId: "{{AI_RESPONSE_MESSAGE_ID}}",
                    text: "",
                    originalMessage: {
                        metadata: {
                            copilot: {
                                steps: [{
                                    title: "Understanding question",
                                    status: "complete",
                                    icon: "CheckCircle"
                                }, {
                                    title: "Searching web",
                                    status: "complete",
                                    icon: "Search",
                                    valueType: "tags",
                                    value: "{{SMART_SEARCH_QUERY}}"
                                }]
                            },
                            sources: {
                                status: "complete",
                                links: "{{SEARCH_SOURCES}}"
                            }
                        }
                    }
                }
            }
        }, {
            type: "RENDER_TEMPLATE",
            parameters: {
                template: "{{SEARCH_SOURCES}}"
            }
        }, {
            type: "WEBGPT_SEARCH_RESULTS_EXPAND",
            parameters: {
                SummarizeActionType: n ? "MAP_REDUCE" : "NO_SUMMARIZE",
                template: `You are a highly proficient researcher that can read and write properly and fluently, and can extract all important information from any text. You task is to extract and summarize the information related to the following question, delimited by <question></question>, from the following text, delimited by <text></text>.

---

Question:
<question>
{{SMART_QUERY}}
</question>

Text:
<text>
{{WEBPAGE_CONTENT}}
</text>

---

Output a concise summary that is at most {{NUMBER_OF_WORDS}} words.

Use the following format:
<summary>
The summary of the text
</summary>

---

If there's no information related to question, delimited by <question></question>, in the text, delimited by <text></text>, simply reply N/A.

The text is sourced from the main content of the webpage at {{WEBPAGE_URL}}.
`
            }
        }, {
            type: "SET_VARIABLE",
            parameters: {
                VariableName: "PAGE_CONTENT"
            }
        }, {
            type: "ASK_CHATGPT",
            parameters: {
                AskChatGPTWithHistory: a,
                AskChatGPTInsertMessageId: "{{AI_RESPONSE_MESSAGE_ID}}",
                AskChatGPTActionType: "ASK_CHAT_GPT_HIDDEN",
                AskChatGPTActionMeta: {
                    messageVisibleText: e,
                    searchSources: "{{SEARCH_SOURCES}}",
                    contextMenu: {
                        id: "73361add-2d6a-4bf3-b2a7-5097551653e7",
                        droppable: !1,
                        parent: "",
                        text: "[Search] answer",
                        data: {
                            editable: !1,
                            type: "shortcuts",
                            actions: []
                        }
                    }
                },
                template: await Qe(s)
            }
        }],
        messageId: h
    }
}
;
var ze = ()=>{
    let {currentSidebarConversationId: e, currentSidebarConversationType: t, currentSidebarConversationMessages: a, updateSidebarConversationType: c} = q()
      , f = te(D)
      , n = Ae()
      , {currentUserPlan: h} = Ie()
      , {setShortCuts: s, runShortCuts: u} = Pe("")
      , [C,y] = (0,
    E.useState)([])
      , {createConversation: o} = ye()
      , r = (0,
    E.useRef)(!1)
      , m = (0,
    E.useRef)("")
      , i = (0,
    E.useMemo)(()=>{
        let l = [];
        for (let p = a.length - 1; p >= 0; p--) {
            let d = a[p];
            if (l.unshift(d?.originalMessage?.metadata?.title?.title || d.text || ""),
            d.type === "ai" && d?.originalMessage?.include_history === !1)
                break
        }
        return l
    }
    , [a])
      , g = async(l,p)=>{
        if (!r.current) {
            j() || z(),
            t !== "Search" && await c("Search"),
            await Y("ON_BOARDING_RECORD_AI_PROVIDER_HAS_AUTH_USE_CHAT_GPT_PLUS", !0),
            f(d=>({
                ...d,
                loading: !0
            }));
            try {
                let d = await o("Search");
                if (f(S=>({
                    ...S,
                    loading: !1
                })),
                h.name !== "pro" && h.name !== "elite") {
                    let S = Number((await ue()).ON_BOARDING_RECORD_SEARCH_FREE_TRIAL_TIMES) || 0;
                    if (S > 0)
                        await Y("ON_BOARDING_RECORD_SEARCH_FREE_TRIAL_TIMES", S - 1);
                    else {
                        await M("add", d, 0, [Se(n.SIDEBAR_SEARCH_WITH_AI)]),
                        Ee("show", "SIDEBAR_SEARCH_WITH_AI");
                        return
                    }
                }
                let {messageId: T, actions: b} = await Ue(l, i, p);
                m.current = T,
                y(b)
            } catch {}
        }
    }
      , R = (0,
    E.useRef)(g);
    (0,
    E.useEffect)(()=>{
        R.current = g
    }
    , [g]);
    let U = async()=>(await N())?.sidebarSettings?.search?.conversationId || ""
      , L = async l=>{
        j() || z(),
        t !== "Search" && await c("Search");
        let p = await U();
        p && await Te(p) || (p = await o("Search")),
        await M("add", p, 0, [l])
    }
      , x = async()=>{
        try {
            if (e) {
                let l = null
                  , p = 0;
                for (let T = a.length - 1; T >= 0; T--) {
                    let b = a[T];
                    if (p++,
                    b.type === "ai") {
                        l = b;
                        break
                    }
                }
                let d = l?.originalMessage?.metadata?.title?.title || l?.text || "";
                d ? (await M("delete", e, p, []),
                setTimeout(async()=>{
                    await R.current(d, l?.originalMessage?.include_history || !1)
                }
                , 200)) : await M("delete", e, 9999, [])
            }
        } catch {}
    }
    ;
    return (0,
    E.useEffect)(()=>{
        C.length > 0 && !r.current && t === "Search" && e && (r.current = !0,
        s(C) ? u().then().catch().finally(async()=>{
            r.current = !1,
            y([]);
            let l = await U();
            l && m.current && M("update", l, 0, [{
                messageId: m.current,
                originalMessage: {
                    status: "complete",
                    metadata: {
                        sources: {
                            status: "complete"
                        },
                        isComplete: !0
                    }
                }
            }]).then().catch()
        }
        ) : (y([]),
        r.current = !1))
    }
    , [u, y, t, e, C]),
    {
        createSearchWithAI: g,
        regenerateSearchWithAI: x,
        continueInSearchWithAI: L
    }
}
  , Rt = ze;
var I = v(F());
var A = v(F());
var P = new le({
    runtime: "client"
})
  , je = ()=>{
    let[e,t] = (0,
    A.useState)([])
      , {currentAIProviderModelDetail: a, aiProvider: c} = _e()
      , {currentSidebarConversationMessages: f, currentSidebarConversationId: n} = q()
      , h = (0,
    A.useRef)(!1)
      , s = (0,
    A.useMemo)(()=>a?.uploadFileConfig, [a])
      , u = (0,
    A.useCallback)(async o=>{
        h.current = !0;
        let r = V(o).map(m=>(m.uploadStatus === "idle" && (m.uploadStatus = "uploading",
        m.uploadProgress = 20),
        m));
        switch (t(r),
        c) {
        case "OPENAI":
            await P.postMessage({
                event: "Client_chatUploadFiles",
                data: {
                    files: r
                }
            });
            break;
        case "BING":
            {
                let m = await Promise.all(o.map(async i=>{
                    if (i.file && H(i.file)) {
                        let g = await ve(i.file);
                        g && (i.base64Data = g)
                    }
                    return i
                }
                ));
                await P.postMessage({
                    event: "Client_chatUploadFiles",
                    data: {
                        files: m
                    }
                })
            }
            break;
        default:
            {
                let m = await Promise.all(o.map(async i=>{
                    let g = await Re(i.file)
                      , R = V(i);
                    return R.file = g,
                    R
                }
                ));
                await P.postMessage({
                    event: "Client_chatUploadFiles",
                    data: {
                        files: m
                    }
                })
            }
            break
        }
        setTimeout(()=>{
            h.current = !1
        }
        , 1e3)
    }
    , [s, c])
      , C = (0,
    A.useCallback)(async o=>{
        let r = await P.postMessage({
            event: "Client_chatRemoveFiles",
            data: {
                files: o
            }
        });
        return t(r.data || []),
        r.success
    }
    , [s])
      , y = (0,
    A.useMemo)(()=>{
        switch (c) {
        case "OPENAI":
            return "File uploading. Please send your message once upload completes.";
        default:
            return "File uploading. Please send your message once upload completes."
        }
        return ""
    }
    , [c]);
    return (0,
    A.useEffect)(()=>{
        let o = e.find(r=>r.uploadStatus === "error");
        if (o) {
            switch (c) {
            case "OPENAI":
                n && !Q(f, r=>r.messageId === o.id) && M("add", n, 0, [{
                    messageId: o.id,
                    text: o.uploadErrorMessage || `File ${o.fileName} upload error.`,
                    type: "system",
                    extra: {
                        status: o.uploadErrorMessage === "Your previous upload didn't go through as the Code Interpreter was initializing. It's now ready for your file. Please try uploading it again." ? "info" : "error"
                    }
                }]);
                break;
            default:
                n && !Q(f, r=>r.messageId === o.id) && M("add", n, 0, [{
                    messageId: o.id,
                    text: o.uploadErrorMessage || `File ${o.fileName} upload error.`,
                    type: "system",
                    extra: {
                        status: "error"
                    }
                }])
            }
            C([o])
        }
    }
    , [e, c]),
    ne(()=>{
        P.postMessage({
            event: "Client_chatGetFiles",
            data: {}
        }).then(o=>{
            h.current || W(o.data) && t(o.data)
        }
        )
    }
    ),
    ie(()=>{
        P.postMessage({
            event: "Client_chatGetFiles",
            data: {}
        }).then(o=>{
            W(o.data) && t(o.data)
        }
        )
    }
    ),
    me(async(o,r,m)=>{
        switch (o) {
        case "Client_listenUploadFilesChange":
            {
                let {files: i} = r;
                return t(i),
                {
                    success: !0,
                    data: {},
                    message: ""
                }
            }
        default:
            break
        }
    }
    ),
    {
        aiProviderUploadingTooltip: y,
        AIProviderConfig: s,
        aiProviderUploadFiles: u,
        aiProviderRemoveFiles: C,
        files: e
    }
}
  , Fe = je;
var Ke = e=>{
    let {disabled: t=!1, TooltipProps: a, onUpload: c, onDone: f, ...n} = e
      , {t: h} = re(["common", "client"])
      , {files: s, AIProviderConfig: u, aiProviderUploadFiles: C, aiProviderRemoveFiles: y, aiProviderUploadingTooltip: o} = Fe()
      , r = B(he)
      , m = B(D)
      , i = (0,
    I.useRef)(null)
      , g = u?.maxCount || 1
      , R = u?.maxFileSize || 5 * 1024 * 1024
      , U = (0,
    I.useMemo)(()=>s.length >= (u?.maxCount || 1), [s])
      , L = async x=>{
        let l = s?.length || 0
          , p = g - l
          , d = x.target.files;
        if (!d || p === 0)
            return;
        let T = Array.from(d);
        if (T = T.slice(0, p),
        T.length === 0)
            return;
        let b = await Promise.all(T.map(async S=>{
            let De = H(S)
              , K = "file"
              , $ = "";
            De && (K = "image",
            $ = await Me(S) || "");
            let w = {
                id: k(),
                file: S,
                fileName: S.name,
                fileSize: S.size,
                fileType: S.type,
                base64Data: $,
                blobUrl: URL.createObjectURL(S),
                uploadStatus: "idle",
                uploadErrorMessage: "",
                uploadProgress: 0,
                icon: K
            };
            return R > 0 && w.fileSize > R && (w.uploadStatus = "error",
            w.uploadErrorMessage = `Upload failed: ${w.fileName} exceeds the ${(R / 1024 / 1024).toFixed(0)}MB limit. Please select a smaller file.`),
            w
        }
        ));
        await C(s.concat(b)),
        i.current && (i.current.value = "")
    }
    ;
    return !u || r.status !== "success" || m.loading ? I.default.createElement(I.default.Fragment, null) : I.default.createElement(xe, {
        files: s,
        loadingTooltipTitle: o,
        onRemove: async x=>{
            await y([x])
        }
        ,
        TooltipProps: a,
        ...n
    }, !U && I.default.createElement(fe, {
        placement: "top",
        title: u?.acceptTooltip ? u.acceptTooltip(h) : "Upload file",
        ...a
    }, I.default.createElement(ae, {
        disabled: t,
        sx: {
            minWidth: "unset",
            p: 0,
            my: "4px",
            color: "text.primary",
            "&:hover": {
                color: "primary.main"
            }
        },
        onClick: ()=>{
            i.current && i.current.click()
        }
    }, I.default.createElement(de, {
        icon: "AddCircle",
        sx: {
            color: "inherit"
        }
    }))), I.default.createElement("input", {
        multiple: g > 1,
        onChange: L,
        ref: i,
        accept: u?.accept || "",
        hidden: !0,
        style: {
            display: "none"
        },
        type: "file"
    }))
}
  , Zt = Ke;
qe();
He();
var ke = v(Le());
var _ = v(F())
  , Ne = v(Ge());
var $e = "MAXAI_SNACKBAR_ROOT", Xe = "MAXAI_SNACKBAR_CONTAINER", O, Je = ()=>(O = pe(),
null);
var Ze = ()=>{
    let {customTheme: e} = oe({
        colorSchema: "dark"
    });
    return _.default.createElement(Z, {
        theme: e
    }, _.default.createElement(ce, {
        maxSnack: 3,
        preventDuplicate: !0,
        hideIconVariant: !0,
        autoHideDuration: 3e3,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
        },
        action: t=>_.default.createElement(se, {
            onClick: ()=>{
                O && O.closeSnackbar && O.closeSnackbar(t)
            }
        }, _.default.createElement(ke.default, {
            fontSize: "inherit",
            sx: {
                color: "white"
            }
        }))
    }, _.default.createElement(Je, null)))
}
  , uo = ()=>{
    let {container: e, shadowRoot: t, emotionRoot: a} = ge({
        containerId: Xe,
        shadowRootId: $e,
        presetContainerElement(f) {
            f.style.color = "#fff"
        }
    });
    e.style.zIndex = "2147483647",
    document.body.appendChild(t);
    let c = X({
        key: "webchatgpt-snackbar-emotion-cache",
        prepend: !0,
        container: a
    });
    (0,
    Ne.createRoot)(e).render(_.default.createElement(_.default.StrictMode, null, _.default.createElement(ee, null, _.default.createElement(J, {
        value: c
    }, _.default.createElement(Ze, null)))))
}
  , G = (e,t={})=>{
    O.enqueueSnackbar(e, t)
}
  , et = (e,t={})=>{
    G(e, {
        ...t,
        variant: "success"
    })
}
  , tt = (e,t={})=>{
    G(e, {
        ...t,
        variant: "warning"
    })
}
  , ot = (e,t={})=>{
    G(e, {
        ...t,
        variant: "info"
    })
}
  , at = (e,t={})=>{
    G(e, {
        ...t,
        variant: "error"
    })
}
  , st = {
    success: et,
    warning: tt,
    info: ot,
    error: at
}
  , mo = st;
export {Zt as a, Rt as b, uo as c, mo as d};
