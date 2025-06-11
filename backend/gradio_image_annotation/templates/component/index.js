const {
  SvelteComponent: Ff,
  assign: Uf,
  create_slot: Of,
  detach: jf,
  element: Nf,
  get_all_dirty_from_scope: Vf,
  get_slot_changes: Kf,
  get_spread_update: Zf,
  init: Jf,
  insert: Gf,
  safe_not_equal: Qf,
  set_dynamic_element_data: Ko,
  set_style: ut,
  toggle_class: Tt,
  transition_in: tc,
  transition_out: nc,
  update_slot_base: $f
} = window.__gradio__svelte__internal;
function eh(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Of(
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
    r = Uf(r, o[a]);
  return {
    c() {
      e = Nf(
        /*tag*/
        i[14]
      ), l && l.c(), Ko(
        /*tag*/
        i[14]
      )(e, r), Tt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), Tt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), Tt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), Tt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), Tt(e, "hide-container", !/*explicit_call*/
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
      Gf(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && $f(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? Kf(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Vf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ko(
        /*tag*/
        a[14]
      )(e, r = Zf(o, [
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
      ])), Tt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Tt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Tt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Tt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Tt(e, "hide-container", !/*explicit_call*/
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
      n || (tc(l, a), n = !0);
    },
    o(a) {
      nc(l, a), n = !1;
    },
    d(a) {
      a && jf(e), l && l.d(a);
    }
  };
}
function th(i) {
  let e, t = (
    /*tag*/
    i[14] && eh(i)
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
      e || (tc(t, n), e = !0);
    },
    o(n) {
      nc(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function nh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: g = !1 } = e, { container: h = !0 } = e, { visible: b = !0 } = e, { allow_overflow: p = !0 } = e, { scale: v = null } = e, { min_width: w = 0 } = e, x = d === "fieldset" ? "fieldset" : "div";
  const k = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return i.$$set = (C) => {
    "height" in C && t(0, l = C.height), "width" in C && t(1, o = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, c = C.variant), "border_mode" in C && t(5, f = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, d = C.type), "test_id" in C && t(7, m = C.test_id), "explicit_call" in C && t(8, g = C.explicit_call), "container" in C && t(9, h = C.container), "visible" in C && t(10, b = C.visible), "allow_overflow" in C && t(11, p = C.allow_overflow), "scale" in C && t(12, v = C.scale), "min_width" in C && t(13, w = C.min_width), "$$scope" in C && t(17, s = C.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    m,
    g,
    h,
    b,
    p,
    v,
    w,
    x,
    k,
    d,
    s,
    n
  ];
}
class ih extends Ff {
  constructor(e) {
    super(), Jf(this, e, nh, th, Qf, {
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
  SvelteComponent: sh,
  attr: lh,
  create_slot: oh,
  detach: ah,
  element: rh,
  get_all_dirty_from_scope: ch,
  get_slot_changes: fh,
  init: hh,
  insert: uh,
  safe_not_equal: dh,
  transition_in: _h,
  transition_out: mh,
  update_slot_base: gh
} = window.__gradio__svelte__internal;
function bh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = oh(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = rh("div"), s && s.c(), lh(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      uh(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && gh(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? fh(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : ch(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (_h(s, l), t = !0);
    },
    o(l) {
      mh(s, l), t = !1;
    },
    d(l) {
      l && ah(e), s && s.d(l);
    }
  };
}
function ph(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class wh extends sh {
  constructor(e) {
    super(), hh(this, e, ph, bh, dh, {});
  }
}
const {
  SvelteComponent: vh,
  attr: Zo,
  check_outros: kh,
  create_component: yh,
  create_slot: Ch,
  destroy_component: xh,
  detach: Ds,
  element: Sh,
  empty: zh,
  get_all_dirty_from_scope: Mh,
  get_slot_changes: Bh,
  group_outros: Wh,
  init: Dh,
  insert: Es,
  mount_component: Eh,
  safe_not_equal: Xh,
  set_data: Yh,
  space: Lh,
  text: qh,
  toggle_class: oi,
  transition_in: Ti,
  transition_out: Xs,
  update_slot_base: Rh
} = window.__gradio__svelte__internal;
function Jo(i) {
  let e, t;
  return e = new wh({
    props: {
      $$slots: { default: [Ih] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      yh(e.$$.fragment);
    },
    m(n, s) {
      Eh(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Ti(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xh(e, n);
    }
  };
}
function Ih(i) {
  let e;
  return {
    c() {
      e = qh(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Es(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Yh(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ds(e);
    }
  };
}
function Hh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Ch(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Jo(i)
  );
  return {
    c() {
      e = Sh("span"), o && o.c(), t = Lh(), r && r.c(), n = zh(), Zo(e, "data-testid", "block-info"), Zo(e, "class", "svelte-22c38v"), oi(e, "sr-only", !/*show_label*/
      i[0]), oi(e, "hide", !/*show_label*/
      i[0]), oi(
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
      8) && Rh(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Bh(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : Mh(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && oi(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && oi(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && oi(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && Ti(r, 1)) : (r = Jo(a), r.c(), Ti(r, 1), r.m(n.parentNode, n)) : r && (Wh(), Xs(r, 1, 1, () => {
        r = null;
      }), kh());
    },
    i(a) {
      s || (Ti(o, a), Ti(r), s = !0);
    },
    o(a) {
      Xs(o, a), Xs(r), s = !1;
    },
    d(a) {
      a && (Ds(e), Ds(t), Ds(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Ph(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class ic extends vh {
  constructor(e) {
    super(), Dh(this, e, Ph, Hh, Xh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Ah,
  append: al,
  attr: ls,
  create_component: Th,
  destroy_component: Fh,
  detach: Uh,
  element: Go,
  init: Oh,
  insert: jh,
  mount_component: Nh,
  safe_not_equal: Vh,
  set_data: Kh,
  space: Zh,
  text: Jh,
  toggle_class: gn,
  transition_in: Gh,
  transition_out: Qh
} = window.__gradio__svelte__internal;
function $h(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Go("label"), t = Go("span"), Th(n.$$.fragment), s = Zh(), l = Jh(
        /*label*/
        i[0]
      ), ls(t, "class", "svelte-9gxdi0"), ls(e, "for", ""), ls(e, "data-testid", "block-label"), ls(e, "class", "svelte-9gxdi0"), gn(e, "hide", !/*show_label*/
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
      jh(r, e, a), al(e, t), Nh(n, t, null), al(e, s), al(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Kh(
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
      o || (Gh(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Qh(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Uh(e), Fh(n);
    }
  };
}
function eu(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class tu extends Ah {
  constructor(e) {
    super(), Oh(this, e, eu, $h, Vh, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: nu,
  append: io,
  attr: ln,
  bubble: iu,
  create_component: su,
  destroy_component: lu,
  detach: sc,
  element: so,
  init: ou,
  insert: lc,
  listen: au,
  mount_component: ru,
  safe_not_equal: cu,
  set_data: fu,
  set_style: ai,
  space: hu,
  text: uu,
  toggle_class: nt,
  transition_in: du,
  transition_out: _u
} = window.__gradio__svelte__internal;
function Qo(i) {
  let e, t;
  return {
    c() {
      e = so("span"), t = uu(
        /*label*/
        i[1]
      ), ln(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      lc(n, e, s), io(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && fu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && sc(e);
    }
  };
}
function mu(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && Qo(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = so("button"), a && a.c(), t = hu(), n = so("div"), su(s.$$.fragment), ln(n, "class", "svelte-1lrphxw"), nt(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), nt(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), nt(
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
      ), ln(e, "class", "svelte-1lrphxw"), nt(
        e,
        "pending",
        /*pending*/
        i[3]
      ), nt(
        e,
        "padded",
        /*padded*/
        i[5]
      ), nt(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), nt(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), ai(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), ai(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), ai(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      lc(c, e, f), a && a.m(e, null), io(e, t), io(e, n), ru(s, n, null), l = !0, o || (r = au(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = Qo(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && nt(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && nt(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && nt(
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
      8) && nt(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && nt(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && nt(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && nt(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && ai(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && ai(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && ai(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (du(s.$$.fragment, c), l = !0);
    },
    o(c) {
      _u(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && sc(e), a && a.d(), lu(s), o = !1, r();
    }
  };
}
function gu(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: m = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function p(v) {
    iu.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, s = v.Icon), "label" in v && t(1, l = v.label), "show_label" in v && t(2, o = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, c = v.padded), "highlight" in v && t(6, f = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, d = v.hasPopup), "color" in v && t(13, m = v.color), "transparent" in v && t(9, g = v.transparent), "background" in v && t(10, h = v.background), "offset" in v && t(11, b = v.offset);
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
    g,
    h,
    b,
    n,
    m,
    p
  ];
}
class Gs extends nu {
  constructor(e) {
    super(), ou(this, e, gu, mu, cu, {
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
  SvelteComponent: bu,
  append: pu,
  attr: rl,
  binding_callbacks: wu,
  create_slot: vu,
  detach: ku,
  element: $o,
  get_all_dirty_from_scope: yu,
  get_slot_changes: Cu,
  init: xu,
  insert: Su,
  safe_not_equal: zu,
  toggle_class: bn,
  transition_in: Mu,
  transition_out: Bu,
  update_slot_base: Wu
} = window.__gradio__svelte__internal;
function Du(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = vu(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = $o("div"), t = $o("div"), l && l.c(), rl(t, "class", "icon svelte-3w3rth"), rl(e, "class", "empty svelte-3w3rth"), rl(e, "aria-label", "Empty value"), bn(
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
      Su(o, e, r), pu(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Wu(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Cu(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : yu(
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
      n || (Mu(l, o), n = !0);
    },
    o(o) {
      Bu(l, o), n = !1;
    },
    d(o) {
      o && ku(e), l && l.d(o), i[6](null);
    }
  };
}
function Eu(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var d;
    if (!u) return !1;
    const { height: m } = u.getBoundingClientRect(), { height: g } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: m };
    return m > g + 2;
  }
  function f(u) {
    wu[u ? "unshift" : "push"](() => {
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
class Xu extends bu {
  constructor(e) {
    super(), xu(this, e, Eu, Du, zu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Yu,
  append: ea,
  attr: it,
  detach: Lu,
  init: qu,
  insert: Ru,
  noop: cl,
  safe_not_equal: Iu,
  svg_element: fl
} = window.__gradio__svelte__internal;
function Hu(i) {
  let e, t, n;
  return {
    c() {
      e = fl("svg"), t = fl("path"), n = fl("circle"), it(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), it(n, "cx", "12"), it(n, "cy", "13"), it(n, "r", "4"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24"), it(e, "fill", "none"), it(e, "stroke", "currentColor"), it(e, "stroke-width", "1.5"), it(e, "stroke-linecap", "round"), it(e, "stroke-linejoin", "round"), it(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Ru(s, e, l), ea(e, t), ea(e, n);
    },
    p: cl,
    i: cl,
    o: cl,
    d(s) {
      s && Lu(e);
    }
  };
}
class Pu extends Yu {
  constructor(e) {
    super(), qu(this, e, null, Hu, Iu, {});
  }
}
const {
  SvelteComponent: Au,
  append: Tu,
  attr: Wt,
  detach: Fu,
  init: Uu,
  insert: Ou,
  noop: hl,
  safe_not_equal: ju,
  svg_element: ta
} = window.__gradio__svelte__internal;
function Nu(i) {
  let e, t;
  return {
    c() {
      e = ta("svg"), t = ta("circle"), Wt(t, "cx", "12"), Wt(t, "cy", "12"), Wt(t, "r", "10"), Wt(e, "xmlns", "http://www.w3.org/2000/svg"), Wt(e, "width", "100%"), Wt(e, "height", "100%"), Wt(e, "viewBox", "0 0 24 24"), Wt(e, "stroke-width", "1.5"), Wt(e, "stroke-linecap", "round"), Wt(e, "stroke-linejoin", "round"), Wt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Ou(n, e, s), Tu(e, t);
    },
    p: hl,
    i: hl,
    o: hl,
    d(n) {
      n && Fu(e);
    }
  };
}
let Vu = class extends Au {
  constructor(e) {
    super(), Uu(this, e, null, Nu, ju, {});
  }
};
const {
  SvelteComponent: Ku,
  append: ul,
  attr: Dt,
  detach: Zu,
  init: Ju,
  insert: Gu,
  noop: dl,
  safe_not_equal: Qu,
  set_style: Ft,
  svg_element: os
} = window.__gradio__svelte__internal;
function $u(i) {
  let e, t, n, s;
  return {
    c() {
      e = os("svg"), t = os("g"), n = os("path"), s = os("path"), Dt(n, "d", "M18,6L6.087,17.913"), Ft(n, "fill", "none"), Ft(n, "fill-rule", "nonzero"), Ft(n, "stroke-width", "2px"), Dt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Dt(s, "d", "M4.364,4.364L19.636,19.636"), Ft(s, "fill", "none"), Ft(s, "fill-rule", "nonzero"), Ft(s, "stroke-width", "2px"), Dt(e, "width", "100%"), Dt(e, "height", "100%"), Dt(e, "viewBox", "0 0 24 24"), Dt(e, "version", "1.1"), Dt(e, "xmlns", "http://www.w3.org/2000/svg"), Dt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Dt(e, "xml:space", "preserve"), Dt(e, "stroke", "currentColor"), Ft(e, "fill-rule", "evenodd"), Ft(e, "clip-rule", "evenodd"), Ft(e, "stroke-linecap", "round"), Ft(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Gu(l, e, o), ul(e, t), ul(t, n), ul(e, s);
    },
    p: dl,
    i: dl,
    o: dl,
    d(l) {
      l && Zu(e);
    }
  };
}
class oc extends Ku {
  constructor(e) {
    super(), Ju(this, e, null, $u, Qu, {});
  }
}
const {
  SvelteComponent: ed,
  append: td,
  attr: Li,
  detach: nd,
  init: id,
  insert: sd,
  noop: _l,
  safe_not_equal: ld,
  svg_element: na
} = window.__gradio__svelte__internal;
function od(i) {
  let e, t;
  return {
    c() {
      e = na("svg"), t = na("path"), Li(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Li(t, "fill", "currentColor"), Li(e, "id", "icon"), Li(e, "xmlns", "http://www.w3.org/2000/svg"), Li(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      sd(n, e, s), td(e, t);
    },
    p: _l,
    i: _l,
    o: _l,
    d(n) {
      n && nd(e);
    }
  };
}
class ad extends ed {
  constructor(e) {
    super(), id(this, e, null, od, ld, {});
  }
}
const {
  SvelteComponent: rd,
  append: cd,
  attr: ri,
  detach: fd,
  init: hd,
  insert: ud,
  noop: ml,
  safe_not_equal: dd,
  svg_element: ia
} = window.__gradio__svelte__internal;
function _d(i) {
  let e, t;
  return {
    c() {
      e = ia("svg"), t = ia("path"), ri(t, "fill", "currentColor"), ri(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), ri(e, "xmlns", "http://www.w3.org/2000/svg"), ri(e, "width", "100%"), ri(e, "height", "100%"), ri(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      ud(n, e, s), cd(e, t);
    },
    p: ml,
    i: ml,
    o: ml,
    d(n) {
      n && fd(e);
    }
  };
}
class md extends rd {
  constructor(e) {
    super(), hd(this, e, null, _d, dd, {});
  }
}
const {
  SvelteComponent: gd,
  append: bd,
  attr: ci,
  detach: pd,
  init: wd,
  insert: vd,
  noop: gl,
  safe_not_equal: kd,
  svg_element: sa
} = window.__gradio__svelte__internal;
function yd(i) {
  let e, t;
  return {
    c() {
      e = sa("svg"), t = sa("path"), ci(t, "d", "M5 8l4 4 4-4z"), ci(e, "class", "dropdown-arrow svelte-145leq6"), ci(e, "xmlns", "http://www.w3.org/2000/svg"), ci(e, "width", "100%"), ci(e, "height", "100%"), ci(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      vd(n, e, s), bd(e, t);
    },
    p: gl,
    i: gl,
    o: gl,
    d(n) {
      n && pd(e);
    }
  };
}
let Mo = class extends gd {
  constructor(e) {
    super(), wd(this, e, null, yd, kd, {});
  }
};
const {
  SvelteComponent: Cd,
  append: bl,
  attr: We,
  detach: xd,
  init: Sd,
  insert: zd,
  noop: pl,
  safe_not_equal: Md,
  svg_element: as
} = window.__gradio__svelte__internal;
function Bd(i) {
  let e, t, n, s;
  return {
    c() {
      e = as("svg"), t = as("rect"), n = as("circle"), s = as("polyline"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(n, "cx", "8.5"), We(n, "cy", "8.5"), We(n, "r", "1.5"), We(s, "points", "21 15 16 10 5 21"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "fill", "none"), We(e, "stroke", "currentColor"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-image");
    },
    m(l, o) {
      zd(l, e, o), bl(e, t), bl(e, n), bl(e, s);
    },
    p: pl,
    i: pl,
    o: pl,
    d(l) {
      l && xd(e);
    }
  };
}
let ac = class extends Cd {
  constructor(e) {
    super(), Sd(this, e, null, Bd, Md, {});
  }
};
const {
  SvelteComponent: Wd,
  append: Dd,
  attr: rs,
  detach: Ed,
  init: Xd,
  insert: Yd,
  noop: wl,
  safe_not_equal: Ld,
  svg_element: la
} = window.__gradio__svelte__internal;
function qd(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("path"), rs(t, "fill", "currentColor"), rs(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), rs(e, "xmlns", "http://www.w3.org/2000/svg"), rs(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      Yd(n, e, s), Dd(e, t);
    },
    p: wl,
    i: wl,
    o: wl,
    d(n) {
      n && Ed(e);
    }
  };
}
class rc extends Wd {
  constructor(e) {
    super(), Xd(this, e, null, qd, Ld, {});
  }
}
const {
  SvelteComponent: Rd,
  append: cs,
  attr: De,
  detach: Id,
  init: Hd,
  insert: Pd,
  noop: vl,
  safe_not_equal: Ad,
  svg_element: qi
} = window.__gradio__svelte__internal;
function Td(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = qi("svg"), t = qi("path"), n = qi("path"), s = qi("line"), l = qi("line"), De(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), De(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), De(s, "x1", "12"), De(s, "y1", "19"), De(s, "x2", "12"), De(s, "y2", "23"), De(l, "x1", "8"), De(l, "y1", "23"), De(l, "x2", "16"), De(l, "y2", "23"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "2"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Pd(o, e, r), cs(e, t), cs(e, n), cs(e, s), cs(e, l);
    },
    p: vl,
    i: vl,
    o: vl,
    d(o) {
      o && Id(e);
    }
  };
}
class Fd extends Rd {
  constructor(e) {
    super(), Hd(this, e, null, Td, Ad, {});
  }
}
const {
  SvelteComponent: Ud,
  append: Od,
  attr: st,
  detach: jd,
  init: Nd,
  insert: Vd,
  noop: kl,
  safe_not_equal: Kd,
  svg_element: oa
} = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("rect"), st(t, "x", "3"), st(t, "y", "3"), st(t, "width", "18"), st(t, "height", "18"), st(t, "rx", "2"), st(t, "ry", "2"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "stroke-width", "1.5"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round"), st(e, "class", "feather feather-square");
    },
    m(n, s) {
      Vd(n, e, s), Od(e, t);
    },
    p: kl,
    i: kl,
    o: kl,
    d(n) {
      n && jd(e);
    }
  };
}
class Jd extends Ud {
  constructor(e) {
    super(), Nd(this, e, null, Zd, Kd, {});
  }
}
const {
  SvelteComponent: Gd,
  append: yl,
  attr: Ke,
  detach: Qd,
  init: $d,
  insert: e_,
  noop: Cl,
  safe_not_equal: t_,
  svg_element: fs
} = window.__gradio__svelte__internal;
function n_(i) {
  let e, t, n, s;
  return {
    c() {
      e = fs("svg"), t = fs("path"), n = fs("polyline"), s = fs("line"), Ke(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ke(n, "points", "17 8 12 3 7 8"), Ke(s, "x1", "12"), Ke(s, "y1", "3"), Ke(s, "x2", "12"), Ke(s, "y2", "15"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "width", "90%"), Ke(e, "height", "90%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "fill", "none"), Ke(e, "stroke", "currentColor"), Ke(e, "stroke-width", "2"), Ke(e, "stroke-linecap", "round"), Ke(e, "stroke-linejoin", "round"), Ke(e, "class", "feather feather-upload");
    },
    m(l, o) {
      e_(l, e, o), yl(e, t), yl(e, n), yl(e, s);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(l) {
      l && Qd(e);
    }
  };
}
let cc = class extends Gd {
  constructor(e) {
    super(), $d(this, e, null, n_, t_, {});
  }
};
const {
  SvelteComponent: i_,
  append: aa,
  attr: pn,
  detach: s_,
  init: l_,
  insert: o_,
  noop: xl,
  safe_not_equal: a_,
  svg_element: Sl
} = window.__gradio__svelte__internal;
function r_(i) {
  let e, t, n;
  return {
    c() {
      e = Sl("svg"), t = Sl("path"), n = Sl("path"), pn(t, "fill", "currentColor"), pn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), pn(n, "fill", "currentColor"), pn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), pn(e, "xmlns", "http://www.w3.org/2000/svg"), pn(e, "width", "100%"), pn(e, "height", "100%"), pn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      o_(s, e, l), aa(e, t), aa(e, n);
    },
    p: xl,
    i: xl,
    o: xl,
    d(s) {
      s && s_(e);
    }
  };
}
let fc = class extends i_ {
  constructor(e) {
    super(), l_(this, e, null, r_, a_, {});
  }
};
const c_ = [
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
], ra = {
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
c_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: ra[e][t],
      secondary: ra[e][n]
    }
  }),
  {}
);
class Ys extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function f_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Ys("Must be on Spaces to share.");
  let t, n, s;
  t = h_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new Ys(`Upload failed: ${c.error}`);
    }
    throw new Ys("Upload failed.");
  }
  return await o.text();
}
function h_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: u_,
  create_component: d_,
  destroy_component: __,
  init: m_,
  mount_component: g_,
  safe_not_equal: b_,
  transition_in: p_,
  transition_out: w_
} = window.__gradio__svelte__internal, { createEventDispatcher: v_ } = window.__gradio__svelte__internal;
function k_(i) {
  let e, t;
  return e = new Gs({
    props: {
      Icon: ad,
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
      d_(e.$$.fragment);
    },
    m(n, s) {
      g_(e, n, s), t = !0;
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
      t || (p_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      w_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      __(e, n);
    }
  };
}
function y_(i, e, t) {
  const n = v_();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof Ys ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class C_ extends u_ {
  constructor(e) {
    super(), m_(this, e, y_, k_, b_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: x_,
  append: jn,
  attr: lo,
  check_outros: S_,
  create_component: hc,
  destroy_component: uc,
  detach: Ls,
  element: oo,
  group_outros: z_,
  init: M_,
  insert: qs,
  mount_component: dc,
  safe_not_equal: B_,
  set_data: ao,
  space: ro,
  text: Fi,
  toggle_class: ca,
  transition_in: Hs,
  transition_out: Ps
} = window.__gradio__svelte__internal;
function W_(i) {
  let e, t;
  return e = new cc({}), {
    c() {
      hc(e.$$.fragment);
    },
    m(n, s) {
      dc(e, n, s), t = !0;
    },
    i(n) {
      t || (Hs(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ps(e.$$.fragment, n), t = !1;
    },
    d(n) {
      uc(e, n);
    }
  };
}
function D_(i) {
  let e, t;
  return e = new rc({}), {
    c() {
      hc(e.$$.fragment);
    },
    m(n, s) {
      dc(e, n, s), t = !0;
    },
    i(n) {
      t || (Hs(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ps(e.$$.fragment, n), t = !1;
    },
    d(n) {
      uc(e, n);
    }
  };
}
function fa(i) {
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
      e = oo("span"), t = Fi("- "), s = Fi(n), l = Fi(" -"), o = ro(), a = Fi(r), lo(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      qs(c, e, f), jn(e, t), jn(e, s), jn(e, l), qs(c, o, f), qs(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && ao(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && ao(a, r);
    },
    d(c) {
      c && (Ls(e), Ls(o), Ls(a));
    }
  };
}
function E_(i) {
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
  const f = [D_, W_], u = [];
  function d(g, h) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), s = u[n] = f[n](i);
  let m = (
    /*mode*/
    i[3] !== "short" && fa(i)
  );
  return {
    c() {
      e = oo("div"), t = oo("span"), s.c(), l = ro(), r = Fi(o), a = ro(), m && m.c(), lo(t, "class", "icon-wrap svelte-kzcjhc"), ca(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), lo(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, h) {
      qs(g, e, h), jn(e, t), u[n].m(t, null), jn(e, l), jn(e, r), jn(e, a), m && m.m(e, null), c = !0;
    },
    p(g, [h]) {
      let b = n;
      n = d(g), n !== b && (z_(), Ps(u[b], 1, 1, () => {
        u[b] = null;
      }), S_(), s = u[n], s || (s = u[n] = f[n](g), s.c()), Hs(s, 1), s.m(t, null)), (!c || h & /*hovered*/
      16) && ca(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!c || h & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && ao(r, o), /*mode*/
      g[3] !== "short" ? m ? m.p(g, h) : (m = fa(g), m.c(), m.m(e, null)) : m && (m.d(1), m = null);
    },
    i(g) {
      c || (Hs(s), c = !0);
    },
    o(g) {
      Ps(s), c = !1;
    },
    d(g) {
      g && Ls(e), u[n].d(), m && m.d();
    }
  };
}
function X_(i, e, t) {
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
class _c extends x_ {
  constructor(e) {
    super(), M_(this, e, X_, E_, B_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Y_,
  append: zl,
  attr: Gt,
  check_outros: Ui,
  create_component: Qs,
  destroy_component: $s,
  detach: zi,
  element: ts,
  empty: L_,
  group_outros: Oi,
  init: q_,
  insert: Mi,
  listen: el,
  mount_component: tl,
  safe_not_equal: R_,
  space: Ml,
  toggle_class: Dn,
  transition_in: Le,
  transition_out: ot
} = window.__gradio__svelte__internal;
function ha(i) {
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
  ), c, f = t && ua(i), u = s && da(i), d = o && _a(i), m = a && ma(i);
  return {
    c() {
      e = ts("span"), f && f.c(), n = Ml(), u && u.c(), l = Ml(), d && d.c(), r = Ml(), m && m.c(), Gt(e, "class", "source-selection svelte-1jp3vgd"), Gt(e, "data-testid", "source-select");
    },
    m(g, h) {
      Mi(g, e, h), f && f.m(e, null), zl(e, n), u && u.m(e, null), zl(e, l), d && d.m(e, null), zl(e, r), m && m.m(e, null), c = !0;
    },
    p(g, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? f ? (f.p(g, h), h & /*sources*/
      2 && Le(f, 1)) : (f = ua(g), f.c(), Le(f, 1), f.m(e, n)) : f && (Oi(), ot(f, 1, 1, () => {
        f = null;
      }), Ui()), h & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("microphone")), s ? u ? (u.p(g, h), h & /*sources*/
      2 && Le(u, 1)) : (u = da(g), u.c(), Le(u, 1), u.m(e, l)) : u && (Oi(), ot(u, 1, 1, () => {
        u = null;
      }), Ui()), h & /*sources*/
      2 && (o = /*sources*/
      g[1].includes("webcam")), o ? d ? (d.p(g, h), h & /*sources*/
      2 && Le(d, 1)) : (d = _a(g), d.c(), Le(d, 1), d.m(e, r)) : d && (Oi(), ot(d, 1, 1, () => {
        d = null;
      }), Ui()), h & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? m ? (m.p(g, h), h & /*sources*/
      2 && Le(m, 1)) : (m = ma(g), m.c(), Le(m, 1), m.m(e, null)) : m && (Oi(), ot(m, 1, 1, () => {
        m = null;
      }), Ui());
    },
    i(g) {
      c || (Le(f), Le(u), Le(d), Le(m), c = !0);
    },
    o(g) {
      ot(f), ot(u), ot(d), ot(m), c = !1;
    },
    d(g) {
      g && zi(e), f && f.d(), u && u.d(), d && d.d(), m && m.d();
    }
  };
}
function ua(i) {
  let e, t, n, s, l;
  return t = new cc({}), {
    c() {
      e = ts("button"), Qs(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Upload file"), Dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Mi(o, e, r), tl(t, e, null), n = !0, s || (l = el(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ot(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && zi(e), $s(t), s = !1, l();
    }
  };
}
function da(i) {
  let e, t, n, s, l;
  return t = new Fd({}), {
    c() {
      e = ts("button"), Qs(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Record audio"), Dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Mi(o, e, r), tl(t, e, null), n = !0, s || (l = el(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ot(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && zi(e), $s(t), s = !1, l();
    }
  };
}
function _a(i) {
  let e, t, n, s, l;
  return t = new fc({}), {
    c() {
      e = ts("button"), Qs(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Capture from camera"), Dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Mi(o, e, r), tl(t, e, null), n = !0, s || (l = el(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ot(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && zi(e), $s(t), s = !1, l();
    }
  };
}
function ma(i) {
  let e, t, n, s, l;
  return t = new rc({}), {
    c() {
      e = ts("button"), Qs(t.$$.fragment), Gt(e, "class", "icon svelte-1jp3vgd"), Gt(e, "aria-label", "Paste from clipboard"), Dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Mi(o, e, r), tl(t, e, null), n = !0, s || (l = el(
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
      n || (Le(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ot(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && zi(e), $s(t), s = !1, l();
    }
  };
}
function I_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && ha(i)
  );
  return {
    c() {
      n && n.c(), e = L_();
    },
    m(s, l) {
      n && n.m(s, l), Mi(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && Le(n, 1)) : (n = ha(s), n.c(), Le(n, 1), n.m(e.parentNode, e)) : n && (Oi(), ot(n, 1, 1, () => {
        n = null;
      }), Ui());
    },
    i(s) {
      t || (Le(n), t = !0);
    },
    o(s) {
      ot(n), t = !1;
    },
    d(s) {
      s && zi(e), n && n.d(s);
    }
  };
}
function H_(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(g, h, b, p) {
    function v(w) {
      return w instanceof b ? w : new b(function(x) {
        x(w);
      });
    }
    return new (b || (b = Promise))(function(w, x) {
      function k(M) {
        try {
          W(p.next(M));
        } catch (S) {
          x(S);
        }
      }
      function C(M) {
        try {
          W(p.throw(M));
        } catch (S) {
          x(S);
        }
      }
      function W(M) {
        M.done ? w(M.value) : v(M.value).then(k, C);
      }
      W((p = p.apply(g, h || [])).next());
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
  const f = () => c("upload"), u = () => c("microphone"), d = () => c("webcam"), m = () => c("clipboard");
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
    d,
    m
  ];
}
class P_ extends Y_ {
  constructor(e) {
    super(), q_(this, e, H_, I_, R_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function pi(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Rs() {
}
const A_ = (i) => i;
function T_(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function ga(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const mc = typeof window < "u";
let ba = mc ? () => window.performance.now() : () => Date.now(), gc = mc ? (i) => requestAnimationFrame(i) : Rs;
const Si = /* @__PURE__ */ new Set();
function bc(i) {
  Si.forEach((e) => {
    e.c(i) || (Si.delete(e), e.f());
  }), Si.size !== 0 && gc(bc);
}
function F_(i) {
  let e;
  return Si.size === 0 && gc(bc), {
    promise: new Promise((t) => {
      Si.add(e = { c: i, f: t });
    }),
    abort() {
      Si.delete(e);
    }
  };
}
function U_(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function O_(i, { delay: e = 0, duration: t = 400, easing: n = A_ } = {}) {
  const s = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
function pa(i, { delay: e = 0, duration: t = 400, easing: n = U_, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [u, d] = ga(s), [m, g] = ga(l);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, b) => `
			transform: ${c} translate(${(1 - h) * u}${d}, ${(1 - h) * m}${g});
			opacity: ${a - f * b}`
  };
}
const fi = [];
function j_(i, e = Rs) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(r) {
    if (T_(i, r) && (i = r, t)) {
      const a = !fi.length;
      for (const c of n)
        c[1](), fi.push(c, i);
      if (a) {
        for (let c = 0; c < fi.length; c += 2)
          fi[c][0](fi[c + 1]);
        fi.length = 0;
      }
    }
  }
  function l(r) {
    s(r(i));
  }
  function o(r, a = Rs) {
    const c = [r, a];
    return n.add(c), n.size === 1 && (t = e(s, l) || Rs), r(i), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function wa(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function co(i, e, t, n) {
  if (typeof t == "number" || wa(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * s, r = i.opts.damping * l, a = (o - r) * i.inv_mass, c = (l + a) * i.dt;
    return Math.abs(c) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, wa(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, l) => co(i, e[l], t[l], n[l])
      );
    if (typeof t == "object") {
      const s = {};
      for (const l in t)
        s[l] = co(i, e[l], t[l], n[l]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function va(i, e = {}) {
  const t = j_(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, d = 0, m = !1;
  function g(b, p = {}) {
    f = b;
    const v = a = {};
    return i == null || p.hard || h.stiffness >= 1 && h.damping >= 1 ? (m = !0, o = ba(), c = b, t.set(i = f), Promise.resolve()) : (p.soft && (d = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), u = 0), r || (o = ba(), m = !1, r = F_((w) => {
      if (m)
        return m = !1, r = null, !1;
      u = Math.min(u + d, 1);
      const x = {
        inv_mass: u,
        opts: h,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, k = co(x, c, i, f);
      return o = w, c = i, t.set(i = k), x.settled && (r = null), !x.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        v === a && w();
      });
    }));
  }
  const h = {
    set: g,
    update: (b, p) => g(b(f, i), p),
    subscribe: t.subscribe,
    stiffness: n,
    damping: s,
    precision: l
  };
  return h;
}
const {
  SvelteComponent: N_,
  append: Et,
  attr: fe,
  component_subscribe: ka,
  detach: V_,
  element: K_,
  init: Z_,
  insert: J_,
  noop: ya,
  safe_not_equal: G_,
  set_style: hs,
  svg_element: Xt,
  toggle_class: Ca
} = window.__gradio__svelte__internal, { onMount: Q_ } = window.__gradio__svelte__internal;
function $_(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d;
  return {
    c() {
      e = K_("div"), t = Xt("svg"), n = Xt("g"), s = Xt("path"), l = Xt("path"), o = Xt("path"), r = Xt("path"), a = Xt("g"), c = Xt("path"), f = Xt("path"), u = Xt("path"), d = Xt("path"), fe(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), fe(s, "fill", "#FF7C00"), fe(s, "fill-opacity", "0.4"), fe(s, "class", "svelte-43sxxs"), fe(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), fe(l, "fill", "#FF7C00"), fe(l, "class", "svelte-43sxxs"), fe(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), fe(o, "fill", "#FF7C00"), fe(o, "fill-opacity", "0.4"), fe(o, "class", "svelte-43sxxs"), fe(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), fe(r, "fill", "#FF7C00"), fe(r, "class", "svelte-43sxxs"), hs(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), fe(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), fe(c, "fill", "#FF7C00"), fe(c, "fill-opacity", "0.4"), fe(c, "class", "svelte-43sxxs"), fe(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), fe(f, "fill", "#FF7C00"), fe(f, "class", "svelte-43sxxs"), fe(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), fe(u, "fill", "#FF7C00"), fe(u, "fill-opacity", "0.4"), fe(u, "class", "svelte-43sxxs"), fe(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), fe(d, "fill", "#FF7C00"), fe(d, "class", "svelte-43sxxs"), hs(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), fe(t, "viewBox", "-1200 -1200 3000 3000"), fe(t, "fill", "none"), fe(t, "xmlns", "http://www.w3.org/2000/svg"), fe(t, "class", "svelte-43sxxs"), fe(e, "class", "svelte-43sxxs"), Ca(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(m, g) {
      J_(m, e, g), Et(e, t), Et(t, n), Et(n, s), Et(n, l), Et(n, o), Et(n, r), Et(t, a), Et(a, c), Et(a, f), Et(a, u), Et(a, d);
    },
    p(m, [g]) {
      g & /*$top*/
      2 && hs(n, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), g & /*$bottom*/
      4 && hs(a, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), g & /*margin*/
      1 && Ca(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: ya,
    o: ya,
    d(m) {
      m && V_(e);
    }
  };
}
function em(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(m, g, h, b) {
    function p(v) {
      return v instanceof h ? v : new h(function(w) {
        w(v);
      });
    }
    return new (h || (h = Promise))(function(v, w) {
      function x(W) {
        try {
          C(b.next(W));
        } catch (M) {
          w(M);
        }
      }
      function k(W) {
        try {
          C(b.throw(W));
        } catch (M) {
          w(M);
        }
      }
      function C(W) {
        W.done ? v(W.value) : p(W.value).then(x, k);
      }
      C((b = b.apply(m, g || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = va([0, 0]);
  ka(i, r, (m) => t(1, n = m));
  const a = va([0, 0]);
  ka(i, a, (m) => t(2, s = m));
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
  return Q_(() => (d(), () => c = !0)), i.$$set = (m) => {
    "margin" in m && t(0, o = m.margin);
  }, [o, n, s, r, a];
}
class tm extends N_ {
  constructor(e) {
    super(), Z_(this, e, em, $_, G_, { margin: 0 });
  }
}
const {
  SvelteComponent: nm,
  append: Nn,
  attr: Ht,
  binding_callbacks: xa,
  check_outros: fo,
  create_component: pc,
  create_slot: wc,
  destroy_component: vc,
  destroy_each: kc,
  detach: ee,
  element: Zt,
  empty: Bi,
  ensure_array_like: As,
  get_all_dirty_from_scope: yc,
  get_slot_changes: Cc,
  group_outros: ho,
  init: im,
  insert: te,
  mount_component: xc,
  noop: uo,
  safe_not_equal: sm,
  set_data: zt,
  set_style: Bn,
  space: St,
  text: xe,
  toggle_class: xt,
  transition_in: It,
  transition_out: Jt,
  update_slot_base: Sc
} = window.__gradio__svelte__internal, { tick: lm } = window.__gradio__svelte__internal, { onDestroy: om } = window.__gradio__svelte__internal, { createEventDispatcher: am } = window.__gradio__svelte__internal, rm = (i) => ({}), Sa = (i) => ({}), cm = (i) => ({}), za = (i) => ({});
function Ma(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ba(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function fm(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new Gs({
    props: {
      Icon: oc,
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
  ), f = wc(
    c,
    i,
    /*$$scope*/
    i[29],
    Sa
  );
  return {
    c() {
      e = Zt("div"), pc(t.$$.fragment), n = St(), s = Zt("span"), o = xe(l), r = St(), f && f.c(), Ht(e, "class", "clear-status svelte-16nch4a"), Ht(s, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      te(u, e, d), xc(t, e, null), te(u, n, d), te(u, s, d), Nn(s, o), te(u, r, d), f && f.m(u, d), a = !0;
    },
    p(u, d) {
      const m = {};
      d[0] & /*i18n*/
      2 && (m.label = /*i18n*/
      u[1]("common.clear")), t.$set(m), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && zt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && Sc(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? Cc(
          c,
          /*$$scope*/
          u[29],
          d,
          rm
        ) : yc(
          /*$$scope*/
          u[29]
        ),
        Sa
      );
    },
    i(u) {
      a || (It(t.$$.fragment, u), It(f, u), a = !0);
    },
    o(u) {
      Jt(t.$$.fragment, u), Jt(f, u), a = !1;
    },
    d(u) {
      u && (ee(e), ee(n), ee(s), ee(r)), vc(t), f && f.d(u);
    }
  };
}
function hm(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Wa(i)
  );
  function u(w, x) {
    if (
      /*progress*/
      w[7]
    ) return _m;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return dm;
    if (
      /*queue_position*/
      w[2] === 0
    ) return um;
  }
  let d = u(i), m = d && d(i), g = (
    /*timer*/
    i[5] && Xa(i)
  );
  const h = [pm, bm], b = [];
  function p(w, x) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = p(i)) && (o = b[l] = h[l](i));
  let v = !/*timer*/
  i[5] && Pa(i);
  return {
    c() {
      f && f.c(), e = St(), t = Zt("div"), m && m.c(), n = St(), g && g.c(), s = St(), o && o.c(), r = St(), v && v.c(), a = Bi(), Ht(t, "class", "progress-text svelte-16nch4a"), xt(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), xt(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, x) {
      f && f.m(w, x), te(w, e, x), te(w, t, x), m && m.m(t, null), Nn(t, n), g && g.m(t, null), te(w, s, x), ~l && b[l].m(w, x), te(w, r, x), v && v.m(w, x), te(w, a, x), c = !0;
    },
    p(w, x) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, x) : (f = Wa(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = u(w)) && m ? m.p(w, x) : (m && m.d(1), m = d && d(w), m && (m.c(), m.m(t, n))), /*timer*/
      w[5] ? g ? g.p(w, x) : (g = Xa(w), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!c || x[0] & /*variant*/
      256) && xt(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || x[0] & /*variant*/
      256) && xt(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let k = l;
      l = p(w), l === k ? ~l && b[l].p(w, x) : (o && (ho(), Jt(b[k], 1, 1, () => {
        b[k] = null;
      }), fo()), ~l ? (o = b[l], o ? o.p(w, x) : (o = b[l] = h[l](w), o.c()), It(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? v && (ho(), Jt(v, 1, 1, () => {
        v = null;
      }), fo()) : v ? (v.p(w, x), x[0] & /*timer*/
      32 && It(v, 1)) : (v = Pa(w), v.c(), It(v, 1), v.m(a.parentNode, a));
    },
    i(w) {
      c || (It(o), It(v), c = !0);
    },
    o(w) {
      Jt(o), Jt(v), c = !1;
    },
    d(w) {
      w && (ee(e), ee(t), ee(s), ee(r), ee(a)), f && f.d(w), m && m.d(), g && g.d(), ~l && b[l].d(w), v && v.d(w);
    }
  };
}
function Wa(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Zt("div"), Ht(e, "class", "eta-bar svelte-16nch4a"), Bn(e, "transform", t);
    },
    m(n, s) {
      te(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Bn(e, "transform", t);
    },
    d(n) {
      n && ee(e);
    }
  };
}
function um(i) {
  let e;
  return {
    c() {
      e = xe("processing |");
    },
    m(t, n) {
      te(t, e, n);
    },
    p: uo,
    d(t) {
      t && ee(e);
    }
  };
}
function dm(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = xe("queue: "), n = xe(t), s = xe("/"), l = xe(
        /*queue_size*/
        i[3]
      ), o = xe(" |");
    },
    m(r, a) {
      te(r, e, a), te(r, n, a), te(r, s, a), te(r, l, a), te(r, o, a);
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
      r && (ee(e), ee(n), ee(s), ee(l), ee(o));
    }
  };
}
function _m(i) {
  let e, t = As(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Ea(Ba(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Bi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      te(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = As(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ba(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Ea(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ee(e), kc(n, s);
    }
  };
}
function Da(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, u) {
    return (
      /*p*/
      f[41].length != null ? gm : mm
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = St(), n = xe(t), s = xe(" | "), o = xe(l);
    },
    m(f, u) {
      c.m(f, u), te(f, e, u), te(f, n, u), te(f, s, u), te(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && zt(n, t);
    },
    d(f) {
      f && (ee(e), ee(n), ee(s), ee(o)), c.d(f);
    }
  };
}
function mm(i) {
  let e = pi(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = xe(e);
    },
    m(n, s) {
      te(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = pi(
        /*p*/
        n[41].index || 0
      ) + "") && zt(t, e);
    },
    d(n) {
      n && ee(t);
    }
  };
}
function gm(i) {
  let e = pi(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = pi(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = xe(e), n = xe("/"), l = xe(s);
    },
    m(o, r) {
      te(o, t, r), te(o, n, r), te(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = pi(
        /*p*/
        o[41].index || 0
      ) + "") && zt(t, e), r[0] & /*progress*/
      128 && s !== (s = pi(
        /*p*/
        o[41].length
      ) + "") && zt(l, s);
    },
    d(o) {
      o && (ee(t), ee(n), ee(l));
    }
  };
}
function Ea(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Da(i)
  );
  return {
    c() {
      t && t.c(), e = Bi();
    },
    m(n, s) {
      t && t.m(n, s), te(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Da(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ee(e), t && t.d(n);
    }
  };
}
function Xa(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = xe(
        /*formatted_timer*/
        i[20]
      ), n = xe(t), s = xe("s");
    },
    m(l, o) {
      te(l, e, o), te(l, n, o), te(l, s, o);
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
      l && (ee(e), ee(n), ee(s));
    }
  };
}
function bm(i) {
  let e, t;
  return e = new tm({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      pc(e.$$.fragment);
    },
    m(n, s) {
      xc(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vc(e, n);
    }
  };
}
function pm(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Ya(i)
  );
  return {
    c() {
      e = Zt("div"), t = Zt("div"), r && r.c(), n = St(), s = Zt("div"), l = Zt("div"), Ht(t, "class", "progress-level-inner svelte-16nch4a"), Ht(l, "class", "progress-bar svelte-16nch4a"), Bn(l, "width", o), Ht(s, "class", "progress-bar-wrap svelte-16nch4a"), Ht(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      te(a, e, c), Nn(e, t), r && r.m(t, null), Nn(e, n), Nn(e, s), Nn(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = Ya(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Bn(l, "width", o);
    },
    i: uo,
    o: uo,
    d(a) {
      a && ee(e), r && r.d(), i[31](null);
    }
  };
}
function Ya(i) {
  let e, t = As(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Ha(Ma(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Bi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      te(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = As(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ma(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Ha(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ee(e), kc(n, s);
    }
  };
}
function La(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && wm()
  ), o = (
    /*p*/
    i[41].desc != null && qa(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Ra()
  ), a = (
    /*progress_level*/
    i[14] != null && Ia(i)
  );
  return {
    c() {
      l && l.c(), e = St(), o && o.c(), t = St(), r && r.c(), n = St(), a && a.c(), s = Bi();
    },
    m(c, f) {
      l && l.m(c, f), te(c, e, f), o && o.m(c, f), te(c, t, f), r && r.m(c, f), te(c, n, f), a && a.m(c, f), te(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = qa(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = Ra(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = Ia(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (ee(e), ee(t), ee(n), ee(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function wm(i) {
  let e;
  return {
    c() {
      e = xe(" /");
    },
    m(t, n) {
      te(t, e, n);
    },
    d(t) {
      t && ee(e);
    }
  };
}
function qa(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = xe(e);
    },
    m(n, s) {
      te(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && zt(t, e);
    },
    d(n) {
      n && ee(t);
    }
  };
}
function Ra(i) {
  let e;
  return {
    c() {
      e = xe("-");
    },
    m(t, n) {
      te(t, e, n);
    },
    d(t) {
      t && ee(e);
    }
  };
}
function Ia(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = xe(e), n = xe("%");
    },
    m(s, l) {
      te(s, t, l), te(s, n, l);
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
      s && (ee(t), ee(n));
    }
  };
}
function Ha(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && La(i)
  );
  return {
    c() {
      t && t.c(), e = Bi();
    },
    m(n, s) {
      t && t.m(n, s), te(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = La(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ee(e), t && t.d(n);
    }
  };
}
function Pa(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = wc(
    l,
    i,
    /*$$scope*/
    i[29],
    za
  );
  return {
    c() {
      e = Zt("p"), t = xe(
        /*loading_text*/
        i[9]
      ), n = St(), o && o.c(), Ht(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      te(r, e, a), Nn(e, t), te(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && zt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Sc(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Cc(
          l,
          /*$$scope*/
          r[29],
          a,
          cm
        ) : yc(
          /*$$scope*/
          r[29]
        ),
        za
      );
    },
    i(r) {
      s || (It(o, r), s = !0);
    },
    o(r) {
      Jt(o, r), s = !1;
    },
    d(r) {
      r && (ee(e), ee(n)), o && o.d(r);
    }
  };
}
function vm(i) {
  let e, t, n, s, l;
  const o = [hm, fm], r = [];
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
      e = Zt("div"), n && n.c(), Ht(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), xt(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), xt(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), xt(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), xt(
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
      te(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (ho(), Jt(r[u], 1, 1, () => {
        r[u] = null;
      }), fo()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), It(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && Ht(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && xt(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && xt(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && xt(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && xt(
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
      l || (It(n), l = !0);
    },
    o(c) {
      Jt(n), l = !1;
    },
    d(c) {
      c && ee(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var km = function(i, e, t, n) {
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
let us = [], Bl = !1;
function ym(i) {
  return km(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (us.push(e), !Bl) Bl = !0;
      else return;
      yield lm(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < us.length; s++) {
          const o = us[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Bl = !1, us = [];
      });
    }
  });
}
function Cm(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = am();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: m = !0 } = e, { show_progress: g = "full" } = e, { message: h = null } = e, { progress: b = null } = e, { variant: p = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: x = !1 } = e, { border: k = !1 } = e, { autoscroll: C } = e, W, M = !1, S = 0, y = 0, Y = null, X = null, H = 0, L = null, J, Q = null, ae = !0;
  const q = () => {
    t(0, a = t(27, Y = t(19, G = null))), t(25, S = performance.now()), t(26, y = 0), M = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, y = (performance.now() - S) / 1e3), M && V();
    });
  }
  function N() {
    t(26, y = 0), t(0, a = t(27, Y = t(19, G = null))), M && (M = !1);
  }
  om(() => {
    M && N();
  });
  let G = null;
  function R(P) {
    xa[P ? "unshift" : "push"](() => {
      Q = P, t(16, Q), t(7, b), t(14, L), t(15, J);
    });
  }
  const de = () => {
    o("clear_status");
  };
  function me(P) {
    xa[P ? "unshift" : "push"](() => {
      W = P, t(13, W);
    });
  }
  return i.$$set = (P) => {
    "i18n" in P && t(1, r = P.i18n), "eta" in P && t(0, a = P.eta), "queue_position" in P && t(2, c = P.queue_position), "queue_size" in P && t(3, f = P.queue_size), "status" in P && t(4, u = P.status), "scroll_to_output" in P && t(22, d = P.scroll_to_output), "timer" in P && t(5, m = P.timer), "show_progress" in P && t(6, g = P.show_progress), "message" in P && t(23, h = P.message), "progress" in P && t(7, b = P.progress), "variant" in P && t(8, p = P.variant), "loading_text" in P && t(9, v = P.loading_text), "absolute" in P && t(10, w = P.absolute), "translucent" in P && t(11, x = P.translucent), "border" in P && t(12, k = P.border), "autoscroll" in P && t(24, C = P.autoscroll), "$$scope" in P && t(29, l = P.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = Y), a != null && Y !== a && (t(28, X = (performance.now() - S) / 1e3 + a), t(19, G = X.toFixed(1)), t(27, Y = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, H = X === null || X <= 0 || !y ? null : Math.min(y / X, 1)), i.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, ae = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, L = b.map((P) => {
      if (P.index != null && P.length != null)
        return P.index / P.length;
      if (P.progress != null)
        return P.progress;
    })) : t(14, L = null), L ? (t(15, J = L[L.length - 1]), Q && (J === 0 ? t(16, Q.style.transition = "0", Q) : t(16, Q.style.transition = "150ms", Q))) : t(15, J = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? q() : N()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && W && d && (u === "pending" || u === "complete") && ym(W, C), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = y.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    m,
    g,
    b,
    p,
    v,
    w,
    x,
    k,
    W,
    L,
    J,
    Q,
    H,
    ae,
    G,
    n,
    o,
    d,
    h,
    C,
    S,
    y,
    Y,
    X,
    l,
    s,
    R,
    de,
    me
  ];
}
class xm extends nm {
  constructor(e) {
    super(), im(
      this,
      e,
      Cm,
      vm,
      sm,
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
const { setContext: _w, getContext: Sm } = window.__gradio__svelte__internal, zm = "WORKER_PROXY_CONTEXT_KEY";
function zc() {
  return Sm(zm);
}
function Mm(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Mc(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function Bc(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!Mm(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Bm(i) {
  if (i == null || !Bc(i))
    return i;
  const e = zc();
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
      type: Mc(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: Wm,
  assign: Ts,
  check_outros: Wc,
  compute_rest_props: Aa,
  create_slot: Bo,
  detach: nl,
  element: Dc,
  empty: Ec,
  exclude_internal_props: Dm,
  get_all_dirty_from_scope: Wo,
  get_slot_changes: Do,
  get_spread_update: Xc,
  group_outros: Yc,
  init: Em,
  insert: il,
  listen: Lc,
  prevent_default: Xm,
  safe_not_equal: Ym,
  set_attributes: Fs,
  transition_in: Qn,
  transition_out: $n,
  update_slot_base: Eo
} = window.__gradio__svelte__internal, { createEventDispatcher: Lm } = window.__gradio__svelte__internal;
function qm(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Bo(
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
    c = Ts(c, a[f]);
  return {
    c() {
      e = Dc("a"), r && r.c(), Fs(e, c);
    },
    m(f, u) {
      il(f, e, u), r && r.m(e, null), n = !0, s || (l = Lc(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Eo(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? Do(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : Wo(
          /*$$scope*/
          f[7]
        ),
        null
      ), Fs(e, c = Xc(a, [
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
      f && nl(e), r && r.d(f), s = !1, l();
    }
  };
}
function Rm(i) {
  let e, t, n, s;
  const l = [Hm, Im], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Ec();
    },
    m(a, c) {
      o[e].m(a, c), il(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Yc(), $n(o[f], 1, 1, () => {
        o[f] = null;
      }), Wc(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Qn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Qn(t), s = !0);
    },
    o(a) {
      $n(t), s = !1;
    },
    d(a) {
      a && nl(n), o[e].d(a);
    }
  };
}
function Im(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Bo(
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
    a = Ts(a, r[c]);
  return {
    c() {
      e = Dc("a"), o && o.c(), Fs(e, a);
    },
    m(c, f) {
      il(c, e, f), o && o.m(e, null), t = !0, n || (s = Lc(e, "click", Xm(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && Eo(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? Do(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Wo(
          /*$$scope*/
          c[7]
        ),
        null
      ), Fs(e, a = Xc(r, [
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
      c && nl(e), o && o.d(c), n = !1, s();
    }
  };
}
function Hm(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Bo(
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
      128) && Eo(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? Do(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Wo(
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
function Pm(i) {
  let e, t, n, s, l;
  const o = [Rm, qm], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && Bc(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Ec();
    },
    m(c, f) {
      r[t].m(c, f), il(c, s, f), l = !0;
    },
    p(c, [f]) {
      let u = t;
      t = a(c, f), t === u ? r[t].p(c, f) : (Yc(), $n(r[u], 1, 1, () => {
        r[u] = null;
      }), Wc(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Qn(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (Qn(n), l = !0);
    },
    o(c) {
      $n(n), l = !1;
    },
    d(c) {
      c && nl(s), r[t].d(c);
    }
  };
}
function Am(i, e, t) {
  const n = ["href", "download"];
  let s = Aa(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(g, h, b, p) {
    function v(w) {
      return w instanceof b ? w : new b(function(x) {
        x(w);
      });
    }
    return new (b || (b = Promise))(function(w, x) {
      function k(M) {
        try {
          W(p.next(M));
        } catch (S) {
          x(S);
        }
      }
      function C(M) {
        try {
          W(p.throw(M));
        } catch (S) {
          x(S);
        }
      }
      function W(M) {
        M.done ? w(M.value) : v(M.value).then(k, C);
      }
      W((p = p.apply(g, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Lm();
  let u = !1;
  const d = zc();
  function m() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, u = !0), d.httpRequest({
        method: "GET",
        path: h,
        headers: {},
        query_string: ""
      }).then((b) => {
        if (b.status !== 200)
          throw new Error(`Failed to get file ${h} from the Wasm worker.`);
        const p = new Blob(
          [b.body],
          {
            type: Mc(b.headers, "content-type")
          }
        ), v = URL.createObjectURL(p), w = document.createElement("a");
        w.href = v, w.download = c, w.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (g) => {
    e = Ts(Ts({}, e), Dm(g)), t(6, s = Aa(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, c = g.download), "$$scope" in g && t(7, o = g.$$scope);
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
class Tm extends Wm {
  constructor(e) {
    super(), Em(this, e, Am, Pm, Ym, { href: 0, download: 1 });
  }
}
var Fm = Object.defineProperty, Um = (i, e, t) => e in i ? Fm(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, en = (i, e, t) => (Um(i, typeof e != "symbol" ? e + "" : e, t), t), qc = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Ri = (i, e, t) => (qc(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Om = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, jm = (i, e, t, n) => (qc(i, e, "write to private field"), e.set(i, t), t), Sn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Rc(i, e) {
  return i.map(
    (t) => new Nm({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Nm {
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
class mw extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Ri(this, Sn) + t; ; ) {
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
        jm(this, Sn, t);
      },
      flush: (t) => {
        if (Ri(this, Sn) === "")
          return;
        const n = e.allowCR && Ri(this, Sn).endsWith("\r") ? Ri(this, Sn).slice(0, -1) : Ri(this, Sn);
        t.enqueue(n);
      }
    }), Om(this, Sn, "");
  }
}
Sn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Vm,
  append: rt,
  attr: Un,
  detach: Ic,
  element: On,
  init: Km,
  insert: Hc,
  noop: Ta,
  safe_not_equal: Zm,
  set_data: Us,
  set_style: Wl,
  space: _o,
  text: wi,
  toggle_class: Fa
} = window.__gradio__svelte__internal, { onMount: Jm, createEventDispatcher: Gm, onDestroy: Qm } = window.__gradio__svelte__internal;
function Ua(i) {
  let e, t, n, s, l = ji(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = On("div"), t = On("span"), n = On("div"), s = On("progress"), o = wi(l), a = _o(), c = On("span"), u = wi(f), Wl(s, "visibility", "hidden"), Wl(s, "height", "0"), Wl(s, "width", "0"), s.value = r = ji(
        /*file_to_display*/
        i[2]
      ), Un(s, "max", "100"), Un(s, "class", "svelte-cr2edf"), Un(n, "class", "progress-bar svelte-cr2edf"), Un(c, "class", "file-name svelte-cr2edf"), Un(e, "class", "file svelte-cr2edf");
    },
    m(d, m) {
      Hc(d, e, m), rt(e, t), rt(t, n), rt(n, s), rt(s, o), rt(e, a), rt(e, c), rt(c, u);
    },
    p(d, m) {
      m & /*file_to_display*/
      4 && l !== (l = ji(
        /*file_to_display*/
        d[2]
      ) + "") && Us(o, l), m & /*file_to_display*/
      4 && r !== (r = ji(
        /*file_to_display*/
        d[2]
      )) && (s.value = r), m & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && Us(u, f);
    },
    d(d) {
      d && Ic(e);
    }
  };
}
function $m(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && Ua(i)
  );
  return {
    c() {
      e = On("div"), t = On("span"), n = wi("Uploading "), l = wi(s), o = _o(), a = wi(r), c = wi("..."), f = _o(), u && u.c(), Un(t, "class", "uploading svelte-cr2edf"), Un(e, "class", "wrap svelte-cr2edf"), Fa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, m) {
      Hc(d, e, m), rt(e, t), rt(t, n), rt(t, l), rt(t, o), rt(t, a), rt(t, c), rt(e, f), u && u.m(e, null);
    },
    p(d, [m]) {
      m & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      d[0].length + "") && Us(l, s), m & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && Us(a, r), /*file_to_display*/
      d[2] ? u ? u.p(d, m) : (u = Ua(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), m & /*progress*/
      2 && Fa(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: Ta,
    o: Ta,
    d(d) {
      d && Ic(e), u && u.d();
    }
  };
}
function ji(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function e1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += ji(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function t1(i, e, t) {
  var n = this && this.__awaiter || function(h, b, p, v) {
    function w(x) {
      return x instanceof p ? x : new p(function(k) {
        k(x);
      });
    }
    return new (p || (p = Promise))(function(x, k) {
      function C(S) {
        try {
          M(v.next(S));
        } catch (y) {
          k(y);
        }
      }
      function W(S) {
        try {
          M(v.throw(S));
        } catch (y) {
          k(y);
        }
      }
      function M(S) {
        S.done ? x(S.value) : w(S.value).then(C, W);
      }
      M((v = v.apply(h, b || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, d = o.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const m = Gm();
  function g(h, b) {
    t(0, d = d.map((p) => (p.orig_name === h && (p.progress += b), p)));
  }
  return Jm(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(h.data);
        c || t(1, c = !0), b.msg === "done" ? (a == null || a.close(), m("done")) : (t(7, f = b), g(b.orig_name, b.chunk_size));
      });
    };
  })), Qm(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, s = h.upload_id), "root" in h && t(4, l = h.root), "files" in h && t(5, o = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && e1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class n1 extends Vm {
  constructor(e) {
    super(), Km(this, e, t1, $m, Zm, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: i1,
  append: Oa,
  attr: Je,
  binding_callbacks: s1,
  bubble: Yn,
  check_outros: Pc,
  create_component: l1,
  create_slot: Ac,
  destroy_component: o1,
  detach: sl,
  element: mo,
  empty: Tc,
  get_all_dirty_from_scope: Fc,
  get_slot_changes: Uc,
  group_outros: Oc,
  init: a1,
  insert: ll,
  listen: mt,
  mount_component: r1,
  prevent_default: Ln,
  run_all: c1,
  safe_not_equal: f1,
  set_style: jc,
  space: h1,
  stop_propagation: qn,
  toggle_class: He,
  transition_in: Wn,
  transition_out: ei,
  update_slot_base: Nc
} = window.__gradio__svelte__internal, { createEventDispatcher: u1, tick: d1 } = window.__gradio__svelte__internal;
function _1(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = (
    /*#slots*/
    i[26].default
  ), m = Ac(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = mo("button"), m && m.c(), t = h1(), n = mo("input"), Je(n, "aria-label", "file upload"), Je(n, "data-testid", "file-upload"), Je(n, "type", "file"), Je(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, Je(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), Je(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Je(n, "class", "svelte-1s26xmt"), Je(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Je(e, "class", "svelte-1s26xmt"), He(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), He(
        e,
        "center",
        /*center*/
        i[4]
      ), He(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), He(
        e,
        "flex",
        /*flex*/
        i[5]
      ), He(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), jc(e, "height", "100%");
    },
    m(g, h) {
      ll(g, e, h), m && m.m(e, null), Oa(e, t), Oa(e, n), i[34](n), c = !0, f || (u = [
        mt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        mt(e, "drag", qn(Ln(
          /*drag_handler*/
          i[27]
        ))),
        mt(e, "dragstart", qn(Ln(
          /*dragstart_handler*/
          i[28]
        ))),
        mt(e, "dragend", qn(Ln(
          /*dragend_handler*/
          i[29]
        ))),
        mt(e, "dragover", qn(Ln(
          /*dragover_handler*/
          i[30]
        ))),
        mt(e, "dragenter", qn(Ln(
          /*dragenter_handler*/
          i[31]
        ))),
        mt(e, "dragleave", qn(Ln(
          /*dragleave_handler*/
          i[32]
        ))),
        mt(e, "drop", qn(Ln(
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
    p(g, h) {
      m && m.p && (!c || h[0] & /*$$scope*/
      33554432) && Nc(
        m,
        d,
        g,
        /*$$scope*/
        g[25],
        c ? Uc(
          d,
          /*$$scope*/
          g[25],
          h,
          null
        ) : Fc(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!c || h[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      g[16] || void 0)) && Je(n, "accept", s), (!c || h[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = l), (!c || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "directory" || void 0)) && Je(n, "webkitdirectory", o), (!c || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && Je(n, "mozdirectory", r), (!c || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && Je(e, "tabindex", a), (!c || h[0] & /*hidden*/
      512) && He(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!c || h[0] & /*center*/
      16) && He(
        e,
        "center",
        /*center*/
        g[4]
      ), (!c || h[0] & /*boundedheight*/
      8) && He(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!c || h[0] & /*flex*/
      32) && He(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!c || h[0] & /*disable_click*/
      128) && He(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      c || (Wn(m, g), c = !0);
    },
    o(g) {
      ei(m, g), c = !1;
    },
    d(g) {
      g && sl(e), m && m.d(g), i[34](null), f = !1, c1(u);
    }
  };
}
function m1(i) {
  let e, t, n = !/*hidden*/
  i[9] && ja(i);
  return {
    c() {
      n && n.c(), e = Tc();
    },
    m(s, l) {
      n && n.m(s, l), ll(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (Oc(), ei(n, 1, 1, () => {
        n = null;
      }), Pc()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && Wn(n, 1)) : (n = ja(s), n.c(), Wn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (Wn(n), t = !0);
    },
    o(s) {
      ei(n), t = !1;
    },
    d(s) {
      s && sl(e), n && n.d(s);
    }
  };
}
function g1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Ac(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = mo("button"), r && r.c(), Je(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Je(e, "class", "svelte-1s26xmt"), He(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), He(
        e,
        "center",
        /*center*/
        i[4]
      ), He(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), He(
        e,
        "flex",
        /*flex*/
        i[5]
      ), jc(e, "height", "100%");
    },
    m(a, c) {
      ll(a, e, c), r && r.m(e, null), n = !0, s || (l = mt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Nc(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Uc(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : Fc(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Je(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && He(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && He(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && He(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && He(
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
      ei(r, a), n = !1;
    },
    d(a) {
      a && sl(e), r && r.d(a), s = !1, l();
    }
  };
}
function ja(i) {
  let e, t;
  return e = new n1({
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
      l1(e.$$.fragment);
    },
    m(n, s) {
      r1(e, n, s), t = !0;
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
      ei(e.$$.fragment, n), t = !1;
    },
    d(n) {
      o1(e, n);
    }
  };
}
function b1(i) {
  let e, t, n, s;
  const l = [g1, m1, _1], o = [];
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
      t.c(), n = Tc();
    },
    m(a, c) {
      o[e].m(a, c), ll(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Oc(), ei(o[f], 1, 1, () => {
        o[f] = null;
      }), Pc(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Wn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Wn(t), s = !0);
    },
    o(a) {
      ei(t), s = !1;
    },
    d(a) {
      a && sl(n), o[e].d(a);
    }
  };
}
function p1(i, e, t) {
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
function w1(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(B, F, se, le) {
    function D(K) {
      return K instanceof se ? K : new se(function(we) {
        we(K);
      });
    }
    return new (se || (se = Promise))(function(K, we) {
      function Ne($e) {
        try {
          qe(le.next($e));
        } catch (et) {
          we(et);
        }
      }
      function Se($e) {
        try {
          qe(le.throw($e));
        } catch (et) {
          we(et);
        }
      }
      function qe($e) {
        $e.done ? K($e.value) : D($e.value).then(Ne, Se);
      }
      qe((le = le.apply(B, F || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: m } = e, { hidden: g = !1 } = e, { format: h = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: p = null } = e, { show_progress: v = !0 } = e, { max_file_size: w = null } = e, { upload: x } = e, { stream_handler: k } = e, C, W, M;
  const S = u1(), y = ["image", "video", "audio", "text", "file"], Y = (B) => B.startsWith(".") || B.endsWith("/*") ? B : y.includes(B) ? B + "/*" : "." + B;
  function X() {
    t(20, r = !r);
  }
  function H() {
    navigator.clipboard.read().then((B) => l(this, void 0, void 0, function* () {
      for (let F = 0; F < B.length; F++) {
        const se = B[F].types.find((le) => le.startsWith("image/"));
        if (se) {
          B[F].getType(se).then((le) => l(this, void 0, void 0, function* () {
            const D = new File([le], `clipboard.${se.replace("image/", "")}`);
            yield Q([D]);
          }));
          break;
        }
      }
    }));
  }
  function L() {
    d || p && (t(2, p.value = "", p), p.click());
  }
  function J(B) {
    return l(this, void 0, void 0, function* () {
      yield d1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const F = yield x(B, m, C, w ?? 1 / 0);
        return S("load", u === "single" ? F == null ? void 0 : F[0] : F), t(1, b = !1), F || [];
      } catch (F) {
        return S("error", F.message), t(1, b = !1), [];
      }
    });
  }
  function Q(B) {
    return l(this, void 0, void 0, function* () {
      if (!B.length)
        return;
      let F = B.map((se) => new File([se], se instanceof File ? se.name : "file", { type: se.type }));
      return t(15, W = yield Rc(F)), yield J(W);
    });
  }
  function ae(B) {
    return l(this, void 0, void 0, function* () {
      const F = B.target;
      if (F.files)
        if (h != "blob")
          yield Q(Array.from(F.files));
        else {
          if (u === "single") {
            S("load", F.files[0]);
            return;
          }
          S("load", F.files);
        }
    });
  }
  function q(B) {
    return l(this, void 0, void 0, function* () {
      var F;
      if (t(20, r = !1), !(!((F = B.dataTransfer) === null || F === void 0) && F.files)) return;
      const se = Array.from(B.dataTransfer.files).filter((le) => {
        const D = "." + le.name.split(".").pop();
        return D && p1(M, D, le.type) || (D && Array.isArray(o) ? o.includes(D) : D === o) ? !0 : (S("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield Q(se);
    });
  }
  function V(B) {
    Yn.call(this, i, B);
  }
  function N(B) {
    Yn.call(this, i, B);
  }
  function G(B) {
    Yn.call(this, i, B);
  }
  function R(B) {
    Yn.call(this, i, B);
  }
  function de(B) {
    Yn.call(this, i, B);
  }
  function me(B) {
    Yn.call(this, i, B);
  }
  function P(B) {
    Yn.call(this, i, B);
  }
  function Me(B) {
    s1[B ? "unshift" : "push"](() => {
      p = B, t(2, p);
    });
  }
  return i.$$set = (B) => {
    "filetype" in B && t(0, o = B.filetype), "dragging" in B && t(20, r = B.dragging), "boundedheight" in B && t(3, a = B.boundedheight), "center" in B && t(4, c = B.center), "flex" in B && t(5, f = B.flex), "file_count" in B && t(6, u = B.file_count), "disable_click" in B && t(7, d = B.disable_click), "root" in B && t(8, m = B.root), "hidden" in B && t(9, g = B.hidden), "format" in B && t(21, h = B.format), "uploading" in B && t(1, b = B.uploading), "hidden_upload" in B && t(2, p = B.hidden_upload), "show_progress" in B && t(10, v = B.show_progress), "max_file_size" in B && t(22, w = B.max_file_size), "upload" in B && t(23, x = B.upload), "stream_handler" in B && t(11, k = B.stream_handler), "$$scope" in B && t(25, s = B.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, M = null) : typeof o == "string" ? t(16, M = Y(o)) : (t(0, o = o.map(Y)), t(16, M = o.join(", "))));
  }, [
    o,
    b,
    p,
    a,
    c,
    f,
    u,
    d,
    m,
    g,
    v,
    k,
    H,
    L,
    C,
    W,
    M,
    X,
    ae,
    q,
    r,
    h,
    w,
    x,
    Q,
    s,
    n,
    V,
    N,
    G,
    R,
    de,
    me,
    P,
    Me
  ];
}
class v1 extends i1 {
  constructor(e) {
    super(), a1(
      this,
      e,
      w1,
      b1,
      f1,
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
  SvelteComponent: k1,
  append: ds,
  attr: Dl,
  create_component: y1,
  destroy_component: C1,
  detach: x1,
  element: El,
  init: S1,
  insert: z1,
  listen: M1,
  mount_component: B1,
  noop: W1,
  safe_not_equal: D1,
  set_style: E1,
  space: X1,
  text: Y1,
  transition_in: L1,
  transition_out: q1
} = window.__gradio__svelte__internal, { createEventDispatcher: R1 } = window.__gradio__svelte__internal;
function I1(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new fc({}), {
    c() {
      e = El("button"), t = El("div"), n = El("span"), y1(s.$$.fragment), l = X1(), r = Y1(o), Dl(n, "class", "icon-wrap svelte-fjcd9c"), Dl(t, "class", "wrap svelte-fjcd9c"), Dl(e, "class", "svelte-fjcd9c"), E1(e, "height", "100%");
    },
    m(u, d) {
      z1(u, e, d), ds(e, t), ds(t, n), B1(s, n, null), ds(t, l), ds(t, r), a = !0, c || (f = M1(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: W1,
    i(u) {
      a || (L1(s.$$.fragment, u), a = !0);
    },
    o(u) {
      q1(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && x1(e), C1(s), c = !1, f();
    }
  };
}
function H1(i) {
  const e = R1();
  return [e, () => e("click")];
}
class P1 extends k1 {
  constructor(e) {
    super(), S1(this, e, H1, I1, D1, {});
  }
}
function A1() {
  return navigator.mediaDevices.enumerateDevices();
}
function T1(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Na(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (T1(l, e), l));
}
function F1(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: U1,
  action_destroyer: O1,
  add_render_callback: j1,
  append: rn,
  attr: Xe,
  binding_callbacks: N1,
  check_outros: Ki,
  create_component: Wi,
  create_in_transition: V1,
  destroy_component: Di,
  destroy_each: K1,
  detach: ct,
  element: vt,
  empty: Xo,
  ensure_array_like: Va,
  group_outros: Zi,
  init: Z1,
  insert: ft,
  listen: Os,
  mount_component: Ei,
  noop: Yo,
  run_all: J1,
  safe_not_equal: G1,
  set_data: Vc,
  set_input_value: go,
  space: $i,
  stop_propagation: Q1,
  text: Kc,
  toggle_class: _s,
  transition_in: Pe,
  transition_out: Ge
} = window.__gradio__svelte__internal, { createEventDispatcher: $1, onMount: e0 } = window.__gradio__svelte__internal;
function Ka(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function t0(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = [s0, i0], m = [];
  function g(p, v) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(i), s = m[n] = d[n](i);
  let h = !/*recording*/
  i[8] && Za(i), b = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Ja(i)
  );
  return {
    c() {
      e = vt("div"), t = vt("button"), s.c(), o = $i(), h && h.c(), r = $i(), b && b.c(), a = Xo(), Xe(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), Xe(t, "class", "svelte-8hqvb6"), Xe(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, v) {
      ft(p, e, v), rn(e, t), m[n].m(t, null), rn(e, o), h && h.m(e, null), ft(p, r, v), b && b.m(p, v), ft(p, a, v), c = !0, f || (u = Os(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(p, v) {
      let w = n;
      n = g(p), n === w ? m[n].p(p, v) : (Zi(), Ge(m[w], 1, 1, () => {
        m[w] = null;
      }), Ki(), s = m[n], s ? s.p(p, v) : (s = m[n] = d[n](p), s.c()), Pe(s, 1), s.m(t, null)), (!c || v[0] & /*mode*/
      2 && l !== (l = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && Xe(t, "aria-label", l), /*recording*/
      p[8] ? h && (Zi(), Ge(h, 1, 1, () => {
        h = null;
      }), Ki()) : h ? (h.p(p, v), v[0] & /*recording*/
      256 && Pe(h, 1)) : (h = Za(p), h.c(), Pe(h, 1), h.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? b ? (b.p(p, v), v[0] & /*options_open, selected_device*/
      1152 && Pe(b, 1)) : (b = Ja(p), b.c(), Pe(b, 1), b.m(a.parentNode, a)) : b && (Zi(), Ge(b, 1, 1, () => {
        b = null;
      }), Ki());
    },
    i(p) {
      c || (Pe(s), Pe(h), Pe(b), c = !0);
    },
    o(p) {
      Ge(s), Ge(h), Ge(b), c = !1;
    },
    d(p) {
      p && (ct(e), ct(r), ct(a)), m[n].d(), h && h.d(), b && b.d(p), f = !1, u();
    }
  };
}
function n0(i) {
  let e, t, n, s;
  return t = new P1({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = vt("div"), Wi(t.$$.fragment), Xe(e, "title", "grant webcam access");
    },
    m(l, o) {
      ft(l, e, o), Ei(t, e, null), s = !0;
    },
    p: Yo,
    i(l) {
      s || (Pe(t.$$.fragment, l), l && (n || j1(() => {
        n = V1(e, O_, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      Ge(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && ct(e), Di(t);
    }
  };
}
function i0(i) {
  let e, t, n;
  return t = new Pu({}), {
    c() {
      e = vt("div"), Wi(t.$$.fragment), Xe(e, "class", "icon svelte-8hqvb6"), Xe(e, "title", "capture photo");
    },
    m(s, l) {
      ft(s, e, l), Ei(t, e, null), n = !0;
    },
    p: Yo,
    i(s) {
      n || (Pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ge(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ct(e), Di(t);
    }
  };
}
function s0(i) {
  let e, t, n, s;
  const l = [o0, l0], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = Xo();
    },
    m(a, c) {
      o[e].m(a, c), ft(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (Zi(), Ge(o[f], 1, 1, () => {
        o[f] = null;
      }), Ki(), t = o[e], t || (t = o[e] = l[e](a), t.c()), Pe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Pe(t), s = !0);
    },
    o(a) {
      Ge(t), s = !1;
    },
    d(a) {
      a && ct(n), o[e].d(a);
    }
  };
}
function l0(i) {
  let e, t, n;
  return t = new Vu({}), {
    c() {
      e = vt("div"), Wi(t.$$.fragment), Xe(e, "class", "icon red svelte-8hqvb6"), Xe(e, "title", "start recording");
    },
    m(s, l) {
      ft(s, e, l), Ei(t, e, null), n = !0;
    },
    i(s) {
      n || (Pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ge(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ct(e), Di(t);
    }
  };
}
function o0(i) {
  let e, t, n;
  return t = new Jd({}), {
    c() {
      e = vt("div"), Wi(t.$$.fragment), Xe(e, "class", "icon red svelte-8hqvb6"), Xe(e, "title", "stop recording");
    },
    m(s, l) {
      ft(s, e, l), Ei(t, e, null), n = !0;
    },
    i(s) {
      n || (Pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ge(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ct(e), Di(t);
    }
  };
}
function Za(i) {
  let e, t, n, s, l;
  return t = new Mo({}), {
    c() {
      e = vt("button"), Wi(t.$$.fragment), Xe(e, "class", "icon svelte-8hqvb6"), Xe(e, "aria-label", "select input source");
    },
    m(o, r) {
      ft(o, e, r), Ei(t, e, null), n = !0, s || (l = Os(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: Yo,
    i(o) {
      n || (Pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ge(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && ct(e), Di(t), s = !1, l();
    }
  };
}
function Ja(i) {
  let e, t, n, s, l, o, r;
  n = new Mo({});
  function a(u, d) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? r0 : a0
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = vt("select"), t = vt("button"), Wi(n.$$.fragment), s = $i(), f.c(), Xe(t, "class", "inset-icon svelte-8hqvb6"), Xe(e, "class", "select-wrap svelte-8hqvb6"), Xe(e, "aria-label", "select source");
    },
    m(u, d) {
      ft(u, e, d), rn(e, t), Ei(n, t, null), rn(t, s), f.m(e, null), l = !0, o || (r = [
        Os(t, "click", Q1(
          /*click_handler_2*/
          i[22]
        )),
        O1(Lo.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Os(
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
      u && ct(e), Di(n), f.d(), o = !1, J1(r);
    }
  };
}
function a0(i) {
  let e, t = Va(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Ga(Ka(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Xo();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ft(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = Va(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ka(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Ga(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ct(e), K1(n, s);
    }
  };
}
function r0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = vt("option"), n = Kc(t), e.__value = "", go(e, e.__value), Xe(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      ft(s, e, l), rn(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Vc(n, t);
    },
    d(s) {
      s && ct(e);
    }
  };
}
function Ga(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = vt("option"), n = Kc(t), s = $i(), e.__value = l = /*device*/
      i[32].deviceId, go(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, Xe(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      ft(r, e, a), rn(e, n), rn(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Vc(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, go(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && ct(e);
    }
  };
}
function c0(i) {
  let e, t, n, s, l, o;
  const r = [n0, t0], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = vt("div"), t = vt("video"), n = $i(), l.c(), Xe(t, "class", "svelte-8hqvb6"), _s(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), _s(t, "hide", !/*webcam_accessed*/
      i[9]), Xe(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      ft(f, e, u), rn(e, t), i[19](t), rn(e, n), a[s].m(e, null), o = !0;
    },
    p(f, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && _s(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && _s(t, "hide", !/*webcam_accessed*/
      f[9]);
      let d = s;
      s = c(f), s === d ? a[s].p(f, u) : (Zi(), Ge(a[d], 1, 1, () => {
        a[d] = null;
      }), Ki(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), Pe(l, 1), l.m(e, null));
    },
    i(f) {
      o || (Pe(l), o = !0);
    },
    o(f) {
      Ge(l), o = !1;
    },
    d(f) {
      f && ct(e), i[19](null), a[s].d();
    }
  };
}
function Lo(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function f0(i, e, t) {
  var n = this && this.__awaiter || function(q, V, N, G) {
    function R(de) {
      return de instanceof N ? de : new N(function(me) {
        me(de);
      });
    }
    return new (N || (N = Promise))(function(de, me) {
      function P(F) {
        try {
          B(G.next(F));
        } catch (se) {
          me(se);
        }
      }
      function Me(F) {
        try {
          B(G.throw(F));
        } catch (se) {
          me(se);
        }
      }
      function B(F) {
        F.done ? de(F.value) : R(F.value).then(P, Me);
      }
      B((G = G.apply(q, V || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: m } = e, { i18n: g } = e, { upload: h } = e;
  const b = $1();
  e0(() => r = document.createElement("canvas"));
  const p = (q) => n(void 0, void 0, void 0, function* () {
    const N = q.target.value;
    yield Na(m, s, N).then((G) => n(void 0, void 0, void 0, function* () {
      C = G, t(7, o = l.find((R) => R.deviceId === N) || null), t(10, X = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        Na(m, s).then((q) => n(this, void 0, void 0, function* () {
          t(9, y = !0), t(6, l = yield A1()), C = q;
        })).then(() => F1(l)).then((q) => {
          t(6, l = q);
          const V = C.getTracks().map((N) => {
            var G;
            return (G = N.getSettings()) === null || G === void 0 ? void 0 : G.deviceId;
          })[0];
          t(7, o = V && q.find((N) => N.deviceId === V) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && b("error", g("image.no_webcam_support"));
      } catch (q) {
        if (q instanceof DOMException && q.name == "NotAllowedError")
          b("error", g("image.allow_webcam_access"));
        else
          throw q;
      }
    });
  }
  function w() {
    var q = r.getContext("2d");
    (!a || a && x) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, q.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (q.scale(-1, 1), q.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (V) => {
        b(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let x = !1, k = [], C, W, M;
  function S() {
    if (x) {
      M.stop();
      let q = new Blob(k, { type: W }), V = new FileReader();
      V.onload = function(N) {
        return n(this, void 0, void 0, function* () {
          var G;
          if (N.target) {
            let R = new File([q], "sample." + W.substring(6));
            const de = yield Rc([R]);
            let me = ((G = yield h(de, f)) === null || G === void 0 ? void 0 : G.filter(Boolean))[0];
            b("capture", me), b("stop_recording");
          }
        });
      }, V.readAsDataURL(q);
    } else {
      b("start_recording"), k = [];
      let q = ["video/webm", "video/mp4"];
      for (let V of q)
        if (MediaRecorder.isTypeSupported(V)) {
          W = V;
          break;
        }
      if (W === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      M = new MediaRecorder(C, { mimeType: W }), M.addEventListener("dataavailable", function(V) {
        k.push(V.data);
      }), M.start(200);
    }
    t(8, x = !x);
  }
  let y = !1;
  function Y() {
    u === "image" && a && t(8, x = !x), u === "image" ? w() : S(), !x && C && (C.getTracks().forEach((q) => q.stop()), t(5, s.srcObject = null, s), t(9, y = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let X = !1;
  function H(q) {
    q.preventDefault(), q.stopPropagation(), t(10, X = !1);
  }
  function L(q) {
    N1[q ? "unshift" : "push"](() => {
      s = q, t(5, s);
    });
  }
  const J = async () => v(), Q = () => t(10, X = !0), ae = () => t(10, X = !1);
  return i.$$set = (q) => {
    "streaming" in q && t(0, a = q.streaming), "pending" in q && t(15, c = q.pending), "root" in q && t(16, f = q.root), "mode" in q && t(1, u = q.mode), "mirror_webcam" in q && t(2, d = q.mirror_webcam), "include_audio" in q && t(17, m = q.include_audio), "i18n" in q && t(3, g = q.i18n), "upload" in q && t(18, h = q.upload);
  }, [
    a,
    u,
    d,
    g,
    Lo,
    s,
    l,
    o,
    x,
    y,
    X,
    p,
    v,
    Y,
    H,
    c,
    f,
    m,
    h,
    L,
    J,
    Q,
    ae
  ];
}
class h0 extends U1 {
  constructor(e) {
    super(), Z1(
      this,
      e,
      f0,
      c0,
      G1,
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
    return Lo;
  }
}
const {
  SvelteComponent: u0,
  append: wn,
  attr: U,
  detach: d0,
  init: _0,
  insert: m0,
  noop: Xl,
  safe_not_equal: g0,
  set_style: vn,
  svg_element: tn
} = window.__gradio__svelte__internal;
function b0(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = tn("svg"), t = tn("rect"), n = tn("rect"), s = tn("rect"), l = tn("rect"), o = tn("line"), r = tn("line"), a = tn("line"), c = tn("line"), U(t, "x", "2"), U(t, "y", "2"), U(t, "width", "5"), U(t, "height", "5"), U(t, "rx", "1"), U(t, "ry", "1"), U(t, "stroke-width", "2"), U(t, "fill", "none"), U(n, "x", "17"), U(n, "y", "2"), U(n, "width", "5"), U(n, "height", "5"), U(n, "rx", "1"), U(n, "ry", "1"), U(n, "stroke-width", "2"), U(n, "fill", "none"), U(s, "x", "2"), U(s, "y", "17"), U(s, "width", "5"), U(s, "height", "5"), U(s, "rx", "1"), U(s, "ry", "1"), U(s, "stroke-width", "2"), U(s, "fill", "none"), U(l, "x", "17"), U(l, "y", "17"), U(l, "width", "5"), U(l, "height", "5"), U(l, "rx", "1"), U(l, "ry", "1"), U(l, "stroke-width", "2"), U(l, "fill", "none"), U(o, "x1", "7.5"), U(o, "y1", "4.5"), U(o, "x2", "16"), U(o, "y2", "4.5"), vn(o, "stroke-width", "2px"), U(r, "x1", "7.5"), U(r, "y1", "19.5"), U(r, "x2", "16"), U(r, "y2", "19.5"), vn(r, "stroke-width", "2px"), U(a, "x1", "4.5"), U(a, "y1", "8"), U(a, "x2", "4.5"), U(a, "y2", "16"), vn(a, "stroke-width", "2px"), U(c, "x1", "19.5"), U(c, "y1", "8"), U(c, "x2", "19.5"), U(c, "y2", "16"), vn(c, "stroke-width", "2px"), U(e, "width", "100%"), U(e, "height", "100%"), U(e, "viewBox", "0 0 24 24"), U(e, "version", "1.1"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), U(e, "xml:space", "preserve"), U(e, "stroke", "currentColor"), vn(e, "fill-rule", "evenodd"), vn(e, "clip-rule", "evenodd"), vn(e, "stroke-linecap", "round"), vn(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      m0(f, e, u), wn(e, t), wn(e, n), wn(e, s), wn(e, l), wn(e, o), wn(e, r), wn(e, a), wn(e, c);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(f) {
      f && d0(e);
    }
  };
}
class p0 extends u0 {
  constructor(e) {
    super(), _0(this, e, null, b0, g0, {});
  }
}
const {
  SvelteComponent: w0,
  append: Yl,
  attr: Ut,
  detach: v0,
  init: k0,
  insert: y0,
  noop: Ll,
  safe_not_equal: C0,
  svg_element: ms
} = window.__gradio__svelte__internal;
function x0(i) {
  let e, t, n, s;
  return {
    c() {
      e = ms("svg"), t = ms("path"), n = ms("path"), s = ms("path"), Ut(t, "d", "M9 21h6"), Ut(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Ut(s, "d", "M9 17h6"), Ut(e, "xmlns", "http://www.w3.org/2000/svg"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      y0(l, e, o), Yl(e, t), Yl(e, n), Yl(e, s);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(l) {
      l && v0(e);
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
  append: M0,
  attr: Ot,
  detach: B0,
  init: W0,
  insert: D0,
  noop: ql,
  safe_not_equal: E0,
  svg_element: Qa
} = window.__gradio__svelte__internal;
function X0(i) {
  let e, t;
  return {
    c() {
      e = Qa("svg"), t = Qa("circle"), Ot(t, "cx", "12"), Ot(t, "cy", "12"), Ot(t, "r", "10"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Ot(e, "stroke-linecap", "round"), Ot(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      D0(n, e, s), M0(e, t);
    },
    p: ql,
    i: ql,
    o: ql,
    d(n) {
      n && B0(e);
    }
  };
}
let Y0 = class extends z0 {
  constructor(e) {
    super(), W0(this, e, null, X0, E0, {});
  }
};
const {
  SvelteComponent: L0,
  append: Ii,
  attr: Re,
  detach: q0,
  init: R0,
  insert: I0,
  noop: Rl,
  safe_not_equal: H0,
  svg_element: hi
} = window.__gradio__svelte__internal;
function P0(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = hi("svg"), t = hi("path"), n = hi("path"), s = hi("path"), l = hi("line"), o = hi("line"), Re(t, "d", "M3 6h18"), Re(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), Re(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), Re(l, "x1", "10"), Re(l, "y1", "11"), Re(l, "x2", "10"), Re(l, "y2", "17"), Re(o, "x1", "14"), Re(o, "y1", "11"), Re(o, "x2", "14"), Re(o, "y2", "17"), Re(e, "xmlns", "http://www.w3.org/2000/svg"), Re(e, "viewBox", "0 0 24 24"), Re(e, "fill", "none"), Re(e, "stroke", "currentColor"), Re(e, "stroke-width", "2"), Re(e, "stroke-linecap", "round"), Re(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      I0(r, e, a), Ii(e, t), Ii(e, n), Ii(e, s), Ii(e, l), Ii(e, o);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(r) {
      r && q0(e);
    }
  };
}
class A0 extends L0 {
  constructor(e) {
    super(), R0(this, e, null, P0, H0, {});
  }
}
const {
  SvelteComponent: T0,
  append: F0,
  attr: Yt,
  detach: U0,
  init: O0,
  insert: j0,
  noop: Il,
  safe_not_equal: N0,
  set_style: gs,
  svg_element: $a
} = window.__gradio__svelte__internal;
function V0(i) {
  let e, t;
  return {
    c() {
      e = $a("svg"), t = $a("path"), Yt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Yt(t, "fill", "none"), Yt(t, "stroke-width", "2"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "version", "1.1"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Yt(e, "xml:space", "preserve"), Yt(e, "stroke", "currentColor"), gs(e, "fill-rule", "evenodd"), gs(e, "clip-rule", "evenodd"), gs(e, "stroke-linecap", "round"), gs(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      j0(n, e, s), F0(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && U0(e);
    }
  };
}
class K0 extends T0 {
  constructor(e) {
    super(), O0(this, e, null, V0, N0, {});
  }
}
const {
  SvelteComponent: Z0,
  append: J0,
  attr: Lt,
  detach: G0,
  init: Q0,
  insert: $0,
  noop: Hl,
  safe_not_equal: eg,
  set_style: bs,
  svg_element: er
} = window.__gradio__svelte__internal;
function tg(i) {
  let e, t;
  return {
    c() {
      e = er("svg"), t = er("path"), Lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Lt(t, "fill", "none"), Lt(t, "stroke-width", "2"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "version", "1.1"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Lt(e, "xml:space", "preserve"), Lt(e, "stroke", "currentColor"), bs(e, "fill-rule", "evenodd"), bs(e, "clip-rule", "evenodd"), bs(e, "stroke-linecap", "round"), bs(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      $0(n, e, s), J0(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
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
  append: tr,
  attr: nn,
  detach: sg,
  init: lg,
  insert: og,
  noop: Pl,
  safe_not_equal: ag,
  set_style: ps,
  svg_element: Al
} = window.__gradio__svelte__internal;
function rg(i) {
  let e, t, n;
  return {
    c() {
      e = Al("svg"), t = Al("path"), n = Al("path"), nn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), nn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24"), nn(e, "xmlns", "http://www.w3.org/2000/svg"), nn(e, "fill", "none"), nn(e, "stroke", "currentColor"), nn(e, "stroke-width", "2"), ps(e, "fill-rule", "evenodd"), ps(e, "clip-rule", "evenodd"), ps(e, "stroke-linecap", "round"), ps(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      og(s, e, l), tr(e, t), tr(e, n);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(s) {
      s && sg(e);
    }
  };
}
class cg extends ig {
  constructor(e) {
    super(), lg(this, e, null, rg, ag, {});
  }
}
const {
  SvelteComponent: fg,
  append: hg,
  attr: kn,
  detach: ug,
  init: dg,
  insert: _g,
  noop: Tl,
  safe_not_equal: mg,
  set_style: ws,
  svg_element: nr
} = window.__gradio__svelte__internal;
function gg(i) {
  let e, t;
  return {
    c() {
      e = nr("svg"), t = nr("path"), kn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), kn(e, "width", "100%"), kn(e, "height", "100%"), kn(e, "viewBox", "0 0 24 24"), kn(e, "fill", "none"), kn(e, "stroke", "currentColor"), kn(e, "stroke-width", "2"), ws(e, "fill-rule", "evenodd"), ws(e, "clip-rule", "evenodd"), ws(e, "stroke-linecap", "round"), ws(e, "stroke-linejoin", "round"), kn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      _g(n, e, s), hg(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && ug(e);
    }
  };
}
class bg extends fg {
  constructor(e) {
    super(), dg(this, e, null, gg, mg, {});
  }
}
const {
  SvelteComponent: pg,
  append: wg,
  attr: yn,
  detach: vg,
  init: kg,
  insert: yg,
  noop: Fl,
  safe_not_equal: Cg,
  set_style: vs,
  svg_element: ir
} = window.__gradio__svelte__internal;
function xg(i) {
  let e, t;
  return {
    c() {
      e = ir("svg"), t = ir("path"), yn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), yn(e, "width", "100%"), yn(e, "height", "100%"), yn(e, "viewBox", "0 0 24 24"), yn(e, "fill", "none"), yn(e, "stroke", "currentColor"), yn(e, "stroke-width", "2"), vs(e, "fill-rule", "evenodd"), vs(e, "clip-rule", "evenodd"), vs(e, "stroke-linecap", "round"), vs(e, "stroke-linejoin", "round"), yn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      yg(n, e, s), wg(e, t);
    },
    p: Fl,
    i: Fl,
    o: Fl,
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
  append: sr,
  attr: lt,
  detach: Mg,
  init: Bg,
  insert: Wg,
  noop: Ul,
  safe_not_equal: Dg,
  set_style: ks,
  svg_element: Ol
} = window.__gradio__svelte__internal;
function Eg(i) {
  let e, t, n;
  return {
    c() {
      e = Ol("svg"), t = Ol("path"), n = Ol("path"), lt(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), lt(n, "fill", "none"), lt(n, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), ks(e, "fill-rule", "evenodd"), ks(e, "clip-rule", "evenodd"), ks(e, "stroke-linecap", "round"), ks(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Wg(s, e, l), sr(e, t), sr(e, n);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(s) {
      s && Mg(e);
    }
  };
}
class Xg extends zg {
  constructor(e) {
    super(), Bg(this, e, null, Eg, Dg, {});
  }
}
const {
  SvelteComponent: Yg,
  append: sn,
  attr: $,
  detach: Lg,
  init: qg,
  insert: Rg,
  noop: jl,
  safe_not_equal: Ig,
  svg_element: jt
} = window.__gradio__svelte__internal;
function Hg(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = jt("svg"), t = jt("path"), n = jt("circle"), s = jt("circle"), l = jt("circle"), o = jt("circle"), r = jt("circle"), a = jt("circle"), c = jt("circle"), f = jt("circle"), $(t, "fill", "none"), $(t, "stroke", "currentColor"), $(t, "stroke-width", "1.5"), $(t, "stroke-linecap", "round"), $(t, "stroke-linejoin", "round"), $(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), $(n, "cx", "7"), $(n, "cy", "7"), $(n, "r", "1.5"), $(n, "fill", "currentColor"), $(s, "cx", "15"), $(s, "cy", "9"), $(s, "r", "1.5"), $(s, "fill", "currentColor"), $(l, "cx", "21"), $(l, "cy", "5"), $(l, "r", "1.5"), $(l, "fill", "currentColor"), $(o, "cx", "25"), $(o, "cy", "13"), $(o, "r", "1.5"), $(o, "fill", "currentColor"), $(r, "cx", "23"), $(r, "cy", "21"), $(r, "r", "1.5"), $(r, "fill", "currentColor"), $(a, "cx", "15"), $(a, "cy", "19"), $(a, "r", "1.5"), $(a, "fill", "currentColor"), $(c, "cx", "9"), $(c, "cy", "23"), $(c, "r", "1.5"), $(c, "fill", "currentColor"), $(f, "cx", "5"), $(f, "cy", "15"), $(f, "r", "1.5"), $(f, "fill", "currentColor"), $(e, "xmlns", "http://www.w3.org/2000/svg"), $(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $(e, "aria-hidden", "true"), $(e, "role", "img"), $(e, "class", "iconify iconify--carbon"), $(e, "width", "100%"), $(e, "height", "100%"), $(e, "preserveAspectRatio", "xMidYMid meet"), $(e, "viewBox", "0 0 32 32");
    },
    m(u, d) {
      Rg(u, e, d), sn(e, t), sn(e, n), sn(e, s), sn(e, l), sn(e, o), sn(e, r), sn(e, a), sn(e, c), sn(e, f);
    },
    p: jl,
    i: jl,
    o: jl,
    d(u) {
      u && Lg(e);
    }
  };
}
let Pg = class extends Yg {
  constructor(e) {
    super(), qg(this, e, null, Hg, Ig, {});
  }
};
const {
  SvelteComponent: Ag,
  append: Hi,
  attr: ce,
  detach: Tg,
  init: Fg,
  insert: Ug,
  noop: Nl,
  safe_not_equal: Og,
  set_style: ys,
  svg_element: ui
} = window.__gradio__svelte__internal;
function jg(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = ui("svg"), t = ui("circle"), n = ui("circle"), s = ui("circle"), l = ui("circle"), o = ui("circle"), ce(t, "cx", "12"), ce(t, "cy", "12"), ce(t, "r", "8"), ce(t, "stroke-width", "2"), ce(t, "fill", "none"), ce(n, "cx", "12"), ce(n, "cy", "12"), ce(n, "r", "4"), ce(n, "stroke-width", "1.5"), ce(n, "fill", "none"), ce(n, "opacity", "0.5"), ce(s, "cx", "8"), ce(s, "cy", "8"), ce(s, "r", "1"), ce(s, "fill", "currentColor"), ce(s, "opacity", "0.6"), ce(l, "cx", "16"), ce(l, "cy", "8"), ce(l, "r", "1"), ce(l, "fill", "currentColor"), ce(l, "opacity", "0.6"), ce(o, "cx", "12"), ce(o, "cy", "16"), ce(o, "r", "1"), ce(o, "fill", "currentColor"), ce(o, "opacity", "0.6"), ce(e, "width", "100%"), ce(e, "height", "100%"), ce(e, "viewBox", "0 0 24 24"), ce(e, "version", "1.1"), ce(e, "xmlns", "http://www.w3.org/2000/svg"), ce(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ce(e, "xml:space", "preserve"), ce(e, "stroke", "currentColor"), ys(e, "fill-rule", "evenodd"), ys(e, "clip-rule", "evenodd"), ys(e, "stroke-linecap", "round"), ys(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Ug(r, e, a), Hi(e, t), Hi(e, n), Hi(e, s), Hi(e, l), Hi(e, o);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(r) {
      r && Tg(e);
    }
  };
}
class Ng extends Ag {
  constructor(e) {
    super(), Fg(this, e, null, jg, Og, {});
  }
}
const {
  SvelteComponent: Vg,
  append: lr,
  attr: dt,
  detach: Kg,
  init: Zg,
  insert: Jg,
  noop: Vl,
  safe_not_equal: Gg,
  set_style: Cs,
  svg_element: Kl
} = window.__gradio__svelte__internal;
function Qg(i) {
  let e, t, n;
  return {
    c() {
      e = Kl("svg"), t = Kl("path"), n = Kl("path"), dt(t, "d", "M3 7v6h6"), dt(t, "stroke-width", "2"), dt(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), dt(n, "stroke-width", "2"), dt(e, "width", "100%"), dt(e, "height", "100%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "version", "1.1"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), dt(e, "xml:space", "preserve"), dt(e, "stroke", "currentColor"), dt(e, "fill", "none"), Cs(e, "fill-rule", "evenodd"), Cs(e, "clip-rule", "evenodd"), Cs(e, "stroke-linecap", "round"), Cs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Jg(s, e, l), lr(e, t), lr(e, n);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(s) {
      s && Kg(e);
    }
  };
}
class $g extends Vg {
  constructor(e) {
    super(), Zg(this, e, null, Qg, Gg, {});
  }
}
const {
  SvelteComponent: e2,
  append: or,
  attr: _t,
  detach: t2,
  init: n2,
  insert: i2,
  noop: Zl,
  safe_not_equal: s2,
  set_style: xs,
  svg_element: Jl
} = window.__gradio__svelte__internal;
function l2(i) {
  let e, t, n;
  return {
    c() {
      e = Jl("svg"), t = Jl("path"), n = Jl("path"), _t(t, "d", "M21 7v6h-6"), _t(t, "stroke-width", "2"), _t(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), _t(n, "stroke-width", "2"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "version", "1.1"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _t(e, "xml:space", "preserve"), _t(e, "stroke", "currentColor"), _t(e, "fill", "none"), xs(e, "fill-rule", "evenodd"), xs(e, "clip-rule", "evenodd"), xs(e, "stroke-linecap", "round"), xs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      i2(s, e, l), or(e, t), or(e, n);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(s) {
      s && t2(e);
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
  append: r2,
  attr: qt,
  detach: c2,
  init: f2,
  insert: h2,
  noop: Gl,
  safe_not_equal: u2,
  set_style: ar,
  svg_element: rr
} = window.__gradio__svelte__internal;
function d2(i) {
  let e, t;
  return {
    c() {
      e = rr("svg"), t = rr("path"), qt(t, "d", "M7 10l5 5 5-5z"), qt(t, "stroke", "none"), qt(e, "width", "100%"), qt(e, "height", "100%"), qt(e, "viewBox", "0 0 24 24"), qt(e, "version", "1.1"), qt(e, "xmlns", "http://www.w3.org/2000/svg"), qt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), qt(e, "xml:space", "preserve"), qt(e, "stroke", "currentColor"), qt(e, "fill", "currentColor"), ar(e, "fill-rule", "evenodd"), ar(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      h2(n, e, s), r2(e, t);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(n) {
      n && c2(e);
    }
  };
}
class _2 extends a2 {
  constructor(e) {
    super(), f2(this, e, null, d2, u2, {});
  }
}
const {
  SvelteComponent: m2,
  append: cr,
  attr: Ql,
  bubble: fr,
  create_component: g2,
  destroy_component: b2,
  detach: Zc,
  element: hr,
  init: p2,
  insert: Jc,
  listen: $l,
  mount_component: w2,
  run_all: v2,
  safe_not_equal: k2,
  set_data: y2,
  set_input_value: ur,
  space: C2,
  text: x2,
  transition_in: S2,
  transition_out: z2
} = window.__gradio__svelte__internal, { createEventDispatcher: M2, afterUpdate: B2 } = window.__gradio__svelte__internal;
function W2(i) {
  let e;
  return {
    c() {
      e = x2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Jc(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && y2(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Zc(e);
    }
  };
}
function D2(i) {
  let e, t, n, s, l, o, r;
  return t = new ic({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [W2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = hr("label"), g2(t.$$.fragment), n = C2(), s = hr("input"), Ql(s, "type", "color"), s.disabled = /*disabled*/
      i[3], Ql(s, "class", "svelte-16l8u73"), Ql(e, "class", "block");
    },
    m(a, c) {
      Jc(a, e, c), w2(t, e, null), cr(e, n), cr(e, s), ur(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        $l(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        $l(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        $l(
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
      1 && ur(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (S2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      z2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && Zc(e), b2(t), o = !1, v2(r);
    }
  };
}
function E2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = M2();
  function f() {
    c("change", n), s || c("input");
  }
  B2(() => {
    t(5, s = !1);
  });
  function u(g) {
    fr.call(this, i, g);
  }
  function d(g) {
    fr.call(this, i, g);
  }
  function m() {
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
    d,
    m
  ];
}
class X2 extends m2 {
  constructor(e) {
    super(), p2(this, e, E2, D2, k2, {
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
  SvelteComponent: Y2,
  append: Gc,
  attr: Ce,
  bubble: L2,
  check_outros: q2,
  create_slot: Qc,
  detach: ns,
  element: ol,
  empty: R2,
  get_all_dirty_from_scope: $c,
  get_slot_changes: ef,
  group_outros: I2,
  init: H2,
  insert: is,
  listen: P2,
  safe_not_equal: A2,
  set_style: at,
  space: tf,
  src_url_equal: js,
  toggle_class: vi,
  transition_in: Ns,
  transition_out: Vs,
  update_slot_base: nf
} = window.__gradio__svelte__internal;
function T2(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && dr(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Qc(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = ol("button"), r && r.c(), t = tf(), c && c.c(), Ce(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Ce(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], vi(e, "hidden", !/*visible*/
      i[2]), at(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), at(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), at(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, u) {
      is(f, e, u), r && r.m(e, null), Gc(e, t), c && c.m(e, null), s = !0, l || (o = P2(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? r ? r.p(f, u) : (r = dr(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || u & /*$$scope*/
      2048) && nf(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? ef(
          a,
          /*$$scope*/
          f[11],
          u,
          null
        ) : $c(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && Ce(e, "class", n), (!s || u & /*elem_id*/
      1) && Ce(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || u & /*size, variant, elem_classes, visible*/
      30) && vi(e, "hidden", !/*visible*/
      f[2]), u & /*scale*/
      512 && at(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), u & /*scale*/
      512 && at(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && at(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (Ns(c, f), s = !0);
    },
    o(f) {
      Vs(c, f), s = !1;
    },
    d(f) {
      f && ns(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function F2(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && _r(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Qc(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = ol("a"), l && l.c(), t = tf(), r && r.c(), Ce(
        e,
        "href",
        /*link*/
        i[6]
      ), Ce(e, "rel", "noopener noreferrer"), Ce(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), Ce(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Ce(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), vi(e, "hidden", !/*visible*/
      i[2]), vi(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), at(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), at(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), at(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), at(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      is(a, e, c), l && l.m(e, null), Gc(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = _r(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && nf(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? ef(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : $c(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && Ce(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && Ce(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && Ce(e, "class", n), (!s || c & /*elem_id*/
      1) && Ce(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && vi(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && vi(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && at(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && at(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && at(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && at(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (Ns(r, a), s = !0);
    },
    o(a) {
      Vs(r, a), s = !1;
    },
    d(a) {
      a && ns(e), l && l.d(), r && r.d(a);
    }
  };
}
function dr(i) {
  let e, t, n;
  return {
    c() {
      e = ol("img"), Ce(e, "class", "button-icon svelte-8huxfn"), js(e.src, t = /*icon*/
      i[7].url) || Ce(e, "src", t), Ce(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      is(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !js(e.src, t = /*icon*/
      s[7].url) && Ce(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Ce(e, "alt", n);
    },
    d(s) {
      s && ns(e);
    }
  };
}
function _r(i) {
  let e, t, n;
  return {
    c() {
      e = ol("img"), Ce(e, "class", "button-icon svelte-8huxfn"), js(e.src, t = /*icon*/
      i[7].url) || Ce(e, "src", t), Ce(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      is(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !js(e.src, t = /*icon*/
      s[7].url) && Ce(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Ce(e, "alt", n);
    },
    d(s) {
      s && ns(e);
    }
  };
}
function U2(i) {
  let e, t, n, s;
  const l = [F2, T2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = R2();
    },
    m(a, c) {
      o[e].m(a, c), is(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (I2(), Vs(o[f], 1, 1, () => {
        o[f] = null;
      }), q2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Ns(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Ns(t), s = !0);
    },
    o(a) {
      Vs(t), s = !1;
    },
    d(a) {
      a && ns(n), o[e].d(a);
    }
  };
}
function O2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: m = !1 } = e, { scale: g = null } = e, { min_width: h = void 0 } = e;
  function b(p) {
    L2.call(this, i, p);
  }
  return i.$$set = (p) => {
    "elem_id" in p && t(0, l = p.elem_id), "elem_classes" in p && t(1, o = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, c = p.size), "value" in p && t(5, f = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, d = p.icon), "disabled" in p && t(8, m = p.disabled), "scale" in p && t(9, g = p.scale), "min_width" in p && t(10, h = p.min_width), "$$scope" in p && t(11, s = p.$$scope);
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
    g,
    h,
    s,
    n,
    b
  ];
}
class bo extends Y2 {
  constructor(e) {
    super(), H2(this, e, O2, U2, A2, {
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
  SvelteComponent: j2,
  add_render_callback: sf,
  append: Ss,
  attr: bt,
  binding_callbacks: mr,
  check_outros: N2,
  create_bidirectional_transition: gr,
  destroy_each: V2,
  detach: Ji,
  element: Ks,
  empty: K2,
  ensure_array_like: br,
  group_outros: Z2,
  init: J2,
  insert: Gi,
  listen: po,
  prevent_default: G2,
  run_all: Q2,
  safe_not_equal: $2,
  set_data: eb,
  set_style: di,
  space: wo,
  text: tb,
  toggle_class: Nt,
  transition_in: eo,
  transition_out: pr
} = window.__gradio__svelte__internal, { createEventDispatcher: nb } = window.__gradio__svelte__internal;
function wr(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function vr(i) {
  let e, t, n, s, l, o = br(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = kr(wr(i, o, a));
  return {
    c() {
      e = Ks("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      bt(e, "class", "options svelte-yuohum"), bt(e, "role", "listbox"), di(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), di(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), di(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Gi(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = po(e, "mousedown", G2(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = br(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = wr(a, o, f);
          r[f] ? r[f].p(u, c) : (r[f] = kr(u), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && di(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && di(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && di(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && sf(() => {
        n && (t || (t = gr(e, pa, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = gr(e, pa, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Ji(e), V2(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function kr(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = Ks("li"), t = Ks("span"), t.textContent = "✓", n = wo(), l = tb(s), o = wo(), bt(t, "class", "inner-item svelte-yuohum"), Nt(t, "hide", !/*selected_indices*/
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
      Gi(f, e, u), Ss(e, t), Ss(e, n), Ss(e, l), Ss(e, o);
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
      ][0] + "") && eb(l, s), u & /*filtered_indices*/
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
      f && Ji(e);
    }
  };
}
function ib(i) {
  let e, t, n, s, l;
  sf(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && vr(i)
  );
  return {
    c() {
      e = Ks("div"), t = wo(), o && o.c(), n = K2(), bt(e, "class", "reference");
    },
    m(r, a) {
      Gi(r, e, a), i[20](e), Gi(r, t, a), o && o.m(r, a), Gi(r, n, a), s || (l = [
        po(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        po(
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
      12 && eo(o, 1)) : (o = vr(r), o.c(), eo(o, 1), o.m(n.parentNode, n)) : o && (Z2(), pr(o, 1, 1, () => {
        o = null;
      }), N2());
    },
    i(r) {
      eo(o);
    },
    o(r) {
      pr(o);
    },
    d(r) {
      r && (Ji(e), Ji(t), Ji(n)), i[20](null), o && o.d(r), s = !1, Q2(l);
    }
  };
}
function sb(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, d, m, g, h, b, p, v, w;
  function x() {
    const { top: X, bottom: H } = h.getBoundingClientRect();
    t(16, u = X), t(17, d = w - H);
  }
  let k = null;
  function C() {
    r && (k !== null && clearTimeout(k), k = setTimeout(
      () => {
        x(), k = null;
      },
      10
    ));
  }
  const W = nb();
  function M() {
    t(11, w = window.innerHeight);
  }
  function S(X) {
    mr[X ? "unshift" : "push"](() => {
      h = X, t(6, h);
    });
  }
  const y = (X) => W("change", X);
  function Y(X) {
    mr[X ? "unshift" : "push"](() => {
      b = X, t(7, b);
    });
  }
  return i.$$set = (X) => {
    "choices" in X && t(0, l = X.choices), "filtered_indices" in X && t(1, o = X.filtered_indices), "show_options" in X && t(2, r = X.show_options), "disabled" in X && t(3, a = X.disabled), "selected_indices" in X && t(4, c = X.selected_indices), "active_index" in X && t(5, f = X.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (b && c.length > 0) {
          let H = b.querySelectorAll("li");
          for (const L of Array.from(H))
            if (L.getAttribute("data-index") === c[0].toString()) {
              t(14, n = b == null ? void 0 : b.scrollTo) === null || n === void 0 || n.call(b, 0, L.offsetTop);
              break;
            }
        }
        x();
        const X = t(15, s = h.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, m = (X == null ? void 0 : X.height) || 0), t(8, g = (X == null ? void 0 : X.width) || 0);
      }
      d > u ? (t(10, v = d), t(9, p = null)) : (t(9, p = `${d + m}px`), t(10, v = u - m));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    b,
    g,
    p,
    v,
    w,
    C,
    W,
    n,
    s,
    u,
    d,
    m,
    M,
    S,
    y,
    Y
  ];
}
class lb extends j2 {
  constructor(e) {
    super(), J2(this, e, sb, ib, $2, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function ob(i, e) {
  return (i % e + e) % e;
}
function yr(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function ab(i, e, t) {
  i("change", e), t || i("input");
}
function rb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[ob(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: cb,
  append: Rn,
  attr: gt,
  binding_callbacks: fb,
  check_outros: hb,
  create_component: vo,
  destroy_component: ko,
  detach: qo,
  element: gi,
  group_outros: ub,
  init: db,
  insert: Ro,
  listen: zn,
  mount_component: yo,
  noop: _b,
  run_all: mb,
  safe_not_equal: gb,
  set_data: bb,
  set_input_value: Cr,
  space: to,
  text: pb,
  toggle_class: _i,
  transition_in: bi,
  transition_out: Ni
} = window.__gradio__svelte__internal, { onMount: wb } = window.__gradio__svelte__internal, { createEventDispatcher: vb, afterUpdate: kb } = window.__gradio__svelte__internal;
function yb(i) {
  let e;
  return {
    c() {
      e = pb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Ro(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && bb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && qo(e);
    }
  };
}
function xr(i) {
  let e, t, n, s, l;
  return t = new Mo({}), {
    c() {
      e = gi("div"), vo(t.$$.fragment), gt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      Ro(o, e, r), yo(t, e, null), n = !0, s || (l = zn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: _b,
    i(o) {
      n || (bi(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ni(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && qo(e), ko(t), s = !1, l();
    }
  };
}
function Cb(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, g;
  t = new ic({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [yb] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && xr(i);
  return u = new lb({
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
      e = gi("div"), vo(t.$$.fragment), n = to(), s = gi("div"), l = gi("div"), o = gi("div"), r = gi("input"), c = to(), h && h.c(), f = to(), vo(u.$$.fragment), gt(r, "role", "listbox"), gt(r, "aria-controls", "dropdown-options"), gt(
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
      i[7], _i(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), gt(o, "class", "secondary-wrap svelte-1a9du2n"), gt(l, "class", "wrap-inner svelte-1a9du2n"), _i(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), gt(s, "class", "wrap svelte-1a9du2n"), gt(e, "class", "svelte-1a9du2n"), _i(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(b, p) {
      Ro(b, e, p), yo(t, e, null), Rn(e, n), Rn(e, s), Rn(s, l), Rn(l, o), Rn(o, r), Cr(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), Rn(o, c), h && h.m(o, null), Rn(s, f), yo(u, s, null), d = !0, m || (g = [
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
    p(b, p) {
      const v = {};
      p[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      b[4]), p[0] & /*info*/
      2 && (v.info = /*info*/
      b[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      16 && (v.$$scope = { dirty: p, ctx: b }), t.$set(v), (!d || p[0] & /*show_options*/
      4096) && gt(
        r,
        "aria-expanded",
        /*show_options*/
        b[12]
      ), (!d || p[0] & /*label*/
      1) && gt(
        r,
        "aria-label",
        /*label*/
        b[0]
      ), (!d || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      b[3]), (!d || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      b[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      b[9] && Cr(
        r,
        /*input_text*/
        b[9]
      ), (!d || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && _i(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? h && (ub(), Ni(h, 1, 1, () => {
        h = null;
      }), hb()) : h ? (h.p(b, p), p[0] & /*disabled*/
      8 && bi(h, 1)) : (h = xr(b), h.c(), bi(h, 1), h.m(o, null)), (!d || p[0] & /*show_options*/
      4096) && _i(
        l,
        "show_options",
        /*show_options*/
        b[12]
      );
      const w = {};
      p[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      b[12]), p[0] & /*choices*/
      4 && (w.choices = /*choices*/
      b[2]), p[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      b[10]), p[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      b[3]), p[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      b[11] === null ? [] : [
        /*selected_index*/
        b[11]
      ]), p[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      b[14]), u.$set(w), (!d || p[0] & /*container*/
      32) && _i(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      d || (bi(t.$$.fragment, b), bi(h), bi(u.$$.fragment, b), d = !0);
    },
    o(b) {
      Ni(t.$$.fragment, b), Ni(h), Ni(u.$$.fragment, b), d = !1;
    },
    d(b) {
      b && qo(e), ko(t), i[31](null), h && h.d(), ko(u), m = !1, mb(g);
    }
  };
}
function xb(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: m = !1 } = e, { filterable: g = !0 } = e, h, b = !1, p, v, w = "", x = "", k = !1, C = [], W = null, M = null, S;
  const y = vb();
  l ? (S = a.map((R) => R[1]).indexOf(l), M = S, M === -1 ? (o = l, M = null) : ([w, o] = a[M], x = w), X()) : a.length > 0 && (S = 0, M = 0, [w, l] = a[M], o = l, x = w);
  function Y() {
    t(13, p = a.map((R) => R[0])), t(26, v = a.map((R) => R[1]));
  }
  function X() {
    Y(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, M = null)) : v.includes(l) ? (t(9, w = p[v.indexOf(l)]), t(11, M = v.indexOf(l))) : m ? (t(9, w = l), t(11, M = null)) : (t(9, w = ""), t(11, M = null)), t(29, S = M);
  }
  function H(R) {
    if (t(11, M = parseInt(R.detail.target.dataset.index)), isNaN(M)) {
      t(11, M = null);
      return;
    }
    t(12, b = !1), t(14, W = null), h.blur();
  }
  function L(R) {
    t(10, C = a.map((de, me) => me)), t(12, b = !0), y("focus");
  }
  function J() {
    f || (h.focus(), t(12, b = !0));
  }
  function Q(R) {
    R.preventDefault(), f || (h.focus(), t(12, b = !b));
  }
  function ae() {
    m ? t(22, l = w) : t(9, w = p[v.indexOf(l)]), t(12, b = !1), t(14, W = null), y("blur");
  }
  function q(R) {
    t(12, [b, W] = rb(R, W, C), b, (t(14, W), t(2, a), t(25, c), t(6, m), t(9, w), t(10, C), t(8, h), t(27, x), t(11, M), t(29, S), t(28, k), t(26, v))), R.key === "Enter" && (W !== null ? (t(11, M = W), t(12, b = !1), h.blur(), t(14, W = null)) : p.includes(w) ? (t(11, M = p.indexOf(w)), t(12, b = !1), t(14, W = null), h.blur()) : m && (t(22, l = w), t(11, M = null), t(12, b = !1), t(14, W = null), h.blur()), y("enter", l));
  }
  kb(() => {
    t(23, r = !1), t(28, k = !0);
  }), wb(() => {
  });
  function V() {
    w = this.value, t(9, w), t(11, M), t(29, S), t(28, k), t(2, a), t(26, v);
  }
  function N(R) {
    fb[R ? "unshift" : "push"](() => {
      h = R, t(8, h);
    });
  }
  const G = (R) => y("key_up", { key: R.key, input_value: w });
  return i.$$set = (R) => {
    "label" in R && t(0, n = R.label), "info" in R && t(1, s = R.info), "value" in R && t(22, l = R.value), "value_is_output" in R && t(23, r = R.value_is_output), "choices" in R && t(2, a = R.choices), "disabled" in R && t(3, f = R.disabled), "show_label" in R && t(4, u = R.show_label), "container" in R && t(5, d = R.container), "allow_custom_value" in R && t(6, m = R.allow_custom_value), "filterable" in R && t(7, g = R.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && M !== S && M !== null && k && (t(9, [w, l] = a[M], w, (t(22, l), t(11, M), t(29, S), t(28, k), t(2, a), t(26, v))), t(29, S = M), y("select", {
      index: M,
      value: v[M],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (X(), ab(y, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && Y(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (m || X(), t(25, c = a), t(10, C = yr(a, w)), !m && C.length > 0 && t(14, W = C[0]), h == document.activeElement && t(12, b = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && w !== x && (t(10, C = yr(a, w)), t(27, x = w), !m && C.length > 0 && t(14, W = C[0]));
  }, [
    n,
    s,
    a,
    f,
    u,
    d,
    m,
    g,
    h,
    w,
    C,
    M,
    b,
    p,
    W,
    y,
    H,
    L,
    J,
    Q,
    ae,
    q,
    l,
    r,
    o,
    c,
    v,
    x,
    k,
    S,
    V,
    N,
    G
  ];
}
class Sb extends cb {
  constructor(e) {
    super(), db(
      this,
      e,
      xb,
      Cb,
      gb,
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
  SvelteComponent: zb,
  append: Ct,
  attr: ki,
  check_outros: Co,
  create_component: Vn,
  destroy_component: Kn,
  detach: Xi,
  element: Kt,
  group_outros: xo,
  init: Mb,
  insert: Yi,
  listen: Bb,
  mount_component: Zn,
  safe_not_equal: Wb,
  set_style: yi,
  space: Pi,
  text: Io,
  toggle_class: Sr,
  transition_in: Qe,
  transition_out: pt
} = window.__gradio__svelte__internal, { createEventDispatcher: Db } = window.__gradio__svelte__internal, { onMount: Eb, onDestroy: Xb } = window.__gradio__svelte__internal;
function zr(i) {
  let e, t, n, s, l, o, r;
  const a = [Lb, Yb], c = [];
  function f(u, d) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = Kt("div"), t = Kt("button"), s.c(), ki(t, "class", "icon svelte-d9x7u0"), ki(t, "aria-label", "Lock label detail"), Sr(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), yi(e, "margin-right", "8px");
    },
    m(u, d) {
      Yi(u, e, d), Ct(e, t), c[n].m(t, null), l = !0, o || (r = Bb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, d) {
      let m = n;
      n = f(u), n !== m && (xo(), pt(c[m], 1, 1, () => {
        c[m] = null;
      }), Co(), s = c[n], s || (s = c[n] = a[n](u), s.c()), Qe(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      4) && Sr(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      l || (Qe(s), l = !0);
    },
    o(u) {
      pt(s), l = !1;
    },
    d(u) {
      u && Xi(e), c[n].d(), o = !1, r();
    }
  };
}
function Yb(i) {
  let e, t;
  return e = new Sg({}), {
    c() {
      Vn(e.$$.fragment);
    },
    m(n, s) {
      Zn(e, n, s), t = !0;
    },
    i(n) {
      t || (Qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kn(e, n);
    }
  };
}
function Lb(i) {
  let e, t;
  return e = new bg({}), {
    c() {
      Vn(e.$$.fragment);
    },
    m(n, s) {
      Zn(e, n, s), t = !0;
    },
    i(n) {
      t || (Qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kn(e, n);
    }
  };
}
function qb(i) {
  let e;
  return {
    c() {
      e = Io("Cancel");
    },
    m(t, n) {
      Yi(t, e, n);
    },
    d(t) {
      t && Xi(e);
    }
  };
}
function Mr(i) {
  let e, t, n;
  return t = new bo({
    props: {
      variant: "stop",
      $$slots: { default: [Rb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Kt("div"), Vn(t.$$.fragment), yi(e, "margin-right", "8px");
    },
    m(s, l) {
      Yi(s, e, l), Zn(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      262144 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (Qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      pt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Xi(e), Kn(t);
    }
  };
}
function Rb(i) {
  let e;
  return {
    c() {
      e = Io("Remove");
    },
    m(t, n) {
      Yi(t, e, n);
    },
    d(t) {
      t && Xi(e);
    }
  };
}
function Ib(i) {
  let e;
  return {
    c() {
      e = Io("OK");
    },
    m(t, n) {
      Yi(t, e, n);
    },
    d(t) {
      t && Xi(e);
    }
  };
}
function Hb(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, g, h, b, p, v = !/*showRemove*/
  i[4] && zr(i);
  o = new Sb({
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
  ), c = new X2({
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
  ), d = new bo({
    props: {
      $$slots: { default: [qb] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let w = (
    /*showRemove*/
    i[4] && Mr(i)
  );
  return b = new bo({
    props: {
      variant: "primary",
      $$slots: { default: [Ib] },
      $$scope: { ctx: i }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Kt("div"), t = Kt("div"), n = Kt("span"), v && v.c(), s = Pi(), l = Kt("div"), Vn(o.$$.fragment), r = Pi(), a = Kt("div"), Vn(c.$$.fragment), f = Pi(), u = Kt("div"), Vn(d.$$.fragment), m = Pi(), w && w.c(), g = Pi(), h = Kt("div"), Vn(b.$$.fragment), yi(l, "margin-right", "10px"), yi(a, "margin-right", "40px"), yi(a, "margin-bottom", "8px"), yi(u, "margin-right", "8px"), ki(n, "class", "model-content svelte-d9x7u0"), ki(t, "class", "modal-container svelte-d9x7u0"), ki(e, "class", "modal svelte-d9x7u0"), ki(e, "id", "model-box-edit");
    },
    m(x, k) {
      Yi(x, e, k), Ct(e, t), Ct(t, n), v && v.m(n, null), Ct(n, s), Ct(n, l), Zn(o, l, null), Ct(n, r), Ct(n, a), Zn(c, a, null), Ct(n, f), Ct(n, u), Zn(d, u, null), Ct(n, m), w && w.m(n, null), Ct(n, g), Ct(n, h), Zn(b, h, null), p = !0;
    },
    p(x, [k]) {
      /*showRemove*/
      x[4] ? v && (xo(), pt(v, 1, 1, () => {
        v = null;
      }), Co()) : v ? (v.p(x, k), k & /*showRemove*/
      16 && Qe(v, 1)) : (v = zr(x), v.c(), Qe(v, 1), v.m(n, s));
      const C = {};
      k & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      x[0]), k & /*choices*/
      8 && (C.choices = /*choices*/
      x[3]), o.$set(C);
      const W = {};
      k & /*currentColor*/
      2 && (W.value = /*currentColor*/
      x[1]), c.$set(W);
      const M = {};
      k & /*$$scope*/
      262144 && (M.$$scope = { dirty: k, ctx: x }), d.$set(M), /*showRemove*/
      x[4] ? w ? (w.p(x, k), k & /*showRemove*/
      16 && Qe(w, 1)) : (w = Mr(x), w.c(), Qe(w, 1), w.m(n, g)) : w && (xo(), pt(w, 1, 1, () => {
        w = null;
      }), Co());
      const S = {};
      k & /*$$scope*/
      262144 && (S.$$scope = { dirty: k, ctx: x }), b.$set(S);
    },
    i(x) {
      p || (Qe(v), Qe(o.$$.fragment, x), Qe(c.$$.fragment, x), Qe(d.$$.fragment, x), Qe(w), Qe(b.$$.fragment, x), p = !0);
    },
    o(x) {
      pt(v), pt(o.$$.fragment, x), pt(c.$$.fragment, x), pt(d.$$.fragment, x), pt(w), pt(b.$$.fragment, x), p = !1;
    },
    d(x) {
      x && Xi(e), v && v.d(), Kn(o), Kn(c), Kn(d), w && w.d(), Kn(b);
    }
  };
}
function Pb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: f = !1 } = e;
  const u = Db();
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
    let W = C;
    Number.isInteger(W) ? (Array.isArray(o) && W < o.length && t(1, a = o[W]), Array.isArray(l) && W < l.length && t(0, s = l[W][0])) : t(0, s = W);
  }
  function g(k) {
    const { detail: C } = k;
    t(1, a = C);
  }
  function h(k) {
    m(k), d(1);
  }
  function b(k) {
    t(2, f = !f);
  }
  function p(k) {
    switch (k.key) {
      case "Enter":
        d(1);
        break;
    }
  }
  Eb(() => {
    document.addEventListener("keydown", p), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : ""));
  }), Xb(() => {
    document.removeEventListener("keydown", p);
  });
  const v = () => d(0), w = () => d(-1), x = () => d(1);
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
    g,
    h,
    b,
    n,
    o,
    r,
    v,
    w,
    x
  ];
}
class Ho extends zb {
  constructor(e) {
    super(), Mb(this, e, Pb, Hb, Wb, {
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
  SvelteComponent: Ab,
  append: ve,
  attr: _e,
  detach: lf,
  element: Te,
  empty: Tb,
  init: Fb,
  insert: of,
  listen: Vt,
  noop: Br,
  run_all: Ub,
  safe_not_equal: Ob,
  set_data: jb,
  set_input_value: zs,
  set_style: Ms,
  space: Cn,
  text: Wr,
  to_number: So
} = window.__gradio__svelte__internal, { createEventDispatcher: Nb } = window.__gradio__svelte__internal;
function Dr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, g, h, b, p, v, w, x, k, C, W, M, S, y, Y, X, H;
  return {
    c() {
      e = Te("div"), t = Te("div"), n = Te("div"), s = Te("h3"), s.textContent = "Eraser Settings", l = Cn(), o = Te("button"), o.textContent = "×", r = Cn(), a = Te("div"), c = Te("div"), f = Te("label"), f.textContent = "Eraser Size:", u = Cn(), d = Te("div"), m = Te("input"), g = Cn(), h = Te("input"), b = Cn(), p = Te("div"), v = Te("div"), w = Cn(), x = Te("span"), k = Wr(
        /*tempSize*/
        i[1]
      ), C = Wr("px"), W = Cn(), M = Te("div"), S = Te("button"), S.textContent = "Cancel", y = Cn(), Y = Te("button"), Y.textContent = "Apply", _e(s, "id", "eraser-settings-title"), _e(s, "class", "svelte-a42w5h"), _e(o, "class", "close-button svelte-a42w5h"), _e(o, "aria-label", "Close"), _e(n, "class", "modal-header svelte-a42w5h"), _e(f, "for", "eraser-size"), _e(f, "class", "svelte-a42w5h"), _e(m, "id", "eraser-size"), _e(m, "type", "range"), _e(m, "min", "1"), _e(m, "max", "50"), _e(m, "class", "size-slider svelte-a42w5h"), _e(h, "type", "number"), _e(h, "min", "1"), _e(h, "max", "50"), _e(h, "class", "size-input svelte-a42w5h"), _e(d, "class", "size-controls svelte-a42w5h"), _e(v, "class", "preview-circle svelte-a42w5h"), Ms(v, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Ms(v, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), _e(x, "class", "size-label svelte-a42w5h"), _e(p, "class", "size-preview svelte-a42w5h"), _e(c, "class", "setting-group svelte-a42w5h"), _e(a, "class", "modal-body svelte-a42w5h"), _e(S, "class", "button secondary svelte-a42w5h"), _e(Y, "class", "button primary svelte-a42w5h"), _e(M, "class", "modal-footer svelte-a42w5h"), _e(t, "class", "modal-content svelte-a42w5h"), _e(e, "class", "modal-backdrop svelte-a42w5h"), _e(e, "role", "dialog"), _e(e, "aria-modal", "true"), _e(e, "aria-labelledby", "eraser-settings-title");
    },
    m(L, J) {
      of(L, e, J), ve(e, t), ve(t, n), ve(n, s), ve(n, l), ve(n, o), ve(t, r), ve(t, a), ve(a, c), ve(c, f), ve(c, u), ve(c, d), ve(d, m), zs(
        m,
        /*tempSize*/
        i[1]
      ), ve(d, g), ve(d, h), zs(
        h,
        /*tempSize*/
        i[1]
      ), ve(c, b), ve(c, p), ve(p, v), ve(p, w), ve(p, x), ve(x, k), ve(x, C), ve(t, W), ve(t, M), ve(M, S), ve(M, y), ve(M, Y), X || (H = [
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
          h,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        Vt(
          h,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        Vt(
          S,
          "click",
          /*handleClose*/
          i[3]
        ),
        Vt(
          Y,
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
      ], X = !0);
    },
    p(L, J) {
      J & /*tempSize*/
      2 && zs(
        m,
        /*tempSize*/
        L[1]
      ), J & /*tempSize*/
      2 && So(h.value) !== /*tempSize*/
      L[1] && zs(
        h,
        /*tempSize*/
        L[1]
      ), J & /*tempSize*/
      2 && Ms(v, "width", Math.min(
        /*tempSize*/
        L[1],
        30
      ) + "px"), J & /*tempSize*/
      2 && Ms(v, "height", Math.min(
        /*tempSize*/
        L[1],
        30
      ) + "px"), J & /*tempSize*/
      2 && jb(
        k,
        /*tempSize*/
        L[1]
      );
    },
    d(L) {
      L && lf(e), X = !1, Ub(H);
    }
  };
}
function Vb(i) {
  let e, t = (
    /*visible*/
    i[0] && Dr(i)
  );
  return {
    c() {
      t && t.c(), e = Tb();
    },
    m(n, s) {
      t && t.m(n, s), of(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = Dr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: Br,
    o: Br,
    d(n) {
      n && lf(e), t && t.d(n);
    }
  };
}
function Kb(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = Nb();
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
  function u() {
    o = So(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = So(this.value), t(1, o), t(0, s), t(6, n);
  }
  const m = () => {
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
    u,
    d,
    m
  ];
}
class Zb extends Ab {
  constructor(e) {
    super(), Fb(this, e, Kb, Vb, Ob, { eraserSize: 6, visible: 0 });
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
const Ie = (i, e, t) => Math.min(Math.max(i, e), t);
class Pn {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d, m = "rgb(255, 255, 255)", g = 0.5, h = 25, b = 8, p = 2, v = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (x) => {
      if (this.isDragging) {
        let k = (x.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, C = (x.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = Ie(k, -this._xmin, W - this._xmax), C = Ie(C, -this._ymin, M - this._ymax), this._xmin += k, this._ymin += C, this._xmax += k, this._ymax += C, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (x) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(x.clientX, x.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, C = (C - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (x) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Ie(this._xmin, 0, k - this.minSize), this._ymin = Ie(this._ymin, 0, C - this.minSize), this._xmax = Ie(this._xmax, this.minSize, k), this._ymax = Ie(this._ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > C ? (this._ymin -= this._ymax - C, this._ymax = C) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (x) => {
      if (this.isResizing) {
        const k = x.clientX, C = x.clientY, W = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, M = (C - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += W, this._ymin += M, this._xmin = Ie(this._xmin, 0, this._xmax - this.minSize), this._ymin = Ie(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += W, this._ymin += M, this._xmax = Ie(this._xmax, this._xmin + this.minSize, S), this._ymin = Ie(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += W, this._ymax += M, this._xmax = Ie(this._xmax, this._xmin + this.minSize, S), this._ymax = Ie(this._ymax, this._ymin + this.minSize, y);
            break;
          case 3:
            this._xmin += W, this._ymax += M, this._xmin = Ie(this._xmin, 0, this._xmax - this.minSize), this._ymax = Ie(this._ymax, this._ymin + this.minSize, y);
            break;
          case 4:
            this._ymin += M, this._ymin = Ie(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += W, this._xmax = Ie(this._xmax, this._xmin + this.minSize, S);
            break;
          case 6:
            this._ymax += M, this._ymax = Ie(this._ymax, this._ymin + this.minSize, y);
            break;
          case 7:
            this._xmin += W, this._xmin = Ie(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = w, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = p, this.selectedThickness = v, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = m, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
const Er = (i, e, t) => Math.min(Math.max(i, e), t);
class An {
  constructor(e, t, n, s, l, o, r, a, c, f, u, d = "rgb(255, 255, 255)", m = 0.5, g = 25, h = 8, b = 2, p = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (w) => {
      if (this.isDragging) {
        const [x, k] = this.toBoxCoordinates(w.clientX, w.clientY);
        let C = x - this.offsetMouseX, W = k - this.offsetMouseY;
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = Er(C, this._radius, M - this._radius), W = Er(W, this._radius, S - this._radius), this._centerX = C, this._centerY = W, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (w) => {
      if (this.isCreating) {
        let [x, k] = this.toBoxCoordinates(w.clientX, w.clientY);
        x = (x - this.offsetMouseX) / this.canvasWindow.scale, k = (k - this.offsetMouseY) / this.canvasWindow.scale;
        const C = Math.sqrt(x * x + k * k);
        this._radius = Math.max(C, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (w) => {
      if (this.isResizing) {
        const [x, k] = this.toBoxCoordinates(w.clientX, w.clientY), C = Math.sqrt(
          Math.pow(x - this.centerX, 2) + Math.pow(k - this.centerY, 2)
        );
        this._radius = Math.max(C / this.canvasWindow.scale, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = v, this.label = a, this.isDragging = !1, this.isCreating = !1, this._centerX = c, this._centerY = f, this._radius = u, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = b, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = m;
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
    const e = this.resizeHandleSize / 2;
    this.resizeHandles = [
      {
        // Top handle
        xmin: this.centerX - e,
        ymin: this.centerY - this.radius - e,
        xmax: this.centerX + e,
        ymax: this.centerY - this.radius + e,
        cursor: "ns-resize"
      },
      {
        // Right handle
        xmin: this.centerX + this.radius - e,
        ymin: this.centerY - e,
        xmax: this.centerX + this.radius + e,
        ymax: this.centerY + e,
        cursor: "ew-resize"
      },
      {
        // Bottom handle
        xmin: this.centerX - e,
        ymin: this.centerY + this.radius - e,
        xmax: this.centerX + e,
        ymax: this.centerY + this.radius + e,
        cursor: "ns-resize"
      },
      {
        // Left handle
        xmin: this.centerX - this.radius - e,
        ymin: this.centerY - e,
        xmax: this.centerX - this.radius + e,
        ymax: this.centerY + e,
        cursor: "ew-resize"
      }
    ];
  }
  applyUserScale() {
    this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.updateHandles();
  }
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
  toBoxCoordinates(e, t) {
    return [
      (e - this.canvasWindow.offsetX) / this.canvasWindow.scale,
      (t - this.canvasWindow.offsetY) / this.canvasWindow.scale
    ];
  }
  render(e, t = !0) {
    if (!(this.radius <= 0)) {
      if (e.save(), e.translate(this.canvasWindow.offsetX, this.canvasWindow.offsetY), e.scale(this.canvasWindow.scale, this.canvasWindow.scale), e.beginPath(), e.arc(
        this.centerX / this.canvasWindow.scale,
        this.centerY / this.canvasWindow.scale,
        this.radius / this.canvasWindow.scale,
        0,
        2 * Math.PI
      ), e.fillStyle = wt(this.color, this.alpha), e.fill(), e.strokeStyle = this.color, e.lineWidth = (this.isSelected ? this.selectedThickness : this.thickness) / this.canvasWindow.scale, e.stroke(), this.isSelected) {
        e.fillStyle = this.color;
        for (const n of this.resizeHandles)
          e.fillRect(
            n.xmin / this.canvasWindow.scale,
            n.ymin / this.canvasWindow.scale,
            (n.xmax - n.xmin) / this.canvasWindow.scale,
            (n.ymax - n.ymin) / this.canvasWindow.scale
          );
      }
      t && this.label && (e.fillStyle = this.color, e.font = `${12 / this.canvasWindow.scale}px Arial`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(
        this.label,
        this.centerX / this.canvasWindow.scale,
        this.centerY / this.canvasWindow.scale
      )), e.restore();
    }
  }
  startDrag(e) {
    this.isDragging = !0;
    const [t, n] = this.toBoxCoordinates(e.clientX, e.clientY);
    this.offsetMouseX = t - this._centerX, this.offsetMouseY = n - this._centerY, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), Math.sqrt(
      Math.pow(e - this.centerX, 2) + Math.pow(t - this.centerY, 2)
    ) <= this.radius;
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
    this.isResizing = !0, this.resizingHandleIndex = e, this.onMoveStart && this.onMoveStart(), document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
  }
}
class Mn {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, d = 8, m = 2, g = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, w - this._xmax)), v = Math.max(-this._ymin, Math.min(v, x - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + p,
          y: k.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (b) => {
      if (this.isCreating) {
        const p = document.querySelector("canvas");
        if (p) {
          const v = p.getBoundingClientRect(), w = (b.clientX - v.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, x = (b.clientY - v.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, k = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(w - k.x, 2) + Math.pow(x - k.y, 2)) > 2 && (this._points.push({ x: w, y: x }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (b) => {
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
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const p = b.clientX, v = b.clientY, w = (p - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, x = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = this._xmax - this._xmin, C = this._ymax - this._ymin;
        let W = this._xmin, M = this._ymin, S = this._xmax, y = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            W = this._xmin + w, M = this._ymin + x;
            break;
          case 1:
            S = this._xmax + w, M = this._ymin + x;
            break;
          case 2:
            S = this._xmax + w, y = this._ymax + x;
            break;
          case 3:
            W = this._xmin + w, y = this._ymax + x;
            break;
          case 4:
            M = this._ymin + x;
            break;
          case 5:
            S = this._xmax + w;
            break;
          case 6:
            y = this._ymax + x;
            break;
          case 7:
            W = this._xmin + w;
            break;
        }
        const Y = (S - W) / k, X = (y - M) / C;
        this._points = this._points.map((H) => ({
          x: W + (H.x - this._xmin) * Y,
          y: M + (H.y - this._ymin) * X
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = h, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = m, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
class Rt {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, u = 25, d = 8, m = 2, g = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, w - this._xmax)), v = Math.max(-this._ymin, Math.min(v, x - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + p,
          y: k.y + v
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (b) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (b) => {
      this.isCreating && b.code === "Space" && this._points.length >= this.minPoints && (b.preventDefault(), this.finishCreating());
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const p = b.clientX, v = b.clientY, w = (p - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, x = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = this._xmax - this._xmin, C = this._ymax - this._ymin;
        let W = this._xmin, M = this._ymin, S = this._xmax, y = this._ymax;
        switch (this.resizingHandleIndex) {
          case 0:
            W = this._xmin + w, M = this._ymin + x;
            break;
          case 1:
            S = this._xmax + w, M = this._ymin + x;
            break;
          case 2:
            S = this._xmax + w, y = this._ymax + x;
            break;
          case 3:
            W = this._xmin + w, y = this._ymax + x;
            break;
          case 4:
            M = this._ymin + x;
            break;
          case 5:
            S = this._xmax + w;
            break;
          case 6:
            y = this._ymax + x;
            break;
          case 7:
            W = this._xmin + w;
            break;
        }
        const Y = (S - W) / k, X = (y - M) / C;
        this._points = this._points.map((H) => ({
          x: W + (H.x - this._xmin) * Y,
          y: M + (H.y - this._ymin) * X
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = h, this.label = a, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = m, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = u, this.color = c, this.alpha = f, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
class Jb {
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
    return e instanceof Pn ? this.eraseFromBox(e, n) : e instanceof An ? this.eraseFromCircle(e, n) : e instanceof Mn ? this.eraseFromFreehand(e, n) : e instanceof Rt ? this.eraseFromPolygon(e, n) : [e];
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
        const m = e[c - 1], g = m.x - t, h = m.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(g, h), this.maskCtx.lineTo(u, d), this.maskCtx.stroke();
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
    const t = new Rt(
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
    const t = new Rt(
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
    const t = new Rt(
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
      for (const g of m)
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
    const l = new Rt(
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
], Bs = (i, e, t) => Math.min(Math.max(i, e), t);
class Gb {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Bs(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Bs(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Bs(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Bs(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: Qb,
  add_flush_callback: Xr,
  append: A,
  attr: O,
  bind: Yr,
  binding_callbacks: zo,
  bubble: no,
  check_outros: Ci,
  create_component: Ue,
  destroy_component: Oe,
  detach: on,
  element: ne,
  group_outros: xi,
  init: $b,
  insert: an,
  is_function: ep,
  listen: Ee,
  mount_component: je,
  noop: af,
  run_all: rf,
  safe_not_equal: tp,
  set_style: Ws,
  space: ge,
  toggle_class: Fe,
  transition_in: re,
  transition_out: be
} = window.__gradio__svelte__internal, { onMount: np, onDestroy: ip, createEventDispatcher: sp } = window.__gradio__svelte__internal;
function Lr(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, g, h, b, p, v, w, x, k, C, W, M, S, y, Y, X, H, L, J, Q, ae, q, V, N, G, R, de, me, P, Me, B, F, se, le, D, K, we, Ne, Se, qe, $e, et, li, Pt, ze, kt, E, pe, Ae, ht, At, tt, Qt, _n, Ve, $t, yt;
  s = new p0({}), f = new Xg({}), b = new Y0({}), C = new Pg({}), H = new Ng({}), Q = new _2({}), R = new K0({});
  let ke = (
    /*showRemoveButton*/
    i[3] && qr(i)
  ), Be = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[20] && Rr(i);
  return le = new $g({}), qe = new o2({}), kt = new S0({}), tt = new A0({}), {
    c() {
      e = ne("span"), t = ne("div"), n = ne("button"), Ue(s.$$.fragment), l = ge(), o = ne("span"), o.textContent = "Box", r = ge(), a = ne("div"), c = ne("button"), Ue(f.$$.fragment), u = ge(), d = ne("span"), d.textContent = "Freehand", m = ge(), g = ne("div"), h = ne("button"), Ue(b.$$.fragment), p = ge(), v = ne("span"), v.textContent = "Circle", w = ge(), x = ne("div"), k = ne("button"), Ue(C.$$.fragment), W = ge(), M = ne("span"), M.textContent = "Polygon", S = ge(), y = ne("div"), Y = ne("div"), X = ne("button"), Ue(H.$$.fragment), L = ge(), J = ne("button"), Ue(Q.$$.fragment), ae = ge(), q = ne("span"), q.textContent = "Eraser", V = ge(), N = ne("div"), G = ne("button"), Ue(R.$$.fragment), de = ge(), me = ne("span"), me.textContent = "Move", P = ge(), ke && ke.c(), Me = ge(), Be && Be.c(), B = ge(), F = ne("div"), se = ne("button"), Ue(le.$$.fragment), D = ge(), K = ne("span"), K.textContent = "Undo", we = ge(), Ne = ne("div"), Se = ne("button"), Ue(qe.$$.fragment), $e = ge(), et = ne("span"), et.textContent = "Redo", li = ge(), Pt = ne("div"), ze = ne("button"), Ue(kt.$$.fragment), E = ge(), pe = ne("span"), pe.textContent = "Labels", Ae = ge(), ht = ne("div"), At = ne("button"), Ue(tt.$$.fragment), Qt = ge(), _n = ne("span"), _n.textContent = "Clear", O(n, "class", "icon tool-button svelte-mwe4hy"), O(n, "aria-label", "Create box"), Fe(
        n,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[9].creation
      ), O(o, "class", "tool-label svelte-mwe4hy"), O(t, "class", "tool-group svelte-mwe4hy"), O(c, "class", "icon tool-button svelte-mwe4hy"), O(c, "aria-label", "Freehand drawing"), Fe(
        c,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[9].freehand
      ), O(d, "class", "tool-label svelte-mwe4hy"), O(a, "class", "tool-group svelte-mwe4hy"), O(h, "class", "icon tool-button svelte-mwe4hy"), O(h, "aria-label", "Circle drawing"), Fe(
        h,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[9].circle
      ), O(v, "class", "tool-label svelte-mwe4hy"), O(g, "class", "tool-group svelte-mwe4hy"), O(k, "class", "icon tool-button svelte-mwe4hy"), O(k, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), Fe(
        k,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[9].polygon
      ), O(M, "class", "tool-label svelte-mwe4hy"), O(x, "class", "tool-group svelte-mwe4hy"), O(X, "class", "icon tool-button svelte-mwe4hy"), O(X, "aria-label", "Erase areas from shapes"), Fe(
        X,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[9].erase
      ), O(J, "class", "icon dropdown-button svelte-mwe4hy"), O(J, "aria-label", "Eraser settings"), O(Y, "class", "eraser-buttons svelte-mwe4hy"), O(q, "class", "tool-label svelte-mwe4hy"), O(y, "class", "tool-group eraser-group svelte-mwe4hy"), O(G, "class", "icon tool-button svelte-mwe4hy"), O(G, "aria-label", "Edit boxes"), Fe(
        G,
        "selected",
        /*mode*/
        i[14] === /*Mode*/
        i[9].drag
      ), O(me, "class", "tool-label svelte-mwe4hy"), O(N, "class", "tool-group svelte-mwe4hy"), O(se, "class", "icon tool-button svelte-mwe4hy"), O(se, "aria-label", "Undo (Ctrl+Z)"), Fe(
        se,
        "disabled",
        /*undoStack*/
        i[21].length === 0
      ), O(K, "class", "tool-label svelte-mwe4hy"), O(F, "class", "tool-group svelte-mwe4hy"), O(Se, "class", "icon tool-button svelte-mwe4hy"), O(Se, "aria-label", "Redo (Ctrl+Y)"), Fe(
        Se,
        "disabled",
        /*redoStack*/
        i[10].length === 0
      ), O(et, "class", "tool-label svelte-mwe4hy"), O(Ne, "class", "tool-group svelte-mwe4hy"), O(ze, "class", "icon tool-button svelte-mwe4hy"), O(ze, "aria-label", "Show/Hide labels"), Fe(
        ze,
        "selected",
        /*showLabels*/
        i[11]
      ), O(pe, "class", "tool-label svelte-mwe4hy"), O(Pt, "class", "tool-group svelte-mwe4hy"), O(At, "class", "icon tool-button svelte-mwe4hy"), O(At, "aria-label", "Clear Shapes"), O(_n, "class", "tool-label svelte-mwe4hy"), O(ht, "class", "tool-group svelte-mwe4hy"), O(e, "class", "canvas-control svelte-mwe4hy");
    },
    m(Z, Ye) {
      an(Z, e, Ye), A(e, t), A(t, n), je(s, n, null), A(t, l), A(t, o), A(e, r), A(e, a), A(a, c), je(f, c, null), A(a, u), A(a, d), A(e, m), A(e, g), A(g, h), je(b, h, null), A(g, p), A(g, v), A(e, w), A(e, x), A(x, k), je(C, k, null), A(x, W), A(x, M), A(e, S), A(e, y), A(y, Y), A(Y, X), je(H, X, null), A(Y, L), A(Y, J), je(Q, J, null), A(y, ae), A(y, q), A(e, V), A(e, N), A(N, G), je(R, G, null), A(N, de), A(N, me), A(e, P), ke && ke.m(e, null), A(e, Me), Be && Be.m(e, null), A(e, B), A(e, F), A(F, se), je(le, se, null), A(F, D), A(F, K), A(e, we), A(e, Ne), A(Ne, Se), je(qe, Se, null), A(Ne, $e), A(Ne, et), A(e, li), A(e, Pt), A(Pt, ze), je(kt, ze, null), A(Pt, E), A(Pt, pe), A(e, Ae), A(e, ht), A(ht, At), je(tt, At, null), A(ht, Qt), A(ht, _n), Ve = !0, $t || (yt = [
        Ee(
          n,
          "click",
          /*click_handler*/
          i[55]
        ),
        Ee(
          c,
          "click",
          /*click_handler_1*/
          i[56]
        ),
        Ee(
          h,
          "click",
          /*click_handler_2*/
          i[57]
        ),
        Ee(
          k,
          "click",
          /*click_handler_3*/
          i[58]
        ),
        Ee(
          X,
          "click",
          /*click_handler_4*/
          i[59]
        ),
        Ee(
          J,
          "click",
          /*openEraserSettings*/
          i[29]
        ),
        Ee(
          G,
          "click",
          /*click_handler_5*/
          i[60]
        ),
        Ee(
          se,
          "click",
          /*click_handler_8*/
          i[63]
        ),
        Ee(
          Se,
          "click",
          /*click_handler_9*/
          i[64]
        ),
        Ee(
          ze,
          "click",
          /*click_handler_10*/
          i[65]
        ),
        Ee(
          At,
          "click",
          /*click_handler_11*/
          i[66]
        )
      ], $t = !0);
    },
    p(Z, Ye) {
      (!Ve || Ye[0] & /*mode, Mode*/
      16896) && Fe(
        n,
        "selected",
        /*mode*/
        Z[14] === /*Mode*/
        Z[9].creation
      ), (!Ve || Ye[0] & /*mode, Mode*/
      16896) && Fe(
        c,
        "selected",
        /*mode*/
        Z[14] === /*Mode*/
        Z[9].freehand
      ), (!Ve || Ye[0] & /*mode, Mode*/
      16896) && Fe(
        h,
        "selected",
        /*mode*/
        Z[14] === /*Mode*/
        Z[9].circle
      ), (!Ve || Ye[0] & /*mode, Mode*/
      16896) && Fe(
        k,
        "selected",
        /*mode*/
        Z[14] === /*Mode*/
        Z[9].polygon
      ), (!Ve || Ye[0] & /*mode, Mode*/
      16896) && Fe(
        X,
        "selected",
        /*mode*/
        Z[14] === /*Mode*/
        Z[9].erase
      ), (!Ve || Ye[0] & /*mode, Mode*/
      16896) && Fe(
        G,
        "selected",
        /*mode*/
        Z[14] === /*Mode*/
        Z[9].drag
      ), /*showRemoveButton*/
      Z[3] ? ke ? (ke.p(Z, Ye), Ye[0] & /*showRemoveButton*/
      8 && re(ke, 1)) : (ke = qr(Z), ke.c(), re(ke, 1), ke.m(e, Me)) : ke && (xi(), be(ke, 1, 1, () => {
        ke = null;
      }), Ci()), !/*disableEditBoxes*/
      Z[5] && /*labelDetailLock*/
      Z[20] ? Be ? (Be.p(Z, Ye), Ye[0] & /*disableEditBoxes, labelDetailLock*/
      1048608 && re(Be, 1)) : (Be = Rr(Z), Be.c(), re(Be, 1), Be.m(e, B)) : Be && (xi(), be(Be, 1, 1, () => {
        Be = null;
      }), Ci()), (!Ve || Ye[0] & /*redoStack*/
      1024) && Fe(
        Se,
        "disabled",
        /*redoStack*/
        Z[10].length === 0
      ), (!Ve || Ye[0] & /*showLabels*/
      2048) && Fe(
        ze,
        "selected",
        /*showLabels*/
        Z[11]
      );
    },
    i(Z) {
      Ve || (re(s.$$.fragment, Z), re(f.$$.fragment, Z), re(b.$$.fragment, Z), re(C.$$.fragment, Z), re(H.$$.fragment, Z), re(Q.$$.fragment, Z), re(R.$$.fragment, Z), re(ke), re(Be), re(le.$$.fragment, Z), re(qe.$$.fragment, Z), re(kt.$$.fragment, Z), re(tt.$$.fragment, Z), Ve = !0);
    },
    o(Z) {
      be(s.$$.fragment, Z), be(f.$$.fragment, Z), be(b.$$.fragment, Z), be(C.$$.fragment, Z), be(H.$$.fragment, Z), be(Q.$$.fragment, Z), be(R.$$.fragment, Z), be(ke), be(Be), be(le.$$.fragment, Z), be(qe.$$.fragment, Z), be(kt.$$.fragment, Z), be(tt.$$.fragment, Z), Ve = !1;
    },
    d(Z) {
      Z && on(e), Oe(s), Oe(f), Oe(b), Oe(C), Oe(H), Oe(Q), Oe(R), ke && ke.d(), Be && Be.d(), Oe(le), Oe(qe), Oe(kt), Oe(tt), $t = !1, rf(yt);
    }
  };
}
function qr(i) {
  let e, t, n, s, l, o, r, a;
  return n = new ng({}), {
    c() {
      e = ne("div"), t = ne("button"), Ue(n.$$.fragment), s = ge(), l = ne("span"), l.textContent = "Delete", O(t, "class", "icon tool-button svelte-mwe4hy"), O(t, "aria-label", "Remove boxes"), O(l, "class", "tool-label svelte-mwe4hy"), O(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      an(c, e, f), A(e, t), je(n, t, null), A(e, s), A(e, l), o = !0, r || (a = Ee(
        t,
        "click",
        /*click_handler_6*/
        i[61]
      ), r = !0);
    },
    p: af,
    i(c) {
      o || (re(n.$$.fragment, c), o = !0);
    },
    o(c) {
      be(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && on(e), Oe(n), r = !1, a();
    }
  };
}
function Rr(i) {
  let e, t, n, s, l, o, r, a;
  return n = new cg({}), {
    c() {
      e = ne("div"), t = ne("button"), Ue(n.$$.fragment), s = ge(), l = ne("span"), l.textContent = "Label", O(t, "class", "icon tool-button svelte-mwe4hy"), O(t, "aria-label", "Edit label"), O(l, "class", "tool-label svelte-mwe4hy"), O(e, "class", "tool-group svelte-mwe4hy");
    },
    m(c, f) {
      an(c, e, f), A(e, t), je(n, t, null), A(e, s), A(e, l), o = !0, r || (a = Ee(
        t,
        "click",
        /*click_handler_7*/
        i[62]
      ), r = !0);
    },
    p: af,
    i(c) {
      o || (re(n.$$.fragment, c), o = !0);
    },
    o(c) {
      be(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && on(e), Oe(n), r = !1, a();
    }
  };
}
function Ir(i) {
  let e, t;
  return e = new Ho({
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
        i[0].boxes.length ? ti(
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
    i[39]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[67]
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
      n[0].boxes.length ? ti(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[13]
        ].color
      ) : ""), e.$set(l);
    },
    i(n) {
      t || (re(e.$$.fragment, n), t = !0);
    },
    o(n) {
      be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function Hr(i) {
  let e, t;
  return e = new Ho({
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
        i[0].boxes.length ? ti(
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
    i[40]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
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
      n[0].boxes.length ? ti(
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
      t || (re(e.$$.fragment, n), t = !0);
    },
    o(n) {
      be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function Pr(i) {
  let e, t;
  return e = new Ho({
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
        i[0].boxes.length ? ti(
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
    i[41]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
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
      n[0].boxes.length ? ti(
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
      t || (re(e.$$.fragment, n), t = !0);
    },
    o(n) {
      be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oe(e, n);
    }
  };
}
function lp(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, g = (
    /*interactive*/
    i[4] && Lr(i)
  ), h = (
    /*editModalVisible*/
    i[15] && Ir(i)
  ), b = (
    /*newModalVisible*/
    i[16] && Hr(i)
  ), p = (
    /*editDefaultLabelVisible*/
    i[17] && Pr(i)
  );
  function v(k) {
    i[70](k);
  }
  function w(k) {
    i[71](k);
  }
  let x = {};
  return (
    /*eraserSettingsVisible*/
    i[18] !== void 0 && (x.visible = /*eraserSettingsVisible*/
    i[18]), /*eraserSize*/
    i[19] !== void 0 && (x.eraserSize = /*eraserSize*/
    i[19]), a = new Zb({ props: x }), zo.push(() => Yr(a, "visible", v)), zo.push(() => Yr(a, "eraserSize", w)), a.$on(
      "change",
      /*handleEraserSettingsChange*/
      i[30]
    ), a.$on(
      "close",
      /*handleEraserSettingsClose*/
      i[31]
    ), {
      c() {
        e = ne("div"), t = ne("canvas"), n = ge(), g && g.c(), s = ge(), h && h.c(), l = ge(), b && b.c(), o = ge(), p && p.c(), r = ge(), Ue(a.$$.fragment), O(t, "tabindex", "0"), Ws(
          t,
          "height",
          /*height*/
          i[6]
        ), Ws(
          t,
          "width",
          /*width*/
          i[7]
        ), O(t, "class", "canvas-annotator svelte-mwe4hy"), O(e, "class", "canvas-container svelte-mwe4hy"), O(e, "tabindex", "-1");
      },
      m(k, C) {
        an(k, e, C), A(e, t), i[54](t), an(k, n, C), g && g.m(k, C), an(k, s, C), h && h.m(k, C), an(k, l, C), b && b.m(k, C), an(k, o, C), p && p.m(k, C), an(k, r, C), je(a, k, C), u = !0, d || (m = [
          Ee(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[23]
          ),
          Ee(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[24]
          ),
          Ee(t, "pointermove", function() {
            ep(
              /*handlesCursor*/
              i[8] ? (
                /*handlePointerMove*/
                i[25]
              ) : null
            ) && /*handlesCursor*/
            (i[8] ? (
              /*handlePointerMove*/
              i[25]
            ) : null).apply(this, arguments);
          }),
          Ee(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[38]
          ),
          Ee(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[26]
          ),
          Ee(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[44]
          ),
          Ee(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[45]
          )
        ], d = !0);
      },
      p(k, C) {
        i = k, (!u || C[0] & /*height*/
        64) && Ws(
          t,
          "height",
          /*height*/
          i[6]
        ), (!u || C[0] & /*width*/
        128) && Ws(
          t,
          "width",
          /*width*/
          i[7]
        ), /*interactive*/
        i[4] ? g ? (g.p(i, C), C[0] & /*interactive*/
        16 && re(g, 1)) : (g = Lr(i), g.c(), re(g, 1), g.m(s.parentNode, s)) : g && (xi(), be(g, 1, 1, () => {
          g = null;
        }), Ci()), /*editModalVisible*/
        i[15] ? h ? (h.p(i, C), C[0] & /*editModalVisible*/
        32768 && re(h, 1)) : (h = Ir(i), h.c(), re(h, 1), h.m(l.parentNode, l)) : h && (xi(), be(h, 1, 1, () => {
          h = null;
        }), Ci()), /*newModalVisible*/
        i[16] ? b ? (b.p(i, C), C[0] & /*newModalVisible*/
        65536 && re(b, 1)) : (b = Hr(i), b.c(), re(b, 1), b.m(o.parentNode, o)) : b && (xi(), be(b, 1, 1, () => {
          b = null;
        }), Ci()), /*editDefaultLabelVisible*/
        i[17] ? p ? (p.p(i, C), C[0] & /*editDefaultLabelVisible*/
        131072 && re(p, 1)) : (p = Pr(i), p.c(), re(p, 1), p.m(r.parentNode, r)) : p && (xi(), be(p, 1, 1, () => {
          p = null;
        }), Ci());
        const W = {};
        !c && C[0] & /*eraserSettingsVisible*/
        262144 && (c = !0, W.visible = /*eraserSettingsVisible*/
        i[18], Xr(() => c = !1)), !f && C[0] & /*eraserSize*/
        524288 && (f = !0, W.eraserSize = /*eraserSize*/
        i[19], Xr(() => f = !1)), a.$set(W);
      },
      i(k) {
        u || (re(g), re(h), re(b), re(p), re(a.$$.fragment, k), u = !0);
      },
      o(k) {
        be(g), be(h), be(b), be(p), be(a.$$.fragment, k), u = !1;
      },
      d(k) {
        k && (on(e), on(n), on(s), on(l), on(o), on(r)), i[54](null), g && g.d(k), h && h.d(k), b && b.d(k), p && p.d(k), Oe(a, k), d = !1, rf(m);
      }
    }
  );
}
const op = 50;
function In(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function ti(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function ap(i, e, t) {
  var n;
  (function(_) {
    _[_.creation = 0] = "creation", _[_.drag = 1] = "drag", _[_.freehand = 2] = "freehand", _[_.circle = 3] = "circle", _[_.polygon = 4] = "polygon", _[_.erase = 5] = "erase";
  })(n || (n = {}));
  let s = [], l = [], o = !0, r = !0, { imageUrl: a = null } = e, { interactive: c } = e, { boxAlpha: f = 0.5 } = e, { boxMinSize: u = 10 } = e, { handleSize: d } = e, { boxThickness: m } = e, { boxSelectedThickness: g } = e, { value: h } = e, { choices: b = [] } = e, { choicesColors: p = [] } = e, { disableEditBoxes: v = !1 } = e, { height: w = "100%" } = e, { width: x = "100%" } = e, { singleBox: k = !1 } = e, { showRemoveButton: C = null } = e, { handlesCursor: W = !0 } = e, { useDefaultLabel: M = !1 } = e;
  C === null && (C = v);
  let S, y, Y = null, X = -1, H = n.drag, L = new Gb(K), J;
  h !== null && h.boxes.length == 0 && (H = n.creation);
  let Q = 0, ae = 0, q = 0, V = 0, N = 1, G = 0, R = 0, de = !1, me = !1, P = !1, Me = !1, B = null, F = 10, se = M, le = { label: "", color: "" };
  const D = sp();
  function K() {
    if (y) {
      if (y.clearRect(0, 0, S.width, S.height), y.save(), y.translate(L.offsetX, L.offsetY), y.scale(L.scale, L.scale), Y !== null) {
        switch (h.orientation) {
          case 0:
            y.drawImage(Y, 0, 0, G, R);
            break;
          case 1:
            y.translate(G, 0), y.rotate(Math.PI / 2), y.drawImage(Y, 0, 0, R, G);
            break;
          case 2:
            y.translate(G, R), y.rotate(Math.PI), y.drawImage(Y, 0, 0, G, R);
            break;
          case 3:
            y.translate(0, R), y.rotate(-Math.PI / 2), y.drawImage(Y, 0, 0, R, G);
            break;
        }
        y.restore();
      }
      for (const _ of h.boxes.slice().reverse())
        _.render(y, r);
      H === n.erase && J && J.renderErasePath(y);
    }
  }
  function we(_) {
    t(13, X = _), h.boxes.forEach((z) => {
      z.setSelected(!1);
    }), _ >= 0 && _ < h.boxes.length && h.boxes[_].setSelected(!0), K();
  }
  function Ne(_) {
    c && (o = !1, _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId), H === n.creation ? Qt(_) : H === n.freehand ? ht(_) : H === n.circle ? _n(_) : H === n.polygon ? At(_) : H === n.erase ? Ve(_) : H === n.drag && Se(_));
  }
  function Se(_) {
    console.log("clickBox function called, mode:", H === n.drag ? "drag" : "creation");
    const z = S.getBoundingClientRect(), I = _.clientX - z.left, T = _.clientY - z.top;
    let j = !1;
    for (const [ie, oe] of h.boxes.entries()) {
      const Bt = oe.indexOfPointInsideHandle(I, T);
      if (Bt >= 0) {
        j = !0, we(ie);
        let Xn = null;
        oe.onMoveStart = () => {
          Xn = pe(oe), console.log("Resize started, captured state:", Xn);
        }, oe.onMoveEnd = () => {
          if (Xn) {
            const Vo = pe(oe);
            console.log("Resize ended, final state:", Vo), ze({
              type: "edit_shape",
              shapeIndex: ie,
              oldShapeData: Xn,
              shapeData: Vo
            }), Xn = null;
          }
        }, oe.startResize(Bt, _);
        return;
      }
    }
    for (const [ie, oe] of h.boxes.entries())
      if (oe.isPointInsideBox(I, T)) {
        j = !0, we(ie);
        let Bt = null;
        oe.onMoveStart = () => {
          Bt = pe(oe);
        }, oe.onMoveEnd = () => {
          Bt && (ze({
            type: "edit_shape",
            shapeIndex: ie,
            oldShapeData: Bt,
            shapeData: pe(oe)
          }), Bt = null);
        }, oe.startDrag(_);
        return;
      }
    if (!j) {
      if (k || we(-1), console.log("No box selected, checking if we should dispatch select event"), H === n.drag) {
        console.log("Mode is drag, calculating coordinates");
        const ie = (I - L.offsetX) / N / L.scale, oe = (T - L.offsetY) / N / L.scale;
        console.log("Click detected in drag mode:", {
          mouseX: I,
          mouseY: T,
          imageX: ie,
          imageY: oe,
          scaleFactor: N,
          "canvasWindow.scale": L.scale,
          "canvasWindow.offsetX": L.offsetX,
          "canvasWindow.offsetY": L.offsetY
        }), Y && ie >= 0 && ie <= Y.naturalWidth && oe >= 0 && oe <= Y.naturalHeight ? (console.log("Dispatching select event with coordinates:", [Math.round(ie), Math.round(oe)]), D("select", {
          coordinates: [Math.round(ie), Math.round(oe)]
        })) : console.log("Click outside image bounds or no image loaded", {
          hasImage: !!Y,
          imageX: ie,
          imageY: oe,
          naturalWidth: Y == null ? void 0 : Y.naturalWidth,
          naturalHeight: Y == null ? void 0 : Y.naturalHeight
        });
      } else
        console.log("Mode is not drag, mode:", H);
      L.startDrag(_);
    }
  }
  function qe(_) {
    H === n.erase && J && yt(), D("change");
  }
  function $e(_) {
    if (h === null)
      return;
    if (H === n.erase && J) {
      $t(_);
      return;
    }
    if (H !== n.drag)
      return;
    const z = S.getBoundingClientRect(), I = _.clientX - z.left, T = _.clientY - z.top;
    for (const [j, ie] of h.boxes.entries()) {
      const oe = ie.indexOfPointInsideHandle(I, T);
      if (oe >= 0) {
        t(12, S.style.cursor = ie.resizeHandles[oe].cursor, S);
        return;
      }
    }
    t(12, S.style.cursor = "default", S);
  }
  function et(_) {
    if (c) {
      if (_.ctrlKey) {
        switch (_.key.toLowerCase()) {
          case "z":
            _.shiftKey ? E() : kt(), _.preventDefault();
            break;
          case "y":
            E(), _.preventDefault();
            break;
        }
        return;
      }
      switch (_.key) {
        case "Delete":
          En();
          break;
        case " ":
          H === n.polygon && B && B.isCreating && (_.preventDefault(), B._points.length >= B.minPoints && B.finishCreating());
          break;
      }
    }
  }
  function li(_) {
    _.preventDefault();
    const z = 1 / (1 + _.deltaY / 1e3 * 0.5), I = parseFloat((L.scale * z).toFixed(2)), T = I < 1 ? 1 : I, j = S.getBoundingClientRect(), ie = _.clientX - j.left, oe = _.clientY - j.top, Bt = (ie - L.offsetX) / L.scale, Xn = (oe - L.offsetY) / L.scale;
    L.offsetX = ie - Bt * T, L.offsetY = oe - Xn * T, L.scale = T, K();
  }
  function Pt() {
    L.scale = 1, L.offsetX = 0, L.offsetY = 0, K();
  }
  function ze(_) {
    if (o) {
      console.log("Skipping undo action during initial state:", _);
      return;
    }
    t(10, l = []), s.push(Object.assign(Object.assign({}, _), { timestamp: Date.now() })), s.length > op && s.shift(), console.log("Added undo action:", _, "Stack size:", s.length);
  }
  function kt() {
    if (s.length === 0) {
      console.log("Cannot undo: stack is empty");
      return;
    }
    const _ = s.pop();
    if (_) {
      switch (_.type) {
        case "create_shape":
          if (_.shapeIndex !== void 0 && _.shapeIndex < h.boxes.length) {
            const z = h.boxes.splice(_.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: pe(z),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const z = Ae(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, z), l.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (B && _.pointData) {
            if (B._points.pop(), B._points.length === 0) {
              const z = h.boxes.indexOf(B);
              z >= 0 && h.boxes.splice(z, 1), B = null;
            } else
              B.updateBoundingBox();
            l.push({
              type: "polygon_point",
              pointData: _.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.oldShapeData && _.shapeIndex < h.boxes.length) {
            const z = pe(h.boxes[_.shapeIndex]);
            Ae(_.oldShapeData, h.boxes[_.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: z,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", _);
            const z = h.boxes.map((I) => pe(I));
            t(0, h.boxes = [], h);
            for (const I of _.oldShapeData) {
              const T = Ae(I);
              T && h.boxes.push(T);
            }
            console.log("Restored shapes:", h.boxes.length), l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: z,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      we(-1), K(), D("change");
    }
  }
  function E() {
    if (l.length === 0) return;
    const _ = l.pop();
    if (_) {
      switch (_.type) {
        case "create_shape":
          if (_.shapeIndex !== void 0 && _.shapeIndex < h.boxes.length) {
            const z = h.boxes.splice(_.shapeIndex, 1)[0];
            s.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: pe(z),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const z = Ae(_.shapeData);
            h.boxes.splice(_.shapeIndex, 0, z), s.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          _.pointData && (B ? (B._points.push(_.pointData), B._points.length === 1 && !h.boxes.includes(B) && (k ? t(0, h.boxes = [B], h) : t(0, h.boxes = [B, ...h.boxes], h)), B.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), s.push({
            type: "polygon_point",
            pointData: _.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.shapeData && _.shapeIndex < h.boxes.length) {
            const z = pe(h.boxes[_.shapeIndex]);
            Ae(_.shapeData, h.boxes[_.shapeIndex]), s.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: z,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.shapeData) {
            const z = h.boxes.map((I) => pe(I));
            t(0, h.boxes = [], h);
            for (const I of _.shapeData) {
              const T = Ae(I);
              T && h.boxes.push(T);
            }
            s.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: z,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      we(-1), K(), D("change");
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
    } : _ instanceof Rt ? {
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
  function Ae(_, z) {
    if (!_) return null;
    if (z)
      return z.label = _.label, z.color = _.color, z instanceof Pn ? (z._xmin = _.xmin, z._ymin = _.ymin, z._xmax = _.xmax, z._ymax = _.ymax, z.applyUserScale()) : z instanceof An ? (z._centerX = _.centerX, z._centerY = _.centerY, z._radius = _.radius, z.applyUserScale()) : (z.xmin = _.xmin, z.ymin = _.ymin, z.xmax = _.xmax, z.ymax = _.ymax), (z instanceof Mn || z instanceof Rt) && _.points && (z._points = [..._.points], z.updateBoundingBox()), z;
    switch (_.type) {
      case "freehand":
        const I = new Mn(K, Mt, L, Q, ae, q, V, _.label, _.color, f, u, d, m, g);
        return I._points = [..._.points], I.updateBoundingBox(), I;
      case "polygon":
        const T = new Rt(K, Mt, L, Q, ae, q, V, _.label, _.color, f, u, d, m, g);
        return T._points = [..._.points], T.updateBoundingBox(), T;
      case "circle":
        return new An(K, Mt, L, Q, ae, q, V, _.label, _.centerX, _.centerY, _.radius, _.color, f, u, d, m, g);
      case "box":
        return new Pn(K, Mt, L, Q, ae, q, V, _.label, _.xmin, _.ymin, _.xmax, _.ymax, _.color, f, u, d, m, g);
    }
    return null;
  }
  function ht(_) {
    const z = S.getBoundingClientRect();
    let I;
    p.length > 0 ? I = In(p[0]) : k ? h.boxes.length > 0 ? I = h.boxes[0].color : I = Ze[0] : I = Ze[h.boxes.length % Ze.length];
    let T = new Mn(K, Mt, L, Q, ae, q, V, "", I, f, u, d, m, g);
    T.startCreating(_, z.left, z.top), k ? t(0, h.boxes = [T], h) : t(0, h.boxes = [T, ...h.boxes], h), ze({ type: "create_shape", shapeIndex: 0 }), we(0), K(), D("change");
  }
  function At(_) {
    B && (!B._points || B._points.length === 0 || !h.boxes.includes(B)) && (console.log("Resetting invalid currentPolygon state"), B = null), B === null ? tt(_) : B.isCreating && (B.addPoint(_) || (K(), D("change")));
  }
  function tt(_) {
    const z = S.getBoundingClientRect();
    let I;
    p.length > 0 ? I = In(p[0]) : k ? h.boxes.length > 0 ? I = h.boxes[0].color : I = Ze[0] : I = Ze[h.boxes.length % Ze.length];
    let T = new Rt(K, _f, L, Q, ae, q, V, "", I, f, u, d, m, g);
    T.onPointAdded = (j) => {
      ze({ type: "polygon_point", pointData: j });
    }, B = T, T.startCreating(_, z.left, z.top), k ? t(0, h.boxes = [T], h) : t(0, h.boxes = [T, ...h.boxes], h), ze({ type: "create_shape", shapeIndex: 0 }), we(0), K(), D("change");
  }
  function Qt(_) {
    const z = S.getBoundingClientRect(), I = (_.clientX - z.left - L.offsetX) / N / L.scale, T = (_.clientY - z.top - L.offsetY) / N / L.scale;
    let j;
    p.length > 0 ? j = In(p[0]) : k ? h.boxes.length > 0 ? j = h.boxes[0].color : j = Ze[0] : j = Ze[h.boxes.length % Ze.length];
    let ie = new Pn(K, Mt, L, Q, ae, q, V, "", I, T, I, T, j, f, u, d, m, g);
    ie.startCreating(_, z.left, z.top), k ? t(0, h.boxes = [ie], h) : t(0, h.boxes = [ie, ...h.boxes], h), ze({ type: "create_shape", shapeIndex: 0 }), we(0), K(), D("change");
  }
  function _n(_) {
    const z = S.getBoundingClientRect(), I = (_.clientX - z.left - L.offsetX) / N / L.scale, T = (_.clientY - z.top - L.offsetY) / N / L.scale;
    let j;
    p.length > 0 ? j = In(p[0]) : k ? h.boxes.length > 0 ? j = h.boxes[0].color : j = Ze[0] : j = Ze[h.boxes.length % Ze.length];
    let ie = new An(K, Mt, L, Q, ae, q, V, "", I, T, 0, j, f, u, d, m, g);
    ie.startCreating(_, z.left, z.top), k ? t(0, h.boxes = [ie], h) : t(0, h.boxes = [ie, ...h.boxes], h), ze({ type: "create_shape", shapeIndex: 0 }), we(0), K(), D("change");
  }
  function Ve(_) {
    J || (J = new Jb(L, N), J.setBrushSize(F)), J.setScaleFactor(N);
    const z = S.getBoundingClientRect();
    J.startErase(_, z), K();
  }
  function $t(_) {
    if (!J) return;
    const z = S.getBoundingClientRect();
    J.continueErase(_, z), K();
  }
  function yt() {
    if (!J) return;
    const _ = J.endErase();
    if (_.length === 0) {
      mn();
      return;
    }
    const z = [...h.boxes], I = [], T = [];
    for (let j = 0; j < h.boxes.length; j++) {
      const ie = h.boxes[j], oe = J.eraseFromShape(ie, _);
      if (oe.length === 0)
        I.push(j);
      else {
        if (oe.length === 1 && oe[0] === ie)
          continue;
        I.push(j), T.push(...oe);
      }
    }
    if (I.length > 0 || T.length > 0) {
      for (let j = I.length - 1; j >= 0; j--)
        h.boxes.splice(I[j], 1);
      h.boxes.push(...T), ze({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: z.map((j) => pe(j)),
        shapeData: h.boxes.map((j) => pe(j))
      }), we(-1), D("change");
    }
    K(), mn();
  }
  function ke() {
    t(18, Me = !0);
  }
  function Be(_) {
    t(19, F = _.detail.size), J && J.setBrushSize(F);
  }
  function Z() {
    t(18, Me = !1);
  }
  function Ye() {
    t(14, H = n.creation), t(12, S.style.cursor = "crosshair", S), B = null;
  }
  function Po() {
    t(14, H = n.freehand), t(12, S.style.cursor = "crosshair", S), B = null;
  }
  function Ao() {
    t(14, H = n.circle), t(12, S.style.cursor = "crosshair", S), B = null;
  }
  function To() {
    t(14, H = n.polygon), t(12, S.style.cursor = "crosshair", S);
  }
  function Fo() {
    t(14, H = n.erase), t(12, S.style.cursor = "crosshair", S), B = null;
  }
  function mn() {
    t(14, H = n.drag), t(12, S.style.cursor = "default", S), B = null;
  }
  function Mt() {
    X >= 0 && X < h.boxes.length && (h.boxes[X].getArea() < 1 ? En() : (v || (se ? Oo() : t(16, me = !0)), k && mn()));
  }
  function _f() {
    B = null, X >= 0 && X < h.boxes.length && (h.boxes[X].getArea() < 1 ? En() : (v || (se ? Oo() : t(16, me = !0)), mn()));
  }
  function mf() {
    X >= 0 && X < h.boxes.length && !v && t(15, de = !0);
  }
  function gf(_) {
    if (!c)
      return;
    const z = S.getBoundingClientRect(), I = _.clientX - z.left, T = _.clientY - z.top;
    let j = !1;
    for (const [ie, oe] of h.boxes.entries())
      if (oe.isPointInsideBox(I, T)) {
        j = !0, we(ie), mf();
        break;
      }
    j || Pt();
  }
  function Uo(_, z) {
    const I = b.findIndex((T) => T[0] === _);
    I === -1 ? (b.push([_, b.length]), p.push(z), t(1, b), t(2, p), console.log(`Added custom label "${_}" with color ${z} to choices`)) : p[I] !== z && (t(2, p[I] = z, p), t(2, p), console.log(`Updated color for existing label "${_}" to ${z}`));
  }
  function bf(_) {
    t(15, de = !1);
    const { detail: z } = _;
    let I = z.label, T = z.color, j = z.ret;
    if (X >= 0 && X < h.boxes.length) {
      let ie = h.boxes[X];
      if (j == 1) {
        const oe = pe(ie);
        Uo(I, T), ie.label = I, ie.color = In(T);
        const Bt = pe(ie);
        ze({
          type: "edit_shape",
          shapeIndex: X,
          oldShapeData: oe,
          shapeData: Bt
        }), K(), D("change");
      } else j == -1 && En();
    }
    setTimeout(
      () => {
        S && (S.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function pf(_) {
    t(16, me = !1);
    const { detail: z } = _;
    let I = z.label, T = z.color, j = z.ret, ie = z.lock;
    if (X >= 0 && X < h.boxes.length) {
      let oe = h.boxes[X];
      j == 1 ? (Uo(I, T), t(20, se = ie), le.label = I, le.color = T, oe.label = I, oe.color = In(T), K(), D("change"), mn()) : En();
    }
    setTimeout(
      () => {
        S && (S.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function wf(_) {
    t(17, P = !1);
    const { detail: z } = _;
    let I = z.label, T = z.color, j = z.ret, ie = z.lock;
    j == 1 && (t(20, se = ie), le.label = I, le.color = T), setTimeout(
      () => {
        S && (S.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function Oo() {
    if (X >= 0 && X < h.boxes.length) {
      let _ = h.boxes[X];
      _.label = le.label, le.color !== "" && (_.color = In(le.color)), K(), D("change"), mn();
    }
    setTimeout(
      () => {
        S && (S.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function En() {
    if (X >= 0 && X < h.boxes.length) {
      const _ = h.boxes[X], z = pe(_);
      ze({
        type: "delete_shape",
        shapeIndex: X,
        shapeData: z
      }), h.boxes.splice(X, 1), we(-1), k && Ye(), D("change");
    }
  }
  function jo() {
    if (h.boxes.length === 0) return;
    const _ = h.boxes.map((z) => pe(z));
    ze({
      type: "edit_shape",
      shapeIndex: -1,
      // Special case for multiple shapes
      oldShapeData: _,
      shapeData: []
      // Empty array represents cleared state
    }), t(0, h.boxes = [], h), we(-1), B = null, k && Ye(), K(), D("change");
  }
  function ss() {
    if (S) {
      if (N = 1, t(12, S.width = S.clientWidth, S), L.setRotatedImage(Y), Y !== null) {
        if (L.imageRotatedWidth > S.width)
          N = S.width / L.imageRotatedWidth, G = Math.round(L.imageRotatedWidth * N), R = Math.round(L.imageRotatedHeight * N), Q = 0, ae = 0, q = G, V = R, t(12, S.height = R, S);
        else {
          G = L.imageRotatedWidth, R = L.imageRotatedHeight;
          var _ = (S.width - G) / 2;
          Q = _, ae = 0, q = _ + G, V = R, t(12, S.height = R, S);
        }
        L.imageWidth = G, L.imageHeight = R;
      } else
        Q = 0, ae = 0, q = S.width, V = S.height, t(12, S.height = S.clientHeight, S);
      if (L.resize(S.width, S.height, Q, ae), q > 0 && V > 0)
        for (const z of h.boxes)
          z.canvasXmin = Q, z.canvasYmin = ae, z.canvasXmax = q, z.canvasYmax = V, z.setScaleFactor(N);
      K(), D("change");
    }
  }
  const vf = new ResizeObserver(ss);
  function kf() {
    for (let _ = 0; _ < h.boxes.length; _++) {
      let z = h.boxes[_];
      if (!(z instanceof Pn) && !(z instanceof Mn) && !(z instanceof Rt) && !(z instanceof An)) {
        let I = "", T = "";
        if (z.hasOwnProperty("color") ? (I = z.color, Array.isArray(I) && I.length === 3 && (I = `rgb(${I[0]}, ${I[1]}, ${I[2]})`)) : I = Ze[_ % Ze.length], z.hasOwnProperty("label") && (T = z.label), z.hasOwnProperty("type") && z.type === "freehand" && z.hasOwnProperty("points")) {
          let j = new Mn(K, Mt, L, Q, ae, q, V, T, I, f, u, d, m, g);
          j._points = z.points, j.updateBoundingBox(), z = j;
        } else if (z.hasOwnProperty("type") && z.type === "circle" && z.hasOwnProperty("centerX") && z.hasOwnProperty("centerY") && z.hasOwnProperty("radius"))
          z = new An(K, Mt, L, Q, ae, q, V, T, z.centerX, z.centerY, z.radius, I, f, u, d, m, g);
        else if (z.hasOwnProperty("type") && z.type === "polygon" && z.hasOwnProperty("points")) {
          let j = new Rt(K, Mt, L, Q, ae, q, V, T, I, f, u, d, m, g);
          j._points = z.points, j.updateBoundingBox(), z = j;
        } else
          z = new Pn(K, Mt, L, Q, ae, q, V, T, z.xmin, z.ymin, z.xmax, z.ymax, I, f, u, d, m, g);
        t(0, h.boxes[_] = z, h);
      }
    }
  }
  function No() {
    a !== null && (Y === null || Y.src != a) && (Y = new Image(), Y.src = a, Y.onload = function() {
      ss(), K();
    });
  }
  np(() => {
    if (o = !0, Array.isArray(b) && b.length > 0) {
      if (!Array.isArray(p) || p.length == 0)
        for (let _ = 0; _ < b.length; _++) {
          let z = Ze[_ % Ze.length];
          p.push(ti(z));
        }
      le.label = b[0][0], le.color = p[0];
    }
    y = S.getContext("2d"), vf.observe(S), X < 0 && h !== null && h.boxes.length > 0 && we(0), No(), ss(), K(), setTimeout(
      () => {
        o = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function yf() {
    document.addEventListener("keydown", et);
  }
  function Cf() {
    document.removeEventListener("keydown", et);
  }
  ip(() => {
    document.removeEventListener("keydown", et);
  });
  function xf(_) {
    zo[_ ? "unshift" : "push"](() => {
      S = _, t(12, S);
    });
  }
  const Sf = () => Ye(), zf = () => Po(), Mf = () => Ao(), Bf = () => To(), Wf = () => Fo(), Df = () => mn(), Ef = () => En(), Xf = () => t(17, P = !0), Yf = () => kt(), Lf = () => E(), qf = () => {
    t(11, r = !r), K();
  }, Rf = () => jo();
  function If(_) {
    no.call(this, i, _);
  }
  function Hf(_) {
    no.call(this, i, _);
  }
  function Pf(_) {
    no.call(this, i, _);
  }
  function Af(_) {
    Me = _, t(18, Me);
  }
  function Tf(_) {
    F = _, t(19, F);
  }
  return i.$$set = (_) => {
    "imageUrl" in _ && t(46, a = _.imageUrl), "interactive" in _ && t(4, c = _.interactive), "boxAlpha" in _ && t(47, f = _.boxAlpha), "boxMinSize" in _ && t(48, u = _.boxMinSize), "handleSize" in _ && t(49, d = _.handleSize), "boxThickness" in _ && t(50, m = _.boxThickness), "boxSelectedThickness" in _ && t(51, g = _.boxSelectedThickness), "value" in _ && t(0, h = _.value), "choices" in _ && t(1, b = _.choices), "choicesColors" in _ && t(2, p = _.choicesColors), "disableEditBoxes" in _ && t(5, v = _.disableEditBoxes), "height" in _ && t(6, w = _.height), "width" in _ && t(7, x = _.width), "singleBox" in _ && t(52, k = _.singleBox), "showRemoveButton" in _ && t(3, C = _.showRemoveButton), "handlesCursor" in _ && t(8, W = _.handlesCursor), "useDefaultLabel" in _ && t(53, M = _.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (L.orientation = h.orientation, No(), kf(), ss(), K());
  }, [
    h,
    b,
    p,
    C,
    c,
    v,
    w,
    x,
    W,
    n,
    l,
    r,
    S,
    X,
    H,
    de,
    me,
    P,
    Me,
    F,
    se,
    s,
    K,
    Ne,
    qe,
    $e,
    li,
    kt,
    E,
    ke,
    Be,
    Z,
    Ye,
    Po,
    Ao,
    To,
    Fo,
    mn,
    gf,
    bf,
    pf,
    wf,
    En,
    jo,
    yf,
    Cf,
    a,
    f,
    u,
    d,
    m,
    g,
    k,
    M,
    xf,
    Sf,
    zf,
    Mf,
    Bf,
    Wf,
    Df,
    Ef,
    Xf,
    Yf,
    Lf,
    qf,
    Rf,
    If,
    Hf,
    Pf,
    Af,
    Tf
  ];
}
class rp extends Qb {
  constructor(e) {
    super(), $b(
      this,
      e,
      ap,
      lp,
      tp,
      {
        imageUrl: 46,
        interactive: 4,
        boxAlpha: 47,
        boxMinSize: 48,
        handleSize: 49,
        boxThickness: 50,
        boxSelectedThickness: 51,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 52,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 53
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: cp,
  add_flush_callback: fp,
  bind: hp,
  binding_callbacks: up,
  create_component: dp,
  destroy_component: _p,
  init: mp,
  mount_component: gp,
  safe_not_equal: bp,
  transition_in: pp,
  transition_out: wp
} = window.__gradio__svelte__internal, { createEventDispatcher: vp } = window.__gradio__svelte__internal;
function kp(i) {
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
    i[0]), e = new rp({ props: l }), up.push(() => hp(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), e.$on(
      "select",
      /*select_handler*/
      i[22]
    ), {
      c() {
        dp(e.$$.fragment);
      },
      m(o, r) {
        gp(e, o, r), n = !0;
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
        o[0], fp(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (pp(e.$$.fragment, o), n = !0);
      },
      o(o) {
        wp(e.$$.fragment, o), n = !1;
      },
      d(o) {
        _p(e, o);
      }
    }
  );
}
function yp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: f } = e, { height: u } = e, { width: d } = e, { boxSelectedThickness: m } = e, { value: g } = e, { disableEditBoxes: h } = e, { singleBox: b } = e, { showRemoveButton: p } = e, { handlesCursor: v } = e, { useDefaultLabel: w } = e, x, k;
  const C = vp();
  function W(y) {
    g = y, t(0, g);
  }
  const M = () => C("change"), S = (y) => C("select", y.detail);
  return i.$$set = (y) => {
    "src" in y && t(18, n = y.src), "interactive" in y && t(1, s = y.interactive), "boxesAlpha" in y && t(2, l = y.boxesAlpha), "labelList" in y && t(3, o = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, c = y.handleSize), "boxThickness" in y && t(7, f = y.boxThickness), "height" in y && t(8, u = y.height), "width" in y && t(9, d = y.width), "boxSelectedThickness" in y && t(10, m = y.boxSelectedThickness), "value" in y && t(0, g = y.value), "disableEditBoxes" in y && t(11, h = y.disableEditBoxes), "singleBox" in y && t(12, b = y.singleBox), "showRemoveButton" in y && t(13, p = y.showRemoveButton), "handlesCursor" in y && t(14, v = y.handlesCursor), "useDefaultLabel" in y && t(15, w = y.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, x = n), t(19, k = n);
      const y = n;
      Bm(y).then((Y) => {
        k === y && t(16, x = Y);
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
    d,
    m,
    h,
    b,
    p,
    v,
    w,
    x,
    C,
    n,
    k,
    W,
    M,
    S
  ];
}
class Cp extends cp {
  constructor(e) {
    super(), mp(this, e, yp, kp, bp, {
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
class Ar {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: xp,
  add_flush_callback: Zs,
  append: mi,
  attr: Vi,
  bind: Js,
  binding_callbacks: es,
  bubble: Ai,
  check_outros: Tn,
  create_component: cn,
  create_slot: Sp,
  destroy_component: fn,
  detach: Jn,
  element: Qi,
  empty: zp,
  get_all_dirty_from_scope: Mp,
  get_slot_changes: Bp,
  group_outros: Fn,
  init: Wp,
  insert: Gn,
  mount_component: hn,
  noop: Dp,
  safe_not_equal: Ep,
  space: Hn,
  toggle_class: Tr,
  transition_in: ue,
  transition_out: ye,
  update_slot_base: Xp
} = window.__gradio__svelte__internal, { createEventDispatcher: Yp, tick: Lp } = window.__gradio__svelte__internal;
function Fr(i) {
  let e, t;
  return e = new Tm({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [qp] },
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
      t || (ue(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function qp(i) {
  let e, t;
  return e = new Gs({
    props: {
      Icon: md,
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
      t || (ue(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function Ur(i) {
  let e, t;
  return e = new C_({
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
      t || (ue(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function Or(i) {
  let e, t, n;
  return t = new Gs({
    props: { Icon: oc, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = Qi("div"), cn(t.$$.fragment);
    },
    m(s, l) {
      Gn(s, e, l), hn(t, e, null), n = !0;
    },
    p: Dp,
    i(s) {
      n || (ue(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Jn(e), fn(t);
    }
  };
}
function jr(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = Sp(
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
      8388608) && Xp(
        n,
        t,
        s,
        /*$$scope*/
        s[54],
        e ? Bp(
          t,
          /*$$scope*/
          s[54],
          l,
          null
        ) : Mp(
          /*$$scope*/
          s[54]
        ),
        null
      );
    },
    i(s) {
      e || (ue(n, s), e = !0);
    },
    o(s) {
      ye(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Rp(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && jr(i)
  );
  return {
    c() {
      n && n.c(), e = zp();
    },
    m(s, l) {
      n && n.m(s, l), Gn(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && ue(n, 1)) : (n = jr(s), n.c(), ue(n, 1), n.m(e.parentNode, e)) : n && (Fn(), ye(n, 1, 1, () => {
        n = null;
      }), Tn());
    },
    i(s) {
      t || (ue(n), t = !0);
    },
    o(s) {
      ye(n), t = !1;
    },
    d(s) {
      s && Jn(e), n && n.d(s);
    }
  };
}
function Nr(i) {
  let e, t;
  return e = new h0({
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
      t || (ue(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function Vr(i) {
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
    i[1]), t = new Cp({ props: o }), es.push(() => Js(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), t.$on(
      "select",
      /*select_handler*/
      i[52]
    ), {
      c() {
        e = Qi("div"), cn(t.$$.fragment), Vi(e, "class", "image-frame svelte-1gjdske"), Tr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Gn(r, e, a), hn(t, e, null), s = !0;
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
        r[1], Zs(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Tr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (ue(t.$$.fragment, r), s = !0);
      },
      o(r) {
        ye(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Jn(e), fn(t);
      }
    }
  );
}
function Kr(i) {
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
    i[0]), e = new P_({ props: l }), es.push(() => Js(e, "active_source", s)), {
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
        o[0], Zs(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (ue(e.$$.fragment, o), n = !0);
      },
      o(o) {
        ye(e.$$.fragment, o), n = !1;
      },
      d(o) {
        fn(e, o);
      }
    }
  );
}
function Ip(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, m, g, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), b;
  e = new tu({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: ac,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Fr(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Ur(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Or(i)
  );
  function x(y) {
    i[42](y);
  }
  function k(y) {
    i[43](y);
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
    $$slots: { default: [Rp] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (C.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (C.dragging = /*dragging*/
  i[30]), c = new v1({ props: C }), i[41](c), es.push(() => Js(c, "uploading", x)), es.push(() => Js(c, "dragging", k)), c.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let W = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Nr(i)
  ), M = (
    /*value*/
    i[1] !== null && Vr(i)
  ), S = h && Kr(i);
  return {
    c() {
      cn(e.$$.fragment), t = Hn(), n = Qi("div"), p && p.c(), s = Hn(), v && v.c(), l = Hn(), w && w.c(), o = Hn(), r = Qi("div"), a = Qi("div"), cn(c.$$.fragment), d = Hn(), W && W.c(), m = Hn(), M && M.c(), g = Hn(), S && S.c(), Vi(n, "class", "icon-buttons svelte-1gjdske"), Vi(a, "class", "upload-container svelte-1gjdske"), Vi(r, "data-testid", "image"), Vi(r, "class", "image-container svelte-1gjdske");
    },
    m(y, Y) {
      hn(e, y, Y), Gn(y, t, Y), Gn(y, n, Y), p && p.m(n, null), mi(n, s), v && v.m(n, null), mi(n, l), w && w.m(n, null), Gn(y, o, Y), Gn(y, r, Y), mi(r, a), hn(c, a, null), mi(a, d), W && W.m(a, null), mi(a, m), M && M.m(a, null), mi(r, g), S && S.m(r, null), b = !0;
    },
    p(y, Y) {
      const X = {};
      Y[0] & /*show_label*/
      8 && (X.show_label = /*show_label*/
      y[3]), Y[0] & /*label*/
      4 && (X.label = /*label*/
      y[2] || "Image Annotator"), e.$set(X), /*showDownloadButton*/
      y[10] && /*value*/
      y[1] !== null ? p ? (p.p(y, Y), Y[0] & /*showDownloadButton, value*/
      1026 && ue(p, 1)) : (p = Fr(y), p.c(), ue(p, 1), p.m(n, s)) : p && (Fn(), ye(p, 1, 1, () => {
        p = null;
      }), Tn()), /*showShareButton*/
      y[9] && /*value*/
      y[1] !== null ? v ? (v.p(y, Y), Y[0] & /*showShareButton, value*/
      514 && ue(v, 1)) : (v = Ur(y), v.c(), ue(v, 1), v.m(n, l)) : v && (Fn(), ye(v, 1, 1, () => {
        v = null;
      }), Tn()), /*showClearButton*/
      y[11] && /*value*/
      y[1] !== null && /*interactive*/
      y[7] ? w ? (w.p(y, Y), Y[0] & /*showClearButton, value, interactive*/
      2178 && ue(w, 1)) : (w = Or(y), w.c(), ue(w, 1), w.m(n, null)) : w && (Fn(), ye(w, 1, 1, () => {
        w = null;
      }), Tn());
      const H = {};
      Y[0] & /*value, active_source*/
      3 && (H.hidden = /*value*/
      y[1] !== null || /*active_source*/
      y[0] === "webcam"), Y[0] & /*active_source*/
      1 && (H.filetype = /*active_source*/
      y[0] === "clipboard" ? "clipboard" : "image/*"), Y[0] & /*root*/
      64 && (H.root = /*root*/
      y[6]), Y[0] & /*max_file_size*/
      33554432 && (H.max_file_size = /*max_file_size*/
      y[25]), Y[0] & /*sources*/
      16 && (H.disable_click = !/*sources*/
      y[4].includes("upload")), Y[0] & /*cli_upload*/
      67108864 && (H.upload = /*cli_upload*/
      y[26]), Y[0] & /*stream_handler*/
      134217728 && (H.stream_handler = /*stream_handler*/
      y[27]), Y[0] & /*value*/
      2 | Y[1] & /*$$scope*/
      8388608 && (H.$$scope = { dirty: Y, ctx: y }), !f && Y[0] & /*uploading*/
      536870912 && (f = !0, H.uploading = /*uploading*/
      y[29], Zs(() => f = !1)), !u && Y[0] & /*dragging*/
      1073741824 && (u = !0, H.dragging = /*dragging*/
      y[30], Zs(() => u = !1)), c.$set(H), /*value*/
      y[1] === null && /*active_source*/
      y[0] === "webcam" ? W ? (W.p(y, Y), Y[0] & /*value, active_source*/
      3 && ue(W, 1)) : (W = Nr(y), W.c(), ue(W, 1), W.m(a, m)) : W && (Fn(), ye(W, 1, 1, () => {
        W = null;
      }), Tn()), /*value*/
      y[1] !== null ? M ? (M.p(y, Y), Y[0] & /*value*/
      2 && ue(M, 1)) : (M = Vr(y), M.c(), ue(M, 1), M.m(a, null)) : M && (Fn(), ye(M, 1, 1, () => {
        M = null;
      }), Tn()), Y[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (y[4].length > 1 || /*sources*/
      y[4].includes("clipboard")) && /*value*/
      y[1] === null && /*interactive*/
      y[7]), h ? S ? (S.p(y, Y), Y[0] & /*sources, value, interactive*/
      146 && ue(S, 1)) : (S = Kr(y), S.c(), ue(S, 1), S.m(r, null)) : S && (Fn(), ye(S, 1, 1, () => {
        S = null;
      }), Tn());
    },
    i(y) {
      b || (ue(e.$$.fragment, y), ue(p), ue(v), ue(w), ue(c.$$.fragment, y), ue(W), ue(M), ue(S), b = !0);
    },
    o(y) {
      ye(e.$$.fragment, y), ye(p), ye(v), ye(w), ye(c.$$.fragment, y), ye(W), ye(M), ye(S), b = !1;
    },
    d(y) {
      y && (Jn(t), Jn(n), Jn(o), Jn(r)), fn(e, y), p && p.d(), v && v.d(), w && w.d(), i[41](null), fn(c), W && W.d(), M && M.d(), S && S.d();
    }
  };
}
function Hp(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(E, pe, Ae, ht) {
    function At(tt) {
      return tt instanceof Ae ? tt : new Ae(function(Qt) {
        Qt(tt);
      });
    }
    return new (Ae || (Ae = Promise))(function(tt, Qt) {
      function _n(yt) {
        try {
          $t(ht.next(yt));
        } catch (ke) {
          Qt(ke);
        }
      }
      function Ve(yt) {
        try {
          $t(ht.throw(yt));
        } catch (ke) {
          Qt(ke);
        }
      }
      function $t(yt) {
        yt.done ? tt(yt.value) : At(yt.value).then(_n, Ve);
      }
      $t((ht = ht.apply(E, pe || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: m } = e, { showShareButton: g } = e, { showDownloadButton: h } = e, { showClearButton: b } = e, { boxesAlpha: p } = e, { labelList: v } = e, { labelColors: w } = e, { boxMinSize: x } = e, { handleSize: k } = e, { height: C } = e, { width: W } = e, { boxThickness: M } = e, { disableEditBoxes: S } = e, { singleBox: y } = e, { showRemoveButton: Y } = e, { handlesCursor: X } = e, { boxSelectedThickness: H } = e, { max_file_size: L = null } = e, { cli_upload: J } = e, { stream_handler: Q } = e, { useDefaultLabel: ae } = e, q, V = !1, { active_source: N = null } = e;
  function G({ detail: E }) {
    t(1, o = new Ar()), t(1, o.image = E, o), de("upload");
  }
  function R(E) {
    return l(this, void 0, void 0, function* () {
      const pe = yield q.load_files([new File([E], "webcam.png")]), Ae = (pe == null ? void 0 : pe[0]) || null;
      Ae ? (t(1, o = new Ar()), t(1, o.image = Ae, o)) : t(1, o = null), yield Lp(), de("change");
    });
  }
  const de = Yp();
  let me = !1;
  function P(E) {
    return l(this, void 0, void 0, function* () {
      switch (E) {
        case "clipboard":
          q.paste_clipboard();
          break;
      }
    });
  }
  function Me() {
    t(1, o = null), de("clear"), de("change");
  }
  const B = async (E) => E === null ? "" : `<img src="${await f_(E.image)}" />`;
  function F(E) {
    Ai.call(this, i, E);
  }
  function se(E) {
    Ai.call(this, i, E);
  }
  function le(E) {
    es[E ? "unshift" : "push"](() => {
      q = E, t(31, q);
    });
  }
  function D(E) {
    V = E, t(29, V);
  }
  function K(E) {
    me = E, t(30, me);
  }
  function we(E) {
    Ai.call(this, i, E);
  }
  const Ne = (E) => R(E.detail), Se = (E) => R(E.detail);
  function qe(E) {
    Ai.call(this, i, E);
  }
  function $e(E) {
    Ai.call(this, i, E);
  }
  const et = (E) => R(E.detail);
  function li(E) {
    o = E, t(1, o);
  }
  const Pt = () => de("change"), ze = (E) => de("select", { index: null, value: E.detail.coordinates });
  function kt(E) {
    N = E, t(0, N), t(4, c);
  }
  return i.$$set = (E) => {
    "value" in E && t(1, o = E.value), "label" in E && t(2, r = E.label), "show_label" in E && t(3, a = E.show_label), "sources" in E && t(4, c = E.sources), "selectable" in E && t(5, f = E.selectable), "root" in E && t(6, u = E.root), "interactive" in E && t(7, d = E.interactive), "i18n" in E && t(8, m = E.i18n), "showShareButton" in E && t(9, g = E.showShareButton), "showDownloadButton" in E && t(10, h = E.showDownloadButton), "showClearButton" in E && t(11, b = E.showClearButton), "boxesAlpha" in E && t(12, p = E.boxesAlpha), "labelList" in E && t(13, v = E.labelList), "labelColors" in E && t(14, w = E.labelColors), "boxMinSize" in E && t(15, x = E.boxMinSize), "handleSize" in E && t(16, k = E.handleSize), "height" in E && t(17, C = E.height), "width" in E && t(18, W = E.width), "boxThickness" in E && t(19, M = E.boxThickness), "disableEditBoxes" in E && t(20, S = E.disableEditBoxes), "singleBox" in E && t(21, y = E.singleBox), "showRemoveButton" in E && t(22, Y = E.showRemoveButton), "handlesCursor" in E && t(23, X = E.handlesCursor), "boxSelectedThickness" in E && t(24, H = E.boxSelectedThickness), "max_file_size" in E && t(25, L = E.max_file_size), "cli_upload" in E && t(26, J = E.cli_upload), "stream_handler" in E && t(27, Q = E.stream_handler), "useDefaultLabel" in E && t(28, ae = E.useDefaultLabel), "active_source" in E && t(0, N = E.active_source), "$$scope" in E && t(54, s = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && V && Me(), i.$$.dirty[0] & /*dragging*/
    1073741824 && de("drag", me), i.$$.dirty[0] & /*active_source, sources*/
    17 && !N && c && t(0, N = c[0]);
  }, [
    N,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    m,
    g,
    h,
    b,
    p,
    v,
    w,
    x,
    k,
    C,
    W,
    M,
    S,
    y,
    Y,
    X,
    H,
    L,
    J,
    Q,
    ae,
    V,
    me,
    q,
    G,
    R,
    de,
    P,
    Me,
    n,
    B,
    F,
    se,
    le,
    D,
    K,
    we,
    Ne,
    Se,
    qe,
    $e,
    et,
    li,
    Pt,
    ze,
    kt,
    s
  ];
}
class Pp extends xp {
  constructor(e) {
    super(), Wp(
      this,
      e,
      Hp,
      Ip,
      Ep,
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
  SvelteComponent: Ap,
  attr: Is,
  detach: cf,
  element: ff,
  init: Tp,
  insert: hf,
  noop: Zr,
  safe_not_equal: Fp,
  src_url_equal: Jr,
  toggle_class: xn
} = window.__gradio__svelte__internal;
function Gr(i) {
  let e, t;
  return {
    c() {
      e = ff("img"), Jr(e.src, t = /*value*/
      i[0].url) || Is(e, "src", t), Is(e, "alt", "");
    },
    m(n, s) {
      hf(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !Jr(e.src, t = /*value*/
      n[0].url) && Is(e, "src", t);
    },
    d(n) {
      n && cf(e);
    }
  };
}
function Up(i) {
  let e, t = (
    /*value*/
    i[0] && Gr(i)
  );
  return {
    c() {
      e = ff("div"), t && t.c(), Is(e, "class", "container svelte-1sgcyba"), xn(
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
      hf(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = Gr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
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
    i: Zr,
    o: Zr,
    d(n) {
      n && cf(e), t && t.d();
    }
  };
}
function Op(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class pw extends Ap {
  constructor(e) {
    super(), Tp(this, e, Op, Up, Fp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: jp,
  add_flush_callback: Qr,
  assign: Np,
  bind: $r,
  binding_callbacks: ec,
  check_outros: Vp,
  create_component: ni,
  destroy_component: ii,
  detach: uf,
  empty: Kp,
  flush: he,
  get_spread_object: Zp,
  get_spread_update: Jp,
  group_outros: Gp,
  init: Qp,
  insert: df,
  mount_component: si,
  safe_not_equal: $p,
  space: ew,
  transition_in: un,
  transition_out: dn
} = window.__gradio__svelte__internal;
function tw(i) {
  let e, t;
  return e = new Xu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [sw] },
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
      8192 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
    }
  };
}
function nw(i) {
  let e, t;
  return e = new _c({
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
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
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
      ii(e, n);
    }
  };
}
function iw(i) {
  let e, t;
  return e = new _c({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
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
      ii(e, n);
    }
  };
}
function sw(i) {
  let e, t;
  return e = new ac({}), {
    c() {
      ni(e.$$.fragment);
    },
    m(n, s) {
      si(e, n, s), t = !0;
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ii(e, n);
    }
  };
}
function lw(i) {
  let e, t, n, s;
  const l = [iw, nw, tw], o = [];
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
      t.c(), n = Kp();
    },
    m(a, c) {
      o[e].m(a, c), df(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Gp(), dn(o[f], 1, 1, () => {
        o[f] = null;
      }), Vp(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), un(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (un(t), s = !0);
    },
    o(a) {
      dn(t), s = !1;
    },
    d(a) {
      a && uf(n), o[e].d(a);
    }
  };
}
function ow(i) {
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
    a = Np(a, r[d]);
  e = new xm({ props: a });
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
    $$slots: { default: [lw] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Pp({ props: u }), ec.push(() => $r(n, "active_source", c)), ec.push(() => $r(n, "value", f)), n.$on(
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
        ni(e.$$.fragment), t = ew(), ni(n.$$.fragment);
      },
      m(d, m) {
        si(e, d, m), df(d, t, m), si(n, d, m), o = !0;
      },
      p(d, m) {
        const g = m[0] & /*loading_status*/
        2 | m[1] & /*gradio*/
        1 ? Jp(r, [
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
          2 && Zp(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(g);
        const h = {};
        m[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        d[10]), m[0] & /*root*/
        128 && (h.root = /*root*/
        d[7]), m[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        d[14]), m[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        d[18]), m[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        d[15]), m[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        d[16]), m[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        d[17]), m[1] & /*gradio*/
        1 && (h.i18n = /*gradio*/
        d[31].i18n), m[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        d[19]), m[0] & /*height*/
        256 && (h.height = /*height*/
        d[8]), m[0] & /*width*/
        512 && (h.width = /*width*/
        d[9]), m[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        d[20]), m[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        d[21]), m[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        d[22]), m[0] & /*label*/
        32 && (h.label = /*label*/
        d[5]), m[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        d[6]), m[1] & /*gradio*/
        1 && (h.max_file_size = /*gradio*/
        d[31].max_file_size), m[1] & /*gradio*/
        1 && (h.cli_upload = /*gradio*/
        d[31].client.upload), m[1] & /*gradio*/
        1 && (h.stream_handler = /*gradio*/
        d[31].client.stream), m[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        d[23]), m[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        d[24]), m[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), m[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), m[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        d[27]), m[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        d[28]), m[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        d[29]), m[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        d[30]), m[1] & /*$$scope, gradio, active_source*/
        8197 && (h.$$scope = { dirty: m, ctx: d }), !s && m[1] & /*active_source*/
        4 && (s = !0, h.active_source = /*active_source*/
        d[33], Qr(() => s = !1)), !l && m[0] & /*value*/
        1 && (l = !0, h.value = /*value*/
        d[0], Qr(() => l = !1)), n.$set(h);
      },
      i(d) {
        o || (un(e.$$.fragment, d), un(n.$$.fragment, d), o = !0);
      },
      o(d) {
        dn(e.$$.fragment, d), dn(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && uf(t), ii(e, d), ii(n, d);
      }
    }
  );
}
function aw(i) {
  let e, t;
  return e = new ih({
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
      $$slots: { default: [ow] },
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
      ii(e, n);
    }
  };
}
function rw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: m = !0 } = e, { scale: g = null } = e, { min_width: h = void 0 } = e, { loading_status: b } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: w } = e, { show_clear_button: x } = e, { interactive: k } = e, { boxes_alpha: C } = e, { label_list: W } = e, { label_colors: M } = e, { box_min_size: S } = e, { handle_size: y } = e, { box_thickness: Y } = e, { box_selected_thickness: X } = e, { disable_edit_boxes: H } = e, { single_box: L } = e, { show_remove_button: J } = e, { handles_cursor: Q } = e, { use_default_label: ae } = e, { gradio: q } = e, V, N = null;
  function G(D) {
    N = D, t(33, N);
  }
  function R(D) {
    o = D, t(0, o);
  }
  const de = () => q.dispatch("change"), me = () => q.dispatch("edit"), P = () => {
    q.dispatch("clear");
  }, Me = ({ detail: D }) => t(32, V = D), B = () => q.dispatch("upload"), F = ({ detail: D }) => q.dispatch("select", D), se = ({ detail: D }) => q.dispatch("share", D), le = ({ detail: D }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), q.dispatch("error", D);
  };
  return i.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, s = D.elem_classes), "visible" in D && t(4, l = D.visible), "value" in D && t(0, o = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, c = D.root), "height" in D && t(8, f = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, d = D._selectable), "container" in D && t(11, m = D.container), "scale" in D && t(12, g = D.scale), "min_width" in D && t(13, h = D.min_width), "loading_status" in D && t(1, b = D.loading_status), "sources" in D && t(14, p = D.sources), "show_download_button" in D && t(15, v = D.show_download_button), "show_share_button" in D && t(16, w = D.show_share_button), "show_clear_button" in D && t(17, x = D.show_clear_button), "interactive" in D && t(18, k = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, W = D.label_list), "label_colors" in D && t(21, M = D.label_colors), "box_min_size" in D && t(22, S = D.box_min_size), "handle_size" in D && t(23, y = D.handle_size), "box_thickness" in D && t(24, Y = D.box_thickness), "box_selected_thickness" in D && t(25, X = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, H = D.disable_edit_boxes), "single_box" in D && t(27, L = D.single_box), "show_remove_button" in D && t(28, J = D.show_remove_button), "handles_cursor" in D && t(29, Q = D.handles_cursor), "use_default_label" in D && t(30, ae = D.use_default_label), "gradio" in D && t(31, q = D.gradio);
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
    d,
    m,
    g,
    h,
    p,
    v,
    w,
    x,
    k,
    C,
    W,
    M,
    S,
    y,
    Y,
    X,
    H,
    L,
    J,
    Q,
    ae,
    q,
    V,
    N,
    G,
    R,
    de,
    me,
    P,
    Me,
    B,
    F,
    se,
    le
  ];
}
class ww extends jp {
  constructor(e) {
    super(), Qp(
      this,
      e,
      rw,
      aw,
      $p,
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
    this.$$set({ elem_id: e }), he();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), he();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), he();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), he();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), he();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), he();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), he();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), he();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), he();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), he();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), he();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), he();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), he();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), he();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), he();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), he();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), he();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), he();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), he();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), he();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), he();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), he();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), he();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), he();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), he();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), he();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), he();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), he();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), he();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), he();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), he();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), he();
  }
}
export {
  pw as BaseExample,
  ww as default
};
