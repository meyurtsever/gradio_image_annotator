const {
  SvelteComponent: Vf,
  assign: Kf,
  create_slot: Zf,
  detach: Jf,
  element: Gf,
  get_all_dirty_from_scope: Qf,
  get_slot_changes: $f,
  get_spread_update: eh,
  init: th,
  insert: nh,
  safe_not_equal: ih,
  set_dynamic_element_data: Qo,
  set_style: ut,
  toggle_class: Ft,
  transition_in: oc,
  transition_out: ac,
  update_slot_base: sh
} = window.__gradio__svelte__internal;
function lh(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Zf(
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
    r = Kf(r, o[a]);
  return {
    c() {
      e = Gf(
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
      i[9]), ut(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), ut(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), ut(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), ut(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), ut(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), ut(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), ut(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      nh(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && sh(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? $f(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Qf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Qo(
        /*tag*/
        a[14]
      )(e, r = eh(o, [
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
      1 && ut(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && ut(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && ut(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && ut(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && ut(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && ut(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (oc(l, a), n = !0);
    },
    o(a) {
      ac(l, a), n = !1;
    },
    d(a) {
      a && Jf(e), l && l.d(a);
    }
  };
}
function oh(i) {
  let e, t = (
    /*tag*/
    i[14] && lh(i)
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
function ah(i, e, t) {
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
class rh extends Vf {
  constructor(e) {
    super(), th(this, e, ah, oh, ih, {
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
  SvelteComponent: ch,
  attr: fh,
  create_slot: hh,
  detach: uh,
  element: dh,
  get_all_dirty_from_scope: _h,
  get_slot_changes: mh,
  init: gh,
  insert: bh,
  safe_not_equal: ph,
  transition_in: wh,
  transition_out: vh,
  update_slot_base: kh
} = window.__gradio__svelte__internal;
function yh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = hh(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = dh("div"), s && s.c(), fh(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      bh(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && kh(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? mh(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : _h(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (wh(s, l), t = !0);
    },
    o(l) {
      vh(s, l), t = !1;
    },
    d(l) {
      l && uh(e), s && s.d(l);
    }
  };
}
function Ch(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class xh extends ch {
  constructor(e) {
    super(), gh(this, e, Ch, yh, ph, {});
  }
}
const {
  SvelteComponent: Sh,
  attr: $o,
  check_outros: zh,
  create_component: Mh,
  create_slot: Bh,
  destroy_component: Wh,
  detach: Ys,
  element: Dh,
  empty: Xh,
  get_all_dirty_from_scope: Yh,
  get_slot_changes: Eh,
  group_outros: Rh,
  init: qh,
  insert: Es,
  mount_component: Lh,
  safe_not_equal: Hh,
  set_data: Ih,
  space: Ph,
  text: Ah,
  toggle_class: ai,
  transition_in: Fi,
  transition_out: Rs,
  update_slot_base: Th
} = window.__gradio__svelte__internal;
function ea(i) {
  let e, t;
  return e = new xh({
    props: {
      $$slots: { default: [Fh] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Mh(e.$$.fragment);
    },
    m(n, s) {
      Lh(e, n, s), t = !0;
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
      Wh(e, n);
    }
  };
}
function Fh(i) {
  let e;
  return {
    c() {
      e = Ah(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Es(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Ih(
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
function Uh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Bh(
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
      e = Dh("span"), o && o.c(), t = Ph(), r && r.c(), n = Xh(), $o(e, "data-testid", "block-info"), $o(e, "class", "svelte-22c38v"), ai(e, "sr-only", !/*show_label*/
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
      8) && Th(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Eh(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : Yh(
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
      2 && Fi(r, 1)) : (r = ea(a), r.c(), Fi(r, 1), r.m(n.parentNode, n)) : r && (Rh(), Rs(r, 1, 1, () => {
        r = null;
      }), zh());
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
function Oh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class rc extends Sh {
  constructor(e) {
    super(), qh(this, e, Oh, Uh, Hh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: jh,
  append: hl,
  attr: rs,
  create_component: Nh,
  destroy_component: Vh,
  detach: Kh,
  element: ta,
  init: Zh,
  insert: Jh,
  mount_component: Gh,
  safe_not_equal: Qh,
  set_data: $h,
  space: eu,
  text: tu,
  toggle_class: gn,
  transition_in: nu,
  transition_out: iu
} = window.__gradio__svelte__internal;
function su(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ta("label"), t = ta("span"), Nh(n.$$.fragment), s = eu(), l = tu(
        /*label*/
        i[0]
      ), rs(t, "class", "svelte-9gxdi0"), rs(e, "for", ""), rs(e, "data-testid", "block-label"), rs(e, "class", "svelte-9gxdi0"), gn(e, "hide", !/*show_label*/
      i[2]), gn(e, "sr-only", !/*show_label*/
      i[2]), gn(
        e,
        "float",
        /*float*/
        i[4]
      ), gn(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Jh(r, e, a), hl(e, t), Gh(n, t, null), hl(e, s), hl(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && $h(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && gn(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && gn(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && gn(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && gn(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (nu(n.$$.fragment, r), o = !0);
    },
    o(r) {
      iu(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Kh(e), Vh(n);
    }
  };
}
function lu(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class ou extends jh {
  constructor(e) {
    super(), Zh(this, e, lu, su, Qh, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: au,
  append: ao,
  attr: ln,
  bubble: ru,
  create_component: cu,
  destroy_component: fu,
  detach: cc,
  element: ro,
  init: hu,
  insert: fc,
  listen: uu,
  mount_component: du,
  safe_not_equal: _u,
  set_data: mu,
  set_style: ri,
  space: gu,
  text: bu,
  toggle_class: it,
  transition_in: pu,
  transition_out: wu
} = window.__gradio__svelte__internal;
function na(i) {
  let e, t;
  return {
    c() {
      e = ro("span"), t = bu(
        /*label*/
        i[1]
      ), ln(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      fc(n, e, s), ao(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && mu(
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
function vu(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && na(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = ro("button"), a && a.c(), t = gu(), n = ro("div"), cu(s.$$.fragment), ln(n, "class", "svelte-1lrphxw"), it(
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
      i[7], ln(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), ln(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), ln(
        e,
        "title",
        /*label*/
        i[1]
      ), ln(e, "class", "svelte-1lrphxw"), it(
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
      fc(c, e, f), a && a.m(e, null), ao(e, t), ao(e, n), du(s, n, null), l = !0, o || (r = uu(
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
      2) && ln(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && ln(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && ln(
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
      l || (pu(s.$$.fragment, c), l = !0);
    },
    o(c) {
      wu(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && cc(e), a && a.d(), fu(s), o = !1, r();
    }
  };
}
function ku(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: m = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: p = 0 } = e;
  function h(v) {
    ru.call(this, i, v);
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
class tl extends au {
  constructor(e) {
    super(), hu(this, e, ku, vu, _u, {
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
  SvelteComponent: yu,
  append: Cu,
  attr: ul,
  binding_callbacks: xu,
  create_slot: Su,
  detach: zu,
  element: ia,
  get_all_dirty_from_scope: Mu,
  get_slot_changes: Bu,
  init: Wu,
  insert: Du,
  safe_not_equal: Xu,
  toggle_class: bn,
  transition_in: Yu,
  transition_out: Eu,
  update_slot_base: Ru
} = window.__gradio__svelte__internal;
function qu(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = Su(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ia("div"), t = ia("div"), l && l.c(), ul(t, "class", "icon svelte-3w3rth"), ul(e, "class", "empty svelte-3w3rth"), ul(e, "aria-label", "Empty value"), bn(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), bn(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), bn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), bn(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Du(o, e, r), Cu(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Ru(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Bu(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Mu(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && bn(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && bn(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && bn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && bn(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (Yu(l, o), n = !0);
    },
    o(o) {
      Eu(l, o), n = !1;
    },
    d(o) {
      o && zu(e), l && l.d(o), i[6](null);
    }
  };
}
function Lu(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var d;
    if (!u) return !1;
    const { height: m } = u.getBoundingClientRect(), { height: b } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: m };
    return m > b + 2;
  }
  function f(u) {
    xu[u ? "unshift" : "push"](() => {
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
class Hu extends yu {
  constructor(e) {
    super(), Wu(this, e, Lu, qu, Xu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Iu,
  append: sa,
  attr: st,
  detach: Pu,
  init: Au,
  insert: Tu,
  noop: dl,
  safe_not_equal: Fu,
  svg_element: _l
} = window.__gradio__svelte__internal;
function Uu(i) {
  let e, t, n;
  return {
    c() {
      e = _l("svg"), t = _l("path"), n = _l("circle"), st(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), st(n, "cx", "12"), st(n, "cy", "13"), st(n, "r", "4"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "stroke-width", "1.5"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round"), st(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Tu(s, e, l), sa(e, t), sa(e, n);
    },
    p: dl,
    i: dl,
    o: dl,
    d(s) {
      s && Pu(e);
    }
  };
}
class Ou extends Iu {
  constructor(e) {
    super(), Au(this, e, null, Uu, Fu, {});
  }
}
const {
  SvelteComponent: ju,
  append: Nu,
  attr: Yt,
  detach: Vu,
  init: Ku,
  insert: Zu,
  noop: ml,
  safe_not_equal: Ju,
  svg_element: la
} = window.__gradio__svelte__internal;
function Gu(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("circle"), Yt(t, "cx", "12"), Yt(t, "cy", "12"), Yt(t, "r", "10"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "stroke-width", "1.5"), Yt(e, "stroke-linecap", "round"), Yt(e, "stroke-linejoin", "round"), Yt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Zu(n, e, s), Nu(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && Vu(e);
    }
  };
}
let Qu = class extends ju {
  constructor(e) {
    super(), Ku(this, e, null, Gu, Ju, {});
  }
};
const {
  SvelteComponent: $u,
  append: gl,
  attr: Et,
  detach: ed,
  init: td,
  insert: nd,
  noop: bl,
  safe_not_equal: id,
  set_style: Ut,
  svg_element: cs
} = window.__gradio__svelte__internal;
function sd(i) {
  let e, t, n, s;
  return {
    c() {
      e = cs("svg"), t = cs("g"), n = cs("path"), s = cs("path"), Et(n, "d", "M18,6L6.087,17.913"), Ut(n, "fill", "none"), Ut(n, "fill-rule", "nonzero"), Ut(n, "stroke-width", "2px"), Et(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Et(s, "d", "M4.364,4.364L19.636,19.636"), Ut(s, "fill", "none"), Ut(s, "fill-rule", "nonzero"), Ut(s, "stroke-width", "2px"), Et(e, "width", "100%"), Et(e, "height", "100%"), Et(e, "viewBox", "0 0 24 24"), Et(e, "version", "1.1"), Et(e, "xmlns", "http://www.w3.org/2000/svg"), Et(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Et(e, "xml:space", "preserve"), Et(e, "stroke", "currentColor"), Ut(e, "fill-rule", "evenodd"), Ut(e, "clip-rule", "evenodd"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      nd(l, e, o), gl(e, t), gl(t, n), gl(e, s);
    },
    p: bl,
    i: bl,
    o: bl,
    d(l) {
      l && ed(e);
    }
  };
}
class hc extends $u {
  constructor(e) {
    super(), td(this, e, null, sd, id, {});
  }
}
const {
  SvelteComponent: ld,
  append: od,
  attr: qi,
  detach: ad,
  init: rd,
  insert: cd,
  noop: pl,
  safe_not_equal: fd,
  svg_element: oa
} = window.__gradio__svelte__internal;
function hd(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), qi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), qi(t, "fill", "currentColor"), qi(e, "id", "icon"), qi(e, "xmlns", "http://www.w3.org/2000/svg"), qi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      cd(n, e, s), od(e, t);
    },
    p: pl,
    i: pl,
    o: pl,
    d(n) {
      n && ad(e);
    }
  };
}
class ud extends ld {
  constructor(e) {
    super(), rd(this, e, null, hd, fd, {});
  }
}
const {
  SvelteComponent: dd,
  append: _d,
  attr: ci,
  detach: md,
  init: gd,
  insert: bd,
  noop: wl,
  safe_not_equal: pd,
  svg_element: aa
} = window.__gradio__svelte__internal;
function wd(i) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), ci(t, "fill", "currentColor"), ci(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), ci(e, "xmlns", "http://www.w3.org/2000/svg"), ci(e, "width", "100%"), ci(e, "height", "100%"), ci(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      bd(n, e, s), _d(e, t);
    },
    p: wl,
    i: wl,
    o: wl,
    d(n) {
      n && md(e);
    }
  };
}
class vd extends dd {
  constructor(e) {
    super(), gd(this, e, null, wd, pd, {});
  }
}
const {
  SvelteComponent: kd,
  append: yd,
  attr: fi,
  detach: Cd,
  init: xd,
  insert: Sd,
  noop: vl,
  safe_not_equal: zd,
  svg_element: ra
} = window.__gradio__svelte__internal;
function Md(i) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), fi(t, "d", "M5 8l4 4 4-4z"), fi(e, "class", "dropdown-arrow svelte-145leq6"), fi(e, "xmlns", "http://www.w3.org/2000/svg"), fi(e, "width", "100%"), fi(e, "height", "100%"), fi(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      Sd(n, e, s), yd(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && Cd(e);
    }
  };
}
let Xo = class extends kd {
  constructor(e) {
    super(), xd(this, e, null, Md, zd, {});
  }
};
const {
  SvelteComponent: Bd,
  append: kl,
  attr: We,
  detach: Wd,
  init: Dd,
  insert: Xd,
  noop: yl,
  safe_not_equal: Yd,
  svg_element: fs
} = window.__gradio__svelte__internal;
function Ed(i) {
  let e, t, n, s;
  return {
    c() {
      e = fs("svg"), t = fs("rect"), n = fs("circle"), s = fs("polyline"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(n, "cx", "8.5"), We(n, "cy", "8.5"), We(n, "r", "1.5"), We(s, "points", "21 15 16 10 5 21"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "fill", "none"), We(e, "stroke", "currentColor"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-image");
    },
    m(l, o) {
      Xd(l, e, o), kl(e, t), kl(e, n), kl(e, s);
    },
    p: yl,
    i: yl,
    o: yl,
    d(l) {
      l && Wd(e);
    }
  };
}
let uc = class extends Bd {
  constructor(e) {
    super(), Dd(this, e, null, Ed, Yd, {});
  }
};
const {
  SvelteComponent: Rd,
  append: qd,
  attr: hs,
  detach: Ld,
  init: Hd,
  insert: Id,
  noop: Cl,
  safe_not_equal: Pd,
  svg_element: ca
} = window.__gradio__svelte__internal;
function Ad(i) {
  let e, t;
  return {
    c() {
      e = ca("svg"), t = ca("path"), hs(t, "fill", "currentColor"), hs(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), hs(e, "xmlns", "http://www.w3.org/2000/svg"), hs(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      Id(n, e, s), qd(e, t);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(n) {
      n && Ld(e);
    }
  };
}
class dc extends Rd {
  constructor(e) {
    super(), Hd(this, e, null, Ad, Pd, {});
  }
}
const {
  SvelteComponent: Td,
  append: us,
  attr: De,
  detach: Fd,
  init: Ud,
  insert: Od,
  noop: xl,
  safe_not_equal: jd,
  svg_element: Li
} = window.__gradio__svelte__internal;
function Nd(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = Li("svg"), t = Li("path"), n = Li("path"), s = Li("line"), l = Li("line"), De(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), De(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), De(s, "x1", "12"), De(s, "y1", "19"), De(s, "x2", "12"), De(s, "y2", "23"), De(l, "x1", "8"), De(l, "y1", "23"), De(l, "x2", "16"), De(l, "y2", "23"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "2"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Od(o, e, r), us(e, t), us(e, n), us(e, s), us(e, l);
    },
    p: xl,
    i: xl,
    o: xl,
    d(o) {
      o && Fd(e);
    }
  };
}
class Vd extends Td {
  constructor(e) {
    super(), Ud(this, e, null, Nd, jd, {});
  }
}
const {
  SvelteComponent: Kd,
  append: Zd,
  attr: lt,
  detach: Jd,
  init: Gd,
  insert: Qd,
  noop: Sl,
  safe_not_equal: $d,
  svg_element: fa
} = window.__gradio__svelte__internal;
function e_(i) {
  let e, t;
  return {
    c() {
      e = fa("svg"), t = fa("rect"), lt(t, "x", "3"), lt(t, "y", "3"), lt(t, "width", "18"), lt(t, "height", "18"), lt(t, "rx", "2"), lt(t, "ry", "2"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "stroke-width", "1.5"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round"), lt(e, "class", "feather feather-square");
    },
    m(n, s) {
      Qd(n, e, s), Zd(e, t);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(n) {
      n && Jd(e);
    }
  };
}
class t_ extends Kd {
  constructor(e) {
    super(), Gd(this, e, null, e_, $d, {});
  }
}
const {
  SvelteComponent: n_,
  append: zl,
  attr: Ke,
  detach: i_,
  init: s_,
  insert: l_,
  noop: Ml,
  safe_not_equal: o_,
  svg_element: ds
} = window.__gradio__svelte__internal;
function a_(i) {
  let e, t, n, s;
  return {
    c() {
      e = ds("svg"), t = ds("path"), n = ds("polyline"), s = ds("line"), Ke(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ke(n, "points", "17 8 12 3 7 8"), Ke(s, "x1", "12"), Ke(s, "y1", "3"), Ke(s, "x2", "12"), Ke(s, "y2", "15"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "width", "90%"), Ke(e, "height", "90%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "fill", "none"), Ke(e, "stroke", "currentColor"), Ke(e, "stroke-width", "2"), Ke(e, "stroke-linecap", "round"), Ke(e, "stroke-linejoin", "round"), Ke(e, "class", "feather feather-upload");
    },
    m(l, o) {
      l_(l, e, o), zl(e, t), zl(e, n), zl(e, s);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(l) {
      l && i_(e);
    }
  };
}
let _c = class extends n_ {
  constructor(e) {
    super(), s_(this, e, null, a_, o_, {});
  }
};
const {
  SvelteComponent: r_,
  append: ha,
  attr: pn,
  detach: c_,
  init: f_,
  insert: h_,
  noop: Bl,
  safe_not_equal: u_,
  svg_element: Wl
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t, n;
  return {
    c() {
      e = Wl("svg"), t = Wl("path"), n = Wl("path"), pn(t, "fill", "currentColor"), pn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), pn(n, "fill", "currentColor"), pn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), pn(e, "xmlns", "http://www.w3.org/2000/svg"), pn(e, "width", "100%"), pn(e, "height", "100%"), pn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      h_(s, e, l), ha(e, t), ha(e, n);
    },
    p: Bl,
    i: Bl,
    o: Bl,
    d(s) {
      s && c_(e);
    }
  };
}
let mc = class extends r_ {
  constructor(e) {
    super(), f_(this, e, null, d_, u_, {});
  }
};
const __ = [
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
__.reduce(
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
async function m_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new qs("Must be on Spaces to share.");
  let t, n, s;
  t = g_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
function g_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: b_,
  create_component: p_,
  destroy_component: w_,
  init: v_,
  mount_component: k_,
  safe_not_equal: y_,
  transition_in: C_,
  transition_out: x_
} = window.__gradio__svelte__internal, { createEventDispatcher: S_ } = window.__gradio__svelte__internal;
function z_(i) {
  let e, t;
  return e = new tl({
    props: {
      Icon: ud,
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
      p_(e.$$.fragment);
    },
    m(n, s) {
      k_(e, n, s), t = !0;
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
      t || (C_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      x_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      w_(e, n);
    }
  };
}
function M_(i, e, t) {
  const n = S_();
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
class B_ extends b_ {
  constructor(e) {
    super(), v_(this, e, M_, z_, y_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: W_,
  append: jn,
  attr: co,
  check_outros: D_,
  create_component: gc,
  destroy_component: bc,
  detach: Ls,
  element: fo,
  group_outros: X_,
  init: Y_,
  insert: Hs,
  mount_component: pc,
  safe_not_equal: E_,
  set_data: ho,
  space: uo,
  text: Ui,
  toggle_class: da,
  transition_in: As,
  transition_out: Ts
} = window.__gradio__svelte__internal;
function R_(i) {
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
function q_(i) {
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
      Hs(c, e, f), jn(e, t), jn(e, s), jn(e, l), Hs(c, o, f), Hs(c, a, f);
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
function L_(i) {
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
  const f = [q_, R_], u = [];
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
      Hs(b, e, g), jn(e, t), u[n].m(t, null), jn(e, l), jn(e, r), jn(e, a), m && m.m(e, null), c = !0;
    },
    p(b, [g]) {
      let p = n;
      n = d(b), n !== p && (X_(), Ts(u[p], 1, 1, () => {
        u[p] = null;
      }), D_(), s = u[n], s || (s = u[n] = f[n](b), s.c()), As(s, 1), s.m(t, null)), (!c || g & /*hovered*/
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
function H_(i, e, t) {
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
class wc extends W_ {
  constructor(e) {
    super(), Y_(this, e, H_, L_, E_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: I_,
  append: Dl,
  attr: Gt,
  check_outros: Oi,
  create_component: nl,
  destroy_component: il,
  detach: Mi,
  element: ns,
  empty: P_,
  group_outros: ji,
  init: A_,
  insert: Bi,
  listen: sl,
  mount_component: ll,
  safe_not_equal: T_,
  space: Xl,
  toggle_class: Dn,
  transition_in: Re,
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
      2 && Re(f, 1)) : (f = ga(b), f.c(), Re(f, 1), f.m(e, n)) : f && (ji(), at(f, 1, 1, () => {
        f = null;
      }), Oi()), g & /*sources*/
      2 && (s = /*sources*/
      b[1].includes("microphone")), s ? u ? (u.p(b, g), g & /*sources*/
      2 && Re(u, 1)) : (u = ba(b), u.c(), Re(u, 1), u.m(e, l)) : u && (ji(), at(u, 1, 1, () => {
        u = null;
      }), Oi()), g & /*sources*/
      2 && (o = /*sources*/
      b[1].includes("webcam")), o ? d ? (d.p(b, g), g & /*sources*/
      2 && Re(d, 1)) : (d = pa(b), d.c(), Re(d, 1), d.m(e, r)) : d && (ji(), at(d, 1, 1, () => {
        d = null;
      }), Oi()), g & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? m ? (m.p(b, g), g & /*sources*/
      2 && Re(m, 1)) : (m = wa(b), m.c(), Re(m, 1), m.m(e, null)) : m && (ji(), at(m, 1, 1, () => {
        m = null;
      }), Oi());
    },
    i(b) {
      c || (Re(f), Re(u), Re(d), Re(m), c = !0);
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
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Upload file"), Dn(
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
      1) && Dn(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (Re(t.$$.fragment, o), n = !0);
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
  return t = new Vd({}), {
    c() {
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Record audio"), Dn(
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
      1) && Dn(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (Re(t.$$.fragment, o), n = !0);
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
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Capture from camera"), Dn(
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
      1) && Dn(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (Re(t.$$.fragment, o), n = !0);
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
      e = ns("button"), nl(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Paste from clipboard"), Dn(
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
      1) && Dn(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (Re(t.$$.fragment, o), n = !0);
    },
    o(o) {
      at(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mi(e), il(t), s = !1, l();
    }
  };
}
function F_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && ma(i)
  );
  return {
    c() {
      n && n.c(), e = P_();
    },
    m(s, l) {
      n && n.m(s, l), Bi(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && Re(n, 1)) : (n = ma(s), n.c(), Re(n, 1), n.m(e.parentNode, e)) : n && (ji(), at(n, 1, 1, () => {
        n = null;
      }), Oi());
    },
    i(s) {
      t || (Re(n), t = !0);
    },
    o(s) {
      at(n), t = !1;
    },
    d(s) {
      s && Mi(e), n && n.d(s);
    }
  };
}
function U_(i, e, t) {
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
          B(h.next(z));
        } catch (D) {
          y(D);
        }
      }
      function C(z) {
        try {
          B(h.throw(z));
        } catch (D) {
          y(D);
        }
      }
      function B(z) {
        z.done ? w(z.value) : v(z.value).then(k, C);
      }
      B((h = h.apply(b, g || [])).next());
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
class O_ extends I_ {
  constructor(e) {
    super(), A_(this, e, U_, F_, T_, {
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
const j_ = (i) => i;
function N_(i, e) {
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
function V_(i) {
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
function K_(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Z_(i, { delay: e = 0, duration: t = 400, easing: n = j_ } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function ya(i, { delay: e = 0, duration: t = 400, easing: n = K_, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
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
function J_(i, e = Is) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (N_(i, r) && (i = r, t)) {
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
  const t = J_(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, d = 0, m = !1;
  function b(p, h = {}) {
    f = p;
    const v = a = {};
    return i == null || h.hard || g.stiffness >= 1 && g.damping >= 1 ? (m = !0, o = ka(), c = p, t.set(i = f), Promise.resolve()) : (h.soft && (d = 1 / ((h.soft === !0 ? 0.5 : +h.soft) * 60), u = 0), r || (o = ka(), m = !1, r = V_((w) => {
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
  SvelteComponent: G_,
  append: Rt,
  attr: de,
  component_subscribe: Sa,
  detach: Q_,
  element: $_,
  init: em,
  insert: tm,
  noop: za,
  safe_not_equal: nm,
  set_style: _s,
  svg_element: qt,
  toggle_class: Ma
} = window.__gradio__svelte__internal, { onMount: im } = window.__gradio__svelte__internal;
function sm(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d;
  return {
    c() {
      e = $_("div"), t = qt("svg"), n = qt("g"), s = qt("path"), l = qt("path"), o = qt("path"), r = qt("path"), a = qt("g"), c = qt("path"), f = qt("path"), u = qt("path"), d = qt("path"), de(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), de(s, "fill", "#FF7C00"), de(s, "fill-opacity", "0.4"), de(s, "class", "svelte-43sxxs"), de(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), de(l, "fill", "#FF7C00"), de(l, "class", "svelte-43sxxs"), de(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), de(o, "fill", "#FF7C00"), de(o, "fill-opacity", "0.4"), de(o, "class", "svelte-43sxxs"), de(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), de(r, "fill", "#FF7C00"), de(r, "class", "svelte-43sxxs"), _s(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), de(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), de(c, "fill", "#FF7C00"), de(c, "fill-opacity", "0.4"), de(c, "class", "svelte-43sxxs"), de(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), de(f, "fill", "#FF7C00"), de(f, "class", "svelte-43sxxs"), de(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), de(u, "fill", "#FF7C00"), de(u, "fill-opacity", "0.4"), de(u, "class", "svelte-43sxxs"), de(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), de(d, "fill", "#FF7C00"), de(d, "class", "svelte-43sxxs"), _s(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), de(t, "viewBox", "-1200 -1200 3000 3000"), de(t, "fill", "none"), de(t, "xmlns", "http://www.w3.org/2000/svg"), de(t, "class", "svelte-43sxxs"), de(e, "class", "svelte-43sxxs"), Ma(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(m, b) {
      tm(m, e, b), Rt(e, t), Rt(t, n), Rt(n, s), Rt(n, l), Rt(n, o), Rt(n, r), Rt(t, a), Rt(a, c), Rt(a, f), Rt(a, u), Rt(a, d);
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
      m && Q_(e);
    }
  };
}
function lm(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(m, b, g, p) {
    function h(v) {
      return v instanceof g ? v : new g(function(w) {
        w(v);
      });
    }
    return new (g || (g = Promise))(function(v, w) {
      function y(B) {
        try {
          C(p.next(B));
        } catch (z) {
          w(z);
        }
      }
      function k(B) {
        try {
          C(p.throw(B));
        } catch (z) {
          w(z);
        }
      }
      function C(B) {
        B.done ? v(B.value) : h(B.value).then(y, k);
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
  return im(() => (d(), () => c = !0)), i.$$set = (m) => {
    "margin" in m && t(0, o = m.margin);
  }, [o, n, s, r, a];
}
class om extends G_ {
  constructor(e) {
    super(), em(this, e, lm, sm, nm, { margin: 0 });
  }
}
const {
  SvelteComponent: am,
  append: Nn,
  attr: Tt,
  binding_callbacks: Ba,
  check_outros: mo,
  create_component: Cc,
  create_slot: xc,
  destroy_component: Sc,
  destroy_each: zc,
  detach: te,
  element: Zt,
  empty: Wi,
  ensure_array_like: Fs,
  get_all_dirty_from_scope: Mc,
  get_slot_changes: Bc,
  group_outros: go,
  init: rm,
  insert: ne,
  mount_component: Wc,
  noop: bo,
  safe_not_equal: cm,
  set_data: Bt,
  set_style: Bn,
  space: Mt,
  text: Me,
  toggle_class: zt,
  transition_in: At,
  transition_out: Jt,
  update_slot_base: Dc
} = window.__gradio__svelte__internal, { tick: fm } = window.__gradio__svelte__internal, { onDestroy: hm } = window.__gradio__svelte__internal, { createEventDispatcher: um } = window.__gradio__svelte__internal, dm = (i) => ({}), Wa = (i) => ({}), _m = (i) => ({}), Da = (i) => ({});
function Xa(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ya(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function mm(i) {
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
      e = Zt("div"), Cc(t.$$.fragment), n = Mt(), s = Zt("span"), o = Me(l), r = Mt(), f && f.c(), Tt(e, "class", "clear-status svelte-16nch4a"), Tt(s, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      ne(u, e, d), Wc(t, e, null), ne(u, n, d), ne(u, s, d), Nn(s, o), ne(u, r, d), f && f.m(u, d), a = !0;
    },
    p(u, d) {
      const m = {};
      d[0] & /*i18n*/
      2 && (m.label = /*i18n*/
      u[1]("common.clear")), t.$set(m), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && Bt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
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
          dm
        ) : Mc(
          /*$$scope*/
          u[29]
        ),
        Wa
      );
    },
    i(u) {
      a || (At(t.$$.fragment, u), At(f, u), a = !0);
    },
    o(u) {
      Jt(t.$$.fragment, u), Jt(f, u), a = !1;
    },
    d(u) {
      u && (te(e), te(n), te(s), te(r)), Sc(t), f && f.d(u);
    }
  };
}
function gm(i) {
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
    ) return wm;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return pm;
    if (
      /*queue_position*/
      w[2] === 0
    ) return bm;
  }
  let d = u(i), m = d && d(i), b = (
    /*timer*/
    i[5] && La(i)
  );
  const g = [Cm, ym], p = [];
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
      f && f.c(), e = Mt(), t = Zt("div"), m && m.c(), n = Mt(), b && b.c(), s = Mt(), o && o.c(), r = Mt(), v && v.c(), a = Wi(), Tt(t, "class", "progress-text svelte-16nch4a"), zt(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), zt(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, y) {
      f && f.m(w, y), ne(w, e, y), ne(w, t, y), m && m.m(t, null), Nn(t, n), b && b.m(t, null), ne(w, s, y), ~l && p[l].m(w, y), ne(w, r, y), v && v.m(w, y), ne(w, a, y), c = !0;
    },
    p(w, y) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, y) : (f = Ea(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = u(w)) && m ? m.p(w, y) : (m && m.d(1), m = d && d(w), m && (m.c(), m.m(t, n))), /*timer*/
      w[5] ? b ? b.p(w, y) : (b = La(w), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!c || y[0] & /*variant*/
      256) && zt(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || y[0] & /*variant*/
      256) && zt(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let k = l;
      l = h(w), l === k ? ~l && p[l].p(w, y) : (o && (go(), Jt(p[k], 1, 1, () => {
        p[k] = null;
      }), mo()), ~l ? (o = p[l], o ? o.p(w, y) : (o = p[l] = g[l](w), o.c()), At(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? v && (go(), Jt(v, 1, 1, () => {
        v = null;
      }), mo()) : v ? (v.p(w, y), y[0] & /*timer*/
      32 && At(v, 1)) : (v = Ua(w), v.c(), At(v, 1), v.m(a.parentNode, a));
    },
    i(w) {
      c || (At(o), At(v), c = !0);
    },
    o(w) {
      Jt(o), Jt(v), c = !1;
    },
    d(w) {
      w && (te(e), te(t), te(s), te(r), te(a)), f && f.d(w), m && m.d(), b && b.d(), ~l && p[l].d(w), v && v.d(w);
    }
  };
}
function Ea(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Zt("div"), Tt(e, "class", "eta-bar svelte-16nch4a"), Bn(e, "transform", t);
    },
    m(n, s) {
      ne(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Bn(e, "transform", t);
    },
    d(n) {
      n && te(e);
    }
  };
}
function bm(i) {
  let e;
  return {
    c() {
      e = Me("processing |");
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
function pm(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = Me("queue: "), n = Me(t), s = Me("/"), l = Me(
        /*queue_size*/
        i[3]
      ), o = Me(" |");
    },
    m(r, a) {
      ne(r, e, a), ne(r, n, a), ne(r, s, a), ne(r, l, a), ne(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Bt(n, t), a[0] & /*queue_size*/
      8 && Bt(
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
function wm(i) {
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
      f[41].length != null ? km : vm
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Mt(), n = Me(t), s = Me(" | "), o = Me(l);
    },
    m(f, u) {
      c.m(f, u), ne(f, e, u), ne(f, n, u), ne(f, s, u), ne(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && Bt(n, t);
    },
    d(f) {
      f && (te(e), te(n), te(s), te(o)), c.d(f);
    }
  };
}
function vm(i) {
  let e = wi(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Me(e);
    },
    m(n, s) {
      ne(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = wi(
        /*p*/
        n[41].index || 0
      ) + "") && Bt(t, e);
    },
    d(n) {
      n && te(t);
    }
  };
}
function km(i) {
  let e = wi(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = wi(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = Me(e), n = Me("/"), l = Me(s);
    },
    m(o, r) {
      ne(o, t, r), ne(o, n, r), ne(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = wi(
        /*p*/
        o[41].index || 0
      ) + "") && Bt(t, e), r[0] & /*progress*/
      128 && s !== (s = wi(
        /*p*/
        o[41].length
      ) + "") && Bt(l, s);
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
      t && t.c(), e = Wi();
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
      e = Me(
        /*formatted_timer*/
        i[20]
      ), n = Me(t), s = Me("s");
    },
    m(l, o) {
      ne(l, e, o), ne(l, n, o), ne(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Bt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Bt(n, t);
    },
    d(l) {
      l && (te(e), te(n), te(s));
    }
  };
}
function ym(i) {
  let e, t;
  return e = new om({
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
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sc(e, n);
    }
  };
}
function Cm(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Ha(i)
  );
  return {
    c() {
      e = Zt("div"), t = Zt("div"), r && r.c(), n = Mt(), s = Zt("div"), l = Zt("div"), Tt(t, "class", "progress-level-inner svelte-16nch4a"), Tt(l, "class", "progress-bar svelte-16nch4a"), Bn(l, "width", o), Tt(s, "class", "progress-bar-wrap svelte-16nch4a"), Tt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      ne(a, e, c), Nn(e, t), r && r.m(t, null), Nn(e, n), Nn(e, s), Nn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = Ha(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Bn(l, "width", o);
    },
    i: bo,
    o: bo,
    d(a) {
      a && te(e), r && r.d(), i[31](null);
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
      l && l.c(), e = Mt(), o && o.c(), t = Mt(), r && r.c(), n = Mt(), a && a.c(), s = Wi();
    },
    m(c, f) {
      l && l.m(c, f), ne(c, e, f), o && o.m(c, f), ne(c, t, f), r && r.m(c, f), ne(c, n, f), a && a.m(c, f), ne(c, s, f);
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
      c && (te(e), te(t), te(n), te(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function xm(i) {
  let e;
  return {
    c() {
      e = Me(" /");
    },
    m(t, n) {
      ne(t, e, n);
    },
    d(t) {
      t && te(e);
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
      t = Me(e);
    },
    m(n, s) {
      ne(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Bt(t, e);
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
      e = Me("-");
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
      t = Me(e), n = Me("%");
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
      ] || 0)).toFixed(1) + "") && Bt(t, e);
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
      t && t.c(), e = Wi();
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
  ), o = xc(
    l,
    i,
    /*$$scope*/
    i[29],
    Da
  );
  return {
    c() {
      e = Zt("p"), t = Me(
        /*loading_text*/
        i[9]
      ), n = Mt(), o && o.c(), Tt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      ne(r, e, a), Nn(e, t), ne(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && Bt(
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
          _m
        ) : Mc(
          /*$$scope*/
          r[29]
        ),
        Da
      );
    },
    i(r) {
      s || (At(o, r), s = !0);
    },
    o(r) {
      Jt(o, r), s = !1;
    },
    d(r) {
      r && (te(e), te(n)), o && o.d(r);
    }
  };
}
function Sm(i) {
  let e, t, n, s, l;
  const o = [gm, mm], r = [];
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
      e = Zt("div"), n && n.c(), Tt(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), zt(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), zt(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), zt(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), zt(
        e,
        "border",
        /*border*/
        i[12]
      ), Bn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Bn(
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
      }), mo()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), At(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && Tt(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && zt(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && zt(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && zt(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && zt(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && Bn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Bn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (At(n), l = !0);
    },
    o(c) {
      Jt(n), l = !1;
    },
    d(c) {
      c && te(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var zm = function(i, e, t, n) {
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
function Mm(i) {
  return zm(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (ms.push(e), !Yl) Yl = !0;
      else return;
      yield fm(), requestAnimationFrame(() => {
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
function Bm(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = um();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: m = !0 } = e, { show_progress: b = "full" } = e, { message: g = null } = e, { progress: p = null } = e, { variant: h = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: y = !1 } = e, { border: k = !1 } = e, { autoscroll: C } = e, B, z = !1, D = 0, x = 0, M = null, Y = null, I = 0, T = null, K, R = null, he = !0;
  const q = () => {
    t(0, a = t(27, M = t(19, J = null))), t(25, D = performance.now()), t(26, x = 0), z = !0, $();
  };
  function $() {
    requestAnimationFrame(() => {
      t(26, x = (performance.now() - D) / 1e3), z && $();
    });
  }
  function j() {
    t(26, x = 0), t(0, a = t(27, M = t(19, J = null))), z && (z = !1);
  }
  hm(() => {
    z && j();
  });
  let J = null;
  function H(A) {
    Ba[A ? "unshift" : "push"](() => {
      R = A, t(16, R), t(7, p), t(14, T), t(15, K);
    });
  }
  const se = () => {
    o("clear_status");
  };
  function le(A) {
    Ba[A ? "unshift" : "push"](() => {
      B = A, t(13, B);
    });
  }
  return i.$$set = (A) => {
    "i18n" in A && t(1, r = A.i18n), "eta" in A && t(0, a = A.eta), "queue_position" in A && t(2, c = A.queue_position), "queue_size" in A && t(3, f = A.queue_size), "status" in A && t(4, u = A.status), "scroll_to_output" in A && t(22, d = A.scroll_to_output), "timer" in A && t(5, m = A.timer), "show_progress" in A && t(6, b = A.show_progress), "message" in A && t(23, g = A.message), "progress" in A && t(7, p = A.progress), "variant" in A && t(8, h = A.variant), "loading_text" in A && t(9, v = A.loading_text), "absolute" in A && t(10, w = A.absolute), "translucent" in A && t(11, y = A.translucent), "border" in A && t(12, k = A.border), "autoscroll" in A && t(24, C = A.autoscroll), "$$scope" in A && t(29, l = A.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = M), a != null && M !== a && (t(28, Y = (performance.now() - D) / 1e3 + a), t(19, J = Y.toFixed(1)), t(27, M = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, I = Y === null || Y <= 0 || !x ? null : Math.min(x / Y, 1)), i.$$.dirty[0] & /*progress*/
    128 && p != null && t(18, he = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? t(14, T = p.map((A) => {
      if (A.index != null && A.length != null)
        return A.index / A.length;
      if (A.progress != null)
        return A.progress;
    })) : t(14, T = null), T ? (t(15, K = T[T.length - 1]), R && (K === 0 ? t(16, R.style.transition = "0", R) : t(16, R.style.transition = "150ms", R))) : t(15, K = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? q() : j()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && B && d && (u === "pending" || u === "complete") && Mm(B, C), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = x.toFixed(1));
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
    B,
    T,
    K,
    R,
    I,
    he,
    J,
    n,
    o,
    d,
    g,
    C,
    D,
    x,
    M,
    Y,
    l,
    s,
    H,
    se,
    le
  ];
}
class Wm extends am {
  constructor(e) {
    super(), rm(
      this,
      e,
      Bm,
      Sm,
      cm,
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
const { setContext: kw, getContext: Dm } = window.__gradio__svelte__internal, Xm = "WORKER_PROXY_CONTEXT_KEY";
function Xc() {
  return Dm(Xm);
}
function Ym(i) {
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
  return !(!Ym(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Em(i) {
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
  SvelteComponent: Rm,
  assign: Us,
  check_outros: Rc,
  compute_rest_props: Oa,
  create_slot: Yo,
  detach: ol,
  element: qc,
  empty: Lc,
  exclude_internal_props: qm,
  get_all_dirty_from_scope: Eo,
  get_slot_changes: Ro,
  get_spread_update: Hc,
  group_outros: Ic,
  init: Lm,
  insert: al,
  listen: Pc,
  prevent_default: Hm,
  safe_not_equal: Im,
  set_attributes: Os,
  transition_in: $n,
  transition_out: ei,
  update_slot_base: qo
} = window.__gradio__svelte__internal, { createEventDispatcher: Pm } = window.__gradio__svelte__internal;
function Am(i) {
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
function Tm(i) {
  let e, t, n, s;
  const l = [Um, Fm], o = [];
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
function Fm(i) {
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
      al(c, e, f), o && o.m(e, null), t = !0, n || (s = Pc(e, "click", Hm(
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
function Um(i) {
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
function Om(i) {
  let e, t, n, s, l;
  const o = [Tm, Am], r = [];
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
function jm(i, e, t) {
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
          B(h.next(z));
        } catch (D) {
          y(D);
        }
      }
      function C(z) {
        try {
          B(h.throw(z));
        } catch (D) {
          y(D);
        }
      }
      function B(z) {
        z.done ? w(z.value) : v(z.value).then(k, C);
      }
      B((h = h.apply(b, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Pm();
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
    e = Us(Us({}, e), qm(b)), t(6, s = Oa(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, c = b.download), "$$scope" in b && t(7, o = b.$$scope);
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
class Nm extends Rm {
  constructor(e) {
    super(), Lm(this, e, jm, Om, Im, { href: 0, download: 1 });
  }
}
var Vm = Object.defineProperty, Km = (i, e, t) => e in i ? Vm(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, en = (i, e, t) => (Km(i, typeof e != "symbol" ? e + "" : e, t), t), Ac = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Hi = (i, e, t) => (Ac(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Zm = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Jm = (i, e, t, n) => (Ac(i, e, "write to private field"), e.set(i, t), t), Sn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Tc(i, e) {
  return i.map(
    (t) => new Gm({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Gm {
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
    en(this, "path"), en(this, "url"), en(this, "orig_name"), en(this, "size"), en(this, "blob"), en(this, "is_stream"), en(this, "mime_type"), en(this, "alt_text"), en(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class yw extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Hi(this, Sn) + t; ; ) {
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
        Jm(this, Sn, t);
      },
      flush: (t) => {
        if (Hi(this, Sn) === "")
          return;
        const n = e.allowCR && Hi(this, Sn).endsWith("\r") ? Hi(this, Sn).slice(0, -1) : Hi(this, Sn);
        t.enqueue(n);
      }
    }), Zm(this, Sn, "");
  }
}
Sn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Qm,
  append: ct,
  attr: Un,
  detach: Fc,
  element: On,
  init: $m,
  insert: Uc,
  noop: ja,
  safe_not_equal: e1,
  set_data: js,
  set_style: El,
  space: po,
  text: vi,
  toggle_class: Na
} = window.__gradio__svelte__internal, { onMount: t1, createEventDispatcher: n1, onDestroy: i1 } = window.__gradio__svelte__internal;
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
      e = On("div"), t = On("span"), n = On("div"), s = On("progress"), o = vi(l), a = po(), c = On("span"), u = vi(f), El(s, "visibility", "hidden"), El(s, "height", "0"), El(s, "width", "0"), s.value = r = Ni(
        /*file_to_display*/
        i[2]
      ), Un(s, "max", "100"), Un(s, "class", "svelte-cr2edf"), Un(n, "class", "progress-bar svelte-cr2edf"), Un(c, "class", "file-name svelte-cr2edf"), Un(e, "class", "file svelte-cr2edf");
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
function s1(i) {
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
      e = On("div"), t = On("span"), n = vi("Uploading "), l = vi(s), o = po(), a = vi(r), c = vi("..."), f = po(), u && u.c(), Un(t, "class", "uploading svelte-cr2edf"), Un(e, "class", "wrap svelte-cr2edf"), Na(
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
function l1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Ni(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function o1(i, e, t) {
  var n = this && this.__awaiter || function(g, p, h, v) {
    function w(y) {
      return y instanceof h ? y : new h(function(k) {
        k(y);
      });
    }
    return new (h || (h = Promise))(function(y, k) {
      function C(D) {
        try {
          z(v.next(D));
        } catch (x) {
          k(x);
        }
      }
      function B(D) {
        try {
          z(v.throw(D));
        } catch (x) {
          k(x);
        }
      }
      function z(D) {
        D.done ? y(D.value) : w(D.value).then(C, B);
      }
      z((v = v.apply(g, p || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, d = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const m = n1();
  function b(g, p) {
    t(0, d = d.map((h) => (h.orig_name === g && (h.progress += p), h)));
  }
  return t1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const p = JSON.parse(g.data);
        c || t(1, c = !0), p.msg === "done" ? (a == null || a.close(), m("done")) : (t(7, f = p), b(p.orig_name, p.chunk_size));
      });
    };
  })), i1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && l1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class a1 extends Qm {
  constructor(e) {
    super(), $m(this, e, o1, s1, e1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: r1,
  append: Ka,
  attr: Je,
  binding_callbacks: c1,
  bubble: En,
  check_outros: Oc,
  create_component: f1,
  create_slot: jc,
  destroy_component: h1,
  detach: rl,
  element: wo,
  empty: Nc,
  get_all_dirty_from_scope: Vc,
  get_slot_changes: Kc,
  group_outros: Zc,
  init: u1,
  insert: cl,
  listen: mt,
  mount_component: d1,
  prevent_default: Rn,
  run_all: _1,
  safe_not_equal: m1,
  set_style: Jc,
  space: g1,
  stop_propagation: qn,
  toggle_class: Ie,
  transition_in: Wn,
  transition_out: ti,
  update_slot_base: Gc
} = window.__gradio__svelte__internal, { createEventDispatcher: b1, tick: p1 } = window.__gradio__svelte__internal;
function w1(i) {
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
      e = wo("button"), m && m.c(), t = g1(), n = wo("input"), Je(n, "aria-label", "file upload"), Je(n, "data-testid", "file-upload"), Je(n, "type", "file"), Je(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, Je(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), Je(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Je(n, "class", "svelte-1s26xmt"), Je(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Je(e, "class", "svelte-1s26xmt"), Ie(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Ie(
        e,
        "center",
        /*center*/
        i[4]
      ), Ie(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Ie(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Ie(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Jc(e, "height", "100%");
    },
    m(b, g) {
      cl(b, e, g), m && m.m(e, null), Ka(e, t), Ka(e, n), i[34](n), c = !0, f || (u = [
        mt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        mt(e, "drag", qn(Rn(
          /*drag_handler*/
          i[27]
        ))),
        mt(e, "dragstart", qn(Rn(
          /*dragstart_handler*/
          i[28]
        ))),
        mt(e, "dragend", qn(Rn(
          /*dragend_handler*/
          i[29]
        ))),
        mt(e, "dragover", qn(Rn(
          /*dragover_handler*/
          i[30]
        ))),
        mt(e, "dragenter", qn(Rn(
          /*dragenter_handler*/
          i[31]
        ))),
        mt(e, "dragleave", qn(Rn(
          /*dragleave_handler*/
          i[32]
        ))),
        mt(e, "drop", qn(Rn(
          /*drop_handler*/
          i[33]
        ))),
        mt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        mt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        mt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        mt(
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
      b[16] || void 0)) && Je(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      b[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      b[6] === "directory" || void 0)) && Je(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      b[6] === "directory" || void 0)) && Je(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      b[9] ? -1 : 0)) && Je(e, "tabindex", a), (!c || g[0] & /*hidden*/
      512) && Ie(
        e,
        "hidden",
        /*hidden*/
        b[9]
      ), (!c || g[0] & /*center*/
      16) && Ie(
        e,
        "center",
        /*center*/
        b[4]
      ), (!c || g[0] & /*boundedheight*/
      8) && Ie(
        e,
        "boundedheight",
        /*boundedheight*/
        b[3]
      ), (!c || g[0] & /*flex*/
      32) && Ie(
        e,
        "flex",
        /*flex*/
        b[5]
      ), (!c || g[0] & /*disable_click*/
      128) && Ie(
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
      b && rl(e), m && m.d(b), i[34](null), f = !1, _1(u);
    }
  };
}
function v1(i) {
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
function k1(i) {
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
      e = wo("button"), r && r.c(), Je(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Je(e, "class", "svelte-1s26xmt"), Ie(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Ie(
        e,
        "center",
        /*center*/
        i[4]
      ), Ie(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Ie(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Jc(e, "height", "100%");
    },
    m(a, c) {
      cl(a, e, c), r && r.m(e, null), n = !0, s || (l = mt(
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
      a[9] ? -1 : 0)) && Je(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && Ie(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && Ie(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && Ie(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && Ie(
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
  return e = new a1({
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
      f1(e.$$.fragment);
    },
    m(n, s) {
      d1(e, n, s), t = !0;
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
      h1(e, n);
    }
  };
}
function y1(i) {
  let e, t, n, s;
  const l = [k1, v1, w1], o = [];
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
function C1(i, e, t) {
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
  var l = this && this.__awaiter || function(E, Z, P, ce) {
    function X(Ce) {
      return Ce instanceof P ? Ce : new P(function(be) {
        be(Ce);
      });
    }
    return new (P || (P = Promise))(function(Ce, be) {
      function G(tt) {
        try {
          qe(ce.next(tt));
        } catch (kt) {
          be(kt);
        }
      }
      function re(tt) {
        try {
          qe(ce.throw(tt));
        } catch (kt) {
          be(kt);
        }
      }
      function qe(tt) {
        tt.done ? Ce(tt.value) : X(tt.value).then(G, re);
      }
      qe((ce = ce.apply(E, Z || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: m } = e, { hidden: b = !1 } = e, { format: g = "file" } = e, { uploading: p = !1 } = e, { hidden_upload: h = null } = e, { show_progress: v = !0 } = e, { max_file_size: w = null } = e, { upload: y } = e, { stream_handler: k } = e, C, B, z;
  const D = b1(), x = ["image", "video", "audio", "text", "file"], M = (E) => E.startsWith(".") || E.endsWith("/*") ? E : x.includes(E) ? E + "/*" : "." + E;
  function Y() {
    t(20, r = !r);
  }
  function I() {
    navigator.clipboard.read().then((E) => l(this, void 0, void 0, function* () {
      for (let Z = 0; Z < E.length; Z++) {
        const P = E[Z].types.find((ce) => ce.startsWith("image/"));
        if (P) {
          E[Z].getType(P).then((ce) => l(this, void 0, void 0, function* () {
            const X = new File([ce], `clipboard.${P.replace("image/", "")}`);
            yield R([X]);
          }));
          break;
        }
      }
    }));
  }
  function T() {
    d || h && (t(2, h.value = "", h), h.click());
  }
  function K(E) {
    return l(this, void 0, void 0, function* () {
      yield p1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, p = !0);
      try {
        const Z = yield y(E, m, C, w ?? 1 / 0);
        return D("load", u === "single" ? Z == null ? void 0 : Z[0] : Z), t(1, p = !1), Z || [];
      } catch (Z) {
        return D("error", Z.message), t(1, p = !1), [];
      }
    });
  }
  function R(E) {
    return l(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let Z = E.map((P) => new File([P], P instanceof File ? P.name : "file", { type: P.type }));
      return t(15, B = yield Tc(Z)), yield K(B);
    });
  }
  function he(E) {
    return l(this, void 0, void 0, function* () {
      const Z = E.target;
      if (Z.files)
        if (g != "blob")
          yield R(Array.from(Z.files));
        else {
          if (u === "single") {
            D("load", Z.files[0]);
            return;
          }
          D("load", Z.files);
        }
    });
  }
  function q(E) {
    return l(this, void 0, void 0, function* () {
      var Z;
      if (t(20, r = !1), !(!((Z = E.dataTransfer) === null || Z === void 0) && Z.files)) return;
      const P = Array.from(E.dataTransfer.files).filter((ce) => {
        const X = "." + ce.name.split(".").pop();
        return X && C1(z, X, ce.type) || (X && Array.isArray(o) ? o.includes(X) : X === o) ? !0 : (D("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield R(P);
    });
  }
  function $(E) {
    En.call(this, i, E);
  }
  function j(E) {
    En.call(this, i, E);
  }
  function J(E) {
    En.call(this, i, E);
  }
  function H(E) {
    En.call(this, i, E);
  }
  function se(E) {
    En.call(this, i, E);
  }
  function le(E) {
    En.call(this, i, E);
  }
  function A(E) {
    En.call(this, i, E);
  }
  function Ee(E) {
    c1[E ? "unshift" : "push"](() => {
      h = E, t(2, h);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, o = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, c = E.center), "flex" in E && t(5, f = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, d = E.disable_click), "root" in E && t(8, m = E.root), "hidden" in E && t(9, b = E.hidden), "format" in E && t(21, g = E.format), "uploading" in E && t(1, p = E.uploading), "hidden_upload" in E && t(2, h = E.hidden_upload), "show_progress" in E && t(10, v = E.show_progress), "max_file_size" in E && t(22, w = E.max_file_size), "upload" in E && t(23, y = E.upload), "stream_handler" in E && t(11, k = E.stream_handler), "$$scope" in E && t(25, s = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, z = null) : typeof o == "string" ? t(16, z = M(o)) : (t(0, o = o.map(M)), t(16, z = o.join(", "))));
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
    I,
    T,
    C,
    B,
    z,
    Y,
    he,
    q,
    r,
    g,
    w,
    y,
    R,
    s,
    n,
    $,
    j,
    J,
    H,
    se,
    le,
    A,
    Ee
  ];
}
class S1 extends r1 {
  constructor(e) {
    super(), u1(
      this,
      e,
      x1,
      y1,
      m1,
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
  SvelteComponent: z1,
  append: gs,
  attr: Rl,
  create_component: M1,
  destroy_component: B1,
  detach: W1,
  element: ql,
  init: D1,
  insert: X1,
  listen: Y1,
  mount_component: E1,
  noop: R1,
  safe_not_equal: q1,
  set_style: L1,
  space: H1,
  text: I1,
  transition_in: P1,
  transition_out: A1
} = window.__gradio__svelte__internal, { createEventDispatcher: T1 } = window.__gradio__svelte__internal;
function F1(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new mc({}), {
    c() {
      e = ql("button"), t = ql("div"), n = ql("span"), M1(s.$$.fragment), l = H1(), r = I1(o), Rl(n, "class", "icon-wrap svelte-fjcd9c"), Rl(t, "class", "wrap svelte-fjcd9c"), Rl(e, "class", "svelte-fjcd9c"), L1(e, "height", "100%");
    },
    m(u, d) {
      X1(u, e, d), gs(e, t), gs(t, n), E1(s, n, null), gs(t, l), gs(t, r), a = !0, c || (f = Y1(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: R1,
    i(u) {
      a || (P1(s.$$.fragment, u), a = !0);
    },
    o(u) {
      A1(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && W1(e), B1(s), c = !1, f();
    }
  };
}
function U1(i) {
  const e = T1();
  return [e, () => e("click")];
}
class O1 extends z1 {
  constructor(e) {
    super(), D1(this, e, U1, F1, q1, {});
  }
}
function j1() {
  return navigator.mediaDevices.enumerateDevices();
}
function N1(i, e) {
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
  return navigator.mediaDevices.getUserMedia(s).then((l) => (N1(l, e), l));
}
function V1(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: K1,
  action_destroyer: Z1,
  add_render_callback: J1,
  append: rn,
  attr: Ye,
  binding_callbacks: G1,
  check_outros: Zi,
  create_component: Di,
  create_in_transition: Q1,
  destroy_component: Xi,
  destroy_each: $1,
  detach: ft,
  element: vt,
  empty: Lo,
  ensure_array_like: Ga,
  group_outros: Ji,
  init: e0,
  insert: ht,
  listen: Ns,
  mount_component: Yi,
  noop: Ho,
  run_all: t0,
  safe_not_equal: n0,
  set_data: Qc,
  set_input_value: vo,
  space: es,
  stop_propagation: i0,
  text: $c,
  toggle_class: bs,
  transition_in: Pe,
  transition_out: Ge
} = window.__gradio__svelte__internal, { createEventDispatcher: s0, onMount: l0 } = window.__gradio__svelte__internal;
function Qa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function o0(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = [c0, r0], m = [];
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
      e = vt("div"), t = vt("button"), s.c(), o = es(), g && g.c(), r = es(), p && p.c(), a = Lo(), Ye(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), Ye(t, "class", "svelte-8hqvb6"), Ye(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(h, v) {
      ht(h, e, v), rn(e, t), m[n].m(t, null), rn(e, o), g && g.m(e, null), ht(h, r, v), p && p.m(h, v), ht(h, a, v), c = !0, f || (u = Ns(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(h, v) {
      let w = n;
      n = b(h), n === w ? m[n].p(h, v) : (Ji(), Ge(m[w], 1, 1, () => {
        m[w] = null;
      }), Zi(), s = m[n], s ? s.p(h, v) : (s = m[n] = d[n](h), s.c()), Pe(s, 1), s.m(t, null)), (!c || v[0] & /*mode*/
      2 && l !== (l = /*mode*/
      h[1] === "image" ? "capture photo" : "start recording")) && Ye(t, "aria-label", l), /*recording*/
      h[8] ? g && (Ji(), Ge(g, 1, 1, () => {
        g = null;
      }), Zi()) : g ? (g.p(h, v), v[0] & /*recording*/
      256 && Pe(g, 1)) : (g = $a(h), g.c(), Pe(g, 1), g.m(e, null)), /*options_open*/
      h[10] && /*selected_device*/
      h[7] ? p ? (p.p(h, v), v[0] & /*options_open, selected_device*/
      1152 && Pe(p, 1)) : (p = er(h), p.c(), Pe(p, 1), p.m(a.parentNode, a)) : p && (Ji(), Ge(p, 1, 1, () => {
        p = null;
      }), Zi());
    },
    i(h) {
      c || (Pe(s), Pe(g), Pe(p), c = !0);
    },
    o(h) {
      Ge(s), Ge(g), Ge(p), c = !1;
    },
    d(h) {
      h && (ft(e), ft(r), ft(a)), m[n].d(), g && g.d(), p && p.d(h), f = !1, u();
    }
  };
}
function a0(i) {
  let e, t, n, s;
  return t = new O1({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = vt("div"), Di(t.$$.fragment), Ye(e, "title", "grant webcam access");
    },
    m(l, o) {
      ht(l, e, o), Yi(t, e, null), s = !0;
    },
    p: Ho,
    i(l) {
      s || (Pe(t.$$.fragment, l), l && (n || J1(() => {
        n = Q1(e, Z_, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      Ge(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && ft(e), Xi(t);
    }
  };
}
function r0(i) {
  let e, t, n;
  return t = new Ou({}), {
    c() {
      e = vt("div"), Di(t.$$.fragment), Ye(e, "class", "icon svelte-8hqvb6"), Ye(e, "title", "capture photo");
    },
    m(s, l) {
      ht(s, e, l), Yi(t, e, null), n = !0;
    },
    p: Ho,
    i(s) {
      n || (Pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ge(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function c0(i) {
  let e, t, n, s;
  const l = [h0, f0], o = [];
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
      e = r(a), e !== f && (Ji(), Ge(o[f], 1, 1, () => {
        o[f] = null;
      }), Zi(), t = o[e], t || (t = o[e] = l[e](a), t.c()), Pe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Pe(t), s = !0);
    },
    o(a) {
      Ge(t), s = !1;
    },
    d(a) {
      a && ft(n), o[e].d(a);
    }
  };
}
function f0(i) {
  let e, t, n;
  return t = new Qu({}), {
    c() {
      e = vt("div"), Di(t.$$.fragment), Ye(e, "class", "icon red svelte-8hqvb6"), Ye(e, "title", "start recording");
    },
    m(s, l) {
      ht(s, e, l), Yi(t, e, null), n = !0;
    },
    i(s) {
      n || (Pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ge(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ft(e), Xi(t);
    }
  };
}
function h0(i) {
  let e, t, n;
  return t = new t_({}), {
    c() {
      e = vt("div"), Di(t.$$.fragment), Ye(e, "class", "icon red svelte-8hqvb6"), Ye(e, "title", "stop recording");
    },
    m(s, l) {
      ht(s, e, l), Yi(t, e, null), n = !0;
    },
    i(s) {
      n || (Pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ge(t.$$.fragment, s), n = !1;
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
      e = vt("button"), Di(t.$$.fragment), Ye(e, "class", "icon svelte-8hqvb6"), Ye(e, "aria-label", "select input source");
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
      n || (Pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ge(t.$$.fragment, o), n = !1;
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
      u[6].length === 0 ? d0 : u0
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = vt("select"), t = vt("button"), Di(n.$$.fragment), s = es(), f.c(), Ye(t, "class", "inset-icon svelte-8hqvb6"), Ye(e, "class", "select-wrap svelte-8hqvb6"), Ye(e, "aria-label", "select source");
    },
    m(u, d) {
      ht(u, e, d), rn(e, t), Yi(n, t, null), rn(t, s), f.m(e, null), l = !0, o || (r = [
        Ns(t, "click", i0(
          /*click_handler_2*/
          i[22]
        )),
        Z1(Io.call(
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
      l || (Pe(n.$$.fragment, u), l = !0);
    },
    o(u) {
      Ge(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && ft(e), Xi(n), f.d(), o = !1, t0(r);
    }
  };
}
function u0(i) {
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
      s && ft(e), $1(n, s);
    }
  };
}
function d0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = vt("option"), n = $c(t), e.__value = "", vo(e, e.__value), Ye(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      ht(s, e, l), rn(e, n);
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
      e = vt("option"), n = $c(t), s = es(), e.__value = l = /*device*/
      i[32].deviceId, vo(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, Ye(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      ht(r, e, a), rn(e, n), rn(e, s);
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
function _0(i) {
  let e, t, n, s, l, o;
  const r = [a0, o0], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = vt("div"), t = vt("video"), n = es(), l.c(), Ye(t, "class", "svelte-8hqvb6"), bs(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), bs(t, "hide", !/*webcam_accessed*/
      i[9]), Ye(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      ht(f, e, u), rn(e, t), i[19](t), rn(e, n), a[s].m(e, null), o = !0;
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
      s = c(f), s === d ? a[s].p(f, u) : (Ji(), Ge(a[d], 1, 1, () => {
        a[d] = null;
      }), Zi(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), Pe(l, 1), l.m(e, null));
    },
    i(f) {
      o || (Pe(l), o = !0);
    },
    o(f) {
      Ge(l), o = !1;
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
function m0(i, e, t) {
  var n = this && this.__awaiter || function(q, $, j, J) {
    function H(se) {
      return se instanceof j ? se : new j(function(le) {
        le(se);
      });
    }
    return new (j || (j = Promise))(function(se, le) {
      function A(Z) {
        try {
          E(J.next(Z));
        } catch (P) {
          le(P);
        }
      }
      function Ee(Z) {
        try {
          E(J.throw(Z));
        } catch (P) {
          le(P);
        }
      }
      function E(Z) {
        Z.done ? se(Z.value) : H(Z.value).then(A, Ee);
      }
      E((J = J.apply(q, $ || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: m } = e, { i18n: b } = e, { upload: g } = e;
  const p = s0();
  l0(() => r = document.createElement("canvas"));
  const h = (q) => n(void 0, void 0, void 0, function* () {
    const j = q.target.value;
    yield Ja(m, s, j).then((J) => n(void 0, void 0, void 0, function* () {
      C = J, t(7, o = l.find((H) => H.deviceId === j) || null), t(10, Y = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        Ja(m, s).then((q) => n(this, void 0, void 0, function* () {
          t(9, x = !0), t(6, l = yield j1()), C = q;
        })).then(() => V1(l)).then((q) => {
          t(6, l = q);
          const $ = C.getTracks().map((j) => {
            var J;
            return (J = j.getSettings()) === null || J === void 0 ? void 0 : J.deviceId;
          })[0];
          t(7, o = $ && q.find((j) => j.deviceId === $) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && p("error", b("image.no_webcam_support"));
      } catch (q) {
        if (q instanceof DOMException && q.name == "NotAllowedError")
          p("error", b("image.allow_webcam_access"));
        else
          throw q;
      }
    });
  }
  function w() {
    var q = r.getContext("2d");
    (!a || a && y) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, q.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (q.scale(-1, 1), q.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      ($) => {
        p(a ? "stream" : "capture", $);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, k = [], C, B, z;
  function D() {
    if (y) {
      z.stop();
      let q = new Blob(k, { type: B }), $ = new FileReader();
      $.onload = function(j) {
        return n(this, void 0, void 0, function* () {
          var J;
          if (j.target) {
            let H = new File([q], "sample." + B.substring(6));
            const se = yield Tc([H]);
            let le = ((J = yield g(se, f)) === null || J === void 0 ? void 0 : J.filter(Boolean))[0];
            p("capture", le), p("stop_recording");
          }
        });
      }, $.readAsDataURL(q);
    } else {
      p("start_recording"), k = [];
      let q = ["video/webm", "video/mp4"];
      for (let $ of q)
        if (MediaRecorder.isTypeSupported($)) {
          B = $;
          break;
        }
      if (B === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      z = new MediaRecorder(C, { mimeType: B }), z.addEventListener("dataavailable", function($) {
        k.push($.data);
      }), z.start(200);
    }
    t(8, y = !y);
  }
  let x = !1;
  function M() {
    u === "image" && a && t(8, y = !y), u === "image" ? w() : D(), !y && C && (C.getTracks().forEach((q) => q.stop()), t(5, s.srcObject = null, s), t(9, x = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let Y = !1;
  function I(q) {
    q.preventDefault(), q.stopPropagation(), t(10, Y = !1);
  }
  function T(q) {
    G1[q ? "unshift" : "push"](() => {
      s = q, t(5, s);
    });
  }
  const K = async () => v(), R = () => t(10, Y = !0), he = () => t(10, Y = !1);
  return i.$$set = (q) => {
    "streaming" in q && t(0, a = q.streaming), "pending" in q && t(15, c = q.pending), "root" in q && t(16, f = q.root), "mode" in q && t(1, u = q.mode), "mirror_webcam" in q && t(2, d = q.mirror_webcam), "include_audio" in q && t(17, m = q.include_audio), "i18n" in q && t(3, b = q.i18n), "upload" in q && t(18, g = q.upload);
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
    x,
    Y,
    h,
    v,
    M,
    I,
    c,
    f,
    m,
    g,
    T,
    K,
    R,
    he
  ];
}
class g0 extends K1 {
  constructor(e) {
    super(), e0(
      this,
      e,
      m0,
      _0,
      n0,
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
  SvelteComponent: b0,
  append: wn,
  attr: N,
  detach: p0,
  init: w0,
  insert: v0,
  noop: Ll,
  safe_not_equal: k0,
  set_style: vn,
  svg_element: tn
} = window.__gradio__svelte__internal;
function y0(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = tn("svg"), t = tn("rect"), n = tn("rect"), s = tn("rect"), l = tn("rect"), o = tn("line"), r = tn("line"), a = tn("line"), c = tn("line"), N(t, "x", "2"), N(t, "y", "2"), N(t, "width", "5"), N(t, "height", "5"), N(t, "rx", "1"), N(t, "ry", "1"), N(t, "stroke-width", "2"), N(t, "fill", "none"), N(n, "x", "17"), N(n, "y", "2"), N(n, "width", "5"), N(n, "height", "5"), N(n, "rx", "1"), N(n, "ry", "1"), N(n, "stroke-width", "2"), N(n, "fill", "none"), N(s, "x", "2"), N(s, "y", "17"), N(s, "width", "5"), N(s, "height", "5"), N(s, "rx", "1"), N(s, "ry", "1"), N(s, "stroke-width", "2"), N(s, "fill", "none"), N(l, "x", "17"), N(l, "y", "17"), N(l, "width", "5"), N(l, "height", "5"), N(l, "rx", "1"), N(l, "ry", "1"), N(l, "stroke-width", "2"), N(l, "fill", "none"), N(o, "x1", "7.5"), N(o, "y1", "4.5"), N(o, "x2", "16"), N(o, "y2", "4.5"), vn(o, "stroke-width", "2px"), N(r, "x1", "7.5"), N(r, "y1", "19.5"), N(r, "x2", "16"), N(r, "y2", "19.5"), vn(r, "stroke-width", "2px"), N(a, "x1", "4.5"), N(a, "y1", "8"), N(a, "x2", "4.5"), N(a, "y2", "16"), vn(a, "stroke-width", "2px"), N(c, "x1", "19.5"), N(c, "y1", "8"), N(c, "x2", "19.5"), N(c, "y2", "16"), vn(c, "stroke-width", "2px"), N(e, "width", "100%"), N(e, "height", "100%"), N(e, "viewBox", "0 0 24 24"), N(e, "version", "1.1"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), N(e, "xml:space", "preserve"), N(e, "stroke", "currentColor"), vn(e, "fill-rule", "evenodd"), vn(e, "clip-rule", "evenodd"), vn(e, "stroke-linecap", "round"), vn(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      v0(f, e, u), wn(e, t), wn(e, n), wn(e, s), wn(e, l), wn(e, o), wn(e, r), wn(e, a), wn(e, c);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(f) {
      f && p0(e);
    }
  };
}
class C0 extends b0 {
  constructor(e) {
    super(), w0(this, e, null, y0, k0, {});
  }
}
const {
  SvelteComponent: x0,
  append: Hl,
  attr: ke,
  detach: Vs,
  init: S0,
  insert: Ks,
  noop: nr,
  safe_not_equal: z0,
  svg_element: Vn
} = window.__gradio__svelte__internal;
function M0(i) {
  let e;
  return {
    c() {
      e = Vn("circle"), ke(e, "cx", "12"), ke(e, "cy", "7.5"), ke(e, "r", "2"), ke(e, "fill", "none"), ke(e, "stroke", "currentColor"), ke(e, "stroke-width", "1"), ke(e, "opacity", "0.3");
    },
    m(t, n) {
      Ks(t, e, n);
    },
    d(t) {
      t && Vs(e);
    }
  };
}
function B0(i) {
  let e, t;
  return {
    c() {
      e = Vn("circle"), t = Vn("circle"), ke(e, "cx", "12"), ke(e, "cy", "7.5"), ke(e, "r", "2.5"), ke(e, "fill", "currentColor"), ke(e, "opacity", "0.9"), ke(t, "cx", "12"), ke(t, "cy", "7.5"), ke(t, "r", "1.5"), ke(t, "fill", "white"), ke(t, "opacity", "0.6");
    },
    m(n, s) {
      Ks(n, e, s), Ks(n, t, s);
    },
    d(n) {
      n && (Vs(e), Vs(t));
    }
  };
}
function W0(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? B0 : M0
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = Vn("svg"), t = Vn("path"), n = Vn("path"), s = Vn("path"), r.c(), ke(t, "d", "M9 21h6"), ke(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), ke(s, "d", "M9 17h6"), ke(e, "xmlns", "http://www.w3.org/2000/svg"), ke(e, "viewBox", "0 0 24 24"), ke(e, "fill", "none"), ke(e, "stroke", "currentColor"), ke(e, "stroke-width", "2"), ke(e, "stroke-linecap", "round"), ke(e, "stroke-linejoin", "round");
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
function D0(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class X0 extends x0 {
  constructor(e) {
    super(), S0(this, e, D0, W0, z0, { selected: 1 });
  }
}
const {
  SvelteComponent: Y0,
  append: E0,
  attr: Ot,
  detach: R0,
  init: q0,
  insert: L0,
  noop: Il,
  safe_not_equal: H0,
  svg_element: ir
} = window.__gradio__svelte__internal;
function I0(i) {
  let e, t;
  return {
    c() {
      e = ir("svg"), t = ir("circle"), Ot(t, "cx", "12"), Ot(t, "cy", "12"), Ot(t, "r", "10"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Ot(e, "stroke-linecap", "round"), Ot(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      L0(n, e, s), E0(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && R0(e);
    }
  };
}
let P0 = class extends Y0 {
  constructor(e) {
    super(), q0(this, e, null, I0, H0, {});
  }
};
const {
  SvelteComponent: A0,
  append: Ii,
  attr: Le,
  detach: T0,
  init: F0,
  insert: U0,
  noop: Pl,
  safe_not_equal: O0,
  svg_element: ui
} = window.__gradio__svelte__internal;
function j0(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = ui("svg"), t = ui("path"), n = ui("path"), s = ui("path"), l = ui("line"), o = ui("line"), Le(t, "d", "M3 6h18"), Le(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), Le(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), Le(l, "x1", "10"), Le(l, "y1", "11"), Le(l, "x2", "10"), Le(l, "y2", "17"), Le(o, "x1", "14"), Le(o, "y1", "11"), Le(o, "x2", "14"), Le(o, "y2", "17"), Le(e, "xmlns", "http://www.w3.org/2000/svg"), Le(e, "viewBox", "0 0 24 24"), Le(e, "fill", "none"), Le(e, "stroke", "currentColor"), Le(e, "stroke-width", "2"), Le(e, "stroke-linecap", "round"), Le(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      U0(r, e, a), Ii(e, t), Ii(e, n), Ii(e, s), Ii(e, l), Ii(e, o);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(r) {
      r && T0(e);
    }
  };
}
class N0 extends A0 {
  constructor(e) {
    super(), F0(this, e, null, j0, O0, {});
  }
}
const {
  SvelteComponent: V0,
  append: K0,
  attr: Lt,
  detach: Z0,
  init: J0,
  insert: G0,
  noop: Al,
  safe_not_equal: Q0,
  set_style: ps,
  svg_element: sr
} = window.__gradio__svelte__internal;
function $0(i) {
  let e, t;
  return {
    c() {
      e = sr("svg"), t = sr("path"), Lt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Lt(t, "fill", "none"), Lt(t, "stroke-width", "2"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "version", "1.1"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Lt(e, "xml:space", "preserve"), Lt(e, "stroke", "currentColor"), ps(e, "fill-rule", "evenodd"), ps(e, "clip-rule", "evenodd"), ps(e, "stroke-linecap", "round"), ps(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      G0(n, e, s), K0(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(n) {
      n && Z0(e);
    }
  };
}
class eg extends V0 {
  constructor(e) {
    super(), J0(this, e, null, $0, Q0, {});
  }
}
const {
  SvelteComponent: tg,
  append: ng,
  attr: Ht,
  detach: ig,
  init: sg,
  insert: lg,
  noop: Tl,
  safe_not_equal: og,
  set_style: ws,
  svg_element: lr
} = window.__gradio__svelte__internal;
function ag(i) {
  let e, t;
  return {
    c() {
      e = lr("svg"), t = lr("path"), Ht(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Ht(t, "fill", "none"), Ht(t, "stroke-width", "2"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24"), Ht(e, "version", "1.1"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ht(e, "xml:space", "preserve"), Ht(e, "stroke", "currentColor"), ws(e, "fill-rule", "evenodd"), ws(e, "clip-rule", "evenodd"), ws(e, "stroke-linecap", "round"), ws(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      lg(n, e, s), ng(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && ig(e);
    }
  };
}
class rg extends tg {
  constructor(e) {
    super(), sg(this, e, null, ag, og, {});
  }
}
const {
  SvelteComponent: cg,
  append: or,
  attr: nn,
  detach: fg,
  init: hg,
  insert: ug,
  noop: Fl,
  safe_not_equal: dg,
  set_style: vs,
  svg_element: Ul
} = window.__gradio__svelte__internal;
function _g(i) {
  let e, t, n;
  return {
    c() {
      e = Ul("svg"), t = Ul("path"), n = Ul("path"), nn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), nn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24"), nn(e, "xmlns", "http://www.w3.org/2000/svg"), nn(e, "fill", "none"), nn(e, "stroke", "currentColor"), nn(e, "stroke-width", "2"), vs(e, "fill-rule", "evenodd"), vs(e, "clip-rule", "evenodd"), vs(e, "stroke-linecap", "round"), vs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      ug(s, e, l), or(e, t), or(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(s) {
      s && fg(e);
    }
  };
}
class mg extends cg {
  constructor(e) {
    super(), hg(this, e, null, _g, dg, {});
  }
}
const {
  SvelteComponent: gg,
  append: bg,
  attr: kn,
  detach: pg,
  init: wg,
  insert: vg,
  noop: Ol,
  safe_not_equal: kg,
  set_style: ks,
  svg_element: ar
} = window.__gradio__svelte__internal;
function yg(i) {
  let e, t;
  return {
    c() {
      e = ar("svg"), t = ar("path"), kn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), kn(e, "width", "100%"), kn(e, "height", "100%"), kn(e, "viewBox", "0 0 24 24"), kn(e, "fill", "none"), kn(e, "stroke", "currentColor"), kn(e, "stroke-width", "2"), ks(e, "fill-rule", "evenodd"), ks(e, "clip-rule", "evenodd"), ks(e, "stroke-linecap", "round"), ks(e, "stroke-linejoin", "round"), kn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      vg(n, e, s), bg(e, t);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(n) {
      n && pg(e);
    }
  };
}
class Cg extends gg {
  constructor(e) {
    super(), wg(this, e, null, yg, kg, {});
  }
}
const {
  SvelteComponent: xg,
  append: Sg,
  attr: yn,
  detach: zg,
  init: Mg,
  insert: Bg,
  noop: jl,
  safe_not_equal: Wg,
  set_style: ys,
  svg_element: rr
} = window.__gradio__svelte__internal;
function Dg(i) {
  let e, t;
  return {
    c() {
      e = rr("svg"), t = rr("path"), yn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), yn(e, "width", "100%"), yn(e, "height", "100%"), yn(e, "viewBox", "0 0 24 24"), yn(e, "fill", "none"), yn(e, "stroke", "currentColor"), yn(e, "stroke-width", "2"), ys(e, "fill-rule", "evenodd"), ys(e, "clip-rule", "evenodd"), ys(e, "stroke-linecap", "round"), ys(e, "stroke-linejoin", "round"), yn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      Bg(n, e, s), Sg(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && zg(e);
    }
  };
}
class Xg extends xg {
  constructor(e) {
    super(), Mg(this, e, null, Dg, Wg, {});
  }
}
const {
  SvelteComponent: Yg,
  append: cr,
  attr: ot,
  detach: Eg,
  init: Rg,
  insert: qg,
  noop: Nl,
  safe_not_equal: Lg,
  set_style: Cs,
  svg_element: Vl
} = window.__gradio__svelte__internal;
function Hg(i) {
  let e, t, n;
  return {
    c() {
      e = Vl("svg"), t = Vl("path"), n = Vl("path"), ot(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), ot(t, "fill", "none"), ot(t, "stroke-width", "2"), ot(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), ot(n, "fill", "none"), ot(n, "stroke-width", "2"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "version", "1.1"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ot(e, "xml:space", "preserve"), ot(e, "stroke", "currentColor"), Cs(e, "fill-rule", "evenodd"), Cs(e, "clip-rule", "evenodd"), Cs(e, "stroke-linecap", "round"), Cs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      qg(s, e, l), cr(e, t), cr(e, n);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(s) {
      s && Eg(e);
    }
  };
}
class Ig extends Yg {
  constructor(e) {
    super(), Rg(this, e, null, Hg, Lg, {});
  }
}
const {
  SvelteComponent: Pg,
  append: sn,
  attr: ee,
  detach: Ag,
  init: Tg,
  insert: Fg,
  noop: Kl,
  safe_not_equal: Ug,
  svg_element: jt
} = window.__gradio__svelte__internal;
function Og(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = jt("svg"), t = jt("path"), n = jt("circle"), s = jt("circle"), l = jt("circle"), o = jt("circle"), r = jt("circle"), a = jt("circle"), c = jt("circle"), f = jt("circle"), ee(t, "fill", "none"), ee(t, "stroke", "currentColor"), ee(t, "stroke-width", "1.5"), ee(t, "stroke-linecap", "round"), ee(t, "stroke-linejoin", "round"), ee(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), ee(n, "cx", "7"), ee(n, "cy", "7"), ee(n, "r", "1.5"), ee(n, "fill", "currentColor"), ee(s, "cx", "15"), ee(s, "cy", "9"), ee(s, "r", "1.5"), ee(s, "fill", "currentColor"), ee(l, "cx", "21"), ee(l, "cy", "5"), ee(l, "r", "1.5"), ee(l, "fill", "currentColor"), ee(o, "cx", "25"), ee(o, "cy", "13"), ee(o, "r", "1.5"), ee(o, "fill", "currentColor"), ee(r, "cx", "23"), ee(r, "cy", "21"), ee(r, "r", "1.5"), ee(r, "fill", "currentColor"), ee(a, "cx", "15"), ee(a, "cy", "19"), ee(a, "r", "1.5"), ee(a, "fill", "currentColor"), ee(c, "cx", "9"), ee(c, "cy", "23"), ee(c, "r", "1.5"), ee(c, "fill", "currentColor"), ee(f, "cx", "5"), ee(f, "cy", "15"), ee(f, "r", "1.5"), ee(f, "fill", "currentColor"), ee(e, "xmlns", "http://www.w3.org/2000/svg"), ee(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ee(e, "aria-hidden", "true"), ee(e, "role", "img"), ee(e, "class", "iconify iconify--carbon"), ee(e, "width", "100%"), ee(e, "height", "100%"), ee(e, "preserveAspectRatio", "xMidYMid meet"), ee(e, "viewBox", "0 0 32 32");
    },
    m(u, d) {
      Fg(u, e, d), sn(e, t), sn(e, n), sn(e, s), sn(e, l), sn(e, o), sn(e, r), sn(e, a), sn(e, c), sn(e, f);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(u) {
      u && Ag(e);
    }
  };
}
let jg = class extends Pg {
  constructor(e) {
    super(), Tg(this, e, null, Og, Ug, {});
  }
};
const {
  SvelteComponent: Ng,
  append: Pi,
  attr: ue,
  detach: Vg,
  init: Kg,
  insert: Zg,
  noop: Zl,
  safe_not_equal: Jg,
  set_style: xs,
  svg_element: di
} = window.__gradio__svelte__internal;
function Gg(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = di("svg"), t = di("circle"), n = di("circle"), s = di("circle"), l = di("circle"), o = di("circle"), ue(t, "cx", "12"), ue(t, "cy", "12"), ue(t, "r", "8"), ue(t, "stroke-width", "2"), ue(t, "fill", "none"), ue(n, "cx", "12"), ue(n, "cy", "12"), ue(n, "r", "4"), ue(n, "stroke-width", "1.5"), ue(n, "fill", "none"), ue(n, "opacity", "0.5"), ue(s, "cx", "8"), ue(s, "cy", "8"), ue(s, "r", "1"), ue(s, "fill", "currentColor"), ue(s, "opacity", "0.6"), ue(l, "cx", "16"), ue(l, "cy", "8"), ue(l, "r", "1"), ue(l, "fill", "currentColor"), ue(l, "opacity", "0.6"), ue(o, "cx", "12"), ue(o, "cy", "16"), ue(o, "r", "1"), ue(o, "fill", "currentColor"), ue(o, "opacity", "0.6"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "version", "1.1"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ue(e, "xml:space", "preserve"), ue(e, "stroke", "currentColor"), xs(e, "fill-rule", "evenodd"), xs(e, "clip-rule", "evenodd"), xs(e, "stroke-linecap", "round"), xs(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Zg(r, e, a), Pi(e, t), Pi(e, n), Pi(e, s), Pi(e, l), Pi(e, o);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(r) {
      r && Vg(e);
    }
  };
}
class Qg extends Ng {
  constructor(e) {
    super(), Kg(this, e, null, Gg, Jg, {});
  }
}
const {
  SvelteComponent: $g,
  append: fr,
  attr: dt,
  detach: e2,
  init: t2,
  insert: n2,
  noop: Jl,
  safe_not_equal: i2,
  set_style: Ss,
  svg_element: Gl
} = window.__gradio__svelte__internal;
function s2(i) {
  let e, t, n;
  return {
    c() {
      e = Gl("svg"), t = Gl("path"), n = Gl("path"), dt(t, "d", "M3 7v6h6"), dt(t, "stroke-width", "2"), dt(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), dt(n, "stroke-width", "2"), dt(e, "width", "100%"), dt(e, "height", "100%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "version", "1.1"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), dt(e, "xml:space", "preserve"), dt(e, "stroke", "currentColor"), dt(e, "fill", "none"), Ss(e, "fill-rule", "evenodd"), Ss(e, "clip-rule", "evenodd"), Ss(e, "stroke-linecap", "round"), Ss(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      n2(s, e, l), fr(e, t), fr(e, n);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(s) {
      s && e2(e);
    }
  };
}
class l2 extends $g {
  constructor(e) {
    super(), t2(this, e, null, s2, i2, {});
  }
}
const {
  SvelteComponent: o2,
  append: hr,
  attr: _t,
  detach: a2,
  init: r2,
  insert: c2,
  noop: Ql,
  safe_not_equal: f2,
  set_style: zs,
  svg_element: $l
} = window.__gradio__svelte__internal;
function h2(i) {
  let e, t, n;
  return {
    c() {
      e = $l("svg"), t = $l("path"), n = $l("path"), _t(t, "d", "M21 7v6h-6"), _t(t, "stroke-width", "2"), _t(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), _t(n, "stroke-width", "2"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "version", "1.1"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _t(e, "xml:space", "preserve"), _t(e, "stroke", "currentColor"), _t(e, "fill", "none"), zs(e, "fill-rule", "evenodd"), zs(e, "clip-rule", "evenodd"), zs(e, "stroke-linecap", "round"), zs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      c2(s, e, l), hr(e, t), hr(e, n);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(s) {
      s && a2(e);
    }
  };
}
class u2 extends o2 {
  constructor(e) {
    super(), r2(this, e, null, h2, f2, {});
  }
}
const {
  SvelteComponent: d2,
  append: _2,
  attr: It,
  detach: m2,
  init: g2,
  insert: b2,
  noop: eo,
  safe_not_equal: p2,
  set_style: ur,
  svg_element: dr
} = window.__gradio__svelte__internal;
function w2(i) {
  let e, t;
  return {
    c() {
      e = dr("svg"), t = dr("path"), It(t, "d", "M7 10l5 5 5-5z"), It(t, "stroke", "none"), It(e, "width", "100%"), It(e, "height", "100%"), It(e, "viewBox", "0 0 24 24"), It(e, "version", "1.1"), It(e, "xmlns", "http://www.w3.org/2000/svg"), It(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), It(e, "xml:space", "preserve"), It(e, "stroke", "currentColor"), It(e, "fill", "currentColor"), ur(e, "fill-rule", "evenodd"), ur(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      b2(n, e, s), _2(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && m2(e);
    }
  };
}
class v2 extends d2 {
  constructor(e) {
    super(), g2(this, e, null, w2, p2, {});
  }
}
const {
  SvelteComponent: k2,
  append: _r,
  attr: to,
  bubble: mr,
  create_component: y2,
  destroy_component: C2,
  detach: ef,
  element: gr,
  init: x2,
  insert: tf,
  listen: no,
  mount_component: S2,
  run_all: z2,
  safe_not_equal: M2,
  set_data: B2,
  set_input_value: br,
  space: W2,
  text: D2,
  transition_in: X2,
  transition_out: Y2
} = window.__gradio__svelte__internal, { createEventDispatcher: E2, afterUpdate: R2 } = window.__gradio__svelte__internal;
function q2(i) {
  let e;
  return {
    c() {
      e = D2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      tf(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && B2(
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
function L2(i) {
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
      $$slots: { default: [q2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = gr("label"), y2(t.$$.fragment), n = W2(), s = gr("input"), to(s, "type", "color"), s.disabled = /*disabled*/
      i[3], to(s, "class", "svelte-16l8u73"), to(e, "class", "block");
    },
    m(a, c) {
      tf(a, e, c), S2(t, e, null), _r(e, n), _r(e, s), br(
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
      l || (X2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      Y2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && ef(e), C2(t), o = !1, z2(r);
    }
  };
}
function H2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = E2();
  function f() {
    c("change", n), s || c("input");
  }
  R2(() => {
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
class I2 extends k2 {
  constructor(e) {
    super(), x2(this, e, H2, L2, M2, {
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
  SvelteComponent: P2,
  append: nf,
  attr: ze,
  bubble: A2,
  check_outros: T2,
  create_slot: sf,
  detach: is,
  element: fl,
  empty: F2,
  get_all_dirty_from_scope: lf,
  get_slot_changes: of,
  group_outros: U2,
  init: O2,
  insert: ss,
  listen: j2,
  safe_not_equal: N2,
  set_style: rt,
  space: af,
  src_url_equal: Zs,
  toggle_class: ki,
  transition_in: Js,
  transition_out: Gs,
  update_slot_base: rf
} = window.__gradio__svelte__internal;
function V2(i) {
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
      e = fl("button"), r && r.c(), t = af(), c && c.c(), ze(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ze(
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
      ss(f, e, u), r && r.m(e, null), nf(e, t), c && c.m(e, null), s = !0, l || (o = j2(
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
      f[1].join(" ") + " svelte-8huxfn")) && ze(e, "class", n), (!s || u & /*elem_id*/
      1) && ze(
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
function K2(i) {
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
      e = fl("a"), l && l.c(), t = af(), r && r.c(), ze(
        e,
        "href",
        /*link*/
        i[6]
      ), ze(e, "rel", "noopener noreferrer"), ze(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ze(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ze(
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
      64) && ze(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && ze(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ze(e, "class", n), (!s || c & /*elem_id*/
      1) && ze(
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
      e = fl("img"), ze(e, "class", "button-icon svelte-8huxfn"), Zs(e.src, t = /*icon*/
      i[7].url) || ze(e, "src", t), ze(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ss(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Zs(e.src, t = /*icon*/
      s[7].url) && ze(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && ze(e, "alt", n);
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
      e = fl("img"), ze(e, "class", "button-icon svelte-8huxfn"), Zs(e.src, t = /*icon*/
      i[7].url) || ze(e, "src", t), ze(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ss(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !Zs(e.src, t = /*icon*/
      s[7].url) && ze(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && ze(e, "alt", n);
    },
    d(s) {
      s && is(e);
    }
  };
}
function Z2(i) {
  let e, t, n, s;
  const l = [K2, V2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = F2();
    },
    m(a, c) {
      o[e].m(a, c), ss(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (U2(), Gs(o[f], 1, 1, () => {
        o[f] = null;
      }), T2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Js(t, 1), t.m(n.parentNode, n));
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
function J2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: m = !1 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e;
  function p(h) {
    A2.call(this, i, h);
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
class ko extends P2 {
  constructor(e) {
    super(), O2(this, e, J2, Z2, N2, {
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
  SvelteComponent: G2,
  add_render_callback: cf,
  append: Ms,
  attr: bt,
  binding_callbacks: vr,
  check_outros: Q2,
  create_bidirectional_transition: kr,
  destroy_each: $2,
  detach: Gi,
  element: Qs,
  empty: eb,
  ensure_array_like: yr,
  group_outros: tb,
  init: nb,
  insert: Qi,
  listen: yo,
  prevent_default: ib,
  run_all: sb,
  safe_not_equal: lb,
  set_data: ob,
  set_style: _i,
  space: Co,
  text: ab,
  toggle_class: Nt,
  transition_in: io,
  transition_out: Cr
} = window.__gradio__svelte__internal, { createEventDispatcher: rb } = window.__gradio__svelte__internal;
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
      bt(e, "class", "options svelte-yuohum"), bt(e, "role", "listbox"), _i(
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
      i[22](e), n = !0, s || (l = yo(e, "mousedown", ib(
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
      a && Gi(e), $2(r, a), i[22](null), a && t && t.end(), s = !1, l();
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
      e = Qs("li"), t = Qs("span"), t.textContent = "✓", n = Co(), l = ab(s), o = Co(), bt(t, "class", "inner-item svelte-yuohum"), Nt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), bt(e, "class", "item svelte-yuohum"), bt(e, "data-index", r = /*index*/
      i[26]), bt(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), bt(e, "data-testid", "dropdown-option"), bt(e, "role", "option"), bt(e, "aria-selected", c = /*selected_indices*/
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
      ][0] + "") && ob(l, s), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && bt(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && bt(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && bt(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
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
function cb(i) {
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
      e = Qs("div"), t = Co(), o && o.c(), n = eb(), bt(e, "class", "reference");
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
      12 && io(o, 1)) : (o = Sr(r), o.c(), io(o, 1), o.m(n.parentNode, n)) : o && (tb(), Cr(o, 1, 1, () => {
        o = null;
      }), Q2());
    },
    i(r) {
      io(o);
    },
    o(r) {
      Cr(o);
    },
    d(r) {
      r && (Gi(e), Gi(t), Gi(n)), i[20](null), o && o.d(r), s = !1, sb(l);
    }
  };
}
function fb(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, d, m, b, g, p, h, v, w;
  function y() {
    const { top: Y, bottom: I } = g.getBoundingClientRect();
    t(16, u = Y), t(17, d = w - I);
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
  const B = rb();
  function z() {
    t(11, w = window.innerHeight);
  }
  function D(Y) {
    vr[Y ? "unshift" : "push"](() => {
      g = Y, t(6, g);
    });
  }
  const x = (Y) => B("change", Y);
  function M(Y) {
    vr[Y ? "unshift" : "push"](() => {
      p = Y, t(7, p);
    });
  }
  return i.$$set = (Y) => {
    "choices" in Y && t(0, l = Y.choices), "filtered_indices" in Y && t(1, o = Y.filtered_indices), "show_options" in Y && t(2, r = Y.show_options), "disabled" in Y && t(3, a = Y.disabled), "selected_indices" in Y && t(4, c = Y.selected_indices), "active_index" in Y && t(5, f = Y.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (p && c.length > 0) {
          let I = p.querySelectorAll("li");
          for (const T of Array.from(I))
            if (T.getAttribute("data-index") === c[0].toString()) {
              t(14, n = p == null ? void 0 : p.scrollTo) === null || n === void 0 || n.call(p, 0, T.offsetTop);
              break;
            }
        }
        y();
        const Y = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, m = (Y == null ? void 0 : Y.height) || 0), t(8, b = (Y == null ? void 0 : Y.width) || 0);
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
    B,
    n,
    s,
    u,
    d,
    m,
    z,
    D,
    x,
    M
  ];
}
class hb extends G2 {
  constructor(e) {
    super(), nb(this, e, fb, cb, lb, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function ub(i, e) {
  return (i % e + e) % e;
}
function Mr(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function db(i, e, t) {
  i("change", e), t || i("input");
}
function _b(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[ub(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: mb,
  append: Ln,
  attr: gt,
  binding_callbacks: gb,
  check_outros: bb,
  create_component: xo,
  destroy_component: So,
  detach: Po,
  element: bi,
  group_outros: pb,
  init: wb,
  insert: Ao,
  listen: zn,
  mount_component: zo,
  noop: vb,
  run_all: kb,
  safe_not_equal: yb,
  set_data: Cb,
  set_input_value: Br,
  space: so,
  text: xb,
  toggle_class: mi,
  transition_in: pi,
  transition_out: Vi
} = window.__gradio__svelte__internal, { onMount: Sb } = window.__gradio__svelte__internal, { createEventDispatcher: zb, afterUpdate: Mb } = window.__gradio__svelte__internal;
function Bb(i) {
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
      1 && Cb(
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
      e = bi("div"), xo(t.$$.fragment), gt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      Ao(o, e, r), zo(t, e, null), n = !0, s || (l = zn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: vb,
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
function Wb(i) {
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
      $$slots: { default: [Bb] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && Wr(i);
  return u = new hb({
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
      e = bi("div"), xo(t.$$.fragment), n = so(), s = bi("div"), l = bi("div"), o = bi("div"), r = bi("input"), c = so(), g && g.c(), f = so(), xo(u.$$.fragment), gt(r, "role", "listbox"), gt(r, "aria-controls", "dropdown-options"), gt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), gt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), gt(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], gt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], mi(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), gt(o, "class", "secondary-wrap svelte-1a9du2n"), gt(l, "class", "wrap-inner svelte-1a9du2n"), mi(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), gt(s, "class", "wrap svelte-1a9du2n"), gt(e, "class", "svelte-1a9du2n"), mi(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(p, h) {
      Ao(p, e, h), zo(t, e, null), Ln(e, n), Ln(e, s), Ln(s, l), Ln(l, o), Ln(o, r), Br(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), Ln(o, c), g && g.m(o, null), Ln(s, f), zo(u, s, null), d = !0, m || (b = [
        zn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        zn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        zn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        zn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        zn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        zn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        zn(
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
      4096) && gt(
        r,
        "aria-expanded",
        /*show_options*/
        p[12]
      ), (!d || h[0] & /*label*/
      1) && gt(
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
      p[3] ? g && (pb(), Vi(g, 1, 1, () => {
        g = null;
      }), bb()) : g ? (g.p(p, h), h[0] & /*disabled*/
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
      p && Po(e), So(t), i[31](null), g && g.d(), So(u), m = !1, kb(b);
    }
  };
}
function Db(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: m = !1 } = e, { filterable: b = !0 } = e, g, p = !1, h, v, w = "", y = "", k = !1, C = [], B = null, z = null, D;
  const x = zb();
  l ? (D = a.map((H) => H[1]).indexOf(l), z = D, z === -1 ? (o = l, z = null) : ([w, o] = a[z], y = w), Y()) : a.length > 0 && (D = 0, z = 0, [w, l] = a[z], o = l, y = w);
  function M() {
    t(13, h = a.map((H) => H[0])), t(26, v = a.map((H) => H[1]));
  }
  function Y() {
    M(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, z = null)) : v.includes(l) ? (t(9, w = h[v.indexOf(l)]), t(11, z = v.indexOf(l))) : m ? (t(9, w = l), t(11, z = null)) : (t(9, w = ""), t(11, z = null)), t(29, D = z);
  }
  function I(H) {
    if (t(11, z = parseInt(H.detail.target.dataset.index)), isNaN(z)) {
      t(11, z = null);
      return;
    }
    t(12, p = !1), t(14, B = null), g.blur();
  }
  function T(H) {
    t(10, C = a.map((se, le) => le)), t(12, p = !0), x("focus");
  }
  function K() {
    f || (g.focus(), t(12, p = !0));
  }
  function R(H) {
    H.preventDefault(), f || (g.focus(), t(12, p = !p));
  }
  function he() {
    m ? t(22, l = w) : t(9, w = h[v.indexOf(l)]), t(12, p = !1), t(14, B = null), x("blur");
  }
  function q(H) {
    t(12, [p, B] = _b(H, B, C), p, (t(14, B), t(2, a), t(25, c), t(6, m), t(9, w), t(10, C), t(8, g), t(27, y), t(11, z), t(29, D), t(28, k), t(26, v))), H.key === "Enter" && (B !== null ? (t(11, z = B), t(12, p = !1), g.blur(), t(14, B = null)) : h.includes(w) ? (t(11, z = h.indexOf(w)), t(12, p = !1), t(14, B = null), g.blur()) : m && (t(22, l = w), t(11, z = null), t(12, p = !1), t(14, B = null), g.blur()), x("enter", l));
  }
  Mb(() => {
    t(23, r = !1), t(28, k = !0);
  }), Sb(() => {
  });
  function $() {
    w = this.value, t(9, w), t(11, z), t(29, D), t(28, k), t(2, a), t(26, v);
  }
  function j(H) {
    gb[H ? "unshift" : "push"](() => {
      g = H, t(8, g);
    });
  }
  const J = (H) => x("key_up", { key: H.key, input_value: w });
  return i.$$set = (H) => {
    "label" in H && t(0, n = H.label), "info" in H && t(1, s = H.info), "value" in H && t(22, l = H.value), "value_is_output" in H && t(23, r = H.value_is_output), "choices" in H && t(2, a = H.choices), "disabled" in H && t(3, f = H.disabled), "show_label" in H && t(4, u = H.show_label), "container" in H && t(5, d = H.container), "allow_custom_value" in H && t(6, m = H.allow_custom_value), "filterable" in H && t(7, b = H.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && z !== D && z !== null && k && (t(9, [w, l] = a[z], w, (t(22, l), t(11, z), t(29, D), t(28, k), t(2, a), t(26, v))), t(29, D = z), x("select", {
      index: z,
      value: v[z],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (Y(), db(x, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && M(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (m || Y(), t(25, c = a), t(10, C = Mr(a, w)), !m && C.length > 0 && t(14, B = C[0]), g == document.activeElement && t(12, p = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && w !== y && (t(10, C = Mr(a, w)), t(27, y = w), !m && C.length > 0 && t(14, B = C[0]));
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
    B,
    x,
    I,
    T,
    K,
    R,
    he,
    q,
    l,
    r,
    o,
    c,
    v,
    y,
    k,
    D,
    $,
    j,
    J
  ];
}
class Xb extends mb {
  constructor(e) {
    super(), wb(
      this,
      e,
      Db,
      Wb,
      yb,
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
  SvelteComponent: Yb,
  append: St,
  attr: yi,
  check_outros: Mo,
  create_component: Kn,
  destroy_component: Zn,
  detach: Ei,
  element: Kt,
  group_outros: Bo,
  init: Eb,
  insert: Ri,
  listen: Rb,
  mount_component: Jn,
  safe_not_equal: qb,
  set_style: Ci,
  space: Ai,
  text: To,
  toggle_class: Dr,
  transition_in: et,
  transition_out: pt
} = window.__gradio__svelte__internal, { createEventDispatcher: Lb } = window.__gradio__svelte__internal, { onMount: Hb, onDestroy: Ib } = window.__gradio__svelte__internal;
function Xr(i) {
  let e, t, n, s, l, o, r;
  const a = [Ab, Pb], c = [];
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
      Ri(u, e, d), St(e, t), c[n].m(t, null), l = !0, o || (r = Rb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, d) {
      let m = n;
      n = f(u), n !== m && (Bo(), pt(c[m], 1, 1, () => {
        c[m] = null;
      }), Mo(), s = c[n], s || (s = c[n] = a[n](u), s.c()), et(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      4) && Dr(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      l || (et(s), l = !0);
    },
    o(u) {
      pt(s), l = !1;
    },
    d(u) {
      u && Ei(e), c[n].d(), o = !1, r();
    }
  };
}
function Pb(i) {
  let e, t;
  return e = new Xg({}), {
    c() {
      Kn(e.$$.fragment);
    },
    m(n, s) {
      Jn(e, n, s), t = !0;
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zn(e, n);
    }
  };
}
function Ab(i) {
  let e, t;
  return e = new Cg({}), {
    c() {
      Kn(e.$$.fragment);
    },
    m(n, s) {
      Jn(e, n, s), t = !0;
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zn(e, n);
    }
  };
}
function Tb(i) {
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
      $$slots: { default: [Fb] },
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
      n || (et(t.$$.fragment, s), n = !0);
    },
    o(s) {
      pt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ei(e), Zn(t);
    }
  };
}
function Fb(i) {
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
function Ub(i) {
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
function Ob(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, h, v = !/*showRemove*/
  i[4] && Xr(i);
  o = new Xb({
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
  ), c = new I2({
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
      $$slots: { default: [Tb] },
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
      $$slots: { default: [Ub] },
      $$scope: { ctx: i }
    }
  }), p.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Kt("div"), t = Kt("div"), n = Kt("span"), v && v.c(), s = Ai(), l = Kt("div"), Kn(o.$$.fragment), r = Ai(), a = Kt("div"), Kn(c.$$.fragment), f = Ai(), u = Kt("div"), Kn(d.$$.fragment), m = Ai(), w && w.c(), b = Ai(), g = Kt("div"), Kn(p.$$.fragment), Ci(l, "margin-right", "10px"), Ci(a, "margin-right", "40px"), Ci(a, "margin-bottom", "8px"), Ci(u, "margin-right", "8px"), yi(n, "class", "model-content svelte-d9x7u0"), yi(t, "class", "modal-container svelte-d9x7u0"), yi(e, "class", "modal svelte-d9x7u0"), yi(e, "id", "model-box-edit");
    },
    m(y, k) {
      Ri(y, e, k), St(e, t), St(t, n), v && v.m(n, null), St(n, s), St(n, l), Jn(o, l, null), St(n, r), St(n, a), Jn(c, a, null), St(n, f), St(n, u), Jn(d, u, null), St(n, m), w && w.m(n, null), St(n, b), St(n, g), Jn(p, g, null), h = !0;
    },
    p(y, [k]) {
      /*showRemove*/
      y[4] ? v && (Bo(), pt(v, 1, 1, () => {
        v = null;
      }), Mo()) : v ? (v.p(y, k), k & /*showRemove*/
      16 && et(v, 1)) : (v = Xr(y), v.c(), et(v, 1), v.m(n, s));
      const C = {};
      k & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      y[0]), k & /*choices*/
      8 && (C.choices = /*choices*/
      y[3]), o.$set(C);
      const B = {};
      k & /*currentColor*/
      2 && (B.value = /*currentColor*/
      y[1]), c.$set(B);
      const z = {};
      k & /*$$scope*/
      262144 && (z.$$scope = { dirty: k, ctx: y }), d.$set(z), /*showRemove*/
      y[4] ? w ? (w.p(y, k), k & /*showRemove*/
      16 && et(w, 1)) : (w = Yr(y), w.c(), et(w, 1), w.m(n, b)) : w && (Bo(), pt(w, 1, 1, () => {
        w = null;
      }), Mo());
      const D = {};
      k & /*$$scope*/
      262144 && (D.$$scope = { dirty: k, ctx: y }), p.$set(D);
    },
    i(y) {
      h || (et(v), et(o.$$.fragment, y), et(c.$$.fragment, y), et(d.$$.fragment, y), et(w), et(p.$$.fragment, y), h = !0);
    },
    o(y) {
      pt(v), pt(o.$$.fragment, y), pt(c.$$.fragment, y), pt(d.$$.fragment, y), pt(w), pt(p.$$.fragment, y), h = !1;
    },
    d(y) {
      y && Ei(e), v && v.d(), Zn(o), Zn(c), Zn(d), w && w.d(), Zn(p);
    }
  };
}
function jb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = Lb();
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
    let B = C;
    Number.isInteger(B) ? (Array.isArray(o) && B < o.length && t(1, a = o[B]), Array.isArray(l) && B < l.length && t(0, s = l[B][0])) : t(0, s = B);
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
  Hb(() => {
    document.addEventListener("keydown", h), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : ""));
  }), Ib(() => {
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
class Fo extends Yb {
  constructor(e) {
    super(), Eb(this, e, jb, Ob, qb, {
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
  SvelteComponent: Nb,
  append: ye,
  attr: ge,
  detach: ff,
  element: Te,
  empty: Vb,
  init: Kb,
  insert: hf,
  listen: Vt,
  noop: Er,
  run_all: Zb,
  safe_not_equal: Jb,
  set_data: Gb,
  set_input_value: Bs,
  set_style: Ws,
  space: Cn,
  text: Rr,
  to_number: Wo
} = window.__gradio__svelte__internal, { createEventDispatcher: Qb } = window.__gradio__svelte__internal;
function qr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, h, v, w, y, k, C, B, z, D, x, M, Y, I;
  return {
    c() {
      e = Te("div"), t = Te("div"), n = Te("div"), s = Te("h3"), s.textContent = "Eraser Settings", l = Cn(), o = Te("button"), o.textContent = "×", r = Cn(), a = Te("div"), c = Te("div"), f = Te("label"), f.textContent = "Eraser Size:", u = Cn(), d = Te("div"), m = Te("input"), b = Cn(), g = Te("input"), p = Cn(), h = Te("div"), v = Te("div"), w = Cn(), y = Te("span"), k = Rr(
        /*tempSize*/
        i[1]
      ), C = Rr("px"), B = Cn(), z = Te("div"), D = Te("button"), D.textContent = "Cancel", x = Cn(), M = Te("button"), M.textContent = "Apply", ge(s, "id", "eraser-settings-title"), ge(s, "class", "svelte-a42w5h"), ge(o, "class", "close-button svelte-a42w5h"), ge(o, "aria-label", "Close"), ge(n, "class", "modal-header svelte-a42w5h"), ge(f, "for", "eraser-size"), ge(f, "class", "svelte-a42w5h"), ge(m, "id", "eraser-size"), ge(m, "type", "range"), ge(m, "min", "1"), ge(m, "max", "50"), ge(m, "class", "size-slider svelte-a42w5h"), ge(g, "type", "number"), ge(g, "min", "1"), ge(g, "max", "50"), ge(g, "class", "size-input svelte-a42w5h"), ge(d, "class", "size-controls svelte-a42w5h"), ge(v, "class", "preview-circle svelte-a42w5h"), Ws(v, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Ws(v, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), ge(y, "class", "size-label svelte-a42w5h"), ge(h, "class", "size-preview svelte-a42w5h"), ge(c, "class", "setting-group svelte-a42w5h"), ge(a, "class", "modal-body svelte-a42w5h"), ge(D, "class", "button secondary svelte-a42w5h"), ge(M, "class", "button primary svelte-a42w5h"), ge(z, "class", "modal-footer svelte-a42w5h"), ge(t, "class", "modal-content svelte-a42w5h"), ge(e, "class", "modal-backdrop svelte-a42w5h"), ge(e, "role", "dialog"), ge(e, "aria-modal", "true"), ge(e, "aria-labelledby", "eraser-settings-title");
    },
    m(T, K) {
      hf(T, e, K), ye(e, t), ye(t, n), ye(n, s), ye(n, l), ye(n, o), ye(t, r), ye(t, a), ye(a, c), ye(c, f), ye(c, u), ye(c, d), ye(d, m), Bs(
        m,
        /*tempSize*/
        i[1]
      ), ye(d, b), ye(d, g), Bs(
        g,
        /*tempSize*/
        i[1]
      ), ye(c, p), ye(c, h), ye(h, v), ye(h, w), ye(h, y), ye(y, k), ye(y, C), ye(t, B), ye(t, z), ye(z, D), ye(z, x), ye(z, M), Y || (I = [
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
          D,
          "click",
          /*handleClose*/
          i[3]
        ),
        Vt(
          M,
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
      ], Y = !0);
    },
    p(T, K) {
      K & /*tempSize*/
      2 && Bs(
        m,
        /*tempSize*/
        T[1]
      ), K & /*tempSize*/
      2 && Wo(g.value) !== /*tempSize*/
      T[1] && Bs(
        g,
        /*tempSize*/
        T[1]
      ), K & /*tempSize*/
      2 && Ws(v, "width", Math.min(
        /*tempSize*/
        T[1],
        30
      ) + "px"), K & /*tempSize*/
      2 && Ws(v, "height", Math.min(
        /*tempSize*/
        T[1],
        30
      ) + "px"), K & /*tempSize*/
      2 && Gb(
        k,
        /*tempSize*/
        T[1]
      );
    },
    d(T) {
      T && ff(e), Y = !1, Zb(I);
    }
  };
}
function $b(i) {
  let e, t = (
    /*visible*/
    i[0] && qr(i)
  );
  return {
    c() {
      t && t.c(), e = Vb();
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
function ep(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = Qb();
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
class tp extends Nb {
  constructor(e) {
    super(), Kb(this, e, ep, $b, Jb, { eraserSize: 6, visible: 0 });
  }
}
function wt(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const He = (i, e, t) => Math.min(Math.max(i, e), t);
class Pn {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d, m = "rgb(255, 255, 255)", b = 0.5, g = 25, p = 8, h = 2, v = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (y) => {
      if (this.isDragging) {
        let k = (y.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, C = (y.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = He(k, -this._xmin, B - this._xmax), C = He(C, -this._ymin, z - this._ymax), this._xmin += k, this._ymin += C, this._xmax += k, this._ymax += C, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (y) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(y.clientX, y.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, C = (C - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (y) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = He(this._xmin, 0, k - this.minSize), this._ymin = He(this._ymin, 0, C - this.minSize), this._xmax = He(this._xmax, this.minSize, k), this._ymax = He(this._ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > C ? (this._ymin -= this._ymax - C, this._ymax = C) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (y) => {
      if (this.isResizing) {
        const k = y.clientX, C = y.clientY, B = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (C - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += B, this._ymin += z, this._xmin = He(this._xmin, 0, this._xmax - this.minSize), this._ymin = He(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += B, this._ymin += z, this._xmax = He(this._xmax, this._xmin + this.minSize, D), this._ymin = He(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += B, this._ymax += z, this._xmax = He(this._xmax, this._xmin + this.minSize, D), this._ymax = He(this._ymax, this._ymin + this.minSize, x);
            break;
          case 3:
            this._xmin += B, this._ymax += z, this._xmin = He(this._xmin, 0, this._xmax - this.minSize), this._ymax = He(this._ymax, this._ymin + this.minSize, x);
            break;
          case 4:
            this._ymin += z, this._ymin = He(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += B, this._xmax = He(this._xmax, this._xmin + this.minSize, D);
            break;
          case 6:
            this._ymax += z, this._ymax = He(this._ymax, this._ymin + this.minSize, x);
            break;
          case 7:
            this._xmin += B, this._xmin = He(this._xmin, 0, this._xmax - this.minSize);
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
    if (this.updateOffset(), e.beginPath(), [n, s] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, s, this.getWidth(), this.getHeight()), e.fillStyle = wt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = wt(this.color, 1), e.stroke(), e.closePath(), t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let r = this.xmin, a = this.ymin - o;
      e.fillStyle = "white", [r, a] = this.toCanvasCoordinates(r, a), e.fillRect(r, a, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, l, o), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
    e.fillStyle = wt(this.color, 1);
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
  constructor(e, t, n, s, l, o, r, a, c, f, u, d = "rgb(255, 255, 255)", m = 0.5, b = 25, g = 8, p = 2, h = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (w) => {
      if (this.isDragging) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = w.clientX - k.left, B = w.clientY - k.top, [z, D] = this.toBoxCoordinates(C, B);
          let x = z - this.offsetMouseX, M = D - this.offsetMouseY;
          const Y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, I = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          x = Lr(x, this._radius, Y - this._radius), M = Lr(M, this._radius, I - this._radius), this._centerX = x, this._centerY = M, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (w) => {
      if (this.isCreating) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = (w.clientX - k.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, B = (w.clientY - k.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, z = C - this.offsetMouseX, D = B - this.offsetMouseY, x = Math.sqrt(z * z + D * D);
          this._radius = Math.max(x, 5), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (w) => {
      if (this.isResizing) {
        const y = document.querySelector("canvas");
        if (y) {
          const k = y.getBoundingClientRect(), C = w.clientX - k.left, B = w.clientY - k.top, [z, D] = this.toBoxCoordinates(C, B), x = Math.sqrt(
            Math.pow(z - this._centerX, 2) + Math.pow(D - this._centerY, 2)
          );
          this._radius = Math.max(x, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
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
    if (e.beginPath(), e.arc(n, s, l, 0, 2 * Math.PI), e.fillStyle = wt(this.color, this.alpha), e.fill(), e.strokeStyle = this.color, e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.stroke(), this.isSelected) {
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
class Mn {
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
        let B = this._xmin, z = this._ymin, D = this._xmax, x = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            B = this._xmin + w, z = this._ymin + y;
            break;
          case 1:
            D = this._xmax + w, z = this._ymin + y;
            break;
          case 2:
            D = this._xmax + w, x = this._ymax + y;
            break;
          case 3:
            B = this._xmin + w, x = this._ymax + y;
            break;
          case 4:
            z = this._ymin + y;
            break;
          case 5:
            D = this._xmax + w;
            break;
          case 6:
            x = this._ymax + y;
            break;
          case 7:
            B = this._xmin + w;
            break;
        }
        const M = (D - B) / k, Y = (x - z) / C;
        this._points = this._points.map((I) => ({
          x: B + (I.x - this._xmin) * M,
          y: z + (I.y - this._ymin) * Y
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
        e.closePath(), e.fillStyle = wt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = wt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke();
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
      e.fillStyle = wt(this.color, 1);
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
    e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = wt(this.color, 1), e.lineCap = "round", e.lineJoin = "round";
    let n = !1;
    for (let s = 0; s < this.points.length; s++) {
      const [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
      (s < t.length ? t[s] : !0) ? n ? e.lineTo(l, o) : (e.beginPath(), e.moveTo(l, o), n = !0) : n && (e.stroke(), n = !1);
    }
    if (n && e.stroke(), this.alpha > 0) {
      e.fillStyle = wt(this.color, this.alpha);
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
class Pt {
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
        let B = this._xmin, z = this._ymin, D = this._xmax, x = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            B = this._xmin + w, z = this._ymin + y;
            break;
          case 1:
            D = this._xmax + w, z = this._ymin + y;
            break;
          case 2:
            D = this._xmax + w, x = this._ymax + y;
            break;
          case 3:
            B = this._xmin + w, x = this._ymax + y;
            break;
          case 4:
            z = this._ymin + y;
            break;
          case 5:
            D = this._xmax + w;
            break;
          case 6:
            x = this._ymax + y;
            break;
          case 7:
            B = this._xmin + w;
            break;
        }
        const M = (D - B) / k, Y = (x - z) / C;
        this._points = this._points.map((I) => ({
          x: B + (I.x - this._xmin) * M,
          y: z + (I.y - this._ymin) * Y
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
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = wt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = wt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = wt(this.color, 1);
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
        e.fillStyle = wt(this.color, 1);
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
class np {
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
    return e instanceof Pn ? this.eraseFromBox(e, n) : e instanceof An ? this.eraseFromCircle(e, n) : e instanceof Mn ? this.eraseFromFreehand(e, n) : e instanceof Pt ? this.eraseFromPolygon(e, n) : [e];
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
    const t = new Pt(
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
    const t = new Pt(
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
    const t = new Pt(
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
    const n = new Mn(
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
    const l = new Pt(
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
const Ze = [
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
class ip {
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
  SvelteComponent: sp,
  add_flush_callback: Hr,
  append: U,
  attr: V,
  bind: Ir,
  binding_callbacks: Do,
  bubble: lo,
  check_outros: xi,
  create_component: Ue,
  destroy_component: Oe,
  detach: on,
  element: ie,
  group_outros: Si,
  init: lp,
  insert: an,
  is_function: op,
  listen: Xe,
  mount_component: je,
  noop: uf,
  run_all: df,
  safe_not_equal: ap,
  set_style: Xs,
  space: we,
  toggle_class: Fe,
  transition_in: fe,
  transition_out: ve
} = window.__gradio__svelte__internal, { onMount: rp, onDestroy: cp, createEventDispatcher: fp } = window.__gradio__svelte__internal;
function Pr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g, p, h, v, w, y, k, C, B, z, D, x, M, Y, I, T, K, R, he, q, $, j, J, H, se, le, A, Ee, E, Z, P, ce, X, Ce, be, G, re, qe, tt, kt, oi, yt, Ct, Wt, W, Qe, $e, pe, Ne, nt, Qt, _n, Ve, $t, xt;
  s = new C0({}), f = new Ig({}), p = new P0({}), C = new jg({}), I = new Qg({}), R = new v2({}), H = new eg({});
  let xe = (
    /*showRemoveButton*/
    i[3] && Ar(i)
  ), Be = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[20] && Tr(i);
  return ce = new l2({}), qe = new u2({}), Wt = new X0({
    props: { selected: (
      /*labelVisibility*/
      i[21]
    ) }
  }), nt = new N0({}), {
    c() {
      e = ie("span"), t = ie("div"), n = ie("button"), Ue(s.$$.fragment), l = we(), o = ie("span"), o.textContent = "Box", r = we(), a = ie("div"), c = ie("button"), Ue(f.$$.fragment), u = we(), d = ie("span"), d.textContent = "Freehand", m = we(), b = ie("div"), g = ie("button"), Ue(p.$$.fragment), h = we(), v = ie("span"), v.textContent = "Circle", w = we(), y = ie("div"), k = ie("button"), Ue(C.$$.fragment), B = we(), z = ie("span"), z.textContent = "Polygon", D = we(), x = ie("div"), M = ie("div"), Y = ie("button"), Ue(I.$$.fragment), T = we(), K = ie("button"), Ue(R.$$.fragment), he = we(), q = ie("span"), q.textContent = "Eraser", $ = we(), j = ie("div"), J = ie("button"), Ue(H.$$.fragment), se = we(), le = ie("span"), le.textContent = "Move", A = we(), xe && xe.c(), Ee = we(), Be && Be.c(), E = we(), Z = ie("div"), P = ie("button"), Ue(ce.$$.fragment), X = we(), Ce = ie("span"), Ce.textContent = "Undo", be = we(), G = ie("div"), re = ie("button"), Ue(qe.$$.fragment), tt = we(), kt = ie("span"), kt.textContent = "Redo", oi = we(), yt = ie("div"), Ct = ie("button"), Ue(Wt.$$.fragment), W = we(), Qe = ie("span"), Qe.textContent = "Labels", $e = we(), pe = ie("div"), Ne = ie("button"), Ue(nt.$$.fragment), Qt = we(), _n = ie("span"), _n.textContent = "Clear", V(n, "class", "icon tool-button svelte-mwe4hy"), V(n, "aria-label", "Create box"), Fe(
        n,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[10].creation
      ), V(o, "class", "tool-label svelte-mwe4hy"), V(t, "class", "tool-group svelte-mwe4hy"), V(c, "class", "icon tool-button svelte-mwe4hy"), V(c, "aria-label", "Freehand drawing"), Fe(
        c,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[10].freehand
      ), V(d, "class", "tool-label svelte-mwe4hy"), V(a, "class", "tool-group svelte-mwe4hy"), V(g, "class", "icon tool-button svelte-mwe4hy"), V(g, "aria-label", "Circle drawing"), Fe(
        g,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[10].circle
      ), V(v, "class", "tool-label svelte-mwe4hy"), V(b, "class", "tool-group svelte-mwe4hy"), V(k, "class", "icon tool-button svelte-mwe4hy"), V(k, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), Fe(
        k,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[10].polygon
      ), V(z, "class", "tool-label svelte-mwe4hy"), V(y, "class", "tool-group svelte-mwe4hy"), V(Y, "class", "icon tool-button svelte-mwe4hy"), V(Y, "aria-label", "Erase areas from shapes"), Fe(
        Y,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[10].erase
      ), V(K, "class", "icon dropdown-button svelte-mwe4hy"), V(K, "aria-label", "Eraser settings"), V(M, "class", "eraser-buttons svelte-mwe4hy"), V(q, "class", "tool-label svelte-mwe4hy"), V(x, "class", "tool-group eraser-group svelte-mwe4hy"), V(J, "class", "icon tool-button svelte-mwe4hy"), V(J, "aria-label", "Edit boxes"), Fe(
        J,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[10].drag
      ), V(le, "class", "tool-label svelte-mwe4hy"), V(j, "class", "tool-group svelte-mwe4hy"), V(P, "class", "icon tool-button svelte-mwe4hy"), V(P, "aria-label", "Undo (Ctrl+Z)"), Fe(
        P,
        "disabled",
        /*undoStack*/
        i[22].length === 0
      ), V(Ce, "class", "tool-label svelte-mwe4hy"), V(Z, "class", "tool-group svelte-mwe4hy"), V(re, "class", "icon tool-button svelte-mwe4hy"), V(re, "aria-label", "Redo (Ctrl+Y)"), Fe(
        re,
        "disabled",
        /*redoStack*/
        i[11].length === 0
      ), V(kt, "class", "tool-label svelte-mwe4hy"), V(G, "class", "tool-group svelte-mwe4hy"), V(Ct, "class", "icon tool-button svelte-mwe4hy"), V(Ct, "aria-label", "Show/Hide labels"), Fe(
        Ct,
        "selected",
        /*labelVisibility*/
        i[21]
      ), V(Qe, "class", "tool-label svelte-mwe4hy"), V(yt, "class", "tool-group svelte-mwe4hy"), V(Ne, "class", "icon tool-button svelte-mwe4hy"), V(Ne, "aria-label", "Clear Shapes"), V(_n, "class", "tool-label svelte-mwe4hy"), V(pe, "class", "tool-group svelte-mwe4hy"), V(e, "class", "canvas-control svelte-mwe4hy");
    },
    m(Q, Ae) {
      an(Q, e, Ae), U(e, t), U(t, n), je(s, n, null), U(t, l), U(t, o), U(e, r), U(e, a), U(a, c), je(f, c, null), U(a, u), U(a, d), U(e, m), U(e, b), U(b, g), je(p, g, null), U(b, h), U(b, v), U(e, w), U(e, y), U(y, k), je(C, k, null), U(y, B), U(y, z), U(e, D), U(e, x), U(x, M), U(M, Y), je(I, Y, null), U(M, T), U(M, K), je(R, K, null), U(x, he), U(x, q), U(e, $), U(e, j), U(j, J), je(H, J, null), U(j, se), U(j, le), U(e, A), xe && xe.m(e, null), U(e, Ee), Be && Be.m(e, null), U(e, E), U(e, Z), U(Z, P), je(ce, P, null), U(Z, X), U(Z, Ce), U(e, be), U(e, G), U(G, re), je(qe, re, null), U(G, tt), U(G, kt), U(e, oi), U(e, yt), U(yt, Ct), je(Wt, Ct, null), U(yt, W), U(yt, Qe), U(e, $e), U(e, pe), U(pe, Ne), je(nt, Ne, null), U(pe, Qt), U(pe, _n), Ve = !0, $t || (xt = [
        Xe(
          n,
          "click",
          /*click_handler*/
          i[56]
        ),
        Xe(
          c,
          "click",
          /*click_handler_1*/
          i[57]
        ),
        Xe(
          g,
          "click",
          /*click_handler_2*/
          i[58]
        ),
        Xe(
          k,
          "click",
          /*click_handler_3*/
          i[59]
        ),
        Xe(
          Y,
          "click",
          /*click_handler_4*/
          i[60]
        ),
        Xe(
          K,
          "click",
          /*openEraserSettings*/
          i[30]
        ),
        Xe(
          J,
          "click",
          /*click_handler_5*/
          i[61]
        ),
        Xe(
          P,
          "click",
          /*click_handler_8*/
          i[64]
        ),
        Xe(
          re,
          "click",
          /*click_handler_9*/
          i[65]
        ),
        Xe(
          Ct,
          "click",
          /*click_handler_10*/
          i[66]
        ),
        Xe(
          Ne,
          "click",
          /*click_handler_11*/
          i[67]
        )
      ], $t = !0);
    },
    p(Q, Ae) {
      (!Ve || Ae[0] & /*mode, Mode*/
      17408) && Fe(
        n,
        "selected",
        /*mode*/
        Q[14] === /*Mode*/
        Q[10].creation
      ), (!Ve || Ae[0] & /*mode, Mode*/
      17408) && Fe(
        c,
        "selected",
        /*mode*/
        Q[14] === /*Mode*/
        Q[10].freehand
      ), (!Ve || Ae[0] & /*mode, Mode*/
      17408) && Fe(
        g,
        "selected",
        /*mode*/
        Q[14] === /*Mode*/
        Q[10].circle
      ), (!Ve || Ae[0] & /*mode, Mode*/
      17408) && Fe(
        k,
        "selected",
        /*mode*/
        Q[14] === /*Mode*/
        Q[10].polygon
      ), (!Ve || Ae[0] & /*mode, Mode*/
      17408) && Fe(
        Y,
        "selected",
        /*mode*/
        Q[14] === /*Mode*/
        Q[10].erase
      ), (!Ve || Ae[0] & /*mode, Mode*/
      17408) && Fe(
        J,
        "selected",
        /*mode*/
        Q[14] === /*Mode*/
        Q[10].drag
      ), /*showRemoveButton*/
      Q[3] ? xe ? (xe.p(Q, Ae), Ae[0] & /*showRemoveButton*/
      8 && fe(xe, 1)) : (xe = Ar(Q), xe.c(), fe(xe, 1), xe.m(e, Ee)) : xe && (Si(), ve(xe, 1, 1, () => {
        xe = null;
      }), xi()), !/*disableEditBoxes*/
      Q[5] && /*labelDetailLock*/
      Q[20] ? Be ? (Be.p(Q, Ae), Ae[0] & /*disableEditBoxes, labelDetailLock*/
      1048608 && fe(Be, 1)) : (Be = Tr(Q), Be.c(), fe(Be, 1), Be.m(e, E)) : Be && (Si(), ve(Be, 1, 1, () => {
        Be = null;
      }), xi()), (!Ve || Ae[0] & /*redoStack*/
      2048) && Fe(
        re,
        "disabled",
        /*redoStack*/
        Q[11].length === 0
      );
      const ls = {};
      Ae[0] & /*labelVisibility*/
      2097152 && (ls.selected = /*labelVisibility*/
      Q[21]), Wt.$set(ls), (!Ve || Ae[0] & /*labelVisibility*/
      2097152) && Fe(
        Ct,
        "selected",
        /*labelVisibility*/
        Q[21]
      );
    },
    i(Q) {
      Ve || (fe(s.$$.fragment, Q), fe(f.$$.fragment, Q), fe(p.$$.fragment, Q), fe(C.$$.fragment, Q), fe(I.$$.fragment, Q), fe(R.$$.fragment, Q), fe(H.$$.fragment, Q), fe(xe), fe(Be), fe(ce.$$.fragment, Q), fe(qe.$$.fragment, Q), fe(Wt.$$.fragment, Q), fe(nt.$$.fragment, Q), Ve = !0);
    },
    o(Q) {
      ve(s.$$.fragment, Q), ve(f.$$.fragment, Q), ve(p.$$.fragment, Q), ve(C.$$.fragment, Q), ve(I.$$.fragment, Q), ve(R.$$.fragment, Q), ve(H.$$.fragment, Q), ve(xe), ve(Be), ve(ce.$$.fragment, Q), ve(qe.$$.fragment, Q), ve(Wt.$$.fragment, Q), ve(nt.$$.fragment, Q), Ve = !1;
    },
    d(Q) {
      Q && on(e), Oe(s), Oe(f), Oe(p), Oe(C), Oe(I), Oe(R), Oe(H), xe && xe.d(), Be && Be.d(), Oe(ce), Oe(qe), Oe(Wt), Oe(nt), $t = !1, df(xt);
    }
  };
}
function Ar(i) {
  let e, t, n, s, l, o, r, a;
  return n = new rg({}), {
    c() {
      e = ie("div"), t = ie("button"), Ue(n.$$.fragment), s = we(), l = ie("span"), l.textContent = "Delete", V(t, "class", "icon tool-button svelte-mwe4hy"), V(t, "aria-label", "Remove boxes"), V(l, "class", "tool-label svelte-mwe4hy"), V(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      an(c, e, f), U(e, t), je(n, t, null), U(e, s), U(e, l), o = !0, r || (a = Xe(
        t,
        "click",
        /*click_handler_6*/
        i[62]
      ), r = !0);
    },
    p: uf,
    i(c) {
      o || (fe(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ve(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && on(e), Oe(n), r = !1, a();
    }
  };
}
function Tr(i) {
  let e, t, n, s, l, o, r, a;
  return n = new mg({}), {
    c() {
      e = ie("div"), t = ie("button"), Ue(n.$$.fragment), s = we(), l = ie("span"), l.textContent = "Label", V(t, "class", "icon tool-button svelte-mwe4hy"), V(t, "aria-label", "Edit label"), V(l, "class", "tool-label svelte-mwe4hy"), V(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      an(c, e, f), U(e, t), je(n, t, null), U(e, s), U(e, l), o = !0, r || (a = Xe(
        t,
        "click",
        /*click_handler_7*/
        i[63]
      ), r = !0);
    },
    p: uf,
    i(c) {
      o || (fe(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ve(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && on(e), Oe(n), r = !1, a();
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
        i[13] >= 0 && /*selectedBox*/
        i[13] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[13]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[13] >= 0 && /*selectedBox*/
        i[13] < /*value*/
        i[0].boxes.length ? ni(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[13]
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
    i[68]
  ), {
    c() {
      Ue(e.$$.fragment);
    },
    m(n, s) {
      je(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      8193 && (l.label = /*selectedBox*/
      n[13] >= 0 && /*selectedBox*/
      n[13] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[13]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      8193 && (l.color = /*selectedBox*/
      n[13] >= 0 && /*selectedBox*/
      n[13] < /*value*/
      n[0].boxes.length ? ni(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[13]
        ].color
      ) : ""), e.$set(l);
    },
    i(n) {
      t || (fe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
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
        i[13] >= 0 && /*selectedBox*/
        i[13] < /*value*/
        i[0].boxes.length && /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[13]
        ].label || /*choices*/
        (i[1].length > 0 ? (
          /*choices*/
          i[1][0][0]
        ) : "")
      ),
      color: (
        /*selectedBox*/
        i[13] >= 0 && /*selectedBox*/
        i[13] < /*value*/
        i[0].boxes.length ? ni(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[13]
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
    i[69]
  ), {
    c() {
      Ue(e.$$.fragment);
    },
    m(n, s) {
      je(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value, choices*/
      8195 && (l.label = /*selectedBox*/
      n[13] >= 0 && /*selectedBox*/
      n[13] < /*value*/
      n[0].boxes.length && /*value*/
      n[0].boxes[
        /*selectedBox*/
        n[13]
      ].label || /*choices*/
      (n[1].length > 0 ? (
        /*choices*/
        n[1][0][0]
      ) : "")), s[0] & /*selectedBox, value, choicesColors*/
      8197 && (l.color = /*selectedBox*/
      n[13] >= 0 && /*selectedBox*/
      n[13] < /*value*/
      n[0].boxes.length ? ni(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[13]
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
      t || (fe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
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
        i[13] >= 0 && /*selectedBox*/
        i[13] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[13]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[13] >= 0 && /*selectedBox*/
        i[13] < /*value*/
        i[0].boxes.length ? ni(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[13]
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
    i[70]
  ), {
    c() {
      Ue(e.$$.fragment);
    },
    m(n, s) {
      je(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*choices*/
      2 && (l.choices = /*choices*/
      n[1]), s[0] & /*choicesColors*/
      4 && (l.choicesColors = /*choicesColors*/
      n[2]), s[0] & /*selectedBox, value*/
      8193 && (l.label = /*selectedBox*/
      n[13] >= 0 && /*selectedBox*/
      n[13] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[13]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      8193 && (l.color = /*selectedBox*/
      n[13] >= 0 && /*selectedBox*/
      n[13] < /*value*/
      n[0].boxes.length ? ni(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[13]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      1048576 && (l.labelDetailLock = /*labelDetailLock*/
      n[20]), e.$set(l);
    },
    i(n) {
      t || (fe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function hp(i) {
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
    i[71](k);
  }
  function w(k) {
    i[72](k);
  }
  let y = {};
  return (
    /*eraserSettingsVisible*/
    i[18] !== void 0 && (y.visible = /*eraserSettingsVisible*/
    i[18]), /*eraserSize*/
    i[19] !== void 0 && (y.eraserSize = /*eraserSize*/
    i[19]), a = new tp({ props: y }), Do.push(() => Ir(a, "visible", v)), Do.push(() => Ir(a, "eraserSize", w)), a.$on(
      "change",
      /*handleEraserSettingsChange*/
      i[31]
    ), a.$on(
      "close",
      /*handleEraserSettingsClose*/
      i[32]
    ), {
      c() {
        e = ie("div"), t = ie("canvas"), n = we(), b && b.c(), s = we(), g && g.c(), l = we(), p && p.c(), o = we(), h && h.c(), r = we(), Ue(a.$$.fragment), V(t, "tabindex", "0"), Xs(
          t,
          "height",
          /*height*/
          i[6]
        ), Xs(
          t,
          "width",
          /*width*/
          i[7]
        ), V(t, "class", "canvas-annotator svelte-mwe4hy"), V(e, "class", "canvas-container svelte-mwe4hy"), V(e, "tabindex", "-1");
      },
      m(k, C) {
        an(k, e, C), U(e, t), i[55](t), an(k, n, C), b && b.m(k, C), an(k, s, C), g && g.m(k, C), an(k, l, C), p && p.m(k, C), an(k, o, C), h && h.m(k, C), an(k, r, C), je(a, k, C), u = !0, d || (m = [
          Xe(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[24]
          ),
          Xe(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[25]
          ),
          Xe(t, "pointermove", function() {
            op(
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
          Xe(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[39]
          ),
          Xe(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[27]
          ),
          Xe(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[45]
          ),
          Xe(
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
        16 && fe(b, 1)) : (b = Pr(i), b.c(), fe(b, 1), b.m(s.parentNode, s)) : b && (Si(), ve(b, 1, 1, () => {
          b = null;
        }), xi()), /*editModalVisible*/
        i[15] ? g ? (g.p(i, C), C[0] & /*editModalVisible*/
        32768 && fe(g, 1)) : (g = Fr(i), g.c(), fe(g, 1), g.m(l.parentNode, l)) : g && (Si(), ve(g, 1, 1, () => {
          g = null;
        }), xi()), /*newModalVisible*/
        i[16] ? p ? (p.p(i, C), C[0] & /*newModalVisible*/
        65536 && fe(p, 1)) : (p = Ur(i), p.c(), fe(p, 1), p.m(o.parentNode, o)) : p && (Si(), ve(p, 1, 1, () => {
          p = null;
        }), xi()), /*editDefaultLabelVisible*/
        i[17] ? h ? (h.p(i, C), C[0] & /*editDefaultLabelVisible*/
        131072 && fe(h, 1)) : (h = Or(i), h.c(), fe(h, 1), h.m(r.parentNode, r)) : h && (Si(), ve(h, 1, 1, () => {
          h = null;
        }), xi());
        const B = {};
        !c && C[0] & /*eraserSettingsVisible*/
        262144 && (c = !0, B.visible = /*eraserSettingsVisible*/
        i[18], Hr(() => c = !1)), !f && C[0] & /*eraserSize*/
        524288 && (f = !0, B.eraserSize = /*eraserSize*/
        i[19], Hr(() => f = !1)), a.$set(B);
      },
      i(k) {
        u || (fe(b), fe(g), fe(p), fe(h), fe(a.$$.fragment, k), u = !0);
      },
      o(k) {
        ve(b), ve(g), ve(p), ve(h), ve(a.$$.fragment, k), u = !1;
      },
      d(k) {
        k && (on(e), on(n), on(s), on(l), on(o), on(r)), i[55](null), b && b.d(k), g && g.d(k), p && p.d(k), h && h.d(k), Oe(a, k), d = !1, df(m);
      }
    }
  );
}
const up = 50, dp = 3, oo = 3;
function Hn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function ni(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function _p(i, e, t) {
  let n;
  var s;
  (function(_) {
    _[_.creation = 0] = "creation", _[_.drag = 1] = "drag", _[_.freehand = 2] = "freehand", _[_.circle = 3] = "circle", _[_.polygon = 4] = "polygon", _[_.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, { imageUrl: f = null } = e, { interactive: u } = e, { boxAlpha: d = 0.5 } = e, { boxMinSize: m = 10 } = e, { handleSize: b } = e, { boxThickness: g } = e, { boxSelectedThickness: p } = e, { value: h } = e, { choices: v = [] } = e, { choicesColors: w = [] } = e, { disableEditBoxes: y = !1 } = e, { height: k = "100%" } = e, { width: C = "100%" } = e, { singleBox: B = !1 } = e, { showRemoveButton: z = null } = e, { handlesCursor: D = !0 } = e, { useDefaultLabel: x = !1 } = e;
  z === null && (z = y);
  let M, Y, I = null, T = -1, K = s.drag, R = new ip(G), he;
  h !== null && h.boxes.length == 0 && (K = s.creation);
  let q = 0, $ = 0, j = 0, J = 0, H = 1, se = 0, le = 0, A = !1, Ee = !1, E = !1, Z = !1, P = null, ce = 10, X = x, Ce = { label: "", color: "" };
  const be = fp();
  function G() {
    if (Y) {
      if (Y.clearRect(0, 0, M.width, M.height), Y.save(), Y.translate(R.offsetX, R.offsetY), Y.scale(R.scale, R.scale), I !== null) {
        switch (h.orientation) {
          case 0:
            Y.drawImage(I, 0, 0, se, le);
            break;
          case 1:
            Y.translate(se, 0), Y.rotate(Math.PI / 2), Y.drawImage(I, 0, 0, le, se);
            break;
          case 2:
            Y.translate(se, le), Y.rotate(Math.PI), Y.drawImage(I, 0, 0, se, le);
            break;
          case 3:
            Y.translate(0, le), Y.rotate(-Math.PI / 2), Y.drawImage(I, 0, 0, le, se);
            break;
        }
        Y.restore();
      }
      for (const _ of h.boxes.slice().reverse())
        _.render(Y, c);
      K === s.erase && he && he.renderErasePath(Y);
    }
  }
  function re(_) {
    t(13, T = _), h.boxes.forEach((S) => {
      S.setSelected(!1);
    }), _ >= 0 && _ < h.boxes.length && h.boxes[_].setSelected(!0), G();
  }
  function qe(_) {
    u && (a = !1, _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId), K === s.creation ? Ve(_) : K === s.freehand ? nt(_) : K === s.circle ? $t(_) : K === s.polygon ? Qt(_) : K === s.erase ? xt(_) : K === s.drag && tt(_));
  }
  function tt(_) {
    console.log("clickBox function called, mode:", K === s.drag ? "drag" : "creation");
    const S = M.getBoundingClientRect(), L = _.clientX - S.left, F = _.clientY - S.top;
    let O = !1;
    for (const [oe, ae] of h.boxes.entries()) {
      const Xt = ae.indexOfPointInsideHandle(L, F);
      if (Xt >= 0) {
        O = !0, re(oe);
        let Yn = null;
        ae.onMoveStart = () => {
          Yn = pe(ae), console.log("Resize started, captured state:", Yn);
        }, ae.onMoveEnd = () => {
          if (Yn) {
            const Go = pe(ae);
            console.log("Resize ended, final state:", Go), W({
              type: "edit_shape",
              shapeIndex: oe,
              oldShapeData: Yn,
              shapeData: Go
            }), Yn = null;
          }
        }, ae.startResize(Xt, _);
        return;
      }
    }
    for (const [oe, ae] of h.boxes.entries())
      if (ae.isPointInsideBox(L, F)) {
        O = !0, re(oe);
        let Xt = null;
        ae.onMoveStart = () => {
          Xt = pe(ae);
        }, ae.onMoveEnd = () => {
          Xt && (W({
            type: "edit_shape",
            shapeIndex: oe,
            oldShapeData: Xt,
            shapeData: pe(ae)
          }), Xt = null);
        }, ae.startDrag(_);
        return;
      }
    if (!O) {
      if (B || re(-1), console.log("No box selected, checking if we should dispatch select event"), K === s.drag) {
        console.log("Mode is drag, calculating coordinates");
        const oe = (L - R.offsetX) / H / R.scale, ae = (F - R.offsetY) / H / R.scale;
        console.log("Click detected in drag mode:", {
          mouseX: L,
          mouseY: F,
          imageX: oe,
          imageY: ae,
          scaleFactor: H,
          "canvasWindow.scale": R.scale,
          "canvasWindow.offsetX": R.offsetX,
          "canvasWindow.offsetY": R.offsetY
        }), I && oe >= 0 && oe <= I.naturalWidth && ae >= 0 && ae <= I.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(oe), Math.round(ae)]), be("select", {
          coordinates: [Math.round(oe), Math.round(ae)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!I,
          imageX: oe,
          imageY: ae,
          naturalWidth: I == null ? void 0 : I.naturalWidth,
          naturalHeight: I == null ? void 0 : I.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", K);
      R.startDrag(_);
    }
  }
  function kt(_) {
    K === s.erase && he && Be(), be("change");
  }
  function oi(_) {
    if (h === null)
      return;
    if (K === s.erase && he) {
      xe(_);
      return;
    }
    if (K !== s.drag)
      return;
    const S = M.getBoundingClientRect(), L = _.clientX - S.left, F = _.clientY - S.top;
    for (const [O, oe] of h.boxes.entries()) {
      const ae = oe.indexOfPointInsideHandle(L, F);
      if (ae >= 0) {
        t(12, M.style.cursor = oe.resizeHandles[ae].cursor, M);
        return;
      }
    }
    t(12, M.style.cursor = "default", M);
  }
  function yt(_) {
    if (u) {
      if (_.ctrlKey) {
        switch (_.key.toLowerCase()) {
          case "z":
            _.shiftKey ? $e() : Qe(), _.preventDefault();
            break;
          case "y":
            $e(), _.preventDefault();
            break;
        }
        return;
      }
      switch (_.key) {
        case "Delete":
          Xn();
          break;
        case " ":
          K === s.polygon && P && P.isCreating && (_.preventDefault(), P._points.length >= P.minPoints && P.finishCreating());
          break;
      }
    }
  }
  function Ct(_) {
    _.preventDefault();
    const S = 1 / (1 + _.deltaY / 1e3 * 0.5), L = parseFloat((R.scale * S).toFixed(2)), F = L < 1 ? 1 : L, O = M.getBoundingClientRect(), oe = _.clientX - O.left, ae = _.clientY - O.top, Xt = (oe - R.offsetX) / R.scale, Yn = (ae - R.offsetY) / R.scale;
    R.offsetX = oe - Xt * F, R.offsetY = ae - Yn * F, R.scale = F, G();
  }
  function Wt() {
    if (R.scale = 1, I !== null && M) {
      if (R.imageRotatedWidth <= M.width) {
        const _ = (M.width - se) / 2;
        R.offsetX = _;
      } else
        R.offsetX = 0;
      if (le < M.height) {
        const _ = (M.height - le) / 2;
        R.offsetY = _;
      } else
        R.offsetY = 0;
    } else
      R.offsetX = 0, R.offsetY = 0;
    G();
  }
  function W(_) {
    if (a) {
      console.log("Skipping undo action during initial state:", _);
      return;
    }
    t(11, o = []), l.push(Object.assign(Object.assign({}, _), { timestamp: Date.now() })), l.length > up && l.shift(), console.log("Added undo action:", _, "Stack size:", l.length);
  }
  function Qe() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let S = r.length - 1; S >= 0; S--) {
        const L = r[S];
        if (L.recoveryCount < oo) {
          h.boxes.map((F) => pe(F)), t(0, h.boxes = [], h);
          for (const F of L.allShapes) {
            const O = Ne(F);
            O && h.boxes.push(O);
          }
          L.recoveryCount++, L.recoveryCount >= oo && (r.splice(S, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${h.boxes.length} shapes from pre-clear history. Recovery ${L.recoveryCount}/${oo}`), re(-1), G(), be("change");
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
              shapeData: pe(S),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const S = Ne(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, S), o.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (P && _.pointData) {
            if (P._points.pop(), P._points.length === 0) {
              const S = h.boxes.indexOf(P);
              S >= 0 && h.boxes.splice(S, 1), P = null;
            } else
              P.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: _.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.oldShapeData && _.shapeIndex < h.boxes.length) {
            const S = pe(h.boxes[_.shapeIndex]);
            Ne(_.oldShapeData, h.boxes[_.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: S,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", _);
            const S = h.boxes.map((L) => pe(L));
            t(0, h.boxes = [], h);
            for (const L of _.oldShapeData) {
              const F = Ne(L);
              F && h.boxes.push(F);
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
      re(-1), G(), be("change");
    }
  }
  function $e() {
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
              shapeData: pe(S),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const S = Ne(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, S), l.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          _.pointData && (P ? (P._points.push(_.pointData), P._points.length === 1 && !h.boxes.includes(P) && (B ? t(0, h.boxes = [P], h) : t(0, h.boxes = [P, ...h.boxes], h)), P.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: _.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.shapeData && _.shapeIndex < h.boxes.length) {
            const S = pe(h.boxes[_.shapeIndex]);
            Ne(_.shapeData, h.boxes[_.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: S,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.shapeData) {
            const S = h.boxes.map((L) => pe(L));
            t(0, h.boxes = [], h);
            for (const L of _.shapeData) {
              const F = Ne(L);
              F && h.boxes.push(F);
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
      re(-1), G(), be("change");
    }
  }
  function pe(_) {
    return _ ? _ instanceof Mn ? {
      type: "freehand",
      points: [..._._points],
      label: _.label,
      color: _.color,
      xmin: _.xmin,
      ymin: _.ymin,
      xmax: _.xmax,
      ymax: _.ymax
    } : _ instanceof Pt ? {
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
    } : _ instanceof Pn ? {
      type: "box",
      label: _.label,
      color: _.color,
      xmin: _._xmin,
      ymin: _._ymin,
      xmax: _._xmax,
      ymax: _._ymax
    } : null : null;
  }
  function Ne(_, S) {
    if (!_) return null;
    if (S)
      return S.label = _.label, S.color = _.color, S instanceof Pn ? (S._xmin = _.xmin, S._ymin = _.ymin, S._xmax = _.xmax, S._ymax = _.ymax, S.applyUserScale()) : S instanceof An ? (S._centerX = _.centerX, S._centerY = _.centerY, S._radius = _.radius, S.applyUserScale()) : (S.xmin = _.xmin, S.ymin = _.ymin, S.xmax = _.xmax, S.ymax = _.ymax), (S instanceof Mn || S instanceof Pt) && _.points && (S._points = [..._.points], S.updateBoundingBox()), S;
    switch (_.type) {
      case "freehand":
        const L = new Mn(G, Dt, R, q, $, j, J, _.label, _.color, d, m, b, g, p);
        return L._points = [..._.points], L.updateBoundingBox(), L;
      case "polygon":
        const F = new Pt(G, Dt, R, q, $, j, J, _.label, _.color, d, m, b, g, p);
        return F._points = [..._.points], F.updateBoundingBox(), F;
      case "circle":
        return new An(G, Dt, R, q, $, j, J, _.label, _.centerX, _.centerY, _.radius, _.color, d, m, b, g, p);
      case "box":
        return new Pn(G, Dt, R, q, $, j, J, _.label, _.xmin, _.ymin, _.xmax, _.ymax, _.color, d, m, b, g, p);
    }
    return null;
  }
  function nt(_) {
    const S = M.getBoundingClientRect();
    let L;
    w.length > 0 ? L = Hn(w[0]) : B ? h.boxes.length > 0 ? L = h.boxes[0].color : L = Ze[0] : L = Ze[h.boxes.length % Ze.length];
    let F = new Mn(G, Dt, R, q, $, j, J, "", L, d, m, b, g, p);
    F.startCreating(_, S.left, S.top), B ? t(0, h.boxes = [F], h) : t(0, h.boxes = [F, ...h.boxes], h), W({ type: "create_shape", shapeIndex: 0 }), re(0), G(), be("change");
  }
  function Qt(_) {
    P && (!P._points || P._points.length === 0 || !h.boxes.includes(P)) && (console.log("Resetting invalid currentPolygon state"), P = null), P === null ? _n(_) : P.isCreating && (P.addPoint(_) || (G(), be("change")));
  }
  function _n(_) {
    const S = M.getBoundingClientRect();
    let L;
    w.length > 0 ? L = Hn(w[0]) : B ? h.boxes.length > 0 ? L = h.boxes[0].color : L = Ze[0] : L = Ze[h.boxes.length % Ze.length];
    let F = new Pt(G, wf, R, q, $, j, J, "", L, d, m, b, g, p);
    F.onPointAdded = (O) => {
      W({ type: "polygon_point", pointData: O });
    }, P = F, F.startCreating(_, S.left, S.top), B ? t(0, h.boxes = [F], h) : t(0, h.boxes = [F, ...h.boxes], h), W({ type: "create_shape", shapeIndex: 0 }), re(0), G(), be("change");
  }
  function Ve(_) {
    const S = M.getBoundingClientRect(), L = (_.clientX - S.left - R.offsetX) / H / R.scale, F = (_.clientY - S.top - R.offsetY) / H / R.scale;
    let O;
    w.length > 0 ? O = Hn(w[0]) : B ? h.boxes.length > 0 ? O = h.boxes[0].color : O = Ze[0] : O = Ze[h.boxes.length % Ze.length];
    let oe = new Pn(G, Dt, R, q, $, j, J, "", L, F, L, F, O, d, m, b, g, p);
    oe.startCreating(_, S.left, S.top), B ? t(0, h.boxes = [oe], h) : t(0, h.boxes = [oe, ...h.boxes], h), W({ type: "create_shape", shapeIndex: 0 }), re(0), G(), be("change");
  }
  function $t(_) {
    const S = M.getBoundingClientRect(), L = (_.clientX - S.left - R.offsetX) / R.scale, F = (_.clientY - S.top - R.offsetY) / R.scale;
    let O;
    w.length > 0 ? O = Hn(w[0]) : B ? h.boxes.length > 0 ? O = h.boxes[0].color : O = Ze[0] : O = Ze[h.boxes.length % Ze.length];
    let oe = new An(G, Dt, R, q, $, j, J, "", L, F, 0, O, d, m, b, g, p);
    oe.startCreating(_), B ? t(0, h.boxes = [oe], h) : t(0, h.boxes = [oe, ...h.boxes], h), W({ type: "create_shape", shapeIndex: 0 }), re(0), G(), be("change");
  }
  function xt(_) {
    he || (he = new np(R, H), he.setBrushSize(ce)), he.setScaleFactor(H);
    const S = M.getBoundingClientRect();
    he.startErase(_, S), G();
  }
  function xe(_) {
    if (!he) return;
    const S = M.getBoundingClientRect();
    he.continueErase(_, S), G();
  }
  function Be() {
    if (!he) return;
    const _ = he.endErase();
    if (_.length === 0) {
      mn();
      return;
    }
    const S = [...h.boxes], L = [], F = [];
    for (let O = 0; O < h.boxes.length; O++) {
      const oe = h.boxes[O], ae = he.eraseFromShape(oe, _);
      if (ae.length === 0)
        L.push(O);
      else {
        if (ae.length === 1 && ae[0] === oe)
          continue;
        L.push(O), F.push(...ae);
      }
    }
    if (L.length > 0 || F.length > 0) {
      for (let O = L.length - 1; O >= 0; O--)
        h.boxes.splice(L[O], 1);
      h.boxes.push(...F), W({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: S.map((O) => pe(O)),
        shapeData: h.boxes.map((O) => pe(O))
      }), re(-1), be("change");
    }
    G(), mn();
  }
  function Q() {
    t(18, Z = !0);
  }
  function Ae(_) {
    t(19, ce = _.detail.size), he && he.setBrushSize(ce);
  }
  function ls() {
    t(18, Z = !1);
  }
  function os() {
    t(14, K = s.creation), t(12, M.style.cursor = "crosshair", M), P = null;
  }
  function Uo() {
    t(14, K = s.freehand), t(12, M.style.cursor = "crosshair", M), P = null;
  }
  function Oo() {
    t(14, K = s.circle), t(12, M.style.cursor = "crosshair", M), P = null;
  }
  function jo() {
    t(14, K = s.polygon), t(12, M.style.cursor = "crosshair", M);
  }
  function No() {
    t(14, K = s.erase), t(12, M.style.cursor = "crosshair", M), P = null;
  }
  function mn() {
    t(14, K = s.drag), t(12, M.style.cursor = "default", M), P = null;
  }
  function Dt() {
    T >= 0 && T < h.boxes.length && (h.boxes[T].getArea() < 1 ? Xn() : (y || (X ? Ko() : t(16, Ee = !0)), B && mn()));
  }
  function wf() {
    P = null, T >= 0 && T < h.boxes.length && (h.boxes[T].getArea() < 1 ? Xn() : (y || (X ? Ko() : t(16, Ee = !0)), mn()));
  }
  function vf() {
    T >= 0 && T < h.boxes.length && !y && t(15, A = !0);
  }
  function kf(_) {
    if (!u)
      return;
    const S = M.getBoundingClientRect(), L = _.clientX - S.left, F = _.clientY - S.top;
    let O = !1;
    for (const [oe, ae] of h.boxes.entries())
      if (ae.isPointInsideBox(L, F)) {
        O = !0, re(oe), vf();
        break;
      }
    O || Wt();
  }
  function Vo(_, S) {
    const L = v.findIndex((F) => F[0] === _);
    L === -1 ? (v.push([_, v.length]), w.push(S), t(1, v), t(2, w), console.log(`Added custom label "${_}" with color ${S} to choices`)) : w[L] !== S && (t(2, w[L] = S, w), t(2, w), console.log(`Updated color for existing label "${_}" to ${S}`));
  }
  function yf(_) {
    t(15, A = !1);
    const { detail: S } = _;
    let L = S.label, F = S.color, O = S.ret;
    if (T >= 0 && T < h.boxes.length) {
      let oe = h.boxes[T];
      if (O == 1) {
        const ae = pe(oe);
        Vo(L, F), oe.label = L, oe.color = Hn(F);
        const Xt = pe(oe);
        W({
          type: "edit_shape",
          shapeIndex: T,
          oldShapeData: ae,
          shapeData: Xt
        }), G(), be("change");
      } else O == -1 && Xn();
    }
    setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function Cf(_) {
    t(16, Ee = !1);
    const { detail: S } = _;
    let L = S.label, F = S.color, O = S.ret, oe = S.lock;
    if (T >= 0 && T < h.boxes.length) {
      let ae = h.boxes[T];
      O == 1 ? (Vo(L, F), t(20, X = oe), Ce.label = L, Ce.color = F, ae.label = L, ae.color = Hn(F), G(), be("change"), mn()) : Xn();
    }
    setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function xf(_) {
    t(17, E = !1);
    const { detail: S } = _;
    let L = S.label, F = S.color, O = S.ret, oe = S.lock;
    O == 1 && (t(20, X = oe), Ce.label = L, Ce.color = F), setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function Ko() {
    if (T >= 0 && T < h.boxes.length) {
      let _ = h.boxes[T];
      _.label = Ce.label, Ce.color !== "" && (_.color = Hn(Ce.color)), G(), be("change"), mn();
    }
    setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function Xn() {
    if (T >= 0 && T < h.boxes.length) {
      const _ = h.boxes[T], S = pe(_);
      W({
        type: "delete_shape",
        shapeIndex: T,
        shapeData: S
      }), h.boxes.splice(T, 1), re(-1), B && os(), be("change");
    }
  }
  function Zo() {
    if (h.boxes.length === 0) return;
    const _ = h.boxes.map((S) => pe(S));
    for (r.push({
      allShapes: _,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > dp; )
      r.shift();
    t(0, h.boxes = [], h), re(-1), P = null, B && os(), G(), be("change"), console.log(`Cleared ${_.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function as() {
    if (M) {
      if (H = 1, t(12, M.width = M.clientWidth, M), R.setRotatedImage(I), I !== null) {
        if (R.imageRotatedWidth > M.width)
          H = M.width / R.imageRotatedWidth, se = Math.round(R.imageRotatedWidth * H), le = Math.round(R.imageRotatedHeight * H), q = 0, $ = 0, j = se, J = le, t(12, M.height = le, M);
        else {
          se = R.imageRotatedWidth, le = R.imageRotatedHeight;
          var _ = (M.width - se) / 2;
          q = _, $ = 0, j = _ + se, J = le, t(12, M.height = le, M);
        }
        R.imageWidth = se, R.imageHeight = le;
      } else
        q = 0, $ = 0, j = M.width, J = M.height, t(12, M.height = M.clientHeight, M);
      if (R.resize(M.width, M.height, q, $), j > 0 && J > 0)
        for (const S of h.boxes)
          S.canvasXmin = q, S.canvasYmin = $, S.canvasXmax = j, S.canvasYmax = J, S.setScaleFactor(H);
      G(), be("change");
    }
  }
  const Sf = new ResizeObserver(as);
  function zf() {
    for (let _ = 0; _ < h.boxes.length; _++) {
      let S = h.boxes[_];
      if (!(S instanceof Pn) && !(S instanceof Mn) && !(S instanceof Pt) && !(S instanceof An)) {
        let L = "", F = "";
        if (S.hasOwnProperty("color") ? (L = S.color, Array.isArray(L) && L.length === 3 && (L = `rgb(${L[0]}, ${L[1]}, ${L[2]})`)) : L = Ze[_ % Ze.length], S.hasOwnProperty("label") && (F = S.label), S.hasOwnProperty("type") && S.type === "freehand" && S.hasOwnProperty("points")) {
          let O = new Mn(G, Dt, R, q, $, j, J, F, L, d, m, b, g, p);
          O._points = S.points, O.updateBoundingBox(), S = O;
        } else if (S.hasOwnProperty("type") && S.type === "circle" && S.hasOwnProperty("centerX") && S.hasOwnProperty("centerY") && S.hasOwnProperty("radius"))
          S = new An(G, Dt, R, q, $, j, J, F, S.centerX, S.centerY, S.radius, L, d, m, b, g, p);
        else if (S.hasOwnProperty("type") && S.type === "polygon" && S.hasOwnProperty("points")) {
          let O = new Pt(G, Dt, R, q, $, j, J, F, L, d, m, b, g, p);
          O._points = S.points, O.updateBoundingBox(), S = O;
        } else
          S = new Pn(G, Dt, R, q, $, j, J, F, S.xmin, S.ymin, S.xmax, S.ymax, L, d, m, b, g, p);
        t(0, h.boxes[_] = S, h);
      }
    }
  }
  function Jo() {
    f !== null && (I === null || I.src != f) && (I = new Image(), I.src = f, I.onload = function() {
      as(), G();
    });
  }
  rp(() => {
    if (a = !0, Array.isArray(v) && v.length > 0) {
      if (!Array.isArray(w) || w.length == 0)
        for (let _ = 0; _ < v.length; _++) {
          let S = Ze[_ % Ze.length];
          w.push(ni(S));
        }
      Ce.label = v[0][0], Ce.color = w[0];
    }
    Y = M.getContext("2d"), Sf.observe(M), T < 0 && h !== null && h.boxes.length > 0 && re(0), Jo(), as(), G(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function Mf() {
    document.addEventListener("keydown", yt);
  }
  function Bf() {
    document.removeEventListener("keydown", yt);
  }
  cp(() => {
    document.removeEventListener("keydown", yt);
  });
  function Wf(_) {
    Do[_ ? "unshift" : "push"](() => {
      M = _, t(12, M);
    });
  }
  const Df = () => os(), Xf = () => Uo(), Yf = () => Oo(), Ef = () => jo(), Rf = () => No(), qf = () => mn(), Lf = () => Xn(), Hf = () => t(17, E = !0), If = () => Qe(), Pf = () => $e(), Af = () => {
    t(9, c = !c), G();
  }, Tf = () => Zo();
  function Ff(_) {
    lo.call(this, i, _);
  }
  function Uf(_) {
    lo.call(this, i, _);
  }
  function Of(_) {
    lo.call(this, i, _);
  }
  function jf(_) {
    Z = _, t(18, Z);
  }
  function Nf(_) {
    ce = _, t(19, ce);
  }
  return i.$$set = (_) => {
    "imageUrl" in _ && t(47, f = _.imageUrl), "interactive" in _ && t(4, u = _.interactive), "boxAlpha" in _ && t(48, d = _.boxAlpha), "boxMinSize" in _ && t(49, m = _.boxMinSize), "handleSize" in _ && t(50, b = _.handleSize), "boxThickness" in _ && t(51, g = _.boxThickness), "boxSelectedThickness" in _ && t(52, p = _.boxSelectedThickness), "value" in _ && t(0, h = _.value), "choices" in _ && t(1, v = _.choices), "choicesColors" in _ && t(2, w = _.choicesColors), "disableEditBoxes" in _ && t(5, y = _.disableEditBoxes), "height" in _ && t(6, k = _.height), "width" in _ && t(7, C = _.width), "singleBox" in _ && t(53, B = _.singleBox), "showRemoveButton" in _ && t(3, z = _.showRemoveButton), "handlesCursor" in _ && t(8, D = _.handlesCursor), "useDefaultLabel" in _ && t(54, x = _.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    512 && t(21, n = c), i.$$.dirty[0] & /*value*/
    1 && (R.orientation = h.orientation, Jo(), zf(), as(), G());
  }, [
    h,
    v,
    w,
    z,
    u,
    y,
    k,
    C,
    D,
    c,
    s,
    o,
    M,
    T,
    K,
    A,
    Ee,
    E,
    Z,
    ce,
    X,
    n,
    l,
    G,
    qe,
    kt,
    oi,
    Ct,
    Qe,
    $e,
    Q,
    Ae,
    ls,
    os,
    Uo,
    Oo,
    jo,
    No,
    mn,
    kf,
    yf,
    Cf,
    xf,
    Xn,
    Zo,
    Mf,
    Bf,
    f,
    d,
    m,
    b,
    g,
    p,
    B,
    x,
    Wf,
    Df,
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
    Nf
  ];
}
class mp extends sp {
  constructor(e) {
    super(), lp(
      this,
      e,
      _p,
      hp,
      ap,
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
        useDefaultLabel: 54
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: gp,
  add_flush_callback: bp,
  bind: pp,
  binding_callbacks: wp,
  create_component: vp,
  destroy_component: kp,
  init: yp,
  mount_component: Cp,
  safe_not_equal: xp,
  transition_in: Sp,
  transition_out: zp
} = window.__gradio__svelte__internal, { createEventDispatcher: Mp } = window.__gradio__svelte__internal;
function Bp(i) {
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
    i[0]), e = new mp({ props: l }), wp.push(() => pp(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), e.$on(
      "select",
      /*select_handler*/
      i[22]
    ), {
      c() {
        vp(e.$$.fragment);
      },
      m(o, r) {
        Cp(e, o, r), n = !0;
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
        o[0], bp(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Sp(e.$$.fragment, o), n = !0);
      },
      o(o) {
        zp(e.$$.fragment, o), n = !1;
      },
      d(o) {
        kp(e, o);
      }
    }
  );
}
function Wp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: d } = e, { boxSelectedThickness: m } = e, { value: b } = e, { disableEditBoxes: g } = e, { singleBox: p } = e, { showRemoveButton: h } = e, { handlesCursor: v } = e, { useDefaultLabel: w } = e, y, k;
  const C = Mp();
  function B(x) {
    b = x, t(0, b);
  }
  const z = () => C("change"), D = (x) => C("select", x.detail);
  return i.$$set = (x) => {
    "src" in x && t(18, n = x.src), "interactive" in x && t(1, s = x.interactive), "boxesAlpha" in x && t(2, l = x.boxesAlpha), "labelList" in x && t(3, o = x.labelList), "labelColors" in x && t(4, r = x.labelColors), "boxMinSize" in x && t(5, a = x.boxMinSize), "handleSize" in x && t(6, c = x.handleSize), "boxThickness" in x && t(7, f = x.boxThickness), "height" in x && t(8, u = x.height), "width" in x && t(9, d = x.width), "boxSelectedThickness" in x && t(10, m = x.boxSelectedThickness), "value" in x && t(0, b = x.value), "disableEditBoxes" in x && t(11, g = x.disableEditBoxes), "singleBox" in x && t(12, p = x.singleBox), "showRemoveButton" in x && t(13, h = x.showRemoveButton), "handlesCursor" in x && t(14, v = x.handlesCursor), "useDefaultLabel" in x && t(15, w = x.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, y = n), t(19, k = n);
      const x = n;
      Em(x).then((M) => {
        k === x && t(16, y = M);
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
    C,
    n,
    k,
    B,
    z,
    D
  ];
}
class Dp extends gp {
  constructor(e) {
    super(), yp(this, e, Wp, Bp, xp, {
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
class jr {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Xp,
  add_flush_callback: $s,
  append: gi,
  attr: Ki,
  bind: el,
  binding_callbacks: ts,
  bubble: Ti,
  check_outros: Tn,
  create_component: cn,
  create_slot: Yp,
  destroy_component: fn,
  detach: Gn,
  element: $i,
  empty: Ep,
  get_all_dirty_from_scope: Rp,
  get_slot_changes: qp,
  group_outros: Fn,
  init: Lp,
  insert: Qn,
  mount_component: hn,
  noop: Hp,
  safe_not_equal: Ip,
  space: In,
  toggle_class: Nr,
  transition_in: me,
  transition_out: Se,
  update_slot_base: Pp
} = window.__gradio__svelte__internal, { createEventDispatcher: Ap, tick: Tp } = window.__gradio__svelte__internal;
function Vr(i) {
  let e, t;
  return e = new Nm({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Fp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, s) {
      hn(e, n, s), t = !0;
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
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Se(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function Fp(i) {
  let e, t;
  return e = new tl({
    props: {
      Icon: vd,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, s) {
      hn(e, n, s), t = !0;
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
      Se(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function Kr(i) {
  let e, t;
  return e = new B_({
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
      cn(e.$$.fragment);
    },
    m(n, s) {
      hn(e, n, s), t = !0;
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
      Se(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
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
    i[36]
  ), {
    c() {
      e = $i("div"), cn(t.$$.fragment);
    },
    m(s, l) {
      Qn(s, e, l), hn(t, e, null), n = !0;
    },
    p: Hp,
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Gn(e), fn(t);
    }
  };
}
function Jr(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = Yp(
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
      8388608) && Pp(
        n,
        t,
        s,
        /*$$scope*/
        s[54],
        e ? qp(
          t,
          /*$$scope*/
          s[54],
          l,
          null
        ) : Rp(
          /*$$scope*/
          s[54]
        ),
        null
      );
    },
    i(s) {
      e || (me(n, s), e = !0);
    },
    o(s) {
      Se(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Up(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Jr(i)
  );
  return {
    c() {
      n && n.c(), e = Ep();
    },
    m(s, l) {
      n && n.m(s, l), Qn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && me(n, 1)) : (n = Jr(s), n.c(), me(n, 1), n.m(e.parentNode, e)) : n && (Fn(), Se(n, 1, 1, () => {
        n = null;
      }), Tn());
    },
    i(s) {
      t || (me(n), t = !0);
    },
    o(s) {
      Se(n), t = !1;
    },
    d(s) {
      s && Gn(e), n && n.d(s);
    }
  };
}
function Gr(i) {
  let e, t;
  return e = new g0({
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
      cn(e.$$.fragment);
    },
    m(n, s) {
      hn(e, n, s), t = !0;
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
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Se(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function Qr(i) {
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
    i[1]), t = new Dp({ props: o }), ts.push(() => el(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), t.$on(
      "select",
      /*select_handler*/
      i[52]
    ), {
      c() {
        e = $i("div"), cn(t.$$.fragment), Ki(e, "class", "image-frame svelte-1gjdske"), Nr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Qn(r, e, a), hn(t, e, null), s = !0;
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
        r[1], $s(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Nr(
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
        Se(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Gn(e), fn(t);
      }
    }
  );
}
function $r(i) {
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
    i[0]), e = new O_({ props: l }), ts.push(() => el(e, "active_source", s)), {
      c() {
        cn(e.$$.fragment);
      },
      m(o, r) {
        hn(e, o, r), n = !0;
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
        Se(e.$$.fragment, o), n = !1;
      },
      d(o) {
        fn(e, o);
      }
    }
  );
}
function Op(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, b, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), p;
  e = new ou({
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
  function y(x) {
    i[42](x);
  }
  function k(x) {
    i[43](x);
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
    $$slots: { default: [Up] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (C.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (C.dragging = /*dragging*/
  i[30]), c = new S1({ props: C }), i[41](c), ts.push(() => el(c, "uploading", y)), ts.push(() => el(c, "dragging", k)), c.$on(
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
    i[0] === "webcam" && Gr(i)
  ), z = (
    /*value*/
    i[1] !== null && Qr(i)
  ), D = g && $r(i);
  return {
    c() {
      cn(e.$$.fragment), t = In(), n = $i("div"), h && h.c(), s = In(), v && v.c(), l = In(), w && w.c(), o = In(), r = $i("div"), a = $i("div"), cn(c.$$.fragment), d = In(), B && B.c(), m = In(), z && z.c(), b = In(), D && D.c(), Ki(n, "class", "icon-buttons svelte-1gjdske"), Ki(a, "class", "upload-container svelte-1gjdske"), Ki(r, "data-testid", "image"), Ki(r, "class", "image-container svelte-1gjdske");
    },
    m(x, M) {
      hn(e, x, M), Qn(x, t, M), Qn(x, n, M), h && h.m(n, null), gi(n, s), v && v.m(n, null), gi(n, l), w && w.m(n, null), Qn(x, o, M), Qn(x, r, M), gi(r, a), hn(c, a, null), gi(a, d), B && B.m(a, null), gi(a, m), z && z.m(a, null), gi(r, b), D && D.m(r, null), p = !0;
    },
    p(x, M) {
      const Y = {};
      M[0] & /*show_label*/
      8 && (Y.show_label = /*show_label*/
      x[3]), M[0] & /*label*/
      4 && (Y.label = /*label*/
      x[2] || "Image Annotator"), e.$set(Y), /*showDownloadButton*/
      x[10] && /*value*/
      x[1] !== null ? h ? (h.p(x, M), M[0] & /*showDownloadButton, value*/
      1026 && me(h, 1)) : (h = Vr(x), h.c(), me(h, 1), h.m(n, s)) : h && (Fn(), Se(h, 1, 1, () => {
        h = null;
      }), Tn()), /*showShareButton*/
      x[9] && /*value*/
      x[1] !== null ? v ? (v.p(x, M), M[0] & /*showShareButton, value*/
      514 && me(v, 1)) : (v = Kr(x), v.c(), me(v, 1), v.m(n, l)) : v && (Fn(), Se(v, 1, 1, () => {
        v = null;
      }), Tn()), /*showClearButton*/
      x[11] && /*value*/
      x[1] !== null && /*interactive*/
      x[7] ? w ? (w.p(x, M), M[0] & /*showClearButton, value, interactive*/
      2178 && me(w, 1)) : (w = Zr(x), w.c(), me(w, 1), w.m(n, null)) : w && (Fn(), Se(w, 1, 1, () => {
        w = null;
      }), Tn());
      const I = {};
      M[0] & /*value, active_source*/
      3 && (I.hidden = /*value*/
      x[1] !== null || /*active_source*/
      x[0] === "webcam"), M[0] & /*active_source*/
      1 && (I.filetype = /*active_source*/
      x[0] === "clipboard" ? "clipboard" : "image/*"), M[0] & /*root*/
      64 && (I.root = /*root*/
      x[6]), M[0] & /*max_file_size*/
      33554432 && (I.max_file_size = /*max_file_size*/
      x[25]), M[0] & /*sources*/
      16 && (I.disable_click = !/*sources*/
      x[4].includes("upload")), M[0] & /*cli_upload*/
      67108864 && (I.upload = /*cli_upload*/
      x[26]), M[0] & /*stream_handler*/
      134217728 && (I.stream_handler = /*stream_handler*/
      x[27]), M[0] & /*value*/
      2 | M[1] & /*$$scope*/
      8388608 && (I.$$scope = { dirty: M, ctx: x }), !f && M[0] & /*uploading*/
      536870912 && (f = !0, I.uploading = /*uploading*/
      x[29], $s(() => f = !1)), !u && M[0] & /*dragging*/
      1073741824 && (u = !0, I.dragging = /*dragging*/
      x[30], $s(() => u = !1)), c.$set(I), /*value*/
      x[1] === null && /*active_source*/
      x[0] === "webcam" ? B ? (B.p(x, M), M[0] & /*value, active_source*/
      3 && me(B, 1)) : (B = Gr(x), B.c(), me(B, 1), B.m(a, m)) : B && (Fn(), Se(B, 1, 1, () => {
        B = null;
      }), Tn()), /*value*/
      x[1] !== null ? z ? (z.p(x, M), M[0] & /*value*/
      2 && me(z, 1)) : (z = Qr(x), z.c(), me(z, 1), z.m(a, null)) : z && (Fn(), Se(z, 1, 1, () => {
        z = null;
      }), Tn()), M[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (x[4].length > 1 || /*sources*/
      x[4].includes("clipboard")) && /*value*/
      x[1] === null && /*interactive*/
      x[7]), g ? D ? (D.p(x, M), M[0] & /*sources, value, interactive*/
      146 && me(D, 1)) : (D = $r(x), D.c(), me(D, 1), D.m(r, null)) : D && (Fn(), Se(D, 1, 1, () => {
        D = null;
      }), Tn());
    },
    i(x) {
      p || (me(e.$$.fragment, x), me(h), me(v), me(w), me(c.$$.fragment, x), me(B), me(z), me(D), p = !0);
    },
    o(x) {
      Se(e.$$.fragment, x), Se(h), Se(v), Se(w), Se(c.$$.fragment, x), Se(B), Se(z), Se(D), p = !1;
    },
    d(x) {
      x && (Gn(t), Gn(n), Gn(o), Gn(r)), fn(e, x), h && h.d(), v && v.d(), w && w.d(), i[41](null), fn(c), B && B.d(), z && z.d(), D && D.d();
    }
  };
}
function jp(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(W, Qe, $e, pe) {
    function Ne(nt) {
      return nt instanceof $e ? nt : new $e(function(Qt) {
        Qt(nt);
      });
    }
    return new ($e || ($e = Promise))(function(nt, Qt) {
      function _n(xt) {
        try {
          $t(pe.next(xt));
        } catch (xe) {
          Qt(xe);
        }
      }
      function Ve(xt) {
        try {
          $t(pe.throw(xt));
        } catch (xe) {
          Qt(xe);
        }
      }
      function $t(xt) {
        xt.done ? nt(xt.value) : Ne(xt.value).then(_n, Ve);
      }
      $t((pe = pe.apply(W, Qe || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: m } = e, { showShareButton: b } = e, { showDownloadButton: g } = e, { showClearButton: p } = e, { boxesAlpha: h } = e, { labelList: v } = e, { labelColors: w } = e, { boxMinSize: y } = e, { handleSize: k } = e, { height: C } = e, { width: B } = e, { boxThickness: z } = e, { disableEditBoxes: D } = e, { singleBox: x } = e, { showRemoveButton: M } = e, { handlesCursor: Y } = e, { boxSelectedThickness: I } = e, { max_file_size: T = null } = e, { cli_upload: K } = e, { stream_handler: R } = e, { useDefaultLabel: he } = e, q, $ = !1, { active_source: j = null } = e;
  function J({ detail: W }) {
    t(1, o = new jr()), t(1, o.image = W, o), se("upload");
  }
  function H(W) {
    return l(this, void 0, void 0, function* () {
      const Qe = yield q.load_files([new File([W], "webcam.png")]), $e = (Qe == null ? void 0 : Qe[0]) || null;
      $e ? (t(1, o = new jr()), t(1, o.image = $e, o)) : t(1, o = null), yield Tp(), se("change");
    });
  }
  const se = Ap();
  let le = !1;
  function A(W) {
    return l(this, void 0, void 0, function* () {
      switch (W) {
        case "clipboard":
          q.paste_clipboard();
          break;
      }
    });
  }
  function Ee() {
    t(1, o = null), se("clear"), se("change");
  }
  const E = async (W) => W === null ? "" : `<img src="${await m_(W.image)}" />`;
  function Z(W) {
    Ti.call(this, i, W);
  }
  function P(W) {
    Ti.call(this, i, W);
  }
  function ce(W) {
    ts[W ? "unshift" : "push"](() => {
      q = W, t(31, q);
    });
  }
  function X(W) {
    $ = W, t(29, $);
  }
  function Ce(W) {
    le = W, t(30, le);
  }
  function be(W) {
    Ti.call(this, i, W);
  }
  const G = (W) => H(W.detail), re = (W) => H(W.detail);
  function qe(W) {
    Ti.call(this, i, W);
  }
  function tt(W) {
    Ti.call(this, i, W);
  }
  const kt = (W) => H(W.detail);
  function oi(W) {
    o = W, t(1, o);
  }
  const yt = () => se("change"), Ct = (W) => se("select", { index: null, value: W.detail.coordinates });
  function Wt(W) {
    j = W, t(0, j), t(4, c);
  }
  return i.$$set = (W) => {
    "value" in W && t(1, o = W.value), "label" in W && t(2, r = W.label), "show_label" in W && t(3, a = W.show_label), "sources" in W && t(4, c = W.sources), "selectable" in W && t(5, f = W.selectable), "root" in W && t(6, u = W.root), "interactive" in W && t(7, d = W.interactive), "i18n" in W && t(8, m = W.i18n), "showShareButton" in W && t(9, b = W.showShareButton), "showDownloadButton" in W && t(10, g = W.showDownloadButton), "showClearButton" in W && t(11, p = W.showClearButton), "boxesAlpha" in W && t(12, h = W.boxesAlpha), "labelList" in W && t(13, v = W.labelList), "labelColors" in W && t(14, w = W.labelColors), "boxMinSize" in W && t(15, y = W.boxMinSize), "handleSize" in W && t(16, k = W.handleSize), "height" in W && t(17, C = W.height), "width" in W && t(18, B = W.width), "boxThickness" in W && t(19, z = W.boxThickness), "disableEditBoxes" in W && t(20, D = W.disableEditBoxes), "singleBox" in W && t(21, x = W.singleBox), "showRemoveButton" in W && t(22, M = W.showRemoveButton), "handlesCursor" in W && t(23, Y = W.handlesCursor), "boxSelectedThickness" in W && t(24, I = W.boxSelectedThickness), "max_file_size" in W && t(25, T = W.max_file_size), "cli_upload" in W && t(26, K = W.cli_upload), "stream_handler" in W && t(27, R = W.stream_handler), "useDefaultLabel" in W && t(28, he = W.useDefaultLabel), "active_source" in W && t(0, j = W.active_source), "$$scope" in W && t(54, s = W.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && $ && Ee(), i.$$.dirty[0] & /*dragging*/
    1073741824 && se("drag", le), i.$$.dirty[0] & /*active_source, sources*/
    17 && !j && c && t(0, j = c[0]);
  }, [
    j,
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
    B,
    z,
    D,
    x,
    M,
    Y,
    I,
    T,
    K,
    R,
    he,
    $,
    le,
    q,
    J,
    H,
    se,
    A,
    Ee,
    n,
    E,
    Z,
    P,
    ce,
    X,
    Ce,
    be,
    G,
    re,
    qe,
    tt,
    kt,
    oi,
    yt,
    Ct,
    Wt,
    s
  ];
}
class Np extends Xp {
  constructor(e) {
    super(), Lp(
      this,
      e,
      jp,
      Op,
      Ip,
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
  SvelteComponent: Vp,
  attr: Ps,
  detach: _f,
  element: mf,
  init: Kp,
  insert: gf,
  noop: ec,
  safe_not_equal: Zp,
  src_url_equal: tc,
  toggle_class: xn
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
function Jp(i) {
  let e, t = (
    /*value*/
    i[0] && nc(i)
  );
  return {
    c() {
      e = mf("div"), t && t.c(), Ps(e, "class", "container svelte-1sgcyba"), xn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), xn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), xn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), xn(
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
      2 && xn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && xn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && xn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && xn(
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
function Gp(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class Sw extends Vp {
  constructor(e) {
    super(), Kp(this, e, Gp, Jp, Zp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Qp,
  add_flush_callback: ic,
  assign: $p,
  bind: sc,
  binding_callbacks: lc,
  check_outros: ew,
  create_component: ii,
  destroy_component: si,
  detach: bf,
  empty: tw,
  flush: _e,
  get_spread_object: nw,
  get_spread_update: iw,
  group_outros: sw,
  init: lw,
  insert: pf,
  mount_component: li,
  safe_not_equal: ow,
  space: aw,
  transition_in: un,
  transition_out: dn
} = window.__gradio__svelte__internal;
function rw(i) {
  let e, t;
  return e = new Hu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [hw] },
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
      8192 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function cw(i) {
  let e, t;
  return e = new wc({
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
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function fw(i) {
  let e, t;
  return e = new wc({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
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
      1 && (l.i18n = /*gradio*/
      n[31].i18n), e.$set(l);
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function hw(i) {
  let e, t;
  return e = new uc({}), {
    c() {
      ii(e.$$.fragment);
    },
    m(n, s) {
      li(e, n, s), t = !0;
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function uw(i) {
  let e, t, n, s;
  const l = [fw, cw, rw], o = [];
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
      t.c(), n = tw();
    },
    m(a, c) {
      o[e].m(a, c), pf(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (sw(), dn(o[f], 1, 1, () => {
        o[f] = null;
      }), ew(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), un(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (un(t), s = !0);
    },
    o(a) {
      dn(t), s = !1;
    },
    d(a) {
      a && bf(n), o[e].d(a);
    }
  };
}
function dw(i) {
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
  for (let d = 0; d < r.length; d += 1)
    a = $p(a, r[d]);
  e = new Wm({ props: a });
  function c(d) {
    i[34](d);
  }
  function f(d) {
    i[35](d);
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
    $$slots: { default: [uw] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Np({ props: u }), lc.push(() => sc(n, "active_source", c)), lc.push(() => sc(n, "value", f)), n.$on(
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
        ii(e.$$.fragment), t = aw(), ii(n.$$.fragment);
      },
      m(d, m) {
        li(e, d, m), pf(d, t, m), li(n, d, m), o = !0;
      },
      p(d, m) {
        const b = m[0] & /*loading_status*/
        2 | m[1] & /*gradio*/
        1 ? iw(r, [
          m[1] & /*gradio*/
          1 && {
            autoscroll: (
              /*gradio*/
              d[31].autoscroll
            )
          },
          m[1] & /*gradio*/
          1 && { i18n: (
            /*gradio*/
            d[31].i18n
          ) },
          m[0] & /*loading_status*/
          2 && nw(
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
        1 && (g.i18n = /*gradio*/
        d[31].i18n), m[0] & /*boxes_alpha*/
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
        1 && (g.max_file_size = /*gradio*/
        d[31].max_file_size), m[1] & /*gradio*/
        1 && (g.cli_upload = /*gradio*/
        d[31].client.upload), m[1] & /*gradio*/
        1 && (g.stream_handler = /*gradio*/
        d[31].client.stream), m[0] & /*handle_size*/
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
        d[30]), m[1] & /*$$scope, gradio, active_source*/
        8197 && (g.$$scope = { dirty: m, ctx: d }), !s && m[1] & /*active_source*/
        4 && (s = !0, g.active_source = /*active_source*/
        d[33], ic(() => s = !1)), !l && m[0] & /*value*/
        1 && (l = !0, g.value = /*value*/
        d[0], ic(() => l = !1)), n.$set(g);
      },
      i(d) {
        o || (un(e.$$.fragment, d), un(n.$$.fragment, d), o = !0);
      },
      o(d) {
        dn(e.$$.fragment, d), dn(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && bf(t), si(e, d), si(n, d);
      }
    }
  );
}
function _w(i) {
  let e, t;
  return e = new rh({
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
      $$slots: { default: [dw] },
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
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      si(e, n);
    }
  };
}
function mw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: m = !0 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e, { loading_status: p } = e, { sources: h = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: w } = e, { show_clear_button: y } = e, { interactive: k } = e, { boxes_alpha: C } = e, { label_list: B } = e, { label_colors: z } = e, { box_min_size: D } = e, { handle_size: x } = e, { box_thickness: M } = e, { box_selected_thickness: Y } = e, { disable_edit_boxes: I } = e, { single_box: T } = e, { show_remove_button: K } = e, { handles_cursor: R } = e, { use_default_label: he } = e, { gradio: q } = e, $, j = null;
  function J(X) {
    j = X, t(33, j);
  }
  function H(X) {
    o = X, t(0, o);
  }
  const se = () => q.dispatch("change"), le = () => q.dispatch("edit"), A = () => {
    q.dispatch("clear");
  }, Ee = ({ detail: X }) => t(32, $ = X), E = () => q.dispatch("upload"), Z = ({ detail: X }) => q.dispatch("select", X), P = ({ detail: X }) => q.dispatch("share", X), ce = ({ detail: X }) => {
    t(1, p = p || {}), t(1, p.status = "error", p), q.dispatch("error", X);
  };
  return i.$$set = (X) => {
    "elem_id" in X && t(2, n = X.elem_id), "elem_classes" in X && t(3, s = X.elem_classes), "visible" in X && t(4, l = X.visible), "value" in X && t(0, o = X.value), "label" in X && t(5, r = X.label), "show_label" in X && t(6, a = X.show_label), "root" in X && t(7, c = X.root), "height" in X && t(8, f = X.height), "width" in X && t(9, u = X.width), "_selectable" in X && t(10, d = X._selectable), "container" in X && t(11, m = X.container), "scale" in X && t(12, b = X.scale), "min_width" in X && t(13, g = X.min_width), "loading_status" in X && t(1, p = X.loading_status), "sources" in X && t(14, h = X.sources), "show_download_button" in X && t(15, v = X.show_download_button), "show_share_button" in X && t(16, w = X.show_share_button), "show_clear_button" in X && t(17, y = X.show_clear_button), "interactive" in X && t(18, k = X.interactive), "boxes_alpha" in X && t(19, C = X.boxes_alpha), "label_list" in X && t(20, B = X.label_list), "label_colors" in X && t(21, z = X.label_colors), "box_min_size" in X && t(22, D = X.box_min_size), "handle_size" in X && t(23, x = X.handle_size), "box_thickness" in X && t(24, M = X.box_thickness), "box_selected_thickness" in X && t(25, Y = X.box_selected_thickness), "disable_edit_boxes" in X && t(26, I = X.disable_edit_boxes), "single_box" in X && t(27, T = X.single_box), "show_remove_button" in X && t(28, K = X.show_remove_button), "handles_cursor" in X && t(29, R = X.handles_cursor), "use_default_label" in X && t(30, he = X.use_default_label), "gradio" in X && t(31, q = X.gradio);
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
    B,
    z,
    D,
    x,
    M,
    Y,
    I,
    T,
    K,
    R,
    he,
    q,
    $,
    j,
    J,
    H,
    se,
    le,
    A,
    Ee,
    E,
    Z,
    P,
    ce
  ];
}
class zw extends Qp {
  constructor(e) {
    super(), lw(
      this,
      e,
      mw,
      _w,
      ow,
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
    this.$$set({ elem_id: e }), _e();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), _e();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), _e();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), _e();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), _e();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), _e();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), _e();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), _e();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), _e();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), _e();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), _e();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), _e();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), _e();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), _e();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), _e();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), _e();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), _e();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), _e();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), _e();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), _e();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), _e();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), _e();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), _e();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), _e();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), _e();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), _e();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), _e();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), _e();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), _e();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), _e();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), _e();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), _e();
  }
}
export {
  Sw as BaseExample,
  zw as default
};
