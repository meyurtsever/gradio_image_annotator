const {
  SvelteComponent: Yc,
  assign: Xc,
  create_slot: Rc,
  detach: Hc,
  element: Ic,
  get_all_dirty_from_scope: Ac,
  get_slot_changes: Tc,
  get_spread_update: Pc,
  init: Fc,
  insert: Uc,
  safe_not_equal: jc,
  set_dynamic_element_data: ao,
  set_style: Fe,
  toggle_class: Ct,
  transition_in: or,
  transition_out: ar,
  update_slot_base: Oc
} = window.__gradio__svelte__internal;
function Vc(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Rc(
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
    r = Xc(r, o[a]);
  return {
    c() {
      e = Ic(
        /*tag*/
        i[14]
      ), l && l.c(), ao(
        /*tag*/
        i[14]
      )(e, r), Ct(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), Ct(
        e,
        "padded",
        /*padding*/
        i[6]
      ), Ct(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), Ct(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), Ct(e, "hide-container", !/*explicit_call*/
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
      Uc(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && Oc(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? Tc(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Ac(
          /*$$scope*/
          a[17]
        ),
        null
      ), ao(
        /*tag*/
        a[14]
      )(e, r = Pc(o, [
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
      ])), Ct(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Ct(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Ct(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Ct(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Ct(e, "hide-container", !/*explicit_call*/
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
      n || (or(l, a), n = !0);
    },
    o(a) {
      ar(l, a), n = !1;
    },
    d(a) {
      a && Hc(e), l && l.d(a);
    }
  };
}
function Nc(i) {
  let e, t = (
    /*tag*/
    i[14] && Vc(i)
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
      e || (or(t, n), e = !0);
    },
    o(n) {
      ar(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Kc(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: g = !0 } = e, { visible: m = !0 } = e, { allow_overflow: w = !0 } = e, { scale: y = null } = e, { min_width: p = 0 } = e, C = _ === "fieldset" ? "fieldset" : "div";
  const S = (x) => {
    if (x !== void 0) {
      if (typeof x == "number")
        return x + "px";
      if (typeof x == "string")
        return x;
    }
  };
  return i.$$set = (x) => {
    "height" in x && t(0, l = x.height), "width" in x && t(1, o = x.width), "elem_id" in x && t(2, r = x.elem_id), "elem_classes" in x && t(3, a = x.elem_classes), "variant" in x && t(4, c = x.variant), "border_mode" in x && t(5, f = x.border_mode), "padding" in x && t(6, u = x.padding), "type" in x && t(16, _ = x.type), "test_id" in x && t(7, d = x.test_id), "explicit_call" in x && t(8, h = x.explicit_call), "container" in x && t(9, g = x.container), "visible" in x && t(10, m = x.visible), "allow_overflow" in x && t(11, w = x.allow_overflow), "scale" in x && t(12, y = x.scale), "min_width" in x && t(13, p = x.min_width), "$$scope" in x && t(17, s = x.$$scope);
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
    m,
    w,
    y,
    p,
    C,
    S,
    _,
    s,
    n
  ];
}
class Zc extends Yc {
  constructor(e) {
    super(), Fc(this, e, Kc, Nc, jc, {
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
  SvelteComponent: Gc,
  attr: Jc,
  create_slot: Qc,
  detach: $c,
  element: ef,
  get_all_dirty_from_scope: tf,
  get_slot_changes: nf,
  init: sf,
  insert: lf,
  safe_not_equal: of,
  transition_in: af,
  transition_out: rf,
  update_slot_base: cf
} = window.__gradio__svelte__internal;
function ff(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = Qc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = ef("div"), s && s.c(), Jc(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      lf(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && cf(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? nf(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : tf(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (af(s, l), t = !0);
    },
    o(l) {
      rf(s, l), t = !1;
    },
    d(l) {
      l && $c(e), s && s.d(l);
    }
  };
}
function uf(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class hf extends Gc {
  constructor(e) {
    super(), sf(this, e, uf, ff, of, {});
  }
}
const {
  SvelteComponent: _f,
  attr: ro,
  check_outros: df,
  create_component: mf,
  create_slot: gf,
  destroy_component: bf,
  detach: es,
  element: pf,
  empty: wf,
  get_all_dirty_from_scope: vf,
  get_slot_changes: kf,
  group_outros: yf,
  init: Cf,
  insert: ts,
  mount_component: Sf,
  safe_not_equal: xf,
  set_data: zf,
  space: Bf,
  text: Mf,
  toggle_class: qn,
  transition_in: gi,
  transition_out: ns,
  update_slot_base: Df
} = window.__gradio__svelte__internal;
function co(i) {
  let e, t;
  return e = new hf({
    props: {
      $$slots: { default: [Wf] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      mf(e.$$.fragment);
    },
    m(n, s) {
      Sf(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (gi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ns(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bf(e, n);
    }
  };
}
function Wf(i) {
  let e;
  return {
    c() {
      e = Mf(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      ts(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && zf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && es(e);
    }
  };
}
function Ef(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = gf(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && co(i)
  );
  return {
    c() {
      e = pf("span"), o && o.c(), t = Bf(), r && r.c(), n = wf(), ro(e, "data-testid", "block-info"), ro(e, "class", "svelte-22c38v"), qn(e, "sr-only", !/*show_label*/
      i[0]), qn(e, "hide", !/*show_label*/
      i[0]), qn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      ts(a, e, c), o && o.m(e, null), ts(a, t, c), r && r.m(a, c), ts(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Df(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? kf(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : vf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && qn(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && qn(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && qn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && gi(r, 1)) : (r = co(a), r.c(), gi(r, 1), r.m(n.parentNode, n)) : r && (yf(), ns(r, 1, 1, () => {
        r = null;
      }), df());
    },
    i(a) {
      s || (gi(o, a), gi(r), s = !0);
    },
    o(a) {
      ns(o, a), ns(r), s = !1;
    },
    d(a) {
      a && (es(e), es(t), es(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Lf(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class rr extends _f {
  constructor(e) {
    super(), Cf(this, e, Lf, Ef, xf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: qf,
  append: Xs,
  attr: Xi,
  create_component: Yf,
  destroy_component: Xf,
  detach: Rf,
  element: fo,
  init: Hf,
  insert: If,
  mount_component: Af,
  safe_not_equal: Tf,
  set_data: Pf,
  space: Ff,
  text: Uf,
  toggle_class: Vt,
  transition_in: jf,
  transition_out: Of
} = window.__gradio__svelte__internal;
function Vf(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = fo("label"), t = fo("span"), Yf(n.$$.fragment), s = Ff(), l = Uf(
        /*label*/
        i[0]
      ), Xi(t, "class", "svelte-9gxdi0"), Xi(e, "for", ""), Xi(e, "data-testid", "block-label"), Xi(e, "class", "svelte-9gxdi0"), Vt(e, "hide", !/*show_label*/
      i[2]), Vt(e, "sr-only", !/*show_label*/
      i[2]), Vt(
        e,
        "float",
        /*float*/
        i[4]
      ), Vt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      If(r, e, a), Xs(e, t), Af(n, t, null), Xs(e, s), Xs(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Pf(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Vt(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Vt(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Vt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Vt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (jf(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Of(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Rf(e), Xf(n);
    }
  };
}
function Nf(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class Kf extends qf {
  constructor(e) {
    super(), Hf(this, e, Nf, Vf, Tf, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Zf,
  append: xl,
  attr: Rt,
  bubble: Gf,
  create_component: Jf,
  destroy_component: Qf,
  detach: cr,
  element: zl,
  init: $f,
  insert: fr,
  listen: eu,
  mount_component: tu,
  safe_not_equal: nu,
  set_data: iu,
  set_style: Yn,
  space: su,
  text: lu,
  toggle_class: Me,
  transition_in: ou,
  transition_out: au
} = window.__gradio__svelte__internal;
function uo(i) {
  let e, t;
  return {
    c() {
      e = zl("span"), t = lu(
        /*label*/
        i[1]
      ), Rt(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      fr(n, e, s), xl(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && iu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && cr(e);
    }
  };
}
function ru(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && uo(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = zl("button"), a && a.c(), t = su(), n = zl("div"), Jf(s.$$.fragment), Rt(n, "class", "svelte-1lrphxw"), Me(
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
      ), Rt(e, "class", "svelte-1lrphxw"), Me(
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
      ), Yn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Yn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Yn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      fr(c, e, f), a && a.m(e, null), xl(e, t), xl(e, n), tu(s, n, null), l = !0, o || (r = eu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = uo(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && Me(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && Me(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && Me(
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
      8) && Me(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && Me(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && Me(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && Me(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && Yn(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Yn(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && Yn(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (ou(s.$$.fragment, c), l = !0);
    },
    o(c) {
      au(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && cr(e), a && a.d(), Qf(s), o = !1, r();
    }
  };
}
function cu(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function w(y) {
    Gf.call(this, i, y);
  }
  return i.$$set = (y) => {
    "Icon" in y && t(0, s = y.Icon), "label" in y && t(1, l = y.label), "show_label" in y && t(2, o = y.show_label), "pending" in y && t(3, r = y.pending), "size" in y && t(4, a = y.size), "padded" in y && t(5, c = y.padded), "highlight" in y && t(6, f = y.highlight), "disabled" in y && t(7, u = y.disabled), "hasPopup" in y && t(8, _ = y.hasPopup), "color" in y && t(13, d = y.color), "transparent" in y && t(9, h = y.transparent), "background" in y && t(10, g = y.background), "offset" in y && t(11, m = y.offset);
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
    m,
    n,
    d,
    w
  ];
}
class ks extends Zf {
  constructor(e) {
    super(), $f(this, e, cu, ru, nu, {
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
  SvelteComponent: fu,
  append: uu,
  attr: Rs,
  binding_callbacks: hu,
  create_slot: _u,
  detach: du,
  element: ho,
  get_all_dirty_from_scope: mu,
  get_slot_changes: gu,
  init: bu,
  insert: pu,
  safe_not_equal: wu,
  toggle_class: Nt,
  transition_in: vu,
  transition_out: ku,
  update_slot_base: yu
} = window.__gradio__svelte__internal;
function Cu(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = _u(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ho("div"), t = ho("div"), l && l.c(), Rs(t, "class", "icon svelte-3w3rth"), Rs(e, "class", "empty svelte-3w3rth"), Rs(e, "aria-label", "Empty value"), Nt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Nt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Nt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Nt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      pu(o, e, r), uu(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && yu(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? gu(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : mu(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Nt(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Nt(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Nt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Nt(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (vu(l, o), n = !0);
    },
    o(o) {
      ku(l, o), n = !1;
    },
    d(o) {
      o && du(e), l && l.d(o), i[6](null);
    }
  };
}
function Su(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: h } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function f(u) {
    hu[u ? "unshift" : "push"](() => {
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
class xu extends fu {
  constructor(e) {
    super(), bu(this, e, Su, Cu, wu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: zu,
  append: _o,
  attr: De,
  detach: Bu,
  init: Mu,
  insert: Du,
  noop: Hs,
  safe_not_equal: Wu,
  svg_element: Is
} = window.__gradio__svelte__internal;
function Eu(i) {
  let e, t, n;
  return {
    c() {
      e = Is("svg"), t = Is("path"), n = Is("circle"), De(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), De(n, "cx", "12"), De(n, "cy", "13"), De(n, "r", "4"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Du(s, e, l), _o(e, t), _o(e, n);
    },
    p: Hs,
    i: Hs,
    o: Hs,
    d(s) {
      s && Bu(e);
    }
  };
}
class Lu extends zu {
  constructor(e) {
    super(), Mu(this, e, null, Eu, Wu, {});
  }
}
const {
  SvelteComponent: qu,
  append: Yu,
  attr: ot,
  detach: Xu,
  init: Ru,
  insert: Hu,
  noop: As,
  safe_not_equal: Iu,
  svg_element: mo
} = window.__gradio__svelte__internal;
function Au(i) {
  let e, t;
  return {
    c() {
      e = mo("svg"), t = mo("circle"), ot(t, "cx", "12"), ot(t, "cy", "12"), ot(t, "r", "10"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "stroke-width", "1.5"), ot(e, "stroke-linecap", "round"), ot(e, "stroke-linejoin", "round"), ot(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Hu(n, e, s), Yu(e, t);
    },
    p: As,
    i: As,
    o: As,
    d(n) {
      n && Xu(e);
    }
  };
}
class Tu extends qu {
  constructor(e) {
    super(), Ru(this, e, null, Au, Iu, {});
  }
}
const {
  SvelteComponent: Pu,
  append: Ts,
  attr: at,
  detach: Fu,
  init: Uu,
  insert: ju,
  noop: Ps,
  safe_not_equal: Ou,
  set_style: St,
  svg_element: Ri
} = window.__gradio__svelte__internal;
function Vu(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ri("svg"), t = Ri("g"), n = Ri("path"), s = Ri("path"), at(n, "d", "M18,6L6.087,17.913"), St(n, "fill", "none"), St(n, "fill-rule", "nonzero"), St(n, "stroke-width", "2px"), at(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), at(s, "d", "M4.364,4.364L19.636,19.636"), St(s, "fill", "none"), St(s, "fill-rule", "nonzero"), St(s, "stroke-width", "2px"), at(e, "width", "100%"), at(e, "height", "100%"), at(e, "viewBox", "0 0 24 24"), at(e, "version", "1.1"), at(e, "xmlns", "http://www.w3.org/2000/svg"), at(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), at(e, "xml:space", "preserve"), at(e, "stroke", "currentColor"), St(e, "fill-rule", "evenodd"), St(e, "clip-rule", "evenodd"), St(e, "stroke-linecap", "round"), St(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      ju(l, e, o), Ts(e, t), Ts(t, n), Ts(e, s);
    },
    p: Ps,
    i: Ps,
    o: Ps,
    d(l) {
      l && Fu(e);
    }
  };
}
class ur extends Pu {
  constructor(e) {
    super(), Uu(this, e, null, Vu, Ou, {});
  }
}
const {
  SvelteComponent: Nu,
  append: Ku,
  attr: ui,
  detach: Zu,
  init: Gu,
  insert: Ju,
  noop: Fs,
  safe_not_equal: Qu,
  svg_element: go
} = window.__gradio__svelte__internal;
function $u(i) {
  let e, t;
  return {
    c() {
      e = go("svg"), t = go("path"), ui(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ui(t, "fill", "currentColor"), ui(e, "id", "icon"), ui(e, "xmlns", "http://www.w3.org/2000/svg"), ui(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      Ju(n, e, s), Ku(e, t);
    },
    p: Fs,
    i: Fs,
    o: Fs,
    d(n) {
      n && Zu(e);
    }
  };
}
class eh extends Nu {
  constructor(e) {
    super(), Gu(this, e, null, $u, Qu, {});
  }
}
const {
  SvelteComponent: th,
  append: nh,
  attr: Xn,
  detach: ih,
  init: sh,
  insert: lh,
  noop: Us,
  safe_not_equal: oh,
  svg_element: bo
} = window.__gradio__svelte__internal;
function ah(i) {
  let e, t;
  return {
    c() {
      e = bo("svg"), t = bo("path"), Xn(t, "fill", "currentColor"), Xn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Xn(e, "xmlns", "http://www.w3.org/2000/svg"), Xn(e, "width", "100%"), Xn(e, "height", "100%"), Xn(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      lh(n, e, s), nh(e, t);
    },
    p: Us,
    i: Us,
    o: Us,
    d(n) {
      n && ih(e);
    }
  };
}
class rh extends th {
  constructor(e) {
    super(), sh(this, e, null, ah, oh, {});
  }
}
const {
  SvelteComponent: ch,
  append: fh,
  attr: Rn,
  detach: uh,
  init: hh,
  insert: _h,
  noop: js,
  safe_not_equal: dh,
  svg_element: po
} = window.__gradio__svelte__internal;
function mh(i) {
  let e, t;
  return {
    c() {
      e = po("svg"), t = po("path"), Rn(t, "d", "M5 8l4 4 4-4z"), Rn(e, "class", "dropdown-arrow svelte-145leq6"), Rn(e, "xmlns", "http://www.w3.org/2000/svg"), Rn(e, "width", "100%"), Rn(e, "height", "100%"), Rn(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      _h(n, e, s), fh(e, t);
    },
    p: js,
    i: js,
    o: js,
    d(n) {
      n && uh(e);
    }
  };
}
class Vl extends ch {
  constructor(e) {
    super(), hh(this, e, null, mh, dh, {});
  }
}
const {
  SvelteComponent: gh,
  append: Os,
  attr: me,
  detach: bh,
  init: ph,
  insert: wh,
  noop: Vs,
  safe_not_equal: vh,
  svg_element: Hi
} = window.__gradio__svelte__internal;
function kh(i) {
  let e, t, n, s;
  return {
    c() {
      e = Hi("svg"), t = Hi("rect"), n = Hi("circle"), s = Hi("polyline"), me(t, "x", "3"), me(t, "y", "3"), me(t, "width", "18"), me(t, "height", "18"), me(t, "rx", "2"), me(t, "ry", "2"), me(n, "cx", "8.5"), me(n, "cy", "8.5"), me(n, "r", "1.5"), me(s, "points", "21 15 16 10 5 21"), me(e, "xmlns", "http://www.w3.org/2000/svg"), me(e, "width", "100%"), me(e, "height", "100%"), me(e, "viewBox", "0 0 24 24"), me(e, "fill", "none"), me(e, "stroke", "currentColor"), me(e, "stroke-width", "1.5"), me(e, "stroke-linecap", "round"), me(e, "stroke-linejoin", "round"), me(e, "class", "feather feather-image");
    },
    m(l, o) {
      wh(l, e, o), Os(e, t), Os(e, n), Os(e, s);
    },
    p: Vs,
    i: Vs,
    o: Vs,
    d(l) {
      l && bh(e);
    }
  };
}
let hr = class extends gh {
  constructor(e) {
    super(), ph(this, e, null, kh, vh, {});
  }
};
const {
  SvelteComponent: yh,
  append: Ch,
  attr: Ii,
  detach: Sh,
  init: xh,
  insert: zh,
  noop: Ns,
  safe_not_equal: Bh,
  svg_element: wo
} = window.__gradio__svelte__internal;
function Mh(i) {
  let e, t;
  return {
    c() {
      e = wo("svg"), t = wo("path"), Ii(t, "fill", "currentColor"), Ii(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ii(e, "xmlns", "http://www.w3.org/2000/svg"), Ii(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      zh(n, e, s), Ch(e, t);
    },
    p: Ns,
    i: Ns,
    o: Ns,
    d(n) {
      n && Sh(e);
    }
  };
}
class _r extends yh {
  constructor(e) {
    super(), xh(this, e, null, Mh, Bh, {});
  }
}
const {
  SvelteComponent: Dh,
  append: Ai,
  attr: ge,
  detach: Wh,
  init: Eh,
  insert: Lh,
  noop: Ks,
  safe_not_equal: qh,
  svg_element: hi
} = window.__gradio__svelte__internal;
function Yh(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = hi("svg"), t = hi("path"), n = hi("path"), s = hi("line"), l = hi("line"), ge(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ge(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ge(s, "x1", "12"), ge(s, "y1", "19"), ge(s, "x2", "12"), ge(s, "y2", "23"), ge(l, "x1", "8"), ge(l, "y1", "23"), ge(l, "x2", "16"), ge(l, "y2", "23"), ge(e, "xmlns", "http://www.w3.org/2000/svg"), ge(e, "width", "100%"), ge(e, "height", "100%"), ge(e, "viewBox", "0 0 24 24"), ge(e, "fill", "none"), ge(e, "stroke", "currentColor"), ge(e, "stroke-width", "2"), ge(e, "stroke-linecap", "round"), ge(e, "stroke-linejoin", "round"), ge(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Lh(o, e, r), Ai(e, t), Ai(e, n), Ai(e, s), Ai(e, l);
    },
    p: Ks,
    i: Ks,
    o: Ks,
    d(o) {
      o && Wh(e);
    }
  };
}
class Xh extends Dh {
  constructor(e) {
    super(), Eh(this, e, null, Yh, qh, {});
  }
}
const {
  SvelteComponent: Rh,
  append: vo,
  attr: Ge,
  detach: Hh,
  init: Ih,
  insert: Ah,
  noop: Zs,
  safe_not_equal: Th,
  set_style: Ph,
  svg_element: Gs
} = window.__gradio__svelte__internal;
function Fh(i) {
  let e, t, n;
  return {
    c() {
      e = Gs("svg"), t = Gs("polyline"), n = Gs("path"), Ge(t, "points", "1 4 1 10 7 10"), Ge(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ge(e, "xmlns", "http://www.w3.org/2000/svg"), Ge(e, "width", "100%"), Ge(e, "height", "100%"), Ge(e, "viewBox", "0 0 24 24"), Ge(e, "fill", "none"), Ge(e, "stroke", "currentColor"), Ge(e, "stroke-width", "2"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round"), Ge(e, "class", "feather feather-rotate-ccw"), Ph(e, "transform", "rotateY(180deg)");
    },
    m(s, l) {
      Ah(s, e, l), vo(e, t), vo(e, n);
    },
    p: Zs,
    i: Zs,
    o: Zs,
    d(s) {
      s && Hh(e);
    }
  };
}
class Uh extends Rh {
  constructor(e) {
    super(), Ih(this, e, null, Fh, Th, {});
  }
}
const {
  SvelteComponent: jh,
  append: Oh,
  attr: We,
  detach: Vh,
  init: Nh,
  insert: Kh,
  noop: Js,
  safe_not_equal: Zh,
  svg_element: ko
} = window.__gradio__svelte__internal;
function Gh(i) {
  let e, t;
  return {
    c() {
      e = ko("svg"), t = ko("rect"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-square");
    },
    m(n, s) {
      Kh(n, e, s), Oh(e, t);
    },
    p: Js,
    i: Js,
    o: Js,
    d(n) {
      n && Vh(e);
    }
  };
}
class Jh extends jh {
  constructor(e) {
    super(), Nh(this, e, null, Gh, Zh, {});
  }
}
const {
  SvelteComponent: Qh,
  append: yo,
  attr: Je,
  detach: $h,
  init: e_,
  insert: t_,
  noop: Qs,
  safe_not_equal: n_,
  svg_element: $s
} = window.__gradio__svelte__internal;
function i_(i) {
  let e, t, n;
  return {
    c() {
      e = $s("svg"), t = $s("polyline"), n = $s("path"), Je(t, "points", "1 4 1 10 7 10"), Je(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Je(e, "xmlns", "http://www.w3.org/2000/svg"), Je(e, "width", "100%"), Je(e, "height", "100%"), Je(e, "viewBox", "0 0 24 24"), Je(e, "fill", "none"), Je(e, "stroke", "currentColor"), Je(e, "stroke-width", "2"), Je(e, "stroke-linecap", "round"), Je(e, "stroke-linejoin", "round"), Je(e, "class", "feather feather-rotate-ccw");
    },
    m(s, l) {
      t_(s, e, l), yo(e, t), yo(e, n);
    },
    p: Qs,
    i: Qs,
    o: Qs,
    d(s) {
      s && $h(e);
    }
  };
}
class s_ extends Qh {
  constructor(e) {
    super(), e_(this, e, null, i_, n_, {});
  }
}
const {
  SvelteComponent: l_,
  append: el,
  attr: Ce,
  detach: o_,
  init: a_,
  insert: r_,
  noop: tl,
  safe_not_equal: c_,
  svg_element: Ti
} = window.__gradio__svelte__internal;
function f_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ti("svg"), t = Ti("path"), n = Ti("polyline"), s = Ti("line"), Ce(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ce(n, "points", "17 8 12 3 7 8"), Ce(s, "x1", "12"), Ce(s, "y1", "3"), Ce(s, "x2", "12"), Ce(s, "y2", "15"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "width", "90%"), Ce(e, "height", "90%"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "2"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round"), Ce(e, "class", "feather feather-upload");
    },
    m(l, o) {
      r_(l, e, o), el(e, t), el(e, n), el(e, s);
    },
    p: tl,
    i: tl,
    o: tl,
    d(l) {
      l && o_(e);
    }
  };
}
let dr = class extends l_ {
  constructor(e) {
    super(), a_(this, e, null, f_, c_, {});
  }
};
const {
  SvelteComponent: u_,
  append: Co,
  attr: Kt,
  detach: h_,
  init: __,
  insert: d_,
  noop: nl,
  safe_not_equal: m_,
  svg_element: il
} = window.__gradio__svelte__internal;
function g_(i) {
  let e, t, n;
  return {
    c() {
      e = il("svg"), t = il("path"), n = il("path"), Kt(t, "fill", "currentColor"), Kt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Kt(n, "fill", "currentColor"), Kt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Kt(e, "xmlns", "http://www.w3.org/2000/svg"), Kt(e, "width", "100%"), Kt(e, "height", "100%"), Kt(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      d_(s, e, l), Co(e, t), Co(e, n);
    },
    p: nl,
    i: nl,
    o: nl,
    d(s) {
      s && h_(e);
    }
  };
}
let mr = class extends u_ {
  constructor(e) {
    super(), __(this, e, null, g_, m_, {});
  }
};
const b_ = [
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
], So = {
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
b_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: So[e][t],
      secondary: So[e][n]
    }
  }),
  {}
);
class is extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function p_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new is("Must be on Spaces to share.");
  let t, n, s;
  t = w_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new is(`Upload failed: ${c.error}`);
    }
    throw new is("Upload failed.");
  }
  return await o.text();
}
function w_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: v_,
  create_component: k_,
  destroy_component: y_,
  init: C_,
  mount_component: S_,
  safe_not_equal: x_,
  transition_in: z_,
  transition_out: B_
} = window.__gradio__svelte__internal, { createEventDispatcher: M_ } = window.__gradio__svelte__internal;
function D_(i) {
  let e, t;
  return e = new ks({
    props: {
      Icon: eh,
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
      k_(e.$$.fragment);
    },
    m(n, s) {
      S_(e, n, s), t = !0;
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
      t || (z_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      y_(e, n);
    }
  };
}
function W_(i, e, t) {
  const n = M_();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof is ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class E_ extends v_ {
  constructor(e) {
    super(), C_(this, e, W_, D_, x_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: L_,
  append: pn,
  attr: Bl,
  check_outros: q_,
  create_component: gr,
  destroy_component: br,
  detach: ss,
  element: Ml,
  group_outros: Y_,
  init: X_,
  insert: ls,
  mount_component: pr,
  safe_not_equal: R_,
  set_data: Dl,
  space: Wl,
  text: bi,
  toggle_class: xo,
  transition_in: rs,
  transition_out: cs
} = window.__gradio__svelte__internal;
function H_(i) {
  let e, t;
  return e = new dr({}), {
    c() {
      gr(e.$$.fragment);
    },
    m(n, s) {
      pr(e, n, s), t = !0;
    },
    i(n) {
      t || (rs(e.$$.fragment, n), t = !0);
    },
    o(n) {
      cs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      br(e, n);
    }
  };
}
function I_(i) {
  let e, t;
  return e = new _r({}), {
    c() {
      gr(e.$$.fragment);
    },
    m(n, s) {
      pr(e, n, s), t = !0;
    },
    i(n) {
      t || (rs(e.$$.fragment, n), t = !0);
    },
    o(n) {
      cs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      br(e, n);
    }
  };
}
function zo(i) {
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
      e = Ml("span"), t = bi("- "), s = bi(n), l = bi(" -"), o = Wl(), a = bi(r), Bl(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      ls(c, e, f), pn(e, t), pn(e, s), pn(e, l), ls(c, o, f), ls(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Dl(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Dl(a, r);
    },
    d(c) {
      c && (ss(e), ss(o), ss(a));
    }
  };
}
function A_(i) {
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
  const f = [I_, H_], u = [];
  function _(h, g) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), s = u[n] = f[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && zo(i)
  );
  return {
    c() {
      e = Ml("div"), t = Ml("span"), s.c(), l = Wl(), r = bi(o), a = Wl(), d && d.c(), Bl(t, "class", "icon-wrap svelte-kzcjhc"), xo(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Bl(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, g) {
      ls(h, e, g), pn(e, t), u[n].m(t, null), pn(e, l), pn(e, r), pn(e, a), d && d.m(e, null), c = !0;
    },
    p(h, [g]) {
      let m = n;
      n = _(h), n !== m && (Y_(), cs(u[m], 1, 1, () => {
        u[m] = null;
      }), q_(), s = u[n], s || (s = u[n] = f[n](h), s.c()), rs(s, 1), s.m(t, null)), (!c || g & /*hovered*/
      16) && xo(
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
      ) + "") && Dl(r, o), /*mode*/
      h[3] !== "short" ? d ? d.p(h, g) : (d = zo(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      c || (rs(s), c = !0);
    },
    o(h) {
      cs(s), c = !1;
    },
    d(h) {
      h && ss(e), u[n].d(), d && d.d();
    }
  };
}
function T_(i, e, t) {
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
class wr extends L_ {
  constructor(e) {
    super(), X_(this, e, T_, A_, R_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: P_,
  append: sl,
  attr: Et,
  check_outros: pi,
  create_component: ys,
  destroy_component: Cs,
  detach: ti,
  element: Wi,
  empty: F_,
  group_outros: wi,
  init: U_,
  insert: ni,
  listen: Ss,
  mount_component: xs,
  safe_not_equal: j_,
  space: ll,
  toggle_class: ln,
  transition_in: pe,
  transition_out: qe
} = window.__gradio__svelte__internal;
function Bo(i) {
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
  ), c, f = t && Mo(i), u = s && Do(i), _ = o && Wo(i), d = a && Eo(i);
  return {
    c() {
      e = Wi("span"), f && f.c(), n = ll(), u && u.c(), l = ll(), _ && _.c(), r = ll(), d && d.c(), Et(e, "class", "source-selection svelte-1jp3vgd"), Et(e, "data-testid", "source-select");
    },
    m(h, g) {
      ni(h, e, g), f && f.m(e, null), sl(e, n), u && u.m(e, null), sl(e, l), _ && _.m(e, null), sl(e, r), d && d.m(e, null), c = !0;
    },
    p(h, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? f ? (f.p(h, g), g & /*sources*/
      2 && pe(f, 1)) : (f = Mo(h), f.c(), pe(f, 1), f.m(e, n)) : f && (wi(), qe(f, 1, 1, () => {
        f = null;
      }), pi()), g & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("microphone")), s ? u ? (u.p(h, g), g & /*sources*/
      2 && pe(u, 1)) : (u = Do(h), u.c(), pe(u, 1), u.m(e, l)) : u && (wi(), qe(u, 1, 1, () => {
        u = null;
      }), pi()), g & /*sources*/
      2 && (o = /*sources*/
      h[1].includes("webcam")), o ? _ ? (_.p(h, g), g & /*sources*/
      2 && pe(_, 1)) : (_ = Wo(h), _.c(), pe(_, 1), _.m(e, r)) : _ && (wi(), qe(_, 1, 1, () => {
        _ = null;
      }), pi()), g & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? d ? (d.p(h, g), g & /*sources*/
      2 && pe(d, 1)) : (d = Eo(h), d.c(), pe(d, 1), d.m(e, null)) : d && (wi(), qe(d, 1, 1, () => {
        d = null;
      }), pi());
    },
    i(h) {
      c || (pe(f), pe(u), pe(_), pe(d), c = !0);
    },
    o(h) {
      qe(f), qe(u), qe(_), qe(d), c = !1;
    },
    d(h) {
      h && ti(e), f && f.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function Mo(i) {
  let e, t, n, s, l;
  return t = new dr({}), {
    c() {
      e = Wi("button"), ys(t.$$.fragment), Et(e, "class", "icon svelte-1jp3vgd"), Et(e, "aria-label", "Upload file"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      ni(o, e, r), xs(t, e, null), n = !0, s || (l = Ss(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ln(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ti(e), Cs(t), s = !1, l();
    }
  };
}
function Do(i) {
  let e, t, n, s, l;
  return t = new Xh({}), {
    c() {
      e = Wi("button"), ys(t.$$.fragment), Et(e, "class", "icon svelte-1jp3vgd"), Et(e, "aria-label", "Record audio"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      ni(o, e, r), xs(t, e, null), n = !0, s || (l = Ss(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ln(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ti(e), Cs(t), s = !1, l();
    }
  };
}
function Wo(i) {
  let e, t, n, s, l;
  return t = new mr({}), {
    c() {
      e = Wi("button"), ys(t.$$.fragment), Et(e, "class", "icon svelte-1jp3vgd"), Et(e, "aria-label", "Capture from camera"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      ni(o, e, r), xs(t, e, null), n = !0, s || (l = Ss(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ln(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ti(e), Cs(t), s = !1, l();
    }
  };
}
function Eo(i) {
  let e, t, n, s, l;
  return t = new _r({}), {
    c() {
      e = Wi("button"), ys(t.$$.fragment), Et(e, "class", "icon svelte-1jp3vgd"), Et(e, "aria-label", "Paste from clipboard"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      ni(o, e, r), xs(t, e, null), n = !0, s || (l = Ss(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ln(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ti(e), Cs(t), s = !1, l();
    }
  };
}
function O_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Bo(i)
  );
  return {
    c() {
      n && n.c(), e = F_();
    },
    m(s, l) {
      n && n.m(s, l), ni(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && pe(n, 1)) : (n = Bo(s), n.c(), pe(n, 1), n.m(e.parentNode, e)) : n && (wi(), qe(n, 1, 1, () => {
        n = null;
      }), pi());
    },
    i(s) {
      t || (pe(n), t = !0);
    },
    o(s) {
      qe(n), t = !1;
    },
    d(s) {
      s && ti(e), n && n.d(s);
    }
  };
}
function V_(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(h, g, m, w) {
    function y(p) {
      return p instanceof m ? p : new m(function(C) {
        C(p);
      });
    }
    return new (m || (m = Promise))(function(p, C) {
      function S(k) {
        try {
          B(w.next(k));
        } catch (z) {
          C(z);
        }
      }
      function x(k) {
        try {
          B(w.throw(k));
        } catch (z) {
          C(z);
        }
      }
      function B(k) {
        k.done ? p(k.value) : y(k.value).then(S, x);
      }
      B((w = w.apply(h, g || [])).next());
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
class N_ extends P_ {
  constructor(e) {
    super(), U_(this, e, V_, O_, j_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Nn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function os() {
}
const K_ = (i) => i;
function Z_(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Lo(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const vr = typeof window < "u";
let qo = vr ? () => window.performance.now() : () => Date.now(), kr = vr ? (i) => requestAnimationFrame(i) : os;
const ei = /* @__PURE__ */ new Set();
function yr(i) {
  ei.forEach((e) => {
    e.c(i) || (ei.delete(e), e.f());
  }), ei.size !== 0 && kr(yr);
}
function G_(i) {
  let e;
  return ei.size === 0 && kr(yr), {
    promise: new Promise((t) => {
      ei.add(e = { c: i, f: t });
    }),
    abort() {
      ei.delete(e);
    }
  };
}
function J_(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Q_(i, { delay: e = 0, duration: t = 400, easing: n = K_ } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function Yo(i, { delay: e = 0, duration: t = 400, easing: n = J_, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [u, _] = Lo(s), [d, h] = Lo(l);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (g, m) => `
			transform: ${c} translate(${(1 - g) * u}${_}, ${(1 - g) * d}${h});
			opacity: ${a - f * m}`
  };
}
const Hn = [];
function $_(i, e = os) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (Z_(i, r) && (i = r, t)) {
      const a = !Hn.length;
      for (const c of n)
        c[1](), Hn.push(c, i);
      if (a) {
        for (let c = 0; c < Hn.length; c += 2)
          Hn[c][0](Hn[c + 1]);
        Hn.length = 0;
      }
    }
  }
  function l(r) {
    s(r(i));
  }
  function o(r, a = os) {
    const c = [r, a];
    return n.add(c), n.size === 1 && (t = e(s, l) || os), r(i), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function Xo(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function El(i, e, t, n) {
  if (typeof t == "number" || Xo(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * s, r = i.opts.damping * l, a = (o - r) * i.inv_mass, c = (l + a) * i.dt;
    return Math.abs(c) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, Xo(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, l) => El(i, e[l], t[l], n[l])
      );
    if (typeof t == "object") {
      const s = {};
      for (const l in t)
        s[l] = El(i, e[l], t[l], n[l]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Ro(i, e = {}) {
  const t = $_(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, _ = 0, d = !1;
  function h(m, w = {}) {
    f = m;
    const y = a = {};
    return i == null || w.hard || g.stiffness >= 1 && g.damping >= 1 ? (d = !0, o = qo(), c = m, t.set(i = f), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), u = 0), r || (o = qo(), d = !1, r = G_((p) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const C = {
        inv_mass: u,
        opts: g,
        settled: !0,
        dt: (p - o) * 60 / 1e3
      }, S = El(C, c, i, f);
      return o = p, c = i, t.set(i = S), C.settled && (r = null), !C.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        y === a && p();
      });
    }));
  }
  const g = {
    set: h,
    update: (m, w) => h(m(f, i), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return g;
}
const {
  SvelteComponent: ed,
  append: rt,
  attr: J,
  component_subscribe: Ho,
  detach: td,
  element: nd,
  init: id,
  insert: sd,
  noop: Io,
  safe_not_equal: ld,
  set_style: Pi,
  svg_element: ct,
  toggle_class: Ao
} = window.__gradio__svelte__internal, { onMount: od } = window.__gradio__svelte__internal;
function ad(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _;
  return {
    c() {
      e = nd("div"), t = ct("svg"), n = ct("g"), s = ct("path"), l = ct("path"), o = ct("path"), r = ct("path"), a = ct("g"), c = ct("path"), f = ct("path"), u = ct("path"), _ = ct("path"), J(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), J(s, "fill", "#FF7C00"), J(s, "fill-opacity", "0.4"), J(s, "class", "svelte-43sxxs"), J(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), J(l, "fill", "#FF7C00"), J(l, "class", "svelte-43sxxs"), J(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), J(o, "fill", "#FF7C00"), J(o, "fill-opacity", "0.4"), J(o, "class", "svelte-43sxxs"), J(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), J(r, "fill", "#FF7C00"), J(r, "class", "svelte-43sxxs"), Pi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), J(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), J(c, "fill", "#FF7C00"), J(c, "fill-opacity", "0.4"), J(c, "class", "svelte-43sxxs"), J(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), J(f, "fill", "#FF7C00"), J(f, "class", "svelte-43sxxs"), J(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), J(u, "fill", "#FF7C00"), J(u, "fill-opacity", "0.4"), J(u, "class", "svelte-43sxxs"), J(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), J(_, "fill", "#FF7C00"), J(_, "class", "svelte-43sxxs"), Pi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), J(t, "viewBox", "-1200 -1200 3000 3000"), J(t, "fill", "none"), J(t, "xmlns", "http://www.w3.org/2000/svg"), J(t, "class", "svelte-43sxxs"), J(e, "class", "svelte-43sxxs"), Ao(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, h) {
      sd(d, e, h), rt(e, t), rt(t, n), rt(n, s), rt(n, l), rt(n, o), rt(n, r), rt(t, a), rt(a, c), rt(a, f), rt(a, u), rt(a, _);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && Pi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && Pi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), h & /*margin*/
      1 && Ao(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Io,
    o: Io,
    d(d) {
      d && td(e);
    }
  };
}
function rd(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(d, h, g, m) {
    function w(y) {
      return y instanceof g ? y : new g(function(p) {
        p(y);
      });
    }
    return new (g || (g = Promise))(function(y, p) {
      function C(B) {
        try {
          x(m.next(B));
        } catch (k) {
          p(k);
        }
      }
      function S(B) {
        try {
          x(m.throw(B));
        } catch (k) {
          p(k);
        }
      }
      function x(B) {
        B.done ? y(B.value) : w(B.value).then(C, S);
      }
      x((m = m.apply(d, h || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = Ro([0, 0]);
  Ho(i, r, (d) => t(1, n = d));
  const a = Ro([0, 0]);
  Ho(i, a, (d) => t(2, s = d));
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
  return od(() => (_(), () => c = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, s, r, a];
}
class cd extends ed {
  constructor(e) {
    super(), id(this, e, rd, ad, ld, { margin: 0 });
  }
}
const {
  SvelteComponent: fd,
  append: wn,
  attr: wt,
  binding_callbacks: To,
  check_outros: Ll,
  create_component: Cr,
  create_slot: Sr,
  destroy_component: xr,
  destroy_each: zr,
  detach: j,
  element: Mt,
  empty: ii,
  ensure_array_like: fs,
  get_all_dirty_from_scope: Br,
  get_slot_changes: Mr,
  group_outros: ql,
  init: ud,
  insert: O,
  mount_component: Dr,
  noop: Yl,
  safe_not_equal: hd,
  set_data: tt,
  set_style: nn,
  space: et,
  text: he,
  toggle_class: $e,
  transition_in: pt,
  transition_out: Dt,
  update_slot_base: Wr
} = window.__gradio__svelte__internal, { tick: _d } = window.__gradio__svelte__internal, { onDestroy: dd } = window.__gradio__svelte__internal, { createEventDispatcher: md } = window.__gradio__svelte__internal, gd = (i) => ({}), Po = (i) => ({}), bd = (i) => ({}), Fo = (i) => ({});
function Uo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function jo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function pd(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new ks({
    props: {
      Icon: ur,
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
  ), f = Sr(
    c,
    i,
    /*$$scope*/
    i[29],
    Po
  );
  return {
    c() {
      e = Mt("div"), Cr(t.$$.fragment), n = et(), s = Mt("span"), o = he(l), r = et(), f && f.c(), wt(e, "class", "clear-status svelte-16nch4a"), wt(s, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      O(u, e, _), Dr(t, e, null), O(u, n, _), O(u, s, _), wn(s, o), O(u, r, _), f && f.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && tt(o, l), f && f.p && (!a || _[0] & /*$$scope*/
      536870912) && Wr(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? Mr(
          c,
          /*$$scope*/
          u[29],
          _,
          gd
        ) : Br(
          /*$$scope*/
          u[29]
        ),
        Po
      );
    },
    i(u) {
      a || (pt(t.$$.fragment, u), pt(f, u), a = !0);
    },
    o(u) {
      Dt(t.$$.fragment, u), Dt(f, u), a = !1;
    },
    d(u) {
      u && (j(e), j(n), j(s), j(r)), xr(t), f && f.d(u);
    }
  };
}
function wd(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Oo(i)
  );
  function u(p, C) {
    if (
      /*progress*/
      p[7]
    ) return yd;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return kd;
    if (
      /*queue_position*/
      p[2] === 0
    ) return vd;
  }
  let _ = u(i), d = _ && _(i), h = (
    /*timer*/
    i[5] && Ko(i)
  );
  const g = [zd, xd], m = [];
  function w(p, C) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = w(i)) && (o = m[l] = g[l](i));
  let y = !/*timer*/
  i[5] && ta(i);
  return {
    c() {
      f && f.c(), e = et(), t = Mt("div"), d && d.c(), n = et(), h && h.c(), s = et(), o && o.c(), r = et(), y && y.c(), a = ii(), wt(t, "class", "progress-text svelte-16nch4a"), $e(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), $e(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, C) {
      f && f.m(p, C), O(p, e, C), O(p, t, C), d && d.m(t, null), wn(t, n), h && h.m(t, null), O(p, s, C), ~l && m[l].m(p, C), O(p, r, C), y && y.m(p, C), O(p, a, C), c = !0;
    },
    p(p, C) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? f ? f.p(p, C) : (f = Oo(p), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), _ === (_ = u(p)) && d ? d.p(p, C) : (d && d.d(1), d = _ && _(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? h ? h.p(p, C) : (h = Ko(p), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!c || C[0] & /*variant*/
      256) && $e(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!c || C[0] & /*variant*/
      256) && $e(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let S = l;
      l = w(p), l === S ? ~l && m[l].p(p, C) : (o && (ql(), Dt(m[S], 1, 1, () => {
        m[S] = null;
      }), Ll()), ~l ? (o = m[l], o ? o.p(p, C) : (o = m[l] = g[l](p), o.c()), pt(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      p[5] ? y && (ql(), Dt(y, 1, 1, () => {
        y = null;
      }), Ll()) : y ? (y.p(p, C), C[0] & /*timer*/
      32 && pt(y, 1)) : (y = ta(p), y.c(), pt(y, 1), y.m(a.parentNode, a));
    },
    i(p) {
      c || (pt(o), pt(y), c = !0);
    },
    o(p) {
      Dt(o), Dt(y), c = !1;
    },
    d(p) {
      p && (j(e), j(t), j(s), j(r), j(a)), f && f.d(p), d && d.d(), h && h.d(), ~l && m[l].d(p), y && y.d(p);
    }
  };
}
function Oo(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Mt("div"), wt(e, "class", "eta-bar svelte-16nch4a"), nn(e, "transform", t);
    },
    m(n, s) {
      O(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && nn(e, "transform", t);
    },
    d(n) {
      n && j(e);
    }
  };
}
function vd(i) {
  let e;
  return {
    c() {
      e = he("processing |");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: Yl,
    d(t) {
      t && j(e);
    }
  };
}
function kd(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = he("queue: "), n = he(t), s = he("/"), l = he(
        /*queue_size*/
        i[3]
      ), o = he(" |");
    },
    m(r, a) {
      O(r, e, a), O(r, n, a), O(r, s, a), O(r, l, a), O(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && tt(n, t), a[0] & /*queue_size*/
      8 && tt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (j(e), j(n), j(s), j(l), j(o));
    }
  };
}
function yd(i) {
  let e, t = fs(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = No(jo(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ii();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      O(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = fs(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = jo(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = No(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && j(e), zr(n, s);
    }
  };
}
function Vo(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, u) {
    return (
      /*p*/
      f[41].length != null ? Sd : Cd
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = et(), n = he(t), s = he(" | "), o = he(l);
    },
    m(f, u) {
      c.m(f, u), O(f, e, u), O(f, n, u), O(f, s, u), O(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && tt(n, t);
    },
    d(f) {
      f && (j(e), j(n), j(s), j(o)), c.d(f);
    }
  };
}
function Cd(i) {
  let e = Nn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = he(e);
    },
    m(n, s) {
      O(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = Nn(
        /*p*/
        n[41].index || 0
      ) + "") && tt(t, e);
    },
    d(n) {
      n && j(t);
    }
  };
}
function Sd(i) {
  let e = Nn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = Nn(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = he(e), n = he("/"), l = he(s);
    },
    m(o, r) {
      O(o, t, r), O(o, n, r), O(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Nn(
        /*p*/
        o[41].index || 0
      ) + "") && tt(t, e), r[0] & /*progress*/
      128 && s !== (s = Nn(
        /*p*/
        o[41].length
      ) + "") && tt(l, s);
    },
    d(o) {
      o && (j(t), j(n), j(l));
    }
  };
}
function No(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Vo(i)
  );
  return {
    c() {
      t && t.c(), e = ii();
    },
    m(n, s) {
      t && t.m(n, s), O(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Vo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && j(e), t && t.d(n);
    }
  };
}
function Ko(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = he(
        /*formatted_timer*/
        i[20]
      ), n = he(t), s = he("s");
    },
    m(l, o) {
      O(l, e, o), O(l, n, o), O(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && tt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && tt(n, t);
    },
    d(l) {
      l && (j(e), j(n), j(s));
    }
  };
}
function xd(i) {
  let e, t;
  return e = new cd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Cr(e.$$.fragment);
    },
    m(n, s) {
      Dr(e, n, s), t = !0;
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
      Dt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xr(e, n);
    }
  };
}
function zd(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Zo(i)
  );
  return {
    c() {
      e = Mt("div"), t = Mt("div"), r && r.c(), n = et(), s = Mt("div"), l = Mt("div"), wt(t, "class", "progress-level-inner svelte-16nch4a"), wt(l, "class", "progress-bar svelte-16nch4a"), nn(l, "width", o), wt(s, "class", "progress-bar-wrap svelte-16nch4a"), wt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      O(a, e, c), wn(e, t), r && r.m(t, null), wn(e, n), wn(e, s), wn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = Zo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && nn(l, "width", o);
    },
    i: Yl,
    o: Yl,
    d(a) {
      a && j(e), r && r.d(), i[31](null);
    }
  };
}
function Zo(i) {
  let e, t = fs(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = ea(Uo(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ii();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      O(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = fs(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Uo(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = ea(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && j(e), zr(n, s);
    }
  };
}
function Go(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && Bd()
  ), o = (
    /*p*/
    i[41].desc != null && Jo(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Qo()
  ), a = (
    /*progress_level*/
    i[14] != null && $o(i)
  );
  return {
    c() {
      l && l.c(), e = et(), o && o.c(), t = et(), r && r.c(), n = et(), a && a.c(), s = ii();
    },
    m(c, f) {
      l && l.m(c, f), O(c, e, f), o && o.m(c, f), O(c, t, f), r && r.m(c, f), O(c, n, f), a && a.m(c, f), O(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = Jo(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = Qo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = $o(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (j(e), j(t), j(n), j(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function Bd(i) {
  let e;
  return {
    c() {
      e = he(" /");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && j(e);
    }
  };
}
function Jo(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = he(e);
    },
    m(n, s) {
      O(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && tt(t, e);
    },
    d(n) {
      n && j(t);
    }
  };
}
function Qo(i) {
  let e;
  return {
    c() {
      e = he("-");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && j(e);
    }
  };
}
function $o(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = he(e), n = he("%");
    },
    m(s, l) {
      O(s, t, l), O(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && tt(t, e);
    },
    d(s) {
      s && (j(t), j(n));
    }
  };
}
function ea(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Go(i)
  );
  return {
    c() {
      t && t.c(), e = ii();
    },
    m(n, s) {
      t && t.m(n, s), O(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = Go(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && j(e), t && t.d(n);
    }
  };
}
function ta(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = Sr(
    l,
    i,
    /*$$scope*/
    i[29],
    Fo
  );
  return {
    c() {
      e = Mt("p"), t = he(
        /*loading_text*/
        i[9]
      ), n = et(), o && o.c(), wt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      O(r, e, a), wn(e, t), O(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && tt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Wr(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Mr(
          l,
          /*$$scope*/
          r[29],
          a,
          bd
        ) : Br(
          /*$$scope*/
          r[29]
        ),
        Fo
      );
    },
    i(r) {
      s || (pt(o, r), s = !0);
    },
    o(r) {
      Dt(o, r), s = !1;
    },
    d(r) {
      r && (j(e), j(n)), o && o.d(r);
    }
  };
}
function Md(i) {
  let e, t, n, s, l;
  const o = [wd, pd], r = [];
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
      i[6] + " svelte-16nch4a"), $e(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), $e(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), $e(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), $e(
        e,
        "border",
        /*border*/
        i[12]
      ), nn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), nn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      O(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (ql(), Dt(r[u], 1, 1, () => {
        r[u] = null;
      }), Ll()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), pt(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && wt(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && $e(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && $e(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && $e(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && $e(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && nn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && nn(
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
      Dt(n), l = !1;
    },
    d(c) {
      c && j(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var Dd = function(i, e, t, n) {
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
let Fi = [], ol = !1;
function Wd(i) {
  return Dd(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Fi.push(e), !ol) ol = !0;
      else return;
      yield _d(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < Fi.length; s++) {
          const o = Fi[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), ol = !1, Fi = [];
      });
    }
  });
}
function Ed(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = md();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: g = null } = e, { progress: m = null } = e, { variant: w = "default" } = e, { loading_text: y = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: C = !1 } = e, { border: S = !1 } = e, { autoscroll: x } = e, B, k = !1, z = 0, v = 0, W = null, X = null, q = 0, Z = null, Q, K = null, le = !0;
  const Y = () => {
    t(0, a = t(27, W = t(19, ee = null))), t(25, z = performance.now()), t(26, v = 0), k = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, v = (performance.now() - z) / 1e3), k && V();
    });
  }
  function U() {
    t(26, v = 0), t(0, a = t(27, W = t(19, ee = null))), k && (k = !1);
  }
  dd(() => {
    k && U();
  });
  let ee = null;
  function I(H) {
    To[H ? "unshift" : "push"](() => {
      K = H, t(16, K), t(7, m), t(14, Z), t(15, Q);
    });
  }
  const ae = () => {
    o("clear_status");
  };
  function P(H) {
    To[H ? "unshift" : "push"](() => {
      B = H, t(13, B);
    });
  }
  return i.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, c = H.queue_position), "queue_size" in H && t(3, f = H.queue_size), "status" in H && t(4, u = H.status), "scroll_to_output" in H && t(22, _ = H.scroll_to_output), "timer" in H && t(5, d = H.timer), "show_progress" in H && t(6, h = H.show_progress), "message" in H && t(23, g = H.message), "progress" in H && t(7, m = H.progress), "variant" in H && t(8, w = H.variant), "loading_text" in H && t(9, y = H.loading_text), "absolute" in H && t(10, p = H.absolute), "translucent" in H && t(11, C = H.translucent), "border" in H && t(12, S = H.border), "autoscroll" in H && t(24, x = H.autoscroll), "$$scope" in H && t(29, l = H.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, X = (performance.now() - z) / 1e3 + a), t(19, ee = X.toFixed(1)), t(27, W = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, q = X === null || X <= 0 || !v ? null : Math.min(v / X, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, le = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, Z = m.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, Z = null), Z ? (t(15, Q = Z[Z.length - 1]), K && (Q === 0 ? t(16, K.style.transition = "0", K) : t(16, K.style.transition = "150ms", K))) : t(15, Q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? Y() : U()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && B && _ && (u === "pending" || u === "complete") && Wd(B, x), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = v.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    d,
    h,
    m,
    w,
    y,
    p,
    C,
    S,
    B,
    Z,
    Q,
    K,
    q,
    le,
    ee,
    n,
    o,
    _,
    g,
    x,
    z,
    v,
    W,
    X,
    l,
    s,
    I,
    ae,
    P
  ];
}
class Ld extends fd {
  constructor(e) {
    super(), ud(
      this,
      e,
      Ed,
      Md,
      hd,
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
const { setContext: db, getContext: qd } = window.__gradio__svelte__internal, Yd = "WORKER_PROXY_CONTEXT_KEY";
function Er() {
  return qd(Yd);
}
function Xd(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Lr(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function qr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!Xd(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Rd(i) {
  if (i == null || !qr(i))
    return i;
  const e = Er();
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
      type: Lr(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: Hd,
  assign: us,
  check_outros: Yr,
  compute_rest_props: na,
  create_slot: Nl,
  detach: zs,
  element: Xr,
  empty: Rr,
  exclude_internal_props: Id,
  get_all_dirty_from_scope: Kl,
  get_slot_changes: Zl,
  get_spread_update: Hr,
  group_outros: Ir,
  init: Ad,
  insert: Bs,
  listen: Ar,
  prevent_default: Td,
  safe_not_equal: Pd,
  set_attributes: hs,
  transition_in: xn,
  transition_out: zn,
  update_slot_base: Gl
} = window.__gradio__svelte__internal, { createEventDispatcher: Fd } = window.__gradio__svelte__internal;
function Ud(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Nl(
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
    c = us(c, a[f]);
  return {
    c() {
      e = Xr("a"), r && r.c(), hs(e, c);
    },
    m(f, u) {
      Bs(f, e, u), r && r.m(e, null), n = !0, s || (l = Ar(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Gl(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? Zl(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : Kl(
          /*$$scope*/
          f[7]
        ),
        null
      ), hs(e, c = Hr(a, [
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
      n || (xn(r, f), n = !0);
    },
    o(f) {
      zn(r, f), n = !1;
    },
    d(f) {
      f && zs(e), r && r.d(f), s = !1, l();
    }
  };
}
function jd(i) {
  let e, t, n, s;
  const l = [Vd, Od], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Rr();
    },
    m(a, c) {
      o[e].m(a, c), Bs(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Ir(), zn(o[f], 1, 1, () => {
        o[f] = null;
      }), Yr(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), xn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (xn(t), s = !0);
    },
    o(a) {
      zn(t), s = !1;
    },
    d(a) {
      a && zs(n), o[e].d(a);
    }
  };
}
function Od(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Nl(
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
    a = us(a, r[c]);
  return {
    c() {
      e = Xr("a"), o && o.c(), hs(e, a);
    },
    m(c, f) {
      Bs(c, e, f), o && o.m(e, null), t = !0, n || (s = Ar(e, "click", Td(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && Gl(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? Zl(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Kl(
          /*$$scope*/
          c[7]
        ),
        null
      ), hs(e, a = Hr(r, [
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
      t || (xn(o, c), t = !0);
    },
    o(c) {
      zn(o, c), t = !1;
    },
    d(c) {
      c && zs(e), o && o.d(c), n = !1, s();
    }
  };
}
function Vd(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Nl(
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
      128) && Gl(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? Zl(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Kl(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (xn(n, s), e = !0);
    },
    o(s) {
      zn(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Nd(i) {
  let e, t, n, s, l;
  const o = [jd, Ud], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && qr(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Rr();
    },
    m(c, f) {
      r[t].m(c, f), Bs(c, s, f), l = !0;
    },
    p(c, [f]) {
      let u = t;
      t = a(c, f), t === u ? r[t].p(c, f) : (Ir(), zn(r[u], 1, 1, () => {
        r[u] = null;
      }), Yr(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), xn(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (xn(n), l = !0);
    },
    o(c) {
      zn(n), l = !1;
    },
    d(c) {
      c && zs(s), r[t].d(c);
    }
  };
}
function Kd(i, e, t) {
  const n = ["href", "download"];
  let s = na(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(h, g, m, w) {
    function y(p) {
      return p instanceof m ? p : new m(function(C) {
        C(p);
      });
    }
    return new (m || (m = Promise))(function(p, C) {
      function S(k) {
        try {
          B(w.next(k));
        } catch (z) {
          C(z);
        }
      }
      function x(k) {
        try {
          B(w.throw(k));
        } catch (z) {
          C(z);
        }
      }
      function B(k) {
        k.done ? p(k.value) : y(k.value).then(S, x);
      }
      B((w = w.apply(h, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Fd();
  let u = !1;
  const _ = Er();
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
      }).then((m) => {
        if (m.status !== 200)
          throw new Error(`Failed to get file ${g} from the Wasm worker.`);
        const w = new Blob(
          [m.body],
          {
            type: Lr(m.headers, "content-type")
          }
        ), y = URL.createObjectURL(w), p = document.createElement("a");
        p.href = y, p.download = c, p.click(), URL.revokeObjectURL(y);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (h) => {
    e = us(us({}, e), Id(h)), t(6, s = na(e, n)), "href" in h && t(0, a = h.href), "download" in h && t(1, c = h.download), "$$scope" in h && t(7, o = h.$$scope);
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
class Zd extends Hd {
  constructor(e) {
    super(), Ad(this, e, Kd, Nd, Pd, { href: 0, download: 1 });
  }
}
var Gd = Object.defineProperty, Jd = (i, e, t) => e in i ? Gd(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Lt = (i, e, t) => (Jd(i, typeof e != "symbol" ? e + "" : e, t), t), Tr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, _i = (i, e, t) => (Tr(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Qd = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, $d = (i, e, t, n) => (Tr(i, e, "write to private field"), e.set(i, t), t), en;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Pr(i, e) {
  return i.map(
    (t) => new em({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class em {
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
    Lt(this, "path"), Lt(this, "url"), Lt(this, "orig_name"), Lt(this, "size"), Lt(this, "blob"), Lt(this, "is_stream"), Lt(this, "mime_type"), Lt(this, "alt_text"), Lt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class mb extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = _i(this, en) + t; ; ) {
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
        $d(this, en, t);
      },
      flush: (t) => {
        if (_i(this, en) === "")
          return;
        const n = e.allowCR && _i(this, en).endsWith("\r") ? _i(this, en).slice(0, -1) : _i(this, en);
        t.enqueue(n);
      }
    }), Qd(this, en, "");
  }
}
en = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: tm,
  append: Xe,
  attr: gn,
  detach: Fr,
  element: bn,
  init: nm,
  insert: Ur,
  noop: ia,
  safe_not_equal: im,
  set_data: _s,
  set_style: al,
  space: Xl,
  text: Kn,
  toggle_class: sa
} = window.__gradio__svelte__internal, { onMount: sm, createEventDispatcher: lm, onDestroy: om } = window.__gradio__svelte__internal;
function la(i) {
  let e, t, n, s, l = vi(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = bn("div"), t = bn("span"), n = bn("div"), s = bn("progress"), o = Kn(l), a = Xl(), c = bn("span"), u = Kn(f), al(s, "visibility", "hidden"), al(s, "height", "0"), al(s, "width", "0"), s.value = r = vi(
        /*file_to_display*/
        i[2]
      ), gn(s, "max", "100"), gn(s, "class", "svelte-cr2edf"), gn(n, "class", "progress-bar svelte-cr2edf"), gn(c, "class", "file-name svelte-cr2edf"), gn(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Ur(_, e, d), Xe(e, t), Xe(t, n), Xe(n, s), Xe(s, o), Xe(e, a), Xe(e, c), Xe(c, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && l !== (l = vi(
        /*file_to_display*/
        _[2]
      ) + "") && _s(o, l), d & /*file_to_display*/
      4 && r !== (r = vi(
        /*file_to_display*/
        _[2]
      )) && (s.value = r), d & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      _[2].orig_name + "") && _s(u, f);
    },
    d(_) {
      _ && Fr(e);
    }
  };
}
function am(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && la(i)
  );
  return {
    c() {
      e = bn("div"), t = bn("span"), n = Kn("Uploading "), l = Kn(s), o = Xl(), a = Kn(r), c = Kn("..."), f = Xl(), u && u.c(), gn(t, "class", "uploading svelte-cr2edf"), gn(e, "class", "wrap svelte-cr2edf"), sa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      Ur(_, e, d), Xe(e, t), Xe(t, n), Xe(t, l), Xe(t, o), Xe(t, a), Xe(t, c), Xe(e, f), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      _[0].length + "") && _s(l, s), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && _s(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = la(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && sa(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: ia,
    o: ia,
    d(_) {
      _ && Fr(e), u && u.d();
    }
  };
}
function vi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function rm(i) {
  let e = 0;
  return i.forEach((t) => {
    e += vi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function cm(i, e, t) {
  var n = this && this.__awaiter || function(g, m, w, y) {
    function p(C) {
      return C instanceof w ? C : new w(function(S) {
        S(C);
      });
    }
    return new (w || (w = Promise))(function(C, S) {
      function x(z) {
        try {
          k(y.next(z));
        } catch (v) {
          S(v);
        }
      }
      function B(z) {
        try {
          k(y.throw(z));
        } catch (v) {
          S(v);
        }
      }
      function k(z) {
        z.done ? C(z.value) : p(z.value).then(x, B);
      }
      k((y = y.apply(g, m || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, _ = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const d = lm();
  function h(g, m) {
    t(0, _ = _.map((w) => (w.orig_name === g && (w.progress += m), w)));
  }
  return sm(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(g.data);
        c || t(1, c = !0), m.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, f = m), h(m.orig_name, m.chunk_size));
      });
    };
  })), om(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && rm(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class fm extends tm {
  constructor(e) {
    super(), nm(this, e, cm, am, im, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: um,
  append: oa,
  attr: Se,
  binding_callbacks: hm,
  bubble: cn,
  check_outros: jr,
  create_component: _m,
  create_slot: Or,
  destroy_component: dm,
  detach: Ms,
  element: Rl,
  empty: Vr,
  get_all_dirty_from_scope: Nr,
  get_slot_changes: Kr,
  group_outros: Zr,
  init: mm,
  insert: Ds,
  listen: je,
  mount_component: gm,
  prevent_default: fn,
  run_all: bm,
  safe_not_equal: pm,
  set_style: Gr,
  space: wm,
  stop_propagation: un,
  toggle_class: ke,
  transition_in: sn,
  transition_out: Bn,
  update_slot_base: Jr
} = window.__gradio__svelte__internal, { createEventDispatcher: vm, tick: km } = window.__gradio__svelte__internal;
function ym(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = Or(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Rl("button"), d && d.c(), t = wm(), n = Rl("input"), Se(n, "aria-label", "file upload"), Se(n, "data-testid", "file-upload"), Se(n, "type", "file"), Se(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, Se(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), Se(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Se(n, "class", "svelte-1s26xmt"), Se(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Se(e, "class", "svelte-1s26xmt"), ke(
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
      ), Gr(e, "height", "100%");
    },
    m(h, g) {
      Ds(h, e, g), d && d.m(e, null), oa(e, t), oa(e, n), i[34](n), c = !0, f || (u = [
        je(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        je(e, "drag", un(fn(
          /*drag_handler*/
          i[27]
        ))),
        je(e, "dragstart", un(fn(
          /*dragstart_handler*/
          i[28]
        ))),
        je(e, "dragend", un(fn(
          /*dragend_handler*/
          i[29]
        ))),
        je(e, "dragover", un(fn(
          /*dragover_handler*/
          i[30]
        ))),
        je(e, "dragenter", un(fn(
          /*dragenter_handler*/
          i[31]
        ))),
        je(e, "dragleave", un(fn(
          /*dragleave_handler*/
          i[32]
        ))),
        je(e, "drop", un(fn(
          /*drop_handler*/
          i[33]
        ))),
        je(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        je(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        je(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        je(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(h, g) {
      d && d.p && (!c || g[0] & /*$$scope*/
      33554432) && Jr(
        d,
        _,
        h,
        /*$$scope*/
        h[25],
        c ? Kr(
          _,
          /*$$scope*/
          h[25],
          g,
          null
        ) : Nr(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!c || g[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      h[16] || void 0)) && Se(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "directory" || void 0)) && Se(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && Se(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      h[9] ? -1 : 0)) && Se(e, "tabindex", a), (!c || g[0] & /*hidden*/
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
      c || (sn(d, h), c = !0);
    },
    o(h) {
      Bn(d, h), c = !1;
    },
    d(h) {
      h && Ms(e), d && d.d(h), i[34](null), f = !1, bm(u);
    }
  };
}
function Cm(i) {
  let e, t, n = !/*hidden*/
  i[9] && aa(i);
  return {
    c() {
      n && n.c(), e = Vr();
    },
    m(s, l) {
      n && n.m(s, l), Ds(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (Zr(), Bn(n, 1, 1, () => {
        n = null;
      }), jr()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && sn(n, 1)) : (n = aa(s), n.c(), sn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (sn(n), t = !0);
    },
    o(s) {
      Bn(n), t = !1;
    },
    d(s) {
      s && Ms(e), n && n.d(s);
    }
  };
}
function Sm(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Or(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Rl("button"), r && r.c(), Se(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Se(e, "class", "svelte-1s26xmt"), ke(
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
      ), Gr(e, "height", "100%");
    },
    m(a, c) {
      Ds(a, e, c), r && r.m(e, null), n = !0, s || (l = je(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Jr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Kr(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : Nr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Se(e, "tabindex", t), (!n || c[0] & /*hidden*/
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
      n || (sn(r, a), n = !0);
    },
    o(a) {
      Bn(r, a), n = !1;
    },
    d(a) {
      a && Ms(e), r && r.d(a), s = !1, l();
    }
  };
}
function aa(i) {
  let e, t;
  return e = new fm({
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
      _m(e.$$.fragment);
    },
    m(n, s) {
      gm(e, n, s), t = !0;
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
      t || (sn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Bn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dm(e, n);
    }
  };
}
function xm(i) {
  let e, t, n, s;
  const l = [Sm, Cm, ym], o = [];
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
      t.c(), n = Vr();
    },
    m(a, c) {
      o[e].m(a, c), Ds(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Zr(), Bn(o[f], 1, 1, () => {
        o[f] = null;
      }), jr(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), sn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (sn(t), s = !0);
    },
    o(a) {
      Bn(t), s = !1;
    },
    d(a) {
      a && Ms(n), o[e].d(a);
    }
  };
}
function zm(i, e, t) {
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
function Bm(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(E, R, G, ce) {
    function L(nt) {
      return nt instanceof G ? nt : new G(function(vt) {
        vt(nt);
      });
    }
    return new (G || (G = Promise))(function(nt, vt) {
      function it(Ae) {
        try {
          we(ce.next(Ae));
        } catch (kt) {
          vt(kt);
        }
      }
      function Ie(Ae) {
        try {
          we(ce.throw(Ae));
        } catch (kt) {
          vt(kt);
        }
      }
      function we(Ae) {
        Ae.done ? nt(Ae.value) : L(Ae.value).then(it, Ie);
      }
      we((ce = ce.apply(E, R || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: g = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: w = null } = e, { show_progress: y = !0 } = e, { max_file_size: p = null } = e, { upload: C } = e, { stream_handler: S } = e, x, B, k;
  const z = vm(), v = ["image", "video", "audio", "text", "file"], W = (E) => E.startsWith(".") || E.endsWith("/*") ? E : v.includes(E) ? E + "/*" : "." + E;
  function X() {
    t(20, r = !r);
  }
  function q() {
    navigator.clipboard.read().then((E) => l(this, void 0, void 0, function* () {
      for (let R = 0; R < E.length; R++) {
        const G = E[R].types.find((ce) => ce.startsWith("image/"));
        if (G) {
          E[R].getType(G).then((ce) => l(this, void 0, void 0, function* () {
            const L = new File([ce], `clipboard.${G.replace("image/", "")}`);
            yield K([L]);
          }));
          break;
        }
      }
    }));
  }
  function Z() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function Q(E) {
    return l(this, void 0, void 0, function* () {
      yield km(), t(14, x = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
      try {
        const R = yield C(E, d, x, p ?? 1 / 0);
        return z("load", u === "single" ? R == null ? void 0 : R[0] : R), t(1, m = !1), R || [];
      } catch (R) {
        return z("error", R.message), t(1, m = !1), [];
      }
    });
  }
  function K(E) {
    return l(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let R = E.map((G) => new File([G], G instanceof File ? G.name : "file", { type: G.type }));
      return t(15, B = yield Pr(R)), yield Q(B);
    });
  }
  function le(E) {
    return l(this, void 0, void 0, function* () {
      const R = E.target;
      if (R.files)
        if (g != "blob")
          yield K(Array.from(R.files));
        else {
          if (u === "single") {
            z("load", R.files[0]);
            return;
          }
          z("load", R.files);
        }
    });
  }
  function Y(E) {
    return l(this, void 0, void 0, function* () {
      var R;
      if (t(20, r = !1), !(!((R = E.dataTransfer) === null || R === void 0) && R.files)) return;
      const G = Array.from(E.dataTransfer.files).filter((ce) => {
        const L = "." + ce.name.split(".").pop();
        return L && zm(k, L, ce.type) || (L && Array.isArray(o) ? o.includes(L) : L === o) ? !0 : (z("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield K(G);
    });
  }
  function V(E) {
    cn.call(this, i, E);
  }
  function U(E) {
    cn.call(this, i, E);
  }
  function ee(E) {
    cn.call(this, i, E);
  }
  function I(E) {
    cn.call(this, i, E);
  }
  function ae(E) {
    cn.call(this, i, E);
  }
  function P(E) {
    cn.call(this, i, E);
  }
  function H(E) {
    cn.call(this, i, E);
  }
  function de(E) {
    hm[E ? "unshift" : "push"](() => {
      w = E, t(2, w);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, o = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, c = E.center), "flex" in E && t(5, f = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, _ = E.disable_click), "root" in E && t(8, d = E.root), "hidden" in E && t(9, h = E.hidden), "format" in E && t(21, g = E.format), "uploading" in E && t(1, m = E.uploading), "hidden_upload" in E && t(2, w = E.hidden_upload), "show_progress" in E && t(10, y = E.show_progress), "max_file_size" in E && t(22, p = E.max_file_size), "upload" in E && t(23, C = E.upload), "stream_handler" in E && t(11, S = E.stream_handler), "$$scope" in E && t(25, s = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, k = null) : typeof o == "string" ? t(16, k = W(o)) : (t(0, o = o.map(W)), t(16, k = o.join(", "))));
  }, [
    o,
    m,
    w,
    a,
    c,
    f,
    u,
    _,
    d,
    h,
    y,
    S,
    q,
    Z,
    x,
    B,
    k,
    X,
    le,
    Y,
    r,
    g,
    p,
    C,
    K,
    s,
    n,
    V,
    U,
    ee,
    I,
    ae,
    P,
    H,
    de
  ];
}
class Mm extends um {
  constructor(e) {
    super(), mm(
      this,
      e,
      Bm,
      xm,
      pm,
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
  SvelteComponent: Dm,
  append: Ui,
  attr: rl,
  create_component: Wm,
  destroy_component: Em,
  detach: Lm,
  element: cl,
  init: qm,
  insert: Ym,
  listen: Xm,
  mount_component: Rm,
  noop: Hm,
  safe_not_equal: Im,
  set_style: Am,
  space: Tm,
  text: Pm,
  transition_in: Fm,
  transition_out: Um
} = window.__gradio__svelte__internal, { createEventDispatcher: jm } = window.__gradio__svelte__internal;
function Om(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new mr({}), {
    c() {
      e = cl("button"), t = cl("div"), n = cl("span"), Wm(s.$$.fragment), l = Tm(), r = Pm(o), rl(n, "class", "icon-wrap svelte-fjcd9c"), rl(t, "class", "wrap svelte-fjcd9c"), rl(e, "class", "svelte-fjcd9c"), Am(e, "height", "100%");
    },
    m(u, _) {
      Ym(u, e, _), Ui(e, t), Ui(t, n), Rm(s, n, null), Ui(t, l), Ui(t, r), a = !0, c || (f = Xm(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: Hm,
    i(u) {
      a || (Fm(s.$$.fragment, u), a = !0);
    },
    o(u) {
      Um(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Lm(e), Em(s), c = !1, f();
    }
  };
}
function Vm(i) {
  const e = jm();
  return [e, () => e("click")];
}
class Nm extends Dm {
  constructor(e) {
    super(), qm(this, e, Vm, Om, Im, {});
  }
}
function Km() {
  return navigator.mediaDevices.enumerateDevices();
}
function Zm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function ra(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (Zm(l, e), l));
}
function Gm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Jm,
  action_destroyer: Qm,
  add_render_callback: $m,
  append: At,
  attr: be,
  binding_callbacks: e1,
  check_outros: Ci,
  create_component: si,
  create_in_transition: t1,
  destroy_component: li,
  destroy_each: n1,
  detach: Re,
  element: Ke,
  empty: Jl,
  ensure_array_like: ca,
  group_outros: Si,
  init: i1,
  insert: He,
  listen: ds,
  mount_component: oi,
  noop: Ql,
  run_all: s1,
  safe_not_equal: l1,
  set_data: Qr,
  set_input_value: Hl,
  space: Mi,
  stop_propagation: o1,
  text: $r,
  toggle_class: ji,
  transition_in: ye,
  transition_out: xe
} = window.__gradio__svelte__internal, { createEventDispatcher: a1, onMount: r1 } = window.__gradio__svelte__internal;
function fa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function c1(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const _ = [h1, u1], d = [];
  function h(w, y) {
    return (
      /*mode*/
      w[1] === "video" || /*streaming*/
      w[0] ? 0 : 1
    );
  }
  n = h(i), s = d[n] = _[n](i);
  let g = !/*recording*/
  i[8] && ua(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && ha(i)
  );
  return {
    c() {
      e = Ke("div"), t = Ke("button"), s.c(), o = Mi(), g && g.c(), r = Mi(), m && m.c(), a = Jl(), be(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), be(t, "class", "svelte-8hqvb6"), be(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(w, y) {
      He(w, e, y), At(e, t), d[n].m(t, null), At(e, o), g && g.m(e, null), He(w, r, y), m && m.m(w, y), He(w, a, y), c = !0, f || (u = ds(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(w, y) {
      let p = n;
      n = h(w), n === p ? d[n].p(w, y) : (Si(), xe(d[p], 1, 1, () => {
        d[p] = null;
      }), Ci(), s = d[n], s ? s.p(w, y) : (s = d[n] = _[n](w), s.c()), ye(s, 1), s.m(t, null)), (!c || y[0] & /*mode*/
      2 && l !== (l = /*mode*/
      w[1] === "image" ? "capture photo" : "start recording")) && be(t, "aria-label", l), /*recording*/
      w[8] ? g && (Si(), xe(g, 1, 1, () => {
        g = null;
      }), Ci()) : g ? (g.p(w, y), y[0] & /*recording*/
      256 && ye(g, 1)) : (g = ua(w), g.c(), ye(g, 1), g.m(e, null)), /*options_open*/
      w[10] && /*selected_device*/
      w[7] ? m ? (m.p(w, y), y[0] & /*options_open, selected_device*/
      1152 && ye(m, 1)) : (m = ha(w), m.c(), ye(m, 1), m.m(a.parentNode, a)) : m && (Si(), xe(m, 1, 1, () => {
        m = null;
      }), Ci());
    },
    i(w) {
      c || (ye(s), ye(g), ye(m), c = !0);
    },
    o(w) {
      xe(s), xe(g), xe(m), c = !1;
    },
    d(w) {
      w && (Re(e), Re(r), Re(a)), d[n].d(), g && g.d(), m && m.d(w), f = !1, u();
    }
  };
}
function f1(i) {
  let e, t, n, s;
  return t = new Nm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ke("div"), si(t.$$.fragment), be(e, "title", "grant webcam access");
    },
    m(l, o) {
      He(l, e, o), oi(t, e, null), s = !0;
    },
    p: Ql,
    i(l) {
      s || (ye(t.$$.fragment, l), l && (n || $m(() => {
        n = t1(e, Q_, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      xe(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && Re(e), li(t);
    }
  };
}
function u1(i) {
  let e, t, n;
  return t = new Lu({}), {
    c() {
      e = Ke("div"), si(t.$$.fragment), be(e, "class", "icon svelte-8hqvb6"), be(e, "title", "capture photo");
    },
    m(s, l) {
      He(s, e, l), oi(t, e, null), n = !0;
    },
    p: Ql,
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Re(e), li(t);
    }
  };
}
function h1(i) {
  let e, t, n, s;
  const l = [d1, _1], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Jl();
    },
    m(a, c) {
      o[e].m(a, c), He(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (Si(), xe(o[f], 1, 1, () => {
        o[f] = null;
      }), Ci(), t = o[e], t || (t = o[e] = l[e](a), t.c()), ye(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ye(t), s = !0);
    },
    o(a) {
      xe(t), s = !1;
    },
    d(a) {
      a && Re(n), o[e].d(a);
    }
  };
}
function _1(i) {
  let e, t, n;
  return t = new Tu({}), {
    c() {
      e = Ke("div"), si(t.$$.fragment), be(e, "class", "icon red svelte-8hqvb6"), be(e, "title", "start recording");
    },
    m(s, l) {
      He(s, e, l), oi(t, e, null), n = !0;
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Re(e), li(t);
    }
  };
}
function d1(i) {
  let e, t, n;
  return t = new Jh({}), {
    c() {
      e = Ke("div"), si(t.$$.fragment), be(e, "class", "icon red svelte-8hqvb6"), be(e, "title", "stop recording");
    },
    m(s, l) {
      He(s, e, l), oi(t, e, null), n = !0;
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Re(e), li(t);
    }
  };
}
function ua(i) {
  let e, t, n, s, l;
  return t = new Vl({}), {
    c() {
      e = Ke("button"), si(t.$$.fragment), be(e, "class", "icon svelte-8hqvb6"), be(e, "aria-label", "select input source");
    },
    m(o, r) {
      He(o, e, r), oi(t, e, null), n = !0, s || (l = ds(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: Ql,
    i(o) {
      n || (ye(t.$$.fragment, o), n = !0);
    },
    o(o) {
      xe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Re(e), li(t), s = !1, l();
    }
  };
}
function ha(i) {
  let e, t, n, s, l, o, r;
  n = new Vl({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? g1 : m1
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = Ke("select"), t = Ke("button"), si(n.$$.fragment), s = Mi(), f.c(), be(t, "class", "inset-icon svelte-8hqvb6"), be(e, "class", "select-wrap svelte-8hqvb6"), be(e, "aria-label", "select source");
    },
    m(u, _) {
      He(u, e, _), At(e, t), oi(n, t, null), At(t, s), f.m(e, null), l = !0, o || (r = [
        ds(t, "click", o1(
          /*click_handler_2*/
          i[22]
        )),
        Qm($l.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        ds(
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
      xe(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && Re(e), li(n), f.d(), o = !1, s1(r);
    }
  };
}
function m1(i) {
  let e, t = ca(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = _a(fa(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Jl();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      He(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = ca(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = fa(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = _a(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && Re(e), n1(n, s);
    }
  };
}
function g1(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ke("option"), n = $r(t), e.__value = "", Hl(e, e.__value), be(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      He(s, e, l), At(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Qr(n, t);
    },
    d(s) {
      s && Re(e);
    }
  };
}
function _a(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = Ke("option"), n = $r(t), s = Mi(), e.__value = l = /*device*/
      i[32].deviceId, Hl(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, be(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      He(r, e, a), At(e, n), At(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Qr(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, Hl(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Re(e);
    }
  };
}
function b1(i) {
  let e, t, n, s, l, o;
  const r = [f1, c1], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = Ke("div"), t = Ke("video"), n = Mi(), l.c(), be(t, "class", "svelte-8hqvb6"), ji(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), ji(t, "hide", !/*webcam_accessed*/
      i[9]), be(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      He(f, e, u), At(e, t), i[19](t), At(e, n), a[s].m(e, null), o = !0;
    },
    p(f, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && ji(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && ji(t, "hide", !/*webcam_accessed*/
      f[9]);
      let _ = s;
      s = c(f), s === _ ? a[s].p(f, u) : (Si(), xe(a[_], 1, 1, () => {
        a[_] = null;
      }), Ci(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), ye(l, 1), l.m(e, null));
    },
    i(f) {
      o || (ye(l), o = !0);
    },
    o(f) {
      xe(l), o = !1;
    },
    d(f) {
      f && Re(e), i[19](null), a[s].d();
    }
  };
}
function $l(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function p1(i, e, t) {
  var n = this && this.__awaiter || function(Y, V, U, ee) {
    function I(ae) {
      return ae instanceof U ? ae : new U(function(P) {
        P(ae);
      });
    }
    return new (U || (U = Promise))(function(ae, P) {
      function H(R) {
        try {
          E(ee.next(R));
        } catch (G) {
          P(G);
        }
      }
      function de(R) {
        try {
          E(ee.throw(R));
        } catch (G) {
          P(G);
        }
      }
      function E(R) {
        R.done ? ae(R.value) : I(R.value).then(H, de);
      }
      E((ee = ee.apply(Y, V || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: h } = e, { upload: g } = e;
  const m = a1();
  r1(() => r = document.createElement("canvas"));
  const w = (Y) => n(void 0, void 0, void 0, function* () {
    const U = Y.target.value;
    yield ra(d, s, U).then((ee) => n(void 0, void 0, void 0, function* () {
      x = ee, t(7, o = l.find((I) => I.deviceId === U) || null), t(10, X = !1);
    }));
  });
  function y() {
    return n(this, void 0, void 0, function* () {
      try {
        ra(d, s).then((Y) => n(this, void 0, void 0, function* () {
          t(9, v = !0), t(6, l = yield Km()), x = Y;
        })).then(() => Gm(l)).then((Y) => {
          t(6, l = Y);
          const V = x.getTracks().map((U) => {
            var ee;
            return (ee = U.getSettings()) === null || ee === void 0 ? void 0 : ee.deviceId;
          })[0];
          t(7, o = V && Y.find((U) => U.deviceId === V) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", h("image.no_webcam_support"));
      } catch (Y) {
        if (Y instanceof DOMException && Y.name == "NotAllowedError")
          m("error", h("image.allow_webcam_access"));
        else
          throw Y;
      }
    });
  }
  function p() {
    var Y = r.getContext("2d");
    (!a || a && C) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, Y.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), _ && (Y.scale(-1, 1), Y.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (V) => {
        m(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let C = !1, S = [], x, B, k;
  function z() {
    if (C) {
      k.stop();
      let Y = new Blob(S, { type: B }), V = new FileReader();
      V.onload = function(U) {
        return n(this, void 0, void 0, function* () {
          var ee;
          if (U.target) {
            let I = new File([Y], "sample." + B.substring(6));
            const ae = yield Pr([I]);
            let P = ((ee = yield g(ae, f)) === null || ee === void 0 ? void 0 : ee.filter(Boolean))[0];
            m("capture", P), m("stop_recording");
          }
        });
      }, V.readAsDataURL(Y);
    } else {
      m("start_recording"), S = [];
      let Y = ["video/webm", "video/mp4"];
      for (let V of Y)
        if (MediaRecorder.isTypeSupported(V)) {
          B = V;
          break;
        }
      if (B === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      k = new MediaRecorder(x, { mimeType: B }), k.addEventListener("dataavailable", function(V) {
        S.push(V.data);
      }), k.start(200);
    }
    t(8, C = !C);
  }
  let v = !1;
  function W() {
    u === "image" && a && t(8, C = !C), u === "image" ? p() : z(), !C && x && (x.getTracks().forEach((Y) => Y.stop()), t(5, s.srcObject = null, s), t(9, v = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && p();
    },
    500
  );
  let X = !1;
  function q(Y) {
    Y.preventDefault(), Y.stopPropagation(), t(10, X = !1);
  }
  function Z(Y) {
    e1[Y ? "unshift" : "push"](() => {
      s = Y, t(5, s);
    });
  }
  const Q = async () => y(), K = () => t(10, X = !0), le = () => t(10, X = !1);
  return i.$$set = (Y) => {
    "streaming" in Y && t(0, a = Y.streaming), "pending" in Y && t(15, c = Y.pending), "root" in Y && t(16, f = Y.root), "mode" in Y && t(1, u = Y.mode), "mirror_webcam" in Y && t(2, _ = Y.mirror_webcam), "include_audio" in Y && t(17, d = Y.include_audio), "i18n" in Y && t(3, h = Y.i18n), "upload" in Y && t(18, g = Y.upload);
  }, [
    a,
    u,
    _,
    h,
    $l,
    s,
    l,
    o,
    C,
    v,
    X,
    w,
    y,
    W,
    q,
    c,
    f,
    d,
    g,
    Z,
    Q,
    K,
    le
  ];
}
class w1 extends Jm {
  constructor(e) {
    super(), i1(
      this,
      e,
      p1,
      b1,
      l1,
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
    return $l;
  }
}
const {
  SvelteComponent: v1,
  append: Zt,
  attr: A,
  detach: k1,
  init: y1,
  insert: C1,
  noop: fl,
  safe_not_equal: S1,
  set_style: Gt,
  svg_element: qt
} = window.__gradio__svelte__internal;
function x1(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = qt("svg"), t = qt("rect"), n = qt("rect"), s = qt("rect"), l = qt("rect"), o = qt("line"), r = qt("line"), a = qt("line"), c = qt("line"), A(t, "x", "2"), A(t, "y", "2"), A(t, "width", "5"), A(t, "height", "5"), A(t, "rx", "1"), A(t, "ry", "1"), A(t, "stroke-width", "2"), A(t, "fill", "none"), A(n, "x", "17"), A(n, "y", "2"), A(n, "width", "5"), A(n, "height", "5"), A(n, "rx", "1"), A(n, "ry", "1"), A(n, "stroke-width", "2"), A(n, "fill", "none"), A(s, "x", "2"), A(s, "y", "17"), A(s, "width", "5"), A(s, "height", "5"), A(s, "rx", "1"), A(s, "ry", "1"), A(s, "stroke-width", "2"), A(s, "fill", "none"), A(l, "x", "17"), A(l, "y", "17"), A(l, "width", "5"), A(l, "height", "5"), A(l, "rx", "1"), A(l, "ry", "1"), A(l, "stroke-width", "2"), A(l, "fill", "none"), A(o, "x1", "7.5"), A(o, "y1", "4.5"), A(o, "x2", "16"), A(o, "y2", "4.5"), Gt(o, "stroke-width", "2px"), A(r, "x1", "7.5"), A(r, "y1", "19.5"), A(r, "x2", "16"), A(r, "y2", "19.5"), Gt(r, "stroke-width", "2px"), A(a, "x1", "4.5"), A(a, "y1", "8"), A(a, "x2", "4.5"), A(a, "y2", "16"), Gt(a, "stroke-width", "2px"), A(c, "x1", "19.5"), A(c, "y1", "8"), A(c, "x2", "19.5"), A(c, "y2", "16"), Gt(c, "stroke-width", "2px"), A(e, "width", "100%"), A(e, "height", "100%"), A(e, "viewBox", "0 0 24 24"), A(e, "version", "1.1"), A(e, "xmlns", "http://www.w3.org/2000/svg"), A(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), A(e, "xml:space", "preserve"), A(e, "stroke", "currentColor"), Gt(e, "fill-rule", "evenodd"), Gt(e, "clip-rule", "evenodd"), Gt(e, "stroke-linecap", "round"), Gt(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      C1(f, e, u), Zt(e, t), Zt(e, n), Zt(e, s), Zt(e, l), Zt(e, o), Zt(e, r), Zt(e, a), Zt(e, c);
    },
    p: fl,
    i: fl,
    o: fl,
    d(f) {
      f && k1(e);
    }
  };
}
class z1 extends v1 {
  constructor(e) {
    super(), y1(this, e, null, x1, S1, {});
  }
}
const {
  SvelteComponent: B1,
  append: M1,
  attr: ft,
  detach: D1,
  init: W1,
  insert: E1,
  noop: ul,
  safe_not_equal: L1,
  set_style: Oi,
  svg_element: da
} = window.__gradio__svelte__internal;
function q1(i) {
  let e, t;
  return {
    c() {
      e = da("svg"), t = da("path"), ft(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), ft(t, "fill", "none"), ft(t, "stroke-width", "2"), ft(e, "width", "100%"), ft(e, "height", "100%"), ft(e, "viewBox", "0 0 24 24"), ft(e, "version", "1.1"), ft(e, "xmlns", "http://www.w3.org/2000/svg"), ft(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ft(e, "xml:space", "preserve"), ft(e, "stroke", "currentColor"), Oi(e, "fill-rule", "evenodd"), Oi(e, "clip-rule", "evenodd"), Oi(e, "stroke-linecap", "round"), Oi(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      E1(n, e, s), M1(e, t);
    },
    p: ul,
    i: ul,
    o: ul,
    d(n) {
      n && D1(e);
    }
  };
}
class Y1 extends B1 {
  constructor(e) {
    super(), W1(this, e, null, q1, L1, {});
  }
}
const {
  SvelteComponent: X1,
  append: R1,
  attr: ut,
  detach: H1,
  init: I1,
  insert: A1,
  noop: hl,
  safe_not_equal: T1,
  set_style: Vi,
  svg_element: ma
} = window.__gradio__svelte__internal;
function P1(i) {
  let e, t;
  return {
    c() {
      e = ma("svg"), t = ma("path"), ut(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), ut(t, "fill", "none"), ut(t, "stroke-width", "2"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "version", "1.1"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ut(e, "xml:space", "preserve"), ut(e, "stroke", "currentColor"), Vi(e, "fill-rule", "evenodd"), Vi(e, "clip-rule", "evenodd"), Vi(e, "stroke-linecap", "round"), Vi(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      A1(n, e, s), R1(e, t);
    },
    p: hl,
    i: hl,
    o: hl,
    d(n) {
      n && H1(e);
    }
  };
}
class F1 extends X1 {
  constructor(e) {
    super(), I1(this, e, null, P1, T1, {});
  }
}
const {
  SvelteComponent: U1,
  append: ga,
  attr: Yt,
  detach: j1,
  init: O1,
  insert: V1,
  noop: _l,
  safe_not_equal: N1,
  set_style: Ni,
  svg_element: dl
} = window.__gradio__svelte__internal;
function K1(i) {
  let e, t, n;
  return {
    c() {
      e = dl("svg"), t = dl("path"), n = dl("path"), Yt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Yt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "fill", "none"), Yt(e, "stroke", "currentColor"), Yt(e, "stroke-width", "2"), Ni(e, "fill-rule", "evenodd"), Ni(e, "clip-rule", "evenodd"), Ni(e, "stroke-linecap", "round"), Ni(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      V1(s, e, l), ga(e, t), ga(e, n);
    },
    p: _l,
    i: _l,
    o: _l,
    d(s) {
      s && j1(e);
    }
  };
}
class Z1 extends U1 {
  constructor(e) {
    super(), O1(this, e, null, K1, N1, {});
  }
}
const {
  SvelteComponent: G1,
  append: J1,
  attr: Jt,
  detach: Q1,
  init: $1,
  insert: e0,
  noop: ml,
  safe_not_equal: t0,
  set_style: Ki,
  svg_element: ba
} = window.__gradio__svelte__internal;
function n0(i) {
  let e, t;
  return {
    c() {
      e = ba("svg"), t = ba("path"), Jt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Jt(e, "width", "100%"), Jt(e, "height", "100%"), Jt(e, "viewBox", "0 0 24 24"), Jt(e, "fill", "none"), Jt(e, "stroke", "currentColor"), Jt(e, "stroke-width", "2"), Ki(e, "fill-rule", "evenodd"), Ki(e, "clip-rule", "evenodd"), Ki(e, "stroke-linecap", "round"), Ki(e, "stroke-linejoin", "round"), Jt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      e0(n, e, s), J1(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && Q1(e);
    }
  };
}
class i0 extends G1 {
  constructor(e) {
    super(), $1(this, e, null, n0, t0, {});
  }
}
const {
  SvelteComponent: s0,
  append: l0,
  attr: Qt,
  detach: o0,
  init: a0,
  insert: r0,
  noop: gl,
  safe_not_equal: c0,
  set_style: Zi,
  svg_element: pa
} = window.__gradio__svelte__internal;
function f0(i) {
  let e, t;
  return {
    c() {
      e = pa("svg"), t = pa("path"), Qt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Qt(e, "width", "100%"), Qt(e, "height", "100%"), Qt(e, "viewBox", "0 0 24 24"), Qt(e, "fill", "none"), Qt(e, "stroke", "currentColor"), Qt(e, "stroke-width", "2"), Zi(e, "fill-rule", "evenodd"), Zi(e, "clip-rule", "evenodd"), Zi(e, "stroke-linecap", "round"), Zi(e, "stroke-linejoin", "round"), Qt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      r0(n, e, s), l0(e, t);
    },
    p: gl,
    i: gl,
    o: gl,
    d(n) {
      n && o0(e);
    }
  };
}
class u0 extends s0 {
  constructor(e) {
    super(), a0(this, e, null, f0, c0, {});
  }
}
const {
  SvelteComponent: h0,
  append: wa,
  attr: Ee,
  detach: _0,
  init: d0,
  insert: m0,
  noop: bl,
  safe_not_equal: g0,
  set_style: Gi,
  svg_element: pl
} = window.__gradio__svelte__internal;
function b0(i) {
  let e, t, n;
  return {
    c() {
      e = pl("svg"), t = pl("path"), n = pl("path"), Ee(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), Ee(t, "fill", "none"), Ee(t, "stroke-width", "2"), Ee(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), Ee(n, "fill", "none"), Ee(n, "stroke-width", "2"), Ee(e, "width", "100%"), Ee(e, "height", "100%"), Ee(e, "viewBox", "0 0 24 24"), Ee(e, "version", "1.1"), Ee(e, "xmlns", "http://www.w3.org/2000/svg"), Ee(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ee(e, "xml:space", "preserve"), Ee(e, "stroke", "currentColor"), Gi(e, "fill-rule", "evenodd"), Gi(e, "clip-rule", "evenodd"), Gi(e, "stroke-linecap", "round"), Gi(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      m0(s, e, l), wa(e, t), wa(e, n);
    },
    p: bl,
    i: bl,
    o: bl,
    d(s) {
      s && _0(e);
    }
  };
}
class p0 extends h0 {
  constructor(e) {
    super(), d0(this, e, null, b0, g0, {});
  }
}
const {
  SvelteComponent: w0,
  append: Xt,
  attr: F,
  detach: v0,
  init: k0,
  insert: y0,
  noop: wl,
  safe_not_equal: C0,
  svg_element: xt
} = window.__gradio__svelte__internal;
function S0(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = xt("svg"), t = xt("path"), n = xt("circle"), s = xt("circle"), l = xt("circle"), o = xt("circle"), r = xt("circle"), a = xt("circle"), c = xt("circle"), f = xt("circle"), F(t, "fill", "none"), F(t, "stroke", "currentColor"), F(t, "stroke-width", "1.5"), F(t, "stroke-linecap", "round"), F(t, "stroke-linejoin", "round"), F(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), F(n, "cx", "7"), F(n, "cy", "7"), F(n, "r", "1.5"), F(n, "fill", "currentColor"), F(s, "cx", "15"), F(s, "cy", "9"), F(s, "r", "1.5"), F(s, "fill", "currentColor"), F(l, "cx", "21"), F(l, "cy", "5"), F(l, "r", "1.5"), F(l, "fill", "currentColor"), F(o, "cx", "25"), F(o, "cy", "13"), F(o, "r", "1.5"), F(o, "fill", "currentColor"), F(r, "cx", "23"), F(r, "cy", "21"), F(r, "r", "1.5"), F(r, "fill", "currentColor"), F(a, "cx", "15"), F(a, "cy", "19"), F(a, "r", "1.5"), F(a, "fill", "currentColor"), F(c, "cx", "9"), F(c, "cy", "23"), F(c, "r", "1.5"), F(c, "fill", "currentColor"), F(f, "cx", "5"), F(f, "cy", "15"), F(f, "r", "1.5"), F(f, "fill", "currentColor"), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), F(e, "aria-hidden", "true"), F(e, "role", "img"), F(e, "class", "iconify iconify--carbon"), F(e, "width", "100%"), F(e, "height", "100%"), F(e, "preserveAspectRatio", "xMidYMid meet"), F(e, "viewBox", "0 0 32 32");
    },
    m(u, _) {
      y0(u, e, _), Xt(e, t), Xt(e, n), Xt(e, s), Xt(e, l), Xt(e, o), Xt(e, r), Xt(e, a), Xt(e, c), Xt(e, f);
    },
    p: wl,
    i: wl,
    o: wl,
    d(u) {
      u && v0(e);
    }
  };
}
let x0 = class extends w0 {
  constructor(e) {
    super(), k0(this, e, null, S0, C0, {});
  }
};
const {
  SvelteComponent: z0,
  append: va,
  attr: vl,
  bubble: ka,
  create_component: B0,
  destroy_component: M0,
  detach: ec,
  element: ya,
  init: D0,
  insert: tc,
  listen: kl,
  mount_component: W0,
  run_all: E0,
  safe_not_equal: L0,
  set_data: q0,
  set_input_value: Ca,
  space: Y0,
  text: X0,
  transition_in: R0,
  transition_out: H0
} = window.__gradio__svelte__internal, { createEventDispatcher: I0, afterUpdate: A0 } = window.__gradio__svelte__internal;
function T0(i) {
  let e;
  return {
    c() {
      e = X0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      tc(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && q0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && ec(e);
    }
  };
}
function P0(i) {
  let e, t, n, s, l, o, r;
  return t = new rr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [T0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = ya("label"), B0(t.$$.fragment), n = Y0(), s = ya("input"), vl(s, "type", "color"), s.disabled = /*disabled*/
      i[3], vl(s, "class", "svelte-16l8u73"), vl(e, "class", "block");
    },
    m(a, c) {
      tc(a, e, c), W0(t, e, null), va(e, n), va(e, s), Ca(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        kl(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        kl(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        kl(
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
      1 && Ca(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (R0(t.$$.fragment, a), l = !0);
    },
    o(a) {
      H0(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && ec(e), M0(t), o = !1, E0(r);
    }
  };
}
function F0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = I0();
  function f() {
    c("change", n), s || c("input");
  }
  A0(() => {
    t(5, s = !1);
  });
  function u(h) {
    ka.call(this, i, h);
  }
  function _(h) {
    ka.call(this, i, h);
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
class U0 extends z0 {
  constructor(e) {
    super(), D0(this, e, F0, P0, L0, {
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
  SvelteComponent: j0,
  append: nc,
  attr: ue,
  bubble: O0,
  check_outros: V0,
  create_slot: ic,
  detach: Ei,
  element: Ws,
  empty: N0,
  get_all_dirty_from_scope: sc,
  get_slot_changes: lc,
  group_outros: K0,
  init: Z0,
  insert: Li,
  listen: G0,
  safe_not_equal: J0,
  set_style: Ye,
  space: oc,
  src_url_equal: ms,
  toggle_class: Zn,
  transition_in: gs,
  transition_out: bs,
  update_slot_base: ac
} = window.__gradio__svelte__internal;
function Q0(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && Sa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = ic(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Ws("button"), r && r.c(), t = oc(), c && c.c(), ue(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ue(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Zn(e, "hidden", !/*visible*/
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
      Li(f, e, u), r && r.m(e, null), nc(e, t), c && c.m(e, null), s = !0, l || (o = G0(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? r ? r.p(f, u) : (r = Sa(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || u & /*$$scope*/
      2048) && ac(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? lc(
          a,
          /*$$scope*/
          f[11],
          u,
          null
        ) : sc(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && ue(e, "class", n), (!s || u & /*elem_id*/
      1) && ue(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || u & /*size, variant, elem_classes, visible*/
      30) && Zn(e, "hidden", !/*visible*/
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
      s || (gs(c, f), s = !0);
    },
    o(f) {
      bs(c, f), s = !1;
    },
    d(f) {
      f && Ei(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function $0(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && xa(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = ic(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Ws("a"), l && l.c(), t = oc(), r && r.c(), ue(
        e,
        "href",
        /*link*/
        i[6]
      ), ue(e, "rel", "noopener noreferrer"), ue(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ue(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ue(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Zn(e, "hidden", !/*visible*/
      i[2]), Zn(
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
      Li(a, e, c), l && l.m(e, null), nc(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = xa(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && ac(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? lc(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : sc(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && ue(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && ue(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ue(e, "class", n), (!s || c & /*elem_id*/
      1) && ue(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && Zn(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && Zn(
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
      s || (gs(r, a), s = !0);
    },
    o(a) {
      bs(r, a), s = !1;
    },
    d(a) {
      a && Ei(e), l && l.d(), r && r.d(a);
    }
  };
}
function Sa(i) {
  let e, t, n;
  return {
    c() {
      e = Ws("img"), ue(e, "class", "button-icon svelte-8huxfn"), ms(e.src, t = /*icon*/
      i[7].url) || ue(e, "src", t), ue(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Li(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !ms(e.src, t = /*icon*/
      s[7].url) && ue(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && ue(e, "alt", n);
    },
    d(s) {
      s && Ei(e);
    }
  };
}
function xa(i) {
  let e, t, n;
  return {
    c() {
      e = Ws("img"), ue(e, "class", "button-icon svelte-8huxfn"), ms(e.src, t = /*icon*/
      i[7].url) || ue(e, "src", t), ue(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Li(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !ms(e.src, t = /*icon*/
      s[7].url) && ue(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && ue(e, "alt", n);
    },
    d(s) {
      s && Ei(e);
    }
  };
}
function eg(i) {
  let e, t, n, s;
  const l = [$0, Q0], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = N0();
    },
    m(a, c) {
      o[e].m(a, c), Li(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (K0(), bs(o[f], 1, 1, () => {
        o[f] = null;
      }), V0(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), gs(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (gs(t), s = !0);
    },
    o(a) {
      bs(t), s = !1;
    },
    d(a) {
      a && Ei(n), o[e].d(a);
    }
  };
}
function tg(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: g = void 0 } = e;
  function m(w) {
    O0.call(this, i, w);
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
    m
  ];
}
class Il extends j0 {
  constructor(e) {
    super(), Z0(this, e, tg, eg, J0, {
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
  SvelteComponent: ng,
  add_render_callback: rc,
  append: Ji,
  attr: Ve,
  binding_callbacks: za,
  check_outros: ig,
  create_bidirectional_transition: Ba,
  destroy_each: sg,
  detach: xi,
  element: ps,
  empty: lg,
  ensure_array_like: Ma,
  group_outros: og,
  init: ag,
  insert: zi,
  listen: Al,
  prevent_default: rg,
  run_all: cg,
  safe_not_equal: fg,
  set_data: ug,
  set_style: In,
  space: Tl,
  text: hg,
  toggle_class: zt,
  transition_in: yl,
  transition_out: Da
} = window.__gradio__svelte__internal, { createEventDispatcher: _g } = window.__gradio__svelte__internal;
function Wa(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ea(i) {
  let e, t, n, s, l, o = Ma(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = La(Wa(i, o, a));
  return {
    c() {
      e = ps("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ve(e, "class", "options svelte-yuohum"), Ve(e, "role", "listbox"), In(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), In(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), In(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      zi(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = Al(e, "mousedown", rg(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = Ma(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = Wa(a, o, f);
          r[f] ? r[f].p(u, c) : (r[f] = La(u), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && In(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && In(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && In(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && rc(() => {
        n && (t || (t = Ba(e, Yo, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Ba(e, Yo, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && xi(e), sg(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function La(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = ps("li"), t = ps("span"), t.textContent = "✓", n = Tl(), l = hg(s), o = Tl(), Ve(t, "class", "inner-item svelte-yuohum"), zt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ve(e, "class", "item svelte-yuohum"), Ve(e, "data-index", r = /*index*/
      i[26]), Ve(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Ve(e, "data-testid", "dropdown-option"), Ve(e, "role", "option"), Ve(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), zt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), zt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), zt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), zt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, u) {
      zi(f, e, u), Ji(e, t), Ji(e, n), Ji(e, l), Ji(e, o);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && zt(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && ug(l, s), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && Ve(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && Ve(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && Ve(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
      18 && zt(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && zt(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && zt(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && zt(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && xi(e);
    }
  };
}
function dg(i) {
  let e, t, n, s, l;
  rc(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ea(i)
  );
  return {
    c() {
      e = ps("div"), t = Tl(), o && o.c(), n = lg(), Ve(e, "class", "reference");
    },
    m(r, a) {
      zi(r, e, a), i[20](e), zi(r, t, a), o && o.m(r, a), zi(r, n, a), s || (l = [
        Al(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Al(
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
      12 && yl(o, 1)) : (o = Ea(r), o.c(), yl(o, 1), o.m(n.parentNode, n)) : o && (og(), Da(o, 1, 1, () => {
        o = null;
      }), ig());
    },
    i(r) {
      yl(o);
    },
    o(r) {
      Da(o);
    },
    d(r) {
      r && (xi(e), xi(t), xi(n)), i[20](null), o && o.d(r), s = !1, cg(l);
    }
  };
}
function mg(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, _, d, h, g, m, w, y, p;
  function C() {
    const { top: X, bottom: q } = g.getBoundingClientRect();
    t(16, u = X), t(17, _ = p - q);
  }
  let S = null;
  function x() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        C(), S = null;
      },
      10
    ));
  }
  const B = _g();
  function k() {
    t(11, p = window.innerHeight);
  }
  function z(X) {
    za[X ? "unshift" : "push"](() => {
      g = X, t(6, g);
    });
  }
  const v = (X) => B("change", X);
  function W(X) {
    za[X ? "unshift" : "push"](() => {
      m = X, t(7, m);
    });
  }
  return i.$$set = (X) => {
    "choices" in X && t(0, l = X.choices), "filtered_indices" in X && t(1, o = X.filtered_indices), "show_options" in X && t(2, r = X.show_options), "disabled" in X && t(3, a = X.disabled), "selected_indices" in X && t(4, c = X.selected_indices), "active_index" in X && t(5, f = X.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (m && c.length > 0) {
          let q = m.querySelectorAll("li");
          for (const Z of Array.from(q))
            if (Z.getAttribute("data-index") === c[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, Z.offsetTop);
              break;
            }
        }
        C();
        const X = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, d = (X == null ? void 0 : X.height) || 0), t(8, h = (X == null ? void 0 : X.width) || 0);
      }
      _ > u ? (t(10, y = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, y = u - d));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    g,
    m,
    h,
    w,
    y,
    p,
    x,
    B,
    n,
    s,
    u,
    _,
    d,
    k,
    z,
    v,
    W
  ];
}
class gg extends ng {
  constructor(e) {
    super(), ag(this, e, mg, dg, fg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function bg(i, e) {
  return (i % e + e) % e;
}
function qa(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function pg(i, e, t) {
  i("change", e), t || i("input");
}
function wg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[bg(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: vg,
  append: hn,
  attr: Oe,
  binding_callbacks: kg,
  check_outros: yg,
  create_component: Pl,
  destroy_component: Fl,
  detach: eo,
  element: On,
  group_outros: Cg,
  init: Sg,
  insert: to,
  listen: tn,
  mount_component: Ul,
  noop: xg,
  run_all: zg,
  safe_not_equal: Bg,
  set_data: Mg,
  set_input_value: Ya,
  space: Cl,
  text: Dg,
  toggle_class: An,
  transition_in: Vn,
  transition_out: ki
} = window.__gradio__svelte__internal, { onMount: Wg } = window.__gradio__svelte__internal, { createEventDispatcher: Eg, afterUpdate: Lg } = window.__gradio__svelte__internal;
function qg(i) {
  let e;
  return {
    c() {
      e = Dg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      to(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Mg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && eo(e);
    }
  };
}
function Xa(i) {
  let e, t, n, s, l;
  return t = new Vl({}), {
    c() {
      e = On("div"), Pl(t.$$.fragment), Oe(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      to(o, e, r), Ul(t, e, null), n = !0, s || (l = tn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: xg,
    i(o) {
      n || (Vn(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ki(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && eo(e), Fl(t), s = !1, l();
    }
  };
}
function Yg(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h;
  t = new rr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [qg] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && Xa(i);
  return u = new gg({
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
      e = On("div"), Pl(t.$$.fragment), n = Cl(), s = On("div"), l = On("div"), o = On("div"), r = On("input"), c = Cl(), g && g.c(), f = Cl(), Pl(u.$$.fragment), Oe(r, "role", "listbox"), Oe(r, "aria-controls", "dropdown-options"), Oe(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Oe(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Oe(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], Oe(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], An(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Oe(o, "class", "secondary-wrap svelte-1a9du2n"), Oe(l, "class", "wrap-inner svelte-1a9du2n"), An(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), Oe(s, "class", "wrap svelte-1a9du2n"), Oe(e, "class", "svelte-1a9du2n"), An(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(m, w) {
      to(m, e, w), Ul(t, e, null), hn(e, n), hn(e, s), hn(s, l), hn(l, o), hn(o, r), Ya(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), hn(o, c), g && g.m(o, null), hn(s, f), Ul(u, s, null), _ = !0, d || (h = [
        tn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        tn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        tn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        tn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        tn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        tn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        tn(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], d = !0);
    },
    p(m, w) {
      const y = {};
      w[0] & /*show_label*/
      16 && (y.show_label = /*show_label*/
      m[4]), w[0] & /*info*/
      2 && (y.info = /*info*/
      m[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      16 && (y.$$scope = { dirty: w, ctx: m }), t.$set(y), (!_ || w[0] & /*show_options*/
      4096) && Oe(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!_ || w[0] & /*label*/
      1) && Oe(
        r,
        "aria-label",
        /*label*/
        m[0]
      ), (!_ || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      m[3]), (!_ || w[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      m[7])) && (r.readOnly = a), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      m[9] && Ya(
        r,
        /*input_text*/
        m[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && An(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? g && (Cg(), ki(g, 1, 1, () => {
        g = null;
      }), yg()) : g ? (g.p(m, w), w[0] & /*disabled*/
      8 && Vn(g, 1)) : (g = Xa(m), g.c(), Vn(g, 1), g.m(o, null)), (!_ || w[0] & /*show_options*/
      4096) && An(
        l,
        "show_options",
        /*show_options*/
        m[12]
      );
      const p = {};
      w[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      m[12]), w[0] & /*choices*/
      4 && (p.choices = /*choices*/
      m[2]), w[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      m[10]), w[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      m[3]), w[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), w[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      m[14]), u.$set(p), (!_ || w[0] & /*container*/
      32) && An(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      _ || (Vn(t.$$.fragment, m), Vn(g), Vn(u.$$.fragment, m), _ = !0);
    },
    o(m) {
      ki(t.$$.fragment, m), ki(g), ki(u.$$.fragment, m), _ = !1;
    },
    d(m) {
      m && eo(e), Fl(t), i[31](null), g && g.d(), Fl(u), d = !1, zg(h);
    }
  };
}
function Xg(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, g, m = !1, w, y, p = "", C = "", S = !1, x = [], B = null, k = null, z;
  const v = Eg();
  l ? (z = a.map((I) => I[1]).indexOf(l), k = z, k === -1 ? (o = l, k = null) : ([p, o] = a[k], C = p), X()) : a.length > 0 && (z = 0, k = 0, [p, l] = a[k], o = l, C = p);
  function W() {
    t(13, w = a.map((I) => I[0])), t(26, y = a.map((I) => I[1]));
  }
  function X() {
    W(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, p = ""), t(11, k = null)) : y.includes(l) ? (t(9, p = w[y.indexOf(l)]), t(11, k = y.indexOf(l))) : d ? (t(9, p = l), t(11, k = null)) : (t(9, p = ""), t(11, k = null)), t(29, z = k);
  }
  function q(I) {
    if (t(11, k = parseInt(I.detail.target.dataset.index)), isNaN(k)) {
      t(11, k = null);
      return;
    }
    t(12, m = !1), t(14, B = null), g.blur();
  }
  function Z(I) {
    t(10, x = a.map((ae, P) => P)), t(12, m = !0), v("focus");
  }
  function Q() {
    f || (g.focus(), t(12, m = !0));
  }
  function K(I) {
    I.preventDefault(), f || (g.focus(), t(12, m = !m));
  }
  function le() {
    d ? t(22, l = p) : t(9, p = w[y.indexOf(l)]), t(12, m = !1), t(14, B = null), v("blur");
  }
  function Y(I) {
    t(12, [m, B] = wg(I, B, x), m, (t(14, B), t(2, a), t(25, c), t(6, d), t(9, p), t(10, x), t(8, g), t(27, C), t(11, k), t(29, z), t(28, S), t(26, y))), I.key === "Enter" && (B !== null ? (t(11, k = B), t(12, m = !1), g.blur(), t(14, B = null)) : w.includes(p) ? (t(11, k = w.indexOf(p)), t(12, m = !1), t(14, B = null), g.blur()) : d && (t(22, l = p), t(11, k = null), t(12, m = !1), t(14, B = null), g.blur()), v("enter", l));
  }
  Lg(() => {
    t(23, r = !1), t(28, S = !0);
  }), Wg(() => {
  });
  function V() {
    p = this.value, t(9, p), t(11, k), t(29, z), t(28, S), t(2, a), t(26, y);
  }
  function U(I) {
    kg[I ? "unshift" : "push"](() => {
      g = I, t(8, g);
    });
  }
  const ee = (I) => v("key_up", { key: I.key, input_value: p });
  return i.$$set = (I) => {
    "label" in I && t(0, n = I.label), "info" in I && t(1, s = I.info), "value" in I && t(22, l = I.value), "value_is_output" in I && t(23, r = I.value_is_output), "choices" in I && t(2, a = I.choices), "disabled" in I && t(3, f = I.disabled), "show_label" in I && t(4, u = I.show_label), "container" in I && t(5, _ = I.container), "allow_custom_value" in I && t(6, d = I.allow_custom_value), "filterable" in I && t(7, h = I.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && k !== z && k !== null && S && (t(9, [p, l] = a[k], p, (t(22, l), t(11, k), t(29, z), t(28, S), t(2, a), t(26, y))), t(29, z = k), v("select", {
      index: k,
      value: y[k],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (X(), pg(v, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && W(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (d || X(), t(25, c = a), t(10, x = qa(a, p)), !d && x.length > 0 && t(14, B = x[0]), g == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && p !== C && (t(10, x = qa(a, p)), t(27, C = p), !d && x.length > 0 && t(14, B = x[0]));
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
    x,
    k,
    m,
    w,
    B,
    v,
    q,
    Z,
    Q,
    K,
    le,
    Y,
    l,
    r,
    o,
    c,
    y,
    C,
    S,
    z,
    V,
    U,
    ee
  ];
}
class Rg extends vg {
  constructor(e) {
    super(), Sg(
      this,
      e,
      Xg,
      Yg,
      Bg,
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
  SvelteComponent: Hg,
  append: Qe,
  attr: Gn,
  check_outros: jl,
  create_component: vn,
  destroy_component: kn,
  detach: ai,
  element: Bt,
  group_outros: Ol,
  init: Ig,
  insert: ri,
  listen: Ag,
  mount_component: yn,
  safe_not_equal: Tg,
  set_style: Jn,
  space: di,
  text: no,
  toggle_class: Ra,
  transition_in: ze,
  transition_out: Ne
} = window.__gradio__svelte__internal, { createEventDispatcher: Pg } = window.__gradio__svelte__internal, { onMount: Fg, onDestroy: Ug } = window.__gradio__svelte__internal;
function Ha(i) {
  let e, t, n, s, l, o, r;
  const a = [Og, jg], c = [];
  function f(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = Bt("div"), t = Bt("button"), s.c(), Gn(t, "class", "icon svelte-d9x7u0"), Gn(t, "aria-label", "Lock label detail"), Ra(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Jn(e, "margin-right", "8px");
    },
    m(u, _) {
      ri(u, e, _), Qe(e, t), c[n].m(t, null), l = !0, o || (r = Ag(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = f(u), n !== d && (Ol(), Ne(c[d], 1, 1, () => {
        c[d] = null;
      }), jl(), s = c[n], s || (s = c[n] = a[n](u), s.c()), ze(s, 1), s.m(t, null)), (!l || _ & /*labelDetailLock*/
      4) && Ra(
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
      Ne(s), l = !1;
    },
    d(u) {
      u && ai(e), c[n].d(), o = !1, r();
    }
  };
}
function jg(i) {
  let e, t;
  return e = new u0({}), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, s) {
      yn(e, n, s), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ne(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function Og(i) {
  let e, t;
  return e = new i0({}), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, s) {
      yn(e, n, s), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ne(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function Vg(i) {
  let e;
  return {
    c() {
      e = no("Cancel");
    },
    m(t, n) {
      ri(t, e, n);
    },
    d(t) {
      t && ai(e);
    }
  };
}
function Ia(i) {
  let e, t, n;
  return t = new Il({
    props: {
      variant: "stop",
      $$slots: { default: [Ng] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Bt("div"), vn(t.$$.fragment), Jn(e, "margin-right", "8px");
    },
    m(s, l) {
      ri(s, e, l), yn(t, e, null), n = !0;
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
      Ne(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ai(e), kn(t);
    }
  };
}
function Ng(i) {
  let e;
  return {
    c() {
      e = no("Remove");
    },
    m(t, n) {
      ri(t, e, n);
    },
    d(t) {
      t && ai(e);
    }
  };
}
function Kg(i) {
  let e;
  return {
    c() {
      e = no("OK");
    },
    m(t, n) {
      ri(t, e, n);
    },
    d(t) {
      t && ai(e);
    }
  };
}
function Zg(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h, g, m, w, y = !/*showRemove*/
  i[4] && Ha(i);
  o = new Rg({
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
  ), c = new U0({
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
  ), _ = new Il({
    props: {
      $$slots: { default: [Vg] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && Ia(i)
  );
  return m = new Il({
    props: {
      variant: "primary",
      $$slots: { default: [Kg] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Bt("div"), t = Bt("div"), n = Bt("span"), y && y.c(), s = di(), l = Bt("div"), vn(o.$$.fragment), r = di(), a = Bt("div"), vn(c.$$.fragment), f = di(), u = Bt("div"), vn(_.$$.fragment), d = di(), p && p.c(), h = di(), g = Bt("div"), vn(m.$$.fragment), Jn(l, "margin-right", "10px"), Jn(a, "margin-right", "40px"), Jn(a, "margin-bottom", "8px"), Jn(u, "margin-right", "8px"), Gn(n, "class", "model-content svelte-d9x7u0"), Gn(t, "class", "modal-container svelte-d9x7u0"), Gn(e, "class", "modal svelte-d9x7u0"), Gn(e, "id", "model-box-edit");
    },
    m(C, S) {
      ri(C, e, S), Qe(e, t), Qe(t, n), y && y.m(n, null), Qe(n, s), Qe(n, l), yn(o, l, null), Qe(n, r), Qe(n, a), yn(c, a, null), Qe(n, f), Qe(n, u), yn(_, u, null), Qe(n, d), p && p.m(n, null), Qe(n, h), Qe(n, g), yn(m, g, null), w = !0;
    },
    p(C, [S]) {
      /*showRemove*/
      C[4] ? y && (Ol(), Ne(y, 1, 1, () => {
        y = null;
      }), jl()) : y ? (y.p(C, S), S & /*showRemove*/
      16 && ze(y, 1)) : (y = Ha(C), y.c(), ze(y, 1), y.m(n, s));
      const x = {};
      S & /*currentLabel*/
      1 && (x.value = /*currentLabel*/
      C[0]), S & /*choices*/
      8 && (x.choices = /*choices*/
      C[3]), o.$set(x);
      const B = {};
      S & /*currentColor*/
      2 && (B.value = /*currentColor*/
      C[1]), c.$set(B);
      const k = {};
      S & /*$$scope*/
      262144 && (k.$$scope = { dirty: S, ctx: C }), _.$set(k), /*showRemove*/
      C[4] ? p ? (p.p(C, S), S & /*showRemove*/
      16 && ze(p, 1)) : (p = Ia(C), p.c(), ze(p, 1), p.m(n, h)) : p && (Ol(), Ne(p, 1, 1, () => {
        p = null;
      }), jl());
      const z = {};
      S & /*$$scope*/
      262144 && (z.$$scope = { dirty: S, ctx: C }), m.$set(z);
    },
    i(C) {
      w || (ze(y), ze(o.$$.fragment, C), ze(c.$$.fragment, C), ze(_.$$.fragment, C), ze(p), ze(m.$$.fragment, C), w = !0);
    },
    o(C) {
      Ne(y), Ne(o.$$.fragment, C), Ne(c.$$.fragment, C), Ne(_.$$.fragment, C), Ne(p), Ne(m.$$.fragment, C), w = !1;
    },
    d(C) {
      C && ai(e), y && y.d(), kn(o), kn(c), kn(_), p && p.d(), kn(m);
    }
  };
}
function Gg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = Pg();
  function _(S) {
    u("change", {
      label: s,
      color: a,
      lock: f,
      ret: S
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(S) {
    const { detail: x } = S;
    let B = x;
    Number.isInteger(B) ? (Array.isArray(o) && B < o.length && t(1, a = o[B]), Array.isArray(l) && B < l.length && t(0, s = l[B][0])) : t(0, s = B);
  }
  function h(S) {
    const { detail: x } = S;
    t(1, a = x);
  }
  function g(S) {
    d(S), _(1);
  }
  function m(S) {
    t(2, f = !f);
  }
  function w(S) {
    switch (S.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  Fg(() => {
    document.addEventListener("keydown", w), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : ""));
  }), Ug(() => {
    document.removeEventListener("keydown", w);
  });
  const y = () => _(0), p = () => _(-1), C = () => _(1);
  return i.$$set = (S) => {
    "label" in S && t(10, n = S.label), "currentLabel" in S && t(0, s = S.currentLabel), "choices" in S && t(3, l = S.choices), "choicesColors" in S && t(11, o = S.choicesColors), "color" in S && t(12, r = S.color), "currentColor" in S && t(1, a = S.currentColor), "showRemove" in S && t(4, c = S.showRemove), "labelDetailLock" in S && t(2, f = S.labelDetailLock);
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
    m,
    n,
    o,
    r,
    y,
    p,
    C
  ];
}
class io extends Hg {
  constructor(e) {
    super(), Ig(this, e, Gg, Zg, Tg, {
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
function Wt(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const ve = (i, e, t) => Math.min(Math.max(i, e), t);
class Tn {
  constructor(e, t, n, s, l, o, r, a, c, f, u, _, d = "rgb(255, 255, 255)", h = 0.5, g = 25, m = 8, w = 2, y = 4, p = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let S = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, x = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        S = ve(S, -this._xmin, B - this._xmax), x = ve(x, -this._ymin, k - this._ymax), this._xmin += S, this._ymin += x, this._xmax += S, this._ymax += x, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [S, x] = this.toBoxCoordinates(C.clientX, C.clientY);
        S = (S - this.offsetMouseX) / this.canvasWindow.scale, x = (x - this.offsetMouseY) / this.canvasWindow.scale, S > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = S, this.creatingAnchorX = "xmin") : S > this._xmin && S < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = S : S > this._xmin && S < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = S : S < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = S, this.creatingAnchorX = "xmax"), x > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = x, this.creatingAnchorY = "ymin") : x > this._ymin && x < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = x : x > this._ymin && x < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = x : x < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = x, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ve(this._xmin, 0, S - this.minSize), this._ymin = ve(this._ymin, 0, x - this.minSize), this._xmax = ve(this._xmax, this.minSize, S), this._ymax = ve(this._ymax, this.minSize, x), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > S ? (this._xmin -= this._xmax - S, this._xmax = S) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > x ? (this._ymin -= this._ymax - x, this._ymax = x) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const S = C.clientX, x = C.clientY, B = (S - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, k = (x - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += B, this._ymin += k, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize), this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += B, this._ymin += k, this._xmax = ve(this._xmax, this._xmin + this.minSize, z), this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += B, this._ymax += k, this._xmax = ve(this._xmax, this._xmin + this.minSize, z), this._ymax = ve(this._ymax, this._ymin + this.minSize, v);
            break;
          case 3:
            this._xmin += B, this._ymax += k, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize), this._ymax = ve(this._ymax, this._ymin + this.minSize, v);
            break;
          case 4:
            this._ymin += k, this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += B, this._xmax = ve(this._xmax, this._xmin + this.minSize, z);
            break;
          case 6:
            this._ymax += k, this._ymax = ve(this._ymax, this._ymin + this.minSize, v);
            break;
          case 7:
            this._xmin += B, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = p, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = m, this.thickness = w, this.selectedThickness = y, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = h, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Wt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Wt(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const s = e.measureText(this.label).width + 10, l = 20;
      let o = this.xmin, r = this.ymin - l;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, s, l), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, s, l), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = Wt(this.color, 1);
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
class Pn {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, _ = 8, d = 2, h = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (m) => {
      if (this.isDragging && this._points.length > 0) {
        let w = (m.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (m.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = Math.max(-this._xmin, Math.min(w, p - this._xmax)), y = Math.max(-this._ymin, Math.min(y, C - this._ymax)), this._points = this._points.map((S) => ({
          x: S.x + w,
          y: S.y + y
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (m) => {
      if (this.isCreating) {
        const w = document.querySelector("canvas");
        if (w) {
          const y = w.getBoundingClientRect(), p = (m.clientX - y.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, C = (m.clientY - y.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, S = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(p - S.x, 2) + Math.pow(C - S.y, 2)) > 2 && (this._points.push({ x: p, y: C }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (m) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((p) => ({
          x: Math.max(0, Math.min(p.x, w)),
          y: Math.max(0, Math.min(p.y, y))
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
        const w = m.clientX, y = m.clientY, p = (w - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (y - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = this._xmax - this._xmin, x = this._ymax - this._ymin;
        let B = this._xmin, k = this._ymin, z = this._xmax, v = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            B = this._xmin + p, k = this._ymin + C;
            break;
          case 1:
            z = this._xmax + p, k = this._ymin + C;
            break;
          case 2:
            z = this._xmax + p, v = this._ymax + C;
            break;
          case 3:
            B = this._xmin + p, v = this._ymax + C;
            break;
          case 4:
            k = this._ymin + C;
            break;
          case 5:
            z = this._xmax + p;
            break;
          case 6:
            v = this._ymax + C;
            break;
          case 7:
            B = this._xmin + p;
            break;
        }
        const W = (z - B) / S, X = (v - k) / x;
        this._points = this._points.map((q) => ({
          x: B + (q.x - this._xmin) * W,
          y: k + (q.y - this._ymin) * X
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
      this.updateOffset(), e.beginPath();
      for (let t = 0; t < this.points.length; t++) {
        const [n, s] = this.toCanvasCoordinates(this.points[t].x, this.points[t].y);
        t === 0 ? e.moveTo(n, s) : e.lineTo(n, s);
      }
      if (e.closePath(), e.fillStyle = Wt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Wt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.label !== null && this.label.trim() !== "") {
        this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
        const t = e.measureText(this.label).width + 10, n = 20;
        let s = this.xmin, l = this.ymin - n;
        e.fillStyle = "white", [s, l] = this.toCanvasCoordinates(s, l), e.fillRect(s, l, t, n), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, l, t, n), e.fillStyle = "black", e.fillText(this.label, s + 5, l + 15);
      }
      if (this.isSelected) {
        e.fillStyle = Wt(this.color, 1);
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
}
class Fn {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, _ = 8, d = 2, h = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (m) => {
      if (this.isDragging && this._points.length > 0) {
        let w = (m.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (m.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = Math.max(-this._xmin, Math.min(w, p - this._xmax)), y = Math.max(-this._ymin, Math.min(y, C - this._ymax)), this._points = this._points.map((S) => ({
          x: S.x + w,
          y: S.y + y
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (m) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (m) => {
      this.isCreating && m.code === "Space" && this._points.length >= this.minPoints && (m.preventDefault(), this.finishCreating());
    }, this.handleResize = (m) => {
      if (this.isResizing && this._points.length > 0) {
        const w = m.clientX, y = m.clientY, p = (w - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (y - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = this._xmax - this._xmin, x = this._ymax - this._ymin;
        let B = this._xmin, k = this._ymin, z = this._xmax, v = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            B = this._xmin + p, k = this._ymin + C;
            break;
          case 1:
            z = this._xmax + p, k = this._ymin + C;
            break;
          case 2:
            z = this._xmax + p, v = this._ymax + C;
            break;
          case 3:
            B = this._xmin + p, v = this._ymax + C;
            break;
          case 4:
            k = this._ymin + C;
            break;
          case 5:
            z = this._xmax + p;
            break;
          case 6:
            v = this._ymax + C;
            break;
          case 7:
            B = this._xmin + p;
            break;
        }
        const W = (z - B) / S, X = (v - k) / x;
        this._points = this._points.map((q) => ({
          x: B + (q.x - this._xmin) * W,
          y: k + (q.y - this._ymin) * X
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
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = Wt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Wt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = Wt(this.color, 1);
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
        e.fillStyle = Wt(this.color, 1);
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
], Qi = (i, e, t) => Math.min(Math.max(i, e), t);
class Jg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Qi(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Qi(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Qi(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Qi(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: Qg,
  append: Le,
  attr: _e,
  binding_callbacks: $g,
  bubble: Sl,
  check_outros: Qn,
  create_component: mt,
  destroy_component: gt,
  detach: Ht,
  element: _t,
  empty: e2,
  group_outros: $n,
  init: t2,
  insert: It,
  is_function: n2,
  listen: Be,
  mount_component: bt,
  noop: cc,
  run_all: fc,
  safe_not_equal: i2,
  set_style: $i,
  space: dt,
  toggle_class: ht,
  transition_in: oe,
  transition_out: fe
} = window.__gradio__svelte__internal, { onMount: s2, onDestroy: l2, createEventDispatcher: o2 } = window.__gradio__svelte__internal;
function Aa(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h, g, m, w, y, p, C, S, x, B;
  n = new z1({}), o = new p0({}), c = new x0({}), _ = new Y1({});
  let k = (
    /*showRemoveButton*/
    i[3] && Ta(i)
  ), z = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[17] && Pa(i);
  return w = new s_({}), C = new Uh({}), {
    c() {
      e = _t("span"), t = _t("button"), mt(n.$$.fragment), s = dt(), l = _t("button"), mt(o.$$.fragment), r = dt(), a = _t("button"), mt(c.$$.fragment), f = dt(), u = _t("button"), mt(_.$$.fragment), d = dt(), k && k.c(), h = dt(), z && z.c(), g = dt(), m = _t("button"), mt(w.$$.fragment), y = dt(), p = _t("button"), mt(C.$$.fragment), _e(t, "class", "icon svelte-1bt1mh4"), _e(t, "aria-label", "Create box"), ht(
        t,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].creation
      ), _e(l, "class", "icon svelte-1bt1mh4"), _e(l, "aria-label", "Freehand drawing"), ht(
        l,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].freehand
      ), _e(a, "class", "icon svelte-1bt1mh4"), _e(a, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), ht(
        a,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].polygon
      ), _e(u, "class", "icon svelte-1bt1mh4"), _e(u, "aria-label", "Edit boxes"), ht(
        u,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].drag
      ), _e(m, "class", "icon svelte-1bt1mh4"), _e(m, "aria-label", "Undo (Ctrl+Z)"), ht(
        m,
        "disabled",
        /*undoStack*/
        i[18].length === 0
      ), _e(p, "class", "icon svelte-1bt1mh4"), _e(p, "aria-label", "Redo (Ctrl+Y)"), ht(
        p,
        "disabled",
        /*redoStack*/
        i[10].length === 0
      ), _e(e, "class", "canvas-control svelte-1bt1mh4");
    },
    m(v, W) {
      It(v, e, W), Le(e, t), bt(n, t, null), Le(e, s), Le(e, l), bt(o, l, null), Le(e, r), Le(e, a), bt(c, a, null), Le(e, f), Le(e, u), bt(_, u, null), Le(e, d), k && k.m(e, null), Le(e, h), z && z.m(e, null), Le(e, g), Le(e, m), bt(w, m, null), Le(e, y), Le(e, p), bt(C, p, null), S = !0, x || (B = [
        Be(
          t,
          "click",
          /*click_handler*/
          i[45]
        ),
        Be(
          l,
          "click",
          /*click_handler_1*/
          i[46]
        ),
        Be(
          a,
          "click",
          /*click_handler_2*/
          i[47]
        ),
        Be(
          u,
          "click",
          /*click_handler_3*/
          i[48]
        ),
        Be(
          m,
          "click",
          /*click_handler_6*/
          i[51]
        ),
        Be(
          p,
          "click",
          /*click_handler_7*/
          i[52]
        )
      ], x = !0);
    },
    p(v, W) {
      (!S || W[0] & /*mode, Mode*/
      8704) && ht(
        t,
        "selected",
        /*mode*/
        v[13] === /*Mode*/
        v[9].creation
      ), (!S || W[0] & /*mode, Mode*/
      8704) && ht(
        l,
        "selected",
        /*mode*/
        v[13] === /*Mode*/
        v[9].freehand
      ), (!S || W[0] & /*mode, Mode*/
      8704) && ht(
        a,
        "selected",
        /*mode*/
        v[13] === /*Mode*/
        v[9].polygon
      ), (!S || W[0] & /*mode, Mode*/
      8704) && ht(
        u,
        "selected",
        /*mode*/
        v[13] === /*Mode*/
        v[9].drag
      ), /*showRemoveButton*/
      v[3] ? k ? (k.p(v, W), W[0] & /*showRemoveButton*/
      8 && oe(k, 1)) : (k = Ta(v), k.c(), oe(k, 1), k.m(e, h)) : k && ($n(), fe(k, 1, 1, () => {
        k = null;
      }), Qn()), !/*disableEditBoxes*/
      v[5] && /*labelDetailLock*/
      v[17] ? z ? (z.p(v, W), W[0] & /*disableEditBoxes, labelDetailLock*/
      131104 && oe(z, 1)) : (z = Pa(v), z.c(), oe(z, 1), z.m(e, g)) : z && ($n(), fe(z, 1, 1, () => {
        z = null;
      }), Qn()), (!S || W[0] & /*redoStack*/
      1024) && ht(
        p,
        "disabled",
        /*redoStack*/
        v[10].length === 0
      );
    },
    i(v) {
      S || (oe(n.$$.fragment, v), oe(o.$$.fragment, v), oe(c.$$.fragment, v), oe(_.$$.fragment, v), oe(k), oe(z), oe(w.$$.fragment, v), oe(C.$$.fragment, v), S = !0);
    },
    o(v) {
      fe(n.$$.fragment, v), fe(o.$$.fragment, v), fe(c.$$.fragment, v), fe(_.$$.fragment, v), fe(k), fe(z), fe(w.$$.fragment, v), fe(C.$$.fragment, v), S = !1;
    },
    d(v) {
      v && Ht(e), gt(n), gt(o), gt(c), gt(_), k && k.d(), z && z.d(), gt(w), gt(C), x = !1, fc(B);
    }
  };
}
function Ta(i) {
  let e, t, n, s, l;
  return t = new F1({}), {
    c() {
      e = _t("button"), mt(t.$$.fragment), _e(e, "class", "icon svelte-1bt1mh4"), _e(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      It(o, e, r), bt(t, e, null), n = !0, s || (l = Be(
        e,
        "click",
        /*click_handler_4*/
        i[49]
      ), s = !0);
    },
    p: cc,
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      fe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ht(e), gt(t), s = !1, l();
    }
  };
}
function Pa(i) {
  let e, t, n, s, l;
  return t = new Z1({}), {
    c() {
      e = _t("button"), mt(t.$$.fragment), _e(e, "class", "icon svelte-1bt1mh4"), _e(e, "aria-label", "Edit label");
    },
    m(o, r) {
      It(o, e, r), bt(t, e, null), n = !0, s || (l = Be(
        e,
        "click",
        /*click_handler_5*/
        i[50]
      ), s = !0);
    },
    p: cc,
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      fe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ht(e), gt(t), s = !1, l();
    }
  };
}
function Fa(i) {
  let e, t;
  return e = new io({
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
        i[0].boxes.length ? Mn(
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
    i[30]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[53]
  ), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, s) {
      bt(e, n, s), t = !0;
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
      n[0].boxes.length ? Mn(
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
      gt(e, n);
    }
  };
}
function Ua(i) {
  let e, t;
  return e = new io({
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
        i[0].boxes.length ? Mn(
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
    i[31]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[54]
  ), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, s) {
      bt(e, n, s), t = !0;
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
      n[0].boxes.length ? Mn(
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
      gt(e, n);
    }
  };
}
function ja(i) {
  let e, t;
  return e = new io({
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
        i[0].boxes.length ? Mn(
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
    i[32]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[55]
  ), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, s) {
      bt(e, n, s), t = !0;
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
      n[0].boxes.length ? Mn(
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
      gt(e, n);
    }
  };
}
function a2(i) {
  let e, t, n, s, l, o, r, a, c, f, u = (
    /*interactive*/
    i[4] && Aa(i)
  ), _ = (
    /*editModalVisible*/
    i[14] && Fa(i)
  ), d = (
    /*newModalVisible*/
    i[15] && Ua(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[16] && ja(i)
  );
  return {
    c() {
      e = _t("div"), t = _t("canvas"), n = dt(), u && u.c(), s = dt(), _ && _.c(), l = dt(), d && d.c(), o = dt(), h && h.c(), r = e2(), _e(t, "tabindex", "0"), $i(
        t,
        "height",
        /*height*/
        i[6]
      ), $i(
        t,
        "width",
        /*width*/
        i[7]
      ), _e(t, "class", "canvas-annotator svelte-1bt1mh4"), _e(e, "class", "canvas-container svelte-1bt1mh4"), _e(e, "tabindex", "-1");
    },
    m(g, m) {
      It(g, e, m), Le(e, t), i[44](t), It(g, n, m), u && u.m(g, m), It(g, s, m), _ && _.m(g, m), It(g, l, m), d && d.m(g, m), It(g, o, m), h && h.m(g, m), It(g, r, m), a = !0, c || (f = [
        Be(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[19]
        ),
        Be(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[20]
        ),
        Be(t, "pointermove", function() {
          n2(
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
        Be(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[29]
        ),
        Be(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[22]
        ),
        Be(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[34]
        ),
        Be(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[35]
        )
      ], c = !0);
    },
    p(g, m) {
      i = g, (!a || m[0] & /*height*/
      64) && $i(
        t,
        "height",
        /*height*/
        i[6]
      ), (!a || m[0] & /*width*/
      128) && $i(
        t,
        "width",
        /*width*/
        i[7]
      ), /*interactive*/
      i[4] ? u ? (u.p(i, m), m[0] & /*interactive*/
      16 && oe(u, 1)) : (u = Aa(i), u.c(), oe(u, 1), u.m(s.parentNode, s)) : u && ($n(), fe(u, 1, 1, () => {
        u = null;
      }), Qn()), /*editModalVisible*/
      i[14] ? _ ? (_.p(i, m), m[0] & /*editModalVisible*/
      16384 && oe(_, 1)) : (_ = Fa(i), _.c(), oe(_, 1), _.m(l.parentNode, l)) : _ && ($n(), fe(_, 1, 1, () => {
        _ = null;
      }), Qn()), /*newModalVisible*/
      i[15] ? d ? (d.p(i, m), m[0] & /*newModalVisible*/
      32768 && oe(d, 1)) : (d = Ua(i), d.c(), oe(d, 1), d.m(o.parentNode, o)) : d && ($n(), fe(d, 1, 1, () => {
        d = null;
      }), Qn()), /*editDefaultLabelVisible*/
      i[16] ? h ? (h.p(i, m), m[0] & /*editDefaultLabelVisible*/
      65536 && oe(h, 1)) : (h = ja(i), h.c(), oe(h, 1), h.m(r.parentNode, r)) : h && ($n(), fe(h, 1, 1, () => {
        h = null;
      }), Qn());
    },
    i(g) {
      a || (oe(u), oe(_), oe(d), oe(h), a = !0);
    },
    o(g) {
      fe(u), fe(_), fe(d), fe(h), a = !1;
    },
    d(g) {
      g && (Ht(e), Ht(n), Ht(s), Ht(l), Ht(o), Ht(r)), i[44](null), u && u.d(g), _ && _.d(g), d && d.d(g), h && h.d(g), c = !1, fc(f);
    }
  };
}
const r2 = 50;
function Un(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Mn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function c2(i, e, t) {
  var n;
  (function(b) {
    b[b.creation = 0] = "creation", b[b.drag = 1] = "drag", b[b.freehand = 2] = "freehand", b[b.polygon = 3] = "polygon";
  })(n || (n = {}));
  let s = [], l = [], o = !0, { imageUrl: r = null } = e, { interactive: a } = e, { boxAlpha: c = 0.5 } = e, { boxMinSize: f = 10 } = e, { handleSize: u } = e, { boxThickness: _ } = e, { boxSelectedThickness: d } = e, { value: h } = e, { choices: g = [] } = e, { choicesColors: m = [] } = e, { disableEditBoxes: w = !1 } = e, { height: y = "100%" } = e, { width: p = "100%" } = e, { singleBox: C = !1 } = e, { showRemoveButton: S = null } = e, { handlesCursor: x = !0 } = e, { useDefaultLabel: B = !1 } = e;
  S === null && (S = w);
  let k, z, v = null, W = -1, X = n.drag, q = new Jg(R);
  h !== null && h.boxes.length == 0 && (X = n.creation);
  let Z = 0, Q = 0, K = 0, le = 0, Y = 1, V = 0, U = 0, ee = !1, I = !1, ae = !1, P = null, H = B, de = { label: "", color: "" };
  const E = o2();
  function R() {
    if (z) {
      if (z.clearRect(0, 0, k.width, k.height), z.save(), z.translate(q.offsetX, q.offsetY), z.scale(q.scale, q.scale), v !== null) {
        switch (h.orientation) {
          case 0:
            z.drawImage(v, 0, 0, V, U);
            break;
          case 1:
            z.translate(V, 0), z.rotate(Math.PI / 2), z.drawImage(v, 0, 0, U, V);
            break;
          case 2:
            z.translate(V, U), z.rotate(Math.PI), z.drawImage(v, 0, 0, V, U);
            break;
          case 3:
            z.translate(0, U), z.rotate(-Math.PI / 2), z.drawImage(v, 0, 0, U, V);
            break;
        }
        z.restore();
      }
      for (const b of h.boxes.slice().reverse())
        b.render(z);
    }
  }
  function G(b) {
    t(12, W = b), h.boxes.forEach((M) => {
      M.setSelected(!1);
    }), b >= 0 && b < h.boxes.length && h.boxes[b].setSelected(!0), R();
  }
  function ce(b) {
    a && (o = !1, b.target instanceof Element && b.target.hasPointerCapture(b.pointerId) && b.target.releasePointerCapture(b.pointerId), X === n.creation ? Ot(b) : X === n.freehand ? Es(b) : X === n.polygon ? Ls(b) : X === n.drag && L(b));
  }
  function L(b) {
    console.log("clickBox function called, mode:", X === n.drag ? "drag" : "creation");
    const M = k.getBoundingClientRect(), T = b.clientX - M.left, N = b.clientY - M.top;
    let se = !1;
    for (const [te, ne] of h.boxes.entries()) {
      const lt = ne.indexOfPointInsideHandle(T, N);
      if (lt >= 0) {
        se = !0, G(te);
        let rn = null;
        ne.onMoveStart = () => {
          rn = Te(ne), console.log("Resize started, captured state:", rn);
        }, ne.onMoveEnd = () => {
          if (rn) {
            const oo = Te(ne);
            console.log("Resize ended, final state:", oo), we({
              type: "edit_shape",
              shapeIndex: te,
              oldShapeData: rn,
              shapeData: oo
            }), rn = null;
          }
        }, ne.startResize(lt, b);
        return;
      }
    }
    for (const [te, ne] of h.boxes.entries())
      if (ne.isPointInsideBox(T, N)) {
        se = !0, G(te);
        let lt = null;
        ne.onMoveStart = () => {
          lt = Te(ne);
        }, ne.onMoveEnd = () => {
          lt && (we({
            type: "edit_shape",
            shapeIndex: te,
            oldShapeData: lt,
            shapeData: Te(ne)
          }), lt = null);
        }, ne.startDrag(b);
        return;
      }
    if (!se) {
      if (C || G(-1), console.log("No box selected, checking if we should dispatch select event"), X === n.drag) {
        console.log("Mode is drag, calculating coordinates");
        const te = (T - q.offsetX) / Y / q.scale, ne = (N - q.offsetY) / Y / q.scale;
        console.log("Click detected in drag mode:", {
          mouseX: T,
          mouseY: N,
          imageX: te,
          imageY: ne,
          scaleFactor: Y,
          "canvasWindow.scale": q.scale,
          "canvasWindow.offsetX": q.offsetX,
          "canvasWindow.offsetY": q.offsetY
        }), v && te >= 0 && te <= v.naturalWidth && ne >= 0 && ne <= v.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(te), Math.round(ne)]), E("select", {
          coordinates: [Math.round(te), Math.round(ne)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!v,
          imageX: te,
          imageY: ne,
          naturalWidth: v == null ? void 0 : v.naturalWidth,
          naturalHeight: v == null ? void 0 : v.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", X);
      q.startDrag(b);
    }
  }
  function nt(b) {
    E("change");
  }
  function vt(b) {
    if (h === null || X !== n.drag)
      return;
    const M = k.getBoundingClientRect(), T = b.clientX - M.left, N = b.clientY - M.top;
    for (const [se, te] of h.boxes.entries()) {
      const ne = te.indexOfPointInsideHandle(T, N);
      if (ne >= 0) {
        t(11, k.style.cursor = te.resizeHandles[ne].cursor, k);
        return;
      }
    }
    t(11, k.style.cursor = "default", k);
  }
  function it(b) {
    if (a) {
      if (b.ctrlKey) {
        switch (b.key.toLowerCase()) {
          case "z":
            b.shiftKey ? kt() : Ae(), b.preventDefault();
            break;
          case "y":
            kt(), b.preventDefault();
            break;
        }
        return;
      }
      switch (b.key) {
        case "Delete":
          an();
          break;
        case " ":
          X === n.polygon && P && P.isCreating && (b.preventDefault(), P._points.length >= P.minPoints && P.finishCreating());
          break;
      }
    }
  }
  function Ie(b) {
    b.preventDefault();
    const M = 1 / (1 + b.deltaY / 1e3 * 0.5), T = parseFloat((q.scale * M).toFixed(2)), N = T < 1 ? 1 : T, se = k.getBoundingClientRect(), te = b.clientX - se.left, ne = b.clientY - se.top, lt = (te - q.offsetX) / q.scale, rn = (ne - q.offsetY) / q.scale;
    q.offsetX = te - lt * N, q.offsetY = ne - rn * N, q.scale = N, R();
  }
  function we(b) {
    if (o) {
      console.log("Skipping undo action during initial state:", b);
      return;
    }
    t(10, l = []), s.push(Object.assign(Object.assign({}, b), { timestamp: Date.now() })), s.length > r2 && s.shift(), console.log("Added undo action:", b, "Stack size:", s.length);
  }
  function Ae() {
    if (s.length === 0) {
      console.log("Cannot undo: stack is empty");
      return;
    }
    const b = s.pop();
    if (b) {
      switch (b.type) {
        case "create_shape":
          if (b.shapeIndex !== void 0 && b.shapeIndex < h.boxes.length) {
            const M = h.boxes.splice(b.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: b.shapeIndex,
              shapeData: Te(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (b.shapeData && b.shapeIndex !== void 0) {
            const M = Ln(b.shapeData);
            h.boxes.splice(b.shapeIndex, 0, M), l.push({
              type: "create_shape",
              shapeIndex: b.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (P && b.pointData) {
            if (P._points.pop(), P._points.length === 0) {
              const M = h.boxes.indexOf(P);
              M >= 0 && h.boxes.splice(M, 1), P = null;
            } else
              P.updateBoundingBox();
            l.push({
              type: "polygon_point",
              pointData: b.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (b.shapeIndex !== void 0 && b.oldShapeData && b.shapeIndex < h.boxes.length) {
            const M = Te(h.boxes[b.shapeIndex]);
            Ln(b.oldShapeData, h.boxes[b.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: b.shapeIndex,
              oldShapeData: M,
              shapeData: b.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      G(-1), R(), E("change");
    }
  }
  function kt() {
    if (l.length === 0) return;
    const b = l.pop();
    if (b) {
      switch (b.type) {
        case "create_shape":
          if (b.shapeIndex !== void 0 && b.shapeIndex < h.boxes.length) {
            const M = h.boxes.splice(b.shapeIndex, 1)[0];
            s.push({
              type: "delete_shape",
              shapeIndex: b.shapeIndex,
              shapeData: Te(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (b.shapeData && b.shapeIndex !== void 0) {
            const M = Ln(b.shapeData);
            h.boxes.splice(b.shapeIndex, 0, M), s.push({
              type: "create_shape",
              shapeIndex: b.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          b.pointData && (P ? (P._points.push(b.pointData), P._points.length === 1 && !h.boxes.includes(P) && (C ? t(0, h.boxes = [P], h) : t(0, h.boxes = [P, ...h.boxes], h)), P.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), s.push({
            type: "polygon_point",
            pointData: b.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (b.shapeIndex !== void 0 && b.shapeData && b.shapeIndex < h.boxes.length) {
            const M = Te(h.boxes[b.shapeIndex]);
            Ln(b.shapeData, h.boxes[b.shapeIndex]), s.push({
              type: "edit_shape",
              shapeIndex: b.shapeIndex,
              oldShapeData: M,
              shapeData: b.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      G(-1), R(), E("change");
    }
  }
  function Te(b) {
    return b ? b instanceof Pn ? {
      type: "freehand",
      points: [...b._points],
      label: b.label,
      color: b.color,
      xmin: b.xmin,
      ymin: b.ymin,
      xmax: b.xmax,
      ymax: b.ymax
    } : b instanceof Fn ? {
      type: "polygon",
      points: [...b._points],
      label: b.label,
      color: b.color,
      xmin: b.xmin,
      ymin: b.ymin,
      xmax: b.xmax,
      ymax: b.ymax
    } : b instanceof Tn ? {
      type: "box",
      label: b.label,
      color: b.color,
      xmin: b._xmin,
      ymin: b._ymin,
      xmax: b._xmax,
      ymax: b._ymax
    } : null : null;
  }
  function Ln(b, M) {
    if (!b) return null;
    if (M)
      return M.label = b.label, M.color = b.color, M instanceof Tn ? (M._xmin = b.xmin, M._ymin = b.ymin, M._xmax = b.xmax, M._ymax = b.ymax, M.applyUserScale()) : (M.xmin = b.xmin, M.ymin = b.ymin, M.xmax = b.xmax, M.ymax = b.ymax), (M instanceof Pn || M instanceof Fn) && b.points && (M._points = [...b.points], M.updateBoundingBox()), M;
    switch (b.type) {
      case "freehand":
        const T = new Pn(R, Pe, q, Z, Q, K, le, b.label, b.color, c, f, u, _, d);
        return T._points = [...b.points], T.updateBoundingBox(), T;
      case "polygon":
        const N = new Fn(R, Pe, q, Z, Q, K, le, b.label, b.color, c, f, u, _, d);
        return N._points = [...b.points], N.updateBoundingBox(), N;
      case "box":
        return new Tn(R, Pe, q, Z, Q, K, le, b.label, b.xmin, b.ymin, b.xmax, b.ymax, b.color, c, f, u, _, d);
    }
    return null;
  }
  function Es(b) {
    const M = k.getBoundingClientRect();
    let T;
    m.length > 0 ? T = Un(m[0]) : C ? h.boxes.length > 0 ? T = h.boxes[0].color : T = Ue[0] : T = Ue[h.boxes.length % Ue.length];
    let N = new Pn(R, Pe, q, Z, Q, K, le, "", T, c, f, u, _, d);
    N.startCreating(b, M.left, M.top), C ? t(0, h.boxes = [N], h) : t(0, h.boxes = [N, ...h.boxes], h), we({ type: "create_shape", shapeIndex: 0 }), G(0), R(), E("change");
  }
  function Ls(b) {
    P && (!P._points || P._points.length === 0 || !h.boxes.includes(P)) && (console.log("Resetting invalid currentPolygon state"), P = null), P === null ? D(b) : P.isCreating && (P.addPoint(b) || (R(), E("change")));
  }
  function D(b) {
    const M = k.getBoundingClientRect();
    let T;
    m.length > 0 ? T = Un(m[0]) : C ? h.boxes.length > 0 ? T = h.boxes[0].color : T = Ue[0] : T = Ue[h.boxes.length % Ue.length];
    let N = new Fn(R, qs, q, Z, Q, K, le, "", T, c, f, u, _, d);
    N.onPointAdded = (se) => {
      we({ type: "polygon_point", pointData: se });
    }, P = N, N.startCreating(b, M.left, M.top), C ? t(0, h.boxes = [N], h) : t(0, h.boxes = [N, ...h.boxes], h), we({ type: "create_shape", shapeIndex: 0 }), G(0), R(), E("change");
  }
  function Ot(b) {
    const M = k.getBoundingClientRect(), T = (b.clientX - M.left - q.offsetX) / Y / q.scale, N = (b.clientY - M.top - q.offsetY) / Y / q.scale;
    let se;
    m.length > 0 ? se = Un(m[0]) : C ? h.boxes.length > 0 ? se = h.boxes[0].color : se = Ue[0] : se = Ue[h.boxes.length % Ue.length];
    let te = new Tn(R, Pe, q, Z, Q, K, le, "", T, N, T, N, se, c, f, u, _, d);
    te.startCreating(b, M.left, M.top), C ? t(0, h.boxes = [te], h) : t(0, h.boxes = [te, ...h.boxes], h), we({ type: "create_shape", shapeIndex: 0 }), G(0), R(), E("change");
  }
  function st() {
    t(13, X = n.creation), t(11, k.style.cursor = "crosshair", k), P = null;
  }
  function on() {
    t(13, X = n.freehand), t(11, k.style.cursor = "crosshair", k), P = null;
  }
  function qi() {
    t(13, X = n.polygon), t(11, k.style.cursor = "crosshair", k);
  }
  function Ze() {
    t(13, X = n.drag), t(11, k.style.cursor = "default", k), P = null;
  }
  function Pe() {
    W >= 0 && W < h.boxes.length && (h.boxes[W].getArea() < 1 ? an() : (w || (H ? so() : t(15, I = !0)), C && Ze()));
  }
  function qs() {
    P = null, W >= 0 && W < h.boxes.length && (h.boxes[W].getArea() < 1 ? an() : (w || (H ? so() : t(15, I = !0)), Ze()));
  }
  function Ys() {
    W >= 0 && W < h.boxes.length && !w && t(14, ee = !0);
  }
  function ci(b) {
    a && Ys();
  }
  function yt(b, M) {
    const T = g.findIndex((N) => N[0] === b);
    T === -1 ? (g.push([b, g.length]), m.push(M), t(1, g), t(2, m), console.log(`Added custom label "${b}" with color ${M} to choices`)) : m[T] !== M && (t(2, m[T] = M, m), t(2, m), console.log(`Updated color for existing label "${b}" to ${M}`));
  }
  function fi(b) {
    t(14, ee = !1);
    const { detail: M } = b;
    let T = M.label, N = M.color, se = M.ret;
    if (W >= 0 && W < h.boxes.length) {
      let te = h.boxes[W];
      if (se == 1) {
        const ne = Te(te);
        yt(T, N), te.label = T, te.color = Un(N);
        const lt = Te(te);
        we({
          type: "edit_shape",
          shapeIndex: W,
          oldShapeData: ne,
          shapeData: lt
        }), R(), E("change");
      } else se == -1 && an();
    }
    setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function gc(b) {
    t(15, I = !1);
    const { detail: M } = b;
    let T = M.label, N = M.color, se = M.ret, te = M.lock;
    if (W >= 0 && W < h.boxes.length) {
      let ne = h.boxes[W];
      se == 1 ? (yt(T, N), t(17, H = te), de.label = T, de.color = N, ne.label = T, ne.color = Un(N), R(), E("change"), Ze()) : an();
    }
    setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function bc(b) {
    t(16, ae = !1);
    const { detail: M } = b;
    let T = M.label, N = M.color, se = M.ret, te = M.lock;
    se == 1 && (t(17, H = te), de.label = T, de.color = N), setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function so() {
    if (W >= 0 && W < h.boxes.length) {
      let b = h.boxes[W];
      b.label = de.label, de.color !== "" && (b.color = Un(de.color)), R(), E("change"), Ze();
    }
    setTimeout(
      () => {
        k && (k.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function an() {
    if (W >= 0 && W < h.boxes.length) {
      const b = h.boxes[W], M = Te(b);
      we({
        type: "delete_shape",
        shapeIndex: W,
        shapeData: M
      }), h.boxes.splice(W, 1), G(-1), C && st(), E("change");
    }
  }
  function Yi() {
    if (k) {
      if (Y = 1, t(11, k.width = k.clientWidth, k), q.setRotatedImage(v), v !== null) {
        if (q.imageRotatedWidth > k.width)
          Y = k.width / q.imageRotatedWidth, V = Math.round(q.imageRotatedWidth * Y), U = Math.round(q.imageRotatedHeight * Y), Z = 0, Q = 0, K = V, le = U, t(11, k.height = U, k);
        else {
          V = q.imageRotatedWidth, U = q.imageRotatedHeight;
          var b = (k.width - V) / 2;
          Z = b, Q = 0, K = b + V, le = U, t(11, k.height = U, k);
        }
        q.imageWidth = V, q.imageHeight = U;
      } else
        Z = 0, Q = 0, K = k.width, le = k.height, t(11, k.height = k.clientHeight, k);
      if (q.resize(k.width, k.height, Z, Q), K > 0 && le > 0)
        for (const M of h.boxes)
          M.canvasXmin = Z, M.canvasYmin = Q, M.canvasXmax = K, M.canvasYmax = le, M.setScaleFactor(Y);
      R(), E("change");
    }
  }
  const pc = new ResizeObserver(Yi);
  function wc() {
    for (let b = 0; b < h.boxes.length; b++) {
      let M = h.boxes[b];
      if (!(M instanceof Tn) && !(M instanceof Pn) && !(M instanceof Fn)) {
        let T = "", N = "";
        if (M.hasOwnProperty("color") ? (T = M.color, Array.isArray(T) && T.length === 3 && (T = `rgb(${T[0]}, ${T[1]}, ${T[2]})`)) : T = Ue[b % Ue.length], M.hasOwnProperty("label") && (N = M.label), M.hasOwnProperty("type") && M.type === "freehand" && M.hasOwnProperty("points")) {
          let se = new Pn(R, Pe, q, Z, Q, K, le, N, T, c, f, u, _, d);
          se._points = M.points, se.updateBoundingBox(), M = se;
        } else if (M.hasOwnProperty("type") && M.type === "polygon" && M.hasOwnProperty("points")) {
          let se = new Fn(R, Pe, q, Z, Q, K, le, N, T, c, f, u, _, d);
          se._points = M.points, se.updateBoundingBox(), M = se;
        } else
          M = new Tn(R, Pe, q, Z, Q, K, le, N, M.xmin, M.ymin, M.xmax, M.ymax, T, c, f, u, _, d);
        t(0, h.boxes[b] = M, h);
      }
    }
  }
  function lo() {
    r !== null && (v === null || v.src != r) && (v = new Image(), v.src = r, v.onload = function() {
      Yi(), R();
    });
  }
  s2(() => {
    if (o = !0, Array.isArray(g) && g.length > 0) {
      if (!Array.isArray(m) || m.length == 0)
        for (let b = 0; b < g.length; b++) {
          let M = Ue[b % Ue.length];
          m.push(Mn(M));
        }
      de.label = g[0][0], de.color = m[0];
    }
    z = k.getContext("2d"), pc.observe(k), W < 0 && h !== null && h.boxes.length > 0 && G(0), lo(), Yi(), R(), setTimeout(
      () => {
        o = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function vc() {
    document.addEventListener("keydown", it);
  }
  function kc() {
    document.removeEventListener("keydown", it);
  }
  l2(() => {
    document.removeEventListener("keydown", it);
  });
  function yc(b) {
    $g[b ? "unshift" : "push"](() => {
      k = b, t(11, k);
    });
  }
  const Cc = () => st(), Sc = () => on(), xc = () => qi(), zc = () => Ze(), Bc = () => an(), Mc = () => t(16, ae = !0), Dc = () => Ae(), Wc = () => kt();
  function Ec(b) {
    Sl.call(this, i, b);
  }
  function Lc(b) {
    Sl.call(this, i, b);
  }
  function qc(b) {
    Sl.call(this, i, b);
  }
  return i.$$set = (b) => {
    "imageUrl" in b && t(36, r = b.imageUrl), "interactive" in b && t(4, a = b.interactive), "boxAlpha" in b && t(37, c = b.boxAlpha), "boxMinSize" in b && t(38, f = b.boxMinSize), "handleSize" in b && t(39, u = b.handleSize), "boxThickness" in b && t(40, _ = b.boxThickness), "boxSelectedThickness" in b && t(41, d = b.boxSelectedThickness), "value" in b && t(0, h = b.value), "choices" in b && t(1, g = b.choices), "choicesColors" in b && t(2, m = b.choicesColors), "disableEditBoxes" in b && t(5, w = b.disableEditBoxes), "height" in b && t(6, y = b.height), "width" in b && t(7, p = b.width), "singleBox" in b && t(42, C = b.singleBox), "showRemoveButton" in b && t(3, S = b.showRemoveButton), "handlesCursor" in b && t(8, x = b.handlesCursor), "useDefaultLabel" in b && t(43, B = b.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (q.orientation = h.orientation, lo(), wc(), Yi(), R());
  }, [
    h,
    g,
    m,
    S,
    a,
    w,
    y,
    p,
    x,
    n,
    l,
    k,
    W,
    X,
    ee,
    I,
    ae,
    H,
    s,
    ce,
    nt,
    vt,
    Ie,
    Ae,
    kt,
    st,
    on,
    qi,
    Ze,
    ci,
    fi,
    gc,
    bc,
    an,
    vc,
    kc,
    r,
    c,
    f,
    u,
    _,
    d,
    C,
    B,
    yc,
    Cc,
    Sc,
    xc,
    zc,
    Bc,
    Mc,
    Dc,
    Wc,
    Ec,
    Lc,
    qc
  ];
}
class f2 extends Qg {
  constructor(e) {
    super(), t2(
      this,
      e,
      c2,
      a2,
      i2,
      {
        imageUrl: 36,
        interactive: 4,
        boxAlpha: 37,
        boxMinSize: 38,
        handleSize: 39,
        boxThickness: 40,
        boxSelectedThickness: 41,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 42,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 43
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: u2,
  add_flush_callback: h2,
  bind: _2,
  binding_callbacks: d2,
  create_component: m2,
  destroy_component: g2,
  init: b2,
  mount_component: p2,
  safe_not_equal: w2,
  transition_in: v2,
  transition_out: k2
} = window.__gradio__svelte__internal, { createEventDispatcher: y2 } = window.__gradio__svelte__internal;
function C2(i) {
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
    i[0]), e = new f2({ props: l }), d2.push(() => _2(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), e.$on(
      "select",
      /*select_handler*/
      i[22]
    ), {
      c() {
        m2(e.$$.fragment);
      },
      m(o, r) {
        p2(e, o, r), n = !0;
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
        o[0], h2(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (v2(e.$$.fragment, o), n = !0);
      },
      o(o) {
        k2(e.$$.fragment, o), n = !1;
      },
      d(o) {
        g2(e, o);
      }
    }
  );
}
function S2(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: h } = e, { disableEditBoxes: g } = e, { singleBox: m } = e, { showRemoveButton: w } = e, { handlesCursor: y } = e, { useDefaultLabel: p } = e, C, S;
  const x = y2();
  function B(v) {
    h = v, t(0, h);
  }
  const k = () => x("change"), z = (v) => x("select", v.detail);
  return i.$$set = (v) => {
    "src" in v && t(18, n = v.src), "interactive" in v && t(1, s = v.interactive), "boxesAlpha" in v && t(2, l = v.boxesAlpha), "labelList" in v && t(3, o = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, c = v.handleSize), "boxThickness" in v && t(7, f = v.boxThickness), "height" in v && t(8, u = v.height), "width" in v && t(9, _ = v.width), "boxSelectedThickness" in v && t(10, d = v.boxSelectedThickness), "value" in v && t(0, h = v.value), "disableEditBoxes" in v && t(11, g = v.disableEditBoxes), "singleBox" in v && t(12, m = v.singleBox), "showRemoveButton" in v && t(13, w = v.showRemoveButton), "handlesCursor" in v && t(14, y = v.handlesCursor), "useDefaultLabel" in v && t(15, p = v.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, C = n), t(19, S = n);
      const v = n;
      Rd(v).then((W) => {
        S === v && t(16, C = W);
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
    m,
    w,
    y,
    p,
    C,
    x,
    n,
    S,
    B,
    k,
    z
  ];
}
class x2 extends u2 {
  constructor(e) {
    super(), b2(this, e, S2, C2, w2, {
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
class Oa {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: z2,
  add_flush_callback: ws,
  append: jn,
  attr: yi,
  bind: vs,
  binding_callbacks: Di,
  bubble: mi,
  check_outros: dn,
  create_component: Tt,
  create_slot: B2,
  destroy_component: Pt,
  detach: Cn,
  element: Bi,
  empty: M2,
  get_all_dirty_from_scope: D2,
  get_slot_changes: W2,
  group_outros: mn,
  init: E2,
  insert: Sn,
  mount_component: Ft,
  noop: L2,
  safe_not_equal: q2,
  space: _n,
  toggle_class: Va,
  transition_in: ie,
  transition_out: re,
  update_slot_base: Y2
} = window.__gradio__svelte__internal, { createEventDispatcher: X2, tick: R2 } = window.__gradio__svelte__internal;
function Na(i) {
  let e, t;
  return e = new Zd({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [H2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, s) {
      Ft(e, n, s), t = !0;
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
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pt(e, n);
    }
  };
}
function H2(i) {
  let e, t;
  return e = new ks({
    props: {
      Icon: rh,
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
      Ft(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pt(e, n);
    }
  };
}
function Ka(i) {
  let e, t;
  return e = new E_({
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
      Ft(e, n, s), t = !0;
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
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pt(e, n);
    }
  };
}
function Za(i) {
  let e, t, n;
  return t = new ks({
    props: { Icon: ur, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = Bi("div"), Tt(t.$$.fragment);
    },
    m(s, l) {
      Sn(s, e, l), Ft(t, e, null), n = !0;
    },
    p: L2,
    i(s) {
      n || (ie(t.$$.fragment, s), n = !0);
    },
    o(s) {
      re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Cn(e), Pt(t);
    }
  };
}
function Ga(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = B2(
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
      8388608) && Y2(
        n,
        t,
        s,
        /*$$scope*/
        s[54],
        e ? W2(
          t,
          /*$$scope*/
          s[54],
          l,
          null
        ) : D2(
          /*$$scope*/
          s[54]
        ),
        null
      );
    },
    i(s) {
      e || (ie(n, s), e = !0);
    },
    o(s) {
      re(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function I2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ga(i)
  );
  return {
    c() {
      n && n.c(), e = M2();
    },
    m(s, l) {
      n && n.m(s, l), Sn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && ie(n, 1)) : (n = Ga(s), n.c(), ie(n, 1), n.m(e.parentNode, e)) : n && (mn(), re(n, 1, 1, () => {
        n = null;
      }), dn());
    },
    i(s) {
      t || (ie(n), t = !0);
    },
    o(s) {
      re(n), t = !1;
    },
    d(s) {
      s && Cn(e), n && n.d(s);
    }
  };
}
function Ja(i) {
  let e, t;
  return e = new w1({
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
      Ft(e, n, s), t = !0;
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
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pt(e, n);
    }
  };
}
function Qa(i) {
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
    i[1]), t = new x2({ props: o }), Di.push(() => vs(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), t.$on(
      "select",
      /*select_handler*/
      i[52]
    ), {
      c() {
        e = Bi("div"), Tt(t.$$.fragment), yi(e, "class", "image-frame svelte-1gjdske"), Va(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Sn(r, e, a), Ft(t, e, null), s = !0;
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
        r[1], ws(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Va(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (ie(t.$$.fragment, r), s = !0);
      },
      o(r) {
        re(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Cn(e), Pt(t);
      }
    }
  );
}
function $a(i) {
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
    i[0]), e = new N_({ props: l }), Di.push(() => vs(e, "active_source", s)), {
      c() {
        Tt(e.$$.fragment);
      },
      m(o, r) {
        Ft(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], ws(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (ie(e.$$.fragment, o), n = !0);
      },
      o(o) {
        re(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Pt(e, o);
      }
    }
  );
}
function A2(i) {
  let e, t, n, s, l, o, r, a, c, f, u, _, d, h, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), m;
  e = new Kf({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: hr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Na(i)
  ), y = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Ka(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Za(i)
  );
  function C(v) {
    i[42](v);
  }
  function S(v) {
    i[43](v);
  }
  let x = {
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
    $$slots: { default: [I2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (x.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (x.dragging = /*dragging*/
  i[30]), c = new Mm({ props: x }), i[41](c), Di.push(() => vs(c, "uploading", C)), Di.push(() => vs(c, "dragging", S)), c.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let B = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Ja(i)
  ), k = (
    /*value*/
    i[1] !== null && Qa(i)
  ), z = g && $a(i);
  return {
    c() {
      Tt(e.$$.fragment), t = _n(), n = Bi("div"), w && w.c(), s = _n(), y && y.c(), l = _n(), p && p.c(), o = _n(), r = Bi("div"), a = Bi("div"), Tt(c.$$.fragment), _ = _n(), B && B.c(), d = _n(), k && k.c(), h = _n(), z && z.c(), yi(n, "class", "icon-buttons svelte-1gjdske"), yi(a, "class", "upload-container svelte-1gjdske"), yi(r, "data-testid", "image"), yi(r, "class", "image-container svelte-1gjdske");
    },
    m(v, W) {
      Ft(e, v, W), Sn(v, t, W), Sn(v, n, W), w && w.m(n, null), jn(n, s), y && y.m(n, null), jn(n, l), p && p.m(n, null), Sn(v, o, W), Sn(v, r, W), jn(r, a), Ft(c, a, null), jn(a, _), B && B.m(a, null), jn(a, d), k && k.m(a, null), jn(r, h), z && z.m(r, null), m = !0;
    },
    p(v, W) {
      const X = {};
      W[0] & /*show_label*/
      8 && (X.show_label = /*show_label*/
      v[3]), W[0] & /*label*/
      4 && (X.label = /*label*/
      v[2] || "Image Annotator"), e.$set(X), /*showDownloadButton*/
      v[10] && /*value*/
      v[1] !== null ? w ? (w.p(v, W), W[0] & /*showDownloadButton, value*/
      1026 && ie(w, 1)) : (w = Na(v), w.c(), ie(w, 1), w.m(n, s)) : w && (mn(), re(w, 1, 1, () => {
        w = null;
      }), dn()), /*showShareButton*/
      v[9] && /*value*/
      v[1] !== null ? y ? (y.p(v, W), W[0] & /*showShareButton, value*/
      514 && ie(y, 1)) : (y = Ka(v), y.c(), ie(y, 1), y.m(n, l)) : y && (mn(), re(y, 1, 1, () => {
        y = null;
      }), dn()), /*showClearButton*/
      v[11] && /*value*/
      v[1] !== null && /*interactive*/
      v[7] ? p ? (p.p(v, W), W[0] & /*showClearButton, value, interactive*/
      2178 && ie(p, 1)) : (p = Za(v), p.c(), ie(p, 1), p.m(n, null)) : p && (mn(), re(p, 1, 1, () => {
        p = null;
      }), dn());
      const q = {};
      W[0] & /*value, active_source*/
      3 && (q.hidden = /*value*/
      v[1] !== null || /*active_source*/
      v[0] === "webcam"), W[0] & /*active_source*/
      1 && (q.filetype = /*active_source*/
      v[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (q.root = /*root*/
      v[6]), W[0] & /*max_file_size*/
      33554432 && (q.max_file_size = /*max_file_size*/
      v[25]), W[0] & /*sources*/
      16 && (q.disable_click = !/*sources*/
      v[4].includes("upload")), W[0] & /*cli_upload*/
      67108864 && (q.upload = /*cli_upload*/
      v[26]), W[0] & /*stream_handler*/
      134217728 && (q.stream_handler = /*stream_handler*/
      v[27]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      8388608 && (q.$$scope = { dirty: W, ctx: v }), !f && W[0] & /*uploading*/
      536870912 && (f = !0, q.uploading = /*uploading*/
      v[29], ws(() => f = !1)), !u && W[0] & /*dragging*/
      1073741824 && (u = !0, q.dragging = /*dragging*/
      v[30], ws(() => u = !1)), c.$set(q), /*value*/
      v[1] === null && /*active_source*/
      v[0] === "webcam" ? B ? (B.p(v, W), W[0] & /*value, active_source*/
      3 && ie(B, 1)) : (B = Ja(v), B.c(), ie(B, 1), B.m(a, d)) : B && (mn(), re(B, 1, 1, () => {
        B = null;
      }), dn()), /*value*/
      v[1] !== null ? k ? (k.p(v, W), W[0] & /*value*/
      2 && ie(k, 1)) : (k = Qa(v), k.c(), ie(k, 1), k.m(a, null)) : k && (mn(), re(k, 1, 1, () => {
        k = null;
      }), dn()), W[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (v[4].length > 1 || /*sources*/
      v[4].includes("clipboard")) && /*value*/
      v[1] === null && /*interactive*/
      v[7]), g ? z ? (z.p(v, W), W[0] & /*sources, value, interactive*/
      146 && ie(z, 1)) : (z = $a(v), z.c(), ie(z, 1), z.m(r, null)) : z && (mn(), re(z, 1, 1, () => {
        z = null;
      }), dn());
    },
    i(v) {
      m || (ie(e.$$.fragment, v), ie(w), ie(y), ie(p), ie(c.$$.fragment, v), ie(B), ie(k), ie(z), m = !0);
    },
    o(v) {
      re(e.$$.fragment, v), re(w), re(y), re(p), re(c.$$.fragment, v), re(B), re(k), re(z), m = !1;
    },
    d(v) {
      v && (Cn(t), Cn(n), Cn(o), Cn(r)), Pt(e, v), w && w.d(), y && y.d(), p && p.d(), i[41](null), Pt(c), B && B.d(), k && k.d(), z && z.d();
    }
  };
}
function T2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(D, Ot, st, on) {
    function qi(Ze) {
      return Ze instanceof st ? Ze : new st(function(Pe) {
        Pe(Ze);
      });
    }
    return new (st || (st = Promise))(function(Ze, Pe) {
      function qs(yt) {
        try {
          ci(on.next(yt));
        } catch (fi) {
          Pe(fi);
        }
      }
      function Ys(yt) {
        try {
          ci(on.throw(yt));
        } catch (fi) {
          Pe(fi);
        }
      }
      function ci(yt) {
        yt.done ? Ze(yt.value) : qi(yt.value).then(qs, Ys);
      }
      ci((on = on.apply(D, Ot || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: g } = e, { showClearButton: m } = e, { boxesAlpha: w } = e, { labelList: y } = e, { labelColors: p } = e, { boxMinSize: C } = e, { handleSize: S } = e, { height: x } = e, { width: B } = e, { boxThickness: k } = e, { disableEditBoxes: z } = e, { singleBox: v } = e, { showRemoveButton: W } = e, { handlesCursor: X } = e, { boxSelectedThickness: q } = e, { max_file_size: Z = null } = e, { cli_upload: Q } = e, { stream_handler: K } = e, { useDefaultLabel: le } = e, Y, V = !1, { active_source: U = null } = e;
  function ee({ detail: D }) {
    t(1, o = new Oa()), t(1, o.image = D, o), ae("upload");
  }
  function I(D) {
    return l(this, void 0, void 0, function* () {
      const Ot = yield Y.load_files([new File([D], "webcam.png")]), st = (Ot == null ? void 0 : Ot[0]) || null;
      st ? (t(1, o = new Oa()), t(1, o.image = st, o)) : t(1, o = null), yield R2(), ae("change");
    });
  }
  const ae = X2();
  let P = !1;
  function H(D) {
    return l(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          Y.paste_clipboard();
          break;
      }
    });
  }
  function de() {
    t(1, o = null), ae("clear"), ae("change");
  }
  const E = async (D) => D === null ? "" : `<img src="${await p_(D.image)}" />`;
  function R(D) {
    mi.call(this, i, D);
  }
  function G(D) {
    mi.call(this, i, D);
  }
  function ce(D) {
    Di[D ? "unshift" : "push"](() => {
      Y = D, t(31, Y);
    });
  }
  function L(D) {
    V = D, t(29, V);
  }
  function nt(D) {
    P = D, t(30, P);
  }
  function vt(D) {
    mi.call(this, i, D);
  }
  const it = (D) => I(D.detail), Ie = (D) => I(D.detail);
  function we(D) {
    mi.call(this, i, D);
  }
  function Ae(D) {
    mi.call(this, i, D);
  }
  const kt = (D) => I(D.detail);
  function Te(D) {
    o = D, t(1, o);
  }
  const Ln = () => ae("change"), Es = (D) => ae("select", { index: null, value: D.detail.coordinates });
  function Ls(D) {
    U = D, t(0, U), t(4, c);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, o = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, c = D.sources), "selectable" in D && t(5, f = D.selectable), "root" in D && t(6, u = D.root), "interactive" in D && t(7, _ = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, h = D.showShareButton), "showDownloadButton" in D && t(10, g = D.showDownloadButton), "showClearButton" in D && t(11, m = D.showClearButton), "boxesAlpha" in D && t(12, w = D.boxesAlpha), "labelList" in D && t(13, y = D.labelList), "labelColors" in D && t(14, p = D.labelColors), "boxMinSize" in D && t(15, C = D.boxMinSize), "handleSize" in D && t(16, S = D.handleSize), "height" in D && t(17, x = D.height), "width" in D && t(18, B = D.width), "boxThickness" in D && t(19, k = D.boxThickness), "disableEditBoxes" in D && t(20, z = D.disableEditBoxes), "singleBox" in D && t(21, v = D.singleBox), "showRemoveButton" in D && t(22, W = D.showRemoveButton), "handlesCursor" in D && t(23, X = D.handlesCursor), "boxSelectedThickness" in D && t(24, q = D.boxSelectedThickness), "max_file_size" in D && t(25, Z = D.max_file_size), "cli_upload" in D && t(26, Q = D.cli_upload), "stream_handler" in D && t(27, K = D.stream_handler), "useDefaultLabel" in D && t(28, le = D.useDefaultLabel), "active_source" in D && t(0, U = D.active_source), "$$scope" in D && t(54, s = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && V && de(), i.$$.dirty[0] & /*dragging*/
    1073741824 && ae("drag", P), i.$$.dirty[0] & /*active_source, sources*/
    17 && !U && c && t(0, U = c[0]);
  }, [
    U,
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
    m,
    w,
    y,
    p,
    C,
    S,
    x,
    B,
    k,
    z,
    v,
    W,
    X,
    q,
    Z,
    Q,
    K,
    le,
    V,
    P,
    Y,
    ee,
    I,
    ae,
    H,
    de,
    n,
    E,
    R,
    G,
    ce,
    L,
    nt,
    vt,
    it,
    Ie,
    we,
    Ae,
    kt,
    Te,
    Ln,
    Es,
    Ls,
    s
  ];
}
class P2 extends z2 {
  constructor(e) {
    super(), E2(
      this,
      e,
      T2,
      A2,
      q2,
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
  SvelteComponent: F2,
  attr: as,
  detach: uc,
  element: hc,
  init: U2,
  insert: _c,
  noop: er,
  safe_not_equal: j2,
  src_url_equal: tr,
  toggle_class: $t
} = window.__gradio__svelte__internal;
function nr(i) {
  let e, t;
  return {
    c() {
      e = hc("img"), tr(e.src, t = /*value*/
      i[0].url) || as(e, "src", t), as(e, "alt", "");
    },
    m(n, s) {
      _c(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !tr(e.src, t = /*value*/
      n[0].url) && as(e, "src", t);
    },
    d(n) {
      n && uc(e);
    }
  };
}
function O2(i) {
  let e, t = (
    /*value*/
    i[0] && nr(i)
  );
  return {
    c() {
      e = hc("div"), t && t.c(), as(e, "class", "container svelte-1sgcyba"), $t(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), $t(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), $t(
        e,
        "selected",
        /*selected*/
        i[2]
      ), $t(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      _c(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = nr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && $t(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && $t(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && $t(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && $t(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: er,
    o: er,
    d(n) {
      n && uc(e), t && t.d();
    }
  };
}
function V2(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class bb extends F2 {
  constructor(e) {
    super(), U2(this, e, V2, O2, j2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: N2,
  add_flush_callback: ir,
  assign: K2,
  bind: sr,
  binding_callbacks: lr,
  check_outros: Z2,
  create_component: Dn,
  destroy_component: Wn,
  detach: dc,
  empty: G2,
  flush: $,
  get_spread_object: J2,
  get_spread_update: Q2,
  group_outros: $2,
  init: eb,
  insert: mc,
  mount_component: En,
  safe_not_equal: tb,
  space: nb,
  transition_in: Ut,
  transition_out: jt
} = window.__gradio__svelte__internal;
function ib(i) {
  let e, t;
  return e = new xu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [ob] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, s) {
      En(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      8192 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function sb(i) {
  let e, t;
  return e = new wr({
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
      Dn(e.$$.fragment);
    },
    m(n, s) {
      En(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function lb(i) {
  let e, t;
  return e = new wr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, s) {
      En(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function ob(i) {
  let e, t;
  return e = new hr({}), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, s) {
      En(e, n, s), t = !0;
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function ab(i) {
  let e, t, n, s;
  const l = [lb, sb, ib], o = [];
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
      t.c(), n = G2();
    },
    m(a, c) {
      o[e].m(a, c), mc(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : ($2(), jt(o[f], 1, 1, () => {
        o[f] = null;
      }), Z2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Ut(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Ut(t), s = !0);
    },
    o(a) {
      jt(t), s = !1;
    },
    d(a) {
      a && dc(n), o[e].d(a);
    }
  };
}
function rb(i) {
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
    a = K2(a, r[_]);
  e = new Ld({ props: a });
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
    $$slots: { default: [ab] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new P2({ props: u }), lr.push(() => sr(n, "active_source", c)), lr.push(() => sr(n, "value", f)), n.$on(
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
        Dn(e.$$.fragment), t = nb(), Dn(n.$$.fragment);
      },
      m(_, d) {
        En(e, _, d), mc(_, t, d), En(n, _, d), o = !0;
      },
      p(_, d) {
        const h = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? Q2(r, [
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
          2 && J2(
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
        _[33], ir(() => s = !1)), !l && d[0] & /*value*/
        1 && (l = !0, g.value = /*value*/
        _[0], ir(() => l = !1)), n.$set(g);
      },
      i(_) {
        o || (Ut(e.$$.fragment, _), Ut(n.$$.fragment, _), o = !0);
      },
      o(_) {
        jt(e.$$.fragment, _), jt(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && dc(t), Wn(e, _), Wn(n, _);
      }
    }
  );
}
function cb(i) {
  let e, t;
  return e = new Zc({
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
      $$slots: { default: [rb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, s) {
      En(e, n, s), t = !0;
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
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function fb(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: g = void 0 } = e, { loading_status: m } = e, { sources: w = ["upload", "webcam", "clipboard"] } = e, { show_download_button: y } = e, { show_share_button: p } = e, { show_clear_button: C } = e, { interactive: S } = e, { boxes_alpha: x } = e, { label_list: B } = e, { label_colors: k } = e, { box_min_size: z } = e, { handle_size: v } = e, { box_thickness: W } = e, { box_selected_thickness: X } = e, { disable_edit_boxes: q } = e, { single_box: Z } = e, { show_remove_button: Q } = e, { handles_cursor: K } = e, { use_default_label: le } = e, { gradio: Y } = e, V, U = null;
  function ee(L) {
    U = L, t(33, U);
  }
  function I(L) {
    o = L, t(0, o);
  }
  const ae = () => Y.dispatch("change"), P = () => Y.dispatch("edit"), H = () => {
    Y.dispatch("clear");
  }, de = ({ detail: L }) => t(32, V = L), E = () => Y.dispatch("upload"), R = ({ detail: L }) => Y.dispatch("select", L), G = ({ detail: L }) => Y.dispatch("share", L), ce = ({ detail: L }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), Y.dispatch("error", L);
  };
  return i.$$set = (L) => {
    "elem_id" in L && t(2, n = L.elem_id), "elem_classes" in L && t(3, s = L.elem_classes), "visible" in L && t(4, l = L.visible), "value" in L && t(0, o = L.value), "label" in L && t(5, r = L.label), "show_label" in L && t(6, a = L.show_label), "root" in L && t(7, c = L.root), "height" in L && t(8, f = L.height), "width" in L && t(9, u = L.width), "_selectable" in L && t(10, _ = L._selectable), "container" in L && t(11, d = L.container), "scale" in L && t(12, h = L.scale), "min_width" in L && t(13, g = L.min_width), "loading_status" in L && t(1, m = L.loading_status), "sources" in L && t(14, w = L.sources), "show_download_button" in L && t(15, y = L.show_download_button), "show_share_button" in L && t(16, p = L.show_share_button), "show_clear_button" in L && t(17, C = L.show_clear_button), "interactive" in L && t(18, S = L.interactive), "boxes_alpha" in L && t(19, x = L.boxes_alpha), "label_list" in L && t(20, B = L.label_list), "label_colors" in L && t(21, k = L.label_colors), "box_min_size" in L && t(22, z = L.box_min_size), "handle_size" in L && t(23, v = L.handle_size), "box_thickness" in L && t(24, W = L.box_thickness), "box_selected_thickness" in L && t(25, X = L.box_selected_thickness), "disable_edit_boxes" in L && t(26, q = L.disable_edit_boxes), "single_box" in L && t(27, Z = L.single_box), "show_remove_button" in L && t(28, Q = L.show_remove_button), "handles_cursor" in L && t(29, K = L.handles_cursor), "use_default_label" in L && t(30, le = L.use_default_label), "gradio" in L && t(31, Y = L.gradio);
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
    _,
    d,
    h,
    g,
    w,
    y,
    p,
    C,
    S,
    x,
    B,
    k,
    z,
    v,
    W,
    X,
    q,
    Z,
    Q,
    K,
    le,
    Y,
    V,
    U,
    ee,
    I,
    ae,
    P,
    H,
    de,
    E,
    R,
    G,
    ce
  ];
}
class pb extends N2 {
  constructor(e) {
    super(), eb(
      this,
      e,
      fb,
      cb,
      tb,
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
    this.$$set({ elem_id: e }), $();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), $();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), $();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), $();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), $();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), $();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), $();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), $();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), $();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), $();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), $();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), $();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), $();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), $();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), $();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), $();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), $();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), $();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), $();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), $();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), $();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), $();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), $();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), $();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), $();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), $();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), $();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), $();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), $();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), $();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), $();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), $();
  }
}
export {
  bb as BaseExample,
  pb as default
};
