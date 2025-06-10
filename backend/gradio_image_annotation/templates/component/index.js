const {
  SvelteComponent: zc,
  assign: xc,
  create_slot: Bc,
  detach: Wc,
  element: Mc,
  get_all_dirty_from_scope: Dc,
  get_slot_changes: Lc,
  get_spread_update: qc,
  init: Yc,
  insert: Ec,
  safe_not_equal: Xc,
  set_dynamic_element_data: to,
  set_style: Ie,
  toggle_class: mt,
  transition_in: er,
  transition_out: tr,
  update_slot_base: Rc
} = window.__gradio__svelte__internal;
function Hc(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Bc(
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
    r = xc(r, o[a]);
  return {
    c() {
      e = Mc(
        /*tag*/
        i[14]
      ), l && l.c(), to(
        /*tag*/
        i[14]
      )(e, r), mt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), mt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), mt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), mt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), mt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ie(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ie(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ie(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ie(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ie(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ie(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ie(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      Ec(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && Rc(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? Lc(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Dc(
          /*$$scope*/
          a[17]
        ),
        null
      ), to(
        /*tag*/
        a[14]
      )(e, r = qc(o, [
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
      ])), mt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), mt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), mt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), mt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), mt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && Ie(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && Ie(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && Ie(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && Ie(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && Ie(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && Ie(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (er(l, a), n = !0);
    },
    o(a) {
      tr(l, a), n = !1;
    },
    d(a) {
      a && Wc(e), l && l.d(a);
    }
  };
}
function Ac(i) {
  let e, t = (
    /*tag*/
    i[14] && Hc(i)
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
      e || (er(t, n), e = !0);
    },
    o(n) {
      tr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Ic(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: h = "normal" } = e, { test_id: _ = void 0 } = e, { explicit_call: g = !1 } = e, { container: d = !0 } = e, { visible: m = !0 } = e, { allow_overflow: p = !0 } = e, { scale: v = null } = e, { min_width: w = 0 } = e, C = h === "fieldset" ? "fieldset" : "div";
  const k = (S) => {
    if (S !== void 0) {
      if (typeof S == "number")
        return S + "px";
      if (typeof S == "string")
        return S;
    }
  };
  return i.$$set = (S) => {
    "height" in S && t(0, l = S.height), "width" in S && t(1, o = S.width), "elem_id" in S && t(2, r = S.elem_id), "elem_classes" in S && t(3, a = S.elem_classes), "variant" in S && t(4, c = S.variant), "border_mode" in S && t(5, f = S.border_mode), "padding" in S && t(6, u = S.padding), "type" in S && t(16, h = S.type), "test_id" in S && t(7, _ = S.test_id), "explicit_call" in S && t(8, g = S.explicit_call), "container" in S && t(9, d = S.container), "visible" in S && t(10, m = S.visible), "allow_overflow" in S && t(11, p = S.allow_overflow), "scale" in S && t(12, v = S.scale), "min_width" in S && t(13, w = S.min_width), "$$scope" in S && t(17, s = S.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    _,
    g,
    d,
    m,
    p,
    v,
    w,
    C,
    k,
    h,
    s,
    n
  ];
}
class Tc extends zc {
  constructor(e) {
    super(), Yc(this, e, Ic, Ac, Xc, {
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
  SvelteComponent: Pc,
  attr: Fc,
  create_slot: jc,
  detach: Uc,
  element: Oc,
  get_all_dirty_from_scope: Vc,
  get_slot_changes: Nc,
  init: Kc,
  insert: Zc,
  safe_not_equal: Gc,
  transition_in: Jc,
  transition_out: Qc,
  update_slot_base: $c
} = window.__gradio__svelte__internal;
function ef(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = jc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Oc("div"), s && s.c(), Fc(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      Zc(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && $c(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? Nc(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : Vc(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (Jc(s, l), t = !0);
    },
    o(l) {
      Qc(s, l), t = !1;
    },
    d(l) {
      l && Uc(e), s && s.d(l);
    }
  };
}
function tf(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class nf extends Pc {
  constructor(e) {
    super(), Kc(this, e, tf, ef, Gc, {});
  }
}
const {
  SvelteComponent: sf,
  attr: no,
  check_outros: lf,
  create_component: of,
  create_slot: af,
  destroy_component: rf,
  detach: Gi,
  element: cf,
  empty: ff,
  get_all_dirty_from_scope: uf,
  get_slot_changes: hf,
  group_outros: _f,
  init: df,
  insert: Ji,
  mount_component: mf,
  safe_not_equal: gf,
  set_data: bf,
  space: wf,
  text: pf,
  toggle_class: Ln,
  transition_in: hi,
  transition_out: Qi,
  update_slot_base: vf
} = window.__gradio__svelte__internal;
function io(i) {
  let e, t;
  return e = new nf({
    props: {
      $$slots: { default: [kf] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      of(e.$$.fragment);
    },
    m(n, s) {
      mf(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (hi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rf(e, n);
    }
  };
}
function kf(i) {
  let e;
  return {
    c() {
      e = pf(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Ji(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && bf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Gi(e);
    }
  };
}
function yf(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = af(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && io(i)
  );
  return {
    c() {
      e = cf("span"), o && o.c(), t = wf(), r && r.c(), n = ff(), no(e, "data-testid", "block-info"), no(e, "class", "svelte-22c38v"), Ln(e, "sr-only", !/*show_label*/
      i[0]), Ln(e, "hide", !/*show_label*/
      i[0]), Ln(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      Ji(a, e, c), o && o.m(e, null), Ji(a, t, c), r && r.m(a, c), Ji(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && vf(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? hf(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : uf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && Ln(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && Ln(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && Ln(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && hi(r, 1)) : (r = io(a), r.c(), hi(r, 1), r.m(n.parentNode, n)) : r && (_f(), Qi(r, 1, 1, () => {
        r = null;
      }), lf());
    },
    i(a) {
      s || (hi(o, a), hi(r), s = !0);
    },
    o(a) {
      Qi(o, a), Qi(r), s = !1;
    },
    d(a) {
      a && (Gi(e), Gi(t), Gi(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Cf(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class nr extends sf {
  constructor(e) {
    super(), df(this, e, Cf, yf, gf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Sf,
  append: Ms,
  attr: Li,
  create_component: zf,
  destroy_component: xf,
  detach: Bf,
  element: so,
  init: Wf,
  insert: Mf,
  mount_component: Df,
  safe_not_equal: Lf,
  set_data: qf,
  space: Yf,
  text: Ef,
  toggle_class: Ut,
  transition_in: Xf,
  transition_out: Rf
} = window.__gradio__svelte__internal;
function Hf(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = so("label"), t = so("span"), zf(n.$$.fragment), s = Yf(), l = Ef(
        /*label*/
        i[0]
      ), Li(t, "class", "svelte-9gxdi0"), Li(e, "for", ""), Li(e, "data-testid", "block-label"), Li(e, "class", "svelte-9gxdi0"), Ut(e, "hide", !/*show_label*/
      i[2]), Ut(e, "sr-only", !/*show_label*/
      i[2]), Ut(
        e,
        "float",
        /*float*/
        i[4]
      ), Ut(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Mf(r, e, a), Ms(e, t), Df(n, t, null), Ms(e, s), Ms(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && qf(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Ut(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Ut(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Ut(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Ut(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Xf(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Rf(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Bf(e), xf(n);
    }
  };
}
function Af(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class If extends Sf {
  constructor(e) {
    super(), Wf(this, e, Af, Hf, Lf, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Tf,
  append: yl,
  attr: Lt,
  bubble: Pf,
  create_component: Ff,
  destroy_component: jf,
  detach: ir,
  element: Cl,
  init: Uf,
  insert: sr,
  listen: Of,
  mount_component: Vf,
  safe_not_equal: Nf,
  set_data: Kf,
  set_style: qn,
  space: Zf,
  text: Gf,
  toggle_class: Be,
  transition_in: Jf,
  transition_out: Qf
} = window.__gradio__svelte__internal;
function lo(i) {
  let e, t;
  return {
    c() {
      e = Cl("span"), t = Gf(
        /*label*/
        i[1]
      ), Lt(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      sr(n, e, s), yl(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && Kf(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && ir(e);
    }
  };
}
function $f(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && lo(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = Cl("button"), a && a.c(), t = Zf(), n = Cl("div"), Ff(s.$$.fragment), Lt(n, "class", "svelte-1lrphxw"), Be(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Be(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Be(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Lt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Lt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Lt(
        e,
        "title",
        /*label*/
        i[1]
      ), Lt(e, "class", "svelte-1lrphxw"), Be(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Be(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Be(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Be(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), qn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), qn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), qn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      sr(c, e, f), a && a.m(e, null), yl(e, t), yl(e, n), Vf(s, n, null), l = !0, o || (r = Of(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = lo(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && Be(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && Be(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && Be(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && Lt(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && Lt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && Lt(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && Be(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && Be(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && Be(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && Be(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && qn(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && qn(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && qn(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (Jf(s.$$.fragment, c), l = !0);
    },
    o(c) {
      Qf(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && ir(e), a && a.d(), jf(s), o = !1, r();
    }
  };
}
function eu(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: h = !1 } = e, { color: _ = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: d = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function p(v) {
    Pf.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, s = v.Icon), "label" in v && t(1, l = v.label), "show_label" in v && t(2, o = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, c = v.padded), "highlight" in v && t(6, f = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, h = v.hasPopup), "color" in v && t(13, _ = v.color), "transparent" in v && t(9, g = v.transparent), "background" in v && t(10, d = v.background), "offset" in v && t(11, m = v.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = f ? "var(--color-accent)" : _);
  }, [
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    h,
    g,
    d,
    m,
    n,
    _,
    p
  ];
}
class bs extends Tf {
  constructor(e) {
    super(), Uf(this, e, eu, $f, Nf, {
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
  SvelteComponent: tu,
  append: nu,
  attr: Ds,
  binding_callbacks: iu,
  create_slot: su,
  detach: lu,
  element: oo,
  get_all_dirty_from_scope: ou,
  get_slot_changes: au,
  init: ru,
  insert: cu,
  safe_not_equal: fu,
  toggle_class: Ot,
  transition_in: uu,
  transition_out: hu,
  update_slot_base: _u
} = window.__gradio__svelte__internal;
function du(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = su(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = oo("div"), t = oo("div"), l && l.c(), Ds(t, "class", "icon svelte-3w3rth"), Ds(e, "class", "empty svelte-3w3rth"), Ds(e, "aria-label", "Empty value"), Ot(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Ot(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Ot(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Ot(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      cu(o, e, r), nu(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && _u(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? au(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : ou(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ot(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Ot(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ot(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Ot(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (uu(l, o), n = !0);
    },
    o(o) {
      hu(l, o), n = !1;
    },
    d(o) {
      o && lu(e), l && l.d(o), i[6](null);
    }
  };
}
function mu(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var h;
    if (!u) return !1;
    const { height: _ } = u.getBoundingClientRect(), { height: g } = ((h = u.parentElement) === null || h === void 0 ? void 0 : h.getBoundingClientRect()) || { height: _ };
    return _ > g + 2;
  }
  function f(u) {
    iu[u ? "unshift" : "push"](() => {
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
class gu extends tu {
  constructor(e) {
    super(), ru(this, e, mu, du, fu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: bu,
  append: ao,
  attr: We,
  detach: wu,
  init: pu,
  insert: vu,
  noop: Ls,
  safe_not_equal: ku,
  svg_element: qs
} = window.__gradio__svelte__internal;
function yu(i) {
  let e, t, n;
  return {
    c() {
      e = qs("svg"), t = qs("path"), n = qs("circle"), We(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), We(n, "cx", "12"), We(n, "cy", "13"), We(n, "r", "4"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "fill", "none"), We(e, "stroke", "currentColor"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-camera");
    },
    m(s, l) {
      vu(s, e, l), ao(e, t), ao(e, n);
    },
    p: Ls,
    i: Ls,
    o: Ls,
    d(s) {
      s && wu(e);
    }
  };
}
class Cu extends bu {
  constructor(e) {
    super(), pu(this, e, null, yu, ku, {});
  }
}
const {
  SvelteComponent: Su,
  append: zu,
  attr: tt,
  detach: xu,
  init: Bu,
  insert: Wu,
  noop: Ys,
  safe_not_equal: Mu,
  svg_element: ro
} = window.__gradio__svelte__internal;
function Du(i) {
  let e, t;
  return {
    c() {
      e = ro("svg"), t = ro("circle"), tt(t, "cx", "12"), tt(t, "cy", "12"), tt(t, "r", "10"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "stroke-width", "1.5"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round"), tt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Wu(n, e, s), zu(e, t);
    },
    p: Ys,
    i: Ys,
    o: Ys,
    d(n) {
      n && xu(e);
    }
  };
}
class Lu extends Su {
  constructor(e) {
    super(), Bu(this, e, null, Du, Mu, {});
  }
}
const {
  SvelteComponent: qu,
  append: Es,
  attr: nt,
  detach: Yu,
  init: Eu,
  insert: Xu,
  noop: Xs,
  safe_not_equal: Ru,
  set_style: gt,
  svg_element: qi
} = window.__gradio__svelte__internal;
function Hu(i) {
  let e, t, n, s;
  return {
    c() {
      e = qi("svg"), t = qi("g"), n = qi("path"), s = qi("path"), nt(n, "d", "M18,6L6.087,17.913"), gt(n, "fill", "none"), gt(n, "fill-rule", "nonzero"), gt(n, "stroke-width", "2px"), nt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), nt(s, "d", "M4.364,4.364L19.636,19.636"), gt(s, "fill", "none"), gt(s, "fill-rule", "nonzero"), gt(s, "stroke-width", "2px"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), gt(e, "fill-rule", "evenodd"), gt(e, "clip-rule", "evenodd"), gt(e, "stroke-linecap", "round"), gt(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Xu(l, e, o), Es(e, t), Es(t, n), Es(e, s);
    },
    p: Xs,
    i: Xs,
    o: Xs,
    d(l) {
      l && Yu(e);
    }
  };
}
class lr extends qu {
  constructor(e) {
    super(), Eu(this, e, null, Hu, Ru, {});
  }
}
const {
  SvelteComponent: Au,
  append: Iu,
  attr: oi,
  detach: Tu,
  init: Pu,
  insert: Fu,
  noop: Rs,
  safe_not_equal: ju,
  svg_element: co
} = window.__gradio__svelte__internal;
function Uu(i) {
  let e, t;
  return {
    c() {
      e = co("svg"), t = co("path"), oi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), oi(t, "fill", "currentColor"), oi(e, "id", "icon"), oi(e, "xmlns", "http://www.w3.org/2000/svg"), oi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      Fu(n, e, s), Iu(e, t);
    },
    p: Rs,
    i: Rs,
    o: Rs,
    d(n) {
      n && Tu(e);
    }
  };
}
class Ou extends Au {
  constructor(e) {
    super(), Pu(this, e, null, Uu, ju, {});
  }
}
const {
  SvelteComponent: Vu,
  append: Nu,
  attr: Yn,
  detach: Ku,
  init: Zu,
  insert: Gu,
  noop: Hs,
  safe_not_equal: Ju,
  svg_element: fo
} = window.__gradio__svelte__internal;
function Qu(i) {
  let e, t;
  return {
    c() {
      e = fo("svg"), t = fo("path"), Yn(t, "fill", "currentColor"), Yn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Yn(e, "xmlns", "http://www.w3.org/2000/svg"), Yn(e, "width", "100%"), Yn(e, "height", "100%"), Yn(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      Gu(n, e, s), Nu(e, t);
    },
    p: Hs,
    i: Hs,
    o: Hs,
    d(n) {
      n && Ku(e);
    }
  };
}
class $u extends Vu {
  constructor(e) {
    super(), Zu(this, e, null, Qu, Ju, {});
  }
}
const {
  SvelteComponent: eh,
  append: th,
  attr: En,
  detach: nh,
  init: ih,
  insert: sh,
  noop: As,
  safe_not_equal: lh,
  svg_element: uo
} = window.__gradio__svelte__internal;
function oh(i) {
  let e, t;
  return {
    c() {
      e = uo("svg"), t = uo("path"), En(t, "d", "M5 8l4 4 4-4z"), En(e, "class", "dropdown-arrow svelte-145leq6"), En(e, "xmlns", "http://www.w3.org/2000/svg"), En(e, "width", "100%"), En(e, "height", "100%"), En(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      sh(n, e, s), th(e, t);
    },
    p: As,
    i: As,
    o: As,
    d(n) {
      n && nh(e);
    }
  };
}
class jl extends eh {
  constructor(e) {
    super(), ih(this, e, null, oh, lh, {});
  }
}
const {
  SvelteComponent: ah,
  append: Is,
  attr: _e,
  detach: rh,
  init: ch,
  insert: fh,
  noop: Ts,
  safe_not_equal: uh,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function hh(i) {
  let e, t, n, s;
  return {
    c() {
      e = Yi("svg"), t = Yi("rect"), n = Yi("circle"), s = Yi("polyline"), _e(t, "x", "3"), _e(t, "y", "3"), _e(t, "width", "18"), _e(t, "height", "18"), _e(t, "rx", "2"), _e(t, "ry", "2"), _e(n, "cx", "8.5"), _e(n, "cy", "8.5"), _e(n, "r", "1.5"), _e(s, "points", "21 15 16 10 5 21"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "1.5"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-image");
    },
    m(l, o) {
      fh(l, e, o), Is(e, t), Is(e, n), Is(e, s);
    },
    p: Ts,
    i: Ts,
    o: Ts,
    d(l) {
      l && rh(e);
    }
  };
}
let or = class extends ah {
  constructor(e) {
    super(), ch(this, e, null, hh, uh, {});
  }
};
const {
  SvelteComponent: _h,
  append: dh,
  attr: Ei,
  detach: mh,
  init: gh,
  insert: bh,
  noop: Ps,
  safe_not_equal: wh,
  svg_element: ho
} = window.__gradio__svelte__internal;
function ph(i) {
  let e, t;
  return {
    c() {
      e = ho("svg"), t = ho("path"), Ei(t, "fill", "currentColor"), Ei(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ei(e, "xmlns", "http://www.w3.org/2000/svg"), Ei(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      bh(n, e, s), dh(e, t);
    },
    p: Ps,
    i: Ps,
    o: Ps,
    d(n) {
      n && mh(e);
    }
  };
}
class ar extends _h {
  constructor(e) {
    super(), gh(this, e, null, ph, wh, {});
  }
}
const {
  SvelteComponent: vh,
  append: Xi,
  attr: de,
  detach: kh,
  init: yh,
  insert: Ch,
  noop: Fs,
  safe_not_equal: Sh,
  svg_element: ai
} = window.__gradio__svelte__internal;
function zh(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = ai("svg"), t = ai("path"), n = ai("path"), s = ai("line"), l = ai("line"), de(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), de(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), de(s, "x1", "12"), de(s, "y1", "19"), de(s, "x2", "12"), de(s, "y2", "23"), de(l, "x1", "8"), de(l, "y1", "23"), de(l, "x2", "16"), de(l, "y2", "23"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "2"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Ch(o, e, r), Xi(e, t), Xi(e, n), Xi(e, s), Xi(e, l);
    },
    p: Fs,
    i: Fs,
    o: Fs,
    d(o) {
      o && kh(e);
    }
  };
}
class xh extends vh {
  constructor(e) {
    super(), yh(this, e, null, zh, Sh, {});
  }
}
const {
  SvelteComponent: Bh,
  append: _o,
  attr: Ne,
  detach: Wh,
  init: Mh,
  insert: Dh,
  noop: js,
  safe_not_equal: Lh,
  set_style: qh,
  svg_element: Us
} = window.__gradio__svelte__internal;
function Yh(i) {
  let e, t, n;
  return {
    c() {
      e = Us("svg"), t = Us("polyline"), n = Us("path"), Ne(t, "points", "1 4 1 10 7 10"), Ne(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "fill", "none"), Ne(e, "stroke", "currentColor"), Ne(e, "stroke-width", "2"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round"), Ne(e, "class", "feather feather-rotate-ccw"), qh(e, "transform", "rotateY(180deg)");
    },
    m(s, l) {
      Dh(s, e, l), _o(e, t), _o(e, n);
    },
    p: js,
    i: js,
    o: js,
    d(s) {
      s && Wh(e);
    }
  };
}
class Eh extends Bh {
  constructor(e) {
    super(), Mh(this, e, null, Yh, Lh, {});
  }
}
const {
  SvelteComponent: Xh,
  append: Rh,
  attr: Me,
  detach: Hh,
  init: Ah,
  insert: Ih,
  noop: Os,
  safe_not_equal: Th,
  svg_element: mo
} = window.__gradio__svelte__internal;
function Ph(i) {
  let e, t;
  return {
    c() {
      e = mo("svg"), t = mo("rect"), Me(t, "x", "3"), Me(t, "y", "3"), Me(t, "width", "18"), Me(t, "height", "18"), Me(t, "rx", "2"), Me(t, "ry", "2"), Me(e, "xmlns", "http://www.w3.org/2000/svg"), Me(e, "width", "100%"), Me(e, "height", "100%"), Me(e, "viewBox", "0 0 24 24"), Me(e, "stroke-width", "1.5"), Me(e, "stroke-linecap", "round"), Me(e, "stroke-linejoin", "round"), Me(e, "class", "feather feather-square");
    },
    m(n, s) {
      Ih(n, e, s), Rh(e, t);
    },
    p: Os,
    i: Os,
    o: Os,
    d(n) {
      n && Hh(e);
    }
  };
}
class Fh extends Xh {
  constructor(e) {
    super(), Ah(this, e, null, Ph, Th, {});
  }
}
const {
  SvelteComponent: jh,
  append: go,
  attr: Ke,
  detach: Uh,
  init: Oh,
  insert: Vh,
  noop: Vs,
  safe_not_equal: Nh,
  svg_element: Ns
} = window.__gradio__svelte__internal;
function Kh(i) {
  let e, t, n;
  return {
    c() {
      e = Ns("svg"), t = Ns("polyline"), n = Ns("path"), Ke(t, "points", "1 4 1 10 7 10"), Ke(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "width", "100%"), Ke(e, "height", "100%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "fill", "none"), Ke(e, "stroke", "currentColor"), Ke(e, "stroke-width", "2"), Ke(e, "stroke-linecap", "round"), Ke(e, "stroke-linejoin", "round"), Ke(e, "class", "feather feather-rotate-ccw");
    },
    m(s, l) {
      Vh(s, e, l), go(e, t), go(e, n);
    },
    p: Vs,
    i: Vs,
    o: Vs,
    d(s) {
      s && Uh(e);
    }
  };
}
class Zh extends jh {
  constructor(e) {
    super(), Oh(this, e, null, Kh, Nh, {});
  }
}
const {
  SvelteComponent: Gh,
  append: Ks,
  attr: ye,
  detach: Jh,
  init: Qh,
  insert: $h,
  noop: Zs,
  safe_not_equal: e_,
  svg_element: Ri
} = window.__gradio__svelte__internal;
function t_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ri("svg"), t = Ri("path"), n = Ri("polyline"), s = Ri("line"), ye(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ye(n, "points", "17 8 12 3 7 8"), ye(s, "x1", "12"), ye(s, "y1", "3"), ye(s, "x2", "12"), ye(s, "y2", "15"), ye(e, "xmlns", "http://www.w3.org/2000/svg"), ye(e, "width", "90%"), ye(e, "height", "90%"), ye(e, "viewBox", "0 0 24 24"), ye(e, "fill", "none"), ye(e, "stroke", "currentColor"), ye(e, "stroke-width", "2"), ye(e, "stroke-linecap", "round"), ye(e, "stroke-linejoin", "round"), ye(e, "class", "feather feather-upload");
    },
    m(l, o) {
      $h(l, e, o), Ks(e, t), Ks(e, n), Ks(e, s);
    },
    p: Zs,
    i: Zs,
    o: Zs,
    d(l) {
      l && Jh(e);
    }
  };
}
let rr = class extends Gh {
  constructor(e) {
    super(), Qh(this, e, null, t_, e_, {});
  }
};
const {
  SvelteComponent: n_,
  append: bo,
  attr: Vt,
  detach: i_,
  init: s_,
  insert: l_,
  noop: Gs,
  safe_not_equal: o_,
  svg_element: Js
} = window.__gradio__svelte__internal;
function a_(i) {
  let e, t, n;
  return {
    c() {
      e = Js("svg"), t = Js("path"), n = Js("path"), Vt(t, "fill", "currentColor"), Vt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Vt(n, "fill", "currentColor"), Vt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Vt(e, "xmlns", "http://www.w3.org/2000/svg"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      l_(s, e, l), bo(e, t), bo(e, n);
    },
    p: Gs,
    i: Gs,
    o: Gs,
    d(s) {
      s && i_(e);
    }
  };
}
let cr = class extends n_ {
  constructor(e) {
    super(), s_(this, e, null, a_, o_, {});
  }
};
const r_ = [
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
], wo = {
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
r_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: wo[e][t],
      secondary: wo[e][n]
    }
  }),
  {}
);
class $i extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function c_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new $i("Must be on Spaces to share.");
  let t, n, s;
  t = f_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new $i(`Upload failed: ${c.error}`);
    }
    throw new $i("Upload failed.");
  }
  return await o.text();
}
function f_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: u_,
  create_component: h_,
  destroy_component: __,
  init: d_,
  mount_component: m_,
  safe_not_equal: g_,
  transition_in: b_,
  transition_out: w_
} = window.__gradio__svelte__internal, { createEventDispatcher: p_ } = window.__gradio__svelte__internal;
function v_(i) {
  let e, t;
  return e = new bs({
    props: {
      Icon: Ou,
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
      h_(e.$$.fragment);
    },
    m(n, s) {
      m_(e, n, s), t = !0;
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
      t || (b_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      w_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      __(e, n);
    }
  };
}
function k_(i, e, t) {
  const n = p_();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof $i ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class y_ extends u_ {
  constructor(e) {
    super(), d_(this, e, k_, v_, g_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: C_,
  append: mn,
  attr: Sl,
  check_outros: S_,
  create_component: fr,
  destroy_component: ur,
  detach: es,
  element: zl,
  group_outros: z_,
  init: x_,
  insert: ts,
  mount_component: hr,
  safe_not_equal: B_,
  set_data: xl,
  space: Bl,
  text: _i,
  toggle_class: po,
  transition_in: ss,
  transition_out: ls
} = window.__gradio__svelte__internal;
function W_(i) {
  let e, t;
  return e = new rr({}), {
    c() {
      fr(e.$$.fragment);
    },
    m(n, s) {
      hr(e, n, s), t = !0;
    },
    i(n) {
      t || (ss(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ls(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ur(e, n);
    }
  };
}
function M_(i) {
  let e, t;
  return e = new ar({}), {
    c() {
      fr(e.$$.fragment);
    },
    m(n, s) {
      hr(e, n, s), t = !0;
    },
    i(n) {
      t || (ss(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ls(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ur(e, n);
    }
  };
}
function vo(i) {
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
      e = zl("span"), t = _i("- "), s = _i(n), l = _i(" -"), o = Bl(), a = _i(r), Sl(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      ts(c, e, f), mn(e, t), mn(e, s), mn(e, l), ts(c, o, f), ts(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && xl(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && xl(a, r);
    },
    d(c) {
      c && (es(e), es(o), es(a));
    }
  };
}
function D_(i) {
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
  const f = [M_, W_], u = [];
  function h(g, d) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = h(i), s = u[n] = f[n](i);
  let _ = (
    /*mode*/
    i[3] !== "short" && vo(i)
  );
  return {
    c() {
      e = zl("div"), t = zl("span"), s.c(), l = Bl(), r = _i(o), a = Bl(), _ && _.c(), Sl(t, "class", "icon-wrap svelte-kzcjhc"), po(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Sl(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, d) {
      ts(g, e, d), mn(e, t), u[n].m(t, null), mn(e, l), mn(e, r), mn(e, a), _ && _.m(e, null), c = !0;
    },
    p(g, [d]) {
      let m = n;
      n = h(g), n !== m && (z_(), ls(u[m], 1, 1, () => {
        u[m] = null;
      }), S_(), s = u[n], s || (s = u[n] = f[n](g), s.c()), ss(s, 1), s.m(t, null)), (!c || d & /*hovered*/
      16) && po(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!c || d & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && xl(r, o), /*mode*/
      g[3] !== "short" ? _ ? _.p(g, d) : (_ = vo(g), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null);
    },
    i(g) {
      c || (ss(s), c = !0);
    },
    o(g) {
      ls(s), c = !1;
    },
    d(g) {
      g && es(e), u[n].d(), _ && _.d();
    }
  };
}
function L_(i, e, t) {
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
class _r extends C_ {
  constructor(e) {
    super(), x_(this, e, L_, D_, B_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: q_,
  append: Qs,
  attr: Ct,
  check_outros: di,
  create_component: ws,
  destroy_component: ps,
  detach: Gn,
  element: xi,
  empty: Y_,
  group_outros: mi,
  init: E_,
  insert: Jn,
  listen: vs,
  mount_component: ks,
  safe_not_equal: X_,
  space: $s,
  toggle_class: nn,
  transition_in: we,
  transition_out: qe
} = window.__gradio__svelte__internal;
function ko(i) {
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
  ), c, f = t && yo(i), u = s && Co(i), h = o && So(i), _ = a && zo(i);
  return {
    c() {
      e = xi("span"), f && f.c(), n = $s(), u && u.c(), l = $s(), h && h.c(), r = $s(), _ && _.c(), Ct(e, "class", "source-selection svelte-1jp3vgd"), Ct(e, "data-testid", "source-select");
    },
    m(g, d) {
      Jn(g, e, d), f && f.m(e, null), Qs(e, n), u && u.m(e, null), Qs(e, l), h && h.m(e, null), Qs(e, r), _ && _.m(e, null), c = !0;
    },
    p(g, d) {
      d & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? f ? (f.p(g, d), d & /*sources*/
      2 && we(f, 1)) : (f = yo(g), f.c(), we(f, 1), f.m(e, n)) : f && (mi(), qe(f, 1, 1, () => {
        f = null;
      }), di()), d & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("microphone")), s ? u ? (u.p(g, d), d & /*sources*/
      2 && we(u, 1)) : (u = Co(g), u.c(), we(u, 1), u.m(e, l)) : u && (mi(), qe(u, 1, 1, () => {
        u = null;
      }), di()), d & /*sources*/
      2 && (o = /*sources*/
      g[1].includes("webcam")), o ? h ? (h.p(g, d), d & /*sources*/
      2 && we(h, 1)) : (h = So(g), h.c(), we(h, 1), h.m(e, r)) : h && (mi(), qe(h, 1, 1, () => {
        h = null;
      }), di()), d & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? _ ? (_.p(g, d), d & /*sources*/
      2 && we(_, 1)) : (_ = zo(g), _.c(), we(_, 1), _.m(e, null)) : _ && (mi(), qe(_, 1, 1, () => {
        _ = null;
      }), di());
    },
    i(g) {
      c || (we(f), we(u), we(h), we(_), c = !0);
    },
    o(g) {
      qe(f), qe(u), qe(h), qe(_), c = !1;
    },
    d(g) {
      g && Gn(e), f && f.d(), u && u.d(), h && h.d(), _ && _.d();
    }
  };
}
function yo(i) {
  let e, t, n, s, l;
  return t = new rr({}), {
    c() {
      e = xi("button"), ws(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Upload file"), nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Jn(o, e, r), ks(t, e, null), n = !0, s || (l = vs(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && nn(
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
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gn(e), ps(t), s = !1, l();
    }
  };
}
function Co(i) {
  let e, t, n, s, l;
  return t = new xh({}), {
    c() {
      e = xi("button"), ws(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Record audio"), nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Jn(o, e, r), ks(t, e, null), n = !0, s || (l = vs(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && nn(
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
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gn(e), ps(t), s = !1, l();
    }
  };
}
function So(i) {
  let e, t, n, s, l;
  return t = new cr({}), {
    c() {
      e = xi("button"), ws(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Capture from camera"), nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Jn(o, e, r), ks(t, e, null), n = !0, s || (l = vs(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && nn(
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
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gn(e), ps(t), s = !1, l();
    }
  };
}
function zo(i) {
  let e, t, n, s, l;
  return t = new ar({}), {
    c() {
      e = xi("button"), ws(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Paste from clipboard"), nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Jn(o, e, r), ks(t, e, null), n = !0, s || (l = vs(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && nn(
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
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gn(e), ps(t), s = !1, l();
    }
  };
}
function R_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && ko(i)
  );
  return {
    c() {
      n && n.c(), e = Y_();
    },
    m(s, l) {
      n && n.m(s, l), Jn(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && we(n, 1)) : (n = ko(s), n.c(), we(n, 1), n.m(e.parentNode, e)) : n && (mi(), qe(n, 1, 1, () => {
        n = null;
      }), di());
    },
    i(s) {
      t || (we(n), t = !0);
    },
    o(s) {
      qe(n), t = !1;
    },
    d(s) {
      s && Gn(e), n && n.d(s);
    }
  };
}
function H_(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(g, d, m, p) {
    function v(w) {
      return w instanceof m ? w : new m(function(C) {
        C(w);
      });
    }
    return new (m || (m = Promise))(function(w, C) {
      function k(y) {
        try {
          z(p.next(y));
        } catch (B) {
          C(B);
        }
      }
      function S(y) {
        try {
          z(p.throw(y));
        } catch (B) {
          C(B);
        }
      }
      function z(y) {
        y.done ? w(y.value) : v(y.value).then(k, S);
      }
      z((p = p.apply(g, d || [])).next());
    });
  };
  let { sources: l } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function c(g) {
    return s(this, void 0, void 0, function* () {
      r(), t(0, o = g), a(g);
    });
  }
  const f = () => c("upload"), u = () => c("microphone"), h = () => c("webcam"), _ = () => c("clipboard");
  return i.$$set = (g) => {
    "sources" in g && t(1, l = g.sources), "active_source" in g && t(0, o = g.active_source), "handle_clear" in g && t(4, r = g.handle_clear), "handle_select" in g && t(5, a = g.handle_select);
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
    h,
    _
  ];
}
class A_ extends q_ {
  constructor(e) {
    super(), E_(this, e, H_, R_, X_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Fn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function ns() {
}
const I_ = (i) => i;
function T_(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function xo(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const dr = typeof window < "u";
let Bo = dr ? () => window.performance.now() : () => Date.now(), mr = dr ? (i) => requestAnimationFrame(i) : ns;
const Zn = /* @__PURE__ */ new Set();
function gr(i) {
  Zn.forEach((e) => {
    e.c(i) || (Zn.delete(e), e.f());
  }), Zn.size !== 0 && mr(gr);
}
function P_(i) {
  let e;
  return Zn.size === 0 && mr(gr), {
    promise: new Promise((t) => {
      Zn.add(e = { c: i, f: t });
    }),
    abort() {
      Zn.delete(e);
    }
  };
}
function F_(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function j_(i, { delay: e = 0, duration: t = 400, easing: n = I_ } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function Wo(i, { delay: e = 0, duration: t = 400, easing: n = F_, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [u, h] = xo(s), [_, g] = xo(l);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (d, m) => `
			transform: ${c} translate(${(1 - d) * u}${h}, ${(1 - d) * _}${g});
			opacity: ${a - f * m}`
  };
}
const Xn = [];
function U_(i, e = ns) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (T_(i, r) && (i = r, t)) {
      const a = !Xn.length;
      for (const c of n)
        c[1](), Xn.push(c, i);
      if (a) {
        for (let c = 0; c < Xn.length; c += 2)
          Xn[c][0](Xn[c + 1]);
        Xn.length = 0;
      }
    }
  }
  function l(r) {
    s(r(i));
  }
  function o(r, a = ns) {
    const c = [r, a];
    return n.add(c), n.size === 1 && (t = e(s, l) || ns), r(i), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function Mo(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Wl(i, e, t, n) {
  if (typeof t == "number" || Mo(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * s, r = i.opts.damping * l, a = (o - r) * i.inv_mass, c = (l + a) * i.dt;
    return Math.abs(c) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, Mo(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, l) => Wl(i, e[l], t[l], n[l])
      );
    if (typeof t == "object") {
      const s = {};
      for (const l in t)
        s[l] = Wl(i, e[l], t[l], n[l]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Do(i, e = {}) {
  const t = U_(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, h = 0, _ = !1;
  function g(m, p = {}) {
    f = m;
    const v = a = {};
    return i == null || p.hard || d.stiffness >= 1 && d.damping >= 1 ? (_ = !0, o = Bo(), c = m, t.set(i = f), Promise.resolve()) : (p.soft && (h = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), u = 0), r || (o = Bo(), _ = !1, r = P_((w) => {
      if (_)
        return _ = !1, r = null, !1;
      u = Math.min(u + h, 1);
      const C = {
        inv_mass: u,
        opts: d,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, k = Wl(C, c, i, f);
      return o = w, c = i, t.set(i = k), C.settled && (r = null), !C.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        v === a && w();
      });
    }));
  }
  const d = {
    set: g,
    update: (m, p) => g(m(f, i), p),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return d;
}
const {
  SvelteComponent: O_,
  append: it,
  attr: Z,
  component_subscribe: Lo,
  detach: V_,
  element: N_,
  init: K_,
  insert: Z_,
  noop: qo,
  safe_not_equal: G_,
  set_style: Hi,
  svg_element: st,
  toggle_class: Yo
} = window.__gradio__svelte__internal, { onMount: J_ } = window.__gradio__svelte__internal;
function Q_(i) {
  let e, t, n, s, l, o, r, a, c, f, u, h;
  return {
    c() {
      e = N_("div"), t = st("svg"), n = st("g"), s = st("path"), l = st("path"), o = st("path"), r = st("path"), a = st("g"), c = st("path"), f = st("path"), u = st("path"), h = st("path"), Z(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Z(s, "fill", "#FF7C00"), Z(s, "fill-opacity", "0.4"), Z(s, "class", "svelte-43sxxs"), Z(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Z(l, "fill", "#FF7C00"), Z(l, "class", "svelte-43sxxs"), Z(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Z(o, "fill", "#FF7C00"), Z(o, "fill-opacity", "0.4"), Z(o, "class", "svelte-43sxxs"), Z(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Z(r, "fill", "#FF7C00"), Z(r, "class", "svelte-43sxxs"), Hi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), Z(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Z(c, "fill", "#FF7C00"), Z(c, "fill-opacity", "0.4"), Z(c, "class", "svelte-43sxxs"), Z(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Z(f, "fill", "#FF7C00"), Z(f, "class", "svelte-43sxxs"), Z(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Z(u, "fill", "#FF7C00"), Z(u, "fill-opacity", "0.4"), Z(u, "class", "svelte-43sxxs"), Z(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Z(h, "fill", "#FF7C00"), Z(h, "class", "svelte-43sxxs"), Hi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), Z(t, "viewBox", "-1200 -1200 3000 3000"), Z(t, "fill", "none"), Z(t, "xmlns", "http://www.w3.org/2000/svg"), Z(t, "class", "svelte-43sxxs"), Z(e, "class", "svelte-43sxxs"), Yo(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(_, g) {
      Z_(_, e, g), it(e, t), it(t, n), it(n, s), it(n, l), it(n, o), it(n, r), it(t, a), it(a, c), it(a, f), it(a, u), it(a, h);
    },
    p(_, [g]) {
      g & /*$top*/
      2 && Hi(n, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), g & /*$bottom*/
      4 && Hi(a, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), g & /*margin*/
      1 && Yo(
        e,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: qo,
    o: qo,
    d(_) {
      _ && V_(e);
    }
  };
}
function $_(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(_, g, d, m) {
    function p(v) {
      return v instanceof d ? v : new d(function(w) {
        w(v);
      });
    }
    return new (d || (d = Promise))(function(v, w) {
      function C(z) {
        try {
          S(m.next(z));
        } catch (y) {
          w(y);
        }
      }
      function k(z) {
        try {
          S(m.throw(z));
        } catch (y) {
          w(y);
        }
      }
      function S(z) {
        z.done ? v(z.value) : p(z.value).then(C, k);
      }
      S((m = m.apply(_, g || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = Do([0, 0]);
  Lo(i, r, (_) => t(1, n = _));
  const a = Do([0, 0]);
  Lo(i, a, (_) => t(2, s = _));
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
  function h() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return J_(() => (h(), () => c = !0)), i.$$set = (_) => {
    "margin" in _ && t(0, o = _.margin);
  }, [o, n, s, r, a];
}
class ed extends O_ {
  constructor(e) {
    super(), K_(this, e, $_, Q_, G_, { margin: 0 });
  }
}
const {
  SvelteComponent: td,
  append: gn,
  attr: _t,
  binding_callbacks: Eo,
  check_outros: Ml,
  create_component: br,
  create_slot: wr,
  destroy_component: pr,
  destroy_each: vr,
  detach: P,
  element: vt,
  empty: Qn,
  ensure_array_like: os,
  get_all_dirty_from_scope: kr,
  get_slot_changes: yr,
  group_outros: Dl,
  init: nd,
  insert: F,
  mount_component: Cr,
  noop: Ll,
  safe_not_equal: id,
  set_data: Qe,
  set_style: en,
  space: Je,
  text: ue,
  toggle_class: Ge,
  transition_in: ht,
  transition_out: kt,
  update_slot_base: Sr
} = window.__gradio__svelte__internal, { tick: sd } = window.__gradio__svelte__internal, { onDestroy: ld } = window.__gradio__svelte__internal, { createEventDispatcher: od } = window.__gradio__svelte__internal, ad = (i) => ({}), Xo = (i) => ({}), rd = (i) => ({}), Ro = (i) => ({});
function Ho(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ao(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function cd(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new bs({
    props: {
      Icon: lr,
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
  ), f = wr(
    c,
    i,
    /*$$scope*/
    i[29],
    Xo
  );
  return {
    c() {
      e = vt("div"), br(t.$$.fragment), n = Je(), s = vt("span"), o = ue(l), r = Je(), f && f.c(), _t(e, "class", "clear-status svelte-16nch4a"), _t(s, "class", "error svelte-16nch4a");
    },
    m(u, h) {
      F(u, e, h), Cr(t, e, null), F(u, n, h), F(u, s, h), gn(s, o), F(u, r, h), f && f.m(u, h), a = !0;
    },
    p(u, h) {
      const _ = {};
      h[0] & /*i18n*/
      2 && (_.label = /*i18n*/
      u[1]("common.clear")), t.$set(_), (!a || h[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && Qe(o, l), f && f.p && (!a || h[0] & /*$$scope*/
      536870912) && Sr(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? yr(
          c,
          /*$$scope*/
          u[29],
          h,
          ad
        ) : kr(
          /*$$scope*/
          u[29]
        ),
        Xo
      );
    },
    i(u) {
      a || (ht(t.$$.fragment, u), ht(f, u), a = !0);
    },
    o(u) {
      kt(t.$$.fragment, u), kt(f, u), a = !1;
    },
    d(u) {
      u && (P(e), P(n), P(s), P(r)), pr(t), f && f.d(u);
    }
  };
}
function fd(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Io(i)
  );
  function u(w, C) {
    if (
      /*progress*/
      w[7]
    ) return _d;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return hd;
    if (
      /*queue_position*/
      w[2] === 0
    ) return ud;
  }
  let h = u(i), _ = h && h(i), g = (
    /*timer*/
    i[5] && Fo(i)
  );
  const d = [bd, gd], m = [];
  function p(w, C) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = p(i)) && (o = m[l] = d[l](i));
  let v = !/*timer*/
  i[5] && Zo(i);
  return {
    c() {
      f && f.c(), e = Je(), t = vt("div"), _ && _.c(), n = Je(), g && g.c(), s = Je(), o && o.c(), r = Je(), v && v.c(), a = Qn(), _t(t, "class", "progress-text svelte-16nch4a"), Ge(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Ge(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, C) {
      f && f.m(w, C), F(w, e, C), F(w, t, C), _ && _.m(t, null), gn(t, n), g && g.m(t, null), F(w, s, C), ~l && m[l].m(w, C), F(w, r, C), v && v.m(w, C), F(w, a, C), c = !0;
    },
    p(w, C) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, C) : (f = Io(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), h === (h = u(w)) && _ ? _.p(w, C) : (_ && _.d(1), _ = h && h(w), _ && (_.c(), _.m(t, n))), /*timer*/
      w[5] ? g ? g.p(w, C) : (g = Fo(w), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!c || C[0] & /*variant*/
      256) && Ge(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || C[0] & /*variant*/
      256) && Ge(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let k = l;
      l = p(w), l === k ? ~l && m[l].p(w, C) : (o && (Dl(), kt(m[k], 1, 1, () => {
        m[k] = null;
      }), Ml()), ~l ? (o = m[l], o ? o.p(w, C) : (o = m[l] = d[l](w), o.c()), ht(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? v && (Dl(), kt(v, 1, 1, () => {
        v = null;
      }), Ml()) : v ? (v.p(w, C), C[0] & /*timer*/
      32 && ht(v, 1)) : (v = Zo(w), v.c(), ht(v, 1), v.m(a.parentNode, a));
    },
    i(w) {
      c || (ht(o), ht(v), c = !0);
    },
    o(w) {
      kt(o), kt(v), c = !1;
    },
    d(w) {
      w && (P(e), P(t), P(s), P(r), P(a)), f && f.d(w), _ && _.d(), g && g.d(), ~l && m[l].d(w), v && v.d(w);
    }
  };
}
function Io(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = vt("div"), _t(e, "class", "eta-bar svelte-16nch4a"), en(e, "transform", t);
    },
    m(n, s) {
      F(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && en(e, "transform", t);
    },
    d(n) {
      n && P(e);
    }
  };
}
function ud(i) {
  let e;
  return {
    c() {
      e = ue("processing |");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: Ll,
    d(t) {
      t && P(e);
    }
  };
}
function hd(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = ue("queue: "), n = ue(t), s = ue("/"), l = ue(
        /*queue_size*/
        i[3]
      ), o = ue(" |");
    },
    m(r, a) {
      F(r, e, a), F(r, n, a), F(r, s, a), F(r, l, a), F(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Qe(n, t), a[0] & /*queue_size*/
      8 && Qe(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (P(e), P(n), P(s), P(l), P(o));
    }
  };
}
function _d(i) {
  let e, t = os(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Po(Ao(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Qn();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      F(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = os(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ao(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Po(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && P(e), vr(n, s);
    }
  };
}
function To(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, u) {
    return (
      /*p*/
      f[41].length != null ? md : dd
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Je(), n = ue(t), s = ue(" | "), o = ue(l);
    },
    m(f, u) {
      c.m(f, u), F(f, e, u), F(f, n, u), F(f, s, u), F(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && Qe(n, t);
    },
    d(f) {
      f && (P(e), P(n), P(s), P(o)), c.d(f);
    }
  };
}
function dd(i) {
  let e = Fn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ue(e);
    },
    m(n, s) {
      F(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = Fn(
        /*p*/
        n[41].index || 0
      ) + "") && Qe(t, e);
    },
    d(n) {
      n && P(t);
    }
  };
}
function md(i) {
  let e = Fn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = Fn(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = ue(e), n = ue("/"), l = ue(s);
    },
    m(o, r) {
      F(o, t, r), F(o, n, r), F(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Fn(
        /*p*/
        o[41].index || 0
      ) + "") && Qe(t, e), r[0] & /*progress*/
      128 && s !== (s = Fn(
        /*p*/
        o[41].length
      ) + "") && Qe(l, s);
    },
    d(o) {
      o && (P(t), P(n), P(l));
    }
  };
}
function Po(i) {
  let e, t = (
    /*p*/
    i[41].index != null && To(i)
  );
  return {
    c() {
      t && t.c(), e = Qn();
    },
    m(n, s) {
      t && t.m(n, s), F(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = To(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && P(e), t && t.d(n);
    }
  };
}
function Fo(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = ue(
        /*formatted_timer*/
        i[20]
      ), n = ue(t), s = ue("s");
    },
    m(l, o) {
      F(l, e, o), F(l, n, o), F(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Qe(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Qe(n, t);
    },
    d(l) {
      l && (P(e), P(n), P(s));
    }
  };
}
function gd(i) {
  let e, t;
  return e = new ed({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      br(e.$$.fragment);
    },
    m(n, s) {
      Cr(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      pr(e, n);
    }
  };
}
function bd(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && jo(i)
  );
  return {
    c() {
      e = vt("div"), t = vt("div"), r && r.c(), n = Je(), s = vt("div"), l = vt("div"), _t(t, "class", "progress-level-inner svelte-16nch4a"), _t(l, "class", "progress-bar svelte-16nch4a"), en(l, "width", o), _t(s, "class", "progress-bar-wrap svelte-16nch4a"), _t(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      F(a, e, c), gn(e, t), r && r.m(t, null), gn(e, n), gn(e, s), gn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = jo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && en(l, "width", o);
    },
    i: Ll,
    o: Ll,
    d(a) {
      a && P(e), r && r.d(), i[31](null);
    }
  };
}
function jo(i) {
  let e, t = os(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Ko(Ho(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Qn();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      F(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = os(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ho(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Ko(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && P(e), vr(n, s);
    }
  };
}
function Uo(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && wd()
  ), o = (
    /*p*/
    i[41].desc != null && Oo(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Vo()
  ), a = (
    /*progress_level*/
    i[14] != null && No(i)
  );
  return {
    c() {
      l && l.c(), e = Je(), o && o.c(), t = Je(), r && r.c(), n = Je(), a && a.c(), s = Qn();
    },
    m(c, f) {
      l && l.m(c, f), F(c, e, f), o && o.m(c, f), F(c, t, f), r && r.m(c, f), F(c, n, f), a && a.m(c, f), F(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = Oo(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = Vo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = No(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (P(e), P(t), P(n), P(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function wd(i) {
  let e;
  return {
    c() {
      e = ue(" /");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && P(e);
    }
  };
}
function Oo(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ue(e);
    },
    m(n, s) {
      F(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Qe(t, e);
    },
    d(n) {
      n && P(t);
    }
  };
}
function Vo(i) {
  let e;
  return {
    c() {
      e = ue("-");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && P(e);
    }
  };
}
function No(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ue(e), n = ue("%");
    },
    m(s, l) {
      F(s, t, l), F(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && Qe(t, e);
    },
    d(s) {
      s && (P(t), P(n));
    }
  };
}
function Ko(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Uo(i)
  );
  return {
    c() {
      t && t.c(), e = Qn();
    },
    m(n, s) {
      t && t.m(n, s), F(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = Uo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && P(e), t && t.d(n);
    }
  };
}
function Zo(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = wr(
    l,
    i,
    /*$$scope*/
    i[29],
    Ro
  );
  return {
    c() {
      e = vt("p"), t = ue(
        /*loading_text*/
        i[9]
      ), n = Je(), o && o.c(), _t(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      F(r, e, a), gn(e, t), F(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && Qe(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Sr(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? yr(
          l,
          /*$$scope*/
          r[29],
          a,
          rd
        ) : kr(
          /*$$scope*/
          r[29]
        ),
        Ro
      );
    },
    i(r) {
      s || (ht(o, r), s = !0);
    },
    o(r) {
      kt(o, r), s = !1;
    },
    d(r) {
      r && (P(e), P(n)), o && o.d(r);
    }
  };
}
function pd(i) {
  let e, t, n, s, l;
  const o = [fd, cd], r = [];
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
      e = vt("div"), n && n.c(), _t(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Ge(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Ge(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Ge(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Ge(
        e,
        "border",
        /*border*/
        i[12]
      ), en(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), en(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      F(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (Dl(), kt(r[u], 1, 1, () => {
        r[u] = null;
      }), Ml()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), ht(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && _t(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Ge(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ge(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && Ge(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && Ge(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && en(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && en(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (ht(n), l = !0);
    },
    o(c) {
      kt(n), l = !1;
    },
    d(c) {
      c && P(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var vd = function(i, e, t, n) {
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
let Ai = [], el = !1;
function kd(i) {
  return vd(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ai.push(e), !el) el = !0;
      else return;
      yield sd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < Ai.length; s++) {
          const o = Ai[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), el = !1, Ai = [];
      });
    }
  });
}
function yd(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = od();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: h = !1 } = e, { timer: _ = !0 } = e, { show_progress: g = "full" } = e, { message: d = null } = e, { progress: m = null } = e, { variant: p = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: C = !1 } = e, { border: k = !1 } = e, { autoscroll: S } = e, z, y = !1, B = 0, b = 0, L = null, Y = null, A = 0, N = null, te, U = null, ne = !0;
  const E = () => {
    t(0, a = t(27, L = t(19, O = null))), t(25, B = performance.now()), t(26, b = 0), y = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, b = (performance.now() - B) / 1e3), y && V();
    });
  }
  function X() {
    t(26, b = 0), t(0, a = t(27, L = t(19, O = null))), y && (y = !1);
  }
  ld(() => {
    y && X();
  });
  let O = null;
  function oe(q) {
    Eo[q ? "unshift" : "push"](() => {
      U = q, t(16, U), t(7, m), t(14, N), t(15, te);
    });
  }
  const G = () => {
    o("clear_status");
  };
  function $(q) {
    Eo[q ? "unshift" : "push"](() => {
      z = q, t(13, z);
    });
  }
  return i.$$set = (q) => {
    "i18n" in q && t(1, r = q.i18n), "eta" in q && t(0, a = q.eta), "queue_position" in q && t(2, c = q.queue_position), "queue_size" in q && t(3, f = q.queue_size), "status" in q && t(4, u = q.status), "scroll_to_output" in q && t(22, h = q.scroll_to_output), "timer" in q && t(5, _ = q.timer), "show_progress" in q && t(6, g = q.show_progress), "message" in q && t(23, d = q.message), "progress" in q && t(7, m = q.progress), "variant" in q && t(8, p = q.variant), "loading_text" in q && t(9, v = q.loading_text), "absolute" in q && t(10, w = q.absolute), "translucent" in q && t(11, C = q.translucent), "border" in q && t(12, k = q.border), "autoscroll" in q && t(24, S = q.autoscroll), "$$scope" in q && t(29, l = q.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = L), a != null && L !== a && (t(28, Y = (performance.now() - B) / 1e3 + a), t(19, O = Y.toFixed(1)), t(27, L = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, A = Y === null || Y <= 0 || !b ? null : Math.min(b / Y, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, ne = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, N = m.map((q) => {
      if (q.index != null && q.length != null)
        return q.index / q.length;
      if (q.progress != null)
        return q.progress;
    })) : t(14, N = null), N ? (t(15, te = N[N.length - 1]), U && (te === 0 ? t(16, U.style.transition = "0", U) : t(16, U.style.transition = "150ms", U))) : t(15, te = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? E() : X()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && h && (u === "pending" || u === "complete") && kd(z, S), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = b.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    _,
    g,
    m,
    p,
    v,
    w,
    C,
    k,
    z,
    N,
    te,
    U,
    A,
    ne,
    O,
    n,
    o,
    h,
    d,
    S,
    B,
    b,
    L,
    Y,
    l,
    s,
    oe,
    G,
    $
  ];
}
class Cd extends td {
  constructor(e) {
    super(), nd(
      this,
      e,
      yd,
      pd,
      id,
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
const { setContext: ib, getContext: Sd } = window.__gradio__svelte__internal, zd = "WORKER_PROXY_CONTEXT_KEY";
function zr() {
  return Sd(zd);
}
function xd(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function xr(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function Br(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!xd(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Bd(i) {
  if (i == null || !Br(i))
    return i;
  const e = zr();
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
      type: xr(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: Wd,
  assign: as,
  check_outros: Wr,
  compute_rest_props: Go,
  create_slot: Ul,
  detach: ys,
  element: Mr,
  empty: Dr,
  exclude_internal_props: Md,
  get_all_dirty_from_scope: Ol,
  get_slot_changes: Vl,
  get_spread_update: Lr,
  group_outros: qr,
  init: Dd,
  insert: Cs,
  listen: Yr,
  prevent_default: Ld,
  safe_not_equal: qd,
  set_attributes: rs,
  transition_in: yn,
  transition_out: Cn,
  update_slot_base: Nl
} = window.__gradio__svelte__internal, { createEventDispatcher: Yd } = window.__gradio__svelte__internal;
function Ed(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Ul(
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
    c = as(c, a[f]);
  return {
    c() {
      e = Mr("a"), r && r.c(), rs(e, c);
    },
    m(f, u) {
      Cs(f, e, u), r && r.m(e, null), n = !0, s || (l = Yr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Nl(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? Vl(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : Ol(
          /*$$scope*/
          f[7]
        ),
        null
      ), rs(e, c = Lr(a, [
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
      n || (yn(r, f), n = !0);
    },
    o(f) {
      Cn(r, f), n = !1;
    },
    d(f) {
      f && ys(e), r && r.d(f), s = !1, l();
    }
  };
}
function Xd(i) {
  let e, t, n, s;
  const l = [Hd, Rd], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Dr();
    },
    m(a, c) {
      o[e].m(a, c), Cs(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (qr(), Cn(o[f], 1, 1, () => {
        o[f] = null;
      }), Wr(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), yn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (yn(t), s = !0);
    },
    o(a) {
      Cn(t), s = !1;
    },
    d(a) {
      a && ys(n), o[e].d(a);
    }
  };
}
function Rd(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Ul(
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
    a = as(a, r[c]);
  return {
    c() {
      e = Mr("a"), o && o.c(), rs(e, a);
    },
    m(c, f) {
      Cs(c, e, f), o && o.m(e, null), t = !0, n || (s = Yr(e, "click", Ld(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && Nl(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? Vl(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Ol(
          /*$$scope*/
          c[7]
        ),
        null
      ), rs(e, a = Lr(r, [
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
      t || (yn(o, c), t = !0);
    },
    o(c) {
      Cn(o, c), t = !1;
    },
    d(c) {
      c && ys(e), o && o.d(c), n = !1, s();
    }
  };
}
function Hd(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Ul(
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
      128) && Nl(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? Vl(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Ol(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (yn(n, s), e = !0);
    },
    o(s) {
      Cn(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Ad(i) {
  let e, t, n, s, l;
  const o = [Xd, Ed], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && Br(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Dr();
    },
    m(c, f) {
      r[t].m(c, f), Cs(c, s, f), l = !0;
    },
    p(c, [f]) {
      let u = t;
      t = a(c, f), t === u ? r[t].p(c, f) : (qr(), Cn(r[u], 1, 1, () => {
        r[u] = null;
      }), Wr(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), yn(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (yn(n), l = !0);
    },
    o(c) {
      Cn(n), l = !1;
    },
    d(c) {
      c && ys(s), r[t].d(c);
    }
  };
}
function Id(i, e, t) {
  const n = ["href", "download"];
  let s = Go(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(g, d, m, p) {
    function v(w) {
      return w instanceof m ? w : new m(function(C) {
        C(w);
      });
    }
    return new (m || (m = Promise))(function(w, C) {
      function k(y) {
        try {
          z(p.next(y));
        } catch (B) {
          C(B);
        }
      }
      function S(y) {
        try {
          z(p.throw(y));
        } catch (B) {
          C(B);
        }
      }
      function z(y) {
        y.done ? w(y.value) : v(y.value).then(k, S);
      }
      z((p = p.apply(g, d || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Yd();
  let u = !1;
  const h = zr();
  function _() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (h == null)
        throw new Error("Wasm worker proxy is not available.");
      const d = new URL(a, window.location.href).pathname;
      t(2, u = !0), h.httpRequest({
        method: "GET",
        path: d,
        headers: {},
        query_string: ""
      }).then((m) => {
        if (m.status !== 200)
          throw new Error(`Failed to get file ${d} from the Wasm worker.`);
        const p = new Blob(
          [m.body],
          {
            type: xr(m.headers, "content-type")
          }
        ), v = URL.createObjectURL(p), w = document.createElement("a");
        w.href = v, w.download = c, w.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (g) => {
    e = as(as({}, e), Md(g)), t(6, s = Go(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, c = g.download), "$$scope" in g && t(7, o = g.$$scope);
  }, [
    a,
    c,
    u,
    f,
    h,
    _,
    s,
    o,
    l
  ];
}
class Td extends Wd {
  constructor(e) {
    super(), Dd(this, e, Id, Ad, qd, { href: 0, download: 1 });
  }
}
var Pd = Object.defineProperty, Fd = (i, e, t) => e in i ? Pd(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Bt = (i, e, t) => (Fd(i, typeof e != "symbol" ? e + "" : e, t), t), Er = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ri = (i, e, t) => (Er(i, e, "read from private field"), t ? t.call(i) : e.get(i)), jd = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Ud = (i, e, t, n) => (Er(i, e, "write to private field"), e.set(i, t), t), $t;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Xr(i, e) {
  return i.map(
    (t) => new Od({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Od {
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
    Bt(this, "path"), Bt(this, "url"), Bt(this, "orig_name"), Bt(this, "size"), Bt(this, "blob"), Bt(this, "is_stream"), Bt(this, "mime_type"), Bt(this, "alt_text"), Bt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class sb extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ri(this, $t) + t; ; ) {
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
        Ud(this, $t, t);
      },
      flush: (t) => {
        if (ri(this, $t) === "")
          return;
        const n = e.allowCR && ri(this, $t).endsWith("\r") ? ri(this, $t).slice(0, -1) : ri(this, $t);
        t.enqueue(n);
      }
    }), jd(this, $t, "");
  }
}
$t = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Vd,
  append: Ee,
  attr: _n,
  detach: Rr,
  element: dn,
  init: Nd,
  insert: Hr,
  noop: Jo,
  safe_not_equal: Kd,
  set_data: cs,
  set_style: tl,
  space: ql,
  text: jn,
  toggle_class: Qo
} = window.__gradio__svelte__internal, { onMount: Zd, createEventDispatcher: Gd, onDestroy: Jd } = window.__gradio__svelte__internal;
function $o(i) {
  let e, t, n, s, l = gi(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = dn("div"), t = dn("span"), n = dn("div"), s = dn("progress"), o = jn(l), a = ql(), c = dn("span"), u = jn(f), tl(s, "visibility", "hidden"), tl(s, "height", "0"), tl(s, "width", "0"), s.value = r = gi(
        /*file_to_display*/
        i[2]
      ), _n(s, "max", "100"), _n(s, "class", "svelte-cr2edf"), _n(n, "class", "progress-bar svelte-cr2edf"), _n(c, "class", "file-name svelte-cr2edf"), _n(e, "class", "file svelte-cr2edf");
    },
    m(h, _) {
      Hr(h, e, _), Ee(e, t), Ee(t, n), Ee(n, s), Ee(s, o), Ee(e, a), Ee(e, c), Ee(c, u);
    },
    p(h, _) {
      _ & /*file_to_display*/
      4 && l !== (l = gi(
        /*file_to_display*/
        h[2]
      ) + "") && cs(o, l), _ & /*file_to_display*/
      4 && r !== (r = gi(
        /*file_to_display*/
        h[2]
      )) && (s.value = r), _ & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      h[2].orig_name + "") && cs(u, f);
    },
    d(h) {
      h && Rr(e);
    }
  };
}
function Qd(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && $o(i)
  );
  return {
    c() {
      e = dn("div"), t = dn("span"), n = jn("Uploading "), l = jn(s), o = ql(), a = jn(r), c = jn("..."), f = ql(), u && u.c(), _n(t, "class", "uploading svelte-cr2edf"), _n(e, "class", "wrap svelte-cr2edf"), Qo(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(h, _) {
      Hr(h, e, _), Ee(e, t), Ee(t, n), Ee(t, l), Ee(t, o), Ee(t, a), Ee(t, c), Ee(e, f), u && u.m(e, null);
    },
    p(h, [_]) {
      _ & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      h[0].length + "") && cs(l, s), _ & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      h[0].length > 1 ? "files" : "file") && cs(a, r), /*file_to_display*/
      h[2] ? u ? u.p(h, _) : (u = $o(h), u.c(), u.m(e, null)) : u && (u.d(1), u = null), _ & /*progress*/
      2 && Qo(
        e,
        "progress",
        /*progress*/
        h[1]
      );
    },
    i: Jo,
    o: Jo,
    d(h) {
      h && Rr(e), u && u.d();
    }
  };
}
function gi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function $d(i) {
  let e = 0;
  return i.forEach((t) => {
    e += gi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function em(i, e, t) {
  var n = this && this.__awaiter || function(d, m, p, v) {
    function w(C) {
      return C instanceof p ? C : new p(function(k) {
        k(C);
      });
    }
    return new (p || (p = Promise))(function(C, k) {
      function S(B) {
        try {
          y(v.next(B));
        } catch (b) {
          k(b);
        }
      }
      function z(B) {
        try {
          y(v.throw(B));
        } catch (b) {
          k(b);
        }
      }
      function y(B) {
        B.done ? C(B.value) : w(B.value).then(S, z);
      }
      y((v = v.apply(d, m || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, h = o.map((d) => Object.assign(Object.assign({}, d), { progress: 0 }));
  const _ = Gd();
  function g(d, m) {
    t(0, h = h.map((p) => (p.orig_name === d && (p.progress += m), p)));
  }
  return Zd(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(d) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(d.data);
        c || t(1, c = !0), m.msg === "done" ? (a == null || a.close(), _("done")) : (t(7, f = m), g(m.orig_name, m.chunk_size));
      });
    };
  })), Jd(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (d) => {
    "upload_id" in d && t(3, s = d.upload_id), "root" in d && t(4, l = d.root), "files" in d && t(5, o = d.files), "stream_handler" in d && t(6, r = d.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && $d(h), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = f || h[0]);
  }, [
    h,
    c,
    u,
    s,
    l,
    o,
    r,
    f
  ];
}
class tm extends Vd {
  constructor(e) {
    super(), Nd(this, e, em, Qd, Kd, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: nm,
  append: ea,
  attr: Ce,
  binding_callbacks: im,
  bubble: on,
  check_outros: Ar,
  create_component: sm,
  create_slot: Ir,
  destroy_component: lm,
  detach: Ss,
  element: Yl,
  empty: Tr,
  get_all_dirty_from_scope: Pr,
  get_slot_changes: Fr,
  group_outros: jr,
  init: om,
  insert: zs,
  listen: Pe,
  mount_component: am,
  prevent_default: an,
  run_all: rm,
  safe_not_equal: cm,
  set_style: Ur,
  space: fm,
  stop_propagation: rn,
  toggle_class: ve,
  transition_in: tn,
  transition_out: Sn,
  update_slot_base: Or
} = window.__gradio__svelte__internal, { createEventDispatcher: um, tick: hm } = window.__gradio__svelte__internal;
function _m(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const h = (
    /*#slots*/
    i[26].default
  ), _ = Ir(
    h,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Yl("button"), _ && _.c(), t = fm(), n = Yl("input"), Ce(n, "aria-label", "file upload"), Ce(n, "data-testid", "file-upload"), Ce(n, "type", "file"), Ce(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, Ce(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), Ce(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Ce(n, "class", "svelte-1s26xmt"), Ce(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), ve(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ve(
        e,
        "center",
        /*center*/
        i[4]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ve(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ve(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Ur(e, "height", "100%");
    },
    m(g, d) {
      zs(g, e, d), _ && _.m(e, null), ea(e, t), ea(e, n), i[34](n), c = !0, f || (u = [
        Pe(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Pe(e, "drag", rn(an(
          /*drag_handler*/
          i[27]
        ))),
        Pe(e, "dragstart", rn(an(
          /*dragstart_handler*/
          i[28]
        ))),
        Pe(e, "dragend", rn(an(
          /*dragend_handler*/
          i[29]
        ))),
        Pe(e, "dragover", rn(an(
          /*dragover_handler*/
          i[30]
        ))),
        Pe(e, "dragenter", rn(an(
          /*dragenter_handler*/
          i[31]
        ))),
        Pe(e, "dragleave", rn(an(
          /*dragleave_handler*/
          i[32]
        ))),
        Pe(e, "drop", rn(an(
          /*drop_handler*/
          i[33]
        ))),
        Pe(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Pe(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Pe(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Pe(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(g, d) {
      _ && _.p && (!c || d[0] & /*$$scope*/
      33554432) && Or(
        _,
        h,
        g,
        /*$$scope*/
        g[25],
        c ? Fr(
          h,
          /*$$scope*/
          g[25],
          d,
          null
        ) : Pr(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!c || d[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      g[16] || void 0)) && Ce(n, "accept", s), (!c || d[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = l), (!c || d[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "directory" || void 0)) && Ce(n, "webkitdirectory", o), (!c || d[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && Ce(n, "mozdirectory", r), (!c || d[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && Ce(e, "tabindex", a), (!c || d[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!c || d[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        g[4]
      ), (!c || d[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!c || d[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!c || d[0] & /*disable_click*/
      128) && ve(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      c || (tn(_, g), c = !0);
    },
    o(g) {
      Sn(_, g), c = !1;
    },
    d(g) {
      g && Ss(e), _ && _.d(g), i[34](null), f = !1, rm(u);
    }
  };
}
function dm(i) {
  let e, t, n = !/*hidden*/
  i[9] && ta(i);
  return {
    c() {
      n && n.c(), e = Tr();
    },
    m(s, l) {
      n && n.m(s, l), zs(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (jr(), Sn(n, 1, 1, () => {
        n = null;
      }), Ar()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && tn(n, 1)) : (n = ta(s), n.c(), tn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (tn(n), t = !0);
    },
    o(s) {
      Sn(n), t = !1;
    },
    d(s) {
      s && Ss(e), n && n.d(s);
    }
  };
}
function mm(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Ir(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Yl("button"), r && r.c(), Ce(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), ve(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ve(
        e,
        "center",
        /*center*/
        i[4]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ve(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Ur(e, "height", "100%");
    },
    m(a, c) {
      zs(a, e, c), r && r.m(e, null), n = !0, s || (l = Pe(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Or(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Fr(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : Pr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Ce(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (tn(r, a), n = !0);
    },
    o(a) {
      Sn(r, a), n = !1;
    },
    d(a) {
      a && Ss(e), r && r.d(a), s = !1, l();
    }
  };
}
function ta(i) {
  let e, t;
  return e = new tm({
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
      sm(e.$$.fragment);
    },
    m(n, s) {
      am(e, n, s), t = !0;
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
      t || (tn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Sn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lm(e, n);
    }
  };
}
function gm(i) {
  let e, t, n, s;
  const l = [mm, dm, _m], o = [];
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
      t.c(), n = Tr();
    },
    m(a, c) {
      o[e].m(a, c), zs(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (jr(), Sn(o[f], 1, 1, () => {
        o[f] = null;
      }), Ar(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), tn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (tn(t), s = !0);
    },
    o(a) {
      Sn(t), s = !1;
    },
    d(a) {
      a && Ss(n), o[e].d(a);
    }
  };
}
function bm(i, e, t) {
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
function wm(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(D, T, se, re) {
    function M($e) {
      return $e instanceof se ? $e : new se(function(dt) {
        dt($e);
      });
    }
    return new (se || (se = Promise))(function($e, dt) {
      function St(Ae) {
        try {
          et(re.next(Ae));
        } catch (Tt) {
          dt(Tt);
        }
      }
      function He(Ae) {
        try {
          et(re.throw(Ae));
        } catch (Tt) {
          dt(Tt);
        }
      }
      function et(Ae) {
        Ae.done ? $e(Ae.value) : M(Ae.value).then(St, He);
      }
      et((re = re.apply(D, T || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: h = !1 } = e, { root: _ } = e, { hidden: g = !1 } = e, { format: d = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: p = null } = e, { show_progress: v = !0 } = e, { max_file_size: w = null } = e, { upload: C } = e, { stream_handler: k } = e, S, z, y;
  const B = um(), b = ["image", "video", "audio", "text", "file"], L = (D) => D.startsWith(".") || D.endsWith("/*") ? D : b.includes(D) ? D + "/*" : "." + D;
  function Y() {
    t(20, r = !r);
  }
  function A() {
    navigator.clipboard.read().then((D) => l(this, void 0, void 0, function* () {
      for (let T = 0; T < D.length; T++) {
        const se = D[T].types.find((re) => re.startsWith("image/"));
        if (se) {
          D[T].getType(se).then((re) => l(this, void 0, void 0, function* () {
            const M = new File([re], `clipboard.${se.replace("image/", "")}`);
            yield U([M]);
          }));
          break;
        }
      }
    }));
  }
  function N() {
    h || p && (t(2, p.value = "", p), p.click());
  }
  function te(D) {
    return l(this, void 0, void 0, function* () {
      yield hm(), t(14, S = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
      try {
        const T = yield C(D, _, S, w ?? 1 / 0);
        return B("load", u === "single" ? T == null ? void 0 : T[0] : T), t(1, m = !1), T || [];
      } catch (T) {
        return B("error", T.message), t(1, m = !1), [];
      }
    });
  }
  function U(D) {
    return l(this, void 0, void 0, function* () {
      if (!D.length)
        return;
      let T = D.map((se) => new File([se], se instanceof File ? se.name : "file", { type: se.type }));
      return t(15, z = yield Xr(T)), yield te(z);
    });
  }
  function ne(D) {
    return l(this, void 0, void 0, function* () {
      const T = D.target;
      if (T.files)
        if (d != "blob")
          yield U(Array.from(T.files));
        else {
          if (u === "single") {
            B("load", T.files[0]);
            return;
          }
          B("load", T.files);
        }
    });
  }
  function E(D) {
    return l(this, void 0, void 0, function* () {
      var T;
      if (t(20, r = !1), !(!((T = D.dataTransfer) === null || T === void 0) && T.files)) return;
      const se = Array.from(D.dataTransfer.files).filter((re) => {
        const M = "." + re.name.split(".").pop();
        return M && bm(y, M, re.type) || (M && Array.isArray(o) ? o.includes(M) : M === o) ? !0 : (B("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield U(se);
    });
  }
  function V(D) {
    on.call(this, i, D);
  }
  function X(D) {
    on.call(this, i, D);
  }
  function O(D) {
    on.call(this, i, D);
  }
  function oe(D) {
    on.call(this, i, D);
  }
  function G(D) {
    on.call(this, i, D);
  }
  function $(D) {
    on.call(this, i, D);
  }
  function q(D) {
    on.call(this, i, D);
  }
  function be(D) {
    im[D ? "unshift" : "push"](() => {
      p = D, t(2, p);
    });
  }
  return i.$$set = (D) => {
    "filetype" in D && t(0, o = D.filetype), "dragging" in D && t(20, r = D.dragging), "boundedheight" in D && t(3, a = D.boundedheight), "center" in D && t(4, c = D.center), "flex" in D && t(5, f = D.flex), "file_count" in D && t(6, u = D.file_count), "disable_click" in D && t(7, h = D.disable_click), "root" in D && t(8, _ = D.root), "hidden" in D && t(9, g = D.hidden), "format" in D && t(21, d = D.format), "uploading" in D && t(1, m = D.uploading), "hidden_upload" in D && t(2, p = D.hidden_upload), "show_progress" in D && t(10, v = D.show_progress), "max_file_size" in D && t(22, w = D.max_file_size), "upload" in D && t(23, C = D.upload), "stream_handler" in D && t(11, k = D.stream_handler), "$$scope" in D && t(25, s = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, y = null) : typeof o == "string" ? t(16, y = L(o)) : (t(0, o = o.map(L)), t(16, y = o.join(", "))));
  }, [
    o,
    m,
    p,
    a,
    c,
    f,
    u,
    h,
    _,
    g,
    v,
    k,
    A,
    N,
    S,
    z,
    y,
    Y,
    ne,
    E,
    r,
    d,
    w,
    C,
    U,
    s,
    n,
    V,
    X,
    O,
    oe,
    G,
    $,
    q,
    be
  ];
}
class pm extends nm {
  constructor(e) {
    super(), om(
      this,
      e,
      wm,
      gm,
      cm,
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
  SvelteComponent: vm,
  append: Ii,
  attr: nl,
  create_component: km,
  destroy_component: ym,
  detach: Cm,
  element: il,
  init: Sm,
  insert: zm,
  listen: xm,
  mount_component: Bm,
  noop: Wm,
  safe_not_equal: Mm,
  set_style: Dm,
  space: Lm,
  text: qm,
  transition_in: Ym,
  transition_out: Em
} = window.__gradio__svelte__internal, { createEventDispatcher: Xm } = window.__gradio__svelte__internal;
function Rm(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new cr({}), {
    c() {
      e = il("button"), t = il("div"), n = il("span"), km(s.$$.fragment), l = Lm(), r = qm(o), nl(n, "class", "icon-wrap svelte-fjcd9c"), nl(t, "class", "wrap svelte-fjcd9c"), nl(e, "class", "svelte-fjcd9c"), Dm(e, "height", "100%");
    },
    m(u, h) {
      zm(u, e, h), Ii(e, t), Ii(t, n), Bm(s, n, null), Ii(t, l), Ii(t, r), a = !0, c || (f = xm(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: Wm,
    i(u) {
      a || (Ym(s.$$.fragment, u), a = !0);
    },
    o(u) {
      Em(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Cm(e), ym(s), c = !1, f();
    }
  };
}
function Hm(i) {
  const e = Xm();
  return [e, () => e("click")];
}
class Am extends vm {
  constructor(e) {
    super(), Sm(this, e, Hm, Rm, Mm, {});
  }
}
function Im() {
  return navigator.mediaDevices.enumerateDevices();
}
function Tm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function na(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (Tm(l, e), l));
}
function Pm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Fm,
  action_destroyer: jm,
  add_render_callback: Um,
  append: Et,
  attr: ge,
  binding_callbacks: Om,
  check_outros: pi,
  create_component: $n,
  create_in_transition: Vm,
  destroy_component: ei,
  destroy_each: Nm,
  detach: Xe,
  element: Oe,
  empty: Kl,
  ensure_array_like: ia,
  group_outros: vi,
  init: Km,
  insert: Re,
  listen: fs,
  mount_component: ti,
  noop: Zl,
  run_all: Zm,
  safe_not_equal: Gm,
  set_data: Vr,
  set_input_value: El,
  space: Si,
  stop_propagation: Jm,
  text: Nr,
  toggle_class: Ti,
  transition_in: ke,
  transition_out: Se
} = window.__gradio__svelte__internal, { createEventDispatcher: Qm, onMount: $m } = window.__gradio__svelte__internal;
function sa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function e1(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const h = [i1, n1], _ = [];
  function g(p, v) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(i), s = _[n] = h[n](i);
  let d = !/*recording*/
  i[8] && la(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && oa(i)
  );
  return {
    c() {
      e = Oe("div"), t = Oe("button"), s.c(), o = Si(), d && d.c(), r = Si(), m && m.c(), a = Kl(), ge(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ge(t, "class", "svelte-8hqvb6"), ge(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, v) {
      Re(p, e, v), Et(e, t), _[n].m(t, null), Et(e, o), d && d.m(e, null), Re(p, r, v), m && m.m(p, v), Re(p, a, v), c = !0, f || (u = fs(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(p, v) {
      let w = n;
      n = g(p), n === w ? _[n].p(p, v) : (vi(), Se(_[w], 1, 1, () => {
        _[w] = null;
      }), pi(), s = _[n], s ? s.p(p, v) : (s = _[n] = h[n](p), s.c()), ke(s, 1), s.m(t, null)), (!c || v[0] & /*mode*/
      2 && l !== (l = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && ge(t, "aria-label", l), /*recording*/
      p[8] ? d && (vi(), Se(d, 1, 1, () => {
        d = null;
      }), pi()) : d ? (d.p(p, v), v[0] & /*recording*/
      256 && ke(d, 1)) : (d = la(p), d.c(), ke(d, 1), d.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? m ? (m.p(p, v), v[0] & /*options_open, selected_device*/
      1152 && ke(m, 1)) : (m = oa(p), m.c(), ke(m, 1), m.m(a.parentNode, a)) : m && (vi(), Se(m, 1, 1, () => {
        m = null;
      }), pi());
    },
    i(p) {
      c || (ke(s), ke(d), ke(m), c = !0);
    },
    o(p) {
      Se(s), Se(d), Se(m), c = !1;
    },
    d(p) {
      p && (Xe(e), Xe(r), Xe(a)), _[n].d(), d && d.d(), m && m.d(p), f = !1, u();
    }
  };
}
function t1(i) {
  let e, t, n, s;
  return t = new Am({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Oe("div"), $n(t.$$.fragment), ge(e, "title", "grant webcam access");
    },
    m(l, o) {
      Re(l, e, o), ti(t, e, null), s = !0;
    },
    p: Zl,
    i(l) {
      s || (ke(t.$$.fragment, l), l && (n || Um(() => {
        n = Vm(e, j_, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && Xe(e), ei(t);
    }
  };
}
function n1(i) {
  let e, t, n;
  return t = new Cu({}), {
    c() {
      e = Oe("div"), $n(t.$$.fragment), ge(e, "class", "icon svelte-8hqvb6"), ge(e, "title", "capture photo");
    },
    m(s, l) {
      Re(s, e, l), ti(t, e, null), n = !0;
    },
    p: Zl,
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Xe(e), ei(t);
    }
  };
}
function i1(i) {
  let e, t, n, s;
  const l = [l1, s1], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Kl();
    },
    m(a, c) {
      o[e].m(a, c), Re(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (vi(), Se(o[f], 1, 1, () => {
        o[f] = null;
      }), pi(), t = o[e], t || (t = o[e] = l[e](a), t.c()), ke(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ke(t), s = !0);
    },
    o(a) {
      Se(t), s = !1;
    },
    d(a) {
      a && Xe(n), o[e].d(a);
    }
  };
}
function s1(i) {
  let e, t, n;
  return t = new Lu({}), {
    c() {
      e = Oe("div"), $n(t.$$.fragment), ge(e, "class", "icon red svelte-8hqvb6"), ge(e, "title", "start recording");
    },
    m(s, l) {
      Re(s, e, l), ti(t, e, null), n = !0;
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Xe(e), ei(t);
    }
  };
}
function l1(i) {
  let e, t, n;
  return t = new Fh({}), {
    c() {
      e = Oe("div"), $n(t.$$.fragment), ge(e, "class", "icon red svelte-8hqvb6"), ge(e, "title", "stop recording");
    },
    m(s, l) {
      Re(s, e, l), ti(t, e, null), n = !0;
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Xe(e), ei(t);
    }
  };
}
function la(i) {
  let e, t, n, s, l;
  return t = new jl({}), {
    c() {
      e = Oe("button"), $n(t.$$.fragment), ge(e, "class", "icon svelte-8hqvb6"), ge(e, "aria-label", "select input source");
    },
    m(o, r) {
      Re(o, e, r), ti(t, e, null), n = !0, s || (l = fs(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: Zl,
    i(o) {
      n || (ke(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Se(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Xe(e), ei(t), s = !1, l();
    }
  };
}
function oa(i) {
  let e, t, n, s, l, o, r;
  n = new jl({});
  function a(u, h) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? a1 : o1
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = Oe("select"), t = Oe("button"), $n(n.$$.fragment), s = Si(), f.c(), ge(t, "class", "inset-icon svelte-8hqvb6"), ge(e, "class", "select-wrap svelte-8hqvb6"), ge(e, "aria-label", "select source");
    },
    m(u, h) {
      Re(u, e, h), Et(e, t), ti(n, t, null), Et(t, s), f.m(e, null), l = !0, o || (r = [
        fs(t, "click", Jm(
          /*click_handler_2*/
          i[22]
        )),
        jm(Gl.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        fs(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(u, h) {
      c === (c = a(u)) && f ? f.p(u, h) : (f.d(1), f = c(u), f && (f.c(), f.m(e, null)));
    },
    i(u) {
      l || (ke(n.$$.fragment, u), l = !0);
    },
    o(u) {
      Se(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && Xe(e), ei(n), f.d(), o = !1, Zm(r);
    }
  };
}
function o1(i) {
  let e, t = ia(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = aa(sa(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Kl();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      Re(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = ia(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = sa(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = aa(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && Xe(e), Nm(n, s);
    }
  };
}
function a1(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Oe("option"), n = Nr(t), e.__value = "", El(e, e.__value), ge(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      Re(s, e, l), Et(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Vr(n, t);
    },
    d(s) {
      s && Xe(e);
    }
  };
}
function aa(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = Oe("option"), n = Nr(t), s = Si(), e.__value = l = /*device*/
      i[32].deviceId, El(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ge(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Re(r, e, a), Et(e, n), Et(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Vr(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, El(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Xe(e);
    }
  };
}
function r1(i) {
  let e, t, n, s, l, o;
  const r = [t1, e1], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = Oe("div"), t = Oe("video"), n = Si(), l.c(), ge(t, "class", "svelte-8hqvb6"), Ti(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ti(t, "hide", !/*webcam_accessed*/
      i[9]), ge(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      Re(f, e, u), Et(e, t), i[19](t), Et(e, n), a[s].m(e, null), o = !0;
    },
    p(f, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Ti(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Ti(t, "hide", !/*webcam_accessed*/
      f[9]);
      let h = s;
      s = c(f), s === h ? a[s].p(f, u) : (vi(), Se(a[h], 1, 1, () => {
        a[h] = null;
      }), pi(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), ke(l, 1), l.m(e, null));
    },
    i(f) {
      o || (ke(l), o = !0);
    },
    o(f) {
      Se(l), o = !1;
    },
    d(f) {
      f && Xe(e), i[19](null), a[s].d();
    }
  };
}
function Gl(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function c1(i, e, t) {
  var n = this && this.__awaiter || function(E, V, X, O) {
    function oe(G) {
      return G instanceof X ? G : new X(function($) {
        $(G);
      });
    }
    return new (X || (X = Promise))(function(G, $) {
      function q(T) {
        try {
          D(O.next(T));
        } catch (se) {
          $(se);
        }
      }
      function be(T) {
        try {
          D(O.throw(T));
        } catch (se) {
          $(se);
        }
      }
      function D(T) {
        T.done ? G(T.value) : oe(T.value).then(q, be);
      }
      D((O = O.apply(E, V || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: h } = e, { include_audio: _ } = e, { i18n: g } = e, { upload: d } = e;
  const m = Qm();
  $m(() => r = document.createElement("canvas"));
  const p = (E) => n(void 0, void 0, void 0, function* () {
    const X = E.target.value;
    yield na(_, s, X).then((O) => n(void 0, void 0, void 0, function* () {
      S = O, t(7, o = l.find((oe) => oe.deviceId === X) || null), t(10, Y = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        na(_, s).then((E) => n(this, void 0, void 0, function* () {
          t(9, b = !0), t(6, l = yield Im()), S = E;
        })).then(() => Pm(l)).then((E) => {
          t(6, l = E);
          const V = S.getTracks().map((X) => {
            var O;
            return (O = X.getSettings()) === null || O === void 0 ? void 0 : O.deviceId;
          })[0];
          t(7, o = V && E.find((X) => X.deviceId === V) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", g("image.no_webcam_support"));
      } catch (E) {
        if (E instanceof DOMException && E.name == "NotAllowedError")
          m("error", g("image.allow_webcam_access"));
        else
          throw E;
      }
    });
  }
  function w() {
    var E = r.getContext("2d");
    (!a || a && C) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, E.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), h && (E.scale(-1, 1), E.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (V) => {
        m(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let C = !1, k = [], S, z, y;
  function B() {
    if (C) {
      y.stop();
      let E = new Blob(k, { type: z }), V = new FileReader();
      V.onload = function(X) {
        return n(this, void 0, void 0, function* () {
          var O;
          if (X.target) {
            let oe = new File([E], "sample." + z.substring(6));
            const G = yield Xr([oe]);
            let $ = ((O = yield d(G, f)) === null || O === void 0 ? void 0 : O.filter(Boolean))[0];
            m("capture", $), m("stop_recording");
          }
        });
      }, V.readAsDataURL(E);
    } else {
      m("start_recording"), k = [];
      let E = ["video/webm", "video/mp4"];
      for (let V of E)
        if (MediaRecorder.isTypeSupported(V)) {
          z = V;
          break;
        }
      if (z === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      y = new MediaRecorder(S, { mimeType: z }), y.addEventListener("dataavailable", function(V) {
        k.push(V.data);
      }), y.start(200);
    }
    t(8, C = !C);
  }
  let b = !1;
  function L() {
    u === "image" && a && t(8, C = !C), u === "image" ? w() : B(), !C && S && (S.getTracks().forEach((E) => E.stop()), t(5, s.srcObject = null, s), t(9, b = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let Y = !1;
  function A(E) {
    E.preventDefault(), E.stopPropagation(), t(10, Y = !1);
  }
  function N(E) {
    Om[E ? "unshift" : "push"](() => {
      s = E, t(5, s);
    });
  }
  const te = async () => v(), U = () => t(10, Y = !0), ne = () => t(10, Y = !1);
  return i.$$set = (E) => {
    "streaming" in E && t(0, a = E.streaming), "pending" in E && t(15, c = E.pending), "root" in E && t(16, f = E.root), "mode" in E && t(1, u = E.mode), "mirror_webcam" in E && t(2, h = E.mirror_webcam), "include_audio" in E && t(17, _ = E.include_audio), "i18n" in E && t(3, g = E.i18n), "upload" in E && t(18, d = E.upload);
  }, [
    a,
    u,
    h,
    g,
    Gl,
    s,
    l,
    o,
    C,
    b,
    Y,
    p,
    v,
    L,
    A,
    c,
    f,
    _,
    d,
    N,
    te,
    U,
    ne
  ];
}
class f1 extends Fm {
  constructor(e) {
    super(), Km(
      this,
      e,
      c1,
      r1,
      Gm,
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
    return Gl;
  }
}
const {
  SvelteComponent: u1,
  append: Nt,
  attr: H,
  detach: h1,
  init: _1,
  insert: d1,
  noop: sl,
  safe_not_equal: m1,
  set_style: Kt,
  svg_element: Wt
} = window.__gradio__svelte__internal;
function g1(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = Wt("svg"), t = Wt("rect"), n = Wt("rect"), s = Wt("rect"), l = Wt("rect"), o = Wt("line"), r = Wt("line"), a = Wt("line"), c = Wt("line"), H(t, "x", "2"), H(t, "y", "2"), H(t, "width", "5"), H(t, "height", "5"), H(t, "rx", "1"), H(t, "ry", "1"), H(t, "stroke-width", "2"), H(t, "fill", "none"), H(n, "x", "17"), H(n, "y", "2"), H(n, "width", "5"), H(n, "height", "5"), H(n, "rx", "1"), H(n, "ry", "1"), H(n, "stroke-width", "2"), H(n, "fill", "none"), H(s, "x", "2"), H(s, "y", "17"), H(s, "width", "5"), H(s, "height", "5"), H(s, "rx", "1"), H(s, "ry", "1"), H(s, "stroke-width", "2"), H(s, "fill", "none"), H(l, "x", "17"), H(l, "y", "17"), H(l, "width", "5"), H(l, "height", "5"), H(l, "rx", "1"), H(l, "ry", "1"), H(l, "stroke-width", "2"), H(l, "fill", "none"), H(o, "x1", "7.5"), H(o, "y1", "4.5"), H(o, "x2", "16"), H(o, "y2", "4.5"), Kt(o, "stroke-width", "2px"), H(r, "x1", "7.5"), H(r, "y1", "19.5"), H(r, "x2", "16"), H(r, "y2", "19.5"), Kt(r, "stroke-width", "2px"), H(a, "x1", "4.5"), H(a, "y1", "8"), H(a, "x2", "4.5"), H(a, "y2", "16"), Kt(a, "stroke-width", "2px"), H(c, "x1", "19.5"), H(c, "y1", "8"), H(c, "x2", "19.5"), H(c, "y2", "16"), Kt(c, "stroke-width", "2px"), H(e, "width", "100%"), H(e, "height", "100%"), H(e, "viewBox", "0 0 24 24"), H(e, "version", "1.1"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), H(e, "xml:space", "preserve"), H(e, "stroke", "currentColor"), Kt(e, "fill-rule", "evenodd"), Kt(e, "clip-rule", "evenodd"), Kt(e, "stroke-linecap", "round"), Kt(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      d1(f, e, u), Nt(e, t), Nt(e, n), Nt(e, s), Nt(e, l), Nt(e, o), Nt(e, r), Nt(e, a), Nt(e, c);
    },
    p: sl,
    i: sl,
    o: sl,
    d(f) {
      f && h1(e);
    }
  };
}
class b1 extends u1 {
  constructor(e) {
    super(), _1(this, e, null, g1, m1, {});
  }
}
const {
  SvelteComponent: w1,
  append: p1,
  attr: lt,
  detach: v1,
  init: k1,
  insert: y1,
  noop: ll,
  safe_not_equal: C1,
  set_style: Pi,
  svg_element: ra
} = window.__gradio__svelte__internal;
function S1(i) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), lt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), Pi(e, "fill-rule", "evenodd"), Pi(e, "clip-rule", "evenodd"), Pi(e, "stroke-linecap", "round"), Pi(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      y1(n, e, s), p1(e, t);
    },
    p: ll,
    i: ll,
    o: ll,
    d(n) {
      n && v1(e);
    }
  };
}
class z1 extends w1 {
  constructor(e) {
    super(), k1(this, e, null, S1, C1, {});
  }
}
const {
  SvelteComponent: x1,
  append: B1,
  attr: ot,
  detach: W1,
  init: M1,
  insert: D1,
  noop: ol,
  safe_not_equal: L1,
  set_style: Fi,
  svg_element: ca
} = window.__gradio__svelte__internal;
function q1(i) {
  let e, t;
  return {
    c() {
      e = ca("svg"), t = ca("path"), ot(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), ot(t, "fill", "none"), ot(t, "stroke-width", "2"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "version", "1.1"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ot(e, "xml:space", "preserve"), ot(e, "stroke", "currentColor"), Fi(e, "fill-rule", "evenodd"), Fi(e, "clip-rule", "evenodd"), Fi(e, "stroke-linecap", "round"), Fi(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      D1(n, e, s), B1(e, t);
    },
    p: ol,
    i: ol,
    o: ol,
    d(n) {
      n && W1(e);
    }
  };
}
class Y1 extends x1 {
  constructor(e) {
    super(), M1(this, e, null, q1, L1, {});
  }
}
const {
  SvelteComponent: E1,
  append: fa,
  attr: Mt,
  detach: X1,
  init: R1,
  insert: H1,
  noop: al,
  safe_not_equal: A1,
  set_style: ji,
  svg_element: rl
} = window.__gradio__svelte__internal;
function I1(i) {
  let e, t, n;
  return {
    c() {
      e = rl("svg"), t = rl("path"), n = rl("path"), Mt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Mt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 24 24"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "fill", "none"), Mt(e, "stroke", "currentColor"), Mt(e, "stroke-width", "2"), ji(e, "fill-rule", "evenodd"), ji(e, "clip-rule", "evenodd"), ji(e, "stroke-linecap", "round"), ji(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      H1(s, e, l), fa(e, t), fa(e, n);
    },
    p: al,
    i: al,
    o: al,
    d(s) {
      s && X1(e);
    }
  };
}
class T1 extends E1 {
  constructor(e) {
    super(), R1(this, e, null, I1, A1, {});
  }
}
const {
  SvelteComponent: P1,
  append: F1,
  attr: Zt,
  detach: j1,
  init: U1,
  insert: O1,
  noop: cl,
  safe_not_equal: V1,
  set_style: Ui,
  svg_element: ua
} = window.__gradio__svelte__internal;
function N1(i) {
  let e, t;
  return {
    c() {
      e = ua("svg"), t = ua("path"), Zt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "fill", "none"), Zt(e, "stroke", "currentColor"), Zt(e, "stroke-width", "2"), Ui(e, "fill-rule", "evenodd"), Ui(e, "clip-rule", "evenodd"), Ui(e, "stroke-linecap", "round"), Ui(e, "stroke-linejoin", "round"), Zt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      O1(n, e, s), F1(e, t);
    },
    p: cl,
    i: cl,
    o: cl,
    d(n) {
      n && j1(e);
    }
  };
}
class K1 extends P1 {
  constructor(e) {
    super(), U1(this, e, null, N1, V1, {});
  }
}
const {
  SvelteComponent: Z1,
  append: G1,
  attr: Gt,
  detach: J1,
  init: Q1,
  insert: $1,
  noop: fl,
  safe_not_equal: e0,
  set_style: Oi,
  svg_element: ha
} = window.__gradio__svelte__internal;
function t0(i) {
  let e, t;
  return {
    c() {
      e = ha("svg"), t = ha("path"), Gt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24"), Gt(e, "fill", "none"), Gt(e, "stroke", "currentColor"), Gt(e, "stroke-width", "2"), Oi(e, "fill-rule", "evenodd"), Oi(e, "clip-rule", "evenodd"), Oi(e, "stroke-linecap", "round"), Oi(e, "stroke-linejoin", "round"), Gt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      $1(n, e, s), G1(e, t);
    },
    p: fl,
    i: fl,
    o: fl,
    d(n) {
      n && J1(e);
    }
  };
}
class n0 extends Z1 {
  constructor(e) {
    super(), Q1(this, e, null, t0, e0, {});
  }
}
const {
  SvelteComponent: i0,
  append: _a,
  attr: De,
  detach: s0,
  init: l0,
  insert: o0,
  noop: ul,
  safe_not_equal: a0,
  set_style: Vi,
  svg_element: hl
} = window.__gradio__svelte__internal;
function r0(i) {
  let e, t, n;
  return {
    c() {
      e = hl("svg"), t = hl("path"), n = hl("path"), De(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), De(t, "fill", "none"), De(t, "stroke-width", "2"), De(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), De(n, "fill", "none"), De(n, "stroke-width", "2"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "version", "1.1"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), De(e, "xml:space", "preserve"), De(e, "stroke", "currentColor"), Vi(e, "fill-rule", "evenodd"), Vi(e, "clip-rule", "evenodd"), Vi(e, "stroke-linecap", "round"), Vi(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      o0(s, e, l), _a(e, t), _a(e, n);
    },
    p: ul,
    i: ul,
    o: ul,
    d(s) {
      s && s0(e);
    }
  };
}
class c0 extends i0 {
  constructor(e) {
    super(), l0(this, e, null, r0, a0, {});
  }
}
const {
  SvelteComponent: f0,
  append: Dt,
  attr: I,
  detach: u0,
  init: h0,
  insert: _0,
  noop: _l,
  safe_not_equal: d0,
  svg_element: bt
} = window.__gradio__svelte__internal;
function m0(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = bt("svg"), t = bt("path"), n = bt("circle"), s = bt("circle"), l = bt("circle"), o = bt("circle"), r = bt("circle"), a = bt("circle"), c = bt("circle"), f = bt("circle"), I(t, "fill", "none"), I(t, "stroke", "currentColor"), I(t, "stroke-width", "1.5"), I(t, "stroke-linecap", "round"), I(t, "stroke-linejoin", "round"), I(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), I(n, "cx", "7"), I(n, "cy", "7"), I(n, "r", "1.5"), I(n, "fill", "currentColor"), I(s, "cx", "15"), I(s, "cy", "9"), I(s, "r", "1.5"), I(s, "fill", "currentColor"), I(l, "cx", "21"), I(l, "cy", "5"), I(l, "r", "1.5"), I(l, "fill", "currentColor"), I(o, "cx", "25"), I(o, "cy", "13"), I(o, "r", "1.5"), I(o, "fill", "currentColor"), I(r, "cx", "23"), I(r, "cy", "21"), I(r, "r", "1.5"), I(r, "fill", "currentColor"), I(a, "cx", "15"), I(a, "cy", "19"), I(a, "r", "1.5"), I(a, "fill", "currentColor"), I(c, "cx", "9"), I(c, "cy", "23"), I(c, "r", "1.5"), I(c, "fill", "currentColor"), I(f, "cx", "5"), I(f, "cy", "15"), I(f, "r", "1.5"), I(f, "fill", "currentColor"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), I(e, "aria-hidden", "true"), I(e, "role", "img"), I(e, "class", "iconify iconify--carbon"), I(e, "width", "100%"), I(e, "height", "100%"), I(e, "preserveAspectRatio", "xMidYMid meet"), I(e, "viewBox", "0 0 32 32");
    },
    m(u, h) {
      _0(u, e, h), Dt(e, t), Dt(e, n), Dt(e, s), Dt(e, l), Dt(e, o), Dt(e, r), Dt(e, a), Dt(e, c), Dt(e, f);
    },
    p: _l,
    i: _l,
    o: _l,
    d(u) {
      u && u0(e);
    }
  };
}
let g0 = class extends f0 {
  constructor(e) {
    super(), h0(this, e, null, m0, d0, {});
  }
};
const {
  SvelteComponent: b0,
  append: da,
  attr: dl,
  bubble: ma,
  create_component: w0,
  destroy_component: p0,
  detach: Kr,
  element: ga,
  init: v0,
  insert: Zr,
  listen: ml,
  mount_component: k0,
  run_all: y0,
  safe_not_equal: C0,
  set_data: S0,
  set_input_value: ba,
  space: z0,
  text: x0,
  transition_in: B0,
  transition_out: W0
} = window.__gradio__svelte__internal, { createEventDispatcher: M0, afterUpdate: D0 } = window.__gradio__svelte__internal;
function L0(i) {
  let e;
  return {
    c() {
      e = x0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Zr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && S0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Kr(e);
    }
  };
}
function q0(i) {
  let e, t, n, s, l, o, r;
  return t = new nr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [L0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = ga("label"), w0(t.$$.fragment), n = z0(), s = ga("input"), dl(s, "type", "color"), s.disabled = /*disabled*/
      i[3], dl(s, "class", "svelte-16l8u73"), dl(e, "class", "block");
    },
    m(a, c) {
      Zr(a, e, c), k0(t, e, null), da(e, n), da(e, s), ba(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        ml(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        ml(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        ml(
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
      1 && ba(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (B0(t.$$.fragment, a), l = !0);
    },
    o(a) {
      W0(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && Kr(e), p0(t), o = !1, y0(r);
    }
  };
}
function Y0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = M0();
  function f() {
    c("change", n), s || c("input");
  }
  D0(() => {
    t(5, s = !1);
  });
  function u(g) {
    ma.call(this, i, g);
  }
  function h(g) {
    ma.call(this, i, g);
  }
  function _() {
    n = this.value, t(0, n);
  }
  return i.$$set = (g) => {
    "value" in g && t(0, n = g.value), "value_is_output" in g && t(5, s = g.value_is_output), "label" in g && t(1, l = g.label), "info" in g && t(2, o = g.info), "disabled" in g && t(3, r = g.disabled), "show_label" in g && t(4, a = g.show_label);
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
    h,
    _
  ];
}
class E0 extends b0 {
  constructor(e) {
    super(), v0(this, e, Y0, q0, C0, {
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
  SvelteComponent: X0,
  append: Gr,
  attr: fe,
  bubble: R0,
  check_outros: H0,
  create_slot: Jr,
  detach: Bi,
  element: xs,
  empty: A0,
  get_all_dirty_from_scope: Qr,
  get_slot_changes: $r,
  group_outros: I0,
  init: T0,
  insert: Wi,
  listen: P0,
  safe_not_equal: F0,
  set_style: Ye,
  space: ec,
  src_url_equal: us,
  toggle_class: Un,
  transition_in: hs,
  transition_out: _s,
  update_slot_base: tc
} = window.__gradio__svelte__internal;
function j0(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && wa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Jr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = xs("button"), r && r.c(), t = ec(), c && c.c(), fe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), fe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Un(e, "hidden", !/*visible*/
      i[2]), Ye(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ye(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ye(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, u) {
      Wi(f, e, u), r && r.m(e, null), Gr(e, t), c && c.m(e, null), s = !0, l || (o = P0(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? r ? r.p(f, u) : (r = wa(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || u & /*$$scope*/
      2048) && tc(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? $r(
          a,
          /*$$scope*/
          f[11],
          u,
          null
        ) : Qr(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && fe(e, "class", n), (!s || u & /*elem_id*/
      1) && fe(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || u & /*size, variant, elem_classes, visible*/
      30) && Un(e, "hidden", !/*visible*/
      f[2]), u & /*scale*/
      512 && Ye(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), u & /*scale*/
      512 && Ye(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Ye(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (hs(c, f), s = !0);
    },
    o(f) {
      _s(c, f), s = !1;
    },
    d(f) {
      f && Bi(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function U0(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && pa(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Jr(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = xs("a"), l && l.c(), t = ec(), r && r.c(), fe(
        e,
        "href",
        /*link*/
        i[6]
      ), fe(e, "rel", "noopener noreferrer"), fe(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), fe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), fe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Un(e, "hidden", !/*visible*/
      i[2]), Un(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ye(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ye(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ye(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ye(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      Wi(a, e, c), l && l.m(e, null), Gr(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = pa(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && tc(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? $r(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : Qr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && fe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && fe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && fe(e, "class", n), (!s || c & /*elem_id*/
      1) && fe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && Un(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && Un(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && Ye(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && Ye(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && Ye(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && Ye(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (hs(r, a), s = !0);
    },
    o(a) {
      _s(r, a), s = !1;
    },
    d(a) {
      a && Bi(e), l && l.d(), r && r.d(a);
    }
  };
}
function wa(i) {
  let e, t, n;
  return {
    c() {
      e = xs("img"), fe(e, "class", "button-icon svelte-8huxfn"), us(e.src, t = /*icon*/
      i[7].url) || fe(e, "src", t), fe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Wi(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !us(e.src, t = /*icon*/
      s[7].url) && fe(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && fe(e, "alt", n);
    },
    d(s) {
      s && Bi(e);
    }
  };
}
function pa(i) {
  let e, t, n;
  return {
    c() {
      e = xs("img"), fe(e, "class", "button-icon svelte-8huxfn"), us(e.src, t = /*icon*/
      i[7].url) || fe(e, "src", t), fe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Wi(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !us(e.src, t = /*icon*/
      s[7].url) && fe(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && fe(e, "alt", n);
    },
    d(s) {
      s && Bi(e);
    }
  };
}
function O0(i) {
  let e, t, n, s;
  const l = [U0, j0], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = A0();
    },
    m(a, c) {
      o[e].m(a, c), Wi(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (I0(), _s(o[f], 1, 1, () => {
        o[f] = null;
      }), H0(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), hs(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (hs(t), s = !0);
    },
    o(a) {
      _s(t), s = !1;
    },
    d(a) {
      a && Bi(n), o[e].d(a);
    }
  };
}
function V0(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: h = null } = e, { disabled: _ = !1 } = e, { scale: g = null } = e, { min_width: d = void 0 } = e;
  function m(p) {
    R0.call(this, i, p);
  }
  return i.$$set = (p) => {
    "elem_id" in p && t(0, l = p.elem_id), "elem_classes" in p && t(1, o = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, c = p.size), "value" in p && t(5, f = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, h = p.icon), "disabled" in p && t(8, _ = p.disabled), "scale" in p && t(9, g = p.scale), "min_width" in p && t(10, d = p.min_width), "$$scope" in p && t(11, s = p.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    h,
    _,
    g,
    d,
    s,
    n,
    m
  ];
}
class Xl extends X0 {
  constructor(e) {
    super(), T0(this, e, V0, O0, F0, {
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
  SvelteComponent: N0,
  add_render_callback: nc,
  append: Ni,
  attr: je,
  binding_callbacks: va,
  check_outros: K0,
  create_bidirectional_transition: ka,
  destroy_each: Z0,
  detach: ki,
  element: ds,
  empty: G0,
  ensure_array_like: ya,
  group_outros: J0,
  init: Q0,
  insert: yi,
  listen: Rl,
  prevent_default: $0,
  run_all: eg,
  safe_not_equal: tg,
  set_data: ng,
  set_style: Rn,
  space: Hl,
  text: ig,
  toggle_class: wt,
  transition_in: gl,
  transition_out: Ca
} = window.__gradio__svelte__internal, { createEventDispatcher: sg } = window.__gradio__svelte__internal;
function Sa(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function za(i) {
  let e, t, n, s, l, o = ya(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = xa(Sa(i, o, a));
  return {
    c() {
      e = ds("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      je(e, "class", "options svelte-yuohum"), je(e, "role", "listbox"), Rn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Rn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Rn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      yi(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = Rl(e, "mousedown", $0(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = ya(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = Sa(a, o, f);
          r[f] ? r[f].p(u, c) : (r[f] = xa(u), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Rn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Rn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Rn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && nc(() => {
        n && (t || (t = ka(e, Wo, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ka(e, Wo, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && ki(e), Z0(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function xa(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = ds("li"), t = ds("span"), t.textContent = "✓", n = Hl(), l = ig(s), o = Hl(), je(t, "class", "inner-item svelte-yuohum"), wt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), je(e, "class", "item svelte-yuohum"), je(e, "data-index", r = /*index*/
      i[26]), je(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), je(e, "data-testid", "dropdown-option"), je(e, "role", "option"), je(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), wt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), wt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), wt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), wt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, u) {
      yi(f, e, u), Ni(e, t), Ni(e, n), Ni(e, l), Ni(e, o);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && wt(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && ng(l, s), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && je(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && je(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && je(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
      18 && wt(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && wt(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && wt(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && wt(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && ki(e);
    }
  };
}
function lg(i) {
  let e, t, n, s, l;
  nc(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && za(i)
  );
  return {
    c() {
      e = ds("div"), t = Hl(), o && o.c(), n = G0(), je(e, "class", "reference");
    },
    m(r, a) {
      yi(r, e, a), i[20](e), yi(r, t, a), o && o.m(r, a), yi(r, n, a), s || (l = [
        Rl(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Rl(
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
      12 && gl(o, 1)) : (o = za(r), o.c(), gl(o, 1), o.m(n.parentNode, n)) : o && (J0(), Ca(o, 1, 1, () => {
        o = null;
      }), K0());
    },
    i(r) {
      gl(o);
    },
    o(r) {
      Ca(o);
    },
    d(r) {
      r && (ki(e), ki(t), ki(n)), i[20](null), o && o.d(r), s = !1, eg(l);
    }
  };
}
function og(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, h, _, g, d, m, p, v, w;
  function C() {
    const { top: Y, bottom: A } = d.getBoundingClientRect();
    t(16, u = Y), t(17, h = w - A);
  }
  let k = null;
  function S() {
    r && (k !== null && clearTimeout(k), k = setTimeout(
      () => {
        C(), k = null;
      },
      10
    ));
  }
  const z = sg();
  function y() {
    t(11, w = window.innerHeight);
  }
  function B(Y) {
    va[Y ? "unshift" : "push"](() => {
      d = Y, t(6, d);
    });
  }
  const b = (Y) => z("change", Y);
  function L(Y) {
    va[Y ? "unshift" : "push"](() => {
      m = Y, t(7, m);
    });
  }
  return i.$$set = (Y) => {
    "choices" in Y && t(0, l = Y.choices), "filtered_indices" in Y && t(1, o = Y.filtered_indices), "show_options" in Y && t(2, r = Y.show_options), "disabled" in Y && t(3, a = Y.disabled), "selected_indices" in Y && t(4, c = Y.selected_indices), "active_index" in Y && t(5, f = Y.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && d) {
        if (m && c.length > 0) {
          let A = m.querySelectorAll("li");
          for (const N of Array.from(A))
            if (N.getAttribute("data-index") === c[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, N.offsetTop);
              break;
            }
        }
        C();
        const Y = t(15, s = d.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, _ = (Y == null ? void 0 : Y.height) || 0), t(8, g = (Y == null ? void 0 : Y.width) || 0);
      }
      h > u ? (t(10, v = h), t(9, p = null)) : (t(9, p = `${h + _}px`), t(10, v = u - _));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    d,
    m,
    g,
    p,
    v,
    w,
    S,
    z,
    n,
    s,
    u,
    h,
    _,
    y,
    B,
    b,
    L
  ];
}
class ag extends N0 {
  constructor(e) {
    super(), Q0(this, e, og, lg, tg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function rg(i, e) {
  return (i % e + e) % e;
}
function Ba(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function cg(i, e, t) {
  i("change", e), t || i("input");
}
function fg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[rg(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: ug,
  append: cn,
  attr: Fe,
  binding_callbacks: hg,
  check_outros: _g,
  create_component: Al,
  destroy_component: Il,
  detach: Jl,
  element: Tn,
  group_outros: dg,
  init: mg,
  insert: Ql,
  listen: ci,
  mount_component: Tl,
  run_all: gg,
  safe_not_equal: bg,
  set_data: wg,
  set_input_value: Wa,
  space: bl,
  text: pg,
  toggle_class: Hn,
  transition_in: Pn,
  transition_out: bi
} = window.__gradio__svelte__internal, { onMount: vg } = window.__gradio__svelte__internal, { createEventDispatcher: kg, afterUpdate: yg } = window.__gradio__svelte__internal;
function Cg(i) {
  let e;
  return {
    c() {
      e = pg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Ql(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && wg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Jl(e);
    }
  };
}
function Ma(i) {
  let e, t, n;
  return t = new jl({}), {
    c() {
      e = Tn("div"), Al(t.$$.fragment), Fe(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(s, l) {
      Ql(s, e, l), Tl(t, e, null), n = !0;
    },
    i(s) {
      n || (Pn(t.$$.fragment, s), n = !0);
    },
    o(s) {
      bi(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Jl(e), Il(t);
    }
  };
}
function Sg(i) {
  let e, t, n, s, l, o, r, a, c, f, u, h, _, g;
  t = new nr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Cg] },
      $$scope: { ctx: i }
    }
  });
  let d = !/*disabled*/
  i[3] && Ma();
  return u = new ag({
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
      e = Tn("div"), Al(t.$$.fragment), n = bl(), s = Tn("div"), l = Tn("div"), o = Tn("div"), r = Tn("input"), c = bl(), d && d.c(), f = bl(), Al(u.$$.fragment), Fe(r, "role", "listbox"), Fe(r, "aria-controls", "dropdown-options"), Fe(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Fe(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Fe(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Fe(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Hn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Fe(o, "class", "secondary-wrap svelte-1m1zvyj"), Fe(l, "class", "wrap-inner svelte-1m1zvyj"), Hn(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), Fe(s, "class", "wrap svelte-1m1zvyj"), Fe(e, "class", "svelte-1m1zvyj"), Hn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(m, p) {
      Ql(m, e, p), Tl(t, e, null), cn(e, n), cn(e, s), cn(s, l), cn(l, o), cn(o, r), Wa(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), cn(o, c), d && d.m(o, null), cn(s, f), Tl(u, s, null), h = !0, _ || (g = [
        ci(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ci(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ci(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ci(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ci(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], _ = !0);
    },
    p(m, p) {
      const v = {};
      p[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      m[4]), p[0] & /*info*/
      2 && (v.info = /*info*/
      m[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: p, ctx: m }), t.$set(v), (!h || p[0] & /*show_options*/
      4096) && Fe(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!h || p[0] & /*label*/
      1) && Fe(
        r,
        "aria-label",
        /*label*/
        m[0]
      ), (!h || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      m[3]), (!h || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      m[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      m[9] && Wa(
        r,
        /*input_text*/
        m[9]
      ), (!h || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Hn(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? d && (dg(), bi(d, 1, 1, () => {
        d = null;
      }), _g()) : d ? p[0] & /*disabled*/
      8 && Pn(d, 1) : (d = Ma(), d.c(), Pn(d, 1), d.m(o, null)), (!h || p[0] & /*show_options*/
      4096) && Hn(
        l,
        "show_options",
        /*show_options*/
        m[12]
      );
      const w = {};
      p[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      m[12]), p[0] & /*choices*/
      4 && (w.choices = /*choices*/
      m[2]), p[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      m[10]), p[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      m[3]), p[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), p[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      m[14]), u.$set(w), (!h || p[0] & /*container*/
      32) && Hn(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      h || (Pn(t.$$.fragment, m), Pn(d), Pn(u.$$.fragment, m), h = !0);
    },
    o(m) {
      bi(t.$$.fragment, m), bi(d), bi(u.$$.fragment, m), h = !1;
    },
    d(m) {
      m && Jl(e), Il(t), i[29](null), d && d.d(), Il(u), _ = !1, gg(g);
    }
  };
}
function zg(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: h = !0 } = e, { allow_custom_value: _ = !1 } = e, { filterable: g = !0 } = e, d, m = !1, p, v, w = "", C = "", k = !1, S = [], z = null, y = null, B;
  const b = kg();
  l ? (B = a.map((X) => X[1]).indexOf(l), y = B, y === -1 ? (o = l, y = null) : ([w, o] = a[y], C = w), Y()) : a.length > 0 && (B = 0, y = 0, [w, l] = a[y], o = l, C = w);
  function L() {
    t(13, p = a.map((X) => X[0])), t(24, v = a.map((X) => X[1]));
  }
  function Y() {
    L(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, y = null)) : v.includes(l) ? (t(9, w = p[v.indexOf(l)]), t(11, y = v.indexOf(l))) : _ ? (t(9, w = l), t(11, y = null)) : (t(9, w = ""), t(11, y = null)), t(27, B = y);
  }
  function A(X) {
    if (t(11, y = parseInt(X.detail.target.dataset.index)), isNaN(y)) {
      t(11, y = null);
      return;
    }
    t(12, m = !1), t(14, z = null), d.blur();
  }
  function N(X) {
    t(10, S = a.map((O, oe) => oe)), t(12, m = !0), b("focus");
  }
  function te() {
    _ ? t(20, l = w) : t(9, w = p[v.indexOf(l)]), t(12, m = !1), t(14, z = null), b("blur");
  }
  function U(X) {
    t(12, [m, z] = fg(X, z, S), m, (t(14, z), t(2, a), t(23, c), t(6, _), t(9, w), t(10, S), t(8, d), t(25, C), t(11, y), t(27, B), t(26, k), t(24, v))), X.key === "Enter" && (z !== null ? (t(11, y = z), t(12, m = !1), d.blur(), t(14, z = null)) : p.includes(w) ? (t(11, y = p.indexOf(w)), t(12, m = !1), t(14, z = null), d.blur()) : _ && (t(20, l = w), t(11, y = null), t(12, m = !1), t(14, z = null), d.blur()), b("enter", l));
  }
  yg(() => {
    t(21, r = !1), t(26, k = !0);
  }), vg(() => {
    d.focus();
  });
  function ne() {
    w = this.value, t(9, w), t(11, y), t(27, B), t(26, k), t(2, a), t(24, v);
  }
  function E(X) {
    hg[X ? "unshift" : "push"](() => {
      d = X, t(8, d);
    });
  }
  const V = (X) => b("key_up", { key: X.key, input_value: w });
  return i.$$set = (X) => {
    "label" in X && t(0, n = X.label), "info" in X && t(1, s = X.info), "value" in X && t(20, l = X.value), "value_is_output" in X && t(21, r = X.value_is_output), "choices" in X && t(2, a = X.choices), "disabled" in X && t(3, f = X.disabled), "show_label" in X && t(4, u = X.show_label), "container" in X && t(5, h = X.container), "allow_custom_value" in X && t(6, _ = X.allow_custom_value), "filterable" in X && t(7, g = X.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && y !== B && y !== null && k && (t(9, [w, l] = a[y], w, (t(20, l), t(11, y), t(27, B), t(26, k), t(2, a), t(24, v))), t(27, B = y), b("select", {
      index: y,
      value: v[y],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && l != o && (Y(), cg(b, l, r), t(22, o = l)), i.$$.dirty[0] & /*choices*/
    4 && L(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== c && (_ || Y(), t(23, c = a), t(10, S = Ba(a, w)), !_ && S.length > 0 && t(14, z = S[0]), d == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && w !== C && (t(10, S = Ba(a, w)), t(25, C = w), !_ && S.length > 0 && t(14, z = S[0]));
  }, [
    n,
    s,
    a,
    f,
    u,
    h,
    _,
    g,
    d,
    w,
    S,
    y,
    m,
    p,
    z,
    b,
    A,
    N,
    te,
    U,
    l,
    r,
    o,
    c,
    v,
    C,
    k,
    B,
    ne,
    E,
    V
  ];
}
class xg extends ug {
  constructor(e) {
    super(), mg(
      this,
      e,
      zg,
      Sg,
      bg,
      {
        label: 0,
        info: 1,
        value: 20,
        value_is_output: 21,
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
  SvelteComponent: Bg,
  append: Ze,
  attr: On,
  check_outros: Pl,
  create_component: bn,
  destroy_component: wn,
  detach: ni,
  element: pt,
  group_outros: Fl,
  init: Wg,
  insert: ii,
  listen: Mg,
  mount_component: pn,
  safe_not_equal: Dg,
  set_style: Vn,
  space: fi,
  text: $l,
  toggle_class: Da,
  transition_in: ze,
  transition_out: Ue
} = window.__gradio__svelte__internal, { createEventDispatcher: Lg } = window.__gradio__svelte__internal, { onMount: qg, onDestroy: Yg } = window.__gradio__svelte__internal;
function La(i) {
  let e, t, n, s, l, o, r;
  const a = [Xg, Eg], c = [];
  function f(u, h) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = pt("div"), t = pt("button"), s.c(), On(t, "class", "icon svelte-d9x7u0"), On(t, "aria-label", "Lock label detail"), Da(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Vn(e, "margin-right", "8px");
    },
    m(u, h) {
      ii(u, e, h), Ze(e, t), c[n].m(t, null), l = !0, o || (r = Mg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, h) {
      let _ = n;
      n = f(u), n !== _ && (Fl(), Ue(c[_], 1, 1, () => {
        c[_] = null;
      }), Pl(), s = c[n], s || (s = c[n] = a[n](u), s.c()), ze(s, 1), s.m(t, null)), (!l || h & /*labelDetailLock*/
      4) && Da(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      l || (ze(s), l = !0);
    },
    o(u) {
      Ue(s), l = !1;
    },
    d(u) {
      u && ni(e), c[n].d(), o = !1, r();
    }
  };
}
function Eg(i) {
  let e, t;
  return e = new n0({}), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, s) {
      pn(e, n, s), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function Xg(i) {
  let e, t;
  return e = new K1({}), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, s) {
      pn(e, n, s), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function Rg(i) {
  let e;
  return {
    c() {
      e = $l("Cancel");
    },
    m(t, n) {
      ii(t, e, n);
    },
    d(t) {
      t && ni(e);
    }
  };
}
function qa(i) {
  let e, t, n;
  return t = new Xl({
    props: {
      variant: "stop",
      $$slots: { default: [Hg] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = pt("div"), bn(t.$$.fragment), Vn(e, "margin-right", "8px");
    },
    m(s, l) {
      ii(s, e, l), pn(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      262144 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (ze(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ue(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ni(e), wn(t);
    }
  };
}
function Hg(i) {
  let e;
  return {
    c() {
      e = $l("Remove");
    },
    m(t, n) {
      ii(t, e, n);
    },
    d(t) {
      t && ni(e);
    }
  };
}
function Ag(i) {
  let e;
  return {
    c() {
      e = $l("OK");
    },
    m(t, n) {
      ii(t, e, n);
    },
    d(t) {
      t && ni(e);
    }
  };
}
function Ig(i) {
  let e, t, n, s, l, o, r, a, c, f, u, h, _, g, d, m, p, v = !/*showRemove*/
  i[4] && La(i);
  o = new xg({
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
  ), c = new E0({
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
  ), h = new Xl({
    props: {
      $$slots: { default: [Rg] },
      $$scope: { ctx: i }
    }
  }), h.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let w = (
    /*showRemove*/
    i[4] && qa(i)
  );
  return m = new Xl({
    props: {
      variant: "primary",
      $$slots: { default: [Ag] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = pt("div"), t = pt("div"), n = pt("span"), v && v.c(), s = fi(), l = pt("div"), bn(o.$$.fragment), r = fi(), a = pt("div"), bn(c.$$.fragment), f = fi(), u = pt("div"), bn(h.$$.fragment), _ = fi(), w && w.c(), g = fi(), d = pt("div"), bn(m.$$.fragment), Vn(l, "margin-right", "10px"), Vn(a, "margin-right", "40px"), Vn(a, "margin-bottom", "8px"), Vn(u, "margin-right", "8px"), On(n, "class", "model-content svelte-d9x7u0"), On(t, "class", "modal-container svelte-d9x7u0"), On(e, "class", "modal svelte-d9x7u0"), On(e, "id", "model-box-edit");
    },
    m(C, k) {
      ii(C, e, k), Ze(e, t), Ze(t, n), v && v.m(n, null), Ze(n, s), Ze(n, l), pn(o, l, null), Ze(n, r), Ze(n, a), pn(c, a, null), Ze(n, f), Ze(n, u), pn(h, u, null), Ze(n, _), w && w.m(n, null), Ze(n, g), Ze(n, d), pn(m, d, null), p = !0;
    },
    p(C, [k]) {
      /*showRemove*/
      C[4] ? v && (Fl(), Ue(v, 1, 1, () => {
        v = null;
      }), Pl()) : v ? (v.p(C, k), k & /*showRemove*/
      16 && ze(v, 1)) : (v = La(C), v.c(), ze(v, 1), v.m(n, s));
      const S = {};
      k & /*currentLabel*/
      1 && (S.value = /*currentLabel*/
      C[0]), k & /*choices*/
      8 && (S.choices = /*choices*/
      C[3]), o.$set(S);
      const z = {};
      k & /*currentColor*/
      2 && (z.value = /*currentColor*/
      C[1]), c.$set(z);
      const y = {};
      k & /*$$scope*/
      262144 && (y.$$scope = { dirty: k, ctx: C }), h.$set(y), /*showRemove*/
      C[4] ? w ? (w.p(C, k), k & /*showRemove*/
      16 && ze(w, 1)) : (w = qa(C), w.c(), ze(w, 1), w.m(n, g)) : w && (Fl(), Ue(w, 1, 1, () => {
        w = null;
      }), Pl());
      const B = {};
      k & /*$$scope*/
      262144 && (B.$$scope = { dirty: k, ctx: C }), m.$set(B);
    },
    i(C) {
      p || (ze(v), ze(o.$$.fragment, C), ze(c.$$.fragment, C), ze(h.$$.fragment, C), ze(w), ze(m.$$.fragment, C), p = !0);
    },
    o(C) {
      Ue(v), Ue(o.$$.fragment, C), Ue(c.$$.fragment, C), Ue(h.$$.fragment, C), Ue(w), Ue(m.$$.fragment, C), p = !1;
    },
    d(C) {
      C && ni(e), v && v.d(), wn(o), wn(c), wn(h), w && w.d(), wn(m);
    }
  };
}
function Tg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = Lg();
  function h(k) {
    u("change", {
      label: s,
      color: a,
      lock: f,
      ret: k
      // -1: remove, 0: cancel, 1: change
    });
  }
  function _(k) {
    const { detail: S } = k;
    let z = S;
    Number.isInteger(z) ? (Array.isArray(o) && z < o.length && t(1, a = o[z]), Array.isArray(l) && z < l.length && t(0, s = l[z][0])) : t(0, s = z);
  }
  function g(k) {
    const { detail: S } = k;
    t(1, a = S);
  }
  function d(k) {
    _(k), h(1);
  }
  function m(k) {
    t(2, f = !f);
  }
  function p(k) {
    switch (k.key) {
      case "Enter":
        h(1);
        break;
    }
  }
  qg(() => {
    document.addEventListener("keydown", p), t(0, s = n), t(1, a = r);
  }), Yg(() => {
    document.removeEventListener("keydown", p);
  });
  const v = () => h(0), w = () => h(-1), C = () => h(1);
  return i.$$set = (k) => {
    "label" in k && t(10, n = k.label), "currentLabel" in k && t(0, s = k.currentLabel), "choices" in k && t(3, l = k.choices), "choicesColors" in k && t(11, o = k.choicesColors), "color" in k && t(12, r = k.color), "currentColor" in k && t(1, a = k.currentColor), "showRemove" in k && t(4, c = k.showRemove), "labelDetailLock" in k && t(2, f = k.labelDetailLock);
  }, [
    s,
    a,
    f,
    l,
    c,
    h,
    _,
    g,
    d,
    m,
    n,
    o,
    r,
    v,
    w,
    C
  ];
}
class eo extends Bg {
  constructor(e) {
    super(), Wg(this, e, Tg, Ig, Dg, {
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
function yt(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const pe = (i, e, t) => Math.min(Math.max(i, e), t);
class wl {
  constructor(e, t, n, s, l, o, r, a, c, f, u, h, _ = "rgb(255, 255, 255)", g = 0.5, d = 25, m = 8, p = 2, v = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let k = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, S = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = pe(k, -this._xmin, z - this._xmax), S = pe(S, -this._ymin, y - this._ymax), this._xmin += k, this._ymin += S, this._xmax += k, this._ymax += S, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [k, S] = this.toBoxCoordinates(C.clientX, C.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, S = (S - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), S > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = S, this.creatingAnchorY = "ymin") : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = S : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = S : S < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = S, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = pe(this._xmin, 0, k - this.minSize), this._ymin = pe(this._ymin, 0, S - this.minSize), this._xmax = pe(this._xmax, this.minSize, k), this._ymax = pe(this._ymax, this.minSize, S), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > S ? (this._ymin -= this._ymax - S, this._ymax = S) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const k = C.clientX, S = C.clientY, z = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, y = (S - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, b = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += z, this._ymin += y, this._xmin = pe(this._xmin, 0, this._xmax - this.minSize), this._ymin = pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += z, this._ymin += y, this._xmax = pe(this._xmax, this._xmin + this.minSize, B), this._ymin = pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += z, this._ymax += y, this._xmax = pe(this._xmax, this._xmin + this.minSize, B), this._ymax = pe(this._ymax, this._ymin + this.minSize, b);
            break;
          case 3:
            this._xmin += z, this._ymax += y, this._xmin = pe(this._xmin, 0, this._xmax - this.minSize), this._ymax = pe(this._ymax, this._ymin + this.minSize, b);
            break;
          case 4:
            this._ymin += y, this._ymin = pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += z, this._xmax = pe(this._xmax, this._xmin + this.minSize, B);
            break;
          case 6:
            this._ymax += y, this._ymax = pe(this._ymax, this._ymin + this.minSize, b);
            break;
          case 7:
            this._xmin += z, this._xmin = pe(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = w, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = h, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = m, this.thickness = p, this.selectedThickness = v, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = d, this.color = _, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = yt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = yt(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const s = e.measureText(this.label).width + 10, l = 20;
      let o = this.xmin, r = this.ymin - l;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, s, l), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, s, l), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = yt(this.color, 1);
    for (const s of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(s.xmin, s.ymin), e.fillRect(
        t,
        n,
        s.xmax - s.xmin,
        s.ymax - s.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
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
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
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
class pl {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, h = 8, _ = 2, g = 4, d = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (m.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (m.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, w - this._xmax)), v = Math.max(-this._ymin, Math.min(v, C - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + p,
          y: k.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (m) => {
      if (this.isCreating) {
        const p = document.querySelector("canvas");
        if (p) {
          const v = p.getBoundingClientRect(), w = (m.clientX - v.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, C = (m.clientY - v.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, k = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(w - k.x, 2) + Math.pow(C - k.y, 2)) > 2 && (this._points.push({ x: w, y: C }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (m) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((w) => ({
          x: Math.max(0, Math.min(w.x, p)),
          y: Math.max(0, Math.min(w.y, v))
        })), this.updateBoundingBox(), this.renderCallBack(), console.log("Freehand path coordinates:", this._points), console.log("Number of points:", this._points.length), console.log("Bounding box:", {
          xmin: this._xmin,
          ymin: this._ymin,
          xmax: this._xmax,
          ymax: this._ymax
        });
      }
      this.onFinishCreation();
    }, this.handleResize = (m) => {
      if (this.isResizing && this._points.length > 0) {
        const p = m.clientX, v = m.clientY, w = (p - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = this._xmax - this._xmin, S = this._ymax - this._ymin;
        let z = this._xmin, y = this._ymin, B = this._xmax, b = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            z = this._xmin + w, y = this._ymin + C;
            break;
          case 1:
            B = this._xmax + w, y = this._ymin + C;
            break;
          case 2:
            B = this._xmax + w, b = this._ymax + C;
            break;
          case 3:
            z = this._xmin + w, b = this._ymax + C;
            break;
          case 4:
            y = this._ymin + C;
            break;
          case 5:
            B = this._xmax + w;
            break;
          case 6:
            b = this._ymax + C;
            break;
          case 7:
            z = this._xmin + w;
            break;
        }
        const L = (B - z) / k, Y = (b - y) / S;
        this._points = this._points.map((A) => ({
          x: z + (A.x - this._xmin) * L,
          y: y + (A.y - this._ymin) * Y
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = d, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = _, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
      this.updateOffset(), e.beginPath();
      for (let t = 0; t < this.points.length; t++) {
        const [n, s] = this.toCanvasCoordinates(this.points[t].x, this.points[t].y);
        t === 0 ? e.moveTo(n, s) : e.lineTo(n, s);
      }
      if (e.closePath(), e.fillStyle = yt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = yt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.label !== null && this.label.trim() !== "") {
        this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
        const t = e.measureText(this.label).width + 10, n = 20;
        let s = this.xmin, l = this.ymin - n;
        e.fillStyle = "white", [s, l] = this.toCanvasCoordinates(s, l), e.fillRect(s, l, t, n), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, l, t, n), e.fillStyle = "black", e.fillText(this.label, s + 5, l + 15);
      }
      if (this.isSelected) {
        e.fillStyle = yt(this.color, 1);
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
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
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
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
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
class vl {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, h = 8, _ = 2, g = 4, d = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (m.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (m.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, w - this._xmax)), v = Math.max(-this._ymin, Math.min(v, C - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + p,
          y: k.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (m) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (m) => {
      this.isCreating && m.code === "Space" && this._points.length >= this.minPoints && (m.preventDefault(), this.finishCreating());
    }, this.handleResize = (m) => {
      if (this.isResizing && this._points.length > 0) {
        const p = m.clientX, v = m.clientY, w = (p - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = this._xmax - this._xmin, S = this._ymax - this._ymin;
        let z = this._xmin, y = this._ymin, B = this._xmax, b = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            z = this._xmin + w, y = this._ymin + C;
            break;
          case 1:
            B = this._xmax + w, y = this._ymin + C;
            break;
          case 2:
            B = this._xmax + w, b = this._ymax + C;
            break;
          case 3:
            z = this._xmin + w, b = this._ymax + C;
            break;
          case 4:
            y = this._ymin + C;
            break;
          case 5:
            B = this._xmax + w;
            break;
          case 6:
            b = this._ymax + C;
            break;
          case 7:
            z = this._xmin + w;
            break;
        }
        const L = (B - z) / k, Y = (b - y) / S;
        this._points = this._points.map((A) => ({
          x: z + (A.x - this._xmin) * L,
          y: y + (A.y - this._ymin) * Y
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = d, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = _, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = yt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = yt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = yt(this.color, 1);
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
        e.fillStyle = yt(this.color, 1);
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
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
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
      const o = (s - this.canvasWindow.offsetX) / this.canvasWindow.scale, r = (l - this.canvasWindow.offsetY) / this.canvasWindow.scale;
      this._points.push({ x: o, y: r }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack();
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
    })), this.updateBoundingBox(), this.renderCallBack(), console.log("Polygon coordinates:", this._points), console.log("Number of points:", this._points.length), console.log("Polygon area:", this.getArea()), console.log("Bounding box:", {
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax
    }), this.onFinishCreation();
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
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
const Te = [
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
], Ki = (i, e, t) => Math.min(Math.max(i, e), t);
class Pg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Ki(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Ki(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Ki(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Ki(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: Fg,
  append: Le,
  attr: me,
  binding_callbacks: jg,
  bubble: kl,
  check_outros: Nn,
  create_component: ct,
  destroy_component: ft,
  detach: qt,
  element: at,
  empty: Ug,
  group_outros: Kn,
  init: Og,
  insert: Yt,
  is_function: Vg,
  listen: xe,
  mount_component: ut,
  noop: ic,
  run_all: sc,
  safe_not_equal: Ng,
  set_style: Zi,
  space: rt,
  toggle_class: Jt,
  transition_in: ee,
  transition_out: ce
} = window.__gradio__svelte__internal, { onMount: Kg, onDestroy: Zg, createEventDispatcher: Gg } = window.__gradio__svelte__internal;
function Ya(i) {
  let e, t, n, s, l, o, r, a, c, f, u, h, _, g, d, m, p, v, w, C, k, S, z;
  n = new b1({}), o = new c0({}), c = new g0({}), h = new z1({});
  let y = (
    /*showRemoveButton*/
    i[1] && Ea(i)
  ), B = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && Xa(i);
  return p = new Zh({}), C = new Eh({}), {
    c() {
      e = at("span"), t = at("button"), ct(n.$$.fragment), s = rt(), l = at("button"), ct(o.$$.fragment), r = rt(), a = at("button"), ct(c.$$.fragment), f = rt(), u = at("button"), ct(h.$$.fragment), _ = rt(), y && y.c(), g = rt(), B && B.c(), d = rt(), m = at("button"), ct(p.$$.fragment), v = rt(), w = at("button"), ct(C.$$.fragment), me(t, "class", "icon svelte-1m8vz1h"), me(t, "aria-label", "Create box"), Jt(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), me(l, "class", "icon svelte-1m8vz1h"), me(l, "aria-label", "Freehand drawing"), Jt(
        l,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), me(a, "class", "icon svelte-1m8vz1h"), me(a, "aria-label", "Polygon drawing"), Jt(
        a,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), me(u, "class", "icon svelte-1m8vz1h"), me(u, "aria-label", "Edit boxes"), Jt(
        u,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), me(m, "class", "icon svelte-1m8vz1h"), me(m, "aria-label", "Rotate counterclockwise"), me(w, "class", "icon svelte-1m8vz1h"), me(w, "aria-label", "Rotate clockwise"), me(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(b, L) {
      Yt(b, e, L), Le(e, t), ut(n, t, null), Le(e, s), Le(e, l), ut(o, l, null), Le(e, r), Le(e, a), ut(c, a, null), Le(e, f), Le(e, u), ut(h, u, null), Le(e, _), y && y.m(e, null), Le(e, g), B && B.m(e, null), Le(e, d), Le(e, m), ut(p, m, null), Le(e, v), Le(e, w), ut(C, w, null), k = !0, S || (z = [
        xe(
          t,
          "click",
          /*click_handler*/
          i[42]
        ),
        xe(
          l,
          "click",
          /*click_handler_1*/
          i[43]
        ),
        xe(
          a,
          "click",
          /*click_handler_2*/
          i[44]
        ),
        xe(
          u,
          "click",
          /*click_handler_3*/
          i[45]
        ),
        xe(
          m,
          "click",
          /*click_handler_6*/
          i[48]
        ),
        xe(
          w,
          "click",
          /*click_handler_7*/
          i[49]
        )
      ], S = !0);
    },
    p(b, L) {
      (!k || L[0] & /*mode, Mode*/
      4608) && Jt(
        t,
        "selected",
        /*mode*/
        b[12] === /*Mode*/
        b[9].creation
      ), (!k || L[0] & /*mode, Mode*/
      4608) && Jt(
        l,
        "selected",
        /*mode*/
        b[12] === /*Mode*/
        b[9].freehand
      ), (!k || L[0] & /*mode, Mode*/
      4608) && Jt(
        a,
        "selected",
        /*mode*/
        b[12] === /*Mode*/
        b[9].polygon
      ), (!k || L[0] & /*mode, Mode*/
      4608) && Jt(
        u,
        "selected",
        /*mode*/
        b[12] === /*Mode*/
        b[9].drag
      ), /*showRemoveButton*/
      b[1] ? y ? (y.p(b, L), L[0] & /*showRemoveButton*/
      2 && ee(y, 1)) : (y = Ea(b), y.c(), ee(y, 1), y.m(e, g)) : y && (Kn(), ce(y, 1, 1, () => {
        y = null;
      }), Nn()), !/*disableEditBoxes*/
      b[5] && /*labelDetailLock*/
      b[16] ? B ? (B.p(b, L), L[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && ee(B, 1)) : (B = Xa(b), B.c(), ee(B, 1), B.m(e, d)) : B && (Kn(), ce(B, 1, 1, () => {
        B = null;
      }), Nn());
    },
    i(b) {
      k || (ee(n.$$.fragment, b), ee(o.$$.fragment, b), ee(c.$$.fragment, b), ee(h.$$.fragment, b), ee(y), ee(B), ee(p.$$.fragment, b), ee(C.$$.fragment, b), k = !0);
    },
    o(b) {
      ce(n.$$.fragment, b), ce(o.$$.fragment, b), ce(c.$$.fragment, b), ce(h.$$.fragment, b), ce(y), ce(B), ce(p.$$.fragment, b), ce(C.$$.fragment, b), k = !1;
    },
    d(b) {
      b && qt(e), ft(n), ft(o), ft(c), ft(h), y && y.d(), B && B.d(), ft(p), ft(C), S = !1, sc(z);
    }
  };
}
function Ea(i) {
  let e, t, n, s, l;
  return t = new Y1({}), {
    c() {
      e = at("button"), ct(t.$$.fragment), me(e, "class", "icon svelte-1m8vz1h"), me(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      Yt(o, e, r), ut(t, e, null), n = !0, s || (l = xe(
        e,
        "click",
        /*click_handler_4*/
        i[46]
      ), s = !0);
    },
    p: ic,
    i(o) {
      n || (ee(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ce(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && qt(e), ft(t), s = !1, l();
    }
  };
}
function Xa(i) {
  let e, t, n, s, l;
  return t = new T1({}), {
    c() {
      e = at("button"), ct(t.$$.fragment), me(e, "class", "icon svelte-1m8vz1h"), me(e, "aria-label", "Edit label");
    },
    m(o, r) {
      Yt(o, e, r), ut(t, e, null), n = !0, s || (l = xe(
        e,
        "click",
        /*click_handler_5*/
        i[47]
      ), s = !0);
    },
    p: ic,
    i(o) {
      n || (ee(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ce(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && qt(e), ft(t), s = !1, l();
    }
  };
}
function Ra(i) {
  let e, t;
  return e = new eo({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? zn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[26]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[50]
  ), {
    c() {
      ct(e.$$.fragment);
    },
    m(n, s) {
      ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      8 && (l.choices = /*choices*/
      n[3]), s[0] & /*choicesColors*/
      16 && (l.choicesColors = /*choicesColors*/
      n[4]), s[0] & /*selectedBox, value*/
      2049 && (l.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      2049 && (l.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? zn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(l);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ft(e, n);
    }
  };
}
function Ha(i) {
  let e, t;
  return e = new eo({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? zn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[16]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[27]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[51]
  ), {
    c() {
      ct(e.$$.fragment);
    },
    m(n, s) {
      ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      8 && (l.choices = /*choices*/
      n[3]), s[0] & /*choicesColors*/
      16 && (l.choicesColors = /*choicesColors*/
      n[4]), s[0] & /*selectedBox, value*/
      2049 && (l.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      2049 && (l.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? zn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      65536 && (l.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(l);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ft(e, n);
    }
  };
}
function Aa(i) {
  let e, t;
  return e = new eo({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? zn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[16]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[28]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[52]
  ), {
    c() {
      ct(e.$$.fragment);
    },
    m(n, s) {
      ut(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      8 && (l.choices = /*choices*/
      n[3]), s[0] & /*choicesColors*/
      16 && (l.choicesColors = /*choicesColors*/
      n[4]), s[0] & /*selectedBox, value*/
      2049 && (l.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      2049 && (l.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? zn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      65536 && (l.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(l);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ft(e, n);
    }
  };
}
function Jg(i) {
  let e, t, n, s, l, o, r, a, c, f, u = (
    /*interactive*/
    i[2] && Ya(i)
  ), h = (
    /*editModalVisible*/
    i[13] && Ra(i)
  ), _ = (
    /*newModalVisible*/
    i[14] && Ha(i)
  ), g = (
    /*editDefaultLabelVisible*/
    i[15] && Aa(i)
  );
  return {
    c() {
      e = at("div"), t = at("canvas"), n = rt(), u && u.c(), s = rt(), h && h.c(), l = rt(), _ && _.c(), o = rt(), g && g.c(), r = Ug(), Zi(
        t,
        "height",
        /*height*/
        i[6]
      ), Zi(
        t,
        "width",
        /*width*/
        i[7]
      ), me(t, "class", "canvas-annotator svelte-1m8vz1h"), me(e, "class", "canvas-container svelte-1m8vz1h"), me(e, "tabindex", "-1");
    },
    m(d, m) {
      Yt(d, e, m), Le(e, t), i[41](t), Yt(d, n, m), u && u.m(d, m), Yt(d, s, m), h && h.m(d, m), Yt(d, l, m), _ && _.m(d, m), Yt(d, o, m), g && g.m(d, m), Yt(d, r, m), a = !0, c || (f = [
        xe(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[17]
        ),
        xe(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[18]
        ),
        xe(t, "pointermove", function() {
          Vg(
            /*handlesCursor*/
            i[8] ? (
              /*handlePointerMove*/
              i[19]
            ) : null
          ) && /*handlesCursor*/
          (i[8] ? (
            /*handlePointerMove*/
            i[19]
          ) : null).apply(this, arguments);
        }),
        xe(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[25]
        ),
        xe(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[20]
        ),
        xe(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[31]
        ),
        xe(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[32]
        )
      ], c = !0);
    },
    p(d, m) {
      i = d, (!a || m[0] & /*height*/
      64) && Zi(
        t,
        "height",
        /*height*/
        i[6]
      ), (!a || m[0] & /*width*/
      128) && Zi(
        t,
        "width",
        /*width*/
        i[7]
      ), /*interactive*/
      i[2] ? u ? (u.p(i, m), m[0] & /*interactive*/
      4 && ee(u, 1)) : (u = Ya(i), u.c(), ee(u, 1), u.m(s.parentNode, s)) : u && (Kn(), ce(u, 1, 1, () => {
        u = null;
      }), Nn()), /*editModalVisible*/
      i[13] ? h ? (h.p(i, m), m[0] & /*editModalVisible*/
      8192 && ee(h, 1)) : (h = Ra(i), h.c(), ee(h, 1), h.m(l.parentNode, l)) : h && (Kn(), ce(h, 1, 1, () => {
        h = null;
      }), Nn()), /*newModalVisible*/
      i[14] ? _ ? (_.p(i, m), m[0] & /*newModalVisible*/
      16384 && ee(_, 1)) : (_ = Ha(i), _.c(), ee(_, 1), _.m(o.parentNode, o)) : _ && (Kn(), ce(_, 1, 1, () => {
        _ = null;
      }), Nn()), /*editDefaultLabelVisible*/
      i[15] ? g ? (g.p(i, m), m[0] & /*editDefaultLabelVisible*/
      32768 && ee(g, 1)) : (g = Aa(i), g.c(), ee(g, 1), g.m(r.parentNode, r)) : g && (Kn(), ce(g, 1, 1, () => {
        g = null;
      }), Nn());
    },
    i(d) {
      a || (ee(u), ee(h), ee(_), ee(g), a = !0);
    },
    o(d) {
      ce(u), ce(h), ce(_), ce(g), a = !1;
    },
    d(d) {
      d && (qt(e), qt(n), qt(s), qt(l), qt(o), qt(r)), i[41](null), u && u.d(d), h && h.d(d), _ && _.d(d), g && g.d(d), c = !1, sc(f);
    }
  };
}
function An(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function zn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function Qg(i, e, t) {
  var n;
  (function(x) {
    x[x.creation = 0] = "creation", x[x.drag = 1] = "drag", x[x.freehand = 2] = "freehand", x[x.polygon = 3] = "polygon";
  })(n || (n = {}));
  let { imageUrl: s = null } = e, { interactive: l } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: h = [] } = e, { choicesColors: _ = [] } = e, { disableEditBoxes: g = !1 } = e, { height: d = "100%" } = e, { width: m = "100%" } = e, { singleBox: p = !1 } = e, { showRemoveButton: v = null } = e, { handlesCursor: w = !0 } = e, { useDefaultLabel: C = !1 } = e;
  v === null && (v = g);
  let k, S, z = null, y = -1, B = n.drag, b = new Pg(q);
  u !== null && u.boxes.length == 0 && (B = n.creation);
  let L = 0, Y = 0, A = 0, N = 0, te = 1, U = 0, ne = 0, E = !1, V = !1, X = !1, O = null, oe = C, G = { label: "", color: "" };
  const $ = Gg();
  function q() {
    if (S) {
      if (S.clearRect(0, 0, k.width, k.height), S.save(), S.translate(b.offsetX, b.offsetY), S.scale(b.scale, b.scale), z !== null) {
        switch (u.orientation) {
          case 0:
            S.drawImage(z, 0, 0, U, ne);
            break;
          case 1:
            S.translate(U, 0), S.rotate(Math.PI / 2), S.drawImage(z, 0, 0, ne, U);
            break;
          case 2:
            S.translate(U, ne), S.rotate(Math.PI), S.drawImage(z, 0, 0, U, ne);
            break;
          case 3:
            S.translate(0, ne), S.rotate(-Math.PI / 2), S.drawImage(z, 0, 0, ne, U);
            break;
        }
        S.restore();
      }
      for (const x of u.boxes.slice().reverse())
        x.render(S);
    }
  }
  function be(x) {
    t(11, y = x), u.boxes.forEach((R) => {
      R.setSelected(!1);
    }), x >= 0 && x < u.boxes.length && u.boxes[x].setSelected(!0), q();
  }
  function D(x) {
    l && (x.target instanceof Element && x.target.hasPointerCapture(x.pointerId) && x.target.releasePointerCapture(x.pointerId), B === n.creation ? et(x) : B === n.freehand ? dt(x) : B === n.polygon ? St(x) : B === n.drag && T(x));
  }
  function T(x) {
    console.log("clickBox function called, mode:", B === n.drag ? "drag" : "creation");
    const R = k.getBoundingClientRect(), j = x.clientX - R.left, K = x.clientY - R.top;
    let ie = !1;
    for (const [le, he] of u.boxes.entries()) {
      const Di = he.indexOfPointInsideHandle(j, K);
      if (Di >= 0) {
        ie = !0, be(le), he.startResize(Di, x);
        return;
      }
    }
    for (const [le, he] of u.boxes.entries())
      if (he.isPointInsideBox(j, K)) {
        ie = !0, be(le), he.startDrag(x);
        return;
      }
    if (!ie) {
      if (p || be(-1), console.log("No box selected, checking if we should dispatch select event"), B === n.drag) {
        console.log("Mode is drag, calculating coordinates");
        const le = (j - b.offsetX) / te / b.scale, he = (K - b.offsetY) / te / b.scale;
        console.log("Click detected in drag mode:", {
          mouseX: j,
          mouseY: K,
          imageX: le,
          imageY: he,
          scaleFactor: te,
          "canvasWindow.scale": b.scale,
          "canvasWindow.offsetX": b.offsetX,
          "canvasWindow.offsetY": b.offsetY
        }), z && le >= 0 && le <= z.naturalWidth && he >= 0 && he <= z.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(le), Math.round(he)]), $("select", {
          coordinates: [Math.round(le), Math.round(he)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!z,
          imageX: le,
          imageY: he,
          naturalWidth: z == null ? void 0 : z.naturalWidth,
          naturalHeight: z == null ? void 0 : z.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", B);
      b.startDrag(x);
    }
  }
  function se(x) {
    $("change");
  }
  function re(x) {
    if (u === null || B !== n.drag)
      return;
    const R = k.getBoundingClientRect(), j = x.clientX - R.left, K = x.clientY - R.top;
    for (const [ie, le] of u.boxes.entries()) {
      const he = le.indexOfPointInsideHandle(j, K);
      if (he >= 0) {
        t(10, k.style.cursor = le.resizeHandles[he].cursor, k);
        return;
      }
    }
    t(10, k.style.cursor = "default", k);
  }
  function M(x) {
    if (l)
      switch (x.key) {
        case "Delete":
          Ve();
          break;
        case " ":
          B === n.polygon && O && O.isCreating && (x.preventDefault(), O._points.length >= O.minPoints && O.finishCreating());
          break;
      }
  }
  function $e(x) {
    x.preventDefault();
    const R = 1 / (1 + x.deltaY / 1e3 * 0.5), j = parseFloat((b.scale * R).toFixed(2)), K = j < 1 ? 1 : j, ie = k.getBoundingClientRect(), le = x.clientX - ie.left, he = x.clientY - ie.top, Di = (le - b.offsetX) / b.scale, Sc = (he - b.offsetY) / b.scale;
    b.offsetX = le - Di * K, b.offsetY = he - Sc * K, b.scale = K, q();
  }
  function dt(x) {
    const R = k.getBoundingClientRect();
    let j;
    _.length > 0 ? j = An(_[0]) : p ? u.boxes.length > 0 ? j = u.boxes[0].color : j = Te[0] : j = Te[u.boxes.length % Te.length];
    let K = new pl(q, sn, b, L, Y, A, N, "", j, o, r, a, c, f);
    K.startCreating(x, R.left, R.top), p ? t(0, u.boxes = [K], u) : t(0, u.boxes = [K, ...u.boxes], u), be(0), q(), $("change");
  }
  function St(x) {
    O === null ? He(x) : O.addPoint(x) || (q(), $("change"));
  }
  function He(x) {
    const R = k.getBoundingClientRect();
    let j;
    _.length > 0 ? j = An(_[0]) : p ? u.boxes.length > 0 ? j = u.boxes[0].color : j = Te[0] : j = Te[u.boxes.length % Te.length];
    let K = new vl(q, Bs, b, L, Y, A, N, "", j, o, r, a, c, f);
    O = K, K.startCreating(x, R.left, R.top), p ? t(0, u.boxes = [K], u) : t(0, u.boxes = [K, ...u.boxes], u), be(0), q(), $("change");
  }
  function et(x) {
    const R = k.getBoundingClientRect(), j = (x.clientX - R.left - b.offsetX) / te / b.scale, K = (x.clientY - R.top - b.offsetY) / te / b.scale;
    let ie;
    _.length > 0 ? ie = An(_[0]) : p ? u.boxes.length > 0 ? ie = u.boxes[0].color : ie = Te[0] : ie = Te[u.boxes.length % Te.length];
    let le = new wl(q, sn, b, L, Y, A, N, "", j, K, j, K, ie, o, r, a, c, f);
    le.startCreating(x, R.left, R.top), p ? t(0, u.boxes = [le], u) : t(0, u.boxes = [le, ...u.boxes], u), be(0), q(), $("change");
  }
  function Ae() {
    t(12, B = n.creation), t(10, k.style.cursor = "crosshair", k);
  }
  function Tt() {
    t(12, B = n.freehand), t(10, k.style.cursor = "crosshair", k);
  }
  function Mi() {
    t(12, B = n.polygon), t(10, k.style.cursor = "crosshair", k);
  }
  function Pt() {
    t(12, B = n.drag), t(10, k.style.cursor = "default", k);
  }
  function sn() {
    y >= 0 && y < u.boxes.length && (u.boxes[y].getArea() < 1 ? Ve() : (g || (oe ? jt() : t(14, V = !0)), p && Pt()));
  }
  function Bs() {
    O = null, y >= 0 && y < u.boxes.length && (u.boxes[y].getArea() < 1 ? Ve() : (g || (oe ? jt() : t(14, V = !0)), Pt()));
  }
  function W() {
    y >= 0 && y < u.boxes.length && !g && t(13, E = !0);
  }
  function Ft(x) {
    l && W();
  }
  function zt(x) {
    t(13, E = !1);
    const { detail: R } = x;
    let j = R.label, K = R.color, ie = R.ret;
    if (y >= 0 && y < u.boxes.length) {
      let le = u.boxes[y];
      ie == 1 ? (le.label = j, le.color = An(K), q(), $("change")) : ie == -1 && Ve();
    }
  }
  function Mn(x) {
    t(14, V = !1);
    const { detail: R } = x;
    let j = R.label, K = R.color, ie = R.ret, le = R.lock;
    if (y >= 0 && y < u.boxes.length) {
      let he = u.boxes[y];
      ie == 1 ? (t(16, oe = le), G.label = j, G.color = K, he.label = j, he.color = An(K), q(), $("change"), Pt()) : Ve();
    }
  }
  function Ws(x) {
    t(15, X = !1);
    const { detail: R } = x;
    let j = R.label, K = R.color, ie = R.ret, le = R.lock;
    ie == 1 && (t(16, oe = le), G.label = j, G.color = K);
  }
  function jt() {
    if (y >= 0 && y < u.boxes.length) {
      let x = u.boxes[y];
      x.label = G.label, G.color !== "" && (x.color = An(G.color)), q(), $("change"), Pt();
    }
  }
  function Ve() {
    y >= 0 && y < u.boxes.length && (u.boxes.splice(y, 1), be(-1), p && Ae(), $("change"));
  }
  function si(x) {
    t(0, u.orientation = ((u.orientation + x) % 4 + 4) % 4, u), b.orientation = u.orientation, ln();
    for (const R of u.boxes)
      R.onRotate(x);
    q();
  }
  function ln() {
    if (k) {
      if (te = 1, t(10, k.width = k.clientWidth, k), b.setRotatedImage(z), z !== null) {
        if (b.imageRotatedWidth > k.width)
          te = k.width / b.imageRotatedWidth, U = Math.round(b.imageRotatedWidth * te), ne = Math.round(b.imageRotatedHeight * te), L = 0, Y = 0, A = U, N = ne, t(10, k.height = ne, k);
        else {
          U = b.imageRotatedWidth, ne = b.imageRotatedHeight;
          var x = (k.width - U) / 2;
          L = x, Y = 0, A = x + U, N = ne, t(10, k.height = ne, k);
        }
        b.imageWidth = U, b.imageHeight = ne;
      } else
        L = 0, Y = 0, A = k.width, N = k.height, t(10, k.height = k.clientHeight, k);
      if (b.resize(k.width, k.height, L, Y), A > 0 && N > 0)
        for (const R of u.boxes)
          R.canvasXmin = L, R.canvasYmin = Y, R.canvasXmax = A, R.canvasYmax = N, R.setScaleFactor(te);
      q(), $("change");
    }
  }
  const li = new ResizeObserver(ln);
  function xt() {
    for (let x = 0; x < u.boxes.length; x++) {
      let R = u.boxes[x];
      if (!(R instanceof wl) && !(R instanceof pl) && !(R instanceof vl)) {
        let j = "", K = "";
        if (R.hasOwnProperty("color") ? (j = R.color, Array.isArray(j) && j.length === 3 && (j = `rgb(${j[0]}, ${j[1]}, ${j[2]})`)) : j = Te[x % Te.length], R.hasOwnProperty("label") && (K = R.label), R.hasOwnProperty("type") && R.type === "freehand" && R.hasOwnProperty("points")) {
          let ie = new pl(q, sn, b, L, Y, A, N, K, j, o, r, a, c, f);
          ie._points = R.points, ie.updateBoundingBox(), R = ie;
        } else if (R.hasOwnProperty("type") && R.type === "polygon" && R.hasOwnProperty("points")) {
          let ie = new vl(q, sn, b, L, Y, A, N, K, j, o, r, a, c, f);
          ie._points = R.points, ie.updateBoundingBox(), R = ie;
        } else
          R = new wl(q, sn, b, L, Y, A, N, K, R.xmin, R.ymin, R.xmax, R.ymax, j, o, r, a, c, f);
        t(0, u.boxes[x] = R, u);
      }
    }
  }
  function Dn() {
    s !== null && (z === null || z.src != s) && (z = new Image(), z.src = s, z.onload = function() {
      ln(), q();
    });
  }
  Kg(() => {
    if (Array.isArray(h) && h.length > 0) {
      if (!Array.isArray(_) || _.length == 0)
        for (let x = 0; x < h.length; x++) {
          let R = Te[x % Te.length];
          _.push(zn(R));
        }
      G.label = h[0][0], G.color = _[0];
    }
    S = k.getContext("2d"), li.observe(k), y < 0 && u !== null && u.boxes.length > 0 && be(0), Dn(), ln(), q();
  });
  function fc() {
    document.addEventListener("keydown", M);
  }
  function uc() {
    document.removeEventListener("keydown", M);
  }
  Zg(() => {
    document.removeEventListener("keydown", M);
  });
  function hc(x) {
    jg[x ? "unshift" : "push"](() => {
      k = x, t(10, k);
    });
  }
  const _c = () => Ae(), dc = () => Tt(), mc = () => Mi(), gc = () => Pt(), bc = () => Ve(), wc = () => t(15, X = !0), pc = () => si(-1), vc = () => si(1);
  function kc(x) {
    kl.call(this, i, x);
  }
  function yc(x) {
    kl.call(this, i, x);
  }
  function Cc(x) {
    kl.call(this, i, x);
  }
  return i.$$set = (x) => {
    "imageUrl" in x && t(33, s = x.imageUrl), "interactive" in x && t(2, l = x.interactive), "boxAlpha" in x && t(34, o = x.boxAlpha), "boxMinSize" in x && t(35, r = x.boxMinSize), "handleSize" in x && t(36, a = x.handleSize), "boxThickness" in x && t(37, c = x.boxThickness), "boxSelectedThickness" in x && t(38, f = x.boxSelectedThickness), "value" in x && t(0, u = x.value), "choices" in x && t(3, h = x.choices), "choicesColors" in x && t(4, _ = x.choicesColors), "disableEditBoxes" in x && t(5, g = x.disableEditBoxes), "height" in x && t(6, d = x.height), "width" in x && t(7, m = x.width), "singleBox" in x && t(39, p = x.singleBox), "showRemoveButton" in x && t(1, v = x.showRemoveButton), "handlesCursor" in x && t(8, w = x.handlesCursor), "useDefaultLabel" in x && t(40, C = x.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (b.orientation = u.orientation, Dn(), xt(), ln(), q());
  }, [
    u,
    v,
    l,
    h,
    _,
    g,
    d,
    m,
    w,
    n,
    k,
    y,
    B,
    E,
    V,
    X,
    oe,
    D,
    se,
    re,
    $e,
    Ae,
    Tt,
    Mi,
    Pt,
    Ft,
    zt,
    Mn,
    Ws,
    Ve,
    si,
    fc,
    uc,
    s,
    o,
    r,
    a,
    c,
    f,
    p,
    C,
    hc,
    _c,
    dc,
    mc,
    gc,
    bc,
    wc,
    pc,
    vc,
    kc,
    yc,
    Cc
  ];
}
class $g extends Fg {
  constructor(e) {
    super(), Og(
      this,
      e,
      Qg,
      Jg,
      Ng,
      {
        imageUrl: 33,
        interactive: 2,
        boxAlpha: 34,
        boxMinSize: 35,
        handleSize: 36,
        boxThickness: 37,
        boxSelectedThickness: 38,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 39,
        showRemoveButton: 1,
        handlesCursor: 8,
        useDefaultLabel: 40
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: e2,
  add_flush_callback: t2,
  bind: n2,
  binding_callbacks: i2,
  create_component: s2,
  destroy_component: l2,
  init: o2,
  mount_component: a2,
  safe_not_equal: r2,
  transition_in: c2,
  transition_out: f2
} = window.__gradio__svelte__internal, { createEventDispatcher: u2 } = window.__gradio__svelte__internal;
function h2(i) {
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
    i[0]), e = new $g({ props: l }), i2.push(() => n2(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), e.$on(
      "select",
      /*select_handler*/
      i[22]
    ), {
      c() {
        s2(e.$$.fragment);
      },
      m(o, r) {
        a2(e, o, r), n = !0;
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
        o[0], t2(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (c2(e.$$.fragment, o), n = !0);
      },
      o(o) {
        f2(e.$$.fragment, o), n = !1;
      },
      d(o) {
        l2(e, o);
      }
    }
  );
}
function _2(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: h } = e, { boxSelectedThickness: _ } = e, { value: g } = e, { disableEditBoxes: d } = e, { singleBox: m } = e, { showRemoveButton: p } = e, { handlesCursor: v } = e, { useDefaultLabel: w } = e, C, k;
  const S = u2();
  function z(b) {
    g = b, t(0, g);
  }
  const y = () => S("change"), B = (b) => S("select", b.detail);
  return i.$$set = (b) => {
    "src" in b && t(18, n = b.src), "interactive" in b && t(1, s = b.interactive), "boxesAlpha" in b && t(2, l = b.boxesAlpha), "labelList" in b && t(3, o = b.labelList), "labelColors" in b && t(4, r = b.labelColors), "boxMinSize" in b && t(5, a = b.boxMinSize), "handleSize" in b && t(6, c = b.handleSize), "boxThickness" in b && t(7, f = b.boxThickness), "height" in b && t(8, u = b.height), "width" in b && t(9, h = b.width), "boxSelectedThickness" in b && t(10, _ = b.boxSelectedThickness), "value" in b && t(0, g = b.value), "disableEditBoxes" in b && t(11, d = b.disableEditBoxes), "singleBox" in b && t(12, m = b.singleBox), "showRemoveButton" in b && t(13, p = b.showRemoveButton), "handlesCursor" in b && t(14, v = b.handlesCursor), "useDefaultLabel" in b && t(15, w = b.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, C = n), t(19, k = n);
      const b = n;
      Bd(b).then((L) => {
        k === b && t(16, C = L);
      });
    }
  }, [
    g,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    h,
    _,
    d,
    m,
    p,
    v,
    w,
    C,
    S,
    n,
    k,
    z,
    y,
    B
  ];
}
class d2 extends e2 {
  constructor(e) {
    super(), o2(this, e, _2, h2, r2, {
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
class Ia {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: m2,
  add_flush_callback: ms,
  append: In,
  attr: wi,
  bind: gs,
  binding_callbacks: zi,
  bubble: ui,
  check_outros: un,
  create_component: Xt,
  create_slot: g2,
  destroy_component: Rt,
  detach: vn,
  element: Ci,
  empty: b2,
  get_all_dirty_from_scope: w2,
  get_slot_changes: p2,
  group_outros: hn,
  init: v2,
  insert: kn,
  mount_component: Ht,
  noop: k2,
  safe_not_equal: y2,
  space: fn,
  toggle_class: Ta,
  transition_in: Q,
  transition_out: ae,
  update_slot_base: C2
} = window.__gradio__svelte__internal, { createEventDispatcher: S2, tick: z2 } = window.__gradio__svelte__internal;
function Pa(i) {
  let e, t;
  return e = new Td({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [x2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Xt(e.$$.fragment);
    },
    m(n, s) {
      Ht(e, n, s), t = !0;
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
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function x2(i) {
  let e, t;
  return e = new bs({
    props: {
      Icon: $u,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Xt(e.$$.fragment);
    },
    m(n, s) {
      Ht(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Fa(i) {
  let e, t;
  return e = new y_({
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
      Xt(e.$$.fragment);
    },
    m(n, s) {
      Ht(e, n, s), t = !0;
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
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function ja(i) {
  let e, t, n;
  return t = new bs({
    props: { Icon: lr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = Ci("div"), Xt(t.$$.fragment);
    },
    m(s, l) {
      kn(s, e, l), Ht(t, e, null), n = !0;
    },
    p: k2,
    i(s) {
      n || (Q(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && vn(e), Rt(t);
    }
  };
}
function Ua(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = g2(
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
      8388608) && C2(
        n,
        t,
        s,
        /*$$scope*/
        s[54],
        e ? p2(
          t,
          /*$$scope*/
          s[54],
          l,
          null
        ) : w2(
          /*$$scope*/
          s[54]
        ),
        null
      );
    },
    i(s) {
      e || (Q(n, s), e = !0);
    },
    o(s) {
      ae(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function B2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ua(i)
  );
  return {
    c() {
      n && n.c(), e = b2();
    },
    m(s, l) {
      n && n.m(s, l), kn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && Q(n, 1)) : (n = Ua(s), n.c(), Q(n, 1), n.m(e.parentNode, e)) : n && (hn(), ae(n, 1, 1, () => {
        n = null;
      }), un());
    },
    i(s) {
      t || (Q(n), t = !0);
    },
    o(s) {
      ae(n), t = !1;
    },
    d(s) {
      s && vn(e), n && n.d(s);
    }
  };
}
function Oa(i) {
  let e, t;
  return e = new f1({
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
      Xt(e.$$.fragment);
    },
    m(n, s) {
      Ht(e, n, s), t = !0;
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
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Va(i) {
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
    i[1]), t = new d2({ props: o }), zi.push(() => gs(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), t.$on(
      "select",
      /*select_handler*/
      i[52]
    ), {
      c() {
        e = Ci("div"), Xt(t.$$.fragment), wi(e, "class", "image-frame svelte-1gjdske"), Ta(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        kn(r, e, a), Ht(t, e, null), s = !0;
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
        r[1], ms(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Ta(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (Q(t.$$.fragment, r), s = !0);
      },
      o(r) {
        ae(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && vn(e), Rt(t);
      }
    }
  );
}
function Na(i) {
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
    i[0]), e = new A_({ props: l }), zi.push(() => gs(e, "active_source", s)), {
      c() {
        Xt(e.$$.fragment);
      },
      m(o, r) {
        Ht(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], ms(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Q(e.$$.fragment, o), n = !0);
      },
      o(o) {
        ae(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Rt(e, o);
      }
    }
  );
}
function W2(i) {
  let e, t, n, s, l, o, r, a, c, f, u, h, _, g, d = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), m;
  e = new If({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: or,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Pa(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Fa(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && ja(i)
  );
  function C(b) {
    i[42](b);
  }
  function k(b) {
    i[43](b);
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
    $$slots: { default: [B2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (S.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (S.dragging = /*dragging*/
  i[30]), c = new pm({ props: S }), i[41](c), zi.push(() => gs(c, "uploading", C)), zi.push(() => gs(c, "dragging", k)), c.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let z = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Oa(i)
  ), y = (
    /*value*/
    i[1] !== null && Va(i)
  ), B = d && Na(i);
  return {
    c() {
      Xt(e.$$.fragment), t = fn(), n = Ci("div"), p && p.c(), s = fn(), v && v.c(), l = fn(), w && w.c(), o = fn(), r = Ci("div"), a = Ci("div"), Xt(c.$$.fragment), h = fn(), z && z.c(), _ = fn(), y && y.c(), g = fn(), B && B.c(), wi(n, "class", "icon-buttons svelte-1gjdske"), wi(a, "class", "upload-container svelte-1gjdske"), wi(r, "data-testid", "image"), wi(r, "class", "image-container svelte-1gjdske");
    },
    m(b, L) {
      Ht(e, b, L), kn(b, t, L), kn(b, n, L), p && p.m(n, null), In(n, s), v && v.m(n, null), In(n, l), w && w.m(n, null), kn(b, o, L), kn(b, r, L), In(r, a), Ht(c, a, null), In(a, h), z && z.m(a, null), In(a, _), y && y.m(a, null), In(r, g), B && B.m(r, null), m = !0;
    },
    p(b, L) {
      const Y = {};
      L[0] & /*show_label*/
      8 && (Y.show_label = /*show_label*/
      b[3]), L[0] & /*label*/
      4 && (Y.label = /*label*/
      b[2] || "Image Annotator"), e.$set(Y), /*showDownloadButton*/
      b[10] && /*value*/
      b[1] !== null ? p ? (p.p(b, L), L[0] & /*showDownloadButton, value*/
      1026 && Q(p, 1)) : (p = Pa(b), p.c(), Q(p, 1), p.m(n, s)) : p && (hn(), ae(p, 1, 1, () => {
        p = null;
      }), un()), /*showShareButton*/
      b[9] && /*value*/
      b[1] !== null ? v ? (v.p(b, L), L[0] & /*showShareButton, value*/
      514 && Q(v, 1)) : (v = Fa(b), v.c(), Q(v, 1), v.m(n, l)) : v && (hn(), ae(v, 1, 1, () => {
        v = null;
      }), un()), /*showClearButton*/
      b[11] && /*value*/
      b[1] !== null && /*interactive*/
      b[7] ? w ? (w.p(b, L), L[0] & /*showClearButton, value, interactive*/
      2178 && Q(w, 1)) : (w = ja(b), w.c(), Q(w, 1), w.m(n, null)) : w && (hn(), ae(w, 1, 1, () => {
        w = null;
      }), un());
      const A = {};
      L[0] & /*value, active_source*/
      3 && (A.hidden = /*value*/
      b[1] !== null || /*active_source*/
      b[0] === "webcam"), L[0] & /*active_source*/
      1 && (A.filetype = /*active_source*/
      b[0] === "clipboard" ? "clipboard" : "image/*"), L[0] & /*root*/
      64 && (A.root = /*root*/
      b[6]), L[0] & /*max_file_size*/
      33554432 && (A.max_file_size = /*max_file_size*/
      b[25]), L[0] & /*sources*/
      16 && (A.disable_click = !/*sources*/
      b[4].includes("upload")), L[0] & /*cli_upload*/
      67108864 && (A.upload = /*cli_upload*/
      b[26]), L[0] & /*stream_handler*/
      134217728 && (A.stream_handler = /*stream_handler*/
      b[27]), L[0] & /*value*/
      2 | L[1] & /*$$scope*/
      8388608 && (A.$$scope = { dirty: L, ctx: b }), !f && L[0] & /*uploading*/
      536870912 && (f = !0, A.uploading = /*uploading*/
      b[29], ms(() => f = !1)), !u && L[0] & /*dragging*/
      1073741824 && (u = !0, A.dragging = /*dragging*/
      b[30], ms(() => u = !1)), c.$set(A), /*value*/
      b[1] === null && /*active_source*/
      b[0] === "webcam" ? z ? (z.p(b, L), L[0] & /*value, active_source*/
      3 && Q(z, 1)) : (z = Oa(b), z.c(), Q(z, 1), z.m(a, _)) : z && (hn(), ae(z, 1, 1, () => {
        z = null;
      }), un()), /*value*/
      b[1] !== null ? y ? (y.p(b, L), L[0] & /*value*/
      2 && Q(y, 1)) : (y = Va(b), y.c(), Q(y, 1), y.m(a, null)) : y && (hn(), ae(y, 1, 1, () => {
        y = null;
      }), un()), L[0] & /*sources, value, interactive*/
      146 && (d = /*sources*/
      (b[4].length > 1 || /*sources*/
      b[4].includes("clipboard")) && /*value*/
      b[1] === null && /*interactive*/
      b[7]), d ? B ? (B.p(b, L), L[0] & /*sources, value, interactive*/
      146 && Q(B, 1)) : (B = Na(b), B.c(), Q(B, 1), B.m(r, null)) : B && (hn(), ae(B, 1, 1, () => {
        B = null;
      }), un());
    },
    i(b) {
      m || (Q(e.$$.fragment, b), Q(p), Q(v), Q(w), Q(c.$$.fragment, b), Q(z), Q(y), Q(B), m = !0);
    },
    o(b) {
      ae(e.$$.fragment, b), ae(p), ae(v), ae(w), ae(c.$$.fragment, b), ae(z), ae(y), ae(B), m = !1;
    },
    d(b) {
      b && (vn(t), vn(n), vn(o), vn(r)), Rt(e, b), p && p.d(), v && v.d(), w && w.d(), i[41](null), Rt(c), z && z.d(), y && y.d(), B && B.d();
    }
  };
}
function M2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(W, Ft, zt, Mn) {
    function Ws(jt) {
      return jt instanceof zt ? jt : new zt(function(Ve) {
        Ve(jt);
      });
    }
    return new (zt || (zt = Promise))(function(jt, Ve) {
      function si(xt) {
        try {
          li(Mn.next(xt));
        } catch (Dn) {
          Ve(Dn);
        }
      }
      function ln(xt) {
        try {
          li(Mn.throw(xt));
        } catch (Dn) {
          Ve(Dn);
        }
      }
      function li(xt) {
        xt.done ? jt(xt.value) : Ws(xt.value).then(si, ln);
      }
      li((Mn = Mn.apply(W, Ft || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: h } = e, { i18n: _ } = e, { showShareButton: g } = e, { showDownloadButton: d } = e, { showClearButton: m } = e, { boxesAlpha: p } = e, { labelList: v } = e, { labelColors: w } = e, { boxMinSize: C } = e, { handleSize: k } = e, { height: S } = e, { width: z } = e, { boxThickness: y } = e, { disableEditBoxes: B } = e, { singleBox: b } = e, { showRemoveButton: L } = e, { handlesCursor: Y } = e, { boxSelectedThickness: A } = e, { max_file_size: N = null } = e, { cli_upload: te } = e, { stream_handler: U } = e, { useDefaultLabel: ne } = e, E, V = !1, { active_source: X = null } = e;
  function O({ detail: W }) {
    t(1, o = new Ia()), t(1, o.image = W, o), G("upload");
  }
  function oe(W) {
    return l(this, void 0, void 0, function* () {
      const Ft = yield E.load_files([new File([W], "webcam.png")]), zt = (Ft == null ? void 0 : Ft[0]) || null;
      zt ? (t(1, o = new Ia()), t(1, o.image = zt, o)) : t(1, o = null), yield z2(), G("change");
    });
  }
  const G = S2();
  let $ = !1;
  function q(W) {
    return l(this, void 0, void 0, function* () {
      switch (W) {
        case "clipboard":
          E.paste_clipboard();
          break;
      }
    });
  }
  function be() {
    t(1, o = null), G("clear"), G("change");
  }
  const D = async (W) => W === null ? "" : `<img src="${await c_(W.image)}" />`;
  function T(W) {
    ui.call(this, i, W);
  }
  function se(W) {
    ui.call(this, i, W);
  }
  function re(W) {
    zi[W ? "unshift" : "push"](() => {
      E = W, t(31, E);
    });
  }
  function M(W) {
    V = W, t(29, V);
  }
  function $e(W) {
    $ = W, t(30, $);
  }
  function dt(W) {
    ui.call(this, i, W);
  }
  const St = (W) => oe(W.detail), He = (W) => oe(W.detail);
  function et(W) {
    ui.call(this, i, W);
  }
  function Ae(W) {
    ui.call(this, i, W);
  }
  const Tt = (W) => oe(W.detail);
  function Mi(W) {
    o = W, t(1, o);
  }
  const Pt = () => G("change"), sn = (W) => G("select", { index: null, value: W.detail.coordinates });
  function Bs(W) {
    X = W, t(0, X), t(4, c);
  }
  return i.$$set = (W) => {
    "value" in W && t(1, o = W.value), "label" in W && t(2, r = W.label), "show_label" in W && t(3, a = W.show_label), "sources" in W && t(4, c = W.sources), "selectable" in W && t(5, f = W.selectable), "root" in W && t(6, u = W.root), "interactive" in W && t(7, h = W.interactive), "i18n" in W && t(8, _ = W.i18n), "showShareButton" in W && t(9, g = W.showShareButton), "showDownloadButton" in W && t(10, d = W.showDownloadButton), "showClearButton" in W && t(11, m = W.showClearButton), "boxesAlpha" in W && t(12, p = W.boxesAlpha), "labelList" in W && t(13, v = W.labelList), "labelColors" in W && t(14, w = W.labelColors), "boxMinSize" in W && t(15, C = W.boxMinSize), "handleSize" in W && t(16, k = W.handleSize), "height" in W && t(17, S = W.height), "width" in W && t(18, z = W.width), "boxThickness" in W && t(19, y = W.boxThickness), "disableEditBoxes" in W && t(20, B = W.disableEditBoxes), "singleBox" in W && t(21, b = W.singleBox), "showRemoveButton" in W && t(22, L = W.showRemoveButton), "handlesCursor" in W && t(23, Y = W.handlesCursor), "boxSelectedThickness" in W && t(24, A = W.boxSelectedThickness), "max_file_size" in W && t(25, N = W.max_file_size), "cli_upload" in W && t(26, te = W.cli_upload), "stream_handler" in W && t(27, U = W.stream_handler), "useDefaultLabel" in W && t(28, ne = W.useDefaultLabel), "active_source" in W && t(0, X = W.active_source), "$$scope" in W && t(54, s = W.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && V && be(), i.$$.dirty[0] & /*dragging*/
    1073741824 && G("drag", $), i.$$.dirty[0] & /*active_source, sources*/
    17 && !X && c && t(0, X = c[0]);
  }, [
    X,
    o,
    r,
    a,
    c,
    f,
    u,
    h,
    _,
    g,
    d,
    m,
    p,
    v,
    w,
    C,
    k,
    S,
    z,
    y,
    B,
    b,
    L,
    Y,
    A,
    N,
    te,
    U,
    ne,
    V,
    $,
    E,
    O,
    oe,
    G,
    q,
    be,
    n,
    D,
    T,
    se,
    re,
    M,
    $e,
    dt,
    St,
    He,
    et,
    Ae,
    Tt,
    Mi,
    Pt,
    sn,
    Bs,
    s
  ];
}
class D2 extends m2 {
  constructor(e) {
    super(), v2(
      this,
      e,
      M2,
      W2,
      y2,
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
  SvelteComponent: L2,
  attr: is,
  detach: lc,
  element: oc,
  init: q2,
  insert: ac,
  noop: Ka,
  safe_not_equal: Y2,
  src_url_equal: Za,
  toggle_class: Qt
} = window.__gradio__svelte__internal;
function Ga(i) {
  let e, t;
  return {
    c() {
      e = oc("img"), Za(e.src, t = /*value*/
      i[0].url) || is(e, "src", t), is(e, "alt", "");
    },
    m(n, s) {
      ac(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !Za(e.src, t = /*value*/
      n[0].url) && is(e, "src", t);
    },
    d(n) {
      n && lc(e);
    }
  };
}
function E2(i) {
  let e, t = (
    /*value*/
    i[0] && Ga(i)
  );
  return {
    c() {
      e = oc("div"), t && t.c(), is(e, "class", "container svelte-1sgcyba"), Qt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Qt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Qt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Qt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      ac(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = Ga(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && Qt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && Qt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && Qt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && Qt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Ka,
    o: Ka,
    d(n) {
      n && lc(e), t && t.d();
    }
  };
}
function X2(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class ob extends L2 {
  constructor(e) {
    super(), q2(this, e, X2, E2, Y2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: R2,
  add_flush_callback: Ja,
  assign: H2,
  bind: Qa,
  binding_callbacks: $a,
  check_outros: A2,
  create_component: xn,
  destroy_component: Bn,
  detach: rc,
  empty: I2,
  flush: J,
  get_spread_object: T2,
  get_spread_update: P2,
  group_outros: F2,
  init: j2,
  insert: cc,
  mount_component: Wn,
  safe_not_equal: U2,
  space: O2,
  transition_in: At,
  transition_out: It
} = window.__gradio__svelte__internal;
function V2(i) {
  let e, t;
  return e = new gu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Z2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Wn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      8192 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bn(e, n);
    }
  };
}
function N2(i) {
  let e, t;
  return e = new _r({
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
      xn(e.$$.fragment);
    },
    m(n, s) {
      Wn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bn(e, n);
    }
  };
}
function K2(i) {
  let e, t;
  return e = new _r({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Wn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bn(e, n);
    }
  };
}
function Z2(i) {
  let e, t;
  return e = new or({}), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Wn(e, n, s), t = !0;
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bn(e, n);
    }
  };
}
function G2(i) {
  let e, t, n, s;
  const l = [K2, N2, V2], o = [];
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
      t.c(), n = I2();
    },
    m(a, c) {
      o[e].m(a, c), cc(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (F2(), It(o[f], 1, 1, () => {
        o[f] = null;
      }), A2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), At(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (At(t), s = !0);
    },
    o(a) {
      It(t), s = !1;
    },
    d(a) {
      a && rc(n), o[e].d(a);
    }
  };
}
function J2(i) {
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
  for (let h = 0; h < r.length; h += 1)
    a = H2(a, r[h]);
  e = new Cd({ props: a });
  function c(h) {
    i[34](h);
  }
  function f(h) {
    i[35](h);
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
    $$slots: { default: [G2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new D2({ props: u }), $a.push(() => Qa(n, "active_source", c)), $a.push(() => Qa(n, "value", f)), n.$on(
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
        xn(e.$$.fragment), t = O2(), xn(n.$$.fragment);
      },
      m(h, _) {
        Wn(e, h, _), cc(h, t, _), Wn(n, h, _), o = !0;
      },
      p(h, _) {
        const g = _[0] & /*loading_status*/
        2 | _[1] & /*gradio*/
        1 ? P2(r, [
          _[1] & /*gradio*/
          1 && {
            autoscroll: (
              /*gradio*/
              h[31].autoscroll
            )
          },
          _[1] & /*gradio*/
          1 && { i18n: (
            /*gradio*/
            h[31].i18n
          ) },
          _[0] & /*loading_status*/
          2 && T2(
            /*loading_status*/
            h[1]
          )
        ]) : {};
        e.$set(g);
        const d = {};
        _[0] & /*_selectable*/
        1024 && (d.selectable = /*_selectable*/
        h[10]), _[0] & /*root*/
        128 && (d.root = /*root*/
        h[7]), _[0] & /*sources*/
        16384 && (d.sources = /*sources*/
        h[14]), _[0] & /*interactive*/
        262144 && (d.interactive = /*interactive*/
        h[18]), _[0] & /*show_download_button*/
        32768 && (d.showDownloadButton = /*show_download_button*/
        h[15]), _[0] & /*show_share_button*/
        65536 && (d.showShareButton = /*show_share_button*/
        h[16]), _[0] & /*show_clear_button*/
        131072 && (d.showClearButton = /*show_clear_button*/
        h[17]), _[1] & /*gradio*/
        1 && (d.i18n = /*gradio*/
        h[31].i18n), _[0] & /*boxes_alpha*/
        524288 && (d.boxesAlpha = /*boxes_alpha*/
        h[19]), _[0] & /*height*/
        256 && (d.height = /*height*/
        h[8]), _[0] & /*width*/
        512 && (d.width = /*width*/
        h[9]), _[0] & /*label_list*/
        1048576 && (d.labelList = /*label_list*/
        h[20]), _[0] & /*label_colors*/
        2097152 && (d.labelColors = /*label_colors*/
        h[21]), _[0] & /*box_min_size*/
        4194304 && (d.boxMinSize = /*box_min_size*/
        h[22]), _[0] & /*label*/
        32 && (d.label = /*label*/
        h[5]), _[0] & /*show_label*/
        64 && (d.show_label = /*show_label*/
        h[6]), _[1] & /*gradio*/
        1 && (d.max_file_size = /*gradio*/
        h[31].max_file_size), _[1] & /*gradio*/
        1 && (d.cli_upload = /*gradio*/
        h[31].client.upload), _[1] & /*gradio*/
        1 && (d.stream_handler = /*gradio*/
        h[31].client.stream), _[0] & /*handle_size*/
        8388608 && (d.handleSize = /*handle_size*/
        h[23]), _[0] & /*box_thickness*/
        16777216 && (d.boxThickness = /*box_thickness*/
        h[24]), _[0] & /*box_selected_thickness*/
        33554432 && (d.boxSelectedThickness = /*box_selected_thickness*/
        h[25]), _[0] & /*disable_edit_boxes*/
        67108864 && (d.disableEditBoxes = /*disable_edit_boxes*/
        h[26]), _[0] & /*single_box*/
        134217728 && (d.singleBox = /*single_box*/
        h[27]), _[0] & /*show_remove_button*/
        268435456 && (d.showRemoveButton = /*show_remove_button*/
        h[28]), _[0] & /*handles_cursor*/
        536870912 && (d.handlesCursor = /*handles_cursor*/
        h[29]), _[0] & /*use_default_label*/
        1073741824 && (d.useDefaultLabel = /*use_default_label*/
        h[30]), _[1] & /*$$scope, gradio, active_source*/
        8197 && (d.$$scope = { dirty: _, ctx: h }), !s && _[1] & /*active_source*/
        4 && (s = !0, d.active_source = /*active_source*/
        h[33], Ja(() => s = !1)), !l && _[0] & /*value*/
        1 && (l = !0, d.value = /*value*/
        h[0], Ja(() => l = !1)), n.$set(d);
      },
      i(h) {
        o || (At(e.$$.fragment, h), At(n.$$.fragment, h), o = !0);
      },
      o(h) {
        It(e.$$.fragment, h), It(n.$$.fragment, h), o = !1;
      },
      d(h) {
        h && rc(t), Bn(e, h), Bn(n, h);
      }
    }
  );
}
function Q2(i) {
  let e, t;
  return e = new Tc({
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
      $$slots: { default: [J2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Wn(e, n, s), t = !0;
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
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bn(e, n);
    }
  };
}
function $2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: h = !1 } = e, { container: _ = !0 } = e, { scale: g = null } = e, { min_width: d = void 0 } = e, { loading_status: m } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: w } = e, { show_clear_button: C } = e, { interactive: k } = e, { boxes_alpha: S } = e, { label_list: z } = e, { label_colors: y } = e, { box_min_size: B } = e, { handle_size: b } = e, { box_thickness: L } = e, { box_selected_thickness: Y } = e, { disable_edit_boxes: A } = e, { single_box: N } = e, { show_remove_button: te } = e, { handles_cursor: U } = e, { use_default_label: ne } = e, { gradio: E } = e, V, X = null;
  function O(M) {
    X = M, t(33, X);
  }
  function oe(M) {
    o = M, t(0, o);
  }
  const G = () => E.dispatch("change"), $ = () => E.dispatch("edit"), q = () => {
    E.dispatch("clear");
  }, be = ({ detail: M }) => t(32, V = M), D = () => E.dispatch("upload"), T = ({ detail: M }) => E.dispatch("select", M), se = ({ detail: M }) => E.dispatch("share", M), re = ({ detail: M }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), E.dispatch("error", M);
  };
  return i.$$set = (M) => {
    "elem_id" in M && t(2, n = M.elem_id), "elem_classes" in M && t(3, s = M.elem_classes), "visible" in M && t(4, l = M.visible), "value" in M && t(0, o = M.value), "label" in M && t(5, r = M.label), "show_label" in M && t(6, a = M.show_label), "root" in M && t(7, c = M.root), "height" in M && t(8, f = M.height), "width" in M && t(9, u = M.width), "_selectable" in M && t(10, h = M._selectable), "container" in M && t(11, _ = M.container), "scale" in M && t(12, g = M.scale), "min_width" in M && t(13, d = M.min_width), "loading_status" in M && t(1, m = M.loading_status), "sources" in M && t(14, p = M.sources), "show_download_button" in M && t(15, v = M.show_download_button), "show_share_button" in M && t(16, w = M.show_share_button), "show_clear_button" in M && t(17, C = M.show_clear_button), "interactive" in M && t(18, k = M.interactive), "boxes_alpha" in M && t(19, S = M.boxes_alpha), "label_list" in M && t(20, z = M.label_list), "label_colors" in M && t(21, y = M.label_colors), "box_min_size" in M && t(22, B = M.box_min_size), "handle_size" in M && t(23, b = M.handle_size), "box_thickness" in M && t(24, L = M.box_thickness), "box_selected_thickness" in M && t(25, Y = M.box_selected_thickness), "disable_edit_boxes" in M && t(26, A = M.disable_edit_boxes), "single_box" in M && t(27, N = M.single_box), "show_remove_button" in M && t(28, te = M.show_remove_button), "handles_cursor" in M && t(29, U = M.handles_cursor), "use_default_label" in M && t(30, ne = M.use_default_label), "gradio" in M && t(31, E = M.gradio);
  }, [
    o,
    m,
    n,
    s,
    l,
    r,
    a,
    c,
    f,
    u,
    h,
    _,
    g,
    d,
    p,
    v,
    w,
    C,
    k,
    S,
    z,
    y,
    B,
    b,
    L,
    Y,
    A,
    N,
    te,
    U,
    ne,
    E,
    V,
    X,
    O,
    oe,
    G,
    $,
    q,
    be,
    D,
    T,
    se,
    re
  ];
}
class ab extends R2 {
  constructor(e) {
    super(), j2(
      this,
      e,
      $2,
      Q2,
      U2,
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
    this.$$set({ elem_id: e }), J();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), J();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), J();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), J();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), J();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), J();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), J();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), J();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), J();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), J();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), J();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), J();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), J();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), J();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), J();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), J();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), J();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), J();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), J();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), J();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), J();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), J();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), J();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), J();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), J();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), J();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), J();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), J();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), J();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), J();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), J();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), J();
  }
}
export {
  ob as BaseExample,
  ab as default
};
