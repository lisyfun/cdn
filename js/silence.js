!(function (t) {
  var e = {};
  function a(n) {
    if (e[n]) return e[n].exports;
    var s = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
  }
  (a.m = t),
    (a.c = e),
    (a.d = function (t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          a.d(
            n,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = ""),
    a((a.s = 12));
})([
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {},
  function (t, e, a) {
    "use strict";
    a.r(e);
    a(0);
    var n = {
      version: "3.0.0-rc2",
      avatar: null,
      favicon: null,
      github: null,
      defaultMode: "auto",
      defaultTheme: "a",
      navbars: [],
      showNavAdmin: !0,
      catalog: {
        enable: !1,
        index: !0,
        active: !1,
        levels: ["h2", "h3", "h4"],
      },
      signature: {
        enable: !0,
        author: null,
        license: [
          "署名-非商业性使用-相同方式共享 4.0 国际",
          "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        ],
        remark: null,
      },
      sponsor: {
        enable: !1,
        text: "Buy me a cup of coffee ☕.",
        paypal: null,
        wechat: null,
        alipay: null,
      },
    };
    function s() {
      return $("#topics").length > 0;
    }
    a(1);
    var o = function () {
      var t = n.github;
      t &&
        $("body").append(
          `<a href="${t}" class="github-corner" title="GitHub" target="_blank">\n                <svg width="60" height="60" viewBox="0 0 250 250" style="color:#fff" aria-hidden="true">\n                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n                    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n                    <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n                </svg>\n            </a>`
        );
    };
    a(2);
    var i = function () {
      const t = n.navbars,
        e = $("#navList");
      t &&
        t.length &&
        (t.reverse().forEach((t) => {
          if (
            ((t.target = t.target || "_self"), t.children && t.children.length)
          ) {
            var a = t.children.map(
              (t) => (
                (t.target = t.target || "_self"),
                `<li><a class="menu" target="${t.target}" href="${t.url}">${t.title}</a></li>`
              )
            );
            e.find("li")
              .eq(1)
              .after(
                `\n                    <li class="esa-has-subnavs">\n                        <a class="menu" href="javascript:void(0);">${
                  t.title
                }\n                            <svg class="arrow" width="9px" height="9px" viewBox="0 0 13 7" xml:space="preserve" fill="none" stroke="var(--text-color)"><path d="M1,1l6.2,6L13,1"></path></svg>\n                        </a>\n                        <div class="esa-sub-navs"><div class="caret"></div><ul>${a.join(
                  ""
                )}</ul></div>\n                    </li>`
              );
          } else
            e.find("li")
              .eq(1)
              .after(
                `<li><a class="menu" target="${t.target}" href="${t.url}">${t.title}</a></li>`
              );
        }),
        $("li.esa-has-subnavs").hover(
          function () {
            $(this).find("svg").addClass("open"),
              $(this).find(".esa-sub-navs").fadeIn("fast");
          },
          function () {
            $(this).find("svg").removeClass("open"),
              $(this).find(".esa-sub-navs").hide();
          }
        )),
        $.each(e.children("li"), (t, e) => {
          $(e).children("a").length || $(e).remove();
        }),
        $("#header").prepend(
          '<div class="esa-mobile-menu material-symbols-outlined">menu</div>'
        ),
        $(".esa-mobile-menu").on("click", () => {
          $("#navigator").fadeToggle();
        }),
        n.showNavAdmin || $("#blog_nav_admin").parent().remove();
    };
    a(3);
    var l = function () {
      $("#footer").append(
        `<span class="esa-copyright">& Theme <a href="https://github.com/esofar/cnblogs-theme-silence" target="_blank">Silence v${n.version}</a></span>`
      );
    };
    a(4);
    var r = function () {
      const t = n.avatar,
        e = n.favicon;
      t &&
        $("#sideBarMain").prepend(
          `<img class="esa-profile-avatar" src="${t}" />`
        ),
        e && $("#favicon").attr("href", e);
    };
    a(5);
    var c = function () {
      const t = n.catalog;
      if (t.enable) {
        const e = t.levels,
          a = e[0],
          n = e[1],
          s = e[2];
        let o = $("#cnblogs_post_body").find(e.join(",")),
          i = $(".esa-toolbar");
        if (!o.length) return i.find(".contents").remove(), !1;
        $("body").append('<div class="esa-contents noactive"></div>'),
          t.active && i.find(".contents").trigger("click");
        let l = 0,
          r = 0,
          c = 0,
          d = "<ul>";
        $.each(o, (e, o) => {
          const i = o.tagName.toLowerCase(),
            h = $(o).text();
          let u = $(o).attr("id"),
            p = "",
            f = h;
          if (t.index)
            i === a
              ? (l++,
                (r = 0),
                (c = 0),
                (p = `<span class="level1">${l}. </span>`))
              : i === n
              ? (r++, (c = 0), (p = `<span class="level2">${l}.${r}. </span>`))
              : i === s &&
                (c++, (p = `<span class="level3">${l}.${r}.${c}. </span>`));
          else
            switch (i) {
              case a:
                f = `<span class="level1">${f}</span>`;
                break;
              case n:
                f = `<span class="level2">${f}</span>`;
                break;
              case s:
                f = `<span class="level3">${f}</span>`;
            }
          u ||
            ((u = $(o).text().replace(/\ /g, "-").toLowerCase()),
            $(o).attr("id", u)),
            (d += `<li class="${i}" title="${h}">\n                    <a class="esa-anchor-link" href="#${u}">${
              p + f
            }</a>\n                 </li>`),
            $(o)
              .append(`<a href="#${u}" class="esa-anchor">#</a>`)
              .hover(
                () => {
                  $(o).find(".esa-anchor").css("opacity", 1);
                },
                () => {
                  $(o).find(".esa-anchor").css("opacity", 0);
                }
              );
        }),
          (d += "</ul>"),
          $(".esa-contents").append(d);
      }
    };
    a(6);
    const d = "https://unpkg.com/lightbox2@2.11.1/dist/css/lightbox.min.css",
      h = "https://unpkg.com/lightbox2@2.11.1/dist/js/lightbox.min.js";
    var u = function () {
      $("head").append(`<link rel="stylesheet" href="${d}"/>`),
        $.getScript(h, () => {
          $("#cnblogs_post_body")
            .find("img")
            .wrap(function () {
              return `<a href="${$(this).attr(
                "src"
              )}" data-title="${$(this).attr("title") || ""}" data-alt="${$(this).attr("alt") || ""}" data-lightbox="roadtrip"></a>`;
            }),
            $(
              ".code_img_closed, .code_img_opened, .cnblogs_code_copy img"
            ).unwrap();
        });
    };
    a(7);
    var p = function () {
      const t = n.signature;
      if (t.enable) {
        const e = $("#cb_post_title_url").attr("href"),
          a = t.author || currentBlogApp,
          n = `<div class="esa-post-signature"> \n                <p>作者：${$.trim(
            a
          )}</p> \n                <p>出处：<a href="${e}">${e}</a></p> \n                <p>版权：本作品采用「<a href="${
            t.license[1]
          }" target="_blank">${
            t.license[0]
          }</a>」许可协议进行许可。</p> \n                <p>${
            t.remark || ""
          }</p> \n            </div>`;
        $("#cnblogs_post_body").after(n);
      }
    };
    a(8);
    var f = function () {
      const t = n.sponsor;
      if (!t.enable || (t.enable && !t.paypal && !t.alipay && !t.wechat))
        return !1;
      $("#blog_post_info").before(
        `\n                <div class="esa-sponsor">\n                    <div class="title">${
          t.text
        }</div>\n                    <ul class="box">\n                        ${
          t.paypal
            ? '<li class="paypal"><svg t="1599893643429" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1307" width="25" height="25"><path d="M941.021887 369.059735c7.422144 34.295426 5.703717 73.709573-2.303424 116.524012-37.147285 188.515157-162.263434 253.632592-322.771878 253.632592h-25.154854c-19.414575 0-35.428857 14.295855-38.82915 33.710429l-2.303424 10.859-31.407006 197.655729-1.133431 8.555575c-3.985289 19.414575-19.999572 33.71043-39.414146 33.71043H334.30728c-16.014282 0-26.288285-13.125861-23.984861-29.140144 10.274003-63.984004 19.999572-127.968008 30.273575-191.952012s20.548006-127.383011 30.858571-191.367015c1.718428-13.710858 10.859-21.133002 24.569857-21.133003 22.85143 0 45.70286-0.584997 74.843004 0 41.132574 0.584997 88.553862-1.718428 134.805156-11.99243 61.68058-13.710858 117.694005-38.82915 163.945299-82.265148 41.717571-38.82915 69.687721-86.835434 88.553862-140.545435a515.893884 515.893884 0 0 0 19.999571-75.976435c1.133431-6.837148 2.851858-5.703717 6.837148-2.851858 31.407005 23.436427 49.139715 54.843432 55.976863 92.539151z m-98.242867-161.093441c0 46.836291-10.859 91.40572-26.288286 134.805156-29.688578 86.250437-85.702003 147.96758-172.537437 179.959582-46.287857 16.562716-94.842575 23.436427-143.98229 23.98486-34.295426 0.584997-68.55429 0-102.813154 0-37.147285 0-60.547149 18.281144-67.420859 54.843432-8.007141 43.435998-39.414146 245.662013-48.554718 302.772307-0.584997 3.985289-2.303424 5.703717-6.837148 5.703717H105.829543a27.494841 27.494841 0 0 1-27.421716-31.407005L210.946121 38.280716A45.995358 45.995358 0 0 1 256.063984 0h341.638019c24.569858 0 81.131717 10.859 119.412433 25.703288 81.131717 31.407005 125.664584 95.391009 125.664584 182.226444z" fill="var(--text-color)" p-id="1308"></path></svg></li>'
            : ""
        }\n                        ${
          t.alipay
            ? '<li class="alipay"><svg t="1599893614075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1025" width="25" height="25"><path d="M828.571429 624.342857c-44.228571-14.742857-103.657143-37.371429-169.714286-61.257143 39.771429-68.914286 71.428571-147.428571 92.228571-232.685714H533.142857v-78.4h266.971429v-43.771429H533.142857V77.714286h-109.028571c-19.085714 0-19.085714 18.857143-19.085715 18.857143v111.771428H135.085714v43.771429h270.057143v78.4H182.171429v43.771428h432.457142a762.491429 762.491429 0 0 1-62.285714 151.885715c-140.342857-46.171429-290.057143-83.657143-384.114286-60.571429-60.114286 14.857143-98.857143 41.257143-121.714285 68.914286-104.457143 126.857143-29.6 319.542857 191.085714 319.542857C368 853.942857 493.714286 781.257143 591.085714 661.714286 736.342857 731.428571 1024 851.085714 1024 851.085714V680.457143s-36.114286-2.857143-195.428571-56.114286zM217.028571 780.114286c-172 0-222.857143-135.2-137.828571-209.257143 28.342857-25.028571 80.228571-37.257143 107.885714-40 102.171429-10.057143 196.8 28.8 308.457143 83.2-78.628571 102.285714-178.628571 166.057143-278.514286 166.057143z" fill="var(--text-color)" p-id="1026"></path></svg></li>'
            : ""
        }\n                        ${
          t.wechat
            ? '<li class="wechat"><svg t="1599893658389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1451" width="25" height="25"><path d="M1004.416 543.914667c-25.984-58.88-75.008-105.642667-131.925333-134.442667-100.437333-50.858667-225.322667-50.56-325.504 1.28-69.589333 35.712-127.701333 99.712-144.170667 177.578667-13.568 57.344-1.408 119.082667 29.013333 169.002666 45.269333 75.178667 127.104 123.178667 212.096 138.581334 61.568 12.501333 125.269333 5.077333 185.088-12.16 35.925333 13.909333 67.925333 36.437333 102.741334 53.162666a2238.762667 2238.762667 0 0 0-28.842667-89.685333c39.082667-27.733333 74.496-62.336 95.744-105.770667 31.744-60.373333 33.664-135.296 5.76-197.546666z m-423.424-403.882667c-106.453333-59.904-239.018667-68.906667-353.536-27.52-75.264 27.093333-143.36 77.44-185.429333 145.92-38.186667 61.866667-52.48 139.008-34.090667 209.792 18.474667 78.506667 73.002667 144.341333 139.178667 188.288-12.8 36.266667-24.96 72.490667-36.48 109.013333 41.6-21.76 83.2-44.501333 124.842666-66.602666 49.92 16 103.04 23.850667 156.16 22.101333a262.784 262.784 0 0 1-10.88-125.909333c9.6-58.496 41.6-112 85.077334-151.637334 73.642667-68.906667 177.962667-97.962667 277.162666-90.922666-18.602667-91.093333-82.602667-168.064-163.157333-212.48h1.152z m73.941333 426.197333c-8.917333 27.818667-49.322667 36.181333-68.906666 15.018667-21.589333-19.584-13.184-60.501333 15.146666-69.248 31.317333-13.226667 67.498667 22.912 53.76 54.229333z m204.586667 3.925334c-10.922667 25.002667-48.682667 30.848-67.242667 11.52-8.917333-8.149333-11.52-20.437333-14.677333-31.146667 4.437333-19.541333 17.92-39.808 39.68-40.746667 30.08-4.181333 57.002667 32.981333 41.6 60.416h0.64zM554.24 294.784c0.341333 41.002667-54.4 66.602667-85.12 38.784-31.872-22.826667-22.826667-78.378667 14.592-89.856 33.493333-13.44 73.088 14.677333 70.442667 50.56l0.085333 0.512z m-258.517333 10.410667c-7.338667 35.626667-55.082667 52.821333-83.029334 28.928-32.384-22.826667-23.296-79.402667 14.72-90.922667 37.248-14.336 79.573333 23.466667 68.309334 61.994667z" fill="var(--text-color)" p-id="1452"></path></svg></li>'
            : ""
        }\n                    </ul>\n                    <div class="qrshow">\n                        <img src="">\n                    </div>\n                </div>`
      );
      var e = $(".esa-sponsor");
      e.find(".box li").hover(
        function () {
          var a = null;
          switch ($(this).attr("class")) {
            case "paypal":
              a = t.paypal;
              break;
            case "alipay":
              a = t.alipay;
              break;
            case "wechat":
              a = t.wechat;
          }
          a && e.find(".qrshow").html(`<img src="${a}">`).show();
        },
        function () {
          e.find(".qrshow").hide();
        }
      );
    };
    a(9);
    var v = function () {
      const t = ".feedbackItem > .feedbackCon > .blog_comment_body",
        e = () => {
          $(t).before(
            "<div class='esa-comment-avatar'><a target='_blank'><img /></a></div>"
          );
          let e = $(".feedbackItem > .feedbackCon");
          $.each(e, function (t, e) {
            let a = null,
              n = $(e).find('span[id$="avatar"]');
            n.length && (a = $.trim($(n).text())),
              $(e)
                .find(".esa-comment-avatar img")
                .attr(
                  "src",
                  a || "https://pic.cnblogs.com/face/sample_face.gif"
                );
            const s = $(e).parent().find(".comment_date").next().attr("href");
            $(e).find(".esa-comment-avatar a").attr("href", $.trim(s));
          });
        };
      if ($(t).length) e();
      else {
        let a = 1,
          n = setInterval(() => {
            $(t).length && (clearInterval(n), e()),
              10 == a && clearInterval(n),
              a++;
          }, 500);
      }
    };
    a(10);
    var m = function () {
      $("body").append(
        '<div class="esa-toolbar">\n        <div class="material-symbols-outlined bars">more_horiz</div>\n        <span class="material-symbols-outlined up" title="返回顶部">keyboard_arrow_up</span>\n        <span class="material-symbols-outlined mode" title="切换模式">dark_mode</span>\n        <span class="material-symbols-outlined skin" title="切换主题">palette</span>\n        <div class="skin-popup">\n            <div class="item">\n                <div class="title">选择主题</div>\n                <div class="themes">\n                    <button data-theme="a" style="background: #2D8CF0;"></button>\n                    <button data-theme="b" style="background: #FA7298;"></button>\n                    <button data-theme="c" style="background: #42B983;"></button>\n                    <button data-theme="d" style="background: #607D8B;"></button>\n                    <button data-theme="e" style="background: #5E72E4;"></button>\n                    <button data-theme="f" style="background: #FF9700;"></button>\n                    <button data-theme="g" style="background: #FF5722;"></button>\n                    <button data-theme="h" style="background: #009688;"></button>\n                    <button data-theme="i" style="background: #673BB7;"></button>\n                    <button data-theme="j" style="background: #906f61;"></button>\n                </div>\n            </div>\n        </div>\n        </div>\n    </div>'
      );
      const t = s() && n.catalog.enable;
      t &&
        $(".esa-toolbar").append(
          '<span class="material-symbols-outlined contents" title="目录导航">menu</span>'
        );
      const e = "silence-mode-" + currentBlogApp,
        a = "silence-theme-" + currentBlogApp,
        o = new Date().getHours(),
        i = sessionStorage.getItem(a) || n.defaultTheme,
        l =
          sessionStorage.getItem(e) ||
          ("auto" == n.defaultMode
            ? o >= 6 && o < 18
              ? "light"
              : "dark"
            : n.defaultMode);
      $("html").attr("mode", l), $("html").attr("theme", i);
      const r = $(".esa-toolbar"),
        c = $(".skin-popup");
      r.find(".mode").html("light" == l ? "dark_mode" : "light_mode");
      var d = document.getElementsByClassName("skin-popup")[0];
      let h = !1;
      r.find(".bars").click(function () {
        h
          ? (r.find(".bars").removeClass("bars-show"),
            r.find(".up").removeClass("up-show"),
            r.find(".mode").removeClass("mode-show"),
            r.find(".skin").removeClass("skin-show"),
            t && r.find(".contents").removeClass("contents-show"))
          : (r.find(".bars").addClass("bars-show"),
            r.find(".up").addClass("up-show"),
            r.find(".mode").addClass("mode-show"),
            r.find(".skin").addClass("skin-show"),
            t && r.find(".contents").addClass("contents-show")),
          (h = !h);
      }),
        r.find(".up").click(() => {
          $("html, body").animate({ scrollTop: 0 }, 450);
        }),
        r.find(".mode").click(function () {
          let t = $("html").attr("mode"),
            a = "light" == t ? "dark" : "light";
          sessionStorage.setItem(e, a),
            $(this).html(t + "_mode"),
            $("html").attr("mode", a);
        }),
        r.find(".skin").click((t) => {
          t.stopPropagation(), c.slideToggle();
        }),
        d.addEventListener("click", function (t) {
          if ((t.stopPropagation(), "BUTTON" === t.target.nodeName)) {
            console.log(t);
            var e = t.target.dataset.theme;
            sessionStorage.setItem(a, e), $("html").attr("theme", e);
          }
        }),
        document.addEventListener("click", function (t) {
          d && "block" === d.style.display && (d.style.display = "none");
        });
      let u = !1;
      r.find(".contents").click(() => {
        $(".esa-contents").toggleClass(function () {
          return $(this).hasClass("active")
            ? ($(this).removeClass("active"), "noactive")
            : ($(this).removeClass("noactive"), "active");
        }),
          u
            ? ($("#home").css({ width: "100%" }), (u = !1))
            : ($("#home").css({ width: "100%" }), (u = !0));
      }),
        s() && r.find(".bars").trigger("click");
    };
    a(11);
    const g = {
      show: () => {
        $(".loading").show();
      },
      hide: () => {
        $(".loading").fadeOut();
      },
    };
    var b = g;
    new (class {
      constructor() {
        this.init();
      }
      init() {
        const t = window.$silence;
        t && $.extend(!0, n, t), this.building();
      }
      building() {
        i(),
          l(),
          o(),
          r(),
          m(),
          s()
            ? (c(), u(), p(), f(), v())
            : ($(".forFlow").css({ marginLeft: "260px" }),
              $("#sideBar").show()),
          b.hide();
      }
    })();
  },
]);
