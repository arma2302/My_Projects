/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (a) {
  "use strict";
  function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function r() {
    return (
      we ||
      ("undefined" != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    );
  }
  var we,
    Me,
    Ae,
    De,
    Oe,
    Pe,
    Ee,
    Ye,
    Xe,
    t,
    ze,
    qe,
    Te,
    o = 1,
    ke = [];
  (a._scrollers = []), (a._proxies = []);
  function x(e, t) {
    return ~a._proxies.indexOf(e) && a._proxies[a._proxies.indexOf(e) + 1][t];
  }
  function y(e) {
    return !!~t.indexOf(e);
  }
  function z(e, t, n, r, o) {
    return e.addEventListener(t, n, { passive: !r, capture: !!o });
  }
  function A(e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  }
  function D() {
    return (ze && ze.isPressed) || a._scrollers.cache++;
  }
  function E(n, r) {
    function qa(e) {
      if (e || 0 === e) {
        o && (Ae.history.scrollRestoration = "manual");
        var t = ze && ze.isPressed;
        (e = qa.v = Math.round(e) || (ze && ze.iOS ? 1 : 0)),
          n(e),
          (qa.cacheID = a._scrollers.cache),
          t && i("ss", e);
      } else (r || a._scrollers.cache !== qa.cacheID || i("ref")) && ((qa.cacheID = a._scrollers.cache), (qa.v = n()));
      return qa.v + qa.offset;
    }
    return (qa.offset = 0), n && qa;
  }
  function H(e) {
    return (
      we.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function I(t, e) {
    var n = e.s,
      r = e.sc;
    y(t) && (t = De.scrollingElement || Oe);
    var o = a._scrollers.indexOf(t),
      i = r === Le.sc ? 1 : 2;
    ~o || (o = a._scrollers.push(t) - 1),
      a._scrollers[o + i] || t.addEventListener("scroll", D);
    var c = a._scrollers[o + i],
      s =
        c ||
        (a._scrollers[o + i] =
          E(x(t, n), !0) ||
          (y(t)
            ? r
            : E(function (e) {
                return arguments.length ? (t[n] = e) : t[n];
              })));
    return (
      (s.target = t),
      c || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function J(e, t, o) {
    function Oa(e, t) {
      var n = Ce();
      t || r < n - s
        ? ((c = i), (i = e), (a = s), (s = n))
        : o
        ? (i += e)
        : (i = c + ((e - c) / (n - a)) * (s - a));
    }
    var i = e,
      c = e,
      s = Ce(),
      a = s,
      r = t || 50,
      l = Math.max(500, 3 * r);
    return {
      update: Oa,
      reset: function reset() {
        (c = i = o ? 0 : i), (a = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = a,
          n = c,
          r = Ce();
        return (
          (!e && 0 !== e) || e === i || Oa(e),
          s === a || l < r - a
            ? 0
            : ((i + (o ? n : -n)) / ((o ? r : s) - t)) * 1e3
        );
      },
    };
  }
  function K(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function L(e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  }
  function M() {
    (Xe = we.core.globals().ScrollTrigger) &&
      Xe.core &&
      (function _integrate() {
        var e = Xe.core,
          n = e.bridge || {},
          t = e._scrollers,
          r = e._proxies;
        t.push.apply(t, a._scrollers),
          r.push.apply(r, a._proxies),
          (a._scrollers = t),
          (a._proxies = r),
          (i = function _bridge(e, t) {
            return n[e](t);
          });
      })();
  }
  function N(e) {
    return (
      (we = e || r()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Ae = window),
        (Oe = (De = document).documentElement),
        (Pe = De.body),
        (t = [Ae, De, Oe, Pe]),
        we.utils.clamp,
        (Te = we.core.context || function () {}),
        (Ye = "onpointerenter" in Pe ? "pointer" : "mouse"),
        (Ee = s.isTouch =
          Ae.matchMedia &&
          Ae.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ae ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (qe = s.eventTypes =
          (
            "ontouchstart" in Oe
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Oe
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        M(),
        (Me = 1)),
      Me
    );
  }
  var Ce = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    c = "scrollTop",
    Se = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: E(function (e) {
        return arguments.length
          ? Ae.scrollTo(e, Le.sc())
          : Ae.pageXOffset || De[n] || Oe[n] || Pe[n] || 0;
      }),
    },
    Le = {
      s: c,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Se,
      sc: E(function (e) {
        return arguments.length
          ? Ae.scrollTo(Se.sc(), e)
          : Ae.pageYOffset || De[c] || Oe[c] || Pe[c] || 0;
      }),
    };
  (Se.op = Le), (a._scrollers.cache = 0);
  var s =
    ((Observer.prototype.init = function init(e) {
      Me || N(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        Xe || M();
      var o = e.tolerance,
        c = e.dragMinimum,
        t = e.type,
        i = e.target,
        n = e.lineHeight,
        r = e.debounce,
        s = e.preventDefault,
        a = e.onStop,
        l = e.onStopDelay,
        u = e.ignore,
        d = e.wheelSpeed,
        f = e.event,
        g = e.onDragStart,
        p = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        x = e.onRelease,
        _ = e.onRight,
        m = e.onLeft,
        b = e.onUp,
        w = e.onDown,
        O = e.onChangeX,
        P = e.onChangeY,
        E = e.onChange,
        Y = e.onToggleX,
        X = e.onToggleY,
        q = e.onHover,
        T = e.onHoverEnd,
        k = e.onMove,
        C = e.ignoreCheck,
        S = e.isNormalizer,
        B = e.onGestureStart,
        G = e.onGestureEnd,
        V = e.onWheel,
        F = e.onEnable,
        R = e.onDisable,
        j = e.onClick,
        W = e.scrollSpeed,
        U = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function nc() {
        return (_e = Ce());
      }
      function oc(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && pe && "touch" !== e.pointerType) ||
          (C && C(e, t))
        );
      }
      function qc() {
        var e = (se.deltaX = L(ye)),
          t = (se.deltaY = L(xe)),
          n = Math.abs(e) >= o,
          r = Math.abs(t) >= o;
        E && (n || r) && E(se, e, t, ye, xe),
          n &&
            (_ && 0 < se.deltaX && _(se),
            m && se.deltaX < 0 && m(se),
            O && O(se),
            Y && se.deltaX < 0 != ae < 0 && Y(se),
            (ae = se.deltaX),
            (ye[0] = ye[1] = ye[2] = 0)),
          r &&
            (w && 0 < se.deltaY && w(se),
            b && se.deltaY < 0 && b(se),
            P && P(se),
            X && se.deltaY < 0 != le < 0 && X(se),
            (le = se.deltaY),
            (xe[0] = xe[1] = xe[2] = 0)),
          (re || ne) && (k && k(se), ne && (h(se), (ne = !1)), (re = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (V(se), (oe = !1)),
          (ee = 0);
      }
      function rc(e, t, n) {
        (ye[n] += e),
          (xe[n] += t),
          se._vx.update(e),
          se._vy.update(t),
          r ? (ee = ee || requestAnimationFrame(qc)) : qc();
      }
      function sc(e, t) {
        Z &&
          !ce &&
          ((se.axis = ce = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ce && ((ye[2] += e), se._vx.update(e, !0)),
          "x" !== ce && ((xe[2] += t), se._vy.update(t, !0)),
          r ? (ee = ee || requestAnimationFrame(qc)) : qc();
      }
      function tc(e) {
        if (!oc(e, 1)) {
          var t = (e = K(e, s)).clientX,
            n = e.clientY,
            r = t - se.x,
            o = n - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = n),
            (i ||
              Math.abs(se.startX - t) >= c ||
              Math.abs(se.startY - n) >= c) &&
              (h && (ne = !0),
              i || (se.isDragging = !0),
              sc(r, o),
              i || (g && g(se)));
        }
      }
      function wc(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          B(e, se.isDragging)
        );
      }
      function xc() {
        return (se.isGesturing = !1) || G(se);
      }
      function yc(e) {
        if (!oc(e)) {
          var t = ue(),
            n = de();
          rc((t - fe) * W, (n - ge) * W, 1),
            (fe = t),
            (ge = n),
            a && te.restart(!0);
        }
      }
      function zc(e) {
        if (!oc(e)) {
          (e = K(e, s)), V && (oe = !0);
          var t =
            (1 === e.deltaMode ? n : 2 === e.deltaMode ? Ae.innerHeight : 1) *
            d;
          rc(e.deltaX * t, e.deltaY * t, 0), a && !S && te.restart(!0);
        }
      }
      function Ac(e) {
        if (!oc(e)) {
          var t = e.clientX,
            n = e.clientY,
            r = t - se.x,
            o = n - se.y;
          (se.x = t), (se.y = n), (re = !0), (r || o) && sc(r, o);
        }
      }
      function Bc(e) {
        (se.event = e), q(se);
      }
      function Cc(e) {
        (se.event = e), T(se);
      }
      function Dc(e) {
        return oc(e) || (K(e, s) && j(se));
      }
      (this.target = i = H(i) || Oe),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (c = c || 0),
        (d = d || 1),
        (W = W || 1),
        (t = t || "wheel,touch,pointer"),
        (r = !1 !== r),
        (n = n || parseFloat(Ae.getComputedStyle(Pe).lineHeight) || 22);
      var ee,
        te,
        ne,
        re,
        oe,
        ie,
        ce,
        se = this,
        ae = 0,
        le = 0,
        ue = I(i, Se),
        de = I(i, Le),
        fe = ue(),
        ge = de(),
        pe =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === qe[0],
        he = y(i),
        ve = i.ownerDocument || De,
        ye = [0, 0, 0],
        xe = [0, 0, 0],
        _e = 0,
        me = (se.onPress = function (e) {
          oc(e, 1) ||
            (e && e.button) ||
            ((se.axis = ce = null),
            te.pause(),
            (se.isPressed = !0),
            (e = K(e)),
            (ae = le = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            z(S ? i : ve, qe[1], tc, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        be = (se.onRelease = function (t) {
          if (!oc(t, 1)) {
            A(S ? i : ve, qe[1], tc, !0);
            var e = !isNaN(se.y - se.startY),
              n =
                se.isDragging &&
                (3 < Math.abs(se.x - se.startX) ||
                  3 < Math.abs(se.y - se.startY)),
              r = K(t);
            !n &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                we.delayedCall(0.08, function () {
                  if (300 < Ce() - _e && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ve.createEvent) {
                      var e = ve.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Ae,
                        1,
                        r.screenX,
                        r.screenY,
                        r.clientX,
                        r.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              a && !S && te.restart(!0),
              p && n && p(se),
              x && x(se, n);
          }
        });
      (te = se._dc =
        we
          .delayedCall(l || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), a && a(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = J(0, 50, !0)),
        (se._vy = J(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = de),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Te(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (z(he ? ve : i, "scroll", D),
              0 <= t.indexOf("scroll") && z(he ? ve : i, "scroll", yc, s, U),
              0 <= t.indexOf("wheel") && z(i, "wheel", zc, s, U),
              ((0 <= t.indexOf("touch") && Ee) || 0 <= t.indexOf("pointer")) &&
                (z(i, qe[0], me, s, U),
                z(ve, qe[2], be),
                z(ve, qe[3], be),
                Q && z(i, "click", nc, !1, !0),
                j && z(i, "click", Dc),
                B && z(ve, "gesturestart", wc),
                G && z(ve, "gestureend", xc),
                q && z(i, Ye + "enter", Bc),
                T && z(i, Ye + "leave", Cc),
                k && z(i, Ye + "move", Ac)),
              (se.isEnabled = !0),
              e && e.type && me(e),
              F && F(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (ke.filter(function (e) {
              return e !== se && y(e.target);
            }).length || A(he ? ve : i, "scroll", D),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), A(S ? i : ve, qe[1], tc, !0)),
            A(he ? ve : i, "scroll", yc, U),
            A(i, "wheel", zc, U),
            A(i, qe[0], me, U),
            A(ve, qe[2], be),
            A(ve, qe[3], be),
            A(i, "click", nc, !0),
            A(i, "click", Dc),
            A(ve, "gesturestart", wc),
            A(ve, "gestureend", xc),
            A(i, Ye + "enter", Bc),
            A(i, Ye + "leave", Cc),
            A(i, Ye + "move", Ac),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            R && R(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = ke.indexOf(se);
            0 <= e && ke.splice(e, 1), ze === se && (ze = 0);
          }),
        ke.push(se),
        S && y(i) && (ze = se),
        se.enable(f);
    }),
    (function _createClass(e, t, n) {
      return (
        t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (s.version = "3.11.5"),
    (s.create = function (e) {
      return new s(e);
    }),
    (s.register = N),
    (s.getAll = function () {
      return ke.slice();
    }),
    (s.getById = function (t) {
      return ke.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && we.registerPlugin(s),
    (a.Observer = s),
    (a._getProxyProp = x),
    (a._getScrollFunc = I),
    (a._getTarget = H),
    (a._getVelocityProp = J),
    (a._horizontal = Se),
    (a._isViewport = y),
    (a._vertical = Le),
    (a.default = s);
  if (typeof window === "undefined" || window !== a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
  } else {
    delete a.default;
  }
});
