const {
  SvelteComponent: nh,
  assign: ih,
  create_slot: sh,
  detach: lh,
  element: oh,
  get_all_dirty_from_scope: ah,
  get_slot_changes: rh,
  get_spread_update: ch,
  init: fh,
  insert: uh,
  safe_not_equal: hh,
  set_dynamic_element_data: Fa,
  set_style: Rt,
  toggle_class: cn,
  transition_in: sf,
  transition_out: lf,
  update_slot_base: dh
} = window.__gradio__svelte__internal;
function _h(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = sh(
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
    r = ih(r, o[a]);
  return {
    c() {
      e = oh(
        /*tag*/
        i[14]
      ), l && l.c(), Fa(
        /*tag*/
        i[14]
      )(e, r), cn(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), cn(
        e,
        "padded",
        /*padding*/
        i[6]
      ), cn(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), cn(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), cn(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Rt(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Rt(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Rt(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Rt(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Rt(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Rt(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Rt(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      uh(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && dh(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? rh(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : ah(
          /*$$scope*/
          a[17]
        ),
        null
      ), Fa(
        /*tag*/
        a[14]
      )(e, r = ch(o, [
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
      ])), cn(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), cn(
        e,
        "padded",
        /*padding*/
        a[6]
      ), cn(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), cn(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), cn(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && Rt(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && Rt(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && Rt(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && Rt(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && Rt(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && Rt(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (sf(l, a), n = !0);
    },
    o(a) {
      lf(l, a), n = !1;
    },
    d(a) {
      a && lh(e), l && l.d(a);
    }
  };
}
function mh(i) {
  let e, t = (
    /*tag*/
    i[14] && _h(i)
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
      e || (sf(t, n), e = !0);
    },
    o(n) {
      lf(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function gh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: h = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: p = !1 } = e, { container: g = !0 } = e, { visible: u = !0 } = e, { allow_overflow: b = !0 } = e, { scale: y = null } = e, { min_width: w = 0 } = e, x = _ === "fieldset" ? "fieldset" : "div";
  const Y = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return i.$$set = (k) => {
    "height" in k && t(0, l = k.height), "width" in k && t(1, o = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, c = k.variant), "border_mode" in k && t(5, f = k.border_mode), "padding" in k && t(6, h = k.padding), "type" in k && t(16, _ = k.type), "test_id" in k && t(7, d = k.test_id), "explicit_call" in k && t(8, p = k.explicit_call), "container" in k && t(9, g = k.container), "visible" in k && t(10, u = k.visible), "allow_overflow" in k && t(11, b = k.allow_overflow), "scale" in k && t(12, y = k.scale), "min_width" in k && t(13, w = k.min_width), "$$scope" in k && t(17, s = k.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    d,
    p,
    g,
    u,
    b,
    y,
    w,
    x,
    Y,
    _,
    s,
    n
  ];
}
class ph extends nh {
  constructor(e) {
    super(), fh(this, e, gh, mh, hh, {
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
  SvelteComponent: bh,
  attr: vh,
  create_slot: wh,
  detach: kh,
  element: yh,
  get_all_dirty_from_scope: Ch,
  get_slot_changes: Sh,
  init: Mh,
  insert: Wh,
  safe_not_equal: zh,
  transition_in: xh,
  transition_out: Xh,
  update_slot_base: Yh
} = window.__gradio__svelte__internal;
function Bh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = wh(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = yh("div"), s && s.c(), vh(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      Wh(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && Yh(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? Sh(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : Ch(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (xh(s, l), t = !0);
    },
    o(l) {
      Xh(s, l), t = !1;
    },
    d(l) {
      l && kh(e), s && s.d(l);
    }
  };
}
function Dh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class Eh extends bh {
  constructor(e) {
    super(), Mh(this, e, Dh, Bh, zh, {});
  }
}
const {
  SvelteComponent: Rh,
  attr: Ta,
  check_outros: Hh,
  create_component: Lh,
  create_slot: Ph,
  destroy_component: qh,
  detach: vl,
  element: Ih,
  empty: Ah,
  get_all_dirty_from_scope: jh,
  get_slot_changes: Fh,
  group_outros: Th,
  init: Oh,
  insert: wl,
  mount_component: Uh,
  safe_not_equal: Nh,
  set_data: Vh,
  space: Kh,
  text: Zh,
  toggle_class: Ai,
  transition_in: ys,
  transition_out: kl,
  update_slot_base: Gh
} = window.__gradio__svelte__internal;
function Oa(i) {
  let e, t;
  return e = new Eh({
    props: {
      $$slots: { default: [Jh] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Lh(e.$$.fragment);
    },
    m(n, s) {
      Uh(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (ys(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qh(e, n);
    }
  };
}
function Jh(i) {
  let e;
  return {
    c() {
      e = Zh(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      wl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Vh(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && vl(e);
    }
  };
}
function Qh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Ph(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Oa(i)
  );
  return {
    c() {
      e = Ih("span"), o && o.c(), t = Kh(), r && r.c(), n = Ah(), Ta(e, "data-testid", "block-info"), Ta(e, "class", "svelte-22c38v"), Ai(e, "sr-only", !/*show_label*/
      i[0]), Ai(e, "hide", !/*show_label*/
      i[0]), Ai(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      wl(a, e, c), o && o.m(e, null), wl(a, t, c), r && r.m(a, c), wl(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Gh(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Fh(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : jh(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && Ai(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && Ai(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && Ai(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && ys(r, 1)) : (r = Oa(a), r.c(), ys(r, 1), r.m(n.parentNode, n)) : r && (Th(), kl(r, 1, 1, () => {
        r = null;
      }), Hh());
    },
    i(a) {
      s || (ys(o, a), ys(r), s = !0);
    },
    o(a) {
      kl(o, a), kl(r), s = !1;
    },
    d(a) {
      a && (vl(e), vl(t), vl(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function $h(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class of extends Rh {
  constructor(e) {
    super(), Oh(this, e, $h, Qh, Nh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: ed,
  append: eo,
  attr: Us,
  create_component: td,
  destroy_component: nd,
  detach: id,
  element: Ua,
  init: sd,
  insert: ld,
  mount_component: od,
  safe_not_equal: ad,
  set_data: rd,
  space: cd,
  text: fd,
  toggle_class: An,
  transition_in: ud,
  transition_out: hd
} = window.__gradio__svelte__internal;
function dd(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Ua("label"), t = Ua("span"), td(n.$$.fragment), s = cd(), l = fd(
        /*label*/
        i[0]
      ), Us(t, "class", "svelte-9gxdi0"), Us(e, "for", ""), Us(e, "data-testid", "block-label"), Us(e, "class", "svelte-9gxdi0"), An(e, "hide", !/*show_label*/
      i[2]), An(e, "sr-only", !/*show_label*/
      i[2]), An(
        e,
        "float",
        /*float*/
        i[4]
      ), An(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      ld(r, e, a), eo(e, t), od(n, t, null), eo(e, s), eo(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && rd(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && An(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && An(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && An(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && An(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (ud(n.$$.fragment, r), o = !0);
    },
    o(r) {
      hd(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && id(e), nd(n);
    }
  };
}
function _d(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class md extends ed {
  constructor(e) {
    super(), sd(this, e, _d, dd, ad, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: gd,
  append: ea,
  attr: Mn,
  bubble: pd,
  create_component: bd,
  destroy_component: vd,
  detach: af,
  element: ta,
  init: wd,
  insert: rf,
  listen: kd,
  mount_component: yd,
  safe_not_equal: Cd,
  set_data: Sd,
  set_style: ji,
  space: Md,
  text: Wd,
  toggle_class: Ct,
  transition_in: zd,
  transition_out: xd
} = window.__gradio__svelte__internal;
function Na(i) {
  let e, t;
  return {
    c() {
      e = ta("span"), t = Wd(
        /*label*/
        i[1]
      ), Mn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      rf(n, e, s), ea(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && Sd(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && af(e);
    }
  };
}
function Xd(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && Na(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = ta("button"), a && a.c(), t = Md(), n = ta("div"), bd(s.$$.fragment), Mn(n, "class", "svelte-1lrphxw"), Ct(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Ct(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Ct(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Mn(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Mn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Mn(
        e,
        "title",
        /*label*/
        i[1]
      ), Mn(e, "class", "svelte-1lrphxw"), Ct(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Ct(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Ct(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Ct(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), ji(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), ji(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), ji(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      rf(c, e, f), a && a.m(e, null), ea(e, t), ea(e, n), yd(s, n, null), l = !0, o || (r = kd(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = Na(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && Ct(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && Ct(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && Ct(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && Mn(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && Mn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && Mn(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && Ct(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && Ct(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && Ct(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && Ct(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && ji(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && ji(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && ji(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (zd(s.$$.fragment, c), l = !0);
    },
    o(c) {
      xd(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && af(e), a && a.d(), vd(s), o = !1, r();
    }
  };
}
function Yd(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: h = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: p = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: u = 0 } = e;
  function b(y) {
    pd.call(this, i, y);
  }
  return i.$$set = (y) => {
    "Icon" in y && t(0, s = y.Icon), "label" in y && t(1, l = y.label), "show_label" in y && t(2, o = y.show_label), "pending" in y && t(3, r = y.pending), "size" in y && t(4, a = y.size), "padded" in y && t(5, c = y.padded), "highlight" in y && t(6, f = y.highlight), "disabled" in y && t(7, h = y.disabled), "hasPopup" in y && t(8, _ = y.hasPopup), "color" in y && t(13, d = y.color), "transparent" in y && t(9, p = y.transparent), "background" in y && t(10, g = y.background), "offset" in y && t(11, u = y.offset);
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
    h,
    _,
    p,
    g,
    u,
    n,
    d,
    b
  ];
}
class Tl extends gd {
  constructor(e) {
    super(), wd(this, e, Yd, Xd, Cd, {
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
  SvelteComponent: Bd,
  append: Dd,
  attr: to,
  binding_callbacks: Ed,
  create_slot: Rd,
  detach: Hd,
  element: Va,
  get_all_dirty_from_scope: Ld,
  get_slot_changes: Pd,
  init: qd,
  insert: Id,
  safe_not_equal: Ad,
  toggle_class: jn,
  transition_in: jd,
  transition_out: Fd,
  update_slot_base: Td
} = window.__gradio__svelte__internal;
function Od(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = Rd(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Va("div"), t = Va("div"), l && l.c(), to(t, "class", "icon svelte-3w3rth"), to(e, "class", "empty svelte-3w3rth"), to(e, "aria-label", "Empty value"), jn(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), jn(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), jn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), jn(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Id(o, e, r), Dd(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Td(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Pd(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Ld(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && jn(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && jn(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && jn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && jn(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (jd(l, o), n = !0);
    },
    o(o) {
      Fd(l, o), n = !1;
    },
    d(o) {
      o && Hd(e), l && l.d(o), i[6](null);
    }
  };
}
function Ud(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(h) {
    var _;
    if (!h) return !1;
    const { height: d } = h.getBoundingClientRect(), { height: p } = ((_ = h.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > p + 2;
  }
  function f(h) {
    Ed[h ? "unshift" : "push"](() => {
      a = h, t(2, a);
    });
  }
  return i.$$set = (h) => {
    "size" in h && t(0, o = h.size), "unpadded_box" in h && t(1, r = h.unpadded_box), "$$scope" in h && t(4, l = h.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = c(a));
  }, [o, r, a, n, l, s, f];
}
class Nd extends Bd {
  constructor(e) {
    super(), qd(this, e, Ud, Od, Ad, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Vd,
  append: Ka,
  attr: St,
  detach: Kd,
  init: Zd,
  insert: Gd,
  noop: no,
  safe_not_equal: Jd,
  svg_element: io
} = window.__gradio__svelte__internal;
function Qd(i) {
  let e, t, n;
  return {
    c() {
      e = io("svg"), t = io("path"), n = io("circle"), St(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), St(n, "cx", "12"), St(n, "cy", "13"), St(n, "r", "4"), St(e, "xmlns", "http://www.w3.org/2000/svg"), St(e, "width", "100%"), St(e, "height", "100%"), St(e, "viewBox", "0 0 24 24"), St(e, "fill", "none"), St(e, "stroke", "currentColor"), St(e, "stroke-width", "1.5"), St(e, "stroke-linecap", "round"), St(e, "stroke-linejoin", "round"), St(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Gd(s, e, l), Ka(e, t), Ka(e, n);
    },
    p: no,
    i: no,
    o: no,
    d(s) {
      s && Kd(e);
    }
  };
}
class $d extends Vd {
  constructor(e) {
    super(), Zd(this, e, null, Qd, Jd, {});
  }
}
const {
  SvelteComponent: e_,
  append: t_,
  attr: Zt,
  detach: n_,
  init: i_,
  insert: s_,
  noop: so,
  safe_not_equal: l_,
  svg_element: Za
} = window.__gradio__svelte__internal;
function o_(i) {
  let e, t;
  return {
    c() {
      e = Za("svg"), t = Za("circle"), Zt(t, "cx", "12"), Zt(t, "cy", "12"), Zt(t, "r", "10"), Zt(e, "xmlns", "http://www.w3.org/2000/svg"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "stroke-width", "1.5"), Zt(e, "stroke-linecap", "round"), Zt(e, "stroke-linejoin", "round"), Zt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      s_(n, e, s), t_(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && n_(e);
    }
  };
}
let a_ = class extends e_ {
  constructor(e) {
    super(), i_(this, e, null, o_, l_, {});
  }
};
const {
  SvelteComponent: r_,
  append: lo,
  attr: Gt,
  detach: c_,
  init: f_,
  insert: u_,
  noop: oo,
  safe_not_equal: h_,
  set_style: fn,
  svg_element: Ns
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ns("svg"), t = Ns("g"), n = Ns("path"), s = Ns("path"), Gt(n, "d", "M18,6L6.087,17.913"), fn(n, "fill", "none"), fn(n, "fill-rule", "nonzero"), fn(n, "stroke-width", "2px"), Gt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Gt(s, "d", "M4.364,4.364L19.636,19.636"), fn(s, "fill", "none"), fn(s, "fill-rule", "nonzero"), fn(s, "stroke-width", "2px"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24"), Gt(e, "version", "1.1"), Gt(e, "xmlns", "http://www.w3.org/2000/svg"), Gt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Gt(e, "xml:space", "preserve"), Gt(e, "stroke", "currentColor"), fn(e, "fill-rule", "evenodd"), fn(e, "clip-rule", "evenodd"), fn(e, "stroke-linecap", "round"), fn(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      u_(l, e, o), lo(e, t), lo(t, n), lo(e, s);
    },
    p: oo,
    i: oo,
    o: oo,
    d(l) {
      l && c_(e);
    }
  };
}
class cf extends r_ {
  constructor(e) {
    super(), f_(this, e, null, d_, h_, {});
  }
}
const {
  SvelteComponent: __,
  append: m_,
  attr: _s,
  detach: g_,
  init: p_,
  insert: b_,
  noop: ao,
  safe_not_equal: v_,
  svg_element: Ga
} = window.__gradio__svelte__internal;
function w_(i) {
  let e, t;
  return {
    c() {
      e = Ga("svg"), t = Ga("path"), _s(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), _s(t, "fill", "currentColor"), _s(e, "id", "icon"), _s(e, "xmlns", "http://www.w3.org/2000/svg"), _s(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      b_(n, e, s), m_(e, t);
    },
    p: ao,
    i: ao,
    o: ao,
    d(n) {
      n && g_(e);
    }
  };
}
class k_ extends __ {
  constructor(e) {
    super(), p_(this, e, null, w_, v_, {});
  }
}
const {
  SvelteComponent: y_,
  append: C_,
  attr: Fi,
  detach: S_,
  init: M_,
  insert: W_,
  noop: ro,
  safe_not_equal: z_,
  svg_element: Ja
} = window.__gradio__svelte__internal;
function x_(i) {
  let e, t;
  return {
    c() {
      e = Ja("svg"), t = Ja("path"), Fi(t, "fill", "currentColor"), Fi(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Fi(e, "xmlns", "http://www.w3.org/2000/svg"), Fi(e, "width", "100%"), Fi(e, "height", "100%"), Fi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      W_(n, e, s), C_(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && S_(e);
    }
  };
}
class X_ extends y_ {
  constructor(e) {
    super(), M_(this, e, null, x_, z_, {});
  }
}
const {
  SvelteComponent: Y_,
  append: B_,
  attr: Ti,
  detach: D_,
  init: E_,
  insert: R_,
  noop: co,
  safe_not_equal: H_,
  svg_element: Qa
} = window.__gradio__svelte__internal;
function L_(i) {
  let e, t;
  return {
    c() {
      e = Qa("svg"), t = Qa("path"), Ti(t, "d", "M5 8l4 4 4-4z"), Ti(e, "class", "dropdown-arrow svelte-145leq6"), Ti(e, "xmlns", "http://www.w3.org/2000/svg"), Ti(e, "width", "100%"), Ti(e, "height", "100%"), Ti(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      R_(n, e, s), B_(e, t);
    },
    p: co,
    i: co,
    o: co,
    d(n) {
      n && D_(e);
    }
  };
}
let ya = class extends Y_ {
  constructor(e) {
    super(), E_(this, e, null, L_, H_, {});
  }
};
const {
  SvelteComponent: P_,
  append: fo,
  attr: Qe,
  detach: q_,
  init: I_,
  insert: A_,
  noop: uo,
  safe_not_equal: j_,
  svg_element: Vs
} = window.__gradio__svelte__internal;
function F_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Vs("svg"), t = Vs("rect"), n = Vs("circle"), s = Vs("polyline"), Qe(t, "x", "3"), Qe(t, "y", "3"), Qe(t, "width", "18"), Qe(t, "height", "18"), Qe(t, "rx", "2"), Qe(t, "ry", "2"), Qe(n, "cx", "8.5"), Qe(n, "cy", "8.5"), Qe(n, "r", "1.5"), Qe(s, "points", "21 15 16 10 5 21"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "1.5"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-image");
    },
    m(l, o) {
      A_(l, e, o), fo(e, t), fo(e, n), fo(e, s);
    },
    p: uo,
    i: uo,
    o: uo,
    d(l) {
      l && q_(e);
    }
  };
}
let ff = class extends P_ {
  constructor(e) {
    super(), I_(this, e, null, F_, j_, {});
  }
};
const {
  SvelteComponent: T_,
  append: O_,
  attr: Ks,
  detach: U_,
  init: N_,
  insert: V_,
  noop: ho,
  safe_not_equal: K_,
  svg_element: $a
} = window.__gradio__svelte__internal;
function Z_(i) {
  let e, t;
  return {
    c() {
      e = $a("svg"), t = $a("path"), Ks(t, "fill", "currentColor"), Ks(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ks(e, "xmlns", "http://www.w3.org/2000/svg"), Ks(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      V_(n, e, s), O_(e, t);
    },
    p: ho,
    i: ho,
    o: ho,
    d(n) {
      n && U_(e);
    }
  };
}
class uf extends T_ {
  constructor(e) {
    super(), N_(this, e, null, Z_, K_, {});
  }
}
const {
  SvelteComponent: G_,
  append: Zs,
  attr: $e,
  detach: J_,
  init: Q_,
  insert: $_,
  noop: _o,
  safe_not_equal: em,
  svg_element: ms
} = window.__gradio__svelte__internal;
function tm(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = ms("svg"), t = ms("path"), n = ms("path"), s = ms("line"), l = ms("line"), $e(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), $e(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), $e(s, "x1", "12"), $e(s, "y1", "19"), $e(s, "x2", "12"), $e(s, "y2", "23"), $e(l, "x1", "8"), $e(l, "y1", "23"), $e(l, "x2", "16"), $e(l, "y2", "23"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "fill", "none"), $e(e, "stroke", "currentColor"), $e(e, "stroke-width", "2"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round"), $e(e, "class", "feather feather-mic");
    },
    m(o, r) {
      $_(o, e, r), Zs(e, t), Zs(e, n), Zs(e, s), Zs(e, l);
    },
    p: _o,
    i: _o,
    o: _o,
    d(o) {
      o && J_(e);
    }
  };
}
class nm extends G_ {
  constructor(e) {
    super(), Q_(this, e, null, tm, em, {});
  }
}
const {
  SvelteComponent: im,
  append: sm,
  attr: Mt,
  detach: lm,
  init: om,
  insert: am,
  noop: mo,
  safe_not_equal: rm,
  svg_element: er
} = window.__gradio__svelte__internal;
function cm(i) {
  let e, t;
  return {
    c() {
      e = er("svg"), t = er("rect"), Mt(t, "x", "3"), Mt(t, "y", "3"), Mt(t, "width", "18"), Mt(t, "height", "18"), Mt(t, "rx", "2"), Mt(t, "ry", "2"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 24 24"), Mt(e, "stroke-width", "1.5"), Mt(e, "stroke-linecap", "round"), Mt(e, "stroke-linejoin", "round"), Mt(e, "class", "feather feather-square");
    },
    m(n, s) {
      am(n, e, s), sm(e, t);
    },
    p: mo,
    i: mo,
    o: mo,
    d(n) {
      n && lm(e);
    }
  };
}
class fm extends im {
  constructor(e) {
    super(), om(this, e, null, cm, rm, {});
  }
}
const {
  SvelteComponent: um,
  append: go,
  attr: dt,
  detach: hm,
  init: dm,
  insert: _m,
  noop: po,
  safe_not_equal: mm,
  svg_element: Gs
} = window.__gradio__svelte__internal;
function gm(i) {
  let e, t, n, s;
  return {
    c() {
      e = Gs("svg"), t = Gs("path"), n = Gs("polyline"), s = Gs("line"), dt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), dt(n, "points", "17 8 12 3 7 8"), dt(s, "x1", "12"), dt(s, "y1", "3"), dt(s, "x2", "12"), dt(s, "y2", "15"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "width", "90%"), dt(e, "height", "90%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "fill", "none"), dt(e, "stroke", "currentColor"), dt(e, "stroke-width", "2"), dt(e, "stroke-linecap", "round"), dt(e, "stroke-linejoin", "round"), dt(e, "class", "feather feather-upload");
    },
    m(l, o) {
      _m(l, e, o), go(e, t), go(e, n), go(e, s);
    },
    p: po,
    i: po,
    o: po,
    d(l) {
      l && hm(e);
    }
  };
}
let hf = class extends um {
  constructor(e) {
    super(), dm(this, e, null, gm, mm, {});
  }
};
const {
  SvelteComponent: pm,
  append: tr,
  attr: Fn,
  detach: bm,
  init: vm,
  insert: wm,
  noop: bo,
  safe_not_equal: km,
  svg_element: vo
} = window.__gradio__svelte__internal;
function ym(i) {
  let e, t, n;
  return {
    c() {
      e = vo("svg"), t = vo("path"), n = vo("path"), Fn(t, "fill", "currentColor"), Fn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Fn(n, "fill", "currentColor"), Fn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Fn(e, "xmlns", "http://www.w3.org/2000/svg"), Fn(e, "width", "100%"), Fn(e, "height", "100%"), Fn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      wm(s, e, l), tr(e, t), tr(e, n);
    },
    p: bo,
    i: bo,
    o: bo,
    d(s) {
      s && bm(e);
    }
  };
}
let df = class extends pm {
  constructor(e) {
    super(), vm(this, e, null, ym, km, {});
  }
};
const Cm = [
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
], nr = {
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
Cm.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: nr[e][t],
      secondary: nr[e][n]
    }
  }),
  {}
);
class yl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Sm(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new yl("Must be on Spaces to share.");
  let t, n, s;
  t = Mm(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new yl(`Upload failed: ${c.error}`);
    }
    throw new yl("Upload failed.");
  }
  return await o.text();
}
function Mm(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: Wm,
  create_component: zm,
  destroy_component: xm,
  init: Xm,
  mount_component: Ym,
  safe_not_equal: Bm,
  transition_in: Dm,
  transition_out: Em
} = window.__gradio__svelte__internal, { createEventDispatcher: Rm } = window.__gradio__svelte__internal;
function Hm(i) {
  let e, t;
  return e = new Tl({
    props: {
      Icon: k_,
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
      zm(e.$$.fragment);
    },
    m(n, s) {
      Ym(e, n, s), t = !0;
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
      t || (Dm(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Em(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xm(e, n);
    }
  };
}
function Lm(i, e, t) {
  const n = Rm();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof yl ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class Pm extends Wm {
  constructor(e) {
    super(), Xm(this, e, Lm, Hm, Bm, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: qm,
  append: yi,
  attr: na,
  check_outros: Im,
  create_component: _f,
  destroy_component: mf,
  detach: Cl,
  element: ia,
  group_outros: Am,
  init: jm,
  insert: Sl,
  mount_component: gf,
  safe_not_equal: Fm,
  set_data: sa,
  space: la,
  text: Cs,
  toggle_class: ir,
  transition_in: xl,
  transition_out: Xl
} = window.__gradio__svelte__internal;
function Tm(i) {
  let e, t;
  return e = new hf({}), {
    c() {
      _f(e.$$.fragment);
    },
    m(n, s) {
      gf(e, n, s), t = !0;
    },
    i(n) {
      t || (xl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      mf(e, n);
    }
  };
}
function Om(i) {
  let e, t;
  return e = new uf({}), {
    c() {
      _f(e.$$.fragment);
    },
    m(n, s) {
      gf(e, n, s), t = !0;
    },
    i(n) {
      t || (xl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      mf(e, n);
    }
  };
}
function sr(i) {
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
      e = ia("span"), t = Cs("- "), s = Cs(n), l = Cs(" -"), o = la(), a = Cs(r), na(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      Sl(c, e, f), yi(e, t), yi(e, s), yi(e, l), Sl(c, o, f), Sl(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && sa(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && sa(a, r);
    },
    d(c) {
      c && (Cl(e), Cl(o), Cl(a));
    }
  };
}
function Um(i) {
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
  const f = [Om, Tm], h = [];
  function _(p, g) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), s = h[n] = f[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && sr(i)
  );
  return {
    c() {
      e = ia("div"), t = ia("span"), s.c(), l = la(), r = Cs(o), a = la(), d && d.c(), na(t, "class", "icon-wrap svelte-kzcjhc"), ir(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), na(e, "class", "wrap svelte-kzcjhc");
    },
    m(p, g) {
      Sl(p, e, g), yi(e, t), h[n].m(t, null), yi(e, l), yi(e, r), yi(e, a), d && d.m(e, null), c = !0;
    },
    p(p, [g]) {
      let u = n;
      n = _(p), n !== u && (Am(), Xl(h[u], 1, 1, () => {
        h[u] = null;
      }), Im(), s = h[n], s || (s = h[n] = f[n](p), s.c()), xl(s, 1), s.m(t, null)), (!c || g & /*hovered*/
      16) && ir(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), (!c || g & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      p[1](
        /*defs*/
        p[5][
          /*type*/
          p[0]
        ] || /*defs*/
        p[5].file
      ) + "") && sa(r, o), /*mode*/
      p[3] !== "short" ? d ? d.p(p, g) : (d = sr(p), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(p) {
      c || (xl(s), c = !0);
    },
    o(p) {
      Xl(s), c = !1;
    },
    d(p) {
      p && Cl(e), h[n].d(), d && d.d();
    }
  };
}
function Nm(i, e, t) {
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
class pf extends qm {
  constructor(e) {
    super(), jm(this, e, Nm, Um, Fm, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Vm,
  append: wo,
  attr: vn,
  check_outros: Ss,
  create_component: Ol,
  destroy_component: Ul,
  detach: as,
  element: Ps,
  empty: Km,
  group_outros: Ms,
  init: Zm,
  insert: rs,
  listen: Nl,
  mount_component: Vl,
  safe_not_equal: Gm,
  space: ko,
  toggle_class: ii,
  transition_in: st,
  transition_out: zt
} = window.__gradio__svelte__internal;
function lr(i) {
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
  ), c, f = t && or(i), h = s && ar(i), _ = o && rr(i), d = a && cr(i);
  return {
    c() {
      e = Ps("span"), f && f.c(), n = ko(), h && h.c(), l = ko(), _ && _.c(), r = ko(), d && d.c(), vn(e, "class", "source-selection svelte-1jp3vgd"), vn(e, "data-testid", "source-select");
    },
    m(p, g) {
      rs(p, e, g), f && f.m(e, null), wo(e, n), h && h.m(e, null), wo(e, l), _ && _.m(e, null), wo(e, r), d && d.m(e, null), c = !0;
    },
    p(p, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      p[1].includes("upload")), t ? f ? (f.p(p, g), g & /*sources*/
      2 && st(f, 1)) : (f = or(p), f.c(), st(f, 1), f.m(e, n)) : f && (Ms(), zt(f, 1, 1, () => {
        f = null;
      }), Ss()), g & /*sources*/
      2 && (s = /*sources*/
      p[1].includes("microphone")), s ? h ? (h.p(p, g), g & /*sources*/
      2 && st(h, 1)) : (h = ar(p), h.c(), st(h, 1), h.m(e, l)) : h && (Ms(), zt(h, 1, 1, () => {
        h = null;
      }), Ss()), g & /*sources*/
      2 && (o = /*sources*/
      p[1].includes("webcam")), o ? _ ? (_.p(p, g), g & /*sources*/
      2 && st(_, 1)) : (_ = rr(p), _.c(), st(_, 1), _.m(e, r)) : _ && (Ms(), zt(_, 1, 1, () => {
        _ = null;
      }), Ss()), g & /*sources*/
      2 && (a = /*sources*/
      p[1].includes("clipboard")), a ? d ? (d.p(p, g), g & /*sources*/
      2 && st(d, 1)) : (d = cr(p), d.c(), st(d, 1), d.m(e, null)) : d && (Ms(), zt(d, 1, 1, () => {
        d = null;
      }), Ss());
    },
    i(p) {
      c || (st(f), st(h), st(_), st(d), c = !0);
    },
    o(p) {
      zt(f), zt(h), zt(_), zt(d), c = !1;
    },
    d(p) {
      p && as(e), f && f.d(), h && h.d(), _ && _.d(), d && d.d();
    }
  };
}
function or(i) {
  let e, t, n, s, l;
  return t = new hf({}), {
    c() {
      e = Ps("button"), Ol(t.$$.fragment), vn(e, "class", "icon svelte-1jp3vgd"), vn(e, "aria-label", "Upload file"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      rs(o, e, r), Vl(t, e, null), n = !0, s || (l = Nl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ii(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (st(t.$$.fragment, o), n = !0);
    },
    o(o) {
      zt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && as(e), Ul(t), s = !1, l();
    }
  };
}
function ar(i) {
  let e, t, n, s, l;
  return t = new nm({}), {
    c() {
      e = Ps("button"), Ol(t.$$.fragment), vn(e, "class", "icon svelte-1jp3vgd"), vn(e, "aria-label", "Record audio"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      rs(o, e, r), Vl(t, e, null), n = !0, s || (l = Nl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ii(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (st(t.$$.fragment, o), n = !0);
    },
    o(o) {
      zt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && as(e), Ul(t), s = !1, l();
    }
  };
}
function rr(i) {
  let e, t, n, s, l;
  return t = new df({}), {
    c() {
      e = Ps("button"), Ol(t.$$.fragment), vn(e, "class", "icon svelte-1jp3vgd"), vn(e, "aria-label", "Capture from camera"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      rs(o, e, r), Vl(t, e, null), n = !0, s || (l = Nl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ii(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (st(t.$$.fragment, o), n = !0);
    },
    o(o) {
      zt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && as(e), Ul(t), s = !1, l();
    }
  };
}
function cr(i) {
  let e, t, n, s, l;
  return t = new uf({}), {
    c() {
      e = Ps("button"), Ol(t.$$.fragment), vn(e, "class", "icon svelte-1jp3vgd"), vn(e, "aria-label", "Paste from clipboard"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      rs(o, e, r), Vl(t, e, null), n = !0, s || (l = Nl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && ii(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (st(t.$$.fragment, o), n = !0);
    },
    o(o) {
      zt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && as(e), Ul(t), s = !1, l();
    }
  };
}
function Jm(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && lr(i)
  );
  return {
    c() {
      n && n.c(), e = Km();
    },
    m(s, l) {
      n && n.m(s, l), rs(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && st(n, 1)) : (n = lr(s), n.c(), st(n, 1), n.m(e.parentNode, e)) : n && (Ms(), zt(n, 1, 1, () => {
        n = null;
      }), Ss());
    },
    i(s) {
      t || (st(n), t = !0);
    },
    o(s) {
      zt(n), t = !1;
    },
    d(s) {
      s && as(e), n && n.d(s);
    }
  };
}
function Qm(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(p, g, u, b) {
    function y(w) {
      return w instanceof u ? w : new u(function(x) {
        x(w);
      });
    }
    return new (u || (u = Promise))(function(w, x) {
      function Y(W) {
        try {
          X(b.next(W));
        } catch (v) {
          x(v);
        }
      }
      function k(W) {
        try {
          X(b.throw(W));
        } catch (v) {
          x(v);
        }
      }
      function X(W) {
        W.done ? w(W.value) : y(W.value).then(Y, k);
      }
      X((b = b.apply(p, g || [])).next());
    });
  };
  let { sources: l } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function c(p) {
    return s(this, void 0, void 0, function* () {
      r(), t(0, o = p), a(p);
    });
  }
  const f = () => c("upload"), h = () => c("microphone"), _ = () => c("webcam"), d = () => c("clipboard");
  return i.$$set = (p) => {
    "sources" in p && t(1, l = p.sources), "active_source" in p && t(0, o = p.active_source), "handle_clear" in p && t(4, r = p.handle_clear), "handle_select" in p && t(5, a = p.handle_select);
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
    h,
    _,
    d
  ];
}
class $m extends Vm {
  constructor(e) {
    super(), Zm(this, e, Qm, Jm, Gm, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function is(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Ml() {
}
const e1 = (i) => i;
function fr(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const bf = typeof window < "u";
let ur = bf ? () => window.performance.now() : () => Date.now(), vf = bf ? (i) => requestAnimationFrame(i) : Ml;
const os = /* @__PURE__ */ new Set();
function wf(i) {
  os.forEach((e) => {
    e.c(i) || (os.delete(e), e.f());
  }), os.size !== 0 && vf(wf);
}
function t1(i) {
  let e;
  return os.size === 0 && vf(wf), { promise: new Promise((t) => {
    os.add(e = { c: i, f: t });
  }), abort() {
    os.delete(e);
  } };
}
function n1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function i1(i, { delay: e = 0, duration: t = 400, easing: n = e1 } = {}) {
  const s = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (l) => "opacity: " + l * s };
}
function hr(i, { delay: e = 0, duration: t = 400, easing: n = n1, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [h, _] = fr(s), [d, p] = fr(l);
  return { delay: e, duration: t, easing: n, css: (g, u) => `
			transform: ${c} translate(${(1 - g) * h}${_}, ${(1 - g) * d}${p});
			opacity: ${a - f * u}` };
}
const Oi = [];
function s1(i, e = Ml) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (a = o, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = o, t)) {
      const c = !Oi.length;
      for (const f of n) f[1](), Oi.push(f, i);
      if (c) {
        for (let f = 0; f < Oi.length; f += 2) Oi[f][0](Oi[f + 1]);
        Oi.length = 0;
      }
    }
    var r, a;
  }
  function l(o) {
    s(o(i));
  }
  return { set: s, update: l, subscribe: function(o, r = Ml) {
    const a = [o, r];
    return n.add(a), n.size === 1 && (t = e(s, l) || Ml), o(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function dr(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function oa(i, e, t, n) {
  if (typeof t == "number" || dr(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = (l + (i.opts.stiffness * s - i.opts.damping * l) * i.inv_mass) * i.dt;
    return Math.abs(o) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, dr(t) ? new Date(t.getTime() + o) : t + o);
  }
  if (Array.isArray(t)) return t.map((s, l) => oa(i, e[l], t[l], n[l]));
  if (typeof t == "object") {
    const s = {};
    for (const l in t) s[l] = oa(i, e[l], t[l], n[l]);
    return s;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function _r(i, e = {}) {
  const t = s1(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, h = 1, _ = 0, d = !1;
  function p(u, b = {}) {
    f = u;
    const y = a = {};
    return i == null || b.hard || g.stiffness >= 1 && g.damping >= 1 ? (d = !0, o = ur(), c = u, t.set(i = f), Promise.resolve()) : (b.soft && (_ = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), h = 0), r || (o = ur(), d = !1, r = t1((w) => {
      if (d) return d = !1, r = null, !1;
      h = Math.min(h + _, 1);
      const x = { inv_mass: h, opts: g, settled: !0, dt: 60 * (w - o) / 1e3 }, Y = oa(x, c, i, f);
      return o = w, c = i, t.set(i = Y), x.settled && (r = null), !x.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        y === a && w();
      });
    }));
  }
  const g = { set: p, update: (u, b) => p(u(f, i), b), subscribe: t.subscribe, stiffness: n, damping: s, precision: l };
  return g;
}
const {
  SvelteComponent: l1,
  append: Jt,
  attr: ke,
  component_subscribe: mr,
  detach: o1,
  element: a1,
  init: r1,
  insert: c1,
  noop: gr,
  safe_not_equal: f1,
  set_style: Js,
  svg_element: Qt,
  toggle_class: pr
} = window.__gradio__svelte__internal, { onMount: u1 } = window.__gradio__svelte__internal;
function h1(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _;
  return {
    c() {
      e = a1("div"), t = Qt("svg"), n = Qt("g"), s = Qt("path"), l = Qt("path"), o = Qt("path"), r = Qt("path"), a = Qt("g"), c = Qt("path"), f = Qt("path"), h = Qt("path"), _ = Qt("path"), ke(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ke(s, "fill", "#FF7C00"), ke(s, "fill-opacity", "0.4"), ke(s, "class", "svelte-43sxxs"), ke(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ke(l, "fill", "#FF7C00"), ke(l, "class", "svelte-43sxxs"), ke(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ke(o, "fill", "#FF7C00"), ke(o, "fill-opacity", "0.4"), ke(o, "class", "svelte-43sxxs"), ke(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ke(r, "fill", "#FF7C00"), ke(r, "class", "svelte-43sxxs"), Js(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ke(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ke(c, "fill", "#FF7C00"), ke(c, "fill-opacity", "0.4"), ke(c, "class", "svelte-43sxxs"), ke(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ke(f, "fill", "#FF7C00"), ke(f, "class", "svelte-43sxxs"), ke(h, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ke(h, "fill", "#FF7C00"), ke(h, "fill-opacity", "0.4"), ke(h, "class", "svelte-43sxxs"), ke(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ke(_, "fill", "#FF7C00"), ke(_, "class", "svelte-43sxxs"), Js(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ke(t, "viewBox", "-1200 -1200 3000 3000"), ke(t, "fill", "none"), ke(t, "xmlns", "http://www.w3.org/2000/svg"), ke(t, "class", "svelte-43sxxs"), ke(e, "class", "svelte-43sxxs"), pr(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, p) {
      c1(d, e, p), Jt(e, t), Jt(t, n), Jt(n, s), Jt(n, l), Jt(n, o), Jt(n, r), Jt(t, a), Jt(a, c), Jt(a, f), Jt(a, h), Jt(a, _);
    },
    p(d, [p]) {
      p & /*$top*/
      2 && Js(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), p & /*$bottom*/
      4 && Js(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), p & /*margin*/
      1 && pr(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: gr,
    o: gr,
    d(d) {
      d && o1(e);
    }
  };
}
function d1(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(d, p, g, u) {
    function b(y) {
      return y instanceof g ? y : new g(function(w) {
        w(y);
      });
    }
    return new (g || (g = Promise))(function(y, w) {
      function x(X) {
        try {
          k(u.next(X));
        } catch (W) {
          w(W);
        }
      }
      function Y(X) {
        try {
          k(u.throw(X));
        } catch (W) {
          w(W);
        }
      }
      function k(X) {
        X.done ? y(X.value) : b(X.value).then(x, Y);
      }
      k((u = u.apply(d, p || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = _r([0, 0]);
  mr(i, r, (d) => t(1, n = d));
  const a = _r([0, 0]);
  mr(i, a, (d) => t(2, s = d));
  let c;
  function f() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function h() {
    return l(this, void 0, void 0, function* () {
      yield f(), c || h();
    });
  }
  function _() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), h();
    });
  }
  return u1(() => (_(), () => c = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, s, r, a];
}
class _1 extends l1 {
  constructor(e) {
    super(), r1(this, e, d1, h1, f1, { margin: 0 });
  }
}
const {
  SvelteComponent: m1,
  append: Ci,
  attr: ln,
  binding_callbacks: br,
  check_outros: aa,
  create_component: kf,
  create_slot: yf,
  destroy_component: Cf,
  destroy_each: Sf,
  detach: fe,
  element: pn,
  empty: cs,
  ensure_array_like: Yl,
  get_all_dirty_from_scope: Mf,
  get_slot_changes: Wf,
  group_outros: ra,
  init: g1,
  insert: ue,
  mount_component: zf,
  noop: ca,
  safe_not_equal: p1,
  set_data: Vt,
  set_style: ti,
  space: Nt,
  text: Fe,
  toggle_class: Ot,
  transition_in: sn,
  transition_out: bn,
  update_slot_base: xf
} = window.__gradio__svelte__internal, { tick: b1 } = window.__gradio__svelte__internal, { onDestroy: v1 } = window.__gradio__svelte__internal, { createEventDispatcher: w1 } = window.__gradio__svelte__internal, k1 = (i) => ({}), vr = (i) => ({}), y1 = (i) => ({}), wr = (i) => ({});
function kr(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function yr(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function C1(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new Tl({
    props: {
      Icon: cf,
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
  ), f = yf(
    c,
    i,
    /*$$scope*/
    i[29],
    vr
  );
  return {
    c() {
      e = pn("div"), kf(t.$$.fragment), n = Nt(), s = pn("span"), o = Fe(l), r = Nt(), f && f.c(), ln(e, "class", "clear-status svelte-16nch4a"), ln(s, "class", "error svelte-16nch4a");
    },
    m(h, _) {
      ue(h, e, _), zf(t, e, null), ue(h, n, _), ue(h, s, _), Ci(s, o), ue(h, r, _), f && f.m(h, _), a = !0;
    },
    p(h, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      h[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      h[1]("common.error") + "") && Vt(o, l), f && f.p && (!a || _[0] & /*$$scope*/
      536870912) && xf(
        f,
        c,
        h,
        /*$$scope*/
        h[29],
        a ? Wf(
          c,
          /*$$scope*/
          h[29],
          _,
          k1
        ) : Mf(
          /*$$scope*/
          h[29]
        ),
        vr
      );
    },
    i(h) {
      a || (sn(t.$$.fragment, h), sn(f, h), a = !0);
    },
    o(h) {
      bn(t.$$.fragment, h), bn(f, h), a = !1;
    },
    d(h) {
      h && (fe(e), fe(n), fe(s), fe(r)), Cf(t), f && f.d(h);
    }
  };
}
function S1(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Cr(i)
  );
  function h(w, x) {
    if (
      /*progress*/
      w[7]
    ) return z1;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return W1;
    if (
      /*queue_position*/
      w[2] === 0
    ) return M1;
  }
  let _ = h(i), d = _ && _(i), p = (
    /*timer*/
    i[5] && Wr(i)
  );
  const g = [B1, Y1], u = [];
  function b(w, x) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = b(i)) && (o = u[l] = g[l](i));
  let y = !/*timer*/
  i[5] && Er(i);
  return {
    c() {
      f && f.c(), e = Nt(), t = pn("div"), d && d.c(), n = Nt(), p && p.c(), s = Nt(), o && o.c(), r = Nt(), y && y.c(), a = cs(), ln(t, "class", "progress-text svelte-16nch4a"), Ot(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Ot(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, x) {
      f && f.m(w, x), ue(w, e, x), ue(w, t, x), d && d.m(t, null), Ci(t, n), p && p.m(t, null), ue(w, s, x), ~l && u[l].m(w, x), ue(w, r, x), y && y.m(w, x), ue(w, a, x), c = !0;
    },
    p(w, x) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, x) : (f = Cr(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), _ === (_ = h(w)) && d ? d.p(w, x) : (d && d.d(1), d = _ && _(w), d && (d.c(), d.m(t, n))), /*timer*/
      w[5] ? p ? p.p(w, x) : (p = Wr(w), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!c || x[0] & /*variant*/
      256) && Ot(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || x[0] & /*variant*/
      256) && Ot(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let Y = l;
      l = b(w), l === Y ? ~l && u[l].p(w, x) : (o && (ra(), bn(u[Y], 1, 1, () => {
        u[Y] = null;
      }), aa()), ~l ? (o = u[l], o ? o.p(w, x) : (o = u[l] = g[l](w), o.c()), sn(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? y && (ra(), bn(y, 1, 1, () => {
        y = null;
      }), aa()) : y ? (y.p(w, x), x[0] & /*timer*/
      32 && sn(y, 1)) : (y = Er(w), y.c(), sn(y, 1), y.m(a.parentNode, a));
    },
    i(w) {
      c || (sn(o), sn(y), c = !0);
    },
    o(w) {
      bn(o), bn(y), c = !1;
    },
    d(w) {
      w && (fe(e), fe(t), fe(s), fe(r), fe(a)), f && f.d(w), d && d.d(), p && p.d(), ~l && u[l].d(w), y && y.d(w);
    }
  };
}
function Cr(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = pn("div"), ln(e, "class", "eta-bar svelte-16nch4a"), ti(e, "transform", t);
    },
    m(n, s) {
      ue(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && ti(e, "transform", t);
    },
    d(n) {
      n && fe(e);
    }
  };
}
function M1(i) {
  let e;
  return {
    c() {
      e = Fe("processing |");
    },
    m(t, n) {
      ue(t, e, n);
    },
    p: ca,
    d(t) {
      t && fe(e);
    }
  };
}
function W1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = Fe("queue: "), n = Fe(t), s = Fe("/"), l = Fe(
        /*queue_size*/
        i[3]
      ), o = Fe(" |");
    },
    m(r, a) {
      ue(r, e, a), ue(r, n, a), ue(r, s, a), ue(r, l, a), ue(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Vt(n, t), a[0] & /*queue_size*/
      8 && Vt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (fe(e), fe(n), fe(s), fe(l), fe(o));
    }
  };
}
function z1(i) {
  let e, t = Yl(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Mr(yr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = cs();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ue(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = Yl(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = yr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Mr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && fe(e), Sf(n, s);
    }
  };
}
function Sr(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, h) {
    return (
      /*p*/
      f[41].length != null ? X1 : x1
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Nt(), n = Fe(t), s = Fe(" | "), o = Fe(l);
    },
    m(f, h) {
      c.m(f, h), ue(f, e, h), ue(f, n, h), ue(f, s, h), ue(f, o, h);
    },
    p(f, h) {
      a === (a = r(f)) && c ? c.p(f, h) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), h[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && Vt(n, t);
    },
    d(f) {
      f && (fe(e), fe(n), fe(s), fe(o)), c.d(f);
    }
  };
}
function x1(i) {
  let e = is(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Fe(e);
    },
    m(n, s) {
      ue(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = is(
        /*p*/
        n[41].index || 0
      ) + "") && Vt(t, e);
    },
    d(n) {
      n && fe(t);
    }
  };
}
function X1(i) {
  let e = is(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = is(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = Fe(e), n = Fe("/"), l = Fe(s);
    },
    m(o, r) {
      ue(o, t, r), ue(o, n, r), ue(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = is(
        /*p*/
        o[41].index || 0
      ) + "") && Vt(t, e), r[0] & /*progress*/
      128 && s !== (s = is(
        /*p*/
        o[41].length
      ) + "") && Vt(l, s);
    },
    d(o) {
      o && (fe(t), fe(n), fe(l));
    }
  };
}
function Mr(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Sr(i)
  );
  return {
    c() {
      t && t.c(), e = cs();
    },
    m(n, s) {
      t && t.m(n, s), ue(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Sr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && fe(e), t && t.d(n);
    }
  };
}
function Wr(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = Fe(
        /*formatted_timer*/
        i[20]
      ), n = Fe(t), s = Fe("s");
    },
    m(l, o) {
      ue(l, e, o), ue(l, n, o), ue(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Vt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Vt(n, t);
    },
    d(l) {
      l && (fe(e), fe(n), fe(s));
    }
  };
}
function Y1(i) {
  let e, t;
  return e = new _1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      kf(e.$$.fragment);
    },
    m(n, s) {
      zf(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (sn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cf(e, n);
    }
  };
}
function B1(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && zr(i)
  );
  return {
    c() {
      e = pn("div"), t = pn("div"), r && r.c(), n = Nt(), s = pn("div"), l = pn("div"), ln(t, "class", "progress-level-inner svelte-16nch4a"), ln(l, "class", "progress-bar svelte-16nch4a"), ti(l, "width", o), ln(s, "class", "progress-bar-wrap svelte-16nch4a"), ln(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      ue(a, e, c), Ci(e, t), r && r.m(t, null), Ci(e, n), Ci(e, s), Ci(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = zr(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && ti(l, "width", o);
    },
    i: ca,
    o: ca,
    d(a) {
      a && fe(e), r && r.d(), i[31](null);
    }
  };
}
function zr(i) {
  let e, t = Yl(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Dr(kr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = cs();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ue(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = Yl(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = kr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Dr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && fe(e), Sf(n, s);
    }
  };
}
function xr(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && D1()
  ), o = (
    /*p*/
    i[41].desc != null && Xr(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Yr()
  ), a = (
    /*progress_level*/
    i[14] != null && Br(i)
  );
  return {
    c() {
      l && l.c(), e = Nt(), o && o.c(), t = Nt(), r && r.c(), n = Nt(), a && a.c(), s = cs();
    },
    m(c, f) {
      l && l.m(c, f), ue(c, e, f), o && o.m(c, f), ue(c, t, f), r && r.m(c, f), ue(c, n, f), a && a.m(c, f), ue(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = Xr(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = Yr(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = Br(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (fe(e), fe(t), fe(n), fe(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function D1(i) {
  let e;
  return {
    c() {
      e = Fe(" /");
    },
    m(t, n) {
      ue(t, e, n);
    },
    d(t) {
      t && fe(e);
    }
  };
}
function Xr(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = Fe(e);
    },
    m(n, s) {
      ue(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Vt(t, e);
    },
    d(n) {
      n && fe(t);
    }
  };
}
function Yr(i) {
  let e;
  return {
    c() {
      e = Fe("-");
    },
    m(t, n) {
      ue(t, e, n);
    },
    d(t) {
      t && fe(e);
    }
  };
}
function Br(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = Fe(e), n = Fe("%");
    },
    m(s, l) {
      ue(s, t, l), ue(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && Vt(t, e);
    },
    d(s) {
      s && (fe(t), fe(n));
    }
  };
}
function Dr(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && xr(i)
  );
  return {
    c() {
      t && t.c(), e = cs();
    },
    m(n, s) {
      t && t.m(n, s), ue(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = xr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && fe(e), t && t.d(n);
    }
  };
}
function Er(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = yf(
    l,
    i,
    /*$$scope*/
    i[29],
    wr
  );
  return {
    c() {
      e = pn("p"), t = Fe(
        /*loading_text*/
        i[9]
      ), n = Nt(), o && o.c(), ln(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      ue(r, e, a), Ci(e, t), ue(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && Vt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && xf(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Wf(
          l,
          /*$$scope*/
          r[29],
          a,
          y1
        ) : Mf(
          /*$$scope*/
          r[29]
        ),
        wr
      );
    },
    i(r) {
      s || (sn(o, r), s = !0);
    },
    o(r) {
      bn(o, r), s = !1;
    },
    d(r) {
      r && (fe(e), fe(n)), o && o.d(r);
    }
  };
}
function E1(i) {
  let e, t, n, s, l;
  const o = [S1, C1], r = [];
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
      e = pn("div"), n && n.c(), ln(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Ot(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Ot(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Ot(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Ot(
        e,
        "border",
        /*border*/
        i[12]
      ), ti(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), ti(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      ue(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let h = t;
      t = a(c), t === h ? ~t && r[t].p(c, f) : (n && (ra(), bn(r[h], 1, 1, () => {
        r[h] = null;
      }), aa()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), sn(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && ln(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Ot(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ot(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && Ot(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && Ot(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && ti(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && ti(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (sn(n), l = !0);
    },
    o(c) {
      bn(n), l = !1;
    },
    d(c) {
      c && fe(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var R1 = function(i, e, t, n) {
  function s(l) {
    return l instanceof t ? l : new t(function(o) {
      o(l);
    });
  }
  return new (t || (t = Promise))(function(l, o) {
    function r(f) {
      try {
        c(n.next(f));
      } catch (h) {
        o(h);
      }
    }
    function a(f) {
      try {
        c(n.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function c(f) {
      f.done ? l(f.value) : s(f.value).then(r, a);
    }
    c((n = n.apply(i, e || [])).next());
  });
};
let Qs = [], yo = !1;
function H1(i) {
  return R1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Qs.push(e), !yo) yo = !0;
      else return;
      yield b1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < Qs.length; s++) {
          const o = Qs[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), yo = !1, Qs = [];
      });
    }
  });
}
function L1(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = w1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: h } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: p = "full" } = e, { message: g = null } = e, { progress: u = null } = e, { variant: b = "default" } = e, { loading_text: y = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: x = !1 } = e, { border: Y = !1 } = e, { autoscroll: k } = e, X, W = !1, v = 0, S = 0, R = null, E = null, z = 0, F = null, q, O = null, G = !0;
  const C = () => {
    t(0, a = t(27, R = t(19, Z = null))), t(25, v = performance.now()), t(26, S = 0), W = !0, L();
  };
  function L() {
    requestAnimationFrame(() => {
      t(26, S = (performance.now() - v) / 1e3), W && L();
    });
  }
  function le() {
    t(26, S = 0), t(0, a = t(27, R = t(19, Z = null))), W && (W = !1);
  }
  v1(() => {
    W && le();
  });
  let Z = null;
  function U(P) {
    br[P ? "unshift" : "push"](() => {
      O = P, t(16, O), t(7, u), t(14, F), t(15, q);
    });
  }
  const pe = () => {
    o("clear_status");
  };
  function J(P) {
    br[P ? "unshift" : "push"](() => {
      X = P, t(13, X);
    });
  }
  return i.$$set = (P) => {
    "i18n" in P && t(1, r = P.i18n), "eta" in P && t(0, a = P.eta), "queue_position" in P && t(2, c = P.queue_position), "queue_size" in P && t(3, f = P.queue_size), "status" in P && t(4, h = P.status), "scroll_to_output" in P && t(22, _ = P.scroll_to_output), "timer" in P && t(5, d = P.timer), "show_progress" in P && t(6, p = P.show_progress), "message" in P && t(23, g = P.message), "progress" in P && t(7, u = P.progress), "variant" in P && t(8, b = P.variant), "loading_text" in P && t(9, y = P.loading_text), "absolute" in P && t(10, w = P.absolute), "translucent" in P && t(11, x = P.translucent), "border" in P && t(12, Y = P.border), "autoscroll" in P && t(24, k = P.autoscroll), "$$scope" in P && t(29, l = P.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = R), a != null && R !== a && (t(28, E = (performance.now() - v) / 1e3 + a), t(19, Z = E.toFixed(1)), t(27, R = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, z = E === null || E <= 0 || !S ? null : Math.min(S / E, 1)), i.$$.dirty[0] & /*progress*/
    128 && u != null && t(18, G = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (u != null ? t(14, F = u.map((P) => {
      if (P.index != null && P.length != null)
        return P.index / P.length;
      if (P.progress != null)
        return P.progress;
    })) : t(14, F = null), F ? (t(15, q = F[F.length - 1]), O && (q === 0 ? t(16, O.style.transition = "0", O) : t(16, O.style.transition = "150ms", O))) : t(15, q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (h === "pending" ? C() : le()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && X && _ && (h === "pending" || h === "complete") && H1(X, k), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = S.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    h,
    d,
    p,
    u,
    b,
    y,
    w,
    x,
    Y,
    X,
    F,
    q,
    O,
    z,
    G,
    Z,
    n,
    o,
    _,
    g,
    k,
    v,
    S,
    R,
    E,
    l,
    s,
    U,
    pe,
    J
  ];
}
class P1 extends m1 {
  constructor(e) {
    super(), g1(
      this,
      e,
      L1,
      E1,
      p1,
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
const { setContext: h3, getContext: q1 } = window.__gradio__svelte__internal, I1 = "WORKER_PROXY_CONTEXT_KEY";
function Xf() {
  return q1(I1);
}
function A1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Yf(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function Bf(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!A1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function j1(i) {
  if (i == null || !Bf(i))
    return i;
  const e = Xf();
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
      type: Yf(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: F1,
  assign: Bl,
  check_outros: Df,
  compute_rest_props: Rr,
  create_slot: Ca,
  detach: Kl,
  element: Ef,
  empty: Rf,
  exclude_internal_props: T1,
  get_all_dirty_from_scope: Sa,
  get_slot_changes: Ma,
  get_spread_update: Hf,
  group_outros: Lf,
  init: O1,
  insert: Zl,
  listen: Pf,
  prevent_default: U1,
  safe_not_equal: N1,
  set_attributes: Dl,
  transition_in: Yi,
  transition_out: Bi,
  update_slot_base: Wa
} = window.__gradio__svelte__internal, { createEventDispatcher: V1 } = window.__gradio__svelte__internal;
function K1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Ca(
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
    c = Bl(c, a[f]);
  return {
    c() {
      e = Ef("a"), r && r.c(), Dl(e, c);
    },
    m(f, h) {
      Zl(f, e, h), r && r.m(e, null), n = !0, s || (l = Pf(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, h) {
      r && r.p && (!n || h & /*$$scope*/
      128) && Wa(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? Ma(
          o,
          /*$$scope*/
          f[7],
          h,
          null
        ) : Sa(
          /*$$scope*/
          f[7]
        ),
        null
      ), Dl(e, c = Hf(a, [
        (!n || h & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || h & /*download*/
        2) && { download: (
          /*download*/
          f[1]
        ) },
        h & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ]));
    },
    i(f) {
      n || (Yi(r, f), n = !0);
    },
    o(f) {
      Bi(r, f), n = !1;
    },
    d(f) {
      f && Kl(e), r && r.d(f), s = !1, l();
    }
  };
}
function Z1(i) {
  let e, t, n, s;
  const l = [J1, G1], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Rf();
    },
    m(a, c) {
      o[e].m(a, c), Zl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Lf(), Bi(o[f], 1, 1, () => {
        o[f] = null;
      }), Df(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Yi(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Yi(t), s = !0);
    },
    o(a) {
      Bi(t), s = !1;
    },
    d(a) {
      a && Kl(n), o[e].d(a);
    }
  };
}
function G1(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Ca(
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
    a = Bl(a, r[c]);
  return {
    c() {
      e = Ef("a"), o && o.c(), Dl(e, a);
    },
    m(c, f) {
      Zl(c, e, f), o && o.m(e, null), t = !0, n || (s = Pf(e, "click", U1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && Wa(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? Ma(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Sa(
          /*$$scope*/
          c[7]
        ),
        null
      ), Dl(e, a = Hf(r, [
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
      t || (Yi(o, c), t = !0);
    },
    o(c) {
      Bi(o, c), t = !1;
    },
    d(c) {
      c && Kl(e), o && o.d(c), n = !1, s();
    }
  };
}
function J1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Ca(
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
      128) && Wa(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? Ma(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Sa(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (Yi(n, s), e = !0);
    },
    o(s) {
      Bi(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Q1(i) {
  let e, t, n, s, l;
  const o = [Z1, K1], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && Bf(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Rf();
    },
    m(c, f) {
      r[t].m(c, f), Zl(c, s, f), l = !0;
    },
    p(c, [f]) {
      let h = t;
      t = a(c, f), t === h ? r[t].p(c, f) : (Lf(), Bi(r[h], 1, 1, () => {
        r[h] = null;
      }), Df(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Yi(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (Yi(n), l = !0);
    },
    o(c) {
      Bi(n), l = !1;
    },
    d(c) {
      c && Kl(s), r[t].d(c);
    }
  };
}
function $1(i, e, t) {
  const n = ["href", "download"];
  let s = Rr(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(p, g, u, b) {
    function y(w) {
      return w instanceof u ? w : new u(function(x) {
        x(w);
      });
    }
    return new (u || (u = Promise))(function(w, x) {
      function Y(W) {
        try {
          X(b.next(W));
        } catch (v) {
          x(v);
        }
      }
      function k(W) {
        try {
          X(b.throw(W));
        } catch (v) {
          x(v);
        }
      }
      function X(W) {
        W.done ? w(W.value) : y(W.value).then(Y, k);
      }
      X((b = b.apply(p, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = V1();
  let h = !1;
  const _ = Xf();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (h)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const g = new URL(a, window.location.href).pathname;
      t(2, h = !0), _.httpRequest({
        method: "GET",
        path: g,
        headers: {},
        query_string: ""
      }).then((u) => {
        if (u.status !== 200)
          throw new Error(`Failed to get file ${g} from the Wasm worker.`);
        const b = new Blob(
          [u.body],
          {
            type: Yf(u.headers, "content-type")
          }
        ), y = URL.createObjectURL(b), w = document.createElement("a");
        w.href = y, w.download = c, w.click(), URL.revokeObjectURL(y);
      }).finally(() => {
        t(2, h = !1);
      });
    });
  }
  return i.$$set = (p) => {
    e = Bl(Bl({}, e), T1(p)), t(6, s = Rr(e, n)), "href" in p && t(0, a = p.href), "download" in p && t(1, c = p.download), "$$scope" in p && t(7, o = p.$$scope);
  }, [
    a,
    c,
    h,
    f,
    _,
    d,
    s,
    o,
    l
  ];
}
class e0 extends F1 {
  constructor(e) {
    super(), O1(this, e, $1, Q1, N1, { href: 0, download: 1 });
  }
}
var t0 = Object.defineProperty, n0 = (i, e, t) => e in i ? t0(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, wn = (i, e, t) => (n0(i, typeof e != "symbol" ? e + "" : e, t), t), qf = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, gs = (i, e, t) => (qf(i, e, "read from private field"), t ? t.call(i) : e.get(i)), i0 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, s0 = (i, e, t, n) => (qf(i, e, "write to private field"), e.set(i, t), t), Jn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function If(i, e) {
  return i.map(
    (t) => new l0({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class l0 {
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
    wn(this, "path"), wn(this, "url"), wn(this, "orig_name"), wn(this, "size"), wn(this, "blob"), wn(this, "is_stream"), wn(this, "mime_type"), wn(this, "alt_text"), wn(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class d3 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = gs(this, Jn) + t; ; ) {
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
        s0(this, Jn, t);
      },
      flush: (t) => {
        if (gs(this, Jn) === "")
          return;
        const n = e.allowCR && gs(this, Jn).endsWith("\r") ? gs(this, Jn).slice(0, -1) : gs(this, Jn);
        t.enqueue(n);
      }
    }), i0(this, Jn, "");
  }
}
Jn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: o0,
  append: Xt,
  attr: bi,
  detach: Af,
  element: vi,
  init: a0,
  insert: jf,
  noop: Hr,
  safe_not_equal: r0,
  set_data: El,
  set_style: Co,
  space: fa,
  text: ss,
  toggle_class: Lr
} = window.__gradio__svelte__internal, { onMount: c0, createEventDispatcher: f0, onDestroy: u0 } = window.__gradio__svelte__internal;
function Pr(i) {
  let e, t, n, s, l = Ws(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), h;
  return {
    c() {
      e = vi("div"), t = vi("span"), n = vi("div"), s = vi("progress"), o = ss(l), a = fa(), c = vi("span"), h = ss(f), Co(s, "visibility", "hidden"), Co(s, "height", "0"), Co(s, "width", "0"), s.value = r = Ws(
        /*file_to_display*/
        i[2]
      ), bi(s, "max", "100"), bi(s, "class", "svelte-cr2edf"), bi(n, "class", "progress-bar svelte-cr2edf"), bi(c, "class", "file-name svelte-cr2edf"), bi(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      jf(_, e, d), Xt(e, t), Xt(t, n), Xt(n, s), Xt(s, o), Xt(e, a), Xt(e, c), Xt(c, h);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && l !== (l = Ws(
        /*file_to_display*/
        _[2]
      ) + "") && El(o, l), d & /*file_to_display*/
      4 && r !== (r = Ws(
        /*file_to_display*/
        _[2]
      )) && (s.value = r), d & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      _[2].orig_name + "") && El(h, f);
    },
    d(_) {
      _ && Af(e);
    }
  };
}
function h0(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, h = (
    /*file_to_display*/
    i[2] && Pr(i)
  );
  return {
    c() {
      e = vi("div"), t = vi("span"), n = ss("Uploading "), l = ss(s), o = fa(), a = ss(r), c = ss("..."), f = fa(), h && h.c(), bi(t, "class", "uploading svelte-cr2edf"), bi(e, "class", "wrap svelte-cr2edf"), Lr(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      jf(_, e, d), Xt(e, t), Xt(t, n), Xt(t, l), Xt(t, o), Xt(t, a), Xt(t, c), Xt(e, f), h && h.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      _[0].length + "") && El(l, s), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && El(a, r), /*file_to_display*/
      _[2] ? h ? h.p(_, d) : (h = Pr(_), h.c(), h.m(e, null)) : h && (h.d(1), h = null), d & /*progress*/
      2 && Lr(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Hr,
    o: Hr,
    d(_) {
      _ && Af(e), h && h.d();
    }
  };
}
function Ws(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function d0(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Ws(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function _0(i, e, t) {
  var n = this && this.__awaiter || function(g, u, b, y) {
    function w(x) {
      return x instanceof b ? x : new b(function(Y) {
        Y(x);
      });
    }
    return new (b || (b = Promise))(function(x, Y) {
      function k(v) {
        try {
          W(y.next(v));
        } catch (S) {
          Y(S);
        }
      }
      function X(v) {
        try {
          W(y.throw(v));
        } catch (S) {
          Y(S);
        }
      }
      function W(v) {
        v.done ? x(v.value) : w(v.value).then(k, X);
      }
      W((y = y.apply(g, u || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, h, _ = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const d = f0();
  function p(g, u) {
    t(0, _ = _.map((b) => (b.orig_name === g && (b.progress += u), b)));
  }
  return c0(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const u = JSON.parse(g.data);
        c || t(1, c = !0), u.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, f = u), p(u.orig_name, u.chunk_size));
      });
    };
  })), u0(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && d0(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, h = f || _[0]);
  }, [
    _,
    c,
    h,
    s,
    l,
    o,
    r,
    f
  ];
}
class m0 extends o0 {
  constructor(e) {
    super(), a0(this, e, _0, h0, r0, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: g0,
  append: qr,
  attr: mt,
  binding_callbacks: p0,
  bubble: oi,
  check_outros: Ff,
  create_component: b0,
  create_slot: Tf,
  destroy_component: v0,
  detach: Gl,
  element: ua,
  empty: Of,
  get_all_dirty_from_scope: Uf,
  get_slot_changes: Nf,
  group_outros: Vf,
  init: w0,
  insert: Jl,
  listen: Pt,
  mount_component: k0,
  prevent_default: ai,
  run_all: y0,
  safe_not_equal: C0,
  set_style: Kf,
  space: S0,
  stop_propagation: ri,
  toggle_class: rt,
  transition_in: ni,
  transition_out: Di,
  update_slot_base: Zf
} = window.__gradio__svelte__internal, { createEventDispatcher: M0, tick: W0 } = window.__gradio__svelte__internal;
function z0(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = Tf(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ua("button"), d && d.c(), t = S0(), n = ua("input"), mt(n, "aria-label", "file upload"), mt(n, "data-testid", "file-upload"), mt(n, "type", "file"), mt(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, mt(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), mt(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), mt(n, "class", "svelte-1s26xmt"), mt(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), mt(e, "class", "svelte-1s26xmt"), rt(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), rt(
        e,
        "center",
        /*center*/
        i[4]
      ), rt(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), rt(
        e,
        "flex",
        /*flex*/
        i[5]
      ), rt(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Kf(e, "height", "100%");
    },
    m(p, g) {
      Jl(p, e, g), d && d.m(e, null), qr(e, t), qr(e, n), i[34](n), c = !0, f || (h = [
        Pt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Pt(e, "drag", ri(ai(
          /*drag_handler*/
          i[27]
        ))),
        Pt(e, "dragstart", ri(ai(
          /*dragstart_handler*/
          i[28]
        ))),
        Pt(e, "dragend", ri(ai(
          /*dragend_handler*/
          i[29]
        ))),
        Pt(e, "dragover", ri(ai(
          /*dragover_handler*/
          i[30]
        ))),
        Pt(e, "dragenter", ri(ai(
          /*dragenter_handler*/
          i[31]
        ))),
        Pt(e, "dragleave", ri(ai(
          /*dragleave_handler*/
          i[32]
        ))),
        Pt(e, "drop", ri(ai(
          /*drop_handler*/
          i[33]
        ))),
        Pt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Pt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Pt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Pt(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(p, g) {
      d && d.p && (!c || g[0] & /*$$scope*/
      33554432) && Zf(
        d,
        _,
        p,
        /*$$scope*/
        p[25],
        c ? Nf(
          _,
          /*$$scope*/
          p[25],
          g,
          null
        ) : Uf(
          /*$$scope*/
          p[25]
        ),
        null
      ), (!c || g[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      p[16] || void 0)) && mt(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      p[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      p[6] === "directory" || void 0)) && mt(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      p[6] === "directory" || void 0)) && mt(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      p[9] ? -1 : 0)) && mt(e, "tabindex", a), (!c || g[0] & /*hidden*/
      512) && rt(
        e,
        "hidden",
        /*hidden*/
        p[9]
      ), (!c || g[0] & /*center*/
      16) && rt(
        e,
        "center",
        /*center*/
        p[4]
      ), (!c || g[0] & /*boundedheight*/
      8) && rt(
        e,
        "boundedheight",
        /*boundedheight*/
        p[3]
      ), (!c || g[0] & /*flex*/
      32) && rt(
        e,
        "flex",
        /*flex*/
        p[5]
      ), (!c || g[0] & /*disable_click*/
      128) && rt(
        e,
        "disable_click",
        /*disable_click*/
        p[7]
      );
    },
    i(p) {
      c || (ni(d, p), c = !0);
    },
    o(p) {
      Di(d, p), c = !1;
    },
    d(p) {
      p && Gl(e), d && d.d(p), i[34](null), f = !1, y0(h);
    }
  };
}
function x0(i) {
  let e, t, n = !/*hidden*/
  i[9] && Ir(i);
  return {
    c() {
      n && n.c(), e = Of();
    },
    m(s, l) {
      n && n.m(s, l), Jl(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (Vf(), Di(n, 1, 1, () => {
        n = null;
      }), Ff()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && ni(n, 1)) : (n = Ir(s), n.c(), ni(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (ni(n), t = !0);
    },
    o(s) {
      Di(n), t = !1;
    },
    d(s) {
      s && Gl(e), n && n.d(s);
    }
  };
}
function X0(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Tf(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ua("button"), r && r.c(), mt(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), mt(e, "class", "svelte-1s26xmt"), rt(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), rt(
        e,
        "center",
        /*center*/
        i[4]
      ), rt(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), rt(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Kf(e, "height", "100%");
    },
    m(a, c) {
      Jl(a, e, c), r && r.m(e, null), n = !0, s || (l = Pt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Zf(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Nf(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : Uf(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && mt(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && rt(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && rt(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && rt(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && rt(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (ni(r, a), n = !0);
    },
    o(a) {
      Di(r, a), n = !1;
    },
    d(a) {
      a && Gl(e), r && r.d(a), s = !1, l();
    }
  };
}
function Ir(i) {
  let e, t;
  return e = new m0({
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
      b0(e.$$.fragment);
    },
    m(n, s) {
      k0(e, n, s), t = !0;
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
      t || (ni(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Di(e.$$.fragment, n), t = !1;
    },
    d(n) {
      v0(e, n);
    }
  };
}
function Y0(i) {
  let e, t, n, s;
  const l = [X0, x0, z0], o = [];
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
      t.c(), n = Of();
    },
    m(a, c) {
      o[e].m(a, c), Jl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Vf(), Di(o[f], 1, 1, () => {
        o[f] = null;
      }), Ff(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), ni(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ni(t), s = !0);
    },
    o(a) {
      Di(t), s = !1;
    },
    d(a) {
      a && Gl(n), o[e].d(a);
    }
  };
}
function B0(i, e, t) {
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
function D0(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(D, I, se, Q) {
    function Ye(H) {
      return H instanceof se ? H : new se(function(Be) {
        Be(H);
      });
    }
    return new (se || (se = Promise))(function(H, Be) {
      function Ne(Ve) {
        try {
          He(Q.next(Ve));
        } catch (nt) {
          Be(nt);
        }
      }
      function Se(Ve) {
        try {
          He(Q.throw(Ve));
        } catch (nt) {
          Be(nt);
        }
      }
      function He(Ve) {
        Ve.done ? H(Ve.value) : Ye(Ve.value).then(Ne, Se);
      }
      He((Q = Q.apply(D, I || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: h = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: p = !1 } = e, { format: g = "file" } = e, { uploading: u = !1 } = e, { hidden_upload: b = null } = e, { show_progress: y = !0 } = e, { max_file_size: w = null } = e, { upload: x } = e, { stream_handler: Y } = e, k, X, W;
  const v = M0(), S = ["image", "video", "audio", "text", "file"], R = (D) => D.startsWith(".") || D.endsWith("/*") ? D : S.includes(D) ? D + "/*" : "." + D;
  function E() {
    t(20, r = !r);
  }
  function z() {
    navigator.clipboard.read().then((D) => l(this, void 0, void 0, function* () {
      for (let I = 0; I < D.length; I++) {
        const se = D[I].types.find((Q) => Q.startsWith("image/"));
        if (se) {
          D[I].getType(se).then((Q) => l(this, void 0, void 0, function* () {
            const Ye = new File([Q], `clipboard.${se.replace("image/", "")}`);
            yield O([Ye]);
          }));
          break;
        }
      }
    }));
  }
  function F() {
    _ || b && (t(2, b.value = "", b), b.click());
  }
  function q(D) {
    return l(this, void 0, void 0, function* () {
      yield W0(), t(14, k = Math.random().toString(36).substring(2, 15)), t(1, u = !0);
      try {
        const I = yield x(D, d, k, w ?? 1 / 0);
        return v("load", h === "single" ? I == null ? void 0 : I[0] : I), t(1, u = !1), I || [];
      } catch (I) {
        return v("error", I.message), t(1, u = !1), [];
      }
    });
  }
  function O(D) {
    return l(this, void 0, void 0, function* () {
      if (!D.length)
        return;
      let I = D.map((se) => new File([se], se instanceof File ? se.name : "file", { type: se.type }));
      return t(15, X = yield If(I)), yield q(X);
    });
  }
  function G(D) {
    return l(this, void 0, void 0, function* () {
      const I = D.target;
      if (I.files)
        if (g != "blob")
          yield O(Array.from(I.files));
        else {
          if (h === "single") {
            v("load", I.files[0]);
            return;
          }
          v("load", I.files);
        }
    });
  }
  function C(D) {
    return l(this, void 0, void 0, function* () {
      var I;
      if (t(20, r = !1), !(!((I = D.dataTransfer) === null || I === void 0) && I.files)) return;
      const se = Array.from(D.dataTransfer.files).filter((Q) => {
        const Ye = "." + Q.name.split(".").pop();
        return Ye && B0(W, Ye, Q.type) || (Ye && Array.isArray(o) ? o.includes(Ye) : Ye === o) ? !0 : (v("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield O(se);
    });
  }
  function L(D) {
    oi.call(this, i, D);
  }
  function le(D) {
    oi.call(this, i, D);
  }
  function Z(D) {
    oi.call(this, i, D);
  }
  function U(D) {
    oi.call(this, i, D);
  }
  function pe(D) {
    oi.call(this, i, D);
  }
  function J(D) {
    oi.call(this, i, D);
  }
  function P(D) {
    oi.call(this, i, D);
  }
  function be(D) {
    p0[D ? "unshift" : "push"](() => {
      b = D, t(2, b);
    });
  }
  return i.$$set = (D) => {
    "filetype" in D && t(0, o = D.filetype), "dragging" in D && t(20, r = D.dragging), "boundedheight" in D && t(3, a = D.boundedheight), "center" in D && t(4, c = D.center), "flex" in D && t(5, f = D.flex), "file_count" in D && t(6, h = D.file_count), "disable_click" in D && t(7, _ = D.disable_click), "root" in D && t(8, d = D.root), "hidden" in D && t(9, p = D.hidden), "format" in D && t(21, g = D.format), "uploading" in D && t(1, u = D.uploading), "hidden_upload" in D && t(2, b = D.hidden_upload), "show_progress" in D && t(10, y = D.show_progress), "max_file_size" in D && t(22, w = D.max_file_size), "upload" in D && t(23, x = D.upload), "stream_handler" in D && t(11, Y = D.stream_handler), "$$scope" in D && t(25, s = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, W = null) : typeof o == "string" ? t(16, W = R(o)) : (t(0, o = o.map(R)), t(16, W = o.join(", "))));
  }, [
    o,
    u,
    b,
    a,
    c,
    f,
    h,
    _,
    d,
    p,
    y,
    Y,
    z,
    F,
    k,
    X,
    W,
    E,
    G,
    C,
    r,
    g,
    w,
    x,
    O,
    s,
    n,
    L,
    le,
    Z,
    U,
    pe,
    J,
    P,
    be
  ];
}
class E0 extends g0 {
  constructor(e) {
    super(), w0(
      this,
      e,
      D0,
      Y0,
      C0,
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
  SvelteComponent: R0,
  append: $s,
  attr: So,
  create_component: H0,
  destroy_component: L0,
  detach: P0,
  element: Mo,
  init: q0,
  insert: I0,
  listen: A0,
  mount_component: j0,
  noop: F0,
  safe_not_equal: T0,
  set_style: O0,
  space: U0,
  text: N0,
  transition_in: V0,
  transition_out: K0
} = window.__gradio__svelte__internal, { createEventDispatcher: Z0 } = window.__gradio__svelte__internal;
function G0(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new df({}), {
    c() {
      e = Mo("button"), t = Mo("div"), n = Mo("span"), H0(s.$$.fragment), l = U0(), r = N0(o), So(n, "class", "icon-wrap svelte-fjcd9c"), So(t, "class", "wrap svelte-fjcd9c"), So(e, "class", "svelte-fjcd9c"), O0(e, "height", "100%");
    },
    m(h, _) {
      I0(h, e, _), $s(e, t), $s(t, n), j0(s, n, null), $s(t, l), $s(t, r), a = !0, c || (f = A0(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: F0,
    i(h) {
      a || (V0(s.$$.fragment, h), a = !0);
    },
    o(h) {
      K0(s.$$.fragment, h), a = !1;
    },
    d(h) {
      h && P0(e), L0(s), c = !1, f();
    }
  };
}
function J0(i) {
  const e = Z0();
  return [e, () => e("click")];
}
class Q0 extends R0 {
  constructor(e) {
    super(), q0(this, e, J0, G0, T0, {});
  }
}
function $0() {
  return navigator.mediaDevices.enumerateDevices();
}
function eg(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Ar(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (eg(l, e), l));
}
function tg(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: ng,
  action_destroyer: ig,
  add_render_callback: sg,
  append: zn,
  attr: tt,
  binding_callbacks: lg,
  check_outros: Xs,
  create_component: fs,
  create_in_transition: og,
  destroy_component: us,
  destroy_each: ag,
  detach: Yt,
  element: Ft,
  empty: za,
  ensure_array_like: jr,
  group_outros: Ys,
  init: rg,
  insert: Bt,
  listen: Rl,
  mount_component: hs,
  noop: xa,
  run_all: cg,
  safe_not_equal: fg,
  set_data: Gf,
  set_input_value: ha,
  space: Rs,
  stop_propagation: ug,
  text: Jf,
  toggle_class: el,
  transition_in: ct,
  transition_out: gt
} = window.__gradio__svelte__internal, { createEventDispatcher: hg, onMount: dg } = window.__gradio__svelte__internal;
function Fr(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function _g(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const _ = [pg, gg], d = [];
  function p(b, y) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = p(i), s = d[n] = _[n](i);
  let g = !/*recording*/
  i[8] && Tr(i), u = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Or(i)
  );
  return {
    c() {
      e = Ft("div"), t = Ft("button"), s.c(), o = Rs(), g && g.c(), r = Rs(), u && u.c(), a = za(), tt(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), tt(t, "class", "svelte-8hqvb6"), tt(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, y) {
      Bt(b, e, y), zn(e, t), d[n].m(t, null), zn(e, o), g && g.m(e, null), Bt(b, r, y), u && u.m(b, y), Bt(b, a, y), c = !0, f || (h = Rl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(b, y) {
      let w = n;
      n = p(b), n === w ? d[n].p(b, y) : (Ys(), gt(d[w], 1, 1, () => {
        d[w] = null;
      }), Xs(), s = d[n], s ? s.p(b, y) : (s = d[n] = _[n](b), s.c()), ct(s, 1), s.m(t, null)), (!c || y[0] & /*mode*/
      2 && l !== (l = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && tt(t, "aria-label", l), /*recording*/
      b[8] ? g && (Ys(), gt(g, 1, 1, () => {
        g = null;
      }), Xs()) : g ? (g.p(b, y), y[0] & /*recording*/
      256 && ct(g, 1)) : (g = Tr(b), g.c(), ct(g, 1), g.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? u ? (u.p(b, y), y[0] & /*options_open, selected_device*/
      1152 && ct(u, 1)) : (u = Or(b), u.c(), ct(u, 1), u.m(a.parentNode, a)) : u && (Ys(), gt(u, 1, 1, () => {
        u = null;
      }), Xs());
    },
    i(b) {
      c || (ct(s), ct(g), ct(u), c = !0);
    },
    o(b) {
      gt(s), gt(g), gt(u), c = !1;
    },
    d(b) {
      b && (Yt(e), Yt(r), Yt(a)), d[n].d(), g && g.d(), u && u.d(b), f = !1, h();
    }
  };
}
function mg(i) {
  let e, t, n, s;
  return t = new Q0({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ft("div"), fs(t.$$.fragment), tt(e, "title", "grant webcam access");
    },
    m(l, o) {
      Bt(l, e, o), hs(t, e, null), s = !0;
    },
    p: xa,
    i(l) {
      s || (ct(t.$$.fragment, l), l && (n || sg(() => {
        n = og(e, i1, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      gt(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && Yt(e), us(t);
    }
  };
}
function gg(i) {
  let e, t, n;
  return t = new $d({}), {
    c() {
      e = Ft("div"), fs(t.$$.fragment), tt(e, "class", "icon svelte-8hqvb6"), tt(e, "title", "capture photo");
    },
    m(s, l) {
      Bt(s, e, l), hs(t, e, null), n = !0;
    },
    p: xa,
    i(s) {
      n || (ct(t.$$.fragment, s), n = !0);
    },
    o(s) {
      gt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Yt(e), us(t);
    }
  };
}
function pg(i) {
  let e, t, n, s;
  const l = [vg, bg], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = za();
    },
    m(a, c) {
      o[e].m(a, c), Bt(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (Ys(), gt(o[f], 1, 1, () => {
        o[f] = null;
      }), Xs(), t = o[e], t || (t = o[e] = l[e](a), t.c()), ct(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ct(t), s = !0);
    },
    o(a) {
      gt(t), s = !1;
    },
    d(a) {
      a && Yt(n), o[e].d(a);
    }
  };
}
function bg(i) {
  let e, t, n;
  return t = new a_({}), {
    c() {
      e = Ft("div"), fs(t.$$.fragment), tt(e, "class", "icon red svelte-8hqvb6"), tt(e, "title", "start recording");
    },
    m(s, l) {
      Bt(s, e, l), hs(t, e, null), n = !0;
    },
    i(s) {
      n || (ct(t.$$.fragment, s), n = !0);
    },
    o(s) {
      gt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Yt(e), us(t);
    }
  };
}
function vg(i) {
  let e, t, n;
  return t = new fm({}), {
    c() {
      e = Ft("div"), fs(t.$$.fragment), tt(e, "class", "icon red svelte-8hqvb6"), tt(e, "title", "stop recording");
    },
    m(s, l) {
      Bt(s, e, l), hs(t, e, null), n = !0;
    },
    i(s) {
      n || (ct(t.$$.fragment, s), n = !0);
    },
    o(s) {
      gt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Yt(e), us(t);
    }
  };
}
function Tr(i) {
  let e, t, n, s, l;
  return t = new ya({}), {
    c() {
      e = Ft("button"), fs(t.$$.fragment), tt(e, "class", "icon svelte-8hqvb6"), tt(e, "aria-label", "select input source");
    },
    m(o, r) {
      Bt(o, e, r), hs(t, e, null), n = !0, s || (l = Rl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: xa,
    i(o) {
      n || (ct(t.$$.fragment, o), n = !0);
    },
    o(o) {
      gt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Yt(e), us(t), s = !1, l();
    }
  };
}
function Or(i) {
  let e, t, n, s, l, o, r;
  n = new ya({});
  function a(h, _) {
    return (
      /*available_video_devices*/
      h[6].length === 0 ? kg : wg
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = Ft("select"), t = Ft("button"), fs(n.$$.fragment), s = Rs(), f.c(), tt(t, "class", "inset-icon svelte-8hqvb6"), tt(e, "class", "select-wrap svelte-8hqvb6"), tt(e, "aria-label", "select source");
    },
    m(h, _) {
      Bt(h, e, _), zn(e, t), hs(n, t, null), zn(t, s), f.m(e, null), l = !0, o || (r = [
        Rl(t, "click", ug(
          /*click_handler_2*/
          i[22]
        )),
        ig(Xa.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Rl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(h, _) {
      c === (c = a(h)) && f ? f.p(h, _) : (f.d(1), f = c(h), f && (f.c(), f.m(e, null)));
    },
    i(h) {
      l || (ct(n.$$.fragment, h), l = !0);
    },
    o(h) {
      gt(n.$$.fragment, h), l = !1;
    },
    d(h) {
      h && Yt(e), us(n), f.d(), o = !1, cg(r);
    }
  };
}
function wg(i) {
  let e, t = jr(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Ur(Fr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = za();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      Bt(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = jr(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Fr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Ur(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && Yt(e), ag(n, s);
    }
  };
}
function kg(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ft("option"), n = Jf(t), e.__value = "", ha(e, e.__value), tt(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      Bt(s, e, l), zn(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Gf(n, t);
    },
    d(s) {
      s && Yt(e);
    }
  };
}
function Ur(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = Ft("option"), n = Jf(t), s = Rs(), e.__value = l = /*device*/
      i[32].deviceId, ha(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, tt(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Bt(r, e, a), zn(e, n), zn(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Gf(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, ha(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Yt(e);
    }
  };
}
function yg(i) {
  let e, t, n, s, l, o;
  const r = [mg, _g], a = [];
  function c(f, h) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = Ft("div"), t = Ft("video"), n = Rs(), l.c(), tt(t, "class", "svelte-8hqvb6"), el(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), el(t, "hide", !/*webcam_accessed*/
      i[9]), tt(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, h) {
      Bt(f, e, h), zn(e, t), i[19](t), zn(e, n), a[s].m(e, null), o = !0;
    },
    p(f, h) {
      (!o || h[0] & /*mirror_webcam*/
      4) && el(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || h[0] & /*webcam_accessed*/
      512) && el(t, "hide", !/*webcam_accessed*/
      f[9]);
      let _ = s;
      s = c(f), s === _ ? a[s].p(f, h) : (Ys(), gt(a[_], 1, 1, () => {
        a[_] = null;
      }), Xs(), l = a[s], l ? l.p(f, h) : (l = a[s] = r[s](f), l.c()), ct(l, 1), l.m(e, null));
    },
    i(f) {
      o || (ct(l), o = !0);
    },
    o(f) {
      gt(l), o = !1;
    },
    d(f) {
      f && Yt(e), i[19](null), a[s].d();
    }
  };
}
function Xa(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Cg(i, e, t) {
  var n = this && this.__awaiter || function(C, L, le, Z) {
    function U(pe) {
      return pe instanceof le ? pe : new le(function(J) {
        J(pe);
      });
    }
    return new (le || (le = Promise))(function(pe, J) {
      function P(I) {
        try {
          D(Z.next(I));
        } catch (se) {
          J(se);
        }
      }
      function be(I) {
        try {
          D(Z.throw(I));
        } catch (se) {
          J(se);
        }
      }
      function D(I) {
        I.done ? pe(I.value) : U(I.value).then(P, be);
      }
      D((Z = Z.apply(C, L || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: h = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: p } = e, { upload: g } = e;
  const u = hg();
  dg(() => r = document.createElement("canvas"));
  const b = (C) => n(void 0, void 0, void 0, function* () {
    const le = C.target.value;
    yield Ar(d, s, le).then((Z) => n(void 0, void 0, void 0, function* () {
      k = Z, t(7, o = l.find((U) => U.deviceId === le) || null), t(10, E = !1);
    }));
  });
  function y() {
    return n(this, void 0, void 0, function* () {
      try {
        Ar(d, s).then((C) => n(this, void 0, void 0, function* () {
          t(9, S = !0), t(6, l = yield $0()), k = C;
        })).then(() => tg(l)).then((C) => {
          t(6, l = C);
          const L = k.getTracks().map((le) => {
            var Z;
            return (Z = le.getSettings()) === null || Z === void 0 ? void 0 : Z.deviceId;
          })[0];
          t(7, o = L && C.find((le) => le.deviceId === L) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && u("error", p("image.no_webcam_support"));
      } catch (C) {
        if (C instanceof DOMException && C.name == "NotAllowedError")
          u("error", p("image.allow_webcam_access"));
        else
          throw C;
      }
    });
  }
  function w() {
    var C = r.getContext("2d");
    (!a || a && x) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, C.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), _ && (C.scale(-1, 1), C.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (L) => {
        u(a ? "stream" : "capture", L);
      },
      "image/png",
      0.8
    ));
  }
  let x = !1, Y = [], k, X, W;
  function v() {
    if (x) {
      W.stop();
      let C = new Blob(Y, { type: X }), L = new FileReader();
      L.onload = function(le) {
        return n(this, void 0, void 0, function* () {
          var Z;
          if (le.target) {
            let U = new File([C], "sample." + X.substring(6));
            const pe = yield If([U]);
            let J = ((Z = yield g(pe, f)) === null || Z === void 0 ? void 0 : Z.filter(Boolean))[0];
            u("capture", J), u("stop_recording");
          }
        });
      }, L.readAsDataURL(C);
    } else {
      u("start_recording"), Y = [];
      let C = ["video/webm", "video/mp4"];
      for (let L of C)
        if (MediaRecorder.isTypeSupported(L)) {
          X = L;
          break;
        }
      if (X === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      W = new MediaRecorder(k, { mimeType: X }), W.addEventListener("dataavailable", function(L) {
        Y.push(L.data);
      }), W.start(200);
    }
    t(8, x = !x);
  }
  let S = !1;
  function R() {
    h === "image" && a && t(8, x = !x), h === "image" ? w() : v(), !x && k && (k.getTracks().forEach((C) => C.stop()), t(5, s.srcObject = null, s), t(9, S = !1));
  }
  a && h === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let E = !1;
  function z(C) {
    C.preventDefault(), C.stopPropagation(), t(10, E = !1);
  }
  function F(C) {
    lg[C ? "unshift" : "push"](() => {
      s = C, t(5, s);
    });
  }
  const q = async () => y(), O = () => t(10, E = !0), G = () => t(10, E = !1);
  return i.$$set = (C) => {
    "streaming" in C && t(0, a = C.streaming), "pending" in C && t(15, c = C.pending), "root" in C && t(16, f = C.root), "mode" in C && t(1, h = C.mode), "mirror_webcam" in C && t(2, _ = C.mirror_webcam), "include_audio" in C && t(17, d = C.include_audio), "i18n" in C && t(3, p = C.i18n), "upload" in C && t(18, g = C.upload);
  }, [
    a,
    h,
    _,
    p,
    Xa,
    s,
    l,
    o,
    x,
    S,
    E,
    b,
    y,
    R,
    z,
    c,
    f,
    d,
    g,
    F,
    q,
    O,
    G
  ];
}
class Sg extends ng {
  constructor(e) {
    super(), rg(
      this,
      e,
      Cg,
      yg,
      fg,
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
    return Xa;
  }
}
const {
  SvelteComponent: Mg,
  append: Tn,
  attr: ne,
  detach: Wg,
  init: zg,
  insert: xg,
  noop: Wo,
  safe_not_equal: Xg,
  set_style: On,
  svg_element: kn
} = window.__gradio__svelte__internal;
function Yg(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = kn("svg"), t = kn("rect"), n = kn("rect"), s = kn("rect"), l = kn("rect"), o = kn("line"), r = kn("line"), a = kn("line"), c = kn("line"), ne(t, "x", "2"), ne(t, "y", "2"), ne(t, "width", "5"), ne(t, "height", "5"), ne(t, "rx", "1"), ne(t, "ry", "1"), ne(t, "stroke-width", "2"), ne(t, "fill", "none"), ne(n, "x", "17"), ne(n, "y", "2"), ne(n, "width", "5"), ne(n, "height", "5"), ne(n, "rx", "1"), ne(n, "ry", "1"), ne(n, "stroke-width", "2"), ne(n, "fill", "none"), ne(s, "x", "2"), ne(s, "y", "17"), ne(s, "width", "5"), ne(s, "height", "5"), ne(s, "rx", "1"), ne(s, "ry", "1"), ne(s, "stroke-width", "2"), ne(s, "fill", "none"), ne(l, "x", "17"), ne(l, "y", "17"), ne(l, "width", "5"), ne(l, "height", "5"), ne(l, "rx", "1"), ne(l, "ry", "1"), ne(l, "stroke-width", "2"), ne(l, "fill", "none"), ne(o, "x1", "7.5"), ne(o, "y1", "4.5"), ne(o, "x2", "16"), ne(o, "y2", "4.5"), On(o, "stroke-width", "2px"), ne(r, "x1", "7.5"), ne(r, "y1", "19.5"), ne(r, "x2", "16"), ne(r, "y2", "19.5"), On(r, "stroke-width", "2px"), ne(a, "x1", "4.5"), ne(a, "y1", "8"), ne(a, "x2", "4.5"), ne(a, "y2", "16"), On(a, "stroke-width", "2px"), ne(c, "x1", "19.5"), ne(c, "y1", "8"), ne(c, "x2", "19.5"), ne(c, "y2", "16"), On(c, "stroke-width", "2px"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "viewBox", "0 0 24 24"), ne(e, "version", "1.1"), ne(e, "xmlns", "http://www.w3.org/2000/svg"), ne(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ne(e, "xml:space", "preserve"), ne(e, "stroke", "currentColor"), On(e, "fill-rule", "evenodd"), On(e, "clip-rule", "evenodd"), On(e, "stroke-linecap", "round"), On(e, "stroke-linejoin", "round");
    },
    m(f, h) {
      xg(f, e, h), Tn(e, t), Tn(e, n), Tn(e, s), Tn(e, l), Tn(e, o), Tn(e, r), Tn(e, a), Tn(e, c);
    },
    p: Wo,
    i: Wo,
    o: Wo,
    d(f) {
      f && Wg(e);
    }
  };
}
class Bg extends Mg {
  constructor(e) {
    super(), zg(this, e, null, Yg, Xg, {});
  }
}
const {
  SvelteComponent: Dg,
  append: zo,
  attr: De,
  detach: Hl,
  init: Eg,
  insert: Ll,
  noop: Nr,
  safe_not_equal: Rg,
  svg_element: Si
} = window.__gradio__svelte__internal;
function Hg(i) {
  let e;
  return {
    c() {
      e = Si("circle"), De(e, "cx", "12"), De(e, "cy", "7.5"), De(e, "r", "2"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "1"), De(e, "opacity", "0.3");
    },
    m(t, n) {
      Ll(t, e, n);
    },
    d(t) {
      t && Hl(e);
    }
  };
}
function Lg(i) {
  let e, t;
  return {
    c() {
      e = Si("circle"), t = Si("circle"), De(e, "cx", "12"), De(e, "cy", "7.5"), De(e, "r", "2.5"), De(e, "fill", "currentColor"), De(e, "opacity", "0.9"), De(t, "cx", "12"), De(t, "cy", "7.5"), De(t, "r", "1.5"), De(t, "fill", "white"), De(t, "opacity", "0.6");
    },
    m(n, s) {
      Ll(n, e, s), Ll(n, t, s);
    },
    d(n) {
      n && (Hl(e), Hl(t));
    }
  };
}
function Pg(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? Lg : Hg
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = Si("svg"), t = Si("path"), n = Si("path"), s = Si("path"), r.c(), De(t, "d", "M9 21h6"), De(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), De(s, "d", "M9 17h6"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "2"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      Ll(a, e, c), zo(e, t), zo(e, n), zo(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: Nr,
    o: Nr,
    d(a) {
      a && Hl(e), r.d();
    }
  };
}
function qg(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class Ig extends Dg {
  constructor(e) {
    super(), Eg(this, e, qg, Pg, Rg, { selected: 1 });
  }
}
const {
  SvelteComponent: Ag,
  append: jg,
  attr: un,
  detach: Fg,
  init: Tg,
  insert: Og,
  noop: xo,
  safe_not_equal: Ug,
  svg_element: Vr
} = window.__gradio__svelte__internal;
function Ng(i) {
  let e, t;
  return {
    c() {
      e = Vr("svg"), t = Vr("circle"), un(t, "cx", "12"), un(t, "cy", "12"), un(t, "r", "10"), un(e, "xmlns", "http://www.w3.org/2000/svg"), un(e, "viewBox", "0 0 24 24"), un(e, "fill", "none"), un(e, "stroke", "currentColor"), un(e, "stroke-width", "2"), un(e, "stroke-linecap", "round"), un(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Og(n, e, s), jg(e, t);
    },
    p: xo,
    i: xo,
    o: xo,
    d(n) {
      n && Fg(e);
    }
  };
}
let Vg = class extends Ag {
  constructor(e) {
    super(), Tg(this, e, null, Ng, Ug, {});
  }
};
const {
  SvelteComponent: Kg,
  append: ps,
  attr: lt,
  detach: Zg,
  init: Gg,
  insert: Jg,
  noop: Xo,
  safe_not_equal: Qg,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function $g(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Ui("svg"), t = Ui("path"), n = Ui("path"), s = Ui("path"), l = Ui("line"), o = Ui("line"), lt(t, "d", "M3 6h18"), lt(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), lt(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), lt(l, "x1", "10"), lt(l, "y1", "11"), lt(l, "x2", "10"), lt(l, "y2", "17"), lt(o, "x1", "14"), lt(o, "y1", "11"), lt(o, "x2", "14"), lt(o, "y2", "17"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "viewBox", "0 0 24 24"), lt(e, "fill", "none"), lt(e, "stroke", "currentColor"), lt(e, "stroke-width", "2"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Jg(r, e, a), ps(e, t), ps(e, n), ps(e, s), ps(e, l), ps(e, o);
    },
    p: Xo,
    i: Xo,
    o: Xo,
    d(r) {
      r && Zg(e);
    }
  };
}
class ep extends Kg {
  constructor(e) {
    super(), Gg(this, e, null, $g, Qg, {});
  }
}
const {
  SvelteComponent: tp,
  append: np,
  attr: $t,
  detach: ip,
  init: sp,
  insert: lp,
  noop: Yo,
  safe_not_equal: op,
  set_style: tl,
  svg_element: Kr
} = window.__gradio__svelte__internal;
function ap(i) {
  let e, t;
  return {
    c() {
      e = Kr("svg"), t = Kr("path"), $t(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), $t(t, "fill", "none"), $t(t, "stroke-width", "2"), $t(e, "width", "100%"), $t(e, "height", "100%"), $t(e, "viewBox", "0 0 24 24"), $t(e, "version", "1.1"), $t(e, "xmlns", "http://www.w3.org/2000/svg"), $t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $t(e, "xml:space", "preserve"), $t(e, "stroke", "currentColor"), tl(e, "fill-rule", "evenodd"), tl(e, "clip-rule", "evenodd"), tl(e, "stroke-linecap", "round"), tl(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      lp(n, e, s), np(e, t);
    },
    p: Yo,
    i: Yo,
    o: Yo,
    d(n) {
      n && ip(e);
    }
  };
}
class rp extends tp {
  constructor(e) {
    super(), sp(this, e, null, ap, op, {});
  }
}
const {
  SvelteComponent: cp,
  append: fp,
  attr: en,
  detach: up,
  init: hp,
  insert: dp,
  noop: Bo,
  safe_not_equal: _p,
  set_style: nl,
  svg_element: Zr
} = window.__gradio__svelte__internal;
function mp(i) {
  let e, t;
  return {
    c() {
      e = Zr("svg"), t = Zr("path"), en(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), en(t, "fill", "none"), en(t, "stroke-width", "2"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24"), en(e, "version", "1.1"), en(e, "xmlns", "http://www.w3.org/2000/svg"), en(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), en(e, "xml:space", "preserve"), en(e, "stroke", "currentColor"), nl(e, "fill-rule", "evenodd"), nl(e, "clip-rule", "evenodd"), nl(e, "stroke-linecap", "round"), nl(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      dp(n, e, s), fp(e, t);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(n) {
      n && up(e);
    }
  };
}
class gp extends cp {
  constructor(e) {
    super(), hp(this, e, null, mp, _p, {});
  }
}
const {
  SvelteComponent: pp,
  append: Gr,
  attr: yn,
  detach: bp,
  init: vp,
  insert: wp,
  noop: Do,
  safe_not_equal: kp,
  set_style: il,
  svg_element: Eo
} = window.__gradio__svelte__internal;
function yp(i) {
  let e, t, n;
  return {
    c() {
      e = Eo("svg"), t = Eo("path"), n = Eo("path"), yn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), yn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), yn(e, "width", "100%"), yn(e, "height", "100%"), yn(e, "viewBox", "0 0 24 24"), yn(e, "xmlns", "http://www.w3.org/2000/svg"), yn(e, "fill", "none"), yn(e, "stroke", "currentColor"), yn(e, "stroke-width", "2"), il(e, "fill-rule", "evenodd"), il(e, "clip-rule", "evenodd"), il(e, "stroke-linecap", "round"), il(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      wp(s, e, l), Gr(e, t), Gr(e, n);
    },
    p: Do,
    i: Do,
    o: Do,
    d(s) {
      s && bp(e);
    }
  };
}
class Cp extends pp {
  constructor(e) {
    super(), vp(this, e, null, yp, kp, {});
  }
}
const {
  SvelteComponent: Sp,
  append: Mp,
  attr: Un,
  detach: Wp,
  init: zp,
  insert: xp,
  noop: Ro,
  safe_not_equal: Xp,
  set_style: sl,
  svg_element: Jr
} = window.__gradio__svelte__internal;
function Yp(i) {
  let e, t;
  return {
    c() {
      e = Jr("svg"), t = Jr("path"), Un(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Un(e, "width", "100%"), Un(e, "height", "100%"), Un(e, "viewBox", "0 0 24 24"), Un(e, "fill", "none"), Un(e, "stroke", "currentColor"), Un(e, "stroke-width", "2"), sl(e, "fill-rule", "evenodd"), sl(e, "clip-rule", "evenodd"), sl(e, "stroke-linecap", "round"), sl(e, "stroke-linejoin", "round"), Un(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      xp(n, e, s), Mp(e, t);
    },
    p: Ro,
    i: Ro,
    o: Ro,
    d(n) {
      n && Wp(e);
    }
  };
}
class Bp extends Sp {
  constructor(e) {
    super(), zp(this, e, null, Yp, Xp, {});
  }
}
const {
  SvelteComponent: Dp,
  append: Ep,
  attr: Nn,
  detach: Rp,
  init: Hp,
  insert: Lp,
  noop: Ho,
  safe_not_equal: Pp,
  set_style: ll,
  svg_element: Qr
} = window.__gradio__svelte__internal;
function qp(i) {
  let e, t;
  return {
    c() {
      e = Qr("svg"), t = Qr("path"), Nn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Nn(e, "width", "100%"), Nn(e, "height", "100%"), Nn(e, "viewBox", "0 0 24 24"), Nn(e, "fill", "none"), Nn(e, "stroke", "currentColor"), Nn(e, "stroke-width", "2"), ll(e, "fill-rule", "evenodd"), ll(e, "clip-rule", "evenodd"), ll(e, "stroke-linecap", "round"), ll(e, "stroke-linejoin", "round"), Nn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      Lp(n, e, s), Ep(e, t);
    },
    p: Ho,
    i: Ho,
    o: Ho,
    d(n) {
      n && Rp(e);
    }
  };
}
class Ip extends Dp {
  constructor(e) {
    super(), Hp(this, e, null, qp, Pp, {});
  }
}
const {
  SvelteComponent: Ap,
  append: $r,
  attr: Wt,
  detach: jp,
  init: Fp,
  insert: Tp,
  noop: Lo,
  safe_not_equal: Op,
  set_style: ol,
  svg_element: Po
} = window.__gradio__svelte__internal;
function Up(i) {
  let e, t, n;
  return {
    c() {
      e = Po("svg"), t = Po("path"), n = Po("path"), Wt(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), Wt(t, "fill", "none"), Wt(t, "stroke-width", "2"), Wt(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), Wt(n, "fill", "none"), Wt(n, "stroke-width", "2"), Wt(e, "width", "100%"), Wt(e, "height", "100%"), Wt(e, "viewBox", "0 0 24 24"), Wt(e, "version", "1.1"), Wt(e, "xmlns", "http://www.w3.org/2000/svg"), Wt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Wt(e, "xml:space", "preserve"), Wt(e, "stroke", "currentColor"), ol(e, "fill-rule", "evenodd"), ol(e, "clip-rule", "evenodd"), ol(e, "stroke-linecap", "round"), ol(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Tp(s, e, l), $r(e, t), $r(e, n);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(s) {
      s && jp(e);
    }
  };
}
class Np extends Ap {
  constructor(e) {
    super(), Fp(this, e, null, Up, Op, {});
  }
}
const {
  SvelteComponent: Vp,
  append: Cn,
  attr: ae,
  detach: Kp,
  init: Zp,
  insert: Gp,
  noop: qo,
  safe_not_equal: Jp,
  svg_element: hn
} = window.__gradio__svelte__internal;
function Qp(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = hn("svg"), t = hn("path"), n = hn("circle"), s = hn("circle"), l = hn("circle"), o = hn("circle"), r = hn("circle"), a = hn("circle"), c = hn("circle"), f = hn("circle"), ae(t, "fill", "none"), ae(t, "stroke", "currentColor"), ae(t, "stroke-width", "1.5"), ae(t, "stroke-linecap", "round"), ae(t, "stroke-linejoin", "round"), ae(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), ae(n, "cx", "7"), ae(n, "cy", "7"), ae(n, "r", "1.5"), ae(n, "fill", "currentColor"), ae(s, "cx", "15"), ae(s, "cy", "9"), ae(s, "r", "1.5"), ae(s, "fill", "currentColor"), ae(l, "cx", "21"), ae(l, "cy", "5"), ae(l, "r", "1.5"), ae(l, "fill", "currentColor"), ae(o, "cx", "25"), ae(o, "cy", "13"), ae(o, "r", "1.5"), ae(o, "fill", "currentColor"), ae(r, "cx", "23"), ae(r, "cy", "21"), ae(r, "r", "1.5"), ae(r, "fill", "currentColor"), ae(a, "cx", "15"), ae(a, "cy", "19"), ae(a, "r", "1.5"), ae(a, "fill", "currentColor"), ae(c, "cx", "9"), ae(c, "cy", "23"), ae(c, "r", "1.5"), ae(c, "fill", "currentColor"), ae(f, "cx", "5"), ae(f, "cy", "15"), ae(f, "r", "1.5"), ae(f, "fill", "currentColor"), ae(e, "xmlns", "http://www.w3.org/2000/svg"), ae(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ae(e, "aria-hidden", "true"), ae(e, "role", "img"), ae(e, "class", "iconify iconify--carbon"), ae(e, "width", "100%"), ae(e, "height", "100%"), ae(e, "preserveAspectRatio", "xMidYMid meet"), ae(e, "viewBox", "0 0 32 32");
    },
    m(h, _) {
      Gp(h, e, _), Cn(e, t), Cn(e, n), Cn(e, s), Cn(e, l), Cn(e, o), Cn(e, r), Cn(e, a), Cn(e, c), Cn(e, f);
    },
    p: qo,
    i: qo,
    o: qo,
    d(h) {
      h && Kp(e);
    }
  };
}
let $p = class extends Vp {
  constructor(e) {
    super(), Zp(this, e, null, Qp, Jp, {});
  }
};
const {
  SvelteComponent: e2,
  append: bs,
  attr: we,
  detach: t2,
  init: n2,
  insert: i2,
  noop: Io,
  safe_not_equal: s2,
  set_style: al,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function l2(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Ni("svg"), t = Ni("circle"), n = Ni("circle"), s = Ni("circle"), l = Ni("circle"), o = Ni("circle"), we(t, "cx", "12"), we(t, "cy", "12"), we(t, "r", "8"), we(t, "stroke-width", "2"), we(t, "fill", "none"), we(n, "cx", "12"), we(n, "cy", "12"), we(n, "r", "4"), we(n, "stroke-width", "1.5"), we(n, "fill", "none"), we(n, "opacity", "0.5"), we(s, "cx", "8"), we(s, "cy", "8"), we(s, "r", "1"), we(s, "fill", "currentColor"), we(s, "opacity", "0.6"), we(l, "cx", "16"), we(l, "cy", "8"), we(l, "r", "1"), we(l, "fill", "currentColor"), we(l, "opacity", "0.6"), we(o, "cx", "12"), we(o, "cy", "16"), we(o, "r", "1"), we(o, "fill", "currentColor"), we(o, "opacity", "0.6"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "version", "1.1"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), we(e, "xml:space", "preserve"), we(e, "stroke", "currentColor"), al(e, "fill-rule", "evenodd"), al(e, "clip-rule", "evenodd"), al(e, "stroke-linecap", "round"), al(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      i2(r, e, a), bs(e, t), bs(e, n), bs(e, s), bs(e, l), bs(e, o);
    },
    p: Io,
    i: Io,
    o: Io,
    d(r) {
      r && t2(e);
    }
  };
}
class o2 extends e2 {
  constructor(e) {
    super(), n2(this, e, null, l2, s2, {});
  }
}
const {
  SvelteComponent: a2,
  append: ec,
  attr: Ht,
  detach: r2,
  init: c2,
  insert: f2,
  noop: Ao,
  safe_not_equal: u2,
  set_style: rl,
  svg_element: jo
} = window.__gradio__svelte__internal;
function h2(i) {
  let e, t, n;
  return {
    c() {
      e = jo("svg"), t = jo("path"), n = jo("path"), Ht(t, "d", "M3 7v6h6"), Ht(t, "stroke-width", "2"), Ht(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), Ht(n, "stroke-width", "2"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24"), Ht(e, "version", "1.1"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ht(e, "xml:space", "preserve"), Ht(e, "stroke", "currentColor"), Ht(e, "fill", "none"), rl(e, "fill-rule", "evenodd"), rl(e, "clip-rule", "evenodd"), rl(e, "stroke-linecap", "round"), rl(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      f2(s, e, l), ec(e, t), ec(e, n);
    },
    p: Ao,
    i: Ao,
    o: Ao,
    d(s) {
      s && r2(e);
    }
  };
}
class d2 extends a2 {
  constructor(e) {
    super(), c2(this, e, null, h2, u2, {});
  }
}
const {
  SvelteComponent: _2,
  append: tc,
  attr: Lt,
  detach: m2,
  init: g2,
  insert: p2,
  noop: Fo,
  safe_not_equal: b2,
  set_style: cl,
  svg_element: To
} = window.__gradio__svelte__internal;
function v2(i) {
  let e, t, n;
  return {
    c() {
      e = To("svg"), t = To("path"), n = To("path"), Lt(t, "d", "M21 7v6h-6"), Lt(t, "stroke-width", "2"), Lt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), Lt(n, "stroke-width", "2"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "version", "1.1"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Lt(e, "xml:space", "preserve"), Lt(e, "stroke", "currentColor"), Lt(e, "fill", "none"), cl(e, "fill-rule", "evenodd"), cl(e, "clip-rule", "evenodd"), cl(e, "stroke-linecap", "round"), cl(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      p2(s, e, l), tc(e, t), tc(e, n);
    },
    p: Fo,
    i: Fo,
    o: Fo,
    d(s) {
      s && m2(e);
    }
  };
}
class w2 extends _2 {
  constructor(e) {
    super(), g2(this, e, null, v2, b2, {});
  }
}
const {
  SvelteComponent: k2,
  append: y2,
  attr: tn,
  detach: C2,
  init: S2,
  insert: M2,
  noop: Oo,
  safe_not_equal: W2,
  set_style: nc,
  svg_element: ic
} = window.__gradio__svelte__internal;
function z2(i) {
  let e, t;
  return {
    c() {
      e = ic("svg"), t = ic("path"), tn(t, "d", "M7 10l5 5 5-5z"), tn(t, "stroke", "none"), tn(e, "width", "100%"), tn(e, "height", "100%"), tn(e, "viewBox", "0 0 24 24"), tn(e, "version", "1.1"), tn(e, "xmlns", "http://www.w3.org/2000/svg"), tn(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), tn(e, "xml:space", "preserve"), tn(e, "stroke", "currentColor"), tn(e, "fill", "currentColor"), nc(e, "fill-rule", "evenodd"), nc(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      M2(n, e, s), y2(e, t);
    },
    p: Oo,
    i: Oo,
    o: Oo,
    d(n) {
      n && C2(e);
    }
  };
}
class sc extends k2 {
  constructor(e) {
    super(), S2(this, e, null, z2, W2, {});
  }
}
const {
  SvelteComponent: x2,
  append: X2,
  attr: Sn,
  detach: Y2,
  init: B2,
  insert: D2,
  noop: Uo,
  safe_not_equal: E2,
  set_style: fl,
  svg_element: lc
} = window.__gradio__svelte__internal;
function R2(i) {
  let e, t;
  return {
    c() {
      e = lc("svg"), t = lc("path"), Sn(t, "d", "M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3"), Sn(t, "stroke-width", "2"), Sn(e, "width", "100%"), Sn(e, "height", "100%"), Sn(e, "viewBox", "0 0 24 24"), Sn(e, "version", "1.1"), Sn(e, "xmlns", "http://www.w3.org/2000/svg"), Sn(e, "stroke", "currentColor"), Sn(e, "fill", "none"), fl(e, "fill-rule", "evenodd"), fl(e, "clip-rule", "evenodd"), fl(e, "stroke-linecap", "round"), fl(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      D2(n, e, s), X2(e, t);
    },
    p: Uo,
    i: Uo,
    o: Uo,
    d(n) {
      n && Y2(e);
    }
  };
}
class H2 extends x2 {
  constructor(e) {
    super(), B2(this, e, null, R2, E2, {});
  }
}
const {
  SvelteComponent: L2,
  append: ul,
  attr: ze,
  detach: P2,
  init: q2,
  insert: I2,
  noop: No,
  safe_not_equal: A2,
  set_style: hl,
  svg_element: vs
} = window.__gradio__svelte__internal;
function j2(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = vs("svg"), t = vs("rect"), n = vs("rect"), s = vs("line"), l = vs("line"), ze(t, "x", "3"), ze(t, "y", "3"), ze(t, "width", "18"), ze(t, "height", "18"), ze(t, "stroke-width", "2"), ze(n, "x", "8"), ze(n, "y", "8"), ze(n, "width", "8"), ze(n, "height", "8"), ze(n, "stroke-width", "1.5"), ze(n, "stroke", "currentColor"), ze(n, "fill", "currentColor"), ze(n, "fill-opacity", "0.3"), ze(s, "x1", "12"), ze(s, "y1", "10"), ze(s, "x2", "12"), ze(s, "y2", "14"), ze(s, "stroke-width", "1"), ze(l, "x1", "10"), ze(l, "y1", "12"), ze(l, "x2", "14"), ze(l, "y2", "12"), ze(l, "stroke-width", "1"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "version", "1.1"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "stroke", "currentColor"), ze(e, "fill", "none"), hl(e, "fill-rule", "evenodd"), hl(e, "clip-rule", "evenodd"), hl(e, "stroke-linecap", "round"), hl(e, "stroke-linejoin", "round");
    },
    m(o, r) {
      I2(o, e, r), ul(e, t), ul(e, n), ul(e, s), ul(e, l);
    },
    p: No,
    i: No,
    o: No,
    d(o) {
      o && P2(e);
    }
  };
}
class F2 extends L2 {
  constructor(e) {
    super(), q2(this, e, null, j2, A2, {});
  }
}
const {
  SvelteComponent: T2,
  append: oc,
  attr: Vo,
  bubble: ac,
  create_component: O2,
  destroy_component: U2,
  detach: Qf,
  element: rc,
  init: N2,
  insert: $f,
  listen: Ko,
  mount_component: V2,
  run_all: K2,
  safe_not_equal: Z2,
  set_data: G2,
  set_input_value: cc,
  space: J2,
  text: Q2,
  transition_in: $2,
  transition_out: eb
} = window.__gradio__svelte__internal, { createEventDispatcher: tb, afterUpdate: nb } = window.__gradio__svelte__internal;
function ib(i) {
  let e;
  return {
    c() {
      e = Q2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      $f(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && G2(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Qf(e);
    }
  };
}
function sb(i) {
  let e, t, n, s, l, o, r;
  return t = new of({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [ib] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = rc("label"), O2(t.$$.fragment), n = J2(), s = rc("input"), Vo(s, "type", "color"), s.disabled = /*disabled*/
      i[3], Vo(s, "class", "svelte-16l8u73"), Vo(e, "class", "block");
    },
    m(a, c) {
      $f(a, e, c), V2(t, e, null), oc(e, n), oc(e, s), cc(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        Ko(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Ko(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Ko(
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
      1 && cc(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || ($2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      eb(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && Qf(e), U2(t), o = !1, K2(r);
    }
  };
}
function lb(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = tb();
  function f() {
    c("change", n), s || c("input");
  }
  nb(() => {
    t(5, s = !1);
  });
  function h(p) {
    ac.call(this, i, p);
  }
  function _(p) {
    ac.call(this, i, p);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (p) => {
    "value" in p && t(0, n = p.value), "value_is_output" in p && t(5, s = p.value_is_output), "label" in p && t(1, l = p.label), "info" in p && t(2, o = p.info), "disabled" in p && t(3, r = p.disabled), "show_label" in p && t(4, a = p.show_label);
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
    h,
    _,
    d
  ];
}
class ob extends T2 {
  constructor(e) {
    super(), N2(this, e, lb, sb, Z2, {
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
  SvelteComponent: ab,
  append: eu,
  attr: je,
  bubble: rb,
  check_outros: cb,
  create_slot: tu,
  detach: qs,
  element: Ql,
  empty: fb,
  get_all_dirty_from_scope: nu,
  get_slot_changes: iu,
  group_outros: ub,
  init: hb,
  insert: Is,
  listen: db,
  safe_not_equal: _b,
  set_style: xt,
  space: su,
  src_url_equal: Pl,
  toggle_class: ls,
  transition_in: ql,
  transition_out: Il,
  update_slot_base: lu
} = window.__gradio__svelte__internal;
function mb(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && fc(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = tu(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Ql("button"), r && r.c(), t = su(), c && c.c(), je(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), je(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], ls(e, "hidden", !/*visible*/
      i[2]), xt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), xt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), xt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, h) {
      Is(f, e, h), r && r.m(e, null), eu(e, t), c && c.m(e, null), s = !0, l || (o = db(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, h) {
      /*icon*/
      f[7] ? r ? r.p(f, h) : (r = fc(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || h & /*$$scope*/
      2048) && lu(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? iu(
          a,
          /*$$scope*/
          f[11],
          h,
          null
        ) : nu(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || h & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && je(e, "class", n), (!s || h & /*elem_id*/
      1) && je(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || h & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || h & /*size, variant, elem_classes, visible*/
      30) && ls(e, "hidden", !/*visible*/
      f[2]), h & /*scale*/
      512 && xt(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), h & /*scale*/
      512 && xt(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), h & /*min_width*/
      1024 && xt(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (ql(c, f), s = !0);
    },
    o(f) {
      Il(c, f), s = !1;
    },
    d(f) {
      f && qs(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function gb(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && uc(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = tu(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Ql("a"), l && l.c(), t = su(), r && r.c(), je(
        e,
        "href",
        /*link*/
        i[6]
      ), je(e, "rel", "noopener noreferrer"), je(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), je(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), je(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), ls(e, "hidden", !/*visible*/
      i[2]), ls(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), xt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), xt(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), xt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), xt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      Is(a, e, c), l && l.m(e, null), eu(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = uc(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && lu(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? iu(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : nu(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && je(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && je(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && je(e, "class", n), (!s || c & /*elem_id*/
      1) && je(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && ls(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && ls(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && xt(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && xt(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && xt(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && xt(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (ql(r, a), s = !0);
    },
    o(a) {
      Il(r, a), s = !1;
    },
    d(a) {
      a && qs(e), l && l.d(), r && r.d(a);
    }
  };
}
function fc(i) {
  let e, t, n;
  return {
    c() {
      e = Ql("img"), je(e, "class", "button-icon svelte-8huxfn"), Pl(e.src, t = /*icon*/
      i[7].url) || je(e, "src", t), je(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Is(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Pl(e.src, t = /*icon*/
      s[7].url) && je(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && je(e, "alt", n);
    },
    d(s) {
      s && qs(e);
    }
  };
}
function uc(i) {
  let e, t, n;
  return {
    c() {
      e = Ql("img"), je(e, "class", "button-icon svelte-8huxfn"), Pl(e.src, t = /*icon*/
      i[7].url) || je(e, "src", t), je(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Is(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Pl(e.src, t = /*icon*/
      s[7].url) && je(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && je(e, "alt", n);
    },
    d(s) {
      s && qs(e);
    }
  };
}
function pb(i) {
  let e, t, n, s;
  const l = [gb, mb], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = fb();
    },
    m(a, c) {
      o[e].m(a, c), Is(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (ub(), Il(o[f], 1, 1, () => {
        o[f] = null;
      }), cb(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), ql(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ql(t), s = !0);
    },
    o(a) {
      Il(t), s = !1;
    },
    d(a) {
      a && qs(n), o[e].d(a);
    }
  };
}
function bb(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: h = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: p = null } = e, { min_width: g = void 0 } = e;
  function u(b) {
    rb.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, l = b.elem_id), "elem_classes" in b && t(1, o = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, c = b.size), "value" in b && t(5, f = b.value), "link" in b && t(6, h = b.link), "icon" in b && t(7, _ = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, p = b.scale), "min_width" in b && t(10, g = b.min_width), "$$scope" in b && t(11, s = b.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    _,
    d,
    p,
    g,
    s,
    n,
    u
  ];
}
class da extends ab {
  constructor(e) {
    super(), hb(this, e, bb, pb, _b, {
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
  SvelteComponent: vb,
  add_render_callback: ou,
  append: dl,
  attr: It,
  binding_callbacks: hc,
  check_outros: wb,
  create_bidirectional_transition: dc,
  destroy_each: kb,
  detach: Bs,
  element: Al,
  empty: yb,
  ensure_array_like: _c,
  group_outros: Cb,
  init: Sb,
  insert: Ds,
  listen: _a,
  prevent_default: Mb,
  run_all: Wb,
  safe_not_equal: zb,
  set_data: xb,
  set_style: Vi,
  space: ma,
  text: Xb,
  toggle_class: dn,
  transition_in: Zo,
  transition_out: mc
} = window.__gradio__svelte__internal, { createEventDispatcher: Yb } = window.__gradio__svelte__internal;
function gc(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function pc(i) {
  let e, t, n, s, l, o = _c(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = bc(gc(i, o, a));
  return {
    c() {
      e = Al("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      It(e, "class", "options svelte-yuohum"), It(e, "role", "listbox"), Vi(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Vi(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Vi(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Ds(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = _a(e, "mousedown", Mb(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = _c(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const h = gc(a, o, f);
          r[f] ? r[f].p(h, c) : (r[f] = bc(h), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Vi(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Vi(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Vi(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && ou(() => {
        n && (t || (t = dc(e, hr, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = dc(e, hr, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Bs(e), kb(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function bc(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = Al("li"), t = Al("span"), t.textContent = "✓", n = ma(), l = Xb(s), o = ma(), It(t, "class", "inner-item svelte-yuohum"), dn(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), It(e, "class", "item svelte-yuohum"), It(e, "data-index", r = /*index*/
      i[26]), It(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), It(e, "data-testid", "dropdown-option"), It(e, "role", "option"), It(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), dn(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), dn(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), dn(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), dn(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, h) {
      Ds(f, e, h), dl(e, t), dl(e, n), dl(e, l), dl(e, o);
    },
    p(f, h) {
      h & /*selected_indices, filtered_indices*/
      18 && dn(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), h & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && xb(l, s), h & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && It(e, "data-index", r), h & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && It(e, "aria-label", a), h & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && It(e, "aria-selected", c), h & /*selected_indices, filtered_indices*/
      18 && dn(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), h & /*filtered_indices, active_index*/
      34 && dn(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && dn(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && dn(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && Bs(e);
    }
  };
}
function Bb(i) {
  let e, t, n, s, l;
  ou(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && pc(i)
  );
  return {
    c() {
      e = Al("div"), t = ma(), o && o.c(), n = yb(), It(e, "class", "reference");
    },
    m(r, a) {
      Ds(r, e, a), i[20](e), Ds(r, t, a), o && o.m(r, a), Ds(r, n, a), s || (l = [
        _a(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        _a(
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
      12 && Zo(o, 1)) : (o = pc(r), o.c(), Zo(o, 1), o.m(n.parentNode, n)) : o && (Cb(), mc(o, 1, 1, () => {
        o = null;
      }), wb());
    },
    i(r) {
      Zo(o);
    },
    o(r) {
      mc(o);
    },
    d(r) {
      r && (Bs(e), Bs(t), Bs(n)), i[20](null), o && o.d(r), s = !1, Wb(l);
    }
  };
}
function Db(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, h, _, d, p, g, u, b, y, w;
  function x() {
    const { top: E, bottom: z } = g.getBoundingClientRect();
    t(16, h = E), t(17, _ = w - z);
  }
  let Y = null;
  function k() {
    r && (Y !== null && clearTimeout(Y), Y = setTimeout(
      () => {
        x(), Y = null;
      },
      10
    ));
  }
  const X = Yb();
  function W() {
    t(11, w = window.innerHeight);
  }
  function v(E) {
    hc[E ? "unshift" : "push"](() => {
      g = E, t(6, g);
    });
  }
  const S = (E) => X("change", E);
  function R(E) {
    hc[E ? "unshift" : "push"](() => {
      u = E, t(7, u);
    });
  }
  return i.$$set = (E) => {
    "choices" in E && t(0, l = E.choices), "filtered_indices" in E && t(1, o = E.filtered_indices), "show_options" in E && t(2, r = E.show_options), "disabled" in E && t(3, a = E.disabled), "selected_indices" in E && t(4, c = E.selected_indices), "active_index" in E && t(5, f = E.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (u && c.length > 0) {
          let z = u.querySelectorAll("li");
          for (const F of Array.from(z))
            if (F.getAttribute("data-index") === c[0].toString()) {
              t(14, n = u == null ? void 0 : u.scrollTo) === null || n === void 0 || n.call(u, 0, F.offsetTop);
              break;
            }
        }
        x();
        const E = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, d = (E == null ? void 0 : E.height) || 0), t(8, p = (E == null ? void 0 : E.width) || 0);
      }
      _ > h ? (t(10, y = _), t(9, b = null)) : (t(9, b = `${_ + d}px`), t(10, y = h - d));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    g,
    u,
    p,
    b,
    y,
    w,
    k,
    X,
    n,
    s,
    h,
    _,
    d,
    W,
    v,
    S,
    R
  ];
}
class Eb extends vb {
  constructor(e) {
    super(), Sb(this, e, Db, Bb, zb, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Rb(i, e) {
  return (i % e + e) % e;
}
function vc(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function Hb(i, e, t) {
  i("change", e), t || i("input");
}
function Lb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[Rb(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Pb,
  append: ci,
  attr: qt,
  binding_callbacks: qb,
  check_outros: Ib,
  create_component: ga,
  destroy_component: pa,
  detach: Ya,
  element: ts,
  group_outros: Ab,
  init: jb,
  insert: Ba,
  listen: Qn,
  mount_component: ba,
  noop: Fb,
  run_all: Tb,
  safe_not_equal: Ob,
  set_data: Ub,
  set_input_value: wc,
  space: Go,
  text: Nb,
  toggle_class: Ki,
  transition_in: ns,
  transition_out: zs
} = window.__gradio__svelte__internal, { onMount: Vb } = window.__gradio__svelte__internal, { createEventDispatcher: Kb, afterUpdate: Zb } = window.__gradio__svelte__internal;
function Gb(i) {
  let e;
  return {
    c() {
      e = Nb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Ba(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Ub(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ya(e);
    }
  };
}
function kc(i) {
  let e, t, n, s, l;
  return t = new ya({}), {
    c() {
      e = ts("div"), ga(t.$$.fragment), qt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      Ba(o, e, r), ba(t, e, null), n = !0, s || (l = Qn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: Fb,
    i(o) {
      n || (ns(t.$$.fragment, o), n = !0);
    },
    o(o) {
      zs(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ya(e), pa(t), s = !1, l();
    }
  };
}
function Jb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p;
  t = new of({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Gb] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && kc(i);
  return h = new Eb({
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
  }), h.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = ts("div"), ga(t.$$.fragment), n = Go(), s = ts("div"), l = ts("div"), o = ts("div"), r = ts("input"), c = Go(), g && g.c(), f = Go(), ga(h.$$.fragment), qt(r, "role", "listbox"), qt(r, "aria-controls", "dropdown-options"), qt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), qt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), qt(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], qt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Ki(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), qt(o, "class", "secondary-wrap svelte-1a9du2n"), qt(l, "class", "wrap-inner svelte-1a9du2n"), Ki(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), qt(s, "class", "wrap svelte-1a9du2n"), qt(e, "class", "svelte-1a9du2n"), Ki(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(u, b) {
      Ba(u, e, b), ba(t, e, null), ci(e, n), ci(e, s), ci(s, l), ci(l, o), ci(o, r), wc(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), ci(o, c), g && g.m(o, null), ci(s, f), ba(h, s, null), _ = !0, d || (p = [
        Qn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        Qn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        Qn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        Qn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        Qn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        Qn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        Qn(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], d = !0);
    },
    p(u, b) {
      const y = {};
      b[0] & /*show_label*/
      16 && (y.show_label = /*show_label*/
      u[4]), b[0] & /*info*/
      2 && (y.info = /*info*/
      u[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      16 && (y.$$scope = { dirty: b, ctx: u }), t.$set(y), (!_ || b[0] & /*show_options*/
      4096) && qt(
        r,
        "aria-expanded",
        /*show_options*/
        u[12]
      ), (!_ || b[0] & /*label*/
      1) && qt(
        r,
        "aria-label",
        /*label*/
        u[0]
      ), (!_ || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      u[3]), (!_ || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      u[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      u[9] && wc(
        r,
        /*input_text*/
        u[9]
      ), (!_ || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Ki(r, "subdued", !/*choices_names*/
      u[13].includes(
        /*input_text*/
        u[9]
      ) && !/*allow_custom_value*/
      u[6]), /*disabled*/
      u[3] ? g && (Ab(), zs(g, 1, 1, () => {
        g = null;
      }), Ib()) : g ? (g.p(u, b), b[0] & /*disabled*/
      8 && ns(g, 1)) : (g = kc(u), g.c(), ns(g, 1), g.m(o, null)), (!_ || b[0] & /*show_options*/
      4096) && Ki(
        l,
        "show_options",
        /*show_options*/
        u[12]
      );
      const w = {};
      b[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      u[12]), b[0] & /*choices*/
      4 && (w.choices = /*choices*/
      u[2]), b[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      u[10]), b[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      u[3]), b[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      u[11] === null ? [] : [
        /*selected_index*/
        u[11]
      ]), b[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      u[14]), h.$set(w), (!_ || b[0] & /*container*/
      32) && Ki(
        e,
        "container",
        /*container*/
        u[5]
      );
    },
    i(u) {
      _ || (ns(t.$$.fragment, u), ns(g), ns(h.$$.fragment, u), _ = !0);
    },
    o(u) {
      zs(t.$$.fragment, u), zs(g), zs(h.$$.fragment, u), _ = !1;
    },
    d(u) {
      u && Ya(e), pa(t), i[31](null), g && g.d(), pa(h), d = !1, Tb(p);
    }
  };
}
function Qb(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: h } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: p = !0 } = e, g, u = !1, b, y, w = "", x = "", Y = !1, k = [], X = null, W = null, v;
  const S = Kb();
  l ? (v = a.map((U) => U[1]).indexOf(l), W = v, W === -1 ? (o = l, W = null) : ([w, o] = a[W], x = w), E()) : a.length > 0 && (v = 0, W = 0, [w, l] = a[W], o = l, x = w);
  function R() {
    t(13, b = a.map((U) => U[0])), t(26, y = a.map((U) => U[1]));
  }
  function E() {
    R(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, W = null)) : y.includes(l) ? (t(9, w = b[y.indexOf(l)]), t(11, W = y.indexOf(l))) : d ? (t(9, w = l), t(11, W = null)) : (t(9, w = ""), t(11, W = null)), t(29, v = W);
  }
  function z(U) {
    if (t(11, W = parseInt(U.detail.target.dataset.index)), isNaN(W)) {
      t(11, W = null);
      return;
    }
    t(12, u = !1), t(14, X = null), g.blur();
  }
  function F(U) {
    t(10, k = a.map((pe, J) => J)), t(12, u = !0), S("focus");
  }
  function q() {
    f || (g.focus(), t(12, u = !0));
  }
  function O(U) {
    U.preventDefault(), f || (g.focus(), t(12, u = !u));
  }
  function G() {
    d ? t(22, l = w) : t(9, w = b[y.indexOf(l)]), t(12, u = !1), t(14, X = null), S("blur");
  }
  function C(U) {
    t(12, [u, X] = Lb(U, X, k), u, (t(14, X), t(2, a), t(25, c), t(6, d), t(9, w), t(10, k), t(8, g), t(27, x), t(11, W), t(29, v), t(28, Y), t(26, y))), U.key === "Enter" && (X !== null ? (t(11, W = X), t(12, u = !1), g.blur(), t(14, X = null)) : b.includes(w) ? (t(11, W = b.indexOf(w)), t(12, u = !1), t(14, X = null), g.blur()) : d && (t(22, l = w), t(11, W = null), t(12, u = !1), t(14, X = null), g.blur()), S("enter", l));
  }
  Zb(() => {
    t(23, r = !1), t(28, Y = !0);
  }), Vb(() => {
  });
  function L() {
    w = this.value, t(9, w), t(11, W), t(29, v), t(28, Y), t(2, a), t(26, y);
  }
  function le(U) {
    qb[U ? "unshift" : "push"](() => {
      g = U, t(8, g);
    });
  }
  const Z = (U) => S("key_up", { key: U.key, input_value: w });
  return i.$$set = (U) => {
    "label" in U && t(0, n = U.label), "info" in U && t(1, s = U.info), "value" in U && t(22, l = U.value), "value_is_output" in U && t(23, r = U.value_is_output), "choices" in U && t(2, a = U.choices), "disabled" in U && t(3, f = U.disabled), "show_label" in U && t(4, h = U.show_label), "container" in U && t(5, _ = U.container), "allow_custom_value" in U && t(6, d = U.allow_custom_value), "filterable" in U && t(7, p = U.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && W !== v && W !== null && Y && (t(9, [w, l] = a[W], w, (t(22, l), t(11, W), t(29, v), t(28, Y), t(2, a), t(26, y))), t(29, v = W), S("select", {
      index: W,
      value: y[W],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (E(), Hb(S, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && R(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (d || E(), t(25, c = a), t(10, k = vc(a, w)), !d && k.length > 0 && t(14, X = k[0]), g == document.activeElement && t(12, u = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && w !== x && (t(10, k = vc(a, w)), t(27, x = w), !d && k.length > 0 && t(14, X = k[0]));
  }, [
    n,
    s,
    a,
    f,
    h,
    _,
    d,
    p,
    g,
    w,
    k,
    W,
    u,
    b,
    X,
    S,
    z,
    F,
    q,
    O,
    G,
    C,
    l,
    r,
    o,
    c,
    y,
    x,
    Y,
    v,
    L,
    le,
    Z
  ];
}
class $b extends Pb {
  constructor(e) {
    super(), jb(
      this,
      e,
      Qb,
      Jb,
      Ob,
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
  SvelteComponent: ev,
  append: Ze,
  attr: Ut,
  check_outros: va,
  create_component: Mi,
  destroy_component: Wi,
  detach: Pi,
  element: wt,
  group_outros: wa,
  init: tv,
  insert: qi,
  listen: Wl,
  mount_component: zi,
  run_all: nv,
  safe_not_equal: iv,
  set_data: sv,
  set_input_value: yc,
  set_style: Xe,
  space: $n,
  text: Hs,
  to_number: lv,
  toggle_class: Cc,
  transition_in: vt,
  transition_out: At
} = window.__gradio__svelte__internal, { createEventDispatcher: ov } = window.__gradio__svelte__internal, { onMount: av, onDestroy: rv } = window.__gradio__svelte__internal;
function Sc(i) {
  let e, t, n, s, l, o, r;
  const a = [fv, cv], c = [];
  function f(h, _) {
    return (
      /*labelDetailLock*/
      h[3] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = wt("div"), t = wt("button"), s.c(), Ut(t, "class", "icon svelte-d9x7u0"), Ut(t, "aria-label", "Lock label detail"), Cc(
        t,
        "selected",
        /*labelDetailLock*/
        i[3] === !0
      ), Xe(e, "margin-right", "8px");
    },
    m(h, _) {
      qi(h, e, _), Ze(e, t), c[n].m(t, null), l = !0, o || (r = Wl(
        t,
        "click",
        /*onLockClick*/
        i[12]
      ), o = !0);
    },
    p(h, _) {
      let d = n;
      n = f(h), n !== d && (wa(), At(c[d], 1, 1, () => {
        c[d] = null;
      }), va(), s = c[n], s || (s = c[n] = a[n](h), s.c()), vt(s, 1), s.m(t, null)), (!l || _ & /*labelDetailLock*/
      8) && Cc(
        t,
        "selected",
        /*labelDetailLock*/
        h[3] === !0
      );
    },
    i(h) {
      l || (vt(s), l = !0);
    },
    o(h) {
      At(s), l = !1;
    },
    d(h) {
      h && Pi(e), c[n].d(), o = !1, r();
    }
  };
}
function cv(i) {
  let e, t;
  return e = new Ip({}), {
    c() {
      Mi(e.$$.fragment);
    },
    m(n, s) {
      zi(e, n, s), t = !0;
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wi(e, n);
    }
  };
}
function fv(i) {
  let e, t;
  return e = new Bp({}), {
    c() {
      Mi(e.$$.fragment);
    },
    m(n, s) {
      zi(e, n, s), t = !0;
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wi(e, n);
    }
  };
}
function Mc(i) {
  let e, t, n, s, l, o, r, a = Math.round(
    /*currentOpacity*/
    i[2] * 100
  ) + "", c, f, h, _;
  return {
    c() {
      e = wt("div"), t = wt("label"), t.textContent = "Opacity", n = $n(), s = wt("div"), l = wt("input"), o = $n(), r = wt("span"), c = Hs(a), f = Hs("%"), Ut(t, "for", "opacity-slider"), Xe(t, "font-size", "12px"), Xe(t, "margin-bottom", "4px"), Xe(t, "color", "var(--body-text-color)"), Ut(l, "id", "opacity-slider"), Ut(l, "type", "range"), Ut(l, "min", "0"), Ut(l, "max", "1"), Ut(l, "step", "0.05"), Xe(l, "flex", "1"), Xe(l, "height", "4px"), Xe(l, "background", "var(--slider-color)"), Xe(l, "border-radius", "2px"), Xe(l, "outline", "none"), Xe(l, "appearance", "none"), Xe(l, "-webkit-appearance", "none"), Xe(r, "font-size", "11px"), Xe(r, "color", "var(--body-text-color-subdued)"), Xe(r, "min-width", "30px"), Xe(r, "text-align", "center"), Xe(s, "display", "flex"), Xe(s, "align-items", "center"), Xe(s, "gap", "8px"), Xe(s, "width", "100%"), Xe(e, "margin-right", "20px"), Xe(e, "margin-bottom", "8px"), Xe(e, "display", "flex"), Xe(e, "flex-direction", "column"), Xe(e, "align-items", "center"), Xe(e, "min-width", "120px");
    },
    m(d, p) {
      qi(d, e, p), Ze(e, t), Ze(e, n), Ze(e, s), Ze(s, l), yc(
        l,
        /*currentOpacity*/
        i[2]
      ), Ze(s, o), Ze(s, r), Ze(r, c), Ze(r, f), h || (_ = [
        Wl(
          l,
          "change",
          /*input_change_input_handler*/
          i[17]
        ),
        Wl(
          l,
          "input",
          /*input_change_input_handler*/
          i[17]
        ),
        Wl(
          l,
          "input",
          /*onOpacityChange*/
          i[10]
        )
      ], h = !0);
    },
    p(d, p) {
      p & /*currentOpacity*/
      4 && yc(
        l,
        /*currentOpacity*/
        d[2]
      ), p & /*currentOpacity*/
      4 && a !== (a = Math.round(
        /*currentOpacity*/
        d[2] * 100
      ) + "") && sv(c, a);
    },
    d(d) {
      d && Pi(e), h = !1, nv(_);
    }
  };
}
function uv(i) {
  let e;
  return {
    c() {
      e = Hs("Cancel");
    },
    m(t, n) {
      qi(t, e, n);
    },
    d(t) {
      t && Pi(e);
    }
  };
}
function Wc(i) {
  let e, t, n;
  return t = new da({
    props: {
      variant: "stop",
      $$slots: { default: [hv] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[19]
  ), {
    c() {
      e = wt("div"), Mi(t.$$.fragment), Xe(e, "margin-right", "8px");
    },
    m(s, l) {
      qi(s, e, l), zi(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      8388608 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (vt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      At(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Pi(e), Wi(t);
    }
  };
}
function hv(i) {
  let e;
  return {
    c() {
      e = Hs("Remove");
    },
    m(t, n) {
      qi(t, e, n);
    },
    d(t) {
      t && Pi(e);
    }
  };
}
function dv(i) {
  let e;
  return {
    c() {
      e = Hs("OK");
    },
    m(t, n) {
      qi(t, e, n);
    },
    d(t) {
      t && Pi(e);
    }
  };
}
function _v(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p, g, u, b, y, w = !/*showRemove*/
  i[5] && Sc(i);
  o = new $b({
    props: {
      value: (
        /*currentLabel*/
        i[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        i[4]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), o.$on(
    "change",
    /*onDropDownChange*/
    i[8]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    i[11]
  ), c = new ob({
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
    i[9]
  );
  let x = (
    /*showOpacity*/
    i[6] && Mc(i)
  );
  d = new da({
    props: {
      $$slots: { default: [uv] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[18]
  );
  let Y = (
    /*showRemove*/
    i[5] && Wc(i)
  );
  return b = new da({
    props: {
      variant: "primary",
      $$slots: { default: [dv] },
      $$scope: { ctx: i }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    i[20]
  ), {
    c() {
      e = wt("div"), t = wt("div"), n = wt("span"), w && w.c(), s = $n(), l = wt("div"), Mi(o.$$.fragment), r = $n(), a = wt("div"), Mi(c.$$.fragment), f = $n(), x && x.c(), h = $n(), _ = wt("div"), Mi(d.$$.fragment), p = $n(), Y && Y.c(), g = $n(), u = wt("div"), Mi(b.$$.fragment), Xe(l, "margin-right", "10px"), Xe(a, "margin-right", "40px"), Xe(a, "margin-bottom", "8px"), Xe(_, "margin-right", "8px"), Ut(n, "class", "model-content svelte-d9x7u0"), Ut(t, "class", "modal-container svelte-d9x7u0"), Ut(e, "class", "modal svelte-d9x7u0"), Ut(e, "id", "model-box-edit");
    },
    m(k, X) {
      qi(k, e, X), Ze(e, t), Ze(t, n), w && w.m(n, null), Ze(n, s), Ze(n, l), zi(o, l, null), Ze(n, r), Ze(n, a), zi(c, a, null), Ze(n, f), x && x.m(n, null), Ze(n, h), Ze(n, _), zi(d, _, null), Ze(n, p), Y && Y.m(n, null), Ze(n, g), Ze(n, u), zi(b, u, null), y = !0;
    },
    p(k, [X]) {
      /*showRemove*/
      k[5] ? w && (wa(), At(w, 1, 1, () => {
        w = null;
      }), va()) : w ? (w.p(k, X), X & /*showRemove*/
      32 && vt(w, 1)) : (w = Sc(k), w.c(), vt(w, 1), w.m(n, s));
      const W = {};
      X & /*currentLabel*/
      1 && (W.value = /*currentLabel*/
      k[0]), X & /*choices*/
      16 && (W.choices = /*choices*/
      k[4]), o.$set(W);
      const v = {};
      X & /*currentColor*/
      2 && (v.value = /*currentColor*/
      k[1]), c.$set(v), /*showOpacity*/
      k[6] ? x ? x.p(k, X) : (x = Mc(k), x.c(), x.m(n, h)) : x && (x.d(1), x = null);
      const S = {};
      X & /*$$scope*/
      8388608 && (S.$$scope = { dirty: X, ctx: k }), d.$set(S), /*showRemove*/
      k[5] ? Y ? (Y.p(k, X), X & /*showRemove*/
      32 && vt(Y, 1)) : (Y = Wc(k), Y.c(), vt(Y, 1), Y.m(n, g)) : Y && (wa(), At(Y, 1, 1, () => {
        Y = null;
      }), va());
      const R = {};
      X & /*$$scope*/
      8388608 && (R.$$scope = { dirty: X, ctx: k }), b.$set(R);
    },
    i(k) {
      y || (vt(w), vt(o.$$.fragment, k), vt(c.$$.fragment, k), vt(d.$$.fragment, k), vt(Y), vt(b.$$.fragment, k), y = !0);
    },
    o(k) {
      At(w), At(o.$$.fragment, k), At(c.$$.fragment, k), At(d.$$.fragment, k), At(Y), At(b.$$.fragment, k), y = !1;
    },
    d(k) {
      k && Pi(e), w && w.d(), Wi(o), Wi(c), x && x.d(), Wi(d), Y && Y.d(), Wi(b);
    }
  };
}
function mv(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { opacity: c = 0.5 } = e, { currentOpacity: f = 0.5 } = e, { showRemove: h = !0 } = e, { labelDetailLock: _ = !1 } = e, { showOpacity: d = !1 } = e;
  const p = ov();
  function g(S) {
    p("change", {
      label: s,
      color: a,
      opacity: f,
      lock: _,
      ret: S
      // -1: remove, 0: cancel, 1: change
    });
  }
  function u(S) {
    const { detail: R } = S;
    let E = R;
    Number.isInteger(E) ? (Array.isArray(o) && E < o.length && t(1, a = o[E]), Array.isArray(l) && E < l.length && t(0, s = l[E][0])) : t(0, s = E);
  }
  function b(S) {
    const { detail: R } = S;
    t(1, a = R);
  }
  function y(S) {
    t(2, f = parseFloat(S.target.value));
  }
  function w(S) {
    u(S), g(1);
  }
  function x(S) {
    t(3, _ = !_);
  }
  function Y(S) {
    switch (S.key) {
      case "Enter":
        g(1);
        break;
    }
  }
  av(() => {
    document.addEventListener("keydown", Y), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : "")), t(2, f = c || 0.5);
  }), rv(() => {
    document.removeEventListener("keydown", Y);
  });
  function k() {
    f = lv(this.value), t(2, f), t(16, c);
  }
  const X = () => g(0), W = () => g(-1), v = () => g(1);
  return i.$$set = (S) => {
    "label" in S && t(13, n = S.label), "currentLabel" in S && t(0, s = S.currentLabel), "choices" in S && t(4, l = S.choices), "choicesColors" in S && t(14, o = S.choicesColors), "color" in S && t(15, r = S.color), "currentColor" in S && t(1, a = S.currentColor), "opacity" in S && t(16, c = S.opacity), "currentOpacity" in S && t(2, f = S.currentOpacity), "showRemove" in S && t(5, h = S.showRemove), "labelDetailLock" in S && t(3, _ = S.labelDetailLock), "showOpacity" in S && t(6, d = S.showOpacity);
  }, i.$$.update = () => {
    i.$$.dirty & /*label*/
    8192 && t(0, s = n || ""), i.$$.dirty & /*color*/
    32768 && t(1, a = r || ""), i.$$.dirty & /*opacity*/
    65536 && t(2, f = c || 0.5);
  }, [
    s,
    a,
    f,
    _,
    l,
    h,
    d,
    g,
    u,
    b,
    y,
    w,
    x,
    n,
    o,
    r,
    c,
    k,
    X,
    W,
    v
  ];
}
class Da extends ev {
  constructor(e) {
    super(), tv(this, e, mv, _v, iv, {
      label: 13,
      currentLabel: 0,
      choices: 4,
      choicesColors: 14,
      color: 15,
      currentColor: 1,
      opacity: 16,
      currentOpacity: 2,
      showRemove: 5,
      labelDetailLock: 3,
      showOpacity: 6
    });
  }
}
const {
  SvelteComponent: gv,
  append: Ee,
  attr: xe,
  detach: au,
  element: ut,
  empty: pv,
  init: bv,
  insert: ru,
  listen: _n,
  noop: zc,
  run_all: vv,
  safe_not_equal: wv,
  set_data: kv,
  set_input_value: _l,
  set_style: ml,
  space: Vn,
  text: xc,
  to_number: ka
} = window.__gradio__svelte__internal, { createEventDispatcher: yv } = window.__gradio__svelte__internal;
function Xc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p, g, u, b, y, w, x, Y, k, X, W, v, S, R, E, z;
  return {
    c() {
      e = ut("div"), t = ut("div"), n = ut("div"), s = ut("h3"), s.textContent = "Eraser Settings", l = Vn(), o = ut("button"), o.textContent = "×", r = Vn(), a = ut("div"), c = ut("div"), f = ut("label"), f.textContent = "Eraser Size:", h = Vn(), _ = ut("div"), d = ut("input"), p = Vn(), g = ut("input"), u = Vn(), b = ut("div"), y = ut("div"), w = Vn(), x = ut("span"), Y = xc(
        /*tempSize*/
        i[1]
      ), k = xc("px"), X = Vn(), W = ut("div"), v = ut("button"), v.textContent = "Cancel", S = Vn(), R = ut("button"), R.textContent = "Apply", xe(s, "id", "eraser-settings-title"), xe(s, "class", "svelte-a42w5h"), xe(o, "class", "close-button svelte-a42w5h"), xe(o, "aria-label", "Close"), xe(n, "class", "modal-header svelte-a42w5h"), xe(f, "for", "eraser-size"), xe(f, "class", "svelte-a42w5h"), xe(d, "id", "eraser-size"), xe(d, "type", "range"), xe(d, "min", "1"), xe(d, "max", "50"), xe(d, "class", "size-slider svelte-a42w5h"), xe(g, "type", "number"), xe(g, "min", "1"), xe(g, "max", "50"), xe(g, "class", "size-input svelte-a42w5h"), xe(_, "class", "size-controls svelte-a42w5h"), xe(y, "class", "preview-circle svelte-a42w5h"), ml(y, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), ml(y, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), xe(x, "class", "size-label svelte-a42w5h"), xe(b, "class", "size-preview svelte-a42w5h"), xe(c, "class", "setting-group svelte-a42w5h"), xe(a, "class", "modal-body svelte-a42w5h"), xe(v, "class", "button secondary svelte-a42w5h"), xe(R, "class", "button primary svelte-a42w5h"), xe(W, "class", "modal-footer svelte-a42w5h"), xe(t, "class", "modal-content svelte-a42w5h"), xe(e, "class", "modal-backdrop svelte-a42w5h"), xe(e, "role", "dialog"), xe(e, "aria-modal", "true"), xe(e, "aria-labelledby", "eraser-settings-title");
    },
    m(F, q) {
      ru(F, e, q), Ee(e, t), Ee(t, n), Ee(n, s), Ee(n, l), Ee(n, o), Ee(t, r), Ee(t, a), Ee(a, c), Ee(c, f), Ee(c, h), Ee(c, _), Ee(_, d), _l(
        d,
        /*tempSize*/
        i[1]
      ), Ee(_, p), Ee(_, g), _l(
        g,
        /*tempSize*/
        i[1]
      ), Ee(c, u), Ee(c, b), Ee(b, y), Ee(b, w), Ee(b, x), Ee(x, Y), Ee(x, k), Ee(t, X), Ee(t, W), Ee(W, v), Ee(W, S), Ee(W, R), E || (z = [
        _n(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        _n(
          d,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        _n(
          d,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        _n(
          d,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        _n(
          g,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        _n(
          g,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        _n(
          v,
          "click",
          /*handleClose*/
          i[3]
        ),
        _n(
          R,
          "click",
          /*click_handler*/
          i[9]
        ),
        _n(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        _n(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], E = !0);
    },
    p(F, q) {
      q & /*tempSize*/
      2 && _l(
        d,
        /*tempSize*/
        F[1]
      ), q & /*tempSize*/
      2 && ka(g.value) !== /*tempSize*/
      F[1] && _l(
        g,
        /*tempSize*/
        F[1]
      ), q & /*tempSize*/
      2 && ml(y, "width", Math.min(
        /*tempSize*/
        F[1],
        30
      ) + "px"), q & /*tempSize*/
      2 && ml(y, "height", Math.min(
        /*tempSize*/
        F[1],
        30
      ) + "px"), q & /*tempSize*/
      2 && kv(
        Y,
        /*tempSize*/
        F[1]
      );
    },
    d(F) {
      F && au(e), E = !1, vv(z);
    }
  };
}
function Cv(i) {
  let e, t = (
    /*visible*/
    i[0] && Xc(i)
  );
  return {
    c() {
      t && t.c(), e = pv();
    },
    m(n, s) {
      t && t.m(n, s), ru(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = Xc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: zc,
    o: zc,
    d(n) {
      n && au(e), t && t.d(n);
    }
  };
}
function Sv(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = yv();
  let o = n;
  function r() {
    l("change", { size: o });
  }
  function a() {
    l("close");
  }
  function c(p) {
    p.key === "Escape" ? a() : p.key === "Enter" && (r(), a());
  }
  function f(p) {
    p.target === p.currentTarget && a();
  }
  function h() {
    o = ka(this.value), t(1, o), t(0, s), t(6, n);
  }
  function _() {
    o = ka(this.value), t(1, o), t(0, s), t(6, n);
  }
  const d = () => {
    r(), a();
  };
  return i.$$set = (p) => {
    "eraserSize" in p && t(6, n = p.eraserSize), "visible" in p && t(0, s = p.visible);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible, eraserSize*/
    65 && s && t(1, o = n);
  }, [
    s,
    o,
    r,
    a,
    c,
    f,
    n,
    h,
    _,
    d
  ];
}
class Mv extends gv {
  constructor(e) {
    super(), bv(this, e, Sv, Cv, wv, { eraserSize: 6, visible: 0 });
  }
}
const {
  SvelteComponent: Wv,
  append: ie,
  attr: K,
  detach: cu,
  element: ye,
  empty: zv,
  init: xv,
  insert: fu,
  listen: et,
  noop: Yc,
  run_all: Xv,
  safe_not_equal: Yv,
  set_data: Jo,
  set_input_value: Tt,
  set_style: Zi,
  space: ot,
  text: Gi,
  to_number: Wn
} = window.__gradio__svelte__internal, { createEventDispatcher: Bv } = window.__gradio__svelte__internal;
function Bc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p, g, u, b, y, w, x, Y = Math.round(
    /*tempOpacity*/
    i[1] * 100
  ) + "", k, X, W, v, S, R, E, z, F, q, O, G, C, L, le, Z, U, pe, J, P, be, D, I, se, Q, Ye, H, Be, Ne, Se, He, Ve, nt, re, Ke, ft, ve, Me, B;
  return {
    c() {
      e = ye("div"), t = ye("div"), n = ye("div"), s = ye("h3"), s.textContent = "Shape Settings", l = ot(), o = ye("button"), o.textContent = "×", r = ot(), a = ye("div"), c = ye("div"), f = ye("label"), f.textContent = "Opacity:", h = ot(), _ = ye("div"), d = ye("input"), p = ot(), g = ye("input"), u = ot(), b = ye("div"), y = ye("div"), w = ot(), x = ye("span"), k = Gi(Y), X = Gi("%"), W = ot(), v = ye("div"), S = ye("label"), S.textContent = "Border Width:", R = ot(), E = ye("div"), z = ye("input"), F = ot(), q = ye("input"), O = ot(), G = ye("div"), C = ye("div"), L = ot(), le = ye("span"), Z = Gi(
        /*tempStrokeWidth*/
        i[2]
      ), U = Gi("px"), pe = ot(), J = ye("div"), P = ye("label"), P.textContent = "Selected Border Width:", be = ot(), D = ye("div"), I = ye("input"), se = ot(), Q = ye("input"), Ye = ot(), H = ye("div"), Be = ye("div"), Ne = ot(), Se = ye("span"), He = Gi(
        /*tempSelectedStrokeWidth*/
        i[3]
      ), Ve = Gi("px"), nt = ot(), re = ye("div"), Ke = ye("button"), Ke.textContent = "Cancel", ft = ot(), ve = ye("button"), ve.textContent = "Apply", K(s, "id", "shape-settings-title"), K(s, "class", "svelte-dfhagh"), K(o, "class", "close-button svelte-dfhagh"), K(o, "aria-label", "Close"), K(n, "class", "modal-header svelte-dfhagh"), K(f, "for", "shape-opacity"), K(f, "class", "svelte-dfhagh"), K(d, "id", "shape-opacity"), K(d, "type", "range"), K(d, "min", "0"), K(d, "max", "1"), K(d, "step", "0.05"), K(d, "class", "settings-slider svelte-dfhagh"), K(g, "type", "number"), K(g, "min", "0"), K(g, "max", "1"), K(g, "step", "0.05"), K(g, "class", "settings-input svelte-dfhagh"), K(_, "class", "slider-controls svelte-dfhagh"), K(y, "class", "opacity-preview svelte-dfhagh"), Zi(
        y,
        "opacity",
        /*tempOpacity*/
        i[1]
      ), K(x, "class", "setting-label svelte-dfhagh"), K(b, "class", "preview-container svelte-dfhagh"), K(c, "class", "setting-group svelte-dfhagh"), K(S, "for", "stroke-width"), K(S, "class", "svelte-dfhagh"), K(z, "id", "stroke-width"), K(z, "type", "range"), K(z, "min", "1"), K(z, "max", "10"), K(z, "class", "settings-slider svelte-dfhagh"), K(q, "type", "number"), K(q, "min", "1"), K(q, "max", "10"), K(q, "class", "settings-input svelte-dfhagh"), K(E, "class", "slider-controls svelte-dfhagh"), K(C, "class", "stroke-preview svelte-dfhagh"), Zi(C, "border-width", Math.min(
        /*tempStrokeWidth*/
        i[2],
        5
      ) + "px"), K(le, "class", "setting-label svelte-dfhagh"), K(G, "class", "preview-container svelte-dfhagh"), K(v, "class", "setting-group svelte-dfhagh"), K(P, "for", "selected-stroke-width"), K(P, "class", "svelte-dfhagh"), K(I, "id", "selected-stroke-width"), K(I, "type", "range"), K(I, "min", "1"), K(I, "max", "15"), K(I, "class", "settings-slider svelte-dfhagh"), K(Q, "type", "number"), K(Q, "min", "1"), K(Q, "max", "15"), K(Q, "class", "settings-input svelte-dfhagh"), K(D, "class", "slider-controls svelte-dfhagh"), K(Be, "class", "stroke-preview selected svelte-dfhagh"), Zi(Be, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        i[3],
        5
      ) + "px"), K(Se, "class", "setting-label svelte-dfhagh"), K(H, "class", "preview-container svelte-dfhagh"), K(J, "class", "setting-group svelte-dfhagh"), K(a, "class", "modal-body svelte-dfhagh"), K(Ke, "class", "button secondary svelte-dfhagh"), K(ve, "class", "button primary svelte-dfhagh"), K(re, "class", "modal-footer svelte-dfhagh"), K(t, "class", "modal-content svelte-dfhagh"), K(e, "class", "modal-backdrop svelte-dfhagh"), K(e, "role", "dialog"), K(e, "aria-modal", "true"), K(e, "aria-labelledby", "shape-settings-title");
    },
    m(de, _e) {
      fu(de, e, _e), ie(e, t), ie(t, n), ie(n, s), ie(n, l), ie(n, o), ie(t, r), ie(t, a), ie(a, c), ie(c, f), ie(c, h), ie(c, _), ie(_, d), Tt(
        d,
        /*tempOpacity*/
        i[1]
      ), ie(_, p), ie(_, g), Tt(
        g,
        /*tempOpacity*/
        i[1]
      ), ie(c, u), ie(c, b), ie(b, y), ie(b, w), ie(b, x), ie(x, k), ie(x, X), ie(a, W), ie(a, v), ie(v, S), ie(v, R), ie(v, E), ie(E, z), Tt(
        z,
        /*tempStrokeWidth*/
        i[2]
      ), ie(E, F), ie(E, q), Tt(
        q,
        /*tempStrokeWidth*/
        i[2]
      ), ie(v, O), ie(v, G), ie(G, C), ie(G, L), ie(G, le), ie(le, Z), ie(le, U), ie(a, pe), ie(a, J), ie(J, P), ie(J, be), ie(J, D), ie(D, I), Tt(
        I,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ie(D, se), ie(D, Q), Tt(
        Q,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ie(J, Ye), ie(J, H), ie(H, Be), ie(H, Ne), ie(H, Se), ie(Se, He), ie(Se, Ve), ie(t, nt), ie(t, re), ie(re, Ke), ie(re, ft), ie(re, ve), Me || (B = [
        et(
          o,
          "click",
          /*handleClose*/
          i[5]
        ),
        et(
          d,
          "change",
          /*input0_change_input_handler*/
          i[11]
        ),
        et(
          d,
          "input",
          /*input0_change_input_handler*/
          i[11]
        ),
        et(
          d,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          g,
          "input",
          /*input1_input_handler*/
          i[12]
        ),
        et(
          g,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          z,
          "change",
          /*input2_change_input_handler*/
          i[13]
        ),
        et(
          z,
          "input",
          /*input2_change_input_handler*/
          i[13]
        ),
        et(
          z,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          q,
          "input",
          /*input3_input_handler*/
          i[14]
        ),
        et(
          q,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          I,
          "change",
          /*input4_change_input_handler*/
          i[15]
        ),
        et(
          I,
          "input",
          /*input4_change_input_handler*/
          i[15]
        ),
        et(
          I,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          Q,
          "input",
          /*input5_input_handler*/
          i[16]
        ),
        et(
          Q,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          Ke,
          "click",
          /*handleClose*/
          i[5]
        ),
        et(
          ve,
          "click",
          /*click_handler*/
          i[17]
        ),
        et(
          e,
          "click",
          /*handleBackdropClick*/
          i[7]
        ),
        et(
          e,
          "keydown",
          /*handleKeydown*/
          i[6]
        )
      ], Me = !0);
    },
    p(de, _e) {
      _e & /*tempOpacity*/
      2 && Tt(
        d,
        /*tempOpacity*/
        de[1]
      ), _e & /*tempOpacity*/
      2 && Wn(g.value) !== /*tempOpacity*/
      de[1] && Tt(
        g,
        /*tempOpacity*/
        de[1]
      ), _e & /*tempOpacity*/
      2 && Zi(
        y,
        "opacity",
        /*tempOpacity*/
        de[1]
      ), _e & /*tempOpacity*/
      2 && Y !== (Y = Math.round(
        /*tempOpacity*/
        de[1] * 100
      ) + "") && Jo(k, Y), _e & /*tempStrokeWidth*/
      4 && Tt(
        z,
        /*tempStrokeWidth*/
        de[2]
      ), _e & /*tempStrokeWidth*/
      4 && Wn(q.value) !== /*tempStrokeWidth*/
      de[2] && Tt(
        q,
        /*tempStrokeWidth*/
        de[2]
      ), _e & /*tempStrokeWidth*/
      4 && Zi(C, "border-width", Math.min(
        /*tempStrokeWidth*/
        de[2],
        5
      ) + "px"), _e & /*tempStrokeWidth*/
      4 && Jo(
        Z,
        /*tempStrokeWidth*/
        de[2]
      ), _e & /*tempSelectedStrokeWidth*/
      8 && Tt(
        I,
        /*tempSelectedStrokeWidth*/
        de[3]
      ), _e & /*tempSelectedStrokeWidth*/
      8 && Wn(Q.value) !== /*tempSelectedStrokeWidth*/
      de[3] && Tt(
        Q,
        /*tempSelectedStrokeWidth*/
        de[3]
      ), _e & /*tempSelectedStrokeWidth*/
      8 && Zi(Be, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        de[3],
        5
      ) + "px"), _e & /*tempSelectedStrokeWidth*/
      8 && Jo(
        He,
        /*tempSelectedStrokeWidth*/
        de[3]
      );
    },
    d(de) {
      de && cu(e), Me = !1, Xv(B);
    }
  };
}
function Dv(i) {
  let e, t = (
    /*visible*/
    i[0] && Bc(i)
  );
  return {
    c() {
      t && t.c(), e = zv();
    },
    m(n, s) {
      t && t.m(n, s), fu(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = Bc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: Yc,
    o: Yc,
    d(n) {
      n && cu(e), t && t.d(n);
    }
  };
}
function Ev(i, e, t) {
  let { opacity: n = 0.5 } = e, { strokeWidth: s = 2 } = e, { selectedStrokeWidth: l = 4 } = e, { visible: o = !1 } = e;
  const r = Bv();
  let a = n, c = s, f = l;
  function h() {
    r("change", {
      opacity: a,
      strokeWidth: c,
      selectedStrokeWidth: f
    });
  }
  function _() {
    r("close");
  }
  function d(k) {
    k.key === "Escape" ? _() : k.key === "Enter" && (h(), _());
  }
  function p(k) {
    k.target === k.currentTarget && _();
  }
  function g() {
    a = Wn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function u() {
    a = Wn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function b() {
    c = Wn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function y() {
    c = Wn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function w() {
    f = Wn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function x() {
    f = Wn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  const Y = () => {
    h(), _();
  };
  return i.$$set = (k) => {
    "opacity" in k && t(8, n = k.opacity), "strokeWidth" in k && t(9, s = k.strokeWidth), "selectedStrokeWidth" in k && t(10, l = k.selectedStrokeWidth), "visible" in k && t(0, o = k.visible);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible, opacity, strokeWidth, selectedStrokeWidth*/
    1793 && o && (t(1, a = n), t(2, c = s), t(3, f = l));
  }, [
    o,
    a,
    c,
    f,
    h,
    _,
    d,
    p,
    n,
    s,
    l,
    g,
    u,
    b,
    y,
    w,
    x,
    Y
  ];
}
class Rv extends Wv {
  constructor(e) {
    super(), xv(this, e, Ev, Dv, Yv, {
      opacity: 8,
      strokeWidth: 9,
      selectedStrokeWidth: 10,
      visible: 0
    });
  }
}
const {
  SvelteComponent: Hv,
  append: Lv,
  attr: Kn,
  binding_callbacks: Pv,
  detach: qv,
  element: Dc,
  init: Iv,
  insert: Av,
  listen: ws,
  noop: Ec,
  run_all: jv,
  safe_not_equal: Fv
} = window.__gradio__svelte__internal, { createEventDispatcher: Tv } = window.__gradio__svelte__internal;
function Ov(i) {
  let e, t, n, s;
  return {
    c() {
      e = Dc("div"), t = Dc("canvas"), Kn(
        t,
        "width",
        /*navigatorWidth*/
        i[1]
      ), Kn(
        t,
        "height",
        /*navigatorHeight*/
        i[2]
      ), Kn(t, "class", "svelte-o1hdob"), Kn(e, "class", "position-navigator svelte-o1hdob"), Kn(e, "role", "navigation"), Kn(e, "aria-label", "Image position navigator");
    },
    m(l, o) {
      Av(l, e, o), Lv(e, t), i[16](t), n || (s = [
        ws(
          t,
          "mousedown",
          /*handleNavigatorMouseDown*/
          i[4]
        ),
        ws(
          t,
          "mousemove",
          /*handleNavigatorMouseMove*/
          i[5]
        ),
        ws(
          t,
          "mouseup",
          /*handleNavigatorMouseUp*/
          i[6]
        ),
        ws(
          t,
          "click",
          /*handleNavigatorClick*/
          i[3]
        ),
        ws(
          e,
          "mouseleave",
          /*handleNavigatorMouseUp*/
          i[6]
        )
      ], n = !0);
    },
    p(l, [o]) {
      o & /*navigatorWidth*/
      2 && Kn(
        t,
        "width",
        /*navigatorWidth*/
        l[1]
      ), o & /*navigatorHeight*/
      4 && Kn(
        t,
        "height",
        /*navigatorHeight*/
        l[2]
      );
    },
    i: Ec,
    o: Ec,
    d(l) {
      l && qv(e), i[16](null), n = !1, jv(s);
    }
  };
}
const Zn = 180, Ji = 80, gl = 5;
function Uv(i, e, t) {
  let { imageWidth: n } = e, { imageHeight: s } = e, { canvasWidth: l } = e, { canvasHeight: o } = e, { offsetX: r } = e, { offsetY: a } = e, { scale: c } = e, { image: f = null } = e;
  const h = Tv();
  let _, d, p = !1, g = Zn, u = Zn;
  function b() {
    if (!d || !n || !s) return;
    const v = d;
    v.clearRect(0, 0, g, u);
    const S = (g - 2 * gl) / n, R = (u - 2 * gl) / s, E = Math.min(S, R), z = n * E, F = s * E, q = (g - z) / 2, O = (u - F) / 2;
    f && f.complete ? (v.save(), v.drawImage(f, q, O, z, F), v.restore()) : (v.fillStyle = "rgba(200, 200, 200, 0.3)", v.fillRect(q, O, z, F)), v.strokeStyle = "rgba(150, 150, 150, 0.8)", v.lineWidth = 1, v.strokeRect(q, O, z, F);
    const G = l / c, C = o / c, L = -r / c, le = -a / c, Z = q + L * E, U = O + le * E, pe = G * E, J = C * E;
    v.fillStyle = "rgba(59, 130, 246, 0.3)", v.fillRect(Z, U, pe, J), v.strokeStyle = "rgba(59, 130, 246, 1)", v.lineWidth = 2, v.strokeRect(Z, U, pe, J);
  }
  function y(v) {
    k(v);
  }
  function w(v) {
    p = !0, k(v);
  }
  function x(v) {
    p && k(v);
  }
  function Y() {
    p = !1;
  }
  function k(v) {
    const S = _.getBoundingClientRect(), R = v.clientX - S.left, E = v.clientY - S.top, z = (g - 2 * gl) / n, F = (u - 2 * gl) / s, q = Math.min(z, F), O = n * q, G = s * q, C = (g - O) / 2, L = (u - G) / 2, le = (R - C) / q, Z = (E - L) / q, U = l / c, pe = o / c, J = -(le - U / 2) * c, P = -(Z - pe / 2) * c;
    h("navigate", { x: J, y: P });
  }
  function X() {
    _ && (t(15, d = _.getContext("2d")), b());
  }
  function W(v) {
    Pv[v ? "unshift" : "push"](() => {
      _ = v, t(0, _);
    });
  }
  return i.$$set = (v) => {
    "imageWidth" in v && t(7, n = v.imageWidth), "imageHeight" in v && t(8, s = v.imageHeight), "canvasWidth" in v && t(9, l = v.canvasWidth), "canvasHeight" in v && t(10, o = v.canvasHeight), "offsetX" in v && t(11, r = v.offsetX), "offsetY" in v && t(12, a = v.offsetY), "scale" in v && t(13, c = v.scale), "image" in v && t(14, f = v.image);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*imageWidth, imageHeight, navigatorWidth, navigatorHeight*/
    390 && n && s) {
      const v = n / s;
      v > 1 ? (t(1, g = Math.min(Zn, Math.max(Ji, Zn))), t(2, u = Math.min(Zn, Math.max(Ji, g / v)))) : (t(2, u = Math.min(Zn, Math.max(Ji, Zn))), t(1, g = Math.min(Zn, Math.max(Ji, u * v)))), t(1, g = Math.max(Ji, g)), t(2, u = Math.max(Ji, u));
    }
    i.$$.dirty & /*navigatorCanvas, navigatorCtx, imageWidth, imageHeight, offsetX, offsetY, scale, canvasWidth, canvasHeight, image, navigatorWidth, navigatorHeight*/
    65415 && _ && d && n && s && b(), i.$$.dirty & /*navigatorCanvas*/
    1 && _ && X();
  }, [
    _,
    g,
    u,
    y,
    w,
    x,
    Y,
    n,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    d,
    W
  ];
}
class Nv extends Hv {
  constructor(e) {
    super(), Iv(this, e, Uv, Ov, Fv, {
      imageWidth: 7,
      imageHeight: 8,
      canvasWidth: 9,
      canvasHeight: 10,
      offsetX: 11,
      offsetY: 12,
      scale: 13,
      image: 14
    });
  }
}
function jt(i, e) {
  if (!i || typeof i != "string")
    return `rgba(50, 50, 50, ${e})`;
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const at = (i, e, t) => Math.min(Math.max(i, e), t);
class di {
  constructor(e, t, n, s, l, o, r, a, c, f, h, _, d, p = "rgb(255, 255, 255)", g = 0.5, u = 25, b = 8, y = 2, w = 4, x = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (Y) => {
      if (this.isDragging) {
        let k = (Y.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, X = (Y.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = at(k, -this._xmin, W - this._xmax), X = at(X, -this._ymin, v - this._ymax), this._xmin += k, this._ymin += X, this._xmax += k, this._ymax += X, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (Y) => {
      if (this.isCreating) {
        if (!this.canvas) return;
        const k = this.canvas.getBoundingClientRect(), X = Y.clientX - k.left, W = Y.clientY - k.top;
        let v = (X - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (W - this.canvasWindow.offsetY) / this.canvasWindow.scale;
        v > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = v, this.creatingAnchorX = "xmin") : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = v : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = v : v < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = v, this.creatingAnchorX = "xmax"), S > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = S, this.creatingAnchorY = "ymin") : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = S : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = S : S < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = S, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (Y) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, X = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = at(this._xmin, 0, k - this.minSize), this._ymin = at(this._ymin, 0, X - this.minSize), this._xmax = at(this._xmax, this.minSize, k), this._ymax = at(this._ymax, this.minSize, X), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > X ? (this._ymin -= this._ymax - X, this._ymax = X) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (Y) => {
      if (this.isResizing) {
        const k = Y.clientX, X = Y.clientY, W = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, v = (X - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, R = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += W, this._ymin += v, this._xmin = at(this._xmin, 0, this._xmax - this.minSize), this._ymin = at(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += W, this._ymin += v, this._xmax = at(this._xmax, this._xmin + this.minSize, S), this._ymin = at(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += W, this._ymax += v, this._xmax = at(this._xmax, this._xmin + this.minSize, S), this._ymax = at(this._ymax, this._ymin + this.minSize, R);
            break;
          case 3:
            this._xmin += W, this._ymax += v, this._xmin = at(this._xmin, 0, this._xmax - this.minSize), this._ymax = at(this._ymax, this._ymin + this.minSize, R);
            break;
          case 4:
            this._ymin += v, this._ymin = at(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += W, this._xmax = at(this._xmax, this._xmin + this.minSize, S);
            break;
          case 6:
            this._ymax += v, this._ymax = at(this._ymax, this._ymin + this.minSize, R);
            break;
          case 7:
            this._xmin += W, this._xmin = at(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = x, this.label = c, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = h, this._xmax = _, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = y, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = u, this.color = p, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
  render(e, t = !0) {
    let n, s;
    this.updateOffset(), e.beginPath();
    let l, o;
    if (this.isCreating) {
      const r = Math.min(this._xmin, this._xmax), a = Math.min(this._ymin, this._ymax), c = Math.max(this._xmin, this._xmax), f = Math.max(this._ymin, this._ymax), h = r * this.canvasWindow.scale, _ = a * this.canvasWindow.scale;
      n = h + this.canvasXmin, s = _ + this.canvasYmin, l = (c - r) * this.canvasWindow.scale, o = (f - a) * this.canvasWindow.scale;
    } else
      [n, s] = this.toCanvasCoordinates(this.xmin, this.ymin), l = this.getWidth(), o = this.getHeight();
    if (e.rect(n, s, l, o), e.fillStyle = jt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = jt(this.color, 1), e.stroke(), e.closePath(), t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const r = e.measureText(this.label).width + 10, a = 20;
      let c = this.xmin, f = this.ymin - a;
      e.fillStyle = "white", [c, f] = this.toCanvasCoordinates(c, f), e.fillRect(c, f, r, a), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(c, f, r, a), e.fillStyle = "black", e.fillText(this.label, c + 5, f + 15);
    }
    if (this.isSelected) {
      e.fillStyle = jt(this.color, 1);
      for (const r of this.resizeHandles)
        [n, s] = this.toCanvasCoordinates(r.xmin, r.ymin), e.fillRect(
          n,
          s,
          r.xmax - r.xmin,
          r.ymax - r.ymin
        );
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
  // startCreating now accepts initial image-space coordinates (imgX, imgY)
  startCreating(e, t, n) {
    this.isCreating = !0, this._xmin = t, this._ymin = n, this._xmax = t, this._ymax = n, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
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
const Rc = (i, e, t) => Math.min(Math.max(i, e), t);
class _i {
  constructor(e, t, n, s, l, o, r, a, c, f, h, _, d = "rgb(255, 255, 255)", p = 0.5, g = 25, u = 8, b = 2, y = 4, w = 1) {
    this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (x) => {
      if (this.isDragging) {
        const Y = document.querySelector("canvas");
        if (Y) {
          const k = Y.getBoundingClientRect(), X = x.clientX - k.left, W = x.clientY - k.top, [v, S] = this.toBoxCoordinates(X, W);
          let R = v - this.offsetMouseX, E = S - this.offsetMouseY;
          const z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, F = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          R = Rc(R, this._radius, z - this._radius), E = Rc(E, this._radius, F - this._radius), this._centerX = R, this._centerY = E, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (x) => {
      if (this.isCreating) {
        if (!this.canvas) return;
        const Y = this.canvas.getBoundingClientRect(), k = x.clientX - Y.left, X = x.clientY - Y.top, W = (k - this.canvasWindow.offsetX) / this.canvasWindow.scale, v = (X - this.canvasWindow.offsetY) / this.canvasWindow.scale, S = W - this.offsetMouseX, R = v - this.offsetMouseY, E = Math.sqrt(S * S + R * R);
        this._radius = Math.max(E, 5), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (x) => {
      if (this.isResizing) {
        const Y = document.querySelector("canvas");
        if (Y) {
          const k = Y.getBoundingClientRect(), X = x.clientX - k.left, W = x.clientY - k.top, [v, S] = this.toBoxCoordinates(X, W), R = Math.sqrt(
            Math.pow(v - this._centerX, 2) + Math.pow(S - this._centerY, 2)
          );
          this._radius = Math.max(R, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = w, this.label = c, this.isDragging = !1, this.isCreating = !1, this._centerX = f, this._centerY = h, this._radius = _, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = u, this.thickness = b, this.selectedThickness = y, this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = p, this.applyUserScale(), this.updateHandles();
  }
  toJSON() {
    return {
      type: "circle",
      label: this.label,
      centerX: this._centerX,
      centerY: this._centerY,
      radius: this._radius,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._centerX = Math.round(this._centerX * t), this._centerY = Math.round(this._centerY * t), this._radius = Math.round(this._radius * t), this.applyUserScale(), this.scaleFactor = e;
  }
  updateHandles() {
    this.resizeHandles || (this.resizeHandles = []);
  }
  getHandlePositions() {
    const e = this.resizeHandleSize / 2, t = this._centerX * this.canvasWindow.scale + this.canvasWindow.offsetX, n = this._centerY * this.canvasWindow.scale + this.canvasWindow.offsetY, s = this._radius * this.canvasWindow.scale;
    return [
      {
        // Top handle
        xmin: t - e,
        ymin: n - s - e,
        xmax: t + e,
        ymax: n - s + e,
        cursor: "ns-resize"
      },
      {
        // Right handle
        xmin: t + s - e,
        ymin: n - e,
        xmax: t + s + e,
        ymax: n + e,
        cursor: "ew-resize"
      },
      {
        // Bottom handle
        xmin: t - e,
        ymin: n + s - e,
        xmax: t + e,
        ymax: n + s + e,
        cursor: "ns-resize"
      },
      {
        // Left handle
        xmin: t - s - e,
        ymin: n - e,
        xmax: t - s + e,
        ymax: n + e,
        cursor: "ew-resize"
      }
    ];
  }
  applyUserScale() {
    this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.xmin = (this._centerX - this._radius) * this.canvasWindow.scale, this.ymin = (this._centerY - this._radius) * this.canvasWindow.scale, this.xmax = (this._centerX + this._radius) * this.canvasWindow.scale, this.ymax = (this._centerY + this._radius) * this.canvasWindow.scale;
  }
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
  toCanvasCoordinates(e, t) {
    return [
      e + this.canvasXmin,
      t + this.canvasYmin
    ];
  }
  toBoxCoordinates(e, t) {
    return [
      (e - this.canvasWindow.offsetX) / this.canvasWindow.scale,
      (t - this.canvasWindow.offsetY) / this.canvasWindow.scale
    ];
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e, t = !0) {
    if (this.radius <= 0) return;
    this.updateOffset();
    const n = this._centerX * this.canvasWindow.scale + this.canvasWindow.offsetX, s = this._centerY * this.canvasWindow.scale + this.canvasWindow.offsetY, l = this._radius * this.canvasWindow.scale;
    if (e.beginPath(), e.arc(n, s, l, 0, 2 * Math.PI), e.fillStyle = jt(this.color, this.alpha), e.fill(), e.strokeStyle = this.color, e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.stroke(), this.isSelected) {
      e.fillStyle = this.color;
      const o = this.getHandlePositions();
      for (const r of o)
        e.fillRect(
          r.xmin,
          r.ymin,
          r.xmax - r.xmin,
          r.ymax - r.ymin
        );
    }
    if (t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const o = e.measureText(this.label).width + 10, r = 20;
      let a = this.xmin, c = this.ymin - r;
      e.fillStyle = "white", [a, c] = this.toCanvasCoordinates(a, c), e.fillRect(a, c, o, r), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(a, c, o, r), e.fillStyle = "black", e.fillText(this.label, a + 5, c + 15);
    }
  }
  startDrag(e) {
    this.isDragging = !0;
    const t = document.querySelector("canvas");
    if (t) {
      const n = t.getBoundingClientRect(), s = e.clientX - n.left, l = e.clientY - n.top, [o, r] = this.toBoxCoordinates(s, l);
      this.offsetMouseX = o - this._centerX, this.offsetMouseY = r - this._centerY;
    }
    this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    const [n, s] = this.toBoxCoordinates(e, t);
    return Math.sqrt(
      Math.pow(n - this._centerX, 2) + Math.pow(s - this._centerY, 2)
    ) <= this._radius;
  }
  indexOfPointInsideHandle(e, t) {
    const n = this.getHandlePositions();
    for (let s = 0; s < n.length; s++) {
      const l = n[s];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
        return this.resizingHandleIndex = s, s;
    }
    return -1;
  }
  // startCreating accepts initial image-space coords
  startCreating(e, t, n) {
    this.isCreating = !0, this._centerX = t, this._centerY = n, this.offsetMouseX = this._centerX, this.offsetMouseY = this._centerY, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.isResizing = !0, this.resizingHandleIndex = e, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
  }
}
class ei {
  constructor(e, t, n, s, l, o, r, a, c, f = "rgb(255, 255, 255)", h = 0.5, _ = 25, d = 8, p = 2, g = 4, u = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let y = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const x = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, Y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = Math.max(-this._xmin, Math.min(y, x - this._xmax)), w = Math.max(-this._ymin, Math.min(w, Y - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + y,
          y: k.y + w
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (b) => {
      if (this.isCreating) {
        if (!this.canvas) return;
        const y = this.canvas.getBoundingClientRect(), w = b.clientX - y.left, x = b.clientY - y.top, Y = (w - this.canvasWindow.offsetX) / this.canvasWindow.scale, k = (x - this.canvasWindow.offsetY) / this.canvasWindow.scale, X = this._points[this._points.length - 1];
        Math.sqrt(Math.pow(Y - X.x, 2) + Math.pow(k - X.y, 2)) > 2 && (this._points.push({ x: Y, y: k }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
      }
    }, this.stopCreating = (b) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((x) => ({
          x: Math.max(0, Math.min(x.x, y)),
          y: Math.max(0, Math.min(x.y, w))
        })), this.updateBoundingBox(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const y = b.clientX, w = b.clientY, x = document.querySelector("canvas");
        if (x) {
          const Y = x.getBoundingClientRect(), k = y - Y.left, X = w - Y.top, W = (k - this.canvasWindow.offsetX) / this.canvasWindow.scale, v = (X - this.canvasWindow.offsetY) / this.canvasWindow.scale, S = this.getControlPointIndex(this.resizingHandleIndex);
          if (S >= 0 && S < this._points.length) {
            const R = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, z = Math.max(0, Math.min(W, R)), F = Math.max(0, Math.min(v, E)), q = z - this._points[S].x, O = F - this._points[S].y;
            this.applyLocalDeformation(S, q, O), this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = u, this.label = c, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = p, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = _, this.color = f, this.alpha = h, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
    if (this._points.length < 2) return;
    const e = this.resizeHandleSize / 2;
    this.resizeHandles = [];
    const t = this.getFreehandControlPoints();
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      this.resizeHandles.push({
        xmin: s.x - e,
        ymin: s.y - e,
        xmax: s.x + e,
        ymax: s.y + e,
        cursor: "move"
        // Use move cursor for direct point manipulation
      });
    }
  }
  getFreehandControlPoints() {
    const e = this.points;
    if (e.length <= 6)
      return e.map((t, n) => ({ ...t, index: n }));
    {
      const t = [];
      t.push({ ...e[0], index: 0 }), t.push({ ...e[e.length - 1], index: e.length - 1 });
      const n = 4;
      if (e.length > 2) {
        const s = Math.floor(e.length / (n + 1));
        for (let l = 1; l <= n; l++) {
          const o = Math.min(l * s, e.length - 2);
          o > 0 && o < e.length - 1 && t.push({ ...e[o], index: o });
        }
      }
      return t;
    }
  }
  getControlPointIndex(e) {
    const t = this.getFreehandControlPoints();
    return e < t.length ? t[e].index : -1;
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
  render(e, t = !0) {
    if (this.points.length !== 0) {
      if (this.updateOffset(), this.eraseData && Array.isArray(this.eraseData))
        this.renderWithEraseMask(e, this.eraseData.map((n) => !n));
      else {
        e.beginPath();
        for (let n = 0; n < this.points.length; n++) {
          const [s, l] = this.toCanvasCoordinates(this.points[n].x, this.points[n].y);
          n === 0 ? e.moveTo(s, l) : e.lineTo(s, l);
        }
        e.closePath(), e.fillStyle = jt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = jt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke();
      }
      this.renderLabel(e, t), this.renderHandles(e);
    }
  }
  renderLabel(e, t = !0) {
    if (t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const n = e.measureText(this.label).width + 10, s = 20;
      let l = this.xmin, o = this.ymin - s;
      e.fillStyle = "white", [l, o] = this.toCanvasCoordinates(l, o), e.fillRect(l, o, n, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(l, o, n, s), e.fillStyle = "black", e.fillText(this.label, l + 5, o + 15);
    }
  }
  renderHandles(e) {
    if (this.isSelected) {
      e.fillStyle = jt(this.color, 1);
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
    this.isCreating = !0, this._points = [{ x: t, y: n }], this.applyUserScale(), this.updateBoundingBox(), document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
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
    e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = jt(this.color, 1), e.lineCap = "round", e.lineJoin = "round";
    let n = !1;
    for (let s = 0; s < this.points.length; s++) {
      const [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
      (s < t.length ? t[s] : !0) ? n ? e.lineTo(l, o) : (e.beginPath(), e.moveTo(l, o), n = !0) : n && (e.stroke(), n = !1);
    }
    if (n && e.stroke(), this.alpha > 0) {
      e.fillStyle = jt(this.color, this.alpha);
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
  /**
   * Apply smooth local deformation when moving a control point
   * This affects neighboring points to maintain curve continuity
   */
  applyLocalDeformation(e, t, n) {
    const s = this._points.length;
    if (s < 3 || e < 0 || e >= s) return;
    const l = Math.min(3, Math.floor(s / 4));
    this._points[e].x += t, this._points[e].y += n;
    for (let a = 1; a <= l; a++) {
      const c = Math.exp(-a * 0.8), f = t * c, h = n * c;
      e - a >= 0 && (this._points[e - a].x += f, this._points[e - a].y += h), e + a < s && (this._points[e + a].x += f, this._points[e + a].y += h);
    }
    const o = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, r = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((a) => ({
      x: Math.max(0, Math.min(a.x, o)),
      y: Math.max(0, Math.min(a.y, r))
    }));
  }
}
class nn {
  constructor(e, t, n, s, l, o, r, a, c, f = "rgb(255, 255, 255)", h = 0.5, _ = 25, d = 8, p = 2, g = 4, u = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let y = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const x = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, Y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = Math.max(-this._xmin, Math.min(y, x - this._xmax)), w = Math.max(-this._ymin, Math.min(w, Y - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + y,
          y: k.y + w
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (b) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (b) => {
      this.isCreating && b.code === "Space" && this._points.length >= this.minPoints && (b.preventDefault(), this.finishCreating());
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const y = b.clientX, w = b.clientY;
        if (!this.canvas) return;
        const x = this.canvas.getBoundingClientRect(), Y = y - x.left, k = w - x.top, X = (Y - this.canvasWindow.offsetX) / this.canvasWindow.scale, W = (k - this.canvasWindow.offsetY) / this.canvasWindow.scale, v = this.getPolygonVertexIndex(this.resizingHandleIndex);
        if (v >= 0 && v < this._points.length) {
          const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, R = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, E = Math.max(0, Math.min(X, S)), z = Math.max(0, Math.min(W, R)), F = E - this._points[v].x, q = z - this._points[v].y;
          this._points.length > 6 ? this.applyPolygonLocalDeformation(v, F, q) : this._points[v] = { x: E, y: z }, this.updateBoundingBox(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = u, this.label = c, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = p, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = _, this.color = f, this.alpha = h, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
    if (this.points.length < 3) return;
    const e = this.resizeHandleSize / 2;
    this.resizeHandles = [];
    for (let t = 0; t < this.points.length; t++) {
      const n = this.points[t];
      this.resizeHandles.push({
        xmin: n.x - e,
        ymin: n.y - e,
        xmax: n.x + e,
        ymax: n.y + e,
        cursor: "move"
        // Use move cursor for direct point manipulation
      });
    }
  }
  getPolygonVertexIndex(e) {
    return e;
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
  render(e, t = !0) {
    if (this.points.length !== 0) {
      this.updateOffset(), e.beginPath();
      for (let n = 0; n < this.points.length; n++) {
        const [s, l] = this.toCanvasCoordinates(this.points[n].x, this.points[n].y);
        n === 0 ? e.moveTo(s, l) : e.lineTo(s, l);
      }
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = jt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = jt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = jt(this.color, 1);
        for (let n = 0; n < this.points.length; n++) {
          const [s, l] = this.toCanvasCoordinates(this.points[n].x, this.points[n].y);
          e.beginPath(), e.arc(s, l, 4, 0, 2 * Math.PI), e.fill();
        }
        if (this.points.length >= this.minPoints) {
          const [n, s] = this.toCanvasCoordinates(this.points[0].x, this.points[0].y);
          e.strokeStyle = "white", e.lineWidth = 2, e.beginPath(), e.arc(n, s, this.startPointRadius, 0, 2 * Math.PI), e.stroke();
        }
      }
      if (t && this.label !== null && this.label.trim() !== "") {
        this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
        const n = e.measureText(this.label).width + 10, s = 20;
        let l = this.xmin, o = this.ymin - s;
        e.fillStyle = "white", [l, o] = this.toCanvasCoordinates(l, o), e.fillRect(l, o, n, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(l, o, n, s), e.fillStyle = "black", e.fillText(this.label, l + 5, o + 15);
      }
      if (this.isSelected && !this.isCreating) {
        e.fillStyle = jt(this.color, 1);
        for (const n of this.resizeHandles) {
          const [s, l] = this.toCanvasCoordinates(n.xmin, n.ymin);
          e.fillRect(
            s,
            l,
            n.xmax - n.xmin,
            n.ymax - n.ymin
          );
        }
      }
    }
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.setSelected(!0), this._points = [{ x: t, y: n }], this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack();
  }
  // Method that Canvas can call to add points to the polygon
  addPoint(e) {
    if (!this.isCreating || !this.canvas) return !1;
    const t = this.canvas.getBoundingClientRect(), n = e.clientX - t.left, s = e.clientY - t.top;
    if (this._points.length >= this.minPoints && this.isClickOnStartPoint(n, s))
      return this.finishCreating(), !0;
    const l = (n - this.canvasWindow.offsetX) / this.canvasWindow.scale, o = (s - this.canvasWindow.offsetY) / this.canvasWindow.scale, r = { x: l, y: o };
    return this._points.push(r), this.onPointAdded && this.onPointAdded(r), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack(), !1;
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
  /**
   * Apply smooth local deformation when moving a polygon vertex
   * This affects neighboring vertices to maintain shape continuity for complex polygons
   */
  applyPolygonLocalDeformation(e, t, n) {
    const s = this._points.length;
    if (s < 4 || e < 0 || e >= s) return;
    const l = Math.min(2, Math.floor(s / 6));
    this._points[e].x += t, this._points[e].y += n;
    for (let a = 1; a <= l; a++) {
      const c = Math.exp(-a * 1.2), f = t * c, h = n * c, _ = (e - a + s) % s;
      this._points[_].x += f, this._points[_].y += h;
      const d = (e + a) % s;
      this._points[d].x += f, this._points[d].y += h;
    }
    const o = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, r = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((a) => ({
      x: Math.max(0, Math.min(a.x, o)),
      y: Math.max(0, Math.min(a.y, r))
    }));
  }
}
class Vv {
  constructor(e, t = 1, n = !1) {
    this.erasePath = [], this.isErasing = !1, this.brushSize = 20, this.canvasWindow = e, this.scaleFactor = t, this.isScrollableMode = n, this.maskCanvas = document.createElement("canvas"), this.maskCtx = this.maskCanvas.getContext("2d");
  }
  setBrushSize(e) {
    this.brushSize = e;
  }
  setScaleFactor(e) {
    this.scaleFactor = e;
  }
  setScrollableMode(e) {
    this.isScrollableMode = e;
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
    const n = e.clientX - t.left, s = e.clientY - t.top;
    let l, o;
    this.isScrollableMode ? (l = (n - this.canvasWindow.offsetX) / this.canvasWindow.scale, o = (s - this.canvasWindow.offsetY) / this.canvasWindow.scale) : (l = (n - this.canvasWindow.offsetX) / this.scaleFactor / this.canvasWindow.scale, o = (s - this.canvasWindow.offsetY) / this.scaleFactor / this.canvasWindow.scale), this.erasePath.push({ x: l, y: o });
  }
  /**
  * Apply erase path to a shape using pixel-based masking approach
  */
  eraseFromShape(e, t) {
    if (t.length === 0) return [e];
    const n = this.createEraseMask(t);
    return e instanceof di ? this.eraseFromBox(e, n) : e instanceof _i ? this.eraseFromCircle(e, n) : e instanceof ei ? this.eraseFromFreehand(e, n) : e instanceof nn ? this.eraseFromPolygon(e, n) : [e];
  }
  /**
   * Create a mask from the erase path for pixel-perfect erasing
   */
  createEraseMask(e) {
    let t = 1 / 0, n = 1 / 0, s = -1 / 0, l = -1 / 0;
    const o = this.isScrollableMode ? this.brushSize / this.canvasWindow.scale : this.brushSize / this.scaleFactor / this.canvasWindow.scale;
    for (const c of e)
      t = Math.min(t, c.x - o), n = Math.min(n, c.y - o), s = Math.max(s, c.x + o), l = Math.max(l, c.y + o);
    const r = Math.ceil(s - t), a = Math.ceil(l - n);
    (this.maskCanvas.width !== r || this.maskCanvas.height !== a) && (this.maskCanvas.width = r, this.maskCanvas.height = a), this.maskCtx.clearRect(0, 0, r, a), this.maskCtx.fillStyle = "white", this.maskCtx.globalCompositeOperation = "source-over";
    for (let c = 0; c < e.length; c++) {
      const f = e[c], h = f.x - t, _ = f.y - n;
      if (this.maskCtx.beginPath(), this.maskCtx.arc(h, _, o, 0, 2 * Math.PI), this.maskCtx.fill(), c > 0) {
        const d = e[c - 1], p = d.x - t, g = d.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(p, g), this.maskCtx.lineTo(h, _), this.maskCtx.stroke();
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
    let t;
    typeof e.label == "string" ? t = e.label : Array.isArray(e.label) ? t = e.label.join(", ") : t = String(e.label || "");
    const n = new nn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvas,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      t,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness,
      e.scaleFactor
    );
    return n._points = [
      { x: e._xmin, y: e._ymin },
      { x: e._xmax, y: e._ymin },
      { x: e._xmax, y: e._ymax },
      { x: e._xmin, y: e._ymax }
    ], n.updateBoundingBox(), n;
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
   * Erase from circle using pixel-based masking - converts to polygon first
   */
  eraseFromCircle(e, t) {
    const n = this.calculateCircleEraseMaskOverlap(e, t);
    if (n > 0.3)
      return [];
    if (n > 0.05) {
      const s = this.circleToPolygon(e);
      return this.eraseFromPolygon(s, t);
    }
    return [e];
  }
  /**
   * Calculate the overlap ratio between circle and erase mask
   */
  calculateCircleEraseMaskOverlap(e, t) {
    const n = e._centerX, s = e._centerY, l = e._radius;
    if (n + l < t.x || n - l > t.x + t.width || s + l < t.y || s - l > t.y + t.height)
      return 0;
    const o = 100;
    let r = 0;
    for (let a = 0; a < o; a++) {
      const c = Math.random() * 2 * Math.PI, f = Math.sqrt(Math.random()) * l, h = n + f * Math.cos(c), _ = s + f * Math.sin(c);
      this.isPointErased({ x: h, y: _ }, t) && r++;
    }
    return r / o;
  }
  /**
   * Convert circle to polygon for uniform mask-based processing
   */
  circleToPolygon(e) {
    let t;
    typeof e.label == "string" ? t = e.label : Array.isArray(e.label) ? t = e.label.join(", ") : t = String(e.label || "");
    const n = new nn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvas,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      t,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness,
      e.scaleFactor
    ), s = 16, l = [];
    for (let o = 0; o < s; o++) {
      const r = o / s * 2 * Math.PI, a = e._centerX + e._radius * Math.cos(r), c = e._centerY + e._radius * Math.sin(r);
      l.push({ x: a, y: c });
    }
    return n._points = l, n.updateBoundingBox(), n;
  }
  /**
   * Convert freehand path to polygon for uniform processing
   */
  freehandToPolygon(e) {
    let t;
    typeof e.label == "string" ? t = e.label : Array.isArray(e.label) ? t = e.label.join(", ") : t = String(e.label || "");
    const n = new nn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvas,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      t,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness,
      e.scaleFactor
    );
    return n._points = [...e._points], n.updateBoundingBox(), n;
  }
  /**
   * Convert polygon back to freehand path
   */
  polygonToFreehand(e, t) {
    let n;
    typeof t.label == "string" ? n = t.label : Array.isArray(t.label) ? n = t.label.join(", ") : n = String(t.label || "");
    const s = new ei(
      t.renderCallBack,
      t.onFinishCreation,
      t.canvasWindow,
      t.canvas,
      t.canvasXmin,
      t.canvasYmin,
      t.canvasXmax,
      t.canvasYmax,
      n,
      t.color,
      t.alpha,
      t.minSize,
      t.resizeHandleSize,
      t.thickness,
      t.selectedThickness,
      t.scaleFactor
    );
    return s._points = [...e._points], s.updateBoundingBox(), s;
  }
  /**
   * Check if a line segment intersects with the erase mask using stroke width
   */
  isLineSegmentErased(e, t, n, s) {
    const l = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)), o = Math.max(3, Math.ceil(l * 2)), r = s / 2;
    let a = 0;
    const c = Math.max(1, Math.ceil(o * 0.3));
    for (let f = 0; f <= o; f++) {
      const h = o > 0 ? f / o : 0, _ = {
        x: e.x + (t.x - e.x) * h,
        y: e.y + (t.y - e.y) * h
      }, d = [
        _,
        { x: _.x + r, y: _.y },
        { x: _.x - r, y: _.y },
        { x: _.x, y: _.y + r },
        { x: _.x, y: _.y - r }
      ];
      for (const p of d)
        if (this.isPointErased(p, n)) {
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
    let n = !0;
    for (const a of e._points)
      if (!this.isPointErased(a, t)) {
        n = !1;
        break;
      }
    if (n) return [];
    const s = [];
    for (let a = 0; a < e._points.length; a++) {
      const c = e._points[a], f = e._points[(a + 1) % e._points.length], h = this.isPointErased(c, t), _ = this.isPointErased(f, t);
      if (h || s.push({ ...c }), !h && _) {
        const d = this.findEraserEdge(c, f, t);
        d && s.push(d);
      }
      if (h && !_) {
        const d = this.findEraserEdge(f, c, t);
        d && s.push(d);
      }
    }
    const l = [];
    for (let a = 0; a < s.length; a++) {
      const c = s[a], f = l[l.length - 1];
      (f ? Math.sqrt(Math.pow(c.x - f.x, 2) + Math.pow(c.y - f.y, 2)) : 1 / 0) > 1 && l.push(c);
    }
    if (l.length > 2) {
      const a = l[0], c = l[l.length - 1];
      Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2)) < 1 && l.pop();
    }
    if (l.length < 3) return [];
    let o;
    typeof e.label == "string" ? o = e.label : Array.isArray(e.label) ? o = e.label.join(", ") : o = String(e.label || "");
    const r = new nn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      e.canvas,
      e.canvasXmin,
      e.canvasYmin,
      e.canvasXmax,
      e.canvasYmax,
      o,
      e.color,
      e.alpha,
      e.minSize,
      e.resizeHandleSize,
      e.thickness,
      e.selectedThickness,
      e.scaleFactor
    );
    return r._points = l, r.updateBoundingBox(), [r];
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
    const t = this.isScrollableMode ? this.brushSize / this.canvasWindow.scale : this.brushSize / this.scaleFactor / this.canvasWindow.scale;
    for (let n = 0; n < this.erasePath.length; n++) {
      const s = this.erasePath[n];
      let l, o, r;
      if (this.isScrollableMode ? (l = s.x * this.canvasWindow.scale + this.canvasWindow.offsetX, o = s.y * this.canvasWindow.scale + this.canvasWindow.offsetY, r = t * this.canvasWindow.scale) : (l = s.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX, o = s.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY, r = t * this.scaleFactor * this.canvasWindow.scale), e.beginPath(), e.arc(l, o, r, 0, 2 * Math.PI), e.fill(), n > 0) {
        const a = this.erasePath[n - 1];
        let c, f;
        this.isScrollableMode ? (c = a.x * this.canvasWindow.scale + this.canvasWindow.offsetX, f = a.y * this.canvasWindow.scale + this.canvasWindow.offsetY) : (c = a.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX, f = a.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY), e.lineWidth = r * 2, e.beginPath(), e.moveTo(c, f), e.lineTo(l, o), e.stroke();
      }
    }
    e.restore();
  }
}
const _t = [
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
], pl = (i, e, t) => Math.min(Math.max(i, e), t);
class Kv {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = pl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = pl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = pl(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = pl(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: Zv,
  add_flush_callback: Qi,
  append: j,
  attr: N,
  bind: $i,
  binding_callbacks: mi,
  bubble: Qo,
  check_outros: wi,
  create_component: Te,
  destroy_component: Oe,
  detach: mn,
  element: oe,
  group_outros: ki,
  init: Gv,
  insert: gn,
  is_function: Jv,
  listen: Ae,
  mount_component: Ue,
  noop: uu,
  run_all: hu,
  safe_not_equal: Qv,
  set_style: bl,
  space: me,
  toggle_class: Ie,
  transition_in: he,
  transition_out: ge
} = window.__gradio__svelte__internal, { onMount: $v, onDestroy: ew, createEventDispatcher: tw } = window.__gradio__svelte__internal;
function Hc(i) {
  let e, t;
  return e = new Nv({
    props: {
      imageWidth: (
        /*imageWidth*/
        i[20]
      ),
      imageHeight: (
        /*imageHeight*/
        i[21]
      ),
      canvasWidth: (
        /*canvas*/
        i[11] ? (
          /*canvas*/
          i[11].width
        ) : 0
      ),
      canvasHeight: (
        /*canvas*/
        i[11] ? (
          /*canvas*/
          i[11].height
        ) : 0
      ),
      offsetX: (
        /*currentOffsetX*/
        i[17]
      ),
      offsetY: (
        /*currentOffsetY*/
        i[18]
      ),
      scale: (
        /*currentScale*/
        i[19]
      ),
      image: (
        /*image*/
        i[15]
      )
    }
  }), e.$on(
    "navigate",
    /*handleNavigatorNavigation*/
    i[40]
  ), {
    c() {
      Te(e.$$.fragment);
    },
    m(n, s) {
      Ue(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*imageWidth*/
      1048576 && (l.imageWidth = /*imageWidth*/
      n[20]), s[0] & /*imageHeight*/
      2097152 && (l.imageHeight = /*imageHeight*/
      n[21]), s[0] & /*canvas*/
      2048 && (l.canvasWidth = /*canvas*/
      n[11] ? (
        /*canvas*/
        n[11].width
      ) : 0), s[0] & /*canvas*/
      2048 && (l.canvasHeight = /*canvas*/
      n[11] ? (
        /*canvas*/
        n[11].height
      ) : 0), s[0] & /*currentOffsetX*/
      131072 && (l.offsetX = /*currentOffsetX*/
      n[17]), s[0] & /*currentOffsetY*/
      262144 && (l.offsetY = /*currentOffsetY*/
      n[18]), s[0] & /*currentScale*/
      524288 && (l.scale = /*currentScale*/
      n[19]), s[0] & /*image*/
      32768 && (l.image = /*image*/
      n[15]), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function Lc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p, g, u, b, y, w, x, Y, k, X, W, v, S, R, E, z, F, q, O, G, C, L, le, Z, U, pe, J, P, be, D, I, se, Q, Ye, H, Be, Ne, Se, He, Ve, nt, re, Ke, ft, ve, Me, B, de, _e, Re, ce, Le, Dt, kt, on, En, yt, an, Rn, Hn, Ln, Et, Pn, si, Pe, ht, qn, As, Ii, pt, ds, js;
  s = new Bg({}), f = new Np({}), u = new Vg({}), k = new $p({}), z = new o2({}), O = new sc({}), U = new rp({});
  let Ge = (
    /*showRemoveButton*/
    i[3] && Pc(i)
  ), Je = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[32] && qc(i);
  return Q = new d2({}), He = new w2({}), Me = new Ig({
    props: { selected: (
      /*labelVisibility*/
      i[33]
    ) }
  }), _e = new sc({}), on = new ep({}), Ln = new H2({}), qn = new F2({}), {
    c() {
      e = oe("span"), t = oe("div"), n = oe("button"), Te(s.$$.fragment), l = me(), o = oe("span"), o.textContent = "Box", r = me(), a = oe("div"), c = oe("button"), Te(f.$$.fragment), h = me(), _ = oe("span"), _.textContent = "Freehand", d = me(), p = oe("div"), g = oe("button"), Te(u.$$.fragment), b = me(), y = oe("span"), y.textContent = "Circle", w = me(), x = oe("div"), Y = oe("button"), Te(k.$$.fragment), X = me(), W = oe("span"), W.textContent = "Polygon", v = me(), S = oe("div"), R = oe("div"), E = oe("button"), Te(z.$$.fragment), F = me(), q = oe("button"), Te(O.$$.fragment), G = me(), C = oe("span"), C.textContent = "Eraser", L = me(), le = oe("div"), Z = oe("button"), Te(U.$$.fragment), pe = me(), J = oe("span"), J.textContent = "Move", P = me(), Ge && Ge.c(), be = me(), Je && Je.c(), D = me(), I = oe("div"), se = oe("button"), Te(Q.$$.fragment), Ye = me(), H = oe("span"), H.textContent = "Undo", Be = me(), Ne = oe("div"), Se = oe("button"), Te(He.$$.fragment), Ve = me(), nt = oe("span"), nt.textContent = "Redo", re = me(), Ke = oe("div"), ft = oe("div"), ve = oe("button"), Te(Me.$$.fragment), B = me(), de = oe("button"), Te(_e.$$.fragment), Re = me(), ce = oe("span"), ce.textContent = "Labels", Le = me(), Dt = oe("div"), kt = oe("button"), Te(on.$$.fragment), En = me(), yt = oe("span"), yt.textContent = "Clear", an = me(), Rn = oe("div"), Hn = oe("button"), Te(Ln.$$.fragment), Et = me(), Pn = oe("span"), Pn.textContent = "Export", si = me(), Pe = oe("div"), ht = oe("button"), Te(qn.$$.fragment), As = me(), Ii = oe("span"), Ii.textContent = "Position", N(n, "class", "icon tool-button svelte-eg64j9"), N(n, "aria-label", "Create box"), Ie(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), N(o, "class", "tool-label svelte-eg64j9"), N(t, "class", "tool-group svelte-eg64j9"), N(c, "class", "icon tool-button svelte-eg64j9"), N(c, "aria-label", "Freehand drawing"), Ie(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), N(_, "class", "tool-label svelte-eg64j9"), N(a, "class", "tool-group svelte-eg64j9"), N(g, "class", "icon tool-button svelte-eg64j9"), N(g, "aria-label", "Circle drawing"), Ie(
        g,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), N(y, "class", "tool-label svelte-eg64j9"), N(p, "class", "tool-group svelte-eg64j9"), N(Y, "class", "icon tool-button svelte-eg64j9"), N(Y, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), Ie(
        Y,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), N(W, "class", "tool-label svelte-eg64j9"), N(x, "class", "tool-group svelte-eg64j9"), N(E, "class", "icon tool-button svelte-eg64j9"), N(E, "aria-label", "Erase areas from shapes"), Ie(
        E,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), N(q, "class", "icon dropdown-button svelte-eg64j9"), N(q, "aria-label", "Eraser settings"), N(R, "class", "eraser-buttons svelte-eg64j9"), N(C, "class", "tool-label svelte-eg64j9"), N(S, "class", "tool-group eraser-group svelte-eg64j9"), N(Z, "class", "icon tool-button svelte-eg64j9"), N(Z, "aria-label", "Edit boxes"), Ie(
        Z,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), N(J, "class", "tool-label svelte-eg64j9"), N(le, "class", "tool-group svelte-eg64j9"), N(se, "class", "icon tool-button svelte-eg64j9"), N(se, "aria-label", "Undo (Ctrl+Z)"), Ie(
        se,
        "disabled",
        /*undoStack*/
        i[34].length === 0
      ), N(H, "class", "tool-label svelte-eg64j9"), N(I, "class", "tool-group svelte-eg64j9"), N(Se, "class", "icon tool-button svelte-eg64j9"), N(Se, "aria-label", "Redo (Ctrl+Y)"), Ie(
        Se,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), N(nt, "class", "tool-label svelte-eg64j9"), N(Ne, "class", "tool-group svelte-eg64j9"), N(ve, "class", "icon tool-button svelte-eg64j9"), N(ve, "aria-label", "Show/Hide labels"), Ie(
        ve,
        "selected",
        /*labelVisibility*/
        i[33]
      ), N(de, "class", "icon dropdown-button svelte-eg64j9"), N(de, "aria-label", "Shape settings"), N(ft, "class", "button-group svelte-eg64j9"), N(ce, "class", "tool-label svelte-eg64j9"), N(Ke, "class", "tool-group svelte-eg64j9"), N(kt, "class", "icon tool-button svelte-eg64j9"), N(kt, "aria-label", "Clear Shapes"), N(yt, "class", "tool-label svelte-eg64j9"), N(Dt, "class", "tool-group svelte-eg64j9"), N(Hn, "class", "icon tool-button svelte-eg64j9"), N(Hn, "aria-label", "Export Image"), N(Pn, "class", "tool-label svelte-eg64j9"), N(Rn, "class", "tool-group svelte-eg64j9"), N(ht, "class", "icon tool-button svelte-eg64j9"), N(ht, "aria-label", "Show/Hide Position"), Ie(
        ht,
        "selected",
        /*showPositionNavigator*/
        i[14]
      ), N(Ii, "class", "tool-label svelte-eg64j9"), N(Pe, "class", "tool-group svelte-eg64j9"), N(e, "class", "canvas-control svelte-eg64j9");
    },
    m($, it) {
      gn($, e, it), j(e, t), j(t, n), Ue(s, n, null), j(t, l), j(t, o), j(e, r), j(e, a), j(a, c), Ue(f, c, null), j(a, h), j(a, _), j(e, d), j(e, p), j(p, g), Ue(u, g, null), j(p, b), j(p, y), j(e, w), j(e, x), j(x, Y), Ue(k, Y, null), j(x, X), j(x, W), j(e, v), j(e, S), j(S, R), j(R, E), Ue(z, E, null), j(R, F), j(R, q), Ue(O, q, null), j(S, G), j(S, C), j(e, L), j(e, le), j(le, Z), Ue(U, Z, null), j(le, pe), j(le, J), j(e, P), Ge && Ge.m(e, null), j(e, be), Je && Je.m(e, null), j(e, D), j(e, I), j(I, se), Ue(Q, se, null), j(I, Ye), j(I, H), j(e, Be), j(e, Ne), j(Ne, Se), Ue(He, Se, null), j(Ne, Ve), j(Ne, nt), j(e, re), j(e, Ke), j(Ke, ft), j(ft, ve), Ue(Me, ve, null), j(ft, B), j(ft, de), Ue(_e, de, null), j(Ke, Re), j(Ke, ce), j(e, Le), j(e, Dt), j(Dt, kt), Ue(on, kt, null), j(Dt, En), j(Dt, yt), j(e, an), j(e, Rn), j(Rn, Hn), Ue(Ln, Hn, null), j(Rn, Et), j(Rn, Pn), j(e, si), j(e, Pe), j(Pe, ht), Ue(qn, ht, null), j(Pe, As), j(Pe, Ii), pt = !0, ds || (js = [
        Ae(
          n,
          "click",
          /*click_handler*/
          i[75]
        ),
        Ae(
          c,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        Ae(
          g,
          "click",
          /*click_handler_2*/
          i[77]
        ),
        Ae(
          Y,
          "click",
          /*click_handler_3*/
          i[78]
        ),
        Ae(
          E,
          "click",
          /*click_handler_4*/
          i[79]
        ),
        Ae(
          q,
          "click",
          /*openEraserSettings*/
          i[43]
        ),
        Ae(
          Z,
          "click",
          /*click_handler_5*/
          i[80]
        ),
        Ae(
          se,
          "click",
          /*click_handler_8*/
          i[83]
        ),
        Ae(
          Se,
          "click",
          /*click_handler_9*/
          i[84]
        ),
        Ae(
          ve,
          "click",
          /*click_handler_10*/
          i[85]
        ),
        Ae(
          de,
          "click",
          /*openShapeSettings*/
          i[46]
        ),
        Ae(
          kt,
          "click",
          /*click_handler_11*/
          i[86]
        ),
        Ae(
          Hn,
          "click",
          /*click_handler_12*/
          i[87]
        ),
        Ae(
          ht,
          "click",
          /*click_handler_13*/
          i[88]
        )
      ], ds = !0);
    },
    p($, it) {
      (!pt || it[0] & /*mode, Mode*/
      4608) && Ie(
        n,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].creation
      ), (!pt || it[0] & /*mode, Mode*/
      4608) && Ie(
        c,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].freehand
      ), (!pt || it[0] & /*mode, Mode*/
      4608) && Ie(
        g,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].circle
      ), (!pt || it[0] & /*mode, Mode*/
      4608) && Ie(
        Y,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].polygon
      ), (!pt || it[0] & /*mode, Mode*/
      4608) && Ie(
        E,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].erase
      ), (!pt || it[0] & /*mode, Mode*/
      4608) && Ie(
        Z,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].drag
      ), /*showRemoveButton*/
      $[3] ? Ge ? (Ge.p($, it), it[0] & /*showRemoveButton*/
      8 && he(Ge, 1)) : (Ge = Pc($), Ge.c(), he(Ge, 1), Ge.m(e, be)) : Ge && (ki(), ge(Ge, 1, 1, () => {
        Ge = null;
      }), wi()), !/*disableEditBoxes*/
      $[5] && /*labelDetailLock*/
      $[32] ? Je ? (Je.p($, it), it[0] & /*disableEditBoxes*/
      32 | it[1] & /*labelDetailLock*/
      2 && he(Je, 1)) : (Je = qc($), Je.c(), he(Je, 1), Je.m(e, D)) : Je && (ki(), ge(Je, 1, 1, () => {
        Je = null;
      }), wi()), (!pt || it[0] & /*redoStack*/
      8192) && Ie(
        Se,
        "disabled",
        /*redoStack*/
        $[13].length === 0
      );
      const Fs = {};
      it[1] & /*labelVisibility*/
      4 && (Fs.selected = /*labelVisibility*/
      $[33]), Me.$set(Fs), (!pt || it[1] & /*labelVisibility*/
      4) && Ie(
        ve,
        "selected",
        /*labelVisibility*/
        $[33]
      ), (!pt || it[0] & /*showPositionNavigator*/
      16384) && Ie(
        ht,
        "selected",
        /*showPositionNavigator*/
        $[14]
      );
    },
    i($) {
      pt || (he(s.$$.fragment, $), he(f.$$.fragment, $), he(u.$$.fragment, $), he(k.$$.fragment, $), he(z.$$.fragment, $), he(O.$$.fragment, $), he(U.$$.fragment, $), he(Ge), he(Je), he(Q.$$.fragment, $), he(He.$$.fragment, $), he(Me.$$.fragment, $), he(_e.$$.fragment, $), he(on.$$.fragment, $), he(Ln.$$.fragment, $), he(qn.$$.fragment, $), pt = !0);
    },
    o($) {
      ge(s.$$.fragment, $), ge(f.$$.fragment, $), ge(u.$$.fragment, $), ge(k.$$.fragment, $), ge(z.$$.fragment, $), ge(O.$$.fragment, $), ge(U.$$.fragment, $), ge(Ge), ge(Je), ge(Q.$$.fragment, $), ge(He.$$.fragment, $), ge(Me.$$.fragment, $), ge(_e.$$.fragment, $), ge(on.$$.fragment, $), ge(Ln.$$.fragment, $), ge(qn.$$.fragment, $), pt = !1;
    },
    d($) {
      $ && mn(e), Oe(s), Oe(f), Oe(u), Oe(k), Oe(z), Oe(O), Oe(U), Ge && Ge.d(), Je && Je.d(), Oe(Q), Oe(He), Oe(Me), Oe(_e), Oe(on), Oe(Ln), Oe(qn), ds = !1, hu(js);
    }
  };
}
function Pc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new gp({}), {
    c() {
      e = oe("div"), t = oe("button"), Te(n.$$.fragment), s = me(), l = oe("span"), l.textContent = "Delete", N(t, "class", "icon tool-button svelte-eg64j9"), N(t, "aria-label", "Remove boxes"), N(l, "class", "tool-label svelte-eg64j9"), N(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      gn(c, e, f), j(e, t), Ue(n, t, null), j(e, s), j(e, l), o = !0, r || (a = Ae(
        t,
        "click",
        /*click_handler_6*/
        i[81]
      ), r = !0);
    },
    p: uu,
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ge(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && mn(e), Oe(n), r = !1, a();
    }
  };
}
function qc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Cp({}), {
    c() {
      e = oe("div"), t = oe("button"), Te(n.$$.fragment), s = me(), l = oe("span"), l.textContent = "Label", N(t, "class", "icon tool-button svelte-eg64j9"), N(t, "aria-label", "Edit label"), N(l, "class", "tool-label svelte-eg64j9"), N(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      gn(c, e, f), j(e, t), Ue(n, t, null), j(e, s), j(e, l), o = !0, r || (a = Ae(
        t,
        "click",
        /*click_handler_7*/
        i[82]
      ), r = !0);
    },
    p: uu,
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ge(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && mn(e), Oe(n), r = !1, a();
    }
  };
}
function Ic(i) {
  let e, t;
  return e = new Da({
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
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[16]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length ? Ei(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[16]
          ].color
        ) : ""
      ),
      opacity: (
        /*selectedBox*/
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[16]
          ].alpha
        ) : 0.5
      ),
      showOpacity: !0
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[56]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[89]
  ), {
    c() {
      Te(e.$$.fragment);
    },
    m(n, s) {
      Ue(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      65537 && (l.label = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[16]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      65537 && (l.color = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length ? Ei(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[16]
        ].color
      ) : ""), s[0] & /*selectedBox, value*/
      65537 && (l.opacity = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[16]
        ].alpha
      ) : 0.5), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function Ac(i) {
  let e, t;
  return e = new Da({
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
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length && /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[16]
        ].label || /*choices*/
        (i[1].length > 0 ? (
          /*choices*/
          i[1][0][0]
        ) : "")
      ),
      color: (
        /*selectedBox*/
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length ? Ei(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[16]
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
        i[32]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[57]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[90]
  ), {
    c() {
      Te(e.$$.fragment);
    },
    m(n, s) {
      Ue(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value, choices*/
      65539 && (l.label = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length && /*value*/
      n[0].boxes[
        /*selectedBox*/
        n[16]
      ].label || /*choices*/
      (n[1].length > 0 ? (
        /*choices*/
        n[1][0][0]
      ) : "")), s[0] & /*selectedBox, value, choicesColors*/
      65541 && (l.color = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length ? Ei(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[16]
        ].color
      ) : (
        /*choicesColors*/
        n[2].length > 0 ? (
          /*choicesColors*/
          n[2][0]
        ) : ""
      )), s[1] & /*labelDetailLock*/
      2 && (l.labelDetailLock = /*labelDetailLock*/
      n[32]), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function jc(i) {
  let e, t;
  return e = new Da({
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
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[16]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[16] >= 0 && /*selectedBox*/
        i[16] < /*value*/
        i[0].boxes.length ? Ei(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[16]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[32]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[58]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[91]
  ), {
    c() {
      Te(e.$$.fragment);
    },
    m(n, s) {
      Ue(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      65537 && (l.label = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[16]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      65537 && (l.color = /*selectedBox*/
      n[16] >= 0 && /*selectedBox*/
      n[16] < /*value*/
      n[0].boxes.length ? Ei(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[16]
        ].color
      ) : ""), s[1] & /*labelDetailLock*/
      2 && (l.labelDetailLock = /*labelDetailLock*/
      n[32]), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function nw(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p, g, u, b, y, w, x, Y = (
    /*showPositionNavigator*/
    i[14] && /*imageWidth*/
    i[20] > 0 && /*imageHeight*/
    i[21] > 0 && Hc(i)
  ), k = (
    /*interactive*/
    i[4] && Lc(i)
  ), X = (
    /*editModalVisible*/
    i[23] && Ic(i)
  ), W = (
    /*newModalVisible*/
    i[24] && Ac(i)
  ), v = (
    /*editDefaultLabelVisible*/
    i[25] && jc(i)
  );
  function S(C) {
    i[92](C);
  }
  function R(C) {
    i[93](C);
  }
  let E = {};
  /*eraserSettingsVisible*/
  i[26] !== void 0 && (E.visible = /*eraserSettingsVisible*/
  i[26]), /*eraserSize*/
  i[28] !== void 0 && (E.eraserSize = /*eraserSize*/
  i[28]), c = new Mv({ props: E }), mi.push(() => $i(c, "visible", S)), mi.push(() => $i(c, "eraserSize", R)), c.$on(
    "change",
    /*handleEraserSettingsChange*/
    i[44]
  ), c.$on(
    "close",
    /*handleEraserSettingsClose*/
    i[45]
  );
  function z(C) {
    i[94](C);
  }
  function F(C) {
    i[95](C);
  }
  function q(C) {
    i[96](C);
  }
  function O(C) {
    i[97](C);
  }
  let G = {};
  return (
    /*shapeSettingsVisible*/
    i[27] !== void 0 && (G.visible = /*shapeSettingsVisible*/
    i[27]), /*shapeOpacity*/
    i[29] !== void 0 && (G.opacity = /*shapeOpacity*/
    i[29]), /*shapeStrokeWidth*/
    i[30] !== void 0 && (G.strokeWidth = /*shapeStrokeWidth*/
    i[30]), /*shapeSelectedStrokeWidth*/
    i[31] !== void 0 && (G.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
    i[31]), d = new Rv({ props: G }), mi.push(() => $i(d, "visible", z)), mi.push(() => $i(d, "opacity", F)), mi.push(() => $i(d, "strokeWidth", q)), mi.push(() => $i(d, "selectedStrokeWidth", O)), d.$on(
      "change",
      /*handleShapeSettingsChange*/
      i[47]
    ), d.$on(
      "close",
      /*handleShapeSettingsClose*/
      i[48]
    ), {
      c() {
        e = oe("div"), t = oe("canvas"), n = me(), Y && Y.c(), s = me(), k && k.c(), l = me(), X && X.c(), o = me(), W && W.c(), r = me(), v && v.c(), a = me(), Te(c.$$.fragment), _ = me(), Te(d.$$.fragment), N(t, "tabindex", "0"), N(t, "class", "canvas-annotator svelte-eg64j9"), Ie(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[22]
        ), N(e, "class", "canvas-container svelte-eg64j9"), N(e, "tabindex", "-1"), bl(
          e,
          "height",
          /*height*/
          i[6]
        ), bl(
          e,
          "width",
          /*width*/
          i[7]
        ), Ie(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[22]
        );
      },
      m(C, L) {
        gn(C, e, L), j(e, t), i[74](t), j(e, n), Y && Y.m(e, null), gn(C, s, L), k && k.m(C, L), gn(C, l, L), X && X.m(C, L), gn(C, o, L), W && W.m(C, L), gn(C, r, L), v && v.m(C, L), gn(C, a, L), Ue(c, C, L), gn(C, _, L), Ue(d, C, L), y = !0, w || (x = [
          Ae(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[36]
          ),
          Ae(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[37]
          ),
          Ae(t, "pointermove", function() {
            Jv(
              /*handlesCursor*/
              i[8] ? (
                /*handlePointerMove*/
                i[38]
              ) : null
            ) && /*handlesCursor*/
            (i[8] ? (
              /*handlePointerMove*/
              i[38]
            ) : null).apply(this, arguments);
          }),
          Ae(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[55]
          ),
          Ae(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[39]
          ),
          Ae(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[62]
          ),
          Ae(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[63]
          )
        ], w = !0);
      },
      p(C, L) {
        i = C, (!y || L[0] & /*isScrollableMode*/
        4194304) && Ie(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[22]
        ), /*showPositionNavigator*/
        i[14] && /*imageWidth*/
        i[20] > 0 && /*imageHeight*/
        i[21] > 0 ? Y ? (Y.p(i, L), L[0] & /*showPositionNavigator, imageWidth, imageHeight*/
        3162112 && he(Y, 1)) : (Y = Hc(i), Y.c(), he(Y, 1), Y.m(e, null)) : Y && (ki(), ge(Y, 1, 1, () => {
          Y = null;
        }), wi()), (!y || L[0] & /*height*/
        64) && bl(
          e,
          "height",
          /*height*/
          i[6]
        ), (!y || L[0] & /*width*/
        128) && bl(
          e,
          "width",
          /*width*/
          i[7]
        ), (!y || L[0] & /*isScrollableMode*/
        4194304) && Ie(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[22]
        ), /*interactive*/
        i[4] ? k ? (k.p(i, L), L[0] & /*interactive*/
        16 && he(k, 1)) : (k = Lc(i), k.c(), he(k, 1), k.m(l.parentNode, l)) : k && (ki(), ge(k, 1, 1, () => {
          k = null;
        }), wi()), /*editModalVisible*/
        i[23] ? X ? (X.p(i, L), L[0] & /*editModalVisible*/
        8388608 && he(X, 1)) : (X = Ic(i), X.c(), he(X, 1), X.m(o.parentNode, o)) : X && (ki(), ge(X, 1, 1, () => {
          X = null;
        }), wi()), /*newModalVisible*/
        i[24] ? W ? (W.p(i, L), L[0] & /*newModalVisible*/
        16777216 && he(W, 1)) : (W = Ac(i), W.c(), he(W, 1), W.m(r.parentNode, r)) : W && (ki(), ge(W, 1, 1, () => {
          W = null;
        }), wi()), /*editDefaultLabelVisible*/
        i[25] ? v ? (v.p(i, L), L[0] & /*editDefaultLabelVisible*/
        33554432 && he(v, 1)) : (v = jc(i), v.c(), he(v, 1), v.m(a.parentNode, a)) : v && (ki(), ge(v, 1, 1, () => {
          v = null;
        }), wi());
        const le = {};
        !f && L[0] & /*eraserSettingsVisible*/
        67108864 && (f = !0, le.visible = /*eraserSettingsVisible*/
        i[26], Qi(() => f = !1)), !h && L[0] & /*eraserSize*/
        268435456 && (h = !0, le.eraserSize = /*eraserSize*/
        i[28], Qi(() => h = !1)), c.$set(le);
        const Z = {};
        !p && L[0] & /*shapeSettingsVisible*/
        134217728 && (p = !0, Z.visible = /*shapeSettingsVisible*/
        i[27], Qi(() => p = !1)), !g && L[0] & /*shapeOpacity*/
        536870912 && (g = !0, Z.opacity = /*shapeOpacity*/
        i[29], Qi(() => g = !1)), !u && L[0] & /*shapeStrokeWidth*/
        1073741824 && (u = !0, Z.strokeWidth = /*shapeStrokeWidth*/
        i[30], Qi(() => u = !1)), !b && L[1] & /*shapeSelectedStrokeWidth*/
        1 && (b = !0, Z.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
        i[31], Qi(() => b = !1)), d.$set(Z);
      },
      i(C) {
        y || (he(Y), he(k), he(X), he(W), he(v), he(c.$$.fragment, C), he(d.$$.fragment, C), y = !0);
      },
      o(C) {
        ge(Y), ge(k), ge(X), ge(W), ge(v), ge(c.$$.fragment, C), ge(d.$$.fragment, C), y = !1;
      },
      d(C) {
        C && (mn(e), mn(s), mn(l), mn(o), mn(r), mn(a), mn(_)), i[74](null), Y && Y.d(), k && k.d(C), X && X.d(C), W && W.d(C), v && v.d(C), Oe(c, C), Oe(d, C), w = !1, hu(x);
      }
    }
  );
}
const iw = 50, sw = 3, $o = 3;
function fi(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Ei(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function ui(i, e) {
  const t = e.getBoundingClientRect();
  let n = i.clientX - t.left, s = i.clientY - t.top;
  return { mouseX: n, mouseY: s };
}
function lw(i, e, t) {
  let n;
  var s;
  (function(m) {
    m[m.creation = 0] = "creation", m[m.drag = 1] = "drag", m[m.freehand = 2] = "freehand", m[m.circle = 3] = "circle", m[m.polygon = 4] = "polygon", m[m.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, f = !1, h = !1, { imageUrl: _ = null } = e, { interactive: d } = e, { boxMinSize: p = 10 } = e, { handleSize: g } = e, { value: u } = e, { choices: b = [] } = e, { choicesColors: y = [] } = e, { disableEditBoxes: w = !1 } = e, { height: x = "100%" } = e, { width: Y = "100%" } = e, { singleBox: k = !1 } = e, { showRemoveButton: X = null } = e, { handlesCursor: W = !0 } = e, { useDefaultLabel: v = !1 } = e, { shapeCreationMode: S = "drag" } = e, { autoScroll: R = !0 } = e, { preserveResolution: E = !0 } = e;
  X === null && (X = w);
  let z, F, q = null, O = -1, G = s.drag, C = new Kv(ce), L, le = 0, Z = 0, U = 1;
  function pe(m) {
    switch (m) {
      case "box":
        return s.creation;
      case "freehand":
        return s.freehand;
      case "circle":
        return s.circle;
      case "polygon":
        return s.polygon;
      case "drag":
        return s.drag;
      default:
        return s.drag;
    }
  }
  u !== null && u.boxes && u.boxes.length == 0 ? G = pe(S) : u !== null && u.boxes && u.boxes.length > 0 ? G = S === "drag" ? s.drag : pe(S) : G = pe(S);
  let J = 0, P = 0, be = 0, D = 0, I = 1, se = 0, Q = 0, Ye = 0, H = 0, Be = !1, Ne = !1, Se = !1, He = !1, Ve = !1, nt = !1, re = null, Ke = 10, { boxAlpha: ft = 0.5 } = e, ve = ft, Me = 2, B = 4, de = v, _e = { label: "", color: "" };
  const Re = tw();
  function ce() {
    if (F) {
      if (t(17, le = C.offsetX), t(18, Z = C.offsetY), t(19, U = C.scale), F.clearRect(0, 0, z.width, z.height), F.save(), F.translate(C.offsetX, C.offsetY), F.scale(C.scale, C.scale), q !== null && u !== null) {
        switch (u.orientation) {
          case 0:
            F.drawImage(q, 0, 0, se, Q);
            break;
          case 1:
            F.translate(se, 0), F.rotate(Math.PI / 2), F.drawImage(q, 0, 0, Q, se);
            break;
          case 2:
            F.translate(se, Q), F.rotate(Math.PI), F.drawImage(q, 0, 0, se, Q);
            break;
          case 3:
            F.translate(0, Q), F.rotate(-Math.PI / 2), F.drawImage(q, 0, 0, Q, se);
            break;
        }
        F.restore();
      }
      if (u !== null && u.boxes)
        for (const m of u.boxes.slice().reverse())
          m.render(F, c);
      G === s.erase && L && L.renderErasePath(F);
    }
  }
  function Le(m) {
    t(16, O = m), u !== null && u.boxes && (u.boxes.forEach((M) => {
      M.setSelected(!1);
    }), m >= 0 && m < u.boxes.length && u.boxes[m].setSelected(!0)), ce();
  }
  function Dt(m) {
    d && (a = !1, m.target instanceof Element && m.target.hasPointerCapture(m.pointerId) && m.target.releasePointerCapture(m.pointerId), G === s.creation ? pt(m) : G === s.freehand ? qn(m) : G === s.circle ? ds(m) : G === s.polygon ? As(m) : G === s.erase ? js(m) : G === s.drag && on(m));
  }
  function kt(m, M) {
    let A, T;
    return Be ? (A = (m - C.offsetX) / C.scale, T = (M - C.offsetY) / C.scale) : (A = (m - C.offsetX) / I / C.scale, T = (M - C.offsetY) / I / C.scale), { imageX: A, imageY: T };
  }
  function on(m) {
    const M = ui(m, z), A = M.mouseX, T = M.mouseY;
    let V = !1;
    if (!(u === null || !u.boxes)) {
      for (const [ee, te] of u.boxes.entries()) {
        const bt = te.indexOfPointInsideHandle(A, T);
        if (bt >= 0) {
          V = !0, Le(ee);
          let rn = null;
          te.onMoveStart = () => {
            rn = Pe(te);
          }, te.onMoveEnd = () => {
            if (rn) {
              const $l = Pe(te);
              Et({
                type: "edit_shape",
                shapeIndex: ee,
                oldShapeData: rn,
                shapeData: $l
              }), rn = null;
            }
          }, te.startResize(bt, m);
          return;
        }
      }
      for (const [ee, te] of u.boxes.entries())
        if (te.isPointInsideBox(A, T)) {
          V = !0, Le(ee);
          let bt = null;
          te.onMoveStart = () => {
            bt = Pe(te);
          }, te.onMoveEnd = () => {
            bt && (Et({
              type: "edit_shape",
              shapeIndex: ee,
              oldShapeData: bt,
              shapeData: Pe(te)
            }), bt = null);
          }, te.startDrag(m);
          return;
        }
      if (!V) {
        if (k || Le(-1), G === s.drag) {
          const ee = kt(A, T);
          let te = ee.imageX, bt = ee.imageY;
          const rn = Be ? Ye : (q == null ? void 0 : q.naturalWidth) || 0, $l = Be ? H : (q == null ? void 0 : q.naturalHeight) || 0;
          q && te >= 0 && te <= rn && bt >= 0 && bt <= $l && Re("select", {
            coordinates: [Math.round(te), Math.round(bt)]
          });
        }
        G === s.drag && C.startDrag(m);
      }
    }
  }
  function En(m) {
    G === s.erase && L && Je(), Re("change");
  }
  function yt(m) {
    if (u === null)
      return;
    if (G === s.erase && L) {
      Ge(m);
      return;
    }
    if (G !== s.drag)
      return;
    const M = ui(m, z), A = M.mouseX, T = M.mouseY;
    for (const [V, ee] of u.boxes.entries()) {
      const te = ee.indexOfPointInsideHandle(A, T);
      if (te >= 0) {
        t(11, z.style.cursor = ee.resizeHandles[te].cursor, z);
        return;
      }
    }
    t(11, z.style.cursor = "default", z);
  }
  function an(m) {
    if (d) {
      if (m.ctrlKey) {
        switch (m.key.toLowerCase()) {
          case "z":
            m.shiftKey ? si() : Pn(), m.preventDefault();
            break;
          case "y":
            si(), m.preventDefault();
            break;
        }
        return;
      }
      switch (m.key) {
        case "Delete":
          li();
          break;
        case " ":
          G === s.polygon && re && re.isCreating && (m.preventDefault(), re._points.length >= re.minPoints && re.finishCreating());
          break;
      }
    }
  }
  function Rn(m) {
    m.preventDefault();
    const M = 1 / (1 + m.deltaY / 1e3 * 0.5), A = parseFloat((C.scale * M).toFixed(2)), T = A < 1 ? 1 : A, V = z.getBoundingClientRect(), ee = m.clientX - V.left, te = m.clientY - V.top, bt = (ee - C.offsetX) / C.scale, rn = (te - C.offsetY) / C.scale;
    C.offsetX = ee - bt * T, C.offsetY = te - rn * T, C.scale = T, ce();
  }
  function Hn(m) {
    const { x: M, y: A } = m.detail, T = 0, V = z.width - se * C.scale, ee = 0, te = z.height - Q * C.scale;
    C.offsetX = Math.max(V, Math.min(T, M)), C.offsetY = Math.max(te, Math.min(ee, A)), ce();
  }
  function Ln() {
    if (C.scale = 1, q !== null && z) {
      if (C.imageRotatedWidth <= z.width) {
        const m = (z.width - se) / 2;
        C.offsetX = m;
      } else
        C.offsetX = 0;
      if (Q < z.height) {
        const m = (z.height - Q) / 2;
        C.offsetY = m;
      } else
        C.offsetY = 0;
    } else
      C.offsetX = 0, C.offsetY = 0;
    ce();
  }
  function Et(m) {
    if (a) {
      console.log("Skipping undo action during initial state:", m);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, m), { timestamp: Date.now() })), l.length > iw && l.shift(), console.log("Added undo action:", m, "Stack size:", l.length);
  }
  function Pn() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let M = r.length - 1; M >= 0; M--) {
        const A = r[M];
        if (A.recoveryCount < $o) {
          u.boxes.map((T) => Pe(T)), t(0, u.boxes = [], u);
          for (const T of A.allShapes) {
            const V = ht(T);
            V && u.boxes.push(V);
          }
          A.recoveryCount++, A.recoveryCount >= $o && (r.splice(M, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${u.boxes.length} shapes from pre-clear history. Recovery ${A.recoveryCount}/${$o}`), Le(-1), ce(), Re("change");
          return;
        }
      }
      console.log("Cannot undo: no recoverable pre-clear states available");
      return;
    }
    const m = l.pop();
    if (m) {
      switch (m.type) {
        case "create_shape":
          if (m.shapeIndex !== void 0 && m.shapeIndex < u.boxes.length) {
            const M = u.boxes.splice(m.shapeIndex, 1)[0];
            o.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Pe(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const M = ht(m.shapeData);
            u.boxes.splice(m.shapeIndex, 0, M), o.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (re && m.pointData) {
            if (re._points.pop(), re._points.length === 0) {
              const M = u.boxes.indexOf(re);
              M >= 0 && u.boxes.splice(M, 1), re = null;
            } else
              re.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: m.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.oldShapeData && m.shapeIndex < u.boxes.length) {
            const M = Pe(u.boxes[m.shapeIndex]);
            ht(m.oldShapeData, u.boxes[m.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: M,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", m);
            const M = u.boxes.map((A) => Pe(A));
            t(0, u.boxes = [], u);
            for (const A of m.oldShapeData) {
              const T = ht(A);
              T && u.boxes.push(T);
            }
            console.log("Restored shapes:", u.boxes.length), o.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: M,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      Le(-1), ce(), Re("change");
    }
  }
  function si() {
    if (o.length === 0) return;
    const m = o.pop();
    if (m) {
      switch (m.type) {
        case "create_shape":
          if (m.shapeIndex !== void 0 && m.shapeIndex < u.boxes.length) {
            const M = u.boxes.splice(m.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Pe(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const M = ht(m.shapeData);
            u.boxes.splice(m.shapeIndex, 0, M), l.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          m.pointData && (re ? (re._points.push(m.pointData), re._points.length === 1 && !u.boxes.includes(re) && (k ? t(0, u.boxes = [re], u) : t(0, u.boxes = [re, ...u.boxes], u)), re.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: m.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.shapeData && m.shapeIndex < u.boxes.length) {
            const M = Pe(u.boxes[m.shapeIndex]);
            ht(m.shapeData, u.boxes[m.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: M,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.shapeData) {
            const M = u.boxes.map((A) => Pe(A));
            t(0, u.boxes = [], u);
            for (const A of m.shapeData) {
              const T = ht(A);
              T && u.boxes.push(T);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: M,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      Le(-1), ce(), Re("change");
    }
  }
  function Pe(m) {
    return m ? m instanceof ei ? {
      type: "freehand",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof nn ? {
      type: "polygon",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof _i ? {
      type: "circle",
      label: m.label,
      color: m.color,
      centerX: m._centerX,
      centerY: m._centerY,
      radius: m._radius
    } : m instanceof di ? {
      type: "box",
      label: m.label,
      color: m.color,
      xmin: m._xmin,
      ymin: m._ymin,
      xmax: m._xmax,
      ymax: m._ymax
    } : null : null;
  }
  function ht(m, M) {
    if (!m) return null;
    if (M)
      return M.label = m.label, M.color = m.color, M instanceof di ? (M._xmin = m.xmin, M._ymin = m.ymin, M._xmax = m.xmax, M._ymax = m.ymax, typeof M.applyUserScale == "function" && M.applyUserScale()) : M instanceof _i ? (M._centerX = m.centerX, M._centerY = m.centerY, M._radius = m.radius, typeof M.applyUserScale == "function" && M.applyUserScale()) : (M.xmin = m.xmin, M.ymin = m.ymin, M.xmax = m.xmax, M.ymax = m.ymax), (M instanceof ei || M instanceof nn) && m.points && (M._points = [...m.points], M.updateBoundingBox()), M;
    switch (m.type) {
      case "freehand":
        const A = new ei(ce, Kt, C, z, J, P, be, D, m.label, m.color, ve, p, g, Me, B, I);
        return A._points = [...m.points], A.updateBoundingBox(), A;
      case "polygon":
        const T = new nn(ce, Kt, C, z, J, P, be, D, m.label, m.color, ve, p, g, Me, B, I);
        return T._points = [...m.points], T.updateBoundingBox(), T;
      case "circle":
        return new _i(ce, Kt, C, z, J, P, be, D, m.label, m.centerX, m.centerY, m.radius, m.color, ve, p, g, Me, B, I);
      case "box":
        return new di(ce, Kt, C, z, J, P, be, D, m.label, m.xmin, m.ymin, m.xmax, m.ymax, m.color, ve, p, g, Me, B, I);
    }
    return null;
  }
  function qn(m) {
    const M = ui(m, z), A = kt(M.mouseX, M.mouseY);
    z.getBoundingClientRect();
    let T;
    y.length > 0 ? T = fi(y[0]) : k ? u.boxes.length > 0 ? T = u.boxes[0].color : T = _t[0] : T = _t[u.boxes.length % _t.length];
    let V = new ei(ce, Kt, C, z, J, P, be, D, "", T, ve, p, g, Me, B, I);
    V.startCreating(m, A.imageX, A.imageY), k ? t(0, u.boxes = [V], u) : t(0, u.boxes = [V, ...u.boxes], u), Et({ type: "create_shape", shapeIndex: 0 }), Le(0), ce(), Re("change");
  }
  function As(m) {
    re && (!re._points || re._points.length === 0 || !u.boxes.includes(re)) && (console.log("Resetting invalid currentPolygon state"), re = null), re === null ? Ii(m) : re.isCreating && (re.addPoint(m) || (ce(), Re("change")));
  }
  function Ii(m) {
    const M = ui(m, z), A = kt(M.mouseX, M.mouseY);
    z.getBoundingClientRect();
    let T;
    y.length > 0 ? T = fi(y[0]) : k ? u.boxes.length > 0 ? T = u.boxes[0].color : T = _t[0] : T = _t[u.boxes.length % _t.length];
    let V = new nn(ce, yu, C, z, J, P, be, D, "", T, ve, p, g, Me, B, I);
    V.onPointAdded = (ee) => {
      Et({ type: "polygon_point", pointData: ee });
    }, re = V, V.startCreating(m, A.imageX, A.imageY), k ? t(0, u.boxes = [V], u) : t(0, u.boxes = [V, ...u.boxes], u), Et({ type: "create_shape", shapeIndex: 0 }), Le(0), ce(), Re("change");
  }
  function pt(m) {
    const M = ui(m, z), A = kt(M.mouseX, M.mouseY);
    let T = A.imageX, V = A.imageY, ee;
    y.length > 0 ? ee = fi(y[0]) : k ? u.boxes.length > 0 ? ee = u.boxes[0].color : ee = _t[0] : ee = _t[u.boxes.length % _t.length];
    let te = new di(ce, Kt, C, z, J, P, be, D, "", T, V, T, V, ee, ve, p, g, Me, B, I);
    te.startCreating(m, T, V), k ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), Et({ type: "create_shape", shapeIndex: 0 }), Le(0), ce(), Re("change");
  }
  function ds(m) {
    const M = ui(m, z), A = kt(M.mouseX, M.mouseY);
    let T = A.imageX, V = A.imageY, ee;
    y.length > 0 ? ee = fi(y[0]) : k ? u.boxes.length > 0 ? ee = u.boxes[0].color : ee = _t[0] : ee = _t[u.boxes.length % _t.length];
    let te = new _i(ce, Kt, C, z, J, P, be, D, "", T, V, 0, ee, ve, p, g, Me, B, I);
    te.startCreating(m, T, V), k ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), Et({ type: "create_shape", shapeIndex: 0 }), Le(0), ce(), Re("change");
  }
  function js(m) {
    L || (L = new Vv(C, I, Be), L.setBrushSize(Ke)), L.setScaleFactor(I), L.setScrollableMode(Be);
    const M = z.getBoundingClientRect();
    L.startErase(m, M), ce();
  }
  function Ge(m) {
    if (!L) return;
    const M = z.getBoundingClientRect();
    L.continueErase(m, M), ce();
  }
  function Je() {
    if (!L) return;
    const m = L.endErase();
    if (m.length === 0) {
      In();
      return;
    }
    const M = [...u.boxes], A = [], T = [];
    for (let V = 0; V < u.boxes.length; V++) {
      const ee = u.boxes[V], te = L.eraseFromShape(ee, m);
      if (te.length === 0)
        A.push(V);
      else {
        if (te.length === 1 && te[0] === ee)
          continue;
        A.push(V), T.push(...te);
      }
    }
    if (A.length > 0 || T.length > 0) {
      for (let V = A.length - 1; V >= 0; V--)
        u.boxes.splice(A[V], 1);
      u.boxes.push(...T), Et({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: M.map((V) => Pe(V)),
        shapeData: u.boxes.map((V) => Pe(V))
      }), Le(-1), Re("change");
    }
    ce(), In();
  }
  function $() {
    t(26, Ve = !0);
  }
  function it(m) {
    t(28, Ke = m.detail.size), L && L.setBrushSize(Ke);
  }
  function Fs() {
    t(26, Ve = !1);
  }
  function bu() {
    t(27, nt = !0);
  }
  function vu(m) {
    t(29, ve = m.detail.opacity), t(30, Me = m.detail.strokeWidth), t(31, B = m.detail.selectedStrokeWidth), ku(), ce();
  }
  function wu() {
    t(27, nt = !1);
  }
  function ku() {
    for (let m of u.boxes) {
      const M = m;
      M.alpha !== void 0 && (M.alpha = ve), M.thickness !== void 0 && (M.thickness = Me), M.selectedThickness !== void 0 && (M.selectedThickness = B);
    }
  }
  function Ts() {
    t(12, G = s.creation), t(11, z.style.cursor = "crosshair", z), re = null;
  }
  function Ea() {
    t(12, G = s.freehand), t(11, z.style.cursor = "crosshair", z), re = null;
  }
  function Ra() {
    t(12, G = s.circle), t(11, z.style.cursor = "crosshair", z), re = null;
  }
  function Ha() {
    t(12, G = s.polygon), t(11, z.style.cursor = "crosshair", z);
  }
  function La() {
    t(12, G = s.erase), t(11, z.style.cursor = "crosshair", z), re = null;
  }
  function In() {
    t(12, G = s.drag), t(11, z.style.cursor = "default", z), re = null;
  }
  function Kt() {
    O >= 0 && O < u.boxes.length && (u.boxes[O].getArea() < 1 ? li() : (w || (de ? qa() : t(24, Se = !0)), k && In()));
  }
  function yu() {
    re = null, O >= 0 && O < u.boxes.length && (u.boxes[O].getArea() < 1 ? li() : (w || (de ? qa() : t(24, Se = !0)), In()));
  }
  function Cu() {
    O >= 0 && O < u.boxes.length && !w && t(23, Ne = !0);
  }
  function Su(m) {
    if (!d)
      return;
    const M = ui(m, z), A = M.mouseX, T = M.mouseY;
    let V = !1;
    for (const [ee, te] of u.boxes.entries())
      if (te.isPointInsideBox(A, T)) {
        V = !0, Le(ee), Cu();
        break;
      }
    V || Ln();
  }
  function Pa(m, M) {
    const A = b.findIndex((T) => T[0] === m);
    A === -1 ? (b.push([m, b.length]), y.push(M), t(1, b), t(2, y), console.log(`Added custom label "${m}" with color ${M} to choices`)) : y[A] !== M && (t(2, y[A] = M, y), t(2, y), console.log(`Updated color for existing label "${m}" to ${M}`));
  }
  function Mu(m) {
    t(23, Ne = !1);
    const { detail: M } = m;
    let A = M.label, T = M.color, V = M.opacity, ee = M.ret;
    if (O >= 0 && O < u.boxes.length) {
      let te = u.boxes[O];
      if (ee == 1) {
        const bt = Pe(te);
        Pa(A, T), te.label = A, te.color = fi(T), V !== void 0 && (te.alpha = V);
        const rn = Pe(te);
        Et({
          type: "edit_shape",
          shapeIndex: O,
          oldShapeData: bt,
          shapeData: rn
        }), ce(), Re("change");
      } else ee == -1 && li();
    }
    setTimeout(
      () => {
        z && (z.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function Wu(m) {
    t(24, Se = !1);
    const { detail: M } = m;
    let A = M.label, T = M.color, V = M.ret, ee = M.lock;
    if (O >= 0 && O < u.boxes.length) {
      let te = u.boxes[O];
      V == 1 ? (Pa(A, T), t(32, de = ee), _e.label = A, _e.color = T, te.label = A, te.color = fi(T), ce(), Re("change"), In()) : li();
    }
    setTimeout(
      () => {
        z && (z.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function zu(m) {
    t(25, He = !1);
    const { detail: M } = m;
    let A = M.label, T = M.color, V = M.ret, ee = M.lock;
    V == 1 && (t(32, de = ee), _e.label = A, _e.color = T), setTimeout(
      () => {
        z && (z.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function qa() {
    if (O >= 0 && O < u.boxes.length) {
      let m = u.boxes[O];
      m.label = _e.label, _e.color !== "" && (m.color = fi(_e.color)), ce(), Re("change"), In();
    }
    setTimeout(
      () => {
        z && (z.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function li() {
    if (O >= 0 && O < u.boxes.length) {
      const m = u.boxes[O], M = Pe(m);
      Et({
        type: "delete_shape",
        shapeIndex: O,
        shapeData: M
      }), u.boxes.splice(O, 1), Le(-1), k && Ts(), Re("change");
    }
  }
  function Ia() {
    if (u.boxes.length === 0) return;
    const m = u.boxes.map((M) => Pe(M));
    for (r.push({
      allShapes: m,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > sw; )
      r.shift();
    t(0, u.boxes = [], u), Le(-1), re = null, k && Ts(), ce(), Re("change"), console.log(`Cleared ${m.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function Aa() {
    if (!q || !z) {
      console.error("No image or canvas available for export");
      return;
    }
    const m = document.createElement("canvas"), M = m.getContext("2d");
    if (!M) {
      console.error("Could not get export canvas context");
      return;
    }
    m.width = Ye || q.naturalWidth, m.height = H || q.naturalHeight, M.drawImage(q, 0, 0, m.width, m.height);
    const A = C.scale, T = C.offsetX, V = C.offsetY;
    C.scale = 1, C.offsetX = 0, C.offsetY = 0;
    for (const ee of u.boxes) {
      const te = ee.scaleFactor;
      ee.scaleFactor = 1, "applyUserScale" in ee && typeof ee.applyUserScale == "function" && typeof ee.applyUserScale == "function" && ee.applyUserScale(), ee.render(M, c), ee.scaleFactor = te, "applyUserScale" in ee && typeof ee.applyUserScale == "function" && typeof ee.applyUserScale == "function" && ee.applyUserScale();
    }
    C.scale = A, C.offsetX = T, C.offsetY = V, m.toBlob(
      (ee) => {
        if (ee) {
          const te = document.createElement("a");
          te.href = URL.createObjectURL(ee), te.download = `annotated_image_${Date.now()}.png`, document.body.appendChild(te), te.click(), document.body.removeChild(te), URL.revokeObjectURL(te.href), console.log("Image exported successfully");
        } else
          console.error("Failed to create blob for export");
      },
      "image/png"
    );
  }
  function Os() {
    if (z) {
      if (I = 1, t(11, z.width = z.clientWidth, z), C.setRotatedImage(q), q !== null) {
        Ye = C.imageRotatedWidth, H = C.imageRotatedHeight;
        const M = (u == null ? void 0 : u.scrollable_mode) || R && E && (C.imageRotatedWidth > z.clientWidth || C.imageRotatedHeight > (typeof x == "number" ? x : 800));
        if (t(22, Be = M), Be && !f && t(14, f = !0), Be && E) {
          t(20, se = C.imageRotatedWidth), t(21, Q = C.imageRotatedHeight);
          const A = typeof x == "number" ? x : 800;
          t(11, z.height = A, z), J = 0, P = 0, be = z.width, D = z.height, I = 1, (C.offsetX === void 0 || C.offsetY === void 0) && (C.offsetX = (z.width - se) / 2, C.offsetY = (z.height - Q) / 2, se > z.width && (C.offsetX = 0), Q > z.height && (C.offsetY = 0));
        } else if (C.imageRotatedWidth > z.width)
          I = z.width / C.imageRotatedWidth, t(20, se = Math.round(C.imageRotatedWidth * I)), t(21, Q = Math.round(C.imageRotatedHeight * I)), J = 0, P = 0, be = se, D = Q, t(11, z.height = Q, z);
        else {
          t(20, se = C.imageRotatedWidth), t(21, Q = C.imageRotatedHeight);
          var m = (z.width - se) / 2;
          J = m, P = 0, be = m + se, D = Q, t(11, z.height = Q, z);
        }
        C.imageWidth = se, C.imageHeight = Q;
      } else
        J = 0, P = 0, be = z.width, D = z.height, t(11, z.height = z.clientHeight, z), t(22, Be = !1);
      if (C.resize(z.width, z.height, J, P), be > 0 && D > 0)
        for (const M of u.boxes)
          M.canvasXmin = J, M.canvasYmin = P, M.canvasXmax = be, M.canvasYmax = D, M.setScaleFactor(I);
      ce(), Re("change");
    }
  }
  const xu = new ResizeObserver(Os);
  function Xu() {
    if (!(u === null || !u.boxes))
      for (let m = 0; m < u.boxes.length; m++) {
        let M = u.boxes[m];
        if (!(M instanceof di) && !(M instanceof ei) && !(M instanceof nn) && !(M instanceof _i)) {
          let A = "", T = "";
          if (M.hasOwnProperty("color") ? (A = M.color, Array.isArray(A) && A.length === 3 && (A = `rgb(${A[0]}, ${A[1]}, ${A[2]})`)) : A = _t[m % _t.length], M.hasOwnProperty("label") && (T = M.label), M.hasOwnProperty("type") && M.type === "freehand" && M.hasOwnProperty("points")) {
            let V = new ei(ce, Kt, C, z, J, P, be, D, T, A, ve, p, g, Me, B, I);
            V._points = M.points, V.updateBoundingBox(), M = V;
          } else if (M.hasOwnProperty("type") && M.type === "circle" && M.hasOwnProperty("centerX") && M.hasOwnProperty("centerY") && M.hasOwnProperty("radius"))
            M = new _i(ce, Kt, C, z, J, P, be, D, T, M.centerX, M.centerY, M.radius, A, ve, p, g, Me, B, I);
          else if (M.hasOwnProperty("type") && M.type === "polygon" && M.hasOwnProperty("points")) {
            let V = new nn(ce, Kt, C, z, J, P, be, D, T, A, ve, p, g, Me, B, I);
            V._points = M.points, V.updateBoundingBox(), M = V;
          } else
            M = new di(ce, Kt, C, z, J, P, be, D, T, M.xmin, M.ymin, M.xmax, M.ymax, A, ve, p, g, Me, B);
          t(0, u.boxes[m] = M, u);
        }
      }
  }
  function ja() {
    _ !== null ? (q === null || q.src != _) && (t(15, q = new Image()), t(15, q.src = _, q), t(
      15,
      q.onload = function() {
        Os(), ce();
      },
      q
    )) : t(15, q = null);
  }
  $v(() => {
    if (a = !0, Array.isArray(b) && b.length > 0) {
      if (!Array.isArray(y) || y.length == 0)
        for (let m = 0; m < b.length; m++) {
          let M = _t[m % _t.length];
          y.push(Ei(M));
        }
      _e.label = b[0][0], _e.color = y[0];
    }
    F = z.getContext("2d"), xu.observe(z), O < 0 && u !== null && u.boxes.length > 0 && Le(0), ja(), Os(), ce(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function Yu() {
    document.addEventListener("keydown", an);
  }
  function Bu() {
    document.removeEventListener("keydown", an);
  }
  ew(() => {
    document.removeEventListener("keydown", an);
  });
  function Du(m) {
    mi[m ? "unshift" : "push"](() => {
      z = m, t(11, z), t(0, u), t(73, h), t(69, S), t(12, G), t(9, s);
    });
  }
  const Eu = () => Ts(), Ru = () => Ea(), Hu = () => Ra(), Lu = () => Ha(), Pu = () => La(), qu = () => In(), Iu = () => li(), Au = () => t(25, He = !0), ju = () => Pn(), Fu = () => si(), Tu = () => {
    t(10, c = !c), ce();
  }, Ou = () => Ia(), Uu = () => Aa(), Nu = () => {
    t(14, f = !f);
  };
  function Vu(m) {
    Qo.call(this, i, m);
  }
  function Ku(m) {
    Qo.call(this, i, m);
  }
  function Zu(m) {
    Qo.call(this, i, m);
  }
  function Gu(m) {
    Ve = m, t(26, Ve);
  }
  function Ju(m) {
    Ke = m, t(28, Ke);
  }
  function Qu(m) {
    nt = m, t(27, nt);
  }
  function $u(m) {
    ve = m, t(29, ve), t(72, ft);
  }
  function eh(m) {
    Me = m, t(30, Me);
  }
  function th(m) {
    B = m, t(31, B);
  }
  return i.$$set = (m) => {
    "imageUrl" in m && t(64, _ = m.imageUrl), "interactive" in m && t(4, d = m.interactive), "boxMinSize" in m && t(65, p = m.boxMinSize), "handleSize" in m && t(66, g = m.handleSize), "value" in m && t(0, u = m.value), "choices" in m && t(1, b = m.choices), "choicesColors" in m && t(2, y = m.choicesColors), "disableEditBoxes" in m && t(5, w = m.disableEditBoxes), "height" in m && t(6, x = m.height), "width" in m && t(7, Y = m.width), "singleBox" in m && t(67, k = m.singleBox), "showRemoveButton" in m && t(3, X = m.showRemoveButton), "handlesCursor" in m && t(8, W = m.handlesCursor), "useDefaultLabel" in m && t(68, v = m.useDefaultLabel), "shapeCreationMode" in m && t(69, S = m.shapeCreationMode), "autoScroll" in m && t(70, R = m.autoScroll), "preserveResolution" in m && t(71, E = m.preserveResolution), "boxAlpha" in m && t(72, ft = m.boxAlpha);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    1024 && t(33, n = c), i.$$.dirty[0] & /*value, canvas, mode, Mode*/
    6657 | i.$$.dirty[2] & /*initialized, shapeCreationMode*/
    2176 && (u !== null && u.boxes && u.boxes.length === 0 && !h || !h && S) && (t(12, G = pe(S)), t(73, h = !0), z && t(11, z.style.cursor = G === s.drag ? "default" : "crosshair", z)), i.$$.dirty[0] & /*value*/
    1 && u !== null && u.boxes && u.boxes.length === 0 && t(73, h = !1), i.$$.dirty[2] & /*boxAlpha*/
    1024 && t(29, ve = ft), i.$$.dirty[0] & /*value*/
    1 && (u !== null && (C.orientation = u.orientation), ja(), Xu(), Os(), ce());
  }, [
    u,
    b,
    y,
    X,
    d,
    w,
    x,
    Y,
    W,
    s,
    c,
    z,
    G,
    o,
    f,
    q,
    O,
    le,
    Z,
    U,
    se,
    Q,
    Be,
    Ne,
    Se,
    He,
    Ve,
    nt,
    Ke,
    ve,
    Me,
    B,
    de,
    n,
    l,
    ce,
    Dt,
    En,
    yt,
    Rn,
    Hn,
    Pn,
    si,
    $,
    it,
    Fs,
    bu,
    vu,
    wu,
    Ts,
    Ea,
    Ra,
    Ha,
    La,
    In,
    Su,
    Mu,
    Wu,
    zu,
    li,
    Ia,
    Aa,
    Yu,
    Bu,
    _,
    p,
    g,
    k,
    v,
    S,
    R,
    E,
    ft,
    h,
    Du,
    Eu,
    Ru,
    Hu,
    Lu,
    Pu,
    qu,
    Iu,
    Au,
    ju,
    Fu,
    Tu,
    Ou,
    Uu,
    Nu,
    Vu,
    Ku,
    Zu,
    Gu,
    Ju,
    Qu,
    $u,
    eh,
    th
  ];
}
class ow extends Zv {
  constructor(e) {
    super(), Gv(
      this,
      e,
      lw,
      nw,
      Qv,
      {
        imageUrl: 64,
        interactive: 4,
        boxMinSize: 65,
        handleSize: 66,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 67,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 68,
        shapeCreationMode: 69,
        autoScroll: 70,
        preserveResolution: 71,
        boxAlpha: 72
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: aw,
  add_flush_callback: rw,
  bind: cw,
  binding_callbacks: fw,
  create_component: uw,
  destroy_component: hw,
  init: dw,
  mount_component: _w,
  safe_not_equal: mw,
  transition_in: gw,
  transition_out: pw
} = window.__gradio__svelte__internal, { createEventDispatcher: bw } = window.__gradio__svelte__internal;
function vw(i) {
  var o, r;
  let e, t, n;
  function s(a) {
    i[19](a);
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
      i[7]
    ),
    width: (
      /*width*/
      i[8]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[5]
    ),
    handleSize: (
      /*handleSize*/
      i[6]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[9]
    ),
    singleBox: (
      /*singleBox*/
      i[10]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[11]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[12]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[13]
    ),
    shapeCreationMode: (
      /*shapeCreationMode*/
      i[14]
    ),
    autoScroll: (
      /*value*/
      ((o = i[0]) == null ? void 0 : o.auto_scroll) || !0
    ),
    preserveResolution: (
      /*value*/
      ((r = i[0]) == null ? void 0 : r.preserve_resolution) || !0
    ),
    imageUrl: (
      /*resolved_src*/
      i[15]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (l.value = /*value*/
    i[0]), e = new ow({ props: l }), fw.push(() => cw(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[20]
    ), e.$on(
      "select",
      /*select_handler*/
      i[21]
    ), {
      c() {
        uw(e.$$.fragment);
      },
      m(a, c) {
        _w(e, a, c), n = !0;
      },
      p(a, [c]) {
        var h, _;
        const f = {};
        c & /*interactive*/
        2 && (f.interactive = /*interactive*/
        a[1]), c & /*boxesAlpha*/
        4 && (f.boxAlpha = /*boxesAlpha*/
        a[2]), c & /*labelList*/
        8 && (f.choices = /*labelList*/
        a[3]), c & /*labelColors*/
        16 && (f.choicesColors = /*labelColors*/
        a[4]), c & /*height*/
        128 && (f.height = /*height*/
        a[7]), c & /*width*/
        256 && (f.width = /*width*/
        a[8]), c & /*boxMinSize*/
        32 && (f.boxMinSize = /*boxMinSize*/
        a[5]), c & /*handleSize*/
        64 && (f.handleSize = /*handleSize*/
        a[6]), c & /*disableEditBoxes*/
        512 && (f.disableEditBoxes = /*disableEditBoxes*/
        a[9]), c & /*singleBox*/
        1024 && (f.singleBox = /*singleBox*/
        a[10]), c & /*showRemoveButton*/
        2048 && (f.showRemoveButton = /*showRemoveButton*/
        a[11]), c & /*handlesCursor*/
        4096 && (f.handlesCursor = /*handlesCursor*/
        a[12]), c & /*useDefaultLabel*/
        8192 && (f.useDefaultLabel = /*useDefaultLabel*/
        a[13]), c & /*shapeCreationMode*/
        16384 && (f.shapeCreationMode = /*shapeCreationMode*/
        a[14]), c & /*value*/
        1 && (f.autoScroll = /*value*/
        ((h = a[0]) == null ? void 0 : h.auto_scroll) || !0), c & /*value*/
        1 && (f.preserveResolution = /*value*/
        ((_ = a[0]) == null ? void 0 : _.preserve_resolution) || !0), c & /*resolved_src*/
        32768 && (f.imageUrl = /*resolved_src*/
        a[15]), !t && c & /*value*/
        1 && (t = !0, f.value = /*value*/
        a[0], rw(() => t = !1)), e.$set(f);
      },
      i(a) {
        n || (gw(e.$$.fragment, a), n = !0);
      },
      o(a) {
        pw(e.$$.fragment, a), n = !1;
      },
      d(a) {
        hw(e, a);
      }
    }
  );
}
function ww(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { height: f } = e, { width: h } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: p } = e, { showRemoveButton: g } = e, { handlesCursor: u } = e, { useDefaultLabel: b } = e, { shapeCreationMode: y } = e, w, x;
  const Y = bw();
  function k(v) {
    _ = v, t(0, _);
  }
  const X = () => Y("change"), W = (v) => Y("select", v.detail);
  return i.$$set = (v) => {
    "src" in v && t(17, n = v.src), "interactive" in v && t(1, s = v.interactive), "boxesAlpha" in v && t(2, l = v.boxesAlpha), "labelList" in v && t(3, o = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, c = v.handleSize), "height" in v && t(7, f = v.height), "width" in v && t(8, h = v.width), "value" in v && t(0, _ = v.value), "disableEditBoxes" in v && t(9, d = v.disableEditBoxes), "singleBox" in v && t(10, p = v.singleBox), "showRemoveButton" in v && t(11, g = v.showRemoveButton), "handlesCursor" in v && t(12, u = v.handlesCursor), "useDefaultLabel" in v && t(13, b = v.useDefaultLabel), "shapeCreationMode" in v && t(14, y = v.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    393216) {
      t(15, w = n), t(18, x = n);
      const v = n;
      j1(v).then((S) => {
        x === v && t(15, w = S);
      });
    }
  }, [
    _,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    d,
    p,
    g,
    u,
    b,
    y,
    w,
    Y,
    n,
    x,
    k,
    X,
    W
  ];
}
class kw extends aw {
  constructor(e) {
    super(), dw(this, e, ww, vw, mw, {
      src: 17,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      height: 7,
      width: 8,
      value: 0,
      disableEditBoxes: 9,
      singleBox: 10,
      showRemoveButton: 11,
      handlesCursor: 12,
      useDefaultLabel: 13,
      shapeCreationMode: 14
    });
  }
}
class Fc {
  constructor() {
    this.boxes = [], this.orientation = 0, this.scrollable_mode = !1, this.auto_scroll = !0, this.preserve_resolution = !0;
  }
}
const {
  SvelteComponent: yw,
  add_flush_callback: jl,
  append: es,
  attr: xs,
  bind: Fl,
  binding_callbacks: Ls,
  bubble: ks,
  check_outros: gi,
  create_component: xn,
  create_slot: Cw,
  destroy_component: Xn,
  detach: xi,
  element: Es,
  empty: Sw,
  get_all_dirty_from_scope: Mw,
  get_slot_changes: Ww,
  group_outros: pi,
  init: zw,
  insert: Xi,
  mount_component: Yn,
  noop: xw,
  safe_not_equal: Xw,
  space: hi,
  toggle_class: Tc,
  transition_in: We,
  transition_out: qe,
  update_slot_base: Yw
} = window.__gradio__svelte__internal, { createEventDispatcher: Bw, tick: Dw } = window.__gradio__svelte__internal;
function Oc(i) {
  let e, t;
  return e = new e0({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Ew] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Yn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*value*/
      2 && (l.href = /*value*/
      n[1].image.url), s[0] & /*value*/
      2 && (l.download = /*value*/
      n[1].image.orig_name || "image"), s[0] & /*i18n*/
      256 | s[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xn(e, n);
    }
  };
}
function Ew(i) {
  let e, t;
  return e = new Tl({
    props: {
      Icon: X_,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Yn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xn(e, n);
    }
  };
}
function Uc(i) {
  let e, t;
  return e = new Pm({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[39]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[40]
  ), e.$on(
    "error",
    /*error_handler*/
    i[41]
  ), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Yn(e, n, s), t = !0;
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
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xn(e, n);
    }
  };
}
function Nc(i) {
  let e, t, n;
  return t = new Tl({
    props: { Icon: cf, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[35]
  ), {
    c() {
      e = Es("div"), xn(t.$$.fragment);
    },
    m(s, l) {
      Xi(s, e, l), Yn(t, e, null), n = !0;
    },
    p: xw,
    i(s) {
      n || (We(t.$$.fragment, s), n = !0);
    },
    o(s) {
      qe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && xi(e), Xn(t);
    }
  };
}
function Vc(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Cw(
    t,
    i,
    /*$$scope*/
    i[55],
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
      16777216) && Yw(
        n,
        t,
        s,
        /*$$scope*/
        s[55],
        e ? Ww(
          t,
          /*$$scope*/
          s[55],
          l,
          null
        ) : Mw(
          /*$$scope*/
          s[55]
        ),
        null
      );
    },
    i(s) {
      e || (We(n, s), e = !0);
    },
    o(s) {
      qe(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Rw(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Vc(i)
  );
  return {
    c() {
      n && n.c(), e = Sw();
    },
    m(s, l) {
      n && n.m(s, l), Xi(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && We(n, 1)) : (n = Vc(s), n.c(), We(n, 1), n.m(e.parentNode, e)) : n && (pi(), qe(n, 1, 1, () => {
        n = null;
      }), gi());
    },
    i(s) {
      t || (We(n), t = !0);
    },
    o(s) {
      qe(n), t = !1;
    },
    d(s) {
      s && xi(e), n && n.d(s);
    }
  };
}
function Kc(i) {
  let e, t;
  return e = new Sg({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mirror_webcam: !1,
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[30]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[46]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[47]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[48]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[49]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[50]
  ), {
    c() {
      xn(e.$$.fragment);
    },
    m(n, s) {
      Yn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*root*/
      64 && (l.root = /*root*/
      n[6]), s[0] & /*i18n*/
      256 && (l.i18n = /*i18n*/
      n[8]), s[0] & /*upload*/
      1073741824 && (l.upload = /*upload*/
      n[30]), e.$set(l);
    },
    i(n) {
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xn(e, n);
    }
  };
}
function Zc(i) {
  let e, t, n, s;
  function l(r) {
    i[51](r);
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
    singleBox: (
      /*singleBox*/
      i[20]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[19]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[21]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[22]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[26]
    ),
    shapeCreationMode: (
      /*shapeCreationMode*/
      i[27]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (o.value = /*value*/
    i[1]), t = new kw({ props: o }), Ls.push(() => Fl(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), {
      c() {
        e = Es("div"), xn(t.$$.fragment), xs(e, "class", "image-frame svelte-1gjdske"), Tc(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Xi(r, e, a), Yn(t, e, null), s = !0;
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
        r[16]), a[0] & /*singleBox*/
        1048576 && (c.singleBox = /*singleBox*/
        r[20]), a[0] & /*disableEditBoxes*/
        524288 && (c.disableEditBoxes = /*disableEditBoxes*/
        r[19]), a[0] & /*showRemoveButton*/
        2097152 && (c.showRemoveButton = /*showRemoveButton*/
        r[21]), a[0] & /*handlesCursor*/
        4194304 && (c.handlesCursor = /*handlesCursor*/
        r[22]), a[0] & /*useDefaultLabel*/
        67108864 && (c.useDefaultLabel = /*useDefaultLabel*/
        r[26]), a[0] & /*shapeCreationMode*/
        134217728 && (c.shapeCreationMode = /*shapeCreationMode*/
        r[27]), a[0] & /*value*/
        2 && (c.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, c.value = /*value*/
        r[1], jl(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Tc(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (We(t.$$.fragment, r), s = !0);
      },
      o(r) {
        qe(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && xi(e), Xn(t);
      }
    }
  );
}
function Gc(i) {
  let e, t, n;
  function s(o) {
    i[54](o);
  }
  let l = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[35]
    ),
    handle_select: (
      /*handle_select_source*/
      i[34]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (l.active_source = /*active_source*/
    i[0]), e = new $m({ props: l }), Ls.push(() => Fl(e, "active_source", s)), {
      c() {
        xn(e.$$.fragment);
      },
      m(o, r) {
        Yn(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], jl(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (We(e.$$.fragment, o), n = !0);
      },
      o(o) {
        qe(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Xn(e, o);
      }
    }
  );
}
function Hw(i) {
  let e, t, n, s, l, o, r, a, c, f, h, _, d, p, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), u;
  e = new md({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: ff,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Oc(i)
  ), y = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Uc(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Nc(i)
  );
  function x(S) {
    i[43](S);
  }
  function Y(S) {
    i[44](S);
  }
  let k = {
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
      i[23]
    ),
    disable_click: !/*sources*/
    i[4].includes("upload"),
    upload: (
      /*cli_upload*/
      i[24]
    ),
    stream_handler: (
      /*stream_handler*/
      i[25]
    ),
    $$slots: { default: [Rw] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[28] !== void 0 && (k.uploading = /*uploading*/
  i[28]), /*dragging*/
  i[29] !== void 0 && (k.dragging = /*dragging*/
  i[29]), c = new E0({ props: k }), i[42](c), Ls.push(() => Fl(c, "uploading", x)), Ls.push(() => Fl(c, "dragging", Y)), c.$on(
    "load",
    /*handle_upload*/
    i[31]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let X = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Kc(i)
  ), W = (
    /*value*/
    i[1] !== null && Zc(i)
  ), v = g && Gc(i);
  return {
    c() {
      xn(e.$$.fragment), t = hi(), n = Es("div"), b && b.c(), s = hi(), y && y.c(), l = hi(), w && w.c(), o = hi(), r = Es("div"), a = Es("div"), xn(c.$$.fragment), _ = hi(), X && X.c(), d = hi(), W && W.c(), p = hi(), v && v.c(), xs(n, "class", "icon-buttons svelte-1gjdske"), xs(a, "class", "upload-container svelte-1gjdske"), xs(r, "data-testid", "image"), xs(r, "class", "image-container svelte-1gjdske");
    },
    m(S, R) {
      Yn(e, S, R), Xi(S, t, R), Xi(S, n, R), b && b.m(n, null), es(n, s), y && y.m(n, null), es(n, l), w && w.m(n, null), Xi(S, o, R), Xi(S, r, R), es(r, a), Yn(c, a, null), es(a, _), X && X.m(a, null), es(a, d), W && W.m(a, null), es(r, p), v && v.m(r, null), u = !0;
    },
    p(S, R) {
      const E = {};
      R[0] & /*show_label*/
      8 && (E.show_label = /*show_label*/
      S[3]), R[0] & /*label*/
      4 && (E.label = /*label*/
      S[2] || "Image Annotator"), e.$set(E), /*showDownloadButton*/
      S[10] && /*value*/
      S[1] !== null ? b ? (b.p(S, R), R[0] & /*showDownloadButton, value*/
      1026 && We(b, 1)) : (b = Oc(S), b.c(), We(b, 1), b.m(n, s)) : b && (pi(), qe(b, 1, 1, () => {
        b = null;
      }), gi()), /*showShareButton*/
      S[9] && /*value*/
      S[1] !== null ? y ? (y.p(S, R), R[0] & /*showShareButton, value*/
      514 && We(y, 1)) : (y = Uc(S), y.c(), We(y, 1), y.m(n, l)) : y && (pi(), qe(y, 1, 1, () => {
        y = null;
      }), gi()), /*showClearButton*/
      S[11] && /*value*/
      S[1] !== null && /*interactive*/
      S[7] ? w ? (w.p(S, R), R[0] & /*showClearButton, value, interactive*/
      2178 && We(w, 1)) : (w = Nc(S), w.c(), We(w, 1), w.m(n, null)) : w && (pi(), qe(w, 1, 1, () => {
        w = null;
      }), gi());
      const z = {};
      R[0] & /*value, active_source*/
      3 && (z.hidden = /*value*/
      S[1] !== null || /*active_source*/
      S[0] === "webcam"), R[0] & /*active_source*/
      1 && (z.filetype = /*active_source*/
      S[0] === "clipboard" ? "clipboard" : "image/*"), R[0] & /*root*/
      64 && (z.root = /*root*/
      S[6]), R[0] & /*max_file_size*/
      8388608 && (z.max_file_size = /*max_file_size*/
      S[23]), R[0] & /*sources*/
      16 && (z.disable_click = !/*sources*/
      S[4].includes("upload")), R[0] & /*cli_upload*/
      16777216 && (z.upload = /*cli_upload*/
      S[24]), R[0] & /*stream_handler*/
      33554432 && (z.stream_handler = /*stream_handler*/
      S[25]), R[0] & /*value*/
      2 | R[1] & /*$$scope*/
      16777216 && (z.$$scope = { dirty: R, ctx: S }), !f && R[0] & /*uploading*/
      268435456 && (f = !0, z.uploading = /*uploading*/
      S[28], jl(() => f = !1)), !h && R[0] & /*dragging*/
      536870912 && (h = !0, z.dragging = /*dragging*/
      S[29], jl(() => h = !1)), c.$set(z), /*value*/
      S[1] === null && /*active_source*/
      S[0] === "webcam" ? X ? (X.p(S, R), R[0] & /*value, active_source*/
      3 && We(X, 1)) : (X = Kc(S), X.c(), We(X, 1), X.m(a, d)) : X && (pi(), qe(X, 1, 1, () => {
        X = null;
      }), gi()), /*value*/
      S[1] !== null ? W ? (W.p(S, R), R[0] & /*value*/
      2 && We(W, 1)) : (W = Zc(S), W.c(), We(W, 1), W.m(a, null)) : W && (pi(), qe(W, 1, 1, () => {
        W = null;
      }), gi()), R[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (S[4].length > 1 || /*sources*/
      S[4].includes("clipboard")) && /*value*/
      S[1] === null && /*interactive*/
      S[7]), g ? v ? (v.p(S, R), R[0] & /*sources, value, interactive*/
      146 && We(v, 1)) : (v = Gc(S), v.c(), We(v, 1), v.m(r, null)) : v && (pi(), qe(v, 1, 1, () => {
        v = null;
      }), gi());
    },
    i(S) {
      u || (We(e.$$.fragment, S), We(b), We(y), We(w), We(c.$$.fragment, S), We(X), We(W), We(v), u = !0);
    },
    o(S) {
      qe(e.$$.fragment, S), qe(b), qe(y), qe(w), qe(c.$$.fragment, S), qe(X), qe(W), qe(v), u = !1;
    },
    d(S) {
      S && (xi(t), xi(n), xi(o), xi(r)), Xn(e, S), b && b.d(), y && y.d(), w && w.d(), i[42](null), Xn(c), X && X.d(), W && W.d(), v && v.d();
    }
  };
}
function Lw(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(B, de, _e, Re) {
    function ce(Le) {
      return Le instanceof _e ? Le : new _e(function(Dt) {
        Dt(Le);
      });
    }
    return new (_e || (_e = Promise))(function(Le, Dt) {
      function kt(yt) {
        try {
          En(Re.next(yt));
        } catch (an) {
          Dt(an);
        }
      }
      function on(yt) {
        try {
          En(Re.throw(yt));
        } catch (an) {
          Dt(an);
        }
      }
      function En(yt) {
        yt.done ? Le(yt.value) : ce(yt.value).then(kt, on);
      }
      En((Re = Re.apply(B, de || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: h } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: p } = e, { showDownloadButton: g } = e, { showClearButton: u } = e, { boxesAlpha: b } = e, { labelList: y } = e, { labelColors: w } = e, { boxMinSize: x } = e, { handleSize: Y } = e, { height: k } = e, { width: X } = e, { boxThickness: W } = e, { disableEditBoxes: v } = e, { singleBox: S } = e, { showRemoveButton: R } = e, { handlesCursor: E } = e, { boxSelectedThickness: z } = e, { max_file_size: F = null } = e, { cli_upload: q } = e, { stream_handler: O } = e, { useDefaultLabel: G } = e, { shapeCreationMode: C } = e, L, le = !1, { active_source: Z = null } = e;
  function U({ detail: B }) {
    t(1, o = new Fc()), t(1, o.image = B, o), J("upload");
  }
  function pe(B) {
    return l(this, void 0, void 0, function* () {
      const de = yield L.load_files([new File([B], "webcam.png")]), _e = (de == null ? void 0 : de[0]) || null;
      _e ? (t(1, o = new Fc()), t(1, o.image = _e, o)) : t(1, o = null), yield Dw(), J("change");
    });
  }
  const J = Bw();
  let P = !1;
  function be(B) {
    return l(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          L.paste_clipboard();
          break;
      }
    });
  }
  function D() {
    t(1, o = null), t(28, le = !1), c && c.length > 0 && t(0, Z = c[0]), J("clear"), J("change");
  }
  const I = async (B) => B === null ? "" : `<img src="${await Sm(B.image)}" />`;
  function se(B) {
    ks.call(this, i, B);
  }
  function Q(B) {
    ks.call(this, i, B);
  }
  function Ye(B) {
    Ls[B ? "unshift" : "push"](() => {
      L = B, t(30, L);
    });
  }
  function H(B) {
    le = B, t(28, le);
  }
  function Be(B) {
    P = B, t(29, P);
  }
  function Ne(B) {
    ks.call(this, i, B);
  }
  const Se = (B) => pe(B.detail), He = (B) => pe(B.detail);
  function Ve(B) {
    ks.call(this, i, B);
  }
  function nt(B) {
    ks.call(this, i, B);
  }
  const re = (B) => pe(B.detail);
  function Ke(B) {
    o = B, t(1, o);
  }
  const ft = () => J("change"), ve = (B) => J("select", { index: null, value: B.detail.coordinates });
  function Me(B) {
    Z = B, t(0, Z), t(4, c);
  }
  return i.$$set = (B) => {
    "value" in B && t(1, o = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, c = B.sources), "selectable" in B && t(5, f = B.selectable), "root" in B && t(6, h = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, p = B.showShareButton), "showDownloadButton" in B && t(10, g = B.showDownloadButton), "showClearButton" in B && t(11, u = B.showClearButton), "boxesAlpha" in B && t(12, b = B.boxesAlpha), "labelList" in B && t(13, y = B.labelList), "labelColors" in B && t(14, w = B.labelColors), "boxMinSize" in B && t(15, x = B.boxMinSize), "handleSize" in B && t(16, Y = B.handleSize), "height" in B && t(17, k = B.height), "width" in B && t(18, X = B.width), "boxThickness" in B && t(36, W = B.boxThickness), "disableEditBoxes" in B && t(19, v = B.disableEditBoxes), "singleBox" in B && t(20, S = B.singleBox), "showRemoveButton" in B && t(21, R = B.showRemoveButton), "handlesCursor" in B && t(22, E = B.handlesCursor), "boxSelectedThickness" in B && t(37, z = B.boxSelectedThickness), "max_file_size" in B && t(23, F = B.max_file_size), "cli_upload" in B && t(24, q = B.cli_upload), "stream_handler" in B && t(25, O = B.stream_handler), "useDefaultLabel" in B && t(26, G = B.useDefaultLabel), "shapeCreationMode" in B && t(27, C = B.shapeCreationMode), "active_source" in B && t(0, Z = B.active_source), "$$scope" in B && t(55, s = B.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    268435456 && le && D(), i.$$.dirty[0] & /*dragging*/
    536870912 && J("drag", P), i.$$.dirty[0] & /*active_source, sources*/
    17 && !Z && c && t(0, Z = c[0]);
  }, [
    Z,
    o,
    r,
    a,
    c,
    f,
    h,
    _,
    d,
    p,
    g,
    u,
    b,
    y,
    w,
    x,
    Y,
    k,
    X,
    v,
    S,
    R,
    E,
    F,
    q,
    O,
    G,
    C,
    le,
    P,
    L,
    U,
    pe,
    J,
    be,
    D,
    W,
    z,
    n,
    I,
    se,
    Q,
    Ye,
    H,
    Be,
    Ne,
    Se,
    He,
    Ve,
    nt,
    re,
    Ke,
    ft,
    ve,
    Me,
    s
  ];
}
class Pw extends yw {
  constructor(e) {
    super(), zw(
      this,
      e,
      Lw,
      Hw,
      Xw,
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
        boxThickness: 36,
        disableEditBoxes: 19,
        singleBox: 20,
        showRemoveButton: 21,
        handlesCursor: 22,
        boxSelectedThickness: 37,
        max_file_size: 23,
        cli_upload: 24,
        stream_handler: 25,
        useDefaultLabel: 26,
        shapeCreationMode: 27,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: qw,
  attr: zl,
  detach: du,
  element: _u,
  init: Iw,
  insert: mu,
  noop: Jc,
  safe_not_equal: Aw,
  src_url_equal: Qc,
  toggle_class: Gn
} = window.__gradio__svelte__internal;
function $c(i) {
  let e, t;
  return {
    c() {
      e = _u("img"), Qc(e.src, t = /*value*/
      i[0].url) || zl(e, "src", t), zl(e, "alt", "");
    },
    m(n, s) {
      mu(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !Qc(e.src, t = /*value*/
      n[0].url) && zl(e, "src", t);
    },
    d(n) {
      n && du(e);
    }
  };
}
function jw(i) {
  let e, t = (
    /*value*/
    i[0] && $c(i)
  );
  return {
    c() {
      e = _u("div"), t && t.c(), zl(e, "class", "container svelte-1sgcyba"), Gn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Gn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Gn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Gn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      mu(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = $c(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && Gn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && Gn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && Gn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && Gn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Jc,
    o: Jc,
    d(n) {
      n && du(e), t && t.d();
    }
  };
}
function Fw(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class g3 extends qw {
  constructor(e) {
    super(), Iw(this, e, Fw, jw, Aw, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Tw,
  add_flush_callback: ef,
  assign: Ow,
  bind: tf,
  binding_callbacks: nf,
  check_outros: Uw,
  create_component: Ri,
  destroy_component: Hi,
  detach: gu,
  empty: Nw,
  flush: Ce,
  get_spread_object: Vw,
  get_spread_update: Kw,
  group_outros: Zw,
  init: Gw,
  insert: pu,
  mount_component: Li,
  safe_not_equal: Jw,
  space: Qw,
  transition_in: Bn,
  transition_out: Dn
} = window.__gradio__svelte__internal;
function $w(i) {
  let e, t;
  return e = new Nd({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [n3] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ri(e.$$.fragment);
    },
    m(n, s) {
      Li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      16384 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function e3(i) {
  let e, t;
  return e = new pf({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Ri(e.$$.fragment);
    },
    m(n, s) {
      Li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function t3(i) {
  let e, t;
  return e = new pf({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Ri(e.$$.fragment);
    },
    m(n, s) {
      Li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function n3(i) {
  let e, t;
  return e = new ff({}), {
    c() {
      Ri(e.$$.fragment);
    },
    m(n, s) {
      Li(e, n, s), t = !0;
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function i3(i) {
  let e, t, n, s;
  const l = [t3, e3, $w], o = [];
  function r(a, c) {
    return (
      /*active_source*/
      a[34] === "upload" ? 0 : (
        /*active_source*/
        a[34] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Nw();
    },
    m(a, c) {
      o[e].m(a, c), pu(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Zw(), Dn(o[f], 1, 1, () => {
        o[f] = null;
      }), Uw(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Bn(t), s = !0);
    },
    o(a) {
      Dn(t), s = !1;
    },
    d(a) {
      a && gu(n), o[e].d(a);
    }
  };
}
function s3(i) {
  let e, t, n, s, l, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[32].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[32].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = Ow(a, r[_]);
  e = new P1({ props: a });
  function c(_) {
    i[35](_);
  }
  function f(_) {
    i[36](_);
  }
  let h = {
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
      i[32].i18n
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
      i[32].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[32].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[32].client.stream
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
    shapeCreationMode: (
      /*shape_creation_mode*/
      i[31]
    ),
    $$slots: { default: [i3] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (h.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (h.value = /*value*/
    i[0]), n = new Pw({ props: h }), nf.push(() => tf(n, "active_source", c)), nf.push(() => tf(n, "value", f)), n.$on(
      "change",
      /*change_handler*/
      i[37]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[38]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[39]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[40]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[41]
    ), n.$on(
      "select",
      /*select_handler*/
      i[42]
    ), n.$on(
      "share",
      /*share_handler*/
      i[43]
    ), n.$on(
      "error",
      /*error_handler*/
      i[44]
    ), {
      c() {
        Ri(e.$$.fragment), t = Qw(), Ri(n.$$.fragment);
      },
      m(_, d) {
        Li(e, _, d), pu(_, t, d), Li(n, _, d), o = !0;
      },
      p(_, d) {
        const p = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        2 ? Kw(r, [
          d[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              _[32].autoscroll
            )
          },
          d[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            _[32].i18n
          ) },
          d[0] & /*loading_status*/
          2 && Vw(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(p);
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
        2 && (g.i18n = /*gradio*/
        _[32].i18n), d[0] & /*boxes_alpha*/
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
        2 && (g.max_file_size = /*gradio*/
        _[32].max_file_size), d[1] & /*gradio*/
        2 && (g.cli_upload = /*gradio*/
        _[32].client.upload), d[1] & /*gradio*/
        2 && (g.stream_handler = /*gradio*/
        _[32].client.stream), d[0] & /*handle_size*/
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
        _[30]), d[1] & /*shape_creation_mode*/
        1 && (g.shapeCreationMode = /*shape_creation_mode*/
        _[31]), d[1] & /*$$scope, gradio, active_source*/
        16394 && (g.$$scope = { dirty: d, ctx: _ }), !s && d[1] & /*active_source*/
        8 && (s = !0, g.active_source = /*active_source*/
        _[34], ef(() => s = !1)), !l && d[0] & /*value*/
        1 && (l = !0, g.value = /*value*/
        _[0], ef(() => l = !1)), n.$set(g);
      },
      i(_) {
        o || (Bn(e.$$.fragment, _), Bn(n.$$.fragment, _), o = !0);
      },
      o(_) {
        Dn(e.$$.fragment, _), Dn(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && gu(t), Hi(e, _), Hi(n, _);
      }
    }
  );
}
function l3(i) {
  let e, t;
  return e = new ph({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[33] ? "focus" : "base"
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
      $$slots: { default: [s3] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ri(e.$$.fragment);
    },
    m(n, s) {
      Li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*visible*/
      16 && (l.visible = /*visible*/
      n[4]), s[1] & /*dragging*/
      4 && (l.border_mode = /*dragging*/
      n[33] ? "focus" : "base"), s[0] & /*elem_id*/
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
      2147469283 | s[1] & /*$$scope, gradio, shape_creation_mode, active_source, dragging*/
      16399 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function o3(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: h } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: p = null } = e, { min_width: g = void 0 } = e, { loading_status: u } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: y } = e, { show_share_button: w } = e, { show_clear_button: x } = e, { interactive: Y } = e, { boxes_alpha: k } = e, { label_list: X } = e, { label_colors: W } = e, { box_min_size: v } = e, { handle_size: S } = e, { box_thickness: R } = e, { box_selected_thickness: E } = e, { disable_edit_boxes: z } = e, { single_box: F } = e, { show_remove_button: q } = e, { handles_cursor: O } = e, { use_default_label: G } = e, { shape_creation_mode: C } = e, { gradio: L } = e, le, Z = null;
  function U(H) {
    Z = H, t(34, Z);
  }
  function pe(H) {
    o = H, t(0, o);
  }
  const J = () => L.dispatch("change"), P = () => L.dispatch("edit"), be = () => {
    L.dispatch("clear");
  }, D = ({ detail: H }) => t(33, le = H), I = () => L.dispatch("upload"), se = ({ detail: H }) => L.dispatch("select", H), Q = ({ detail: H }) => L.dispatch("share", H), Ye = ({ detail: H }) => {
    t(1, u = u || {}), t(1, u.status = "error", u), L.dispatch("error", H);
  };
  return i.$$set = (H) => {
    "elem_id" in H && t(2, n = H.elem_id), "elem_classes" in H && t(3, s = H.elem_classes), "visible" in H && t(4, l = H.visible), "value" in H && t(0, o = H.value), "label" in H && t(5, r = H.label), "show_label" in H && t(6, a = H.show_label), "root" in H && t(7, c = H.root), "height" in H && t(8, f = H.height), "width" in H && t(9, h = H.width), "_selectable" in H && t(10, _ = H._selectable), "container" in H && t(11, d = H.container), "scale" in H && t(12, p = H.scale), "min_width" in H && t(13, g = H.min_width), "loading_status" in H && t(1, u = H.loading_status), "sources" in H && t(14, b = H.sources), "show_download_button" in H && t(15, y = H.show_download_button), "show_share_button" in H && t(16, w = H.show_share_button), "show_clear_button" in H && t(17, x = H.show_clear_button), "interactive" in H && t(18, Y = H.interactive), "boxes_alpha" in H && t(19, k = H.boxes_alpha), "label_list" in H && t(20, X = H.label_list), "label_colors" in H && t(21, W = H.label_colors), "box_min_size" in H && t(22, v = H.box_min_size), "handle_size" in H && t(23, S = H.handle_size), "box_thickness" in H && t(24, R = H.box_thickness), "box_selected_thickness" in H && t(25, E = H.box_selected_thickness), "disable_edit_boxes" in H && t(26, z = H.disable_edit_boxes), "single_box" in H && t(27, F = H.single_box), "show_remove_button" in H && t(28, q = H.show_remove_button), "handles_cursor" in H && t(29, O = H.handles_cursor), "use_default_label" in H && t(30, G = H.use_default_label), "shape_creation_mode" in H && t(31, C = H.shape_creation_mode), "gradio" in H && t(32, L = H.gradio);
  }, [
    o,
    u,
    n,
    s,
    l,
    r,
    a,
    c,
    f,
    h,
    _,
    d,
    p,
    g,
    b,
    y,
    w,
    x,
    Y,
    k,
    X,
    W,
    v,
    S,
    R,
    E,
    z,
    F,
    q,
    O,
    G,
    C,
    L,
    le,
    Z,
    U,
    pe,
    J,
    P,
    be,
    D,
    I,
    se,
    Q,
    Ye
  ];
}
class p3 extends Tw {
  constructor(e) {
    super(), Gw(
      this,
      e,
      o3,
      l3,
      Jw,
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
        shape_creation_mode: 31,
        gradio: 32
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Ce();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Ce();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Ce();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Ce();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Ce();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Ce();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Ce();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Ce();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Ce();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Ce();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Ce();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Ce();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Ce();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Ce();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Ce();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Ce();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Ce();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Ce();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Ce();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Ce();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Ce();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Ce();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Ce();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Ce();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Ce();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Ce();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), Ce();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), Ce();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), Ce();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), Ce();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), Ce();
  }
  get shape_creation_mode() {
    return this.$$.ctx[31];
  }
  set shape_creation_mode(e) {
    this.$$set({ shape_creation_mode: e }), Ce();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Ce();
  }
}
export {
  g3 as BaseExample,
  p3 as default
};
