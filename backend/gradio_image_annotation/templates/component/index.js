const {
  SvelteComponent: sh,
  assign: lh,
  create_slot: oh,
  detach: ah,
  element: rh,
  get_all_dirty_from_scope: ch,
  get_slot_changes: fh,
  get_spread_update: uh,
  init: hh,
  insert: dh,
  safe_not_equal: _h,
  set_dynamic_element_data: Fa,
  set_style: Rt,
  toggle_class: fn,
  transition_in: sf,
  transition_out: lf,
  update_slot_base: mh
} = window.__gradio__svelte__internal;
function gh(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = oh(
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
    r = lh(r, o[a]);
  return {
    c() {
      e = rh(
        /*tag*/
        i[14]
      ), l && l.c(), Fa(
        /*tag*/
        i[14]
      )(e, r), fn(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), fn(
        e,
        "padded",
        /*padding*/
        i[6]
      ), fn(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), fn(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), fn(e, "hide-container", !/*explicit_call*/
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
      dh(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && mh(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? fh(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : ch(
          /*$$scope*/
          a[17]
        ),
        null
      ), Fa(
        /*tag*/
        a[14]
      )(e, r = uh(o, [
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
      ])), fn(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), fn(
        e,
        "padded",
        /*padding*/
        a[6]
      ), fn(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), fn(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), fn(e, "hide-container", !/*explicit_call*/
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
      a && ah(e), l && l.d(a);
    }
  };
}
function ph(i) {
  let e, t = (
    /*tag*/
    i[14] && gh(i)
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
function bh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: _ = void 0 } = e, { explicit_call: p = !1 } = e, { container: g = !0 } = e, { visible: h = !0 } = e, { allow_overflow: b = !0 } = e, { scale: y = null } = e, { min_width: w = 0 } = e, Y = d === "fieldset" ? "fieldset" : "div";
  const x = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return i.$$set = (k) => {
    "height" in k && t(0, l = k.height), "width" in k && t(1, o = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, c = k.variant), "border_mode" in k && t(5, f = k.border_mode), "padding" in k && t(6, u = k.padding), "type" in k && t(16, d = k.type), "test_id" in k && t(7, _ = k.test_id), "explicit_call" in k && t(8, p = k.explicit_call), "container" in k && t(9, g = k.container), "visible" in k && t(10, h = k.visible), "allow_overflow" in k && t(11, b = k.allow_overflow), "scale" in k && t(12, y = k.scale), "min_width" in k && t(13, w = k.min_width), "$$scope" in k && t(17, s = k.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    _,
    p,
    g,
    h,
    b,
    y,
    w,
    Y,
    x,
    d,
    s,
    n
  ];
}
class vh extends sh {
  constructor(e) {
    super(), hh(this, e, bh, ph, _h, {
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
  SvelteComponent: wh,
  attr: kh,
  create_slot: yh,
  detach: Ch,
  element: Sh,
  get_all_dirty_from_scope: Mh,
  get_slot_changes: Wh,
  init: zh,
  insert: Xh,
  safe_not_equal: Yh,
  transition_in: xh,
  transition_out: Dh,
  update_slot_base: Bh
} = window.__gradio__svelte__internal;
function Eh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = yh(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Sh("div"), s && s.c(), kh(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      Xh(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && Bh(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? Wh(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : Mh(
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
      Dh(s, l), t = !1;
    },
    d(l) {
      l && Ch(e), s && s.d(l);
    }
  };
}
function Rh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class Hh extends wh {
  constructor(e) {
    super(), zh(this, e, Rh, Eh, Yh, {});
  }
}
const {
  SvelteComponent: Lh,
  attr: Ta,
  check_outros: Ph,
  create_component: qh,
  create_slot: Ih,
  destroy_component: Ah,
  detach: wl,
  element: jh,
  empty: Fh,
  get_all_dirty_from_scope: Th,
  get_slot_changes: Oh,
  group_outros: Uh,
  init: Nh,
  insert: kl,
  mount_component: Vh,
  safe_not_equal: Kh,
  set_data: Zh,
  space: Gh,
  text: Jh,
  toggle_class: ji,
  transition_in: Ss,
  transition_out: yl,
  update_slot_base: Qh
} = window.__gradio__svelte__internal;
function Oa(i) {
  let e, t;
  return e = new Hh({
    props: {
      $$slots: { default: [$h] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      qh(e.$$.fragment);
    },
    m(n, s) {
      Vh(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Ss(e.$$.fragment, n), t = !0);
    },
    o(n) {
      yl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ah(e, n);
    }
  };
}
function $h(i) {
  let e;
  return {
    c() {
      e = Jh(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      kl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Zh(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && wl(e);
    }
  };
}
function ed(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = Ih(
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
      e = jh("span"), o && o.c(), t = Gh(), r && r.c(), n = Fh(), Ta(e, "data-testid", "block-info"), Ta(e, "class", "svelte-22c38v"), ji(e, "sr-only", !/*show_label*/
      i[0]), ji(e, "hide", !/*show_label*/
      i[0]), ji(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      kl(a, e, c), o && o.m(e, null), kl(a, t, c), r && r.m(a, c), kl(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Qh(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? Oh(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : Th(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && ji(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && ji(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && ji(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && Ss(r, 1)) : (r = Oa(a), r.c(), Ss(r, 1), r.m(n.parentNode, n)) : r && (Uh(), yl(r, 1, 1, () => {
        r = null;
      }), Ph());
    },
    i(a) {
      s || (Ss(o, a), Ss(r), s = !0);
    },
    o(a) {
      yl(o, a), yl(r), s = !1;
    },
    d(a) {
      a && (wl(e), wl(t), wl(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function td(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class of extends Lh {
  constructor(e) {
    super(), Nh(this, e, td, ed, Kh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: nd,
  append: eo,
  attr: Vs,
  create_component: id,
  destroy_component: sd,
  detach: ld,
  element: Ua,
  init: od,
  insert: ad,
  mount_component: rd,
  safe_not_equal: cd,
  set_data: fd,
  space: ud,
  text: hd,
  toggle_class: In,
  transition_in: dd,
  transition_out: _d
} = window.__gradio__svelte__internal;
function md(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Ua("label"), t = Ua("span"), id(n.$$.fragment), s = ud(), l = hd(
        /*label*/
        i[0]
      ), Vs(t, "class", "svelte-9gxdi0"), Vs(e, "for", ""), Vs(e, "data-testid", "block-label"), Vs(e, "class", "svelte-9gxdi0"), In(e, "hide", !/*show_label*/
      i[2]), In(e, "sr-only", !/*show_label*/
      i[2]), In(
        e,
        "float",
        /*float*/
        i[4]
      ), In(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      ad(r, e, a), eo(e, t), rd(n, t, null), eo(e, s), eo(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && fd(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && In(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && In(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && In(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && In(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (dd(n.$$.fragment, r), o = !0);
    },
    o(r) {
      _d(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && ld(e), sd(n);
    }
  };
}
function gd(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class pd extends nd {
  constructor(e) {
    super(), od(this, e, gd, md, cd, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: bd,
  append: ea,
  attr: Wn,
  bubble: vd,
  create_component: wd,
  destroy_component: kd,
  detach: af,
  element: ta,
  init: yd,
  insert: rf,
  listen: Cd,
  mount_component: Sd,
  safe_not_equal: Md,
  set_data: Wd,
  set_style: Fi,
  space: zd,
  text: Xd,
  toggle_class: St,
  transition_in: Yd,
  transition_out: xd
} = window.__gradio__svelte__internal;
function Na(i) {
  let e, t;
  return {
    c() {
      e = ta("span"), t = Xd(
        /*label*/
        i[1]
      ), Wn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      rf(n, e, s), ea(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && Wd(
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
function Dd(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && Na(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = ta("button"), a && a.c(), t = zd(), n = ta("div"), wd(s.$$.fragment), Wn(n, "class", "svelte-1lrphxw"), St(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), St(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), St(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Wn(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Wn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Wn(
        e,
        "title",
        /*label*/
        i[1]
      ), Wn(e, "class", "svelte-1lrphxw"), St(
        e,
        "pending",
        /*pending*/
        i[3]
      ), St(
        e,
        "padded",
        /*padded*/
        i[5]
      ), St(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), St(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Fi(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Fi(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Fi(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      rf(c, e, f), a && a.m(e, null), ea(e, t), ea(e, n), Sd(s, n, null), l = !0, o || (r = Cd(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = Na(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && St(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && St(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && St(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && Wn(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && Wn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && Wn(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && St(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && St(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && St(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && St(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && Fi(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Fi(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && Fi(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (Yd(s.$$.fragment, c), l = !0);
    },
    o(c) {
      xd(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && af(e), a && a.d(), kd(s), o = !1, r();
    }
  };
}
function Bd(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: _ = "var(--block-label-text-color)" } = e, { transparent: p = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: h = 0 } = e;
  function b(y) {
    vd.call(this, i, y);
  }
  return i.$$set = (y) => {
    "Icon" in y && t(0, s = y.Icon), "label" in y && t(1, l = y.label), "show_label" in y && t(2, o = y.show_label), "pending" in y && t(3, r = y.pending), "size" in y && t(4, a = y.size), "padded" in y && t(5, c = y.padded), "highlight" in y && t(6, f = y.highlight), "disabled" in y && t(7, u = y.disabled), "hasPopup" in y && t(8, d = y.hasPopup), "color" in y && t(13, _ = y.color), "transparent" in y && t(9, p = y.transparent), "background" in y && t(10, g = y.background), "offset" in y && t(11, h = y.offset);
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
    u,
    d,
    p,
    g,
    h,
    n,
    _,
    b
  ];
}
class Ol extends bd {
  constructor(e) {
    super(), yd(this, e, Bd, Dd, Md, {
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
  SvelteComponent: Ed,
  append: Rd,
  attr: to,
  binding_callbacks: Hd,
  create_slot: Ld,
  detach: Pd,
  element: Va,
  get_all_dirty_from_scope: qd,
  get_slot_changes: Id,
  init: Ad,
  insert: jd,
  safe_not_equal: Fd,
  toggle_class: An,
  transition_in: Td,
  transition_out: Od,
  update_slot_base: Ud
} = window.__gradio__svelte__internal;
function Nd(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = Ld(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Va("div"), t = Va("div"), l && l.c(), to(t, "class", "icon svelte-3w3rth"), to(e, "class", "empty svelte-3w3rth"), to(e, "aria-label", "Empty value"), An(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), An(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), An(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), An(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      jd(o, e, r), Rd(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && Ud(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? Id(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : qd(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && An(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && An(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && An(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && An(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (Td(l, o), n = !0);
    },
    o(o) {
      Od(l, o), n = !1;
    },
    d(o) {
      o && Pd(e), l && l.d(o), i[6](null);
    }
  };
}
function Vd(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(u) {
    var d;
    if (!u) return !1;
    const { height: _ } = u.getBoundingClientRect(), { height: p } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: _ };
    return _ > p + 2;
  }
  function f(u) {
    Hd[u ? "unshift" : "push"](() => {
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
class Kd extends Ed {
  constructor(e) {
    super(), Ad(this, e, Vd, Nd, Fd, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Zd,
  append: Ka,
  attr: Mt,
  detach: Gd,
  init: Jd,
  insert: Qd,
  noop: no,
  safe_not_equal: $d,
  svg_element: io
} = window.__gradio__svelte__internal;
function e_(i) {
  let e, t, n;
  return {
    c() {
      e = io("svg"), t = io("path"), n = io("circle"), Mt(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Mt(n, "cx", "12"), Mt(n, "cy", "13"), Mt(n, "r", "4"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 24 24"), Mt(e, "fill", "none"), Mt(e, "stroke", "currentColor"), Mt(e, "stroke-width", "1.5"), Mt(e, "stroke-linecap", "round"), Mt(e, "stroke-linejoin", "round"), Mt(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Qd(s, e, l), Ka(e, t), Ka(e, n);
    },
    p: no,
    i: no,
    o: no,
    d(s) {
      s && Gd(e);
    }
  };
}
class t_ extends Zd {
  constructor(e) {
    super(), Jd(this, e, null, e_, $d, {});
  }
}
const {
  SvelteComponent: n_,
  append: i_,
  attr: Gt,
  detach: s_,
  init: l_,
  insert: o_,
  noop: so,
  safe_not_equal: a_,
  svg_element: Za
} = window.__gradio__svelte__internal;
function r_(i) {
  let e, t;
  return {
    c() {
      e = Za("svg"), t = Za("circle"), Gt(t, "cx", "12"), Gt(t, "cy", "12"), Gt(t, "r", "10"), Gt(e, "xmlns", "http://www.w3.org/2000/svg"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24"), Gt(e, "stroke-width", "1.5"), Gt(e, "stroke-linecap", "round"), Gt(e, "stroke-linejoin", "round"), Gt(e, "class", "feather feather-circle");
    },
    m(n, s) {
      o_(n, e, s), i_(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && s_(e);
    }
  };
}
let c_ = class extends n_ {
  constructor(e) {
    super(), l_(this, e, null, r_, a_, {});
  }
};
const {
  SvelteComponent: f_,
  append: lo,
  attr: Jt,
  detach: u_,
  init: h_,
  insert: d_,
  noop: oo,
  safe_not_equal: __,
  set_style: un,
  svg_element: Ks
} = window.__gradio__svelte__internal;
function m_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ks("svg"), t = Ks("g"), n = Ks("path"), s = Ks("path"), Jt(n, "d", "M18,6L6.087,17.913"), un(n, "fill", "none"), un(n, "fill-rule", "nonzero"), un(n, "stroke-width", "2px"), Jt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Jt(s, "d", "M4.364,4.364L19.636,19.636"), un(s, "fill", "none"), un(s, "fill-rule", "nonzero"), un(s, "stroke-width", "2px"), Jt(e, "width", "100%"), Jt(e, "height", "100%"), Jt(e, "viewBox", "0 0 24 24"), Jt(e, "version", "1.1"), Jt(e, "xmlns", "http://www.w3.org/2000/svg"), Jt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Jt(e, "xml:space", "preserve"), Jt(e, "stroke", "currentColor"), un(e, "fill-rule", "evenodd"), un(e, "clip-rule", "evenodd"), un(e, "stroke-linecap", "round"), un(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      d_(l, e, o), lo(e, t), lo(t, n), lo(e, s);
    },
    p: oo,
    i: oo,
    o: oo,
    d(l) {
      l && u_(e);
    }
  };
}
class cf extends f_ {
  constructor(e) {
    super(), h_(this, e, null, m_, __, {});
  }
}
const {
  SvelteComponent: g_,
  append: p_,
  attr: gs,
  detach: b_,
  init: v_,
  insert: w_,
  noop: ao,
  safe_not_equal: k_,
  svg_element: Ga
} = window.__gradio__svelte__internal;
function y_(i) {
  let e, t;
  return {
    c() {
      e = Ga("svg"), t = Ga("path"), gs(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), gs(t, "fill", "currentColor"), gs(e, "id", "icon"), gs(e, "xmlns", "http://www.w3.org/2000/svg"), gs(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      w_(n, e, s), p_(e, t);
    },
    p: ao,
    i: ao,
    o: ao,
    d(n) {
      n && b_(e);
    }
  };
}
class C_ extends g_ {
  constructor(e) {
    super(), v_(this, e, null, y_, k_, {});
  }
}
const {
  SvelteComponent: S_,
  append: M_,
  attr: Ti,
  detach: W_,
  init: z_,
  insert: X_,
  noop: ro,
  safe_not_equal: Y_,
  svg_element: Ja
} = window.__gradio__svelte__internal;
function x_(i) {
  let e, t;
  return {
    c() {
      e = Ja("svg"), t = Ja("path"), Ti(t, "fill", "currentColor"), Ti(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Ti(e, "xmlns", "http://www.w3.org/2000/svg"), Ti(e, "width", "100%"), Ti(e, "height", "100%"), Ti(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      X_(n, e, s), M_(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && W_(e);
    }
  };
}
class D_ extends S_ {
  constructor(e) {
    super(), z_(this, e, null, x_, Y_, {});
  }
}
const {
  SvelteComponent: B_,
  append: E_,
  attr: Oi,
  detach: R_,
  init: H_,
  insert: L_,
  noop: co,
  safe_not_equal: P_,
  svg_element: Qa
} = window.__gradio__svelte__internal;
function q_(i) {
  let e, t;
  return {
    c() {
      e = Qa("svg"), t = Qa("path"), Oi(t, "d", "M5 8l4 4 4-4z"), Oi(e, "class", "dropdown-arrow svelte-145leq6"), Oi(e, "xmlns", "http://www.w3.org/2000/svg"), Oi(e, "width", "100%"), Oi(e, "height", "100%"), Oi(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      L_(n, e, s), E_(e, t);
    },
    p: co,
    i: co,
    o: co,
    d(n) {
      n && R_(e);
    }
  };
}
let ya = class extends B_ {
  constructor(e) {
    super(), H_(this, e, null, q_, P_, {});
  }
};
const {
  SvelteComponent: I_,
  append: fo,
  attr: Qe,
  detach: A_,
  init: j_,
  insert: F_,
  noop: uo,
  safe_not_equal: T_,
  svg_element: Zs
} = window.__gradio__svelte__internal;
function O_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Zs("svg"), t = Zs("rect"), n = Zs("circle"), s = Zs("polyline"), Qe(t, "x", "3"), Qe(t, "y", "3"), Qe(t, "width", "18"), Qe(t, "height", "18"), Qe(t, "rx", "2"), Qe(t, "ry", "2"), Qe(n, "cx", "8.5"), Qe(n, "cy", "8.5"), Qe(n, "r", "1.5"), Qe(s, "points", "21 15 16 10 5 21"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "1.5"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-image");
    },
    m(l, o) {
      F_(l, e, o), fo(e, t), fo(e, n), fo(e, s);
    },
    p: uo,
    i: uo,
    o: uo,
    d(l) {
      l && A_(e);
    }
  };
}
let ff = class extends I_ {
  constructor(e) {
    super(), j_(this, e, null, O_, T_, {});
  }
};
const {
  SvelteComponent: U_,
  append: N_,
  attr: Gs,
  detach: V_,
  init: K_,
  insert: Z_,
  noop: ho,
  safe_not_equal: G_,
  svg_element: $a
} = window.__gradio__svelte__internal;
function J_(i) {
  let e, t;
  return {
    c() {
      e = $a("svg"), t = $a("path"), Gs(t, "fill", "currentColor"), Gs(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Gs(e, "xmlns", "http://www.w3.org/2000/svg"), Gs(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      Z_(n, e, s), N_(e, t);
    },
    p: ho,
    i: ho,
    o: ho,
    d(n) {
      n && V_(e);
    }
  };
}
class uf extends U_ {
  constructor(e) {
    super(), K_(this, e, null, J_, G_, {});
  }
}
const {
  SvelteComponent: Q_,
  append: Js,
  attr: $e,
  detach: $_,
  init: em,
  insert: tm,
  noop: _o,
  safe_not_equal: nm,
  svg_element: ps
} = window.__gradio__svelte__internal;
function im(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = ps("svg"), t = ps("path"), n = ps("path"), s = ps("line"), l = ps("line"), $e(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), $e(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), $e(s, "x1", "12"), $e(s, "y1", "19"), $e(s, "x2", "12"), $e(s, "y2", "23"), $e(l, "x1", "8"), $e(l, "y1", "23"), $e(l, "x2", "16"), $e(l, "y2", "23"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "fill", "none"), $e(e, "stroke", "currentColor"), $e(e, "stroke-width", "2"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round"), $e(e, "class", "feather feather-mic");
    },
    m(o, r) {
      tm(o, e, r), Js(e, t), Js(e, n), Js(e, s), Js(e, l);
    },
    p: _o,
    i: _o,
    o: _o,
    d(o) {
      o && $_(e);
    }
  };
}
class sm extends Q_ {
  constructor(e) {
    super(), em(this, e, null, im, nm, {});
  }
}
const {
  SvelteComponent: lm,
  append: om,
  attr: Wt,
  detach: am,
  init: rm,
  insert: cm,
  noop: mo,
  safe_not_equal: fm,
  svg_element: er
} = window.__gradio__svelte__internal;
function um(i) {
  let e, t;
  return {
    c() {
      e = er("svg"), t = er("rect"), Wt(t, "x", "3"), Wt(t, "y", "3"), Wt(t, "width", "18"), Wt(t, "height", "18"), Wt(t, "rx", "2"), Wt(t, "ry", "2"), Wt(e, "xmlns", "http://www.w3.org/2000/svg"), Wt(e, "width", "100%"), Wt(e, "height", "100%"), Wt(e, "viewBox", "0 0 24 24"), Wt(e, "stroke-width", "1.5"), Wt(e, "stroke-linecap", "round"), Wt(e, "stroke-linejoin", "round"), Wt(e, "class", "feather feather-square");
    },
    m(n, s) {
      cm(n, e, s), om(e, t);
    },
    p: mo,
    i: mo,
    o: mo,
    d(n) {
      n && am(e);
    }
  };
}
class hm extends lm {
  constructor(e) {
    super(), rm(this, e, null, um, fm, {});
  }
}
const {
  SvelteComponent: dm,
  append: go,
  attr: mt,
  detach: _m,
  init: mm,
  insert: gm,
  noop: po,
  safe_not_equal: pm,
  svg_element: Qs
} = window.__gradio__svelte__internal;
function bm(i) {
  let e, t, n, s;
  return {
    c() {
      e = Qs("svg"), t = Qs("path"), n = Qs("polyline"), s = Qs("line"), mt(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), mt(n, "points", "17 8 12 3 7 8"), mt(s, "x1", "12"), mt(s, "y1", "3"), mt(s, "x2", "12"), mt(s, "y2", "15"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "width", "90%"), mt(e, "height", "90%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "fill", "none"), mt(e, "stroke", "currentColor"), mt(e, "stroke-width", "2"), mt(e, "stroke-linecap", "round"), mt(e, "stroke-linejoin", "round"), mt(e, "class", "feather feather-upload");
    },
    m(l, o) {
      gm(l, e, o), go(e, t), go(e, n), go(e, s);
    },
    p: po,
    i: po,
    o: po,
    d(l) {
      l && _m(e);
    }
  };
}
let hf = class extends dm {
  constructor(e) {
    super(), mm(this, e, null, bm, pm, {});
  }
};
const {
  SvelteComponent: vm,
  append: tr,
  attr: jn,
  detach: wm,
  init: km,
  insert: ym,
  noop: bo,
  safe_not_equal: Cm,
  svg_element: vo
} = window.__gradio__svelte__internal;
function Sm(i) {
  let e, t, n;
  return {
    c() {
      e = vo("svg"), t = vo("path"), n = vo("path"), jn(t, "fill", "currentColor"), jn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), jn(n, "fill", "currentColor"), jn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), jn(e, "xmlns", "http://www.w3.org/2000/svg"), jn(e, "width", "100%"), jn(e, "height", "100%"), jn(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      ym(s, e, l), tr(e, t), tr(e, n);
    },
    p: bo,
    i: bo,
    o: bo,
    d(s) {
      s && wm(e);
    }
  };
}
let df = class extends vm {
  constructor(e) {
    super(), km(this, e, null, Sm, Cm, {});
  }
};
const Mm = [
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
Mm.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: nr[e][t],
      secondary: nr[e][n]
    }
  }),
  {}
);
class Cl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Wm(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Cl("Must be on Spaces to share.");
  let t, n, s;
  t = zm(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new Cl(`Upload failed: ${c.error}`);
    }
    throw new Cl("Upload failed.");
  }
  return await o.text();
}
function zm(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: Xm,
  create_component: Ym,
  destroy_component: xm,
  init: Dm,
  mount_component: Bm,
  safe_not_equal: Em,
  transition_in: Rm,
  transition_out: Hm
} = window.__gradio__svelte__internal, { createEventDispatcher: Lm } = window.__gradio__svelte__internal;
function Pm(i) {
  let e, t;
  return e = new Ol({
    props: {
      Icon: C_,
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
      Ym(e.$$.fragment);
    },
    m(n, s) {
      Bm(e, n, s), t = !0;
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
      t || (Rm(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Hm(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xm(e, n);
    }
  };
}
function qm(i, e, t) {
  const n = Lm();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof Cl ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class Im extends Xm {
  constructor(e) {
    super(), Dm(this, e, qm, Pm, Em, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Am,
  append: yi,
  attr: na,
  check_outros: jm,
  create_component: _f,
  destroy_component: mf,
  detach: Sl,
  element: ia,
  group_outros: Fm,
  init: Tm,
  insert: Ml,
  mount_component: gf,
  safe_not_equal: Om,
  set_data: sa,
  space: la,
  text: Ms,
  toggle_class: ir,
  transition_in: Yl,
  transition_out: xl
} = window.__gradio__svelte__internal;
function Um(i) {
  let e, t;
  return e = new hf({}), {
    c() {
      _f(e.$$.fragment);
    },
    m(n, s) {
      gf(e, n, s), t = !0;
    },
    i(n) {
      t || (Yl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      mf(e, n);
    }
  };
}
function Nm(i) {
  let e, t;
  return e = new uf({}), {
    c() {
      _f(e.$$.fragment);
    },
    m(n, s) {
      gf(e, n, s), t = !0;
    },
    i(n) {
      t || (Yl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xl(e.$$.fragment, n), t = !1;
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
      e = ia("span"), t = Ms("- "), s = Ms(n), l = Ms(" -"), o = la(), a = Ms(r), na(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      Ml(c, e, f), yi(e, t), yi(e, s), yi(e, l), Ml(c, o, f), Ml(c, a, f);
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
      c && (Sl(e), Sl(o), Sl(a));
    }
  };
}
function Vm(i) {
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
  const f = [Nm, Um], u = [];
  function d(p, g) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), s = u[n] = f[n](i);
  let _ = (
    /*mode*/
    i[3] !== "short" && sr(i)
  );
  return {
    c() {
      e = ia("div"), t = ia("span"), s.c(), l = la(), r = Ms(o), a = la(), _ && _.c(), na(t, "class", "icon-wrap svelte-kzcjhc"), ir(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), na(e, "class", "wrap svelte-kzcjhc");
    },
    m(p, g) {
      Ml(p, e, g), yi(e, t), u[n].m(t, null), yi(e, l), yi(e, r), yi(e, a), _ && _.m(e, null), c = !0;
    },
    p(p, [g]) {
      let h = n;
      n = d(p), n !== h && (Fm(), xl(u[h], 1, 1, () => {
        u[h] = null;
      }), jm(), s = u[n], s || (s = u[n] = f[n](p), s.c()), Yl(s, 1), s.m(t, null)), (!c || g & /*hovered*/
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
      p[3] !== "short" ? _ ? _.p(p, g) : (_ = sr(p), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null);
    },
    i(p) {
      c || (Yl(s), c = !0);
    },
    o(p) {
      xl(s), c = !1;
    },
    d(p) {
      p && Sl(e), u[n].d(), _ && _.d();
    }
  };
}
function Km(i, e, t) {
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
class pf extends Am {
  constructor(e) {
    super(), Tm(this, e, Km, Vm, Om, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Zm,
  append: wo,
  attr: wn,
  check_outros: Ws,
  create_component: Ul,
  destroy_component: Nl,
  detach: rs,
  element: Is,
  empty: Gm,
  group_outros: zs,
  init: Jm,
  insert: cs,
  listen: Vl,
  mount_component: Kl,
  safe_not_equal: Qm,
  space: ko,
  toggle_class: ii,
  transition_in: st,
  transition_out: Xt
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
  ), c, f = t && or(i), u = s && ar(i), d = o && rr(i), _ = a && cr(i);
  return {
    c() {
      e = Is("span"), f && f.c(), n = ko(), u && u.c(), l = ko(), d && d.c(), r = ko(), _ && _.c(), wn(e, "class", "source-selection svelte-1jp3vgd"), wn(e, "data-testid", "source-select");
    },
    m(p, g) {
      cs(p, e, g), f && f.m(e, null), wo(e, n), u && u.m(e, null), wo(e, l), d && d.m(e, null), wo(e, r), _ && _.m(e, null), c = !0;
    },
    p(p, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      p[1].includes("upload")), t ? f ? (f.p(p, g), g & /*sources*/
      2 && st(f, 1)) : (f = or(p), f.c(), st(f, 1), f.m(e, n)) : f && (zs(), Xt(f, 1, 1, () => {
        f = null;
      }), Ws()), g & /*sources*/
      2 && (s = /*sources*/
      p[1].includes("microphone")), s ? u ? (u.p(p, g), g & /*sources*/
      2 && st(u, 1)) : (u = ar(p), u.c(), st(u, 1), u.m(e, l)) : u && (zs(), Xt(u, 1, 1, () => {
        u = null;
      }), Ws()), g & /*sources*/
      2 && (o = /*sources*/
      p[1].includes("webcam")), o ? d ? (d.p(p, g), g & /*sources*/
      2 && st(d, 1)) : (d = rr(p), d.c(), st(d, 1), d.m(e, r)) : d && (zs(), Xt(d, 1, 1, () => {
        d = null;
      }), Ws()), g & /*sources*/
      2 && (a = /*sources*/
      p[1].includes("clipboard")), a ? _ ? (_.p(p, g), g & /*sources*/
      2 && st(_, 1)) : (_ = cr(p), _.c(), st(_, 1), _.m(e, null)) : _ && (zs(), Xt(_, 1, 1, () => {
        _ = null;
      }), Ws());
    },
    i(p) {
      c || (st(f), st(u), st(d), st(_), c = !0);
    },
    o(p) {
      Xt(f), Xt(u), Xt(d), Xt(_), c = !1;
    },
    d(p) {
      p && rs(e), f && f.d(), u && u.d(), d && d.d(), _ && _.d();
    }
  };
}
function or(i) {
  let e, t, n, s, l;
  return t = new hf({}), {
    c() {
      e = Is("button"), Ul(t.$$.fragment), wn(e, "class", "icon svelte-1jp3vgd"), wn(e, "aria-label", "Upload file"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      cs(o, e, r), Kl(t, e, null), n = !0, s || (l = Vl(
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
      Xt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && rs(e), Nl(t), s = !1, l();
    }
  };
}
function ar(i) {
  let e, t, n, s, l;
  return t = new sm({}), {
    c() {
      e = Is("button"), Ul(t.$$.fragment), wn(e, "class", "icon svelte-1jp3vgd"), wn(e, "aria-label", "Record audio"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      cs(o, e, r), Kl(t, e, null), n = !0, s || (l = Vl(
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
      Xt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && rs(e), Nl(t), s = !1, l();
    }
  };
}
function rr(i) {
  let e, t, n, s, l;
  return t = new df({}), {
    c() {
      e = Is("button"), Ul(t.$$.fragment), wn(e, "class", "icon svelte-1jp3vgd"), wn(e, "aria-label", "Capture from camera"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      cs(o, e, r), Kl(t, e, null), n = !0, s || (l = Vl(
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
      Xt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && rs(e), Nl(t), s = !1, l();
    }
  };
}
function cr(i) {
  let e, t, n, s, l;
  return t = new uf({}), {
    c() {
      e = Is("button"), Ul(t.$$.fragment), wn(e, "class", "icon svelte-1jp3vgd"), wn(e, "aria-label", "Paste from clipboard"), ii(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      cs(o, e, r), Kl(t, e, null), n = !0, s || (l = Vl(
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
      Xt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && rs(e), Nl(t), s = !1, l();
    }
  };
}
function $m(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && lr(i)
  );
  return {
    c() {
      n && n.c(), e = Gm();
    },
    m(s, l) {
      n && n.m(s, l), cs(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && st(n, 1)) : (n = lr(s), n.c(), st(n, 1), n.m(e.parentNode, e)) : n && (zs(), Xt(n, 1, 1, () => {
        n = null;
      }), Ws());
    },
    i(s) {
      t || (st(n), t = !0);
    },
    o(s) {
      Xt(n), t = !1;
    },
    d(s) {
      s && rs(e), n && n.d(s);
    }
  };
}
function e1(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(p, g, h, b) {
    function y(w) {
      return w instanceof h ? w : new h(function(Y) {
        Y(w);
      });
    }
    return new (h || (h = Promise))(function(w, Y) {
      function x(W) {
        try {
          X(b.next(W));
        } catch (S) {
          Y(S);
        }
      }
      function k(W) {
        try {
          X(b.throw(W));
        } catch (S) {
          Y(S);
        }
      }
      function X(W) {
        W.done ? w(W.value) : y(W.value).then(x, k);
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
  const f = () => c("upload"), u = () => c("microphone"), d = () => c("webcam"), _ = () => c("clipboard");
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
    u,
    d,
    _
  ];
}
class t1 extends Zm {
  constructor(e) {
    super(), Jm(this, e, e1, $m, Qm, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function ss(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Wl() {
}
const n1 = (i) => i;
function fr(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const bf = typeof window < "u";
let ur = bf ? () => window.performance.now() : () => Date.now(), vf = bf ? (i) => requestAnimationFrame(i) : Wl;
const as = /* @__PURE__ */ new Set();
function wf(i) {
  as.forEach((e) => {
    e.c(i) || (as.delete(e), e.f());
  }), as.size !== 0 && vf(wf);
}
function i1(i) {
  let e;
  return as.size === 0 && vf(wf), { promise: new Promise((t) => {
    as.add(e = { c: i, f: t });
  }), abort() {
    as.delete(e);
  } };
}
function s1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function l1(i, { delay: e = 0, duration: t = 400, easing: n = n1 } = {}) {
  const s = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (l) => "opacity: " + l * s };
}
function hr(i, { delay: e = 0, duration: t = 400, easing: n = s1, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [u, d] = fr(s), [_, p] = fr(l);
  return { delay: e, duration: t, easing: n, css: (g, h) => `
			transform: ${c} translate(${(1 - g) * u}${d}, ${(1 - g) * _}${p});
			opacity: ${a - f * h}` };
}
const Ui = [];
function o1(i, e = Wl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (a = o, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = o, t)) {
      const c = !Ui.length;
      for (const f of n) f[1](), Ui.push(f, i);
      if (c) {
        for (let f = 0; f < Ui.length; f += 2) Ui[f][0](Ui[f + 1]);
        Ui.length = 0;
      }
    }
    var r, a;
  }
  function l(o) {
    s(o(i));
  }
  return { set: s, update: l, subscribe: function(o, r = Wl) {
    const a = [o, r];
    return n.add(a), n.size === 1 && (t = e(s, l) || Wl), o(i), () => {
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
  const t = o1(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, u = 1, d = 0, _ = !1;
  function p(h, b = {}) {
    f = h;
    const y = a = {};
    return i == null || b.hard || g.stiffness >= 1 && g.damping >= 1 ? (_ = !0, o = ur(), c = h, t.set(i = f), Promise.resolve()) : (b.soft && (d = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), u = 0), r || (o = ur(), _ = !1, r = i1((w) => {
      if (_) return _ = !1, r = null, !1;
      u = Math.min(u + d, 1);
      const Y = { inv_mass: u, opts: g, settled: !0, dt: 60 * (w - o) / 1e3 }, x = oa(Y, c, i, f);
      return o = w, c = i, t.set(i = x), Y.settled && (r = null), !Y.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        y === a && w();
      });
    }));
  }
  const g = { set: p, update: (h, b) => p(h(f, i), b), subscribe: t.subscribe, stiffness: n, damping: s, precision: l };
  return g;
}
const {
  SvelteComponent: a1,
  append: Qt,
  attr: ke,
  component_subscribe: mr,
  detach: r1,
  element: c1,
  init: f1,
  insert: u1,
  noop: gr,
  safe_not_equal: h1,
  set_style: $s,
  svg_element: $t,
  toggle_class: pr
} = window.__gradio__svelte__internal, { onMount: d1 } = window.__gradio__svelte__internal;
function _1(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d;
  return {
    c() {
      e = c1("div"), t = $t("svg"), n = $t("g"), s = $t("path"), l = $t("path"), o = $t("path"), r = $t("path"), a = $t("g"), c = $t("path"), f = $t("path"), u = $t("path"), d = $t("path"), ke(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ke(s, "fill", "#FF7C00"), ke(s, "fill-opacity", "0.4"), ke(s, "class", "svelte-43sxxs"), ke(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ke(l, "fill", "#FF7C00"), ke(l, "class", "svelte-43sxxs"), ke(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ke(o, "fill", "#FF7C00"), ke(o, "fill-opacity", "0.4"), ke(o, "class", "svelte-43sxxs"), ke(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ke(r, "fill", "#FF7C00"), ke(r, "class", "svelte-43sxxs"), $s(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ke(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ke(c, "fill", "#FF7C00"), ke(c, "fill-opacity", "0.4"), ke(c, "class", "svelte-43sxxs"), ke(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ke(f, "fill", "#FF7C00"), ke(f, "class", "svelte-43sxxs"), ke(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ke(u, "fill", "#FF7C00"), ke(u, "fill-opacity", "0.4"), ke(u, "class", "svelte-43sxxs"), ke(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ke(d, "fill", "#FF7C00"), ke(d, "class", "svelte-43sxxs"), $s(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ke(t, "viewBox", "-1200 -1200 3000 3000"), ke(t, "fill", "none"), ke(t, "xmlns", "http://www.w3.org/2000/svg"), ke(t, "class", "svelte-43sxxs"), ke(e, "class", "svelte-43sxxs"), pr(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(_, p) {
      u1(_, e, p), Qt(e, t), Qt(t, n), Qt(n, s), Qt(n, l), Qt(n, o), Qt(n, r), Qt(t, a), Qt(a, c), Qt(a, f), Qt(a, u), Qt(a, d);
    },
    p(_, [p]) {
      p & /*$top*/
      2 && $s(n, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), p & /*$bottom*/
      4 && $s(a, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), p & /*margin*/
      1 && pr(
        e,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: gr,
    o: gr,
    d(_) {
      _ && r1(e);
    }
  };
}
function m1(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(_, p, g, h) {
    function b(y) {
      return y instanceof g ? y : new g(function(w) {
        w(y);
      });
    }
    return new (g || (g = Promise))(function(y, w) {
      function Y(X) {
        try {
          k(h.next(X));
        } catch (W) {
          w(W);
        }
      }
      function x(X) {
        try {
          k(h.throw(X));
        } catch (W) {
          w(W);
        }
      }
      function k(X) {
        X.done ? y(X.value) : b(X.value).then(Y, x);
      }
      k((h = h.apply(_, p || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = _r([0, 0]);
  mr(i, r, (_) => t(1, n = _));
  const a = _r([0, 0]);
  mr(i, a, (_) => t(2, s = _));
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
  return d1(() => (d(), () => c = !0)), i.$$set = (_) => {
    "margin" in _ && t(0, o = _.margin);
  }, [o, n, s, r, a];
}
class g1 extends a1 {
  constructor(e) {
    super(), f1(this, e, m1, _1, h1, { margin: 0 });
  }
}
const {
  SvelteComponent: p1,
  append: Ci,
  attr: on,
  binding_callbacks: br,
  check_outros: aa,
  create_component: kf,
  create_slot: yf,
  destroy_component: Cf,
  destroy_each: Sf,
  detach: fe,
  element: bn,
  empty: fs,
  ensure_array_like: Dl,
  get_all_dirty_from_scope: Mf,
  get_slot_changes: Wf,
  group_outros: ra,
  init: b1,
  insert: ue,
  mount_component: zf,
  noop: ca,
  safe_not_equal: v1,
  set_data: Kt,
  set_style: ti,
  space: Vt,
  text: je,
  toggle_class: Ut,
  transition_in: ln,
  transition_out: vn,
  update_slot_base: Xf
} = window.__gradio__svelte__internal, { tick: w1 } = window.__gradio__svelte__internal, { onDestroy: k1 } = window.__gradio__svelte__internal, { createEventDispatcher: y1 } = window.__gradio__svelte__internal, C1 = (i) => ({}), vr = (i) => ({}), S1 = (i) => ({}), wr = (i) => ({});
function kr(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function yr(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function M1(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new Ol({
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
      e = bn("div"), kf(t.$$.fragment), n = Vt(), s = bn("span"), o = je(l), r = Vt(), f && f.c(), on(e, "class", "clear-status svelte-16nch4a"), on(s, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      ue(u, e, d), zf(t, e, null), ue(u, n, d), ue(u, s, d), Ci(s, o), ue(u, r, d), f && f.m(u, d), a = !0;
    },
    p(u, d) {
      const _ = {};
      d[0] & /*i18n*/
      2 && (_.label = /*i18n*/
      u[1]("common.clear")), t.$set(_), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      u[1]("common.error") + "") && Kt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && Xf(
        f,
        c,
        u,
        /*$$scope*/
        u[29],
        a ? Wf(
          c,
          /*$$scope*/
          u[29],
          d,
          C1
        ) : Mf(
          /*$$scope*/
          u[29]
        ),
        vr
      );
    },
    i(u) {
      a || (ln(t.$$.fragment, u), ln(f, u), a = !0);
    },
    o(u) {
      vn(t.$$.fragment, u), vn(f, u), a = !1;
    },
    d(u) {
      u && (fe(e), fe(n), fe(s), fe(r)), Cf(t), f && f.d(u);
    }
  };
}
function W1(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Cr(i)
  );
  function u(w, Y) {
    if (
      /*progress*/
      w[7]
    ) return Y1;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return X1;
    if (
      /*queue_position*/
      w[2] === 0
    ) return z1;
  }
  let d = u(i), _ = d && d(i), p = (
    /*timer*/
    i[5] && Wr(i)
  );
  const g = [E1, B1], h = [];
  function b(w, Y) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = b(i)) && (o = h[l] = g[l](i));
  let y = !/*timer*/
  i[5] && Er(i);
  return {
    c() {
      f && f.c(), e = Vt(), t = bn("div"), _ && _.c(), n = Vt(), p && p.c(), s = Vt(), o && o.c(), r = Vt(), y && y.c(), a = fs(), on(t, "class", "progress-text svelte-16nch4a"), Ut(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Ut(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, Y) {
      f && f.m(w, Y), ue(w, e, Y), ue(w, t, Y), _ && _.m(t, null), Ci(t, n), p && p.m(t, null), ue(w, s, Y), ~l && h[l].m(w, Y), ue(w, r, Y), y && y.m(w, Y), ue(w, a, Y), c = !0;
    },
    p(w, Y) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, Y) : (f = Cr(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = u(w)) && _ ? _.p(w, Y) : (_ && _.d(1), _ = d && d(w), _ && (_.c(), _.m(t, n))), /*timer*/
      w[5] ? p ? p.p(w, Y) : (p = Wr(w), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!c || Y[0] & /*variant*/
      256) && Ut(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!c || Y[0] & /*variant*/
      256) && Ut(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let x = l;
      l = b(w), l === x ? ~l && h[l].p(w, Y) : (o && (ra(), vn(h[x], 1, 1, () => {
        h[x] = null;
      }), aa()), ~l ? (o = h[l], o ? o.p(w, Y) : (o = h[l] = g[l](w), o.c()), ln(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? y && (ra(), vn(y, 1, 1, () => {
        y = null;
      }), aa()) : y ? (y.p(w, Y), Y[0] & /*timer*/
      32 && ln(y, 1)) : (y = Er(w), y.c(), ln(y, 1), y.m(a.parentNode, a));
    },
    i(w) {
      c || (ln(o), ln(y), c = !0);
    },
    o(w) {
      vn(o), vn(y), c = !1;
    },
    d(w) {
      w && (fe(e), fe(t), fe(s), fe(r), fe(a)), f && f.d(w), _ && _.d(), p && p.d(), ~l && h[l].d(w), y && y.d(w);
    }
  };
}
function Cr(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = bn("div"), on(e, "class", "eta-bar svelte-16nch4a"), ti(e, "transform", t);
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
function z1(i) {
  let e;
  return {
    c() {
      e = je("processing |");
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
function X1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = je("queue: "), n = je(t), s = je("/"), l = je(
        /*queue_size*/
        i[3]
      ), o = je(" |");
    },
    m(r, a) {
      ue(r, e, a), ue(r, n, a), ue(r, s, a), ue(r, l, a), ue(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Kt(n, t), a[0] & /*queue_size*/
      8 && Kt(
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
function Y1(i) {
  let e, t = Dl(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Mr(yr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = fs();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ue(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = Dl(
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
  function r(f, u) {
    return (
      /*p*/
      f[41].length != null ? D1 : x1
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Vt(), n = je(t), s = je(" | "), o = je(l);
    },
    m(f, u) {
      c.m(f, u), ue(f, e, u), ue(f, n, u), ue(f, s, u), ue(f, o, u);
    },
    p(f, u) {
      a === (a = r(f)) && c ? c.p(f, u) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && Kt(n, t);
    },
    d(f) {
      f && (fe(e), fe(n), fe(s), fe(o)), c.d(f);
    }
  };
}
function x1(i) {
  let e = ss(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = je(e);
    },
    m(n, s) {
      ue(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = ss(
        /*p*/
        n[41].index || 0
      ) + "") && Kt(t, e);
    },
    d(n) {
      n && fe(t);
    }
  };
}
function D1(i) {
  let e = ss(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = ss(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = je(e), n = je("/"), l = je(s);
    },
    m(o, r) {
      ue(o, t, r), ue(o, n, r), ue(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = ss(
        /*p*/
        o[41].index || 0
      ) + "") && Kt(t, e), r[0] & /*progress*/
      128 && s !== (s = ss(
        /*p*/
        o[41].length
      ) + "") && Kt(l, s);
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
      t && t.c(), e = fs();
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
      e = je(
        /*formatted_timer*/
        i[20]
      ), n = je(t), s = je("s");
    },
    m(l, o) {
      ue(l, e, o), ue(l, n, o), ue(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Kt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Kt(n, t);
    },
    d(l) {
      l && (fe(e), fe(n), fe(s));
    }
  };
}
function B1(i) {
  let e, t;
  return e = new g1({
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
      t || (ln(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cf(e, n);
    }
  };
}
function E1(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && zr(i)
  );
  return {
    c() {
      e = bn("div"), t = bn("div"), r && r.c(), n = Vt(), s = bn("div"), l = bn("div"), on(t, "class", "progress-level-inner svelte-16nch4a"), on(l, "class", "progress-bar svelte-16nch4a"), ti(l, "width", o), on(s, "class", "progress-bar-wrap svelte-16nch4a"), on(e, "class", "progress-level svelte-16nch4a");
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
  let e, t = Dl(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = Br(kr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = fs();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      ue(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = Dl(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = kr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = Br(r), n[o].c(), n[o].m(e.parentNode, e));
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
function Xr(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && R1()
  ), o = (
    /*p*/
    i[41].desc != null && Yr(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && xr()
  ), a = (
    /*progress_level*/
    i[14] != null && Dr(i)
  );
  return {
    c() {
      l && l.c(), e = Vt(), o && o.c(), t = Vt(), r && r.c(), n = Vt(), a && a.c(), s = fs();
    },
    m(c, f) {
      l && l.m(c, f), ue(c, e, f), o && o.m(c, f), ue(c, t, f), r && r.m(c, f), ue(c, n, f), a && a.m(c, f), ue(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = Yr(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = xr(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = Dr(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (fe(e), fe(t), fe(n), fe(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function R1(i) {
  let e;
  return {
    c() {
      e = je(" /");
    },
    m(t, n) {
      ue(t, e, n);
    },
    d(t) {
      t && fe(e);
    }
  };
}
function Yr(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = je(e);
    },
    m(n, s) {
      ue(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Kt(t, e);
    },
    d(n) {
      n && fe(t);
    }
  };
}
function xr(i) {
  let e;
  return {
    c() {
      e = je("-");
    },
    m(t, n) {
      ue(t, e, n);
    },
    d(t) {
      t && fe(e);
    }
  };
}
function Dr(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = je(e), n = je("%");
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
      ] || 0)).toFixed(1) + "") && Kt(t, e);
    },
    d(s) {
      s && (fe(t), fe(n));
    }
  };
}
function Br(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Xr(i)
  );
  return {
    c() {
      t && t.c(), e = fs();
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
      ] != null ? t ? t.p(n, s) : (t = Xr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
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
      e = bn("p"), t = je(
        /*loading_text*/
        i[9]
      ), n = Vt(), o && o.c(), on(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      ue(r, e, a), Ci(e, t), ue(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && Kt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Xf(
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
          S1
        ) : Mf(
          /*$$scope*/
          r[29]
        ),
        wr
      );
    },
    i(r) {
      s || (ln(o, r), s = !0);
    },
    o(r) {
      vn(o, r), s = !1;
    },
    d(r) {
      r && (fe(e), fe(n)), o && o.d(r);
    }
  };
}
function H1(i) {
  let e, t, n, s, l;
  const o = [W1, M1], r = [];
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
      e = bn("div"), n && n.c(), on(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Ut(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Ut(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Ut(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Ut(
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
      let u = t;
      t = a(c), t === u ? ~t && r[t].p(c, f) : (n && (ra(), vn(r[u], 1, 1, () => {
        r[u] = null;
      }), aa()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), ln(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && on(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Ut(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ut(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && Ut(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && Ut(
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
      l || (ln(n), l = !0);
    },
    o(c) {
      vn(n), l = !1;
    },
    d(c) {
      c && fe(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var L1 = function(i, e, t, n) {
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
let el = [], yo = !1;
function P1(i) {
  return L1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (el.push(e), !yo) yo = !0;
      else return;
      yield w1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < el.length; s++) {
          const o = el[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), yo = !1, el = [];
      });
    }
  });
}
function q1(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = y1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: _ = !0 } = e, { show_progress: p = "full" } = e, { message: g = null } = e, { progress: h = null } = e, { variant: b = "default" } = e, { loading_text: y = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: Y = !1 } = e, { border: x = !1 } = e, { autoscroll: k } = e, X, W = !1, S = 0, v = 0, E = null, B = null, M = 0, j = null, P, T = null, Z = !0;
  const C = () => {
    t(0, a = t(27, E = t(19, G = null))), t(25, S = performance.now()), t(26, v = 0), W = !0, L();
  };
  function L() {
    requestAnimationFrame(() => {
      t(26, v = (performance.now() - S) / 1e3), W && L();
    });
  }
  function le() {
    t(26, v = 0), t(0, a = t(27, E = t(19, G = null))), W && (W = !1);
  }
  k1(() => {
    W && le();
  });
  let G = null;
  function U(q) {
    br[q ? "unshift" : "push"](() => {
      T = q, t(16, T), t(7, h), t(14, j), t(15, P);
    });
  }
  const ge = () => {
    o("clear_status");
  };
  function J(q) {
    br[q ? "unshift" : "push"](() => {
      X = q, t(13, X);
    });
  }
  return i.$$set = (q) => {
    "i18n" in q && t(1, r = q.i18n), "eta" in q && t(0, a = q.eta), "queue_position" in q && t(2, c = q.queue_position), "queue_size" in q && t(3, f = q.queue_size), "status" in q && t(4, u = q.status), "scroll_to_output" in q && t(22, d = q.scroll_to_output), "timer" in q && t(5, _ = q.timer), "show_progress" in q && t(6, p = q.show_progress), "message" in q && t(23, g = q.message), "progress" in q && t(7, h = q.progress), "variant" in q && t(8, b = q.variant), "loading_text" in q && t(9, y = q.loading_text), "absolute" in q && t(10, w = q.absolute), "translucent" in q && t(11, Y = q.translucent), "border" in q && t(12, x = q.border), "autoscroll" in q && t(24, k = q.autoscroll), "$$scope" in q && t(29, l = q.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = E), a != null && E !== a && (t(28, B = (performance.now() - S) / 1e3 + a), t(19, G = B.toFixed(1)), t(27, E = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, M = B === null || B <= 0 || !v ? null : Math.min(v / B, 1)), i.$$.dirty[0] & /*progress*/
    128 && h != null && t(18, Z = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (h != null ? t(14, j = h.map((q) => {
      if (q.index != null && q.length != null)
        return q.index / q.length;
      if (q.progress != null)
        return q.progress;
    })) : t(14, j = null), j ? (t(15, P = j[j.length - 1]), T && (P === 0 ? t(16, T.style.transition = "0", T) : t(16, T.style.transition = "150ms", T))) : t(15, P = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? C() : le()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && X && d && (u === "pending" || u === "complete") && P1(X, k), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = v.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    u,
    _,
    p,
    h,
    b,
    y,
    w,
    Y,
    x,
    X,
    j,
    P,
    T,
    M,
    Z,
    G,
    n,
    o,
    d,
    g,
    k,
    S,
    v,
    E,
    B,
    l,
    s,
    U,
    ge,
    J
  ];
}
class I1 extends p1 {
  constructor(e) {
    super(), b1(
      this,
      e,
      q1,
      H1,
      v1,
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
const { setContext: _3, getContext: A1 } = window.__gradio__svelte__internal, j1 = "WORKER_PROXY_CONTEXT_KEY";
function Yf() {
  return A1(j1);
}
function F1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function xf(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function Df(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!F1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function T1(i) {
  if (i == null || !Df(i))
    return i;
  const e = Yf();
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
      type: xf(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: O1,
  assign: Bl,
  check_outros: Bf,
  compute_rest_props: Rr,
  create_slot: Ca,
  detach: Zl,
  element: Ef,
  empty: Rf,
  exclude_internal_props: U1,
  get_all_dirty_from_scope: Sa,
  get_slot_changes: Ma,
  get_spread_update: Hf,
  group_outros: Lf,
  init: N1,
  insert: Gl,
  listen: Pf,
  prevent_default: V1,
  safe_not_equal: K1,
  set_attributes: El,
  transition_in: xi,
  transition_out: Di,
  update_slot_base: Wa
} = window.__gradio__svelte__internal, { createEventDispatcher: Z1 } = window.__gradio__svelte__internal;
function G1(i) {
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
      e = Ef("a"), r && r.c(), El(e, c);
    },
    m(f, u) {
      Gl(f, e, u), r && r.m(e, null), n = !0, s || (l = Pf(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, u) {
      r && r.p && (!n || u & /*$$scope*/
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
          u,
          null
        ) : Sa(
          /*$$scope*/
          f[7]
        ),
        null
      ), El(e, c = Hf(a, [
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
      n || (xi(r, f), n = !0);
    },
    o(f) {
      Di(r, f), n = !1;
    },
    d(f) {
      f && Zl(e), r && r.d(f), s = !1, l();
    }
  };
}
function J1(i) {
  let e, t, n, s;
  const l = [$1, Q1], o = [];
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
      o[e].m(a, c), Gl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Lf(), Di(o[f], 1, 1, () => {
        o[f] = null;
      }), Bf(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), xi(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (xi(t), s = !0);
    },
    o(a) {
      Di(t), s = !1;
    },
    d(a) {
      a && Zl(n), o[e].d(a);
    }
  };
}
function Q1(i) {
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
      e = Ef("a"), o && o.c(), El(e, a);
    },
    m(c, f) {
      Gl(c, e, f), o && o.m(e, null), t = !0, n || (s = Pf(e, "click", V1(
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
      ), El(e, a = Hf(r, [
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
      t || (xi(o, c), t = !0);
    },
    o(c) {
      Di(o, c), t = !1;
    },
    d(c) {
      c && Zl(e), o && o.d(c), n = !1, s();
    }
  };
}
function $1(i) {
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
      e || (xi(n, s), e = !0);
    },
    o(s) {
      Di(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function e0(i) {
  let e, t, n, s, l;
  const o = [J1, G1], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && Df(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = Rf();
    },
    m(c, f) {
      r[t].m(c, f), Gl(c, s, f), l = !0;
    },
    p(c, [f]) {
      let u = t;
      t = a(c, f), t === u ? r[t].p(c, f) : (Lf(), Di(r[u], 1, 1, () => {
        r[u] = null;
      }), Bf(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), xi(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (xi(n), l = !0);
    },
    o(c) {
      Di(n), l = !1;
    },
    d(c) {
      c && Zl(s), r[t].d(c);
    }
  };
}
function t0(i, e, t) {
  const n = ["href", "download"];
  let s = Rr(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(p, g, h, b) {
    function y(w) {
      return w instanceof h ? w : new h(function(Y) {
        Y(w);
      });
    }
    return new (h || (h = Promise))(function(w, Y) {
      function x(W) {
        try {
          X(b.next(W));
        } catch (S) {
          Y(S);
        }
      }
      function k(W) {
        try {
          X(b.throw(W));
        } catch (S) {
          Y(S);
        }
      }
      function X(W) {
        W.done ? w(W.value) : y(W.value).then(x, k);
      }
      X((b = b.apply(p, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = Z1();
  let u = !1;
  const d = Yf();
  function _() {
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
      }).then((h) => {
        if (h.status !== 200)
          throw new Error(`Failed to get file ${g} from the Wasm worker.`);
        const b = new Blob(
          [h.body],
          {
            type: xf(h.headers, "content-type")
          }
        ), y = URL.createObjectURL(b), w = document.createElement("a");
        w.href = y, w.download = c, w.click(), URL.revokeObjectURL(y);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (p) => {
    e = Bl(Bl({}, e), U1(p)), t(6, s = Rr(e, n)), "href" in p && t(0, a = p.href), "download" in p && t(1, c = p.download), "$$scope" in p && t(7, o = p.$$scope);
  }, [
    a,
    c,
    u,
    f,
    d,
    _,
    s,
    o,
    l
  ];
}
class n0 extends O1 {
  constructor(e) {
    super(), N1(this, e, t0, e0, K1, { href: 0, download: 1 });
  }
}
var i0 = Object.defineProperty, s0 = (i, e, t) => e in i ? i0(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, kn = (i, e, t) => (s0(i, typeof e != "symbol" ? e + "" : e, t), t), qf = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, bs = (i, e, t) => (qf(i, e, "read from private field"), t ? t.call(i) : e.get(i)), l0 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, o0 = (i, e, t, n) => (qf(i, e, "write to private field"), e.set(i, t), t), Jn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function If(i, e) {
  return i.map(
    (t) => new a0({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class a0 {
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
    kn(this, "path"), kn(this, "url"), kn(this, "orig_name"), kn(this, "size"), kn(this, "blob"), kn(this, "is_stream"), kn(this, "mime_type"), kn(this, "alt_text"), kn(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class m3 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = bs(this, Jn) + t; ; ) {
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
        o0(this, Jn, t);
      },
      flush: (t) => {
        if (bs(this, Jn) === "")
          return;
        const n = e.allowCR && bs(this, Jn).endsWith("\r") ? bs(this, Jn).slice(0, -1) : bs(this, Jn);
        t.enqueue(n);
      }
    }), l0(this, Jn, "");
  }
}
Jn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: r0,
  append: xt,
  attr: bi,
  detach: Af,
  element: vi,
  init: c0,
  insert: jf,
  noop: Hr,
  safe_not_equal: f0,
  set_data: Rl,
  set_style: Co,
  space: fa,
  text: ls,
  toggle_class: Lr
} = window.__gradio__svelte__internal, { onMount: u0, createEventDispatcher: h0, onDestroy: d0 } = window.__gradio__svelte__internal;
function Pr(i) {
  let e, t, n, s, l = Xs(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = vi("div"), t = vi("span"), n = vi("div"), s = vi("progress"), o = ls(l), a = fa(), c = vi("span"), u = ls(f), Co(s, "visibility", "hidden"), Co(s, "height", "0"), Co(s, "width", "0"), s.value = r = Xs(
        /*file_to_display*/
        i[2]
      ), bi(s, "max", "100"), bi(s, "class", "svelte-cr2edf"), bi(n, "class", "progress-bar svelte-cr2edf"), bi(c, "class", "file-name svelte-cr2edf"), bi(e, "class", "file svelte-cr2edf");
    },
    m(d, _) {
      jf(d, e, _), xt(e, t), xt(t, n), xt(n, s), xt(s, o), xt(e, a), xt(e, c), xt(c, u);
    },
    p(d, _) {
      _ & /*file_to_display*/
      4 && l !== (l = Xs(
        /*file_to_display*/
        d[2]
      ) + "") && Rl(o, l), _ & /*file_to_display*/
      4 && r !== (r = Xs(
        /*file_to_display*/
        d[2]
      )) && (s.value = r), _ & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && Rl(u, f);
    },
    d(d) {
      d && Af(e);
    }
  };
}
function _0(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, u = (
    /*file_to_display*/
    i[2] && Pr(i)
  );
  return {
    c() {
      e = vi("div"), t = vi("span"), n = ls("Uploading "), l = ls(s), o = fa(), a = ls(r), c = ls("..."), f = fa(), u && u.c(), bi(t, "class", "uploading svelte-cr2edf"), bi(e, "class", "wrap svelte-cr2edf"), Lr(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, _) {
      jf(d, e, _), xt(e, t), xt(t, n), xt(t, l), xt(t, o), xt(t, a), xt(t, c), xt(e, f), u && u.m(e, null);
    },
    p(d, [_]) {
      _ & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      d[0].length + "") && Rl(l, s), _ & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && Rl(a, r), /*file_to_display*/
      d[2] ? u ? u.p(d, _) : (u = Pr(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), _ & /*progress*/
      2 && Lr(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: Hr,
    o: Hr,
    d(d) {
      d && Af(e), u && u.d();
    }
  };
}
function Xs(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function m0(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Xs(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function g0(i, e, t) {
  var n = this && this.__awaiter || function(g, h, b, y) {
    function w(Y) {
      return Y instanceof b ? Y : new b(function(x) {
        x(Y);
      });
    }
    return new (b || (b = Promise))(function(Y, x) {
      function k(S) {
        try {
          W(y.next(S));
        } catch (v) {
          x(v);
        }
      }
      function X(S) {
        try {
          W(y.throw(S));
        } catch (v) {
          x(v);
        }
      }
      function W(S) {
        S.done ? Y(S.value) : w(S.value).then(k, X);
      }
      W((y = y.apply(g, h || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, u, d = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const _ = h0();
  function p(g, h) {
    t(0, d = d.map((b) => (b.orig_name === g && (b.progress += h), b)));
  }
  return u0(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const h = JSON.parse(g.data);
        c || t(1, c = !0), h.msg === "done" ? (a == null || a.close(), _("done")) : (t(7, f = h), p(h.orig_name, h.chunk_size));
      });
    };
  })), d0(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, s = g.upload_id), "root" in g && t(4, l = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && m0(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class p0 extends r0 {
  constructor(e) {
    super(), c0(this, e, g0, _0, f0, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: b0,
  append: qr,
  attr: pt,
  binding_callbacks: v0,
  bubble: oi,
  check_outros: Ff,
  create_component: w0,
  create_slot: Tf,
  destroy_component: k0,
  detach: Jl,
  element: ua,
  empty: Of,
  get_all_dirty_from_scope: Uf,
  get_slot_changes: Nf,
  group_outros: Vf,
  init: y0,
  insert: Ql,
  listen: Pt,
  mount_component: C0,
  prevent_default: ai,
  run_all: S0,
  safe_not_equal: M0,
  set_style: Kf,
  space: W0,
  stop_propagation: ri,
  toggle_class: rt,
  transition_in: ni,
  transition_out: Bi,
  update_slot_base: Zf
} = window.__gradio__svelte__internal, { createEventDispatcher: z0, tick: X0 } = window.__gradio__svelte__internal;
function Y0(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = (
    /*#slots*/
    i[26].default
  ), _ = Tf(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ua("button"), _ && _.c(), t = W0(), n = ua("input"), pt(n, "aria-label", "file upload"), pt(n, "data-testid", "file-upload"), pt(n, "type", "file"), pt(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, pt(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), pt(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), pt(n, "class", "svelte-1s26xmt"), pt(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), pt(e, "class", "svelte-1s26xmt"), rt(
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
      Ql(p, e, g), _ && _.m(e, null), qr(e, t), qr(e, n), i[34](n), c = !0, f || (u = [
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
      _ && _.p && (!c || g[0] & /*$$scope*/
      33554432) && Zf(
        _,
        d,
        p,
        /*$$scope*/
        p[25],
        c ? Nf(
          d,
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
      p[16] || void 0)) && pt(n, "accept", s), (!c || g[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      p[6] === "multiple" || void 0)) && (n.multiple = l), (!c || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      p[6] === "directory" || void 0)) && pt(n, "webkitdirectory", o), (!c || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      p[6] === "directory" || void 0)) && pt(n, "mozdirectory", r), (!c || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      p[9] ? -1 : 0)) && pt(e, "tabindex", a), (!c || g[0] & /*hidden*/
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
      c || (ni(_, p), c = !0);
    },
    o(p) {
      Bi(_, p), c = !1;
    },
    d(p) {
      p && Jl(e), _ && _.d(p), i[34](null), f = !1, S0(u);
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
      n && n.m(s, l), Ql(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (Vf(), Bi(n, 1, 1, () => {
        n = null;
      }), Ff()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && ni(n, 1)) : (n = Ir(s), n.c(), ni(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (ni(n), t = !0);
    },
    o(s) {
      Bi(n), t = !1;
    },
    d(s) {
      s && Jl(e), n && n.d(s);
    }
  };
}
function D0(i) {
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
      e = ua("button"), r && r.c(), pt(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), pt(e, "class", "svelte-1s26xmt"), rt(
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
      Ql(a, e, c), r && r.m(e, null), n = !0, s || (l = Pt(
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
      a[9] ? -1 : 0)) && pt(e, "tabindex", t), (!n || c[0] & /*hidden*/
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
      Bi(r, a), n = !1;
    },
    d(a) {
      a && Jl(e), r && r.d(a), s = !1, l();
    }
  };
}
function Ir(i) {
  let e, t;
  return e = new p0({
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
      w0(e.$$.fragment);
    },
    m(n, s) {
      C0(e, n, s), t = !0;
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
      Bi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      k0(e, n);
    }
  };
}
function B0(i) {
  let e, t, n, s;
  const l = [D0, x0, Y0], o = [];
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
      o[e].m(a, c), Ql(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Vf(), Bi(o[f], 1, 1, () => {
        o[f] = null;
      }), Ff(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), ni(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ni(t), s = !0);
    },
    o(a) {
      Bi(t), s = !1;
    },
    d(a) {
      a && Jl(n), o[e].d(a);
    }
  };
}
function E0(i, e, t) {
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
function R0(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(R, I, ne, Q) {
    function xe(De) {
      return De instanceof ne ? De : new ne(function(H) {
        H(De);
      });
    }
    return new (ne || (ne = Promise))(function(De, H) {
      function Ue(Ne) {
        try {
          He(Q.next(Ne));
        } catch (nt) {
          H(nt);
        }
      }
      function Se(Ne) {
        try {
          He(Q.throw(Ne));
        } catch (nt) {
          H(nt);
        }
      }
      function He(Ne) {
        Ne.done ? De(Ne.value) : xe(Ne.value).then(Ue, Se);
      }
      He((Q = Q.apply(R, I || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: _ } = e, { hidden: p = !1 } = e, { format: g = "file" } = e, { uploading: h = !1 } = e, { hidden_upload: b = null } = e, { show_progress: y = !0 } = e, { max_file_size: w = null } = e, { upload: Y } = e, { stream_handler: x } = e, k, X, W;
  const S = z0(), v = ["image", "video", "audio", "text", "file"], E = (R) => R.startsWith(".") || R.endsWith("/*") ? R : v.includes(R) ? R + "/*" : "." + R;
  function B() {
    t(20, r = !r);
  }
  function M() {
    navigator.clipboard.read().then((R) => l(this, void 0, void 0, function* () {
      for (let I = 0; I < R.length; I++) {
        const ne = R[I].types.find((Q) => Q.startsWith("image/"));
        if (ne) {
          R[I].getType(ne).then((Q) => l(this, void 0, void 0, function* () {
            const xe = new File([Q], `clipboard.${ne.replace("image/", "")}`);
            yield T([xe]);
          }));
          break;
        }
      }
    }));
  }
  function j() {
    d || b && (t(2, b.value = "", b), b.click());
  }
  function P(R) {
    return l(this, void 0, void 0, function* () {
      yield X0(), t(14, k = Math.random().toString(36).substring(2, 15)), t(1, h = !0);
      try {
        const I = yield Y(R, _, k, w ?? 1 / 0);
        return S("load", u === "single" ? I == null ? void 0 : I[0] : I), t(1, h = !1), I || [];
      } catch (I) {
        return S("error", I.message), t(1, h = !1), [];
      }
    });
  }
  function T(R) {
    return l(this, void 0, void 0, function* () {
      if (!R.length)
        return;
      let I = R.map((ne) => new File([ne], ne instanceof File ? ne.name : "file", { type: ne.type }));
      return t(15, X = yield If(I)), yield P(X);
    });
  }
  function Z(R) {
    return l(this, void 0, void 0, function* () {
      const I = R.target;
      if (I.files)
        if (g != "blob")
          yield T(Array.from(I.files));
        else {
          if (u === "single") {
            S("load", I.files[0]);
            return;
          }
          S("load", I.files);
        }
    });
  }
  function C(R) {
    return l(this, void 0, void 0, function* () {
      var I;
      if (t(20, r = !1), !(!((I = R.dataTransfer) === null || I === void 0) && I.files)) return;
      const ne = Array.from(R.dataTransfer.files).filter((Q) => {
        const xe = "." + Q.name.split(".").pop();
        return xe && E0(W, xe, Q.type) || (xe && Array.isArray(o) ? o.includes(xe) : xe === o) ? !0 : (S("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield T(ne);
    });
  }
  function L(R) {
    oi.call(this, i, R);
  }
  function le(R) {
    oi.call(this, i, R);
  }
  function G(R) {
    oi.call(this, i, R);
  }
  function U(R) {
    oi.call(this, i, R);
  }
  function ge(R) {
    oi.call(this, i, R);
  }
  function J(R) {
    oi.call(this, i, R);
  }
  function q(R) {
    oi.call(this, i, R);
  }
  function pe(R) {
    v0[R ? "unshift" : "push"](() => {
      b = R, t(2, b);
    });
  }
  return i.$$set = (R) => {
    "filetype" in R && t(0, o = R.filetype), "dragging" in R && t(20, r = R.dragging), "boundedheight" in R && t(3, a = R.boundedheight), "center" in R && t(4, c = R.center), "flex" in R && t(5, f = R.flex), "file_count" in R && t(6, u = R.file_count), "disable_click" in R && t(7, d = R.disable_click), "root" in R && t(8, _ = R.root), "hidden" in R && t(9, p = R.hidden), "format" in R && t(21, g = R.format), "uploading" in R && t(1, h = R.uploading), "hidden_upload" in R && t(2, b = R.hidden_upload), "show_progress" in R && t(10, y = R.show_progress), "max_file_size" in R && t(22, w = R.max_file_size), "upload" in R && t(23, Y = R.upload), "stream_handler" in R && t(11, x = R.stream_handler), "$$scope" in R && t(25, s = R.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, W = null) : typeof o == "string" ? t(16, W = E(o)) : (t(0, o = o.map(E)), t(16, W = o.join(", "))));
  }, [
    o,
    h,
    b,
    a,
    c,
    f,
    u,
    d,
    _,
    p,
    y,
    x,
    M,
    j,
    k,
    X,
    W,
    B,
    Z,
    C,
    r,
    g,
    w,
    Y,
    T,
    s,
    n,
    L,
    le,
    G,
    U,
    ge,
    J,
    q,
    pe
  ];
}
class H0 extends b0 {
  constructor(e) {
    super(), y0(
      this,
      e,
      R0,
      B0,
      M0,
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
  SvelteComponent: L0,
  append: tl,
  attr: So,
  create_component: P0,
  destroy_component: q0,
  detach: I0,
  element: Mo,
  init: A0,
  insert: j0,
  listen: F0,
  mount_component: T0,
  noop: O0,
  safe_not_equal: U0,
  set_style: N0,
  space: V0,
  text: K0,
  transition_in: Z0,
  transition_out: G0
} = window.__gradio__svelte__internal, { createEventDispatcher: J0 } = window.__gradio__svelte__internal;
function Q0(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new df({}), {
    c() {
      e = Mo("button"), t = Mo("div"), n = Mo("span"), P0(s.$$.fragment), l = V0(), r = K0(o), So(n, "class", "icon-wrap svelte-fjcd9c"), So(t, "class", "wrap svelte-fjcd9c"), So(e, "class", "svelte-fjcd9c"), N0(e, "height", "100%");
    },
    m(u, d) {
      j0(u, e, d), tl(e, t), tl(t, n), T0(s, n, null), tl(t, l), tl(t, r), a = !0, c || (f = F0(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: O0,
    i(u) {
      a || (Z0(s.$$.fragment, u), a = !0);
    },
    o(u) {
      G0(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && I0(e), q0(s), c = !1, f();
    }
  };
}
function $0(i) {
  const e = J0();
  return [e, () => e("click")];
}
class eg extends L0 {
  constructor(e) {
    super(), A0(this, e, $0, Q0, U0, {});
  }
}
function tg() {
  return navigator.mediaDevices.enumerateDevices();
}
function ng(i, e) {
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
  return navigator.mediaDevices.getUserMedia(s).then((l) => (ng(l, e), l));
}
function ig(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: sg,
  action_destroyer: lg,
  add_render_callback: og,
  append: Xn,
  attr: tt,
  binding_callbacks: ag,
  check_outros: Ds,
  create_component: us,
  create_in_transition: rg,
  destroy_component: hs,
  destroy_each: cg,
  detach: Dt,
  element: Ft,
  empty: za,
  ensure_array_like: jr,
  group_outros: Bs,
  init: fg,
  insert: Bt,
  listen: Hl,
  mount_component: ds,
  noop: Xa,
  run_all: ug,
  safe_not_equal: hg,
  set_data: Gf,
  set_input_value: ha,
  space: Ls,
  stop_propagation: dg,
  text: Jf,
  toggle_class: nl,
  transition_in: ct,
  transition_out: bt
} = window.__gradio__svelte__internal, { createEventDispatcher: _g, onMount: mg } = window.__gradio__svelte__internal;
function Fr(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function gg(i) {
  let e, t, n, s, l, o, r, a, c, f, u;
  const d = [vg, bg], _ = [];
  function p(b, y) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = p(i), s = _[n] = d[n](i);
  let g = !/*recording*/
  i[8] && Tr(i), h = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Or(i)
  );
  return {
    c() {
      e = Ft("div"), t = Ft("button"), s.c(), o = Ls(), g && g.c(), r = Ls(), h && h.c(), a = za(), tt(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), tt(t, "class", "svelte-8hqvb6"), tt(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, y) {
      Bt(b, e, y), Xn(e, t), _[n].m(t, null), Xn(e, o), g && g.m(e, null), Bt(b, r, y), h && h.m(b, y), Bt(b, a, y), c = !0, f || (u = Hl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(b, y) {
      let w = n;
      n = p(b), n === w ? _[n].p(b, y) : (Bs(), bt(_[w], 1, 1, () => {
        _[w] = null;
      }), Ds(), s = _[n], s ? s.p(b, y) : (s = _[n] = d[n](b), s.c()), ct(s, 1), s.m(t, null)), (!c || y[0] & /*mode*/
      2 && l !== (l = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && tt(t, "aria-label", l), /*recording*/
      b[8] ? g && (Bs(), bt(g, 1, 1, () => {
        g = null;
      }), Ds()) : g ? (g.p(b, y), y[0] & /*recording*/
      256 && ct(g, 1)) : (g = Tr(b), g.c(), ct(g, 1), g.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? h ? (h.p(b, y), y[0] & /*options_open, selected_device*/
      1152 && ct(h, 1)) : (h = Or(b), h.c(), ct(h, 1), h.m(a.parentNode, a)) : h && (Bs(), bt(h, 1, 1, () => {
        h = null;
      }), Ds());
    },
    i(b) {
      c || (ct(s), ct(g), ct(h), c = !0);
    },
    o(b) {
      bt(s), bt(g), bt(h), c = !1;
    },
    d(b) {
      b && (Dt(e), Dt(r), Dt(a)), _[n].d(), g && g.d(), h && h.d(b), f = !1, u();
    }
  };
}
function pg(i) {
  let e, t, n, s;
  return t = new eg({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ft("div"), us(t.$$.fragment), tt(e, "title", "grant webcam access");
    },
    m(l, o) {
      Bt(l, e, o), ds(t, e, null), s = !0;
    },
    p: Xa,
    i(l) {
      s || (ct(t.$$.fragment, l), l && (n || og(() => {
        n = rg(e, l1, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      bt(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && Dt(e), hs(t);
    }
  };
}
function bg(i) {
  let e, t, n;
  return t = new t_({}), {
    c() {
      e = Ft("div"), us(t.$$.fragment), tt(e, "class", "icon svelte-8hqvb6"), tt(e, "title", "capture photo");
    },
    m(s, l) {
      Bt(s, e, l), ds(t, e, null), n = !0;
    },
    p: Xa,
    i(s) {
      n || (ct(t.$$.fragment, s), n = !0);
    },
    o(s) {
      bt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Dt(e), hs(t);
    }
  };
}
function vg(i) {
  let e, t, n, s;
  const l = [kg, wg], o = [];
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
      e = r(a), e !== f && (Bs(), bt(o[f], 1, 1, () => {
        o[f] = null;
      }), Ds(), t = o[e], t || (t = o[e] = l[e](a), t.c()), ct(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ct(t), s = !0);
    },
    o(a) {
      bt(t), s = !1;
    },
    d(a) {
      a && Dt(n), o[e].d(a);
    }
  };
}
function wg(i) {
  let e, t, n;
  return t = new c_({}), {
    c() {
      e = Ft("div"), us(t.$$.fragment), tt(e, "class", "icon red svelte-8hqvb6"), tt(e, "title", "start recording");
    },
    m(s, l) {
      Bt(s, e, l), ds(t, e, null), n = !0;
    },
    i(s) {
      n || (ct(t.$$.fragment, s), n = !0);
    },
    o(s) {
      bt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Dt(e), hs(t);
    }
  };
}
function kg(i) {
  let e, t, n;
  return t = new hm({}), {
    c() {
      e = Ft("div"), us(t.$$.fragment), tt(e, "class", "icon red svelte-8hqvb6"), tt(e, "title", "stop recording");
    },
    m(s, l) {
      Bt(s, e, l), ds(t, e, null), n = !0;
    },
    i(s) {
      n || (ct(t.$$.fragment, s), n = !0);
    },
    o(s) {
      bt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Dt(e), hs(t);
    }
  };
}
function Tr(i) {
  let e, t, n, s, l;
  return t = new ya({}), {
    c() {
      e = Ft("button"), us(t.$$.fragment), tt(e, "class", "icon svelte-8hqvb6"), tt(e, "aria-label", "select input source");
    },
    m(o, r) {
      Bt(o, e, r), ds(t, e, null), n = !0, s || (l = Hl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: Xa,
    i(o) {
      n || (ct(t.$$.fragment, o), n = !0);
    },
    o(o) {
      bt(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Dt(e), hs(t), s = !1, l();
    }
  };
}
function Or(i) {
  let e, t, n, s, l, o, r;
  n = new ya({});
  function a(u, d) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Cg : yg
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = Ft("select"), t = Ft("button"), us(n.$$.fragment), s = Ls(), f.c(), tt(t, "class", "inset-icon svelte-8hqvb6"), tt(e, "class", "select-wrap svelte-8hqvb6"), tt(e, "aria-label", "select source");
    },
    m(u, d) {
      Bt(u, e, d), Xn(e, t), ds(n, t, null), Xn(t, s), f.m(e, null), l = !0, o || (r = [
        Hl(t, "click", dg(
          /*click_handler_2*/
          i[22]
        )),
        lg(Ya.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Hl(
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
      l || (ct(n.$$.fragment, u), l = !0);
    },
    o(u) {
      bt(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && Dt(e), hs(n), f.d(), o = !1, ug(r);
    }
  };
}
function yg(i) {
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
      s && Dt(e), cg(n, s);
    }
  };
}
function Cg(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ft("option"), n = Jf(t), e.__value = "", ha(e, e.__value), tt(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      Bt(s, e, l), Xn(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && Gf(n, t);
    },
    d(s) {
      s && Dt(e);
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
      e = Ft("option"), n = Jf(t), s = Ls(), e.__value = l = /*device*/
      i[32].deviceId, ha(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, tt(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Bt(r, e, a), Xn(e, n), Xn(e, s);
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
      r && Dt(e);
    }
  };
}
function Sg(i) {
  let e, t, n, s, l, o;
  const r = [pg, gg], a = [];
  function c(f, u) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = Ft("div"), t = Ft("video"), n = Ls(), l.c(), tt(t, "class", "svelte-8hqvb6"), nl(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), nl(t, "hide", !/*webcam_accessed*/
      i[9]), tt(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, u) {
      Bt(f, e, u), Xn(e, t), i[19](t), Xn(e, n), a[s].m(e, null), o = !0;
    },
    p(f, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && nl(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && nl(t, "hide", !/*webcam_accessed*/
      f[9]);
      let d = s;
      s = c(f), s === d ? a[s].p(f, u) : (Bs(), bt(a[d], 1, 1, () => {
        a[d] = null;
      }), Ds(), l = a[s], l ? l.p(f, u) : (l = a[s] = r[s](f), l.c()), ct(l, 1), l.m(e, null));
    },
    i(f) {
      o || (ct(l), o = !0);
    },
    o(f) {
      bt(l), o = !1;
    },
    d(f) {
      f && Dt(e), i[19](null), a[s].d();
    }
  };
}
function Ya(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Mg(i, e, t) {
  var n = this && this.__awaiter || function(C, L, le, G) {
    function U(ge) {
      return ge instanceof le ? ge : new le(function(J) {
        J(ge);
      });
    }
    return new (le || (le = Promise))(function(ge, J) {
      function q(I) {
        try {
          R(G.next(I));
        } catch (ne) {
          J(ne);
        }
      }
      function pe(I) {
        try {
          R(G.throw(I));
        } catch (ne) {
          J(ne);
        }
      }
      function R(I) {
        I.done ? ge(I.value) : U(I.value).then(q, pe);
      }
      R((G = G.apply(C, L || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: _ } = e, { i18n: p } = e, { upload: g } = e;
  const h = _g();
  mg(() => r = document.createElement("canvas"));
  const b = (C) => n(void 0, void 0, void 0, function* () {
    const le = C.target.value;
    yield Ar(_, s, le).then((G) => n(void 0, void 0, void 0, function* () {
      k = G, t(7, o = l.find((U) => U.deviceId === le) || null), t(10, B = !1);
    }));
  });
  function y() {
    return n(this, void 0, void 0, function* () {
      try {
        Ar(_, s).then((C) => n(this, void 0, void 0, function* () {
          t(9, v = !0), t(6, l = yield tg()), k = C;
        })).then(() => ig(l)).then((C) => {
          t(6, l = C);
          const L = k.getTracks().map((le) => {
            var G;
            return (G = le.getSettings()) === null || G === void 0 ? void 0 : G.deviceId;
          })[0];
          t(7, o = L && C.find((le) => le.deviceId === L) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && h("error", p("image.no_webcam_support"));
      } catch (C) {
        if (C instanceof DOMException && C.name == "NotAllowedError")
          h("error", p("image.allow_webcam_access"));
        else
          throw C;
      }
    });
  }
  function w() {
    var C = r.getContext("2d");
    (!a || a && Y) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, C.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (C.scale(-1, 1), C.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (L) => {
        h(a ? "stream" : "capture", L);
      },
      "image/png",
      0.8
    ));
  }
  let Y = !1, x = [], k, X, W;
  function S() {
    if (Y) {
      W.stop();
      let C = new Blob(x, { type: X }), L = new FileReader();
      L.onload = function(le) {
        return n(this, void 0, void 0, function* () {
          var G;
          if (le.target) {
            let U = new File([C], "sample." + X.substring(6));
            const ge = yield If([U]);
            let J = ((G = yield g(ge, f)) === null || G === void 0 ? void 0 : G.filter(Boolean))[0];
            h("capture", J), h("stop_recording");
          }
        });
      }, L.readAsDataURL(C);
    } else {
      h("start_recording"), x = [];
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
        x.push(L.data);
      }), W.start(200);
    }
    t(8, Y = !Y);
  }
  let v = !1;
  function E() {
    u === "image" && a && t(8, Y = !Y), u === "image" ? w() : S(), !Y && k && (k.getTracks().forEach((C) => C.stop()), t(5, s.srcObject = null, s), t(9, v = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      s && !c && w();
    },
    500
  );
  let B = !1;
  function M(C) {
    C.preventDefault(), C.stopPropagation(), t(10, B = !1);
  }
  function j(C) {
    ag[C ? "unshift" : "push"](() => {
      s = C, t(5, s);
    });
  }
  const P = async () => y(), T = () => t(10, B = !0), Z = () => t(10, B = !1);
  return i.$$set = (C) => {
    "streaming" in C && t(0, a = C.streaming), "pending" in C && t(15, c = C.pending), "root" in C && t(16, f = C.root), "mode" in C && t(1, u = C.mode), "mirror_webcam" in C && t(2, d = C.mirror_webcam), "include_audio" in C && t(17, _ = C.include_audio), "i18n" in C && t(3, p = C.i18n), "upload" in C && t(18, g = C.upload);
  }, [
    a,
    u,
    d,
    p,
    Ya,
    s,
    l,
    o,
    Y,
    v,
    B,
    b,
    y,
    E,
    M,
    c,
    f,
    _,
    g,
    j,
    P,
    T,
    Z
  ];
}
class Wg extends sg {
  constructor(e) {
    super(), fg(
      this,
      e,
      Mg,
      Sg,
      hg,
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
    return Ya;
  }
}
const {
  SvelteComponent: zg,
  append: Fn,
  attr: ie,
  detach: Xg,
  init: Yg,
  insert: xg,
  noop: Wo,
  safe_not_equal: Dg,
  set_style: Tn,
  svg_element: yn
} = window.__gradio__svelte__internal;
function Bg(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = yn("svg"), t = yn("rect"), n = yn("rect"), s = yn("rect"), l = yn("rect"), o = yn("line"), r = yn("line"), a = yn("line"), c = yn("line"), ie(t, "x", "2"), ie(t, "y", "2"), ie(t, "width", "5"), ie(t, "height", "5"), ie(t, "rx", "1"), ie(t, "ry", "1"), ie(t, "stroke-width", "2"), ie(t, "fill", "none"), ie(n, "x", "17"), ie(n, "y", "2"), ie(n, "width", "5"), ie(n, "height", "5"), ie(n, "rx", "1"), ie(n, "ry", "1"), ie(n, "stroke-width", "2"), ie(n, "fill", "none"), ie(s, "x", "2"), ie(s, "y", "17"), ie(s, "width", "5"), ie(s, "height", "5"), ie(s, "rx", "1"), ie(s, "ry", "1"), ie(s, "stroke-width", "2"), ie(s, "fill", "none"), ie(l, "x", "17"), ie(l, "y", "17"), ie(l, "width", "5"), ie(l, "height", "5"), ie(l, "rx", "1"), ie(l, "ry", "1"), ie(l, "stroke-width", "2"), ie(l, "fill", "none"), ie(o, "x1", "7.5"), ie(o, "y1", "4.5"), ie(o, "x2", "16"), ie(o, "y2", "4.5"), Tn(o, "stroke-width", "2px"), ie(r, "x1", "7.5"), ie(r, "y1", "19.5"), ie(r, "x2", "16"), ie(r, "y2", "19.5"), Tn(r, "stroke-width", "2px"), ie(a, "x1", "4.5"), ie(a, "y1", "8"), ie(a, "x2", "4.5"), ie(a, "y2", "16"), Tn(a, "stroke-width", "2px"), ie(c, "x1", "19.5"), ie(c, "y1", "8"), ie(c, "x2", "19.5"), ie(c, "y2", "16"), Tn(c, "stroke-width", "2px"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "viewBox", "0 0 24 24"), ie(e, "version", "1.1"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ie(e, "xml:space", "preserve"), ie(e, "stroke", "currentColor"), Tn(e, "fill-rule", "evenodd"), Tn(e, "clip-rule", "evenodd"), Tn(e, "stroke-linecap", "round"), Tn(e, "stroke-linejoin", "round");
    },
    m(f, u) {
      xg(f, e, u), Fn(e, t), Fn(e, n), Fn(e, s), Fn(e, l), Fn(e, o), Fn(e, r), Fn(e, a), Fn(e, c);
    },
    p: Wo,
    i: Wo,
    o: Wo,
    d(f) {
      f && Xg(e);
    }
  };
}
class Eg extends zg {
  constructor(e) {
    super(), Yg(this, e, null, Bg, Dg, {});
  }
}
const {
  SvelteComponent: Rg,
  append: zo,
  attr: Be,
  detach: Ll,
  init: Hg,
  insert: Pl,
  noop: Nr,
  safe_not_equal: Lg,
  svg_element: Si
} = window.__gradio__svelte__internal;
function Pg(i) {
  let e;
  return {
    c() {
      e = Si("circle"), Be(e, "cx", "12"), Be(e, "cy", "7.5"), Be(e, "r", "2"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "1"), Be(e, "opacity", "0.3");
    },
    m(t, n) {
      Pl(t, e, n);
    },
    d(t) {
      t && Ll(e);
    }
  };
}
function qg(i) {
  let e, t;
  return {
    c() {
      e = Si("circle"), t = Si("circle"), Be(e, "cx", "12"), Be(e, "cy", "7.5"), Be(e, "r", "2.5"), Be(e, "fill", "currentColor"), Be(e, "opacity", "0.9"), Be(t, "cx", "12"), Be(t, "cy", "7.5"), Be(t, "r", "1.5"), Be(t, "fill", "white"), Be(t, "opacity", "0.6");
    },
    m(n, s) {
      Pl(n, e, s), Pl(n, t, s);
    },
    d(n) {
      n && (Ll(e), Ll(t));
    }
  };
}
function Ig(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? qg : Pg
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = Si("svg"), t = Si("path"), n = Si("path"), s = Si("path"), r.c(), Be(t, "d", "M9 21h6"), Be(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Be(s, "d", "M9 17h6"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "2"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      Pl(a, e, c), zo(e, t), zo(e, n), zo(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: Nr,
    o: Nr,
    d(a) {
      a && Ll(e), r.d();
    }
  };
}
function Ag(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class jg extends Rg {
  constructor(e) {
    super(), Hg(this, e, Ag, Ig, Lg, { selected: 1 });
  }
}
const {
  SvelteComponent: Fg,
  append: Tg,
  attr: hn,
  detach: Og,
  init: Ug,
  insert: Ng,
  noop: Xo,
  safe_not_equal: Vg,
  svg_element: Vr
} = window.__gradio__svelte__internal;
function Kg(i) {
  let e, t;
  return {
    c() {
      e = Vr("svg"), t = Vr("circle"), hn(t, "cx", "12"), hn(t, "cy", "12"), hn(t, "r", "10"), hn(e, "xmlns", "http://www.w3.org/2000/svg"), hn(e, "viewBox", "0 0 24 24"), hn(e, "fill", "none"), hn(e, "stroke", "currentColor"), hn(e, "stroke-width", "2"), hn(e, "stroke-linecap", "round"), hn(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Ng(n, e, s), Tg(e, t);
    },
    p: Xo,
    i: Xo,
    o: Xo,
    d(n) {
      n && Og(e);
    }
  };
}
let Zg = class extends Fg {
  constructor(e) {
    super(), Ug(this, e, null, Kg, Vg, {});
  }
};
const {
  SvelteComponent: Gg,
  append: vs,
  attr: lt,
  detach: Jg,
  init: Qg,
  insert: $g,
  noop: Yo,
  safe_not_equal: ep,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function tp(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), n = Ni("path"), s = Ni("path"), l = Ni("line"), o = Ni("line"), lt(t, "d", "M3 6h18"), lt(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), lt(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), lt(l, "x1", "10"), lt(l, "y1", "11"), lt(l, "x2", "10"), lt(l, "y2", "17"), lt(o, "x1", "14"), lt(o, "y1", "11"), lt(o, "x2", "14"), lt(o, "y2", "17"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "viewBox", "0 0 24 24"), lt(e, "fill", "none"), lt(e, "stroke", "currentColor"), lt(e, "stroke-width", "2"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      $g(r, e, a), vs(e, t), vs(e, n), vs(e, s), vs(e, l), vs(e, o);
    },
    p: Yo,
    i: Yo,
    o: Yo,
    d(r) {
      r && Jg(e);
    }
  };
}
class np extends Gg {
  constructor(e) {
    super(), Qg(this, e, null, tp, ep, {});
  }
}
const {
  SvelteComponent: ip,
  append: sp,
  attr: en,
  detach: lp,
  init: op,
  insert: ap,
  noop: xo,
  safe_not_equal: rp,
  set_style: il,
  svg_element: Kr
} = window.__gradio__svelte__internal;
function cp(i) {
  let e, t;
  return {
    c() {
      e = Kr("svg"), t = Kr("path"), en(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), en(t, "fill", "none"), en(t, "stroke-width", "2"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24"), en(e, "version", "1.1"), en(e, "xmlns", "http://www.w3.org/2000/svg"), en(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), en(e, "xml:space", "preserve"), en(e, "stroke", "currentColor"), il(e, "fill-rule", "evenodd"), il(e, "clip-rule", "evenodd"), il(e, "stroke-linecap", "round"), il(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      ap(n, e, s), sp(e, t);
    },
    p: xo,
    i: xo,
    o: xo,
    d(n) {
      n && lp(e);
    }
  };
}
class fp extends ip {
  constructor(e) {
    super(), op(this, e, null, cp, rp, {});
  }
}
const {
  SvelteComponent: up,
  append: hp,
  attr: tn,
  detach: dp,
  init: _p,
  insert: mp,
  noop: Do,
  safe_not_equal: gp,
  set_style: sl,
  svg_element: Zr
} = window.__gradio__svelte__internal;
function pp(i) {
  let e, t;
  return {
    c() {
      e = Zr("svg"), t = Zr("path"), tn(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), tn(t, "fill", "none"), tn(t, "stroke-width", "2"), tn(e, "width", "100%"), tn(e, "height", "100%"), tn(e, "viewBox", "0 0 24 24"), tn(e, "version", "1.1"), tn(e, "xmlns", "http://www.w3.org/2000/svg"), tn(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), tn(e, "xml:space", "preserve"), tn(e, "stroke", "currentColor"), sl(e, "fill-rule", "evenodd"), sl(e, "clip-rule", "evenodd"), sl(e, "stroke-linecap", "round"), sl(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      mp(n, e, s), hp(e, t);
    },
    p: Do,
    i: Do,
    o: Do,
    d(n) {
      n && dp(e);
    }
  };
}
class bp extends up {
  constructor(e) {
    super(), _p(this, e, null, pp, gp, {});
  }
}
const {
  SvelteComponent: vp,
  append: Gr,
  attr: Cn,
  detach: wp,
  init: kp,
  insert: yp,
  noop: Bo,
  safe_not_equal: Cp,
  set_style: ll,
  svg_element: Eo
} = window.__gradio__svelte__internal;
function Sp(i) {
  let e, t, n;
  return {
    c() {
      e = Eo("svg"), t = Eo("path"), n = Eo("path"), Cn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Cn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Cn(e, "width", "100%"), Cn(e, "height", "100%"), Cn(e, "viewBox", "0 0 24 24"), Cn(e, "xmlns", "http://www.w3.org/2000/svg"), Cn(e, "fill", "none"), Cn(e, "stroke", "currentColor"), Cn(e, "stroke-width", "2"), ll(e, "fill-rule", "evenodd"), ll(e, "clip-rule", "evenodd"), ll(e, "stroke-linecap", "round"), ll(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      yp(s, e, l), Gr(e, t), Gr(e, n);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(s) {
      s && wp(e);
    }
  };
}
class Mp extends vp {
  constructor(e) {
    super(), kp(this, e, null, Sp, Cp, {});
  }
}
const {
  SvelteComponent: Wp,
  append: zp,
  attr: On,
  detach: Xp,
  init: Yp,
  insert: xp,
  noop: Ro,
  safe_not_equal: Dp,
  set_style: ol,
  svg_element: Jr
} = window.__gradio__svelte__internal;
function Bp(i) {
  let e, t;
  return {
    c() {
      e = Jr("svg"), t = Jr("path"), On(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), On(e, "width", "100%"), On(e, "height", "100%"), On(e, "viewBox", "0 0 24 24"), On(e, "fill", "none"), On(e, "stroke", "currentColor"), On(e, "stroke-width", "2"), ol(e, "fill-rule", "evenodd"), ol(e, "clip-rule", "evenodd"), ol(e, "stroke-linecap", "round"), ol(e, "stroke-linejoin", "round"), On(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      xp(n, e, s), zp(e, t);
    },
    p: Ro,
    i: Ro,
    o: Ro,
    d(n) {
      n && Xp(e);
    }
  };
}
class Ep extends Wp {
  constructor(e) {
    super(), Yp(this, e, null, Bp, Dp, {});
  }
}
const {
  SvelteComponent: Rp,
  append: Hp,
  attr: Un,
  detach: Lp,
  init: Pp,
  insert: qp,
  noop: Ho,
  safe_not_equal: Ip,
  set_style: al,
  svg_element: Qr
} = window.__gradio__svelte__internal;
function Ap(i) {
  let e, t;
  return {
    c() {
      e = Qr("svg"), t = Qr("path"), Un(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Un(e, "width", "100%"), Un(e, "height", "100%"), Un(e, "viewBox", "0 0 24 24"), Un(e, "fill", "none"), Un(e, "stroke", "currentColor"), Un(e, "stroke-width", "2"), al(e, "fill-rule", "evenodd"), al(e, "clip-rule", "evenodd"), al(e, "stroke-linecap", "round"), al(e, "stroke-linejoin", "round"), Un(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      qp(n, e, s), Hp(e, t);
    },
    p: Ho,
    i: Ho,
    o: Ho,
    d(n) {
      n && Lp(e);
    }
  };
}
class jp extends Rp {
  constructor(e) {
    super(), Pp(this, e, null, Ap, Ip, {});
  }
}
const {
  SvelteComponent: Fp,
  append: $r,
  attr: zt,
  detach: Tp,
  init: Op,
  insert: Up,
  noop: Lo,
  safe_not_equal: Np,
  set_style: rl,
  svg_element: Po
} = window.__gradio__svelte__internal;
function Vp(i) {
  let e, t, n;
  return {
    c() {
      e = Po("svg"), t = Po("path"), n = Po("path"), zt(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), zt(t, "fill", "none"), zt(t, "stroke-width", "2"), zt(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), zt(n, "fill", "none"), zt(n, "stroke-width", "2"), zt(e, "width", "100%"), zt(e, "height", "100%"), zt(e, "viewBox", "0 0 24 24"), zt(e, "version", "1.1"), zt(e, "xmlns", "http://www.w3.org/2000/svg"), zt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), zt(e, "xml:space", "preserve"), zt(e, "stroke", "currentColor"), rl(e, "fill-rule", "evenodd"), rl(e, "clip-rule", "evenodd"), rl(e, "stroke-linecap", "round"), rl(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Up(s, e, l), $r(e, t), $r(e, n);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(s) {
      s && Tp(e);
    }
  };
}
class Kp extends Fp {
  constructor(e) {
    super(), Op(this, e, null, Vp, Np, {});
  }
}
const {
  SvelteComponent: Zp,
  append: Sn,
  attr: re,
  detach: Gp,
  init: Jp,
  insert: Qp,
  noop: qo,
  safe_not_equal: $p,
  svg_element: dn
} = window.__gradio__svelte__internal;
function e2(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = dn("svg"), t = dn("path"), n = dn("circle"), s = dn("circle"), l = dn("circle"), o = dn("circle"), r = dn("circle"), a = dn("circle"), c = dn("circle"), f = dn("circle"), re(t, "fill", "none"), re(t, "stroke", "currentColor"), re(t, "stroke-width", "1.5"), re(t, "stroke-linecap", "round"), re(t, "stroke-linejoin", "round"), re(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), re(n, "cx", "7"), re(n, "cy", "7"), re(n, "r", "1.5"), re(n, "fill", "currentColor"), re(s, "cx", "15"), re(s, "cy", "9"), re(s, "r", "1.5"), re(s, "fill", "currentColor"), re(l, "cx", "21"), re(l, "cy", "5"), re(l, "r", "1.5"), re(l, "fill", "currentColor"), re(o, "cx", "25"), re(o, "cy", "13"), re(o, "r", "1.5"), re(o, "fill", "currentColor"), re(r, "cx", "23"), re(r, "cy", "21"), re(r, "r", "1.5"), re(r, "fill", "currentColor"), re(a, "cx", "15"), re(a, "cy", "19"), re(a, "r", "1.5"), re(a, "fill", "currentColor"), re(c, "cx", "9"), re(c, "cy", "23"), re(c, "r", "1.5"), re(c, "fill", "currentColor"), re(f, "cx", "5"), re(f, "cy", "15"), re(f, "r", "1.5"), re(f, "fill", "currentColor"), re(e, "xmlns", "http://www.w3.org/2000/svg"), re(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), re(e, "aria-hidden", "true"), re(e, "role", "img"), re(e, "class", "iconify iconify--carbon"), re(e, "width", "100%"), re(e, "height", "100%"), re(e, "preserveAspectRatio", "xMidYMid meet"), re(e, "viewBox", "0 0 32 32");
    },
    m(u, d) {
      Qp(u, e, d), Sn(e, t), Sn(e, n), Sn(e, s), Sn(e, l), Sn(e, o), Sn(e, r), Sn(e, a), Sn(e, c), Sn(e, f);
    },
    p: qo,
    i: qo,
    o: qo,
    d(u) {
      u && Gp(e);
    }
  };
}
let t2 = class extends Zp {
  constructor(e) {
    super(), Jp(this, e, null, e2, $p, {});
  }
};
const {
  SvelteComponent: n2,
  append: ws,
  attr: we,
  detach: i2,
  init: s2,
  insert: l2,
  noop: Io,
  safe_not_equal: o2,
  set_style: cl,
  svg_element: Vi
} = window.__gradio__svelte__internal;
function a2(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Vi("svg"), t = Vi("circle"), n = Vi("circle"), s = Vi("circle"), l = Vi("circle"), o = Vi("circle"), we(t, "cx", "12"), we(t, "cy", "12"), we(t, "r", "8"), we(t, "stroke-width", "2"), we(t, "fill", "none"), we(n, "cx", "12"), we(n, "cy", "12"), we(n, "r", "4"), we(n, "stroke-width", "1.5"), we(n, "fill", "none"), we(n, "opacity", "0.5"), we(s, "cx", "8"), we(s, "cy", "8"), we(s, "r", "1"), we(s, "fill", "currentColor"), we(s, "opacity", "0.6"), we(l, "cx", "16"), we(l, "cy", "8"), we(l, "r", "1"), we(l, "fill", "currentColor"), we(l, "opacity", "0.6"), we(o, "cx", "12"), we(o, "cy", "16"), we(o, "r", "1"), we(o, "fill", "currentColor"), we(o, "opacity", "0.6"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "version", "1.1"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), we(e, "xml:space", "preserve"), we(e, "stroke", "currentColor"), cl(e, "fill-rule", "evenodd"), cl(e, "clip-rule", "evenodd"), cl(e, "stroke-linecap", "round"), cl(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      l2(r, e, a), ws(e, t), ws(e, n), ws(e, s), ws(e, l), ws(e, o);
    },
    p: Io,
    i: Io,
    o: Io,
    d(r) {
      r && i2(e);
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
  append: ec,
  attr: Ht,
  detach: f2,
  init: u2,
  insert: h2,
  noop: Ao,
  safe_not_equal: d2,
  set_style: fl,
  svg_element: jo
} = window.__gradio__svelte__internal;
function _2(i) {
  let e, t, n;
  return {
    c() {
      e = jo("svg"), t = jo("path"), n = jo("path"), Ht(t, "d", "M3 7v6h6"), Ht(t, "stroke-width", "2"), Ht(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), Ht(n, "stroke-width", "2"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24"), Ht(e, "version", "1.1"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ht(e, "xml:space", "preserve"), Ht(e, "stroke", "currentColor"), Ht(e, "fill", "none"), fl(e, "fill-rule", "evenodd"), fl(e, "clip-rule", "evenodd"), fl(e, "stroke-linecap", "round"), fl(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      h2(s, e, l), ec(e, t), ec(e, n);
    },
    p: Ao,
    i: Ao,
    o: Ao,
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
  append: tc,
  attr: Lt,
  detach: p2,
  init: b2,
  insert: v2,
  noop: Fo,
  safe_not_equal: w2,
  set_style: ul,
  svg_element: To
} = window.__gradio__svelte__internal;
function k2(i) {
  let e, t, n;
  return {
    c() {
      e = To("svg"), t = To("path"), n = To("path"), Lt(t, "d", "M21 7v6h-6"), Lt(t, "stroke-width", "2"), Lt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), Lt(n, "stroke-width", "2"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 24 24"), Lt(e, "version", "1.1"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Lt(e, "xml:space", "preserve"), Lt(e, "stroke", "currentColor"), Lt(e, "fill", "none"), ul(e, "fill-rule", "evenodd"), ul(e, "clip-rule", "evenodd"), ul(e, "stroke-linecap", "round"), ul(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      v2(s, e, l), tc(e, t), tc(e, n);
    },
    p: Fo,
    i: Fo,
    o: Fo,
    d(s) {
      s && p2(e);
    }
  };
}
class y2 extends g2 {
  constructor(e) {
    super(), b2(this, e, null, k2, w2, {});
  }
}
const {
  SvelteComponent: C2,
  append: S2,
  attr: nn,
  detach: M2,
  init: W2,
  insert: z2,
  noop: Oo,
  safe_not_equal: X2,
  set_style: nc,
  svg_element: ic
} = window.__gradio__svelte__internal;
function Y2(i) {
  let e, t;
  return {
    c() {
      e = ic("svg"), t = ic("path"), nn(t, "d", "M7 10l5 5 5-5z"), nn(t, "stroke", "none"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24"), nn(e, "version", "1.1"), nn(e, "xmlns", "http://www.w3.org/2000/svg"), nn(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nn(e, "xml:space", "preserve"), nn(e, "stroke", "currentColor"), nn(e, "fill", "currentColor"), nc(e, "fill-rule", "evenodd"), nc(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      z2(n, e, s), S2(e, t);
    },
    p: Oo,
    i: Oo,
    o: Oo,
    d(n) {
      n && M2(e);
    }
  };
}
class sc extends C2 {
  constructor(e) {
    super(), W2(this, e, null, Y2, X2, {});
  }
}
const {
  SvelteComponent: x2,
  append: D2,
  attr: Mn,
  detach: B2,
  init: E2,
  insert: R2,
  noop: Uo,
  safe_not_equal: H2,
  set_style: hl,
  svg_element: lc
} = window.__gradio__svelte__internal;
function L2(i) {
  let e, t;
  return {
    c() {
      e = lc("svg"), t = lc("path"), Mn(t, "d", "M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3"), Mn(t, "stroke-width", "2"), Mn(e, "width", "100%"), Mn(e, "height", "100%"), Mn(e, "viewBox", "0 0 24 24"), Mn(e, "version", "1.1"), Mn(e, "xmlns", "http://www.w3.org/2000/svg"), Mn(e, "stroke", "currentColor"), Mn(e, "fill", "none"), hl(e, "fill-rule", "evenodd"), hl(e, "clip-rule", "evenodd"), hl(e, "stroke-linecap", "round"), hl(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      R2(n, e, s), D2(e, t);
    },
    p: Uo,
    i: Uo,
    o: Uo,
    d(n) {
      n && B2(e);
    }
  };
}
class P2 extends x2 {
  constructor(e) {
    super(), E2(this, e, null, L2, H2, {});
  }
}
const {
  SvelteComponent: q2,
  append: dl,
  attr: ze,
  detach: I2,
  init: A2,
  insert: j2,
  noop: No,
  safe_not_equal: F2,
  set_style: _l,
  svg_element: ks
} = window.__gradio__svelte__internal;
function T2(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = ks("svg"), t = ks("rect"), n = ks("rect"), s = ks("line"), l = ks("line"), ze(t, "x", "3"), ze(t, "y", "3"), ze(t, "width", "18"), ze(t, "height", "18"), ze(t, "stroke-width", "2"), ze(n, "x", "8"), ze(n, "y", "8"), ze(n, "width", "8"), ze(n, "height", "8"), ze(n, "stroke-width", "1.5"), ze(n, "stroke", "currentColor"), ze(n, "fill", "currentColor"), ze(n, "fill-opacity", "0.3"), ze(s, "x1", "12"), ze(s, "y1", "10"), ze(s, "x2", "12"), ze(s, "y2", "14"), ze(s, "stroke-width", "1"), ze(l, "x1", "10"), ze(l, "y1", "12"), ze(l, "x2", "14"), ze(l, "y2", "12"), ze(l, "stroke-width", "1"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "version", "1.1"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "stroke", "currentColor"), ze(e, "fill", "none"), _l(e, "fill-rule", "evenodd"), _l(e, "clip-rule", "evenodd"), _l(e, "stroke-linecap", "round"), _l(e, "stroke-linejoin", "round");
    },
    m(o, r) {
      j2(o, e, r), dl(e, t), dl(e, n), dl(e, s), dl(e, l);
    },
    p: No,
    i: No,
    o: No,
    d(o) {
      o && I2(e);
    }
  };
}
class O2 extends q2 {
  constructor(e) {
    super(), A2(this, e, null, T2, F2, {});
  }
}
const {
  SvelteComponent: U2,
  append: oc,
  attr: Vo,
  bubble: ac,
  create_component: N2,
  destroy_component: V2,
  detach: Qf,
  element: rc,
  init: K2,
  insert: $f,
  listen: Ko,
  mount_component: Z2,
  run_all: G2,
  safe_not_equal: J2,
  set_data: Q2,
  set_input_value: cc,
  space: $2,
  text: eb,
  transition_in: tb,
  transition_out: nb
} = window.__gradio__svelte__internal, { createEventDispatcher: ib, afterUpdate: sb } = window.__gradio__svelte__internal;
function lb(i) {
  let e;
  return {
    c() {
      e = eb(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      $f(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Q2(
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
function ob(i) {
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
      $$slots: { default: [lb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = rc("label"), N2(t.$$.fragment), n = $2(), s = rc("input"), Vo(s, "type", "color"), s.disabled = /*disabled*/
      i[3], Vo(s, "class", "svelte-16l8u73"), Vo(e, "class", "block");
    },
    m(a, c) {
      $f(a, e, c), Z2(t, e, null), oc(e, n), oc(e, s), cc(
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
      l || (tb(t.$$.fragment, a), l = !0);
    },
    o(a) {
      nb(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && Qf(e), V2(t), o = !1, G2(r);
    }
  };
}
function ab(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = ib();
  function f() {
    c("change", n), s || c("input");
  }
  sb(() => {
    t(5, s = !1);
  });
  function u(p) {
    ac.call(this, i, p);
  }
  function d(p) {
    ac.call(this, i, p);
  }
  function _() {
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
    u,
    d,
    _
  ];
}
class rb extends U2 {
  constructor(e) {
    super(), K2(this, e, ab, ob, J2, {
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
  SvelteComponent: cb,
  append: eu,
  attr: Ae,
  bubble: fb,
  check_outros: ub,
  create_slot: tu,
  detach: As,
  element: $l,
  empty: hb,
  get_all_dirty_from_scope: nu,
  get_slot_changes: iu,
  group_outros: db,
  init: _b,
  insert: js,
  listen: mb,
  safe_not_equal: gb,
  set_style: Yt,
  space: su,
  src_url_equal: ql,
  toggle_class: os,
  transition_in: Il,
  transition_out: Al,
  update_slot_base: lu
} = window.__gradio__svelte__internal;
function pb(i) {
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
      e = $l("button"), r && r.c(), t = su(), c && c.c(), Ae(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Ae(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], os(e, "hidden", !/*visible*/
      i[2]), Yt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Yt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Yt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, u) {
      js(f, e, u), r && r.m(e, null), eu(e, t), c && c.m(e, null), s = !0, l || (o = mb(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? r ? r.p(f, u) : (r = fc(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || u & /*$$scope*/
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
          u,
          null
        ) : nu(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && Ae(e, "class", n), (!s || u & /*elem_id*/
      1) && Ae(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || u & /*size, variant, elem_classes, visible*/
      30) && os(e, "hidden", !/*visible*/
      f[2]), u & /*scale*/
      512 && Yt(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), u & /*scale*/
      512 && Yt(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Yt(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (Il(c, f), s = !0);
    },
    o(f) {
      Al(c, f), s = !1;
    },
    d(f) {
      f && As(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function bb(i) {
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
      e = $l("a"), l && l.c(), t = su(), r && r.c(), Ae(
        e,
        "href",
        /*link*/
        i[6]
      ), Ae(e, "rel", "noopener noreferrer"), Ae(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), Ae(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Ae(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), os(e, "hidden", !/*visible*/
      i[2]), os(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Yt(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Yt(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Yt(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Yt(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      js(a, e, c), l && l.m(e, null), eu(e, t), r && r.m(e, null), s = !0;
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
      64) && Ae(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && Ae(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && Ae(e, "class", n), (!s || c & /*elem_id*/
      1) && Ae(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && os(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && os(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && Yt(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && Yt(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && Yt(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && Yt(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (Il(r, a), s = !0);
    },
    o(a) {
      Al(r, a), s = !1;
    },
    d(a) {
      a && As(e), l && l.d(), r && r.d(a);
    }
  };
}
function fc(i) {
  let e, t, n;
  return {
    c() {
      e = $l("img"), Ae(e, "class", "button-icon svelte-8huxfn"), ql(e.src, t = /*icon*/
      i[7].url) || Ae(e, "src", t), Ae(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      js(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !ql(e.src, t = /*icon*/
      s[7].url) && Ae(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Ae(e, "alt", n);
    },
    d(s) {
      s && As(e);
    }
  };
}
function uc(i) {
  let e, t, n;
  return {
    c() {
      e = $l("img"), Ae(e, "class", "button-icon svelte-8huxfn"), ql(e.src, t = /*icon*/
      i[7].url) || Ae(e, "src", t), Ae(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      js(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !ql(e.src, t = /*icon*/
      s[7].url) && Ae(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Ae(e, "alt", n);
    },
    d(s) {
      s && As(e);
    }
  };
}
function vb(i) {
  let e, t, n, s;
  const l = [bb, pb], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = hb();
    },
    m(a, c) {
      o[e].m(a, c), js(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (db(), Al(o[f], 1, 1, () => {
        o[f] = null;
      }), ub(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Il(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Il(t), s = !0);
    },
    o(a) {
      Al(t), s = !1;
    },
    d(a) {
      a && As(n), o[e].d(a);
    }
  };
}
function wb(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: _ = !1 } = e, { scale: p = null } = e, { min_width: g = void 0 } = e;
  function h(b) {
    fb.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, l = b.elem_id), "elem_classes" in b && t(1, o = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, c = b.size), "value" in b && t(5, f = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, d = b.icon), "disabled" in b && t(8, _ = b.disabled), "scale" in b && t(9, p = b.scale), "min_width" in b && t(10, g = b.min_width), "$$scope" in b && t(11, s = b.$$scope);
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    _,
    p,
    g,
    s,
    n,
    h
  ];
}
class da extends cb {
  constructor(e) {
    super(), _b(this, e, wb, vb, gb, {
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
  SvelteComponent: kb,
  add_render_callback: ou,
  append: ml,
  attr: It,
  binding_callbacks: hc,
  check_outros: yb,
  create_bidirectional_transition: dc,
  destroy_each: Cb,
  detach: Es,
  element: jl,
  empty: Sb,
  ensure_array_like: _c,
  group_outros: Mb,
  init: Wb,
  insert: Rs,
  listen: _a,
  prevent_default: zb,
  run_all: Xb,
  safe_not_equal: Yb,
  set_data: xb,
  set_style: Ki,
  space: ma,
  text: Db,
  toggle_class: _n,
  transition_in: Zo,
  transition_out: mc
} = window.__gradio__svelte__internal, { createEventDispatcher: Bb } = window.__gradio__svelte__internal;
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
      e = jl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      It(e, "class", "options svelte-yuohum"), It(e, "role", "listbox"), Ki(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Ki(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Ki(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Rs(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = _a(e, "mousedown", zb(
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
          const u = gc(a, o, f);
          r[f] ? r[f].p(u, c) : (r[f] = bc(u), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Ki(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Ki(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Ki(
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
      a && Es(e), Cb(r, a), i[22](null), a && t && t.end(), s = !1, l();
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
      e = jl("li"), t = jl("span"), t.textContent = "✓", n = ma(), l = Db(s), o = ma(), It(t, "class", "inner-item svelte-yuohum"), _n(t, "hide", !/*selected_indices*/
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
      )), _n(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), _n(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), _n(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), _n(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, u) {
      Rs(f, e, u), ml(e, t), ml(e, n), ml(e, l), ml(e, o);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && _n(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && xb(l, s), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && It(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && It(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && It(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
      18 && _n(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && _n(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && _n(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && _n(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && Es(e);
    }
  };
}
function Eb(i) {
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
      e = jl("div"), t = ma(), o && o.c(), n = Sb(), It(e, "class", "reference");
    },
    m(r, a) {
      Rs(r, e, a), i[20](e), Rs(r, t, a), o && o.m(r, a), Rs(r, n, a), s || (l = [
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
      12 && Zo(o, 1)) : (o = pc(r), o.c(), Zo(o, 1), o.m(n.parentNode, n)) : o && (Mb(), mc(o, 1, 1, () => {
        o = null;
      }), yb());
    },
    i(r) {
      Zo(o);
    },
    o(r) {
      mc(o);
    },
    d(r) {
      r && (Es(e), Es(t), Es(n)), i[20](null), o && o.d(r), s = !1, Xb(l);
    }
  };
}
function Rb(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, d, _, p, g, h, b, y, w;
  function Y() {
    const { top: B, bottom: M } = g.getBoundingClientRect();
    t(16, u = B), t(17, d = w - M);
  }
  let x = null;
  function k() {
    r && (x !== null && clearTimeout(x), x = setTimeout(
      () => {
        Y(), x = null;
      },
      10
    ));
  }
  const X = Bb();
  function W() {
    t(11, w = window.innerHeight);
  }
  function S(B) {
    hc[B ? "unshift" : "push"](() => {
      g = B, t(6, g);
    });
  }
  const v = (B) => X("change", B);
  function E(B) {
    hc[B ? "unshift" : "push"](() => {
      h = B, t(7, h);
    });
  }
  return i.$$set = (B) => {
    "choices" in B && t(0, l = B.choices), "filtered_indices" in B && t(1, o = B.filtered_indices), "show_options" in B && t(2, r = B.show_options), "disabled" in B && t(3, a = B.disabled), "selected_indices" in B && t(4, c = B.selected_indices), "active_index" in B && t(5, f = B.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (h && c.length > 0) {
          let M = h.querySelectorAll("li");
          for (const j of Array.from(M))
            if (j.getAttribute("data-index") === c[0].toString()) {
              t(14, n = h == null ? void 0 : h.scrollTo) === null || n === void 0 || n.call(h, 0, j.offsetTop);
              break;
            }
        }
        Y();
        const B = t(15, s = g.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, _ = (B == null ? void 0 : B.height) || 0), t(8, p = (B == null ? void 0 : B.width) || 0);
      }
      d > u ? (t(10, y = d), t(9, b = null)) : (t(9, b = `${d + _}px`), t(10, y = u - _));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    g,
    h,
    p,
    b,
    y,
    w,
    k,
    X,
    n,
    s,
    u,
    d,
    _,
    W,
    S,
    v,
    E
  ];
}
class Hb extends kb {
  constructor(e) {
    super(), Wb(this, e, Rb, Eb, Yb, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Lb(i, e) {
  return (i % e + e) % e;
}
function vc(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function Pb(i, e, t) {
  i("change", e), t || i("input");
}
function qb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[Lb(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Ib,
  append: ci,
  attr: qt,
  binding_callbacks: Ab,
  check_outros: jb,
  create_component: ga,
  destroy_component: pa,
  detach: xa,
  element: ns,
  group_outros: Fb,
  init: Tb,
  insert: Da,
  listen: Qn,
  mount_component: ba,
  noop: Ob,
  run_all: Ub,
  safe_not_equal: Nb,
  set_data: Vb,
  set_input_value: wc,
  space: Go,
  text: Kb,
  toggle_class: Zi,
  transition_in: is,
  transition_out: Ys
} = window.__gradio__svelte__internal, { onMount: Zb } = window.__gradio__svelte__internal, { createEventDispatcher: Gb, afterUpdate: Jb } = window.__gradio__svelte__internal;
function Qb(i) {
  let e;
  return {
    c() {
      e = Kb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Da(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Vb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && xa(e);
    }
  };
}
function kc(i) {
  let e, t, n, s, l;
  return t = new ya({}), {
    c() {
      e = ns("div"), ga(t.$$.fragment), qt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      Da(o, e, r), ba(t, e, null), n = !0, s || (l = Qn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: Ob,
    i(o) {
      n || (is(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ys(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && xa(e), pa(t), s = !1, l();
    }
  };
}
function $b(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p;
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
      $$slots: { default: [Qb] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && kc(i);
  return u = new Hb({
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
      e = ns("div"), ga(t.$$.fragment), n = Go(), s = ns("div"), l = ns("div"), o = ns("div"), r = ns("input"), c = Go(), g && g.c(), f = Go(), ga(u.$$.fragment), qt(r, "role", "listbox"), qt(r, "aria-controls", "dropdown-options"), qt(
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
      i[7], Zi(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), qt(o, "class", "secondary-wrap svelte-1a9du2n"), qt(l, "class", "wrap-inner svelte-1a9du2n"), Zi(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), qt(s, "class", "wrap svelte-1a9du2n"), qt(e, "class", "svelte-1a9du2n"), Zi(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(h, b) {
      Da(h, e, b), ba(t, e, null), ci(e, n), ci(e, s), ci(s, l), ci(l, o), ci(o, r), wc(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), ci(o, c), g && g.m(o, null), ci(s, f), ba(u, s, null), d = !0, _ || (p = [
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
      ], _ = !0);
    },
    p(h, b) {
      const y = {};
      b[0] & /*show_label*/
      16 && (y.show_label = /*show_label*/
      h[4]), b[0] & /*info*/
      2 && (y.info = /*info*/
      h[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      16 && (y.$$scope = { dirty: b, ctx: h }), t.$set(y), (!d || b[0] & /*show_options*/
      4096) && qt(
        r,
        "aria-expanded",
        /*show_options*/
        h[12]
      ), (!d || b[0] & /*label*/
      1) && qt(
        r,
        "aria-label",
        /*label*/
        h[0]
      ), (!d || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      h[3]), (!d || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      h[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      h[9] && wc(
        r,
        /*input_text*/
        h[9]
      ), (!d || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Zi(r, "subdued", !/*choices_names*/
      h[13].includes(
        /*input_text*/
        h[9]
      ) && !/*allow_custom_value*/
      h[6]), /*disabled*/
      h[3] ? g && (Fb(), Ys(g, 1, 1, () => {
        g = null;
      }), jb()) : g ? (g.p(h, b), b[0] & /*disabled*/
      8 && is(g, 1)) : (g = kc(h), g.c(), is(g, 1), g.m(o, null)), (!d || b[0] & /*show_options*/
      4096) && Zi(
        l,
        "show_options",
        /*show_options*/
        h[12]
      );
      const w = {};
      b[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      h[12]), b[0] & /*choices*/
      4 && (w.choices = /*choices*/
      h[2]), b[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      h[10]), b[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      h[3]), b[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      h[11] === null ? [] : [
        /*selected_index*/
        h[11]
      ]), b[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      h[14]), u.$set(w), (!d || b[0] & /*container*/
      32) && Zi(
        e,
        "container",
        /*container*/
        h[5]
      );
    },
    i(h) {
      d || (is(t.$$.fragment, h), is(g), is(u.$$.fragment, h), d = !0);
    },
    o(h) {
      Ys(t.$$.fragment, h), Ys(g), Ys(u.$$.fragment, h), d = !1;
    },
    d(h) {
      h && xa(e), pa(t), i[31](null), g && g.d(), pa(u), _ = !1, Ub(p);
    }
  };
}
function ev(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: _ = !1 } = e, { filterable: p = !0 } = e, g, h = !1, b, y, w = "", Y = "", x = !1, k = [], X = null, W = null, S;
  const v = Gb();
  l ? (S = a.map((U) => U[1]).indexOf(l), W = S, W === -1 ? (o = l, W = null) : ([w, o] = a[W], Y = w), B()) : a.length > 0 && (S = 0, W = 0, [w, l] = a[W], o = l, Y = w);
  function E() {
    t(13, b = a.map((U) => U[0])), t(26, y = a.map((U) => U[1]));
  }
  function B() {
    E(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, w = ""), t(11, W = null)) : y.includes(l) ? (t(9, w = b[y.indexOf(l)]), t(11, W = y.indexOf(l))) : _ ? (t(9, w = l), t(11, W = null)) : (t(9, w = ""), t(11, W = null)), t(29, S = W);
  }
  function M(U) {
    if (t(11, W = parseInt(U.detail.target.dataset.index)), isNaN(W)) {
      t(11, W = null);
      return;
    }
    t(12, h = !1), t(14, X = null), g.blur();
  }
  function j(U) {
    t(10, k = a.map((ge, J) => J)), t(12, h = !0), v("focus");
  }
  function P() {
    f || (g.focus(), t(12, h = !0));
  }
  function T(U) {
    U.preventDefault(), f || (g.focus(), t(12, h = !h));
  }
  function Z() {
    _ ? t(22, l = w) : t(9, w = b[y.indexOf(l)]), t(12, h = !1), t(14, X = null), v("blur");
  }
  function C(U) {
    t(12, [h, X] = qb(U, X, k), h, (t(14, X), t(2, a), t(25, c), t(6, _), t(9, w), t(10, k), t(8, g), t(27, Y), t(11, W), t(29, S), t(28, x), t(26, y))), U.key === "Enter" && (X !== null ? (t(11, W = X), t(12, h = !1), g.blur(), t(14, X = null)) : b.includes(w) ? (t(11, W = b.indexOf(w)), t(12, h = !1), t(14, X = null), g.blur()) : _ && (t(22, l = w), t(11, W = null), t(12, h = !1), t(14, X = null), g.blur()), v("enter", l));
  }
  Jb(() => {
    t(23, r = !1), t(28, x = !0);
  }), Zb(() => {
  });
  function L() {
    w = this.value, t(9, w), t(11, W), t(29, S), t(28, x), t(2, a), t(26, y);
  }
  function le(U) {
    Ab[U ? "unshift" : "push"](() => {
      g = U, t(8, g);
    });
  }
  const G = (U) => v("key_up", { key: U.key, input_value: w });
  return i.$$set = (U) => {
    "label" in U && t(0, n = U.label), "info" in U && t(1, s = U.info), "value" in U && t(22, l = U.value), "value_is_output" in U && t(23, r = U.value_is_output), "choices" in U && t(2, a = U.choices), "disabled" in U && t(3, f = U.disabled), "show_label" in U && t(4, u = U.show_label), "container" in U && t(5, d = U.container), "allow_custom_value" in U && t(6, _ = U.allow_custom_value), "filterable" in U && t(7, p = U.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && W !== S && W !== null && x && (t(9, [w, l] = a[W], w, (t(22, l), t(11, W), t(29, S), t(28, x), t(2, a), t(26, y))), t(29, S = W), v("select", {
      index: W,
      value: y[W],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (B(), Pb(v, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && E(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (_ || B(), t(25, c = a), t(10, k = vc(a, w)), !_ && k.length > 0 && t(14, X = k[0]), g == document.activeElement && t(12, h = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && w !== Y && (t(10, k = vc(a, w)), t(27, Y = w), !_ && k.length > 0 && t(14, X = k[0]));
  }, [
    n,
    s,
    a,
    f,
    u,
    d,
    _,
    p,
    g,
    w,
    k,
    W,
    h,
    b,
    X,
    v,
    M,
    j,
    P,
    T,
    Z,
    C,
    l,
    r,
    o,
    c,
    y,
    Y,
    x,
    S,
    L,
    le,
    G
  ];
}
class tv extends Ib {
  constructor(e) {
    super(), Tb(
      this,
      e,
      ev,
      $b,
      Nb,
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
  SvelteComponent: nv,
  append: Ke,
  attr: Nt,
  check_outros: va,
  create_component: Mi,
  destroy_component: Wi,
  detach: Pi,
  element: kt,
  group_outros: wa,
  init: iv,
  insert: qi,
  listen: zl,
  mount_component: zi,
  run_all: sv,
  safe_not_equal: lv,
  set_data: ov,
  set_input_value: yc,
  set_style: Ye,
  space: $n,
  text: Ps,
  to_number: av,
  toggle_class: Cc,
  transition_in: wt,
  transition_out: At
} = window.__gradio__svelte__internal, { createEventDispatcher: rv } = window.__gradio__svelte__internal, { onMount: cv, onDestroy: fv } = window.__gradio__svelte__internal;
function Sc(i) {
  let e, t, n, s, l, o, r;
  const a = [hv, uv], c = [];
  function f(u, d) {
    return (
      /*labelDetailLock*/
      u[3] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = kt("div"), t = kt("button"), s.c(), Nt(t, "class", "icon svelte-r9wsvc"), Nt(t, "aria-label", "Lock label detail"), Cc(
        t,
        "selected",
        /*labelDetailLock*/
        i[3] === !0
      ), Ye(e, "margin-right", "8px");
    },
    m(u, d) {
      qi(u, e, d), Ke(e, t), c[n].m(t, null), l = !0, o || (r = zl(
        t,
        "click",
        /*onLockClick*/
        i[12]
      ), o = !0);
    },
    p(u, d) {
      let _ = n;
      n = f(u), n !== _ && (wa(), At(c[_], 1, 1, () => {
        c[_] = null;
      }), va(), s = c[n], s || (s = c[n] = a[n](u), s.c()), wt(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      8) && Cc(
        t,
        "selected",
        /*labelDetailLock*/
        u[3] === !0
      );
    },
    i(u) {
      l || (wt(s), l = !0);
    },
    o(u) {
      At(s), l = !1;
    },
    d(u) {
      u && Pi(e), c[n].d(), o = !1, r();
    }
  };
}
function uv(i) {
  let e, t;
  return e = new jp({}), {
    c() {
      Mi(e.$$.fragment);
    },
    m(n, s) {
      zi(e, n, s), t = !0;
    },
    i(n) {
      t || (wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wi(e, n);
    }
  };
}
function hv(i) {
  let e, t;
  return e = new Ep({}), {
    c() {
      Mi(e.$$.fragment);
    },
    m(n, s) {
      zi(e, n, s), t = !0;
    },
    i(n) {
      t || (wt(e.$$.fragment, n), t = !0);
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
  ) + "", c, f, u, d;
  return {
    c() {
      e = kt("div"), t = kt("label"), t.textContent = "Opacity", n = $n(), s = kt("div"), l = kt("input"), o = $n(), r = kt("span"), c = Ps(a), f = Ps("%"), Nt(t, "for", "opacity-slider"), Ye(t, "font-size", "12px"), Ye(t, "margin-bottom", "4px"), Ye(t, "color", "var(--body-text-color)"), Nt(l, "id", "opacity-slider"), Nt(l, "type", "range"), Nt(l, "min", "0"), Nt(l, "max", "1"), Nt(l, "step", "0.05"), Ye(l, "flex", "1"), Ye(l, "height", "4px"), Ye(l, "background", "var(--slider-color)"), Ye(l, "border-radius", "2px"), Ye(l, "outline", "none"), Ye(l, "appearance", "none"), Ye(l, "-webkit-appearance", "none"), Ye(r, "font-size", "11px"), Ye(r, "color", "var(--body-text-color-subdued)"), Ye(r, "min-width", "30px"), Ye(r, "text-align", "center"), Ye(s, "display", "flex"), Ye(s, "align-items", "center"), Ye(s, "gap", "8px"), Ye(s, "width", "100%"), Ye(e, "margin-right", "20px"), Ye(e, "margin-bottom", "8px"), Ye(e, "display", "flex"), Ye(e, "flex-direction", "column"), Ye(e, "align-items", "center"), Ye(e, "min-width", "120px");
    },
    m(_, p) {
      qi(_, e, p), Ke(e, t), Ke(e, n), Ke(e, s), Ke(s, l), yc(
        l,
        /*currentOpacity*/
        i[2]
      ), Ke(s, o), Ke(s, r), Ke(r, c), Ke(r, f), u || (d = [
        zl(
          l,
          "change",
          /*input_change_input_handler*/
          i[17]
        ),
        zl(
          l,
          "input",
          /*input_change_input_handler*/
          i[17]
        ),
        zl(
          l,
          "input",
          /*onOpacityChange*/
          i[10]
        )
      ], u = !0);
    },
    p(_, p) {
      p & /*currentOpacity*/
      4 && yc(
        l,
        /*currentOpacity*/
        _[2]
      ), p & /*currentOpacity*/
      4 && a !== (a = Math.round(
        /*currentOpacity*/
        _[2] * 100
      ) + "") && ov(c, a);
    },
    d(_) {
      _ && Pi(e), u = !1, sv(d);
    }
  };
}
function dv(i) {
  let e;
  return {
    c() {
      e = Ps("Cancel");
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
      $$slots: { default: [_v] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[19]
  ), {
    c() {
      e = kt("div"), Mi(t.$$.fragment), Ye(e, "margin-right", "8px");
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
      n || (wt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      At(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Pi(e), Wi(t);
    }
  };
}
function _v(i) {
  let e;
  return {
    c() {
      e = Ps("Remove");
    },
    m(t, n) {
      qi(t, e, n);
    },
    d(t) {
      t && Pi(e);
    }
  };
}
function mv(i) {
  let e;
  return {
    c() {
      e = Ps("OK");
    },
    m(t, n) {
      qi(t, e, n);
    },
    d(t) {
      t && Pi(e);
    }
  };
}
function gv(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p, g, h, b, y, w = !/*showRemove*/
  i[5] && Sc(i);
  o = new tv({
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
  ), c = new rb({
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
  let Y = (
    /*showOpacity*/
    i[6] && Mc(i)
  );
  _ = new da({
    props: {
      $$slots: { default: [dv] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[18]
  );
  let x = (
    /*showRemove*/
    i[5] && Wc(i)
  );
  return b = new da({
    props: {
      variant: "primary",
      $$slots: { default: [mv] },
      $$scope: { ctx: i }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    i[20]
  ), {
    c() {
      e = kt("div"), t = kt("div"), n = kt("span"), w && w.c(), s = $n(), l = kt("div"), Mi(o.$$.fragment), r = $n(), a = kt("div"), Mi(c.$$.fragment), f = $n(), Y && Y.c(), u = $n(), d = kt("div"), Mi(_.$$.fragment), p = $n(), x && x.c(), g = $n(), h = kt("div"), Mi(b.$$.fragment), Ye(l, "margin-right", "10px"), Ye(a, "margin-right", "40px"), Ye(a, "margin-bottom", "8px"), Ye(d, "margin-right", "8px"), Nt(n, "class", "model-content svelte-r9wsvc"), Nt(t, "class", "annotator-modal-container svelte-r9wsvc"), Nt(e, "class", "annotator-modal svelte-r9wsvc"), Nt(e, "id", "model-box-edit");
    },
    m(k, X) {
      qi(k, e, X), Ke(e, t), Ke(t, n), w && w.m(n, null), Ke(n, s), Ke(n, l), zi(o, l, null), Ke(n, r), Ke(n, a), zi(c, a, null), Ke(n, f), Y && Y.m(n, null), Ke(n, u), Ke(n, d), zi(_, d, null), Ke(n, p), x && x.m(n, null), Ke(n, g), Ke(n, h), zi(b, h, null), y = !0;
    },
    p(k, [X]) {
      /*showRemove*/
      k[5] ? w && (wa(), At(w, 1, 1, () => {
        w = null;
      }), va()) : w ? (w.p(k, X), X & /*showRemove*/
      32 && wt(w, 1)) : (w = Sc(k), w.c(), wt(w, 1), w.m(n, s));
      const W = {};
      X & /*currentLabel*/
      1 && (W.value = /*currentLabel*/
      k[0]), X & /*choices*/
      16 && (W.choices = /*choices*/
      k[4]), o.$set(W);
      const S = {};
      X & /*currentColor*/
      2 && (S.value = /*currentColor*/
      k[1]), c.$set(S), /*showOpacity*/
      k[6] ? Y ? Y.p(k, X) : (Y = Mc(k), Y.c(), Y.m(n, u)) : Y && (Y.d(1), Y = null);
      const v = {};
      X & /*$$scope*/
      8388608 && (v.$$scope = { dirty: X, ctx: k }), _.$set(v), /*showRemove*/
      k[5] ? x ? (x.p(k, X), X & /*showRemove*/
      32 && wt(x, 1)) : (x = Wc(k), x.c(), wt(x, 1), x.m(n, g)) : x && (wa(), At(x, 1, 1, () => {
        x = null;
      }), va());
      const E = {};
      X & /*$$scope*/
      8388608 && (E.$$scope = { dirty: X, ctx: k }), b.$set(E);
    },
    i(k) {
      y || (wt(w), wt(o.$$.fragment, k), wt(c.$$.fragment, k), wt(_.$$.fragment, k), wt(x), wt(b.$$.fragment, k), y = !0);
    },
    o(k) {
      At(w), At(o.$$.fragment, k), At(c.$$.fragment, k), At(_.$$.fragment, k), At(x), At(b.$$.fragment, k), y = !1;
    },
    d(k) {
      k && Pi(e), w && w.d(), Wi(o), Wi(c), Y && Y.d(), Wi(_), x && x.d(), Wi(b);
    }
  };
}
function pv(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { opacity: c = 0.5 } = e, { currentOpacity: f = 0.5 } = e, { showRemove: u = !0 } = e, { labelDetailLock: d = !1 } = e, { showOpacity: _ = !1 } = e;
  const p = rv();
  function g(v) {
    p("change", {
      label: s,
      color: a,
      opacity: f,
      lock: d,
      ret: v
      // -1: remove, 0: cancel, 1: change
    });
  }
  function h(v) {
    const { detail: E } = v;
    let B = E;
    Number.isInteger(B) ? (Array.isArray(o) && B < o.length && t(1, a = o[B]), Array.isArray(l) && B < l.length && t(0, s = l[B][0])) : t(0, s = B);
  }
  function b(v) {
    const { detail: E } = v;
    t(1, a = E);
  }
  function y(v) {
    t(2, f = parseFloat(v.target.value));
  }
  function w(v) {
    h(v), g(1);
  }
  function Y(v) {
    t(3, d = !d);
  }
  function x(v) {
    switch (v.key) {
      case "Enter":
        g(1);
        break;
    }
  }
  cv(() => {
    document.addEventListener("keydown", x), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : "")), t(2, f = c || 0.5);
  }), fv(() => {
    document.removeEventListener("keydown", x);
  });
  function k() {
    f = av(this.value), t(2, f), t(16, c);
  }
  const X = () => g(0), W = () => g(-1), S = () => g(1);
  return i.$$set = (v) => {
    "label" in v && t(13, n = v.label), "currentLabel" in v && t(0, s = v.currentLabel), "choices" in v && t(4, l = v.choices), "choicesColors" in v && t(14, o = v.choicesColors), "color" in v && t(15, r = v.color), "currentColor" in v && t(1, a = v.currentColor), "opacity" in v && t(16, c = v.opacity), "currentOpacity" in v && t(2, f = v.currentOpacity), "showRemove" in v && t(5, u = v.showRemove), "labelDetailLock" in v && t(3, d = v.labelDetailLock), "showOpacity" in v && t(6, _ = v.showOpacity);
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
    u,
    _,
    g,
    h,
    b,
    y,
    w,
    Y,
    n,
    o,
    r,
    c,
    k,
    X,
    W,
    S
  ];
}
class Ba extends nv {
  constructor(e) {
    super(), iv(this, e, pv, gv, lv, {
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
  SvelteComponent: bv,
  append: Ee,
  attr: Xe,
  detach: au,
  element: ht,
  empty: vv,
  init: wv,
  insert: ru,
  listen: mn,
  noop: zc,
  run_all: kv,
  safe_not_equal: yv,
  set_data: Cv,
  set_input_value: gl,
  set_style: pl,
  space: Nn,
  text: Xc,
  to_number: ka
} = window.__gradio__svelte__internal, { createEventDispatcher: Sv } = window.__gradio__svelte__internal;
function Yc(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p, g, h, b, y, w, Y, x, k, X, W, S, v, E, B, M;
  return {
    c() {
      e = ht("div"), t = ht("div"), n = ht("div"), s = ht("h3"), s.textContent = "Eraser Settings", l = Nn(), o = ht("button"), o.textContent = "×", r = Nn(), a = ht("div"), c = ht("div"), f = ht("label"), f.textContent = "Eraser Size:", u = Nn(), d = ht("div"), _ = ht("input"), p = Nn(), g = ht("input"), h = Nn(), b = ht("div"), y = ht("div"), w = Nn(), Y = ht("span"), x = Xc(
        /*tempSize*/
        i[1]
      ), k = Xc("px"), X = Nn(), W = ht("div"), S = ht("button"), S.textContent = "Cancel", v = Nn(), E = ht("button"), E.textContent = "Apply", Xe(s, "id", "eraser-settings-title"), Xe(s, "class", "svelte-ccah8n"), Xe(o, "class", "close-button svelte-ccah8n"), Xe(o, "aria-label", "Close"), Xe(n, "class", "annotator-eraser-modal-header svelte-ccah8n"), Xe(f, "for", "eraser-size"), Xe(f, "class", "svelte-ccah8n"), Xe(_, "id", "eraser-size"), Xe(_, "type", "range"), Xe(_, "min", "1"), Xe(_, "max", "50"), Xe(_, "class", "size-slider svelte-ccah8n"), Xe(g, "type", "number"), Xe(g, "min", "1"), Xe(g, "max", "50"), Xe(g, "class", "size-input svelte-ccah8n"), Xe(d, "class", "size-controls svelte-ccah8n"), Xe(y, "class", "preview-circle svelte-ccah8n"), pl(y, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), pl(y, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Xe(Y, "class", "size-label svelte-ccah8n"), Xe(b, "class", "size-preview svelte-ccah8n"), Xe(c, "class", "setting-group svelte-ccah8n"), Xe(a, "class", "annotator-eraser-modal-body svelte-ccah8n"), Xe(S, "class", "button secondary svelte-ccah8n"), Xe(E, "class", "button primary svelte-ccah8n"), Xe(W, "class", "annotator-eraser-modal-footer svelte-ccah8n"), Xe(t, "class", "annotator-eraser-modal-content svelte-ccah8n"), Xe(e, "class", "annotator-eraser-modal-backdrop svelte-ccah8n"), Xe(e, "role", "dialog"), Xe(e, "aria-modal", "true"), Xe(e, "aria-labelledby", "eraser-settings-title");
    },
    m(j, P) {
      ru(j, e, P), Ee(e, t), Ee(t, n), Ee(n, s), Ee(n, l), Ee(n, o), Ee(t, r), Ee(t, a), Ee(a, c), Ee(c, f), Ee(c, u), Ee(c, d), Ee(d, _), gl(
        _,
        /*tempSize*/
        i[1]
      ), Ee(d, p), Ee(d, g), gl(
        g,
        /*tempSize*/
        i[1]
      ), Ee(c, h), Ee(c, b), Ee(b, y), Ee(b, w), Ee(b, Y), Ee(Y, x), Ee(Y, k), Ee(t, X), Ee(t, W), Ee(W, S), Ee(W, v), Ee(W, E), B || (M = [
        mn(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        mn(
          _,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        mn(
          _,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        mn(
          _,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        mn(
          g,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        mn(
          g,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        mn(
          S,
          "click",
          /*handleClose*/
          i[3]
        ),
        mn(
          E,
          "click",
          /*click_handler*/
          i[9]
        ),
        mn(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        mn(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], B = !0);
    },
    p(j, P) {
      P & /*tempSize*/
      2 && gl(
        _,
        /*tempSize*/
        j[1]
      ), P & /*tempSize*/
      2 && ka(g.value) !== /*tempSize*/
      j[1] && gl(
        g,
        /*tempSize*/
        j[1]
      ), P & /*tempSize*/
      2 && pl(y, "width", Math.min(
        /*tempSize*/
        j[1],
        30
      ) + "px"), P & /*tempSize*/
      2 && pl(y, "height", Math.min(
        /*tempSize*/
        j[1],
        30
      ) + "px"), P & /*tempSize*/
      2 && Cv(
        x,
        /*tempSize*/
        j[1]
      );
    },
    d(j) {
      j && au(e), B = !1, kv(M);
    }
  };
}
function Mv(i) {
  let e, t = (
    /*visible*/
    i[0] && Yc(i)
  );
  return {
    c() {
      t && t.c(), e = vv();
    },
    m(n, s) {
      t && t.m(n, s), ru(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = Yc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: zc,
    o: zc,
    d(n) {
      n && au(e), t && t.d(n);
    }
  };
}
function Wv(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = Sv();
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
  function u() {
    o = ka(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = ka(this.value), t(1, o), t(0, s), t(6, n);
  }
  const _ = () => {
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
    u,
    d,
    _
  ];
}
class zv extends bv {
  constructor(e) {
    super(), wv(this, e, Wv, Mv, yv, { eraserSize: 6, visible: 0 });
  }
}
const {
  SvelteComponent: Xv,
  append: se,
  attr: K,
  detach: cu,
  element: ye,
  empty: Yv,
  init: xv,
  insert: fu,
  listen: et,
  noop: xc,
  run_all: Dv,
  safe_not_equal: Bv,
  set_data: Jo,
  set_input_value: Ot,
  set_style: Gi,
  space: ot,
  text: Ji,
  to_number: zn
} = window.__gradio__svelte__internal, { createEventDispatcher: Ev } = window.__gradio__svelte__internal;
function Dc(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p, g, h, b, y, w, Y, x = Math.round(
    /*tempOpacity*/
    i[1] * 100
  ) + "", k, X, W, S, v, E, B, M, j, P, T, Z, C, L, le, G, U, ge, J, q, pe, R, I, ne, Q, xe, De, H, Ue, Se, He, Ne, nt, ce, Ve, ft, be, Me, Re;
  return {
    c() {
      e = ye("div"), t = ye("div"), n = ye("div"), s = ye("h3"), s.textContent = "Shape Settings", l = ot(), o = ye("button"), o.textContent = "×", r = ot(), a = ye("div"), c = ye("div"), f = ye("label"), f.textContent = "Opacity:", u = ot(), d = ye("div"), _ = ye("input"), p = ot(), g = ye("input"), h = ot(), b = ye("div"), y = ye("div"), w = ot(), Y = ye("span"), k = Ji(x), X = Ji("%"), W = ot(), S = ye("div"), v = ye("label"), v.textContent = "Border Width:", E = ot(), B = ye("div"), M = ye("input"), j = ot(), P = ye("input"), T = ot(), Z = ye("div"), C = ye("div"), L = ot(), le = ye("span"), G = Ji(
        /*tempStrokeWidth*/
        i[2]
      ), U = Ji("px"), ge = ot(), J = ye("div"), q = ye("label"), q.textContent = "Selected Border Width:", pe = ot(), R = ye("div"), I = ye("input"), ne = ot(), Q = ye("input"), xe = ot(), De = ye("div"), H = ye("div"), Ue = ot(), Se = ye("span"), He = Ji(
        /*tempSelectedStrokeWidth*/
        i[3]
      ), Ne = Ji("px"), nt = ot(), ce = ye("div"), Ve = ye("button"), Ve.textContent = "Cancel", ft = ot(), be = ye("button"), be.textContent = "Apply", K(s, "id", "shape-settings-title"), K(s, "class", "svelte-e805id"), K(o, "class", "close-button svelte-e805id"), K(o, "aria-label", "Close"), K(n, "class", "annotator-shape-modal-header svelte-e805id"), K(f, "for", "shape-opacity"), K(f, "class", "svelte-e805id"), K(_, "id", "shape-opacity"), K(_, "type", "range"), K(_, "min", "0"), K(_, "max", "1"), K(_, "step", "0.05"), K(_, "class", "settings-slider svelte-e805id"), K(g, "type", "number"), K(g, "min", "0"), K(g, "max", "1"), K(g, "step", "0.05"), K(g, "class", "settings-input svelte-e805id"), K(d, "class", "slider-controls svelte-e805id"), K(y, "class", "opacity-preview svelte-e805id"), Gi(
        y,
        "opacity",
        /*tempOpacity*/
        i[1]
      ), K(Y, "class", "setting-label svelte-e805id"), K(b, "class", "preview-container svelte-e805id"), K(c, "class", "setting-group svelte-e805id"), K(v, "for", "stroke-width"), K(v, "class", "svelte-e805id"), K(M, "id", "stroke-width"), K(M, "type", "range"), K(M, "min", "1"), K(M, "max", "10"), K(M, "class", "settings-slider svelte-e805id"), K(P, "type", "number"), K(P, "min", "1"), K(P, "max", "10"), K(P, "class", "settings-input svelte-e805id"), K(B, "class", "slider-controls svelte-e805id"), K(C, "class", "stroke-preview svelte-e805id"), Gi(C, "border-width", Math.min(
        /*tempStrokeWidth*/
        i[2],
        5
      ) + "px"), K(le, "class", "setting-label svelte-e805id"), K(Z, "class", "preview-container svelte-e805id"), K(S, "class", "setting-group svelte-e805id"), K(q, "for", "selected-stroke-width"), K(q, "class", "svelte-e805id"), K(I, "id", "selected-stroke-width"), K(I, "type", "range"), K(I, "min", "1"), K(I, "max", "15"), K(I, "class", "settings-slider svelte-e805id"), K(Q, "type", "number"), K(Q, "min", "1"), K(Q, "max", "15"), K(Q, "class", "settings-input svelte-e805id"), K(R, "class", "slider-controls svelte-e805id"), K(H, "class", "stroke-preview selected svelte-e805id"), Gi(H, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        i[3],
        5
      ) + "px"), K(Se, "class", "setting-label svelte-e805id"), K(De, "class", "preview-container svelte-e805id"), K(J, "class", "setting-group svelte-e805id"), K(a, "class", "annotator-shape-modal-body svelte-e805id"), K(Ve, "class", "button secondary svelte-e805id"), K(be, "class", "button primary svelte-e805id"), K(ce, "class", "annotator-shape-modal-footer svelte-e805id"), K(t, "class", "annotator-shape-modal-content svelte-e805id"), K(e, "class", "annotator-shape-modal-backdrop svelte-e805id"), K(e, "role", "dialog"), K(e, "aria-modal", "true"), K(e, "aria-labelledby", "shape-settings-title");
    },
    m(D, de) {
      fu(D, e, de), se(e, t), se(t, n), se(n, s), se(n, l), se(n, o), se(t, r), se(t, a), se(a, c), se(c, f), se(c, u), se(c, d), se(d, _), Ot(
        _,
        /*tempOpacity*/
        i[1]
      ), se(d, p), se(d, g), Ot(
        g,
        /*tempOpacity*/
        i[1]
      ), se(c, h), se(c, b), se(b, y), se(b, w), se(b, Y), se(Y, k), se(Y, X), se(a, W), se(a, S), se(S, v), se(S, E), se(S, B), se(B, M), Ot(
        M,
        /*tempStrokeWidth*/
        i[2]
      ), se(B, j), se(B, P), Ot(
        P,
        /*tempStrokeWidth*/
        i[2]
      ), se(S, T), se(S, Z), se(Z, C), se(Z, L), se(Z, le), se(le, G), se(le, U), se(a, ge), se(a, J), se(J, q), se(J, pe), se(J, R), se(R, I), Ot(
        I,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), se(R, ne), se(R, Q), Ot(
        Q,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), se(J, xe), se(J, De), se(De, H), se(De, Ue), se(De, Se), se(Se, He), se(Se, Ne), se(t, nt), se(t, ce), se(ce, Ve), se(ce, ft), se(ce, be), Me || (Re = [
        et(
          o,
          "click",
          /*handleClose*/
          i[5]
        ),
        et(
          _,
          "change",
          /*input0_change_input_handler*/
          i[11]
        ),
        et(
          _,
          "input",
          /*input0_change_input_handler*/
          i[11]
        ),
        et(
          _,
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
          M,
          "change",
          /*input2_change_input_handler*/
          i[13]
        ),
        et(
          M,
          "input",
          /*input2_change_input_handler*/
          i[13]
        ),
        et(
          M,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        et(
          P,
          "input",
          /*input3_input_handler*/
          i[14]
        ),
        et(
          P,
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
          Ve,
          "click",
          /*handleClose*/
          i[5]
        ),
        et(
          be,
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
    p(D, de) {
      de & /*tempOpacity*/
      2 && Ot(
        _,
        /*tempOpacity*/
        D[1]
      ), de & /*tempOpacity*/
      2 && zn(g.value) !== /*tempOpacity*/
      D[1] && Ot(
        g,
        /*tempOpacity*/
        D[1]
      ), de & /*tempOpacity*/
      2 && Gi(
        y,
        "opacity",
        /*tempOpacity*/
        D[1]
      ), de & /*tempOpacity*/
      2 && x !== (x = Math.round(
        /*tempOpacity*/
        D[1] * 100
      ) + "") && Jo(k, x), de & /*tempStrokeWidth*/
      4 && Ot(
        M,
        /*tempStrokeWidth*/
        D[2]
      ), de & /*tempStrokeWidth*/
      4 && zn(P.value) !== /*tempStrokeWidth*/
      D[2] && Ot(
        P,
        /*tempStrokeWidth*/
        D[2]
      ), de & /*tempStrokeWidth*/
      4 && Gi(C, "border-width", Math.min(
        /*tempStrokeWidth*/
        D[2],
        5
      ) + "px"), de & /*tempStrokeWidth*/
      4 && Jo(
        G,
        /*tempStrokeWidth*/
        D[2]
      ), de & /*tempSelectedStrokeWidth*/
      8 && Ot(
        I,
        /*tempSelectedStrokeWidth*/
        D[3]
      ), de & /*tempSelectedStrokeWidth*/
      8 && zn(Q.value) !== /*tempSelectedStrokeWidth*/
      D[3] && Ot(
        Q,
        /*tempSelectedStrokeWidth*/
        D[3]
      ), de & /*tempSelectedStrokeWidth*/
      8 && Gi(H, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        D[3],
        5
      ) + "px"), de & /*tempSelectedStrokeWidth*/
      8 && Jo(
        He,
        /*tempSelectedStrokeWidth*/
        D[3]
      );
    },
    d(D) {
      D && cu(e), Me = !1, Dv(Re);
    }
  };
}
function Rv(i) {
  let e, t = (
    /*visible*/
    i[0] && Dc(i)
  );
  return {
    c() {
      t && t.c(), e = Yv();
    },
    m(n, s) {
      t && t.m(n, s), fu(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = Dc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: xc,
    o: xc,
    d(n) {
      n && cu(e), t && t.d(n);
    }
  };
}
function Hv(i, e, t) {
  let { opacity: n = 0.5 } = e, { strokeWidth: s = 2 } = e, { selectedStrokeWidth: l = 4 } = e, { visible: o = !1 } = e;
  const r = Ev();
  let a = n, c = s, f = l;
  function u() {
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
    k.key === "Escape" ? d() : k.key === "Enter" && (u(), d());
  }
  function p(k) {
    k.target === k.currentTarget && d();
  }
  function g() {
    a = zn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function h() {
    a = zn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function b() {
    c = zn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function y() {
    c = zn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function w() {
    f = zn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function Y() {
    f = zn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  const x = () => {
    u(), d();
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
    u,
    d,
    _,
    p,
    n,
    s,
    l,
    g,
    h,
    b,
    y,
    w,
    Y,
    x
  ];
}
class Lv extends Xv {
  constructor(e) {
    super(), xv(this, e, Hv, Rv, Bv, {
      opacity: 8,
      strokeWidth: 9,
      selectedStrokeWidth: 10,
      visible: 0
    });
  }
}
const {
  SvelteComponent: Pv,
  append: qv,
  attr: Vn,
  binding_callbacks: Iv,
  detach: Av,
  element: Bc,
  init: jv,
  insert: Fv,
  listen: ys,
  noop: Ec,
  run_all: Tv,
  safe_not_equal: Ov
} = window.__gradio__svelte__internal, { createEventDispatcher: Uv } = window.__gradio__svelte__internal;
function Nv(i) {
  let e, t, n, s;
  return {
    c() {
      e = Bc("div"), t = Bc("canvas"), Vn(
        t,
        "width",
        /*navigatorWidth*/
        i[1]
      ), Vn(
        t,
        "height",
        /*navigatorHeight*/
        i[2]
      ), Vn(t, "class", "svelte-o1hdob"), Vn(e, "class", "position-navigator svelte-o1hdob"), Vn(e, "role", "navigation"), Vn(e, "aria-label", "Image position navigator");
    },
    m(l, o) {
      Fv(l, e, o), qv(e, t), i[16](t), n || (s = [
        ys(
          t,
          "mousedown",
          /*handleNavigatorMouseDown*/
          i[4]
        ),
        ys(
          t,
          "mousemove",
          /*handleNavigatorMouseMove*/
          i[5]
        ),
        ys(
          t,
          "mouseup",
          /*handleNavigatorMouseUp*/
          i[6]
        ),
        ys(
          t,
          "click",
          /*handleNavigatorClick*/
          i[3]
        ),
        ys(
          e,
          "mouseleave",
          /*handleNavigatorMouseUp*/
          i[6]
        )
      ], n = !0);
    },
    p(l, [o]) {
      o & /*navigatorWidth*/
      2 && Vn(
        t,
        "width",
        /*navigatorWidth*/
        l[1]
      ), o & /*navigatorHeight*/
      4 && Vn(
        t,
        "height",
        /*navigatorHeight*/
        l[2]
      );
    },
    i: Ec,
    o: Ec,
    d(l) {
      l && Av(e), i[16](null), n = !1, Tv(s);
    }
  };
}
const Kn = 180, Qi = 80, bl = 5;
function Vv(i, e, t) {
  let { imageWidth: n } = e, { imageHeight: s } = e, { canvasWidth: l } = e, { canvasHeight: o } = e, { offsetX: r } = e, { offsetY: a } = e, { scale: c } = e, { image: f = null } = e;
  const u = Uv();
  let d, _, p = !1, g = Kn, h = Kn;
  function b() {
    if (!_ || !n || !s) return;
    const S = _;
    S.clearRect(0, 0, g, h);
    const v = (g - 2 * bl) / n, E = (h - 2 * bl) / s, B = Math.min(v, E), M = n * B, j = s * B, P = (g - M) / 2, T = (h - j) / 2;
    f && f.complete ? (S.save(), S.drawImage(f, P, T, M, j), S.restore()) : (S.fillStyle = "rgba(200, 200, 200, 0.3)", S.fillRect(P, T, M, j)), S.strokeStyle = "rgba(150, 150, 150, 0.8)", S.lineWidth = 1, S.strokeRect(P, T, M, j);
    const Z = l / c, C = o / c, L = -r / c, le = -a / c, G = P + L * B, U = T + le * B, ge = Z * B, J = C * B;
    S.fillStyle = "rgba(59, 130, 246, 0.3)", S.fillRect(G, U, ge, J), S.strokeStyle = "rgba(59, 130, 246, 1)", S.lineWidth = 2, S.strokeRect(G, U, ge, J);
  }
  function y(S) {
    k(S);
  }
  function w(S) {
    p = !0, k(S);
  }
  function Y(S) {
    p && k(S);
  }
  function x() {
    p = !1;
  }
  function k(S) {
    const v = d.getBoundingClientRect(), E = S.clientX - v.left, B = S.clientY - v.top, M = (g - 2 * bl) / n, j = (h - 2 * bl) / s, P = Math.min(M, j), T = n * P, Z = s * P, C = (g - T) / 2, L = (h - Z) / 2, le = (E - C) / P, G = (B - L) / P, U = l / c, ge = o / c, J = -(le - U / 2) * c, q = -(G - ge / 2) * c;
    u("navigate", { x: J, y: q });
  }
  function X() {
    d && (t(15, _ = d.getContext("2d")), b());
  }
  function W(S) {
    Iv[S ? "unshift" : "push"](() => {
      d = S, t(0, d);
    });
  }
  return i.$$set = (S) => {
    "imageWidth" in S && t(7, n = S.imageWidth), "imageHeight" in S && t(8, s = S.imageHeight), "canvasWidth" in S && t(9, l = S.canvasWidth), "canvasHeight" in S && t(10, o = S.canvasHeight), "offsetX" in S && t(11, r = S.offsetX), "offsetY" in S && t(12, a = S.offsetY), "scale" in S && t(13, c = S.scale), "image" in S && t(14, f = S.image);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*imageWidth, imageHeight, navigatorWidth, navigatorHeight*/
    390 && n && s) {
      const S = n / s;
      S > 1 ? (t(1, g = Math.min(Kn, Math.max(Qi, Kn))), t(2, h = Math.min(Kn, Math.max(Qi, g / S)))) : (t(2, h = Math.min(Kn, Math.max(Qi, Kn))), t(1, g = Math.min(Kn, Math.max(Qi, h * S)))), t(1, g = Math.max(Qi, g)), t(2, h = Math.max(Qi, h));
    }
    i.$$.dirty & /*navigatorCanvas, navigatorCtx, imageWidth, imageHeight, offsetX, offsetY, scale, canvasWidth, canvasHeight, image, navigatorWidth, navigatorHeight*/
    65415 && d && _ && n && s && b(), i.$$.dirty & /*navigatorCanvas*/
    1 && d && X();
  }, [
    d,
    g,
    h,
    y,
    w,
    Y,
    x,
    n,
    s,
    l,
    o,
    r,
    a,
    c,
    f,
    _,
    W
  ];
}
class Kv extends Pv {
  constructor(e) {
    super(), jv(this, e, Vv, Nv, Ov, {
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
  constructor(e, t, n, s, l, o, r, a, c, f, u, d, _, p = "rgb(255, 255, 255)", g = 0.5, h = 25, b = 8, y = 2, w = 4, Y = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (x) => {
      if (this.isDragging) {
        let k = (x.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, X = (x.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = at(k, -this._xmin, W - this._xmax), X = at(X, -this._ymin, S - this._ymax), this._xmin += k, this._ymin += X, this._xmax += k, this._ymax += X, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (x) => {
      var k;
      if (this.isCreating) {
        const X = (k = this.canvasRef) == null ? void 0 : k.deref();
        if (!X) return;
        const W = X.getBoundingClientRect(), S = x.clientX - W.left, v = x.clientY - W.top;
        let E = (S - this.canvasWindow.offsetX) / this.canvasWindow.scale, B = (v - this.canvasWindow.offsetY) / this.canvasWindow.scale;
        E > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = E, this.creatingAnchorX = "xmin") : E > this._xmin && E < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = E : E > this._xmin && E < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = E : E < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = E, this.creatingAnchorX = "xmax"), B > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = B, this.creatingAnchorY = "ymin") : B > this._ymin && B < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = B : B > this._ymin && B < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = B : B < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = B, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (x) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, X = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = at(this._xmin, 0, k - this.minSize), this._ymin = at(this._ymin, 0, X - this.minSize), this._xmax = at(this._xmax, this.minSize, k), this._ymax = at(this._ymax, this.minSize, X), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > X ? (this._ymin -= this._ymax - X, this._ymax = X) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (x) => {
      if (this.isResizing) {
        const k = x.clientX, X = x.clientY, W = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, S = (X - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += W, this._ymin += S, this._xmin = at(this._xmin, 0, this._xmax - this.minSize), this._ymin = at(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += W, this._ymin += S, this._xmax = at(this._xmax, this._xmin + this.minSize, v), this._ymin = at(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += W, this._ymax += S, this._xmax = at(this._xmax, this._xmin + this.minSize, v), this._ymax = at(this._ymax, this._ymin + this.minSize, E);
            break;
          case 3:
            this._xmin += W, this._ymax += S, this._xmin = at(this._xmin, 0, this._xmax - this.minSize), this._ymax = at(this._ymax, this._ymin + this.minSize, E);
            break;
          case 4:
            this._ymin += S, this._ymin = at(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += W, this._xmax = at(this._xmax, this._xmin + this.minSize, v);
            break;
          case 6:
            this._ymax += S, this._ymax = at(this._ymax, this._ymin + this.minSize, E);
            break;
          case 7:
            this._xmin += W, this._xmin = at(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasRef = s ? new WeakRef(s) : null, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = Y, this.label = c, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = u, this._xmax = d, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = y, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = p, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
      const r = Math.min(this._xmin, this._xmax), a = Math.min(this._ymin, this._ymax), c = Math.max(this._xmin, this._xmax), f = Math.max(this._ymin, this._ymax), u = r * this.canvasWindow.scale, d = a * this.canvasWindow.scale;
      n = u + this.canvasXmin, s = d + this.canvasYmin, l = (c - r) * this.canvasWindow.scale, o = (f - a) * this.canvasWindow.scale;
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
  constructor(e, t, n, s, l, o, r, a, c, f, u, d, _ = "rgb(255, 255, 255)", p = 0.5, g = 25, h = 8, b = 2, y = 4, w = 1) {
    this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (Y) => {
      if (this.isDragging) {
        const x = document.querySelector("canvas");
        if (x) {
          const k = x.getBoundingClientRect(), X = Y.clientX - k.left, W = Y.clientY - k.top, [S, v] = this.toBoxCoordinates(X, W);
          let E = S - this.offsetMouseX, B = v - this.offsetMouseY;
          const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, j = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          E = Rc(E, this._radius, M - this._radius), B = Rc(B, this._radius, j - this._radius), this._centerX = E, this._centerY = B, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (Y) => {
      var x;
      if (this.isCreating) {
        const k = (x = this.canvasRef) == null ? void 0 : x.deref();
        if (!k) return;
        const X = k.getBoundingClientRect(), W = Y.clientX - X.left, S = Y.clientY - X.top, v = (W - this.canvasWindow.offsetX) / this.canvasWindow.scale, E = (S - this.canvasWindow.offsetY) / this.canvasWindow.scale, B = v - this.offsetMouseX, M = E - this.offsetMouseY, j = Math.sqrt(B * B + M * M);
        this._radius = Math.max(j, 5), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (Y) => {
      if (this.isResizing) {
        const x = document.querySelector("canvas");
        if (x) {
          const k = x.getBoundingClientRect(), X = Y.clientX - k.left, W = Y.clientY - k.top, [S, v] = this.toBoxCoordinates(X, W), E = Math.sqrt(
            Math.pow(S - this._centerX, 2) + Math.pow(v - this._centerY, 2)
          );
          this._radius = Math.max(E, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasRef = s ? new WeakRef(s) : null, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = w, this.label = c, this.isDragging = !1, this.isCreating = !1, this._centerX = f, this._centerY = u, this._radius = d, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = b, this.selectedThickness = y, this.resizingHandleIndex = -1, this.minSize = g, this.color = _, this.alpha = p, this.applyUserScale(), this.updateHandles();
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
  constructor(e, t, n, s, l, o, r, a, c, f = "rgb(255, 255, 255)", u = 0.5, d = 25, _ = 8, p = 2, g = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let y = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const Y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = Math.max(-this._xmin, Math.min(y, Y - this._xmax)), w = Math.max(-this._ymin, Math.min(w, x - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + y,
          y: k.y + w
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (b) => {
      var y;
      if (this.isCreating) {
        const w = (y = this.canvasRef) == null ? void 0 : y.deref();
        if (!w) return;
        const Y = w.getBoundingClientRect(), x = b.clientX - Y.left, k = b.clientY - Y.top, X = (x - this.canvasWindow.offsetX) / this.canvasWindow.scale, W = (k - this.canvasWindow.offsetY) / this.canvasWindow.scale, S = this._points[this._points.length - 1];
        Math.sqrt(Math.pow(X - S.x, 2) + Math.pow(W - S.y, 2)) > 2 && (this._points.push({ x: X, y: W }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
      }
    }, this.stopCreating = (b) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((Y) => ({
          x: Math.max(0, Math.min(Y.x, y)),
          y: Math.max(0, Math.min(Y.y, w))
        })), this.updateBoundingBox(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const y = b.clientX, w = b.clientY, Y = document.querySelector("canvas");
        if (Y) {
          const x = Y.getBoundingClientRect(), k = y - x.left, X = w - x.top, W = (k - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (X - this.canvasWindow.offsetY) / this.canvasWindow.scale, v = this.getControlPointIndex(this.resizingHandleIndex);
          if (v >= 0 && v < this._points.length) {
            const E = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, B = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, M = Math.max(0, Math.min(W, E)), j = Math.max(0, Math.min(S, B)), P = M - this._points[v].x, T = j - this._points[v].y;
            this.applyLocalDeformation(v, P, T), this.updateBoundingBox(), this.renderCallBack();
          }
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasRef = s ? new WeakRef(s) : null, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = h, this.label = c, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = _, this.thickness = p, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = d, this.color = f, this.alpha = u, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0;
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
      const c = Math.exp(-a * 0.8), f = t * c, u = n * c;
      e - a >= 0 && (this._points[e - a].x += f, this._points[e - a].y += u), e + a < s && (this._points[e + a].x += f, this._points[e + a].y += u);
    }
    const o = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, r = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((a) => ({
      x: Math.max(0, Math.min(a.x, o)),
      y: Math.max(0, Math.min(a.y, r))
    }));
  }
}
class sn {
  constructor(e, t, n, s, l, o, r, a, c, f = "rgb(255, 255, 255)", u = 0.5, d = 25, _ = 8, p = 2, g = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let y = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const Y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = Math.max(-this._xmin, Math.min(y, Y - this._xmax)), w = Math.max(-this._ymin, Math.min(w, x - this._ymax)), this._points = this._points.map((k) => ({
          x: k.x + y,
          y: k.y + w
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (b) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (b) => {
      this.isCreating && b.code === "Space" && this._points.length >= this.minPoints && (b.preventDefault(), this.finishCreating());
    }, this.handleResize = (b) => {
      var y;
      if (this.isResizing && this._points.length > 0) {
        const w = b.clientX, Y = b.clientY, x = (y = this.canvasRef) == null ? void 0 : y.deref();
        if (!x) return;
        const k = x.getBoundingClientRect(), X = w - k.left, W = Y - k.top, S = (X - this.canvasWindow.offsetX) / this.canvasWindow.scale, v = (W - this.canvasWindow.offsetY) / this.canvasWindow.scale, E = this.getPolygonVertexIndex(this.resizingHandleIndex);
        if (E >= 0 && E < this._points.length) {
          const B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, j = Math.max(0, Math.min(S, B)), P = Math.max(0, Math.min(v, M)), T = j - this._points[E].x, Z = P - this._points[E].y;
          this._points.length > 6 ? this.applyPolygonLocalDeformation(E, T, Z) : this._points[E] = { x: j, y: P }, this.updateBoundingBox(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasRef = s ? new WeakRef(s) : null, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = h, this.label = c, this.isDragging = !1, this.isCreating = !1, this.points = [], this._points = [], this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = _, this.thickness = p, this.selectedThickness = g, this.resizingHandleIndex = -1, this.minSize = d, this.color = f, this.alpha = u, this.resizeHandles = [], this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.minPoints = 3, this.startPointRadius = 8, this.xmin = 0, this.ymin = 0, this.xmax = 0, this.ymax = 0, this._xmin = 0, this._ymin = 0, this._xmax = 0, this._ymax = 0, this.handleKeyPress = this.handleKeyPress.bind(this);
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
    var c;
    if (!this.isCreating) return !1;
    const t = (c = this.canvasRef) == null ? void 0 : c.deref();
    if (!t) return !1;
    const n = t.getBoundingClientRect(), s = e.clientX - n.left, l = e.clientY - n.top;
    if (this._points.length >= this.minPoints && this.isClickOnStartPoint(s, l))
      return this.finishCreating(), !0;
    const o = (s - this.canvasWindow.offsetX) / this.canvasWindow.scale, r = (l - this.canvasWindow.offsetY) / this.canvasWindow.scale, a = { x: o, y: r };
    return this._points.push(a), this.onPointAdded && this.onPointAdded(a), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack(), !1;
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
      const c = Math.exp(-a * 1.2), f = t * c, u = n * c, d = (e - a + s) % s;
      this._points[d].x += f, this._points[d].y += u;
      const _ = (e + a) % s;
      this._points[_].x += f, this._points[_].y += u;
    }
    const o = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, r = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
    this._points = this._points.map((a) => ({
      x: Math.max(0, Math.min(a.x, o)),
      y: Math.max(0, Math.min(a.y, r))
    }));
  }
}
class Zv {
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
    return e instanceof di ? this.eraseFromBox(e, n) : e instanceof _i ? this.eraseFromCircle(e, n) : e instanceof ei ? this.eraseFromFreehand(e, n) : e instanceof sn ? this.eraseFromPolygon(e, n) : [e];
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
      const f = e[c], u = f.x - t, d = f.y - n;
      if (this.maskCtx.beginPath(), this.maskCtx.arc(u, d, o, 0, 2 * Math.PI), this.maskCtx.fill(), c > 0) {
        const _ = e[c - 1], p = _.x - t, g = _.y - n;
        this.maskCtx.lineWidth = o * 2, this.maskCtx.lineCap = "round", this.maskCtx.beginPath(), this.maskCtx.moveTo(p, g), this.maskCtx.lineTo(u, d), this.maskCtx.stroke();
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
    var l;
    let t;
    typeof e.label == "string" ? t = e.label : Array.isArray(e.label) ? t = e.label.join(", ") : t = String(e.label || "");
    const n = ((l = e.canvasRef) == null ? void 0 : l.deref()) || null, s = new sn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      n,
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
    return s._points = [
      { x: e._xmin, y: e._ymin },
      { x: e._xmax, y: e._ymin },
      { x: e._xmax, y: e._ymax },
      { x: e._xmin, y: e._ymax }
    ], s.updateBoundingBox(), s;
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
    var r;
    let t;
    typeof e.label == "string" ? t = e.label : Array.isArray(e.label) ? t = e.label.join(", ") : t = String(e.label || "");
    const n = ((r = e.canvasRef) == null ? void 0 : r.deref()) || null, s = new sn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      n,
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
    ), l = 16, o = [];
    for (let a = 0; a < l; a++) {
      const c = a / l * 2 * Math.PI, f = e._centerX + e._radius * Math.cos(c), u = e._centerY + e._radius * Math.sin(c);
      o.push({ x: f, y: u });
    }
    return s._points = o, s.updateBoundingBox(), s;
  }
  /**
   * Convert freehand path to polygon for uniform processing
   */
  freehandToPolygon(e) {
    var l;
    let t;
    typeof e.label == "string" ? t = e.label : Array.isArray(e.label) ? t = e.label.join(", ") : t = String(e.label || "");
    const n = ((l = e.canvasRef) == null ? void 0 : l.deref()) || null, s = new sn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      n,
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
    return s._points = [...e._points], s.updateBoundingBox(), s;
  }
  /**
   * Convert polygon back to freehand path
   */
  polygonToFreehand(e, t) {
    var o;
    let n;
    typeof t.label == "string" ? n = t.label : Array.isArray(t.label) ? n = t.label.join(", ") : n = String(t.label || "");
    const s = ((o = t.canvasRef) == null ? void 0 : o.deref()) || null, l = new ei(
      t.renderCallBack,
      t.onFinishCreation,
      t.canvasWindow,
      s,
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
    return l._points = [...e._points], l.updateBoundingBox(), l;
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
      }, _ = [
        d,
        { x: d.x + r, y: d.y },
        { x: d.x - r, y: d.y },
        { x: d.x, y: d.y + r },
        { x: d.x, y: d.y - r }
      ];
      for (const p of _)
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
    var c;
    if (e._points.length < 3) return [];
    let n = !0;
    for (const f of e._points)
      if (!this.isPointErased(f, t)) {
        n = !1;
        break;
      }
    if (n) return [];
    const s = [];
    for (let f = 0; f < e._points.length; f++) {
      const u = e._points[f], d = e._points[(f + 1) % e._points.length], _ = this.isPointErased(u, t), p = this.isPointErased(d, t);
      if (_ || s.push({ ...u }), !_ && p) {
        const g = this.findEraserEdge(u, d, t);
        g && s.push(g);
      }
      if (_ && !p) {
        const g = this.findEraserEdge(d, u, t);
        g && s.push(g);
      }
    }
    const l = [];
    for (let f = 0; f < s.length; f++) {
      const u = s[f], d = l[l.length - 1];
      (d ? Math.sqrt(Math.pow(u.x - d.x, 2) + Math.pow(u.y - d.y, 2)) : 1 / 0) > 1 && l.push(u);
    }
    if (l.length > 2) {
      const f = l[0], u = l[l.length - 1];
      Math.sqrt(Math.pow(f.x - u.x, 2) + Math.pow(f.y - u.y, 2)) < 1 && l.pop();
    }
    if (l.length < 3) return [];
    let o;
    typeof e.label == "string" ? o = e.label : Array.isArray(e.label) ? o = e.label.join(", ") : o = String(e.label || "");
    const r = ((c = e.canvasRef) == null ? void 0 : c.deref()) || null, a = new sn(
      e.renderCallBack,
      e.onFinishCreation,
      e.canvasWindow,
      r,
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
    return a._points = l, a.updateBoundingBox(), [a];
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
const gt = [
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
], Zn = (i, e, t) => Math.min(Math.max(i, e), t);
class Gv {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Zn(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Zn(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Zn(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Zn(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  clampOffsets() {
    this.imageWidth * this.scale > this.canvasWidth ? this.offsetX = Zn(this.offsetX, this.canvasWidth - this.imageWidth * this.scale, 0) : this.offsetX = Zn(this.offsetX, 0, this.canvasWidth - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? this.offsetY = Zn(this.offsetY, this.canvasHeight - this.imageHeight * this.scale, 0) : this.offsetY = Zn(this.offsetY, 0, this.canvasHeight - this.imageHeight * this.scale);
  }
}
const {
  SvelteComponent: Jv,
  add_flush_callback: $i,
  append: F,
  attr: N,
  bind: es,
  binding_callbacks: mi,
  bubble: Qo,
  check_outros: wi,
  create_component: Fe,
  destroy_component: Te,
  detach: gn,
  element: ae,
  group_outros: ki,
  init: Qv,
  insert: pn,
  is_function: $v,
  listen: Ie,
  mount_component: Oe,
  noop: uu,
  run_all: hu,
  safe_not_equal: ew,
  set_style: vl,
  space: _e,
  toggle_class: qe,
  transition_in: he,
  transition_out: me
} = window.__gradio__svelte__internal, { onMount: tw, onDestroy: nw, createEventDispatcher: iw } = window.__gradio__svelte__internal;
function Hc(i) {
  let e, t;
  return e = new Kv({
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
      Fe(e.$$.fragment);
    },
    m(n, s) {
      Oe(e, n, s), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Te(e, n);
    }
  };
}
function Lc(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p, g, h, b, y, w, Y, x, k, X, W, S, v, E, B, M, j, P, T, Z, C, L, le, G, U, ge, J, q, pe, R, I, ne, Q, xe, De, H, Ue, Se, He, Ne, nt, ce, Ve, ft, be, Me, Re, D, de, ve, oe, Ze, yt, ut, an, Ii, rn, Ct, Tt, Rn, Hn, Et, Ln, si, Le, dt, Pn, Fs, Ai, vt, _s, Ts;
  s = new Eg({}), f = new Kp({}), h = new Zg({}), k = new t2({}), M = new r2({}), T = new sc({}), U = new fp({});
  let Ge = (
    /*showRemoveButton*/
    i[3] && Pc(i)
  ), Je = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[32] && qc(i);
  return Q = new m2({}), He = new y2({}), Me = new jg({
    props: { selected: (
      /*labelVisibility*/
      i[33]
    ) }
  }), de = new sc({}), an = new np({}), Hn = new P2({}), Pn = new O2({}), {
    c() {
      e = ae("span"), t = ae("div"), n = ae("button"), Fe(s.$$.fragment), l = _e(), o = ae("span"), o.textContent = "Box", r = _e(), a = ae("div"), c = ae("button"), Fe(f.$$.fragment), u = _e(), d = ae("span"), d.textContent = "Freehand", _ = _e(), p = ae("div"), g = ae("button"), Fe(h.$$.fragment), b = _e(), y = ae("span"), y.textContent = "Circle", w = _e(), Y = ae("div"), x = ae("button"), Fe(k.$$.fragment), X = _e(), W = ae("span"), W.textContent = "Polygon", S = _e(), v = ae("div"), E = ae("div"), B = ae("button"), Fe(M.$$.fragment), j = _e(), P = ae("button"), Fe(T.$$.fragment), Z = _e(), C = ae("span"), C.textContent = "Eraser", L = _e(), le = ae("div"), G = ae("button"), Fe(U.$$.fragment), ge = _e(), J = ae("span"), J.textContent = "Move", q = _e(), Ge && Ge.c(), pe = _e(), Je && Je.c(), R = _e(), I = ae("div"), ne = ae("button"), Fe(Q.$$.fragment), xe = _e(), De = ae("span"), De.textContent = "Undo", H = _e(), Ue = ae("div"), Se = ae("button"), Fe(He.$$.fragment), Ne = _e(), nt = ae("span"), nt.textContent = "Redo", ce = _e(), Ve = ae("div"), ft = ae("div"), be = ae("button"), Fe(Me.$$.fragment), Re = _e(), D = ae("button"), Fe(de.$$.fragment), ve = _e(), oe = ae("span"), oe.textContent = "Labels", Ze = _e(), yt = ae("div"), ut = ae("button"), Fe(an.$$.fragment), Ii = _e(), rn = ae("span"), rn.textContent = "Clear", Ct = _e(), Tt = ae("div"), Rn = ae("button"), Fe(Hn.$$.fragment), Et = _e(), Ln = ae("span"), Ln.textContent = "Export", si = _e(), Le = ae("div"), dt = ae("button"), Fe(Pn.$$.fragment), Fs = _e(), Ai = ae("span"), Ai.textContent = "Position", N(n, "class", "icon tool-button svelte-eg64j9"), N(n, "aria-label", "Create box"), qe(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), N(o, "class", "tool-label svelte-eg64j9"), N(t, "class", "tool-group svelte-eg64j9"), N(c, "class", "icon tool-button svelte-eg64j9"), N(c, "aria-label", "Freehand drawing"), qe(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), N(d, "class", "tool-label svelte-eg64j9"), N(a, "class", "tool-group svelte-eg64j9"), N(g, "class", "icon tool-button svelte-eg64j9"), N(g, "aria-label", "Circle drawing"), qe(
        g,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), N(y, "class", "tool-label svelte-eg64j9"), N(p, "class", "tool-group svelte-eg64j9"), N(x, "class", "icon tool-button svelte-eg64j9"), N(x, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), qe(
        x,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), N(W, "class", "tool-label svelte-eg64j9"), N(Y, "class", "tool-group svelte-eg64j9"), N(B, "class", "icon tool-button svelte-eg64j9"), N(B, "aria-label", "Erase areas from shapes"), qe(
        B,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), N(P, "class", "icon dropdown-button svelte-eg64j9"), N(P, "aria-label", "Eraser settings"), N(E, "class", "eraser-buttons svelte-eg64j9"), N(C, "class", "tool-label svelte-eg64j9"), N(v, "class", "tool-group eraser-group svelte-eg64j9"), N(G, "class", "icon tool-button svelte-eg64j9"), N(G, "aria-label", "Edit boxes"), qe(
        G,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), N(J, "class", "tool-label svelte-eg64j9"), N(le, "class", "tool-group svelte-eg64j9"), N(ne, "class", "icon tool-button svelte-eg64j9"), N(ne, "aria-label", "Undo (Ctrl+Z)"), qe(
        ne,
        "disabled",
        /*undoStack*/
        i[34].length === 0
      ), N(De, "class", "tool-label svelte-eg64j9"), N(I, "class", "tool-group svelte-eg64j9"), N(Se, "class", "icon tool-button svelte-eg64j9"), N(Se, "aria-label", "Redo (Ctrl+Y)"), qe(
        Se,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), N(nt, "class", "tool-label svelte-eg64j9"), N(Ue, "class", "tool-group svelte-eg64j9"), N(be, "class", "icon tool-button svelte-eg64j9"), N(be, "aria-label", "Show/Hide labels"), qe(
        be,
        "selected",
        /*labelVisibility*/
        i[33]
      ), N(D, "class", "icon dropdown-button svelte-eg64j9"), N(D, "aria-label", "Shape settings"), N(ft, "class", "button-group svelte-eg64j9"), N(oe, "class", "tool-label svelte-eg64j9"), N(Ve, "class", "tool-group svelte-eg64j9"), N(ut, "class", "icon tool-button svelte-eg64j9"), N(ut, "aria-label", "Clear Shapes"), N(rn, "class", "tool-label svelte-eg64j9"), N(yt, "class", "tool-group svelte-eg64j9"), N(Rn, "class", "icon tool-button svelte-eg64j9"), N(Rn, "aria-label", "Export Image"), N(Ln, "class", "tool-label svelte-eg64j9"), N(Tt, "class", "tool-group svelte-eg64j9"), N(dt, "class", "icon tool-button svelte-eg64j9"), N(dt, "aria-label", "Show/Hide Position"), qe(
        dt,
        "selected",
        /*showPositionNavigator*/
        i[14]
      ), N(Ai, "class", "tool-label svelte-eg64j9"), N(Le, "class", "tool-group svelte-eg64j9"), N(e, "class", "canvas-control svelte-eg64j9");
    },
    m($, it) {
      pn($, e, it), F(e, t), F(t, n), Oe(s, n, null), F(t, l), F(t, o), F(e, r), F(e, a), F(a, c), Oe(f, c, null), F(a, u), F(a, d), F(e, _), F(e, p), F(p, g), Oe(h, g, null), F(p, b), F(p, y), F(e, w), F(e, Y), F(Y, x), Oe(k, x, null), F(Y, X), F(Y, W), F(e, S), F(e, v), F(v, E), F(E, B), Oe(M, B, null), F(E, j), F(E, P), Oe(T, P, null), F(v, Z), F(v, C), F(e, L), F(e, le), F(le, G), Oe(U, G, null), F(le, ge), F(le, J), F(e, q), Ge && Ge.m(e, null), F(e, pe), Je && Je.m(e, null), F(e, R), F(e, I), F(I, ne), Oe(Q, ne, null), F(I, xe), F(I, De), F(e, H), F(e, Ue), F(Ue, Se), Oe(He, Se, null), F(Ue, Ne), F(Ue, nt), F(e, ce), F(e, Ve), F(Ve, ft), F(ft, be), Oe(Me, be, null), F(ft, Re), F(ft, D), Oe(de, D, null), F(Ve, ve), F(Ve, oe), F(e, Ze), F(e, yt), F(yt, ut), Oe(an, ut, null), F(yt, Ii), F(yt, rn), F(e, Ct), F(e, Tt), F(Tt, Rn), Oe(Hn, Rn, null), F(Tt, Et), F(Tt, Ln), F(e, si), F(e, Le), F(Le, dt), Oe(Pn, dt, null), F(Le, Fs), F(Le, Ai), vt = !0, _s || (Ts = [
        Ie(
          n,
          "click",
          /*click_handler*/
          i[75]
        ),
        Ie(
          c,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        Ie(
          g,
          "click",
          /*click_handler_2*/
          i[77]
        ),
        Ie(
          x,
          "click",
          /*click_handler_3*/
          i[78]
        ),
        Ie(
          B,
          "click",
          /*click_handler_4*/
          i[79]
        ),
        Ie(
          P,
          "click",
          /*openEraserSettings*/
          i[43]
        ),
        Ie(
          G,
          "click",
          /*click_handler_5*/
          i[80]
        ),
        Ie(
          ne,
          "click",
          /*click_handler_8*/
          i[83]
        ),
        Ie(
          Se,
          "click",
          /*click_handler_9*/
          i[84]
        ),
        Ie(
          be,
          "click",
          /*click_handler_10*/
          i[85]
        ),
        Ie(
          D,
          "click",
          /*openShapeSettings*/
          i[46]
        ),
        Ie(
          ut,
          "click",
          /*click_handler_11*/
          i[86]
        ),
        Ie(
          Rn,
          "click",
          /*click_handler_12*/
          i[87]
        ),
        Ie(
          dt,
          "click",
          /*click_handler_13*/
          i[88]
        )
      ], _s = !0);
    },
    p($, it) {
      (!vt || it[0] & /*mode, Mode*/
      4608) && qe(
        n,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].creation
      ), (!vt || it[0] & /*mode, Mode*/
      4608) && qe(
        c,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].freehand
      ), (!vt || it[0] & /*mode, Mode*/
      4608) && qe(
        g,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].circle
      ), (!vt || it[0] & /*mode, Mode*/
      4608) && qe(
        x,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].polygon
      ), (!vt || it[0] & /*mode, Mode*/
      4608) && qe(
        B,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].erase
      ), (!vt || it[0] & /*mode, Mode*/
      4608) && qe(
        G,
        "selected",
        /*mode*/
        $[12] === /*Mode*/
        $[9].drag
      ), /*showRemoveButton*/
      $[3] ? Ge ? (Ge.p($, it), it[0] & /*showRemoveButton*/
      8 && he(Ge, 1)) : (Ge = Pc($), Ge.c(), he(Ge, 1), Ge.m(e, pe)) : Ge && (ki(), me(Ge, 1, 1, () => {
        Ge = null;
      }), wi()), !/*disableEditBoxes*/
      $[5] && /*labelDetailLock*/
      $[32] ? Je ? (Je.p($, it), it[0] & /*disableEditBoxes*/
      32 | it[1] & /*labelDetailLock*/
      2 && he(Je, 1)) : (Je = qc($), Je.c(), he(Je, 1), Je.m(e, R)) : Je && (ki(), me(Je, 1, 1, () => {
        Je = null;
      }), wi()), (!vt || it[0] & /*redoStack*/
      8192) && qe(
        Se,
        "disabled",
        /*redoStack*/
        $[13].length === 0
      );
      const Os = {};
      it[1] & /*labelVisibility*/
      4 && (Os.selected = /*labelVisibility*/
      $[33]), Me.$set(Os), (!vt || it[1] & /*labelVisibility*/
      4) && qe(
        be,
        "selected",
        /*labelVisibility*/
        $[33]
      ), (!vt || it[0] & /*showPositionNavigator*/
      16384) && qe(
        dt,
        "selected",
        /*showPositionNavigator*/
        $[14]
      );
    },
    i($) {
      vt || (he(s.$$.fragment, $), he(f.$$.fragment, $), he(h.$$.fragment, $), he(k.$$.fragment, $), he(M.$$.fragment, $), he(T.$$.fragment, $), he(U.$$.fragment, $), he(Ge), he(Je), he(Q.$$.fragment, $), he(He.$$.fragment, $), he(Me.$$.fragment, $), he(de.$$.fragment, $), he(an.$$.fragment, $), he(Hn.$$.fragment, $), he(Pn.$$.fragment, $), vt = !0);
    },
    o($) {
      me(s.$$.fragment, $), me(f.$$.fragment, $), me(h.$$.fragment, $), me(k.$$.fragment, $), me(M.$$.fragment, $), me(T.$$.fragment, $), me(U.$$.fragment, $), me(Ge), me(Je), me(Q.$$.fragment, $), me(He.$$.fragment, $), me(Me.$$.fragment, $), me(de.$$.fragment, $), me(an.$$.fragment, $), me(Hn.$$.fragment, $), me(Pn.$$.fragment, $), vt = !1;
    },
    d($) {
      $ && gn(e), Te(s), Te(f), Te(h), Te(k), Te(M), Te(T), Te(U), Ge && Ge.d(), Je && Je.d(), Te(Q), Te(He), Te(Me), Te(de), Te(an), Te(Hn), Te(Pn), _s = !1, hu(Ts);
    }
  };
}
function Pc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new bp({}), {
    c() {
      e = ae("div"), t = ae("button"), Fe(n.$$.fragment), s = _e(), l = ae("span"), l.textContent = "Delete", N(t, "class", "icon tool-button svelte-eg64j9"), N(t, "aria-label", "Remove boxes"), N(l, "class", "tool-label svelte-eg64j9"), N(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      pn(c, e, f), F(e, t), Oe(n, t, null), F(e, s), F(e, l), o = !0, r || (a = Ie(
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
      me(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && gn(e), Te(n), r = !1, a();
    }
  };
}
function qc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Mp({}), {
    c() {
      e = ae("div"), t = ae("button"), Fe(n.$$.fragment), s = _e(), l = ae("span"), l.textContent = "Label", N(t, "class", "icon tool-button svelte-eg64j9"), N(t, "aria-label", "Edit label"), N(l, "class", "tool-label svelte-eg64j9"), N(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      pn(c, e, f), F(e, t), Oe(n, t, null), F(e, s), F(e, l), o = !0, r || (a = Ie(
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
      me(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && gn(e), Te(n), r = !1, a();
    }
  };
}
function Ic(i) {
  let e, t;
  return e = new Ba({
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
      Fe(e.$$.fragment);
    },
    m(n, s) {
      Oe(e, n, s), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Te(e, n);
    }
  };
}
function Ac(i) {
  let e, t;
  return e = new Ba({
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
      Fe(e.$$.fragment);
    },
    m(n, s) {
      Oe(e, n, s), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Te(e, n);
    }
  };
}
function jc(i) {
  let e, t;
  return e = new Ba({
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
      Fe(e.$$.fragment);
    },
    m(n, s) {
      Oe(e, n, s), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Te(e, n);
    }
  };
}
function sw(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p, g, h, b, y, w, Y, x = (
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
  ), S = (
    /*editDefaultLabelVisible*/
    i[25] && jc(i)
  );
  function v(C) {
    i[92](C);
  }
  function E(C) {
    i[93](C);
  }
  let B = {};
  /*eraserSettingsVisible*/
  i[26] !== void 0 && (B.visible = /*eraserSettingsVisible*/
  i[26]), /*eraserSize*/
  i[28] !== void 0 && (B.eraserSize = /*eraserSize*/
  i[28]), c = new zv({ props: B }), mi.push(() => es(c, "visible", v)), mi.push(() => es(c, "eraserSize", E)), c.$on(
    "change",
    /*handleEraserSettingsChange*/
    i[44]
  ), c.$on(
    "close",
    /*handleEraserSettingsClose*/
    i[45]
  );
  function M(C) {
    i[94](C);
  }
  function j(C) {
    i[95](C);
  }
  function P(C) {
    i[96](C);
  }
  function T(C) {
    i[97](C);
  }
  let Z = {};
  return (
    /*shapeSettingsVisible*/
    i[27] !== void 0 && (Z.visible = /*shapeSettingsVisible*/
    i[27]), /*shapeOpacity*/
    i[29] !== void 0 && (Z.opacity = /*shapeOpacity*/
    i[29]), /*shapeStrokeWidth*/
    i[30] !== void 0 && (Z.strokeWidth = /*shapeStrokeWidth*/
    i[30]), /*shapeSelectedStrokeWidth*/
    i[31] !== void 0 && (Z.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
    i[31]), _ = new Lv({ props: Z }), mi.push(() => es(_, "visible", M)), mi.push(() => es(_, "opacity", j)), mi.push(() => es(_, "strokeWidth", P)), mi.push(() => es(_, "selectedStrokeWidth", T)), _.$on(
      "change",
      /*handleShapeSettingsChange*/
      i[47]
    ), _.$on(
      "close",
      /*handleShapeSettingsClose*/
      i[48]
    ), {
      c() {
        e = ae("div"), t = ae("canvas"), n = _e(), x && x.c(), s = _e(), k && k.c(), l = _e(), X && X.c(), o = _e(), W && W.c(), r = _e(), S && S.c(), a = _e(), Fe(c.$$.fragment), d = _e(), Fe(_.$$.fragment), N(t, "tabindex", "0"), N(t, "class", "canvas-annotator svelte-eg64j9"), qe(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[22]
        ), N(e, "class", "canvas-container svelte-eg64j9"), N(e, "tabindex", "-1"), vl(
          e,
          "height",
          /*height*/
          i[6]
        ), vl(
          e,
          "width",
          /*width*/
          i[7]
        ), qe(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[22]
        );
      },
      m(C, L) {
        pn(C, e, L), F(e, t), i[74](t), F(e, n), x && x.m(e, null), pn(C, s, L), k && k.m(C, L), pn(C, l, L), X && X.m(C, L), pn(C, o, L), W && W.m(C, L), pn(C, r, L), S && S.m(C, L), pn(C, a, L), Oe(c, C, L), pn(C, d, L), Oe(_, C, L), y = !0, w || (Y = [
          Ie(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[36]
          ),
          Ie(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[37]
          ),
          Ie(t, "pointermove", function() {
            $v(
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
          Ie(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[55]
          ),
          Ie(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[39]
          ),
          Ie(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[62]
          ),
          Ie(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[63]
          )
        ], w = !0);
      },
      p(C, L) {
        i = C, (!y || L[0] & /*isScrollableMode*/
        4194304) && qe(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[22]
        ), /*showPositionNavigator*/
        i[14] && /*imageWidth*/
        i[20] > 0 && /*imageHeight*/
        i[21] > 0 ? x ? (x.p(i, L), L[0] & /*showPositionNavigator, imageWidth, imageHeight*/
        3162112 && he(x, 1)) : (x = Hc(i), x.c(), he(x, 1), x.m(e, null)) : x && (ki(), me(x, 1, 1, () => {
          x = null;
        }), wi()), (!y || L[0] & /*height*/
        64) && vl(
          e,
          "height",
          /*height*/
          i[6]
        ), (!y || L[0] & /*width*/
        128) && vl(
          e,
          "width",
          /*width*/
          i[7]
        ), (!y || L[0] & /*isScrollableMode*/
        4194304) && qe(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[22]
        ), /*interactive*/
        i[4] ? k ? (k.p(i, L), L[0] & /*interactive*/
        16 && he(k, 1)) : (k = Lc(i), k.c(), he(k, 1), k.m(l.parentNode, l)) : k && (ki(), me(k, 1, 1, () => {
          k = null;
        }), wi()), /*editModalVisible*/
        i[23] ? X ? (X.p(i, L), L[0] & /*editModalVisible*/
        8388608 && he(X, 1)) : (X = Ic(i), X.c(), he(X, 1), X.m(o.parentNode, o)) : X && (ki(), me(X, 1, 1, () => {
          X = null;
        }), wi()), /*newModalVisible*/
        i[24] ? W ? (W.p(i, L), L[0] & /*newModalVisible*/
        16777216 && he(W, 1)) : (W = Ac(i), W.c(), he(W, 1), W.m(r.parentNode, r)) : W && (ki(), me(W, 1, 1, () => {
          W = null;
        }), wi()), /*editDefaultLabelVisible*/
        i[25] ? S ? (S.p(i, L), L[0] & /*editDefaultLabelVisible*/
        33554432 && he(S, 1)) : (S = jc(i), S.c(), he(S, 1), S.m(a.parentNode, a)) : S && (ki(), me(S, 1, 1, () => {
          S = null;
        }), wi());
        const le = {};
        !f && L[0] & /*eraserSettingsVisible*/
        67108864 && (f = !0, le.visible = /*eraserSettingsVisible*/
        i[26], $i(() => f = !1)), !u && L[0] & /*eraserSize*/
        268435456 && (u = !0, le.eraserSize = /*eraserSize*/
        i[28], $i(() => u = !1)), c.$set(le);
        const G = {};
        !p && L[0] & /*shapeSettingsVisible*/
        134217728 && (p = !0, G.visible = /*shapeSettingsVisible*/
        i[27], $i(() => p = !1)), !g && L[0] & /*shapeOpacity*/
        536870912 && (g = !0, G.opacity = /*shapeOpacity*/
        i[29], $i(() => g = !1)), !h && L[0] & /*shapeStrokeWidth*/
        1073741824 && (h = !0, G.strokeWidth = /*shapeStrokeWidth*/
        i[30], $i(() => h = !1)), !b && L[1] & /*shapeSelectedStrokeWidth*/
        1 && (b = !0, G.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
        i[31], $i(() => b = !1)), _.$set(G);
      },
      i(C) {
        y || (he(x), he(k), he(X), he(W), he(S), he(c.$$.fragment, C), he(_.$$.fragment, C), y = !0);
      },
      o(C) {
        me(x), me(k), me(X), me(W), me(S), me(c.$$.fragment, C), me(_.$$.fragment, C), y = !1;
      },
      d(C) {
        C && (gn(e), gn(s), gn(l), gn(o), gn(r), gn(a), gn(d)), i[74](null), x && x.d(), k && k.d(C), X && X.d(C), W && W.d(C), S && S.d(C), Te(c, C), Te(_, C), w = !1, hu(Y);
      }
    }
  );
}
const lw = 50, ow = 3, $o = 3;
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
function aw(i, e, t) {
  let n;
  var s;
  (function(m) {
    m[m.creation = 0] = "creation", m[m.drag = 1] = "drag", m[m.freehand = 2] = "freehand", m[m.circle = 3] = "circle", m[m.polygon = 4] = "polygon", m[m.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, f = !1, u = !1, { imageUrl: d = null } = e, { interactive: _ } = e, { boxMinSize: p = 10 } = e, { handleSize: g } = e, { value: h } = e, { choices: b = [] } = e, { choicesColors: y = [] } = e, { disableEditBoxes: w = !1 } = e, { height: Y = "100%" } = e, { width: x = "100%" } = e, { singleBox: k = !1 } = e, { showRemoveButton: X = null } = e, { handlesCursor: W = !0 } = e, { useDefaultLabel: S = !1 } = e, { shapeCreationMode: v = "drag" } = e, { autoScroll: E = !0 } = e, { preserveResolution: B = !0 } = e;
  X === null && (X = w);
  let M, j, P = null, T = -1, Z = s.drag, C = new Gv(oe), L, le = 0, G = 0, U = 1;
  function ge(m) {
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
  h !== null && h.boxes && h.boxes.length == 0 ? Z = ge(v) : h !== null && h.boxes && h.boxes.length > 0 ? Z = v === "drag" ? s.drag : ge(v) : Z = ge(v);
  let J = 0, q = 0, pe = 0, R = 0, I = 1, ne = 0, Q = 0, xe = 0, De = 0, H = !1, Ue = !1, Se = !1, He = !1, Ne = !1, nt = !1, ce = null, Ve = 10, { boxAlpha: ft = 0.5 } = e, be = ft, Me = 2, Re = 4, D = S, de = { label: "", color: "" };
  const ve = iw();
  function oe() {
    if (j) {
      if (t(17, le = C.offsetX), t(18, G = C.offsetY), t(19, U = C.scale), j.clearRect(0, 0, M.width, M.height), j.save(), j.translate(C.offsetX, C.offsetY), j.scale(C.scale, C.scale), P !== null && h !== null) {
        switch (h.orientation) {
          case 0:
            j.drawImage(P, 0, 0, ne, Q);
            break;
          case 1:
            j.translate(ne, 0), j.rotate(Math.PI / 2), j.drawImage(P, 0, 0, Q, ne);
            break;
          case 2:
            j.translate(ne, Q), j.rotate(Math.PI), j.drawImage(P, 0, 0, ne, Q);
            break;
          case 3:
            j.translate(0, Q), j.rotate(-Math.PI / 2), j.drawImage(P, 0, 0, Q, ne);
            break;
        }
        j.restore();
      }
      if (h !== null && h.boxes)
        for (const m of h.boxes.slice().reverse())
          m.render(j, c);
      Z === s.erase && L && L.renderErasePath(j);
    }
  }
  function Ze(m) {
    t(16, T = m), h !== null && h.boxes && (h.boxes.forEach((z) => {
      z.setSelected(!1);
    }), m >= 0 && m < h.boxes.length && h.boxes[m].setSelected(!0)), oe();
  }
  function yt(m) {
    _ && (a = !1, m.target instanceof Element && m.target.hasPointerCapture(m.pointerId) && m.target.releasePointerCapture(m.pointerId), Z === s.creation ? vt(m) : Z === s.freehand ? Pn(m) : Z === s.circle ? _s(m) : Z === s.polygon ? Fs(m) : Z === s.erase ? Ts(m) : Z === s.drag && an(m));
  }
  function ut(m, z) {
    let A, O;
    return H ? (A = (m - C.offsetX) / C.scale, O = (z - C.offsetY) / C.scale) : (A = (m - C.offsetX) / I / C.scale, O = (z - C.offsetY) / I / C.scale), { imageX: A, imageY: O };
  }
  function an(m) {
    const z = ui(m, M), A = z.mouseX, O = z.mouseY;
    let V = !1;
    if (!(h === null || !h.boxes)) {
      for (const [ee, te] of h.boxes.entries()) {
        const _t = te.indexOfPointInsideHandle(A, O);
        if (_t >= 0) {
          V = !0, Ze(ee);
          let cn = null;
          te.onMoveStart = () => {
            cn = Le(te);
          }, te.onMoveEnd = () => {
            if (cn) {
              const ms = Le(te);
              Et({
                type: "edit_shape",
                shapeIndex: ee,
                oldShapeData: cn,
                shapeData: ms
              }), cn = null;
            }
          }, te.startResize(_t, m);
          return;
        }
      }
      for (const [ee, te] of h.boxes.entries())
        if (te.isPointInsideBox(A, O)) {
          V = !0, Ze(ee);
          let _t = null;
          te.onMoveStart = () => {
            _t = Le(te);
          }, te.onMoveEnd = () => {
            _t && (Et({
              type: "edit_shape",
              shapeIndex: ee,
              oldShapeData: _t,
              shapeData: Le(te)
            }), _t = null);
          }, te.startDrag(m);
          return;
        }
      if (!V) {
        if (k || Ze(-1), Z === s.drag) {
          const ee = ut(A, O);
          let te = ee.imageX, _t = ee.imageY;
          const cn = H ? xe : (P == null ? void 0 : P.naturalWidth) || 0, ms = H ? De : (P == null ? void 0 : P.naturalHeight) || 0;
          P && te >= 0 && te <= cn && _t >= 0 && _t <= ms && ve("select", {
            coordinates: [Math.round(te), Math.round(_t)]
          });
        }
        Z === s.drag && C.startDrag(m);
      }
    }
  }
  function Ii(m) {
    Z === s.erase && L && Je(), ve("change");
  }
  function rn(m) {
    if (h === null)
      return;
    if (Z === s.erase && L) {
      Ge(m);
      return;
    }
    if (Z !== s.drag)
      return;
    const z = ui(m, M), A = z.mouseX, O = z.mouseY;
    for (const [V, ee] of h.boxes.entries()) {
      const te = ee.indexOfPointInsideHandle(A, O);
      if (te >= 0) {
        t(11, M.style.cursor = ee.resizeHandles[te].cursor, M);
        return;
      }
    }
    t(11, M.style.cursor = "default", M);
  }
  function Ct(m) {
    if (_) {
      if (m.ctrlKey) {
        switch (m.key.toLowerCase()) {
          case "z":
            m.shiftKey ? si() : Ln(), m.preventDefault();
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
          Z === s.polygon && ce && ce.isCreating && (m.preventDefault(), ce._points.length >= ce.minPoints && ce.finishCreating());
          break;
      }
    }
  }
  function Tt(m) {
    m.preventDefault();
    const z = 1 / (1 + m.deltaY / 1e3 * 0.5), A = parseFloat((C.scale * z).toFixed(2));
    let O = 0.1;
    if (P !== null && M) {
      const nh = M.width / ne, ih = M.height / Q;
      O = Math.max(0.1, Math.min(nh, ih));
    }
    const V = A < O ? O : A, ee = M.getBoundingClientRect(), te = m.clientX - ee.left, _t = m.clientY - ee.top, cn = (te - C.offsetX) / C.scale, ms = (_t - C.offsetY) / C.scale;
    C.offsetX = te - cn * V, C.offsetY = _t - ms * V, C.scale = V, C.clampOffsets(), oe();
  }
  function Rn(m) {
    const { x: z, y: A } = m.detail, O = 0, V = M.width - ne * C.scale, ee = 0, te = M.height - Q * C.scale;
    C.offsetX = Math.max(V, Math.min(O, z)), C.offsetY = Math.max(te, Math.min(ee, A)), oe();
  }
  function Hn() {
    if (C.scale = 1, P !== null && M) {
      if (C.imageRotatedWidth <= M.width) {
        const m = (M.width - ne) / 2;
        C.offsetX = m;
      } else
        C.offsetX = 0;
      if (Q < M.height) {
        const m = (M.height - Q) / 2;
        C.offsetY = m;
      } else
        C.offsetY = 0;
    } else
      C.offsetX = 0, C.offsetY = 0;
    oe();
  }
  function Et(m) {
    if (a) {
      console.log("Skipping undo action during initial state:", m);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, m), { timestamp: Date.now() })), l.length > lw && l.shift(), console.log("Added undo action:", m, "Stack size:", l.length);
  }
  function Ln() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let z = r.length - 1; z >= 0; z--) {
        const A = r[z];
        if (A.recoveryCount < $o) {
          h.boxes.map((O) => Le(O)), t(0, h.boxes = [], h);
          for (const O of A.allShapes) {
            const V = dt(O);
            V && h.boxes.push(V);
          }
          A.recoveryCount++, A.recoveryCount >= $o && (r.splice(z, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${h.boxes.length} shapes from pre-clear history. Recovery ${A.recoveryCount}/${$o}`), Ze(-1), oe(), ve("change");
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
          if (m.shapeIndex !== void 0 && m.shapeIndex < h.boxes.length) {
            const z = h.boxes.splice(m.shapeIndex, 1)[0];
            o.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Le(z),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const z = dt(m.shapeData);
            h.boxes.splice(m.shapeIndex, 0, z), o.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (ce && m.pointData) {
            if (ce._points.pop(), ce._points.length === 0) {
              const z = h.boxes.indexOf(ce);
              z >= 0 && h.boxes.splice(z, 1), ce = null;
            } else
              ce.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: m.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.oldShapeData && m.shapeIndex < h.boxes.length) {
            const z = Le(h.boxes[m.shapeIndex]);
            dt(m.oldShapeData, h.boxes[m.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: z,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", m);
            const z = h.boxes.map((A) => Le(A));
            t(0, h.boxes = [], h);
            for (const A of m.oldShapeData) {
              const O = dt(A);
              O && h.boxes.push(O);
            }
            console.log("Restored shapes:", h.boxes.length), o.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: z,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      Ze(-1), oe(), ve("change");
    }
  }
  function si() {
    if (o.length === 0) return;
    const m = o.pop();
    if (m) {
      switch (m.type) {
        case "create_shape":
          if (m.shapeIndex !== void 0 && m.shapeIndex < h.boxes.length) {
            const z = h.boxes.splice(m.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Le(z),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const z = dt(m.shapeData);
            h.boxes.splice(m.shapeIndex, 0, z), l.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          m.pointData && (ce ? (ce._points.push(m.pointData), ce._points.length === 1 && !h.boxes.includes(ce) && (k ? t(0, h.boxes = [ce], h) : t(0, h.boxes = [ce, ...h.boxes], h)), ce.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: m.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.shapeData && m.shapeIndex < h.boxes.length) {
            const z = Le(h.boxes[m.shapeIndex]);
            dt(m.shapeData, h.boxes[m.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: z,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.shapeData) {
            const z = h.boxes.map((A) => Le(A));
            t(0, h.boxes = [], h);
            for (const A of m.shapeData) {
              const O = dt(A);
              O && h.boxes.push(O);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: z,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      Ze(-1), oe(), ve("change");
    }
  }
  function Le(m) {
    return m ? m instanceof ei ? {
      type: "freehand",
      points: [...m._points],
      label: m.label,
      color: m.color,
      xmin: m.xmin,
      ymin: m.ymin,
      xmax: m.xmax,
      ymax: m.ymax
    } : m instanceof sn ? {
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
  function dt(m, z) {
    if (!m) return null;
    if (z)
      return z.label = m.label, z.color = m.color, z instanceof di ? (z._xmin = m.xmin, z._ymin = m.ymin, z._xmax = m.xmax, z._ymax = m.ymax, typeof z.applyUserScale == "function" && z.applyUserScale()) : z instanceof _i ? (z._centerX = m.centerX, z._centerY = m.centerY, z._radius = m.radius, typeof z.applyUserScale == "function" && z.applyUserScale()) : (z.xmin = m.xmin, z.ymin = m.ymin, z.xmax = m.xmax, z.ymax = m.ymax), (z instanceof ei || z instanceof sn) && m.points && (z._points = [...m.points], z.updateBoundingBox()), z;
    switch (m.type) {
      case "freehand":
        const A = new ei(oe, Zt, C, M, J, q, pe, R, m.label, m.color, be, p, g, Me, Re, I);
        return A._points = [...m.points], A.updateBoundingBox(), A;
      case "polygon":
        const O = new sn(oe, Zt, C, M, J, q, pe, R, m.label, m.color, be, p, g, Me, Re, I);
        return O._points = [...m.points], O.updateBoundingBox(), O;
      case "circle":
        return new _i(oe, Zt, C, M, J, q, pe, R, m.label, m.centerX, m.centerY, m.radius, m.color, be, p, g, Me, Re, I);
      case "box":
        return new di(oe, Zt, C, M, J, q, pe, R, m.label, m.xmin, m.ymin, m.xmax, m.ymax, m.color, be, p, g, Me, Re, I);
    }
    return null;
  }
  function Pn(m) {
    const z = ui(m, M), A = ut(z.mouseX, z.mouseY);
    M.getBoundingClientRect();
    let O;
    y.length > 0 ? O = fi(y[0]) : k ? h.boxes.length > 0 ? O = h.boxes[0].color : O = gt[0] : O = gt[h.boxes.length % gt.length];
    let V = new ei(oe, Zt, C, M, J, q, pe, R, "", O, be, p, g, Me, Re, I);
    V.startCreating(m, A.imageX, A.imageY), k ? t(0, h.boxes = [V], h) : t(0, h.boxes = [V, ...h.boxes], h), Et({ type: "create_shape", shapeIndex: 0 }), Ze(0), oe(), ve("change");
  }
  function Fs(m) {
    ce && (!ce._points || ce._points.length === 0 || !h.boxes.includes(ce)) && (console.log("Resetting invalid currentPolygon state"), ce = null), ce === null ? Ai(m) : ce.isCreating && (ce.addPoint(m) || (oe(), ve("change")));
  }
  function Ai(m) {
    const z = ui(m, M), A = ut(z.mouseX, z.mouseY);
    M.getBoundingClientRect();
    let O;
    y.length > 0 ? O = fi(y[0]) : k ? h.boxes.length > 0 ? O = h.boxes[0].color : O = gt[0] : O = gt[h.boxes.length % gt.length];
    let V = new sn(oe, yu, C, M, J, q, pe, R, "", O, be, p, g, Me, Re, I);
    V.onPointAdded = (ee) => {
      Et({ type: "polygon_point", pointData: ee });
    }, ce = V, V.startCreating(m, A.imageX, A.imageY), k ? t(0, h.boxes = [V], h) : t(0, h.boxes = [V, ...h.boxes], h), Et({ type: "create_shape", shapeIndex: 0 }), Ze(0), oe(), ve("change");
  }
  function vt(m) {
    const z = ui(m, M), A = ut(z.mouseX, z.mouseY);
    let O = A.imageX, V = A.imageY, ee;
    y.length > 0 ? ee = fi(y[0]) : k ? h.boxes.length > 0 ? ee = h.boxes[0].color : ee = gt[0] : ee = gt[h.boxes.length % gt.length];
    let te = new di(oe, Zt, C, M, J, q, pe, R, "", O, V, O, V, ee, be, p, g, Me, Re, I);
    te.startCreating(m, O, V), k ? t(0, h.boxes = [te], h) : t(0, h.boxes = [te, ...h.boxes], h), Et({ type: "create_shape", shapeIndex: 0 }), Ze(0), oe(), ve("change");
  }
  function _s(m) {
    const z = ui(m, M), A = ut(z.mouseX, z.mouseY);
    let O = A.imageX, V = A.imageY, ee;
    y.length > 0 ? ee = fi(y[0]) : k ? h.boxes.length > 0 ? ee = h.boxes[0].color : ee = gt[0] : ee = gt[h.boxes.length % gt.length];
    let te = new _i(oe, Zt, C, M, J, q, pe, R, "", O, V, 0, ee, be, p, g, Me, Re, I);
    te.startCreating(m, O, V), k ? t(0, h.boxes = [te], h) : t(0, h.boxes = [te, ...h.boxes], h), Et({ type: "create_shape", shapeIndex: 0 }), Ze(0), oe(), ve("change");
  }
  function Ts(m) {
    L || (L = new Zv(C, I, H), L.setBrushSize(Ve)), L.setScaleFactor(I), L.setScrollableMode(H);
    const z = M.getBoundingClientRect();
    L.startErase(m, z), oe();
  }
  function Ge(m) {
    if (!L) return;
    const z = M.getBoundingClientRect();
    L.continueErase(m, z), oe();
  }
  function Je() {
    if (!L) return;
    const m = L.endErase();
    if (m.length === 0) {
      qn();
      return;
    }
    const z = [...h.boxes], A = [], O = [];
    for (let V = 0; V < h.boxes.length; V++) {
      const ee = h.boxes[V], te = L.eraseFromShape(ee, m);
      if (te.length === 0)
        A.push(V);
      else {
        if (te.length === 1 && te[0] === ee)
          continue;
        A.push(V), O.push(...te);
      }
    }
    if (A.length > 0 || O.length > 0) {
      for (let V = A.length - 1; V >= 0; V--)
        h.boxes.splice(A[V], 1);
      h.boxes.push(...O), Et({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: z.map((V) => Le(V)),
        shapeData: h.boxes.map((V) => Le(V))
      }), Ze(-1), ve("change");
    }
    oe(), qn();
  }
  function $() {
    t(26, Ne = !0);
  }
  function it(m) {
    t(28, Ve = m.detail.size), L && L.setBrushSize(Ve);
  }
  function Os() {
    t(26, Ne = !1);
  }
  function bu() {
    t(27, nt = !0);
  }
  function vu(m) {
    t(29, be = m.detail.opacity), t(30, Me = m.detail.strokeWidth), t(31, Re = m.detail.selectedStrokeWidth), ku(), oe();
  }
  function wu() {
    t(27, nt = !1);
  }
  function ku() {
    for (let m of h.boxes) {
      const z = m;
      z.alpha !== void 0 && (z.alpha = be), z.thickness !== void 0 && (z.thickness = Me), z.selectedThickness !== void 0 && (z.selectedThickness = Re);
    }
  }
  function Us() {
    t(12, Z = s.creation), t(11, M.style.cursor = "crosshair", M), ce = null, ve("tool_selected", { tool: "box", timestamp: Date.now() });
  }
  function Ea() {
    t(12, Z = s.freehand), t(11, M.style.cursor = "crosshair", M), ce = null, ve("tool_selected", { tool: "freehand", timestamp: Date.now() });
  }
  function Ra() {
    t(12, Z = s.circle), t(11, M.style.cursor = "crosshair", M), ce = null, ve("tool_selected", { tool: "circle", timestamp: Date.now() });
  }
  function Ha() {
    t(12, Z = s.polygon), t(11, M.style.cursor = "crosshair", M), ve("tool_selected", { tool: "polygon", timestamp: Date.now() });
  }
  function La() {
    t(12, Z = s.erase), t(11, M.style.cursor = "crosshair", M), ce = null, ve("tool_selected", { tool: "eraser", timestamp: Date.now() });
  }
  function qn() {
    t(12, Z = s.drag), t(11, M.style.cursor = "default", M), ce = null, ve("tool_selected", { tool: "pan", timestamp: Date.now() });
  }
  function Zt() {
    T >= 0 && T < h.boxes.length && (h.boxes[T].getArea() < 1 ? li() : (w || (D ? qa() : t(24, Se = !0)), k && qn()));
  }
  function yu() {
    ce = null, T >= 0 && T < h.boxes.length && (h.boxes[T].getArea() < 1 ? li() : (w || (D ? qa() : t(24, Se = !0)), qn()));
  }
  function Cu() {
    T >= 0 && T < h.boxes.length && !w && t(23, Ue = !0);
  }
  function Su(m) {
    if (!_)
      return;
    const z = ui(m, M), A = z.mouseX, O = z.mouseY;
    let V = !1;
    for (const [ee, te] of h.boxes.entries())
      if (te.isPointInsideBox(A, O)) {
        V = !0, Ze(ee), Cu();
        break;
      }
    V || Hn();
  }
  function Pa(m, z) {
    const A = b.findIndex((O) => O[0] === m);
    A === -1 ? (b.push([m, b.length]), y.push(z), t(1, b), t(2, y), console.log(`Added custom label "${m}" with color ${z} to choices`)) : y[A] !== z && (t(2, y[A] = z, y), t(2, y), console.log(`Updated color for existing label "${m}" to ${z}`));
  }
  function Mu(m) {
    t(23, Ue = !1);
    const { detail: z } = m;
    let A = z.label, O = z.color, V = z.opacity, ee = z.ret;
    if (T >= 0 && T < h.boxes.length) {
      let te = h.boxes[T];
      if (ee == 1) {
        const _t = Le(te);
        Pa(A, O), te.label = A, te.color = fi(O), V !== void 0 && (te.alpha = V);
        const cn = Le(te);
        Et({
          type: "edit_shape",
          shapeIndex: T,
          oldShapeData: _t,
          shapeData: cn
        }), oe(), ve("change");
      } else ee == -1 && li();
    }
    setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function Wu(m) {
    t(24, Se = !1);
    const { detail: z } = m;
    let A = z.label, O = z.color, V = z.ret, ee = z.lock;
    if (T >= 0 && T < h.boxes.length) {
      let te = h.boxes[T];
      V == 1 ? (Pa(A, O), t(32, D = ee), de.label = A, de.color = O, te.label = A, te.color = fi(O), oe(), ve("change"), qn()) : li();
    }
    setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function zu(m) {
    t(25, He = !1);
    const { detail: z } = m;
    let A = z.label, O = z.color, V = z.ret, ee = z.lock;
    V == 1 && (t(32, D = ee), de.label = A, de.color = O), setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function qa() {
    if (T >= 0 && T < h.boxes.length) {
      let m = h.boxes[T];
      m.label = de.label, de.color !== "" && (m.color = fi(de.color)), oe(), ve("change"), qn();
    }
    setTimeout(
      () => {
        M && (M.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function li() {
    if (T >= 0 && T < h.boxes.length) {
      const m = h.boxes[T], z = Le(m);
      Et({
        type: "delete_shape",
        shapeIndex: T,
        shapeData: z
      }), h.boxes.splice(T, 1), Ze(-1), k && Us(), ve("change");
    }
  }
  function Ia() {
    if (h.boxes.length === 0) return;
    const m = h.boxes.map((z) => Le(z));
    for (r.push({
      allShapes: m,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > ow; )
      r.shift();
    t(0, h.boxes = [], h), Ze(-1), ce = null, k && Us(), oe(), ve("change"), console.log(`Cleared ${m.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function Aa() {
    if (!P || !M) {
      console.error("No image or canvas available for export");
      return;
    }
    const m = document.createElement("canvas"), z = m.getContext("2d");
    if (!z) {
      console.error("Could not get export canvas context");
      return;
    }
    m.width = xe || P.naturalWidth, m.height = De || P.naturalHeight, z.drawImage(P, 0, 0, m.width, m.height);
    const A = C.scale, O = C.offsetX, V = C.offsetY;
    C.scale = 1, C.offsetX = 0, C.offsetY = 0;
    for (const ee of h.boxes) {
      const te = ee.scaleFactor;
      ee.scaleFactor = 1, "applyUserScale" in ee && typeof ee.applyUserScale == "function" && typeof ee.applyUserScale == "function" && ee.applyUserScale(), ee.render(z, c), ee.scaleFactor = te, "applyUserScale" in ee && typeof ee.applyUserScale == "function" && typeof ee.applyUserScale == "function" && ee.applyUserScale();
    }
    C.scale = A, C.offsetX = O, C.offsetY = V, m.toBlob(
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
  function Ns() {
    if (M) {
      if (I = 1, t(11, M.width = M.clientWidth, M), C.setRotatedImage(P), P !== null) {
        xe = C.imageRotatedWidth, De = C.imageRotatedHeight;
        const z = (h == null ? void 0 : h.scrollable_mode) || E && B && (C.imageRotatedWidth > M.clientWidth || C.imageRotatedHeight > (typeof Y == "number" ? Y : 800));
        if (t(22, H = z), H && !f && t(14, f = !0), H && B) {
          t(20, ne = C.imageRotatedWidth), t(21, Q = C.imageRotatedHeight);
          const A = typeof Y == "number" ? Y : 800;
          t(11, M.height = A, M), J = 0, q = 0, pe = M.width, R = M.height, I = 1, (C.offsetX === void 0 || C.offsetY === void 0) && (C.offsetX = (M.width - ne) / 2, C.offsetY = (M.height - Q) / 2, ne > M.width && (C.offsetX = 0), Q > M.height && (C.offsetY = 0));
        } else if (C.imageRotatedWidth > M.width)
          I = M.width / C.imageRotatedWidth, t(20, ne = Math.round(C.imageRotatedWidth * I)), t(21, Q = Math.round(C.imageRotatedHeight * I)), J = 0, q = 0, pe = ne, R = Q, t(11, M.height = Q, M);
        else {
          t(20, ne = C.imageRotatedWidth), t(21, Q = C.imageRotatedHeight);
          var m = (M.width - ne) / 2;
          J = m, q = 0, pe = m + ne, R = Q, t(11, M.height = Q, M);
        }
        C.imageWidth = ne, C.imageHeight = Q;
      } else
        J = 0, q = 0, pe = M.width, R = M.height, t(11, M.height = M.clientHeight, M), t(22, H = !1);
      if (C.resize(M.width, M.height, J, q), pe > 0 && R > 0)
        for (const z of h.boxes)
          z.canvasXmin = J, z.canvasYmin = q, z.canvasXmax = pe, z.canvasYmax = R, z.setScaleFactor(I);
      oe(), ve("change");
    }
  }
  const Xu = new ResizeObserver(Ns);
  function Yu() {
    if (!(h === null || !h.boxes))
      for (let m = 0; m < h.boxes.length; m++) {
        let z = h.boxes[m];
        if (!(z instanceof di) && !(z instanceof ei) && !(z instanceof sn) && !(z instanceof _i)) {
          let A = "", O = "";
          if (z.hasOwnProperty("color") ? (A = z.color, Array.isArray(A) && A.length === 3 && (A = `rgb(${A[0]}, ${A[1]}, ${A[2]})`)) : A = gt[m % gt.length], z.hasOwnProperty("label") && (O = z.label), z.hasOwnProperty("type") && z.type === "freehand" && z.hasOwnProperty("points")) {
            let V = new ei(oe, Zt, C, M, J, q, pe, R, O, A, be, p, g, Me, Re, I);
            V._points = z.points, V.updateBoundingBox(), z = V;
          } else if (z.hasOwnProperty("type") && z.type === "circle" && z.hasOwnProperty("centerX") && z.hasOwnProperty("centerY") && z.hasOwnProperty("radius"))
            z = new _i(oe, Zt, C, M, J, q, pe, R, O, z.centerX, z.centerY, z.radius, A, be, p, g, Me, Re, I);
          else if (z.hasOwnProperty("type") && z.type === "polygon" && z.hasOwnProperty("points")) {
            let V = new sn(oe, Zt, C, M, J, q, pe, R, O, A, be, p, g, Me, Re, I);
            V._points = z.points, V.updateBoundingBox(), z = V;
          } else
            z = new di(oe, Zt, C, M, J, q, pe, R, O, z.xmin, z.ymin, z.xmax, z.ymax, A, be, p, g, Me, Re);
          t(0, h.boxes[m] = z, h);
        }
      }
  }
  function ja() {
    d !== null ? (P === null || P.src != d) && (t(15, P = new Image()), t(15, P.src = d, P), t(
      15,
      P.onload = function() {
        Ns(), oe();
      },
      P
    )) : t(15, P = null);
  }
  tw(() => {
    if (a = !0, Array.isArray(b) && b.length > 0) {
      if (!Array.isArray(y) || y.length == 0)
        for (let m = 0; m < b.length; m++) {
          let z = gt[m % gt.length];
          y.push(Ei(z));
        }
      de.label = b[0][0], de.color = y[0];
    }
    j = M.getContext("2d"), Xu.observe(M), T < 0 && h !== null && h.boxes.length > 0 && Ze(0), ja(), Ns(), oe(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function xu() {
    document.addEventListener("keydown", Ct);
  }
  function Du() {
    document.removeEventListener("keydown", Ct);
  }
  nw(() => {
    document.removeEventListener("keydown", Ct);
  });
  function Bu(m) {
    mi[m ? "unshift" : "push"](() => {
      M = m, t(11, M), t(0, h), t(73, u), t(69, v), t(12, Z), t(9, s);
    });
  }
  const Eu = () => Us(), Ru = () => Ea(), Hu = () => Ra(), Lu = () => Ha(), Pu = () => La(), qu = () => qn(), Iu = () => li(), Au = () => t(25, He = !0), ju = () => Ln(), Fu = () => si(), Tu = () => {
    t(10, c = !c), oe();
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
    Ne = m, t(26, Ne);
  }
  function Ju(m) {
    Ve = m, t(28, Ve);
  }
  function Qu(m) {
    nt = m, t(27, nt);
  }
  function $u(m) {
    be = m, t(29, be), t(72, ft);
  }
  function eh(m) {
    Me = m, t(30, Me);
  }
  function th(m) {
    Re = m, t(31, Re);
  }
  return i.$$set = (m) => {
    "imageUrl" in m && t(64, d = m.imageUrl), "interactive" in m && t(4, _ = m.interactive), "boxMinSize" in m && t(65, p = m.boxMinSize), "handleSize" in m && t(66, g = m.handleSize), "value" in m && t(0, h = m.value), "choices" in m && t(1, b = m.choices), "choicesColors" in m && t(2, y = m.choicesColors), "disableEditBoxes" in m && t(5, w = m.disableEditBoxes), "height" in m && t(6, Y = m.height), "width" in m && t(7, x = m.width), "singleBox" in m && t(67, k = m.singleBox), "showRemoveButton" in m && t(3, X = m.showRemoveButton), "handlesCursor" in m && t(8, W = m.handlesCursor), "useDefaultLabel" in m && t(68, S = m.useDefaultLabel), "shapeCreationMode" in m && t(69, v = m.shapeCreationMode), "autoScroll" in m && t(70, E = m.autoScroll), "preserveResolution" in m && t(71, B = m.preserveResolution), "boxAlpha" in m && t(72, ft = m.boxAlpha);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    1024 && t(33, n = c), i.$$.dirty[0] & /*value, canvas, mode, Mode*/
    6657 | i.$$.dirty[2] & /*initialized, shapeCreationMode*/
    2176 && (h !== null && h.boxes && h.boxes.length === 0 && !u || !u && v) && (t(12, Z = ge(v)), t(73, u = !0), M && t(11, M.style.cursor = Z === s.drag ? "default" : "crosshair", M)), i.$$.dirty[0] & /*value*/
    1 && h !== null && h.boxes && h.boxes.length === 0 && t(73, u = !1), i.$$.dirty[2] & /*boxAlpha*/
    1024 && t(29, be = ft), i.$$.dirty[0] & /*value*/
    1 && (h !== null && (C.orientation = h.orientation), ja(), Yu(), Ns(), oe());
  }, [
    h,
    b,
    y,
    X,
    _,
    w,
    Y,
    x,
    W,
    s,
    c,
    M,
    Z,
    o,
    f,
    P,
    T,
    le,
    G,
    U,
    ne,
    Q,
    H,
    Ue,
    Se,
    He,
    Ne,
    nt,
    Ve,
    be,
    Me,
    Re,
    D,
    n,
    l,
    oe,
    yt,
    Ii,
    rn,
    Tt,
    Rn,
    Ln,
    si,
    $,
    it,
    Os,
    bu,
    vu,
    wu,
    Us,
    Ea,
    Ra,
    Ha,
    La,
    qn,
    Su,
    Mu,
    Wu,
    zu,
    li,
    Ia,
    Aa,
    xu,
    Du,
    d,
    p,
    g,
    k,
    S,
    v,
    E,
    B,
    ft,
    u,
    Bu,
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
class rw extends Jv {
  constructor(e) {
    super(), Qv(
      this,
      e,
      aw,
      sw,
      ew,
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
  SvelteComponent: cw,
  add_flush_callback: fw,
  bind: uw,
  binding_callbacks: hw,
  create_component: dw,
  destroy_component: _w,
  init: mw,
  mount_component: gw,
  safe_not_equal: pw,
  transition_in: bw,
  transition_out: vw
} = window.__gradio__svelte__internal, { createEventDispatcher: ww } = window.__gradio__svelte__internal;
function kw(i) {
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
    i[0]), e = new rw({ props: l }), hw.push(() => uw(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[20]
    ), e.$on(
      "select",
      /*select_handler*/
      i[21]
    ), e.$on(
      "tool_selected",
      /*tool_selected_handler*/
      i[22]
    ), {
      c() {
        dw(e.$$.fragment);
      },
      m(a, c) {
        gw(e, a, c), n = !0;
      },
      p(a, [c]) {
        var u, d;
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
        ((u = a[0]) == null ? void 0 : u.auto_scroll) || !0), c & /*value*/
        1 && (f.preserveResolution = /*value*/
        ((d = a[0]) == null ? void 0 : d.preserve_resolution) || !0), c & /*resolved_src*/
        32768 && (f.imageUrl = /*resolved_src*/
        a[15]), !t && c & /*value*/
        1 && (t = !0, f.value = /*value*/
        a[0], fw(() => t = !1)), e.$set(f);
      },
      i(a) {
        n || (bw(e.$$.fragment, a), n = !0);
      },
      o(a) {
        vw(e.$$.fragment, a), n = !1;
      },
      d(a) {
        _w(e, a);
      }
    }
  );
}
function yw(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { height: f } = e, { width: u } = e, { value: d } = e, { disableEditBoxes: _ } = e, { singleBox: p } = e, { showRemoveButton: g } = e, { handlesCursor: h } = e, { useDefaultLabel: b } = e, { shapeCreationMode: y } = e, w, Y;
  const x = ww();
  function k(v) {
    d = v, t(0, d);
  }
  const X = () => x("change"), W = (v) => x("select", v.detail), S = (v) => x("tool_selected", v.detail);
  return i.$$set = (v) => {
    "src" in v && t(17, n = v.src), "interactive" in v && t(1, s = v.interactive), "boxesAlpha" in v && t(2, l = v.boxesAlpha), "labelList" in v && t(3, o = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, c = v.handleSize), "height" in v && t(7, f = v.height), "width" in v && t(8, u = v.width), "value" in v && t(0, d = v.value), "disableEditBoxes" in v && t(9, _ = v.disableEditBoxes), "singleBox" in v && t(10, p = v.singleBox), "showRemoveButton" in v && t(11, g = v.showRemoveButton), "handlesCursor" in v && t(12, h = v.handlesCursor), "useDefaultLabel" in v && t(13, b = v.useDefaultLabel), "shapeCreationMode" in v && t(14, y = v.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    393216) {
      t(15, w = n), t(18, Y = n);
      const v = n;
      T1(v).then((E) => {
        Y === v && t(15, w = E);
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
    u,
    _,
    p,
    g,
    h,
    b,
    y,
    w,
    x,
    n,
    Y,
    k,
    X,
    W,
    S
  ];
}
class Cw extends cw {
  constructor(e) {
    super(), mw(this, e, yw, kw, pw, {
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
  SvelteComponent: Sw,
  add_flush_callback: Fl,
  append: ts,
  attr: xs,
  bind: Tl,
  binding_callbacks: qs,
  bubble: Cs,
  check_outros: gi,
  create_component: Yn,
  create_slot: Mw,
  destroy_component: xn,
  detach: Xi,
  element: Hs,
  empty: Ww,
  get_all_dirty_from_scope: zw,
  get_slot_changes: Xw,
  group_outros: pi,
  init: Yw,
  insert: Yi,
  mount_component: Dn,
  noop: xw,
  safe_not_equal: Dw,
  space: hi,
  toggle_class: Tc,
  transition_in: We,
  transition_out: Pe,
  update_slot_base: Bw
} = window.__gradio__svelte__internal, { createEventDispatcher: Ew, tick: Rw } = window.__gradio__svelte__internal;
function Oc(i) {
  let e, t;
  return e = new n0({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Hw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Yn(e.$$.fragment);
    },
    m(n, s) {
      Dn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*value*/
      2 && (l.href = /*value*/
      n[1].image.url), s[0] & /*value*/
      2 && (l.download = /*value*/
      n[1].image.orig_name || "image"), s[0] & /*i18n*/
      256 | s[1] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xn(e, n);
    }
  };
}
function Hw(i) {
  let e, t;
  return e = new Ol({
    props: {
      Icon: D_,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Yn(e.$$.fragment);
    },
    m(n, s) {
      Dn(e, n, s), t = !0;
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
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xn(e, n);
    }
  };
}
function Uc(i) {
  let e, t;
  return e = new Im({
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
      Yn(e.$$.fragment);
    },
    m(n, s) {
      Dn(e, n, s), t = !0;
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
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xn(e, n);
    }
  };
}
function Nc(i) {
  let e, t, n;
  return t = new Ol({
    props: { Icon: cf, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[35]
  ), {
    c() {
      e = Hs("div"), Yn(t.$$.fragment);
    },
    m(s, l) {
      Yi(s, e, l), Dn(t, e, null), n = !0;
    },
    p: xw,
    i(s) {
      n || (We(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Pe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Xi(e), xn(t);
    }
  };
}
function Vc(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Mw(
    t,
    i,
    /*$$scope*/
    i[56],
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
      33554432) && Bw(
        n,
        t,
        s,
        /*$$scope*/
        s[56],
        e ? Xw(
          t,
          /*$$scope*/
          s[56],
          l,
          null
        ) : zw(
          /*$$scope*/
          s[56]
        ),
        null
      );
    },
    i(s) {
      e || (We(n, s), e = !0);
    },
    o(s) {
      Pe(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Lw(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Vc(i)
  );
  return {
    c() {
      n && n.c(), e = Ww();
    },
    m(s, l) {
      n && n.m(s, l), Yi(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && We(n, 1)) : (n = Vc(s), n.c(), We(n, 1), n.m(e.parentNode, e)) : n && (pi(), Pe(n, 1, 1, () => {
        n = null;
      }), gi());
    },
    i(s) {
      t || (We(n), t = !0);
    },
    o(s) {
      Pe(n), t = !1;
    },
    d(s) {
      s && Xi(e), n && n.d(s);
    }
  };
}
function Kc(i) {
  let e, t;
  return e = new Wg({
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
      Yn(e.$$.fragment);
    },
    m(n, s) {
      Dn(e, n, s), t = !0;
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
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xn(e, n);
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
    i[1]), t = new Cw({ props: o }), qs.push(() => Tl(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), t.$on(
      "tool_selected",
      /*tool_selected_handler*/
      i[54]
    ), {
      c() {
        e = Hs("div"), Yn(t.$$.fragment), xs(e, "class", "image-frame svelte-1gjdske"), Tc(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Yi(r, e, a), Dn(t, e, null), s = !0;
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
        r[1], Fl(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
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
        Pe(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && Xi(e), xn(t);
      }
    }
  );
}
function Gc(i) {
  let e, t, n;
  function s(o) {
    i[55](o);
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
    i[0]), e = new t1({ props: l }), qs.push(() => Tl(e, "active_source", s)), {
      c() {
        Yn(e.$$.fragment);
      },
      m(o, r) {
        Dn(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], Fl(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (We(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Pe(e.$$.fragment, o), n = !1;
      },
      d(o) {
        xn(e, o);
      }
    }
  );
}
function Pw(i) {
  let e, t, n, s, l, o, r, a, c, f, u, d, _, p, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), h;
  e = new pd({
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
  function Y(v) {
    i[43](v);
  }
  function x(v) {
    i[44](v);
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
    $$slots: { default: [Lw] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[28] !== void 0 && (k.uploading = /*uploading*/
  i[28]), /*dragging*/
  i[29] !== void 0 && (k.dragging = /*dragging*/
  i[29]), c = new H0({ props: k }), i[42](c), qs.push(() => Tl(c, "uploading", Y)), qs.push(() => Tl(c, "dragging", x)), c.$on(
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
  ), S = g && Gc(i);
  return {
    c() {
      Yn(e.$$.fragment), t = hi(), n = Hs("div"), b && b.c(), s = hi(), y && y.c(), l = hi(), w && w.c(), o = hi(), r = Hs("div"), a = Hs("div"), Yn(c.$$.fragment), d = hi(), X && X.c(), _ = hi(), W && W.c(), p = hi(), S && S.c(), xs(n, "class", "icon-buttons svelte-1gjdske"), xs(a, "class", "upload-container svelte-1gjdske"), xs(r, "data-testid", "image"), xs(r, "class", "image-container svelte-1gjdske");
    },
    m(v, E) {
      Dn(e, v, E), Yi(v, t, E), Yi(v, n, E), b && b.m(n, null), ts(n, s), y && y.m(n, null), ts(n, l), w && w.m(n, null), Yi(v, o, E), Yi(v, r, E), ts(r, a), Dn(c, a, null), ts(a, d), X && X.m(a, null), ts(a, _), W && W.m(a, null), ts(r, p), S && S.m(r, null), h = !0;
    },
    p(v, E) {
      const B = {};
      E[0] & /*show_label*/
      8 && (B.show_label = /*show_label*/
      v[3]), E[0] & /*label*/
      4 && (B.label = /*label*/
      v[2] || "Image Annotator"), e.$set(B), /*showDownloadButton*/
      v[10] && /*value*/
      v[1] !== null ? b ? (b.p(v, E), E[0] & /*showDownloadButton, value*/
      1026 && We(b, 1)) : (b = Oc(v), b.c(), We(b, 1), b.m(n, s)) : b && (pi(), Pe(b, 1, 1, () => {
        b = null;
      }), gi()), /*showShareButton*/
      v[9] && /*value*/
      v[1] !== null ? y ? (y.p(v, E), E[0] & /*showShareButton, value*/
      514 && We(y, 1)) : (y = Uc(v), y.c(), We(y, 1), y.m(n, l)) : y && (pi(), Pe(y, 1, 1, () => {
        y = null;
      }), gi()), /*showClearButton*/
      v[11] && /*value*/
      v[1] !== null && /*interactive*/
      v[7] ? w ? (w.p(v, E), E[0] & /*showClearButton, value, interactive*/
      2178 && We(w, 1)) : (w = Nc(v), w.c(), We(w, 1), w.m(n, null)) : w && (pi(), Pe(w, 1, 1, () => {
        w = null;
      }), gi());
      const M = {};
      E[0] & /*value, active_source*/
      3 && (M.hidden = /*value*/
      v[1] !== null || /*active_source*/
      v[0] === "webcam"), E[0] & /*active_source*/
      1 && (M.filetype = /*active_source*/
      v[0] === "clipboard" ? "clipboard" : "image/*"), E[0] & /*root*/
      64 && (M.root = /*root*/
      v[6]), E[0] & /*max_file_size*/
      8388608 && (M.max_file_size = /*max_file_size*/
      v[23]), E[0] & /*sources*/
      16 && (M.disable_click = !/*sources*/
      v[4].includes("upload")), E[0] & /*cli_upload*/
      16777216 && (M.upload = /*cli_upload*/
      v[24]), E[0] & /*stream_handler*/
      33554432 && (M.stream_handler = /*stream_handler*/
      v[25]), E[0] & /*value*/
      2 | E[1] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: E, ctx: v }), !f && E[0] & /*uploading*/
      268435456 && (f = !0, M.uploading = /*uploading*/
      v[28], Fl(() => f = !1)), !u && E[0] & /*dragging*/
      536870912 && (u = !0, M.dragging = /*dragging*/
      v[29], Fl(() => u = !1)), c.$set(M), /*value*/
      v[1] === null && /*active_source*/
      v[0] === "webcam" ? X ? (X.p(v, E), E[0] & /*value, active_source*/
      3 && We(X, 1)) : (X = Kc(v), X.c(), We(X, 1), X.m(a, _)) : X && (pi(), Pe(X, 1, 1, () => {
        X = null;
      }), gi()), /*value*/
      v[1] !== null ? W ? (W.p(v, E), E[0] & /*value*/
      2 && We(W, 1)) : (W = Zc(v), W.c(), We(W, 1), W.m(a, null)) : W && (pi(), Pe(W, 1, 1, () => {
        W = null;
      }), gi()), E[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (v[4].length > 1 || /*sources*/
      v[4].includes("clipboard")) && /*value*/
      v[1] === null && /*interactive*/
      v[7]), g ? S ? (S.p(v, E), E[0] & /*sources, value, interactive*/
      146 && We(S, 1)) : (S = Gc(v), S.c(), We(S, 1), S.m(r, null)) : S && (pi(), Pe(S, 1, 1, () => {
        S = null;
      }), gi());
    },
    i(v) {
      h || (We(e.$$.fragment, v), We(b), We(y), We(w), We(c.$$.fragment, v), We(X), We(W), We(S), h = !0);
    },
    o(v) {
      Pe(e.$$.fragment, v), Pe(b), Pe(y), Pe(w), Pe(c.$$.fragment, v), Pe(X), Pe(W), Pe(S), h = !1;
    },
    d(v) {
      v && (Xi(t), Xi(n), Xi(o), Xi(r)), xn(e, v), b && b.d(), y && y.d(), w && w.d(), i[42](null), xn(c), X && X.d(), W && W.d(), S && S.d();
    }
  };
}
function qw(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(D, de, ve, oe) {
    function Ze(yt) {
      return yt instanceof ve ? yt : new ve(function(ut) {
        ut(yt);
      });
    }
    return new (ve || (ve = Promise))(function(yt, ut) {
      function an(Ct) {
        try {
          rn(oe.next(Ct));
        } catch (Tt) {
          ut(Tt);
        }
      }
      function Ii(Ct) {
        try {
          rn(oe.throw(Ct));
        } catch (Tt) {
          ut(Tt);
        }
      }
      function rn(Ct) {
        Ct.done ? yt(Ct.value) : Ze(Ct.value).then(an, Ii);
      }
      rn((oe = oe.apply(D, de || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: _ } = e, { showShareButton: p } = e, { showDownloadButton: g } = e, { showClearButton: h } = e, { boxesAlpha: b } = e, { labelList: y } = e, { labelColors: w } = e, { boxMinSize: Y } = e, { handleSize: x } = e, { height: k } = e, { width: X } = e, { boxThickness: W } = e, { disableEditBoxes: S } = e, { singleBox: v } = e, { showRemoveButton: E } = e, { handlesCursor: B } = e, { boxSelectedThickness: M } = e, { max_file_size: j = null } = e, { cli_upload: P } = e, { stream_handler: T } = e, { useDefaultLabel: Z } = e, { shapeCreationMode: C } = e, L, le = !1, { active_source: G = null } = e;
  function U({ detail: D }) {
    t(1, o = new Fc()), t(1, o.image = D, o), J("upload");
  }
  function ge(D) {
    return l(this, void 0, void 0, function* () {
      const de = yield L.load_files([new File([D], "webcam.png")]), ve = (de == null ? void 0 : de[0]) || null;
      ve ? (t(1, o = new Fc()), t(1, o.image = ve, o)) : t(1, o = null), yield Rw(), J("change");
    });
  }
  const J = Ew();
  let q = !1;
  function pe(D) {
    return l(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          L.paste_clipboard();
          break;
      }
    });
  }
  function R() {
    t(1, o = null), t(28, le = !1), c && c.length > 0 && t(0, G = c[0]), J("clear"), J("change");
  }
  const I = async (D) => D === null ? "" : `<img src="${await Wm(D.image)}" />`;
  function ne(D) {
    Cs.call(this, i, D);
  }
  function Q(D) {
    Cs.call(this, i, D);
  }
  function xe(D) {
    qs[D ? "unshift" : "push"](() => {
      L = D, t(30, L);
    });
  }
  function De(D) {
    le = D, t(28, le);
  }
  function H(D) {
    q = D, t(29, q);
  }
  function Ue(D) {
    Cs.call(this, i, D);
  }
  const Se = (D) => ge(D.detail), He = (D) => ge(D.detail);
  function Ne(D) {
    Cs.call(this, i, D);
  }
  function nt(D) {
    Cs.call(this, i, D);
  }
  const ce = (D) => ge(D.detail);
  function Ve(D) {
    o = D, t(1, o);
  }
  const ft = () => J("change"), be = (D) => J("select", { index: null, value: D.detail.coordinates }), Me = (D) => J("tool_selected", D.detail);
  function Re(D) {
    G = D, t(0, G), t(4, c);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, o = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, c = D.sources), "selectable" in D && t(5, f = D.selectable), "root" in D && t(6, u = D.root), "interactive" in D && t(7, d = D.interactive), "i18n" in D && t(8, _ = D.i18n), "showShareButton" in D && t(9, p = D.showShareButton), "showDownloadButton" in D && t(10, g = D.showDownloadButton), "showClearButton" in D && t(11, h = D.showClearButton), "boxesAlpha" in D && t(12, b = D.boxesAlpha), "labelList" in D && t(13, y = D.labelList), "labelColors" in D && t(14, w = D.labelColors), "boxMinSize" in D && t(15, Y = D.boxMinSize), "handleSize" in D && t(16, x = D.handleSize), "height" in D && t(17, k = D.height), "width" in D && t(18, X = D.width), "boxThickness" in D && t(36, W = D.boxThickness), "disableEditBoxes" in D && t(19, S = D.disableEditBoxes), "singleBox" in D && t(20, v = D.singleBox), "showRemoveButton" in D && t(21, E = D.showRemoveButton), "handlesCursor" in D && t(22, B = D.handlesCursor), "boxSelectedThickness" in D && t(37, M = D.boxSelectedThickness), "max_file_size" in D && t(23, j = D.max_file_size), "cli_upload" in D && t(24, P = D.cli_upload), "stream_handler" in D && t(25, T = D.stream_handler), "useDefaultLabel" in D && t(26, Z = D.useDefaultLabel), "shapeCreationMode" in D && t(27, C = D.shapeCreationMode), "active_source" in D && t(0, G = D.active_source), "$$scope" in D && t(56, s = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    268435456 && le && R(), i.$$.dirty[0] & /*dragging*/
    536870912 && J("drag", q), i.$$.dirty[0] & /*active_source, sources*/
    17 && !G && c && t(0, G = c[0]);
  }, [
    G,
    o,
    r,
    a,
    c,
    f,
    u,
    d,
    _,
    p,
    g,
    h,
    b,
    y,
    w,
    Y,
    x,
    k,
    X,
    S,
    v,
    E,
    B,
    j,
    P,
    T,
    Z,
    C,
    le,
    q,
    L,
    U,
    ge,
    J,
    pe,
    R,
    W,
    M,
    n,
    I,
    ne,
    Q,
    xe,
    De,
    H,
    Ue,
    Se,
    He,
    Ne,
    nt,
    ce,
    Ve,
    ft,
    be,
    Me,
    Re,
    s
  ];
}
class Iw extends Sw {
  constructor(e) {
    super(), Yw(
      this,
      e,
      qw,
      Pw,
      Dw,
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
  SvelteComponent: Aw,
  attr: Xl,
  detach: du,
  element: _u,
  init: jw,
  insert: mu,
  noop: Jc,
  safe_not_equal: Fw,
  src_url_equal: Qc,
  toggle_class: Gn
} = window.__gradio__svelte__internal;
function $c(i) {
  let e, t;
  return {
    c() {
      e = _u("img"), Qc(e.src, t = /*value*/
      i[0].url) || Xl(e, "src", t), Xl(e, "alt", "");
    },
    m(n, s) {
      mu(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !Qc(e.src, t = /*value*/
      n[0].url) && Xl(e, "src", t);
    },
    d(n) {
      n && du(e);
    }
  };
}
function Tw(i) {
  let e, t = (
    /*value*/
    i[0] && $c(i)
  );
  return {
    c() {
      e = _u("div"), t && t.c(), Xl(e, "class", "container svelte-1sgcyba"), Gn(
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
function Ow(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class b3 extends Aw {
  constructor(e) {
    super(), jw(this, e, Ow, Tw, Fw, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Uw,
  add_flush_callback: ef,
  assign: Nw,
  bind: tf,
  binding_callbacks: nf,
  check_outros: Vw,
  create_component: Ri,
  destroy_component: Hi,
  detach: gu,
  empty: Kw,
  flush: Ce,
  get_spread_object: Zw,
  get_spread_update: Gw,
  group_outros: Jw,
  init: Qw,
  insert: pu,
  mount_component: Li,
  safe_not_equal: $w,
  space: e3,
  transition_in: Bn,
  transition_out: En
} = window.__gradio__svelte__internal;
function t3(i) {
  let e, t;
  return e = new Kd({
    props: {
      unpadded_box: !0,
      size: "large",
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
      s[1] & /*$$scope*/
      32768 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      En(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function n3(i) {
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
      En(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function i3(i) {
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
      En(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function s3(i) {
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
      En(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function l3(i) {
  let e, t, n, s;
  const l = [i3, n3, t3], o = [];
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
      t.c(), n = Kw();
    },
    m(a, c) {
      o[e].m(a, c), pu(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Jw(), En(o[f], 1, 1, () => {
        o[f] = null;
      }), Vw(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Bn(t), s = !0);
    },
    o(a) {
      En(t), s = !1;
    },
    d(a) {
      a && gu(n), o[e].d(a);
    }
  };
}
function o3(i) {
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
    a = Nw(a, r[d]);
  e = new I1({ props: a });
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
    $$slots: { default: [l3] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Iw({ props: u }), nf.push(() => tf(n, "active_source", c)), nf.push(() => tf(n, "value", f)), n.$on(
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
      "tool_selected",
      /*tool_selected_handler*/
      i[43]
    ), n.$on(
      "share",
      /*share_handler*/
      i[44]
    ), n.$on(
      "error",
      /*error_handler*/
      i[45]
    ), {
      c() {
        Ri(e.$$.fragment), t = e3(), Ri(n.$$.fragment);
      },
      m(d, _) {
        Li(e, d, _), pu(d, t, _), Li(n, d, _), o = !0;
      },
      p(d, _) {
        const p = _[0] & /*loading_status*/
        2 | _[1] & /*gradio*/
        2 ? Gw(r, [
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
          2 && Zw(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(p);
        const g = {};
        _[0] & /*_selectable*/
        1024 && (g.selectable = /*_selectable*/
        d[10]), _[0] & /*root*/
        128 && (g.root = /*root*/
        d[7]), _[0] & /*sources*/
        16384 && (g.sources = /*sources*/
        d[14]), _[0] & /*interactive*/
        262144 && (g.interactive = /*interactive*/
        d[18]), _[0] & /*show_download_button*/
        32768 && (g.showDownloadButton = /*show_download_button*/
        d[15]), _[0] & /*show_share_button*/
        65536 && (g.showShareButton = /*show_share_button*/
        d[16]), _[0] & /*show_clear_button*/
        131072 && (g.showClearButton = /*show_clear_button*/
        d[17]), _[1] & /*gradio*/
        2 && (g.i18n = /*gradio*/
        d[32].i18n), _[0] & /*boxes_alpha*/
        524288 && (g.boxesAlpha = /*boxes_alpha*/
        d[19]), _[0] & /*height*/
        256 && (g.height = /*height*/
        d[8]), _[0] & /*width*/
        512 && (g.width = /*width*/
        d[9]), _[0] & /*label_list*/
        1048576 && (g.labelList = /*label_list*/
        d[20]), _[0] & /*label_colors*/
        2097152 && (g.labelColors = /*label_colors*/
        d[21]), _[0] & /*box_min_size*/
        4194304 && (g.boxMinSize = /*box_min_size*/
        d[22]), _[0] & /*label*/
        32 && (g.label = /*label*/
        d[5]), _[0] & /*show_label*/
        64 && (g.show_label = /*show_label*/
        d[6]), _[1] & /*gradio*/
        2 && (g.max_file_size = /*gradio*/
        d[32].max_file_size), _[1] & /*gradio*/
        2 && (g.cli_upload = /*gradio*/
        d[32].client.upload), _[1] & /*gradio*/
        2 && (g.stream_handler = /*gradio*/
        d[32].client.stream), _[0] & /*handle_size*/
        8388608 && (g.handleSize = /*handle_size*/
        d[23]), _[0] & /*box_thickness*/
        16777216 && (g.boxThickness = /*box_thickness*/
        d[24]), _[0] & /*box_selected_thickness*/
        33554432 && (g.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), _[0] & /*disable_edit_boxes*/
        67108864 && (g.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), _[0] & /*single_box*/
        134217728 && (g.singleBox = /*single_box*/
        d[27]), _[0] & /*show_remove_button*/
        268435456 && (g.showRemoveButton = /*show_remove_button*/
        d[28]), _[0] & /*handles_cursor*/
        536870912 && (g.handlesCursor = /*handles_cursor*/
        d[29]), _[0] & /*use_default_label*/
        1073741824 && (g.useDefaultLabel = /*use_default_label*/
        d[30]), _[1] & /*shape_creation_mode*/
        1 && (g.shapeCreationMode = /*shape_creation_mode*/
        d[31]), _[1] & /*$$scope, gradio, active_source*/
        32778 && (g.$$scope = { dirty: _, ctx: d }), !s && _[1] & /*active_source*/
        8 && (s = !0, g.active_source = /*active_source*/
        d[34], ef(() => s = !1)), !l && _[0] & /*value*/
        1 && (l = !0, g.value = /*value*/
        d[0], ef(() => l = !1)), n.$set(g);
      },
      i(d) {
        o || (Bn(e.$$.fragment, d), Bn(n.$$.fragment, d), o = !0);
      },
      o(d) {
        En(e.$$.fragment, d), En(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && gu(t), Hi(e, d), Hi(n, d);
      }
    }
  );
}
function a3(i) {
  let e, t;
  return e = new vh({
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
      $$slots: { default: [o3] },
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
      32783 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      En(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hi(e, n);
    }
  };
}
function r3(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: _ = !0 } = e, { scale: p = null } = e, { min_width: g = void 0 } = e, { loading_status: h } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: y } = e, { show_share_button: w } = e, { show_clear_button: Y } = e, { interactive: x } = e, { boxes_alpha: k } = e, { label_list: X } = e, { label_colors: W } = e, { box_min_size: S } = e, { handle_size: v } = e, { box_thickness: E } = e, { box_selected_thickness: B } = e, { disable_edit_boxes: M } = e, { single_box: j } = e, { show_remove_button: P } = e, { handles_cursor: T } = e, { use_default_label: Z } = e, { shape_creation_mode: C } = e, { gradio: L } = e, le, G = null;
  function U(H) {
    G = H, t(34, G);
  }
  function ge(H) {
    o = H, t(0, o);
  }
  const J = () => L.dispatch("change"), q = () => L.dispatch("edit"), pe = () => {
    L.dispatch("clear");
  }, R = ({ detail: H }) => t(33, le = H), I = () => L.dispatch("upload"), ne = ({ detail: H }) => L.dispatch("select", H), Q = ({ detail: H }) => L.dispatch("tool_selected", H), xe = ({ detail: H }) => L.dispatch("share", H), De = ({ detail: H }) => {
    t(1, h = h || {}), t(1, h.status = "error", h), L.dispatch("error", H);
  };
  return i.$$set = (H) => {
    "elem_id" in H && t(2, n = H.elem_id), "elem_classes" in H && t(3, s = H.elem_classes), "visible" in H && t(4, l = H.visible), "value" in H && t(0, o = H.value), "label" in H && t(5, r = H.label), "show_label" in H && t(6, a = H.show_label), "root" in H && t(7, c = H.root), "height" in H && t(8, f = H.height), "width" in H && t(9, u = H.width), "_selectable" in H && t(10, d = H._selectable), "container" in H && t(11, _ = H.container), "scale" in H && t(12, p = H.scale), "min_width" in H && t(13, g = H.min_width), "loading_status" in H && t(1, h = H.loading_status), "sources" in H && t(14, b = H.sources), "show_download_button" in H && t(15, y = H.show_download_button), "show_share_button" in H && t(16, w = H.show_share_button), "show_clear_button" in H && t(17, Y = H.show_clear_button), "interactive" in H && t(18, x = H.interactive), "boxes_alpha" in H && t(19, k = H.boxes_alpha), "label_list" in H && t(20, X = H.label_list), "label_colors" in H && t(21, W = H.label_colors), "box_min_size" in H && t(22, S = H.box_min_size), "handle_size" in H && t(23, v = H.handle_size), "box_thickness" in H && t(24, E = H.box_thickness), "box_selected_thickness" in H && t(25, B = H.box_selected_thickness), "disable_edit_boxes" in H && t(26, M = H.disable_edit_boxes), "single_box" in H && t(27, j = H.single_box), "show_remove_button" in H && t(28, P = H.show_remove_button), "handles_cursor" in H && t(29, T = H.handles_cursor), "use_default_label" in H && t(30, Z = H.use_default_label), "shape_creation_mode" in H && t(31, C = H.shape_creation_mode), "gradio" in H && t(32, L = H.gradio);
  }, [
    o,
    h,
    n,
    s,
    l,
    r,
    a,
    c,
    f,
    u,
    d,
    _,
    p,
    g,
    b,
    y,
    w,
    Y,
    x,
    k,
    X,
    W,
    S,
    v,
    E,
    B,
    M,
    j,
    P,
    T,
    Z,
    C,
    L,
    le,
    G,
    U,
    ge,
    J,
    q,
    pe,
    R,
    I,
    ne,
    Q,
    xe,
    De
  ];
}
class v3 extends Uw {
  constructor(e) {
    super(), Qw(
      this,
      e,
      r3,
      a3,
      $w,
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
  b3 as BaseExample,
  v3 as default
};
