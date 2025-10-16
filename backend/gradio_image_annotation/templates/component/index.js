const {
  SvelteComponent: Xu,
  assign: Yu,
  create_slot: Du,
  detach: Eu,
  element: Ru,
  get_all_dirty_from_scope: Lu,
  get_slot_changes: qu,
  get_spread_update: Pu,
  init: Hu,
  insert: Iu,
  safe_not_equal: Au,
  set_dynamic_element_data: ga,
  set_style: xt,
  toggle_class: ln,
  transition_in: Wc,
  transition_out: xc,
  update_slot_base: Fu
} = window.__gradio__svelte__internal;
function ju(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[18].default
  ), l = Du(
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
    r = Yu(r, o[a]);
  return {
    c() {
      e = Ru(
        /*tag*/
        i[14]
      ), l && l.c(), ga(
        /*tag*/
        i[14]
      )(e, r), ln(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), ln(
        e,
        "padded",
        /*padding*/
        i[6]
      ), ln(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), ln(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), ln(e, "hide-container", !/*explicit_call*/
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
      Iu(a, e, c), l && l.m(e, null), n = !0;
    },
    p(a, c) {
      l && l.p && (!n || c & /*$$scope*/
      131072) && Fu(
        l,
        s,
        a,
        /*$$scope*/
        a[17],
        n ? qu(
          s,
          /*$$scope*/
          a[17],
          c,
          null
        ) : Lu(
          /*$$scope*/
          a[17]
        ),
        null
      ), ga(
        /*tag*/
        a[14]
      )(e, r = Pu(o, [
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
      ])), ln(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), ln(
        e,
        "padded",
        /*padding*/
        a[6]
      ), ln(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), ln(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), ln(e, "hide-container", !/*explicit_call*/
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
      n || (Wc(l, a), n = !0);
    },
    o(a) {
      xc(l, a), n = !1;
    },
    d(a) {
      a && Eu(e), l && l.d(a);
    }
  };
}
function Tu(i) {
  let e, t = (
    /*tag*/
    i[14] && ju(i)
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
      e || (Wc(t, n), e = !0);
    },
    o(n) {
      xc(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Ou(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: f = "base" } = e, { padding: h = !0 } = e, { type: d = "normal" } = e, { test_id: _ = void 0 } = e, { explicit_call: g = !1 } = e, { container: u = !0 } = e, { visible: b = !0 } = e, { allow_overflow: p = !0 } = e, { scale: k = null } = e, { min_width: v = 0 } = e, S = d === "fieldset" ? "fieldset" : "div";
  const y = (w) => {
    if (w !== void 0) {
      if (typeof w == "number")
        return w + "px";
      if (typeof w == "string")
        return w;
    }
  };
  return i.$$set = (w) => {
    "height" in w && t(0, l = w.height), "width" in w && t(1, o = w.width), "elem_id" in w && t(2, r = w.elem_id), "elem_classes" in w && t(3, a = w.elem_classes), "variant" in w && t(4, c = w.variant), "border_mode" in w && t(5, f = w.border_mode), "padding" in w && t(6, h = w.padding), "type" in w && t(16, d = w.type), "test_id" in w && t(7, _ = w.test_id), "explicit_call" in w && t(8, g = w.explicit_call), "container" in w && t(9, u = w.container), "visible" in w && t(10, b = w.visible), "allow_overflow" in w && t(11, p = w.allow_overflow), "scale" in w && t(12, k = w.scale), "min_width" in w && t(13, v = w.min_width), "$$scope" in w && t(17, s = w.$$scope);
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
    b,
    p,
    k,
    v,
    S,
    y,
    d,
    s,
    n
  ];
}
class Uu extends Xu {
  constructor(e) {
    super(), Hu(this, e, Ou, Tu, Au, {
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
  SvelteComponent: Nu,
  attr: Vu,
  create_slot: Ku,
  detach: Zu,
  element: Ju,
  get_all_dirty_from_scope: Gu,
  get_slot_changes: Qu,
  init: $u,
  insert: eh,
  safe_not_equal: th,
  transition_in: nh,
  transition_out: ih,
  update_slot_base: sh
} = window.__gradio__svelte__internal;
function lh(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), s = Ku(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Ju("div"), s && s.c(), Vu(e, "class", "svelte-1hnfib2");
    },
    m(l, o) {
      eh(l, e, o), s && s.m(e, null), t = !0;
    },
    p(l, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      1) && sh(
        s,
        n,
        l,
        /*$$scope*/
        l[0],
        t ? Qu(
          n,
          /*$$scope*/
          l[0],
          o,
          null
        ) : Gu(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (nh(s, l), t = !0);
    },
    o(l) {
      ih(s, l), t = !1;
    },
    d(l) {
      l && Zu(e), s && s.d(l);
    }
  };
}
function oh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return i.$$set = (l) => {
    "$$scope" in l && t(0, s = l.$$scope);
  }, [s, n];
}
class ah extends Nu {
  constructor(e) {
    super(), $u(this, e, oh, lh, th, {});
  }
}
const {
  SvelteComponent: rh,
  attr: pa,
  check_outros: ch,
  create_component: fh,
  create_slot: uh,
  destroy_component: hh,
  detach: Js,
  element: dh,
  empty: _h,
  get_all_dirty_from_scope: mh,
  get_slot_changes: gh,
  group_outros: ph,
  init: bh,
  insert: Gs,
  mount_component: vh,
  safe_not_equal: wh,
  set_data: kh,
  space: yh,
  text: Ch,
  toggle_class: Mi,
  transition_in: ls,
  transition_out: Qs,
  update_slot_base: Sh
} = window.__gradio__svelte__internal;
function ba(i) {
  let e, t;
  return e = new ah({
    props: {
      $$slots: { default: [Mh] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      fh(e.$$.fragment);
    },
    m(n, s) {
      vh(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s & /*$$scope, info*/
      10 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (ls(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qs(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hh(e, n);
    }
  };
}
function Mh(i) {
  let e;
  return {
    c() {
      e = Ch(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Gs(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && kh(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Js(e);
    }
  };
}
function zh(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[2].default
  ), o = uh(
    l,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && ba(i)
  );
  return {
    c() {
      e = dh("span"), o && o.c(), t = yh(), r && r.c(), n = _h(), pa(e, "data-testid", "block-info"), pa(e, "class", "svelte-22c38v"), Mi(e, "sr-only", !/*show_label*/
      i[0]), Mi(e, "hide", !/*show_label*/
      i[0]), Mi(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      Gs(a, e, c), o && o.m(e, null), Gs(a, t, c), r && r.m(a, c), Gs(a, n, c), s = !0;
    },
    p(a, [c]) {
      o && o.p && (!s || c & /*$$scope*/
      8) && Sh(
        o,
        l,
        a,
        /*$$scope*/
        a[3],
        s ? gh(
          l,
          /*$$scope*/
          a[3],
          c,
          null
        ) : mh(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!s || c & /*show_label*/
      1) && Mi(e, "sr-only", !/*show_label*/
      a[0]), (!s || c & /*show_label*/
      1) && Mi(e, "hide", !/*show_label*/
      a[0]), (!s || c & /*info*/
      2) && Mi(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && ls(r, 1)) : (r = ba(a), r.c(), ls(r, 1), r.m(n.parentNode, n)) : r && (ph(), Qs(r, 1, 1, () => {
        r = null;
      }), ch());
    },
    i(a) {
      s || (ls(o, a), ls(r), s = !0);
    },
    o(a) {
      Qs(o, a), Qs(r), s = !1;
    },
    d(a) {
      a && (Js(e), Js(t), Js(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Wh(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { show_label: l = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, l = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, s = r.$$scope);
  }, [l, o, n, s];
}
class Bc extends rh {
  constructor(e) {
    super(), bh(this, e, Wh, zh, wh, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: xh,
  append: Xl,
  attr: zs,
  create_component: Bh,
  destroy_component: Xh,
  detach: Yh,
  element: va,
  init: Dh,
  insert: Eh,
  mount_component: Rh,
  safe_not_equal: Lh,
  set_data: qh,
  space: Ph,
  text: Hh,
  toggle_class: Yn,
  transition_in: Ih,
  transition_out: Ah
} = window.__gradio__svelte__internal;
function Fh(i) {
  let e, t, n, s, l, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = va("label"), t = va("span"), Bh(n.$$.fragment), s = Ph(), l = Hh(
        /*label*/
        i[0]
      ), zs(t, "class", "svelte-9gxdi0"), zs(e, "for", ""), zs(e, "data-testid", "block-label"), zs(e, "class", "svelte-9gxdi0"), Yn(e, "hide", !/*show_label*/
      i[2]), Yn(e, "sr-only", !/*show_label*/
      i[2]), Yn(
        e,
        "float",
        /*float*/
        i[4]
      ), Yn(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Eh(r, e, a), Xl(e, t), Rh(n, t, null), Xl(e, s), Xl(e, l), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && qh(
        l,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Yn(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Yn(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Yn(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Yn(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Ih(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Ah(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Yh(e), Xh(n);
    }
  };
}
function jh(i, e, t) {
  let { label: n = null } = e, { Icon: s } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, s = a.Icon), "show_label" in a && t(2, l = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, s, l, o, r];
}
class Th extends xh {
  constructor(e) {
    super(), Dh(this, e, jh, Fh, Lh, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Oh,
  append: xo,
  attr: kn,
  bubble: Uh,
  create_component: Nh,
  destroy_component: Vh,
  detach: Xc,
  element: Bo,
  init: Kh,
  insert: Yc,
  listen: Zh,
  mount_component: Jh,
  safe_not_equal: Gh,
  set_data: Qh,
  set_style: zi,
  space: $h,
  text: ed,
  toggle_class: vt,
  transition_in: td,
  transition_out: nd
} = window.__gradio__svelte__internal;
function wa(i) {
  let e, t;
  return {
    c() {
      e = Bo("span"), t = ed(
        /*label*/
        i[1]
      ), kn(e, "class", "svelte-1lrphxw");
    },
    m(n, s) {
      Yc(n, e, s), xo(e, t);
    },
    p(n, s) {
      s & /*label*/
      2 && Qh(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Xc(e);
    }
  };
}
function id(i) {
  let e, t, n, s, l, o, r, a = (
    /*show_label*/
    i[2] && wa(i)
  );
  return s = new /*Icon*/
  i[0]({}), {
    c() {
      e = Bo("button"), a && a.c(), t = $h(), n = Bo("div"), Nh(s.$$.fragment), kn(n, "class", "svelte-1lrphxw"), vt(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), vt(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), vt(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], kn(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), kn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), kn(
        e,
        "title",
        /*label*/
        i[1]
      ), kn(e, "class", "svelte-1lrphxw"), vt(
        e,
        "pending",
        /*pending*/
        i[3]
      ), vt(
        e,
        "padded",
        /*padded*/
        i[5]
      ), vt(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), vt(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), zi(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), zi(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), zi(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, f) {
      Yc(c, e, f), a && a.m(e, null), xo(e, t), xo(e, n), Jh(s, n, null), l = !0, o || (r = Zh(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(c, [f]) {
      /*show_label*/
      c[2] ? a ? a.p(c, f) : (a = wa(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!l || f & /*size*/
      16) && vt(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!l || f & /*size*/
      16) && vt(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!l || f & /*size*/
      16) && vt(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!l || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!l || f & /*label*/
      2) && kn(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!l || f & /*hasPopup*/
      256) && kn(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!l || f & /*label*/
      2) && kn(
        e,
        "title",
        /*label*/
        c[1]
      ), (!l || f & /*pending*/
      8) && vt(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!l || f & /*padded*/
      32) && vt(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!l || f & /*highlight*/
      64) && vt(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!l || f & /*transparent*/
      512) && vt(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), f & /*disabled, _color*/
      4224 && zi(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && zi(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), f & /*offset*/
      2048 && zi(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      l || (td(s.$$.fragment, c), l = !0);
    },
    o(c) {
      nd(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && Xc(e), a && a.d(), Vh(s), o = !1, r();
    }
  };
}
function sd(i, e, t) {
  let n, { Icon: s } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: f = !1 } = e, { disabled: h = !1 } = e, { hasPopup: d = !1 } = e, { color: _ = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: u = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function p(k) {
    Uh.call(this, i, k);
  }
  return i.$$set = (k) => {
    "Icon" in k && t(0, s = k.Icon), "label" in k && t(1, l = k.label), "show_label" in k && t(2, o = k.show_label), "pending" in k && t(3, r = k.pending), "size" in k && t(4, a = k.size), "padded" in k && t(5, c = k.padded), "highlight" in k && t(6, f = k.highlight), "disabled" in k && t(7, h = k.disabled), "hasPopup" in k && t(8, d = k.hasPopup), "color" in k && t(13, _ = k.color), "transparent" in k && t(9, g = k.transparent), "background" in k && t(10, u = k.background), "offset" in k && t(11, b = k.offset);
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
    b,
    n,
    _,
    p
  ];
}
class wl extends Oh {
  constructor(e) {
    super(), Kh(this, e, sd, id, Gh, {
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
  SvelteComponent: ld,
  append: od,
  attr: Yl,
  binding_callbacks: ad,
  create_slot: rd,
  detach: cd,
  element: ka,
  get_all_dirty_from_scope: fd,
  get_slot_changes: ud,
  init: hd,
  insert: dd,
  safe_not_equal: _d,
  toggle_class: Dn,
  transition_in: md,
  transition_out: gd,
  update_slot_base: pd
} = window.__gradio__svelte__internal;
function bd(i) {
  let e, t, n;
  const s = (
    /*#slots*/
    i[5].default
  ), l = rd(
    s,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ka("div"), t = ka("div"), l && l.c(), Yl(t, "class", "icon svelte-3w3rth"), Yl(e, "class", "empty svelte-3w3rth"), Yl(e, "aria-label", "Empty value"), Dn(
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
      dd(o, e, r), od(e, t), l && l.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      16) && pd(
        l,
        s,
        o,
        /*$$scope*/
        o[4],
        n ? ud(
          s,
          /*$$scope*/
          o[4],
          r,
          null
        ) : fd(
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
      n || (md(l, o), n = !0);
    },
    o(o) {
      gd(l, o), n = !1;
    },
    d(o) {
      o && cd(e), l && l.d(o), i[6](null);
    }
  };
}
function vd(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(h) {
    var d;
    if (!h) return !1;
    const { height: _ } = h.getBoundingClientRect(), { height: g } = ((d = h.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: _ };
    return _ > g + 2;
  }
  function f(h) {
    ad[h ? "unshift" : "push"](() => {
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
class wd extends ld {
  constructor(e) {
    super(), hd(this, e, vd, bd, _d, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: kd,
  append: ya,
  attr: wt,
  detach: yd,
  init: Cd,
  insert: Sd,
  noop: Dl,
  safe_not_equal: Md,
  svg_element: El
} = window.__gradio__svelte__internal;
function zd(i) {
  let e, t, n;
  return {
    c() {
      e = El("svg"), t = El("path"), n = El("circle"), wt(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), wt(n, "cx", "12"), wt(n, "cy", "13"), wt(n, "r", "4"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "width", "100%"), wt(e, "height", "100%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "fill", "none"), wt(e, "stroke", "currentColor"), wt(e, "stroke-width", "1.5"), wt(e, "stroke-linecap", "round"), wt(e, "stroke-linejoin", "round"), wt(e, "class", "feather feather-camera");
    },
    m(s, l) {
      Sd(s, e, l), ya(e, t), ya(e, n);
    },
    p: Dl,
    i: Dl,
    o: Dl,
    d(s) {
      s && yd(e);
    }
  };
}
class Wd extends kd {
  constructor(e) {
    super(), Cd(this, e, null, zd, Md, {});
  }
}
const {
  SvelteComponent: xd,
  append: Bd,
  attr: Ot,
  detach: Xd,
  init: Yd,
  insert: Dd,
  noop: Rl,
  safe_not_equal: Ed,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function Rd(i) {
  let e, t;
  return {
    c() {
      e = Ca("svg"), t = Ca("circle"), Ot(t, "cx", "12"), Ot(t, "cy", "12"), Ot(t, "r", "10"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "stroke-width", "1.5"), Ot(e, "stroke-linecap", "round"), Ot(e, "stroke-linejoin", "round"), Ot(e, "class", "feather feather-circle");
    },
    m(n, s) {
      Dd(n, e, s), Bd(e, t);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(n) {
      n && Xd(e);
    }
  };
}
let Ld = class extends xd {
  constructor(e) {
    super(), Yd(this, e, null, Rd, Ed, {});
  }
};
const {
  SvelteComponent: qd,
  append: Ll,
  attr: Ut,
  detach: Pd,
  init: Hd,
  insert: Id,
  noop: ql,
  safe_not_equal: Ad,
  set_style: on,
  svg_element: Ws
} = window.__gradio__svelte__internal;
function Fd(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ws("svg"), t = Ws("g"), n = Ws("path"), s = Ws("path"), Ut(n, "d", "M18,6L6.087,17.913"), on(n, "fill", "none"), on(n, "fill-rule", "nonzero"), on(n, "stroke-width", "2px"), Ut(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ut(s, "d", "M4.364,4.364L19.636,19.636"), on(s, "fill", "none"), on(s, "fill-rule", "nonzero"), on(s, "stroke-width", "2px"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "version", "1.1"), Ut(e, "xmlns", "http://www.w3.org/2000/svg"), Ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ut(e, "xml:space", "preserve"), Ut(e, "stroke", "currentColor"), on(e, "fill-rule", "evenodd"), on(e, "clip-rule", "evenodd"), on(e, "stroke-linecap", "round"), on(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Id(l, e, o), Ll(e, t), Ll(t, n), Ll(e, s);
    },
    p: ql,
    i: ql,
    o: ql,
    d(l) {
      l && Pd(e);
    }
  };
}
class Dc extends qd {
  constructor(e) {
    super(), Hd(this, e, null, Fd, Ad, {});
  }
}
const {
  SvelteComponent: jd,
  append: Td,
  attr: $i,
  detach: Od,
  init: Ud,
  insert: Nd,
  noop: Pl,
  safe_not_equal: Vd,
  svg_element: Sa
} = window.__gradio__svelte__internal;
function Kd(i) {
  let e, t;
  return {
    c() {
      e = Sa("svg"), t = Sa("path"), $i(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), $i(t, "fill", "currentColor"), $i(e, "id", "icon"), $i(e, "xmlns", "http://www.w3.org/2000/svg"), $i(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      Nd(n, e, s), Td(e, t);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(n) {
      n && Od(e);
    }
  };
}
class Zd extends jd {
  constructor(e) {
    super(), Ud(this, e, null, Kd, Vd, {});
  }
}
const {
  SvelteComponent: Jd,
  append: Gd,
  attr: Wi,
  detach: Qd,
  init: $d,
  insert: e_,
  noop: Hl,
  safe_not_equal: t_,
  svg_element: Ma
} = window.__gradio__svelte__internal;
function n_(i) {
  let e, t;
  return {
    c() {
      e = Ma("svg"), t = Ma("path"), Wi(t, "fill", "currentColor"), Wi(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Wi(e, "xmlns", "http://www.w3.org/2000/svg"), Wi(e, "width", "100%"), Wi(e, "height", "100%"), Wi(e, "viewBox", "0 0 32 32");
    },
    m(n, s) {
      e_(n, e, s), Gd(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
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
  append: l_,
  attr: xi,
  detach: o_,
  init: a_,
  insert: r_,
  noop: Il,
  safe_not_equal: c_,
  svg_element: za
} = window.__gradio__svelte__internal;
function f_(i) {
  let e, t;
  return {
    c() {
      e = za("svg"), t = za("path"), xi(t, "d", "M5 8l4 4 4-4z"), xi(e, "class", "dropdown-arrow svelte-145leq6"), xi(e, "xmlns", "http://www.w3.org/2000/svg"), xi(e, "width", "100%"), xi(e, "height", "100%"), xi(e, "viewBox", "0 0 18 18");
    },
    m(n, s) {
      r_(n, e, s), l_(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && o_(e);
    }
  };
}
let Jo = class extends s_ {
  constructor(e) {
    super(), a_(this, e, null, f_, c_, {});
  }
};
const {
  SvelteComponent: u_,
  append: Al,
  attr: Ve,
  detach: h_,
  init: d_,
  insert: __,
  noop: Fl,
  safe_not_equal: m_,
  svg_element: xs
} = window.__gradio__svelte__internal;
function g_(i) {
  let e, t, n, s;
  return {
    c() {
      e = xs("svg"), t = xs("rect"), n = xs("circle"), s = xs("polyline"), Ve(t, "x", "3"), Ve(t, "y", "3"), Ve(t, "width", "18"), Ve(t, "height", "18"), Ve(t, "rx", "2"), Ve(t, "ry", "2"), Ve(n, "cx", "8.5"), Ve(n, "cy", "8.5"), Ve(n, "r", "1.5"), Ve(s, "points", "21 15 16 10 5 21"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "1.5"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-image");
    },
    m(l, o) {
      __(l, e, o), Al(e, t), Al(e, n), Al(e, s);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(l) {
      l && h_(e);
    }
  };
}
let Ec = class extends u_ {
  constructor(e) {
    super(), d_(this, e, null, g_, m_, {});
  }
};
const {
  SvelteComponent: p_,
  append: b_,
  attr: Bs,
  detach: v_,
  init: w_,
  insert: k_,
  noop: jl,
  safe_not_equal: y_,
  svg_element: Wa
} = window.__gradio__svelte__internal;
function C_(i) {
  let e, t;
  return {
    c() {
      e = Wa("svg"), t = Wa("path"), Bs(t, "fill", "currentColor"), Bs(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Bs(e, "xmlns", "http://www.w3.org/2000/svg"), Bs(e, "viewBox", "0 0 24 24");
    },
    m(n, s) {
      k_(n, e, s), b_(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && v_(e);
    }
  };
}
class Rc extends p_ {
  constructor(e) {
    super(), w_(this, e, null, C_, y_, {});
  }
}
const {
  SvelteComponent: S_,
  append: Xs,
  attr: Ke,
  detach: M_,
  init: z_,
  insert: W_,
  noop: Tl,
  safe_not_equal: x_,
  svg_element: es
} = window.__gradio__svelte__internal;
function B_(i) {
  let e, t, n, s, l;
  return {
    c() {
      e = es("svg"), t = es("path"), n = es("path"), s = es("line"), l = es("line"), Ke(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), Ke(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), Ke(s, "x1", "12"), Ke(s, "y1", "19"), Ke(s, "x2", "12"), Ke(s, "y2", "23"), Ke(l, "x1", "8"), Ke(l, "y1", "23"), Ke(l, "x2", "16"), Ke(l, "y2", "23"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "width", "100%"), Ke(e, "height", "100%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "fill", "none"), Ke(e, "stroke", "currentColor"), Ke(e, "stroke-width", "2"), Ke(e, "stroke-linecap", "round"), Ke(e, "stroke-linejoin", "round"), Ke(e, "class", "feather feather-mic");
    },
    m(o, r) {
      W_(o, e, r), Xs(e, t), Xs(e, n), Xs(e, s), Xs(e, l);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(o) {
      o && M_(e);
    }
  };
}
class X_ extends S_ {
  constructor(e) {
    super(), z_(this, e, null, B_, x_, {});
  }
}
const {
  SvelteComponent: Y_,
  append: D_,
  attr: kt,
  detach: E_,
  init: R_,
  insert: L_,
  noop: Ol,
  safe_not_equal: q_,
  svg_element: xa
} = window.__gradio__svelte__internal;
function P_(i) {
  let e, t;
  return {
    c() {
      e = xa("svg"), t = xa("rect"), kt(t, "x", "3"), kt(t, "y", "3"), kt(t, "width", "18"), kt(t, "height", "18"), kt(t, "rx", "2"), kt(t, "ry", "2"), kt(e, "xmlns", "http://www.w3.org/2000/svg"), kt(e, "width", "100%"), kt(e, "height", "100%"), kt(e, "viewBox", "0 0 24 24"), kt(e, "stroke-width", "1.5"), kt(e, "stroke-linecap", "round"), kt(e, "stroke-linejoin", "round"), kt(e, "class", "feather feather-square");
    },
    m(n, s) {
      L_(n, e, s), D_(e, t);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(n) {
      n && E_(e);
    }
  };
}
class H_ extends Y_ {
  constructor(e) {
    super(), R_(this, e, null, P_, q_, {});
  }
}
const {
  SvelteComponent: I_,
  append: Ul,
  attr: ut,
  detach: A_,
  init: F_,
  insert: j_,
  noop: Nl,
  safe_not_equal: T_,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function O_(i) {
  let e, t, n, s;
  return {
    c() {
      e = Ys("svg"), t = Ys("path"), n = Ys("polyline"), s = Ys("line"), ut(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ut(n, "points", "17 8 12 3 7 8"), ut(s, "x1", "12"), ut(s, "y1", "3"), ut(s, "x2", "12"), ut(s, "y2", "15"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "width", "90%"), ut(e, "height", "90%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "fill", "none"), ut(e, "stroke", "currentColor"), ut(e, "stroke-width", "2"), ut(e, "stroke-linecap", "round"), ut(e, "stroke-linejoin", "round"), ut(e, "class", "feather feather-upload");
    },
    m(l, o) {
      j_(l, e, o), Ul(e, t), Ul(e, n), Ul(e, s);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(l) {
      l && A_(e);
    }
  };
}
let Lc = class extends I_ {
  constructor(e) {
    super(), F_(this, e, null, O_, T_, {});
  }
};
const {
  SvelteComponent: U_,
  append: Ba,
  attr: En,
  detach: N_,
  init: V_,
  insert: K_,
  noop: Vl,
  safe_not_equal: Z_,
  svg_element: Kl
} = window.__gradio__svelte__internal;
function J_(i) {
  let e, t, n;
  return {
    c() {
      e = Kl("svg"), t = Kl("path"), n = Kl("path"), En(t, "fill", "currentColor"), En(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), En(n, "fill", "currentColor"), En(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), En(e, "xmlns", "http://www.w3.org/2000/svg"), En(e, "width", "100%"), En(e, "height", "100%"), En(e, "viewBox", "0 0 24 24");
    },
    m(s, l) {
      K_(s, e, l), Ba(e, t), Ba(e, n);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(s) {
      s && N_(e);
    }
  };
}
let qc = class extends U_ {
  constructor(e) {
    super(), V_(this, e, null, J_, Z_, {});
  }
};
const G_ = [
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
], Xa = {
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
G_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: Xa[e][t],
      secondary: Xa[e][n]
    }
  }),
  {}
);
class $s extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Q_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new $s("Must be on Spaces to share.");
  let t, n, s;
  t = $_(i), n = i.split(";")[0].split(":")[1], s = "file" + n.split("/")[1];
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
      throw new $s(`Upload failed: ${c.error}`);
    }
    throw new $s("Upload failed.");
  }
  return await o.text();
}
function $_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), s = n.length, l = new Uint8Array(s); s--; )
    l[s] = n.charCodeAt(s);
  return new Blob([l], { type: t });
}
const {
  SvelteComponent: em,
  create_component: tm,
  destroy_component: nm,
  init: im,
  mount_component: sm,
  safe_not_equal: lm,
  transition_in: om,
  transition_out: am
} = window.__gradio__svelte__internal, { createEventDispatcher: rm } = window.__gradio__svelte__internal;
function cm(i) {
  let e, t;
  return e = new wl({
    props: {
      Icon: Zd,
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
      tm(e.$$.fragment);
    },
    m(n, s) {
      sm(e, n, s), t = !0;
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
      t || (om(e.$$.fragment, n), t = !0);
    },
    o(n) {
      am(e.$$.fragment, n), t = !1;
    },
    d(n) {
      nm(e, n);
    }
  };
}
function fm(i, e, t) {
  const n = rm();
  let { formatter: s } = e, { value: l } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await s(l);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let f = c instanceof $s ? c.message : "Share failed.";
      n("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, s = c.formatter), "value" in c && t(1, l = c.value), "i18n" in c && t(2, o = c.i18n);
  }, [s, l, o, r, n, a];
}
class um extends em {
  constructor(e) {
    super(), im(this, e, fm, cm, lm, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: hm,
  append: ri,
  attr: Xo,
  check_outros: dm,
  create_component: Pc,
  destroy_component: Hc,
  detach: el,
  element: Yo,
  group_outros: _m,
  init: mm,
  insert: tl,
  mount_component: Ic,
  safe_not_equal: gm,
  set_data: Do,
  space: Eo,
  text: os,
  toggle_class: Ya,
  transition_in: ll,
  transition_out: ol
} = window.__gradio__svelte__internal;
function pm(i) {
  let e, t;
  return e = new Lc({}), {
    c() {
      Pc(e.$$.fragment);
    },
    m(n, s) {
      Ic(e, n, s), t = !0;
    },
    i(n) {
      t || (ll(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ol(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hc(e, n);
    }
  };
}
function bm(i) {
  let e, t;
  return e = new Rc({}), {
    c() {
      Pc(e.$$.fragment);
    },
    m(n, s) {
      Ic(e, n, s), t = !0;
    },
    i(n) {
      t || (ll(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ol(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Hc(e, n);
    }
  };
}
function Da(i) {
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
      e = Yo("span"), t = os("- "), s = os(n), l = os(" -"), o = Eo(), a = os(r), Xo(e, "class", "or svelte-kzcjhc");
    },
    m(c, f) {
      tl(c, e, f), ri(e, t), ri(e, s), ri(e, l), tl(c, o, f), tl(c, a, f);
    },
    p(c, f) {
      f & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Do(s, n), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Do(a, r);
    },
    d(c) {
      c && (el(e), el(o), el(a));
    }
  };
}
function vm(i) {
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
  const f = [bm, pm], h = [];
  function d(g, u) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), s = h[n] = f[n](i);
  let _ = (
    /*mode*/
    i[3] !== "short" && Da(i)
  );
  return {
    c() {
      e = Yo("div"), t = Yo("span"), s.c(), l = Eo(), r = os(o), a = Eo(), _ && _.c(), Xo(t, "class", "icon-wrap svelte-kzcjhc"), Ya(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Xo(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, u) {
      tl(g, e, u), ri(e, t), h[n].m(t, null), ri(e, l), ri(e, r), ri(e, a), _ && _.m(e, null), c = !0;
    },
    p(g, [u]) {
      let b = n;
      n = d(g), n !== b && (_m(), ol(h[b], 1, 1, () => {
        h[b] = null;
      }), dm(), s = h[n], s || (s = h[n] = f[n](g), s.c()), ll(s, 1), s.m(t, null)), (!c || u & /*hovered*/
      16) && Ya(
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
      ) + "") && Do(r, o), /*mode*/
      g[3] !== "short" ? _ ? _.p(g, u) : (_ = Da(g), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null);
    },
    i(g) {
      c || (ll(s), c = !0);
    },
    o(g) {
      ol(s), c = !1;
    },
    d(g) {
      g && el(e), h[n].d(), _ && _.d();
    }
  };
}
function wm(i, e, t) {
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
class Ac extends hm {
  constructor(e) {
    super(), mm(this, e, wm, vm, gm, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: km,
  append: Zl,
  attr: mn,
  check_outros: as,
  create_component: kl,
  destroy_component: yl,
  detach: Vi,
  element: ws,
  empty: ym,
  group_outros: rs,
  init: Cm,
  insert: Ki,
  listen: Cl,
  mount_component: Sl,
  safe_not_equal: Sm,
  space: Jl,
  toggle_class: Nn,
  transition_in: Ge,
  transition_out: Ct
} = window.__gradio__svelte__internal;
function Ea(i) {
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
  ), c, f = t && Ra(i), h = s && La(i), d = o && qa(i), _ = a && Pa(i);
  return {
    c() {
      e = ws("span"), f && f.c(), n = Jl(), h && h.c(), l = Jl(), d && d.c(), r = Jl(), _ && _.c(), mn(e, "class", "source-selection svelte-1jp3vgd"), mn(e, "data-testid", "source-select");
    },
    m(g, u) {
      Ki(g, e, u), f && f.m(e, null), Zl(e, n), h && h.m(e, null), Zl(e, l), d && d.m(e, null), Zl(e, r), _ && _.m(e, null), c = !0;
    },
    p(g, u) {
      u & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? f ? (f.p(g, u), u & /*sources*/
      2 && Ge(f, 1)) : (f = Ra(g), f.c(), Ge(f, 1), f.m(e, n)) : f && (rs(), Ct(f, 1, 1, () => {
        f = null;
      }), as()), u & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("microphone")), s ? h ? (h.p(g, u), u & /*sources*/
      2 && Ge(h, 1)) : (h = La(g), h.c(), Ge(h, 1), h.m(e, l)) : h && (rs(), Ct(h, 1, 1, () => {
        h = null;
      }), as()), u & /*sources*/
      2 && (o = /*sources*/
      g[1].includes("webcam")), o ? d ? (d.p(g, u), u & /*sources*/
      2 && Ge(d, 1)) : (d = qa(g), d.c(), Ge(d, 1), d.m(e, r)) : d && (rs(), Ct(d, 1, 1, () => {
        d = null;
      }), as()), u & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? _ ? (_.p(g, u), u & /*sources*/
      2 && Ge(_, 1)) : (_ = Pa(g), _.c(), Ge(_, 1), _.m(e, null)) : _ && (rs(), Ct(_, 1, 1, () => {
        _ = null;
      }), as());
    },
    i(g) {
      c || (Ge(f), Ge(h), Ge(d), Ge(_), c = !0);
    },
    o(g) {
      Ct(f), Ct(h), Ct(d), Ct(_), c = !1;
    },
    d(g) {
      g && Vi(e), f && f.d(), h && h.d(), d && d.d(), _ && _.d();
    }
  };
}
function Ra(i) {
  let e, t, n, s, l;
  return t = new Lc({}), {
    c() {
      e = ws("button"), kl(t.$$.fragment), mn(e, "class", "icon svelte-1jp3vgd"), mn(e, "aria-label", "Upload file"), Nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Ki(o, e, r), Sl(t, e, null), n = !0, s || (l = Cl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Nn(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (Ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ct(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vi(e), yl(t), s = !1, l();
    }
  };
}
function La(i) {
  let e, t, n, s, l;
  return t = new X_({}), {
    c() {
      e = ws("button"), kl(t.$$.fragment), mn(e, "class", "icon svelte-1jp3vgd"), mn(e, "aria-label", "Record audio"), Nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Ki(o, e, r), Sl(t, e, null), n = !0, s || (l = Cl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Nn(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (Ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ct(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vi(e), yl(t), s = !1, l();
    }
  };
}
function qa(i) {
  let e, t, n, s, l;
  return t = new qc({}), {
    c() {
      e = ws("button"), kl(t.$$.fragment), mn(e, "class", "icon svelte-1jp3vgd"), mn(e, "aria-label", "Capture from camera"), Nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Ki(o, e, r), Sl(t, e, null), n = !0, s || (l = Cl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Nn(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (Ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ct(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vi(e), yl(t), s = !1, l();
    }
  };
}
function Pa(i) {
  let e, t, n, s, l;
  return t = new Rc({}), {
    c() {
      e = ws("button"), kl(t.$$.fragment), mn(e, "class", "icon svelte-1jp3vgd"), mn(e, "aria-label", "Paste from clipboard"), Nn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Ki(o, e, r), Sl(t, e, null), n = !0, s || (l = Cl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), s = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Nn(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (Ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ct(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vi(e), yl(t), s = !1, l();
    }
  };
}
function Mm(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ea(i)
  );
  return {
    c() {
      n && n.c(), e = ym();
    },
    m(s, l) {
      n && n.m(s, l), Ki(s, e, l), t = !0;
    },
    p(s, [l]) {
      /*unique_sources*/
      s[2].length > 1 ? n ? (n.p(s, l), l & /*unique_sources*/
      4 && Ge(n, 1)) : (n = Ea(s), n.c(), Ge(n, 1), n.m(e.parentNode, e)) : n && (rs(), Ct(n, 1, 1, () => {
        n = null;
      }), as());
    },
    i(s) {
      t || (Ge(n), t = !0);
    },
    o(s) {
      Ct(n), t = !1;
    },
    d(s) {
      s && Vi(e), n && n.d(s);
    }
  };
}
function zm(i, e, t) {
  let n;
  var s = this && this.__awaiter || function(g, u, b, p) {
    function k(v) {
      return v instanceof b ? v : new b(function(S) {
        S(v);
      });
    }
    return new (b || (b = Promise))(function(v, S) {
      function y(X) {
        try {
          B(p.next(X));
        } catch (z) {
          S(z);
        }
      }
      function w(X) {
        try {
          B(p.throw(X));
        } catch (z) {
          S(z);
        }
      }
      function B(X) {
        X.done ? v(X.value) : k(X.value).then(y, w);
      }
      B((p = p.apply(g, u || [])).next());
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
class Wm extends km {
  constructor(e) {
    super(), Cm(this, e, zm, Mm, Sm, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Fi(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function nl() {
}
const xm = (i) => i;
function Ha(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Fc = typeof window < "u";
let Ia = Fc ? () => window.performance.now() : () => Date.now(), jc = Fc ? (i) => requestAnimationFrame(i) : nl;
const Ni = /* @__PURE__ */ new Set();
function Tc(i) {
  Ni.forEach((e) => {
    e.c(i) || (Ni.delete(e), e.f());
  }), Ni.size !== 0 && jc(Tc);
}
function Bm(i) {
  let e;
  return Ni.size === 0 && jc(Tc), { promise: new Promise((t) => {
    Ni.add(e = { c: i, f: t });
  }), abort() {
    Ni.delete(e);
  } };
}
function Xm(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Ym(i, { delay: e = 0, duration: t = 400, easing: n = xm } = {}) {
  const s = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (l) => "opacity: " + l * s };
}
function Aa(i, { delay: e = 0, duration: t = 400, easing: n = Xm, x: s = 0, y: l = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [h, d] = Ha(s), [_, g] = Ha(l);
  return { delay: e, duration: t, easing: n, css: (u, b) => `
			transform: ${c} translate(${(1 - u) * h}${d}, ${(1 - u) * _}${g});
			opacity: ${a - f * b}` };
}
const Bi = [];
function Dm(i, e = nl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (a = o, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = o, t)) {
      const c = !Bi.length;
      for (const f of n) f[1](), Bi.push(f, i);
      if (c) {
        for (let f = 0; f < Bi.length; f += 2) Bi[f][0](Bi[f + 1]);
        Bi.length = 0;
      }
    }
    var r, a;
  }
  function l(o) {
    s(o(i));
  }
  return { set: s, update: l, subscribe: function(o, r = nl) {
    const a = [o, r];
    return n.add(a), n.size === 1 && (t = e(s, l) || nl), o(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Fa(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Ro(i, e, t, n) {
  if (typeof t == "number" || Fa(t)) {
    const s = n - t, l = (t - e) / (i.dt || 1 / 60), o = (l + (i.opts.stiffness * s - i.opts.damping * l) * i.inv_mass) * i.dt;
    return Math.abs(o) < i.opts.precision && Math.abs(s) < i.opts.precision ? n : (i.settled = !1, Fa(t) ? new Date(t.getTime() + o) : t + o);
  }
  if (Array.isArray(t)) return t.map((s, l) => Ro(i, e[l], t[l], n[l]));
  if (typeof t == "object") {
    const s = {};
    for (const l in t) s[l] = Ro(i, e[l], t[l], n[l]);
    return s;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function ja(i, e = {}) {
  const t = Dm(i), { stiffness: n = 0.15, damping: s = 0.8, precision: l = 0.01 } = e;
  let o, r, a, c = i, f = i, h = 1, d = 0, _ = !1;
  function g(b, p = {}) {
    f = b;
    const k = a = {};
    return i == null || p.hard || u.stiffness >= 1 && u.damping >= 1 ? (_ = !0, o = Ia(), c = b, t.set(i = f), Promise.resolve()) : (p.soft && (d = 1 / (60 * (p.soft === !0 ? 0.5 : +p.soft)), h = 0), r || (o = Ia(), _ = !1, r = Bm((v) => {
      if (_) return _ = !1, r = null, !1;
      h = Math.min(h + d, 1);
      const S = { inv_mass: h, opts: u, settled: !0, dt: 60 * (v - o) / 1e3 }, y = Ro(S, c, i, f);
      return o = v, c = i, t.set(i = y), S.settled && (r = null), !S.settled;
    })), new Promise((v) => {
      r.promise.then(() => {
        k === a && v();
      });
    }));
  }
  const u = { set: g, update: (b, p) => g(b(f, i), p), subscribe: t.subscribe, stiffness: n, damping: s, precision: l };
  return u;
}
const {
  SvelteComponent: Em,
  append: Nt,
  attr: ge,
  component_subscribe: Ta,
  detach: Rm,
  element: Lm,
  init: qm,
  insert: Pm,
  noop: Oa,
  safe_not_equal: Hm,
  set_style: Ds,
  svg_element: Vt,
  toggle_class: Ua
} = window.__gradio__svelte__internal, { onMount: Im } = window.__gradio__svelte__internal;
function Am(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d;
  return {
    c() {
      e = Lm("div"), t = Vt("svg"), n = Vt("g"), s = Vt("path"), l = Vt("path"), o = Vt("path"), r = Vt("path"), a = Vt("g"), c = Vt("path"), f = Vt("path"), h = Vt("path"), d = Vt("path"), ge(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ge(s, "fill", "#FF7C00"), ge(s, "fill-opacity", "0.4"), ge(s, "class", "svelte-43sxxs"), ge(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ge(l, "fill", "#FF7C00"), ge(l, "class", "svelte-43sxxs"), ge(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ge(o, "fill", "#FF7C00"), ge(o, "fill-opacity", "0.4"), ge(o, "class", "svelte-43sxxs"), ge(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ge(r, "fill", "#FF7C00"), ge(r, "class", "svelte-43sxxs"), Ds(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ge(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ge(c, "fill", "#FF7C00"), ge(c, "fill-opacity", "0.4"), ge(c, "class", "svelte-43sxxs"), ge(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ge(f, "fill", "#FF7C00"), ge(f, "class", "svelte-43sxxs"), ge(h, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ge(h, "fill", "#FF7C00"), ge(h, "fill-opacity", "0.4"), ge(h, "class", "svelte-43sxxs"), ge(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ge(d, "fill", "#FF7C00"), ge(d, "class", "svelte-43sxxs"), Ds(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ge(t, "viewBox", "-1200 -1200 3000 3000"), ge(t, "fill", "none"), ge(t, "xmlns", "http://www.w3.org/2000/svg"), ge(t, "class", "svelte-43sxxs"), ge(e, "class", "svelte-43sxxs"), Ua(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(_, g) {
      Pm(_, e, g), Nt(e, t), Nt(t, n), Nt(n, s), Nt(n, l), Nt(n, o), Nt(n, r), Nt(t, a), Nt(a, c), Nt(a, f), Nt(a, h), Nt(a, d);
    },
    p(_, [g]) {
      g & /*$top*/
      2 && Ds(n, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), g & /*$bottom*/
      4 && Ds(a, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), g & /*margin*/
      1 && Ua(
        e,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: Oa,
    o: Oa,
    d(_) {
      _ && Rm(e);
    }
  };
}
function Fm(i, e, t) {
  let n, s;
  var l = this && this.__awaiter || function(_, g, u, b) {
    function p(k) {
      return k instanceof u ? k : new u(function(v) {
        v(k);
      });
    }
    return new (u || (u = Promise))(function(k, v) {
      function S(B) {
        try {
          w(b.next(B));
        } catch (X) {
          v(X);
        }
      }
      function y(B) {
        try {
          w(b.throw(B));
        } catch (X) {
          v(X);
        }
      }
      function w(B) {
        B.done ? k(B.value) : p(B.value).then(S, y);
      }
      w((b = b.apply(_, g || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = ja([0, 0]);
  Ta(i, r, (_) => t(1, n = _));
  const a = ja([0, 0]);
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
  return Im(() => (d(), () => c = !0)), i.$$set = (_) => {
    "margin" in _ && t(0, o = _.margin);
  }, [o, n, s, r, a];
}
class jm extends Em {
  constructor(e) {
    super(), qm(this, e, Fm, Am, Hm, { margin: 0 });
  }
}
const {
  SvelteComponent: Tm,
  append: ci,
  attr: $t,
  binding_callbacks: Na,
  check_outros: Lo,
  create_component: Oc,
  create_slot: Uc,
  destroy_component: Nc,
  destroy_each: Vc,
  detach: ce,
  element: dn,
  empty: Zi,
  ensure_array_like: al,
  get_all_dirty_from_scope: Kc,
  get_slot_changes: Zc,
  group_outros: qo,
  init: Om,
  insert: fe,
  mount_component: Jc,
  noop: Po,
  safe_not_equal: Um,
  set_data: jt,
  set_style: On,
  space: Ft,
  text: He,
  toggle_class: It,
  transition_in: Qt,
  transition_out: _n,
  update_slot_base: Gc
} = window.__gradio__svelte__internal, { tick: Nm } = window.__gradio__svelte__internal, { onDestroy: Vm } = window.__gradio__svelte__internal, { createEventDispatcher: Km } = window.__gradio__svelte__internal, Zm = (i) => ({}), Va = (i) => ({}), Jm = (i) => ({}), Ka = (i) => ({});
function Za(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ja(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Gm(i) {
  let e, t, n, s, l = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new wl({
    props: {
      Icon: Dc,
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
  ), f = Uc(
    c,
    i,
    /*$$scope*/
    i[29],
    Va
  );
  return {
    c() {
      e = dn("div"), Oc(t.$$.fragment), n = Ft(), s = dn("span"), o = He(l), r = Ft(), f && f.c(), $t(e, "class", "clear-status svelte-16nch4a"), $t(s, "class", "error svelte-16nch4a");
    },
    m(h, d) {
      fe(h, e, d), Jc(t, e, null), fe(h, n, d), fe(h, s, d), ci(s, o), fe(h, r, d), f && f.m(h, d), a = !0;
    },
    p(h, d) {
      const _ = {};
      d[0] & /*i18n*/
      2 && (_.label = /*i18n*/
      h[1]("common.clear")), t.$set(_), (!a || d[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      h[1]("common.error") + "") && jt(o, l), f && f.p && (!a || d[0] & /*$$scope*/
      536870912) && Gc(
        f,
        c,
        h,
        /*$$scope*/
        h[29],
        a ? Zc(
          c,
          /*$$scope*/
          h[29],
          d,
          Zm
        ) : Kc(
          /*$$scope*/
          h[29]
        ),
        Va
      );
    },
    i(h) {
      a || (Qt(t.$$.fragment, h), Qt(f, h), a = !0);
    },
    o(h) {
      _n(t.$$.fragment, h), _n(f, h), a = !1;
    },
    d(h) {
      h && (ce(e), ce(n), ce(s), ce(r)), Nc(t), f && f.d(h);
    }
  };
}
function Qm(i) {
  let e, t, n, s, l, o, r, a, c, f = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ga(i)
  );
  function h(v, S) {
    if (
      /*progress*/
      v[7]
    ) return t1;
    if (
      /*queue_position*/
      v[2] !== null && /*queue_size*/
      v[3] !== void 0 && /*queue_position*/
      v[2] >= 0
    ) return e1;
    if (
      /*queue_position*/
      v[2] === 0
    ) return $m;
  }
  let d = h(i), _ = d && d(i), g = (
    /*timer*/
    i[5] && er(i)
  );
  const u = [l1, s1], b = [];
  function p(v, S) {
    return (
      /*last_progress_level*/
      v[15] != null ? 0 : (
        /*show_progress*/
        v[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = p(i)) && (o = b[l] = u[l](i));
  let k = !/*timer*/
  i[5] && ar(i);
  return {
    c() {
      f && f.c(), e = Ft(), t = dn("div"), _ && _.c(), n = Ft(), g && g.c(), s = Ft(), o && o.c(), r = Ft(), k && k.c(), a = Zi(), $t(t, "class", "progress-text svelte-16nch4a"), It(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), It(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(v, S) {
      f && f.m(v, S), fe(v, e, S), fe(v, t, S), _ && _.m(t, null), ci(t, n), g && g.m(t, null), fe(v, s, S), ~l && b[l].m(v, S), fe(v, r, S), k && k.m(v, S), fe(v, a, S), c = !0;
    },
    p(v, S) {
      /*variant*/
      v[8] === "default" && /*show_eta_bar*/
      v[18] && /*show_progress*/
      v[6] === "full" ? f ? f.p(v, S) : (f = Ga(v), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = h(v)) && _ ? _.p(v, S) : (_ && _.d(1), _ = d && d(v), _ && (_.c(), _.m(t, n))), /*timer*/
      v[5] ? g ? g.p(v, S) : (g = er(v), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!c || S[0] & /*variant*/
      256) && It(
        t,
        "meta-text-center",
        /*variant*/
        v[8] === "center"
      ), (!c || S[0] & /*variant*/
      256) && It(
        t,
        "meta-text",
        /*variant*/
        v[8] === "default"
      );
      let y = l;
      l = p(v), l === y ? ~l && b[l].p(v, S) : (o && (qo(), _n(b[y], 1, 1, () => {
        b[y] = null;
      }), Lo()), ~l ? (o = b[l], o ? o.p(v, S) : (o = b[l] = u[l](v), o.c()), Qt(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      v[5] ? k && (qo(), _n(k, 1, 1, () => {
        k = null;
      }), Lo()) : k ? (k.p(v, S), S[0] & /*timer*/
      32 && Qt(k, 1)) : (k = ar(v), k.c(), Qt(k, 1), k.m(a.parentNode, a));
    },
    i(v) {
      c || (Qt(o), Qt(k), c = !0);
    },
    o(v) {
      _n(o), _n(k), c = !1;
    },
    d(v) {
      v && (ce(e), ce(t), ce(s), ce(r), ce(a)), f && f.d(v), _ && _.d(), g && g.d(), ~l && b[l].d(v), k && k.d(v);
    }
  };
}
function Ga(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = dn("div"), $t(e, "class", "eta-bar svelte-16nch4a"), On(e, "transform", t);
    },
    m(n, s) {
      fe(n, e, s);
    },
    p(n, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && On(e, "transform", t);
    },
    d(n) {
      n && ce(e);
    }
  };
}
function $m(i) {
  let e;
  return {
    c() {
      e = He("processing |");
    },
    m(t, n) {
      fe(t, e, n);
    },
    p: Po,
    d(t) {
      t && ce(e);
    }
  };
}
function e1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, s, l, o;
  return {
    c() {
      e = He("queue: "), n = He(t), s = He("/"), l = He(
        /*queue_size*/
        i[3]
      ), o = He(" |");
    },
    m(r, a) {
      fe(r, e, a), fe(r, n, a), fe(r, s, a), fe(r, l, a), fe(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && jt(n, t), a[0] & /*queue_size*/
      8 && jt(
        l,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (ce(e), ce(n), ce(s), ce(l), ce(o));
    }
  };
}
function t1(i) {
  let e, t = al(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = $a(Ja(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Zi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      fe(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress*/
      128) {
        t = al(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ja(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = $a(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ce(e), Vc(n, s);
    }
  };
}
function Qa(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, s, l = " ", o;
  function r(f, h) {
    return (
      /*p*/
      f[41].length != null ? i1 : n1
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = Ft(), n = He(t), s = He(" | "), o = He(l);
    },
    m(f, h) {
      c.m(f, h), fe(f, e, h), fe(f, n, h), fe(f, s, h), fe(f, o, h);
    },
    p(f, h) {
      a === (a = r(f)) && c ? c.p(f, h) : (c.d(1), c = a(f), c && (c.c(), c.m(e.parentNode, e))), h[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[41].unit + "") && jt(n, t);
    },
    d(f) {
      f && (ce(e), ce(n), ce(s), ce(o)), c.d(f);
    }
  };
}
function n1(i) {
  let e = Fi(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = He(e);
    },
    m(n, s) {
      fe(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = Fi(
        /*p*/
        n[41].index || 0
      ) + "") && jt(t, e);
    },
    d(n) {
      n && ce(t);
    }
  };
}
function i1(i) {
  let e = Fi(
    /*p*/
    i[41].index || 0
  ) + "", t, n, s = Fi(
    /*p*/
    i[41].length
  ) + "", l;
  return {
    c() {
      t = He(e), n = He("/"), l = He(s);
    },
    m(o, r) {
      fe(o, t, r), fe(o, n, r), fe(o, l, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Fi(
        /*p*/
        o[41].index || 0
      ) + "") && jt(t, e), r[0] & /*progress*/
      128 && s !== (s = Fi(
        /*p*/
        o[41].length
      ) + "") && jt(l, s);
    },
    d(o) {
      o && (ce(t), ce(n), ce(l));
    }
  };
}
function $a(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Qa(i)
  );
  return {
    c() {
      t && t.c(), e = Zi();
    },
    m(n, s) {
      t && t.m(n, s), fe(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].index != null ? t ? t.p(n, s) : (t = Qa(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ce(e), t && t.d(n);
    }
  };
}
function er(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, s;
  return {
    c() {
      e = He(
        /*formatted_timer*/
        i[20]
      ), n = He(t), s = He("s");
    },
    m(l, o) {
      fe(l, e, o), fe(l, n, o), fe(l, s, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && jt(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && jt(n, t);
    },
    d(l) {
      l && (ce(e), ce(n), ce(s));
    }
  };
}
function s1(i) {
  let e, t;
  return e = new jm({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Oc(e.$$.fragment);
    },
    m(n, s) {
      Jc(e, n, s), t = !0;
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
      _n(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Nc(e, n);
    }
  };
}
function l1(i) {
  let e, t, n, s, l, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && tr(i)
  );
  return {
    c() {
      e = dn("div"), t = dn("div"), r && r.c(), n = Ft(), s = dn("div"), l = dn("div"), $t(t, "class", "progress-level-inner svelte-16nch4a"), $t(l, "class", "progress-bar svelte-16nch4a"), On(l, "width", o), $t(s, "class", "progress-bar-wrap svelte-16nch4a"), $t(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      fe(a, e, c), ci(e, t), r && r.m(t, null), ci(e, n), ci(e, s), ci(s, l), i[31](l);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = tr(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && On(l, "width", o);
    },
    i: Po,
    o: Po,
    d(a) {
      a && ce(e), r && r.d(), i[31](null);
    }
  };
}
function tr(i) {
  let e, t = al(
    /*progress*/
    i[7]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = or(Za(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = Zi();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      fe(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        t = al(
          /*progress*/
          s[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Za(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = or(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && ce(e), Vc(n, s);
    }
  };
}
function nr(i) {
  let e, t, n, s, l = (
    /*i*/
    i[43] !== 0 && o1()
  ), o = (
    /*p*/
    i[41].desc != null && ir(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && sr()
  ), a = (
    /*progress_level*/
    i[14] != null && lr(i)
  );
  return {
    c() {
      l && l.c(), e = Ft(), o && o.c(), t = Ft(), r && r.c(), n = Ft(), a && a.c(), s = Zi();
    },
    m(c, f) {
      l && l.m(c, f), fe(c, e, f), o && o.m(c, f), fe(c, t, f), r && r.m(c, f), fe(c, n, f), a && a.m(c, f), fe(c, s, f);
    },
    p(c, f) {
      /*p*/
      c[41].desc != null ? o ? o.p(c, f) : (o = ir(c), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = sr(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, f) : (a = lr(c), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (ce(e), ce(t), ce(n), ce(s)), l && l.d(c), o && o.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function o1(i) {
  let e;
  return {
    c() {
      e = He(" /");
    },
    m(t, n) {
      fe(t, e, n);
    },
    d(t) {
      t && ce(e);
    }
  };
}
function ir(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = He(e);
    },
    m(n, s) {
      fe(n, t, s);
    },
    p(n, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && jt(t, e);
    },
    d(n) {
      n && ce(t);
    }
  };
}
function sr(i) {
  let e;
  return {
    c() {
      e = He("-");
    },
    m(t, n) {
      fe(t, e, n);
    },
    d(t) {
      t && ce(e);
    }
  };
}
function lr(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = He(e), n = He("%");
    },
    m(s, l) {
      fe(s, t, l), fe(s, n, l);
    },
    p(s, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[43]
      ] || 0)).toFixed(1) + "") && jt(t, e);
    },
    d(s) {
      s && (ce(t), ce(n));
    }
  };
}
function or(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && nr(i)
  );
  return {
    c() {
      t && t.c(), e = Zi();
    },
    m(n, s) {
      t && t.m(n, s), fe(n, e, s);
    },
    p(n, s) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, s) : (t = nr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && ce(e), t && t.d(n);
    }
  };
}
function ar(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = Uc(
    l,
    i,
    /*$$scope*/
    i[29],
    Ka
  );
  return {
    c() {
      e = dn("p"), t = He(
        /*loading_text*/
        i[9]
      ), n = Ft(), o && o.c(), $t(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      fe(r, e, a), ci(e, t), fe(r, n, a), o && o.m(r, a), s = !0;
    },
    p(r, a) {
      (!s || a[0] & /*loading_text*/
      512) && jt(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!s || a[0] & /*$$scope*/
      536870912) && Gc(
        o,
        l,
        r,
        /*$$scope*/
        r[29],
        s ? Zc(
          l,
          /*$$scope*/
          r[29],
          a,
          Jm
        ) : Kc(
          /*$$scope*/
          r[29]
        ),
        Ka
      );
    },
    i(r) {
      s || (Qt(o, r), s = !0);
    },
    o(r) {
      _n(o, r), s = !1;
    },
    d(r) {
      r && (ce(e), ce(n)), o && o.d(r);
    }
  };
}
function a1(i) {
  let e, t, n, s, l;
  const o = [Qm, Gm], r = [];
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
      e = dn("div"), n && n.c(), $t(e, "class", s = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), It(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), It(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), It(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), It(
        e,
        "border",
        /*border*/
        i[12]
      ), On(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), On(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, f) {
      fe(c, e, f), ~t && r[t].m(e, null), i[33](e), l = !0;
    },
    p(c, f) {
      let h = t;
      t = a(c), t === h ? ~t && r[t].p(c, f) : (n && (qo(), _n(r[h], 1, 1, () => {
        r[h] = null;
      }), Lo()), ~t ? (n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), Qt(n, 1), n.m(e, null)) : n = null), (!l || f[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && $t(e, "class", s), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && It(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && It(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && It(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && It(
        e,
        "border",
        /*border*/
        c[12]
      ), f[0] & /*absolute*/
      1024 && On(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && On(
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
      _n(n), l = !1;
    },
    d(c) {
      c && ce(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var r1 = function(i, e, t, n) {
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
let Es = [], Gl = !1;
function c1(i) {
  return r1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Es.push(e), !Gl) Gl = !0;
      else return;
      yield Nm(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let s = 0; s < Es.length; s++) {
          const o = Es[s].getBoundingClientRect();
          (s === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = s);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Gl = !1, Es = [];
      });
    }
  });
}
function f1(i, e, t) {
  let n, { $$slots: s = {}, $$scope: l } = e;
  this && this.__awaiter;
  const o = Km();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: f } = e, { status: h } = e, { scroll_to_output: d = !1 } = e, { timer: _ = !0 } = e, { show_progress: g = "full" } = e, { message: u = null } = e, { progress: b = null } = e, { variant: p = "default" } = e, { loading_text: k = "Loading..." } = e, { absolute: v = !0 } = e, { translucent: S = !1 } = e, { border: y = !1 } = e, { autoscroll: w } = e, B, X = !1, z = 0, M = 0, L = null, C = null, I = 0, T = null, F, D = null, Y = !0;
  const q = () => {
    t(0, a = t(27, L = t(19, O = null))), t(25, z = performance.now()), t(26, M = 0), X = !0, te();
  };
  function te() {
    requestAnimationFrame(() => {
      t(26, M = (performance.now() - z) / 1e3), X && te();
    });
  }
  function Z() {
    t(26, M = 0), t(0, a = t(27, L = t(19, O = null))), X && (X = !1);
  }
  Vm(() => {
    X && Z();
  });
  let O = null;
  function A(P) {
    Na[P ? "unshift" : "push"](() => {
      D = P, t(16, D), t(7, b), t(14, T), t(15, F);
    });
  }
  const ae = () => {
    o("clear_status");
  };
  function K(P) {
    Na[P ? "unshift" : "push"](() => {
      B = P, t(13, B);
    });
  }
  return i.$$set = (P) => {
    "i18n" in P && t(1, r = P.i18n), "eta" in P && t(0, a = P.eta), "queue_position" in P && t(2, c = P.queue_position), "queue_size" in P && t(3, f = P.queue_size), "status" in P && t(4, h = P.status), "scroll_to_output" in P && t(22, d = P.scroll_to_output), "timer" in P && t(5, _ = P.timer), "show_progress" in P && t(6, g = P.show_progress), "message" in P && t(23, u = P.message), "progress" in P && t(7, b = P.progress), "variant" in P && t(8, p = P.variant), "loading_text" in P && t(9, k = P.loading_text), "absolute" in P && t(10, v = P.absolute), "translucent" in P && t(11, S = P.translucent), "border" in P && t(12, y = P.border), "autoscroll" in P && t(24, w = P.autoscroll), "$$scope" in P && t(29, l = P.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = L), a != null && L !== a && (t(28, C = (performance.now() - z) / 1e3 + a), t(19, O = C.toFixed(1)), t(27, L = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, I = C === null || C <= 0 || !M ? null : Math.min(M / C, 1)), i.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, Y = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, T = b.map((P) => {
      if (P.index != null && P.length != null)
        return P.index / P.length;
      if (P.progress != null)
        return P.progress;
    })) : t(14, T = null), T ? (t(15, F = T[T.length - 1]), D && (F === 0 ? t(16, D.style.transition = "0", D) : t(16, D.style.transition = "150ms", D))) : t(15, F = void 0)), i.$$.dirty[0] & /*status*/
    16 && (h === "pending" ? q() : Z()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && B && d && (h === "pending" || h === "complete") && c1(B, w), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = M.toFixed(1));
  }, [
    a,
    r,
    c,
    f,
    h,
    _,
    g,
    b,
    p,
    k,
    v,
    S,
    y,
    B,
    T,
    F,
    D,
    I,
    Y,
    O,
    n,
    o,
    d,
    u,
    w,
    z,
    M,
    L,
    C,
    l,
    s,
    A,
    ae,
    K
  ];
}
class u1 extends Tm {
  constructor(e) {
    super(), Om(
      this,
      e,
      f1,
      a1,
      Um,
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
const { setContext: dw, getContext: h1 } = window.__gradio__svelte__internal, d1 = "WORKER_PROXY_CONTEXT_KEY";
function Qc() {
  return h1(d1);
}
function _1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function $c(i, e) {
  const t = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === t)
      return s;
}
function ef(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!_1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function m1(i) {
  if (i == null || !ef(i))
    return i;
  const e = Qc();
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
      type: $c(s.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: g1,
  assign: rl,
  check_outros: tf,
  compute_rest_props: rr,
  create_slot: Go,
  detach: Ml,
  element: nf,
  empty: sf,
  exclude_internal_props: p1,
  get_all_dirty_from_scope: Qo,
  get_slot_changes: $o,
  get_spread_update: lf,
  group_outros: of,
  init: b1,
  insert: zl,
  listen: af,
  prevent_default: v1,
  safe_not_equal: w1,
  set_attributes: cl,
  transition_in: gi,
  transition_out: pi,
  update_slot_base: ea
} = window.__gradio__svelte__internal, { createEventDispatcher: k1 } = window.__gradio__svelte__internal;
function y1(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Go(
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
    c = rl(c, a[f]);
  return {
    c() {
      e = nf("a"), r && r.c(), cl(e, c);
    },
    m(f, h) {
      zl(f, e, h), r && r.m(e, null), n = !0, s || (l = af(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), s = !0);
    },
    p(f, h) {
      r && r.p && (!n || h & /*$$scope*/
      128) && ea(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        n ? $o(
          o,
          /*$$scope*/
          f[7],
          h,
          null
        ) : Qo(
          /*$$scope*/
          f[7]
        ),
        null
      ), cl(e, c = lf(a, [
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
      n || (gi(r, f), n = !0);
    },
    o(f) {
      pi(r, f), n = !1;
    },
    d(f) {
      f && Ml(e), r && r.d(f), s = !1, l();
    }
  };
}
function C1(i) {
  let e, t, n, s;
  const l = [M1, S1], o = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = sf();
    },
    m(a, c) {
      o[e].m(a, c), zl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (of(), pi(o[f], 1, 1, () => {
        o[f] = null;
      }), tf(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), gi(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (gi(t), s = !0);
    },
    o(a) {
      pi(t), s = !1;
    },
    d(a) {
      a && Ml(n), o[e].d(a);
    }
  };
}
function S1(i) {
  let e, t, n, s;
  const l = (
    /*#slots*/
    i[8].default
  ), o = Go(
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
    a = rl(a, r[c]);
  return {
    c() {
      e = nf("a"), o && o.c(), cl(e, a);
    },
    m(c, f) {
      zl(c, e, f), o && o.m(e, null), t = !0, n || (s = af(e, "click", v1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && ea(
        o,
        l,
        c,
        /*$$scope*/
        c[7],
        t ? $o(
          l,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Qo(
          /*$$scope*/
          c[7]
        ),
        null
      ), cl(e, a = lf(r, [
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
      t || (gi(o, c), t = !0);
    },
    o(c) {
      pi(o, c), t = !1;
    },
    d(c) {
      c && Ml(e), o && o.d(c), n = !1, s();
    }
  };
}
function M1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Go(
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
      128) && ea(
        n,
        t,
        s,
        /*$$scope*/
        s[7],
        e ? $o(
          t,
          /*$$scope*/
          s[7],
          l,
          null
        ) : Qo(
          /*$$scope*/
          s[7]
        ),
        null
      );
    },
    i(s) {
      e || (gi(n, s), e = !0);
    },
    o(s) {
      pi(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function z1(i) {
  let e, t, n, s, l;
  const o = [C1, y1], r = [];
  function a(c, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && ef(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), s = sf();
    },
    m(c, f) {
      r[t].m(c, f), zl(c, s, f), l = !0;
    },
    p(c, [f]) {
      let h = t;
      t = a(c, f), t === h ? r[t].p(c, f) : (of(), pi(r[h], 1, 1, () => {
        r[h] = null;
      }), tf(), n = r[t], n ? n.p(c, f) : (n = r[t] = o[t](c), n.c()), gi(n, 1), n.m(s.parentNode, s));
    },
    i(c) {
      l || (gi(n), l = !0);
    },
    o(c) {
      pi(n), l = !1;
    },
    d(c) {
      c && Ml(s), r[t].d(c);
    }
  };
}
function W1(i, e, t) {
  const n = ["href", "download"];
  let s = rr(e, n), { $$slots: l = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(g, u, b, p) {
    function k(v) {
      return v instanceof b ? v : new b(function(S) {
        S(v);
      });
    }
    return new (b || (b = Promise))(function(v, S) {
      function y(X) {
        try {
          B(p.next(X));
        } catch (z) {
          S(z);
        }
      }
      function w(X) {
        try {
          B(p.throw(X));
        } catch (z) {
          S(z);
        }
      }
      function B(X) {
        X.done ? v(X.value) : k(X.value).then(y, w);
      }
      B((p = p.apply(g, u || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const f = k1();
  let h = !1;
  const d = Qc();
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
      }).then((b) => {
        if (b.status !== 200)
          throw new Error(`Failed to get file ${u} from the Wasm worker.`);
        const p = new Blob(
          [b.body],
          {
            type: $c(b.headers, "content-type")
          }
        ), k = URL.createObjectURL(p), v = document.createElement("a");
        v.href = k, v.download = c, v.click(), URL.revokeObjectURL(k);
      }).finally(() => {
        t(2, h = !1);
      });
    });
  }
  return i.$$set = (g) => {
    e = rl(rl({}, e), p1(g)), t(6, s = rr(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, c = g.download), "$$scope" in g && t(7, o = g.$$scope);
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
class x1 extends g1 {
  constructor(e) {
    super(), b1(this, e, W1, z1, w1, { href: 0, download: 1 });
  }
}
var B1 = Object.defineProperty, X1 = (i, e, t) => e in i ? B1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, pn = (i, e, t) => (X1(i, typeof e != "symbol" ? e + "" : e, t), t), rf = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ts = (i, e, t) => (rf(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Y1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, D1 = (i, e, t, n) => (rf(i, e, "write to private field"), e.set(i, t), t), An;
new Intl.Collator(0, { numeric: 1 }).compare;
async function cf(i, e) {
  return i.map(
    (t) => new E1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class E1 {
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
    pn(this, "path"), pn(this, "url"), pn(this, "orig_name"), pn(this, "size"), pn(this, "blob"), pn(this, "is_stream"), pn(this, "mime_type"), pn(this, "alt_text"), pn(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = s, this.blob = t ? void 0 : l, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class _w extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ts(this, An) + t; ; ) {
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
        D1(this, An, t);
      },
      flush: (t) => {
        if (ts(this, An) === "")
          return;
        const n = e.allowCR && ts(this, An).endsWith("\r") ? ts(this, An).slice(0, -1) : ts(this, An);
        t.enqueue(n);
      }
    }), Y1(this, An, "");
  }
}
An = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: R1,
  append: Mt,
  attr: oi,
  detach: ff,
  element: ai,
  init: L1,
  insert: uf,
  noop: cr,
  safe_not_equal: q1,
  set_data: fl,
  set_style: Ql,
  space: Ho,
  text: ji,
  toggle_class: fr
} = window.__gradio__svelte__internal, { onMount: P1, createEventDispatcher: H1, onDestroy: I1 } = window.__gradio__svelte__internal;
function ur(i) {
  let e, t, n, s, l = cs(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, c, f = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), h;
  return {
    c() {
      e = ai("div"), t = ai("span"), n = ai("div"), s = ai("progress"), o = ji(l), a = Ho(), c = ai("span"), h = ji(f), Ql(s, "visibility", "hidden"), Ql(s, "height", "0"), Ql(s, "width", "0"), s.value = r = cs(
        /*file_to_display*/
        i[2]
      ), oi(s, "max", "100"), oi(s, "class", "svelte-cr2edf"), oi(n, "class", "progress-bar svelte-cr2edf"), oi(c, "class", "file-name svelte-cr2edf"), oi(e, "class", "file svelte-cr2edf");
    },
    m(d, _) {
      uf(d, e, _), Mt(e, t), Mt(t, n), Mt(n, s), Mt(s, o), Mt(e, a), Mt(e, c), Mt(c, h);
    },
    p(d, _) {
      _ & /*file_to_display*/
      4 && l !== (l = cs(
        /*file_to_display*/
        d[2]
      ) + "") && fl(o, l), _ & /*file_to_display*/
      4 && r !== (r = cs(
        /*file_to_display*/
        d[2]
      )) && (s.value = r), _ & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && fl(h, f);
    },
    d(d) {
      d && ff(e);
    }
  };
}
function A1(i) {
  let e, t, n, s = (
    /*files_with_progress*/
    i[0].length + ""
  ), l, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, f, h = (
    /*file_to_display*/
    i[2] && ur(i)
  );
  return {
    c() {
      e = ai("div"), t = ai("span"), n = ji("Uploading "), l = ji(s), o = Ho(), a = ji(r), c = ji("..."), f = Ho(), h && h.c(), oi(t, "class", "uploading svelte-cr2edf"), oi(e, "class", "wrap svelte-cr2edf"), fr(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, _) {
      uf(d, e, _), Mt(e, t), Mt(t, n), Mt(t, l), Mt(t, o), Mt(t, a), Mt(t, c), Mt(e, f), h && h.m(e, null);
    },
    p(d, [_]) {
      _ & /*files_with_progress*/
      1 && s !== (s = /*files_with_progress*/
      d[0].length + "") && fl(l, s), _ & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && fl(a, r), /*file_to_display*/
      d[2] ? h ? h.p(d, _) : (h = ur(d), h.c(), h.m(e, null)) : h && (h.d(1), h = null), _ & /*progress*/
      2 && fr(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: cr,
    o: cr,
    d(d) {
      d && ff(e), h && h.d();
    }
  };
}
function cs(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function F1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += cs(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function j1(i, e, t) {
  var n = this && this.__awaiter || function(u, b, p, k) {
    function v(S) {
      return S instanceof p ? S : new p(function(y) {
        y(S);
      });
    }
    return new (p || (p = Promise))(function(S, y) {
      function w(z) {
        try {
          X(k.next(z));
        } catch (M) {
          y(M);
        }
      }
      function B(z) {
        try {
          X(k.throw(z));
        } catch (M) {
          y(M);
        }
      }
      function X(z) {
        z.done ? S(z.value) : v(z.value).then(w, B);
      }
      X((k = k.apply(u, b || [])).next());
    });
  };
  let { upload_id: s } = e, { root: l } = e, { files: o } = e, { stream_handler: r } = e, a, c = !1, f, h, d = o.map((u) => Object.assign(Object.assign({}, u), { progress: 0 }));
  const _ = H1();
  function g(u, b) {
    t(0, d = d.map((p) => (p.orig_name === u && (p.progress += b), p)));
  }
  return P1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${l}/upload_progress?upload_id=${s}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(u) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(u.data);
        c || t(1, c = !0), b.msg === "done" ? (a == null || a.close(), _("done")) : (t(7, f = b), g(b.orig_name, b.chunk_size));
      });
    };
  })), I1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (u) => {
    "upload_id" in u && t(3, s = u.upload_id), "root" in u && t(4, l = u.root), "files" in u && t(5, o = u.files), "stream_handler" in u && t(6, r = u.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && F1(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class T1 extends R1 {
  constructor(e) {
    super(), L1(this, e, j1, A1, q1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: O1,
  append: hr,
  attr: dt,
  binding_callbacks: U1,
  bubble: Kn,
  check_outros: hf,
  create_component: N1,
  create_slot: df,
  destroy_component: V1,
  detach: Wl,
  element: Io,
  empty: _f,
  get_all_dirty_from_scope: mf,
  get_slot_changes: gf,
  group_outros: pf,
  init: K1,
  insert: xl,
  listen: Yt,
  mount_component: Z1,
  prevent_default: Zn,
  run_all: J1,
  safe_not_equal: G1,
  set_style: bf,
  space: Q1,
  stop_propagation: Jn,
  toggle_class: st,
  transition_in: Un,
  transition_out: bi,
  update_slot_base: vf
} = window.__gradio__svelte__internal, { createEventDispatcher: $1, tick: e0 } = window.__gradio__svelte__internal;
function t0(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const d = (
    /*#slots*/
    i[26].default
  ), _ = df(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Io("button"), _ && _.c(), t = Q1(), n = Io("input"), dt(n, "aria-label", "file upload"), dt(n, "data-testid", "file-upload"), dt(n, "type", "file"), dt(n, "accept", s = /*accept_file_types*/
      i[16] || void 0), n.multiple = l = /*file_count*/
      i[6] === "multiple" || void 0, dt(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), dt(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), dt(n, "class", "svelte-1s26xmt"), dt(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), dt(e, "class", "svelte-1s26xmt"), st(
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
      ), bf(e, "height", "100%");
    },
    m(g, u) {
      xl(g, e, u), _ && _.m(e, null), hr(e, t), hr(e, n), i[34](n), c = !0, f || (h = [
        Yt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Yt(e, "drag", Jn(Zn(
          /*drag_handler*/
          i[27]
        ))),
        Yt(e, "dragstart", Jn(Zn(
          /*dragstart_handler*/
          i[28]
        ))),
        Yt(e, "dragend", Jn(Zn(
          /*dragend_handler*/
          i[29]
        ))),
        Yt(e, "dragover", Jn(Zn(
          /*dragover_handler*/
          i[30]
        ))),
        Yt(e, "dragenter", Jn(Zn(
          /*dragenter_handler*/
          i[31]
        ))),
        Yt(e, "dragleave", Jn(Zn(
          /*dragleave_handler*/
          i[32]
        ))),
        Yt(e, "drop", Jn(Zn(
          /*drop_handler*/
          i[33]
        ))),
        Yt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Yt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Yt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Yt(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], f = !0);
    },
    p(g, u) {
      _ && _.p && (!c || u[0] & /*$$scope*/
      33554432) && vf(
        _,
        d,
        g,
        /*$$scope*/
        g[25],
        c ? gf(
          d,
          /*$$scope*/
          g[25],
          u,
          null
        ) : mf(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!c || u[0] & /*accept_file_types*/
      65536 && s !== (s = /*accept_file_types*/
      g[16] || void 0)) && dt(n, "accept", s), (!c || u[0] & /*file_count*/
      64 && l !== (l = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = l), (!c || u[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "directory" || void 0)) && dt(n, "webkitdirectory", o), (!c || u[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && dt(n, "mozdirectory", r), (!c || u[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && dt(e, "tabindex", a), (!c || u[0] & /*hidden*/
      512) && st(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!c || u[0] & /*center*/
      16) && st(
        e,
        "center",
        /*center*/
        g[4]
      ), (!c || u[0] & /*boundedheight*/
      8) && st(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!c || u[0] & /*flex*/
      32) && st(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!c || u[0] & /*disable_click*/
      128) && st(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      c || (Un(_, g), c = !0);
    },
    o(g) {
      bi(_, g), c = !1;
    },
    d(g) {
      g && Wl(e), _ && _.d(g), i[34](null), f = !1, J1(h);
    }
  };
}
function n0(i) {
  let e, t, n = !/*hidden*/
  i[9] && dr(i);
  return {
    c() {
      n && n.c(), e = _f();
    },
    m(s, l) {
      n && n.m(s, l), xl(s, e, l), t = !0;
    },
    p(s, l) {
      /*hidden*/
      s[9] ? n && (pf(), bi(n, 1, 1, () => {
        n = null;
      }), hf()) : n ? (n.p(s, l), l[0] & /*hidden*/
      512 && Un(n, 1)) : (n = dr(s), n.c(), Un(n, 1), n.m(e.parentNode, e));
    },
    i(s) {
      t || (Un(n), t = !0);
    },
    o(s) {
      bi(n), t = !1;
    },
    d(s) {
      s && Wl(e), n && n.d(s);
    }
  };
}
function i0(i) {
  let e, t, n, s, l;
  const o = (
    /*#slots*/
    i[26].default
  ), r = df(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Io("button"), r && r.c(), dt(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), dt(e, "class", "svelte-1s26xmt"), st(
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
      ), bf(e, "height", "100%");
    },
    m(a, c) {
      xl(a, e, c), r && r.m(e, null), n = !0, s || (l = Yt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), s = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && vf(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? gf(
          o,
          /*$$scope*/
          a[25],
          c,
          null
        ) : mf(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && dt(e, "tabindex", t), (!n || c[0] & /*hidden*/
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
      n || (Un(r, a), n = !0);
    },
    o(a) {
      bi(r, a), n = !1;
    },
    d(a) {
      a && Wl(e), r && r.d(a), s = !1, l();
    }
  };
}
function dr(i) {
  let e, t;
  return e = new T1({
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
      N1(e.$$.fragment);
    },
    m(n, s) {
      Z1(e, n, s), t = !0;
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
      t || (Un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      V1(e, n);
    }
  };
}
function s0(i) {
  let e, t, n, s;
  const l = [i0, n0, t0], o = [];
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
      t.c(), n = _f();
    },
    m(a, c) {
      o[e].m(a, c), xl(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (pf(), bi(o[f], 1, 1, () => {
        o[f] = null;
      }), hf(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Un(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Un(t), s = !0);
    },
    o(a) {
      bi(t), s = !1;
    },
    d(a) {
      a && Wl(n), o[e].d(a);
    }
  };
}
function l0(i, e, t) {
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
function o0(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(R, U, ie, re) {
    function xe(E) {
      return E instanceof ie ? E : new ie(function(Le) {
        Le(E);
      });
    }
    return new (ie || (ie = Promise))(function(E, Le) {
      function qe(Ie) {
        try {
          Xe(re.next(Ie));
        } catch (ve) {
          Le(ve);
        }
      }
      function J(Ie) {
        try {
          Xe(re.throw(Ie));
        } catch (ve) {
          Le(ve);
        }
      }
      function Xe(Ie) {
        Ie.done ? E(Ie.value) : xe(Ie.value).then(qe, J);
      }
      Xe((re = re.apply(R, U || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: f = !0 } = e, { file_count: h = "single" } = e, { disable_click: d = !1 } = e, { root: _ } = e, { hidden: g = !1 } = e, { format: u = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: p = null } = e, { show_progress: k = !0 } = e, { max_file_size: v = null } = e, { upload: S } = e, { stream_handler: y } = e, w, B, X;
  const z = $1(), M = ["image", "video", "audio", "text", "file"], L = (R) => R.startsWith(".") || R.endsWith("/*") ? R : M.includes(R) ? R + "/*" : "." + R;
  function C() {
    t(20, r = !r);
  }
  function I() {
    navigator.clipboard.read().then((R) => l(this, void 0, void 0, function* () {
      for (let U = 0; U < R.length; U++) {
        const ie = R[U].types.find((re) => re.startsWith("image/"));
        if (ie) {
          R[U].getType(ie).then((re) => l(this, void 0, void 0, function* () {
            const xe = new File([re], `clipboard.${ie.replace("image/", "")}`);
            yield D([xe]);
          }));
          break;
        }
      }
    }));
  }
  function T() {
    d || p && (t(2, p.value = "", p), p.click());
  }
  function F(R) {
    return l(this, void 0, void 0, function* () {
      yield e0(), t(14, w = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const U = yield S(R, _, w, v ?? 1 / 0);
        return z("load", h === "single" ? U == null ? void 0 : U[0] : U), t(1, b = !1), U || [];
      } catch (U) {
        return z("error", U.message), t(1, b = !1), [];
      }
    });
  }
  function D(R) {
    return l(this, void 0, void 0, function* () {
      if (!R.length)
        return;
      let U = R.map((ie) => new File([ie], ie instanceof File ? ie.name : "file", { type: ie.type }));
      return t(15, B = yield cf(U)), yield F(B);
    });
  }
  function Y(R) {
    return l(this, void 0, void 0, function* () {
      const U = R.target;
      if (U.files)
        if (u != "blob")
          yield D(Array.from(U.files));
        else {
          if (h === "single") {
            z("load", U.files[0]);
            return;
          }
          z("load", U.files);
        }
    });
  }
  function q(R) {
    return l(this, void 0, void 0, function* () {
      var U;
      if (t(20, r = !1), !(!((U = R.dataTransfer) === null || U === void 0) && U.files)) return;
      const ie = Array.from(R.dataTransfer.files).filter((re) => {
        const xe = "." + re.name.split(".").pop();
        return xe && l0(X, xe, re.type) || (xe && Array.isArray(o) ? o.includes(xe) : xe === o) ? !0 : (z("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield D(ie);
    });
  }
  function te(R) {
    Kn.call(this, i, R);
  }
  function Z(R) {
    Kn.call(this, i, R);
  }
  function O(R) {
    Kn.call(this, i, R);
  }
  function A(R) {
    Kn.call(this, i, R);
  }
  function ae(R) {
    Kn.call(this, i, R);
  }
  function K(R) {
    Kn.call(this, i, R);
  }
  function P(R) {
    Kn.call(this, i, R);
  }
  function _e(R) {
    U1[R ? "unshift" : "push"](() => {
      p = R, t(2, p);
    });
  }
  return i.$$set = (R) => {
    "filetype" in R && t(0, o = R.filetype), "dragging" in R && t(20, r = R.dragging), "boundedheight" in R && t(3, a = R.boundedheight), "center" in R && t(4, c = R.center), "flex" in R && t(5, f = R.flex), "file_count" in R && t(6, h = R.file_count), "disable_click" in R && t(7, d = R.disable_click), "root" in R && t(8, _ = R.root), "hidden" in R && t(9, g = R.hidden), "format" in R && t(21, u = R.format), "uploading" in R && t(1, b = R.uploading), "hidden_upload" in R && t(2, p = R.hidden_upload), "show_progress" in R && t(10, k = R.show_progress), "max_file_size" in R && t(22, v = R.max_file_size), "upload" in R && t(23, S = R.upload), "stream_handler" in R && t(11, y = R.stream_handler), "$$scope" in R && t(25, s = R.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, X = null) : typeof o == "string" ? t(16, X = L(o)) : (t(0, o = o.map(L)), t(16, X = o.join(", "))));
  }, [
    o,
    b,
    p,
    a,
    c,
    f,
    h,
    d,
    _,
    g,
    k,
    y,
    I,
    T,
    w,
    B,
    X,
    C,
    Y,
    q,
    r,
    u,
    v,
    S,
    D,
    s,
    n,
    te,
    Z,
    O,
    A,
    ae,
    K,
    P,
    _e
  ];
}
class a0 extends O1 {
  constructor(e) {
    super(), K1(
      this,
      e,
      o0,
      s0,
      G1,
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
  SvelteComponent: r0,
  append: Rs,
  attr: $l,
  create_component: c0,
  destroy_component: f0,
  detach: u0,
  element: eo,
  init: h0,
  insert: d0,
  listen: _0,
  mount_component: m0,
  noop: g0,
  safe_not_equal: p0,
  set_style: b0,
  space: v0,
  text: w0,
  transition_in: k0,
  transition_out: y0
} = window.__gradio__svelte__internal, { createEventDispatcher: C0 } = window.__gradio__svelte__internal;
function S0(i) {
  let e, t, n, s, l, o = "Click to Access Webcam", r, a, c, f;
  return s = new qc({}), {
    c() {
      e = eo("button"), t = eo("div"), n = eo("span"), c0(s.$$.fragment), l = v0(), r = w0(o), $l(n, "class", "icon-wrap svelte-fjcd9c"), $l(t, "class", "wrap svelte-fjcd9c"), $l(e, "class", "svelte-fjcd9c"), b0(e, "height", "100%");
    },
    m(h, d) {
      d0(h, e, d), Rs(e, t), Rs(t, n), m0(s, n, null), Rs(t, l), Rs(t, r), a = !0, c || (f = _0(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: g0,
    i(h) {
      a || (k0(s.$$.fragment, h), a = !0);
    },
    o(h) {
      y0(s.$$.fragment, h), a = !1;
    },
    d(h) {
      h && u0(e), f0(s), c = !1, f();
    }
  };
}
function M0(i) {
  const e = C0();
  return [e, () => e("click")];
}
class z0 extends r0 {
  constructor(e) {
    super(), h0(this, e, M0, S0, p0, {});
  }
}
function W0() {
  return navigator.mediaDevices.enumerateDevices();
}
function x0(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function _r(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, s = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(s).then((l) => (x0(l, e), l));
}
function B0(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: X0,
  action_destroyer: Y0,
  add_render_callback: D0,
  append: Cn,
  attr: Je,
  binding_callbacks: E0,
  check_outros: hs,
  create_component: Ji,
  create_in_transition: R0,
  destroy_component: Gi,
  destroy_each: L0,
  detach: zt,
  element: qt,
  empty: ta,
  ensure_array_like: mr,
  group_outros: ds,
  init: q0,
  insert: Wt,
  listen: ul,
  mount_component: Qi,
  noop: na,
  run_all: P0,
  safe_not_equal: H0,
  set_data: wf,
  set_input_value: Ao,
  space: ps,
  stop_propagation: I0,
  text: kf,
  toggle_class: Ls,
  transition_in: lt,
  transition_out: _t
} = window.__gradio__svelte__internal, { createEventDispatcher: A0, onMount: F0 } = window.__gradio__svelte__internal;
function gr(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function j0(i) {
  let e, t, n, s, l, o, r, a, c, f, h;
  const d = [U0, O0], _ = [];
  function g(p, k) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(i), s = _[n] = d[n](i);
  let u = !/*recording*/
  i[8] && pr(i), b = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && br(i)
  );
  return {
    c() {
      e = qt("div"), t = qt("button"), s.c(), o = ps(), u && u.c(), r = ps(), b && b.c(), a = ta(), Je(t, "aria-label", l = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), Je(t, "class", "svelte-8hqvb6"), Je(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, k) {
      Wt(p, e, k), Cn(e, t), _[n].m(t, null), Cn(e, o), u && u.m(e, null), Wt(p, r, k), b && b.m(p, k), Wt(p, a, k), c = !0, f || (h = ul(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), f = !0);
    },
    p(p, k) {
      let v = n;
      n = g(p), n === v ? _[n].p(p, k) : (ds(), _t(_[v], 1, 1, () => {
        _[v] = null;
      }), hs(), s = _[n], s ? s.p(p, k) : (s = _[n] = d[n](p), s.c()), lt(s, 1), s.m(t, null)), (!c || k[0] & /*mode*/
      2 && l !== (l = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && Je(t, "aria-label", l), /*recording*/
      p[8] ? u && (ds(), _t(u, 1, 1, () => {
        u = null;
      }), hs()) : u ? (u.p(p, k), k[0] & /*recording*/
      256 && lt(u, 1)) : (u = pr(p), u.c(), lt(u, 1), u.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? b ? (b.p(p, k), k[0] & /*options_open, selected_device*/
      1152 && lt(b, 1)) : (b = br(p), b.c(), lt(b, 1), b.m(a.parentNode, a)) : b && (ds(), _t(b, 1, 1, () => {
        b = null;
      }), hs());
    },
    i(p) {
      c || (lt(s), lt(u), lt(b), c = !0);
    },
    o(p) {
      _t(s), _t(u), _t(b), c = !1;
    },
    d(p) {
      p && (zt(e), zt(r), zt(a)), _[n].d(), u && u.d(), b && b.d(p), f = !1, h();
    }
  };
}
function T0(i) {
  let e, t, n, s;
  return t = new z0({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = qt("div"), Ji(t.$$.fragment), Je(e, "title", "grant webcam access");
    },
    m(l, o) {
      Wt(l, e, o), Qi(t, e, null), s = !0;
    },
    p: na,
    i(l) {
      s || (lt(t.$$.fragment, l), l && (n || D0(() => {
        n = R0(e, Ym, { delay: 100, duration: 200 }), n.start();
      })), s = !0);
    },
    o(l) {
      _t(t.$$.fragment, l), s = !1;
    },
    d(l) {
      l && zt(e), Gi(t);
    }
  };
}
function O0(i) {
  let e, t, n;
  return t = new Wd({}), {
    c() {
      e = qt("div"), Ji(t.$$.fragment), Je(e, "class", "icon svelte-8hqvb6"), Je(e, "title", "capture photo");
    },
    m(s, l) {
      Wt(s, e, l), Qi(t, e, null), n = !0;
    },
    p: na,
    i(s) {
      n || (lt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      _t(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && zt(e), Gi(t);
    }
  };
}
function U0(i) {
  let e, t, n, s;
  const l = [V0, N0], o = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = ta();
    },
    m(a, c) {
      o[e].m(a, c), Wt(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e !== f && (ds(), _t(o[f], 1, 1, () => {
        o[f] = null;
      }), hs(), t = o[e], t || (t = o[e] = l[e](a), t.c()), lt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (lt(t), s = !0);
    },
    o(a) {
      _t(t), s = !1;
    },
    d(a) {
      a && zt(n), o[e].d(a);
    }
  };
}
function N0(i) {
  let e, t, n;
  return t = new Ld({}), {
    c() {
      e = qt("div"), Ji(t.$$.fragment), Je(e, "class", "icon red svelte-8hqvb6"), Je(e, "title", "start recording");
    },
    m(s, l) {
      Wt(s, e, l), Qi(t, e, null), n = !0;
    },
    i(s) {
      n || (lt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      _t(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && zt(e), Gi(t);
    }
  };
}
function V0(i) {
  let e, t, n;
  return t = new H_({}), {
    c() {
      e = qt("div"), Ji(t.$$.fragment), Je(e, "class", "icon red svelte-8hqvb6"), Je(e, "title", "stop recording");
    },
    m(s, l) {
      Wt(s, e, l), Qi(t, e, null), n = !0;
    },
    i(s) {
      n || (lt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      _t(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && zt(e), Gi(t);
    }
  };
}
function pr(i) {
  let e, t, n, s, l;
  return t = new Jo({}), {
    c() {
      e = qt("button"), Ji(t.$$.fragment), Je(e, "class", "icon svelte-8hqvb6"), Je(e, "aria-label", "select input source");
    },
    m(o, r) {
      Wt(o, e, r), Qi(t, e, null), n = !0, s || (l = ul(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), s = !0);
    },
    p: na,
    i(o) {
      n || (lt(t.$$.fragment, o), n = !0);
    },
    o(o) {
      _t(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && zt(e), Gi(t), s = !1, l();
    }
  };
}
function br(i) {
  let e, t, n, s, l, o, r;
  n = new Jo({});
  function a(h, d) {
    return (
      /*available_video_devices*/
      h[6].length === 0 ? Z0 : K0
    );
  }
  let c = a(i), f = c(i);
  return {
    c() {
      e = qt("select"), t = qt("button"), Ji(n.$$.fragment), s = ps(), f.c(), Je(t, "class", "inset-icon svelte-8hqvb6"), Je(e, "class", "select-wrap svelte-8hqvb6"), Je(e, "aria-label", "select source");
    },
    m(h, d) {
      Wt(h, e, d), Cn(e, t), Qi(n, t, null), Cn(t, s), f.m(e, null), l = !0, o || (r = [
        ul(t, "click", I0(
          /*click_handler_2*/
          i[22]
        )),
        Y0(ia.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        ul(
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
      _t(n.$$.fragment, h), l = !1;
    },
    d(h) {
      h && zt(e), Gi(n), f.d(), o = !1, P0(r);
    }
  };
}
function K0(i) {
  let e, t = mr(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let s = 0; s < t.length; s += 1)
    n[s] = vr(gr(i, t, s));
  return {
    c() {
      for (let s = 0; s < n.length; s += 1)
        n[s].c();
      e = ta();
    },
    m(s, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(s, l);
      Wt(s, e, l);
    },
    p(s, l) {
      if (l[0] & /*available_video_devices, selected_device*/
      192) {
        t = mr(
          /*available_video_devices*/
          s[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = gr(s, t, o);
          n[o] ? n[o].p(r, l) : (n[o] = vr(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(s) {
      s && zt(e), L0(n, s);
    }
  };
}
function Z0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = qt("option"), n = kf(t), e.__value = "", Ao(e, e.__value), Je(e, "class", "svelte-8hqvb6");
    },
    m(s, l) {
      Wt(s, e, l), Cn(e, n);
    },
    p(s, l) {
      l[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      s[3]("common.no_devices") + "") && wf(n, t);
    },
    d(s) {
      s && zt(e);
    }
  };
}
function vr(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, s, l, o;
  return {
    c() {
      e = qt("option"), n = kf(t), s = ps(), e.__value = l = /*device*/
      i[32].deviceId, Ao(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, Je(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Wt(r, e, a), Cn(e, n), Cn(e, s);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && wf(n, t), a[0] & /*available_video_devices*/
      64 && l !== (l = /*device*/
      r[32].deviceId) && (e.__value = l, Ao(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && zt(e);
    }
  };
}
function J0(i) {
  let e, t, n, s, l, o;
  const r = [T0, j0], a = [];
  function c(f, h) {
    return (
      /*webcam_accessed*/
      f[9] ? 1 : 0
    );
  }
  return s = c(i), l = a[s] = r[s](i), {
    c() {
      e = qt("div"), t = qt("video"), n = ps(), l.c(), Je(t, "class", "svelte-8hqvb6"), Ls(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ls(t, "hide", !/*webcam_accessed*/
      i[9]), Je(e, "class", "wrap svelte-8hqvb6");
    },
    m(f, h) {
      Wt(f, e, h), Cn(e, t), i[19](t), Cn(e, n), a[s].m(e, null), o = !0;
    },
    p(f, h) {
      (!o || h[0] & /*mirror_webcam*/
      4) && Ls(
        t,
        "flip",
        /*mirror_webcam*/
        f[2]
      ), (!o || h[0] & /*webcam_accessed*/
      512) && Ls(t, "hide", !/*webcam_accessed*/
      f[9]);
      let d = s;
      s = c(f), s === d ? a[s].p(f, h) : (ds(), _t(a[d], 1, 1, () => {
        a[d] = null;
      }), hs(), l = a[s], l ? l.p(f, h) : (l = a[s] = r[s](f), l.c()), lt(l, 1), l.m(e, null));
    },
    i(f) {
      o || (lt(l), o = !0);
    },
    o(f) {
      _t(l), o = !1;
    },
    d(f) {
      f && zt(e), i[19](null), a[s].d();
    }
  };
}
function ia(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function G0(i, e, t) {
  var n = this && this.__awaiter || function(q, te, Z, O) {
    function A(ae) {
      return ae instanceof Z ? ae : new Z(function(K) {
        K(ae);
      });
    }
    return new (Z || (Z = Promise))(function(ae, K) {
      function P(U) {
        try {
          R(O.next(U));
        } catch (ie) {
          K(ie);
        }
      }
      function _e(U) {
        try {
          R(O.throw(U));
        } catch (ie) {
          K(ie);
        }
      }
      function R(U) {
        U.done ? ae(U.value) : A(U.value).then(P, _e);
      }
      R((O = O.apply(q, te || [])).next());
    });
  };
  let s, l = [], o = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: f = "" } = e, { mode: h = "image" } = e, { mirror_webcam: d } = e, { include_audio: _ } = e, { i18n: g } = e, { upload: u } = e;
  const b = A0();
  F0(() => r = document.createElement("canvas"));
  const p = (q) => n(void 0, void 0, void 0, function* () {
    const Z = q.target.value;
    yield _r(_, s, Z).then((O) => n(void 0, void 0, void 0, function* () {
      w = O, t(7, o = l.find((A) => A.deviceId === Z) || null), t(10, C = !1);
    }));
  });
  function k() {
    return n(this, void 0, void 0, function* () {
      try {
        _r(_, s).then((q) => n(this, void 0, void 0, function* () {
          t(9, M = !0), t(6, l = yield W0()), w = q;
        })).then(() => B0(l)).then((q) => {
          t(6, l = q);
          const te = w.getTracks().map((Z) => {
            var O;
            return (O = Z.getSettings()) === null || O === void 0 ? void 0 : O.deviceId;
          })[0];
          t(7, o = te && q.find((Z) => Z.deviceId === te) || l[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && b("error", g("image.no_webcam_support"));
      } catch (q) {
        if (q instanceof DOMException && q.name == "NotAllowedError")
          b("error", g("image.allow_webcam_access"));
        else
          throw q;
      }
    });
  }
  function v() {
    var q = r.getContext("2d");
    (!a || a && S) && s.videoWidth && s.videoHeight && (r.width = s.videoWidth, r.height = s.videoHeight, q.drawImage(s, 0, 0, s.videoWidth, s.videoHeight), d && (q.scale(-1, 1), q.drawImage(s, -s.videoWidth, 0)), r.toBlob(
      (te) => {
        b(a ? "stream" : "capture", te);
      },
      "image/png",
      0.8
    ));
  }
  let S = !1, y = [], w, B, X;
  function z() {
    if (S) {
      X.stop();
      let q = new Blob(y, { type: B }), te = new FileReader();
      te.onload = function(Z) {
        return n(this, void 0, void 0, function* () {
          var O;
          if (Z.target) {
            let A = new File([q], "sample." + B.substring(6));
            const ae = yield cf([A]);
            let K = ((O = yield u(ae, f)) === null || O === void 0 ? void 0 : O.filter(Boolean))[0];
            b("capture", K), b("stop_recording");
          }
        });
      }, te.readAsDataURL(q);
    } else {
      b("start_recording"), y = [];
      let q = ["video/webm", "video/mp4"];
      for (let te of q)
        if (MediaRecorder.isTypeSupported(te)) {
          B = te;
          break;
        }
      if (B === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      X = new MediaRecorder(w, { mimeType: B }), X.addEventListener("dataavailable", function(te) {
        y.push(te.data);
      }), X.start(200);
    }
    t(8, S = !S);
  }
  let M = !1;
  function L() {
    h === "image" && a && t(8, S = !S), h === "image" ? v() : z(), !S && w && (w.getTracks().forEach((q) => q.stop()), t(5, s.srcObject = null, s), t(9, M = !1));
  }
  a && h === "image" && window.setInterval(
    () => {
      s && !c && v();
    },
    500
  );
  let C = !1;
  function I(q) {
    q.preventDefault(), q.stopPropagation(), t(10, C = !1);
  }
  function T(q) {
    E0[q ? "unshift" : "push"](() => {
      s = q, t(5, s);
    });
  }
  const F = async () => k(), D = () => t(10, C = !0), Y = () => t(10, C = !1);
  return i.$$set = (q) => {
    "streaming" in q && t(0, a = q.streaming), "pending" in q && t(15, c = q.pending), "root" in q && t(16, f = q.root), "mode" in q && t(1, h = q.mode), "mirror_webcam" in q && t(2, d = q.mirror_webcam), "include_audio" in q && t(17, _ = q.include_audio), "i18n" in q && t(3, g = q.i18n), "upload" in q && t(18, u = q.upload);
  }, [
    a,
    h,
    d,
    g,
    ia,
    s,
    l,
    o,
    S,
    M,
    C,
    p,
    k,
    L,
    I,
    c,
    f,
    _,
    u,
    T,
    F,
    D,
    Y
  ];
}
class Q0 extends X0 {
  constructor(e) {
    super(), q0(
      this,
      e,
      G0,
      J0,
      H0,
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
    return ia;
  }
}
const {
  SvelteComponent: $0,
  append: Rn,
  attr: $,
  detach: eg,
  init: tg,
  insert: ng,
  noop: to,
  safe_not_equal: ig,
  set_style: Ln,
  svg_element: bn
} = window.__gradio__svelte__internal;
function sg(i) {
  let e, t, n, s, l, o, r, a, c;
  return {
    c() {
      e = bn("svg"), t = bn("rect"), n = bn("rect"), s = bn("rect"), l = bn("rect"), o = bn("line"), r = bn("line"), a = bn("line"), c = bn("line"), $(t, "x", "2"), $(t, "y", "2"), $(t, "width", "5"), $(t, "height", "5"), $(t, "rx", "1"), $(t, "ry", "1"), $(t, "stroke-width", "2"), $(t, "fill", "none"), $(n, "x", "17"), $(n, "y", "2"), $(n, "width", "5"), $(n, "height", "5"), $(n, "rx", "1"), $(n, "ry", "1"), $(n, "stroke-width", "2"), $(n, "fill", "none"), $(s, "x", "2"), $(s, "y", "17"), $(s, "width", "5"), $(s, "height", "5"), $(s, "rx", "1"), $(s, "ry", "1"), $(s, "stroke-width", "2"), $(s, "fill", "none"), $(l, "x", "17"), $(l, "y", "17"), $(l, "width", "5"), $(l, "height", "5"), $(l, "rx", "1"), $(l, "ry", "1"), $(l, "stroke-width", "2"), $(l, "fill", "none"), $(o, "x1", "7.5"), $(o, "y1", "4.5"), $(o, "x2", "16"), $(o, "y2", "4.5"), Ln(o, "stroke-width", "2px"), $(r, "x1", "7.5"), $(r, "y1", "19.5"), $(r, "x2", "16"), $(r, "y2", "19.5"), Ln(r, "stroke-width", "2px"), $(a, "x1", "4.5"), $(a, "y1", "8"), $(a, "x2", "4.5"), $(a, "y2", "16"), Ln(a, "stroke-width", "2px"), $(c, "x1", "19.5"), $(c, "y1", "8"), $(c, "x2", "19.5"), $(c, "y2", "16"), Ln(c, "stroke-width", "2px"), $(e, "width", "100%"), $(e, "height", "100%"), $(e, "viewBox", "0 0 24 24"), $(e, "version", "1.1"), $(e, "xmlns", "http://www.w3.org/2000/svg"), $(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $(e, "xml:space", "preserve"), $(e, "stroke", "currentColor"), Ln(e, "fill-rule", "evenodd"), Ln(e, "clip-rule", "evenodd"), Ln(e, "stroke-linecap", "round"), Ln(e, "stroke-linejoin", "round");
    },
    m(f, h) {
      ng(f, e, h), Rn(e, t), Rn(e, n), Rn(e, s), Rn(e, l), Rn(e, o), Rn(e, r), Rn(e, a), Rn(e, c);
    },
    p: to,
    i: to,
    o: to,
    d(f) {
      f && eg(e);
    }
  };
}
class lg extends $0 {
  constructor(e) {
    super(), tg(this, e, null, sg, ig, {});
  }
}
const {
  SvelteComponent: og,
  append: no,
  attr: Ye,
  detach: hl,
  init: ag,
  insert: dl,
  noop: wr,
  safe_not_equal: rg,
  svg_element: fi
} = window.__gradio__svelte__internal;
function cg(i) {
  let e;
  return {
    c() {
      e = fi("circle"), Ye(e, "cx", "12"), Ye(e, "cy", "7.5"), Ye(e, "r", "2"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "1"), Ye(e, "opacity", "0.3");
    },
    m(t, n) {
      dl(t, e, n);
    },
    d(t) {
      t && hl(e);
    }
  };
}
function fg(i) {
  let e, t;
  return {
    c() {
      e = fi("circle"), t = fi("circle"), Ye(e, "cx", "12"), Ye(e, "cy", "7.5"), Ye(e, "r", "2.5"), Ye(e, "fill", "currentColor"), Ye(e, "opacity", "0.9"), Ye(t, "cx", "12"), Ye(t, "cy", "7.5"), Ye(t, "r", "1.5"), Ye(t, "fill", "white"), Ye(t, "opacity", "0.6");
    },
    m(n, s) {
      dl(n, e, s), dl(n, t, s);
    },
    d(n) {
      n && (hl(e), hl(t));
    }
  };
}
function ug(i) {
  let e, t, n, s;
  function l(a, c) {
    return (
      /*isSelected*/
      a[0] ? fg : cg
    );
  }
  let o = l(i), r = o(i);
  return {
    c() {
      e = fi("svg"), t = fi("path"), n = fi("path"), s = fi("path"), r.c(), Ye(t, "d", "M9 21h6"), Ye(n, "d", "M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"), Ye(s, "d", "M9 17h6"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "2"), Ye(e, "stroke-linecap", "round"), Ye(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      dl(a, e, c), no(e, t), no(e, n), no(e, s), r.m(e, null);
    },
    p(a, [c]) {
      o !== (o = l(a)) && (r.d(1), r = o(a), r && (r.c(), r.m(e, null)));
    },
    i: wr,
    o: wr,
    d(a) {
      a && hl(e), r.d();
    }
  };
}
function hg(i, e, t) {
  let n, { selected: s = !1 } = e;
  return i.$$set = (l) => {
    "selected" in l && t(1, s = l.selected);
  }, i.$$.update = () => {
    i.$$.dirty & /*selected*/
    2 && t(0, n = s);
  }, [n, s];
}
class dg extends og {
  constructor(e) {
    super(), ag(this, e, hg, ug, rg, { selected: 1 });
  }
}
const {
  SvelteComponent: _g,
  append: mg,
  attr: an,
  detach: gg,
  init: pg,
  insert: bg,
  noop: io,
  safe_not_equal: vg,
  svg_element: kr
} = window.__gradio__svelte__internal;
function wg(i) {
  let e, t;
  return {
    c() {
      e = kr("svg"), t = kr("circle"), an(t, "cx", "12"), an(t, "cy", "12"), an(t, "r", "10"), an(e, "xmlns", "http://www.w3.org/2000/svg"), an(e, "viewBox", "0 0 24 24"), an(e, "fill", "none"), an(e, "stroke", "currentColor"), an(e, "stroke-width", "2"), an(e, "stroke-linecap", "round"), an(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      bg(n, e, s), mg(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && gg(e);
    }
  };
}
let kg = class extends _g {
  constructor(e) {
    super(), pg(this, e, null, wg, vg, {});
  }
};
const {
  SvelteComponent: yg,
  append: ns,
  attr: tt,
  detach: Cg,
  init: Sg,
  insert: Mg,
  noop: so,
  safe_not_equal: zg,
  svg_element: Xi
} = window.__gradio__svelte__internal;
function Wg(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Xi("svg"), t = Xi("path"), n = Xi("path"), s = Xi("path"), l = Xi("line"), o = Xi("line"), tt(t, "d", "M3 6h18"), tt(n, "d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"), tt(s, "d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"), tt(l, "x1", "10"), tt(l, "y1", "11"), tt(l, "x2", "10"), tt(l, "y2", "17"), tt(o, "x1", "14"), tt(o, "y1", "11"), tt(o, "x2", "14"), tt(o, "y2", "17"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "viewBox", "0 0 24 24"), tt(e, "fill", "none"), tt(e, "stroke", "currentColor"), tt(e, "stroke-width", "2"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Mg(r, e, a), ns(e, t), ns(e, n), ns(e, s), ns(e, l), ns(e, o);
    },
    p: so,
    i: so,
    o: so,
    d(r) {
      r && Cg(e);
    }
  };
}
class xg extends yg {
  constructor(e) {
    super(), Sg(this, e, null, Wg, zg, {});
  }
}
const {
  SvelteComponent: Bg,
  append: Xg,
  attr: Kt,
  detach: Yg,
  init: Dg,
  insert: Eg,
  noop: lo,
  safe_not_equal: Rg,
  set_style: qs,
  svg_element: yr
} = window.__gradio__svelte__internal;
function Lg(i) {
  let e, t;
  return {
    c() {
      e = yr("svg"), t = yr("path"), Kt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Kt(t, "fill", "none"), Kt(t, "stroke-width", "2"), Kt(e, "width", "100%"), Kt(e, "height", "100%"), Kt(e, "viewBox", "0 0 24 24"), Kt(e, "version", "1.1"), Kt(e, "xmlns", "http://www.w3.org/2000/svg"), Kt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Kt(e, "xml:space", "preserve"), Kt(e, "stroke", "currentColor"), qs(e, "fill-rule", "evenodd"), qs(e, "clip-rule", "evenodd"), qs(e, "stroke-linecap", "round"), qs(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Eg(n, e, s), Xg(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && Yg(e);
    }
  };
}
class qg extends Bg {
  constructor(e) {
    super(), Dg(this, e, null, Lg, Rg, {});
  }
}
const {
  SvelteComponent: Pg,
  append: Hg,
  attr: Zt,
  detach: Ig,
  init: Ag,
  insert: Fg,
  noop: oo,
  safe_not_equal: jg,
  set_style: Ps,
  svg_element: Cr
} = window.__gradio__svelte__internal;
function Tg(i) {
  let e, t;
  return {
    c() {
      e = Cr("svg"), t = Cr("path"), Zt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Zt(t, "fill", "none"), Zt(t, "stroke-width", "2"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "version", "1.1"), Zt(e, "xmlns", "http://www.w3.org/2000/svg"), Zt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Zt(e, "xml:space", "preserve"), Zt(e, "stroke", "currentColor"), Ps(e, "fill-rule", "evenodd"), Ps(e, "clip-rule", "evenodd"), Ps(e, "stroke-linecap", "round"), Ps(e, "stroke-linejoin", "round");
    },
    m(n, s) {
      Fg(n, e, s), Hg(e, t);
    },
    p: oo,
    i: oo,
    o: oo,
    d(n) {
      n && Ig(e);
    }
  };
}
class Og extends Pg {
  constructor(e) {
    super(), Ag(this, e, null, Tg, jg, {});
  }
}
const {
  SvelteComponent: Ug,
  append: Sr,
  attr: vn,
  detach: Ng,
  init: Vg,
  insert: Kg,
  noop: ao,
  safe_not_equal: Zg,
  set_style: Hs,
  svg_element: ro
} = window.__gradio__svelte__internal;
function Jg(i) {
  let e, t, n;
  return {
    c() {
      e = ro("svg"), t = ro("path"), n = ro("path"), vn(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), vn(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), vn(e, "width", "100%"), vn(e, "height", "100%"), vn(e, "viewBox", "0 0 24 24"), vn(e, "xmlns", "http://www.w3.org/2000/svg"), vn(e, "fill", "none"), vn(e, "stroke", "currentColor"), vn(e, "stroke-width", "2"), Hs(e, "fill-rule", "evenodd"), Hs(e, "clip-rule", "evenodd"), Hs(e, "stroke-linecap", "round"), Hs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Kg(s, e, l), Sr(e, t), Sr(e, n);
    },
    p: ao,
    i: ao,
    o: ao,
    d(s) {
      s && Ng(e);
    }
  };
}
class Gg extends Ug {
  constructor(e) {
    super(), Vg(this, e, null, Jg, Zg, {});
  }
}
const {
  SvelteComponent: Qg,
  append: $g,
  attr: qn,
  detach: ep,
  init: tp,
  insert: np,
  noop: co,
  safe_not_equal: ip,
  set_style: Is,
  svg_element: Mr
} = window.__gradio__svelte__internal;
function sp(i) {
  let e, t;
  return {
    c() {
      e = Mr("svg"), t = Mr("path"), qn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), qn(e, "width", "100%"), qn(e, "height", "100%"), qn(e, "viewBox", "0 0 24 24"), qn(e, "fill", "none"), qn(e, "stroke", "currentColor"), qn(e, "stroke-width", "2"), Is(e, "fill-rule", "evenodd"), Is(e, "clip-rule", "evenodd"), Is(e, "stroke-linecap", "round"), Is(e, "stroke-linejoin", "round"), qn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      np(n, e, s), $g(e, t);
    },
    p: co,
    i: co,
    o: co,
    d(n) {
      n && ep(e);
    }
  };
}
class lp extends Qg {
  constructor(e) {
    super(), tp(this, e, null, sp, ip, {});
  }
}
const {
  SvelteComponent: op,
  append: ap,
  attr: Pn,
  detach: rp,
  init: cp,
  insert: fp,
  noop: fo,
  safe_not_equal: up,
  set_style: As,
  svg_element: zr
} = window.__gradio__svelte__internal;
function hp(i) {
  let e, t;
  return {
    c() {
      e = zr("svg"), t = zr("path"), Pn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Pn(e, "width", "100%"), Pn(e, "height", "100%"), Pn(e, "viewBox", "0 0 24 24"), Pn(e, "fill", "none"), Pn(e, "stroke", "currentColor"), Pn(e, "stroke-width", "2"), As(e, "fill-rule", "evenodd"), As(e, "clip-rule", "evenodd"), As(e, "stroke-linecap", "round"), As(e, "stroke-linejoin", "round"), Pn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, s) {
      fp(n, e, s), ap(e, t);
    },
    p: fo,
    i: fo,
    o: fo,
    d(n) {
      n && rp(e);
    }
  };
}
class dp extends op {
  constructor(e) {
    super(), cp(this, e, null, hp, up, {});
  }
}
const {
  SvelteComponent: _p,
  append: Wr,
  attr: yt,
  detach: mp,
  init: gp,
  insert: pp,
  noop: uo,
  safe_not_equal: bp,
  set_style: Fs,
  svg_element: ho
} = window.__gradio__svelte__internal;
function vp(i) {
  let e, t, n;
  return {
    c() {
      e = ho("svg"), t = ho("path"), n = ho("path"), yt(t, "d", "M3 17s3-2 5-3c2-1 4 0 6 1s4 2 6 0"), yt(t, "fill", "none"), yt(t, "stroke-width", "2"), yt(n, "d", "M9 6c0 0-1 2-3 3s-4 0-4 0"), yt(n, "fill", "none"), yt(n, "stroke-width", "2"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(e, "version", "1.1"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), yt(e, "xml:space", "preserve"), yt(e, "stroke", "currentColor"), Fs(e, "fill-rule", "evenodd"), Fs(e, "clip-rule", "evenodd"), Fs(e, "stroke-linecap", "round"), Fs(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      pp(s, e, l), Wr(e, t), Wr(e, n);
    },
    p: uo,
    i: uo,
    o: uo,
    d(s) {
      s && mp(e);
    }
  };
}
class wp extends _p {
  constructor(e) {
    super(), gp(this, e, null, vp, bp, {});
  }
}
const {
  SvelteComponent: kp,
  append: wn,
  attr: oe,
  detach: yp,
  init: Cp,
  insert: Sp,
  noop: _o,
  safe_not_equal: Mp,
  svg_element: rn
} = window.__gradio__svelte__internal;
function zp(i) {
  let e, t, n, s, l, o, r, a, c, f;
  return {
    c() {
      e = rn("svg"), t = rn("path"), n = rn("circle"), s = rn("circle"), l = rn("circle"), o = rn("circle"), r = rn("circle"), a = rn("circle"), c = rn("circle"), f = rn("circle"), oe(t, "fill", "none"), oe(t, "stroke", "currentColor"), oe(t, "stroke-width", "1.5"), oe(t, "stroke-linecap", "round"), oe(t, "stroke-linejoin", "round"), oe(t, "d", "M7 7l8 2l6-4l4 8l-2 8l-8-2l-6 4l-4-8z"), oe(n, "cx", "7"), oe(n, "cy", "7"), oe(n, "r", "1.5"), oe(n, "fill", "currentColor"), oe(s, "cx", "15"), oe(s, "cy", "9"), oe(s, "r", "1.5"), oe(s, "fill", "currentColor"), oe(l, "cx", "21"), oe(l, "cy", "5"), oe(l, "r", "1.5"), oe(l, "fill", "currentColor"), oe(o, "cx", "25"), oe(o, "cy", "13"), oe(o, "r", "1.5"), oe(o, "fill", "currentColor"), oe(r, "cx", "23"), oe(r, "cy", "21"), oe(r, "r", "1.5"), oe(r, "fill", "currentColor"), oe(a, "cx", "15"), oe(a, "cy", "19"), oe(a, "r", "1.5"), oe(a, "fill", "currentColor"), oe(c, "cx", "9"), oe(c, "cy", "23"), oe(c, "r", "1.5"), oe(c, "fill", "currentColor"), oe(f, "cx", "5"), oe(f, "cy", "15"), oe(f, "r", "1.5"), oe(f, "fill", "currentColor"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), oe(e, "aria-hidden", "true"), oe(e, "role", "img"), oe(e, "class", "iconify iconify--carbon"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "preserveAspectRatio", "xMidYMid meet"), oe(e, "viewBox", "0 0 32 32");
    },
    m(h, d) {
      Sp(h, e, d), wn(e, t), wn(e, n), wn(e, s), wn(e, l), wn(e, o), wn(e, r), wn(e, a), wn(e, c), wn(e, f);
    },
    p: _o,
    i: _o,
    o: _o,
    d(h) {
      h && yp(e);
    }
  };
}
let Wp = class extends kp {
  constructor(e) {
    super(), Cp(this, e, null, zp, Mp, {});
  }
};
const {
  SvelteComponent: xp,
  append: is,
  attr: me,
  detach: Bp,
  init: Xp,
  insert: Yp,
  noop: mo,
  safe_not_equal: Dp,
  set_style: js,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function Ep(i) {
  let e, t, n, s, l, o;
  return {
    c() {
      e = Yi("svg"), t = Yi("circle"), n = Yi("circle"), s = Yi("circle"), l = Yi("circle"), o = Yi("circle"), me(t, "cx", "12"), me(t, "cy", "12"), me(t, "r", "8"), me(t, "stroke-width", "2"), me(t, "fill", "none"), me(n, "cx", "12"), me(n, "cy", "12"), me(n, "r", "4"), me(n, "stroke-width", "1.5"), me(n, "fill", "none"), me(n, "opacity", "0.5"), me(s, "cx", "8"), me(s, "cy", "8"), me(s, "r", "1"), me(s, "fill", "currentColor"), me(s, "opacity", "0.6"), me(l, "cx", "16"), me(l, "cy", "8"), me(l, "r", "1"), me(l, "fill", "currentColor"), me(l, "opacity", "0.6"), me(o, "cx", "12"), me(o, "cy", "16"), me(o, "r", "1"), me(o, "fill", "currentColor"), me(o, "opacity", "0.6"), me(e, "width", "100%"), me(e, "height", "100%"), me(e, "viewBox", "0 0 24 24"), me(e, "version", "1.1"), me(e, "xmlns", "http://www.w3.org/2000/svg"), me(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), me(e, "xml:space", "preserve"), me(e, "stroke", "currentColor"), js(e, "fill-rule", "evenodd"), js(e, "clip-rule", "evenodd"), js(e, "stroke-linecap", "round"), js(e, "stroke-linejoin", "round");
    },
    m(r, a) {
      Yp(r, e, a), is(e, t), is(e, n), is(e, s), is(e, l), is(e, o);
    },
    p: mo,
    i: mo,
    o: mo,
    d(r) {
      r && Bp(e);
    }
  };
}
class Rp extends xp {
  constructor(e) {
    super(), Xp(this, e, null, Ep, Dp, {});
  }
}
const {
  SvelteComponent: Lp,
  append: xr,
  attr: Bt,
  detach: qp,
  init: Pp,
  insert: Hp,
  noop: go,
  safe_not_equal: Ip,
  set_style: Ts,
  svg_element: po
} = window.__gradio__svelte__internal;
function Ap(i) {
  let e, t, n;
  return {
    c() {
      e = po("svg"), t = po("path"), n = po("path"), Bt(t, "d", "M3 7v6h6"), Bt(t, "stroke-width", "2"), Bt(n, "d", "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"), Bt(n, "stroke-width", "2"), Bt(e, "width", "100%"), Bt(e, "height", "100%"), Bt(e, "viewBox", "0 0 24 24"), Bt(e, "version", "1.1"), Bt(e, "xmlns", "http://www.w3.org/2000/svg"), Bt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Bt(e, "xml:space", "preserve"), Bt(e, "stroke", "currentColor"), Bt(e, "fill", "none"), Ts(e, "fill-rule", "evenodd"), Ts(e, "clip-rule", "evenodd"), Ts(e, "stroke-linecap", "round"), Ts(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Hp(s, e, l), xr(e, t), xr(e, n);
    },
    p: go,
    i: go,
    o: go,
    d(s) {
      s && qp(e);
    }
  };
}
class Fp extends Lp {
  constructor(e) {
    super(), Pp(this, e, null, Ap, Ip, {});
  }
}
const {
  SvelteComponent: jp,
  append: Br,
  attr: Xt,
  detach: Tp,
  init: Op,
  insert: Up,
  noop: bo,
  safe_not_equal: Np,
  set_style: Os,
  svg_element: vo
} = window.__gradio__svelte__internal;
function Vp(i) {
  let e, t, n;
  return {
    c() {
      e = vo("svg"), t = vo("path"), n = vo("path"), Xt(t, "d", "M21 7v6h-6"), Xt(t, "stroke-width", "2"), Xt(n, "d", "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"), Xt(n, "stroke-width", "2"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24"), Xt(e, "version", "1.1"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Xt(e, "xml:space", "preserve"), Xt(e, "stroke", "currentColor"), Xt(e, "fill", "none"), Os(e, "fill-rule", "evenodd"), Os(e, "clip-rule", "evenodd"), Os(e, "stroke-linecap", "round"), Os(e, "stroke-linejoin", "round");
    },
    m(s, l) {
      Up(s, e, l), Br(e, t), Br(e, n);
    },
    p: bo,
    i: bo,
    o: bo,
    d(s) {
      s && Tp(e);
    }
  };
}
class Kp extends jp {
  constructor(e) {
    super(), Op(this, e, null, Vp, Np, {});
  }
}
const {
  SvelteComponent: Zp,
  append: Jp,
  attr: Jt,
  detach: Gp,
  init: Qp,
  insert: $p,
  noop: wo,
  safe_not_equal: e2,
  set_style: Xr,
  svg_element: Yr
} = window.__gradio__svelte__internal;
function t2(i) {
  let e, t;
  return {
    c() {
      e = Yr("svg"), t = Yr("path"), Jt(t, "d", "M7 10l5 5 5-5z"), Jt(t, "stroke", "none"), Jt(e, "width", "100%"), Jt(e, "height", "100%"), Jt(e, "viewBox", "0 0 24 24"), Jt(e, "version", "1.1"), Jt(e, "xmlns", "http://www.w3.org/2000/svg"), Jt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Jt(e, "xml:space", "preserve"), Jt(e, "stroke", "currentColor"), Jt(e, "fill", "currentColor"), Xr(e, "fill-rule", "evenodd"), Xr(e, "clip-rule", "evenodd");
    },
    m(n, s) {
      $p(n, e, s), Jp(e, t);
    },
    p: wo,
    i: wo,
    o: wo,
    d(n) {
      n && Gp(e);
    }
  };
}
class Dr extends Zp {
  constructor(e) {
    super(), Qp(this, e, null, t2, e2, {});
  }
}
const {
  SvelteComponent: n2,
  append: Er,
  attr: ko,
  bubble: Rr,
  create_component: i2,
  destroy_component: s2,
  detach: yf,
  element: Lr,
  init: l2,
  insert: Cf,
  listen: yo,
  mount_component: o2,
  run_all: a2,
  safe_not_equal: r2,
  set_data: c2,
  set_input_value: qr,
  space: f2,
  text: u2,
  transition_in: h2,
  transition_out: d2
} = window.__gradio__svelte__internal, { createEventDispatcher: _2, afterUpdate: m2 } = window.__gradio__svelte__internal;
function g2(i) {
  let e;
  return {
    c() {
      e = u2(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Cf(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && c2(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && yf(e);
    }
  };
}
function p2(i) {
  let e, t, n, s, l, o, r;
  return t = new Bc({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [g2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Lr("label"), i2(t.$$.fragment), n = f2(), s = Lr("input"), ko(s, "type", "color"), s.disabled = /*disabled*/
      i[3], ko(s, "class", "svelte-16l8u73"), ko(e, "class", "block");
    },
    m(a, c) {
      Cf(a, e, c), o2(t, e, null), Er(e, n), Er(e, s), qr(
        s,
        /*value*/
        i[0]
      ), l = !0, o || (r = [
        yo(
          s,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        yo(
          s,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        yo(
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
      1 && qr(
        s,
        /*value*/
        a[0]
      );
    },
    i(a) {
      l || (h2(t.$$.fragment, a), l = !0);
    },
    o(a) {
      d2(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && yf(e), s2(t), o = !1, a2(r);
    }
  };
}
function b2(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: s = !1 } = e, { label: l } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = _2();
  function f() {
    c("change", n), s || c("input");
  }
  m2(() => {
    t(5, s = !1);
  });
  function h(g) {
    Rr.call(this, i, g);
  }
  function d(g) {
    Rr.call(this, i, g);
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
class v2 extends n2 {
  constructor(e) {
    super(), l2(this, e, b2, p2, r2, {
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
  SvelteComponent: w2,
  append: Sf,
  attr: Pe,
  bubble: k2,
  check_outros: y2,
  create_slot: Mf,
  detach: ks,
  element: Bl,
  empty: C2,
  get_all_dirty_from_scope: zf,
  get_slot_changes: Wf,
  group_outros: S2,
  init: M2,
  insert: ys,
  listen: z2,
  safe_not_equal: W2,
  set_style: St,
  space: xf,
  src_url_equal: _l,
  toggle_class: Ti,
  transition_in: ml,
  transition_out: gl,
  update_slot_base: Bf
} = window.__gradio__svelte__internal;
function x2(i) {
  let e, t, n, s, l, o, r = (
    /*icon*/
    i[7] && Pr(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Mf(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Bl("button"), r && r.c(), t = xf(), c && c.c(), Pe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Pe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Ti(e, "hidden", !/*visible*/
      i[2]), St(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), St(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), St(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(f, h) {
      ys(f, e, h), r && r.m(e, null), Sf(e, t), c && c.m(e, null), s = !0, l || (o = z2(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), l = !0);
    },
    p(f, h) {
      /*icon*/
      f[7] ? r ? r.p(f, h) : (r = Pr(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!s || h & /*$$scope*/
      2048) && Bf(
        c,
        a,
        f,
        /*$$scope*/
        f[11],
        s ? Wf(
          a,
          /*$$scope*/
          f[11],
          h,
          null
        ) : zf(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!s || h & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && Pe(e, "class", n), (!s || h & /*elem_id*/
      1) && Pe(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!s || h & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!s || h & /*size, variant, elem_classes, visible*/
      30) && Ti(e, "hidden", !/*visible*/
      f[2]), h & /*scale*/
      512 && St(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), h & /*scale*/
      512 && St(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), h & /*min_width*/
      1024 && St(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      s || (ml(c, f), s = !0);
    },
    o(f) {
      gl(c, f), s = !1;
    },
    d(f) {
      f && ks(e), r && r.d(), c && c.d(f), l = !1, o();
    }
  };
}
function B2(i) {
  let e, t, n, s, l = (
    /*icon*/
    i[7] && Hr(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Mf(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Bl("a"), l && l.c(), t = xf(), r && r.c(), Pe(
        e,
        "href",
        /*link*/
        i[6]
      ), Pe(e, "rel", "noopener noreferrer"), Pe(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), Pe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), Pe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Ti(e, "hidden", !/*visible*/
      i[2]), Ti(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), St(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), St(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), St(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), St(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      ys(a, e, c), l && l.m(e, null), Sf(e, t), r && r.m(e, null), s = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? l ? l.p(a, c) : (l = Hr(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), r && r.p && (!s || c & /*$$scope*/
      2048) && Bf(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        s ? Wf(
          o,
          /*$$scope*/
          a[11],
          c,
          null
        ) : zf(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!s || c & /*link*/
      64) && Pe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!s || c & /*disabled*/
      256) && Pe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!s || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && Pe(e, "class", n), (!s || c & /*elem_id*/
      1) && Pe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!s || c & /*size, variant, elem_classes, visible*/
      30) && Ti(e, "hidden", !/*visible*/
      a[2]), (!s || c & /*size, variant, elem_classes, disabled*/
      282) && Ti(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && St(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && St(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && St(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && St(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      s || (ml(r, a), s = !0);
    },
    o(a) {
      gl(r, a), s = !1;
    },
    d(a) {
      a && ks(e), l && l.d(), r && r.d(a);
    }
  };
}
function Pr(i) {
  let e, t, n;
  return {
    c() {
      e = Bl("img"), Pe(e, "class", "button-icon svelte-8huxfn"), _l(e.src, t = /*icon*/
      i[7].url) || Pe(e, "src", t), Pe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ys(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !_l(e.src, t = /*icon*/
      s[7].url) && Pe(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Pe(e, "alt", n);
    },
    d(s) {
      s && ks(e);
    }
  };
}
function Hr(i) {
  let e, t, n;
  return {
    c() {
      e = Bl("img"), Pe(e, "class", "button-icon svelte-8huxfn"), _l(e.src, t = /*icon*/
      i[7].url) || Pe(e, "src", t), Pe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(s, l) {
      ys(s, e, l);
    },
    p(s, l) {
      l & /*icon*/
      128 && !_l(e.src, t = /*icon*/
      s[7].url) && Pe(e, "src", t), l & /*value*/
      32 && n !== (n = `${/*value*/
      s[5]} icon`) && Pe(e, "alt", n);
    },
    d(s) {
      s && ks(e);
    }
  };
}
function X2(i) {
  let e, t, n, s;
  const l = [B2, x2], o = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = l[e](i), {
    c() {
      t.c(), n = C2();
    },
    m(a, c) {
      o[e].m(a, c), ys(a, n, c), s = !0;
    },
    p(a, [c]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (S2(), gl(o[f], 1, 1, () => {
        o[f] = null;
      }), y2(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), ml(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (ml(t), s = !0);
    },
    o(a) {
      gl(t), s = !1;
    },
    d(a) {
      a && ks(n), o[e].d(a);
    }
  };
}
function Y2(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e, { elem_id: l = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: h = null } = e, { icon: d = null } = e, { disabled: _ = !1 } = e, { scale: g = null } = e, { min_width: u = void 0 } = e;
  function b(p) {
    k2.call(this, i, p);
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
    b
  ];
}
class Fo extends w2 {
  constructor(e) {
    super(), M2(this, e, Y2, X2, W2, {
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
  SvelteComponent: D2,
  add_render_callback: Xf,
  append: Us,
  attr: Et,
  binding_callbacks: Ir,
  check_outros: E2,
  create_bidirectional_transition: Ar,
  destroy_each: R2,
  detach: _s,
  element: pl,
  empty: L2,
  ensure_array_like: Fr,
  group_outros: q2,
  init: P2,
  insert: ms,
  listen: jo,
  prevent_default: H2,
  run_all: I2,
  safe_not_equal: A2,
  set_data: F2,
  set_style: Di,
  space: To,
  text: j2,
  toggle_class: cn,
  transition_in: Co,
  transition_out: jr
} = window.__gradio__svelte__internal, { createEventDispatcher: T2 } = window.__gradio__svelte__internal;
function Tr(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Or(i) {
  let e, t, n, s, l, o = Fr(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Ur(Tr(i, o, a));
  return {
    c() {
      e = pl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Et(e, "class", "options svelte-yuohum"), Et(e, "role", "listbox"), Di(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Di(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Di(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      ms(a, e, c);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      i[22](e), n = !0, s || (l = jo(e, "mousedown", H2(
        /*mousedown_handler*/
        i[21]
      )), s = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = Fr(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const h = Tr(a, o, f);
          r[f] ? r[f].p(h, c) : (r[f] = Ur(h), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      c & /*bottom*/
      512 && Di(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Di(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Di(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Xf(() => {
        n && (t || (t = Ar(e, Aa, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Ar(e, Aa, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && _s(e), R2(r, a), i[22](null), a && t && t.end(), s = !1, l();
    }
  };
}
function Ur(i) {
  let e, t, n, s = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), l, o, r, a, c;
  return {
    c() {
      e = pl("li"), t = pl("span"), t.textContent = "✓", n = To(), l = j2(s), o = To(), Et(t, "class", "inner-item svelte-yuohum"), cn(t, "hide", !/*selected_indices*/
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
      )), cn(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), cn(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), cn(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), cn(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(f, h) {
      ms(f, e, h), Us(e, t), Us(e, n), Us(e, l), Us(e, o);
    },
    p(f, h) {
      h & /*selected_indices, filtered_indices*/
      18 && cn(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), h & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && F2(l, s), h & /*filtered_indices*/
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
      18 && cn(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), h & /*filtered_indices, active_index*/
      34 && cn(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && cn(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), h & /*filtered_indices, active_index*/
      34 && cn(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && _s(e);
    }
  };
}
function O2(i) {
  let e, t, n, s, l;
  Xf(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Or(i)
  );
  return {
    c() {
      e = pl("div"), t = To(), o && o.c(), n = L2(), Et(e, "class", "reference");
    },
    m(r, a) {
      ms(r, e, a), i[20](e), ms(r, t, a), o && o.m(r, a), ms(r, n, a), s || (l = [
        jo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        jo(
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
      12 && Co(o, 1)) : (o = Or(r), o.c(), Co(o, 1), o.m(n.parentNode, n)) : o && (q2(), jr(o, 1, 1, () => {
        o = null;
      }), E2());
    },
    i(r) {
      Co(o);
    },
    o(r) {
      jr(o);
    },
    d(r) {
      r && (_s(e), _s(t), _s(n)), i[20](null), o && o.d(r), s = !1, I2(l);
    }
  };
}
function U2(i, e, t) {
  var n, s;
  let { choices: l } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, h, d, _, g, u, b, p, k, v;
  function S() {
    const { top: C, bottom: I } = u.getBoundingClientRect();
    t(16, h = C), t(17, d = v - I);
  }
  let y = null;
  function w() {
    r && (y !== null && clearTimeout(y), y = setTimeout(
      () => {
        S(), y = null;
      },
      10
    ));
  }
  const B = T2();
  function X() {
    t(11, v = window.innerHeight);
  }
  function z(C) {
    Ir[C ? "unshift" : "push"](() => {
      u = C, t(6, u);
    });
  }
  const M = (C) => B("change", C);
  function L(C) {
    Ir[C ? "unshift" : "push"](() => {
      b = C, t(7, b);
    });
  }
  return i.$$set = (C) => {
    "choices" in C && t(0, l = C.choices), "filtered_indices" in C && t(1, o = C.filtered_indices), "show_options" in C && t(2, r = C.show_options), "disabled" in C && t(3, a = C.disabled), "selected_indices" in C && t(4, c = C.selected_indices), "active_index" in C && t(5, f = C.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && u) {
        if (b && c.length > 0) {
          let I = b.querySelectorAll("li");
          for (const T of Array.from(I))
            if (T.getAttribute("data-index") === c[0].toString()) {
              t(14, n = b == null ? void 0 : b.scrollTo) === null || n === void 0 || n.call(b, 0, T.offsetTop);
              break;
            }
        }
        S();
        const C = t(15, s = u.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, _ = (C == null ? void 0 : C.height) || 0), t(8, g = (C == null ? void 0 : C.width) || 0);
      }
      d > h ? (t(10, k = d), t(9, p = null)) : (t(9, p = `${d + _}px`), t(10, k = h - _));
    }
  }, [
    l,
    o,
    r,
    a,
    c,
    f,
    u,
    b,
    g,
    p,
    k,
    v,
    w,
    B,
    n,
    s,
    h,
    d,
    _,
    X,
    z,
    M,
    L
  ];
}
class N2 extends D2 {
  constructor(e) {
    super(), P2(this, e, U2, O2, A2, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function V2(i, e) {
  return (i % e + e) % e;
}
function Nr(i, e) {
  return i.reduce((t, n, s) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function K2(i, e, t) {
  i("change", e), t || i("input");
}
function Z2(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), s = i.key === "ArrowUp" ? -1 : 1;
      e = t[V2(n + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: J2,
  append: Gn,
  attr: Dt,
  binding_callbacks: G2,
  check_outros: Q2,
  create_component: Oo,
  destroy_component: Uo,
  detach: sa,
  element: Ii,
  group_outros: $2,
  init: eb,
  insert: la,
  listen: Fn,
  mount_component: No,
  noop: tb,
  run_all: nb,
  safe_not_equal: ib,
  set_data: sb,
  set_input_value: Vr,
  space: So,
  text: lb,
  toggle_class: Ei,
  transition_in: Ai,
  transition_out: fs
} = window.__gradio__svelte__internal, { onMount: ob } = window.__gradio__svelte__internal, { createEventDispatcher: ab, afterUpdate: rb } = window.__gradio__svelte__internal;
function cb(i) {
  let e;
  return {
    c() {
      e = lb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      la(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && sb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && sa(e);
    }
  };
}
function Kr(i) {
  let e, t, n, s, l;
  return t = new Jo({}), {
    c() {
      e = Ii("div"), Oo(t.$$.fragment), Dt(e, "class", "icon-wrap svelte-1a9du2n");
    },
    m(o, r) {
      la(o, e, r), No(t, e, null), n = !0, s || (l = Fn(
        e,
        "click",
        /*handle_wrapper_click*/
        i[19]
      ), s = !0);
    },
    p: tb,
    i(o) {
      n || (Ai(t.$$.fragment, o), n = !0);
    },
    o(o) {
      fs(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && sa(e), Uo(t), s = !1, l();
    }
  };
}
function fb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g;
  t = new Bc({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [cb] },
      $$scope: { ctx: i }
    }
  });
  let u = !/*disabled*/
  i[3] && Kr(i);
  return h = new N2({
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
      e = Ii("div"), Oo(t.$$.fragment), n = So(), s = Ii("div"), l = Ii("div"), o = Ii("div"), r = Ii("input"), c = So(), u && u.c(), f = So(), Oo(h.$$.fragment), Dt(r, "role", "listbox"), Dt(r, "aria-controls", "dropdown-options"), Dt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Dt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Dt(r, "class", "border-none svelte-1a9du2n"), r.disabled = /*disabled*/
      i[3], Dt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Ei(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Dt(o, "class", "secondary-wrap svelte-1a9du2n"), Dt(l, "class", "wrap-inner svelte-1a9du2n"), Ei(
        l,
        "show_options",
        /*show_options*/
        i[12]
      ), Dt(s, "class", "wrap svelte-1a9du2n"), Dt(e, "class", "svelte-1a9du2n"), Ei(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(b, p) {
      la(b, e, p), No(t, e, null), Gn(e, n), Gn(e, s), Gn(s, l), Gn(l, o), Gn(o, r), Vr(
        r,
        /*input_text*/
        i[9]
      ), i[31](r), Gn(o, c), u && u.m(o, null), Gn(s, f), No(h, s, null), d = !0, _ || (g = [
        Fn(
          r,
          "input",
          /*input_input_handler*/
          i[30]
        ),
        Fn(
          r,
          "keydown",
          /*handle_key_down*/
          i[21]
        ),
        Fn(
          r,
          "keyup",
          /*keyup_handler*/
          i[32]
        ),
        Fn(
          r,
          "blur",
          /*handle_blur*/
          i[20]
        ),
        Fn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        ),
        Fn(
          o,
          "click",
          /*handle_wrapper_click*/
          i[19]
        ),
        Fn(
          s,
          "click",
          /*handle_container_click*/
          i[18]
        )
      ], _ = !0);
    },
    p(b, p) {
      const k = {};
      p[0] & /*show_label*/
      16 && (k.show_label = /*show_label*/
      b[4]), p[0] & /*info*/
      2 && (k.info = /*info*/
      b[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      16 && (k.$$scope = { dirty: p, ctx: b }), t.$set(k), (!d || p[0] & /*show_options*/
      4096) && Dt(
        r,
        "aria-expanded",
        /*show_options*/
        b[12]
      ), (!d || p[0] & /*label*/
      1) && Dt(
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
      b[9] && Vr(
        r,
        /*input_text*/
        b[9]
      ), (!d || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Ei(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? u && ($2(), fs(u, 1, 1, () => {
        u = null;
      }), Q2()) : u ? (u.p(b, p), p[0] & /*disabled*/
      8 && Ai(u, 1)) : (u = Kr(b), u.c(), Ai(u, 1), u.m(o, null)), (!d || p[0] & /*show_options*/
      4096) && Ei(
        l,
        "show_options",
        /*show_options*/
        b[12]
      );
      const v = {};
      p[0] & /*show_options*/
      4096 && (v.show_options = /*show_options*/
      b[12]), p[0] & /*choices*/
      4 && (v.choices = /*choices*/
      b[2]), p[0] & /*filtered_indices*/
      1024 && (v.filtered_indices = /*filtered_indices*/
      b[10]), p[0] & /*disabled*/
      8 && (v.disabled = /*disabled*/
      b[3]), p[0] & /*selected_index*/
      2048 && (v.selected_indices = /*selected_index*/
      b[11] === null ? [] : [
        /*selected_index*/
        b[11]
      ]), p[0] & /*active_index*/
      16384 && (v.active_index = /*active_index*/
      b[14]), h.$set(v), (!d || p[0] & /*container*/
      32) && Ei(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      d || (Ai(t.$$.fragment, b), Ai(u), Ai(h.$$.fragment, b), d = !0);
    },
    o(b) {
      fs(t.$$.fragment, b), fs(u), fs(h.$$.fragment, b), d = !1;
    },
    d(b) {
      b && sa(e), Uo(t), i[31](null), u && u.d(), Uo(h), _ = !1, nb(g);
    }
  };
}
function ub(i, e, t) {
  let { label: n } = e, { info: s = void 0 } = e, { value: l = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: f = !1 } = e, { show_label: h } = e, { container: d = !0 } = e, { allow_custom_value: _ = !1 } = e, { filterable: g = !0 } = e, u, b = !1, p, k, v = "", S = "", y = !1, w = [], B = null, X = null, z;
  const M = ab();
  l ? (z = a.map((A) => A[1]).indexOf(l), X = z, X === -1 ? (o = l, X = null) : ([v, o] = a[X], S = v), C()) : a.length > 0 && (z = 0, X = 0, [v, l] = a[X], o = l, S = v);
  function L() {
    t(13, p = a.map((A) => A[0])), t(26, k = a.map((A) => A[1]));
  }
  function C() {
    L(), l === void 0 || Array.isArray(l) && l.length === 0 ? (t(9, v = ""), t(11, X = null)) : k.includes(l) ? (t(9, v = p[k.indexOf(l)]), t(11, X = k.indexOf(l))) : _ ? (t(9, v = l), t(11, X = null)) : (t(9, v = ""), t(11, X = null)), t(29, z = X);
  }
  function I(A) {
    if (t(11, X = parseInt(A.detail.target.dataset.index)), isNaN(X)) {
      t(11, X = null);
      return;
    }
    t(12, b = !1), t(14, B = null), u.blur();
  }
  function T(A) {
    t(10, w = a.map((ae, K) => K)), t(12, b = !0), M("focus");
  }
  function F() {
    f || (u.focus(), t(12, b = !0));
  }
  function D(A) {
    A.preventDefault(), f || (u.focus(), t(12, b = !b));
  }
  function Y() {
    _ ? t(22, l = v) : t(9, v = p[k.indexOf(l)]), t(12, b = !1), t(14, B = null), M("blur");
  }
  function q(A) {
    t(12, [b, B] = Z2(A, B, w), b, (t(14, B), t(2, a), t(25, c), t(6, _), t(9, v), t(10, w), t(8, u), t(27, S), t(11, X), t(29, z), t(28, y), t(26, k))), A.key === "Enter" && (B !== null ? (t(11, X = B), t(12, b = !1), u.blur(), t(14, B = null)) : p.includes(v) ? (t(11, X = p.indexOf(v)), t(12, b = !1), t(14, B = null), u.blur()) : _ && (t(22, l = v), t(11, X = null), t(12, b = !1), t(14, B = null), u.blur()), M("enter", l));
  }
  rb(() => {
    t(23, r = !1), t(28, y = !0);
  }), ob(() => {
  });
  function te() {
    v = this.value, t(9, v), t(11, X), t(29, z), t(28, y), t(2, a), t(26, k);
  }
  function Z(A) {
    G2[A ? "unshift" : "push"](() => {
      u = A, t(8, u);
    });
  }
  const O = (A) => M("key_up", { key: A.key, input_value: v });
  return i.$$set = (A) => {
    "label" in A && t(0, n = A.label), "info" in A && t(1, s = A.info), "value" in A && t(22, l = A.value), "value_is_output" in A && t(23, r = A.value_is_output), "choices" in A && t(2, a = A.choices), "disabled" in A && t(3, f = A.disabled), "show_label" in A && t(4, h = A.show_label), "container" in A && t(5, d = A.container), "allow_custom_value" in A && t(6, _ = A.allow_custom_value), "filterable" in A && t(7, g = A.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    872417284 && X !== z && X !== null && y && (t(9, [v, l] = a[X], v, (t(22, l), t(11, X), t(29, z), t(28, y), t(2, a), t(26, k))), t(29, z = X), M("select", {
      index: X,
      value: k[X],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    29360128 && l != o && (C(), K2(M, l, r), t(24, o = l)), i.$$.dirty[0] & /*choices*/
    4 && L(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    33556292 && a !== c && (_ || C(), t(25, c = a), t(10, w = Nr(a, v)), !_ && w.length > 0 && t(14, B = w[0]), u == document.activeElement && t(12, b = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    134219332 && v !== S && (t(10, w = Nr(a, v)), t(27, S = v), !_ && w.length > 0 && t(14, B = w[0]));
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
    v,
    w,
    X,
    b,
    p,
    B,
    M,
    I,
    T,
    F,
    D,
    Y,
    q,
    l,
    r,
    o,
    c,
    k,
    S,
    y,
    z,
    te,
    Z,
    O
  ];
}
class hb extends J2 {
  constructor(e) {
    super(), eb(
      this,
      e,
      ub,
      fb,
      ib,
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
  SvelteComponent: db,
  append: Te,
  attr: At,
  check_outros: Vo,
  create_component: ui,
  destroy_component: hi,
  detach: Ci,
  element: pt,
  group_outros: Ko,
  init: _b,
  insert: Si,
  listen: il,
  mount_component: di,
  run_all: mb,
  safe_not_equal: gb,
  set_data: pb,
  set_input_value: Zr,
  set_style: We,
  space: jn,
  text: bs,
  to_number: bb,
  toggle_class: Jr,
  transition_in: gt,
  transition_out: Rt
} = window.__gradio__svelte__internal, { createEventDispatcher: vb } = window.__gradio__svelte__internal, { onMount: wb, onDestroy: kb } = window.__gradio__svelte__internal;
function Gr(i) {
  let e, t, n, s, l, o, r;
  const a = [Cb, yb], c = [];
  function f(h, d) {
    return (
      /*labelDetailLock*/
      h[3] ? 0 : 1
    );
  }
  return n = f(i), s = c[n] = a[n](i), {
    c() {
      e = pt("div"), t = pt("button"), s.c(), At(t, "class", "icon svelte-d9x7u0"), At(t, "aria-label", "Lock label detail"), Jr(
        t,
        "selected",
        /*labelDetailLock*/
        i[3] === !0
      ), We(e, "margin-right", "8px");
    },
    m(h, d) {
      Si(h, e, d), Te(e, t), c[n].m(t, null), l = !0, o || (r = il(
        t,
        "click",
        /*onLockClick*/
        i[12]
      ), o = !0);
    },
    p(h, d) {
      let _ = n;
      n = f(h), n !== _ && (Ko(), Rt(c[_], 1, 1, () => {
        c[_] = null;
      }), Vo(), s = c[n], s || (s = c[n] = a[n](h), s.c()), gt(s, 1), s.m(t, null)), (!l || d & /*labelDetailLock*/
      8) && Jr(
        t,
        "selected",
        /*labelDetailLock*/
        h[3] === !0
      );
    },
    i(h) {
      l || (gt(s), l = !0);
    },
    o(h) {
      Rt(s), l = !1;
    },
    d(h) {
      h && Ci(e), c[n].d(), o = !1, r();
    }
  };
}
function yb(i) {
  let e, t;
  return e = new dp({}), {
    c() {
      ui(e.$$.fragment);
    },
    m(n, s) {
      di(e, n, s), t = !0;
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hi(e, n);
    }
  };
}
function Cb(i) {
  let e, t;
  return e = new lp({}), {
    c() {
      ui(e.$$.fragment);
    },
    m(n, s) {
      di(e, n, s), t = !0;
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hi(e, n);
    }
  };
}
function Qr(i) {
  let e, t, n, s, l, o, r, a = Math.round(
    /*currentOpacity*/
    i[2] * 100
  ) + "", c, f, h, d;
  return {
    c() {
      e = pt("div"), t = pt("label"), t.textContent = "Opacity", n = jn(), s = pt("div"), l = pt("input"), o = jn(), r = pt("span"), c = bs(a), f = bs("%"), At(t, "for", "opacity-slider"), We(t, "font-size", "12px"), We(t, "margin-bottom", "4px"), We(t, "color", "var(--body-text-color)"), At(l, "id", "opacity-slider"), At(l, "type", "range"), At(l, "min", "0"), At(l, "max", "1"), At(l, "step", "0.05"), We(l, "flex", "1"), We(l, "height", "4px"), We(l, "background", "var(--slider-color)"), We(l, "border-radius", "2px"), We(l, "outline", "none"), We(l, "appearance", "none"), We(l, "-webkit-appearance", "none"), We(r, "font-size", "11px"), We(r, "color", "var(--body-text-color-subdued)"), We(r, "min-width", "30px"), We(r, "text-align", "center"), We(s, "display", "flex"), We(s, "align-items", "center"), We(s, "gap", "8px"), We(s, "width", "100%"), We(e, "margin-right", "20px"), We(e, "margin-bottom", "8px"), We(e, "display", "flex"), We(e, "flex-direction", "column"), We(e, "align-items", "center"), We(e, "min-width", "120px");
    },
    m(_, g) {
      Si(_, e, g), Te(e, t), Te(e, n), Te(e, s), Te(s, l), Zr(
        l,
        /*currentOpacity*/
        i[2]
      ), Te(s, o), Te(s, r), Te(r, c), Te(r, f), h || (d = [
        il(
          l,
          "change",
          /*input_change_input_handler*/
          i[17]
        ),
        il(
          l,
          "input",
          /*input_change_input_handler*/
          i[17]
        ),
        il(
          l,
          "input",
          /*onOpacityChange*/
          i[10]
        )
      ], h = !0);
    },
    p(_, g) {
      g & /*currentOpacity*/
      4 && Zr(
        l,
        /*currentOpacity*/
        _[2]
      ), g & /*currentOpacity*/
      4 && a !== (a = Math.round(
        /*currentOpacity*/
        _[2] * 100
      ) + "") && pb(c, a);
    },
    d(_) {
      _ && Ci(e), h = !1, mb(d);
    }
  };
}
function Sb(i) {
  let e;
  return {
    c() {
      e = bs("Cancel");
    },
    m(t, n) {
      Si(t, e, n);
    },
    d(t) {
      t && Ci(e);
    }
  };
}
function $r(i) {
  let e, t, n;
  return t = new Fo({
    props: {
      variant: "stop",
      $$slots: { default: [Mb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[19]
  ), {
    c() {
      e = pt("div"), ui(t.$$.fragment), We(e, "margin-right", "8px");
    },
    m(s, l) {
      Si(s, e, l), di(t, e, null), n = !0;
    },
    p(s, l) {
      const o = {};
      l & /*$$scope*/
      8388608 && (o.$$scope = { dirty: l, ctx: s }), t.$set(o);
    },
    i(s) {
      n || (gt(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Rt(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ci(e), hi(t);
    }
  };
}
function Mb(i) {
  let e;
  return {
    c() {
      e = bs("Remove");
    },
    m(t, n) {
      Si(t, e, n);
    },
    d(t) {
      t && Ci(e);
    }
  };
}
function zb(i) {
  let e;
  return {
    c() {
      e = bs("OK");
    },
    m(t, n) {
      Si(t, e, n);
    },
    d(t) {
      t && Ci(e);
    }
  };
}
function Wb(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, b, p, k, v = !/*showRemove*/
  i[5] && Gr(i);
  o = new hb({
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
  ), c = new v2({
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
    i[6] && Qr(i)
  );
  _ = new Fo({
    props: {
      $$slots: { default: [Sb] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[18]
  );
  let y = (
    /*showRemove*/
    i[5] && $r(i)
  );
  return p = new Fo({
    props: {
      variant: "primary",
      $$slots: { default: [zb] },
      $$scope: { ctx: i }
    }
  }), p.$on(
    "click",
    /*click_handler_2*/
    i[20]
  ), {
    c() {
      e = pt("div"), t = pt("div"), n = pt("span"), v && v.c(), s = jn(), l = pt("div"), ui(o.$$.fragment), r = jn(), a = pt("div"), ui(c.$$.fragment), f = jn(), S && S.c(), h = jn(), d = pt("div"), ui(_.$$.fragment), g = jn(), y && y.c(), u = jn(), b = pt("div"), ui(p.$$.fragment), We(l, "margin-right", "10px"), We(a, "margin-right", "40px"), We(a, "margin-bottom", "8px"), We(d, "margin-right", "8px"), At(n, "class", "model-content svelte-d9x7u0"), At(t, "class", "modal-container svelte-d9x7u0"), At(e, "class", "modal svelte-d9x7u0"), At(e, "id", "model-box-edit");
    },
    m(w, B) {
      Si(w, e, B), Te(e, t), Te(t, n), v && v.m(n, null), Te(n, s), Te(n, l), di(o, l, null), Te(n, r), Te(n, a), di(c, a, null), Te(n, f), S && S.m(n, null), Te(n, h), Te(n, d), di(_, d, null), Te(n, g), y && y.m(n, null), Te(n, u), Te(n, b), di(p, b, null), k = !0;
    },
    p(w, [B]) {
      /*showRemove*/
      w[5] ? v && (Ko(), Rt(v, 1, 1, () => {
        v = null;
      }), Vo()) : v ? (v.p(w, B), B & /*showRemove*/
      32 && gt(v, 1)) : (v = Gr(w), v.c(), gt(v, 1), v.m(n, s));
      const X = {};
      B & /*currentLabel*/
      1 && (X.value = /*currentLabel*/
      w[0]), B & /*choices*/
      16 && (X.choices = /*choices*/
      w[4]), o.$set(X);
      const z = {};
      B & /*currentColor*/
      2 && (z.value = /*currentColor*/
      w[1]), c.$set(z), /*showOpacity*/
      w[6] ? S ? S.p(w, B) : (S = Qr(w), S.c(), S.m(n, h)) : S && (S.d(1), S = null);
      const M = {};
      B & /*$$scope*/
      8388608 && (M.$$scope = { dirty: B, ctx: w }), _.$set(M), /*showRemove*/
      w[5] ? y ? (y.p(w, B), B & /*showRemove*/
      32 && gt(y, 1)) : (y = $r(w), y.c(), gt(y, 1), y.m(n, u)) : y && (Ko(), Rt(y, 1, 1, () => {
        y = null;
      }), Vo());
      const L = {};
      B & /*$$scope*/
      8388608 && (L.$$scope = { dirty: B, ctx: w }), p.$set(L);
    },
    i(w) {
      k || (gt(v), gt(o.$$.fragment, w), gt(c.$$.fragment, w), gt(_.$$.fragment, w), gt(y), gt(p.$$.fragment, w), k = !0);
    },
    o(w) {
      Rt(v), Rt(o.$$.fragment, w), Rt(c.$$.fragment, w), Rt(_.$$.fragment, w), Rt(y), Rt(p.$$.fragment, w), k = !1;
    },
    d(w) {
      w && Ci(e), v && v.d(), hi(o), hi(c), S && S.d(), hi(_), y && y.d(), hi(p);
    }
  };
}
function xb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: s = "" } = e, { choices: l = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { opacity: c = 0.5 } = e, { currentOpacity: f = 0.5 } = e, { showRemove: h = !0 } = e, { labelDetailLock: d = !1 } = e, { showOpacity: _ = !1 } = e;
  const g = vb();
  function u(M) {
    g("change", {
      label: s,
      color: a,
      opacity: f,
      lock: d,
      ret: M
      // -1: remove, 0: cancel, 1: change
    });
  }
  function b(M) {
    const { detail: L } = M;
    let C = L;
    Number.isInteger(C) ? (Array.isArray(o) && C < o.length && t(1, a = o[C]), Array.isArray(l) && C < l.length && t(0, s = l[C][0])) : t(0, s = C);
  }
  function p(M) {
    const { detail: L } = M;
    t(1, a = L);
  }
  function k(M) {
    t(2, f = parseFloat(M.target.value));
  }
  function v(M) {
    b(M), u(1);
  }
  function S(M) {
    t(3, d = !d);
  }
  function y(M) {
    switch (M.key) {
      case "Enter":
        u(1);
        break;
    }
  }
  wb(() => {
    document.addEventListener("keydown", y), t(0, s = n || (l.length > 0 ? l[0][0] : "")), t(1, a = r || (o.length > 0 ? o[0] : "")), t(2, f = c || 0.5);
  }), kb(() => {
    document.removeEventListener("keydown", y);
  });
  function w() {
    f = bb(this.value), t(2, f), t(16, c);
  }
  const B = () => u(0), X = () => u(-1), z = () => u(1);
  return i.$$set = (M) => {
    "label" in M && t(13, n = M.label), "currentLabel" in M && t(0, s = M.currentLabel), "choices" in M && t(4, l = M.choices), "choicesColors" in M && t(14, o = M.choicesColors), "color" in M && t(15, r = M.color), "currentColor" in M && t(1, a = M.currentColor), "opacity" in M && t(16, c = M.opacity), "currentOpacity" in M && t(2, f = M.currentOpacity), "showRemove" in M && t(5, h = M.showRemove), "labelDetailLock" in M && t(3, d = M.labelDetailLock), "showOpacity" in M && t(6, _ = M.showOpacity);
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
    b,
    p,
    k,
    v,
    S,
    n,
    o,
    r,
    c,
    w,
    B,
    X,
    z
  ];
}
class oa extends db {
  constructor(e) {
    super(), _b(this, e, xb, Wb, gb, {
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
  SvelteComponent: Bb,
  append: Ee,
  attr: ze,
  detach: Yf,
  element: ct,
  empty: Xb,
  init: Yb,
  insert: Df,
  listen: fn,
  noop: ec,
  run_all: Db,
  safe_not_equal: Eb,
  set_data: Rb,
  set_input_value: Ns,
  set_style: Vs,
  space: Hn,
  text: tc,
  to_number: Zo
} = window.__gradio__svelte__internal, { createEventDispatcher: Lb } = window.__gradio__svelte__internal;
function nc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, b, p, k, v, S, y, w, B, X, z, M, L, C, I;
  return {
    c() {
      e = ct("div"), t = ct("div"), n = ct("div"), s = ct("h3"), s.textContent = "Eraser Settings", l = Hn(), o = ct("button"), o.textContent = "×", r = Hn(), a = ct("div"), c = ct("div"), f = ct("label"), f.textContent = "Eraser Size:", h = Hn(), d = ct("div"), _ = ct("input"), g = Hn(), u = ct("input"), b = Hn(), p = ct("div"), k = ct("div"), v = Hn(), S = ct("span"), y = tc(
        /*tempSize*/
        i[1]
      ), w = tc("px"), B = Hn(), X = ct("div"), z = ct("button"), z.textContent = "Cancel", M = Hn(), L = ct("button"), L.textContent = "Apply", ze(s, "id", "eraser-settings-title"), ze(s, "class", "svelte-a42w5h"), ze(o, "class", "close-button svelte-a42w5h"), ze(o, "aria-label", "Close"), ze(n, "class", "modal-header svelte-a42w5h"), ze(f, "for", "eraser-size"), ze(f, "class", "svelte-a42w5h"), ze(_, "id", "eraser-size"), ze(_, "type", "range"), ze(_, "min", "1"), ze(_, "max", "50"), ze(_, "class", "size-slider svelte-a42w5h"), ze(u, "type", "number"), ze(u, "min", "1"), ze(u, "max", "50"), ze(u, "class", "size-input svelte-a42w5h"), ze(d, "class", "size-controls svelte-a42w5h"), ze(k, "class", "preview-circle svelte-a42w5h"), Vs(k, "width", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), Vs(k, "height", Math.min(
        /*tempSize*/
        i[1],
        30
      ) + "px"), ze(S, "class", "size-label svelte-a42w5h"), ze(p, "class", "size-preview svelte-a42w5h"), ze(c, "class", "setting-group svelte-a42w5h"), ze(a, "class", "modal-body svelte-a42w5h"), ze(z, "class", "button secondary svelte-a42w5h"), ze(L, "class", "button primary svelte-a42w5h"), ze(X, "class", "modal-footer svelte-a42w5h"), ze(t, "class", "modal-content svelte-a42w5h"), ze(e, "class", "modal-backdrop svelte-a42w5h"), ze(e, "role", "dialog"), ze(e, "aria-modal", "true"), ze(e, "aria-labelledby", "eraser-settings-title");
    },
    m(T, F) {
      Df(T, e, F), Ee(e, t), Ee(t, n), Ee(n, s), Ee(n, l), Ee(n, o), Ee(t, r), Ee(t, a), Ee(a, c), Ee(c, f), Ee(c, h), Ee(c, d), Ee(d, _), Ns(
        _,
        /*tempSize*/
        i[1]
      ), Ee(d, g), Ee(d, u), Ns(
        u,
        /*tempSize*/
        i[1]
      ), Ee(c, b), Ee(c, p), Ee(p, k), Ee(p, v), Ee(p, S), Ee(S, y), Ee(S, w), Ee(t, B), Ee(t, X), Ee(X, z), Ee(X, M), Ee(X, L), C || (I = [
        fn(
          o,
          "click",
          /*handleClose*/
          i[3]
        ),
        fn(
          _,
          "change",
          /*input0_change_input_handler*/
          i[7]
        ),
        fn(
          _,
          "input",
          /*input0_change_input_handler*/
          i[7]
        ),
        fn(
          _,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        fn(
          u,
          "input",
          /*input1_input_handler*/
          i[8]
        ),
        fn(
          u,
          "input",
          /*handleSizeChange*/
          i[2]
        ),
        fn(
          z,
          "click",
          /*handleClose*/
          i[3]
        ),
        fn(
          L,
          "click",
          /*click_handler*/
          i[9]
        ),
        fn(
          e,
          "click",
          /*handleBackdropClick*/
          i[5]
        ),
        fn(
          e,
          "keydown",
          /*handleKeydown*/
          i[4]
        )
      ], C = !0);
    },
    p(T, F) {
      F & /*tempSize*/
      2 && Ns(
        _,
        /*tempSize*/
        T[1]
      ), F & /*tempSize*/
      2 && Zo(u.value) !== /*tempSize*/
      T[1] && Ns(
        u,
        /*tempSize*/
        T[1]
      ), F & /*tempSize*/
      2 && Vs(k, "width", Math.min(
        /*tempSize*/
        T[1],
        30
      ) + "px"), F & /*tempSize*/
      2 && Vs(k, "height", Math.min(
        /*tempSize*/
        T[1],
        30
      ) + "px"), F & /*tempSize*/
      2 && Rb(
        y,
        /*tempSize*/
        T[1]
      );
    },
    d(T) {
      T && Yf(e), C = !1, Db(I);
    }
  };
}
function qb(i) {
  let e, t = (
    /*visible*/
    i[0] && nc(i)
  );
  return {
    c() {
      t && t.c(), e = Xb();
    },
    m(n, s) {
      t && t.m(n, s), Df(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = nc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: ec,
    o: ec,
    d(n) {
      n && Yf(e), t && t.d(n);
    }
  };
}
function Pb(i, e, t) {
  let { eraserSize: n = 10 } = e, { visible: s = !1 } = e;
  const l = Lb();
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
    o = Zo(this.value), t(1, o), t(0, s), t(6, n);
  }
  function d() {
    o = Zo(this.value), t(1, o), t(0, s), t(6, n);
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
class Hb extends Bb {
  constructor(e) {
    super(), Yb(this, e, Pb, qb, Eb, { eraserSize: 6, visible: 0 });
  }
}
const {
  SvelteComponent: Ib,
  append: ee,
  attr: N,
  detach: Ef,
  element: pe,
  empty: Ab,
  init: Fb,
  insert: Rf,
  listen: Ze,
  noop: ic,
  run_all: jb,
  safe_not_equal: Tb,
  set_data: Mo,
  set_input_value: Ht,
  set_style: Ri,
  space: nt,
  text: Li,
  to_number: yn
} = window.__gradio__svelte__internal, { createEventDispatcher: Ob } = window.__gradio__svelte__internal;
function sc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, b, p, k, v, S, y = Math.round(
    /*tempOpacity*/
    i[1] * 100
  ) + "", w, B, X, z, M, L, C, I, T, F, D, Y, q, te, Z, O, A, ae, K, P, _e, R, U, ie, re, xe, E, Le, qe, J, Xe, Ie, ve, Be, we, ot, De, ke, x;
  return {
    c() {
      e = pe("div"), t = pe("div"), n = pe("div"), s = pe("h3"), s.textContent = "Shape Settings", l = nt(), o = pe("button"), o.textContent = "×", r = nt(), a = pe("div"), c = pe("div"), f = pe("label"), f.textContent = "Opacity:", h = nt(), d = pe("div"), _ = pe("input"), g = nt(), u = pe("input"), b = nt(), p = pe("div"), k = pe("div"), v = nt(), S = pe("span"), w = Li(y), B = Li("%"), X = nt(), z = pe("div"), M = pe("label"), M.textContent = "Border Width:", L = nt(), C = pe("div"), I = pe("input"), T = nt(), F = pe("input"), D = nt(), Y = pe("div"), q = pe("div"), te = nt(), Z = pe("span"), O = Li(
        /*tempStrokeWidth*/
        i[2]
      ), A = Li("px"), ae = nt(), K = pe("div"), P = pe("label"), P.textContent = "Selected Border Width:", _e = nt(), R = pe("div"), U = pe("input"), ie = nt(), re = pe("input"), xe = nt(), E = pe("div"), Le = pe("div"), qe = nt(), J = pe("span"), Xe = Li(
        /*tempSelectedStrokeWidth*/
        i[3]
      ), Ie = Li("px"), ve = nt(), Be = pe("div"), we = pe("button"), we.textContent = "Cancel", ot = nt(), De = pe("button"), De.textContent = "Apply", N(s, "id", "shape-settings-title"), N(s, "class", "svelte-dfhagh"), N(o, "class", "close-button svelte-dfhagh"), N(o, "aria-label", "Close"), N(n, "class", "modal-header svelte-dfhagh"), N(f, "for", "shape-opacity"), N(f, "class", "svelte-dfhagh"), N(_, "id", "shape-opacity"), N(_, "type", "range"), N(_, "min", "0"), N(_, "max", "1"), N(_, "step", "0.05"), N(_, "class", "settings-slider svelte-dfhagh"), N(u, "type", "number"), N(u, "min", "0"), N(u, "max", "1"), N(u, "step", "0.05"), N(u, "class", "settings-input svelte-dfhagh"), N(d, "class", "slider-controls svelte-dfhagh"), N(k, "class", "opacity-preview svelte-dfhagh"), Ri(
        k,
        "opacity",
        /*tempOpacity*/
        i[1]
      ), N(S, "class", "setting-label svelte-dfhagh"), N(p, "class", "preview-container svelte-dfhagh"), N(c, "class", "setting-group svelte-dfhagh"), N(M, "for", "stroke-width"), N(M, "class", "svelte-dfhagh"), N(I, "id", "stroke-width"), N(I, "type", "range"), N(I, "min", "1"), N(I, "max", "10"), N(I, "class", "settings-slider svelte-dfhagh"), N(F, "type", "number"), N(F, "min", "1"), N(F, "max", "10"), N(F, "class", "settings-input svelte-dfhagh"), N(C, "class", "slider-controls svelte-dfhagh"), N(q, "class", "stroke-preview svelte-dfhagh"), Ri(q, "border-width", Math.min(
        /*tempStrokeWidth*/
        i[2],
        5
      ) + "px"), N(Z, "class", "setting-label svelte-dfhagh"), N(Y, "class", "preview-container svelte-dfhagh"), N(z, "class", "setting-group svelte-dfhagh"), N(P, "for", "selected-stroke-width"), N(P, "class", "svelte-dfhagh"), N(U, "id", "selected-stroke-width"), N(U, "type", "range"), N(U, "min", "1"), N(U, "max", "15"), N(U, "class", "settings-slider svelte-dfhagh"), N(re, "type", "number"), N(re, "min", "1"), N(re, "max", "15"), N(re, "class", "settings-input svelte-dfhagh"), N(R, "class", "slider-controls svelte-dfhagh"), N(Le, "class", "stroke-preview selected svelte-dfhagh"), Ri(Le, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        i[3],
        5
      ) + "px"), N(J, "class", "setting-label svelte-dfhagh"), N(E, "class", "preview-container svelte-dfhagh"), N(K, "class", "setting-group svelte-dfhagh"), N(a, "class", "modal-body svelte-dfhagh"), N(we, "class", "button secondary svelte-dfhagh"), N(De, "class", "button primary svelte-dfhagh"), N(Be, "class", "modal-footer svelte-dfhagh"), N(t, "class", "modal-content svelte-dfhagh"), N(e, "class", "modal-backdrop svelte-dfhagh"), N(e, "role", "dialog"), N(e, "aria-modal", "true"), N(e, "aria-labelledby", "shape-settings-title");
    },
    m(se, ye) {
      Rf(se, e, ye), ee(e, t), ee(t, n), ee(n, s), ee(n, l), ee(n, o), ee(t, r), ee(t, a), ee(a, c), ee(c, f), ee(c, h), ee(c, d), ee(d, _), Ht(
        _,
        /*tempOpacity*/
        i[1]
      ), ee(d, g), ee(d, u), Ht(
        u,
        /*tempOpacity*/
        i[1]
      ), ee(c, b), ee(c, p), ee(p, k), ee(p, v), ee(p, S), ee(S, w), ee(S, B), ee(a, X), ee(a, z), ee(z, M), ee(z, L), ee(z, C), ee(C, I), Ht(
        I,
        /*tempStrokeWidth*/
        i[2]
      ), ee(C, T), ee(C, F), Ht(
        F,
        /*tempStrokeWidth*/
        i[2]
      ), ee(z, D), ee(z, Y), ee(Y, q), ee(Y, te), ee(Y, Z), ee(Z, O), ee(Z, A), ee(a, ae), ee(a, K), ee(K, P), ee(K, _e), ee(K, R), ee(R, U), Ht(
        U,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ee(R, ie), ee(R, re), Ht(
        re,
        /*tempSelectedStrokeWidth*/
        i[3]
      ), ee(K, xe), ee(K, E), ee(E, Le), ee(E, qe), ee(E, J), ee(J, Xe), ee(J, Ie), ee(t, ve), ee(t, Be), ee(Be, we), ee(Be, ot), ee(Be, De), ke || (x = [
        Ze(
          o,
          "click",
          /*handleClose*/
          i[5]
        ),
        Ze(
          _,
          "change",
          /*input0_change_input_handler*/
          i[11]
        ),
        Ze(
          _,
          "input",
          /*input0_change_input_handler*/
          i[11]
        ),
        Ze(
          _,
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
          I,
          "change",
          /*input2_change_input_handler*/
          i[13]
        ),
        Ze(
          I,
          "input",
          /*input2_change_input_handler*/
          i[13]
        ),
        Ze(
          I,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          F,
          "input",
          /*input3_input_handler*/
          i[14]
        ),
        Ze(
          F,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          U,
          "change",
          /*input4_change_input_handler*/
          i[15]
        ),
        Ze(
          U,
          "input",
          /*input4_change_input_handler*/
          i[15]
        ),
        Ze(
          U,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          re,
          "input",
          /*input5_input_handler*/
          i[16]
        ),
        Ze(
          re,
          "input",
          /*handleSettingsChange*/
          i[4]
        ),
        Ze(
          we,
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
      ], ke = !0);
    },
    p(se, ye) {
      ye & /*tempOpacity*/
      2 && Ht(
        _,
        /*tempOpacity*/
        se[1]
      ), ye & /*tempOpacity*/
      2 && yn(u.value) !== /*tempOpacity*/
      se[1] && Ht(
        u,
        /*tempOpacity*/
        se[1]
      ), ye & /*tempOpacity*/
      2 && Ri(
        k,
        "opacity",
        /*tempOpacity*/
        se[1]
      ), ye & /*tempOpacity*/
      2 && y !== (y = Math.round(
        /*tempOpacity*/
        se[1] * 100
      ) + "") && Mo(w, y), ye & /*tempStrokeWidth*/
      4 && Ht(
        I,
        /*tempStrokeWidth*/
        se[2]
      ), ye & /*tempStrokeWidth*/
      4 && yn(F.value) !== /*tempStrokeWidth*/
      se[2] && Ht(
        F,
        /*tempStrokeWidth*/
        se[2]
      ), ye & /*tempStrokeWidth*/
      4 && Ri(q, "border-width", Math.min(
        /*tempStrokeWidth*/
        se[2],
        5
      ) + "px"), ye & /*tempStrokeWidth*/
      4 && Mo(
        O,
        /*tempStrokeWidth*/
        se[2]
      ), ye & /*tempSelectedStrokeWidth*/
      8 && Ht(
        U,
        /*tempSelectedStrokeWidth*/
        se[3]
      ), ye & /*tempSelectedStrokeWidth*/
      8 && yn(re.value) !== /*tempSelectedStrokeWidth*/
      se[3] && Ht(
        re,
        /*tempSelectedStrokeWidth*/
        se[3]
      ), ye & /*tempSelectedStrokeWidth*/
      8 && Ri(Le, "border-width", Math.min(
        /*tempSelectedStrokeWidth*/
        se[3],
        5
      ) + "px"), ye & /*tempSelectedStrokeWidth*/
      8 && Mo(
        Xe,
        /*tempSelectedStrokeWidth*/
        se[3]
      );
    },
    d(se) {
      se && Ef(e), ke = !1, jb(x);
    }
  };
}
function Ub(i) {
  let e, t = (
    /*visible*/
    i[0] && sc(i)
  );
  return {
    c() {
      t && t.c(), e = Ab();
    },
    m(n, s) {
      t && t.m(n, s), Rf(n, e, s);
    },
    p(n, [s]) {
      /*visible*/
      n[0] ? t ? t.p(n, s) : (t = sc(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: ic,
    o: ic,
    d(n) {
      n && Ef(e), t && t.d(n);
    }
  };
}
function Nb(i, e, t) {
  let { opacity: n = 0.5 } = e, { strokeWidth: s = 2 } = e, { selectedStrokeWidth: l = 4 } = e, { visible: o = !1 } = e;
  const r = Ob();
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
  function _(w) {
    w.key === "Escape" ? d() : w.key === "Enter" && (h(), d());
  }
  function g(w) {
    w.target === w.currentTarget && d();
  }
  function u() {
    a = yn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function b() {
    a = yn(this.value), t(1, a), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function p() {
    c = yn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function k() {
    c = yn(this.value), t(2, c), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function v() {
    f = yn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  function S() {
    f = yn(this.value), t(3, f), t(0, o), t(8, n), t(9, s), t(10, l);
  }
  const y = () => {
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
    _,
    g,
    n,
    s,
    l,
    u,
    b,
    p,
    k,
    v,
    S,
    y
  ];
}
class Vb extends Ib {
  constructor(e) {
    super(), Fb(this, e, Nb, Ub, Tb, {
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
const it = (i, e, t) => Math.min(Math.max(i, e), t);
class ti {
  constructor(e, t, n, s, l, o, r, a, c, f, h, d, _ = "rgb(255, 255, 255)", g = 0.5, u = 25, b = 8, p = 2, k = 4, v = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (S) => {
      if (this.isDragging) {
        let y = (S.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (S.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, X = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = it(y, -this._xmin, B - this._xmax), w = it(w, -this._ymin, X - this._ymax), this._xmin += y, this._ymin += w, this._xmax += y, this._ymax += w, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (S) => {
      if (this.isCreating) {
        let [y, w] = this.toBoxCoordinates(S.clientX, S.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, w = (w - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), w > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = w, this.creatingAnchorY = "ymin") : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = w : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = w : w < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = w, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (S) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = it(this._xmin, 0, y - this.minSize), this._ymin = it(this._ymin, 0, w - this.minSize), this._xmax = it(this._xmax, this.minSize, y), this._ymax = it(this._ymax, this.minSize, w), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > w ? (this._ymin -= this._ymax - w, this._ymax = w) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (S) => {
      if (this.isResizing) {
        const y = S.clientX, w = S.clientY, B = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, X = (w - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += B, this._ymin += X, this._xmin = it(this._xmin, 0, this._xmax - this.minSize), this._ymin = it(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += B, this._ymin += X, this._xmax = it(this._xmax, this._xmin + this.minSize, z), this._ymin = it(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += B, this._ymax += X, this._xmax = it(this._xmax, this._xmin + this.minSize, z), this._ymax = it(this._ymax, this._ymin + this.minSize, M);
            break;
          case 3:
            this._xmin += B, this._ymax += X, this._xmin = it(this._xmin, 0, this._xmax - this.minSize), this._ymax = it(this._ymax, this._ymin + this.minSize, M);
            break;
          case 4:
            this._ymin += X, this._ymin = it(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += B, this._xmax = it(this._xmax, this._xmin + this.minSize, z);
            break;
          case 6:
            this._ymax += X, this._ymax = it(this._ymax, this._ymin + this.minSize, M);
            break;
          case 7:
            this._xmin += B, this._xmin = it(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = v, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = h, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = p, this.selectedThickness = k, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = u, this.color = _, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
const lc = (i, e, t) => Math.min(Math.max(i, e), t);
class ni {
  constructor(e, t, n, s, l, o, r, a, c, f, h, d = "rgb(255, 255, 255)", _ = 0.5, g = 25, u = 8, b = 2, p = 4, k = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (v) => {
      if (this.isDragging) {
        const S = document.querySelector("canvas");
        if (S) {
          const y = S.getBoundingClientRect(), w = v.clientX - y.left, B = v.clientY - y.top, [X, z] = this.toBoxCoordinates(w, B);
          let M = X - this.offsetMouseX, L = z - this.offsetMouseY;
          const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, I = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
          M = lc(M, this._radius, C - this._radius), L = lc(L, this._radius, I - this._radius), this._centerX = M, this._centerY = L, this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.handleCreating = (v) => {
      if (this.isCreating) {
        const S = document.querySelector("canvas");
        if (S) {
          const y = S.getBoundingClientRect(), w = (v.clientX - y.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, B = (v.clientY - y.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, X = w - this.offsetMouseX, z = B - this.offsetMouseY, M = Math.sqrt(X * X + z * z);
          this._radius = Math.max(M, 5), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopCreating = () => {
      this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.onFinishCreation();
    }, this.handleResize = (v) => {
      if (this.isResizing) {
        const S = document.querySelector("canvas");
        if (S) {
          const y = S.getBoundingClientRect(), w = v.clientX - y.left, B = v.clientY - y.top, [X, z] = this.toBoxCoordinates(w, B), M = Math.sqrt(
            Math.pow(X - this._centerX, 2) + Math.pow(z - this._centerY, 2)
          );
          this._radius = Math.max(M, this.minSize / 2), this.applyUserScale(), this.renderCallBack();
        }
      }
    }, this.stopResize = () => {
      this.isResizing = !1, this.resizingHandleIndex = -1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize), this.onMoveEnd && this.onMoveEnd();
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = s, this.canvasYmin = l, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = k, this.label = a, this.isDragging = !1, this.isCreating = !1, this._centerX = c, this._centerY = f, this._radius = h, this.centerX = this._centerX * this.canvasWindow.scale, this.centerY = this._centerY * this.canvasWindow.scale, this.radius = this._radius * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = u, this.thickness = b, this.selectedThickness = p, this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = _, this.applyUserScale(), this.updateHandles();
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
class Tn {
  constructor(e, t, n, s, l, o, r, a, c = "rgb(255, 255, 255)", f = 0.5, h = 25, d = 8, _ = 2, g = 4, u = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag), this.onMoveEnd && this.onMoveEnd();
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, k = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, v - this._xmax)), k = Math.max(-this._ymin, Math.min(k, S - this._ymax)), this._points = this._points.map((y) => ({
          x: y.x + p,
          y: y.y + k
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreating = (b) => {
      if (this.isCreating) {
        const p = document.querySelector("canvas");
        if (p) {
          const k = p.getBoundingClientRect(), v = (b.clientX - k.left - this.canvasWindow.offsetX) / this.canvasWindow.scale, S = (b.clientY - k.top - this.canvasWindow.offsetY) / this.canvasWindow.scale, y = this._points[this._points.length - 1];
          Math.sqrt(Math.pow(v - y.x, 2) + Math.pow(S - y.y, 2)) > 2 && (this._points.push({ x: v, y: S }), this.applyUserScale(), this.updateBoundingBox(), this.renderCallBack());
        }
      }
    }, this.stopCreating = (b) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this._points.length > 1) {
        this.updateBoundingBox();
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._points = this._points.map((v) => ({
          x: Math.max(0, Math.min(v.x, p)),
          y: Math.max(0, Math.min(v.y, k))
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
        const p = b.clientX, k = b.clientY, v = document.querySelector("canvas");
        if (v) {
          const S = v.getBoundingClientRect(), y = p - S.left, w = k - S.top, B = (y - this.canvasWindow.offsetX) / this.canvasWindow.scale, X = (w - this.canvasWindow.offsetY) / this.canvasWindow.scale, z = this.getControlPointIndex(this.resizingHandleIndex);
          if (z >= 0 && z < this._points.length) {
            const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, L = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, C = Math.max(0, Math.min(B, M)), I = Math.max(0, Math.min(X, L)), T = C - this._points[z].x, F = I - this._points[z].y;
            this.applyLocalDeformation(z, T, F), this.updateBoundingBox(), this.renderCallBack();
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
    }, this.handleDrag = (b) => {
      if (this.isDragging && this._points.length > 0) {
        let p = (b.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, k = (b.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = Math.max(-this._xmin, Math.min(p, v - this._xmax)), k = Math.max(-this._ymin, Math.min(k, S - this._ymax)), this._points = this._points.map((y) => ({
          x: y.x + p,
          y: y.y + k
        })), this.updateBoundingBox(), this.renderCallBack();
      }
    }, this.handleCreatingClick = (b) => {
      console.warn("handleCreatingClick should not be called - use addPoint instead");
    }, this.handleKeyPress = (b) => {
      this.isCreating && b.code === "Space" && this._points.length >= this.minPoints && (b.preventDefault(), this.finishCreating());
    }, this.handleResize = (b) => {
      if (this.isResizing && this._points.length > 0) {
        const p = b.clientX, k = b.clientY, v = document.querySelector("canvas");
        if (v) {
          const S = v.getBoundingClientRect(), y = p - S.left, w = k - S.top, B = (y - this.canvasWindow.offsetX) / this.canvasWindow.scale, X = (w - this.canvasWindow.offsetY) / this.canvasWindow.scale, z = this.getPolygonVertexIndex(this.resizingHandleIndex);
          if (z >= 0 && z < this._points.length) {
            const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, L = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, C = Math.max(0, Math.min(B, M)), I = Math.max(0, Math.min(X, L)), T = C - this._points[z].x, F = I - this._points[z].y;
            this._points.length > 6 ? this.applyPolygonLocalDeformation(z, T, F) : this._points[z] = { x: C, y: I }, this.updateBoundingBox(), this.renderCallBack();
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
class Kb {
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
    return e instanceof ti ? this.eraseFromBox(e, n) : e instanceof ni ? this.eraseFromCircle(e, n) : e instanceof Tn ? this.eraseFromFreehand(e, n) : e instanceof Gt ? this.eraseFromPolygon(e, n) : [e];
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
    const n = new Tn(
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
const ht = [
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
], Ks = (i, e, t) => Math.min(Math.max(i, e), t);
class Zb {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, s = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Ks(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Ks(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Ks(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Ks(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += s, this.renderCallBack();
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
  SvelteComponent: Jb,
  add_flush_callback: qi,
  append: V,
  attr: G,
  bind: Pi,
  binding_callbacks: ii,
  bubble: zo,
  check_outros: Oi,
  create_component: Qe,
  destroy_component: $e,
  detach: un,
  element: ue,
  group_outros: Ui,
  init: Gb,
  insert: hn,
  is_function: Qb,
  listen: Oe,
  mount_component: et,
  noop: Lf,
  run_all: qf,
  safe_not_equal: $b,
  set_style: Zs,
  space: Ce,
  toggle_class: je,
  transition_in: de,
  transition_out: Me
} = window.__gradio__svelte__internal, { onMount: ev, onDestroy: tv, createEventDispatcher: nv } = window.__gradio__svelte__internal;
function oc(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, b, p, k, v, S, y, w, B, X, z, M, L, C, I, T, F, D, Y, q, te, Z, O, A, ae, K, P, _e, R, U, ie, re, xe, E, Le, qe, J, Xe, Ie, ve, Be, we, ot, De, ke, x, se, ye, gn, Bn, en, mt, tn, nn, at, ft, Ae, Fe, sn;
  s = new lg({}), f = new wp({}), b = new kg({}), w = new Wp({}), I = new Rp({}), D = new Dr({}), A = new qg({});
  let Ue = (
    /*showRemoveButton*/
    i[3] && ac(i)
  ), Ne = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[25] && rc(i);
  return re = new Fp({}), Xe = new Kp({}), ke = new dg({
    props: { selected: (
      /*labelVisibility*/
      i[26]
    ) }
  }), ye = new Dr({}), nn = new xg({}), {
    c() {
      e = ue("span"), t = ue("div"), n = ue("button"), Qe(s.$$.fragment), l = Ce(), o = ue("span"), o.textContent = "Box", r = Ce(), a = ue("div"), c = ue("button"), Qe(f.$$.fragment), h = Ce(), d = ue("span"), d.textContent = "Freehand", _ = Ce(), g = ue("div"), u = ue("button"), Qe(b.$$.fragment), p = Ce(), k = ue("span"), k.textContent = "Circle", v = Ce(), S = ue("div"), y = ue("button"), Qe(w.$$.fragment), B = Ce(), X = ue("span"), X.textContent = "Polygon", z = Ce(), M = ue("div"), L = ue("div"), C = ue("button"), Qe(I.$$.fragment), T = Ce(), F = ue("button"), Qe(D.$$.fragment), Y = Ce(), q = ue("span"), q.textContent = "Eraser", te = Ce(), Z = ue("div"), O = ue("button"), Qe(A.$$.fragment), ae = Ce(), K = ue("span"), K.textContent = "Move", P = Ce(), Ue && Ue.c(), _e = Ce(), Ne && Ne.c(), R = Ce(), U = ue("div"), ie = ue("button"), Qe(re.$$.fragment), xe = Ce(), E = ue("span"), E.textContent = "Undo", Le = Ce(), qe = ue("div"), J = ue("button"), Qe(Xe.$$.fragment), Ie = Ce(), ve = ue("span"), ve.textContent = "Redo", Be = Ce(), we = ue("div"), ot = ue("div"), De = ue("button"), Qe(ke.$$.fragment), x = Ce(), se = ue("button"), Qe(ye.$$.fragment), gn = Ce(), Bn = ue("span"), Bn.textContent = "Labels", en = Ce(), mt = ue("div"), tn = ue("button"), Qe(nn.$$.fragment), at = Ce(), ft = ue("span"), ft.textContent = "Clear", G(n, "class", "icon tool-button svelte-eg64j9"), G(n, "aria-label", "Create box"), je(
        n,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), G(o, "class", "tool-label svelte-eg64j9"), G(t, "class", "tool-group svelte-eg64j9"), G(c, "class", "icon tool-button svelte-eg64j9"), G(c, "aria-label", "Freehand drawing"), je(
        c,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].freehand
      ), G(d, "class", "tool-label svelte-eg64j9"), G(a, "class", "tool-group svelte-eg64j9"), G(u, "class", "icon tool-button svelte-eg64j9"), G(u, "aria-label", "Circle drawing"), je(
        u,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].circle
      ), G(k, "class", "tool-label svelte-eg64j9"), G(g, "class", "tool-group svelte-eg64j9"), G(y, "class", "icon tool-button svelte-eg64j9"), G(y, "aria-label", "Polygon drawing (click points, Space/start point to finish)"), je(
        y,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].polygon
      ), G(X, "class", "tool-label svelte-eg64j9"), G(S, "class", "tool-group svelte-eg64j9"), G(C, "class", "icon tool-button svelte-eg64j9"), G(C, "aria-label", "Erase areas from shapes"), je(
        C,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].erase
      ), G(F, "class", "icon dropdown-button svelte-eg64j9"), G(F, "aria-label", "Eraser settings"), G(L, "class", "eraser-buttons svelte-eg64j9"), G(q, "class", "tool-label svelte-eg64j9"), G(M, "class", "tool-group eraser-group svelte-eg64j9"), G(O, "class", "icon tool-button svelte-eg64j9"), G(O, "aria-label", "Edit boxes"), je(
        O,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), G(K, "class", "tool-label svelte-eg64j9"), G(Z, "class", "tool-group svelte-eg64j9"), G(ie, "class", "icon tool-button svelte-eg64j9"), G(ie, "aria-label", "Undo (Ctrl+Z)"), je(
        ie,
        "disabled",
        /*undoStack*/
        i[27].length === 0
      ), G(E, "class", "tool-label svelte-eg64j9"), G(U, "class", "tool-group svelte-eg64j9"), G(J, "class", "icon tool-button svelte-eg64j9"), G(J, "aria-label", "Redo (Ctrl+Y)"), je(
        J,
        "disabled",
        /*redoStack*/
        i[13].length === 0
      ), G(ve, "class", "tool-label svelte-eg64j9"), G(qe, "class", "tool-group svelte-eg64j9"), G(De, "class", "icon tool-button svelte-eg64j9"), G(De, "aria-label", "Show/Hide labels"), je(
        De,
        "selected",
        /*labelVisibility*/
        i[26]
      ), G(se, "class", "icon dropdown-button svelte-eg64j9"), G(se, "aria-label", "Shape settings"), G(ot, "class", "button-group svelte-eg64j9"), G(Bn, "class", "tool-label svelte-eg64j9"), G(we, "class", "tool-group svelte-eg64j9"), G(tn, "class", "icon tool-button svelte-eg64j9"), G(tn, "aria-label", "Clear Shapes"), G(ft, "class", "tool-label svelte-eg64j9"), G(mt, "class", "tool-group svelte-eg64j9"), G(e, "class", "canvas-control svelte-eg64j9");
    },
    m(ne, rt) {
      hn(ne, e, rt), V(e, t), V(t, n), et(s, n, null), V(t, l), V(t, o), V(e, r), V(e, a), V(a, c), et(f, c, null), V(a, h), V(a, d), V(e, _), V(e, g), V(g, u), et(b, u, null), V(g, p), V(g, k), V(e, v), V(e, S), V(S, y), et(w, y, null), V(S, B), V(S, X), V(e, z), V(e, M), V(M, L), V(L, C), et(I, C, null), V(L, T), V(L, F), et(D, F, null), V(M, Y), V(M, q), V(e, te), V(e, Z), V(Z, O), et(A, O, null), V(Z, ae), V(Z, K), V(e, P), Ue && Ue.m(e, null), V(e, _e), Ne && Ne.m(e, null), V(e, R), V(e, U), V(U, ie), et(re, ie, null), V(U, xe), V(U, E), V(e, Le), V(e, qe), V(qe, J), et(Xe, J, null), V(qe, Ie), V(qe, ve), V(e, Be), V(e, we), V(we, ot), V(ot, De), et(ke, De, null), V(ot, x), V(ot, se), et(ye, se, null), V(we, gn), V(we, Bn), V(e, en), V(e, mt), V(mt, tn), et(nn, tn, null), V(mt, at), V(mt, ft), Ae = !0, Fe || (sn = [
        Oe(
          n,
          "click",
          /*click_handler*/
          i[66]
        ),
        Oe(
          c,
          "click",
          /*click_handler_1*/
          i[67]
        ),
        Oe(
          u,
          "click",
          /*click_handler_2*/
          i[68]
        ),
        Oe(
          y,
          "click",
          /*click_handler_3*/
          i[69]
        ),
        Oe(
          C,
          "click",
          /*click_handler_4*/
          i[70]
        ),
        Oe(
          F,
          "click",
          /*openEraserSettings*/
          i[35]
        ),
        Oe(
          O,
          "click",
          /*click_handler_5*/
          i[71]
        ),
        Oe(
          ie,
          "click",
          /*click_handler_8*/
          i[74]
        ),
        Oe(
          J,
          "click",
          /*click_handler_9*/
          i[75]
        ),
        Oe(
          De,
          "click",
          /*click_handler_10*/
          i[76]
        ),
        Oe(
          se,
          "click",
          /*openShapeSettings*/
          i[38]
        ),
        Oe(
          tn,
          "click",
          /*click_handler_11*/
          i[77]
        )
      ], Fe = !0);
    },
    p(ne, rt) {
      (!Ae || rt[0] & /*mode, Mode*/
      4608) && je(
        n,
        "selected",
        /*mode*/
        ne[12] === /*Mode*/
        ne[9].creation
      ), (!Ae || rt[0] & /*mode, Mode*/
      4608) && je(
        c,
        "selected",
        /*mode*/
        ne[12] === /*Mode*/
        ne[9].freehand
      ), (!Ae || rt[0] & /*mode, Mode*/
      4608) && je(
        u,
        "selected",
        /*mode*/
        ne[12] === /*Mode*/
        ne[9].circle
      ), (!Ae || rt[0] & /*mode, Mode*/
      4608) && je(
        y,
        "selected",
        /*mode*/
        ne[12] === /*Mode*/
        ne[9].polygon
      ), (!Ae || rt[0] & /*mode, Mode*/
      4608) && je(
        C,
        "selected",
        /*mode*/
        ne[12] === /*Mode*/
        ne[9].erase
      ), (!Ae || rt[0] & /*mode, Mode*/
      4608) && je(
        O,
        "selected",
        /*mode*/
        ne[12] === /*Mode*/
        ne[9].drag
      ), /*showRemoveButton*/
      ne[3] ? Ue ? (Ue.p(ne, rt), rt[0] & /*showRemoveButton*/
      8 && de(Ue, 1)) : (Ue = ac(ne), Ue.c(), de(Ue, 1), Ue.m(e, _e)) : Ue && (Ui(), Me(Ue, 1, 1, () => {
        Ue = null;
      }), Oi()), !/*disableEditBoxes*/
      ne[5] && /*labelDetailLock*/
      ne[25] ? Ne ? (Ne.p(ne, rt), rt[0] & /*disableEditBoxes, labelDetailLock*/
      33554464 && de(Ne, 1)) : (Ne = rc(ne), Ne.c(), de(Ne, 1), Ne.m(e, R)) : Ne && (Ui(), Me(Ne, 1, 1, () => {
        Ne = null;
      }), Oi()), (!Ae || rt[0] & /*redoStack*/
      8192) && je(
        J,
        "disabled",
        /*redoStack*/
        ne[13].length === 0
      );
      const Cs = {};
      rt[0] & /*labelVisibility*/
      67108864 && (Cs.selected = /*labelVisibility*/
      ne[26]), ke.$set(Cs), (!Ae || rt[0] & /*labelVisibility*/
      67108864) && je(
        De,
        "selected",
        /*labelVisibility*/
        ne[26]
      );
    },
    i(ne) {
      Ae || (de(s.$$.fragment, ne), de(f.$$.fragment, ne), de(b.$$.fragment, ne), de(w.$$.fragment, ne), de(I.$$.fragment, ne), de(D.$$.fragment, ne), de(A.$$.fragment, ne), de(Ue), de(Ne), de(re.$$.fragment, ne), de(Xe.$$.fragment, ne), de(ke.$$.fragment, ne), de(ye.$$.fragment, ne), de(nn.$$.fragment, ne), Ae = !0);
    },
    o(ne) {
      Me(s.$$.fragment, ne), Me(f.$$.fragment, ne), Me(b.$$.fragment, ne), Me(w.$$.fragment, ne), Me(I.$$.fragment, ne), Me(D.$$.fragment, ne), Me(A.$$.fragment, ne), Me(Ue), Me(Ne), Me(re.$$.fragment, ne), Me(Xe.$$.fragment, ne), Me(ke.$$.fragment, ne), Me(ye.$$.fragment, ne), Me(nn.$$.fragment, ne), Ae = !1;
    },
    d(ne) {
      ne && un(e), $e(s), $e(f), $e(b), $e(w), $e(I), $e(D), $e(A), Ue && Ue.d(), Ne && Ne.d(), $e(re), $e(Xe), $e(ke), $e(ye), $e(nn), Fe = !1, qf(sn);
    }
  };
}
function ac(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Og({}), {
    c() {
      e = ue("div"), t = ue("button"), Qe(n.$$.fragment), s = Ce(), l = ue("span"), l.textContent = "Delete", G(t, "class", "icon tool-button svelte-eg64j9"), G(t, "aria-label", "Remove boxes"), G(l, "class", "tool-label svelte-eg64j9"), G(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      hn(c, e, f), V(e, t), et(n, t, null), V(e, s), V(e, l), o = !0, r || (a = Oe(
        t,
        "click",
        /*click_handler_6*/
        i[72]
      ), r = !0);
    },
    p: Lf,
    i(c) {
      o || (de(n.$$.fragment, c), o = !0);
    },
    o(c) {
      Me(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && un(e), $e(n), r = !1, a();
    }
  };
}
function rc(i) {
  let e, t, n, s, l, o, r, a;
  return n = new Gg({}), {
    c() {
      e = ue("div"), t = ue("button"), Qe(n.$$.fragment), s = Ce(), l = ue("span"), l.textContent = "Label", G(t, "class", "icon tool-button svelte-eg64j9"), G(t, "aria-label", "Edit label"), G(l, "class", "tool-label svelte-eg64j9"), G(e, "class", "tool-group svelte-eg64j9");
    },
    m(c, f) {
      hn(c, e, f), V(e, t), et(n, t, null), V(e, s), V(e, l), o = !0, r || (a = Oe(
        t,
        "click",
        /*click_handler_7*/
        i[73]
      ), r = !0);
    },
    p: Lf,
    i(c) {
      o || (de(n.$$.fragment, c), o = !0);
    },
    o(c) {
      Me(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && un(e), $e(n), r = !1, a();
    }
  };
}
function cc(i) {
  let e, t;
  return e = new oa({
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
        i[0].boxes.length ? vi(
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
    i[78]
  ), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, s) {
      et(e, n, s), t = !0;
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
      n[0].boxes.length ? vi(
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
      Me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $e(e, n);
    }
  };
}
function fc(i) {
  let e, t;
  return e = new oa({
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
        i[0].boxes.length ? vi(
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
    i[79]
  ), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, s) {
      et(e, n, s), t = !0;
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
      n[0].boxes.length ? vi(
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
      Me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $e(e, n);
    }
  };
}
function uc(i) {
  let e, t;
  return e = new oa({
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
        i[0].boxes.length ? vi(
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
    i[80]
  ), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, s) {
      et(e, n, s), t = !0;
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
      n[0].boxes.length ? vi(
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
      Me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $e(e, n);
    }
  };
}
function iv(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u, b, p, k, v, S = (
    /*interactive*/
    i[4] && oc(i)
  ), y = (
    /*editModalVisible*/
    i[16] && cc(i)
  ), w = (
    /*newModalVisible*/
    i[17] && fc(i)
  ), B = (
    /*editDefaultLabelVisible*/
    i[18] && uc(i)
  );
  function X(D) {
    i[81](D);
  }
  function z(D) {
    i[82](D);
  }
  let M = {};
  /*eraserSettingsVisible*/
  i[19] !== void 0 && (M.visible = /*eraserSettingsVisible*/
  i[19]), /*eraserSize*/
  i[21] !== void 0 && (M.eraserSize = /*eraserSize*/
  i[21]), a = new Hb({ props: M }), ii.push(() => Pi(a, "visible", X)), ii.push(() => Pi(a, "eraserSize", z)), a.$on(
    "change",
    /*handleEraserSettingsChange*/
    i[36]
  ), a.$on(
    "close",
    /*handleEraserSettingsClose*/
    i[37]
  );
  function L(D) {
    i[83](D);
  }
  function C(D) {
    i[84](D);
  }
  function I(D) {
    i[85](D);
  }
  function T(D) {
    i[86](D);
  }
  let F = {};
  return (
    /*shapeSettingsVisible*/
    i[20] !== void 0 && (F.visible = /*shapeSettingsVisible*/
    i[20]), /*shapeOpacity*/
    i[22] !== void 0 && (F.opacity = /*shapeOpacity*/
    i[22]), /*shapeStrokeWidth*/
    i[23] !== void 0 && (F.strokeWidth = /*shapeStrokeWidth*/
    i[23]), /*shapeSelectedStrokeWidth*/
    i[24] !== void 0 && (F.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
    i[24]), d = new Vb({ props: F }), ii.push(() => Pi(d, "visible", L)), ii.push(() => Pi(d, "opacity", C)), ii.push(() => Pi(d, "strokeWidth", I)), ii.push(() => Pi(d, "selectedStrokeWidth", T)), d.$on(
      "change",
      /*handleShapeSettingsChange*/
      i[39]
    ), d.$on(
      "close",
      /*handleShapeSettingsClose*/
      i[40]
    ), {
      c() {
        e = ue("div"), t = ue("canvas"), n = Ce(), S && S.c(), s = Ce(), y && y.c(), l = Ce(), w && w.c(), o = Ce(), B && B.c(), r = Ce(), Qe(a.$$.fragment), h = Ce(), Qe(d.$$.fragment), G(t, "tabindex", "0"), G(t, "class", "canvas-annotator svelte-eg64j9"), je(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[15]
        ), G(e, "class", "canvas-container svelte-eg64j9"), G(e, "tabindex", "-1"), Zs(
          e,
          "height",
          /*height*/
          i[6]
        ), Zs(
          e,
          "width",
          /*width*/
          i[7]
        ), je(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[15]
        );
      },
      m(D, Y) {
        hn(D, e, Y), V(e, t), i[65](t), hn(D, n, Y), S && S.m(D, Y), hn(D, s, Y), y && y.m(D, Y), hn(D, l, Y), w && w.m(D, Y), hn(D, o, Y), B && B.m(D, Y), hn(D, r, Y), et(a, D, Y), hn(D, h, Y), et(d, D, Y), p = !0, k || (v = [
          Oe(
            t,
            "pointerdown",
            /*handlePointerDown*/
            i[29]
          ),
          Oe(
            t,
            "pointerup",
            /*handlePointerUp*/
            i[30]
          ),
          Oe(t, "pointermove", function() {
            Qb(
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
          Oe(
            t,
            "dblclick",
            /*handleDoubleClick*/
            i[47]
          ),
          Oe(
            t,
            "wheel",
            /*handleMouseWheel*/
            i[32]
          ),
          Oe(
            e,
            "focusin",
            /*handleCanvasFocus*/
            i[53]
          ),
          Oe(
            e,
            "focusout",
            /*handleCanvasBlur*/
            i[54]
          )
        ], k = !0);
      },
      p(D, Y) {
        i = D, (!p || Y[0] & /*isScrollableMode*/
        32768) && je(
          t,
          "scrollable-canvas",
          /*isScrollableMode*/
          i[15]
        ), (!p || Y[0] & /*height*/
        64) && Zs(
          e,
          "height",
          /*height*/
          i[6]
        ), (!p || Y[0] & /*width*/
        128) && Zs(
          e,
          "width",
          /*width*/
          i[7]
        ), (!p || Y[0] & /*isScrollableMode*/
        32768) && je(
          e,
          "scrollable",
          /*isScrollableMode*/
          i[15]
        ), /*interactive*/
        i[4] ? S ? (S.p(i, Y), Y[0] & /*interactive*/
        16 && de(S, 1)) : (S = oc(i), S.c(), de(S, 1), S.m(s.parentNode, s)) : S && (Ui(), Me(S, 1, 1, () => {
          S = null;
        }), Oi()), /*editModalVisible*/
        i[16] ? y ? (y.p(i, Y), Y[0] & /*editModalVisible*/
        65536 && de(y, 1)) : (y = cc(i), y.c(), de(y, 1), y.m(l.parentNode, l)) : y && (Ui(), Me(y, 1, 1, () => {
          y = null;
        }), Oi()), /*newModalVisible*/
        i[17] ? w ? (w.p(i, Y), Y[0] & /*newModalVisible*/
        131072 && de(w, 1)) : (w = fc(i), w.c(), de(w, 1), w.m(o.parentNode, o)) : w && (Ui(), Me(w, 1, 1, () => {
          w = null;
        }), Oi()), /*editDefaultLabelVisible*/
        i[18] ? B ? (B.p(i, Y), Y[0] & /*editDefaultLabelVisible*/
        262144 && de(B, 1)) : (B = uc(i), B.c(), de(B, 1), B.m(r.parentNode, r)) : B && (Ui(), Me(B, 1, 1, () => {
          B = null;
        }), Oi());
        const q = {};
        !c && Y[0] & /*eraserSettingsVisible*/
        524288 && (c = !0, q.visible = /*eraserSettingsVisible*/
        i[19], qi(() => c = !1)), !f && Y[0] & /*eraserSize*/
        2097152 && (f = !0, q.eraserSize = /*eraserSize*/
        i[21], qi(() => f = !1)), a.$set(q);
        const te = {};
        !_ && Y[0] & /*shapeSettingsVisible*/
        1048576 && (_ = !0, te.visible = /*shapeSettingsVisible*/
        i[20], qi(() => _ = !1)), !g && Y[0] & /*shapeOpacity*/
        4194304 && (g = !0, te.opacity = /*shapeOpacity*/
        i[22], qi(() => g = !1)), !u && Y[0] & /*shapeStrokeWidth*/
        8388608 && (u = !0, te.strokeWidth = /*shapeStrokeWidth*/
        i[23], qi(() => u = !1)), !b && Y[0] & /*shapeSelectedStrokeWidth*/
        16777216 && (b = !0, te.selectedStrokeWidth = /*shapeSelectedStrokeWidth*/
        i[24], qi(() => b = !1)), d.$set(te);
      },
      i(D) {
        p || (de(S), de(y), de(w), de(B), de(a.$$.fragment, D), de(d.$$.fragment, D), p = !0);
      },
      o(D) {
        Me(S), Me(y), Me(w), Me(B), Me(a.$$.fragment, D), Me(d.$$.fragment, D), p = !1;
      },
      d(D) {
        D && (un(e), un(n), un(s), un(l), un(o), un(r), un(h)), i[65](null), S && S.d(D), y && y.d(D), w && w.d(D), B && B.d(D), $e(a, D), $e(d, D), k = !1, qf(v);
      }
    }
  );
}
const sv = 50, lv = 3, Wo = 3;
function Qn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function vi(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1);
}
function $n(i, e) {
  const t = e.getBoundingClientRect();
  let n = i.clientX - t.left, s = i.clientY - t.top;
  return { mouseX: n, mouseY: s };
}
function ov(i, e, t) {
  let n;
  var s;
  (function(m) {
    m[m.creation = 0] = "creation", m[m.drag = 1] = "drag", m[m.freehand = 2] = "freehand", m[m.circle = 3] = "circle", m[m.polygon = 4] = "polygon", m[m.erase = 5] = "erase";
  })(s || (s = {}));
  let l = [], o = [], r = [], a = !0, c = !0, f = !1, { imageUrl: h = null } = e, { interactive: d } = e, { boxMinSize: _ = 10 } = e, { handleSize: g } = e, { value: u } = e, { choices: b = [] } = e, { choicesColors: p = [] } = e, { disableEditBoxes: k = !1 } = e, { height: v = "100%" } = e, { width: S = "100%" } = e, { singleBox: y = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: B = !0 } = e, { useDefaultLabel: X = !1 } = e, { shapeCreationMode: z = "drag" } = e, { autoScroll: M = !0 } = e, { preserveResolution: L = !0 } = e;
  w === null && (w = k);
  let C, I, T = null, F = -1, D = s.drag, Y = new Zb(x), q;
  function te(m) {
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
  u !== null && u.boxes && u.boxes.length == 0 ? D = te(z) : u !== null && u.boxes && u.boxes.length > 0 ? D = z === "drag" ? s.drag : te(z) : D = te(z);
  let Z = 0, O = 0, A = 0, ae = 0, K = 1, P = 0, _e = 0, R = 0, U = 0, ie = !1, re = !1, xe = !1, E = !1, Le = !1, qe = !1, J = null, Xe = 10, { boxAlpha: Ie = 0.5 } = e, ve = Ie, Be = 2, we = 4, ot = X, De = { label: "", color: "" };
  const ke = nv();
  function x() {
    if (I) {
      if (I.clearRect(0, 0, C.width, C.height), I.save(), I.translate(Y.offsetX, Y.offsetY), I.scale(Y.scale, Y.scale), T !== null && u !== null) {
        switch (u.orientation) {
          case 0:
            I.drawImage(T, 0, 0, P, _e);
            break;
          case 1:
            I.translate(P, 0), I.rotate(Math.PI / 2), I.drawImage(T, 0, 0, _e, P);
            break;
          case 2:
            I.translate(P, _e), I.rotate(Math.PI), I.drawImage(T, 0, 0, P, _e);
            break;
          case 3:
            I.translate(0, _e), I.rotate(-Math.PI / 2), I.drawImage(T, 0, 0, _e, P);
            break;
        }
        I.restore();
      }
      if (u !== null && u.boxes)
        for (const m of u.boxes.slice().reverse())
          m.render(I, c);
      D === s.erase && q && q.renderErasePath(I);
    }
  }
  function se(m) {
    t(14, F = m), u !== null && u.boxes && (u.boxes.forEach((W) => {
      W.setSelected(!1);
    }), m >= 0 && m < u.boxes.length && u.boxes[m].setSelected(!0)), x();
  }
  function ye(m) {
    d && (a = !1, m.target instanceof Element && m.target.hasPointerCapture(m.pointerId) && m.target.releasePointerCapture(m.pointerId), D === s.creation ? rt(m) : D === s.freehand ? Ue(m) : D === s.circle ? Cs(m) : D === s.polygon ? Ne(m) : D === s.erase ? jf(m) : D === s.drag && gn(m));
  }
  function gn(m) {
    console.log("clickBox function called, mode:", D === s.drag ? "drag" : "creation");
    const W = $n(m, C), H = W.mouseX, j = W.mouseY;
    let Q = !1;
    if (!(u === null || !u.boxes)) {
      for (const [he, le] of u.boxes.entries()) {
        const bt = le.indexOfPointInsideHandle(H, j);
        if (bt >= 0) {
          Q = !0, se(he);
          let Pt = null;
          le.onMoveStart = () => {
            Pt = Fe(le), console.log("Resize started, captured state:", Pt);
          }, le.onMoveEnd = () => {
            if (Pt) {
              const ma = Fe(le);
              console.log("Resize ended, final state:", ma), at({
                type: "edit_shape",
                shapeIndex: he,
                oldShapeData: Pt,
                shapeData: ma
              }), Pt = null;
            }
          }, le.startResize(bt, m);
          return;
        }
      }
      for (const [he, le] of u.boxes.entries())
        if (le.isPointInsideBox(H, j)) {
          Q = !0, se(he);
          let bt = null;
          le.onMoveStart = () => {
            bt = Fe(le);
          }, le.onMoveEnd = () => {
            bt && (at({
              type: "edit_shape",
              shapeIndex: he,
              oldShapeData: bt,
              shapeData: Fe(le)
            }), bt = null);
          }, le.startDrag(m);
          return;
        }
      if (!Q) {
        if (y || se(-1), console.log("No box selected, checking if we should dispatch select event"), D === s.drag) {
          console.log("Mode is drag, calculating coordinates");
          let he, le;
          ie ? (he = (H - Y.offsetX) / Y.scale, le = (j - Y.offsetY) / Y.scale) : (he = (H - Y.offsetX) / K / Y.scale, le = (j - Y.offsetY) / K / Y.scale), console.log("Click detected in drag mode:", {
            mouseX: H,
            mouseY: j,
            imageX: he,
            imageY: le,
            scaleFactor: K,
            "canvasWindow.scale": Y.scale,
            "canvasWindow.offsetX": Y.offsetX,
            "canvasWindow.offsetY": Y.offsetY,
            isScrollableMode: ie
          });
          const bt = ie ? R : (T == null ? void 0 : T.naturalWidth) || 0, Pt = ie ? U : (T == null ? void 0 : T.naturalHeight) || 0;
          T && he >= 0 && he <= bt && le >= 0 && le <= Pt ? (console.log("Dispatching select event with coordinates:", [Math.round(he), Math.round(le)]), ke("select", {
            coordinates: [Math.round(he), Math.round(le)]
          })) : console.log("Click outside image bounds or no image loaded", {
            hasImage: !!T,
            imageX: he,
            imageY: le,
            maxWidth: bt,
            maxHeight: Pt,
            isScrollableMode: ie
          });
        } else
          console.log("Mode is not drag, mode:", D);
        D === s.drag && Y.startDrag(m);
      }
    }
  }
  function Bn(m) {
    D === s.erase && q && Of(), ke("change");
  }
  function en(m) {
    if (u === null)
      return;
    if (D === s.erase && q) {
      Tf(m);
      return;
    }
    if (D !== s.drag)
      return;
    const W = $n(m, C), H = W.mouseX, j = W.mouseY;
    for (const [Q, he] of u.boxes.entries()) {
      const le = he.indexOfPointInsideHandle(H, j);
      if (le >= 0) {
        t(11, C.style.cursor = he.resizeHandles[le].cursor, C);
        return;
      }
    }
    t(11, C.style.cursor = "default", C);
  }
  function mt(m) {
    if (d) {
      if (m.ctrlKey) {
        switch (m.key.toLowerCase()) {
          case "z":
            m.shiftKey ? Ae() : ft(), m.preventDefault();
            break;
          case "y":
            Ae(), m.preventDefault();
            break;
        }
        return;
      }
      switch (m.key) {
        case "Delete":
          Vn();
          break;
        case " ":
          D === s.polygon && J && J.isCreating && (m.preventDefault(), J._points.length >= J.minPoints && J.finishCreating());
          break;
      }
    }
  }
  function tn(m) {
    m.preventDefault();
    const W = 1 / (1 + m.deltaY / 1e3 * 0.5), H = parseFloat((Y.scale * W).toFixed(2)), j = H < 1 ? 1 : H, Q = C.getBoundingClientRect(), he = m.clientX - Q.left, le = m.clientY - Q.top, bt = (he - Y.offsetX) / Y.scale, Pt = (le - Y.offsetY) / Y.scale;
    Y.offsetX = he - bt * j, Y.offsetY = le - Pt * j, Y.scale = j, x();
  }
  function nn() {
    if (Y.scale = 1, T !== null && C) {
      if (Y.imageRotatedWidth <= C.width) {
        const m = (C.width - P) / 2;
        Y.offsetX = m;
      } else
        Y.offsetX = 0;
      if (_e < C.height) {
        const m = (C.height - _e) / 2;
        Y.offsetY = m;
      } else
        Y.offsetY = 0;
    } else
      Y.offsetX = 0, Y.offsetY = 0;
    x();
  }
  function at(m) {
    if (a) {
      console.log("Skipping undo action during initial state:", m);
      return;
    }
    t(13, o = []), l.push(Object.assign(Object.assign({}, m), { timestamp: Date.now() })), l.length > sv && l.shift(), console.log("Added undo action:", m, "Stack size:", l.length);
  }
  function ft() {
    if (l.length === 0) {
      if (r.length === 0) {
        console.log("Cannot undo: both undo stack and pre-clear history are empty");
        return;
      }
      for (let W = r.length - 1; W >= 0; W--) {
        const H = r[W];
        if (H.recoveryCount < Wo) {
          u.boxes.map((j) => Fe(j)), t(0, u.boxes = [], u);
          for (const j of H.allShapes) {
            const Q = sn(j);
            Q && u.boxes.push(Q);
          }
          H.recoveryCount++, H.recoveryCount >= Wo && (r.splice(W, 1), console.log(`Pre-clear state exhausted and removed. Remaining states: ${r.length}`)), console.log(`Restored ${u.boxes.length} shapes from pre-clear history. Recovery ${H.recoveryCount}/${Wo}`), se(-1), x(), ke("change");
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
            const W = u.boxes.splice(m.shapeIndex, 1)[0];
            o.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Fe(W),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const W = sn(m.shapeData);
            u.boxes.splice(m.shapeIndex, 0, W), o.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          if (J && m.pointData) {
            if (J._points.pop(), J._points.length === 0) {
              const W = u.boxes.indexOf(J);
              W >= 0 && u.boxes.splice(W, 1), J = null;
            } else
              J.updateBoundingBox();
            o.push({
              type: "polygon_point",
              pointData: m.pointData,
              timestamp: Date.now()
            });
          }
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.oldShapeData && m.shapeIndex < u.boxes.length) {
            const W = Fe(u.boxes[m.shapeIndex]);
            sn(m.oldShapeData, u.boxes[m.shapeIndex]), o.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: W,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.oldShapeData) {
            console.log("Performing undo for multiple shapes operation", m);
            const W = u.boxes.map((H) => Fe(H));
            t(0, u.boxes = [], u);
            for (const H of m.oldShapeData) {
              const j = sn(H);
              j && u.boxes.push(j);
            }
            console.log("Restored shapes:", u.boxes.length), o.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: W,
              shapeData: m.shapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      se(-1), x(), ke("change");
    }
  }
  function Ae() {
    if (o.length === 0) return;
    const m = o.pop();
    if (m) {
      switch (m.type) {
        case "create_shape":
          if (m.shapeIndex !== void 0 && m.shapeIndex < u.boxes.length) {
            const W = u.boxes.splice(m.shapeIndex, 1)[0];
            l.push({
              type: "delete_shape",
              shapeIndex: m.shapeIndex,
              shapeData: Fe(W),
              timestamp: Date.now()
            });
          }
          break;
        case "delete_shape":
          if (m.shapeData && m.shapeIndex !== void 0) {
            const W = sn(m.shapeData);
            u.boxes.splice(m.shapeIndex, 0, W), l.push({
              type: "create_shape",
              shapeIndex: m.shapeIndex,
              timestamp: Date.now()
            });
          }
          break;
        case "polygon_point":
          m.pointData && (J ? (J._points.push(m.pointData), J._points.length === 1 && !u.boxes.includes(J) && (y ? t(0, u.boxes = [J], u) : t(0, u.boxes = [J, ...u.boxes], u)), J.updateBoundingBox()) : console.warn("Trying to redo polygon point but no current polygon exists"), l.push({
            type: "polygon_point",
            pointData: m.pointData,
            timestamp: Date.now()
          }));
          break;
        case "edit_shape":
          if (m.shapeIndex !== void 0 && m.shapeData && m.shapeIndex < u.boxes.length) {
            const W = Fe(u.boxes[m.shapeIndex]);
            sn(m.shapeData, u.boxes[m.shapeIndex]), l.push({
              type: "edit_shape",
              shapeIndex: m.shapeIndex,
              oldShapeData: W,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          } else if (m.shapeIndex === -1 && m.shapeData) {
            const W = u.boxes.map((H) => Fe(H));
            t(0, u.boxes = [], u);
            for (const H of m.shapeData) {
              const j = sn(H);
              j && u.boxes.push(j);
            }
            l.push({
              type: "edit_shape",
              shapeIndex: -1,
              oldShapeData: W,
              shapeData: m.oldShapeData,
              timestamp: Date.now()
            });
          }
          break;
      }
      se(-1), x(), ke("change");
    }
  }
  function Fe(m) {
    return m ? m instanceof Tn ? {
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
    } : m instanceof ni ? {
      type: "circle",
      label: m.label,
      color: m.color,
      centerX: m._centerX,
      centerY: m._centerY,
      radius: m._radius
    } : m instanceof ti ? {
      type: "box",
      label: m.label,
      color: m.color,
      xmin: m._xmin,
      ymin: m._ymin,
      xmax: m._xmax,
      ymax: m._ymax
    } : null : null;
  }
  function sn(m, W) {
    if (!m) return null;
    if (W)
      return W.label = m.label, W.color = m.color, W instanceof ti ? (W._xmin = m.xmin, W._ymin = m.ymin, W._xmax = m.xmax, W._ymax = m.ymax, W.applyUserScale()) : W instanceof ni ? (W._centerX = m.centerX, W._centerY = m.centerY, W._radius = m.radius, W.applyUserScale()) : (W.xmin = m.xmin, W.ymin = m.ymin, W.xmax = m.xmax, W.ymax = m.ymax), (W instanceof Tn || W instanceof Gt) && m.points && (W._points = [...m.points], W.updateBoundingBox()), W;
    switch (m.type) {
      case "freehand":
        const H = new Tn(x, Tt, Y, Z, O, A, ae, m.label, m.color, ve, _, g, Be, we, K);
        return H._points = [...m.points], H.updateBoundingBox(), H;
      case "polygon":
        const j = new Gt(x, Tt, Y, Z, O, A, ae, m.label, m.color, ve, _, g, Be, we, K);
        return j._points = [...m.points], j.updateBoundingBox(), j;
      case "circle":
        return new ni(x, Tt, Y, Z, O, A, ae, m.label, m.centerX, m.centerY, m.radius, m.color, ve, _, g, Be, we, K);
      case "box":
        return new ti(x, Tt, Y, Z, O, A, ae, m.label, m.xmin, m.ymin, m.xmax, m.ymax, m.color, ve, _, g, Be, we, K);
    }
    return null;
  }
  function Ue(m) {
    $n(m, C);
    const W = C.getBoundingClientRect();
    let H;
    p.length > 0 ? H = Qn(p[0]) : y ? u.boxes.length > 0 ? H = u.boxes[0].color : H = ht[0] : H = ht[u.boxes.length % ht.length];
    let j = new Tn(x, Tt, Y, Z, O, A, ae, "", H, ve, _, g, Be, we, K);
    ie ? j.startCreating(m, 0, 0) : j.startCreating(m, W.left, W.top), y ? t(0, u.boxes = [j], u) : t(0, u.boxes = [j, ...u.boxes], u), at({ type: "create_shape", shapeIndex: 0 }), se(0), x(), ke("change");
  }
  function Ne(m) {
    J && (!J._points || J._points.length === 0 || !u.boxes.includes(J)) && (console.log("Resetting invalid currentPolygon state"), J = null), J === null ? ne(m) : J.isCreating && (J.addPoint(m) || (x(), ke("change")));
  }
  function ne(m) {
    $n(m, C);
    const W = C.getBoundingClientRect();
    let H;
    p.length > 0 ? H = Qn(p[0]) : y ? u.boxes.length > 0 ? H = u.boxes[0].color : H = ht[0] : H = ht[u.boxes.length % ht.length];
    let j = new Gt(x, Qf, Y, Z, O, A, ae, "", H, ve, _, g, Be, we, K);
    j.onPointAdded = (Q) => {
      at({ type: "polygon_point", pointData: Q });
    }, J = j, ie ? j.startCreating(m, 0, 0) : j.startCreating(m, W.left, W.top), y ? t(0, u.boxes = [j], u) : t(0, u.boxes = [j, ...u.boxes], u), at({ type: "create_shape", shapeIndex: 0 }), se(0), x(), ke("change");
  }
  function rt(m) {
    const W = $n(m, C), H = C.getBoundingClientRect();
    let j, Q;
    ie ? (j = (W.mouseX - Y.offsetX) / Y.scale, Q = (W.mouseY - Y.offsetY) / Y.scale) : (j = (W.mouseX - Y.offsetX) / K / Y.scale, Q = (W.mouseY - Y.offsetY) / K / Y.scale);
    let he;
    p.length > 0 ? he = Qn(p[0]) : y ? u.boxes.length > 0 ? he = u.boxes[0].color : he = ht[0] : he = ht[u.boxes.length % ht.length];
    let le = new ti(x, Tt, Y, Z, O, A, ae, "", j, Q, j, Q, he, ve, _, g, Be, we, K);
    ie ? le.startCreating(m, W.mouseX, W.mouseY) : le.startCreating(m, H.left, H.top), y ? t(0, u.boxes = [le], u) : t(0, u.boxes = [le, ...u.boxes], u), at({ type: "create_shape", shapeIndex: 0 }), se(0), x(), ke("change");
  }
  function Cs(m) {
    const W = $n(m, C);
    C.getBoundingClientRect();
    let H, j;
    H = (W.mouseX - Y.offsetX) / Y.scale, j = (W.mouseY - Y.offsetY) / Y.scale;
    let Q;
    p.length > 0 ? Q = Qn(p[0]) : y ? u.boxes.length > 0 ? Q = u.boxes[0].color : Q = ht[0] : Q = ht[u.boxes.length % ht.length];
    let he = new ni(x, Tt, Y, Z, O, A, ae, "", H, j, 0, Q, ve, _, g, Be, we, K);
    he.startCreating(m), y ? t(0, u.boxes = [he], u) : t(0, u.boxes = [he, ...u.boxes], u), at({ type: "create_shape", shapeIndex: 0 }), se(0), x(), ke("change");
  }
  function jf(m) {
    q || (q = new Kb(Y, K), q.setBrushSize(Xe)), q.setScaleFactor(K);
    const W = C.getBoundingClientRect();
    q.startErase(m, W), x();
  }
  function Tf(m) {
    if (!q) return;
    const W = C.getBoundingClientRect();
    q.continueErase(m, W), x();
  }
  function Of() {
    if (!q) return;
    const m = q.endErase();
    if (m.length === 0) {
      Xn();
      return;
    }
    const W = [...u.boxes], H = [], j = [];
    for (let Q = 0; Q < u.boxes.length; Q++) {
      const he = u.boxes[Q], le = q.eraseFromShape(he, m);
      if (le.length === 0)
        H.push(Q);
      else {
        if (le.length === 1 && le[0] === he)
          continue;
        H.push(Q), j.push(...le);
      }
    }
    if (H.length > 0 || j.length > 0) {
      for (let Q = H.length - 1; Q >= 0; Q--)
        u.boxes.splice(H[Q], 1);
      u.boxes.push(...j), at({
        type: "edit_shape",
        shapeIndex: -1,
        // Special case for multiple shapes
        oldShapeData: W.map((Q) => Fe(Q)),
        shapeData: u.boxes.map((Q) => Fe(Q))
      }), se(-1), ke("change");
    }
    x(), Xn();
  }
  function Uf() {
    t(19, Le = !0);
  }
  function Nf(m) {
    t(21, Xe = m.detail.size), q && q.setBrushSize(Xe);
  }
  function Vf() {
    t(19, Le = !1);
  }
  function Kf() {
    t(20, qe = !0);
  }
  function Zf(m) {
    t(22, ve = m.detail.opacity), t(23, Be = m.detail.strokeWidth), t(24, we = m.detail.selectedStrokeWidth), Gf(), x();
  }
  function Jf() {
    t(20, qe = !1);
  }
  function Gf() {
    for (let m of u.boxes) {
      const W = m;
      W.alpha !== void 0 && (W.alpha = ve), W.thickness !== void 0 && (W.thickness = Be), W.selectedThickness !== void 0 && (W.selectedThickness = we);
    }
  }
  function Ss() {
    t(12, D = s.creation), t(11, C.style.cursor = "crosshair", C), J = null;
  }
  function aa() {
    t(12, D = s.freehand), t(11, C.style.cursor = "crosshair", C), J = null;
  }
  function ra() {
    t(12, D = s.circle), t(11, C.style.cursor = "crosshair", C), J = null;
  }
  function ca() {
    t(12, D = s.polygon), t(11, C.style.cursor = "crosshair", C);
  }
  function fa() {
    t(12, D = s.erase), t(11, C.style.cursor = "crosshair", C), J = null;
  }
  function Xn() {
    t(12, D = s.drag), t(11, C.style.cursor = "default", C), J = null;
  }
  function Tt() {
    F >= 0 && F < u.boxes.length && (u.boxes[F].getArea() < 1 ? Vn() : (k || (ot ? ha() : t(17, xe = !0)), y && Xn()));
  }
  function Qf() {
    J = null, F >= 0 && F < u.boxes.length && (u.boxes[F].getArea() < 1 ? Vn() : (k || (ot ? ha() : t(17, xe = !0)), Xn()));
  }
  function $f() {
    F >= 0 && F < u.boxes.length && !k && t(16, re = !0);
  }
  function eu(m) {
    if (!d)
      return;
    const W = $n(m, C), H = W.mouseX, j = W.mouseY;
    let Q = !1;
    for (const [he, le] of u.boxes.entries())
      if (le.isPointInsideBox(H, j)) {
        Q = !0, se(he), $f();
        break;
      }
    Q || nn();
  }
  function ua(m, W) {
    const H = b.findIndex((j) => j[0] === m);
    H === -1 ? (b.push([m, b.length]), p.push(W), t(1, b), t(2, p), console.log(`Added custom label "${m}" with color ${W} to choices`)) : p[H] !== W && (t(2, p[H] = W, p), t(2, p), console.log(`Updated color for existing label "${m}" to ${W}`));
  }
  function tu(m) {
    t(16, re = !1);
    const { detail: W } = m;
    let H = W.label, j = W.color, Q = W.opacity, he = W.ret;
    if (F >= 0 && F < u.boxes.length) {
      let le = u.boxes[F];
      if (he == 1) {
        const bt = Fe(le);
        ua(H, j), le.label = H, le.color = Qn(j), Q !== void 0 && (le.alpha = Q);
        const Pt = Fe(le);
        at({
          type: "edit_shape",
          shapeIndex: F,
          oldShapeData: bt,
          shapeData: Pt
        }), x(), ke("change");
      } else he == -1 && Vn();
    }
    setTimeout(
      () => {
        C && (C.focus(), console.log("Canvas focused after modal edit change"));
      },
      100
    );
  }
  function nu(m) {
    t(17, xe = !1);
    const { detail: W } = m;
    let H = W.label, j = W.color, Q = W.ret, he = W.lock;
    if (F >= 0 && F < u.boxes.length) {
      let le = u.boxes[F];
      Q == 1 ? (ua(H, j), t(25, ot = he), De.label = H, De.color = j, le.label = H, le.color = Qn(j), x(), ke("change"), Xn()) : Vn();
    }
    setTimeout(
      () => {
        C && (C.focus(), console.log("Canvas focused after modal new change"));
      },
      100
    );
  }
  function iu(m) {
    t(18, E = !1);
    const { detail: W } = m;
    let H = W.label, j = W.color, Q = W.ret, he = W.lock;
    Q == 1 && (t(25, ot = he), De.label = H, De.color = j), setTimeout(
      () => {
        C && (C.focus(), console.log("Canvas focused after default label edit change"));
      },
      100
    );
  }
  function ha() {
    if (F >= 0 && F < u.boxes.length) {
      let m = u.boxes[F];
      m.label = De.label, De.color !== "" && (m.color = Qn(De.color)), x(), ke("change"), Xn();
    }
    setTimeout(
      () => {
        C && (C.focus(), console.log("Canvas focused after default label use"));
      },
      100
    );
  }
  function Vn() {
    if (F >= 0 && F < u.boxes.length) {
      const m = u.boxes[F], W = Fe(m);
      at({
        type: "delete_shape",
        shapeIndex: F,
        shapeData: W
      }), u.boxes.splice(F, 1), se(-1), y && Ss(), ke("change");
    }
  }
  function da() {
    if (u.boxes.length === 0) return;
    const m = u.boxes.map((W) => Fe(W));
    for (r.push({
      allShapes: m,
      recoveryCount: 0,
      clearTimestamp: Date.now()
    }); r.length > lv; )
      r.shift();
    t(0, u.boxes = [], u), se(-1), J = null, y && Ss(), x(), ke("change"), console.log(`Cleared ${m.length} shapes. Pre-clear history size: ${r.length}`);
  }
  function Ms() {
    if (C) {
      if (K = 1, t(11, C.width = C.clientWidth, C), Y.setRotatedImage(T), T !== null) {
        R = Y.imageRotatedWidth, U = Y.imageRotatedHeight;
        const W = (u == null ? void 0 : u.scrollable_mode) || M && L && (Y.imageRotatedWidth > C.clientWidth || Y.imageRotatedHeight > (typeof v == "number" ? v : 800));
        if (t(15, ie = W), ie && L) {
          P = Y.imageRotatedWidth, _e = Y.imageRotatedHeight;
          const H = typeof v == "number" ? v : 800;
          t(11, C.height = H, C), Z = 0, O = 0, A = C.width, ae = C.height, K = 1, (Y.offsetX === void 0 || Y.offsetY === void 0) && (Y.offsetX = (C.width - P) / 2, Y.offsetY = (C.height - _e) / 2, P > C.width && (Y.offsetX = 0), _e > C.height && (Y.offsetY = 0));
        } else if (Y.imageRotatedWidth > C.width)
          K = C.width / Y.imageRotatedWidth, P = Math.round(Y.imageRotatedWidth * K), _e = Math.round(Y.imageRotatedHeight * K), Z = 0, O = 0, A = P, ae = _e, t(11, C.height = _e, C);
        else {
          P = Y.imageRotatedWidth, _e = Y.imageRotatedHeight;
          var m = (C.width - P) / 2;
          Z = m, O = 0, A = m + P, ae = _e, t(11, C.height = _e, C);
        }
        Y.imageWidth = P, Y.imageHeight = _e;
      } else
        Z = 0, O = 0, A = C.width, ae = C.height, t(11, C.height = C.clientHeight, C), t(15, ie = !1);
      if (Y.resize(C.width, C.height, Z, O), A > 0 && ae > 0)
        for (const W of u.boxes)
          W.canvasXmin = Z, W.canvasYmin = O, W.canvasXmax = A, W.canvasYmax = ae, W.setScaleFactor(K);
      x(), ke("change");
    }
  }
  const su = new ResizeObserver(Ms);
  function lu() {
    if (!(u === null || !u.boxes))
      for (let m = 0; m < u.boxes.length; m++) {
        let W = u.boxes[m];
        if (!(W instanceof ti) && !(W instanceof Tn) && !(W instanceof Gt) && !(W instanceof ni)) {
          let H = "", j = "";
          if (W.hasOwnProperty("color") ? (H = W.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = ht[m % ht.length], W.hasOwnProperty("label") && (j = W.label), W.hasOwnProperty("type") && W.type === "freehand" && W.hasOwnProperty("points")) {
            let Q = new Tn(x, Tt, Y, Z, O, A, ae, j, H, ve, _, g, Be, we, K);
            Q._points = W.points, Q.updateBoundingBox(), W = Q;
          } else if (W.hasOwnProperty("type") && W.type === "circle" && W.hasOwnProperty("centerX") && W.hasOwnProperty("centerY") && W.hasOwnProperty("radius"))
            W = new ni(x, Tt, Y, Z, O, A, ae, j, W.centerX, W.centerY, W.radius, H, ve, _, g, Be, we, K);
          else if (W.hasOwnProperty("type") && W.type === "polygon" && W.hasOwnProperty("points")) {
            let Q = new Gt(x, Tt, Y, Z, O, A, ae, j, H, ve, _, g, Be, we, K);
            Q._points = W.points, Q.updateBoundingBox(), W = Q;
          } else
            W = new ti(x, Tt, Y, Z, O, A, ae, j, W.xmin, W.ymin, W.xmax, W.ymax, H, ve, _, g, Be, we);
          t(0, u.boxes[m] = W, u);
        }
      }
  }
  function _a() {
    h !== null ? (T === null || T.src != h) && (T = new Image(), T.src = h, T.onload = function() {
      Ms(), x();
    }) : T = null;
  }
  ev(() => {
    if (a = !0, Array.isArray(b) && b.length > 0) {
      if (!Array.isArray(p) || p.length == 0)
        for (let m = 0; m < b.length; m++) {
          let W = ht[m % ht.length];
          p.push(vi(W));
        }
      De.label = b[0][0], De.color = p[0];
    }
    I = C.getContext("2d"), su.observe(C), F < 0 && u !== null && u.boxes.length > 0 && se(0), _a(), Ms(), x(), setTimeout(
      () => {
        a = !1, console.log("Initial state setup complete, undo tracking enabled");
      },
      100
    );
  });
  function ou() {
    document.addEventListener("keydown", mt);
  }
  function au() {
    document.removeEventListener("keydown", mt);
  }
  tv(() => {
    document.removeEventListener("keydown", mt);
  });
  function ru(m) {
    ii[m ? "unshift" : "push"](() => {
      C = m, t(11, C), t(0, u), t(64, f), t(60, z), t(12, D), t(9, s);
    });
  }
  const cu = () => Ss(), fu = () => aa(), uu = () => ra(), hu = () => ca(), du = () => fa(), _u = () => Xn(), mu = () => Vn(), gu = () => t(18, E = !0), pu = () => ft(), bu = () => Ae(), vu = () => {
    t(10, c = !c), x();
  }, wu = () => da();
  function ku(m) {
    zo.call(this, i, m);
  }
  function yu(m) {
    zo.call(this, i, m);
  }
  function Cu(m) {
    zo.call(this, i, m);
  }
  function Su(m) {
    Le = m, t(19, Le);
  }
  function Mu(m) {
    Xe = m, t(21, Xe);
  }
  function zu(m) {
    qe = m, t(20, qe);
  }
  function Wu(m) {
    ve = m, t(22, ve), t(63, Ie);
  }
  function xu(m) {
    Be = m, t(23, Be);
  }
  function Bu(m) {
    we = m, t(24, we);
  }
  return i.$$set = (m) => {
    "imageUrl" in m && t(55, h = m.imageUrl), "interactive" in m && t(4, d = m.interactive), "boxMinSize" in m && t(56, _ = m.boxMinSize), "handleSize" in m && t(57, g = m.handleSize), "value" in m && t(0, u = m.value), "choices" in m && t(1, b = m.choices), "choicesColors" in m && t(2, p = m.choicesColors), "disableEditBoxes" in m && t(5, k = m.disableEditBoxes), "height" in m && t(6, v = m.height), "width" in m && t(7, S = m.width), "singleBox" in m && t(58, y = m.singleBox), "showRemoveButton" in m && t(3, w = m.showRemoveButton), "handlesCursor" in m && t(8, B = m.handlesCursor), "useDefaultLabel" in m && t(59, X = m.useDefaultLabel), "shapeCreationMode" in m && t(60, z = m.shapeCreationMode), "autoScroll" in m && t(61, M = m.autoScroll), "preserveResolution" in m && t(62, L = m.preserveResolution), "boxAlpha" in m && t(63, Ie = m.boxAlpha);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*showLabels*/
    1024 && t(26, n = c), i.$$.dirty[0] & /*value, canvas, mode, Mode*/
    6657 | i.$$.dirty[1] & /*shapeCreationMode*/
    536870912 | i.$$.dirty[2] & /*initialized*/
    4 && (u !== null && u.boxes && u.boxes.length === 0 && !f || !f && z) && (t(12, D = te(z)), t(64, f = !0), C && t(11, C.style.cursor = D === s.drag ? "default" : "crosshair", C)), i.$$.dirty[0] & /*value*/
    1 && u !== null && u.boxes && u.boxes.length === 0 && t(64, f = !1), i.$$.dirty[2] & /*boxAlpha*/
    2 && t(22, ve = Ie), i.$$.dirty[0] & /*value*/
    1 && (u !== null && (Y.orientation = u.orientation), _a(), lu(), Ms(), x());
  }, [
    u,
    b,
    p,
    w,
    d,
    k,
    v,
    S,
    B,
    s,
    c,
    C,
    D,
    o,
    F,
    ie,
    re,
    xe,
    E,
    Le,
    qe,
    Xe,
    ve,
    Be,
    we,
    ot,
    n,
    l,
    x,
    ye,
    Bn,
    en,
    tn,
    ft,
    Ae,
    Uf,
    Nf,
    Vf,
    Kf,
    Zf,
    Jf,
    Ss,
    aa,
    ra,
    ca,
    fa,
    Xn,
    eu,
    tu,
    nu,
    iu,
    Vn,
    da,
    ou,
    au,
    h,
    _,
    g,
    y,
    X,
    z,
    M,
    L,
    Ie,
    f,
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
    yu,
    Cu,
    Su,
    Mu,
    zu,
    Wu,
    xu,
    Bu
  ];
}
class av extends Jb {
  constructor(e) {
    super(), Gb(
      this,
      e,
      ov,
      iv,
      $b,
      {
        imageUrl: 55,
        interactive: 4,
        boxMinSize: 56,
        handleSize: 57,
        value: 0,
        choices: 1,
        choicesColors: 2,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 58,
        showRemoveButton: 3,
        handlesCursor: 8,
        useDefaultLabel: 59,
        shapeCreationMode: 60,
        autoScroll: 61,
        preserveResolution: 62,
        boxAlpha: 63
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: rv,
  add_flush_callback: cv,
  bind: fv,
  binding_callbacks: uv,
  create_component: hv,
  destroy_component: dv,
  init: _v,
  mount_component: mv,
  safe_not_equal: gv,
  transition_in: pv,
  transition_out: bv
} = window.__gradio__svelte__internal, { createEventDispatcher: vv } = window.__gradio__svelte__internal;
function wv(i) {
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
    i[0]), e = new av({ props: l }), uv.push(() => fv(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      i[20]
    ), e.$on(
      "select",
      /*select_handler*/
      i[21]
    ), {
      c() {
        hv(e.$$.fragment);
      },
      m(a, c) {
        mv(e, a, c), n = !0;
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
        a[0], cv(() => t = !1)), e.$set(f);
      },
      i(a) {
        n || (pv(e.$$.fragment, a), n = !0);
      },
      o(a) {
        bv(e.$$.fragment, a), n = !1;
      },
      d(a) {
        dv(e, a);
      }
    }
  );
}
function kv(i, e, t) {
  let { src: n = void 0 } = e, { interactive: s } = e, { boxesAlpha: l } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { height: f } = e, { width: h } = e, { value: d } = e, { disableEditBoxes: _ } = e, { singleBox: g } = e, { showRemoveButton: u } = e, { handlesCursor: b } = e, { useDefaultLabel: p } = e, { shapeCreationMode: k } = e, v, S;
  const y = vv();
  function w(z) {
    d = z, t(0, d);
  }
  const B = () => y("change"), X = (z) => y("select", z.detail);
  return i.$$set = (z) => {
    "src" in z && t(17, n = z.src), "interactive" in z && t(1, s = z.interactive), "boxesAlpha" in z && t(2, l = z.boxesAlpha), "labelList" in z && t(3, o = z.labelList), "labelColors" in z && t(4, r = z.labelColors), "boxMinSize" in z && t(5, a = z.boxMinSize), "handleSize" in z && t(6, c = z.handleSize), "height" in z && t(7, f = z.height), "width" in z && t(8, h = z.width), "value" in z && t(0, d = z.value), "disableEditBoxes" in z && t(9, _ = z.disableEditBoxes), "singleBox" in z && t(10, g = z.singleBox), "showRemoveButton" in z && t(11, u = z.showRemoveButton), "handlesCursor" in z && t(12, b = z.handlesCursor), "useDefaultLabel" in z && t(13, p = z.useDefaultLabel), "shapeCreationMode" in z && t(14, k = z.shapeCreationMode);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    393216) {
      t(15, v = n), t(18, S = n);
      const z = n;
      m1(z).then((M) => {
        S === z && t(15, v = M);
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
    _,
    g,
    u,
    b,
    p,
    k,
    v,
    y,
    n,
    S,
    w,
    B,
    X
  ];
}
class yv extends rv {
  constructor(e) {
    super(), _v(this, e, kv, wv, gv, {
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
class hc {
  constructor() {
    this.boxes = [], this.orientation = 0, this.scrollable_mode = !1, this.auto_scroll = !0, this.preserve_resolution = !0;
  }
}
const {
  SvelteComponent: Cv,
  add_flush_callback: bl,
  append: Hi,
  attr: us,
  bind: vl,
  binding_callbacks: vs,
  bubble: ss,
  check_outros: si,
  create_component: Sn,
  create_slot: Sv,
  destroy_component: Mn,
  detach: _i,
  element: gs,
  empty: Mv,
  get_all_dirty_from_scope: zv,
  get_slot_changes: Wv,
  group_outros: li,
  init: xv,
  insert: mi,
  mount_component: zn,
  noop: Bv,
  safe_not_equal: Xv,
  space: ei,
  toggle_class: dc,
  transition_in: Se,
  transition_out: Re,
  update_slot_base: Yv
} = window.__gradio__svelte__internal, { createEventDispatcher: Dv, tick: Ev } = window.__gradio__svelte__internal;
function _c(i) {
  let e, t;
  return e = new x1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Rv] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Sn(e.$$.fragment);
    },
    m(n, s) {
      zn(e, n, s), t = !0;
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
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mn(e, n);
    }
  };
}
function Rv(i) {
  let e, t;
  return e = new wl({
    props: {
      Icon: i_,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Sn(e.$$.fragment);
    },
    m(n, s) {
      zn(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[0] & /*i18n*/
      256 && (l.label = /*i18n*/
      n[8]("common.download")), e.$set(l);
    },
    i(n) {
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mn(e, n);
    }
  };
}
function mc(i) {
  let e, t;
  return e = new um({
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
      Sn(e.$$.fragment);
    },
    m(n, s) {
      zn(e, n, s), t = !0;
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
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mn(e, n);
    }
  };
}
function gc(i) {
  let e, t, n;
  return t = new wl({
    props: { Icon: Dc, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[35]
  ), {
    c() {
      e = gs("div"), Sn(t.$$.fragment);
    },
    m(s, l) {
      mi(s, e, l), zn(t, e, null), n = !0;
    },
    p: Bv,
    i(s) {
      n || (Se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && _i(e), Mn(t);
    }
  };
}
function pc(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Sv(
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
      16777216) && Yv(
        n,
        t,
        s,
        /*$$scope*/
        s[55],
        e ? Wv(
          t,
          /*$$scope*/
          s[55],
          l,
          null
        ) : zv(
          /*$$scope*/
          s[55]
        ),
        null
      );
    },
    i(s) {
      e || (Se(n, s), e = !0);
    },
    o(s) {
      Re(n, s), e = !1;
    },
    d(s) {
      n && n.d(s);
    }
  };
}
function Lv(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && pc(i)
  );
  return {
    c() {
      n && n.c(), e = Mv();
    },
    m(s, l) {
      n && n.m(s, l), mi(s, e, l), t = !0;
    },
    p(s, l) {
      /*value*/
      s[1] === null ? n ? (n.p(s, l), l[0] & /*value*/
      2 && Se(n, 1)) : (n = pc(s), n.c(), Se(n, 1), n.m(e.parentNode, e)) : n && (li(), Re(n, 1, 1, () => {
        n = null;
      }), si());
    },
    i(s) {
      t || (Se(n), t = !0);
    },
    o(s) {
      Re(n), t = !1;
    },
    d(s) {
      s && _i(e), n && n.d(s);
    }
  };
}
function bc(i) {
  let e, t;
  return e = new Q0({
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
      Sn(e.$$.fragment);
    },
    m(n, s) {
      zn(e, n, s), t = !0;
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
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mn(e, n);
    }
  };
}
function vc(i) {
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
    i[1]), t = new yv({ props: o }), vs.push(() => vl(t, "value", l)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), t.$on(
      "select",
      /*select_handler*/
      i[53]
    ), {
      c() {
        e = gs("div"), Sn(t.$$.fragment), us(e, "class", "image-frame svelte-1gjdske"), dc(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        mi(r, e, a), zn(t, e, null), s = !0;
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
        r[1], bl(() => n = !1)), t.$set(c), (!s || a[0] & /*selectable*/
        32) && dc(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        s || (Se(t.$$.fragment, r), s = !0);
      },
      o(r) {
        Re(t.$$.fragment, r), s = !1;
      },
      d(r) {
        r && _i(e), Mn(t);
      }
    }
  );
}
function wc(i) {
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
    i[0]), e = new Wm({ props: l }), vs.push(() => vl(e, "active_source", s)), {
      c() {
        Sn(e.$$.fragment);
      },
      m(o, r) {
        zn(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], bl(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Se(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Re(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Mn(e, o);
      }
    }
  );
}
function qv(i) {
  let e, t, n, s, l, o, r, a, c, f, h, d, _, g, u = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), b;
  e = new Th({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Ec,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && _c(i)
  ), k = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && mc(i)
  ), v = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && gc(i)
  );
  function S(M) {
    i[43](M);
  }
  function y(M) {
    i[44](M);
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
    $$slots: { default: [Lv] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[28] !== void 0 && (w.uploading = /*uploading*/
  i[28]), /*dragging*/
  i[29] !== void 0 && (w.dragging = /*dragging*/
  i[29]), c = new a0({ props: w }), i[42](c), vs.push(() => vl(c, "uploading", S)), vs.push(() => vl(c, "dragging", y)), c.$on(
    "load",
    /*handle_upload*/
    i[31]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let B = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && bc(i)
  ), X = (
    /*value*/
    i[1] !== null && vc(i)
  ), z = u && wc(i);
  return {
    c() {
      Sn(e.$$.fragment), t = ei(), n = gs("div"), p && p.c(), s = ei(), k && k.c(), l = ei(), v && v.c(), o = ei(), r = gs("div"), a = gs("div"), Sn(c.$$.fragment), d = ei(), B && B.c(), _ = ei(), X && X.c(), g = ei(), z && z.c(), us(n, "class", "icon-buttons svelte-1gjdske"), us(a, "class", "upload-container svelte-1gjdske"), us(r, "data-testid", "image"), us(r, "class", "image-container svelte-1gjdske");
    },
    m(M, L) {
      zn(e, M, L), mi(M, t, L), mi(M, n, L), p && p.m(n, null), Hi(n, s), k && k.m(n, null), Hi(n, l), v && v.m(n, null), mi(M, o, L), mi(M, r, L), Hi(r, a), zn(c, a, null), Hi(a, d), B && B.m(a, null), Hi(a, _), X && X.m(a, null), Hi(r, g), z && z.m(r, null), b = !0;
    },
    p(M, L) {
      const C = {};
      L[0] & /*show_label*/
      8 && (C.show_label = /*show_label*/
      M[3]), L[0] & /*label*/
      4 && (C.label = /*label*/
      M[2] || "Image Annotator"), e.$set(C), /*showDownloadButton*/
      M[10] && /*value*/
      M[1] !== null ? p ? (p.p(M, L), L[0] & /*showDownloadButton, value*/
      1026 && Se(p, 1)) : (p = _c(M), p.c(), Se(p, 1), p.m(n, s)) : p && (li(), Re(p, 1, 1, () => {
        p = null;
      }), si()), /*showShareButton*/
      M[9] && /*value*/
      M[1] !== null ? k ? (k.p(M, L), L[0] & /*showShareButton, value*/
      514 && Se(k, 1)) : (k = mc(M), k.c(), Se(k, 1), k.m(n, l)) : k && (li(), Re(k, 1, 1, () => {
        k = null;
      }), si()), /*showClearButton*/
      M[11] && /*value*/
      M[1] !== null && /*interactive*/
      M[7] ? v ? (v.p(M, L), L[0] & /*showClearButton, value, interactive*/
      2178 && Se(v, 1)) : (v = gc(M), v.c(), Se(v, 1), v.m(n, null)) : v && (li(), Re(v, 1, 1, () => {
        v = null;
      }), si());
      const I = {};
      L[0] & /*value, active_source*/
      3 && (I.hidden = /*value*/
      M[1] !== null || /*active_source*/
      M[0] === "webcam"), L[0] & /*active_source*/
      1 && (I.filetype = /*active_source*/
      M[0] === "clipboard" ? "clipboard" : "image/*"), L[0] & /*root*/
      64 && (I.root = /*root*/
      M[6]), L[0] & /*max_file_size*/
      8388608 && (I.max_file_size = /*max_file_size*/
      M[23]), L[0] & /*sources*/
      16 && (I.disable_click = !/*sources*/
      M[4].includes("upload")), L[0] & /*cli_upload*/
      16777216 && (I.upload = /*cli_upload*/
      M[24]), L[0] & /*stream_handler*/
      33554432 && (I.stream_handler = /*stream_handler*/
      M[25]), L[0] & /*value*/
      2 | L[1] & /*$$scope*/
      16777216 && (I.$$scope = { dirty: L, ctx: M }), !f && L[0] & /*uploading*/
      268435456 && (f = !0, I.uploading = /*uploading*/
      M[28], bl(() => f = !1)), !h && L[0] & /*dragging*/
      536870912 && (h = !0, I.dragging = /*dragging*/
      M[29], bl(() => h = !1)), c.$set(I), /*value*/
      M[1] === null && /*active_source*/
      M[0] === "webcam" ? B ? (B.p(M, L), L[0] & /*value, active_source*/
      3 && Se(B, 1)) : (B = bc(M), B.c(), Se(B, 1), B.m(a, _)) : B && (li(), Re(B, 1, 1, () => {
        B = null;
      }), si()), /*value*/
      M[1] !== null ? X ? (X.p(M, L), L[0] & /*value*/
      2 && Se(X, 1)) : (X = vc(M), X.c(), Se(X, 1), X.m(a, null)) : X && (li(), Re(X, 1, 1, () => {
        X = null;
      }), si()), L[0] & /*sources, value, interactive*/
      146 && (u = /*sources*/
      (M[4].length > 1 || /*sources*/
      M[4].includes("clipboard")) && /*value*/
      M[1] === null && /*interactive*/
      M[7]), u ? z ? (z.p(M, L), L[0] & /*sources, value, interactive*/
      146 && Se(z, 1)) : (z = wc(M), z.c(), Se(z, 1), z.m(r, null)) : z && (li(), Re(z, 1, 1, () => {
        z = null;
      }), si());
    },
    i(M) {
      b || (Se(e.$$.fragment, M), Se(p), Se(k), Se(v), Se(c.$$.fragment, M), Se(B), Se(X), Se(z), b = !0);
    },
    o(M) {
      Re(e.$$.fragment, M), Re(p), Re(k), Re(v), Re(c.$$.fragment, M), Re(B), Re(X), Re(z), b = !1;
    },
    d(M) {
      M && (_i(t), _i(n), _i(o), _i(r)), Mn(e, M), p && p.d(), k && k.d(), v && v.d(), i[42](null), Mn(c), B && B.d(), X && X.d(), z && z.d();
    }
  };
}
function Pv(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  var l = this && this.__awaiter || function(x, se, ye, gn) {
    function Bn(en) {
      return en instanceof ye ? en : new ye(function(mt) {
        mt(en);
      });
    }
    return new (ye || (ye = Promise))(function(en, mt) {
      function tn(ft) {
        try {
          at(gn.next(ft));
        } catch (Ae) {
          mt(Ae);
        }
      }
      function nn(ft) {
        try {
          at(gn.throw(ft));
        } catch (Ae) {
          mt(Ae);
        }
      }
      function at(ft) {
        ft.done ? en(ft.value) : Bn(ft.value).then(tn, nn);
      }
      at((gn = gn.apply(x, se || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: f = !1 } = e, { root: h } = e, { interactive: d } = e, { i18n: _ } = e, { showShareButton: g } = e, { showDownloadButton: u } = e, { showClearButton: b } = e, { boxesAlpha: p } = e, { labelList: k } = e, { labelColors: v } = e, { boxMinSize: S } = e, { handleSize: y } = e, { height: w } = e, { width: B } = e, { boxThickness: X } = e, { disableEditBoxes: z } = e, { singleBox: M } = e, { showRemoveButton: L } = e, { handlesCursor: C } = e, { boxSelectedThickness: I } = e, { max_file_size: T = null } = e, { cli_upload: F } = e, { stream_handler: D } = e, { useDefaultLabel: Y } = e, { shapeCreationMode: q } = e, te, Z = !1, { active_source: O = null } = e;
  function A({ detail: x }) {
    t(1, o = new hc()), t(1, o.image = x, o), K("upload");
  }
  function ae(x) {
    return l(this, void 0, void 0, function* () {
      const se = yield te.load_files([new File([x], "webcam.png")]), ye = (se == null ? void 0 : se[0]) || null;
      ye ? (t(1, o = new hc()), t(1, o.image = ye, o)) : t(1, o = null), yield Ev(), K("change");
    });
  }
  const K = Dv();
  let P = !1;
  function _e(x) {
    return l(this, void 0, void 0, function* () {
      switch (x) {
        case "clipboard":
          te.paste_clipboard();
          break;
      }
    });
  }
  function R() {
    t(1, o = null), t(28, Z = !1), c && c.length > 0 && t(0, O = c[0]), K("clear"), K("change");
  }
  const U = async (x) => x === null ? "" : `<img src="${await Q_(x.image)}" />`;
  function ie(x) {
    ss.call(this, i, x);
  }
  function re(x) {
    ss.call(this, i, x);
  }
  function xe(x) {
    vs[x ? "unshift" : "push"](() => {
      te = x, t(30, te);
    });
  }
  function E(x) {
    Z = x, t(28, Z);
  }
  function Le(x) {
    P = x, t(29, P);
  }
  function qe(x) {
    ss.call(this, i, x);
  }
  const J = (x) => ae(x.detail), Xe = (x) => ae(x.detail);
  function Ie(x) {
    ss.call(this, i, x);
  }
  function ve(x) {
    ss.call(this, i, x);
  }
  const Be = (x) => ae(x.detail);
  function we(x) {
    o = x, t(1, o);
  }
  const ot = () => K("change"), De = (x) => K("select", { index: null, value: x.detail.coordinates });
  function ke(x) {
    O = x, t(0, O), t(4, c);
  }
  return i.$$set = (x) => {
    "value" in x && t(1, o = x.value), "label" in x && t(2, r = x.label), "show_label" in x && t(3, a = x.show_label), "sources" in x && t(4, c = x.sources), "selectable" in x && t(5, f = x.selectable), "root" in x && t(6, h = x.root), "interactive" in x && t(7, d = x.interactive), "i18n" in x && t(8, _ = x.i18n), "showShareButton" in x && t(9, g = x.showShareButton), "showDownloadButton" in x && t(10, u = x.showDownloadButton), "showClearButton" in x && t(11, b = x.showClearButton), "boxesAlpha" in x && t(12, p = x.boxesAlpha), "labelList" in x && t(13, k = x.labelList), "labelColors" in x && t(14, v = x.labelColors), "boxMinSize" in x && t(15, S = x.boxMinSize), "handleSize" in x && t(16, y = x.handleSize), "height" in x && t(17, w = x.height), "width" in x && t(18, B = x.width), "boxThickness" in x && t(36, X = x.boxThickness), "disableEditBoxes" in x && t(19, z = x.disableEditBoxes), "singleBox" in x && t(20, M = x.singleBox), "showRemoveButton" in x && t(21, L = x.showRemoveButton), "handlesCursor" in x && t(22, C = x.handlesCursor), "boxSelectedThickness" in x && t(37, I = x.boxSelectedThickness), "max_file_size" in x && t(23, T = x.max_file_size), "cli_upload" in x && t(24, F = x.cli_upload), "stream_handler" in x && t(25, D = x.stream_handler), "useDefaultLabel" in x && t(26, Y = x.useDefaultLabel), "shapeCreationMode" in x && t(27, q = x.shapeCreationMode), "active_source" in x && t(0, O = x.active_source), "$$scope" in x && t(55, s = x.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    268435456 && Z && R(), i.$$.dirty[0] & /*dragging*/
    536870912 && K("drag", P), i.$$.dirty[0] & /*active_source, sources*/
    17 && !O && c && t(0, O = c[0]);
  }, [
    O,
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
    b,
    p,
    k,
    v,
    S,
    y,
    w,
    B,
    z,
    M,
    L,
    C,
    T,
    F,
    D,
    Y,
    q,
    Z,
    P,
    te,
    A,
    ae,
    K,
    _e,
    R,
    X,
    I,
    n,
    U,
    ie,
    re,
    xe,
    E,
    Le,
    qe,
    J,
    Xe,
    Ie,
    ve,
    Be,
    we,
    ot,
    De,
    ke,
    s
  ];
}
class Hv extends Cv {
  constructor(e) {
    super(), xv(
      this,
      e,
      Pv,
      qv,
      Xv,
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
  SvelteComponent: Iv,
  attr: sl,
  detach: Pf,
  element: Hf,
  init: Av,
  insert: If,
  noop: kc,
  safe_not_equal: Fv,
  src_url_equal: yc,
  toggle_class: In
} = window.__gradio__svelte__internal;
function Cc(i) {
  let e, t;
  return {
    c() {
      e = Hf("img"), yc(e.src, t = /*value*/
      i[0].url) || sl(e, "src", t), sl(e, "alt", "");
    },
    m(n, s) {
      If(n, e, s);
    },
    p(n, s) {
      s & /*value*/
      1 && !yc(e.src, t = /*value*/
      n[0].url) && sl(e, "src", t);
    },
    d(n) {
      n && Pf(e);
    }
  };
}
function jv(i) {
  let e, t = (
    /*value*/
    i[0] && Cc(i)
  );
  return {
    c() {
      e = Hf("div"), t && t.c(), sl(e, "class", "container svelte-1sgcyba"), In(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), In(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), In(
        e,
        "selected",
        /*selected*/
        i[2]
      ), In(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, s) {
      If(n, e, s), t && t.m(e, null);
    },
    p(n, [s]) {
      /*value*/
      n[0] ? t ? t.p(n, s) : (t = Cc(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), s & /*type*/
      2 && In(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), s & /*type*/
      2 && In(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), s & /*selected*/
      4 && In(
        e,
        "selected",
        /*selected*/
        n[2]
      ), s & /*value*/
      1 && In(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: kc,
    o: kc,
    d(n) {
      n && Pf(e), t && t.d();
    }
  };
}
function Tv(i, e, t) {
  let { value: n } = e, { type: s } = e, { selected: l = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, s = o.type), "selected" in o && t(2, l = o.selected);
  }, [n, s, l];
}
class pw extends Iv {
  constructor(e) {
    super(), Av(this, e, Tv, jv, Fv, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Ov,
  add_flush_callback: Sc,
  assign: Uv,
  bind: Mc,
  binding_callbacks: zc,
  check_outros: Nv,
  create_component: wi,
  destroy_component: ki,
  detach: Af,
  empty: Vv,
  flush: be,
  get_spread_object: Kv,
  get_spread_update: Zv,
  group_outros: Jv,
  init: Gv,
  insert: Ff,
  mount_component: yi,
  safe_not_equal: Qv,
  space: $v,
  transition_in: Wn,
  transition_out: xn
} = window.__gradio__svelte__internal;
function ew(i) {
  let e, t;
  return e = new wd({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [iw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      wi(e.$$.fragment);
    },
    m(n, s) {
      yi(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*$$scope*/
      16384 && (l.$$scope = { dirty: s, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (Wn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ki(e, n);
    }
  };
}
function tw(i) {
  let e, t;
  return e = new Ac({
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
      wi(e.$$.fragment);
    },
    m(n, s) {
      yi(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (Wn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ki(e, n);
    }
  };
}
function nw(i) {
  let e, t;
  return e = new Ac({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      wi(e.$$.fragment);
    },
    m(n, s) {
      yi(e, n, s), t = !0;
    },
    p(n, s) {
      const l = {};
      s[1] & /*gradio*/
      2 && (l.i18n = /*gradio*/
      n[32].i18n), e.$set(l);
    },
    i(n) {
      t || (Wn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ki(e, n);
    }
  };
}
function iw(i) {
  let e, t;
  return e = new Ec({}), {
    c() {
      wi(e.$$.fragment);
    },
    m(n, s) {
      yi(e, n, s), t = !0;
    },
    i(n) {
      t || (Wn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ki(e, n);
    }
  };
}
function sw(i) {
  let e, t, n, s;
  const l = [nw, tw, ew], o = [];
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
      t.c(), n = Vv();
    },
    m(a, c) {
      o[e].m(a, c), Ff(a, n, c), s = !0;
    },
    p(a, c) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, c) : (Jv(), xn(o[f], 1, 1, () => {
        o[f] = null;
      }), Nv(), t = o[e], t ? t.p(a, c) : (t = o[e] = l[e](a), t.c()), Wn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      s || (Wn(t), s = !0);
    },
    o(a) {
      xn(t), s = !1;
    },
    d(a) {
      a && Af(n), o[e].d(a);
    }
  };
}
function lw(i) {
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
    a = Uv(a, r[d]);
  e = new u1({ props: a });
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
    $$slots: { default: [sw] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (h.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (h.value = /*value*/
    i[0]), n = new Hv({ props: h }), zc.push(() => Mc(n, "active_source", c)), zc.push(() => Mc(n, "value", f)), n.$on(
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
        wi(e.$$.fragment), t = $v(), wi(n.$$.fragment);
      },
      m(d, _) {
        yi(e, d, _), Ff(d, t, _), yi(n, d, _), o = !0;
      },
      p(d, _) {
        const g = _[0] & /*loading_status*/
        2 | _[1] & /*gradio*/
        2 ? Zv(r, [
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
          2 && Kv(
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
        d[34], Sc(() => s = !1)), !l && _[0] & /*value*/
        1 && (l = !0, u.value = /*value*/
        d[0], Sc(() => l = !1)), n.$set(u);
      },
      i(d) {
        o || (Wn(e.$$.fragment, d), Wn(n.$$.fragment, d), o = !0);
      },
      o(d) {
        xn(e.$$.fragment, d), xn(n.$$.fragment, d), o = !1;
      },
      d(d) {
        d && Af(t), ki(e, d), ki(n, d);
      }
    }
  );
}
function ow(i) {
  let e, t;
  return e = new Uu({
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
      $$slots: { default: [lw] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      wi(e.$$.fragment);
    },
    m(n, s) {
      yi(e, n, s), t = !0;
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
      t || (Wn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ki(e, n);
    }
  };
}
function aw(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: s = [] } = e, { visible: l = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: f } = e, { width: h } = e, { _selectable: d = !1 } = e, { container: _ = !0 } = e, { scale: g = null } = e, { min_width: u = void 0 } = e, { loading_status: b } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: k } = e, { show_share_button: v } = e, { show_clear_button: S } = e, { interactive: y } = e, { boxes_alpha: w } = e, { label_list: B } = e, { label_colors: X } = e, { box_min_size: z } = e, { handle_size: M } = e, { box_thickness: L } = e, { box_selected_thickness: C } = e, { disable_edit_boxes: I } = e, { single_box: T } = e, { show_remove_button: F } = e, { handles_cursor: D } = e, { use_default_label: Y } = e, { shape_creation_mode: q } = e, { gradio: te } = e, Z, O = null;
  function A(E) {
    O = E, t(34, O);
  }
  function ae(E) {
    o = E, t(0, o);
  }
  const K = () => te.dispatch("change"), P = () => te.dispatch("edit"), _e = () => {
    te.dispatch("clear");
  }, R = ({ detail: E }) => t(33, Z = E), U = () => te.dispatch("upload"), ie = ({ detail: E }) => te.dispatch("select", E), re = ({ detail: E }) => te.dispatch("share", E), xe = ({ detail: E }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), te.dispatch("error", E);
  };
  return i.$$set = (E) => {
    "elem_id" in E && t(2, n = E.elem_id), "elem_classes" in E && t(3, s = E.elem_classes), "visible" in E && t(4, l = E.visible), "value" in E && t(0, o = E.value), "label" in E && t(5, r = E.label), "show_label" in E && t(6, a = E.show_label), "root" in E && t(7, c = E.root), "height" in E && t(8, f = E.height), "width" in E && t(9, h = E.width), "_selectable" in E && t(10, d = E._selectable), "container" in E && t(11, _ = E.container), "scale" in E && t(12, g = E.scale), "min_width" in E && t(13, u = E.min_width), "loading_status" in E && t(1, b = E.loading_status), "sources" in E && t(14, p = E.sources), "show_download_button" in E && t(15, k = E.show_download_button), "show_share_button" in E && t(16, v = E.show_share_button), "show_clear_button" in E && t(17, S = E.show_clear_button), "interactive" in E && t(18, y = E.interactive), "boxes_alpha" in E && t(19, w = E.boxes_alpha), "label_list" in E && t(20, B = E.label_list), "label_colors" in E && t(21, X = E.label_colors), "box_min_size" in E && t(22, z = E.box_min_size), "handle_size" in E && t(23, M = E.handle_size), "box_thickness" in E && t(24, L = E.box_thickness), "box_selected_thickness" in E && t(25, C = E.box_selected_thickness), "disable_edit_boxes" in E && t(26, I = E.disable_edit_boxes), "single_box" in E && t(27, T = E.single_box), "show_remove_button" in E && t(28, F = E.show_remove_button), "handles_cursor" in E && t(29, D = E.handles_cursor), "use_default_label" in E && t(30, Y = E.use_default_label), "shape_creation_mode" in E && t(31, q = E.shape_creation_mode), "gradio" in E && t(32, te = E.gradio);
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
    h,
    d,
    _,
    g,
    u,
    p,
    k,
    v,
    S,
    y,
    w,
    B,
    X,
    z,
    M,
    L,
    C,
    I,
    T,
    F,
    D,
    Y,
    q,
    te,
    Z,
    O,
    A,
    ae,
    K,
    P,
    _e,
    R,
    U,
    ie,
    re,
    xe
  ];
}
class bw extends Ov {
  constructor(e) {
    super(), Gv(
      this,
      e,
      aw,
      ow,
      Qv,
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
  pw as BaseExample,
  bw as default
};
