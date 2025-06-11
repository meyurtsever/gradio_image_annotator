const {
  SvelteComponent: Oc,
  assign: Vc,
  create_slot: Nc,
  detach: Kc,
  element: Zc,
  get_all_dirty_from_scope: Jc,
  get_slot_changes: Gc,
  get_spread_update: Qc,
  init: $c,
  insert: ef,
  safe_not_equal: tf,
  set_dynamic_element_data: _o,
  set_style: Fe,
  toggle_class: kt,
  transition_in: hr,
  transition_out: _r,
  update_slot_base: nf
} = window.__gradio__svelte__internal;
function sf(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Nc(
    s,
    i,
    /*$$scope*/
    i[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      i[7]
    ) },
    { id: (
      /*elem_id*/
      i[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      i[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = Vc(r, o[a]);
  return {
    c() {
      e = Zc(
        /*tag*/
        i[14]
      ), l && l.c(), _o(
        /*tag*/
        i[14]
      )(e, r), kt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), kt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), kt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), kt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), kt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Fe(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Fe(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Fe(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Fe(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Fe(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Fe(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Fe(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      ef(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && nf(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? Gc(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Jc(
          /*$$scope*/
          a[17]
        ),
        null
      ), _o(
        /*tag*/
        a[14]
      )(e, r = Qc(o, [
        (!n || c & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || c & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || c & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), kt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), kt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), kt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), kt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), kt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && Fe(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && Fe(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && Fe(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && Fe(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && Fe(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && Fe(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (hr(l, a), n = !0);
    },
    o(a) {
      _r(l, a), n = !1;
    },
    d(a) {
      a && Kc(e), l && l.d(a);
    }
  };
}
function lf(i) {
  let e, t = (
    /*tag*/
    i[14] && sf(i)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, s) {
      t && t.m(n, s), e = !0;
    },
    p(n, [s]) {
      /*tag*/
      n[14] && t.p(n, s);
    },
    i(n) {
      e || (hr(t, n), e = !0);
    },
    o(n) {
      _r(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function of(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: g = !0 } = e, { visible: b = !0 } = e, { allow_overflow: w = !0 } = e, { scale: v = null } = e, { min_width: p = 0 } = e, C = _ === "fieldset" ? "fieldset" : "div";
  const x = (S) => {
    if (S !== void 0) {
      if (typeof S == "number")
        return S + "px";
      if (typeof S == "string")
        return S;
    }
  };
  return i.$$set = (S) => {
    "height" in S && t(0, l = S.height), "width" in S && t(1, o = S.width), "elem_id" in S && t(2, r = S.elem_id), "elem_classes" in S && t(3, a = S.elem_classes), "variant" in S && t(4, c = S.variant), "border_mode" in S && t(5, f = S.border_mode), "padding" in S && t(6, u = S.padding), "type" in S && t(16, _ = S.type), "test_id" in S && t(7, d = S.test_id), "explicit_call" in S && t(8, h = S.explicit_call), "container" in S && t(9, g = S.container), "visible" in S && t(10, b = S.visible), "allow_overflow" in S && t(11, w = S.allow_overflow), "scale" in S && t(12, v = S.scale), "min_width" in S && t(13, p = S.min_width), "$$scope" in S && t(17, s = S.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    b,
    w,
    v,
    p,
    C,
    x,
    _,
    s,
    n
  ];
}
class af extends Oc {
  constructor(e) {
    super(), $c(this, e, of, lf, tf, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: rf,
  attr: cf,
  create_slot: ff,
  detach: uf,
  element: hf,
  get_all_dirty_from_scope: _f,
  get_slot_changes: df,
  init: mf,
  insert: gf,
  safe_not_equal: bf,
  transition_in: pf,
  transition_out: wf,
  update_slot_base: vf
} = window.__gradio__svelte__internal;
function kf(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = ff(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = hf("div"), s && s.c(), cf(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      gf(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && vf(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? df(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : _f(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (pf(s, l), t = !0);
    },
    o(l) {
      wf(s, l), t = !1;
    },
    d(l) {
      l && uf(e), s && s.d(l);
    }
  };
}
function yf(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class Cf extends rf {
  constructor(e) {
    super(), mf(this, e, yf, kf, bf, {});
  }
}
const {
  SvelteComponent: xf,
  attr: mo,
  check_outros: Sf,
  create_component: zf,
  create_slot: Mf,
  destroy_component: Bf,
  detach: os,
  element: Df,
  empty: Wf,
  get_all_dirty_from_scope: Ef,
  get_slot_changes: Yf,
  group_outros: Xf,
  init: Lf,
  insert: as,
  mount_component: qf,
  safe_not_equal: If,
  set_data: Rf,
  space: Hf,
  text: Pf,
  toggle_class: An,
  transition_in: vi,
  transition_out: rs,
  update_slot_base: Af
} = window.__gradio__svelte__internal;
function go(i) {
  let e, t;
  return e = new Cf({
    props: {
      $$slots: { default: [Tf] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      zf(e.$$.fragment);
    },
    m(n, s) {
      qf(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (vi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      rs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bf(e, n);
    }
  };
}
function Tf(i) {
  let e;
  return {
    c() {
      e = Pf(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      as(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Rf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && os(e);
    }
  };
}
function Ff(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Mf(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && go(i)
  );
  return {
    c() {
      e = Df("span"), o && o.c(), t = Hf(), r && r.c(), n = Wf(), mo(e, "data-testid", "block-info"), mo(e, "class", "svelte-22c38v"), An(e, "sr-only", !/*show_label*/
      i[0]), An(e, "hide", !/*show_label*/
      i[0]), An(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      as(a, e, c), o && o.m(e, null), as(a, t, c), r && r.m(a, c), as(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Af(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Yf(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : Ef(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && An(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && An(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && An(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && vi(r, 1)) : (r = go(a), r.c(), vi(r, 1), r.m(n.parentNode, n)) : r && (Xf(), rs(r, 1, 1, () => {
        r = null;
      }), Sf());
    },
    i(a) {
      s || (vi(o, a), vi(r), s = !0);
    },
    o(a) {
      rs(o, a), rs(r), s = !1;
    },
    d(a) {
      a && (os(e), os(t), os(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Uf(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class dr extends xf {
  constructor(e) {
    super(), Lf(this, e, Uf, Ff, If, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: jf,
  append: Ps,
  attr: Ai,
  create_component: Of,
  destroy_component: Vf,
  detach: Nf,
  element: bo,
  init: Kf,
  insert: Zf,
  mount_component: Jf,
  safe_not_equal: Gf,
  set_data: Qf,
  space: $f,
  text: eu,
  toggle_class: Zt,
  transition_in: tu,
  transition_out: nu
} = window.__gradio__svelte__internal;
function iu(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = bo("label"), t = bo("span"), Of(n.$$.fragment), s = $f(), l = eu(
        /*label*/
        i[0]
      ), Ai(t, "class", "svelte-9gxdi0"), Ai(e, "for", ""), Ai(e, "data-testid", "block-label"), Ai(e, "class", "svelte-9gxdi0"), Zt(e, "hide", !/*show_label*/
      i[2]), Zt(e, "sr-only", !/*show_label*/
      i[2]), Zt(
        e,
        "float",
        /*float*/
        i[4]
      ), Zt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Zf(r, e, a), Ps(e, t), Jf(n, t, null), Ps(e, s), Ps(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Qf(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Zt(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Zt(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Zt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Zt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (tu(n.$$.fragment, r), o = !0);
    },
    o(r) {
      nu(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Nf(e), Vf(n);
    }
  };
}
function su(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class lu extends jf {
  constructor(e) {
    super(), Kf(this, e, su, iu, Gf, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: ou,
  append: Wl,
  attr: Rt,
  bubble: au,
  create_component: ru,
  destroy_component: cu,
  detach: mr,
  element: El,
  init: fu,
  insert: gr,
  listen: uu,
  mount_component: hu,
  safe_not_equal: _u,
  set_data: du,
  set_style: Tn,
  space: mu,
  text: gu,
  toggle_class: Xe,
  transition_in: bu,
  transition_out: pu
} = window.__gradio__svelte__internal;
function po(i) {
  let e, t;
  return {
    c() {
      e = El("span"), t = gu(
        /*label*/
        i[1]
      ), Rt(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      gr(n, e, s), Wl(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && du(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && mr(e);
    }
  };
}
function wu(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && po(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = El("button"), a && a.c(), t = mu(), n = El("div"), ru(s.$$.fragment), Rt(n, "class", "svelte-1lrphxw"), Xe(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Xe(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Xe(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Rt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Rt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Rt(
        e,
        "title",
        /*label*/
        i[1]
      ), Rt(e, "class", "svelte-1lrphxw"), Xe(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Xe(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Xe(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Xe(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Tn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Tn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Tn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      gr(c, e, f), a && a.m(e, null), Wl(e, t), Wl(e, n), hu(s, n, null), l = !0, o || (r = uu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = po(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && Xe(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && Xe(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && Xe(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && Rt(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && Rt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && Rt(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && Xe(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && Xe(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && Xe(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && Xe(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && Tn(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Tn(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && Tn(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (bu(s.$$.fragment, c), l = !0);
    },
    o(c) {
      pu(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && mr(e), a && a.d(), cu(s), o = !1, r();
    }
  };
}
function vu(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function w(v) {
    au.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, s = v.Icon), "label" in v && t(1, l = v.label), "show_label" in v && t(2, o = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, c = v.padded), "highlight" in v && t(6, f = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, _ = v.hasPopup), "color" in v && t(13, d = v.color), "transparent" in v && t(9, h = v.transparent), "background" in v && t(10, g = v.background), "offset" in v && t(11, b = v.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = f ? "var(--color-accent)" : d);
  }, [
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    _,
    h,
    g,
    b,
    n,
    d,
    w
  ];
}
class Ms extends ou {
  constructor(e) {
    super(), fu(this, e, vu, wu, _u, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: ku,
  append: yu,
  attr: As,
  binding_callbacks: Cu,
  create_slot: xu,
  detach: Su,
  element: wo,
  get_all_dirty_from_scope: zu,
  get_slot_changes: Mu,
  init: Bu,
  insert: Du,
  safe_not_equal: Wu,
  toggle_class: Jt,
  transition_in: Eu,
  transition_out: Yu,
  update_slot_base: Xu
} = window.__gradio__svelte__internal;
function Lu(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = xu(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = wo("div"), t = wo("div"), l && l.c(), As(t, "class", "icon svelte-3w3rth"), As(e, "class", "empty svelte-3w3rth"), As(e, "aria-label", "Empty value"), Jt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Jt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Jt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Jt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Du(o, e, r), yu(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Xu(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Mu(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : zu(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Jt(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Jt(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Jt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Jt(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (Eu(l, o), n = !0);
    },
    o(o) {
      Yu(l, o), n = !1;
    },
    d(o) {
      o && Su(e), l && l.d(o), i[6](null);
    }
  };
}
function qu(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: h } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function f(u) {
    Cu[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, o = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, l = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = c(a));
  }, [o, r, a, n, l, s, f];
}
class Iu extends ku {
  constructor(e) {
    super(), Bu(this, e, qu, Lu, Wu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Ru,
  append: vo,
  attr: Le,
  detach: Hu,
  init: Pu,
  insert: Au,
  noop: Ts,
  safe_not_equal: Tu,
  svg_element: Fs
} = window.__gradio__svelte__internal;
function Fu(i) {
  let e, t, n;
  return {
    c() {
      e = Fs("svg"), t = Fs("path"), n = Fs("circle"), Le(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Le(n, "cx", "12"), Le(n, "cy", "13"), Le(n, "r", "4"), Le(e, "xmlns", "http://www.w3.org/2000/svg"), Le(e, "width", "100%"), Le(e, "height", "100%"), Le(e, "viewBox", "0 0 24 24"), Le(e, "fill", "none"), Le(e, "stroke", "currentColor"), Le(e, "stroke-width", "1.5"), Le(e, "stroke-linecap", "round"), Le(e, "stroke-linejoin", "round"), Le(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Au(s, e, l), vo(e, t), vo(e, n);
    },
    p: Ts,
    i: Ts,
    o: Ts,
    d(s) {
      s && Hu(e);
    }
  };
}
class Uu extends Ru {
  constructor(e) {
    super(), Pu(this, e, null, Fu, Tu, {});
  }
}
const {
  SvelteComponent: ju,
  append: Ou,
  attr: ht,
  detach: Vu,
  init: Nu,
  insert: Ku,
  noop: Us,
  safe_not_equal: Zu,
  svg_element: ko
} = window.__gradio__svelte__internal;
function Ju(i) {
  let e, t;
  return {
    c() {
      e = ko("svg"), t = ko("circle"), ht(t, "cx", "12"), ht(t, "cy", "12"), ht(t, "r", "10"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "stroke-width", "1.5"), ht(e, "stroke-linecap", "round"), ht(e, "stroke-linejoin", "round"), ht(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Ku(n, e, s), Ou(e, t);
    },
    p: Us,
    i: Us,
    o: Us,
    d(n) {
      n && Vu(e);
    }
  };
}
class Gu extends ju {
  constructor(e) {
    super(), Nu(this, e, null, Ju, Zu, {});
  }
}
const {
  SvelteComponent: Qu,
  append: js,
  attr: _t,
  detach: $u,
  init: eh,
  insert: th,
  noop: Os,
  safe_not_equal: nh,
  set_style: yt,
  svg_element: Ti
} = window.__gradio__svelte__internal;
function ih(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ti("svg"), t = Ti("g"), n = Ti("path"), s = Ti("path"), _t(n, "d", "M18,6L6.087,17.913"), yt(n, "fill", "none"), yt(n, "fill-rule", "nonzero"), yt(n, "stroke-width", "2px"), _t(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), _t(s, "d", "M4.364,4.364L19.636,19.636"), yt(s, "fill", "none"), yt(s, "fill-rule", "nonzero"), yt(s, "stroke-width", "2px"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "version", "1.1"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _t(e, "xml:space", "preserve"), _t(e, "stroke", "currentColor"), yt(e, "fill-rule", "evenodd"), yt(e, "clip-rule", "evenodd"), yt(e, "stroke-linecap", "round"), yt(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      th(l, e, o), js(e, t), js(t, n), js(e, s);
    },
    p: Os,
    i: Os,
    o: Os,
    d(l) {
      l && $u(e);
    }
  };
}
class br extends Qu {
  constructor(e) {
    super(), eh(this, e, null, ih, nh, {});
  }
}
const {
  SvelteComponent: sh,
  append: lh,
  attr: di,
  detach: oh,
  init: ah,
  insert: rh,
  noop: Vs,
  safe_not_equal: ch,
  svg_element: yo
} = window.__gradio__svelte__internal;
function fh(i) {
  let e, t;
  return {
    c() {
      e = yo("svg"), t = yo("path"), di(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), di(t, "fill", "currentColor"), di(e, "id", "icon"), di(e, "xmlns", "http://www.w3.org/2000/svg"), di(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      rh(n, e, s), lh(e, t);
    },
    p: Vs,
    i: Vs,
    o: Vs,
    d(n) {
      n && oh(e);
    }
  };
}
class uh extends sh {
  constructor(e) {
    super(), ah(this, e, null, fh, ch, {});
  }
}
const {
  SvelteComponent: hh,
  append: _h,
  attr: Fn,
  detach: dh,
  init: mh,
  insert: gh,
  noop: Ns,
  safe_not_equal: bh,
  svg_element: Co
} = window.__gradio__svelte__internal;
function ph(i) {
  let e, t;
  return {
    c() {
      e = Co("svg"), t = Co("path"), Fn(t, "fill", "currentColor"), Fn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Fn(e, "xmlns", "http://www.w3.org/2000/svg"), Fn(e, "width", "100%"), Fn(e, "height", "100%"), Fn(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      gh(n, e, s), _h(e, t);
    },
    p: Ns,
    i: Ns,
    o: Ns,
    d(n) {
      n && dh(e);
    }
  };
}
class wh extends hh {
  constructor(e) {
    super(), mh(this, e, null, ph, bh, {});
  }
}
const {
  SvelteComponent: vh,
  append: kh,
  attr: Un,
  detach: yh,
  init: Ch,
  insert: xh,
  noop: Ks,
  safe_not_equal: Sh,
  svg_element: xo
} = window.__gradio__svelte__internal;
function zh(i) {
  let e, t;
  return {
    c() {
      e = xo("svg"), t = xo("path"), Un(t, "d", "M5 8l4 4 4-4z"), Un(e, "class", "dropdown-arrow svelte-145leq6"), Un(e, "xmlns", "http://www.w3.org/2000/svg"), Un(e, "width", "100%"), Un(e, "height", "100%"), Un(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      xh(n, e, s), kh(e, t);
    },
    p: Ks,
    i: Ks,
    o: Ks,
    d(n) {
      n && yh(e);
    }
  };
}
class Gl extends vh {
  constructor(e) {
    super(), Ch(this, e, null, zh, Sh, {});
  }
}
const {
  SvelteComponent: Mh,
  append: Zs,
  attr: me,
  detach: Bh,
  init: Dh,
  insert: Wh,
  noop: Js,
  safe_not_equal: Eh,
  svg_element: Fi
} = window.__gradio__svelte__internal;
function Yh(i) {
  let e, t, n, s;
  return {
    c() {
      e = Fi("svg"), t = Fi("rect"), n = Fi("circle"), s = Fi("polyline"), me(t, "x", "3"), me(t, "y", "3"), me(t, "width", "18"), me(t, "height", "18"), me(t, "rx", "2"), me(t, "ry", "2"), me(n, "cx", "8.5"), me(n, "cy", "8.5"), me(n, "r", "1.5"), me(s, "points", "21 15 16 10 5 21"), me(e, "xmlns", "http://www.w3.org/2000/svg"), me(e, "width", "100%"), me(e, "height", "100%"), me(e, "viewBox", "0 0 24 24"), me(e, "fill", "none"), me(e, "stroke", "currentColor"), me(e, "stroke-width", "1.5"), me(e, "stroke-linecap", "round"), me(e, "stroke-linejoin", "round"), me(e, "class", "feather feather-image");
    },
    m(l, o) {
      Wh(l, e, o), Zs(e, t), Zs(e, n), Zs(e, s);
    },
    p: Js,
    i: Js,
    o: Js,
    d(l) {
      l && Bh(e);
    }
  };
}
let pr = class extends Mh {
  constructor(e) {
    super(), Dh(this, e, null, Yh, Eh, {});
  }
};
const {
  SvelteComponent: Xh,
  append: Lh,
  attr: Ui,
  detach: qh,
  init: Ih,
  insert: Rh,
  noop: Gs,
  safe_not_equal: Hh,
  svg_element: So
} = window.__gradio__svelte__internal;
function Ph(i) {
  let e, t;
  return {
    c() {
      e = So("svg"), t = So("path"), Ui(t, "fill", "currentColor"), Ui(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ui(e, "xmlns", "http://www.w3.org/2000/svg"), Ui(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      Rh(n, e, s), Lh(e, t);
    },
    p: Gs,
    i: Gs,
    o: Gs,
    d(n) {
      n && qh(e);
    }
  };
}
class wr extends Xh {
  constructor(e) {
    super(), Ih(this, e, null, Ph, Hh, {});
  }
}
const {
  SvelteComponent: Ah,
  append: ji,
  attr: ge,
  detach: Th,
  init: Fh,
  insert: Uh,
  noop: Qs,
  safe_not_equal: jh,
  svg_element: mi
} = window.__gradio__svelte__internal;
function Oh(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = mi("svg"), t = mi("path"), n = mi("path"), s = mi("line"), l = mi("line"), ge(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ge(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ge(s, "x1", "12"), ge(s, "y1", "19"), ge(s, "x2", "12"), ge(s, "y2", "23"), ge(l, "x1", "8"), ge(l, "y1", "23"), ge(l, "x2", "16"), ge(l, "y2", "23"), ge(e, "xmlns", "http://www.w3.org/2000/svg"), ge(e, "width", "100%"), ge(e, "height", "100%"), ge(e, "viewBox", "0 0 24 24"), ge(e, "fill", "none"), ge(e, "stroke", "currentColor"), ge(e, "stroke-width", "2"), ge(e, "stroke-linecap", "round"), ge(e, "stroke-linejoin", "round"), ge(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Uh(o, e, r), ji(e, t), ji(e, n), ji(e, s), ji(e, l);
    },
    p: Qs,
    i: Qs,
    o: Qs,
    d(o) {
      o && Th(e);
    }
  };
}
class Vh extends Ah {
  constructor(e) {
    super(), Fh(this, e, null, Oh, jh, {});
  }
}
const {
  SvelteComponent: Nh,
  append: zo,
  attr: Ge,
  detach: Kh,
  init: Zh,
  insert: Jh,
  noop: $s,
  safe_not_equal: Gh,
  set_style: Qh,
  svg_element: el
} = window.__gradio__svelte__internal;
function $h(i) {
  let e, t, n;
  return {
    c() {
      e = el("svg"), t = el("polyline"), n = el("path"), Ge(t, "points", "1 4 1 10 7 10"), Ge(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ge(e, "xmlns", "http://www.w3.org/2000/svg"), Ge(e, "width", "100%"), Ge(e, "height", "100%"), Ge(e, "viewBox", "0 0 24 24"), Ge(e, "fill", "none"), Ge(e, "stroke", "currentColor"), Ge(e, "stroke-width", "2"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round"), Ge(e, "class", "feather feather-rotate-ccw"), Qh(e, "transform", "rotateY(180deg)");
    },
    m(s, l) {
      Jh(s, e, l), zo(e, t), zo(e, n);
    },
    p: $s,
    i: $s,
    o: $s,
    d(s) {
      s && Kh(e);
    }
  };
}
class e_ extends Nh {
  constructor(e) {
    super(), Zh(this, e, null, $h, Gh, {});
  }
}
const {
  SvelteComponent: t_,
  append: n_,
  attr: qe,
  detach: i_,
  init: s_,
  insert: l_,
  noop: tl,
  safe_not_equal: o_,
  svg_element: Mo
} = window.__gradio__svelte__internal;
function a_(i) {
  let e, t;
  return {
    c() {
      e = Mo("svg"), t = Mo("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, s) {
      l_(n, e, s), n_(e, t);
    },
    p: tl,
    i: tl,
    o: tl,
    d(n) {
      n && i_(e);
    }
  };
}
class r_ extends t_ {
  constructor(e) {
    super(), s_(this, e, null, a_, o_, {});
  }
}
const {
  SvelteComponent: c_,
  append: Bo,
  attr: Qe,
  detach: f_,
  init: u_,
  insert: h_,
  noop: nl,
  safe_not_equal: __,
  svg_element: il
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t, n;
  return {
    c() {
      e = il("svg"), t = il("polyline"), n = il("path"), Qe(t, "points", "1 4 1 10 7 10"), Qe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "2"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-rotate-ccw");
    },
    m(s, l) {
      h_(s, e, l), Bo(e, t), Bo(e, n);
    },
    p: nl,
    i: nl,
    o: nl,
    d(s) {
      s && f_(e);
    }
  };
}
class m_ extends c_ {
  constructor(e) {
    super(), u_(this, e, null, d_, __, {});
  }
}
const {
  SvelteComponent: g_,
  append: sl,
  attr: ze,
  detach: b_,
  init: p_,
  insert: w_,
  noop: ll,
  safe_not_equal: v_,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function k_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Oi("svg"), t = Oi("path"), n = Oi("polyline"), s = Oi("line"), ze(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ze(n, "points", "17 8 12 3 7 8"), ze(s, "x1", "12"), ze(s, "y1", "3"), ze(s, "x2", "12"), ze(s, "y2", "15"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "90%"), ze(e, "height", "90%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "2"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-upload");
    },
    m(l, o) {
      w_(l, e, o), sl(e, t), sl(e, n), sl(e, s);
    },
    p: ll,
    i: ll,
    o: ll,
    d(l) {
      l && b_(e);
    }
  };
}
let vr = class extends g_ {
  constructor(e) {
    super(), p_(this, e, null, k_, v_, {});
  }
};
const {
  SvelteComponent: y_,
  append: Do,
  attr: Gt,
  detach: C_,
  init: x_,
  insert: S_,
  noop: ol,
  safe_not_equal: z_,
  svg_element: al
} = window.__gradio__svelte__internal;
function M_(i) {
  let e, t, n;
  return {
    c() {
      e = al("svg"), t = al("path"), n = al("path"), Gt(t, "fill", "currentColor"), Gt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Gt(n, "fill", "currentColor"), Gt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Gt(e, "xmlns", "http://www.w3.org/2000/svg"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      S_(s, e, l), Do(e, t), Do(e, n);
    },
    p: ol,
    i: ol,
    o: ol,
    d(s) {
      s && C_(e);
    }
  };
}
let kr = class extends y_ {
  constructor(e) {
    super(), x_(this, e, null, M_, z_, {});
  }
};
const B_ = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Wo = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
B_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: Wo[e][t],
      secondary: Wo[e][n]
    }
  }),
  {}
);
class cs extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function D_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new cs("Must be on Spaces to share.");
  let t, n, s;
  t = W_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
  const l = new File([t], s, { type: n }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: l,
    headers: {
      "Content-Type": l.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if ((a = o.headers.get("content-type")) != null && a.includes("application/json")) {
      const c = await o.json();
      throw new cs(`Upload failed: ${c.error}`);
    }
    throw new cs("Upload failed.");
  }
  return await o.text();
}
function W_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: E_,
  create_component: Y_,
  destroy_component: X_,
  init: L_,
  mount_component: q_,
  safe_not_equal: I_,
  transition_in: R_,
  transition_out: H_
} = window.__gradio__svelte__internal, { createEventDispatcher: P_ } = window.__gradio__svelte__internal;
function A_(i) {
  let e, t;
  return e = new Ms({
    props: {
      Icon: uh,
      label: (
        /*i18n*/
        i[2]("common.share")
      ),
      pending: (
        /*pending*/
        i[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    i[5]
  ), {
    c() {
      Y_(e.$$.fragment);
    },
    m(n, s) {
      q_(e, n, s), t = !0;
    },
    p(n, [s]) {
      const l = {};
      s & /*i18n*/
      4 && (l.label = /*i18n*/
      n[2]("common.share")), s & /*pending*/
      8 && (l.pending = /*pending*/
      n[3]), e.$set(l);
    },
    i(n) {
      t || (R_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      H_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      X_(e, n);
    }
  };
}
function T_(i, e, t) {
  const n = P_();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof cs ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class F_ extends E_ {
  constructor(e) {
    super(), L_(this, e, T_, A_, I_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: U_,
  append: Cn,
  attr: Yl,
  check_outros: j_,
  create_component: yr,
  destroy_component: Cr,
  detach: fs,
  element: Xl,
  group_outros: O_,
  init: V_,
  insert: us,
  mount_component: xr,
  safe_not_equal: N_,
  set_data: Ll,
  space: ql,
  text: ki,
  toggle_class: Eo,
  transition_in: ds,
  transition_out: ms
} = window.__gradio__svelte__internal;
function K_(i) {
  let e, t;
  return e = new vr({}), {
    c() {
      yr(e.$$.fragment);
    },
    m(n, s) {
      xr(e, n, s), t = !0;
    },
    i(n) {
      t || (ds(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ms(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cr(e, n);
    }
  };
}
function Z_(i) {
  let e, t;
  return e = new wr({}), {
    c() {
      yr(e.$$.fragment);
    },
    m(n, s) {
      xr(e, n, s), t = !0;
    },
    i(n) {
      t || (ds(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ms(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cr(e, n);
    }
  };
}
function Yo(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), s, l, o, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = Xl("span"), t = ki("- "), s = ki(n), l = ki(" -"), o = ql(), a = ki(r), Yl(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      us(c, e, f), Cn(e, t), Cn(e, s), Cn(e, l), us(c, o, f), us(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Ll(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Ll(a, r);
    },
    d(c) {
      c && (fs(e), fs(o), fs(a));
    }
  };
}
function J_(i) {
  let e, t, n, s, l, o = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, c;
  const f = [Z_, K_], u = [];
  function _(h, g) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), s = u[n] = f[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && Yo(i)
  );
  return {
    c() {
      e = Xl("div"), t = Xl("span"), s.c(), l = ql(), r = ki(o), a = ql(), d && d.c(), Yl(t, "class", "icon-wrap svelte-kzcjhc"), Eo(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Yl(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, g) {
      us(h, e, g), Cn(e, t), u[n].m(t, null), Cn(e, l), Cn(e, r), Cn(e, a), d && d.m(e, null), c = !0;
    },
    p(h, [g]) {
      let b = n;
      n = _(h), n !== b && (O_(), ms(u[b], 1, 1, () => {
        u[b] = null;
      }), j_(), s = u[n], s || (s = u[n] = f[n](h), s.c()), ds(s, 1), s.m(t, null)), (!c || g & /*hovered*/
      16) && Eo(
        t,
        "hovered",
        /*hovered*/
        h[4]
      ), (!c || g & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      h[1](
        /*defs*/
        h[5][
          /*type*/
          h[0]
        ] || /*defs*/
        h[5].file
      ) + "") && Ll(r, o), /*mode*/
      h[3] !== "short" ? d ? d.p(h, g) : (d = Yo(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      c || (ds(s), c = !0);
    },
    o(h) {
      ms(s), c = !1;
    },
    d(h) {
      h && fs(e), u[n].d(), d && d.d();
    }
  };
}
function G_(i, e, t) {
  let { type: n = "file" } = e, { i18n: s } = e, { message: l = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (c) => {
    "type" in c && t(0, n = c.type), "i18n" in c && t(1, s = c.i18n), "message" in c && t(2, l = c.message), "mode" in c && t(3, o = c.mode), "hovered" in c && t(4, r = c.hovered);
  }, [n, s, l, o, r, a];
}
class Sr extends U_ {
  constructor(e) {
    super(), V_(this, e, G_, J_, N_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Q_,
  append: rl,
  attr: Dt,
  check_outros: yi,
  create_component: Bs,
  destroy_component: Ds,
  detach: oi,
  element: Li,
  empty: $_,
  group_outros: Ci,
  init: ed,
  insert: ai,
  listen: Ws,
  mount_component: Es,
  safe_not_equal: td,
  space: cl,
  toggle_class: cn,
  transition_in: we,
  transition_out: Re
} = window.__gradio__svelte__internal;
function Xo(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, s = (
    /*sources*/
    i[1].includes("microphone")
  ), l, o = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), c, f = t && Lo(i), u = s && qo(i), _ = o && Io(i), d = a && Ro(i);
  return {
    c() {
      e = Li("span"), f && f.c(), n = cl(), u && u.c(), l = cl(), _ && _.c(), r = cl(), d && d.c(), Dt(e, "class", "source-selection svelte-1jp3vgd"), Dt(e, "data-testid", "source-select");
    },
    m(h, g) {
      ai(h, e, g), f && f.m(e, null), rl(e, n), u && u.m(e, null), rl(e, l), _ && _.m(e, null), rl(e, r), d && d.m(e, null), c = !0;
    },
    p(h, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? f ? (f.p(h, g), g & /*sources*/
      2 && we(f, 1)) : (f = Lo(h), f.c(), we(f, 1), f.m(e, n)) : f && (Ci(), Re(f, 1, 1, () => {
        f = null;
      }), yi()), g & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("microphone")), s ? u ? (u.p(h, g), g & /*sources*/
      2 && we(u, 1)) : (u = qo(h), u.c(), we(u, 1), u.m(e, l)) : u && (Ci(), Re(u, 1, 1, () => {
        u = null;
      }), yi()), g & /*sources*/
      2 && (o = /*sources*/
      h[1].includes("webcam")), o ? _ ? (_.p(h, g), g & /*sources*/
      2 && we(_, 1)) : (_ = Io(h), _.c(), we(_, 1), _.m(e, r)) : _ && (Ci(), Re(_, 1, 1, () => {
        _ = null;
      }), yi()), g & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? d ? (d.p(h, g), g & /*sources*/
      2 && we(d, 1)) : (d = Ro(h), d.c(), we(d, 1), d.m(e, null)) : d && (Ci(), Re(d, 1, 1, () => {
        d = null;
      }), yi());
    },
    i(h) {
      c || (we(f), we(u), we(_), we(d), c = !0);
    },
    o(h) {
      Re(f), Re(u), Re(_), Re(d), c = !1;
    },
    d(h) {
      h && oi(e), f && f.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function Lo(i) {
  let e, t, n, s, l;
  return t = new vr({}), {
    c() {
      e = Li("button"), Bs(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Upload file"), cn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      ai(o, e, r), Es(t, e, null), n = !0, s || (l = Ws(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && cn(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && oi(e), Ds(t), s = !1, l();
    }
  };
}
function qo(i) {
  let e, t, n, s, l;
  return t = new Vh({}), {
    c() {
      e = Li("button"), Bs(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Record audio"), cn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      ai(o, e, r), Es(t, e, null), n = !0, s || (l = Ws(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && cn(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && oi(e), Ds(t), s = !1, l();
    }
  };
}
function Io(i) {
  let e, t, n, s, l;
  return t = new kr({}), {
    c() {
      e = Li("button"), Bs(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Capture from camera"), cn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      ai(o, e, r), Es(t, e, null), n = !0, s || (l = Ws(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && cn(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && oi(e), Ds(t), s = !1, l();
    }
  };
}
function Ro(i) {
  let e, t, n, s, l;
  return t = new wr({}), {
    c() {
      e = Li("button"), Bs(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Paste from clipboard"), cn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      ai(o, e, r), Es(t, e, null), n = !0, s || (l = Ws(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && cn(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && oi(e), Ds(t), s = !1, l();
    }
  };
}
function nd(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Xo(i)
  );
  return {
    c() {
      n && n.c(), e = $_();
    },
    m(s, l) {
      n && n.m(s, l), ai(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && we(n, 1)) : (n = Xo(s), n.c(), we(n, 1), n.m(e.parentNode, e)) : n && (Ci(), Re(n, 1, 1, () => {
        n = null;
      }), yi());
    },
    i(s) {
      t || (we(n), t = !0);
    },
    o(s) {
      Re(n), t = !1;
    },
    d(s) {
      s && oi(e), n && n.d(s);
    }
  };
}
function id(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(h, g, b, w) {
    function v(p) {
      return p instanceof b ? p : new b(function(C) {
        C(p);
      });
    }
    return new (b || (b = Promise))(function(p, C) {
      function x(k) {
        try {
          M(w.next(k));
        } catch (D) {
          C(D);
        }
      }
      function S(k) {
        try {
          M(w.throw(k));
        } catch (D) {
          C(D);
        }
      }
      function M(k) {
        k.done ? p(k.value) : v(k.value).then(x, S);
      }
      M((w = w.apply(h, g || [])).next());
    });
  };
  let { sources: l } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function c(h) {
    return s(this, void 0, void 0, function* () {
      r(), t(0, o = h), a(h);
    });
  }
  const f = () => c("upload"), u = () => c("microphone"), _ = () => c("webcam"), d = () => c("clipboard");
  return i.$$set = (h) => {
    "sources" in h && t(1, l = h.sources), "active_source" in h && t(0, o = h.active_source), "handle_clear" in h && t(4, r = h.handle_clear), "handle_select" in h && t(5, a = h.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(l)]);
  }, [
    o,
    l,
    n,
    c,
    r,
    a,
    f,
    u,
    _,
    d
  ];
}
class sd extends Q_ {
  constructor(e) {
    super(), ed(this, e, id, nd, td, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Qn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function hs() {
}
const ld = (i) => i;
function od(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Ho(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const zr = typeof window < "u";
let Po = zr ? () => window.performance.now() : () => Date.now(), Mr = zr ? (i) => requestAnimationFrame(i) : hs;
const li = /* @__PURE__ */ new Set();
function Br(i) {
  li.forEach((e) => {
    e.c(i) || (li.delete(e), e.f());
  }), li.size !== 0 && Mr(Br);
}
function ad(i) {
  let e;
  return li.size === 0 && Mr(Br), {
    promise: new Promise((t) => {
      li.add(e = { c: i, f: t });
    }),
    abort() {
      li.delete(e);
    }
  };
}
function rd(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function cd(i, { delay: e = 0, duration: t = 400, easing: n = ld } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function Ao(i, { delay: e = 0, duration: t = 400, easing: n = rd, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [u, _] = Ho(s), [d, h] = Ho(l);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (g, b) => `
			transform: ${c} translate(${(1 - g) * u}${_}, ${(1 - g) * d}${h});
			opacity: ${a - f * b}`
  };
}
const jn = [];
function fd(i, e = hs) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (od(i, r) && (i = r, t)) {
      const a = !jn.length;
      for (const c of n)
        c[1](), jn.push(c, i);
      if (a) {
        for (let c = 0; c < jn.length; c += 2)
          jn[c][0](jn[c + 1]);
        jn.length = 0;
      }
    }
  }
  function l(r) {
    s(r(i));
  }
  function o(r, a = hs) {
    const c = [r, a];
    return n.add(c), n.size === 1 && (t = e(s, l) || hs), r(i), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function To(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Il(i, e, t, n) {
  if (typeof t == "number" || To(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * s, r = i.opts.damping * l, a = (o - r) * i.inv_mass, c = (l + a) * i.dt;
    return Math.abs(c) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, To(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, l) => Il(i, e[l], t[l], n[l])
      );
    if (typeof t == "object") {
      const s = {};
      for (const l in t)
        s[l] = Il(i, e[l], t[l], n[l]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Fo(i, e = {}) {
  const t = fd(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, _ = 0, d = !1;
  function h(b, w = {}) {
    f = b;
    const v = a = {};
    return i == null || w.hard || g.stiffness >= 1 && g.damping >= 1 ? (d = !0, o = Po(), c = b, t.set(i = f), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), u = 0), r || (o = Po(), d = !1, r = ad((p) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const C = {
        inv_mass: u,
        opts: g,
        settled: !0,
        dt: (p - o) * 60 / 1e3
      }, x = Il(C, c, i, f);
      return o = p, c = i, t.set(i = x), C.settled && (r = null), !C.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        v === a && p();
      });
    }));
  }
  const g = {
    set: h,
    update: (b, w) => h(b(f, i), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return g;
}
const {
  SvelteComponent: ud,
  append: dt,
  attr: ne,
  component_subscribe: Uo,
  detach: hd,
  element: _d,
  init: dd,
  insert: md,
  noop: jo,
  safe_not_equal: gd,
  set_style: Vi,
  svg_element: mt,
  toggle_class: Oo
} = window.__gradio__svelte__internal, { onMount: bd } = window.__gradio__svelte__internal;
function pd(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _;
  return {
    c() {
      e = _d("div"), t = mt("svg"), n = mt("g"), s = mt("path"), l = mt("path"), o = mt("path"), r = mt("path"), a = mt("g"), c = mt("path"), f = mt("path"), u = mt("path"), _ = mt("path"), ne(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ne(s, "fill", "#FF7C00"), ne(s, "fill-opacity", "0.4"), ne(s, "class", "svelte-43sxxs"), ne(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ne(l, "fill", "#FF7C00"), ne(l, "class", "svelte-43sxxs"), ne(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ne(o, "fill", "#FF7C00"), ne(o, "fill-opacity", "0.4"), ne(o, "class", "svelte-43sxxs"), ne(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ne(r, "fill", "#FF7C00"), ne(r, "class", "svelte-43sxxs"), Vi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ne(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ne(c, "fill", "#FF7C00"), ne(c, "fill-opacity", "0.4"), ne(c, "class", "svelte-43sxxs"), ne(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ne(f, "fill", "#FF7C00"), ne(f, "class", "svelte-43sxxs"), ne(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ne(u, "fill", "#FF7C00"), ne(u, "fill-opacity", "0.4"), ne(u, "class", "svelte-43sxxs"), ne(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ne(_, "fill", "#FF7C00"), ne(_, "class", "svelte-43sxxs"), Vi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ne(t, "viewBox", "-1200 -1200 3000 3000"), ne(t, "fill", "none"), ne(t, "xmlns", "http://www.w3.org/2000/svg"), ne(t, "class", "svelte-43sxxs"), ne(e, "class", "svelte-43sxxs"), Oo(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, h) {
      md(d, e, h), dt(e, t), dt(t, n), dt(n, s), dt(n, l), dt(n, o), dt(n, r), dt(t, a), dt(a, c), dt(a, f), dt(a, u), dt(a, _);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && Vi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && Vi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), h & /*margin*/
      1 && Oo(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: jo,
    o: jo,
    d(d) {
      d && hd(e);
    }
  };
}
function wd(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(d, h, g, b) {
    function w(v) {
      return v instanceof g ? v : new g(function(p) {
        p(v);
      });
    }
    return new (g || (g = Promise))(function(v, p) {
      function C(M) {
        try {
          S(b.next(M));
        } catch (k) {
          p(k);
        }
      }
      function x(M) {
        try {
          S(b.throw(M));
        } catch (k) {
          p(k);
        }
      }
      function S(M) {
        M.done ? v(M.value) : w(M.value).then(C, x);
      }
      S((b = b.apply(d, h || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = Fo([0, 0]);
  Uo(i, r, (d) => t(1, n = d));
  const a = Fo([0, 0]);
  Uo(i, a, (d) => t(2, s = d));
  let c;
  function f() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return l(this, void 0, void 0, function* () {
      yield f(), c || u();
    });
  }
  function _() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return bd(() => (_(), () => c = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, s, r, a];
}
class vd extends ud {
  constructor(e) {
    super(), dd(this, e, wd, pd, gd, { margin: 0 });
  }
}
const {
  SvelteComponent: kd,
  append: xn,
  attr: wt,
  binding_callbacks: Vo,
  check_outros: Rl,
  create_component: Dr,
  create_slot: Wr,
  destroy_component: Er,
  destroy_each: Yr,
  detach: N,
  element: Mt,
  empty: ri,
  ensure_array_like: gs,
  get_all_dirty_from_scope: Xr,
  get_slot_changes: Lr,
  group_outros: Hl,
  init: yd,
  insert: K,
  mount_component: qr,
  noop: Pl,
  safe_not_equal: Cd,
  set_data: rt,
  set_style: an,
  space: at,
  text: de,
  toggle_class: et,
  transition_in: pt,
  transition_out: Bt,
  update_slot_base: Ir
} = window.__gradio__svelte__internal, { tick: xd } = window.__gradio__svelte__internal, { onDestroy: Sd } = window.__gradio__svelte__internal, { createEventDispatcher: zd } = window.__gradio__svelte__internal, Md = (i) => ({}), No = (i) => ({}), Bd = (i) => ({}), Ko = (i) => ({});
function Zo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Jo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Dd(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new Ms({
    props: {
      Icon: br,
      label: (
        /*i18n*/
        i[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    i[32]
  );
  const c = (
    /*#slots*/
    i[30].error
  ), f = Wr(
    c,
    i,
    /*$$scope*/
    i[29],
    No
  );
  return {
    c() {
      e = Mt("div"), Dr(t.$$.fragment), n = at(), s = Mt("span"), o = de(l), r = at(), f && f.c(), wt(e, "class", "clear-status svelte-16nch4a"), wt(s, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      K(u, e, _), qr(t, e, null), K(u, n, _), K(u, s, _), xn(s, o), K(u, r, _), f && f.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && rt(o, l), f && f.p && (!a || _[0] & /*$$scope*/
      536870912) && Ir(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? Lr(
          c,
          /*$$scope*/
          u[29],
          _,
          Md
        ) : Xr(
          /*$$scope*/
          u[29]
        ),
        No
      );
    },
    i(u) {
      a || (pt(t.$$.fragment, u), pt(f, u), a = !0);
    },
    o(u) {
      Bt(t.$$.fragment, u), Bt(f, u), a = !1;
    },
    d(u) {
      u && (N(e), N(n), N(s), N(r)), Er(t), f && f.d(u);
    }
  };
}
function Wd(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Go(i)
  );
  function u(p, C) {
    if (
      /*progress*/
      p[7]
    ) return Xd;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return Yd;
    if (
      /*queue_position*/
      p[2] === 0
    ) return Ed;
  }
  let _ = u(i), d = _ && _(i), h = (
    /*timer*/
    i[5] && ea(i)
  );
  const g = [Rd, Id], b = [];
  function w(p, C) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = w(i)) && (o = b[l] = g[l](i));
  let v = !/*timer*/
  i[5] && aa(i);
  return {
    c() {
      f && f.c(), e = at(), t = Mt("div"), d && d.c(), n = at(), h && h.c(), s = at(), o && o.c(), r = at(), v && v.c(), a = ri(), wt(t, "class", "progress-text svelte-16nch4a"), et(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), et(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, C) {
      f && f.m(p, C), K(p, e, C), K(p, t, C), d && d.m(t, null), xn(t, n), h && h.m(t, null), K(p, s, C), ~l && b[l].m(p, C), K(p, r, C), v && v.m(p, C), K(p, a, C), c = !0;
    },
    p(p, C) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? f ? f.p(p, C) : (f = Go(p), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), _ === (_ = u(p)) && d ? d.p(p, C) : (d && d.d(1), d = _ && _(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? h ? h.p(p, C) : (h = ea(p), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!c || C[0] & /*variant*/
      256) && et(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!c || C[0] & /*variant*/
      256) && et(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let x = l;
      l = w(p), l === x ? ~l && b[l].p(p, C) : (o && (Hl(), Bt(b[x], 1, 1, () => {
        b[x] = null;
      }), Rl()), ~l ? (o = b[l], o ? o.p(p, C) : (o = b[l] = g[l](p), o.c()), pt(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      p[5] ? v && (Hl(), Bt(v, 1, 1, () => {
        v = null;
      }), Rl()) : v ? (v.p(p, C), C[0] & /*timer*/
      32 && pt(v, 1)) : (v = aa(p), v.c(), pt(v, 1), v.m(a.parentNode, a));
    },
    i(p) {
      c || (pt(o), pt(v), c = !0);
    },
    o(p) {
      Bt(o), Bt(v), c = !1;
    },
    d(p) {
      p && (N(e), N(t), N(s), N(r), N(a)), f && f.d(p), d && d.d(), h && h.d(), ~l && b[l].d(p), v && v.d(p);
    }
  };
}
function Go(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Mt("div"), wt(e, "class", "eta-bar svelte-16nch4a"), an(e, "transform", t);
    },
    m(n, s) {
      K(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && an(e, "transform", t);
    },
    d(n) {
      n && N(e);
    }
  };
}
function Ed(i) {
  let e;
  return {
    c() {
      e = de("processing |");
    },
    m(t, n) {
      K(t, e, n);
    },
    p: Pl,
    d(t) {
      t && N(e);
    }
  };
}
function Yd(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = de("queue: "), n = de(t), s = de("/"), l = de(
        /*queue_size*/
        i[3]
      ), o = de(" |");
    },
    m(r, a) {
      K(r, e, a), K(r, n, a), K(r, s, a), K(r, l, a), K(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && rt(n, t), a[0] & /*queue_size*/
      8 && rt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (N(e), N(n), N(s), N(l), N(o));
    }
  };
}
function Xd(i) {
  let e, t = gs(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = $o(Jo(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ri();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      K(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = gs(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Jo(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = $o(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && N(e), Yr(n, s);
    }
  };
}
function Qo(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, u) {
    return (
      /*p*/
      f[41].length != null ? qd : Ld
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = at(), n = de(t), s = de(" | "), o = de(l);
    },
    m(f, u) {
      c.m(f, u), K(f, e, u), K(f, n, u), K(f, s, u), K(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && rt(n, t);
    },
    d(f) {
      f && (N(e), N(n), N(s), N(o)), c.d(f);
    }
  };
}
function Ld(i) {
  let e = Qn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = de(e);
    },
    m(n, s) {
      K(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = Qn(
        /*p*/
        n[41].index || 0
      ) + "") && rt(t, e);
    },
    d(n) {
      n && N(t);
    }
  };
}
function qd(i) {
  let e = Qn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = Qn(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = de(e), n = de("/"), l = de(s);
    },
    m(o, r) {
      K(o, t, r), K(o, n, r), K(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Qn(
        /*p*/
        o[41].index || 0
      ) + "") && rt(t, e), r[0] & /*progress*/
      128 && s !== (s = Qn(
        /*p*/
        o[41].length
      ) + "") && rt(l, s);
    },
    d(o) {
      o && (N(t), N(n), N(l));
    }
  };
}
function $o(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Qo(i)
  );
  return {
    c() {
      t && t.c(), e = ri();
    },
    m(n, s) {
      t && t.m(n, s), K(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Qo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && N(e), t && t.d(n);
    }
  };
}
function ea(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = de(
        /*formatted_timer*/
        i[20]
      ), n = de(t), s = de("s");
    },
    m(l, o) {
      K(l, e, o), K(l, n, o), K(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && rt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && rt(n, t);
    },
    d(l) {
      l && (N(e), N(n), N(s));
    }
  };
}
function Id(i) {
  let e, t;
  return e = new vd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Dr(e.$$.fragment);
    },
    m(n, s) {
      qr(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (pt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Er(e, n);
    }
  };
}
function Rd(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && ta(i)
  );
  return {
    c() {
      e = Mt("div"), t = Mt("div"), r && r.c(), n = at(), s = Mt("div"), l = Mt("div"), wt(t, "class", "progress-level-inner svelte-16nch4a"), wt(l, "class", "progress-bar svelte-16nch4a"), an(l, "width", o), wt(s, "class", "progress-bar-wrap svelte-16nch4a"), wt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      K(a, e, c), xn(e, t), r && r.m(t, null), xn(e, n), xn(e, s), xn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = ta(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && an(l, "width", o);
    },
    i: Pl,
    o: Pl,
    d(a) {
      a && N(e), r && r.d(), i[31](null);
    }
  };
}
function ta(i) {
  let e, t = gs(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = oa(Zo(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ri();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      K(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = gs(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Zo(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = oa(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && N(e), Yr(n, s);
    }
  };
}
function na(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && Hd()
  ), o = (
    /*p*/
    i[41].desc != null && ia(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && sa()
  ), a = (
    /*progress_level*/
    i[14] != null && la(i)
  );
  return {
    c() {
      l && l.c(), e = at(), o && o.c(), t = at(), r && r.c(), n = at(), a && a.c(), s = ri();
    },
    m(c, f) {
      l && l.m(c, f), K(c, e, f), o && o.m(c, f), K(c, t, f), r && r.m(c, f), K(c, n, f), a && a.m(c, f), K(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = ia(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = sa(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = la(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (N(e), N(t), N(n), N(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function Hd(i) {
  let e;
  return {
    c() {
      e = de(" /");
    },
    m(t, n) {
      K(t, e, n);
    },
    d(t) {
      t && N(e);
    }
  };
}
function ia(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = de(e);
    },
    m(n, s) {
      K(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && rt(t, e);
    },
    d(n) {
      n && N(t);
    }
  };
}
function sa(i) {
  let e;
  return {
    c() {
      e = de("-");
    },
    m(t, n) {
      K(t, e, n);
    },
    d(t) {
      t && N(e);
    }
  };
}
function la(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = de(e), n = de("%");
    },
    m(s, l) {
      K(s, t, l), K(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && rt(t, e);
    },
    d(s) {
      s && (N(t), N(n));
    }
  };
}
function oa(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && na(i)
  );
  return {
    c() {
      t && t.c(), e = ri();
    },
    m(n, s) {
      t && t.m(n, s), K(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = na(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && N(e), t && t.d(n);
    }
  };
}
function aa(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = Wr(
    l,
    i,
    /*$$scope*/
    i[29],
    Ko
  );
  return {
    c() {
      e = Mt("p"), t = de(
        /*loading_text*/
        i[9]
      ), n = at(), o && o.c(), wt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      K(r, e, a), xn(e, t), K(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && rt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Ir(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Lr(
          l,
          /*$$scope*/
          r[29],
          a,
          Bd
        ) : Xr(
          /*$$scope*/
          r[29]
        ),
        Ko
      );
    },
    i(r) {
      s || (pt(o, r), s = !0);
    },
    o(r) {
      Bt(o, r), s = !1;
    },
    d(r) {
      r && (N(e), N(n)), o && o.d(r);
    }
  };
}
function Pd(i) {
  let e, t, n, s, l;
  const o = [Wd, Dd], r = [];
  function a(c, f) {
    return (
      /*status*/
      c[4] === "pending" ? 0 : (
        /*status*/
        c[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = o[t](i)), {
    c() {
      e = Mt("div"), n && n.c(), wt(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), et(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), et(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), et(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), et(
        e,
        "border",
        /*border*/
        i[12]
      ), an(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), an(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      K(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (Hl(), Bt(r[u], 1, 1, () => {
        r[u] = null;
      }), Rl()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), pt(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && wt(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && et(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && et(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && et(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && et(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && an(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && an(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (pt(n), l = !0);
    },
    o(c) {
      Bt(n), l = !1;
    },
    d(c) {
      c && N(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var Ad = function(i, e, t, n) {
  function s(l) {
    return l instanceof t ? l : new t(function(o) {
      o(l);
    });
  }
  return new (t || (t = Promise))(function(l, o) {
    function r(f) {
      try {
        c(n.next(f));
      } catch (u) {
        o(u);
      }
    }
    function a(f) {
      try {
        c(n.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function c(f) {
      f.done ? l(f.value) : s(f.value).then(r, a);
    }
    c((n = n.apply(i, e || [])).next());
  });
};
let Ni = [], fl = !1;
function Td(i) {
  return Ad(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ni.push(e), !fl) fl = !0;
      else return;
      yield xd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < Ni.length; s++) {
          const o = Ni[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), fl = !1, Ni = [];
      });
    }
  });
}
function Fd(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = zd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: g = null } = e, { progress: b = null } = e, { variant: w = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: C = !1 } = e, { border: x = !1 } = e, { autoscroll: S } = e, M, k = !1, D = 0, y = 0, W = null, E = null, z = 0, U = null, ie, G = null, ae = !0;
  const I = () => {
    t(0, a = t(27, W = t(19, J = null))), t(25, D = performance.now()), t(26, y = 0), k = !0, Z();
  };
  function Z() {
    requestAnimationFrame(() => {
      t(26, y = (performance.now() - D) / 1e3), k && Z();
    });
  }
  function V() {
    t(26, y = 0), t(0, a = t(27, W = t(19, J = null))), k && (k = !1);
  }
  Sd(() => {
    k && V();
  });
  let J = null;
  function H(q) {
    Vo[q ? "unshift" : "push"](() => {
      G = q, t(16, G), t(7, b), t(14, U), t(15, ie);
    });
  }
  const re = () => {
    o("clear_status");
  };
  function ue(q) {
    Vo[q ? "unshift" : "push"](() => {
      M = q, t(13, M);
    });
  }
  return i.$$set = (q) => {
    "i18n" in q && t(1, r = q.i18n), "eta" in q && t(0, a = q.eta), "queue_position" in q && t(2, c = q.queue_position), "queue_size" in q && t(3, f = q.queue_size), "status" in q && t(4, u = q.status), "scroll_to_output" in q && t(22, _ = q.scroll_to_output), "timer" in q && t(5, d = q.timer), "show_progress" in q && t(6, h = q.show_progress), "message" in q && t(23, g = q.message), "progress" in q && t(7, b = q.progress), "variant" in q && t(8, w = q.variant), "loading_text" in q && t(9, v = q.loading_text), "absolute" in q && t(10, p = q.absolute), "translucent" in q && t(11, C = q.translucent), "border" in q && t(12, x = q.border), "autoscroll" in q && t(24, S = q.autoscroll), "$$scope" in q && t(29, l = q.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, E = (performance.now() - D) / 1e3 + a), t(19, J = E.toFixed(1)), t(27, W = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, z = E === null || E <= 0 || !y ? null : Math.min(y / E, 1)), i.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, ae = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, U = b.map((q) => {
      if (q.index != null && q.length != null)
        return q.index / q.length;
      if (q.progress != null)
        return q.progress;
    })) : t(14, U = null), U ? (t(15, ie = U[U.length - 1]), G && (ie === 0 ? t(16, G.style.transition = "0", G) : t(16, G.style.transition = "150ms", G))) : t(15, ie = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? I() : V()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && M && _ && (u === "pending" || u === "complete") && Td(M, S), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = y.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    d,
    h,
    b,
    w,
    v,
    p,
    C,
    x,
    M,
    U,
    ie,
    G,
    z,
    ae,
    J,
    n,
    o,
    _,
    g,
    S,
    D,
    y,
    W,
    E,
    l,
    s,
    H,
    re,
    ue
  ];
}
class Ud extends kd {
  constructor(e) {
    super(), yd(
      this,
      e,
      Fd,
      Pd,
      Cd,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const { setContext: Xb, getContext: jd } = window.__gradio__svelte__internal, Od = "WORKER_PROXY_CONTEXT_KEY";
function Rr() {
  return jd(Od);
}
function Vd(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Hr(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function Pr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!Vd(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Nd(i) {
  if (i == null || !Pr(i))
    return i;
  const e = Rr();
  if (e == null)
    return i;
  const n = new URL(i, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((s) => {
    if (s.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const l = new Blob([s.body], {
      type: Hr(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: Kd,
  assign: bs,
  check_outros: Ar,
  compute_rest_props: ra,
  create_slot: Ql,
  detach: Ys,
  element: Tr,
  empty: Fr,
  exclude_internal_props: Zd,
  get_all_dirty_from_scope: $l,
  get_slot_changes: eo,
  get_spread_update: Ur,
  group_outros: jr,
  init: Jd,
  insert: Xs,
  listen: Or,
  prevent_default: Gd,
  safe_not_equal: Qd,
  set_attributes: ps,
  transition_in: Wn,
  transition_out: En,
  update_slot_base: to
} = window.__gradio__svelte__internal, { createEventDispatcher: $d } = window.__gradio__svelte__internal;
function em(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Ql(
    o,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      i[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      i[1]
    ) },
    /*$$restProps*/
    i[6]
  ], c = {};
  for (let f = 0; f < a.length; f += 1)
    c = bs(c, a[f]);
  return {
    c() {
      e = Tr("a"), r && r.c(), ps(e, c);
    },
    m(f, u) {
      Xs(f, e, u), r && r.m(e, null), n = !0, s || (l = Or(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && to(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? eo(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : $l(
          /*$$scope*/
          f[7]
        ),
        null
      ), ps(e, c = Ur(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          f[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ]));
    },
    i(f) {
      n || (Wn(r, f), n = !0);
    },
    o(f) {
      En(r, f), n = !1;
    },
    d(f) {
      f && Ys(e), r && r.d(f), s = !1, l();
    }
  };
}
function tm(i) {
  let e, t, n, s;
  const l = [im, nm], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Fr();
    },
    m(a, c) {
      o[e].m(a, c), Xs(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (jr(), En(o[f], 1, 1, () => {
        o[f] = null;
      }), Ar(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Wn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Wn(t), s = !0);
    },
    o(a) {
      En(t), s = !1;
    },
    d(a) {
      a && Ys(n), o[e].d(a);
    }
  };
}
function nm(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Ql(
    l,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let r = [
    /*$$restProps*/
    i[6],
    { href: (
      /*href*/
      i[0]
    ) }
  ], a = {};
  for (let c = 0; c < r.length; c += 1)
    a = bs(a, r[c]);
  return {
    c() {
      e = Tr("a"), o && o.c(), ps(e, a);
    },
    m(c, f) {
      Xs(c, e, f), o && o.m(e, null), t = !0, n || (s = Or(e, "click", Gd(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && to(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? eo(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : $l(
          /*$$scope*/
          c[7]
        ),
        null
      ), ps(e, a = Ur(r, [
        f & /*$$restProps*/
        64 && /*$$restProps*/
        c[6],
        (!t || f & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) }
      ]));
    },
    i(c) {
      t || (Wn(o, c), t = !0);
    },
    o(c) {
      En(o, c), t = !1;
    },
    d(c) {
      c && Ys(e), o && o.d(c), n = !1, s();
    }
  };
}
function im(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Ql(
    t,
    i,
    /*$$scope*/
    i[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(s, l) {
      n && n.m(s, l), e = !0;
    },
    p(s, l) {
      n && n.p && (!e || l & /*$$scope*/
      128) && to(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? eo(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : $l(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (Wn(n, s), e = !0);
    },
    o(s) {
      En(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function sm(i) {
  let e, t, n, s, l;
  const o = [tm, em], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && Pr(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Fr();
    },
    m(c, f) {
      r[t].m(c, f), Xs(c, s, f), l = !0;
    },
    p(c, [f]) {
      let u = t;
      t = a(c, f), t === u ? r[t].p(c, f) : (jr(), En(r[u], 1, 1, () => {
        r[u] = null;
      }), Ar(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Wn(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (Wn(n), l = !0);
    },
    o(c) {
      En(n), l = !1;
    },
    d(c) {
      c && Ys(s), r[t].d(c);
    }
  };
}
function lm(i, e, t) {
  const n = ["href", "download"];
  let s = ra(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(h, g, b, w) {
    function v(p) {
      return p instanceof b ? p : new b(function(C) {
        C(p);
      });
    }
    return new (b || (b = Promise))(function(p, C) {
      function x(k) {
        try {
          M(w.next(k));
        } catch (D) {
          C(D);
        }
      }
      function S(k) {
        try {
          M(w.throw(k));
        } catch (D) {
          C(D);
        }
      }
      function M(k) {
        k.done ? p(k.value) : v(k.value).then(x, S);
      }
      M((w = w.apply(h, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = $d();
  let u = !1;
  const _ = Rr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const g = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: g,
        headers: {},
        query_string: ""
      }).then((b) => {
        if (b.status !== 200)
          throw new Error(`Failed to get file ${g} from the Wasm worker.`);
        const w = new Blob(
          [b.body],
          {
            type: Hr(b.headers, "content-type")
          }
        ), v = URL.createObjectURL(w), p = document.createElement("a");
        p.href = v, p.download = c, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (h) => {
    e = bs(bs({}, e), Zd(h)), t(6, s = ra(e, n)), "href" in h && t(0, a = h.href), "download" in h && t(1, c = h.download), "$$scope" in h && t(7, o = h.$$scope);
  }, [
    a,
    c,
    u,
    f,
    _,
    d,
    s,
    o,
    l
  ];
}
class om extends Kd {
  constructor(e) {
    super(), Jd(this, e, lm, sm, Qd, { href: 0, download: 1 });
  }
}
var am = Object.defineProperty, rm = (i, e, t) => e in i ? am(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Xt = (i, e, t) => (rm(i, typeof e != "symbol" ? e + "" : e, t), t), Vr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, gi = (i, e, t) => (Vr(i, e, "read from private field"), t ? t.call(i) : e.get(i)), cm = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, fm = (i, e, t, n) => (Vr(i, e, "write to private field"), e.set(i, t), t), sn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Nr(i, e) {
  return i.map(
    (t) => new um({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class um {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: s,
    blob: l,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    Xt(this, "path"), Xt(this, "url"), Xt(this, "orig_name"), Xt(this, "size"), Xt(this, "blob"), Xt(this, "is_stream"), Xt(this, "mime_type"), Xt(this, "alt_text"), Xt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Lb extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = gi(this, sn) + t; ; ) {
          const s = t.indexOf(`
`), l = e.allowCR ? t.indexOf("\r") : -1;
          if (l !== -1 && l !== t.length - 1 && (s === -1 || s - 1 > l)) {
            n.enqueue(t.slice(0, l)), t = t.slice(l + 1);
            continue;
          }
          if (s === -1)
            break;
          const o = t[s - 1] === "\r" ? s - 1 : s;
          n.enqueue(t.slice(0, o)), t = t.slice(s + 1);
        }
        fm(this, sn, t);
      },
      flush: (t) => {
        if (gi(this, sn) === "")
          return;
        const n = e.allowCR && gi(this, sn).endsWith("\r") ? gi(this, sn).slice(0, -1) : gi(this, sn);
        t.enqueue(n);
      }
    }), cm(this, sn, "");
  }
}
sn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: hm,
  append: Pe,
  attr: kn,
  detach: Kr,
  element: yn,
  init: _m,
  insert: Zr,
  noop: ca,
  safe_not_equal: dm,
  set_data: ws,
  set_style: ul,
  space: Al,
  text: $n,
  toggle_class: fa
} = window.__gradio__svelte__internal, { onMount: mm, createEventDispatcher: gm, onDestroy: bm } = window.__gradio__svelte__internal;
function ua(i) {
  let e, t, n, s, l = xi(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = yn("div"), t = yn("span"), n = yn("div"), s = yn("progress"), o = $n(l), a = Al(), c = yn("span"), u = $n(f), ul(s, "visibility", "hidden"), ul(s, "height", "0"), ul(s, "width", "0"), s.value = r = xi(
        /*file_to_display*/
        i[2]
      ), kn(s, "max", "100"), kn(s, "class", "svelte-cr2edf"), kn(n, "class", "progress-bar svelte-cr2edf"), kn(c, "class", "file-name svelte-cr2edf"), kn(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Zr(_, e, d), Pe(e, t), Pe(t, n), Pe(n, s), Pe(s, o), Pe(e, a), Pe(e, c), Pe(c, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && l !== (l = xi(
        /*file_to_display*/
        _[2]
      ) + "") && ws(o, l), d & /*file_to_display*/
      4 && r !== (r = xi(
        /*file_to_display*/
        _[2]
      )) && (s.value = r), d & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      _[2].orig_name + "") && ws(u, f);
    },
    d(_) {
      _ && Kr(e);
    }
  };
}
function pm(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && ua(i)
  );
  return {
    c() {
      e = yn("div"), t = yn("span"), n = $n("Uploading "), l = $n(s), o = Al(), a = $n(r), c = $n("..."), f = Al(), u && u.c(), kn(t, "class", "uploading svelte-cr2edf"), kn(e, "class", "wrap svelte-cr2edf"), fa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      Zr(_, e, d), Pe(e, t), Pe(t, n), Pe(t, l), Pe(t, o), Pe(t, a), Pe(t, c), Pe(e, f), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      _[0].length + "") && ws(l, s), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && ws(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = ua(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && fa(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: ca,
    o: ca,
    d(_) {
      _ && Kr(e), u && u.d();
    }
  };
}
function xi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function wm(i) {
  let e = 0;
  return i.forEach((t) => {
    e += xi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function vm(i, e, t) {
  var n = this && this.__awaiter || function(g, b, w, v) {
    function p(C) {
      return C instanceof w ? C : new w(function(x) {
        x(C);
      });
    }
    return new (w || (w = Promise))(function(C, x) {
      function S(D) {
        try {
          k(v.next(D));
        } catch (y) {
          x(y);
        }
      }
      function M(D) {
        try {
          k(v.throw(D));
        } catch (y) {
          x(y);
        }
      }
      function k(D) {
        D.done ? C(D.value) : p(D.value).then(S, M);
      }
      k((v = v.apply(g, b || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, _ = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const d = gm();
  function h(g, b) {
    t(0, _ = _.map((w) => (w.orig_name === g && (w.progress += b), w)));
  }
  return mm(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(g.data);
        c || t(1, c = !0), b.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, f = b), h(b.orig_name, b.chunk_size));
      });
    };
  })), bm(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && wm(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = f || _[0]);
  }, [
    _,
    c,
    u,
    s,
    l,
    o,
    r,
    f
  ];
}
class km extends hm {
  constructor(e) {
    super(), _m(this, e, vm, pm, dm, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: ym,
  append: ha,
  attr: Be,
  binding_callbacks: Cm,
  bubble: _n,
  check_outros: Jr,
  create_component: xm,
  create_slot: Gr,
  destroy_component: Sm,
  detach: Ls,
  element: Tl,
  empty: Qr,
  get_all_dirty_from_scope: $r,
  get_slot_changes: ec,
  group_outros: tc,
  init: zm,
  insert: qs,
  listen: Oe,
  mount_component: Mm,
  prevent_default: dn,
  run_all: Bm,
  safe_not_equal: Dm,
  set_style: nc,
  space: Wm,
  stop_propagation: mn,
  toggle_class: ke,
  transition_in: rn,
  transition_out: Yn,
  update_slot_base: ic
} = window.__gradio__svelte__internal, { createEventDispatcher: Em, tick: Ym } = window.__gradio__svelte__internal;
function Xm(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = Gr(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Tl("button"), d && d.c(), t = Wm(), n = Tl("input"), Be(n, "aria-label", "file upload"), Be(n, "data-testid", "file-upload"), Be(n, "type", "file"), Be(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, Be(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), Be(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Be(n, "class", "svelte-1s26xmt"), Be(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Be(e, "class", "svelte-1s26xmt"), ke(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ke(
        e,
        "center",
        /*center*/
        i[4]
      ), ke(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ke(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ke(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), nc(e, "height", "100%");
    },
    m(h, g) {
      qs(h, e, g), d && d.m(e, null), ha(e, t), ha(e, n), i[34](n), c = !0, f || (u = [
        Oe(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Oe(e, "drag", mn(dn(
          /*drag_handler*/
          i[27]
        ))),
        Oe(e, "dragstart", mn(dn(
          /*dragstart_handler*/
          i[28]
        ))),
        Oe(e, "dragend", mn(dn(
          /*dragend_handler*/
          i[29]
        ))),
        Oe(e, "dragover", mn(dn(
          /*dragover_handler*/
          i[30]
        ))),
        Oe(e, "dragenter", mn(dn(
          /*dragenter_handler*/
          i[31]
        ))),
        Oe(e, "dragleave", mn(dn(
          /*dragleave_handler*/
          i[32]
        ))),
        Oe(e, "drop", mn(dn(
          /*drop_handler*/
          i[33]
        ))),
        Oe(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Oe(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Oe(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Oe(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(h, g) {
      d && d.p && (!c || g[0] & /*$$scope*/
      33554432) && ic(
        d,
        _,
        h,
        /*$$scope*/
        h[25],
        c ? ec(
          _,
          /*$$scope*/
          h[25],
          g,
          null
        ) : $r(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!c || g[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      h[16] || void 0)) && Be(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "directory" || void 0)) && Be(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && Be(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      h[9] ? -1 : 0)) && Be(e, "tabindex", a), (!c || g[0] & /*hidden*/
      512) && ke(
        e,
        "hidden",
        /*hidden*/
        h[9]
      ), (!c || g[0] & /*center*/
      16) && ke(
        e,
        "center",
        /*center*/
        h[4]
      ), (!c || g[0] & /*boundedheight*/
      8) && ke(
        e,
        "boundedheight",
        /*boundedheight*/
        h[3]
      ), (!c || g[0] & /*flex*/
      32) && ke(
        e,
        "flex",
        /*flex*/
        h[5]
      ), (!c || g[0] & /*disable_click*/
      128) && ke(
        e,
        "disable_click",
        /*disable_click*/
        h[7]
      );
    },
    i(h) {
      c || (rn(d, h), c = !0);
    },
    o(h) {
      Yn(d, h), c = !1;
    },
    d(h) {
      h && Ls(e), d && d.d(h), i[34](null), f = !1, Bm(u);
    }
  };
}
function Lm(i) {
  let e, t, n = !/*hidden*/
  i[9] && _a(i);
  return {
    c() {
      n && n.c(), e = Qr();
    },
    m(s, l) {
      n && n.m(s, l), qs(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (tc(), Yn(n, 1, 1, () => {
        n = null;
      }), Jr()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && rn(n, 1)) : (n = _a(s), n.c(), rn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (rn(n), t = !0);
    },
    o(s) {
      Yn(n), t = !1;
    },
    d(s) {
      s && Ls(e), n && n.d(s);
    }
  };
}
function qm(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Gr(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Tl("button"), r && r.c(), Be(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Be(e, "class", "svelte-1s26xmt"), ke(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ke(
        e,
        "center",
        /*center*/
        i[4]
      ), ke(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ke(
        e,
        "flex",
        /*flex*/
        i[5]
      ), nc(e, "height", "100%");
    },
    m(a, c) {
      qs(a, e, c), r && r.m(e, null), n = !0, s || (l = Oe(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && ic(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? ec(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : $r(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Be(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && ke(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && ke(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && ke(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && ke(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (rn(r, a), n = !0);
    },
    o(a) {
      Yn(r, a), n = !1;
    },
    d(a) {
      a && Ls(e), r && r.d(a), s = !1, l();
    }
  };
}
function _a(i) {
  let e, t;
  return e = new km({
    props: {
      root: (
        /*root*/
        i[8]
      ),
      upload_id: (
        /*upload_id*/
        i[14]
      ),
      files: (
        /*file_data*/
        i[15]
      ),
      stream_handler: (
        /*stream_handler*/
        i[11]
      )
    }
  }), {
    c() {
      xm(e.$$.fragment);
    },
    m(n, s) {
      Mm(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*root*/
      256 && (l.root = /*root*/
      n[8]), s[0] & /*upload_id*/
      16384 && (l.upload_id = /*upload_id*/
      n[14]), s[0] & /*file_data*/
      32768 && (l.files = /*file_data*/
      n[15]), s[0] & /*stream_handler*/
      2048 && (l.stream_handler = /*stream_handler*/
      n[11]), e.$set(l);
    },
    i(n) {
      t || (rn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sm(e, n);
    }
  };
}
function Im(i) {
  let e, t, n, s;
  const l = [qm, Lm, Xm], o = [];
  function r(a, c) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Qr();
    },
    m(a, c) {
      o[e].m(a, c), qs(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (tc(), Yn(o[f], 1, 1, () => {
        o[f] = null;
      }), Jr(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), rn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (rn(t), s = !0);
    },
    o(a) {
      Yn(t), s = !1;
    },
    d(a) {
      a && Ls(n), o[e].d(a);
    }
  };
}
function Rm(i, e, t) {
  if (!i || i === "*" || i === "file/*" || Array.isArray(i) && i.some((s) => s === "*" || s === "file/*"))
    return !0;
  let n;
  if (typeof i == "string")
    n = i.split(",").map((s) => s.trim());
  else if (Array.isArray(i))
    n = i;
  else
    return !1;
  return n.includes(e) || n.some((s) => {
    const [l] = s.split("/").map((o) => o.trim());
    return s.endsWith("/*") && t.startsWith(l + "/");
  });
}
function Hm(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(X, P, T, te) {
    function L(ct) {
      return ct instanceof T ? ct : new T(function(vt) {
        vt(ct);
      });
    }
    return new (T || (T = Promise))(function(ct, vt) {
      function Wt(pe) {
        try {
          ft(te.next(pe));
        } catch (Et) {
          vt(Et);
        }
      }
      function Ee(pe) {
        try {
          ft(te.throw(pe));
        } catch (Et) {
          vt(Et);
        }
      }
      function ft(pe) {
        pe.done ? ct(pe.value) : L(pe.value).then(Wt, Ee);
      }
      ft((te = te.apply(X, P || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: g = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: w = null } = e, { show_progress: v = !0 } = e, { max_file_size: p = null } = e, { upload: C } = e, { stream_handler: x } = e, S, M, k;
  const D = Em(), y = ["image", "video", "audio", "text", "file"], W = (X) => X.startsWith(".") || X.endsWith("/*") ? X : y.includes(X) ? X + "/*" : "." + X;
  function E() {
    t(20, r = !r);
  }
  function z() {
    navigator.clipboard.read().then((X) => l(this, void 0, void 0, function* () {
      for (let P = 0; P < X.length; P++) {
        const T = X[P].types.find((te) => te.startsWith("image/"));
        if (T) {
          X[P].getType(T).then((te) => l(this, void 0, void 0, function* () {
            const L = new File([te], `clipboard.${T.replace("image/", "")}`);
            yield G([L]);
          }));
          break;
        }
      }
    }));
  }
  function U() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function ie(X) {
    return l(this, void 0, void 0, function* () {
      yield Ym(), t(14, S = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const P = yield C(X, d, S, p ?? 1 / 0);
        return D("load", u === "single" ? P == null ? void 0 : P[0] : P), t(1, b = !1), P || [];
      } catch (P) {
        return D("error", P.message), t(1, b = !1), [];
      }
    });
  }
  function G(X) {
    return l(this, void 0, void 0, function* () {
      if (!X.length)
        return;
      let P = X.map((T) => new File([T], T instanceof File ? T.name : "file", { type: T.type }));
      return t(15, M = yield Nr(P)), yield ie(M);
    });
  }
  function ae(X) {
    return l(this, void 0, void 0, function* () {
      const P = X.target;
      if (P.files)
        if (g != "blob")
          yield G(Array.from(P.files));
        else {
          if (u === "single") {
            D("load", P.files[0]);
            return;
          }
          D("load", P.files);
        }
    });
  }
  function I(X) {
    return l(this, void 0, void 0, function* () {
      var P;
      if (t(20, r = !1), !(!((P = X.dataTransfer) === null || P === void 0) && P.files)) return;
      const T = Array.from(X.dataTransfer.files).filter((te) => {
        const L = "." + te.name.split(".").pop();
        return L && Rm(k, L, te.type) || (L && Array.isArray(o) ? o.includes(L) : L === o) ? !0 : (D("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield G(T);
    });
  }
  function Z(X) {
    _n.call(this, i, X);
  }
  function V(X) {
    _n.call(this, i, X);
  }
  function J(X) {
    _n.call(this, i, X);
  }
  function H(X) {
    _n.call(this, i, X);
  }
  function re(X) {
    _n.call(this, i, X);
  }
  function ue(X) {
    _n.call(this, i, X);
  }
  function q(X) {
    _n.call(this, i, X);
  }
  function xe(X) {
    Cm[X ? "unshift" : "push"](() => {
      w = X, t(2, w);
    });
  }
  return i.$$set = (X) => {
    "filetype" in X && t(0, o = X.filetype), "dragging" in X && t(20, r = X.dragging), "boundedheight" in X && t(3, a = X.boundedheight), "center" in X && t(4, c = X.center), "flex" in X && t(5, f = X.flex), "file_count" in X && t(6, u = X.file_count), "disable_click" in X && t(7, _ = X.disable_click), "root" in X && t(8, d = X.root), "hidden" in X && t(9, h = X.hidden), "format" in X && t(21, g = X.format), "uploading" in X && t(1, b = X.uploading), "hidden_upload" in X && t(2, w = X.hidden_upload), "show_progress" in X && t(10, v = X.show_progress), "max_file_size" in X && t(22, p = X.max_file_size), "upload" in X && t(23, C = X.upload), "stream_handler" in X && t(11, x = X.stream_handler), "$$scope" in X && t(25, s = X.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, k = null) : typeof o == "string" ? t(16, k = W(o)) : (t(0, o = o.map(W)), t(16, k = o.join(", "))));
  }, [
    o,
    b,
    w,
    a,
    c,
    f,
    u,
    _,
    d,
    h,
    v,
    x,
    z,
    U,
    S,
    M,
    k,
    E,
    ae,
    I,
    r,
    g,
    p,
    C,
    G,
    s,
    n,
    Z,
    V,
    J,
    H,
    re,
    ue,
    q,
    xe
  ];
}
class Pm extends ym {
  constructor(e) {
    super(), zm(
      this,
      e,
      Hm,
      Im,
      Dm,
      {
        filetype: 0,
        dragging: 20,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 21,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 22,
        upload: 23,
        stream_handler: 11,
        paste_clipboard: 12,
        open_file_upload: 13,
        load_files: 24
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[12];
  }
  get open_file_upload() {
    return this.$$.ctx[13];
  }
  get load_files() {
    return this.$$.ctx[24];
  }
}
const {
  SvelteComponent: Am,
  append: Ki,
  attr: hl,
  create_component: Tm,
  destroy_component: Fm,
  detach: Um,
  element: _l,
  init: jm,
  insert: Om,
  listen: Vm,
  mount_component: Nm,
  noop: Km,
  safe_not_equal: Zm,
  set_style: Jm,
  space: Gm,
  text: Qm,
  transition_in: $m,
  transition_out: e1
} = window.__gradio__svelte__internal, { createEventDispatcher: t1 } = window.__gradio__svelte__internal;
function n1(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new kr({}), {
    c() {
      e = _l("button"), t = _l("div"), n = _l("span"), Tm(s.$$.fragment), l = Gm(), r = Qm(o), hl(n, "class", "icon-wrap svelte-fjcd9c"), hl(t, "class", "wrap svelte-fjcd9c"), hl(e, "class", "svelte-fjcd9c"), Jm(e, "height", "100%");
    },
    m(u, _) {
      Om(u, e, _), Ki(e, t), Ki(t, n), Nm(s, n, null), Ki(t, l), Ki(t, r), a = !0, c || (f = Vm(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: Km,
    i(u) {
      a || ($m(s.$$.fragment, u), a = !0);
    },
    o(u) {
      e1(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Um(e), Fm(s), c = !1, f();
    }
  };
}
function i1(i) {
  const e = t1();
  return [e, () => e("click")];
}
class s1 extends Am {
  constructor(e) {
    super(), jm(this, e, i1, n1, Zm, {});
  }
}
function l1() {
  return navigator.mediaDevices.enumerateDevices();
}
function o1(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function da(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (o1(l, e), l));
}
function a1(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: r1,
  action_destroyer: c1,
  add_render_callback: f1,
  append: At,
  attr: be,
  binding_callbacks: u1,
  check_outros: Mi,
  create_component: ci,
  create_in_transition: h1,
  destroy_component: fi,
  destroy_each: _1,
  detach: Ae,
  element: Ze,
  empty: no,
  ensure_array_like: ma,
  group_outros: Bi,
  init: d1,
  insert: Te,
  listen: vs,
  mount_component: ui,
  noop: io,
  run_all: m1,
  safe_not_equal: g1,
  set_data: sc,
  set_input_value: Fl,
  space: Yi,
  stop_propagation: b1,
  text: lc,
  toggle_class: Zi,
  transition_in: ye,
  transition_out: We
} = window.__gradio__svelte__internal, { createEventDispatcher: p1, onMount: w1 } = window.__gradio__svelte__internal;
function ga(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function v1(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const _ = [C1, y1], d = [];
  function h(w, v) {
    return (
      /*mode*/
      w[1] === "video" || /*streaming*/
      w[0] ? 0 : 1
    );
  }
  n = h(i), s = d[n] = _[n](i);
  let g = !/*recording*/
  i[8] && ba(i), b = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && pa(i)
  );
  return {
    c() {
      e = Ze("div"), t = Ze("button"), s.c(), o = Yi(), g && g.c(), r = Yi(), b && b.c(), a = no(), be(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), be(t, "class", "svelte-8hqvb6"), be(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(w, v) {
      Te(w, e, v), At(e, t), d[n].m(t, null), At(e, o), g && g.m(e, null), Te(w, r, v), b && b.m(w, v), Te(w, a, v), c = !0, f || (u = vs(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(w, v) {
      let p = n;
      n = h(w), n === p ? d[n].p(w, v) : (Bi(), We(d[p], 1, 1, () => {
        d[p] = null;
      }), Mi(), s = d[n], s ? s.p(w, v) : (s = d[n] = _[n](w), s.c()), ye(s, 1), s.m(t, null)), (!c || v[0] & /*mode*/
      2 && l !== (l = /*mode*/
      w[1] === "image" ? "capture photo" : "start recording")) && be(t, "aria-label", l), /*recording*/
      w[8] ? g && (Bi(), We(g, 1, 1, () => {
        g = null;
      }), Mi()) : g ? (g.p(w, v), v[0] & /*recording*/
      256 && ye(g, 1)) : (g = ba(w), g.c(), ye(g, 1), g.m(e, null)), /*options_open*/
      w[10] && /*selected_device*/
      w[7] ? b ? (b.p(w, v), v[0] & /*options_open, selected_device*/
      1152 && ye(b, 1)) : (b = pa(w), b.c(), ye(b, 1), b.m(a.parentNode, a)) : b && (Bi(), We(b, 1, 1, () => {
        b = null;
      }), Mi());
    },
    i(w) {
      c || (ye(s), ye(g), ye(b), c = !0);
    },
    o(w) {
      We(s), We(g), We(b), c = !1;
    },
    d(w) {
      w && (Ae(e), Ae(r), Ae(a)), d[n].d(), g && g.d(), b && b.d(w), f = !1, u();
    }
  };
}
function k1(i) {
  let e, t, n, s;
  return t = new s1({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ze("div"), ci(t.$$.fragment), be(e, "title", "grant webcam access");
    },
    m(l, o) {
      Te(l, e, o), ui(t, e, null), s = !0;
    },
    p: io,
    i(l) {
      s || (ye(t.$$.fragment, l), l && (n || f1(() => {
        n = h1(e, cd, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      We(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && Ae(e), fi(t);
    }
  };
}
function y1(i) {
  let e, t, n;
  return t = new Uu({}), {
    c() {
      e = Ze("div"), ci(t.$$.fragment), be(e, "class", "icon svelte-8hqvb6"), be(e, "title", "capture photo");
    },
    m(s, l) {
      Te(s, e, l), ui(t, e, null), n = !0;
    },
    p: io,
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      We(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), fi(t);
    }
  };
}
function C1(i) {
  let e, t, n, s;
  const l = [S1, x1], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = no();
    },
    m(a, c) {
      o[e].m(a, c), Te(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (Bi(), We(o[f], 1, 1, () => {
        o[f] = null;
      }), Mi(), t = o[e], t || (t = o[e] = l[e](a), t.c()), ye(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ye(t), s = !0);
    },
    o(a) {
      We(t), s = !1;
    },
    d(a) {
      a && Ae(n), o[e].d(a);
    }
  };
}
function x1(i) {
  let e, t, n;
  return t = new Gu({}), {
    c() {
      e = Ze("div"), ci(t.$$.fragment), be(e, "class", "icon red svelte-8hqvb6"), be(e, "title", "start recording");
    },
    m(s, l) {
      Te(s, e, l), ui(t, e, null), n = !0;
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      We(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), fi(t);
    }
  };
}
function S1(i) {
  let e, t, n;
  return t = new r_({}), {
    c() {
      e = Ze("div"), ci(t.$$.fragment), be(e, "class", "icon red svelte-8hqvb6"), be(e, "title", "stop recording");
    },
    m(s, l) {
      Te(s, e, l), ui(t, e, null), n = !0;
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      We(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), fi(t);
    }
  };
}
function ba(i) {
  let e, t, n, s, l;
  return t = new Gl({}), {
    c() {
      e = Ze("button"), ci(t.$$.fragment), be(e, "class", "icon svelte-8hqvb6"), be(e, "aria-label", "select input source");
    },
    m(o, r) {
      Te(o, e, r), ui(t, e, null), n = !0, s || (l = vs(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: io,
    i(o) {
      n || (ye(t.$$.fragment, o), n = !0);
    },
    o(o) {
      We(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ae(e), fi(t), s = !1, l();
    }
  };
}
function pa(i) {
  let e, t, n, s, l, o, r;
  n = new Gl({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? M1 : z1
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = Ze("select"), t = Ze("button"), ci(n.$$.fragment), s = Yi(), f.c(), be(t, "class", "inset-icon svelte-8hqvb6"), be(e, "class", "select-wrap svelte-8hqvb6"), be(e, "aria-label", "select source");
    },
    m(u, _) {
      Te(u, e, _), At(e, t), ui(n, t, null), At(t, s), f.m(e, null), l = !0, o || (r = [
        vs(t, "click", b1(
          /*click_handler_2*/
          i[22]
        )),
        c1(so.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        vs(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(u, _) {
      c === (c = a(u)) && f ? f.p(u, _) : (f.d(1), f = c(u), f && (f.c(), f.m(e, null)));
    },
    i(u) {
      l || (ye(n.$$.fragment, u), l = !0);
    },
    o(u) {
      We(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && Ae(e), fi(n), f.d(), o = !1, m1(r);
    }
  };
}
function z1(i) {
  let e, t = ma(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = wa(ga(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = no();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      Te(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = ma(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = ga(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = wa(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && Ae(e), _1(n, s);
    }
  };
}
function M1(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ze("option"), n = lc(t), e.__value = "", Fl(e, e.__value), be(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      Te(s, e, l), At(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && sc(n, t);
    },
    d(s) {
      s && Ae(e);
    }
  };
}
function wa(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = Ze("option"), n = lc(t), s = Yi(), e.__value = l = /*device*/
      i[32].deviceId, Fl(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, be(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Te(r, e, a), At(e, n), At(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && sc(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, Fl(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Ae(e);
    }
  };
}
function B1(i) {
  let e, t, n, s, l, o;
  const r = [k1, v1], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = Ze("div"), t = Ze("video"), n = Yi(), l.c(), be(t, "class", "svelte-8hqvb6"), Zi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Zi(t, "hide", !/*webcam_accessed*/
      i[9]), be(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      Te(f, e, u), At(e, t), i[19](t), At(e, n), a[s].m(e, null), o = !0;
    },
    p(f, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Zi(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Zi(t, "hide", !/*webcam_accessed*/
      f[9]);
      let _ = s;
      s = c(f), s === _ ? a[s].p(f, u) : (Bi(), We(a[_], 1, 1, () => {
        a[_] = null;
      }), Mi(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), ye(l, 1), l.m(e, null));
    },
    i(f) {
      o || (ye(l), o = !0);
    },
    o(f) {
      We(l), o = !1;
    },
    d(f) {
      f && Ae(e), i[19](null), a[s].d();
    }
  };
}
function so(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function D1(i, e, t) {
  var n = this && this.__awaiter || function(I, Z, V, J) {
    function H(re) {
      return re instanceof V ? re : new V(function(ue) {
        ue(re);
      });
    }
    return new (V || (V = Promise))(function(re, ue) {
      function q(P) {
        try {
          X(J.next(P));
        } catch (T) {
          ue(T);
        }
      }
      function xe(P) {
        try {
          X(J.throw(P));
        } catch (T) {
          ue(T);
        }
      }
      function X(P) {
        P.done ? re(P.value) : H(P.value).then(q, xe);
      }
      X((J = J.apply(I, Z || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: h } = e, { upload: g } = e;
  const b = p1();
  w1(() => r = document.createElement("canvas"));
  const w = (I) => n(void 0, void 0, void 0, function* () {
    const V = I.target.value;
    yield da(d, s, V).then((J) => n(void 0, void 0, void 0, function* () {
      S = J, t(7, o = l.find((H) => H.deviceId === V) || null), t(10, E = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        da(d, s).then((I) => n(this, void 0, void 0, function* () {
          t(9, y = !0), t(6, l = yield l1()), S = I;
        })).then(() => a1(l)).then((I) => {
          t(6, l = I);
          const Z = S.getTracks().map((V) => {
            var J;
            return (J = V.getSettings()) === null || J === void 0 ? void 0 : J.deviceId;
          })[0];
          t(7, o = Z && I.find((V) => V.deviceId === Z) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && b("error", h("image.no_webcam_support"));
      } catch (I) {
        if (I instanceof DOMException && I.name == "NotAllowedError")
          b("error", h("image.allow_webcam_access"));
        else
          throw I;
      }
    });
  }
  function p() {
    var I = r.getContext("2d");
    (!a || a && C) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, I.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), _ && (I.scale(-1, 1), I.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (Z) => {
        b(a ? "stream" : "capture", Z);
      },
      "image/png",
      0.8
    ));
  }
  let C = !1, x = [], S, M, k;
  function D() {
    if (C) {
      k.stop();
      let I = new Blob(x, { type: M }), Z = new FileReader();
      Z.onload = function(V) {
        return n(this, void 0, void 0, function* () {
          var J;
          if (V.target) {
            let H = new File([I], "sample." + M.substring(6));
            const re = yield Nr([H]);
            let ue = ((J = yield g(re, f)) === null || J === void 0 ? void 0 : J.filter(Boolean))[0];
            b("capture", ue), b("stop_recording");
          }
        });
      }, Z.readAsDataURL(I);
    } else {
      b("start_recording"), x = [];
      let I = ["video/webm", "video/mp4"];
      for (let Z of I)
        if (MediaRecorder.isTypeSupported(Z)) {
          M = Z;
          break;
        }
      if (M === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      k = new MediaRecorder(S, { mimeType: M }), k.addEventListener("dataavailable", function(Z) {
        x.push(Z.data);
      }), k.start(200);
    }
    t(8, C = !C);
  }
  let y = !1;
  function W() {
    u === "image" && a && t(8, C = !C), u === "image" ? p() : D(), !C && S && (S.getTracks().forEach((I) => I.stop()), t(5, s.srcObject = null, s), t(9, y = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && p();
    },
    500
  );
  let E = !1;
  function z(I) {
    I.preventDefault(), I.stopPropagation(), t(10, E = !1);
  }
  function U(I) {
    u1[I ? "unshift" : "push"](() => {
      s = I, t(5, s);
    });
  }
  const ie = async () => v(), G = () => t(10, E = !0), ae = () => t(10, E = !1);
  return i.$$set = (I) => {
    "streaming" in I && t(0, a = I.streaming), "pending" in I && t(15, c = I.pending), "root" in I && t(16, f = I.root), "mode" in I && t(1, u = I.mode), "mirror_webcam" in I && t(2, _ = I.mirror_webcam), "include_audio" in I && t(17, d = I.include_audio), "i18n" in I && t(3, h = I.i18n), "upload" in I && t(18, g = I.upload);
  }, [
    a,
    u,
    _,
    h,
    so,
    s,
    l,
    o,
    C,
    y,
    E,
    w,
    v,
    W,
    z,
    c,
    f,
    d,
    g,
    U,
    ie,
    G,
    ae
  ];
}
class W1 extends r1 {
  constructor(e) {
    super(), d1(
      this,
      e,
      D1,
      B1,
      g1,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        upload: 18,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return so;
  }
}
const {
  SvelteComponent: E1,
  append: Qt,
  attr: A,
  detach: Y1,
  init: X1,
  insert: L1,
  noop: dl,
  safe_not_equal: q1,
  set_style: $t,
  svg_element: Lt
} = window.__gradio__svelte__internal;
function I1(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = Lt("svg"), t = Lt("rect"), n = Lt("rect"), s = Lt("rect"), l = Lt("rect"), o = Lt("line"), r = Lt("line"), a = Lt("line"), c = Lt("line"), A(t, "x", "2"), A(t, "y", "2"), A(t, "width", "5"), A(t, "height", "5"), A(t, "rx", "1"), A(t, "ry", "1"), A(t, "stroke-width", "2"), A(t, "fill", "none"), A(n, "x", "17"), A(n, "y", "2"), A(n, "width", "5"), A(n, "height", "5"), A(n, "rx", "1"), A(n, "ry", "1"), A(n, "stroke-width", "2"), A(n, "fill", "none"), A(s, "x", "2"), A(s, "y", "17"), A(s, "width", "5"), A(s, "height", "5"), A(s, "rx", "1"), A(s, "ry", "1"), A(s, "stroke-width", "2"), A(s, "fill", "none"), A(l, "x", "17"), A(l, "y", "17"), A(l, "width", "5"), A(l, "height", "5"), A(l, "rx", "1"), A(l, "ry", "1"), A(l, "stroke-width", "2"), A(l, "fill", "none"), A(o, "x1", "7.5"), A(o, "y1", "4.5"), A(o, "x2", "16"), A(o, "y2", "4.5"), $t(o, "stroke-width", "2px"), A(r, "x1", "7.5"), A(r, "y1", "19.5"), A(r, "x2", "16"), A(r, "y2", "19.5"), $t(r, "stroke-width", "2px"), A(a, "x1", "4.5"), A(a, "y1", "8"), A(a, "x2", "4.5"), A(a, "y2", "16"), $t(a, "stroke-width", "2px"), A(c, "x1", "19.5"), A(c, "y1", "8"), A(c, "x2", "19.5"), A(c, "y2", "16"), $t(c, "stroke-width", "2px"), A(e, "width", "100%"), A(e, "height", "100%"), A(e, "viewBox", "0 0 24 24"), A(e, "version", "1.1"), A(e, "xmlns", "http://www.w3.org/2000/svg"), A(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), A(e, "xml:space", "preserve"), A(e, "stroke", "currentColor"), $t(e, "fill-rule", "evenodd"), $t(e, "clip-rule", "evenodd"), $t(e, "stroke-linecap", "round"), $t(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      L1(f, e, u), Qt(e, t), Qt(e, n), Qt(e, s), Qt(e, l), Qt(e, o), Qt(e, r), Qt(e, a), Qt(e, c);
    },
    p: dl,
    i: dl,
    o: dl,
    d(f) {
      f && Y1(e);
    }
  };
}
class R1 extends E1 {
  constructor(e) {
    super(), X1(this, e, null, I1, q1, {});
  }
}
const {
  SvelteComponent: H1,
  append: P1,
  attr: gt,
  detach: A1,
  init: T1,
  insert: F1,
  noop: ml,
  safe_not_equal: U1,
  set_style: Ji,
  svg_element: va
} = window.__gradio__svelte__internal;
function j1(i) {
  let e, t;
  return {
    c() {
      e = va("svg"), t = va("path"), gt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), gt(t, "fill", "none"), gt(t, "stroke-width", "2"), gt(e, "width", "100%"), gt(e, "height", "100%"), gt(e, "viewBox", "0 0 24 24"), gt(e, "version", "1.1"), gt(e, "xmlns", "http://www.w3.org/2000/svg"), gt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), gt(e, "xml:space", "preserve"), gt(e, "stroke", "currentColor"), Ji(e, "fill-rule", "evenodd"), Ji(e, "clip-rule", "evenodd"), Ji(e, "stroke-linecap", "round"), Ji(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      F1(n, e, s), P1(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && A1(e);
    }
  };
}
class O1 extends H1 {
  constructor(e) {
    super(), T1(this, e, null, j1, U1, {});
  }
}
const {
  SvelteComponent: V1,
  append: N1,
  attr: bt,
  detach: K1,
  init: Z1,
  insert: J1,
  noop: gl,
  safe_not_equal: G1,
  set_style: Gi,
  svg_element: ka
} = window.__gradio__svelte__internal;
function Q1(i) {
  let e, t;
  return {
    c() {
      e = ka("svg"), t = ka("path"), bt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), bt(t, "fill", "none"), bt(t, "stroke-width", "2"), bt(e, "width", "100%"), bt(e, "height", "100%"), bt(e, "viewBox", "0 0 24 24"), bt(e, "version", "1.1"), bt(e, "xmlns", "http://www.w3.org/2000/svg"), bt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), bt(e, "xml:space", "preserve"), bt(e, "stroke", "currentColor"), Gi(e, "fill-rule", "evenodd"), Gi(e, "clip-rule", "evenodd"), Gi(e, "stroke-linecap", "round"), Gi(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      J1(n, e, s), N1(e, t);
    },
    p: gl,
    i: gl,
    o: gl,
    d(n) {
      n && K1(e);
    }
  };
}
class $1 extends V1 {
  constructor(e) {
    super(), Z1(this, e, null, Q1, G1, {});
  }
}
const {
  SvelteComponent: e0,
  append: ya,
  attr: qt,
  detach: t0,
  init: n0,
  insert: i0,
  noop: bl,
  safe_not_equal: s0,
  set_style: Qi,
  svg_element: pl
} = window.__gradio__svelte__internal;
function l0(i) {
  let e, t, n;
  return {
    c() {
      e = pl("svg"), t = pl("path"), n = pl("path"), qt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), qt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), qt(e, "width", "100%"), qt(e, "height", "100%"), qt(e, "viewBox", "0 0 24 24"), qt(e, "xmlns", "http://www.w3.org/2000/svg"), qt(e, "fill", "none"), qt(e, "stroke", "currentColor"), qt(e, "stroke-width", "2"), Qi(e, "fill-rule", "evenodd"), Qi(e, "clip-rule", "evenodd"), Qi(e, "stroke-linecap", "round"), Qi(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      i0(s, e, l), ya(e, t), ya(e, n);
    },
    p: bl,
    i: bl,
    o: bl,
    d(s) {
      s && t0(e);
    }
  };
}
class o0 extends e0 {
  constructor(e) {
    super(), n0(this, e, null, l0, s0, {});
  }
}
const {
  SvelteComponent: a0,
  append: r0,
  attr: en,
  detach: c0,
  init: f0,
  insert: u0,
  noop: wl,
  safe_not_equal: h0,
  set_style: $i,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function _0(i) {
  let e, t;
  return {
    c() {
      e = Ca("svg"), t = Ca("path"), en(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24"), en(e, "fill", "none"), en(e, "stroke", "currentColor"), en(e, "stroke-width", "2"), $i(e, "fill-rule", "evenodd"), $i(e, "clip-rule", "evenodd"), $i(e, "stroke-linecap", "round"), $i(e, "stroke-linejoin", "round"), en(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      u0(n, e, s), r0(e, t);
    },
    p: wl,
    i: wl,
    o: wl,
    d(n) {
      n && c0(e);
    }
  };
}
class d0 extends a0 {
  constructor(e) {
    super(), f0(this, e, null, _0, h0, {});
  }
}
const {
  SvelteComponent: m0,
  append: g0,
  attr: tn,
  detach: b0,
  init: p0,
  insert: w0,
  noop: vl,
  safe_not_equal: v0,
  set_style: es,
  svg_element: xa
} = window.__gradio__svelte__internal;
function k0(i) {
  let e, t;
  return {
    c() {
      e = xa("svg"), t = xa("path"), tn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), tn(e, "width", "100%"), tn(e, "height", "100%"), tn(e, "viewBox", "0 0 24 24"), tn(e, "fill", "none"), tn(e, "stroke", "currentColor"), tn(e, "stroke-width", "2"), es(e, "fill-rule", "evenodd"), es(e, "clip-rule", "evenodd"), es(e, "stroke-linecap", "round"), es(e, "stroke-linejoin", "round"), tn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      w0(n, e, s), g0(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && b0(e);
    }
  };
}
class y0 extends m0 {
  constructor(e) {
    super(), p0(this, e, null, k0, v0, {});
  }
}
const {
  SvelteComponent: C0,
  append: Sa,
  attr: Ie,
  detach: x0,
  init: S0,
  insert: z0,
  noop: kl,
  safe_not_equal: M0,
  set_style: ts,
  svg_element: yl
} = window.__gradio__svelte__internal;
function B0(i) {
  let e, t, n;
  return {
    c() {
      e = yl("svg"), t = yl("path"), n = yl("path"), Ie(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), Ie(t, "fill", "none"), Ie(t, "stroke-width", "2"), Ie(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), Ie(n, "fill", "none"), Ie(n, "stroke-width", "2"), Ie(e, "width", "100%"), Ie(e, "height", "100%"), Ie(e, "viewBox", "0 0 24 24"), Ie(e, "version", "1.1"), Ie(e, "xmlns", "http://www.w3.org/2000/svg"), Ie(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ie(e, "xml:space", "preserve"), Ie(e, "stroke", "currentColor"), ts(e, "fill-rule", "evenodd"), ts(e, "clip-rule", "evenodd"), ts(e, "stroke-linecap", "round"), ts(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      z0(s, e, l), Sa(e, t), Sa(e, n);
    },
    p: kl,
    i: kl,
    o: kl,
    d(s) {
      s && x0(e);
    }
  };
}
class D0 extends C0 {
  constructor(e) {
    super(), S0(this, e, null, B0, M0, {});
  }
}
const {
  SvelteComponent: W0,
  append: It,
  attr: j,
  detach: E0,
  init: Y0,
  insert: X0,
  noop: Cl,
  safe_not_equal: L0,
  svg_element: Ct
} = window.__gradio__svelte__internal;
function q0(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = Ct("svg"), t = Ct("path"), n = Ct("circle"), s = Ct("circle"), l = Ct("circle"), o = Ct("circle"), r = Ct("circle"), a = Ct("circle"), c = Ct("circle"), f = Ct("circle"), j(t, "fill", "none"), j(t, "stroke", "currentColor"), j(t, "stroke-width", "1.5"), j(t, "stroke-linecap", "round"), j(t, "stroke-linejoin", "round"), j(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), j(n, "cx", "7"), j(n, "cy", "7"), j(n, "r", "1.5"), j(n, "fill", "currentColor"), j(s, "cx", "15"), j(s, "cy", "9"), j(s, "r", "1.5"), j(s, "fill", "currentColor"), j(l, "cx", "21"), j(l, "cy", "5"), j(l, "r", "1.5"), j(l, "fill", "currentColor"), j(o, "cx", "25"), j(o, "cy", "13"), j(o, "r", "1.5"), j(o, "fill", "currentColor"), j(r, "cx", "23"), j(r, "cy", "21"), j(r, "r", "1.5"), j(r, "fill", "currentColor"), j(a, "cx", "15"), j(a, "cy", "19"), j(a, "r", "1.5"), j(a, "fill", "currentColor"), j(c, "cx", "9"), j(c, "cy", "23"), j(c, "r", "1.5"), j(c, "fill", "currentColor"), j(f, "cx", "5"), j(f, "cy", "15"), j(f, "r", "1.5"), j(f, "fill", "currentColor"), j(e, "xmlns", "http://www.w3.org/2000/svg"), j(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), j(e, "aria-hidden", "true"), j(e, "role", "img"), j(e, "class", "iconify iconify--carbon"), j(e, "width", "100%"), j(e, "height", "100%"), j(e, "preserveAspectRatio", "xMidYMid meet"), j(e, "viewBox", "0 0 32 32");
    },
    m(u, _) {
      X0(u, e, _), It(e, t), It(e, n), It(e, s), It(e, l), It(e, o), It(e, r), It(e, a), It(e, c), It(e, f);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(u) {
      u && E0(e);
    }
  };
}
let I0 = class extends W0 {
  constructor(e) {
    super(), Y0(this, e, null, q0, L0, {});
  }
};
const {
  SvelteComponent: R0,
  append: bi,
  attr: ee,
  detach: H0,
  init: P0,
  insert: A0,
  noop: xl,
  safe_not_equal: T0,
  set_style: ns,
  svg_element: On
} = window.__gradio__svelte__internal;
function F0(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = On("svg"), t = On("circle"), n = On("circle"), s = On("circle"), l = On("circle"), o = On("circle"), ee(t, "cx", "12"), ee(t, "cy", "12"), ee(t, "r", "8"), ee(t, "stroke-width", "2"), ee(t, "fill", "none"), ee(n, "cx", "12"), ee(n, "cy", "12"), ee(n, "r", "4"), ee(n, "stroke-width", "1.5"), ee(n, "fill", "none"), ee(n, "opacity", "0.5"), ee(s, "cx", "8"), ee(s, "cy", "8"), ee(s, "r", "1"), ee(s, "fill", "currentColor"), ee(s, "opacity", "0.6"), ee(l, "cx", "16"), ee(l, "cy", "8"), ee(l, "r", "1"), ee(l, "fill", "currentColor"), ee(l, "opacity", "0.6"), ee(o, "cx", "12"), ee(o, "cy", "16"), ee(o, "r", "1"), ee(o, "fill", "currentColor"), ee(o, "opacity", "0.6"), ee(e, "width", "100%"), ee(e, "height", "100%"), ee(e, "viewBox", "0 0 24 24"), ee(e, "version", "1.1"), ee(e, "xmlns", "http://www.w3.org/2000/svg"), ee(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ee(e, "xml:space", "preserve"), ee(e, "stroke", "currentColor"), ns(e, "fill-rule", "evenodd"), ns(e, "clip-rule", "evenodd"), ns(e, "stroke-linecap", "round"), ns(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      A0(r, e, a), bi(e, t), bi(e, n), bi(e, s), bi(e, l), bi(e, o);
    },
    p: xl,
    i: xl,
    o: xl,
    d(r) {
      r && H0(e);
    }
  };
}
class U0 extends R0 {
  constructor(e) {
    super(), P0(this, e, null, F0, T0, {});
  }
}
const {
  SvelteComponent: j0,
  append: za,
  attr: Sl,
  bubble: Ma,
  create_component: O0,
  destroy_component: V0,
  detach: oc,
  element: Ba,
  init: N0,
  insert: ac,
  listen: zl,
  mount_component: K0,
  run_all: Z0,
  safe_not_equal: J0,
  set_data: G0,
  set_input_value: Da,
  space: Q0,
  text: $0,
  transition_in: eg,
  transition_out: tg
} = window.__gradio__svelte__internal, { createEventDispatcher: ng, afterUpdate: ig } = window.__gradio__svelte__internal;
function sg(i) {
  let e;
  return {
    c() {
      e = $0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      ac(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && G0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && oc(e);
    }
  };
}
function lg(i) {
  let e, t, n, s, l, o, r;
  return t = new dr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [sg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Ba("label"), O0(t.$$.fragment), n = Q0(), s = Ba("input"), Sl(s, "type", "color"), s.disabled = /*disabled*/
      i[3], Sl(s, "class", "svelte-16l8u73"), Sl(e, "class", "block");
    },
    m(a, c) {
      ac(a, e, c), K0(t, e, null), za(e, n), za(e, s), Da(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        zl(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        zl(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        zl(
          s,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], o = !0);
    },
    p(a, [c]) {
      const f = {};
      c & /*show_label*/
      16 && (f.show_label = /*show_label*/
      a[4]), c & /*info*/
      4 && (f.info = /*info*/
      a[2]), c & /*$$scope, label*/
      2050 && (f.$$scope = { dirty: c, ctx: a }), t.$set(f), (!l || c & /*disabled*/
      8) && (s.disabled = /*disabled*/
      a[3]), c & /*value*/
      1 && Da(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (eg(t.$$.fragment, a), l = !0);
    },
    o(a) {
      tg(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && oc(e), V0(t), o = !1, Z0(r);
    }
  };
}
function og(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = ng();
  function f() {
    c("change", n), s || c("input");
  }
  ig(() => {
    t(5, s = !1);
  });
  function u(h) {
    Ma.call(this, i, h);
  }
  function _(h) {
    Ma.call(this, i, h);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (h) => {
    "value" in h && t(0, n = h.value), "value_is_output" in h && t(5, s = h.value_is_output), "label" in h && t(1, l = h.label), "info" in h && t(2, o = h.info), "disabled" in h && t(3, r = h.disabled), "show_label" in h && t(4, a = h.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && f();
  }, [
    n,
    l,
    o,
    r,
    a,
    s,
    u,
    _,
    d
  ];
}
class ag extends j0 {
  constructor(e) {
    super(), N0(this, e, og, lg, J0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
const {
  SvelteComponent: rg,
  append: rc,
  attr: _e,
  bubble: cg,
  check_outros: fg,
  create_slot: cc,
  detach: qi,
  element: Is,
  empty: ug,
  get_all_dirty_from_scope: fc,
  get_slot_changes: uc,
  group_outros: hg,
  init: _g,
  insert: Ii,
  listen: dg,
  safe_not_equal: mg,
  set_style: He,
  space: hc,
  src_url_equal: ks,
  toggle_class: ei,
  transition_in: ys,
  transition_out: Cs,
  update_slot_base: _c
} = window.__gradio__svelte__internal;
function gg(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && Wa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = cc(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Is("button"), r && r.c(), t = hc(), c && c.c(), _e(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), _e(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], ei(e, "hidden", !/*visible*/
      i[2]), He(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), He(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), He(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, u) {
      Ii(f, e, u), r && r.m(e, null), rc(e, t), c && c.m(e, null), s = !0, l || (o = dg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? r ? r.p(f, u) : (r = Wa(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || u & /*$$scope*/
      2048) && _c(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? uc(
          a,
          /*$$scope*/
          f[11],
          u,
          null
        ) : fc(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && _e(e, "class", n), (!s || u & /*elem_id*/
      1) && _e(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || u & /*size, variant, elem_classes, visible*/
      30) && ei(e, "hidden", !/*visible*/
      f[2]), u & /*scale*/
      512 && He(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), u & /*scale*/
      512 && He(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && He(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (ys(c, f), s = !0);
    },
    o(f) {
      Cs(c, f), s = !1;
    },
    d(f) {
      f && qi(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function bg(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && Ea(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = cc(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Is("a"), l && l.c(), t = hc(), r && r.c(), _e(
        e,
        "href",
        /*link*/
        i[6]
      ), _e(e, "rel", "noopener noreferrer"), _e(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), _e(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), _e(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), ei(e, "hidden", !/*visible*/
      i[2]), ei(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), He(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), He(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), He(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), He(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      Ii(a, e, c), l && l.m(e, null), rc(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = Ea(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && _c(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? uc(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : fc(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && _e(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && _e(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && _e(e, "class", n), (!s || c & /*elem_id*/
      1) && _e(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && ei(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && ei(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && He(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && He(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && He(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && He(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (ys(r, a), s = !0);
    },
    o(a) {
      Cs(r, a), s = !1;
    },
    d(a) {
      a && qi(e), l && l.d(), r && r.d(a);
    }
  };
}
function Wa(i) {
  let e, t, n;
  return {
    c() {
      e = Is("img"), _e(e, "class", "button-icon svelte-8huxfn"), ks(e.src, t = /*icon*/
      i[7].url) || _e(e, "src", t), _e(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Ii(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !ks(e.src, t = /*icon*/
      s[7].url) && _e(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && _e(e, "alt", n);
    },
    d(s) {
      s && qi(e);
    }
  };
}
function Ea(i) {
  let e, t, n;
  return {
    c() {
      e = Is("img"), _e(e, "class", "button-icon svelte-8huxfn"), ks(e.src, t = /*icon*/
      i[7].url) || _e(e, "src", t), _e(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Ii(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !ks(e.src, t = /*icon*/
      s[7].url) && _e(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && _e(e, "alt", n);
    },
    d(s) {
      s && qi(e);
    }
  };
}
function pg(i) {
  let e, t, n, s;
  const l = [bg, gg], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = ug();
    },
    m(a, c) {
      o[e].m(a, c), Ii(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (hg(), Cs(o[f], 1, 1, () => {
        o[f] = null;
      }), fg(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), ys(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ys(t), s = !0);
    },
    o(a) {
      Cs(t), s = !1;
    },
    d(a) {
      a && qi(n), o[e].d(a);
    }
  };
}
function wg(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: g = void 0 } = e;
  function b(w) {
    cg.call(this, i, w);
  }
  return i.$$set = (w) => {
    "elem_id" in w && t(0, l = w.elem_id), "elem_classes" in w && t(1, o = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, a = w.variant), "size" in w && t(4, c = w.size), "value" in w && t(5, f = w.value), "link" in w && t(6, u = w.link), "icon" in w && t(7, _ = w.icon), "disabled" in w && t(8, d = w.disabled), "scale" in w && t(9, h = w.scale), "min_width" in w && t(10, g = w.min_width), "$$scope" in w && t(11, s = w.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    _,
    d,
    h,
    g,
    s,
    n,
    b
  ];
}
class Ul extends rg {
  constructor(e) {
    super(), _g(this, e, wg, pg, mg, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10
    });
  }
}
const {
  SvelteComponent: vg,
  add_render_callback: dc,
  append: is,
  attr: Ne,
  binding_callbacks: Ya,
  check_outros: kg,
  create_bidirectional_transition: Xa,
  destroy_each: yg,
  detach: Di,
  element: xs,
  empty: Cg,
  ensure_array_like: La,
  group_outros: xg,
  init: Sg,
  insert: Wi,
  listen: jl,
  prevent_default: zg,
  run_all: Mg,
  safe_not_equal: Bg,
  set_data: Dg,
  set_style: Vn,
  space: Ol,
  text: Wg,
  toggle_class: xt,
  transition_in: Ml,
  transition_out: qa
} = window.__gradio__svelte__internal, { createEventDispatcher: Eg } = window.__gradio__svelte__internal;
function Ia(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ra(i) {
  let e, t, n, s, l, o = La(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Ha(Ia(i, o, a));
  return {
    c() {
      e = xs("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ne(e, "class", "options svelte-yuohum"), Ne(e, "role", "listbox"), Vn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Vn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Vn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Wi(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = jl(e, "mousedown", zg(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = La(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = Ia(a, o, f);
          r[f] ? r[f].p(u, c) : (r[f] = Ha(u), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Vn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Vn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Vn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && dc(() => {
        n && (t || (t = Xa(e, Ao, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Xa(e, Ao, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Di(e), yg(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function Ha(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = xs("li"), t = xs("span"), t.textContent = "✓", n = Ol(), l = Wg(s), o = Ol(), Ne(t, "class", "inner-item svelte-yuohum"), xt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ne(e, "class", "item svelte-yuohum"), Ne(e, "data-index", r = /*index*/
      i[26]), Ne(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Ne(e, "data-testid", "dropdown-option"), Ne(e, "role", "option"), Ne(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), xt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), xt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), xt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), xt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, u) {
      Wi(f, e, u), is(e, t), is(e, n), is(e, l), is(e, o);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && xt(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && Dg(l, s), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && Ne(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && Ne(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && Ne(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
      18 && xt(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && xt(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && xt(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && xt(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && Di(e);
    }
  };
}
function Yg(i) {
  let e, t, n, s, l;
  dc(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ra(i)
  );
  return {
    c() {
      e = xs("div"), t = Ol(), o && o.c(), n = Cg(), Ne(e, "class", "reference");
    },
    m(r, a) {
      Wi(r, e, a), i[20](e), Wi(r, t, a), o && o.m(r, a), Wi(r, n, a), s || (l = [
        jl(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        jl(
          window,
          "resize",
          /*onwindowresize*/
          i[19]
        )
      ], s = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && Ml(o, 1)) : (o = Ra(r), o.c(), Ml(o, 1), o.m(n.parentNode, n)) : o && (xg(), qa(o, 1, 1, () => {
        o = null;
      }), kg());
    },
    i(r) {
      Ml(o);
    },
    o(r) {
      qa(o);
    },
    d(r) {
      r && (Di(e), Di(t), Di(n)), i[20](null), o && o.d(r), s = !1, Mg(l);
    }
  };
}
function Xg(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, _, d, h, g, b, w, v, p;
  function C() {
    const { top: E, bottom: z } = g.getBoundingClientRect();
    t(16, u = E), t(17, _ = p - z);
  }
  let x = null;
  function S() {
    r && (x !== null && clearTimeout(x), x = setTimeout(
      () => {
        C(), x = null;
      },
      10
    ));
  }
  const M = Eg();
  function k() {
    t(11, p = window.innerHeight);
  }
  function D(E) {
    Ya[E ? "unshift" : "push"](() => {
      g = E, t(6, g);
    });
  }
  const y = (E) => M("change", E);
  function W(E) {
    Ya[E ? "unshift" : "push"](() => {
      b = E, t(7, b);
    });
  }
  return i.$$set = (E) => {
    "choices" in E && t(0, l = E.choices), "filtered_indices" in E && t(1, o = E.filtered_indices), "show_options" in E && t(2, r = E.show_options), "disabled" in E && t(3, a = E.disabled), "selected_indices" in E && t(4, c = E.selected_indices), "active_index" in E && t(5, f = E.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (b && c.length > 0) {
          let z = b.querySelectorAll("li");
          for (const U of Array.from(z))
            if (U.getAttribute("data-index") === c[0].toString()) {
              t(14, n = b == null ? void 0 : b.scrollTo) === null || n === void 0 || n.call(b, 0, U.offsetTop);
              break;
            }
        }
        C();
        const E = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, d = (E == null ? void 0 : E.height) || 0), t(8, h = (E == null ? void 0 : E.width) || 0);
      }
      _ > u ? (t(10, v = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, v = u - d));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    g,
    b,
    h,
    w,
    v,
    p,
    S,
    M,
    n,
    s,
    u,
    _,
    d,
    k,
    D,
    y,
    W
  ];
}
class Lg extends vg {
  constructor(e) {
    super(), Sg(this, e, Xg, Yg, Bg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function qg(i, e) {
  return (i % e + e) % e;
}
function Pa(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function Ig(i, e, t) {
  i("change", e), t || i("input");
}
function Rg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[qg(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Hg,
  append: gn,
  attr: Ve,
  binding_callbacks: Pg,
  check_outros: Ag,
  create_component: Vl,
  destroy_component: Nl,
  detach: lo,
  element: Jn,
  group_outros: Tg,
  init: Fg,
  insert: oo,
  listen: ln,
  mount_component: Kl,
  noop: Ug,
  run_all: jg,
  safe_not_equal: Og,
  set_data: Vg,
  set_input_value: Aa,
  space: Bl,
  text: Ng,
  toggle_class: Nn,
  transition_in: Gn,
  transition_out: Si
} = window.__gradio__svelte__internal, { onMount: Kg } = window.__gradio__svelte__internal, { createEventDispatcher: Zg, afterUpdate: Jg } = window.__gradio__svelte__internal;
function Gg(i) {
  let e;
  return {
    c() {
      e = Ng(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      oo(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Vg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && lo(e);
    }
  };
}
function Ta(i) {
  let e, t, n, s, l;
  return t = new Gl({}), {
    c() {
      e = Jn("div"), Vl(t.$$.fragment), Ve(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      oo(o, e, r), Kl(t, e, null), n = !0, s || (l = ln(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: Ug,
    i(o) {
      n || (Gn(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Si(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && lo(e), Nl(t), s = !1, l();
    }
  };
}
function Qg(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h;
  t = new dr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Gg] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && Ta(i);
  return u = new Lg({
    props: {
      show_options: (
        /*show_options*/
        i[12]
      ),
      choices: (
        /*choices*/
        i[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        i[10]
      ),
      disabled: (
        /*disabled*/
        i[3]
      ),
      selected_indices: (
        /*selected_index*/
        i[11] === null ? [] : [
          /*selected_index*/
          i[11]
        ]
      ),
      active_index: (
        /*active_index*/
        i[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = Jn("div"), Vl(t.$$.fragment), n = Bl(), s = Jn("div"), l = Jn("div"), o = Jn("div"), r = Jn("input"), c = Bl(), g && g.c(), f = Bl(), Vl(u.$$.fragment), Ve(r, "role", "listbox"), Ve(r, "aria-controls", "dropdown-options"), Ve(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Ve(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Ve(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], Ve(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Nn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Ve(o, "class", "secondary-wrap svelte-1a9du2n"), Ve(l, "class", "wrap-inner svelte-1a9du2n"), Nn(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), Ve(s, "class", "wrap svelte-1a9du2n"), Ve(e, "class", "svelte-1a9du2n"), Nn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(b, w) {
      oo(b, e, w), Kl(t, e, null), gn(e, n), gn(e, s), gn(s, l), gn(l, o), gn(o, r), Aa(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), gn(o, c), g && g.m(o, null), gn(s, f), Kl(u, s, null), _ = !0, d || (h = [
        ln(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        ln(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        ln(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        ln(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        ln(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        ln(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        ln(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], d = !0);
    },
    p(b, w) {
      const v = {};
      w[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      b[4]), w[0] & /*info*/
      2 && (v.info = /*info*/
      b[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      16 && (v.$$scope = { dirty: w, ctx: b }), t.$set(v), (!_ || w[0] & /*show_options*/
      4096) && Ve(
        r,
        "aria-expanded",
        /*show_options*/
        b[12]
      ), (!_ || w[0] & /*label*/
      1) && Ve(
        r,
        "aria-label",
        /*label*/
        b[0]
      ), (!_ || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      b[3]), (!_ || w[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      b[7])) && (r.readOnly = a), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      b[9] && Aa(
        r,
        /*input_text*/
        b[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Nn(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? g && (Tg(), Si(g, 1, 1, () => {
        g = null;
      }), Ag()) : g ? (g.p(b, w), w[0] & /*disabled*/
      8 && Gn(g, 1)) : (g = Ta(b), g.c(), Gn(g, 1), g.m(o, null)), (!_ || w[0] & /*show_options*/
      4096) && Nn(
        l,
        "show_options",
        /*show_options*/
        b[12]
      );
      const p = {};
      w[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      b[12]), w[0] & /*choices*/
      4 && (p.choices = /*choices*/
      b[2]), w[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      b[10]), w[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      b[3]), w[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      b[11] === null ? [] : [
        /*selected_index*/
        b[11]
      ]), w[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      b[14]), u.$set(p), (!_ || w[0] & /*container*/
      32) && Nn(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      _ || (Gn(t.$$.fragment, b), Gn(g), Gn(u.$$.fragment, b), _ = !0);
    },
    o(b) {
      Si(t.$$.fragment, b), Si(g), Si(u.$$.fragment, b), _ = !1;
    },
    d(b) {
      b && lo(e), Nl(t), i[31](null), g && g.d(), Nl(u), d = !1, jg(h);
    }
  };
}
function $g(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, g, b = !1, w, v, p = "", C = "", x = !1, S = [], M = null, k = null, D;
  const y = Zg();
  l ? (D = a.map((H) => H[1]).indexOf(l), k = D, k === -1 ? (o = l, k = null) : ([p, o] = a[k], C = p), E()) : a.length > 0 && (D = 0, k = 0, [p, l] = a[k], o = l, C = p);
  function W() {
    t(13, w = a.map((H) => H[0])), t(26, v = a.map((H) => H[1]));
  }
  function E() {
    W(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, p = ""), t(11, k = null)) : v.includes(l) ? (t(9, p = w[v.indexOf(l)]), t(11, k = v.indexOf(l))) : d ? (t(9, p = l), t(11, k = null)) : (t(9, p = ""), t(11, k = null)), t(29, D = k);
  }
  function z(H) {
    if (t(11, k = parseInt(H.detail.target.dataset.index)), isNaN(k)) {
      t(11, k = null);
      return;
    }
    t(12, b = !1), t(14, M = null), g.blur();
  }
  function U(H) {
    t(10, S = a.map((re, ue) => ue)), t(12, b = !0), y("focus");
  }
  function ie() {
    f || (g.focus(), t(12, b = !0));
  }
  function G(H) {
    H.preventDefault(), f || (g.focus(), t(12, b = !b));
  }
  function ae() {
    d ? t(22, l = p) : t(9, p = w[v.indexOf(l)]), t(12, b = !1), t(14, M = null), y("blur");
  }
  function I(H) {
    t(12, [b, M] = Rg(H, M, S), b, (t(14, M), t(2, a), t(25, c), t(6, d), t(9, p), t(10, S), t(8, g), t(27, C), t(11, k), t(29, D), t(28, x), t(26, v))), H.key === "Enter" && (M !== null ? (t(11, k = M), t(12, b = !1), g.blur(), t(14, M = null)) : w.includes(p) ? (t(11, k = w.indexOf(p)), t(12, b = !1), t(14, M = null), g.blur()) : d && (t(22, l = p), t(11, k = null), t(12, b = !1), t(14, M = null), g.blur()), y("enter", l));
  }
  Jg(() => {
    t(23, r = !1), t(28, x = !0);
  }), Kg(() => {
  });
  function Z() {
    p = this.value, t(9, p), t(11, k), t(29, D), t(28, x), t(2, a), t(26, v);
  }
  function V(H) {
    Pg[H ? "unshift" : "push"](() => {
      g = H, t(8, g);
    });
  }
  const J = (H) => y("key_up", { key: H.key, input_value: p });
  return i.$$set = (H) => {
    "label" in H && t(0, n = H.label), "info" in H && t(1, s = H.info), "value" in H && t(22, l = H.value), "value_is_output" in H && t(23, r = H.value_is_output), "choices" in H && t(2, a = H.choices), "disabled" in H && t(3, f = H.disabled), "show_label" in H && t(4, u = H.show_label), "container" in H && t(5, _ = H.container), "allow_custom_value" in H && t(6, d = H.allow_custom_value), "filterable" in H && t(7, h = H.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && k !== D && k !== null && x && (t(9, [p, l] = a[k], p, (t(22, l), t(11, k), t(29, D), t(28, x), t(2, a), t(26, v))), t(29, D = k), y("select", {
      index: k,
      value: v[k],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (E(), Ig(y, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && W(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (d || E(), t(25, c = a), t(10, S = Pa(a, p)), !d && S.length > 0 && t(14, M = S[0]), g == document.activeElement && t(12, b = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && p !== C && (t(10, S = Pa(a, p)), t(27, C = p), !d && S.length > 0 && t(14, M = S[0]));
  }, [
    n,
    s,
    a,
    f,
    u,
    _,
    d,
    h,
    g,
    p,
    S,
    k,
    b,
    w,
    M,
    y,
    z,
    U,
    ie,
    G,
    ae,
    I,
    l,
    r,
    o,
    c,
    v,
    C,
    x,
    D,
    Z,
    V,
    J
  ];
}
class e2 extends Hg {
  constructor(e) {
    super(), Fg(
      this,
      e,
      $g,
      Qg,
      Og,
      {
        label: 0,
        info: 1,
        value: 22,
        value_is_output: 23,
        choices: 2,
        disabled: 3,
        show_label: 4,
        container: 5,
        allow_custom_value: 6,
        filterable: 7
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: t2,
  append: $e,
  attr: ti,
  check_outros: Zl,
  create_component: Sn,
  destroy_component: zn,
  detach: hi,
  element: St,
  group_outros: Jl,
  init: n2,
  insert: _i,
  listen: i2,
  mount_component: Mn,
  safe_not_equal: s2,
  set_style: ni,
  space: pi,
  text: ao,
  toggle_class: Fa,
  transition_in: Ye,
  transition_out: Ke
} = window.__gradio__svelte__internal, { createEventDispatcher: l2 } = window.__gradio__svelte__internal, { onMount: o2, onDestroy: a2 } = window.__gradio__svelte__internal;
function Ua(i) {
  let e, t, n, s, l, o, r;
  const a = [c2, r2], c = [];
  function f(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = St("div"), t = St("button"), s.c(), ti(t, "class", "icon svelte-d9x7u0"), ti(t, "aria-label", "Lock label detail"), Fa(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), ni(e, "margin-right", "8px");
    },
    m(u, _) {
      _i(u, e, _), $e(e, t), c[n].m(t, null), l = !0, o || (r = i2(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = f(u), n !== d && (Jl(), Ke(c[d], 1, 1, () => {
        c[d] = null;
      }), Zl(), s = c[n], s || (s = c[n] = a[n](u), s.c()), Ye(s, 1), s.m(t, null)), (!l || _ & /*labelDetailLock*/
      4) && Fa(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      l || (Ye(s), l = !0);
    },
    o(u) {
      Ke(s), l = !1;
    },
    d(u) {
      u && hi(e), c[n].d(), o = !1, r();
    }
  };
}
function r2(i) {
  let e, t;
  return e = new y0({}), {
    c() {
      Sn(e.$$.fragment);
    },
    m(n, s) {
      Mn(e, n, s), t = !0;
    },
    i(n) {
      t || (Ye(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ke(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zn(e, n);
    }
  };
}
function c2(i) {
  let e, t;
  return e = new d0({}), {
    c() {
      Sn(e.$$.fragment);
    },
    m(n, s) {
      Mn(e, n, s), t = !0;
    },
    i(n) {
      t || (Ye(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ke(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zn(e, n);
    }
  };
}
function f2(i) {
  let e;
  return {
    c() {
      e = ao("Cancel");
    },
    m(t, n) {
      _i(t, e, n);
    },
    d(t) {
      t && hi(e);
    }
  };
}
function ja(i) {
  let e, t, n;
  return t = new Ul({
    props: {
      variant: "stop",
      $$slots: { default: [u2] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = St("div"), Sn(t.$$.fragment), ni(e, "margin-right", "8px");
    },
    m(s, l) {
      _i(s, e, l), Mn(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      262144 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (Ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ke(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && hi(e), zn(t);
    }
  };
}
function u2(i) {
  let e;
  return {
    c() {
      e = ao("Remove");
    },
    m(t, n) {
      _i(t, e, n);
    },
    d(t) {
      t && hi(e);
    }
  };
}
function h2(i) {
  let e;
  return {
    c() {
      e = ao("OK");
    },
    m(t, n) {
      _i(t, e, n);
    },
    d(t) {
      t && hi(e);
    }
  };
}
function _2(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h, g, b, w, v = !/*showRemove*/
  i[4] && Ua(i);
  o = new e2({
    props: {
      value: (
        /*currentLabel*/
        i[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        i[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), o.$on(
    "change",
    /*onDropDownChange*/
    i[6]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    i[8]
  ), c = new ag({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), c.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), _ = new Ul({
    props: {
      $$slots: { default: [f2] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && ja(i)
  );
  return b = new Ul({
    props: {
      variant: "primary",
      $$slots: { default: [h2] },
      $$scope: { ctx: i }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = St("div"), t = St("div"), n = St("span"), v && v.c(), s = pi(), l = St("div"), Sn(o.$$.fragment), r = pi(), a = St("div"), Sn(c.$$.fragment), f = pi(), u = St("div"), Sn(_.$$.fragment), d = pi(), p && p.c(), h = pi(), g = St("div"), Sn(b.$$.fragment), ni(l, "margin-right", "10px"), ni(a, "margin-right", "40px"), ni(a, "margin-bottom", "8px"), ni(u, "margin-right", "8px"), ti(n, "class", "model-content svelte-d9x7u0"), ti(t, "class", "modal-container svelte-d9x7u0"), ti(e, "class", "modal svelte-d9x7u0"), ti(e, "id", "model-box-edit");
    },
    m(C, x) {
      _i(C, e, x), $e(e, t), $e(t, n), v && v.m(n, null), $e(n, s), $e(n, l), Mn(o, l, null), $e(n, r), $e(n, a), Mn(c, a, null), $e(n, f), $e(n, u), Mn(_, u, null), $e(n, d), p && p.m(n, null), $e(n, h), $e(n, g), Mn(b, g, null), w = !0;
    },
    p(C, [x]) {
      /*showRemove*/
      C[4] ? v && (Jl(), Ke(v, 1, 1, () => {
        v = null;
      }), Zl()) : v ? (v.p(C, x), x & /*showRemove*/
      16 && Ye(v, 1)) : (v = Ua(C), v.c(), Ye(v, 1), v.m(n, s));
      const S = {};
      x & /*currentLabel*/
      1 && (S.value = /*currentLabel*/
      C[0]), x & /*choices*/
      8 && (S.choices = /*choices*/
      C[3]), o.$set(S);
      const M = {};
      x & /*currentColor*/
      2 && (M.value = /*currentColor*/
      C[1]), c.$set(M);
      const k = {};
      x & /*$$scope*/
      262144 && (k.$$scope = { dirty: x, ctx: C }), _.$set(k), /*showRemove*/
      C[4] ? p ? (p.p(C, x), x & /*showRemove*/
      16 && Ye(p, 1)) : (p = ja(C), p.c(), Ye(p, 1), p.m(n, h)) : p && (Jl(), Ke(p, 1, 1, () => {
        p = null;
      }), Zl());
      const D = {};
      x & /*$$scope*/
      262144 && (D.$$scope = { dirty: x, ctx: C }), b.$set(D);
    },
    i(C) {
      w || (Ye(v), Ye(o.$$.fragment, C), Ye(c.$$.fragment, C), Ye(_.$$.fragment, C), Ye(p), Ye(b.$$.fragment, C), w = !0);
    },
    o(C) {
      Ke(v), Ke(o.$$.fragment, C), Ke(c.$$.fragment, C), Ke(_.$$.fragment, C), Ke(p), Ke(b.$$.fragment, C), w = !1;
    },
    d(C) {
      C && hi(e), v && v.d(), zn(o), zn(c), zn(_), p && p.d(), zn(b);
    }
  };
}
function d2(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = l2();
  function _(x) {
    u("change", {
      label: s,
      color: a,
      lock: f,
      ret: x
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(x) {
    const { detail: S } = x;
    let M = S;
    Number.isInteger(M) ? (Array.isArray(o) && M < o.length && t(1, a = o[M]), Array.isArray(l) && M < l.length && t(0, s = l[M][0])) : t(0, s = M);
  }
  function h(x) {
    const { detail: S } = x;
    t(1, a = S);
  }
  function g(x) {
    d(x), _(1);
  }
  function b(x) {
    t(2, f = !f);
  }
  function w(x) {
    switch (x.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  o2(() => {
    document.addEventListener("keydown", w), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : ""));
  }), a2(() => {
    document.removeEventListener("keydown", w);
  });
  const v = () => _(0), p = () => _(-1), C = () => _(1);
  return i.$$set = (x) => {
    "label" in x && t(10, n = x.label), "currentLabel" in x && t(0, s = x.currentLabel), "choices" in x && t(3, l = x.choices), "choicesColors" in x && t(11, o = x.choicesColors), "color" in x && t(12, r = x.color), "currentColor" in x && t(1, a = x.currentColor), "showRemove" in x && t(4, c = x.showRemove), "labelDetailLock" in x && t(2, f = x.labelDetailLock);
  }, i.$$.update = () => {
    i.$$.dirty & /*label*/
    1024 && t(0, s = n || ""), i.$$.dirty & /*color*/
    4096 && t(1, a = r || "");
  }, [
    s,
    a,
    f,
    l,
    c,
    _,
    d,
    h,
    g,
    b,
    n,
    o,
    r,
    v,
    p,
    C
  ];
}
class ro extends t2 {
  constructor(e) {
    super(), n2(this, e, d2, _2, s2, {
      label: 10,
      currentLabel: 0,
      choices: 3,
      choicesColors: 11,
      color: 12,
      currentColor: 1,
      showRemove: 4,
      labelDetailLock: 2
    });
  }
}
function ot(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const ve = (i, e, t) => Math.min(Math.max(i, e), t);
class pn {
  constructor(e, t, n, s, l, o, r, a, c, f, u, _, d = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, w = 2, v = 4, p = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let x = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, S = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        x = ve(x, -this._xmin, M - this._xmax), S = ve(S, -this._ymin, k - this._ymax), this._xmin += x, this._ymin += S, this._xmax += x, this._ymax += S, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [x, S] = this.toBoxCoordinates(C.clientX, C.clientY);
        x = (x - this.offsetMouseX) / this.canvasWindow.scale, S = (S - this.offsetMouseY) / this.canvasWindow.scale, x > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = x, this.creatingAnchorX = "xmin") : x > this._xmin && x < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = x : x > this._xmin && x < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = x : x < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = x, this.creatingAnchorX = "xmax"), S > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = S, this.creatingAnchorY = "ymin") : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = S : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = S : S < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = S, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const x = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ve(this._xmin, 0, x - this.minSize), this._ymin = ve(this._ymin, 0, S - this.minSize), this._xmax = ve(this._xmax, this.minSize, x), this._ymax = ve(this._ymax, this.minSize, S), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > x ? (this._xmin -= this._xmax - x, this._xmax = x) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > S ? (this._ymin -= this._ymax - S, this._ymax = S) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const x = C.clientX, S = C.clientY, M = (x - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, k = (S - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += M, this._ymin += k, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize), this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += M, this._ymin += k, this._xmax = ve(this._xmax, this._xmin + this.minSize, D), this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += M, this._ymax += k, this._xmax = ve(this._xmax, this._xmin + this.minSize, D), this._ymax = ve(this._ymax, this._ymin + this.minSize, y);
            break;
          case 3:
            this._xmin += M, this._ymax += k, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize), this._ymax = ve(this._ymax, this._ymin + this.minSize, y);
            break;
          case 4:
            this._ymin += k, this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += M, this._xmax = ve(this._xmax, this._xmin + this.minSize, D);
            break;
          case 6:
            this._ymax += k, this._ymax = ve(this._ymax, this._ymin + this.minSize, y);
            break;
          case 7:
            this._xmin += M, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = p, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = w, this.selectedThickness = v, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = h, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * t), this._ymin = Math.round(this._ymin * t), this._xmax = Math.round(this._xmax * t), this._ymax = Math.round(this._ymax * t), this.applyUserScale(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this.getWidth() * this.getHeight();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let t, n;
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = ot(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = ot(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const s = e.measureText(this.label).width + 10, l = 20;
      let o = this.xmin, r = this.ymin - l;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, s, l), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, s, l), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = ot(this.color, 1);
    for (const s of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(s.xmin, s.ymin), e.fillRect(
        t,
        n,
        s.xmax - s.xmin,
        s.ymax - s.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const s = this.resizeHandles[n];
      if (e >= s.xmin && e <= s.xmax && t >= s.ymin && t <= s.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    const [t, n, s, l] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - l, this._xmax = this.canvasWindow.imageWidth - s, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = s, this._xmax = l, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
class on {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, _ = 8, d = 2, h = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let w = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = Math.max(-this._xmin, Math.min(w, p - this._xmax)), v = Math.max(-this._ymin, Math.min(v, C - this._ymax)), this._points = this._points.map((x) => ({
          x: x.x + w,
          y: x.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (b) => {
      if (this.isCreating) {
        const w = document.querySelector("canvas");
        if (w) {
          const v = w.getBoundingClientRect(), p = (b.clientX - v.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, C = (b.clientY - v.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, x = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(p - x.x, 2) + Math.pow(C - x.y, 2)) > 2 && (this._points.push({ x: p, y: C }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (b) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((p) => ({
          x: Math.max(0, Math.min(p.x, w)),
          y: Math.max(0, Math.min(p.y, v))
        })), this.updateBoundingBox(), this.renderCallBack(), console.log("Freehand path coordinates:", this._points), console.log("Number of points:", this._points.length), console.log("Bounding box:", {
          xmin: this._xmin,
          ymin: this._ymin,
          xmax: this._xmax,
          ymax: this._ymax
        });
      }
      this.onFinishCreation();
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const w = b.clientX, v = b.clientY, p = (w - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, x = this._xmax - this._xmin, S = this._ymax - this._ymin;
        let M = this._xmin, k = this._ymin, D = this._xmax, y = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            M = this._xmin + p, k = this._ymin + C;
            break;
          case 1:
            D = this._xmax + p, k = this._ymin + C;
            break;
          case 2:
            D = this._xmax + p, y = this._ymax + C;
            break;
          case 3:
            M = this._xmin + p, y = this._ymax + C;
            break;
          case 4:
            k = this._ymin + C;
            break;
          case 5:
            D = this._xmax + p;
            break;
          case 6:
            y = this._ymax + C;
            break;
          case 7:
            M = this._xmin + p;
            break;
        }
        const W = (D - M) / x, E = (y - k) / S;
        this._points = this._points.map((z) => ({
          x: M + (z.x - this._xmin) * W,
          y: k + (z.y - this._ymin) * E
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = g, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = _, this.thickness = d, this.selectedThickness = h, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
  }
  toJSON() {
    return {
      label: this.label,
      points: this._points,
      color: this.color,
      scaleFactor: this.scaleFactor,
      type: "freehand"
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._points = this._points.map((n) => ({
      x: Math.round(n.x * t),
      y: Math.round(n.y * t)
    })), this.applyUserScale(), this.updateBoundingBox(), this.scaleFactor = e;
  }
  updateBoundingBox() {
    this._points.length !== 0 && (this._xmin = Math.min(...this._points.map((e) => e.x)), this._ymin = Math.min(...this._points.map((e) => e.y)), this._xmax = Math.max(...this._points.map((e) => e.x)), this._ymax = Math.max(...this._points.map((e) => e.y)), this.applyUserScale(), this.updateHandles());
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this._points.length > 0 ? this.getWidth() * this.getHeight() : 0;
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.points = this._points.map((e) => ({
      x: e.x * this.canvasWindow.scale,
      y: e.y * this.canvasWindow.scale
    })), this._points.length > 0 && (this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles());
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    if (this.points.length !== 0) {
      if (this.updateOffset(), this.eraseData && Array.isArray(this.eraseData))
        this.renderWithEraseMask(e, this.eraseData.map((t) => !t));
      else {
        e.beginPath();
        for (let t = 0; t < this.points.length; t++) {
          const [n, s] = this.toCanvasCoordinates(this.points[t].x, this.points[t].y);
          t === 0 ? e.moveTo(n, s) : e.lineTo(n, s);
        }
        e.closePath(), e.fillStyle = ot(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = ot(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke();
      }
      this.renderLabel(e), this.renderHandles(e);
    }
  }
  renderLabel(e) {
    if (this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const t = e.measureText(this.label).width + 10, n = 20;
      let s = this.xmin, l = this.ymin - n;
      e.fillStyle = "white", [s, l] = this.toCanvasCoordinates(s, l), e.fillRect(s, l, t, n), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, l, t, n), e.fillStyle = "black", e.fillText(this.label, s + 5, l + 15);
    }
  }
  renderHandles(e) {
    if (this.isSelected) {
      e.fillStyle = ot(this.color, 1);
      for (const t of this.resizeHandles) {
        const [n, s] = this.toCanvasCoordinates(t.xmin, t.ymin);
        e.fillRect(
          n,
          s,
          t.xmax - t.xmin,
          t.ymax - t.ymin
        );
      }
    }
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const s = this.resizeHandles[n];
      if (e >= s.xmin && e <= s.xmax && t >= s.ymin && t <= s.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0;
    const s = document.querySelector("canvas");
    if (s) {
      const l = s.getBoundingClientRect(), o = (e.clientX - l.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, r = (e.clientY - l.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
      this._points = [{ x: o, y: r }], this.applyUserScale(), this.updateBoundingBox();
    }
    document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    if (this._points.length === 0) return;
    const t = this._points.map((n) => {
      switch (e) {
        case 1:
          return {
            x: this.canvasWindow.imageWidth - n.y,
            y: n.x
          };
        case -1:
          return {
            x: n.y,
            y: this.canvasWindow.imageHeight - n.x
          };
        default:
          return n;
      }
    });
    this._points = t, this.updateBoundingBox(), this.applyUserScale();
  }
  /**
   * Render freehand path with erase mask applied
   */
  renderWithEraseMask(e, t) {
    e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = ot(this.color, 1), e.lineCap = "round", e.lineJoin = "round";
    let n = !1;
    for (let s = 0; s < this.points.length; s++) {
      const [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
      (s < t.length ? t[s] : !0) ? n ? e.lineTo(l, o) : (e.beginPath(), e.moveTo(l, o), n = !0) : n && (e.stroke(), n = !1);
    }
    if (n && e.stroke(), this.alpha > 0) {
      e.fillStyle = ot(this.color, this.alpha);
      let s = [];
      for (let l = 0; l < this.points.length; l++)
        (l < t.length ? t[l] : !0) ? s.push(l) : (s.length >= 3 && this.drawFilledSegment(e, s), s = []);
      s.length >= 3 && this.drawFilledSegment(e, s);
    }
  }
  /**
   * Draw a filled segment for a continuous visible portion
   */
  drawFilledSegment(e, t) {
    if (!(t.length < 3)) {
      e.beginPath();
      for (let n = 0; n < t.length; n++) {
        const s = t[n], [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
        n === 0 ? e.moveTo(l, o) : e.lineTo(l, o);
      }
      e.closePath(), e.fill();
    }
  }
}
class zt {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, _ = 8, d = 2, h = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let w = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = Math.max(-this._xmin, Math.min(w, p - this._xmax)), v = Math.max(-this._ymin, Math.min(v, C - this._ymax)), this._points = this._points.map((x) => ({
          x: x.x + w,
          y: x.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (b) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (b) => {
      this.isCreating && b.code === "Space" && this._points.length >= this.minPoints && (b.preventDefault(), this.finishCreating());
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const w = b.clientX, v = b.clientY, p = (w - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, x = this._xmax - this._xmin, S = this._ymax - this._ymin;
        let M = this._xmin, k = this._ymin, D = this._xmax, y = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            M = this._xmin + p, k = this._ymin + C;
            break;
          case 1:
            D = this._xmax + p, k = this._ymin + C;
            break;
          case 2:
            D = this._xmax + p, y = this._ymax + C;
            break;
          case 3:
            M = this._xmin + p, y = this._ymax + C;
            break;
          case 4:
            k = this._ymin + C;
            break;
          case 5:
            D = this._xmax + p;
            break;
          case 6:
            y = this._ymax + C;
            break;
          case 7:
            M = this._xmin + p;
            break;
        }
        const W = (D - M) / x, E = (y - k) / S;
        this._points = this._points.map((z) => ({
          x: M + (z.x - this._xmin) * W,
          y: k + (z.y - this._ymin) * E
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = g, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = _, this.thickness = d, this.selectedThickness = h, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  toJSON() {
    return {
      label: this.label,
      points: this._points,
      color: this.color,
      scaleFactor: this.scaleFactor,
      type: "polygon"
    };
  }
  setSelected(e) {
    this.isSelected = e, e && this.isCreating ? document.addEventListener("keydown", this.handleKeyPress) : document.removeEventListener("keydown", this.handleKeyPress);
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._points = this._points.map((n) => ({
      x: Math.round(n.x * t),
      y: Math.round(n.y * t)
    })), this.applyUserScale(), this.updateBoundingBox(), this.scaleFactor = e;
  }
  updateBoundingBox() {
    this._points.length !== 0 && (this._xmin = Math.min(...this._points.map((e) => e.x)), this._ymin = Math.min(...this._points.map((e) => e.y)), this._xmax = Math.max(...this._points.map((e) => e.x)), this._ymax = Math.max(...this._points.map((e) => e.y)), this.applyUserScale(), this.updateHandles());
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    if (this._points.length < 3) return 0;
    let e = 0;
    for (let t = 0; t < this._points.length; t++) {
      const n = (t + 1) % this._points.length;
      e += this._points[t].x * this._points[n].y, e -= this._points[n].x * this._points[t].y;
    }
    return Math.abs(e) / 2;
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.points = this._points.map((e) => ({
      x: e.x * this.canvasWindow.scale,
      y: e.y * this.canvasWindow.scale
    })), this._points.length > 0 && (this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles());
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  // Check if a point is inside the polygon using ray casting algorithm
  isPointInsidePolygon(e, t) {
    if (this.points.length < 3) return !1;
    let n = !1;
    for (let s = 0, l = this.points.length - 1; s < this.points.length; l = s++) {
      const [o, r] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y), [a, c] = this.toCanvasCoordinates(this.points[l].x, this.points[l].y);
      r > t != c > t && e < (a - o) * (t - r) / (c - r) + o && (n = !n);
    }
    return n;
  }
  isPointInsideBox(e, t) {
    return this.isPointInsidePolygon(e, t) ? !0 : ([e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax);
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const s = this.resizeHandles[n];
      if (e >= s.xmin && e <= s.xmax && t >= s.ymin && t <= s.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  // Check if click is on the starting point (for closing polygon)
  isClickOnStartPoint(e, t) {
    if (this._points.length === 0) return !1;
    const n = this._points[0], [s, l] = this.toCanvasCoordinates(n.x * this.canvasWindow.scale, n.y * this.canvasWindow.scale);
    return Math.sqrt(Math.pow(e - s, 2) + Math.pow(t - l, 2)) <= this.startPointRadius;
  }
  render(e) {
    if (this.points.length !== 0) {
      this.updateOffset(), e.beginPath();
      for (let t = 0; t < this.points.length; t++) {
        const [n, s] = this.toCanvasCoordinates(this.points[t].x, this.points[t].y);
        t === 0 ? e.moveTo(n, s) : e.lineTo(n, s);
      }
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = ot(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = ot(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = ot(this.color, 1);
        for (let t = 0; t < this.points.length; t++) {
          const [n, s] = this.toCanvasCoordinates(this.points[t].x, this.points[t].y);
          e.beginPath(), e.arc(n, s, 4, 0, 2 * Math.PI), e.fill();
        }
        if (this.points.length >= this.minPoints) {
          const [t, n] = this.toCanvasCoordinates(this.points[0].x, this.points[0].y);
          e.strokeStyle = "white", e.lineWidth = 2, e.beginPath(), e.arc(t, n, this.startPointRadius, 0, 2 * Math.PI), e.stroke();
        }
      }
      if (this.label !== null && this.label.trim() !== "") {
        this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
        const t = e.measureText(this.label).width + 10, n = 20;
        let s = this.xmin, l = this.ymin - n;
        e.fillStyle = "white", [s, l] = this.toCanvasCoordinates(s, l), e.fillRect(s, l, t, n), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, l, t, n), e.fillStyle = "black", e.fillText(this.label, s + 5, l + 15);
      }
      if (this.isSelected && !this.isCreating) {
        e.fillStyle = ot(this.color, 1);
        for (const t of this.resizeHandles) {
          const [n, s] = this.toCanvasCoordinates(t.xmin, t.ymin);
          e.fillRect(
            n,
            s,
            t.xmax - t.xmin,
            t.ymax - t.ymin
          );
        }
      }
    }
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.setSelected(!0);
    const s = document.querySelector("canvas");
    if (s) {
      const l = s.getBoundingClientRect(), o = (e.clientX - l.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, r = (e.clientY - l.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
      this._points = [{ x: o, y: r }], this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack();
    }
  }
  // Method that Canvas can call to add points to the polygon
  addPoint(e) {
    if (!this.isCreating) return !1;
    const t = document.querySelector("canvas");
    if (t) {
      const n = t.getBoundingClientRect(), s = e.clientX - n.left, l = e.clientY - n.top;
      if (this._points.length >= this.minPoints && this.isClickOnStartPoint(s, l))
        return this.finishCreating(), !0;
      const o = (s - this.canvasWindow.offsetX) / this.canvasWindow.scale, r = (l - this.canvasWindow.offsetY) / this.canvasWindow.scale, a = { x: o, y: r };
      this._points.push(a), this.onPointAdded && this.onPointAdded(a), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack();
    }
    return !1;
  }
  finishCreating() {
    if (this._points.length < this.minPoints) return;
    this.isCreating = !1, document.removeEventListener("keydown", this.handleKeyPress);
    const e = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, t = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((n) => ({
      x: Math.max(0, Math.min(n.x, e)),
      y: Math.max(0, Math.min(n.y, t))
    })), this.updateBoundingBox(), this.renderCallBack(), this.onFinishCreation();
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    if (this._points.length === 0) return;
    const t = this._points.map((n) => {
      switch (e) {
        case 1:
          return {
            x: this.canvasWindow.imageWidth - n.y,
            y: n.x
          };
        case -1:
          return {
            x: n.y,
            y: this.canvasWindow.imageHeight - n.x
          };
        default:
          return n;
      }
    });
    this._points = t, this.updateBoundingBox(), this.applyUserScale();
  }
}
class m2 {
  constructor(e, t = 1) {
    this.erasePath = [], this.isErasing = !1, this.brushSize = 20, this.canvasWindow = e, this.scaleFactor = t, this.maskCanvas = document.createElement("canvas"), this.maskCtx = this.maskCanvas.getContext("2d");
  }
  setBrushSize(e) {
    this.brushSize = e;
  }
  setScaleFactor(e) {
    this.scaleFactor = e;
  }
  startErase(e, t) {
    this.isErasing = !0, this.erasePath = [], this.addErasePoint(e, t);
  }
  continueErase(e, t) {
    this.isErasing && this.addErasePoint(e, t);
  }
  endErase() {
    this.isErasing = !1;
    const e = [...this.erasePath];
    return this.erasePath = [], e;
  }
  addErasePoint(e, t) {
    const n = e.clientX - t.left, s = e.clientY - t.top, l = (n - this.canvasWindow.offsetX) / this.scaleFactor / this.canvasWindow.scale, o = (s - this.canvasWindow.offsetY) / this.scaleFactor / this.canvasWindow.scale;
    this.erasePath.push({ x: l, y: o });
  }
  /**
  * Apply erase path to a shape using pixel-based masking approach
  */
  eraseFromShape(e, t) {
    if (t.length === 0) return [e];
    const n = this.createEraseMask(t);
    return e instanceof pn ? this.eraseFromBox(e, n) : e instanceof on ? this.eraseFromFreehand(e, n) : e instanceof zt ? this.eraseFromPolygon(e, n) : [e];
  }
  /**
   * Create a mask from the erase path for pixel-perfect erasing
   */
  createEraseMask(e) {
    let t = 1 / 0, n = 1 / 0, s = -1 / 0, l = -1 / 0;
    const o = this.brushSize / this.scaleFactor / this.canvasWindow.scale;
    for (const c of e)
      t = Math.min(t, c.x - o), n = Math.min(n, c.y - o), s = Math.max(s, c.x + o), l = Math.max(l, c.y + o);
    const r = Math.ceil(s - t), a = Math.ceil(l - n);
    (this.maskCanvas.width !== r || this.maskCanvas.height !== a) && (this.maskCanvas.width = r, this.maskCanvas.height = a), this.maskCtx.clearRect(0, 0, r, a), this.maskCtx.fillStyle = "white", this.maskCtx.globalCompositeOperation = "source-over";
    for (let c = 0; c < e.length; c++) {
      const f = e[c], u = f.x - t, _ = f.y - n;
      if (this.maskCtx.beginPath(), this.maskCtx.arc(u, _, o, 0, 2 * Math.PI), this.maskCtx.fill(), c > 0) {
        const d = e[c - 1], h = d.x - t, g = d.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(h, g), this.maskCtx.lineTo(u, _), this.maskCtx.stroke();
      }
    }
    return {
      x: t,
      y: n,
      width: r,
      height: a,
      data: this.maskCtx.getImageData(0, 0, r, a)
    };
  }
  /**
  * Erase from box using pixel-based masking
  */
  eraseFromBox(e, t) {
    const n = this.boxToPolygon(e);
    return this.eraseFromPolygon(n, t);
  }
  /**
   * Convert box to polygon for uniform mask-based processing
   */
  boxToPolygon(e) {
    const t = new zt(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      e.label,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness
    );
    return t._points = [
      { x: e._xmin, y: e._ymin },
      { x: e._xmax, y: e._ymin },
      { x: e._xmax, y: e._ymax },
      { x: e._xmin, y: e._ymax }
    ], t.updateBoundingBox(), t;
  }
  /**
  * Erase from freehand using pixel-based masking - converts to polygon first
  */
  eraseFromFreehand(e, t) {
    if (e._points.length < 2) return [];
    const n = this.freehandToPolygon(e), s = this.eraseFromPolygon(n, t), l = [];
    for (const o of s) {
      const r = this.polygonToFreehand(o, e);
      l.push(r);
    }
    return l;
  }
  /**
   * Convert freehand path to polygon for uniform processing
   */
  freehandToPolygon(e) {
    const t = new zt(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      e.label,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness
    );
    return t._points = [...e._points], t.updateBoundingBox(), t;
  }
  /**
   * Convert polygon back to freehand path
   */
  polygonToFreehand(e, t) {
    const n = new on(
      t.renderCallBack,
      t.onFinishCreation,
      t.canvasWindow,
      t.canvasXmin,
      t.canvasYmin,
      t.canvasXmax,
      t.canvasYmax,
      t.label,
      t.color,
      t.alpha,
      t.minSize,
      t.resizeHandleSize,
      t.thickness,
      t.selectedThickness,
      t.scaleFactor
    );
    return n._points = [...e._points], n.updateBoundingBox(), n;
  }
  /**
   * Check if a line segment intersects with the erase mask using stroke width
   */
  isLineSegmentErased(e, t, n, s) {
    const l = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)), o = Math.max(3, Math.ceil(l * 2)), r = s / 2;
    let a = 0;
    const c = Math.max(1, Math.ceil(o * 0.3));
    for (let f = 0; f <= o; f++) {
      const u = o > 0 ? f / o : 0, _ = {
        x: e.x + (t.x - e.x) * u,
        y: e.y + (t.y - e.y) * u
      }, d = [
        _,
        { x: _.x + r, y: _.y },
        { x: _.x - r, y: _.y },
        { x: _.x, y: _.y + r },
        { x: _.x, y: _.y - r }
      ];
      for (const h of d)
        if (this.isPointErased(h, n)) {
          a++;
          break;
        }
    }
    return a >= c;
  }
  /**
   * Erase from polygon using pixel-based masking
   */
  eraseFromPolygon(e, t) {
    if (e._points.length < 3) return [];
    const n = [];
    for (let o = 0; o < e._points.length; o++) {
      const r = e._points[o], a = e._points[(o + 1) % e._points.length], c = this.sampleEdgePoints(r, a, 2);
      let f = null;
      for (const u of c)
        if (!this.isPointErased(u, t))
          (f === null || Math.sqrt(Math.pow(u.x - f.x, 2) + Math.pow(u.y - f.y, 2)) > 1) && (n.push(u), f = u);
        else if (f !== null) {
          const d = this.findEraserEdge(f, u, t);
          d && Math.sqrt(Math.pow(d.x - f.x, 2) + Math.pow(d.y - f.y, 2)) > 1 && n.push(d), f = null;
        }
    }
    const s = [];
    for (let o = 0; o < n.length; o++) {
      const r = n[o], a = s[s.length - 1];
      (!a || Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)) > 0.5) && s.push(r);
    }
    if (s.length < 3) return [];
    const l = new zt(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      e.label,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness
    );
    return l._points = s, l.updateBoundingBox(), [l];
  }
  /**
  * Check if a point is erased by looking at the mask
  */
  isPointErased(e, t) {
    const n = Math.floor(e.x - t.x), s = Math.floor(e.y - t.y);
    if (n < 0 || n >= t.width || s < 0 || s >= t.height)
      return !1;
    const l = (s * t.width + n) * 4;
    return t.data.data[l + 3] > 128;
  }
  /**
   * Sample points along an edge between two points
   */
  sampleEdgePoints(e, t, n) {
    const s = [], l = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)), o = Math.max(1, Math.floor(l / n));
    for (let r = 0; r <= o; r++) {
      const a = o > 0 ? r / o : 0;
      s.push({
        x: e.x + (t.x - e.x) * a,
        y: e.y + (t.y - e.y) * a
      });
    }
    return s;
  }
  /**
   * Find the edge of the eraser between an unerased and erased point
   */
  findEraserEdge(e, t, n) {
    let s = 0, l = 1, o = 0;
    const r = 10;
    for (; o < r && Math.abs(l - s) > 0.01; ) {
      const c = (s + l) / 2, f = {
        x: e.x + (t.x - e.x) * c,
        y: e.y + (t.y - e.y) * c
      };
      this.isPointErased(f, n) ? l = c : s = c, o++;
    }
    const a = (s + l) / 2;
    return {
      x: e.x + (t.x - e.x) * a,
      y: e.y + (t.y - e.y) * a
    };
  }
  /**
  * Render the current erase path for visual feedback
  */
  renderErasePath(e) {
    if (this.erasePath.length === 0) return;
    e.save(), e.strokeStyle = "rgba(255, 0, 0, 0.5)", e.fillStyle = "rgba(255, 0, 0, 0.2)", e.lineWidth = 2, e.lineCap = "round", e.lineJoin = "round";
    const t = this.brushSize / this.scaleFactor / this.canvasWindow.scale;
    for (let n = 0; n < this.erasePath.length; n++) {
      const s = this.erasePath[n], l = s.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX, o = s.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY, r = t * this.scaleFactor * this.canvasWindow.scale;
      if (e.beginPath(), e.arc(l, o, r, 0, 2 * Math.PI), e.fill(), n > 0) {
        const a = this.erasePath[n - 1], c = a.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX, f = a.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY;
        e.lineWidth = r * 2, e.beginPath(), e.moveTo(c, f), e.lineTo(l, o), e.stroke();
      }
    }
    e.restore();
  }
}
const Ue = [
  "rgb(255, 168, 77)",
  "rgb(92, 172, 238)",
  "rgb(255, 99, 71)",
  "rgb(118, 238, 118)",
  "rgb(255, 145, 164)",
  "rgb(0, 191, 255)",
  "rgb(255, 218, 185)",
  "rgb(255, 69, 0)",
  "rgb(34, 139, 34)",
  "rgb(255, 240, 245)",
  "rgb(255, 193, 37)",
  "rgb(255, 193, 7)",
  "rgb(255, 250, 138)"
], ss = (i, e, t) => Math.min(Math.max(i, e), t);
class g2 {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = ss(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = ss(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = ss(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = ss(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, s = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = s);
  }
}
const {
  SvelteComponent: b2,
  append: Me,
  attr: he,
  binding_callbacks: p2,
  bubble: Dl,
  check_outros: ii,
  create_component: it,
  destroy_component: st,
  detach: Ht,
  element: tt,
  empty: w2,
  group_outros: si,
  init: v2,
  insert: Pt,
  is_function: k2,
  listen: De,
  mount_component: lt,
  noop: mc,
  run_all: gc,
  safe_not_equal: y2,
  set_style: ls,
  space: nt,
  toggle_class: je,
  transition_in: oe,
  transition_out: fe
} = window.__gradio__svelte__internal, { onMount: C2, onDestroy: x2, createEventDispatcher: S2 } = window.__gradio__svelte__internal;
function Oa(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h, g, b, w, v, p, C, x, S, M, k, D, y;
  n = new R1({}), o = new D0({}), c = new I0({}), _ = new U0({}), g = new O1({});
  let W = (
    /*showRemoveButton*/
    i[3] && Va(i)
  ), E = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[17] && Na(i);
  return C = new m_({}), M = new e_({}), {
    c() {
      e = tt("span"), t = tt("button"), it(n.$$.fragment), s = nt(), l = tt("button"), it(o.$$.fragment), r = nt(), a = tt("button"), it(c.$$.fragment), f = nt(), u = tt("button"), it(_.$$.fragment), d = nt(), h = tt("button"), it(g.$$.fragment), b = nt(), W && W.c(), w = nt(), E && E.c(), v = nt(), p = tt("button"), it(C.$$.fragment), x = nt(), S = tt("button"), it(M.$$.fragment), he(t, "class", "icon svelte-1bt1mh4"), he(t, "aria-label", "Create box"), je(
        t,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].creation
      ), he(l, "class", "icon svelte-1bt1mh4"), he(l, "aria-label", "Freehand drawing"), je(
        l,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].freehand
      ), he(a, "class", "icon svelte-1bt1mh4"), he(a, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), je(
        a,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].polygon
      ), he(u, "class", "icon svelte-1bt1mh4"), he(u, "aria-label", "Erase areas from shapes"), je(
        u,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].erase
      ), he(h, "class", "icon svelte-1bt1mh4"), he(h, "aria-label", "Edit boxes"), je(
        h,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].drag
      ), he(p, "class", "icon svelte-1bt1mh4"), he(p, "aria-label", "Undo (Ctrl+Z)"), je(
        p,
        "disabled",
        /*undoStack*/
        i[18].length === 0
      ), he(S, "class", "icon svelte-1bt1mh4"), he(S, "aria-label", "Redo (Ctrl+Y)"), je(
        S,
        "disabled",
        /*redoStack*/
        i[10].length === 0
      ), he(e, "class", "canvas-control svelte-1bt1mh4");
    },
    m(z, U) {
      Pt(z, e, U), Me(e, t), lt(n, t, null), Me(e, s), Me(e, l), lt(o, l, null), Me(e, r), Me(e, a), lt(c, a, null), Me(e, f), Me(e, u), lt(_, u, null), Me(e, d), Me(e, h), lt(g, h, null), Me(e, b), W && W.m(e, null), Me(e, w), E && E.m(e, null), Me(e, v), Me(e, p), lt(C, p, null), Me(e, x), Me(e, S), lt(M, S, null), k = !0, D || (y = [
        De(
          t,
          "click",
          /*click_handler*/
          i[46]
        ),
        De(
          l,
          "click",
          /*click_handler_1*/
          i[47]
        ),
        De(
          a,
          "click",
          /*click_handler_2*/
          i[48]
        ),
        De(
          u,
          "click",
          /*click_handler_3*/
          i[49]
        ),
        De(
          h,
          "click",
          /*click_handler_4*/
          i[50]
        ),
        De(
          p,
          "click",
          /*click_handler_7*/
          i[53]
        ),
        De(
          S,
          "click",
          /*click_handler_8*/
          i[54]
        )
      ], D = !0);
    },
    p(z, U) {
      (!k || U[0] & /*mode, Mode*/
      8704) && je(
        t,
        "selected",
        /*mode*/
        z[13] === /*Mode*/
        z[9].creation
      ), (!k || U[0] & /*mode, Mode*/
      8704) && je(
        l,
        "selected",
        /*mode*/
        z[13] === /*Mode*/
        z[9].freehand
      ), (!k || U[0] & /*mode, Mode*/
      8704) && je(
        a,
        "selected",
        /*mode*/
        z[13] === /*Mode*/
        z[9].polygon
      ), (!k || U[0] & /*mode, Mode*/
      8704) && je(
        u,
        "selected",
        /*mode*/
        z[13] === /*Mode*/
        z[9].erase
      ), (!k || U[0] & /*mode, Mode*/
      8704) && je(
        h,
        "selected",
        /*mode*/
        z[13] === /*Mode*/
        z[9].drag
      ), /*showRemoveButton*/
      z[3] ? W ? (W.p(z, U), U[0] & /*showRemoveButton*/
      8 && oe(W, 1)) : (W = Va(z), W.c(), oe(W, 1), W.m(e, w)) : W && (si(), fe(W, 1, 1, () => {
        W = null;
      }), ii()), !/*disableEditBoxes*/
      z[5] && /*labelDetailLock*/
      z[17] ? E ? (E.p(z, U), U[0] & /*disableEditBoxes, labelDetailLock*/
      131104 && oe(E, 1)) : (E = Na(z), E.c(), oe(E, 1), E.m(e, v)) : E && (si(), fe(E, 1, 1, () => {
        E = null;
      }), ii()), (!k || U[0] & /*redoStack*/
      1024) && je(
        S,
        "disabled",
        /*redoStack*/
        z[10].length === 0
      );
    },
    i(z) {
      k || (oe(n.$$.fragment, z), oe(o.$$.fragment, z), oe(c.$$.fragment, z), oe(_.$$.fragment, z), oe(g.$$.fragment, z), oe(W), oe(E), oe(C.$$.fragment, z), oe(M.$$.fragment, z), k = !0);
    },
    o(z) {
      fe(n.$$.fragment, z), fe(o.$$.fragment, z), fe(c.$$.fragment, z), fe(_.$$.fragment, z), fe(g.$$.fragment, z), fe(W), fe(E), fe(C.$$.fragment, z), fe(M.$$.fragment, z), k = !1;
    },
    d(z) {
      z && Ht(e), st(n), st(o), st(c), st(_), st(g), W && W.d(), E && E.d(), st(C), st(M), D = !1, gc(y);
    }
  };
}
function Va(i) {
  let e, t, n, s, l;
  return t = new $1({}), {
    c() {
      e = tt("button"), it(t.$$.fragment), he(e, "class", "icon svelte-1bt1mh4"), he(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      Pt(o, e, r), lt(t, e, null), n = !0, s || (l = De(
        e,
        "click",
        /*click_handler_5*/
        i[51]
      ), s = !0);
    },
    p: mc,
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      fe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ht(e), st(t), s = !1, l();
    }
  };
}
function Na(i) {
  let e, t, n, s, l;
  return t = new o0({}), {
    c() {
      e = tt("button"), it(t.$$.fragment), he(e, "class", "icon svelte-1bt1mh4"), he(e, "aria-label", "Edit label");
    },
    m(o, r) {
      Pt(o, e, r), lt(t, e, null), n = !0, s || (l = De(
        e,
        "click",
        /*click_handler_6*/
        i[52]
      ), s = !0);
    },
    p: mc,
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      fe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ht(e), st(t), s = !1, l();
    }
  };
}
function Ka(i) {
  let e, t;
  return e = new ro({
    props: {
      choices: (
        /*choices*/
        i[1]
      ),
      choicesColors: (
        /*choicesColors*/
        i[2]
      ),
      label: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? Xn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[31]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[55]
  ), {
    c() {
      it(e.$$.fragment);
    },
    m(n, s) {
      lt(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      4097 && (l.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      4097 && (l.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? Xn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), e.$set(l);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      st(e, n);
    }
  };
}
function Za(i) {
  let e, t;
  return e = new ro({
    props: {
      choices: (
        /*choices*/
        i[1]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[2]
      ),
      label: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length && /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[12]
        ].label || /*choices*/
        (i[1].length > 0 ? (
          /*choices*/
          i[1][0][0]
        ) : "")
      ),
      color: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? Xn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].color
        ) : (
          /*choicesColors*/
          i[2].length > 0 ? (
            /*choicesColors*/
            i[2][0]
          ) : ""
        )
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[17]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[32]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[56]
  ), {
    c() {
      it(e.$$.fragment);
    },
    m(n, s) {
      lt(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value, choices*/
      4099 && (l.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length && /*value*/
      n[0].boxes[
        /*selectedBox*/
        n[12]
      ].label || /*choices*/
      (n[1].length > 0 ? (
        /*choices*/
        n[1][0][0]
      ) : "")), s[0] & /*selectedBox, value, choicesColors*/
      4101 && (l.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? Xn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : (
        /*choicesColors*/
        n[2].length > 0 ? (
          /*choicesColors*/
          n[2][0]
        ) : ""
      )), s[0] & /*labelDetailLock*/
      131072 && (l.labelDetailLock = /*labelDetailLock*/
      n[17]), e.$set(l);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      st(e, n);
    }
  };
}
function Ja(i) {
  let e, t;
  return e = new ro({
    props: {
      choices: (
        /*choices*/
        i[1]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[2]
      ),
      label: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? Xn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[17]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[33]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[57]
  ), {
    c() {
      it(e.$$.fragment);
    },
    m(n, s) {
      lt(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      4097 && (l.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      4097 && (l.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? Xn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      131072 && (l.labelDetailLock = /*labelDetailLock*/
      n[17]), e.$set(l);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      st(e, n);
    }
  };
}
function z2(i) {
  let e, t, n, s, l, o, r, a, c, f, u = (
    /*interactive*/
    i[4] && Oa(i)
  ), _ = (
    /*editModalVisible*/
    i[14] && Ka(i)
  ), d = (
    /*newModalVisible*/
    i[15] && Za(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[16] && Ja(i)
  );
  return {
    c() {
      e = tt("div"), t = tt("canvas"), n = nt(), u && u.c(), s = nt(), _ && _.c(), l = nt(), d && d.c(), o = nt(), h && h.c(), r = w2(), he(t, "tabindex", "0"), ls(
        t,
        "height",
        /*height*/
        i[6]
      ), ls(
        t,
        "width",
        /*width*/
        i[7]
      ), he(t, "class", "canvas-annotator svelte-1bt1mh4"), he(e, "class", "canvas-container svelte-1bt1mh4"), he(e, "tabindex", "-1");
    },
    m(g, b) {
      Pt(g, e, b), Me(e, t), i[45](t), Pt(g, n, b), u && u.m(g, b), Pt(g, s, b), _ && _.m(g, b), Pt(g, l, b), d && d.m(g, b), Pt(g, o, b), h && h.m(g, b), Pt(g, r, b), a = !0, c || (f = [
        De(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[19]
        ),
        De(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[20]
        ),
        De(t, "pointermove", function() {
          k2(
            /*handlesCursor*/
            i[8] ? (
              /*handlePointerMove*/
              i[21]
            ) : null
          ) && /*handlesCursor*/
          (i[8] ? (
            /*handlePointerMove*/
            i[21]
          ) : null).apply(this, arguments);
        }),
        De(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[30]
        ),
        De(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[22]
        ),
        De(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[35]
        ),
        De(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[36]
        )
      ], c = !0);
    },
    p(g, b) {
      i = g, (!a || b[0] & /*height*/
      64) && ls(
        t,
        "height",
        /*height*/
        i[6]
      ), (!a || b[0] & /*width*/
      128) && ls(
        t,
        "width",
        /*width*/
        i[7]
      ), /*interactive*/
      i[4] ? u ? (u.p(i, b), b[0] & /*interactive*/
      16 && oe(u, 1)) : (u = Oa(i), u.c(), oe(u, 1), u.m(s.parentNode, s)) : u && (si(), fe(u, 1, 1, () => {
        u = null;
      }), ii()), /*editModalVisible*/
      i[14] ? _ ? (_.p(i, b), b[0] & /*editModalVisible*/
      16384 && oe(_, 1)) : (_ = Ka(i), _.c(), oe(_, 1), _.m(l.parentNode, l)) : _ && (si(), fe(_, 1, 1, () => {
        _ = null;
      }), ii()), /*newModalVisible*/
      i[15] ? d ? (d.p(i, b), b[0] & /*newModalVisible*/
      32768 && oe(d, 1)) : (d = Za(i), d.c(), oe(d, 1), d.m(o.parentNode, o)) : d && (si(), fe(d, 1, 1, () => {
        d = null;
      }), ii()), /*editDefaultLabelVisible*/
      i[16] ? h ? (h.p(i, b), b[0] & /*editDefaultLabelVisible*/
      65536 && oe(h, 1)) : (h = Ja(i), h.c(), oe(h, 1), h.m(r.parentNode, r)) : h && (si(), fe(h, 1, 1, () => {
        h = null;
      }), ii());
    },
    i(g) {
      a || (oe(u), oe(_), oe(d), oe(h), a = !0);
    },
    o(g) {
      fe(u), fe(_), fe(d), fe(h), a = !1;
    },
    d(g) {
      g && (Ht(e), Ht(n), Ht(s), Ht(l), Ht(o), Ht(r)), i[45](null), u && u.d(g), _ && _.d(g), d && d.d(g), h && h.d(g), c = !1, gc(f);
    }
  };
}
const M2 = 50;
function Kn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Xn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function B2(i, e, t) {
  var n;
  (function(m) {
    m[m.creation = 0] = "creation", m[m.drag = 1] = "drag", m[m.freehand = 2] = "freehand", m[m.polygon = 3] = "polygon", m[m.erase = 4] = "erase";
  })(n || (n = {}));
  let s = [], l = [], o = !0, { imageUrl: r = null } = e, { interactive: a } = e, { boxAlpha: c = 0.5 } = e, { boxMinSize: f = 10 } = e, { handleSize: u } = e, { boxThickness: _ } = e, { boxSelectedThickness: d } = e, { value: h } = e, { choices: g = [] } = e, { choicesColors: b = [] } = e, { disableEditBoxes: w = !1 } = e, { height: v = "100%" } = e, { width: p = "100%" } = e, { singleBox: C = !1 } = e, { showRemoveButton: x = null } = e, { handlesCursor: S = !0 } = e, { useDefaultLabel: M = !1 } = e;
  x === null && (x = w);
  let k, D, y = null, W = -1, E = n.drag, z = new g2(T), U;
  h !== null && h.boxes.length == 0 && (E = n.creation);
  let ie = 0, G = 0, ae = 0, I = 0, Z = 1, V = 0, J = 0, H = !1, re = !1, ue = !1, q = null, xe = M, X = { label: "", color: "" };
  const P = S2();
  function T() {
    if (D) {
      if (D.clearRect(0, 0, k.width, k.height), D.save(), D.translate(z.offsetX, z.offsetY), D.scale(z.scale, z.scale), y !== null) {
        switch (h.orientation) {
          case 0:
            D.drawImage(y, 0, 0, V, J);
            break;
          case 1:
            D.translate(V, 0), D.rotate(Math.PI / 2), D.drawImage(y, 0, 0, J, V);
            break;
          case 2:
            D.translate(V, J), D.rotate(Math.PI), D.drawImage(y, 0, 0, V, J);
            break;
          case 3:
            D.translate(0, J), D.rotate(-Math.PI / 2), D.drawImage(y, 0, 0, J, V);
            break;
        }
        D.restore();
      }
      for (const m of h.boxes.slice().reverse())
        m.render(D);
      E === n.erase && U && U.renderErasePath(D);
    }
  }
  function te(m) {
    t(12, W = m), h.boxes.forEach((B) => {
      B.setSelected(!1);
    }), m >= 0 && m < h.boxes.length && h.boxes[m].setSelected(!0), T();
  }
  function L(m) {
    a && (o = !1, m.target instanceof Element && m.target.hasPointerCapture(m.pointerId) && m.target.releasePointerCapture(m.pointerId), E === n.creation ? Yt(m) : E === n.freehand ? Rs(m) : E === n.polygon ? Y(m) : E === n.erase ? Hn(m) : E === n.drag && ct(m));
  }
  function ct(m) {
    console.log("clickBox function called, mode:", E === n.drag ? "drag" : "creation");
    const B = k.getBoundingClientRect(), R = m.clientX - B.left, F = m.clientY - B.top;
    let O = !1;
    for (const [Q, $] of h.boxes.entries()) {
      const ut = $.indexOfPointInsideHandle(R, F);
      if (ut >= 0) {
        O = !0, te(Q);
        let hn = null;
        $.onMoveStart = () => {
          hn = Ce($), console.log("Resize started, captured state:", hn);
        }, $.onMoveEnd = () => {
          if (hn) {
            const ho = Ce($);
            console.log("Resize ended, final state:", ho), pe({
              type: "edit_shape",
              shapeIndex: Q,
              oldShapeData: hn,
              shapeData: ho
            }), hn = null;
          }
        }, $.startResize(ut, m);
        return;
      }
    }
    for (const [Q, $] of h.boxes.entries())
      if ($.isPointInsideBox(R, F)) {
        O = !0, te(Q);
        let ut = null;
        $.onMoveStart = () => {
          ut = Ce($);
        }, $.onMoveEnd = () => {
          ut && (pe({
            type: "edit_shape",
            shapeIndex: Q,
            oldShapeData: ut,
            shapeData: Ce($)
          }), ut = null);
        }, $.startDrag(m);
        return;
      }
    if (!O) {
      if (C || te(-1), console.log("No box selected, checking if we should dispatch select event"), E === n.drag) {
        console.log("Mode is drag, calculating coordinates");
        const Q = (R - z.offsetX) / Z / z.scale, $ = (F - z.offsetY) / Z / z.scale;
        console.log("Click detected in drag mode:", {
          mouseX: R,
          mouseY: F,
          imageX: Q,
          imageY: $,
          scaleFactor: Z,
          "canvasWindow.scale": z.scale,
          "canvasWindow.offsetX": z.offsetX,
          "canvasWindow.offsetY": z.offsetY
        }), y && Q >= 0 && Q <= y.naturalWidth && $ >= 0 && $ <= y.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(Q), Math.round($)]), P("select", {
          coordinates: [Math.round(Q), Math.round($)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!y,
          imageX: Q,
          imageY: $,
          naturalWidth: y == null ? void 0 : y.naturalWidth,
          naturalHeight: y == null ? void 0 : y.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", E);
      z.startDrag(m);
    }
  }
  function vt(m) {
    E === n.erase && U && fn(), P("change");
  }
  function Wt(m) {
    if (h === null)
      return;
    if (E === n.erase && U) {
      Hs(m);
      return;
    }
    if (E !== n.drag)
      return;
    const B = k.getBoundingClientRect(), R = m.clientX - B.left, F = m.clientY - B.top;
    for (const [O, Q] of h.boxes.entries()) {
      const $ = Q.indexOfPointInsideHandle(R, F);
      if ($ >= 0) {
        t(11, k.style.cursor = Q.resizeHandles[$].cursor, k);
        return;
      }
    }
    t(11, k.style.cursor = "default", k);
  }
  function Ee(m) {
    if (a) {
      if (m.ctrlKey) {
        switch (m.key.toLowerCase()) {
          case "z":
            m.shiftKey ? Rn() : Et(), m.preventDefault();
            break;
          case "y":
            Rn(), m.preventDefault();
            break;
        }
        return;
      }
      switch (m.key) {
        case "Delete":
          un();
          break;
        case " ":
          E === n.polygon && q && q.isCreating && (m.preventDefault(), q._points.length >= q.minPoints && q.finishCreating());
          break;
      }
    }
  }
  function ft(m) {
    m.preventDefault();
    const B = 1 / (1 + m.deltaY / 1e3 * 0.5), R = parseFloat((z.scale * B).toFixed(2)), F = R < 1 ? 1 : R, O = k.getBoundingClientRect(), Q = m.clientX - O.left, $ = m.clientY - O.top, ut = (Q - z.offsetX) / z.scale, hn = ($ - z.offsetY) / z.scale;
    z.offsetX = Q - ut * F, z.offsetY = $ - hn * F, z.scale = F, T();
  }
  function pe(m) {
    if (o) {
      console.log("Skipping undo action during initial state:", m);
      return;
    }
    t(10, l = []), s.push(Object.assign(Object.assign({}, m), { timestamp: Date.now() })), s.length > M2 && s.shift(), console.log("Added undo action:", m, "Stack size:", s.length);
  }
  function Et() {
    if (s.length === 0) {
      console.log("Cannot undo: stack is empty");
      return;
    }
    const m = s.pop();
    if (m) {
      switch (m.type) {
        case "create_shape":
          if (m.shapeIndex !== void 0 && m.shapeIndex < h.boxes.length) {
            const B = h.boxes.splice(m.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Ce(B),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const B = Vt(m.shapeData);
            h.boxes.splice(m.shapeIndex, 0, B), l.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (q && m.pointData) {
            if (q._points.pop(), q._points.length === 0) {
              const B = h.boxes.indexOf(q);
              B >= 0 && h.boxes.splice(B, 1), q = null;
            } else
              q.updateBoundingBox();
            l.push({
              type: "polygon_point",
              pointData: m.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.oldShapeData && m.shapeIndex < h.boxes.length) {
            const B = Ce(h.boxes[m.shapeIndex]);
            Vt(m.oldShapeData, h.boxes[m.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: B,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.oldShapeData) {
            const B = h.boxes.map((R) => Ce(R));
            t(0, h.boxes = [], h);
            for (const R of m.oldShapeData) {
              const F = Vt(R);
              F && h.boxes.push(F);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: B,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      te(-1), T(), P("change");
    }
  }
  function Rn() {
    if (l.length === 0) return;
    const m = l.pop();
    if (m) {
      switch (m.type) {
        case "create_shape":
          if (m.shapeIndex !== void 0 && m.shapeIndex < h.boxes.length) {
            const B = h.boxes.splice(m.shapeIndex, 1)[0];
            s.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Ce(B),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const B = Vt(m.shapeData);
            h.boxes.splice(m.shapeIndex, 0, B), s.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          m.pointData && (q ? (q._points.push(m.pointData), q._points.length === 1 && !h.boxes.includes(q) && (C ? t(0, h.boxes = [q], h) : t(0, h.boxes = [q, ...h.boxes], h)), q.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), s.push({
            type: "polygon_point",
            pointData: m.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.shapeData && m.shapeIndex < h.boxes.length) {
            const B = Ce(h.boxes[m.shapeIndex]);
            Vt(m.shapeData, h.boxes[m.shapeIndex]), s.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: B,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.shapeData) {
            const B = h.boxes.map((R) => Ce(R));
            t(0, h.boxes = [], h);
            for (const R of m.shapeData) {
              const F = Vt(R);
              F && h.boxes.push(F);
            }
            s.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: B,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      te(-1), T(), P("change");
    }
  }
  function Ce(m) {
    return m ? m instanceof on ? {
      type: "freehand",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof zt ? {
      type: "polygon",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof pn ? {
      type: "box",
      label: m.label,
      color: m.color,
      xmin: m._xmin,
      ymin: m._ymin,
      xmax: m._xmax,
      ymax: m._ymax
    } : null : null;
  }
  function Vt(m, B) {
    if (!m) return null;
    if (B)
      return B.label = m.label, B.color = m.color, B instanceof pn ? (B._xmin = m.xmin, B._ymin = m.ymin, B._xmax = m.xmax, B._ymax = m.ymax, B.applyUserScale()) : (B.xmin = m.xmin, B.ymin = m.ymin, B.xmax = m.xmax, B.ymax = m.ymax), (B instanceof on || B instanceof zt) && m.points && (B._points = [...m.points], B.updateBoundingBox()), B;
    switch (m.type) {
      case "freehand":
        const R = new on(T, Je, z, ie, G, ae, I, m.label, m.color, c, f, u, _, d);
        return R._points = [...m.points], R.updateBoundingBox(), R;
      case "polygon":
        const F = new zt(T, Je, z, ie, G, ae, I, m.label, m.color, c, f, u, _, d);
        return F._points = [...m.points], F.updateBoundingBox(), F;
      case "box":
        return new pn(T, Je, z, ie, G, ae, I, m.label, m.xmin, m.ymin, m.xmax, m.ymax, m.color, c, f, u, _, d);
    }
    return null;
  }
  function Rs(m) {
    const B = k.getBoundingClientRect();
    let R;
    b.length > 0 ? R = Kn(b[0]) : C ? h.boxes.length > 0 ? R = h.boxes[0].color : R = Ue[0] : R = Ue[h.boxes.length % Ue.length];
    let F = new on(T, Je, z, ie, G, ae, I, "", R, c, f, u, _, d);
    F.startCreating(m, B.left, B.top), C ? t(0, h.boxes = [F], h) : t(0, h.boxes = [F, ...h.boxes], h), pe({ type: "create_shape", shapeIndex: 0 }), te(0), T(), P("change");
  }
  function Y(m) {
    q && (!q._points || q._points.length === 0 || !h.boxes.includes(q)) && (console.log("Resetting invalid currentPolygon state"), q = null), q === null ? Nt(m) : q.isCreating && (q.addPoint(m) || (T(), P("change")));
  }
  function Nt(m) {
    const B = k.getBoundingClientRect();
    let R;
    b.length > 0 ? R = Kn(b[0]) : C ? h.boxes.length > 0 ? R = h.boxes[0].color : R = Ue[0] : R = Ue[h.boxes.length % Ue.length];
    let F = new zt(T, yc, z, ie, G, ae, I, "", R, c, f, u, _, d);
    F.onPointAdded = (O) => {
      pe({ type: "polygon_point", pointData: O });
    }, q = F, F.startCreating(m, B.left, B.top), C ? t(0, h.boxes = [F], h) : t(0, h.boxes = [F, ...h.boxes], h), pe({ type: "create_shape", shapeIndex: 0 }), te(0), T(), P("change");
  }
  function Yt(m) {
    const B = k.getBoundingClientRect(), R = (m.clientX - B.left - z.offsetX) / Z / z.scale, F = (m.clientY - B.top - z.offsetY) / Z / z.scale;
    let O;
    b.length > 0 ? O = Kn(b[0]) : C ? h.boxes.length > 0 ? O = h.boxes[0].color : O = Ue[0] : O = Ue[h.boxes.length % Ue.length];
    let Q = new pn(T, Je, z, ie, G, ae, I, "", R, F, R, F, O, c, f, u, _, d);
    Q.startCreating(m, B.left, B.top), C ? t(0, h.boxes = [Q], h) : t(0, h.boxes = [Q, ...h.boxes], h), pe({ type: "create_shape", shapeIndex: 0 }), te(0), T(), P("change");
  }
  function Hn(m) {
    U || (U = new m2(z, Z)), U.setScaleFactor(Z);
    const B = k.getBoundingClientRect();
    U.startErase(m, B), T();
  }
  function Hs(m) {
    if (!U) return;
    const B = k.getBoundingClientRect();
    U.continueErase(m, B), T();
  }
  function fn() {
    if (!U) return;
    const m = U.endErase();
    if (m.length === 0) {
      Se();
      return;
    }
    const B = [...h.boxes], R = [], F = [];
    for (let O = 0; O < h.boxes.length; O++) {
      const Q = h.boxes[O], $ = U.eraseFromShape(Q, m);
      if ($.length === 0)
        R.push(O);
      else {
        if ($.length === 1 && $[0] === Q)
          continue;
        R.push(O), F.push(...$);
      }
    }
    if (R.length > 0 || F.length > 0) {
      pe({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: B.map((O) => Ce(O)),
        shapeData: null
        // Will be filled after modification
      });
      for (let O = R.length - 1; O >= 0; O--)
        h.boxes.splice(R[O], 1);
      if (h.boxes.push(...F), s.length > 0) {
        const O = s[s.length - 1];
        O.type === "edit_shape" && O.shapeIndex === -1 && (O.shapeData = h.boxes.map((Q) => Ce(Q)));
      }
      te(-1), P("change");
    }
    T(), Se();
  }
  function Kt() {
    t(13, E = n.creation), t(11, k.style.cursor = "crosshair", k), q = null;
  }
  function Ri() {
    t(13, E = n.freehand), t(11, k.style.cursor = "crosshair", k), q = null;
  }
  function Hi() {
    t(13, E = n.polygon), t(11, k.style.cursor = "crosshair", k);
  }
  function Pn() {
    t(13, E = n.erase), t(11, k.style.cursor = "crosshair", k), q = null;
  }
  function Se() {
    t(13, E = n.drag), t(11, k.style.cursor = "default", k), q = null;
  }
  function Je() {
    W >= 0 && W < h.boxes.length && (h.boxes[W].getArea() < 1 ? un() : (w || (xe ? fo() : t(15, re = !0)), C && Se()));
  }
  function yc() {
    q = null, W >= 0 && W < h.boxes.length && (h.boxes[W].getArea() < 1 ? un() : (w || (xe ? fo() : t(15, re = !0)), Se()));
  }
  function Cc() {
    W >= 0 && W < h.boxes.length && !w && t(14, H = !0);
  }
  function xc(m) {
    a && Cc();
  }
  function co(m, B) {
    const R = g.findIndex((F) => F[0] === m);
    R === -1 ? (g.push([m, g.length]), b.push(B), t(1, g), t(2, b), console.log(`Added custom label "${m}" with color ${B} to choices`)) : b[R] !== B && (t(2, b[R] = B, b), t(2, b), console.log(`Updated color for existing label "${m}" to ${B}`));
  }
  function Sc(m) {
    t(14, H = !1);
    const { detail: B } = m;
    let R = B.label, F = B.color, O = B.ret;
    if (W >= 0 && W < h.boxes.length) {
      let Q = h.boxes[W];
      if (O == 1) {
        const $ = Ce(Q);
        co(R, F), Q.label = R, Q.color = Kn(F);
        const ut = Ce(Q);
        pe({
          type: "edit_shape",
          shapeIndex: W,
          oldShapeData: $,
          shapeData: ut
        }), T(), P("change");
      } else O == -1 && un();
    }
    setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function zc(m) {
    t(15, re = !1);
    const { detail: B } = m;
    let R = B.label, F = B.color, O = B.ret, Q = B.lock;
    if (W >= 0 && W < h.boxes.length) {
      let $ = h.boxes[W];
      O == 1 ? (co(R, F), t(17, xe = Q), X.label = R, X.color = F, $.label = R, $.color = Kn(F), T(), P("change"), Se()) : un();
    }
    setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function Mc(m) {
    t(16, ue = !1);
    const { detail: B } = m;
    let R = B.label, F = B.color, O = B.ret, Q = B.lock;
    O == 1 && (t(17, xe = Q), X.label = R, X.color = F), setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function fo() {
    if (W >= 0 && W < h.boxes.length) {
      let m = h.boxes[W];
      m.label = X.label, X.color !== "" && (m.color = Kn(X.color)), T(), P("change"), Se();
    }
    setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function un() {
    if (W >= 0 && W < h.boxes.length) {
      const m = h.boxes[W], B = Ce(m);
      pe({
        type: "delete_shape",
        shapeIndex: W,
        shapeData: B
      }), h.boxes.splice(W, 1), te(-1), C && Kt(), P("change");
    }
  }
  function Pi() {
    if (k) {
      if (Z = 1, t(11, k.width = k.clientWidth, k), z.setRotatedImage(y), y !== null) {
        if (z.imageRotatedWidth > k.width)
          Z = k.width / z.imageRotatedWidth, V = Math.round(z.imageRotatedWidth * Z), J = Math.round(z.imageRotatedHeight * Z), ie = 0, G = 0, ae = V, I = J, t(11, k.height = J, k);
        else {
          V = z.imageRotatedWidth, J = z.imageRotatedHeight;
          var m = (k.width - V) / 2;
          ie = m, G = 0, ae = m + V, I = J, t(11, k.height = J, k);
        }
        z.imageWidth = V, z.imageHeight = J;
      } else
        ie = 0, G = 0, ae = k.width, I = k.height, t(11, k.height = k.clientHeight, k);
      if (z.resize(k.width, k.height, ie, G), ae > 0 && I > 0)
        for (const B of h.boxes)
          B.canvasXmin = ie, B.canvasYmin = G, B.canvasXmax = ae, B.canvasYmax = I, B.setScaleFactor(Z);
      T(), P("change");
    }
  }
  const Bc = new ResizeObserver(Pi);
  function Dc() {
    for (let m = 0; m < h.boxes.length; m++) {
      let B = h.boxes[m];
      if (!(B instanceof pn) && !(B instanceof on) && !(B instanceof zt)) {
        let R = "", F = "";
        if (B.hasOwnProperty("color") ? (R = B.color, Array.isArray(R) && R.length === 3 && (R = `rgb(${R[0]}, ${R[1]}, ${R[2]})`)) : R = Ue[m % Ue.length], B.hasOwnProperty("label") && (F = B.label), B.hasOwnProperty("type") && B.type === "freehand" && B.hasOwnProperty("points")) {
          let O = new on(T, Je, z, ie, G, ae, I, F, R, c, f, u, _, d);
          O._points = B.points, O.updateBoundingBox(), B = O;
        } else if (B.hasOwnProperty("type") && B.type === "polygon" && B.hasOwnProperty("points")) {
          let O = new zt(T, Je, z, ie, G, ae, I, F, R, c, f, u, _, d);
          O._points = B.points, O.updateBoundingBox(), B = O;
        } else
          B = new pn(T, Je, z, ie, G, ae, I, F, B.xmin, B.ymin, B.xmax, B.ymax, R, c, f, u, _, d);
        t(0, h.boxes[m] = B, h);
      }
    }
  }
  function uo() {
    r !== null && (y === null || y.src != r) && (y = new Image(), y.src = r, y.onload = function() {
      Pi(), T();
    });
  }
  C2(() => {
    if (o = !0, Array.isArray(g) && g.length > 0) {
      if (!Array.isArray(b) || b.length == 0)
        for (let m = 0; m < g.length; m++) {
          let B = Ue[m % Ue.length];
          b.push(Xn(B));
        }
      X.label = g[0][0], X.color = b[0];
    }
    D = k.getContext("2d"), Bc.observe(k), W < 0 && h !== null && h.boxes.length > 0 && te(0), uo(), Pi(), T(), setTimeout(
      () => {
        o = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function Wc() {
    document.addEventListener("keydown", Ee);
  }
  function Ec() {
    document.removeEventListener("keydown", Ee);
  }
  x2(() => {
    document.removeEventListener("keydown", Ee);
  });
  function Yc(m) {
    p2[m ? "unshift" : "push"](() => {
      k = m, t(11, k);
    });
  }
  const Xc = () => Kt(), Lc = () => Ri(), qc = () => Hi(), Ic = () => Pn(), Rc = () => Se(), Hc = () => un(), Pc = () => t(16, ue = !0), Ac = () => Et(), Tc = () => Rn();
  function Fc(m) {
    Dl.call(this, i, m);
  }
  function Uc(m) {
    Dl.call(this, i, m);
  }
  function jc(m) {
    Dl.call(this, i, m);
  }
  return i.$$set = (m) => {
    "imageUrl" in m && t(37, r = m.imageUrl), "interactive" in m && t(4, a = m.interactive), "boxAlpha" in m && t(38, c = m.boxAlpha), "boxMinSize" in m && t(39, f = m.boxMinSize), "handleSize" in m && t(40, u = m.handleSize), "boxThickness" in m && t(41, _ = m.boxThickness), "boxSelectedThickness" in m && t(42, d = m.boxSelectedThickness), "value" in m && t(0, h = m.value), "choices" in m && t(1, g = m.choices), "choicesColors" in m && t(2, b = m.choicesColors), "disableEditBoxes" in m && t(5, w = m.disableEditBoxes), "height" in m && t(6, v = m.height), "width" in m && t(7, p = m.width), "singleBox" in m && t(43, C = m.singleBox), "showRemoveButton" in m && t(3, x = m.showRemoveButton), "handlesCursor" in m && t(8, S = m.handlesCursor), "useDefaultLabel" in m && t(44, M = m.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (z.orientation = h.orientation, uo(), Dc(), Pi(), T());
  }, [
    h,
    g,
    b,
    x,
    a,
    w,
    v,
    p,
    S,
    n,
    l,
    k,
    W,
    E,
    H,
    re,
    ue,
    xe,
    s,
    L,
    vt,
    Wt,
    ft,
    Et,
    Rn,
    Kt,
    Ri,
    Hi,
    Pn,
    Se,
    xc,
    Sc,
    zc,
    Mc,
    un,
    Wc,
    Ec,
    r,
    c,
    f,
    u,
    _,
    d,
    C,
    M,
    Yc,
    Xc,
    Lc,
    qc,
    Ic,
    Rc,
    Hc,
    Pc,
    Ac,
    Tc,
    Fc,
    Uc,
    jc
  ];
}
class D2 extends b2 {
  constructor(e) {
    super(), v2(
      this,
      e,
      B2,
      z2,
      y2,
      {
        imageUrl: 37,
        interactive: 4,
        boxAlpha: 38,
        boxMinSize: 39,
        handleSize: 40,
        boxThickness: 41,
        boxSelectedThickness: 42,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 43,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 44
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: W2,
  add_flush_callback: E2,
  bind: Y2,
  binding_callbacks: X2,
  create_component: L2,
  destroy_component: q2,
  init: I2,
  mount_component: R2,
  safe_not_equal: H2,
  transition_in: P2,
  transition_out: A2
} = window.__gradio__svelte__internal, { createEventDispatcher: T2 } = window.__gradio__svelte__internal;
function F2(i) {
  let e, t, n;
  function s(o) {
    i[20](o);
  }
  let l = {
    interactive: (
      /*interactive*/
      i[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      i[2]
    ),
    choices: (
      /*labelList*/
      i[3]
    ),
    choicesColors: (
      /*labelColors*/
      i[4]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[5]
    ),
    handleSize: (
      /*handleSize*/
      i[6]
    ),
    boxThickness: (
      /*boxThickness*/
      i[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[11]
    ),
    singleBox: (
      /*singleBox*/
      i[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[15]
    ),
    imageUrl: (
      /*resolved_src*/
      i[16]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (l.value = /*value*/
    i[0]), e = new D2({ props: l }), X2.push(() => Y2(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), e.$on(
      "select",
      /*select_handler*/
      i[22]
    ), {
      c() {
        L2(e.$$.fragment);
      },
      m(o, r) {
        R2(e, o, r), n = !0;
      },
      p(o, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        o[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        o[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        o[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        o[4]), r & /*height*/
        256 && (a.height = /*height*/
        o[8]), r & /*width*/
        512 && (a.width = /*width*/
        o[9]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        o[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        o[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        o[7]), r & /*boxSelectedThickness*/
        1024 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        o[10]), r & /*disableEditBoxes*/
        2048 && (a.disableEditBoxes = /*disableEditBoxes*/
        o[11]), r & /*singleBox*/
        4096 && (a.singleBox = /*singleBox*/
        o[12]), r & /*showRemoveButton*/
        8192 && (a.showRemoveButton = /*showRemoveButton*/
        o[13]), r & /*handlesCursor*/
        16384 && (a.handlesCursor = /*handlesCursor*/
        o[14]), r & /*useDefaultLabel*/
        32768 && (a.useDefaultLabel = /*useDefaultLabel*/
        o[15]), r & /*resolved_src*/
        65536 && (a.imageUrl = /*resolved_src*/
        o[16]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        o[0], E2(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (P2(e.$$.fragment, o), n = !0);
      },
      o(o) {
        A2(e.$$.fragment, o), n = !1;
      },
      d(o) {
        q2(e, o);
      }
    }
  );
}
function U2(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: h } = e, { disableEditBoxes: g } = e, { singleBox: b } = e, { showRemoveButton: w } = e, { handlesCursor: v } = e, { useDefaultLabel: p } = e, C, x;
  const S = T2();
  function M(y) {
    h = y, t(0, h);
  }
  const k = () => S("change"), D = (y) => S("select", y.detail);
  return i.$$set = (y) => {
    "src" in y && t(18, n = y.src), "interactive" in y && t(1, s = y.interactive), "boxesAlpha" in y && t(2, l = y.boxesAlpha), "labelList" in y && t(3, o = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, c = y.handleSize), "boxThickness" in y && t(7, f = y.boxThickness), "height" in y && t(8, u = y.height), "width" in y && t(9, _ = y.width), "boxSelectedThickness" in y && t(10, d = y.boxSelectedThickness), "value" in y && t(0, h = y.value), "disableEditBoxes" in y && t(11, g = y.disableEditBoxes), "singleBox" in y && t(12, b = y.singleBox), "showRemoveButton" in y && t(13, w = y.showRemoveButton), "handlesCursor" in y && t(14, v = y.handlesCursor), "useDefaultLabel" in y && t(15, p = y.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, C = n), t(19, x = n);
      const y = n;
      Nd(y).then((W) => {
        x === y && t(16, C = W);
      });
    }
  }, [
    h,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    _,
    d,
    g,
    b,
    w,
    v,
    p,
    C,
    S,
    n,
    x,
    M,
    k,
    D
  ];
}
class j2 extends W2 {
  constructor(e) {
    super(), I2(this, e, U2, F2, H2, {
      src: 18,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      height: 8,
      width: 9,
      boxSelectedThickness: 10,
      value: 0,
      disableEditBoxes: 11,
      singleBox: 12,
      showRemoveButton: 13,
      handlesCursor: 14,
      useDefaultLabel: 15
    });
  }
}
class Ga {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: O2,
  add_flush_callback: Ss,
  append: Zn,
  attr: zi,
  bind: zs,
  binding_callbacks: Xi,
  bubble: wi,
  check_outros: wn,
  create_component: Tt,
  create_slot: V2,
  destroy_component: Ft,
  detach: Bn,
  element: Ei,
  empty: N2,
  get_all_dirty_from_scope: K2,
  get_slot_changes: Z2,
  group_outros: vn,
  init: J2,
  insert: Dn,
  mount_component: Ut,
  noop: G2,
  safe_not_equal: Q2,
  space: bn,
  toggle_class: Qa,
  transition_in: le,
  transition_out: ce,
  update_slot_base: $2
} = window.__gradio__svelte__internal, { createEventDispatcher: eb, tick: tb } = window.__gradio__svelte__internal;
function $a(i) {
  let e, t;
  return e = new om({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [nb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, s) {
      Ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*value*/
      2 && (l.href = /*value*/
      n[1].image.url), s[0] & /*value*/
      2 && (l.download = /*value*/
      n[1].image.orig_name || "image"), s[0] & /*i18n*/
      256 | s[1] & /*$$scope*/
      8388608 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ft(e, n);
    }
  };
}
function nb(i) {
  let e, t;
  return e = new Ms({
    props: {
      Icon: wh,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, s) {
      Ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ft(e, n);
    }
  };
}
function er(i) {
  let e, t;
  return e = new F_({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[38]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[39]
  ), e.$on(
    "error",
    /*error_handler*/
    i[40]
  ), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, s) {
      Ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.i18n = /*i18n*/
      n[8]), s[0] & /*value*/
      2 && (l.value = /*value*/
      n[1]), e.$set(l);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ft(e, n);
    }
  };
}
function tr(i) {
  let e, t, n;
  return t = new Ms({
    props: { Icon: br, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = Ei("div"), Tt(t.$$.fragment);
    },
    m(s, l) {
      Dn(s, e, l), Ut(t, e, null), n = !0;
    },
    p: G2,
    i(s) {
      n || (le(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Bn(e), Ft(t);
    }
  };
}
function nr(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = V2(
    t,
    i,
    /*$$scope*/
    i[54],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(s, l) {
      n && n.m(s, l), e = !0;
    },
    p(s, l) {
      n && n.p && (!e || l[1] & /*$$scope*/
      8388608) && $2(
        n,
        t,
        s,
        /*$$scope*/
        s[54],
        e ? Z2(
          t,
          /*$$scope*/
          s[54],
          l,
          null
        ) : K2(
          /*$$scope*/
          s[54]
        ),
        null
      );
    },
    i(s) {
      e || (le(n, s), e = !0);
    },
    o(s) {
      ce(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function ib(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && nr(i)
  );
  return {
    c() {
      n && n.c(), e = N2();
    },
    m(s, l) {
      n && n.m(s, l), Dn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && le(n, 1)) : (n = nr(s), n.c(), le(n, 1), n.m(e.parentNode, e)) : n && (vn(), ce(n, 1, 1, () => {
        n = null;
      }), wn());
    },
    i(s) {
      t || (le(n), t = !0);
    },
    o(s) {
      ce(n), t = !1;
    },
    d(s) {
      s && Bn(e), n && n.d(s);
    }
  };
}
function ir(i) {
  let e, t;
  return e = new W1({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[31]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[45]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[46]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[47]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[48]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[49]
  ), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, s) {
      Ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*root*/
      64 && (l.root = /*root*/
      n[6]), s[0] & /*i18n*/
      256 && (l.i18n = /*i18n*/
      n[8]), s[1] & /*upload*/
      1 && (l.upload = /*upload*/
      n[31]), e.$set(l);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ft(e, n);
    }
  };
}
function sr(i) {
  let e, t, n, s;
  function l(r) {
    i[50](r);
  }
  let o = {
    height: (
      /*height*/
      i[17]
    ),
    width: (
      /*width*/
      i[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      i[12]
    ),
    labelList: (
      /*labelList*/
      i[13]
    ),
    labelColors: (
      /*labelColors*/
      i[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[15]
    ),
    interactive: (
      /*interactive*/
      i[7]
    ),
    handleSize: (
      /*handleSize*/
      i[16]
    ),
    boxThickness: (
      /*boxThickness*/
      i[19]
    ),
    singleBox: (
      /*singleBox*/
      i[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[28]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (o.value = /*value*/
    i[1]), t = new j2({ props: o }), Xi.push(() => zs(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), t.$on(
      "select",
      /*select_handler*/
      i[52]
    ), {
      c() {
        e = Ei("div"), Tt(t.$$.fragment), zi(e, "class", "image-frame svelte-1gjdske"), Qa(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Dn(r, e, a), Ut(t, e, null), s = !0;
      },
      p(r, a) {
        const c = {};
        a[0] & /*height*/
        131072 && (c.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (c.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
        4096 && (c.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (c.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (c.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (c.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (c.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (c.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        524288 && (c.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (c.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (c.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (c.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (c.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (c.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (c.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*value*/
        2 && (c.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, c.value = /*value*/
        r[1], Ss(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Qa(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (le(t.$$.fragment, r), s = !0);
      },
      o(r) {
        ce(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Bn(e), Ft(t);
      }
    }
  );
}
function lr(i) {
  let e, t, n;
  function s(o) {
    i[53](o);
  }
  let l = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[36]
    ),
    handle_select: (
      /*handle_select_source*/
      i[35]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (l.active_source = /*active_source*/
    i[0]), e = new sd({ props: l }), Xi.push(() => zs(e, "active_source", s)), {
      c() {
        Tt(e.$$.fragment);
      },
      m(o, r) {
        Ut(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], Ss(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (le(e.$$.fragment, o), n = !0);
      },
      o(o) {
        ce(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Ft(e, o);
      }
    }
  );
}
function sb(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), b;
  e = new lu({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: pr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && $a(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && er(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && tr(i)
  );
  function C(y) {
    i[42](y);
  }
  function x(y) {
    i[43](y);
  }
  let S = {
    hidden: (
      /*value*/
      i[1] !== null || /*active_source*/
      i[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      i[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      i[6]
    ),
    max_file_size: (
      /*max_file_size*/
      i[25]
    ),
    disable_click: !/*sources*/
    i[4].includes("upload"),
    upload: (
      /*cli_upload*/
      i[26]
    ),
    stream_handler: (
      /*stream_handler*/
      i[27]
    ),
    $$slots: { default: [ib] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (S.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (S.dragging = /*dragging*/
  i[30]), c = new Pm({ props: S }), i[41](c), Xi.push(() => zs(c, "uploading", C)), Xi.push(() => zs(c, "dragging", x)), c.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let M = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && ir(i)
  ), k = (
    /*value*/
    i[1] !== null && sr(i)
  ), D = g && lr(i);
  return {
    c() {
      Tt(e.$$.fragment), t = bn(), n = Ei("div"), w && w.c(), s = bn(), v && v.c(), l = bn(), p && p.c(), o = bn(), r = Ei("div"), a = Ei("div"), Tt(c.$$.fragment), _ = bn(), M && M.c(), d = bn(), k && k.c(), h = bn(), D && D.c(), zi(n, "class", "icon-buttons svelte-1gjdske"), zi(a, "class", "upload-container svelte-1gjdske"), zi(r, "data-testid", "image"), zi(r, "class", "image-container svelte-1gjdske");
    },
    m(y, W) {
      Ut(e, y, W), Dn(y, t, W), Dn(y, n, W), w && w.m(n, null), Zn(n, s), v && v.m(n, null), Zn(n, l), p && p.m(n, null), Dn(y, o, W), Dn(y, r, W), Zn(r, a), Ut(c, a, null), Zn(a, _), M && M.m(a, null), Zn(a, d), k && k.m(a, null), Zn(r, h), D && D.m(r, null), b = !0;
    },
    p(y, W) {
      const E = {};
      W[0] & /*show_label*/
      8 && (E.show_label = /*show_label*/
      y[3]), W[0] & /*label*/
      4 && (E.label = /*label*/
      y[2] || "Image Annotator"), e.$set(E), /*showDownloadButton*/
      y[10] && /*value*/
      y[1] !== null ? w ? (w.p(y, W), W[0] & /*showDownloadButton, value*/
      1026 && le(w, 1)) : (w = $a(y), w.c(), le(w, 1), w.m(n, s)) : w && (vn(), ce(w, 1, 1, () => {
        w = null;
      }), wn()), /*showShareButton*/
      y[9] && /*value*/
      y[1] !== null ? v ? (v.p(y, W), W[0] & /*showShareButton, value*/
      514 && le(v, 1)) : (v = er(y), v.c(), le(v, 1), v.m(n, l)) : v && (vn(), ce(v, 1, 1, () => {
        v = null;
      }), wn()), /*showClearButton*/
      y[11] && /*value*/
      y[1] !== null && /*interactive*/
      y[7] ? p ? (p.p(y, W), W[0] & /*showClearButton, value, interactive*/
      2178 && le(p, 1)) : (p = tr(y), p.c(), le(p, 1), p.m(n, null)) : p && (vn(), ce(p, 1, 1, () => {
        p = null;
      }), wn());
      const z = {};
      W[0] & /*value, active_source*/
      3 && (z.hidden = /*value*/
      y[1] !== null || /*active_source*/
      y[0] === "webcam"), W[0] & /*active_source*/
      1 && (z.filetype = /*active_source*/
      y[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (z.root = /*root*/
      y[6]), W[0] & /*max_file_size*/
      33554432 && (z.max_file_size = /*max_file_size*/
      y[25]), W[0] & /*sources*/
      16 && (z.disable_click = !/*sources*/
      y[4].includes("upload")), W[0] & /*cli_upload*/
      67108864 && (z.upload = /*cli_upload*/
      y[26]), W[0] & /*stream_handler*/
      134217728 && (z.stream_handler = /*stream_handler*/
      y[27]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      8388608 && (z.$$scope = { dirty: W, ctx: y }), !f && W[0] & /*uploading*/
      536870912 && (f = !0, z.uploading = /*uploading*/
      y[29], Ss(() => f = !1)), !u && W[0] & /*dragging*/
      1073741824 && (u = !0, z.dragging = /*dragging*/
      y[30], Ss(() => u = !1)), c.$set(z), /*value*/
      y[1] === null && /*active_source*/
      y[0] === "webcam" ? M ? (M.p(y, W), W[0] & /*value, active_source*/
      3 && le(M, 1)) : (M = ir(y), M.c(), le(M, 1), M.m(a, d)) : M && (vn(), ce(M, 1, 1, () => {
        M = null;
      }), wn()), /*value*/
      y[1] !== null ? k ? (k.p(y, W), W[0] & /*value*/
      2 && le(k, 1)) : (k = sr(y), k.c(), le(k, 1), k.m(a, null)) : k && (vn(), ce(k, 1, 1, () => {
        k = null;
      }), wn()), W[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (y[4].length > 1 || /*sources*/
      y[4].includes("clipboard")) && /*value*/
      y[1] === null && /*interactive*/
      y[7]), g ? D ? (D.p(y, W), W[0] & /*sources, value, interactive*/
      146 && le(D, 1)) : (D = lr(y), D.c(), le(D, 1), D.m(r, null)) : D && (vn(), ce(D, 1, 1, () => {
        D = null;
      }), wn());
    },
    i(y) {
      b || (le(e.$$.fragment, y), le(w), le(v), le(p), le(c.$$.fragment, y), le(M), le(k), le(D), b = !0);
    },
    o(y) {
      ce(e.$$.fragment, y), ce(w), ce(v), ce(p), ce(c.$$.fragment, y), ce(M), ce(k), ce(D), b = !1;
    },
    d(y) {
      y && (Bn(t), Bn(n), Bn(o), Bn(r)), Ft(e, y), w && w.d(), v && v.d(), p && p.d(), i[41](null), Ft(c), M && M.d(), k && k.d(), D && D.d();
    }
  };
}
function lb(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(Y, Nt, Yt, Hn) {
    function Hs(fn) {
      return fn instanceof Yt ? fn : new Yt(function(Kt) {
        Kt(fn);
      });
    }
    return new (Yt || (Yt = Promise))(function(fn, Kt) {
      function Ri(Se) {
        try {
          Pn(Hn.next(Se));
        } catch (Je) {
          Kt(Je);
        }
      }
      function Hi(Se) {
        try {
          Pn(Hn.throw(Se));
        } catch (Je) {
          Kt(Je);
        }
      }
      function Pn(Se) {
        Se.done ? fn(Se.value) : Hs(Se.value).then(Ri, Hi);
      }
      Pn((Hn = Hn.apply(Y, Nt || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: g } = e, { showClearButton: b } = e, { boxesAlpha: w } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: C } = e, { handleSize: x } = e, { height: S } = e, { width: M } = e, { boxThickness: k } = e, { disableEditBoxes: D } = e, { singleBox: y } = e, { showRemoveButton: W } = e, { handlesCursor: E } = e, { boxSelectedThickness: z } = e, { max_file_size: U = null } = e, { cli_upload: ie } = e, { stream_handler: G } = e, { useDefaultLabel: ae } = e, I, Z = !1, { active_source: V = null } = e;
  function J({ detail: Y }) {
    t(1, o = new Ga()), t(1, o.image = Y, o), re("upload");
  }
  function H(Y) {
    return l(this, void 0, void 0, function* () {
      const Nt = yield I.load_files([new File([Y], "webcam.png")]), Yt = (Nt == null ? void 0 : Nt[0]) || null;
      Yt ? (t(1, o = new Ga()), t(1, o.image = Yt, o)) : t(1, o = null), yield tb(), re("change");
    });
  }
  const re = eb();
  let ue = !1;
  function q(Y) {
    return l(this, void 0, void 0, function* () {
      switch (Y) {
        case "clipboard":
          I.paste_clipboard();
          break;
      }
    });
  }
  function xe() {
    t(1, o = null), re("clear"), re("change");
  }
  const X = async (Y) => Y === null ? "" : `<img src="${await D_(Y.image)}" />`;
  function P(Y) {
    wi.call(this, i, Y);
  }
  function T(Y) {
    wi.call(this, i, Y);
  }
  function te(Y) {
    Xi[Y ? "unshift" : "push"](() => {
      I = Y, t(31, I);
    });
  }
  function L(Y) {
    Z = Y, t(29, Z);
  }
  function ct(Y) {
    ue = Y, t(30, ue);
  }
  function vt(Y) {
    wi.call(this, i, Y);
  }
  const Wt = (Y) => H(Y.detail), Ee = (Y) => H(Y.detail);
  function ft(Y) {
    wi.call(this, i, Y);
  }
  function pe(Y) {
    wi.call(this, i, Y);
  }
  const Et = (Y) => H(Y.detail);
  function Rn(Y) {
    o = Y, t(1, o);
  }
  const Ce = () => re("change"), Vt = (Y) => re("select", { index: null, value: Y.detail.coordinates });
  function Rs(Y) {
    V = Y, t(0, V), t(4, c);
  }
  return i.$$set = (Y) => {
    "value" in Y && t(1, o = Y.value), "label" in Y && t(2, r = Y.label), "show_label" in Y && t(3, a = Y.show_label), "sources" in Y && t(4, c = Y.sources), "selectable" in Y && t(5, f = Y.selectable), "root" in Y && t(6, u = Y.root), "interactive" in Y && t(7, _ = Y.interactive), "i18n" in Y && t(8, d = Y.i18n), "showShareButton" in Y && t(9, h = Y.showShareButton), "showDownloadButton" in Y && t(10, g = Y.showDownloadButton), "showClearButton" in Y && t(11, b = Y.showClearButton), "boxesAlpha" in Y && t(12, w = Y.boxesAlpha), "labelList" in Y && t(13, v = Y.labelList), "labelColors" in Y && t(14, p = Y.labelColors), "boxMinSize" in Y && t(15, C = Y.boxMinSize), "handleSize" in Y && t(16, x = Y.handleSize), "height" in Y && t(17, S = Y.height), "width" in Y && t(18, M = Y.width), "boxThickness" in Y && t(19, k = Y.boxThickness), "disableEditBoxes" in Y && t(20, D = Y.disableEditBoxes), "singleBox" in Y && t(21, y = Y.singleBox), "showRemoveButton" in Y && t(22, W = Y.showRemoveButton), "handlesCursor" in Y && t(23, E = Y.handlesCursor), "boxSelectedThickness" in Y && t(24, z = Y.boxSelectedThickness), "max_file_size" in Y && t(25, U = Y.max_file_size), "cli_upload" in Y && t(26, ie = Y.cli_upload), "stream_handler" in Y && t(27, G = Y.stream_handler), "useDefaultLabel" in Y && t(28, ae = Y.useDefaultLabel), "active_source" in Y && t(0, V = Y.active_source), "$$scope" in Y && t(54, s = Y.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && Z && xe(), i.$$.dirty[0] & /*dragging*/
    1073741824 && re("drag", ue), i.$$.dirty[0] & /*active_source, sources*/
    17 && !V && c && t(0, V = c[0]);
  }, [
    V,
    o,
    r,
    a,
    c,
    f,
    u,
    _,
    d,
    h,
    g,
    b,
    w,
    v,
    p,
    C,
    x,
    S,
    M,
    k,
    D,
    y,
    W,
    E,
    z,
    U,
    ie,
    G,
    ae,
    Z,
    ue,
    I,
    J,
    H,
    re,
    q,
    xe,
    n,
    X,
    P,
    T,
    te,
    L,
    ct,
    vt,
    Wt,
    Ee,
    ft,
    pe,
    Et,
    Rn,
    Ce,
    Vt,
    Rs,
    s
  ];
}
class ob extends O2 {
  constructor(e) {
    super(), J2(
      this,
      e,
      lb,
      sb,
      Q2,
      {
        value: 1,
        label: 2,
        show_label: 3,
        sources: 4,
        selectable: 5,
        root: 6,
        interactive: 7,
        i18n: 8,
        showShareButton: 9,
        showDownloadButton: 10,
        showClearButton: 11,
        boxesAlpha: 12,
        labelList: 13,
        labelColors: 14,
        boxMinSize: 15,
        handleSize: 16,
        height: 17,
        width: 18,
        boxThickness: 19,
        disableEditBoxes: 20,
        singleBox: 21,
        showRemoveButton: 22,
        handlesCursor: 23,
        boxSelectedThickness: 24,
        max_file_size: 25,
        cli_upload: 26,
        stream_handler: 27,
        useDefaultLabel: 28,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: ab,
  attr: _s,
  detach: bc,
  element: pc,
  init: rb,
  insert: wc,
  noop: or,
  safe_not_equal: cb,
  src_url_equal: ar,
  toggle_class: nn
} = window.__gradio__svelte__internal;
function rr(i) {
  let e, t;
  return {
    c() {
      e = pc("img"), ar(e.src, t = /*value*/
      i[0].url) || _s(e, "src", t), _s(e, "alt", "");
    },
    m(n, s) {
      wc(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !ar(e.src, t = /*value*/
      n[0].url) && _s(e, "src", t);
    },
    d(n) {
      n && bc(e);
    }
  };
}
function fb(i) {
  let e, t = (
    /*value*/
    i[0] && rr(i)
  );
  return {
    c() {
      e = pc("div"), t && t.c(), _s(e, "class", "container svelte-1sgcyba"), nn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), nn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), nn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), nn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      wc(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = rr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && nn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && nn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && nn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && nn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: or,
    o: or,
    d(n) {
      n && bc(e), t && t.d();
    }
  };
}
function ub(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class Ib extends ab {
  constructor(e) {
    super(), rb(this, e, ub, fb, cb, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: hb,
  add_flush_callback: cr,
  assign: _b,
  bind: fr,
  binding_callbacks: ur,
  check_outros: db,
  create_component: Ln,
  destroy_component: qn,
  detach: vc,
  empty: mb,
  flush: se,
  get_spread_object: gb,
  get_spread_update: bb,
  group_outros: pb,
  init: wb,
  insert: kc,
  mount_component: In,
  safe_not_equal: vb,
  space: kb,
  transition_in: jt,
  transition_out: Ot
} = window.__gradio__svelte__internal;
function yb(i) {
  let e, t;
  return e = new Iu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Sb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, s) {
      In(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      8192 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qn(e, n);
    }
  };
}
function Cb(i) {
  let e, t;
  return e = new Sr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, s) {
      In(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qn(e, n);
    }
  };
}
function xb(i) {
  let e, t;
  return e = new Sr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, s) {
      In(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qn(e, n);
    }
  };
}
function Sb(i) {
  let e, t;
  return e = new pr({}), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, s) {
      In(e, n, s), t = !0;
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qn(e, n);
    }
  };
}
function zb(i) {
  let e, t, n, s;
  const l = [xb, Cb, yb], o = [];
  function r(a, c) {
    return (
      /*active_source*/
      a[33] === "upload" ? 0 : (
        /*active_source*/
        a[33] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = mb();
    },
    m(a, c) {
      o[e].m(a, c), kc(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (pb(), Ot(o[f], 1, 1, () => {
        o[f] = null;
      }), db(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), jt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (jt(t), s = !0);
    },
    o(a) {
      Ot(t), s = !1;
    },
    d(a) {
      a && vc(n), o[e].d(a);
    }
  };
}
function Mb(i) {
  let e, t, n, s, l, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[31].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[31].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = _b(a, r[_]);
  e = new Ud({ props: a });
  function c(_) {
    i[34](_);
  }
  function f(_) {
    i[35](_);
  }
  let u = {
    selectable: (
      /*_selectable*/
      i[10]
    ),
    root: (
      /*root*/
      i[7]
    ),
    sources: (
      /*sources*/
      i[14]
    ),
    interactive: (
      /*interactive*/
      i[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      i[15]
    ),
    showShareButton: (
      /*show_share_button*/
      i[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      i[17]
    ),
    i18n: (
      /*gradio*/
      i[31].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      i[19]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    labelList: (
      /*label_list*/
      i[20]
    ),
    labelColors: (
      /*label_colors*/
      i[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      i[22]
    ),
    label: (
      /*label*/
      i[5]
    ),
    show_label: (
      /*show_label*/
      i[6]
    ),
    max_file_size: (
      /*gradio*/
      i[31].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[31].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[31].client.stream
    ),
    handleSize: (
      /*handle_size*/
      i[23]
    ),
    boxThickness: (
      /*box_thickness*/
      i[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      i[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      i[26]
    ),
    singleBox: (
      /*single_box*/
      i[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      i[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      i[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      i[30]
    ),
    $$slots: { default: [zb] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new ob({ props: u }), ur.push(() => fr(n, "active_source", c)), ur.push(() => fr(n, "value", f)), n.$on(
      "change",
      /*change_handler*/
      i[36]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[37]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[38]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[39]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[40]
    ), n.$on(
      "select",
      /*select_handler*/
      i[41]
    ), n.$on(
      "share",
      /*share_handler*/
      i[42]
    ), n.$on(
      "error",
      /*error_handler*/
      i[43]
    ), {
      c() {
        Ln(e.$$.fragment), t = kb(), Ln(n.$$.fragment);
      },
      m(_, d) {
        In(e, _, d), kc(_, t, d), In(n, _, d), o = !0;
      },
      p(_, d) {
        const h = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? bb(r, [
          d[1] & /*gradio*/
          1 && {
            autoscroll: (
              /*gradio*/
              _[31].autoscroll
            )
          },
          d[1] & /*gradio*/
          1 && { i18n: (
            /*gradio*/
            _[31].i18n
          ) },
          d[0] & /*loading_status*/
          2 && gb(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(h);
        const g = {};
        d[0] & /*_selectable*/
        1024 && (g.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (g.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (g.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (g.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (g.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (g.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (g.showClearButton = /*show_clear_button*/
        _[17]), d[1] & /*gradio*/
        1 && (g.i18n = /*gradio*/
        _[31].i18n), d[0] & /*boxes_alpha*/
        524288 && (g.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*height*/
        256 && (g.height = /*height*/
        _[8]), d[0] & /*width*/
        512 && (g.width = /*width*/
        _[9]), d[0] & /*label_list*/
        1048576 && (g.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (g.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (g.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (g.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (g.show_label = /*show_label*/
        _[6]), d[1] & /*gradio*/
        1 && (g.max_file_size = /*gradio*/
        _[31].max_file_size), d[1] & /*gradio*/
        1 && (g.cli_upload = /*gradio*/
        _[31].client.upload), d[1] & /*gradio*/
        1 && (g.stream_handler = /*gradio*/
        _[31].client.stream), d[0] & /*handle_size*/
        8388608 && (g.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (g.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (g.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (g.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (g.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (g.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (g.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*use_default_label*/
        1073741824 && (g.useDefaultLabel = /*use_default_label*/
        _[30]), d[1] & /*$$scope, gradio, active_source*/
        8197 && (g.$$scope = { dirty: d, ctx: _ }), !s && d[1] & /*active_source*/
        4 && (s = !0, g.active_source = /*active_source*/
        _[33], cr(() => s = !1)), !l && d[0] & /*value*/
        1 && (l = !0, g.value = /*value*/
        _[0], cr(() => l = !1)), n.$set(g);
      },
      i(_) {
        o || (jt(e.$$.fragment, _), jt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        Ot(e.$$.fragment, _), Ot(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && vc(t), qn(e, _), qn(n, _);
      }
    }
  );
}
function Bb(i) {
  let e, t;
  return e = new af({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[32] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        i[2]
      ),
      elem_classes: (
        /*elem_classes*/
        i[3]
      ),
      width: (
        /*width*/
        i[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        i[11]
      ),
      scale: (
        /*scale*/
        i[12]
      ),
      min_width: (
        /*min_width*/
        i[13]
      ),
      $$slots: { default: [Mb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, s) {
      In(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*visible*/
      16 && (l.visible = /*visible*/
      n[4]), s[1] & /*dragging*/
      2 && (l.border_mode = /*dragging*/
      n[32] ? "focus" : "base"), s[0] & /*elem_id*/
      4 && (l.elem_id = /*elem_id*/
      n[2]), s[0] & /*elem_classes*/
      8 && (l.elem_classes = /*elem_classes*/
      n[3]), s[0] & /*width*/
      512 && (l.width = /*width*/
      n[9]), s[0] & /*container*/
      2048 && (l.container = /*container*/
      n[11]), s[0] & /*scale*/
      4096 && (l.scale = /*scale*/
      n[12]), s[0] & /*min_width*/
      8192 && (l.min_width = /*min_width*/
      n[13]), s[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | s[1] & /*$$scope, gradio, active_source, dragging*/
      8199 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ot(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qn(e, n);
    }
  };
}
function Db(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: g = void 0 } = e, { loading_status: b } = e, { sources: w = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: C } = e, { interactive: x } = e, { boxes_alpha: S } = e, { label_list: M } = e, { label_colors: k } = e, { box_min_size: D } = e, { handle_size: y } = e, { box_thickness: W } = e, { box_selected_thickness: E } = e, { disable_edit_boxes: z } = e, { single_box: U } = e, { show_remove_button: ie } = e, { handles_cursor: G } = e, { use_default_label: ae } = e, { gradio: I } = e, Z, V = null;
  function J(L) {
    V = L, t(33, V);
  }
  function H(L) {
    o = L, t(0, o);
  }
  const re = () => I.dispatch("change"), ue = () => I.dispatch("edit"), q = () => {
    I.dispatch("clear");
  }, xe = ({ detail: L }) => t(32, Z = L), X = () => I.dispatch("upload"), P = ({ detail: L }) => I.dispatch("select", L), T = ({ detail: L }) => I.dispatch("share", L), te = ({ detail: L }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), I.dispatch("error", L);
  };
  return i.$$set = (L) => {
    "elem_id" in L && t(2, n = L.elem_id), "elem_classes" in L && t(3, s = L.elem_classes), "visible" in L && t(4, l = L.visible), "value" in L && t(0, o = L.value), "label" in L && t(5, r = L.label), "show_label" in L && t(6, a = L.show_label), "root" in L && t(7, c = L.root), "height" in L && t(8, f = L.height), "width" in L && t(9, u = L.width), "_selectable" in L && t(10, _ = L._selectable), "container" in L && t(11, d = L.container), "scale" in L && t(12, h = L.scale), "min_width" in L && t(13, g = L.min_width), "loading_status" in L && t(1, b = L.loading_status), "sources" in L && t(14, w = L.sources), "show_download_button" in L && t(15, v = L.show_download_button), "show_share_button" in L && t(16, p = L.show_share_button), "show_clear_button" in L && t(17, C = L.show_clear_button), "interactive" in L && t(18, x = L.interactive), "boxes_alpha" in L && t(19, S = L.boxes_alpha), "label_list" in L && t(20, M = L.label_list), "label_colors" in L && t(21, k = L.label_colors), "box_min_size" in L && t(22, D = L.box_min_size), "handle_size" in L && t(23, y = L.handle_size), "box_thickness" in L && t(24, W = L.box_thickness), "box_selected_thickness" in L && t(25, E = L.box_selected_thickness), "disable_edit_boxes" in L && t(26, z = L.disable_edit_boxes), "single_box" in L && t(27, U = L.single_box), "show_remove_button" in L && t(28, ie = L.show_remove_button), "handles_cursor" in L && t(29, G = L.handles_cursor), "use_default_label" in L && t(30, ae = L.use_default_label), "gradio" in L && t(31, I = L.gradio);
  }, [
    o,
    b,
    n,
    s,
    l,
    r,
    a,
    c,
    f,
    u,
    _,
    d,
    h,
    g,
    w,
    v,
    p,
    C,
    x,
    S,
    M,
    k,
    D,
    y,
    W,
    E,
    z,
    U,
    ie,
    G,
    ae,
    I,
    Z,
    V,
    J,
    H,
    re,
    ue,
    q,
    xe,
    X,
    P,
    T,
    te
  ];
}
class Rb extends hb {
  constructor(e) {
    super(), wb(
      this,
      e,
      Db,
      Bb,
      vb,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        root: 7,
        height: 8,
        width: 9,
        _selectable: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        loading_status: 1,
        sources: 14,
        show_download_button: 15,
        show_share_button: 16,
        show_clear_button: 17,
        interactive: 18,
        boxes_alpha: 19,
        label_list: 20,
        label_colors: 21,
        box_min_size: 22,
        handle_size: 23,
        box_thickness: 24,
        box_selected_thickness: 25,
        disable_edit_boxes: 26,
        single_box: 27,
        show_remove_button: 28,
        handles_cursor: 29,
        use_default_label: 30,
        gradio: 31
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), se();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), se();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), se();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), se();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), se();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), se();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), se();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), se();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), se();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), se();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), se();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), se();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), se();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), se();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), se();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), se();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), se();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), se();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), se();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), se();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), se();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), se();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), se();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), se();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), se();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), se();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), se();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), se();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), se();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), se();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), se();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), se();
  }
}
export {
  Ib as BaseExample,
  Rb as default
};
