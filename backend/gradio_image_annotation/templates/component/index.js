const {
  SvelteComponent: mf,
  assign: gf,
  create_slot: bf,
  detach: wf,
  element: pf,
  get_all_dirty_from_scope: vf,
  get_slot_changes: kf,
  get_spread_update: yf,
  init: Cf,
  insert: Sf,
  safe_not_equal: zf,
  set_dynamic_element_data: Ks,
  set_style: Ie,
  toggle_class: ut,
  transition_in: Ga,
  transition_out: Ka,
  update_slot_base: Bf
} = window.__gradio__svelte__internal;
function Mf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), s = bf(
    l,
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
    r = gf(r, o[a]);
  return {
    c() {
      e = pf(
        /*tag*/
        i[14]
      ), s && s.c(), Ks(
        /*tag*/
        i[14]
      )(e, r), ut(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), ut(
        e,
        "padded",
        /*padding*/
        i[6]
      ), ut(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), ut(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), ut(e, "hide-container", !/*explicit_call*/
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
    m(a, f) {
      Sf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && Bf(
        s,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? kf(
          l,
          /*$$scope*/
          a[17],
          f,
          null
        ) : vf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ks(
        /*tag*/
        a[14]
      )(e, r = yf(o, [
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
      ])), ut(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), ut(
        e,
        "padded",
        /*padding*/
        a[6]
      ), ut(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), ut(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), ut(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Ie(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Ie(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Ie(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Ie(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Ie(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Ie(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ga(s, a), n = !0);
    },
    o(a) {
      Ka(s, a), n = !1;
    },
    d(a) {
      a && wf(e), s && s.d(a);
    }
  };
}
function Df(i) {
  let e, t = (
    /*tag*/
    i[14] && Mf(i)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, l) {
      t && t.m(n, l), e = !0;
    },
    p(n, [l]) {
      /*tag*/
      n[14] && t.p(n, l);
    },
    i(n) {
      e || (Ga(t, n), e = !0);
    },
    o(n) {
      Ka(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Wf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: m = !1 } = e, { container: d = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: p = null } = e, { min_width: w = 0 } = e, z = _ === "fieldset" ? "fieldset" : "div";
  const v = (y) => {
    if (y !== void 0) {
      if (typeof y == "number")
        return y + "px";
      if (typeof y == "string")
        return y;
    }
  };
  return i.$$set = (y) => {
    "height" in y && t(0, s = y.height), "width" in y && t(1, o = y.width), "elem_id" in y && t(2, r = y.elem_id), "elem_classes" in y && t(3, a = y.elem_classes), "variant" in y && t(4, f = y.variant), "border_mode" in y && t(5, c = y.border_mode), "padding" in y && t(6, u = y.padding), "type" in y && t(16, _ = y.type), "test_id" in y && t(7, h = y.test_id), "explicit_call" in y && t(8, m = y.explicit_call), "container" in y && t(9, d = y.container), "visible" in y && t(10, g = y.visible), "allow_overflow" in y && t(11, b = y.allow_overflow), "scale" in y && t(12, p = y.scale), "min_width" in y && t(13, w = y.min_width), "$$scope" in y && t(17, l = y.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    h,
    m,
    d,
    g,
    b,
    p,
    w,
    z,
    v,
    _,
    l,
    n
  ];
}
class qf extends mf {
  constructor(e) {
    super(), Cf(this, e, Wf, Df, zf, {
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
  SvelteComponent: Lf,
  attr: Ef,
  create_slot: Rf,
  detach: Hf,
  element: Xf,
  get_all_dirty_from_scope: Yf,
  get_slot_changes: Af,
  init: If,
  insert: Tf,
  safe_not_equal: Ff,
  transition_in: jf,
  transition_out: xf,
  update_slot_base: Uf
} = window.__gradio__svelte__internal;
function Vf(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Rf(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Xf("div"), l && l.c(), Ef(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Tf(s, e, o), l && l.m(e, null), t = !0;
    },
    p(s, [o]) {
      l && l.p && (!t || o & /*$$scope*/
      1) && Uf(
        l,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? Af(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Yf(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (jf(l, s), t = !0);
    },
    o(s) {
      xf(l, s), t = !1;
    },
    d(s) {
      s && Hf(e), l && l.d(s);
    }
  };
}
function Of(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (s) => {
    "$$scope" in s && t(0, l = s.$$scope);
  }, [l, n];
}
class Nf extends Lf {
  constructor(e) {
    super(), If(this, e, Of, Vf, Ff, {});
  }
}
const {
  SvelteComponent: Pf,
  attr: Js,
  check_outros: Zf,
  create_component: Gf,
  create_slot: Kf,
  destroy_component: Jf,
  detach: xi,
  element: Qf,
  empty: $f,
  get_all_dirty_from_scope: ec,
  get_slot_changes: tc,
  group_outros: nc,
  init: ic,
  insert: Ui,
  mount_component: lc,
  safe_not_equal: sc,
  set_data: oc,
  space: ac,
  text: rc,
  toggle_class: yn,
  transition_in: si,
  transition_out: Vi,
  update_slot_base: fc
} = window.__gradio__svelte__internal;
function Qs(i) {
  let e, t;
  return e = new Nf({
    props: {
      $$slots: { default: [cc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Gf(e.$$.fragment);
    },
    m(n, l) {
      lc(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l & /*$$scope, info*/
      10 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (si(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Vi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Jf(e, n);
    }
  };
}
function cc(i) {
  let e;
  return {
    c() {
      e = rc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Ui(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && oc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && xi(e);
    }
  };
}
function uc(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[2].default
  ), o = Kf(
    s,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Qs(i)
  );
  return {
    c() {
      e = Qf("span"), o && o.c(), t = ac(), r && r.c(), n = $f(), Js(e, "data-testid", "block-info"), Js(e, "class", "svelte-22c38v"), yn(e, "sr-only", !/*show_label*/
      i[0]), yn(e, "hide", !/*show_label*/
      i[0]), yn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, f) {
      Ui(a, e, f), o && o.m(e, null), Ui(a, t, f), r && r.m(a, f), Ui(a, n, f), l = !0;
    },
    p(a, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      8) && fc(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        l ? tc(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : ec(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || f & /*show_label*/
      1) && yn(e, "sr-only", !/*show_label*/
      a[0]), (!l || f & /*show_label*/
      1) && yn(e, "hide", !/*show_label*/
      a[0]), (!l || f & /*info*/
      2) && yn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && si(r, 1)) : (r = Qs(a), r.c(), si(r, 1), r.m(n.parentNode, n)) : r && (nc(), Vi(r, 1, 1, () => {
        r = null;
      }), Zf());
    },
    i(a) {
      l || (si(o, a), si(r), l = !0);
    },
    o(a) {
      Vi(o, a), Vi(r), l = !1;
    },
    d(a) {
      a && (xi(e), xi(t), xi(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function _c(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [s, o, n, l];
}
class Ja extends Pf {
  constructor(e) {
    super(), ic(this, e, _c, uc, sc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: hc,
  append: Bl,
  attr: Ci,
  create_component: dc,
  destroy_component: mc,
  detach: gc,
  element: $s,
  init: bc,
  insert: wc,
  mount_component: pc,
  safe_not_equal: vc,
  set_data: kc,
  space: yc,
  text: Cc,
  toggle_class: At,
  transition_in: Sc,
  transition_out: zc
} = window.__gradio__svelte__internal;
function Bc(i) {
  let e, t, n, l, s, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = $s("label"), t = $s("span"), dc(n.$$.fragment), l = yc(), s = Cc(
        /*label*/
        i[0]
      ), Ci(t, "class", "svelte-9gxdi0"), Ci(e, "for", ""), Ci(e, "data-testid", "block-label"), Ci(e, "class", "svelte-9gxdi0"), At(e, "hide", !/*show_label*/
      i[2]), At(e, "sr-only", !/*show_label*/
      i[2]), At(
        e,
        "float",
        /*float*/
        i[4]
      ), At(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      wc(r, e, a), Bl(e, t), pc(n, t, null), Bl(e, l), Bl(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && kc(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && At(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && At(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && At(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && At(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Sc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      zc(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && gc(e), mc(n);
    }
  };
}
function Mc(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, s, o, r];
}
class Dc extends hc {
  constructor(e) {
    super(), bc(this, e, Mc, Bc, vc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Wc,
  append: bs,
  attr: Dt,
  bubble: qc,
  create_component: Lc,
  destroy_component: Ec,
  detach: Qa,
  element: ws,
  init: Rc,
  insert: $a,
  listen: Hc,
  mount_component: Xc,
  safe_not_equal: Yc,
  set_data: Ac,
  set_style: Cn,
  space: Ic,
  text: Tc,
  toggle_class: Me,
  transition_in: Fc,
  transition_out: jc
} = window.__gradio__svelte__internal;
function eo(i) {
  let e, t;
  return {
    c() {
      e = ws("span"), t = Tc(
        /*label*/
        i[1]
      ), Dt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      $a(n, e, l), bs(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Ac(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Qa(e);
    }
  };
}
function xc(i) {
  let e, t, n, l, s, o, r, a = (
    /*show_label*/
    i[2] && eo(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = ws("button"), a && a.c(), t = Ic(), n = ws("div"), Lc(l.$$.fragment), Dt(n, "class", "svelte-1lrphxw"), Me(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Me(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Me(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Dt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Dt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Dt(
        e,
        "title",
        /*label*/
        i[1]
      ), Dt(e, "class", "svelte-1lrphxw"), Me(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Me(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Me(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Me(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Cn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Cn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Cn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(f, c) {
      $a(f, e, c), a && a.m(e, null), bs(e, t), bs(e, n), Xc(l, n, null), s = !0, o || (r = Hc(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = eo(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
      16) && Me(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!s || c & /*size*/
      16) && Me(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!s || c & /*size*/
      16) && Me(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!s || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!s || c & /*label*/
      2) && Dt(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && Dt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && Dt(
        e,
        "title",
        /*label*/
        f[1]
      ), (!s || c & /*pending*/
      8) && Me(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!s || c & /*padded*/
      32) && Me(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!s || c & /*highlight*/
      64) && Me(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!s || c & /*transparent*/
      512) && Me(
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
      s || (Fc(l.$$.fragment, f), s = !0);
    },
    o(f) {
      jc(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Qa(e), a && a.d(), Ec(l), o = !1, r();
    }
  };
}
function Uc(i, e, t) {
  let n, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: d = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(p) {
    qc.call(this, i, p);
  }
  return i.$$set = (p) => {
    "Icon" in p && t(0, l = p.Icon), "label" in p && t(1, s = p.label), "show_label" in p && t(2, o = p.show_label), "pending" in p && t(3, r = p.pending), "size" in p && t(4, a = p.size), "padded" in p && t(5, f = p.padded), "highlight" in p && t(6, c = p.highlight), "disabled" in p && t(7, u = p.disabled), "hasPopup" in p && t(8, _ = p.hasPopup), "color" in p && t(13, h = p.color), "transparent" in p && t(9, m = p.transparent), "background" in p && t(10, d = p.background), "offset" in p && t(11, g = p.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : h);
  }, [
    l,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    m,
    d,
    g,
    n,
    h,
    b
  ];
}
class fl extends Wc {
  constructor(e) {
    super(), Rc(this, e, Uc, xc, Yc, {
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
  SvelteComponent: Vc,
  append: Oc,
  attr: Ml,
  binding_callbacks: Nc,
  create_slot: Pc,
  detach: Zc,
  element: to,
  get_all_dirty_from_scope: Gc,
  get_slot_changes: Kc,
  init: Jc,
  insert: Qc,
  safe_not_equal: $c,
  toggle_class: It,
  transition_in: eu,
  transition_out: tu,
  update_slot_base: nu
} = window.__gradio__svelte__internal;
function iu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), s = Pc(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = to("div"), t = to("div"), s && s.c(), Ml(t, "class", "icon svelte-3w3rth"), Ml(e, "class", "empty svelte-3w3rth"), Ml(e, "aria-label", "Empty value"), It(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), It(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), It(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Qc(o, e, r), Oc(e, t), s && s.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && nu(
        s,
        l,
        o,
        /*$$scope*/
        o[4],
        n ? Kc(
          l,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Gc(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && It(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && It(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && It(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (eu(s, o), n = !0);
    },
    o(o) {
      tu(s, o), n = !1;
    },
    d(o) {
      o && Zc(e), s && s.d(o), i[6](null);
    }
  };
}
function lu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: h } = u.getBoundingClientRect(), { height: m } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: h };
    return h > m + 2;
  }
  function c(u) {
    Nc[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, o = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, s = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [o, r, a, n, s, l, c];
}
class su extends Vc {
  constructor(e) {
    super(), Jc(this, e, lu, iu, $c, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: ou,
  append: no,
  attr: De,
  detach: au,
  init: ru,
  insert: fu,
  noop: Dl,
  safe_not_equal: cu,
  svg_element: Wl
} = window.__gradio__svelte__internal;
function uu(i) {
  let e, t, n;
  return {
    c() {
      e = Wl("svg"), t = Wl("path"), n = Wl("circle"), De(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), De(n, "cx", "12"), De(n, "cy", "13"), De(n, "r", "4"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-camera");
    },
    m(l, s) {
      fu(l, e, s), no(e, t), no(e, n);
    },
    p: Dl,
    i: Dl,
    o: Dl,
    d(l) {
      l && au(e);
    }
  };
}
class _u extends ou {
  constructor(e) {
    super(), ru(this, e, null, uu, cu, {});
  }
}
const {
  SvelteComponent: hu,
  append: du,
  attr: tt,
  detach: mu,
  init: gu,
  insert: bu,
  noop: ql,
  safe_not_equal: wu,
  svg_element: io
} = window.__gradio__svelte__internal;
function pu(i) {
  let e, t;
  return {
    c() {
      e = io("svg"), t = io("circle"), tt(t, "cx", "12"), tt(t, "cy", "12"), tt(t, "r", "10"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "stroke-width", "1.5"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round"), tt(e, "class", "feather feather-circle");
    },
    m(n, l) {
      bu(n, e, l), du(e, t);
    },
    p: ql,
    i: ql,
    o: ql,
    d(n) {
      n && mu(e);
    }
  };
}
class vu extends hu {
  constructor(e) {
    super(), gu(this, e, null, pu, wu, {});
  }
}
const {
  SvelteComponent: ku,
  append: Ll,
  attr: nt,
  detach: yu,
  init: Cu,
  insert: Su,
  noop: El,
  safe_not_equal: zu,
  set_style: _t,
  svg_element: Si
} = window.__gradio__svelte__internal;
function Bu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Si("svg"), t = Si("g"), n = Si("path"), l = Si("path"), nt(n, "d", "M18,6L6.087,17.913"), _t(n, "fill", "none"), _t(n, "fill-rule", "nonzero"), _t(n, "stroke-width", "2px"), nt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), nt(l, "d", "M4.364,4.364L19.636,19.636"), _t(l, "fill", "none"), _t(l, "fill-rule", "nonzero"), _t(l, "stroke-width", "2px"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), _t(e, "fill-rule", "evenodd"), _t(e, "clip-rule", "evenodd"), _t(e, "stroke-linecap", "round"), _t(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      Su(s, e, o), Ll(e, t), Ll(t, n), Ll(e, l);
    },
    p: El,
    i: El,
    o: El,
    d(s) {
      s && yu(e);
    }
  };
}
class er extends ku {
  constructor(e) {
    super(), Cu(this, e, null, Bu, zu, {});
  }
}
const {
  SvelteComponent: Mu,
  append: Du,
  attr: Qn,
  detach: Wu,
  init: qu,
  insert: Lu,
  noop: Rl,
  safe_not_equal: Eu,
  svg_element: lo
} = window.__gradio__svelte__internal;
function Ru(i) {
  let e, t;
  return {
    c() {
      e = lo("svg"), t = lo("path"), Qn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Qn(t, "fill", "currentColor"), Qn(e, "id", "icon"), Qn(e, "xmlns", "http://www.w3.org/2000/svg"), Qn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Lu(n, e, l), Du(e, t);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(n) {
      n && Wu(e);
    }
  };
}
class Hu extends Mu {
  constructor(e) {
    super(), qu(this, e, null, Ru, Eu, {});
  }
}
const {
  SvelteComponent: Xu,
  append: Yu,
  attr: Sn,
  detach: Au,
  init: Iu,
  insert: Tu,
  noop: Hl,
  safe_not_equal: Fu,
  svg_element: so
} = window.__gradio__svelte__internal;
function ju(i) {
  let e, t;
  return {
    c() {
      e = so("svg"), t = so("path"), Sn(t, "fill", "currentColor"), Sn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Sn(e, "xmlns", "http://www.w3.org/2000/svg"), Sn(e, "width", "100%"), Sn(e, "height", "100%"), Sn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Tu(n, e, l), Yu(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(n) {
      n && Au(e);
    }
  };
}
class xu extends Xu {
  constructor(e) {
    super(), Iu(this, e, null, ju, Fu, {});
  }
}
const {
  SvelteComponent: Uu,
  append: Vu,
  attr: zn,
  detach: Ou,
  init: Nu,
  insert: Pu,
  noop: Xl,
  safe_not_equal: Zu,
  svg_element: oo
} = window.__gradio__svelte__internal;
function Gu(i) {
  let e, t;
  return {
    c() {
      e = oo("svg"), t = oo("path"), zn(t, "d", "M5 8l4 4 4-4z"), zn(e, "class", "dropdown-arrow svelte-145leq6"), zn(e, "xmlns", "http://www.w3.org/2000/svg"), zn(e, "width", "100%"), zn(e, "height", "100%"), zn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Pu(n, e, l), Vu(e, t);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(n) {
      n && Ou(e);
    }
  };
}
class Is extends Uu {
  constructor(e) {
    super(), Nu(this, e, null, Gu, Zu, {});
  }
}
const {
  SvelteComponent: Ku,
  append: Yl,
  attr: _e,
  detach: Ju,
  init: Qu,
  insert: $u,
  noop: Al,
  safe_not_equal: e_,
  svg_element: zi
} = window.__gradio__svelte__internal;
function t_(i) {
  let e, t, n, l;
  return {
    c() {
      e = zi("svg"), t = zi("rect"), n = zi("circle"), l = zi("polyline"), _e(t, "x", "3"), _e(t, "y", "3"), _e(t, "width", "18"), _e(t, "height", "18"), _e(t, "rx", "2"), _e(t, "ry", "2"), _e(n, "cx", "8.5"), _e(n, "cy", "8.5"), _e(n, "r", "1.5"), _e(l, "points", "21 15 16 10 5 21"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "1.5"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-image");
    },
    m(s, o) {
      $u(s, e, o), Yl(e, t), Yl(e, n), Yl(e, l);
    },
    p: Al,
    i: Al,
    o: Al,
    d(s) {
      s && Ju(e);
    }
  };
}
let tr = class extends Ku {
  constructor(e) {
    super(), Qu(this, e, null, t_, e_, {});
  }
};
const {
  SvelteComponent: n_,
  append: i_,
  attr: Bi,
  detach: l_,
  init: s_,
  insert: o_,
  noop: Il,
  safe_not_equal: a_,
  svg_element: ao
} = window.__gradio__svelte__internal;
function r_(i) {
  let e, t;
  return {
    c() {
      e = ao("svg"), t = ao("path"), Bi(t, "fill", "currentColor"), Bi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Bi(e, "xmlns", "http://www.w3.org/2000/svg"), Bi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      o_(n, e, l), i_(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && l_(e);
    }
  };
}
class nr extends n_ {
  constructor(e) {
    super(), s_(this, e, null, r_, a_, {});
  }
}
const {
  SvelteComponent: f_,
  append: Mi,
  attr: he,
  detach: c_,
  init: u_,
  insert: __,
  noop: Tl,
  safe_not_equal: h_,
  svg_element: $n
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t, n, l, s;
  return {
    c() {
      e = $n("svg"), t = $n("path"), n = $n("path"), l = $n("line"), s = $n("line"), he(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), he(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), he(l, "x1", "12"), he(l, "y1", "19"), he(l, "x2", "12"), he(l, "y2", "23"), he(s, "x1", "8"), he(s, "y1", "23"), he(s, "x2", "16"), he(s, "y2", "23"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "fill", "none"), he(e, "stroke", "currentColor"), he(e, "stroke-width", "2"), he(e, "stroke-linecap", "round"), he(e, "stroke-linejoin", "round"), he(e, "class", "feather feather-mic");
    },
    m(o, r) {
      __(o, e, r), Mi(e, t), Mi(e, n), Mi(e, l), Mi(e, s);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(o) {
      o && c_(e);
    }
  };
}
class m_ extends f_ {
  constructor(e) {
    super(), u_(this, e, null, d_, h_, {});
  }
}
const {
  SvelteComponent: g_,
  append: ro,
  attr: Oe,
  detach: b_,
  init: w_,
  insert: p_,
  noop: Fl,
  safe_not_equal: v_,
  set_style: k_,
  svg_element: jl
} = window.__gradio__svelte__internal;
function y_(i) {
  let e, t, n;
  return {
    c() {
      e = jl("svg"), t = jl("polyline"), n = jl("path"), Oe(t, "points", "1 4 1 10 7 10"), Oe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "width", "100%"), Oe(e, "height", "100%"), Oe(e, "viewBox", "0 0 24 24"), Oe(e, "fill", "none"), Oe(e, "stroke", "currentColor"), Oe(e, "stroke-width", "2"), Oe(e, "stroke-linecap", "round"), Oe(e, "stroke-linejoin", "round"), Oe(e, "class", "feather feather-rotate-ccw"), k_(e, "transform", "rotateY(180deg)");
    },
    m(l, s) {
      p_(l, e, s), ro(e, t), ro(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(l) {
      l && b_(e);
    }
  };
}
class C_ extends g_ {
  constructor(e) {
    super(), w_(this, e, null, y_, v_, {});
  }
}
const {
  SvelteComponent: S_,
  append: z_,
  attr: We,
  detach: B_,
  init: M_,
  insert: D_,
  noop: xl,
  safe_not_equal: W_,
  svg_element: fo
} = window.__gradio__svelte__internal;
function q_(i) {
  let e, t;
  return {
    c() {
      e = fo("svg"), t = fo("rect"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-square");
    },
    m(n, l) {
      D_(n, e, l), z_(e, t);
    },
    p: xl,
    i: xl,
    o: xl,
    d(n) {
      n && B_(e);
    }
  };
}
class L_ extends S_ {
  constructor(e) {
    super(), M_(this, e, null, q_, W_, {});
  }
}
const {
  SvelteComponent: E_,
  append: co,
  attr: Ne,
  detach: R_,
  init: H_,
  insert: X_,
  noop: Ul,
  safe_not_equal: Y_,
  svg_element: Vl
} = window.__gradio__svelte__internal;
function A_(i) {
  let e, t, n;
  return {
    c() {
      e = Vl("svg"), t = Vl("polyline"), n = Vl("path"), Ne(t, "points", "1 4 1 10 7 10"), Ne(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "fill", "none"), Ne(e, "stroke", "currentColor"), Ne(e, "stroke-width", "2"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round"), Ne(e, "class", "feather feather-rotate-ccw");
    },
    m(l, s) {
      X_(l, e, s), co(e, t), co(e, n);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(l) {
      l && R_(e);
    }
  };
}
class I_ extends E_ {
  constructor(e) {
    super(), H_(this, e, null, A_, Y_, {});
  }
}
const {
  SvelteComponent: T_,
  append: Ol,
  attr: ve,
  detach: F_,
  init: j_,
  insert: x_,
  noop: Nl,
  safe_not_equal: U_,
  svg_element: Di
} = window.__gradio__svelte__internal;
function V_(i) {
  let e, t, n, l;
  return {
    c() {
      e = Di("svg"), t = Di("path"), n = Di("polyline"), l = Di("line"), ve(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ve(n, "points", "17 8 12 3 7 8"), ve(l, "x1", "12"), ve(l, "y1", "3"), ve(l, "x2", "12"), ve(l, "y2", "15"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "90%"), ve(e, "height", "90%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "2"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-upload");
    },
    m(s, o) {
      x_(s, e, o), Ol(e, t), Ol(e, n), Ol(e, l);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(s) {
      s && F_(e);
    }
  };
}
let ir = class extends T_ {
  constructor(e) {
    super(), j_(this, e, null, V_, U_, {});
  }
};
const {
  SvelteComponent: O_,
  append: uo,
  attr: Tt,
  detach: N_,
  init: P_,
  insert: Z_,
  noop: Pl,
  safe_not_equal: G_,
  svg_element: Zl
} = window.__gradio__svelte__internal;
function K_(i) {
  let e, t, n;
  return {
    c() {
      e = Zl("svg"), t = Zl("path"), n = Zl("path"), Tt(t, "fill", "currentColor"), Tt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Tt(n, "fill", "currentColor"), Tt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24");
    },
    m(l, s) {
      Z_(l, e, s), uo(e, t), uo(e, n);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(l) {
      l && N_(e);
    }
  };
}
let lr = class extends O_ {
  constructor(e) {
    super(), P_(this, e, null, K_, G_, {});
  }
};
const J_ = [
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
], _o = {
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
J_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: _o[e][t],
      secondary: _o[e][n]
    }
  }),
  {}
);
class Oi extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Q_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Oi("Must be on Spaces to share.");
  let t, n, l;
  t = $_(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
  const s = new File([t], l, { type: n }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if ((a = o.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await o.json();
      throw new Oi(`Upload failed: ${f.error}`);
    }
    throw new Oi("Upload failed.");
  }
  return await o.text();
}
function $_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, s = new Uint8Array(l); l--; )
    s[l] = n.charCodeAt(l);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: eh,
  create_component: th,
  destroy_component: nh,
  init: ih,
  mount_component: lh,
  safe_not_equal: sh,
  transition_in: oh,
  transition_out: ah
} = window.__gradio__svelte__internal, { createEventDispatcher: rh } = window.__gradio__svelte__internal;
function fh(i) {
  let e, t;
  return e = new fl({
    props: {
      Icon: Hu,
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
      th(e.$$.fragment);
    },
    m(n, l) {
      lh(e, n, l), t = !0;
    },
    p(n, [l]) {
      const s = {};
      l & /*i18n*/
      4 && (s.label = /*i18n*/
      n[2]("common.share")), l & /*pending*/
      8 && (s.pending = /*pending*/
      n[3]), e.$set(s);
    },
    i(n) {
      t || (oh(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ah(e.$$.fragment, n), t = !1;
    },
    d(n) {
      nh(e, n);
    }
  };
}
function ch(i, e, t) {
  const n = rh();
  let { formatter: l } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await l(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Oi ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (f) => {
    "formatter" in f && t(0, l = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [l, s, o, r, n, a];
}
class uh extends eh {
  constructor(e) {
    super(), ih(this, e, ch, fh, sh, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: _h,
  append: rn,
  attr: ps,
  check_outros: hh,
  create_component: sr,
  destroy_component: or,
  detach: Ni,
  element: vs,
  group_outros: dh,
  init: mh,
  insert: Pi,
  mount_component: ar,
  safe_not_equal: gh,
  set_data: ks,
  space: ys,
  text: oi,
  toggle_class: ho,
  transition_in: Ki,
  transition_out: Ji
} = window.__gradio__svelte__internal;
function bh(i) {
  let e, t;
  return e = new ir({}), {
    c() {
      sr(e.$$.fragment);
    },
    m(n, l) {
      ar(e, n, l), t = !0;
    },
    i(n) {
      t || (Ki(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ji(e.$$.fragment, n), t = !1;
    },
    d(n) {
      or(e, n);
    }
  };
}
function wh(i) {
  let e, t;
  return e = new nr({}), {
    c() {
      sr(e.$$.fragment);
    },
    m(n, l) {
      ar(e, n, l), t = !0;
    },
    i(n) {
      t || (Ki(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ji(e.$$.fragment, n), t = !1;
    },
    d(n) {
      or(e, n);
    }
  };
}
function mo(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), l, s, o, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = vs("span"), t = oi("- "), l = oi(n), s = oi(" -"), o = ys(), a = oi(r), ps(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Pi(f, e, c), rn(e, t), rn(e, l), rn(e, s), Pi(f, o, c), Pi(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && ks(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && ks(a, r);
    },
    d(f) {
      f && (Ni(e), Ni(o), Ni(a));
    }
  };
}
function ph(i) {
  let e, t, n, l, s, o = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, f;
  const c = [wh, bh], u = [];
  function _(m, d) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), l = u[n] = c[n](i);
  let h = (
    /*mode*/
    i[3] !== "short" && mo(i)
  );
  return {
    c() {
      e = vs("div"), t = vs("span"), l.c(), s = ys(), r = oi(o), a = ys(), h && h.c(), ps(t, "class", "icon-wrap svelte-kzcjhc"), ho(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), ps(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, d) {
      Pi(m, e, d), rn(e, t), u[n].m(t, null), rn(e, s), rn(e, r), rn(e, a), h && h.m(e, null), f = !0;
    },
    p(m, [d]) {
      let g = n;
      n = _(m), n !== g && (dh(), Ji(u[g], 1, 1, () => {
        u[g] = null;
      }), hh(), l = u[n], l || (l = u[n] = c[n](m), l.c()), Ki(l, 1), l.m(t, null)), (!f || d & /*hovered*/
      16) && ho(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!f || d & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && ks(r, o), /*mode*/
      m[3] !== "short" ? h ? h.p(m, d) : (h = mo(m), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(m) {
      f || (Ki(l), f = !0);
    },
    o(m) {
      Ji(l), f = !1;
    },
    d(m) {
      m && Ni(e), u[n].d(), h && h.d();
    }
  };
}
function vh(i, e, t) {
  let { type: n = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, l = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, l, s, o, r, a];
}
class rr extends _h {
  constructor(e) {
    super(), mh(this, e, vh, ph, gh, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: kh,
  append: Gl,
  attr: Ct,
  check_outros: ai,
  create_component: cl,
  destroy_component: ul,
  detach: xn,
  element: pi,
  empty: yh,
  group_outros: ri,
  init: Ch,
  insert: Un,
  listen: _l,
  mount_component: hl,
  safe_not_equal: Sh,
  space: Kl,
  toggle_class: Zt,
  transition_in: me,
  transition_out: Le
} = window.__gradio__svelte__internal;
function go(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, l = (
    /*sources*/
    i[1].includes("microphone")
  ), s, o = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), f, c = t && bo(i), u = l && wo(i), _ = o && po(i), h = a && vo(i);
  return {
    c() {
      e = pi("span"), c && c.c(), n = Kl(), u && u.c(), s = Kl(), _ && _.c(), r = Kl(), h && h.c(), Ct(e, "class", "source-selection svelte-1jp3vgd"), Ct(e, "data-testid", "source-select");
    },
    m(m, d) {
      Un(m, e, d), c && c.m(e, null), Gl(e, n), u && u.m(e, null), Gl(e, s), _ && _.m(e, null), Gl(e, r), h && h.m(e, null), f = !0;
    },
    p(m, d) {
      d & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, d), d & /*sources*/
      2 && me(c, 1)) : (c = bo(m), c.c(), me(c, 1), c.m(e, n)) : c && (ri(), Le(c, 1, 1, () => {
        c = null;
      }), ai()), d & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? u ? (u.p(m, d), d & /*sources*/
      2 && me(u, 1)) : (u = wo(m), u.c(), me(u, 1), u.m(e, s)) : u && (ri(), Le(u, 1, 1, () => {
        u = null;
      }), ai()), d & /*sources*/
      2 && (o = /*sources*/
      m[1].includes("webcam")), o ? _ ? (_.p(m, d), d & /*sources*/
      2 && me(_, 1)) : (_ = po(m), _.c(), me(_, 1), _.m(e, r)) : _ && (ri(), Le(_, 1, 1, () => {
        _ = null;
      }), ai()), d & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? h ? (h.p(m, d), d & /*sources*/
      2 && me(h, 1)) : (h = vo(m), h.c(), me(h, 1), h.m(e, null)) : h && (ri(), Le(h, 1, 1, () => {
        h = null;
      }), ai());
    },
    i(m) {
      f || (me(c), me(u), me(_), me(h), f = !0);
    },
    o(m) {
      Le(c), Le(u), Le(_), Le(h), f = !1;
    },
    d(m) {
      m && xn(e), c && c.d(), u && u.d(), _ && _.d(), h && h.d();
    }
  };
}
function bo(i) {
  let e, t, n, l, s;
  return t = new ir({}), {
    c() {
      e = pi("button"), cl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Upload file"), Zt(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Un(o, e, r), hl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (me(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xn(e), ul(t), l = !1, s();
    }
  };
}
function wo(i) {
  let e, t, n, l, s;
  return t = new m_({}), {
    c() {
      e = pi("button"), cl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Record audio"), Zt(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Un(o, e, r), hl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (me(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xn(e), ul(t), l = !1, s();
    }
  };
}
function po(i) {
  let e, t, n, l, s;
  return t = new lr({}), {
    c() {
      e = pi("button"), cl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Capture from camera"), Zt(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Un(o, e, r), hl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (me(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xn(e), ul(t), l = !1, s();
    }
  };
}
function vo(i) {
  let e, t, n, l, s;
  return t = new nr({}), {
    c() {
      e = pi("button"), cl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Paste from clipboard"), Zt(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Un(o, e, r), hl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (me(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xn(e), ul(t), l = !1, s();
    }
  };
}
function zh(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && go(i)
  );
  return {
    c() {
      n && n.c(), e = yh();
    },
    m(l, s) {
      n && n.m(l, s), Un(l, e, s), t = !0;
    },
    p(l, [s]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, s), s & /*unique_sources*/
      4 && me(n, 1)) : (n = go(l), n.c(), me(n, 1), n.m(e.parentNode, e)) : n && (ri(), Le(n, 1, 1, () => {
        n = null;
      }), ai());
    },
    i(l) {
      t || (me(n), t = !0);
    },
    o(l) {
      Le(n), t = !1;
    },
    d(l) {
      l && xn(e), n && n.d(l);
    }
  };
}
function Bh(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, d, g, b) {
    function p(w) {
      return w instanceof g ? w : new g(function(z) {
        z(w);
      });
    }
    return new (g || (g = Promise))(function(w, z) {
      function v(S) {
        try {
          C(b.next(S));
        } catch (W) {
          z(W);
        }
      }
      function y(S) {
        try {
          C(b.throw(S));
        } catch (W) {
          z(W);
        }
      }
      function C(S) {
        S.done ? w(S.value) : p(S.value).then(v, y);
      }
      C((b = b.apply(m, d || [])).next());
    });
  };
  let { sources: s } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(m) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, o = m), a(m);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), h = () => f("clipboard");
  return i.$$set = (m) => {
    "sources" in m && t(1, s = m.sources), "active_source" in m && t(0, o = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(s)]);
  }, [
    o,
    s,
    n,
    f,
    r,
    a,
    c,
    u,
    _,
    h
  ];
}
class Mh extends kh {
  constructor(e) {
    super(), Ch(this, e, Bh, zh, Sh, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Rn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Zi() {
}
const Dh = (i) => i;
function Wh(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function ko(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const fr = typeof window < "u";
let yo = fr ? () => window.performance.now() : () => Date.now(), cr = fr ? (i) => requestAnimationFrame(i) : Zi;
const Fn = /* @__PURE__ */ new Set();
function ur(i) {
  Fn.forEach((e) => {
    e.c(i) || (Fn.delete(e), e.f());
  }), Fn.size !== 0 && cr(ur);
}
function qh(i) {
  let e;
  return Fn.size === 0 && cr(ur), {
    promise: new Promise((t) => {
      Fn.add(e = { c: i, f: t });
    }),
    abort() {
      Fn.delete(e);
    }
  };
}
function Lh(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Eh(i, { delay: e = 0, duration: t = 400, easing: n = Dh } = {}) {
  const l = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * l}`
  };
}
function Co(i, { delay: e = 0, duration: t = 400, easing: n = Lh, x: l = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = ko(l), [h, m] = ko(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (d, g) => `
			transform: ${f} translate(${(1 - d) * u}${_}, ${(1 - d) * h}${m});
			opacity: ${a - c * g}`
  };
}
const Bn = [];
function Rh(i, e = Zi) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(r) {
    if (Wh(i, r) && (i = r, t)) {
      const a = !Bn.length;
      for (const f of n)
        f[1](), Bn.push(f, i);
      if (a) {
        for (let f = 0; f < Bn.length; f += 2)
          Bn[f][0](Bn[f + 1]);
        Bn.length = 0;
      }
    }
  }
  function s(r) {
    l(r(i));
  }
  function o(r, a = Zi) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(l, s) || Zi), r(i), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function So(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Cs(i, e, t, n) {
  if (typeof t == "number" || So(t)) {
    const l = n - t, s = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * l, r = i.opts.damping * s, a = (o - r) * i.inv_mass, f = (s + a) * i.dt;
    return Math.abs(f) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, So(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (l, s) => Cs(i, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const l = {};
      for (const s in t)
        l[s] = Cs(i, e[s], t[s], n[s]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function zo(i, e = {}) {
  const t = Rh(i), { stiffness: n = 0.15, damping: l = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = i, c = i, u = 1, _ = 0, h = !1;
  function m(g, b = {}) {
    c = g;
    const p = a = {};
    return i == null || b.hard || d.stiffness >= 1 && d.damping >= 1 ? (h = !0, o = yo(), f = g, t.set(i = c), Promise.resolve()) : (b.soft && (_ = 1 / ((b.soft === !0 ? 0.5 : +b.soft) * 60), u = 0), r || (o = yo(), h = !1, r = qh((w) => {
      if (h)
        return h = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const z = {
        inv_mass: u,
        opts: d,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, v = Cs(z, f, i, c);
      return o = w, f = i, t.set(i = v), z.settled && (r = null), !z.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        p === a && w();
      });
    }));
  }
  const d = {
    set: m,
    update: (g, b) => m(g(c, i), b),
    subscribe: t.subscribe,
    stiffness: n,
    damping: l,
    precision: s
  };
  return d;
}
const {
  SvelteComponent: Hh,
  append: it,
  attr: N,
  component_subscribe: Bo,
  detach: Xh,
  element: Yh,
  init: Ah,
  insert: Ih,
  noop: Mo,
  safe_not_equal: Th,
  set_style: Wi,
  svg_element: lt,
  toggle_class: Do
} = window.__gradio__svelte__internal, { onMount: Fh } = window.__gradio__svelte__internal;
function jh(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = Yh("div"), t = lt("svg"), n = lt("g"), l = lt("path"), s = lt("path"), o = lt("path"), r = lt("path"), a = lt("g"), f = lt("path"), c = lt("path"), u = lt("path"), _ = lt("path"), N(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(l, "fill", "#FF7C00"), N(l, "fill-opacity", "0.4"), N(l, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), Wi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), Wi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), Do(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(h, m) {
      Ih(h, e, m), it(e, t), it(t, n), it(n, l), it(n, s), it(n, o), it(n, r), it(t, a), it(a, f), it(a, c), it(a, u), it(a, _);
    },
    p(h, [m]) {
      m & /*$top*/
      2 && Wi(n, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), m & /*$bottom*/
      4 && Wi(a, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), m & /*margin*/
      1 && Do(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: Mo,
    o: Mo,
    d(h) {
      h && Xh(e);
    }
  };
}
function xh(i, e, t) {
  let n, l;
  var s = this && this.__awaiter || function(h, m, d, g) {
    function b(p) {
      return p instanceof d ? p : new d(function(w) {
        w(p);
      });
    }
    return new (d || (d = Promise))(function(p, w) {
      function z(C) {
        try {
          y(g.next(C));
        } catch (S) {
          w(S);
        }
      }
      function v(C) {
        try {
          y(g.throw(C));
        } catch (S) {
          w(S);
        }
      }
      function y(C) {
        C.done ? p(C.value) : b(C.value).then(z, v);
      }
      y((g = g.apply(h, m || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = zo([0, 0]);
  Bo(i, r, (h) => t(1, n = h));
  const a = zo([0, 0]);
  Bo(i, a, (h) => t(2, l = h));
  let f;
  function c() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return s(this, void 0, void 0, function* () {
      yield c(), f || u();
    });
  }
  function _() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Fh(() => (_(), () => f = !0)), i.$$set = (h) => {
    "margin" in h && t(0, o = h.margin);
  }, [o, n, l, r, a];
}
class Uh extends Hh {
  constructor(e) {
    super(), Ah(this, e, xh, jh, Th, { margin: 0 });
  }
}
const {
  SvelteComponent: Vh,
  append: fn,
  attr: rt,
  binding_callbacks: Wo,
  check_outros: Ss,
  create_component: _r,
  create_slot: hr,
  destroy_component: dr,
  destroy_each: mr,
  detach: T,
  element: kt,
  empty: Vn,
  ensure_array_like: Qi,
  get_all_dirty_from_scope: gr,
  get_slot_changes: br,
  group_outros: zs,
  init: Oh,
  insert: F,
  mount_component: wr,
  noop: Bs,
  safe_not_equal: Nh,
  set_data: Je,
  set_style: Nt,
  space: Ke,
  text: fe,
  toggle_class: Ge,
  transition_in: at,
  transition_out: yt,
  update_slot_base: pr
} = window.__gradio__svelte__internal, { tick: Ph } = window.__gradio__svelte__internal, { onDestroy: Zh } = window.__gradio__svelte__internal, { createEventDispatcher: Gh } = window.__gradio__svelte__internal, Kh = (i) => ({}), qo = (i) => ({}), Jh = (i) => ({}), Lo = (i) => ({});
function Eo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ro(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Qh(i) {
  let e, t, n, l, s = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new fl({
    props: {
      Icon: er,
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
  const f = (
    /*#slots*/
    i[30].error
  ), c = hr(
    f,
    i,
    /*$$scope*/
    i[29],
    qo
  );
  return {
    c() {
      e = kt("div"), _r(t.$$.fragment), n = Ke(), l = kt("span"), o = fe(s), r = Ke(), c && c.c(), rt(e, "class", "clear-status svelte-16nch4a"), rt(l, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      F(u, e, _), wr(t, e, null), F(u, n, _), F(u, l, _), fn(l, o), F(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const h = {};
      _[0] & /*i18n*/
      2 && (h.label = /*i18n*/
      u[1]("common.clear")), t.$set(h), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Je(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && pr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? br(
          f,
          /*$$scope*/
          u[29],
          _,
          Kh
        ) : gr(
          /*$$scope*/
          u[29]
        ),
        qo
      );
    },
    i(u) {
      a || (at(t.$$.fragment, u), at(c, u), a = !0);
    },
    o(u) {
      yt(t.$$.fragment, u), yt(c, u), a = !1;
    },
    d(u) {
      u && (T(e), T(n), T(l), T(r)), dr(t), c && c.d(u);
    }
  };
}
function $h(i) {
  let e, t, n, l, s, o, r, a, f, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ho(i)
  );
  function u(w, z) {
    if (
      /*progress*/
      w[7]
    ) return nd;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return td;
    if (
      /*queue_position*/
      w[2] === 0
    ) return ed;
  }
  let _ = u(i), h = _ && _(i), m = (
    /*timer*/
    i[5] && Ao(i)
  );
  const d = [od, sd], g = [];
  function b(w, z) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = b(i)) && (o = g[s] = d[s](i));
  let p = !/*timer*/
  i[5] && Vo(i);
  return {
    c() {
      c && c.c(), e = Ke(), t = kt("div"), h && h.c(), n = Ke(), m && m.c(), l = Ke(), o && o.c(), r = Ke(), p && p.c(), a = Vn(), rt(t, "class", "progress-text svelte-16nch4a"), Ge(
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
    m(w, z) {
      c && c.m(w, z), F(w, e, z), F(w, t, z), h && h.m(t, null), fn(t, n), m && m.m(t, null), F(w, l, z), ~s && g[s].m(w, z), F(w, r, z), p && p.m(w, z), F(w, a, z), f = !0;
    },
    p(w, z) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? c ? c.p(w, z) : (c = Ho(w), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(w)) && h ? h.p(w, z) : (h && h.d(1), h = _ && _(w), h && (h.c(), h.m(t, n))), /*timer*/
      w[5] ? m ? m.p(w, z) : (m = Ao(w), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || z[0] & /*variant*/
      256) && Ge(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!f || z[0] & /*variant*/
      256) && Ge(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let v = s;
      s = b(w), s === v ? ~s && g[s].p(w, z) : (o && (zs(), yt(g[v], 1, 1, () => {
        g[v] = null;
      }), Ss()), ~s ? (o = g[s], o ? o.p(w, z) : (o = g[s] = d[s](w), o.c()), at(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? p && (zs(), yt(p, 1, 1, () => {
        p = null;
      }), Ss()) : p ? (p.p(w, z), z[0] & /*timer*/
      32 && at(p, 1)) : (p = Vo(w), p.c(), at(p, 1), p.m(a.parentNode, a));
    },
    i(w) {
      f || (at(o), at(p), f = !0);
    },
    o(w) {
      yt(o), yt(p), f = !1;
    },
    d(w) {
      w && (T(e), T(t), T(l), T(r), T(a)), c && c.d(w), h && h.d(), m && m.d(), ~s && g[s].d(w), p && p.d(w);
    }
  };
}
function Ho(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = kt("div"), rt(e, "class", "eta-bar svelte-16nch4a"), Nt(e, "transform", t);
    },
    m(n, l) {
      F(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Nt(e, "transform", t);
    },
    d(n) {
      n && T(e);
    }
  };
}
function ed(i) {
  let e;
  return {
    c() {
      e = fe("processing |");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: Bs,
    d(t) {
      t && T(e);
    }
  };
}
function td(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, s, o;
  return {
    c() {
      e = fe("queue: "), n = fe(t), l = fe("/"), s = fe(
        /*queue_size*/
        i[3]
      ), o = fe(" |");
    },
    m(r, a) {
      F(r, e, a), F(r, n, a), F(r, l, a), F(r, s, a), F(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Je(n, t), a[0] & /*queue_size*/
      8 && Je(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (T(e), T(n), T(l), T(s), T(o));
    }
  };
}
function nd(i) {
  let e, t = Qi(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Yo(Ro(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Vn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      F(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress*/
      128) {
        t = Qi(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ro(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Yo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && T(e), mr(n, l);
    }
  };
}
function Xo(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? ld : id
    );
  }
  let a = r(i), f = a(i);
  return {
    c() {
      f.c(), e = Ke(), n = fe(t), l = fe(" | "), o = fe(s);
    },
    m(c, u) {
      f.m(c, u), F(c, e, u), F(c, n, u), F(c, l, u), F(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Je(n, t);
    },
    d(c) {
      c && (T(e), T(n), T(l), T(o)), f.d(c);
    }
  };
}
function id(i) {
  let e = Rn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = fe(e);
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Rn(
        /*p*/
        n[41].index || 0
      ) + "") && Je(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function ld(i) {
  let e = Rn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Rn(
    /*p*/
    i[41].length
  ) + "", s;
  return {
    c() {
      t = fe(e), n = fe("/"), s = fe(l);
    },
    m(o, r) {
      F(o, t, r), F(o, n, r), F(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Rn(
        /*p*/
        o[41].index || 0
      ) + "") && Je(t, e), r[0] & /*progress*/
      128 && l !== (l = Rn(
        /*p*/
        o[41].length
      ) + "") && Je(s, l);
    },
    d(o) {
      o && (T(t), T(n), T(s));
    }
  };
}
function Yo(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Xo(i)
  );
  return {
    c() {
      t && t.c(), e = Vn();
    },
    m(n, l) {
      t && t.m(n, l), F(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Xo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Ao(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = fe(
        /*formatted_timer*/
        i[20]
      ), n = fe(t), l = fe("s");
    },
    m(s, o) {
      F(s, e, o), F(s, n, o), F(s, l, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Je(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Je(n, t);
    },
    d(s) {
      s && (T(e), T(n), T(l));
    }
  };
}
function sd(i) {
  let e, t;
  return e = new Uh({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      _r(e.$$.fragment);
    },
    m(n, l) {
      wr(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*variant*/
      256 && (s.margin = /*variant*/
      n[8] === "default"), e.$set(s);
    },
    i(n) {
      t || (at(e.$$.fragment, n), t = !0);
    },
    o(n) {
      yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dr(e, n);
    }
  };
}
function od(i) {
  let e, t, n, l, s, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Io(i)
  );
  return {
    c() {
      e = kt("div"), t = kt("div"), r && r.c(), n = Ke(), l = kt("div"), s = kt("div"), rt(t, "class", "progress-level-inner svelte-16nch4a"), rt(s, "class", "progress-bar svelte-16nch4a"), Nt(s, "width", o), rt(l, "class", "progress-bar-wrap svelte-16nch4a"), rt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      F(a, e, f), fn(e, t), r && r.m(t, null), fn(e, n), fn(e, l), fn(l, s), i[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Io(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Nt(s, "width", o);
    },
    i: Bs,
    o: Bs,
    d(a) {
      a && T(e), r && r.d(), i[31](null);
    }
  };
}
function Io(i) {
  let e, t = Qi(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Uo(Eo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Vn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      F(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = Qi(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Eo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Uo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && T(e), mr(n, l);
    }
  };
}
function To(i) {
  let e, t, n, l, s = (
    /*i*/
    i[43] !== 0 && ad()
  ), o = (
    /*p*/
    i[41].desc != null && Fo(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && jo()
  ), a = (
    /*progress_level*/
    i[14] != null && xo(i)
  );
  return {
    c() {
      s && s.c(), e = Ke(), o && o.c(), t = Ke(), r && r.c(), n = Ke(), a && a.c(), l = Vn();
    },
    m(f, c) {
      s && s.m(f, c), F(f, e, c), o && o.m(f, c), F(f, t, c), r && r.m(f, c), F(f, n, c), a && a.m(f, c), F(f, l, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = Fo(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = jo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = xo(f), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (T(e), T(t), T(n), T(l)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function ad(i) {
  let e;
  return {
    c() {
      e = fe(" /");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Fo(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = fe(e);
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Je(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function jo(i) {
  let e;
  return {
    c() {
      e = fe("-");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function xo(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = fe(e), n = fe("%");
    },
    m(l, s) {
      F(l, t, s), F(l, n, s);
    },
    p(l, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && Je(t, e);
    },
    d(l) {
      l && (T(t), T(n));
    }
  };
}
function Uo(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && To(i)
  );
  return {
    c() {
      t && t.c(), e = Vn();
    },
    m(n, l) {
      t && t.m(n, l), F(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = To(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Vo(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = hr(
    s,
    i,
    /*$$scope*/
    i[29],
    Lo
  );
  return {
    c() {
      e = kt("p"), t = fe(
        /*loading_text*/
        i[9]
      ), n = Ke(), o && o.c(), rt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      F(r, e, a), fn(e, t), F(r, n, a), o && o.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Je(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!l || a[0] & /*$$scope*/
      536870912) && pr(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        l ? br(
          s,
          /*$$scope*/
          r[29],
          a,
          Jh
        ) : gr(
          /*$$scope*/
          r[29]
        ),
        Lo
      );
    },
    i(r) {
      l || (at(o, r), l = !0);
    },
    o(r) {
      yt(o, r), l = !1;
    },
    d(r) {
      r && (T(e), T(n)), o && o.d(r);
    }
  };
}
function rd(i) {
  let e, t, n, l, s;
  const o = [$h, Qh], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = o[t](i)), {
    c() {
      e = kt("div"), n && n.c(), rt(e, "class", l = "wrap " + /*variant*/
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
      ), Nt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Nt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      F(f, e, c), ~t && r[t].m(e, null), i[33](e), s = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (zs(), yt(r[u], 1, 1, () => {
        r[u] = null;
      }), Ss()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), at(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && rt(e, "class", l), (!s || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Ge(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ge(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || c[0] & /*variant, show_progress, status*/
      336) && Ge(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || c[0] & /*variant, show_progress, border*/
      4416) && Ge(
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
      s || (at(n), s = !0);
    },
    o(f) {
      yt(n), s = !1;
    },
    d(f) {
      f && T(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var fd = function(i, e, t, n) {
  function l(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function r(c) {
      try {
        f(n.next(c));
      } catch (u) {
        o(u);
      }
    }
    function a(c) {
      try {
        f(n.throw(c));
      } catch (u) {
        o(u);
      }
    }
    function f(c) {
      c.done ? s(c.value) : l(c.value).then(r, a);
    }
    f((n = n.apply(i, e || [])).next());
  });
};
let qi = [], Jl = !1;
function cd(i) {
  return fd(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (qi.push(e), !Jl) Jl = !0;
      else return;
      yield Ph(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < qi.length; l++) {
          const o = qi[l].getBoundingClientRect();
          (l === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Jl = !1, qi = [];
      });
    }
  });
}
function ud(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = Gh();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: h = !0 } = e, { show_progress: m = "full" } = e, { message: d = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: p = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: z = !1 } = e, { border: v = !1 } = e, { autoscroll: y } = e, C, S = !1, W = 0, k = 0, R = null, H = null, j = 0, P = null, Q, x = null, $ = !0;
  const L = () => {
    t(0, a = t(27, R = t(19, K = null))), t(25, W = performance.now()), t(26, k = 0), S = !0, O();
  };
  function O() {
    requestAnimationFrame(() => {
      t(26, k = (performance.now() - W) / 1e3), S && O();
    });
  }
  function E() {
    t(26, k = 0), t(0, a = t(27, R = t(19, K = null))), S && (S = !1);
  }
  Zh(() => {
    S && E();
  });
  let K = null;
  function ee(X) {
    Wo[X ? "unshift" : "push"](() => {
      x = X, t(16, x), t(7, g), t(14, P), t(15, Q);
    });
  }
  const Z = () => {
    o("clear_status");
  };
  function V(X) {
    Wo[X ? "unshift" : "push"](() => {
      C = X, t(13, C);
    });
  }
  return i.$$set = (X) => {
    "i18n" in X && t(1, r = X.i18n), "eta" in X && t(0, a = X.eta), "queue_position" in X && t(2, f = X.queue_position), "queue_size" in X && t(3, c = X.queue_size), "status" in X && t(4, u = X.status), "scroll_to_output" in X && t(22, _ = X.scroll_to_output), "timer" in X && t(5, h = X.timer), "show_progress" in X && t(6, m = X.show_progress), "message" in X && t(23, d = X.message), "progress" in X && t(7, g = X.progress), "variant" in X && t(8, b = X.variant), "loading_text" in X && t(9, p = X.loading_text), "absolute" in X && t(10, w = X.absolute), "translucent" in X && t(11, z = X.translucent), "border" in X && t(12, v = X.border), "autoscroll" in X && t(24, y = X.autoscroll), "$$scope" in X && t(29, s = X.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = R), a != null && R !== a && (t(28, H = (performance.now() - W) / 1e3 + a), t(19, K = H.toFixed(1)), t(27, R = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, j = H === null || H <= 0 || !k ? null : Math.min(k / H, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, $ = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, P = g.map((X) => {
      if (X.index != null && X.length != null)
        return X.index / X.length;
      if (X.progress != null)
        return X.progress;
    })) : t(14, P = null), P ? (t(15, Q = P[P.length - 1]), x && (Q === 0 ? t(16, x.style.transition = "0", x) : t(16, x.style.transition = "150ms", x))) : t(15, Q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? L() : E()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && C && _ && (u === "pending" || u === "complete") && cd(C, y), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = k.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    h,
    m,
    g,
    b,
    p,
    w,
    z,
    v,
    C,
    P,
    Q,
    x,
    j,
    $,
    K,
    n,
    o,
    _,
    d,
    y,
    W,
    k,
    R,
    H,
    s,
    l,
    ee,
    Z,
    V
  ];
}
class _d extends Vh {
  constructor(e) {
    super(), Oh(
      this,
      e,
      ud,
      rd,
      Nh,
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
const { setContext: T2, getContext: hd } = window.__gradio__svelte__internal, dd = "WORKER_PROXY_CONTEXT_KEY";
function vr() {
  return hd(dd);
}
function md(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function kr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function yr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!md(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function gd(i) {
  if (i == null || !yr(i))
    return i;
  const e = vr();
  if (e == null)
    return i;
  const n = new URL(i, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const s = new Blob([l.body], {
      type: kr(l.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: bd,
  assign: $i,
  check_outros: Cr,
  compute_rest_props: Oo,
  create_slot: Ts,
  detach: dl,
  element: Sr,
  empty: zr,
  exclude_internal_props: wd,
  get_all_dirty_from_scope: Fs,
  get_slot_changes: js,
  get_spread_update: Br,
  group_outros: Mr,
  init: pd,
  insert: ml,
  listen: Dr,
  prevent_default: vd,
  safe_not_equal: kd,
  set_attributes: el,
  transition_in: mn,
  transition_out: gn,
  update_slot_base: xs
} = window.__gradio__svelte__internal, { createEventDispatcher: yd } = window.__gradio__svelte__internal;
function Cd(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Ts(
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
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = $i(f, a[c]);
  return {
    c() {
      e = Sr("a"), r && r.c(), el(e, f);
    },
    m(c, u) {
      ml(c, e, u), r && r.m(e, null), n = !0, l || (s = Dr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && xs(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? js(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Fs(
          /*$$scope*/
          c[7]
        ),
        null
      ), el(e, f = Br(a, [
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
      n || (mn(r, c), n = !0);
    },
    o(c) {
      gn(r, c), n = !1;
    },
    d(c) {
      c && dl(e), r && r.d(c), l = !1, s();
    }
  };
}
function Sd(i) {
  let e, t, n, l;
  const s = [Bd, zd], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = zr();
    },
    m(a, f) {
      o[e].m(a, f), ml(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Mr(), gn(o[c], 1, 1, () => {
        o[c] = null;
      }), Cr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), mn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (mn(t), l = !0);
    },
    o(a) {
      gn(t), l = !1;
    },
    d(a) {
      a && dl(n), o[e].d(a);
    }
  };
}
function zd(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[8].default
  ), o = Ts(
    s,
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
  for (let f = 0; f < r.length; f += 1)
    a = $i(a, r[f]);
  return {
    c() {
      e = Sr("a"), o && o.c(), el(e, a);
    },
    m(f, c) {
      ml(f, e, c), o && o.m(e, null), t = !0, n || (l = Dr(e, "click", vd(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && xs(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? js(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Fs(
          /*$$scope*/
          f[7]
        ),
        null
      ), el(e, a = Br(r, [
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
      t || (mn(o, f), t = !0);
    },
    o(f) {
      gn(o, f), t = !1;
    },
    d(f) {
      f && dl(e), o && o.d(f), n = !1, l();
    }
  };
}
function Bd(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Ts(
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
    m(l, s) {
      n && n.m(l, s), e = !0;
    },
    p(l, s) {
      n && n.p && (!e || s & /*$$scope*/
      128) && xs(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? js(
          t,
          /*$$scope*/
          l[7],
          s,
          null
        ) : Fs(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (mn(n, l), e = !0);
    },
    o(l) {
      gn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Md(i) {
  let e, t, n, l, s;
  const o = [Sd, Cd], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && yr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), l = zr();
    },
    m(f, c) {
      r[t].m(f, c), ml(f, l, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (Mr(), gn(r[u], 1, 1, () => {
        r[u] = null;
      }), Cr(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), mn(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      s || (mn(n), s = !0);
    },
    o(f) {
      gn(n), s = !1;
    },
    d(f) {
      f && dl(l), r[t].d(f);
    }
  };
}
function Dd(i, e, t) {
  const n = ["href", "download"];
  let l = Oo(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(m, d, g, b) {
    function p(w) {
      return w instanceof g ? w : new g(function(z) {
        z(w);
      });
    }
    return new (g || (g = Promise))(function(w, z) {
      function v(S) {
        try {
          C(b.next(S));
        } catch (W) {
          z(W);
        }
      }
      function y(S) {
        try {
          C(b.throw(S));
        } catch (W) {
          z(W);
        }
      }
      function C(S) {
        S.done ? w(S.value) : p(S.value).then(v, y);
      }
      C((b = b.apply(m, d || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = yd();
  let u = !1;
  const _ = vr();
  function h() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const d = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: d,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${d} from the Wasm worker.`);
        const b = new Blob(
          [g.body],
          {
            type: kr(g.headers, "content-type")
          }
        ), p = URL.createObjectURL(b), w = document.createElement("a");
        w.href = p, w.download = f, w.click(), URL.revokeObjectURL(p);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = $i($i({}, e), wd(m)), t(6, l = Oo(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, o = m.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    h,
    l,
    o,
    s
  ];
}
class Wd extends bd {
  constructor(e) {
    super(), pd(this, e, Dd, Md, kd, { href: 0, download: 1 });
  }
}
var qd = Object.defineProperty, Ld = (i, e, t) => e in i ? qd(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, zt = (i, e, t) => (Ld(i, typeof e != "symbol" ? e + "" : e, t), t), Wr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ei = (i, e, t) => (Wr(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Ed = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Rd = (i, e, t, n) => (Wr(i, e, "write to private field"), e.set(i, t), t), Ot;
new Intl.Collator(0, { numeric: 1 }).compare;
async function qr(i, e) {
  return i.map(
    (t) => new Hd({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Hd {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: l,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    zt(this, "path"), zt(this, "url"), zt(this, "orig_name"), zt(this, "size"), zt(this, "blob"), zt(this, "is_stream"), zt(this, "mime_type"), zt(this, "alt_text"), zt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class F2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ei(this, Ot) + t; ; ) {
          const l = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (l === -1 || l - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (l === -1)
            break;
          const o = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, o)), t = t.slice(l + 1);
        }
        Rd(this, Ot, t);
      },
      flush: (t) => {
        if (ei(this, Ot) === "")
          return;
        const n = e.allowCR && ei(this, Ot).endsWith("\r") ? ei(this, Ot).slice(0, -1) : ei(this, Ot);
        t.enqueue(n);
      }
    }), Ed(this, Ot, "");
  }
}
Ot = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Xd,
  append: Re,
  attr: on,
  detach: Lr,
  element: an,
  init: Yd,
  insert: Er,
  noop: No,
  safe_not_equal: Ad,
  set_data: tl,
  set_style: Ql,
  space: Ms,
  text: Hn,
  toggle_class: Po
} = window.__gradio__svelte__internal, { onMount: Id, createEventDispatcher: Td, onDestroy: Fd } = window.__gradio__svelte__internal;
function Zo(i) {
  let e, t, n, l, s = fi(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = an("div"), t = an("span"), n = an("div"), l = an("progress"), o = Hn(s), a = Ms(), f = an("span"), u = Hn(c), Ql(l, "visibility", "hidden"), Ql(l, "height", "0"), Ql(l, "width", "0"), l.value = r = fi(
        /*file_to_display*/
        i[2]
      ), on(l, "max", "100"), on(l, "class", "svelte-cr2edf"), on(n, "class", "progress-bar svelte-cr2edf"), on(f, "class", "file-name svelte-cr2edf"), on(e, "class", "file svelte-cr2edf");
    },
    m(_, h) {
      Er(_, e, h), Re(e, t), Re(t, n), Re(n, l), Re(l, o), Re(e, a), Re(e, f), Re(f, u);
    },
    p(_, h) {
      h & /*file_to_display*/
      4 && s !== (s = fi(
        /*file_to_display*/
        _[2]
      ) + "") && tl(o, s), h & /*file_to_display*/
      4 && r !== (r = fi(
        /*file_to_display*/
        _[2]
      )) && (l.value = r), h & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && tl(u, c);
    },
    d(_) {
      _ && Lr(e);
    }
  };
}
function jd(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    i[2] && Zo(i)
  );
  return {
    c() {
      e = an("div"), t = an("span"), n = Hn("Uploading "), s = Hn(l), o = Ms(), a = Hn(r), f = Hn("..."), c = Ms(), u && u.c(), on(t, "class", "uploading svelte-cr2edf"), on(e, "class", "wrap svelte-cr2edf"), Po(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, h) {
      Er(_, e, h), Re(e, t), Re(t, n), Re(t, s), Re(t, o), Re(t, a), Re(t, f), Re(e, c), u && u.m(e, null);
    },
    p(_, [h]) {
      h & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      _[0].length + "") && tl(s, l), h & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && tl(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, h) : (u = Zo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), h & /*progress*/
      2 && Po(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: No,
    o: No,
    d(_) {
      _ && Lr(e), u && u.d();
    }
  };
}
function fi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function xd(i) {
  let e = 0;
  return i.forEach((t) => {
    e += fi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Ud(i, e, t) {
  var n = this && this.__awaiter || function(d, g, b, p) {
    function w(z) {
      return z instanceof b ? z : new b(function(v) {
        v(z);
      });
    }
    return new (b || (b = Promise))(function(z, v) {
      function y(W) {
        try {
          S(p.next(W));
        } catch (k) {
          v(k);
        }
      }
      function C(W) {
        try {
          S(p.throw(W));
        } catch (k) {
          v(k);
        }
      }
      function S(W) {
        W.done ? z(W.value) : w(W.value).then(y, C);
      }
      S((p = p.apply(d, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((d) => Object.assign(Object.assign({}, d), { progress: 0 }));
  const h = Td();
  function m(d, g) {
    t(0, _ = _.map((b) => (b.orig_name === d && (b.progress += g), b)));
  }
  return Id(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(d) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(d.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), h("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), Fd(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (d) => {
    "upload_id" in d && t(3, l = d.upload_id), "root" in d && t(4, s = d.root), "files" in d && t(5, o = d.files), "stream_handler" in d && t(6, r = d.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && xd(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    l,
    s,
    o,
    r,
    c
  ];
}
class Vd extends Xd {
  constructor(e) {
    super(), Yd(this, e, Ud, jd, Ad, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Od,
  append: Go,
  attr: ke,
  binding_callbacks: Nd,
  bubble: Qt,
  check_outros: Rr,
  create_component: Pd,
  create_slot: Hr,
  destroy_component: Zd,
  detach: gl,
  element: Ds,
  empty: Xr,
  get_all_dirty_from_scope: Yr,
  get_slot_changes: Ar,
  group_outros: Ir,
  init: Gd,
  insert: bl,
  listen: Te,
  mount_component: Kd,
  prevent_default: $t,
  run_all: Jd,
  safe_not_equal: Qd,
  set_style: Tr,
  space: $d,
  stop_propagation: en,
  toggle_class: we,
  transition_in: Pt,
  transition_out: bn,
  update_slot_base: Fr
} = window.__gradio__svelte__internal, { createEventDispatcher: e1, tick: t1 } = window.__gradio__svelte__internal;
function n1(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), h = Hr(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ds("button"), h && h.c(), t = $d(), n = Ds("input"), ke(n, "aria-label", "file upload"), ke(n, "data-testid", "file-upload"), ke(n, "type", "file"), ke(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = s = /*file_count*/
      i[6] === "multiple" || void 0, ke(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), ke(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ke(n, "class", "svelte-1s26xmt"), ke(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ke(e, "class", "svelte-1s26xmt"), we(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), we(
        e,
        "center",
        /*center*/
        i[4]
      ), we(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), we(
        e,
        "flex",
        /*flex*/
        i[5]
      ), we(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Tr(e, "height", "100%");
    },
    m(m, d) {
      bl(m, e, d), h && h.m(e, null), Go(e, t), Go(e, n), i[34](n), f = !0, c || (u = [
        Te(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Te(e, "drag", en($t(
          /*drag_handler*/
          i[27]
        ))),
        Te(e, "dragstart", en($t(
          /*dragstart_handler*/
          i[28]
        ))),
        Te(e, "dragend", en($t(
          /*dragend_handler*/
          i[29]
        ))),
        Te(e, "dragover", en($t(
          /*dragover_handler*/
          i[30]
        ))),
        Te(e, "dragenter", en($t(
          /*dragenter_handler*/
          i[31]
        ))),
        Te(e, "dragleave", en($t(
          /*dragleave_handler*/
          i[32]
        ))),
        Te(e, "drop", en($t(
          /*drop_handler*/
          i[33]
        ))),
        Te(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Te(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Te(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Te(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, d) {
      h && h.p && (!f || d[0] & /*$$scope*/
      33554432) && Fr(
        h,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Ar(
          _,
          /*$$scope*/
          m[25],
          d,
          null
        ) : Yr(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || d[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && ke(n, "accept", l), (!f || d[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = s), (!f || d[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "directory" || void 0)) && ke(n, "webkitdirectory", o), (!f || d[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && ke(n, "mozdirectory", r), (!f || d[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && ke(e, "tabindex", a), (!f || d[0] & /*hidden*/
      512) && we(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || d[0] & /*center*/
      16) && we(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || d[0] & /*boundedheight*/
      8) && we(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || d[0] & /*flex*/
      32) && we(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || d[0] & /*disable_click*/
      128) && we(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Pt(h, m), f = !0);
    },
    o(m) {
      bn(h, m), f = !1;
    },
    d(m) {
      m && gl(e), h && h.d(m), i[34](null), c = !1, Jd(u);
    }
  };
}
function i1(i) {
  let e, t, n = !/*hidden*/
  i[9] && Ko(i);
  return {
    c() {
      n && n.c(), e = Xr();
    },
    m(l, s) {
      n && n.m(l, s), bl(l, e, s), t = !0;
    },
    p(l, s) {
      /*hidden*/
      l[9] ? n && (Ir(), bn(n, 1, 1, () => {
        n = null;
      }), Rr()) : n ? (n.p(l, s), s[0] & /*hidden*/
      512 && Pt(n, 1)) : (n = Ko(l), n.c(), Pt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Pt(n), t = !0);
    },
    o(l) {
      bn(n), t = !1;
    },
    d(l) {
      l && gl(e), n && n.d(l);
    }
  };
}
function l1(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Hr(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ds("button"), r && r.c(), ke(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ke(e, "class", "svelte-1s26xmt"), we(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), we(
        e,
        "center",
        /*center*/
        i[4]
      ), we(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), we(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Tr(e, "height", "100%");
    },
    m(a, f) {
      bl(a, e, f), r && r.m(e, null), n = !0, l || (s = Te(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Fr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Ar(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Yr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ke(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && we(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && we(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && we(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && we(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Pt(r, a), n = !0);
    },
    o(a) {
      bn(r, a), n = !1;
    },
    d(a) {
      a && gl(e), r && r.d(a), l = !1, s();
    }
  };
}
function Ko(i) {
  let e, t;
  return e = new Vd({
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
      Pd(e.$$.fragment);
    },
    m(n, l) {
      Kd(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      256 && (s.root = /*root*/
      n[8]), l[0] & /*upload_id*/
      16384 && (s.upload_id = /*upload_id*/
      n[14]), l[0] & /*file_data*/
      32768 && (s.files = /*file_data*/
      n[15]), l[0] & /*stream_handler*/
      2048 && (s.stream_handler = /*stream_handler*/
      n[11]), e.$set(s);
    },
    i(n) {
      t || (Pt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zd(e, n);
    }
  };
}
function s1(i) {
  let e, t, n, l;
  const s = [l1, i1, n1], o = [];
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
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = Xr();
    },
    m(a, f) {
      o[e].m(a, f), bl(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Ir(), bn(o[c], 1, 1, () => {
        o[c] = null;
      }), Rr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Pt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Pt(t), l = !0);
    },
    o(a) {
      bn(t), l = !1;
    },
    d(a) {
      a && gl(n), o[e].d(a);
    }
  };
}
function o1(i, e, t) {
  if (!i || i === "*" || i === "file/*" || Array.isArray(i) && i.some((l) => l === "*" || l === "file/*"))
    return !0;
  let n;
  if (typeof i == "string")
    n = i.split(",").map((l) => l.trim());
  else if (Array.isArray(i))
    n = i;
  else
    return !1;
  return n.includes(e) || n.some((l) => {
    const [s] = l.split("/").map((o) => o.trim());
    return l.endsWith("/*") && t.startsWith(s + "/");
  });
}
function a1(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(q, I, ie, se) {
    function D(Qe) {
      return Qe instanceof ie ? Qe : new ie(function(ft) {
        ft(Qe);
      });
    }
    return new (ie || (ie = Promise))(function(Qe, ft) {
      function $e(Be) {
        try {
          Ce(se.next(Be));
        } catch (Gt) {
          ft(Gt);
        }
      }
      function ze(Be) {
        try {
          Ce(se.throw(Be));
        } catch (Gt) {
          ft(Gt);
        }
      }
      function Ce(Be) {
        Be.done ? Qe(Be.value) : D(Be.value).then($e, ze);
      }
      Ce((se = se.apply(q, I || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: h } = e, { hidden: m = !1 } = e, { format: d = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: p = !0 } = e, { max_file_size: w = null } = e, { upload: z } = e, { stream_handler: v } = e, y, C, S;
  const W = e1(), k = ["image", "video", "audio", "text", "file"], R = (q) => q.startsWith(".") || q.endsWith("/*") ? q : k.includes(q) ? q + "/*" : "." + q;
  function H() {
    t(20, r = !r);
  }
  function j() {
    navigator.clipboard.read().then((q) => s(this, void 0, void 0, function* () {
      for (let I = 0; I < q.length; I++) {
        const ie = q[I].types.find((se) => se.startsWith("image/"));
        if (ie) {
          q[I].getType(ie).then((se) => s(this, void 0, void 0, function* () {
            const D = new File([se], `clipboard.${ie.replace("image/", "")}`);
            yield x([D]);
          }));
          break;
        }
      }
    }));
  }
  function P() {
    _ || b && (t(2, b.value = "", b), b.click());
  }
  function Q(q) {
    return s(this, void 0, void 0, function* () {
      yield t1(), t(14, y = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const I = yield z(q, h, y, w ?? 1 / 0);
        return W("load", u === "single" ? I == null ? void 0 : I[0] : I), t(1, g = !1), I || [];
      } catch (I) {
        return W("error", I.message), t(1, g = !1), [];
      }
    });
  }
  function x(q) {
    return s(this, void 0, void 0, function* () {
      if (!q.length)
        return;
      let I = q.map((ie) => new File([ie], ie instanceof File ? ie.name : "file", { type: ie.type }));
      return t(15, C = yield qr(I)), yield Q(C);
    });
  }
  function $(q) {
    return s(this, void 0, void 0, function* () {
      const I = q.target;
      if (I.files)
        if (d != "blob")
          yield x(Array.from(I.files));
        else {
          if (u === "single") {
            W("load", I.files[0]);
            return;
          }
          W("load", I.files);
        }
    });
  }
  function L(q) {
    return s(this, void 0, void 0, function* () {
      var I;
      if (t(20, r = !1), !(!((I = q.dataTransfer) === null || I === void 0) && I.files)) return;
      const ie = Array.from(q.dataTransfer.files).filter((se) => {
        const D = "." + se.name.split(".").pop();
        return D && o1(S, D, se.type) || (D && Array.isArray(o) ? o.includes(D) : D === o) ? !0 : (W("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield x(ie);
    });
  }
  function O(q) {
    Qt.call(this, i, q);
  }
  function E(q) {
    Qt.call(this, i, q);
  }
  function K(q) {
    Qt.call(this, i, q);
  }
  function ee(q) {
    Qt.call(this, i, q);
  }
  function Z(q) {
    Qt.call(this, i, q);
  }
  function V(q) {
    Qt.call(this, i, q);
  }
  function X(q) {
    Qt.call(this, i, q);
  }
  function Ve(q) {
    Nd[q ? "unshift" : "push"](() => {
      b = q, t(2, b);
    });
  }
  return i.$$set = (q) => {
    "filetype" in q && t(0, o = q.filetype), "dragging" in q && t(20, r = q.dragging), "boundedheight" in q && t(3, a = q.boundedheight), "center" in q && t(4, f = q.center), "flex" in q && t(5, c = q.flex), "file_count" in q && t(6, u = q.file_count), "disable_click" in q && t(7, _ = q.disable_click), "root" in q && t(8, h = q.root), "hidden" in q && t(9, m = q.hidden), "format" in q && t(21, d = q.format), "uploading" in q && t(1, g = q.uploading), "hidden_upload" in q && t(2, b = q.hidden_upload), "show_progress" in q && t(10, p = q.show_progress), "max_file_size" in q && t(22, w = q.max_file_size), "upload" in q && t(23, z = q.upload), "stream_handler" in q && t(11, v = q.stream_handler), "$$scope" in q && t(25, l = q.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, S = null) : typeof o == "string" ? t(16, S = R(o)) : (t(0, o = o.map(R)), t(16, S = o.join(", "))));
  }, [
    o,
    g,
    b,
    a,
    f,
    c,
    u,
    _,
    h,
    m,
    p,
    v,
    j,
    P,
    y,
    C,
    S,
    H,
    $,
    L,
    r,
    d,
    w,
    z,
    x,
    l,
    n,
    O,
    E,
    K,
    ee,
    Z,
    V,
    X,
    Ve
  ];
}
class r1 extends Od {
  constructor(e) {
    super(), Gd(
      this,
      e,
      a1,
      s1,
      Qd,
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
  SvelteComponent: f1,
  append: Li,
  attr: $l,
  create_component: c1,
  destroy_component: u1,
  detach: _1,
  element: es,
  init: h1,
  insert: d1,
  listen: m1,
  mount_component: g1,
  noop: b1,
  safe_not_equal: w1,
  set_style: p1,
  space: v1,
  text: k1,
  transition_in: y1,
  transition_out: C1
} = window.__gradio__svelte__internal, { createEventDispatcher: S1 } = window.__gradio__svelte__internal;
function z1(i) {
  let e, t, n, l, s, o = "Click to Access Webcam", r, a, f, c;
  return l = new lr({}), {
    c() {
      e = es("button"), t = es("div"), n = es("span"), c1(l.$$.fragment), s = v1(), r = k1(o), $l(n, "class", "icon-wrap svelte-fjcd9c"), $l(t, "class", "wrap svelte-fjcd9c"), $l(e, "class", "svelte-fjcd9c"), p1(e, "height", "100%");
    },
    m(u, _) {
      d1(u, e, _), Li(e, t), Li(t, n), g1(l, n, null), Li(t, s), Li(t, r), a = !0, f || (c = m1(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), f = !0);
    },
    p: b1,
    i(u) {
      a || (y1(l.$$.fragment, u), a = !0);
    },
    o(u) {
      C1(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && _1(e), u1(l), f = !1, c();
    }
  };
}
function B1(i) {
  const e = S1();
  return [e, () => e("click")];
}
class M1 extends f1 {
  constructor(e) {
    super(), h1(this, e, B1, z1, w1, {});
  }
}
function D1() {
  return navigator.mediaDevices.enumerateDevices();
}
function W1(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Jo(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((s) => (W1(s, e), s));
}
function q1(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: L1,
  action_destroyer: E1,
  add_render_callback: R1,
  append: Lt,
  attr: de,
  binding_callbacks: H1,
  check_outros: _i,
  create_component: On,
  create_in_transition: X1,
  destroy_component: Nn,
  destroy_each: Y1,
  detach: Xe,
  element: Ue,
  empty: Us,
  ensure_array_like: Qo,
  group_outros: hi,
  init: A1,
  insert: Ye,
  listen: nl,
  mount_component: Pn,
  noop: Vs,
  run_all: I1,
  safe_not_equal: T1,
  set_data: jr,
  set_input_value: Ws,
  space: bi,
  stop_propagation: F1,
  text: xr,
  toggle_class: Ei,
  transition_in: pe,
  transition_out: ye
} = window.__gradio__svelte__internal, { createEventDispatcher: j1, onMount: x1 } = window.__gradio__svelte__internal;
function $o(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function U1(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = [N1, O1], h = [];
  function m(b, p) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = h[n] = _[n](i);
  let d = !/*recording*/
  i[8] && ea(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && ta(i)
  );
  return {
    c() {
      e = Ue("div"), t = Ue("button"), l.c(), o = bi(), d && d.c(), r = bi(), g && g.c(), a = Us(), de(t, "aria-label", s = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), de(t, "class", "svelte-8hqvb6"), de(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, p) {
      Ye(b, e, p), Lt(e, t), h[n].m(t, null), Lt(e, o), d && d.m(e, null), Ye(b, r, p), g && g.m(b, p), Ye(b, a, p), f = !0, c || (u = nl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, p) {
      let w = n;
      n = m(b), n === w ? h[n].p(b, p) : (hi(), ye(h[w], 1, 1, () => {
        h[w] = null;
      }), _i(), l = h[n], l ? l.p(b, p) : (l = h[n] = _[n](b), l.c()), pe(l, 1), l.m(t, null)), (!f || p[0] & /*mode*/
      2 && s !== (s = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && de(t, "aria-label", s), /*recording*/
      b[8] ? d && (hi(), ye(d, 1, 1, () => {
        d = null;
      }), _i()) : d ? (d.p(b, p), p[0] & /*recording*/
      256 && pe(d, 1)) : (d = ea(b), d.c(), pe(d, 1), d.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, p), p[0] & /*options_open, selected_device*/
      1152 && pe(g, 1)) : (g = ta(b), g.c(), pe(g, 1), g.m(a.parentNode, a)) : g && (hi(), ye(g, 1, 1, () => {
        g = null;
      }), _i());
    },
    i(b) {
      f || (pe(l), pe(d), pe(g), f = !0);
    },
    o(b) {
      ye(l), ye(d), ye(g), f = !1;
    },
    d(b) {
      b && (Xe(e), Xe(r), Xe(a)), h[n].d(), d && d.d(), g && g.d(b), c = !1, u();
    }
  };
}
function V1(i) {
  let e, t, n, l;
  return t = new M1({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ue("div"), On(t.$$.fragment), de(e, "title", "grant webcam access");
    },
    m(s, o) {
      Ye(s, e, o), Pn(t, e, null), l = !0;
    },
    p: Vs,
    i(s) {
      l || (pe(t.$$.fragment, s), s && (n || R1(() => {
        n = X1(e, Eh, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(s) {
      ye(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Xe(e), Nn(t);
    }
  };
}
function O1(i) {
  let e, t, n;
  return t = new _u({}), {
    c() {
      e = Ue("div"), On(t.$$.fragment), de(e, "class", "icon svelte-8hqvb6"), de(e, "title", "capture photo");
    },
    m(l, s) {
      Ye(l, e, s), Pn(t, e, null), n = !0;
    },
    p: Vs,
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ye(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Xe(e), Nn(t);
    }
  };
}
function N1(i) {
  let e, t, n, l;
  const s = [Z1, P1], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = Us();
    },
    m(a, f) {
      o[e].m(a, f), Ye(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (hi(), ye(o[c], 1, 1, () => {
        o[c] = null;
      }), _i(), t = o[e], t || (t = o[e] = s[e](a), t.c()), pe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (pe(t), l = !0);
    },
    o(a) {
      ye(t), l = !1;
    },
    d(a) {
      a && Xe(n), o[e].d(a);
    }
  };
}
function P1(i) {
  let e, t, n;
  return t = new vu({}), {
    c() {
      e = Ue("div"), On(t.$$.fragment), de(e, "class", "icon red svelte-8hqvb6"), de(e, "title", "start recording");
    },
    m(l, s) {
      Ye(l, e, s), Pn(t, e, null), n = !0;
    },
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ye(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Xe(e), Nn(t);
    }
  };
}
function Z1(i) {
  let e, t, n;
  return t = new L_({}), {
    c() {
      e = Ue("div"), On(t.$$.fragment), de(e, "class", "icon red svelte-8hqvb6"), de(e, "title", "stop recording");
    },
    m(l, s) {
      Ye(l, e, s), Pn(t, e, null), n = !0;
    },
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ye(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Xe(e), Nn(t);
    }
  };
}
function ea(i) {
  let e, t, n, l, s;
  return t = new Is({}), {
    c() {
      e = Ue("button"), On(t.$$.fragment), de(e, "class", "icon svelte-8hqvb6"), de(e, "aria-label", "select input source");
    },
    m(o, r) {
      Ye(o, e, r), Pn(t, e, null), n = !0, l || (s = nl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: Vs,
    i(o) {
      n || (pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ye(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Xe(e), Nn(t), l = !1, s();
    }
  };
}
function ta(i) {
  let e, t, n, l, s, o, r;
  n = new Is({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? K1 : G1
    );
  }
  let f = a(i), c = f(i);
  return {
    c() {
      e = Ue("select"), t = Ue("button"), On(n.$$.fragment), l = bi(), c.c(), de(t, "class", "inset-icon svelte-8hqvb6"), de(e, "class", "select-wrap svelte-8hqvb6"), de(e, "aria-label", "select source");
    },
    m(u, _) {
      Ye(u, e, _), Lt(e, t), Pn(n, t, null), Lt(t, l), c.m(e, null), s = !0, o || (r = [
        nl(t, "click", F1(
          /*click_handler_2*/
          i[22]
        )),
        E1(Os.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        nl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      s || (pe(n.$$.fragment, u), s = !0);
    },
    o(u) {
      ye(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Xe(e), Nn(n), c.d(), o = !1, I1(r);
    }
  };
}
function G1(i) {
  let e, t = Qo(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = na($o(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Us();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      Ye(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = Qo(
          /*available_video_devices*/
          l[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = $o(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = na(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Xe(e), Y1(n, l);
    }
  };
}
function K1(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ue("option"), n = xr(t), e.__value = "", Ws(e, e.__value), de(e, "class", "svelte-8hqvb6");
    },
    m(l, s) {
      Ye(l, e, s), Lt(e, n);
    },
    p(l, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && jr(n, t);
    },
    d(l) {
      l && Xe(e);
    }
  };
}
function na(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, s, o;
  return {
    c() {
      e = Ue("option"), n = xr(t), l = bi(), e.__value = s = /*device*/
      i[32].deviceId, Ws(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, de(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ye(r, e, a), Lt(e, n), Lt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && jr(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, Ws(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Xe(e);
    }
  };
}
function J1(i) {
  let e, t, n, l, s, o;
  const r = [V1, U1], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = f(i), s = a[l] = r[l](i), {
    c() {
      e = Ue("div"), t = Ue("video"), n = bi(), s.c(), de(t, "class", "svelte-8hqvb6"), Ei(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ei(t, "hide", !/*webcam_accessed*/
      i[9]), de(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Ye(c, e, u), Lt(e, t), i[19](t), Lt(e, n), a[l].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Ei(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Ei(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = l;
      l = f(c), l === _ ? a[l].p(c, u) : (hi(), ye(a[_], 1, 1, () => {
        a[_] = null;
      }), _i(), s = a[l], s ? s.p(c, u) : (s = a[l] = r[l](c), s.c()), pe(s, 1), s.m(e, null));
    },
    i(c) {
      o || (pe(s), o = !0);
    },
    o(c) {
      ye(s), o = !1;
    },
    d(c) {
      c && Xe(e), i[19](null), a[l].d();
    }
  };
}
function Os(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Q1(i, e, t) {
  var n = this && this.__awaiter || function(L, O, E, K) {
    function ee(Z) {
      return Z instanceof E ? Z : new E(function(V) {
        V(Z);
      });
    }
    return new (E || (E = Promise))(function(Z, V) {
      function X(I) {
        try {
          q(K.next(I));
        } catch (ie) {
          V(ie);
        }
      }
      function Ve(I) {
        try {
          q(K.throw(I));
        } catch (ie) {
          V(ie);
        }
      }
      function q(I) {
        I.done ? Z(I.value) : ee(I.value).then(X, Ve);
      }
      q((K = K.apply(L, O || [])).next());
    });
  };
  let l, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: h } = e, { i18n: m } = e, { upload: d } = e;
  const g = j1();
  x1(() => r = document.createElement("canvas"));
  const b = (L) => n(void 0, void 0, void 0, function* () {
    const E = L.target.value;
    yield Jo(h, l, E).then((K) => n(void 0, void 0, void 0, function* () {
      y = K, t(7, o = s.find((ee) => ee.deviceId === E) || null), t(10, H = !1);
    }));
  });
  function p() {
    return n(this, void 0, void 0, function* () {
      try {
        Jo(h, l).then((L) => n(this, void 0, void 0, function* () {
          t(9, k = !0), t(6, s = yield D1()), y = L;
        })).then(() => q1(s)).then((L) => {
          t(6, s = L);
          const O = y.getTracks().map((E) => {
            var K;
            return (K = E.getSettings()) === null || K === void 0 ? void 0 : K.deviceId;
          })[0];
          t(7, o = O && L.find((E) => E.deviceId === O) || s[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (L) {
        if (L instanceof DOMException && L.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw L;
      }
    });
  }
  function w() {
    var L = r.getContext("2d");
    (!a || a && z) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, L.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), _ && (L.scale(-1, 1), L.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (O) => {
        g(a ? "stream" : "capture", O);
      },
      "image/png",
      0.8
    ));
  }
  let z = !1, v = [], y, C, S;
  function W() {
    if (z) {
      S.stop();
      let L = new Blob(v, { type: C }), O = new FileReader();
      O.onload = function(E) {
        return n(this, void 0, void 0, function* () {
          var K;
          if (E.target) {
            let ee = new File([L], "sample." + C.substring(6));
            const Z = yield qr([ee]);
            let V = ((K = yield d(Z, c)) === null || K === void 0 ? void 0 : K.filter(Boolean))[0];
            g("capture", V), g("stop_recording");
          }
        });
      }, O.readAsDataURL(L);
    } else {
      g("start_recording"), v = [];
      let L = ["video/webm", "video/mp4"];
      for (let O of L)
        if (MediaRecorder.isTypeSupported(O)) {
          C = O;
          break;
        }
      if (C === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      S = new MediaRecorder(y, { mimeType: C }), S.addEventListener("dataavailable", function(O) {
        v.push(O.data);
      }), S.start(200);
    }
    t(8, z = !z);
  }
  let k = !1;
  function R() {
    u === "image" && a && t(8, z = !z), u === "image" ? w() : W(), !z && y && (y.getTracks().forEach((L) => L.stop()), t(5, l.srcObject = null, l), t(9, k = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !f && w();
    },
    500
  );
  let H = !1;
  function j(L) {
    L.preventDefault(), L.stopPropagation(), t(10, H = !1);
  }
  function P(L) {
    H1[L ? "unshift" : "push"](() => {
      l = L, t(5, l);
    });
  }
  const Q = async () => p(), x = () => t(10, H = !0), $ = () => t(10, H = !1);
  return i.$$set = (L) => {
    "streaming" in L && t(0, a = L.streaming), "pending" in L && t(15, f = L.pending), "root" in L && t(16, c = L.root), "mode" in L && t(1, u = L.mode), "mirror_webcam" in L && t(2, _ = L.mirror_webcam), "include_audio" in L && t(17, h = L.include_audio), "i18n" in L && t(3, m = L.i18n), "upload" in L && t(18, d = L.upload);
  }, [
    a,
    u,
    _,
    m,
    Os,
    l,
    s,
    o,
    z,
    k,
    H,
    b,
    p,
    R,
    j,
    f,
    c,
    h,
    d,
    P,
    Q,
    x,
    $
  ];
}
class $1 extends L1 {
  constructor(e) {
    super(), A1(
      this,
      e,
      Q1,
      J1,
      T1,
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
    return Os;
  }
}
const {
  SvelteComponent: em,
  append: Ft,
  attr: A,
  detach: tm,
  init: nm,
  insert: im,
  noop: ts,
  safe_not_equal: lm,
  set_style: jt,
  svg_element: Bt
} = window.__gradio__svelte__internal;
function sm(i) {
  let e, t, n, l, s, o, r, a, f;
  return {
    c() {
      e = Bt("svg"), t = Bt("rect"), n = Bt("rect"), l = Bt("rect"), s = Bt("rect"), o = Bt("line"), r = Bt("line"), a = Bt("line"), f = Bt("line"), A(t, "x", "2"), A(t, "y", "2"), A(t, "width", "5"), A(t, "height", "5"), A(t, "rx", "1"), A(t, "ry", "1"), A(t, "stroke-width", "2"), A(t, "fill", "none"), A(n, "x", "17"), A(n, "y", "2"), A(n, "width", "5"), A(n, "height", "5"), A(n, "rx", "1"), A(n, "ry", "1"), A(n, "stroke-width", "2"), A(n, "fill", "none"), A(l, "x", "2"), A(l, "y", "17"), A(l, "width", "5"), A(l, "height", "5"), A(l, "rx", "1"), A(l, "ry", "1"), A(l, "stroke-width", "2"), A(l, "fill", "none"), A(s, "x", "17"), A(s, "y", "17"), A(s, "width", "5"), A(s, "height", "5"), A(s, "rx", "1"), A(s, "ry", "1"), A(s, "stroke-width", "2"), A(s, "fill", "none"), A(o, "x1", "7.5"), A(o, "y1", "4.5"), A(o, "x2", "16"), A(o, "y2", "4.5"), jt(o, "stroke-width", "2px"), A(r, "x1", "7.5"), A(r, "y1", "19.5"), A(r, "x2", "16"), A(r, "y2", "19.5"), jt(r, "stroke-width", "2px"), A(a, "x1", "4.5"), A(a, "y1", "8"), A(a, "x2", "4.5"), A(a, "y2", "16"), jt(a, "stroke-width", "2px"), A(f, "x1", "19.5"), A(f, "y1", "8"), A(f, "x2", "19.5"), A(f, "y2", "16"), jt(f, "stroke-width", "2px"), A(e, "width", "100%"), A(e, "height", "100%"), A(e, "viewBox", "0 0 24 24"), A(e, "version", "1.1"), A(e, "xmlns", "http://www.w3.org/2000/svg"), A(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), A(e, "xml:space", "preserve"), A(e, "stroke", "currentColor"), jt(e, "fill-rule", "evenodd"), jt(e, "clip-rule", "evenodd"), jt(e, "stroke-linecap", "round"), jt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      im(c, e, u), Ft(e, t), Ft(e, n), Ft(e, l), Ft(e, s), Ft(e, o), Ft(e, r), Ft(e, a), Ft(e, f);
    },
    p: ts,
    i: ts,
    o: ts,
    d(c) {
      c && tm(e);
    }
  };
}
class om extends em {
  constructor(e) {
    super(), nm(this, e, null, sm, lm, {});
  }
}
const {
  SvelteComponent: am,
  append: rm,
  attr: st,
  detach: fm,
  init: cm,
  insert: um,
  noop: ns,
  safe_not_equal: _m,
  set_style: Ri,
  svg_element: ia
} = window.__gradio__svelte__internal;
function hm(i) {
  let e, t;
  return {
    c() {
      e = ia("svg"), t = ia("path"), st(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), st(t, "fill", "none"), st(t, "stroke-width", "2"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "version", "1.1"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), st(e, "xml:space", "preserve"), st(e, "stroke", "currentColor"), Ri(e, "fill-rule", "evenodd"), Ri(e, "clip-rule", "evenodd"), Ri(e, "stroke-linecap", "round"), Ri(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      um(n, e, l), rm(e, t);
    },
    p: ns,
    i: ns,
    o: ns,
    d(n) {
      n && fm(e);
    }
  };
}
class dm extends am {
  constructor(e) {
    super(), cm(this, e, null, hm, _m, {});
  }
}
const {
  SvelteComponent: mm,
  append: gm,
  attr: ot,
  detach: bm,
  init: wm,
  insert: pm,
  noop: is,
  safe_not_equal: vm,
  set_style: Hi,
  svg_element: la
} = window.__gradio__svelte__internal;
function km(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("path"), ot(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), ot(t, "fill", "none"), ot(t, "stroke-width", "2"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "version", "1.1"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ot(e, "xml:space", "preserve"), ot(e, "stroke", "currentColor"), Hi(e, "fill-rule", "evenodd"), Hi(e, "clip-rule", "evenodd"), Hi(e, "stroke-linecap", "round"), Hi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      pm(n, e, l), gm(e, t);
    },
    p: is,
    i: is,
    o: is,
    d(n) {
      n && bm(e);
    }
  };
}
class ym extends mm {
  constructor(e) {
    super(), wm(this, e, null, km, vm, {});
  }
}
const {
  SvelteComponent: Cm,
  append: sa,
  attr: Mt,
  detach: Sm,
  init: zm,
  insert: Bm,
  noop: ls,
  safe_not_equal: Mm,
  set_style: Xi,
  svg_element: ss
} = window.__gradio__svelte__internal;
function Dm(i) {
  let e, t, n;
  return {
    c() {
      e = ss("svg"), t = ss("path"), n = ss("path"), Mt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Mt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 24 24"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "fill", "none"), Mt(e, "stroke", "currentColor"), Mt(e, "stroke-width", "2"), Xi(e, "fill-rule", "evenodd"), Xi(e, "clip-rule", "evenodd"), Xi(e, "stroke-linecap", "round"), Xi(e, "stroke-linejoin", "round");
    },
    m(l, s) {
      Bm(l, e, s), sa(e, t), sa(e, n);
    },
    p: ls,
    i: ls,
    o: ls,
    d(l) {
      l && Sm(e);
    }
  };
}
class Wm extends Cm {
  constructor(e) {
    super(), zm(this, e, null, Dm, Mm, {});
  }
}
const {
  SvelteComponent: qm,
  append: Lm,
  attr: xt,
  detach: Em,
  init: Rm,
  insert: Hm,
  noop: os,
  safe_not_equal: Xm,
  set_style: Yi,
  svg_element: oa
} = window.__gradio__svelte__internal;
function Ym(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), xt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), xt(e, "width", "100%"), xt(e, "height", "100%"), xt(e, "viewBox", "0 0 24 24"), xt(e, "fill", "none"), xt(e, "stroke", "currentColor"), xt(e, "stroke-width", "2"), Yi(e, "fill-rule", "evenodd"), Yi(e, "clip-rule", "evenodd"), Yi(e, "stroke-linecap", "round"), Yi(e, "stroke-linejoin", "round"), xt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Hm(n, e, l), Lm(e, t);
    },
    p: os,
    i: os,
    o: os,
    d(n) {
      n && Em(e);
    }
  };
}
class Am extends qm {
  constructor(e) {
    super(), Rm(this, e, null, Ym, Xm, {});
  }
}
const {
  SvelteComponent: Im,
  append: Tm,
  attr: Ut,
  detach: Fm,
  init: jm,
  insert: xm,
  noop: as,
  safe_not_equal: Um,
  set_style: Ai,
  svg_element: aa
} = window.__gradio__svelte__internal;
function Vm(i) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), Ut(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), Ai(e, "fill-rule", "evenodd"), Ai(e, "clip-rule", "evenodd"), Ai(e, "stroke-linecap", "round"), Ai(e, "stroke-linejoin", "round"), Ut(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      xm(n, e, l), Tm(e, t);
    },
    p: as,
    i: as,
    o: as,
    d(n) {
      n && Fm(e);
    }
  };
}
class Om extends Im {
  constructor(e) {
    super(), jm(this, e, null, Vm, Um, {});
  }
}
const {
  SvelteComponent: Nm,
  append: ra,
  attr: qe,
  detach: Pm,
  init: Zm,
  insert: Gm,
  noop: rs,
  safe_not_equal: Km,
  set_style: Ii,
  svg_element: fs
} = window.__gradio__svelte__internal;
function Jm(i) {
  let e, t, n;
  return {
    c() {
      e = fs("svg"), t = fs("path"), n = fs("path"), qe(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), qe(t, "fill", "none"), qe(t, "stroke-width", "2"), qe(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), qe(n, "fill", "none"), qe(n, "stroke-width", "2"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "version", "1.1"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), qe(e, "xml:space", "preserve"), qe(e, "stroke", "currentColor"), Ii(e, "fill-rule", "evenodd"), Ii(e, "clip-rule", "evenodd"), Ii(e, "stroke-linecap", "round"), Ii(e, "stroke-linejoin", "round");
    },
    m(l, s) {
      Gm(l, e, s), ra(e, t), ra(e, n);
    },
    p: rs,
    i: rs,
    o: rs,
    d(l) {
      l && Pm(e);
    }
  };
}
class Qm extends Nm {
  constructor(e) {
    super(), Zm(this, e, null, Jm, Km, {});
  }
}
const {
  SvelteComponent: $m,
  append: fa,
  attr: cs,
  bubble: ca,
  create_component: e0,
  destroy_component: t0,
  detach: Ur,
  element: ua,
  init: n0,
  insert: Vr,
  listen: us,
  mount_component: i0,
  run_all: l0,
  safe_not_equal: s0,
  set_data: o0,
  set_input_value: _a,
  space: a0,
  text: r0,
  transition_in: f0,
  transition_out: c0
} = window.__gradio__svelte__internal, { createEventDispatcher: u0, afterUpdate: _0 } = window.__gradio__svelte__internal;
function h0(i) {
  let e;
  return {
    c() {
      e = r0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Vr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && o0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Ur(e);
    }
  };
}
function d0(i) {
  let e, t, n, l, s, o, r;
  return t = new Ja({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [h0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = ua("label"), e0(t.$$.fragment), n = a0(), l = ua("input"), cs(l, "type", "color"), l.disabled = /*disabled*/
      i[3], cs(l, "class", "svelte-16l8u73"), cs(e, "class", "block");
    },
    m(a, f) {
      Vr(a, e, f), i0(t, e, null), fa(e, n), fa(e, l), _a(
        l,
        /*value*/
        i[0]
      ), s = !0, o || (r = [
        us(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        us(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        us(
          l,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], o = !0);
    },
    p(a, [f]) {
      const c = {};
      f & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (c.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: f, ctx: a }), t.$set(c), (!s || f & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && _a(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (f0(t.$$.fragment, a), s = !0);
    },
    o(a) {
      c0(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Ur(e), t0(t), o = !1, l0(r);
    }
  };
}
function m0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = u0();
  function c() {
    f("change", n), l || f("input");
  }
  _0(() => {
    t(5, l = !1);
  });
  function u(m) {
    ca.call(this, i, m);
  }
  function _(m) {
    ca.call(this, i, m);
  }
  function h() {
    n = this.value, t(0, n);
  }
  return i.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, l = m.value_is_output), "label" in m && t(1, s = m.label), "info" in m && t(2, o = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    s,
    o,
    r,
    a,
    l,
    u,
    _,
    h
  ];
}
class g0 extends $m {
  constructor(e) {
    super(), n0(this, e, m0, d0, s0, {
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
  SvelteComponent: b0,
  append: Or,
  attr: re,
  bubble: w0,
  check_outros: p0,
  create_slot: Nr,
  detach: vi,
  element: wl,
  empty: v0,
  get_all_dirty_from_scope: Pr,
  get_slot_changes: Zr,
  group_outros: k0,
  init: y0,
  insert: ki,
  listen: C0,
  safe_not_equal: S0,
  set_style: Ee,
  space: Gr,
  src_url_equal: il,
  toggle_class: Xn,
  transition_in: ll,
  transition_out: sl,
  update_slot_base: Kr
} = window.__gradio__svelte__internal;
function z0(i) {
  let e, t, n, l, s, o, r = (
    /*icon*/
    i[7] && ha(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), f = Nr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = wl("button"), r && r.c(), t = Gr(), f && f.c(), re(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), re(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Xn(e, "hidden", !/*visible*/
      i[2]), Ee(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ee(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ee(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      ki(c, e, u), r && r.m(e, null), Or(e, t), f && f.m(e, null), l = !0, s || (o = C0(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = ha(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!l || u & /*$$scope*/
      2048) && Kr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? Zr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Pr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && re(e, "class", n), (!l || u & /*elem_id*/
      1) && re(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && Xn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Ee(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Ee(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Ee(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (ll(f, c), l = !0);
    },
    o(c) {
      sl(f, c), l = !1;
    },
    d(c) {
      c && vi(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function B0(i) {
  let e, t, n, l, s = (
    /*icon*/
    i[7] && da(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Nr(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = wl("a"), s && s.c(), t = Gr(), r && r.c(), re(
        e,
        "href",
        /*link*/
        i[6]
      ), re(e, "rel", "noopener noreferrer"), re(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), re(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), re(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Xn(e, "hidden", !/*visible*/
      i[2]), Xn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ee(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ee(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ee(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ee(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, f) {
      ki(a, e, f), s && s.m(e, null), Or(e, t), r && r.m(e, null), l = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = da(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!l || f & /*$$scope*/
      2048) && Kr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        l ? Zr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Pr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || f & /*link*/
      64) && re(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || f & /*disabled*/
      256) && re(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && re(e, "class", n), (!l || f & /*elem_id*/
      1) && re(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || f & /*size, variant, elem_classes, visible*/
      30) && Xn(e, "hidden", !/*visible*/
      a[2]), (!l || f & /*size, variant, elem_classes, disabled*/
      282) && Xn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Ee(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Ee(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Ee(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Ee(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (ll(r, a), l = !0);
    },
    o(a) {
      sl(r, a), l = !1;
    },
    d(a) {
      a && vi(e), s && s.d(), r && r.d(a);
    }
  };
}
function ha(i) {
  let e, t, n;
  return {
    c() {
      e = wl("img"), re(e, "class", "button-icon svelte-8huxfn"), il(e.src, t = /*icon*/
      i[7].url) || re(e, "src", t), re(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      ki(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !il(e.src, t = /*icon*/
      l[7].url) && re(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && re(e, "alt", n);
    },
    d(l) {
      l && vi(e);
    }
  };
}
function da(i) {
  let e, t, n;
  return {
    c() {
      e = wl("img"), re(e, "class", "button-icon svelte-8huxfn"), il(e.src, t = /*icon*/
      i[7].url) || re(e, "src", t), re(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      ki(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !il(e.src, t = /*icon*/
      l[7].url) && re(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && re(e, "alt", n);
    },
    d(l) {
      l && vi(e);
    }
  };
}
function M0(i) {
  let e, t, n, l;
  const s = [B0, z0], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = v0();
    },
    m(a, f) {
      o[e].m(a, f), ki(a, n, f), l = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (k0(), sl(o[c], 1, 1, () => {
        o[c] = null;
      }), p0(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), ll(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ll(t), l = !0);
    },
    o(a) {
      sl(t), l = !1;
    },
    d(a) {
      a && vi(n), o[e].d(a);
    }
  };
}
function D0(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: h = !1 } = e, { scale: m = null } = e, { min_width: d = void 0 } = e;
  function g(b) {
    w0.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, s = b.elem_id), "elem_classes" in b && t(1, o = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, f = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, _ = b.icon), "disabled" in b && t(8, h = b.disabled), "scale" in b && t(9, m = b.scale), "min_width" in b && t(10, d = b.min_width), "$$scope" in b && t(11, l = b.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    h,
    m,
    d,
    l,
    n,
    g
  ];
}
class qs extends b0 {
  constructor(e) {
    super(), y0(this, e, D0, M0, S0, {
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
  SvelteComponent: W0,
  add_render_callback: Jr,
  append: Ti,
  attr: je,
  binding_callbacks: ma,
  check_outros: q0,
  create_bidirectional_transition: ga,
  destroy_each: L0,
  detach: di,
  element: ol,
  empty: E0,
  ensure_array_like: ba,
  group_outros: R0,
  init: H0,
  insert: mi,
  listen: Ls,
  prevent_default: X0,
  run_all: Y0,
  safe_not_equal: A0,
  set_data: I0,
  set_style: Mn,
  space: Es,
  text: T0,
  toggle_class: ht,
  transition_in: _s,
  transition_out: wa
} = window.__gradio__svelte__internal, { createEventDispatcher: F0 } = window.__gradio__svelte__internal;
function pa(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function va(i) {
  let e, t, n, l, s, o = ba(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = ka(pa(i, o, a));
  return {
    c() {
      e = ol("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      je(e, "class", "options svelte-yuohum"), je(e, "role", "listbox"), Mn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Mn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Mn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, f) {
      mi(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (s = Ls(e, "mousedown", X0(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = ba(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = pa(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = ka(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Mn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Mn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Mn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Jr(() => {
        n && (t || (t = ga(e, Co, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ga(e, Co, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && di(e), L0(r, a), i[22](null), a && t && t.end(), l = !1, s();
    }
  };
}
function ka(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = ol("li"), t = ol("span"), t.textContent = "✓", n = Es(), s = T0(l), o = Es(), je(t, "class", "inner-item svelte-yuohum"), ht(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), je(e, "class", "item svelte-yuohum"), je(e, "data-index", r = /*index*/
      i[26]), je(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), je(e, "data-testid", "dropdown-option"), je(e, "role", "option"), je(e, "aria-selected", f = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), ht(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), ht(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ht(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ht(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      mi(c, e, u), Ti(e, t), Ti(e, n), Ti(e, s), Ti(e, o);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && ht(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && I0(s, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && je(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && je(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && je(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && ht(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && ht(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ht(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ht(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && di(e);
    }
  };
}
function j0(i) {
  let e, t, n, l, s;
  Jr(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && va(i)
  );
  return {
    c() {
      e = ol("div"), t = Es(), o && o.c(), n = E0(), je(e, "class", "reference");
    },
    m(r, a) {
      mi(r, e, a), i[20](e), mi(r, t, a), o && o.m(r, a), mi(r, n, a), l || (s = [
        Ls(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Ls(
          window,
          "resize",
          /*onwindowresize*/
          i[19]
        )
      ], l = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && _s(o, 1)) : (o = va(r), o.c(), _s(o, 1), o.m(n.parentNode, n)) : o && (R0(), wa(o, 1, 1, () => {
        o = null;
      }), q0());
    },
    i(r) {
      _s(o);
    },
    o(r) {
      wa(o);
    },
    d(r) {
      r && (di(e), di(t), di(n)), i[20](null), o && o.d(r), l = !1, Y0(s);
    }
  };
}
function x0(i, e, t) {
  var n, l;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, h, m, d, g, b, p, w;
  function z() {
    const { top: H, bottom: j } = d.getBoundingClientRect();
    t(16, u = H), t(17, _ = w - j);
  }
  let v = null;
  function y() {
    r && (v !== null && clearTimeout(v), v = setTimeout(
      () => {
        z(), v = null;
      },
      10
    ));
  }
  const C = F0();
  function S() {
    t(11, w = window.innerHeight);
  }
  function W(H) {
    ma[H ? "unshift" : "push"](() => {
      d = H, t(6, d);
    });
  }
  const k = (H) => C("change", H);
  function R(H) {
    ma[H ? "unshift" : "push"](() => {
      g = H, t(7, g);
    });
  }
  return i.$$set = (H) => {
    "choices" in H && t(0, s = H.choices), "filtered_indices" in H && t(1, o = H.filtered_indices), "show_options" in H && t(2, r = H.show_options), "disabled" in H && t(3, a = H.disabled), "selected_indices" in H && t(4, f = H.selected_indices), "active_index" in H && t(5, c = H.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && d) {
        if (g && f.length > 0) {
          let j = g.querySelectorAll("li");
          for (const P of Array.from(j))
            if (P.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, P.offsetTop);
              break;
            }
        }
        z();
        const H = t(15, l = d.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, h = (H == null ? void 0 : H.height) || 0), t(8, m = (H == null ? void 0 : H.width) || 0);
      }
      _ > u ? (t(10, p = _), t(9, b = null)) : (t(9, b = `${_ + h}px`), t(10, p = u - h));
    }
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    d,
    g,
    m,
    b,
    p,
    w,
    y,
    C,
    n,
    l,
    u,
    _,
    h,
    S,
    W,
    k,
    R
  ];
}
class U0 extends W0 {
  constructor(e) {
    super(), H0(this, e, x0, j0, A0, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function V0(i, e) {
  return (i % e + e) % e;
}
function ya(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function O0(i, e, t) {
  i("change", e), t || i("input");
}
function N0(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[V0(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: P0,
  append: tn,
  attr: Fe,
  binding_callbacks: Z0,
  check_outros: G0,
  create_component: Rs,
  destroy_component: Hs,
  detach: Ns,
  element: Ln,
  group_outros: K0,
  init: J0,
  insert: Ps,
  listen: ti,
  mount_component: Xs,
  run_all: Q0,
  safe_not_equal: $0,
  set_data: eg,
  set_input_value: Ca,
  space: hs,
  text: tg,
  toggle_class: Dn,
  transition_in: En,
  transition_out: ci
} = window.__gradio__svelte__internal, { onMount: ng } = window.__gradio__svelte__internal, { createEventDispatcher: ig, afterUpdate: lg } = window.__gradio__svelte__internal;
function sg(i) {
  let e;
  return {
    c() {
      e = tg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Ps(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && eg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ns(e);
    }
  };
}
function Sa(i) {
  let e, t, n;
  return t = new Is({}), {
    c() {
      e = Ln("div"), Rs(t.$$.fragment), Fe(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, s) {
      Ps(l, e, s), Xs(t, e, null), n = !0;
    },
    i(l) {
      n || (En(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ci(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ns(e), Hs(t);
    }
  };
}
function og(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, h, m;
  t = new Ja({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [sg] },
      $$scope: { ctx: i }
    }
  });
  let d = !/*disabled*/
  i[3] && Sa();
  return u = new U0({
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
      e = Ln("div"), Rs(t.$$.fragment), n = hs(), l = Ln("div"), s = Ln("div"), o = Ln("div"), r = Ln("input"), f = hs(), d && d.c(), c = hs(), Rs(u.$$.fragment), Fe(r, "role", "listbox"), Fe(r, "aria-controls", "dropdown-options"), Fe(
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
      i[7], Dn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Fe(o, "class", "secondary-wrap svelte-1m1zvyj"), Fe(s, "class", "wrap-inner svelte-1m1zvyj"), Dn(
        s,
        "show_options",
        /*show_options*/
        i[12]
      ), Fe(l, "class", "wrap svelte-1m1zvyj"), Fe(e, "class", "svelte-1m1zvyj"), Dn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      Ps(g, e, b), Xs(t, e, null), tn(e, n), tn(e, l), tn(l, s), tn(s, o), tn(o, r), Ca(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), tn(o, f), d && d.m(o, null), tn(l, c), Xs(u, l, null), _ = !0, h || (m = [
        ti(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ti(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ti(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ti(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ti(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], h = !0);
    },
    p(g, b) {
      const p = {};
      b[0] & /*show_label*/
      16 && (p.show_label = /*show_label*/
      g[4]), b[0] & /*info*/
      2 && (p.info = /*info*/
      g[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      4 && (p.$$scope = { dirty: b, ctx: g }), t.$set(p), (!_ || b[0] & /*show_options*/
      4096) && Fe(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || b[0] & /*label*/
      1) && Fe(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && Ca(
        r,
        /*input_text*/
        g[9]
      ), (!_ || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Dn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? d && (K0(), ci(d, 1, 1, () => {
        d = null;
      }), G0()) : d ? b[0] & /*disabled*/
      8 && En(d, 1) : (d = Sa(), d.c(), En(d, 1), d.m(o, null)), (!_ || b[0] & /*show_options*/
      4096) && Dn(
        s,
        "show_options",
        /*show_options*/
        g[12]
      );
      const w = {};
      b[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      g[12]), b[0] & /*choices*/
      4 && (w.choices = /*choices*/
      g[2]), b[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      g[10]), b[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      g[3]), b[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), b[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      g[14]), u.$set(w), (!_ || b[0] & /*container*/
      32) && Dn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (En(t.$$.fragment, g), En(d), En(u.$$.fragment, g), _ = !0);
    },
    o(g) {
      ci(t.$$.fragment, g), ci(d), ci(u.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && Ns(e), Hs(t), i[29](null), d && d.d(), Hs(u), h = !1, Q0(m);
    }
  };
}
function ag(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: m = !0 } = e, d, g = !1, b, p, w = "", z = "", v = !1, y = [], C = null, S = null, W;
  const k = ig();
  s ? (W = a.map((E) => E[1]).indexOf(s), S = W, S === -1 ? (o = s, S = null) : ([w, o] = a[S], z = w), H()) : a.length > 0 && (W = 0, S = 0, [w, s] = a[S], o = s, z = w);
  function R() {
    t(13, b = a.map((E) => E[0])), t(24, p = a.map((E) => E[1]));
  }
  function H() {
    R(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, w = ""), t(11, S = null)) : p.includes(s) ? (t(9, w = b[p.indexOf(s)]), t(11, S = p.indexOf(s))) : h ? (t(9, w = s), t(11, S = null)) : (t(9, w = ""), t(11, S = null)), t(27, W = S);
  }
  function j(E) {
    if (t(11, S = parseInt(E.detail.target.dataset.index)), isNaN(S)) {
      t(11, S = null);
      return;
    }
    t(12, g = !1), t(14, C = null), d.blur();
  }
  function P(E) {
    t(10, y = a.map((K, ee) => ee)), t(12, g = !0), k("focus");
  }
  function Q() {
    h ? t(20, s = w) : t(9, w = b[p.indexOf(s)]), t(12, g = !1), t(14, C = null), k("blur");
  }
  function x(E) {
    t(12, [g, C] = N0(E, C, y), g, (t(14, C), t(2, a), t(23, f), t(6, h), t(9, w), t(10, y), t(8, d), t(25, z), t(11, S), t(27, W), t(26, v), t(24, p))), E.key === "Enter" && (C !== null ? (t(11, S = C), t(12, g = !1), d.blur(), t(14, C = null)) : b.includes(w) ? (t(11, S = b.indexOf(w)), t(12, g = !1), t(14, C = null), d.blur()) : h && (t(20, s = w), t(11, S = null), t(12, g = !1), t(14, C = null), d.blur()), k("enter", s));
  }
  lg(() => {
    t(21, r = !1), t(26, v = !0);
  }), ng(() => {
    d.focus();
  });
  function $() {
    w = this.value, t(9, w), t(11, S), t(27, W), t(26, v), t(2, a), t(24, p);
  }
  function L(E) {
    Z0[E ? "unshift" : "push"](() => {
      d = E, t(8, d);
    });
  }
  const O = (E) => k("key_up", { key: E.key, input_value: w });
  return i.$$set = (E) => {
    "label" in E && t(0, n = E.label), "info" in E && t(1, l = E.info), "value" in E && t(20, s = E.value), "value_is_output" in E && t(21, r = E.value_is_output), "choices" in E && t(2, a = E.choices), "disabled" in E && t(3, c = E.disabled), "show_label" in E && t(4, u = E.show_label), "container" in E && t(5, _ = E.container), "allow_custom_value" in E && t(6, h = E.allow_custom_value), "filterable" in E && t(7, m = E.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && S !== W && S !== null && v && (t(9, [w, s] = a[S], w, (t(20, s), t(11, S), t(27, W), t(26, v), t(2, a), t(24, p))), t(27, W = S), k("select", {
      index: S,
      value: p[S],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (H(), O0(k, s, r), t(22, o = s)), i.$$.dirty[0] & /*choices*/
    4 && R(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (h || H(), t(23, f = a), t(10, y = ya(a, w)), !h && y.length > 0 && t(14, C = y[0]), d == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && w !== z && (t(10, y = ya(a, w)), t(25, z = w), !h && y.length > 0 && t(14, C = y[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    _,
    h,
    m,
    d,
    w,
    y,
    S,
    g,
    b,
    C,
    k,
    j,
    P,
    Q,
    x,
    s,
    r,
    o,
    f,
    p,
    z,
    v,
    W,
    $,
    L,
    O
  ];
}
class rg extends P0 {
  constructor(e) {
    super(), J0(
      this,
      e,
      ag,
      og,
      $0,
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
  SvelteComponent: fg,
  append: Pe,
  attr: Yn,
  check_outros: Ys,
  create_component: cn,
  destroy_component: un,
  detach: Zn,
  element: mt,
  group_outros: As,
  init: cg,
  insert: Gn,
  listen: ug,
  mount_component: _n,
  safe_not_equal: _g,
  set_style: An,
  space: ni,
  text: Zs,
  toggle_class: za,
  transition_in: Se,
  transition_out: xe
} = window.__gradio__svelte__internal, { createEventDispatcher: hg } = window.__gradio__svelte__internal, { onMount: dg, onDestroy: mg } = window.__gradio__svelte__internal;
function Ba(i) {
  let e, t, n, l, s, o, r;
  const a = [bg, gg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = f[n] = a[n](i), {
    c() {
      e = mt("div"), t = mt("button"), l.c(), Yn(t, "class", "icon svelte-d9x7u0"), Yn(t, "aria-label", "Lock label detail"), za(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), An(e, "margin-right", "8px");
    },
    m(u, _) {
      Gn(u, e, _), Pe(e, t), f[n].m(t, null), s = !0, o || (r = ug(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, _) {
      let h = n;
      n = c(u), n !== h && (As(), xe(f[h], 1, 1, () => {
        f[h] = null;
      }), Ys(), l = f[n], l || (l = f[n] = a[n](u), l.c()), Se(l, 1), l.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && za(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (Se(l), s = !0);
    },
    o(u) {
      xe(l), s = !1;
    },
    d(u) {
      u && Zn(e), f[n].d(), o = !1, r();
    }
  };
}
function gg(i) {
  let e, t;
  return e = new Om({}), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    i(n) {
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function bg(i) {
  let e, t;
  return e = new Am({}), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    i(n) {
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function wg(i) {
  let e;
  return {
    c() {
      e = Zs("Cancel");
    },
    m(t, n) {
      Gn(t, e, n);
    },
    d(t) {
      t && Zn(e);
    }
  };
}
function Ma(i) {
  let e, t, n;
  return t = new qs({
    props: {
      variant: "stop",
      $$slots: { default: [pg] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = mt("div"), cn(t.$$.fragment), An(e, "margin-right", "8px");
    },
    m(l, s) {
      Gn(l, e, s), _n(t, e, null), n = !0;
    },
    p(l, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: l }), t.$set(o);
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      xe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Zn(e), un(t);
    }
  };
}
function pg(i) {
  let e;
  return {
    c() {
      e = Zs("Remove");
    },
    m(t, n) {
      Gn(t, e, n);
    },
    d(t) {
      t && Zn(e);
    }
  };
}
function vg(i) {
  let e;
  return {
    c() {
      e = Zs("OK");
    },
    m(t, n) {
      Gn(t, e, n);
    },
    d(t) {
      t && Zn(e);
    }
  };
}
function kg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, h, m, d, g, b, p = !/*showRemove*/
  i[4] && Ba(i);
  o = new rg({
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
  ), f = new g0({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), f.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), _ = new qs({
    props: {
      $$slots: { default: [wg] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let w = (
    /*showRemove*/
    i[4] && Ma(i)
  );
  return g = new qs({
    props: {
      variant: "primary",
      $$slots: { default: [vg] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = mt("div"), t = mt("div"), n = mt("span"), p && p.c(), l = ni(), s = mt("div"), cn(o.$$.fragment), r = ni(), a = mt("div"), cn(f.$$.fragment), c = ni(), u = mt("div"), cn(_.$$.fragment), h = ni(), w && w.c(), m = ni(), d = mt("div"), cn(g.$$.fragment), An(s, "margin-right", "10px"), An(a, "margin-right", "40px"), An(a, "margin-bottom", "8px"), An(u, "margin-right", "8px"), Yn(n, "class", "model-content svelte-d9x7u0"), Yn(t, "class", "modal-container svelte-d9x7u0"), Yn(e, "class", "modal svelte-d9x7u0"), Yn(e, "id", "model-box-edit");
    },
    m(z, v) {
      Gn(z, e, v), Pe(e, t), Pe(t, n), p && p.m(n, null), Pe(n, l), Pe(n, s), _n(o, s, null), Pe(n, r), Pe(n, a), _n(f, a, null), Pe(n, c), Pe(n, u), _n(_, u, null), Pe(n, h), w && w.m(n, null), Pe(n, m), Pe(n, d), _n(g, d, null), b = !0;
    },
    p(z, [v]) {
      /*showRemove*/
      z[4] ? p && (As(), xe(p, 1, 1, () => {
        p = null;
      }), Ys()) : p ? (p.p(z, v), v & /*showRemove*/
      16 && Se(p, 1)) : (p = Ba(z), p.c(), Se(p, 1), p.m(n, l));
      const y = {};
      v & /*currentLabel*/
      1 && (y.value = /*currentLabel*/
      z[0]), v & /*choices*/
      8 && (y.choices = /*choices*/
      z[3]), o.$set(y);
      const C = {};
      v & /*currentColor*/
      2 && (C.value = /*currentColor*/
      z[1]), f.$set(C);
      const S = {};
      v & /*$$scope*/
      262144 && (S.$$scope = { dirty: v, ctx: z }), _.$set(S), /*showRemove*/
      z[4] ? w ? (w.p(z, v), v & /*showRemove*/
      16 && Se(w, 1)) : (w = Ma(z), w.c(), Se(w, 1), w.m(n, m)) : w && (As(), xe(w, 1, 1, () => {
        w = null;
      }), Ys());
      const W = {};
      v & /*$$scope*/
      262144 && (W.$$scope = { dirty: v, ctx: z }), g.$set(W);
    },
    i(z) {
      b || (Se(p), Se(o.$$.fragment, z), Se(f.$$.fragment, z), Se(_.$$.fragment, z), Se(w), Se(g.$$.fragment, z), b = !0);
    },
    o(z) {
      xe(p), xe(o.$$.fragment, z), xe(f.$$.fragment, z), xe(_.$$.fragment, z), xe(w), xe(g.$$.fragment, z), b = !1;
    },
    d(z) {
      z && Zn(e), p && p.d(), un(o), un(f), un(_), w && w.d(), un(g);
    }
  };
}
function yg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = hg();
  function _(v) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: v
      // -1: remove, 0: cancel, 1: change
    });
  }
  function h(v) {
    const { detail: y } = v;
    let C = y;
    Number.isInteger(C) ? (Array.isArray(o) && C < o.length && t(1, a = o[C]), Array.isArray(s) && C < s.length && t(0, l = s[C][0])) : t(0, l = C);
  }
  function m(v) {
    const { detail: y } = v;
    t(1, a = y);
  }
  function d(v) {
    h(v), _(1);
  }
  function g(v) {
    t(2, c = !c);
  }
  function b(v) {
    switch (v.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  dg(() => {
    document.addEventListener("keydown", b), t(0, l = n), t(1, a = r);
  }), mg(() => {
    document.removeEventListener("keydown", b);
  });
  const p = () => _(0), w = () => _(-1), z = () => _(1);
  return i.$$set = (v) => {
    "label" in v && t(10, n = v.label), "currentLabel" in v && t(0, l = v.currentLabel), "choices" in v && t(3, s = v.choices), "choicesColors" in v && t(11, o = v.choicesColors), "color" in v && t(12, r = v.color), "currentColor" in v && t(1, a = v.currentColor), "showRemove" in v && t(4, f = v.showRemove), "labelDetailLock" in v && t(2, c = v.labelDetailLock);
  }, [
    l,
    a,
    c,
    s,
    f,
    _,
    h,
    m,
    d,
    g,
    n,
    o,
    r,
    p,
    w,
    z
  ];
}
class Gs extends fg {
  constructor(e) {
    super(), cg(this, e, yg, kg, _g, {
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
function jn(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, s] = t;
  return `rgba(${n}, ${l}, ${s}, ${e})`;
}
const ge = (i, e, t) => Math.min(Math.max(i, e), t);
class ds {
  constructor(e, t, n, l, s, o, r, a, f, c, u, _, h = "rgb(255, 255, 255)", m = 0.5, d = 25, g = 8, b = 2, p = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (z) => {
      if (this.isDragging) {
        let v = (z.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (z.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        v = ge(v, -this._xmin, C - this._xmax), y = ge(y, -this._ymin, S - this._ymax), this._xmin += v, this._ymin += y, this._xmax += v, this._ymax += y, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (z) => {
      if (this.isCreating) {
        let [v, y] = this.toBoxCoordinates(z.clientX, z.clientY);
        v = (v - this.offsetMouseX) / this.canvasWindow.scale, y = (y - this.offsetMouseY) / this.canvasWindow.scale, v > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = v, this.creatingAnchorX = "xmin") : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = v : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = v : v < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = v, this.creatingAnchorX = "xmax"), y > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = y, this.creatingAnchorY = "ymin") : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = y : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = y : y < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = y, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (z) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ge(this._xmin, 0, v - this.minSize), this._ymin = ge(this._ymin, 0, y - this.minSize), this._xmax = ge(this._xmax, this.minSize, v), this._ymax = ge(this._ymax, this.minSize, y), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > v ? (this._xmin -= this._xmax - v, this._xmax = v) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > y ? (this._ymin -= this._ymax - y, this._ymax = y) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (z) => {
      if (this.isResizing) {
        const v = z.clientX, y = z.clientY, C = (v - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, S = (y - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += C, this._ymin += S, this._xmin = ge(this._xmin, 0, this._xmax - this.minSize), this._ymin = ge(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += C, this._ymin += S, this._xmax = ge(this._xmax, this._xmin + this.minSize, W), this._ymin = ge(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += C, this._ymax += S, this._xmax = ge(this._xmax, this._xmin + this.minSize, W), this._ymax = ge(this._ymax, this._ymin + this.minSize, k);
            break;
          case 3:
            this._xmin += C, this._ymax += S, this._xmin = ge(this._xmin, 0, this._xmax - this.minSize), this._ymax = ge(this._ymax, this._ymin + this.minSize, k);
            break;
          case 4:
            this._ymin += S, this._ymin = ge(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += C, this._xmax = ge(this._xmax, this._xmin + this.minSize, W);
            break;
          case 6:
            this._ymax += S, this._ymax = ge(this._ymax, this._ymin + this.minSize, k);
            break;
          case 7:
            this._xmin += C, this._xmin = ge(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = l, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = w, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = b, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = d, this.color = h, this.alpha = m, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = jn(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = jn(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, l, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, l, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = jn(this.color, 1);
    for (const l of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        t,
        n,
        l.xmax - l.xmin,
        l.ymax - l.ymin
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
      const l = this.resizeHandles[n];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
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
    const [t, n, l, s] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - s, this._xmax = this.canvasWindow.imageWidth - l, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = l, this._xmax = s, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
class ms {
  constructor(e, t, n, l, s, o, r, a, f = "rgb(255, 255, 255)", c = 0.5, u = 25, _ = 8, h = 2, m = 4, d = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (g) => {
      if (this.isDragging && this._points.length > 0) {
        let b = (g.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, p = (g.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        b = Math.max(-this._xmin, Math.min(b, w - this._xmax)), p = Math.max(-this._ymin, Math.min(p, z - this._ymax)), this._points = this._points.map((v) => ({
          x: v.x + b,
          y: v.y + p
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (g) => {
      if (this.isCreating) {
        const b = document.querySelector("canvas");
        if (b) {
          const p = b.getBoundingClientRect(), w = (g.clientX - p.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, z = (g.clientY - p.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, v = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(w - v.x, 2) + Math.pow(z - v.y, 2)) > 2 && (this._points.push({ x: w, y: z }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (g) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const b = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, p = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((w) => ({
          x: Math.max(0, Math.min(w.x, b)),
          y: Math.max(0, Math.min(w.y, p))
        })), this.updateBoundingBox(), this.renderCallBack(), console.log("Freehand path coordinates:", this._points), console.log("Number of points:", this._points.length), console.log("Bounding box:", {
          xmin: this._xmin,
          ymin: this._ymin,
          xmax: this._xmax,
          ymax: this._ymax
        });
      }
      this.onFinishCreation();
    }, this.handleResize = (g) => {
      if (this.isResizing && this._points.length > 0) {
        const b = g.clientX, p = g.clientY, w = (b - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (p - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, v = this._xmax - this._xmin, y = this._ymax - this._ymin;
        let C = this._xmin, S = this._ymin, W = this._xmax, k = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            C = this._xmin + w, S = this._ymin + z;
            break;
          case 1:
            W = this._xmax + w, S = this._ymin + z;
            break;
          case 2:
            W = this._xmax + w, k = this._ymax + z;
            break;
          case 3:
            C = this._xmin + w, k = this._ymax + z;
            break;
          case 4:
            S = this._ymin + z;
            break;
          case 5:
            W = this._xmax + w;
            break;
          case 6:
            k = this._ymax + z;
            break;
          case 7:
            C = this._xmin + w;
            break;
        }
        const R = (W - C) / v, H = (k - S) / y;
        this._points = this._points.map((j) => ({
          x: C + (j.x - this._xmin) * R,
          y: S + (j.y - this._ymin) * H
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = l, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = d, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = _, this.thickness = h, this.selectedThickness = m, this.resizingHandleIndex = -1, this.minSize = u, this.color = f, this.alpha = c, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
        const [n, l] = this.toCanvasCoordinates(this.points[t].x, this.points[t].y);
        t === 0 ? e.moveTo(n, l) : e.lineTo(n, l);
      }
      if (e.closePath(), e.fillStyle = jn(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = jn(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.label !== null && this.label.trim() !== "") {
        this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
        const t = e.measureText(this.label).width + 10, n = 20;
        let l = this.xmin, s = this.ymin - n;
        e.fillStyle = "white", [l, s] = this.toCanvasCoordinates(l, s), e.fillRect(l, s, t, n), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(l, s, t, n), e.fillStyle = "black", e.fillText(this.label, l + 5, s + 15);
      }
      if (this.isSelected) {
        e.fillStyle = jn(this.color, 1);
        for (const t of this.resizeHandles) {
          const [n, l] = this.toCanvasCoordinates(t.xmin, t.ymin);
          e.fillRect(
            n,
            l,
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
      const l = this.resizeHandles[n];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0;
    const l = document.querySelector("canvas");
    if (l) {
      const s = l.getBoundingClientRect(), o = (e.clientX - s.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, r = (e.clientY - s.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
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
const dt = [
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
], Fi = (i, e, t) => Math.min(Math.max(i, e), t);
class Cg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, l = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Fi(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Fi(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? l = Fi(l, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : l = Fi(l, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += l, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, l = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = l);
  }
}
const {
  SvelteComponent: Sg,
  append: Ze,
  attr: be,
  binding_callbacks: zg,
  bubble: gs,
  check_outros: In,
  create_component: wt,
  destroy_component: pt,
  detach: Wt,
  element: gt,
  empty: Bg,
  group_outros: Tn,
  init: Mg,
  insert: qt,
  is_function: Dg,
  listen: He,
  mount_component: vt,
  noop: Qr,
  run_all: $r,
  safe_not_equal: Wg,
  set_style: ji,
  space: bt,
  toggle_class: Wn,
  transition_in: ne,
  transition_out: ce
} = window.__gradio__svelte__internal, { onMount: qg, onDestroy: Lg, createEventDispatcher: Eg } = window.__gradio__svelte__internal;
function Da(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, h, m, d, g, b, p, w, z;
  n = new om({}), o = new Qm({}), f = new dm({});
  let v = (
    /*showRemoveButton*/
    i[1] && Wa(i)
  ), y = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && qa(i);
  return m = new I_({}), b = new C_({}), {
    c() {
      e = gt("span"), t = gt("button"), wt(n.$$.fragment), l = bt(), s = gt("button"), wt(o.$$.fragment), r = bt(), a = gt("button"), wt(f.$$.fragment), c = bt(), v && v.c(), u = bt(), y && y.c(), _ = bt(), h = gt("button"), wt(m.$$.fragment), d = bt(), g = gt("button"), wt(b.$$.fragment), be(t, "class", "icon svelte-1m8vz1h"), be(t, "aria-label", "Create box"), Wn(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), be(s, "class", "icon svelte-1m8vz1h"), be(s, "aria-label", "Freehand drawing"), Wn(
        s,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), be(a, "class", "icon svelte-1m8vz1h"), be(a, "aria-label", "Edit boxes"), Wn(
        a,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), be(h, "class", "icon svelte-1m8vz1h"), be(h, "aria-label", "Rotate counterclockwise"), be(g, "class", "icon svelte-1m8vz1h"), be(g, "aria-label", "Rotate clockwise"), be(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(C, S) {
      qt(C, e, S), Ze(e, t), vt(n, t, null), Ze(e, l), Ze(e, s), vt(o, s, null), Ze(e, r), Ze(e, a), vt(f, a, null), Ze(e, c), v && v.m(e, null), Ze(e, u), y && y.m(e, null), Ze(e, _), Ze(e, h), vt(m, h, null), Ze(e, d), Ze(e, g), vt(b, g, null), p = !0, w || (z = [
        He(
          t,
          "click",
          /*click_handler*/
          i[41]
        ),
        He(
          s,
          "click",
          /*click_handler_1*/
          i[42]
        ),
        He(
          a,
          "click",
          /*click_handler_2*/
          i[43]
        ),
        He(
          h,
          "click",
          /*click_handler_5*/
          i[46]
        ),
        He(
          g,
          "click",
          /*click_handler_6*/
          i[47]
        )
      ], w = !0);
    },
    p(C, S) {
      (!p || S[0] & /*mode, Mode*/
      4608) && Wn(
        t,
        "selected",
        /*mode*/
        C[12] === /*Mode*/
        C[9].creation
      ), (!p || S[0] & /*mode, Mode*/
      4608) && Wn(
        s,
        "selected",
        /*mode*/
        C[12] === /*Mode*/
        C[9].freehand
      ), (!p || S[0] & /*mode, Mode*/
      4608) && Wn(
        a,
        "selected",
        /*mode*/
        C[12] === /*Mode*/
        C[9].drag
      ), /*showRemoveButton*/
      C[1] ? v ? (v.p(C, S), S[0] & /*showRemoveButton*/
      2 && ne(v, 1)) : (v = Wa(C), v.c(), ne(v, 1), v.m(e, u)) : v && (Tn(), ce(v, 1, 1, () => {
        v = null;
      }), In()), !/*disableEditBoxes*/
      C[5] && /*labelDetailLock*/
      C[16] ? y ? (y.p(C, S), S[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && ne(y, 1)) : (y = qa(C), y.c(), ne(y, 1), y.m(e, _)) : y && (Tn(), ce(y, 1, 1, () => {
        y = null;
      }), In());
    },
    i(C) {
      p || (ne(n.$$.fragment, C), ne(o.$$.fragment, C), ne(f.$$.fragment, C), ne(v), ne(y), ne(m.$$.fragment, C), ne(b.$$.fragment, C), p = !0);
    },
    o(C) {
      ce(n.$$.fragment, C), ce(o.$$.fragment, C), ce(f.$$.fragment, C), ce(v), ce(y), ce(m.$$.fragment, C), ce(b.$$.fragment, C), p = !1;
    },
    d(C) {
      C && Wt(e), pt(n), pt(o), pt(f), v && v.d(), y && y.d(), pt(m), pt(b), w = !1, $r(z);
    }
  };
}
function Wa(i) {
  let e, t, n, l, s;
  return t = new ym({}), {
    c() {
      e = gt("button"), wt(t.$$.fragment), be(e, "class", "icon svelte-1m8vz1h"), be(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      qt(o, e, r), vt(t, e, null), n = !0, l || (s = He(
        e,
        "click",
        /*click_handler_3*/
        i[44]
      ), l = !0);
    },
    p: Qr,
    i(o) {
      n || (ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ce(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Wt(e), pt(t), l = !1, s();
    }
  };
}
function qa(i) {
  let e, t, n, l, s;
  return t = new Wm({}), {
    c() {
      e = gt("button"), wt(t.$$.fragment), be(e, "class", "icon svelte-1m8vz1h"), be(e, "aria-label", "Edit label");
    },
    m(o, r) {
      qt(o, e, r), vt(t, e, null), n = !0, l || (s = He(
        e,
        "click",
        /*click_handler_4*/
        i[45]
      ), l = !0);
    },
    p: Qr,
    i(o) {
      n || (ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ce(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Wt(e), pt(t), l = !1, s();
    }
  };
}
function La(i) {
  let e, t;
  return e = new Gs({
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
        i[0].boxes.length ? wn(
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
    i[25]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[48]
  ), {
    c() {
      wt(e.$$.fragment);
    },
    m(n, l) {
      vt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? wn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      pt(e, n);
    }
  };
}
function Ea(i) {
  let e, t;
  return e = new Gs({
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
        i[0].boxes.length ? wn(
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
    i[26]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[49]
  ), {
    c() {
      wt(e.$$.fragment);
    },
    m(n, l) {
      vt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? wn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (s.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(s);
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      pt(e, n);
    }
  };
}
function Ra(i) {
  let e, t;
  return e = new Gs({
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
        i[0].boxes.length ? wn(
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
    i[27]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[50]
  ), {
    c() {
      wt(e.$$.fragment);
    },
    m(n, l) {
      vt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? wn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (s.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(s);
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      pt(e, n);
    }
  };
}
function Rg(i) {
  let e, t, n, l, s, o, r, a, f, c, u = (
    /*interactive*/
    i[2] && Da(i)
  ), _ = (
    /*editModalVisible*/
    i[13] && La(i)
  ), h = (
    /*newModalVisible*/
    i[14] && Ea(i)
  ), m = (
    /*editDefaultLabelVisible*/
    i[15] && Ra(i)
  );
  return {
    c() {
      e = gt("div"), t = gt("canvas"), n = bt(), u && u.c(), l = bt(), _ && _.c(), s = bt(), h && h.c(), o = bt(), m && m.c(), r = Bg(), ji(
        t,
        "height",
        /*height*/
        i[6]
      ), ji(
        t,
        "width",
        /*width*/
        i[7]
      ), be(t, "class", "canvas-annotator svelte-1m8vz1h"), be(e, "class", "canvas-container svelte-1m8vz1h"), be(e, "tabindex", "-1");
    },
    m(d, g) {
      qt(d, e, g), Ze(e, t), i[40](t), qt(d, n, g), u && u.m(d, g), qt(d, l, g), _ && _.m(d, g), qt(d, s, g), h && h.m(d, g), qt(d, o, g), m && m.m(d, g), qt(d, r, g), a = !0, f || (c = [
        He(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[17]
        ),
        He(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[18]
        ),
        He(t, "pointermove", function() {
          Dg(
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
        He(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[24]
        ),
        He(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[20]
        ),
        He(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[30]
        ),
        He(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[31]
        )
      ], f = !0);
    },
    p(d, g) {
      i = d, (!a || g[0] & /*height*/
      64) && ji(
        t,
        "height",
        /*height*/
        i[6]
      ), (!a || g[0] & /*width*/
      128) && ji(
        t,
        "width",
        /*width*/
        i[7]
      ), /*interactive*/
      i[2] ? u ? (u.p(i, g), g[0] & /*interactive*/
      4 && ne(u, 1)) : (u = Da(i), u.c(), ne(u, 1), u.m(l.parentNode, l)) : u && (Tn(), ce(u, 1, 1, () => {
        u = null;
      }), In()), /*editModalVisible*/
      i[13] ? _ ? (_.p(i, g), g[0] & /*editModalVisible*/
      8192 && ne(_, 1)) : (_ = La(i), _.c(), ne(_, 1), _.m(s.parentNode, s)) : _ && (Tn(), ce(_, 1, 1, () => {
        _ = null;
      }), In()), /*newModalVisible*/
      i[14] ? h ? (h.p(i, g), g[0] & /*newModalVisible*/
      16384 && ne(h, 1)) : (h = Ea(i), h.c(), ne(h, 1), h.m(o.parentNode, o)) : h && (Tn(), ce(h, 1, 1, () => {
        h = null;
      }), In()), /*editDefaultLabelVisible*/
      i[15] ? m ? (m.p(i, g), g[0] & /*editDefaultLabelVisible*/
      32768 && ne(m, 1)) : (m = Ra(i), m.c(), ne(m, 1), m.m(r.parentNode, r)) : m && (Tn(), ce(m, 1, 1, () => {
        m = null;
      }), In());
    },
    i(d) {
      a || (ne(u), ne(_), ne(h), ne(m), a = !0);
    },
    o(d) {
      ce(u), ce(_), ce(h), ce(m), a = !1;
    },
    d(d) {
      d && (Wt(e), Wt(n), Wt(l), Wt(s), Wt(o), Wt(r)), i[40](null), u && u.d(d), _ && _.d(d), h && h.d(d), m && m.d(d), f = !1, $r(c);
    }
  };
}
function ii(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function wn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Hg(i, e, t) {
  var n;
  (function(B) {
    B[B.creation = 0] = "creation", B[B.drag = 1] = "drag", B[B.freehand = 2] = "freehand";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: h = [] } = e, { disableEditBoxes: m = !1 } = e, { height: d = "100%" } = e, { width: g = "100%" } = e, { singleBox: b = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: w = !0 } = e, { useDefaultLabel: z = !1 } = e;
  p === null && (p = m);
  let v, y, C = null, S = -1, W = n.drag, k = new Cg(V);
  u !== null && u.boxes.length == 0 && (W = n.creation);
  let R = 0, H = 0, j = 0, P = 0, Q = 1, x = 0, $ = 0, L = !1, O = !1, E = !1, K = z, ee = { label: "", color: "" };
  const Z = Eg();
  function V() {
    if (y) {
      if (y.clearRect(0, 0, v.width, v.height), y.save(), y.translate(k.offsetX, k.offsetY), y.scale(k.scale, k.scale), C !== null) {
        switch (u.orientation) {
          case 0:
            y.drawImage(C, 0, 0, x, $);
            break;
          case 1:
            y.translate(x, 0), y.rotate(Math.PI / 2), y.drawImage(C, 0, 0, $, x);
            break;
          case 2:
            y.translate(x, $), y.rotate(Math.PI), y.drawImage(C, 0, 0, x, $);
            break;
          case 3:
            y.translate(0, $), y.rotate(-Math.PI / 2), y.drawImage(C, 0, 0, $, x);
            break;
        }
        y.restore();
      }
      for (const B of u.boxes.slice().reverse())
        B.render(y);
    }
  }
  function X(B) {
    t(11, S = B), u.boxes.forEach((Y) => {
      Y.setSelected(!1);
    }), B >= 0 && B < u.boxes.length && u.boxes[B].setSelected(!0), V();
  }
  function Ve(B) {
    s && (B.target instanceof Element && B.target.hasPointerCapture(B.pointerId) && B.target.releasePointerCapture(B.pointerId), W === n.creation ? ft(B) : W === n.freehand ? Qe(B) : W === n.drag && q(B));
  }
  function q(B) {
    console.log("clickBox function called, mode:", W === n.drag ? "drag" : "creation");
    const Y = v.getBoundingClientRect(), U = B.clientX - Y.left, te = B.clientY - Y.top;
    let oe = !1;
    for (const [le, ue] of u.boxes.entries()) {
      const yi = ue.indexOfPointInsideHandle(U, te);
      if (yi >= 0) {
        oe = !0, X(le), ue.startResize(yi, B);
        return;
      }
    }
    for (const [le, ue] of u.boxes.entries())
      if (ue.isPointInsideBox(U, te)) {
        oe = !0, X(le), ue.startDrag(B);
        return;
      }
    if (!oe) {
      if (b || X(-1), console.log("No box selected, checking if we should dispatch select event"), W === n.drag) {
        console.log("Mode is drag, calculating coordinates");
        const le = (U - k.offsetX) / Q / k.scale, ue = (te - k.offsetY) / Q / k.scale;
        console.log("Click detected in drag mode:", {
          mouseX: U,
          mouseY: te,
          imageX: le,
          imageY: ue,
          scaleFactor: Q,
          "canvasWindow.scale": k.scale,
          "canvasWindow.offsetX": k.offsetX,
          "canvasWindow.offsetY": k.offsetY
        }), C && le >= 0 && le <= C.naturalWidth && ue >= 0 && ue <= C.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(le), Math.round(ue)]), Z("select", {
          coordinates: [Math.round(le), Math.round(ue)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!C,
          imageX: le,
          imageY: ue,
          naturalWidth: C == null ? void 0 : C.naturalWidth,
          naturalHeight: C == null ? void 0 : C.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", W);
      k.startDrag(B);
    }
  }
  function I(B) {
    Z("change");
  }
  function ie(B) {
    if (u === null || W !== n.drag)
      return;
    const Y = v.getBoundingClientRect(), U = B.clientX - Y.left, te = B.clientY - Y.top;
    for (const [oe, le] of u.boxes.entries()) {
      const ue = le.indexOfPointInsideHandle(U, te);
      if (ue >= 0) {
        t(10, v.style.cursor = le.resizeHandles[ue].cursor, v);
        return;
      }
    }
    t(10, v.style.cursor = "default", v);
  }
  function se(B) {
    if (s)
      switch (B.key) {
        case "Delete":
          Ae();
          break;
      }
  }
  function D(B) {
    B.preventDefault();
    const Y = 1 / (1 + B.deltaY / 1e3 * 0.5), U = parseFloat((k.scale * Y).toFixed(2)), te = U < 1 ? 1 : U, oe = v.getBoundingClientRect(), le = B.clientX - oe.left, ue = B.clientY - oe.top, yi = (le - k.offsetX) / k.scale, df = (ue - k.offsetY) / k.scale;
    k.offsetX = le - yi * te, k.offsetY = ue - df * te, k.scale = te, V();
  }
  function Qe(B) {
    const Y = v.getBoundingClientRect();
    let U;
    h.length > 0 ? U = ii(h[0]) : b ? u.boxes.length > 0 ? U = u.boxes[0].color : U = dt[0] : U = dt[u.boxes.length % dt.length];
    let te = new ms(V, Be, k, R, H, j, P, "", U, o, r, a, f, c);
    te.startCreating(B, Y.left, Y.top), b ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), X(0), V(), Z("change");
  }
  function ft(B) {
    const Y = v.getBoundingClientRect(), U = (B.clientX - Y.left - k.offsetX) / Q / k.scale, te = (B.clientY - Y.top - k.offsetY) / Q / k.scale;
    let oe;
    h.length > 0 ? oe = ii(h[0]) : b ? u.boxes.length > 0 ? oe = u.boxes[0].color : oe = dt[0] : oe = dt[u.boxes.length % dt.length];
    let le = new ds(V, Be, k, R, H, j, P, "", U, te, U, te, oe, o, r, a, f, c);
    le.startCreating(B, Y.left, Y.top), b ? t(0, u.boxes = [le], u) : t(0, u.boxes = [le, ...u.boxes], u), X(0), V(), Z("change");
  }
  function $e() {
    t(12, W = n.creation), t(10, v.style.cursor = "crosshair", v);
  }
  function ze() {
    t(12, W = n.freehand), t(10, v.style.cursor = "crosshair", v);
  }
  function Ce() {
    t(12, W = n.drag), t(10, v.style.cursor = "default", v);
  }
  function Be() {
    S >= 0 && S < u.boxes.length && (u.boxes[S].getArea() < 1 ? Ae() : (m || (K ? M() : t(14, O = !0)), b && Ce()));
  }
  function Gt() {
    S >= 0 && S < u.boxes.length && !m && t(13, L = !0);
  }
  function pl(B) {
    s && Gt();
  }
  function vl(B) {
    t(13, L = !1);
    const { detail: Y } = B;
    let U = Y.label, te = Y.color, oe = Y.ret;
    if (S >= 0 && S < u.boxes.length) {
      let le = u.boxes[S];
      oe == 1 ? (le.label = U, le.color = ii(te), V(), Z("change")) : oe == -1 && Ae();
    }
  }
  function kl(B) {
    t(14, O = !1);
    const { detail: Y } = B;
    let U = Y.label, te = Y.color, oe = Y.ret, le = Y.lock;
    if (S >= 0 && S < u.boxes.length) {
      let ue = u.boxes[S];
      oe == 1 ? (t(16, K = le), ee.label = U, ee.color = te, ue.label = U, ue.color = ii(te), V(), Z("change"), Ce()) : Ae();
    }
  }
  function yl(B) {
    t(15, E = !1);
    const { detail: Y } = B;
    let U = Y.label, te = Y.color, oe = Y.ret, le = Y.lock;
    oe == 1 && (t(16, K = le), ee.label = U, ee.color = te);
  }
  function M() {
    if (S >= 0 && S < u.boxes.length) {
      let B = u.boxes[S];
      B.label = ee.label, ee.color !== "" && (B.color = ii(ee.color)), V(), Z("change"), Ce();
    }
  }
  function Ae() {
    S >= 0 && S < u.boxes.length && (u.boxes.splice(S, 1), X(-1), b && $e(), Z("change"));
  }
  function et(B) {
    t(0, u.orientation = ((u.orientation + B) % 4 + 4) % 4, u), k.orientation = u.orientation, ct();
    for (const Y of u.boxes)
      Y.onRotate(B);
    V();
  }
  function ct() {
    if (v) {
      if (Q = 1, t(10, v.width = v.clientWidth, v), k.setRotatedImage(C), C !== null) {
        if (k.imageRotatedWidth > v.width)
          Q = v.width / k.imageRotatedWidth, x = Math.round(k.imageRotatedWidth * Q), $ = Math.round(k.imageRotatedHeight * Q), R = 0, H = 0, j = x, P = $, t(10, v.height = $, v);
        else {
          x = k.imageRotatedWidth, $ = k.imageRotatedHeight;
          var B = (v.width - x) / 2;
          R = B, H = 0, j = B + x, P = $, t(10, v.height = $, v);
        }
        k.imageWidth = x, k.imageHeight = $;
      } else
        R = 0, H = 0, j = v.width, P = v.height, t(10, v.height = v.clientHeight, v);
      if (k.resize(v.width, v.height, R, H), j > 0 && P > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = R, Y.canvasYmin = H, Y.canvasXmax = j, Y.canvasYmax = P, Y.setScaleFactor(Q);
      V(), Z("change");
    }
  }
  const Cl = new ResizeObserver(ct);
  function Kt() {
    for (let B = 0; B < u.boxes.length; B++) {
      let Y = u.boxes[B];
      if (!(Y instanceof ds) && !(Y instanceof ms)) {
        let U = "", te = "";
        if (Y.hasOwnProperty("color") ? (U = Y.color, Array.isArray(U) && U.length === 3 && (U = `rgb(${U[0]}, ${U[1]}, ${U[2]})`)) : U = dt[B % dt.length], Y.hasOwnProperty("label") && (te = Y.label), Y.hasOwnProperty("type") && Y.type === "freehand" && Y.hasOwnProperty("points")) {
          let oe = new ms(V, Be, k, R, H, j, P, te, U, o, r, a, f, c);
          oe._points = Y.points, oe.updateBoundingBox(), Y = oe;
        } else
          Y = new ds(V, Be, k, R, H, j, P, te, Y.xmin, Y.ymin, Y.xmax, Y.ymax, U, o, r, a, f, c);
        t(0, u.boxes[B] = Y, u);
      }
    }
  }
  function Jt() {
    l !== null && (C === null || C.src != l) && (C = new Image(), C.src = l, C.onload = function() {
      ct(), V();
    });
  }
  qg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(h) || h.length == 0)
        for (let B = 0; B < _.length; B++) {
          let Y = dt[B % dt.length];
          h.push(wn(Y));
        }
      ee.label = _[0][0], ee.color = h[0];
    }
    y = v.getContext("2d"), Cl.observe(v), S < 0 && u !== null && u.boxes.length > 0 && X(0), Jt(), ct(), V();
  });
  function Sl() {
    document.addEventListener("keydown", se);
  }
  function zl() {
    document.removeEventListener("keydown", se);
  }
  Lg(() => {
    document.removeEventListener("keydown", se);
  });
  function Kn(B) {
    zg[B ? "unshift" : "push"](() => {
      v = B, t(10, v);
    });
  }
  const St = () => $e(), Jn = () => ze(), of = () => Ce(), af = () => Ae(), rf = () => t(15, E = !0), ff = () => et(-1), cf = () => et(1);
  function uf(B) {
    gs.call(this, i, B);
  }
  function _f(B) {
    gs.call(this, i, B);
  }
  function hf(B) {
    gs.call(this, i, B);
  }
  return i.$$set = (B) => {
    "imageUrl" in B && t(32, l = B.imageUrl), "interactive" in B && t(2, s = B.interactive), "boxAlpha" in B && t(33, o = B.boxAlpha), "boxMinSize" in B && t(34, r = B.boxMinSize), "handleSize" in B && t(35, a = B.handleSize), "boxThickness" in B && t(36, f = B.boxThickness), "boxSelectedThickness" in B && t(37, c = B.boxSelectedThickness), "value" in B && t(0, u = B.value), "choices" in B && t(3, _ = B.choices), "choicesColors" in B && t(4, h = B.choicesColors), "disableEditBoxes" in B && t(5, m = B.disableEditBoxes), "height" in B && t(6, d = B.height), "width" in B && t(7, g = B.width), "singleBox" in B && t(38, b = B.singleBox), "showRemoveButton" in B && t(1, p = B.showRemoveButton), "handlesCursor" in B && t(8, w = B.handlesCursor), "useDefaultLabel" in B && t(39, z = B.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (k.orientation = u.orientation, Jt(), Kt(), ct(), V());
  }, [
    u,
    p,
    s,
    _,
    h,
    m,
    d,
    g,
    w,
    n,
    v,
    S,
    W,
    L,
    O,
    E,
    K,
    Ve,
    I,
    ie,
    D,
    $e,
    ze,
    Ce,
    pl,
    vl,
    kl,
    yl,
    Ae,
    et,
    Sl,
    zl,
    l,
    o,
    r,
    a,
    f,
    c,
    b,
    z,
    Kn,
    St,
    Jn,
    of,
    af,
    rf,
    ff,
    cf,
    uf,
    _f,
    hf
  ];
}
class Xg extends Sg {
  constructor(e) {
    super(), Mg(
      this,
      e,
      Hg,
      Rg,
      Wg,
      {
        imageUrl: 32,
        interactive: 2,
        boxAlpha: 33,
        boxMinSize: 34,
        handleSize: 35,
        boxThickness: 36,
        boxSelectedThickness: 37,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 38,
        showRemoveButton: 1,
        handlesCursor: 8,
        useDefaultLabel: 39
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Yg,
  add_flush_callback: Ag,
  bind: Ig,
  binding_callbacks: Tg,
  create_component: Fg,
  destroy_component: jg,
  init: xg,
  mount_component: Ug,
  safe_not_equal: Vg,
  transition_in: Og,
  transition_out: Ng
} = window.__gradio__svelte__internal, { createEventDispatcher: Pg } = window.__gradio__svelte__internal;
function Zg(i) {
  let e, t, n;
  function l(o) {
    i[20](o);
  }
  let s = {
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
    i[0] !== void 0 && (s.value = /*value*/
    i[0]), e = new Xg({ props: s }), Tg.push(() => Ig(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), e.$on(
      "select",
      /*select_handler*/
      i[22]
    ), {
      c() {
        Fg(e.$$.fragment);
      },
      m(o, r) {
        Ug(e, o, r), n = !0;
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
        o[0], Ag(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Og(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Ng(e.$$.fragment, o), n = !1;
      },
      d(o) {
        jg(e, o);
      }
    }
  );
}
function Gg(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: h } = e, { value: m } = e, { disableEditBoxes: d } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: p } = e, { useDefaultLabel: w } = e, z, v;
  const y = Pg();
  function C(k) {
    m = k, t(0, m);
  }
  const S = () => y("change"), W = (k) => y("select", k.detail);
  return i.$$set = (k) => {
    "src" in k && t(18, n = k.src), "interactive" in k && t(1, l = k.interactive), "boxesAlpha" in k && t(2, s = k.boxesAlpha), "labelList" in k && t(3, o = k.labelList), "labelColors" in k && t(4, r = k.labelColors), "boxMinSize" in k && t(5, a = k.boxMinSize), "handleSize" in k && t(6, f = k.handleSize), "boxThickness" in k && t(7, c = k.boxThickness), "height" in k && t(8, u = k.height), "width" in k && t(9, _ = k.width), "boxSelectedThickness" in k && t(10, h = k.boxSelectedThickness), "value" in k && t(0, m = k.value), "disableEditBoxes" in k && t(11, d = k.disableEditBoxes), "singleBox" in k && t(12, g = k.singleBox), "showRemoveButton" in k && t(13, b = k.showRemoveButton), "handlesCursor" in k && t(14, p = k.handlesCursor), "useDefaultLabel" in k && t(15, w = k.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, z = n), t(19, v = n);
      const k = n;
      gd(k).then((R) => {
        v === k && t(16, z = R);
      });
    }
  }, [
    m,
    l,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    h,
    d,
    g,
    b,
    p,
    w,
    z,
    y,
    n,
    v,
    C,
    S,
    W
  ];
}
class Kg extends Yg {
  constructor(e) {
    super(), xg(this, e, Gg, Zg, Vg, {
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
class Ha {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Jg,
  add_flush_callback: al,
  append: qn,
  attr: ui,
  bind: rl,
  binding_callbacks: wi,
  bubble: li,
  check_outros: ln,
  create_component: Et,
  create_slot: Qg,
  destroy_component: Rt,
  detach: hn,
  element: gi,
  empty: $g,
  get_all_dirty_from_scope: e2,
  get_slot_changes: t2,
  group_outros: sn,
  init: n2,
  insert: dn,
  mount_component: Ht,
  noop: i2,
  safe_not_equal: l2,
  space: nn,
  toggle_class: Xa,
  transition_in: J,
  transition_out: ae,
  update_slot_base: s2
} = window.__gradio__svelte__internal, { createEventDispatcher: o2, tick: a2 } = window.__gradio__svelte__internal;
function Ya(i) {
  let e, t;
  return e = new Wd({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [r2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Et(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*value*/
      2 && (s.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (s.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      8388608 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function r2(i) {
  let e, t;
  return e = new fl({
    props: {
      Icon: xu,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Et(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      n[8]("common.download")), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Aa(i) {
  let e, t;
  return e = new uh({
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
      Et(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      2 && (s.value = /*value*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Ia(i) {
  let e, t, n;
  return t = new fl({
    props: { Icon: er, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = gi("div"), Et(t.$$.fragment);
    },
    m(l, s) {
      dn(l, e, s), Ht(t, e, null), n = !0;
    },
    p: i2,
    i(l) {
      n || (J(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ae(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && hn(e), Rt(t);
    }
  };
}
function Ta(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = Qg(
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
    m(l, s) {
      n && n.m(l, s), e = !0;
    },
    p(l, s) {
      n && n.p && (!e || s[1] & /*$$scope*/
      8388608) && s2(
        n,
        t,
        l,
        /*$$scope*/
        l[54],
        e ? t2(
          t,
          /*$$scope*/
          l[54],
          s,
          null
        ) : e2(
          /*$$scope*/
          l[54]
        ),
        null
      );
    },
    i(l) {
      e || (J(n, l), e = !0);
    },
    o(l) {
      ae(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function f2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ta(i)
  );
  return {
    c() {
      n && n.c(), e = $g();
    },
    m(l, s) {
      n && n.m(l, s), dn(l, e, s), t = !0;
    },
    p(l, s) {
      /*value*/
      l[1] === null ? n ? (n.p(l, s), s[0] & /*value*/
      2 && J(n, 1)) : (n = Ta(l), n.c(), J(n, 1), n.m(e.parentNode, e)) : n && (sn(), ae(n, 1, 1, () => {
        n = null;
      }), ln());
    },
    i(l) {
      t || (J(n), t = !0);
    },
    o(l) {
      ae(n), t = !1;
    },
    d(l) {
      l && hn(e), n && n.d(l);
    }
  };
}
function Fa(i) {
  let e, t;
  return e = new $1({
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
      Et(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      64 && (s.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      1 && (s.upload = /*upload*/
      n[31]), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
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
  let e, t, n, l;
  function s(r) {
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
    i[1]), t = new Kg({ props: o }), wi.push(() => rl(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), t.$on(
      "select",
      /*select_handler*/
      i[52]
    ), {
      c() {
        e = gi("div"), Et(t.$$.fragment), ui(e, "class", "image-frame svelte-1gjdske"), Xa(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        dn(r, e, a), Ht(t, e, null), l = !0;
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
        r[1], al(() => n = !1)), t.$set(f), (!l || a[0] & /*selectable*/
        32) && Xa(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (J(t.$$.fragment, r), l = !0);
      },
      o(r) {
        ae(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && hn(e), Rt(t);
      }
    }
  );
}
function xa(i) {
  let e, t, n;
  function l(o) {
    i[53](o);
  }
  let s = {
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
    i[0] !== void 0 && (s.active_source = /*active_source*/
    i[0]), e = new Mh({ props: s }), wi.push(() => rl(e, "active_source", l)), {
      c() {
        Et(e.$$.fragment);
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
        o[0], al(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (J(e.$$.fragment, o), n = !0);
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
function c2(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, h, m, d = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new Dc({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: tr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Ya(i)
  ), p = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Aa(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Ia(i)
  );
  function z(k) {
    i[42](k);
  }
  function v(k) {
    i[43](k);
  }
  let y = {
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
    $$slots: { default: [f2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (y.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (y.dragging = /*dragging*/
  i[30]), f = new r1({ props: y }), i[41](f), wi.push(() => rl(f, "uploading", z)), wi.push(() => rl(f, "dragging", v)), f.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), f.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let C = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Fa(i)
  ), S = (
    /*value*/
    i[1] !== null && ja(i)
  ), W = d && xa(i);
  return {
    c() {
      Et(e.$$.fragment), t = nn(), n = gi("div"), b && b.c(), l = nn(), p && p.c(), s = nn(), w && w.c(), o = nn(), r = gi("div"), a = gi("div"), Et(f.$$.fragment), _ = nn(), C && C.c(), h = nn(), S && S.c(), m = nn(), W && W.c(), ui(n, "class", "icon-buttons svelte-1gjdske"), ui(a, "class", "upload-container svelte-1gjdske"), ui(r, "data-testid", "image"), ui(r, "class", "image-container svelte-1gjdske");
    },
    m(k, R) {
      Ht(e, k, R), dn(k, t, R), dn(k, n, R), b && b.m(n, null), qn(n, l), p && p.m(n, null), qn(n, s), w && w.m(n, null), dn(k, o, R), dn(k, r, R), qn(r, a), Ht(f, a, null), qn(a, _), C && C.m(a, null), qn(a, h), S && S.m(a, null), qn(r, m), W && W.m(r, null), g = !0;
    },
    p(k, R) {
      const H = {};
      R[0] & /*show_label*/
      8 && (H.show_label = /*show_label*/
      k[3]), R[0] & /*label*/
      4 && (H.label = /*label*/
      k[2] || "Image Annotator"), e.$set(H), /*showDownloadButton*/
      k[10] && /*value*/
      k[1] !== null ? b ? (b.p(k, R), R[0] & /*showDownloadButton, value*/
      1026 && J(b, 1)) : (b = Ya(k), b.c(), J(b, 1), b.m(n, l)) : b && (sn(), ae(b, 1, 1, () => {
        b = null;
      }), ln()), /*showShareButton*/
      k[9] && /*value*/
      k[1] !== null ? p ? (p.p(k, R), R[0] & /*showShareButton, value*/
      514 && J(p, 1)) : (p = Aa(k), p.c(), J(p, 1), p.m(n, s)) : p && (sn(), ae(p, 1, 1, () => {
        p = null;
      }), ln()), /*showClearButton*/
      k[11] && /*value*/
      k[1] !== null && /*interactive*/
      k[7] ? w ? (w.p(k, R), R[0] & /*showClearButton, value, interactive*/
      2178 && J(w, 1)) : (w = Ia(k), w.c(), J(w, 1), w.m(n, null)) : w && (sn(), ae(w, 1, 1, () => {
        w = null;
      }), ln());
      const j = {};
      R[0] & /*value, active_source*/
      3 && (j.hidden = /*value*/
      k[1] !== null || /*active_source*/
      k[0] === "webcam"), R[0] & /*active_source*/
      1 && (j.filetype = /*active_source*/
      k[0] === "clipboard" ? "clipboard" : "image/*"), R[0] & /*root*/
      64 && (j.root = /*root*/
      k[6]), R[0] & /*max_file_size*/
      33554432 && (j.max_file_size = /*max_file_size*/
      k[25]), R[0] & /*sources*/
      16 && (j.disable_click = !/*sources*/
      k[4].includes("upload")), R[0] & /*cli_upload*/
      67108864 && (j.upload = /*cli_upload*/
      k[26]), R[0] & /*stream_handler*/
      134217728 && (j.stream_handler = /*stream_handler*/
      k[27]), R[0] & /*value*/
      2 | R[1] & /*$$scope*/
      8388608 && (j.$$scope = { dirty: R, ctx: k }), !c && R[0] & /*uploading*/
      536870912 && (c = !0, j.uploading = /*uploading*/
      k[29], al(() => c = !1)), !u && R[0] & /*dragging*/
      1073741824 && (u = !0, j.dragging = /*dragging*/
      k[30], al(() => u = !1)), f.$set(j), /*value*/
      k[1] === null && /*active_source*/
      k[0] === "webcam" ? C ? (C.p(k, R), R[0] & /*value, active_source*/
      3 && J(C, 1)) : (C = Fa(k), C.c(), J(C, 1), C.m(a, h)) : C && (sn(), ae(C, 1, 1, () => {
        C = null;
      }), ln()), /*value*/
      k[1] !== null ? S ? (S.p(k, R), R[0] & /*value*/
      2 && J(S, 1)) : (S = ja(k), S.c(), J(S, 1), S.m(a, null)) : S && (sn(), ae(S, 1, 1, () => {
        S = null;
      }), ln()), R[0] & /*sources, value, interactive*/
      146 && (d = /*sources*/
      (k[4].length > 1 || /*sources*/
      k[4].includes("clipboard")) && /*value*/
      k[1] === null && /*interactive*/
      k[7]), d ? W ? (W.p(k, R), R[0] & /*sources, value, interactive*/
      146 && J(W, 1)) : (W = xa(k), W.c(), J(W, 1), W.m(r, null)) : W && (sn(), ae(W, 1, 1, () => {
        W = null;
      }), ln());
    },
    i(k) {
      g || (J(e.$$.fragment, k), J(b), J(p), J(w), J(f.$$.fragment, k), J(C), J(S), J(W), g = !0);
    },
    o(k) {
      ae(e.$$.fragment, k), ae(b), ae(p), ae(w), ae(f.$$.fragment, k), ae(C), ae(S), ae(W), g = !1;
    },
    d(k) {
      k && (hn(t), hn(n), hn(o), hn(r)), Rt(e, k), b && b.d(), p && p.d(), w && w.d(), i[41](null), Rt(f), C && C.d(), S && S.d(), W && W.d();
    }
  };
}
function u2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(M, Ae, et, ct) {
    function Cl(Kt) {
      return Kt instanceof et ? Kt : new et(function(Jt) {
        Jt(Kt);
      });
    }
    return new (et || (et = Promise))(function(Kt, Jt) {
      function Sl(St) {
        try {
          Kn(ct.next(St));
        } catch (Jn) {
          Jt(Jn);
        }
      }
      function zl(St) {
        try {
          Kn(ct.throw(St));
        } catch (Jn) {
          Jt(Jn);
        }
      }
      function Kn(St) {
        St.done ? Kt(St.value) : Cl(St.value).then(Sl, zl);
      }
      Kn((ct = ct.apply(M, Ae || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: h } = e, { showShareButton: m } = e, { showDownloadButton: d } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: p } = e, { labelColors: w } = e, { boxMinSize: z } = e, { handleSize: v } = e, { height: y } = e, { width: C } = e, { boxThickness: S } = e, { disableEditBoxes: W } = e, { singleBox: k } = e, { showRemoveButton: R } = e, { handlesCursor: H } = e, { boxSelectedThickness: j } = e, { max_file_size: P = null } = e, { cli_upload: Q } = e, { stream_handler: x } = e, { useDefaultLabel: $ } = e, L, O = !1, { active_source: E = null } = e;
  function K({ detail: M }) {
    t(1, o = new Ha()), t(1, o.image = M, o), Z("upload");
  }
  function ee(M) {
    return s(this, void 0, void 0, function* () {
      const Ae = yield L.load_files([new File([M], "webcam.png")]), et = (Ae == null ? void 0 : Ae[0]) || null;
      et ? (t(1, o = new Ha()), t(1, o.image = et, o)) : t(1, o = null), yield a2(), Z("change");
    });
  }
  const Z = o2();
  let V = !1;
  function X(M) {
    return s(this, void 0, void 0, function* () {
      switch (M) {
        case "clipboard":
          L.paste_clipboard();
          break;
      }
    });
  }
  function Ve() {
    t(1, o = null), Z("clear"), Z("change");
  }
  const q = async (M) => M === null ? "" : `<img src="${await Q_(M.image)}" />`;
  function I(M) {
    li.call(this, i, M);
  }
  function ie(M) {
    li.call(this, i, M);
  }
  function se(M) {
    wi[M ? "unshift" : "push"](() => {
      L = M, t(31, L);
    });
  }
  function D(M) {
    O = M, t(29, O);
  }
  function Qe(M) {
    V = M, t(30, V);
  }
  function ft(M) {
    li.call(this, i, M);
  }
  const $e = (M) => ee(M.detail), ze = (M) => ee(M.detail);
  function Ce(M) {
    li.call(this, i, M);
  }
  function Be(M) {
    li.call(this, i, M);
  }
  const Gt = (M) => ee(M.detail);
  function pl(M) {
    o = M, t(1, o);
  }
  const vl = () => Z("change"), kl = (M) => Z("select", { index: null, value: M.detail.coordinates });
  function yl(M) {
    E = M, t(0, E), t(4, f);
  }
  return i.$$set = (M) => {
    "value" in M && t(1, o = M.value), "label" in M && t(2, r = M.label), "show_label" in M && t(3, a = M.show_label), "sources" in M && t(4, f = M.sources), "selectable" in M && t(5, c = M.selectable), "root" in M && t(6, u = M.root), "interactive" in M && t(7, _ = M.interactive), "i18n" in M && t(8, h = M.i18n), "showShareButton" in M && t(9, m = M.showShareButton), "showDownloadButton" in M && t(10, d = M.showDownloadButton), "showClearButton" in M && t(11, g = M.showClearButton), "boxesAlpha" in M && t(12, b = M.boxesAlpha), "labelList" in M && t(13, p = M.labelList), "labelColors" in M && t(14, w = M.labelColors), "boxMinSize" in M && t(15, z = M.boxMinSize), "handleSize" in M && t(16, v = M.handleSize), "height" in M && t(17, y = M.height), "width" in M && t(18, C = M.width), "boxThickness" in M && t(19, S = M.boxThickness), "disableEditBoxes" in M && t(20, W = M.disableEditBoxes), "singleBox" in M && t(21, k = M.singleBox), "showRemoveButton" in M && t(22, R = M.showRemoveButton), "handlesCursor" in M && t(23, H = M.handlesCursor), "boxSelectedThickness" in M && t(24, j = M.boxSelectedThickness), "max_file_size" in M && t(25, P = M.max_file_size), "cli_upload" in M && t(26, Q = M.cli_upload), "stream_handler" in M && t(27, x = M.stream_handler), "useDefaultLabel" in M && t(28, $ = M.useDefaultLabel), "active_source" in M && t(0, E = M.active_source), "$$scope" in M && t(54, l = M.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && O && Ve(), i.$$.dirty[0] & /*dragging*/
    1073741824 && Z("drag", V), i.$$.dirty[0] & /*active_source, sources*/
    17 && !E && f && t(0, E = f[0]);
  }, [
    E,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    h,
    m,
    d,
    g,
    b,
    p,
    w,
    z,
    v,
    y,
    C,
    S,
    W,
    k,
    R,
    H,
    j,
    P,
    Q,
    x,
    $,
    O,
    V,
    L,
    K,
    ee,
    Z,
    X,
    Ve,
    n,
    q,
    I,
    ie,
    se,
    D,
    Qe,
    ft,
    $e,
    ze,
    Ce,
    Be,
    Gt,
    pl,
    vl,
    kl,
    yl,
    l
  ];
}
class _2 extends Jg {
  constructor(e) {
    super(), n2(
      this,
      e,
      u2,
      c2,
      l2,
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
  SvelteComponent: h2,
  attr: Gi,
  detach: ef,
  element: tf,
  init: d2,
  insert: nf,
  noop: Ua,
  safe_not_equal: m2,
  src_url_equal: Va,
  toggle_class: Vt
} = window.__gradio__svelte__internal;
function Oa(i) {
  let e, t;
  return {
    c() {
      e = tf("img"), Va(e.src, t = /*value*/
      i[0].url) || Gi(e, "src", t), Gi(e, "alt", "");
    },
    m(n, l) {
      nf(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Va(e.src, t = /*value*/
      n[0].url) && Gi(e, "src", t);
    },
    d(n) {
      n && ef(e);
    }
  };
}
function g2(i) {
  let e, t = (
    /*value*/
    i[0] && Oa(i)
  );
  return {
    c() {
      e = tf("div"), t && t.c(), Gi(e, "class", "container svelte-1sgcyba"), Vt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Vt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Vt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Vt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      nf(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Oa(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Vt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Vt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Vt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Vt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Ua,
    o: Ua,
    d(n) {
      n && ef(e), t && t.d();
    }
  };
}
function b2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: s = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, l = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, l, s];
}
class j2 extends h2 {
  constructor(e) {
    super(), d2(this, e, b2, g2, m2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: w2,
  add_flush_callback: Na,
  assign: p2,
  bind: Pa,
  binding_callbacks: Za,
  check_outros: v2,
  create_component: pn,
  destroy_component: vn,
  detach: lf,
  empty: k2,
  flush: G,
  get_spread_object: y2,
  get_spread_update: C2,
  group_outros: S2,
  init: z2,
  insert: sf,
  mount_component: kn,
  safe_not_equal: B2,
  space: M2,
  transition_in: Xt,
  transition_out: Yt
} = window.__gradio__svelte__internal;
function D2(i) {
  let e, t;
  return e = new su({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [L2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*$$scope*/
      8192 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function W2(i) {
  let e, t;
  return e = new rr({
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
      pn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*gradio*/
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function q2(i) {
  let e, t;
  return e = new rr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*gradio*/
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function L2(i) {
  let e, t;
  return e = new tr({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function E2(i) {
  let e, t, n, l;
  const s = [q2, W2, D2], o = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[33] === "upload" ? 0 : (
        /*active_source*/
        a[33] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = k2();
    },
    m(a, f) {
      o[e].m(a, f), sf(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (S2(), Yt(o[c], 1, 1, () => {
        o[c] = null;
      }), v2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Xt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Xt(t), l = !0);
    },
    o(a) {
      Yt(t), l = !1;
    },
    d(a) {
      a && lf(n), o[e].d(a);
    }
  };
}
function R2(i) {
  let e, t, n, l, s, o;
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
    a = p2(a, r[_]);
  e = new _d({ props: a });
  function f(_) {
    i[34](_);
  }
  function c(_) {
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
    $$slots: { default: [E2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new _2({ props: u }), Za.push(() => Pa(n, "active_source", f)), Za.push(() => Pa(n, "value", c)), n.$on(
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
        pn(e.$$.fragment), t = M2(), pn(n.$$.fragment);
      },
      m(_, h) {
        kn(e, _, h), sf(_, t, h), kn(n, _, h), o = !0;
      },
      p(_, h) {
        const m = h[0] & /*loading_status*/
        2 | h[1] & /*gradio*/
        1 ? C2(r, [
          h[1] & /*gradio*/
          1 && {
            autoscroll: (
              /*gradio*/
              _[31].autoscroll
            )
          },
          h[1] & /*gradio*/
          1 && { i18n: (
            /*gradio*/
            _[31].i18n
          ) },
          h[0] & /*loading_status*/
          2 && y2(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(m);
        const d = {};
        h[0] & /*_selectable*/
        1024 && (d.selectable = /*_selectable*/
        _[10]), h[0] & /*root*/
        128 && (d.root = /*root*/
        _[7]), h[0] & /*sources*/
        16384 && (d.sources = /*sources*/
        _[14]), h[0] & /*interactive*/
        262144 && (d.interactive = /*interactive*/
        _[18]), h[0] & /*show_download_button*/
        32768 && (d.showDownloadButton = /*show_download_button*/
        _[15]), h[0] & /*show_share_button*/
        65536 && (d.showShareButton = /*show_share_button*/
        _[16]), h[0] & /*show_clear_button*/
        131072 && (d.showClearButton = /*show_clear_button*/
        _[17]), h[1] & /*gradio*/
        1 && (d.i18n = /*gradio*/
        _[31].i18n), h[0] & /*boxes_alpha*/
        524288 && (d.boxesAlpha = /*boxes_alpha*/
        _[19]), h[0] & /*height*/
        256 && (d.height = /*height*/
        _[8]), h[0] & /*width*/
        512 && (d.width = /*width*/
        _[9]), h[0] & /*label_list*/
        1048576 && (d.labelList = /*label_list*/
        _[20]), h[0] & /*label_colors*/
        2097152 && (d.labelColors = /*label_colors*/
        _[21]), h[0] & /*box_min_size*/
        4194304 && (d.boxMinSize = /*box_min_size*/
        _[22]), h[0] & /*label*/
        32 && (d.label = /*label*/
        _[5]), h[0] & /*show_label*/
        64 && (d.show_label = /*show_label*/
        _[6]), h[1] & /*gradio*/
        1 && (d.max_file_size = /*gradio*/
        _[31].max_file_size), h[1] & /*gradio*/
        1 && (d.cli_upload = /*gradio*/
        _[31].client.upload), h[1] & /*gradio*/
        1 && (d.stream_handler = /*gradio*/
        _[31].client.stream), h[0] & /*handle_size*/
        8388608 && (d.handleSize = /*handle_size*/
        _[23]), h[0] & /*box_thickness*/
        16777216 && (d.boxThickness = /*box_thickness*/
        _[24]), h[0] & /*box_selected_thickness*/
        33554432 && (d.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), h[0] & /*disable_edit_boxes*/
        67108864 && (d.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), h[0] & /*single_box*/
        134217728 && (d.singleBox = /*single_box*/
        _[27]), h[0] & /*show_remove_button*/
        268435456 && (d.showRemoveButton = /*show_remove_button*/
        _[28]), h[0] & /*handles_cursor*/
        536870912 && (d.handlesCursor = /*handles_cursor*/
        _[29]), h[0] & /*use_default_label*/
        1073741824 && (d.useDefaultLabel = /*use_default_label*/
        _[30]), h[1] & /*$$scope, gradio, active_source*/
        8197 && (d.$$scope = { dirty: h, ctx: _ }), !l && h[1] & /*active_source*/
        4 && (l = !0, d.active_source = /*active_source*/
        _[33], Na(() => l = !1)), !s && h[0] & /*value*/
        1 && (s = !0, d.value = /*value*/
        _[0], Na(() => s = !1)), n.$set(d);
      },
      i(_) {
        o || (Xt(e.$$.fragment, _), Xt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        Yt(e.$$.fragment, _), Yt(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && lf(t), vn(e, _), vn(n, _);
      }
    }
  );
}
function H2(i) {
  let e, t;
  return e = new qf({
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
      $$slots: { default: [R2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*visible*/
      16 && (s.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      2 && (s.border_mode = /*dragging*/
      n[32] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      n[2]), l[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      n[3]), l[0] & /*width*/
      512 && (s.width = /*width*/
      n[9]), l[0] & /*container*/
      2048 && (s.container = /*container*/
      n[11]), l[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      n[12]), l[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      n[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | l[1] & /*$$scope, gradio, active_source, dragging*/
      8199 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function X2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: h = !0 } = e, { scale: m = null } = e, { min_width: d = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: p } = e, { show_share_button: w } = e, { show_clear_button: z } = e, { interactive: v } = e, { boxes_alpha: y } = e, { label_list: C } = e, { label_colors: S } = e, { box_min_size: W } = e, { handle_size: k } = e, { box_thickness: R } = e, { box_selected_thickness: H } = e, { disable_edit_boxes: j } = e, { single_box: P } = e, { show_remove_button: Q } = e, { handles_cursor: x } = e, { use_default_label: $ } = e, { gradio: L } = e, O, E = null;
  function K(D) {
    E = D, t(33, E);
  }
  function ee(D) {
    o = D, t(0, o);
  }
  const Z = () => L.dispatch("change"), V = () => L.dispatch("edit"), X = () => {
    L.dispatch("clear");
  }, Ve = ({ detail: D }) => t(32, O = D), q = () => L.dispatch("upload"), I = ({ detail: D }) => L.dispatch("select", D), ie = ({ detail: D }) => L.dispatch("share", D), se = ({ detail: D }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), L.dispatch("error", D);
  };
  return i.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, l = D.elem_classes), "visible" in D && t(4, s = D.visible), "value" in D && t(0, o = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, f = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, _ = D._selectable), "container" in D && t(11, h = D.container), "scale" in D && t(12, m = D.scale), "min_width" in D && t(13, d = D.min_width), "loading_status" in D && t(1, g = D.loading_status), "sources" in D && t(14, b = D.sources), "show_download_button" in D && t(15, p = D.show_download_button), "show_share_button" in D && t(16, w = D.show_share_button), "show_clear_button" in D && t(17, z = D.show_clear_button), "interactive" in D && t(18, v = D.interactive), "boxes_alpha" in D && t(19, y = D.boxes_alpha), "label_list" in D && t(20, C = D.label_list), "label_colors" in D && t(21, S = D.label_colors), "box_min_size" in D && t(22, W = D.box_min_size), "handle_size" in D && t(23, k = D.handle_size), "box_thickness" in D && t(24, R = D.box_thickness), "box_selected_thickness" in D && t(25, H = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, j = D.disable_edit_boxes), "single_box" in D && t(27, P = D.single_box), "show_remove_button" in D && t(28, Q = D.show_remove_button), "handles_cursor" in D && t(29, x = D.handles_cursor), "use_default_label" in D && t(30, $ = D.use_default_label), "gradio" in D && t(31, L = D.gradio);
  }, [
    o,
    g,
    n,
    l,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    h,
    m,
    d,
    b,
    p,
    w,
    z,
    v,
    y,
    C,
    S,
    W,
    k,
    R,
    H,
    j,
    P,
    Q,
    x,
    $,
    L,
    O,
    E,
    K,
    ee,
    Z,
    V,
    X,
    Ve,
    q,
    I,
    ie,
    se
  ];
}
class x2 extends w2 {
  constructor(e) {
    super(), z2(
      this,
      e,
      X2,
      H2,
      B2,
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
    this.$$set({ elem_id: e }), G();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), G();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), G();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), G();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), G();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), G();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), G();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), G();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), G();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), G();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), G();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), G();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), G();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), G();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), G();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), G();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), G();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), G();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), G();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), G();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), G();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), G();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), G();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), G();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), G();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), G();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), G();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), G();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), G();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), G();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), G();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), G();
  }
}
export {
  j2 as BaseExample,
  x2 as default
};
