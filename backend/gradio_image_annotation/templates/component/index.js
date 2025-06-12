const {
  SvelteComponent: Cu,
  assign: Su,
  create_slot: Mu,
  detach: zu,
  element: Wu,
  get_all_dirty_from_scope: xu,
  get_slot_changes: Bu,
  get_spread_update: Du,
  init: Xu,
  insert: Yu,
  safe_not_equal: Eu,
  set_dynamic_element_data: ma,
  set_style: xt,
  toggle_class: nn,
  transition_in: zc,
  transition_out: Wc,
  update_slot_base: Ru
} = window.__gradio__svelte__internal;
function Lu(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Mu(
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
    r = Su(r, o[a]);
  return {
    c() {
      e = Wu(
        /*tag*/
        i[14]
      ), l && l.c(), ma(
        /*tag*/
        i[14]
      )(e, r), nn(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), nn(
        e,
        "padded",
        /*padding*/
        i[6]
      ), nn(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), nn(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), nn(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), xt(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), xt(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), xt(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), xt(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), xt(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), xt(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), xt(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      Yu(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && Ru(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? Bu(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : xu(
          /*$$scope*/
          a[17]
        ),
        null
      ), ma(
        /*tag*/
        a[14]
      )(e, r = Du(o, [
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
      ])), nn(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), nn(
        e,
        "padded",
        /*padding*/
        a[6]
      ), nn(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), nn(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), nn(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && xt(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && xt(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && xt(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && xt(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && xt(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && xt(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (zc(l, a), n = !0);
    },
    o(a) {
      Wc(l, a), n = !1;
    },
    d(a) {
      a && zu(e), l && l.d(a);
    }
  };
}
function qu(i) {
  let e, t = (
    /*tag*/
    i[14] && Lu(i)
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
      e || (zc(t, n), e = !0);
    },
    o(n) {
      Wc(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Pu(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: h = !0 } = e, { type: d = "normal" } = e, { test_id: _ = void 0 } = e, { explicit_call: g = !1 } = e, { container: u = !0 } = e, { visible: v = !0 } = e, { allow_overflow: p = !0 } = e, { scale: y = null } = e, { min_width: w = 0 } = e, S = d === "fieldset" ? "fieldset" : "div";
  const C = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return i.$$set = (k) => {
    "height" in k && t(0, l = k.height), "width" in k && t(1, o = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, c = k.variant), "border_mode" in k && t(5, f = k.border_mode), "padding" in k && t(6, h = k.padding), "type" in k && t(16, d = k.type), "test_id" in k && t(7, _ = k.test_id), "explicit_call" in k && t(8, g = k.explicit_call), "container" in k && t(9, u = k.container), "visible" in k && t(10, v = k.visible), "allow_overflow" in k && t(11, p = k.allow_overflow), "scale" in k && t(12, y = k.scale), "min_width" in k && t(13, w = k.min_width), "$$scope" in k && t(17, s = k.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    _,
    g,
    u,
    v,
    p,
    y,
    w,
    S,
    C,
    d,
    s,
    n
  ];
}
class Hu extends Cu {
  constructor(e) {
    super(), Xu(this, e, Pu, qu, Eu, {
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
  SvelteComponent: ju,
  attr: Iu,
  create_slot: Au,
  detach: Tu,
  element: Fu,
  get_all_dirty_from_scope: Ou,
  get_slot_changes: Uu,
  init: Nu,
  insert: Vu,
  safe_not_equal: Ku,
  transition_in: Zu,
  transition_out: Ju,
  update_slot_base: Gu
} = window.__gradio__svelte__internal;
function Qu(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = Au(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Fu("div"), s && s.c(), Iu(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      Vu(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && Gu(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? Uu(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : Ou(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (Zu(s, l), t = !0);
    },
    o(l) {
      Ju(s, l), t = !1;
    },
    d(l) {
      l && Tu(e), s && s.d(l);
    }
  };
}
function $u(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class eh extends ju {
  constructor(e) {
    super(), Nu(this, e, $u, Qu, Ku, {});
  }
}
const {
  SvelteComponent: th,
  attr: ga,
  check_outros: nh,
  create_component: ih,
  create_slot: sh,
  destroy_component: lh,
  detach: Zs,
  element: oh,
  empty: ah,
  get_all_dirty_from_scope: rh,
  get_slot_changes: ch,
  group_outros: fh,
  init: uh,
  insert: Js,
  mount_component: hh,
  safe_not_equal: dh,
  set_data: _h,
  space: mh,
  text: gh,
  toggle_class: yi,
  transition_in: is,
  transition_out: Gs,
  update_slot_base: ph
} = window.__gradio__svelte__internal;
function pa(i) {
  let e, t;
  return e = new eh({
    props: {
      $$slots: { default: [bh] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ih(e.$$.fragment);
    },
    m(n, s) {
      hh(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (is(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Gs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lh(e, n);
    }
  };
}
function bh(i) {
  let e;
  return {
    c() {
      e = gh(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Js(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && _h(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Zs(e);
    }
  };
}
function vh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = sh(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && pa(i)
  );
  return {
    c() {
      e = oh("span"), o && o.c(), t = mh(), r && r.c(), n = ah(), ga(e, "data-testid", "block-info"), ga(e, "class", "svelte-22c38v"), yi(e, "sr-only", !/*show_label*/
      i[0]), yi(e, "hide", !/*show_label*/
      i[0]), yi(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      Js(a, e, c), o && o.m(e, null), Js(a, t, c), r && r.m(a, c), Js(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && ph(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? ch(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : rh(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && yi(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && yi(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && yi(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && is(r, 1)) : (r = pa(a), r.c(), is(r, 1), r.m(n.parentNode, n)) : r && (fh(), Gs(r, 1, 1, () => {
        r = null;
      }), nh());
    },
    i(a) {
      s || (is(o, a), is(r), s = !0);
    },
    o(a) {
      Gs(o, a), Gs(r), s = !1;
    },
    d(a) {
      a && (Zs(e), Zs(t), Zs(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function wh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class xc extends th {
  constructor(e) {
    super(), uh(this, e, wh, vh, dh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: kh,
  append: Bl,
  attr: Ms,
  create_component: yh,
  destroy_component: Ch,
  detach: Sh,
  element: ba,
  init: Mh,
  insert: zh,
  mount_component: Wh,
  safe_not_equal: xh,
  set_data: Bh,
  space: Dh,
  text: Xh,
  toggle_class: Bn,
  transition_in: Yh,
  transition_out: Eh
} = window.__gradio__svelte__internal;
function Rh(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ba("label"), t = ba("span"), yh(n.$$.fragment), s = Dh(), l = Xh(
        /*label*/
        i[0]
      ), Ms(t, "class", "svelte-9gxdi0"), Ms(e, "for", ""), Ms(e, "data-testid", "block-label"), Ms(e, "class", "svelte-9gxdi0"), Bn(e, "hide", !/*show_label*/
      i[2]), Bn(e, "sr-only", !/*show_label*/
      i[2]), Bn(
        e,
        "float",
        /*float*/
        i[4]
      ), Bn(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      zh(r, e, a), Bl(e, t), Wh(n, t, null), Bl(e, s), Bl(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Bh(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Bn(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Bn(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Bn(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Bn(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Yh(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Eh(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Sh(e), Ch(n);
    }
  };
}
function Lh(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class qh extends kh {
  constructor(e) {
    super(), Mh(this, e, Lh, Rh, xh, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Ph,
  append: Wo,
  attr: vn,
  bubble: Hh,
  create_component: jh,
  destroy_component: Ih,
  detach: Bc,
  element: xo,
  init: Ah,
  insert: Dc,
  listen: Th,
  mount_component: Fh,
  safe_not_equal: Oh,
  set_data: Uh,
  set_style: Ci,
  space: Nh,
  text: Vh,
  toggle_class: pt,
  transition_in: Kh,
  transition_out: Zh
} = window.__gradio__svelte__internal;
function va(i) {
  let e, t;
  return {
    c() {
      e = xo("span"), t = Vh(
        /*label*/
        i[1]
      ), vn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      Dc(n, e, s), Wo(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && Uh(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Bc(e);
    }
  };
}
function Jh(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && va(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = xo("button"), a && a.c(), t = Nh(), n = xo("div"), jh(s.$$.fragment), vn(n, "class", "svelte-1lrphxw"), pt(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), pt(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), pt(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], vn(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), vn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), vn(
        e,
        "title",
        /*label*/
        i[1]
      ), vn(e, "class", "svelte-1lrphxw"), pt(
        e,
        "pending",
        /*pending*/
        i[3]
      ), pt(
        e,
        "padded",
        /*padded*/
        i[5]
      ), pt(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), pt(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Ci(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Ci(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Ci(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      Dc(c, e, f), a && a.m(e, null), Wo(e, t), Wo(e, n), Fh(s, n, null), l = !0, o || (r = Th(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = va(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && pt(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && pt(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && pt(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && vn(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && vn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && vn(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && pt(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && pt(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && pt(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && pt(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && Ci(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Ci(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && Ci(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (Kh(s.$$.fragment, c), l = !0);
    },
    o(c) {
      Zh(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && Bc(e), a && a.d(), Ih(s), o = !1, r();
    }
  };
}
function Gh(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: h = !1 } = e, { hasPopup: d = !1 } = e, { color: _ = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: u = "var(--background-fill-primary)" } = e, { offset: v = 0 } = e;
  function p(y) {
    Hh.call(this, i, y);
  }
  return i.$$set = (y) => {
    "Icon" in y && t(0, s = y.Icon), "label" in y && t(1, l = y.label), "show_label" in y && t(2, o = y.show_label), "pending" in y && t(3, r = y.pending), "size" in y && t(4, a = y.size), "padded" in y && t(5, c = y.padded), "highlight" in y && t(6, f = y.highlight), "disabled" in y && t(7, h = y.disabled), "hasPopup" in y && t(8, d = y.hasPopup), "color" in y && t(13, _ = y.color), "transparent" in y && t(9, g = y.transparent), "background" in y && t(10, u = y.background), "offset" in y && t(11, v = y.offset);
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
    h,
    d,
    g,
    u,
    v,
    n,
    _,
    p
  ];
}
class vl extends Ph {
  constructor(e) {
    super(), Ah(this, e, Gh, Jh, Oh, {
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
  SvelteComponent: Qh,
  append: $h,
  attr: Dl,
  binding_callbacks: ed,
  create_slot: td,
  detach: nd,
  element: wa,
  get_all_dirty_from_scope: id,
  get_slot_changes: sd,
  init: ld,
  insert: od,
  safe_not_equal: ad,
  toggle_class: Dn,
  transition_in: rd,
  transition_out: cd,
  update_slot_base: fd
} = window.__gradio__svelte__internal;
function ud(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = td(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = wa("div"), t = wa("div"), l && l.c(), Dl(t, "class", "icon svelte-3w3rth"), Dl(e, "class", "empty svelte-3w3rth"), Dl(e, "aria-label", "Empty value"), Dn(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Dn(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Dn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Dn(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      od(o, e, r), $h(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && fd(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? sd(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : id(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Dn(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Dn(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Dn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Dn(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (rd(l, o), n = !0);
    },
    o(o) {
      cd(l, o), n = !1;
    },
    d(o) {
      o && nd(e), l && l.d(o), i[6](null);
    }
  };
}
function hd(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(h) {
    var d;
    if (!h) return !1;
    const { height: _ } = h.getBoundingClientRect(), { height: g } = ((d = h.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: _ };
    return _ > g + 2;
  }
  function f(h) {
    ed[h ? "unshift" : "push"](() => {
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
class dd extends Qh {
  constructor(e) {
    super(), ld(this, e, hd, ud, ad, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: _d,
  append: ka,
  attr: bt,
  detach: md,
  init: gd,
  insert: pd,
  noop: Xl,
  safe_not_equal: bd,
  svg_element: Yl
} = window.__gradio__svelte__internal;
function vd(i) {
  let e, t, n;
  return {
    c() {
      e = Yl("svg"), t = Yl("path"), n = Yl("circle"), bt(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), bt(n, "cx", "12"), bt(n, "cy", "13"), bt(n, "r", "4"), bt(e, "xmlns", "http://www.w3.org/2000/svg"), bt(e, "width", "100%"), bt(e, "height", "100%"), bt(e, "viewBox", "0 0 24 24"), bt(e, "fill", "none"), bt(e, "stroke", "currentColor"), bt(e, "stroke-width", "1.5"), bt(e, "stroke-linecap", "round"), bt(e, "stroke-linejoin", "round"), bt(e, "class", "feather feather-camera");
    },
    m(s, l) {
      pd(s, e, l), ka(e, t), ka(e, n);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(s) {
      s && md(e);
    }
  };
}
class wd extends _d {
  constructor(e) {
    super(), gd(this, e, null, vd, bd, {});
  }
}
const {
  SvelteComponent: kd,
  append: yd,
  attr: Ot,
  detach: Cd,
  init: Sd,
  insert: Md,
  noop: El,
  safe_not_equal: zd,
  svg_element: ya
} = window.__gradio__svelte__internal;
function Wd(i) {
  let e, t;
  return {
    c() {
      e = ya("svg"), t = ya("circle"), Ot(t, "cx", "12"), Ot(t, "cy", "12"), Ot(t, "r", "10"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "stroke-width", "1.5"), Ot(e, "stroke-linecap", "round"), Ot(e, "stroke-linejoin", "round"), Ot(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Md(n, e, s), yd(e, t);
    },
    p: El,
    i: El,
    o: El,
    d(n) {
      n && Cd(e);
    }
  };
}
let xd = class extends kd {
  constructor(e) {
    super(), Sd(this, e, null, Wd, zd, {});
  }
};
const {
  SvelteComponent: Bd,
  append: Rl,
  attr: Ut,
  detach: Dd,
  init: Xd,
  insert: Yd,
  noop: Ll,
  safe_not_equal: Ed,
  set_style: sn,
  svg_element: zs
} = window.__gradio__svelte__internal;
function Rd(i) {
  let e, t, n, s;
  return {
    c() {
      e = zs("svg"), t = zs("g"), n = zs("path"), s = zs("path"), Ut(n, "d", "M18,6L6.087,17.913"), sn(n, "fill", "none"), sn(n, "fill-rule", "nonzero"), sn(n, "stroke-width", "2px"), Ut(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ut(s, "d", "M4.364,4.364L19.636,19.636"), sn(s, "fill", "none"), sn(s, "fill-rule", "nonzero"), sn(s, "stroke-width", "2px"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "version", "1.1"), Ut(e, "xmlns", "http://www.w3.org/2000/svg"), Ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ut(e, "xml:space", "preserve"), Ut(e, "stroke", "currentColor"), sn(e, "fill-rule", "evenodd"), sn(e, "clip-rule", "evenodd"), sn(e, "stroke-linecap", "round"), sn(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Yd(l, e, o), Rl(e, t), Rl(t, n), Rl(e, s);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(l) {
      l && Dd(e);
    }
  };
}
class Xc extends Bd {
  constructor(e) {
    super(), Xd(this, e, null, Rd, Ed, {});
  }
}
const {
  SvelteComponent: Ld,
  append: qd,
  attr: Gi,
  detach: Pd,
  init: Hd,
  insert: jd,
  noop: ql,
  safe_not_equal: Id,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function Ad(i) {
  let e, t;
  return {
    c() {
      e = Ca("svg"), t = Ca("path"), Gi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Gi(t, "fill", "currentColor"), Gi(e, "id", "icon"), Gi(e, "xmlns", "http://www.w3.org/2000/svg"), Gi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      jd(n, e, s), qd(e, t);
    },
    p: ql,
    i: ql,
    o: ql,
    d(n) {
      n && Pd(e);
    }
  };
}
class Td extends Ld {
  constructor(e) {
    super(), Hd(this, e, null, Ad, Id, {});
  }
}
const {
  SvelteComponent: Fd,
  append: Od,
  attr: Si,
  detach: Ud,
  init: Nd,
  insert: Vd,
  noop: Pl,
  safe_not_equal: Kd,
  svg_element: Sa
} = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t;
  return {
    c() {
      e = Sa("svg"), t = Sa("path"), Si(t, "fill", "currentColor"), Si(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Si(e, "xmlns", "http://www.w3.org/2000/svg"), Si(e, "width", "100%"), Si(e, "height", "100%"), Si(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      Vd(n, e, s), Od(e, t);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(n) {
      n && Ud(e);
    }
  };
}
class Jd extends Fd {
  constructor(e) {
    super(), Nd(this, e, null, Zd, Kd, {});
  }
}
const {
  SvelteComponent: Gd,
  append: Qd,
  attr: Mi,
  detach: $d,
  init: e_,
  insert: t_,
  noop: Hl,
  safe_not_equal: n_,
  svg_element: Ma
} = window.__gradio__svelte__internal;
function i_(i) {
  let e, t;
  return {
    c() {
      e = Ma("svg"), t = Ma("path"), Mi(t, "d", "M5 8l4 4 4-4z"), Mi(e, "class", "dropdown-arrow svelte-145leq6"), Mi(e, "xmlns", "http://www.w3.org/2000/svg"), Mi(e, "width", "100%"), Mi(e, "height", "100%"), Mi(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      t_(n, e, s), Qd(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(n) {
      n && $d(e);
    }
  };
}
let Zo = class extends Gd {
  constructor(e) {
    super(), e_(this, e, null, i_, n_, {});
  }
};
const {
  SvelteComponent: s_,
  append: jl,
  attr: Te,
  detach: l_,
  init: o_,
  insert: a_,
  noop: Il,
  safe_not_equal: r_,
  svg_element: Ws
} = window.__gradio__svelte__internal;
function c_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ws("svg"), t = Ws("rect"), n = Ws("circle"), s = Ws("polyline"), Te(t, "x", "3"), Te(t, "y", "3"), Te(t, "width", "18"), Te(t, "height", "18"), Te(t, "rx", "2"), Te(t, "ry", "2"), Te(n, "cx", "8.5"), Te(n, "cy", "8.5"), Te(n, "r", "1.5"), Te(s, "points", "21 15 16 10 5 21"), Te(e, "xmlns", "http://www.w3.org/2000/svg"), Te(e, "width", "100%"), Te(e, "height", "100%"), Te(e, "viewBox", "0 0 24 24"), Te(e, "fill", "none"), Te(e, "stroke", "currentColor"), Te(e, "stroke-width", "1.5"), Te(e, "stroke-linecap", "round"), Te(e, "stroke-linejoin", "round"), Te(e, "class", "feather feather-image");
    },
    m(l, o) {
      a_(l, e, o), jl(e, t), jl(e, n), jl(e, s);
    },
    p: Il,
    i: Il,
    o: Il,
    d(l) {
      l && l_(e);
    }
  };
}
let Yc = class extends s_ {
  constructor(e) {
    super(), o_(this, e, null, c_, r_, {});
  }
};
const {
  SvelteComponent: f_,
  append: u_,
  attr: xs,
  detach: h_,
  init: d_,
  insert: __,
  noop: Al,
  safe_not_equal: m_,
  svg_element: za
} = window.__gradio__svelte__internal;
function g_(i) {
  let e, t;
  return {
    c() {
      e = za("svg"), t = za("path"), xs(t, "fill", "currentColor"), xs(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), xs(e, "xmlns", "http://www.w3.org/2000/svg"), xs(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      __(n, e, s), u_(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(n) {
      n && h_(e);
    }
  };
}
class Ec extends f_ {
  constructor(e) {
    super(), d_(this, e, null, g_, m_, {});
  }
}
const {
  SvelteComponent: p_,
  append: Bs,
  attr: Fe,
  detach: b_,
  init: v_,
  insert: w_,
  noop: Tl,
  safe_not_equal: k_,
  svg_element: Qi
} = window.__gradio__svelte__internal;
function y_(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = Qi("svg"), t = Qi("path"), n = Qi("path"), s = Qi("line"), l = Qi("line"), Fe(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Fe(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Fe(s, "x1", "12"), Fe(s, "y1", "19"), Fe(s, "x2", "12"), Fe(s, "y2", "23"), Fe(l, "x1", "8"), Fe(l, "y1", "23"), Fe(l, "x2", "16"), Fe(l, "y2", "23"), Fe(e, "xmlns", "http://www.w3.org/2000/svg"), Fe(e, "width", "100%"), Fe(e, "height", "100%"), Fe(e, "viewBox", "0 0 24 24"), Fe(e, "fill", "none"), Fe(e, "stroke", "currentColor"), Fe(e, "stroke-width", "2"), Fe(e, "stroke-linecap", "round"), Fe(e, "stroke-linejoin", "round"), Fe(e, "class", "feather feather-mic");
    },
    m(o, r) {
      w_(o, e, r), Bs(e, t), Bs(e, n), Bs(e, s), Bs(e, l);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(o) {
      o && b_(e);
    }
  };
}
class C_ extends p_ {
  constructor(e) {
    super(), v_(this, e, null, y_, k_, {});
  }
}
const {
  SvelteComponent: S_,
  append: M_,
  attr: vt,
  detach: z_,
  init: W_,
  insert: x_,
  noop: Fl,
  safe_not_equal: B_,
  svg_element: Wa
} = window.__gradio__svelte__internal;
function D_(i) {
  let e, t;
  return {
    c() {
      e = Wa("svg"), t = Wa("rect"), vt(t, "x", "3"), vt(t, "y", "3"), vt(t, "width", "18"), vt(t, "height", "18"), vt(t, "rx", "2"), vt(t, "ry", "2"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "stroke-width", "1.5"), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round"), vt(e, "class", "feather feather-square");
    },
    m(n, s) {
      x_(n, e, s), M_(e, t);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(n) {
      n && z_(e);
    }
  };
}
class X_ extends S_ {
  constructor(e) {
    super(), W_(this, e, null, D_, B_, {});
  }
}
const {
  SvelteComponent: Y_,
  append: Ol,
  attr: ct,
  detach: E_,
  init: R_,
  insert: L_,
  noop: Ul,
  safe_not_equal: q_,
  svg_element: Ds
} = window.__gradio__svelte__internal;
function P_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ds("svg"), t = Ds("path"), n = Ds("polyline"), s = Ds("line"), ct(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ct(n, "points", "17 8 12 3 7 8"), ct(s, "x1", "12"), ct(s, "y1", "3"), ct(s, "x2", "12"), ct(s, "y2", "15"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "90%"), ct(e, "height", "90%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "fill", "none"), ct(e, "stroke", "currentColor"), ct(e, "stroke-width", "2"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-upload");
    },
    m(l, o) {
      L_(l, e, o), Ol(e, t), Ol(e, n), Ol(e, s);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(l) {
      l && E_(e);
    }
  };
}
let Rc = class extends Y_ {
  constructor(e) {
    super(), R_(this, e, null, P_, q_, {});
  }
};
const {
  SvelteComponent: H_,
  append: xa,
  attr: Xn,
  detach: j_,
  init: I_,
  insert: A_,
  noop: Nl,
  safe_not_equal: T_,
  svg_element: Vl
} = window.__gradio__svelte__internal;
function F_(i) {
  let e, t, n;
  return {
    c() {
      e = Vl("svg"), t = Vl("path"), n = Vl("path"), Xn(t, "fill", "currentColor"), Xn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Xn(n, "fill", "currentColor"), Xn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Xn(e, "xmlns", "http://www.w3.org/2000/svg"), Xn(e, "width", "100%"), Xn(e, "height", "100%"), Xn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      A_(s, e, l), xa(e, t), xa(e, n);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(s) {
      s && j_(e);
    }
  };
}
let Lc = class extends H_ {
  constructor(e) {
    super(), I_(this, e, null, F_, T_, {});
  }
};
const O_ = [
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
], Ba = {
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
O_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: Ba[e][t],
      secondary: Ba[e][n]
    }
  }),
  {}
);
class Qs extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function U_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Qs("Must be on Spaces to share.");
  let t, n, s;
  t = N_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new Qs(`Upload failed: ${c.error}`);
    }
    throw new Qs("Upload failed.");
  }
  return await o.text();
}
function N_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: V_,
  create_component: K_,
  destroy_component: Z_,
  init: J_,
  mount_component: G_,
  safe_not_equal: Q_,
  transition_in: $_,
  transition_out: em
} = window.__gradio__svelte__internal, { createEventDispatcher: tm } = window.__gradio__svelte__internal;
function nm(i) {
  let e, t;
  return e = new vl({
    props: {
      Icon: Td,
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
      K_(e.$$.fragment);
    },
    m(n, s) {
      G_(e, n, s), t = !0;
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
      t || ($_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      em(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Z_(e, n);
    }
  };
}
function im(i, e, t) {
  const n = tm();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof Qs ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class sm extends V_ {
  constructor(e) {
    super(), J_(this, e, im, nm, Q_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: lm,
  append: li,
  attr: Bo,
  check_outros: om,
  create_component: qc,
  destroy_component: Pc,
  detach: $s,
  element: Do,
  group_outros: am,
  init: rm,
  insert: el,
  mount_component: Hc,
  safe_not_equal: cm,
  set_data: Xo,
  space: Yo,
  text: ss,
  toggle_class: Da,
  transition_in: sl,
  transition_out: ll
} = window.__gradio__svelte__internal;
function fm(i) {
  let e, t;
  return e = new Rc({}), {
    c() {
      qc(e.$$.fragment);
    },
    m(n, s) {
      Hc(e, n, s), t = !0;
    },
    i(n) {
      t || (sl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ll(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pc(e, n);
    }
  };
}
function um(i) {
  let e, t;
  return e = new Ec({}), {
    c() {
      qc(e.$$.fragment);
    },
    m(n, s) {
      Hc(e, n, s), t = !0;
    },
    i(n) {
      t || (sl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ll(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pc(e, n);
    }
  };
}
function Xa(i) {
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
      e = Do("span"), t = ss("- "), s = ss(n), l = ss(" -"), o = Yo(), a = ss(r), Bo(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      el(c, e, f), li(e, t), li(e, s), li(e, l), el(c, o, f), el(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Xo(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Xo(a, r);
    },
    d(c) {
      c && ($s(e), $s(o), $s(a));
    }
  };
}
function hm(i) {
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
  const f = [um, fm], h = [];
  function d(g, u) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), s = h[n] = f[n](i);
  let _ = (
    /*mode*/
    i[3] !== "short" && Xa(i)
  );
  return {
    c() {
      e = Do("div"), t = Do("span"), s.c(), l = Yo(), r = ss(o), a = Yo(), _ && _.c(), Bo(t, "class", "icon-wrap svelte-kzcjhc"), Da(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Bo(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, u) {
      el(g, e, u), li(e, t), h[n].m(t, null), li(e, l), li(e, r), li(e, a), _ && _.m(e, null), c = !0;
    },
    p(g, [u]) {
      let v = n;
      n = d(g), n !== v && (am(), ll(h[v], 1, 1, () => {
        h[v] = null;
      }), om(), s = h[n], s || (s = h[n] = f[n](g), s.c()), sl(s, 1), s.m(t, null)), (!c || u & /*hovered*/
      16) && Da(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!c || u & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && Xo(r, o), /*mode*/
      g[3] !== "short" ? _ ? _.p(g, u) : (_ = Xa(g), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null);
    },
    i(g) {
      c || (sl(s), c = !0);
    },
    o(g) {
      ll(s), c = !1;
    },
    d(g) {
      g && $s(e), h[n].d(), _ && _.d();
    }
  };
}
function dm(i, e, t) {
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
class jc extends lm {
  constructor(e) {
    super(), rm(this, e, dm, hm, cm, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: _m,
  append: Kl,
  attr: dn,
  check_outros: ls,
  create_component: wl,
  destroy_component: kl,
  detach: Oi,
  element: bs,
  empty: mm,
  group_outros: os,
  init: gm,
  insert: Ui,
  listen: yl,
  mount_component: Cl,
  safe_not_equal: pm,
  space: Zl,
  toggle_class: On,
  transition_in: Ne,
  transition_out: kt
} = window.__gradio__svelte__internal;
function Ya(i) {
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
  ), c, f = t && Ea(i), h = s && Ra(i), d = o && La(i), _ = a && qa(i);
  return {
    c() {
      e = bs("span"), f && f.c(), n = Zl(), h && h.c(), l = Zl(), d && d.c(), r = Zl(), _ && _.c(), dn(e, "class", "source-selection svelte-1jp3vgd"), dn(e, "data-testid", "source-select");
    },
    m(g, u) {
      Ui(g, e, u), f && f.m(e, null), Kl(e, n), h && h.m(e, null), Kl(e, l), d && d.m(e, null), Kl(e, r), _ && _.m(e, null), c = !0;
    },
    p(g, u) {
      u & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? f ? (f.p(g, u), u & /*sources*/
      2 && Ne(f, 1)) : (f = Ea(g), f.c(), Ne(f, 1), f.m(e, n)) : f && (os(), kt(f, 1, 1, () => {
        f = null;
      }), ls()), u & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("microphone")), s ? h ? (h.p(g, u), u & /*sources*/
      2 && Ne(h, 1)) : (h = Ra(g), h.c(), Ne(h, 1), h.m(e, l)) : h && (os(), kt(h, 1, 1, () => {
        h = null;
      }), ls()), u & /*sources*/
      2 && (o = /*sources*/
      g[1].includes("webcam")), o ? d ? (d.p(g, u), u & /*sources*/
      2 && Ne(d, 1)) : (d = La(g), d.c(), Ne(d, 1), d.m(e, r)) : d && (os(), kt(d, 1, 1, () => {
        d = null;
      }), ls()), u & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? _ ? (_.p(g, u), u & /*sources*/
      2 && Ne(_, 1)) : (_ = qa(g), _.c(), Ne(_, 1), _.m(e, null)) : _ && (os(), kt(_, 1, 1, () => {
        _ = null;
      }), ls());
    },
    i(g) {
      c || (Ne(f), Ne(h), Ne(d), Ne(_), c = !0);
    },
    o(g) {
      kt(f), kt(h), kt(d), kt(_), c = !1;
    },
    d(g) {
      g && Oi(e), f && f.d(), h && h.d(), d && d.d(), _ && _.d();
    }
  };
}
function Ea(i) {
  let e, t, n, s, l;
  return t = new Rc({}), {
    c() {
      e = bs("button"), wl(t.$$.fragment), dn(e, "class", "icon svelte-1jp3vgd"), dn(e, "aria-label", "Upload file"), On(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Ui(o, e, r), Cl(t, e, null), n = !0, s || (l = yl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && On(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (Ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      kt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Oi(e), kl(t), s = !1, l();
    }
  };
}
function Ra(i) {
  let e, t, n, s, l;
  return t = new C_({}), {
    c() {
      e = bs("button"), wl(t.$$.fragment), dn(e, "class", "icon svelte-1jp3vgd"), dn(e, "aria-label", "Record audio"), On(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Ui(o, e, r), Cl(t, e, null), n = !0, s || (l = yl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && On(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (Ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      kt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Oi(e), kl(t), s = !1, l();
    }
  };
}
function La(i) {
  let e, t, n, s, l;
  return t = new Lc({}), {
    c() {
      e = bs("button"), wl(t.$$.fragment), dn(e, "class", "icon svelte-1jp3vgd"), dn(e, "aria-label", "Capture from camera"), On(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Ui(o, e, r), Cl(t, e, null), n = !0, s || (l = yl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && On(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (Ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      kt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Oi(e), kl(t), s = !1, l();
    }
  };
}
function qa(i) {
  let e, t, n, s, l;
  return t = new Ec({}), {
    c() {
      e = bs("button"), wl(t.$$.fragment), dn(e, "class", "icon svelte-1jp3vgd"), dn(e, "aria-label", "Paste from clipboard"), On(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Ui(o, e, r), Cl(t, e, null), n = !0, s || (l = yl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && On(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (Ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      kt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Oi(e), kl(t), s = !1, l();
    }
  };
}
function bm(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ya(i)
  );
  return {
    c() {
      n && n.c(), e = mm();
    },
    m(s, l) {
      n && n.m(s, l), Ui(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && Ne(n, 1)) : (n = Ya(s), n.c(), Ne(n, 1), n.m(e.parentNode, e)) : n && (os(), kt(n, 1, 1, () => {
        n = null;
      }), ls());
    },
    i(s) {
      t || (Ne(n), t = !0);
    },
    o(s) {
      kt(n), t = !1;
    },
    d(s) {
      s && Oi(e), n && n.d(s);
    }
  };
}
function vm(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(g, u, v, p) {
    function y(w) {
      return w instanceof v ? w : new v(function(S) {
        S(w);
      });
    }
    return new (v || (v = Promise))(function(w, S) {
      function C(x) {
        try {
          W(p.next(x));
        } catch (B) {
          S(B);
        }
      }
      function k(x) {
        try {
          W(p.throw(x));
        } catch (B) {
          S(B);
        }
      }
      function W(x) {
        x.done ? w(x.value) : y(x.value).then(C, k);
      }
      W((p = p.apply(g, u || [])).next());
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
  const f = () => c("upload"), h = () => c("microphone"), d = () => c("webcam"), _ = () => c("clipboard");
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
    h,
    d,
    _
  ];
}
class wm extends _m {
  constructor(e) {
    super(), gm(this, e, vm, bm, pm, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Hi(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function tl() {
}
const km = (i) => i;
function ym(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Pa(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const Ic = typeof window < "u";
let Ha = Ic ? () => window.performance.now() : () => Date.now(), Ac = Ic ? (i) => requestAnimationFrame(i) : tl;
const Fi = /* @__PURE__ */ new Set();
function Tc(i) {
  Fi.forEach((e) => {
    e.c(i) || (Fi.delete(e), e.f());
  }), Fi.size !== 0 && Ac(Tc);
}
function Cm(i) {
  let e;
  return Fi.size === 0 && Ac(Tc), {
    promise: new Promise((t) => {
      Fi.add(e = { c: i, f: t });
    }),
    abort() {
      Fi.delete(e);
    }
  };
}
function Sm(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Mm(i, { delay: e = 0, duration: t = 400, easing: n = km } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function ja(i, { delay: e = 0, duration: t = 400, easing: n = Sm, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [h, d] = Pa(s), [_, g] = Pa(l);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (u, v) => `
			transform: ${c} translate(${(1 - u) * h}${d}, ${(1 - u) * _}${g});
			opacity: ${a - f * v}`
  };
}
const zi = [];
function zm(i, e = tl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (ym(i, r) && (i = r, t)) {
      const a = !zi.length;
      for (const c of n)
        c[1](), zi.push(c, i);
      if (a) {
        for (let c = 0; c < zi.length; c += 2)
          zi[c][0](zi[c + 1]);
        zi.length = 0;
      }
    }
  }
  function l(r) {
    s(r(i));
  }
  function o(r, a = tl) {
    const c = [r, a];
    return n.add(c), n.size === 1 && (t = e(s, l) || tl), r(i), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function Ia(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Eo(i, e, t, n) {
  if (typeof t == "number" || Ia(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * s, r = i.opts.damping * l, a = (o - r) * i.inv_mass, c = (l + a) * i.dt;
    return Math.abs(c) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, Ia(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, l) => Eo(i, e[l], t[l], n[l])
      );
    if (typeof t == "object") {
      const s = {};
      for (const l in t)
        s[l] = Eo(i, e[l], t[l], n[l]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Aa(i, e = {}) {
  const t = zm(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, h = 1, d = 0, _ = !1;
  function g(v, p = {}) {
    f = v;
    const y = a = {};
    return i == null || p.hard || u.stiffness >= 1 && u.damping >= 1 ? (_ = !0, o = Ha(), c = v, t.set(i = f), Promise.resolve()) : (p.soft && (d = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), h = 0), r || (o = Ha(), _ = !1, r = Cm((w) => {
      if (_)
        return _ = !1, r = null, !1;
      h = Math.min(h + d, 1);
      const S = {
        inv_mass: h,
        opts: u,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, C = Eo(S, c, i, f);
      return o = w, c = i, t.set(i = C), S.settled && (r = null), !S.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        y === a && w();
      });
    }));
  }
  const u = {
    set: g,
    update: (v, p) => g(v(f, i), p),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return u;
}
const {
  SvelteComponent: Wm,
  append: Nt,
  attr: be,
  component_subscribe: Ta,
  detach: xm,
  element: Bm,
  init: Dm,
  insert: Xm,
  noop: Fa,
  safe_not_equal: Ym,
  set_style: Xs,
  svg_element: Vt,
  toggle_class: Oa
} = window.__gradio__svelte__internal, { onMount: Em } = window.__gradio__svelte__internal;
function Rm(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d;
  return {
    c() {
      e = Bm("div"), t = Vt("svg"), n = Vt("g"), s = Vt("path"), l = Vt("path"), o = Vt("path"), r = Vt("path"), a = Vt("g"), c = Vt("path"), f = Vt("path"), h = Vt("path"), d = Vt("path"), be(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), be(s, "fill", "#FF7C00"), be(s, "fill-opacity", "0.4"), be(s, "class", "svelte-43sxxs"), be(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), be(l, "fill", "#FF7C00"), be(l, "class", "svelte-43sxxs"), be(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), be(o, "fill", "#FF7C00"), be(o, "fill-opacity", "0.4"), be(o, "class", "svelte-43sxxs"), be(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), be(r, "fill", "#FF7C00"), be(r, "class", "svelte-43sxxs"), Xs(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), be(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), be(c, "fill", "#FF7C00"), be(c, "fill-opacity", "0.4"), be(c, "class", "svelte-43sxxs"), be(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), be(f, "fill", "#FF7C00"), be(f, "class", "svelte-43sxxs"), be(h, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), be(h, "fill", "#FF7C00"), be(h, "fill-opacity", "0.4"), be(h, "class", "svelte-43sxxs"), be(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), be(d, "fill", "#FF7C00"), be(d, "class", "svelte-43sxxs"), Xs(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), be(t, "viewBox", "-1200 -1200 3000 3000"), be(t, "fill", "none"), be(t, "xmlns", "http://www.w3.org/2000/svg"), be(t, "class", "svelte-43sxxs"), be(e, "class", "svelte-43sxxs"), Oa(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(_, g) {
      Xm(_, e, g), Nt(e, t), Nt(t, n), Nt(n, s), Nt(n, l), Nt(n, o), Nt(n, r), Nt(t, a), Nt(a, c), Nt(a, f), Nt(a, h), Nt(a, d);
    },
    p(_, [g]) {
      g & /*$top*/
      2 && Xs(n, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), g & /*$bottom*/
      4 && Xs(a, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), g & /*margin*/
      1 && Oa(
        e,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: Fa,
    o: Fa,
    d(_) {
      _ && xm(e);
    }
  };
}
function Lm(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(_, g, u, v) {
    function p(y) {
      return y instanceof u ? y : new u(function(w) {
        w(y);
      });
    }
    return new (u || (u = Promise))(function(y, w) {
      function S(W) {
        try {
          k(v.next(W));
        } catch (x) {
          w(x);
        }
      }
      function C(W) {
        try {
          k(v.throw(W));
        } catch (x) {
          w(x);
        }
      }
      function k(W) {
        W.done ? y(W.value) : p(W.value).then(S, C);
      }
      k((v = v.apply(_, g || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = Aa([0, 0]);
  Ta(i, r, (_) => t(1, n = _));
  const a = Aa([0, 0]);
  Ta(i, a, (_) => t(2, s = _));
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
  function d() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), h();
    });
  }
  return Em(() => (d(), () => c = !0)), i.$$set = (_) => {
    "margin" in _ && t(0, o = _.margin);
  }, [o, n, s, r, a];
}
class qm extends Wm {
  constructor(e) {
    super(), Dm(this, e, Lm, Rm, Ym, { margin: 0 });
  }
}
const {
  SvelteComponent: Pm,
  append: oi,
  attr: $t,
  binding_callbacks: Ua,
  check_outros: Ro,
  create_component: Fc,
  create_slot: Oc,
  destroy_component: Uc,
  destroy_each: Nc,
  detach: le,
  element: un,
  empty: Ni,
  ensure_array_like: ol,
  get_all_dirty_from_scope: Vc,
  get_slot_changes: Kc,
  group_outros: Lo,
  init: Hm,
  insert: oe,
  mount_component: Zc,
  noop: qo,
  safe_not_equal: jm,
  set_data: At,
  set_style: Tn,
  space: It,
  text: qe,
  toggle_class: Ht,
  transition_in: Qt,
  transition_out: hn,
  update_slot_base: Jc
} = window.__gradio__svelte__internal, { tick: Im } = window.__gradio__svelte__internal, { onDestroy: Am } = window.__gradio__svelte__internal, { createEventDispatcher: Tm } = window.__gradio__svelte__internal, Fm = (i) => ({}), Na = (i) => ({}), Om = (i) => ({}), Va = (i) => ({});
function Ka(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Za(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Um(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new vl({
    props: {
      Icon: Xc,
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
  ), f = Oc(
    c,
    i,
    /*$$scope*/
    i[29],
    Na
  );
  return {
    c() {
      e = un("div"), Fc(t.$$.fragment), n = It(), s = un("span"), o = qe(l), r = It(), f && f.c(), $t(e, "class", "clear-status svelte-16nch4a"), $t(s, "class", "error svelte-16nch4a");
    },
    m(h, d) {
      oe(h, e, d), Zc(t, e, null), oe(h, n, d), oe(h, s, d), oi(s, o), oe(h, r, d), f && f.m(h, d), a = !0;
    },
    p(h, d) {
      const _ = {};
      d[0] & /*i18n*/
      2 && (_.label = /*i18n*/
      h[1]("common.clear")), t.$set(_), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      h[1]("common.error") + "") && At(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && Jc(
        f,
        c,
        h,
        /*$$scope*/
        h[29],
        a ? Kc(
          c,
          /*$$scope*/
          h[29],
          d,
          Fm
        ) : Vc(
          /*$$scope*/
          h[29]
        ),
        Na
      );
    },
    i(h) {
      a || (Qt(t.$$.fragment, h), Qt(f, h), a = !0);
    },
    o(h) {
      hn(t.$$.fragment, h), hn(f, h), a = !1;
    },
    d(h) {
      h && (le(e), le(n), le(s), le(r)), Uc(t), f && f.d(h);
    }
  };
}
function Nm(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ja(i)
  );
  function h(w, S) {
    if (
      /*progress*/
      w[7]
    ) return Zm;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return Km;
    if (
      /*queue_position*/
      w[2] === 0
    ) return Vm;
  }
  let d = h(i), _ = d && d(i), g = (
    /*timer*/
    i[5] && $a(i)
  );
  const u = [$m, Qm], v = [];
  function p(w, S) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = p(i)) && (o = v[l] = u[l](i));
  let y = !/*timer*/
  i[5] && or(i);
  return {
    c() {
      f && f.c(), e = It(), t = un("div"), _ && _.c(), n = It(), g && g.c(), s = It(), o && o.c(), r = It(), y && y.c(), a = Ni(), $t(t, "class", "progress-text svelte-16nch4a"), Ht(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Ht(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, S) {
      f && f.m(w, S), oe(w, e, S), oe(w, t, S), _ && _.m(t, null), oi(t, n), g && g.m(t, null), oe(w, s, S), ~l && v[l].m(w, S), oe(w, r, S), y && y.m(w, S), oe(w, a, S), c = !0;
    },
    p(w, S) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, S) : (f = Ja(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = h(w)) && _ ? _.p(w, S) : (_ && _.d(1), _ = d && d(w), _ && (_.c(), _.m(t, n))), /*timer*/
      w[5] ? g ? g.p(w, S) : (g = $a(w), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!c || S[0] & /*variant*/
      256) && Ht(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || S[0] & /*variant*/
      256) && Ht(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let C = l;
      l = p(w), l === C ? ~l && v[l].p(w, S) : (o && (Lo(), hn(v[C], 1, 1, () => {
        v[C] = null;
      }), Ro()), ~l ? (o = v[l], o ? o.p(w, S) : (o = v[l] = u[l](w), o.c()), Qt(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? y && (Lo(), hn(y, 1, 1, () => {
        y = null;
      }), Ro()) : y ? (y.p(w, S), S[0] & /*timer*/
      32 && Qt(y, 1)) : (y = or(w), y.c(), Qt(y, 1), y.m(a.parentNode, a));
    },
    i(w) {
      c || (Qt(o), Qt(y), c = !0);
    },
    o(w) {
      hn(o), hn(y), c = !1;
    },
    d(w) {
      w && (le(e), le(t), le(s), le(r), le(a)), f && f.d(w), _ && _.d(), g && g.d(), ~l && v[l].d(w), y && y.d(w);
    }
  };
}
function Ja(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = un("div"), $t(e, "class", "eta-bar svelte-16nch4a"), Tn(e, "transform", t);
    },
    m(n, s) {
      oe(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Tn(e, "transform", t);
    },
    d(n) {
      n && le(e);
    }
  };
}
function Vm(i) {
  let e;
  return {
    c() {
      e = qe("processing |");
    },
    m(t, n) {
      oe(t, e, n);
    },
    p: qo,
    d(t) {
      t && le(e);
    }
  };
}
function Km(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = qe("queue: "), n = qe(t), s = qe("/"), l = qe(
        /*queue_size*/
        i[3]
      ), o = qe(" |");
    },
    m(r, a) {
      oe(r, e, a), oe(r, n, a), oe(r, s, a), oe(r, l, a), oe(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && At(n, t), a[0] & /*queue_size*/
      8 && At(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (le(e), le(n), le(s), le(l), le(o));
    }
  };
}
function Zm(i) {
  let e, t = ol(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Qa(Za(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Ni();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      oe(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = ol(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Za(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Qa(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && le(e), Nc(n, s);
    }
  };
}
function Ga(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, h) {
    return (
      /*p*/
      f[41].length != null ? Gm : Jm
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = It(), n = qe(t), s = qe(" | "), o = qe(l);
    },
    m(f, h) {
      c.m(f, h), oe(f, e, h), oe(f, n, h), oe(f, s, h), oe(f, o, h);
    },
    p(f, h) {
      a === (a = r(f)) && c ? c.p(f, h) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), h[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && At(n, t);
    },
    d(f) {
      f && (le(e), le(n), le(s), le(o)), c.d(f);
    }
  };
}
function Jm(i) {
  let e = Hi(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = qe(e);
    },
    m(n, s) {
      oe(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = Hi(
        /*p*/
        n[41].index || 0
      ) + "") && At(t, e);
    },
    d(n) {
      n && le(t);
    }
  };
}
function Gm(i) {
  let e = Hi(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = Hi(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = qe(e), n = qe("/"), l = qe(s);
    },
    m(o, r) {
      oe(o, t, r), oe(o, n, r), oe(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Hi(
        /*p*/
        o[41].index || 0
      ) + "") && At(t, e), r[0] & /*progress*/
      128 && s !== (s = Hi(
        /*p*/
        o[41].length
      ) + "") && At(l, s);
    },
    d(o) {
      o && (le(t), le(n), le(l));
    }
  };
}
function Qa(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Ga(i)
  );
  return {
    c() {
      t && t.c(), e = Ni();
    },
    m(n, s) {
      t && t.m(n, s), oe(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Ga(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && le(e), t && t.d(n);
    }
  };
}
function $a(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = qe(
        /*formatted_timer*/
        i[20]
      ), n = qe(t), s = qe("s");
    },
    m(l, o) {
      oe(l, e, o), oe(l, n, o), oe(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && At(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && At(n, t);
    },
    d(l) {
      l && (le(e), le(n), le(s));
    }
  };
}
function Qm(i) {
  let e, t;
  return e = new qm({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Fc(e.$$.fragment);
    },
    m(n, s) {
      Zc(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (Qt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Uc(e, n);
    }
  };
}
function $m(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && er(i)
  );
  return {
    c() {
      e = un("div"), t = un("div"), r && r.c(), n = It(), s = un("div"), l = un("div"), $t(t, "class", "progress-level-inner svelte-16nch4a"), $t(l, "class", "progress-bar svelte-16nch4a"), Tn(l, "width", o), $t(s, "class", "progress-bar-wrap svelte-16nch4a"), $t(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      oe(a, e, c), oi(e, t), r && r.m(t, null), oi(e, n), oi(e, s), oi(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = er(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Tn(l, "width", o);
    },
    i: qo,
    o: qo,
    d(a) {
      a && le(e), r && r.d(), i[31](null);
    }
  };
}
function er(i) {
  let e, t = ol(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = lr(Ka(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Ni();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      oe(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = ol(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ka(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = lr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && le(e), Nc(n, s);
    }
  };
}
function tr(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && e1()
  ), o = (
    /*p*/
    i[41].desc != null && nr(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && ir()
  ), a = (
    /*progress_level*/
    i[14] != null && sr(i)
  );
  return {
    c() {
      l && l.c(), e = It(), o && o.c(), t = It(), r && r.c(), n = It(), a && a.c(), s = Ni();
    },
    m(c, f) {
      l && l.m(c, f), oe(c, e, f), o && o.m(c, f), oe(c, t, f), r && r.m(c, f), oe(c, n, f), a && a.m(c, f), oe(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = nr(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = ir(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = sr(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (le(e), le(t), le(n), le(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function e1(i) {
  let e;
  return {
    c() {
      e = qe(" /");
    },
    m(t, n) {
      oe(t, e, n);
    },
    d(t) {
      t && le(e);
    }
  };
}
function nr(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = qe(e);
    },
    m(n, s) {
      oe(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && At(t, e);
    },
    d(n) {
      n && le(t);
    }
  };
}
function ir(i) {
  let e;
  return {
    c() {
      e = qe("-");
    },
    m(t, n) {
      oe(t, e, n);
    },
    d(t) {
      t && le(e);
    }
  };
}
function sr(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = qe(e), n = qe("%");
    },
    m(s, l) {
      oe(s, t, l), oe(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && At(t, e);
    },
    d(s) {
      s && (le(t), le(n));
    }
  };
}
function lr(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && tr(i)
  );
  return {
    c() {
      t && t.c(), e = Ni();
    },
    m(n, s) {
      t && t.m(n, s), oe(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = tr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && le(e), t && t.d(n);
    }
  };
}
function or(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = Oc(
    l,
    i,
    /*$$scope*/
    i[29],
    Va
  );
  return {
    c() {
      e = un("p"), t = qe(
        /*loading_text*/
        i[9]
      ), n = It(), o && o.c(), $t(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      oe(r, e, a), oi(e, t), oe(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && At(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Jc(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Kc(
          l,
          /*$$scope*/
          r[29],
          a,
          Om
        ) : Vc(
          /*$$scope*/
          r[29]
        ),
        Va
      );
    },
    i(r) {
      s || (Qt(o, r), s = !0);
    },
    o(r) {
      hn(o, r), s = !1;
    },
    d(r) {
      r && (le(e), le(n)), o && o.d(r);
    }
  };
}
function t1(i) {
  let e, t, n, s, l;
  const o = [Nm, Um], r = [];
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
      e = un("div"), n && n.c(), $t(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Ht(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Ht(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Ht(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Ht(
        e,
        "border",
        /*border*/
        i[12]
      ), Tn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Tn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      oe(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let h = t;
      t = a(c), t === h ? ~t && r[t].p(c, f) : (n && (Lo(), hn(r[h], 1, 1, () => {
        r[h] = null;
      }), Ro()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Qt(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && $t(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Ht(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ht(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && Ht(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && Ht(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && Tn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Tn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (Qt(n), l = !0);
    },
    o(c) {
      hn(n), l = !1;
    },
    d(c) {
      c && le(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var n1 = function(i, e, t, n) {
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
let Ys = [], Jl = !1;
function i1(i) {
  return n1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ys.push(e), !Jl) Jl = !0;
      else return;
      yield Im(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < Ys.length; s++) {
          const o = Ys[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Jl = !1, Ys = [];
      });
    }
  });
}
function s1(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = Tm();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: h } = e, { scroll_to_output: d = !1 } = e, { timer: _ = !0 } = e, { show_progress: g = "full" } = e, { message: u = null } = e, { progress: v = null } = e, { variant: p = "default" } = e, { loading_text: y = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: S = !1 } = e, { border: C = !1 } = e, { autoscroll: k } = e, W, x = !1, B = 0, b = 0, z = null, D = null, P = 0, A = null, Y, L = null, Z = !0;
  const q = () => {
    t(0, a = t(27, z = t(19, U = null))), t(25, B = performance.now()), t(26, b = 0), x = !0, F();
  };
  function F() {
    requestAnimationFrame(() => {
      t(26, b = (performance.now() - B) / 1e3), x && F();
    });
  }
  function J() {
    t(26, b = 0), t(0, a = t(27, z = t(19, U = null))), x && (x = !1);
  }
  Am(() => {
    x && J();
  });
  let U = null;
  function j(T) {
    Ua[T ? "unshift" : "push"](() => {
      L = T, t(16, L), t(7, v), t(14, A), t(15, Y);
    });
  }
  const fe = () => {
    o("clear_status");
  };
  function ne(T) {
    Ua[T ? "unshift" : "push"](() => {
      W = T, t(13, W);
    });
  }
  return i.$$set = (T) => {
    "i18n" in T && t(1, r = T.i18n), "eta" in T && t(0, a = T.eta), "queue_position" in T && t(2, c = T.queue_position), "queue_size" in T && t(3, f = T.queue_size), "status" in T && t(4, h = T.status), "scroll_to_output" in T && t(22, d = T.scroll_to_output), "timer" in T && t(5, _ = T.timer), "show_progress" in T && t(6, g = T.show_progress), "message" in T && t(23, u = T.message), "progress" in T && t(7, v = T.progress), "variant" in T && t(8, p = T.variant), "loading_text" in T && t(9, y = T.loading_text), "absolute" in T && t(10, w = T.absolute), "translucent" in T && t(11, S = T.translucent), "border" in T && t(12, C = T.border), "autoscroll" in T && t(24, k = T.autoscroll), "$$scope" in T && t(29, l = T.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = z), a != null && z !== a && (t(28, D = (performance.now() - B) / 1e3 + a), t(19, U = D.toFixed(1)), t(27, z = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, P = D === null || D <= 0 || !b ? null : Math.min(b / D, 1)), i.$$.dirty[0] & /*progress*/
    128 && v != null && t(18, Z = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (v != null ? t(14, A = v.map((T) => {
      if (T.index != null && T.length != null)
        return T.index / T.length;
      if (T.progress != null)
        return T.progress;
    })) : t(14, A = null), A ? (t(15, Y = A[A.length - 1]), L && (Y === 0 ? t(16, L.style.transition = "0", L) : t(16, L.style.transition = "150ms", L))) : t(15, Y = void 0)), i.$$.dirty[0] & /*status*/
    16 && (h === "pending" ? q() : J()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && W && d && (h === "pending" || h === "complete") && i1(W, k), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = b.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    h,
    _,
    g,
    v,
    p,
    y,
    w,
    S,
    C,
    W,
    A,
    Y,
    L,
    P,
    Z,
    U,
    n,
    o,
    d,
    u,
    k,
    B,
    b,
    z,
    D,
    l,
    s,
    j,
    fe,
    ne
  ];
}
class l1 extends Pm {
  constructor(e) {
    super(), Hm(
      this,
      e,
      s1,
      t1,
      jm,
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
const { setContext: aw, getContext: o1 } = window.__gradio__svelte__internal, a1 = "WORKER_PROXY_CONTEXT_KEY";
function Gc() {
  return o1(a1);
}
function r1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Qc(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function $c(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!r1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function c1(i) {
  if (i == null || !$c(i))
    return i;
  const e = Gc();
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
      type: Qc(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: f1,
  assign: al,
  check_outros: ef,
  compute_rest_props: ar,
  create_slot: Jo,
  detach: Sl,
  element: tf,
  empty: nf,
  exclude_internal_props: u1,
  get_all_dirty_from_scope: Go,
  get_slot_changes: Qo,
  get_spread_update: sf,
  group_outros: lf,
  init: h1,
  insert: Ml,
  listen: of,
  prevent_default: d1,
  safe_not_equal: _1,
  set_attributes: rl,
  transition_in: di,
  transition_out: _i,
  update_slot_base: $o
} = window.__gradio__svelte__internal, { createEventDispatcher: m1 } = window.__gradio__svelte__internal;
function g1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Jo(
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
    c = al(c, a[f]);
  return {
    c() {
      e = tf("a"), r && r.c(), rl(e, c);
    },
    m(f, h) {
      Ml(f, e, h), r && r.m(e, null), n = !0, s || (l = of(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, h) {
      r && r.p && (!n || h & /*$$scope*/
      128) && $o(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? Qo(
          o,
          /*$$scope*/
          f[7],
          h,
          null
        ) : Go(
          /*$$scope*/
          f[7]
        ),
        null
      ), rl(e, c = sf(a, [
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
      n || (di(r, f), n = !0);
    },
    o(f) {
      _i(r, f), n = !1;
    },
    d(f) {
      f && Sl(e), r && r.d(f), s = !1, l();
    }
  };
}
function p1(i) {
  let e, t, n, s;
  const l = [v1, b1], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = nf();
    },
    m(a, c) {
      o[e].m(a, c), Ml(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (lf(), _i(o[f], 1, 1, () => {
        o[f] = null;
      }), ef(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), di(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (di(t), s = !0);
    },
    o(a) {
      _i(t), s = !1;
    },
    d(a) {
      a && Sl(n), o[e].d(a);
    }
  };
}
function b1(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Jo(
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
    a = al(a, r[c]);
  return {
    c() {
      e = tf("a"), o && o.c(), rl(e, a);
    },
    m(c, f) {
      Ml(c, e, f), o && o.m(e, null), t = !0, n || (s = of(e, "click", d1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && $o(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? Qo(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Go(
          /*$$scope*/
          c[7]
        ),
        null
      ), rl(e, a = sf(r, [
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
      t || (di(o, c), t = !0);
    },
    o(c) {
      _i(o, c), t = !1;
    },
    d(c) {
      c && Sl(e), o && o.d(c), n = !1, s();
    }
  };
}
function v1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Jo(
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
      128) && $o(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? Qo(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Go(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (di(n, s), e = !0);
    },
    o(s) {
      _i(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function w1(i) {
  let e, t, n, s, l;
  const o = [p1, g1], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && $c(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = nf();
    },
    m(c, f) {
      r[t].m(c, f), Ml(c, s, f), l = !0;
    },
    p(c, [f]) {
      let h = t;
      t = a(c, f), t === h ? r[t].p(c, f) : (lf(), _i(r[h], 1, 1, () => {
        r[h] = null;
      }), ef(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), di(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (di(n), l = !0);
    },
    o(c) {
      _i(n), l = !1;
    },
    d(c) {
      c && Sl(s), r[t].d(c);
    }
  };
}
function k1(i, e, t) {
  const n = ["href", "download"];
  let s = ar(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(g, u, v, p) {
    function y(w) {
      return w instanceof v ? w : new v(function(S) {
        S(w);
      });
    }
    return new (v || (v = Promise))(function(w, S) {
      function C(x) {
        try {
          W(p.next(x));
        } catch (B) {
          S(B);
        }
      }
      function k(x) {
        try {
          W(p.throw(x));
        } catch (B) {
          S(B);
        }
      }
      function W(x) {
        x.done ? w(x.value) : y(x.value).then(C, k);
      }
      W((p = p.apply(g, u || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = m1();
  let h = !1;
  const d = Gc();
  function _() {
    return r(this, void 0, void 0, function* () {
      if (h)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const u = new URL(a, window.location.href).pathname;
      t(2, h = !0), d.httpRequest({
        method: "GET",
        path: u,
        headers: {},
        query_string: ""
      }).then((v) => {
        if (v.status !== 200)
          throw new Error(`Failed to get file ${u} from the Wasm worker.`);
        const p = new Blob(
          [v.body],
          {
            type: Qc(v.headers, "content-type")
          }
        ), y = URL.createObjectURL(p), w = document.createElement("a");
        w.href = y, w.download = c, w.click(), URL.revokeObjectURL(y);
      }).finally(() => {
        t(2, h = !1);
      });
    });
  }
  return i.$$set = (g) => {
    e = al(al({}, e), u1(g)), t(6, s = ar(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, c = g.download), "$$scope" in g && t(7, o = g.$$scope);
  }, [
    a,
    c,
    h,
    f,
    d,
    _,
    s,
    o,
    l
  ];
}
class y1 extends f1 {
  constructor(e) {
    super(), h1(this, e, k1, w1, _1, { href: 0, download: 1 });
  }
}
var C1 = Object.defineProperty, S1 = (i, e, t) => e in i ? C1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, mn = (i, e, t) => (S1(i, typeof e != "symbol" ? e + "" : e, t), t), af = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, $i = (i, e, t) => (af(i, e, "read from private field"), t ? t.call(i) : e.get(i)), M1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, z1 = (i, e, t, n) => (af(i, e, "write to private field"), e.set(i, t), t), Hn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function rf(i, e) {
  return i.map(
    (t) => new W1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class W1 {
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
    mn(this, "path"), mn(this, "url"), mn(this, "orig_name"), mn(this, "size"), mn(this, "blob"), mn(this, "is_stream"), mn(this, "mime_type"), mn(this, "alt_text"), mn(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class rw extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = $i(this, Hn) + t; ; ) {
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
        z1(this, Hn, t);
      },
      flush: (t) => {
        if ($i(this, Hn) === "")
          return;
        const n = e.allowCR && $i(this, Hn).endsWith("\r") ? $i(this, Hn).slice(0, -1) : $i(this, Hn);
        t.enqueue(n);
      }
    }), M1(this, Hn, "");
  }
}
Hn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: x1,
  append: Ct,
  attr: ii,
  detach: cf,
  element: si,
  init: B1,
  insert: ff,
  noop: rr,
  safe_not_equal: D1,
  set_data: cl,
  set_style: Gl,
  space: Po,
  text: ji,
  toggle_class: cr
} = window.__gradio__svelte__internal, { onMount: X1, createEventDispatcher: Y1, onDestroy: E1 } = window.__gradio__svelte__internal;
function fr(i) {
  let e, t, n, s, l = as(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), h;
  return {
    c() {
      e = si("div"), t = si("span"), n = si("div"), s = si("progress"), o = ji(l), a = Po(), c = si("span"), h = ji(f), Gl(s, "visibility", "hidden"), Gl(s, "height", "0"), Gl(s, "width", "0"), s.value = r = as(
        /*file_to_display*/
        i[2]
      ), ii(s, "max", "100"), ii(s, "class", "svelte-cr2edf"), ii(n, "class", "progress-bar svelte-cr2edf"), ii(c, "class", "file-name svelte-cr2edf"), ii(e, "class", "file svelte-cr2edf");
    },
    m(d, _) {
      ff(d, e, _), Ct(e, t), Ct(t, n), Ct(n, s), Ct(s, o), Ct(e, a), Ct(e, c), Ct(c, h);
    },
    p(d, _) {
      _ & /*file_to_display*/
      4 && l !== (l = as(
        /*file_to_display*/
        d[2]
      ) + "") && cl(o, l), _ & /*file_to_display*/
      4 && r !== (r = as(
        /*file_to_display*/
        d[2]
      )) && (s.value = r), _ & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && cl(h, f);
    },
    d(d) {
      d && cf(e);
    }
  };
}
function R1(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, h = (
    /*file_to_display*/
    i[2] && fr(i)
  );
  return {
    c() {
      e = si("div"), t = si("span"), n = ji("Uploading "), l = ji(s), o = Po(), a = ji(r), c = ji("..."), f = Po(), h && h.c(), ii(t, "class", "uploading svelte-cr2edf"), ii(e, "class", "wrap svelte-cr2edf"), cr(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, _) {
      ff(d, e, _), Ct(e, t), Ct(t, n), Ct(t, l), Ct(t, o), Ct(t, a), Ct(t, c), Ct(e, f), h && h.m(e, null);
    },
    p(d, [_]) {
      _ & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      d[0].length + "") && cl(l, s), _ & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && cl(a, r), /*file_to_display*/
      d[2] ? h ? h.p(d, _) : (h = fr(d), h.c(), h.m(e, null)) : h && (h.d(1), h = null), _ & /*progress*/
      2 && cr(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: rr,
    o: rr,
    d(d) {
      d && cf(e), h && h.d();
    }
  };
}
function as(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function L1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += as(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function q1(i, e, t) {
  var n = this && this.__awaiter || function(u, v, p, y) {
    function w(S) {
      return S instanceof p ? S : new p(function(C) {
        C(S);
      });
    }
    return new (p || (p = Promise))(function(S, C) {
      function k(B) {
        try {
          x(y.next(B));
        } catch (b) {
          C(b);
        }
      }
      function W(B) {
        try {
          x(y.throw(B));
        } catch (b) {
          C(b);
        }
      }
      function x(B) {
        B.done ? S(B.value) : w(B.value).then(k, W);
      }
      x((y = y.apply(u, v || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, h, d = o.map((u) => Object.assign(Object.assign({}, u), { progress: 0 }));
  const _ = Y1();
  function g(u, v) {
    t(0, d = d.map((p) => (p.orig_name === u && (p.progress += v), p)));
  }
  return X1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(u) {
      return n(this, void 0, void 0, function* () {
        const v = JSON.parse(u.data);
        c || t(1, c = !0), v.msg === "done" ? (a == null || a.close(), _("done")) : (t(7, f = v), g(v.orig_name, v.chunk_size));
      });
    };
  })), E1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (u) => {
    "upload_id" in u && t(3, s = u.upload_id), "root" in u && t(4, l = u.root), "files" in u && t(5, o = u.files), "stream_handler" in u && t(6, r = u.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && L1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, h = f || d[0]);
  }, [
    d,
    c,
    h,
    s,
    l,
    o,
    r,
    f
  ];
}
class P1 extends x1 {
  constructor(e) {
    super(), B1(this, e, q1, R1, D1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: H1,
  append: ur,
  attr: ut,
  binding_callbacks: j1,
  bubble: Nn,
  check_outros: uf,
  create_component: I1,
  create_slot: hf,
  destroy_component: A1,
  detach: zl,
  element: Ho,
  empty: df,
  get_all_dirty_from_scope: _f,
  get_slot_changes: mf,
  group_outros: gf,
  init: T1,
  insert: Wl,
  listen: Xt,
  mount_component: F1,
  prevent_default: Vn,
  run_all: O1,
  safe_not_equal: U1,
  set_style: pf,
  space: N1,
  stop_propagation: Kn,
  toggle_class: nt,
  transition_in: Fn,
  transition_out: mi,
  update_slot_base: bf
} = window.__gradio__svelte__internal, { createEventDispatcher: V1, tick: K1 } = window.__gradio__svelte__internal;
function Z1(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const d = (
    /*#slots*/
    i[26].default
  ), _ = hf(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ho("button"), _ && _.c(), t = N1(), n = Ho("input"), ut(n, "aria-label", "file upload"), ut(n, "data-testid", "file-upload"), ut(n, "type", "file"), ut(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, ut(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), ut(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ut(n, "class", "svelte-1s26xmt"), ut(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ut(e, "class", "svelte-1s26xmt"), nt(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), nt(
        e,
        "center",
        /*center*/
        i[4]
      ), nt(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), nt(
        e,
        "flex",
        /*flex*/
        i[5]
      ), nt(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), pf(e, "height", "100%");
    },
    m(g, u) {
      Wl(g, e, u), _ && _.m(e, null), ur(e, t), ur(e, n), i[34](n), c = !0, f || (h = [
        Xt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Xt(e, "drag", Kn(Vn(
          /*drag_handler*/
          i[27]
        ))),
        Xt(e, "dragstart", Kn(Vn(
          /*dragstart_handler*/
          i[28]
        ))),
        Xt(e, "dragend", Kn(Vn(
          /*dragend_handler*/
          i[29]
        ))),
        Xt(e, "dragover", Kn(Vn(
          /*dragover_handler*/
          i[30]
        ))),
        Xt(e, "dragenter", Kn(Vn(
          /*dragenter_handler*/
          i[31]
        ))),
        Xt(e, "dragleave", Kn(Vn(
          /*dragleave_handler*/
          i[32]
        ))),
        Xt(e, "drop", Kn(Vn(
          /*drop_handler*/
          i[33]
        ))),
        Xt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Xt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Xt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Xt(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(g, u) {
      _ && _.p && (!c || u[0] & /*$$scope*/
      33554432) && bf(
        _,
        d,
        g,
        /*$$scope*/
        g[25],
        c ? mf(
          d,
          /*$$scope*/
          g[25],
          u,
          null
        ) : _f(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!c || u[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      g[16] || void 0)) && ut(n, "accept", s), (!c || u[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = l), (!c || u[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "directory" || void 0)) && ut(n, "webkitdirectory", o), (!c || u[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && ut(n, "mozdirectory", r), (!c || u[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && ut(e, "tabindex", a), (!c || u[0] & /*hidden*/
      512) && nt(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!c || u[0] & /*center*/
      16) && nt(
        e,
        "center",
        /*center*/
        g[4]
      ), (!c || u[0] & /*boundedheight*/
      8) && nt(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!c || u[0] & /*flex*/
      32) && nt(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!c || u[0] & /*disable_click*/
      128) && nt(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      c || (Fn(_, g), c = !0);
    },
    o(g) {
      mi(_, g), c = !1;
    },
    d(g) {
      g && zl(e), _ && _.d(g), i[34](null), f = !1, O1(h);
    }
  };
}
function J1(i) {
  let e, t, n = !/*hidden*/
  i[9] && hr(i);
  return {
    c() {
      n && n.c(), e = df();
    },
    m(s, l) {
      n && n.m(s, l), Wl(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (gf(), mi(n, 1, 1, () => {
        n = null;
      }), uf()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && Fn(n, 1)) : (n = hr(s), n.c(), Fn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (Fn(n), t = !0);
    },
    o(s) {
      mi(n), t = !1;
    },
    d(s) {
      s && zl(e), n && n.d(s);
    }
  };
}
function G1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = hf(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ho("button"), r && r.c(), ut(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ut(e, "class", "svelte-1s26xmt"), nt(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), nt(
        e,
        "center",
        /*center*/
        i[4]
      ), nt(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), nt(
        e,
        "flex",
        /*flex*/
        i[5]
      ), pf(e, "height", "100%");
    },
    m(a, c) {
      Wl(a, e, c), r && r.m(e, null), n = !0, s || (l = Xt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && bf(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? mf(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : _f(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ut(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && nt(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && nt(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && nt(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && nt(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Fn(r, a), n = !0);
    },
    o(a) {
      mi(r, a), n = !1;
    },
    d(a) {
      a && zl(e), r && r.d(a), s = !1, l();
    }
  };
}
function hr(i) {
  let e, t;
  return e = new P1({
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
      I1(e.$$.fragment);
    },
    m(n, s) {
      F1(e, n, s), t = !0;
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
      t || (Fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      mi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A1(e, n);
    }
  };
}
function Q1(i) {
  let e, t, n, s;
  const l = [G1, J1, Z1], o = [];
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
      t.c(), n = df();
    },
    m(a, c) {
      o[e].m(a, c), Wl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (gf(), mi(o[f], 1, 1, () => {
        o[f] = null;
      }), uf(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Fn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Fn(t), s = !0);
    },
    o(a) {
      mi(t), s = !1;
    },
    d(a) {
      a && zl(n), o[e].d(a);
    }
  };
}
function $1(i, e, t) {
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
function e0(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(R, O, re, I) {
    function ye(X) {
      return X instanceof re ? X : new re(function(de) {
        de(X);
      });
    }
    return new (re || (re = Promise))(function(X, de) {
      function _e(pe) {
        try {
          We(I.next(pe));
        } catch (ie) {
          de(ie);
        }
      }
      function ke(pe) {
        try {
          We(I.throw(pe));
        } catch (ie) {
          de(ie);
        }
      }
      function We(pe) {
        pe.done ? X(pe.value) : ye(pe.value).then(_e, ke);
      }
      We((I = I.apply(R, O || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: h = "single" } = e, { disable_click: d = !1 } = e, { root: _ } = e, { hidden: g = !1 } = e, { format: u = "file" } = e, { uploading: v = !1 } = e, { hidden_upload: p = null } = e, { show_progress: y = !0 } = e, { max_file_size: w = null } = e, { upload: S } = e, { stream_handler: C } = e, k, W, x;
  const B = V1(), b = ["image", "video", "audio", "text", "file"], z = (R) => R.startsWith(".") || R.endsWith("/*") ? R : b.includes(R) ? R + "/*" : "." + R;
  function D() {
    t(20, r = !r);
  }
  function P() {
    navigator.clipboard.read().then((R) => l(this, void 0, void 0, function* () {
      for (let O = 0; O < R.length; O++) {
        const re = R[O].types.find((I) => I.startsWith("image/"));
        if (re) {
          R[O].getType(re).then((I) => l(this, void 0, void 0, function* () {
            const ye = new File([I], `clipboard.${re.replace("image/", "")}`);
            yield L([ye]);
          }));
          break;
        }
      }
    }));
  }
  function A() {
    d || p && (t(2, p.value = "", p), p.click());
  }
  function Y(R) {
    return l(this, void 0, void 0, function* () {
      yield K1(), t(14, k = Math.random().toString(36).substring(2, 15)), t(1, v = !0);
      try {
        const O = yield S(R, _, k, w ?? 1 / 0);
        return B("load", h === "single" ? O == null ? void 0 : O[0] : O), t(1, v = !1), O || [];
      } catch (O) {
        return B("error", O.message), t(1, v = !1), [];
      }
    });
  }
  function L(R) {
    return l(this, void 0, void 0, function* () {
      if (!R.length)
        return;
      let O = R.map((re) => new File([re], re instanceof File ? re.name : "file", { type: re.type }));
      return t(15, W = yield rf(O)), yield Y(W);
    });
  }
  function Z(R) {
    return l(this, void 0, void 0, function* () {
      const O = R.target;
      if (O.files)
        if (u != "blob")
          yield L(Array.from(O.files));
        else {
          if (h === "single") {
            B("load", O.files[0]);
            return;
          }
          B("load", O.files);
        }
    });
  }
  function q(R) {
    return l(this, void 0, void 0, function* () {
      var O;
      if (t(20, r = !1), !(!((O = R.dataTransfer) === null || O === void 0) && O.files)) return;
      const re = Array.from(R.dataTransfer.files).filter((I) => {
        const ye = "." + I.name.split(".").pop();
        return ye && $1(x, ye, I.type) || (ye && Array.isArray(o) ? o.includes(ye) : ye === o) ? !0 : (B("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield L(re);
    });
  }
  function F(R) {
    Nn.call(this, i, R);
  }
  function J(R) {
    Nn.call(this, i, R);
  }
  function U(R) {
    Nn.call(this, i, R);
  }
  function j(R) {
    Nn.call(this, i, R);
  }
  function fe(R) {
    Nn.call(this, i, R);
  }
  function ne(R) {
    Nn.call(this, i, R);
  }
  function T(R) {
    Nn.call(this, i, R);
  }
  function Pe(R) {
    j1[R ? "unshift" : "push"](() => {
      p = R, t(2, p);
    });
  }
  return i.$$set = (R) => {
    "filetype" in R && t(0, o = R.filetype), "dragging" in R && t(20, r = R.dragging), "boundedheight" in R && t(3, a = R.boundedheight), "center" in R && t(4, c = R.center), "flex" in R && t(5, f = R.flex), "file_count" in R && t(6, h = R.file_count), "disable_click" in R && t(7, d = R.disable_click), "root" in R && t(8, _ = R.root), "hidden" in R && t(9, g = R.hidden), "format" in R && t(21, u = R.format), "uploading" in R && t(1, v = R.uploading), "hidden_upload" in R && t(2, p = R.hidden_upload), "show_progress" in R && t(10, y = R.show_progress), "max_file_size" in R && t(22, w = R.max_file_size), "upload" in R && t(23, S = R.upload), "stream_handler" in R && t(11, C = R.stream_handler), "$$scope" in R && t(25, s = R.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, x = null) : typeof o == "string" ? t(16, x = z(o)) : (t(0, o = o.map(z)), t(16, x = o.join(", "))));
  }, [
    o,
    v,
    p,
    a,
    c,
    f,
    h,
    d,
    _,
    g,
    y,
    C,
    P,
    A,
    k,
    W,
    x,
    D,
    Z,
    q,
    r,
    u,
    w,
    S,
    L,
    s,
    n,
    F,
    J,
    U,
    j,
    fe,
    ne,
    T,
    Pe
  ];
}
class t0 extends H1 {
  constructor(e) {
    super(), T1(
      this,
      e,
      e0,
      Q1,
      U1,
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
  SvelteComponent: n0,
  append: Es,
  attr: Ql,
  create_component: i0,
  destroy_component: s0,
  detach: l0,
  element: $l,
  init: o0,
  insert: a0,
  listen: r0,
  mount_component: c0,
  noop: f0,
  safe_not_equal: u0,
  set_style: h0,
  space: d0,
  text: _0,
  transition_in: m0,
  transition_out: g0
} = window.__gradio__svelte__internal, { createEventDispatcher: p0 } = window.__gradio__svelte__internal;
function b0(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new Lc({}), {
    c() {
      e = $l("button"), t = $l("div"), n = $l("span"), i0(s.$$.fragment), l = d0(), r = _0(o), Ql(n, "class", "icon-wrap svelte-fjcd9c"), Ql(t, "class", "wrap svelte-fjcd9c"), Ql(e, "class", "svelte-fjcd9c"), h0(e, "height", "100%");
    },
    m(h, d) {
      a0(h, e, d), Es(e, t), Es(t, n), c0(s, n, null), Es(t, l), Es(t, r), a = !0, c || (f = r0(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: f0,
    i(h) {
      a || (m0(s.$$.fragment, h), a = !0);
    },
    o(h) {
      g0(s.$$.fragment, h), a = !1;
    },
    d(h) {
      h && l0(e), s0(s), c = !1, f();
    }
  };
}
function v0(i) {
  const e = p0();
  return [e, () => e("click")];
}
class w0 extends n0 {
  constructor(e) {
    super(), o0(this, e, v0, b0, u0, {});
  }
}
function k0() {
  return navigator.mediaDevices.enumerateDevices();
}
function y0(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function dr(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (y0(l, e), l));
}
function C0(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: S0,
  action_destroyer: M0,
  add_render_callback: z0,
  append: kn,
  attr: Ue,
  binding_callbacks: W0,
  check_outros: fs,
  create_component: Vi,
  create_in_transition: x0,
  destroy_component: Ki,
  destroy_each: B0,
  detach: St,
  element: qt,
  empty: ea,
  ensure_array_like: _r,
  group_outros: us,
  init: D0,
  insert: Mt,
  listen: fl,
  mount_component: Zi,
  noop: ta,
  run_all: X0,
  safe_not_equal: Y0,
  set_data: vf,
  set_input_value: jo,
  space: ms,
  stop_propagation: E0,
  text: wf,
  toggle_class: Rs,
  transition_in: it,
  transition_out: ht
} = window.__gradio__svelte__internal, { createEventDispatcher: R0, onMount: L0 } = window.__gradio__svelte__internal;
function mr(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function q0(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const d = [j0, H0], _ = [];
  function g(p, y) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(i), s = _[n] = d[n](i);
  let u = !/*recording*/
  i[8] && gr(i), v = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && pr(i)
  );
  return {
    c() {
      e = qt("div"), t = qt("button"), s.c(), o = ms(), u && u.c(), r = ms(), v && v.c(), a = ea(), Ue(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), Ue(t, "class", "svelte-8hqvb6"), Ue(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, y) {
      Mt(p, e, y), kn(e, t), _[n].m(t, null), kn(e, o), u && u.m(e, null), Mt(p, r, y), v && v.m(p, y), Mt(p, a, y), c = !0, f || (h = fl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(p, y) {
      let w = n;
      n = g(p), n === w ? _[n].p(p, y) : (us(), ht(_[w], 1, 1, () => {
        _[w] = null;
      }), fs(), s = _[n], s ? s.p(p, y) : (s = _[n] = d[n](p), s.c()), it(s, 1), s.m(t, null)), (!c || y[0] & /*mode*/
      2 && l !== (l = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && Ue(t, "aria-label", l), /*recording*/
      p[8] ? u && (us(), ht(u, 1, 1, () => {
        u = null;
      }), fs()) : u ? (u.p(p, y), y[0] & /*recording*/
      256 && it(u, 1)) : (u = gr(p), u.c(), it(u, 1), u.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? v ? (v.p(p, y), y[0] & /*options_open, selected_device*/
      1152 && it(v, 1)) : (v = pr(p), v.c(), it(v, 1), v.m(a.parentNode, a)) : v && (us(), ht(v, 1, 1, () => {
        v = null;
      }), fs());
    },
    i(p) {
      c || (it(s), it(u), it(v), c = !0);
    },
    o(p) {
      ht(s), ht(u), ht(v), c = !1;
    },
    d(p) {
      p && (St(e), St(r), St(a)), _[n].d(), u && u.d(), v && v.d(p), f = !1, h();
    }
  };
}
function P0(i) {
  let e, t, n, s;
  return t = new w0({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = qt("div"), Vi(t.$$.fragment), Ue(e, "title", "grant webcam access");
    },
    m(l, o) {
      Mt(l, e, o), Zi(t, e, null), s = !0;
    },
    p: ta,
    i(l) {
      s || (it(t.$$.fragment, l), l && (n || z0(() => {
        n = x0(e, Mm, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      ht(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && St(e), Ki(t);
    }
  };
}
function H0(i) {
  let e, t, n;
  return t = new wd({}), {
    c() {
      e = qt("div"), Vi(t.$$.fragment), Ue(e, "class", "icon svelte-8hqvb6"), Ue(e, "title", "capture photo");
    },
    m(s, l) {
      Mt(s, e, l), Zi(t, e, null), n = !0;
    },
    p: ta,
    i(s) {
      n || (it(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ht(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && St(e), Ki(t);
    }
  };
}
function j0(i) {
  let e, t, n, s;
  const l = [A0, I0], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = ea();
    },
    m(a, c) {
      o[e].m(a, c), Mt(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (us(), ht(o[f], 1, 1, () => {
        o[f] = null;
      }), fs(), t = o[e], t || (t = o[e] = l[e](a), t.c()), it(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (it(t), s = !0);
    },
    o(a) {
      ht(t), s = !1;
    },
    d(a) {
      a && St(n), o[e].d(a);
    }
  };
}
function I0(i) {
  let e, t, n;
  return t = new xd({}), {
    c() {
      e = qt("div"), Vi(t.$$.fragment), Ue(e, "class", "icon red svelte-8hqvb6"), Ue(e, "title", "start recording");
    },
    m(s, l) {
      Mt(s, e, l), Zi(t, e, null), n = !0;
    },
    i(s) {
      n || (it(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ht(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && St(e), Ki(t);
    }
  };
}
function A0(i) {
  let e, t, n;
  return t = new X_({}), {
    c() {
      e = qt("div"), Vi(t.$$.fragment), Ue(e, "class", "icon red svelte-8hqvb6"), Ue(e, "title", "stop recording");
    },
    m(s, l) {
      Mt(s, e, l), Zi(t, e, null), n = !0;
    },
    i(s) {
      n || (it(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ht(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && St(e), Ki(t);
    }
  };
}
function gr(i) {
  let e, t, n, s, l;
  return t = new Zo({}), {
    c() {
      e = qt("button"), Vi(t.$$.fragment), Ue(e, "class", "icon svelte-8hqvb6"), Ue(e, "aria-label", "select input source");
    },
    m(o, r) {
      Mt(o, e, r), Zi(t, e, null), n = !0, s || (l = fl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: ta,
    i(o) {
      n || (it(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ht(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && St(e), Ki(t), s = !1, l();
    }
  };
}
function pr(i) {
  let e, t, n, s, l, o, r;
  n = new Zo({});
  function a(h, d) {
    return (
      /*available_video_devices*/
      h[6].length === 0 ? F0 : T0
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = qt("select"), t = qt("button"), Vi(n.$$.fragment), s = ms(), f.c(), Ue(t, "class", "inset-icon svelte-8hqvb6"), Ue(e, "class", "select-wrap svelte-8hqvb6"), Ue(e, "aria-label", "select source");
    },
    m(h, d) {
      Mt(h, e, d), kn(e, t), Zi(n, t, null), kn(t, s), f.m(e, null), l = !0, o || (r = [
        fl(t, "click", E0(
          /*click_handler_2*/
          i[22]
        )),
        M0(na.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        fl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(h, d) {
      c === (c = a(h)) && f ? f.p(h, d) : (f.d(1), f = c(h), f && (f.c(), f.m(e, null)));
    },
    i(h) {
      l || (it(n.$$.fragment, h), l = !0);
    },
    o(h) {
      ht(n.$$.fragment, h), l = !1;
    },
    d(h) {
      h && St(e), Ki(n), f.d(), o = !1, X0(r);
    }
  };
}
function T0(i) {
  let e, t = _r(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = br(mr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ea();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      Mt(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = _r(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = mr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = br(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && St(e), B0(n, s);
    }
  };
}
function F0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = qt("option"), n = wf(t), e.__value = "", jo(e, e.__value), Ue(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      Mt(s, e, l), kn(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && vf(n, t);
    },
    d(s) {
      s && St(e);
    }
  };
}
function br(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = qt("option"), n = wf(t), s = ms(), e.__value = l = /*device*/
      i[32].deviceId, jo(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, Ue(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Mt(r, e, a), kn(e, n), kn(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && vf(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, jo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && St(e);
    }
  };
}
function O0(i) {
  let e, t, n, s, l, o;
  const r = [P0, q0], a = [];
  function c(f, h) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = qt("div"), t = qt("video"), n = ms(), l.c(), Ue(t, "class", "svelte-8hqvb6"), Rs(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Rs(t, "hide", !/*webcam_accessed*/
      i[9]), Ue(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, h) {
      Mt(f, e, h), kn(e, t), i[19](t), kn(e, n), a[s].m(e, null), o = !0;
    },
    p(f, h) {
      (!o || h[0] & /*mirror_webcam*/
      4) && Rs(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || h[0] & /*webcam_accessed*/
      512) && Rs(t, "hide", !/*webcam_accessed*/
      f[9]);
      let d = s;
      s = c(f), s === d ? a[s].p(f, h) : (us(), ht(a[d], 1, 1, () => {
        a[d] = null;
      }), fs(), l = a[s], l ? l.p(f, h) : (l = a[s] = r[s](f), l.c()), it(l, 1), l.m(e, null));
    },
    i(f) {
      o || (it(l), o = !0);
    },
    o(f) {
      ht(l), o = !1;
    },
    d(f) {
      f && St(e), i[19](null), a[s].d();
    }
  };
}
function na(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function U0(i, e, t) {
  var n = this && this.__awaiter || function(q, F, J, U) {
    function j(fe) {
      return fe instanceof J ? fe : new J(function(ne) {
        ne(fe);
      });
    }
    return new (J || (J = Promise))(function(fe, ne) {
      function T(O) {
        try {
          R(U.next(O));
        } catch (re) {
          ne(re);
        }
      }
      function Pe(O) {
        try {
          R(U.throw(O));
        } catch (re) {
          ne(re);
        }
      }
      function R(O) {
        O.done ? fe(O.value) : j(O.value).then(T, Pe);
      }
      R((U = U.apply(q, F || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: h = "image" } = e, { mirror_webcam: d } = e, { include_audio: _ } = e, { i18n: g } = e, { upload: u } = e;
  const v = R0();
  L0(() => r = document.createElement("canvas"));
  const p = (q) => n(void 0, void 0, void 0, function* () {
    const J = q.target.value;
    yield dr(_, s, J).then((U) => n(void 0, void 0, void 0, function* () {
      k = U, t(7, o = l.find((j) => j.deviceId === J) || null), t(10, D = !1);
    }));
  });
  function y() {
    return n(this, void 0, void 0, function* () {
      try {
        dr(_, s).then((q) => n(this, void 0, void 0, function* () {
          t(9, b = !0), t(6, l = yield k0()), k = q;
        })).then(() => C0(l)).then((q) => {
          t(6, l = q);
          const F = k.getTracks().map((J) => {
            var U;
            return (U = J.getSettings()) === null || U === void 0 ? void 0 : U.deviceId;
          })[0];
          t(7, o = F && q.find((J) => J.deviceId === F) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && v("error", g("image.no_webcam_support"));
      } catch (q) {
        if (q instanceof DOMException && q.name == "NotAllowedError")
          v("error", g("image.allow_webcam_access"));
        else
          throw q;
      }
    });
  }
  function w() {
    var q = r.getContext("2d");
    (!a || a && S) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, q.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (q.scale(-1, 1), q.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (F) => {
        v(a ? "stream" : "capture", F);
      },
      "image/png",
      0.8
    ));
  }
  let S = !1, C = [], k, W, x;
  function B() {
    if (S) {
      x.stop();
      let q = new Blob(C, { type: W }), F = new FileReader();
      F.onload = function(J) {
        return n(this, void 0, void 0, function* () {
          var U;
          if (J.target) {
            let j = new File([q], "sample." + W.substring(6));
            const fe = yield rf([j]);
            let ne = ((U = yield u(fe, f)) === null || U === void 0 ? void 0 : U.filter(Boolean))[0];
            v("capture", ne), v("stop_recording");
          }
        });
      }, F.readAsDataURL(q);
    } else {
      v("start_recording"), C = [];
      let q = ["video/webm", "video/mp4"];
      for (let F of q)
        if (MediaRecorder.isTypeSupported(F)) {
          W = F;
          break;
        }
      if (W === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      x = new MediaRecorder(k, { mimeType: W }), x.addEventListener("dataavailable", function(F) {
        C.push(F.data);
      }), x.start(200);
    }
    t(8, S = !S);
  }
  let b = !1;
  function z() {
    h === "image" && a && t(8, S = !S), h === "image" ? w() : B(), !S && k && (k.getTracks().forEach((q) => q.stop()), t(5, s.srcObject = null, s), t(9, b = !1));
  }
  a && h === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let D = !1;
  function P(q) {
    q.preventDefault(), q.stopPropagation(), t(10, D = !1);
  }
  function A(q) {
    W0[q ? "unshift" : "push"](() => {
      s = q, t(5, s);
    });
  }
  const Y = async () => y(), L = () => t(10, D = !0), Z = () => t(10, D = !1);
  return i.$$set = (q) => {
    "streaming" in q && t(0, a = q.streaming), "pending" in q && t(15, c = q.pending), "root" in q && t(16, f = q.root), "mode" in q && t(1, h = q.mode), "mirror_webcam" in q && t(2, d = q.mirror_webcam), "include_audio" in q && t(17, _ = q.include_audio), "i18n" in q && t(3, g = q.i18n), "upload" in q && t(18, u = q.upload);
  }, [
    a,
    h,
    d,
    g,
    na,
    s,
    l,
    o,
    S,
    b,
    D,
    p,
    y,
    z,
    P,
    c,
    f,
    _,
    u,
    A,
    Y,
    L,
    Z
  ];
}
class N0 extends S0 {
  constructor(e) {
    super(), D0(
      this,
      e,
      U0,
      O0,
      Y0,
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
    return na;
  }
}
const {
  SvelteComponent: V0,
  append: Yn,
  attr: $,
  detach: K0,
  init: Z0,
  insert: J0,
  noop: eo,
  safe_not_equal: G0,
  set_style: En,
  svg_element: gn
} = window.__gradio__svelte__internal;
function Q0(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = gn("svg"), t = gn("rect"), n = gn("rect"), s = gn("rect"), l = gn("rect"), o = gn("line"), r = gn("line"), a = gn("line"), c = gn("line"), $(t, "x", "2"), $(t, "y", "2"), $(t, "width", "5"), $(t, "height", "5"), $(t, "rx", "1"), $(t, "ry", "1"), $(t, "stroke-width", "2"), $(t, "fill", "none"), $(n, "x", "17"), $(n, "y", "2"), $(n, "width", "5"), $(n, "height", "5"), $(n, "rx", "1"), $(n, "ry", "1"), $(n, "stroke-width", "2"), $(n, "fill", "none"), $(s, "x", "2"), $(s, "y", "17"), $(s, "width", "5"), $(s, "height", "5"), $(s, "rx", "1"), $(s, "ry", "1"), $(s, "stroke-width", "2"), $(s, "fill", "none"), $(l, "x", "17"), $(l, "y", "17"), $(l, "width", "5"), $(l, "height", "5"), $(l, "rx", "1"), $(l, "ry", "1"), $(l, "stroke-width", "2"), $(l, "fill", "none"), $(o, "x1", "7.5"), $(o, "y1", "4.5"), $(o, "x2", "16"), $(o, "y2", "4.5"), En(o, "stroke-width", "2px"), $(r, "x1", "7.5"), $(r, "y1", "19.5"), $(r, "x2", "16"), $(r, "y2", "19.5"), En(r, "stroke-width", "2px"), $(a, "x1", "4.5"), $(a, "y1", "8"), $(a, "x2", "4.5"), $(a, "y2", "16"), En(a, "stroke-width", "2px"), $(c, "x1", "19.5"), $(c, "y1", "8"), $(c, "x2", "19.5"), $(c, "y2", "16"), En(c, "stroke-width", "2px"), $(e, "width", "100%"), $(e, "height", "100%"), $(e, "viewBox", "0 0 24 24"), $(e, "version", "1.1"), $(e, "xmlns", "http://www.w3.org/2000/svg"), $(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $(e, "xml:space", "preserve"), $(e, "stroke", "currentColor"), En(e, "fill-rule", "evenodd"), En(e, "clip-rule", "evenodd"), En(e, "stroke-linecap", "round"), En(e, "stroke-linejoin", "round");
    },
    m(f, h) {
      J0(f, e, h), Yn(e, t), Yn(e, n), Yn(e, s), Yn(e, l), Yn(e, o), Yn(e, r), Yn(e, a), Yn(e, c);
    },
    p: eo,
    i: eo,
    o: eo,
    d(f) {
      f && K0(e);
    }
  };
}
class $0 extends V0 {
  constructor(e) {
    super(), Z0(this, e, null, Q0, G0, {});
  }
}
const {
  SvelteComponent: eg,
  append: to,
  attr: Ye,
  detach: ul,
  init: tg,
  insert: hl,
  noop: vr,
  safe_not_equal: ng,
  svg_element: ai
} = window.__gradio__svelte__internal;
function ig(i) {
  let e;
  return {
    c() {
      e = ai("circle"), Ye(e, "cx", "12"), Ye(e, "cy", "7.5"), Ye(e, "r", "2"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "1"), Ye(e, "opacity", "0.3");
    },
    m(t, n) {
      hl(t, e, n);
    },
    d(t) {
      t && ul(e);
    }
  };
}
function sg(i) {
  let e, t;
  return {
    c() {
      e = ai("circle"), t = ai("circle"), Ye(e, "cx", "12"), Ye(e, "cy", "7.5"), Ye(e, "r", "2.5"), Ye(e, "fill", "currentColor"), Ye(e, "opacity", "0.9"), Ye(t, "cx", "12"), Ye(t, "cy", "7.5"), Ye(t, "r", "1.5"), Ye(t, "fill", "white"), Ye(t, "opacity", "0.6");
    },
    m(n, s) {
      hl(n, e, s), hl(n, t, s);
    },
    d(n) {
      n && (ul(e), ul(t));
    }
  };
}
function lg(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? sg : ig
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = ai("svg"), t = ai("path"), n = ai("path"), s = ai("path"), r.c(), Ye(t, "d", "M9 21h6"), Ye(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Ye(s, "d", "M9 17h6"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "2"), Ye(e, "stroke-linecap", "round"), Ye(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      hl(a, e, c), to(e, t), to(e, n), to(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: vr,
    o: vr,
    d(a) {
      a && ul(e), r.d();
    }
  };
}
function og(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class ag extends eg {
  constructor(e) {
    super(), tg(this, e, og, lg, ng, { selected: 1 });
  }
}
const {
  SvelteComponent: rg,
  append: cg,
  attr: ln,
  detach: fg,
  init: ug,
  insert: hg,
  noop: no,
  safe_not_equal: dg,
  svg_element: wr
} = window.__gradio__svelte__internal;
function _g(i) {
  let e, t;
  return {
    c() {
      e = wr("svg"), t = wr("circle"), ln(t, "cx", "12"), ln(t, "cy", "12"), ln(t, "r", "10"), ln(e, "xmlns", "http://www.w3.org/2000/svg"), ln(e, "viewBox", "0 0 24 24"), ln(e, "fill", "none"), ln(e, "stroke", "currentColor"), ln(e, "stroke-width", "2"), ln(e, "stroke-linecap", "round"), ln(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      hg(n, e, s), cg(e, t);
    },
    p: no,
    i: no,
    o: no,
    d(n) {
      n && fg(e);
    }
  };
}
let mg = class extends rg {
  constructor(e) {
    super(), ug(this, e, null, _g, dg, {});
  }
};
const {
  SvelteComponent: gg,
  append: es,
  attr: $e,
  detach: pg,
  init: bg,
  insert: vg,
  noop: io,
  safe_not_equal: wg,
  svg_element: Wi
} = window.__gradio__svelte__internal;
function kg(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Wi("svg"), t = Wi("path"), n = Wi("path"), s = Wi("path"), l = Wi("line"), o = Wi("line"), $e(t, "d", "M3 6h18"), $e(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), $e(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), $e(l, "x1", "10"), $e(l, "y1", "11"), $e(l, "x2", "10"), $e(l, "y2", "17"), $e(o, "x1", "14"), $e(o, "y1", "11"), $e(o, "x2", "14"), $e(o, "y2", "17"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "viewBox", "0 0 24 24"), $e(e, "fill", "none"), $e(e, "stroke", "currentColor"), $e(e, "stroke-width", "2"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      vg(r, e, a), es(e, t), es(e, n), es(e, s), es(e, l), es(e, o);
    },
    p: io,
    i: io,
    o: io,
    d(r) {
      r && pg(e);
    }
  };
}
class yg extends gg {
  constructor(e) {
    super(), bg(this, e, null, kg, wg, {});
  }
}
const {
  SvelteComponent: Cg,
  append: Sg,
  attr: Kt,
  detach: Mg,
  init: zg,
  insert: Wg,
  noop: so,
  safe_not_equal: xg,
  set_style: Ls,
  svg_element: kr
} = window.__gradio__svelte__internal;
function Bg(i) {
  let e, t;
  return {
    c() {
      e = kr("svg"), t = kr("path"), Kt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Kt(t, "fill", "none"), Kt(t, "stroke-width", "2"), Kt(e, "width", "100%"), Kt(e, "height", "100%"), Kt(e, "viewBox", "0 0 24 24"), Kt(e, "version", "1.1"), Kt(e, "xmlns", "http://www.w3.org/2000/svg"), Kt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Kt(e, "xml:space", "preserve"), Kt(e, "stroke", "currentColor"), Ls(e, "fill-rule", "evenodd"), Ls(e, "clip-rule", "evenodd"), Ls(e, "stroke-linecap", "round"), Ls(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Wg(n, e, s), Sg(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && Mg(e);
    }
  };
}
class Dg extends Cg {
  constructor(e) {
    super(), zg(this, e, null, Bg, xg, {});
  }
}
const {
  SvelteComponent: Xg,
  append: Yg,
  attr: Zt,
  detach: Eg,
  init: Rg,
  insert: Lg,
  noop: lo,
  safe_not_equal: qg,
  set_style: qs,
  svg_element: yr
} = window.__gradio__svelte__internal;
function Pg(i) {
  let e, t;
  return {
    c() {
      e = yr("svg"), t = yr("path"), Zt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Zt(t, "fill", "none"), Zt(t, "stroke-width", "2"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "version", "1.1"), Zt(e, "xmlns", "http://www.w3.org/2000/svg"), Zt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Zt(e, "xml:space", "preserve"), Zt(e, "stroke", "currentColor"), qs(e, "fill-rule", "evenodd"), qs(e, "clip-rule", "evenodd"), qs(e, "stroke-linecap", "round"), qs(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Lg(n, e, s), Yg(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && Eg(e);
    }
  };
}
class Hg extends Xg {
  constructor(e) {
    super(), Rg(this, e, null, Pg, qg, {});
  }
}
const {
  SvelteComponent: jg,
  append: Cr,
  attr: pn,
  detach: Ig,
  init: Ag,
  insert: Tg,
  noop: oo,
  safe_not_equal: Fg,
  set_style: Ps,
  svg_element: ao
} = window.__gradio__svelte__internal;
function Og(i) {
  let e, t, n;
  return {
    c() {
      e = ao("svg"), t = ao("path"), n = ao("path"), pn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), pn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), pn(e, "width", "100%"), pn(e, "height", "100%"), pn(e, "viewBox", "0 0 24 24"), pn(e, "xmlns", "http://www.w3.org/2000/svg"), pn(e, "fill", "none"), pn(e, "stroke", "currentColor"), pn(e, "stroke-width", "2"), Ps(e, "fill-rule", "evenodd"), Ps(e, "clip-rule", "evenodd"), Ps(e, "stroke-linecap", "round"), Ps(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Tg(s, e, l), Cr(e, t), Cr(e, n);
    },
    p: oo,
    i: oo,
    o: oo,
    d(s) {
      s && Ig(e);
    }
  };
}
class Ug extends jg {
  constructor(e) {
    super(), Ag(this, e, null, Og, Fg, {});
  }
}
const {
  SvelteComponent: Ng,
  append: Vg,
  attr: Rn,
  detach: Kg,
  init: Zg,
  insert: Jg,
  noop: ro,
  safe_not_equal: Gg,
  set_style: Hs,
  svg_element: Sr
} = window.__gradio__svelte__internal;
function Qg(i) {
  let e, t;
  return {
    c() {
      e = Sr("svg"), t = Sr("path"), Rn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Rn(e, "width", "100%"), Rn(e, "height", "100%"), Rn(e, "viewBox", "0 0 24 24"), Rn(e, "fill", "none"), Rn(e, "stroke", "currentColor"), Rn(e, "stroke-width", "2"), Hs(e, "fill-rule", "evenodd"), Hs(e, "clip-rule", "evenodd"), Hs(e, "stroke-linecap", "round"), Hs(e, "stroke-linejoin", "round"), Rn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      Jg(n, e, s), Vg(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && Kg(e);
    }
  };
}
class $g extends Ng {
  constructor(e) {
    super(), Zg(this, e, null, Qg, Gg, {});
  }
}
const {
  SvelteComponent: ep,
  append: tp,
  attr: Ln,
  detach: np,
  init: ip,
  insert: sp,
  noop: co,
  safe_not_equal: lp,
  set_style: js,
  svg_element: Mr
} = window.__gradio__svelte__internal;
function op(i) {
  let e, t;
  return {
    c() {
      e = Mr("svg"), t = Mr("path"), Ln(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ln(e, "width", "100%"), Ln(e, "height", "100%"), Ln(e, "viewBox", "0 0 24 24"), Ln(e, "fill", "none"), Ln(e, "stroke", "currentColor"), Ln(e, "stroke-width", "2"), js(e, "fill-rule", "evenodd"), js(e, "clip-rule", "evenodd"), js(e, "stroke-linecap", "round"), js(e, "stroke-linejoin", "round"), Ln(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      sp(n, e, s), tp(e, t);
    },
    p: co,
    i: co,
    o: co,
    d(n) {
      n && np(e);
    }
  };
}
class ap extends ep {
  constructor(e) {
    super(), ip(this, e, null, op, lp, {});
  }
}
const {
  SvelteComponent: rp,
  append: zr,
  attr: wt,
  detach: cp,
  init: fp,
  insert: up,
  noop: fo,
  safe_not_equal: hp,
  set_style: Is,
  svg_element: uo
} = window.__gradio__svelte__internal;
function dp(i) {
  let e, t, n;
  return {
    c() {
      e = uo("svg"), t = uo("path"), n = uo("path"), wt(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), wt(t, "fill", "none"), wt(t, "stroke-width", "2"), wt(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), wt(n, "fill", "none"), wt(n, "stroke-width", "2"), wt(e, "width", "100%"), wt(e, "height", "100%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "version", "1.1"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), wt(e, "xml:space", "preserve"), wt(e, "stroke", "currentColor"), Is(e, "fill-rule", "evenodd"), Is(e, "clip-rule", "evenodd"), Is(e, "stroke-linecap", "round"), Is(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      up(s, e, l), zr(e, t), zr(e, n);
    },
    p: fo,
    i: fo,
    o: fo,
    d(s) {
      s && cp(e);
    }
  };
}
class _p extends rp {
  constructor(e) {
    super(), fp(this, e, null, dp, hp, {});
  }
}
const {
  SvelteComponent: mp,
  append: bn,
  attr: se,
  detach: gp,
  init: pp,
  insert: bp,
  noop: ho,
  safe_not_equal: vp,
  svg_element: on
} = window.__gradio__svelte__internal;
function wp(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = on("svg"), t = on("path"), n = on("circle"), s = on("circle"), l = on("circle"), o = on("circle"), r = on("circle"), a = on("circle"), c = on("circle"), f = on("circle"), se(t, "fill", "none"), se(t, "stroke", "currentColor"), se(t, "stroke-width", "1.5"), se(t, "stroke-linecap", "round"), se(t, "stroke-linejoin", "round"), se(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), se(n, "cx", "7"), se(n, "cy", "7"), se(n, "r", "1.5"), se(n, "fill", "currentColor"), se(s, "cx", "15"), se(s, "cy", "9"), se(s, "r", "1.5"), se(s, "fill", "currentColor"), se(l, "cx", "21"), se(l, "cy", "5"), se(l, "r", "1.5"), se(l, "fill", "currentColor"), se(o, "cx", "25"), se(o, "cy", "13"), se(o, "r", "1.5"), se(o, "fill", "currentColor"), se(r, "cx", "23"), se(r, "cy", "21"), se(r, "r", "1.5"), se(r, "fill", "currentColor"), se(a, "cx", "15"), se(a, "cy", "19"), se(a, "r", "1.5"), se(a, "fill", "currentColor"), se(c, "cx", "9"), se(c, "cy", "23"), se(c, "r", "1.5"), se(c, "fill", "currentColor"), se(f, "cx", "5"), se(f, "cy", "15"), se(f, "r", "1.5"), se(f, "fill", "currentColor"), se(e, "xmlns", "http://www.w3.org/2000/svg"), se(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), se(e, "aria-hidden", "true"), se(e, "role", "img"), se(e, "class", "iconify iconify--carbon"), se(e, "width", "100%"), se(e, "height", "100%"), se(e, "preserveAspectRatio", "xMidYMid meet"), se(e, "viewBox", "0 0 32 32");
    },
    m(h, d) {
      bp(h, e, d), bn(e, t), bn(e, n), bn(e, s), bn(e, l), bn(e, o), bn(e, r), bn(e, a), bn(e, c), bn(e, f);
    },
    p: ho,
    i: ho,
    o: ho,
    d(h) {
      h && gp(e);
    }
  };
}
let kp = class extends mp {
  constructor(e) {
    super(), pp(this, e, null, wp, vp, {});
  }
};
const {
  SvelteComponent: yp,
  append: ts,
  attr: ge,
  detach: Cp,
  init: Sp,
  insert: Mp,
  noop: _o,
  safe_not_equal: zp,
  set_style: As,
  svg_element: xi
} = window.__gradio__svelte__internal;
function Wp(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = xi("svg"), t = xi("circle"), n = xi("circle"), s = xi("circle"), l = xi("circle"), o = xi("circle"), ge(t, "cx", "12"), ge(t, "cy", "12"), ge(t, "r", "8"), ge(t, "stroke-width", "2"), ge(t, "fill", "none"), ge(n, "cx", "12"), ge(n, "cy", "12"), ge(n, "r", "4"), ge(n, "stroke-width", "1.5"), ge(n, "fill", "none"), ge(n, "opacity", "0.5"), ge(s, "cx", "8"), ge(s, "cy", "8"), ge(s, "r", "1"), ge(s, "fill", "currentColor"), ge(s, "opacity", "0.6"), ge(l, "cx", "16"), ge(l, "cy", "8"), ge(l, "r", "1"), ge(l, "fill", "currentColor"), ge(l, "opacity", "0.6"), ge(o, "cx", "12"), ge(o, "cy", "16"), ge(o, "r", "1"), ge(o, "fill", "currentColor"), ge(o, "opacity", "0.6"), ge(e, "width", "100%"), ge(e, "height", "100%"), ge(e, "viewBox", "0 0 24 24"), ge(e, "version", "1.1"), ge(e, "xmlns", "http://www.w3.org/2000/svg"), ge(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ge(e, "xml:space", "preserve"), ge(e, "stroke", "currentColor"), As(e, "fill-rule", "evenodd"), As(e, "clip-rule", "evenodd"), As(e, "stroke-linecap", "round"), As(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Mp(r, e, a), ts(e, t), ts(e, n), ts(e, s), ts(e, l), ts(e, o);
    },
    p: _o,
    i: _o,
    o: _o,
    d(r) {
      r && Cp(e);
    }
  };
}
class xp extends yp {
  constructor(e) {
    super(), Sp(this, e, null, Wp, zp, {});
  }
}
const {
  SvelteComponent: Bp,
  append: Wr,
  attr: Bt,
  detach: Dp,
  init: Xp,
  insert: Yp,
  noop: mo,
  safe_not_equal: Ep,
  set_style: Ts,
  svg_element: go
} = window.__gradio__svelte__internal;
function Rp(i) {
  let e, t, n;
  return {
    c() {
      e = go("svg"), t = go("path"), n = go("path"), Bt(t, "d", "M3 7v6h6"), Bt(t, "stroke-width", "2"), Bt(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), Bt(n, "stroke-width", "2"), Bt(e, "width", "100%"), Bt(e, "height", "100%"), Bt(e, "viewBox", "0 0 24 24"), Bt(e, "version", "1.1"), Bt(e, "xmlns", "http://www.w3.org/2000/svg"), Bt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Bt(e, "xml:space", "preserve"), Bt(e, "stroke", "currentColor"), Bt(e, "fill", "none"), Ts(e, "fill-rule", "evenodd"), Ts(e, "clip-rule", "evenodd"), Ts(e, "stroke-linecap", "round"), Ts(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Yp(s, e, l), Wr(e, t), Wr(e, n);
    },
    p: mo,
    i: mo,
    o: mo,
    d(s) {
      s && Dp(e);
    }
  };
}
class Lp extends Bp {
  constructor(e) {
    super(), Xp(this, e, null, Rp, Ep, {});
  }
}
const {
  SvelteComponent: qp,
  append: xr,
  attr: Dt,
  detach: Pp,
  init: Hp,
  insert: jp,
  noop: po,
  safe_not_equal: Ip,
  set_style: Fs,
  svg_element: bo
} = window.__gradio__svelte__internal;
function Ap(i) {
  let e, t, n;
  return {
    c() {
      e = bo("svg"), t = bo("path"), n = bo("path"), Dt(t, "d", "M21 7v6h-6"), Dt(t, "stroke-width", "2"), Dt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), Dt(n, "stroke-width", "2"), Dt(e, "width", "100%"), Dt(e, "height", "100%"), Dt(e, "viewBox", "0 0 24 24"), Dt(e, "version", "1.1"), Dt(e, "xmlns", "http://www.w3.org/2000/svg"), Dt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Dt(e, "xml:space", "preserve"), Dt(e, "stroke", "currentColor"), Dt(e, "fill", "none"), Fs(e, "fill-rule", "evenodd"), Fs(e, "clip-rule", "evenodd"), Fs(e, "stroke-linecap", "round"), Fs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      jp(s, e, l), xr(e, t), xr(e, n);
    },
    p: po,
    i: po,
    o: po,
    d(s) {
      s && Pp(e);
    }
  };
}
class Tp extends qp {
  constructor(e) {
    super(), Hp(this, e, null, Ap, Ip, {});
  }
}
const {
  SvelteComponent: Fp,
  append: Op,
  attr: Jt,
  detach: Up,
  init: Np,
  insert: Vp,
  noop: vo,
  safe_not_equal: Kp,
  set_style: Br,
  svg_element: Dr
} = window.__gradio__svelte__internal;
function Zp(i) {
  let e, t;
  return {
    c() {
      e = Dr("svg"), t = Dr("path"), Jt(t, "d", "M7 10l5 5 5-5z"), Jt(t, "stroke", "none"), Jt(e, "width", "100%"), Jt(e, "height", "100%"), Jt(e, "viewBox", "0 0 24 24"), Jt(e, "version", "1.1"), Jt(e, "xmlns", "http://www.w3.org/2000/svg"), Jt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Jt(e, "xml:space", "preserve"), Jt(e, "stroke", "currentColor"), Jt(e, "fill", "currentColor"), Br(e, "fill-rule", "evenodd"), Br(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      Vp(n, e, s), Op(e, t);
    },
    p: vo,
    i: vo,
    o: vo,
    d(n) {
      n && Up(e);
    }
  };
}
class Xr extends Fp {
  constructor(e) {
    super(), Np(this, e, null, Zp, Kp, {});
  }
}
const {
  SvelteComponent: Jp,
  append: Yr,
  attr: wo,
  bubble: Er,
  create_component: Gp,
  destroy_component: Qp,
  detach: kf,
  element: Rr,
  init: $p,
  insert: yf,
  listen: ko,
  mount_component: e2,
  run_all: t2,
  safe_not_equal: n2,
  set_data: i2,
  set_input_value: Lr,
  space: s2,
  text: l2,
  transition_in: o2,
  transition_out: a2
} = window.__gradio__svelte__internal, { createEventDispatcher: r2, afterUpdate: c2 } = window.__gradio__svelte__internal;
function f2(i) {
  let e;
  return {
    c() {
      e = l2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      yf(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && i2(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && kf(e);
    }
  };
}
function u2(i) {
  let e, t, n, s, l, o, r;
  return t = new xc({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [f2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Rr("label"), Gp(t.$$.fragment), n = s2(), s = Rr("input"), wo(s, "type", "color"), s.disabled = /*disabled*/
      i[3], wo(s, "class", "svelte-16l8u73"), wo(e, "class", "block");
    },
    m(a, c) {
      yf(a, e, c), e2(t, e, null), Yr(e, n), Yr(e, s), Lr(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        ko(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        ko(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        ko(
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
      1 && Lr(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (o2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      a2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && kf(e), Qp(t), o = !1, t2(r);
    }
  };
}
function h2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = r2();
  function f() {
    c("change", n), s || c("input");
  }
  c2(() => {
    t(5, s = !1);
  });
  function h(g) {
    Er.call(this, i, g);
  }
  function d(g) {
    Er.call(this, i, g);
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
    h,
    d,
    _
  ];
}
class d2 extends Jp {
  constructor(e) {
    super(), $p(this, e, h2, u2, n2, {
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
  SvelteComponent: _2,
  append: Cf,
  attr: Le,
  bubble: m2,
  check_outros: g2,
  create_slot: Sf,
  detach: vs,
  element: xl,
  empty: p2,
  get_all_dirty_from_scope: Mf,
  get_slot_changes: zf,
  group_outros: b2,
  init: v2,
  insert: ws,
  listen: w2,
  safe_not_equal: k2,
  set_style: yt,
  space: Wf,
  src_url_equal: dl,
  toggle_class: Ii,
  transition_in: _l,
  transition_out: ml,
  update_slot_base: xf
} = window.__gradio__svelte__internal;
function y2(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && qr(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Sf(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = xl("button"), r && r.c(), t = Wf(), c && c.c(), Le(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Le(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Ii(e, "hidden", !/*visible*/
      i[2]), yt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), yt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), yt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, h) {
      ws(f, e, h), r && r.m(e, null), Cf(e, t), c && c.m(e, null), s = !0, l || (o = w2(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, h) {
      /*icon*/
      f[7] ? r ? r.p(f, h) : (r = qr(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || h & /*$$scope*/
      2048) && xf(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? zf(
          a,
          /*$$scope*/
          f[11],
          h,
          null
        ) : Mf(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || h & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && Le(e, "class", n), (!s || h & /*elem_id*/
      1) && Le(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || h & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || h & /*size, variant, elem_classes, visible*/
      30) && Ii(e, "hidden", !/*visible*/
      f[2]), h & /*scale*/
      512 && yt(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), h & /*scale*/
      512 && yt(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), h & /*min_width*/
      1024 && yt(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (_l(c, f), s = !0);
    },
    o(f) {
      ml(c, f), s = !1;
    },
    d(f) {
      f && vs(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function C2(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && Pr(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Sf(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = xl("a"), l && l.c(), t = Wf(), r && r.c(), Le(
        e,
        "href",
        /*link*/
        i[6]
      ), Le(e, "rel", "noopener noreferrer"), Le(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), Le(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Le(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Ii(e, "hidden", !/*visible*/
      i[2]), Ii(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), yt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), yt(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), yt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), yt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      ws(a, e, c), l && l.m(e, null), Cf(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = Pr(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && xf(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? zf(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : Mf(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && Le(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && Le(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && Le(e, "class", n), (!s || c & /*elem_id*/
      1) && Le(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && Ii(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && Ii(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && yt(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && yt(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && yt(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && yt(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (_l(r, a), s = !0);
    },
    o(a) {
      ml(r, a), s = !1;
    },
    d(a) {
      a && vs(e), l && l.d(), r && r.d(a);
    }
  };
}
function qr(i) {
  let e, t, n;
  return {
    c() {
      e = xl("img"), Le(e, "class", "button-icon svelte-8huxfn"), dl(e.src, t = /*icon*/
      i[7].url) || Le(e, "src", t), Le(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ws(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !dl(e.src, t = /*icon*/
      s[7].url) && Le(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Le(e, "alt", n);
    },
    d(s) {
      s && vs(e);
    }
  };
}
function Pr(i) {
  let e, t, n;
  return {
    c() {
      e = xl("img"), Le(e, "class", "button-icon svelte-8huxfn"), dl(e.src, t = /*icon*/
      i[7].url) || Le(e, "src", t), Le(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ws(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !dl(e.src, t = /*icon*/
      s[7].url) && Le(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Le(e, "alt", n);
    },
    d(s) {
      s && vs(e);
    }
  };
}
function S2(i) {
  let e, t, n, s;
  const l = [C2, y2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = p2();
    },
    m(a, c) {
      o[e].m(a, c), ws(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (b2(), ml(o[f], 1, 1, () => {
        o[f] = null;
      }), g2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), _l(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (_l(t), s = !0);
    },
    o(a) {
      ml(t), s = !1;
    },
    d(a) {
      a && vs(n), o[e].d(a);
    }
  };
}
function M2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: h = null } = e, { icon: d = null } = e, { disabled: _ = !1 } = e, { scale: g = null } = e, { min_width: u = void 0 } = e;
  function v(p) {
    m2.call(this, i, p);
  }
  return i.$$set = (p) => {
    "elem_id" in p && t(0, l = p.elem_id), "elem_classes" in p && t(1, o = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, c = p.size), "value" in p && t(5, f = p.value), "link" in p && t(6, h = p.link), "icon" in p && t(7, d = p.icon), "disabled" in p && t(8, _ = p.disabled), "scale" in p && t(9, g = p.scale), "min_width" in p && t(10, u = p.min_width), "$$scope" in p && t(11, s = p.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    d,
    _,
    g,
    u,
    s,
    n,
    v
  ];
}
class Io extends _2 {
  constructor(e) {
    super(), v2(this, e, M2, S2, k2, {
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
  SvelteComponent: z2,
  add_render_callback: Bf,
  append: Os,
  attr: Et,
  binding_callbacks: Hr,
  check_outros: W2,
  create_bidirectional_transition: jr,
  destroy_each: x2,
  detach: hs,
  element: gl,
  empty: B2,
  ensure_array_like: Ir,
  group_outros: D2,
  init: X2,
  insert: ds,
  listen: Ao,
  prevent_default: Y2,
  run_all: E2,
  safe_not_equal: R2,
  set_data: L2,
  set_style: Bi,
  space: To,
  text: q2,
  toggle_class: an,
  transition_in: yo,
  transition_out: Ar
} = window.__gradio__svelte__internal, { createEventDispatcher: P2 } = window.__gradio__svelte__internal;
function Tr(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Fr(i) {
  let e, t, n, s, l, o = Ir(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Or(Tr(i, o, a));
  return {
    c() {
      e = gl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Et(e, "class", "options svelte-yuohum"), Et(e, "role", "listbox"), Bi(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Bi(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Bi(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      ds(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = Ao(e, "mousedown", Y2(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = Ir(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const h = Tr(a, o, f);
          r[f] ? r[f].p(h, c) : (r[f] = Or(h), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Bi(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Bi(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Bi(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Bf(() => {
        n && (t || (t = jr(e, ja, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = jr(e, ja, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && hs(e), x2(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function Or(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = gl("li"), t = gl("span"), t.textContent = "✓", n = To(), l = q2(s), o = To(), Et(t, "class", "inner-item svelte-yuohum"), an(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Et(e, "class", "item svelte-yuohum"), Et(e, "data-index", r = /*index*/
      i[26]), Et(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Et(e, "data-testid", "dropdown-option"), Et(e, "role", "option"), Et(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), an(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), an(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), an(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), an(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, h) {
      ds(f, e, h), Os(e, t), Os(e, n), Os(e, l), Os(e, o);
    },
    p(f, h) {
      h & /*selected_indices, filtered_indices*/
      18 && an(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), h & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && L2(l, s), h & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && Et(e, "data-index", r), h & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && Et(e, "aria-label", a), h & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && Et(e, "aria-selected", c), h & /*selected_indices, filtered_indices*/
      18 && an(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), h & /*filtered_indices, active_index*/
      34 && an(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && an(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && an(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && hs(e);
    }
  };
}
function H2(i) {
  let e, t, n, s, l;
  Bf(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Fr(i)
  );
  return {
    c() {
      e = gl("div"), t = To(), o && o.c(), n = B2(), Et(e, "class", "reference");
    },
    m(r, a) {
      ds(r, e, a), i[20](e), ds(r, t, a), o && o.m(r, a), ds(r, n, a), s || (l = [
        Ao(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Ao(
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
      12 && yo(o, 1)) : (o = Fr(r), o.c(), yo(o, 1), o.m(n.parentNode, n)) : o && (D2(), Ar(o, 1, 1, () => {
        o = null;
      }), W2());
    },
    i(r) {
      yo(o);
    },
    o(r) {
      Ar(o);
    },
    d(r) {
      r && (hs(e), hs(t), hs(n)), i[20](null), o && o.d(r), s = !1, E2(l);
    }
  };
}
function j2(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, h, d, _, g, u, v, p, y, w;
  function S() {
    const { top: D, bottom: P } = u.getBoundingClientRect();
    t(16, h = D), t(17, d = w - P);
  }
  let C = null;
  function k() {
    r && (C !== null && clearTimeout(C), C = setTimeout(
      () => {
        S(), C = null;
      },
      10
    ));
  }
  const W = P2();
  function x() {
    t(11, w = window.innerHeight);
  }
  function B(D) {
    Hr[D ? "unshift" : "push"](() => {
      u = D, t(6, u);
    });
  }
  const b = (D) => W("change", D);
  function z(D) {
    Hr[D ? "unshift" : "push"](() => {
      v = D, t(7, v);
    });
  }
  return i.$$set = (D) => {
    "choices" in D && t(0, l = D.choices), "filtered_indices" in D && t(1, o = D.filtered_indices), "show_options" in D && t(2, r = D.show_options), "disabled" in D && t(3, a = D.disabled), "selected_indices" in D && t(4, c = D.selected_indices), "active_index" in D && t(5, f = D.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && u) {
        if (v && c.length > 0) {
          let P = v.querySelectorAll("li");
          for (const A of Array.from(P))
            if (A.getAttribute("data-index") === c[0].toString()) {
              t(14, n = v == null ? void 0 : v.scrollTo) === null || n === void 0 || n.call(v, 0, A.offsetTop);
              break;
            }
        }
        S();
        const D = t(15, s = u.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, _ = (D == null ? void 0 : D.height) || 0), t(8, g = (D == null ? void 0 : D.width) || 0);
      }
      d > h ? (t(10, y = d), t(9, p = null)) : (t(9, p = `${d + _}px`), t(10, y = h - _));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    v,
    g,
    p,
    y,
    w,
    k,
    W,
    n,
    s,
    h,
    d,
    _,
    x,
    B,
    b,
    z
  ];
}
class I2 extends z2 {
  constructor(e) {
    super(), X2(this, e, j2, H2, R2, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function A2(i, e) {
  return (i % e + e) % e;
}
function Ur(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function T2(i, e, t) {
  i("change", e), t || i("input");
}
function F2(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[A2(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: O2,
  append: Zn,
  attr: Yt,
  binding_callbacks: U2,
  check_outros: N2,
  create_component: Fo,
  destroy_component: Oo,
  detach: ia,
  element: qi,
  group_outros: V2,
  init: K2,
  insert: sa,
  listen: jn,
  mount_component: Uo,
  noop: Z2,
  run_all: J2,
  safe_not_equal: G2,
  set_data: Q2,
  set_input_value: Nr,
  space: Co,
  text: $2,
  toggle_class: Di,
  transition_in: Pi,
  transition_out: rs
} = window.__gradio__svelte__internal, { onMount: eb } = window.__gradio__svelte__internal, { createEventDispatcher: tb, afterUpdate: nb } = window.__gradio__svelte__internal;
function ib(i) {
  let e;
  return {
    c() {
      e = $2(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      sa(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Q2(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && ia(e);
    }
  };
}
function Vr(i) {
  let e, t, n, s, l;
  return t = new Zo({}), {
    c() {
      e = qi("div"), Fo(t.$$.fragment), Yt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      sa(o, e, r), Uo(t, e, null), n = !0, s || (l = jn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: Z2,
    i(o) {
      n || (Pi(t.$$.fragment, o), n = !0);
    },
    o(o) {
      rs(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ia(e), Oo(t), s = !1, l();
    }
  };
}
function sb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g;
  t = new xc({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [ib] },
      $$scope: { ctx: i }
    }
  });
  let u = !/*disabled*/
  i[3] && Vr(i);
  return h = new I2({
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
      e = qi("div"), Fo(t.$$.fragment), n = Co(), s = qi("div"), l = qi("div"), o = qi("div"), r = qi("input"), c = Co(), u && u.c(), f = Co(), Fo(h.$$.fragment), Yt(r, "role", "listbox"), Yt(r, "aria-controls", "dropdown-options"), Yt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Yt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Yt(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], Yt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Di(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Yt(o, "class", "secondary-wrap svelte-1a9du2n"), Yt(l, "class", "wrap-inner svelte-1a9du2n"), Di(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), Yt(s, "class", "wrap svelte-1a9du2n"), Yt(e, "class", "svelte-1a9du2n"), Di(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(v, p) {
      sa(v, e, p), Uo(t, e, null), Zn(e, n), Zn(e, s), Zn(s, l), Zn(l, o), Zn(o, r), Nr(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), Zn(o, c), u && u.m(o, null), Zn(s, f), Uo(h, s, null), d = !0, _ || (g = [
        jn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        jn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        jn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        jn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        jn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        jn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        jn(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], _ = !0);
    },
    p(v, p) {
      const y = {};
      p[0] & /*show_label*/
      16 && (y.show_label = /*show_label*/
      v[4]), p[0] & /*info*/
      2 && (y.info = /*info*/
      v[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      16 && (y.$$scope = { dirty: p, ctx: v }), t.$set(y), (!d || p[0] & /*show_options*/
      4096) && Yt(
        r,
        "aria-expanded",
        /*show_options*/
        v[12]
      ), (!d || p[0] & /*label*/
      1) && Yt(
        r,
        "aria-label",
        /*label*/
        v[0]
      ), (!d || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      v[3]), (!d || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      v[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      v[9] && Nr(
        r,
        /*input_text*/
        v[9]
      ), (!d || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Di(r, "subdued", !/*choices_names*/
      v[13].includes(
        /*input_text*/
        v[9]
      ) && !/*allow_custom_value*/
      v[6]), /*disabled*/
      v[3] ? u && (V2(), rs(u, 1, 1, () => {
        u = null;
      }), N2()) : u ? (u.p(v, p), p[0] & /*disabled*/
      8 && Pi(u, 1)) : (u = Vr(v), u.c(), Pi(u, 1), u.m(o, null)), (!d || p[0] & /*show_options*/
      4096) && Di(
        l,
        "show_options",
        /*show_options*/
        v[12]
      );
      const w = {};
      p[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      v[12]), p[0] & /*choices*/
      4 && (w.choices = /*choices*/
      v[2]), p[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      v[10]), p[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      v[3]), p[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      v[11] === null ? [] : [
        /*selected_index*/
        v[11]
      ]), p[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      v[14]), h.$set(w), (!d || p[0] & /*container*/
      32) && Di(
        e,
        "container",
        /*container*/
        v[5]
      );
    },
    i(v) {
      d || (Pi(t.$$.fragment, v), Pi(u), Pi(h.$$.fragment, v), d = !0);
    },
    o(v) {
      rs(t.$$.fragment, v), rs(u), rs(h.$$.fragment, v), d = !1;
    },
    d(v) {
      v && ia(e), Oo(t), i[31](null), u && u.d(), Oo(h), _ = !1, J2(g);
    }
  };
}
function lb(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: h } = e, { container: d = !0 } = e, { allow_custom_value: _ = !1 } = e, { filterable: g = !0 } = e, u, v = !1, p, y, w = "", S = "", C = !1, k = [], W = null, x = null, B;
  const b = tb();
  l ? (B = a.map((j) => j[1]).indexOf(l), x = B, x === -1 ? (o = l, x = null) : ([w, o] = a[x], S = w), D()) : a.length > 0 && (B = 0, x = 0, [w, l] = a[x], o = l, S = w);
  function z() {
    t(13, p = a.map((j) => j[0])), t(26, y = a.map((j) => j[1]));
  }
  function D() {
    z(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, x = null)) : y.includes(l) ? (t(9, w = p[y.indexOf(l)]), t(11, x = y.indexOf(l))) : _ ? (t(9, w = l), t(11, x = null)) : (t(9, w = ""), t(11, x = null)), t(29, B = x);
  }
  function P(j) {
    if (t(11, x = parseInt(j.detail.target.dataset.index)), isNaN(x)) {
      t(11, x = null);
      return;
    }
    t(12, v = !1), t(14, W = null), u.blur();
  }
  function A(j) {
    t(10, k = a.map((fe, ne) => ne)), t(12, v = !0), b("focus");
  }
  function Y() {
    f || (u.focus(), t(12, v = !0));
  }
  function L(j) {
    j.preventDefault(), f || (u.focus(), t(12, v = !v));
  }
  function Z() {
    _ ? t(22, l = w) : t(9, w = p[y.indexOf(l)]), t(12, v = !1), t(14, W = null), b("blur");
  }
  function q(j) {
    t(12, [v, W] = F2(j, W, k), v, (t(14, W), t(2, a), t(25, c), t(6, _), t(9, w), t(10, k), t(8, u), t(27, S), t(11, x), t(29, B), t(28, C), t(26, y))), j.key === "Enter" && (W !== null ? (t(11, x = W), t(12, v = !1), u.blur(), t(14, W = null)) : p.includes(w) ? (t(11, x = p.indexOf(w)), t(12, v = !1), t(14, W = null), u.blur()) : _ && (t(22, l = w), t(11, x = null), t(12, v = !1), t(14, W = null), u.blur()), b("enter", l));
  }
  nb(() => {
    t(23, r = !1), t(28, C = !0);
  }), eb(() => {
  });
  function F() {
    w = this.value, t(9, w), t(11, x), t(29, B), t(28, C), t(2, a), t(26, y);
  }
  function J(j) {
    U2[j ? "unshift" : "push"](() => {
      u = j, t(8, u);
    });
  }
  const U = (j) => b("key_up", { key: j.key, input_value: w });
  return i.$$set = (j) => {
    "label" in j && t(0, n = j.label), "info" in j && t(1, s = j.info), "value" in j && t(22, l = j.value), "value_is_output" in j && t(23, r = j.value_is_output), "choices" in j && t(2, a = j.choices), "disabled" in j && t(3, f = j.disabled), "show_label" in j && t(4, h = j.show_label), "container" in j && t(5, d = j.container), "allow_custom_value" in j && t(6, _ = j.allow_custom_value), "filterable" in j && t(7, g = j.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && x !== B && x !== null && C && (t(9, [w, l] = a[x], w, (t(22, l), t(11, x), t(29, B), t(28, C), t(2, a), t(26, y))), t(29, B = x), b("select", {
      index: x,
      value: y[x],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (D(), T2(b, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && z(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (_ || D(), t(25, c = a), t(10, k = Ur(a, w)), !_ && k.length > 0 && t(14, W = k[0]), u == document.activeElement && t(12, v = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && w !== S && (t(10, k = Ur(a, w)), t(27, S = w), !_ && k.length > 0 && t(14, W = k[0]));
  }, [
    n,
    s,
    a,
    f,
    h,
    d,
    _,
    g,
    u,
    w,
    k,
    x,
    v,
    p,
    W,
    b,
    P,
    A,
    Y,
    L,
    Z,
    q,
    l,
    r,
    o,
    c,
    y,
    S,
    C,
    B,
    F,
    J,
    U
  ];
}
class ob extends O2 {
  constructor(e) {
    super(), K2(
      this,
      e,
      lb,
      sb,
      G2,
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
  SvelteComponent: ab,
  append: He,
  attr: jt,
  check_outros: No,
  create_component: ri,
  destroy_component: ci,
  detach: wi,
  element: mt,
  group_outros: Vo,
  init: rb,
  insert: ki,
  listen: nl,
  mount_component: fi,
  run_all: cb,
  safe_not_equal: fb,
  set_data: ub,
  set_input_value: Kr,
  set_style: Be,
  space: In,
  text: gs,
  to_number: hb,
  toggle_class: Zr,
  transition_in: _t,
  transition_out: Rt
} = window.__gradio__svelte__internal, { createEventDispatcher: db } = window.__gradio__svelte__internal, { onMount: _b, onDestroy: mb } = window.__gradio__svelte__internal;
function Jr(i) {
  let e, t, n, s, l, o, r;
  const a = [pb, gb], c = [];
  function f(h, d) {
    return (
      /*labelDetailLock*/
      h[3] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = mt("div"), t = mt("button"), s.c(), jt(t, "class", "icon svelte-d9x7u0"), jt(t, "aria-label", "Lock label detail"), Zr(
        t,
        "selected",
        /*labelDetailLock*/
        i[3] === !0
      ), Be(e, "margin-right", "8px");
    },
    m(h, d) {
      ki(h, e, d), He(e, t), c[n].m(t, null), l = !0, o || (r = nl(
        t,
        "click",
        /*onLockClick*/
        i[12]
      ), o = !0);
    },
    p(h, d) {
      let _ = n;
      n = f(h), n !== _ && (Vo(), Rt(c[_], 1, 1, () => {
        c[_] = null;
      }), No(), s = c[n], s || (s = c[n] = a[n](h), s.c()), _t(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      8) && Zr(
        t,
        "selected",
        /*labelDetailLock*/
        h[3] === !0
      );
    },
    i(h) {
      l || (_t(s), l = !0);
    },
    o(h) {
      Rt(s), l = !1;
    },
    d(h) {
      h && wi(e), c[n].d(), o = !1, r();
    }
  };
}
function gb(i) {
  let e, t;
  return e = new ap({}), {
    c() {
      ri(e.$$.fragment);
    },
    m(n, s) {
      fi(e, n, s), t = !0;
    },
    i(n) {
      t || (_t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ci(e, n);
    }
  };
}
function pb(i) {
  let e, t;
  return e = new $g({}), {
    c() {
      ri(e.$$.fragment);
    },
    m(n, s) {
      fi(e, n, s), t = !0;
    },
    i(n) {
      t || (_t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ci(e, n);
    }
  };
}
function Gr(i) {
  let e, t, n, s, l, o, r, a = Math.round(
    /*currentOpacity*/
    i[2] * 100
  ) + "", c, f, h, d;
  return {
    c() {
      e = mt("div"), t = mt("label"), t.textContent = "Opacity", n = In(), s = mt("div"), l = mt("input"), o = In(), r = mt("span"), c = gs(a), f = gs("%"), jt(t, "for", "opacity-slider"), Be(t, "font-size", "12px"), Be(t, "margin-bottom", "4px"), Be(t, "color", "var(--body-text-color)"), jt(l, "id", "opacity-slider"), jt(l, "type", "range"), jt(l, "min", "0"), jt(l, "max", "1"), jt(l, "step", "0.05"), Be(l, "flex", "1"), Be(l, "height", "4px"), Be(l, "background", "var(--slider-color)"), Be(l, "border-radius", "2px"), Be(l, "outline", "none"), Be(l, "appearance", "none"), Be(l, "-webkit-appearance", "none"), Be(r, "font-size", "11px"), Be(r, "color", "var(--body-text-color-subdued)"), Be(r, "min-width", "30px"), Be(r, "text-align", "center"), Be(s, "display", "flex"), Be(s, "align-items", "center"), Be(s, "gap", "8px"), Be(s, "width", "100%"), Be(e, "margin-right", "20px"), Be(e, "margin-bottom", "8px"), Be(e, "display", "flex"), Be(e, "flex-direction", "column"), Be(e, "align-items", "center"), Be(e, "min-width", "120px");
    },
    m(_, g) {
      ki(_, e, g), He(e, t), He(e, n), He(e, s), He(s, l), Kr(
        l,
        /*currentOpacity*/
        i[2]
      ), He(s, o), He(s, r), He(r, c), He(r, f), h || (d = [
        nl(
          l,
          "change",
          /*input_change_input_handler*/
          i[17]
        ),
        nl(
          l,
          "input",
          /*input_change_input_handler*/
          i[17]
        ),
        nl(
          l,
          "input",
          /*onOpacityChange*/
          i[10]
        )
      ], h = !0);
    },
    p(_, g) {
      g & /*currentOpacity*/
      4 && Kr(
        l,
        /*currentOpacity*/
        _[2]
      ), g & /*currentOpacity*/
      4 && a !== (a = Math.round(
        /*currentOpacity*/
        _[2] * 100
      ) + "") && ub(c, a);
    },
    d(_) {
      _ && wi(e), h = !1, cb(d);
    }
  };
}
function bb(i) {
  let e;
  return {
    c() {
      e = gs("Cancel");
    },
    m(t, n) {
      ki(t, e, n);
    },
    d(t) {
      t && wi(e);
    }
  };
}
function Qr(i) {
  let e, t, n;
  return t = new Io({
    props: {
      variant: "stop",
      $$slots: { default: [vb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[19]
  ), {
    c() {
      e = mt("div"), ri(t.$$.fragment), Be(e, "margin-right", "8px");
    },
    m(s, l) {
      ki(s, e, l), fi(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      8388608 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (_t(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Rt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && wi(e), ci(t);
    }
  };
}
function vb(i) {
  let e;
  return {
    c() {
      e = gs("Remove");
    },
    m(t, n) {
      ki(t, e, n);
    },
    d(t) {
      t && wi(e);
    }
  };
}
function wb(i) {
  let e;
  return {
    c() {
      e = gs("OK");
    },
    m(t, n) {
      ki(t, e, n);
    },
    d(t) {
      t && wi(e);
    }
  };
}
function kb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, v, p, y, w = !/*showRemove*/
  i[5] && Jr(i);
  o = new ob({
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
  ), c = new d2({
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
  let S = (
    /*showOpacity*/
    i[6] && Gr(i)
  );
  _ = new Io({
    props: {
      $$slots: { default: [bb] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[18]
  );
  let C = (
    /*showRemove*/
    i[5] && Qr(i)
  );
  return p = new Io({
    props: {
      variant: "primary",
      $$slots: { default: [wb] },
      $$scope: { ctx: i }
    }
  }), p.$on(
    "click",
    /*click_handler_2*/
    i[20]
  ), {
    c() {
      e = mt("div"), t = mt("div"), n = mt("span"), w && w.c(), s = In(), l = mt("div"), ri(o.$$.fragment), r = In(), a = mt("div"), ri(c.$$.fragment), f = In(), S && S.c(), h = In(), d = mt("div"), ri(_.$$.fragment), g = In(), C && C.c(), u = In(), v = mt("div"), ri(p.$$.fragment), Be(l, "margin-right", "10px"), Be(a, "margin-right", "40px"), Be(a, "margin-bottom", "8px"), Be(d, "margin-right", "8px"), jt(n, "class", "model-content svelte-d9x7u0"), jt(t, "class", "modal-container svelte-d9x7u0"), jt(e, "class", "modal svelte-d9x7u0"), jt(e, "id", "model-box-edit");
    },
    m(k, W) {
      ki(k, e, W), He(e, t), He(t, n), w && w.m(n, null), He(n, s), He(n, l), fi(o, l, null), He(n, r), He(n, a), fi(c, a, null), He(n, f), S && S.m(n, null), He(n, h), He(n, d), fi(_, d, null), He(n, g), C && C.m(n, null), He(n, u), He(n, v), fi(p, v, null), y = !0;
    },
    p(k, [W]) {
      /*showRemove*/
      k[5] ? w && (Vo(), Rt(w, 1, 1, () => {
        w = null;
      }), No()) : w ? (w.p(k, W), W & /*showRemove*/
      32 && _t(w, 1)) : (w = Jr(k), w.c(), _t(w, 1), w.m(n, s));
      const x = {};
      W & /*currentLabel*/
      1 && (x.value = /*currentLabel*/
      k[0]), W & /*choices*/
      16 && (x.choices = /*choices*/
      k[4]), o.$set(x);
      const B = {};
      W & /*currentColor*/
      2 && (B.value = /*currentColor*/
      k[1]), c.$set(B), /*showOpacity*/
      k[6] ? S ? S.p(k, W) : (S = Gr(k), S.c(), S.m(n, h)) : S && (S.d(1), S = null);
      const b = {};
      W & /*$$scope*/
      8388608 && (b.$$scope = { dirty: W, ctx: k }), _.$set(b), /*showRemove*/
      k[5] ? C ? (C.p(k, W), W & /*showRemove*/
      32 && _t(C, 1)) : (C = Qr(k), C.c(), _t(C, 1), C.m(n, u)) : C && (Vo(), Rt(C, 1, 1, () => {
        C = null;
      }), No());
      const z = {};
      W & /*$$scope*/
      8388608 && (z.$$scope = { dirty: W, ctx: k }), p.$set(z);
    },
    i(k) {
      y || (_t(w), _t(o.$$.fragment, k), _t(c.$$.fragment, k), _t(_.$$.fragment, k), _t(C), _t(p.$$.fragment, k), y = !0);
    },
    o(k) {
      Rt(w), Rt(o.$$.fragment, k), Rt(c.$$.fragment, k), Rt(_.$$.fragment, k), Rt(C), Rt(p.$$.fragment, k), y = !1;
    },
    d(k) {
      k && wi(e), w && w.d(), ci(o), ci(c), S && S.d(), ci(_), C && C.d(), ci(p);
    }
  };
}
function yb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { opacity: c = 0.5 } = e, { currentOpacity: f = 0.5 } = e, { showRemove: h = !0 } = e, { labelDetailLock: d = !1 } = e, { showOpacity: _ = !1 } = e;
  const g = db();
  function u(b) {
    g("change", {
      label: s,
      color: a,
      opacity: f,
      lock: d,
      ret: b
      // -1: remove, 0: cancel, 1: change
    });
  }
  function v(b) {
    const { detail: z } = b;
    let D = z;
    Number.isInteger(D) ? (Array.isArray(o) && D < o.length && t(1, a = o[D]), Array.isArray(l) && D < l.length && t(0, s = l[D][0])) : t(0, s = D);
  }
  function p(b) {
    const { detail: z } = b;
    t(1, a = z);
  }
  function y(b) {
    t(2, f = parseFloat(b.target.value));
  }
  function w(b) {
    v(b), u(1);
  }
  function S(b) {
    t(3, d = !d);
  }
  function C(b) {
    switch (b.key) {
      case "Enter":
        u(1);
        break;
    }
  }
  _b(() => {
    document.addEventListener("keydown", C), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : "")), t(2, f = c || 0.5);
  }), mb(() => {
    document.removeEventListener("keydown", C);
  });
  function k() {
    f = hb(this.value), t(2, f), t(16, c);
  }
  const W = () => u(0), x = () => u(-1), B = () => u(1);
  return i.$$set = (b) => {
    "label" in b && t(13, n = b.label), "currentLabel" in b && t(0, s = b.currentLabel), "choices" in b && t(4, l = b.choices), "choicesColors" in b && t(14, o = b.choicesColors), "color" in b && t(15, r = b.color), "currentColor" in b && t(1, a = b.currentColor), "opacity" in b && t(16, c = b.opacity), "currentOpacity" in b && t(2, f = b.currentOpacity), "showRemove" in b && t(5, h = b.showRemove), "labelDetailLock" in b && t(3, d = b.labelDetailLock), "showOpacity" in b && t(6, _ = b.showOpacity);
  }, i.$$.update = () => {
    i.$$.dirty & /*label*/
    8192 && t(0, s = n || ""), i.$$.dirty & /*color*/
    32768 && t(1, a = r || ""), i.$$.dirty & /*opacity*/
    65536 && t(2, f = c || 0.5);
  }, [
    s,
    a,
    f,
    d,
    l,
    h,
    _,
    u,
    v,
    p,
    y,
    w,
    S,
    n,
    o,
    r,
    c,
    k,
    W,
    x,
    B
  ];
}
class la extends ab {
  constructor(e) {
    super(), rb(this, e, yb, kb, fb, {
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
  SvelteComponent: Cb,
  append: Ee,
  attr: xe,
  detach: Df,
  element: lt,
  empty: Sb,
  init: Mb,
  insert: Xf,
  listen: rn,
  noop: $r,
  run_all: zb,
  safe_not_equal: Wb,
  set_data: xb,
  set_input_value: Us,
  set_style: Ns,
  space: qn,
  text: ec,
  to_number: Ko
} = window.__gradio__svelte__internal, { createEventDispatcher: Bb } = window.__gradio__svelte__internal;
function tc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, v, p, y, w, S, C, k, W, x, B, b, z, D, P;
  return {
    c() {
      e = lt("div"), t = lt("div"), n = lt("div"), s = lt("h3"), s.textContent = "Eraser Settings", l = qn(), o = lt("button"), o.textContent = "×", r = qn(), a = lt("div"), c = lt("div"), f = lt("label"), f.textContent = "Eraser Size:", h = qn(), d = lt("div"), _ = lt("input"), g = qn(), u = lt("input"), v = qn(), p = lt("div"), y = lt("div"), w = qn(), S = lt("span"), C = ec(
        /*tempSize*/
        i[1]
      ), k = ec("px"), W = qn(), x = lt("div"), B = lt("button"), B.textContent = "Cancel", b = qn(), z = lt("button"), z.textContent = "Apply", xe(s, "id", "eraser-settings-title"), xe(s, "class", "svelte-a42w5h"), xe(o, "class", "close-button svelte-a42w5h"), xe(o, "aria-label", "Close"), xe(n, "class", "modal-header svelte-a42w5h"), xe(f, "for", "eraser-size"), xe(f, "class", "svelte-a42w5h"), xe(_, "id", "eraser-size"), xe(_, "type", "range"), xe(_, "min", "1"), xe(_, "max", "50"), xe(_, "class", "size-slider svelte-a42w5h"), xe(u, "type", "number"), xe(u, "min", "1"), xe(u, "max", "50"), xe(u, "class", "size-input svelte-a42w5h"), xe(d, "class", "size-controls svelte-a42w5h"), xe(y, "class", "preview-circle svelte-a42w5h"), Ns(y, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Ns(y, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), xe(S, "class", "size-label svelte-a42w5h"), xe(p, "class", "size-preview svelte-a42w5h"), xe(c, "class", "setting-group svelte-a42w5h"), xe(a, "class", "modal-body svelte-a42w5h"), xe(B, "class", "button secondary svelte-a42w5h"), xe(z, "class", "button primary svelte-a42w5h"), xe(x, "class", "modal-footer svelte-a42w5h"), xe(t, "class", "modal-content svelte-a42w5h"), xe(e, "class", "modal-backdrop svelte-a42w5h"), xe(e, "role", "dialog"), xe(e, "aria-modal", "true"), xe(e, "aria-labelledby", "eraser-settings-title");
    },
    m(A, Y) {
      Xf(A, e, Y), Ee(e, t), Ee(t, n), Ee(n, s), Ee(n, l), Ee(n, o), Ee(t, r), Ee(t, a), Ee(a, c), Ee(c, f), Ee(c, h), Ee(c, d), Ee(d, _), Us(
        _,
        /*tempSize*/
        i[1]
      ), Ee(d, g), Ee(d, u), Us(
        u,
        /*tempSize*/
        i[1]
      ), Ee(c, v), Ee(c, p), Ee(p, y), Ee(p, w), Ee(p, S), Ee(S, C), Ee(S, k), Ee(t, W), Ee(t, x), Ee(x, B), Ee(x, b), Ee(x, z), D || (P = [
        rn(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        rn(
          _,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        rn(
          _,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        rn(
          _,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        rn(
          u,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        rn(
          u,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        rn(
          B,
          "click",
          /*handleClose*/
          i[3]
        ),
        rn(
          z,
          "click",
          /*click_handler*/
          i[9]
        ),
        rn(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        rn(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], D = !0);
    },
    p(A, Y) {
      Y & /*tempSize*/
      2 && Us(
        _,
        /*tempSize*/
        A[1]
      ), Y & /*tempSize*/
      2 && Ko(u.value) !== /*tempSize*/
      A[1] && Us(
        u,
        /*tempSize*/
        A[1]
      ), Y & /*tempSize*/
      2 && Ns(y, "width", Math.min(
        /*tempSize*/
        A[1],
        30
      ) + "px"), Y & /*tempSize*/
      2 && Ns(y, "height", Math.min(
        /*tempSize*/
        A[1],
        30
      ) + "px"), Y & /*tempSize*/
      2 && xb(
        C,
        /*tempSize*/
        A[1]
      );
    },
    d(A) {
      A && Df(e), D = !1, zb(P);
    }
  };
}
function Db(i) {
  let e, t = (
    /*visible*/
    i[0] && tc(i)
  );
  return {
    c() {
      t && t.c(), e = Sb();
    },
    m(n, s) {
      t && t.m(n, s), Xf(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = tc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: $r,
    o: $r,
    d(n) {
      n && Df(e), t && t.d(n);
    }
  };
}
function Xb(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = Bb();
  let o = n;
  function r() {
    l("change", { size: o });
  }
  function a() {
    l("close");
  }
  function c(g) {
    g.key === "Escape" ? a() : g.key === "Enter" && (r(), a());
  }
  function f(g) {
    g.target === g.currentTarget && a();
  }
  function h() {
    o = Ko(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = Ko(this.value), t(1, o), t(0, s), t(6, n);
  }
  const _ = () => {
    r(), a();
  };
  return i.$$set = (g) => {
    "eraserSize" in g && t(6, n = g.eraserSize), "visible" in g && t(0, s = g.visible);
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
    d,
    _
  ];
}
class Yb extends Cb {
  constructor(e) {
    super(), Mb(this, e, Xb, Db, Wb, { eraserSize: 6, visible: 0 });
  }
}
const {
  SvelteComponent: Eb,
  append: ee,
  attr: N,
  detach: Yf,
  element: ve,
  empty: Rb,
  init: Lb,
  insert: Ef,
  listen: Oe,
  noop: nc,
  run_all: qb,
  safe_not_equal: Pb,
  set_data: So,
  set_input_value: Pt,
  set_style: Xi,
  space: et,
  text: Yi,
  to_number: wn
} = window.__gradio__svelte__internal, { createEventDispatcher: Hb } = window.__gradio__svelte__internal;
function ic(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, v, p, y, w, S, C = Math.round(
    /*tempOpacity*/
    i[1] * 100
  ) + "", k, W, x, B, b, z, D, P, A, Y, L, Z, q, F, J, U, j, fe, ne, T, Pe, R, O, re, I, ye, X, de, _e, ke, We, pe, ie, Xe, at, zt, Je, dt, E;
  return {
    c() {
      e = ve("div"), t = ve("div"), n = ve("div"), s = ve("h3"), s.textContent = "Shape Settings", l = et(), o = ve("button"), o.textContent = "×", r = et(), a = ve("div"), c = ve("div"), f = ve("label"), f.textContent = "Opacity:", h = et(), d = ve("div"), _ = ve("input"), g = et(), u = ve("input"), v = et(), p = ve("div"), y = ve("div"), w = et(), S = ve("span"), k = Yi(C), W = Yi("%"), x = et(), B = ve("div"), b = ve("label"), b.textContent = "Border Width:", z = et(), D = ve("div"), P = ve("input"), A = et(), Y = ve("input"), L = et(), Z = ve("div"), q = ve("div"), F = et(), J = ve("span"), U = Yi(
        /*tempStrokeWidth*/
        i[2]
      ), j = Yi("px"), fe = et(), ne = ve("div"), T = ve("label"), T.textContent = "Selected Border Width:", Pe = et(), R = ve("div"), O = ve("input"), re = et(), I = ve("input"), ye = et(), X = ve("div"), de = ve("div"), _e = et(), ke = ve("span"), We = Yi(
        /*tempSelectedStrokeWidth*/
        i[3]
      ), pe = Yi("px"), ie = et(), Xe = ve("div"), at = ve("button"), at.textContent = "Cancel", zt = et(), Je = ve("button"), Je.textContent = "Apply", N(s, "id", "shape-settings-title"), N(s, "class", "svelte-dfhagh"), N(o, "class", "close-button svelte-dfhagh"), N(o, "aria-label", "Close"), N(n, "class", "modal-header svelte-dfhagh"), N(f, "for", "shape-opacity"), N(f, "class", "svelte-dfhagh"), N(_, "id", "shape-opacity"), N(_, "type", "range"), N(_, "min", "0"), N(_, "max", "1"), N(_, "step", "0.05"), N(_, "class", "settings-slider svelte-dfhagh"), N(u, "type", "number"), N(u, "min", "0"), N(u, "max", "1"), N(u, "step", "0.05"), N(u, "class", "settings-input svelte-dfhagh"), N(d, "class", "slider-controls svelte-dfhagh"), N(y, "class", "opacity-preview svelte-dfhagh"), Xi(
        y,
        "opacity",
        /*tempOpacity*/
        i[1]
      ), N(S, "class", "setting-label svelte-dfhagh"), N(p, "class", "preview-container svelte-dfhagh"), N(c, "class", "setting-group svelte-dfhagh"), N(b, "for", "stroke-width"), N(b, "class", "svelte-dfhagh"), N(P, "id", "stroke-width"), N(P, "type", "range"), N(P, "min", "1"), N(P, "max", "10"), N(P, "class", "settings-slider svelte-dfhagh"), N(Y, "type", "number"), N(Y, "min", "1"), N(Y, "max", "10"), N(Y, "class", "settings-input svelte-dfhagh"), N(D, "class", "slider-controls svelte-dfhagh"), N(q, "class", "stroke-preview svelte-dfhagh"), Xi(q, "border-width", Math.min(
        /*tempStrokeWidth*/
        i[2],
        5
      ) + "px"), N(J, "class", "setting-label svelte-dfhagh"), N(Z, "class", "preview-container svelte-dfhagh"), N(B, "class", "setting-group svelte-dfhagh"), N(T, "for", "selected-stroke-width"), N(T, "class", "svelte-dfhagh"), N(O, "id", "selected-stroke-width"), N(O, "type", "range"), N(O, "min", "1"), N(O, "max", "15"), N(O, "class", "settings-slider svelte-dfhagh"), N(I, "type", "number"), N(I, "min", "1"), N(I, "max", "15"), N(I, "class", "settings-input svelte-dfhagh"), N(R, "class", "slider-controls svelte-dfhagh"), N(de, "class", "stroke-preview selected svelte-dfhagh"), Xi(de, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        i[3],
        5
      ) + "px"), N(ke, "class", "setting-label svelte-dfhagh"), N(X, "class", "preview-container svelte-dfhagh"), N(ne, "class", "setting-group svelte-dfhagh"), N(a, "class", "modal-body svelte-dfhagh"), N(at, "class", "button secondary svelte-dfhagh"), N(Je, "class", "button primary svelte-dfhagh"), N(Xe, "class", "modal-footer svelte-dfhagh"), N(t, "class", "modal-content svelte-dfhagh"), N(e, "class", "modal-backdrop svelte-dfhagh"), N(e, "role", "dialog"), N(e, "aria-modal", "true"), N(e, "aria-labelledby", "shape-settings-title");
    },
    m(me, Ce) {
      Ef(me, e, Ce), ee(e, t), ee(t, n), ee(n, s), ee(n, l), ee(n, o), ee(t, r), ee(t, a), ee(a, c), ee(c, f), ee(c, h), ee(c, d), ee(d, _), Pt(
        _,
        /*tempOpacity*/
        i[1]
      ), ee(d, g), ee(d, u), Pt(
        u,
        /*tempOpacity*/
        i[1]
      ), ee(c, v), ee(c, p), ee(p, y), ee(p, w), ee(p, S), ee(S, k), ee(S, W), ee(a, x), ee(a, B), ee(B, b), ee(B, z), ee(B, D), ee(D, P), Pt(
        P,
        /*tempStrokeWidth*/
        i[2]
      ), ee(D, A), ee(D, Y), Pt(
        Y,
        /*tempStrokeWidth*/
        i[2]
      ), ee(B, L), ee(B, Z), ee(Z, q), ee(Z, F), ee(Z, J), ee(J, U), ee(J, j), ee(a, fe), ee(a, ne), ee(ne, T), ee(ne, Pe), ee(ne, R), ee(R, O), Pt(
        O,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ee(R, re), ee(R, I), Pt(
        I,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ee(ne, ye), ee(ne, X), ee(X, de), ee(X, _e), ee(X, ke), ee(ke, We), ee(ke, pe), ee(t, ie), ee(t, Xe), ee(Xe, at), ee(Xe, zt), ee(Xe, Je), dt || (E = [
        Oe(
          o,
          "click",
          /*handleClose*/
          i[5]
        ),
        Oe(
          _,
          "change",
          /*input0_change_input_handler*/
          i[11]
        ),
        Oe(
          _,
          "input",
          /*input0_change_input_handler*/
          i[11]
        ),
        Oe(
          _,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Oe(
          u,
          "input",
          /*input1_input_handler*/
          i[12]
        ),
        Oe(
          u,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Oe(
          P,
          "change",
          /*input2_change_input_handler*/
          i[13]
        ),
        Oe(
          P,
          "input",
          /*input2_change_input_handler*/
          i[13]
        ),
        Oe(
          P,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Oe(
          Y,
          "input",
          /*input3_input_handler*/
          i[14]
        ),
        Oe(
          Y,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Oe(
          O,
          "change",
          /*input4_change_input_handler*/
          i[15]
        ),
        Oe(
          O,
          "input",
          /*input4_change_input_handler*/
          i[15]
        ),
        Oe(
          O,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Oe(
          I,
          "input",
          /*input5_input_handler*/
          i[16]
        ),
        Oe(
          I,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Oe(
          at,
          "click",
          /*handleClose*/
          i[5]
        ),
        Oe(
          Je,
          "click",
          /*click_handler*/
          i[17]
        ),
        Oe(
          e,
          "click",
          /*handleBackdropClick*/
          i[7]
        ),
        Oe(
          e,
          "keydown",
          /*handleKeydown*/
          i[6]
        )
      ], dt = !0);
    },
    p(me, Ce) {
      Ce & /*tempOpacity*/
      2 && Pt(
        _,
        /*tempOpacity*/
        me[1]
      ), Ce & /*tempOpacity*/
      2 && wn(u.value) !== /*tempOpacity*/
      me[1] && Pt(
        u,
        /*tempOpacity*/
        me[1]
      ), Ce & /*tempOpacity*/
      2 && Xi(
        y,
        "opacity",
        /*tempOpacity*/
        me[1]
      ), Ce & /*tempOpacity*/
      2 && C !== (C = Math.round(
        /*tempOpacity*/
        me[1] * 100
      ) + "") && So(k, C), Ce & /*tempStrokeWidth*/
      4 && Pt(
        P,
        /*tempStrokeWidth*/
        me[2]
      ), Ce & /*tempStrokeWidth*/
      4 && wn(Y.value) !== /*tempStrokeWidth*/
      me[2] && Pt(
        Y,
        /*tempStrokeWidth*/
        me[2]
      ), Ce & /*tempStrokeWidth*/
      4 && Xi(q, "border-width", Math.min(
        /*tempStrokeWidth*/
        me[2],
        5
      ) + "px"), Ce & /*tempStrokeWidth*/
      4 && So(
        U,
        /*tempStrokeWidth*/
        me[2]
      ), Ce & /*tempSelectedStrokeWidth*/
      8 && Pt(
        O,
        /*tempSelectedStrokeWidth*/
        me[3]
      ), Ce & /*tempSelectedStrokeWidth*/
      8 && wn(I.value) !== /*tempSelectedStrokeWidth*/
      me[3] && Pt(
        I,
        /*tempSelectedStrokeWidth*/
        me[3]
      ), Ce & /*tempSelectedStrokeWidth*/
      8 && Xi(de, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        me[3],
        5
      ) + "px"), Ce & /*tempSelectedStrokeWidth*/
      8 && So(
        We,
        /*tempSelectedStrokeWidth*/
        me[3]
      );
    },
    d(me) {
      me && Yf(e), dt = !1, qb(E);
    }
  };
}
function jb(i) {
  let e, t = (
    /*visible*/
    i[0] && ic(i)
  );
  return {
    c() {
      t && t.c(), e = Rb();
    },
    m(n, s) {
      t && t.m(n, s), Ef(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = ic(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: nc,
    o: nc,
    d(n) {
      n && Yf(e), t && t.d(n);
    }
  };
}
function Ib(i, e, t) {
  let { opacity: n = 0.5 } = e, { strokeWidth: s = 2 } = e, { selectedStrokeWidth: l = 4 } = e, { visible: o = !1 } = e;
  const r = Hb();
  let a = n, c = s, f = l;
  function h() {
    r("change", {
      opacity: a,
      strokeWidth: c,
      selectedStrokeWidth: f
    });
  }
  function d() {
    r("close");
  }
  function _(k) {
    k.key === "Escape" ? d() : k.key === "Enter" && (h(), d());
  }
  function g(k) {
    k.target === k.currentTarget && d();
  }
  function u() {
    a = wn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function v() {
    a = wn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function p() {
    c = wn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function y() {
    c = wn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function w() {
    f = wn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function S() {
    f = wn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  const C = () => {
    h(), d();
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
    d,
    _,
    g,
    n,
    s,
    l,
    u,
    v,
    p,
    y,
    w,
    S,
    C
  ];
}
class Ab extends Eb {
  constructor(e) {
    super(), Lb(this, e, Ib, jb, Pb, {
      opacity: 8,
      strokeWidth: 9,
      selectedStrokeWidth: 10,
      visible: 0
    });
  }
}
function Lt(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const tt = (i, e, t) => Math.min(Math.max(i, e), t);
class Qn {
  constructor(e, t, n, s, l, o, r, a, c, f, h, d, _ = "rgb(255, 255, 255)", g = 0.5, u = 25, v = 8, p = 2, y = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (S) => {
      if (this.isDragging) {
        let C = (S.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, k = (S.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = tt(C, -this._xmin, W - this._xmax), k = tt(k, -this._ymin, x - this._ymax), this._xmin += C, this._ymin += k, this._xmax += C, this._ymax += k, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (S) => {
      if (this.isCreating) {
        let [C, k] = this.toBoxCoordinates(S.clientX, S.clientY);
        C = (C - this.offsetMouseX) / this.canvasWindow.scale, k = (k - this.offsetMouseY) / this.canvasWindow.scale, C > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = C, this.creatingAnchorX = "xmin") : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = C : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = C : C < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = C, this.creatingAnchorX = "xmax"), k > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = k, this.creatingAnchorY = "ymin") : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = k : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = k : k < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = k, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (S) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = tt(this._xmin, 0, C - this.minSize), this._ymin = tt(this._ymin, 0, k - this.minSize), this._xmax = tt(this._xmax, this.minSize, C), this._ymax = tt(this._ymax, this.minSize, k), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > C ? (this._xmin -= this._xmax - C, this._xmax = C) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > k ? (this._ymin -= this._ymax - k, this._ymax = k) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (S) => {
      if (this.isResizing) {
        const C = S.clientX, k = S.clientY, W = (C - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, x = (k - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, b = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += W, this._ymin += x, this._xmin = tt(this._xmin, 0, this._xmax - this.minSize), this._ymin = tt(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += W, this._ymin += x, this._xmax = tt(this._xmax, this._xmin + this.minSize, B), this._ymin = tt(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += W, this._ymax += x, this._xmax = tt(this._xmax, this._xmin + this.minSize, B), this._ymax = tt(this._ymax, this._ymin + this.minSize, b);
            break;
          case 3:
            this._xmin += W, this._ymax += x, this._xmin = tt(this._xmin, 0, this._xmax - this.minSize), this._ymax = tt(this._ymax, this._ymin + this.minSize, b);
            break;
          case 4:
            this._ymin += x, this._ymin = tt(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += W, this._xmax = tt(this._xmax, this._xmin + this.minSize, B);
            break;
          case 6:
            this._ymax += x, this._ymax = tt(this._ymax, this._ymin + this.minSize, b);
            break;
          case 7:
            this._xmin += W, this._xmin = tt(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = w, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = h, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = v, this.thickness = p, this.selectedThickness = y, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = u, this.color = _, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [n, s] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, s, this.getWidth(), this.getHeight()), e.fillStyle = Lt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Lt(this.color, 1), e.stroke(), e.closePath(), t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let r = this.xmin, a = this.ymin - o;
      e.fillStyle = "white", [r, a] = this.toCanvasCoordinates(r, a), e.fillRect(r, a, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, l, o), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
    if (this.isSelected) {
      e.fillStyle = Lt(this.color, 1);
      for (const l of this.resizeHandles)
        [n, s] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
          n,
          s,
          l.xmax - l.xmin,
          l.ymax - l.ymin
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
const sc = (i, e, t) => Math.min(Math.max(i, e), t);
class $n {
  constructor(e, t, n, s, l, o, r, a, c, f, h, d = "rgb(255, 255, 255)", _ = 0.5, g = 25, u = 8, v = 2, p = 4, y = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (w) => {
      if (this.isDragging) {
        const S = document.querySelector("canvas");
        if (S) {
          const C = S.getBoundingClientRect(), k = w.clientX - C.left, W = w.clientY - C.top, [x, B] = this.toBoxCoordinates(k, W);
          let b = x - this.offsetMouseX, z = B - this.offsetMouseY;
          const D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, P = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          b = sc(b, this._radius, D - this._radius), z = sc(z, this._radius, P - this._radius), this._centerX = b, this._centerY = z, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (w) => {
      if (this.isCreating) {
        const S = document.querySelector("canvas");
        if (S) {
          const C = S.getBoundingClientRect(), k = (w.clientX - C.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, W = (w.clientY - C.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, x = k - this.offsetMouseX, B = W - this.offsetMouseY, b = Math.sqrt(x * x + B * B);
          this._radius = Math.max(b, 5), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (w) => {
      if (this.isResizing) {
        const S = document.querySelector("canvas");
        if (S) {
          const C = S.getBoundingClientRect(), k = w.clientX - C.left, W = w.clientY - C.top, [x, B] = this.toBoxCoordinates(k, W), b = Math.sqrt(
            Math.pow(x - this._centerX, 2) + Math.pow(B - this._centerY, 2)
          );
          this._radius = Math.max(b, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = y, this.label = a, this.isDragging = !1, this.isCreating = !1, this._centerX = c, this._centerY = f, this._radius = h, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = u, this.thickness = v, this.selectedThickness = p, this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = _, this.applyUserScale(), this.updateHandles();
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
    if (e.beginPath(), e.arc(n, s, l, 0, 2 * Math.PI), e.fillStyle = Lt(this.color, this.alpha), e.fill(), e.strokeStyle = this.color, e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.stroke(), this.isSelected) {
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
  startCreating(e) {
    this.isCreating = !0;
    const t = document.querySelector("canvas");
    if (t) {
      const n = t.getBoundingClientRect();
      this._centerX = (e.clientX - n.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, this._centerY = (e.clientY - n.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, this.offsetMouseX = this._centerX, this.offsetMouseY = this._centerY;
    }
    document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.isResizing = !0, this.resizingHandleIndex = e, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
  }
}
class An {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, h = 25, d = 8, _ = 2, g = 4, u = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (v) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (v.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (v.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, w - this._xmax)), y = Math.max(-this._ymin, Math.min(y, S - this._ymax)), this._points = this._points.map((C) => ({
          x: C.x + p,
          y: C.y + y
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (v) => {
      if (this.isCreating) {
        const p = document.querySelector("canvas");
        if (p) {
          const y = p.getBoundingClientRect(), w = (v.clientX - y.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (v.clientY - y.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, C = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(w - C.x, 2) + Math.pow(S - C.y, 2)) > 2 && (this._points.push({ x: w, y: S }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (v) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((w) => ({
          x: Math.max(0, Math.min(w.x, p)),
          y: Math.max(0, Math.min(w.y, y))
        })), this.updateBoundingBox(), this.renderCallBack(), console.log("Freehand path coordinates:", this._points), console.log("Number of points:", this._points.length), console.log("Bounding box:", {
          xmin: this._xmin,
          ymin: this._ymin,
          xmax: this._xmax,
          ymax: this._ymax
        });
      }
      this.onFinishCreation();
    }, this.handleResize = (v) => {
      if (this.isResizing && this._points.length > 0) {
        const p = v.clientX, y = v.clientY, w = document.querySelector("canvas");
        if (w) {
          const S = w.getBoundingClientRect(), C = p - S.left, k = y - S.top, W = (C - this.canvasWindow.offsetX) / this.canvasWindow.scale, x = (k - this.canvasWindow.offsetY) / this.canvasWindow.scale, B = this.getControlPointIndex(this.resizingHandleIndex);
          if (B >= 0 && B < this._points.length) {
            const b = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, D = Math.max(0, Math.min(W, b)), P = Math.max(0, Math.min(x, z)), A = D - this._points[B].x, Y = P - this._points[B].y;
            this.applyLocalDeformation(B, A, Y), this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = u, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = _, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = h, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
        e.closePath(), e.fillStyle = Lt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Lt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke();
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
      e.fillStyle = Lt(this.color, 1);
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
    e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Lt(this.color, 1), e.lineCap = "round", e.lineJoin = "round";
    let n = !1;
    for (let s = 0; s < this.points.length; s++) {
      const [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
      (s < t.length ? t[s] : !0) ? n ? e.lineTo(l, o) : (e.beginPath(), e.moveTo(l, o), n = !0) : n && (e.stroke(), n = !1);
    }
    if (n && e.stroke(), this.alpha > 0) {
      e.fillStyle = Lt(this.color, this.alpha);
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
class Gt {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, h = 25, d = 8, _ = 2, g = 4, u = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (v) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (v.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (v.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, w - this._xmax)), y = Math.max(-this._ymin, Math.min(y, S - this._ymax)), this._points = this._points.map((C) => ({
          x: C.x + p,
          y: C.y + y
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (v) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (v) => {
      this.isCreating && v.code === "Space" && this._points.length >= this.minPoints && (v.preventDefault(), this.finishCreating());
    }, this.handleResize = (v) => {
      if (this.isResizing && this._points.length > 0) {
        const p = v.clientX, y = v.clientY, w = document.querySelector("canvas");
        if (w) {
          const S = w.getBoundingClientRect(), C = p - S.left, k = y - S.top, W = (C - this.canvasWindow.offsetX) / this.canvasWindow.scale, x = (k - this.canvasWindow.offsetY) / this.canvasWindow.scale, B = this.getPolygonVertexIndex(this.resizingHandleIndex);
          if (B >= 0 && B < this._points.length) {
            const b = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, D = Math.max(0, Math.min(W, b)), P = Math.max(0, Math.min(x, z)), A = D - this._points[B].x, Y = P - this._points[B].y;
            this._points.length > 6 ? this.applyPolygonLocalDeformation(B, A, Y) : this._points[B] = { x: D, y: P }, this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = u, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = _, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = h, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = Lt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Lt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = Lt(this.color, 1);
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
        e.fillStyle = Lt(this.color, 1);
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
      const c = Math.exp(-a * 1.2), f = t * c, h = n * c, d = (e - a + s) % s;
      this._points[d].x += f, this._points[d].y += h;
      const _ = (e + a) % s;
      this._points[_].x += f, this._points[_].y += h;
    }
    const o = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, r = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((a) => ({
      x: Math.max(0, Math.min(a.x, o)),
      y: Math.max(0, Math.min(a.y, r))
    }));
  }
}
class Tb {
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
    return e instanceof Qn ? this.eraseFromBox(e, n) : e instanceof $n ? this.eraseFromCircle(e, n) : e instanceof An ? this.eraseFromFreehand(e, n) : e instanceof Gt ? this.eraseFromPolygon(e, n) : [e];
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
      const f = e[c], h = f.x - t, d = f.y - n;
      if (this.maskCtx.beginPath(), this.maskCtx.arc(h, d, o, 0, 2 * Math.PI), this.maskCtx.fill(), c > 0) {
        const _ = e[c - 1], g = _.x - t, u = _.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(g, u), this.maskCtx.lineTo(h, d), this.maskCtx.stroke();
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
    const t = new Gt(
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
      const c = Math.random() * 2 * Math.PI, f = Math.sqrt(Math.random()) * l, h = n + f * Math.cos(c), d = s + f * Math.sin(c);
      this.isPointErased({ x: h, y: d }, t) && r++;
    }
    return r / o;
  }
  /**
   * Convert circle to polygon for uniform mask-based processing
   */
  circleToPolygon(e) {
    const t = new Gt(
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
    ), n = 16, s = [];
    for (let l = 0; l < n; l++) {
      const o = l / n * 2 * Math.PI, r = e._centerX + e._radius * Math.cos(o), a = e._centerY + e._radius * Math.sin(o);
      s.push({ x: r, y: a });
    }
    return t._points = s, t.updateBoundingBox(), t;
  }
  /**
   * Convert freehand path to polygon for uniform processing
   */
  freehandToPolygon(e) {
    const t = new Gt(
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
    const n = new An(
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
      const h = o > 0 ? f / o : 0, d = {
        x: e.x + (t.x - e.x) * h,
        y: e.y + (t.y - e.y) * h
      }, _ = [
        d,
        { x: d.x + r, y: d.y },
        { x: d.x - r, y: d.y },
        { x: d.x, y: d.y + r },
        { x: d.x, y: d.y - r }
      ];
      for (const g of _)
        if (this.isPointErased(g, n)) {
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
      const r = e._points[o], a = e._points[(o + 1) % e._points.length], c = this.isPointErased(r, t);
      c || n.push(r);
      const f = this.isPointErased(a, t);
      if (c !== f) {
        const h = this.findEraserEdge(
          c ? a : r,
          c ? r : a,
          t
        );
        if (h) {
          const d = n[n.length - 1];
          (!d || Math.sqrt(Math.pow(h.x - d.x, 2) + Math.pow(h.y - d.y, 2)) > 2) && n.push(h);
        }
      }
    }
    const s = [];
    for (let o = 0; o < n.length; o++) {
      const r = n[o], a = s[s.length - 1];
      (!a || Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)) > 1.5) && s.push(r);
    }
    if (s.length < 3) return [];
    const l = new Gt(
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
const ft = [
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
], Vs = (i, e, t) => Math.min(Math.max(i, e), t);
class Fb {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Vs(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Vs(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Vs(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Vs(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: Ob,
  add_flush_callback: Ei,
  append: V,
  attr: G,
  bind: Ri,
  binding_callbacks: ei,
  bubble: Mo,
  check_outros: Ai,
  create_component: Ve,
  destroy_component: Ke,
  detach: cn,
  element: ae,
  group_outros: Ti,
  init: Ub,
  insert: fn,
  is_function: Nb,
  listen: je,
  mount_component: Ze,
  noop: Rf,
  run_all: Lf,
  safe_not_equal: Vb,
  set_style: Ks,
  space: Se,
  toggle_class: ot,
  transition_in: he,
  transition_out: ze
} = window.__gradio__svelte__internal, { onMount: Kb, onDestroy: Zb, createEventDispatcher: Jb } = window.__gradio__svelte__internal;
function lc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, v, p, y, w, S, C, k, W, x, B, b, z, D, P, A, Y, L, Z, q, F, J, U, j, fe, ne, T, Pe, R, O, re, I, ye, X, de, _e, ke, We, pe, ie, Xe, at, zt, Je, dt, E, me, Ce, Ge, en, Wt, De, rt, tn, Wn, gt, Qe, Ji, ks;
  s = new $0({}), f = new _p({}), v = new mg({}), k = new kp({}), P = new xp({}), L = new Xr({}), j = new Dg({});
  let Ie = (
    /*showRemoveButton*/
    i[3] && oc(i)
  ), Ae = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[24] && ac(i);
  return I = new Lp({}), We = new Tp({}), dt = new ag({
    props: { selected: (
      /*labelVisibility*/
      i[25]
    ) }
  }), Ce = new Xr({}), tn = new yg({}), {
    c() {
      e = ae("span"), t = ae("div"), n = ae("button"), Ve(s.$$.fragment), l = Se(), o = ae("span"), o.textContent = "Box", r = Se(), a = ae("div"), c = ae("button"), Ve(f.$$.fragment), h = Se(), d = ae("span"), d.textContent = "Freehand", _ = Se(), g = ae("div"), u = ae("button"), Ve(v.$$.fragment), p = Se(), y = ae("span"), y.textContent = "Circle", w = Se(), S = ae("div"), C = ae("button"), Ve(k.$$.fragment), W = Se(), x = ae("span"), x.textContent = "Polygon", B = Se(), b = ae("div"), z = ae("div"), D = ae("button"), Ve(P.$$.fragment), A = Se(), Y = ae("button"), Ve(L.$$.fragment), Z = Se(), q = ae("span"), q.textContent = "Eraser", F = Se(), J = ae("div"), U = ae("button"), Ve(j.$$.fragment), fe = Se(), ne = ae("span"), ne.textContent = "Move", T = Se(), Ie && Ie.c(), Pe = Se(), Ae && Ae.c(), R = Se(), O = ae("div"), re = ae("button"), Ve(I.$$.fragment), ye = Se(), X = ae("span"), X.textContent = "Undo", de = Se(), _e = ae("div"), ke = ae("button"), Ve(We.$$.fragment), pe = Se(), ie = ae("span"), ie.textContent = "Redo", Xe = Se(), at = ae("div"), zt = ae("div"), Je = ae("button"), Ve(dt.$$.fragment), E = Se(), me = ae("button"), Ve(Ce.$$.fragment), Ge = Se(), en = ae("span"), en.textContent = "Labels", Wt = Se(), De = ae("div"), rt = ae("button"), Ve(tn.$$.fragment), Wn = Se(), gt = ae("span"), gt.textContent = "Clear", G(n, "class", "icon tool-button svelte-5jh9j1"), G(n, "aria-label", "Create box"), ot(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), G(o, "class", "tool-label svelte-5jh9j1"), G(t, "class", "tool-group svelte-5jh9j1"), G(c, "class", "icon tool-button svelte-5jh9j1"), G(c, "aria-label", "Freehand drawing"), ot(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), G(d, "class", "tool-label svelte-5jh9j1"), G(a, "class", "tool-group svelte-5jh9j1"), G(u, "class", "icon tool-button svelte-5jh9j1"), G(u, "aria-label", "Circle drawing"), ot(
        u,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), G(y, "class", "tool-label svelte-5jh9j1"), G(g, "class", "tool-group svelte-5jh9j1"), G(C, "class", "icon tool-button svelte-5jh9j1"), G(C, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), ot(
        C,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), G(x, "class", "tool-label svelte-5jh9j1"), G(S, "class", "tool-group svelte-5jh9j1"), G(D, "class", "icon tool-button svelte-5jh9j1"), G(D, "aria-label", "Erase areas from shapes"), ot(
        D,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), G(Y, "class", "icon dropdown-button svelte-5jh9j1"), G(Y, "aria-label", "Eraser settings"), G(z, "class", "eraser-buttons svelte-5jh9j1"), G(q, "class", "tool-label svelte-5jh9j1"), G(b, "class", "tool-group eraser-group svelte-5jh9j1"), G(U, "class", "icon tool-button svelte-5jh9j1"), G(U, "aria-label", "Edit boxes"), ot(
        U,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), G(ne, "class", "tool-label svelte-5jh9j1"), G(J, "class", "tool-group svelte-5jh9j1"), G(re, "class", "icon tool-button svelte-5jh9j1"), G(re, "aria-label", "Undo (Ctrl+Z)"), ot(
        re,
        "disabled",
        /*undoStack*/
        i[26].length === 0
      ), G(X, "class", "tool-label svelte-5jh9j1"), G(O, "class", "tool-group svelte-5jh9j1"), G(ke, "class", "icon tool-button svelte-5jh9j1"), G(ke, "aria-label", "Redo (Ctrl+Y)"), ot(
        ke,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), G(ie, "class", "tool-label svelte-5jh9j1"), G(_e, "class", "tool-group svelte-5jh9j1"), G(Je, "class", "icon tool-button svelte-5jh9j1"), G(Je, "aria-label", "Show/Hide labels"), ot(
        Je,
        "selected",
        /*labelVisibility*/
        i[25]
      ), G(me, "class", "icon dropdown-button svelte-5jh9j1"), G(me, "aria-label", "Shape settings"), G(zt, "class", "button-group svelte-5jh9j1"), G(en, "class", "tool-label svelte-5jh9j1"), G(at, "class", "tool-group svelte-5jh9j1"), G(rt, "class", "icon tool-button svelte-5jh9j1"), G(rt, "aria-label", "Clear Shapes"), G(gt, "class", "tool-label svelte-5jh9j1"), G(De, "class", "tool-group svelte-5jh9j1"), G(e, "class", "canvas-control svelte-5jh9j1");
    },
    m(te, st) {
      fn(te, e, st), V(e, t), V(t, n), Ze(s, n, null), V(t, l), V(t, o), V(e, r), V(e, a), V(a, c), Ze(f, c, null), V(a, h), V(a, d), V(e, _), V(e, g), V(g, u), Ze(v, u, null), V(g, p), V(g, y), V(e, w), V(e, S), V(S, C), Ze(k, C, null), V(S, W), V(S, x), V(e, B), V(e, b), V(b, z), V(z, D), Ze(P, D, null), V(z, A), V(z, Y), Ze(L, Y, null), V(b, Z), V(b, q), V(e, F), V(e, J), V(J, U), Ze(j, U, null), V(J, fe), V(J, ne), V(e, T), Ie && Ie.m(e, null), V(e, Pe), Ae && Ae.m(e, null), V(e, R), V(e, O), V(O, re), Ze(I, re, null), V(O, ye), V(O, X), V(e, de), V(e, _e), V(_e, ke), Ze(We, ke, null), V(_e, pe), V(_e, ie), V(e, Xe), V(e, at), V(at, zt), V(zt, Je), Ze(dt, Je, null), V(zt, E), V(zt, me), Ze(Ce, me, null), V(at, Ge), V(at, en), V(e, Wt), V(e, De), V(De, rt), Ze(tn, rt, null), V(De, Wn), V(De, gt), Qe = !0, Ji || (ks = [
        je(
          n,
          "click",
          /*click_handler*/
          i[62]
        ),
        je(
          c,
          "click",
          /*click_handler_1*/
          i[63]
        ),
        je(
          u,
          "click",
          /*click_handler_2*/
          i[64]
        ),
        je(
          C,
          "click",
          /*click_handler_3*/
          i[65]
        ),
        je(
          D,
          "click",
          /*click_handler_4*/
          i[66]
        ),
        je(
          Y,
          "click",
          /*openEraserSettings*/
          i[34]
        ),
        je(
          U,
          "click",
          /*click_handler_5*/
          i[67]
        ),
        je(
          re,
          "click",
          /*click_handler_8*/
          i[70]
        ),
        je(
          ke,
          "click",
          /*click_handler_9*/
          i[71]
        ),
        je(
          Je,
          "click",
          /*click_handler_10*/
          i[72]
        ),
        je(
          me,
          "click",
          /*openShapeSettings*/
          i[37]
        ),
        je(
          rt,
          "click",
          /*click_handler_11*/
          i[73]
        )
      ], Ji = !0);
    },
    p(te, st) {
      (!Qe || st[0] & /*mode, Mode*/
      4608) && ot(
        n,
        "selected",
        /*mode*/
        te[12] === /*Mode*/
        te[9].creation
      ), (!Qe || st[0] & /*mode, Mode*/
      4608) && ot(
        c,
        "selected",
        /*mode*/
        te[12] === /*Mode*/
        te[9].freehand
      ), (!Qe || st[0] & /*mode, Mode*/
      4608) && ot(
        u,
        "selected",
        /*mode*/
        te[12] === /*Mode*/
        te[9].circle
      ), (!Qe || st[0] & /*mode, Mode*/
      4608) && ot(
        C,
        "selected",
        /*mode*/
        te[12] === /*Mode*/
        te[9].polygon
      ), (!Qe || st[0] & /*mode, Mode*/
      4608) && ot(
        D,
        "selected",
        /*mode*/
        te[12] === /*Mode*/
        te[9].erase
      ), (!Qe || st[0] & /*mode, Mode*/
      4608) && ot(
        U,
        "selected",
        /*mode*/
        te[12] === /*Mode*/
        te[9].drag
      ), /*showRemoveButton*/
      te[3] ? Ie ? (Ie.p(te, st), st[0] & /*showRemoveButton*/
      8 && he(Ie, 1)) : (Ie = oc(te), Ie.c(), he(Ie, 1), Ie.m(e, Pe)) : Ie && (Ti(), ze(Ie, 1, 1, () => {
        Ie = null;
      }), Ai()), !/*disableEditBoxes*/
      te[5] && /*labelDetailLock*/
      te[24] ? Ae ? (Ae.p(te, st), st[0] & /*disableEditBoxes, labelDetailLock*/
      16777248 && he(Ae, 1)) : (Ae = ac(te), Ae.c(), he(Ae, 1), Ae.m(e, R)) : Ae && (Ti(), ze(Ae, 1, 1, () => {
        Ae = null;
      }), Ai()), (!Qe || st[0] & /*redoStack*/
      8192) && ot(
        ke,
        "disabled",
        /*redoStack*/
        te[13].length === 0
      );
      const ys = {};
      st[0] & /*labelVisibility*/
      33554432 && (ys.selected = /*labelVisibility*/
      te[25]), dt.$set(ys), (!Qe || st[0] & /*labelVisibility*/
      33554432) && ot(
        Je,
        "selected",
        /*labelVisibility*/
        te[25]
      );
    },
    i(te) {
      Qe || (he(s.$$.fragment, te), he(f.$$.fragment, te), he(v.$$.fragment, te), he(k.$$.fragment, te), he(P.$$.fragment, te), he(L.$$.fragment, te), he(j.$$.fragment, te), he(Ie), he(Ae), he(I.$$.fragment, te), he(We.$$.fragment, te), he(dt.$$.fragment, te), he(Ce.$$.fragment, te), he(tn.$$.fragment, te), Qe = !0);
    },
    o(te) {
      ze(s.$$.fragment, te), ze(f.$$.fragment, te), ze(v.$$.fragment, te), ze(k.$$.fragment, te), ze(P.$$.fragment, te), ze(L.$$.fragment, te), ze(j.$$.fragment, te), ze(Ie), ze(Ae), ze(I.$$.fragment, te), ze(We.$$.fragment, te), ze(dt.$$.fragment, te), ze(Ce.$$.fragment, te), ze(tn.$$.fragment, te), Qe = !1;
    },
    d(te) {
      te && cn(e), Ke(s), Ke(f), Ke(v), Ke(k), Ke(P), Ke(L), Ke(j), Ie && Ie.d(), Ae && Ae.d(), Ke(I), Ke(We), Ke(dt), Ke(Ce), Ke(tn), Ji = !1, Lf(ks);
    }
  };
}
function oc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Hg({}), {
    c() {
      e = ae("div"), t = ae("button"), Ve(n.$$.fragment), s = Se(), l = ae("span"), l.textContent = "Delete", G(t, "class", "icon tool-button svelte-5jh9j1"), G(t, "aria-label", "Remove boxes"), G(l, "class", "tool-label svelte-5jh9j1"), G(e, "class", "tool-group svelte-5jh9j1");
    },
    m(c, f) {
      fn(c, e, f), V(e, t), Ze(n, t, null), V(e, s), V(e, l), o = !0, r || (a = je(
        t,
        "click",
        /*click_handler_6*/
        i[68]
      ), r = !0);
    },
    p: Rf,
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ze(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && cn(e), Ke(n), r = !1, a();
    }
  };
}
function ac(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Ug({}), {
    c() {
      e = ae("div"), t = ae("button"), Ve(n.$$.fragment), s = Se(), l = ae("span"), l.textContent = "Label", G(t, "class", "icon tool-button svelte-5jh9j1"), G(t, "aria-label", "Edit label"), G(l, "class", "tool-label svelte-5jh9j1"), G(e, "class", "tool-group svelte-5jh9j1");
    },
    m(c, f) {
      fn(c, e, f), V(e, t), Ze(n, t, null), V(e, s), V(e, l), o = !0, r || (a = je(
        t,
        "click",
        /*click_handler_7*/
        i[69]
      ), r = !0);
    },
    p: Rf,
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ze(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && cn(e), Ke(n), r = !1, a();
    }
  };
}
function rc(i) {
  let e, t;
  return e = new la({
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
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length ? gi(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].color
        ) : ""
      ),
      opacity: (
        /*selectedBox*/
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].alpha
        ) : 0.5
      ),
      showOpacity: !0
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[47]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[74]
  ), {
    c() {
      Ve(e.$$.fragment);
    },
    m(n, s) {
      Ze(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      16385 && (l.label = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      16385 && (l.color = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length ? gi(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : ""), s[0] & /*selectedBox, value*/
      16385 && (l.opacity = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].alpha
      ) : 0.5), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ze(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ke(e, n);
    }
  };
}
function cc(i) {
  let e, t;
  return e = new la({
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
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length && /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[14]
        ].label || /*choices*/
        (i[1].length > 0 ? (
          /*choices*/
          i[1][0][0]
        ) : "")
      ),
      color: (
        /*selectedBox*/
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length ? gi(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
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
        i[24]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[48]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[75]
  ), {
    c() {
      Ve(e.$$.fragment);
    },
    m(n, s) {
      Ze(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value, choices*/
      16387 && (l.label = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length && /*value*/
      n[0].boxes[
        /*selectedBox*/
        n[14]
      ].label || /*choices*/
      (n[1].length > 0 ? (
        /*choices*/
        n[1][0][0]
      ) : "")), s[0] & /*selectedBox, value, choicesColors*/
      16389 && (l.color = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length ? gi(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : (
        /*choicesColors*/
        n[2].length > 0 ? (
          /*choicesColors*/
          n[2][0]
        ) : ""
      )), s[0] & /*labelDetailLock*/
      16777216 && (l.labelDetailLock = /*labelDetailLock*/
      n[24]), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ze(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ke(e, n);
    }
  };
}
function fc(i) {
  let e, t;
  return e = new la({
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
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[14] >= 0 && /*selectedBox*/
        i[14] < /*value*/
        i[0].boxes.length ? gi(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[24]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[49]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[76]
  ), {
    c() {
      Ve(e.$$.fragment);
    },
    m(n, s) {
      Ze(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      16385 && (l.label = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      16385 && (l.color = /*selectedBox*/
      n[14] >= 0 && /*selectedBox*/
      n[14] < /*value*/
      n[0].boxes.length ? gi(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      16777216 && (l.labelDetailLock = /*labelDetailLock*/
      n[24]), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ze(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ke(e, n);
    }
  };
}
function Gb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, v, p, y, w, S = (
    /*interactive*/
    i[4] && lc(i)
  ), C = (
    /*editModalVisible*/
    i[15] && rc(i)
  ), k = (
    /*newModalVisible*/
    i[16] && cc(i)
  ), W = (
    /*editDefaultLabelVisible*/
    i[17] && fc(i)
  );
  function x(L) {
    i[77](L);
  }
  function B(L) {
    i[78](L);
  }
  let b = {};
  /*eraserSettingsVisible*/
  i[18] !== void 0 && (b.visible = /*eraserSettingsVisible*/
  i[18]), /*eraserSize*/
  i[20] !== void 0 && (b.eraserSize = /*eraserSize*/
  i[20]), a = new Yb({ props: b }), ei.push(() => Ri(a, "visible", x)), ei.push(() => Ri(a, "eraserSize", B)), a.$on(
    "change",
    /*handleEraserSettingsChange*/
    i[35]
  ), a.$on(
    "close",
    /*handleEraserSettingsClose*/
    i[36]
  );
  function z(L) {
    i[79](L);
  }
  function D(L) {
    i[80](L);
  }
  function P(L) {
    i[81](L);
  }
  function A(L) {
    i[82](L);
  }
  let Y = {};
  return (
    /*shapeSettingsVisible*/
    i[19] !== void 0 && (Y.visible = /*shapeSettingsVisible*/
    i[19]), /*shapeOpacity*/
    i[21] !== void 0 && (Y.opacity = /*shapeOpacity*/
    i[21]), /*shapeStrokeWidth*/
    i[22] !== void 0 && (Y.strokeWidth = /*shapeStrokeWidth*/
    i[22]), /*shapeSelectedStrokeWidth*/
    i[23] !== void 0 && (Y.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
    i[23]), d = new Ab({ props: Y }), ei.push(() => Ri(d, "visible", z)), ei.push(() => Ri(d, "opacity", D)), ei.push(() => Ri(d, "strokeWidth", P)), ei.push(() => Ri(d, "selectedStrokeWidth", A)), d.$on(
      "change",
      /*handleShapeSettingsChange*/
      i[38]
    ), d.$on(
      "close",
      /*handleShapeSettingsClose*/
      i[39]
    ), {
      c() {
        e = ae("div"), t = ae("canvas"), n = Se(), S && S.c(), s = Se(), C && C.c(), l = Se(), k && k.c(), o = Se(), W && W.c(), r = Se(), Ve(a.$$.fragment), h = Se(), Ve(d.$$.fragment), G(t, "tabindex", "0"), Ks(
          t,
          "height",
          /*height*/
          i[6]
        ), Ks(
          t,
          "width",
          /*width*/
          i[7]
        ), G(t, "class", "canvas-annotator svelte-5jh9j1"), G(e, "class", "canvas-container svelte-5jh9j1"), G(e, "tabindex", "-1");
      },
      m(L, Z) {
        fn(L, e, Z), V(e, t), i[61](t), fn(L, n, Z), S && S.m(L, Z), fn(L, s, Z), C && C.m(L, Z), fn(L, l, Z), k && k.m(L, Z), fn(L, o, Z), W && W.m(L, Z), fn(L, r, Z), Ze(a, L, Z), fn(L, h, Z), Ze(d, L, Z), p = !0, y || (w = [
          je(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[28]
          ),
          je(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[29]
          ),
          je(t, "pointermove", function() {
            Nb(
              /*handlesCursor*/
              i[8] ? (
                /*handlePointerMove*/
                i[30]
              ) : null
            ) && /*handlesCursor*/
            (i[8] ? (
              /*handlePointerMove*/
              i[30]
            ) : null).apply(this, arguments);
          }),
          je(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[46]
          ),
          je(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[31]
          ),
          je(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[52]
          ),
          je(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[53]
          )
        ], y = !0);
      },
      p(L, Z) {
        i = L, (!p || Z[0] & /*height*/
        64) && Ks(
          t,
          "height",
          /*height*/
          i[6]
        ), (!p || Z[0] & /*width*/
        128) && Ks(
          t,
          "width",
          /*width*/
          i[7]
        ), /*interactive*/
        i[4] ? S ? (S.p(i, Z), Z[0] & /*interactive*/
        16 && he(S, 1)) : (S = lc(i), S.c(), he(S, 1), S.m(s.parentNode, s)) : S && (Ti(), ze(S, 1, 1, () => {
          S = null;
        }), Ai()), /*editModalVisible*/
        i[15] ? C ? (C.p(i, Z), Z[0] & /*editModalVisible*/
        32768 && he(C, 1)) : (C = rc(i), C.c(), he(C, 1), C.m(l.parentNode, l)) : C && (Ti(), ze(C, 1, 1, () => {
          C = null;
        }), Ai()), /*newModalVisible*/
        i[16] ? k ? (k.p(i, Z), Z[0] & /*newModalVisible*/
        65536 && he(k, 1)) : (k = cc(i), k.c(), he(k, 1), k.m(o.parentNode, o)) : k && (Ti(), ze(k, 1, 1, () => {
          k = null;
        }), Ai()), /*editDefaultLabelVisible*/
        i[17] ? W ? (W.p(i, Z), Z[0] & /*editDefaultLabelVisible*/
        131072 && he(W, 1)) : (W = fc(i), W.c(), he(W, 1), W.m(r.parentNode, r)) : W && (Ti(), ze(W, 1, 1, () => {
          W = null;
        }), Ai());
        const q = {};
        !c && Z[0] & /*eraserSettingsVisible*/
        262144 && (c = !0, q.visible = /*eraserSettingsVisible*/
        i[18], Ei(() => c = !1)), !f && Z[0] & /*eraserSize*/
        1048576 && (f = !0, q.eraserSize = /*eraserSize*/
        i[20], Ei(() => f = !1)), a.$set(q);
        const F = {};
        !_ && Z[0] & /*shapeSettingsVisible*/
        524288 && (_ = !0, F.visible = /*shapeSettingsVisible*/
        i[19], Ei(() => _ = !1)), !g && Z[0] & /*shapeOpacity*/
        2097152 && (g = !0, F.opacity = /*shapeOpacity*/
        i[21], Ei(() => g = !1)), !u && Z[0] & /*shapeStrokeWidth*/
        4194304 && (u = !0, F.strokeWidth = /*shapeStrokeWidth*/
        i[22], Ei(() => u = !1)), !v && Z[0] & /*shapeSelectedStrokeWidth*/
        8388608 && (v = !0, F.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
        i[23], Ei(() => v = !1)), d.$set(F);
      },
      i(L) {
        p || (he(S), he(C), he(k), he(W), he(a.$$.fragment, L), he(d.$$.fragment, L), p = !0);
      },
      o(L) {
        ze(S), ze(C), ze(k), ze(W), ze(a.$$.fragment, L), ze(d.$$.fragment, L), p = !1;
      },
      d(L) {
        L && (cn(e), cn(n), cn(s), cn(l), cn(o), cn(r), cn(h)), i[61](null), S && S.d(L), C && C.d(L), k && k.d(L), W && W.d(L), Ke(a, L), Ke(d, L), y = !1, Lf(w);
      }
    }
  );
}
const Qb = 50, $b = 3, zo = 3;
function Jn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function gi(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function ev(i, e, t) {
  let n;
  var s;
  (function(m) {
    m[m.creation = 0] = "creation", m[m.drag = 1] = "drag", m[m.freehand = 2] = "freehand", m[m.circle = 3] = "circle", m[m.polygon = 4] = "polygon", m[m.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, f = !1, { imageUrl: h = null } = e, { interactive: d } = e, { boxMinSize: _ = 10 } = e, { handleSize: g } = e, { value: u } = e, { choices: v = [] } = e, { choicesColors: p = [] } = e, { disableEditBoxes: y = !1 } = e, { height: w = "100%" } = e, { width: S = "100%" } = e, { singleBox: C = !1 } = e, { showRemoveButton: k = null } = e, { handlesCursor: W = !0 } = e, { useDefaultLabel: x = !1 } = e, { shapeCreationMode: B = "drag" } = e;
  k === null && (k = y);
  let b, z, D = null, P = -1, A = s.drag, Y = new Fb(ie), L;
  function Z(m) {
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
  u !== null && u.boxes && u.boxes.length == 0 ? A = Z(B) : u !== null && u.boxes && u.boxes.length > 0 ? A = B === "drag" ? s.drag : Z(B) : A = Z(B);
  let q = 0, F = 0, J = 0, U = 0, j = 1, fe = 0, ne = 0, T = !1, Pe = !1, R = !1, O = !1, re = !1, I = null, ye = 10, X = 0.5, de = 2, _e = 4, ke = x, We = { label: "", color: "" };
  const pe = Jb();
  function ie() {
    if (z) {
      if (z.clearRect(0, 0, b.width, b.height), z.save(), z.translate(Y.offsetX, Y.offsetY), z.scale(Y.scale, Y.scale), D !== null && u !== null) {
        switch (u.orientation) {
          case 0:
            z.drawImage(D, 0, 0, fe, ne);
            break;
          case 1:
            z.translate(fe, 0), z.rotate(Math.PI / 2), z.drawImage(D, 0, 0, ne, fe);
            break;
          case 2:
            z.translate(fe, ne), z.rotate(Math.PI), z.drawImage(D, 0, 0, fe, ne);
            break;
          case 3:
            z.translate(0, ne), z.rotate(-Math.PI / 2), z.drawImage(D, 0, 0, ne, fe);
            break;
        }
        z.restore();
      }
      if (u !== null && u.boxes)
        for (const m of u.boxes.slice().reverse())
          m.render(z, c);
      A === s.erase && L && L.renderErasePath(z);
    }
  }
  function Xe(m) {
    t(14, P = m), u !== null && u.boxes && (u.boxes.forEach((M) => {
      M.setSelected(!1);
    }), m >= 0 && m < u.boxes.length && u.boxes[m].setSelected(!0)), ie();
  }
  function at(m) {
    d && (a = !1, m.target instanceof Element && m.target.hasPointerCapture(m.pointerId) && m.target.releasePointerCapture(m.pointerId), A === s.creation ? Qe(m) : A === s.freehand ? tn(m) : A === s.circle ? Ji(m) : A === s.polygon ? Wn(m) : A === s.erase ? ks(m) : A === s.drag && zt(m));
  }
  function zt(m) {
    console.log("clickBox function called, mode:", A === s.drag ? "drag" : "creation");
    const M = b.getBoundingClientRect(), H = m.clientX - M.left, K = m.clientY - M.top;
    let Q = !1;
    if (!(u === null || !u.boxes)) {
      for (const [ue, ce] of u.boxes.entries()) {
        const Ft = ce.indexOfPointInsideHandle(H, K);
        if (Ft >= 0) {
          Q = !0, Xe(ue);
          let _n = null;
          ce.onMoveStart = () => {
            _n = De(ce), console.log("Resize started, captured state:", _n);
          }, ce.onMoveEnd = () => {
            if (_n) {
              const _a = De(ce);
              console.log("Resize ended, final state:", _a), Ge({
                type: "edit_shape",
                shapeIndex: ue,
                oldShapeData: _n,
                shapeData: _a
              }), _n = null;
            }
          }, ce.startResize(Ft, m);
          return;
        }
      }
      for (const [ue, ce] of u.boxes.entries())
        if (ce.isPointInsideBox(H, K)) {
          Q = !0, Xe(ue);
          let Ft = null;
          ce.onMoveStart = () => {
            Ft = De(ce);
          }, ce.onMoveEnd = () => {
            Ft && (Ge({
              type: "edit_shape",
              shapeIndex: ue,
              oldShapeData: Ft,
              shapeData: De(ce)
            }), Ft = null);
          }, ce.startDrag(m);
          return;
        }
      if (!Q) {
        if (C || Xe(-1), console.log("No box selected, checking if we should dispatch select event"), A === s.drag) {
          console.log("Mode is drag, calculating coordinates");
          const ue = (H - Y.offsetX) / j / Y.scale, ce = (K - Y.offsetY) / j / Y.scale;
          console.log("Click detected in drag mode:", {
            mouseX: H,
            mouseY: K,
            imageX: ue,
            imageY: ce,
            scaleFactor: j,
            "canvasWindow.scale": Y.scale,
            "canvasWindow.offsetX": Y.offsetX,
            "canvasWindow.offsetY": Y.offsetY
          }), D && ue >= 0 && ue <= D.naturalWidth && ce >= 0 && ce <= D.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(ue), Math.round(ce)]), pe("select", {
            coordinates: [Math.round(ue), Math.round(ce)]
          })) : console.log("Click outside image bounds or no image loaded", {
            hasImage: !!D,
            imageX: ue,
            imageY: ce,
            naturalWidth: D == null ? void 0 : D.naturalWidth,
            naturalHeight: D == null ? void 0 : D.naturalHeight
          });
        } else
          console.log("Mode is not drag, mode:", A);
        Y.startDrag(m);
      }
    }
  }
  function Je(m) {
    A === s.erase && L && Ae(), pe("change");
  }
  function dt(m) {
    if (u === null)
      return;
    if (A === s.erase && L) {
      Ie(m);
      return;
    }
    if (A !== s.drag)
      return;
    const M = b.getBoundingClientRect(), H = m.clientX - M.left, K = m.clientY - M.top;
    for (const [Q, ue] of u.boxes.entries()) {
      const ce = ue.indexOfPointInsideHandle(H, K);
      if (ce >= 0) {
        t(11, b.style.cursor = ue.resizeHandles[ce].cursor, b);
        return;
      }
    }
    t(11, b.style.cursor = "default", b);
  }
  function E(m) {
    if (d) {
      if (m.ctrlKey) {
        switch (m.key.toLowerCase()) {
          case "z":
            m.shiftKey ? Wt() : en(), m.preventDefault();
            break;
          case "y":
            Wt(), m.preventDefault();
            break;
        }
        return;
      }
      switch (m.key) {
        case "Delete":
          Un();
          break;
        case " ":
          A === s.polygon && I && I.isCreating && (m.preventDefault(), I._points.length >= I.minPoints && I.finishCreating());
          break;
      }
    }
  }
  function me(m) {
    m.preventDefault();
    const M = 1 / (1 + m.deltaY / 1e3 * 0.5), H = parseFloat((Y.scale * M).toFixed(2)), K = H < 1 ? 1 : H, Q = b.getBoundingClientRect(), ue = m.clientX - Q.left, ce = m.clientY - Q.top, Ft = (ue - Y.offsetX) / Y.scale, _n = (ce - Y.offsetY) / Y.scale;
    Y.offsetX = ue - Ft * K, Y.offsetY = ce - _n * K, Y.scale = K, ie();
  }
  function Ce() {
    if (Y.scale = 1, D !== null && b) {
      if (Y.imageRotatedWidth <= b.width) {
        const m = (b.width - fe) / 2;
        Y.offsetX = m;
      } else
        Y.offsetX = 0;
      if (ne < b.height) {
        const m = (b.height - ne) / 2;
        Y.offsetY = m;
      } else
        Y.offsetY = 0;
    } else
      Y.offsetX = 0, Y.offsetY = 0;
    ie();
  }
  function Ge(m) {
    if (a) {
      console.log("Skipping undo action during initial state:", m);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, m), { timestamp: Date.now() })), l.length > Qb && l.shift(), console.log("Added undo action:", m, "Stack size:", l.length);
  }
  function en() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let M = r.length - 1; M >= 0; M--) {
        const H = r[M];
        if (H.recoveryCount < zo) {
          u.boxes.map((K) => De(K)), t(0, u.boxes = [], u);
          for (const K of H.allShapes) {
            const Q = rt(K);
            Q && u.boxes.push(Q);
          }
          H.recoveryCount++, H.recoveryCount >= zo && (r.splice(M, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${u.boxes.length} shapes from pre-clear history. Recovery ${H.recoveryCount}/${zo}`), Xe(-1), ie(), pe("change");
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
              shapeData: De(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const M = rt(m.shapeData);
            u.boxes.splice(m.shapeIndex, 0, M), o.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (I && m.pointData) {
            if (I._points.pop(), I._points.length === 0) {
              const M = u.boxes.indexOf(I);
              M >= 0 && u.boxes.splice(M, 1), I = null;
            } else
              I.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: m.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.oldShapeData && m.shapeIndex < u.boxes.length) {
            const M = De(u.boxes[m.shapeIndex]);
            rt(m.oldShapeData, u.boxes[m.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: M,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", m);
            const M = u.boxes.map((H) => De(H));
            t(0, u.boxes = [], u);
            for (const H of m.oldShapeData) {
              const K = rt(H);
              K && u.boxes.push(K);
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
      Xe(-1), ie(), pe("change");
    }
  }
  function Wt() {
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
              shapeData: De(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const M = rt(m.shapeData);
            u.boxes.splice(m.shapeIndex, 0, M), l.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          m.pointData && (I ? (I._points.push(m.pointData), I._points.length === 1 && !u.boxes.includes(I) && (C ? t(0, u.boxes = [I], u) : t(0, u.boxes = [I, ...u.boxes], u)), I.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: m.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.shapeData && m.shapeIndex < u.boxes.length) {
            const M = De(u.boxes[m.shapeIndex]);
            rt(m.shapeData, u.boxes[m.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: M,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.shapeData) {
            const M = u.boxes.map((H) => De(H));
            t(0, u.boxes = [], u);
            for (const H of m.shapeData) {
              const K = rt(H);
              K && u.boxes.push(K);
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
      Xe(-1), ie(), pe("change");
    }
  }
  function De(m) {
    return m ? m instanceof An ? {
      type: "freehand",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof Gt ? {
      type: "polygon",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof $n ? {
      type: "circle",
      label: m.label,
      color: m.color,
      centerX: m._centerX,
      centerY: m._centerY,
      radius: m._radius
    } : m instanceof Qn ? {
      type: "box",
      label: m.label,
      color: m.color,
      xmin: m._xmin,
      ymin: m._ymin,
      xmax: m._xmax,
      ymax: m._ymax
    } : null : null;
  }
  function rt(m, M) {
    if (!m) return null;
    if (M)
      return M.label = m.label, M.color = m.color, M instanceof Qn ? (M._xmin = m.xmin, M._ymin = m.ymin, M._xmax = m.xmax, M._ymax = m.ymax, M.applyUserScale()) : M instanceof $n ? (M._centerX = m.centerX, M._centerY = m.centerY, M._radius = m.radius, M.applyUserScale()) : (M.xmin = m.xmin, M.ymin = m.ymin, M.xmax = m.xmax, M.ymax = m.ymax), (M instanceof An || M instanceof Gt) && m.points && (M._points = [...m.points], M.updateBoundingBox()), M;
    switch (m.type) {
      case "freehand":
        const H = new An(ie, Tt, Y, q, F, J, U, m.label, m.color, X, _, g, de, _e);
        return H._points = [...m.points], H.updateBoundingBox(), H;
      case "polygon":
        const K = new Gt(ie, Tt, Y, q, F, J, U, m.label, m.color, X, _, g, de, _e);
        return K._points = [...m.points], K.updateBoundingBox(), K;
      case "circle":
        return new $n(ie, Tt, Y, q, F, J, U, m.label, m.centerX, m.centerY, m.radius, m.color, X, _, g, de, _e);
      case "box":
        return new Qn(ie, Tt, Y, q, F, J, U, m.label, m.xmin, m.ymin, m.xmax, m.ymax, m.color, X, _, g, de, _e);
    }
    return null;
  }
  function tn(m) {
    const M = b.getBoundingClientRect();
    let H;
    p.length > 0 ? H = Jn(p[0]) : C ? u.boxes.length > 0 ? H = u.boxes[0].color : H = ft[0] : H = ft[u.boxes.length % ft.length];
    let K = new An(ie, Tt, Y, q, F, J, U, "", H, X, _, g, de, _e);
    K.startCreating(m, M.left, M.top), C ? t(0, u.boxes = [K], u) : t(0, u.boxes = [K, ...u.boxes], u), Ge({ type: "create_shape", shapeIndex: 0 }), Xe(0), ie(), pe("change");
  }
  function Wn(m) {
    I && (!I._points || I._points.length === 0 || !u.boxes.includes(I)) && (console.log("Resetting invalid currentPolygon state"), I = null), I === null ? gt(m) : I.isCreating && (I.addPoint(m) || (ie(), pe("change")));
  }
  function gt(m) {
    const M = b.getBoundingClientRect();
    let H;
    p.length > 0 ? H = Jn(p[0]) : C ? u.boxes.length > 0 ? H = u.boxes[0].color : H = ft[0] : H = ft[u.boxes.length % ft.length];
    let K = new Gt(ie, Uf, Y, q, F, J, U, "", H, X, _, g, de, _e);
    K.onPointAdded = (Q) => {
      Ge({ type: "polygon_point", pointData: Q });
    }, I = K, K.startCreating(m, M.left, M.top), C ? t(0, u.boxes = [K], u) : t(0, u.boxes = [K, ...u.boxes], u), Ge({ type: "create_shape", shapeIndex: 0 }), Xe(0), ie(), pe("change");
  }
  function Qe(m) {
    const M = b.getBoundingClientRect(), H = (m.clientX - M.left - Y.offsetX) / j / Y.scale, K = (m.clientY - M.top - Y.offsetY) / j / Y.scale;
    let Q;
    p.length > 0 ? Q = Jn(p[0]) : C ? u.boxes.length > 0 ? Q = u.boxes[0].color : Q = ft[0] : Q = ft[u.boxes.length % ft.length];
    let ue = new Qn(ie, Tt, Y, q, F, J, U, "", H, K, H, K, Q, X, _, g, de, _e);
    ue.startCreating(m, M.left, M.top), C ? t(0, u.boxes = [ue], u) : t(0, u.boxes = [ue, ...u.boxes], u), Ge({ type: "create_shape", shapeIndex: 0 }), Xe(0), ie(), pe("change");
  }
  function Ji(m) {
    const M = b.getBoundingClientRect(), H = (m.clientX - M.left - Y.offsetX) / Y.scale, K = (m.clientY - M.top - Y.offsetY) / Y.scale;
    let Q;
    p.length > 0 ? Q = Jn(p[0]) : C ? u.boxes.length > 0 ? Q = u.boxes[0].color : Q = ft[0] : Q = ft[u.boxes.length % ft.length];
    let ue = new $n(ie, Tt, Y, q, F, J, U, "", H, K, 0, Q, X, _, g, de, _e);
    ue.startCreating(m), C ? t(0, u.boxes = [ue], u) : t(0, u.boxes = [ue, ...u.boxes], u), Ge({ type: "create_shape", shapeIndex: 0 }), Xe(0), ie(), pe("change");
  }
  function ks(m) {
    L || (L = new Tb(Y, j), L.setBrushSize(ye)), L.setScaleFactor(j);
    const M = b.getBoundingClientRect();
    L.startErase(m, M), ie();
  }
  function Ie(m) {
    if (!L) return;
    const M = b.getBoundingClientRect();
    L.continueErase(m, M), ie();
  }
  function Ae() {
    if (!L) return;
    const m = L.endErase();
    if (m.length === 0) {
      xn();
      return;
    }
    const M = [...u.boxes], H = [], K = [];
    for (let Q = 0; Q < u.boxes.length; Q++) {
      const ue = u.boxes[Q], ce = L.eraseFromShape(ue, m);
      if (ce.length === 0)
        H.push(Q);
      else {
        if (ce.length === 1 && ce[0] === ue)
          continue;
        H.push(Q), K.push(...ce);
      }
    }
    if (H.length > 0 || K.length > 0) {
      for (let Q = H.length - 1; Q >= 0; Q--)
        u.boxes.splice(H[Q], 1);
      u.boxes.push(...K), Ge({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: M.map((Q) => De(Q)),
        shapeData: u.boxes.map((Q) => De(Q))
      }), Xe(-1), pe("change");
    }
    ie(), xn();
  }
  function te() {
    t(18, O = !0);
  }
  function st(m) {
    t(20, ye = m.detail.size), L && L.setBrushSize(ye);
  }
  function ys() {
    t(18, O = !1);
  }
  function Af() {
    t(19, re = !0);
  }
  function Tf(m) {
    t(21, X = m.detail.opacity), t(22, de = m.detail.strokeWidth), t(23, _e = m.detail.selectedStrokeWidth), Of(), ie();
  }
  function Ff() {
    t(19, re = !1);
  }
  function Of() {
    for (let m of u.boxes) {
      const M = m;
      M.alpha !== void 0 && (M.alpha = X), M.thickness !== void 0 && (M.thickness = de), M.selectedThickness !== void 0 && (M.selectedThickness = _e);
    }
  }
  function Cs() {
    t(12, A = s.creation), t(11, b.style.cursor = "crosshair", b), I = null;
  }
  function oa() {
    t(12, A = s.freehand), t(11, b.style.cursor = "crosshair", b), I = null;
  }
  function aa() {
    t(12, A = s.circle), t(11, b.style.cursor = "crosshair", b), I = null;
  }
  function ra() {
    t(12, A = s.polygon), t(11, b.style.cursor = "crosshair", b);
  }
  function ca() {
    t(12, A = s.erase), t(11, b.style.cursor = "crosshair", b), I = null;
  }
  function xn() {
    t(12, A = s.drag), t(11, b.style.cursor = "default", b), I = null;
  }
  function Tt() {
    P >= 0 && P < u.boxes.length && (u.boxes[P].getArea() < 1 ? Un() : (y || (ke ? ua() : t(16, Pe = !0)), C && xn()));
  }
  function Uf() {
    I = null, P >= 0 && P < u.boxes.length && (u.boxes[P].getArea() < 1 ? Un() : (y || (ke ? ua() : t(16, Pe = !0)), xn()));
  }
  function Nf() {
    P >= 0 && P < u.boxes.length && !y && t(15, T = !0);
  }
  function Vf(m) {
    if (!d)
      return;
    const M = b.getBoundingClientRect(), H = m.clientX - M.left, K = m.clientY - M.top;
    let Q = !1;
    for (const [ue, ce] of u.boxes.entries())
      if (ce.isPointInsideBox(H, K)) {
        Q = !0, Xe(ue), Nf();
        break;
      }
    Q || Ce();
  }
  function fa(m, M) {
    const H = v.findIndex((K) => K[0] === m);
    H === -1 ? (v.push([m, v.length]), p.push(M), t(1, v), t(2, p), console.log(`Added custom label "${m}" with color ${M} to choices`)) : p[H] !== M && (t(2, p[H] = M, p), t(2, p), console.log(`Updated color for existing label "${m}" to ${M}`));
  }
  function Kf(m) {
    t(15, T = !1);
    const { detail: M } = m;
    let H = M.label, K = M.color, Q = M.opacity, ue = M.ret;
    if (P >= 0 && P < u.boxes.length) {
      let ce = u.boxes[P];
      if (ue == 1) {
        const Ft = De(ce);
        fa(H, K), ce.label = H, ce.color = Jn(K), Q !== void 0 && (ce.alpha = Q);
        const _n = De(ce);
        Ge({
          type: "edit_shape",
          shapeIndex: P,
          oldShapeData: Ft,
          shapeData: _n
        }), ie(), pe("change");
      } else ue == -1 && Un();
    }
    setTimeout(
      () => {
        b && (b.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function Zf(m) {
    t(16, Pe = !1);
    const { detail: M } = m;
    let H = M.label, K = M.color, Q = M.ret, ue = M.lock;
    if (P >= 0 && P < u.boxes.length) {
      let ce = u.boxes[P];
      Q == 1 ? (fa(H, K), t(24, ke = ue), We.label = H, We.color = K, ce.label = H, ce.color = Jn(K), ie(), pe("change"), xn()) : Un();
    }
    setTimeout(
      () => {
        b && (b.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function Jf(m) {
    t(17, R = !1);
    const { detail: M } = m;
    let H = M.label, K = M.color, Q = M.ret, ue = M.lock;
    Q == 1 && (t(24, ke = ue), We.label = H, We.color = K), setTimeout(
      () => {
        b && (b.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function ua() {
    if (P >= 0 && P < u.boxes.length) {
      let m = u.boxes[P];
      m.label = We.label, We.color !== "" && (m.color = Jn(We.color)), ie(), pe("change"), xn();
    }
    setTimeout(
      () => {
        b && (b.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function Un() {
    if (P >= 0 && P < u.boxes.length) {
      const m = u.boxes[P], M = De(m);
      Ge({
        type: "delete_shape",
        shapeIndex: P,
        shapeData: M
      }), u.boxes.splice(P, 1), Xe(-1), C && Cs(), pe("change");
    }
  }
  function ha() {
    if (u.boxes.length === 0) return;
    const m = u.boxes.map((M) => De(M));
    for (r.push({
      allShapes: m,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > $b; )
      r.shift();
    t(0, u.boxes = [], u), Xe(-1), I = null, C && Cs(), ie(), pe("change"), console.log(`Cleared ${m.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function Ss() {
    if (b) {
      if (j = 1, t(11, b.width = b.clientWidth, b), Y.setRotatedImage(D), D !== null) {
        if (Y.imageRotatedWidth > b.width)
          j = b.width / Y.imageRotatedWidth, fe = Math.round(Y.imageRotatedWidth * j), ne = Math.round(Y.imageRotatedHeight * j), q = 0, F = 0, J = fe, U = ne, t(11, b.height = ne, b);
        else {
          fe = Y.imageRotatedWidth, ne = Y.imageRotatedHeight;
          var m = (b.width - fe) / 2;
          q = m, F = 0, J = m + fe, U = ne, t(11, b.height = ne, b);
        }
        Y.imageWidth = fe, Y.imageHeight = ne;
      } else
        q = 0, F = 0, J = b.width, U = b.height, t(11, b.height = b.clientHeight, b);
      if (Y.resize(b.width, b.height, q, F), J > 0 && U > 0)
        for (const M of u.boxes)
          M.canvasXmin = q, M.canvasYmin = F, M.canvasXmax = J, M.canvasYmax = U, M.setScaleFactor(j);
      ie(), pe("change");
    }
  }
  const Gf = new ResizeObserver(Ss);
  function Qf() {
    if (!(u === null || !u.boxes))
      for (let m = 0; m < u.boxes.length; m++) {
        let M = u.boxes[m];
        if (!(M instanceof Qn) && !(M instanceof An) && !(M instanceof Gt) && !(M instanceof $n)) {
          let H = "", K = "";
          if (M.hasOwnProperty("color") ? (H = M.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = ft[m % ft.length], M.hasOwnProperty("label") && (K = M.label), M.hasOwnProperty("type") && M.type === "freehand" && M.hasOwnProperty("points")) {
            let Q = new An(ie, Tt, Y, q, F, J, U, K, H, X, _, g, de, _e);
            Q._points = M.points, Q.updateBoundingBox(), M = Q;
          } else if (M.hasOwnProperty("type") && M.type === "circle" && M.hasOwnProperty("centerX") && M.hasOwnProperty("centerY") && M.hasOwnProperty("radius"))
            M = new $n(ie, Tt, Y, q, F, J, U, K, M.centerX, M.centerY, M.radius, H, X, _, g, de, _e);
          else if (M.hasOwnProperty("type") && M.type === "polygon" && M.hasOwnProperty("points")) {
            let Q = new Gt(ie, Tt, Y, q, F, J, U, K, H, X, _, g, de, _e);
            Q._points = M.points, Q.updateBoundingBox(), M = Q;
          } else
            M = new Qn(ie, Tt, Y, q, F, J, U, K, M.xmin, M.ymin, M.xmax, M.ymax, H, X, _, g, de, _e);
          t(0, u.boxes[m] = M, u);
        }
      }
  }
  function da() {
    h !== null ? (D === null || D.src != h) && (D = new Image(), D.src = h, D.onload = function() {
      Ss(), ie();
    }) : D = null;
  }
  Kb(() => {
    if (a = !0, Array.isArray(v) && v.length > 0) {
      if (!Array.isArray(p) || p.length == 0)
        for (let m = 0; m < v.length; m++) {
          let M = ft[m % ft.length];
          p.push(gi(M));
        }
      We.label = v[0][0], We.color = p[0];
    }
    z = b.getContext("2d"), Gf.observe(b), P < 0 && u !== null && u.boxes.length > 0 && Xe(0), da(), Ss(), ie(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function $f() {
    document.addEventListener("keydown", E);
  }
  function eu() {
    document.removeEventListener("keydown", E);
  }
  Zb(() => {
    document.removeEventListener("keydown", E);
  });
  function tu(m) {
    ei[m ? "unshift" : "push"](() => {
      b = m, t(11, b), t(0, u), t(60, f), t(59, B), t(12, A), t(9, s);
    });
  }
  const nu = () => Cs(), iu = () => oa(), su = () => aa(), lu = () => ra(), ou = () => ca(), au = () => xn(), ru = () => Un(), cu = () => t(17, R = !0), fu = () => en(), uu = () => Wt(), hu = () => {
    t(10, c = !c), ie();
  }, du = () => ha();
  function _u(m) {
    Mo.call(this, i, m);
  }
  function mu(m) {
    Mo.call(this, i, m);
  }
  function gu(m) {
    Mo.call(this, i, m);
  }
  function pu(m) {
    O = m, t(18, O);
  }
  function bu(m) {
    ye = m, t(20, ye);
  }
  function vu(m) {
    re = m, t(19, re);
  }
  function wu(m) {
    X = m, t(21, X);
  }
  function ku(m) {
    de = m, t(22, de);
  }
  function yu(m) {
    _e = m, t(23, _e);
  }
  return i.$$set = (m) => {
    "imageUrl" in m && t(54, h = m.imageUrl), "interactive" in m && t(4, d = m.interactive), "boxMinSize" in m && t(55, _ = m.boxMinSize), "handleSize" in m && t(56, g = m.handleSize), "value" in m && t(0, u = m.value), "choices" in m && t(1, v = m.choices), "choicesColors" in m && t(2, p = m.choicesColors), "disableEditBoxes" in m && t(5, y = m.disableEditBoxes), "height" in m && t(6, w = m.height), "width" in m && t(7, S = m.width), "singleBox" in m && t(57, C = m.singleBox), "showRemoveButton" in m && t(3, k = m.showRemoveButton), "handlesCursor" in m && t(8, W = m.handlesCursor), "useDefaultLabel" in m && t(58, x = m.useDefaultLabel), "shapeCreationMode" in m && t(59, B = m.shapeCreationMode);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    1024 && t(25, n = c), i.$$.dirty[0] & /*value, canvas, mode, Mode*/
    6657 | i.$$.dirty[1] & /*initialized, shapeCreationMode*/
    805306368 && (u !== null && u.boxes && u.boxes.length === 0 && !f || !f && B) && (t(12, A = Z(B)), t(60, f = !0), b && t(11, b.style.cursor = A === s.drag ? "default" : "crosshair", b)), i.$$.dirty[0] & /*value*/
    1 && u !== null && u.boxes && u.boxes.length === 0 && t(60, f = !1), i.$$.dirty[0] & /*value*/
    1 && (u !== null && (Y.orientation = u.orientation), da(), Qf(), Ss(), ie());
  }, [
    u,
    v,
    p,
    k,
    d,
    y,
    w,
    S,
    W,
    s,
    c,
    b,
    A,
    o,
    P,
    T,
    Pe,
    R,
    O,
    re,
    ye,
    X,
    de,
    _e,
    ke,
    n,
    l,
    ie,
    at,
    Je,
    dt,
    me,
    en,
    Wt,
    te,
    st,
    ys,
    Af,
    Tf,
    Ff,
    Cs,
    oa,
    aa,
    ra,
    ca,
    xn,
    Vf,
    Kf,
    Zf,
    Jf,
    Un,
    ha,
    $f,
    eu,
    h,
    _,
    g,
    C,
    x,
    B,
    f,
    tu,
    nu,
    iu,
    su,
    lu,
    ou,
    au,
    ru,
    cu,
    fu,
    uu,
    hu,
    du,
    _u,
    mu,
    gu,
    pu,
    bu,
    vu,
    wu,
    ku,
    yu
  ];
}
class tv extends Ob {
  constructor(e) {
    super(), Ub(
      this,
      e,
      ev,
      Gb,
      Vb,
      {
        imageUrl: 54,
        interactive: 4,
        boxMinSize: 55,
        handleSize: 56,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 57,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 58,
        shapeCreationMode: 59
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: nv,
  add_flush_callback: iv,
  bind: sv,
  binding_callbacks: lv,
  create_component: ov,
  destroy_component: av,
  init: rv,
  mount_component: cv,
  safe_not_equal: fv,
  transition_in: uv,
  transition_out: hv
} = window.__gradio__svelte__internal, { createEventDispatcher: dv } = window.__gradio__svelte__internal;
function _v(i) {
  let e, t, n;
  function s(o) {
    i[21](o);
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
    shapeCreationMode: (
      /*shapeCreationMode*/
      i[16]
    ),
    imageUrl: (
      /*resolved_src*/
      i[17]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (l.value = /*value*/
    i[0]), e = new tv({ props: l }), lv.push(() => sv(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[22]
    ), e.$on(
      "select",
      /*select_handler*/
      i[23]
    ), {
      c() {
        ov(e.$$.fragment);
      },
      m(o, r) {
        cv(e, o, r), n = !0;
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
        o[15]), r & /*shapeCreationMode*/
        65536 && (a.shapeCreationMode = /*shapeCreationMode*/
        o[16]), r & /*resolved_src*/
        131072 && (a.imageUrl = /*resolved_src*/
        o[17]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        o[0], iv(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (uv(e.$$.fragment, o), n = !0);
      },
      o(o) {
        hv(e.$$.fragment, o), n = !1;
      },
      d(o) {
        av(e, o);
      }
    }
  );
}
function mv(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: h } = e, { width: d } = e, { boxSelectedThickness: _ } = e, { value: g } = e, { disableEditBoxes: u } = e, { singleBox: v } = e, { showRemoveButton: p } = e, { handlesCursor: y } = e, { useDefaultLabel: w } = e, { shapeCreationMode: S } = e, C, k;
  const W = dv();
  function x(z) {
    g = z, t(0, g);
  }
  const B = () => W("change"), b = (z) => W("select", z.detail);
  return i.$$set = (z) => {
    "src" in z && t(19, n = z.src), "interactive" in z && t(1, s = z.interactive), "boxesAlpha" in z && t(2, l = z.boxesAlpha), "labelList" in z && t(3, o = z.labelList), "labelColors" in z && t(4, r = z.labelColors), "boxMinSize" in z && t(5, a = z.boxMinSize), "handleSize" in z && t(6, c = z.handleSize), "boxThickness" in z && t(7, f = z.boxThickness), "height" in z && t(8, h = z.height), "width" in z && t(9, d = z.width), "boxSelectedThickness" in z && t(10, _ = z.boxSelectedThickness), "value" in z && t(0, g = z.value), "disableEditBoxes" in z && t(11, u = z.disableEditBoxes), "singleBox" in z && t(12, v = z.singleBox), "showRemoveButton" in z && t(13, p = z.showRemoveButton), "handlesCursor" in z && t(14, y = z.handlesCursor), "useDefaultLabel" in z && t(15, w = z.useDefaultLabel), "shapeCreationMode" in z && t(16, S = z.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    1572864) {
      t(17, C = n), t(20, k = n);
      const z = n;
      c1(z).then((D) => {
        k === z && t(17, C = D);
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
    h,
    d,
    _,
    u,
    v,
    p,
    y,
    w,
    S,
    C,
    W,
    n,
    k,
    x,
    B,
    b
  ];
}
class gv extends nv {
  constructor(e) {
    super(), rv(this, e, mv, _v, fv, {
      src: 19,
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
      useDefaultLabel: 15,
      shapeCreationMode: 16
    });
  }
}
class uc {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: pv,
  add_flush_callback: pl,
  append: Li,
  attr: cs,
  bind: bl,
  binding_callbacks: ps,
  bubble: ns,
  check_outros: ti,
  create_component: yn,
  create_slot: bv,
  destroy_component: Cn,
  detach: ui,
  element: _s,
  empty: vv,
  get_all_dirty_from_scope: wv,
  get_slot_changes: kv,
  group_outros: ni,
  init: yv,
  insert: hi,
  mount_component: Sn,
  noop: Cv,
  safe_not_equal: Sv,
  space: Gn,
  toggle_class: hc,
  transition_in: Me,
  transition_out: Re,
  update_slot_base: Mv
} = window.__gradio__svelte__internal, { createEventDispatcher: zv, tick: Wv } = window.__gradio__svelte__internal;
function dc(i) {
  let e, t;
  return e = new y1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [xv] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, s) {
      Sn(e, n, s), t = !0;
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
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function xv(i) {
  let e, t;
  return e = new vl({
    props: {
      Icon: Jd,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, s) {
      Sn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function _c(i) {
  let e, t;
  return e = new sm({
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
      yn(e.$$.fragment);
    },
    m(n, s) {
      Sn(e, n, s), t = !0;
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
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function mc(i) {
  let e, t, n;
  return t = new vl({
    props: { Icon: Xc, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[37]
  ), {
    c() {
      e = _s("div"), yn(t.$$.fragment);
    },
    m(s, l) {
      hi(s, e, l), Sn(t, e, null), n = !0;
    },
    p: Cv,
    i(s) {
      n || (Me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ui(e), Cn(t);
    }
  };
}
function gc(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = bv(
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
      16777216) && Mv(
        n,
        t,
        s,
        /*$$scope*/
        s[55],
        e ? kv(
          t,
          /*$$scope*/
          s[55],
          l,
          null
        ) : wv(
          /*$$scope*/
          s[55]
        ),
        null
      );
    },
    i(s) {
      e || (Me(n, s), e = !0);
    },
    o(s) {
      Re(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Bv(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && gc(i)
  );
  return {
    c() {
      n && n.c(), e = vv();
    },
    m(s, l) {
      n && n.m(s, l), hi(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && Me(n, 1)) : (n = gc(s), n.c(), Me(n, 1), n.m(e.parentNode, e)) : n && (ni(), Re(n, 1, 1, () => {
        n = null;
      }), ti());
    },
    i(s) {
      t || (Me(n), t = !0);
    },
    o(s) {
      Re(n), t = !1;
    },
    d(s) {
      s && ui(e), n && n.d(s);
    }
  };
}
function pc(i) {
  let e, t;
  return e = new N0({
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
        i[32]
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
      yn(e.$$.fragment);
    },
    m(n, s) {
      Sn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*root*/
      64 && (l.root = /*root*/
      n[6]), s[0] & /*i18n*/
      256 && (l.i18n = /*i18n*/
      n[8]), s[1] & /*upload*/
      2 && (l.upload = /*upload*/
      n[32]), e.$set(l);
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function bc(i) {
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
    shapeCreationMode: (
      /*shapeCreationMode*/
      i[29]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (o.value = /*value*/
    i[1]), t = new gv({ props: o }), ps.push(() => bl(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), {
      c() {
        e = _s("div"), yn(t.$$.fragment), cs(e, "class", "image-frame svelte-1gjdske"), hc(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        hi(r, e, a), Sn(t, e, null), s = !0;
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
        r[28]), a[0] & /*shapeCreationMode*/
        536870912 && (c.shapeCreationMode = /*shapeCreationMode*/
        r[29]), a[0] & /*value*/
        2 && (c.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, c.value = /*value*/
        r[1], pl(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && hc(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (Me(t.$$.fragment, r), s = !0);
      },
      o(r) {
        Re(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && ui(e), Cn(t);
      }
    }
  );
}
function vc(i) {
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
      i[37]
    ),
    handle_select: (
      /*handle_select_source*/
      i[36]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (l.active_source = /*active_source*/
    i[0]), e = new wm({ props: l }), ps.push(() => bl(e, "active_source", s)), {
      c() {
        yn(e.$$.fragment);
      },
      m(o, r) {
        Sn(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], pl(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Me(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Re(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Cn(e, o);
      }
    }
  );
}
function Dv(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), v;
  e = new qh({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Yc,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && dc(i)
  ), y = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && _c(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && mc(i)
  );
  function S(b) {
    i[43](b);
  }
  function C(b) {
    i[44](b);
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
    $$slots: { default: [Bv] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (k.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (k.dragging = /*dragging*/
  i[31]), c = new t0({ props: k }), i[42](c), ps.push(() => bl(c, "uploading", S)), ps.push(() => bl(c, "dragging", C)), c.$on(
    "load",
    /*handle_upload*/
    i[33]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let W = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && pc(i)
  ), x = (
    /*value*/
    i[1] !== null && bc(i)
  ), B = u && vc(i);
  return {
    c() {
      yn(e.$$.fragment), t = Gn(), n = _s("div"), p && p.c(), s = Gn(), y && y.c(), l = Gn(), w && w.c(), o = Gn(), r = _s("div"), a = _s("div"), yn(c.$$.fragment), d = Gn(), W && W.c(), _ = Gn(), x && x.c(), g = Gn(), B && B.c(), cs(n, "class", "icon-buttons svelte-1gjdske"), cs(a, "class", "upload-container svelte-1gjdske"), cs(r, "data-testid", "image"), cs(r, "class", "image-container svelte-1gjdske");
    },
    m(b, z) {
      Sn(e, b, z), hi(b, t, z), hi(b, n, z), p && p.m(n, null), Li(n, s), y && y.m(n, null), Li(n, l), w && w.m(n, null), hi(b, o, z), hi(b, r, z), Li(r, a), Sn(c, a, null), Li(a, d), W && W.m(a, null), Li(a, _), x && x.m(a, null), Li(r, g), B && B.m(r, null), v = !0;
    },
    p(b, z) {
      const D = {};
      z[0] & /*show_label*/
      8 && (D.show_label = /*show_label*/
      b[3]), z[0] & /*label*/
      4 && (D.label = /*label*/
      b[2] || "Image Annotator"), e.$set(D), /*showDownloadButton*/
      b[10] && /*value*/
      b[1] !== null ? p ? (p.p(b, z), z[0] & /*showDownloadButton, value*/
      1026 && Me(p, 1)) : (p = dc(b), p.c(), Me(p, 1), p.m(n, s)) : p && (ni(), Re(p, 1, 1, () => {
        p = null;
      }), ti()), /*showShareButton*/
      b[9] && /*value*/
      b[1] !== null ? y ? (y.p(b, z), z[0] & /*showShareButton, value*/
      514 && Me(y, 1)) : (y = _c(b), y.c(), Me(y, 1), y.m(n, l)) : y && (ni(), Re(y, 1, 1, () => {
        y = null;
      }), ti()), /*showClearButton*/
      b[11] && /*value*/
      b[1] !== null && /*interactive*/
      b[7] ? w ? (w.p(b, z), z[0] & /*showClearButton, value, interactive*/
      2178 && Me(w, 1)) : (w = mc(b), w.c(), Me(w, 1), w.m(n, null)) : w && (ni(), Re(w, 1, 1, () => {
        w = null;
      }), ti());
      const P = {};
      z[0] & /*value, active_source*/
      3 && (P.hidden = /*value*/
      b[1] !== null || /*active_source*/
      b[0] === "webcam"), z[0] & /*active_source*/
      1 && (P.filetype = /*active_source*/
      b[0] === "clipboard" ? "clipboard" : "image/*"), z[0] & /*root*/
      64 && (P.root = /*root*/
      b[6]), z[0] & /*max_file_size*/
      33554432 && (P.max_file_size = /*max_file_size*/
      b[25]), z[0] & /*sources*/
      16 && (P.disable_click = !/*sources*/
      b[4].includes("upload")), z[0] & /*cli_upload*/
      67108864 && (P.upload = /*cli_upload*/
      b[26]), z[0] & /*stream_handler*/
      134217728 && (P.stream_handler = /*stream_handler*/
      b[27]), z[0] & /*value*/
      2 | z[1] & /*$$scope*/
      16777216 && (P.$$scope = { dirty: z, ctx: b }), !f && z[0] & /*uploading*/
      1073741824 && (f = !0, P.uploading = /*uploading*/
      b[30], pl(() => f = !1)), !h && z[1] & /*dragging*/
      1 && (h = !0, P.dragging = /*dragging*/
      b[31], pl(() => h = !1)), c.$set(P), /*value*/
      b[1] === null && /*active_source*/
      b[0] === "webcam" ? W ? (W.p(b, z), z[0] & /*value, active_source*/
      3 && Me(W, 1)) : (W = pc(b), W.c(), Me(W, 1), W.m(a, _)) : W && (ni(), Re(W, 1, 1, () => {
        W = null;
      }), ti()), /*value*/
      b[1] !== null ? x ? (x.p(b, z), z[0] & /*value*/
      2 && Me(x, 1)) : (x = bc(b), x.c(), Me(x, 1), x.m(a, null)) : x && (ni(), Re(x, 1, 1, () => {
        x = null;
      }), ti()), z[0] & /*sources, value, interactive*/
      146 && (u = /*sources*/
      (b[4].length > 1 || /*sources*/
      b[4].includes("clipboard")) && /*value*/
      b[1] === null && /*interactive*/
      b[7]), u ? B ? (B.p(b, z), z[0] & /*sources, value, interactive*/
      146 && Me(B, 1)) : (B = vc(b), B.c(), Me(B, 1), B.m(r, null)) : B && (ni(), Re(B, 1, 1, () => {
        B = null;
      }), ti());
    },
    i(b) {
      v || (Me(e.$$.fragment, b), Me(p), Me(y), Me(w), Me(c.$$.fragment, b), Me(W), Me(x), Me(B), v = !0);
    },
    o(b) {
      Re(e.$$.fragment, b), Re(p), Re(y), Re(w), Re(c.$$.fragment, b), Re(W), Re(x), Re(B), v = !1;
    },
    d(b) {
      b && (ui(t), ui(n), ui(o), ui(r)), Cn(e, b), p && p.d(), y && y.d(), w && w.d(), i[42](null), Cn(c), W && W.d(), x && x.d(), B && B.d();
    }
  };
}
function Xv(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(E, me, Ce, Ge) {
    function en(Wt) {
      return Wt instanceof Ce ? Wt : new Ce(function(De) {
        De(Wt);
      });
    }
    return new (Ce || (Ce = Promise))(function(Wt, De) {
      function rt(gt) {
        try {
          Wn(Ge.next(gt));
        } catch (Qe) {
          De(Qe);
        }
      }
      function tn(gt) {
        try {
          Wn(Ge.throw(gt));
        } catch (Qe) {
          De(Qe);
        }
      }
      function Wn(gt) {
        gt.done ? Wt(gt.value) : en(gt.value).then(rt, tn);
      }
      Wn((Ge = Ge.apply(E, me || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: h } = e, { interactive: d } = e, { i18n: _ } = e, { showShareButton: g } = e, { showDownloadButton: u } = e, { showClearButton: v } = e, { boxesAlpha: p } = e, { labelList: y } = e, { labelColors: w } = e, { boxMinSize: S } = e, { handleSize: C } = e, { height: k } = e, { width: W } = e, { boxThickness: x } = e, { disableEditBoxes: B } = e, { singleBox: b } = e, { showRemoveButton: z } = e, { handlesCursor: D } = e, { boxSelectedThickness: P } = e, { max_file_size: A = null } = e, { cli_upload: Y } = e, { stream_handler: L } = e, { useDefaultLabel: Z } = e, { shapeCreationMode: q } = e, F, J = !1, { active_source: U = null } = e;
  function j({ detail: E }) {
    t(1, o = new uc()), t(1, o.image = E, o), ne("upload");
  }
  function fe(E) {
    return l(this, void 0, void 0, function* () {
      const me = yield F.load_files([new File([E], "webcam.png")]), Ce = (me == null ? void 0 : me[0]) || null;
      Ce ? (t(1, o = new uc()), t(1, o.image = Ce, o)) : t(1, o = null), yield Wv(), ne("change");
    });
  }
  const ne = zv();
  let T = !1;
  function Pe(E) {
    return l(this, void 0, void 0, function* () {
      switch (E) {
        case "clipboard":
          F.paste_clipboard();
          break;
      }
    });
  }
  function R() {
    t(1, o = null), t(30, J = !1), c && c.length > 0 && t(0, U = c[0]), ne("clear"), ne("change");
  }
  const O = async (E) => E === null ? "" : `<img src="${await U_(E.image)}" />`;
  function re(E) {
    ns.call(this, i, E);
  }
  function I(E) {
    ns.call(this, i, E);
  }
  function ye(E) {
    ps[E ? "unshift" : "push"](() => {
      F = E, t(32, F);
    });
  }
  function X(E) {
    J = E, t(30, J);
  }
  function de(E) {
    T = E, t(31, T);
  }
  function _e(E) {
    ns.call(this, i, E);
  }
  const ke = (E) => fe(E.detail), We = (E) => fe(E.detail);
  function pe(E) {
    ns.call(this, i, E);
  }
  function ie(E) {
    ns.call(this, i, E);
  }
  const Xe = (E) => fe(E.detail);
  function at(E) {
    o = E, t(1, o);
  }
  const zt = () => ne("change"), Je = (E) => ne("select", { index: null, value: E.detail.coordinates });
  function dt(E) {
    U = E, t(0, U), t(4, c);
  }
  return i.$$set = (E) => {
    "value" in E && t(1, o = E.value), "label" in E && t(2, r = E.label), "show_label" in E && t(3, a = E.show_label), "sources" in E && t(4, c = E.sources), "selectable" in E && t(5, f = E.selectable), "root" in E && t(6, h = E.root), "interactive" in E && t(7, d = E.interactive), "i18n" in E && t(8, _ = E.i18n), "showShareButton" in E && t(9, g = E.showShareButton), "showDownloadButton" in E && t(10, u = E.showDownloadButton), "showClearButton" in E && t(11, v = E.showClearButton), "boxesAlpha" in E && t(12, p = E.boxesAlpha), "labelList" in E && t(13, y = E.labelList), "labelColors" in E && t(14, w = E.labelColors), "boxMinSize" in E && t(15, S = E.boxMinSize), "handleSize" in E && t(16, C = E.handleSize), "height" in E && t(17, k = E.height), "width" in E && t(18, W = E.width), "boxThickness" in E && t(19, x = E.boxThickness), "disableEditBoxes" in E && t(20, B = E.disableEditBoxes), "singleBox" in E && t(21, b = E.singleBox), "showRemoveButton" in E && t(22, z = E.showRemoveButton), "handlesCursor" in E && t(23, D = E.handlesCursor), "boxSelectedThickness" in E && t(24, P = E.boxSelectedThickness), "max_file_size" in E && t(25, A = E.max_file_size), "cli_upload" in E && t(26, Y = E.cli_upload), "stream_handler" in E && t(27, L = E.stream_handler), "useDefaultLabel" in E && t(28, Z = E.useDefaultLabel), "shapeCreationMode" in E && t(29, q = E.shapeCreationMode), "active_source" in E && t(0, U = E.active_source), "$$scope" in E && t(55, s = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    1073741824 && J && R(), i.$$.dirty[1] & /*dragging*/
    1 && ne("drag", T), i.$$.dirty[0] & /*active_source, sources*/
    17 && !U && c && t(0, U = c[0]);
  }, [
    U,
    o,
    r,
    a,
    c,
    f,
    h,
    d,
    _,
    g,
    u,
    v,
    p,
    y,
    w,
    S,
    C,
    k,
    W,
    x,
    B,
    b,
    z,
    D,
    P,
    A,
    Y,
    L,
    Z,
    q,
    J,
    T,
    F,
    j,
    fe,
    ne,
    Pe,
    R,
    n,
    O,
    re,
    I,
    ye,
    X,
    de,
    _e,
    ke,
    We,
    pe,
    ie,
    Xe,
    at,
    zt,
    Je,
    dt,
    s
  ];
}
class Yv extends pv {
  constructor(e) {
    super(), yv(
      this,
      e,
      Xv,
      Dv,
      Sv,
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
        shapeCreationMode: 29,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Ev,
  attr: il,
  detach: qf,
  element: Pf,
  init: Rv,
  insert: Hf,
  noop: wc,
  safe_not_equal: Lv,
  src_url_equal: kc,
  toggle_class: Pn
} = window.__gradio__svelte__internal;
function yc(i) {
  let e, t;
  return {
    c() {
      e = Pf("img"), kc(e.src, t = /*value*/
      i[0].url) || il(e, "src", t), il(e, "alt", "");
    },
    m(n, s) {
      Hf(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !kc(e.src, t = /*value*/
      n[0].url) && il(e, "src", t);
    },
    d(n) {
      n && qf(e);
    }
  };
}
function qv(i) {
  let e, t = (
    /*value*/
    i[0] && yc(i)
  );
  return {
    c() {
      e = Pf("div"), t && t.c(), il(e, "class", "container svelte-1sgcyba"), Pn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Pn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Pn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Pn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      Hf(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = yc(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && Pn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && Pn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && Pn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && Pn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: wc,
    o: wc,
    d(n) {
      n && qf(e), t && t.d();
    }
  };
}
function Pv(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class uw extends Ev {
  constructor(e) {
    super(), Rv(this, e, Pv, qv, Lv, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Hv,
  add_flush_callback: Cc,
  assign: jv,
  bind: Sc,
  binding_callbacks: Mc,
  check_outros: Iv,
  create_component: pi,
  destroy_component: bi,
  detach: jf,
  empty: Av,
  flush: we,
  get_spread_object: Tv,
  get_spread_update: Fv,
  group_outros: Ov,
  init: Uv,
  insert: If,
  mount_component: vi,
  safe_not_equal: Nv,
  space: Vv,
  transition_in: Mn,
  transition_out: zn
} = window.__gradio__svelte__internal;
function Kv(i) {
  let e, t;
  return e = new dd({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Gv] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      pi(e.$$.fragment);
    },
    m(n, s) {
      vi(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      16384 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bi(e, n);
    }
  };
}
function Zv(i) {
  let e, t;
  return e = new jc({
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
      pi(e.$$.fragment);
    },
    m(n, s) {
      vi(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bi(e, n);
    }
  };
}
function Jv(i) {
  let e, t;
  return e = new jc({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      pi(e.$$.fragment);
    },
    m(n, s) {
      vi(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bi(e, n);
    }
  };
}
function Gv(i) {
  let e, t;
  return e = new Yc({}), {
    c() {
      pi(e.$$.fragment);
    },
    m(n, s) {
      vi(e, n, s), t = !0;
    },
    i(n) {
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bi(e, n);
    }
  };
}
function Qv(i) {
  let e, t, n, s;
  const l = [Jv, Zv, Kv], o = [];
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
      t.c(), n = Av();
    },
    m(a, c) {
      o[e].m(a, c), If(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Ov(), zn(o[f], 1, 1, () => {
        o[f] = null;
      }), Iv(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Mn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Mn(t), s = !0);
    },
    o(a) {
      zn(t), s = !1;
    },
    d(a) {
      a && jf(n), o[e].d(a);
    }
  };
}
function $v(i) {
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
  for (let d = 0; d < r.length; d += 1)
    a = jv(a, r[d]);
  e = new l1({ props: a });
  function c(d) {
    i[35](d);
  }
  function f(d) {
    i[36](d);
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
    $$slots: { default: [Qv] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (h.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (h.value = /*value*/
    i[0]), n = new Yv({ props: h }), Mc.push(() => Sc(n, "active_source", c)), Mc.push(() => Sc(n, "value", f)), n.$on(
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
        pi(e.$$.fragment), t = Vv(), pi(n.$$.fragment);
      },
      m(d, _) {
        vi(e, d, _), If(d, t, _), vi(n, d, _), o = !0;
      },
      p(d, _) {
        const g = _[0] & /*loading_status*/
        2 | _[1] & /*gradio*/
        2 ? Fv(r, [
          _[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              d[32].autoscroll
            )
          },
          _[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            d[32].i18n
          ) },
          _[0] & /*loading_status*/
          2 && Tv(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(g);
        const u = {};
        _[0] & /*_selectable*/
        1024 && (u.selectable = /*_selectable*/
        d[10]), _[0] & /*root*/
        128 && (u.root = /*root*/
        d[7]), _[0] & /*sources*/
        16384 && (u.sources = /*sources*/
        d[14]), _[0] & /*interactive*/
        262144 && (u.interactive = /*interactive*/
        d[18]), _[0] & /*show_download_button*/
        32768 && (u.showDownloadButton = /*show_download_button*/
        d[15]), _[0] & /*show_share_button*/
        65536 && (u.showShareButton = /*show_share_button*/
        d[16]), _[0] & /*show_clear_button*/
        131072 && (u.showClearButton = /*show_clear_button*/
        d[17]), _[1] & /*gradio*/
        2 && (u.i18n = /*gradio*/
        d[32].i18n), _[0] & /*boxes_alpha*/
        524288 && (u.boxesAlpha = /*boxes_alpha*/
        d[19]), _[0] & /*height*/
        256 && (u.height = /*height*/
        d[8]), _[0] & /*width*/
        512 && (u.width = /*width*/
        d[9]), _[0] & /*label_list*/
        1048576 && (u.labelList = /*label_list*/
        d[20]), _[0] & /*label_colors*/
        2097152 && (u.labelColors = /*label_colors*/
        d[21]), _[0] & /*box_min_size*/
        4194304 && (u.boxMinSize = /*box_min_size*/
        d[22]), _[0] & /*label*/
        32 && (u.label = /*label*/
        d[5]), _[0] & /*show_label*/
        64 && (u.show_label = /*show_label*/
        d[6]), _[1] & /*gradio*/
        2 && (u.max_file_size = /*gradio*/
        d[32].max_file_size), _[1] & /*gradio*/
        2 && (u.cli_upload = /*gradio*/
        d[32].client.upload), _[1] & /*gradio*/
        2 && (u.stream_handler = /*gradio*/
        d[32].client.stream), _[0] & /*handle_size*/
        8388608 && (u.handleSize = /*handle_size*/
        d[23]), _[0] & /*box_thickness*/
        16777216 && (u.boxThickness = /*box_thickness*/
        d[24]), _[0] & /*box_selected_thickness*/
        33554432 && (u.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), _[0] & /*disable_edit_boxes*/
        67108864 && (u.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), _[0] & /*single_box*/
        134217728 && (u.singleBox = /*single_box*/
        d[27]), _[0] & /*show_remove_button*/
        268435456 && (u.showRemoveButton = /*show_remove_button*/
        d[28]), _[0] & /*handles_cursor*/
        536870912 && (u.handlesCursor = /*handles_cursor*/
        d[29]), _[0] & /*use_default_label*/
        1073741824 && (u.useDefaultLabel = /*use_default_label*/
        d[30]), _[1] & /*shape_creation_mode*/
        1 && (u.shapeCreationMode = /*shape_creation_mode*/
        d[31]), _[1] & /*$$scope, gradio, active_source*/
        16394 && (u.$$scope = { dirty: _, ctx: d }), !s && _[1] & /*active_source*/
        8 && (s = !0, u.active_source = /*active_source*/
        d[34], Cc(() => s = !1)), !l && _[0] & /*value*/
        1 && (l = !0, u.value = /*value*/
        d[0], Cc(() => l = !1)), n.$set(u);
      },
      i(d) {
        o || (Mn(e.$$.fragment, d), Mn(n.$$.fragment, d), o = !0);
      },
      o(d) {
        zn(e.$$.fragment, d), zn(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && jf(t), bi(e, d), bi(n, d);
      }
    }
  );
}
function ew(i) {
  let e, t;
  return e = new Hu({
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
      $$slots: { default: [$v] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      pi(e.$$.fragment);
    },
    m(n, s) {
      vi(e, n, s), t = !0;
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
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bi(e, n);
    }
  };
}
function tw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: h } = e, { _selectable: d = !1 } = e, { container: _ = !0 } = e, { scale: g = null } = e, { min_width: u = void 0 } = e, { loading_status: v } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: y } = e, { show_share_button: w } = e, { show_clear_button: S } = e, { interactive: C } = e, { boxes_alpha: k } = e, { label_list: W } = e, { label_colors: x } = e, { box_min_size: B } = e, { handle_size: b } = e, { box_thickness: z } = e, { box_selected_thickness: D } = e, { disable_edit_boxes: P } = e, { single_box: A } = e, { show_remove_button: Y } = e, { handles_cursor: L } = e, { use_default_label: Z } = e, { shape_creation_mode: q } = e, { gradio: F } = e, J, U = null;
  function j(X) {
    U = X, t(34, U);
  }
  function fe(X) {
    o = X, t(0, o);
  }
  const ne = () => F.dispatch("change"), T = () => F.dispatch("edit"), Pe = () => {
    F.dispatch("clear");
  }, R = ({ detail: X }) => t(33, J = X), O = () => F.dispatch("upload"), re = ({ detail: X }) => F.dispatch("select", X), I = ({ detail: X }) => F.dispatch("share", X), ye = ({ detail: X }) => {
    t(1, v = v || {}), t(1, v.status = "error", v), F.dispatch("error", X);
  };
  return i.$$set = (X) => {
    "elem_id" in X && t(2, n = X.elem_id), "elem_classes" in X && t(3, s = X.elem_classes), "visible" in X && t(4, l = X.visible), "value" in X && t(0, o = X.value), "label" in X && t(5, r = X.label), "show_label" in X && t(6, a = X.show_label), "root" in X && t(7, c = X.root), "height" in X && t(8, f = X.height), "width" in X && t(9, h = X.width), "_selectable" in X && t(10, d = X._selectable), "container" in X && t(11, _ = X.container), "scale" in X && t(12, g = X.scale), "min_width" in X && t(13, u = X.min_width), "loading_status" in X && t(1, v = X.loading_status), "sources" in X && t(14, p = X.sources), "show_download_button" in X && t(15, y = X.show_download_button), "show_share_button" in X && t(16, w = X.show_share_button), "show_clear_button" in X && t(17, S = X.show_clear_button), "interactive" in X && t(18, C = X.interactive), "boxes_alpha" in X && t(19, k = X.boxes_alpha), "label_list" in X && t(20, W = X.label_list), "label_colors" in X && t(21, x = X.label_colors), "box_min_size" in X && t(22, B = X.box_min_size), "handle_size" in X && t(23, b = X.handle_size), "box_thickness" in X && t(24, z = X.box_thickness), "box_selected_thickness" in X && t(25, D = X.box_selected_thickness), "disable_edit_boxes" in X && t(26, P = X.disable_edit_boxes), "single_box" in X && t(27, A = X.single_box), "show_remove_button" in X && t(28, Y = X.show_remove_button), "handles_cursor" in X && t(29, L = X.handles_cursor), "use_default_label" in X && t(30, Z = X.use_default_label), "shape_creation_mode" in X && t(31, q = X.shape_creation_mode), "gradio" in X && t(32, F = X.gradio);
  }, [
    o,
    v,
    n,
    s,
    l,
    r,
    a,
    c,
    f,
    h,
    d,
    _,
    g,
    u,
    p,
    y,
    w,
    S,
    C,
    k,
    W,
    x,
    B,
    b,
    z,
    D,
    P,
    A,
    Y,
    L,
    Z,
    q,
    F,
    J,
    U,
    j,
    fe,
    ne,
    T,
    Pe,
    R,
    O,
    re,
    I,
    ye
  ];
}
class hw extends Hv {
  constructor(e) {
    super(), Uv(
      this,
      e,
      tw,
      ew,
      Nv,
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
    this.$$set({ elem_id: e }), we();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), we();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), we();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), we();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), we();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), we();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), we();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), we();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), we();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), we();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), we();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), we();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), we();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), we();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), we();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), we();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), we();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), we();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), we();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), we();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), we();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), we();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), we();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), we();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), we();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), we();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), we();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), we();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), we();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), we();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), we();
  }
  get shape_creation_mode() {
    return this.$$.ctx[31];
  }
  set shape_creation_mode(e) {
    this.$$set({ shape_creation_mode: e }), we();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), we();
  }
}
export {
  uw as BaseExample,
  hw as default
};
