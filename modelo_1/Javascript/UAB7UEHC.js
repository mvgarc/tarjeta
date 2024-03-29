var K = w=>{
    w.createModule("Position", ["WrappedSelection"], function(a, p) {
        let h = "number"
          , x = "undefined"
          , D = a.WrappedRange
          , E = a.WrappedTextRange
          , g = a.dom
          , R = a.util
          , m = g.DomPosition;
        function M(t) {
            let e = 0
              , o = 0;
            if (typeof t.pageXOffset == h && typeof t.pageYOffset == h)
                e = t.pageXOffset,
                o = t.pageYOffset;
            else {
                let n = t.document
                  , s = n.documentElement
                  , i = n.compatMode
                  , r = typeof i == "string" && i.indexOf("CSS") >= 0 && s ? s : g.getBody(n);
                if (r && typeof r.scrollLeft == h && typeof r.scrollTop == h)
                    try {
                        e = r.scrollLeft,
                        o = r.scrollTop
                    } catch {}
            }
            return {
                x: e,
                y: o
            }
        }
        function b(t, e) {
            for (e = e.toLowerCase(); t; ) {
                if (t.nodeType == 1 && t.tagName.toLowerCase() == e)
                    return t;
                t = t.parentNode
            }
            return null
        }
        function S(t, e, o, n) {
            this.top = t,
            this.right = e,
            this.bottom = o,
            this.left = n,
            this.width = e - n,
            this.height = o - t
        }
        function O(t, e, o) {
            return new S(t.top + o,t.right + e,t.bottom + o,t.left + e)
        }
        function C(t, e) {
            let o = 0
              , n = 0
              , s = e.documentElement
              , i = g.getBody(e)
              , r = s.clientWidth === 0 && typeof i.clientTop == h ? i : s
              , c = r.clientLeft
              , l = r.clientTop;
            return c && (o = -c),
            l && (n = -l),
            O(t, o, n)
        }
        function N(t) {
            let e = []
              , o = []
              , n = []
              , s = [];
            for (let i = 0, r = t.length, c; i < r; ++i)
                c = t[i],
                c && (e.push(c.top),
                o.push(c.bottom),
                n.push(c.left),
                s.push(c.right));
            return new S(Math.min.apply(Math, e),Math.max.apply(Math, s),Math.max.apply(Math, o),Math.min.apply(Math, n))
        }
        function U(t, e, o) {
            let n = g.getBody(t).createTextRange();
            n.moveToPoint(e, o);
            let s = new a.WrappedTextRange(n);
            return new m(s.startContainer,s.startOffset)
        }
        function _(t, e, o) {
            let n = t.caretPositionFromPoint(e, o);
            return new m(n.offsetNode,n.offset)
        }
        function j(t, e, o) {
            let n = t.caretRangeFromPoint(e, o);
            return new m(n.startContainer,n.startOffset)
        }
        function G(t) {
            let e = (t.nativeRange || t).getClientRects();
            return e.length > 0 ? e[e.length - 1] : null
        }
        function A(t, e, o) {
            return e < o.bottom && t >= o.left && t <= o.right
        }
        function z(t, e, o, n) {
            let s = t.elementFromPoint(e, o)
              , i = a.createRange(t);
            i.selectNodeContents(s),
            i.collapse(!0);
            let r = s.firstChild, c, l, f;
            if (!r)
                r = s.parentNode,
                c = g.getNodeIndex(s),
                n || ++c;
            else {
                t: for (; r; ) {
                    if (r.nodeType == 3) {
                        for (c = 0,
                        f = r.length; c <= f; ++c)
                            if (i.setEnd(r, c),
                            l = G(i),
                            l && A(e, o, l)) {
                                l.right - e > e - l.left && --c;
                                break t
                            }
                    } else if (i.setEndAfter(r),
                    l = G(i),
                    l && A(e, o, l)) {
                        c = g.getNodeIndex(r),
                        r = s.parentNode,
                        n || ++c;
                        break
                    }
                    r = r.nextSibling
                }
                r || (r = s,
                c = s.childNodes.length)
            }
            return new m(r,c)
        }
        function W(t) {
            if (a.features.implementsTextRange)
                return U;
            if (typeof t.caretPositionFromPoint != x)
                return _;
            if (typeof t.caretRangeFromPoint != x)
                return j;
            if (typeof t.elementFromPoint != x && T)
                return z;
            throw p.createError("createCaretPositionFromPointGetter(): Browser does not provide a recognised method to create a selection from pixel coordinates")
        }
        function L(t, e, o, n, s) {
            s = g.getContentDocument(s, p, "createRangeFromPoints");
            let i = W(s)
              , r = i(s, t, e, !1)
              , c = i(s, o, n, !0)
              , l = a.createRange(s);
            return l.setStartAndEnd(r.node, r.offset, c.node, c.offset),
            l
        }
        function $(t, e, o, n, s) {
            let i, r, c, l;
            n < e || e == n && o < t ? (i = o,
            r = n,
            c = t,
            l = e) : (i = t,
            r = e,
            c = o,
            l = n);
            let u = w.getSelection(s)
              , d = L(i, r, c, l, s);
            return u.setSingleRange(d),
            u
        }
        let I = document.createElement("span")
          , P = R.isHostMethod(I, "getBoundingClientRect");
        I = null;
        let T = !1
          , F = !1;
        if (a.features.implementsDomRange) {
            let t = a.createNativeRange();
            T = R.isHostMethod(t, "getClientRects"),
            F = R.isHostMethod(t, "getBoundingClientRect")
        }
        R.extend(a.features, {
            rangeSupportsGetBoundingClientRect: F,
            rangeSupportsGetClientRects: T,
            elementSupportsGetBoundingClientRect: P
        });
        let v = function(t) {
            return function() {
                let e = this.cloneRange();
                e.collapse(t);
                let o = e.getBoundingClientRect();
                return {
                    x: o[t ? "left" : "right"],
                    y: o[t ? "top" : "bottom"]
                }
            }
        }
          , y = a.rangePrototype;
        if (a.features.implementsTextRange && P)
            y.getBoundingClientRect = function() {
                let t = E.rangeToTextRange(this)
                  , e = this.getNodes([1], function(s) {
                    return /^t[dh]$/i.test(s.tagName)
                })
                  , o = null
                  , n = [];
                if (e.length > 0) {
                    let s = b(this.startContainer, "table");
                    for (let r = 0, c, l, f, u, d; c = e[r]; ++r)
                        f = b(c, "table"),
                        (!s || f != s) && (u = this.cloneRange(),
                        s && u.setStartAfter(s),
                        u.setEndBefore(f),
                        n.push(E.rangeToTextRange(u).getBoundingClientRect())),
                        this.containsNode(c) ? n.push(c.getBoundingClientRect()) : (l = t.duplicate(),
                        l.moveToElementText(c),
                        l.compareEndPoints("StartToStart", t) == -1 ? l.setEndPoint("StartToStart", t) : l.compareEndPoints("EndToEnd", t) == 1 && l.setEndPoint("EndToEnd", t),
                        n.push(l.getBoundingClientRect())),
                        s = f;
                    !b(this.endContainer, "table") && s && (subRange = this.cloneRange(),
                    subRange.setStartAfter(s),
                    n.push(E.rangeToTextRange(subRange).getBoundingClientRect())),
                    o = N(n)
                } else
                    o = t.getBoundingClientRect();
                return C(o, g.getDocument(this.startContainer))
            }
            ;
        else if (a.features.implementsDomRange) {
            let t = function(e) {
                return e instanceof D ? e : new D(e)
            };
            if (F) {
                if (y.getBoundingClientRect = function() {
                    let e = t(this).nativeRange
                      , o = e.getBoundingClientRect() || e.getClientRects()[0];
                    return C(o, g.getDocument(this.startContainer))
                }
                ,
                T) {
                    let e = function(o, n) {
                        let s = o.childNodes
                    };
                    v = function(o) {
                        return function() {
                            let n, i = t(this).nativeRange.getClientRects();
                            if (i.length == 0 && P && this.collapsed && this.startContainer.nodeType == 1 && this.startOffset < this.startContainer.childNodes.length && this.startContainer.childNodes[this.startOffset].getClientRects,
                            i.length > 0)
                                return o ? (n = i[0],
                                {
                                    x: n.left,
                                    y: n.top
                                }) : (n = i[i.length - 1],
                                {
                                    x: n.right,
                                    y: n.bottom
                                });
                            throw p.createError("Cannot get position for range " + this.inspect())
                        }
                    }
                }
            } else {
                let e = P ? function(n) {
                    return C(n.getBoundingClientRect(), g.getDocument(n))
                }
                : function(n) {
                    let s = 0
                      , i = 0
                      , r = n
                      , c = n.offsetWidth
                      , l = n.offsetHeight;
                    for (; r; )
                        s += r.offsetLeft,
                        i += r.offsetTop,
                        r = r.offsetParent;
                    return C(new S(i,s + c,i + l,s), g.getDocument(n))
                }
                  , o = function(n) {
                    let s;
                    n.splitBoundaries();
                    let i = document.createElement("span");
                    if (n.collapsed)
                        n.insertNode(i),
                        s = e(i),
                        i.parentNode.removeChild(i);
                    else {
                        let r = n.cloneRange();
                        r.collapse(!0),
                        r.insertNode(i);
                        let c = e(i);
                        i.parentNode.removeChild(i),
                        r.collapseToPoint(n.endContainer, n.endOffset),
                        r.insertNode(i);
                        let l = e(i);
                        i.parentNode.removeChild(i);
                        let f = [c, l]
                          , u = n.getNodes([1], function(d) {
                            return n.containsNode(d)
                        });
                        for (let d = 0, J = u.length; d < J; ++d)
                            f.push(e(u[d]));
                        s = N(f)
                    }
                    return n.normalizeBoundaries(),
                    s
                };
                y.getBoundingClientRect = function(n) {
                    return o(t(n))
                }
            }
        }
        let k = t=>function() {
            let e = this["get" + (t ? "Start" : "End") + "ClientPos"]()
              , o = M(g.getWindow(this.startContainer));
            return {
                x: e.x + o.x,
                y: e.y + o.y
            }
        }
        ;
        R.extend(y, {
            getBoundingDocumentRect: function() {
                let t = M(g.getWindow(this.startContainer));
                return O(this.getBoundingClientRect(), t.x, t.y)
            },
            getStartClientPos: v(!0),
            getEndClientPos: v(!1),
            getStartDocumentPos: k(!0),
            getEndDocumentPos: k(!1)
        });
        function q(t, e) {
            return t.compareBoundaryPoints(e.START_TO_START, e)
        }
        function H(t) {
            return function() {
                let e = "getBounding" + (t ? "Document" : "Client") + "Rect"
                  , o = [];
                for (let n = 0, s = null, i; n < this.rangeCount; ++n)
                    o.push(this.getRangeAt(n)[e]());
                return N(o)
            }
        }
        function B(t, e) {
            return function() {
                if (this.rangeCount == 0)
                    return null;
                let o = e ? "Document" : "Client"
                  , n = this.getAllRanges();
                return n.length > 1 && n.sort(q),
                t ? n[0]["getStart" + o + "Pos"]() : n[n.length - 1]["getEnd" + o + "Pos"]()
            }
        }
        R.extend(a.selectionPrototype, {
            getBoundingClientRect: H(!1),
            getBoundingDocumentRect: H(!0),
            getStartClientPos: B(!0, !1),
            getEndClientPos: B(!1, !1),
            getStartDocumentPos: B(!0, !0),
            getEndDocumentPos: B(!1, !0)
        }),
        a.positionFromPoint = function(t, e, o) {
            return o = g.getContentDocument(o, p, "positionFromPoint"),
            W(o)(o, t, e)
        }
        ,
        a.createRangeFromPoints = L,
        a.moveSelectionToPoints = $
    })
}
  , Q = K;
export {Q as a};
