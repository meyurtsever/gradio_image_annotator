const {
  SvelteComponent: qu,
  assign: Hu,
  create_slot: Iu,
  detach: Au,
  element: ju,
  get_all_dirty_from_scope: Fu,
  get_slot_changes: Tu,
  get_spread_update: Ou,
  init: Uu,
  insert: Vu,
  safe_not_equal: Nu,
  set_dynamic_element_data: za,
  set_style: Bt,
  toggle_class: an,
  transition_in: Hc,
  transition_out: Ic,
  update_slot_base: Ku
} = window.__gradio__svelte__internal;
function Zu(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Iu(
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
    r = Hu(r, o[a]);
  return {
    c() {
      e = ju(
        /*tag*/
        i[14]
      ), l && l.c(), za(
        /*tag*/
        i[14]
      )(e, r), an(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), an(
        e,
        "padded",
        /*padding*/
        i[6]
      ), an(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), an(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), an(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Bt(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Bt(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Bt(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Bt(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Bt(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Bt(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Bt(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      Vu(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && Ku(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? Tu(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Fu(
          /*$$scope*/
          a[17]
        ),
        null
      ), za(
        /*tag*/
        a[14]
      )(e, r = Ou(o, [
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
      ])), an(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), an(
        e,
        "padded",
        /*padding*/
        a[6]
      ), an(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), an(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), an(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && Bt(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && Bt(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && Bt(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && Bt(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && Bt(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && Bt(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Hc(l, a), n = !0);
    },
    o(a) {
      Ic(l, a), n = !1;
    },
    d(a) {
      a && Au(e), l && l.d(a);
    }
  };
}
function Ju(i) {
  let e, t = (
    /*tag*/
    i[14] && Zu(i)
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
      e || (Hc(t, n), e = !0);
    },
    o(n) {
      Ic(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Gu(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: h = !0 } = e, { type: d = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: p = !1 } = e, { container: u = !0 } = e, { visible: v = !0 } = e, { allow_overflow: g = !0 } = e, { scale: k = null } = e, { min_width: b = 0 } = e, M = d === "fieldset" ? "fieldset" : "div";
  const W = (w) => {
    if (w !== void 0) {
      if (typeof w == "number")
        return w + "px";
      if (typeof w == "string")
        return w;
    }
  };
  return i.$$set = (w) => {
    "height" in w && t(0, l = w.height), "width" in w && t(1, o = w.width), "elem_id" in w && t(2, r = w.elem_id), "elem_classes" in w && t(3, a = w.elem_classes), "variant" in w && t(4, c = w.variant), "border_mode" in w && t(5, f = w.border_mode), "padding" in w && t(6, h = w.padding), "type" in w && t(16, d = w.type), "test_id" in w && t(7, m = w.test_id), "explicit_call" in w && t(8, p = w.explicit_call), "container" in w && t(9, u = w.container), "visible" in w && t(10, v = w.visible), "allow_overflow" in w && t(11, g = w.allow_overflow), "scale" in w && t(12, k = w.scale), "min_width" in w && t(13, b = w.min_width), "$$scope" in w && t(17, s = w.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    m,
    p,
    u,
    v,
    g,
    k,
    b,
    M,
    W,
    d,
    s,
    n
  ];
}
class Qu extends qu {
  constructor(e) {
    super(), Uu(this, e, Gu, Ju, Nu, {
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
  SvelteComponent: $u,
  attr: eh,
  create_slot: th,
  detach: nh,
  element: ih,
  get_all_dirty_from_scope: sh,
  get_slot_changes: lh,
  init: oh,
  insert: ah,
  safe_not_equal: rh,
  transition_in: ch,
  transition_out: fh,
  update_slot_base: uh
} = window.__gradio__svelte__internal;
function hh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = th(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = ih("div"), s && s.c(), eh(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      ah(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && uh(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? lh(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : sh(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (ch(s, l), t = !0);
    },
    o(l) {
      fh(s, l), t = !1;
    },
    d(l) {
      l && nh(e), s && s.d(l);
    }
  };
}
function dh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class _h extends $u {
  constructor(e) {
    super(), oh(this, e, dh, hh, rh, {});
  }
}
const {
  SvelteComponent: mh,
  attr: Wa,
  check_outros: gh,
  create_component: ph,
  create_slot: bh,
  destroy_component: vh,
  detach: sl,
  element: wh,
  empty: kh,
  get_all_dirty_from_scope: yh,
  get_slot_changes: Ch,
  group_outros: Sh,
  init: Mh,
  insert: ll,
  mount_component: zh,
  safe_not_equal: Wh,
  set_data: xh,
  space: Bh,
  text: Xh,
  toggle_class: Bi,
  transition_in: fs,
  transition_out: ol,
  update_slot_base: Yh
} = window.__gradio__svelte__internal;
function xa(i) {
  let e, t;
  return e = new _h({
    props: {
      $$slots: { default: [Dh] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ph(e.$$.fragment);
    },
    m(n, s) {
      zh(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (fs(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ol(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vh(e, n);
    }
  };
}
function Dh(i) {
  let e;
  return {
    c() {
      e = Xh(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      ll(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && xh(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && sl(e);
    }
  };
}
function Eh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = bh(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && xa(i)
  );
  return {
    c() {
      e = wh("span"), o && o.c(), t = Bh(), r && r.c(), n = kh(), Wa(e, "data-testid", "block-info"), Wa(e, "class", "svelte-22c38v"), Bi(e, "sr-only", !/*show_label*/
      i[0]), Bi(e, "hide", !/*show_label*/
      i[0]), Bi(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      ll(a, e, c), o && o.m(e, null), ll(a, t, c), r && r.m(a, c), ll(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Yh(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Ch(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : yh(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && Bi(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && Bi(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && Bi(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && fs(r, 1)) : (r = xa(a), r.c(), fs(r, 1), r.m(n.parentNode, n)) : r && (Sh(), ol(r, 1, 1, () => {
        r = null;
      }), gh());
    },
    i(a) {
      s || (fs(o, a), fs(r), s = !0);
    },
    o(a) {
      ol(o, a), ol(r), s = !1;
    },
    d(a) {
      a && (sl(e), sl(t), sl(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Rh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class Ac extends mh {
  constructor(e) {
    super(), Mh(this, e, Rh, Eh, Wh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Lh,
  append: Il,
  attr: Es,
  create_component: Ph,
  destroy_component: qh,
  detach: Hh,
  element: Ba,
  init: Ih,
  insert: Ah,
  mount_component: jh,
  safe_not_equal: Fh,
  set_data: Th,
  space: Oh,
  text: Uh,
  toggle_class: Rn,
  transition_in: Vh,
  transition_out: Nh
} = window.__gradio__svelte__internal;
function Kh(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Ba("label"), t = Ba("span"), Ph(n.$$.fragment), s = Oh(), l = Uh(
        /*label*/
        i[0]
      ), Es(t, "class", "svelte-9gxdi0"), Es(e, "for", ""), Es(e, "data-testid", "block-label"), Es(e, "class", "svelte-9gxdi0"), Rn(e, "hide", !/*show_label*/
      i[2]), Rn(e, "sr-only", !/*show_label*/
      i[2]), Rn(
        e,
        "float",
        /*float*/
        i[4]
      ), Rn(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Ah(r, e, a), Il(e, t), jh(n, t, null), Il(e, s), Il(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Th(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Rn(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Rn(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Rn(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Rn(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Vh(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Nh(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Hh(e), qh(n);
    }
  };
}
function Zh(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class Jh extends Lh {
  constructor(e) {
    super(), Ih(this, e, Zh, Kh, Fh, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Gh,
  append: Ho,
  attr: Cn,
  bubble: Qh,
  create_component: $h,
  destroy_component: ed,
  detach: jc,
  element: Io,
  init: td,
  insert: Fc,
  listen: nd,
  mount_component: id,
  safe_not_equal: sd,
  set_data: ld,
  set_style: Xi,
  space: od,
  text: ad,
  toggle_class: bt,
  transition_in: rd,
  transition_out: cd
} = window.__gradio__svelte__internal;
function Xa(i) {
  let e, t;
  return {
    c() {
      e = Io("span"), t = ad(
        /*label*/
        i[1]
      ), Cn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      Fc(n, e, s), Ho(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && ld(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && jc(e);
    }
  };
}
function fd(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && Xa(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = Io("button"), a && a.c(), t = od(), n = Io("div"), $h(s.$$.fragment), Cn(n, "class", "svelte-1lrphxw"), bt(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), bt(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), bt(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Cn(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Cn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Cn(
        e,
        "title",
        /*label*/
        i[1]
      ), Cn(e, "class", "svelte-1lrphxw"), bt(
        e,
        "pending",
        /*pending*/
        i[3]
      ), bt(
        e,
        "padded",
        /*padded*/
        i[5]
      ), bt(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), bt(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Xi(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Xi(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Xi(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      Fc(c, e, f), a && a.m(e, null), Ho(e, t), Ho(e, n), id(s, n, null), l = !0, o || (r = nd(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = Xa(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && bt(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && bt(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && bt(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && Cn(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && Cn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && Cn(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && bt(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && bt(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && bt(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && bt(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && Xi(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Xi(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && Xi(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (rd(s.$$.fragment, c), l = !0);
    },
    o(c) {
      cd(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && jc(e), a && a.d(), ed(s), o = !1, r();
    }
  };
}
function ud(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: h = !1 } = e, { hasPopup: d = !1 } = e, { color: m = "var(--block-label-text-color)" } = e, { transparent: p = !1 } = e, { background: u = "var(--background-fill-primary)" } = e, { offset: v = 0 } = e;
  function g(k) {
    Qh.call(this, i, k);
  }
  return i.$$set = (k) => {
    "Icon" in k && t(0, s = k.Icon), "label" in k && t(1, l = k.label), "show_label" in k && t(2, o = k.show_label), "pending" in k && t(3, r = k.pending), "size" in k && t(4, a = k.size), "padded" in k && t(5, c = k.padded), "highlight" in k && t(6, f = k.highlight), "disabled" in k && t(7, h = k.disabled), "hasPopup" in k && t(8, d = k.hasPopup), "color" in k && t(13, m = k.color), "transparent" in k && t(9, p = k.transparent), "background" in k && t(10, u = k.background), "offset" in k && t(11, v = k.offset);
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
    h,
    d,
    p,
    u,
    v,
    n,
    m,
    g
  ];
}
class xl extends Gh {
  constructor(e) {
    super(), td(this, e, ud, fd, sd, {
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
  SvelteComponent: hd,
  append: dd,
  attr: Al,
  binding_callbacks: _d,
  create_slot: md,
  detach: gd,
  element: Ya,
  get_all_dirty_from_scope: pd,
  get_slot_changes: bd,
  init: vd,
  insert: wd,
  safe_not_equal: kd,
  toggle_class: Ln,
  transition_in: yd,
  transition_out: Cd,
  update_slot_base: Sd
} = window.__gradio__svelte__internal;
function Md(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = md(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Ya("div"), t = Ya("div"), l && l.c(), Al(t, "class", "icon svelte-3w3rth"), Al(e, "class", "empty svelte-3w3rth"), Al(e, "aria-label", "Empty value"), Ln(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Ln(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Ln(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Ln(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      wd(o, e, r), dd(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Sd(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? bd(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : pd(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ln(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Ln(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ln(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Ln(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (yd(l, o), n = !0);
    },
    o(o) {
      Cd(l, o), n = !1;
    },
    d(o) {
      o && gd(e), l && l.d(o), i[6](null);
    }
  };
}
function zd(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(h) {
    var d;
    if (!h) return !1;
    const { height: m } = h.getBoundingClientRect(), { height: p } = ((d = h.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: m };
    return m > p + 2;
  }
  function f(h) {
    _d[h ? "unshift" : "push"](() => {
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
class Wd extends hd {
  constructor(e) {
    super(), vd(this, e, zd, Md, kd, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: xd,
  append: Da,
  attr: vt,
  detach: Bd,
  init: Xd,
  insert: Yd,
  noop: jl,
  safe_not_equal: Dd,
  svg_element: Fl
} = window.__gradio__svelte__internal;
function Ed(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("svg"), t = Fl("path"), n = Fl("circle"), vt(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), vt(n, "cx", "12"), vt(n, "cy", "13"), vt(n, "r", "4"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "fill", "none"), vt(e, "stroke", "currentColor"), vt(e, "stroke-width", "1.5"), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round"), vt(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Yd(s, e, l), Da(e, t), Da(e, n);
    },
    p: jl,
    i: jl,
    o: jl,
    d(s) {
      s && Bd(e);
    }
  };
}
class Rd extends xd {
  constructor(e) {
    super(), Xd(this, e, null, Ed, Dd, {});
  }
}
const {
  SvelteComponent: Ld,
  append: Pd,
  attr: Vt,
  detach: qd,
  init: Hd,
  insert: Id,
  noop: Tl,
  safe_not_equal: Ad,
  svg_element: Ea
} = window.__gradio__svelte__internal;
function jd(i) {
  let e, t;
  return {
    c() {
      e = Ea("svg"), t = Ea("circle"), Vt(t, "cx", "12"), Vt(t, "cy", "12"), Vt(t, "r", "10"), Vt(e, "xmlns", "http://www.w3.org/2000/svg"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24"), Vt(e, "stroke-width", "1.5"), Vt(e, "stroke-linecap", "round"), Vt(e, "stroke-linejoin", "round"), Vt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Id(n, e, s), Pd(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && qd(e);
    }
  };
}
let Fd = class extends Ld {
  constructor(e) {
    super(), Hd(this, e, null, jd, Ad, {});
  }
};
const {
  SvelteComponent: Td,
  append: Ol,
  attr: Nt,
  detach: Od,
  init: Ud,
  insert: Vd,
  noop: Ul,
  safe_not_equal: Nd,
  set_style: rn,
  svg_element: Rs
} = window.__gradio__svelte__internal;
function Kd(i) {
  let e, t, n, s;
  return {
    c() {
      e = Rs("svg"), t = Rs("g"), n = Rs("path"), s = Rs("path"), Nt(n, "d", "M18,6L6.087,17.913"), rn(n, "fill", "none"), rn(n, "fill-rule", "nonzero"), rn(n, "stroke-width", "2px"), Nt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Nt(s, "d", "M4.364,4.364L19.636,19.636"), rn(s, "fill", "none"), rn(s, "fill-rule", "nonzero"), rn(s, "stroke-width", "2px"), Nt(e, "width", "100%"), Nt(e, "height", "100%"), Nt(e, "viewBox", "0 0 24 24"), Nt(e, "version", "1.1"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Nt(e, "xml:space", "preserve"), Nt(e, "stroke", "currentColor"), rn(e, "fill-rule", "evenodd"), rn(e, "clip-rule", "evenodd"), rn(e, "stroke-linecap", "round"), rn(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Vd(l, e, o), Ol(e, t), Ol(t, n), Ol(e, s);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(l) {
      l && Od(e);
    }
  };
}
class Tc extends Td {
  constructor(e) {
    super(), Ud(this, e, null, Kd, Nd, {});
  }
}
const {
  SvelteComponent: Zd,
  append: Jd,
  attr: ss,
  detach: Gd,
  init: Qd,
  insert: $d,
  noop: Vl,
  safe_not_equal: e_,
  svg_element: Ra
} = window.__gradio__svelte__internal;
function t_(i) {
  let e, t;
  return {
    c() {
      e = Ra("svg"), t = Ra("path"), ss(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ss(t, "fill", "currentColor"), ss(e, "id", "icon"), ss(e, "xmlns", "http://www.w3.org/2000/svg"), ss(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      $d(n, e, s), Jd(e, t);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(n) {
      n && Gd(e);
    }
  };
}
class n_ extends Zd {
  constructor(e) {
    super(), Qd(this, e, null, t_, e_, {});
  }
}
const {
  SvelteComponent: i_,
  append: s_,
  attr: Yi,
  detach: l_,
  init: o_,
  insert: a_,
  noop: Nl,
  safe_not_equal: r_,
  svg_element: La
} = window.__gradio__svelte__internal;
function c_(i) {
  let e, t;
  return {
    c() {
      e = La("svg"), t = La("path"), Yi(t, "fill", "currentColor"), Yi(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Yi(e, "xmlns", "http://www.w3.org/2000/svg"), Yi(e, "width", "100%"), Yi(e, "height", "100%"), Yi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      a_(n, e, s), s_(e, t);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(n) {
      n && l_(e);
    }
  };
}
class f_ extends i_ {
  constructor(e) {
    super(), o_(this, e, null, c_, r_, {});
  }
}
const {
  SvelteComponent: u_,
  append: h_,
  attr: Di,
  detach: d_,
  init: __,
  insert: m_,
  noop: Kl,
  safe_not_equal: g_,
  svg_element: Pa
} = window.__gradio__svelte__internal;
function p_(i) {
  let e, t;
  return {
    c() {
      e = Pa("svg"), t = Pa("path"), Di(t, "d", "M5 8l4 4 4-4z"), Di(e, "class", "dropdown-arrow svelte-145leq6"), Di(e, "xmlns", "http://www.w3.org/2000/svg"), Di(e, "width", "100%"), Di(e, "height", "100%"), Di(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      m_(n, e, s), h_(e, t);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(n) {
      n && d_(e);
    }
  };
}
let oa = class extends u_ {
  constructor(e) {
    super(), __(this, e, null, p_, g_, {});
  }
};
const {
  SvelteComponent: b_,
  append: Zl,
  attr: Ne,
  detach: v_,
  init: w_,
  insert: k_,
  noop: Jl,
  safe_not_equal: y_,
  svg_element: Ls
} = window.__gradio__svelte__internal;
function C_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ls("svg"), t = Ls("rect"), n = Ls("circle"), s = Ls("polyline"), Ne(t, "x", "3"), Ne(t, "y", "3"), Ne(t, "width", "18"), Ne(t, "height", "18"), Ne(t, "rx", "2"), Ne(t, "ry", "2"), Ne(n, "cx", "8.5"), Ne(n, "cy", "8.5"), Ne(n, "r", "1.5"), Ne(s, "points", "21 15 16 10 5 21"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "fill", "none"), Ne(e, "stroke", "currentColor"), Ne(e, "stroke-width", "1.5"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round"), Ne(e, "class", "feather feather-image");
    },
    m(l, o) {
      k_(l, e, o), Zl(e, t), Zl(e, n), Zl(e, s);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(l) {
      l && v_(e);
    }
  };
}
let Oc = class extends b_ {
  constructor(e) {
    super(), w_(this, e, null, C_, y_, {});
  }
};
const {
  SvelteComponent: S_,
  append: M_,
  attr: Ps,
  detach: z_,
  init: W_,
  insert: x_,
  noop: Gl,
  safe_not_equal: B_,
  svg_element: qa
} = window.__gradio__svelte__internal;
function X_(i) {
  let e, t;
  return {
    c() {
      e = qa("svg"), t = qa("path"), Ps(t, "fill", "currentColor"), Ps(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ps(e, "xmlns", "http://www.w3.org/2000/svg"), Ps(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      x_(n, e, s), M_(e, t);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(n) {
      n && z_(e);
    }
  };
}
class Uc extends S_ {
  constructor(e) {
    super(), W_(this, e, null, X_, B_, {});
  }
}
const {
  SvelteComponent: Y_,
  append: qs,
  attr: Ke,
  detach: D_,
  init: E_,
  insert: R_,
  noop: Ql,
  safe_not_equal: L_,
  svg_element: ls
} = window.__gradio__svelte__internal;
function P_(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = ls("svg"), t = ls("path"), n = ls("path"), s = ls("line"), l = ls("line"), Ke(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Ke(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Ke(s, "x1", "12"), Ke(s, "y1", "19"), Ke(s, "x2", "12"), Ke(s, "y2", "23"), Ke(l, "x1", "8"), Ke(l, "y1", "23"), Ke(l, "x2", "16"), Ke(l, "y2", "23"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "width", "100%"), Ke(e, "height", "100%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "fill", "none"), Ke(e, "stroke", "currentColor"), Ke(e, "stroke-width", "2"), Ke(e, "stroke-linecap", "round"), Ke(e, "stroke-linejoin", "round"), Ke(e, "class", "feather feather-mic");
    },
    m(o, r) {
      R_(o, e, r), qs(e, t), qs(e, n), qs(e, s), qs(e, l);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(o) {
      o && D_(e);
    }
  };
}
class q_ extends Y_ {
  constructor(e) {
    super(), E_(this, e, null, P_, L_, {});
  }
}
const {
  SvelteComponent: H_,
  append: I_,
  attr: wt,
  detach: A_,
  init: j_,
  insert: F_,
  noop: $l,
  safe_not_equal: T_,
  svg_element: Ha
} = window.__gradio__svelte__internal;
function O_(i) {
  let e, t;
  return {
    c() {
      e = Ha("svg"), t = Ha("rect"), wt(t, "x", "3"), wt(t, "y", "3"), wt(t, "width", "18"), wt(t, "height", "18"), wt(t, "rx", "2"), wt(t, "ry", "2"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "width", "100%"), wt(e, "height", "100%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "stroke-width", "1.5"), wt(e, "stroke-linecap", "round"), wt(e, "stroke-linejoin", "round"), wt(e, "class", "feather feather-square");
    },
    m(n, s) {
      F_(n, e, s), I_(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && A_(e);
    }
  };
}
class U_ extends H_ {
  constructor(e) {
    super(), j_(this, e, null, O_, T_, {});
  }
}
const {
  SvelteComponent: V_,
  append: eo,
  attr: ct,
  detach: N_,
  init: K_,
  insert: Z_,
  noop: to,
  safe_not_equal: J_,
  svg_element: Hs
} = window.__gradio__svelte__internal;
function G_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Hs("svg"), t = Hs("path"), n = Hs("polyline"), s = Hs("line"), ct(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ct(n, "points", "17 8 12 3 7 8"), ct(s, "x1", "12"), ct(s, "y1", "3"), ct(s, "x2", "12"), ct(s, "y2", "15"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "90%"), ct(e, "height", "90%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "fill", "none"), ct(e, "stroke", "currentColor"), ct(e, "stroke-width", "2"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-upload");
    },
    m(l, o) {
      Z_(l, e, o), eo(e, t), eo(e, n), eo(e, s);
    },
    p: to,
    i: to,
    o: to,
    d(l) {
      l && N_(e);
    }
  };
}
let Vc = class extends V_ {
  constructor(e) {
    super(), K_(this, e, null, G_, J_, {});
  }
};
const {
  SvelteComponent: Q_,
  append: Ia,
  attr: Pn,
  detach: $_,
  init: em,
  insert: tm,
  noop: no,
  safe_not_equal: nm,
  svg_element: io
} = window.__gradio__svelte__internal;
function im(i) {
  let e, t, n;
  return {
    c() {
      e = io("svg"), t = io("path"), n = io("path"), Pn(t, "fill", "currentColor"), Pn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Pn(n, "fill", "currentColor"), Pn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Pn(e, "xmlns", "http://www.w3.org/2000/svg"), Pn(e, "width", "100%"), Pn(e, "height", "100%"), Pn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      tm(s, e, l), Ia(e, t), Ia(e, n);
    },
    p: no,
    i: no,
    o: no,
    d(s) {
      s && $_(e);
    }
  };
}
let Nc = class extends Q_ {
  constructor(e) {
    super(), em(this, e, null, im, nm, {});
  }
};
const sm = [
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
], Aa = {
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
sm.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: Aa[e][t],
      secondary: Aa[e][n]
    }
  }),
  {}
);
class al extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function lm(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new al("Must be on Spaces to share.");
  let t, n, s;
  t = om(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new al(`Upload failed: ${c.error}`);
    }
    throw new al("Upload failed.");
  }
  return await o.text();
}
function om(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: am,
  create_component: rm,
  destroy_component: cm,
  init: fm,
  mount_component: um,
  safe_not_equal: hm,
  transition_in: dm,
  transition_out: _m
} = window.__gradio__svelte__internal, { createEventDispatcher: mm } = window.__gradio__svelte__internal;
function gm(i) {
  let e, t;
  return e = new xl({
    props: {
      Icon: n_,
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
      rm(e.$$.fragment);
    },
    m(n, s) {
      um(e, n, s), t = !0;
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
      t || (dm(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _m(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cm(e, n);
    }
  };
}
function pm(i, e, t) {
  const n = mm();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof al ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class bm extends am {
  constructor(e) {
    super(), fm(this, e, pm, gm, hm, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: vm,
  append: ui,
  attr: Ao,
  check_outros: wm,
  create_component: Kc,
  destroy_component: Zc,
  detach: rl,
  element: jo,
  group_outros: km,
  init: ym,
  insert: cl,
  mount_component: Jc,
  safe_not_equal: Cm,
  set_data: Fo,
  space: To,
  text: us,
  toggle_class: ja,
  transition_in: dl,
  transition_out: _l
} = window.__gradio__svelte__internal;
function Sm(i) {
  let e, t;
  return e = new Vc({}), {
    c() {
      Kc(e.$$.fragment);
    },
    m(n, s) {
      Jc(e, n, s), t = !0;
    },
    i(n) {
      t || (dl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _l(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zc(e, n);
    }
  };
}
function Mm(i) {
  let e, t;
  return e = new Uc({}), {
    c() {
      Kc(e.$$.fragment);
    },
    m(n, s) {
      Jc(e, n, s), t = !0;
    },
    i(n) {
      t || (dl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _l(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Zc(e, n);
    }
  };
}
function Fa(i) {
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
      e = jo("span"), t = us("- "), s = us(n), l = us(" -"), o = To(), a = us(r), Ao(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      cl(c, e, f), ui(e, t), ui(e, s), ui(e, l), cl(c, o, f), cl(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Fo(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Fo(a, r);
    },
    d(c) {
      c && (rl(e), rl(o), rl(a));
    }
  };
}
function zm(i) {
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
  const f = [Mm, Sm], h = [];
  function d(p, u) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), s = h[n] = f[n](i);
  let m = (
    /*mode*/
    i[3] !== "short" && Fa(i)
  );
  return {
    c() {
      e = jo("div"), t = jo("span"), s.c(), l = To(), r = us(o), a = To(), m && m.c(), Ao(t, "class", "icon-wrap svelte-kzcjhc"), ja(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Ao(e, "class", "wrap svelte-kzcjhc");
    },
    m(p, u) {
      cl(p, e, u), ui(e, t), h[n].m(t, null), ui(e, l), ui(e, r), ui(e, a), m && m.m(e, null), c = !0;
    },
    p(p, [u]) {
      let v = n;
      n = d(p), n !== v && (km(), _l(h[v], 1, 1, () => {
        h[v] = null;
      }), wm(), s = h[n], s || (s = h[n] = f[n](p), s.c()), dl(s, 1), s.m(t, null)), (!c || u & /*hovered*/
      16) && ja(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), (!c || u & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      p[1](
        /*defs*/
        p[5][
          /*type*/
          p[0]
        ] || /*defs*/
        p[5].file
      ) + "") && Fo(r, o), /*mode*/
      p[3] !== "short" ? m ? m.p(p, u) : (m = Fa(p), m.c(), m.m(e, null)) : m && (m.d(1), m = null);
    },
    i(p) {
      c || (dl(s), c = !0);
    },
    o(p) {
      _l(s), c = !1;
    },
    d(p) {
      p && rl(e), h[n].d(), m && m.d();
    }
  };
}
function Wm(i, e, t) {
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
class Gc extends vm {
  constructor(e) {
    super(), ym(this, e, Wm, zm, Cm, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: xm,
  append: so,
  attr: pn,
  check_outros: hs,
  create_component: Bl,
  destroy_component: Xl,
  detach: Gi,
  element: Ms,
  empty: Bm,
  group_outros: ds,
  init: Xm,
  insert: Qi,
  listen: Yl,
  mount_component: Dl,
  safe_not_equal: Ym,
  space: lo,
  toggle_class: Zn,
  transition_in: et,
  transition_out: yt
} = window.__gradio__svelte__internal;
function Ta(i) {
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
  ), c, f = t && Oa(i), h = s && Ua(i), d = o && Va(i), m = a && Na(i);
  return {
    c() {
      e = Ms("span"), f && f.c(), n = lo(), h && h.c(), l = lo(), d && d.c(), r = lo(), m && m.c(), pn(e, "class", "source-selection svelte-1jp3vgd"), pn(e, "data-testid", "source-select");
    },
    m(p, u) {
      Qi(p, e, u), f && f.m(e, null), so(e, n), h && h.m(e, null), so(e, l), d && d.m(e, null), so(e, r), m && m.m(e, null), c = !0;
    },
    p(p, u) {
      u & /*sources*/
      2 && (t = /*sources*/
      p[1].includes("upload")), t ? f ? (f.p(p, u), u & /*sources*/
      2 && et(f, 1)) : (f = Oa(p), f.c(), et(f, 1), f.m(e, n)) : f && (ds(), yt(f, 1, 1, () => {
        f = null;
      }), hs()), u & /*sources*/
      2 && (s = /*sources*/
      p[1].includes("microphone")), s ? h ? (h.p(p, u), u & /*sources*/
      2 && et(h, 1)) : (h = Ua(p), h.c(), et(h, 1), h.m(e, l)) : h && (ds(), yt(h, 1, 1, () => {
        h = null;
      }), hs()), u & /*sources*/
      2 && (o = /*sources*/
      p[1].includes("webcam")), o ? d ? (d.p(p, u), u & /*sources*/
      2 && et(d, 1)) : (d = Va(p), d.c(), et(d, 1), d.m(e, r)) : d && (ds(), yt(d, 1, 1, () => {
        d = null;
      }), hs()), u & /*sources*/
      2 && (a = /*sources*/
      p[1].includes("clipboard")), a ? m ? (m.p(p, u), u & /*sources*/
      2 && et(m, 1)) : (m = Na(p), m.c(), et(m, 1), m.m(e, null)) : m && (ds(), yt(m, 1, 1, () => {
        m = null;
      }), hs());
    },
    i(p) {
      c || (et(f), et(h), et(d), et(m), c = !0);
    },
    o(p) {
      yt(f), yt(h), yt(d), yt(m), c = !1;
    },
    d(p) {
      p && Gi(e), f && f.d(), h && h.d(), d && d.d(), m && m.d();
    }
  };
}
function Oa(i) {
  let e, t, n, s, l;
  return t = new Vc({}), {
    c() {
      e = Ms("button"), Bl(t.$$.fragment), pn(e, "class", "icon svelte-1jp3vgd"), pn(e, "aria-label", "Upload file"), Zn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Qi(o, e, r), Dl(t, e, null), n = !0, s || (l = Yl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zn(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (et(t.$$.fragment, o), n = !0);
    },
    o(o) {
      yt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gi(e), Xl(t), s = !1, l();
    }
  };
}
function Ua(i) {
  let e, t, n, s, l;
  return t = new q_({}), {
    c() {
      e = Ms("button"), Bl(t.$$.fragment), pn(e, "class", "icon svelte-1jp3vgd"), pn(e, "aria-label", "Record audio"), Zn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Qi(o, e, r), Dl(t, e, null), n = !0, s || (l = Yl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zn(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (et(t.$$.fragment, o), n = !0);
    },
    o(o) {
      yt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gi(e), Xl(t), s = !1, l();
    }
  };
}
function Va(i) {
  let e, t, n, s, l;
  return t = new Nc({}), {
    c() {
      e = Ms("button"), Bl(t.$$.fragment), pn(e, "class", "icon svelte-1jp3vgd"), pn(e, "aria-label", "Capture from camera"), Zn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Qi(o, e, r), Dl(t, e, null), n = !0, s || (l = Yl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zn(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (et(t.$$.fragment, o), n = !0);
    },
    o(o) {
      yt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gi(e), Xl(t), s = !1, l();
    }
  };
}
function Na(i) {
  let e, t, n, s, l;
  return t = new Uc({}), {
    c() {
      e = Ms("button"), Bl(t.$$.fragment), pn(e, "class", "icon svelte-1jp3vgd"), pn(e, "aria-label", "Paste from clipboard"), Zn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Qi(o, e, r), Dl(t, e, null), n = !0, s || (l = Yl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zn(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (et(t.$$.fragment, o), n = !0);
    },
    o(o) {
      yt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Gi(e), Xl(t), s = !1, l();
    }
  };
}
function Dm(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ta(i)
  );
  return {
    c() {
      n && n.c(), e = Bm();
    },
    m(s, l) {
      n && n.m(s, l), Qi(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && et(n, 1)) : (n = Ta(s), n.c(), et(n, 1), n.m(e.parentNode, e)) : n && (ds(), yt(n, 1, 1, () => {
        n = null;
      }), hs());
    },
    i(s) {
      t || (et(n), t = !0);
    },
    o(s) {
      yt(n), t = !1;
    },
    d(s) {
      s && Gi(e), n && n.d(s);
    }
  };
}
function Em(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(p, u, v, g) {
    function k(b) {
      return b instanceof v ? b : new v(function(M) {
        M(b);
      });
    }
    return new (v || (v = Promise))(function(b, M) {
      function W(X) {
        try {
          x(g.next(X));
        } catch (S) {
          M(S);
        }
      }
      function w(X) {
        try {
          x(g.throw(X));
        } catch (S) {
          M(S);
        }
      }
      function x(X) {
        X.done ? b(X.value) : k(X.value).then(W, w);
      }
      x((g = g.apply(p, u || [])).next());
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
  const f = () => c("upload"), h = () => c("microphone"), d = () => c("webcam"), m = () => c("clipboard");
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
    d,
    m
  ];
}
class Rm extends xm {
  constructor(e) {
    super(), Xm(this, e, Em, Dm, Ym, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Ui(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function fl() {
}
const Lm = (i) => i;
function Ka(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Qc = typeof window < "u";
let Za = Qc ? () => window.performance.now() : () => Date.now(), $c = Qc ? (i) => requestAnimationFrame(i) : fl;
const Ji = /* @__PURE__ */ new Set();
function ef(i) {
  Ji.forEach((e) => {
    e.c(i) || (Ji.delete(e), e.f());
  }), Ji.size !== 0 && $c(ef);
}
function Pm(i) {
  let e;
  return Ji.size === 0 && $c(ef), { promise: new Promise((t) => {
    Ji.add(e = { c: i, f: t });
  }), abort() {
    Ji.delete(e);
  } };
}
function qm(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Hm(i, { delay: e = 0, duration: t = 400, easing: n = Lm } = {}) {
  const s = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (l) => "opacity: " + l * s };
}
function Ja(i, { delay: e = 0, duration: t = 400, easing: n = qm, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [h, d] = Ka(s), [m, p] = Ka(l);
  return { delay: e, duration: t, easing: n, css: (u, v) => `
			transform: ${c} translate(${(1 - u) * h}${d}, ${(1 - u) * m}${p});
			opacity: ${a - f * v}` };
}
const Ei = [];
function Im(i, e = fl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (a = o, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = o, t)) {
      const c = !Ei.length;
      for (const f of n) f[1](), Ei.push(f, i);
      if (c) {
        for (let f = 0; f < Ei.length; f += 2) Ei[f][0](Ei[f + 1]);
        Ei.length = 0;
      }
    }
    var r, a;
  }
  function l(o) {
    s(o(i));
  }
  return { set: s, update: l, subscribe: function(o, r = fl) {
    const a = [o, r];
    return n.add(a), n.size === 1 && (t = e(s, l) || fl), o(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Ga(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Oo(i, e, t, n) {
  if (typeof t == "number" || Ga(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = (l + (i.opts.stiffness * s - i.opts.damping * l) * i.inv_mass) * i.dt;
    return Math.abs(o) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, Ga(t) ? new Date(t.getTime() + o) : t + o);
  }
  if (Array.isArray(t)) return t.map((s, l) => Oo(i, e[l], t[l], n[l]));
  if (typeof t == "object") {
    const s = {};
    for (const l in t) s[l] = Oo(i, e[l], t[l], n[l]);
    return s;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function Qa(i, e = {}) {
  const t = Im(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, h = 1, d = 0, m = !1;
  function p(v, g = {}) {
    f = v;
    const k = a = {};
    return i == null || g.hard || u.stiffness >= 1 && u.damping >= 1 ? (m = !0, o = Za(), c = v, t.set(i = f), Promise.resolve()) : (g.soft && (d = 1 / (60 * (g.soft === !0 ? 0.5 : +g.soft)), h = 0), r || (o = Za(), m = !1, r = Pm((b) => {
      if (m) return m = !1, r = null, !1;
      h = Math.min(h + d, 1);
      const M = { inv_mass: h, opts: u, settled: !0, dt: 60 * (b - o) / 1e3 }, W = Oo(M, c, i, f);
      return o = b, c = i, t.set(i = W), M.settled && (r = null), !M.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        k === a && b();
      });
    }));
  }
  const u = { set: p, update: (v, g) => p(v(f, i), g), subscribe: t.subscribe, stiffness: n, damping: s, precision: l };
  return u;
}
const {
  SvelteComponent: Am,
  append: Kt,
  attr: ge,
  component_subscribe: $a,
  detach: jm,
  element: Fm,
  init: Tm,
  insert: Om,
  noop: er,
  safe_not_equal: Um,
  set_style: Is,
  svg_element: Zt,
  toggle_class: tr
} = window.__gradio__svelte__internal, { onMount: Vm } = window.__gradio__svelte__internal;
function Nm(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d;
  return {
    c() {
      e = Fm("div"), t = Zt("svg"), n = Zt("g"), s = Zt("path"), l = Zt("path"), o = Zt("path"), r = Zt("path"), a = Zt("g"), c = Zt("path"), f = Zt("path"), h = Zt("path"), d = Zt("path"), ge(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ge(s, "fill", "#FF7C00"), ge(s, "fill-opacity", "0.4"), ge(s, "class", "svelte-43sxxs"), ge(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ge(l, "fill", "#FF7C00"), ge(l, "class", "svelte-43sxxs"), ge(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ge(o, "fill", "#FF7C00"), ge(o, "fill-opacity", "0.4"), ge(o, "class", "svelte-43sxxs"), ge(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ge(r, "fill", "#FF7C00"), ge(r, "class", "svelte-43sxxs"), Is(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ge(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ge(c, "fill", "#FF7C00"), ge(c, "fill-opacity", "0.4"), ge(c, "class", "svelte-43sxxs"), ge(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ge(f, "fill", "#FF7C00"), ge(f, "class", "svelte-43sxxs"), ge(h, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ge(h, "fill", "#FF7C00"), ge(h, "fill-opacity", "0.4"), ge(h, "class", "svelte-43sxxs"), ge(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ge(d, "fill", "#FF7C00"), ge(d, "class", "svelte-43sxxs"), Is(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ge(t, "viewBox", "-1200 -1200 3000 3000"), ge(t, "fill", "none"), ge(t, "xmlns", "http://www.w3.org/2000/svg"), ge(t, "class", "svelte-43sxxs"), ge(e, "class", "svelte-43sxxs"), tr(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(m, p) {
      Om(m, e, p), Kt(e, t), Kt(t, n), Kt(n, s), Kt(n, l), Kt(n, o), Kt(n, r), Kt(t, a), Kt(a, c), Kt(a, f), Kt(a, h), Kt(a, d);
    },
    p(m, [p]) {
      p & /*$top*/
      2 && Is(n, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), p & /*$bottom*/
      4 && Is(a, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), p & /*margin*/
      1 && tr(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: er,
    o: er,
    d(m) {
      m && jm(e);
    }
  };
}
function Km(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(m, p, u, v) {
    function g(k) {
      return k instanceof u ? k : new u(function(b) {
        b(k);
      });
    }
    return new (u || (u = Promise))(function(k, b) {
      function M(x) {
        try {
          w(v.next(x));
        } catch (X) {
          b(X);
        }
      }
      function W(x) {
        try {
          w(v.throw(x));
        } catch (X) {
          b(X);
        }
      }
      function w(x) {
        x.done ? k(x.value) : g(x.value).then(M, W);
      }
      w((v = v.apply(m, p || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = Qa([0, 0]);
  $a(i, r, (m) => t(1, n = m));
  const a = Qa([0, 0]);
  $a(i, a, (m) => t(2, s = m));
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
  return Vm(() => (d(), () => c = !0)), i.$$set = (m) => {
    "margin" in m && t(0, o = m.margin);
  }, [o, n, s, r, a];
}
class Zm extends Am {
  constructor(e) {
    super(), Tm(this, e, Km, Nm, Um, { margin: 0 });
  }
}
const {
  SvelteComponent: Jm,
  append: hi,
  attr: tn,
  binding_callbacks: nr,
  check_outros: Uo,
  create_component: tf,
  create_slot: nf,
  destroy_component: sf,
  destroy_each: lf,
  detach: ue,
  element: mn,
  empty: $i,
  ensure_array_like: ml,
  get_all_dirty_from_scope: of,
  get_slot_changes: af,
  group_outros: Vo,
  init: Gm,
  insert: he,
  mount_component: rf,
  noop: No,
  safe_not_equal: Qm,
  set_data: Tt,
  set_style: Nn,
  space: Ft,
  text: Ae,
  toggle_class: At,
  transition_in: en,
  transition_out: gn,
  update_slot_base: cf
} = window.__gradio__svelte__internal, { tick: $m } = window.__gradio__svelte__internal, { onDestroy: e1 } = window.__gradio__svelte__internal, { createEventDispatcher: t1 } = window.__gradio__svelte__internal, n1 = (i) => ({}), ir = (i) => ({}), i1 = (i) => ({}), sr = (i) => ({});
function lr(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function or(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function s1(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new xl({
    props: {
      Icon: Tc,
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
  ), f = nf(
    c,
    i,
    /*$$scope*/
    i[29],
    ir
  );
  return {
    c() {
      e = mn("div"), tf(t.$$.fragment), n = Ft(), s = mn("span"), o = Ae(l), r = Ft(), f && f.c(), tn(e, "class", "clear-status svelte-16nch4a"), tn(s, "class", "error svelte-16nch4a");
    },
    m(h, d) {
      he(h, e, d), rf(t, e, null), he(h, n, d), he(h, s, d), hi(s, o), he(h, r, d), f && f.m(h, d), a = !0;
    },
    p(h, d) {
      const m = {};
      d[0] & /*i18n*/
      2 && (m.label = /*i18n*/
      h[1]("common.clear")), t.$set(m), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      h[1]("common.error") + "") && Tt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && cf(
        f,
        c,
        h,
        /*$$scope*/
        h[29],
        a ? af(
          c,
          /*$$scope*/
          h[29],
          d,
          n1
        ) : of(
          /*$$scope*/
          h[29]
        ),
        ir
      );
    },
    i(h) {
      a || (en(t.$$.fragment, h), en(f, h), a = !0);
    },
    o(h) {
      gn(t.$$.fragment, h), gn(f, h), a = !1;
    },
    d(h) {
      h && (ue(e), ue(n), ue(s), ue(r)), sf(t), f && f.d(h);
    }
  };
}
function l1(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && ar(i)
  );
  function h(b, M) {
    if (
      /*progress*/
      b[7]
    ) return r1;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return a1;
    if (
      /*queue_position*/
      b[2] === 0
    ) return o1;
  }
  let d = h(i), m = d && d(i), p = (
    /*timer*/
    i[5] && fr(i)
  );
  const u = [h1, u1], v = [];
  function g(b, M) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = g(i)) && (o = v[l] = u[l](i));
  let k = !/*timer*/
  i[5] && pr(i);
  return {
    c() {
      f && f.c(), e = Ft(), t = mn("div"), m && m.c(), n = Ft(), p && p.c(), s = Ft(), o && o.c(), r = Ft(), k && k.c(), a = $i(), tn(t, "class", "progress-text svelte-16nch4a"), At(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), At(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(b, M) {
      f && f.m(b, M), he(b, e, M), he(b, t, M), m && m.m(t, null), hi(t, n), p && p.m(t, null), he(b, s, M), ~l && v[l].m(b, M), he(b, r, M), k && k.m(b, M), he(b, a, M), c = !0;
    },
    p(b, M) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? f ? f.p(b, M) : (f = ar(b), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = h(b)) && m ? m.p(b, M) : (m && m.d(1), m = d && d(b), m && (m.c(), m.m(t, n))), /*timer*/
      b[5] ? p ? p.p(b, M) : (p = fr(b), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!c || M[0] & /*variant*/
      256) && At(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!c || M[0] & /*variant*/
      256) && At(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let W = l;
      l = g(b), l === W ? ~l && v[l].p(b, M) : (o && (Vo(), gn(v[W], 1, 1, () => {
        v[W] = null;
      }), Uo()), ~l ? (o = v[l], o ? o.p(b, M) : (o = v[l] = u[l](b), o.c()), en(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      b[5] ? k && (Vo(), gn(k, 1, 1, () => {
        k = null;
      }), Uo()) : k ? (k.p(b, M), M[0] & /*timer*/
      32 && en(k, 1)) : (k = pr(b), k.c(), en(k, 1), k.m(a.parentNode, a));
    },
    i(b) {
      c || (en(o), en(k), c = !0);
    },
    o(b) {
      gn(o), gn(k), c = !1;
    },
    d(b) {
      b && (ue(e), ue(t), ue(s), ue(r), ue(a)), f && f.d(b), m && m.d(), p && p.d(), ~l && v[l].d(b), k && k.d(b);
    }
  };
}
function ar(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = mn("div"), tn(e, "class", "eta-bar svelte-16nch4a"), Nn(e, "transform", t);
    },
    m(n, s) {
      he(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Nn(e, "transform", t);
    },
    d(n) {
      n && ue(e);
    }
  };
}
function o1(i) {
  let e;
  return {
    c() {
      e = Ae("processing |");
    },
    m(t, n) {
      he(t, e, n);
    },
    p: No,
    d(t) {
      t && ue(e);
    }
  };
}
function a1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = Ae("queue: "), n = Ae(t), s = Ae("/"), l = Ae(
        /*queue_size*/
        i[3]
      ), o = Ae(" |");
    },
    m(r, a) {
      he(r, e, a), he(r, n, a), he(r, s, a), he(r, l, a), he(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Tt(n, t), a[0] & /*queue_size*/
      8 && Tt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (ue(e), ue(n), ue(s), ue(l), ue(o));
    }
  };
}
function r1(i) {
  let e, t = ml(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = cr(or(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = $i();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      he(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = ml(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = or(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = cr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ue(e), lf(n, s);
    }
  };
}
function rr(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, h) {
    return (
      /*p*/
      f[41].length != null ? f1 : c1
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Ft(), n = Ae(t), s = Ae(" | "), o = Ae(l);
    },
    m(f, h) {
      c.m(f, h), he(f, e, h), he(f, n, h), he(f, s, h), he(f, o, h);
    },
    p(f, h) {
      a === (a = r(f)) && c ? c.p(f, h) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), h[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && Tt(n, t);
    },
    d(f) {
      f && (ue(e), ue(n), ue(s), ue(o)), c.d(f);
    }
  };
}
function c1(i) {
  let e = Ui(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Ae(e);
    },
    m(n, s) {
      he(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = Ui(
        /*p*/
        n[41].index || 0
      ) + "") && Tt(t, e);
    },
    d(n) {
      n && ue(t);
    }
  };
}
function f1(i) {
  let e = Ui(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = Ui(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = Ae(e), n = Ae("/"), l = Ae(s);
    },
    m(o, r) {
      he(o, t, r), he(o, n, r), he(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Ui(
        /*p*/
        o[41].index || 0
      ) + "") && Tt(t, e), r[0] & /*progress*/
      128 && s !== (s = Ui(
        /*p*/
        o[41].length
      ) + "") && Tt(l, s);
    },
    d(o) {
      o && (ue(t), ue(n), ue(l));
    }
  };
}
function cr(i) {
  let e, t = (
    /*p*/
    i[41].index != null && rr(i)
  );
  return {
    c() {
      t && t.c(), e = $i();
    },
    m(n, s) {
      t && t.m(n, s), he(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = rr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ue(e), t && t.d(n);
    }
  };
}
function fr(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = Ae(
        /*formatted_timer*/
        i[20]
      ), n = Ae(t), s = Ae("s");
    },
    m(l, o) {
      he(l, e, o), he(l, n, o), he(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Tt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Tt(n, t);
    },
    d(l) {
      l && (ue(e), ue(n), ue(s));
    }
  };
}
function u1(i) {
  let e, t;
  return e = new Zm({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      tf(e.$$.fragment);
    },
    m(n, s) {
      rf(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*variant*/
      256 && (l.margin = /*variant*/
      n[8] === "default"), e.$set(l);
    },
    i(n) {
      t || (en(e.$$.fragment, n), t = !0);
    },
    o(n) {
      gn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      sf(e, n);
    }
  };
}
function h1(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && ur(i)
  );
  return {
    c() {
      e = mn("div"), t = mn("div"), r && r.c(), n = Ft(), s = mn("div"), l = mn("div"), tn(t, "class", "progress-level-inner svelte-16nch4a"), tn(l, "class", "progress-bar svelte-16nch4a"), Nn(l, "width", o), tn(s, "class", "progress-bar-wrap svelte-16nch4a"), tn(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      he(a, e, c), hi(e, t), r && r.m(t, null), hi(e, n), hi(e, s), hi(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = ur(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Nn(l, "width", o);
    },
    i: No,
    o: No,
    d(a) {
      a && ue(e), r && r.d(), i[31](null);
    }
  };
}
function ur(i) {
  let e, t = ml(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = gr(lr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = $i();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      he(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = ml(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = lr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = gr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ue(e), lf(n, s);
    }
  };
}
function hr(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && d1()
  ), o = (
    /*p*/
    i[41].desc != null && dr(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && _r()
  ), a = (
    /*progress_level*/
    i[14] != null && mr(i)
  );
  return {
    c() {
      l && l.c(), e = Ft(), o && o.c(), t = Ft(), r && r.c(), n = Ft(), a && a.c(), s = $i();
    },
    m(c, f) {
      l && l.m(c, f), he(c, e, f), o && o.m(c, f), he(c, t, f), r && r.m(c, f), he(c, n, f), a && a.m(c, f), he(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = dr(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = _r(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = mr(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (ue(e), ue(t), ue(n), ue(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function d1(i) {
  let e;
  return {
    c() {
      e = Ae(" /");
    },
    m(t, n) {
      he(t, e, n);
    },
    d(t) {
      t && ue(e);
    }
  };
}
function dr(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = Ae(e);
    },
    m(n, s) {
      he(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Tt(t, e);
    },
    d(n) {
      n && ue(t);
    }
  };
}
function _r(i) {
  let e;
  return {
    c() {
      e = Ae("-");
    },
    m(t, n) {
      he(t, e, n);
    },
    d(t) {
      t && ue(e);
    }
  };
}
function mr(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = Ae(e), n = Ae("%");
    },
    m(s, l) {
      he(s, t, l), he(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && Tt(t, e);
    },
    d(s) {
      s && (ue(t), ue(n));
    }
  };
}
function gr(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && hr(i)
  );
  return {
    c() {
      t && t.c(), e = $i();
    },
    m(n, s) {
      t && t.m(n, s), he(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = hr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ue(e), t && t.d(n);
    }
  };
}
function pr(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = nf(
    l,
    i,
    /*$$scope*/
    i[29],
    sr
  );
  return {
    c() {
      e = mn("p"), t = Ae(
        /*loading_text*/
        i[9]
      ), n = Ft(), o && o.c(), tn(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      he(r, e, a), hi(e, t), he(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && Tt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && cf(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? af(
          l,
          /*$$scope*/
          r[29],
          a,
          i1
        ) : of(
          /*$$scope*/
          r[29]
        ),
        sr
      );
    },
    i(r) {
      s || (en(o, r), s = !0);
    },
    o(r) {
      gn(o, r), s = !1;
    },
    d(r) {
      r && (ue(e), ue(n)), o && o.d(r);
    }
  };
}
function _1(i) {
  let e, t, n, s, l;
  const o = [l1, s1], r = [];
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
      e = mn("div"), n && n.c(), tn(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), At(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), At(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), At(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), At(
        e,
        "border",
        /*border*/
        i[12]
      ), Nn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Nn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      he(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let h = t;
      t = a(c), t === h ? ~t && r[t].p(c, f) : (n && (Vo(), gn(r[h], 1, 1, () => {
        r[h] = null;
      }), Uo()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), en(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && tn(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && At(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && At(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && At(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && At(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && Nn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Nn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      l || (en(n), l = !0);
    },
    o(c) {
      gn(n), l = !1;
    },
    d(c) {
      c && ue(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var m1 = function(i, e, t, n) {
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
let As = [], oo = !1;
function g1(i) {
  return m1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (As.push(e), !oo) oo = !0;
      else return;
      yield $m(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < As.length; s++) {
          const o = As[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), oo = !1, As = [];
      });
    }
  });
}
function p1(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = t1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: h } = e, { scroll_to_output: d = !1 } = e, { timer: m = !0 } = e, { show_progress: p = "full" } = e, { message: u = null } = e, { progress: v = null } = e, { variant: g = "default" } = e, { loading_text: k = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: M = !1 } = e, { border: W = !1 } = e, { autoscroll: w } = e, x, X = !1, S = 0, C = 0, R = null, y = null, H = 0, F = null, A, D = null, Y = !0;
  const P = () => {
    t(0, a = t(27, R = t(19, U = null))), t(25, S = performance.now()), t(26, C = 0), X = !0, se();
  };
  function se() {
    requestAnimationFrame(() => {
      t(26, C = (performance.now() - S) / 1e3), X && se();
    });
  }
  function J() {
    t(26, C = 0), t(0, a = t(27, R = t(19, U = null))), X && (X = !1);
  }
  e1(() => {
    X && J();
  });
  let U = null;
  function I(q) {
    nr[q ? "unshift" : "push"](() => {
      D = q, t(16, D), t(7, v), t(14, F), t(15, A);
    });
  }
  const re = () => {
    o("clear_status");
  };
  function Q(q) {
    nr[q ? "unshift" : "push"](() => {
      x = q, t(13, x);
    });
  }
  return i.$$set = (q) => {
    "i18n" in q && t(1, r = q.i18n), "eta" in q && t(0, a = q.eta), "queue_position" in q && t(2, c = q.queue_position), "queue_size" in q && t(3, f = q.queue_size), "status" in q && t(4, h = q.status), "scroll_to_output" in q && t(22, d = q.scroll_to_output), "timer" in q && t(5, m = q.timer), "show_progress" in q && t(6, p = q.show_progress), "message" in q && t(23, u = q.message), "progress" in q && t(7, v = q.progress), "variant" in q && t(8, g = q.variant), "loading_text" in q && t(9, k = q.loading_text), "absolute" in q && t(10, b = q.absolute), "translucent" in q && t(11, M = q.translucent), "border" in q && t(12, W = q.border), "autoscroll" in q && t(24, w = q.autoscroll), "$$scope" in q && t(29, l = q.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = R), a != null && R !== a && (t(28, y = (performance.now() - S) / 1e3 + a), t(19, U = y.toFixed(1)), t(27, R = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, H = y === null || y <= 0 || !C ? null : Math.min(C / y, 1)), i.$$.dirty[0] & /*progress*/
    128 && v != null && t(18, Y = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (v != null ? t(14, F = v.map((q) => {
      if (q.index != null && q.length != null)
        return q.index / q.length;
      if (q.progress != null)
        return q.progress;
    })) : t(14, F = null), F ? (t(15, A = F[F.length - 1]), D && (A === 0 ? t(16, D.style.transition = "0", D) : t(16, D.style.transition = "150ms", D))) : t(15, A = void 0)), i.$$.dirty[0] & /*status*/
    16 && (h === "pending" ? P() : J()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && x && d && (h === "pending" || h === "complete") && g1(x, w), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = C.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    h,
    m,
    p,
    v,
    g,
    k,
    b,
    M,
    W,
    x,
    F,
    A,
    D,
    H,
    Y,
    U,
    n,
    o,
    d,
    u,
    w,
    S,
    C,
    R,
    y,
    l,
    s,
    I,
    re,
    Q
  ];
}
class b1 extends Jm {
  constructor(e) {
    super(), Gm(
      this,
      e,
      p1,
      _1,
      Qm,
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
const { setContext: xw, getContext: v1 } = window.__gradio__svelte__internal, w1 = "WORKER_PROXY_CONTEXT_KEY";
function ff() {
  return v1(w1);
}
function k1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function uf(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function hf(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!k1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function y1(i) {
  if (i == null || !hf(i))
    return i;
  const e = ff();
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
      type: uf(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: C1,
  assign: gl,
  check_outros: df,
  compute_rest_props: br,
  create_slot: aa,
  detach: El,
  element: _f,
  empty: mf,
  exclude_internal_props: S1,
  get_all_dirty_from_scope: ra,
  get_slot_changes: ca,
  get_spread_update: gf,
  group_outros: pf,
  init: M1,
  insert: Rl,
  listen: bf,
  prevent_default: z1,
  safe_not_equal: W1,
  set_attributes: pl,
  transition_in: vi,
  transition_out: wi,
  update_slot_base: fa
} = window.__gradio__svelte__internal, { createEventDispatcher: x1 } = window.__gradio__svelte__internal;
function B1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = aa(
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
    c = gl(c, a[f]);
  return {
    c() {
      e = _f("a"), r && r.c(), pl(e, c);
    },
    m(f, h) {
      Rl(f, e, h), r && r.m(e, null), n = !0, s || (l = bf(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, h) {
      r && r.p && (!n || h & /*$$scope*/
      128) && fa(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? ca(
          o,
          /*$$scope*/
          f[7],
          h,
          null
        ) : ra(
          /*$$scope*/
          f[7]
        ),
        null
      ), pl(e, c = gf(a, [
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
      n || (vi(r, f), n = !0);
    },
    o(f) {
      wi(r, f), n = !1;
    },
    d(f) {
      f && El(e), r && r.d(f), s = !1, l();
    }
  };
}
function X1(i) {
  let e, t, n, s;
  const l = [D1, Y1], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = mf();
    },
    m(a, c) {
      o[e].m(a, c), Rl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (pf(), wi(o[f], 1, 1, () => {
        o[f] = null;
      }), df(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), vi(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (vi(t), s = !0);
    },
    o(a) {
      wi(t), s = !1;
    },
    d(a) {
      a && El(n), o[e].d(a);
    }
  };
}
function Y1(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = aa(
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
    a = gl(a, r[c]);
  return {
    c() {
      e = _f("a"), o && o.c(), pl(e, a);
    },
    m(c, f) {
      Rl(c, e, f), o && o.m(e, null), t = !0, n || (s = bf(e, "click", z1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && fa(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? ca(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ra(
          /*$$scope*/
          c[7]
        ),
        null
      ), pl(e, a = gf(r, [
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
      t || (vi(o, c), t = !0);
    },
    o(c) {
      wi(o, c), t = !1;
    },
    d(c) {
      c && El(e), o && o.d(c), n = !1, s();
    }
  };
}
function D1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = aa(
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
      128) && fa(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? ca(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : ra(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (vi(n, s), e = !0);
    },
    o(s) {
      wi(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function E1(i) {
  let e, t, n, s, l;
  const o = [X1, B1], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && hf(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = mf();
    },
    m(c, f) {
      r[t].m(c, f), Rl(c, s, f), l = !0;
    },
    p(c, [f]) {
      let h = t;
      t = a(c, f), t === h ? r[t].p(c, f) : (pf(), wi(r[h], 1, 1, () => {
        r[h] = null;
      }), df(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), vi(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (vi(n), l = !0);
    },
    o(c) {
      wi(n), l = !1;
    },
    d(c) {
      c && El(s), r[t].d(c);
    }
  };
}
function R1(i, e, t) {
  const n = ["href", "download"];
  let s = br(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(p, u, v, g) {
    function k(b) {
      return b instanceof v ? b : new v(function(M) {
        M(b);
      });
    }
    return new (v || (v = Promise))(function(b, M) {
      function W(X) {
        try {
          x(g.next(X));
        } catch (S) {
          M(S);
        }
      }
      function w(X) {
        try {
          x(g.throw(X));
        } catch (S) {
          M(S);
        }
      }
      function x(X) {
        X.done ? b(X.value) : k(X.value).then(W, w);
      }
      x((g = g.apply(p, u || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = x1();
  let h = !1;
  const d = ff();
  function m() {
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
        const g = new Blob(
          [v.body],
          {
            type: uf(v.headers, "content-type")
          }
        ), k = URL.createObjectURL(g), b = document.createElement("a");
        b.href = k, b.download = c, b.click(), URL.revokeObjectURL(k);
      }).finally(() => {
        t(2, h = !1);
      });
    });
  }
  return i.$$set = (p) => {
    e = gl(gl({}, e), S1(p)), t(6, s = br(e, n)), "href" in p && t(0, a = p.href), "download" in p && t(1, c = p.download), "$$scope" in p && t(7, o = p.$$scope);
  }, [
    a,
    c,
    h,
    f,
    d,
    m,
    s,
    o,
    l
  ];
}
class L1 extends C1 {
  constructor(e) {
    super(), M1(this, e, R1, E1, W1, { href: 0, download: 1 });
  }
}
var P1 = Object.defineProperty, q1 = (i, e, t) => e in i ? P1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, bn = (i, e, t) => (q1(i, typeof e != "symbol" ? e + "" : e, t), t), vf = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, os = (i, e, t) => (vf(i, e, "read from private field"), t ? t.call(i) : e.get(i)), H1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, I1 = (i, e, t, n) => (vf(i, e, "write to private field"), e.set(i, t), t), Tn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function wf(i, e) {
  return i.map(
    (t) => new A1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class A1 {
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
    bn(this, "path"), bn(this, "url"), bn(this, "orig_name"), bn(this, "size"), bn(this, "blob"), bn(this, "is_stream"), bn(this, "mime_type"), bn(this, "alt_text"), bn(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Bw extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = os(this, Tn) + t; ; ) {
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
        I1(this, Tn, t);
      },
      flush: (t) => {
        if (os(this, Tn) === "")
          return;
        const n = e.allowCR && os(this, Tn).endsWith("\r") ? os(this, Tn).slice(0, -1) : os(this, Tn);
        t.enqueue(n);
      }
    }), H1(this, Tn, "");
  }
}
Tn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: j1,
  append: St,
  attr: ci,
  detach: kf,
  element: fi,
  init: F1,
  insert: yf,
  noop: vr,
  safe_not_equal: T1,
  set_data: bl,
  set_style: ao,
  space: Ko,
  text: Vi,
  toggle_class: wr
} = window.__gradio__svelte__internal, { onMount: O1, createEventDispatcher: U1, onDestroy: V1 } = window.__gradio__svelte__internal;
function kr(i) {
  let e, t, n, s, l = _s(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), h;
  return {
    c() {
      e = fi("div"), t = fi("span"), n = fi("div"), s = fi("progress"), o = Vi(l), a = Ko(), c = fi("span"), h = Vi(f), ao(s, "visibility", "hidden"), ao(s, "height", "0"), ao(s, "width", "0"), s.value = r = _s(
        /*file_to_display*/
        i[2]
      ), ci(s, "max", "100"), ci(s, "class", "svelte-cr2edf"), ci(n, "class", "progress-bar svelte-cr2edf"), ci(c, "class", "file-name svelte-cr2edf"), ci(e, "class", "file svelte-cr2edf");
    },
    m(d, m) {
      yf(d, e, m), St(e, t), St(t, n), St(n, s), St(s, o), St(e, a), St(e, c), St(c, h);
    },
    p(d, m) {
      m & /*file_to_display*/
      4 && l !== (l = _s(
        /*file_to_display*/
        d[2]
      ) + "") && bl(o, l), m & /*file_to_display*/
      4 && r !== (r = _s(
        /*file_to_display*/
        d[2]
      )) && (s.value = r), m & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && bl(h, f);
    },
    d(d) {
      d && kf(e);
    }
  };
}
function N1(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, h = (
    /*file_to_display*/
    i[2] && kr(i)
  );
  return {
    c() {
      e = fi("div"), t = fi("span"), n = Vi("Uploading "), l = Vi(s), o = Ko(), a = Vi(r), c = Vi("..."), f = Ko(), h && h.c(), ci(t, "class", "uploading svelte-cr2edf"), ci(e, "class", "wrap svelte-cr2edf"), wr(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, m) {
      yf(d, e, m), St(e, t), St(t, n), St(t, l), St(t, o), St(t, a), St(t, c), St(e, f), h && h.m(e, null);
    },
    p(d, [m]) {
      m & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      d[0].length + "") && bl(l, s), m & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && bl(a, r), /*file_to_display*/
      d[2] ? h ? h.p(d, m) : (h = kr(d), h.c(), h.m(e, null)) : h && (h.d(1), h = null), m & /*progress*/
      2 && wr(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: vr,
    o: vr,
    d(d) {
      d && kf(e), h && h.d();
    }
  };
}
function _s(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function K1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += _s(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Z1(i, e, t) {
  var n = this && this.__awaiter || function(u, v, g, k) {
    function b(M) {
      return M instanceof g ? M : new g(function(W) {
        W(M);
      });
    }
    return new (g || (g = Promise))(function(M, W) {
      function w(S) {
        try {
          X(k.next(S));
        } catch (C) {
          W(C);
        }
      }
      function x(S) {
        try {
          X(k.throw(S));
        } catch (C) {
          W(C);
        }
      }
      function X(S) {
        S.done ? M(S.value) : b(S.value).then(w, x);
      }
      X((k = k.apply(u, v || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, h, d = o.map((u) => Object.assign(Object.assign({}, u), { progress: 0 }));
  const m = U1();
  function p(u, v) {
    t(0, d = d.map((g) => (g.orig_name === u && (g.progress += v), g)));
  }
  return O1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(u) {
      return n(this, void 0, void 0, function* () {
        const v = JSON.parse(u.data);
        c || t(1, c = !0), v.msg === "done" ? (a == null || a.close(), m("done")) : (t(7, f = v), p(v.orig_name, v.chunk_size));
      });
    };
  })), V1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (u) => {
    "upload_id" in u && t(3, s = u.upload_id), "root" in u && t(4, l = u.root), "files" in u && t(5, o = u.files), "stream_handler" in u && t(6, r = u.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && K1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class J1 extends j1 {
  constructor(e) {
    super(), F1(this, e, Z1, N1, T1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: G1,
  append: yr,
  attr: ut,
  binding_callbacks: Q1,
  bubble: Gn,
  check_outros: Cf,
  create_component: $1,
  create_slot: Sf,
  destroy_component: e0,
  detach: Ll,
  element: Zo,
  empty: Mf,
  get_all_dirty_from_scope: zf,
  get_slot_changes: Wf,
  group_outros: xf,
  init: t0,
  insert: Pl,
  listen: Dt,
  mount_component: n0,
  prevent_default: Qn,
  run_all: i0,
  safe_not_equal: s0,
  set_style: Bf,
  space: l0,
  stop_propagation: $n,
  toggle_class: st,
  transition_in: Kn,
  transition_out: ki,
  update_slot_base: Xf
} = window.__gradio__svelte__internal, { createEventDispatcher: o0, tick: a0 } = window.__gradio__svelte__internal;
function r0(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const d = (
    /*#slots*/
    i[26].default
  ), m = Sf(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Zo("button"), m && m.c(), t = l0(), n = Zo("input"), ut(n, "aria-label", "file upload"), ut(n, "data-testid", "file-upload"), ut(n, "type", "file"), ut(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, ut(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), ut(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ut(n, "class", "svelte-1s26xmt"), ut(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ut(e, "class", "svelte-1s26xmt"), st(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), st(
        e,
        "center",
        /*center*/
        i[4]
      ), st(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), st(
        e,
        "flex",
        /*flex*/
        i[5]
      ), st(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Bf(e, "height", "100%");
    },
    m(p, u) {
      Pl(p, e, u), m && m.m(e, null), yr(e, t), yr(e, n), i[34](n), c = !0, f || (h = [
        Dt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Dt(e, "drag", $n(Qn(
          /*drag_handler*/
          i[27]
        ))),
        Dt(e, "dragstart", $n(Qn(
          /*dragstart_handler*/
          i[28]
        ))),
        Dt(e, "dragend", $n(Qn(
          /*dragend_handler*/
          i[29]
        ))),
        Dt(e, "dragover", $n(Qn(
          /*dragover_handler*/
          i[30]
        ))),
        Dt(e, "dragenter", $n(Qn(
          /*dragenter_handler*/
          i[31]
        ))),
        Dt(e, "dragleave", $n(Qn(
          /*dragleave_handler*/
          i[32]
        ))),
        Dt(e, "drop", $n(Qn(
          /*drop_handler*/
          i[33]
        ))),
        Dt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Dt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Dt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Dt(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(p, u) {
      m && m.p && (!c || u[0] & /*$$scope*/
      33554432) && Xf(
        m,
        d,
        p,
        /*$$scope*/
        p[25],
        c ? Wf(
          d,
          /*$$scope*/
          p[25],
          u,
          null
        ) : zf(
          /*$$scope*/
          p[25]
        ),
        null
      ), (!c || u[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      p[16] || void 0)) && ut(n, "accept", s), (!c || u[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      p[6] === "multiple" || void 0)) && (n.multiple = l), (!c || u[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      p[6] === "directory" || void 0)) && ut(n, "webkitdirectory", o), (!c || u[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      p[6] === "directory" || void 0)) && ut(n, "mozdirectory", r), (!c || u[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      p[9] ? -1 : 0)) && ut(e, "tabindex", a), (!c || u[0] & /*hidden*/
      512) && st(
        e,
        "hidden",
        /*hidden*/
        p[9]
      ), (!c || u[0] & /*center*/
      16) && st(
        e,
        "center",
        /*center*/
        p[4]
      ), (!c || u[0] & /*boundedheight*/
      8) && st(
        e,
        "boundedheight",
        /*boundedheight*/
        p[3]
      ), (!c || u[0] & /*flex*/
      32) && st(
        e,
        "flex",
        /*flex*/
        p[5]
      ), (!c || u[0] & /*disable_click*/
      128) && st(
        e,
        "disable_click",
        /*disable_click*/
        p[7]
      );
    },
    i(p) {
      c || (Kn(m, p), c = !0);
    },
    o(p) {
      ki(m, p), c = !1;
    },
    d(p) {
      p && Ll(e), m && m.d(p), i[34](null), f = !1, i0(h);
    }
  };
}
function c0(i) {
  let e, t, n = !/*hidden*/
  i[9] && Cr(i);
  return {
    c() {
      n && n.c(), e = Mf();
    },
    m(s, l) {
      n && n.m(s, l), Pl(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (xf(), ki(n, 1, 1, () => {
        n = null;
      }), Cf()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && Kn(n, 1)) : (n = Cr(s), n.c(), Kn(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (Kn(n), t = !0);
    },
    o(s) {
      ki(n), t = !1;
    },
    d(s) {
      s && Ll(e), n && n.d(s);
    }
  };
}
function f0(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Sf(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Zo("button"), r && r.c(), ut(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ut(e, "class", "svelte-1s26xmt"), st(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), st(
        e,
        "center",
        /*center*/
        i[4]
      ), st(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), st(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Bf(e, "height", "100%");
    },
    m(a, c) {
      Pl(a, e, c), r && r.m(e, null), n = !0, s || (l = Dt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Xf(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Wf(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : zf(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ut(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && st(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && st(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && st(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && st(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Kn(r, a), n = !0);
    },
    o(a) {
      ki(r, a), n = !1;
    },
    d(a) {
      a && Ll(e), r && r.d(a), s = !1, l();
    }
  };
}
function Cr(i) {
  let e, t;
  return e = new J1({
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
      $1(e.$$.fragment);
    },
    m(n, s) {
      n0(e, n, s), t = !0;
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
      t || (Kn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ki(e.$$.fragment, n), t = !1;
    },
    d(n) {
      e0(e, n);
    }
  };
}
function u0(i) {
  let e, t, n, s;
  const l = [f0, c0, r0], o = [];
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
      t.c(), n = Mf();
    },
    m(a, c) {
      o[e].m(a, c), Pl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (xf(), ki(o[f], 1, 1, () => {
        o[f] = null;
      }), Cf(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Kn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Kn(t), s = !0);
    },
    o(a) {
      ki(t), s = !1;
    },
    d(a) {
      a && Ll(n), o[e].d(a);
    }
  };
}
function h0(i, e, t) {
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
function d0(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(L, V, ce, fe) {
    function xe(E) {
      return E instanceof ce ? E : new ce(function(Pe) {
        Pe(E);
      });
    }
    return new (ce || (ce = Promise))(function(E, Pe) {
      function qe(Fe) {
        try {
          Xe(fe.next(Fe));
        } catch (we) {
          Pe(we);
        }
      }
      function G(Fe) {
        try {
          Xe(fe.throw(Fe));
        } catch (we) {
          Pe(we);
        }
      }
      function Xe(Fe) {
        Fe.done ? E(Fe.value) : xe(Fe.value).then(qe, G);
      }
      Xe((fe = fe.apply(L, V || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: h = "single" } = e, { disable_click: d = !1 } = e, { root: m } = e, { hidden: p = !1 } = e, { format: u = "file" } = e, { uploading: v = !1 } = e, { hidden_upload: g = null } = e, { show_progress: k = !0 } = e, { max_file_size: b = null } = e, { upload: M } = e, { stream_handler: W } = e, w, x, X;
  const S = o0(), C = ["image", "video", "audio", "text", "file"], R = (L) => L.startsWith(".") || L.endsWith("/*") ? L : C.includes(L) ? L + "/*" : "." + L;
  function y() {
    t(20, r = !r);
  }
  function H() {
    navigator.clipboard.read().then((L) => l(this, void 0, void 0, function* () {
      for (let V = 0; V < L.length; V++) {
        const ce = L[V].types.find((fe) => fe.startsWith("image/"));
        if (ce) {
          L[V].getType(ce).then((fe) => l(this, void 0, void 0, function* () {
            const xe = new File([fe], `clipboard.${ce.replace("image/", "")}`);
            yield D([xe]);
          }));
          break;
        }
      }
    }));
  }
  function F() {
    d || g && (t(2, g.value = "", g), g.click());
  }
  function A(L) {
    return l(this, void 0, void 0, function* () {
      yield a0(), t(14, w = Math.random().toString(36).substring(2, 15)), t(1, v = !0);
      try {
        const V = yield M(L, m, w, b ?? 1 / 0);
        return S("load", h === "single" ? V == null ? void 0 : V[0] : V), t(1, v = !1), V || [];
      } catch (V) {
        return S("error", V.message), t(1, v = !1), [];
      }
    });
  }
  function D(L) {
    return l(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let V = L.map((ce) => new File([ce], ce instanceof File ? ce.name : "file", { type: ce.type }));
      return t(15, x = yield wf(V)), yield A(x);
    });
  }
  function Y(L) {
    return l(this, void 0, void 0, function* () {
      const V = L.target;
      if (V.files)
        if (u != "blob")
          yield D(Array.from(V.files));
        else {
          if (h === "single") {
            S("load", V.files[0]);
            return;
          }
          S("load", V.files);
        }
    });
  }
  function P(L) {
    return l(this, void 0, void 0, function* () {
      var V;
      if (t(20, r = !1), !(!((V = L.dataTransfer) === null || V === void 0) && V.files)) return;
      const ce = Array.from(L.dataTransfer.files).filter((fe) => {
        const xe = "." + fe.name.split(".").pop();
        return xe && h0(X, xe, fe.type) || (xe && Array.isArray(o) ? o.includes(xe) : xe === o) ? !0 : (S("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield D(ce);
    });
  }
  function se(L) {
    Gn.call(this, i, L);
  }
  function J(L) {
    Gn.call(this, i, L);
  }
  function U(L) {
    Gn.call(this, i, L);
  }
  function I(L) {
    Gn.call(this, i, L);
  }
  function re(L) {
    Gn.call(this, i, L);
  }
  function Q(L) {
    Gn.call(this, i, L);
  }
  function q(L) {
    Gn.call(this, i, L);
  }
  function _e(L) {
    Q1[L ? "unshift" : "push"](() => {
      g = L, t(2, g);
    });
  }
  return i.$$set = (L) => {
    "filetype" in L && t(0, o = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, c = L.center), "flex" in L && t(5, f = L.flex), "file_count" in L && t(6, h = L.file_count), "disable_click" in L && t(7, d = L.disable_click), "root" in L && t(8, m = L.root), "hidden" in L && t(9, p = L.hidden), "format" in L && t(21, u = L.format), "uploading" in L && t(1, v = L.uploading), "hidden_upload" in L && t(2, g = L.hidden_upload), "show_progress" in L && t(10, k = L.show_progress), "max_file_size" in L && t(22, b = L.max_file_size), "upload" in L && t(23, M = L.upload), "stream_handler" in L && t(11, W = L.stream_handler), "$$scope" in L && t(25, s = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, X = null) : typeof o == "string" ? t(16, X = R(o)) : (t(0, o = o.map(R)), t(16, X = o.join(", "))));
  }, [
    o,
    v,
    g,
    a,
    c,
    f,
    h,
    d,
    m,
    p,
    k,
    W,
    H,
    F,
    w,
    x,
    X,
    y,
    Y,
    P,
    r,
    u,
    b,
    M,
    D,
    s,
    n,
    se,
    J,
    U,
    I,
    re,
    Q,
    q,
    _e
  ];
}
class _0 extends G1 {
  constructor(e) {
    super(), t0(
      this,
      e,
      d0,
      u0,
      s0,
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
  SvelteComponent: m0,
  append: js,
  attr: ro,
  create_component: g0,
  destroy_component: p0,
  detach: b0,
  element: co,
  init: v0,
  insert: w0,
  listen: k0,
  mount_component: y0,
  noop: C0,
  safe_not_equal: S0,
  set_style: M0,
  space: z0,
  text: W0,
  transition_in: x0,
  transition_out: B0
} = window.__gradio__svelte__internal, { createEventDispatcher: X0 } = window.__gradio__svelte__internal;
function Y0(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new Nc({}), {
    c() {
      e = co("button"), t = co("div"), n = co("span"), g0(s.$$.fragment), l = z0(), r = W0(o), ro(n, "class", "icon-wrap svelte-fjcd9c"), ro(t, "class", "wrap svelte-fjcd9c"), ro(e, "class", "svelte-fjcd9c"), M0(e, "height", "100%");
    },
    m(h, d) {
      w0(h, e, d), js(e, t), js(t, n), y0(s, n, null), js(t, l), js(t, r), a = !0, c || (f = k0(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: C0,
    i(h) {
      a || (x0(s.$$.fragment, h), a = !0);
    },
    o(h) {
      B0(s.$$.fragment, h), a = !1;
    },
    d(h) {
      h && b0(e), p0(s), c = !1, f();
    }
  };
}
function D0(i) {
  const e = X0();
  return [e, () => e("click")];
}
class E0 extends m0 {
  constructor(e) {
    super(), v0(this, e, D0, Y0, S0, {});
  }
}
function R0() {
  return navigator.mediaDevices.enumerateDevices();
}
function L0(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Sr(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (L0(l, e), l));
}
function P0(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: q0,
  action_destroyer: H0,
  add_render_callback: I0,
  append: Mn,
  attr: $e,
  binding_callbacks: A0,
  check_outros: ps,
  create_component: es,
  create_in_transition: j0,
  destroy_component: ts,
  destroy_each: F0,
  detach: Mt,
  element: qt,
  empty: ua,
  ensure_array_like: Mr,
  group_outros: bs,
  init: T0,
  insert: zt,
  listen: vl,
  mount_component: ns,
  noop: ha,
  run_all: O0,
  safe_not_equal: U0,
  set_data: Yf,
  set_input_value: Jo,
  space: ys,
  stop_propagation: V0,
  text: Df,
  toggle_class: Fs,
  transition_in: lt,
  transition_out: ht
} = window.__gradio__svelte__internal, { createEventDispatcher: N0, onMount: K0 } = window.__gradio__svelte__internal;
function zr(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Z0(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const d = [Q0, G0], m = [];
  function p(g, k) {
    return (
      /*mode*/
      g[1] === "video" || /*streaming*/
      g[0] ? 0 : 1
    );
  }
  n = p(i), s = m[n] = d[n](i);
  let u = !/*recording*/
  i[8] && Wr(i), v = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && xr(i)
  );
  return {
    c() {
      e = qt("div"), t = qt("button"), s.c(), o = ys(), u && u.c(), r = ys(), v && v.c(), a = ua(), $e(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), $e(t, "class", "svelte-8hqvb6"), $e(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(g, k) {
      zt(g, e, k), Mn(e, t), m[n].m(t, null), Mn(e, o), u && u.m(e, null), zt(g, r, k), v && v.m(g, k), zt(g, a, k), c = !0, f || (h = vl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(g, k) {
      let b = n;
      n = p(g), n === b ? m[n].p(g, k) : (bs(), ht(m[b], 1, 1, () => {
        m[b] = null;
      }), ps(), s = m[n], s ? s.p(g, k) : (s = m[n] = d[n](g), s.c()), lt(s, 1), s.m(t, null)), (!c || k[0] & /*mode*/
      2 && l !== (l = /*mode*/
      g[1] === "image" ? "capture photo" : "start recording")) && $e(t, "aria-label", l), /*recording*/
      g[8] ? u && (bs(), ht(u, 1, 1, () => {
        u = null;
      }), ps()) : u ? (u.p(g, k), k[0] & /*recording*/
      256 && lt(u, 1)) : (u = Wr(g), u.c(), lt(u, 1), u.m(e, null)), /*options_open*/
      g[10] && /*selected_device*/
      g[7] ? v ? (v.p(g, k), k[0] & /*options_open, selected_device*/
      1152 && lt(v, 1)) : (v = xr(g), v.c(), lt(v, 1), v.m(a.parentNode, a)) : v && (bs(), ht(v, 1, 1, () => {
        v = null;
      }), ps());
    },
    i(g) {
      c || (lt(s), lt(u), lt(v), c = !0);
    },
    o(g) {
      ht(s), ht(u), ht(v), c = !1;
    },
    d(g) {
      g && (Mt(e), Mt(r), Mt(a)), m[n].d(), u && u.d(), v && v.d(g), f = !1, h();
    }
  };
}
function J0(i) {
  let e, t, n, s;
  return t = new E0({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = qt("div"), es(t.$$.fragment), $e(e, "title", "grant webcam access");
    },
    m(l, o) {
      zt(l, e, o), ns(t, e, null), s = !0;
    },
    p: ha,
    i(l) {
      s || (lt(t.$$.fragment, l), l && (n || I0(() => {
        n = j0(e, Hm, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      ht(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && Mt(e), ts(t);
    }
  };
}
function G0(i) {
  let e, t, n;
  return t = new Rd({}), {
    c() {
      e = qt("div"), es(t.$$.fragment), $e(e, "class", "icon svelte-8hqvb6"), $e(e, "title", "capture photo");
    },
    m(s, l) {
      zt(s, e, l), ns(t, e, null), n = !0;
    },
    p: ha,
    i(s) {
      n || (lt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ht(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Mt(e), ts(t);
    }
  };
}
function Q0(i) {
  let e, t, n, s;
  const l = [eg, $0], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = ua();
    },
    m(a, c) {
      o[e].m(a, c), zt(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (bs(), ht(o[f], 1, 1, () => {
        o[f] = null;
      }), ps(), t = o[e], t || (t = o[e] = l[e](a), t.c()), lt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (lt(t), s = !0);
    },
    o(a) {
      ht(t), s = !1;
    },
    d(a) {
      a && Mt(n), o[e].d(a);
    }
  };
}
function $0(i) {
  let e, t, n;
  return t = new Fd({}), {
    c() {
      e = qt("div"), es(t.$$.fragment), $e(e, "class", "icon red svelte-8hqvb6"), $e(e, "title", "start recording");
    },
    m(s, l) {
      zt(s, e, l), ns(t, e, null), n = !0;
    },
    i(s) {
      n || (lt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ht(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Mt(e), ts(t);
    }
  };
}
function eg(i) {
  let e, t, n;
  return t = new U_({}), {
    c() {
      e = qt("div"), es(t.$$.fragment), $e(e, "class", "icon red svelte-8hqvb6"), $e(e, "title", "stop recording");
    },
    m(s, l) {
      zt(s, e, l), ns(t, e, null), n = !0;
    },
    i(s) {
      n || (lt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ht(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Mt(e), ts(t);
    }
  };
}
function Wr(i) {
  let e, t, n, s, l;
  return t = new oa({}), {
    c() {
      e = qt("button"), es(t.$$.fragment), $e(e, "class", "icon svelte-8hqvb6"), $e(e, "aria-label", "select input source");
    },
    m(o, r) {
      zt(o, e, r), ns(t, e, null), n = !0, s || (l = vl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: ha,
    i(o) {
      n || (lt(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ht(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mt(e), ts(t), s = !1, l();
    }
  };
}
function xr(i) {
  let e, t, n, s, l, o, r;
  n = new oa({});
  function a(h, d) {
    return (
      /*available_video_devices*/
      h[6].length === 0 ? ng : tg
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = qt("select"), t = qt("button"), es(n.$$.fragment), s = ys(), f.c(), $e(t, "class", "inset-icon svelte-8hqvb6"), $e(e, "class", "select-wrap svelte-8hqvb6"), $e(e, "aria-label", "select source");
    },
    m(h, d) {
      zt(h, e, d), Mn(e, t), ns(n, t, null), Mn(t, s), f.m(e, null), l = !0, o || (r = [
        vl(t, "click", V0(
          /*click_handler_2*/
          i[22]
        )),
        H0(da.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        vl(
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
      l || (lt(n.$$.fragment, h), l = !0);
    },
    o(h) {
      ht(n.$$.fragment, h), l = !1;
    },
    d(h) {
      h && Mt(e), ts(n), f.d(), o = !1, O0(r);
    }
  };
}
function tg(i) {
  let e, t = Mr(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Br(zr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ua();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      zt(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = Mr(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = zr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Br(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && Mt(e), F0(n, s);
    }
  };
}
function ng(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = qt("option"), n = Df(t), e.__value = "", Jo(e, e.__value), $e(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      zt(s, e, l), Mn(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Yf(n, t);
    },
    d(s) {
      s && Mt(e);
    }
  };
}
function Br(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = qt("option"), n = Df(t), s = ys(), e.__value = l = /*device*/
      i[32].deviceId, Jo(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, $e(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      zt(r, e, a), Mn(e, n), Mn(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Yf(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, Jo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Mt(e);
    }
  };
}
function ig(i) {
  let e, t, n, s, l, o;
  const r = [J0, Z0], a = [];
  function c(f, h) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = qt("div"), t = qt("video"), n = ys(), l.c(), $e(t, "class", "svelte-8hqvb6"), Fs(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Fs(t, "hide", !/*webcam_accessed*/
      i[9]), $e(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, h) {
      zt(f, e, h), Mn(e, t), i[19](t), Mn(e, n), a[s].m(e, null), o = !0;
    },
    p(f, h) {
      (!o || h[0] & /*mirror_webcam*/
      4) && Fs(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || h[0] & /*webcam_accessed*/
      512) && Fs(t, "hide", !/*webcam_accessed*/
      f[9]);
      let d = s;
      s = c(f), s === d ? a[s].p(f, h) : (bs(), ht(a[d], 1, 1, () => {
        a[d] = null;
      }), ps(), l = a[s], l ? l.p(f, h) : (l = a[s] = r[s](f), l.c()), lt(l, 1), l.m(e, null));
    },
    i(f) {
      o || (lt(l), o = !0);
    },
    o(f) {
      ht(l), o = !1;
    },
    d(f) {
      f && Mt(e), i[19](null), a[s].d();
    }
  };
}
function da(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function sg(i, e, t) {
  var n = this && this.__awaiter || function(P, se, J, U) {
    function I(re) {
      return re instanceof J ? re : new J(function(Q) {
        Q(re);
      });
    }
    return new (J || (J = Promise))(function(re, Q) {
      function q(V) {
        try {
          L(U.next(V));
        } catch (ce) {
          Q(ce);
        }
      }
      function _e(V) {
        try {
          L(U.throw(V));
        } catch (ce) {
          Q(ce);
        }
      }
      function L(V) {
        V.done ? re(V.value) : I(V.value).then(q, _e);
      }
      L((U = U.apply(P, se || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: h = "image" } = e, { mirror_webcam: d } = e, { include_audio: m } = e, { i18n: p } = e, { upload: u } = e;
  const v = N0();
  K0(() => r = document.createElement("canvas"));
  const g = (P) => n(void 0, void 0, void 0, function* () {
    const J = P.target.value;
    yield Sr(m, s, J).then((U) => n(void 0, void 0, void 0, function* () {
      w = U, t(7, o = l.find((I) => I.deviceId === J) || null), t(10, y = !1);
    }));
  });
  function k() {
    return n(this, void 0, void 0, function* () {
      try {
        Sr(m, s).then((P) => n(this, void 0, void 0, function* () {
          t(9, C = !0), t(6, l = yield R0()), w = P;
        })).then(() => P0(l)).then((P) => {
          t(6, l = P);
          const se = w.getTracks().map((J) => {
            var U;
            return (U = J.getSettings()) === null || U === void 0 ? void 0 : U.deviceId;
          })[0];
          t(7, o = se && P.find((J) => J.deviceId === se) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && v("error", p("image.no_webcam_support"));
      } catch (P) {
        if (P instanceof DOMException && P.name == "NotAllowedError")
          v("error", p("image.allow_webcam_access"));
        else
          throw P;
      }
    });
  }
  function b() {
    var P = r.getContext("2d");
    (!a || a && M) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, P.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (P.scale(-1, 1), P.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (se) => {
        v(a ? "stream" : "capture", se);
      },
      "image/png",
      0.8
    ));
  }
  let M = !1, W = [], w, x, X;
  function S() {
    if (M) {
      X.stop();
      let P = new Blob(W, { type: x }), se = new FileReader();
      se.onload = function(J) {
        return n(this, void 0, void 0, function* () {
          var U;
          if (J.target) {
            let I = new File([P], "sample." + x.substring(6));
            const re = yield wf([I]);
            let Q = ((U = yield u(re, f)) === null || U === void 0 ? void 0 : U.filter(Boolean))[0];
            v("capture", Q), v("stop_recording");
          }
        });
      }, se.readAsDataURL(P);
    } else {
      v("start_recording"), W = [];
      let P = ["video/webm", "video/mp4"];
      for (let se of P)
        if (MediaRecorder.isTypeSupported(se)) {
          x = se;
          break;
        }
      if (x === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      X = new MediaRecorder(w, { mimeType: x }), X.addEventListener("dataavailable", function(se) {
        W.push(se.data);
      }), X.start(200);
    }
    t(8, M = !M);
  }
  let C = !1;
  function R() {
    h === "image" && a && t(8, M = !M), h === "image" ? b() : S(), !M && w && (w.getTracks().forEach((P) => P.stop()), t(5, s.srcObject = null, s), t(9, C = !1));
  }
  a && h === "image" && window.setInterval(
    () => {
      s && !c && b();
    },
    500
  );
  let y = !1;
  function H(P) {
    P.preventDefault(), P.stopPropagation(), t(10, y = !1);
  }
  function F(P) {
    A0[P ? "unshift" : "push"](() => {
      s = P, t(5, s);
    });
  }
  const A = async () => k(), D = () => t(10, y = !0), Y = () => t(10, y = !1);
  return i.$$set = (P) => {
    "streaming" in P && t(0, a = P.streaming), "pending" in P && t(15, c = P.pending), "root" in P && t(16, f = P.root), "mode" in P && t(1, h = P.mode), "mirror_webcam" in P && t(2, d = P.mirror_webcam), "include_audio" in P && t(17, m = P.include_audio), "i18n" in P && t(3, p = P.i18n), "upload" in P && t(18, u = P.upload);
  }, [
    a,
    h,
    d,
    p,
    da,
    s,
    l,
    o,
    M,
    C,
    y,
    g,
    k,
    R,
    H,
    c,
    f,
    m,
    u,
    F,
    A,
    D,
    Y
  ];
}
class lg extends q0 {
  constructor(e) {
    super(), T0(
      this,
      e,
      sg,
      ig,
      U0,
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
    return da;
  }
}
const {
  SvelteComponent: og,
  append: qn,
  attr: ne,
  detach: ag,
  init: rg,
  insert: cg,
  noop: fo,
  safe_not_equal: fg,
  set_style: Hn,
  svg_element: vn
} = window.__gradio__svelte__internal;
function ug(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = vn("svg"), t = vn("rect"), n = vn("rect"), s = vn("rect"), l = vn("rect"), o = vn("line"), r = vn("line"), a = vn("line"), c = vn("line"), ne(t, "x", "2"), ne(t, "y", "2"), ne(t, "width", "5"), ne(t, "height", "5"), ne(t, "rx", "1"), ne(t, "ry", "1"), ne(t, "stroke-width", "2"), ne(t, "fill", "none"), ne(n, "x", "17"), ne(n, "y", "2"), ne(n, "width", "5"), ne(n, "height", "5"), ne(n, "rx", "1"), ne(n, "ry", "1"), ne(n, "stroke-width", "2"), ne(n, "fill", "none"), ne(s, "x", "2"), ne(s, "y", "17"), ne(s, "width", "5"), ne(s, "height", "5"), ne(s, "rx", "1"), ne(s, "ry", "1"), ne(s, "stroke-width", "2"), ne(s, "fill", "none"), ne(l, "x", "17"), ne(l, "y", "17"), ne(l, "width", "5"), ne(l, "height", "5"), ne(l, "rx", "1"), ne(l, "ry", "1"), ne(l, "stroke-width", "2"), ne(l, "fill", "none"), ne(o, "x1", "7.5"), ne(o, "y1", "4.5"), ne(o, "x2", "16"), ne(o, "y2", "4.5"), Hn(o, "stroke-width", "2px"), ne(r, "x1", "7.5"), ne(r, "y1", "19.5"), ne(r, "x2", "16"), ne(r, "y2", "19.5"), Hn(r, "stroke-width", "2px"), ne(a, "x1", "4.5"), ne(a, "y1", "8"), ne(a, "x2", "4.5"), ne(a, "y2", "16"), Hn(a, "stroke-width", "2px"), ne(c, "x1", "19.5"), ne(c, "y1", "8"), ne(c, "x2", "19.5"), ne(c, "y2", "16"), Hn(c, "stroke-width", "2px"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "viewBox", "0 0 24 24"), ne(e, "version", "1.1"), ne(e, "xmlns", "http://www.w3.org/2000/svg"), ne(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ne(e, "xml:space", "preserve"), ne(e, "stroke", "currentColor"), Hn(e, "fill-rule", "evenodd"), Hn(e, "clip-rule", "evenodd"), Hn(e, "stroke-linecap", "round"), Hn(e, "stroke-linejoin", "round");
    },
    m(f, h) {
      cg(f, e, h), qn(e, t), qn(e, n), qn(e, s), qn(e, l), qn(e, o), qn(e, r), qn(e, a), qn(e, c);
    },
    p: fo,
    i: fo,
    o: fo,
    d(f) {
      f && ag(e);
    }
  };
}
class hg extends og {
  constructor(e) {
    super(), rg(this, e, null, ug, fg, {});
  }
}
const {
  SvelteComponent: dg,
  append: uo,
  attr: Ye,
  detach: wl,
  init: _g,
  insert: kl,
  noop: Xr,
  safe_not_equal: mg,
  svg_element: di
} = window.__gradio__svelte__internal;
function gg(i) {
  let e;
  return {
    c() {
      e = di("circle"), Ye(e, "cx", "12"), Ye(e, "cy", "7.5"), Ye(e, "r", "2"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "1"), Ye(e, "opacity", "0.3");
    },
    m(t, n) {
      kl(t, e, n);
    },
    d(t) {
      t && wl(e);
    }
  };
}
function pg(i) {
  let e, t;
  return {
    c() {
      e = di("circle"), t = di("circle"), Ye(e, "cx", "12"), Ye(e, "cy", "7.5"), Ye(e, "r", "2.5"), Ye(e, "fill", "currentColor"), Ye(e, "opacity", "0.9"), Ye(t, "cx", "12"), Ye(t, "cy", "7.5"), Ye(t, "r", "1.5"), Ye(t, "fill", "white"), Ye(t, "opacity", "0.6");
    },
    m(n, s) {
      kl(n, e, s), kl(n, t, s);
    },
    d(n) {
      n && (wl(e), wl(t));
    }
  };
}
function bg(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? pg : gg
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = di("svg"), t = di("path"), n = di("path"), s = di("path"), r.c(), Ye(t, "d", "M9 21h6"), Ye(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Ye(s, "d", "M9 17h6"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "2"), Ye(e, "stroke-linecap", "round"), Ye(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      kl(a, e, c), uo(e, t), uo(e, n), uo(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: Xr,
    o: Xr,
    d(a) {
      a && wl(e), r.d();
    }
  };
}
function vg(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class wg extends dg {
  constructor(e) {
    super(), _g(this, e, vg, bg, mg, { selected: 1 });
  }
}
const {
  SvelteComponent: kg,
  append: yg,
  attr: cn,
  detach: Cg,
  init: Sg,
  insert: Mg,
  noop: ho,
  safe_not_equal: zg,
  svg_element: Yr
} = window.__gradio__svelte__internal;
function Wg(i) {
  let e, t;
  return {
    c() {
      e = Yr("svg"), t = Yr("circle"), cn(t, "cx", "12"), cn(t, "cy", "12"), cn(t, "r", "10"), cn(e, "xmlns", "http://www.w3.org/2000/svg"), cn(e, "viewBox", "0 0 24 24"), cn(e, "fill", "none"), cn(e, "stroke", "currentColor"), cn(e, "stroke-width", "2"), cn(e, "stroke-linecap", "round"), cn(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Mg(n, e, s), yg(e, t);
    },
    p: ho,
    i: ho,
    o: ho,
    d(n) {
      n && Cg(e);
    }
  };
}
let xg = class extends kg {
  constructor(e) {
    super(), Sg(this, e, null, Wg, zg, {});
  }
};
const {
  SvelteComponent: Bg,
  append: as,
  attr: tt,
  detach: Xg,
  init: Yg,
  insert: Dg,
  noop: _o,
  safe_not_equal: Eg,
  svg_element: Ri
} = window.__gradio__svelte__internal;
function Rg(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Ri("svg"), t = Ri("path"), n = Ri("path"), s = Ri("path"), l = Ri("line"), o = Ri("line"), tt(t, "d", "M3 6h18"), tt(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), tt(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), tt(l, "x1", "10"), tt(l, "y1", "11"), tt(l, "x2", "10"), tt(l, "y2", "17"), tt(o, "x1", "14"), tt(o, "y1", "11"), tt(o, "x2", "14"), tt(o, "y2", "17"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "viewBox", "0 0 24 24"), tt(e, "fill", "none"), tt(e, "stroke", "currentColor"), tt(e, "stroke-width", "2"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Dg(r, e, a), as(e, t), as(e, n), as(e, s), as(e, l), as(e, o);
    },
    p: _o,
    i: _o,
    o: _o,
    d(r) {
      r && Xg(e);
    }
  };
}
class Lg extends Bg {
  constructor(e) {
    super(), Yg(this, e, null, Rg, Eg, {});
  }
}
const {
  SvelteComponent: Pg,
  append: qg,
  attr: Jt,
  detach: Hg,
  init: Ig,
  insert: Ag,
  noop: mo,
  safe_not_equal: jg,
  set_style: Ts,
  svg_element: Dr
} = window.__gradio__svelte__internal;
function Fg(i) {
  let e, t;
  return {
    c() {
      e = Dr("svg"), t = Dr("path"), Jt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Jt(t, "fill", "none"), Jt(t, "stroke-width", "2"), Jt(e, "width", "100%"), Jt(e, "height", "100%"), Jt(e, "viewBox", "0 0 24 24"), Jt(e, "version", "1.1"), Jt(e, "xmlns", "http://www.w3.org/2000/svg"), Jt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Jt(e, "xml:space", "preserve"), Jt(e, "stroke", "currentColor"), Ts(e, "fill-rule", "evenodd"), Ts(e, "clip-rule", "evenodd"), Ts(e, "stroke-linecap", "round"), Ts(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Ag(n, e, s), qg(e, t);
    },
    p: mo,
    i: mo,
    o: mo,
    d(n) {
      n && Hg(e);
    }
  };
}
class Tg extends Pg {
  constructor(e) {
    super(), Ig(this, e, null, Fg, jg, {});
  }
}
const {
  SvelteComponent: Og,
  append: Ug,
  attr: Gt,
  detach: Vg,
  init: Ng,
  insert: Kg,
  noop: go,
  safe_not_equal: Zg,
  set_style: Os,
  svg_element: Er
} = window.__gradio__svelte__internal;
function Jg(i) {
  let e, t;
  return {
    c() {
      e = Er("svg"), t = Er("path"), Gt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Gt(t, "fill", "none"), Gt(t, "stroke-width", "2"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24"), Gt(e, "version", "1.1"), Gt(e, "xmlns", "http://www.w3.org/2000/svg"), Gt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Gt(e, "xml:space", "preserve"), Gt(e, "stroke", "currentColor"), Os(e, "fill-rule", "evenodd"), Os(e, "clip-rule", "evenodd"), Os(e, "stroke-linecap", "round"), Os(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Kg(n, e, s), Ug(e, t);
    },
    p: go,
    i: go,
    o: go,
    d(n) {
      n && Vg(e);
    }
  };
}
class Gg extends Og {
  constructor(e) {
    super(), Ng(this, e, null, Jg, Zg, {});
  }
}
const {
  SvelteComponent: Qg,
  append: Rr,
  attr: wn,
  detach: $g,
  init: ep,
  insert: tp,
  noop: po,
  safe_not_equal: np,
  set_style: Us,
  svg_element: bo
} = window.__gradio__svelte__internal;
function ip(i) {
  let e, t, n;
  return {
    c() {
      e = bo("svg"), t = bo("path"), n = bo("path"), wn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), wn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), wn(e, "width", "100%"), wn(e, "height", "100%"), wn(e, "viewBox", "0 0 24 24"), wn(e, "xmlns", "http://www.w3.org/2000/svg"), wn(e, "fill", "none"), wn(e, "stroke", "currentColor"), wn(e, "stroke-width", "2"), Us(e, "fill-rule", "evenodd"), Us(e, "clip-rule", "evenodd"), Us(e, "stroke-linecap", "round"), Us(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      tp(s, e, l), Rr(e, t), Rr(e, n);
    },
    p: po,
    i: po,
    o: po,
    d(s) {
      s && $g(e);
    }
  };
}
class sp extends Qg {
  constructor(e) {
    super(), ep(this, e, null, ip, np, {});
  }
}
const {
  SvelteComponent: lp,
  append: op,
  attr: In,
  detach: ap,
  init: rp,
  insert: cp,
  noop: vo,
  safe_not_equal: fp,
  set_style: Vs,
  svg_element: Lr
} = window.__gradio__svelte__internal;
function up(i) {
  let e, t;
  return {
    c() {
      e = Lr("svg"), t = Lr("path"), In(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), In(e, "width", "100%"), In(e, "height", "100%"), In(e, "viewBox", "0 0 24 24"), In(e, "fill", "none"), In(e, "stroke", "currentColor"), In(e, "stroke-width", "2"), Vs(e, "fill-rule", "evenodd"), Vs(e, "clip-rule", "evenodd"), Vs(e, "stroke-linecap", "round"), Vs(e, "stroke-linejoin", "round"), In(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      cp(n, e, s), op(e, t);
    },
    p: vo,
    i: vo,
    o: vo,
    d(n) {
      n && ap(e);
    }
  };
}
class hp extends lp {
  constructor(e) {
    super(), rp(this, e, null, up, fp, {});
  }
}
const {
  SvelteComponent: dp,
  append: _p,
  attr: An,
  detach: mp,
  init: gp,
  insert: pp,
  noop: wo,
  safe_not_equal: bp,
  set_style: Ns,
  svg_element: Pr
} = window.__gradio__svelte__internal;
function vp(i) {
  let e, t;
  return {
    c() {
      e = Pr("svg"), t = Pr("path"), An(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), An(e, "width", "100%"), An(e, "height", "100%"), An(e, "viewBox", "0 0 24 24"), An(e, "fill", "none"), An(e, "stroke", "currentColor"), An(e, "stroke-width", "2"), Ns(e, "fill-rule", "evenodd"), Ns(e, "clip-rule", "evenodd"), Ns(e, "stroke-linecap", "round"), Ns(e, "stroke-linejoin", "round"), An(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      pp(n, e, s), _p(e, t);
    },
    p: wo,
    i: wo,
    o: wo,
    d(n) {
      n && mp(e);
    }
  };
}
class wp extends dp {
  constructor(e) {
    super(), gp(this, e, null, vp, bp, {});
  }
}
const {
  SvelteComponent: kp,
  append: qr,
  attr: kt,
  detach: yp,
  init: Cp,
  insert: Sp,
  noop: ko,
  safe_not_equal: Mp,
  set_style: Ks,
  svg_element: yo
} = window.__gradio__svelte__internal;
function zp(i) {
  let e, t, n;
  return {
    c() {
      e = yo("svg"), t = yo("path"), n = yo("path"), kt(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), kt(t, "fill", "none"), kt(t, "stroke-width", "2"), kt(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), kt(n, "fill", "none"), kt(n, "stroke-width", "2"), kt(e, "width", "100%"), kt(e, "height", "100%"), kt(e, "viewBox", "0 0 24 24"), kt(e, "version", "1.1"), kt(e, "xmlns", "http://www.w3.org/2000/svg"), kt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), kt(e, "xml:space", "preserve"), kt(e, "stroke", "currentColor"), Ks(e, "fill-rule", "evenodd"), Ks(e, "clip-rule", "evenodd"), Ks(e, "stroke-linecap", "round"), Ks(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Sp(s, e, l), qr(e, t), qr(e, n);
    },
    p: ko,
    i: ko,
    o: ko,
    d(s) {
      s && yp(e);
    }
  };
}
class Wp extends kp {
  constructor(e) {
    super(), Cp(this, e, null, zp, Mp, {});
  }
}
const {
  SvelteComponent: xp,
  append: kn,
  attr: oe,
  detach: Bp,
  init: Xp,
  insert: Yp,
  noop: Co,
  safe_not_equal: Dp,
  svg_element: fn
} = window.__gradio__svelte__internal;
function Ep(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = fn("svg"), t = fn("path"), n = fn("circle"), s = fn("circle"), l = fn("circle"), o = fn("circle"), r = fn("circle"), a = fn("circle"), c = fn("circle"), f = fn("circle"), oe(t, "fill", "none"), oe(t, "stroke", "currentColor"), oe(t, "stroke-width", "1.5"), oe(t, "stroke-linecap", "round"), oe(t, "stroke-linejoin", "round"), oe(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), oe(n, "cx", "7"), oe(n, "cy", "7"), oe(n, "r", "1.5"), oe(n, "fill", "currentColor"), oe(s, "cx", "15"), oe(s, "cy", "9"), oe(s, "r", "1.5"), oe(s, "fill", "currentColor"), oe(l, "cx", "21"), oe(l, "cy", "5"), oe(l, "r", "1.5"), oe(l, "fill", "currentColor"), oe(o, "cx", "25"), oe(o, "cy", "13"), oe(o, "r", "1.5"), oe(o, "fill", "currentColor"), oe(r, "cx", "23"), oe(r, "cy", "21"), oe(r, "r", "1.5"), oe(r, "fill", "currentColor"), oe(a, "cx", "15"), oe(a, "cy", "19"), oe(a, "r", "1.5"), oe(a, "fill", "currentColor"), oe(c, "cx", "9"), oe(c, "cy", "23"), oe(c, "r", "1.5"), oe(c, "fill", "currentColor"), oe(f, "cx", "5"), oe(f, "cy", "15"), oe(f, "r", "1.5"), oe(f, "fill", "currentColor"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), oe(e, "aria-hidden", "true"), oe(e, "role", "img"), oe(e, "class", "iconify iconify--carbon"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "preserveAspectRatio", "xMidYMid meet"), oe(e, "viewBox", "0 0 32 32");
    },
    m(h, d) {
      Yp(h, e, d), kn(e, t), kn(e, n), kn(e, s), kn(e, l), kn(e, o), kn(e, r), kn(e, a), kn(e, c), kn(e, f);
    },
    p: Co,
    i: Co,
    o: Co,
    d(h) {
      h && Bp(e);
    }
  };
}
let Rp = class extends xp {
  constructor(e) {
    super(), Xp(this, e, null, Ep, Dp, {});
  }
};
const {
  SvelteComponent: Lp,
  append: rs,
  attr: me,
  detach: Pp,
  init: qp,
  insert: Hp,
  noop: So,
  safe_not_equal: Ip,
  set_style: Zs,
  svg_element: Li
} = window.__gradio__svelte__internal;
function Ap(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Li("svg"), t = Li("circle"), n = Li("circle"), s = Li("circle"), l = Li("circle"), o = Li("circle"), me(t, "cx", "12"), me(t, "cy", "12"), me(t, "r", "8"), me(t, "stroke-width", "2"), me(t, "fill", "none"), me(n, "cx", "12"), me(n, "cy", "12"), me(n, "r", "4"), me(n, "stroke-width", "1.5"), me(n, "fill", "none"), me(n, "opacity", "0.5"), me(s, "cx", "8"), me(s, "cy", "8"), me(s, "r", "1"), me(s, "fill", "currentColor"), me(s, "opacity", "0.6"), me(l, "cx", "16"), me(l, "cy", "8"), me(l, "r", "1"), me(l, "fill", "currentColor"), me(l, "opacity", "0.6"), me(o, "cx", "12"), me(o, "cy", "16"), me(o, "r", "1"), me(o, "fill", "currentColor"), me(o, "opacity", "0.6"), me(e, "width", "100%"), me(e, "height", "100%"), me(e, "viewBox", "0 0 24 24"), me(e, "version", "1.1"), me(e, "xmlns", "http://www.w3.org/2000/svg"), me(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), me(e, "xml:space", "preserve"), me(e, "stroke", "currentColor"), Zs(e, "fill-rule", "evenodd"), Zs(e, "clip-rule", "evenodd"), Zs(e, "stroke-linecap", "round"), Zs(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Hp(r, e, a), rs(e, t), rs(e, n), rs(e, s), rs(e, l), rs(e, o);
    },
    p: So,
    i: So,
    o: So,
    d(r) {
      r && Pp(e);
    }
  };
}
class jp extends Lp {
  constructor(e) {
    super(), qp(this, e, null, Ap, Ip, {});
  }
}
const {
  SvelteComponent: Fp,
  append: Hr,
  attr: Xt,
  detach: Tp,
  init: Op,
  insert: Up,
  noop: Mo,
  safe_not_equal: Vp,
  set_style: Js,
  svg_element: zo
} = window.__gradio__svelte__internal;
function Np(i) {
  let e, t, n;
  return {
    c() {
      e = zo("svg"), t = zo("path"), n = zo("path"), Xt(t, "d", "M3 7v6h6"), Xt(t, "stroke-width", "2"), Xt(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), Xt(n, "stroke-width", "2"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24"), Xt(e, "version", "1.1"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Xt(e, "xml:space", "preserve"), Xt(e, "stroke", "currentColor"), Xt(e, "fill", "none"), Js(e, "fill-rule", "evenodd"), Js(e, "clip-rule", "evenodd"), Js(e, "stroke-linecap", "round"), Js(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Up(s, e, l), Hr(e, t), Hr(e, n);
    },
    p: Mo,
    i: Mo,
    o: Mo,
    d(s) {
      s && Tp(e);
    }
  };
}
class Kp extends Fp {
  constructor(e) {
    super(), Op(this, e, null, Np, Vp, {});
  }
}
const {
  SvelteComponent: Zp,
  append: Ir,
  attr: Yt,
  detach: Jp,
  init: Gp,
  insert: Qp,
  noop: Wo,
  safe_not_equal: $p,
  set_style: Gs,
  svg_element: xo
} = window.__gradio__svelte__internal;
function e2(i) {
  let e, t, n;
  return {
    c() {
      e = xo("svg"), t = xo("path"), n = xo("path"), Yt(t, "d", "M21 7v6h-6"), Yt(t, "stroke-width", "2"), Yt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), Yt(n, "stroke-width", "2"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "version", "1.1"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Yt(e, "xml:space", "preserve"), Yt(e, "stroke", "currentColor"), Yt(e, "fill", "none"), Gs(e, "fill-rule", "evenodd"), Gs(e, "clip-rule", "evenodd"), Gs(e, "stroke-linecap", "round"), Gs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Qp(s, e, l), Ir(e, t), Ir(e, n);
    },
    p: Wo,
    i: Wo,
    o: Wo,
    d(s) {
      s && Jp(e);
    }
  };
}
class t2 extends Zp {
  constructor(e) {
    super(), Gp(this, e, null, e2, $p, {});
  }
}
const {
  SvelteComponent: n2,
  append: i2,
  attr: Qt,
  detach: s2,
  init: l2,
  insert: o2,
  noop: Bo,
  safe_not_equal: a2,
  set_style: Ar,
  svg_element: jr
} = window.__gradio__svelte__internal;
function r2(i) {
  let e, t;
  return {
    c() {
      e = jr("svg"), t = jr("path"), Qt(t, "d", "M7 10l5 5 5-5z"), Qt(t, "stroke", "none"), Qt(e, "width", "100%"), Qt(e, "height", "100%"), Qt(e, "viewBox", "0 0 24 24"), Qt(e, "version", "1.1"), Qt(e, "xmlns", "http://www.w3.org/2000/svg"), Qt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Qt(e, "xml:space", "preserve"), Qt(e, "stroke", "currentColor"), Qt(e, "fill", "currentColor"), Ar(e, "fill-rule", "evenodd"), Ar(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      o2(n, e, s), i2(e, t);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(n) {
      n && s2(e);
    }
  };
}
class Fr extends n2 {
  constructor(e) {
    super(), l2(this, e, null, r2, a2, {});
  }
}
const {
  SvelteComponent: c2,
  append: f2,
  attr: yn,
  detach: u2,
  init: h2,
  insert: d2,
  noop: Xo,
  safe_not_equal: _2,
  set_style: Qs,
  svg_element: Tr
} = window.__gradio__svelte__internal;
function m2(i) {
  let e, t;
  return {
    c() {
      e = Tr("svg"), t = Tr("path"), yn(t, "d", "M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3"), yn(t, "stroke-width", "2"), yn(e, "width", "100%"), yn(e, "height", "100%"), yn(e, "viewBox", "0 0 24 24"), yn(e, "version", "1.1"), yn(e, "xmlns", "http://www.w3.org/2000/svg"), yn(e, "stroke", "currentColor"), yn(e, "fill", "none"), Qs(e, "fill-rule", "evenodd"), Qs(e, "clip-rule", "evenodd"), Qs(e, "stroke-linecap", "round"), Qs(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      d2(n, e, s), f2(e, t);
    },
    p: Xo,
    i: Xo,
    o: Xo,
    d(n) {
      n && u2(e);
    }
  };
}
class g2 extends c2 {
  constructor(e) {
    super(), h2(this, e, null, m2, _2, {});
  }
}
const {
  SvelteComponent: p2,
  append: Or,
  attr: Yo,
  bubble: Ur,
  create_component: b2,
  destroy_component: v2,
  detach: Ef,
  element: Vr,
  init: w2,
  insert: Rf,
  listen: Do,
  mount_component: k2,
  run_all: y2,
  safe_not_equal: C2,
  set_data: S2,
  set_input_value: Nr,
  space: M2,
  text: z2,
  transition_in: W2,
  transition_out: x2
} = window.__gradio__svelte__internal, { createEventDispatcher: B2, afterUpdate: X2 } = window.__gradio__svelte__internal;
function Y2(i) {
  let e;
  return {
    c() {
      e = z2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Rf(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && S2(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Ef(e);
    }
  };
}
function D2(i) {
  let e, t, n, s, l, o, r;
  return t = new Ac({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [Y2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Vr("label"), b2(t.$$.fragment), n = M2(), s = Vr("input"), Yo(s, "type", "color"), s.disabled = /*disabled*/
      i[3], Yo(s, "class", "svelte-16l8u73"), Yo(e, "class", "block");
    },
    m(a, c) {
      Rf(a, e, c), k2(t, e, null), Or(e, n), Or(e, s), Nr(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        Do(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Do(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Do(
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
      1 && Nr(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (W2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      x2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && Ef(e), v2(t), o = !1, y2(r);
    }
  };
}
function E2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = B2();
  function f() {
    c("change", n), s || c("input");
  }
  X2(() => {
    t(5, s = !1);
  });
  function h(p) {
    Ur.call(this, i, p);
  }
  function d(p) {
    Ur.call(this, i, p);
  }
  function m() {
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
    d,
    m
  ];
}
class R2 extends p2 {
  constructor(e) {
    super(), w2(this, e, E2, D2, C2, {
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
  SvelteComponent: L2,
  append: Lf,
  attr: Ie,
  bubble: P2,
  check_outros: q2,
  create_slot: Pf,
  detach: zs,
  element: ql,
  empty: H2,
  get_all_dirty_from_scope: qf,
  get_slot_changes: Hf,
  group_outros: I2,
  init: A2,
  insert: Ws,
  listen: j2,
  safe_not_equal: F2,
  set_style: Ct,
  space: If,
  src_url_equal: yl,
  toggle_class: Ni,
  transition_in: Cl,
  transition_out: Sl,
  update_slot_base: Af
} = window.__gradio__svelte__internal;
function T2(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && Kr(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Pf(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = ql("button"), r && r.c(), t = If(), c && c.c(), Ie(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Ie(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Ni(e, "hidden", !/*visible*/
      i[2]), Ct(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ct(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ct(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, h) {
      Ws(f, e, h), r && r.m(e, null), Lf(e, t), c && c.m(e, null), s = !0, l || (o = j2(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, h) {
      /*icon*/
      f[7] ? r ? r.p(f, h) : (r = Kr(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || h & /*$$scope*/
      2048) && Af(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? Hf(
          a,
          /*$$scope*/
          f[11],
          h,
          null
        ) : qf(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || h & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && Ie(e, "class", n), (!s || h & /*elem_id*/
      1) && Ie(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || h & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || h & /*size, variant, elem_classes, visible*/
      30) && Ni(e, "hidden", !/*visible*/
      f[2]), h & /*scale*/
      512 && Ct(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), h & /*scale*/
      512 && Ct(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), h & /*min_width*/
      1024 && Ct(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (Cl(c, f), s = !0);
    },
    o(f) {
      Sl(c, f), s = !1;
    },
    d(f) {
      f && zs(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function O2(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && Zr(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Pf(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = ql("a"), l && l.c(), t = If(), r && r.c(), Ie(
        e,
        "href",
        /*link*/
        i[6]
      ), Ie(e, "rel", "noopener noreferrer"), Ie(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), Ie(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Ie(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Ni(e, "hidden", !/*visible*/
      i[2]), Ni(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ct(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ct(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ct(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ct(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      Ws(a, e, c), l && l.m(e, null), Lf(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = Zr(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && Af(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? Hf(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : qf(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && Ie(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && Ie(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && Ie(e, "class", n), (!s || c & /*elem_id*/
      1) && Ie(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && Ni(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && Ni(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && Ct(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && Ct(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && Ct(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && Ct(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (Cl(r, a), s = !0);
    },
    o(a) {
      Sl(r, a), s = !1;
    },
    d(a) {
      a && zs(e), l && l.d(), r && r.d(a);
    }
  };
}
function Kr(i) {
  let e, t, n;
  return {
    c() {
      e = ql("img"), Ie(e, "class", "button-icon svelte-8huxfn"), yl(e.src, t = /*icon*/
      i[7].url) || Ie(e, "src", t), Ie(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Ws(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !yl(e.src, t = /*icon*/
      s[7].url) && Ie(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Ie(e, "alt", n);
    },
    d(s) {
      s && zs(e);
    }
  };
}
function Zr(i) {
  let e, t, n;
  return {
    c() {
      e = ql("img"), Ie(e, "class", "button-icon svelte-8huxfn"), yl(e.src, t = /*icon*/
      i[7].url) || Ie(e, "src", t), Ie(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      Ws(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !yl(e.src, t = /*icon*/
      s[7].url) && Ie(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Ie(e, "alt", n);
    },
    d(s) {
      s && zs(e);
    }
  };
}
function U2(i) {
  let e, t, n, s;
  const l = [O2, T2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = H2();
    },
    m(a, c) {
      o[e].m(a, c), Ws(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (I2(), Sl(o[f], 1, 1, () => {
        o[f] = null;
      }), q2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Cl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Cl(t), s = !0);
    },
    o(a) {
      Sl(t), s = !1;
    },
    d(a) {
      a && zs(n), o[e].d(a);
    }
  };
}
function V2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: h = null } = e, { icon: d = null } = e, { disabled: m = !1 } = e, { scale: p = null } = e, { min_width: u = void 0 } = e;
  function v(g) {
    P2.call(this, i, g);
  }
  return i.$$set = (g) => {
    "elem_id" in g && t(0, l = g.elem_id), "elem_classes" in g && t(1, o = g.elem_classes), "visible" in g && t(2, r = g.visible), "variant" in g && t(3, a = g.variant), "size" in g && t(4, c = g.size), "value" in g && t(5, f = g.value), "link" in g && t(6, h = g.link), "icon" in g && t(7, d = g.icon), "disabled" in g && t(8, m = g.disabled), "scale" in g && t(9, p = g.scale), "min_width" in g && t(10, u = g.min_width), "$$scope" in g && t(11, s = g.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    d,
    m,
    p,
    u,
    s,
    n,
    v
  ];
}
class Go extends L2 {
  constructor(e) {
    super(), A2(this, e, V2, U2, F2, {
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
  SvelteComponent: N2,
  add_render_callback: jf,
  append: $s,
  attr: Rt,
  binding_callbacks: Jr,
  check_outros: K2,
  create_bidirectional_transition: Gr,
  destroy_each: Z2,
  detach: vs,
  element: Ml,
  empty: J2,
  ensure_array_like: Qr,
  group_outros: G2,
  init: Q2,
  insert: ws,
  listen: Qo,
  prevent_default: $2,
  run_all: eb,
  safe_not_equal: tb,
  set_data: nb,
  set_style: Pi,
  space: $o,
  text: ib,
  toggle_class: un,
  transition_in: Eo,
  transition_out: $r
} = window.__gradio__svelte__internal, { createEventDispatcher: sb } = window.__gradio__svelte__internal;
function ec(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function tc(i) {
  let e, t, n, s, l, o = Qr(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = nc(ec(i, o, a));
  return {
    c() {
      e = Ml("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Rt(e, "class", "options svelte-yuohum"), Rt(e, "role", "listbox"), Pi(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Pi(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Pi(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      ws(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = Qo(e, "mousedown", $2(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = Qr(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const h = ec(a, o, f);
          r[f] ? r[f].p(h, c) : (r[f] = nc(h), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Pi(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Pi(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Pi(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && jf(() => {
        n && (t || (t = Gr(e, Ja, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Gr(e, Ja, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && vs(e), Z2(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function nc(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = Ml("li"), t = Ml("span"), t.textContent = "✓", n = $o(), l = ib(s), o = $o(), Rt(t, "class", "inner-item svelte-yuohum"), un(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Rt(e, "class", "item svelte-yuohum"), Rt(e, "data-index", r = /*index*/
      i[26]), Rt(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Rt(e, "data-testid", "dropdown-option"), Rt(e, "role", "option"), Rt(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), un(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), un(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), un(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), un(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, h) {
      ws(f, e, h), $s(e, t), $s(e, n), $s(e, l), $s(e, o);
    },
    p(f, h) {
      h & /*selected_indices, filtered_indices*/
      18 && un(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), h & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && nb(l, s), h & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && Rt(e, "data-index", r), h & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && Rt(e, "aria-label", a), h & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && Rt(e, "aria-selected", c), h & /*selected_indices, filtered_indices*/
      18 && un(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), h & /*filtered_indices, active_index*/
      34 && un(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && un(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && un(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && vs(e);
    }
  };
}
function lb(i) {
  let e, t, n, s, l;
  jf(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && tc(i)
  );
  return {
    c() {
      e = Ml("div"), t = $o(), o && o.c(), n = J2(), Rt(e, "class", "reference");
    },
    m(r, a) {
      ws(r, e, a), i[20](e), ws(r, t, a), o && o.m(r, a), ws(r, n, a), s || (l = [
        Qo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Qo(
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
      12 && Eo(o, 1)) : (o = tc(r), o.c(), Eo(o, 1), o.m(n.parentNode, n)) : o && (G2(), $r(o, 1, 1, () => {
        o = null;
      }), K2());
    },
    i(r) {
      Eo(o);
    },
    o(r) {
      $r(o);
    },
    d(r) {
      r && (vs(e), vs(t), vs(n)), i[20](null), o && o.d(r), s = !1, eb(l);
    }
  };
}
function ob(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, h, d, m, p, u, v, g, k, b;
  function M() {
    const { top: y, bottom: H } = u.getBoundingClientRect();
    t(16, h = y), t(17, d = b - H);
  }
  let W = null;
  function w() {
    r && (W !== null && clearTimeout(W), W = setTimeout(
      () => {
        M(), W = null;
      },
      10
    ));
  }
  const x = sb();
  function X() {
    t(11, b = window.innerHeight);
  }
  function S(y) {
    Jr[y ? "unshift" : "push"](() => {
      u = y, t(6, u);
    });
  }
  const C = (y) => x("change", y);
  function R(y) {
    Jr[y ? "unshift" : "push"](() => {
      v = y, t(7, v);
    });
  }
  return i.$$set = (y) => {
    "choices" in y && t(0, l = y.choices), "filtered_indices" in y && t(1, o = y.filtered_indices), "show_options" in y && t(2, r = y.show_options), "disabled" in y && t(3, a = y.disabled), "selected_indices" in y && t(4, c = y.selected_indices), "active_index" in y && t(5, f = y.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && u) {
        if (v && c.length > 0) {
          let H = v.querySelectorAll("li");
          for (const F of Array.from(H))
            if (F.getAttribute("data-index") === c[0].toString()) {
              t(14, n = v == null ? void 0 : v.scrollTo) === null || n === void 0 || n.call(v, 0, F.offsetTop);
              break;
            }
        }
        M();
        const y = t(15, s = u.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, m = (y == null ? void 0 : y.height) || 0), t(8, p = (y == null ? void 0 : y.width) || 0);
      }
      d > h ? (t(10, k = d), t(9, g = null)) : (t(9, g = `${d + m}px`), t(10, k = h - m));
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
    p,
    g,
    k,
    b,
    w,
    x,
    n,
    s,
    h,
    d,
    m,
    X,
    S,
    C,
    R
  ];
}
class ab extends N2 {
  constructor(e) {
    super(), Q2(this, e, ob, lb, tb, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function rb(i, e) {
  return (i % e + e) % e;
}
function ic(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function cb(i, e, t) {
  i("change", e), t || i("input");
}
function fb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[rb(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: ub,
  append: ei,
  attr: Et,
  binding_callbacks: hb,
  check_outros: db,
  create_component: ea,
  destroy_component: ta,
  detach: _a,
  element: Ti,
  group_outros: _b,
  init: mb,
  insert: ma,
  listen: On,
  mount_component: na,
  noop: gb,
  run_all: pb,
  safe_not_equal: bb,
  set_data: vb,
  set_input_value: sc,
  space: Ro,
  text: wb,
  toggle_class: qi,
  transition_in: Oi,
  transition_out: ms
} = window.__gradio__svelte__internal, { onMount: kb } = window.__gradio__svelte__internal, { createEventDispatcher: yb, afterUpdate: Cb } = window.__gradio__svelte__internal;
function Sb(i) {
  let e;
  return {
    c() {
      e = wb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      ma(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && vb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && _a(e);
    }
  };
}
function lc(i) {
  let e, t, n, s, l;
  return t = new oa({}), {
    c() {
      e = Ti("div"), ea(t.$$.fragment), Et(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      ma(o, e, r), na(t, e, null), n = !0, s || (l = On(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: gb,
    i(o) {
      n || (Oi(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ms(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && _a(e), ta(t), s = !1, l();
    }
  };
}
function Mb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p;
  t = new Ac({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Sb] },
      $$scope: { ctx: i }
    }
  });
  let u = !/*disabled*/
  i[3] && lc(i);
  return h = new ab({
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
      e = Ti("div"), ea(t.$$.fragment), n = Ro(), s = Ti("div"), l = Ti("div"), o = Ti("div"), r = Ti("input"), c = Ro(), u && u.c(), f = Ro(), ea(h.$$.fragment), Et(r, "role", "listbox"), Et(r, "aria-controls", "dropdown-options"), Et(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Et(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Et(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], Et(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], qi(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Et(o, "class", "secondary-wrap svelte-1a9du2n"), Et(l, "class", "wrap-inner svelte-1a9du2n"), qi(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), Et(s, "class", "wrap svelte-1a9du2n"), Et(e, "class", "svelte-1a9du2n"), qi(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(v, g) {
      ma(v, e, g), na(t, e, null), ei(e, n), ei(e, s), ei(s, l), ei(l, o), ei(o, r), sc(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), ei(o, c), u && u.m(o, null), ei(s, f), na(h, s, null), d = !0, m || (p = [
        On(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        On(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        On(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        On(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        On(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        On(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        On(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], m = !0);
    },
    p(v, g) {
      const k = {};
      g[0] & /*show_label*/
      16 && (k.show_label = /*show_label*/
      v[4]), g[0] & /*info*/
      2 && (k.info = /*info*/
      v[1]), g[0] & /*label*/
      1 | g[1] & /*$$scope*/
      16 && (k.$$scope = { dirty: g, ctx: v }), t.$set(k), (!d || g[0] & /*show_options*/
      4096) && Et(
        r,
        "aria-expanded",
        /*show_options*/
        v[12]
      ), (!d || g[0] & /*label*/
      1) && Et(
        r,
        "aria-label",
        /*label*/
        v[0]
      ), (!d || g[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      v[3]), (!d || g[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      v[7])) && (r.readOnly = a), g[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      v[9] && sc(
        r,
        /*input_text*/
        v[9]
      ), (!d || g[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && qi(r, "subdued", !/*choices_names*/
      v[13].includes(
        /*input_text*/
        v[9]
      ) && !/*allow_custom_value*/
      v[6]), /*disabled*/
      v[3] ? u && (_b(), ms(u, 1, 1, () => {
        u = null;
      }), db()) : u ? (u.p(v, g), g[0] & /*disabled*/
      8 && Oi(u, 1)) : (u = lc(v), u.c(), Oi(u, 1), u.m(o, null)), (!d || g[0] & /*show_options*/
      4096) && qi(
        l,
        "show_options",
        /*show_options*/
        v[12]
      );
      const b = {};
      g[0] & /*show_options*/
      4096 && (b.show_options = /*show_options*/
      v[12]), g[0] & /*choices*/
      4 && (b.choices = /*choices*/
      v[2]), g[0] & /*filtered_indices*/
      1024 && (b.filtered_indices = /*filtered_indices*/
      v[10]), g[0] & /*disabled*/
      8 && (b.disabled = /*disabled*/
      v[3]), g[0] & /*selected_index*/
      2048 && (b.selected_indices = /*selected_index*/
      v[11] === null ? [] : [
        /*selected_index*/
        v[11]
      ]), g[0] & /*active_index*/
      16384 && (b.active_index = /*active_index*/
      v[14]), h.$set(b), (!d || g[0] & /*container*/
      32) && qi(
        e,
        "container",
        /*container*/
        v[5]
      );
    },
    i(v) {
      d || (Oi(t.$$.fragment, v), Oi(u), Oi(h.$$.fragment, v), d = !0);
    },
    o(v) {
      ms(t.$$.fragment, v), ms(u), ms(h.$$.fragment, v), d = !1;
    },
    d(v) {
      v && _a(e), ta(t), i[31](null), u && u.d(), ta(h), m = !1, pb(p);
    }
  };
}
function zb(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: h } = e, { container: d = !0 } = e, { allow_custom_value: m = !1 } = e, { filterable: p = !0 } = e, u, v = !1, g, k, b = "", M = "", W = !1, w = [], x = null, X = null, S;
  const C = yb();
  l ? (S = a.map((I) => I[1]).indexOf(l), X = S, X === -1 ? (o = l, X = null) : ([b, o] = a[X], M = b), y()) : a.length > 0 && (S = 0, X = 0, [b, l] = a[X], o = l, M = b);
  function R() {
    t(13, g = a.map((I) => I[0])), t(26, k = a.map((I) => I[1]));
  }
  function y() {
    R(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, b = ""), t(11, X = null)) : k.includes(l) ? (t(9, b = g[k.indexOf(l)]), t(11, X = k.indexOf(l))) : m ? (t(9, b = l), t(11, X = null)) : (t(9, b = ""), t(11, X = null)), t(29, S = X);
  }
  function H(I) {
    if (t(11, X = parseInt(I.detail.target.dataset.index)), isNaN(X)) {
      t(11, X = null);
      return;
    }
    t(12, v = !1), t(14, x = null), u.blur();
  }
  function F(I) {
    t(10, w = a.map((re, Q) => Q)), t(12, v = !0), C("focus");
  }
  function A() {
    f || (u.focus(), t(12, v = !0));
  }
  function D(I) {
    I.preventDefault(), f || (u.focus(), t(12, v = !v));
  }
  function Y() {
    m ? t(22, l = b) : t(9, b = g[k.indexOf(l)]), t(12, v = !1), t(14, x = null), C("blur");
  }
  function P(I) {
    t(12, [v, x] = fb(I, x, w), v, (t(14, x), t(2, a), t(25, c), t(6, m), t(9, b), t(10, w), t(8, u), t(27, M), t(11, X), t(29, S), t(28, W), t(26, k))), I.key === "Enter" && (x !== null ? (t(11, X = x), t(12, v = !1), u.blur(), t(14, x = null)) : g.includes(b) ? (t(11, X = g.indexOf(b)), t(12, v = !1), t(14, x = null), u.blur()) : m && (t(22, l = b), t(11, X = null), t(12, v = !1), t(14, x = null), u.blur()), C("enter", l));
  }
  Cb(() => {
    t(23, r = !1), t(28, W = !0);
  }), kb(() => {
  });
  function se() {
    b = this.value, t(9, b), t(11, X), t(29, S), t(28, W), t(2, a), t(26, k);
  }
  function J(I) {
    hb[I ? "unshift" : "push"](() => {
      u = I, t(8, u);
    });
  }
  const U = (I) => C("key_up", { key: I.key, input_value: b });
  return i.$$set = (I) => {
    "label" in I && t(0, n = I.label), "info" in I && t(1, s = I.info), "value" in I && t(22, l = I.value), "value_is_output" in I && t(23, r = I.value_is_output), "choices" in I && t(2, a = I.choices), "disabled" in I && t(3, f = I.disabled), "show_label" in I && t(4, h = I.show_label), "container" in I && t(5, d = I.container), "allow_custom_value" in I && t(6, m = I.allow_custom_value), "filterable" in I && t(7, p = I.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && X !== S && X !== null && W && (t(9, [b, l] = a[X], b, (t(22, l), t(11, X), t(29, S), t(28, W), t(2, a), t(26, k))), t(29, S = X), C("select", {
      index: X,
      value: k[X],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (y(), cb(C, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && R(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (m || y(), t(25, c = a), t(10, w = ic(a, b)), !m && w.length > 0 && t(14, x = w[0]), u == document.activeElement && t(12, v = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && b !== M && (t(10, w = ic(a, b)), t(27, M = b), !m && w.length > 0 && t(14, x = w[0]));
  }, [
    n,
    s,
    a,
    f,
    h,
    d,
    m,
    p,
    u,
    b,
    w,
    X,
    v,
    g,
    x,
    C,
    H,
    F,
    A,
    D,
    Y,
    P,
    l,
    r,
    o,
    c,
    k,
    M,
    W,
    S,
    se,
    J,
    U
  ];
}
class Wb extends ub {
  constructor(e) {
    super(), mb(
      this,
      e,
      zb,
      Mb,
      bb,
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
  SvelteComponent: xb,
  append: Oe,
  attr: jt,
  check_outros: ia,
  create_component: _i,
  destroy_component: mi,
  detach: zi,
  element: mt,
  group_outros: sa,
  init: Bb,
  insert: Wi,
  listen: ul,
  mount_component: gi,
  run_all: Xb,
  safe_not_equal: Yb,
  set_data: Db,
  set_input_value: oc,
  set_style: We,
  space: Un,
  text: Cs,
  to_number: Eb,
  toggle_class: ac,
  transition_in: _t,
  transition_out: Lt
} = window.__gradio__svelte__internal, { createEventDispatcher: Rb } = window.__gradio__svelte__internal, { onMount: Lb, onDestroy: Pb } = window.__gradio__svelte__internal;
function rc(i) {
  let e, t, n, s, l, o, r;
  const a = [Hb, qb], c = [];
  function f(h, d) {
    return (
      /*labelDetailLock*/
      h[3] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = mt("div"), t = mt("button"), s.c(), jt(t, "class", "icon svelte-d9x7u0"), jt(t, "aria-label", "Lock label detail"), ac(
        t,
        "selected",
        /*labelDetailLock*/
        i[3] === !0
      ), We(e, "margin-right", "8px");
    },
    m(h, d) {
      Wi(h, e, d), Oe(e, t), c[n].m(t, null), l = !0, o || (r = ul(
        t,
        "click",
        /*onLockClick*/
        i[12]
      ), o = !0);
    },
    p(h, d) {
      let m = n;
      n = f(h), n !== m && (sa(), Lt(c[m], 1, 1, () => {
        c[m] = null;
      }), ia(), s = c[n], s || (s = c[n] = a[n](h), s.c()), _t(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      8) && ac(
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
      Lt(s), l = !1;
    },
    d(h) {
      h && zi(e), c[n].d(), o = !1, r();
    }
  };
}
function qb(i) {
  let e, t;
  return e = new wp({}), {
    c() {
      _i(e.$$.fragment);
    },
    m(n, s) {
      gi(e, n, s), t = !0;
    },
    i(n) {
      t || (_t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      mi(e, n);
    }
  };
}
function Hb(i) {
  let e, t;
  return e = new hp({}), {
    c() {
      _i(e.$$.fragment);
    },
    m(n, s) {
      gi(e, n, s), t = !0;
    },
    i(n) {
      t || (_t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      mi(e, n);
    }
  };
}
function cc(i) {
  let e, t, n, s, l, o, r, a = Math.round(
    /*currentOpacity*/
    i[2] * 100
  ) + "", c, f, h, d;
  return {
    c() {
      e = mt("div"), t = mt("label"), t.textContent = "Opacity", n = Un(), s = mt("div"), l = mt("input"), o = Un(), r = mt("span"), c = Cs(a), f = Cs("%"), jt(t, "for", "opacity-slider"), We(t, "font-size", "12px"), We(t, "margin-bottom", "4px"), We(t, "color", "var(--body-text-color)"), jt(l, "id", "opacity-slider"), jt(l, "type", "range"), jt(l, "min", "0"), jt(l, "max", "1"), jt(l, "step", "0.05"), We(l, "flex", "1"), We(l, "height", "4px"), We(l, "background", "var(--slider-color)"), We(l, "border-radius", "2px"), We(l, "outline", "none"), We(l, "appearance", "none"), We(l, "-webkit-appearance", "none"), We(r, "font-size", "11px"), We(r, "color", "var(--body-text-color-subdued)"), We(r, "min-width", "30px"), We(r, "text-align", "center"), We(s, "display", "flex"), We(s, "align-items", "center"), We(s, "gap", "8px"), We(s, "width", "100%"), We(e, "margin-right", "20px"), We(e, "margin-bottom", "8px"), We(e, "display", "flex"), We(e, "flex-direction", "column"), We(e, "align-items", "center"), We(e, "min-width", "120px");
    },
    m(m, p) {
      Wi(m, e, p), Oe(e, t), Oe(e, n), Oe(e, s), Oe(s, l), oc(
        l,
        /*currentOpacity*/
        i[2]
      ), Oe(s, o), Oe(s, r), Oe(r, c), Oe(r, f), h || (d = [
        ul(
          l,
          "change",
          /*input_change_input_handler*/
          i[17]
        ),
        ul(
          l,
          "input",
          /*input_change_input_handler*/
          i[17]
        ),
        ul(
          l,
          "input",
          /*onOpacityChange*/
          i[10]
        )
      ], h = !0);
    },
    p(m, p) {
      p & /*currentOpacity*/
      4 && oc(
        l,
        /*currentOpacity*/
        m[2]
      ), p & /*currentOpacity*/
      4 && a !== (a = Math.round(
        /*currentOpacity*/
        m[2] * 100
      ) + "") && Db(c, a);
    },
    d(m) {
      m && zi(e), h = !1, Xb(d);
    }
  };
}
function Ib(i) {
  let e;
  return {
    c() {
      e = Cs("Cancel");
    },
    m(t, n) {
      Wi(t, e, n);
    },
    d(t) {
      t && zi(e);
    }
  };
}
function fc(i) {
  let e, t, n;
  return t = new Go({
    props: {
      variant: "stop",
      $$slots: { default: [Ab] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[19]
  ), {
    c() {
      e = mt("div"), _i(t.$$.fragment), We(e, "margin-right", "8px");
    },
    m(s, l) {
      Wi(s, e, l), gi(t, e, null), n = !0;
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
      Lt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && zi(e), mi(t);
    }
  };
}
function Ab(i) {
  let e;
  return {
    c() {
      e = Cs("Remove");
    },
    m(t, n) {
      Wi(t, e, n);
    },
    d(t) {
      t && zi(e);
    }
  };
}
function jb(i) {
  let e;
  return {
    c() {
      e = Cs("OK");
    },
    m(t, n) {
      Wi(t, e, n);
    },
    d(t) {
      t && zi(e);
    }
  };
}
function Fb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p, u, v, g, k, b = !/*showRemove*/
  i[5] && rc(i);
  o = new Wb({
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
  ), c = new R2({
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
  let M = (
    /*showOpacity*/
    i[6] && cc(i)
  );
  m = new Go({
    props: {
      $$slots: { default: [Ib] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler*/
    i[18]
  );
  let W = (
    /*showRemove*/
    i[5] && fc(i)
  );
  return g = new Go({
    props: {
      variant: "primary",
      $$slots: { default: [jb] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[20]
  ), {
    c() {
      e = mt("div"), t = mt("div"), n = mt("span"), b && b.c(), s = Un(), l = mt("div"), _i(o.$$.fragment), r = Un(), a = mt("div"), _i(c.$$.fragment), f = Un(), M && M.c(), h = Un(), d = mt("div"), _i(m.$$.fragment), p = Un(), W && W.c(), u = Un(), v = mt("div"), _i(g.$$.fragment), We(l, "margin-right", "10px"), We(a, "margin-right", "40px"), We(a, "margin-bottom", "8px"), We(d, "margin-right", "8px"), jt(n, "class", "model-content svelte-d9x7u0"), jt(t, "class", "modal-container svelte-d9x7u0"), jt(e, "class", "modal svelte-d9x7u0"), jt(e, "id", "model-box-edit");
    },
    m(w, x) {
      Wi(w, e, x), Oe(e, t), Oe(t, n), b && b.m(n, null), Oe(n, s), Oe(n, l), gi(o, l, null), Oe(n, r), Oe(n, a), gi(c, a, null), Oe(n, f), M && M.m(n, null), Oe(n, h), Oe(n, d), gi(m, d, null), Oe(n, p), W && W.m(n, null), Oe(n, u), Oe(n, v), gi(g, v, null), k = !0;
    },
    p(w, [x]) {
      /*showRemove*/
      w[5] ? b && (sa(), Lt(b, 1, 1, () => {
        b = null;
      }), ia()) : b ? (b.p(w, x), x & /*showRemove*/
      32 && _t(b, 1)) : (b = rc(w), b.c(), _t(b, 1), b.m(n, s));
      const X = {};
      x & /*currentLabel*/
      1 && (X.value = /*currentLabel*/
      w[0]), x & /*choices*/
      16 && (X.choices = /*choices*/
      w[4]), o.$set(X);
      const S = {};
      x & /*currentColor*/
      2 && (S.value = /*currentColor*/
      w[1]), c.$set(S), /*showOpacity*/
      w[6] ? M ? M.p(w, x) : (M = cc(w), M.c(), M.m(n, h)) : M && (M.d(1), M = null);
      const C = {};
      x & /*$$scope*/
      8388608 && (C.$$scope = { dirty: x, ctx: w }), m.$set(C), /*showRemove*/
      w[5] ? W ? (W.p(w, x), x & /*showRemove*/
      32 && _t(W, 1)) : (W = fc(w), W.c(), _t(W, 1), W.m(n, u)) : W && (sa(), Lt(W, 1, 1, () => {
        W = null;
      }), ia());
      const R = {};
      x & /*$$scope*/
      8388608 && (R.$$scope = { dirty: x, ctx: w }), g.$set(R);
    },
    i(w) {
      k || (_t(b), _t(o.$$.fragment, w), _t(c.$$.fragment, w), _t(m.$$.fragment, w), _t(W), _t(g.$$.fragment, w), k = !0);
    },
    o(w) {
      Lt(b), Lt(o.$$.fragment, w), Lt(c.$$.fragment, w), Lt(m.$$.fragment, w), Lt(W), Lt(g.$$.fragment, w), k = !1;
    },
    d(w) {
      w && zi(e), b && b.d(), mi(o), mi(c), M && M.d(), mi(m), W && W.d(), mi(g);
    }
  };
}
function Tb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { opacity: c = 0.5 } = e, { currentOpacity: f = 0.5 } = e, { showRemove: h = !0 } = e, { labelDetailLock: d = !1 } = e, { showOpacity: m = !1 } = e;
  const p = Rb();
  function u(C) {
    p("change", {
      label: s,
      color: a,
      opacity: f,
      lock: d,
      ret: C
      // -1: remove, 0: cancel, 1: change
    });
  }
  function v(C) {
    const { detail: R } = C;
    let y = R;
    Number.isInteger(y) ? (Array.isArray(o) && y < o.length && t(1, a = o[y]), Array.isArray(l) && y < l.length && t(0, s = l[y][0])) : t(0, s = y);
  }
  function g(C) {
    const { detail: R } = C;
    t(1, a = R);
  }
  function k(C) {
    t(2, f = parseFloat(C.target.value));
  }
  function b(C) {
    v(C), u(1);
  }
  function M(C) {
    t(3, d = !d);
  }
  function W(C) {
    switch (C.key) {
      case "Enter":
        u(1);
        break;
    }
  }
  Lb(() => {
    document.addEventListener("keydown", W), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : "")), t(2, f = c || 0.5);
  }), Pb(() => {
    document.removeEventListener("keydown", W);
  });
  function w() {
    f = Eb(this.value), t(2, f), t(16, c);
  }
  const x = () => u(0), X = () => u(-1), S = () => u(1);
  return i.$$set = (C) => {
    "label" in C && t(13, n = C.label), "currentLabel" in C && t(0, s = C.currentLabel), "choices" in C && t(4, l = C.choices), "choicesColors" in C && t(14, o = C.choicesColors), "color" in C && t(15, r = C.color), "currentColor" in C && t(1, a = C.currentColor), "opacity" in C && t(16, c = C.opacity), "currentOpacity" in C && t(2, f = C.currentOpacity), "showRemove" in C && t(5, h = C.showRemove), "labelDetailLock" in C && t(3, d = C.labelDetailLock), "showOpacity" in C && t(6, m = C.showOpacity);
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
    m,
    u,
    v,
    g,
    k,
    b,
    M,
    n,
    o,
    r,
    c,
    w,
    x,
    X,
    S
  ];
}
class ga extends xb {
  constructor(e) {
    super(), Bb(this, e, Tb, Fb, Yb, {
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
  SvelteComponent: Ob,
  append: Ee,
  attr: ze,
  detach: Ff,
  element: rt,
  empty: Ub,
  init: Vb,
  insert: Tf,
  listen: hn,
  noop: uc,
  run_all: Nb,
  safe_not_equal: Kb,
  set_data: Zb,
  set_input_value: el,
  set_style: tl,
  space: jn,
  text: hc,
  to_number: la
} = window.__gradio__svelte__internal, { createEventDispatcher: Jb } = window.__gradio__svelte__internal;
function dc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p, u, v, g, k, b, M, W, w, x, X, S, C, R, y, H;
  return {
    c() {
      e = rt("div"), t = rt("div"), n = rt("div"), s = rt("h3"), s.textContent = "Eraser Settings", l = jn(), o = rt("button"), o.textContent = "×", r = jn(), a = rt("div"), c = rt("div"), f = rt("label"), f.textContent = "Eraser Size:", h = jn(), d = rt("div"), m = rt("input"), p = jn(), u = rt("input"), v = jn(), g = rt("div"), k = rt("div"), b = jn(), M = rt("span"), W = hc(
        /*tempSize*/
        i[1]
      ), w = hc("px"), x = jn(), X = rt("div"), S = rt("button"), S.textContent = "Cancel", C = jn(), R = rt("button"), R.textContent = "Apply", ze(s, "id", "eraser-settings-title"), ze(s, "class", "svelte-a42w5h"), ze(o, "class", "close-button svelte-a42w5h"), ze(o, "aria-label", "Close"), ze(n, "class", "modal-header svelte-a42w5h"), ze(f, "for", "eraser-size"), ze(f, "class", "svelte-a42w5h"), ze(m, "id", "eraser-size"), ze(m, "type", "range"), ze(m, "min", "1"), ze(m, "max", "50"), ze(m, "class", "size-slider svelte-a42w5h"), ze(u, "type", "number"), ze(u, "min", "1"), ze(u, "max", "50"), ze(u, "class", "size-input svelte-a42w5h"), ze(d, "class", "size-controls svelte-a42w5h"), ze(k, "class", "preview-circle svelte-a42w5h"), tl(k, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), tl(k, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), ze(M, "class", "size-label svelte-a42w5h"), ze(g, "class", "size-preview svelte-a42w5h"), ze(c, "class", "setting-group svelte-a42w5h"), ze(a, "class", "modal-body svelte-a42w5h"), ze(S, "class", "button secondary svelte-a42w5h"), ze(R, "class", "button primary svelte-a42w5h"), ze(X, "class", "modal-footer svelte-a42w5h"), ze(t, "class", "modal-content svelte-a42w5h"), ze(e, "class", "modal-backdrop svelte-a42w5h"), ze(e, "role", "dialog"), ze(e, "aria-modal", "true"), ze(e, "aria-labelledby", "eraser-settings-title");
    },
    m(F, A) {
      Tf(F, e, A), Ee(e, t), Ee(t, n), Ee(n, s), Ee(n, l), Ee(n, o), Ee(t, r), Ee(t, a), Ee(a, c), Ee(c, f), Ee(c, h), Ee(c, d), Ee(d, m), el(
        m,
        /*tempSize*/
        i[1]
      ), Ee(d, p), Ee(d, u), el(
        u,
        /*tempSize*/
        i[1]
      ), Ee(c, v), Ee(c, g), Ee(g, k), Ee(g, b), Ee(g, M), Ee(M, W), Ee(M, w), Ee(t, x), Ee(t, X), Ee(X, S), Ee(X, C), Ee(X, R), y || (H = [
        hn(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        hn(
          m,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        hn(
          m,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        hn(
          m,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        hn(
          u,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        hn(
          u,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        hn(
          S,
          "click",
          /*handleClose*/
          i[3]
        ),
        hn(
          R,
          "click",
          /*click_handler*/
          i[9]
        ),
        hn(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        hn(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], y = !0);
    },
    p(F, A) {
      A & /*tempSize*/
      2 && el(
        m,
        /*tempSize*/
        F[1]
      ), A & /*tempSize*/
      2 && la(u.value) !== /*tempSize*/
      F[1] && el(
        u,
        /*tempSize*/
        F[1]
      ), A & /*tempSize*/
      2 && tl(k, "width", Math.min(
        /*tempSize*/
        F[1],
        30
      ) + "px"), A & /*tempSize*/
      2 && tl(k, "height", Math.min(
        /*tempSize*/
        F[1],
        30
      ) + "px"), A & /*tempSize*/
      2 && Zb(
        W,
        /*tempSize*/
        F[1]
      );
    },
    d(F) {
      F && Ff(e), y = !1, Nb(H);
    }
  };
}
function Gb(i) {
  let e, t = (
    /*visible*/
    i[0] && dc(i)
  );
  return {
    c() {
      t && t.c(), e = Ub();
    },
    m(n, s) {
      t && t.m(n, s), Tf(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = dc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: uc,
    o: uc,
    d(n) {
      n && Ff(e), t && t.d(n);
    }
  };
}
function Qb(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = Jb();
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
    o = la(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = la(this.value), t(1, o), t(0, s), t(6, n);
  }
  const m = () => {
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
    d,
    m
  ];
}
class $b extends Ob {
  constructor(e) {
    super(), Vb(this, e, Qb, Gb, Kb, { eraserSize: 6, visible: 0 });
  }
}
const {
  SvelteComponent: ev,
  append: ie,
  attr: N,
  detach: Of,
  element: pe,
  empty: tv,
  init: nv,
  insert: Uf,
  listen: Ze,
  noop: _c,
  run_all: iv,
  safe_not_equal: sv,
  set_data: Lo,
  set_input_value: It,
  set_style: Hi,
  space: nt,
  text: Ii,
  to_number: Sn
} = window.__gradio__svelte__internal, { createEventDispatcher: lv } = window.__gradio__svelte__internal;
function mc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p, u, v, g, k, b, M, W = Math.round(
    /*tempOpacity*/
    i[1] * 100
  ) + "", w, x, X, S, C, R, y, H, F, A, D, Y, P, se, J, U, I, re, Q, q, _e, L, V, ce, fe, xe, E, Pe, qe, G, Xe, Fe, we, Be, ke, ot, De, Ce, B;
  return {
    c() {
      e = pe("div"), t = pe("div"), n = pe("div"), s = pe("h3"), s.textContent = "Shape Settings", l = nt(), o = pe("button"), o.textContent = "×", r = nt(), a = pe("div"), c = pe("div"), f = pe("label"), f.textContent = "Opacity:", h = nt(), d = pe("div"), m = pe("input"), p = nt(), u = pe("input"), v = nt(), g = pe("div"), k = pe("div"), b = nt(), M = pe("span"), w = Ii(W), x = Ii("%"), X = nt(), S = pe("div"), C = pe("label"), C.textContent = "Border Width:", R = nt(), y = pe("div"), H = pe("input"), F = nt(), A = pe("input"), D = nt(), Y = pe("div"), P = pe("div"), se = nt(), J = pe("span"), U = Ii(
        /*tempStrokeWidth*/
        i[2]
      ), I = Ii("px"), re = nt(), Q = pe("div"), q = pe("label"), q.textContent = "Selected Border Width:", _e = nt(), L = pe("div"), V = pe("input"), ce = nt(), fe = pe("input"), xe = nt(), E = pe("div"), Pe = pe("div"), qe = nt(), G = pe("span"), Xe = Ii(
        /*tempSelectedStrokeWidth*/
        i[3]
      ), Fe = Ii("px"), we = nt(), Be = pe("div"), ke = pe("button"), ke.textContent = "Cancel", ot = nt(), De = pe("button"), De.textContent = "Apply", N(s, "id", "shape-settings-title"), N(s, "class", "svelte-dfhagh"), N(o, "class", "close-button svelte-dfhagh"), N(o, "aria-label", "Close"), N(n, "class", "modal-header svelte-dfhagh"), N(f, "for", "shape-opacity"), N(f, "class", "svelte-dfhagh"), N(m, "id", "shape-opacity"), N(m, "type", "range"), N(m, "min", "0"), N(m, "max", "1"), N(m, "step", "0.05"), N(m, "class", "settings-slider svelte-dfhagh"), N(u, "type", "number"), N(u, "min", "0"), N(u, "max", "1"), N(u, "step", "0.05"), N(u, "class", "settings-input svelte-dfhagh"), N(d, "class", "slider-controls svelte-dfhagh"), N(k, "class", "opacity-preview svelte-dfhagh"), Hi(
        k,
        "opacity",
        /*tempOpacity*/
        i[1]
      ), N(M, "class", "setting-label svelte-dfhagh"), N(g, "class", "preview-container svelte-dfhagh"), N(c, "class", "setting-group svelte-dfhagh"), N(C, "for", "stroke-width"), N(C, "class", "svelte-dfhagh"), N(H, "id", "stroke-width"), N(H, "type", "range"), N(H, "min", "1"), N(H, "max", "10"), N(H, "class", "settings-slider svelte-dfhagh"), N(A, "type", "number"), N(A, "min", "1"), N(A, "max", "10"), N(A, "class", "settings-input svelte-dfhagh"), N(y, "class", "slider-controls svelte-dfhagh"), N(P, "class", "stroke-preview svelte-dfhagh"), Hi(P, "border-width", Math.min(
        /*tempStrokeWidth*/
        i[2],
        5
      ) + "px"), N(J, "class", "setting-label svelte-dfhagh"), N(Y, "class", "preview-container svelte-dfhagh"), N(S, "class", "setting-group svelte-dfhagh"), N(q, "for", "selected-stroke-width"), N(q, "class", "svelte-dfhagh"), N(V, "id", "selected-stroke-width"), N(V, "type", "range"), N(V, "min", "1"), N(V, "max", "15"), N(V, "class", "settings-slider svelte-dfhagh"), N(fe, "type", "number"), N(fe, "min", "1"), N(fe, "max", "15"), N(fe, "class", "settings-input svelte-dfhagh"), N(L, "class", "slider-controls svelte-dfhagh"), N(Pe, "class", "stroke-preview selected svelte-dfhagh"), Hi(Pe, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        i[3],
        5
      ) + "px"), N(G, "class", "setting-label svelte-dfhagh"), N(E, "class", "preview-container svelte-dfhagh"), N(Q, "class", "setting-group svelte-dfhagh"), N(a, "class", "modal-body svelte-dfhagh"), N(ke, "class", "button secondary svelte-dfhagh"), N(De, "class", "button primary svelte-dfhagh"), N(Be, "class", "modal-footer svelte-dfhagh"), N(t, "class", "modal-content svelte-dfhagh"), N(e, "class", "modal-backdrop svelte-dfhagh"), N(e, "role", "dialog"), N(e, "aria-modal", "true"), N(e, "aria-labelledby", "shape-settings-title");
    },
    m(le, Se) {
      Uf(le, e, Se), ie(e, t), ie(t, n), ie(n, s), ie(n, l), ie(n, o), ie(t, r), ie(t, a), ie(a, c), ie(c, f), ie(c, h), ie(c, d), ie(d, m), It(
        m,
        /*tempOpacity*/
        i[1]
      ), ie(d, p), ie(d, u), It(
        u,
        /*tempOpacity*/
        i[1]
      ), ie(c, v), ie(c, g), ie(g, k), ie(g, b), ie(g, M), ie(M, w), ie(M, x), ie(a, X), ie(a, S), ie(S, C), ie(S, R), ie(S, y), ie(y, H), It(
        H,
        /*tempStrokeWidth*/
        i[2]
      ), ie(y, F), ie(y, A), It(
        A,
        /*tempStrokeWidth*/
        i[2]
      ), ie(S, D), ie(S, Y), ie(Y, P), ie(Y, se), ie(Y, J), ie(J, U), ie(J, I), ie(a, re), ie(a, Q), ie(Q, q), ie(Q, _e), ie(Q, L), ie(L, V), It(
        V,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ie(L, ce), ie(L, fe), It(
        fe,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ie(Q, xe), ie(Q, E), ie(E, Pe), ie(E, qe), ie(E, G), ie(G, Xe), ie(G, Fe), ie(t, we), ie(t, Be), ie(Be, ke), ie(Be, ot), ie(Be, De), Ce || (B = [
        Ze(
          o,
          "click",
          /*handleClose*/
          i[5]
        ),
        Ze(
          m,
          "change",
          /*input0_change_input_handler*/
          i[11]
        ),
        Ze(
          m,
          "input",
          /*input0_change_input_handler*/
          i[11]
        ),
        Ze(
          m,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          u,
          "input",
          /*input1_input_handler*/
          i[12]
        ),
        Ze(
          u,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          H,
          "change",
          /*input2_change_input_handler*/
          i[13]
        ),
        Ze(
          H,
          "input",
          /*input2_change_input_handler*/
          i[13]
        ),
        Ze(
          H,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          A,
          "input",
          /*input3_input_handler*/
          i[14]
        ),
        Ze(
          A,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          V,
          "change",
          /*input4_change_input_handler*/
          i[15]
        ),
        Ze(
          V,
          "input",
          /*input4_change_input_handler*/
          i[15]
        ),
        Ze(
          V,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          fe,
          "input",
          /*input5_input_handler*/
          i[16]
        ),
        Ze(
          fe,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          ke,
          "click",
          /*handleClose*/
          i[5]
        ),
        Ze(
          De,
          "click",
          /*click_handler*/
          i[17]
        ),
        Ze(
          e,
          "click",
          /*handleBackdropClick*/
          i[7]
        ),
        Ze(
          e,
          "keydown",
          /*handleKeydown*/
          i[6]
        )
      ], Ce = !0);
    },
    p(le, Se) {
      Se & /*tempOpacity*/
      2 && It(
        m,
        /*tempOpacity*/
        le[1]
      ), Se & /*tempOpacity*/
      2 && Sn(u.value) !== /*tempOpacity*/
      le[1] && It(
        u,
        /*tempOpacity*/
        le[1]
      ), Se & /*tempOpacity*/
      2 && Hi(
        k,
        "opacity",
        /*tempOpacity*/
        le[1]
      ), Se & /*tempOpacity*/
      2 && W !== (W = Math.round(
        /*tempOpacity*/
        le[1] * 100
      ) + "") && Lo(w, W), Se & /*tempStrokeWidth*/
      4 && It(
        H,
        /*tempStrokeWidth*/
        le[2]
      ), Se & /*tempStrokeWidth*/
      4 && Sn(A.value) !== /*tempStrokeWidth*/
      le[2] && It(
        A,
        /*tempStrokeWidth*/
        le[2]
      ), Se & /*tempStrokeWidth*/
      4 && Hi(P, "border-width", Math.min(
        /*tempStrokeWidth*/
        le[2],
        5
      ) + "px"), Se & /*tempStrokeWidth*/
      4 && Lo(
        U,
        /*tempStrokeWidth*/
        le[2]
      ), Se & /*tempSelectedStrokeWidth*/
      8 && It(
        V,
        /*tempSelectedStrokeWidth*/
        le[3]
      ), Se & /*tempSelectedStrokeWidth*/
      8 && Sn(fe.value) !== /*tempSelectedStrokeWidth*/
      le[3] && It(
        fe,
        /*tempSelectedStrokeWidth*/
        le[3]
      ), Se & /*tempSelectedStrokeWidth*/
      8 && Hi(Pe, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        le[3],
        5
      ) + "px"), Se & /*tempSelectedStrokeWidth*/
      8 && Lo(
        Xe,
        /*tempSelectedStrokeWidth*/
        le[3]
      );
    },
    d(le) {
      le && Of(e), Ce = !1, iv(B);
    }
  };
}
function ov(i) {
  let e, t = (
    /*visible*/
    i[0] && mc(i)
  );
  return {
    c() {
      t && t.c(), e = tv();
    },
    m(n, s) {
      t && t.m(n, s), Uf(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = mc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: _c,
    o: _c,
    d(n) {
      n && Of(e), t && t.d(n);
    }
  };
}
function av(i, e, t) {
  let { opacity: n = 0.5 } = e, { strokeWidth: s = 2 } = e, { selectedStrokeWidth: l = 4 } = e, { visible: o = !1 } = e;
  const r = lv();
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
  function m(w) {
    w.key === "Escape" ? d() : w.key === "Enter" && (h(), d());
  }
  function p(w) {
    w.target === w.currentTarget && d();
  }
  function u() {
    a = Sn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function v() {
    a = Sn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function g() {
    c = Sn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function k() {
    c = Sn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function b() {
    f = Sn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function M() {
    f = Sn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  const W = () => {
    h(), d();
  };
  return i.$$set = (w) => {
    "opacity" in w && t(8, n = w.opacity), "strokeWidth" in w && t(9, s = w.strokeWidth), "selectedStrokeWidth" in w && t(10, l = w.selectedStrokeWidth), "visible" in w && t(0, o = w.visible);
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
    m,
    p,
    n,
    s,
    l,
    u,
    v,
    g,
    k,
    b,
    M,
    W
  ];
}
class rv extends ev {
  constructor(e) {
    super(), nv(this, e, av, ov, sv, {
      opacity: 8,
      strokeWidth: 9,
      selectedStrokeWidth: 10,
      visible: 0
    });
  }
}
function Pt(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, s, l] = t;
  return `rgba(${n}, ${s}, ${l}, ${e})`;
}
const it = (i, e, t) => Math.min(Math.max(i, e), t);
class si {
  constructor(e, t, n, s, l, o, r, a, c, f, h, d, m, p = "rgb(255, 255, 255)", u = 0.5, v = 25, g = 8, k = 2, b = 4, M = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (W) => {
      if (this.isDragging) {
        let w = (W.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, x = (W.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const X = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        w = it(w, -this._xmin, X - this._xmax), x = it(x, -this._ymin, S - this._ymax), this._xmin += w, this._ymin += x, this._xmax += w, this._ymax += x, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (W) => {
      if (this.isCreating) {
        if (!this.canvas) return;
        const w = this.canvas.getBoundingClientRect(), x = W.clientX - w.left, X = W.clientY - w.top;
        let S = (x - this.canvasWindow.offsetX) / this.canvasWindow.scale, C = (X - this.canvasWindow.offsetY) / this.canvasWindow.scale;
        S > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = S, this.creatingAnchorX = "xmin") : S > this._xmin && S < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = S : S > this._xmin && S < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = S : S < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = S, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (W) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = it(this._xmin, 0, w - this.minSize), this._ymin = it(this._ymin, 0, x - this.minSize), this._xmax = it(this._xmax, this.minSize, w), this._ymax = it(this._ymax, this.minSize, x), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > w ? (this._xmin -= this._xmax - w, this._xmax = w) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > x ? (this._ymin -= this._ymax - x, this._ymax = x) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (W) => {
      if (this.isResizing) {
        const w = W.clientX, x = W.clientY, X = (w - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, S = (x - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, R = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += X, this._ymin += S, this._xmin = it(this._xmin, 0, this._xmax - this.minSize), this._ymin = it(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += X, this._ymin += S, this._xmax = it(this._xmax, this._xmin + this.minSize, C), this._ymin = it(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += X, this._ymax += S, this._xmax = it(this._xmax, this._xmin + this.minSize, C), this._ymax = it(this._ymax, this._ymin + this.minSize, R);
            break;
          case 3:
            this._xmin += X, this._ymax += S, this._xmin = it(this._xmin, 0, this._xmax - this.minSize), this._ymax = it(this._ymax, this._ymin + this.minSize, R);
            break;
          case 4:
            this._ymin += S, this._ymin = it(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += X, this._xmax = it(this._xmax, this._xmin + this.minSize, C);
            break;
          case 6:
            this._ymax += S, this._ymax = it(this._ymax, this._ymin + this.minSize, R);
            break;
          case 7:
            this._xmin += X, this._xmin = it(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = M, this.label = c, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = h, this._xmax = d, this._ymax = m, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = k, this.selectedThickness = b, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = v, this.color = p, this.alpha = u, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
      const r = Math.min(this._xmin, this._xmax), a = Math.min(this._ymin, this._ymax), c = Math.max(this._xmin, this._xmax), f = Math.max(this._ymin, this._ymax), h = r * this.canvasWindow.scale, d = a * this.canvasWindow.scale;
      n = h + this.canvasXmin, s = d + this.canvasYmin, l = (c - r) * this.canvasWindow.scale, o = (f - a) * this.canvasWindow.scale;
    } else
      [n, s] = this.toCanvasCoordinates(this.xmin, this.ymin), l = this.getWidth(), o = this.getHeight();
    if (e.rect(n, s, l, o), e.fillStyle = Pt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Pt(this.color, 1), e.stroke(), e.closePath(), t && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const r = e.measureText(this.label).width + 10, a = 20;
      let c = this.xmin, f = this.ymin - a;
      e.fillStyle = "white", [c, f] = this.toCanvasCoordinates(c, f), e.fillRect(c, f, r, a), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(c, f, r, a), e.fillStyle = "black", e.fillText(this.label, c + 5, f + 15);
    }
    if (this.isSelected) {
      e.fillStyle = Pt(this.color, 1);
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
const gc = (i, e, t) => Math.min(Math.max(i, e), t);
class li {
  constructor(e, t, n, s, l, o, r, a, c, f, h, d, m = "rgb(255, 255, 255)", p = 0.5, u = 25, v = 8, g = 2, k = 4, b = 1) {
    this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (M) => {
      if (this.isDragging) {
        const W = document.querySelector("canvas");
        if (W) {
          const w = W.getBoundingClientRect(), x = M.clientX - w.left, X = M.clientY - w.top, [S, C] = this.toBoxCoordinates(x, X);
          let R = S - this.offsetMouseX, y = C - this.offsetMouseY;
          const H = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, F = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          R = gc(R, this._radius, H - this._radius), y = gc(y, this._radius, F - this._radius), this._centerX = R, this._centerY = y, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (M) => {
      if (this.isCreating) {
        if (!this.canvas) return;
        const W = this.canvas.getBoundingClientRect(), w = M.clientX - W.left, x = M.clientY - W.top, X = (w - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (x - this.canvasWindow.offsetY) / this.canvasWindow.scale, C = X - this.offsetMouseX, R = S - this.offsetMouseY, y = Math.sqrt(C * C + R * R);
        this._radius = Math.max(y, 5), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (M) => {
      if (this.isResizing) {
        const W = document.querySelector("canvas");
        if (W) {
          const w = W.getBoundingClientRect(), x = M.clientX - w.left, X = M.clientY - w.top, [S, C] = this.toBoxCoordinates(x, X), R = Math.sqrt(
            Math.pow(S - this._centerX, 2) + Math.pow(C - this._centerY, 2)
          );
          this._radius = Math.max(R, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = b, this.label = c, this.isDragging = !1, this.isCreating = !1, this._centerX = f, this._centerY = h, this._radius = d, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = v, this.thickness = g, this.selectedThickness = k, this.resizingHandleIndex = -1, this.minSize = u, this.color = m, this.alpha = p, this.applyUserScale(), this.updateHandles();
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
    if (e.beginPath(), e.arc(n, s, l, 0, 2 * Math.PI), e.fillStyle = Pt(this.color, this.alpha), e.fill(), e.strokeStyle = this.color, e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.stroke(), this.isSelected) {
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
class Vn {
  constructor(e, t, n, s, l, o, r, a, c, f = "rgb(255, 255, 255)", h = 0.5, d = 25, m = 8, p = 2, u = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (g) => {
      if (this.isDragging && this._points.length > 0) {
        let k = (g.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, b = (g.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, W = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = Math.max(-this._xmin, Math.min(k, M - this._xmax)), b = Math.max(-this._ymin, Math.min(b, W - this._ymax)), this._points = this._points.map((w) => ({
          x: w.x + k,
          y: w.y + b
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (g) => {
      if (this.isCreating) {
        if (!this.canvas) return;
        const k = this.canvas.getBoundingClientRect(), b = g.clientX - k.left, M = g.clientY - k.top, W = (b - this.canvasWindow.offsetX) / this.canvasWindow.scale, w = (M - this.canvasWindow.offsetY) / this.canvasWindow.scale, x = this._points[this._points.length - 1];
        Math.sqrt(Math.pow(W - x.x, 2) + Math.pow(w - x.y, 2)) > 2 && (this._points.push({ x: W, y: w }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
      }
    }, this.stopCreating = (g) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, b = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((M) => ({
          x: Math.max(0, Math.min(M.x, k)),
          y: Math.max(0, Math.min(M.y, b))
        })), this.updateBoundingBox(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (g) => {
      if (this.isResizing && this._points.length > 0) {
        const k = g.clientX, b = g.clientY, M = document.querySelector("canvas");
        if (M) {
          const W = M.getBoundingClientRect(), w = k - W.left, x = b - W.top, X = (w - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (x - this.canvasWindow.offsetY) / this.canvasWindow.scale, C = this.getControlPointIndex(this.resizingHandleIndex);
          if (C >= 0 && C < this._points.length) {
            const R = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, H = Math.max(0, Math.min(X, R)), F = Math.max(0, Math.min(S, y)), A = H - this._points[C].x, D = F - this._points[C].y;
            this.applyLocalDeformation(C, A, D), this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = v, this.label = c, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = m, this.thickness = p, this.selectedThickness = u, this.resizingHandleIndex = -1, this.minSize = d, this.color = f, this.alpha = h, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
        e.closePath(), e.fillStyle = Pt(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Pt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke();
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
      e.fillStyle = Pt(this.color, 1);
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
    e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Pt(this.color, 1), e.lineCap = "round", e.lineJoin = "round";
    let n = !1;
    for (let s = 0; s < this.points.length; s++) {
      const [l, o] = this.toCanvasCoordinates(this.points[s].x, this.points[s].y);
      (s < t.length ? t[s] : !0) ? n ? e.lineTo(l, o) : (e.beginPath(), e.moveTo(l, o), n = !0) : n && (e.stroke(), n = !1);
    }
    if (n && e.stroke(), this.alpha > 0) {
      e.fillStyle = Pt(this.color, this.alpha);
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
class $t {
  constructor(e, t, n, s, l, o, r, a, c, f = "rgb(255, 255, 255)", h = 0.5, d = 25, m = 8, p = 2, u = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (g) => {
      if (this.isDragging && this._points.length > 0) {
        let k = (g.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, b = (g.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, W = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = Math.max(-this._xmin, Math.min(k, M - this._xmax)), b = Math.max(-this._ymin, Math.min(b, W - this._ymax)), this._points = this._points.map((w) => ({
          x: w.x + k,
          y: w.y + b
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (g) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (g) => {
      this.isCreating && g.code === "Space" && this._points.length >= this.minPoints && (g.preventDefault(), this.finishCreating());
    }, this.handleResize = (g) => {
      if (this.isResizing && this._points.length > 0) {
        const k = g.clientX, b = g.clientY;
        if (!this.canvas) return;
        const M = this.canvas.getBoundingClientRect(), W = k - M.left, w = b - M.top, x = (W - this.canvasWindow.offsetX) / this.canvasWindow.scale, X = (w - this.canvasWindow.offsetY) / this.canvasWindow.scale, S = this.getPolygonVertexIndex(this.resizingHandleIndex);
        if (S >= 0 && S < this._points.length) {
          const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, R = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, y = Math.max(0, Math.min(x, C)), H = Math.max(0, Math.min(X, R)), F = y - this._points[S].x, A = H - this._points[S].y;
          this._points.length > 6 ? this.applyPolygonLocalDeformation(S, F, A) : this._points[S] = { x: y, y: H }, this.updateBoundingBox(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvas = s, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = v, this.label = c, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = m, this.thickness = p, this.selectedThickness = u, this.resizingHandleIndex = -1, this.minSize = d, this.color = f, this.alpha = h, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
      if (this.points.length >= 3 && !this.isCreating && (e.closePath(), e.fillStyle = Pt(this.color, this.alpha), e.fill()), e.lineWidth = this.isSelected ? this.selectedThickness : this.thickness, e.strokeStyle = Pt(this.color, 1), e.lineCap = "round", e.lineJoin = "round", e.stroke(), this.isCreating) {
        e.fillStyle = Pt(this.color, 1);
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
        e.fillStyle = Pt(this.color, 1);
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
      const c = Math.exp(-a * 1.2), f = t * c, h = n * c, d = (e - a + s) % s;
      this._points[d].x += f, this._points[d].y += h;
      const m = (e + a) % s;
      this._points[m].x += f, this._points[m].y += h;
    }
    const o = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, r = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((a) => ({
      x: Math.max(0, Math.min(a.x, o)),
      y: Math.max(0, Math.min(a.y, r))
    }));
  }
}
class cv {
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
    return e instanceof si ? this.eraseFromBox(e, n) : e instanceof li ? this.eraseFromCircle(e, n) : e instanceof Vn ? this.eraseFromFreehand(e, n) : e instanceof $t ? this.eraseFromPolygon(e, n) : [e];
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
        const m = e[c - 1], p = m.x - t, u = m.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(p, u), this.maskCtx.lineTo(h, d), this.maskCtx.stroke();
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
    const t = new $t(
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
    const t = new $t(
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
    const t = new $t(
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
    const n = new Vn(
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
      }, m = [
        d,
        { x: d.x + r, y: d.y },
        { x: d.x - r, y: d.y },
        { x: d.x, y: d.y + r },
        { x: d.x, y: d.y - r }
      ];
      for (const p of m)
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
    const l = new $t(
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
], nl = (i, e, t) => Math.min(Math.max(i, e), t);
class fv {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = nl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = nl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = nl(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = nl(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: uv,
  add_flush_callback: Ai,
  append: O,
  attr: K,
  bind: ji,
  binding_callbacks: oi,
  bubble: Po,
  check_outros: Ki,
  create_component: Je,
  destroy_component: Ge,
  detach: dn,
  element: ae,
  group_outros: Zi,
  init: hv,
  insert: _n,
  is_function: dv,
  listen: je,
  mount_component: Qe,
  noop: Vf,
  run_all: Nf,
  safe_not_equal: _v,
  set_style: il,
  space: ve,
  toggle_class: Te,
  transition_in: de,
  transition_out: ye
} = window.__gradio__svelte__internal, { onMount: mv, onDestroy: gv, createEventDispatcher: pv } = window.__gradio__svelte__internal;
function pc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p, u, v, g, k, b, M, W, w, x, X, S, C, R, y, H, F, A, D, Y, P, se, J, U, I, re, Q, q, _e, L, V, ce, fe, xe, E, Pe, qe, G, Xe, Fe, we, Be, ke, ot, De, Ce, B, le, Se, Wt, Yn, nn, xt, Ht, sn, Dn, He, ln, Ot, Re, gt, xs, xi, pt, is, Bs;
  s = new hg({}), f = new Wp({}), v = new xg({}), w = new Rp({}), H = new jp({}), D = new Fr({}), I = new Tg({});
  let Ue = (
    /*showRemoveButton*/
    i[3] && bc(i)
  ), Ve = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[25] && vc(i);
  return fe = new Kp({}), Xe = new t2({}), Ce = new wg({
    props: { selected: (
      /*labelVisibility*/
      i[26]
    ) }
  }), Se = new Fr({}), sn = new Lg({}), gt = new g2({}), {
    c() {
      e = ae("span"), t = ae("div"), n = ae("button"), Je(s.$$.fragment), l = ve(), o = ae("span"), o.textContent = "Box", r = ve(), a = ae("div"), c = ae("button"), Je(f.$$.fragment), h = ve(), d = ae("span"), d.textContent = "Freehand", m = ve(), p = ae("div"), u = ae("button"), Je(v.$$.fragment), g = ve(), k = ae("span"), k.textContent = "Circle", b = ve(), M = ae("div"), W = ae("button"), Je(w.$$.fragment), x = ve(), X = ae("span"), X.textContent = "Polygon", S = ve(), C = ae("div"), R = ae("div"), y = ae("button"), Je(H.$$.fragment), F = ve(), A = ae("button"), Je(D.$$.fragment), Y = ve(), P = ae("span"), P.textContent = "Eraser", se = ve(), J = ae("div"), U = ae("button"), Je(I.$$.fragment), re = ve(), Q = ae("span"), Q.textContent = "Move", q = ve(), Ue && Ue.c(), _e = ve(), Ve && Ve.c(), L = ve(), V = ae("div"), ce = ae("button"), Je(fe.$$.fragment), xe = ve(), E = ae("span"), E.textContent = "Undo", Pe = ve(), qe = ae("div"), G = ae("button"), Je(Xe.$$.fragment), Fe = ve(), we = ae("span"), we.textContent = "Redo", Be = ve(), ke = ae("div"), ot = ae("div"), De = ae("button"), Je(Ce.$$.fragment), B = ve(), le = ae("button"), Je(Se.$$.fragment), Wt = ve(), Yn = ae("span"), Yn.textContent = "Labels", nn = ve(), xt = ae("div"), Ht = ae("button"), Je(sn.$$.fragment), Dn = ve(), He = ae("span"), He.textContent = "Clear", ln = ve(), Ot = ae("div"), Re = ae("button"), Je(gt.$$.fragment), xs = ve(), xi = ae("span"), xi.textContent = "Export", K(n, "class", "icon tool-button svelte-eg64j9"), K(n, "aria-label", "Create box"), Te(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), K(o, "class", "tool-label svelte-eg64j9"), K(t, "class", "tool-group svelte-eg64j9"), K(c, "class", "icon tool-button svelte-eg64j9"), K(c, "aria-label", "Freehand drawing"), Te(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), K(d, "class", "tool-label svelte-eg64j9"), K(a, "class", "tool-group svelte-eg64j9"), K(u, "class", "icon tool-button svelte-eg64j9"), K(u, "aria-label", "Circle drawing"), Te(
        u,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), K(k, "class", "tool-label svelte-eg64j9"), K(p, "class", "tool-group svelte-eg64j9"), K(W, "class", "icon tool-button svelte-eg64j9"), K(W, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), Te(
        W,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), K(X, "class", "tool-label svelte-eg64j9"), K(M, "class", "tool-group svelte-eg64j9"), K(y, "class", "icon tool-button svelte-eg64j9"), K(y, "aria-label", "Erase areas from shapes"), Te(
        y,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), K(A, "class", "icon dropdown-button svelte-eg64j9"), K(A, "aria-label", "Eraser settings"), K(R, "class", "eraser-buttons svelte-eg64j9"), K(P, "class", "tool-label svelte-eg64j9"), K(C, "class", "tool-group eraser-group svelte-eg64j9"), K(U, "class", "icon tool-button svelte-eg64j9"), K(U, "aria-label", "Edit boxes"), Te(
        U,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), K(Q, "class", "tool-label svelte-eg64j9"), K(J, "class", "tool-group svelte-eg64j9"), K(ce, "class", "icon tool-button svelte-eg64j9"), K(ce, "aria-label", "Undo (Ctrl+Z)"), Te(
        ce,
        "disabled",
        /*undoStack*/
        i[27].length === 0
      ), K(E, "class", "tool-label svelte-eg64j9"), K(V, "class", "tool-group svelte-eg64j9"), K(G, "class", "icon tool-button svelte-eg64j9"), K(G, "aria-label", "Redo (Ctrl+Y)"), Te(
        G,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), K(we, "class", "tool-label svelte-eg64j9"), K(qe, "class", "tool-group svelte-eg64j9"), K(De, "class", "icon tool-button svelte-eg64j9"), K(De, "aria-label", "Show/Hide labels"), Te(
        De,
        "selected",
        /*labelVisibility*/
        i[26]
      ), K(le, "class", "icon dropdown-button svelte-eg64j9"), K(le, "aria-label", "Shape settings"), K(ot, "class", "button-group svelte-eg64j9"), K(Yn, "class", "tool-label svelte-eg64j9"), K(ke, "class", "tool-group svelte-eg64j9"), K(Ht, "class", "icon tool-button svelte-eg64j9"), K(Ht, "aria-label", "Clear Shapes"), K(He, "class", "tool-label svelte-eg64j9"), K(xt, "class", "tool-group svelte-eg64j9"), K(Re, "class", "icon tool-button svelte-eg64j9"), K(Re, "aria-label", "Export Image"), K(xi, "class", "tool-label svelte-eg64j9"), K(Ot, "class", "tool-group svelte-eg64j9"), K(e, "class", "canvas-control svelte-eg64j9");
    },
    m($, at) {
      _n($, e, at), O(e, t), O(t, n), Qe(s, n, null), O(t, l), O(t, o), O(e, r), O(e, a), O(a, c), Qe(f, c, null), O(a, h), O(a, d), O(e, m), O(e, p), O(p, u), Qe(v, u, null), O(p, g), O(p, k), O(e, b), O(e, M), O(M, W), Qe(w, W, null), O(M, x), O(M, X), O(e, S), O(e, C), O(C, R), O(R, y), Qe(H, y, null), O(R, F), O(R, A), Qe(D, A, null), O(C, Y), O(C, P), O(e, se), O(e, J), O(J, U), Qe(I, U, null), O(J, re), O(J, Q), O(e, q), Ue && Ue.m(e, null), O(e, _e), Ve && Ve.m(e, null), O(e, L), O(e, V), O(V, ce), Qe(fe, ce, null), O(V, xe), O(V, E), O(e, Pe), O(e, qe), O(qe, G), Qe(Xe, G, null), O(qe, Fe), O(qe, we), O(e, Be), O(e, ke), O(ke, ot), O(ot, De), Qe(Ce, De, null), O(ot, B), O(ot, le), Qe(Se, le, null), O(ke, Wt), O(ke, Yn), O(e, nn), O(e, xt), O(xt, Ht), Qe(sn, Ht, null), O(xt, Dn), O(xt, He), O(e, ln), O(e, Ot), O(Ot, Re), Qe(gt, Re, null), O(Ot, xs), O(Ot, xi), pt = !0, is || (Bs = [
        je(
          n,
          "click",
          /*click_handler*/
          i[67]
        ),
        je(
          c,
          "click",
          /*click_handler_1*/
          i[68]
        ),
        je(
          u,
          "click",
          /*click_handler_2*/
          i[69]
        ),
        je(
          W,
          "click",
          /*click_handler_3*/
          i[70]
        ),
        je(
          y,
          "click",
          /*click_handler_4*/
          i[71]
        ),
        je(
          A,
          "click",
          /*openEraserSettings*/
          i[35]
        ),
        je(
          U,
          "click",
          /*click_handler_5*/
          i[72]
        ),
        je(
          ce,
          "click",
          /*click_handler_8*/
          i[75]
        ),
        je(
          G,
          "click",
          /*click_handler_9*/
          i[76]
        ),
        je(
          De,
          "click",
          /*click_handler_10*/
          i[77]
        ),
        je(
          le,
          "click",
          /*openShapeSettings*/
          i[38]
        ),
        je(
          Ht,
          "click",
          /*click_handler_11*/
          i[78]
        ),
        je(
          Re,
          "click",
          /*click_handler_12*/
          i[79]
        )
      ], is = !0);
    },
    p($, at) {
      (!pt || at[0] & /*mode, Mode*/
      4608) && Te(
        n,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].creation
      ), (!pt || at[0] & /*mode, Mode*/
      4608) && Te(
        c,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].freehand
      ), (!pt || at[0] & /*mode, Mode*/
      4608) && Te(
        u,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].circle
      ), (!pt || at[0] & /*mode, Mode*/
      4608) && Te(
        W,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].polygon
      ), (!pt || at[0] & /*mode, Mode*/
      4608) && Te(
        y,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].erase
      ), (!pt || at[0] & /*mode, Mode*/
      4608) && Te(
        U,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].drag
      ), /*showRemoveButton*/
      $[3] ? Ue ? (Ue.p($, at), at[0] & /*showRemoveButton*/
      8 && de(Ue, 1)) : (Ue = bc($), Ue.c(), de(Ue, 1), Ue.m(e, _e)) : Ue && (Zi(), ye(Ue, 1, 1, () => {
        Ue = null;
      }), Ki()), !/*disableEditBoxes*/
      $[5] && /*labelDetailLock*/
      $[25] ? Ve ? (Ve.p($, at), at[0] & /*disableEditBoxes, labelDetailLock*/
      33554464 && de(Ve, 1)) : (Ve = vc($), Ve.c(), de(Ve, 1), Ve.m(e, L)) : Ve && (Zi(), ye(Ve, 1, 1, () => {
        Ve = null;
      }), Ki()), (!pt || at[0] & /*redoStack*/
      8192) && Te(
        G,
        "disabled",
        /*redoStack*/
        $[13].length === 0
      );
      const Xs = {};
      at[0] & /*labelVisibility*/
      67108864 && (Xs.selected = /*labelVisibility*/
      $[26]), Ce.$set(Xs), (!pt || at[0] & /*labelVisibility*/
      67108864) && Te(
        De,
        "selected",
        /*labelVisibility*/
        $[26]
      );
    },
    i($) {
      pt || (de(s.$$.fragment, $), de(f.$$.fragment, $), de(v.$$.fragment, $), de(w.$$.fragment, $), de(H.$$.fragment, $), de(D.$$.fragment, $), de(I.$$.fragment, $), de(Ue), de(Ve), de(fe.$$.fragment, $), de(Xe.$$.fragment, $), de(Ce.$$.fragment, $), de(Se.$$.fragment, $), de(sn.$$.fragment, $), de(gt.$$.fragment, $), pt = !0);
    },
    o($) {
      ye(s.$$.fragment, $), ye(f.$$.fragment, $), ye(v.$$.fragment, $), ye(w.$$.fragment, $), ye(H.$$.fragment, $), ye(D.$$.fragment, $), ye(I.$$.fragment, $), ye(Ue), ye(Ve), ye(fe.$$.fragment, $), ye(Xe.$$.fragment, $), ye(Ce.$$.fragment, $), ye(Se.$$.fragment, $), ye(sn.$$.fragment, $), ye(gt.$$.fragment, $), pt = !1;
    },
    d($) {
      $ && dn(e), Ge(s), Ge(f), Ge(v), Ge(w), Ge(H), Ge(D), Ge(I), Ue && Ue.d(), Ve && Ve.d(), Ge(fe), Ge(Xe), Ge(Ce), Ge(Se), Ge(sn), Ge(gt), is = !1, Nf(Bs);
    }
  };
}
function bc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Gg({}), {
    c() {
      e = ae("div"), t = ae("button"), Je(n.$$.fragment), s = ve(), l = ae("span"), l.textContent = "Delete", K(t, "class", "icon tool-button svelte-eg64j9"), K(t, "aria-label", "Remove boxes"), K(l, "class", "tool-label svelte-eg64j9"), K(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      _n(c, e, f), O(e, t), Qe(n, t, null), O(e, s), O(e, l), o = !0, r || (a = je(
        t,
        "click",
        /*click_handler_6*/
        i[73]
      ), r = !0);
    },
    p: Vf,
    i(c) {
      o || (de(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ye(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && dn(e), Ge(n), r = !1, a();
    }
  };
}
function vc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new sp({}), {
    c() {
      e = ae("div"), t = ae("button"), Je(n.$$.fragment), s = ve(), l = ae("span"), l.textContent = "Label", K(t, "class", "icon tool-button svelte-eg64j9"), K(t, "aria-label", "Edit label"), K(l, "class", "tool-label svelte-eg64j9"), K(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      _n(c, e, f), O(e, t), Qe(n, t, null), O(e, s), O(e, l), o = !0, r || (a = je(
        t,
        "click",
        /*click_handler_7*/
        i[74]
      ), r = !0);
    },
    p: Vf,
    i(c) {
      o || (de(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ye(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && dn(e), Ge(n), r = !1, a();
    }
  };
}
function wc(i) {
  let e, t;
  return e = new ga({
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
        i[0].boxes.length ? yi(
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
    i[48]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[80]
  ), {
    c() {
      Je(e.$$.fragment);
    },
    m(n, s) {
      Qe(e, n, s), t = !0;
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
      n[0].boxes.length ? yi(
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
      t || (de(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ge(e, n);
    }
  };
}
function kc(i) {
  let e, t;
  return e = new ga({
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
        i[0].boxes.length ? yi(
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
        i[25]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[49]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[81]
  ), {
    c() {
      Je(e.$$.fragment);
    },
    m(n, s) {
      Qe(e, n, s), t = !0;
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
      n[0].boxes.length ? yi(
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
      33554432 && (l.labelDetailLock = /*labelDetailLock*/
      n[25]), e.$set(l);
    },
    i(n) {
      t || (de(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ge(e, n);
    }
  };
}
function yc(i) {
  let e, t;
  return e = new ga({
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
        i[0].boxes.length ? yi(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[14]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[25]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[50]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[82]
  ), {
    c() {
      Je(e.$$.fragment);
    },
    m(n, s) {
      Qe(e, n, s), t = !0;
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
      n[0].boxes.length ? yi(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[14]
        ].color
      ) : ""), s[0] & /*labelDetailLock*/
      33554432 && (l.labelDetailLock = /*labelDetailLock*/
      n[25]), e.$set(l);
    },
    i(n) {
      t || (de(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ge(e, n);
    }
  };
}
function bv(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p, u, v, g, k, b, M = (
    /*interactive*/
    i[4] && pc(i)
  ), W = (
    /*editModalVisible*/
    i[16] && wc(i)
  ), w = (
    /*newModalVisible*/
    i[17] && kc(i)
  ), x = (
    /*editDefaultLabelVisible*/
    i[18] && yc(i)
  );
  function X(D) {
    i[83](D);
  }
  function S(D) {
    i[84](D);
  }
  let C = {};
  /*eraserSettingsVisible*/
  i[19] !== void 0 && (C.visible = /*eraserSettingsVisible*/
  i[19]), /*eraserSize*/
  i[21] !== void 0 && (C.eraserSize = /*eraserSize*/
  i[21]), a = new $b({ props: C }), oi.push(() => ji(a, "visible", X)), oi.push(() => ji(a, "eraserSize", S)), a.$on(
    "change",
    /*handleEraserSettingsChange*/
    i[36]
  ), a.$on(
    "close",
    /*handleEraserSettingsClose*/
    i[37]
  );
  function R(D) {
    i[85](D);
  }
  function y(D) {
    i[86](D);
  }
  function H(D) {
    i[87](D);
  }
  function F(D) {
    i[88](D);
  }
  let A = {};
  return (
    /*shapeSettingsVisible*/
    i[20] !== void 0 && (A.visible = /*shapeSettingsVisible*/
    i[20]), /*shapeOpacity*/
    i[22] !== void 0 && (A.opacity = /*shapeOpacity*/
    i[22]), /*shapeStrokeWidth*/
    i[23] !== void 0 && (A.strokeWidth = /*shapeStrokeWidth*/
    i[23]), /*shapeSelectedStrokeWidth*/
    i[24] !== void 0 && (A.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
    i[24]), d = new rv({ props: A }), oi.push(() => ji(d, "visible", R)), oi.push(() => ji(d, "opacity", y)), oi.push(() => ji(d, "strokeWidth", H)), oi.push(() => ji(d, "selectedStrokeWidth", F)), d.$on(
      "change",
      /*handleShapeSettingsChange*/
      i[39]
    ), d.$on(
      "close",
      /*handleShapeSettingsClose*/
      i[40]
    ), {
      c() {
        e = ae("div"), t = ae("canvas"), n = ve(), M && M.c(), s = ve(), W && W.c(), l = ve(), w && w.c(), o = ve(), x && x.c(), r = ve(), Je(a.$$.fragment), h = ve(), Je(d.$$.fragment), K(t, "tabindex", "0"), K(t, "class", "canvas-annotator svelte-eg64j9"), Te(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[15]
        ), K(e, "class", "canvas-container svelte-eg64j9"), K(e, "tabindex", "-1"), il(
          e,
          "height",
          /*height*/
          i[6]
        ), il(
          e,
          "width",
          /*width*/
          i[7]
        ), Te(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[15]
        );
      },
      m(D, Y) {
        _n(D, e, Y), O(e, t), i[66](t), _n(D, n, Y), M && M.m(D, Y), _n(D, s, Y), W && W.m(D, Y), _n(D, l, Y), w && w.m(D, Y), _n(D, o, Y), x && x.m(D, Y), _n(D, r, Y), Qe(a, D, Y), _n(D, h, Y), Qe(d, D, Y), g = !0, k || (b = [
          je(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[29]
          ),
          je(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[30]
          ),
          je(t, "pointermove", function() {
            dv(
              /*handlesCursor*/
              i[8] ? (
                /*handlePointerMove*/
                i[31]
              ) : null
            ) && /*handlesCursor*/
            (i[8] ? (
              /*handlePointerMove*/
              i[31]
            ) : null).apply(this, arguments);
          }),
          je(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[47]
          ),
          je(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[32]
          ),
          je(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[54]
          ),
          je(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[55]
          )
        ], k = !0);
      },
      p(D, Y) {
        i = D, (!g || Y[0] & /*isScrollableMode*/
        32768) && Te(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[15]
        ), (!g || Y[0] & /*height*/
        64) && il(
          e,
          "height",
          /*height*/
          i[6]
        ), (!g || Y[0] & /*width*/
        128) && il(
          e,
          "width",
          /*width*/
          i[7]
        ), (!g || Y[0] & /*isScrollableMode*/
        32768) && Te(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[15]
        ), /*interactive*/
        i[4] ? M ? (M.p(i, Y), Y[0] & /*interactive*/
        16 && de(M, 1)) : (M = pc(i), M.c(), de(M, 1), M.m(s.parentNode, s)) : M && (Zi(), ye(M, 1, 1, () => {
          M = null;
        }), Ki()), /*editModalVisible*/
        i[16] ? W ? (W.p(i, Y), Y[0] & /*editModalVisible*/
        65536 && de(W, 1)) : (W = wc(i), W.c(), de(W, 1), W.m(l.parentNode, l)) : W && (Zi(), ye(W, 1, 1, () => {
          W = null;
        }), Ki()), /*newModalVisible*/
        i[17] ? w ? (w.p(i, Y), Y[0] & /*newModalVisible*/
        131072 && de(w, 1)) : (w = kc(i), w.c(), de(w, 1), w.m(o.parentNode, o)) : w && (Zi(), ye(w, 1, 1, () => {
          w = null;
        }), Ki()), /*editDefaultLabelVisible*/
        i[18] ? x ? (x.p(i, Y), Y[0] & /*editDefaultLabelVisible*/
        262144 && de(x, 1)) : (x = yc(i), x.c(), de(x, 1), x.m(r.parentNode, r)) : x && (Zi(), ye(x, 1, 1, () => {
          x = null;
        }), Ki());
        const P = {};
        !c && Y[0] & /*eraserSettingsVisible*/
        524288 && (c = !0, P.visible = /*eraserSettingsVisible*/
        i[19], Ai(() => c = !1)), !f && Y[0] & /*eraserSize*/
        2097152 && (f = !0, P.eraserSize = /*eraserSize*/
        i[21], Ai(() => f = !1)), a.$set(P);
        const se = {};
        !m && Y[0] & /*shapeSettingsVisible*/
        1048576 && (m = !0, se.visible = /*shapeSettingsVisible*/
        i[20], Ai(() => m = !1)), !p && Y[0] & /*shapeOpacity*/
        4194304 && (p = !0, se.opacity = /*shapeOpacity*/
        i[22], Ai(() => p = !1)), !u && Y[0] & /*shapeStrokeWidth*/
        8388608 && (u = !0, se.strokeWidth = /*shapeStrokeWidth*/
        i[23], Ai(() => u = !1)), !v && Y[0] & /*shapeSelectedStrokeWidth*/
        16777216 && (v = !0, se.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
        i[24], Ai(() => v = !1)), d.$set(se);
      },
      i(D) {
        g || (de(M), de(W), de(w), de(x), de(a.$$.fragment, D), de(d.$$.fragment, D), g = !0);
      },
      o(D) {
        ye(M), ye(W), ye(w), ye(x), ye(a.$$.fragment, D), ye(d.$$.fragment, D), g = !1;
      },
      d(D) {
        D && (dn(e), dn(n), dn(s), dn(l), dn(o), dn(r), dn(h)), i[66](null), M && M.d(D), W && W.d(D), w && w.d(D), x && x.d(D), Ge(a, D), Ge(d, D), k = !1, Nf(b);
      }
    }
  );
}
const vv = 50, wv = 3, qo = 3;
function ti(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function yi(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function ni(i, e) {
  const t = e.getBoundingClientRect();
  let n = i.clientX - t.left, s = i.clientY - t.top;
  return { mouseX: n, mouseY: s };
}
function kv(i, e, t) {
  let n;
  var s;
  (function(_) {
    _[_.creation = 0] = "creation", _[_.drag = 1] = "drag", _[_.freehand = 2] = "freehand", _[_.circle = 3] = "circle", _[_.polygon = 4] = "polygon", _[_.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, f = !1, { imageUrl: h = null } = e, { interactive: d } = e, { boxMinSize: m = 10 } = e, { handleSize: p } = e, { value: u } = e, { choices: v = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: k = !1 } = e, { height: b = "100%" } = e, { width: M = "100%" } = e, { singleBox: W = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: x = !0 } = e, { useDefaultLabel: X = !1 } = e, { shapeCreationMode: S = "drag" } = e, { autoScroll: C = !0 } = e, { preserveResolution: R = !0 } = e;
  w === null && (w = k);
  let y, H, F = null, A = -1, D = s.drag, Y = new fv(B), P;
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
  u !== null && u.boxes && u.boxes.length == 0 ? D = se(S) : u !== null && u.boxes && u.boxes.length > 0 ? D = S === "drag" ? s.drag : se(S) : D = se(S);
  let J = 0, U = 0, I = 0, re = 0, Q = 1, q = 0, _e = 0, L = 0, V = 0, ce = !1, fe = !1, xe = !1, E = !1, Pe = !1, qe = !1, G = null, Xe = 10, { boxAlpha: Fe = 0.5 } = e, we = Fe, Be = 2, ke = 4, ot = X, De = { label: "", color: "" };
  const Ce = pv();
  function B() {
    if (H) {
      if (H.clearRect(0, 0, y.width, y.height), H.save(), H.translate(Y.offsetX, Y.offsetY), H.scale(Y.scale, Y.scale), F !== null && u !== null) {
        switch (u.orientation) {
          case 0:
            H.drawImage(F, 0, 0, q, _e);
            break;
          case 1:
            H.translate(q, 0), H.rotate(Math.PI / 2), H.drawImage(F, 0, 0, _e, q);
            break;
          case 2:
            H.translate(q, _e), H.rotate(Math.PI), H.drawImage(F, 0, 0, q, _e);
            break;
          case 3:
            H.translate(0, _e), H.rotate(-Math.PI / 2), H.drawImage(F, 0, 0, _e, q);
            break;
        }
        H.restore();
      }
      if (u !== null && u.boxes)
        for (const _ of u.boxes.slice().reverse())
          _.render(H, c);
      D === s.erase && P && P.renderErasePath(H);
    }
  }
  function le(_) {
    t(14, A = _), u !== null && u.boxes && (u.boxes.forEach((z) => {
      z.setSelected(!1);
    }), _ >= 0 && _ < u.boxes.length && u.boxes[_].setSelected(!0)), B();
  }
  function Se(_) {
    d && (a = !1, _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId), D === s.creation ? is(_) : D === s.freehand ? xs(_) : D === s.circle ? Bs(_) : D === s.polygon ? xi(_) : D === s.erase ? Ue(_) : D === s.drag && Yn(_));
  }
  function Wt(_, z) {
    let j, T;
    return ce ? (j = (_ - Y.offsetX) / Y.scale, T = (z - Y.offsetY) / Y.scale) : (j = (_ - Y.offsetX) / Q / Y.scale, T = (z - Y.offsetY) / Q / Y.scale), { imageX: j, imageY: T };
  }
  function Yn(_) {
    const z = ni(_, y), j = z.mouseX, T = z.mouseY;
    let Z = !1;
    if (!(u === null || !u.boxes)) {
      for (const [ee, te] of u.boxes.entries()) {
        const dt = te.indexOfPointInsideHandle(j, T);
        if (dt >= 0) {
          Z = !0, le(ee);
          let on = null;
          te.onMoveStart = () => {
            on = Re(te);
          }, te.onMoveEnd = () => {
            if (on) {
              const Hl = Re(te);
              He({
                type: "edit_shape",
                shapeIndex: ee,
                oldShapeData: on,
                shapeData: Hl
              }), on = null;
            }
          }, te.startResize(dt, _);
          return;
        }
      }
      for (const [ee, te] of u.boxes.entries())
        if (te.isPointInsideBox(j, T)) {
          Z = !0, le(ee);
          let dt = null;
          te.onMoveStart = () => {
            dt = Re(te);
          }, te.onMoveEnd = () => {
            dt && (He({
              type: "edit_shape",
              shapeIndex: ee,
              oldShapeData: dt,
              shapeData: Re(te)
            }), dt = null);
          }, te.startDrag(_);
          return;
        }
      if (!Z) {
        if (W || le(-1), D === s.drag) {
          const ee = Wt(j, T);
          let te = ee.imageX, dt = ee.imageY;
          const on = ce ? L : (F == null ? void 0 : F.naturalWidth) || 0, Hl = ce ? V : (F == null ? void 0 : F.naturalHeight) || 0;
          F && te >= 0 && te <= on && dt >= 0 && dt <= Hl && Ce("select", {
            coordinates: [Math.round(te), Math.round(dt)]
          });
        }
        D === s.drag && Y.startDrag(_);
      }
    }
  }
  function nn(_) {
    D === s.erase && P && $(), Ce("change");
  }
  function xt(_) {
    if (u === null)
      return;
    if (D === s.erase && P) {
      Ve(_);
      return;
    }
    if (D !== s.drag)
      return;
    const z = ni(_, y), j = z.mouseX, T = z.mouseY;
    for (const [Z, ee] of u.boxes.entries()) {
      const te = ee.indexOfPointInsideHandle(j, T);
      if (te >= 0) {
        t(11, y.style.cursor = ee.resizeHandles[te].cursor, y);
        return;
      }
    }
    t(11, y.style.cursor = "default", y);
  }
  function Ht(_) {
    if (d) {
      if (_.ctrlKey) {
        switch (_.key.toLowerCase()) {
          case "z":
            _.shiftKey ? Ot() : ln(), _.preventDefault();
            break;
          case "y":
            Ot(), _.preventDefault();
            break;
        }
        return;
      }
      switch (_.key) {
        case "Delete":
          Jn();
          break;
        case " ":
          D === s.polygon && G && G.isCreating && (_.preventDefault(), G._points.length >= G.minPoints && G.finishCreating());
          break;
      }
    }
  }
  function sn(_) {
    _.preventDefault();
    const z = 1 / (1 + _.deltaY / 1e3 * 0.5), j = parseFloat((Y.scale * z).toFixed(2)), T = j < 1 ? 1 : j, Z = y.getBoundingClientRect(), ee = _.clientX - Z.left, te = _.clientY - Z.top, dt = (ee - Y.offsetX) / Y.scale, on = (te - Y.offsetY) / Y.scale;
    Y.offsetX = ee - dt * T, Y.offsetY = te - on * T, Y.scale = T, B();
  }
  function Dn() {
    if (Y.scale = 1, F !== null && y) {
      if (Y.imageRotatedWidth <= y.width) {
        const _ = (y.width - q) / 2;
        Y.offsetX = _;
      } else
        Y.offsetX = 0;
      if (_e < y.height) {
        const _ = (y.height - _e) / 2;
        Y.offsetY = _;
      } else
        Y.offsetY = 0;
    } else
      Y.offsetX = 0, Y.offsetY = 0;
    B();
  }
  function He(_) {
    if (a) {
      console.log("Skipping undo action during initial state:", _);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, _), { timestamp: Date.now() })), l.length > vv && l.shift(), console.log("Added undo action:", _, "Stack size:", l.length);
  }
  function ln() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let z = r.length - 1; z >= 0; z--) {
        const j = r[z];
        if (j.recoveryCount < qo) {
          u.boxes.map((T) => Re(T)), t(0, u.boxes = [], u);
          for (const T of j.allShapes) {
            const Z = gt(T);
            Z && u.boxes.push(Z);
          }
          j.recoveryCount++, j.recoveryCount >= qo && (r.splice(z, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${u.boxes.length} shapes from pre-clear history. Recovery ${j.recoveryCount}/${qo}`), le(-1), B(), Ce("change");
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
          if (_.shapeIndex !== void 0 && _.shapeIndex < u.boxes.length) {
            const z = u.boxes.splice(_.shapeIndex, 1)[0];
            o.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: Re(z),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const z = gt(_.shapeData);
            u.boxes.splice(_.shapeIndex, 0, z), o.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (G && _.pointData) {
            if (G._points.pop(), G._points.length === 0) {
              const z = u.boxes.indexOf(G);
              z >= 0 && u.boxes.splice(z, 1), G = null;
            } else
              G.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: _.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.oldShapeData && _.shapeIndex < u.boxes.length) {
            const z = Re(u.boxes[_.shapeIndex]);
            gt(_.oldShapeData, u.boxes[_.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: z,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", _);
            const z = u.boxes.map((j) => Re(j));
            t(0, u.boxes = [], u);
            for (const j of _.oldShapeData) {
              const T = gt(j);
              T && u.boxes.push(T);
            }
            console.log("Restored shapes:", u.boxes.length), o.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: z,
              shapeData: _.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      le(-1), B(), Ce("change");
    }
  }
  function Ot() {
    if (o.length === 0) return;
    const _ = o.pop();
    if (_) {
      switch (_.type) {
        case "create_shape":
          if (_.shapeIndex !== void 0 && _.shapeIndex < u.boxes.length) {
            const z = u.boxes.splice(_.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: _.shapeIndex,
              shapeData: Re(z),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (_.shapeData && _.shapeIndex !== void 0) {
            const z = gt(_.shapeData);
            u.boxes.splice(_.shapeIndex, 0, z), l.push({
              type: "create_shape",
              shapeIndex: _.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          _.pointData && (G ? (G._points.push(_.pointData), G._points.length === 1 && !u.boxes.includes(G) && (W ? t(0, u.boxes = [G], u) : t(0, u.boxes = [G, ...u.boxes], u)), G.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: _.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (_.shapeIndex !== void 0 && _.shapeData && _.shapeIndex < u.boxes.length) {
            const z = Re(u.boxes[_.shapeIndex]);
            gt(_.shapeData, u.boxes[_.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: _.shapeIndex,
              oldShapeData: z,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          } else if (_.shapeIndex === -1 && _.shapeData) {
            const z = u.boxes.map((j) => Re(j));
            t(0, u.boxes = [], u);
            for (const j of _.shapeData) {
              const T = gt(j);
              T && u.boxes.push(T);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: z,
              shapeData: _.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      le(-1), B(), Ce("change");
    }
  }
  function Re(_) {
    return _ ? _ instanceof Vn ? {
      type: "freehand",
      points: [..._._points],
      label: _.label,
      color: _.color,
      xmin: _.xmin,
      ymin: _.ymin,
      xmax: _.xmax,
      ymax: _.ymax
    } : _ instanceof $t ? {
      type: "polygon",
      points: [..._._points],
      label: _.label,
      color: _.color,
      xmin: _.xmin,
      ymin: _.ymin,
      xmax: _.xmax,
      ymax: _.ymax
    } : _ instanceof li ? {
      type: "circle",
      label: _.label,
      color: _.color,
      centerX: _._centerX,
      centerY: _._centerY,
      radius: _._radius
    } : _ instanceof si ? {
      type: "box",
      label: _.label,
      color: _.color,
      xmin: _._xmin,
      ymin: _._ymin,
      xmax: _._xmax,
      ymax: _._ymax
    } : null : null;
  }
  function gt(_, z) {
    if (!_) return null;
    if (z)
      return z.label = _.label, z.color = _.color, z instanceof si ? (z._xmin = _.xmin, z._ymin = _.ymin, z._xmax = _.xmax, z._ymax = _.ymax, typeof z.applyUserScale == "function" && z.applyUserScale()) : z instanceof li ? (z._centerX = _.centerX, z._centerY = _.centerY, z._radius = _.radius, typeof z.applyUserScale == "function" && z.applyUserScale()) : (z.xmin = _.xmin, z.ymin = _.ymin, z.xmax = _.xmax, z.ymax = _.ymax), (z instanceof Vn || z instanceof $t) && _.points && (z._points = [..._.points], z.updateBoundingBox()), z;
    switch (_.type) {
      case "freehand":
        const j = new Vn(B, Ut, Y, y, J, U, I, re, _.label, _.color, we, m, p, Be, ke, Q);
        return j._points = [..._.points], j.updateBoundingBox(), j;
      case "polygon":
        const T = new $t(B, Ut, Y, y, J, U, I, re, _.label, _.color, we, m, p, Be, ke, Q);
        return T._points = [..._.points], T.updateBoundingBox(), T;
      case "circle":
        return new li(B, Ut, Y, y, J, U, I, re, _.label, _.centerX, _.centerY, _.radius, _.color, we, m, p, Be, ke, Q);
      case "box":
        return new si(B, Ut, Y, y, J, U, I, re, _.label, _.xmin, _.ymin, _.xmax, _.ymax, _.color, we, m, p, Be, ke, Q);
    }
    return null;
  }
  function xs(_) {
    const z = ni(_, y), j = Wt(z.mouseX, z.mouseY);
    y.getBoundingClientRect();
    let T;
    g.length > 0 ? T = ti(g[0]) : W ? u.boxes.length > 0 ? T = u.boxes[0].color : T = ft[0] : T = ft[u.boxes.length % ft.length];
    let Z = new Vn(B, Ut, Y, y, J, U, I, re, "", T, we, m, p, Be, ke, Q);
    Z.startCreating(_, j.imageX, j.imageY), W ? t(0, u.boxes = [Z], u) : t(0, u.boxes = [Z, ...u.boxes], u), He({ type: "create_shape", shapeIndex: 0 }), le(0), B(), Ce("change");
  }
  function xi(_) {
    G && (!G._points || G._points.length === 0 || !u.boxes.includes(G)) && (console.log("Resetting invalid currentPolygon state"), G = null), G === null ? pt(_) : G.isCreating && (G.addPoint(_) || (B(), Ce("change")));
  }
  function pt(_) {
    const z = ni(_, y), j = Wt(z.mouseX, z.mouseY);
    y.getBoundingClientRect();
    let T;
    g.length > 0 ? T = ti(g[0]) : W ? u.boxes.length > 0 ? T = u.boxes[0].color : T = ft[0] : T = ft[u.boxes.length % ft.length];
    let Z = new $t(B, su, Y, y, J, U, I, re, "", T, we, m, p, Be, ke, Q);
    Z.onPointAdded = (ee) => {
      He({ type: "polygon_point", pointData: ee });
    }, G = Z, Z.startCreating(_, j.imageX, j.imageY), W ? t(0, u.boxes = [Z], u) : t(0, u.boxes = [Z, ...u.boxes], u), He({ type: "create_shape", shapeIndex: 0 }), le(0), B(), Ce("change");
  }
  function is(_) {
    const z = ni(_, y), j = Wt(z.mouseX, z.mouseY);
    let T = j.imageX, Z = j.imageY, ee;
    g.length > 0 ? ee = ti(g[0]) : W ? u.boxes.length > 0 ? ee = u.boxes[0].color : ee = ft[0] : ee = ft[u.boxes.length % ft.length];
    let te = new si(B, Ut, Y, y, J, U, I, re, "", T, Z, T, Z, ee, we, m, p, Be, ke, Q);
    te.startCreating(_, T, Z), W ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), He({ type: "create_shape", shapeIndex: 0 }), le(0), B(), Ce("change");
  }
  function Bs(_) {
    const z = ni(_, y), j = Wt(z.mouseX, z.mouseY);
    let T = j.imageX, Z = j.imageY, ee;
    g.length > 0 ? ee = ti(g[0]) : W ? u.boxes.length > 0 ? ee = u.boxes[0].color : ee = ft[0] : ee = ft[u.boxes.length % ft.length];
    let te = new li(B, Ut, Y, y, J, U, I, re, "", T, Z, 0, ee, we, m, p, Be, ke, Q);
    te.startCreating(_, T, Z), W ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), He({ type: "create_shape", shapeIndex: 0 }), le(0), B(), Ce("change");
  }
  function Ue(_) {
    P || (P = new cv(Y, Q), P.setBrushSize(Xe)), P.setScaleFactor(Q);
    const z = y.getBoundingClientRect();
    P.startErase(_, z), B();
  }
  function Ve(_) {
    if (!P) return;
    const z = y.getBoundingClientRect();
    P.continueErase(_, z), B();
  }
  function $() {
    if (!P) return;
    const _ = P.endErase();
    if (_.length === 0) {
      En();
      return;
    }
    const z = [...u.boxes], j = [], T = [];
    for (let Z = 0; Z < u.boxes.length; Z++) {
      const ee = u.boxes[Z], te = P.eraseFromShape(ee, _);
      if (te.length === 0)
        j.push(Z);
      else {
        if (te.length === 1 && te[0] === ee)
          continue;
        j.push(Z), T.push(...te);
      }
    }
    if (j.length > 0 || T.length > 0) {
      for (let Z = j.length - 1; Z >= 0; Z--)
        u.boxes.splice(j[Z], 1);
      u.boxes.push(...T), He({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: z.map((Z) => Re(Z)),
        shapeData: u.boxes.map((Z) => Re(Z))
      }), le(-1), Ce("change");
    }
    B(), En();
  }
  function at() {
    t(19, Pe = !0);
  }
  function Xs(_) {
    t(21, Xe = _.detail.size), P && P.setBrushSize(Xe);
  }
  function $f() {
    t(19, Pe = !1);
  }
  function eu() {
    t(20, qe = !0);
  }
  function tu(_) {
    t(22, we = _.detail.opacity), t(23, Be = _.detail.strokeWidth), t(24, ke = _.detail.selectedStrokeWidth), iu(), B();
  }
  function nu() {
    t(20, qe = !1);
  }
  function iu() {
    for (let _ of u.boxes) {
      const z = _;
      z.alpha !== void 0 && (z.alpha = we), z.thickness !== void 0 && (z.thickness = Be), z.selectedThickness !== void 0 && (z.selectedThickness = ke);
    }
  }
  function Ys() {
    t(12, D = s.creation), t(11, y.style.cursor = "crosshair", y), G = null;
  }
  function pa() {
    t(12, D = s.freehand), t(11, y.style.cursor = "crosshair", y), G = null;
  }
  function ba() {
    t(12, D = s.circle), t(11, y.style.cursor = "crosshair", y), G = null;
  }
  function va() {
    t(12, D = s.polygon), t(11, y.style.cursor = "crosshair", y);
  }
  function wa() {
    t(12, D = s.erase), t(11, y.style.cursor = "crosshair", y), G = null;
  }
  function En() {
    t(12, D = s.drag), t(11, y.style.cursor = "default", y), G = null;
  }
  function Ut() {
    A >= 0 && A < u.boxes.length && (u.boxes[A].getArea() < 1 ? Jn() : (k || (ot ? ya() : t(17, xe = !0)), W && En()));
  }
  function su() {
    G = null, A >= 0 && A < u.boxes.length && (u.boxes[A].getArea() < 1 ? Jn() : (k || (ot ? ya() : t(17, xe = !0)), En()));
  }
  function lu() {
    A >= 0 && A < u.boxes.length && !k && t(16, fe = !0);
  }
  function ou(_) {
    if (!d)
      return;
    const z = ni(_, y), j = z.mouseX, T = z.mouseY;
    let Z = !1;
    for (const [ee, te] of u.boxes.entries())
      if (te.isPointInsideBox(j, T)) {
        Z = !0, le(ee), lu();
        break;
      }
    Z || Dn();
  }
  function ka(_, z) {
    const j = v.findIndex((T) => T[0] === _);
    j === -1 ? (v.push([_, v.length]), g.push(z), t(1, v), t(2, g), console.log(`Added custom label "${_}" with color ${z} to choices`)) : g[j] !== z && (t(2, g[j] = z, g), t(2, g), console.log(`Updated color for existing label "${_}" to ${z}`));
  }
  function au(_) {
    t(16, fe = !1);
    const { detail: z } = _;
    let j = z.label, T = z.color, Z = z.opacity, ee = z.ret;
    if (A >= 0 && A < u.boxes.length) {
      let te = u.boxes[A];
      if (ee == 1) {
        const dt = Re(te);
        ka(j, T), te.label = j, te.color = ti(T), Z !== void 0 && (te.alpha = Z);
        const on = Re(te);
        He({
          type: "edit_shape",
          shapeIndex: A,
          oldShapeData: dt,
          shapeData: on
        }), B(), Ce("change");
      } else ee == -1 && Jn();
    }
    setTimeout(
      () => {
        y && (y.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function ru(_) {
    t(17, xe = !1);
    const { detail: z } = _;
    let j = z.label, T = z.color, Z = z.ret, ee = z.lock;
    if (A >= 0 && A < u.boxes.length) {
      let te = u.boxes[A];
      Z == 1 ? (ka(j, T), t(25, ot = ee), De.label = j, De.color = T, te.label = j, te.color = ti(T), B(), Ce("change"), En()) : Jn();
    }
    setTimeout(
      () => {
        y && (y.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function cu(_) {
    t(18, E = !1);
    const { detail: z } = _;
    let j = z.label, T = z.color, Z = z.ret, ee = z.lock;
    Z == 1 && (t(25, ot = ee), De.label = j, De.color = T), setTimeout(
      () => {
        y && (y.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function ya() {
    if (A >= 0 && A < u.boxes.length) {
      let _ = u.boxes[A];
      _.label = De.label, De.color !== "" && (_.color = ti(De.color)), B(), Ce("change"), En();
    }
    setTimeout(
      () => {
        y && (y.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function Jn() {
    if (A >= 0 && A < u.boxes.length) {
      const _ = u.boxes[A], z = Re(_);
      He({
        type: "delete_shape",
        shapeIndex: A,
        shapeData: z
      }), u.boxes.splice(A, 1), le(-1), W && Ys(), Ce("change");
    }
  }
  function Ca() {
    if (u.boxes.length === 0) return;
    const _ = u.boxes.map((z) => Re(z));
    for (r.push({
      allShapes: _,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > wv; )
      r.shift();
    t(0, u.boxes = [], u), le(-1), G = null, W && Ys(), B(), Ce("change"), console.log(`Cleared ${_.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function Sa() {
    if (!F || !y) {
      console.error("No image or canvas available for export");
      return;
    }
    const _ = document.createElement("canvas"), z = _.getContext("2d");
    if (!z) {
      console.error("Could not get export canvas context");
      return;
    }
    _.width = L || F.naturalWidth, _.height = V || F.naturalHeight, z.drawImage(F, 0, 0, _.width, _.height);
    const j = Y.scale, T = Y.offsetX, Z = Y.offsetY;
    Y.scale = 1, Y.offsetX = 0, Y.offsetY = 0;
    for (const ee of u.boxes) {
      const te = ee.scaleFactor;
      ee.scaleFactor = 1, "applyUserScale" in ee && typeof ee.applyUserScale == "function" && typeof ee.applyUserScale == "function" && ee.applyUserScale(), ee.render(z, c), ee.scaleFactor = te, "applyUserScale" in ee && typeof ee.applyUserScale == "function" && typeof ee.applyUserScale == "function" && ee.applyUserScale();
    }
    Y.scale = j, Y.offsetX = T, Y.offsetY = Z, _.toBlob(
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
  function Ds() {
    if (y) {
      if (Q = 1, t(11, y.width = y.clientWidth, y), Y.setRotatedImage(F), F !== null) {
        L = Y.imageRotatedWidth, V = Y.imageRotatedHeight;
        const z = (u == null ? void 0 : u.scrollable_mode) || C && R && (Y.imageRotatedWidth > y.clientWidth || Y.imageRotatedHeight > (typeof b == "number" ? b : 800));
        if (t(15, ce = z), ce && R) {
          q = Y.imageRotatedWidth, _e = Y.imageRotatedHeight;
          const j = typeof b == "number" ? b : 800;
          t(11, y.height = j, y), J = 0, U = 0, I = y.width, re = y.height, Q = 1, (Y.offsetX === void 0 || Y.offsetY === void 0) && (Y.offsetX = (y.width - q) / 2, Y.offsetY = (y.height - _e) / 2, q > y.width && (Y.offsetX = 0), _e > y.height && (Y.offsetY = 0));
        } else if (Y.imageRotatedWidth > y.width)
          Q = y.width / Y.imageRotatedWidth, q = Math.round(Y.imageRotatedWidth * Q), _e = Math.round(Y.imageRotatedHeight * Q), J = 0, U = 0, I = q, re = _e, t(11, y.height = _e, y);
        else {
          q = Y.imageRotatedWidth, _e = Y.imageRotatedHeight;
          var _ = (y.width - q) / 2;
          J = _, U = 0, I = _ + q, re = _e, t(11, y.height = _e, y);
        }
        Y.imageWidth = q, Y.imageHeight = _e;
      } else
        J = 0, U = 0, I = y.width, re = y.height, t(11, y.height = y.clientHeight, y), t(15, ce = !1);
      if (Y.resize(y.width, y.height, J, U), I > 0 && re > 0)
        for (const z of u.boxes)
          z.canvasXmin = J, z.canvasYmin = U, z.canvasXmax = I, z.canvasYmax = re, z.setScaleFactor(Q);
      B(), Ce("change");
    }
  }
  const fu = new ResizeObserver(Ds);
  function uu() {
    if (!(u === null || !u.boxes))
      for (let _ = 0; _ < u.boxes.length; _++) {
        let z = u.boxes[_];
        if (!(z instanceof si) && !(z instanceof Vn) && !(z instanceof $t) && !(z instanceof li)) {
          let j = "", T = "";
          if (z.hasOwnProperty("color") ? (j = z.color, Array.isArray(j) && j.length === 3 && (j = `rgb(${j[0]}, ${j[1]}, ${j[2]})`)) : j = ft[_ % ft.length], z.hasOwnProperty("label") && (T = z.label), z.hasOwnProperty("type") && z.type === "freehand" && z.hasOwnProperty("points")) {
            let Z = new Vn(B, Ut, Y, y, J, U, I, re, T, j, we, m, p, Be, ke, Q);
            Z._points = z.points, Z.updateBoundingBox(), z = Z;
          } else if (z.hasOwnProperty("type") && z.type === "circle" && z.hasOwnProperty("centerX") && z.hasOwnProperty("centerY") && z.hasOwnProperty("radius"))
            z = new li(B, Ut, Y, y, J, U, I, re, T, z.centerX, z.centerY, z.radius, j, we, m, p, Be, ke, Q);
          else if (z.hasOwnProperty("type") && z.type === "polygon" && z.hasOwnProperty("points")) {
            let Z = new $t(B, Ut, Y, y, J, U, I, re, T, j, we, m, p, Be, ke, Q);
            Z._points = z.points, Z.updateBoundingBox(), z = Z;
          } else
            z = new si(B, Ut, Y, y, J, U, I, re, T, z.xmin, z.ymin, z.xmax, z.ymax, j, we, m, p, Be, ke);
          t(0, u.boxes[_] = z, u);
        }
      }
  }
  function Ma() {
    h !== null ? (F === null || F.src != h) && (F = new Image(), F.src = h, F.onload = function() {
      Ds(), B();
    }) : F = null;
  }
  mv(() => {
    if (a = !0, Array.isArray(v) && v.length > 0) {
      if (!Array.isArray(g) || g.length == 0)
        for (let _ = 0; _ < v.length; _++) {
          let z = ft[_ % ft.length];
          g.push(yi(z));
        }
      De.label = v[0][0], De.color = g[0];
    }
    H = y.getContext("2d"), fu.observe(y), A < 0 && u !== null && u.boxes.length > 0 && le(0), Ma(), Ds(), B(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function hu() {
    document.addEventListener("keydown", Ht);
  }
  function du() {
    document.removeEventListener("keydown", Ht);
  }
  gv(() => {
    document.removeEventListener("keydown", Ht);
  });
  function _u(_) {
    oi[_ ? "unshift" : "push"](() => {
      y = _, t(11, y), t(0, u), t(65, f), t(61, S), t(12, D), t(9, s);
    });
  }
  const mu = () => Ys(), gu = () => pa(), pu = () => ba(), bu = () => va(), vu = () => wa(), wu = () => En(), ku = () => Jn(), yu = () => t(18, E = !0), Cu = () => ln(), Su = () => Ot(), Mu = () => {
    t(10, c = !c), B();
  }, zu = () => Ca(), Wu = () => Sa();
  function xu(_) {
    Po.call(this, i, _);
  }
  function Bu(_) {
    Po.call(this, i, _);
  }
  function Xu(_) {
    Po.call(this, i, _);
  }
  function Yu(_) {
    Pe = _, t(19, Pe);
  }
  function Du(_) {
    Xe = _, t(21, Xe);
  }
  function Eu(_) {
    qe = _, t(20, qe);
  }
  function Ru(_) {
    we = _, t(22, we), t(64, Fe);
  }
  function Lu(_) {
    Be = _, t(23, Be);
  }
  function Pu(_) {
    ke = _, t(24, ke);
  }
  return i.$$set = (_) => {
    "imageUrl" in _ && t(56, h = _.imageUrl), "interactive" in _ && t(4, d = _.interactive), "boxMinSize" in _ && t(57, m = _.boxMinSize), "handleSize" in _ && t(58, p = _.handleSize), "value" in _ && t(0, u = _.value), "choices" in _ && t(1, v = _.choices), "choicesColors" in _ && t(2, g = _.choicesColors), "disableEditBoxes" in _ && t(5, k = _.disableEditBoxes), "height" in _ && t(6, b = _.height), "width" in _ && t(7, M = _.width), "singleBox" in _ && t(59, W = _.singleBox), "showRemoveButton" in _ && t(3, w = _.showRemoveButton), "handlesCursor" in _ && t(8, x = _.handlesCursor), "useDefaultLabel" in _ && t(60, X = _.useDefaultLabel), "shapeCreationMode" in _ && t(61, S = _.shapeCreationMode), "autoScroll" in _ && t(62, C = _.autoScroll), "preserveResolution" in _ && t(63, R = _.preserveResolution), "boxAlpha" in _ && t(64, Fe = _.boxAlpha);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    1024 && t(26, n = c), i.$$.dirty[0] & /*value, canvas, mode, Mode*/
    6657 | i.$$.dirty[1] & /*shapeCreationMode*/
    1073741824 | i.$$.dirty[2] & /*initialized*/
    8 && (u !== null && u.boxes && u.boxes.length === 0 && !f || !f && S) && (t(12, D = se(S)), t(65, f = !0), y && t(11, y.style.cursor = D === s.drag ? "default" : "crosshair", y)), i.$$.dirty[0] & /*value*/
    1 && u !== null && u.boxes && u.boxes.length === 0 && t(65, f = !1), i.$$.dirty[2] & /*boxAlpha*/
    4 && t(22, we = Fe), i.$$.dirty[0] & /*value*/
    1 && (u !== null && (Y.orientation = u.orientation), Ma(), uu(), Ds(), B());
  }, [
    u,
    v,
    g,
    w,
    d,
    k,
    b,
    M,
    x,
    s,
    c,
    y,
    D,
    o,
    A,
    ce,
    fe,
    xe,
    E,
    Pe,
    qe,
    Xe,
    we,
    Be,
    ke,
    ot,
    n,
    l,
    B,
    Se,
    nn,
    xt,
    sn,
    ln,
    Ot,
    at,
    Xs,
    $f,
    eu,
    tu,
    nu,
    Ys,
    pa,
    ba,
    va,
    wa,
    En,
    ou,
    au,
    ru,
    cu,
    Jn,
    Ca,
    Sa,
    hu,
    du,
    h,
    m,
    p,
    W,
    X,
    S,
    C,
    R,
    Fe,
    f,
    _u,
    mu,
    gu,
    pu,
    bu,
    vu,
    wu,
    ku,
    yu,
    Cu,
    Su,
    Mu,
    zu,
    Wu,
    xu,
    Bu,
    Xu,
    Yu,
    Du,
    Eu,
    Ru,
    Lu,
    Pu
  ];
}
class yv extends uv {
  constructor(e) {
    super(), hv(
      this,
      e,
      kv,
      bv,
      _v,
      {
        imageUrl: 56,
        interactive: 4,
        boxMinSize: 57,
        handleSize: 58,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 59,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 60,
        shapeCreationMode: 61,
        autoScroll: 62,
        preserveResolution: 63,
        boxAlpha: 64
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Cv,
  add_flush_callback: Sv,
  bind: Mv,
  binding_callbacks: zv,
  create_component: Wv,
  destroy_component: xv,
  init: Bv,
  mount_component: Xv,
  safe_not_equal: Yv,
  transition_in: Dv,
  transition_out: Ev
} = window.__gradio__svelte__internal, { createEventDispatcher: Rv } = window.__gradio__svelte__internal;
function Lv(i) {
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
    i[0]), e = new yv({ props: l }), zv.push(() => Mv(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[20]
    ), e.$on(
      "select",
      /*select_handler*/
      i[21]
    ), {
      c() {
        Wv(e.$$.fragment);
      },
      m(a, c) {
        Xv(e, a, c), n = !0;
      },
      p(a, [c]) {
        var h, d;
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
        ((d = a[0]) == null ? void 0 : d.preserve_resolution) || !0), c & /*resolved_src*/
        32768 && (f.imageUrl = /*resolved_src*/
        a[15]), !t && c & /*value*/
        1 && (t = !0, f.value = /*value*/
        a[0], Sv(() => t = !1)), e.$set(f);
      },
      i(a) {
        n || (Dv(e.$$.fragment, a), n = !0);
      },
      o(a) {
        Ev(e.$$.fragment, a), n = !1;
      },
      d(a) {
        xv(e, a);
      }
    }
  );
}
function Pv(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { height: f } = e, { width: h } = e, { value: d } = e, { disableEditBoxes: m } = e, { singleBox: p } = e, { showRemoveButton: u } = e, { handlesCursor: v } = e, { useDefaultLabel: g } = e, { shapeCreationMode: k } = e, b, M;
  const W = Rv();
  function w(S) {
    d = S, t(0, d);
  }
  const x = () => W("change"), X = (S) => W("select", S.detail);
  return i.$$set = (S) => {
    "src" in S && t(17, n = S.src), "interactive" in S && t(1, s = S.interactive), "boxesAlpha" in S && t(2, l = S.boxesAlpha), "labelList" in S && t(3, o = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, c = S.handleSize), "height" in S && t(7, f = S.height), "width" in S && t(8, h = S.width), "value" in S && t(0, d = S.value), "disableEditBoxes" in S && t(9, m = S.disableEditBoxes), "singleBox" in S && t(10, p = S.singleBox), "showRemoveButton" in S && t(11, u = S.showRemoveButton), "handlesCursor" in S && t(12, v = S.handlesCursor), "useDefaultLabel" in S && t(13, g = S.useDefaultLabel), "shapeCreationMode" in S && t(14, k = S.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    393216) {
      t(15, b = n), t(18, M = n);
      const S = n;
      y1(S).then((C) => {
        M === S && t(15, b = C);
      });
    }
  }, [
    d,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    h,
    m,
    p,
    u,
    v,
    g,
    k,
    b,
    W,
    n,
    M,
    w,
    x,
    X
  ];
}
class qv extends Cv {
  constructor(e) {
    super(), Bv(this, e, Pv, Lv, Yv, {
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
class Cc {
  constructor() {
    this.boxes = [], this.orientation = 0, this.scrollable_mode = !1, this.auto_scroll = !0, this.preserve_resolution = !0;
  }
}
const {
  SvelteComponent: Hv,
  add_flush_callback: zl,
  append: Fi,
  attr: gs,
  bind: Wl,
  binding_callbacks: Ss,
  bubble: cs,
  check_outros: ai,
  create_component: zn,
  create_slot: Iv,
  destroy_component: Wn,
  detach: pi,
  element: ks,
  empty: Av,
  get_all_dirty_from_scope: jv,
  get_slot_changes: Fv,
  group_outros: ri,
  init: Tv,
  insert: bi,
  mount_component: xn,
  noop: Ov,
  safe_not_equal: Uv,
  space: ii,
  toggle_class: Sc,
  transition_in: Me,
  transition_out: Le,
  update_slot_base: Vv
} = window.__gradio__svelte__internal, { createEventDispatcher: Nv, tick: Kv } = window.__gradio__svelte__internal;
function Mc(i) {
  let e, t;
  return e = new L1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Zv] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      zn(e.$$.fragment);
    },
    m(n, s) {
      xn(e, n, s), t = !0;
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
      Le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function Zv(i) {
  let e, t;
  return e = new xl({
    props: {
      Icon: f_,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      zn(e.$$.fragment);
    },
    m(n, s) {
      xn(e, n, s), t = !0;
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
      Le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function zc(i) {
  let e, t;
  return e = new bm({
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
      zn(e.$$.fragment);
    },
    m(n, s) {
      xn(e, n, s), t = !0;
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
      Le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function Wc(i) {
  let e, t, n;
  return t = new xl({
    props: { Icon: Tc, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[35]
  ), {
    c() {
      e = ks("div"), zn(t.$$.fragment);
    },
    m(s, l) {
      bi(s, e, l), xn(t, e, null), n = !0;
    },
    p: Ov,
    i(s) {
      n || (Me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && pi(e), Wn(t);
    }
  };
}
function xc(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Iv(
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
      16777216) && Vv(
        n,
        t,
        s,
        /*$$scope*/
        s[55],
        e ? Fv(
          t,
          /*$$scope*/
          s[55],
          l,
          null
        ) : jv(
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
      Le(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Jv(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && xc(i)
  );
  return {
    c() {
      n && n.c(), e = Av();
    },
    m(s, l) {
      n && n.m(s, l), bi(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && Me(n, 1)) : (n = xc(s), n.c(), Me(n, 1), n.m(e.parentNode, e)) : n && (ri(), Le(n, 1, 1, () => {
        n = null;
      }), ai());
    },
    i(s) {
      t || (Me(n), t = !0);
    },
    o(s) {
      Le(n), t = !1;
    },
    d(s) {
      s && pi(e), n && n.d(s);
    }
  };
}
function Bc(i) {
  let e, t;
  return e = new lg({
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
      zn(e.$$.fragment);
    },
    m(n, s) {
      xn(e, n, s), t = !0;
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
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function Xc(i) {
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
    i[1]), t = new qv({ props: o }), Ss.push(() => Wl(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), {
      c() {
        e = ks("div"), zn(t.$$.fragment), gs(e, "class", "image-frame svelte-1gjdske"), Sc(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        bi(r, e, a), xn(t, e, null), s = !0;
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
        r[1], zl(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && Sc(
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
        Le(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && pi(e), Wn(t);
      }
    }
  );
}
function Yc(i) {
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
    i[0]), e = new Rm({ props: l }), Ss.push(() => Wl(e, "active_source", s)), {
      c() {
        zn(e.$$.fragment);
      },
      m(o, r) {
        xn(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], zl(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Me(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Le(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Wn(e, o);
      }
    }
  );
}
function Gv(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, m, p, u = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), v;
  e = new Jh({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Oc,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Mc(i)
  ), k = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && zc(i)
  ), b = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Wc(i)
  );
  function M(C) {
    i[43](C);
  }
  function W(C) {
    i[44](C);
  }
  let w = {
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
    $$slots: { default: [Jv] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[28] !== void 0 && (w.uploading = /*uploading*/
  i[28]), /*dragging*/
  i[29] !== void 0 && (w.dragging = /*dragging*/
  i[29]), c = new _0({ props: w }), i[42](c), Ss.push(() => Wl(c, "uploading", M)), Ss.push(() => Wl(c, "dragging", W)), c.$on(
    "load",
    /*handle_upload*/
    i[31]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let x = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Bc(i)
  ), X = (
    /*value*/
    i[1] !== null && Xc(i)
  ), S = u && Yc(i);
  return {
    c() {
      zn(e.$$.fragment), t = ii(), n = ks("div"), g && g.c(), s = ii(), k && k.c(), l = ii(), b && b.c(), o = ii(), r = ks("div"), a = ks("div"), zn(c.$$.fragment), d = ii(), x && x.c(), m = ii(), X && X.c(), p = ii(), S && S.c(), gs(n, "class", "icon-buttons svelte-1gjdske"), gs(a, "class", "upload-container svelte-1gjdske"), gs(r, "data-testid", "image"), gs(r, "class", "image-container svelte-1gjdske");
    },
    m(C, R) {
      xn(e, C, R), bi(C, t, R), bi(C, n, R), g && g.m(n, null), Fi(n, s), k && k.m(n, null), Fi(n, l), b && b.m(n, null), bi(C, o, R), bi(C, r, R), Fi(r, a), xn(c, a, null), Fi(a, d), x && x.m(a, null), Fi(a, m), X && X.m(a, null), Fi(r, p), S && S.m(r, null), v = !0;
    },
    p(C, R) {
      const y = {};
      R[0] & /*show_label*/
      8 && (y.show_label = /*show_label*/
      C[3]), R[0] & /*label*/
      4 && (y.label = /*label*/
      C[2] || "Image Annotator"), e.$set(y), /*showDownloadButton*/
      C[10] && /*value*/
      C[1] !== null ? g ? (g.p(C, R), R[0] & /*showDownloadButton, value*/
      1026 && Me(g, 1)) : (g = Mc(C), g.c(), Me(g, 1), g.m(n, s)) : g && (ri(), Le(g, 1, 1, () => {
        g = null;
      }), ai()), /*showShareButton*/
      C[9] && /*value*/
      C[1] !== null ? k ? (k.p(C, R), R[0] & /*showShareButton, value*/
      514 && Me(k, 1)) : (k = zc(C), k.c(), Me(k, 1), k.m(n, l)) : k && (ri(), Le(k, 1, 1, () => {
        k = null;
      }), ai()), /*showClearButton*/
      C[11] && /*value*/
      C[1] !== null && /*interactive*/
      C[7] ? b ? (b.p(C, R), R[0] & /*showClearButton, value, interactive*/
      2178 && Me(b, 1)) : (b = Wc(C), b.c(), Me(b, 1), b.m(n, null)) : b && (ri(), Le(b, 1, 1, () => {
        b = null;
      }), ai());
      const H = {};
      R[0] & /*value, active_source*/
      3 && (H.hidden = /*value*/
      C[1] !== null || /*active_source*/
      C[0] === "webcam"), R[0] & /*active_source*/
      1 && (H.filetype = /*active_source*/
      C[0] === "clipboard" ? "clipboard" : "image/*"), R[0] & /*root*/
      64 && (H.root = /*root*/
      C[6]), R[0] & /*max_file_size*/
      8388608 && (H.max_file_size = /*max_file_size*/
      C[23]), R[0] & /*sources*/
      16 && (H.disable_click = !/*sources*/
      C[4].includes("upload")), R[0] & /*cli_upload*/
      16777216 && (H.upload = /*cli_upload*/
      C[24]), R[0] & /*stream_handler*/
      33554432 && (H.stream_handler = /*stream_handler*/
      C[25]), R[0] & /*value*/
      2 | R[1] & /*$$scope*/
      16777216 && (H.$$scope = { dirty: R, ctx: C }), !f && R[0] & /*uploading*/
      268435456 && (f = !0, H.uploading = /*uploading*/
      C[28], zl(() => f = !1)), !h && R[0] & /*dragging*/
      536870912 && (h = !0, H.dragging = /*dragging*/
      C[29], zl(() => h = !1)), c.$set(H), /*value*/
      C[1] === null && /*active_source*/
      C[0] === "webcam" ? x ? (x.p(C, R), R[0] & /*value, active_source*/
      3 && Me(x, 1)) : (x = Bc(C), x.c(), Me(x, 1), x.m(a, m)) : x && (ri(), Le(x, 1, 1, () => {
        x = null;
      }), ai()), /*value*/
      C[1] !== null ? X ? (X.p(C, R), R[0] & /*value*/
      2 && Me(X, 1)) : (X = Xc(C), X.c(), Me(X, 1), X.m(a, null)) : X && (ri(), Le(X, 1, 1, () => {
        X = null;
      }), ai()), R[0] & /*sources, value, interactive*/
      146 && (u = /*sources*/
      (C[4].length > 1 || /*sources*/
      C[4].includes("clipboard")) && /*value*/
      C[1] === null && /*interactive*/
      C[7]), u ? S ? (S.p(C, R), R[0] & /*sources, value, interactive*/
      146 && Me(S, 1)) : (S = Yc(C), S.c(), Me(S, 1), S.m(r, null)) : S && (ri(), Le(S, 1, 1, () => {
        S = null;
      }), ai());
    },
    i(C) {
      v || (Me(e.$$.fragment, C), Me(g), Me(k), Me(b), Me(c.$$.fragment, C), Me(x), Me(X), Me(S), v = !0);
    },
    o(C) {
      Le(e.$$.fragment, C), Le(g), Le(k), Le(b), Le(c.$$.fragment, C), Le(x), Le(X), Le(S), v = !1;
    },
    d(C) {
      C && (pi(t), pi(n), pi(o), pi(r)), Wn(e, C), g && g.d(), k && k.d(), b && b.d(), i[42](null), Wn(c), x && x.d(), X && X.d(), S && S.d();
    }
  };
}
function Qv(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(B, le, Se, Wt) {
    function Yn(nn) {
      return nn instanceof Se ? nn : new Se(function(xt) {
        xt(nn);
      });
    }
    return new (Se || (Se = Promise))(function(nn, xt) {
      function Ht(He) {
        try {
          Dn(Wt.next(He));
        } catch (ln) {
          xt(ln);
        }
      }
      function sn(He) {
        try {
          Dn(Wt.throw(He));
        } catch (ln) {
          xt(ln);
        }
      }
      function Dn(He) {
        He.done ? nn(He.value) : Yn(He.value).then(Ht, sn);
      }
      Dn((Wt = Wt.apply(B, le || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: h } = e, { interactive: d } = e, { i18n: m } = e, { showShareButton: p } = e, { showDownloadButton: u } = e, { showClearButton: v } = e, { boxesAlpha: g } = e, { labelList: k } = e, { labelColors: b } = e, { boxMinSize: M } = e, { handleSize: W } = e, { height: w } = e, { width: x } = e, { boxThickness: X } = e, { disableEditBoxes: S } = e, { singleBox: C } = e, { showRemoveButton: R } = e, { handlesCursor: y } = e, { boxSelectedThickness: H } = e, { max_file_size: F = null } = e, { cli_upload: A } = e, { stream_handler: D } = e, { useDefaultLabel: Y } = e, { shapeCreationMode: P } = e, se, J = !1, { active_source: U = null } = e;
  function I({ detail: B }) {
    t(1, o = new Cc()), t(1, o.image = B, o), Q("upload");
  }
  function re(B) {
    return l(this, void 0, void 0, function* () {
      const le = yield se.load_files([new File([B], "webcam.png")]), Se = (le == null ? void 0 : le[0]) || null;
      Se ? (t(1, o = new Cc()), t(1, o.image = Se, o)) : t(1, o = null), yield Kv(), Q("change");
    });
  }
  const Q = Nv();
  let q = !1;
  function _e(B) {
    return l(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          se.paste_clipboard();
          break;
      }
    });
  }
  function L() {
    t(1, o = null), t(28, J = !1), c && c.length > 0 && t(0, U = c[0]), Q("clear"), Q("change");
  }
  const V = async (B) => B === null ? "" : `<img src="${await lm(B.image)}" />`;
  function ce(B) {
    cs.call(this, i, B);
  }
  function fe(B) {
    cs.call(this, i, B);
  }
  function xe(B) {
    Ss[B ? "unshift" : "push"](() => {
      se = B, t(30, se);
    });
  }
  function E(B) {
    J = B, t(28, J);
  }
  function Pe(B) {
    q = B, t(29, q);
  }
  function qe(B) {
    cs.call(this, i, B);
  }
  const G = (B) => re(B.detail), Xe = (B) => re(B.detail);
  function Fe(B) {
    cs.call(this, i, B);
  }
  function we(B) {
    cs.call(this, i, B);
  }
  const Be = (B) => re(B.detail);
  function ke(B) {
    o = B, t(1, o);
  }
  const ot = () => Q("change"), De = (B) => Q("select", { index: null, value: B.detail.coordinates });
  function Ce(B) {
    U = B, t(0, U), t(4, c);
  }
  return i.$$set = (B) => {
    "value" in B && t(1, o = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, c = B.sources), "selectable" in B && t(5, f = B.selectable), "root" in B && t(6, h = B.root), "interactive" in B && t(7, d = B.interactive), "i18n" in B && t(8, m = B.i18n), "showShareButton" in B && t(9, p = B.showShareButton), "showDownloadButton" in B && t(10, u = B.showDownloadButton), "showClearButton" in B && t(11, v = B.showClearButton), "boxesAlpha" in B && t(12, g = B.boxesAlpha), "labelList" in B && t(13, k = B.labelList), "labelColors" in B && t(14, b = B.labelColors), "boxMinSize" in B && t(15, M = B.boxMinSize), "handleSize" in B && t(16, W = B.handleSize), "height" in B && t(17, w = B.height), "width" in B && t(18, x = B.width), "boxThickness" in B && t(36, X = B.boxThickness), "disableEditBoxes" in B && t(19, S = B.disableEditBoxes), "singleBox" in B && t(20, C = B.singleBox), "showRemoveButton" in B && t(21, R = B.showRemoveButton), "handlesCursor" in B && t(22, y = B.handlesCursor), "boxSelectedThickness" in B && t(37, H = B.boxSelectedThickness), "max_file_size" in B && t(23, F = B.max_file_size), "cli_upload" in B && t(24, A = B.cli_upload), "stream_handler" in B && t(25, D = B.stream_handler), "useDefaultLabel" in B && t(26, Y = B.useDefaultLabel), "shapeCreationMode" in B && t(27, P = B.shapeCreationMode), "active_source" in B && t(0, U = B.active_source), "$$scope" in B && t(55, s = B.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    268435456 && J && L(), i.$$.dirty[0] & /*dragging*/
    536870912 && Q("drag", q), i.$$.dirty[0] & /*active_source, sources*/
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
    m,
    p,
    u,
    v,
    g,
    k,
    b,
    M,
    W,
    w,
    x,
    S,
    C,
    R,
    y,
    F,
    A,
    D,
    Y,
    P,
    J,
    q,
    se,
    I,
    re,
    Q,
    _e,
    L,
    X,
    H,
    n,
    V,
    ce,
    fe,
    xe,
    E,
    Pe,
    qe,
    G,
    Xe,
    Fe,
    we,
    Be,
    ke,
    ot,
    De,
    Ce,
    s
  ];
}
class $v extends Hv {
  constructor(e) {
    super(), Tv(
      this,
      e,
      Qv,
      Gv,
      Uv,
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
  SvelteComponent: ew,
  attr: hl,
  detach: Kf,
  element: Zf,
  init: tw,
  insert: Jf,
  noop: Dc,
  safe_not_equal: nw,
  src_url_equal: Ec,
  toggle_class: Fn
} = window.__gradio__svelte__internal;
function Rc(i) {
  let e, t;
  return {
    c() {
      e = Zf("img"), Ec(e.src, t = /*value*/
      i[0].url) || hl(e, "src", t), hl(e, "alt", "");
    },
    m(n, s) {
      Jf(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !Ec(e.src, t = /*value*/
      n[0].url) && hl(e, "src", t);
    },
    d(n) {
      n && Kf(e);
    }
  };
}
function iw(i) {
  let e, t = (
    /*value*/
    i[0] && Rc(i)
  );
  return {
    c() {
      e = Zf("div"), t && t.c(), hl(e, "class", "container svelte-1sgcyba"), Fn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Fn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Fn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Fn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      Jf(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = Rc(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && Fn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && Fn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && Fn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && Fn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Dc,
    o: Dc,
    d(n) {
      n && Kf(e), t && t.d();
    }
  };
}
function sw(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class Dw extends ew {
  constructor(e) {
    super(), tw(this, e, sw, iw, nw, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: lw,
  add_flush_callback: Lc,
  assign: ow,
  bind: Pc,
  binding_callbacks: qc,
  check_outros: aw,
  create_component: Ci,
  destroy_component: Si,
  detach: Gf,
  empty: rw,
  flush: be,
  get_spread_object: cw,
  get_spread_update: fw,
  group_outros: uw,
  init: hw,
  insert: Qf,
  mount_component: Mi,
  safe_not_equal: dw,
  space: _w,
  transition_in: Bn,
  transition_out: Xn
} = window.__gradio__svelte__internal;
function mw(i) {
  let e, t;
  return e = new Wd({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [bw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ci(e.$$.fragment);
    },
    m(n, s) {
      Mi(e, n, s), t = !0;
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
      Xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Si(e, n);
    }
  };
}
function gw(i) {
  let e, t;
  return e = new Gc({
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
      Ci(e.$$.fragment);
    },
    m(n, s) {
      Mi(e, n, s), t = !0;
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
      Xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Si(e, n);
    }
  };
}
function pw(i) {
  let e, t;
  return e = new Gc({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Ci(e.$$.fragment);
    },
    m(n, s) {
      Mi(e, n, s), t = !0;
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
      Xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Si(e, n);
    }
  };
}
function bw(i) {
  let e, t;
  return e = new Oc({}), {
    c() {
      Ci(e.$$.fragment);
    },
    m(n, s) {
      Mi(e, n, s), t = !0;
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Si(e, n);
    }
  };
}
function vw(i) {
  let e, t, n, s;
  const l = [pw, gw, mw], o = [];
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
      t.c(), n = rw();
    },
    m(a, c) {
      o[e].m(a, c), Qf(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (uw(), Xn(o[f], 1, 1, () => {
        o[f] = null;
      }), aw(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Bn(t), s = !0);
    },
    o(a) {
      Xn(t), s = !1;
    },
    d(a) {
      a && Gf(n), o[e].d(a);
    }
  };
}
function ww(i) {
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
    a = ow(a, r[d]);
  e = new b1({ props: a });
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
    $$slots: { default: [vw] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (h.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (h.value = /*value*/
    i[0]), n = new $v({ props: h }), qc.push(() => Pc(n, "active_source", c)), qc.push(() => Pc(n, "value", f)), n.$on(
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
        Ci(e.$$.fragment), t = _w(), Ci(n.$$.fragment);
      },
      m(d, m) {
        Mi(e, d, m), Qf(d, t, m), Mi(n, d, m), o = !0;
      },
      p(d, m) {
        const p = m[0] & /*loading_status*/
        2 | m[1] & /*gradio*/
        2 ? fw(r, [
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
          2 && cw(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(p);
        const u = {};
        m[0] & /*_selectable*/
        1024 && (u.selectable = /*_selectable*/
        d[10]), m[0] & /*root*/
        128 && (u.root = /*root*/
        d[7]), m[0] & /*sources*/
        16384 && (u.sources = /*sources*/
        d[14]), m[0] & /*interactive*/
        262144 && (u.interactive = /*interactive*/
        d[18]), m[0] & /*show_download_button*/
        32768 && (u.showDownloadButton = /*show_download_button*/
        d[15]), m[0] & /*show_share_button*/
        65536 && (u.showShareButton = /*show_share_button*/
        d[16]), m[0] & /*show_clear_button*/
        131072 && (u.showClearButton = /*show_clear_button*/
        d[17]), m[1] & /*gradio*/
        2 && (u.i18n = /*gradio*/
        d[32].i18n), m[0] & /*boxes_alpha*/
        524288 && (u.boxesAlpha = /*boxes_alpha*/
        d[19]), m[0] & /*height*/
        256 && (u.height = /*height*/
        d[8]), m[0] & /*width*/
        512 && (u.width = /*width*/
        d[9]), m[0] & /*label_list*/
        1048576 && (u.labelList = /*label_list*/
        d[20]), m[0] & /*label_colors*/
        2097152 && (u.labelColors = /*label_colors*/
        d[21]), m[0] & /*box_min_size*/
        4194304 && (u.boxMinSize = /*box_min_size*/
        d[22]), m[0] & /*label*/
        32 && (u.label = /*label*/
        d[5]), m[0] & /*show_label*/
        64 && (u.show_label = /*show_label*/
        d[6]), m[1] & /*gradio*/
        2 && (u.max_file_size = /*gradio*/
        d[32].max_file_size), m[1] & /*gradio*/
        2 && (u.cli_upload = /*gradio*/
        d[32].client.upload), m[1] & /*gradio*/
        2 && (u.stream_handler = /*gradio*/
        d[32].client.stream), m[0] & /*handle_size*/
        8388608 && (u.handleSize = /*handle_size*/
        d[23]), m[0] & /*box_thickness*/
        16777216 && (u.boxThickness = /*box_thickness*/
        d[24]), m[0] & /*box_selected_thickness*/
        33554432 && (u.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), m[0] & /*disable_edit_boxes*/
        67108864 && (u.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), m[0] & /*single_box*/
        134217728 && (u.singleBox = /*single_box*/
        d[27]), m[0] & /*show_remove_button*/
        268435456 && (u.showRemoveButton = /*show_remove_button*/
        d[28]), m[0] & /*handles_cursor*/
        536870912 && (u.handlesCursor = /*handles_cursor*/
        d[29]), m[0] & /*use_default_label*/
        1073741824 && (u.useDefaultLabel = /*use_default_label*/
        d[30]), m[1] & /*shape_creation_mode*/
        1 && (u.shapeCreationMode = /*shape_creation_mode*/
        d[31]), m[1] & /*$$scope, gradio, active_source*/
        16394 && (u.$$scope = { dirty: m, ctx: d }), !s && m[1] & /*active_source*/
        8 && (s = !0, u.active_source = /*active_source*/
        d[34], Lc(() => s = !1)), !l && m[0] & /*value*/
        1 && (l = !0, u.value = /*value*/
        d[0], Lc(() => l = !1)), n.$set(u);
      },
      i(d) {
        o || (Bn(e.$$.fragment, d), Bn(n.$$.fragment, d), o = !0);
      },
      o(d) {
        Xn(e.$$.fragment, d), Xn(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && Gf(t), Si(e, d), Si(n, d);
      }
    }
  );
}
function kw(i) {
  let e, t;
  return e = new Qu({
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
      $$slots: { default: [ww] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ci(e.$$.fragment);
    },
    m(n, s) {
      Mi(e, n, s), t = !0;
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
      Xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Si(e, n);
    }
  };
}
function yw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: h } = e, { _selectable: d = !1 } = e, { container: m = !0 } = e, { scale: p = null } = e, { min_width: u = void 0 } = e, { loading_status: v } = e, { sources: g = ["upload", "webcam", "clipboard"] } = e, { show_download_button: k } = e, { show_share_button: b } = e, { show_clear_button: M } = e, { interactive: W } = e, { boxes_alpha: w } = e, { label_list: x } = e, { label_colors: X } = e, { box_min_size: S } = e, { handle_size: C } = e, { box_thickness: R } = e, { box_selected_thickness: y } = e, { disable_edit_boxes: H } = e, { single_box: F } = e, { show_remove_button: A } = e, { handles_cursor: D } = e, { use_default_label: Y } = e, { shape_creation_mode: P } = e, { gradio: se } = e, J, U = null;
  function I(E) {
    U = E, t(34, U);
  }
  function re(E) {
    o = E, t(0, o);
  }
  const Q = () => se.dispatch("change"), q = () => se.dispatch("edit"), _e = () => {
    se.dispatch("clear");
  }, L = ({ detail: E }) => t(33, J = E), V = () => se.dispatch("upload"), ce = ({ detail: E }) => se.dispatch("select", E), fe = ({ detail: E }) => se.dispatch("share", E), xe = ({ detail: E }) => {
    t(1, v = v || {}), t(1, v.status = "error", v), se.dispatch("error", E);
  };
  return i.$$set = (E) => {
    "elem_id" in E && t(2, n = E.elem_id), "elem_classes" in E && t(3, s = E.elem_classes), "visible" in E && t(4, l = E.visible), "value" in E && t(0, o = E.value), "label" in E && t(5, r = E.label), "show_label" in E && t(6, a = E.show_label), "root" in E && t(7, c = E.root), "height" in E && t(8, f = E.height), "width" in E && t(9, h = E.width), "_selectable" in E && t(10, d = E._selectable), "container" in E && t(11, m = E.container), "scale" in E && t(12, p = E.scale), "min_width" in E && t(13, u = E.min_width), "loading_status" in E && t(1, v = E.loading_status), "sources" in E && t(14, g = E.sources), "show_download_button" in E && t(15, k = E.show_download_button), "show_share_button" in E && t(16, b = E.show_share_button), "show_clear_button" in E && t(17, M = E.show_clear_button), "interactive" in E && t(18, W = E.interactive), "boxes_alpha" in E && t(19, w = E.boxes_alpha), "label_list" in E && t(20, x = E.label_list), "label_colors" in E && t(21, X = E.label_colors), "box_min_size" in E && t(22, S = E.box_min_size), "handle_size" in E && t(23, C = E.handle_size), "box_thickness" in E && t(24, R = E.box_thickness), "box_selected_thickness" in E && t(25, y = E.box_selected_thickness), "disable_edit_boxes" in E && t(26, H = E.disable_edit_boxes), "single_box" in E && t(27, F = E.single_box), "show_remove_button" in E && t(28, A = E.show_remove_button), "handles_cursor" in E && t(29, D = E.handles_cursor), "use_default_label" in E && t(30, Y = E.use_default_label), "shape_creation_mode" in E && t(31, P = E.shape_creation_mode), "gradio" in E && t(32, se = E.gradio);
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
    m,
    p,
    u,
    g,
    k,
    b,
    M,
    W,
    w,
    x,
    X,
    S,
    C,
    R,
    y,
    H,
    F,
    A,
    D,
    Y,
    P,
    se,
    J,
    U,
    I,
    re,
    Q,
    q,
    _e,
    L,
    V,
    ce,
    fe,
    xe
  ];
}
class Ew extends lw {
  constructor(e) {
    super(), hw(
      this,
      e,
      yw,
      kw,
      dw,
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
    this.$$set({ elem_id: e }), be();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), be();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), be();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), be();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), be();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), be();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), be();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), be();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), be();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), be();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), be();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), be();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), be();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), be();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), be();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), be();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), be();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), be();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), be();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), be();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), be();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), be();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), be();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), be();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), be();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), be();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), be();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), be();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), be();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), be();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), be();
  }
  get shape_creation_mode() {
    return this.$$.ctx[31];
  }
  set shape_creation_mode(e) {
    this.$$set({ shape_creation_mode: e }), be();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), be();
  }
}
export {
  Dw as BaseExample,
  Ew as default
};
