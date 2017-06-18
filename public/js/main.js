function initWorkFilter() {
    var t = 0,
        e = $("#items-grid");
    ! function (i) {
        "use strict";
        var n;
        n = e.hasClass("masonry") ? "masonry" : "fitRows", e.imagesLoaded(function () {
            e.isotope({
                itemSelector: ".mix",
                layoutMode: n,
                filter: t
            })
        }), i(".port-filter").on("click", ".filter", function () {
            return i(".filter").removeClass("active"), i(this).addClass("active"), t = i(this).attr("data-filter"), e.isotope({
                itemSelector: ".mix",
                layoutMode: n,
                filter: t   
            }), !1
        })
    }(jQuery)
}

function initImgHeight() {
    ! function (t) {
        t(".js-height-fullscr").height(t(window).height())
    }(jQuery)
}

function initMasonry() {
    ! function (t) {
        t(".masonry").imagesLoaded(function () {
            t(".masonry").masonry()
        })
    }(jQuery)
}

function initMap() {
    ! function (t) {
        var e = (gmMapDiv.attr("data-address"), gmMapDiv.attr("data-address"));
        gmMapDiv.gmap3({
            action: "init",
            marker: {
                address: e,
                options: {
                    icon: "images/loc-marker.png"
                }
            },
            map: {
                options: {
                    zoom: 17,
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    mapTypeControl: !1,
                    scaleControl: !1,
                    scrollwheel: !1,
                    streetViewControl: !1,
                    draggable: !0,
                    styles: [{
                        stylers: [{
                            invert_lightness: !0
                        }, {
                            saturation: -100
                        }, {
                            lightness: 10
                        }]
                    }]
                }
            }
        })
    }(jQuery)
}

function initPageSliders() {
    ! function (t) {
        "use strict";
        t(".fullwidth-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
        }), t(".fullwidth-slider-auto").owlCarousel({
            autoPlay: 4e3,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
        }), t("#owl-clients").owlCarousel({
            autoPlay: 6e3,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [768, 3],
            itemsTablet: [480, 2],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1
        }), t(".owl-clients-auto").owlCarousel({
            autoPlay: 5e3,
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1
        }), t(".owl-clients-no-auto").owlCarousel({
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }), t(".owl-3items-nav").owlCarousel({
            items: 4,
            itemsDesktop: [1e3, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), t(".owl-clients-nav").owlCarousel({
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), t(".owl-apps-prev").owlCarousel({
            items: 3,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), t(".owl-1-pag").owlCarousel({
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }), t(".owl-1-pag-auto").owlCarousel({
            autoPlay: 5e3,
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        });
        var e = t(".fullwidth-slideshow").data("owlCarousel");
        if (t(document.documentElement).keyup(function (t) {
                37 == t.keyCode ? e.prev() : 39 == t.keyCode && e.next()
            }), t(".owl-carousel").lenth) {
            var e = t(".owl-carousel").data("owlCarousel");
            e.reinit()
        }
    }(jQuery)
}! function (t) {
    "use strict";

    function e() {
        var e = t("#nav");
        t("#menu-btn").on("click", function () {
            e.hasClass("transparent-fix") ? e.removeClass("transparent-fix") : e.addClass("transparent-fix")
        })
    }

    function i() {
        var t = jQuery,
            e = (t("body"), "#main-menu");
        t(e).on("click", ".open-sub", function (e) {
            e.preventDefault();
            var i = t(this).closest("li, .box");
            if (t(i).hasClass("active")) t(i).children().last().slideUp(150), t(i).removeClass("active");
            else {
                var n = t(this).closest("li, .box").parent("ul, .sub-list").children("li, .box");
                t(n).is(".active") && t(n).removeClass("active").children("ul").slideUp(150), t(i).children().last().slideDown(150), t(i).addClass("active")
            }
        })
    }

    function n() {
        t("#inline-popups").magnificPopup({
            delegate: "a",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr("data-effect")
                }
            },
            midClick: !0
        }), t(".lightbox").magnificPopup({
            type: "image",
            mainClass: "mfp-3d-unfold",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        }), t("a.hinge").magnificPopup({
            mainClass: "mfp-with-fade",
            removalDelay: 1e3,
            callbacks: {
                beforeClose: function () {
                    this.content.addClass("hinge")
                },
                close: function () {
                    this.content.removeClass("hinge")
                }
            },
            midClick: !0
        }), t(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-3d-unfold",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                }
            },
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        }), t(".popup-gallery2").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-3d-unfold",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                }
            },
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        }), t(".popup-multi-gallery").each(function () {
            t(this).magnificPopup({
                delegate: "a",
                type: "image",
                gallery: {
                    enabled: !0
                }
            })
        }), t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    }

    function a() {
        var e = t("#nav");
        e.affix({
            offset: {
                top: 1
            }
        }), p.width() < 1025 && (p.off(".affix"), e.removeData("bs.affix").removeClass("affix affix-top affix-bottom"))
    }

    function o() {
        t("#twitter-feeds").tweet({
            username: "abcgomel",
            modpath: "./js/twitter/",
            avatar_size: !1,
            count: 2,
            loading_text: "loading tweets..."
        })
    }

    function s() {
        t("#flickr-feeds").jflickrfeed({
            limit: 6,
            qstrings: {
                id: "91212552@N07"
            },
            itemTemplate: '<li><a class="lightbox" rel="colorbox" href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
        })
    }

    function l() {
        var e = t("#header-left-nav");
        p.width() < 1025 && e.removeClass("in"), p.width() > 1024 && !e.hasClass("in") && e.addClass("in")
    }

    function r() {
        var t = new WOW({
            mobile: !1
        });
        t.init()
    }

    function c() {
        t(".count-number").appear(function () {
            var e = t(this);
            e.countTo({
                from: 0,
                to: e.html(),
                speed: 1300,
                refreshInterval: 60
            })
        })
    }

    function u(e) {
        t.ajax({
            type: e.attr("method"),
            url: e.attr("action"),
            data: e.serialize(),
            cache: !1,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            error: function (e) {
                t("#notification_container").html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>')
            },
            success: function (e) {
                if ("success" != e.result) {
                    var i = e.msg;
                    t("#notification_container").html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + i + "</div>")
                } else {
                    var i = e.msg;
                    t("#notification_container").html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + i + "</div>")
                }
            }
        })
    }
    t(window).load(function () {
        t("body").imagesLoaded(function () {
            t(".loader-cont").fadeOut(), setTimeout(function () {
                t("#loader-overflow").delay(200).fadeOut(700)
            }, 1500)
        })
    }), t(document).ready(function () {
        function u(e) {
            "close" == e ? (t(".cd-search").removeClass("is-visible"), t(".cd-search-trigger").removeClass("search-is-visible"), t(".cd-overlay").removeClass("search-is-visible")) : (t(".cd-search").toggleClass("is-visible"), t(".cd-search-trigger").toggleClass("search-is-visible"), t(".cd-overlay").toggleClass("search-is-visible"), p.width() > d && t(".cd-search").hasClass("is-visible") && t(".cd-search").find('input[type="search"]').focus(), t(".cd-search").hasClass("is-visible") ? t(".cd-overlay").addClass("is-visible") : t(".cd-overlay").removeClass("is-visible"))
        }
        t(".header-black-bg").length && t("#menu-btn").on("click", function () {
            t("#nav").hasClass("transparent-fix") ? t("#nav").removeClass("transparent-fix") : t("#nav").addClass("transparent-fix")
        });
        var d = 1170;
        t(".cd-search-trigger").on("click", function (t) {
            t.preventDefault(), u()
        }), t(".equal-height").equalHeights(), t("#back-top").hide(), t(function () {
            p.scroll(function () {
                t(this).scrollTop() > 100 ? t("#back-top").fadeIn() : t("#back-top").fadeOut()
            }), t("#back-top a").on("click", function () {
                return t("body,html").animate({
                    scrollTop: 0
                }, 600), !1
            })
        }), t(".toggle-view-custom").on("click", "li", function () {
            var e = t(this).children("div.panel");
            e.is(":hidden") ? (e.slideDown("10"), t(this).children(".ui-accordion-header").addClass("ui-accordion-header-active")) : (e.slideUp("10"), t(this).children(".ui-accordion-header").removeClass("ui-accordion-header-active"))
        }), t('a.smooth-scroll[href^="#"]').on("click", function (e) {
            var i = t(t(this).attr("href"));
            i.length && (e.preventDefault(), t("html, body").animate({
                scrollTop: i.offset().top
            }, 600))
        }), 0 == m && (t(".opacity-scroll2").length && p.on("scroll", function () {
            t(".opacity-scroll2").css("opacity", function () {
                return 1 - p.scrollTop() / p.height() * 1.5
            })
        }), t(".parallax-section").length && t.stellar({
            horizontalScrolling: !1
        })), t(".skillbar").appear(function () {
            t(".skillbar").each(function () {
                t(this).find(".skillbar-bar").animate({
                    width: t(this).attr("data-percent")
                }, 2e3)
            })
        }), t(function () {
            t('[data-toggle="tooltip"]').tooltip()
        }), t(function () {
            t('[data-toggle="popover"]').popover()
        });
        var h = t(".accordion > dd").hide();
        h.first().slideDown("easeOutExpo"), t(".accordion > dt > a").first().addClass("active"), t(".accordion").on("click", "dt > a", function () {
            var e = t(this).parent().next("dd");
            return t(".accordion > dt > a").removeClass("active"), t(this).addClass("active"), h.not(e).slideUp("easeInExpo"), t(this).parent().next().slideDown("easeOutExpo"), !1
        }), t(".toggle > dd").hide(), t(".toggle").on("click", "dt > a", function () {
            if (t(this).hasClass("active")) t(this).parent().next().slideUp("easeOutExpo"), t(this).removeClass("active");
            else {
                t(this).parent().next("dd");
                t(this).addClass("active"), t(this).parent().next().slideDown("easeOutExpo")
            }
            return !1
        }), i(), t("#flickr-feeds").length && s(), t("#twitter-feeds").length && o(), t("#nav").length && a(), t(".mobile-transparent").length && e(), t("#items-grid").length && initWorkFilter(), t(".masonry").length && initMasonry(), t(".wow").length && r(), t(".owl-plugin").length && initPageSliders(), t(".mfp-plugin").length && n(), t(".js-height-fullscr").length && initImgHeight(), t(".count-number").length && c(), t("#header-left-nav").length && l(), t("#google-map").length && initMap(), p.resize(function () {
            t(".equal-height").css("height", "auto").equalHeights(), t("#nav").length && a(), initImgHeight(), l()
        });
        var f = p.width();
        p.resize(function () {
            t(this).width() != f && (f = t(this).width(), l())
        })
    });
    var d = t("html"),
        p = t(window),
        h = !1,
        m = !1,
        f = window.navigator.userAgent,
        g = f.indexOf("MSIE "),
        v = f.indexOf("Trident/");
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ? (m = !0, d.addClass("mobile")) : d.addClass("no-mobile"), (g > -1 || v > -1) && (h = !0), 0 !== t(".date-picker").length && t(function () {
        t(".date-picker").datetimepicker({
            format: "DD/MM/YYYY"
        })
    }), 0 !== t(".time-picker").length && t(function () {
        t(".time-picker").datetimepicker({
            format: "LT"
        })
    }), t(function () {
        var e = t("#mc-embedded-subscribe-form");
        t("#mc-embedded-subscribe").on("click", function (t) {
            t && t.preventDefault(), u(e)
        })
    })
}(jQuery);
var gmMapDiv = $("#google-map");
(function () {
    var t, e, i, n, a, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function () {
        function t() {}
        return t.prototype.extend = function (t, e) {
            var i, n;
            for (i in e) n = e[i], null == t[i] && (t[i] = n);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, i, n) {
            var a;
            return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (a = document.createEvent("CustomEvent"), a.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (a = document.createEventObject(), a.eventType = t) : a.eventName = t, a
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function (t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function (t) {
            var e, i, n, a, o;
            for (o = this.keys, e = n = 0, a = o.length; a > n; e = ++n)
                if (i = o[e], i === t) return this.values[e]
        }, t.prototype.set = function (t, e) {
            var i, n, a, o, s;
            for (s = this.keys, i = a = 0, o = s.length; o > a; i = ++a)
                if (n = s[i], n === t) return void(this.values[i] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function () {}, t
    }()), n = this.getComputedStyle || function (t) {
        return this.getPropertyValue = function (e) {
            var i;
            return "float" === e && (e = "styleFloat"), a.test(e) && e.replace(a, function (t, e) {
                return e.toUpperCase()
            }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
        }, this
    }, a = /(\-([a-z]){1})/g, this.WOW = function () {
        function a(t) {
            null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return a.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, a.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, a.prototype.start = function () {
            var e, i, n, a;
            if (this.stopped = !1, this.boxes = function () {
                    var t, i, n, a;
                    for (n = this.element.querySelectorAll("." + this.config.boxClass), a = [], t = 0, i = n.length; i > t; t++) e = n[t], a.push(e);
                    return a
                }.call(this), this.all = function () {
                    var t, i, n, a;
                    for (n = this.boxes, a = [], t = 0, i = n.length; i > t; t++) e = n[t], a.push(e);
                    return a
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (a = this.boxes, i = 0, n = a.length; n > i; i++) e = a[i], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                return function (e) {
                    var i, n, a, o, s;
                    for (s = [], i = 0, n = e.length; n > i; i++) o = e[i], s.push(function () {
                        var t, e, i, n;
                        for (i = o.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) a = i[t], n.push(this.doSync(a));
                        return n
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, a.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, a.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, a.prototype.doSync = function (t) {
            var e, i, n, a, o;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, a = t.querySelectorAll("." + this.config.boxClass), o = [], i = 0, n = a.length; n > i; i++) e = a[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, a.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, a.prototype.applyStyle = function (t, e) {
            var i, n, a;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), a = t.getAttribute("data-wow-iteration"), this.animate(function (o) {
                return function () {
                    return o.customStyle(t, e, n, i, a)
                }
            }(this))
        }, a.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), a.prototype.resetStyle = function () {
            var t, e, i, n, a;
            for (n = this.boxes, a = [], e = 0, i = n.length; i > e; e++) t = n[e], a.push(t.style.visibility = "visible");
            return a
        }, a.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, a.prototype.customStyle = function (t, e, i, n, a) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), a && this.vendorSet(t.style, {
                animationIterationCount: a
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function (t, e) {
            var i, n, a, o;
            n = [];
            for (i in e) a = e[i], t["" + i] = a, n.push(function () {
                var e, n, s, l;
                for (s = this.vendors, l = [], e = 0, n = s.length; n > e; e++) o = s[e], l.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = a);
                return l
            }.call(this));
            return n
        }, a.prototype.vendorCSS = function (t, e) {
            var i, a, o, s, l, r;
            for (l = n(t), s = l.getPropertyCSSValue(e), o = this.vendors, i = 0, a = o.length; a > i; i++) r = o[i], s = s || l.getPropertyCSSValue("-" + r + "-" + e);
            return s
        }, a.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (i) {
                e = n(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, a.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, a.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, a.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, a.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, i, n, a;
                for (n = this.boxes, a = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : a.push(t));
                return a
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, a.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, a.prototype.isVisible = function (t) {
            var e, i, n, a, o;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, a = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, a >= n && e >= o
        }, a.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, a.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, a
    }()
}).call(this), ! function (t) {
    t.fn.equalHeights = function () {
        var e = 0,
            i = t(this);
        return i.each(function () {
            var i = t(this).innerHeight();
            i > e && (e = i)
        }), i.css("height", e)
    }, t("[data-equal]").each(function () {
        var e = t(this),
            i = e.data("equal");
        e.find(i).equalHeights()
    })
}(jQuery);