const {
  SvelteComponent: sf,
  assign: af,
  create_slot: rf,
  detach: ff,
  element: cf,
  get_all_dirty_from_scope: uf,
  get_slot_changes: _f,
  get_spread_update: df,
  init: hf,
  insert: mf,
  safe_not_equal: gf,
  set_dynamic_element_data: Po,
  set_style: We,
  toggle_class: at,
  transition_in: Va,
  transition_out: Na,
  update_slot_base: bf
} = window.__gradio__svelte__internal;
function wf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = rf(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      l[7]
    ) },
    { id: (
      /*elem_id*/
      l[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      l[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < s.length; a += 1)
    r = af(r, s[a]);
  return {
    c() {
      e = cf(
        /*tag*/
        l[14]
      ), o && o.c(), Po(
        /*tag*/
        l[14]
      )(e, r), at(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), at(
        e,
        "padded",
        /*padding*/
        l[6]
      ), at(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), at(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), at(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), We(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), We(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), We(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), We(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), We(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), We(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), We(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      mf(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && bf(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? _f(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : uf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Po(
        /*tag*/
        a[14]
      )(e, r = df(s, [
        (!n || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || f & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), at(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), at(
        e,
        "padded",
        /*padding*/
        a[6]
      ), at(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), at(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), at(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && We(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && We(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && We(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && We(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && We(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && We(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Va(o, a), n = !0);
    },
    o(a) {
      Na(o, a), n = !1;
    },
    d(a) {
      a && ff(e), o && o.d(a);
    }
  };
}
function vf(l) {
  let e, t = (
    /*tag*/
    l[14] && wf(l)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, i) {
      t && t.m(n, i), e = !0;
    },
    p(n, [i]) {
      /*tag*/
      n[14] && t.p(n, i);
    },
    i(n) {
      e || (Va(t, n), e = !0);
    },
    o(n) {
      Na(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function pf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: v = !0 } = e, { scale: w = null } = e, { min_width: b = 0 } = e, y = _ === "fieldset" ? "fieldset" : "div";
  const k = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return l.$$set = (C) => {
    "height" in C && t(0, o = C.height), "width" in C && t(1, s = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, f = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, _ = C.type), "test_id" in C && t(7, d = C.test_id), "explicit_call" in C && t(8, m = C.explicit_call), "container" in C && t(9, h = C.container), "visible" in C && t(10, g = C.visible), "allow_overflow" in C && t(11, v = C.allow_overflow), "scale" in C && t(12, w = C.scale), "min_width" in C && t(13, b = C.min_width), "$$scope" in C && t(17, i = C.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    d,
    m,
    h,
    g,
    v,
    w,
    b,
    y,
    k,
    _,
    i,
    n
  ];
}
class kf extends sf {
  constructor(e) {
    super(), hf(this, e, pf, vf, gf, {
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
  SvelteComponent: yf,
  attr: Cf,
  create_slot: Sf,
  detach: zf,
  element: Bf,
  get_all_dirty_from_scope: qf,
  get_slot_changes: Df,
  init: Lf,
  insert: Mf,
  safe_not_equal: Ef,
  transition_in: Rf,
  transition_out: Wf,
  update_slot_base: Af
} = window.__gradio__svelte__internal;
function Hf(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Sf(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Bf("div"), i && i.c(), Cf(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Mf(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && Af(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Df(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : qf(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Rf(i, o), t = !0);
    },
    o(o) {
      Wf(i, o), t = !1;
    },
    d(o) {
      o && zf(e), i && i.d(o);
    }
  };
}
function If(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Xf extends yf {
  constructor(e) {
    super(), Lf(this, e, If, Hf, Ef, {});
  }
}
const {
  SvelteComponent: Yf,
  attr: Zo,
  check_outros: Tf,
  create_component: jf,
  create_slot: Ff,
  destroy_component: Uf,
  detach: Fl,
  element: Vf,
  empty: Nf,
  get_all_dirty_from_scope: Of,
  get_slot_changes: Pf,
  group_outros: Zf,
  init: Gf,
  insert: Ul,
  mount_component: Kf,
  safe_not_equal: Jf,
  set_data: Qf,
  space: xf,
  text: $f,
  toggle_class: yn,
  transition_in: nl,
  transition_out: Vl,
  update_slot_base: ec
} = window.__gradio__svelte__internal;
function Go(l) {
  let e, t;
  return e = new Xf({
    props: {
      $$slots: { default: [tc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      jf(e.$$.fragment);
    },
    m(n, i) {
      Kf(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (nl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Vl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Uf(e, n);
    }
  };
}
function tc(l) {
  let e;
  return {
    c() {
      e = $f(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Ul(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Qf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Fl(e);
    }
  };
}
function nc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = Ff(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && Go(l)
  );
  return {
    c() {
      e = Vf("span"), s && s.c(), t = xf(), r && r.c(), n = Nf(), Zo(e, "data-testid", "block-info"), Zo(e, "class", "svelte-22c38v"), yn(e, "sr-only", !/*show_label*/
      l[0]), yn(e, "hide", !/*show_label*/
      l[0]), yn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      Ul(a, e, f), s && s.m(e, null), Ul(a, t, f), r && r.m(a, f), Ul(a, n, f), i = !0;
    },
    p(a, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      8) && ec(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? Pf(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : Of(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && yn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && yn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && yn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && nl(r, 1)) : (r = Go(a), r.c(), nl(r, 1), r.m(n.parentNode, n)) : r && (Zf(), Vl(r, 1, 1, () => {
        r = null;
      }), Tf());
    },
    i(a) {
      i || (nl(s, a), nl(r), i = !0);
    },
    o(a) {
      Vl(s, a), Vl(r), i = !1;
    },
    d(a) {
      a && (Fl(e), Fl(t), Fl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function lc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class Oa extends Yf {
  constructor(e) {
    super(), Gf(this, e, lc, nc, Jf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: ic,
  append: Ci,
  attr: kl,
  create_component: oc,
  destroy_component: sc,
  detach: ac,
  element: Ko,
  init: rc,
  insert: fc,
  mount_component: cc,
  safe_not_equal: uc,
  set_data: _c,
  space: dc,
  text: hc,
  toggle_class: Ht,
  transition_in: mc,
  transition_out: gc
} = window.__gradio__svelte__internal;
function bc(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Ko("label"), t = Ko("span"), oc(n.$$.fragment), i = dc(), o = hc(
        /*label*/
        l[0]
      ), kl(t, "class", "svelte-9gxdi0"), kl(e, "for", ""), kl(e, "data-testid", "block-label"), kl(e, "class", "svelte-9gxdi0"), Ht(e, "hide", !/*show_label*/
      l[2]), Ht(e, "sr-only", !/*show_label*/
      l[2]), Ht(
        e,
        "float",
        /*float*/
        l[4]
      ), Ht(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      fc(r, e, a), Ci(e, t), cc(n, t, null), Ci(e, i), Ci(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && _c(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Ht(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Ht(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Ht(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Ht(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (mc(n.$$.fragment, r), s = !0);
    },
    o(r) {
      gc(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && ac(e), sc(n);
    }
  };
}
function wc(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class vc extends ic {
  constructor(e) {
    super(), rc(this, e, wc, bc, uc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: pc,
  append: _o,
  attr: pt,
  bubble: kc,
  create_component: yc,
  destroy_component: Cc,
  detach: Pa,
  element: ho,
  init: Sc,
  insert: Za,
  listen: zc,
  mount_component: Bc,
  safe_not_equal: qc,
  set_data: Dc,
  set_style: Cn,
  space: Lc,
  text: Mc,
  toggle_class: ze,
  transition_in: Ec,
  transition_out: Rc
} = window.__gradio__svelte__internal;
function Jo(l) {
  let e, t;
  return {
    c() {
      e = ho("span"), t = Mc(
        /*label*/
        l[1]
      ), pt(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      Za(n, e, i), _o(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Dc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Pa(e);
    }
  };
}
function Wc(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && Jo(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = ho("button"), a && a.c(), t = Lc(), n = ho("div"), yc(i.$$.fragment), pt(n, "class", "svelte-1lrphxw"), ze(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), ze(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), ze(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], pt(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), pt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), pt(
        e,
        "title",
        /*label*/
        l[1]
      ), pt(e, "class", "svelte-1lrphxw"), ze(
        e,
        "pending",
        /*pending*/
        l[3]
      ), ze(
        e,
        "padded",
        /*padded*/
        l[5]
      ), ze(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), ze(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), Cn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Cn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Cn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, c) {
      Za(f, e, c), a && a.m(e, null), _o(e, t), _o(e, n), Bc(i, n, null), o = !0, s || (r = zc(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = Jo(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && ze(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || c & /*size*/
      16) && ze(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || c & /*size*/
      16) && ze(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || c & /*label*/
      2) && pt(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || c & /*hasPopup*/
      256) && pt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || c & /*label*/
      2) && pt(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || c & /*pending*/
      8) && ze(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || c & /*padded*/
      32) && ze(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || c & /*highlight*/
      64) && ze(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || c & /*transparent*/
      512) && ze(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && Cn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Cn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && Cn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Ec(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Rc(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Pa(e), a && a.d(), Cc(i), s = !1, r();
    }
  };
}
function Ac(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function v(w) {
    kc.call(this, l, w);
  }
  return l.$$set = (w) => {
    "Icon" in w && t(0, i = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, f = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, _ = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, m = w.transparent), "background" in w && t(10, h = w.background), "offset" in w && t(11, g = w.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    i,
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    m,
    h,
    g,
    n,
    d,
    v
  ];
}
class ri extends pc {
  constructor(e) {
    super(), Sc(this, e, Ac, Wc, qc, {
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
  SvelteComponent: Hc,
  append: Ic,
  attr: Si,
  binding_callbacks: Xc,
  create_slot: Yc,
  detach: Tc,
  element: Qo,
  get_all_dirty_from_scope: jc,
  get_slot_changes: Fc,
  init: Uc,
  insert: Vc,
  safe_not_equal: Nc,
  toggle_class: It,
  transition_in: Oc,
  transition_out: Pc,
  update_slot_base: Zc
} = window.__gradio__svelte__internal;
function Gc(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = Yc(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = Qo("div"), t = Qo("div"), o && o.c(), Si(t, "class", "icon svelte-3w3rth"), Si(e, "class", "empty svelte-3w3rth"), Si(e, "aria-label", "Empty value"), It(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), It(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), It(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      Vc(s, e, r), Ic(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Zc(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? Fc(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : jc(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && It(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && It(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && It(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Oc(o, s), n = !0);
    },
    o(s) {
      Pc(o, s), n = !1;
    },
    d(s) {
      s && Tc(e), o && o.d(s), l[6](null);
    }
  };
}
function Kc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    Xc[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return l.$$set = (u) => {
    "size" in u && t(0, s = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, o = u.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [s, r, a, n, o, i, c];
}
class Jc extends Hc {
  constructor(e) {
    super(), Uc(this, e, Kc, Gc, Nc, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Qc,
  append: xo,
  attr: Be,
  detach: xc,
  init: $c,
  insert: eu,
  noop: zi,
  safe_not_equal: tu,
  svg_element: Bi
} = window.__gradio__svelte__internal;
function nu(l) {
  let e, t, n;
  return {
    c() {
      e = Bi("svg"), t = Bi("path"), n = Bi("circle"), Be(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Be(n, "cx", "12"), Be(n, "cy", "13"), Be(n, "r", "4"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "100%"), Be(e, "height", "100%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "1.5"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-camera");
    },
    m(i, o) {
      eu(i, e, o), xo(e, t), xo(e, n);
    },
    p: zi,
    i: zi,
    o: zi,
    d(i) {
      i && xc(e);
    }
  };
}
class lu extends Qc {
  constructor(e) {
    super(), $c(this, e, null, nu, tu, {});
  }
}
const {
  SvelteComponent: iu,
  append: ou,
  attr: $e,
  detach: su,
  init: au,
  insert: ru,
  noop: qi,
  safe_not_equal: fu,
  svg_element: $o
} = window.__gradio__svelte__internal;
function cu(l) {
  let e, t;
  return {
    c() {
      e = $o("svg"), t = $o("circle"), $e(t, "cx", "12"), $e(t, "cy", "12"), $e(t, "r", "10"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "stroke-width", "1.5"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round"), $e(e, "class", "feather feather-circle");
    },
    m(n, i) {
      ru(n, e, i), ou(e, t);
    },
    p: qi,
    i: qi,
    o: qi,
    d(n) {
      n && su(e);
    }
  };
}
class uu extends iu {
  constructor(e) {
    super(), au(this, e, null, cu, fu, {});
  }
}
const {
  SvelteComponent: _u,
  append: Di,
  attr: et,
  detach: du,
  init: hu,
  insert: mu,
  noop: Li,
  safe_not_equal: gu,
  set_style: rt,
  svg_element: yl
} = window.__gradio__svelte__internal;
function bu(l) {
  let e, t, n, i;
  return {
    c() {
      e = yl("svg"), t = yl("g"), n = yl("path"), i = yl("path"), et(n, "d", "M18,6L6.087,17.913"), rt(n, "fill", "none"), rt(n, "fill-rule", "nonzero"), rt(n, "stroke-width", "2px"), et(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), et(i, "d", "M4.364,4.364L19.636,19.636"), rt(i, "fill", "none"), rt(i, "fill-rule", "nonzero"), rt(i, "stroke-width", "2px"), et(e, "width", "100%"), et(e, "height", "100%"), et(e, "viewBox", "0 0 24 24"), et(e, "version", "1.1"), et(e, "xmlns", "http://www.w3.org/2000/svg"), et(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), et(e, "xml:space", "preserve"), et(e, "stroke", "currentColor"), rt(e, "fill-rule", "evenodd"), rt(e, "clip-rule", "evenodd"), rt(e, "stroke-linecap", "round"), rt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      mu(o, e, s), Di(e, t), Di(t, n), Di(e, i);
    },
    p: Li,
    i: Li,
    o: Li,
    d(o) {
      o && du(e);
    }
  };
}
class Ga extends _u {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: wu,
  append: vu,
  attr: Jn,
  detach: pu,
  init: ku,
  insert: yu,
  noop: Mi,
  safe_not_equal: Cu,
  svg_element: es
} = window.__gradio__svelte__internal;
function Su(l) {
  let e, t;
  return {
    c() {
      e = es("svg"), t = es("path"), Jn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Jn(t, "fill", "currentColor"), Jn(e, "id", "icon"), Jn(e, "xmlns", "http://www.w3.org/2000/svg"), Jn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      yu(n, e, i), vu(e, t);
    },
    p: Mi,
    i: Mi,
    o: Mi,
    d(n) {
      n && pu(e);
    }
  };
}
class zu extends wu {
  constructor(e) {
    super(), ku(this, e, null, Su, Cu, {});
  }
}
const {
  SvelteComponent: Bu,
  append: qu,
  attr: Sn,
  detach: Du,
  init: Lu,
  insert: Mu,
  noop: Ei,
  safe_not_equal: Eu,
  svg_element: ts
} = window.__gradio__svelte__internal;
function Ru(l) {
  let e, t;
  return {
    c() {
      e = ts("svg"), t = ts("path"), Sn(t, "fill", "currentColor"), Sn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Sn(e, "xmlns", "http://www.w3.org/2000/svg"), Sn(e, "width", "100%"), Sn(e, "height", "100%"), Sn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Mu(n, e, i), qu(e, t);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(n) {
      n && Du(e);
    }
  };
}
class Wu extends Bu {
  constructor(e) {
    super(), Lu(this, e, null, Ru, Eu, {});
  }
}
const {
  SvelteComponent: Au,
  append: Hu,
  attr: zn,
  detach: Iu,
  init: Xu,
  insert: Yu,
  noop: Ri,
  safe_not_equal: Tu,
  svg_element: ns
} = window.__gradio__svelte__internal;
function ju(l) {
  let e, t;
  return {
    c() {
      e = ns("svg"), t = ns("path"), zn(t, "d", "M5 8l4 4 4-4z"), zn(e, "class", "dropdown-arrow svelte-145leq6"), zn(e, "xmlns", "http://www.w3.org/2000/svg"), zn(e, "width", "100%"), zn(e, "height", "100%"), zn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      Yu(n, e, i), Hu(e, t);
    },
    p: Ri,
    i: Ri,
    o: Ri,
    d(n) {
      n && Iu(e);
    }
  };
}
class Ao extends Au {
  constructor(e) {
    super(), Xu(this, e, null, ju, Tu, {});
  }
}
const {
  SvelteComponent: Fu,
  append: Wi,
  attr: _e,
  detach: Uu,
  init: Vu,
  insert: Nu,
  noop: Ai,
  safe_not_equal: Ou,
  svg_element: Cl
} = window.__gradio__svelte__internal;
function Pu(l) {
  let e, t, n, i;
  return {
    c() {
      e = Cl("svg"), t = Cl("rect"), n = Cl("circle"), i = Cl("polyline"), _e(t, "x", "3"), _e(t, "y", "3"), _e(t, "width", "18"), _e(t, "height", "18"), _e(t, "rx", "2"), _e(t, "ry", "2"), _e(n, "cx", "8.5"), _e(n, "cy", "8.5"), _e(n, "r", "1.5"), _e(i, "points", "21 15 16 10 5 21"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "1.5"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-image");
    },
    m(o, s) {
      Nu(o, e, s), Wi(e, t), Wi(e, n), Wi(e, i);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(o) {
      o && Uu(e);
    }
  };
}
let Ka = class extends Fu {
  constructor(e) {
    super(), Vu(this, e, null, Pu, Ou, {});
  }
};
const {
  SvelteComponent: Zu,
  append: Gu,
  attr: Sl,
  detach: Ku,
  init: Ju,
  insert: Qu,
  noop: Hi,
  safe_not_equal: xu,
  svg_element: ls
} = window.__gradio__svelte__internal;
function $u(l) {
  let e, t;
  return {
    c() {
      e = ls("svg"), t = ls("path"), Sl(t, "fill", "currentColor"), Sl(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Sl(e, "xmlns", "http://www.w3.org/2000/svg"), Sl(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Qu(n, e, i), Gu(e, t);
    },
    p: Hi,
    i: Hi,
    o: Hi,
    d(n) {
      n && Ku(e);
    }
  };
}
class Ja extends Zu {
  constructor(e) {
    super(), Ju(this, e, null, $u, xu, {});
  }
}
const {
  SvelteComponent: e_,
  append: zl,
  attr: de,
  detach: t_,
  init: n_,
  insert: l_,
  noop: Ii,
  safe_not_equal: i_,
  svg_element: Qn
} = window.__gradio__svelte__internal;
function o_(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = Qn("svg"), t = Qn("path"), n = Qn("path"), i = Qn("line"), o = Qn("line"), de(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), de(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), de(i, "x1", "12"), de(i, "y1", "19"), de(i, "x2", "12"), de(i, "y2", "23"), de(o, "x1", "8"), de(o, "y1", "23"), de(o, "x2", "16"), de(o, "y2", "23"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "2"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-mic");
    },
    m(s, r) {
      l_(s, e, r), zl(e, t), zl(e, n), zl(e, i), zl(e, o);
    },
    p: Ii,
    i: Ii,
    o: Ii,
    d(s) {
      s && t_(e);
    }
  };
}
class s_ extends e_ {
  constructor(e) {
    super(), n_(this, e, null, o_, i_, {});
  }
}
const {
  SvelteComponent: a_,
  append: is,
  attr: Ve,
  detach: r_,
  init: f_,
  insert: c_,
  noop: Xi,
  safe_not_equal: u_,
  set_style: __,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function d_(l) {
  let e, t, n;
  return {
    c() {
      e = Yi("svg"), t = Yi("polyline"), n = Yi("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw"), __(e, "transform", "rotateY(180deg)");
    },
    m(i, o) {
      c_(i, e, o), is(e, t), is(e, n);
    },
    p: Xi,
    i: Xi,
    o: Xi,
    d(i) {
      i && r_(e);
    }
  };
}
class h_ extends a_ {
  constructor(e) {
    super(), f_(this, e, null, d_, u_, {});
  }
}
const {
  SvelteComponent: m_,
  append: g_,
  attr: qe,
  detach: b_,
  init: w_,
  insert: v_,
  noop: Ti,
  safe_not_equal: p_,
  svg_element: os
} = window.__gradio__svelte__internal;
function k_(l) {
  let e, t;
  return {
    c() {
      e = os("svg"), t = os("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, i) {
      v_(n, e, i), g_(e, t);
    },
    p: Ti,
    i: Ti,
    o: Ti,
    d(n) {
      n && b_(e);
    }
  };
}
class y_ extends m_ {
  constructor(e) {
    super(), w_(this, e, null, k_, p_, {});
  }
}
const {
  SvelteComponent: C_,
  append: ss,
  attr: Ne,
  detach: S_,
  init: z_,
  insert: B_,
  noop: ji,
  safe_not_equal: q_,
  svg_element: Fi
} = window.__gradio__svelte__internal;
function D_(l) {
  let e, t, n;
  return {
    c() {
      e = Fi("svg"), t = Fi("polyline"), n = Fi("path"), Ne(t, "points", "1 4 1 10 7 10"), Ne(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "fill", "none"), Ne(e, "stroke", "currentColor"), Ne(e, "stroke-width", "2"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round"), Ne(e, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      B_(i, e, o), ss(e, t), ss(e, n);
    },
    p: ji,
    i: ji,
    o: ji,
    d(i) {
      i && S_(e);
    }
  };
}
class L_ extends C_ {
  constructor(e) {
    super(), z_(this, e, null, D_, q_, {});
  }
}
const {
  SvelteComponent: M_,
  append: Ui,
  attr: ve,
  detach: E_,
  init: R_,
  insert: W_,
  noop: Vi,
  safe_not_equal: A_,
  svg_element: Bl
} = window.__gradio__svelte__internal;
function H_(l) {
  let e, t, n, i;
  return {
    c() {
      e = Bl("svg"), t = Bl("path"), n = Bl("polyline"), i = Bl("line"), ve(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ve(n, "points", "17 8 12 3 7 8"), ve(i, "x1", "12"), ve(i, "y1", "3"), ve(i, "x2", "12"), ve(i, "y2", "15"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "90%"), ve(e, "height", "90%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "2"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-upload");
    },
    m(o, s) {
      W_(o, e, s), Ui(e, t), Ui(e, n), Ui(e, i);
    },
    p: Vi,
    i: Vi,
    o: Vi,
    d(o) {
      o && E_(e);
    }
  };
}
let Qa = class extends M_ {
  constructor(e) {
    super(), R_(this, e, null, H_, A_, {});
  }
};
const {
  SvelteComponent: I_,
  append: as,
  attr: Xt,
  detach: X_,
  init: Y_,
  insert: T_,
  noop: Ni,
  safe_not_equal: j_,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function F_(l) {
  let e, t, n;
  return {
    c() {
      e = Oi("svg"), t = Oi("path"), n = Oi("path"), Xt(t, "fill", "currentColor"), Xt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Xt(n, "fill", "currentColor"), Xt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      T_(i, e, o), as(e, t), as(e, n);
    },
    p: Ni,
    i: Ni,
    o: Ni,
    d(i) {
      i && X_(e);
    }
  };
}
let xa = class extends I_ {
  constructor(e) {
    super(), Y_(this, e, null, F_, j_, {});
  }
};
const U_ = [
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
], rs = {
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
U_.reduce(
  (l, { color: e, primary: t, secondary: n }) => ({
    ...l,
    [e]: {
      primary: rs[e][t],
      secondary: rs[e][n]
    }
  }),
  {}
);
class Nl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function V_(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Nl("Must be on Spaces to share.");
  let t, n, i;
  t = N_(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const o = new File([t], i, { type: n }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if ((a = s.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await s.json();
      throw new Nl(`Upload failed: ${f.error}`);
    }
    throw new Nl("Upload failed.");
  }
  return await s.text();
}
function N_(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: O_,
  create_component: P_,
  destroy_component: Z_,
  init: G_,
  mount_component: K_,
  safe_not_equal: J_,
  transition_in: Q_,
  transition_out: x_
} = window.__gradio__svelte__internal, { createEventDispatcher: $_ } = window.__gradio__svelte__internal;
function ed(l) {
  let e, t;
  return e = new ri({
    props: {
      Icon: zu,
      label: (
        /*i18n*/
        l[2]("common.share")
      ),
      pending: (
        /*pending*/
        l[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[5]
  ), {
    c() {
      P_(e.$$.fragment);
    },
    m(n, i) {
      K_(e, n, i), t = !0;
    },
    p(n, [i]) {
      const o = {};
      i & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), i & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (Q_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      x_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Z_(e, n);
    }
  };
}
function td(l, e, t) {
  const n = $_();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Nl ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, s = f.i18n);
  }, [i, o, s, r, n, a];
}
class nd extends O_ {
  constructor(e) {
    super(), G_(this, e, td, ed, J_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: ld,
  append: sn,
  attr: mo,
  check_outros: id,
  create_component: $a,
  destroy_component: er,
  detach: Ol,
  element: go,
  group_outros: od,
  init: sd,
  insert: Pl,
  mount_component: tr,
  safe_not_equal: ad,
  set_data: bo,
  space: wo,
  text: ll,
  toggle_class: fs,
  transition_in: Kl,
  transition_out: Jl
} = window.__gradio__svelte__internal;
function rd(l) {
  let e, t;
  return e = new Qa({}), {
    c() {
      $a(e.$$.fragment);
    },
    m(n, i) {
      tr(e, n, i), t = !0;
    },
    i(n) {
      t || (Kl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function fd(l) {
  let e, t;
  return e = new Ja({}), {
    c() {
      $a(e.$$.fragment);
    },
    m(n, i) {
      tr(e, n, i), t = !0;
    },
    i(n) {
      t || (Kl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function cs(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, o, s, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = go("span"), t = ll("- "), i = ll(n), o = ll(" -"), s = wo(), a = ll(r), mo(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Pl(f, e, c), sn(e, t), sn(e, i), sn(e, o), Pl(f, s, c), Pl(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && bo(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && bo(a, r);
    },
    d(f) {
      f && (Ol(e), Ol(s), Ol(a));
    }
  };
}
function cd(l) {
  let e, t, n, i, o, s = (
    /*i18n*/
    l[1](
      /*defs*/
      l[5][
        /*type*/
        l[0]
      ] || /*defs*/
      l[5].file
    ) + ""
  ), r, a, f;
  const c = [fd, rd], u = [];
  function _(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = u[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && cs(l)
  );
  return {
    c() {
      e = go("div"), t = go("span"), i.c(), o = wo(), r = ll(s), a = wo(), d && d.c(), mo(t, "class", "icon-wrap svelte-kzcjhc"), fs(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), mo(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Pl(m, e, h), sn(e, t), u[n].m(t, null), sn(e, o), sn(e, r), sn(e, a), d && d.m(e, null), f = !0;
    },
    p(m, [h]) {
      let g = n;
      n = _(m), n !== g && (od(), Jl(u[g], 1, 1, () => {
        u[g] = null;
      }), id(), i = u[n], i || (i = u[n] = c[n](m), i.c()), Kl(i, 1), i.m(t, null)), (!f || h & /*hovered*/
      16) && fs(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!f || h & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && bo(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = cs(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      f || (Kl(i), f = !0);
    },
    o(m) {
      Jl(i), f = !1;
    },
    d(m) {
      m && Ol(e), u[n].d(), d && d.d();
    }
  };
}
function ud(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return l.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, i = f.i18n), "message" in f && t(2, o = f.message), "mode" in f && t(3, s = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, i, o, s, r, a];
}
class nr extends ld {
  constructor(e) {
    super(), sd(this, e, ud, cd, ad, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: _d,
  append: Pi,
  attr: ht,
  check_outros: il,
  create_component: fi,
  destroy_component: ci,
  detach: jn,
  element: gl,
  empty: dd,
  group_outros: ol,
  init: hd,
  insert: Fn,
  listen: ui,
  mount_component: _i,
  safe_not_equal: md,
  space: Zi,
  toggle_class: Pt,
  transition_in: me,
  transition_out: De
} = window.__gradio__svelte__internal;
function us(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), o, s = (
    /*sources*/
    l[1].includes("webcam")
  ), r, a = (
    /*sources*/
    l[1].includes("clipboard")
  ), f, c = t && _s(l), u = i && ds(l), _ = s && hs(l), d = a && ms(l);
  return {
    c() {
      e = gl("span"), c && c.c(), n = Zi(), u && u.c(), o = Zi(), _ && _.c(), r = Zi(), d && d.c(), ht(e, "class", "source-selection svelte-1jp3vgd"), ht(e, "data-testid", "source-select");
    },
    m(m, h) {
      Fn(m, e, h), c && c.m(e, null), Pi(e, n), u && u.m(e, null), Pi(e, o), _ && _.m(e, null), Pi(e, r), d && d.m(e, null), f = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && me(c, 1)) : (c = _s(m), c.c(), me(c, 1), c.m(e, n)) : c && (ol(), De(c, 1, 1, () => {
        c = null;
      }), il()), h & /*sources*/
      2 && (i = /*sources*/
      m[1].includes("microphone")), i ? u ? (u.p(m, h), h & /*sources*/
      2 && me(u, 1)) : (u = ds(m), u.c(), me(u, 1), u.m(e, o)) : u && (ol(), De(u, 1, 1, () => {
        u = null;
      }), il()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? _ ? (_.p(m, h), h & /*sources*/
      2 && me(_, 1)) : (_ = hs(m), _.c(), me(_, 1), _.m(e, r)) : _ && (ol(), De(_, 1, 1, () => {
        _ = null;
      }), il()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && me(d, 1)) : (d = ms(m), d.c(), me(d, 1), d.m(e, null)) : d && (ol(), De(d, 1, 1, () => {
        d = null;
      }), il());
    },
    i(m) {
      f || (me(c), me(u), me(_), me(d), f = !0);
    },
    o(m) {
      De(c), De(u), De(_), De(d), f = !1;
    },
    d(m) {
      m && jn(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function _s(l) {
  let e, t, n, i, o;
  return t = new Qa({}), {
    c() {
      e = gl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Upload file"), Pt(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      Fn(s, e, r), _i(t, e, null), n = !0, i || (o = ui(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      De(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && jn(e), ci(t), i = !1, o();
    }
  };
}
function ds(l) {
  let e, t, n, i, o;
  return t = new s_({}), {
    c() {
      e = gl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Record audio"), Pt(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      Fn(s, e, r), _i(t, e, null), n = !0, i || (o = ui(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      De(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && jn(e), ci(t), i = !1, o();
    }
  };
}
function hs(l) {
  let e, t, n, i, o;
  return t = new xa({}), {
    c() {
      e = gl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Capture from camera"), Pt(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      Fn(s, e, r), _i(t, e, null), n = !0, i || (o = ui(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      De(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && jn(e), ci(t), i = !1, o();
    }
  };
}
function ms(l) {
  let e, t, n, i, o;
  return t = new Ja({}), {
    c() {
      e = gl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Paste from clipboard"), Pt(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      Fn(s, e, r), _i(t, e, null), n = !0, i || (o = ui(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      De(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && jn(e), ci(t), i = !1, o();
    }
  };
}
function gd(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && us(l)
  );
  return {
    c() {
      n && n.c(), e = dd();
    },
    m(i, o) {
      n && n.m(i, o), Fn(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && me(n, 1)) : (n = us(i), n.c(), me(n, 1), n.m(e.parentNode, e)) : n && (ol(), De(n, 1, 1, () => {
        n = null;
      }), il());
    },
    i(i) {
      t || (me(n), t = !0);
    },
    o(i) {
      De(n), t = !1;
    },
    d(i) {
      i && jn(e), n && n.d(i);
    }
  };
}
function bd(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(m, h, g, v) {
    function w(b) {
      return b instanceof g ? b : new g(function(y) {
        y(b);
      });
    }
    return new (g || (g = Promise))(function(b, y) {
      function k(S) {
        try {
          z(v.next(S));
        } catch (M) {
          y(M);
        }
      }
      function C(S) {
        try {
          z(v.throw(S));
        } catch (M) {
          y(M);
        }
      }
      function z(S) {
        S.done ? b(S.value) : w(S.value).then(k, C);
      }
      z((v = v.apply(m, h || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(m) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, s = m), a(m);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (m) => {
    "sources" in m && t(1, o = m.sources), "active_source" in m && t(0, s = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    f,
    r,
    a,
    c,
    u,
    _,
    d
  ];
}
class wd extends _d {
  constructor(e) {
    super(), hd(this, e, bd, gd, md, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Rn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Zl() {
}
const vd = (l) => l;
function pd(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function gs(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const lr = typeof window < "u";
let bs = lr ? () => window.performance.now() : () => Date.now(), ir = lr ? (l) => requestAnimationFrame(l) : Zl;
const Tn = /* @__PURE__ */ new Set();
function or(l) {
  Tn.forEach((e) => {
    e.c(l) || (Tn.delete(e), e.f());
  }), Tn.size !== 0 && ir(or);
}
function kd(l) {
  let e;
  return Tn.size === 0 && ir(or), {
    promise: new Promise((t) => {
      Tn.add(e = { c: l, f: t });
    }),
    abort() {
      Tn.delete(e);
    }
  };
}
function yd(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Cd(l, { delay: e = 0, duration: t = 400, easing: n = vd } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (o) => `opacity: ${o * i}`
  };
}
function ws(l, { delay: e = 0, duration: t = 400, easing: n = yd, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, _] = gs(i), [d, m] = gs(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, g) => `
			transform: ${f} translate(${(1 - h) * u}${_}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}`
  };
}
const Bn = [];
function Sd(l, e = Zl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (pd(l, r) && (l = r, t)) {
      const a = !Bn.length;
      for (const f of n)
        f[1](), Bn.push(f, l);
      if (a) {
        for (let f = 0; f < Bn.length; f += 2)
          Bn[f][0](Bn[f + 1]);
        Bn.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = Zl) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || Zl), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function vs(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function vo(l, e, t, n) {
  if (typeof t == "number" || vs(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = l.opts.stiffness * i, r = l.opts.damping * o, a = (s - r) * l.inv_mass, f = (o + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, vs(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => vo(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = vo(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function ps(l, e = {}) {
  const t = Sd(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, c = l, u = 1, _ = 0, d = !1;
  function m(g, v = {}) {
    c = g;
    const w = a = {};
    return l == null || v.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = bs(), f = g, t.set(l = c), Promise.resolve()) : (v.soft && (_ = 1 / ((v.soft === !0 ? 0.5 : +v.soft) * 60), u = 0), r || (s = bs(), d = !1, r = kd((b) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const y = {
        inv_mass: u,
        opts: h,
        settled: !0,
        dt: (b - s) * 60 / 1e3
      }, k = vo(y, f, l, c);
      return s = b, f = l, t.set(l = k), y.settled && (r = null), !y.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        w === a && b();
      });
    }));
  }
  const h = {
    set: m,
    update: (g, v) => m(g(c, l), v),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return h;
}
const {
  SvelteComponent: zd,
  append: tt,
  attr: N,
  component_subscribe: ks,
  detach: Bd,
  element: qd,
  init: Dd,
  insert: Ld,
  noop: ys,
  safe_not_equal: Md,
  set_style: ql,
  svg_element: nt,
  toggle_class: Cs
} = window.__gradio__svelte__internal, { onMount: Ed } = window.__gradio__svelte__internal;
function Rd(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _;
  return {
    c() {
      e = qd("div"), t = nt("svg"), n = nt("g"), i = nt("path"), o = nt("path"), s = nt("path"), r = nt("path"), a = nt("g"), f = nt("path"), c = nt("path"), u = nt("path"), _ = nt("path"), N(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(i, "fill", "#FF7C00"), N(i, "fill-opacity", "0.4"), N(i, "class", "svelte-43sxxs"), N(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(o, "fill", "#FF7C00"), N(o, "class", "svelte-43sxxs"), N(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(s, "fill", "#FF7C00"), N(s, "fill-opacity", "0.4"), N(s, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), ql(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), ql(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), Cs(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, m) {
      Ld(d, e, m), tt(e, t), tt(t, n), tt(n, i), tt(n, o), tt(n, s), tt(n, r), tt(t, a), tt(a, f), tt(a, c), tt(a, u), tt(a, _);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && ql(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && ql(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Cs(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: ys,
    o: ys,
    d(d) {
      d && Bd(e);
    }
  };
}
function Wd(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, m, h, g) {
    function v(w) {
      return w instanceof h ? w : new h(function(b) {
        b(w);
      });
    }
    return new (h || (h = Promise))(function(w, b) {
      function y(z) {
        try {
          C(g.next(z));
        } catch (S) {
          b(S);
        }
      }
      function k(z) {
        try {
          C(g.throw(z));
        } catch (S) {
          b(S);
        }
      }
      function C(z) {
        z.done ? w(z.value) : v(z.value).then(y, k);
      }
      C((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = ps([0, 0]);
  ks(l, r, (d) => t(1, n = d));
  const a = ps([0, 0]);
  ks(l, a, (d) => t(2, i = d));
  let f;
  function c() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return o(this, void 0, void 0, function* () {
      yield c(), f || u();
    });
  }
  function _() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Ed(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class Ad extends zd {
  constructor(e) {
    super(), Dd(this, e, Wd, Rd, Md, { margin: 0 });
  }
}
const {
  SvelteComponent: Hd,
  append: an,
  attr: st,
  binding_callbacks: Ss,
  check_outros: po,
  create_component: sr,
  create_slot: ar,
  destroy_component: rr,
  destroy_each: fr,
  detach: T,
  element: _t,
  empty: Un,
  ensure_array_like: Ql,
  get_all_dirty_from_scope: cr,
  get_slot_changes: ur,
  group_outros: ko,
  init: Id,
  insert: j,
  mount_component: _r,
  noop: yo,
  safe_not_equal: Xd,
  set_data: Ge,
  set_style: Nt,
  space: Ze,
  text: re,
  toggle_class: Pe,
  transition_in: ot,
  transition_out: dt,
  update_slot_base: dr
} = window.__gradio__svelte__internal, { tick: Yd } = window.__gradio__svelte__internal, { onDestroy: Td } = window.__gradio__svelte__internal, { createEventDispatcher: jd } = window.__gradio__svelte__internal, Fd = (l) => ({}), zs = (l) => ({}), Ud = (l) => ({}), Bs = (l) => ({});
function qs(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ds(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function Vd(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new ri({
    props: {
      Icon: Ga,
      label: (
        /*i18n*/
        l[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    l[32]
  );
  const f = (
    /*#slots*/
    l[30].error
  ), c = ar(
    f,
    l,
    /*$$scope*/
    l[29],
    zs
  );
  return {
    c() {
      e = _t("div"), sr(t.$$.fragment), n = Ze(), i = _t("span"), s = re(o), r = Ze(), c && c.c(), st(e, "class", "clear-status svelte-16nch4a"), st(i, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      j(u, e, _), _r(t, e, null), j(u, n, _), j(u, i, _), an(i, s), j(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && Ge(s, o), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && dr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? ur(
          f,
          /*$$scope*/
          u[29],
          _,
          Fd
        ) : cr(
          /*$$scope*/
          u[29]
        ),
        zs
      );
    },
    i(u) {
      a || (ot(t.$$.fragment, u), ot(c, u), a = !0);
    },
    o(u) {
      dt(t.$$.fragment, u), dt(c, u), a = !1;
    },
    d(u) {
      u && (T(e), T(n), T(i), T(r)), rr(t), c && c.d(u);
    }
  };
}
function Nd(l) {
  let e, t, n, i, o, s, r, a, f, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && Ls(l)
  );
  function u(b, y) {
    if (
      /*progress*/
      b[7]
    ) return Zd;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return Pd;
    if (
      /*queue_position*/
      b[2] === 0
    ) return Od;
  }
  let _ = u(l), d = _ && _(l), m = (
    /*timer*/
    l[5] && Rs(l)
  );
  const h = [Qd, Jd], g = [];
  function v(b, y) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = v(l)) && (s = g[o] = h[o](l));
  let w = !/*timer*/
  l[5] && Ts(l);
  return {
    c() {
      c && c.c(), e = Ze(), t = _t("div"), d && d.c(), n = Ze(), m && m.c(), i = Ze(), s && s.c(), r = Ze(), w && w.c(), a = Un(), st(t, "class", "progress-text svelte-16nch4a"), Pe(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Pe(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(b, y) {
      c && c.m(b, y), j(b, e, y), j(b, t, y), d && d.m(t, null), an(t, n), m && m.m(t, null), j(b, i, y), ~o && g[o].m(b, y), j(b, r, y), w && w.m(b, y), j(b, a, y), f = !0;
    },
    p(b, y) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? c ? c.p(b, y) : (c = Ls(b), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(b)) && d ? d.p(b, y) : (d && d.d(1), d = _ && _(b), d && (d.c(), d.m(t, n))), /*timer*/
      b[5] ? m ? m.p(b, y) : (m = Rs(b), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || y[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!f || y[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let k = o;
      o = v(b), o === k ? ~o && g[o].p(b, y) : (s && (ko(), dt(g[k], 1, 1, () => {
        g[k] = null;
      }), po()), ~o ? (s = g[o], s ? s.p(b, y) : (s = g[o] = h[o](b), s.c()), ot(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      b[5] ? w && (ko(), dt(w, 1, 1, () => {
        w = null;
      }), po()) : w ? (w.p(b, y), y[0] & /*timer*/
      32 && ot(w, 1)) : (w = Ts(b), w.c(), ot(w, 1), w.m(a.parentNode, a));
    },
    i(b) {
      f || (ot(s), ot(w), f = !0);
    },
    o(b) {
      dt(s), dt(w), f = !1;
    },
    d(b) {
      b && (T(e), T(t), T(i), T(r), T(a)), c && c.d(b), d && d.d(), m && m.d(), ~o && g[o].d(b), w && w.d(b);
    }
  };
}
function Ls(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = _t("div"), st(e, "class", "eta-bar svelte-16nch4a"), Nt(e, "transform", t);
    },
    m(n, i) {
      j(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Nt(e, "transform", t);
    },
    d(n) {
      n && T(e);
    }
  };
}
function Od(l) {
  let e;
  return {
    c() {
      e = re("processing |");
    },
    m(t, n) {
      j(t, e, n);
    },
    p: yo,
    d(t) {
      t && T(e);
    }
  };
}
function Pd(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = re("queue: "), n = re(t), i = re("/"), o = re(
        /*queue_size*/
        l[3]
      ), s = re(" |");
    },
    m(r, a) {
      j(r, e, a), j(r, n, a), j(r, i, a), j(r, o, a), j(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ge(n, t), a[0] & /*queue_size*/
      8 && Ge(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (T(e), T(n), T(i), T(o), T(s));
    }
  };
}
function Zd(l) {
  let e, t = Ql(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Es(Ds(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Un();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = Ql(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ds(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Es(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && T(e), fr(n, i);
    }
  };
}
function Ms(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? Kd : Gd
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Ze(), n = re(t), i = re(" | "), s = re(o);
    },
    m(c, u) {
      f.m(c, u), j(c, e, u), j(c, n, u), j(c, i, u), j(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ge(n, t);
    },
    d(c) {
      c && (T(e), T(n), T(i), T(s)), f.d(c);
    }
  };
}
function Gd(l) {
  let e = Rn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = re(e);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Rn(
        /*p*/
        n[41].index || 0
      ) + "") && Ge(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function Kd(l) {
  let e = Rn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Rn(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = re(e), n = re("/"), o = re(i);
    },
    m(s, r) {
      j(s, t, r), j(s, n, r), j(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Rn(
        /*p*/
        s[41].index || 0
      ) + "") && Ge(t, e), r[0] & /*progress*/
      128 && i !== (i = Rn(
        /*p*/
        s[41].length
      ) + "") && Ge(o, i);
    },
    d(s) {
      s && (T(t), T(n), T(o));
    }
  };
}
function Es(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Ms(l)
  );
  return {
    c() {
      t && t.c(), e = Un();
    },
    m(n, i) {
      t && t.m(n, i), j(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Ms(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Rs(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = re(
        /*formatted_timer*/
        l[20]
      ), n = re(t), i = re("s");
    },
    m(o, s) {
      j(o, e, s), j(o, n, s), j(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ge(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ge(n, t);
    },
    d(o) {
      o && (T(e), T(n), T(i));
    }
  };
}
function Jd(l) {
  let e, t;
  return e = new Ad({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      sr(e.$$.fragment);
    },
    m(n, i) {
      _r(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rr(e, n);
    }
  };
}
function Qd(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && Ws(l)
  );
  return {
    c() {
      e = _t("div"), t = _t("div"), r && r.c(), n = Ze(), i = _t("div"), o = _t("div"), st(t, "class", "progress-level-inner svelte-16nch4a"), st(o, "class", "progress-bar svelte-16nch4a"), Nt(o, "width", s), st(i, "class", "progress-bar-wrap svelte-16nch4a"), st(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      j(a, e, f), an(e, t), r && r.m(t, null), an(e, n), an(e, i), an(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Ws(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Nt(o, "width", s);
    },
    i: yo,
    o: yo,
    d(a) {
      a && T(e), r && r.d(), l[31](null);
    }
  };
}
function Ws(l) {
  let e, t = Ql(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Ys(qs(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Un();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Ql(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = qs(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ys(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && T(e), fr(n, i);
    }
  };
}
function As(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && xd()
  ), s = (
    /*p*/
    l[41].desc != null && Hs(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && Is()
  ), a = (
    /*progress_level*/
    l[14] != null && Xs(l)
  );
  return {
    c() {
      o && o.c(), e = Ze(), s && s.c(), t = Ze(), r && r.c(), n = Ze(), a && a.c(), i = Un();
    },
    m(f, c) {
      o && o.m(f, c), j(f, e, c), s && s.m(f, c), j(f, t, c), r && r.m(f, c), j(f, n, c), a && a.m(f, c), j(f, i, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? s ? s.p(f, c) : (s = Hs(f), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Is(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Xs(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (T(e), T(t), T(n), T(i)), o && o.d(f), s && s.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function xd(l) {
  let e;
  return {
    c() {
      e = re(" /");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Hs(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = re(e);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ge(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function Is(l) {
  let e;
  return {
    c() {
      e = re("-");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Xs(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = re(e), n = re("%");
    },
    m(i, o) {
      j(i, t, o), j(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Ge(t, e);
    },
    d(i) {
      i && (T(t), T(n));
    }
  };
}
function Ys(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && As(l)
  );
  return {
    c() {
      t && t.c(), e = Un();
    },
    m(n, i) {
      t && t.m(n, i), j(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = As(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Ts(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = ar(
    o,
    l,
    /*$$scope*/
    l[29],
    Bs
  );
  return {
    c() {
      e = _t("p"), t = re(
        /*loading_text*/
        l[9]
      ), n = Ze(), s && s.c(), st(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      j(r, e, a), an(e, t), j(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ge(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && dr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? ur(
          o,
          /*$$scope*/
          r[29],
          a,
          Ud
        ) : cr(
          /*$$scope*/
          r[29]
        ),
        Bs
      );
    },
    i(r) {
      i || (ot(s, r), i = !0);
    },
    o(r) {
      dt(s, r), i = !1;
    },
    d(r) {
      r && (T(e), T(n)), s && s.d(r);
    }
  };
}
function $d(l) {
  let e, t, n, i, o;
  const s = [Nd, Vd], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(l)) && (n = r[t] = s[t](l)), {
    c() {
      e = _t("div"), n && n.c(), st(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Pe(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Pe(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Pe(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Pe(
        e,
        "border",
        /*border*/
        l[12]
      ), Nt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Nt(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      j(f, e, c), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (ko(), dt(r[u], 1, 1, () => {
        r[u] = null;
      }), po()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = s[t](f), n.c()), ot(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && st(e, "class", i), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Pe(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Pe(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && Pe(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && Pe(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Nt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Nt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (ot(n), o = !0);
    },
    o(f) {
      dt(n), o = !1;
    },
    d(f) {
      f && T(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var e1 = function(l, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(c) {
      try {
        f(n.next(c));
      } catch (u) {
        s(u);
      }
    }
    function a(c) {
      try {
        f(n.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function f(c) {
      c.done ? o(c.value) : i(c.value).then(r, a);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let Dl = [], Gi = !1;
function t1(l) {
  return e1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Dl.push(e), !Gi) Gi = !0;
      else return;
      yield Yd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Dl.length; i++) {
          const s = Dl[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Gi = !1, Dl = [];
      });
    }
  });
}
function n1(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = jd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: v = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: y = !1 } = e, { border: k = !1 } = e, { autoscroll: C } = e, z, S = !1, M = 0, p = 0, W = null, A = null, F = 0, J = null, x, U = null, $ = !0;
  const E = () => {
    t(0, a = t(27, W = t(19, Z = null))), t(25, M = performance.now()), t(26, p = 0), S = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, p = (performance.now() - M) / 1e3), S && V();
    });
  }
  function R() {
    t(26, p = 0), t(0, a = t(27, W = t(19, Z = null))), S && (S = !1);
  }
  Td(() => {
    S && R();
  });
  let Z = null;
  function ee(H) {
    Ss[H ? "unshift" : "push"](() => {
      U = H, t(16, U), t(7, g), t(14, J), t(15, x);
    });
  }
  const G = () => {
    s("clear_status");
  };
  function O(H) {
    Ss[H ? "unshift" : "push"](() => {
      z = H, t(13, z);
    });
  }
  return l.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, f = H.queue_position), "queue_size" in H && t(3, c = H.queue_size), "status" in H && t(4, u = H.status), "scroll_to_output" in H && t(22, _ = H.scroll_to_output), "timer" in H && t(5, d = H.timer), "show_progress" in H && t(6, m = H.show_progress), "message" in H && t(23, h = H.message), "progress" in H && t(7, g = H.progress), "variant" in H && t(8, v = H.variant), "loading_text" in H && t(9, w = H.loading_text), "absolute" in H && t(10, b = H.absolute), "translucent" in H && t(11, y = H.translucent), "border" in H && t(12, k = H.border), "autoscroll" in H && t(24, C = H.autoscroll), "$$scope" in H && t(29, o = H.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - M) / 1e3 + a), t(19, Z = A.toFixed(1)), t(27, W = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, F = A === null || A <= 0 || !p ? null : Math.min(p / A, 1)), l.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, $ = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, J = g.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, J = null), J ? (t(15, x = J[J.length - 1]), U && (x === 0 ? t(16, U.style.transition = "0", U) : t(16, U.style.transition = "150ms", U))) : t(15, x = void 0)), l.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? E() : R()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && _ && (u === "pending" || u === "complete") && t1(z, C), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = p.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    m,
    g,
    v,
    w,
    b,
    y,
    k,
    z,
    J,
    x,
    U,
    F,
    $,
    Z,
    n,
    s,
    _,
    h,
    C,
    M,
    p,
    W,
    A,
    o,
    i,
    ee,
    G,
    O
  ];
}
class l1 extends Hd {
  constructor(e) {
    super(), Id(
      this,
      e,
      n1,
      $d,
      Xd,
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
const { setContext: C2, getContext: i1 } = window.__gradio__svelte__internal, o1 = "WORKER_PROXY_CONTEXT_KEY";
function hr() {
  return i1(o1);
}
function s1(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function mr(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function gr(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!s1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function a1(l) {
  if (l == null || !gr(l))
    return l;
  const e = hr();
  if (e == null)
    return l;
  const n = new URL(l, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const o = new Blob([i.body], {
      type: mr(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: r1,
  assign: xl,
  check_outros: br,
  compute_rest_props: js,
  create_slot: Ho,
  detach: di,
  element: wr,
  empty: vr,
  exclude_internal_props: f1,
  get_all_dirty_from_scope: Io,
  get_slot_changes: Xo,
  get_spread_update: pr,
  group_outros: kr,
  init: c1,
  insert: hi,
  listen: yr,
  prevent_default: u1,
  safe_not_equal: _1,
  set_attributes: $l,
  transition_in: dn,
  transition_out: hn,
  update_slot_base: Yo
} = window.__gradio__svelte__internal, { createEventDispatcher: d1 } = window.__gradio__svelte__internal;
function h1(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = Ho(
    s,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      l[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      l[1]
    ) },
    /*$$restProps*/
    l[6]
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = xl(f, a[c]);
  return {
    c() {
      e = wr("a"), r && r.c(), $l(e, f);
    },
    m(c, u) {
      hi(c, e, u), r && r.m(e, null), n = !0, i || (o = yr(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Yo(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Xo(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Io(
          /*$$scope*/
          c[7]
        ),
        null
      ), $l(e, f = pr(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (dn(r, c), n = !0);
    },
    o(c) {
      hn(r, c), n = !1;
    },
    d(c) {
      c && di(e), r && r.d(c), i = !1, o();
    }
  };
}
function m1(l) {
  let e, t, n, i;
  const o = [b1, g1], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = vr();
    },
    m(a, f) {
      s[e].m(a, f), hi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (kr(), hn(s[c], 1, 1, () => {
        s[c] = null;
      }), br(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), dn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (dn(t), i = !0);
    },
    o(a) {
      hn(t), i = !1;
    },
    d(a) {
      a && di(n), s[e].d(a);
    }
  };
}
function g1(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = Ho(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let r = [
    /*$$restProps*/
    l[6],
    { href: (
      /*href*/
      l[0]
    ) }
  ], a = {};
  for (let f = 0; f < r.length; f += 1)
    a = xl(a, r[f]);
  return {
    c() {
      e = wr("a"), s && s.c(), $l(e, a);
    },
    m(f, c) {
      hi(f, e, c), s && s.m(e, null), t = !0, n || (i = yr(e, "click", u1(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && Yo(
        s,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? Xo(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Io(
          /*$$scope*/
          f[7]
        ),
        null
      ), $l(e, a = pr(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      t || (dn(s, f), t = !0);
    },
    o(f) {
      hn(s, f), t = !1;
    },
    d(f) {
      f && di(e), s && s.d(f), n = !1, i();
    }
  };
}
function b1(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = Ho(
    t,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && Yo(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Xo(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Io(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (dn(n, i), e = !0);
    },
    o(i) {
      hn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function w1(l) {
  let e, t, n, i, o;
  const s = [m1, h1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && gr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = vr();
    },
    m(f, c) {
      r[t].m(f, c), hi(f, i, c), o = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (kr(), hn(r[u], 1, 1, () => {
        r[u] = null;
      }), br(), n = r[t], n ? n.p(f, c) : (n = r[t] = s[t](f), n.c()), dn(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (dn(n), o = !0);
    },
    o(f) {
      hn(n), o = !1;
    },
    d(f) {
      f && di(i), r[t].d(f);
    }
  };
}
function v1(l, e, t) {
  const n = ["href", "download"];
  let i = js(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, g, v) {
    function w(b) {
      return b instanceof g ? b : new g(function(y) {
        y(b);
      });
    }
    return new (g || (g = Promise))(function(b, y) {
      function k(S) {
        try {
          z(v.next(S));
        } catch (M) {
          y(M);
        }
      }
      function C(S) {
        try {
          z(v.throw(S));
        } catch (M) {
          y(M);
        }
      }
      function z(S) {
        S.done ? b(S.value) : w(S.value).then(k, C);
      }
      z((v = v.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = d1();
  let u = !1;
  const _ = hr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: h,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${h} from the Wasm worker.`);
        const v = new Blob(
          [g.body],
          {
            type: mr(g.headers, "content-type")
          }
        ), w = URL.createObjectURL(v), b = document.createElement("a");
        b.href = w, b.download = f, b.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return l.$$set = (m) => {
    e = xl(xl({}, e), f1(m)), t(6, i = js(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, s = m.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    d,
    i,
    s,
    o
  ];
}
class p1 extends r1 {
  constructor(e) {
    super(), c1(this, e, v1, w1, _1, { href: 0, download: 1 });
  }
}
var k1 = Object.defineProperty, y1 = (l, e, t) => e in l ? k1(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, bt = (l, e, t) => (y1(l, typeof e != "symbol" ? e + "" : e, t), t), Cr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, xn = (l, e, t) => (Cr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), C1 = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, S1 = (l, e, t, n) => (Cr(l, e, "write to private field"), e.set(l, t), t), Vt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Sr(l, e) {
  return l.map(
    (t) => new z1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class z1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    bt(this, "path"), bt(this, "url"), bt(this, "orig_name"), bt(this, "size"), bt(this, "blob"), bt(this, "is_stream"), bt(this, "mime_type"), bt(this, "alt_text"), bt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class S2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = xn(this, Vt) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, s)), t = t.slice(i + 1);
        }
        S1(this, Vt, t);
      },
      flush: (t) => {
        if (xn(this, Vt) === "")
          return;
        const n = e.allowCR && xn(this, Vt).endsWith("\r") ? xn(this, Vt).slice(0, -1) : xn(this, Vt);
        t.enqueue(n);
      }
    }), C1(this, Vt, "");
  }
}
Vt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: B1,
  append: Me,
  attr: ln,
  detach: zr,
  element: on,
  init: q1,
  insert: Br,
  noop: Fs,
  safe_not_equal: D1,
  set_data: ei,
  set_style: Ki,
  space: Co,
  text: Wn,
  toggle_class: Us
} = window.__gradio__svelte__internal, { onMount: L1, createEventDispatcher: M1, onDestroy: E1 } = window.__gradio__svelte__internal;
function Vs(l) {
  let e, t, n, i, o = sl(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), u;
  return {
    c() {
      e = on("div"), t = on("span"), n = on("div"), i = on("progress"), s = Wn(o), a = Co(), f = on("span"), u = Wn(c), Ki(i, "visibility", "hidden"), Ki(i, "height", "0"), Ki(i, "width", "0"), i.value = r = sl(
        /*file_to_display*/
        l[2]
      ), ln(i, "max", "100"), ln(i, "class", "svelte-cr2edf"), ln(n, "class", "progress-bar svelte-cr2edf"), ln(f, "class", "file-name svelte-cr2edf"), ln(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Br(_, e, d), Me(e, t), Me(t, n), Me(n, i), Me(i, s), Me(e, a), Me(e, f), Me(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = sl(
        /*file_to_display*/
        _[2]
      ) + "") && ei(s, o), d & /*file_to_display*/
      4 && r !== (r = sl(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && ei(u, c);
    },
    d(_) {
      _ && zr(e);
    }
  };
}
function R1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    l[2] && Vs(l)
  );
  return {
    c() {
      e = on("div"), t = on("span"), n = Wn("Uploading "), o = Wn(i), s = Co(), a = Wn(r), f = Wn("..."), c = Co(), u && u.c(), ln(t, "class", "uploading svelte-cr2edf"), ln(e, "class", "wrap svelte-cr2edf"), Us(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Br(_, e, d), Me(e, t), Me(t, n), Me(t, o), Me(t, s), Me(t, a), Me(t, f), Me(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && ei(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && ei(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Vs(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Us(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Fs,
    o: Fs,
    d(_) {
      _ && zr(e), u && u.d();
    }
  };
}
function sl(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function W1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += sl(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function A1(l, e, t) {
  var n = this && this.__awaiter || function(h, g, v, w) {
    function b(y) {
      return y instanceof v ? y : new v(function(k) {
        k(y);
      });
    }
    return new (v || (v = Promise))(function(y, k) {
      function C(M) {
        try {
          S(w.next(M));
        } catch (p) {
          k(p);
        }
      }
      function z(M) {
        try {
          S(w.throw(M));
        } catch (p) {
          k(p);
        }
      }
      function S(M) {
        M.done ? y(M.value) : b(M.value).then(C, z);
      }
      S((w = w.apply(h, g || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = M1();
  function m(h, g) {
    t(0, _ = _.map((v) => (v.orig_name === h && (v.progress += g), v)));
  }
  return L1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), E1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (h) => {
    "upload_id" in h && t(3, i = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && W1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    i,
    o,
    s,
    r,
    c
  ];
}
class H1 extends B1 {
  constructor(e) {
    super(), q1(this, e, A1, R1, D1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: I1,
  append: Ns,
  attr: pe,
  binding_callbacks: X1,
  bubble: Kt,
  check_outros: qr,
  create_component: Y1,
  create_slot: Dr,
  destroy_component: T1,
  detach: mi,
  element: So,
  empty: Lr,
  get_all_dirty_from_scope: Mr,
  get_slot_changes: Er,
  group_outros: Rr,
  init: j1,
  insert: gi,
  listen: Ae,
  mount_component: F1,
  prevent_default: Jt,
  run_all: U1,
  safe_not_equal: V1,
  set_style: Wr,
  space: N1,
  stop_propagation: Qt,
  toggle_class: be,
  transition_in: Ot,
  transition_out: mn,
  update_slot_base: Ar
} = window.__gradio__svelte__internal, { createEventDispatcher: O1, tick: P1 } = window.__gradio__svelte__internal;
function Z1(l) {
  let e, t, n, i, o, s, r, a, f, c, u;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Dr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = So("button"), d && d.c(), t = N1(), n = So("input"), pe(n, "aria-label", "file upload"), pe(n, "data-testid", "file-upload"), pe(n, "type", "file"), pe(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, pe(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), pe(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), pe(n, "class", "svelte-1s26xmt"), pe(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), pe(e, "class", "svelte-1s26xmt"), be(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), be(
        e,
        "center",
        /*center*/
        l[4]
      ), be(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), be(
        e,
        "flex",
        /*flex*/
        l[5]
      ), be(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Wr(e, "height", "100%");
    },
    m(m, h) {
      gi(m, e, h), d && d.m(e, null), Ns(e, t), Ns(e, n), l[34](n), f = !0, c || (u = [
        Ae(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Ae(e, "drag", Qt(Jt(
          /*drag_handler*/
          l[27]
        ))),
        Ae(e, "dragstart", Qt(Jt(
          /*dragstart_handler*/
          l[28]
        ))),
        Ae(e, "dragend", Qt(Jt(
          /*dragend_handler*/
          l[29]
        ))),
        Ae(e, "dragover", Qt(Jt(
          /*dragover_handler*/
          l[30]
        ))),
        Ae(e, "dragenter", Qt(Jt(
          /*dragenter_handler*/
          l[31]
        ))),
        Ae(e, "dragleave", Qt(Jt(
          /*dragleave_handler*/
          l[32]
        ))),
        Ae(e, "drop", Qt(Jt(
          /*drop_handler*/
          l[33]
        ))),
        Ae(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        Ae(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        Ae(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        Ae(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!f || h[0] & /*$$scope*/
      33554432) && Ar(
        d,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Er(
          _,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Mr(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || h[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      m[16] || void 0)) && pe(n, "accept", i), (!f || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = o), (!f || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "directory" || void 0)) && pe(n, "webkitdirectory", s), (!f || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && pe(n, "mozdirectory", r), (!f || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && pe(e, "tabindex", a), (!f || h[0] & /*hidden*/
      512) && be(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || h[0] & /*center*/
      16) && be(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || h[0] & /*boundedheight*/
      8) && be(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || h[0] & /*flex*/
      32) && be(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || h[0] & /*disable_click*/
      128) && be(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Ot(d, m), f = !0);
    },
    o(m) {
      mn(d, m), f = !1;
    },
    d(m) {
      m && mi(e), d && d.d(m), l[34](null), c = !1, U1(u);
    }
  };
}
function G1(l) {
  let e, t, n = !/*hidden*/
  l[9] && Os(l);
  return {
    c() {
      n && n.c(), e = Lr();
    },
    m(i, o) {
      n && n.m(i, o), gi(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Rr(), mn(n, 1, 1, () => {
        n = null;
      }), qr()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && Ot(n, 1)) : (n = Os(i), n.c(), Ot(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Ot(n), t = !0);
    },
    o(i) {
      mn(n), t = !1;
    },
    d(i) {
      i && mi(e), n && n.d(i);
    }
  };
}
function K1(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = Dr(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = So("button"), r && r.c(), pe(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), pe(e, "class", "svelte-1s26xmt"), be(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), be(
        e,
        "center",
        /*center*/
        l[4]
      ), be(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), be(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Wr(e, "height", "100%");
    },
    m(a, f) {
      gi(a, e, f), r && r.m(e, null), n = !0, i || (o = Ae(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Ar(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? Er(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Mr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && pe(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && be(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && be(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && be(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && be(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Ot(r, a), n = !0);
    },
    o(a) {
      mn(r, a), n = !1;
    },
    d(a) {
      a && mi(e), r && r.d(a), i = !1, o();
    }
  };
}
function Os(l) {
  let e, t;
  return e = new H1({
    props: {
      root: (
        /*root*/
        l[8]
      ),
      upload_id: (
        /*upload_id*/
        l[14]
      ),
      files: (
        /*file_data*/
        l[15]
      ),
      stream_handler: (
        /*stream_handler*/
        l[11]
      )
    }
  }), {
    c() {
      Y1(e.$$.fragment);
    },
    m(n, i) {
      F1(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), i[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), i[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), i[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (Ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      mn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      T1(e, n);
    }
  };
}
function J1(l) {
  let e, t, n, i;
  const o = [K1, G1, Z1], s = [];
  function r(a, f) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Lr();
    },
    m(a, f) {
      s[e].m(a, f), gi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (Rr(), mn(s[c], 1, 1, () => {
        s[c] = null;
      }), qr(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Ot(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Ot(t), i = !0);
    },
    o(a) {
      mn(t), i = !1;
    },
    d(a) {
      a && mi(n), s[e].d(a);
    }
  };
}
function Q1(l, e, t) {
  if (!l || l === "*" || l === "file/*" || Array.isArray(l) && l.some((i) => i === "*" || i === "file/*"))
    return !0;
  let n;
  if (typeof l == "string")
    n = l.split(",").map((i) => i.trim());
  else if (Array.isArray(l))
    n = l;
  else
    return !1;
  return n.includes(e) || n.some((i) => {
    const [o] = i.split("/").map((s) => s.trim());
    return i.endsWith("/*") && t.startsWith(o + "/");
  });
}
function x1(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(L, Y, te, ie) {
    function D(Ke) {
      return Ke instanceof te ? Ke : new te(function(Fe) {
        Fe(Ke);
      });
    }
    return new (te || (te = Promise))(function(Ke, Fe) {
      function Je(xe) {
        try {
          Qe(ie.next(xe));
        } catch (Zt) {
          Fe(Zt);
        }
      }
      function Se(xe) {
        try {
          Qe(ie.throw(xe));
        } catch (Zt) {
          Fe(Zt);
        }
      }
      function Qe(xe) {
        xe.done ? Ke(xe.value) : D(xe.value).then(Je, Se);
      }
      Qe((ie = ie.apply(L, Y || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: v = null } = e, { show_progress: w = !0 } = e, { max_file_size: b = null } = e, { upload: y } = e, { stream_handler: k } = e, C, z, S;
  const M = O1(), p = ["image", "video", "audio", "text", "file"], W = (L) => L.startsWith(".") || L.endsWith("/*") ? L : p.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function F() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let Y = 0; Y < L.length; Y++) {
        const te = L[Y].types.find((ie) => ie.startsWith("image/"));
        if (te) {
          L[Y].getType(te).then((ie) => o(this, void 0, void 0, function* () {
            const D = new File([ie], `clipboard.${te.replace("image/", "")}`);
            yield U([D]);
          }));
          break;
        }
      }
    }));
  }
  function J() {
    _ || v && (t(2, v.value = "", v), v.click());
  }
  function x(L) {
    return o(this, void 0, void 0, function* () {
      yield P1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const Y = yield y(L, d, C, b ?? 1 / 0);
        return M("load", u === "single" ? Y == null ? void 0 : Y[0] : Y), t(1, g = !1), Y || [];
      } catch (Y) {
        return M("error", Y.message), t(1, g = !1), [];
      }
    });
  }
  function U(L) {
    return o(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let Y = L.map((te) => new File([te], te instanceof File ? te.name : "file", { type: te.type }));
      return t(15, z = yield Sr(Y)), yield x(z);
    });
  }
  function $(L) {
    return o(this, void 0, void 0, function* () {
      const Y = L.target;
      if (Y.files)
        if (h != "blob")
          yield U(Array.from(Y.files));
        else {
          if (u === "single") {
            M("load", Y.files[0]);
            return;
          }
          M("load", Y.files);
        }
    });
  }
  function E(L) {
    return o(this, void 0, void 0, function* () {
      var Y;
      if (t(20, r = !1), !(!((Y = L.dataTransfer) === null || Y === void 0) && Y.files)) return;
      const te = Array.from(L.dataTransfer.files).filter((ie) => {
        const D = "." + ie.name.split(".").pop();
        return D && Q1(S, D, ie.type) || (D && Array.isArray(s) ? s.includes(D) : D === s) ? !0 : (M("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield U(te);
    });
  }
  function V(L) {
    Kt.call(this, l, L);
  }
  function R(L) {
    Kt.call(this, l, L);
  }
  function Z(L) {
    Kt.call(this, l, L);
  }
  function ee(L) {
    Kt.call(this, l, L);
  }
  function G(L) {
    Kt.call(this, l, L);
  }
  function O(L) {
    Kt.call(this, l, L);
  }
  function H(L) {
    Kt.call(this, l, L);
  }
  function je(L) {
    X1[L ? "unshift" : "push"](() => {
      v = L, t(2, v);
    });
  }
  return l.$$set = (L) => {
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, m = L.hidden), "format" in L && t(21, h = L.format), "uploading" in L && t(1, g = L.uploading), "hidden_upload" in L && t(2, v = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, b = L.max_file_size), "upload" in L && t(23, y = L.upload), "stream_handler" in L && t(11, k = L.stream_handler), "$$scope" in L && t(25, i = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, S = null) : typeof s == "string" ? t(16, S = W(s)) : (t(0, s = s.map(W)), t(16, S = s.join(", "))));
  }, [
    s,
    g,
    v,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    w,
    k,
    F,
    J,
    C,
    z,
    S,
    A,
    $,
    E,
    r,
    h,
    b,
    y,
    U,
    i,
    n,
    V,
    R,
    Z,
    ee,
    G,
    O,
    H,
    je
  ];
}
class $1 extends I1 {
  constructor(e) {
    super(), j1(
      this,
      e,
      x1,
      J1,
      V1,
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
  SvelteComponent: eh,
  append: Ll,
  attr: Ji,
  create_component: th,
  destroy_component: nh,
  detach: lh,
  element: Qi,
  init: ih,
  insert: oh,
  listen: sh,
  mount_component: ah,
  noop: rh,
  safe_not_equal: fh,
  set_style: ch,
  space: uh,
  text: _h,
  transition_in: dh,
  transition_out: hh
} = window.__gradio__svelte__internal, { createEventDispatcher: mh } = window.__gradio__svelte__internal;
function gh(l) {
  let e, t, n, i, o, s = "Click to Access Webcam", r, a, f, c;
  return i = new xa({}), {
    c() {
      e = Qi("button"), t = Qi("div"), n = Qi("span"), th(i.$$.fragment), o = uh(), r = _h(s), Ji(n, "class", "icon-wrap svelte-fjcd9c"), Ji(t, "class", "wrap svelte-fjcd9c"), Ji(e, "class", "svelte-fjcd9c"), ch(e, "height", "100%");
    },
    m(u, _) {
      oh(u, e, _), Ll(e, t), Ll(t, n), ah(i, n, null), Ll(t, o), Ll(t, r), a = !0, f || (c = sh(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: rh,
    i(u) {
      a || (dh(i.$$.fragment, u), a = !0);
    },
    o(u) {
      hh(i.$$.fragment, u), a = !1;
    },
    d(u) {
      u && lh(e), nh(i), f = !1, c();
    }
  };
}
function bh(l) {
  const e = mh();
  return [e, () => e("click")];
}
class wh extends eh {
  constructor(e) {
    super(), ih(this, e, bh, gh, fh, {});
  }
}
function vh() {
  return navigator.mediaDevices.enumerateDevices();
}
function ph(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function Ps(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((o) => (ph(o, e), o));
}
function kh(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: yh,
  action_destroyer: Ch,
  add_render_callback: Sh,
  append: Dt,
  attr: he,
  binding_callbacks: zh,
  check_outros: fl,
  create_component: Vn,
  create_in_transition: Bh,
  destroy_component: Nn,
  destroy_each: qh,
  detach: Ee,
  element: Te,
  empty: To,
  ensure_array_like: Zs,
  group_outros: cl,
  init: Dh,
  insert: Re,
  listen: ti,
  mount_component: On,
  noop: jo,
  run_all: Lh,
  safe_not_equal: Mh,
  set_data: Hr,
  set_input_value: zo,
  space: hl,
  stop_propagation: Eh,
  text: Ir,
  toggle_class: Ml,
  transition_in: we,
  transition_out: ye
} = window.__gradio__svelte__internal, { createEventDispatcher: Rh, onMount: Wh } = window.__gradio__svelte__internal;
function Gs(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function Ah(l) {
  let e, t, n, i, o, s, r, a, f, c, u;
  const _ = [Xh, Ih], d = [];
  function m(v, w) {
    return (
      /*mode*/
      v[1] === "video" || /*streaming*/
      v[0] ? 0 : 1
    );
  }
  n = m(l), i = d[n] = _[n](l);
  let h = !/*recording*/
  l[8] && Ks(l), g = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && Js(l)
  );
  return {
    c() {
      e = Te("div"), t = Te("button"), i.c(), s = hl(), h && h.c(), r = hl(), g && g.c(), a = To(), he(t, "aria-label", o = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), he(t, "class", "svelte-8hqvb6"), he(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(v, w) {
      Re(v, e, w), Dt(e, t), d[n].m(t, null), Dt(e, s), h && h.m(e, null), Re(v, r, w), g && g.m(v, w), Re(v, a, w), f = !0, c || (u = ti(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), c = !0);
    },
    p(v, w) {
      let b = n;
      n = m(v), n === b ? d[n].p(v, w) : (cl(), ye(d[b], 1, 1, () => {
        d[b] = null;
      }), fl(), i = d[n], i ? i.p(v, w) : (i = d[n] = _[n](v), i.c()), we(i, 1), i.m(t, null)), (!f || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      v[1] === "image" ? "capture photo" : "start recording")) && he(t, "aria-label", o), /*recording*/
      v[8] ? h && (cl(), ye(h, 1, 1, () => {
        h = null;
      }), fl()) : h ? (h.p(v, w), w[0] & /*recording*/
      256 && we(h, 1)) : (h = Ks(v), h.c(), we(h, 1), h.m(e, null)), /*options_open*/
      v[10] && /*selected_device*/
      v[7] ? g ? (g.p(v, w), w[0] & /*options_open, selected_device*/
      1152 && we(g, 1)) : (g = Js(v), g.c(), we(g, 1), g.m(a.parentNode, a)) : g && (cl(), ye(g, 1, 1, () => {
        g = null;
      }), fl());
    },
    i(v) {
      f || (we(i), we(h), we(g), f = !0);
    },
    o(v) {
      ye(i), ye(h), ye(g), f = !1;
    },
    d(v) {
      v && (Ee(e), Ee(r), Ee(a)), d[n].d(), h && h.d(), g && g.d(v), c = !1, u();
    }
  };
}
function Hh(l) {
  let e, t, n, i;
  return t = new wh({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = Te("div"), Vn(t.$$.fragment), he(e, "title", "grant webcam access");
    },
    m(o, s) {
      Re(o, e, s), On(t, e, null), i = !0;
    },
    p: jo,
    i(o) {
      i || (we(t.$$.fragment, o), o && (n || Sh(() => {
        n = Bh(e, Cd, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(o) {
      ye(t.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Ee(e), Nn(t);
    }
  };
}
function Ih(l) {
  let e, t, n;
  return t = new lu({}), {
    c() {
      e = Te("div"), Vn(t.$$.fragment), he(e, "class", "icon svelte-8hqvb6"), he(e, "title", "capture photo");
    },
    m(i, o) {
      Re(i, e, o), On(t, e, null), n = !0;
    },
    p: jo,
    i(i) {
      n || (we(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), Nn(t);
    }
  };
}
function Xh(l) {
  let e, t, n, i;
  const o = [Th, Yh], s = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = To();
    },
    m(a, f) {
      s[e].m(a, f), Re(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (cl(), ye(s[c], 1, 1, () => {
        s[c] = null;
      }), fl(), t = s[e], t || (t = s[e] = o[e](a), t.c()), we(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (we(t), i = !0);
    },
    o(a) {
      ye(t), i = !1;
    },
    d(a) {
      a && Ee(n), s[e].d(a);
    }
  };
}
function Yh(l) {
  let e, t, n;
  return t = new uu({}), {
    c() {
      e = Te("div"), Vn(t.$$.fragment), he(e, "class", "icon red svelte-8hqvb6"), he(e, "title", "start recording");
    },
    m(i, o) {
      Re(i, e, o), On(t, e, null), n = !0;
    },
    i(i) {
      n || (we(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), Nn(t);
    }
  };
}
function Th(l) {
  let e, t, n;
  return t = new y_({}), {
    c() {
      e = Te("div"), Vn(t.$$.fragment), he(e, "class", "icon red svelte-8hqvb6"), he(e, "title", "stop recording");
    },
    m(i, o) {
      Re(i, e, o), On(t, e, null), n = !0;
    },
    i(i) {
      n || (we(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), Nn(t);
    }
  };
}
function Ks(l) {
  let e, t, n, i, o;
  return t = new Ao({}), {
    c() {
      e = Te("button"), Vn(t.$$.fragment), he(e, "class", "icon svelte-8hqvb6"), he(e, "aria-label", "select input source");
    },
    m(s, r) {
      Re(s, e, r), On(t, e, null), n = !0, i || (o = ti(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: jo,
    i(s) {
      n || (we(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ee(e), Nn(t), i = !1, o();
    }
  };
}
function Js(l) {
  let e, t, n, i, o, s, r;
  n = new Ao({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Fh : jh
    );
  }
  let f = a(l), c = f(l);
  return {
    c() {
      e = Te("select"), t = Te("button"), Vn(n.$$.fragment), i = hl(), c.c(), he(t, "class", "inset-icon svelte-8hqvb6"), he(e, "class", "select-wrap svelte-8hqvb6"), he(e, "aria-label", "select source");
    },
    m(u, _) {
      Re(u, e, _), Dt(e, t), On(n, t, null), Dt(t, i), c.m(e, null), o = !0, s || (r = [
        ti(t, "click", Eh(
          /*click_handler_2*/
          l[22]
        )),
        Ch(Fo.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        ti(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], s = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      o || (we(n.$$.fragment, u), o = !0);
    },
    o(u) {
      ye(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Ee(e), Nn(n), c.d(), s = !1, Lh(r);
    }
  };
}
function jh(l) {
  let e, t = Zs(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Qs(Gs(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = To();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Re(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Zs(
          /*available_video_devices*/
          i[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Gs(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Qs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Ee(e), qh(n, i);
    }
  };
}
function Fh(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Te("option"), n = Ir(t), e.__value = "", zo(e, e.__value), he(e, "class", "svelte-8hqvb6");
    },
    m(i, o) {
      Re(i, e, o), Dt(e, n);
    },
    p(i, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Hr(n, t);
    },
    d(i) {
      i && Ee(e);
    }
  };
}
function Qs(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, o, s;
  return {
    c() {
      e = Te("option"), n = Ir(t), i = hl(), e.__value = o = /*device*/
      l[32].deviceId, zo(e, e.__value), e.selected = s = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, he(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Re(r, e, a), Dt(e, n), Dt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Hr(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, zo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ee(e);
    }
  };
}
function Uh(l) {
  let e, t, n, i, o, s;
  const r = [Hh, Ah], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = f(l), o = a[i] = r[i](l), {
    c() {
      e = Te("div"), t = Te("video"), n = hl(), o.c(), he(t, "class", "svelte-8hqvb6"), Ml(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), Ml(t, "hide", !/*webcam_accessed*/
      l[9]), he(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Re(c, e, u), Dt(e, t), l[19](t), Dt(e, n), a[i].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Ml(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Ml(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = i;
      i = f(c), i === _ ? a[i].p(c, u) : (cl(), ye(a[_], 1, 1, () => {
        a[_] = null;
      }), fl(), o = a[i], o ? o.p(c, u) : (o = a[i] = r[i](c), o.c()), we(o, 1), o.m(e, null));
    },
    i(c) {
      s || (we(o), s = !0);
    },
    o(c) {
      ye(o), s = !1;
    },
    d(c) {
      c && Ee(e), l[19](null), a[i].d();
    }
  };
}
function Fo(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Vh(l, e, t) {
  var n = this && this.__awaiter || function(E, V, R, Z) {
    function ee(G) {
      return G instanceof R ? G : new R(function(O) {
        O(G);
      });
    }
    return new (R || (R = Promise))(function(G, O) {
      function H(Y) {
        try {
          L(Z.next(Y));
        } catch (te) {
          O(te);
        }
      }
      function je(Y) {
        try {
          L(Z.throw(Y));
        } catch (te) {
          O(te);
        }
      }
      function L(Y) {
        Y.done ? G(Y.value) : ee(Y.value).then(H, je);
      }
      L((Z = Z.apply(E, V || [])).next());
    });
  };
  let i, o = [], s = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Rh();
  Wh(() => r = document.createElement("canvas"));
  const v = (E) => n(void 0, void 0, void 0, function* () {
    const R = E.target.value;
    yield Ps(d, i, R).then((Z) => n(void 0, void 0, void 0, function* () {
      C = Z, t(7, s = o.find((ee) => ee.deviceId === R) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Ps(d, i).then((E) => n(this, void 0, void 0, function* () {
          t(9, p = !0), t(6, o = yield vh()), C = E;
        })).then(() => kh(o)).then((E) => {
          t(6, o = E);
          const V = C.getTracks().map((R) => {
            var Z;
            return (Z = R.getSettings()) === null || Z === void 0 ? void 0 : Z.deviceId;
          })[0];
          t(7, s = V && E.find((R) => R.deviceId === V) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (E) {
        if (E instanceof DOMException && E.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw E;
      }
    });
  }
  function b() {
    var E = r.getContext("2d");
    (!a || a && y) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, E.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (E.scale(-1, 1), E.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (V) => {
        g(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, k = [], C, z, S;
  function M() {
    if (y) {
      S.stop();
      let E = new Blob(k, { type: z }), V = new FileReader();
      V.onload = function(R) {
        return n(this, void 0, void 0, function* () {
          var Z;
          if (R.target) {
            let ee = new File([E], "sample." + z.substring(6));
            const G = yield Sr([ee]);
            let O = ((Z = yield h(G, c)) === null || Z === void 0 ? void 0 : Z.filter(Boolean))[0];
            g("capture", O), g("stop_recording");
          }
        });
      }, V.readAsDataURL(E);
    } else {
      g("start_recording"), k = [];
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
      S = new MediaRecorder(C, { mimeType: z }), S.addEventListener("dataavailable", function(V) {
        k.push(V.data);
      }), S.start(200);
    }
    t(8, y = !y);
  }
  let p = !1;
  function W() {
    u === "image" && a && t(8, y = !y), u === "image" ? b() : M(), !y && C && (C.getTracks().forEach((E) => E.stop()), t(5, i.srcObject = null, i), t(9, p = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      i && !f && b();
    },
    500
  );
  let A = !1;
  function F(E) {
    E.preventDefault(), E.stopPropagation(), t(10, A = !1);
  }
  function J(E) {
    zh[E ? "unshift" : "push"](() => {
      i = E, t(5, i);
    });
  }
  const x = async () => w(), U = () => t(10, A = !0), $ = () => t(10, A = !1);
  return l.$$set = (E) => {
    "streaming" in E && t(0, a = E.streaming), "pending" in E && t(15, f = E.pending), "root" in E && t(16, c = E.root), "mode" in E && t(1, u = E.mode), "mirror_webcam" in E && t(2, _ = E.mirror_webcam), "include_audio" in E && t(17, d = E.include_audio), "i18n" in E && t(3, m = E.i18n), "upload" in E && t(18, h = E.upload);
  }, [
    a,
    u,
    _,
    m,
    Fo,
    i,
    o,
    s,
    y,
    p,
    A,
    v,
    w,
    W,
    F,
    f,
    c,
    d,
    h,
    J,
    x,
    U,
    $
  ];
}
class Nh extends yh {
  constructor(e) {
    super(), Dh(
      this,
      e,
      Vh,
      Uh,
      Mh,
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
    return Fo;
  }
}
const {
  SvelteComponent: Oh,
  append: Yt,
  attr: I,
  detach: Ph,
  init: Zh,
  insert: Gh,
  noop: xi,
  safe_not_equal: Kh,
  set_style: Tt,
  svg_element: wt
} = window.__gradio__svelte__internal;
function Jh(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = wt("svg"), t = wt("rect"), n = wt("rect"), i = wt("rect"), o = wt("rect"), s = wt("line"), r = wt("line"), a = wt("line"), f = wt("line"), I(t, "x", "2"), I(t, "y", "2"), I(t, "width", "5"), I(t, "height", "5"), I(t, "rx", "1"), I(t, "ry", "1"), I(t, "stroke-width", "2"), I(t, "fill", "none"), I(n, "x", "17"), I(n, "y", "2"), I(n, "width", "5"), I(n, "height", "5"), I(n, "rx", "1"), I(n, "ry", "1"), I(n, "stroke-width", "2"), I(n, "fill", "none"), I(i, "x", "2"), I(i, "y", "17"), I(i, "width", "5"), I(i, "height", "5"), I(i, "rx", "1"), I(i, "ry", "1"), I(i, "stroke-width", "2"), I(i, "fill", "none"), I(o, "x", "17"), I(o, "y", "17"), I(o, "width", "5"), I(o, "height", "5"), I(o, "rx", "1"), I(o, "ry", "1"), I(o, "stroke-width", "2"), I(o, "fill", "none"), I(s, "x1", "7.5"), I(s, "y1", "4.5"), I(s, "x2", "16"), I(s, "y2", "4.5"), Tt(s, "stroke-width", "2px"), I(r, "x1", "7.5"), I(r, "y1", "19.5"), I(r, "x2", "16"), I(r, "y2", "19.5"), Tt(r, "stroke-width", "2px"), I(a, "x1", "4.5"), I(a, "y1", "8"), I(a, "x2", "4.5"), I(a, "y2", "16"), Tt(a, "stroke-width", "2px"), I(f, "x1", "19.5"), I(f, "y1", "8"), I(f, "x2", "19.5"), I(f, "y2", "16"), Tt(f, "stroke-width", "2px"), I(e, "width", "100%"), I(e, "height", "100%"), I(e, "viewBox", "0 0 24 24"), I(e, "version", "1.1"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), I(e, "xml:space", "preserve"), I(e, "stroke", "currentColor"), Tt(e, "fill-rule", "evenodd"), Tt(e, "clip-rule", "evenodd"), Tt(e, "stroke-linecap", "round"), Tt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Gh(c, e, u), Yt(e, t), Yt(e, n), Yt(e, i), Yt(e, o), Yt(e, s), Yt(e, r), Yt(e, a), Yt(e, f);
    },
    p: xi,
    i: xi,
    o: xi,
    d(c) {
      c && Ph(e);
    }
  };
}
class Qh extends Oh {
  constructor(e) {
    super(), Zh(this, e, null, Jh, Kh, {});
  }
}
const {
  SvelteComponent: xh,
  append: $h,
  attr: lt,
  detach: e0,
  init: t0,
  insert: n0,
  noop: $i,
  safe_not_equal: l0,
  set_style: El,
  svg_element: xs
} = window.__gradio__svelte__internal;
function i0(l) {
  let e, t;
  return {
    c() {
      e = xs("svg"), t = xs("path"), lt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), El(e, "fill-rule", "evenodd"), El(e, "clip-rule", "evenodd"), El(e, "stroke-linecap", "round"), El(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      n0(n, e, i), $h(e, t);
    },
    p: $i,
    i: $i,
    o: $i,
    d(n) {
      n && e0(e);
    }
  };
}
class o0 extends xh {
  constructor(e) {
    super(), t0(this, e, null, i0, l0, {});
  }
}
const {
  SvelteComponent: s0,
  append: a0,
  attr: it,
  detach: r0,
  init: f0,
  insert: c0,
  noop: eo,
  safe_not_equal: u0,
  set_style: Rl,
  svg_element: $s
} = window.__gradio__svelte__internal;
function _0(l) {
  let e, t;
  return {
    c() {
      e = $s("svg"), t = $s("path"), it(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), it(t, "fill", "none"), it(t, "stroke-width", "2"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24"), it(e, "version", "1.1"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), it(e, "xml:space", "preserve"), it(e, "stroke", "currentColor"), Rl(e, "fill-rule", "evenodd"), Rl(e, "clip-rule", "evenodd"), Rl(e, "stroke-linecap", "round"), Rl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      c0(n, e, i), a0(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && r0(e);
    }
  };
}
class d0 extends s0 {
  constructor(e) {
    super(), f0(this, e, null, _0, u0, {});
  }
}
const {
  SvelteComponent: h0,
  append: ea,
  attr: vt,
  detach: m0,
  init: g0,
  insert: b0,
  noop: to,
  safe_not_equal: w0,
  set_style: Wl,
  svg_element: no
} = window.__gradio__svelte__internal;
function v0(l) {
  let e, t, n;
  return {
    c() {
      e = no("svg"), t = no("path"), n = no("path"), vt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), vt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "fill", "none"), vt(e, "stroke", "currentColor"), vt(e, "stroke-width", "2"), Wl(e, "fill-rule", "evenodd"), Wl(e, "clip-rule", "evenodd"), Wl(e, "stroke-linecap", "round"), Wl(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      b0(i, e, o), ea(e, t), ea(e, n);
    },
    p: to,
    i: to,
    o: to,
    d(i) {
      i && m0(e);
    }
  };
}
class p0 extends h0 {
  constructor(e) {
    super(), g0(this, e, null, v0, w0, {});
  }
}
const {
  SvelteComponent: k0,
  append: y0,
  attr: jt,
  detach: C0,
  init: S0,
  insert: z0,
  noop: lo,
  safe_not_equal: B0,
  set_style: Al,
  svg_element: ta
} = window.__gradio__svelte__internal;
function q0(l) {
  let e, t;
  return {
    c() {
      e = ta("svg"), t = ta("path"), jt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), jt(e, "width", "100%"), jt(e, "height", "100%"), jt(e, "viewBox", "0 0 24 24"), jt(e, "fill", "none"), jt(e, "stroke", "currentColor"), jt(e, "stroke-width", "2"), Al(e, "fill-rule", "evenodd"), Al(e, "clip-rule", "evenodd"), Al(e, "stroke-linecap", "round"), Al(e, "stroke-linejoin", "round"), jt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      z0(n, e, i), y0(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && C0(e);
    }
  };
}
class D0 extends k0 {
  constructor(e) {
    super(), S0(this, e, null, q0, B0, {});
  }
}
const {
  SvelteComponent: L0,
  append: M0,
  attr: Ft,
  detach: E0,
  init: R0,
  insert: W0,
  noop: io,
  safe_not_equal: A0,
  set_style: Hl,
  svg_element: na
} = window.__gradio__svelte__internal;
function H0(l) {
  let e, t;
  return {
    c() {
      e = na("svg"), t = na("path"), Ft(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Hl(e, "fill-rule", "evenodd"), Hl(e, "clip-rule", "evenodd"), Hl(e, "stroke-linecap", "round"), Hl(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      W0(n, e, i), M0(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && E0(e);
    }
  };
}
class I0 extends L0 {
  constructor(e) {
    super(), R0(this, e, null, H0, A0, {});
  }
}
const {
  SvelteComponent: X0,
  append: la,
  attr: oo,
  bubble: ia,
  create_component: Y0,
  destroy_component: T0,
  detach: Xr,
  element: oa,
  init: j0,
  insert: Yr,
  listen: so,
  mount_component: F0,
  run_all: U0,
  safe_not_equal: V0,
  set_data: N0,
  set_input_value: sa,
  space: O0,
  text: P0,
  transition_in: Z0,
  transition_out: G0
} = window.__gradio__svelte__internal, { createEventDispatcher: K0, afterUpdate: J0 } = window.__gradio__svelte__internal;
function Q0(l) {
  let e;
  return {
    c() {
      e = P0(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Yr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && N0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Xr(e);
    }
  };
}
function x0(l) {
  let e, t, n, i, o, s, r;
  return t = new Oa({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [Q0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = oa("label"), Y0(t.$$.fragment), n = O0(), i = oa("input"), oo(i, "type", "color"), i.disabled = /*disabled*/
      l[3], oo(i, "class", "svelte-16l8u73"), oo(e, "class", "block");
    },
    m(a, f) {
      Yr(a, e, f), F0(t, e, null), la(e, n), la(e, i), sa(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        so(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        so(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        so(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], s = !0);
    },
    p(a, [f]) {
      const c = {};
      f & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (c.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: f, ctx: a }), t.$set(c), (!o || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && sa(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (Z0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      G0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Xr(e), T0(t), s = !1, U0(r);
    }
  };
}
function $0(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = K0();
  function c() {
    f("change", n), i || f("input");
  }
  J0(() => {
    t(5, i = !1);
  });
  function u(m) {
    ia.call(this, l, m);
  }
  function _(m) {
    ia.call(this, l, m);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, i = m.value_is_output), "label" in m && t(1, o = m.label), "info" in m && t(2, s = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    o,
    s,
    r,
    a,
    i,
    u,
    _,
    d
  ];
}
class em extends X0 {
  constructor(e) {
    super(), j0(this, e, $0, x0, V0, {
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
  SvelteComponent: tm,
  append: Tr,
  attr: ae,
  bubble: nm,
  check_outros: lm,
  create_slot: jr,
  detach: bl,
  element: bi,
  empty: im,
  get_all_dirty_from_scope: Fr,
  get_slot_changes: Ur,
  group_outros: om,
  init: sm,
  insert: wl,
  listen: am,
  safe_not_equal: rm,
  set_style: Le,
  space: Vr,
  src_url_equal: ni,
  toggle_class: An,
  transition_in: li,
  transition_out: ii,
  update_slot_base: Nr
} = window.__gradio__svelte__internal;
function fm(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && aa(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = jr(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = bi("button"), r && r.c(), t = Vr(), f && f.c(), ae(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], An(e, "hidden", !/*visible*/
      l[2]), Le(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Le(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Le(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(c, u) {
      wl(c, e, u), r && r.m(e, null), Tr(e, t), f && f.m(e, null), i = !0, o || (s = am(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = aa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || u & /*$$scope*/
      2048) && Nr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? Ur(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Fr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!i || u & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || u & /*size, variant, elem_classes, visible*/
      30) && An(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Le(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Le(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Le(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      i || (li(f, c), i = !0);
    },
    o(c) {
      ii(f, c), i = !1;
    },
    d(c) {
      c && bl(e), r && r.d(), f && f.d(c), o = !1, s();
    }
  };
}
function cm(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && ra(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = jr(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = bi("a"), o && o.c(), t = Vr(), r && r.c(), ae(
        e,
        "href",
        /*link*/
        l[6]
      ), ae(e, "rel", "noopener noreferrer"), ae(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), ae(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), An(e, "hidden", !/*visible*/
      l[2]), An(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), Le(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Le(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), Le(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Le(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      wl(a, e, f), o && o.m(e, null), Tr(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = ra(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Nr(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? Ur(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Fr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && ae(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && ae(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!i || f & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && An(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && An(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Le(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Le(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Le(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Le(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (li(r, a), i = !0);
    },
    o(a) {
      ii(r, a), i = !1;
    },
    d(a) {
      a && bl(e), o && o.d(), r && r.d(a);
    }
  };
}
function aa(l) {
  let e, t, n;
  return {
    c() {
      e = bi("img"), ae(e, "class", "button-icon svelte-8huxfn"), ni(e.src, t = /*icon*/
      l[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      wl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !ni(e.src, t = /*icon*/
      i[7].url) && ae(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && ae(e, "alt", n);
    },
    d(i) {
      i && bl(e);
    }
  };
}
function ra(l) {
  let e, t, n;
  return {
    c() {
      e = bi("img"), ae(e, "class", "button-icon svelte-8huxfn"), ni(e.src, t = /*icon*/
      l[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      wl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !ni(e.src, t = /*icon*/
      i[7].url) && ae(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && ae(e, "alt", n);
    },
    d(i) {
      i && bl(e);
    }
  };
}
function um(l) {
  let e, t, n, i;
  const o = [cm, fm], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = im();
    },
    m(a, f) {
      s[e].m(a, f), wl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (om(), ii(s[c], 1, 1, () => {
        s[c] = null;
      }), lm(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), li(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (li(t), i = !0);
    },
    o(a) {
      ii(t), i = !1;
    },
    d(a) {
      a && bl(n), s[e].d(a);
    }
  };
}
function _m(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(v) {
    nm.call(this, l, v);
  }
  return l.$$set = (v) => {
    "elem_id" in v && t(0, o = v.elem_id), "elem_classes" in v && t(1, s = v.elem_classes), "visible" in v && t(2, r = v.visible), "variant" in v && t(3, a = v.variant), "size" in v && t(4, f = v.size), "value" in v && t(5, c = v.value), "link" in v && t(6, u = v.link), "icon" in v && t(7, _ = v.icon), "disabled" in v && t(8, d = v.disabled), "scale" in v && t(9, m = v.scale), "min_width" in v && t(10, h = v.min_width), "$$scope" in v && t(11, i = v.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    i,
    n,
    g
  ];
}
class Bo extends tm {
  constructor(e) {
    super(), sm(this, e, _m, um, rm, {
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
  SvelteComponent: dm,
  add_render_callback: Or,
  append: Il,
  attr: Ie,
  binding_callbacks: fa,
  check_outros: hm,
  create_bidirectional_transition: ca,
  destroy_each: mm,
  detach: ul,
  element: oi,
  empty: gm,
  ensure_array_like: ua,
  group_outros: bm,
  init: wm,
  insert: _l,
  listen: qo,
  prevent_default: vm,
  run_all: pm,
  safe_not_equal: km,
  set_data: ym,
  set_style: qn,
  space: Do,
  text: Cm,
  toggle_class: ft,
  transition_in: ao,
  transition_out: _a
} = window.__gradio__svelte__internal, { createEventDispatcher: Sm } = window.__gradio__svelte__internal;
function da(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function ha(l) {
  let e, t, n, i, o, s = ua(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = ma(da(l, s, a));
  return {
    c() {
      e = oi("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ie(e, "class", "options svelte-yuohum"), Ie(e, "role", "listbox"), qn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), qn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), qn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      _l(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l[22](e), n = !0, i || (o = qo(e, "mousedown", vm(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = ua(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = da(a, s, c);
          r[c] ? r[c].p(u, f) : (r[c] = ma(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      f & /*bottom*/
      512 && qn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && qn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && qn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Or(() => {
        n && (t || (t = ca(e, ws, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ca(e, ws, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && ul(e), mm(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function ma(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, f;
  return {
    c() {
      e = oi("li"), t = oi("span"), t.textContent = "✓", n = Do(), o = Cm(i), s = Do(), Ie(t, "class", "inner-item svelte-yuohum"), ft(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ie(e, "class", "item svelte-yuohum"), Ie(e, "data-index", r = /*index*/
      l[26]), Ie(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Ie(e, "data-testid", "dropdown-option"), Ie(e, "role", "option"), Ie(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), ft(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), ft(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), ft(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), ft(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(c, u) {
      _l(c, e, u), Il(e, t), Il(e, n), Il(e, o), Il(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && ft(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && ym(o, i), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Ie(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Ie(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Ie(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && ft(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && ul(e);
    }
  };
}
function zm(l) {
  let e, t, n, i, o;
  Or(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && ha(l)
  );
  return {
    c() {
      e = oi("div"), t = Do(), s && s.c(), n = gm(), Ie(e, "class", "reference");
    },
    m(r, a) {
      _l(r, e, a), l[20](e), _l(r, t, a), s && s.m(r, a), _l(r, n, a), i || (o = [
        qo(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        qo(
          window,
          "resize",
          /*onwindowresize*/
          l[19]
        )
      ], i = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && ao(s, 1)) : (s = ha(r), s.c(), ao(s, 1), s.m(n.parentNode, n)) : s && (bm(), _a(s, 1, 1, () => {
        s = null;
      }), hm());
    },
    i(r) {
      ao(s);
    },
    o(r) {
      _a(s);
    },
    d(r) {
      r && (ul(e), ul(t), ul(n)), l[20](null), s && s.d(r), i = !1, pm(o);
    }
  };
}
function Bm(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, m, h, g, v, w, b;
  function y() {
    const { top: A, bottom: F } = h.getBoundingClientRect();
    t(16, u = A), t(17, _ = b - F);
  }
  let k = null;
  function C() {
    r && (k !== null && clearTimeout(k), k = setTimeout(
      () => {
        y(), k = null;
      },
      10
    ));
  }
  const z = Sm();
  function S() {
    t(11, b = window.innerHeight);
  }
  function M(A) {
    fa[A ? "unshift" : "push"](() => {
      h = A, t(6, h);
    });
  }
  const p = (A) => z("change", A);
  function W(A) {
    fa[A ? "unshift" : "push"](() => {
      g = A, t(7, g);
    });
  }
  return l.$$set = (A) => {
    "choices" in A && t(0, o = A.choices), "filtered_indices" in A && t(1, s = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && f.length > 0) {
          let F = g.querySelectorAll("li");
          for (const J of Array.from(F))
            if (J.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, J.offsetTop);
              break;
            }
        }
        y();
        const A = t(15, i = h.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, m = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, w = _), t(9, v = null)) : (t(9, v = `${_ + d}px`), t(10, w = u - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    h,
    g,
    m,
    v,
    w,
    b,
    C,
    z,
    n,
    i,
    u,
    _,
    d,
    S,
    M,
    p,
    W
  ];
}
class qm extends dm {
  constructor(e) {
    super(), wm(this, e, Bm, zm, km, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Dm(l, e) {
  return (l % e + e) % e;
}
function ga(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Lm(l, e, t) {
  l("change", e), t || l("input");
}
function Mm(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Dm(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Em,
  append: xt,
  attr: He,
  binding_callbacks: Rm,
  check_outros: Wm,
  create_component: Lo,
  destroy_component: Mo,
  detach: Uo,
  element: Mn,
  group_outros: Am,
  init: Hm,
  insert: Vo,
  listen: $n,
  mount_component: Eo,
  run_all: Im,
  safe_not_equal: Xm,
  set_data: Ym,
  set_input_value: ba,
  space: ro,
  text: Tm,
  toggle_class: Dn,
  transition_in: En,
  transition_out: al
} = window.__gradio__svelte__internal, { onMount: jm } = window.__gradio__svelte__internal, { createEventDispatcher: Fm, afterUpdate: Um } = window.__gradio__svelte__internal;
function Vm(l) {
  let e;
  return {
    c() {
      e = Tm(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      Vo(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Ym(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Uo(e);
    }
  };
}
function wa(l) {
  let e, t, n;
  return t = new Ao({}), {
    c() {
      e = Mn("div"), Lo(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      Vo(i, e, o), Eo(t, e, null), n = !0;
    },
    i(i) {
      n || (En(t.$$.fragment, i), n = !0);
    },
    o(i) {
      al(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Uo(e), Mo(t);
    }
  };
}
function Nm(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, m;
  t = new Oa({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [Vm] },
      $$scope: { ctx: l }
    }
  });
  let h = !/*disabled*/
  l[3] && wa();
  return u = new qm({
    props: {
      show_options: (
        /*show_options*/
        l[12]
      ),
      choices: (
        /*choices*/
        l[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        l[10]
      ),
      disabled: (
        /*disabled*/
        l[3]
      ),
      selected_indices: (
        /*selected_index*/
        l[11] === null ? [] : [
          /*selected_index*/
          l[11]
        ]
      ),
      active_index: (
        /*active_index*/
        l[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    l[16]
  ), {
    c() {
      e = Mn("div"), Lo(t.$$.fragment), n = ro(), i = Mn("div"), o = Mn("div"), s = Mn("div"), r = Mn("input"), f = ro(), h && h.c(), c = ro(), Lo(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), He(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), He(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], He(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], Dn(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), He(s, "class", "secondary-wrap svelte-1m1zvyj"), He(o, "class", "wrap-inner svelte-1m1zvyj"), Dn(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), He(i, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), Dn(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(g, v) {
      Vo(g, e, v), Eo(t, e, null), xt(e, n), xt(e, i), xt(i, o), xt(o, s), xt(s, r), ba(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), xt(s, f), h && h.m(s, null), xt(i, c), Eo(u, i, null), _ = !0, d || (m = [
        $n(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        $n(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        $n(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        $n(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        $n(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(g, v) {
      const w = {};
      v[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      g[4]), v[0] & /*info*/
      2 && (w.info = /*info*/
      g[1]), v[0] & /*label*/
      1 | v[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: v, ctx: g }), t.$set(w), (!_ || v[0] & /*show_options*/
      4096) && He(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || v[0] & /*label*/
      1) && He(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || v[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || v[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), v[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && ba(
        r,
        /*input_text*/
        g[9]
      ), (!_ || v[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Dn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Am(), al(h, 1, 1, () => {
        h = null;
      }), Wm()) : h ? v[0] & /*disabled*/
      8 && En(h, 1) : (h = wa(), h.c(), En(h, 1), h.m(s, null)), (!_ || v[0] & /*show_options*/
      4096) && Dn(
        o,
        "show_options",
        /*show_options*/
        g[12]
      );
      const b = {};
      v[0] & /*show_options*/
      4096 && (b.show_options = /*show_options*/
      g[12]), v[0] & /*choices*/
      4 && (b.choices = /*choices*/
      g[2]), v[0] & /*filtered_indices*/
      1024 && (b.filtered_indices = /*filtered_indices*/
      g[10]), v[0] & /*disabled*/
      8 && (b.disabled = /*disabled*/
      g[3]), v[0] & /*selected_index*/
      2048 && (b.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), v[0] & /*active_index*/
      16384 && (b.active_index = /*active_index*/
      g[14]), u.$set(b), (!_ || v[0] & /*container*/
      32) && Dn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (En(t.$$.fragment, g), En(h), En(u.$$.fragment, g), _ = !0);
    },
    o(g) {
      al(t.$$.fragment, g), al(h), al(u.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && Uo(e), Mo(t), l[29](null), h && h.d(), Mo(u), d = !1, Im(m);
    }
  };
}
function Om(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, v, w, b = "", y = "", k = !1, C = [], z = null, S = null, M;
  const p = Fm();
  o ? (M = a.map((R) => R[1]).indexOf(o), S = M, S === -1 ? (s = o, S = null) : ([b, s] = a[S], y = b), A()) : a.length > 0 && (M = 0, S = 0, [b, o] = a[S], s = o, y = b);
  function W() {
    t(13, v = a.map((R) => R[0])), t(24, w = a.map((R) => R[1]));
  }
  function A() {
    W(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, b = ""), t(11, S = null)) : w.includes(o) ? (t(9, b = v[w.indexOf(o)]), t(11, S = w.indexOf(o))) : d ? (t(9, b = o), t(11, S = null)) : (t(9, b = ""), t(11, S = null)), t(27, M = S);
  }
  function F(R) {
    if (t(11, S = parseInt(R.detail.target.dataset.index)), isNaN(S)) {
      t(11, S = null);
      return;
    }
    t(12, g = !1), t(14, z = null), h.blur();
  }
  function J(R) {
    t(10, C = a.map((Z, ee) => ee)), t(12, g = !0), p("focus");
  }
  function x() {
    d ? t(20, o = b) : t(9, b = v[w.indexOf(o)]), t(12, g = !1), t(14, z = null), p("blur");
  }
  function U(R) {
    t(12, [g, z] = Mm(R, z, C), g, (t(14, z), t(2, a), t(23, f), t(6, d), t(9, b), t(10, C), t(8, h), t(25, y), t(11, S), t(27, M), t(26, k), t(24, w))), R.key === "Enter" && (z !== null ? (t(11, S = z), t(12, g = !1), h.blur(), t(14, z = null)) : v.includes(b) ? (t(11, S = v.indexOf(b)), t(12, g = !1), t(14, z = null), h.blur()) : d && (t(20, o = b), t(11, S = null), t(12, g = !1), t(14, z = null), h.blur()), p("enter", o));
  }
  Um(() => {
    t(21, r = !1), t(26, k = !0);
  }), jm(() => {
    h.focus();
  });
  function $() {
    b = this.value, t(9, b), t(11, S), t(27, M), t(26, k), t(2, a), t(24, w);
  }
  function E(R) {
    Rm[R ? "unshift" : "push"](() => {
      h = R, t(8, h);
    });
  }
  const V = (R) => p("key_up", { key: R.key, input_value: b });
  return l.$$set = (R) => {
    "label" in R && t(0, n = R.label), "info" in R && t(1, i = R.info), "value" in R && t(20, o = R.value), "value_is_output" in R && t(21, r = R.value_is_output), "choices" in R && t(2, a = R.choices), "disabled" in R && t(3, c = R.disabled), "show_label" in R && t(4, u = R.show_label), "container" in R && t(5, _ = R.container), "allow_custom_value" in R && t(6, d = R.allow_custom_value), "filterable" in R && t(7, m = R.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && S !== M && S !== null && k && (t(9, [b, o] = a[S], b, (t(20, o), t(11, S), t(27, M), t(26, k), t(2, a), t(24, w))), t(27, M = S), p("select", {
      index: S,
      value: w[S],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (A(), Lm(p, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && W(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, C = ga(a, b)), !d && C.length > 0 && t(14, z = C[0]), h == document.activeElement && t(12, g = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && b !== y && (t(10, C = ga(a, b)), t(25, y = b), !d && C.length > 0 && t(14, z = C[0]));
  }, [
    n,
    i,
    a,
    c,
    u,
    _,
    d,
    m,
    h,
    b,
    C,
    S,
    g,
    v,
    z,
    p,
    F,
    J,
    x,
    U,
    o,
    r,
    s,
    f,
    w,
    y,
    k,
    M,
    $,
    E,
    V
  ];
}
class Pm extends Em {
  constructor(e) {
    super(), Hm(
      this,
      e,
      Om,
      Nm,
      Xm,
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
  SvelteComponent: Zm,
  append: Oe,
  attr: Hn,
  check_outros: Ro,
  create_component: rn,
  destroy_component: fn,
  detach: Pn,
  element: ut,
  group_outros: Wo,
  init: Gm,
  insert: Zn,
  listen: Km,
  mount_component: cn,
  safe_not_equal: Jm,
  set_style: In,
  space: el,
  text: No,
  toggle_class: va,
  transition_in: Ce,
  transition_out: Xe
} = window.__gradio__svelte__internal, { createEventDispatcher: Qm } = window.__gradio__svelte__internal, { onMount: xm, onDestroy: $m } = window.__gradio__svelte__internal;
function pa(l) {
  let e, t, n, i, o, s, r;
  const a = [tg, eg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(l), i = f[n] = a[n](l), {
    c() {
      e = ut("div"), t = ut("button"), i.c(), Hn(t, "class", "icon svelte-d9x7u0"), Hn(t, "aria-label", "Lock label detail"), va(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), In(e, "margin-right", "8px");
    },
    m(u, _) {
      Zn(u, e, _), Oe(e, t), f[n].m(t, null), o = !0, s || (r = Km(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), s = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Wo(), Xe(f[d], 1, 1, () => {
        f[d] = null;
      }), Ro(), i = f[n], i || (i = f[n] = a[n](u), i.c()), Ce(i, 1), i.m(t, null)), (!o || _ & /*labelDetailLock*/
      4) && va(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (Ce(i), o = !0);
    },
    o(u) {
      Xe(i), o = !1;
    },
    d(u) {
      u && Pn(e), f[n].d(), s = !1, r();
    }
  };
}
function eg(l) {
  let e, t;
  return e = new I0({}), {
    c() {
      rn(e.$$.fragment);
    },
    m(n, i) {
      cn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function tg(l) {
  let e, t;
  return e = new D0({}), {
    c() {
      rn(e.$$.fragment);
    },
    m(n, i) {
      cn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function ng(l) {
  let e;
  return {
    c() {
      e = No("Cancel");
    },
    m(t, n) {
      Zn(t, e, n);
    },
    d(t) {
      t && Pn(e);
    }
  };
}
function ka(l) {
  let e, t, n;
  return t = new Bo({
    props: {
      variant: "stop",
      $$slots: { default: [lg] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = ut("div"), rn(t.$$.fragment), In(e, "margin-right", "8px");
    },
    m(i, o) {
      Zn(i, e, o), cn(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Ce(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Xe(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Pn(e), fn(t);
    }
  };
}
function lg(l) {
  let e;
  return {
    c() {
      e = No("Remove");
    },
    m(t, n) {
      Zn(t, e, n);
    },
    d(t) {
      t && Pn(e);
    }
  };
}
function ig(l) {
  let e;
  return {
    c() {
      e = No("OK");
    },
    m(t, n) {
      Zn(t, e, n);
    },
    d(t) {
      t && Pn(e);
    }
  };
}
function og(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, m, h, g, v, w = !/*showRemove*/
  l[4] && pa(l);
  s = new Pm({
    props: {
      value: (
        /*currentLabel*/
        l[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        l[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    l[6]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    l[8]
  ), f = new em({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), f.$on(
    "change",
    /*onColorChange*/
    l[7]
  ), _ = new Bo({
    props: {
      $$slots: { default: [ng] },
      $$scope: { ctx: l }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let b = (
    /*showRemove*/
    l[4] && ka(l)
  );
  return g = new Bo({
    props: {
      variant: "primary",
      $$slots: { default: [ig] },
      $$scope: { ctx: l }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = ut("div"), t = ut("div"), n = ut("span"), w && w.c(), i = el(), o = ut("div"), rn(s.$$.fragment), r = el(), a = ut("div"), rn(f.$$.fragment), c = el(), u = ut("div"), rn(_.$$.fragment), d = el(), b && b.c(), m = el(), h = ut("div"), rn(g.$$.fragment), In(o, "margin-right", "10px"), In(a, "margin-right", "40px"), In(a, "margin-bottom", "8px"), In(u, "margin-right", "8px"), Hn(n, "class", "model-content svelte-d9x7u0"), Hn(t, "class", "modal-container svelte-d9x7u0"), Hn(e, "class", "modal svelte-d9x7u0"), Hn(e, "id", "model-box-edit");
    },
    m(y, k) {
      Zn(y, e, k), Oe(e, t), Oe(t, n), w && w.m(n, null), Oe(n, i), Oe(n, o), cn(s, o, null), Oe(n, r), Oe(n, a), cn(f, a, null), Oe(n, c), Oe(n, u), cn(_, u, null), Oe(n, d), b && b.m(n, null), Oe(n, m), Oe(n, h), cn(g, h, null), v = !0;
    },
    p(y, [k]) {
      /*showRemove*/
      y[4] ? w && (Wo(), Xe(w, 1, 1, () => {
        w = null;
      }), Ro()) : w ? (w.p(y, k), k & /*showRemove*/
      16 && Ce(w, 1)) : (w = pa(y), w.c(), Ce(w, 1), w.m(n, i));
      const C = {};
      k & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      y[0]), k & /*choices*/
      8 && (C.choices = /*choices*/
      y[3]), s.$set(C);
      const z = {};
      k & /*currentColor*/
      2 && (z.value = /*currentColor*/
      y[1]), f.$set(z);
      const S = {};
      k & /*$$scope*/
      262144 && (S.$$scope = { dirty: k, ctx: y }), _.$set(S), /*showRemove*/
      y[4] ? b ? (b.p(y, k), k & /*showRemove*/
      16 && Ce(b, 1)) : (b = ka(y), b.c(), Ce(b, 1), b.m(n, m)) : b && (Wo(), Xe(b, 1, 1, () => {
        b = null;
      }), Ro());
      const M = {};
      k & /*$$scope*/
      262144 && (M.$$scope = { dirty: k, ctx: y }), g.$set(M);
    },
    i(y) {
      v || (Ce(w), Ce(s.$$.fragment, y), Ce(f.$$.fragment, y), Ce(_.$$.fragment, y), Ce(b), Ce(g.$$.fragment, y), v = !0);
    },
    o(y) {
      Xe(w), Xe(s.$$.fragment, y), Xe(f.$$.fragment, y), Xe(_.$$.fragment, y), Xe(b), Xe(g.$$.fragment, y), v = !1;
    },
    d(y) {
      y && Pn(e), w && w.d(), fn(s), fn(f), fn(_), b && b.d(), fn(g);
    }
  };
}
function sg(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = Qm();
  function _(k) {
    u("change", {
      label: i,
      color: a,
      lock: c,
      ret: k
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(k) {
    const { detail: C } = k;
    let z = C;
    Number.isInteger(z) ? (Array.isArray(s) && z < s.length && t(1, a = s[z]), Array.isArray(o) && z < o.length && t(0, i = o[z][0])) : t(0, i = z);
  }
  function m(k) {
    const { detail: C } = k;
    t(1, a = C);
  }
  function h(k) {
    d(k), _(1);
  }
  function g(k) {
    t(2, c = !c);
  }
  function v(k) {
    switch (k.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  xm(() => {
    document.addEventListener("keydown", v), t(0, i = n), t(1, a = r);
  }), $m(() => {
    document.removeEventListener("keydown", v);
  });
  const w = () => _(0), b = () => _(-1), y = () => _(1);
  return l.$$set = (k) => {
    "label" in k && t(10, n = k.label), "currentLabel" in k && t(0, i = k.currentLabel), "choices" in k && t(3, o = k.choices), "choicesColors" in k && t(11, s = k.choicesColors), "color" in k && t(12, r = k.color), "currentColor" in k && t(1, a = k.currentColor), "showRemove" in k && t(4, f = k.showRemove), "labelDetailLock" in k && t(2, c = k.labelDetailLock);
  }, [
    i,
    a,
    c,
    o,
    f,
    _,
    d,
    m,
    h,
    g,
    n,
    s,
    r,
    w,
    b,
    y
  ];
}
class Oo extends Zm {
  constructor(e) {
    super(), Gm(this, e, sg, og, Jm, {
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
const ge = (l, e, t) => Math.min(Math.max(l, e), t);
function fo(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class co {
  constructor(e, t, n, i, o, s, r, a, f, c, u, _, d = "rgb(255, 255, 255)", m = 0.5, h = 25, g = 8, v = 2, w = 4, b = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (y) => {
      if (this.isDragging) {
        let k = (y.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, C = (y.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = ge(k, -this._xmin, z - this._xmax), C = ge(C, -this._ymin, S - this._ymax), this._xmin += k, this._ymin += C, this._xmax += k, this._ymax += C, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (y) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(y.clientX, y.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, C = (C - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (y) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ge(this._xmin, 0, k - this.minSize), this._ymin = ge(this._ymin, 0, C - this.minSize), this._xmax = ge(this._xmax, this.minSize, k), this._ymax = ge(this._ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > C ? (this._ymin -= this._ymax - C, this._ymax = C) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (y) => {
      if (this.isResizing) {
        const k = y.clientX, C = y.clientY, z = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, S = (C - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, p = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += z, this._ymin += S, this._xmin = ge(this._xmin, 0, this._xmax - this.minSize), this._ymin = ge(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += z, this._ymin += S, this._xmax = ge(this._xmax, this._xmin + this.minSize, M), this._ymin = ge(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += z, this._ymax += S, this._xmax = ge(this._xmax, this._xmin + this.minSize, M), this._ymax = ge(this._ymax, this._ymin + this.minSize, p);
            break;
          case 3:
            this._xmin += z, this._ymax += S, this._xmin = ge(this._xmin, 0, this._xmax - this.minSize), this._ymax = ge(this._ymax, this._ymin + this.minSize, p);
            break;
          case 4:
            this._ymin += S, this._ymin = ge(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += z, this._xmax = ge(this._xmax, this._xmin + this.minSize, M);
            break;
          case 6:
            this._ymax += S, this._ymax = ge(this._ymax, this._ymin + this.minSize, p);
            break;
          case 7:
            this._xmin += z, this._xmin = ge(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = i, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = b, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = v, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = d, this.alpha = m, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = fo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = fo(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = fo(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
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
      const i = this.resizeHandles[n];
      if (e >= i.xmin && e <= i.xmax && t >= i.ymin && t <= i.ymax)
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
    const [t, n, i, o] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - o, this._xmax = this.canvasWindow.imageWidth - i, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = i, this._xmax = o, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const $t = [
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
], Xl = (l, e, t) => Math.min(Math.max(l, e), t);
class ag {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, i = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Xl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Xl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? i = Xl(i, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : i = Xl(i, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += i, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, i = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = i);
  }
}
const {
  SvelteComponent: rg,
  append: ct,
  attr: ke,
  binding_callbacks: fg,
  bubble: uo,
  check_outros: Xn,
  create_component: zt,
  destroy_component: Bt,
  detach: kt,
  element: Ct,
  empty: cg,
  group_outros: Yn,
  init: ug,
  insert: yt,
  is_function: _g,
  listen: Ye,
  mount_component: qt,
  noop: Pr,
  run_all: Zr,
  safe_not_equal: dg,
  set_style: Yl,
  space: St,
  toggle_class: Tl,
  transition_in: le,
  transition_out: ce
} = window.__gradio__svelte__internal, { onMount: hg, onDestroy: mg, createEventDispatcher: gg } = window.__gradio__svelte__internal;
function ya(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, m, h, g, v;
  n = new Qh({}), s = new o0({});
  let w = (
    /*showRemoveButton*/
    l[1] && Ca(l)
  ), b = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[16] && Sa(l);
  return u = new L_({}), m = new h_({}), {
    c() {
      e = Ct("span"), t = Ct("button"), zt(n.$$.fragment), i = St(), o = Ct("button"), zt(s.$$.fragment), r = St(), w && w.c(), a = St(), b && b.c(), f = St(), c = Ct("button"), zt(u.$$.fragment), _ = St(), d = Ct("button"), zt(m.$$.fragment), ke(t, "class", "icon svelte-1m8vz1h"), ke(t, "aria-label", "Create box"), Tl(
        t,
        "selected",
        /*mode*/
        l[12] === /*Mode*/
        l[9].creation
      ), ke(o, "class", "icon svelte-1m8vz1h"), ke(o, "aria-label", "Edit boxes"), Tl(
        o,
        "selected",
        /*mode*/
        l[12] === /*Mode*/
        l[9].drag
      ), ke(c, "class", "icon svelte-1m8vz1h"), ke(c, "aria-label", "Rotate counterclockwise"), ke(d, "class", "icon svelte-1m8vz1h"), ke(d, "aria-label", "Rotate clockwise"), ke(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(y, k) {
      yt(y, e, k), ct(e, t), qt(n, t, null), ct(e, i), ct(e, o), qt(s, o, null), ct(e, r), w && w.m(e, null), ct(e, a), b && b.m(e, null), ct(e, f), ct(e, c), qt(u, c, null), ct(e, _), ct(e, d), qt(m, d, null), h = !0, g || (v = [
        Ye(
          t,
          "click",
          /*click_handler*/
          l[40]
        ),
        Ye(
          o,
          "click",
          /*click_handler_1*/
          l[41]
        ),
        Ye(
          c,
          "click",
          /*click_handler_4*/
          l[44]
        ),
        Ye(
          d,
          "click",
          /*click_handler_5*/
          l[45]
        )
      ], g = !0);
    },
    p(y, k) {
      (!h || k[0] & /*mode, Mode*/
      4608) && Tl(
        t,
        "selected",
        /*mode*/
        y[12] === /*Mode*/
        y[9].creation
      ), (!h || k[0] & /*mode, Mode*/
      4608) && Tl(
        o,
        "selected",
        /*mode*/
        y[12] === /*Mode*/
        y[9].drag
      ), /*showRemoveButton*/
      y[1] ? w ? (w.p(y, k), k[0] & /*showRemoveButton*/
      2 && le(w, 1)) : (w = Ca(y), w.c(), le(w, 1), w.m(e, a)) : w && (Yn(), ce(w, 1, 1, () => {
        w = null;
      }), Xn()), !/*disableEditBoxes*/
      y[5] && /*labelDetailLock*/
      y[16] ? b ? (b.p(y, k), k[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && le(b, 1)) : (b = Sa(y), b.c(), le(b, 1), b.m(e, f)) : b && (Yn(), ce(b, 1, 1, () => {
        b = null;
      }), Xn());
    },
    i(y) {
      h || (le(n.$$.fragment, y), le(s.$$.fragment, y), le(w), le(b), le(u.$$.fragment, y), le(m.$$.fragment, y), h = !0);
    },
    o(y) {
      ce(n.$$.fragment, y), ce(s.$$.fragment, y), ce(w), ce(b), ce(u.$$.fragment, y), ce(m.$$.fragment, y), h = !1;
    },
    d(y) {
      y && kt(e), Bt(n), Bt(s), w && w.d(), b && b.d(), Bt(u), Bt(m), g = !1, Zr(v);
    }
  };
}
function Ca(l) {
  let e, t, n, i, o;
  return t = new d0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ke(e, "class", "icon svelte-1m8vz1h"), ke(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      yt(s, e, r), qt(t, e, null), n = !0, i || (o = Ye(
        e,
        "click",
        /*click_handler_2*/
        l[42]
      ), i = !0);
    },
    p: Pr,
    i(s) {
      n || (le(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && kt(e), Bt(t), i = !1, o();
    }
  };
}
function Sa(l) {
  let e, t, n, i, o;
  return t = new p0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ke(e, "class", "icon svelte-1m8vz1h"), ke(e, "aria-label", "Edit label");
    },
    m(s, r) {
      yt(s, e, r), qt(t, e, null), n = !0, i || (o = Ye(
        e,
        "click",
        /*click_handler_3*/
        l[43]
      ), i = !0);
    },
    p: Pr,
    i(s) {
      n || (le(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && kt(e), Bt(t), i = !1, o();
    }
  };
}
function za(l) {
  let e, t;
  return e = new Oo({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? gn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[24]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[46]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function Ba(l) {
  let e, t;
  return e = new Oo({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? gn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[16]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[25]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[47]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      65536 && (o.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(o);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function qa(l) {
  let e, t;
  return e = new Oo({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? gn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[16]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    l[26]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    l[48]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      65536 && (o.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(o);
    },
    i(n) {
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function bg(l) {
  let e, t, n, i, o, s, r, a, f, c, u = (
    /*interactive*/
    l[2] && ya(l)
  ), _ = (
    /*editModalVisible*/
    l[13] && za(l)
  ), d = (
    /*newModalVisible*/
    l[14] && Ba(l)
  ), m = (
    /*editDefaultLabelVisible*/
    l[15] && qa(l)
  );
  return {
    c() {
      e = Ct("div"), t = Ct("canvas"), n = St(), u && u.c(), i = St(), _ && _.c(), o = St(), d && d.c(), s = St(), m && m.c(), r = cg(), Yl(
        t,
        "height",
        /*height*/
        l[6]
      ), Yl(
        t,
        "width",
        /*width*/
        l[7]
      ), ke(t, "class", "canvas-annotator svelte-1m8vz1h"), ke(e, "class", "canvas-container svelte-1m8vz1h"), ke(e, "tabindex", "-1");
    },
    m(h, g) {
      yt(h, e, g), ct(e, t), l[39](t), yt(h, n, g), u && u.m(h, g), yt(h, i, g), _ && _.m(h, g), yt(h, o, g), d && d.m(h, g), yt(h, s, g), m && m.m(h, g), yt(h, r, g), a = !0, f || (c = [
        Ye(
          t,
          "pointerdown",
          /*handlePointerDown*/
          l[17]
        ),
        Ye(
          t,
          "pointerup",
          /*handlePointerUp*/
          l[18]
        ),
        Ye(t, "pointermove", function() {
          _g(
            /*handlesCursor*/
            l[8] ? (
              /*handlePointerMove*/
              l[19]
            ) : null
          ) && /*handlesCursor*/
          (l[8] ? (
            /*handlePointerMove*/
            l[19]
          ) : null).apply(this, arguments);
        }),
        Ye(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[23]
        ),
        Ye(
          t,
          "wheel",
          /*handleMouseWheel*/
          l[20]
        ),
        Ye(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[29]
        ),
        Ye(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[30]
        )
      ], f = !0);
    },
    p(h, g) {
      l = h, (!a || g[0] & /*height*/
      64) && Yl(
        t,
        "height",
        /*height*/
        l[6]
      ), (!a || g[0] & /*width*/
      128) && Yl(
        t,
        "width",
        /*width*/
        l[7]
      ), /*interactive*/
      l[2] ? u ? (u.p(l, g), g[0] & /*interactive*/
      4 && le(u, 1)) : (u = ya(l), u.c(), le(u, 1), u.m(i.parentNode, i)) : u && (Yn(), ce(u, 1, 1, () => {
        u = null;
      }), Xn()), /*editModalVisible*/
      l[13] ? _ ? (_.p(l, g), g[0] & /*editModalVisible*/
      8192 && le(_, 1)) : (_ = za(l), _.c(), le(_, 1), _.m(o.parentNode, o)) : _ && (Yn(), ce(_, 1, 1, () => {
        _ = null;
      }), Xn()), /*newModalVisible*/
      l[14] ? d ? (d.p(l, g), g[0] & /*newModalVisible*/
      16384 && le(d, 1)) : (d = Ba(l), d.c(), le(d, 1), d.m(s.parentNode, s)) : d && (Yn(), ce(d, 1, 1, () => {
        d = null;
      }), Xn()), /*editDefaultLabelVisible*/
      l[15] ? m ? (m.p(l, g), g[0] & /*editDefaultLabelVisible*/
      32768 && le(m, 1)) : (m = qa(l), m.c(), le(m, 1), m.m(r.parentNode, r)) : m && (Yn(), ce(m, 1, 1, () => {
        m = null;
      }), Xn());
    },
    i(h) {
      a || (le(u), le(_), le(d), le(m), a = !0);
    },
    o(h) {
      ce(u), ce(_), ce(d), ce(m), a = !1;
    },
    d(h) {
      h && (kt(e), kt(n), kt(i), kt(o), kt(s), kt(r)), l[39](null), u && u.d(h), _ && _.d(h), d && d.d(h), m && m.d(h), f = !1, Zr(c);
    }
  };
}
function jl(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function gn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function wg(l, e, t) {
  var n;
  (function(B) {
    B[B.creation = 0] = "creation", B[B.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: b = !0 } = e, { useDefaultLabel: y = !1 } = e;
  w === null && (w = m);
  let k, C, z = null, S = -1, M = n.drag, p = new ag(O);
  u !== null && u.boxes.length == 0 && (M = n.creation);
  let W = 0, A = 0, F = 0, J = 0, x = 1, U = 0, $ = 0, E = !1, V = !1, R = !1, Z = y, ee = { label: "", color: "" };
  const G = gg();
  function O() {
    if (C) {
      if (C.clearRect(0, 0, k.width, k.height), C.save(), C.translate(p.offsetX, p.offsetY), C.scale(p.scale, p.scale), z !== null) {
        switch (u.orientation) {
          case 0:
            C.drawImage(z, 0, 0, U, $);
            break;
          case 1:
            C.translate(U, 0), C.rotate(Math.PI / 2), C.drawImage(z, 0, 0, $, U);
            break;
          case 2:
            C.translate(U, $), C.rotate(Math.PI), C.drawImage(z, 0, 0, U, $);
            break;
          case 3:
            C.translate(0, $), C.rotate(-Math.PI / 2), C.drawImage(z, 0, 0, $, U);
            break;
        }
        C.restore();
      }
      for (const B of u.boxes.slice().reverse())
        B.render(C);
    }
  }
  function H(B) {
    t(11, S = B), u.boxes.forEach((X) => {
      X.setSelected(!1);
    }), B >= 0 && B < u.boxes.length && u.boxes[B].setSelected(!0), O();
  }
  function je(B) {
    o && (B.target instanceof Element && B.target.hasPointerCapture(B.pointerId) && B.target.releasePointerCapture(B.pointerId), M === n.creation ? Ke(B) : M === n.drag && L(B));
  }
  function L(B) {
    console.log("clickBox function called, mode:", M === n.drag ? "drag" : "creation");
    const X = k.getBoundingClientRect(), Q = B.clientX - X.left, se = B.clientY - X.top;
    let ue = !1;
    for (const [ne, fe] of u.boxes.entries()) {
      const pl = fe.indexOfPointInsideHandle(Q, se);
      if (pl >= 0) {
        ue = !0, H(ne), fe.startResize(pl, B);
        return;
      }
    }
    for (const [ne, fe] of u.boxes.entries())
      if (fe.isPointInsideBox(Q, se)) {
        ue = !0, H(ne), fe.startDrag(B);
        return;
      }
    if (!ue) {
      if (v || H(-1), console.log("No box selected, checking if we should dispatch select event"), M === n.drag) {
        console.log("Mode is drag, calculating coordinates");
        const ne = (Q - p.offsetX) / x / p.scale, fe = (se - p.offsetY) / x / p.scale;
        console.log("Click detected in drag mode:", {
          mouseX: Q,
          mouseY: se,
          imageX: ne,
          imageY: fe,
          scaleFactor: x,
          "canvasWindow.scale": p.scale,
          "canvasWindow.offsetX": p.offsetX,
          "canvasWindow.offsetY": p.offsetY
        }), z && ne >= 0 && ne <= z.naturalWidth && fe >= 0 && fe <= z.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(ne), Math.round(fe)]), G("select", {
          coordinates: [Math.round(ne), Math.round(fe)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!z,
          imageX: ne,
          imageY: fe,
          naturalWidth: z == null ? void 0 : z.naturalWidth,
          naturalHeight: z == null ? void 0 : z.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", M);
      p.startDrag(B);
    }
  }
  function Y(B) {
    G("change");
  }
  function te(B) {
    if (u === null || M !== n.drag)
      return;
    const X = k.getBoundingClientRect(), Q = B.clientX - X.left, se = B.clientY - X.top;
    for (const [ue, ne] of u.boxes.entries()) {
      const fe = ne.indexOfPointInsideHandle(Q, se);
      if (fe >= 0) {
        t(10, k.style.cursor = ne.resizeHandles[fe].cursor, k);
        return;
      }
    }
    t(10, k.style.cursor = "default", k);
  }
  function ie(B) {
    if (o)
      switch (B.key) {
        case "Delete":
          At();
          break;
      }
  }
  function D(B) {
    B.preventDefault();
    const X = 1 / (1 + B.deltaY / 1e3 * 0.5), Q = parseFloat((p.scale * X).toFixed(2)), se = Q < 1 ? 1 : Q, ue = k.getBoundingClientRect(), ne = B.clientX - ue.left, fe = B.clientY - ue.top, pl = (ne - p.offsetX) / p.scale, of = (fe - p.offsetY) / p.scale;
    p.offsetX = ne - pl * se, p.offsetY = fe - of * se, p.scale = se, O();
  }
  function Ke(B) {
    const X = k.getBoundingClientRect(), Q = (B.clientX - X.left - p.offsetX) / x / p.scale, se = (B.clientY - X.top - p.offsetY) / x / p.scale;
    let ue;
    d.length > 0 ? ue = jl(d[0]) : v ? u.boxes.length > 0 ? ue = u.boxes[0].color : ue = $t[0] : ue = $t[u.boxes.length % $t.length];
    let ne = new co(O, Se, p, W, A, F, J, "", Q, se, Q, se, ue, s, r, a, f, c);
    ne.startCreating(B, X.left, X.top), v ? t(0, u.boxes = [ne], u) : t(0, u.boxes = [ne, ...u.boxes], u), H(0), O(), G("change");
  }
  function Fe() {
    t(12, M = n.creation), t(10, k.style.cursor = "crosshair", k);
  }
  function Je() {
    t(12, M = n.drag), t(10, k.style.cursor = "default", k);
  }
  function Se() {
    S >= 0 && S < u.boxes.length && (u.boxes[S].getArea() < 1 ? At() : (m || (Z ? pi() : t(14, V = !0)), v && Je()));
  }
  function Qe() {
    S >= 0 && S < u.boxes.length && !m && t(13, E = !0);
  }
  function xe(B) {
    o && Qe();
  }
  function Zt(B) {
    t(13, E = !1);
    const { detail: X } = B;
    let Q = X.label, se = X.color, ue = X.ret;
    if (S >= 0 && S < u.boxes.length) {
      let ne = u.boxes[S];
      ue == 1 ? (ne.label = Q, ne.color = jl(se), O(), G("change")) : ue == -1 && At();
    }
  }
  function wi(B) {
    t(14, V = !1);
    const { detail: X } = B;
    let Q = X.label, se = X.color, ue = X.ret, ne = X.lock;
    if (S >= 0 && S < u.boxes.length) {
      let fe = u.boxes[S];
      ue == 1 ? (t(16, Z = ne), ee.label = Q, ee.color = se, fe.label = Q, fe.color = jl(se), O(), G("change")) : At();
    }
  }
  function vi(B) {
    t(15, R = !1);
    const { detail: X } = B;
    let Q = X.label, se = X.color, ue = X.ret, ne = X.lock;
    ue == 1 && (t(16, Z = ne), ee.label = Q, ee.color = se);
  }
  function pi() {
    if (S >= 0 && S < u.boxes.length) {
      let B = u.boxes[S];
      B.label = ee.label, ee.color !== "" && (B.color = jl(ee.color)), O(), G("change");
    }
  }
  function At() {
    S >= 0 && S < u.boxes.length && (u.boxes.splice(S, 1), H(-1), v && Fe(), G("change"));
  }
  function q(B) {
    t(0, u.orientation = ((u.orientation + B) % 4 + 4) % 4, u), p.orientation = u.orientation, Ue();
    for (const X of u.boxes)
      X.onRotate(B);
    O();
  }
  function Ue() {
    if (k) {
      if (x = 1, t(10, k.width = k.clientWidth, k), p.setRotatedImage(z), z !== null) {
        if (p.imageRotatedWidth > k.width)
          x = k.width / p.imageRotatedWidth, U = Math.round(p.imageRotatedWidth * x), $ = Math.round(p.imageRotatedHeight * x), W = 0, A = 0, F = U, J = $, t(10, k.height = $, k);
        else {
          U = p.imageRotatedWidth, $ = p.imageRotatedHeight;
          var B = (k.width - U) / 2;
          W = B, A = 0, F = B + U, J = $, t(10, k.height = $, k);
        }
        p.imageWidth = U, p.imageHeight = $;
      } else
        W = 0, A = 0, F = k.width, J = k.height, t(10, k.height = k.clientHeight, k);
      if (p.resize(k.width, k.height, W, A), F > 0 && J > 0)
        for (const X of u.boxes)
          X.canvasXmin = W, X.canvasYmin = A, X.canvasXmax = F, X.canvasYmax = J, X.setScaleFactor(x);
      O(), G("change");
    }
  }
  const mt = new ResizeObserver(Ue);
  function pn() {
    for (let B = 0; B < u.boxes.length; B++) {
      let X = u.boxes[B];
      if (!(X instanceof co)) {
        let Q = "", se = "";
        X.hasOwnProperty("color") ? (Q = X.color, Array.isArray(Q) && Q.length === 3 && (Q = `rgb(${Q[0]}, ${Q[1]}, ${Q[2]})`)) : Q = $t[B % $t.length], X.hasOwnProperty("label") && (se = X.label), X = new co(O, Se, p, W, A, F, J, se, X.xmin, X.ymin, X.xmax, X.ymax, Q, s, r, a, f, c), t(0, u.boxes[B] = X, u);
      }
    }
  }
  function vl() {
    i !== null && (z === null || z.src != i) && (z = new Image(), z.src = i, z.onload = function() {
      Ue(), O();
    });
  }
  hg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let B = 0; B < _.length; B++) {
          let X = $t[B % $t.length];
          d.push(gn(X));
        }
      ee.label = _[0][0], ee.color = d[0];
    }
    C = k.getContext("2d"), mt.observe(k), S < 0 && u !== null && u.boxes.length > 0 && H(0), vl(), Ue(), O();
  });
  function Gt() {
    document.addEventListener("keydown", ie);
  }
  function kn() {
    document.removeEventListener("keydown", ie);
  }
  mg(() => {
    document.removeEventListener("keydown", ie);
  });
  function ki(B) {
    fg[B ? "unshift" : "push"](() => {
      k = B, t(10, k);
    });
  }
  const yi = () => Fe(), Gn = () => Je(), gt = () => At(), Kn = () => t(15, R = !0), $r = () => q(-1), ef = () => q(1);
  function tf(B) {
    uo.call(this, l, B);
  }
  function nf(B) {
    uo.call(this, l, B);
  }
  function lf(B) {
    uo.call(this, l, B);
  }
  return l.$$set = (B) => {
    "imageUrl" in B && t(31, i = B.imageUrl), "interactive" in B && t(2, o = B.interactive), "boxAlpha" in B && t(32, s = B.boxAlpha), "boxMinSize" in B && t(33, r = B.boxMinSize), "handleSize" in B && t(34, a = B.handleSize), "boxThickness" in B && t(35, f = B.boxThickness), "boxSelectedThickness" in B && t(36, c = B.boxSelectedThickness), "value" in B && t(0, u = B.value), "choices" in B && t(3, _ = B.choices), "choicesColors" in B && t(4, d = B.choicesColors), "disableEditBoxes" in B && t(5, m = B.disableEditBoxes), "height" in B && t(6, h = B.height), "width" in B && t(7, g = B.width), "singleBox" in B && t(37, v = B.singleBox), "showRemoveButton" in B && t(1, w = B.showRemoveButton), "handlesCursor" in B && t(8, b = B.handlesCursor), "useDefaultLabel" in B && t(38, y = B.useDefaultLabel);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (p.orientation = u.orientation, vl(), pn(), Ue(), O());
  }, [
    u,
    w,
    o,
    _,
    d,
    m,
    h,
    g,
    b,
    n,
    k,
    S,
    M,
    E,
    V,
    R,
    Z,
    je,
    Y,
    te,
    D,
    Fe,
    Je,
    xe,
    Zt,
    wi,
    vi,
    At,
    q,
    Gt,
    kn,
    i,
    s,
    r,
    a,
    f,
    c,
    v,
    y,
    ki,
    yi,
    Gn,
    gt,
    Kn,
    $r,
    ef,
    tf,
    nf,
    lf
  ];
}
class vg extends rg {
  constructor(e) {
    super(), ug(
      this,
      e,
      wg,
      bg,
      dg,
      {
        imageUrl: 31,
        interactive: 2,
        boxAlpha: 32,
        boxMinSize: 33,
        handleSize: 34,
        boxThickness: 35,
        boxSelectedThickness: 36,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 37,
        showRemoveButton: 1,
        handlesCursor: 8,
        useDefaultLabel: 38
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: pg,
  add_flush_callback: kg,
  bind: yg,
  binding_callbacks: Cg,
  create_component: Sg,
  destroy_component: zg,
  init: Bg,
  mount_component: qg,
  safe_not_equal: Dg,
  transition_in: Lg,
  transition_out: Mg
} = window.__gradio__svelte__internal, { createEventDispatcher: Eg } = window.__gradio__svelte__internal;
function Rg(l) {
  let e, t, n;
  function i(s) {
    l[20](s);
  }
  let o = {
    interactive: (
      /*interactive*/
      l[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      l[2]
    ),
    choices: (
      /*labelList*/
      l[3]
    ),
    choicesColors: (
      /*labelColors*/
      l[4]
    ),
    height: (
      /*height*/
      l[8]
    ),
    width: (
      /*width*/
      l[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[5]
    ),
    handleSize: (
      /*handleSize*/
      l[6]
    ),
    boxThickness: (
      /*boxThickness*/
      l[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[11]
    ),
    singleBox: (
      /*singleBox*/
      l[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[15]
    ),
    imageUrl: (
      /*resolved_src*/
      l[16]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new vg({ props: o }), Cg.push(() => yg(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[21]
    ), e.$on(
      "select",
      /*select_handler*/
      l[22]
    ), {
      c() {
        Sg(e.$$.fragment);
      },
      m(s, r) {
        qg(e, s, r), n = !0;
      },
      p(s, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        s[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        s[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        s[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        s[4]), r & /*height*/
        256 && (a.height = /*height*/
        s[8]), r & /*width*/
        512 && (a.width = /*width*/
        s[9]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        s[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        s[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        s[7]), r & /*boxSelectedThickness*/
        1024 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        s[10]), r & /*disableEditBoxes*/
        2048 && (a.disableEditBoxes = /*disableEditBoxes*/
        s[11]), r & /*singleBox*/
        4096 && (a.singleBox = /*singleBox*/
        s[12]), r & /*showRemoveButton*/
        8192 && (a.showRemoveButton = /*showRemoveButton*/
        s[13]), r & /*handlesCursor*/
        16384 && (a.handlesCursor = /*handlesCursor*/
        s[14]), r & /*useDefaultLabel*/
        32768 && (a.useDefaultLabel = /*useDefaultLabel*/
        s[15]), r & /*resolved_src*/
        65536 && (a.imageUrl = /*resolved_src*/
        s[16]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], kg(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Lg(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Mg(e.$$.fragment, s), n = !1;
      },
      d(s) {
        zg(e, s);
      }
    }
  );
}
function Wg(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: v } = e, { handlesCursor: w } = e, { useDefaultLabel: b } = e, y, k;
  const C = Eg();
  function z(p) {
    m = p, t(0, m);
  }
  const S = () => C("change"), M = (p) => C("select", p.detail);
  return l.$$set = (p) => {
    "src" in p && t(18, n = p.src), "interactive" in p && t(1, i = p.interactive), "boxesAlpha" in p && t(2, o = p.boxesAlpha), "labelList" in p && t(3, s = p.labelList), "labelColors" in p && t(4, r = p.labelColors), "boxMinSize" in p && t(5, a = p.boxMinSize), "handleSize" in p && t(6, f = p.handleSize), "boxThickness" in p && t(7, c = p.boxThickness), "height" in p && t(8, u = p.height), "width" in p && t(9, _ = p.width), "boxSelectedThickness" in p && t(10, d = p.boxSelectedThickness), "value" in p && t(0, m = p.value), "disableEditBoxes" in p && t(11, h = p.disableEditBoxes), "singleBox" in p && t(12, g = p.singleBox), "showRemoveButton" in p && t(13, v = p.showRemoveButton), "handlesCursor" in p && t(14, w = p.handlesCursor), "useDefaultLabel" in p && t(15, b = p.useDefaultLabel);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, y = n), t(19, k = n);
      const p = n;
      a1(p).then((W) => {
        k === p && t(16, y = W);
      });
    }
  }, [
    m,
    i,
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    h,
    g,
    v,
    w,
    b,
    y,
    C,
    n,
    k,
    z,
    S,
    M
  ];
}
class Ag extends pg {
  constructor(e) {
    super(), Bg(this, e, Wg, Rg, Dg, {
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
class Da {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Hg,
  add_flush_callback: si,
  append: Ln,
  attr: rl,
  bind: ai,
  binding_callbacks: ml,
  bubble: tl,
  check_outros: tn,
  create_component: Lt,
  create_slot: Ig,
  destroy_component: Mt,
  detach: un,
  element: dl,
  empty: Xg,
  get_all_dirty_from_scope: Yg,
  get_slot_changes: Tg,
  group_outros: nn,
  init: jg,
  insert: _n,
  mount_component: Et,
  noop: Fg,
  safe_not_equal: Ug,
  space: en,
  toggle_class: La,
  transition_in: K,
  transition_out: oe,
  update_slot_base: Vg
} = window.__gradio__svelte__internal, { createEventDispatcher: Ng, tick: Og } = window.__gradio__svelte__internal;
function Ma(l) {
  let e, t;
  return e = new p1({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [Pg] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      8388608 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Pg(l) {
  let e, t;
  return e = new ri({
    props: {
      Icon: Wu,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ea(l) {
  let e, t;
  return e = new nd({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[38]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[39]
  ), e.$on(
    "error",
    /*error_handler*/
    l[40]
  ), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ra(l) {
  let e, t, n;
  return t = new ri({
    props: { Icon: Ga, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[36]
  ), {
    c() {
      e = dl("div"), Lt(t.$$.fragment);
    },
    m(i, o) {
      _n(i, e, o), Et(t, e, null), n = !0;
    },
    p: Fg,
    i(i) {
      n || (K(t.$$.fragment, i), n = !0);
    },
    o(i) {
      oe(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && un(e), Mt(t);
    }
  };
}
function Wa(l) {
  let e;
  const t = (
    /*#slots*/
    l[37].default
  ), n = Ig(
    t,
    l,
    /*$$scope*/
    l[54],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      8388608) && Vg(
        n,
        t,
        i,
        /*$$scope*/
        i[54],
        e ? Tg(
          t,
          /*$$scope*/
          i[54],
          o,
          null
        ) : Yg(
          /*$$scope*/
          i[54]
        ),
        null
      );
    },
    i(i) {
      e || (K(n, i), e = !0);
    },
    o(i) {
      oe(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Zg(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Wa(l)
  );
  return {
    c() {
      n && n.c(), e = Xg();
    },
    m(i, o) {
      n && n.m(i, o), _n(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && K(n, 1)) : (n = Wa(i), n.c(), K(n, 1), n.m(e.parentNode, e)) : n && (nn(), oe(n, 1, 1, () => {
        n = null;
      }), tn());
    },
    i(i) {
      t || (K(n), t = !0);
    },
    o(i) {
      oe(n), t = !1;
    },
    d(i) {
      i && un(e), n && n.d(i);
    }
  };
}
function Aa(l) {
  let e, t;
  return e = new Nh({
    props: {
      root: (
        /*root*/
        l[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        l[8]
      ),
      upload: (
        /*upload*/
        l[31]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    l[45]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    l[46]
  ), e.$on(
    "error",
    /*error_handler_2*/
    l[47]
  ), e.$on(
    "drag",
    /*drag_handler*/
    l[48]
  ), e.$on(
    "upload",
    /*upload_handler*/
    l[49]
  ), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[1] & /*upload*/
      1 && (o.upload = /*upload*/
      n[31]), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ha(l) {
  let e, t, n, i;
  function o(r) {
    l[50](r);
  }
  let s = {
    height: (
      /*height*/
      l[17]
    ),
    width: (
      /*width*/
      l[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      l[12]
    ),
    labelList: (
      /*labelList*/
      l[13]
    ),
    labelColors: (
      /*labelColors*/
      l[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[15]
    ),
    interactive: (
      /*interactive*/
      l[7]
    ),
    handleSize: (
      /*handleSize*/
      l[16]
    ),
    boxThickness: (
      /*boxThickness*/
      l[19]
    ),
    singleBox: (
      /*singleBox*/
      l[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[28]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new Ag({ props: s }), ml.push(() => ai(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[51]
    ), t.$on(
      "select",
      /*select_handler*/
      l[52]
    ), {
      c() {
        e = dl("div"), Lt(t.$$.fragment), rl(e, "class", "image-frame svelte-1gjdske"), La(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        _n(r, e, a), Et(t, e, null), i = !0;
      },
      p(r, a) {
        const f = {};
        a[0] & /*height*/
        131072 && (f.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (f.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
        4096 && (f.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (f.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (f.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (f.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (f.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (f.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        524288 && (f.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (f.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (f.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (f.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (f.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], si(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && La(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (K(t.$$.fragment, r), i = !0);
      },
      o(r) {
        oe(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && un(e), Mt(t);
      }
    }
  );
}
function Ia(l) {
  let e, t, n;
  function i(s) {
    l[53](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*clear*/
      l[36]
    ),
    handle_select: (
      /*handle_select_source*/
      l[35]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new wd({ props: o }), ml.push(() => ai(e, "active_source", i)), {
      c() {
        Lt(e.$$.fragment);
      },
      m(s, r) {
        Et(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], si(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (K(e.$$.fragment, s), n = !0);
      },
      o(s) {
        oe(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Mt(e, s);
      }
    }
  );
}
function Gg(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, m, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), g;
  e = new vc({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: Ka,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let v = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Ma(l)
  ), w = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Ea(l)
  ), b = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Ra(l)
  );
  function y(p) {
    l[42](p);
  }
  function k(p) {
    l[43](p);
  }
  let C = {
    hidden: (
      /*value*/
      l[1] !== null || /*active_source*/
      l[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      l[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      l[6]
    ),
    max_file_size: (
      /*max_file_size*/
      l[25]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[26]
    ),
    stream_handler: (
      /*stream_handler*/
      l[27]
    ),
    $$slots: { default: [Zg] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[29] !== void 0 && (C.uploading = /*uploading*/
  l[29]), /*dragging*/
  l[30] !== void 0 && (C.dragging = /*dragging*/
  l[30]), f = new $1({ props: C }), l[41](f), ml.push(() => ai(f, "uploading", y)), ml.push(() => ai(f, "dragging", k)), f.$on(
    "load",
    /*handle_upload*/
    l[32]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[44]
  );
  let z = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && Aa(l)
  ), S = (
    /*value*/
    l[1] !== null && Ha(l)
  ), M = h && Ia(l);
  return {
    c() {
      Lt(e.$$.fragment), t = en(), n = dl("div"), v && v.c(), i = en(), w && w.c(), o = en(), b && b.c(), s = en(), r = dl("div"), a = dl("div"), Lt(f.$$.fragment), _ = en(), z && z.c(), d = en(), S && S.c(), m = en(), M && M.c(), rl(n, "class", "icon-buttons svelte-1gjdske"), rl(a, "class", "upload-container svelte-1gjdske"), rl(r, "data-testid", "image"), rl(r, "class", "image-container svelte-1gjdske");
    },
    m(p, W) {
      Et(e, p, W), _n(p, t, W), _n(p, n, W), v && v.m(n, null), Ln(n, i), w && w.m(n, null), Ln(n, o), b && b.m(n, null), _n(p, s, W), _n(p, r, W), Ln(r, a), Et(f, a, null), Ln(a, _), z && z.m(a, null), Ln(a, d), S && S.m(a, null), Ln(r, m), M && M.m(r, null), g = !0;
    },
    p(p, W) {
      const A = {};
      W[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      p[3]), W[0] & /*label*/
      4 && (A.label = /*label*/
      p[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      p[10] && /*value*/
      p[1] !== null ? v ? (v.p(p, W), W[0] & /*showDownloadButton, value*/
      1026 && K(v, 1)) : (v = Ma(p), v.c(), K(v, 1), v.m(n, i)) : v && (nn(), oe(v, 1, 1, () => {
        v = null;
      }), tn()), /*showShareButton*/
      p[9] && /*value*/
      p[1] !== null ? w ? (w.p(p, W), W[0] & /*showShareButton, value*/
      514 && K(w, 1)) : (w = Ea(p), w.c(), K(w, 1), w.m(n, o)) : w && (nn(), oe(w, 1, 1, () => {
        w = null;
      }), tn()), /*showClearButton*/
      p[11] && /*value*/
      p[1] !== null && /*interactive*/
      p[7] ? b ? (b.p(p, W), W[0] & /*showClearButton, value, interactive*/
      2178 && K(b, 1)) : (b = Ra(p), b.c(), K(b, 1), b.m(n, null)) : b && (nn(), oe(b, 1, 1, () => {
        b = null;
      }), tn());
      const F = {};
      W[0] & /*value, active_source*/
      3 && (F.hidden = /*value*/
      p[1] !== null || /*active_source*/
      p[0] === "webcam"), W[0] & /*active_source*/
      1 && (F.filetype = /*active_source*/
      p[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (F.root = /*root*/
      p[6]), W[0] & /*max_file_size*/
      33554432 && (F.max_file_size = /*max_file_size*/
      p[25]), W[0] & /*sources*/
      16 && (F.disable_click = !/*sources*/
      p[4].includes("upload")), W[0] & /*cli_upload*/
      67108864 && (F.upload = /*cli_upload*/
      p[26]), W[0] & /*stream_handler*/
      134217728 && (F.stream_handler = /*stream_handler*/
      p[27]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      8388608 && (F.$$scope = { dirty: W, ctx: p }), !c && W[0] & /*uploading*/
      536870912 && (c = !0, F.uploading = /*uploading*/
      p[29], si(() => c = !1)), !u && W[0] & /*dragging*/
      1073741824 && (u = !0, F.dragging = /*dragging*/
      p[30], si(() => u = !1)), f.$set(F), /*value*/
      p[1] === null && /*active_source*/
      p[0] === "webcam" ? z ? (z.p(p, W), W[0] & /*value, active_source*/
      3 && K(z, 1)) : (z = Aa(p), z.c(), K(z, 1), z.m(a, d)) : z && (nn(), oe(z, 1, 1, () => {
        z = null;
      }), tn()), /*value*/
      p[1] !== null ? S ? (S.p(p, W), W[0] & /*value*/
      2 && K(S, 1)) : (S = Ha(p), S.c(), K(S, 1), S.m(a, null)) : S && (nn(), oe(S, 1, 1, () => {
        S = null;
      }), tn()), W[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (p[4].length > 1 || /*sources*/
      p[4].includes("clipboard")) && /*value*/
      p[1] === null && /*interactive*/
      p[7]), h ? M ? (M.p(p, W), W[0] & /*sources, value, interactive*/
      146 && K(M, 1)) : (M = Ia(p), M.c(), K(M, 1), M.m(r, null)) : M && (nn(), oe(M, 1, 1, () => {
        M = null;
      }), tn());
    },
    i(p) {
      g || (K(e.$$.fragment, p), K(v), K(w), K(b), K(f.$$.fragment, p), K(z), K(S), K(M), g = !0);
    },
    o(p) {
      oe(e.$$.fragment, p), oe(v), oe(w), oe(b), oe(f.$$.fragment, p), oe(z), oe(S), oe(M), g = !1;
    },
    d(p) {
      p && (un(t), un(n), un(s), un(r)), Mt(e, p), v && v.d(), w && w.d(), b && b.d(), l[41](null), Mt(f), z && z.d(), S && S.d(), M && M.d();
    }
  };
}
function Kg(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(q, Ue, mt, pn) {
    function vl(Gt) {
      return Gt instanceof mt ? Gt : new mt(function(kn) {
        kn(Gt);
      });
    }
    return new (mt || (mt = Promise))(function(Gt, kn) {
      function ki(gt) {
        try {
          Gn(pn.next(gt));
        } catch (Kn) {
          kn(Kn);
        }
      }
      function yi(gt) {
        try {
          Gn(pn.throw(gt));
        } catch (Kn) {
          kn(Kn);
        }
      }
      function Gn(gt) {
        gt.done ? Gt(gt.value) : vl(gt.value).then(ki, yi);
      }
      Gn((pn = pn.apply(q, Ue || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: v } = e, { labelList: w } = e, { labelColors: b } = e, { boxMinSize: y } = e, { handleSize: k } = e, { height: C } = e, { width: z } = e, { boxThickness: S } = e, { disableEditBoxes: M } = e, { singleBox: p } = e, { showRemoveButton: W } = e, { handlesCursor: A } = e, { boxSelectedThickness: F } = e, { max_file_size: J = null } = e, { cli_upload: x } = e, { stream_handler: U } = e, { useDefaultLabel: $ } = e, E, V = !1, { active_source: R = null } = e;
  function Z({ detail: q }) {
    t(1, s = new Da()), t(1, s.image = q, s), G("upload");
  }
  function ee(q) {
    return o(this, void 0, void 0, function* () {
      const Ue = yield E.load_files([new File([q], "webcam.png")]), mt = (Ue == null ? void 0 : Ue[0]) || null;
      mt ? (t(1, s = new Da()), t(1, s.image = mt, s)) : t(1, s = null), yield Og(), G("change");
    });
  }
  const G = Ng();
  let O = !1;
  function H(q) {
    return o(this, void 0, void 0, function* () {
      switch (q) {
        case "clipboard":
          E.paste_clipboard();
          break;
      }
    });
  }
  function je() {
    t(1, s = null), G("clear"), G("change");
  }
  const L = async (q) => q === null ? "" : `<img src="${await V_(q.image)}" />`;
  function Y(q) {
    tl.call(this, l, q);
  }
  function te(q) {
    tl.call(this, l, q);
  }
  function ie(q) {
    ml[q ? "unshift" : "push"](() => {
      E = q, t(31, E);
    });
  }
  function D(q) {
    V = q, t(29, V);
  }
  function Ke(q) {
    O = q, t(30, O);
  }
  function Fe(q) {
    tl.call(this, l, q);
  }
  const Je = (q) => ee(q.detail), Se = (q) => ee(q.detail);
  function Qe(q) {
    tl.call(this, l, q);
  }
  function xe(q) {
    tl.call(this, l, q);
  }
  const Zt = (q) => ee(q.detail);
  function wi(q) {
    s = q, t(1, s);
  }
  const vi = () => G("change"), pi = (q) => G("select", { index: null, value: q.detail.coordinates });
  function At(q) {
    R = q, t(0, R), t(4, f);
  }
  return l.$$set = (q) => {
    "value" in q && t(1, s = q.value), "label" in q && t(2, r = q.label), "show_label" in q && t(3, a = q.show_label), "sources" in q && t(4, f = q.sources), "selectable" in q && t(5, c = q.selectable), "root" in q && t(6, u = q.root), "interactive" in q && t(7, _ = q.interactive), "i18n" in q && t(8, d = q.i18n), "showShareButton" in q && t(9, m = q.showShareButton), "showDownloadButton" in q && t(10, h = q.showDownloadButton), "showClearButton" in q && t(11, g = q.showClearButton), "boxesAlpha" in q && t(12, v = q.boxesAlpha), "labelList" in q && t(13, w = q.labelList), "labelColors" in q && t(14, b = q.labelColors), "boxMinSize" in q && t(15, y = q.boxMinSize), "handleSize" in q && t(16, k = q.handleSize), "height" in q && t(17, C = q.height), "width" in q && t(18, z = q.width), "boxThickness" in q && t(19, S = q.boxThickness), "disableEditBoxes" in q && t(20, M = q.disableEditBoxes), "singleBox" in q && t(21, p = q.singleBox), "showRemoveButton" in q && t(22, W = q.showRemoveButton), "handlesCursor" in q && t(23, A = q.handlesCursor), "boxSelectedThickness" in q && t(24, F = q.boxSelectedThickness), "max_file_size" in q && t(25, J = q.max_file_size), "cli_upload" in q && t(26, x = q.cli_upload), "stream_handler" in q && t(27, U = q.stream_handler), "useDefaultLabel" in q && t(28, $ = q.useDefaultLabel), "active_source" in q && t(0, R = q.active_source), "$$scope" in q && t(54, i = q.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    536870912 && V && je(), l.$$.dirty[0] & /*dragging*/
    1073741824 && G("drag", O), l.$$.dirty[0] & /*active_source, sources*/
    17 && !R && f && t(0, R = f[0]);
  }, [
    R,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    g,
    v,
    w,
    b,
    y,
    k,
    C,
    z,
    S,
    M,
    p,
    W,
    A,
    F,
    J,
    x,
    U,
    $,
    V,
    O,
    E,
    Z,
    ee,
    G,
    H,
    je,
    n,
    L,
    Y,
    te,
    ie,
    D,
    Ke,
    Fe,
    Je,
    Se,
    Qe,
    xe,
    Zt,
    wi,
    vi,
    pi,
    At,
    i
  ];
}
class Jg extends Hg {
  constructor(e) {
    super(), jg(
      this,
      e,
      Kg,
      Gg,
      Ug,
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
  SvelteComponent: Qg,
  attr: Gl,
  detach: Gr,
  element: Kr,
  init: xg,
  insert: Jr,
  noop: Xa,
  safe_not_equal: $g,
  src_url_equal: Ya,
  toggle_class: Ut
} = window.__gradio__svelte__internal;
function Ta(l) {
  let e, t;
  return {
    c() {
      e = Kr("img"), Ya(e.src, t = /*value*/
      l[0].url) || Gl(e, "src", t), Gl(e, "alt", "");
    },
    m(n, i) {
      Jr(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Ya(e.src, t = /*value*/
      n[0].url) && Gl(e, "src", t);
    },
    d(n) {
      n && Gr(e);
    }
  };
}
function e2(l) {
  let e, t = (
    /*value*/
    l[0] && Ta(l)
  );
  return {
    c() {
      e = Kr("div"), t && t.c(), Gl(e, "class", "container svelte-1sgcyba"), Ut(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), Ut(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), Ut(
        e,
        "selected",
        /*selected*/
        l[2]
      ), Ut(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      Jr(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Ta(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && Ut(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && Ut(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && Ut(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && Ut(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Xa,
    o: Xa,
    d(n) {
      n && Gr(e), t && t.d();
    }
  };
}
function t2(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class z2 extends Qg {
  constructor(e) {
    super(), xg(this, e, t2, e2, $g, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: n2,
  add_flush_callback: ja,
  assign: l2,
  bind: Fa,
  binding_callbacks: Ua,
  check_outros: i2,
  create_component: bn,
  destroy_component: wn,
  detach: Qr,
  empty: o2,
  flush: P,
  get_spread_object: s2,
  get_spread_update: a2,
  group_outros: r2,
  init: f2,
  insert: xr,
  mount_component: vn,
  safe_not_equal: c2,
  space: u2,
  transition_in: Rt,
  transition_out: Wt
} = window.__gradio__svelte__internal;
function _2(l) {
  let e, t;
  return e = new Jc({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [m2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      vn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function d2(l) {
  let e, t;
  return e = new nr({
    props: {
      i18n: (
        /*gradio*/
        l[31].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      vn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      1 && (o.i18n = /*gradio*/
      n[31].i18n), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function h2(l) {
  let e, t;
  return e = new nr({
    props: {
      i18n: (
        /*gradio*/
        l[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      vn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      1 && (o.i18n = /*gradio*/
      n[31].i18n), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function m2(l) {
  let e, t;
  return e = new Ka({}), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      vn(e, n, i), t = !0;
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function g2(l) {
  let e, t, n, i;
  const o = [h2, d2, _2], s = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[33] === "upload" ? 0 : (
        /*active_source*/
        a[33] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = o2();
    },
    m(a, f) {
      s[e].m(a, f), xr(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (r2(), Wt(s[c], 1, 1, () => {
        s[c] = null;
      }), i2(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Rt(t), i = !0);
    },
    o(a) {
      Wt(t), i = !1;
    },
    d(a) {
      a && Qr(n), s[e].d(a);
    }
  };
}
function b2(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[31].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[31].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = l2(a, r[_]);
  e = new l1({ props: a });
  function f(_) {
    l[34](_);
  }
  function c(_) {
    l[35](_);
  }
  let u = {
    selectable: (
      /*_selectable*/
      l[10]
    ),
    root: (
      /*root*/
      l[7]
    ),
    sources: (
      /*sources*/
      l[14]
    ),
    interactive: (
      /*interactive*/
      l[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      l[15]
    ),
    showShareButton: (
      /*show_share_button*/
      l[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      l[17]
    ),
    i18n: (
      /*gradio*/
      l[31].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      l[19]
    ),
    height: (
      /*height*/
      l[8]
    ),
    width: (
      /*width*/
      l[9]
    ),
    labelList: (
      /*label_list*/
      l[20]
    ),
    labelColors: (
      /*label_colors*/
      l[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      l[22]
    ),
    label: (
      /*label*/
      l[5]
    ),
    show_label: (
      /*show_label*/
      l[6]
    ),
    max_file_size: (
      /*gradio*/
      l[31].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[31].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[31].client.stream
    ),
    handleSize: (
      /*handle_size*/
      l[23]
    ),
    boxThickness: (
      /*box_thickness*/
      l[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      l[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      l[26]
    ),
    singleBox: (
      /*single_box*/
      l[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      l[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      l[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      l[30]
    ),
    $$slots: { default: [g2] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[33] !== void 0 && (u.active_source = /*active_source*/
    l[33]), /*value*/
    l[0] !== void 0 && (u.value = /*value*/
    l[0]), n = new Jg({ props: u }), Ua.push(() => Fa(n, "active_source", f)), Ua.push(() => Fa(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      l[36]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[37]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[38]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[39]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[40]
    ), n.$on(
      "select",
      /*select_handler*/
      l[41]
    ), n.$on(
      "share",
      /*share_handler*/
      l[42]
    ), n.$on(
      "error",
      /*error_handler*/
      l[43]
    ), {
      c() {
        bn(e.$$.fragment), t = u2(), bn(n.$$.fragment);
      },
      m(_, d) {
        vn(e, _, d), xr(_, t, d), vn(n, _, d), s = !0;
      },
      p(_, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? a2(r, [
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
          2 && s2(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(m);
        const h = {};
        d[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (h.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        _[17]), d[1] & /*gradio*/
        1 && (h.i18n = /*gradio*/
        _[31].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*height*/
        256 && (h.height = /*height*/
        _[8]), d[0] & /*width*/
        512 && (h.width = /*width*/
        _[9]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        _[6]), d[1] & /*gradio*/
        1 && (h.max_file_size = /*gradio*/
        _[31].max_file_size), d[1] & /*gradio*/
        1 && (h.cli_upload = /*gradio*/
        _[31].client.upload), d[1] & /*gradio*/
        1 && (h.stream_handler = /*gradio*/
        _[31].client.stream), d[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        _[30]), d[1] & /*$$scope, gradio, active_source*/
        8197 && (h.$$scope = { dirty: d, ctx: _ }), !i && d[1] & /*active_source*/
        4 && (i = !0, h.active_source = /*active_source*/
        _[33], ja(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        _[0], ja(() => o = !1)), n.$set(h);
      },
      i(_) {
        s || (Rt(e.$$.fragment, _), Rt(n.$$.fragment, _), s = !0);
      },
      o(_) {
        Wt(e.$$.fragment, _), Wt(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && Qr(t), wn(e, _), wn(n, _);
      }
    }
  );
}
function w2(l) {
  let e, t;
  return e = new kf({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[32] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        l[2]
      ),
      elem_classes: (
        /*elem_classes*/
        l[3]
      ),
      width: (
        /*width*/
        l[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        l[11]
      ),
      scale: (
        /*scale*/
        l[12]
      ),
      min_width: (
        /*min_width*/
        l[13]
      ),
      $$slots: { default: [b2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      vn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      2 && (o.border_mode = /*dragging*/
      n[32] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), i[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), i[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), i[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), i[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), i[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | i[1] & /*$$scope, gradio, active_source, dragging*/
      8199 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function v2(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: v = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: b } = e, { show_clear_button: y } = e, { interactive: k } = e, { boxes_alpha: C } = e, { label_list: z } = e, { label_colors: S } = e, { box_min_size: M } = e, { handle_size: p } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: F } = e, { single_box: J } = e, { show_remove_button: x } = e, { handles_cursor: U } = e, { use_default_label: $ } = e, { gradio: E } = e, V, R = null;
  function Z(D) {
    R = D, t(33, R);
  }
  function ee(D) {
    s = D, t(0, s);
  }
  const G = () => E.dispatch("change"), O = () => E.dispatch("edit"), H = () => {
    E.dispatch("clear");
  }, je = ({ detail: D }) => t(32, V = D), L = () => E.dispatch("upload"), Y = ({ detail: D }) => E.dispatch("select", D), te = ({ detail: D }) => E.dispatch("share", D), ie = ({ detail: D }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), E.dispatch("error", D);
  };
  return l.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, i = D.elem_classes), "visible" in D && t(4, o = D.visible), "value" in D && t(0, s = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, f = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, _ = D._selectable), "container" in D && t(11, d = D.container), "scale" in D && t(12, m = D.scale), "min_width" in D && t(13, h = D.min_width), "loading_status" in D && t(1, g = D.loading_status), "sources" in D && t(14, v = D.sources), "show_download_button" in D && t(15, w = D.show_download_button), "show_share_button" in D && t(16, b = D.show_share_button), "show_clear_button" in D && t(17, y = D.show_clear_button), "interactive" in D && t(18, k = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, z = D.label_list), "label_colors" in D && t(21, S = D.label_colors), "box_min_size" in D && t(22, M = D.box_min_size), "handle_size" in D && t(23, p = D.handle_size), "box_thickness" in D && t(24, W = D.box_thickness), "box_selected_thickness" in D && t(25, A = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, F = D.disable_edit_boxes), "single_box" in D && t(27, J = D.single_box), "show_remove_button" in D && t(28, x = D.show_remove_button), "handles_cursor" in D && t(29, U = D.handles_cursor), "use_default_label" in D && t(30, $ = D.use_default_label), "gradio" in D && t(31, E = D.gradio);
  }, [
    s,
    g,
    n,
    i,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    v,
    w,
    b,
    y,
    k,
    C,
    z,
    S,
    M,
    p,
    W,
    A,
    F,
    J,
    x,
    U,
    $,
    E,
    V,
    R,
    Z,
    ee,
    G,
    O,
    H,
    je,
    L,
    Y,
    te,
    ie
  ];
}
class B2 extends n2 {
  constructor(e) {
    super(), f2(
      this,
      e,
      v2,
      w2,
      c2,
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
    this.$$set({ elem_id: e }), P();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), P();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), P();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), P();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), P();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), P();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), P();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), P();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), P();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), P();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), P();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), P();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), P();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), P();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), P();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), P();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), P();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), P();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), P();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), P();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), P();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), P();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), P();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), P();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), P();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), P();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), P();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), P();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), P();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), P();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), P();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), P();
  }
}
export {
  z2 as BaseExample,
  B2 as default
};
