const {
  SvelteComponent: Zf,
  assign: Jf,
  create_slot: Gf,
  detach: Qf,
  element: $f,
  get_all_dirty_from_scope: eh,
  get_slot_changes: th,
  get_spread_update: nh,
  init: ih,
  insert: sh,
  safe_not_equal: lh,
  set_dynamic_element_data: Qo,
  set_style: dt,
  toggle_class: Ft,
  transition_in: oc,
  transition_out: ac,
  update_slot_base: oh
} = window.__gradio__svelte__internal;
function ah(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Gf(
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
    r = Jf(r, o[a]);
  return {
    c() {
      e = $f(
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
      sh(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && oh(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? th(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : eh(
          /*$$scope*/
          a[17]
        ),
        null
      ), Qo(
        /*tag*/
        a[14]
      )(e, r = nh(o, [
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
      a && Qf(e), l && l.d(a);
    }
  };
}
function rh(i) {
  let e, t = (
    /*tag*/
    i[14] && ah(i)
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
function ch(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: b = !1 } = e, { container: g = !0 } = e, { visible: p = !0 } = e, { allow_overflow: h = !0 } = e, { scale: v = null } = e, { min_width: w = 0 } = e, y = d === "fieldset" ? "fieldset" : "div";
  const k = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return i.$$set = (C) => {
    "height" in C && t(0, l = C.height), "width" in C && t(1, o = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, c = C.variant), "border_mode" in C && t(5, f = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, d = C.type), "test_id" in C && t(7, m = C.test_id), "explicit_call" in C && t(8, b = C.explicit_call), "container" in C && t(9, g = C.container), "visible" in C && t(10, p = C.visible), "allow_overflow" in C && t(11, h = C.allow_overflow), "scale" in C && t(12, v = C.scale), "min_width" in C && t(13, w = C.min_width), "$$scope" in C && t(17, s = C.$$scope);
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
    h,
    v,
    w,
    y,
    k,
    d,
    s,
    n
  ];
}
class fh extends Zf {
  constructor(e) {
    super(), ih(this, e, ch, rh, lh, {
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
  SvelteComponent: hh,
  attr: uh,
  create_slot: dh,
  detach: _h,
  element: mh,
  get_all_dirty_from_scope: gh,
  get_slot_changes: bh,
  init: ph,
  insert: wh,
  safe_not_equal: vh,
  transition_in: kh,
  transition_out: yh,
  update_slot_base: Ch
} = window.__gradio__svelte__internal;
function xh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = dh(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = mh("div"), s && s.c(), uh(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      wh(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && Ch(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? bh(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : gh(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (kh(s, l), t = !0);
    },
    o(l) {
      yh(s, l), t = !1;
    },
    d(l) {
      l && _h(e), s && s.d(l);
    }
  };
}
function Sh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class zh extends hh {
  constructor(e) {
    super(), ph(this, e, Sh, xh, vh, {});
  }
}
const {
  SvelteComponent: Mh,
  attr: $o,
  check_outros: Bh,
  create_component: Wh,
  create_slot: Dh,
  destroy_component: Xh,
  detach: Ys,
  element: Yh,
  empty: Eh,
  get_all_dirty_from_scope: Rh,
  get_slot_changes: qh,
  group_outros: Lh,
  init: Hh,
  insert: Es,
  mount_component: Ih,
  safe_not_equal: Ph,
  set_data: Ah,
  space: Th,
  text: Fh,
  toggle_class: ai,
  transition_in: Fi,
  transition_out: Rs,
  update_slot_base: Uh
} = window.__gradio__svelte__internal;
function ea(i) {
  let e, t;
  return e = new zh({
    props: {
      $$slots: { default: [Oh] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Wh(e.$$.fragment);
    },
    m(n, s) {
      Ih(e, n, s), t = !0;
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
      Xh(e, n);
    }
  };
}
function Oh(i) {
  let e;
  return {
    c() {
      e = Fh(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Es(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Ah(
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
function jh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Dh(
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
      e = Yh("span"), o && o.c(), t = Th(), r && r.c(), n = Eh(), $o(e, "data-testid", "block-info"), $o(e, "class", "svelte-22c38v"), ai(e, "sr-only", !/*show_label*/
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
      8) && Uh(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? qh(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : Rh(
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
      2 && Fi(r, 1)) : (r = ea(a), r.c(), Fi(r, 1), r.m(n.parentNode, n)) : r && (Lh(), Rs(r, 1, 1, () => {
        r = null;
      }), Bh());
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
function Nh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class rc extends Mh {
  constructor(e) {
    super(), Hh(this, e, Nh, jh, Ph, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Vh,
  append: hl,
  attr: rs,
  create_component: Kh,
  destroy_component: Zh,
  detach: Jh,
  element: ta,
  init: Gh,
  insert: Qh,
  mount_component: $h,
  safe_not_equal: eu,
  set_data: tu,
  space: nu,
  text: iu,
  toggle_class: _n,
  transition_in: su,
  transition_out: lu
} = window.__gradio__svelte__internal;
function ou(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ta("label"), t = ta("span"), Kh(n.$$.fragment), s = nu(), l = iu(
        /*label*/
        i[0]
      ), rs(t, "class", "svelte-9gxdi0"), rs(e, "for", ""), rs(e, "data-testid", "block-label"), rs(e, "class", "svelte-9gxdi0"), _n(e, "hide", !/*show_label*/
      i[2]), _n(e, "sr-only", !/*show_label*/
      i[2]), _n(
        e,
        "float",
        /*float*/
        i[4]
      ), _n(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Qh(r, e, a), hl(e, t), $h(n, t, null), hl(e, s), hl(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && tu(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && _n(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && _n(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && _n(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && _n(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (su(n.$$.fragment, r), o = !0);
    },
    o(r) {
      lu(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Jh(e), Zh(n);
    }
  };
}
function au(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class ru extends Vh {
  constructor(e) {
    super(), Gh(this, e, au, ou, eu, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: cu,
  append: ao,
  attr: nn,
  bubble: fu,
  create_component: hu,
  destroy_component: uu,
  detach: cc,
  element: ro,
  init: du,
  insert: fc,
  listen: _u,
  mount_component: mu,
  safe_not_equal: gu,
  set_data: bu,
  set_style: ri,
  space: pu,
  text: wu,
  toggle_class: it,
  transition_in: vu,
  transition_out: ku
} = window.__gradio__svelte__internal;
function na(i) {
  let e, t;
  return {
    c() {
      e = ro("span"), t = wu(
        /*label*/
        i[1]
      ), nn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      fc(n, e, s), ao(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && bu(
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
function yu(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && na(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = ro("button"), a && a.c(), t = pu(), n = ro("div"), hu(s.$$.fragment), nn(n, "class", "svelte-1lrphxw"), it(
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
      fc(c, e, f), a && a.m(e, null), ao(e, t), ao(e, n), mu(s, n, null), l = !0, o || (r = _u(
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
      l || (vu(s.$$.fragment, c), l = !0);
    },
    o(c) {
      ku(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && cc(e), a && a.d(), uu(s), o = !1, r();
    }
  };
}
function Cu(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: m = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: p = 0 } = e;
  function h(v) {
    fu.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, s = v.Icon), "label" in v && t(1, l = v.label), "show_label" in v && t(2, o = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, c = v.padded), "highlight" in v && t(6, f = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, d = v.hasPopup), "color" in v && t(13, m = v.color), "transparent" in v && t(9, b = v.transparent), "background" in v && t(10, g = v.background), "offset" in v && t(11, p = v.offset);
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
    h
  ];
}
class tl extends cu {
  constructor(e) {
    super(), du(this, e, Cu, yu, gu, {
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
  SvelteComponent: xu,
  append: Su,
  attr: ul,
  binding_callbacks: zu,
  create_slot: Mu,
  detach: Bu,
  element: ia,
  get_all_dirty_from_scope: Wu,
  get_slot_changes: Du,
  init: Xu,
  insert: Yu,
  safe_not_equal: Eu,
  toggle_class: mn,
  transition_in: Ru,
  transition_out: qu,
  update_slot_base: Lu
} = window.__gradio__svelte__internal;
function Hu(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = Mu(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ia("div"), t = ia("div"), l && l.c(), ul(t, "class", "icon svelte-3w3rth"), ul(e, "class", "empty svelte-3w3rth"), ul(e, "aria-label", "Empty value"), mn(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), mn(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), mn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), mn(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Yu(o, e, r), Su(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Lu(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Du(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Wu(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && mn(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && mn(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && mn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && mn(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (Ru(l, o), n = !0);
    },
    o(o) {
      qu(l, o), n = !1;
    },
    d(o) {
      o && Bu(e), l && l.d(o), i[6](null);
    }
  };
}
function Iu(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var d;
    if (!u) return !1;
    const { height: m } = u.getBoundingClientRect(), { height: b } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: m };
    return m > b + 2;
  }
  function f(u) {
    zu[u ? "unshift" : "push"](() => {
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
class Pu extends xu {
  constructor(e) {
    super(), Xu(this, e, Iu, Hu, Eu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Au,
  append: sa,
  attr: st,
  detach: Tu,
  init: Fu,
  insert: Uu,
  noop: dl,
  safe_not_equal: Ou,
  svg_element: _l
} = window.__gradio__svelte__internal;
function ju(i) {
  let e, t, n;
  return {
    c() {
      e = _l("svg"), t = _l("path"), n = _l("circle"), st(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), st(n, "cx", "12"), st(n, "cy", "13"), st(n, "r", "4"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "stroke-width", "1.5"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round"), st(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Uu(s, e, l), sa(e, t), sa(e, n);
    },
    p: dl,
    i: dl,
    o: dl,
    d(s) {
      s && Tu(e);
    }
  };
}
class Nu extends Au {
  constructor(e) {
    super(), Fu(this, e, null, ju, Ou, {});
  }
}
const {
  SvelteComponent: Vu,
  append: Ku,
  attr: Xt,
  detach: Zu,
  init: Ju,
  insert: Gu,
  noop: ml,
  safe_not_equal: Qu,
  svg_element: la
} = window.__gradio__svelte__internal;
function $u(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("circle"), Xt(t, "cx", "12"), Xt(t, "cy", "12"), Xt(t, "r", "10"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24"), Xt(e, "stroke-width", "1.5"), Xt(e, "stroke-linecap", "round"), Xt(e, "stroke-linejoin", "round"), Xt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Gu(n, e, s), Ku(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && Zu(e);
    }
  };
}
let ed = class extends Vu {
  constructor(e) {
    super(), Ju(this, e, null, $u, Qu, {});
  }
};
const {
  SvelteComponent: td,
  append: gl,
  attr: Yt,
  detach: nd,
  init: id,
  insert: sd,
  noop: bl,
  safe_not_equal: ld,
  set_style: Ut,
  svg_element: cs
} = window.__gradio__svelte__internal;
function od(i) {
  let e, t, n, s;
  return {
    c() {
      e = cs("svg"), t = cs("g"), n = cs("path"), s = cs("path"), Yt(n, "d", "M18,6L6.087,17.913"), Ut(n, "fill", "none"), Ut(n, "fill-rule", "nonzero"), Ut(n, "stroke-width", "2px"), Yt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Yt(s, "d", "M4.364,4.364L19.636,19.636"), Ut(s, "fill", "none"), Ut(s, "fill-rule", "nonzero"), Ut(s, "stroke-width", "2px"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "version", "1.1"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Yt(e, "xml:space", "preserve"), Yt(e, "stroke", "currentColor"), Ut(e, "fill-rule", "evenodd"), Ut(e, "clip-rule", "evenodd"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      sd(l, e, o), gl(e, t), gl(t, n), gl(e, s);
    },
    p: bl,
    i: bl,
    o: bl,
    d(l) {
      l && nd(e);
    }
  };
}
class hc extends td {
  constructor(e) {
    super(), id(this, e, null, od, ld, {});
  }
}
const {
  SvelteComponent: ad,
  append: rd,
  attr: qi,
  detach: cd,
  init: fd,
  insert: hd,
  noop: pl,
  safe_not_equal: ud,
  svg_element: oa
} = window.__gradio__svelte__internal;
function dd(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), qi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), qi(t, "fill", "currentColor"), qi(e, "id", "icon"), qi(e, "xmlns", "http://www.w3.org/2000/svg"), qi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      hd(n, e, s), rd(e, t);
    },
    p: pl,
    i: pl,
    o: pl,
    d(n) {
      n && cd(e);
    }
  };
}
class _d extends ad {
  constructor(e) {
    super(), fd(this, e, null, dd, ud, {});
  }
}
const {
  SvelteComponent: md,
  append: gd,
  attr: ci,
  detach: bd,
  init: pd,
  insert: wd,
  noop: wl,
  safe_not_equal: vd,
  svg_element: aa
} = window.__gradio__svelte__internal;
function kd(i) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), ci(t, "fill", "currentColor"), ci(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), ci(e, "xmlns", "http://www.w3.org/2000/svg"), ci(e, "width", "100%"), ci(e, "height", "100%"), ci(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      wd(n, e, s), gd(e, t);
    },
    p: wl,
    i: wl,
    o: wl,
    d(n) {
      n && bd(e);
    }
  };
}
class yd extends md {
  constructor(e) {
    super(), pd(this, e, null, kd, vd, {});
  }
}
const {
  SvelteComponent: Cd,
  append: xd,
  attr: fi,
  detach: Sd,
  init: zd,
  insert: Md,
  noop: vl,
  safe_not_equal: Bd,
  svg_element: ra
} = window.__gradio__svelte__internal;
function Wd(i) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), fi(t, "d", "M5 8l4 4 4-4z"), fi(e, "class", "dropdown-arrow svelte-145leq6"), fi(e, "xmlns", "http://www.w3.org/2000/svg"), fi(e, "width", "100%"), fi(e, "height", "100%"), fi(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      Md(n, e, s), xd(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && Sd(e);
    }
  };
}
let Xo = class extends Cd {
  constructor(e) {
    super(), zd(this, e, null, Wd, Bd, {});
  }
};
const {
  SvelteComponent: Dd,
  append: kl,
  attr: Ye,
  detach: Xd,
  init: Yd,
  insert: Ed,
  noop: yl,
  safe_not_equal: Rd,
  svg_element: fs
} = window.__gradio__svelte__internal;
function qd(i) {
  let e, t, n, s;
  return {
    c() {
      e = fs("svg"), t = fs("rect"), n = fs("circle"), s = fs("polyline"), Ye(t, "x", "3"), Ye(t, "y", "3"), Ye(t, "width", "18"), Ye(t, "height", "18"), Ye(t, "rx", "2"), Ye(t, "ry", "2"), Ye(n, "cx", "8.5"), Ye(n, "cy", "8.5"), Ye(n, "r", "1.5"), Ye(s, "points", "21 15 16 10 5 21"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "width", "100%"), Ye(e, "height", "100%"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "1.5"), Ye(e, "stroke-linecap", "round"), Ye(e, "stroke-linejoin", "round"), Ye(e, "class", "feather feather-image");
    },
    m(l, o) {
      Ed(l, e, o), kl(e, t), kl(e, n), kl(e, s);
    },
    p: yl,
    i: yl,
    o: yl,
    d(l) {
      l && Xd(e);
    }
  };
}
let uc = class extends Dd {
  constructor(e) {
    super(), Yd(this, e, null, qd, Rd, {});
  }
};
const {
  SvelteComponent: Ld,
  append: Hd,
  attr: hs,
  detach: Id,
  init: Pd,
  insert: Ad,
  noop: Cl,
  safe_not_equal: Td,
  svg_element: ca
} = window.__gradio__svelte__internal;
function Fd(i) {
  let e, t;
  return {
    c() {
      e = ca("svg"), t = ca("path"), hs(t, "fill", "currentColor"), hs(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), hs(e, "xmlns", "http://www.w3.org/2000/svg"), hs(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      Ad(n, e, s), Hd(e, t);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(n) {
      n && Id(e);
    }
  };
}
class dc extends Ld {
  constructor(e) {
    super(), Pd(this, e, null, Fd, Td, {});
  }
}
const {
  SvelteComponent: Ud,
  append: us,
  attr: Ee,
  detach: Od,
  init: jd,
  insert: Nd,
  noop: xl,
  safe_not_equal: Vd,
  svg_element: Li
} = window.__gradio__svelte__internal;
function Kd(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = Li("svg"), t = Li("path"), n = Li("path"), s = Li("line"), l = Li("line"), Ee(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Ee(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Ee(s, "x1", "12"), Ee(s, "y1", "19"), Ee(s, "x2", "12"), Ee(s, "y2", "23"), Ee(l, "x1", "8"), Ee(l, "y1", "23"), Ee(l, "x2", "16"), Ee(l, "y2", "23"), Ee(e, "xmlns", "http://www.w3.org/2000/svg"), Ee(e, "width", "100%"), Ee(e, "height", "100%"), Ee(e, "viewBox", "0 0 24 24"), Ee(e, "fill", "none"), Ee(e, "stroke", "currentColor"), Ee(e, "stroke-width", "2"), Ee(e, "stroke-linecap", "round"), Ee(e, "stroke-linejoin", "round"), Ee(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Nd(o, e, r), us(e, t), us(e, n), us(e, s), us(e, l);
    },
    p: xl,
    i: xl,
    o: xl,
    d(o) {
      o && Od(e);
    }
  };
}
class Zd extends Ud {
  constructor(e) {
    super(), jd(this, e, null, Kd, Vd, {});
  }
}
const {
  SvelteComponent: Jd,
  append: Gd,
  attr: lt,
  detach: Qd,
  init: $d,
  insert: e_,
  noop: Sl,
  safe_not_equal: t_,
  svg_element: fa
} = window.__gradio__svelte__internal;
function n_(i) {
  let e, t;
  return {
    c() {
      e = fa("svg"), t = fa("rect"), lt(t, "x", "3"), lt(t, "y", "3"), lt(t, "width", "18"), lt(t, "height", "18"), lt(t, "rx", "2"), lt(t, "ry", "2"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "stroke-width", "1.5"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round"), lt(e, "class", "feather feather-square");
    },
    m(n, s) {
      e_(n, e, s), Gd(e, t);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(n) {
      n && Qd(e);
    }
  };
}
class i_ extends Jd {
  constructor(e) {
    super(), $d(this, e, null, n_, t_, {});
  }
}
const {
  SvelteComponent: s_,
  append: zl,
  attr: Qe,
  detach: l_,
  init: o_,
  insert: a_,
  noop: Ml,
  safe_not_equal: r_,
  svg_element: ds
} = window.__gradio__svelte__internal;
function c_(i) {
  let e, t, n, s;
  return {
    c() {
      e = ds("svg"), t = ds("path"), n = ds("polyline"), s = ds("line"), Qe(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Qe(n, "points", "17 8 12 3 7 8"), Qe(s, "x1", "12"), Qe(s, "y1", "3"), Qe(s, "x2", "12"), Qe(s, "y2", "15"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "90%"), Qe(e, "height", "90%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "2"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-upload");
    },
    m(l, o) {
      a_(l, e, o), zl(e, t), zl(e, n), zl(e, s);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(l) {
      l && l_(e);
    }
  };
}
let _c = class extends s_ {
  constructor(e) {
    super(), o_(this, e, null, c_, r_, {});
  }
};
const {
  SvelteComponent: f_,
  append: ha,
  attr: gn,
  detach: h_,
  init: u_,
  insert: d_,
  noop: Bl,
  safe_not_equal: __,
  svg_element: Wl
} = window.__gradio__svelte__internal;
function m_(i) {
  let e, t, n;
  return {
    c() {
      e = Wl("svg"), t = Wl("path"), n = Wl("path"), gn(t, "fill", "currentColor"), gn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), gn(n, "fill", "currentColor"), gn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), gn(e, "xmlns", "http://www.w3.org/2000/svg"), gn(e, "width", "100%"), gn(e, "height", "100%"), gn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      d_(s, e, l), ha(e, t), ha(e, n);
    },
    p: Bl,
    i: Bl,
    o: Bl,
    d(s) {
      s && h_(e);
    }
  };
}
let mc = class extends f_ {
  constructor(e) {
    super(), u_(this, e, null, m_, __, {});
  }
};
const g_ = [
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
], ua = {
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
g_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: ua[e][t],
      secondary: ua[e][n]
    }
  }),
  {}
);
class qs extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function b_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new qs("Must be on Spaces to share.");
  let t, n, s;
  t = p_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
function p_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: w_,
  create_component: v_,
  destroy_component: k_,
  init: y_,
  mount_component: C_,
  safe_not_equal: x_,
  transition_in: S_,
  transition_out: z_
} = window.__gradio__svelte__internal, { createEventDispatcher: M_ } = window.__gradio__svelte__internal;
function B_(i) {
  let e, t;
  return e = new tl({
    props: {
      Icon: _d,
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
      v_(e.$$.fragment);
    },
    m(n, s) {
      C_(e, n, s), t = !0;
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
      t || (S_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      z_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      k_(e, n);
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
class D_ extends w_ {
  constructor(e) {
    super(), y_(this, e, W_, B_, x_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: X_,
  append: On,
  attr: co,
  check_outros: Y_,
  create_component: gc,
  destroy_component: bc,
  detach: Ls,
  element: fo,
  group_outros: E_,
  init: R_,
  insert: Hs,
  mount_component: pc,
  safe_not_equal: q_,
  set_data: ho,
  space: uo,
  text: Ui,
  toggle_class: da,
  transition_in: As,
  transition_out: Ts
} = window.__gradio__svelte__internal;
function L_(i) {
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
function H_(i) {
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
      e = fo("span"), t = Ui("- "), s = Ui(n), l = Ui(" -"), o = uo(), a = Ui(r), co(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      Hs(c, e, f), On(e, t), On(e, s), On(e, l), Hs(c, o, f), Hs(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && ho(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && ho(a, r);
    },
    d(c) {
      c && (Ls(e), Ls(o), Ls(a));
    }
  };
}
function I_(i) {
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
  const f = [H_, L_], u = [];
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
      e = fo("div"), t = fo("span"), s.c(), l = uo(), r = Ui(o), a = uo(), m && m.c(), co(t, "class", "icon-wrap svelte-kzcjhc"), da(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), co(e, "class", "wrap svelte-kzcjhc");
    },
    m(b, g) {
      Hs(b, e, g), On(e, t), u[n].m(t, null), On(e, l), On(e, r), On(e, a), m && m.m(e, null), c = !0;
    },
    p(b, [g]) {
      let p = n;
      n = d(b), n !== p && (E_(), Ts(u[p], 1, 1, () => {
        u[p] = null;
      }), Y_(), s = u[n], s || (s = u[n] = f[n](b), s.c()), As(s, 1), s.m(t, null)), (!c || g & /*hovered*/
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
      ) + "") && ho(r, o), /*mode*/
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
function P_(i, e, t) {
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
class wc extends X_ {
  constructor(e) {
    super(), R_(this, e, P_, I_, q_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: A_,
  append: Dl,
  attr: Gt,
  check_outros: Oi,
  create_component: nl,
  destroy_component: il,
  detach: Mi,
  element: ns,
  empty: T_,
  group_outros: ji,
  init: F_,
  insert: Bi,
  listen: sl,
  mount_component: ll,
  safe_not_equal: U_,
  space: Xl,
  toggle_class: Bn,
  transition_in: Le,
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
      Bi(b, e, g), f && f.m(e, null), Dl(e, n), u && u.m(e, null), Dl(e, l), d && d.m(e, null), Dl(e, r), m && m.m(e, null), c = !0;
    },
    p(b, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      b[1].includes("upload")), t ? f ? (f.p(b, g), g & /*sources*/
      2 && Le(f, 1)) : (f = ga(b), f.c(), Le(f, 1), f.m(e, n)) : f && (ji(), at(f, 1, 1, () => {
        f = null;
      }), Oi()), g & /*sources*/
      2 && (s = /*sources*/
      b[1].includes("microphone")), s ? u ? (u.p(b, g), g & /*sources*/
      2 && Le(u, 1)) : (u = ba(b), u.c(), Le(u, 1), u.m(e, l)) : u && (ji(), at(u, 1, 1, () => {
        u = null;
      }), Oi()), g & /*sources*/
      2 && (o = /*sources*/
      b[1].includes("webcam")), o ? d ? (d.p(b, g), g & /*sources*/
      2 && Le(d, 1)) : (d = pa(b), d.c(), Le(d, 1), d.m(e, r)) : d && (ji(), at(d, 1, 1, () => {
        d = null;
      }), Oi()), g & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? m ? (m.p(b, g), g & /*sources*/
      2 && Le(m, 1)) : (m = wa(b), m.c(), Le(m, 1), m.m(e, null)) : m && (ji(), at(m, 1, 1, () => {
        m = null;
      }), Oi());
    },
    i(b) {
      c || (Le(f), Le(u), Le(d), Le(m), c = !0);
    },
    o(b) {
      at(f), at(u), at(d), at(m), c = !1;
    },
    d(b) {
      b && Mi(e), f && f.d(), u && u.d(), d && d.d(), m && m.d();
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
      Bi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mi(e), il(t), s = !1, l();
    }
  };
}
function ba(i) {
  let e, t, n, s, l;
  return t = new Zd({}), {
    c() {
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Record audio"), Bn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Bi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mi(e), il(t), s = !1, l();
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
      Bi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mi(e), il(t), s = !1, l();
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
      Bi(o, e, r), ll(t, e, null), n = !0, s || (l = sl(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mi(e), il(t), s = !1, l();
    }
  };
}
function O_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && ma(i)
  );
  return {
    c() {
      n && n.c(), e = T_();
    },
    m(s, l) {
      n && n.m(s, l), Bi(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && Le(n, 1)) : (n = ma(s), n.c(), Le(n, 1), n.m(e.parentNode, e)) : n && (ji(), at(n, 1, 1, () => {
        n = null;
      }), Oi());
    },
    i(s) {
      t || (Le(n), t = !0);
    },
    o(s) {
      at(n), t = !1;
    },
    d(s) {
      s && Mi(e), n && n.d(s);
    }
  };
}
function j_(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(b, g, p, h) {
    function v(w) {
      return w instanceof p ? w : new p(function(y) {
        y(w);
      });
    }
    return new (p || (p = Promise))(function(w, y) {
      function k(z) {
        try {
          M(h.next(z));
        } catch (X) {
          y(X);
        }
      }
      function C(z) {
        try {
          M(h.throw(z));
        } catch (X) {
          y(X);
        }
      }
      function M(z) {
        z.done ? w(z.value) : v(z.value).then(k, C);
      }
      M((h = h.apply(b, g || [])).next());
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
class N_ extends A_ {
  constructor(e) {
    super(), F_(this, e, j_, O_, U_, {
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
const V_ = (i) => i;
function K_(i, e) {
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
function Z_(i) {
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
function J_(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function G_(i, { delay: e = 0, duration: t = 400, easing: n = V_ } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function ya(i, { delay: e = 0, duration: t = 400, easing: n = J_, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
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
const hi = [];
function Q_(i, e = Is) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (K_(i, r) && (i = r, t)) {
      const a = !hi.length;
      for (const c of n)
        c[1](), hi.push(c, i);
      if (a) {
        for (let c = 0; c < hi.length; c += 2)
          hi[c][0](hi[c + 1]);
        hi.length = 0;
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
function xa(i, e = {}) {
  const t = Q_(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, d = 0, m = !1;
  function b(p, h = {}) {
    f = p;
    const v = a = {};
    return i == null || h.hard || g.stiffness >= 1 && g.damping >= 1 ? (m = !0, o = ka(), c = p, t.set(i = f), Promise.resolve()) : (h.soft && (d = 1 / ((h.soft === !0 ? 0.5 : +h.soft) * 60), u = 0), r || (o = ka(), m = !1, r = Z_((w) => {
      if (m)
        return m = !1, r = null, !1;
      u = Math.min(u + d, 1);
      const y = {
        inv_mass: u,
        opts: g,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, k = _o(y, c, i, f);
      return o = w, c = i, t.set(i = k), y.settled && (r = null), !y.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        v === a && w();
      });
    }));
  }
  const g = {
    set: b,
    update: (p, h) => b(p(f, i), h),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return g;
}
const {
  SvelteComponent: $_,
  append: Et,
  attr: _e,
  component_subscribe: Sa,
  detach: em,
  element: tm,
  init: nm,
  insert: im,
  noop: za,
  safe_not_equal: sm,
  set_style: _s,
  svg_element: Rt,
  toggle_class: Ma
} = window.__gradio__svelte__internal, { onMount: lm } = window.__gradio__svelte__internal;
function om(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d;
  return {
    c() {
      e = tm("div"), t = Rt("svg"), n = Rt("g"), s = Rt("path"), l = Rt("path"), o = Rt("path"), r = Rt("path"), a = Rt("g"), c = Rt("path"), f = Rt("path"), u = Rt("path"), d = Rt("path"), _e(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), _e(s, "fill", "#FF7C00"), _e(s, "fill-opacity", "0.4"), _e(s, "class", "svelte-43sxxs"), _e(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), _e(l, "fill", "#FF7C00"), _e(l, "class", "svelte-43sxxs"), _e(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), _e(o, "fill", "#FF7C00"), _e(o, "fill-opacity", "0.4"), _e(o, "class", "svelte-43sxxs"), _e(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), _e(r, "fill", "#FF7C00"), _e(r, "class", "svelte-43sxxs"), _s(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), _e(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), _e(c, "fill", "#FF7C00"), _e(c, "fill-opacity", "0.4"), _e(c, "class", "svelte-43sxxs"), _e(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), _e(f, "fill", "#FF7C00"), _e(f, "class", "svelte-43sxxs"), _e(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), _e(u, "fill", "#FF7C00"), _e(u, "fill-opacity", "0.4"), _e(u, "class", "svelte-43sxxs"), _e(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), _e(d, "fill", "#FF7C00"), _e(d, "class", "svelte-43sxxs"), _s(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), _e(t, "viewBox", "-1200 -1200 3000 3000"), _e(t, "fill", "none"), _e(t, "xmlns", "http://www.w3.org/2000/svg"), _e(t, "class", "svelte-43sxxs"), _e(e, "class", "svelte-43sxxs"), Ma(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(m, b) {
      im(m, e, b), Et(e, t), Et(t, n), Et(n, s), Et(n, l), Et(n, o), Et(n, r), Et(t, a), Et(a, c), Et(a, f), Et(a, u), Et(a, d);
    },
    p(m, [b]) {
      b & /*$top*/
      2 && _s(n, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), b & /*$bottom*/
      4 && _s(a, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), b & /*margin*/
      1 && Ma(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: za,
    o: za,
    d(m) {
      m && em(e);
    }
  };
}
function am(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(m, b, g, p) {
    function h(v) {
      return v instanceof g ? v : new g(function(w) {
        w(v);
      });
    }
    return new (g || (g = Promise))(function(v, w) {
      function y(M) {
        try {
          C(p.next(M));
        } catch (z) {
          w(z);
        }
      }
      function k(M) {
        try {
          C(p.throw(M));
        } catch (z) {
          w(z);
        }
      }
      function C(M) {
        M.done ? v(M.value) : h(M.value).then(y, k);
      }
      C((p = p.apply(m, b || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = xa([0, 0]);
  Sa(i, r, (m) => t(1, n = m));
  const a = xa([0, 0]);
  Sa(i, a, (m) => t(2, s = m));
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
  return lm(() => (d(), () => c = !0)), i.$$set = (m) => {
    "margin" in m && t(0, o = m.margin);
  }, [o, n, s, r, a];
}
class rm extends $_ {
  constructor(e) {
    super(), nm(this, e, am, om, sm, { margin: 0 });
  }
}
const {
  SvelteComponent: cm,
  append: jn,
  attr: At,
  binding_callbacks: Ba,
  check_outros: mo,
  create_component: Cc,
  create_slot: xc,
  destroy_component: Sc,
  destroy_each: zc,
  detach: ne,
  element: Zt,
  empty: Wi,
  ensure_array_like: Fs,
  get_all_dirty_from_scope: Mc,
  get_slot_changes: Bc,
  group_outros: go,
  init: fm,
  insert: ie,
  mount_component: Wc,
  noop: bo,
  safe_not_equal: hm,
  set_data: Mt,
  set_style: zn,
  space: zt,
  text: De,
  toggle_class: St,
  transition_in: Pt,
  transition_out: Jt,
  update_slot_base: Dc
} = window.__gradio__svelte__internal, { tick: um } = window.__gradio__svelte__internal, { onDestroy: dm } = window.__gradio__svelte__internal, { createEventDispatcher: _m } = window.__gradio__svelte__internal, mm = (i) => ({}), Wa = (i) => ({}), gm = (i) => ({}), Da = (i) => ({});
function Xa(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ya(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function bm(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new tl({
    props: {
      Icon: hc,
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
  ), f = xc(
    c,
    i,
    /*$$scope*/
    i[29],
    Wa
  );
  return {
    c() {
      e = Zt("div"), Cc(t.$$.fragment), n = zt(), s = Zt("span"), o = De(l), r = zt(), f && f.c(), At(e, "class", "clear-status svelte-16nch4a"), At(s, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      ie(u, e, d), Wc(t, e, null), ie(u, n, d), ie(u, s, d), jn(s, o), ie(u, r, d), f && f.m(u, d), a = !0;
    },
    p(u, d) {
      const m = {};
      d[0] & /*i18n*/
      2 && (m.label = /*i18n*/
      u[1]("common.clear")), t.$set(m), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && Mt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && Dc(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? Bc(
          c,
          /*$$scope*/
          u[29],
          d,
          mm
        ) : Mc(
          /*$$scope*/
          u[29]
        ),
        Wa
      );
    },
    i(u) {
      a || (Pt(t.$$.fragment, u), Pt(f, u), a = !0);
    },
    o(u) {
      Jt(t.$$.fragment, u), Jt(f, u), a = !1;
    },
    d(u) {
      u && (ne(e), ne(n), ne(s), ne(r)), Sc(t), f && f.d(u);
    }
  };
}
function pm(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ea(i)
  );
  function u(w, y) {
    if (
      /*progress*/
      w[7]
    ) return km;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return vm;
    if (
      /*queue_position*/
      w[2] === 0
    ) return wm;
  }
  let d = u(i), m = d && d(i), b = (
    /*timer*/
    i[5] && La(i)
  );
  const g = [Sm, xm], p = [];
  function h(w, y) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = h(i)) && (o = p[l] = g[l](i));
  let v = !/*timer*/
  i[5] && Ua(i);
  return {
    c() {
      f && f.c(), e = zt(), t = Zt("div"), m && m.c(), n = zt(), b && b.c(), s = zt(), o && o.c(), r = zt(), v && v.c(), a = Wi(), At(t, "class", "progress-text svelte-16nch4a"), St(
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
    m(w, y) {
      f && f.m(w, y), ie(w, e, y), ie(w, t, y), m && m.m(t, null), jn(t, n), b && b.m(t, null), ie(w, s, y), ~l && p[l].m(w, y), ie(w, r, y), v && v.m(w, y), ie(w, a, y), c = !0;
    },
    p(w, y) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, y) : (f = Ea(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = u(w)) && m ? m.p(w, y) : (m && m.d(1), m = d && d(w), m && (m.c(), m.m(t, n))), /*timer*/
      w[5] ? b ? b.p(w, y) : (b = La(w), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!c || y[0] & /*variant*/
      256) && St(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || y[0] & /*variant*/
      256) && St(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let k = l;
      l = h(w), l === k ? ~l && p[l].p(w, y) : (o && (go(), Jt(p[k], 1, 1, () => {
        p[k] = null;
      }), mo()), ~l ? (o = p[l], o ? o.p(w, y) : (o = p[l] = g[l](w), o.c()), Pt(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? v && (go(), Jt(v, 1, 1, () => {
        v = null;
      }), mo()) : v ? (v.p(w, y), y[0] & /*timer*/
      32 && Pt(v, 1)) : (v = Ua(w), v.c(), Pt(v, 1), v.m(a.parentNode, a));
    },
    i(w) {
      c || (Pt(o), Pt(v), c = !0);
    },
    o(w) {
      Jt(o), Jt(v), c = !1;
    },
    d(w) {
      w && (ne(e), ne(t), ne(s), ne(r), ne(a)), f && f.d(w), m && m.d(), b && b.d(), ~l && p[l].d(w), v && v.d(w);
    }
  };
}
function Ea(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Zt("div"), At(e, "class", "eta-bar svelte-16nch4a"), zn(e, "transform", t);
    },
    m(n, s) {
      ie(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && zn(e, "transform", t);
    },
    d(n) {
      n && ne(e);
    }
  };
}
function wm(i) {
  let e;
  return {
    c() {
      e = De("processing |");
    },
    m(t, n) {
      ie(t, e, n);
    },
    p: bo,
    d(t) {
      t && ne(e);
    }
  };
}
function vm(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = De("queue: "), n = De(t), s = De("/"), l = De(
        /*queue_size*/
        i[3]
      ), o = De(" |");
    },
    m(r, a) {
      ie(r, e, a), ie(r, n, a), ie(r, s, a), ie(r, l, a), ie(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Mt(n, t), a[0] & /*queue_size*/
      8 && Mt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (ne(e), ne(n), ne(s), ne(l), ne(o));
    }
  };
}
function km(i) {
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
      e = Wi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ie(s, e, l);
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
      s && ne(e), zc(n, s);
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
      f[41].length != null ? Cm : ym
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = zt(), n = De(t), s = De(" | "), o = De(l);
    },
    m(f, u) {
      c.m(f, u), ie(f, e, u), ie(f, n, u), ie(f, s, u), ie(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && Mt(n, t);
    },
    d(f) {
      f && (ne(e), ne(n), ne(s), ne(o)), c.d(f);
    }
  };
}
function ym(i) {
  let e = wi(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = De(e);
    },
    m(n, s) {
      ie(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = wi(
        /*p*/
        n[41].index || 0
      ) + "") && Mt(t, e);
    },
    d(n) {
      n && ne(t);
    }
  };
}
function Cm(i) {
  let e = wi(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = wi(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = De(e), n = De("/"), l = De(s);
    },
    m(o, r) {
      ie(o, t, r), ie(o, n, r), ie(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = wi(
        /*p*/
        o[41].index || 0
      ) + "") && Mt(t, e), r[0] & /*progress*/
      128 && s !== (s = wi(
        /*p*/
        o[41].length
      ) + "") && Mt(l, s);
    },
    d(o) {
      o && (ne(t), ne(n), ne(l));
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
      t && t.c(), e = Wi();
    },
    m(n, s) {
      t && t.m(n, s), ie(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Ra(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ne(e), t && t.d(n);
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
      e = De(
        /*formatted_timer*/
        i[20]
      ), n = De(t), s = De("s");
    },
    m(l, o) {
      ie(l, e, o), ie(l, n, o), ie(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Mt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Mt(n, t);
    },
    d(l) {
      l && (ne(e), ne(n), ne(s));
    }
  };
}
function xm(i) {
  let e, t;
  return e = new rm({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Cc(e.$$.fragment);
    },
    m(n, s) {
      Wc(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (Pt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sc(e, n);
    }
  };
}
function Sm(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Ha(i)
  );
  return {
    c() {
      e = Zt("div"), t = Zt("div"), r && r.c(), n = zt(), s = Zt("div"), l = Zt("div"), At(t, "class", "progress-level-inner svelte-16nch4a"), At(l, "class", "progress-bar svelte-16nch4a"), zn(l, "width", o), At(s, "class", "progress-bar-wrap svelte-16nch4a"), At(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      ie(a, e, c), jn(e, t), r && r.m(t, null), jn(e, n), jn(e, s), jn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = Ha(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && zn(l, "width", o);
    },
    i: bo,
    o: bo,
    d(a) {
      a && ne(e), r && r.d(), i[31](null);
    }
  };
}
function Ha(i) {
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
      e = Wi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ie(s, e, l);
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
      s && ne(e), zc(n, s);
    }
  };
}
function Ia(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && zm()
  ), o = (
    /*p*/
    i[41].desc != null && Pa(i)
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
      l && l.c(), e = zt(), o && o.c(), t = zt(), r && r.c(), n = zt(), a && a.c(), s = Wi();
    },
    m(c, f) {
      l && l.m(c, f), ie(c, e, f), o && o.m(c, f), ie(c, t, f), r && r.m(c, f), ie(c, n, f), a && a.m(c, f), ie(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = Pa(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = Aa(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = Ta(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (ne(e), ne(t), ne(n), ne(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function zm(i) {
  let e;
  return {
    c() {
      e = De(" /");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && ne(e);
    }
  };
}
function Pa(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = De(e);
    },
    m(n, s) {
      ie(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Mt(t, e);
    },
    d(n) {
      n && ne(t);
    }
  };
}
function Aa(i) {
  let e;
  return {
    c() {
      e = De("-");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && ne(e);
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
      t = De(e), n = De("%");
    },
    m(s, l) {
      ie(s, t, l), ie(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && Mt(t, e);
    },
    d(s) {
      s && (ne(t), ne(n));
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
      t && t.c(), e = Wi();
    },
    m(n, s) {
      t && t.m(n, s), ie(n, e, s);
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
      n && ne(e), t && t.d(n);
    }
  };
}
function Ua(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = xc(
    l,
    i,
    /*$$scope*/
    i[29],
    Da
  );
  return {
    c() {
      e = Zt("p"), t = De(
        /*loading_text*/
        i[9]
      ), n = zt(), o && o.c(), At(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      ie(r, e, a), jn(e, t), ie(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && Mt(
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
        s ? Bc(
          l,
          /*$$scope*/
          r[29],
          a,
          gm
        ) : Mc(
          /*$$scope*/
          r[29]
        ),
        Da
      );
    },
    i(r) {
      s || (Pt(o, r), s = !0);
    },
    o(r) {
      Jt(o, r), s = !1;
    },
    d(r) {
      r && (ne(e), ne(n)), o && o.d(r);
    }
  };
}
function Mm(i) {
  let e, t, n, s, l;
  const o = [pm, bm], r = [];
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
      ), zn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), zn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      ie(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (go(), Jt(r[u], 1, 1, () => {
        r[u] = null;
      }), mo()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Pt(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
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
      1024 && zn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && zn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (Pt(n), l = !0);
    },
    o(c) {
      Jt(n), l = !1;
    },
    d(c) {
      c && ne(e), ~t && r[t].d(), i[33](null);
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
function Wm(i) {
  return Bm(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (ms.push(e), !Yl) Yl = !0;
      else return;
      yield um(), requestAnimationFrame(() => {
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
function Dm(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = _m();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: m = !0 } = e, { show_progress: b = "full" } = e, { message: g = null } = e, { progress: p = null } = e, { variant: h = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: y = !1 } = e, { border: k = !1 } = e, { autoscroll: C } = e, M, z = !1, X = 0, W = 0, B = null, x = null, P = 0, U = null, j, O = null, q = !0;
  const R = () => {
    t(0, a = t(27, B = t(19, T = null))), t(25, X = performance.now()), t(26, W = 0), z = !0, ee();
  };
  function ee() {
    requestAnimationFrame(() => {
      t(26, W = (performance.now() - X) / 1e3), z && ee();
    });
  }
  function Q() {
    t(26, W = 0), t(0, a = t(27, B = t(19, T = null))), z && (z = !1);
  }
  dm(() => {
    z && Q();
  });
  let T = null;
  function L(I) {
    Ba[I ? "unshift" : "push"](() => {
      O = I, t(16, O), t(7, p), t(14, U), t(15, j);
    });
  }
  const oe = () => {
    o("clear_status");
  };
  function se(I) {
    Ba[I ? "unshift" : "push"](() => {
      M = I, t(13, M);
    });
  }
  return i.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, c = I.queue_position), "queue_size" in I && t(3, f = I.queue_size), "status" in I && t(4, u = I.status), "scroll_to_output" in I && t(22, d = I.scroll_to_output), "timer" in I && t(5, m = I.timer), "show_progress" in I && t(6, b = I.show_progress), "message" in I && t(23, g = I.message), "progress" in I && t(7, p = I.progress), "variant" in I && t(8, h = I.variant), "loading_text" in I && t(9, v = I.loading_text), "absolute" in I && t(10, w = I.absolute), "translucent" in I && t(11, y = I.translucent), "border" in I && t(12, k = I.border), "autoscroll" in I && t(24, C = I.autoscroll), "$$scope" in I && t(29, l = I.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = B), a != null && B !== a && (t(28, x = (performance.now() - X) / 1e3 + a), t(19, T = x.toFixed(1)), t(27, B = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, P = x === null || x <= 0 || !W ? null : Math.min(W / x, 1)), i.$$.dirty[0] & /*progress*/
    128 && p != null && t(18, q = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? t(14, U = p.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, U = null), U ? (t(15, j = U[U.length - 1]), O && (j === 0 ? t(16, O.style.transition = "0", O) : t(16, O.style.transition = "150ms", O))) : t(15, j = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : Q()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && M && d && (u === "pending" || u === "complete") && Wm(M, C), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = W.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    m,
    b,
    p,
    h,
    v,
    w,
    y,
    k,
    M,
    U,
    j,
    O,
    P,
    q,
    T,
    n,
    o,
    d,
    g,
    C,
    X,
    W,
    B,
    x,
    l,
    s,
    L,
    oe,
    se
  ];
}
class Xm extends cm {
  constructor(e) {
    super(), fm(
      this,
      e,
      Dm,
      Mm,
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
const { setContext: Cw, getContext: Ym } = window.__gradio__svelte__internal, Em = "WORKER_PROXY_CONTEXT_KEY";
function Xc() {
  return Ym(Em);
}
function Rm(i) {
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
  return !(!Rm(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function qm(i) {
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
  SvelteComponent: Lm,
  assign: Us,
  check_outros: Rc,
  compute_rest_props: Oa,
  create_slot: Yo,
  detach: ol,
  element: qc,
  empty: Lc,
  exclude_internal_props: Hm,
  get_all_dirty_from_scope: Eo,
  get_slot_changes: Ro,
  get_spread_update: Hc,
  group_outros: Ic,
  init: Im,
  insert: al,
  listen: Pc,
  prevent_default: Pm,
  safe_not_equal: Am,
  set_attributes: Os,
  transition_in: Qn,
  transition_out: $n,
  update_slot_base: qo
} = window.__gradio__svelte__internal, { createEventDispatcher: Tm } = window.__gradio__svelte__internal;
function Fm(i) {
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
      al(f, e, u), r && r.m(e, null), n = !0, s || (l = Pc(
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
      ), Os(e, c = Hc(a, [
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
      n || (Qn(r, f), n = !0);
    },
    o(f) {
      $n(r, f), n = !1;
    },
    d(f) {
      f && ol(e), r && r.d(f), s = !1, l();
    }
  };
}
function Um(i) {
  let e, t, n, s;
  const l = [jm, Om], o = [];
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
      e = r(a), e === f ? o[e].p(a, c) : (Ic(), $n(o[f], 1, 1, () => {
        o[f] = null;
      }), Rc(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Qn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Qn(t), s = !0);
    },
    o(a) {
      $n(t), s = !1;
    },
    d(a) {
      a && ol(n), o[e].d(a);
    }
  };
}
function Om(i) {
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
      al(c, e, f), o && o.m(e, null), t = !0, n || (s = Pc(e, "click", Pm(
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
      ), Os(e, a = Hc(r, [
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
      t || (Qn(o, c), t = !0);
    },
    o(c) {
      $n(o, c), t = !1;
    },
    d(c) {
      c && ol(e), o && o.d(c), n = !1, s();
    }
  };
}
function jm(i) {
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
      e || (Qn(n, s), e = !0);
    },
    o(s) {
      $n(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Nm(i) {
  let e, t, n, s, l;
  const o = [Um, Fm], r = [];
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
      t = a(c, f), t === u ? r[t].p(c, f) : (Ic(), $n(r[u], 1, 1, () => {
        r[u] = null;
      }), Rc(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Qn(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (Qn(n), l = !0);
    },
    o(c) {
      $n(n), l = !1;
    },
    d(c) {
      c && ol(s), r[t].d(c);
    }
  };
}
function Vm(i, e, t) {
  const n = ["href", "download"];
  let s = Oa(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(b, g, p, h) {
    function v(w) {
      return w instanceof p ? w : new p(function(y) {
        y(w);
      });
    }
    return new (p || (p = Promise))(function(w, y) {
      function k(z) {
        try {
          M(h.next(z));
        } catch (X) {
          y(X);
        }
      }
      function C(z) {
        try {
          M(h.throw(z));
        } catch (X) {
          y(X);
        }
      }
      function M(z) {
        z.done ? w(z.value) : v(z.value).then(k, C);
      }
      M((h = h.apply(b, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Tm();
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
        const h = new Blob(
          [p.body],
          {
            type: Yc(p.headers, "content-type")
          }
        ), v = URL.createObjectURL(h), w = document.createElement("a");
        w.href = v, w.download = c, w.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (b) => {
    e = Us(Us({}, e), Hm(b)), t(6, s = Oa(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, c = b.download), "$$scope" in b && t(7, o = b.$$scope);
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
class Km extends Lm {
  constructor(e) {
    super(), Im(this, e, Vm, Nm, Am, { href: 0, download: 1 });
  }
}
var Zm = Object.defineProperty, Jm = (i, e, t) => e in i ? Zm(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Qt = (i, e, t) => (Jm(i, typeof e != "symbol" ? e + "" : e, t), t), Ac = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Hi = (i, e, t) => (Ac(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Gm = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Qm = (i, e, t, n) => (Ac(i, e, "write to private field"), e.set(i, t), t), Cn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Tc(i, e) {
  return i.map(
    (t) => new $m({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class $m {
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
class xw extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Hi(this, Cn) + t; ; ) {
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
        Qm(this, Cn, t);
      },
      flush: (t) => {
        if (Hi(this, Cn) === "")
          return;
        const n = e.allowCR && Hi(this, Cn).endsWith("\r") ? Hi(this, Cn).slice(0, -1) : Hi(this, Cn);
        t.enqueue(n);
      }
    }), Gm(this, Cn, "");
  }
}
Cn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: e1,
  append: ct,
  attr: Fn,
  detach: Fc,
  element: Un,
  init: t1,
  insert: Uc,
  noop: ja,
  safe_not_equal: n1,
  set_data: js,
  set_style: El,
  space: po,
  text: vi,
  toggle_class: Na
} = window.__gradio__svelte__internal, { onMount: i1, createEventDispatcher: s1, onDestroy: l1 } = window.__gradio__svelte__internal;
function Va(i) {
  let e, t, n, s, l = Ni(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = Un("div"), t = Un("span"), n = Un("div"), s = Un("progress"), o = vi(l), a = po(), c = Un("span"), u = vi(f), El(s, "visibility", "hidden"), El(s, "height", "0"), El(s, "width", "0"), s.value = r = Ni(
        /*file_to_display*/
        i[2]
      ), Fn(s, "max", "100"), Fn(s, "class", "svelte-cr2edf"), Fn(n, "class", "progress-bar svelte-cr2edf"), Fn(c, "class", "file-name svelte-cr2edf"), Fn(e, "class", "file svelte-cr2edf");
    },
    m(d, m) {
      Uc(d, e, m), ct(e, t), ct(t, n), ct(n, s), ct(s, o), ct(e, a), ct(e, c), ct(c, u);
    },
    p(d, m) {
      m & /*file_to_display*/
      4 && l !== (l = Ni(
        /*file_to_display*/
        d[2]
      ) + "") && js(o, l), m & /*file_to_display*/
      4 && r !== (r = Ni(
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
function o1(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && Va(i)
  );
  return {
    c() {
      e = Un("div"), t = Un("span"), n = vi("Uploading "), l = vi(s), o = po(), a = vi(r), c = vi("..."), f = po(), u && u.c(), Fn(t, "class", "uploading svelte-cr2edf"), Fn(e, "class", "wrap svelte-cr2edf"), Na(
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
      d[2] ? u ? u.p(d, m) : (u = Va(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), m & /*progress*/
      2 && Na(
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
function Ni(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function a1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Ni(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function r1(i, e, t) {
  var n = this && this.__awaiter || function(g, p, h, v) {
    function w(y) {
      return y instanceof h ? y : new h(function(k) {
        k(y);
      });
    }
    return new (h || (h = Promise))(function(y, k) {
      function C(X) {
        try {
          z(v.next(X));
        } catch (W) {
          k(W);
        }
      }
      function M(X) {
        try {
          z(v.throw(X));
        } catch (W) {
          k(W);
        }
      }
      function z(X) {
        X.done ? y(X.value) : w(X.value).then(C, M);
      }
      z((v = v.apply(g, p || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, d = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const m = s1();
  function b(g, p) {
    t(0, d = d.map((h) => (h.orig_name === g && (h.progress += p), h)));
  }
  return i1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const p = JSON.parse(g.data);
        c || t(1, c = !0), p.msg === "done" ? (a == null || a.close(), m("done")) : (t(7, f = p), b(p.orig_name, p.chunk_size));
      });
    };
  })), l1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && a1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class c1 extends e1 {
  constructor(e) {
    super(), t1(this, e, r1, o1, n1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: f1,
  append: Ka,
  attr: et,
  binding_callbacks: h1,
  bubble: Yn,
  check_outros: Oc,
  create_component: u1,
  create_slot: jc,
  destroy_component: d1,
  detach: rl,
  element: wo,
  empty: Nc,
  get_all_dirty_from_scope: Vc,
  get_slot_changes: Kc,
  group_outros: Zc,
  init: _1,
  insert: cl,
  listen: gt,
  mount_component: m1,
  prevent_default: En,
  run_all: g1,
  safe_not_equal: b1,
  set_style: Jc,
  space: p1,
  stop_propagation: Rn,
  toggle_class: Ae,
  transition_in: Mn,
  transition_out: ei,
  update_slot_base: Gc
} = window.__gradio__svelte__internal, { createEventDispatcher: w1, tick: v1 } = window.__gradio__svelte__internal;
function k1(i) {
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
      e = wo("button"), m && m.c(), t = p1(), n = wo("input"), et(n, "aria-label", "file upload"), et(n, "data-testid", "file-upload"), et(n, "type", "file"), et(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, et(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), et(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), et(n, "class", "svelte-1s26xmt"), et(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), et(e, "class", "svelte-1s26xmt"), Ae(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Ae(
        e,
        "center",
        /*center*/
        i[4]
      ), Ae(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Ae(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Ae(
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
        gt(e, "drag", Rn(En(
          /*drag_handler*/
          i[27]
        ))),
        gt(e, "dragstart", Rn(En(
          /*dragstart_handler*/
          i[28]
        ))),
        gt(e, "dragend", Rn(En(
          /*dragend_handler*/
          i[29]
        ))),
        gt(e, "dragover", Rn(En(
          /*dragover_handler*/
          i[30]
        ))),
        gt(e, "dragenter", Rn(En(
          /*dragenter_handler*/
          i[31]
        ))),
        gt(e, "dragleave", Rn(En(
          /*dragleave_handler*/
          i[32]
        ))),
        gt(e, "drop", Rn(En(
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
        ) : Vc(
          /*$$scope*/
          b[25]
        ),
        null
      ), (!c || g[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      b[16] || void 0)) && et(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      b[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      b[6] === "directory" || void 0)) && et(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      b[6] === "directory" || void 0)) && et(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      b[9] ? -1 : 0)) && et(e, "tabindex", a), (!c || g[0] & /*hidden*/
      512) && Ae(
        e,
        "hidden",
        /*hidden*/
        b[9]
      ), (!c || g[0] & /*center*/
      16) && Ae(
        e,
        "center",
        /*center*/
        b[4]
      ), (!c || g[0] & /*boundedheight*/
      8) && Ae(
        e,
        "boundedheight",
        /*boundedheight*/
        b[3]
      ), (!c || g[0] & /*flex*/
      32) && Ae(
        e,
        "flex",
        /*flex*/
        b[5]
      ), (!c || g[0] & /*disable_click*/
      128) && Ae(
        e,
        "disable_click",
        /*disable_click*/
        b[7]
      );
    },
    i(b) {
      c || (Mn(m, b), c = !0);
    },
    o(b) {
      ei(m, b), c = !1;
    },
    d(b) {
      b && rl(e), m && m.d(b), i[34](null), f = !1, g1(u);
    }
  };
}
function y1(i) {
  let e, t, n = !/*hidden*/
  i[9] && Za(i);
  return {
    c() {
      n && n.c(), e = Nc();
    },
    m(s, l) {
      n && n.m(s, l), cl(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (Zc(), ei(n, 1, 1, () => {
        n = null;
      }), Oc()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && Mn(n, 1)) : (n = Za(s), n.c(), Mn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (Mn(n), t = !0);
    },
    o(s) {
      ei(n), t = !1;
    },
    d(s) {
      s && rl(e), n && n.d(s);
    }
  };
}
function C1(i) {
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
      e = wo("button"), r && r.c(), et(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), et(e, "class", "svelte-1s26xmt"), Ae(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Ae(
        e,
        "center",
        /*center*/
        i[4]
      ), Ae(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Ae(
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
        ) : Vc(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && et(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && Ae(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && Ae(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && Ae(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && Ae(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Mn(r, a), n = !0);
    },
    o(a) {
      ei(r, a), n = !1;
    },
    d(a) {
      a && rl(e), r && r.d(a), s = !1, l();
    }
  };
}
function Za(i) {
  let e, t;
  return e = new c1({
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
      u1(e.$$.fragment);
    },
    m(n, s) {
      m1(e, n, s), t = !0;
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
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ei(e.$$.fragment, n), t = !1;
    },
    d(n) {
      d1(e, n);
    }
  };
}
function x1(i) {
  let e, t, n, s;
  const l = [C1, y1, k1], o = [];
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
      t.c(), n = Nc();
    },
    m(a, c) {
      o[e].m(a, c), cl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Zc(), ei(o[f], 1, 1, () => {
        o[f] = null;
      }), Oc(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Mn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Mn(t), s = !0);
    },
    o(a) {
      ei(t), s = !1;
    },
    d(a) {
      a && rl(n), o[e].d(a);
    }
  };
}
function S1(i, e, t) {
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
function z1(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(E, J, fe, ue) {
    function V(Y) {
      return Y instanceof fe ? Y : new fe(function(Fe) {
        Fe(Y);
      });
    }
    return new (fe || (fe = Promise))(function(Y, Fe) {
      function ze(ke) {
        try {
          G(ue.next(ke));
        } catch (yt) {
          Fe(yt);
        }
      }
      function re(ke) {
        try {
          G(ue.throw(ke));
        } catch (yt) {
          Fe(yt);
        }
      }
      function G(ke) {
        ke.done ? Y(ke.value) : V(ke.value).then(ze, re);
      }
      G((ue = ue.apply(E, J || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: m } = e, { hidden: b = !1 } = e, { format: g = "file" } = e, { uploading: p = !1 } = e, { hidden_upload: h = null } = e, { show_progress: v = !0 } = e, { max_file_size: w = null } = e, { upload: y } = e, { stream_handler: k } = e, C, M, z;
  const X = w1(), W = ["image", "video", "audio", "text", "file"], B = (E) => E.startsWith(".") || E.endsWith("/*") ? E : W.includes(E) ? E + "/*" : "." + E;
  function x() {
    t(20, r = !r);
  }
  function P() {
    navigator.clipboard.read().then((E) => l(this, void 0, void 0, function* () {
      for (let J = 0; J < E.length; J++) {
        const fe = E[J].types.find((ue) => ue.startsWith("image/"));
        if (fe) {
          E[J].getType(fe).then((ue) => l(this, void 0, void 0, function* () {
            const V = new File([ue], `clipboard.${fe.replace("image/", "")}`);
            yield O([V]);
          }));
          break;
        }
      }
    }));
  }
  function U() {
    d || h && (t(2, h.value = "", h), h.click());
  }
  function j(E) {
    return l(this, void 0, void 0, function* () {
      yield v1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, p = !0);
      try {
        const J = yield y(E, m, C, w ?? 1 / 0);
        return X("load", u === "single" ? J == null ? void 0 : J[0] : J), t(1, p = !1), J || [];
      } catch (J) {
        return X("error", J.message), t(1, p = !1), [];
      }
    });
  }
  function O(E) {
    return l(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let J = E.map((fe) => new File([fe], fe instanceof File ? fe.name : "file", { type: fe.type }));
      return t(15, M = yield Tc(J)), yield j(M);
    });
  }
  function q(E) {
    return l(this, void 0, void 0, function* () {
      const J = E.target;
      if (J.files)
        if (g != "blob")
          yield O(Array.from(J.files));
        else {
          if (u === "single") {
            X("load", J.files[0]);
            return;
          }
          X("load", J.files);
        }
    });
  }
  function R(E) {
    return l(this, void 0, void 0, function* () {
      var J;
      if (t(20, r = !1), !(!((J = E.dataTransfer) === null || J === void 0) && J.files)) return;
      const fe = Array.from(E.dataTransfer.files).filter((ue) => {
        const V = "." + ue.name.split(".").pop();
        return V && S1(z, V, ue.type) || (V && Array.isArray(o) ? o.includes(V) : V === o) ? !0 : (X("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield O(fe);
    });
  }
  function ee(E) {
    Yn.call(this, i, E);
  }
  function Q(E) {
    Yn.call(this, i, E);
  }
  function T(E) {
    Yn.call(this, i, E);
  }
  function L(E) {
    Yn.call(this, i, E);
  }
  function oe(E) {
    Yn.call(this, i, E);
  }
  function se(E) {
    Yn.call(this, i, E);
  }
  function I(E) {
    Yn.call(this, i, E);
  }
  function pe(E) {
    h1[E ? "unshift" : "push"](() => {
      h = E, t(2, h);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, o = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, c = E.center), "flex" in E && t(5, f = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, d = E.disable_click), "root" in E && t(8, m = E.root), "hidden" in E && t(9, b = E.hidden), "format" in E && t(21, g = E.format), "uploading" in E && t(1, p = E.uploading), "hidden_upload" in E && t(2, h = E.hidden_upload), "show_progress" in E && t(10, v = E.show_progress), "max_file_size" in E && t(22, w = E.max_file_size), "upload" in E && t(23, y = E.upload), "stream_handler" in E && t(11, k = E.stream_handler), "$$scope" in E && t(25, s = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, z = null) : typeof o == "string" ? t(16, z = B(o)) : (t(0, o = o.map(B)), t(16, z = o.join(", "))));
  }, [
    o,
    p,
    h,
    a,
    c,
    f,
    u,
    d,
    m,
    b,
    v,
    k,
    P,
    U,
    C,
    M,
    z,
    x,
    q,
    R,
    r,
    g,
    w,
    y,
    O,
    s,
    n,
    ee,
    Q,
    T,
    L,
    oe,
    se,
    I,
    pe
  ];
}
class M1 extends f1 {
  constructor(e) {
    super(), _1(
      this,
      e,
      z1,
      x1,
      b1,
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
  create_component: W1,
  destroy_component: D1,
  detach: X1,
  element: ql,
  init: Y1,
  insert: E1,
  listen: R1,
  mount_component: q1,
  noop: L1,
  safe_not_equal: H1,
  set_style: I1,
  space: P1,
  text: A1,
  transition_in: T1,
  transition_out: F1
} = window.__gradio__svelte__internal, { createEventDispatcher: U1 } = window.__gradio__svelte__internal;
function O1(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new mc({}), {
    c() {
      e = ql("button"), t = ql("div"), n = ql("span"), W1(s.$$.fragment), l = P1(), r = A1(o), Rl(n, "class", "icon-wrap svelte-fjcd9c"), Rl(t, "class", "wrap svelte-fjcd9c"), Rl(e, "class", "svelte-fjcd9c"), I1(e, "height", "100%");
    },
    m(u, d) {
      E1(u, e, d), gs(e, t), gs(t, n), q1(s, n, null), gs(t, l), gs(t, r), a = !0, c || (f = R1(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: L1,
    i(u) {
      a || (T1(s.$$.fragment, u), a = !0);
    },
    o(u) {
      F1(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && X1(e), D1(s), c = !1, f();
    }
  };
}
function j1(i) {
  const e = U1();
  return [e, () => e("click")];
}
class N1 extends B1 {
  constructor(e) {
    super(), Y1(this, e, j1, O1, H1, {});
  }
}
function V1() {
  return navigator.mediaDevices.enumerateDevices();
}
function K1(i, e) {
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
  return navigator.mediaDevices.getUserMedia(s).then((l) => (K1(l, e), l));
}
function Z1(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: J1,
  action_destroyer: G1,
  add_render_callback: Q1,
  append: on,
  attr: qe,
  binding_callbacks: $1,
  check_outros: Zi,
  create_component: Di,
  create_in_transition: e0,
  destroy_component: Xi,
  destroy_each: t0,
  detach: ft,
  element: kt,
  empty: Lo,
  ensure_array_like: Ga,
  group_outros: Ji,
  init: n0,
  insert: ht,
  listen: Ns,
  mount_component: Yi,
  noop: Ho,
  run_all: i0,
  safe_not_equal: s0,
  set_data: Qc,
  set_input_value: vo,
  space: es,
  stop_propagation: l0,
  text: $c,
  toggle_class: bs,
  transition_in: Te,
  transition_out: tt
} = window.__gradio__svelte__internal, { createEventDispatcher: o0, onMount: a0 } = window.__gradio__svelte__internal;
function Qa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function r0(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = [h0, f0], m = [];
  function b(h, v) {
    return (
      /*mode*/
      h[1] === "video" || /*streaming*/
      h[0] ? 0 : 1
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
      e = kt("div"), t = kt("button"), s.c(), o = es(), g && g.c(), r = es(), p && p.c(), a = Lo(), qe(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), qe(t, "class", "svelte-8hqvb6"), qe(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(h, v) {
      ht(h, e, v), on(e, t), m[n].m(t, null), on(e, o), g && g.m(e, null), ht(h, r, v), p && p.m(h, v), ht(h, a, v), c = !0, f || (u = Ns(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(h, v) {
      let w = n;
      n = b(h), n === w ? m[n].p(h, v) : (Ji(), tt(m[w], 1, 1, () => {
        m[w] = null;
      }), Zi(), s = m[n], s ? s.p(h, v) : (s = m[n] = d[n](h), s.c()), Te(s, 1), s.m(t, null)), (!c || v[0] & /*mode*/
      2 && l !== (l = /*mode*/
      h[1] === "image" ? "capture photo" : "start recording")) && qe(t, "aria-label", l), /*recording*/
      h[8] ? g && (Ji(), tt(g, 1, 1, () => {
        g = null;
      }), Zi()) : g ? (g.p(h, v), v[0] & /*recording*/
      256 && Te(g, 1)) : (g = $a(h), g.c(), Te(g, 1), g.m(e, null)), /*options_open*/
      h[10] && /*selected_device*/
      h[7] ? p ? (p.p(h, v), v[0] & /*options_open, selected_device*/
      1152 && Te(p, 1)) : (p = er(h), p.c(), Te(p, 1), p.m(a.parentNode, a)) : p && (Ji(), tt(p, 1, 1, () => {
        p = null;
      }), Zi());
    },
    i(h) {
      c || (Te(s), Te(g), Te(p), c = !0);
    },
    o(h) {
      tt(s), tt(g), tt(p), c = !1;
    },
    d(h) {
      h && (ft(e), ft(r), ft(a)), m[n].d(), g && g.d(), p && p.d(h), f = !1, u();
    }
  };
}
function c0(i) {
  let e, t, n, s;
  return t = new N1({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = kt("div"), Di(t.$$.fragment), qe(e, "title", "grant webcam access");
    },
    m(l, o) {
      ht(l, e, o), Yi(t, e, null), s = !0;
    },
    p: Ho,
    i(l) {
      s || (Te(t.$$.fragment, l), l && (n || Q1(() => {
        n = e0(e, G_, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      tt(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && ft(e), Xi(t);
    }
  };
}
function f0(i) {
  let e, t, n;
  return t = new Nu({}), {
    c() {
      e = kt("div"), Di(t.$$.fragment), qe(e, "class", "icon svelte-8hqvb6"), qe(e, "title", "capture photo");
    },
    m(s, l) {
      ht(s, e, l), Yi(t, e, null), n = !0;
    },
    p: Ho,
    i(s) {
      n || (Te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      tt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function h0(i) {
  let e, t, n, s;
  const l = [d0, u0], o = [];
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
      o[e].m(a, c), ht(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (Ji(), tt(o[f], 1, 1, () => {
        o[f] = null;
      }), Zi(), t = o[e], t || (t = o[e] = l[e](a), t.c()), Te(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Te(t), s = !0);
    },
    o(a) {
      tt(t), s = !1;
    },
    d(a) {
      a && ft(n), o[e].d(a);
    }
  };
}
function u0(i) {
  let e, t, n;
  return t = new ed({}), {
    c() {
      e = kt("div"), Di(t.$$.fragment), qe(e, "class", "icon red svelte-8hqvb6"), qe(e, "title", "start recording");
    },
    m(s, l) {
      ht(s, e, l), Yi(t, e, null), n = !0;
    },
    i(s) {
      n || (Te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      tt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function d0(i) {
  let e, t, n;
  return t = new i_({}), {
    c() {
      e = kt("div"), Di(t.$$.fragment), qe(e, "class", "icon red svelte-8hqvb6"), qe(e, "title", "stop recording");
    },
    m(s, l) {
      ht(s, e, l), Yi(t, e, null), n = !0;
    },
    i(s) {
      n || (Te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      tt(t.$$.fragment, s), n = !1;
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
      e = kt("button"), Di(t.$$.fragment), qe(e, "class", "icon svelte-8hqvb6"), qe(e, "aria-label", "select input source");
    },
    m(o, r) {
      ht(o, e, r), Yi(t, e, null), n = !0, s || (l = Ns(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: Ho,
    i(o) {
      n || (Te(t.$$.fragment, o), n = !0);
    },
    o(o) {
      tt(t.$$.fragment, o), n = !1;
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
      u[6].length === 0 ? m0 : _0
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = kt("select"), t = kt("button"), Di(n.$$.fragment), s = es(), f.c(), qe(t, "class", "inset-icon svelte-8hqvb6"), qe(e, "class", "select-wrap svelte-8hqvb6"), qe(e, "aria-label", "select source");
    },
    m(u, d) {
      ht(u, e, d), on(e, t), Yi(n, t, null), on(t, s), f.m(e, null), l = !0, o || (r = [
        Ns(t, "click", l0(
          /*click_handler_2*/
          i[22]
        )),
        G1(Io.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Ns(
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
      l || (Te(n.$$.fragment, u), l = !0);
    },
    o(u) {
      tt(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && ft(e), Xi(n), f.d(), o = !1, i0(r);
    }
  };
}
function _0(i) {
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
      ht(s, e, l);
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
      s && ft(e), t0(n, s);
    }
  };
}
function m0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = kt("option"), n = $c(t), e.__value = "", vo(e, e.__value), qe(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      ht(s, e, l), on(e, n);
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
      i[32].deviceId, qe(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      ht(r, e, a), on(e, n), on(e, s);
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
function g0(i) {
  let e, t, n, s, l, o;
  const r = [c0, r0], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = kt("div"), t = kt("video"), n = es(), l.c(), qe(t, "class", "svelte-8hqvb6"), bs(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), bs(t, "hide", !/*webcam_accessed*/
      i[9]), qe(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      ht(f, e, u), on(e, t), i[19](t), on(e, n), a[s].m(e, null), o = !0;
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
      s = c(f), s === d ? a[s].p(f, u) : (Ji(), tt(a[d], 1, 1, () => {
        a[d] = null;
      }), Zi(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), Te(l, 1), l.m(e, null));
    },
    i(f) {
      o || (Te(l), o = !0);
    },
    o(f) {
      tt(l), o = !1;
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
function b0(i, e, t) {
  var n = this && this.__awaiter || function(R, ee, Q, T) {
    function L(oe) {
      return oe instanceof Q ? oe : new Q(function(se) {
        se(oe);
      });
    }
    return new (Q || (Q = Promise))(function(oe, se) {
      function I(J) {
        try {
          E(T.next(J));
        } catch (fe) {
          se(fe);
        }
      }
      function pe(J) {
        try {
          E(T.throw(J));
        } catch (fe) {
          se(fe);
        }
      }
      function E(J) {
        J.done ? oe(J.value) : L(J.value).then(I, pe);
      }
      E((T = T.apply(R, ee || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: m } = e, { i18n: b } = e, { upload: g } = e;
  const p = o0();
  a0(() => r = document.createElement("canvas"));
  const h = (R) => n(void 0, void 0, void 0, function* () {
    const Q = R.target.value;
    yield Ja(m, s, Q).then((T) => n(void 0, void 0, void 0, function* () {
      C = T, t(7, o = l.find((L) => L.deviceId === Q) || null), t(10, x = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        Ja(m, s).then((R) => n(this, void 0, void 0, function* () {
          t(9, W = !0), t(6, l = yield V1()), C = R;
        })).then(() => Z1(l)).then((R) => {
          t(6, l = R);
          const ee = C.getTracks().map((Q) => {
            var T;
            return (T = Q.getSettings()) === null || T === void 0 ? void 0 : T.deviceId;
          })[0];
          t(7, o = ee && R.find((Q) => Q.deviceId === ee) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && p("error", b("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          p("error", b("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function w() {
    var R = r.getContext("2d");
    (!a || a && y) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, R.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (R.scale(-1, 1), R.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (ee) => {
        p(a ? "stream" : "capture", ee);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, k = [], C, M, z;
  function X() {
    if (y) {
      z.stop();
      let R = new Blob(k, { type: M }), ee = new FileReader();
      ee.onload = function(Q) {
        return n(this, void 0, void 0, function* () {
          var T;
          if (Q.target) {
            let L = new File([R], "sample." + M.substring(6));
            const oe = yield Tc([L]);
            let se = ((T = yield g(oe, f)) === null || T === void 0 ? void 0 : T.filter(Boolean))[0];
            p("capture", se), p("stop_recording");
          }
        });
      }, ee.readAsDataURL(R);
    } else {
      p("start_recording"), k = [];
      let R = ["video/webm", "video/mp4"];
      for (let ee of R)
        if (MediaRecorder.isTypeSupported(ee)) {
          M = ee;
          break;
        }
      if (M === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      z = new MediaRecorder(C, { mimeType: M }), z.addEventListener("dataavailable", function(ee) {
        k.push(ee.data);
      }), z.start(200);
    }
    t(8, y = !y);
  }
  let W = !1;
  function B() {
    u === "image" && a && t(8, y = !y), u === "image" ? w() : X(), !y && C && (C.getTracks().forEach((R) => R.stop()), t(5, s.srcObject = null, s), t(9, W = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let x = !1;
  function P(R) {
    R.preventDefault(), R.stopPropagation(), t(10, x = !1);
  }
  function U(R) {
    $1[R ? "unshift" : "push"](() => {
      s = R, t(5, s);
    });
  }
  const j = async () => v(), O = () => t(10, x = !0), q = () => t(10, x = !1);
  return i.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, c = R.pending), "root" in R && t(16, f = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, d = R.mirror_webcam), "include_audio" in R && t(17, m = R.include_audio), "i18n" in R && t(3, b = R.i18n), "upload" in R && t(18, g = R.upload);
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
    W,
    x,
    h,
    v,
    B,
    P,
    c,
    f,
    m,
    g,
    U,
    j,
    O,
    q
  ];
}
class p0 extends J1 {
  constructor(e) {
    super(), n0(
      this,
      e,
      b0,
      g0,
      s0,
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
  SvelteComponent: w0,
  append: bn,
  attr: K,
  detach: v0,
  init: k0,
  insert: y0,
  noop: Ll,
  safe_not_equal: C0,
  set_style: pn,
  svg_element: $t
} = window.__gradio__svelte__internal;
function x0(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = $t("svg"), t = $t("rect"), n = $t("rect"), s = $t("rect"), l = $t("rect"), o = $t("line"), r = $t("line"), a = $t("line"), c = $t("line"), K(t, "x", "2"), K(t, "y", "2"), K(t, "width", "5"), K(t, "height", "5"), K(t, "rx", "1"), K(t, "ry", "1"), K(t, "stroke-width", "2"), K(t, "fill", "none"), K(n, "x", "17"), K(n, "y", "2"), K(n, "width", "5"), K(n, "height", "5"), K(n, "rx", "1"), K(n, "ry", "1"), K(n, "stroke-width", "2"), K(n, "fill", "none"), K(s, "x", "2"), K(s, "y", "17"), K(s, "width", "5"), K(s, "height", "5"), K(s, "rx", "1"), K(s, "ry", "1"), K(s, "stroke-width", "2"), K(s, "fill", "none"), K(l, "x", "17"), K(l, "y", "17"), K(l, "width", "5"), K(l, "height", "5"), K(l, "rx", "1"), K(l, "ry", "1"), K(l, "stroke-width", "2"), K(l, "fill", "none"), K(o, "x1", "7.5"), K(o, "y1", "4.5"), K(o, "x2", "16"), K(o, "y2", "4.5"), pn(o, "stroke-width", "2px"), K(r, "x1", "7.5"), K(r, "y1", "19.5"), K(r, "x2", "16"), K(r, "y2", "19.5"), pn(r, "stroke-width", "2px"), K(a, "x1", "4.5"), K(a, "y1", "8"), K(a, "x2", "4.5"), K(a, "y2", "16"), pn(a, "stroke-width", "2px"), K(c, "x1", "19.5"), K(c, "y1", "8"), K(c, "x2", "19.5"), K(c, "y2", "16"), pn(c, "stroke-width", "2px"), K(e, "width", "100%"), K(e, "height", "100%"), K(e, "viewBox", "0 0 24 24"), K(e, "version", "1.1"), K(e, "xmlns", "http://www.w3.org/2000/svg"), K(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), K(e, "xml:space", "preserve"), K(e, "stroke", "currentColor"), pn(e, "fill-rule", "evenodd"), pn(e, "clip-rule", "evenodd"), pn(e, "stroke-linecap", "round"), pn(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      y0(f, e, u), bn(e, t), bn(e, n), bn(e, s), bn(e, l), bn(e, o), bn(e, r), bn(e, a), bn(e, c);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(f) {
      f && v0(e);
    }
  };
}
class S0 extends w0 {
  constructor(e) {
    super(), k0(this, e, null, x0, C0, {});
  }
}
const {
  SvelteComponent: z0,
  append: Hl,
  attr: Ce,
  detach: Vs,
  init: M0,
  insert: Ks,
  noop: nr,
  safe_not_equal: B0,
  svg_element: Nn
} = window.__gradio__svelte__internal;
function W0(i) {
  let e;
  return {
    c() {
      e = Nn("circle"), Ce(e, "cx", "12"), Ce(e, "cy", "7.5"), Ce(e, "r", "2"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "1"), Ce(e, "opacity", "0.3");
    },
    m(t, n) {
      Ks(t, e, n);
    },
    d(t) {
      t && Vs(e);
    }
  };
}
function D0(i) {
  let e, t;
  return {
    c() {
      e = Nn("circle"), t = Nn("circle"), Ce(e, "cx", "12"), Ce(e, "cy", "7.5"), Ce(e, "r", "2.5"), Ce(e, "fill", "currentColor"), Ce(e, "opacity", "0.9"), Ce(t, "cx", "12"), Ce(t, "cy", "7.5"), Ce(t, "r", "1.5"), Ce(t, "fill", "white"), Ce(t, "opacity", "0.6");
    },
    m(n, s) {
      Ks(n, e, s), Ks(n, t, s);
    },
    d(n) {
      n && (Vs(e), Vs(t));
    }
  };
}
function X0(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? D0 : W0
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = Nn("svg"), t = Nn("path"), n = Nn("path"), s = Nn("path"), r.c(), Ce(t, "d", "M9 21h6"), Ce(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Ce(s, "d", "M9 17h6"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "2"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      Ks(a, e, c), Hl(e, t), Hl(e, n), Hl(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: nr,
    o: nr,
    d(a) {
      a && Vs(e), r.d();
    }
  };
}
function Y0(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class E0 extends z0 {
  constructor(e) {
    super(), M0(this, e, Y0, X0, B0, { selected: 1 });
  }
}
const {
  SvelteComponent: R0,
  append: q0,
  attr: Ot,
  detach: L0,
  init: H0,
  insert: I0,
  noop: Il,
  safe_not_equal: P0,
  svg_element: ir
} = window.__gradio__svelte__internal;
function A0(i) {
  let e, t;
  return {
    c() {
      e = ir("svg"), t = ir("circle"), Ot(t, "cx", "12"), Ot(t, "cy", "12"), Ot(t, "r", "10"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Ot(e, "stroke-linecap", "round"), Ot(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      I0(n, e, s), q0(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && L0(e);
    }
  };
}
let T0 = class extends R0 {
  constructor(e) {
    super(), H0(this, e, null, A0, P0, {});
  }
};
const {
  SvelteComponent: F0,
  append: Ii,
  attr: Ie,
  detach: U0,
  init: O0,
  insert: j0,
  noop: Pl,
  safe_not_equal: N0,
  svg_element: ui
} = window.__gradio__svelte__internal;
function V0(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = ui("svg"), t = ui("path"), n = ui("path"), s = ui("path"), l = ui("line"), o = ui("line"), Ie(t, "d", "M3 6h18"), Ie(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), Ie(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), Ie(l, "x1", "10"), Ie(l, "y1", "11"), Ie(l, "x2", "10"), Ie(l, "y2", "17"), Ie(o, "x1", "14"), Ie(o, "y1", "11"), Ie(o, "x2", "14"), Ie(o, "y2", "17"), Ie(e, "xmlns", "http://www.w3.org/2000/svg"), Ie(e, "viewBox", "0 0 24 24"), Ie(e, "fill", "none"), Ie(e, "stroke", "currentColor"), Ie(e, "stroke-width", "2"), Ie(e, "stroke-linecap", "round"), Ie(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      j0(r, e, a), Ii(e, t), Ii(e, n), Ii(e, s), Ii(e, l), Ii(e, o);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(r) {
      r && U0(e);
    }
  };
}
class K0 extends F0 {
  constructor(e) {
    super(), O0(this, e, null, V0, N0, {});
  }
}
const {
  SvelteComponent: Z0,
  append: J0,
  attr: qt,
  detach: G0,
  init: Q0,
  insert: $0,
  noop: Al,
  safe_not_equal: eg,
  set_style: ps,
  svg_element: sr
} = window.__gradio__svelte__internal;
function tg(i) {
  let e, t;
  return {
    c() {
      e = sr("svg"), t = sr("path"), qt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), qt(t, "fill", "none"), qt(t, "stroke-width", "2"), qt(e, "width", "100%"), qt(e, "height", "100%"), qt(e, "viewBox", "0 0 24 24"), qt(e, "version", "1.1"), qt(e, "xmlns", "http://www.w3.org/2000/svg"), qt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), qt(e, "xml:space", "preserve"), qt(e, "stroke", "currentColor"), ps(e, "fill-rule", "evenodd"), ps(e, "clip-rule", "evenodd"), ps(e, "stroke-linecap", "round"), ps(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      $0(n, e, s), J0(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(n) {
      n && G0(e);
    }
  };
}
class ng extends Z0 {
  constructor(e) {
    super(), Q0(this, e, null, tg, eg, {});
  }
}
const {
  SvelteComponent: ig,
  append: sg,
  attr: Lt,
  detach: lg,
  init: og,
  insert: ag,
  noop: Tl,
  safe_not_equal: rg,
  set_style: ws,
  svg_element: lr
} = window.__gradio__svelte__internal;
function cg(i) {
  let e, t;
  return {
    c() {
      e = lr("svg"), t = lr("path"), Lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Lt(t, "fill", "none"), Lt(t, "stroke-width", "2"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "version", "1.1"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Lt(e, "xml:space", "preserve"), Lt(e, "stroke", "currentColor"), ws(e, "fill-rule", "evenodd"), ws(e, "clip-rule", "evenodd"), ws(e, "stroke-linecap", "round"), ws(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      ag(n, e, s), sg(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && lg(e);
    }
  };
}
class fg extends ig {
  constructor(e) {
    super(), og(this, e, null, cg, rg, {});
  }
}
const {
  SvelteComponent: hg,
  append: or,
  attr: en,
  detach: ug,
  init: dg,
  insert: _g,
  noop: Fl,
  safe_not_equal: mg,
  set_style: vs,
  svg_element: Ul
} = window.__gradio__svelte__internal;
function gg(i) {
  let e, t, n;
  return {
    c() {
      e = Ul("svg"), t = Ul("path"), n = Ul("path"), en(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), en(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24"), en(e, "xmlns", "http://www.w3.org/2000/svg"), en(e, "fill", "none"), en(e, "stroke", "currentColor"), en(e, "stroke-width", "2"), vs(e, "fill-rule", "evenodd"), vs(e, "clip-rule", "evenodd"), vs(e, "stroke-linecap", "round"), vs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      _g(s, e, l), or(e, t), or(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(s) {
      s && ug(e);
    }
  };
}
class bg extends hg {
  constructor(e) {
    super(), dg(this, e, null, gg, mg, {});
  }
}
const {
  SvelteComponent: pg,
  append: wg,
  attr: wn,
  detach: vg,
  init: kg,
  insert: yg,
  noop: Ol,
  safe_not_equal: Cg,
  set_style: ks,
  svg_element: ar
} = window.__gradio__svelte__internal;
function xg(i) {
  let e, t;
  return {
    c() {
      e = ar("svg"), t = ar("path"), wn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), wn(e, "width", "100%"), wn(e, "height", "100%"), wn(e, "viewBox", "0 0 24 24"), wn(e, "fill", "none"), wn(e, "stroke", "currentColor"), wn(e, "stroke-width", "2"), ks(e, "fill-rule", "evenodd"), ks(e, "clip-rule", "evenodd"), ks(e, "stroke-linecap", "round"), ks(e, "stroke-linejoin", "round"), wn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      yg(n, e, s), wg(e, t);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(n) {
      n && vg(e);
    }
  };
}
class Sg extends pg {
  constructor(e) {
    super(), kg(this, e, null, xg, Cg, {});
  }
}
const {
  SvelteComponent: zg,
  append: Mg,
  attr: vn,
  detach: Bg,
  init: Wg,
  insert: Dg,
  noop: jl,
  safe_not_equal: Xg,
  set_style: ys,
  svg_element: rr
} = window.__gradio__svelte__internal;
function Yg(i) {
  let e, t;
  return {
    c() {
      e = rr("svg"), t = rr("path"), vn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), vn(e, "width", "100%"), vn(e, "height", "100%"), vn(e, "viewBox", "0 0 24 24"), vn(e, "fill", "none"), vn(e, "stroke", "currentColor"), vn(e, "stroke-width", "2"), ys(e, "fill-rule", "evenodd"), ys(e, "clip-rule", "evenodd"), ys(e, "stroke-linecap", "round"), ys(e, "stroke-linejoin", "round"), vn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      Dg(n, e, s), Mg(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && Bg(e);
    }
  };
}
class Eg extends zg {
  constructor(e) {
    super(), Wg(this, e, null, Yg, Xg, {});
  }
}
const {
  SvelteComponent: Rg,
  append: cr,
  attr: ot,
  detach: qg,
  init: Lg,
  insert: Hg,
  noop: Nl,
  safe_not_equal: Ig,
  set_style: Cs,
  svg_element: Vl
} = window.__gradio__svelte__internal;
function Pg(i) {
  let e, t, n;
  return {
    c() {
      e = Vl("svg"), t = Vl("path"), n = Vl("path"), ot(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), ot(t, "fill", "none"), ot(t, "stroke-width", "2"), ot(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), ot(n, "fill", "none"), ot(n, "stroke-width", "2"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "version", "1.1"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ot(e, "xml:space", "preserve"), ot(e, "stroke", "currentColor"), Cs(e, "fill-rule", "evenodd"), Cs(e, "clip-rule", "evenodd"), Cs(e, "stroke-linecap", "round"), Cs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Hg(s, e, l), cr(e, t), cr(e, n);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(s) {
      s && qg(e);
    }
  };
}
class Ag extends Rg {
  constructor(e) {
    super(), Lg(this, e, null, Pg, Ig, {});
  }
}
const {
  SvelteComponent: Tg,
  append: tn,
  attr: te,
  detach: Fg,
  init: Ug,
  insert: Og,
  noop: Kl,
  safe_not_equal: jg,
  svg_element: jt
} = window.__gradio__svelte__internal;
function Ng(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = jt("svg"), t = jt("path"), n = jt("circle"), s = jt("circle"), l = jt("circle"), o = jt("circle"), r = jt("circle"), a = jt("circle"), c = jt("circle"), f = jt("circle"), te(t, "fill", "none"), te(t, "stroke", "currentColor"), te(t, "stroke-width", "1.5"), te(t, "stroke-linecap", "round"), te(t, "stroke-linejoin", "round"), te(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), te(n, "cx", "7"), te(n, "cy", "7"), te(n, "r", "1.5"), te(n, "fill", "currentColor"), te(s, "cx", "15"), te(s, "cy", "9"), te(s, "r", "1.5"), te(s, "fill", "currentColor"), te(l, "cx", "21"), te(l, "cy", "5"), te(l, "r", "1.5"), te(l, "fill", "currentColor"), te(o, "cx", "25"), te(o, "cy", "13"), te(o, "r", "1.5"), te(o, "fill", "currentColor"), te(r, "cx", "23"), te(r, "cy", "21"), te(r, "r", "1.5"), te(r, "fill", "currentColor"), te(a, "cx", "15"), te(a, "cy", "19"), te(a, "r", "1.5"), te(a, "fill", "currentColor"), te(c, "cx", "9"), te(c, "cy", "23"), te(c, "r", "1.5"), te(c, "fill", "currentColor"), te(f, "cx", "5"), te(f, "cy", "15"), te(f, "r", "1.5"), te(f, "fill", "currentColor"), te(e, "xmlns", "http://www.w3.org/2000/svg"), te(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), te(e, "aria-hidden", "true"), te(e, "role", "img"), te(e, "class", "iconify iconify--carbon"), te(e, "width", "100%"), te(e, "height", "100%"), te(e, "preserveAspectRatio", "xMidYMid meet"), te(e, "viewBox", "0 0 32 32");
    },
    m(u, d) {
      Og(u, e, d), tn(e, t), tn(e, n), tn(e, s), tn(e, l), tn(e, o), tn(e, r), tn(e, a), tn(e, c), tn(e, f);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(u) {
      u && Fg(e);
    }
  };
}
let Vg = class extends Tg {
  constructor(e) {
    super(), Ug(this, e, null, Ng, jg, {});
  }
};
const {
  SvelteComponent: Kg,
  append: Pi,
  attr: de,
  detach: Zg,
  init: Jg,
  insert: Gg,
  noop: Zl,
  safe_not_equal: Qg,
  set_style: xs,
  svg_element: di
} = window.__gradio__svelte__internal;
function $g(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = di("svg"), t = di("circle"), n = di("circle"), s = di("circle"), l = di("circle"), o = di("circle"), de(t, "cx", "12"), de(t, "cy", "12"), de(t, "r", "8"), de(t, "stroke-width", "2"), de(t, "fill", "none"), de(n, "cx", "12"), de(n, "cy", "12"), de(n, "r", "4"), de(n, "stroke-width", "1.5"), de(n, "fill", "none"), de(n, "opacity", "0.5"), de(s, "cx", "8"), de(s, "cy", "8"), de(s, "r", "1"), de(s, "fill", "currentColor"), de(s, "opacity", "0.6"), de(l, "cx", "16"), de(l, "cy", "8"), de(l, "r", "1"), de(l, "fill", "currentColor"), de(l, "opacity", "0.6"), de(o, "cx", "12"), de(o, "cy", "16"), de(o, "r", "1"), de(o, "fill", "currentColor"), de(o, "opacity", "0.6"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "version", "1.1"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), de(e, "xml:space", "preserve"), de(e, "stroke", "currentColor"), xs(e, "fill-rule", "evenodd"), xs(e, "clip-rule", "evenodd"), xs(e, "stroke-linecap", "round"), xs(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Gg(r, e, a), Pi(e, t), Pi(e, n), Pi(e, s), Pi(e, l), Pi(e, o);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(r) {
      r && Zg(e);
    }
  };
}
class e2 extends Kg {
  constructor(e) {
    super(), Jg(this, e, null, $g, Qg, {});
  }
}
const {
  SvelteComponent: t2,
  append: fr,
  attr: _t,
  detach: n2,
  init: i2,
  insert: s2,
  noop: Jl,
  safe_not_equal: l2,
  set_style: Ss,
  svg_element: Gl
} = window.__gradio__svelte__internal;
function o2(i) {
  let e, t, n;
  return {
    c() {
      e = Gl("svg"), t = Gl("path"), n = Gl("path"), _t(t, "d", "M3 7v6h6"), _t(t, "stroke-width", "2"), _t(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), _t(n, "stroke-width", "2"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "version", "1.1"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _t(e, "xml:space", "preserve"), _t(e, "stroke", "currentColor"), _t(e, "fill", "none"), Ss(e, "fill-rule", "evenodd"), Ss(e, "clip-rule", "evenodd"), Ss(e, "stroke-linecap", "round"), Ss(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      s2(s, e, l), fr(e, t), fr(e, n);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(s) {
      s && n2(e);
    }
  };
}
class a2 extends t2 {
  constructor(e) {
    super(), i2(this, e, null, o2, l2, {});
  }
}
const {
  SvelteComponent: r2,
  append: hr,
  attr: mt,
  detach: c2,
  init: f2,
  insert: h2,
  noop: Ql,
  safe_not_equal: u2,
  set_style: zs,
  svg_element: $l
} = window.__gradio__svelte__internal;
function d2(i) {
  let e, t, n;
  return {
    c() {
      e = $l("svg"), t = $l("path"), n = $l("path"), mt(t, "d", "M21 7v6h-6"), mt(t, "stroke-width", "2"), mt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), mt(n, "stroke-width", "2"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "version", "1.1"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), mt(e, "xml:space", "preserve"), mt(e, "stroke", "currentColor"), mt(e, "fill", "none"), zs(e, "fill-rule", "evenodd"), zs(e, "clip-rule", "evenodd"), zs(e, "stroke-linecap", "round"), zs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      h2(s, e, l), hr(e, t), hr(e, n);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(s) {
      s && c2(e);
    }
  };
}
class _2 extends r2 {
  constructor(e) {
    super(), f2(this, e, null, d2, u2, {});
  }
}
const {
  SvelteComponent: m2,
  append: g2,
  attr: Ht,
  detach: b2,
  init: p2,
  insert: w2,
  noop: eo,
  safe_not_equal: v2,
  set_style: ur,
  svg_element: dr
} = window.__gradio__svelte__internal;
function k2(i) {
  let e, t;
  return {
    c() {
      e = dr("svg"), t = dr("path"), Ht(t, "d", "M7 10l5 5 5-5z"), Ht(t, "stroke", "none"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24"), Ht(e, "version", "1.1"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ht(e, "xml:space", "preserve"), Ht(e, "stroke", "currentColor"), Ht(e, "fill", "currentColor"), ur(e, "fill-rule", "evenodd"), ur(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      w2(n, e, s), g2(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && b2(e);
    }
  };
}
class y2 extends m2 {
  constructor(e) {
    super(), p2(this, e, null, k2, v2, {});
  }
}
const {
  SvelteComponent: C2,
  append: _r,
  attr: to,
  bubble: mr,
  create_component: x2,
  destroy_component: S2,
  detach: ef,
  element: gr,
  init: z2,
  insert: tf,
  listen: no,
  mount_component: M2,
  run_all: B2,
  safe_not_equal: W2,
  set_data: D2,
  set_input_value: br,
  space: X2,
  text: Y2,
  transition_in: E2,
  transition_out: R2
} = window.__gradio__svelte__internal, { createEventDispatcher: q2, afterUpdate: L2 } = window.__gradio__svelte__internal;
function H2(i) {
  let e;
  return {
    c() {
      e = Y2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      tf(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && D2(
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
function I2(i) {
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
      $$slots: { default: [H2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = gr("label"), x2(t.$$.fragment), n = X2(), s = gr("input"), to(s, "type", "color"), s.disabled = /*disabled*/
      i[3], to(s, "class", "svelte-16l8u73"), to(e, "class", "block");
    },
    m(a, c) {
      tf(a, e, c), M2(t, e, null), _r(e, n), _r(e, s), br(
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
      l || (E2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      R2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && ef(e), S2(t), o = !1, B2(r);
    }
  };
}
function P2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = q2();
  function f() {
    c("change", n), s || c("input");
  }
  L2(() => {
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
class A2 extends C2 {
  constructor(e) {
    super(), z2(this, e, P2, I2, W2, {
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
  SvelteComponent: T2,
  append: nf,
  attr: We,
  bubble: F2,
  check_outros: U2,
  create_slot: sf,
  detach: is,
  element: fl,
  empty: O2,
  get_all_dirty_from_scope: lf,
  get_slot_changes: of,
  group_outros: j2,
  init: N2,
  insert: ss,
  listen: V2,
  safe_not_equal: K2,
  set_style: rt,
  space: af,
  src_url_equal: Zs,
  toggle_class: ki,
  transition_in: Js,
  transition_out: Gs,
  update_slot_base: rf
} = window.__gradio__svelte__internal;
function Z2(i) {
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
      e = fl("button"), r && r.c(), t = af(), c && c.c(), We(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), We(
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
      ss(f, e, u), r && r.m(e, null), nf(e, t), c && c.m(e, null), s = !0, l || (o = V2(
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
      f[1].join(" ") + " svelte-8huxfn")) && We(e, "class", n), (!s || u & /*elem_id*/
      1) && We(
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
function J2(i) {
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
      e = fl("a"), l && l.c(), t = af(), r && r.c(), We(
        e,
        "href",
        /*link*/
        i[6]
      ), We(e, "rel", "noopener noreferrer"), We(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), We(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), We(
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
      64) && We(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && We(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && We(e, "class", n), (!s || c & /*elem_id*/
      1) && We(
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
      e = fl("img"), We(e, "class", "button-icon svelte-8huxfn"), Zs(e.src, t = /*icon*/
      i[7].url) || We(e, "src", t), We(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ss(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Zs(e.src, t = /*icon*/
      s[7].url) && We(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && We(e, "alt", n);
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
      e = fl("img"), We(e, "class", "button-icon svelte-8huxfn"), Zs(e.src, t = /*icon*/
      i[7].url) || We(e, "src", t), We(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ss(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Zs(e.src, t = /*icon*/
      s[7].url) && We(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && We(e, "alt", n);
    },
    d(s) {
      s && is(e);
    }
  };
}
function G2(i) {
  let e, t, n, s;
  const l = [J2, Z2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = O2();
    },
    m(a, c) {
      o[e].m(a, c), ss(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (j2(), Gs(o[f], 1, 1, () => {
        o[f] = null;
      }), U2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Js(t, 1), t.m(n.parentNode, n));
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
function Q2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: m = !1 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e;
  function p(h) {
    F2.call(this, i, h);
  }
  return i.$$set = (h) => {
    "elem_id" in h && t(0, l = h.elem_id), "elem_classes" in h && t(1, o = h.elem_classes), "visible" in h && t(2, r = h.visible), "variant" in h && t(3, a = h.variant), "size" in h && t(4, c = h.size), "value" in h && t(5, f = h.value), "link" in h && t(6, u = h.link), "icon" in h && t(7, d = h.icon), "disabled" in h && t(8, m = h.disabled), "scale" in h && t(9, b = h.scale), "min_width" in h && t(10, g = h.min_width), "$$scope" in h && t(11, s = h.$$scope);
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
class ko extends T2 {
  constructor(e) {
    super(), N2(this, e, Q2, G2, K2, {
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
  SvelteComponent: $2,
  add_render_callback: cf,
  append: Ms,
  attr: pt,
  binding_callbacks: vr,
  check_outros: eb,
  create_bidirectional_transition: kr,
  destroy_each: tb,
  detach: Gi,
  element: Qs,
  empty: nb,
  ensure_array_like: yr,
  group_outros: ib,
  init: sb,
  insert: Qi,
  listen: yo,
  prevent_default: lb,
  run_all: ob,
  safe_not_equal: ab,
  set_data: rb,
  set_style: _i,
  space: Co,
  text: cb,
  toggle_class: Nt,
  transition_in: io,
  transition_out: Cr
} = window.__gradio__svelte__internal, { createEventDispatcher: fb } = window.__gradio__svelte__internal;
function xr(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Sr(i) {
  let e, t, n, s, l, o = yr(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = zr(xr(i, o, a));
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
      i[22](e), n = !0, s || (l = yo(e, "mousedown", lb(
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
          const u = xr(a, o, f);
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
      a && Gi(e), tb(r, a), i[22](null), a && t && t.end(), s = !1, l();
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
      e = Qs("li"), t = Qs("span"), t.textContent = "✓", n = Co(), l = cb(s), o = Co(), pt(t, "class", "inner-item svelte-yuohum"), Nt(t, "hide", !/*selected_indices*/
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
      )), Nt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), Nt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Nt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Nt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, u) {
      Qi(f, e, u), Ms(e, t), Ms(e, n), Ms(e, l), Ms(e, o);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && Nt(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && rb(l, s), u & /*filtered_indices*/
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
      18 && Nt(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && Nt(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && Nt(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && Nt(
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
    i[3] && Sr(i)
  );
  return {
    c() {
      e = Qs("div"), t = Co(), o && o.c(), n = nb(), pt(e, "class", "reference");
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
      12 && io(o, 1)) : (o = Sr(r), o.c(), io(o, 1), o.m(n.parentNode, n)) : o && (ib(), Cr(o, 1, 1, () => {
        o = null;
      }), eb());
    },
    i(r) {
      io(o);
    },
    o(r) {
      Cr(o);
    },
    d(r) {
      r && (Gi(e), Gi(t), Gi(n)), i[20](null), o && o.d(r), s = !1, ob(l);
    }
  };
}
function ub(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, d, m, b, g, p, h, v, w;
  function y() {
    const { top: x, bottom: P } = g.getBoundingClientRect();
    t(16, u = x), t(17, d = w - P);
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
  const M = fb();
  function z() {
    t(11, w = window.innerHeight);
  }
  function X(x) {
    vr[x ? "unshift" : "push"](() => {
      g = x, t(6, g);
    });
  }
  const W = (x) => M("change", x);
  function B(x) {
    vr[x ? "unshift" : "push"](() => {
      p = x, t(7, p);
    });
  }
  return i.$$set = (x) => {
    "choices" in x && t(0, l = x.choices), "filtered_indices" in x && t(1, o = x.filtered_indices), "show_options" in x && t(2, r = x.show_options), "disabled" in x && t(3, a = x.disabled), "selected_indices" in x && t(4, c = x.selected_indices), "active_index" in x && t(5, f = x.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (p && c.length > 0) {
          let P = p.querySelectorAll("li");
          for (const U of Array.from(P))
            if (U.getAttribute("data-index") === c[0].toString()) {
              t(14, n = p == null ? void 0 : p.scrollTo) === null || n === void 0 || n.call(p, 0, U.offsetTop);
              break;
            }
        }
        y();
        const x = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, m = (x == null ? void 0 : x.height) || 0), t(8, b = (x == null ? void 0 : x.width) || 0);
      }
      d > u ? (t(10, v = d), t(9, h = null)) : (t(9, h = `${d + m}px`), t(10, v = u - m));
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
    h,
    v,
    w,
    C,
    M,
    n,
    s,
    u,
    d,
    m,
    z,
    X,
    W,
    B
  ];
}
class db extends $2 {
  constructor(e) {
    super(), sb(this, e, ub, hb, ab, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function _b(i, e) {
  return (i % e + e) % e;
}
function Mr(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function mb(i, e, t) {
  i("change", e), t || i("input");
}
function gb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[_b(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: bb,
  append: qn,
  attr: bt,
  binding_callbacks: pb,
  check_outros: wb,
  create_component: xo,
  destroy_component: So,
  detach: Po,
  element: bi,
  group_outros: vb,
  init: kb,
  insert: Ao,
  listen: xn,
  mount_component: zo,
  noop: yb,
  run_all: Cb,
  safe_not_equal: xb,
  set_data: Sb,
  set_input_value: Br,
  space: so,
  text: zb,
  toggle_class: mi,
  transition_in: pi,
  transition_out: Vi
} = window.__gradio__svelte__internal, { onMount: Mb } = window.__gradio__svelte__internal, { createEventDispatcher: Bb, afterUpdate: Wb } = window.__gradio__svelte__internal;
function Db(i) {
  let e;
  return {
    c() {
      e = zb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Ao(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Sb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Po(e);
    }
  };
}
function Wr(i) {
  let e, t, n, s, l;
  return t = new Xo({}), {
    c() {
      e = bi("div"), xo(t.$$.fragment), bt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      Ao(o, e, r), zo(t, e, null), n = !0, s || (l = xn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: yb,
    i(o) {
      n || (pi(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Vi(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Po(e), So(t), s = !1, l();
    }
  };
}
function Xb(i) {
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
      $$slots: { default: [Db] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && Wr(i);
  return u = new db({
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
      e = bi("div"), xo(t.$$.fragment), n = so(), s = bi("div"), l = bi("div"), o = bi("div"), r = bi("input"), c = so(), g && g.c(), f = so(), xo(u.$$.fragment), bt(r, "role", "listbox"), bt(r, "aria-controls", "dropdown-options"), bt(
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
    m(p, h) {
      Ao(p, e, h), zo(t, e, null), qn(e, n), qn(e, s), qn(s, l), qn(l, o), qn(o, r), Br(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), qn(o, c), g && g.m(o, null), qn(s, f), zo(u, s, null), d = !0, m || (b = [
        xn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        xn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        xn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        xn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        xn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        xn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        xn(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], m = !0);
    },
    p(p, h) {
      const v = {};
      h[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      p[4]), h[0] & /*info*/
      2 && (v.info = /*info*/
      p[1]), h[0] & /*label*/
      1 | h[1] & /*$$scope*/
      16 && (v.$$scope = { dirty: h, ctx: p }), t.$set(v), (!d || h[0] & /*show_options*/
      4096) && bt(
        r,
        "aria-expanded",
        /*show_options*/
        p[12]
      ), (!d || h[0] & /*label*/
      1) && bt(
        r,
        "aria-label",
        /*label*/
        p[0]
      ), (!d || h[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      p[3]), (!d || h[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      p[7])) && (r.readOnly = a), h[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      p[9] && Br(
        r,
        /*input_text*/
        p[9]
      ), (!d || h[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && mi(r, "subdued", !/*choices_names*/
      p[13].includes(
        /*input_text*/
        p[9]
      ) && !/*allow_custom_value*/
      p[6]), /*disabled*/
      p[3] ? g && (vb(), Vi(g, 1, 1, () => {
        g = null;
      }), wb()) : g ? (g.p(p, h), h[0] & /*disabled*/
      8 && pi(g, 1)) : (g = Wr(p), g.c(), pi(g, 1), g.m(o, null)), (!d || h[0] & /*show_options*/
      4096) && mi(
        l,
        "show_options",
        /*show_options*/
        p[12]
      );
      const w = {};
      h[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      p[12]), h[0] & /*choices*/
      4 && (w.choices = /*choices*/
      p[2]), h[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      p[10]), h[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      p[3]), h[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      p[11] === null ? [] : [
        /*selected_index*/
        p[11]
      ]), h[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      p[14]), u.$set(w), (!d || h[0] & /*container*/
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
      Vi(t.$$.fragment, p), Vi(g), Vi(u.$$.fragment, p), d = !1;
    },
    d(p) {
      p && Po(e), So(t), i[31](null), g && g.d(), So(u), m = !1, Cb(b);
    }
  };
}
function Yb(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: m = !1 } = e, { filterable: b = !0 } = e, g, p = !1, h, v, w = "", y = "", k = !1, C = [], M = null, z = null, X;
  const W = Bb();
  l ? (X = a.map((L) => L[1]).indexOf(l), z = X, z === -1 ? (o = l, z = null) : ([w, o] = a[z], y = w), x()) : a.length > 0 && (X = 0, z = 0, [w, l] = a[z], o = l, y = w);
  function B() {
    t(13, h = a.map((L) => L[0])), t(26, v = a.map((L) => L[1]));
  }
  function x() {
    B(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, z = null)) : v.includes(l) ? (t(9, w = h[v.indexOf(l)]), t(11, z = v.indexOf(l))) : m ? (t(9, w = l), t(11, z = null)) : (t(9, w = ""), t(11, z = null)), t(29, X = z);
  }
  function P(L) {
    if (t(11, z = parseInt(L.detail.target.dataset.index)), isNaN(z)) {
      t(11, z = null);
      return;
    }
    t(12, p = !1), t(14, M = null), g.blur();
  }
  function U(L) {
    t(10, C = a.map((oe, se) => se)), t(12, p = !0), W("focus");
  }
  function j() {
    f || (g.focus(), t(12, p = !0));
  }
  function O(L) {
    L.preventDefault(), f || (g.focus(), t(12, p = !p));
  }
  function q() {
    m ? t(22, l = w) : t(9, w = h[v.indexOf(l)]), t(12, p = !1), t(14, M = null), W("blur");
  }
  function R(L) {
    t(12, [p, M] = gb(L, M, C), p, (t(14, M), t(2, a), t(25, c), t(6, m), t(9, w), t(10, C), t(8, g), t(27, y), t(11, z), t(29, X), t(28, k), t(26, v))), L.key === "Enter" && (M !== null ? (t(11, z = M), t(12, p = !1), g.blur(), t(14, M = null)) : h.includes(w) ? (t(11, z = h.indexOf(w)), t(12, p = !1), t(14, M = null), g.blur()) : m && (t(22, l = w), t(11, z = null), t(12, p = !1), t(14, M = null), g.blur()), W("enter", l));
  }
  Wb(() => {
    t(23, r = !1), t(28, k = !0);
  }), Mb(() => {
  });
  function ee() {
    w = this.value, t(9, w), t(11, z), t(29, X), t(28, k), t(2, a), t(26, v);
  }
  function Q(L) {
    pb[L ? "unshift" : "push"](() => {
      g = L, t(8, g);
    });
  }
  const T = (L) => W("key_up", { key: L.key, input_value: w });
  return i.$$set = (L) => {
    "label" in L && t(0, n = L.label), "info" in L && t(1, s = L.info), "value" in L && t(22, l = L.value), "value_is_output" in L && t(23, r = L.value_is_output), "choices" in L && t(2, a = L.choices), "disabled" in L && t(3, f = L.disabled), "show_label" in L && t(4, u = L.show_label), "container" in L && t(5, d = L.container), "allow_custom_value" in L && t(6, m = L.allow_custom_value), "filterable" in L && t(7, b = L.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && z !== X && z !== null && k && (t(9, [w, l] = a[z], w, (t(22, l), t(11, z), t(29, X), t(28, k), t(2, a), t(26, v))), t(29, X = z), W("select", {
      index: z,
      value: v[z],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (x(), mb(W, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && B(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (m || x(), t(25, c = a), t(10, C = Mr(a, w)), !m && C.length > 0 && t(14, M = C[0]), g == document.activeElement && t(12, p = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && w !== y && (t(10, C = Mr(a, w)), t(27, y = w), !m && C.length > 0 && t(14, M = C[0]));
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
    w,
    C,
    z,
    p,
    h,
    M,
    W,
    P,
    U,
    j,
    O,
    q,
    R,
    l,
    r,
    o,
    c,
    v,
    y,
    k,
    X,
    ee,
    Q,
    T
  ];
}
class Eb extends bb {
  constructor(e) {
    super(), kb(
      this,
      e,
      Yb,
      Xb,
      xb,
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
  SvelteComponent: Rb,
  append: xt,
  attr: yi,
  check_outros: Mo,
  create_component: Vn,
  destroy_component: Kn,
  detach: Ei,
  element: Kt,
  group_outros: Bo,
  init: qb,
  insert: Ri,
  listen: Lb,
  mount_component: Zn,
  safe_not_equal: Hb,
  set_style: Ci,
  space: Ai,
  text: To,
  toggle_class: Dr,
  transition_in: nt,
  transition_out: wt
} = window.__gradio__svelte__internal, { createEventDispatcher: Ib } = window.__gradio__svelte__internal, { onMount: Pb, onDestroy: Ab } = window.__gradio__svelte__internal;
function Xr(i) {
  let e, t, n, s, l, o, r;
  const a = [Fb, Tb], c = [];
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
      Ri(u, e, d), xt(e, t), c[n].m(t, null), l = !0, o || (r = Lb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, d) {
      let m = n;
      n = f(u), n !== m && (Bo(), wt(c[m], 1, 1, () => {
        c[m] = null;
      }), Mo(), s = c[n], s || (s = c[n] = a[n](u), s.c()), nt(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
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
function Tb(i) {
  let e, t;
  return e = new Eg({}), {
    c() {
      Vn(e.$$.fragment);
    },
    m(n, s) {
      Zn(e, n, s), t = !0;
    },
    i(n) {
      t || (nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kn(e, n);
    }
  };
}
function Fb(i) {
  let e, t;
  return e = new Sg({}), {
    c() {
      Vn(e.$$.fragment);
    },
    m(n, s) {
      Zn(e, n, s), t = !0;
    },
    i(n) {
      t || (nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kn(e, n);
    }
  };
}
function Ub(i) {
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
      $$slots: { default: [Ob] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Kt("div"), Vn(t.$$.fragment), Ci(e, "margin-right", "8px");
    },
    m(s, l) {
      Ri(s, e, l), Zn(t, e, null), n = !0;
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
      s && Ei(e), Kn(t);
    }
  };
}
function Ob(i) {
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
function jb(i) {
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
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, h, v = !/*showRemove*/
  i[4] && Xr(i);
  o = new Eb({
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
  ), c = new A2({
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
      $$slots: { default: [Ub] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let w = (
    /*showRemove*/
    i[4] && Yr(i)
  );
  return p = new ko({
    props: {
      variant: "primary",
      $$slots: { default: [jb] },
      $$scope: { ctx: i }
    }
  }), p.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Kt("div"), t = Kt("div"), n = Kt("span"), v && v.c(), s = Ai(), l = Kt("div"), Vn(o.$$.fragment), r = Ai(), a = Kt("div"), Vn(c.$$.fragment), f = Ai(), u = Kt("div"), Vn(d.$$.fragment), m = Ai(), w && w.c(), b = Ai(), g = Kt("div"), Vn(p.$$.fragment), Ci(l, "margin-right", "10px"), Ci(a, "margin-right", "40px"), Ci(a, "margin-bottom", "8px"), Ci(u, "margin-right", "8px"), yi(n, "class", "model-content svelte-d9x7u0"), yi(t, "class", "modal-container svelte-d9x7u0"), yi(e, "class", "modal svelte-d9x7u0"), yi(e, "id", "model-box-edit");
    },
    m(y, k) {
      Ri(y, e, k), xt(e, t), xt(t, n), v && v.m(n, null), xt(n, s), xt(n, l), Zn(o, l, null), xt(n, r), xt(n, a), Zn(c, a, null), xt(n, f), xt(n, u), Zn(d, u, null), xt(n, m), w && w.m(n, null), xt(n, b), xt(n, g), Zn(p, g, null), h = !0;
    },
    p(y, [k]) {
      /*showRemove*/
      y[4] ? v && (Bo(), wt(v, 1, 1, () => {
        v = null;
      }), Mo()) : v ? (v.p(y, k), k & /*showRemove*/
      16 && nt(v, 1)) : (v = Xr(y), v.c(), nt(v, 1), v.m(n, s));
      const C = {};
      k & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      y[0]), k & /*choices*/
      8 && (C.choices = /*choices*/
      y[3]), o.$set(C);
      const M = {};
      k & /*currentColor*/
      2 && (M.value = /*currentColor*/
      y[1]), c.$set(M);
      const z = {};
      k & /*$$scope*/
      262144 && (z.$$scope = { dirty: k, ctx: y }), d.$set(z), /*showRemove*/
      y[4] ? w ? (w.p(y, k), k & /*showRemove*/
      16 && nt(w, 1)) : (w = Yr(y), w.c(), nt(w, 1), w.m(n, b)) : w && (Bo(), wt(w, 1, 1, () => {
        w = null;
      }), Mo());
      const X = {};
      k & /*$$scope*/
      262144 && (X.$$scope = { dirty: k, ctx: y }), p.$set(X);
    },
    i(y) {
      h || (nt(v), nt(o.$$.fragment, y), nt(c.$$.fragment, y), nt(d.$$.fragment, y), nt(w), nt(p.$$.fragment, y), h = !0);
    },
    o(y) {
      wt(v), wt(o.$$.fragment, y), wt(c.$$.fragment, y), wt(d.$$.fragment, y), wt(w), wt(p.$$.fragment, y), h = !1;
    },
    d(y) {
      y && Ei(e), v && v.d(), Kn(o), Kn(c), Kn(d), w && w.d(), Kn(p);
    }
  };
}
function Vb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = Ib();
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
    let M = C;
    Number.isInteger(M) ? (Array.isArray(o) && M < o.length && t(1, a = o[M]), Array.isArray(l) && M < l.length && t(0, s = l[M][0])) : t(0, s = M);
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
  function h(k) {
    switch (k.key) {
      case "Enter":
        d(1);
        break;
    }
  }
  Pb(() => {
    document.addEventListener("keydown", h), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : ""));
  }), Ab(() => {
    document.removeEventListener("keydown", h);
  });
  const v = () => d(0), w = () => d(-1), y = () => d(1);
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
    v,
    w,
    y
  ];
}
class Fo extends Rb {
  constructor(e) {
    super(), qb(this, e, Vb, Nb, Hb, {
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
  SvelteComponent: Kb,
  append: Se,
  attr: be,
  detach: ff,
  element: Oe,
  empty: Zb,
  init: Jb,
  insert: hf,
  listen: Vt,
  noop: Er,
  run_all: Gb,
  safe_not_equal: Qb,
  set_data: $b,
  set_input_value: Bs,
  set_style: Ws,
  space: kn,
  text: Rr,
  to_number: Wo
} = window.__gradio__svelte__internal, { createEventDispatcher: ep } = window.__gradio__svelte__internal;
function qr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, h, v, w, y, k, C, M, z, X, W, B, x, P;
  return {
    c() {
      e = Oe("div"), t = Oe("div"), n = Oe("div"), s = Oe("h3"), s.textContent = "Eraser Settings", l = kn(), o = Oe("button"), o.textContent = "×", r = kn(), a = Oe("div"), c = Oe("div"), f = Oe("label"), f.textContent = "Eraser Size:", u = kn(), d = Oe("div"), m = Oe("input"), b = kn(), g = Oe("input"), p = kn(), h = Oe("div"), v = Oe("div"), w = kn(), y = Oe("span"), k = Rr(
        /*tempSize*/
        i[1]
      ), C = Rr("px"), M = kn(), z = Oe("div"), X = Oe("button"), X.textContent = "Cancel", W = kn(), B = Oe("button"), B.textContent = "Apply", be(s, "id", "eraser-settings-title"), be(s, "class", "svelte-a42w5h"), be(o, "class", "close-button svelte-a42w5h"), be(o, "aria-label", "Close"), be(n, "class", "modal-header svelte-a42w5h"), be(f, "for", "eraser-size"), be(f, "class", "svelte-a42w5h"), be(m, "id", "eraser-size"), be(m, "type", "range"), be(m, "min", "1"), be(m, "max", "50"), be(m, "class", "size-slider svelte-a42w5h"), be(g, "type", "number"), be(g, "min", "1"), be(g, "max", "50"), be(g, "class", "size-input svelte-a42w5h"), be(d, "class", "size-controls svelte-a42w5h"), be(v, "class", "preview-circle svelte-a42w5h"), Ws(v, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Ws(v, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), be(y, "class", "size-label svelte-a42w5h"), be(h, "class", "size-preview svelte-a42w5h"), be(c, "class", "setting-group svelte-a42w5h"), be(a, "class", "modal-body svelte-a42w5h"), be(X, "class", "button secondary svelte-a42w5h"), be(B, "class", "button primary svelte-a42w5h"), be(z, "class", "modal-footer svelte-a42w5h"), be(t, "class", "modal-content svelte-a42w5h"), be(e, "class", "modal-backdrop svelte-a42w5h"), be(e, "role", "dialog"), be(e, "aria-modal", "true"), be(e, "aria-labelledby", "eraser-settings-title");
    },
    m(U, j) {
      hf(U, e, j), Se(e, t), Se(t, n), Se(n, s), Se(n, l), Se(n, o), Se(t, r), Se(t, a), Se(a, c), Se(c, f), Se(c, u), Se(c, d), Se(d, m), Bs(
        m,
        /*tempSize*/
        i[1]
      ), Se(d, b), Se(d, g), Bs(
        g,
        /*tempSize*/
        i[1]
      ), Se(c, p), Se(c, h), Se(h, v), Se(h, w), Se(h, y), Se(y, k), Se(y, C), Se(t, M), Se(t, z), Se(z, X), Se(z, W), Se(z, B), x || (P = [
        Vt(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        Vt(
          m,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        Vt(
          m,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        Vt(
          m,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        Vt(
          g,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        Vt(
          g,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        Vt(
          X,
          "click",
          /*handleClose*/
          i[3]
        ),
        Vt(
          B,
          "click",
          /*click_handler*/
          i[9]
        ),
        Vt(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        Vt(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], x = !0);
    },
    p(U, j) {
      j & /*tempSize*/
      2 && Bs(
        m,
        /*tempSize*/
        U[1]
      ), j & /*tempSize*/
      2 && Wo(g.value) !== /*tempSize*/
      U[1] && Bs(
        g,
        /*tempSize*/
        U[1]
      ), j & /*tempSize*/
      2 && Ws(v, "width", Math.min(
        /*tempSize*/
        U[1],
        30
      ) + "px"), j & /*tempSize*/
      2 && Ws(v, "height", Math.min(
        /*tempSize*/
        U[1],
        30
      ) + "px"), j & /*tempSize*/
      2 && $b(
        k,
        /*tempSize*/
        U[1]
      );
    },
    d(U) {
      U && ff(e), x = !1, Gb(P);
    }
  };
}
function tp(i) {
  let e, t = (
    /*visible*/
    i[0] && qr(i)
  );
  return {
    c() {
      t && t.c(), e = Zb();
    },
    m(n, s) {
      t && t.m(n, s), hf(n, e, s);
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
function np(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = ep();
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
    o = Wo(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = Wo(this.value), t(1, o), t(0, s), t(6, n);
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
class ip extends Kb {
  constructor(e) {
    super(), Jb(this, e, np, tp, Qb, { eraserSize: 6, visible: 0 });
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
const Pe = (i, e, t) => Math.min(Math.max(i, e), t);
class In {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d, m = "rgb(255, 255, 255)", b = 0.5, g = 25, p = 8, h = 2, v = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (y) => {
      if (this.isDragging) {
        let k = (y.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, C = (y.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = Pe(k, -this._xmin, M - this._xmax), C = Pe(C, -this._ymin, z - this._ymax), this._xmin += k, this._ymin += C, this._xmax += k, this._ymax += C, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (y) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(y.clientX, y.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, C = (C - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (y) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Pe(this._xmin, 0, k - this.minSize), this._ymin = Pe(this._ymin, 0, C - this.minSize), this._xmax = Pe(this._xmax, this.minSize, k), this._ymax = Pe(this._ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > C ? (this._ymin -= this._ymax - C, this._ymax = C) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (y) => {
      if (this.isResizing) {
        const k = y.clientX, C = y.clientY, M = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (C - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, X = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, W = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += M, this._ymin += z, this._xmin = Pe(this._xmin, 0, this._xmax - this.minSize), this._ymin = Pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += M, this._ymin += z, this._xmax = Pe(this._xmax, this._xmin + this.minSize, X), this._ymin = Pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += M, this._ymax += z, this._xmax = Pe(this._xmax, this._xmin + this.minSize, X), this._ymax = Pe(this._ymax, this._ymin + this.minSize, W);
            break;
          case 3:
            this._xmin += M, this._ymax += z, this._xmin = Pe(this._xmin, 0, this._xmax - this.minSize), this._ymax = Pe(this._ymax, this._ymin + this.minSize, W);
            break;
          case 4:
            this._ymin += z, this._ymin = Pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += M, this._xmax = Pe(this._xmax, this._xmin + this.minSize, X);
            break;
          case 6:
            this._ymax += z, this._ymax = Pe(this._ymax, this._ymin + this.minSize, W);
            break;
          case 7:
            this._xmin += M, this._xmin = Pe(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = w, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = p, this.thickness = h, this.selectedThickness = v, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = b, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
class Pn {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d = "rgb(255, 255, 255)", m = 0.5, b = 25, g = 8, p = 2, h = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (w) => {
      if (this.isDragging) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = w.clientX - k.left, M = w.clientY - k.top, [z, X] = this.toBoxCoordinates(C, M);
          let W = z - this.offsetMouseX, B = X - this.offsetMouseY;
          const x = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, P = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          W = Lr(W, this._radius, x - this._radius), B = Lr(B, this._radius, P - this._radius), this._centerX = W, this._centerY = B, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (w) => {
      if (this.isCreating) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = (w.clientX - k.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, M = (w.clientY - k.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, z = C - this.offsetMouseX, X = M - this.offsetMouseY, W = Math.sqrt(z * z + X * X);
          this._radius = Math.max(W, 5), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (w) => {
      if (this.isResizing) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = w.clientX - k.left, M = w.clientY - k.top, [z, X] = this.toBoxCoordinates(C, M), W = Math.sqrt(
            Math.pow(z - this._centerX, 2) + Math.pow(X - this._centerY, 2)
          );
          this._radius = Math.max(W, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = v, this.label = a, this.isDragging = !1, this.isCreating = !1, this._centerX = c, this._centerY = f, this._radius = u, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = p, this.selectedThickness = h, this.resizingHandleIndex = -1, this.minSize = b, this.color = d, this.alpha = m, this.applyUserScale(), this.updateHandles();
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
class Sn {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, d = 8, m = 2, b = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (p) => {
      if (this.isDragging && this._points.length > 0) {
        let h = (p.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (p.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        h = Math.max(-this._xmin, Math.min(h, w - this._xmax)), v = Math.max(-this._ymin, Math.min(v, y - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + h,
          y: k.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (p) => {
      if (this.isCreating) {
        const h = document.querySelector("canvas");
        if (h) {
          const v = h.getBoundingClientRect(), w = (p.clientX - v.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, y = (p.clientY - v.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, k = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(w - k.x, 2) + Math.pow(y - k.y, 2)) > 2 && (this._points.push({ x: w, y }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (p) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const h = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((w) => ({
          x: Math.max(0, Math.min(w.x, h)),
          y: Math.max(0, Math.min(w.y, v))
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
        const h = p.clientX, v = p.clientY, w = (h - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, y = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = this._xmax - this._xmin, C = this._ymax - this._ymin;
        let M = this._xmin, z = this._ymin, X = this._xmax, W = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            M = this._xmin + w, z = this._ymin + y;
            break;
          case 1:
            X = this._xmax + w, z = this._ymin + y;
            break;
          case 2:
            X = this._xmax + w, W = this._ymax + y;
            break;
          case 3:
            M = this._xmin + w, W = this._ymax + y;
            break;
          case 4:
            z = this._ymin + y;
            break;
          case 5:
            X = this._xmax + w;
            break;
          case 6:
            W = this._ymax + y;
            break;
          case 7:
            M = this._xmin + w;
            break;
        }
        const B = (X - M) / k, x = (W - z) / C;
        this._points = this._points.map((P) => ({
          x: M + (P.x - this._xmin) * B,
          y: z + (P.y - this._ymin) * x
        })), this.updateBoundingBox(), this.renderCallBack();
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
        let h = (p.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (p.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        h = Math.max(-this._xmin, Math.min(h, w - this._xmax)), v = Math.max(-this._ymin, Math.min(v, y - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + h,
          y: k.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (p) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (p) => {
      this.isCreating && p.code === "Space" && this._points.length >= this.minPoints && (p.preventDefault(), this.finishCreating());
    }, this.handleResize = (p) => {
      if (this.isResizing && this._points.length > 0) {
        const h = p.clientX, v = p.clientY, w = (h - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, y = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = this._xmax - this._xmin, C = this._ymax - this._ymin;
        let M = this._xmin, z = this._ymin, X = this._xmax, W = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            M = this._xmin + w, z = this._ymin + y;
            break;
          case 1:
            X = this._xmax + w, z = this._ymin + y;
            break;
          case 2:
            X = this._xmax + w, W = this._ymax + y;
            break;
          case 3:
            M = this._xmin + w, W = this._ymax + y;
            break;
          case 4:
            z = this._ymin + y;
            break;
          case 5:
            X = this._xmax + w;
            break;
          case 6:
            W = this._ymax + y;
            break;
          case 7:
            M = this._xmin + w;
            break;
        }
        const B = (X - M) / k, x = (W - z) / C;
        this._points = this._points.map((P) => ({
          x: M + (P.x - this._xmin) * B,
          y: z + (P.y - this._ymin) * x
        })), this.updateBoundingBox(), this.renderCallBack();
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
class sp {
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
    return e instanceof In ? this.eraseFromBox(e, n) : e instanceof Pn ? this.eraseFromCircle(e, n) : e instanceof Sn ? this.eraseFromFreehand(e, n) : e instanceof It ? this.eraseFromPolygon(e, n) : [e];
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
    const n = new Sn(
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
      const r = e._points[o], a = e._points[(o + 1) % e._points.length], c = this.sampleEdgePoints(r, a, 2);
      let f = null;
      for (const u of c)
        if (!this.isPointErased(u, t))
          (f === null || Math.sqrt(Math.pow(u.x - f.x, 2) + Math.pow(u.y - f.y, 2)) > 1) && (n.push(u), f = u);
        else if (f !== null) {
          const m = this.findEraserEdge(f, u, t);
          m && Math.sqrt(Math.pow(m.x - f.x, 2) + Math.pow(m.y - f.y, 2)) > 1 && n.push(m), f = null;
        }
    }
    const s = [];
    for (let o = 0; o < n.length; o++) {
      const r = n[o], a = s[s.length - 1];
      (!a || Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)) > 0.5) && s.push(r);
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
const $e = [
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
class lp {
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
  SvelteComponent: op,
  add_flush_callback: Hr,
  append: F,
  attr: Z,
  bind: Ir,
  binding_callbacks: Do,
  bubble: lo,
  check_outros: xi,
  create_component: Ne,
  destroy_component: Ve,
  detach: sn,
  element: le,
  group_outros: Si,
  init: ap,
  insert: ln,
  is_function: rp,
  listen: Re,
  mount_component: Ke,
  noop: uf,
  run_all: df,
  safe_not_equal: cp,
  set_style: Xs,
  space: we,
  toggle_class: je,
  transition_in: he,
  transition_out: ve
} = window.__gradio__svelte__internal, { onMount: fp, onDestroy: hp, createEventDispatcher: up } = window.__gradio__svelte__internal;
function Pr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, h, v, w, y, k, C, M, z, X, W, B, x, P, U, j, O, q, R, ee, Q, T, L, oe, se, I, pe, E, J, fe, ue, V, Y, Fe, ze, re, G, ke, yt, li, Tt, Ct, ut, oi, D, Xe, He, Ze, xe, Je, Bt, Ge, Wn, un;
  s = new S0({}), f = new Ag({}), p = new T0({}), C = new Vg({}), P = new e2({}), O = new y2({}), L = new ng({});
  let ye = (
    /*showRemoveButton*/
    i[3] && Ar(i)
  ), Me = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[20] && Tr(i);
  return ue = new a2({}), G = new _2({}), ut = new E0({
    props: { selected: (
      /*labelVisibility*/
      i[21]
    ) }
  }), xe = new K0({}), {
    c() {
      e = le("span"), t = le("div"), n = le("button"), Ne(s.$$.fragment), l = we(), o = le("span"), o.textContent = "Box", r = we(), a = le("div"), c = le("button"), Ne(f.$$.fragment), u = we(), d = le("span"), d.textContent = "Freehand", m = we(), b = le("div"), g = le("button"), Ne(p.$$.fragment), h = we(), v = le("span"), v.textContent = "Circle", w = we(), y = le("div"), k = le("button"), Ne(C.$$.fragment), M = we(), z = le("span"), z.textContent = "Polygon", X = we(), W = le("div"), B = le("div"), x = le("button"), Ne(P.$$.fragment), U = we(), j = le("button"), Ne(O.$$.fragment), q = we(), R = le("span"), R.textContent = "Eraser", ee = we(), Q = le("div"), T = le("button"), Ne(L.$$.fragment), oe = we(), se = le("span"), se.textContent = "Move", I = we(), ye && ye.c(), pe = we(), Me && Me.c(), E = we(), J = le("div"), fe = le("button"), Ne(ue.$$.fragment), V = we(), Y = le("span"), Y.textContent = "Undo", Fe = we(), ze = le("div"), re = le("button"), Ne(G.$$.fragment), ke = we(), yt = le("span"), yt.textContent = "Redo", li = we(), Tt = le("div"), Ct = le("button"), Ne(ut.$$.fragment), oi = we(), D = le("span"), D.textContent = "Labels", Xe = we(), He = le("div"), Ze = le("button"), Ne(xe.$$.fragment), Je = we(), Bt = le("span"), Bt.textContent = "Clear", Z(n, "class", "icon tool-button svelte-mwe4hy"), Z(n, "aria-label", "Create box"), je(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), Z(o, "class", "tool-label svelte-mwe4hy"), Z(t, "class", "tool-group svelte-mwe4hy"), Z(c, "class", "icon tool-button svelte-mwe4hy"), Z(c, "aria-label", "Freehand drawing"), je(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), Z(d, "class", "tool-label svelte-mwe4hy"), Z(a, "class", "tool-group svelte-mwe4hy"), Z(g, "class", "icon tool-button svelte-mwe4hy"), Z(g, "aria-label", "Circle drawing"), je(
        g,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), Z(v, "class", "tool-label svelte-mwe4hy"), Z(b, "class", "tool-group svelte-mwe4hy"), Z(k, "class", "icon tool-button svelte-mwe4hy"), Z(k, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), je(
        k,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), Z(z, "class", "tool-label svelte-mwe4hy"), Z(y, "class", "tool-group svelte-mwe4hy"), Z(x, "class", "icon tool-button svelte-mwe4hy"), Z(x, "aria-label", "Erase areas from shapes"), je(
        x,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), Z(j, "class", "icon dropdown-button svelte-mwe4hy"), Z(j, "aria-label", "Eraser settings"), Z(B, "class", "eraser-buttons svelte-mwe4hy"), Z(R, "class", "tool-label svelte-mwe4hy"), Z(W, "class", "tool-group eraser-group svelte-mwe4hy"), Z(T, "class", "icon tool-button svelte-mwe4hy"), Z(T, "aria-label", "Edit boxes"), je(
        T,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), Z(se, "class", "tool-label svelte-mwe4hy"), Z(Q, "class", "tool-group svelte-mwe4hy"), Z(fe, "class", "icon tool-button svelte-mwe4hy"), Z(fe, "aria-label", "Undo (Ctrl+Z)"), je(
        fe,
        "disabled",
        /*undoStack*/
        i[22].length === 0
      ), Z(Y, "class", "tool-label svelte-mwe4hy"), Z(J, "class", "tool-group svelte-mwe4hy"), Z(re, "class", "icon tool-button svelte-mwe4hy"), Z(re, "aria-label", "Redo (Ctrl+Y)"), je(
        re,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), Z(yt, "class", "tool-label svelte-mwe4hy"), Z(ze, "class", "tool-group svelte-mwe4hy"), Z(Ct, "class", "icon tool-button svelte-mwe4hy"), Z(Ct, "aria-label", "Show/Hide labels"), je(
        Ct,
        "selected",
        /*labelVisibility*/
        i[21]
      ), Z(D, "class", "tool-label svelte-mwe4hy"), Z(Tt, "class", "tool-group svelte-mwe4hy"), Z(Ze, "class", "icon tool-button svelte-mwe4hy"), Z(Ze, "aria-label", "Clear Shapes"), Z(Bt, "class", "tool-label svelte-mwe4hy"), Z(He, "class", "tool-group svelte-mwe4hy"), Z(e, "class", "canvas-control svelte-mwe4hy");
    },
    m($, Ue) {
      ln($, e, Ue), F(e, t), F(t, n), Ke(s, n, null), F(t, l), F(t, o), F(e, r), F(e, a), F(a, c), Ke(f, c, null), F(a, u), F(a, d), F(e, m), F(e, b), F(b, g), Ke(p, g, null), F(b, h), F(b, v), F(e, w), F(e, y), F(y, k), Ke(C, k, null), F(y, M), F(y, z), F(e, X), F(e, W), F(W, B), F(B, x), Ke(P, x, null), F(B, U), F(B, j), Ke(O, j, null), F(W, q), F(W, R), F(e, ee), F(e, Q), F(Q, T), Ke(L, T, null), F(Q, oe), F(Q, se), F(e, I), ye && ye.m(e, null), F(e, pe), Me && Me.m(e, null), F(e, E), F(e, J), F(J, fe), Ke(ue, fe, null), F(J, V), F(J, Y), F(e, Fe), F(e, ze), F(ze, re), Ke(G, re, null), F(ze, ke), F(ze, yt), F(e, li), F(e, Tt), F(Tt, Ct), Ke(ut, Ct, null), F(Tt, oi), F(Tt, D), F(e, Xe), F(e, He), F(He, Ze), Ke(xe, Ze, null), F(He, Je), F(He, Bt), Ge = !0, Wn || (un = [
        Re(
          n,
          "click",
          /*click_handler*/
          i[57]
        ),
        Re(
          c,
          "click",
          /*click_handler_1*/
          i[58]
        ),
        Re(
          g,
          "click",
          /*click_handler_2*/
          i[59]
        ),
        Re(
          k,
          "click",
          /*click_handler_3*/
          i[60]
        ),
        Re(
          x,
          "click",
          /*click_handler_4*/
          i[61]
        ),
        Re(
          j,
          "click",
          /*openEraserSettings*/
          i[30]
        ),
        Re(
          T,
          "click",
          /*click_handler_5*/
          i[62]
        ),
        Re(
          fe,
          "click",
          /*click_handler_8*/
          i[65]
        ),
        Re(
          re,
          "click",
          /*click_handler_9*/
          i[66]
        ),
        Re(
          Ct,
          "click",
          /*click_handler_10*/
          i[67]
        ),
        Re(
          Ze,
          "click",
          /*click_handler_11*/
          i[68]
        )
      ], Wn = !0);
    },
    p($, Ue) {
      (!Ge || Ue[0] & /*mode, Mode*/
      4608) && je(
        n,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].creation
      ), (!Ge || Ue[0] & /*mode, Mode*/
      4608) && je(
        c,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].freehand
      ), (!Ge || Ue[0] & /*mode, Mode*/
      4608) && je(
        g,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].circle
      ), (!Ge || Ue[0] & /*mode, Mode*/
      4608) && je(
        k,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].polygon
      ), (!Ge || Ue[0] & /*mode, Mode*/
      4608) && je(
        x,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].erase
      ), (!Ge || Ue[0] & /*mode, Mode*/
      4608) && je(
        T,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].drag
      ), /*showRemoveButton*/
      $[3] ? ye ? (ye.p($, Ue), Ue[0] & /*showRemoveButton*/
      8 && he(ye, 1)) : (ye = Ar($), ye.c(), he(ye, 1), ye.m(e, pe)) : ye && (Si(), ve(ye, 1, 1, () => {
        ye = null;
      }), xi()), !/*disableEditBoxes*/
      $[5] && /*labelDetailLock*/
      $[20] ? Me ? (Me.p($, Ue), Ue[0] & /*disableEditBoxes, labelDetailLock*/
      1048608 && he(Me, 1)) : (Me = Tr($), Me.c(), he(Me, 1), Me.m(e, E)) : Me && (Si(), ve(Me, 1, 1, () => {
        Me = null;
      }), xi()), (!Ge || Ue[0] & /*redoStack*/
      8192) && je(
        re,
        "disabled",
        /*redoStack*/
        $[13].length === 0
      );
      const ls = {};
      Ue[0] & /*labelVisibility*/
      2097152 && (ls.selected = /*labelVisibility*/
      $[21]), ut.$set(ls), (!Ge || Ue[0] & /*labelVisibility*/
      2097152) && je(
        Ct,
        "selected",
        /*labelVisibility*/
        $[21]
      );
    },
    i($) {
      Ge || (he(s.$$.fragment, $), he(f.$$.fragment, $), he(p.$$.fragment, $), he(C.$$.fragment, $), he(P.$$.fragment, $), he(O.$$.fragment, $), he(L.$$.fragment, $), he(ye), he(Me), he(ue.$$.fragment, $), he(G.$$.fragment, $), he(ut.$$.fragment, $), he(xe.$$.fragment, $), Ge = !0);
    },
    o($) {
      ve(s.$$.fragment, $), ve(f.$$.fragment, $), ve(p.$$.fragment, $), ve(C.$$.fragment, $), ve(P.$$.fragment, $), ve(O.$$.fragment, $), ve(L.$$.fragment, $), ve(ye), ve(Me), ve(ue.$$.fragment, $), ve(G.$$.fragment, $), ve(ut.$$.fragment, $), ve(xe.$$.fragment, $), Ge = !1;
    },
    d($) {
      $ && sn(e), Ve(s), Ve(f), Ve(p), Ve(C), Ve(P), Ve(O), Ve(L), ye && ye.d(), Me && Me.d(), Ve(ue), Ve(G), Ve(ut), Ve(xe), Wn = !1, df(un);
    }
  };
}
function Ar(i) {
  let e, t, n, s, l, o, r, a;
  return n = new fg({}), {
    c() {
      e = le("div"), t = le("button"), Ne(n.$$.fragment), s = we(), l = le("span"), l.textContent = "Delete", Z(t, "class", "icon tool-button svelte-mwe4hy"), Z(t, "aria-label", "Remove boxes"), Z(l, "class", "tool-label svelte-mwe4hy"), Z(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      ln(c, e, f), F(e, t), Ke(n, t, null), F(e, s), F(e, l), o = !0, r || (a = Re(
        t,
        "click",
        /*click_handler_6*/
        i[63]
      ), r = !0);
    },
    p: uf,
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ve(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && sn(e), Ve(n), r = !1, a();
    }
  };
}
function Tr(i) {
  let e, t, n, s, l, o, r, a;
  return n = new bg({}), {
    c() {
      e = le("div"), t = le("button"), Ne(n.$$.fragment), s = we(), l = le("span"), l.textContent = "Label", Z(t, "class", "icon tool-button svelte-mwe4hy"), Z(t, "aria-label", "Edit label"), Z(l, "class", "tool-label svelte-mwe4hy"), Z(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      ln(c, e, f), F(e, t), Ke(n, t, null), F(e, s), F(e, l), o = !0, r || (a = Re(
        t,
        "click",
        /*click_handler_7*/
        i[64]
      ), r = !0);
    },
    p: uf,
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ve(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && sn(e), Ve(n), r = !1, a();
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
        i[0].boxes.length ? ti(
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
    i[69]
  ), {
    c() {
      Ne(e.$$.fragment);
    },
    m(n, s) {
      Ke(e, n, s), t = !0;
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
      n[0].boxes.length ? ti(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : ""), e.$set(l);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ve(e, n);
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
        i[0].boxes.length ? ti(
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
    i[70]
  ), {
    c() {
      Ne(e.$$.fragment);
    },
    m(n, s) {
      Ke(e, n, s), t = !0;
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
      n[0].boxes.length ? ti(
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
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ve(e, n);
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
        i[0].boxes.length ? ti(
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
    i[71]
  ), {
    c() {
      Ne(e.$$.fragment);
    },
    m(n, s) {
      Ke(e, n, s), t = !0;
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
      n[0].boxes.length ? ti(
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
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ve(e, n);
    }
  };
}
function dp(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b = (
    /*interactive*/
    i[4] && Pr(i)
  ), g = (
    /*editModalVisible*/
    i[15] && Fr(i)
  ), p = (
    /*newModalVisible*/
    i[16] && Ur(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[17] && Or(i)
  );
  function v(k) {
    i[72](k);
  }
  function w(k) {
    i[73](k);
  }
  let y = {};
  return (
    /*eraserSettingsVisible*/
    i[18] !== void 0 && (y.visible = /*eraserSettingsVisible*/
    i[18]), /*eraserSize*/
    i[19] !== void 0 && (y.eraserSize = /*eraserSize*/
    i[19]), a = new ip({ props: y }), Do.push(() => Ir(a, "visible", v)), Do.push(() => Ir(a, "eraserSize", w)), a.$on(
      "change",
      /*handleEraserSettingsChange*/
      i[31]
    ), a.$on(
      "close",
      /*handleEraserSettingsClose*/
      i[32]
    ), {
      c() {
        e = le("div"), t = le("canvas"), n = we(), b && b.c(), s = we(), g && g.c(), l = we(), p && p.c(), o = we(), h && h.c(), r = we(), Ne(a.$$.fragment), Z(t, "tabindex", "0"), Xs(
          t,
          "height",
          /*height*/
          i[6]
        ), Xs(
          t,
          "width",
          /*width*/
          i[7]
        ), Z(t, "class", "canvas-annotator svelte-mwe4hy"), Z(e, "class", "canvas-container svelte-mwe4hy"), Z(e, "tabindex", "-1");
      },
      m(k, C) {
        ln(k, e, C), F(e, t), i[56](t), ln(k, n, C), b && b.m(k, C), ln(k, s, C), g && g.m(k, C), ln(k, l, C), p && p.m(k, C), ln(k, o, C), h && h.m(k, C), ln(k, r, C), Ke(a, k, C), u = !0, d || (m = [
          Re(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[24]
          ),
          Re(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[25]
          ),
          Re(t, "pointermove", function() {
            rp(
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
          Re(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[39]
          ),
          Re(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[27]
          ),
          Re(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[45]
          ),
          Re(
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
        16 && he(b, 1)) : (b = Pr(i), b.c(), he(b, 1), b.m(s.parentNode, s)) : b && (Si(), ve(b, 1, 1, () => {
          b = null;
        }), xi()), /*editModalVisible*/
        i[15] ? g ? (g.p(i, C), C[0] & /*editModalVisible*/
        32768 && he(g, 1)) : (g = Fr(i), g.c(), he(g, 1), g.m(l.parentNode, l)) : g && (Si(), ve(g, 1, 1, () => {
          g = null;
        }), xi()), /*newModalVisible*/
        i[16] ? p ? (p.p(i, C), C[0] & /*newModalVisible*/
        65536 && he(p, 1)) : (p = Ur(i), p.c(), he(p, 1), p.m(o.parentNode, o)) : p && (Si(), ve(p, 1, 1, () => {
          p = null;
        }), xi()), /*editDefaultLabelVisible*/
        i[17] ? h ? (h.p(i, C), C[0] & /*editDefaultLabelVisible*/
        131072 && he(h, 1)) : (h = Or(i), h.c(), he(h, 1), h.m(r.parentNode, r)) : h && (Si(), ve(h, 1, 1, () => {
          h = null;
        }), xi());
        const M = {};
        !c && C[0] & /*eraserSettingsVisible*/
        262144 && (c = !0, M.visible = /*eraserSettingsVisible*/
        i[18], Hr(() => c = !1)), !f && C[0] & /*eraserSize*/
        524288 && (f = !0, M.eraserSize = /*eraserSize*/
        i[19], Hr(() => f = !1)), a.$set(M);
      },
      i(k) {
        u || (he(b), he(g), he(p), he(h), he(a.$$.fragment, k), u = !0);
      },
      o(k) {
        ve(b), ve(g), ve(p), ve(h), ve(a.$$.fragment, k), u = !1;
      },
      d(k) {
        k && (sn(e), sn(n), sn(s), sn(l), sn(o), sn(r)), i[56](null), b && b.d(k), g && g.d(k), p && p.d(k), h && h.d(k), Ve(a, k), d = !1, df(m);
      }
    }
  );
}
const _p = 50, mp = 3, oo = 3;
function Ln(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function ti(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function gp(i, e, t) {
  let n;
  var s;
  (function(_) {
    _[_.creation = 0] = "creation", _[_.drag = 1] = "drag", _[_.freehand = 2] = "freehand", _[_.circle = 3] = "circle", _[_.polygon = 4] = "polygon", _[_.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, { imageUrl: f = null } = e, { interactive: u } = e, { boxAlpha: d = 0.5 } = e, { boxMinSize: m = 10 } = e, { handleSize: b } = e, { boxThickness: g } = e, { boxSelectedThickness: p } = e, { value: h } = e, { choices: v = [] } = e, { choicesColors: w = [] } = e, { disableEditBoxes: y = !1 } = e, { height: k = "100%" } = e, { width: C = "100%" } = e, { singleBox: M = !1 } = e, { showRemoveButton: z = null } = e, { handlesCursor: X = !0 } = e, { useDefaultLabel: W = !1 } = e, { shapeCreationMode: B = "drag" } = e;
  z === null && (z = y);
  let x, P, U = null, j = -1, O = s.drag, q = new lp(G), R;
  function ee(_) {
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
  h !== null && h.boxes.length == 0 ? O = ee(B) : h !== null && h.boxes.length > 0 ? O = B === "drag" ? s.drag : ee(B) : O = ee(B);
  let Q = 0, T = 0, L = 0, oe = 0, se = 1, I = 0, pe = 0, E = !1, J = !1, fe = !1, ue = !1, V = null, Y = 10, Fe = W, ze = { label: "", color: "" };
  const re = up();
  function G() {
    if (P) {
      if (P.clearRect(0, 0, x.width, x.height), P.save(), P.translate(q.offsetX, q.offsetY), P.scale(q.scale, q.scale), U !== null) {
        switch (h.orientation) {
          case 0:
            P.drawImage(U, 0, 0, I, pe);
            break;
          case 1:
            P.translate(I, 0), P.rotate(Math.PI / 2), P.drawImage(U, 0, 0, pe, I);
            break;
          case 2:
            P.translate(I, pe), P.rotate(Math.PI), P.drawImage(U, 0, 0, I, pe);
            break;
          case 3:
            P.translate(0, pe), P.rotate(-Math.PI / 2), P.drawImage(U, 0, 0, pe, I);
            break;
        }
        P.restore();
      }
      for (const _ of h.boxes.slice().reverse())
        _.render(P, c);
      O === s.erase && R && R.renderErasePath(P);
    }
  }
  function ke(_) {
    t(14, j = _), h.boxes.forEach((S) => {
      S.setSelected(!1);
    }), _ >= 0 && _ < h.boxes.length && h.boxes[_].setSelected(!0), G();
  }
  function yt(_) {
    u && (a = !1, _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId), O === s.creation ? un(_) : O === s.freehand ? Bt(_) : O === s.circle ? ye(_) : O === s.polygon ? Ge(_) : O === s.erase ? Me(_) : O === s.drag && li(_));
  }
  function li(_) {
    console.log("clickBox function called, mode:", O === s.drag ? "drag" : "creation");
    const S = x.getBoundingClientRect(), H = _.clientX - S.left, A = _.clientY - S.top;
    let N = !1;
    for (const [ae, ce] of h.boxes.entries()) {
      const Dt = ce.indexOfPointInsideHandle(H, A);
      if (Dt >= 0) {
        N = !0, ke(ae);
        let Xn = null;
        ce.onMoveStart = () => {
          Xn = xe(ce), console.log("Resize started, captured state:", Xn);
        }, ce.onMoveEnd = () => {
          if (Xn) {
            const Go = xe(ce);
            console.log("Resize ended, final state:", Go), Xe({
              type: "edit_shape",
              shapeIndex: ae,
              oldShapeData: Xn,
              shapeData: Go
            }), Xn = null;
          }
        }, ce.startResize(Dt, _);
        return;
      }
    }
    for (const [ae, ce] of h.boxes.entries())
      if (ce.isPointInsideBox(H, A)) {
        N = !0, ke(ae);
        let Dt = null;
        ce.onMoveStart = () => {
          Dt = xe(ce);
        }, ce.onMoveEnd = () => {
          Dt && (Xe({
            type: "edit_shape",
            shapeIndex: ae,
            oldShapeData: Dt,
            shapeData: xe(ce)
          }), Dt = null);
        }, ce.startDrag(_);
        return;
      }
    if (!N) {
      if (M || ke(-1), console.log("No box selected, checking if we should dispatch select event"), O === s.drag) {
        console.log("Mode is drag, calculating coordinates");
        const ae = (H - q.offsetX) / se / q.scale, ce = (A - q.offsetY) / se / q.scale;
        console.log("Click detected in drag mode:", {
          mouseX: H,
          mouseY: A,
          imageX: ae,
          imageY: ce,
          scaleFactor: se,
          "canvasWindow.scale": q.scale,
          "canvasWindow.offsetX": q.offsetX,
          "canvasWindow.offsetY": q.offsetY
        }), U && ae >= 0 && ae <= U.naturalWidth && ce >= 0 && ce <= U.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(ae), Math.round(ce)]), re("select", {
          coordinates: [Math.round(ae), Math.round(ce)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!U,
          imageX: ae,
          imageY: ce,
          naturalWidth: U == null ? void 0 : U.naturalWidth,
          naturalHeight: U == null ? void 0 : U.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", O);
      q.startDrag(_);
    }
  }
  function Tt(_) {
    O === s.erase && R && Ue(), re("change");
  }
  function Ct(_) {
    if (h === null)
      return;
    if (O === s.erase && R) {
      $(_);
      return;
    }
    if (O !== s.drag)
      return;
    const S = x.getBoundingClientRect(), H = _.clientX - S.left, A = _.clientY - S.top;
    for (const [N, ae] of h.boxes.entries()) {
      const ce = ae.indexOfPointInsideHandle(H, A);
      if (ce >= 0) {
        t(11, x.style.cursor = ae.resizeHandles[ce].cursor, x);
        return;
      }
    }
    t(11, x.style.cursor = "default", x);
  }
  function ut(_) {
    if (u) {
      if (_.ctrlKey) {
        switch (_.key.toLowerCase()) {
          case "z":
            _.shiftKey ? Ze() : He(), _.preventDefault();
            break;
          case "y":
            Ze(), _.preventDefault();
            break;
        }
        return;
      }
      switch (_.key) {
        case "Delete":
          Dn();
          break;
        case " ":
          O === s.polygon && V && V.isCreating && (_.preventDefault(), V._points.length >= V.minPoints && V.finishCreating());
          break;
      }
    }
  }
  function oi(_) {
    _.preventDefault();
    const S = 1 / (1 + _.deltaY / 1e3 * 0.5), H = parseFloat((q.scale * S).toFixed(2)), A = H < 1 ? 1 : H, N = x.getBoundingClientRect(), ae = _.clientX - N.left, ce = _.clientY - N.top, Dt = (ae - q.offsetX) / q.scale, Xn = (ce - q.offsetY) / q.scale;
    q.offsetX = ae - Dt * A, q.offsetY = ce - Xn * A, q.scale = A, G();
  }
  function D() {
    if (q.scale = 1, U !== null && x) {
      if (q.imageRotatedWidth <= x.width) {
        const _ = (x.width - I) / 2;
        q.offsetX = _;
      } else
        q.offsetX = 0;
      if (pe < x.height) {
        const _ = (x.height - pe) / 2;
        q.offsetY = _;
      } else
        q.offsetY = 0;
    } else
      q.offsetX = 0, q.offsetY = 0;
    G();
  }
  function Xe(_) {
    if (a) {
      console.log("Skipping undo action during initial state:", _);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, _), { timestamp: Date.now() })), l.length > _p && l.shift(), console.log("Added undo action:", _, "Stack size:", l.length);
  }
  function He() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let S = r.length - 1; S >= 0; S--) {
        const H = r[S];
        if (H.recoveryCount < oo) {
          h.boxes.map((A) => xe(A)), t(0, h.boxes = [], h);
          for (const A of H.allShapes) {
            const N = Je(A);
            N && h.boxes.push(N);
          }
          H.recoveryCount++, H.recoveryCount >= oo && (r.splice(S, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${h.boxes.length} shapes from pre-clear history. Recovery ${H.recoveryCount}/${oo}`), ke(-1), G(), re("change");
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
            const S = h.boxes.splice(_.shapeIndex, 1)[0];
            o.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: xe(S),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const S = Je(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, S), o.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (V && _.pointData) {
            if (V._points.pop(), V._points.length === 0) {
              const S = h.boxes.indexOf(V);
              S >= 0 && h.boxes.splice(S, 1), V = null;
            } else
              V.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: _.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.oldShapeData && _.shapeIndex < h.boxes.length) {
            const S = xe(h.boxes[_.shapeIndex]);
            Je(_.oldShapeData, h.boxes[_.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: S,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", _);
            const S = h.boxes.map((H) => xe(H));
            t(0, h.boxes = [], h);
            for (const H of _.oldShapeData) {
              const A = Je(H);
              A && h.boxes.push(A);
            }
            console.log("Restored shapes:", h.boxes.length), o.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: S,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      ke(-1), G(), re("change");
    }
  }
  function Ze() {
    if (o.length === 0) return;
    const _ = o.pop();
    if (_) {
      switch (_.type) {
        case "create_shape":
          if (_.shapeIndex !== void 0 && _.shapeIndex < h.boxes.length) {
            const S = h.boxes.splice(_.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: xe(S),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const S = Je(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, S), l.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          _.pointData && (V ? (V._points.push(_.pointData), V._points.length === 1 && !h.boxes.includes(V) && (M ? t(0, h.boxes = [V], h) : t(0, h.boxes = [V, ...h.boxes], h)), V.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: _.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.shapeData && _.shapeIndex < h.boxes.length) {
            const S = xe(h.boxes[_.shapeIndex]);
            Je(_.shapeData, h.boxes[_.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: S,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.shapeData) {
            const S = h.boxes.map((H) => xe(H));
            t(0, h.boxes = [], h);
            for (const H of _.shapeData) {
              const A = Je(H);
              A && h.boxes.push(A);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: S,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      ke(-1), G(), re("change");
    }
  }
  function xe(_) {
    return _ ? _ instanceof Sn ? {
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
    } : _ instanceof Pn ? {
      type: "circle",
      label: _.label,
      color: _.color,
      centerX: _._centerX,
      centerY: _._centerY,
      radius: _._radius
    } : _ instanceof In ? {
      type: "box",
      label: _.label,
      color: _.color,
      xmin: _._xmin,
      ymin: _._ymin,
      xmax: _._xmax,
      ymax: _._ymax
    } : null : null;
  }
  function Je(_, S) {
    if (!_) return null;
    if (S)
      return S.label = _.label, S.color = _.color, S instanceof In ? (S._xmin = _.xmin, S._ymin = _.ymin, S._xmax = _.xmax, S._ymax = _.ymax, S.applyUserScale()) : S instanceof Pn ? (S._centerX = _.centerX, S._centerY = _.centerY, S._radius = _.radius, S.applyUserScale()) : (S.xmin = _.xmin, S.ymin = _.ymin, S.xmax = _.xmax, S.ymax = _.ymax), (S instanceof Sn || S instanceof It) && _.points && (S._points = [..._.points], S.updateBoundingBox()), S;
    switch (_.type) {
      case "freehand":
        const H = new Sn(G, Wt, q, Q, T, L, oe, _.label, _.color, d, m, b, g, p);
        return H._points = [..._.points], H.updateBoundingBox(), H;
      case "polygon":
        const A = new It(G, Wt, q, Q, T, L, oe, _.label, _.color, d, m, b, g, p);
        return A._points = [..._.points], A.updateBoundingBox(), A;
      case "circle":
        return new Pn(G, Wt, q, Q, T, L, oe, _.label, _.centerX, _.centerY, _.radius, _.color, d, m, b, g, p);
      case "box":
        return new In(G, Wt, q, Q, T, L, oe, _.label, _.xmin, _.ymin, _.xmax, _.ymax, _.color, d, m, b, g, p);
    }
    return null;
  }
  function Bt(_) {
    const S = x.getBoundingClientRect();
    let H;
    w.length > 0 ? H = Ln(w[0]) : M ? h.boxes.length > 0 ? H = h.boxes[0].color : H = $e[0] : H = $e[h.boxes.length % $e.length];
    let A = new Sn(G, Wt, q, Q, T, L, oe, "", H, d, m, b, g, p);
    A.startCreating(_, S.left, S.top), M ? t(0, h.boxes = [A], h) : t(0, h.boxes = [A, ...h.boxes], h), Xe({ type: "create_shape", shapeIndex: 0 }), ke(0), G(), re("change");
  }
  function Ge(_) {
    V && (!V._points || V._points.length === 0 || !h.boxes.includes(V)) && (console.log("Resetting invalid currentPolygon state"), V = null), V === null ? Wn(_) : V.isCreating && (V.addPoint(_) || (G(), re("change")));
  }
  function Wn(_) {
    const S = x.getBoundingClientRect();
    let H;
    w.length > 0 ? H = Ln(w[0]) : M ? h.boxes.length > 0 ? H = h.boxes[0].color : H = $e[0] : H = $e[h.boxes.length % $e.length];
    let A = new It(G, kf, q, Q, T, L, oe, "", H, d, m, b, g, p);
    A.onPointAdded = (N) => {
      Xe({ type: "polygon_point", pointData: N });
    }, V = A, A.startCreating(_, S.left, S.top), M ? t(0, h.boxes = [A], h) : t(0, h.boxes = [A, ...h.boxes], h), Xe({ type: "create_shape", shapeIndex: 0 }), ke(0), G(), re("change");
  }
  function un(_) {
    const S = x.getBoundingClientRect(), H = (_.clientX - S.left - q.offsetX) / se / q.scale, A = (_.clientY - S.top - q.offsetY) / se / q.scale;
    let N;
    w.length > 0 ? N = Ln(w[0]) : M ? h.boxes.length > 0 ? N = h.boxes[0].color : N = $e[0] : N = $e[h.boxes.length % $e.length];
    let ae = new In(G, Wt, q, Q, T, L, oe, "", H, A, H, A, N, d, m, b, g, p);
    ae.startCreating(_, S.left, S.top), M ? t(0, h.boxes = [ae], h) : t(0, h.boxes = [ae, ...h.boxes], h), Xe({ type: "create_shape", shapeIndex: 0 }), ke(0), G(), re("change");
  }
  function ye(_) {
    const S = x.getBoundingClientRect(), H = (_.clientX - S.left - q.offsetX) / q.scale, A = (_.clientY - S.top - q.offsetY) / q.scale;
    let N;
    w.length > 0 ? N = Ln(w[0]) : M ? h.boxes.length > 0 ? N = h.boxes[0].color : N = $e[0] : N = $e[h.boxes.length % $e.length];
    let ae = new Pn(G, Wt, q, Q, T, L, oe, "", H, A, 0, N, d, m, b, g, p);
    ae.startCreating(_), M ? t(0, h.boxes = [ae], h) : t(0, h.boxes = [ae, ...h.boxes], h), Xe({ type: "create_shape", shapeIndex: 0 }), ke(0), G(), re("change");
  }
  function Me(_) {
    R || (R = new sp(q, se), R.setBrushSize(Y)), R.setScaleFactor(se);
    const S = x.getBoundingClientRect();
    R.startErase(_, S), G();
  }
  function $(_) {
    if (!R) return;
    const S = x.getBoundingClientRect();
    R.continueErase(_, S), G();
  }
  function Ue() {
    if (!R) return;
    const _ = R.endErase();
    if (_.length === 0) {
      dn();
      return;
    }
    const S = [...h.boxes], H = [], A = [];
    for (let N = 0; N < h.boxes.length; N++) {
      const ae = h.boxes[N], ce = R.eraseFromShape(ae, _);
      if (ce.length === 0)
        H.push(N);
      else {
        if (ce.length === 1 && ce[0] === ae)
          continue;
        H.push(N), A.push(...ce);
      }
    }
    if (H.length > 0 || A.length > 0) {
      for (let N = H.length - 1; N >= 0; N--)
        h.boxes.splice(H[N], 1);
      h.boxes.push(...A), Xe({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: S.map((N) => xe(N)),
        shapeData: h.boxes.map((N) => xe(N))
      }), ke(-1), re("change");
    }
    G(), dn();
  }
  function ls() {
    t(18, ue = !0);
  }
  function wf(_) {
    t(19, Y = _.detail.size), R && R.setBrushSize(Y);
  }
  function vf() {
    t(18, ue = !1);
  }
  function os() {
    t(12, O = s.creation), t(11, x.style.cursor = "crosshair", x), V = null;
  }
  function Uo() {
    t(12, O = s.freehand), t(11, x.style.cursor = "crosshair", x), V = null;
  }
  function Oo() {
    t(12, O = s.circle), t(11, x.style.cursor = "crosshair", x), V = null;
  }
  function jo() {
    t(12, O = s.polygon), t(11, x.style.cursor = "crosshair", x);
  }
  function No() {
    t(12, O = s.erase), t(11, x.style.cursor = "crosshair", x), V = null;
  }
  function dn() {
    t(12, O = s.drag), t(11, x.style.cursor = "default", x), V = null;
  }
  function Wt() {
    j >= 0 && j < h.boxes.length && (h.boxes[j].getArea() < 1 ? Dn() : (y || (Fe ? Ko() : t(16, J = !0)), M && dn()));
  }
  function kf() {
    V = null, j >= 0 && j < h.boxes.length && (h.boxes[j].getArea() < 1 ? Dn() : (y || (Fe ? Ko() : t(16, J = !0)), dn()));
  }
  function yf() {
    j >= 0 && j < h.boxes.length && !y && t(15, E = !0);
  }
  function Cf(_) {
    if (!u)
      return;
    const S = x.getBoundingClientRect(), H = _.clientX - S.left, A = _.clientY - S.top;
    let N = !1;
    for (const [ae, ce] of h.boxes.entries())
      if (ce.isPointInsideBox(H, A)) {
        N = !0, ke(ae), yf();
        break;
      }
    N || D();
  }
  function Vo(_, S) {
    const H = v.findIndex((A) => A[0] === _);
    H === -1 ? (v.push([_, v.length]), w.push(S), t(1, v), t(2, w), console.log(`Added custom label "${_}" with color ${S} to choices`)) : w[H] !== S && (t(2, w[H] = S, w), t(2, w), console.log(`Updated color for existing label "${_}" to ${S}`));
  }
  function xf(_) {
    t(15, E = !1);
    const { detail: S } = _;
    let H = S.label, A = S.color, N = S.ret;
    if (j >= 0 && j < h.boxes.length) {
      let ae = h.boxes[j];
      if (N == 1) {
        const ce = xe(ae);
        Vo(H, A), ae.label = H, ae.color = Ln(A);
        const Dt = xe(ae);
        Xe({
          type: "edit_shape",
          shapeIndex: j,
          oldShapeData: ce,
          shapeData: Dt
        }), G(), re("change");
      } else N == -1 && Dn();
    }
    setTimeout(
      () => {
        x && (x.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function Sf(_) {
    t(16, J = !1);
    const { detail: S } = _;
    let H = S.label, A = S.color, N = S.ret, ae = S.lock;
    if (j >= 0 && j < h.boxes.length) {
      let ce = h.boxes[j];
      N == 1 ? (Vo(H, A), t(20, Fe = ae), ze.label = H, ze.color = A, ce.label = H, ce.color = Ln(A), G(), re("change"), dn()) : Dn();
    }
    setTimeout(
      () => {
        x && (x.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function zf(_) {
    t(17, fe = !1);
    const { detail: S } = _;
    let H = S.label, A = S.color, N = S.ret, ae = S.lock;
    N == 1 && (t(20, Fe = ae), ze.label = H, ze.color = A), setTimeout(
      () => {
        x && (x.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function Ko() {
    if (j >= 0 && j < h.boxes.length) {
      let _ = h.boxes[j];
      _.label = ze.label, ze.color !== "" && (_.color = Ln(ze.color)), G(), re("change"), dn();
    }
    setTimeout(
      () => {
        x && (x.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function Dn() {
    if (j >= 0 && j < h.boxes.length) {
      const _ = h.boxes[j], S = xe(_);
      Xe({
        type: "delete_shape",
        shapeIndex: j,
        shapeData: S
      }), h.boxes.splice(j, 1), ke(-1), M && os(), re("change");
    }
  }
  function Zo() {
    if (h.boxes.length === 0) return;
    const _ = h.boxes.map((S) => xe(S));
    for (r.push({
      allShapes: _,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > mp; )
      r.shift();
    t(0, h.boxes = [], h), ke(-1), V = null, M && os(), G(), re("change"), console.log(`Cleared ${_.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function as() {
    if (x) {
      if (se = 1, t(11, x.width = x.clientWidth, x), q.setRotatedImage(U), U !== null) {
        if (q.imageRotatedWidth > x.width)
          se = x.width / q.imageRotatedWidth, I = Math.round(q.imageRotatedWidth * se), pe = Math.round(q.imageRotatedHeight * se), Q = 0, T = 0, L = I, oe = pe, t(11, x.height = pe, x);
        else {
          I = q.imageRotatedWidth, pe = q.imageRotatedHeight;
          var _ = (x.width - I) / 2;
          Q = _, T = 0, L = _ + I, oe = pe, t(11, x.height = pe, x);
        }
        q.imageWidth = I, q.imageHeight = pe;
      } else
        Q = 0, T = 0, L = x.width, oe = x.height, t(11, x.height = x.clientHeight, x);
      if (q.resize(x.width, x.height, Q, T), L > 0 && oe > 0)
        for (const S of h.boxes)
          S.canvasXmin = Q, S.canvasYmin = T, S.canvasXmax = L, S.canvasYmax = oe, S.setScaleFactor(se);
      G(), re("change");
    }
  }
  const Mf = new ResizeObserver(as);
  function Bf() {
    for (let _ = 0; _ < h.boxes.length; _++) {
      let S = h.boxes[_];
      if (!(S instanceof In) && !(S instanceof Sn) && !(S instanceof It) && !(S instanceof Pn)) {
        let H = "", A = "";
        if (S.hasOwnProperty("color") ? (H = S.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = $e[_ % $e.length], S.hasOwnProperty("label") && (A = S.label), S.hasOwnProperty("type") && S.type === "freehand" && S.hasOwnProperty("points")) {
          let N = new Sn(G, Wt, q, Q, T, L, oe, A, H, d, m, b, g, p);
          N._points = S.points, N.updateBoundingBox(), S = N;
        } else if (S.hasOwnProperty("type") && S.type === "circle" && S.hasOwnProperty("centerX") && S.hasOwnProperty("centerY") && S.hasOwnProperty("radius"))
          S = new Pn(G, Wt, q, Q, T, L, oe, A, S.centerX, S.centerY, S.radius, H, d, m, b, g, p);
        else if (S.hasOwnProperty("type") && S.type === "polygon" && S.hasOwnProperty("points")) {
          let N = new It(G, Wt, q, Q, T, L, oe, A, H, d, m, b, g, p);
          N._points = S.points, N.updateBoundingBox(), S = N;
        } else
          S = new In(G, Wt, q, Q, T, L, oe, A, S.xmin, S.ymin, S.xmax, S.ymax, H, d, m, b, g, p);
        t(0, h.boxes[_] = S, h);
      }
    }
  }
  function Jo() {
    f !== null && (U === null || U.src != f) && (U = new Image(), U.src = f, U.onload = function() {
      as(), G();
    });
  }
  fp(() => {
    if (a = !0, Array.isArray(v) && v.length > 0) {
      if (!Array.isArray(w) || w.length == 0)
        for (let _ = 0; _ < v.length; _++) {
          let S = $e[_ % $e.length];
          w.push(ti(S));
        }
      ze.label = v[0][0], ze.color = w[0];
    }
    P = x.getContext("2d"), Mf.observe(x), j < 0 && h !== null && h.boxes.length > 0 && ke(0), Jo(), as(), G(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function Wf() {
    document.addEventListener("keydown", ut);
  }
  function Df() {
    document.removeEventListener("keydown", ut);
  }
  hp(() => {
    document.removeEventListener("keydown", ut);
  });
  function Xf(_) {
    Do[_ ? "unshift" : "push"](() => {
      x = _, t(11, x), t(55, B), t(12, O), t(9, s), t(0, h);
    });
  }
  const Yf = () => os(), Ef = () => Uo(), Rf = () => Oo(), qf = () => jo(), Lf = () => No(), Hf = () => dn(), If = () => Dn(), Pf = () => t(17, fe = !0), Af = () => He(), Tf = () => Ze(), Ff = () => {
    t(10, c = !c), G();
  }, Uf = () => Zo();
  function Of(_) {
    lo.call(this, i, _);
  }
  function jf(_) {
    lo.call(this, i, _);
  }
  function Nf(_) {
    lo.call(this, i, _);
  }
  function Vf(_) {
    ue = _, t(18, ue);
  }
  function Kf(_) {
    Y = _, t(19, Y);
  }
  return i.$$set = (_) => {
    "imageUrl" in _ && t(47, f = _.imageUrl), "interactive" in _ && t(4, u = _.interactive), "boxAlpha" in _ && t(48, d = _.boxAlpha), "boxMinSize" in _ && t(49, m = _.boxMinSize), "handleSize" in _ && t(50, b = _.handleSize), "boxThickness" in _ && t(51, g = _.boxThickness), "boxSelectedThickness" in _ && t(52, p = _.boxSelectedThickness), "value" in _ && t(0, h = _.value), "choices" in _ && t(1, v = _.choices), "choicesColors" in _ && t(2, w = _.choicesColors), "disableEditBoxes" in _ && t(5, y = _.disableEditBoxes), "height" in _ && t(6, k = _.height), "width" in _ && t(7, C = _.width), "singleBox" in _ && t(53, M = _.singleBox), "showRemoveButton" in _ && t(3, z = _.showRemoveButton), "handlesCursor" in _ && t(8, X = _.handlesCursor), "useDefaultLabel" in _ && t(54, W = _.useDefaultLabel), "shapeCreationMode" in _ && t(55, B = _.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*showLabels*/
    1024 && t(21, n = c), i.$$.dirty[0] & /*canvas, mode, Mode*/
    6656 | i.$$.dirty[1] & /*shapeCreationMode*/
    16777216 && B && x) {
      const _ = ee(B);
      _ !== O && (t(12, O = _), O === s.drag ? t(11, x.style.cursor = "default", x) : t(11, x.style.cursor = "crosshair", x));
    }
    i.$$.dirty[0] & /*value*/
    1 | i.$$.dirty[1] & /*shapeCreationMode*/
    16777216 && h !== null && h.boxes.length == 0 && B && t(12, O = ee(B)), i.$$.dirty[0] & /*value*/
    1 && (q.orientation = h.orientation, Jo(), Bf(), as(), G());
  }, [
    h,
    v,
    w,
    z,
    u,
    y,
    k,
    C,
    X,
    s,
    c,
    x,
    O,
    o,
    j,
    E,
    J,
    fe,
    ue,
    Y,
    Fe,
    n,
    l,
    G,
    yt,
    Tt,
    Ct,
    oi,
    He,
    Ze,
    ls,
    wf,
    vf,
    os,
    Uo,
    Oo,
    jo,
    No,
    dn,
    Cf,
    xf,
    Sf,
    zf,
    Dn,
    Zo,
    Wf,
    Df,
    f,
    d,
    m,
    b,
    g,
    p,
    M,
    W,
    B,
    Xf,
    Yf,
    Ef,
    Rf,
    qf,
    Lf,
    Hf,
    If,
    Pf,
    Af,
    Tf,
    Ff,
    Uf,
    Of,
    jf,
    Nf,
    Vf,
    Kf
  ];
}
class bp extends op {
  constructor(e) {
    super(), ap(
      this,
      e,
      gp,
      dp,
      cp,
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
  SvelteComponent: pp,
  add_flush_callback: wp,
  bind: vp,
  binding_callbacks: kp,
  create_component: yp,
  destroy_component: Cp,
  init: xp,
  mount_component: Sp,
  safe_not_equal: zp,
  transition_in: Mp,
  transition_out: Bp
} = window.__gradio__svelte__internal, { createEventDispatcher: Wp } = window.__gradio__svelte__internal;
function Dp(i) {
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
    i[0]), e = new bp({ props: l }), kp.push(() => vp(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[22]
    ), e.$on(
      "select",
      /*select_handler*/
      i[23]
    ), {
      c() {
        yp(e.$$.fragment);
      },
      m(o, r) {
        Sp(e, o, r), n = !0;
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
        o[0], wp(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Mp(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Bp(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Cp(e, o);
      }
    }
  );
}
function Xp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: d } = e, { boxSelectedThickness: m } = e, { value: b } = e, { disableEditBoxes: g } = e, { singleBox: p } = e, { showRemoveButton: h } = e, { handlesCursor: v } = e, { useDefaultLabel: w } = e, { shapeCreationMode: y } = e, k, C;
  const M = Wp();
  function z(B) {
    b = B, t(0, b);
  }
  const X = () => M("change"), W = (B) => M("select", B.detail);
  return i.$$set = (B) => {
    "src" in B && t(19, n = B.src), "interactive" in B && t(1, s = B.interactive), "boxesAlpha" in B && t(2, l = B.boxesAlpha), "labelList" in B && t(3, o = B.labelList), "labelColors" in B && t(4, r = B.labelColors), "boxMinSize" in B && t(5, a = B.boxMinSize), "handleSize" in B && t(6, c = B.handleSize), "boxThickness" in B && t(7, f = B.boxThickness), "height" in B && t(8, u = B.height), "width" in B && t(9, d = B.width), "boxSelectedThickness" in B && t(10, m = B.boxSelectedThickness), "value" in B && t(0, b = B.value), "disableEditBoxes" in B && t(11, g = B.disableEditBoxes), "singleBox" in B && t(12, p = B.singleBox), "showRemoveButton" in B && t(13, h = B.showRemoveButton), "handlesCursor" in B && t(14, v = B.handlesCursor), "useDefaultLabel" in B && t(15, w = B.useDefaultLabel), "shapeCreationMode" in B && t(16, y = B.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    1572864) {
      t(17, k = n), t(20, C = n);
      const B = n;
      qm(B).then((x) => {
        C === B && t(17, k = x);
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
    h,
    v,
    w,
    y,
    k,
    M,
    n,
    C,
    z,
    X,
    W
  ];
}
class Yp extends pp {
  constructor(e) {
    super(), xp(this, e, Xp, Dp, zp, {
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
  SvelteComponent: Ep,
  add_flush_callback: $s,
  append: gi,
  attr: Ki,
  bind: el,
  binding_callbacks: ts,
  bubble: Ti,
  check_outros: An,
  create_component: an,
  create_slot: Rp,
  destroy_component: rn,
  detach: Jn,
  element: $i,
  empty: qp,
  get_all_dirty_from_scope: Lp,
  get_slot_changes: Hp,
  group_outros: Tn,
  init: Ip,
  insert: Gn,
  mount_component: cn,
  noop: Pp,
  safe_not_equal: Ap,
  space: Hn,
  toggle_class: Nr,
  transition_in: ge,
  transition_out: Be,
  update_slot_base: Tp
} = window.__gradio__svelte__internal, { createEventDispatcher: Fp, tick: Up } = window.__gradio__svelte__internal;
function Vr(i) {
  let e, t;
  return e = new Km({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Op] },
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
      t || (ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function Op(i) {
  let e, t;
  return e = new tl({
    props: {
      Icon: yd,
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
      t || (ge(e.$$.fragment, n), t = !0);
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
  return e = new D_({
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
      t || (ge(e.$$.fragment, n), t = !0);
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
    props: { Icon: hc, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[37]
  ), {
    c() {
      e = $i("div"), an(t.$$.fragment);
    },
    m(s, l) {
      Gn(s, e, l), cn(t, e, null), n = !0;
    },
    p: Pp,
    i(s) {
      n || (ge(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Jn(e), rn(t);
    }
  };
}
function Jr(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Rp(
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
      16777216) && Tp(
        n,
        t,
        s,
        /*$$scope*/
        s[55],
        e ? Hp(
          t,
          /*$$scope*/
          s[55],
          l,
          null
        ) : Lp(
          /*$$scope*/
          s[55]
        ),
        null
      );
    },
    i(s) {
      e || (ge(n, s), e = !0);
    },
    o(s) {
      Be(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function jp(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Jr(i)
  );
  return {
    c() {
      n && n.c(), e = qp();
    },
    m(s, l) {
      n && n.m(s, l), Gn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && ge(n, 1)) : (n = Jr(s), n.c(), ge(n, 1), n.m(e.parentNode, e)) : n && (Tn(), Be(n, 1, 1, () => {
        n = null;
      }), An());
    },
    i(s) {
      t || (ge(n), t = !0);
    },
    o(s) {
      Be(n), t = !1;
    },
    d(s) {
      s && Jn(e), n && n.d(s);
    }
  };
}
function Gr(i) {
  let e, t;
  return e = new p0({
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
      t || (ge(e.$$.fragment, n), t = !0);
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
    i[1]), t = new Yp({ props: o }), ts.push(() => el(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), {
      c() {
        e = $i("div"), an(t.$$.fragment), Ki(e, "class", "image-frame svelte-1gjdske"), Nr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Gn(r, e, a), cn(t, e, null), s = !0;
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
        32) && Nr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (ge(t.$$.fragment, r), s = !0);
      },
      o(r) {
        Be(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Jn(e), rn(t);
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
        n || (ge(e.$$.fragment, o), n = !0);
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
  e = new ru({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: uc,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let h = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Vr(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Kr(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Zr(i)
  );
  function y(W) {
    i[43](W);
  }
  function k(W) {
    i[44](W);
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
    $$slots: { default: [jp] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (C.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (C.dragging = /*dragging*/
  i[31]), c = new M1({ props: C }), i[42](c), ts.push(() => el(c, "uploading", y)), ts.push(() => el(c, "dragging", k)), c.$on(
    "load",
    /*handle_upload*/
    i[33]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let M = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Gr(i)
  ), z = (
    /*value*/
    i[1] !== null && Qr(i)
  ), X = g && $r(i);
  return {
    c() {
      an(e.$$.fragment), t = Hn(), n = $i("div"), h && h.c(), s = Hn(), v && v.c(), l = Hn(), w && w.c(), o = Hn(), r = $i("div"), a = $i("div"), an(c.$$.fragment), d = Hn(), M && M.c(), m = Hn(), z && z.c(), b = Hn(), X && X.c(), Ki(n, "class", "icon-buttons svelte-1gjdske"), Ki(a, "class", "upload-container svelte-1gjdske"), Ki(r, "data-testid", "image"), Ki(r, "class", "image-container svelte-1gjdske");
    },
    m(W, B) {
      cn(e, W, B), Gn(W, t, B), Gn(W, n, B), h && h.m(n, null), gi(n, s), v && v.m(n, null), gi(n, l), w && w.m(n, null), Gn(W, o, B), Gn(W, r, B), gi(r, a), cn(c, a, null), gi(a, d), M && M.m(a, null), gi(a, m), z && z.m(a, null), gi(r, b), X && X.m(r, null), p = !0;
    },
    p(W, B) {
      const x = {};
      B[0] & /*show_label*/
      8 && (x.show_label = /*show_label*/
      W[3]), B[0] & /*label*/
      4 && (x.label = /*label*/
      W[2] || "Image Annotator"), e.$set(x), /*showDownloadButton*/
      W[10] && /*value*/
      W[1] !== null ? h ? (h.p(W, B), B[0] & /*showDownloadButton, value*/
      1026 && ge(h, 1)) : (h = Vr(W), h.c(), ge(h, 1), h.m(n, s)) : h && (Tn(), Be(h, 1, 1, () => {
        h = null;
      }), An()), /*showShareButton*/
      W[9] && /*value*/
      W[1] !== null ? v ? (v.p(W, B), B[0] & /*showShareButton, value*/
      514 && ge(v, 1)) : (v = Kr(W), v.c(), ge(v, 1), v.m(n, l)) : v && (Tn(), Be(v, 1, 1, () => {
        v = null;
      }), An()), /*showClearButton*/
      W[11] && /*value*/
      W[1] !== null && /*interactive*/
      W[7] ? w ? (w.p(W, B), B[0] & /*showClearButton, value, interactive*/
      2178 && ge(w, 1)) : (w = Zr(W), w.c(), ge(w, 1), w.m(n, null)) : w && (Tn(), Be(w, 1, 1, () => {
        w = null;
      }), An());
      const P = {};
      B[0] & /*value, active_source*/
      3 && (P.hidden = /*value*/
      W[1] !== null || /*active_source*/
      W[0] === "webcam"), B[0] & /*active_source*/
      1 && (P.filetype = /*active_source*/
      W[0] === "clipboard" ? "clipboard" : "image/*"), B[0] & /*root*/
      64 && (P.root = /*root*/
      W[6]), B[0] & /*max_file_size*/
      33554432 && (P.max_file_size = /*max_file_size*/
      W[25]), B[0] & /*sources*/
      16 && (P.disable_click = !/*sources*/
      W[4].includes("upload")), B[0] & /*cli_upload*/
      67108864 && (P.upload = /*cli_upload*/
      W[26]), B[0] & /*stream_handler*/
      134217728 && (P.stream_handler = /*stream_handler*/
      W[27]), B[0] & /*value*/
      2 | B[1] & /*$$scope*/
      16777216 && (P.$$scope = { dirty: B, ctx: W }), !f && B[0] & /*uploading*/
      1073741824 && (f = !0, P.uploading = /*uploading*/
      W[30], $s(() => f = !1)), !u && B[1] & /*dragging*/
      1 && (u = !0, P.dragging = /*dragging*/
      W[31], $s(() => u = !1)), c.$set(P), /*value*/
      W[1] === null && /*active_source*/
      W[0] === "webcam" ? M ? (M.p(W, B), B[0] & /*value, active_source*/
      3 && ge(M, 1)) : (M = Gr(W), M.c(), ge(M, 1), M.m(a, m)) : M && (Tn(), Be(M, 1, 1, () => {
        M = null;
      }), An()), /*value*/
      W[1] !== null ? z ? (z.p(W, B), B[0] & /*value*/
      2 && ge(z, 1)) : (z = Qr(W), z.c(), ge(z, 1), z.m(a, null)) : z && (Tn(), Be(z, 1, 1, () => {
        z = null;
      }), An()), B[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (W[4].length > 1 || /*sources*/
      W[4].includes("clipboard")) && /*value*/
      W[1] === null && /*interactive*/
      W[7]), g ? X ? (X.p(W, B), B[0] & /*sources, value, interactive*/
      146 && ge(X, 1)) : (X = $r(W), X.c(), ge(X, 1), X.m(r, null)) : X && (Tn(), Be(X, 1, 1, () => {
        X = null;
      }), An());
    },
    i(W) {
      p || (ge(e.$$.fragment, W), ge(h), ge(v), ge(w), ge(c.$$.fragment, W), ge(M), ge(z), ge(X), p = !0);
    },
    o(W) {
      Be(e.$$.fragment, W), Be(h), Be(v), Be(w), Be(c.$$.fragment, W), Be(M), Be(z), Be(X), p = !1;
    },
    d(W) {
      W && (Jn(t), Jn(n), Jn(o), Jn(r)), rn(e, W), h && h.d(), v && v.d(), w && w.d(), i[42](null), rn(c), M && M.d(), z && z.d(), X && X.d();
    }
  };
}
function Vp(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(D, Xe, He, Ze) {
    function xe(Je) {
      return Je instanceof He ? Je : new He(function(Bt) {
        Bt(Je);
      });
    }
    return new (He || (He = Promise))(function(Je, Bt) {
      function Ge(ye) {
        try {
          un(Ze.next(ye));
        } catch (Me) {
          Bt(Me);
        }
      }
      function Wn(ye) {
        try {
          un(Ze.throw(ye));
        } catch (Me) {
          Bt(Me);
        }
      }
      function un(ye) {
        ye.done ? Je(ye.value) : xe(ye.value).then(Ge, Wn);
      }
      un((Ze = Ze.apply(D, Xe || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: m } = e, { showShareButton: b } = e, { showDownloadButton: g } = e, { showClearButton: p } = e, { boxesAlpha: h } = e, { labelList: v } = e, { labelColors: w } = e, { boxMinSize: y } = e, { handleSize: k } = e, { height: C } = e, { width: M } = e, { boxThickness: z } = e, { disableEditBoxes: X } = e, { singleBox: W } = e, { showRemoveButton: B } = e, { handlesCursor: x } = e, { boxSelectedThickness: P } = e, { max_file_size: U = null } = e, { cli_upload: j } = e, { stream_handler: O } = e, { useDefaultLabel: q } = e, { shapeCreationMode: R } = e, ee, Q = !1, { active_source: T = null } = e;
  function L({ detail: D }) {
    t(1, o = new jr()), t(1, o.image = D, o), se("upload");
  }
  function oe(D) {
    return l(this, void 0, void 0, function* () {
      const Xe = yield ee.load_files([new File([D], "webcam.png")]), He = (Xe == null ? void 0 : Xe[0]) || null;
      He ? (t(1, o = new jr()), t(1, o.image = He, o)) : t(1, o = null), yield Up(), se("change");
    });
  }
  const se = Fp();
  let I = !1;
  function pe(D) {
    return l(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          ee.paste_clipboard();
          break;
      }
    });
  }
  function E() {
    t(1, o = null), se("clear"), se("change");
  }
  const J = async (D) => D === null ? "" : `<img src="${await b_(D.image)}" />`;
  function fe(D) {
    Ti.call(this, i, D);
  }
  function ue(D) {
    Ti.call(this, i, D);
  }
  function V(D) {
    ts[D ? "unshift" : "push"](() => {
      ee = D, t(32, ee);
    });
  }
  function Y(D) {
    Q = D, t(30, Q);
  }
  function Fe(D) {
    I = D, t(31, I);
  }
  function ze(D) {
    Ti.call(this, i, D);
  }
  const re = (D) => oe(D.detail), G = (D) => oe(D.detail);
  function ke(D) {
    Ti.call(this, i, D);
  }
  function yt(D) {
    Ti.call(this, i, D);
  }
  const li = (D) => oe(D.detail);
  function Tt(D) {
    o = D, t(1, o);
  }
  const Ct = () => se("change"), ut = (D) => se("select", { index: null, value: D.detail.coordinates });
  function oi(D) {
    T = D, t(0, T), t(4, c);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, o = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, c = D.sources), "selectable" in D && t(5, f = D.selectable), "root" in D && t(6, u = D.root), "interactive" in D && t(7, d = D.interactive), "i18n" in D && t(8, m = D.i18n), "showShareButton" in D && t(9, b = D.showShareButton), "showDownloadButton" in D && t(10, g = D.showDownloadButton), "showClearButton" in D && t(11, p = D.showClearButton), "boxesAlpha" in D && t(12, h = D.boxesAlpha), "labelList" in D && t(13, v = D.labelList), "labelColors" in D && t(14, w = D.labelColors), "boxMinSize" in D && t(15, y = D.boxMinSize), "handleSize" in D && t(16, k = D.handleSize), "height" in D && t(17, C = D.height), "width" in D && t(18, M = D.width), "boxThickness" in D && t(19, z = D.boxThickness), "disableEditBoxes" in D && t(20, X = D.disableEditBoxes), "singleBox" in D && t(21, W = D.singleBox), "showRemoveButton" in D && t(22, B = D.showRemoveButton), "handlesCursor" in D && t(23, x = D.handlesCursor), "boxSelectedThickness" in D && t(24, P = D.boxSelectedThickness), "max_file_size" in D && t(25, U = D.max_file_size), "cli_upload" in D && t(26, j = D.cli_upload), "stream_handler" in D && t(27, O = D.stream_handler), "useDefaultLabel" in D && t(28, q = D.useDefaultLabel), "shapeCreationMode" in D && t(29, R = D.shapeCreationMode), "active_source" in D && t(0, T = D.active_source), "$$scope" in D && t(55, s = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    1073741824 && Q && E(), i.$$.dirty[1] & /*dragging*/
    1 && se("drag", I), i.$$.dirty[0] & /*active_source, sources*/
    17 && !T && c && t(0, T = c[0]);
  }, [
    T,
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
    h,
    v,
    w,
    y,
    k,
    C,
    M,
    z,
    X,
    W,
    B,
    x,
    P,
    U,
    j,
    O,
    q,
    R,
    Q,
    I,
    ee,
    L,
    oe,
    se,
    pe,
    E,
    n,
    J,
    fe,
    ue,
    V,
    Y,
    Fe,
    ze,
    re,
    G,
    ke,
    yt,
    li,
    Tt,
    Ct,
    ut,
    oi,
    s
  ];
}
class Kp extends Ep {
  constructor(e) {
    super(), Ip(
      this,
      e,
      Vp,
      Np,
      Ap,
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
  SvelteComponent: Zp,
  attr: Ps,
  detach: _f,
  element: mf,
  init: Jp,
  insert: gf,
  noop: ec,
  safe_not_equal: Gp,
  src_url_equal: tc,
  toggle_class: yn
} = window.__gradio__svelte__internal;
function nc(i) {
  let e, t;
  return {
    c() {
      e = mf("img"), tc(e.src, t = /*value*/
      i[0].url) || Ps(e, "src", t), Ps(e, "alt", "");
    },
    m(n, s) {
      gf(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !tc(e.src, t = /*value*/
      n[0].url) && Ps(e, "src", t);
    },
    d(n) {
      n && _f(e);
    }
  };
}
function Qp(i) {
  let e, t = (
    /*value*/
    i[0] && nc(i)
  );
  return {
    c() {
      e = mf("div"), t && t.c(), Ps(e, "class", "container svelte-1sgcyba"), yn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), yn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), yn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), yn(
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
      2 && yn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && yn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && yn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && yn(
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
function $p(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class Mw extends Zp {
  constructor(e) {
    super(), Jp(this, e, $p, Qp, Gp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: ew,
  add_flush_callback: ic,
  assign: tw,
  bind: sc,
  binding_callbacks: lc,
  check_outros: nw,
  create_component: ni,
  destroy_component: ii,
  detach: bf,
  empty: iw,
  flush: me,
  get_spread_object: sw,
  get_spread_update: lw,
  group_outros: ow,
  init: aw,
  insert: pf,
  mount_component: si,
  safe_not_equal: rw,
  space: cw,
  transition_in: fn,
  transition_out: hn
} = window.__gradio__svelte__internal;
function fw(i) {
  let e, t;
  return e = new Pu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [dw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
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
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
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
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
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
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
    }
  };
}
function uw(i) {
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
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
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
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
    }
  };
}
function dw(i) {
  let e, t;
  return e = new uc({}), {
    c() {
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
    },
    i(n) {
      t || (fn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
    }
  };
}
function _w(i) {
  let e, t, n, s;
  const l = [uw, hw, fw], o = [];
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
      t.c(), n = iw();
    },
    m(a, c) {
      o[e].m(a, c), pf(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (ow(), hn(o[f], 1, 1, () => {
        o[f] = null;
      }), nw(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), fn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (fn(t), s = !0);
    },
    o(a) {
      hn(t), s = !1;
    },
    d(a) {
      a && bf(n), o[e].d(a);
    }
  };
}
function mw(i) {
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
    a = tw(a, r[d]);
  e = new Xm({ props: a });
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
    $$slots: { default: [_w] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Kp({ props: u }), lc.push(() => sc(n, "active_source", c)), lc.push(() => sc(n, "value", f)), n.$on(
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
        ni(e.$$.fragment), t = cw(), ni(n.$$.fragment);
      },
      m(d, m) {
        si(e, d, m), pf(d, t, m), si(n, d, m), o = !0;
      },
      p(d, m) {
        const b = m[0] & /*loading_status*/
        2 | m[1] & /*gradio*/
        2 ? lw(r, [
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
          2 && sw(
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
        hn(e.$$.fragment, d), hn(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && bf(t), ii(e, d), ii(n, d);
      }
    }
  );
}
function gw(i) {
  let e, t;
  return e = new fh({
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
      $$slots: { default: [mw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
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
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
    }
  };
}
function bw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: m = !0 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e, { loading_status: p } = e, { sources: h = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: w } = e, { show_clear_button: y } = e, { interactive: k } = e, { boxes_alpha: C } = e, { label_list: M } = e, { label_colors: z } = e, { box_min_size: X } = e, { handle_size: W } = e, { box_thickness: B } = e, { box_selected_thickness: x } = e, { disable_edit_boxes: P } = e, { single_box: U } = e, { show_remove_button: j } = e, { handles_cursor: O } = e, { use_default_label: q } = e, { shape_creation_mode: R } = e, { gradio: ee } = e, Q, T = null;
  function L(Y) {
    T = Y, t(34, T);
  }
  function oe(Y) {
    o = Y, t(0, o);
  }
  const se = () => ee.dispatch("change"), I = () => ee.dispatch("edit"), pe = () => {
    ee.dispatch("clear");
  }, E = ({ detail: Y }) => t(33, Q = Y), J = () => ee.dispatch("upload"), fe = ({ detail: Y }) => ee.dispatch("select", Y), ue = ({ detail: Y }) => ee.dispatch("share", Y), V = ({ detail: Y }) => {
    t(1, p = p || {}), t(1, p.status = "error", p), ee.dispatch("error", Y);
  };
  return i.$$set = (Y) => {
    "elem_id" in Y && t(2, n = Y.elem_id), "elem_classes" in Y && t(3, s = Y.elem_classes), "visible" in Y && t(4, l = Y.visible), "value" in Y && t(0, o = Y.value), "label" in Y && t(5, r = Y.label), "show_label" in Y && t(6, a = Y.show_label), "root" in Y && t(7, c = Y.root), "height" in Y && t(8, f = Y.height), "width" in Y && t(9, u = Y.width), "_selectable" in Y && t(10, d = Y._selectable), "container" in Y && t(11, m = Y.container), "scale" in Y && t(12, b = Y.scale), "min_width" in Y && t(13, g = Y.min_width), "loading_status" in Y && t(1, p = Y.loading_status), "sources" in Y && t(14, h = Y.sources), "show_download_button" in Y && t(15, v = Y.show_download_button), "show_share_button" in Y && t(16, w = Y.show_share_button), "show_clear_button" in Y && t(17, y = Y.show_clear_button), "interactive" in Y && t(18, k = Y.interactive), "boxes_alpha" in Y && t(19, C = Y.boxes_alpha), "label_list" in Y && t(20, M = Y.label_list), "label_colors" in Y && t(21, z = Y.label_colors), "box_min_size" in Y && t(22, X = Y.box_min_size), "handle_size" in Y && t(23, W = Y.handle_size), "box_thickness" in Y && t(24, B = Y.box_thickness), "box_selected_thickness" in Y && t(25, x = Y.box_selected_thickness), "disable_edit_boxes" in Y && t(26, P = Y.disable_edit_boxes), "single_box" in Y && t(27, U = Y.single_box), "show_remove_button" in Y && t(28, j = Y.show_remove_button), "handles_cursor" in Y && t(29, O = Y.handles_cursor), "use_default_label" in Y && t(30, q = Y.use_default_label), "shape_creation_mode" in Y && t(31, R = Y.shape_creation_mode), "gradio" in Y && t(32, ee = Y.gradio);
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
    h,
    v,
    w,
    y,
    k,
    C,
    M,
    z,
    X,
    W,
    B,
    x,
    P,
    U,
    j,
    O,
    q,
    R,
    ee,
    Q,
    T,
    L,
    oe,
    se,
    I,
    pe,
    E,
    J,
    fe,
    ue,
    V
  ];
}
class Bw extends ew {
  constructor(e) {
    super(), aw(
      this,
      e,
      bw,
      gw,
      rw,
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
    this.$$set({ elem_id: e }), me();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), me();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), me();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), me();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), me();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), me();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), me();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), me();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), me();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), me();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), me();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), me();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), me();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), me();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), me();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), me();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), me();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), me();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), me();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), me();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), me();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), me();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), me();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), me();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), me();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), me();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), me();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), me();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), me();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), me();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), me();
  }
  get shape_creation_mode() {
    return this.$$.ctx[31];
  }
  set shape_creation_mode(e) {
    this.$$set({ shape_creation_mode: e }), me();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), me();
  }
}
export {
  Mw as BaseExample,
  Bw as default
};
