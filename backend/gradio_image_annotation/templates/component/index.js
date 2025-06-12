const {
  SvelteComponent: Jf,
  assign: Gf,
  create_slot: Qf,
  detach: $f,
  element: eu,
  get_all_dirty_from_scope: tu,
  get_slot_changes: nu,
  get_spread_update: iu,
  init: su,
  insert: lu,
  safe_not_equal: ou,
  set_dynamic_element_data: Qo,
  set_style: dt,
  toggle_class: Ft,
  transition_in: oc,
  transition_out: ac,
  update_slot_base: au
} = window.__gradio__svelte__internal;
function ru(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Qf(
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
    r = Gf(r, o[a]);
  return {
    c() {
      e = eu(
        /*tag*/
        i[14]
      ), l && l.c(), Qo(
        /*tag*/
        i[14]
      )(e, r), Ft(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), Ft(
        e,
        "padded",
        /*padding*/
        i[6]
      ), Ft(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), Ft(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), Ft(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), dt(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), dt(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), dt(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), dt(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), dt(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), dt(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), dt(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      lu(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && au(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? nu(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : tu(
          /*$$scope*/
          a[17]
        ),
        null
      ), Qo(
        /*tag*/
        a[14]
      )(e, r = iu(o, [
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
      ])), Ft(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Ft(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Ft(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Ft(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Ft(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && dt(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && dt(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && dt(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && dt(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && dt(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && dt(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (oc(l, a), n = !0);
    },
    o(a) {
      ac(l, a), n = !1;
    },
    d(a) {
      a && $f(e), l && l.d(a);
    }
  };
}
function cu(i) {
  let e, t = (
    /*tag*/
    i[14] && ru(i)
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
      e || (oc(t, n), e = !0);
    },
    o(n) {
      ac(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function fu(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: b = !1 } = e, { container: g = !0 } = e, { visible: p = !0 } = e, { allow_overflow: w = !0 } = e, { scale: h = null } = e, { min_width: v = 0 } = e, y = d === "fieldset" ? "fieldset" : "div";
  const k = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return i.$$set = (C) => {
    "height" in C && t(0, l = C.height), "width" in C && t(1, o = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, c = C.variant), "border_mode" in C && t(5, f = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, d = C.type), "test_id" in C && t(7, m = C.test_id), "explicit_call" in C && t(8, b = C.explicit_call), "container" in C && t(9, g = C.container), "visible" in C && t(10, p = C.visible), "allow_overflow" in C && t(11, w = C.allow_overflow), "scale" in C && t(12, h = C.scale), "min_width" in C && t(13, v = C.min_width), "$$scope" in C && t(17, s = C.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    m,
    b,
    g,
    p,
    w,
    h,
    v,
    y,
    k,
    d,
    s,
    n
  ];
}
class uu extends Jf {
  constructor(e) {
    super(), su(this, e, fu, cu, ou, {
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
  SvelteComponent: hu,
  attr: du,
  create_slot: _u,
  detach: mu,
  element: gu,
  get_all_dirty_from_scope: bu,
  get_slot_changes: pu,
  init: wu,
  insert: vu,
  safe_not_equal: ku,
  transition_in: yu,
  transition_out: Cu,
  update_slot_base: Su
} = window.__gradio__svelte__internal;
function Mu(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = _u(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = gu("div"), s && s.c(), du(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      vu(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && Su(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? pu(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : bu(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (yu(s, l), t = !0);
    },
    o(l) {
      Cu(s, l), t = !1;
    },
    d(l) {
      l && mu(e), s && s.d(l);
    }
  };
}
function zu(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class xu extends hu {
  constructor(e) {
    super(), wu(this, e, zu, Mu, ku, {});
  }
}
const {
  SvelteComponent: Wu,
  attr: $o,
  check_outros: Bu,
  create_component: Du,
  create_slot: Xu,
  destroy_component: Yu,
  detach: Ys,
  element: Eu,
  empty: Ru,
  get_all_dirty_from_scope: qu,
  get_slot_changes: Lu,
  group_outros: Pu,
  init: Iu,
  insert: Es,
  mount_component: Hu,
  safe_not_equal: Au,
  set_data: Tu,
  space: Fu,
  text: Uu,
  toggle_class: ai,
  transition_in: Fi,
  transition_out: Rs,
  update_slot_base: Ou
} = window.__gradio__svelte__internal;
function ea(i) {
  let e, t;
  return e = new xu({
    props: {
      $$slots: { default: [ju] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Du(e.$$.fragment);
    },
    m(n, s) {
      Hu(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Fi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yu(e, n);
    }
  };
}
function ju(i) {
  let e;
  return {
    c() {
      e = Uu(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Es(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Tu(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ys(e);
    }
  };
}
function Vu(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Xu(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && ea(i)
  );
  return {
    c() {
      e = Eu("span"), o && o.c(), t = Fu(), r && r.c(), n = Ru(), $o(e, "data-testid", "block-info"), $o(e, "class", "svelte-22c38v"), ai(e, "sr-only", !/*show_label*/
      i[0]), ai(e, "hide", !/*show_label*/
      i[0]), ai(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      Es(a, e, c), o && o.m(e, null), Es(a, t, c), r && r.m(a, c), Es(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Ou(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Lu(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : qu(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && ai(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && ai(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && ai(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && Fi(r, 1)) : (r = ea(a), r.c(), Fi(r, 1), r.m(n.parentNode, n)) : r && (Pu(), Rs(r, 1, 1, () => {
        r = null;
      }), Bu());
    },
    i(a) {
      s || (Fi(o, a), Fi(r), s = !0);
    },
    o(a) {
      Rs(o, a), Rs(r), s = !1;
    },
    d(a) {
      a && (Ys(e), Ys(t), Ys(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Nu(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class rc extends Wu {
  constructor(e) {
    super(), Iu(this, e, Nu, Vu, Au, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Ku,
  append: ul,
  attr: rs,
  create_component: Zu,
  destroy_component: Ju,
  detach: Gu,
  element: ta,
  init: Qu,
  insert: $u,
  mount_component: eh,
  safe_not_equal: th,
  set_data: nh,
  space: ih,
  text: sh,
  toggle_class: mn,
  transition_in: lh,
  transition_out: oh
} = window.__gradio__svelte__internal;
function ah(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ta("label"), t = ta("span"), Zu(n.$$.fragment), s = ih(), l = sh(
        /*label*/
        i[0]
      ), rs(t, "class", "svelte-9gxdi0"), rs(e, "for", ""), rs(e, "data-testid", "block-label"), rs(e, "class", "svelte-9gxdi0"), mn(e, "hide", !/*show_label*/
      i[2]), mn(e, "sr-only", !/*show_label*/
      i[2]), mn(
        e,
        "float",
        /*float*/
        i[4]
      ), mn(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      $u(r, e, a), ul(e, t), eh(n, t, null), ul(e, s), ul(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && nh(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && mn(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && mn(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && mn(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && mn(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (lh(n.$$.fragment, r), o = !0);
    },
    o(r) {
      oh(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Gu(e), Ju(n);
    }
  };
}
function rh(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class ch extends Ku {
  constructor(e) {
    super(), Qu(this, e, rh, ah, th, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: fh,
  append: ao,
  attr: nn,
  bubble: uh,
  create_component: hh,
  destroy_component: dh,
  detach: cc,
  element: ro,
  init: _h,
  insert: fc,
  listen: mh,
  mount_component: gh,
  safe_not_equal: bh,
  set_data: ph,
  set_style: ri,
  space: wh,
  text: vh,
  toggle_class: it,
  transition_in: kh,
  transition_out: yh
} = window.__gradio__svelte__internal;
function na(i) {
  let e, t;
  return {
    c() {
      e = ro("span"), t = vh(
        /*label*/
        i[1]
      ), nn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      fc(n, e, s), ao(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && ph(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && cc(e);
    }
  };
}
function Ch(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && na(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = ro("button"), a && a.c(), t = wh(), n = ro("div"), hh(s.$$.fragment), nn(n, "class", "svelte-1lrphxw"), it(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), it(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), it(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], nn(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), nn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), nn(
        e,
        "title",
        /*label*/
        i[1]
      ), nn(e, "class", "svelte-1lrphxw"), it(
        e,
        "pending",
        /*pending*/
        i[3]
      ), it(
        e,
        "padded",
        /*padded*/
        i[5]
      ), it(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), it(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), ri(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), ri(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), ri(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      fc(c, e, f), a && a.m(e, null), ao(e, t), ao(e, n), gh(s, n, null), l = !0, o || (r = mh(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = na(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && it(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && it(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && it(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && nn(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && nn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && nn(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && it(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && it(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && it(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && it(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && ri(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && ri(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && ri(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (kh(s.$$.fragment, c), l = !0);
    },
    o(c) {
      yh(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && cc(e), a && a.d(), dh(s), o = !1, r();
    }
  };
}
function Sh(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: m = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: p = 0 } = e;
  function w(h) {
    uh.call(this, i, h);
  }
  return i.$$set = (h) => {
    "Icon" in h && t(0, s = h.Icon), "label" in h && t(1, l = h.label), "show_label" in h && t(2, o = h.show_label), "pending" in h && t(3, r = h.pending), "size" in h && t(4, a = h.size), "padded" in h && t(5, c = h.padded), "highlight" in h && t(6, f = h.highlight), "disabled" in h && t(7, u = h.disabled), "hasPopup" in h && t(8, d = h.hasPopup), "color" in h && t(13, m = h.color), "transparent" in h && t(9, b = h.transparent), "background" in h && t(10, g = h.background), "offset" in h && t(11, p = h.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = f ? "var(--color-accent)" : m);
  }, [
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    b,
    g,
    p,
    n,
    m,
    w
  ];
}
class tl extends fh {
  constructor(e) {
    super(), _h(this, e, Sh, Ch, bh, {
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
  SvelteComponent: Mh,
  append: zh,
  attr: hl,
  binding_callbacks: xh,
  create_slot: Wh,
  detach: Bh,
  element: ia,
  get_all_dirty_from_scope: Dh,
  get_slot_changes: Xh,
  init: Yh,
  insert: Eh,
  safe_not_equal: Rh,
  toggle_class: gn,
  transition_in: qh,
  transition_out: Lh,
  update_slot_base: Ph
} = window.__gradio__svelte__internal;
function Ih(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = Wh(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ia("div"), t = ia("div"), l && l.c(), hl(t, "class", "icon svelte-3w3rth"), hl(e, "class", "empty svelte-3w3rth"), hl(e, "aria-label", "Empty value"), gn(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), gn(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), gn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), gn(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Eh(o, e, r), zh(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Ph(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Xh(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Dh(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && gn(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && gn(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && gn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && gn(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (qh(l, o), n = !0);
    },
    o(o) {
      Lh(l, o), n = !1;
    },
    d(o) {
      o && Bh(e), l && l.d(o), i[6](null);
    }
  };
}
function Hh(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var d;
    if (!u) return !1;
    const { height: m } = u.getBoundingClientRect(), { height: b } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: m };
    return m > b + 2;
  }
  function f(u) {
    xh[u ? "unshift" : "push"](() => {
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
class Ah extends Mh {
  constructor(e) {
    super(), Yh(this, e, Hh, Ih, Rh, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Th,
  append: sa,
  attr: st,
  detach: Fh,
  init: Uh,
  insert: Oh,
  noop: dl,
  safe_not_equal: jh,
  svg_element: _l
} = window.__gradio__svelte__internal;
function Vh(i) {
  let e, t, n;
  return {
    c() {
      e = _l("svg"), t = _l("path"), n = _l("circle"), st(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), st(n, "cx", "12"), st(n, "cy", "13"), st(n, "r", "4"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "stroke-width", "1.5"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round"), st(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Oh(s, e, l), sa(e, t), sa(e, n);
    },
    p: dl,
    i: dl,
    o: dl,
    d(s) {
      s && Fh(e);
    }
  };
}
class Nh extends Th {
  constructor(e) {
    super(), Uh(this, e, null, Vh, jh, {});
  }
}
const {
  SvelteComponent: Kh,
  append: Zh,
  attr: Xt,
  detach: Jh,
  init: Gh,
  insert: Qh,
  noop: ml,
  safe_not_equal: $h,
  svg_element: la
} = window.__gradio__svelte__internal;
function ed(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("circle"), Xt(t, "cx", "12"), Xt(t, "cy", "12"), Xt(t, "r", "10"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24"), Xt(e, "stroke-width", "1.5"), Xt(e, "stroke-linecap", "round"), Xt(e, "stroke-linejoin", "round"), Xt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Qh(n, e, s), Zh(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && Jh(e);
    }
  };
}
let td = class extends Kh {
  constructor(e) {
    super(), Gh(this, e, null, ed, $h, {});
  }
};
const {
  SvelteComponent: nd,
  append: gl,
  attr: Yt,
  detach: id,
  init: sd,
  insert: ld,
  noop: bl,
  safe_not_equal: od,
  set_style: Ut,
  svg_element: cs
} = window.__gradio__svelte__internal;
function ad(i) {
  let e, t, n, s;
  return {
    c() {
      e = cs("svg"), t = cs("g"), n = cs("path"), s = cs("path"), Yt(n, "d", "M18,6L6.087,17.913"), Ut(n, "fill", "none"), Ut(n, "fill-rule", "nonzero"), Ut(n, "stroke-width", "2px"), Yt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Yt(s, "d", "M4.364,4.364L19.636,19.636"), Ut(s, "fill", "none"), Ut(s, "fill-rule", "nonzero"), Ut(s, "stroke-width", "2px"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "version", "1.1"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Yt(e, "xml:space", "preserve"), Yt(e, "stroke", "currentColor"), Ut(e, "fill-rule", "evenodd"), Ut(e, "clip-rule", "evenodd"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      ld(l, e, o), gl(e, t), gl(t, n), gl(e, s);
    },
    p: bl,
    i: bl,
    o: bl,
    d(l) {
      l && id(e);
    }
  };
}
class uc extends nd {
  constructor(e) {
    super(), sd(this, e, null, ad, od, {});
  }
}
const {
  SvelteComponent: rd,
  append: cd,
  attr: qi,
  detach: fd,
  init: ud,
  insert: hd,
  noop: pl,
  safe_not_equal: dd,
  svg_element: oa
} = window.__gradio__svelte__internal;
function _d(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), qi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), qi(t, "fill", "currentColor"), qi(e, "id", "icon"), qi(e, "xmlns", "http://www.w3.org/2000/svg"), qi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      hd(n, e, s), cd(e, t);
    },
    p: pl,
    i: pl,
    o: pl,
    d(n) {
      n && fd(e);
    }
  };
}
class md extends rd {
  constructor(e) {
    super(), ud(this, e, null, _d, dd, {});
  }
}
const {
  SvelteComponent: gd,
  append: bd,
  attr: ci,
  detach: pd,
  init: wd,
  insert: vd,
  noop: wl,
  safe_not_equal: kd,
  svg_element: aa
} = window.__gradio__svelte__internal;
function yd(i) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), ci(t, "fill", "currentColor"), ci(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), ci(e, "xmlns", "http://www.w3.org/2000/svg"), ci(e, "width", "100%"), ci(e, "height", "100%"), ci(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      vd(n, e, s), bd(e, t);
    },
    p: wl,
    i: wl,
    o: wl,
    d(n) {
      n && pd(e);
    }
  };
}
class Cd extends gd {
  constructor(e) {
    super(), wd(this, e, null, yd, kd, {});
  }
}
const {
  SvelteComponent: Sd,
  append: Md,
  attr: fi,
  detach: zd,
  init: xd,
  insert: Wd,
  noop: vl,
  safe_not_equal: Bd,
  svg_element: ra
} = window.__gradio__svelte__internal;
function Dd(i) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), fi(t, "d", "M5 8l4 4 4-4z"), fi(e, "class", "dropdown-arrow svelte-145leq6"), fi(e, "xmlns", "http://www.w3.org/2000/svg"), fi(e, "width", "100%"), fi(e, "height", "100%"), fi(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      Wd(n, e, s), Md(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && zd(e);
    }
  };
}
let Xo = class extends Sd {
  constructor(e) {
    super(), xd(this, e, null, Dd, Bd, {});
  }
};
const {
  SvelteComponent: Xd,
  append: kl,
  attr: Ee,
  detach: Yd,
  init: Ed,
  insert: Rd,
  noop: yl,
  safe_not_equal: qd,
  svg_element: fs
} = window.__gradio__svelte__internal;
function Ld(i) {
  let e, t, n, s;
  return {
    c() {
      e = fs("svg"), t = fs("rect"), n = fs("circle"), s = fs("polyline"), Ee(t, "x", "3"), Ee(t, "y", "3"), Ee(t, "width", "18"), Ee(t, "height", "18"), Ee(t, "rx", "2"), Ee(t, "ry", "2"), Ee(n, "cx", "8.5"), Ee(n, "cy", "8.5"), Ee(n, "r", "1.5"), Ee(s, "points", "21 15 16 10 5 21"), Ee(e, "xmlns", "http://www.w3.org/2000/svg"), Ee(e, "width", "100%"), Ee(e, "height", "100%"), Ee(e, "viewBox", "0 0 24 24"), Ee(e, "fill", "none"), Ee(e, "stroke", "currentColor"), Ee(e, "stroke-width", "1.5"), Ee(e, "stroke-linecap", "round"), Ee(e, "stroke-linejoin", "round"), Ee(e, "class", "feather feather-image");
    },
    m(l, o) {
      Rd(l, e, o), kl(e, t), kl(e, n), kl(e, s);
    },
    p: yl,
    i: yl,
    o: yl,
    d(l) {
      l && Yd(e);
    }
  };
}
let hc = class extends Xd {
  constructor(e) {
    super(), Ed(this, e, null, Ld, qd, {});
  }
};
const {
  SvelteComponent: Pd,
  append: Id,
  attr: us,
  detach: Hd,
  init: Ad,
  insert: Td,
  noop: Cl,
  safe_not_equal: Fd,
  svg_element: ca
} = window.__gradio__svelte__internal;
function Ud(i) {
  let e, t;
  return {
    c() {
      e = ca("svg"), t = ca("path"), us(t, "fill", "currentColor"), us(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), us(e, "xmlns", "http://www.w3.org/2000/svg"), us(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      Td(n, e, s), Id(e, t);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(n) {
      n && Hd(e);
    }
  };
}
class dc extends Pd {
  constructor(e) {
    super(), Ad(this, e, null, Ud, Fd, {});
  }
}
const {
  SvelteComponent: Od,
  append: hs,
  attr: Re,
  detach: jd,
  init: Vd,
  insert: Nd,
  noop: Sl,
  safe_not_equal: Kd,
  svg_element: Li
} = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = Li("svg"), t = Li("path"), n = Li("path"), s = Li("line"), l = Li("line"), Re(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Re(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Re(s, "x1", "12"), Re(s, "y1", "19"), Re(s, "x2", "12"), Re(s, "y2", "23"), Re(l, "x1", "8"), Re(l, "y1", "23"), Re(l, "x2", "16"), Re(l, "y2", "23"), Re(e, "xmlns", "http://www.w3.org/2000/svg"), Re(e, "width", "100%"), Re(e, "height", "100%"), Re(e, "viewBox", "0 0 24 24"), Re(e, "fill", "none"), Re(e, "stroke", "currentColor"), Re(e, "stroke-width", "2"), Re(e, "stroke-linecap", "round"), Re(e, "stroke-linejoin", "round"), Re(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Nd(o, e, r), hs(e, t), hs(e, n), hs(e, s), hs(e, l);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(o) {
      o && jd(e);
    }
  };
}
class Jd extends Od {
  constructor(e) {
    super(), Vd(this, e, null, Zd, Kd, {});
  }
}
const {
  SvelteComponent: Gd,
  append: Qd,
  attr: lt,
  detach: $d,
  init: e_,
  insert: t_,
  noop: Ml,
  safe_not_equal: n_,
  svg_element: fa
} = window.__gradio__svelte__internal;
function i_(i) {
  let e, t;
  return {
    c() {
      e = fa("svg"), t = fa("rect"), lt(t, "x", "3"), lt(t, "y", "3"), lt(t, "width", "18"), lt(t, "height", "18"), lt(t, "rx", "2"), lt(t, "ry", "2"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "stroke-width", "1.5"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round"), lt(e, "class", "feather feather-square");
    },
    m(n, s) {
      t_(n, e, s), Qd(e, t);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(n) {
      n && $d(e);
    }
  };
}
class s_ extends Gd {
  constructor(e) {
    super(), e_(this, e, null, i_, n_, {});
  }
}
const {
  SvelteComponent: l_,
  append: zl,
  attr: Ge,
  detach: o_,
  init: a_,
  insert: r_,
  noop: xl,
  safe_not_equal: c_,
  svg_element: ds
} = window.__gradio__svelte__internal;
function f_(i) {
  let e, t, n, s;
  return {
    c() {
      e = ds("svg"), t = ds("path"), n = ds("polyline"), s = ds("line"), Ge(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ge(n, "points", "17 8 12 3 7 8"), Ge(s, "x1", "12"), Ge(s, "y1", "3"), Ge(s, "x2", "12"), Ge(s, "y2", "15"), Ge(e, "xmlns", "http://www.w3.org/2000/svg"), Ge(e, "width", "90%"), Ge(e, "height", "90%"), Ge(e, "viewBox", "0 0 24 24"), Ge(e, "fill", "none"), Ge(e, "stroke", "currentColor"), Ge(e, "stroke-width", "2"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round"), Ge(e, "class", "feather feather-upload");
    },
    m(l, o) {
      r_(l, e, o), zl(e, t), zl(e, n), zl(e, s);
    },
    p: xl,
    i: xl,
    o: xl,
    d(l) {
      l && o_(e);
    }
  };
}
let _c = class extends l_ {
  constructor(e) {
    super(), a_(this, e, null, f_, c_, {});
  }
};
const {
  SvelteComponent: u_,
  append: ua,
  attr: bn,
  detach: h_,
  init: d_,
  insert: __,
  noop: Wl,
  safe_not_equal: m_,
  svg_element: Bl
} = window.__gradio__svelte__internal;
function g_(i) {
  let e, t, n;
  return {
    c() {
      e = Bl("svg"), t = Bl("path"), n = Bl("path"), bn(t, "fill", "currentColor"), bn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), bn(n, "fill", "currentColor"), bn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), bn(e, "xmlns", "http://www.w3.org/2000/svg"), bn(e, "width", "100%"), bn(e, "height", "100%"), bn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      __(s, e, l), ua(e, t), ua(e, n);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(s) {
      s && h_(e);
    }
  };
}
let mc = class extends u_ {
  constructor(e) {
    super(), d_(this, e, null, g_, m_, {});
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
], ha = {
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
      primary: ha[e][t],
      secondary: ha[e][n]
    }
  }),
  {}
);
class qs extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function p_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new qs("Must be on Spaces to share.");
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
      throw new qs(`Upload failed: ${c.error}`);
    }
    throw new qs("Upload failed.");
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
  safe_not_equal: M_,
  transition_in: z_,
  transition_out: x_
} = window.__gradio__svelte__internal, { createEventDispatcher: W_ } = window.__gradio__svelte__internal;
function B_(i) {
  let e, t;
  return e = new tl({
    props: {
      Icon: md,
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
      x_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      y_(e, n);
    }
  };
}
function D_(i, e, t) {
  const n = W_();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof qs ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class X_ extends v_ {
  constructor(e) {
    super(), C_(this, e, D_, B_, M_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Y_,
  append: jn,
  attr: co,
  check_outros: E_,
  create_component: gc,
  destroy_component: bc,
  detach: Ls,
  element: fo,
  group_outros: R_,
  init: q_,
  insert: Ps,
  mount_component: pc,
  safe_not_equal: L_,
  set_data: uo,
  space: ho,
  text: Ui,
  toggle_class: da,
  transition_in: As,
  transition_out: Ts
} = window.__gradio__svelte__internal;
function P_(i) {
  let e, t;
  return e = new _c({}), {
    c() {
      gc(e.$$.fragment);
    },
    m(n, s) {
      pc(e, n, s), t = !0;
    },
    i(n) {
      t || (As(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ts(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bc(e, n);
    }
  };
}
function I_(i) {
  let e, t;
  return e = new dc({}), {
    c() {
      gc(e.$$.fragment);
    },
    m(n, s) {
      pc(e, n, s), t = !0;
    },
    i(n) {
      t || (As(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ts(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bc(e, n);
    }
  };
}
function _a(i) {
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
      e = fo("span"), t = Ui("- "), s = Ui(n), l = Ui(" -"), o = ho(), a = Ui(r), co(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      Ps(c, e, f), jn(e, t), jn(e, s), jn(e, l), Ps(c, o, f), Ps(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && uo(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && uo(a, r);
    },
    d(c) {
      c && (Ls(e), Ls(o), Ls(a));
    }
  };
}
function H_(i) {
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
  const f = [I_, P_], u = [];
  function d(b, g) {
    return (
      /*type*/
      b[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), s = u[n] = f[n](i);
  let m = (
    /*mode*/
    i[3] !== "short" && _a(i)
  );
  return {
    c() {
      e = fo("div"), t = fo("span"), s.c(), l = ho(), r = Ui(o), a = ho(), m && m.c(), co(t, "class", "icon-wrap svelte-kzcjhc"), da(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), co(e, "class", "wrap svelte-kzcjhc");
    },
    m(b, g) {
      Ps(b, e, g), jn(e, t), u[n].m(t, null), jn(e, l), jn(e, r), jn(e, a), m && m.m(e, null), c = !0;
    },
    p(b, [g]) {
      let p = n;
      n = d(b), n !== p && (R_(), Ts(u[p], 1, 1, () => {
        u[p] = null;
      }), E_(), s = u[n], s || (s = u[n] = f[n](b), s.c()), As(s, 1), s.m(t, null)), (!c || g & /*hovered*/
      16) && da(
        t,
        "hovered",
        /*hovered*/
        b[4]
      ), (!c || g & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      b[1](
        /*defs*/
        b[5][
          /*type*/
          b[0]
        ] || /*defs*/
        b[5].file
      ) + "") && uo(r, o), /*mode*/
      b[3] !== "short" ? m ? m.p(b, g) : (m = _a(b), m.c(), m.m(e, null)) : m && (m.d(1), m = null);
    },
    i(b) {
      c || (As(s), c = !0);
    },
    o(b) {
      Ts(s), c = !1;
    },
    d(b) {
      b && Ls(e), u[n].d(), m && m.d();
    }
  };
}
function A_(i, e, t) {
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
class wc extends Y_ {
  constructor(e) {
    super(), q_(this, e, A_, H_, L_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: T_,
  append: Dl,
  attr: Gt,
  check_outros: Oi,
  create_component: nl,
  destroy_component: il,
  detach: xi,
  element: ns,
  empty: F_,
  group_outros: ji,
  init: U_,
  insert: Wi,
  listen: sl,
  mount_component: ll,
  safe_not_equal: O_,
  space: Xl,
  toggle_class: Bn,
  transition_in: Pe,
  transition_out: at
} = window.__gradio__svelte__internal;
function ma(i) {
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
  ), c, f = t && ga(i), u = s && ba(i), d = o && pa(i), m = a && wa(i);
  return {
    c() {
      e = ns("span"), f && f.c(), n = Xl(), u && u.c(), l = Xl(), d && d.c(), r = Xl(), m && m.c(), Gt(e, "class", "source-selection svelte-1jp3vgd"), Gt(e, "data-testid", "source-select");
    },
    m(b, g) {
      Wi(b, e, g), f && f.m(e, null), Dl(e, n), u && u.m(e, null), Dl(e, l), d && d.m(e, null), Dl(e, r), m && m.m(e, null), c = !0;
    },
    p(b, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      b[1].includes("upload")), t ? f ? (f.p(b, g), g & /*sources*/
      2 && Pe(f, 1)) : (f = ga(b), f.c(), Pe(f, 1), f.m(e, n)) : f && (ji(), at(f, 1, 1, () => {
        f = null;
      }), Oi()), g & /*sources*/
      2 && (s = /*sources*/
      b[1].includes("microphone")), s ? u ? (u.p(b, g), g & /*sources*/
      2 && Pe(u, 1)) : (u = ba(b), u.c(), Pe(u, 1), u.m(e, l)) : u && (ji(), at(u, 1, 1, () => {
        u = null;
      }), Oi()), g & /*sources*/
      2 && (o = /*sources*/
      b[1].includes("webcam")), o ? d ? (d.p(b, g), g & /*sources*/
      2 && Pe(d, 1)) : (d = pa(b), d.c(), Pe(d, 1), d.m(e, r)) : d && (ji(), at(d, 1, 1, () => {
        d = null;
      }), Oi()), g & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? m ? (m.p(b, g), g & /*sources*/
      2 && Pe(m, 1)) : (m = wa(b), m.c(), Pe(m, 1), m.m(e, null)) : m && (ji(), at(m, 1, 1, () => {
        m = null;
      }), Oi());
    },
    i(b) {
      c || (Pe(f), Pe(u), Pe(d), Pe(m), c = !0);
    },
    o(b) {
      at(f), at(u), at(d), at(m), c = !1;
    },
    d(b) {
      b && xi(e), f && f.d(), u && u.d(), d && d.d(), m && m.d();
    }
  };
}
function ga(i) {
  let e, t, n, s, l;
  return t = new _c({}), {
    c() {
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Upload file"), Bn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Wi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Bn(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (Pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xi(e), il(t), s = !1, l();
    }
  };
}
function ba(i) {
  let e, t, n, s, l;
  return t = new Jd({}), {
    c() {
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Record audio"), Bn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Wi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Bn(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (Pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xi(e), il(t), s = !1, l();
    }
  };
}
function pa(i) {
  let e, t, n, s, l;
  return t = new mc({}), {
    c() {
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Capture from camera"), Bn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Wi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Bn(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (Pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xi(e), il(t), s = !1, l();
    }
  };
}
function wa(i) {
  let e, t, n, s, l;
  return t = new dc({}), {
    c() {
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Paste from clipboard"), Bn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Wi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Bn(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (Pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xi(e), il(t), s = !1, l();
    }
  };
}
function j_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && ma(i)
  );
  return {
    c() {
      n && n.c(), e = F_();
    },
    m(s, l) {
      n && n.m(s, l), Wi(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && Pe(n, 1)) : (n = ma(s), n.c(), Pe(n, 1), n.m(e.parentNode, e)) : n && (ji(), at(n, 1, 1, () => {
        n = null;
      }), Oi());
    },
    i(s) {
      t || (Pe(n), t = !0);
    },
    o(s) {
      at(n), t = !1;
    },
    d(s) {
      s && xi(e), n && n.d(s);
    }
  };
}
function V_(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(b, g, p, w) {
    function h(v) {
      return v instanceof p ? v : new p(function(y) {
        y(v);
      });
    }
    return new (p || (p = Promise))(function(v, y) {
      function k(S) {
        try {
          D(w.next(S));
        } catch (R) {
          y(R);
        }
      }
      function C(S) {
        try {
          D(w.throw(S));
        } catch (R) {
          y(R);
        }
      }
      function D(S) {
        S.done ? v(S.value) : h(S.value).then(k, C);
      }
      D((w = w.apply(b, g || [])).next());
    });
  };
  let { sources: l } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function c(b) {
    return s(this, void 0, void 0, function* () {
      r(), t(0, o = b), a(b);
    });
  }
  const f = () => c("upload"), u = () => c("microphone"), d = () => c("webcam"), m = () => c("clipboard");
  return i.$$set = (b) => {
    "sources" in b && t(1, l = b.sources), "active_source" in b && t(0, o = b.active_source), "handle_clear" in b && t(4, r = b.handle_clear), "handle_select" in b && t(5, a = b.handle_select);
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
    d,
    m
  ];
}
class N_ extends T_ {
  constructor(e) {
    super(), U_(this, e, V_, j_, O_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function wi(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Is() {
}
const K_ = (i) => i;
function Z_(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function va(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const vc = typeof window < "u";
let ka = vc ? () => window.performance.now() : () => Date.now(), kc = vc ? (i) => requestAnimationFrame(i) : Is;
const zi = /* @__PURE__ */ new Set();
function yc(i) {
  zi.forEach((e) => {
    e.c(i) || (zi.delete(e), e.f());
  }), zi.size !== 0 && kc(yc);
}
function J_(i) {
  let e;
  return zi.size === 0 && kc(yc), {
    promise: new Promise((t) => {
      zi.add(e = { c: i, f: t });
    }),
    abort() {
      zi.delete(e);
    }
  };
}
function G_(i) {
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
function ya(i, { delay: e = 0, duration: t = 400, easing: n = G_, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [u, d] = va(s), [m, b] = va(l);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (g, p) => `
			transform: ${c} translate(${(1 - g) * u}${d}, ${(1 - g) * m}${b});
			opacity: ${a - f * p}`
  };
}
const ui = [];
function $_(i, e = Is) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (Z_(i, r) && (i = r, t)) {
      const a = !ui.length;
      for (const c of n)
        c[1](), ui.push(c, i);
      if (a) {
        for (let c = 0; c < ui.length; c += 2)
          ui[c][0](ui[c + 1]);
        ui.length = 0;
      }
    }
  }
  function l(r) {
    s(r(i));
  }
  function o(r, a = Is) {
    const c = [r, a];
    return n.add(c), n.size === 1 && (t = e(s, l) || Is), r(i), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function Ca(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function _o(i, e, t, n) {
  if (typeof t == "number" || Ca(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * s, r = i.opts.damping * l, a = (o - r) * i.inv_mass, c = (l + a) * i.dt;
    return Math.abs(c) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, Ca(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, l) => _o(i, e[l], t[l], n[l])
      );
    if (typeof t == "object") {
      const s = {};
      for (const l in t)
        s[l] = _o(i, e[l], t[l], n[l]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Sa(i, e = {}) {
  const t = $_(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, d = 0, m = !1;
  function b(p, w = {}) {
    f = p;
    const h = a = {};
    return i == null || w.hard || g.stiffness >= 1 && g.damping >= 1 ? (m = !0, o = ka(), c = p, t.set(i = f), Promise.resolve()) : (w.soft && (d = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), u = 0), r || (o = ka(), m = !1, r = J_((v) => {
      if (m)
        return m = !1, r = null, !1;
      u = Math.min(u + d, 1);
      const y = {
        inv_mass: u,
        opts: g,
        settled: !0,
        dt: (v - o) * 60 / 1e3
      }, k = _o(y, c, i, f);
      return o = v, c = i, t.set(i = k), y.settled && (r = null), !y.settled;
    })), new Promise((v) => {
      r.promise.then(() => {
        h === a && v();
      });
    }));
  }
  const g = {
    set: b,
    update: (p, w) => b(p(f, i), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return g;
}
const {
  SvelteComponent: em,
  append: Et,
  attr: he,
  component_subscribe: Ma,
  detach: tm,
  element: nm,
  init: im,
  insert: sm,
  noop: za,
  safe_not_equal: lm,
  set_style: _s,
  svg_element: Rt,
  toggle_class: xa
} = window.__gradio__svelte__internal, { onMount: om } = window.__gradio__svelte__internal;
function am(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d;
  return {
    c() {
      e = nm("div"), t = Rt("svg"), n = Rt("g"), s = Rt("path"), l = Rt("path"), o = Rt("path"), r = Rt("path"), a = Rt("g"), c = Rt("path"), f = Rt("path"), u = Rt("path"), d = Rt("path"), he(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), he(s, "fill", "#FF7C00"), he(s, "fill-opacity", "0.4"), he(s, "class", "svelte-43sxxs"), he(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), he(l, "fill", "#FF7C00"), he(l, "class", "svelte-43sxxs"), he(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), he(o, "fill", "#FF7C00"), he(o, "fill-opacity", "0.4"), he(o, "class", "svelte-43sxxs"), he(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), he(r, "fill", "#FF7C00"), he(r, "class", "svelte-43sxxs"), _s(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), he(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), he(c, "fill", "#FF7C00"), he(c, "fill-opacity", "0.4"), he(c, "class", "svelte-43sxxs"), he(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), he(f, "fill", "#FF7C00"), he(f, "class", "svelte-43sxxs"), he(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), he(u, "fill", "#FF7C00"), he(u, "fill-opacity", "0.4"), he(u, "class", "svelte-43sxxs"), he(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), he(d, "fill", "#FF7C00"), he(d, "class", "svelte-43sxxs"), _s(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), he(t, "viewBox", "-1200 -1200 3000 3000"), he(t, "fill", "none"), he(t, "xmlns", "http://www.w3.org/2000/svg"), he(t, "class", "svelte-43sxxs"), he(e, "class", "svelte-43sxxs"), xa(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(m, b) {
      sm(m, e, b), Et(e, t), Et(t, n), Et(n, s), Et(n, l), Et(n, o), Et(n, r), Et(t, a), Et(a, c), Et(a, f), Et(a, u), Et(a, d);
    },
    p(m, [b]) {
      b & /*$top*/
      2 && _s(n, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), b & /*$bottom*/
      4 && _s(a, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), b & /*margin*/
      1 && xa(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: za,
    o: za,
    d(m) {
      m && tm(e);
    }
  };
}
function rm(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(m, b, g, p) {
    function w(h) {
      return h instanceof g ? h : new g(function(v) {
        v(h);
      });
    }
    return new (g || (g = Promise))(function(h, v) {
      function y(D) {
        try {
          C(p.next(D));
        } catch (S) {
          v(S);
        }
      }
      function k(D) {
        try {
          C(p.throw(D));
        } catch (S) {
          v(S);
        }
      }
      function C(D) {
        D.done ? h(D.value) : w(D.value).then(y, k);
      }
      C((p = p.apply(m, b || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = Sa([0, 0]);
  Ma(i, r, (m) => t(1, n = m));
  const a = Sa([0, 0]);
  Ma(i, a, (m) => t(2, s = m));
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
  function d() {
    return l(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return om(() => (d(), () => c = !0)), i.$$set = (m) => {
    "margin" in m && t(0, o = m.margin);
  }, [o, n, s, r, a];
}
class cm extends em {
  constructor(e) {
    super(), im(this, e, rm, am, lm, { margin: 0 });
  }
}
const {
  SvelteComponent: fm,
  append: Vn,
  attr: At,
  binding_callbacks: Wa,
  check_outros: mo,
  create_component: Cc,
  create_slot: Sc,
  destroy_component: Mc,
  destroy_each: zc,
  detach: te,
  element: Zt,
  empty: Bi,
  ensure_array_like: Fs,
  get_all_dirty_from_scope: xc,
  get_slot_changes: Wc,
  group_outros: go,
  init: um,
  insert: ne,
  mount_component: Bc,
  noop: bo,
  safe_not_equal: hm,
  set_data: zt,
  set_style: xn,
  space: Mt,
  text: Xe,
  toggle_class: St,
  transition_in: Ht,
  transition_out: Jt,
  update_slot_base: Dc
} = window.__gradio__svelte__internal, { tick: dm } = window.__gradio__svelte__internal, { onDestroy: _m } = window.__gradio__svelte__internal, { createEventDispatcher: mm } = window.__gradio__svelte__internal, gm = (i) => ({}), Ba = (i) => ({}), bm = (i) => ({}), Da = (i) => ({});
function Xa(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ya(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function pm(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new tl({
    props: {
      Icon: uc,
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
  ), f = Sc(
    c,
    i,
    /*$$scope*/
    i[29],
    Ba
  );
  return {
    c() {
      e = Zt("div"), Cc(t.$$.fragment), n = Mt(), s = Zt("span"), o = Xe(l), r = Mt(), f && f.c(), At(e, "class", "clear-status svelte-16nch4a"), At(s, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      ne(u, e, d), Bc(t, e, null), ne(u, n, d), ne(u, s, d), Vn(s, o), ne(u, r, d), f && f.m(u, d), a = !0;
    },
    p(u, d) {
      const m = {};
      d[0] & /*i18n*/
      2 && (m.label = /*i18n*/
      u[1]("common.clear")), t.$set(m), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && zt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && Dc(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? Wc(
          c,
          /*$$scope*/
          u[29],
          d,
          gm
        ) : xc(
          /*$$scope*/
          u[29]
        ),
        Ba
      );
    },
    i(u) {
      a || (Ht(t.$$.fragment, u), Ht(f, u), a = !0);
    },
    o(u) {
      Jt(t.$$.fragment, u), Jt(f, u), a = !1;
    },
    d(u) {
      u && (te(e), te(n), te(s), te(r)), Mc(t), f && f.d(u);
    }
  };
}
function wm(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ea(i)
  );
  function u(v, y) {
    if (
      /*progress*/
      v[7]
    ) return ym;
    if (
      /*queue_position*/
      v[2] !== null && /*queue_size*/
      v[3] !== void 0 && /*queue_position*/
      v[2] >= 0
    ) return km;
    if (
      /*queue_position*/
      v[2] === 0
    ) return vm;
  }
  let d = u(i), m = d && d(i), b = (
    /*timer*/
    i[5] && La(i)
  );
  const g = [zm, Mm], p = [];
  function w(v, y) {
    return (
      /*last_progress_level*/
      v[15] != null ? 0 : (
        /*show_progress*/
        v[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = w(i)) && (o = p[l] = g[l](i));
  let h = !/*timer*/
  i[5] && Ua(i);
  return {
    c() {
      f && f.c(), e = Mt(), t = Zt("div"), m && m.c(), n = Mt(), b && b.c(), s = Mt(), o && o.c(), r = Mt(), h && h.c(), a = Bi(), At(t, "class", "progress-text svelte-16nch4a"), St(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), St(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(v, y) {
      f && f.m(v, y), ne(v, e, y), ne(v, t, y), m && m.m(t, null), Vn(t, n), b && b.m(t, null), ne(v, s, y), ~l && p[l].m(v, y), ne(v, r, y), h && h.m(v, y), ne(v, a, y), c = !0;
    },
    p(v, y) {
      /*variant*/
      v[8] === "default" && /*show_eta_bar*/
      v[18] && /*show_progress*/
      v[6] === "full" ? f ? f.p(v, y) : (f = Ea(v), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = u(v)) && m ? m.p(v, y) : (m && m.d(1), m = d && d(v), m && (m.c(), m.m(t, n))), /*timer*/
      v[5] ? b ? b.p(v, y) : (b = La(v), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!c || y[0] & /*variant*/
      256) && St(
        t,
        "meta-text-center",
        /*variant*/
        v[8] === "center"
      ), (!c || y[0] & /*variant*/
      256) && St(
        t,
        "meta-text",
        /*variant*/
        v[8] === "default"
      );
      let k = l;
      l = w(v), l === k ? ~l && p[l].p(v, y) : (o && (go(), Jt(p[k], 1, 1, () => {
        p[k] = null;
      }), mo()), ~l ? (o = p[l], o ? o.p(v, y) : (o = p[l] = g[l](v), o.c()), Ht(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      v[5] ? h && (go(), Jt(h, 1, 1, () => {
        h = null;
      }), mo()) : h ? (h.p(v, y), y[0] & /*timer*/
      32 && Ht(h, 1)) : (h = Ua(v), h.c(), Ht(h, 1), h.m(a.parentNode, a));
    },
    i(v) {
      c || (Ht(o), Ht(h), c = !0);
    },
    o(v) {
      Jt(o), Jt(h), c = !1;
    },
    d(v) {
      v && (te(e), te(t), te(s), te(r), te(a)), f && f.d(v), m && m.d(), b && b.d(), ~l && p[l].d(v), h && h.d(v);
    }
  };
}
function Ea(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Zt("div"), At(e, "class", "eta-bar svelte-16nch4a"), xn(e, "transform", t);
    },
    m(n, s) {
      ne(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && xn(e, "transform", t);
    },
    d(n) {
      n && te(e);
    }
  };
}
function vm(i) {
  let e;
  return {
    c() {
      e = Xe("processing |");
    },
    m(t, n) {
      ne(t, e, n);
    },
    p: bo,
    d(t) {
      t && te(e);
    }
  };
}
function km(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = Xe("queue: "), n = Xe(t), s = Xe("/"), l = Xe(
        /*queue_size*/
        i[3]
      ), o = Xe(" |");
    },
    m(r, a) {
      ne(r, e, a), ne(r, n, a), ne(r, s, a), ne(r, l, a), ne(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && zt(n, t), a[0] & /*queue_size*/
      8 && zt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (te(e), te(n), te(s), te(l), te(o));
    }
  };
}
function ym(i) {
  let e, t = Fs(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = qa(Ya(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Bi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ne(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = Fs(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ya(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = qa(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && te(e), zc(n, s);
    }
  };
}
function Ra(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, u) {
    return (
      /*p*/
      f[41].length != null ? Sm : Cm
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Mt(), n = Xe(t), s = Xe(" | "), o = Xe(l);
    },
    m(f, u) {
      c.m(f, u), ne(f, e, u), ne(f, n, u), ne(f, s, u), ne(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && zt(n, t);
    },
    d(f) {
      f && (te(e), te(n), te(s), te(o)), c.d(f);
    }
  };
}
function Cm(i) {
  let e = wi(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Xe(e);
    },
    m(n, s) {
      ne(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = wi(
        /*p*/
        n[41].index || 0
      ) + "") && zt(t, e);
    },
    d(n) {
      n && te(t);
    }
  };
}
function Sm(i) {
  let e = wi(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = wi(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = Xe(e), n = Xe("/"), l = Xe(s);
    },
    m(o, r) {
      ne(o, t, r), ne(o, n, r), ne(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = wi(
        /*p*/
        o[41].index || 0
      ) + "") && zt(t, e), r[0] & /*progress*/
      128 && s !== (s = wi(
        /*p*/
        o[41].length
      ) + "") && zt(l, s);
    },
    d(o) {
      o && (te(t), te(n), te(l));
    }
  };
}
function qa(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Ra(i)
  );
  return {
    c() {
      t && t.c(), e = Bi();
    },
    m(n, s) {
      t && t.m(n, s), ne(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Ra(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && te(e), t && t.d(n);
    }
  };
}
function La(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = Xe(
        /*formatted_timer*/
        i[20]
      ), n = Xe(t), s = Xe("s");
    },
    m(l, o) {
      ne(l, e, o), ne(l, n, o), ne(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && zt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && zt(n, t);
    },
    d(l) {
      l && (te(e), te(n), te(s));
    }
  };
}
function Mm(i) {
  let e, t;
  return e = new cm({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Cc(e.$$.fragment);
    },
    m(n, s) {
      Bc(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (Ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mc(e, n);
    }
  };
}
function zm(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Pa(i)
  );
  return {
    c() {
      e = Zt("div"), t = Zt("div"), r && r.c(), n = Mt(), s = Zt("div"), l = Zt("div"), At(t, "class", "progress-level-inner svelte-16nch4a"), At(l, "class", "progress-bar svelte-16nch4a"), xn(l, "width", o), At(s, "class", "progress-bar-wrap svelte-16nch4a"), At(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      ne(a, e, c), Vn(e, t), r && r.m(t, null), Vn(e, n), Vn(e, s), Vn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = Pa(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && xn(l, "width", o);
    },
    i: bo,
    o: bo,
    d(a) {
      a && te(e), r && r.d(), i[31](null);
    }
  };
}
function Pa(i) {
  let e, t = Fs(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Fa(Xa(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Bi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ne(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = Fs(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Xa(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Fa(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && te(e), zc(n, s);
    }
  };
}
function Ia(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && xm()
  ), o = (
    /*p*/
    i[41].desc != null && Ha(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Aa()
  ), a = (
    /*progress_level*/
    i[14] != null && Ta(i)
  );
  return {
    c() {
      l && l.c(), e = Mt(), o && o.c(), t = Mt(), r && r.c(), n = Mt(), a && a.c(), s = Bi();
    },
    m(c, f) {
      l && l.m(c, f), ne(c, e, f), o && o.m(c, f), ne(c, t, f), r && r.m(c, f), ne(c, n, f), a && a.m(c, f), ne(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = Ha(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = Aa(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = Ta(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (te(e), te(t), te(n), te(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function xm(i) {
  let e;
  return {
    c() {
      e = Xe(" /");
    },
    m(t, n) {
      ne(t, e, n);
    },
    d(t) {
      t && te(e);
    }
  };
}
function Ha(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = Xe(e);
    },
    m(n, s) {
      ne(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && zt(t, e);
    },
    d(n) {
      n && te(t);
    }
  };
}
function Aa(i) {
  let e;
  return {
    c() {
      e = Xe("-");
    },
    m(t, n) {
      ne(t, e, n);
    },
    d(t) {
      t && te(e);
    }
  };
}
function Ta(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = Xe(e), n = Xe("%");
    },
    m(s, l) {
      ne(s, t, l), ne(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && zt(t, e);
    },
    d(s) {
      s && (te(t), te(n));
    }
  };
}
function Fa(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Ia(i)
  );
  return {
    c() {
      t && t.c(), e = Bi();
    },
    m(n, s) {
      t && t.m(n, s), ne(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = Ia(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && te(e), t && t.d(n);
    }
  };
}
function Ua(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = Sc(
    l,
    i,
    /*$$scope*/
    i[29],
    Da
  );
  return {
    c() {
      e = Zt("p"), t = Xe(
        /*loading_text*/
        i[9]
      ), n = Mt(), o && o.c(), At(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      ne(r, e, a), Vn(e, t), ne(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && zt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Dc(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Wc(
          l,
          /*$$scope*/
          r[29],
          a,
          bm
        ) : xc(
          /*$$scope*/
          r[29]
        ),
        Da
      );
    },
    i(r) {
      s || (Ht(o, r), s = !0);
    },
    o(r) {
      Jt(o, r), s = !1;
    },
    d(r) {
      r && (te(e), te(n)), o && o.d(r);
    }
  };
}
function Wm(i) {
  let e, t, n, s, l;
  const o = [wm, pm], r = [];
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
      e = Zt("div"), n && n.c(), At(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), St(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), St(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), St(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), St(
        e,
        "border",
        /*border*/
        i[12]
      ), xn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), xn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      ne(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (go(), Jt(r[u], 1, 1, () => {
        r[u] = null;
      }), mo()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Ht(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && At(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && St(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && St(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && St(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && St(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && xn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && xn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (Ht(n), l = !0);
    },
    o(c) {
      Jt(n), l = !1;
    },
    d(c) {
      c && te(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var Bm = function(i, e, t, n) {
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
let ms = [], Yl = !1;
function Dm(i) {
  return Bm(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (ms.push(e), !Yl) Yl = !0;
      else return;
      yield dm(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < ms.length; s++) {
          const o = ms[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Yl = !1, ms = [];
      });
    }
  });
}
function Xm(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = mm();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: m = !0 } = e, { show_progress: b = "full" } = e, { message: g = null } = e, { progress: p = null } = e, { variant: w = "default" } = e, { loading_text: h = "Loading..." } = e, { absolute: v = !0 } = e, { translucent: y = !1 } = e, { border: k = !1 } = e, { autoscroll: C } = e, D, S = !1, R = 0, B = 0, x = null, q = null, X = 0, j = null, V, U = null, ee = !0;
  const W = () => {
    t(0, a = t(27, x = t(19, A = null))), t(25, R = performance.now()), t(26, B = 0), S = !0, F();
  };
  function F() {
    requestAnimationFrame(() => {
      t(26, B = (performance.now() - R) / 1e3), S && F();
    });
  }
  function se() {
    t(26, B = 0), t(0, a = t(27, x = t(19, A = null))), S && (S = !1);
  }
  _m(() => {
    S && se();
  });
  let A = null;
  function L(I) {
    Wa[I ? "unshift" : "push"](() => {
      U = I, t(16, U), t(7, p), t(14, j), t(15, V);
    });
  }
  const le = () => {
    o("clear_status");
  };
  function $(I) {
    Wa[I ? "unshift" : "push"](() => {
      D = I, t(13, D);
    });
  }
  return i.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, c = I.queue_position), "queue_size" in I && t(3, f = I.queue_size), "status" in I && t(4, u = I.status), "scroll_to_output" in I && t(22, d = I.scroll_to_output), "timer" in I && t(5, m = I.timer), "show_progress" in I && t(6, b = I.show_progress), "message" in I && t(23, g = I.message), "progress" in I && t(7, p = I.progress), "variant" in I && t(8, w = I.variant), "loading_text" in I && t(9, h = I.loading_text), "absolute" in I && t(10, v = I.absolute), "translucent" in I && t(11, y = I.translucent), "border" in I && t(12, k = I.border), "autoscroll" in I && t(24, C = I.autoscroll), "$$scope" in I && t(29, l = I.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = x), a != null && x !== a && (t(28, q = (performance.now() - R) / 1e3 + a), t(19, A = q.toFixed(1)), t(27, x = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, X = q === null || q <= 0 || !B ? null : Math.min(B / q, 1)), i.$$.dirty[0] & /*progress*/
    128 && p != null && t(18, ee = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? t(14, j = p.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, j = null), j ? (t(15, V = j[j.length - 1]), U && (V === 0 ? t(16, U.style.transition = "0", U) : t(16, U.style.transition = "150ms", U))) : t(15, V = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? W() : se()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && D && d && (u === "pending" || u === "complete") && Dm(D, C), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = B.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    m,
    b,
    p,
    w,
    h,
    v,
    y,
    k,
    D,
    j,
    V,
    U,
    X,
    ee,
    A,
    n,
    o,
    d,
    g,
    C,
    R,
    B,
    x,
    q,
    l,
    s,
    L,
    le,
    $
  ];
}
class Ym extends fm {
  constructor(e) {
    super(), um(
      this,
      e,
      Xm,
      Wm,
      hm,
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
const { setContext: Sw, getContext: Em } = window.__gradio__svelte__internal, Rm = "WORKER_PROXY_CONTEXT_KEY";
function Xc() {
  return Em(Rm);
}
function qm(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Yc(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function Ec(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!qm(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Lm(i) {
  if (i == null || !Ec(i))
    return i;
  const e = Xc();
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
      type: Yc(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: Pm,
  assign: Us,
  check_outros: Rc,
  compute_rest_props: Oa,
  create_slot: Yo,
  detach: ol,
  element: qc,
  empty: Lc,
  exclude_internal_props: Im,
  get_all_dirty_from_scope: Eo,
  get_slot_changes: Ro,
  get_spread_update: Pc,
  group_outros: Ic,
  init: Hm,
  insert: al,
  listen: Hc,
  prevent_default: Am,
  safe_not_equal: Tm,
  set_attributes: Os,
  transition_in: $n,
  transition_out: ei,
  update_slot_base: qo
} = window.__gradio__svelte__internal, { createEventDispatcher: Fm } = window.__gradio__svelte__internal;
function Um(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Yo(
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
    c = Us(c, a[f]);
  return {
    c() {
      e = qc("a"), r && r.c(), Os(e, c);
    },
    m(f, u) {
      al(f, e, u), r && r.m(e, null), n = !0, s || (l = Hc(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && qo(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? Ro(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : Eo(
          /*$$scope*/
          f[7]
        ),
        null
      ), Os(e, c = Pc(a, [
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
      n || ($n(r, f), n = !0);
    },
    o(f) {
      ei(r, f), n = !1;
    },
    d(f) {
      f && ol(e), r && r.d(f), s = !1, l();
    }
  };
}
function Om(i) {
  let e, t, n, s;
  const l = [Vm, jm], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Lc();
    },
    m(a, c) {
      o[e].m(a, c), al(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Ic(), ei(o[f], 1, 1, () => {
        o[f] = null;
      }), Rc(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), $n(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || ($n(t), s = !0);
    },
    o(a) {
      ei(t), s = !1;
    },
    d(a) {
      a && ol(n), o[e].d(a);
    }
  };
}
function jm(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Yo(
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
    a = Us(a, r[c]);
  return {
    c() {
      e = qc("a"), o && o.c(), Os(e, a);
    },
    m(c, f) {
      al(c, e, f), o && o.m(e, null), t = !0, n || (s = Hc(e, "click", Am(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && qo(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? Ro(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Eo(
          /*$$scope*/
          c[7]
        ),
        null
      ), Os(e, a = Pc(r, [
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
      t || ($n(o, c), t = !0);
    },
    o(c) {
      ei(o, c), t = !1;
    },
    d(c) {
      c && ol(e), o && o.d(c), n = !1, s();
    }
  };
}
function Vm(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Yo(
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
      128) && qo(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? Ro(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Eo(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || ($n(n, s), e = !0);
    },
    o(s) {
      ei(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Nm(i) {
  let e, t, n, s, l;
  const o = [Om, Um], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && Ec(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Lc();
    },
    m(c, f) {
      r[t].m(c, f), al(c, s, f), l = !0;
    },
    p(c, [f]) {
      let u = t;
      t = a(c, f), t === u ? r[t].p(c, f) : (Ic(), ei(r[u], 1, 1, () => {
        r[u] = null;
      }), Rc(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), $n(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || ($n(n), l = !0);
    },
    o(c) {
      ei(n), l = !1;
    },
    d(c) {
      c && ol(s), r[t].d(c);
    }
  };
}
function Km(i, e, t) {
  const n = ["href", "download"];
  let s = Oa(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(b, g, p, w) {
    function h(v) {
      return v instanceof p ? v : new p(function(y) {
        y(v);
      });
    }
    return new (p || (p = Promise))(function(v, y) {
      function k(S) {
        try {
          D(w.next(S));
        } catch (R) {
          y(R);
        }
      }
      function C(S) {
        try {
          D(w.throw(S));
        } catch (R) {
          y(R);
        }
      }
      function D(S) {
        S.done ? v(S.value) : h(S.value).then(k, C);
      }
      D((w = w.apply(b, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Fm();
  let u = !1;
  const d = Xc();
  function m() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const g = new URL(a, window.location.href).pathname;
      t(2, u = !0), d.httpRequest({
        method: "GET",
        path: g,
        headers: {},
        query_string: ""
      }).then((p) => {
        if (p.status !== 200)
          throw new Error(`Failed to get file ${g} from the Wasm worker.`);
        const w = new Blob(
          [p.body],
          {
            type: Yc(p.headers, "content-type")
          }
        ), h = URL.createObjectURL(w), v = document.createElement("a");
        v.href = h, v.download = c, v.click(), URL.revokeObjectURL(h);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (b) => {
    e = Us(Us({}, e), Im(b)), t(6, s = Oa(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, c = b.download), "$$scope" in b && t(7, o = b.$$scope);
  }, [
    a,
    c,
    u,
    f,
    d,
    m,
    s,
    o,
    l
  ];
}
class Zm extends Pm {
  constructor(e) {
    super(), Hm(this, e, Km, Nm, Tm, { href: 0, download: 1 });
  }
}
var Jm = Object.defineProperty, Gm = (i, e, t) => e in i ? Jm(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Qt = (i, e, t) => (Gm(i, typeof e != "symbol" ? e + "" : e, t), t), Ac = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Pi = (i, e, t) => (Ac(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Qm = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, $m = (i, e, t, n) => (Ac(i, e, "write to private field"), e.set(i, t), t), Sn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Tc(i, e) {
  return i.map(
    (t) => new e1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class e1 {
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
    Qt(this, "path"), Qt(this, "url"), Qt(this, "orig_name"), Qt(this, "size"), Qt(this, "blob"), Qt(this, "is_stream"), Qt(this, "mime_type"), Qt(this, "alt_text"), Qt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Mw extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Pi(this, Sn) + t; ; ) {
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
        $m(this, Sn, t);
      },
      flush: (t) => {
        if (Pi(this, Sn) === "")
          return;
        const n = e.allowCR && Pi(this, Sn).endsWith("\r") ? Pi(this, Sn).slice(0, -1) : Pi(this, Sn);
        t.enqueue(n);
      }
    }), Qm(this, Sn, "");
  }
}
Sn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: t1,
  append: ct,
  attr: Un,
  detach: Fc,
  element: On,
  init: n1,
  insert: Uc,
  noop: ja,
  safe_not_equal: i1,
  set_data: js,
  set_style: El,
  space: po,
  text: vi,
  toggle_class: Va
} = window.__gradio__svelte__internal, { onMount: s1, createEventDispatcher: l1, onDestroy: o1 } = window.__gradio__svelte__internal;
function Na(i) {
  let e, t, n, s, l = Vi(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = On("div"), t = On("span"), n = On("div"), s = On("progress"), o = vi(l), a = po(), c = On("span"), u = vi(f), El(s, "visibility", "hidden"), El(s, "height", "0"), El(s, "width", "0"), s.value = r = Vi(
        /*file_to_display*/
        i[2]
      ), Un(s, "max", "100"), Un(s, "class", "svelte-cr2edf"), Un(n, "class", "progress-bar svelte-cr2edf"), Un(c, "class", "file-name svelte-cr2edf"), Un(e, "class", "file svelte-cr2edf");
    },
    m(d, m) {
      Uc(d, e, m), ct(e, t), ct(t, n), ct(n, s), ct(s, o), ct(e, a), ct(e, c), ct(c, u);
    },
    p(d, m) {
      m & /*file_to_display*/
      4 && l !== (l = Vi(
        /*file_to_display*/
        d[2]
      ) + "") && js(o, l), m & /*file_to_display*/
      4 && r !== (r = Vi(
        /*file_to_display*/
        d[2]
      )) && (s.value = r), m & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && js(u, f);
    },
    d(d) {
      d && Fc(e);
    }
  };
}
function a1(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && Na(i)
  );
  return {
    c() {
      e = On("div"), t = On("span"), n = vi("Uploading "), l = vi(s), o = po(), a = vi(r), c = vi("..."), f = po(), u && u.c(), Un(t, "class", "uploading svelte-cr2edf"), Un(e, "class", "wrap svelte-cr2edf"), Va(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, m) {
      Uc(d, e, m), ct(e, t), ct(t, n), ct(t, l), ct(t, o), ct(t, a), ct(t, c), ct(e, f), u && u.m(e, null);
    },
    p(d, [m]) {
      m & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      d[0].length + "") && js(l, s), m & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && js(a, r), /*file_to_display*/
      d[2] ? u ? u.p(d, m) : (u = Na(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), m & /*progress*/
      2 && Va(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: ja,
    o: ja,
    d(d) {
      d && Fc(e), u && u.d();
    }
  };
}
function Vi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function r1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Vi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function c1(i, e, t) {
  var n = this && this.__awaiter || function(g, p, w, h) {
    function v(y) {
      return y instanceof w ? y : new w(function(k) {
        k(y);
      });
    }
    return new (w || (w = Promise))(function(y, k) {
      function C(R) {
        try {
          S(h.next(R));
        } catch (B) {
          k(B);
        }
      }
      function D(R) {
        try {
          S(h.throw(R));
        } catch (B) {
          k(B);
        }
      }
      function S(R) {
        R.done ? y(R.value) : v(R.value).then(C, D);
      }
      S((h = h.apply(g, p || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, d = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const m = l1();
  function b(g, p) {
    t(0, d = d.map((w) => (w.orig_name === g && (w.progress += p), w)));
  }
  return s1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const p = JSON.parse(g.data);
        c || t(1, c = !0), p.msg === "done" ? (a == null || a.close(), m("done")) : (t(7, f = p), b(p.orig_name, p.chunk_size));
      });
    };
  })), o1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && r1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = f || d[0]);
  }, [
    d,
    c,
    u,
    s,
    l,
    o,
    r,
    f
  ];
}
class f1 extends t1 {
  constructor(e) {
    super(), n1(this, e, c1, a1, i1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: u1,
  append: Ka,
  attr: $e,
  binding_callbacks: h1,
  bubble: En,
  check_outros: Oc,
  create_component: d1,
  create_slot: jc,
  destroy_component: _1,
  detach: rl,
  element: wo,
  empty: Vc,
  get_all_dirty_from_scope: Nc,
  get_slot_changes: Kc,
  group_outros: Zc,
  init: m1,
  insert: cl,
  listen: gt,
  mount_component: g1,
  prevent_default: Rn,
  run_all: b1,
  safe_not_equal: p1,
  set_style: Jc,
  space: w1,
  stop_propagation: qn,
  toggle_class: Te,
  transition_in: Wn,
  transition_out: ti,
  update_slot_base: Gc
} = window.__gradio__svelte__internal, { createEventDispatcher: v1, tick: k1 } = window.__gradio__svelte__internal;
function y1(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = (
    /*#slots*/
    i[26].default
  ), m = jc(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = wo("button"), m && m.c(), t = w1(), n = wo("input"), $e(n, "aria-label", "file upload"), $e(n, "data-testid", "file-upload"), $e(n, "type", "file"), $e(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, $e(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), $e(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), $e(n, "class", "svelte-1s26xmt"), $e(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), $e(e, "class", "svelte-1s26xmt"), Te(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Te(
        e,
        "center",
        /*center*/
        i[4]
      ), Te(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Te(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Te(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Jc(e, "height", "100%");
    },
    m(b, g) {
      cl(b, e, g), m && m.m(e, null), Ka(e, t), Ka(e, n), i[34](n), c = !0, f || (u = [
        gt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        gt(e, "drag", qn(Rn(
          /*drag_handler*/
          i[27]
        ))),
        gt(e, "dragstart", qn(Rn(
          /*dragstart_handler*/
          i[28]
        ))),
        gt(e, "dragend", qn(Rn(
          /*dragend_handler*/
          i[29]
        ))),
        gt(e, "dragover", qn(Rn(
          /*dragover_handler*/
          i[30]
        ))),
        gt(e, "dragenter", qn(Rn(
          /*dragenter_handler*/
          i[31]
        ))),
        gt(e, "dragleave", qn(Rn(
          /*dragleave_handler*/
          i[32]
        ))),
        gt(e, "drop", qn(Rn(
          /*drop_handler*/
          i[33]
        ))),
        gt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        gt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        gt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        gt(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(b, g) {
      m && m.p && (!c || g[0] & /*$$scope*/
      33554432) && Gc(
        m,
        d,
        b,
        /*$$scope*/
        b[25],
        c ? Kc(
          d,
          /*$$scope*/
          b[25],
          g,
          null
        ) : Nc(
          /*$$scope*/
          b[25]
        ),
        null
      ), (!c || g[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      b[16] || void 0)) && $e(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      b[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      b[6] === "directory" || void 0)) && $e(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      b[6] === "directory" || void 0)) && $e(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      b[9] ? -1 : 0)) && $e(e, "tabindex", a), (!c || g[0] & /*hidden*/
      512) && Te(
        e,
        "hidden",
        /*hidden*/
        b[9]
      ), (!c || g[0] & /*center*/
      16) && Te(
        e,
        "center",
        /*center*/
        b[4]
      ), (!c || g[0] & /*boundedheight*/
      8) && Te(
        e,
        "boundedheight",
        /*boundedheight*/
        b[3]
      ), (!c || g[0] & /*flex*/
      32) && Te(
        e,
        "flex",
        /*flex*/
        b[5]
      ), (!c || g[0] & /*disable_click*/
      128) && Te(
        e,
        "disable_click",
        /*disable_click*/
        b[7]
      );
    },
    i(b) {
      c || (Wn(m, b), c = !0);
    },
    o(b) {
      ti(m, b), c = !1;
    },
    d(b) {
      b && rl(e), m && m.d(b), i[34](null), f = !1, b1(u);
    }
  };
}
function C1(i) {
  let e, t, n = !/*hidden*/
  i[9] && Za(i);
  return {
    c() {
      n && n.c(), e = Vc();
    },
    m(s, l) {
      n && n.m(s, l), cl(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (Zc(), ti(n, 1, 1, () => {
        n = null;
      }), Oc()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && Wn(n, 1)) : (n = Za(s), n.c(), Wn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (Wn(n), t = !0);
    },
    o(s) {
      ti(n), t = !1;
    },
    d(s) {
      s && rl(e), n && n.d(s);
    }
  };
}
function S1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = jc(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = wo("button"), r && r.c(), $e(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), $e(e, "class", "svelte-1s26xmt"), Te(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Te(
        e,
        "center",
        /*center*/
        i[4]
      ), Te(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Te(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Jc(e, "height", "100%");
    },
    m(a, c) {
      cl(a, e, c), r && r.m(e, null), n = !0, s || (l = gt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Gc(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Kc(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : Nc(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && $e(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && Te(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && Te(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && Te(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && Te(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Wn(r, a), n = !0);
    },
    o(a) {
      ti(r, a), n = !1;
    },
    d(a) {
      a && rl(e), r && r.d(a), s = !1, l();
    }
  };
}
function Za(i) {
  let e, t;
  return e = new f1({
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
      d1(e.$$.fragment);
    },
    m(n, s) {
      g1(e, n, s), t = !0;
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
      t || (Wn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ti(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _1(e, n);
    }
  };
}
function M1(i) {
  let e, t, n, s;
  const l = [S1, C1, y1], o = [];
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
      t.c(), n = Vc();
    },
    m(a, c) {
      o[e].m(a, c), cl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Zc(), ti(o[f], 1, 1, () => {
        o[f] = null;
      }), Oc(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Wn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Wn(t), s = !0);
    },
    o(a) {
      ti(t), s = !1;
    },
    d(a) {
      a && rl(n), o[e].d(a);
    }
  };
}
function z1(i, e, t) {
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
function x1(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(E, Z, ae, _e) {
    function ye(z) {
      return z instanceof ae ? z : new ae(function(Ie) {
        Ie(z);
      });
    }
    return new (ae || (ae = Promise))(function(z, Ie) {
      function Ye(G) {
        try {
          fe(_e.next(G));
        } catch (Se) {
          Ie(Se);
        }
      }
      function ge(G) {
        try {
          fe(_e.throw(G));
        } catch (Se) {
          Ie(Se);
        }
      }
      function fe(G) {
        G.done ? z(G.value) : ye(G.value).then(Ye, ge);
      }
      fe((_e = _e.apply(E, Z || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: m } = e, { hidden: b = !1 } = e, { format: g = "file" } = e, { uploading: p = !1 } = e, { hidden_upload: w = null } = e, { show_progress: h = !0 } = e, { max_file_size: v = null } = e, { upload: y } = e, { stream_handler: k } = e, C, D, S;
  const R = v1(), B = ["image", "video", "audio", "text", "file"], x = (E) => E.startsWith(".") || E.endsWith("/*") ? E : B.includes(E) ? E + "/*" : "." + E;
  function q() {
    t(20, r = !r);
  }
  function X() {
    navigator.clipboard.read().then((E) => l(this, void 0, void 0, function* () {
      for (let Z = 0; Z < E.length; Z++) {
        const ae = E[Z].types.find((_e) => _e.startsWith("image/"));
        if (ae) {
          E[Z].getType(ae).then((_e) => l(this, void 0, void 0, function* () {
            const ye = new File([_e], `clipboard.${ae.replace("image/", "")}`);
            yield U([ye]);
          }));
          break;
        }
      }
    }));
  }
  function j() {
    d || w && (t(2, w.value = "", w), w.click());
  }
  function V(E) {
    return l(this, void 0, void 0, function* () {
      yield k1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, p = !0);
      try {
        const Z = yield y(E, m, C, v ?? 1 / 0);
        return R("load", u === "single" ? Z == null ? void 0 : Z[0] : Z), t(1, p = !1), Z || [];
      } catch (Z) {
        return R("error", Z.message), t(1, p = !1), [];
      }
    });
  }
  function U(E) {
    return l(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let Z = E.map((ae) => new File([ae], ae instanceof File ? ae.name : "file", { type: ae.type }));
      return t(15, D = yield Tc(Z)), yield V(D);
    });
  }
  function ee(E) {
    return l(this, void 0, void 0, function* () {
      const Z = E.target;
      if (Z.files)
        if (g != "blob")
          yield U(Array.from(Z.files));
        else {
          if (u === "single") {
            R("load", Z.files[0]);
            return;
          }
          R("load", Z.files);
        }
    });
  }
  function W(E) {
    return l(this, void 0, void 0, function* () {
      var Z;
      if (t(20, r = !1), !(!((Z = E.dataTransfer) === null || Z === void 0) && Z.files)) return;
      const ae = Array.from(E.dataTransfer.files).filter((_e) => {
        const ye = "." + _e.name.split(".").pop();
        return ye && z1(S, ye, _e.type) || (ye && Array.isArray(o) ? o.includes(ye) : ye === o) ? !0 : (R("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield U(ae);
    });
  }
  function F(E) {
    En.call(this, i, E);
  }
  function se(E) {
    En.call(this, i, E);
  }
  function A(E) {
    En.call(this, i, E);
  }
  function L(E) {
    En.call(this, i, E);
  }
  function le(E) {
    En.call(this, i, E);
  }
  function $(E) {
    En.call(this, i, E);
  }
  function I(E) {
    En.call(this, i, E);
  }
  function ke(E) {
    h1[E ? "unshift" : "push"](() => {
      w = E, t(2, w);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, o = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, c = E.center), "flex" in E && t(5, f = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, d = E.disable_click), "root" in E && t(8, m = E.root), "hidden" in E && t(9, b = E.hidden), "format" in E && t(21, g = E.format), "uploading" in E && t(1, p = E.uploading), "hidden_upload" in E && t(2, w = E.hidden_upload), "show_progress" in E && t(10, h = E.show_progress), "max_file_size" in E && t(22, v = E.max_file_size), "upload" in E && t(23, y = E.upload), "stream_handler" in E && t(11, k = E.stream_handler), "$$scope" in E && t(25, s = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, S = null) : typeof o == "string" ? t(16, S = x(o)) : (t(0, o = o.map(x)), t(16, S = o.join(", "))));
  }, [
    o,
    p,
    w,
    a,
    c,
    f,
    u,
    d,
    m,
    b,
    h,
    k,
    X,
    j,
    C,
    D,
    S,
    q,
    ee,
    W,
    r,
    g,
    v,
    y,
    U,
    s,
    n,
    F,
    se,
    A,
    L,
    le,
    $,
    I,
    ke
  ];
}
class W1 extends u1 {
  constructor(e) {
    super(), m1(
      this,
      e,
      x1,
      M1,
      p1,
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
  SvelteComponent: B1,
  append: gs,
  attr: Rl,
  create_component: D1,
  destroy_component: X1,
  detach: Y1,
  element: ql,
  init: E1,
  insert: R1,
  listen: q1,
  mount_component: L1,
  noop: P1,
  safe_not_equal: I1,
  set_style: H1,
  space: A1,
  text: T1,
  transition_in: F1,
  transition_out: U1
} = window.__gradio__svelte__internal, { createEventDispatcher: O1 } = window.__gradio__svelte__internal;
function j1(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new mc({}), {
    c() {
      e = ql("button"), t = ql("div"), n = ql("span"), D1(s.$$.fragment), l = A1(), r = T1(o), Rl(n, "class", "icon-wrap svelte-fjcd9c"), Rl(t, "class", "wrap svelte-fjcd9c"), Rl(e, "class", "svelte-fjcd9c"), H1(e, "height", "100%");
    },
    m(u, d) {
      R1(u, e, d), gs(e, t), gs(t, n), L1(s, n, null), gs(t, l), gs(t, r), a = !0, c || (f = q1(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: P1,
    i(u) {
      a || (F1(s.$$.fragment, u), a = !0);
    },
    o(u) {
      U1(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Y1(e), X1(s), c = !1, f();
    }
  };
}
function V1(i) {
  const e = O1();
  return [e, () => e("click")];
}
class N1 extends B1 {
  constructor(e) {
    super(), E1(this, e, V1, j1, I1, {});
  }
}
function K1() {
  return navigator.mediaDevices.enumerateDevices();
}
function Z1(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Ja(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (Z1(l, e), l));
}
function J1(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: G1,
  action_destroyer: Q1,
  add_render_callback: $1,
  append: on,
  attr: Le,
  binding_callbacks: e0,
  check_outros: Zi,
  create_component: Di,
  create_in_transition: t0,
  destroy_component: Xi,
  destroy_each: n0,
  detach: ft,
  element: kt,
  empty: Lo,
  ensure_array_like: Ga,
  group_outros: Ji,
  init: i0,
  insert: ut,
  listen: Vs,
  mount_component: Yi,
  noop: Po,
  run_all: s0,
  safe_not_equal: l0,
  set_data: Qc,
  set_input_value: vo,
  space: es,
  stop_propagation: o0,
  text: $c,
  toggle_class: bs,
  transition_in: Fe,
  transition_out: et
} = window.__gradio__svelte__internal, { createEventDispatcher: a0, onMount: r0 } = window.__gradio__svelte__internal;
function Qa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function c0(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = [h0, u0], m = [];
  function b(w, h) {
    return (
      /*mode*/
      w[1] === "video" || /*streaming*/
      w[0] ? 0 : 1
    );
  }
  n = b(i), s = m[n] = d[n](i);
  let g = !/*recording*/
  i[8] && $a(i), p = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && er(i)
  );
  return {
    c() {
      e = kt("div"), t = kt("button"), s.c(), o = es(), g && g.c(), r = es(), p && p.c(), a = Lo(), Le(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), Le(t, "class", "svelte-8hqvb6"), Le(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(w, h) {
      ut(w, e, h), on(e, t), m[n].m(t, null), on(e, o), g && g.m(e, null), ut(w, r, h), p && p.m(w, h), ut(w, a, h), c = !0, f || (u = Vs(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(w, h) {
      let v = n;
      n = b(w), n === v ? m[n].p(w, h) : (Ji(), et(m[v], 1, 1, () => {
        m[v] = null;
      }), Zi(), s = m[n], s ? s.p(w, h) : (s = m[n] = d[n](w), s.c()), Fe(s, 1), s.m(t, null)), (!c || h[0] & /*mode*/
      2 && l !== (l = /*mode*/
      w[1] === "image" ? "capture photo" : "start recording")) && Le(t, "aria-label", l), /*recording*/
      w[8] ? g && (Ji(), et(g, 1, 1, () => {
        g = null;
      }), Zi()) : g ? (g.p(w, h), h[0] & /*recording*/
      256 && Fe(g, 1)) : (g = $a(w), g.c(), Fe(g, 1), g.m(e, null)), /*options_open*/
      w[10] && /*selected_device*/
      w[7] ? p ? (p.p(w, h), h[0] & /*options_open, selected_device*/
      1152 && Fe(p, 1)) : (p = er(w), p.c(), Fe(p, 1), p.m(a.parentNode, a)) : p && (Ji(), et(p, 1, 1, () => {
        p = null;
      }), Zi());
    },
    i(w) {
      c || (Fe(s), Fe(g), Fe(p), c = !0);
    },
    o(w) {
      et(s), et(g), et(p), c = !1;
    },
    d(w) {
      w && (ft(e), ft(r), ft(a)), m[n].d(), g && g.d(), p && p.d(w), f = !1, u();
    }
  };
}
function f0(i) {
  let e, t, n, s;
  return t = new N1({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = kt("div"), Di(t.$$.fragment), Le(e, "title", "grant webcam access");
    },
    m(l, o) {
      ut(l, e, o), Yi(t, e, null), s = !0;
    },
    p: Po,
    i(l) {
      s || (Fe(t.$$.fragment, l), l && (n || $1(() => {
        n = t0(e, Q_, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      et(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && ft(e), Xi(t);
    }
  };
}
function u0(i) {
  let e, t, n;
  return t = new Nh({}), {
    c() {
      e = kt("div"), Di(t.$$.fragment), Le(e, "class", "icon svelte-8hqvb6"), Le(e, "title", "capture photo");
    },
    m(s, l) {
      ut(s, e, l), Yi(t, e, null), n = !0;
    },
    p: Po,
    i(s) {
      n || (Fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      et(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function h0(i) {
  let e, t, n, s;
  const l = [_0, d0], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Lo();
    },
    m(a, c) {
      o[e].m(a, c), ut(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (Ji(), et(o[f], 1, 1, () => {
        o[f] = null;
      }), Zi(), t = o[e], t || (t = o[e] = l[e](a), t.c()), Fe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Fe(t), s = !0);
    },
    o(a) {
      et(t), s = !1;
    },
    d(a) {
      a && ft(n), o[e].d(a);
    }
  };
}
function d0(i) {
  let e, t, n;
  return t = new td({}), {
    c() {
      e = kt("div"), Di(t.$$.fragment), Le(e, "class", "icon red svelte-8hqvb6"), Le(e, "title", "start recording");
    },
    m(s, l) {
      ut(s, e, l), Yi(t, e, null), n = !0;
    },
    i(s) {
      n || (Fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      et(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function _0(i) {
  let e, t, n;
  return t = new s_({}), {
    c() {
      e = kt("div"), Di(t.$$.fragment), Le(e, "class", "icon red svelte-8hqvb6"), Le(e, "title", "stop recording");
    },
    m(s, l) {
      ut(s, e, l), Yi(t, e, null), n = !0;
    },
    i(s) {
      n || (Fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      et(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function $a(i) {
  let e, t, n, s, l;
  return t = new Xo({}), {
    c() {
      e = kt("button"), Di(t.$$.fragment), Le(e, "class", "icon svelte-8hqvb6"), Le(e, "aria-label", "select input source");
    },
    m(o, r) {
      ut(o, e, r), Yi(t, e, null), n = !0, s || (l = Vs(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: Po,
    i(o) {
      n || (Fe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      et(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ft(e), Xi(t), s = !1, l();
    }
  };
}
function er(i) {
  let e, t, n, s, l, o, r;
  n = new Xo({});
  function a(u, d) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? g0 : m0
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = kt("select"), t = kt("button"), Di(n.$$.fragment), s = es(), f.c(), Le(t, "class", "inset-icon svelte-8hqvb6"), Le(e, "class", "select-wrap svelte-8hqvb6"), Le(e, "aria-label", "select source");
    },
    m(u, d) {
      ut(u, e, d), on(e, t), Yi(n, t, null), on(t, s), f.m(e, null), l = !0, o || (r = [
        Vs(t, "click", o0(
          /*click_handler_2*/
          i[22]
        )),
        Q1(Io.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Vs(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(u, d) {
      c === (c = a(u)) && f ? f.p(u, d) : (f.d(1), f = c(u), f && (f.c(), f.m(e, null)));
    },
    i(u) {
      l || (Fe(n.$$.fragment, u), l = !0);
    },
    o(u) {
      et(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && ft(e), Xi(n), f.d(), o = !1, s0(r);
    }
  };
}
function m0(i) {
  let e, t = Ga(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = tr(Qa(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Lo();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ut(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = Ga(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Qa(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = tr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ft(e), n0(n, s);
    }
  };
}
function g0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = kt("option"), n = $c(t), e.__value = "", vo(e, e.__value), Le(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      ut(s, e, l), on(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Qc(n, t);
    },
    d(s) {
      s && ft(e);
    }
  };
}
function tr(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = kt("option"), n = $c(t), s = es(), e.__value = l = /*device*/
      i[32].deviceId, vo(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, Le(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      ut(r, e, a), on(e, n), on(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Qc(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, vo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && ft(e);
    }
  };
}
function b0(i) {
  let e, t, n, s, l, o;
  const r = [f0, c0], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = kt("div"), t = kt("video"), n = es(), l.c(), Le(t, "class", "svelte-8hqvb6"), bs(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), bs(t, "hide", !/*webcam_accessed*/
      i[9]), Le(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      ut(f, e, u), on(e, t), i[19](t), on(e, n), a[s].m(e, null), o = !0;
    },
    p(f, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && bs(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && bs(t, "hide", !/*webcam_accessed*/
      f[9]);
      let d = s;
      s = c(f), s === d ? a[s].p(f, u) : (Ji(), et(a[d], 1, 1, () => {
        a[d] = null;
      }), Zi(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), Fe(l, 1), l.m(e, null));
    },
    i(f) {
      o || (Fe(l), o = !0);
    },
    o(f) {
      et(l), o = !1;
    },
    d(f) {
      f && ft(e), i[19](null), a[s].d();
    }
  };
}
function Io(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function p0(i, e, t) {
  var n = this && this.__awaiter || function(W, F, se, A) {
    function L(le) {
      return le instanceof se ? le : new se(function($) {
        $(le);
      });
    }
    return new (se || (se = Promise))(function(le, $) {
      function I(Z) {
        try {
          E(A.next(Z));
        } catch (ae) {
          $(ae);
        }
      }
      function ke(Z) {
        try {
          E(A.throw(Z));
        } catch (ae) {
          $(ae);
        }
      }
      function E(Z) {
        Z.done ? le(Z.value) : L(Z.value).then(I, ke);
      }
      E((A = A.apply(W, F || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: m } = e, { i18n: b } = e, { upload: g } = e;
  const p = a0();
  r0(() => r = document.createElement("canvas"));
  const w = (W) => n(void 0, void 0, void 0, function* () {
    const se = W.target.value;
    yield Ja(m, s, se).then((A) => n(void 0, void 0, void 0, function* () {
      C = A, t(7, o = l.find((L) => L.deviceId === se) || null), t(10, q = !1);
    }));
  });
  function h() {
    return n(this, void 0, void 0, function* () {
      try {
        Ja(m, s).then((W) => n(this, void 0, void 0, function* () {
          t(9, B = !0), t(6, l = yield K1()), C = W;
        })).then(() => J1(l)).then((W) => {
          t(6, l = W);
          const F = C.getTracks().map((se) => {
            var A;
            return (A = se.getSettings()) === null || A === void 0 ? void 0 : A.deviceId;
          })[0];
          t(7, o = F && W.find((se) => se.deviceId === F) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && p("error", b("image.no_webcam_support"));
      } catch (W) {
        if (W instanceof DOMException && W.name == "NotAllowedError")
          p("error", b("image.allow_webcam_access"));
        else
          throw W;
      }
    });
  }
  function v() {
    var W = r.getContext("2d");
    (!a || a && y) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, W.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (W.scale(-1, 1), W.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (F) => {
        p(a ? "stream" : "capture", F);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, k = [], C, D, S;
  function R() {
    if (y) {
      S.stop();
      let W = new Blob(k, { type: D }), F = new FileReader();
      F.onload = function(se) {
        return n(this, void 0, void 0, function* () {
          var A;
          if (se.target) {
            let L = new File([W], "sample." + D.substring(6));
            const le = yield Tc([L]);
            let $ = ((A = yield g(le, f)) === null || A === void 0 ? void 0 : A.filter(Boolean))[0];
            p("capture", $), p("stop_recording");
          }
        });
      }, F.readAsDataURL(W);
    } else {
      p("start_recording"), k = [];
      let W = ["video/webm", "video/mp4"];
      for (let F of W)
        if (MediaRecorder.isTypeSupported(F)) {
          D = F;
          break;
        }
      if (D === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      S = new MediaRecorder(C, { mimeType: D }), S.addEventListener("dataavailable", function(F) {
        k.push(F.data);
      }), S.start(200);
    }
    t(8, y = !y);
  }
  let B = !1;
  function x() {
    u === "image" && a && t(8, y = !y), u === "image" ? v() : R(), !y && C && (C.getTracks().forEach((W) => W.stop()), t(5, s.srcObject = null, s), t(9, B = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && v();
    },
    500
  );
  let q = !1;
  function X(W) {
    W.preventDefault(), W.stopPropagation(), t(10, q = !1);
  }
  function j(W) {
    e0[W ? "unshift" : "push"](() => {
      s = W, t(5, s);
    });
  }
  const V = async () => h(), U = () => t(10, q = !0), ee = () => t(10, q = !1);
  return i.$$set = (W) => {
    "streaming" in W && t(0, a = W.streaming), "pending" in W && t(15, c = W.pending), "root" in W && t(16, f = W.root), "mode" in W && t(1, u = W.mode), "mirror_webcam" in W && t(2, d = W.mirror_webcam), "include_audio" in W && t(17, m = W.include_audio), "i18n" in W && t(3, b = W.i18n), "upload" in W && t(18, g = W.upload);
  }, [
    a,
    u,
    d,
    b,
    Io,
    s,
    l,
    o,
    y,
    B,
    q,
    w,
    h,
    x,
    X,
    c,
    f,
    m,
    g,
    j,
    V,
    U,
    ee
  ];
}
class w0 extends G1 {
  constructor(e) {
    super(), i0(
      this,
      e,
      p0,
      b0,
      l0,
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
    return Io;
  }
}
const {
  SvelteComponent: v0,
  append: pn,
  attr: N,
  detach: k0,
  init: y0,
  insert: C0,
  noop: Ll,
  safe_not_equal: S0,
  set_style: wn,
  svg_element: $t
} = window.__gradio__svelte__internal;
function M0(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = $t("svg"), t = $t("rect"), n = $t("rect"), s = $t("rect"), l = $t("rect"), o = $t("line"), r = $t("line"), a = $t("line"), c = $t("line"), N(t, "x", "2"), N(t, "y", "2"), N(t, "width", "5"), N(t, "height", "5"), N(t, "rx", "1"), N(t, "ry", "1"), N(t, "stroke-width", "2"), N(t, "fill", "none"), N(n, "x", "17"), N(n, "y", "2"), N(n, "width", "5"), N(n, "height", "5"), N(n, "rx", "1"), N(n, "ry", "1"), N(n, "stroke-width", "2"), N(n, "fill", "none"), N(s, "x", "2"), N(s, "y", "17"), N(s, "width", "5"), N(s, "height", "5"), N(s, "rx", "1"), N(s, "ry", "1"), N(s, "stroke-width", "2"), N(s, "fill", "none"), N(l, "x", "17"), N(l, "y", "17"), N(l, "width", "5"), N(l, "height", "5"), N(l, "rx", "1"), N(l, "ry", "1"), N(l, "stroke-width", "2"), N(l, "fill", "none"), N(o, "x1", "7.5"), N(o, "y1", "4.5"), N(o, "x2", "16"), N(o, "y2", "4.5"), wn(o, "stroke-width", "2px"), N(r, "x1", "7.5"), N(r, "y1", "19.5"), N(r, "x2", "16"), N(r, "y2", "19.5"), wn(r, "stroke-width", "2px"), N(a, "x1", "4.5"), N(a, "y1", "8"), N(a, "x2", "4.5"), N(a, "y2", "16"), wn(a, "stroke-width", "2px"), N(c, "x1", "19.5"), N(c, "y1", "8"), N(c, "x2", "19.5"), N(c, "y2", "16"), wn(c, "stroke-width", "2px"), N(e, "width", "100%"), N(e, "height", "100%"), N(e, "viewBox", "0 0 24 24"), N(e, "version", "1.1"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), N(e, "xml:space", "preserve"), N(e, "stroke", "currentColor"), wn(e, "fill-rule", "evenodd"), wn(e, "clip-rule", "evenodd"), wn(e, "stroke-linecap", "round"), wn(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      C0(f, e, u), pn(e, t), pn(e, n), pn(e, s), pn(e, l), pn(e, o), pn(e, r), pn(e, a), pn(e, c);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(f) {
      f && k0(e);
    }
  };
}
class z0 extends v0 {
  constructor(e) {
    super(), y0(this, e, null, M0, S0, {});
  }
}
const {
  SvelteComponent: x0,
  append: Pl,
  attr: Ce,
  detach: Ns,
  init: W0,
  insert: Ks,
  noop: nr,
  safe_not_equal: B0,
  svg_element: Nn
} = window.__gradio__svelte__internal;
function D0(i) {
  let e;
  return {
    c() {
      e = Nn("circle"), Ce(e, "cx", "12"), Ce(e, "cy", "7.5"), Ce(e, "r", "2"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "1"), Ce(e, "opacity", "0.3");
    },
    m(t, n) {
      Ks(t, e, n);
    },
    d(t) {
      t && Ns(e);
    }
  };
}
function X0(i) {
  let e, t;
  return {
    c() {
      e = Nn("circle"), t = Nn("circle"), Ce(e, "cx", "12"), Ce(e, "cy", "7.5"), Ce(e, "r", "2.5"), Ce(e, "fill", "currentColor"), Ce(e, "opacity", "0.9"), Ce(t, "cx", "12"), Ce(t, "cy", "7.5"), Ce(t, "r", "1.5"), Ce(t, "fill", "white"), Ce(t, "opacity", "0.6");
    },
    m(n, s) {
      Ks(n, e, s), Ks(n, t, s);
    },
    d(n) {
      n && (Ns(e), Ns(t));
    }
  };
}
function Y0(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? X0 : D0
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = Nn("svg"), t = Nn("path"), n = Nn("path"), s = Nn("path"), r.c(), Ce(t, "d", "M9 21h6"), Ce(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Ce(s, "d", "M9 17h6"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "2"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      Ks(a, e, c), Pl(e, t), Pl(e, n), Pl(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: nr,
    o: nr,
    d(a) {
      a && Ns(e), r.d();
    }
  };
}
function E0(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class R0 extends x0 {
  constructor(e) {
    super(), W0(this, e, E0, Y0, B0, { selected: 1 });
  }
}
const {
  SvelteComponent: q0,
  append: L0,
  attr: Ot,
  detach: P0,
  init: I0,
  insert: H0,
  noop: Il,
  safe_not_equal: A0,
  svg_element: ir
} = window.__gradio__svelte__internal;
function T0(i) {
  let e, t;
  return {
    c() {
      e = ir("svg"), t = ir("circle"), Ot(t, "cx", "12"), Ot(t, "cy", "12"), Ot(t, "r", "10"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Ot(e, "stroke-linecap", "round"), Ot(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      H0(n, e, s), L0(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && P0(e);
    }
  };
}
let F0 = class extends q0 {
  constructor(e) {
    super(), I0(this, e, null, T0, A0, {});
  }
};
const {
  SvelteComponent: U0,
  append: Ii,
  attr: He,
  detach: O0,
  init: j0,
  insert: V0,
  noop: Hl,
  safe_not_equal: N0,
  svg_element: hi
} = window.__gradio__svelte__internal;
function K0(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = hi("svg"), t = hi("path"), n = hi("path"), s = hi("path"), l = hi("line"), o = hi("line"), He(t, "d", "M3 6h18"), He(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), He(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), He(l, "x1", "10"), He(l, "y1", "11"), He(l, "x2", "10"), He(l, "y2", "17"), He(o, "x1", "14"), He(o, "y1", "11"), He(o, "x2", "14"), He(o, "y2", "17"), He(e, "xmlns", "http://www.w3.org/2000/svg"), He(e, "viewBox", "0 0 24 24"), He(e, "fill", "none"), He(e, "stroke", "currentColor"), He(e, "stroke-width", "2"), He(e, "stroke-linecap", "round"), He(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      V0(r, e, a), Ii(e, t), Ii(e, n), Ii(e, s), Ii(e, l), Ii(e, o);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(r) {
      r && O0(e);
    }
  };
}
class Z0 extends U0 {
  constructor(e) {
    super(), j0(this, e, null, K0, N0, {});
  }
}
const {
  SvelteComponent: J0,
  append: G0,
  attr: qt,
  detach: Q0,
  init: $0,
  insert: eg,
  noop: Al,
  safe_not_equal: tg,
  set_style: ps,
  svg_element: sr
} = window.__gradio__svelte__internal;
function ng(i) {
  let e, t;
  return {
    c() {
      e = sr("svg"), t = sr("path"), qt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), qt(t, "fill", "none"), qt(t, "stroke-width", "2"), qt(e, "width", "100%"), qt(e, "height", "100%"), qt(e, "viewBox", "0 0 24 24"), qt(e, "version", "1.1"), qt(e, "xmlns", "http://www.w3.org/2000/svg"), qt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), qt(e, "xml:space", "preserve"), qt(e, "stroke", "currentColor"), ps(e, "fill-rule", "evenodd"), ps(e, "clip-rule", "evenodd"), ps(e, "stroke-linecap", "round"), ps(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      eg(n, e, s), G0(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(n) {
      n && Q0(e);
    }
  };
}
class ig extends J0 {
  constructor(e) {
    super(), $0(this, e, null, ng, tg, {});
  }
}
const {
  SvelteComponent: sg,
  append: lg,
  attr: Lt,
  detach: og,
  init: ag,
  insert: rg,
  noop: Tl,
  safe_not_equal: cg,
  set_style: ws,
  svg_element: lr
} = window.__gradio__svelte__internal;
function fg(i) {
  let e, t;
  return {
    c() {
      e = lr("svg"), t = lr("path"), Lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Lt(t, "fill", "none"), Lt(t, "stroke-width", "2"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "version", "1.1"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Lt(e, "xml:space", "preserve"), Lt(e, "stroke", "currentColor"), ws(e, "fill-rule", "evenodd"), ws(e, "clip-rule", "evenodd"), ws(e, "stroke-linecap", "round"), ws(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      rg(n, e, s), lg(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && og(e);
    }
  };
}
class ug extends sg {
  constructor(e) {
    super(), ag(this, e, null, fg, cg, {});
  }
}
const {
  SvelteComponent: hg,
  append: or,
  attr: en,
  detach: dg,
  init: _g,
  insert: mg,
  noop: Fl,
  safe_not_equal: gg,
  set_style: vs,
  svg_element: Ul
} = window.__gradio__svelte__internal;
function bg(i) {
  let e, t, n;
  return {
    c() {
      e = Ul("svg"), t = Ul("path"), n = Ul("path"), en(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), en(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24"), en(e, "xmlns", "http://www.w3.org/2000/svg"), en(e, "fill", "none"), en(e, "stroke", "currentColor"), en(e, "stroke-width", "2"), vs(e, "fill-rule", "evenodd"), vs(e, "clip-rule", "evenodd"), vs(e, "stroke-linecap", "round"), vs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      mg(s, e, l), or(e, t), or(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(s) {
      s && dg(e);
    }
  };
}
class pg extends hg {
  constructor(e) {
    super(), _g(this, e, null, bg, gg, {});
  }
}
const {
  SvelteComponent: wg,
  append: vg,
  attr: vn,
  detach: kg,
  init: yg,
  insert: Cg,
  noop: Ol,
  safe_not_equal: Sg,
  set_style: ks,
  svg_element: ar
} = window.__gradio__svelte__internal;
function Mg(i) {
  let e, t;
  return {
    c() {
      e = ar("svg"), t = ar("path"), vn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), vn(e, "width", "100%"), vn(e, "height", "100%"), vn(e, "viewBox", "0 0 24 24"), vn(e, "fill", "none"), vn(e, "stroke", "currentColor"), vn(e, "stroke-width", "2"), ks(e, "fill-rule", "evenodd"), ks(e, "clip-rule", "evenodd"), ks(e, "stroke-linecap", "round"), ks(e, "stroke-linejoin", "round"), vn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      Cg(n, e, s), vg(e, t);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(n) {
      n && kg(e);
    }
  };
}
class zg extends wg {
  constructor(e) {
    super(), yg(this, e, null, Mg, Sg, {});
  }
}
const {
  SvelteComponent: xg,
  append: Wg,
  attr: kn,
  detach: Bg,
  init: Dg,
  insert: Xg,
  noop: jl,
  safe_not_equal: Yg,
  set_style: ys,
  svg_element: rr
} = window.__gradio__svelte__internal;
function Eg(i) {
  let e, t;
  return {
    c() {
      e = rr("svg"), t = rr("path"), kn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), kn(e, "width", "100%"), kn(e, "height", "100%"), kn(e, "viewBox", "0 0 24 24"), kn(e, "fill", "none"), kn(e, "stroke", "currentColor"), kn(e, "stroke-width", "2"), ys(e, "fill-rule", "evenodd"), ys(e, "clip-rule", "evenodd"), ys(e, "stroke-linecap", "round"), ys(e, "stroke-linejoin", "round"), kn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      Xg(n, e, s), Wg(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && Bg(e);
    }
  };
}
class Rg extends xg {
  constructor(e) {
    super(), Dg(this, e, null, Eg, Yg, {});
  }
}
const {
  SvelteComponent: qg,
  append: cr,
  attr: ot,
  detach: Lg,
  init: Pg,
  insert: Ig,
  noop: Vl,
  safe_not_equal: Hg,
  set_style: Cs,
  svg_element: Nl
} = window.__gradio__svelte__internal;
function Ag(i) {
  let e, t, n;
  return {
    c() {
      e = Nl("svg"), t = Nl("path"), n = Nl("path"), ot(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), ot(t, "fill", "none"), ot(t, "stroke-width", "2"), ot(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), ot(n, "fill", "none"), ot(n, "stroke-width", "2"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "version", "1.1"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ot(e, "xml:space", "preserve"), ot(e, "stroke", "currentColor"), Cs(e, "fill-rule", "evenodd"), Cs(e, "clip-rule", "evenodd"), Cs(e, "stroke-linecap", "round"), Cs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Ig(s, e, l), cr(e, t), cr(e, n);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(s) {
      s && Lg(e);
    }
  };
}
class Tg extends qg {
  constructor(e) {
    super(), Pg(this, e, null, Ag, Hg, {});
  }
}
const {
  SvelteComponent: Fg,
  append: tn,
  attr: Q,
  detach: Ug,
  init: Og,
  insert: jg,
  noop: Kl,
  safe_not_equal: Vg,
  svg_element: jt
} = window.__gradio__svelte__internal;
function Ng(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = jt("svg"), t = jt("path"), n = jt("circle"), s = jt("circle"), l = jt("circle"), o = jt("circle"), r = jt("circle"), a = jt("circle"), c = jt("circle"), f = jt("circle"), Q(t, "fill", "none"), Q(t, "stroke", "currentColor"), Q(t, "stroke-width", "1.5"), Q(t, "stroke-linecap", "round"), Q(t, "stroke-linejoin", "round"), Q(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), Q(n, "cx", "7"), Q(n, "cy", "7"), Q(n, "r", "1.5"), Q(n, "fill", "currentColor"), Q(s, "cx", "15"), Q(s, "cy", "9"), Q(s, "r", "1.5"), Q(s, "fill", "currentColor"), Q(l, "cx", "21"), Q(l, "cy", "5"), Q(l, "r", "1.5"), Q(l, "fill", "currentColor"), Q(o, "cx", "25"), Q(o, "cy", "13"), Q(o, "r", "1.5"), Q(o, "fill", "currentColor"), Q(r, "cx", "23"), Q(r, "cy", "21"), Q(r, "r", "1.5"), Q(r, "fill", "currentColor"), Q(a, "cx", "15"), Q(a, "cy", "19"), Q(a, "r", "1.5"), Q(a, "fill", "currentColor"), Q(c, "cx", "9"), Q(c, "cy", "23"), Q(c, "r", "1.5"), Q(c, "fill", "currentColor"), Q(f, "cx", "5"), Q(f, "cy", "15"), Q(f, "r", "1.5"), Q(f, "fill", "currentColor"), Q(e, "xmlns", "http://www.w3.org/2000/svg"), Q(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Q(e, "aria-hidden", "true"), Q(e, "role", "img"), Q(e, "class", "iconify iconify--carbon"), Q(e, "width", "100%"), Q(e, "height", "100%"), Q(e, "preserveAspectRatio", "xMidYMid meet"), Q(e, "viewBox", "0 0 32 32");
    },
    m(u, d) {
      jg(u, e, d), tn(e, t), tn(e, n), tn(e, s), tn(e, l), tn(e, o), tn(e, r), tn(e, a), tn(e, c), tn(e, f);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(u) {
      u && Ug(e);
    }
  };
}
let Kg = class extends Fg {
  constructor(e) {
    super(), Og(this, e, null, Ng, Vg, {});
  }
};
const {
  SvelteComponent: Zg,
  append: Hi,
  attr: ue,
  detach: Jg,
  init: Gg,
  insert: Qg,
  noop: Zl,
  safe_not_equal: $g,
  set_style: Ss,
  svg_element: di
} = window.__gradio__svelte__internal;
function e2(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = di("svg"), t = di("circle"), n = di("circle"), s = di("circle"), l = di("circle"), o = di("circle"), ue(t, "cx", "12"), ue(t, "cy", "12"), ue(t, "r", "8"), ue(t, "stroke-width", "2"), ue(t, "fill", "none"), ue(n, "cx", "12"), ue(n, "cy", "12"), ue(n, "r", "4"), ue(n, "stroke-width", "1.5"), ue(n, "fill", "none"), ue(n, "opacity", "0.5"), ue(s, "cx", "8"), ue(s, "cy", "8"), ue(s, "r", "1"), ue(s, "fill", "currentColor"), ue(s, "opacity", "0.6"), ue(l, "cx", "16"), ue(l, "cy", "8"), ue(l, "r", "1"), ue(l, "fill", "currentColor"), ue(l, "opacity", "0.6"), ue(o, "cx", "12"), ue(o, "cy", "16"), ue(o, "r", "1"), ue(o, "fill", "currentColor"), ue(o, "opacity", "0.6"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "version", "1.1"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ue(e, "xml:space", "preserve"), ue(e, "stroke", "currentColor"), Ss(e, "fill-rule", "evenodd"), Ss(e, "clip-rule", "evenodd"), Ss(e, "stroke-linecap", "round"), Ss(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Qg(r, e, a), Hi(e, t), Hi(e, n), Hi(e, s), Hi(e, l), Hi(e, o);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(r) {
      r && Jg(e);
    }
  };
}
class t2 extends Zg {
  constructor(e) {
    super(), Gg(this, e, null, e2, $g, {});
  }
}
const {
  SvelteComponent: n2,
  append: fr,
  attr: _t,
  detach: i2,
  init: s2,
  insert: l2,
  noop: Jl,
  safe_not_equal: o2,
  set_style: Ms,
  svg_element: Gl
} = window.__gradio__svelte__internal;
function a2(i) {
  let e, t, n;
  return {
    c() {
      e = Gl("svg"), t = Gl("path"), n = Gl("path"), _t(t, "d", "M3 7v6h6"), _t(t, "stroke-width", "2"), _t(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), _t(n, "stroke-width", "2"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "version", "1.1"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _t(e, "xml:space", "preserve"), _t(e, "stroke", "currentColor"), _t(e, "fill", "none"), Ms(e, "fill-rule", "evenodd"), Ms(e, "clip-rule", "evenodd"), Ms(e, "stroke-linecap", "round"), Ms(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      l2(s, e, l), fr(e, t), fr(e, n);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(s) {
      s && i2(e);
    }
  };
}
class r2 extends n2 {
  constructor(e) {
    super(), s2(this, e, null, a2, o2, {});
  }
}
const {
  SvelteComponent: c2,
  append: ur,
  attr: mt,
  detach: f2,
  init: u2,
  insert: h2,
  noop: Ql,
  safe_not_equal: d2,
  set_style: zs,
  svg_element: $l
} = window.__gradio__svelte__internal;
function _2(i) {
  let e, t, n;
  return {
    c() {
      e = $l("svg"), t = $l("path"), n = $l("path"), mt(t, "d", "M21 7v6h-6"), mt(t, "stroke-width", "2"), mt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), mt(n, "stroke-width", "2"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "version", "1.1"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), mt(e, "xml:space", "preserve"), mt(e, "stroke", "currentColor"), mt(e, "fill", "none"), zs(e, "fill-rule", "evenodd"), zs(e, "clip-rule", "evenodd"), zs(e, "stroke-linecap", "round"), zs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      h2(s, e, l), ur(e, t), ur(e, n);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(s) {
      s && f2(e);
    }
  };
}
class m2 extends c2 {
  constructor(e) {
    super(), u2(this, e, null, _2, d2, {});
  }
}
const {
  SvelteComponent: g2,
  append: b2,
  attr: Pt,
  detach: p2,
  init: w2,
  insert: v2,
  noop: eo,
  safe_not_equal: k2,
  set_style: hr,
  svg_element: dr
} = window.__gradio__svelte__internal;
function y2(i) {
  let e, t;
  return {
    c() {
      e = dr("svg"), t = dr("path"), Pt(t, "d", "M7 10l5 5 5-5z"), Pt(t, "stroke", "none"), Pt(e, "width", "100%"), Pt(e, "height", "100%"), Pt(e, "viewBox", "0 0 24 24"), Pt(e, "version", "1.1"), Pt(e, "xmlns", "http://www.w3.org/2000/svg"), Pt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Pt(e, "xml:space", "preserve"), Pt(e, "stroke", "currentColor"), Pt(e, "fill", "currentColor"), hr(e, "fill-rule", "evenodd"), hr(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      v2(n, e, s), b2(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && p2(e);
    }
  };
}
class C2 extends g2 {
  constructor(e) {
    super(), w2(this, e, null, y2, k2, {});
  }
}
const {
  SvelteComponent: S2,
  append: _r,
  attr: to,
  bubble: mr,
  create_component: M2,
  destroy_component: z2,
  detach: ef,
  element: gr,
  init: x2,
  insert: tf,
  listen: no,
  mount_component: W2,
  run_all: B2,
  safe_not_equal: D2,
  set_data: X2,
  set_input_value: br,
  space: Y2,
  text: E2,
  transition_in: R2,
  transition_out: q2
} = window.__gradio__svelte__internal, { createEventDispatcher: L2, afterUpdate: P2 } = window.__gradio__svelte__internal;
function I2(i) {
  let e;
  return {
    c() {
      e = E2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      tf(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && X2(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && ef(e);
    }
  };
}
function H2(i) {
  let e, t, n, s, l, o, r;
  return t = new rc({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [I2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = gr("label"), M2(t.$$.fragment), n = Y2(), s = gr("input"), to(s, "type", "color"), s.disabled = /*disabled*/
      i[3], to(s, "class", "svelte-16l8u73"), to(e, "class", "block");
    },
    m(a, c) {
      tf(a, e, c), W2(t, e, null), _r(e, n), _r(e, s), br(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        no(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        no(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        no(
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
      1 && br(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (R2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      q2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && ef(e), z2(t), o = !1, B2(r);
    }
  };
}
function A2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = L2();
  function f() {
    c("change", n), s || c("input");
  }
  P2(() => {
    t(5, s = !1);
  });
  function u(b) {
    mr.call(this, i, b);
  }
  function d(b) {
    mr.call(this, i, b);
  }
  function m() {
    n = this.value, t(0, n);
  }
  return i.$$set = (b) => {
    "value" in b && t(0, n = b.value), "value_is_output" in b && t(5, s = b.value_is_output), "label" in b && t(1, l = b.label), "info" in b && t(2, o = b.info), "disabled" in b && t(3, r = b.disabled), "show_label" in b && t(4, a = b.show_label);
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
    d,
    m
  ];
}
class T2 extends S2 {
  constructor(e) {
    super(), x2(this, e, A2, H2, D2, {
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
  SvelteComponent: F2,
  append: nf,
  attr: De,
  bubble: U2,
  check_outros: O2,
  create_slot: sf,
  detach: is,
  element: fl,
  empty: j2,
  get_all_dirty_from_scope: lf,
  get_slot_changes: of,
  group_outros: V2,
  init: N2,
  insert: ss,
  listen: K2,
  safe_not_equal: Z2,
  set_style: rt,
  space: af,
  src_url_equal: Zs,
  toggle_class: ki,
  transition_in: Js,
  transition_out: Gs,
  update_slot_base: rf
} = window.__gradio__svelte__internal;
function J2(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && pr(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = sf(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = fl("button"), r && r.c(), t = af(), c && c.c(), De(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), De(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], ki(e, "hidden", !/*visible*/
      i[2]), rt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), rt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), rt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, u) {
      ss(f, e, u), r && r.m(e, null), nf(e, t), c && c.m(e, null), s = !0, l || (o = K2(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? r ? r.p(f, u) : (r = pr(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || u & /*$$scope*/
      2048) && rf(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? of(
          a,
          /*$$scope*/
          f[11],
          u,
          null
        ) : lf(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && De(e, "class", n), (!s || u & /*elem_id*/
      1) && De(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || u & /*size, variant, elem_classes, visible*/
      30) && ki(e, "hidden", !/*visible*/
      f[2]), u & /*scale*/
      512 && rt(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), u & /*scale*/
      512 && rt(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && rt(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (Js(c, f), s = !0);
    },
    o(f) {
      Gs(c, f), s = !1;
    },
    d(f) {
      f && is(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function G2(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && wr(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = sf(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = fl("a"), l && l.c(), t = af(), r && r.c(), De(
        e,
        "href",
        /*link*/
        i[6]
      ), De(e, "rel", "noopener noreferrer"), De(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), De(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), De(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), ki(e, "hidden", !/*visible*/
      i[2]), ki(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), rt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), rt(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), rt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), rt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      ss(a, e, c), l && l.m(e, null), nf(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = wr(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && rf(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? of(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : lf(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && De(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && De(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && De(e, "class", n), (!s || c & /*elem_id*/
      1) && De(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && ki(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && ki(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && rt(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && rt(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && rt(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && rt(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (Js(r, a), s = !0);
    },
    o(a) {
      Gs(r, a), s = !1;
    },
    d(a) {
      a && is(e), l && l.d(), r && r.d(a);
    }
  };
}
function pr(i) {
  let e, t, n;
  return {
    c() {
      e = fl("img"), De(e, "class", "button-icon svelte-8huxfn"), Zs(e.src, t = /*icon*/
      i[7].url) || De(e, "src", t), De(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ss(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Zs(e.src, t = /*icon*/
      s[7].url) && De(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && De(e, "alt", n);
    },
    d(s) {
      s && is(e);
    }
  };
}
function wr(i) {
  let e, t, n;
  return {
    c() {
      e = fl("img"), De(e, "class", "button-icon svelte-8huxfn"), Zs(e.src, t = /*icon*/
      i[7].url) || De(e, "src", t), De(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ss(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Zs(e.src, t = /*icon*/
      s[7].url) && De(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && De(e, "alt", n);
    },
    d(s) {
      s && is(e);
    }
  };
}
function Q2(i) {
  let e, t, n, s;
  const l = [G2, J2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = j2();
    },
    m(a, c) {
      o[e].m(a, c), ss(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (V2(), Gs(o[f], 1, 1, () => {
        o[f] = null;
      }), O2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Js(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Js(t), s = !0);
    },
    o(a) {
      Gs(t), s = !1;
    },
    d(a) {
      a && is(n), o[e].d(a);
    }
  };
}
function $2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: m = !1 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e;
  function p(w) {
    U2.call(this, i, w);
  }
  return i.$$set = (w) => {
    "elem_id" in w && t(0, l = w.elem_id), "elem_classes" in w && t(1, o = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, a = w.variant), "size" in w && t(4, c = w.size), "value" in w && t(5, f = w.value), "link" in w && t(6, u = w.link), "icon" in w && t(7, d = w.icon), "disabled" in w && t(8, m = w.disabled), "scale" in w && t(9, b = w.scale), "min_width" in w && t(10, g = w.min_width), "$$scope" in w && t(11, s = w.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    m,
    b,
    g,
    s,
    n,
    p
  ];
}
class ko extends F2 {
  constructor(e) {
    super(), N2(this, e, $2, Q2, Z2, {
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
  SvelteComponent: eb,
  add_render_callback: cf,
  append: xs,
  attr: pt,
  binding_callbacks: vr,
  check_outros: tb,
  create_bidirectional_transition: kr,
  destroy_each: nb,
  detach: Gi,
  element: Qs,
  empty: ib,
  ensure_array_like: yr,
  group_outros: sb,
  init: lb,
  insert: Qi,
  listen: yo,
  prevent_default: ob,
  run_all: ab,
  safe_not_equal: rb,
  set_data: cb,
  set_style: _i,
  space: Co,
  text: fb,
  toggle_class: Vt,
  transition_in: io,
  transition_out: Cr
} = window.__gradio__svelte__internal, { createEventDispatcher: ub } = window.__gradio__svelte__internal;
function Sr(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Mr(i) {
  let e, t, n, s, l, o = yr(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = zr(Sr(i, o, a));
  return {
    c() {
      e = Qs("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      pt(e, "class", "options svelte-yuohum"), pt(e, "role", "listbox"), _i(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), _i(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), _i(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Qi(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = yo(e, "mousedown", ob(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = yr(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = Sr(a, o, f);
          r[f] ? r[f].p(u, c) : (r[f] = zr(u), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && _i(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && _i(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && _i(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && cf(() => {
        n && (t || (t = kr(e, ya, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = kr(e, ya, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Gi(e), nb(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function zr(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = Qs("li"), t = Qs("span"), t.textContent = "✓", n = Co(), l = fb(s), o = Co(), pt(t, "class", "inner-item svelte-yuohum"), Vt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), pt(e, "class", "item svelte-yuohum"), pt(e, "data-index", r = /*index*/
      i[26]), pt(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), pt(e, "data-testid", "dropdown-option"), pt(e, "role", "option"), pt(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Vt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), Vt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Vt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Vt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, u) {
      Qi(f, e, u), xs(e, t), xs(e, n), xs(e, l), xs(e, o);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && Vt(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && cb(l, s), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && pt(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && pt(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && pt(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
      18 && Vt(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && Vt(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && Vt(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && Vt(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && Gi(e);
    }
  };
}
function hb(i) {
  let e, t, n, s, l;
  cf(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Mr(i)
  );
  return {
    c() {
      e = Qs("div"), t = Co(), o && o.c(), n = ib(), pt(e, "class", "reference");
    },
    m(r, a) {
      Qi(r, e, a), i[20](e), Qi(r, t, a), o && o.m(r, a), Qi(r, n, a), s || (l = [
        yo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        yo(
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
      12 && io(o, 1)) : (o = Mr(r), o.c(), io(o, 1), o.m(n.parentNode, n)) : o && (sb(), Cr(o, 1, 1, () => {
        o = null;
      }), tb());
    },
    i(r) {
      io(o);
    },
    o(r) {
      Cr(o);
    },
    d(r) {
      r && (Gi(e), Gi(t), Gi(n)), i[20](null), o && o.d(r), s = !1, ab(l);
    }
  };
}
function db(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, d, m, b, g, p, w, h, v;
  function y() {
    const { top: q, bottom: X } = g.getBoundingClientRect();
    t(16, u = q), t(17, d = v - X);
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
  const D = ub();
  function S() {
    t(11, v = window.innerHeight);
  }
  function R(q) {
    vr[q ? "unshift" : "push"](() => {
      g = q, t(6, g);
    });
  }
  const B = (q) => D("change", q);
  function x(q) {
    vr[q ? "unshift" : "push"](() => {
      p = q, t(7, p);
    });
  }
  return i.$$set = (q) => {
    "choices" in q && t(0, l = q.choices), "filtered_indices" in q && t(1, o = q.filtered_indices), "show_options" in q && t(2, r = q.show_options), "disabled" in q && t(3, a = q.disabled), "selected_indices" in q && t(4, c = q.selected_indices), "active_index" in q && t(5, f = q.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (p && c.length > 0) {
          let X = p.querySelectorAll("li");
          for (const j of Array.from(X))
            if (j.getAttribute("data-index") === c[0].toString()) {
              t(14, n = p == null ? void 0 : p.scrollTo) === null || n === void 0 || n.call(p, 0, j.offsetTop);
              break;
            }
        }
        y();
        const q = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, m = (q == null ? void 0 : q.height) || 0), t(8, b = (q == null ? void 0 : q.width) || 0);
      }
      d > u ? (t(10, h = d), t(9, w = null)) : (t(9, w = `${d + m}px`), t(10, h = u - m));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    g,
    p,
    b,
    w,
    h,
    v,
    C,
    D,
    n,
    s,
    u,
    d,
    m,
    S,
    R,
    B,
    x
  ];
}
class _b extends eb {
  constructor(e) {
    super(), lb(this, e, db, hb, rb, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function mb(i, e) {
  return (i % e + e) % e;
}
function xr(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function gb(i, e, t) {
  i("change", e), t || i("input");
}
function bb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[mb(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: pb,
  append: Ln,
  attr: bt,
  binding_callbacks: wb,
  check_outros: vb,
  create_component: So,
  destroy_component: Mo,
  detach: Ho,
  element: bi,
  group_outros: kb,
  init: yb,
  insert: Ao,
  listen: Mn,
  mount_component: zo,
  noop: Cb,
  run_all: Sb,
  safe_not_equal: Mb,
  set_data: zb,
  set_input_value: Wr,
  space: so,
  text: xb,
  toggle_class: mi,
  transition_in: pi,
  transition_out: Ni
} = window.__gradio__svelte__internal, { onMount: Wb } = window.__gradio__svelte__internal, { createEventDispatcher: Bb, afterUpdate: Db } = window.__gradio__svelte__internal;
function Xb(i) {
  let e;
  return {
    c() {
      e = xb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Ao(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && zb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ho(e);
    }
  };
}
function Br(i) {
  let e, t, n, s, l;
  return t = new Xo({}), {
    c() {
      e = bi("div"), So(t.$$.fragment), bt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      Ao(o, e, r), zo(t, e, null), n = !0, s || (l = Mn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: Cb,
    i(o) {
      n || (pi(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ni(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ho(e), Mo(t), s = !1, l();
    }
  };
}
function Yb(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b;
  t = new rc({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Xb] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && Br(i);
  return u = new _b({
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
      e = bi("div"), So(t.$$.fragment), n = so(), s = bi("div"), l = bi("div"), o = bi("div"), r = bi("input"), c = so(), g && g.c(), f = so(), So(u.$$.fragment), bt(r, "role", "listbox"), bt(r, "aria-controls", "dropdown-options"), bt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), bt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), bt(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], bt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], mi(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), bt(o, "class", "secondary-wrap svelte-1a9du2n"), bt(l, "class", "wrap-inner svelte-1a9du2n"), mi(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), bt(s, "class", "wrap svelte-1a9du2n"), bt(e, "class", "svelte-1a9du2n"), mi(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(p, w) {
      Ao(p, e, w), zo(t, e, null), Ln(e, n), Ln(e, s), Ln(s, l), Ln(l, o), Ln(o, r), Wr(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), Ln(o, c), g && g.m(o, null), Ln(s, f), zo(u, s, null), d = !0, m || (b = [
        Mn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        Mn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        Mn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        Mn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        Mn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        Mn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        Mn(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], m = !0);
    },
    p(p, w) {
      const h = {};
      w[0] & /*show_label*/
      16 && (h.show_label = /*show_label*/
      p[4]), w[0] & /*info*/
      2 && (h.info = /*info*/
      p[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      16 && (h.$$scope = { dirty: w, ctx: p }), t.$set(h), (!d || w[0] & /*show_options*/
      4096) && bt(
        r,
        "aria-expanded",
        /*show_options*/
        p[12]
      ), (!d || w[0] & /*label*/
      1) && bt(
        r,
        "aria-label",
        /*label*/
        p[0]
      ), (!d || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      p[3]), (!d || w[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      p[7])) && (r.readOnly = a), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      p[9] && Wr(
        r,
        /*input_text*/
        p[9]
      ), (!d || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && mi(r, "subdued", !/*choices_names*/
      p[13].includes(
        /*input_text*/
        p[9]
      ) && !/*allow_custom_value*/
      p[6]), /*disabled*/
      p[3] ? g && (kb(), Ni(g, 1, 1, () => {
        g = null;
      }), vb()) : g ? (g.p(p, w), w[0] & /*disabled*/
      8 && pi(g, 1)) : (g = Br(p), g.c(), pi(g, 1), g.m(o, null)), (!d || w[0] & /*show_options*/
      4096) && mi(
        l,
        "show_options",
        /*show_options*/
        p[12]
      );
      const v = {};
      w[0] & /*show_options*/
      4096 && (v.show_options = /*show_options*/
      p[12]), w[0] & /*choices*/
      4 && (v.choices = /*choices*/
      p[2]), w[0] & /*filtered_indices*/
      1024 && (v.filtered_indices = /*filtered_indices*/
      p[10]), w[0] & /*disabled*/
      8 && (v.disabled = /*disabled*/
      p[3]), w[0] & /*selected_index*/
      2048 && (v.selected_indices = /*selected_index*/
      p[11] === null ? [] : [
        /*selected_index*/
        p[11]
      ]), w[0] & /*active_index*/
      16384 && (v.active_index = /*active_index*/
      p[14]), u.$set(v), (!d || w[0] & /*container*/
      32) && mi(
        e,
        "container",
        /*container*/
        p[5]
      );
    },
    i(p) {
      d || (pi(t.$$.fragment, p), pi(g), pi(u.$$.fragment, p), d = !0);
    },
    o(p) {
      Ni(t.$$.fragment, p), Ni(g), Ni(u.$$.fragment, p), d = !1;
    },
    d(p) {
      p && Ho(e), Mo(t), i[31](null), g && g.d(), Mo(u), m = !1, Sb(b);
    }
  };
}
function Eb(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: m = !1 } = e, { filterable: b = !0 } = e, g, p = !1, w, h, v = "", y = "", k = !1, C = [], D = null, S = null, R;
  const B = Bb();
  l ? (R = a.map((L) => L[1]).indexOf(l), S = R, S === -1 ? (o = l, S = null) : ([v, o] = a[S], y = v), q()) : a.length > 0 && (R = 0, S = 0, [v, l] = a[S], o = l, y = v);
  function x() {
    t(13, w = a.map((L) => L[0])), t(26, h = a.map((L) => L[1]));
  }
  function q() {
    x(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, v = ""), t(11, S = null)) : h.includes(l) ? (t(9, v = w[h.indexOf(l)]), t(11, S = h.indexOf(l))) : m ? (t(9, v = l), t(11, S = null)) : (t(9, v = ""), t(11, S = null)), t(29, R = S);
  }
  function X(L) {
    if (t(11, S = parseInt(L.detail.target.dataset.index)), isNaN(S)) {
      t(11, S = null);
      return;
    }
    t(12, p = !1), t(14, D = null), g.blur();
  }
  function j(L) {
    t(10, C = a.map((le, $) => $)), t(12, p = !0), B("focus");
  }
  function V() {
    f || (g.focus(), t(12, p = !0));
  }
  function U(L) {
    L.preventDefault(), f || (g.focus(), t(12, p = !p));
  }
  function ee() {
    m ? t(22, l = v) : t(9, v = w[h.indexOf(l)]), t(12, p = !1), t(14, D = null), B("blur");
  }
  function W(L) {
    t(12, [p, D] = bb(L, D, C), p, (t(14, D), t(2, a), t(25, c), t(6, m), t(9, v), t(10, C), t(8, g), t(27, y), t(11, S), t(29, R), t(28, k), t(26, h))), L.key === "Enter" && (D !== null ? (t(11, S = D), t(12, p = !1), g.blur(), t(14, D = null)) : w.includes(v) ? (t(11, S = w.indexOf(v)), t(12, p = !1), t(14, D = null), g.blur()) : m && (t(22, l = v), t(11, S = null), t(12, p = !1), t(14, D = null), g.blur()), B("enter", l));
  }
  Db(() => {
    t(23, r = !1), t(28, k = !0);
  }), Wb(() => {
  });
  function F() {
    v = this.value, t(9, v), t(11, S), t(29, R), t(28, k), t(2, a), t(26, h);
  }
  function se(L) {
    wb[L ? "unshift" : "push"](() => {
      g = L, t(8, g);
    });
  }
  const A = (L) => B("key_up", { key: L.key, input_value: v });
  return i.$$set = (L) => {
    "label" in L && t(0, n = L.label), "info" in L && t(1, s = L.info), "value" in L && t(22, l = L.value), "value_is_output" in L && t(23, r = L.value_is_output), "choices" in L && t(2, a = L.choices), "disabled" in L && t(3, f = L.disabled), "show_label" in L && t(4, u = L.show_label), "container" in L && t(5, d = L.container), "allow_custom_value" in L && t(6, m = L.allow_custom_value), "filterable" in L && t(7, b = L.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && S !== R && S !== null && k && (t(9, [v, l] = a[S], v, (t(22, l), t(11, S), t(29, R), t(28, k), t(2, a), t(26, h))), t(29, R = S), B("select", {
      index: S,
      value: h[S],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (q(), gb(B, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && x(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (m || q(), t(25, c = a), t(10, C = xr(a, v)), !m && C.length > 0 && t(14, D = C[0]), g == document.activeElement && t(12, p = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && v !== y && (t(10, C = xr(a, v)), t(27, y = v), !m && C.length > 0 && t(14, D = C[0]));
  }, [
    n,
    s,
    a,
    f,
    u,
    d,
    m,
    b,
    g,
    v,
    C,
    S,
    p,
    w,
    D,
    B,
    X,
    j,
    V,
    U,
    ee,
    W,
    l,
    r,
    o,
    c,
    h,
    y,
    k,
    R,
    F,
    se,
    A
  ];
}
class Rb extends pb {
  constructor(e) {
    super(), yb(
      this,
      e,
      Eb,
      Yb,
      Mb,
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
  SvelteComponent: qb,
  append: Ct,
  attr: yi,
  check_outros: xo,
  create_component: Kn,
  destroy_component: Zn,
  detach: Ei,
  element: Kt,
  group_outros: Wo,
  init: Lb,
  insert: Ri,
  listen: Pb,
  mount_component: Jn,
  safe_not_equal: Ib,
  set_style: Ci,
  space: Ai,
  text: To,
  toggle_class: Dr,
  transition_in: nt,
  transition_out: wt
} = window.__gradio__svelte__internal, { createEventDispatcher: Hb } = window.__gradio__svelte__internal, { onMount: Ab, onDestroy: Tb } = window.__gradio__svelte__internal;
function Xr(i) {
  let e, t, n, s, l, o, r;
  const a = [Ub, Fb], c = [];
  function f(u, d) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = Kt("div"), t = Kt("button"), s.c(), yi(t, "class", "icon svelte-d9x7u0"), yi(t, "aria-label", "Lock label detail"), Dr(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Ci(e, "margin-right", "8px");
    },
    m(u, d) {
      Ri(u, e, d), Ct(e, t), c[n].m(t, null), l = !0, o || (r = Pb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, d) {
      let m = n;
      n = f(u), n !== m && (Wo(), wt(c[m], 1, 1, () => {
        c[m] = null;
      }), xo(), s = c[n], s || (s = c[n] = a[n](u), s.c()), nt(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      4) && Dr(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      l || (nt(s), l = !0);
    },
    o(u) {
      wt(s), l = !1;
    },
    d(u) {
      u && Ei(e), c[n].d(), o = !1, r();
    }
  };
}
function Fb(i) {
  let e, t;
  return e = new Rg({}), {
    c() {
      Kn(e.$$.fragment);
    },
    m(n, s) {
      Jn(e, n, s), t = !0;
    },
    i(n) {
      t || (nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zn(e, n);
    }
  };
}
function Ub(i) {
  let e, t;
  return e = new zg({}), {
    c() {
      Kn(e.$$.fragment);
    },
    m(n, s) {
      Jn(e, n, s), t = !0;
    },
    i(n) {
      t || (nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zn(e, n);
    }
  };
}
function Ob(i) {
  let e;
  return {
    c() {
      e = To("Cancel");
    },
    m(t, n) {
      Ri(t, e, n);
    },
    d(t) {
      t && Ei(e);
    }
  };
}
function Yr(i) {
  let e, t, n;
  return t = new ko({
    props: {
      variant: "stop",
      $$slots: { default: [jb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Kt("div"), Kn(t.$$.fragment), Ci(e, "margin-right", "8px");
    },
    m(s, l) {
      Ri(s, e, l), Jn(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      262144 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (nt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      wt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ei(e), Zn(t);
    }
  };
}
function jb(i) {
  let e;
  return {
    c() {
      e = To("Remove");
    },
    m(t, n) {
      Ri(t, e, n);
    },
    d(t) {
      t && Ei(e);
    }
  };
}
function Vb(i) {
  let e;
  return {
    c() {
      e = To("OK");
    },
    m(t, n) {
      Ri(t, e, n);
    },
    d(t) {
      t && Ei(e);
    }
  };
}
function Nb(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, w, h = !/*showRemove*/
  i[4] && Xr(i);
  o = new Rb({
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
  ), c = new T2({
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
  ), d = new ko({
    props: {
      $$slots: { default: [Ob] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let v = (
    /*showRemove*/
    i[4] && Yr(i)
  );
  return p = new ko({
    props: {
      variant: "primary",
      $$slots: { default: [Vb] },
      $$scope: { ctx: i }
    }
  }), p.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Kt("div"), t = Kt("div"), n = Kt("span"), h && h.c(), s = Ai(), l = Kt("div"), Kn(o.$$.fragment), r = Ai(), a = Kt("div"), Kn(c.$$.fragment), f = Ai(), u = Kt("div"), Kn(d.$$.fragment), m = Ai(), v && v.c(), b = Ai(), g = Kt("div"), Kn(p.$$.fragment), Ci(l, "margin-right", "10px"), Ci(a, "margin-right", "40px"), Ci(a, "margin-bottom", "8px"), Ci(u, "margin-right", "8px"), yi(n, "class", "model-content svelte-d9x7u0"), yi(t, "class", "modal-container svelte-d9x7u0"), yi(e, "class", "modal svelte-d9x7u0"), yi(e, "id", "model-box-edit");
    },
    m(y, k) {
      Ri(y, e, k), Ct(e, t), Ct(t, n), h && h.m(n, null), Ct(n, s), Ct(n, l), Jn(o, l, null), Ct(n, r), Ct(n, a), Jn(c, a, null), Ct(n, f), Ct(n, u), Jn(d, u, null), Ct(n, m), v && v.m(n, null), Ct(n, b), Ct(n, g), Jn(p, g, null), w = !0;
    },
    p(y, [k]) {
      /*showRemove*/
      y[4] ? h && (Wo(), wt(h, 1, 1, () => {
        h = null;
      }), xo()) : h ? (h.p(y, k), k & /*showRemove*/
      16 && nt(h, 1)) : (h = Xr(y), h.c(), nt(h, 1), h.m(n, s));
      const C = {};
      k & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      y[0]), k & /*choices*/
      8 && (C.choices = /*choices*/
      y[3]), o.$set(C);
      const D = {};
      k & /*currentColor*/
      2 && (D.value = /*currentColor*/
      y[1]), c.$set(D);
      const S = {};
      k & /*$$scope*/
      262144 && (S.$$scope = { dirty: k, ctx: y }), d.$set(S), /*showRemove*/
      y[4] ? v ? (v.p(y, k), k & /*showRemove*/
      16 && nt(v, 1)) : (v = Yr(y), v.c(), nt(v, 1), v.m(n, b)) : v && (Wo(), wt(v, 1, 1, () => {
        v = null;
      }), xo());
      const R = {};
      k & /*$$scope*/
      262144 && (R.$$scope = { dirty: k, ctx: y }), p.$set(R);
    },
    i(y) {
      w || (nt(h), nt(o.$$.fragment, y), nt(c.$$.fragment, y), nt(d.$$.fragment, y), nt(v), nt(p.$$.fragment, y), w = !0);
    },
    o(y) {
      wt(h), wt(o.$$.fragment, y), wt(c.$$.fragment, y), wt(d.$$.fragment, y), wt(v), wt(p.$$.fragment, y), w = !1;
    },
    d(y) {
      y && Ei(e), h && h.d(), Zn(o), Zn(c), Zn(d), v && v.d(), Zn(p);
    }
  };
}
function Kb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = Hb();
  function d(k) {
    u("change", {
      label: s,
      color: a,
      lock: f,
      ret: k
      // -1: remove, 0: cancel, 1: change
    });
  }
  function m(k) {
    const { detail: C } = k;
    let D = C;
    Number.isInteger(D) ? (Array.isArray(o) && D < o.length && t(1, a = o[D]), Array.isArray(l) && D < l.length && t(0, s = l[D][0])) : t(0, s = D);
  }
  function b(k) {
    const { detail: C } = k;
    t(1, a = C);
  }
  function g(k) {
    m(k), d(1);
  }
  function p(k) {
    t(2, f = !f);
  }
  function w(k) {
    switch (k.key) {
      case "Enter":
        d(1);
        break;
    }
  }
  Ab(() => {
    document.addEventListener("keydown", w), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : ""));
  }), Tb(() => {
    document.removeEventListener("keydown", w);
  });
  const h = () => d(0), v = () => d(-1), y = () => d(1);
  return i.$$set = (k) => {
    "label" in k && t(10, n = k.label), "currentLabel" in k && t(0, s = k.currentLabel), "choices" in k && t(3, l = k.choices), "choicesColors" in k && t(11, o = k.choicesColors), "color" in k && t(12, r = k.color), "currentColor" in k && t(1, a = k.currentColor), "showRemove" in k && t(4, c = k.showRemove), "labelDetailLock" in k && t(2, f = k.labelDetailLock);
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
    d,
    m,
    b,
    g,
    p,
    n,
    o,
    r,
    h,
    v,
    y
  ];
}
class Fo extends qb {
  constructor(e) {
    super(), Lb(this, e, Kb, Nb, Ib, {
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
const {
  SvelteComponent: Zb,
  append: ze,
  attr: be,
  detach: ff,
  element: je,
  empty: Jb,
  init: Gb,
  insert: uf,
  listen: Nt,
  noop: Er,
  run_all: Qb,
  safe_not_equal: $b,
  set_data: ep,
  set_input_value: Ws,
  set_style: Bs,
  space: yn,
  text: Rr,
  to_number: Bo
} = window.__gradio__svelte__internal, { createEventDispatcher: tp } = window.__gradio__svelte__internal;
function qr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, w, h, v, y, k, C, D, S, R, B, x, q, X;
  return {
    c() {
      e = je("div"), t = je("div"), n = je("div"), s = je("h3"), s.textContent = "Eraser Settings", l = yn(), o = je("button"), o.textContent = "×", r = yn(), a = je("div"), c = je("div"), f = je("label"), f.textContent = "Eraser Size:", u = yn(), d = je("div"), m = je("input"), b = yn(), g = je("input"), p = yn(), w = je("div"), h = je("div"), v = yn(), y = je("span"), k = Rr(
        /*tempSize*/
        i[1]
      ), C = Rr("px"), D = yn(), S = je("div"), R = je("button"), R.textContent = "Cancel", B = yn(), x = je("button"), x.textContent = "Apply", be(s, "id", "eraser-settings-title"), be(s, "class", "svelte-a42w5h"), be(o, "class", "close-button svelte-a42w5h"), be(o, "aria-label", "Close"), be(n, "class", "modal-header svelte-a42w5h"), be(f, "for", "eraser-size"), be(f, "class", "svelte-a42w5h"), be(m, "id", "eraser-size"), be(m, "type", "range"), be(m, "min", "1"), be(m, "max", "50"), be(m, "class", "size-slider svelte-a42w5h"), be(g, "type", "number"), be(g, "min", "1"), be(g, "max", "50"), be(g, "class", "size-input svelte-a42w5h"), be(d, "class", "size-controls svelte-a42w5h"), be(h, "class", "preview-circle svelte-a42w5h"), Bs(h, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Bs(h, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), be(y, "class", "size-label svelte-a42w5h"), be(w, "class", "size-preview svelte-a42w5h"), be(c, "class", "setting-group svelte-a42w5h"), be(a, "class", "modal-body svelte-a42w5h"), be(R, "class", "button secondary svelte-a42w5h"), be(x, "class", "button primary svelte-a42w5h"), be(S, "class", "modal-footer svelte-a42w5h"), be(t, "class", "modal-content svelte-a42w5h"), be(e, "class", "modal-backdrop svelte-a42w5h"), be(e, "role", "dialog"), be(e, "aria-modal", "true"), be(e, "aria-labelledby", "eraser-settings-title");
    },
    m(j, V) {
      uf(j, e, V), ze(e, t), ze(t, n), ze(n, s), ze(n, l), ze(n, o), ze(t, r), ze(t, a), ze(a, c), ze(c, f), ze(c, u), ze(c, d), ze(d, m), Ws(
        m,
        /*tempSize*/
        i[1]
      ), ze(d, b), ze(d, g), Ws(
        g,
        /*tempSize*/
        i[1]
      ), ze(c, p), ze(c, w), ze(w, h), ze(w, v), ze(w, y), ze(y, k), ze(y, C), ze(t, D), ze(t, S), ze(S, R), ze(S, B), ze(S, x), q || (X = [
        Nt(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        Nt(
          m,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        Nt(
          m,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        Nt(
          m,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        Nt(
          g,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        Nt(
          g,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        Nt(
          R,
          "click",
          /*handleClose*/
          i[3]
        ),
        Nt(
          x,
          "click",
          /*click_handler*/
          i[9]
        ),
        Nt(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        Nt(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], q = !0);
    },
    p(j, V) {
      V & /*tempSize*/
      2 && Ws(
        m,
        /*tempSize*/
        j[1]
      ), V & /*tempSize*/
      2 && Bo(g.value) !== /*tempSize*/
      j[1] && Ws(
        g,
        /*tempSize*/
        j[1]
      ), V & /*tempSize*/
      2 && Bs(h, "width", Math.min(
        /*tempSize*/
        j[1],
        30
      ) + "px"), V & /*tempSize*/
      2 && Bs(h, "height", Math.min(
        /*tempSize*/
        j[1],
        30
      ) + "px"), V & /*tempSize*/
      2 && ep(
        k,
        /*tempSize*/
        j[1]
      );
    },
    d(j) {
      j && ff(e), q = !1, Qb(X);
    }
  };
}
function np(i) {
  let e, t = (
    /*visible*/
    i[0] && qr(i)
  );
  return {
    c() {
      t && t.c(), e = Jb();
    },
    m(n, s) {
      t && t.m(n, s), uf(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = qr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: Er,
    o: Er,
    d(n) {
      n && ff(e), t && t.d(n);
    }
  };
}
function ip(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = tp();
  let o = n;
  function r() {
    l("change", { size: o });
  }
  function a() {
    l("close");
  }
  function c(b) {
    b.key === "Escape" ? a() : b.key === "Enter" && (r(), a());
  }
  function f(b) {
    b.target === b.currentTarget && a();
  }
  function u() {
    o = Bo(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = Bo(this.value), t(1, o), t(0, s), t(6, n);
  }
  const m = () => {
    r(), a();
  };
  return i.$$set = (b) => {
    "eraserSize" in b && t(6, n = b.eraserSize), "visible" in b && t(0, s = b.visible);
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
    u,
    d,
    m
  ];
}
class sp extends Zb {
  constructor(e) {
    super(), Gb(this, e, ip, np, $b, { eraserSize: 6, visible: 0 });
  }
}
function vt(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const Ae = (i, e, t) => Math.min(Math.max(i, e), t);
class Hn {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d, m = "rgb(255, 255, 255)", b = 0.5, g = 25, p = 8, w = 2, h = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (y) => {
      if (this.isDragging) {
        let k = (y.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, C = (y.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = Ae(k, -this._xmin, D - this._xmax), C = Ae(C, -this._ymin, S - this._ymax), this._xmin += k, this._ymin += C, this._xmax += k, this._ymax += C, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (y) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(y.clientX, y.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, C = (C - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (y) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Ae(this._xmin, 0, k - this.minSize), this._ymin = Ae(this._ymin, 0, C - this.minSize), this._xmax = Ae(this._xmax, this.minSize, k), this._ymax = Ae(this._ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > C ? (this._ymin -= this._ymax - C, this._ymax = C) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (y) => {
      if (this.isResizing) {
        const k = y.clientX, C = y.clientY, D = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, S = (C - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, R = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, B = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += D, this._ymin += S, this._xmin = Ae(this._xmin, 0, this._xmax - this.minSize), this._ymin = Ae(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += D, this._ymin += S, this._xmax = Ae(this._xmax, this._xmin + this.minSize, R), this._ymin = Ae(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += D, this._ymax += S, this._xmax = Ae(this._xmax, this._xmin + this.minSize, R), this._ymax = Ae(this._ymax, this._ymin + this.minSize, B);
            break;
          case 3:
            this._xmin += D, this._ymax += S, this._xmin = Ae(this._xmin, 0, this._xmax - this.minSize), this._ymax = Ae(this._ymax, this._ymin + this.minSize, B);
            break;
          case 4:
            this._ymin += S, this._ymin = Ae(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += D, this._xmax = Ae(this._xmax, this._xmin + this.minSize, R);
            break;
          case 6:
            this._ymax += S, this._ymax = Ae(this._ymax, this._ymin + this.minSize, B);
            break;
          case 7:
            this._xmin += D, this._xmin = Ae(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = v, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = p, this.thickness = w, this.selectedThickness = h, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = b, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [n, s] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, s, this.getWidth(), this.getHeight()), e.fillStyle = vt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = vt(this.color, 1), e.stroke(), e.closePath(), t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let r = this.xmin, a = this.ymin - o;
      e.fillStyle = "white", [r, a] = this.toCanvasCoordinates(r, a), e.fillRect(r, a, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, l, o), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
    e.fillStyle = vt(this.color, 1);
    for (const l of this.resizeHandles)
      [n, s] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        n,
        s,
        l.xmax - l.xmin,
        l.ymax - l.ymin
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
const Lr = (i, e, t) => Math.min(Math.max(i, e), t);
class An {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d = "rgb(255, 255, 255)", m = 0.5, b = 25, g = 8, p = 2, w = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (v) => {
      if (this.isDragging) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = v.clientX - k.left, D = v.clientY - k.top, [S, R] = this.toBoxCoordinates(C, D);
          let B = S - this.offsetMouseX, x = R - this.offsetMouseY;
          const q = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, X = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          B = Lr(B, this._radius, q - this._radius), x = Lr(x, this._radius, X - this._radius), this._centerX = B, this._centerY = x, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (v) => {
      if (this.isCreating) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = (v.clientX - k.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, D = (v.clientY - k.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, S = C - this.offsetMouseX, R = D - this.offsetMouseY, B = Math.sqrt(S * S + R * R);
          this._radius = Math.max(B, 5), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (v) => {
      if (this.isResizing) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = v.clientX - k.left, D = v.clientY - k.top, [S, R] = this.toBoxCoordinates(C, D), B = Math.sqrt(
            Math.pow(S - this._centerX, 2) + Math.pow(R - this._centerY, 2)
          );
          this._radius = Math.max(B, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = h, this.label = a, this.isDragging = !1, this.isCreating = !1, this._centerX = c, this._centerY = f, this._radius = u, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = p, this.selectedThickness = w, this.resizingHandleIndex = -1, this.minSize = b, this.color = d, this.alpha = m, this.applyUserScale(), this.updateHandles();
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
    if (e.beginPath(), e.arc(n, s, l, 0, 2 * Math.PI), e.fillStyle = vt(this.color, this.alpha), e.fill(), e.strokeStyle = this.color, e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.stroke(), this.isSelected) {
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
class zn {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, d = 8, m = 2, b = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (p) => {
      if (this.isDragging && this._points.length > 0) {
        let w = (p.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, h = (p.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = Math.max(-this._xmin, Math.min(w, v - this._xmax)), h = Math.max(-this._ymin, Math.min(h, y - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + w,
          y: k.y + h
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (p) => {
      if (this.isCreating) {
        const w = document.querySelector("canvas");
        if (w) {
          const h = w.getBoundingClientRect(), v = (p.clientX - h.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, y = (p.clientY - h.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, k = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(v - k.x, 2) + Math.pow(y - k.y, 2)) > 2 && (this._points.push({ x: v, y }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (p) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, h = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((v) => ({
          x: Math.max(0, Math.min(v.x, w)),
          y: Math.max(0, Math.min(v.y, h))
        })), this.updateBoundingBox(), this.renderCallBack(), console.log("Freehand path coordinates:", this._points), console.log("Number of points:", this._points.length), console.log("Bounding box:", {
          xmin: this._xmin,
          ymin: this._ymin,
          xmax: this._xmax,
          ymax: this._ymax
        });
      }
      this.onFinishCreation();
    }, this.handleResize = (p) => {
      if (this.isResizing && this._points.length > 0) {
        const w = p.clientX, h = p.clientY, v = document.querySelector("canvas");
        if (v) {
          const y = v.getBoundingClientRect(), k = w - y.left, C = h - y.top, D = (k - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (C - this.canvasWindow.offsetY) / this.canvasWindow.scale, R = this.getControlPointIndex(this.resizingHandleIndex);
          if (R >= 0 && R < this._points.length) {
            const B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, q = Math.max(0, Math.min(D, B)), X = Math.max(0, Math.min(S, x));
            this.smoothLocalDeformation(R, q, X), this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = g, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = m, this.selectedThickness = b, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
    if (e.length <= 8)
      return e.map((t, n) => ({ ...t, index: n }));
    {
      const t = [];
      t.push({ ...e[0], index: 0 }), t.push({ ...e[e.length - 1], index: e.length - 1 });
      const n = 6;
      if (e.length > 2) {
        const s = Math.max(1, Math.floor(e.length / n));
        for (let l = s; l < e.length - 1; l += s)
          t.length < 8 && t.push({ ...e[l], index: l });
      }
      return t;
    }
  }
  getControlPointIndex(e) {
    const t = this.getFreehandControlPoints();
    return e < t.length ? t[e].index : -1;
  }
  smoothLocalDeformation(e, t, n) {
    if (e < 0 || e >= this._points.length) return;
    this._points[e] = { x: t, y: n };
    const s = 3, l = 0.3;
    for (let o = 1; o <= s; o++) {
      const r = e - o, a = e + o, c = l * (1 - o / (s + 1));
      if (r >= 0) {
        const f = this._points[r];
        if (Math.sqrt(
          Math.pow(t - f.x, 2) + Math.pow(n - f.y, 2)
        ) > 0) {
          const d = (t - f.x) * c * 0.1, m = (n - f.y) * c * 0.1;
          this._points[r] = {
            x: f.x + d,
            y: f.y + m
          };
        }
      }
      if (a < this._points.length) {
        const f = this._points[a];
        if (Math.sqrt(
          Math.pow(t - f.x, 2) + Math.pow(n - f.y, 2)
        ) > 0) {
          const d = (t - f.x) * c * 0.1, m = (n - f.y) * c * 0.1;
          this._points[a] = {
            x: f.x + d,
            y: f.y + m
          };
        }
      }
    }
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
        e.closePath(), e.fillStyle = vt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = vt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke();
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
      e.fillStyle = vt(this.color, 1);
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
    e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = vt(this.color, 1), e.lineCap = "round", e.lineJoin = "round";
    let n = !1;
    for (let s = 0; s < this.points.length; s++) {
      const [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
      (s < t.length ? t[s] : !0) ? n ? e.lineTo(l, o) : (e.beginPath(), e.moveTo(l, o), n = !0) : n && (e.stroke(), n = !1);
    }
    if (n && e.stroke(), this.alpha > 0) {
      e.fillStyle = vt(this.color, this.alpha);
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
class It {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, d = 8, m = 2, b = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (p) => {
      if (this.isDragging && this._points.length > 0) {
        let w = (p.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, h = (p.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = Math.max(-this._xmin, Math.min(w, v - this._xmax)), h = Math.max(-this._ymin, Math.min(h, y - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + w,
          y: k.y + h
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (p) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (p) => {
      this.isCreating && p.code === "Space" && this._points.length >= this.minPoints && (p.preventDefault(), this.finishCreating());
    }, this.handleResize = (p) => {
      if (this.isResizing && this._points.length > 0) {
        const w = p.clientX, h = p.clientY, v = document.querySelector("canvas");
        if (v) {
          const y = v.getBoundingClientRect(), k = w - y.left, C = h - y.top, D = (k - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (C - this.canvasWindow.offsetY) / this.canvasWindow.scale, R = this.getPolygonVertexIndex(this.resizingHandleIndex);
          if (R >= 0 && R < this._points.length) {
            const B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, q = Math.max(0, Math.min(D, B)), X = Math.max(0, Math.min(S, x));
            this._points[R] = { x: q, y: X }, this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = g, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = m, this.selectedThickness = b, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = vt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = vt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = vt(this.color, 1);
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
        e.fillStyle = vt(this.color, 1);
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
}
class lp {
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
    return e instanceof Hn ? this.eraseFromBox(e, n) : e instanceof An ? this.eraseFromCircle(e, n) : e instanceof zn ? this.eraseFromFreehand(e, n) : e instanceof It ? this.eraseFromPolygon(e, n) : [e];
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
      const f = e[c], u = f.x - t, d = f.y - n;
      if (this.maskCtx.beginPath(), this.maskCtx.arc(u, d, o, 0, 2 * Math.PI), this.maskCtx.fill(), c > 0) {
        const m = e[c - 1], b = m.x - t, g = m.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(b, g), this.maskCtx.lineTo(u, d), this.maskCtx.stroke();
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
    const t = new It(
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
      const c = Math.random() * 2 * Math.PI, f = Math.sqrt(Math.random()) * l, u = n + f * Math.cos(c), d = s + f * Math.sin(c);
      this.isPointErased({ x: u, y: d }, t) && r++;
    }
    return r / o;
  }
  /**
   * Convert circle to polygon for uniform mask-based processing
   */
  circleToPolygon(e) {
    const t = new It(
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
    const t = new It(
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
    const n = new zn(
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
      const u = o > 0 ? f / o : 0, d = {
        x: e.x + (t.x - e.x) * u,
        y: e.y + (t.y - e.y) * u
      }, m = [
        d,
        { x: d.x + r, y: d.y },
        { x: d.x - r, y: d.y },
        { x: d.x, y: d.y + r },
        { x: d.x, y: d.y - r }
      ];
      for (const b of m)
        if (this.isPointErased(b, n)) {
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
        const u = this.findEraserEdge(
          c ? a : r,
          c ? r : a,
          t
        );
        if (u) {
          const d = n[n.length - 1];
          (!d || Math.sqrt(Math.pow(u.x - d.x, 2) + Math.pow(u.y - d.y, 2)) > 2) && n.push(u);
        }
      }
    }
    const s = [];
    for (let o = 0; o < n.length; o++) {
      const r = n[o], a = s[s.length - 1];
      (!a || Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)) > 1.5) && s.push(r);
    }
    if (s.length < 3) return [];
    const l = new It(
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
const Qe = [
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
], Ds = (i, e, t) => Math.min(Math.max(i, e), t);
class op {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Ds(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Ds(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Ds(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Ds(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: ap,
  add_flush_callback: Pr,
  append: T,
  attr: K,
  bind: Ir,
  binding_callbacks: Do,
  bubble: lo,
  check_outros: Si,
  create_component: Ne,
  destroy_component: Ke,
  detach: sn,
  element: ie,
  group_outros: Mi,
  init: rp,
  insert: ln,
  is_function: cp,
  listen: qe,
  mount_component: Ze,
  noop: hf,
  run_all: df,
  safe_not_equal: fp,
  set_style: Xs,
  space: pe,
  toggle_class: Ve,
  transition_in: ce,
  transition_out: we
} = window.__gradio__svelte__internal, { onMount: up, onDestroy: hp, createEventDispatcher: dp } = window.__gradio__svelte__internal;
function Hr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, w, h, v, y, k, C, D, S, R, B, x, q, X, j, V, U, ee, W, F, se, A, L, le, $, I, ke, E, Z, ae, _e, ye, z, Ie, Ye, ge, fe, G, Se, oi, Tt, yt, xt, hn, Y, Wt, xe, tt, ht, Me, Ue, Je, Dn, dn;
  s = new z0({}), f = new Tg({}), p = new F0({}), C = new Kg({}), X = new t2({}), U = new C2({}), L = new ig({});
  let ve = (
    /*showRemoveButton*/
    i[3] && Ar(i)
  ), We = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[20] && Tr(i);
  return _e = new r2({}), fe = new m2({}), xt = new R0({
    props: { selected: (
      /*labelVisibility*/
      i[21]
    ) }
  }), ht = new Z0({}), {
    c() {
      e = ie("span"), t = ie("div"), n = ie("button"), Ne(s.$$.fragment), l = pe(), o = ie("span"), o.textContent = "Box", r = pe(), a = ie("div"), c = ie("button"), Ne(f.$$.fragment), u = pe(), d = ie("span"), d.textContent = "Freehand", m = pe(), b = ie("div"), g = ie("button"), Ne(p.$$.fragment), w = pe(), h = ie("span"), h.textContent = "Circle", v = pe(), y = ie("div"), k = ie("button"), Ne(C.$$.fragment), D = pe(), S = ie("span"), S.textContent = "Polygon", R = pe(), B = ie("div"), x = ie("div"), q = ie("button"), Ne(X.$$.fragment), j = pe(), V = ie("button"), Ne(U.$$.fragment), ee = pe(), W = ie("span"), W.textContent = "Eraser", F = pe(), se = ie("div"), A = ie("button"), Ne(L.$$.fragment), le = pe(), $ = ie("span"), $.textContent = "Move", I = pe(), ve && ve.c(), ke = pe(), We && We.c(), E = pe(), Z = ie("div"), ae = ie("button"), Ne(_e.$$.fragment), ye = pe(), z = ie("span"), z.textContent = "Undo", Ie = pe(), Ye = ie("div"), ge = ie("button"), Ne(fe.$$.fragment), G = pe(), Se = ie("span"), Se.textContent = "Redo", oi = pe(), Tt = ie("div"), yt = ie("button"), Ne(xt.$$.fragment), hn = pe(), Y = ie("span"), Y.textContent = "Labels", Wt = pe(), xe = ie("div"), tt = ie("button"), Ne(ht.$$.fragment), Me = pe(), Ue = ie("span"), Ue.textContent = "Clear", K(n, "class", "icon tool-button svelte-mwe4hy"), K(n, "aria-label", "Create box"), Ve(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), K(o, "class", "tool-label svelte-mwe4hy"), K(t, "class", "tool-group svelte-mwe4hy"), K(c, "class", "icon tool-button svelte-mwe4hy"), K(c, "aria-label", "Freehand drawing"), Ve(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), K(d, "class", "tool-label svelte-mwe4hy"), K(a, "class", "tool-group svelte-mwe4hy"), K(g, "class", "icon tool-button svelte-mwe4hy"), K(g, "aria-label", "Circle drawing"), Ve(
        g,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), K(h, "class", "tool-label svelte-mwe4hy"), K(b, "class", "tool-group svelte-mwe4hy"), K(k, "class", "icon tool-button svelte-mwe4hy"), K(k, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), Ve(
        k,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), K(S, "class", "tool-label svelte-mwe4hy"), K(y, "class", "tool-group svelte-mwe4hy"), K(q, "class", "icon tool-button svelte-mwe4hy"), K(q, "aria-label", "Erase areas from shapes"), Ve(
        q,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), K(V, "class", "icon dropdown-button svelte-mwe4hy"), K(V, "aria-label", "Eraser settings"), K(x, "class", "eraser-buttons svelte-mwe4hy"), K(W, "class", "tool-label svelte-mwe4hy"), K(B, "class", "tool-group eraser-group svelte-mwe4hy"), K(A, "class", "icon tool-button svelte-mwe4hy"), K(A, "aria-label", "Edit boxes"), Ve(
        A,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), K($, "class", "tool-label svelte-mwe4hy"), K(se, "class", "tool-group svelte-mwe4hy"), K(ae, "class", "icon tool-button svelte-mwe4hy"), K(ae, "aria-label", "Undo (Ctrl+Z)"), Ve(
        ae,
        "disabled",
        /*undoStack*/
        i[22].length === 0
      ), K(z, "class", "tool-label svelte-mwe4hy"), K(Z, "class", "tool-group svelte-mwe4hy"), K(ge, "class", "icon tool-button svelte-mwe4hy"), K(ge, "aria-label", "Redo (Ctrl+Y)"), Ve(
        ge,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), K(Se, "class", "tool-label svelte-mwe4hy"), K(Ye, "class", "tool-group svelte-mwe4hy"), K(yt, "class", "icon tool-button svelte-mwe4hy"), K(yt, "aria-label", "Show/Hide labels"), Ve(
        yt,
        "selected",
        /*labelVisibility*/
        i[21]
      ), K(Y, "class", "tool-label svelte-mwe4hy"), K(Tt, "class", "tool-group svelte-mwe4hy"), K(tt, "class", "icon tool-button svelte-mwe4hy"), K(tt, "aria-label", "Clear Shapes"), K(Ue, "class", "tool-label svelte-mwe4hy"), K(xe, "class", "tool-group svelte-mwe4hy"), K(e, "class", "canvas-control svelte-mwe4hy");
    },
    m(J, Oe) {
      ln(J, e, Oe), T(e, t), T(t, n), Ze(s, n, null), T(t, l), T(t, o), T(e, r), T(e, a), T(a, c), Ze(f, c, null), T(a, u), T(a, d), T(e, m), T(e, b), T(b, g), Ze(p, g, null), T(b, w), T(b, h), T(e, v), T(e, y), T(y, k), Ze(C, k, null), T(y, D), T(y, S), T(e, R), T(e, B), T(B, x), T(x, q), Ze(X, q, null), T(x, j), T(x, V), Ze(U, V, null), T(B, ee), T(B, W), T(e, F), T(e, se), T(se, A), Ze(L, A, null), T(se, le), T(se, $), T(e, I), ve && ve.m(e, null), T(e, ke), We && We.m(e, null), T(e, E), T(e, Z), T(Z, ae), Ze(_e, ae, null), T(Z, ye), T(Z, z), T(e, Ie), T(e, Ye), T(Ye, ge), Ze(fe, ge, null), T(Ye, G), T(Ye, Se), T(e, oi), T(e, Tt), T(Tt, yt), Ze(xt, yt, null), T(Tt, hn), T(Tt, Y), T(e, Wt), T(e, xe), T(xe, tt), Ze(ht, tt, null), T(xe, Me), T(xe, Ue), Je = !0, Dn || (dn = [
        qe(
          n,
          "click",
          /*click_handler*/
          i[58]
        ),
        qe(
          c,
          "click",
          /*click_handler_1*/
          i[59]
        ),
        qe(
          g,
          "click",
          /*click_handler_2*/
          i[60]
        ),
        qe(
          k,
          "click",
          /*click_handler_3*/
          i[61]
        ),
        qe(
          q,
          "click",
          /*click_handler_4*/
          i[62]
        ),
        qe(
          V,
          "click",
          /*openEraserSettings*/
          i[30]
        ),
        qe(
          A,
          "click",
          /*click_handler_5*/
          i[63]
        ),
        qe(
          ae,
          "click",
          /*click_handler_8*/
          i[66]
        ),
        qe(
          ge,
          "click",
          /*click_handler_9*/
          i[67]
        ),
        qe(
          yt,
          "click",
          /*click_handler_10*/
          i[68]
        ),
        qe(
          tt,
          "click",
          /*click_handler_11*/
          i[69]
        )
      ], Dn = !0);
    },
    p(J, Oe) {
      (!Je || Oe[0] & /*mode, Mode*/
      4608) && Ve(
        n,
        "selected",
        /*mode*/
        J[12] === /*Mode*/
        J[9].creation
      ), (!Je || Oe[0] & /*mode, Mode*/
      4608) && Ve(
        c,
        "selected",
        /*mode*/
        J[12] === /*Mode*/
        J[9].freehand
      ), (!Je || Oe[0] & /*mode, Mode*/
      4608) && Ve(
        g,
        "selected",
        /*mode*/
        J[12] === /*Mode*/
        J[9].circle
      ), (!Je || Oe[0] & /*mode, Mode*/
      4608) && Ve(
        k,
        "selected",
        /*mode*/
        J[12] === /*Mode*/
        J[9].polygon
      ), (!Je || Oe[0] & /*mode, Mode*/
      4608) && Ve(
        q,
        "selected",
        /*mode*/
        J[12] === /*Mode*/
        J[9].erase
      ), (!Je || Oe[0] & /*mode, Mode*/
      4608) && Ve(
        A,
        "selected",
        /*mode*/
        J[12] === /*Mode*/
        J[9].drag
      ), /*showRemoveButton*/
      J[3] ? ve ? (ve.p(J, Oe), Oe[0] & /*showRemoveButton*/
      8 && ce(ve, 1)) : (ve = Ar(J), ve.c(), ce(ve, 1), ve.m(e, ke)) : ve && (Mi(), we(ve, 1, 1, () => {
        ve = null;
      }), Si()), !/*disableEditBoxes*/
      J[5] && /*labelDetailLock*/
      J[20] ? We ? (We.p(J, Oe), Oe[0] & /*disableEditBoxes, labelDetailLock*/
      1048608 && ce(We, 1)) : (We = Tr(J), We.c(), ce(We, 1), We.m(e, E)) : We && (Mi(), we(We, 1, 1, () => {
        We = null;
      }), Si()), (!Je || Oe[0] & /*redoStack*/
      8192) && Ve(
        ge,
        "disabled",
        /*redoStack*/
        J[13].length === 0
      );
      const ls = {};
      Oe[0] & /*labelVisibility*/
      2097152 && (ls.selected = /*labelVisibility*/
      J[21]), xt.$set(ls), (!Je || Oe[0] & /*labelVisibility*/
      2097152) && Ve(
        yt,
        "selected",
        /*labelVisibility*/
        J[21]
      );
    },
    i(J) {
      Je || (ce(s.$$.fragment, J), ce(f.$$.fragment, J), ce(p.$$.fragment, J), ce(C.$$.fragment, J), ce(X.$$.fragment, J), ce(U.$$.fragment, J), ce(L.$$.fragment, J), ce(ve), ce(We), ce(_e.$$.fragment, J), ce(fe.$$.fragment, J), ce(xt.$$.fragment, J), ce(ht.$$.fragment, J), Je = !0);
    },
    o(J) {
      we(s.$$.fragment, J), we(f.$$.fragment, J), we(p.$$.fragment, J), we(C.$$.fragment, J), we(X.$$.fragment, J), we(U.$$.fragment, J), we(L.$$.fragment, J), we(ve), we(We), we(_e.$$.fragment, J), we(fe.$$.fragment, J), we(xt.$$.fragment, J), we(ht.$$.fragment, J), Je = !1;
    },
    d(J) {
      J && sn(e), Ke(s), Ke(f), Ke(p), Ke(C), Ke(X), Ke(U), Ke(L), ve && ve.d(), We && We.d(), Ke(_e), Ke(fe), Ke(xt), Ke(ht), Dn = !1, df(dn);
    }
  };
}
function Ar(i) {
  let e, t, n, s, l, o, r, a;
  return n = new ug({}), {
    c() {
      e = ie("div"), t = ie("button"), Ne(n.$$.fragment), s = pe(), l = ie("span"), l.textContent = "Delete", K(t, "class", "icon tool-button svelte-mwe4hy"), K(t, "aria-label", "Remove boxes"), K(l, "class", "tool-label svelte-mwe4hy"), K(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      ln(c, e, f), T(e, t), Ze(n, t, null), T(e, s), T(e, l), o = !0, r || (a = qe(
        t,
        "click",
        /*click_handler_6*/
        i[64]
      ), r = !0);
    },
    p: hf,
    i(c) {
      o || (ce(n.$$.fragment, c), o = !0);
    },
    o(c) {
      we(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && sn(e), Ke(n), r = !1, a();
    }
  };
}
function Tr(i) {
  let e, t, n, s, l, o, r, a;
  return n = new pg({}), {
    c() {
      e = ie("div"), t = ie("button"), Ne(n.$$.fragment), s = pe(), l = ie("span"), l.textContent = "Label", K(t, "class", "icon tool-button svelte-mwe4hy"), K(t, "aria-label", "Edit label"), K(l, "class", "tool-label svelte-mwe4hy"), K(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      ln(c, e, f), T(e, t), Ze(n, t, null), T(e, s), T(e, l), o = !0, r || (a = qe(
        t,
        "click",
        /*click_handler_7*/
        i[65]
      ), r = !0);
    },
    p: hf,
    i(c) {
      o || (ce(n.$$.fragment, c), o = !0);
    },
    o(c) {
      we(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && sn(e), Ke(n), r = !1, a();
    }
  };
}
function Fr(i) {
  let e, t;
  return e = new Fo({
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
        i[0].boxes.length ? ni(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[40]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[70]
  ), {
    c() {
      Ne(e.$$.fragment);
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
      n[0].boxes.length ? ni(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : ""), e.$set(l);
    },
    i(n) {
      t || (ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      we(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ke(e, n);
    }
  };
}
function Ur(i) {
  let e, t;
  return e = new Fo({
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
        i[0].boxes.length ? ni(
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
        i[20]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[41]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[71]
  ), {
    c() {
      Ne(e.$$.fragment);
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
      n[0].boxes.length ? ni(
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
      1048576 && (l.labelDetailLock = /*labelDetailLock*/
      n[20]), e.$set(l);
    },
    i(n) {
      t || (ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      we(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ke(e, n);
    }
  };
}
function Or(i) {
  let e, t;
  return e = new Fo({
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
        i[0].boxes.length ? ni(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[20]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[42]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[72]
  ), {
    c() {
      Ne(e.$$.fragment);
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
      n[0].boxes.length ? ni(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      1048576 && (l.labelDetailLock = /*labelDetailLock*/
      n[20]), e.$set(l);
    },
    i(n) {
      t || (ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      we(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ke(e, n);
    }
  };
}
function _p(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b = (
    /*interactive*/
    i[4] && Hr(i)
  ), g = (
    /*editModalVisible*/
    i[15] && Fr(i)
  ), p = (
    /*newModalVisible*/
    i[16] && Ur(i)
  ), w = (
    /*editDefaultLabelVisible*/
    i[17] && Or(i)
  );
  function h(k) {
    i[73](k);
  }
  function v(k) {
    i[74](k);
  }
  let y = {};
  return (
    /*eraserSettingsVisible*/
    i[18] !== void 0 && (y.visible = /*eraserSettingsVisible*/
    i[18]), /*eraserSize*/
    i[19] !== void 0 && (y.eraserSize = /*eraserSize*/
    i[19]), a = new sp({ props: y }), Do.push(() => Ir(a, "visible", h)), Do.push(() => Ir(a, "eraserSize", v)), a.$on(
      "change",
      /*handleEraserSettingsChange*/
      i[31]
    ), a.$on(
      "close",
      /*handleEraserSettingsClose*/
      i[32]
    ), {
      c() {
        e = ie("div"), t = ie("canvas"), n = pe(), b && b.c(), s = pe(), g && g.c(), l = pe(), p && p.c(), o = pe(), w && w.c(), r = pe(), Ne(a.$$.fragment), K(t, "tabindex", "0"), Xs(
          t,
          "height",
          /*height*/
          i[6]
        ), Xs(
          t,
          "width",
          /*width*/
          i[7]
        ), K(t, "class", "canvas-annotator svelte-mwe4hy"), K(e, "class", "canvas-container svelte-mwe4hy"), K(e, "tabindex", "-1");
      },
      m(k, C) {
        ln(k, e, C), T(e, t), i[57](t), ln(k, n, C), b && b.m(k, C), ln(k, s, C), g && g.m(k, C), ln(k, l, C), p && p.m(k, C), ln(k, o, C), w && w.m(k, C), ln(k, r, C), Ze(a, k, C), u = !0, d || (m = [
          qe(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[24]
          ),
          qe(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[25]
          ),
          qe(t, "pointermove", function() {
            cp(
              /*handlesCursor*/
              i[8] ? (
                /*handlePointerMove*/
                i[26]
              ) : null
            ) && /*handlesCursor*/
            (i[8] ? (
              /*handlePointerMove*/
              i[26]
            ) : null).apply(this, arguments);
          }),
          qe(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[39]
          ),
          qe(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[27]
          ),
          qe(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[45]
          ),
          qe(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[46]
          )
        ], d = !0);
      },
      p(k, C) {
        i = k, (!u || C[0] & /*height*/
        64) && Xs(
          t,
          "height",
          /*height*/
          i[6]
        ), (!u || C[0] & /*width*/
        128) && Xs(
          t,
          "width",
          /*width*/
          i[7]
        ), /*interactive*/
        i[4] ? b ? (b.p(i, C), C[0] & /*interactive*/
        16 && ce(b, 1)) : (b = Hr(i), b.c(), ce(b, 1), b.m(s.parentNode, s)) : b && (Mi(), we(b, 1, 1, () => {
          b = null;
        }), Si()), /*editModalVisible*/
        i[15] ? g ? (g.p(i, C), C[0] & /*editModalVisible*/
        32768 && ce(g, 1)) : (g = Fr(i), g.c(), ce(g, 1), g.m(l.parentNode, l)) : g && (Mi(), we(g, 1, 1, () => {
          g = null;
        }), Si()), /*newModalVisible*/
        i[16] ? p ? (p.p(i, C), C[0] & /*newModalVisible*/
        65536 && ce(p, 1)) : (p = Ur(i), p.c(), ce(p, 1), p.m(o.parentNode, o)) : p && (Mi(), we(p, 1, 1, () => {
          p = null;
        }), Si()), /*editDefaultLabelVisible*/
        i[17] ? w ? (w.p(i, C), C[0] & /*editDefaultLabelVisible*/
        131072 && ce(w, 1)) : (w = Or(i), w.c(), ce(w, 1), w.m(r.parentNode, r)) : w && (Mi(), we(w, 1, 1, () => {
          w = null;
        }), Si());
        const D = {};
        !c && C[0] & /*eraserSettingsVisible*/
        262144 && (c = !0, D.visible = /*eraserSettingsVisible*/
        i[18], Pr(() => c = !1)), !f && C[0] & /*eraserSize*/
        524288 && (f = !0, D.eraserSize = /*eraserSize*/
        i[19], Pr(() => f = !1)), a.$set(D);
      },
      i(k) {
        u || (ce(b), ce(g), ce(p), ce(w), ce(a.$$.fragment, k), u = !0);
      },
      o(k) {
        we(b), we(g), we(p), we(w), we(a.$$.fragment, k), u = !1;
      },
      d(k) {
        k && (sn(e), sn(n), sn(s), sn(l), sn(o), sn(r)), i[57](null), b && b.d(k), g && g.d(k), p && p.d(k), w && w.d(k), Ke(a, k), d = !1, df(m);
      }
    }
  );
}
const mp = 50, gp = 3, oo = 3;
function Pn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function ni(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function bp(i, e, t) {
  let n;
  var s;
  (function(_) {
    _[_.creation = 0] = "creation", _[_.drag = 1] = "drag", _[_.freehand = 2] = "freehand", _[_.circle = 3] = "circle", _[_.polygon = 4] = "polygon", _[_.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, f = !1, { imageUrl: u = null } = e, { interactive: d } = e, { boxAlpha: m = 0.5 } = e, { boxMinSize: b = 10 } = e, { handleSize: g } = e, { boxThickness: p } = e, { boxSelectedThickness: w } = e, { value: h } = e, { choices: v = [] } = e, { choicesColors: y = [] } = e, { disableEditBoxes: k = !1 } = e, { height: C = "100%" } = e, { width: D = "100%" } = e, { singleBox: S = !1 } = e, { showRemoveButton: R = null } = e, { handlesCursor: B = !0 } = e, { useDefaultLabel: x = !1 } = e, { shapeCreationMode: q = "drag" } = e;
  R === null && (R = k);
  let X, j, V = null, U = -1, ee = s.drag, W = new op(G), F;
  function se(_) {
    switch (_) {
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
  h !== null && h.boxes.length == 0 ? ee = se(q) : h !== null && h.boxes.length > 0 ? ee = q === "drag" ? s.drag : se(q) : ee = se(q);
  let A = 0, L = 0, le = 0, $ = 0, I = 1, ke = 0, E = 0, Z = !1, ae = !1, _e = !1, ye = !1, z = null, Ie = 10, Ye = x, ge = { label: "", color: "" };
  const fe = dp();
  function G() {
    if (j) {
      if (j.clearRect(0, 0, X.width, X.height), j.save(), j.translate(W.offsetX, W.offsetY), j.scale(W.scale, W.scale), V !== null) {
        switch (h.orientation) {
          case 0:
            j.drawImage(V, 0, 0, ke, E);
            break;
          case 1:
            j.translate(ke, 0), j.rotate(Math.PI / 2), j.drawImage(V, 0, 0, E, ke);
            break;
          case 2:
            j.translate(ke, E), j.rotate(Math.PI), j.drawImage(V, 0, 0, ke, E);
            break;
          case 3:
            j.translate(0, E), j.rotate(-Math.PI / 2), j.drawImage(V, 0, 0, E, ke);
            break;
        }
        j.restore();
      }
      for (const _ of h.boxes.slice().reverse())
        _.render(j, c);
      ee === s.erase && F && F.renderErasePath(j);
    }
  }
  function Se(_) {
    t(14, U = _), h.boxes.forEach((M) => {
      M.setSelected(!1);
    }), _ >= 0 && _ < h.boxes.length && h.boxes[_].setSelected(!0), G();
  }
  function oi(_) {
    d && (a = !1, _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId), ee === s.creation ? ve(_) : ee === s.freehand ? Je(_) : ee === s.circle ? We(_) : ee === s.polygon ? Dn(_) : ee === s.erase ? J(_) : ee === s.drag && Tt(_));
  }
  function Tt(_) {
    console.log("clickBox function called, mode:", ee === s.drag ? "drag" : "creation");
    const M = X.getBoundingClientRect(), P = _.clientX - M.left, H = _.clientY - M.top;
    let O = !1;
    for (const [oe, re] of h.boxes.entries()) {
      const Dt = re.indexOfPointInsideHandle(P, H);
      if (Dt >= 0) {
        O = !0, Se(oe);
        let Yn = null;
        re.onMoveStart = () => {
          Yn = Me(re), console.log("Resize started, captured state:", Yn);
        }, re.onMoveEnd = () => {
          if (Yn) {
            const Go = Me(re);
            console.log("Resize ended, final state:", Go), xe({
              type: "edit_shape",
              shapeIndex: oe,
              oldShapeData: Yn,
              shapeData: Go
            }), Yn = null;
          }
        }, re.startResize(Dt, _);
        return;
      }
    }
    for (const [oe, re] of h.boxes.entries())
      if (re.isPointInsideBox(P, H)) {
        O = !0, Se(oe);
        let Dt = null;
        re.onMoveStart = () => {
          Dt = Me(re);
        }, re.onMoveEnd = () => {
          Dt && (xe({
            type: "edit_shape",
            shapeIndex: oe,
            oldShapeData: Dt,
            shapeData: Me(re)
          }), Dt = null);
        }, re.startDrag(_);
        return;
      }
    if (!O) {
      if (S || Se(-1), console.log("No box selected, checking if we should dispatch select event"), ee === s.drag) {
        console.log("Mode is drag, calculating coordinates");
        const oe = (P - W.offsetX) / I / W.scale, re = (H - W.offsetY) / I / W.scale;
        console.log("Click detected in drag mode:", {
          mouseX: P,
          mouseY: H,
          imageX: oe,
          imageY: re,
          scaleFactor: I,
          "canvasWindow.scale": W.scale,
          "canvasWindow.offsetX": W.offsetX,
          "canvasWindow.offsetY": W.offsetY
        }), V && oe >= 0 && oe <= V.naturalWidth && re >= 0 && re <= V.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(oe), Math.round(re)]), fe("select", {
          coordinates: [Math.round(oe), Math.round(re)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!V,
          imageX: oe,
          imageY: re,
          naturalWidth: V == null ? void 0 : V.naturalWidth,
          naturalHeight: V == null ? void 0 : V.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", ee);
      W.startDrag(_);
    }
  }
  function yt(_) {
    ee === s.erase && F && ls(), fe("change");
  }
  function xt(_) {
    if (h === null)
      return;
    if (ee === s.erase && F) {
      Oe(_);
      return;
    }
    if (ee !== s.drag)
      return;
    const M = X.getBoundingClientRect(), P = _.clientX - M.left, H = _.clientY - M.top;
    for (const [O, oe] of h.boxes.entries()) {
      const re = oe.indexOfPointInsideHandle(P, H);
      if (re >= 0) {
        t(11, X.style.cursor = oe.resizeHandles[re].cursor, X);
        return;
      }
    }
    t(11, X.style.cursor = "default", X);
  }
  function hn(_) {
    if (d) {
      if (_.ctrlKey) {
        switch (_.key.toLowerCase()) {
          case "z":
            _.shiftKey ? ht() : tt(), _.preventDefault();
            break;
          case "y":
            ht(), _.preventDefault();
            break;
        }
        return;
      }
      switch (_.key) {
        case "Delete":
          Xn();
          break;
        case " ":
          ee === s.polygon && z && z.isCreating && (_.preventDefault(), z._points.length >= z.minPoints && z.finishCreating());
          break;
      }
    }
  }
  function Y(_) {
    _.preventDefault();
    const M = 1 / (1 + _.deltaY / 1e3 * 0.5), P = parseFloat((W.scale * M).toFixed(2)), H = P < 1 ? 1 : P, O = X.getBoundingClientRect(), oe = _.clientX - O.left, re = _.clientY - O.top, Dt = (oe - W.offsetX) / W.scale, Yn = (re - W.offsetY) / W.scale;
    W.offsetX = oe - Dt * H, W.offsetY = re - Yn * H, W.scale = H, G();
  }
  function Wt() {
    if (W.scale = 1, V !== null && X) {
      if (W.imageRotatedWidth <= X.width) {
        const _ = (X.width - ke) / 2;
        W.offsetX = _;
      } else
        W.offsetX = 0;
      if (E < X.height) {
        const _ = (X.height - E) / 2;
        W.offsetY = _;
      } else
        W.offsetY = 0;
    } else
      W.offsetX = 0, W.offsetY = 0;
    G();
  }
  function xe(_) {
    if (a) {
      console.log("Skipping undo action during initial state:", _);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, _), { timestamp: Date.now() })), l.length > mp && l.shift(), console.log("Added undo action:", _, "Stack size:", l.length);
  }
  function tt() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let M = r.length - 1; M >= 0; M--) {
        const P = r[M];
        if (P.recoveryCount < oo) {
          h.boxes.map((H) => Me(H)), t(0, h.boxes = [], h);
          for (const H of P.allShapes) {
            const O = Ue(H);
            O && h.boxes.push(O);
          }
          P.recoveryCount++, P.recoveryCount >= oo && (r.splice(M, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${h.boxes.length} shapes from pre-clear history. Recovery ${P.recoveryCount}/${oo}`), Se(-1), G(), fe("change");
          return;
        }
      }
      console.log("Cannot undo: no recoverable pre-clear states available");
      return;
    }
    const _ = l.pop();
    if (_) {
      switch (_.type) {
        case "create_shape":
          if (_.shapeIndex !== void 0 && _.shapeIndex < h.boxes.length) {
            const M = h.boxes.splice(_.shapeIndex, 1)[0];
            o.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: Me(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const M = Ue(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, M), o.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (z && _.pointData) {
            if (z._points.pop(), z._points.length === 0) {
              const M = h.boxes.indexOf(z);
              M >= 0 && h.boxes.splice(M, 1), z = null;
            } else
              z.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: _.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.oldShapeData && _.shapeIndex < h.boxes.length) {
            const M = Me(h.boxes[_.shapeIndex]);
            Ue(_.oldShapeData, h.boxes[_.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: M,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", _);
            const M = h.boxes.map((P) => Me(P));
            t(0, h.boxes = [], h);
            for (const P of _.oldShapeData) {
              const H = Ue(P);
              H && h.boxes.push(H);
            }
            console.log("Restored shapes:", h.boxes.length), o.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: M,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      Se(-1), G(), fe("change");
    }
  }
  function ht() {
    if (o.length === 0) return;
    const _ = o.pop();
    if (_) {
      switch (_.type) {
        case "create_shape":
          if (_.shapeIndex !== void 0 && _.shapeIndex < h.boxes.length) {
            const M = h.boxes.splice(_.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: Me(M),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const M = Ue(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, M), l.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          _.pointData && (z ? (z._points.push(_.pointData), z._points.length === 1 && !h.boxes.includes(z) && (S ? t(0, h.boxes = [z], h) : t(0, h.boxes = [z, ...h.boxes], h)), z.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: _.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.shapeData && _.shapeIndex < h.boxes.length) {
            const M = Me(h.boxes[_.shapeIndex]);
            Ue(_.shapeData, h.boxes[_.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: M,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.shapeData) {
            const M = h.boxes.map((P) => Me(P));
            t(0, h.boxes = [], h);
            for (const P of _.shapeData) {
              const H = Ue(P);
              H && h.boxes.push(H);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: M,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      Se(-1), G(), fe("change");
    }
  }
  function Me(_) {
    return _ ? _ instanceof zn ? {
      type: "freehand",
      points: [..._._points],
      label: _.label,
      color: _.color,
      xmin: _.xmin,
      ymin: _.ymin,
      xmax: _.xmax,
      ymax: _.ymax
    } : _ instanceof It ? {
      type: "polygon",
      points: [..._._points],
      label: _.label,
      color: _.color,
      xmin: _.xmin,
      ymin: _.ymin,
      xmax: _.xmax,
      ymax: _.ymax
    } : _ instanceof An ? {
      type: "circle",
      label: _.label,
      color: _.color,
      centerX: _._centerX,
      centerY: _._centerY,
      radius: _._radius
    } : _ instanceof Hn ? {
      type: "box",
      label: _.label,
      color: _.color,
      xmin: _._xmin,
      ymin: _._ymin,
      xmax: _._xmax,
      ymax: _._ymax
    } : null : null;
  }
  function Ue(_, M) {
    if (!_) return null;
    if (M)
      return M.label = _.label, M.color = _.color, M instanceof Hn ? (M._xmin = _.xmin, M._ymin = _.ymin, M._xmax = _.xmax, M._ymax = _.ymax, M.applyUserScale()) : M instanceof An ? (M._centerX = _.centerX, M._centerY = _.centerY, M._radius = _.radius, M.applyUserScale()) : (M.xmin = _.xmin, M.ymin = _.ymin, M.xmax = _.xmax, M.ymax = _.ymax), (M instanceof zn || M instanceof It) && _.points && (M._points = [..._.points], M.updateBoundingBox()), M;
    switch (_.type) {
      case "freehand":
        const P = new zn(G, Bt, W, A, L, le, $, _.label, _.color, m, b, g, p, w);
        return P._points = [..._.points], P.updateBoundingBox(), P;
      case "polygon":
        const H = new It(G, Bt, W, A, L, le, $, _.label, _.color, m, b, g, p, w);
        return H._points = [..._.points], H.updateBoundingBox(), H;
      case "circle":
        return new An(G, Bt, W, A, L, le, $, _.label, _.centerX, _.centerY, _.radius, _.color, m, b, g, p, w);
      case "box":
        return new Hn(G, Bt, W, A, L, le, $, _.label, _.xmin, _.ymin, _.xmax, _.ymax, _.color, m, b, g, p, w);
    }
    return null;
  }
  function Je(_) {
    const M = X.getBoundingClientRect();
    let P;
    y.length > 0 ? P = Pn(y[0]) : S ? h.boxes.length > 0 ? P = h.boxes[0].color : P = Qe[0] : P = Qe[h.boxes.length % Qe.length];
    let H = new zn(G, Bt, W, A, L, le, $, "", P, m, b, g, p, w);
    H.startCreating(_, M.left, M.top), S ? t(0, h.boxes = [H], h) : t(0, h.boxes = [H, ...h.boxes], h), xe({ type: "create_shape", shapeIndex: 0 }), Se(0), G(), fe("change");
  }
  function Dn(_) {
    z && (!z._points || z._points.length === 0 || !h.boxes.includes(z)) && (console.log("Resetting invalid currentPolygon state"), z = null), z === null ? dn(_) : z.isCreating && (z.addPoint(_) || (G(), fe("change")));
  }
  function dn(_) {
    const M = X.getBoundingClientRect();
    let P;
    y.length > 0 ? P = Pn(y[0]) : S ? h.boxes.length > 0 ? P = h.boxes[0].color : P = Qe[0] : P = Qe[h.boxes.length % Qe.length];
    let H = new It(G, yf, W, A, L, le, $, "", P, m, b, g, p, w);
    H.onPointAdded = (O) => {
      xe({ type: "polygon_point", pointData: O });
    }, z = H, H.startCreating(_, M.left, M.top), S ? t(0, h.boxes = [H], h) : t(0, h.boxes = [H, ...h.boxes], h), xe({ type: "create_shape", shapeIndex: 0 }), Se(0), G(), fe("change");
  }
  function ve(_) {
    const M = X.getBoundingClientRect(), P = (_.clientX - M.left - W.offsetX) / I / W.scale, H = (_.clientY - M.top - W.offsetY) / I / W.scale;
    let O;
    y.length > 0 ? O = Pn(y[0]) : S ? h.boxes.length > 0 ? O = h.boxes[0].color : O = Qe[0] : O = Qe[h.boxes.length % Qe.length];
    let oe = new Hn(G, Bt, W, A, L, le, $, "", P, H, P, H, O, m, b, g, p, w);
    oe.startCreating(_, M.left, M.top), S ? t(0, h.boxes = [oe], h) : t(0, h.boxes = [oe, ...h.boxes], h), xe({ type: "create_shape", shapeIndex: 0 }), Se(0), G(), fe("change");
  }
  function We(_) {
    const M = X.getBoundingClientRect(), P = (_.clientX - M.left - W.offsetX) / W.scale, H = (_.clientY - M.top - W.offsetY) / W.scale;
    let O;
    y.length > 0 ? O = Pn(y[0]) : S ? h.boxes.length > 0 ? O = h.boxes[0].color : O = Qe[0] : O = Qe[h.boxes.length % Qe.length];
    let oe = new An(G, Bt, W, A, L, le, $, "", P, H, 0, O, m, b, g, p, w);
    oe.startCreating(_), S ? t(0, h.boxes = [oe], h) : t(0, h.boxes = [oe, ...h.boxes], h), xe({ type: "create_shape", shapeIndex: 0 }), Se(0), G(), fe("change");
  }
  function J(_) {
    F || (F = new lp(W, I), F.setBrushSize(Ie)), F.setScaleFactor(I);
    const M = X.getBoundingClientRect();
    F.startErase(_, M), G();
  }
  function Oe(_) {
    if (!F) return;
    const M = X.getBoundingClientRect();
    F.continueErase(_, M), G();
  }
  function ls() {
    if (!F) return;
    const _ = F.endErase();
    if (_.length === 0) {
      _n();
      return;
    }
    const M = [...h.boxes], P = [], H = [];
    for (let O = 0; O < h.boxes.length; O++) {
      const oe = h.boxes[O], re = F.eraseFromShape(oe, _);
      if (re.length === 0)
        P.push(O);
      else {
        if (re.length === 1 && re[0] === oe)
          continue;
        P.push(O), H.push(...re);
      }
    }
    if (P.length > 0 || H.length > 0) {
      for (let O = P.length - 1; O >= 0; O--)
        h.boxes.splice(P[O], 1);
      h.boxes.push(...H), xe({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: M.map((O) => Me(O)),
        shapeData: h.boxes.map((O) => Me(O))
      }), Se(-1), fe("change");
    }
    G(), _n();
  }
  function wf() {
    t(18, ye = !0);
  }
  function vf(_) {
    t(19, Ie = _.detail.size), F && F.setBrushSize(Ie);
  }
  function kf() {
    t(18, ye = !1);
  }
  function os() {
    t(12, ee = s.creation), t(11, X.style.cursor = "crosshair", X), z = null;
  }
  function Uo() {
    t(12, ee = s.freehand), t(11, X.style.cursor = "crosshair", X), z = null;
  }
  function Oo() {
    t(12, ee = s.circle), t(11, X.style.cursor = "crosshair", X), z = null;
  }
  function jo() {
    t(12, ee = s.polygon), t(11, X.style.cursor = "crosshair", X);
  }
  function Vo() {
    t(12, ee = s.erase), t(11, X.style.cursor = "crosshair", X), z = null;
  }
  function _n() {
    t(12, ee = s.drag), t(11, X.style.cursor = "default", X), z = null;
  }
  function Bt() {
    U >= 0 && U < h.boxes.length && (h.boxes[U].getArea() < 1 ? Xn() : (k || (Ye ? Ko() : t(16, ae = !0)), S && _n()));
  }
  function yf() {
    z = null, U >= 0 && U < h.boxes.length && (h.boxes[U].getArea() < 1 ? Xn() : (k || (Ye ? Ko() : t(16, ae = !0)), _n()));
  }
  function Cf() {
    U >= 0 && U < h.boxes.length && !k && t(15, Z = !0);
  }
  function Sf(_) {
    if (!d)
      return;
    const M = X.getBoundingClientRect(), P = _.clientX - M.left, H = _.clientY - M.top;
    let O = !1;
    for (const [oe, re] of h.boxes.entries())
      if (re.isPointInsideBox(P, H)) {
        O = !0, Se(oe), Cf();
        break;
      }
    O || Wt();
  }
  function No(_, M) {
    const P = v.findIndex((H) => H[0] === _);
    P === -1 ? (v.push([_, v.length]), y.push(M), t(1, v), t(2, y), console.log(`Added custom label "${_}" with color ${M} to choices`)) : y[P] !== M && (t(2, y[P] = M, y), t(2, y), console.log(`Updated color for existing label "${_}" to ${M}`));
  }
  function Mf(_) {
    t(15, Z = !1);
    const { detail: M } = _;
    let P = M.label, H = M.color, O = M.ret;
    if (U >= 0 && U < h.boxes.length) {
      let oe = h.boxes[U];
      if (O == 1) {
        const re = Me(oe);
        No(P, H), oe.label = P, oe.color = Pn(H);
        const Dt = Me(oe);
        xe({
          type: "edit_shape",
          shapeIndex: U,
          oldShapeData: re,
          shapeData: Dt
        }), G(), fe("change");
      } else O == -1 && Xn();
    }
    setTimeout(
      () => {
        X && (X.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function zf(_) {
    t(16, ae = !1);
    const { detail: M } = _;
    let P = M.label, H = M.color, O = M.ret, oe = M.lock;
    if (U >= 0 && U < h.boxes.length) {
      let re = h.boxes[U];
      O == 1 ? (No(P, H), t(20, Ye = oe), ge.label = P, ge.color = H, re.label = P, re.color = Pn(H), G(), fe("change"), _n()) : Xn();
    }
    setTimeout(
      () => {
        X && (X.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function xf(_) {
    t(17, _e = !1);
    const { detail: M } = _;
    let P = M.label, H = M.color, O = M.ret, oe = M.lock;
    O == 1 && (t(20, Ye = oe), ge.label = P, ge.color = H), setTimeout(
      () => {
        X && (X.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function Ko() {
    if (U >= 0 && U < h.boxes.length) {
      let _ = h.boxes[U];
      _.label = ge.label, ge.color !== "" && (_.color = Pn(ge.color)), G(), fe("change"), _n();
    }
    setTimeout(
      () => {
        X && (X.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function Xn() {
    if (U >= 0 && U < h.boxes.length) {
      const _ = h.boxes[U], M = Me(_);
      xe({
        type: "delete_shape",
        shapeIndex: U,
        shapeData: M
      }), h.boxes.splice(U, 1), Se(-1), S && os(), fe("change");
    }
  }
  function Zo() {
    if (h.boxes.length === 0) return;
    const _ = h.boxes.map((M) => Me(M));
    for (r.push({
      allShapes: _,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > gp; )
      r.shift();
    t(0, h.boxes = [], h), Se(-1), z = null, S && os(), G(), fe("change"), console.log(`Cleared ${_.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function as() {
    if (X) {
      if (I = 1, t(11, X.width = X.clientWidth, X), W.setRotatedImage(V), V !== null) {
        if (W.imageRotatedWidth > X.width)
          I = X.width / W.imageRotatedWidth, ke = Math.round(W.imageRotatedWidth * I), E = Math.round(W.imageRotatedHeight * I), A = 0, L = 0, le = ke, $ = E, t(11, X.height = E, X);
        else {
          ke = W.imageRotatedWidth, E = W.imageRotatedHeight;
          var _ = (X.width - ke) / 2;
          A = _, L = 0, le = _ + ke, $ = E, t(11, X.height = E, X);
        }
        W.imageWidth = ke, W.imageHeight = E;
      } else
        A = 0, L = 0, le = X.width, $ = X.height, t(11, X.height = X.clientHeight, X);
      if (W.resize(X.width, X.height, A, L), le > 0 && $ > 0)
        for (const M of h.boxes)
          M.canvasXmin = A, M.canvasYmin = L, M.canvasXmax = le, M.canvasYmax = $, M.setScaleFactor(I);
      G(), fe("change");
    }
  }
  const Wf = new ResizeObserver(as);
  function Bf() {
    for (let _ = 0; _ < h.boxes.length; _++) {
      let M = h.boxes[_];
      if (!(M instanceof Hn) && !(M instanceof zn) && !(M instanceof It) && !(M instanceof An)) {
        let P = "", H = "";
        if (M.hasOwnProperty("color") ? (P = M.color, Array.isArray(P) && P.length === 3 && (P = `rgb(${P[0]}, ${P[1]}, ${P[2]})`)) : P = Qe[_ % Qe.length], M.hasOwnProperty("label") && (H = M.label), M.hasOwnProperty("type") && M.type === "freehand" && M.hasOwnProperty("points")) {
          let O = new zn(G, Bt, W, A, L, le, $, H, P, m, b, g, p, w);
          O._points = M.points, O.updateBoundingBox(), M = O;
        } else if (M.hasOwnProperty("type") && M.type === "circle" && M.hasOwnProperty("centerX") && M.hasOwnProperty("centerY") && M.hasOwnProperty("radius"))
          M = new An(G, Bt, W, A, L, le, $, H, M.centerX, M.centerY, M.radius, P, m, b, g, p, w);
        else if (M.hasOwnProperty("type") && M.type === "polygon" && M.hasOwnProperty("points")) {
          let O = new It(G, Bt, W, A, L, le, $, H, P, m, b, g, p, w);
          O._points = M.points, O.updateBoundingBox(), M = O;
        } else
          M = new Hn(G, Bt, W, A, L, le, $, H, M.xmin, M.ymin, M.xmax, M.ymax, P, m, b, g, p, w);
        t(0, h.boxes[_] = M, h);
      }
    }
  }
  function Jo() {
    u !== null && (V === null || V.src != u) && (V = new Image(), V.src = u, V.onload = function() {
      as(), G();
    });
  }
  up(() => {
    if (a = !0, Array.isArray(v) && v.length > 0) {
      if (!Array.isArray(y) || y.length == 0)
        for (let _ = 0; _ < v.length; _++) {
          let M = Qe[_ % Qe.length];
          y.push(ni(M));
        }
      ge.label = v[0][0], ge.color = y[0];
    }
    j = X.getContext("2d"), Wf.observe(X), U < 0 && h !== null && h.boxes.length > 0 && Se(0), Jo(), as(), G(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function Df() {
    document.addEventListener("keydown", hn);
  }
  function Xf() {
    document.removeEventListener("keydown", hn);
  }
  hp(() => {
    document.removeEventListener("keydown", hn);
  });
  function Yf(_) {
    Do[_ ? "unshift" : "push"](() => {
      X = _, t(11, X), t(0, h), t(56, f), t(55, q), t(12, ee), t(9, s);
    });
  }
  const Ef = () => os(), Rf = () => Uo(), qf = () => Oo(), Lf = () => jo(), Pf = () => Vo(), If = () => _n(), Hf = () => Xn(), Af = () => t(17, _e = !0), Tf = () => tt(), Ff = () => ht(), Uf = () => {
    t(10, c = !c), G();
  }, Of = () => Zo();
  function jf(_) {
    lo.call(this, i, _);
  }
  function Vf(_) {
    lo.call(this, i, _);
  }
  function Nf(_) {
    lo.call(this, i, _);
  }
  function Kf(_) {
    ye = _, t(18, ye);
  }
  function Zf(_) {
    Ie = _, t(19, Ie);
  }
  return i.$$set = (_) => {
    "imageUrl" in _ && t(47, u = _.imageUrl), "interactive" in _ && t(4, d = _.interactive), "boxAlpha" in _ && t(48, m = _.boxAlpha), "boxMinSize" in _ && t(49, b = _.boxMinSize), "handleSize" in _ && t(50, g = _.handleSize), "boxThickness" in _ && t(51, p = _.boxThickness), "boxSelectedThickness" in _ && t(52, w = _.boxSelectedThickness), "value" in _ && t(0, h = _.value), "choices" in _ && t(1, v = _.choices), "choicesColors" in _ && t(2, y = _.choicesColors), "disableEditBoxes" in _ && t(5, k = _.disableEditBoxes), "height" in _ && t(6, C = _.height), "width" in _ && t(7, D = _.width), "singleBox" in _ && t(53, S = _.singleBox), "showRemoveButton" in _ && t(3, R = _.showRemoveButton), "handlesCursor" in _ && t(8, B = _.handlesCursor), "useDefaultLabel" in _ && t(54, x = _.useDefaultLabel), "shapeCreationMode" in _ && t(55, q = _.shapeCreationMode);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    1024 && t(21, n = c), i.$$.dirty[0] & /*value, canvas, mode, Mode*/
    6657 | i.$$.dirty[1] & /*initialized, shapeCreationMode*/
    50331648 && (h !== null && h.boxes.length === 0 && !f || !f && q) && (t(12, ee = se(q)), t(56, f = !0), X && t(11, X.style.cursor = ee === s.drag ? "default" : "crosshair", X)), i.$$.dirty[0] & /*value*/
    1 && h !== null && h.boxes.length === 0 && t(56, f = !1), i.$$.dirty[0] & /*value*/
    1 && (W.orientation = h.orientation, Jo(), Bf(), as(), G());
  }, [
    h,
    v,
    y,
    R,
    d,
    k,
    C,
    D,
    B,
    s,
    c,
    X,
    ee,
    o,
    U,
    Z,
    ae,
    _e,
    ye,
    Ie,
    Ye,
    n,
    l,
    G,
    oi,
    yt,
    xt,
    Y,
    tt,
    ht,
    wf,
    vf,
    kf,
    os,
    Uo,
    Oo,
    jo,
    Vo,
    _n,
    Sf,
    Mf,
    zf,
    xf,
    Xn,
    Zo,
    Df,
    Xf,
    u,
    m,
    b,
    g,
    p,
    w,
    S,
    x,
    q,
    f,
    Yf,
    Ef,
    Rf,
    qf,
    Lf,
    Pf,
    If,
    Hf,
    Af,
    Tf,
    Ff,
    Uf,
    Of,
    jf,
    Vf,
    Nf,
    Kf,
    Zf
  ];
}
class pp extends ap {
  constructor(e) {
    super(), rp(
      this,
      e,
      bp,
      _p,
      fp,
      {
        imageUrl: 47,
        interactive: 4,
        boxAlpha: 48,
        boxMinSize: 49,
        handleSize: 50,
        boxThickness: 51,
        boxSelectedThickness: 52,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 53,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 54,
        shapeCreationMode: 55
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: wp,
  add_flush_callback: vp,
  bind: kp,
  binding_callbacks: yp,
  create_component: Cp,
  destroy_component: Sp,
  init: Mp,
  mount_component: zp,
  safe_not_equal: xp,
  transition_in: Wp,
  transition_out: Bp
} = window.__gradio__svelte__internal, { createEventDispatcher: Dp } = window.__gradio__svelte__internal;
function Xp(i) {
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
    i[0]), e = new pp({ props: l }), yp.push(() => kp(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[22]
    ), e.$on(
      "select",
      /*select_handler*/
      i[23]
    ), {
      c() {
        Cp(e.$$.fragment);
      },
      m(o, r) {
        zp(e, o, r), n = !0;
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
        o[0], vp(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Wp(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Bp(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Sp(e, o);
      }
    }
  );
}
function Yp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: d } = e, { boxSelectedThickness: m } = e, { value: b } = e, { disableEditBoxes: g } = e, { singleBox: p } = e, { showRemoveButton: w } = e, { handlesCursor: h } = e, { useDefaultLabel: v } = e, { shapeCreationMode: y } = e, k, C;
  const D = Dp();
  function S(x) {
    b = x, t(0, b);
  }
  const R = () => D("change"), B = (x) => D("select", x.detail);
  return i.$$set = (x) => {
    "src" in x && t(19, n = x.src), "interactive" in x && t(1, s = x.interactive), "boxesAlpha" in x && t(2, l = x.boxesAlpha), "labelList" in x && t(3, o = x.labelList), "labelColors" in x && t(4, r = x.labelColors), "boxMinSize" in x && t(5, a = x.boxMinSize), "handleSize" in x && t(6, c = x.handleSize), "boxThickness" in x && t(7, f = x.boxThickness), "height" in x && t(8, u = x.height), "width" in x && t(9, d = x.width), "boxSelectedThickness" in x && t(10, m = x.boxSelectedThickness), "value" in x && t(0, b = x.value), "disableEditBoxes" in x && t(11, g = x.disableEditBoxes), "singleBox" in x && t(12, p = x.singleBox), "showRemoveButton" in x && t(13, w = x.showRemoveButton), "handlesCursor" in x && t(14, h = x.handlesCursor), "useDefaultLabel" in x && t(15, v = x.useDefaultLabel), "shapeCreationMode" in x && t(16, y = x.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    1572864) {
      t(17, k = n), t(20, C = n);
      const x = n;
      Lm(x).then((q) => {
        C === x && t(17, k = q);
      });
    }
  }, [
    b,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    m,
    g,
    p,
    w,
    h,
    v,
    y,
    k,
    D,
    n,
    C,
    S,
    R,
    B
  ];
}
class Ep extends wp {
  constructor(e) {
    super(), Mp(this, e, Yp, Xp, xp, {
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
class jr {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Rp,
  add_flush_callback: $s,
  append: gi,
  attr: Ki,
  bind: el,
  binding_callbacks: ts,
  bubble: Ti,
  check_outros: Tn,
  create_component: an,
  create_slot: qp,
  destroy_component: rn,
  detach: Gn,
  element: $i,
  empty: Lp,
  get_all_dirty_from_scope: Pp,
  get_slot_changes: Ip,
  group_outros: Fn,
  init: Hp,
  insert: Qn,
  mount_component: cn,
  noop: Ap,
  safe_not_equal: Tp,
  space: In,
  toggle_class: Vr,
  transition_in: me,
  transition_out: Be,
  update_slot_base: Fp
} = window.__gradio__svelte__internal, { createEventDispatcher: Up, tick: Op } = window.__gradio__svelte__internal;
function Nr(i) {
  let e, t;
  return e = new Zm({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [jp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      an(e.$$.fragment);
    },
    m(n, s) {
      cn(e, n, s), t = !0;
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
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function jp(i) {
  let e, t;
  return e = new tl({
    props: {
      Icon: Cd,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      an(e.$$.fragment);
    },
    m(n, s) {
      cn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function Kr(i) {
  let e, t;
  return e = new X_({
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
      an(e.$$.fragment);
    },
    m(n, s) {
      cn(e, n, s), t = !0;
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
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function Zr(i) {
  let e, t, n;
  return t = new tl({
    props: { Icon: uc, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[37]
  ), {
    c() {
      e = $i("div"), an(t.$$.fragment);
    },
    m(s, l) {
      Qn(s, e, l), cn(t, e, null), n = !0;
    },
    p: Ap,
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Gn(e), rn(t);
    }
  };
}
function Jr(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = qp(
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
      16777216) && Fp(
        n,
        t,
        s,
        /*$$scope*/
        s[55],
        e ? Ip(
          t,
          /*$$scope*/
          s[55],
          l,
          null
        ) : Pp(
          /*$$scope*/
          s[55]
        ),
        null
      );
    },
    i(s) {
      e || (me(n, s), e = !0);
    },
    o(s) {
      Be(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Vp(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Jr(i)
  );
  return {
    c() {
      n && n.c(), e = Lp();
    },
    m(s, l) {
      n && n.m(s, l), Qn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && me(n, 1)) : (n = Jr(s), n.c(), me(n, 1), n.m(e.parentNode, e)) : n && (Fn(), Be(n, 1, 1, () => {
        n = null;
      }), Tn());
    },
    i(s) {
      t || (me(n), t = !0);
    },
    o(s) {
      Be(n), t = !1;
    },
    d(s) {
      s && Gn(e), n && n.d(s);
    }
  };
}
function Gr(i) {
  let e, t;
  return e = new w0({
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
      an(e.$$.fragment);
    },
    m(n, s) {
      cn(e, n, s), t = !0;
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
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function Qr(i) {
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
    i[1]), t = new Ep({ props: o }), ts.push(() => el(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), {
      c() {
        e = $i("div"), an(t.$$.fragment), Ki(e, "class", "image-frame svelte-1gjdske"), Vr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Qn(r, e, a), cn(t, e, null), s = !0;
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
        r[1], $s(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Vr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (me(t.$$.fragment, r), s = !0);
      },
      o(r) {
        Be(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Gn(e), rn(t);
      }
    }
  );
}
function $r(i) {
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
    i[0]), e = new N_({ props: l }), ts.push(() => el(e, "active_source", s)), {
      c() {
        an(e.$$.fragment);
      },
      m(o, r) {
        cn(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], $s(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (me(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Be(e.$$.fragment, o), n = !1;
      },
      d(o) {
        rn(e, o);
      }
    }
  );
}
function Np(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), p;
  e = new ch({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: hc,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Nr(i)
  ), h = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Kr(i)
  ), v = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Zr(i)
  );
  function y(B) {
    i[43](B);
  }
  function k(B) {
    i[44](B);
  }
  let C = {
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
    $$slots: { default: [Vp] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (C.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (C.dragging = /*dragging*/
  i[31]), c = new W1({ props: C }), i[42](c), ts.push(() => el(c, "uploading", y)), ts.push(() => el(c, "dragging", k)), c.$on(
    "load",
    /*handle_upload*/
    i[33]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let D = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Gr(i)
  ), S = (
    /*value*/
    i[1] !== null && Qr(i)
  ), R = g && $r(i);
  return {
    c() {
      an(e.$$.fragment), t = In(), n = $i("div"), w && w.c(), s = In(), h && h.c(), l = In(), v && v.c(), o = In(), r = $i("div"), a = $i("div"), an(c.$$.fragment), d = In(), D && D.c(), m = In(), S && S.c(), b = In(), R && R.c(), Ki(n, "class", "icon-buttons svelte-1gjdske"), Ki(a, "class", "upload-container svelte-1gjdske"), Ki(r, "data-testid", "image"), Ki(r, "class", "image-container svelte-1gjdske");
    },
    m(B, x) {
      cn(e, B, x), Qn(B, t, x), Qn(B, n, x), w && w.m(n, null), gi(n, s), h && h.m(n, null), gi(n, l), v && v.m(n, null), Qn(B, o, x), Qn(B, r, x), gi(r, a), cn(c, a, null), gi(a, d), D && D.m(a, null), gi(a, m), S && S.m(a, null), gi(r, b), R && R.m(r, null), p = !0;
    },
    p(B, x) {
      const q = {};
      x[0] & /*show_label*/
      8 && (q.show_label = /*show_label*/
      B[3]), x[0] & /*label*/
      4 && (q.label = /*label*/
      B[2] || "Image Annotator"), e.$set(q), /*showDownloadButton*/
      B[10] && /*value*/
      B[1] !== null ? w ? (w.p(B, x), x[0] & /*showDownloadButton, value*/
      1026 && me(w, 1)) : (w = Nr(B), w.c(), me(w, 1), w.m(n, s)) : w && (Fn(), Be(w, 1, 1, () => {
        w = null;
      }), Tn()), /*showShareButton*/
      B[9] && /*value*/
      B[1] !== null ? h ? (h.p(B, x), x[0] & /*showShareButton, value*/
      514 && me(h, 1)) : (h = Kr(B), h.c(), me(h, 1), h.m(n, l)) : h && (Fn(), Be(h, 1, 1, () => {
        h = null;
      }), Tn()), /*showClearButton*/
      B[11] && /*value*/
      B[1] !== null && /*interactive*/
      B[7] ? v ? (v.p(B, x), x[0] & /*showClearButton, value, interactive*/
      2178 && me(v, 1)) : (v = Zr(B), v.c(), me(v, 1), v.m(n, null)) : v && (Fn(), Be(v, 1, 1, () => {
        v = null;
      }), Tn());
      const X = {};
      x[0] & /*value, active_source*/
      3 && (X.hidden = /*value*/
      B[1] !== null || /*active_source*/
      B[0] === "webcam"), x[0] & /*active_source*/
      1 && (X.filetype = /*active_source*/
      B[0] === "clipboard" ? "clipboard" : "image/*"), x[0] & /*root*/
      64 && (X.root = /*root*/
      B[6]), x[0] & /*max_file_size*/
      33554432 && (X.max_file_size = /*max_file_size*/
      B[25]), x[0] & /*sources*/
      16 && (X.disable_click = !/*sources*/
      B[4].includes("upload")), x[0] & /*cli_upload*/
      67108864 && (X.upload = /*cli_upload*/
      B[26]), x[0] & /*stream_handler*/
      134217728 && (X.stream_handler = /*stream_handler*/
      B[27]), x[0] & /*value*/
      2 | x[1] & /*$$scope*/
      16777216 && (X.$$scope = { dirty: x, ctx: B }), !f && x[0] & /*uploading*/
      1073741824 && (f = !0, X.uploading = /*uploading*/
      B[30], $s(() => f = !1)), !u && x[1] & /*dragging*/
      1 && (u = !0, X.dragging = /*dragging*/
      B[31], $s(() => u = !1)), c.$set(X), /*value*/
      B[1] === null && /*active_source*/
      B[0] === "webcam" ? D ? (D.p(B, x), x[0] & /*value, active_source*/
      3 && me(D, 1)) : (D = Gr(B), D.c(), me(D, 1), D.m(a, m)) : D && (Fn(), Be(D, 1, 1, () => {
        D = null;
      }), Tn()), /*value*/
      B[1] !== null ? S ? (S.p(B, x), x[0] & /*value*/
      2 && me(S, 1)) : (S = Qr(B), S.c(), me(S, 1), S.m(a, null)) : S && (Fn(), Be(S, 1, 1, () => {
        S = null;
      }), Tn()), x[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (B[4].length > 1 || /*sources*/
      B[4].includes("clipboard")) && /*value*/
      B[1] === null && /*interactive*/
      B[7]), g ? R ? (R.p(B, x), x[0] & /*sources, value, interactive*/
      146 && me(R, 1)) : (R = $r(B), R.c(), me(R, 1), R.m(r, null)) : R && (Fn(), Be(R, 1, 1, () => {
        R = null;
      }), Tn());
    },
    i(B) {
      p || (me(e.$$.fragment, B), me(w), me(h), me(v), me(c.$$.fragment, B), me(D), me(S), me(R), p = !0);
    },
    o(B) {
      Be(e.$$.fragment, B), Be(w), Be(h), Be(v), Be(c.$$.fragment, B), Be(D), Be(S), Be(R), p = !1;
    },
    d(B) {
      B && (Gn(t), Gn(n), Gn(o), Gn(r)), rn(e, B), w && w.d(), h && h.d(), v && v.d(), i[42](null), rn(c), D && D.d(), S && S.d(), R && R.d();
    }
  };
}
function Kp(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(Y, Wt, xe, tt) {
    function ht(Me) {
      return Me instanceof xe ? Me : new xe(function(Ue) {
        Ue(Me);
      });
    }
    return new (xe || (xe = Promise))(function(Me, Ue) {
      function Je(ve) {
        try {
          dn(tt.next(ve));
        } catch (We) {
          Ue(We);
        }
      }
      function Dn(ve) {
        try {
          dn(tt.throw(ve));
        } catch (We) {
          Ue(We);
        }
      }
      function dn(ve) {
        ve.done ? Me(ve.value) : ht(ve.value).then(Je, Dn);
      }
      dn((tt = tt.apply(Y, Wt || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: m } = e, { showShareButton: b } = e, { showDownloadButton: g } = e, { showClearButton: p } = e, { boxesAlpha: w } = e, { labelList: h } = e, { labelColors: v } = e, { boxMinSize: y } = e, { handleSize: k } = e, { height: C } = e, { width: D } = e, { boxThickness: S } = e, { disableEditBoxes: R } = e, { singleBox: B } = e, { showRemoveButton: x } = e, { handlesCursor: q } = e, { boxSelectedThickness: X } = e, { max_file_size: j = null } = e, { cli_upload: V } = e, { stream_handler: U } = e, { useDefaultLabel: ee } = e, { shapeCreationMode: W } = e, F, se = !1, { active_source: A = null } = e;
  function L({ detail: Y }) {
    t(1, o = new jr()), t(1, o.image = Y, o), $("upload");
  }
  function le(Y) {
    return l(this, void 0, void 0, function* () {
      const Wt = yield F.load_files([new File([Y], "webcam.png")]), xe = (Wt == null ? void 0 : Wt[0]) || null;
      xe ? (t(1, o = new jr()), t(1, o.image = xe, o)) : t(1, o = null), yield Op(), $("change");
    });
  }
  const $ = Up();
  let I = !1;
  function ke(Y) {
    return l(this, void 0, void 0, function* () {
      switch (Y) {
        case "clipboard":
          F.paste_clipboard();
          break;
      }
    });
  }
  function E() {
    t(1, o = null), $("clear"), $("change");
  }
  const Z = async (Y) => Y === null ? "" : `<img src="${await p_(Y.image)}" />`;
  function ae(Y) {
    Ti.call(this, i, Y);
  }
  function _e(Y) {
    Ti.call(this, i, Y);
  }
  function ye(Y) {
    ts[Y ? "unshift" : "push"](() => {
      F = Y, t(32, F);
    });
  }
  function z(Y) {
    se = Y, t(30, se);
  }
  function Ie(Y) {
    I = Y, t(31, I);
  }
  function Ye(Y) {
    Ti.call(this, i, Y);
  }
  const ge = (Y) => le(Y.detail), fe = (Y) => le(Y.detail);
  function G(Y) {
    Ti.call(this, i, Y);
  }
  function Se(Y) {
    Ti.call(this, i, Y);
  }
  const oi = (Y) => le(Y.detail);
  function Tt(Y) {
    o = Y, t(1, o);
  }
  const yt = () => $("change"), xt = (Y) => $("select", { index: null, value: Y.detail.coordinates });
  function hn(Y) {
    A = Y, t(0, A), t(4, c);
  }
  return i.$$set = (Y) => {
    "value" in Y && t(1, o = Y.value), "label" in Y && t(2, r = Y.label), "show_label" in Y && t(3, a = Y.show_label), "sources" in Y && t(4, c = Y.sources), "selectable" in Y && t(5, f = Y.selectable), "root" in Y && t(6, u = Y.root), "interactive" in Y && t(7, d = Y.interactive), "i18n" in Y && t(8, m = Y.i18n), "showShareButton" in Y && t(9, b = Y.showShareButton), "showDownloadButton" in Y && t(10, g = Y.showDownloadButton), "showClearButton" in Y && t(11, p = Y.showClearButton), "boxesAlpha" in Y && t(12, w = Y.boxesAlpha), "labelList" in Y && t(13, h = Y.labelList), "labelColors" in Y && t(14, v = Y.labelColors), "boxMinSize" in Y && t(15, y = Y.boxMinSize), "handleSize" in Y && t(16, k = Y.handleSize), "height" in Y && t(17, C = Y.height), "width" in Y && t(18, D = Y.width), "boxThickness" in Y && t(19, S = Y.boxThickness), "disableEditBoxes" in Y && t(20, R = Y.disableEditBoxes), "singleBox" in Y && t(21, B = Y.singleBox), "showRemoveButton" in Y && t(22, x = Y.showRemoveButton), "handlesCursor" in Y && t(23, q = Y.handlesCursor), "boxSelectedThickness" in Y && t(24, X = Y.boxSelectedThickness), "max_file_size" in Y && t(25, j = Y.max_file_size), "cli_upload" in Y && t(26, V = Y.cli_upload), "stream_handler" in Y && t(27, U = Y.stream_handler), "useDefaultLabel" in Y && t(28, ee = Y.useDefaultLabel), "shapeCreationMode" in Y && t(29, W = Y.shapeCreationMode), "active_source" in Y && t(0, A = Y.active_source), "$$scope" in Y && t(55, s = Y.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    1073741824 && se && E(), i.$$.dirty[1] & /*dragging*/
    1 && $("drag", I), i.$$.dirty[0] & /*active_source, sources*/
    17 && !A && c && t(0, A = c[0]);
  }, [
    A,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    m,
    b,
    g,
    p,
    w,
    h,
    v,
    y,
    k,
    C,
    D,
    S,
    R,
    B,
    x,
    q,
    X,
    j,
    V,
    U,
    ee,
    W,
    se,
    I,
    F,
    L,
    le,
    $,
    ke,
    E,
    n,
    Z,
    ae,
    _e,
    ye,
    z,
    Ie,
    Ye,
    ge,
    fe,
    G,
    Se,
    oi,
    Tt,
    yt,
    xt,
    hn,
    s
  ];
}
class Zp extends Rp {
  constructor(e) {
    super(), Hp(
      this,
      e,
      Kp,
      Np,
      Tp,
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
  SvelteComponent: Jp,
  attr: Hs,
  detach: _f,
  element: mf,
  init: Gp,
  insert: gf,
  noop: ec,
  safe_not_equal: Qp,
  src_url_equal: tc,
  toggle_class: Cn
} = window.__gradio__svelte__internal;
function nc(i) {
  let e, t;
  return {
    c() {
      e = mf("img"), tc(e.src, t = /*value*/
      i[0].url) || Hs(e, "src", t), Hs(e, "alt", "");
    },
    m(n, s) {
      gf(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !tc(e.src, t = /*value*/
      n[0].url) && Hs(e, "src", t);
    },
    d(n) {
      n && _f(e);
    }
  };
}
function $p(i) {
  let e, t = (
    /*value*/
    i[0] && nc(i)
  );
  return {
    c() {
      e = mf("div"), t && t.c(), Hs(e, "class", "container svelte-1sgcyba"), Cn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Cn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Cn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Cn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      gf(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = nc(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && Cn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && Cn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && Cn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && Cn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: ec,
    o: ec,
    d(n) {
      n && _f(e), t && t.d();
    }
  };
}
function ew(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class Ww extends Jp {
  constructor(e) {
    super(), Gp(this, e, ew, $p, Qp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: tw,
  add_flush_callback: ic,
  assign: nw,
  bind: sc,
  binding_callbacks: lc,
  check_outros: iw,
  create_component: ii,
  destroy_component: si,
  detach: bf,
  empty: sw,
  flush: de,
  get_spread_object: lw,
  get_spread_update: ow,
  group_outros: aw,
  init: rw,
  insert: pf,
  mount_component: li,
  safe_not_equal: cw,
  space: fw,
  transition_in: fn,
  transition_out: un
} = window.__gradio__svelte__internal;
function uw(i) {
  let e, t;
  return e = new Ah({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [_w] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      16384 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      un(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function hw(i) {
  let e, t;
  return e = new wc({
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
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      un(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function dw(i) {
  let e, t;
  return e = new wc({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      un(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function _w(i) {
  let e, t;
  return e = new hc({}), {
    c() {
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
    },
    i(n) {
      t || (fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      un(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function mw(i) {
  let e, t, n, s;
  const l = [dw, hw, uw], o = [];
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
      t.c(), n = sw();
    },
    m(a, c) {
      o[e].m(a, c), pf(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (aw(), un(o[f], 1, 1, () => {
        o[f] = null;
      }), iw(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), fn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (fn(t), s = !0);
    },
    o(a) {
      un(t), s = !1;
    },
    d(a) {
      a && bf(n), o[e].d(a);
    }
  };
}
function gw(i) {
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
    a = nw(a, r[d]);
  e = new Ym({ props: a });
  function c(d) {
    i[35](d);
  }
  function f(d) {
    i[36](d);
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
    $$slots: { default: [mw] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Zp({ props: u }), lc.push(() => sc(n, "active_source", c)), lc.push(() => sc(n, "value", f)), n.$on(
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
        ii(e.$$.fragment), t = fw(), ii(n.$$.fragment);
      },
      m(d, m) {
        li(e, d, m), pf(d, t, m), li(n, d, m), o = !0;
      },
      p(d, m) {
        const b = m[0] & /*loading_status*/
        2 | m[1] & /*gradio*/
        2 ? ow(r, [
          m[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              d[32].autoscroll
            )
          },
          m[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            d[32].i18n
          ) },
          m[0] & /*loading_status*/
          2 && lw(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(b);
        const g = {};
        m[0] & /*_selectable*/
        1024 && (g.selectable = /*_selectable*/
        d[10]), m[0] & /*root*/
        128 && (g.root = /*root*/
        d[7]), m[0] & /*sources*/
        16384 && (g.sources = /*sources*/
        d[14]), m[0] & /*interactive*/
        262144 && (g.interactive = /*interactive*/
        d[18]), m[0] & /*show_download_button*/
        32768 && (g.showDownloadButton = /*show_download_button*/
        d[15]), m[0] & /*show_share_button*/
        65536 && (g.showShareButton = /*show_share_button*/
        d[16]), m[0] & /*show_clear_button*/
        131072 && (g.showClearButton = /*show_clear_button*/
        d[17]), m[1] & /*gradio*/
        2 && (g.i18n = /*gradio*/
        d[32].i18n), m[0] & /*boxes_alpha*/
        524288 && (g.boxesAlpha = /*boxes_alpha*/
        d[19]), m[0] & /*height*/
        256 && (g.height = /*height*/
        d[8]), m[0] & /*width*/
        512 && (g.width = /*width*/
        d[9]), m[0] & /*label_list*/
        1048576 && (g.labelList = /*label_list*/
        d[20]), m[0] & /*label_colors*/
        2097152 && (g.labelColors = /*label_colors*/
        d[21]), m[0] & /*box_min_size*/
        4194304 && (g.boxMinSize = /*box_min_size*/
        d[22]), m[0] & /*label*/
        32 && (g.label = /*label*/
        d[5]), m[0] & /*show_label*/
        64 && (g.show_label = /*show_label*/
        d[6]), m[1] & /*gradio*/
        2 && (g.max_file_size = /*gradio*/
        d[32].max_file_size), m[1] & /*gradio*/
        2 && (g.cli_upload = /*gradio*/
        d[32].client.upload), m[1] & /*gradio*/
        2 && (g.stream_handler = /*gradio*/
        d[32].client.stream), m[0] & /*handle_size*/
        8388608 && (g.handleSize = /*handle_size*/
        d[23]), m[0] & /*box_thickness*/
        16777216 && (g.boxThickness = /*box_thickness*/
        d[24]), m[0] & /*box_selected_thickness*/
        33554432 && (g.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), m[0] & /*disable_edit_boxes*/
        67108864 && (g.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), m[0] & /*single_box*/
        134217728 && (g.singleBox = /*single_box*/
        d[27]), m[0] & /*show_remove_button*/
        268435456 && (g.showRemoveButton = /*show_remove_button*/
        d[28]), m[0] & /*handles_cursor*/
        536870912 && (g.handlesCursor = /*handles_cursor*/
        d[29]), m[0] & /*use_default_label*/
        1073741824 && (g.useDefaultLabel = /*use_default_label*/
        d[30]), m[1] & /*shape_creation_mode*/
        1 && (g.shapeCreationMode = /*shape_creation_mode*/
        d[31]), m[1] & /*$$scope, gradio, active_source*/
        16394 && (g.$$scope = { dirty: m, ctx: d }), !s && m[1] & /*active_source*/
        8 && (s = !0, g.active_source = /*active_source*/
        d[34], ic(() => s = !1)), !l && m[0] & /*value*/
        1 && (l = !0, g.value = /*value*/
        d[0], ic(() => l = !1)), n.$set(g);
      },
      i(d) {
        o || (fn(e.$$.fragment, d), fn(n.$$.fragment, d), o = !0);
      },
      o(d) {
        un(e.$$.fragment, d), un(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && bf(t), si(e, d), si(n, d);
      }
    }
  );
}
function bw(i) {
  let e, t;
  return e = new uu({
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
      $$slots: { default: [gw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
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
      t || (fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      un(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function pw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: m = !0 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e, { loading_status: p } = e, { sources: w = ["upload", "webcam", "clipboard"] } = e, { show_download_button: h } = e, { show_share_button: v } = e, { show_clear_button: y } = e, { interactive: k } = e, { boxes_alpha: C } = e, { label_list: D } = e, { label_colors: S } = e, { box_min_size: R } = e, { handle_size: B } = e, { box_thickness: x } = e, { box_selected_thickness: q } = e, { disable_edit_boxes: X } = e, { single_box: j } = e, { show_remove_button: V } = e, { handles_cursor: U } = e, { use_default_label: ee } = e, { shape_creation_mode: W } = e, { gradio: F } = e, se, A = null;
  function L(z) {
    A = z, t(34, A);
  }
  function le(z) {
    o = z, t(0, o);
  }
  const $ = () => F.dispatch("change"), I = () => F.dispatch("edit"), ke = () => {
    F.dispatch("clear");
  }, E = ({ detail: z }) => t(33, se = z), Z = () => F.dispatch("upload"), ae = ({ detail: z }) => F.dispatch("select", z), _e = ({ detail: z }) => F.dispatch("share", z), ye = ({ detail: z }) => {
    t(1, p = p || {}), t(1, p.status = "error", p), F.dispatch("error", z);
  };
  return i.$$set = (z) => {
    "elem_id" in z && t(2, n = z.elem_id), "elem_classes" in z && t(3, s = z.elem_classes), "visible" in z && t(4, l = z.visible), "value" in z && t(0, o = z.value), "label" in z && t(5, r = z.label), "show_label" in z && t(6, a = z.show_label), "root" in z && t(7, c = z.root), "height" in z && t(8, f = z.height), "width" in z && t(9, u = z.width), "_selectable" in z && t(10, d = z._selectable), "container" in z && t(11, m = z.container), "scale" in z && t(12, b = z.scale), "min_width" in z && t(13, g = z.min_width), "loading_status" in z && t(1, p = z.loading_status), "sources" in z && t(14, w = z.sources), "show_download_button" in z && t(15, h = z.show_download_button), "show_share_button" in z && t(16, v = z.show_share_button), "show_clear_button" in z && t(17, y = z.show_clear_button), "interactive" in z && t(18, k = z.interactive), "boxes_alpha" in z && t(19, C = z.boxes_alpha), "label_list" in z && t(20, D = z.label_list), "label_colors" in z && t(21, S = z.label_colors), "box_min_size" in z && t(22, R = z.box_min_size), "handle_size" in z && t(23, B = z.handle_size), "box_thickness" in z && t(24, x = z.box_thickness), "box_selected_thickness" in z && t(25, q = z.box_selected_thickness), "disable_edit_boxes" in z && t(26, X = z.disable_edit_boxes), "single_box" in z && t(27, j = z.single_box), "show_remove_button" in z && t(28, V = z.show_remove_button), "handles_cursor" in z && t(29, U = z.handles_cursor), "use_default_label" in z && t(30, ee = z.use_default_label), "shape_creation_mode" in z && t(31, W = z.shape_creation_mode), "gradio" in z && t(32, F = z.gradio);
  }, [
    o,
    p,
    n,
    s,
    l,
    r,
    a,
    c,
    f,
    u,
    d,
    m,
    b,
    g,
    w,
    h,
    v,
    y,
    k,
    C,
    D,
    S,
    R,
    B,
    x,
    q,
    X,
    j,
    V,
    U,
    ee,
    W,
    F,
    se,
    A,
    L,
    le,
    $,
    I,
    ke,
    E,
    Z,
    ae,
    _e,
    ye
  ];
}
class Bw extends tw {
  constructor(e) {
    super(), rw(
      this,
      e,
      pw,
      bw,
      cw,
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
    this.$$set({ elem_id: e }), de();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), de();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), de();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), de();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), de();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), de();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), de();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), de();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), de();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), de();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), de();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), de();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), de();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), de();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), de();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), de();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), de();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), de();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), de();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), de();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), de();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), de();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), de();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), de();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), de();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), de();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), de();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), de();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), de();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), de();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), de();
  }
  get shape_creation_mode() {
    return this.$$.ctx[31];
  }
  set shape_creation_mode(e) {
    this.$$set({ shape_creation_mode: e }), de();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), de();
  }
}
export {
  Ww as BaseExample,
  Bw as default
};
