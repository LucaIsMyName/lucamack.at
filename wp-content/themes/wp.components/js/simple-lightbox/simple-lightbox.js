!function s(a, r, l) {
  function d(e, t) {
      if (!r[e]) {
          if (!a[e]) {
              var o = "function" == typeof require && require;
              if (!t && o)
                  return o(e, !0);
              if (c)
                  return c(e, !0);
              var i = new Error("Cannot find module '" + e + "'");
              throw i.code = "MODULE_NOT_FOUND",
              i
          }
          var n = r[e] = {
              exports: {}
          };
          a[e][0].call(n.exports, function(t) {
              return d(a[e][1][t] || t)
          }, n, n.exports, s, a, r, l)
      }
      return r[e].exports
  }
  for (var c = "function" == typeof require && require, t = 0; t < l.length; t++)
      d(l[t]);
  return d
}({
  1: [function(t, e, n) {
      (function(o) {
          (function() {
              "use strict";
              function h(t, e) {
                  var o;
                  if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                      if (Array.isArray(t) || (o = function(t, e) {
                          if (!t)
                              return;
                          if ("string" == typeof t)
                              return l(t, e);
                          var o = Object.prototype.toString.call(t).slice(8, -1);
                          "Object" === o && t.constructor && (o = t.constructor.name);
                          if ("Map" === o || "Set" === o)
                              return Array.from(t);
                          if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                              return l(t, e)
                      }(t)) || e && t && "number" == typeof t.length) {
                          o && (t = o);
                          var i = 0
                            , n = function() {};
                          return {
                              s: n,
                              n: function() {
                                  return i >= t.length ? {
                                      done: !0
                                  } : {
                                      done: !1,
                                      value: t[i++]
                                  }
                              },
                              e: function(t) {
                                  throw t
                              },
                              f: n
                          }
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }
                  var s, a = !0, r = !1;
                  return {
                      s: function() {
                          o = t[Symbol.iterator]()
                      },
                      n: function() {
                          var t = o.next();
                          return a = t.done,
                          t
                      },
                      e: function(t) {
                          r = !0,
                          s = t
                      },
                      f: function() {
                          try {
                              a || null == o.return || o.return()
                          } finally {
                              if (r)
                                  throw s
                          }
                      }
                  }
              }
              function l(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var o = 0, i = new Array(e); o < e; o++)
                      i[o] = t[o];
                  return i
              }
              function i(t, e) {
                  for (var o = 0; o < e.length; o++) {
                      var i = e[o];
                      i.enumerable = i.enumerable || !1,
                      i.configurable = !0,
                      "value"in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
              }
              function s(t, e, o) {
                  return e in t ? Object.defineProperty(t, e, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  }) : t[e] = o,
                  t
              }
              Object.defineProperty(n, "__esModule", {
                  value: !0
              }),
              n.default = void 0;
              var t = function() {
                  function n(t, e) {
                      var o = this;
                      if (!function(t, e) {
                          if (!(t instanceof e))
                              throw new TypeError("Cannot call a class as a function")
                      }(this, n),
                      s(this, "defaultOptions", {
                          sourceAttr: "href",
                          overlay: !0,
                          spinner: !0,
                          nav: !0,
                          navText: ["&lsaquo;", "&rsaquo;"],
                          captions: !0,
                          captionDelay: 0,
                          captionSelector: "img",
                          captionType: "attr",
                          captionsData: "title",
                          captionPosition: "bottom",
                          captionClass: "",
                          close: !0,
                          closeText: "&times;",
                          swipeClose: !0,
                          showCounter: !0,
                          fileExt: "png|jpg|jpeg|gif|webp",
                          animationSlide: !0,
                          animationSpeed: 250,
                          preloading: !0,
                          enableKeyboard: !0,
                          loop: !0,
                          rel: !1,
                          docClose: !0,
                          swipeTolerance: 50,
                          className: "simple-lightbox",
                          widthRatio: .8,
                          heightRatio: .9,
                          scaleImageToRatio: !1,
                          disableRightClick: !1,
                          disableScroll: !0,
                          alertError: !0,
                          alertErrorMessage: "Image not found, next image will be loaded",
                          additionalHtml: !1,
                          history: !0,
                          throttleInterval: 0,
                          doubleTapZoom: 2,
                          maxZoom: 10,
                          htmlClass: "has-lightbox",
                          rtl: !1,
                          fixedClass: "sl-fixed",
                          fadeSpeed: 300,
                          uniqueImages: !0,
                          focus: !0
                      }),
                      s(this, "transitionPrefix", void 0),
                      s(this, "transitionCapable", !1),
                      s(this, "isTouchDevice", "ontouchstart"in window),
                      s(this, "initialLocationHash", void 0),
                      s(this, "pushStateSupport", "pushState"in history),
                      s(this, "isOpen", !1),
                      s(this, "isAnimating", !1),
                      s(this, "isClosing", !1),
                      s(this, "isFadeIn", !1),
                      s(this, "urlChangedOnce", !1),
                      s(this, "hashReseted", !1),
                      s(this, "historyHasChanges", !1),
                      s(this, "historyUpdateTimeout", null),
                      s(this, "currentImage", void 0),
                      s(this, "eventNamespace", "simplelightbox"),
                      s(this, "domNodes", {}),
                      s(this, "loadedImages", []),
                      s(this, "initialImageIndex", 0),
                      s(this, "currentImageIndex", 0),
                      s(this, "initialSelector", null),
                      s(this, "globalScrollbarWidth", 0),
                      s(this, "controlCoordinates", {
                          swipeDiff: 0,
                          swipeYDiff: 0,
                          swipeStart: 0,
                          swipeEnd: 0,
                          swipeYStart: 0,
                          swipeYEnd: 0,
                          mousedown: !1,
                          imageLeft: 0,
                          zoomed: !1,
                          containerHeight: 0,
                          containerWidth: 0,
                          containerOffsetX: 0,
                          containerOffsetY: 0,
                          imgHeight: 0,
                          imgWidth: 0,
                          capture: !1,
                          initialOffsetX: 0,
                          initialOffsetY: 0,
                          initialPointerOffsetX: 0,
                          initialPointerOffsetY: 0,
                          initialPointerOffsetX2: 0,
                          initialPointerOffsetY2: 0,
                          initialScale: 1,
                          initialPinchDistance: 0,
                          pointerOffsetX: 0,
                          pointerOffsetY: 0,
                          pointerOffsetX2: 0,
                          pointerOffsetY2: 0,
                          targetOffsetX: 0,
                          targetOffsetY: 0,
                          targetScale: 0,
                          pinchOffsetX: 0,
                          pinchOffsetY: 0,
                          limitOffsetX: 0,
                          limitOffsetY: 0,
                          scaleDifference: 0,
                          targetPinchDistance: 0,
                          touchCount: 0,
                          doubleTapped: !1,
                          touchmoveCount: 0
                      }),
                      this.options = Object.assign(this.defaultOptions, e),
                      "string" == typeof t ? (this.initialSelector = t,
                      this.elements = Array.from(document.querySelectorAll(t))) : this.elements = void 0 !== t.length && 0 < t.length ? Array.from(t) : [t],
                      this.relatedElements = [],
                      this.transitionPrefix = this.calculateTransitionPrefix(),
                      this.transitionCapable = !1 !== this.transitionPrefix,
                      this.initialLocationHash = this.hash,
                      this.options.rel && (this.elements = this.getRelated(this.options.rel)),
                      this.options.uniqueImages) {
                          var i = [];
                          this.elements = Array.from(this.elements).filter(function(t) {
                              var e = t.getAttribute(o.options.sourceAttr);
                              return -1 === i.indexOf(e) && (i.push(e),
                              !0)
                          })
                      }
                      this.createDomNodes(),
                      this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
                      this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation),
                      this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner),
                      this.addEventListener(this.elements, "click." + this.eventNamespace, function(t) {
                          if (o.isValidLink(t.currentTarget)) {
                              if (t.preventDefault(),
                              o.isAnimating)
                                  return !1;
                              o.initialImageIndex = o.elements.indexOf(t.currentTarget),
                              o.openImage(t.currentTarget)
                          }
                      }),
                      this.options.docClose && this.addEventListener(this.domNodes.wrapper, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], function(t) {
                          o.isOpen && t.target === t.currentTarget && o.close()
                      }),
                      this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(t) {
                          t.target.classList.contains("sl-overlay") && t.preventDefault()
                      }),
                      this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(t) {
                          if (o.controlCoordinates.swipeDiff = 0,
                          o.isAnimating && "Escape" === t.key)
                              return o.currentImage.setAttribute("src", ""),
                              o.isAnimating = !1,
                              o.close();
                          o.isOpen && (t.preventDefault(),
                          "Escape" === t.key && o.close(),
                          !o.isAnimating && -1 < ["ArrowLeft", "ArrowRight"].indexOf(t.key) && o.loadImage("ArrowRight" === t.key ? 1 : -1))
                      }, this.options.throttleInterval)),
                      this.addEvents()
                  }
                  var t, e, o;
                  return t = n,
                  (e = [{
                      key: "createDomNodes",
                      value: function() {
                          this.domNodes.overlay = document.createElement("div"),
                          this.domNodes.overlay.classList.add("sl-overlay"),
                          this.domNodes.overlay.dataset.opacityTarget = ".7",
                          this.domNodes.closeButton = document.createElement("button"),
                          this.domNodes.closeButton.classList.add("sl-close"),
                          this.domNodes.closeButton.innerHTML = this.options.closeText,
                          this.domNodes.spinner = document.createElement("div"),
                          this.domNodes.spinner.classList.add("sl-spinner"),
                          this.domNodes.spinner.innerHTML = "<div></div>",
                          this.domNodes.navigation = document.createElement("div"),
                          this.domNodes.navigation.classList.add("sl-navigation"),
                          this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>"),
                          this.domNodes.counter = document.createElement("div"),
                          this.domNodes.counter.classList.add("sl-counter"),
                          this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>',
                          this.domNodes.caption = document.createElement("div"),
                          this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition),
                          this.options.captionClass && this.domNodes.caption.classList.add(this.options.captionClass),
                          this.domNodes.image = document.createElement("div"),
                          this.domNodes.image.classList.add("sl-image"),
                          this.domNodes.wrapper = document.createElement("div"),
                          this.domNodes.wrapper.classList.add("sl-wrapper"),
                          this.domNodes.wrapper.setAttribute("tabindex", -1),
                          this.domNodes.wrapper.setAttribute("role", "dialog"),
                          this.domNodes.wrapper.setAttribute("aria-hidden", !1),
                          this.options.className && this.domNodes.wrapper.classList.add(this.options.className),
                          this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl")
                      }
                  }, {
                      key: "throttle",
                      value: function(t, e) {
                          var o;
                          return function() {
                              o || (t.apply(this, arguments),
                              o = !0,
                              setTimeout(function() {
                                  return o = !1
                              }, e))
                          }
                      }
                  }, {
                      key: "isValidLink",
                      value: function(t) {
                          return !this.options.fileExt || "pathname"in t && new RegExp("(" + this.options.fileExt + ")$","i").test(t.pathname)
                      }
                  }, {
                      key: "calculateTransitionPrefix",
                      value: function() {
                          var t = (document.body || document.documentElement).style;
                          return "transition"in t ? "" : "WebkitTransition"in t ? "-webkit-" : "MozTransition"in t ? "-moz-" : "OTransition"in t && "-o"
                      }
                  }, {
                      key: "toggleScrollbar",
                      value: function(t) {
                          var i = 0
                            , e = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                          if ("hide" === t) {
                              var o = window.innerWidth;
                              if (!o) {
                                  var n = document.documentElement.getBoundingClientRect();
                                  o = n.right - Math.abs(n.left)
                              }
                              if (document.body.clientWidth < o) {
                                  var s = document.createElement("div")
                                    , a = parseInt(document.body.style.paddingRight || 0, 10);
                                  s.classList.add("sl-scrollbar-measure"),
                                  document.body.appendChild(s),
                                  i = s.offsetWidth - s.clientWidth,
                                  document.body.removeChild(s),
                                  document.body.dataset.originalPaddingRight = a,
                                  0 < i && (document.body.classList.add("hidden-scroll"),
                                  document.body.style.paddingRight = a + i + "px",
                                  e.forEach(function(t) {
                                      var e = t.style.paddingRight
                                        , o = window.getComputedStyle(t)["padding-right"];
                                      t.dataset.originalPaddingRight = e,
                                      t.style.paddingRight = "".concat(parseFloat(o) + i, "px")
                                  }))
                              }
                          } else
                              document.body.classList.remove("hidden-scroll"),
                              document.body.style.paddingRight = document.body.dataset.originalPaddingRight,
                              e.forEach(function(t) {
                                  var e = t.dataset.originalPaddingRight;
                                  void 0 !== e && (t.style.paddingRight = e)
                              });
                          return i
                      }
                  }, {
                      key: "close",
                      value: function() {
                          var t = this;
                          if (!this.isOpen || this.isAnimating || this.isClosing)
                              return !1;
                          this.isClosing = !0;
                          var e = this.relatedElements[this.currentImageIndex];
                          for (var o in e.dispatchEvent(new Event("close.simplelightbox")),
                          this.options.history && (this.historyHasChanges = !1,
                          this.hashReseted || this.resetHash()),
                          this.removeEventListener(document, "focusin." + this.eventNamespace),
                          this.fadeOut(document.querySelectorAll(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                              t.options.disableScroll && t.toggleScrollbar("show"),
                              t.options.htmlClass && "" !== t.options.htmlClass && document.querySelector("html").classList.remove(t.options.htmlClass),
                              document.body.removeChild(t.domNodes.wrapper),
                              document.body.removeChild(t.domNodes.overlay),
                              t.domNodes.additionalHtml = null,
                              e.dispatchEvent(new Event("closed.simplelightbox")),
                              t.isClosing = !1
                          }),
                          this.currentImage = null,
                          this.isOpen = !1,
                          this.isAnimating = !1,
                          this.controlCoordinates)
                              this.controlCoordinates[o] = 0;
                          this.controlCoordinates.mousedown = !1,
                          this.controlCoordinates.zoomed = !1,
                          this.controlCoordinates.capture = !1,
                          this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom),
                          this.controlCoordinates.doubleTapped = !1
                      }
                  }, {
                      key: "preload",
                      value: function() {
                          var o = this
                            , i = this.currentImageIndex
                            , t = this.relatedElements.length
                            , e = i + 1 < 0 ? t - 1 : t - 1 <= i + 1 ? 0 : i + 1
                            , n = i - 1 < 0 ? t - 1 : t - 1 <= i - 1 ? 0 : i - 1
                            , s = new Image
                            , a = new Image;
                          s.addEventListener("load", function(t) {
                              var e = t.target.getAttribute("src");
                              -1 === o.loadedImages.indexOf(e) && o.loadedImages.push(e),
                              o.relatedElements[i].dispatchEvent(new Event("nextImageLoaded." + o.eventNamespace))
                          }),
                          s.setAttribute("src", this.relatedElements[e].getAttribute(this.options.sourceAttr)),
                          a.addEventListener("load", function(t) {
                              var e = t.target.getAttribute("src");
                              -1 === o.loadedImages.indexOf(e) && o.loadedImages.push(e),
                              o.relatedElements[i].dispatchEvent(new Event("prevImageLoaded." + o.eventNamespace))
                          }),
                          a.setAttribute("src", this.relatedElements[n].getAttribute(this.options.sourceAttr))
                      }
                  }, {
                      key: "loadImage",
                      value: function(t) {
                          var e = this
                            , o = t;
                          this.options.rtl && (t = -t),
                          this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)),
                          this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1 === t ? "next" : "prev") + "." + this.eventNamespace));
                          var i = this.currentImageIndex + t;
                          if (this.isAnimating || (i < 0 || i >= this.relatedElements.length) && !1 === this.options.loop)
                              return !1;
                          this.currentImageIndex = i < 0 ? this.relatedElements.length - 1 : i > this.relatedElements.length - 1 ? 0 : i,
                          this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1,
                          this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * o - this.controlCoordinates.swipeDiff + "px"),
                          this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                              e.isAnimating = !0,
                              e.isClosing ? e.isAnimating = !1 : setTimeout(function() {
                                  var t = e.relatedElements[e.currentImageIndex];
                                  e.currentImage.setAttribute("src", t.getAttribute(e.options.sourceAttr)),
                                  -1 === e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr)) && e.show(e.domNodes.spinner),
                                  e.domNodes.image.contains(e.domNodes.caption) && e.domNodes.image.removeChild(e.domNodes.caption),
                                  e.adjustImage(o),
                                  e.options.preloading && e.preload()
                              }, 100)
                          })
                      }
                  }, {
                      key: "adjustImage",
                      value: function(a) {
                          var r = this;
                          if (!this.currentImage)
                              return !1;
                          var t = new Image
                            , l = window.innerWidth * this.options.widthRatio
                            , d = window.innerHeight * this.options.heightRatio;
                          t.setAttribute("src", this.currentImage.getAttribute("src")),
                          this.currentImage.dataset.scale = 1,
                          this.currentImage.dataset.translateX = 0,
                          this.currentImage.dataset.translateY = 0,
                          this.zoomPanElement(0, 0, 1),
                          t.addEventListener("error", function(t) {
                              r.relatedElements[r.currentImageIndex].dispatchEvent(new Event("error." + r.eventNamespace)),
                              r.isAnimating = !1,
                              r.isOpen = !1,
                              r.domNodes.spinner.style.display = "none";
                              var e = 1 === a || -1 === a;
                              if (r.initialImageIndex === r.currentImageIndex && e)
                                  return r.close();
                              r.options.alertError && alert(r.options.alertErrorMessage),
                              r.loadImage(e ? a : 1)
                          }),
                          t.addEventListener("load", function(t) {
                              void 0 !== a && (r.relatedElements[r.currentImageIndex].dispatchEvent(new Event("changed." + r.eventNamespace)),
                              r.relatedElements[r.currentImageIndex].dispatchEvent(new Event((1 === a ? "nextDone" : "prevDone") + "." + r.eventNamespace))),
                              r.options.history && r.updateURL(),
                              -1 === r.loadedImages.indexOf(r.currentImage.getAttribute("src")) && r.loadedImages.push(r.currentImage.getAttribute("src"));
                              var e, o, i = t.target.width, n = t.target.height;
                              if (r.options.scaleImageToRatio || l < i || d < n) {
                                  var s = l / d < i / n ? i / l : n / d;
                                  i /= s,
                                  n /= s
                              }
                              r.domNodes.image.style.top = (window.innerHeight - n) / 2 + "px",
                              r.domNodes.image.style.left = (window.innerWidth - i - r.globalScrollbarWidth) / 2 + "px",
                              r.domNodes.image.style.width = i + "px",
                              r.domNodes.image.style.height = n + "px",
                              r.domNodes.spinner.style.display = "none",
                              r.options.focus && r.forceFocus(),
                              r.fadeIn(r.currentImage, r.options.fadeSpeed, function() {
                                  r.options.focus && r.domNodes.wrapper.focus()
                              }),
                              r.isOpen = !0,
                              "string" == typeof r.options.captionSelector ? e = "self" === r.options.captionSelector ? r.relatedElements[r.currentImageIndex] : r.relatedElements[r.currentImageIndex].querySelector(r.options.captionSelector) : "function" == typeof r.options.captionSelector && (e = r.options.captionSelector(r.relatedElements[r.currentImageIndex])),
                              r.options.captions && e && (o = "data" === r.options.captionType ? e.dataset[r.options.captionsData] : "text" === r.options.captionType ? e.innerHTML : e.getAttribute(r.options.captionsData)),
                              r.options.loop || (0 === r.currentImageIndex && r.hide(r.domNodes.navigation.querySelector(".sl-prev")),
                              r.currentImageIndex >= r.relatedElements.length - 1 && r.hide(r.domNodes.navigation.querySelector(".sl-next")),
                              0 < r.currentImageIndex && r.show(r.domNodes.navigation.querySelector(".sl-prev")),
                              r.currentImageIndex < r.relatedElements.length - 1 && r.show(r.domNodes.navigation.querySelector(".sl-next"))),
                              1 === r.relatedElements.length ? r.hide(r.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : r.show(r.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")),
                              1 === a || -1 === a ? (r.options.animationSlide && (r.slide(0, 100 * a + "px"),
                              setTimeout(function() {
                                  r.slide(r.options.animationSpeed / 1e3, "0px")
                              }, 50)),
                              r.fadeIn(r.domNodes.image, r.options.fadeSpeed, function() {
                                  r.isAnimating = !1,
                                  r.setCaption(o, i)
                              })) : (r.isAnimating = !1,
                              r.setCaption(o, i)),
                              r.options.additionalHtml && !r.domNodes.additionalHtml && (r.domNodes.additionalHtml = document.createElement("div"),
                              r.domNodes.additionalHtml.classList.add("sl-additional-html"),
                              r.domNodes.additionalHtml.innerHTML = r.options.additionalHtml,
                              r.domNodes.image.appendChild(r.domNodes.additionalHtml))
                          })
                      }
                  }, {
                      key: "zoomPanElement",
                      value: function(t, e, o) {
                          this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + t + "," + e + ") scale(" + o + ")"
                      }
                  }, {
                      key: "minMax",
                      value: function(t, e, o) {
                          return t < e ? e : o < t ? o : t
                      }
                  }, {
                      key: "setZoomData",
                      value: function(t, e, o) {
                          this.currentImage.dataset.scale = t,
                          this.currentImage.dataset.translateX = e,
                          this.currentImage.dataset.translateY = o
                      }
                  }, {
                      key: "hashchangeHandler",
                      value: function() {
                          this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = !0,
                          this.close())
                      }
                  }, {
                      key: "addEvents",
                      value: function() {
                          var o = this;
                          this.addEventListener(window, "resize." + this.eventNamespace, function(t) {
                              o.isOpen && o.adjustImage()
                          }),
                          this.addEventListener(this.domNodes.closeButton, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], this.close.bind(this)),
                          this.options.history && setTimeout(function() {
                              o.addEventListener(window, "hashchange." + o.eventNamespace, function(t) {
                                  o.isOpen && o.hashchangeHandler()
                              })
                          }, 40),
                          this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(t) {
                              if (!t.currentTarget.tagName.match(/button/i))
                                  return !0;
                              t.preventDefault(),
                              o.controlCoordinates.swipeDiff = 0,
                              o.loadImage(t.currentTarget.classList.contains("sl-next") ? 1 : -1)
                          }),
                          this.addEventListener(this.domNodes.image, ["touchstart." + this.eventNamespace, "mousedown." + this.eventNamespace], function(t) {
                              if ("A" === t.target.tagName && "touchstart" === t.type)
                                  return !0;
                              if ("mousedown" === t.type)
                                  o.controlCoordinates.initialPointerOffsetX = t.clientX,
                                  o.controlCoordinates.initialPointerOffsetY = t.clientY,
                                  o.controlCoordinates.containerHeight = o.getDimensions(o.domNodes.image).height,
                                  o.controlCoordinates.containerWidth = o.getDimensions(o.domNodes.image).width,
                                  o.controlCoordinates.imgHeight = o.getDimensions(o.currentImage).height,
                                  o.controlCoordinates.imgWidth = o.getDimensions(o.currentImage).width,
                                  o.controlCoordinates.containerOffsetX = o.domNodes.image.offsetLeft,
                                  o.controlCoordinates.containerOffsetY = o.domNodes.image.offsetTop,
                                  o.controlCoordinates.initialOffsetX = parseFloat(o.currentImage.dataset.translateX),
                                  o.controlCoordinates.initialOffsetY = parseFloat(o.currentImage.dataset.translateY),
                                  o.controlCoordinates.capture = !0;
                              else {
                                  if (o.controlCoordinates.touchCount = t.touches.length,
                                  o.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX,
                                  o.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY,
                                  o.controlCoordinates.containerHeight = o.getDimensions(o.domNodes.image).height,
                                  o.controlCoordinates.containerWidth = o.getDimensions(o.domNodes.image).width,
                                  o.controlCoordinates.imgHeight = o.getDimensions(o.currentImage).height,
                                  o.controlCoordinates.imgWidth = o.getDimensions(o.currentImage).width,
                                  o.controlCoordinates.containerOffsetX = o.domNodes.image.offsetLeft,
                                  o.controlCoordinates.containerOffsetY = o.domNodes.image.offsetTop,
                                  1 === o.controlCoordinates.touchCount) {
                                      if (o.controlCoordinates.doubleTapped)
                                          return o.currentImage.classList.add("sl-transition"),
                                          o.controlCoordinates.zoomed ? (o.controlCoordinates.initialScale = 1,
                                          o.setZoomData(o.controlCoordinates.initialScale, 0, 0),
                                          o.zoomPanElement("0px", "0px", o.controlCoordinates.initialScale),
                                          o.controlCoordinates.zoomed = !1) : (o.controlCoordinates.initialScale = o.options.doubleTapZoom,
                                          o.setZoomData(o.controlCoordinates.initialScale, 0, 0),
                                          o.zoomPanElement("0px", "0px", o.controlCoordinates.initialScale),
                                          o.domNodes.caption.style.opacity || "none" === o.domNodes.caption.style.display || o.fadeOut(o.domNodes.caption, o.options.fadeSpeed),
                                          o.controlCoordinates.zoomed = !0),
                                          setTimeout(function() {
                                              o.currentImage && o.currentImage.classList.remove("sl-transition")
                                          }, 200),
                                          !1;
                                      o.controlCoordinates.doubleTapped = !0,
                                      setTimeout(function() {
                                          o.controlCoordinates.doubleTapped = !1
                                      }, 300),
                                      o.controlCoordinates.initialOffsetX = parseFloat(o.currentImage.dataset.translateX),
                                      o.controlCoordinates.initialOffsetY = parseFloat(o.currentImage.dataset.translateY)
                                  } else
                                      2 === o.controlCoordinates.touchCount && (o.controlCoordinates.initialPointerOffsetX2 = t.touches[1].clientX,
                                      o.controlCoordinates.initialPointerOffsetY2 = t.touches[1].clientY,
                                      o.controlCoordinates.initialOffsetX = parseFloat(o.currentImage.dataset.translateX),
                                      o.controlCoordinates.initialOffsetY = parseFloat(o.currentImage.dataset.translateY),
                                      o.controlCoordinates.pinchOffsetX = (o.controlCoordinates.initialPointerOffsetX + o.controlCoordinates.initialPointerOffsetX2) / 2,
                                      o.controlCoordinates.pinchOffsetY = (o.controlCoordinates.initialPointerOffsetY + o.controlCoordinates.initialPointerOffsetY2) / 2,
                                      o.controlCoordinates.initialPinchDistance = Math.sqrt((o.controlCoordinates.initialPointerOffsetX - o.controlCoordinates.initialPointerOffsetX2) * (o.controlCoordinates.initialPointerOffsetX - o.controlCoordinates.initialPointerOffsetX2) + (o.controlCoordinates.initialPointerOffsetY - o.controlCoordinates.initialPointerOffsetY2) * (o.controlCoordinates.initialPointerOffsetY - o.controlCoordinates.initialPointerOffsetY2)));
                                  o.controlCoordinates.capture = !0
                              }
                              return !!o.controlCoordinates.mousedown || (o.transitionCapable && (o.controlCoordinates.imageLeft = parseInt(o.domNodes.image.style.left, 10)),
                              o.controlCoordinates.mousedown = !0,
                              o.controlCoordinates.swipeDiff = 0,
                              o.controlCoordinates.swipeYDiff = 0,
                              o.controlCoordinates.swipeStart = t.pageX || t.touches[0].pageX,
                              o.controlCoordinates.swipeYStart = t.pageY || t.touches[0].pageY,
                              !1)
                          }),
                          this.addEventListener(this.domNodes.image, ["touchmove." + this.eventNamespace, "mousemove." + this.eventNamespace, "MSPointerMove"], function(t) {
                              if (!o.controlCoordinates.mousedown)
                                  return !0;
                              if (t.preventDefault(),
                              "touchmove" === t.type) {
                                  if (!1 === o.controlCoordinates.capture)
                                      return !1;
                                  o.controlCoordinates.pointerOffsetX = t.touches[0].clientX,
                                  o.controlCoordinates.pointerOffsetY = t.touches[0].clientY,
                                  o.controlCoordinates.touchCount = t.touches.length,
                                  o.controlCoordinates.touchmoveCount++,
                                  1 < o.controlCoordinates.touchCount ? (o.controlCoordinates.pointerOffsetX2 = t.touches[1].clientX,
                                  o.controlCoordinates.pointerOffsetY2 = t.touches[1].clientY,
                                  o.controlCoordinates.targetPinchDistance = Math.sqrt((o.controlCoordinates.pointerOffsetX - o.controlCoordinates.pointerOffsetX2) * (o.controlCoordinates.pointerOffsetX - o.controlCoordinates.pointerOffsetX2) + (o.controlCoordinates.pointerOffsetY - o.controlCoordinates.pointerOffsetY2) * (o.controlCoordinates.pointerOffsetY - o.controlCoordinates.pointerOffsetY2)),
                                  null === o.controlCoordinates.initialPinchDistance && (o.controlCoordinates.initialPinchDistance = o.controlCoordinates.targetPinchDistance),
                                  1 <= Math.abs(o.controlCoordinates.initialPinchDistance - o.controlCoordinates.targetPinchDistance) && (o.controlCoordinates.targetScale = o.minMax(o.controlCoordinates.targetPinchDistance / o.controlCoordinates.initialPinchDistance * o.controlCoordinates.initialScale, 1, o.options.maxZoom),
                                  o.controlCoordinates.limitOffsetX = (o.controlCoordinates.imgWidth * o.controlCoordinates.targetScale - o.controlCoordinates.containerWidth) / 2,
                                  o.controlCoordinates.limitOffsetY = (o.controlCoordinates.imgHeight * o.controlCoordinates.targetScale - o.controlCoordinates.containerHeight) / 2,
                                  o.controlCoordinates.scaleDifference = o.controlCoordinates.targetScale - o.controlCoordinates.initialScale,
                                  o.controlCoordinates.targetOffsetX = o.controlCoordinates.imgWidth * o.controlCoordinates.targetScale <= o.controlCoordinates.containerWidth ? 0 : o.minMax(o.controlCoordinates.initialOffsetX - (o.controlCoordinates.pinchOffsetX - o.controlCoordinates.containerOffsetX - o.controlCoordinates.containerWidth / 2 - o.controlCoordinates.initialOffsetX) / (o.controlCoordinates.targetScale - o.controlCoordinates.scaleDifference) * o.controlCoordinates.scaleDifference, -1 * o.controlCoordinates.limitOffsetX, o.controlCoordinates.limitOffsetX),
                                  o.controlCoordinates.targetOffsetY = o.controlCoordinates.imgHeight * o.controlCoordinates.targetScale <= o.controlCoordinates.containerHeight ? 0 : o.minMax(o.controlCoordinates.initialOffsetY - (o.controlCoordinates.pinchOffsetY - o.controlCoordinates.containerOffsetY - o.controlCoordinates.containerHeight / 2 - o.controlCoordinates.initialOffsetY) / (o.controlCoordinates.targetScale - o.controlCoordinates.scaleDifference) * o.controlCoordinates.scaleDifference, -1 * o.controlCoordinates.limitOffsetY, o.controlCoordinates.limitOffsetY),
                                  o.zoomPanElement(o.controlCoordinates.targetOffsetX + "px", o.controlCoordinates.targetOffsetY + "px", o.controlCoordinates.targetScale),
                                  1 < o.controlCoordinates.targetScale && (o.controlCoordinates.zoomed = !0,
                                  o.domNodes.caption.style.opacity || "none" === o.domNodes.caption.style.display || o.fadeOut(o.domNodes.caption, o.options.fadeSpeed)),
                                  o.controlCoordinates.initialPinchDistance = o.controlCoordinates.targetPinchDistance,
                                  o.controlCoordinates.initialScale = o.controlCoordinates.targetScale,
                                  o.controlCoordinates.initialOffsetX = o.controlCoordinates.targetOffsetX,
                                  o.controlCoordinates.initialOffsetY = o.controlCoordinates.targetOffsetY)) : (o.controlCoordinates.targetScale = o.controlCoordinates.initialScale,
                                  o.controlCoordinates.limitOffsetX = (o.controlCoordinates.imgWidth * o.controlCoordinates.targetScale - o.controlCoordinates.containerWidth) / 2,
                                  o.controlCoordinates.limitOffsetY = (o.controlCoordinates.imgHeight * o.controlCoordinates.targetScale - o.controlCoordinates.containerHeight) / 2,
                                  o.controlCoordinates.targetOffsetX = o.controlCoordinates.imgWidth * o.controlCoordinates.targetScale <= o.controlCoordinates.containerWidth ? 0 : o.minMax(o.controlCoordinates.pointerOffsetX - (o.controlCoordinates.initialPointerOffsetX - o.controlCoordinates.initialOffsetX), -1 * o.controlCoordinates.limitOffsetX, o.controlCoordinates.limitOffsetX),
                                  o.controlCoordinates.targetOffsetY = o.controlCoordinates.imgHeight * o.controlCoordinates.targetScale <= o.controlCoordinates.containerHeight ? 0 : o.minMax(o.controlCoordinates.pointerOffsetY - (o.controlCoordinates.initialPointerOffsetY - o.controlCoordinates.initialOffsetY), -1 * o.controlCoordinates.limitOffsetY, o.controlCoordinates.limitOffsetY),
                                  Math.abs(o.controlCoordinates.targetOffsetX) === Math.abs(o.controlCoordinates.limitOffsetX) && (o.controlCoordinates.initialOffsetX = o.controlCoordinates.targetOffsetX,
                                  o.controlCoordinates.initialPointerOffsetX = o.controlCoordinates.pointerOffsetX),
                                  Math.abs(o.controlCoordinates.targetOffsetY) === Math.abs(o.controlCoordinates.limitOffsetY) && (o.controlCoordinates.initialOffsetY = o.controlCoordinates.targetOffsetY,
                                  o.controlCoordinates.initialPointerOffsetY = o.controlCoordinates.pointerOffsetY),
                                  o.setZoomData(o.controlCoordinates.initialScale, o.controlCoordinates.targetOffsetX, o.controlCoordinates.targetOffsetY),
                                  o.zoomPanElement(o.controlCoordinates.targetOffsetX + "px", o.controlCoordinates.targetOffsetY + "px", o.controlCoordinates.targetScale))
                              }
                              if ("mousemove" === t.type && o.controlCoordinates.mousedown) {
                                  if ("touchmove" == t.type)
                                      return !0;
                                  if (!1 === o.controlCoordinates.capture)
                                      return !1;
                                  o.controlCoordinates.pointerOffsetX = t.clientX,
                                  o.controlCoordinates.pointerOffsetY = t.clientY,
                                  o.controlCoordinates.targetScale = o.controlCoordinates.initialScale,
                                  o.controlCoordinates.limitOffsetX = (o.controlCoordinates.imgWidth * o.controlCoordinates.targetScale - o.controlCoordinates.containerWidth) / 2,
                                  o.controlCoordinates.limitOffsetY = (o.controlCoordinates.imgHeight * o.controlCoordinates.targetScale - o.controlCoordinates.containerHeight) / 2,
                                  o.controlCoordinates.targetOffsetX = o.controlCoordinates.imgWidth * o.controlCoordinates.targetScale <= o.controlCoordinates.containerWidth ? 0 : o.minMax(o.controlCoordinates.pointerOffsetX - (o.controlCoordinates.initialPointerOffsetX - o.controlCoordinates.initialOffsetX), -1 * o.controlCoordinates.limitOffsetX, o.controlCoordinates.limitOffsetX),
                                  o.controlCoordinates.targetOffsetY = o.controlCoordinates.imgHeight * o.controlCoordinates.targetScale <= o.controlCoordinates.containerHeight ? 0 : o.minMax(o.controlCoordinates.pointerOffsetY - (o.controlCoordinates.initialPointerOffsetY - o.controlCoordinates.initialOffsetY), -1 * o.controlCoordinates.limitOffsetY, o.controlCoordinates.limitOffsetY),
                                  Math.abs(o.controlCoordinates.targetOffsetX) === Math.abs(o.controlCoordinates.limitOffsetX) && (o.controlCoordinates.initialOffsetX = o.controlCoordinates.targetOffsetX,
                                  o.controlCoordinates.initialPointerOffsetX = o.controlCoordinates.pointerOffsetX),
                                  Math.abs(o.controlCoordinates.targetOffsetY) === Math.abs(o.controlCoordinates.limitOffsetY) && (o.controlCoordinates.initialOffsetY = o.controlCoordinates.targetOffsetY,
                                  o.controlCoordinates.initialPointerOffsetY = o.controlCoordinates.pointerOffsetY),
                                  o.setZoomData(o.controlCoordinates.initialScale, o.controlCoordinates.targetOffsetX, o.controlCoordinates.targetOffsetY),
                                  o.zoomPanElement(o.controlCoordinates.targetOffsetX + "px", o.controlCoordinates.targetOffsetY + "px", o.controlCoordinates.targetScale)
                              }
                              o.controlCoordinates.zoomed || (o.controlCoordinates.swipeEnd = t.pageX || t.touches[0].pageX,
                              o.controlCoordinates.swipeYEnd = t.pageY || t.touches[0].pageY,
                              o.controlCoordinates.swipeDiff = o.controlCoordinates.swipeStart - o.controlCoordinates.swipeEnd,
                              o.controlCoordinates.swipeYDiff = o.controlCoordinates.swipeYStart - o.controlCoordinates.swipeYEnd,
                              o.options.animationSlide && o.slide(0, -o.controlCoordinates.swipeDiff + "px"))
                          }),
                          this.addEventListener(this.domNodes.image, ["touchend." + this.eventNamespace, "mouseup." + this.eventNamespace, "touchcancel." + this.eventNamespace, "mouseleave." + this.eventNamespace, "pointerup", "pointercancel", "MSPointerUp", "MSPointerCancel"], function(t) {
                              if (o.isTouchDevice && "touchend" === t.type && (o.controlCoordinates.touchCount = t.touches.length,
                              0 === o.controlCoordinates.touchCount ? (o.currentImage && o.setZoomData(o.controlCoordinates.initialScale, o.controlCoordinates.targetOffsetX, o.controlCoordinates.targetOffsetY),
                              1 === o.controlCoordinates.initialScale && (o.controlCoordinates.zoomed = !1,
                              "none" === o.domNodes.caption.style.display && o.fadeIn(o.domNodes.caption, o.options.fadeSpeed)),
                              o.controlCoordinates.initialPinchDistance = null,
                              o.controlCoordinates.capture = !1) : 1 === o.controlCoordinates.touchCount ? (o.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX,
                              o.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY) : 1 < o.controlCoordinates.touchCount && (o.controlCoordinates.initialPinchDistance = null)),
                              o.controlCoordinates.mousedown) {
                                  var e = !(o.controlCoordinates.mousedown = !1);
                                  o.options.loop || (0 === o.currentImageIndex && o.controlCoordinates.swipeDiff < 0 && (e = !1),
                                  o.currentImageIndex >= o.relatedElements.length - 1 && 0 < o.controlCoordinates.swipeDiff && (e = !1)),
                                  Math.abs(o.controlCoordinates.swipeDiff) > o.options.swipeTolerance && e ? o.loadImage(0 < o.controlCoordinates.swipeDiff ? 1 : -1) : o.options.animationSlide && o.slide(o.options.animationSpeed / 1e3, "0px"),
                                  o.options.swipeClose && 50 < Math.abs(o.controlCoordinates.swipeYDiff) && Math.abs(o.controlCoordinates.swipeDiff) < o.options.swipeTolerance && o.close()
                              }
                          }),
                          this.addEventListener(this.domNodes.image, ["dblclick"], function(t) {
                              if (!o.isTouchDevice)
                                  return o.controlCoordinates.initialPointerOffsetX = t.clientX,
                                  o.controlCoordinates.initialPointerOffsetY = t.clientY,
                                  o.controlCoordinates.containerHeight = o.getDimensions(o.domNodes.image).height,
                                  o.controlCoordinates.containerWidth = o.getDimensions(o.domNodes.image).width,
                                  o.controlCoordinates.imgHeight = o.getDimensions(o.currentImage).height,
                                  o.controlCoordinates.imgWidth = o.getDimensions(o.currentImage).width,
                                  o.controlCoordinates.containerOffsetX = o.domNodes.image.offsetLeft,
                                  o.controlCoordinates.containerOffsetY = o.domNodes.image.offsetTop,
                                  o.currentImage.classList.add("sl-transition"),
                                  o.controlCoordinates.zoomed ? (o.controlCoordinates.initialScale = 1,
                                  o.setZoomData(o.controlCoordinates.initialScale, 0, 0),
                                  o.zoomPanElement("0px", "0px", o.controlCoordinates.initialScale),
                                  o.controlCoordinates.zoomed = !1,
                                  "none" === o.domNodes.caption.style.display && o.fadeIn(o.domNodes.caption, o.options.fadeSpeed)) : (o.controlCoordinates.initialScale = o.options.doubleTapZoom,
                                  o.setZoomData(o.controlCoordinates.initialScale, 0, 0),
                                  o.zoomPanElement("0px", "0px", o.controlCoordinates.initialScale),
                                  o.domNodes.caption.style.opacity || "none" === o.domNodes.caption.style.display || o.fadeOut(o.domNodes.caption, o.options.fadeSpeed),
                                  o.controlCoordinates.zoomed = !0),
                                  setTimeout(function() {
                                      o.currentImage && o.currentImage.classList.remove("sl-transition")
                                  }, 200),
                                  !(o.controlCoordinates.capture = !0)
                          })
                      }
                  }, {
                      key: "getDimensions",
                      value: function(t) {
                          var e = window.getComputedStyle(t)
                            , o = t.offsetHeight
                            , i = t.offsetWidth
                            , n = parseFloat(e.borderTopWidth);
                          return {
                              height: o - parseFloat(e.borderBottomWidth) - n - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom),
                              width: i - parseFloat(e.borderLeftWidth) - parseFloat(e.borderRightWidth) - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
                          }
                      }
                  }, {
                      key: "updateHash",
                      value: function() {
                          var t = "pid=" + (this.currentImageIndex + 1)
                            , e = window.location.href.split("#")[0] + "#" + t;
                          this.hashReseted = !1,
                          this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, e) : this.historyHasChanges ? window.location.replace(e) : window.location.hash = t,
                          this.historyHasChanges || (this.urlChangedOnce = !0),
                          this.historyHasChanges = !0
                      }
                  }, {
                      key: "resetHash",
                      value: function() {
                          this.hashReseted = !0,
                          this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "",
                          clearTimeout(this.historyUpdateTimeout)
                      }
                  }, {
                      key: "updateURL",
                      value: function() {
                          clearTimeout(this.historyUpdateTimeout),
                          this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash()
                      }
                  }, {
                      key: "setCaption",
                      value: function(t, e) {
                          var o = this;
                          this.options.captions && t && "" !== t && void 0 !== t && (this.hide(this.domNodes.caption),
                          this.domNodes.caption.style.width = e + "px",
                          this.domNodes.caption.innerHTML = t,
                          this.domNodes.image.appendChild(this.domNodes.caption),
                          setTimeout(function() {
                              o.fadeIn(o.domNodes.caption, o.options.fadeSpeed)
                          }, this.options.captionDelay))
                      }
                  }, {
                      key: "slide",
                      value: function(t, e) {
                          if (!this.transitionCapable)
                              return this.domNodes.image.style.left = e;
                          this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + e + ")",
                          this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + t + "s linear"
                      }
                  }, {
                      key: "getRelated",
                      value: function(e) {
                          return e && !1 !== e && "nofollow" !== e ? Array.from(this.elements).filter(function(t) {
                              return t.getAttribute("rel") === e
                          }) : this.elements
                      }
                  }, {
                      key: "openImage",
                      value: function(t) {
                          var e = this;
                          t.dispatchEvent(new Event("show." + this.eventNamespace)),
                          this.options.disableScroll && (this.globalScrollbarWidth = this.toggleScrollbar("hide")),
                          this.options.htmlClass && "" !== this.options.htmlClass && document.querySelector("html").classList.add(this.options.htmlClass),
                          document.body.appendChild(this.domNodes.wrapper),
                          this.domNodes.wrapper.appendChild(this.domNodes.image),
                          this.options.overlay && document.body.appendChild(this.domNodes.overlay),
                          this.relatedElements = this.getRelated(t.rel),
                          this.options.showCounter && (1 == this.relatedElements.length && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : 1 < this.relatedElements.length && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter)),
                          this.isAnimating = !0,
                          this.currentImageIndex = this.relatedElements.indexOf(t);
                          var o = t.getAttribute(this.options.sourceAttr);
                          this.currentImage = document.createElement("img"),
                          this.currentImage.style.display = "none",
                          this.currentImage.setAttribute("src", o),
                          this.currentImage.dataset.scale = 1,
                          this.currentImage.dataset.translateX = 0,
                          this.currentImage.dataset.translateY = 0,
                          -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o),
                          this.domNodes.image.innerHTML = "",
                          this.domNodes.image.setAttribute("style", ""),
                          this.domNodes.image.appendChild(this.currentImage),
                          this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
                          this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed),
                          this.show(this.domNodes.spinner),
                          this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1,
                          this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length,
                          this.adjustImage(),
                          this.options.preloading && this.preload(),
                          setTimeout(function() {
                              t.dispatchEvent(new Event("shown." + e.eventNamespace))
                          }, this.options.animationSpeed)
                      }
                  }, {
                      key: "forceFocus",
                      value: function() {
                          var e = this;
                          this.removeEventListener(document, "focusin." + this.eventNamespace),
                          this.addEventListener(document, "focusin." + this.eventNamespace, function(t) {
                              document === t.target || e.domNodes.wrapper === t.target || e.domNodes.wrapper.contains(t.target) || e.domNodes.wrapper.focus()
                          })
                      }
                  }, {
                      key: "addEventListener",
                      value: function(t, e, o, i) {
                          t = this.wrap(t),
                          e = this.wrap(e);
                          var n, s = h(t);
                          try {
                              for (s.s(); !(n = s.n()).done; ) {
                                  var a = n.value;
                                  a.namespaces || (a.namespaces = {});
                                  var r, l = h(e);
                                  try {
                                      for (l.s(); !(r = l.n()).done; ) {
                                          var d = r.value
                                            , c = i || !1;
                                          a.namespaces[d] = o,
                                          a.addEventListener(d.split(".")[0], o, c)
                                      }
                                  } catch (t) {
                                      l.e(t)
                                  } finally {
                                      l.f()
                                  }
                              }
                          } catch (t) {
                              s.e(t)
                          } finally {
                              s.f()
                          }
                      }
                  }, {
                      key: "removeEventListener",
                      value: function(t, e) {
                          t = this.wrap(t),
                          e = this.wrap(e);
                          var o, i = h(t);
                          try {
                              for (i.s(); !(o = i.n()).done; ) {
                                  var n, s = o.value, a = h(e);
                                  try {
                                      for (a.s(); !(n = a.n()).done; ) {
                                          var r = n.value;
                                          s.namespaces && s.namespaces[r] && (s.removeEventListener(r.split(".")[0], s.namespaces[r]),
                                          delete s.namespaces[r])
                                      }
                                  } catch (t) {
                                      a.e(t)
                                  } finally {
                                      a.f()
                                  }
                              }
                          } catch (t) {
                              i.e(t)
                          } finally {
                              i.f()
                          }
                      }
                  }, {
                      key: "fadeOut",
                      value: function(r, t, l) {
                          var e, d = this, o = h(r = this.wrap(r));
                          try {
                              for (o.s(); !(e = o.n()).done; ) {
                                  e.value.style.opacity = 1
                              }
                          } catch (t) {
                              o.e(t)
                          } finally {
                              o.f()
                          }
                          this.isFadeIn = !1;
                          var c = 16.66666 / (t || this.options.fadeSpeed);
                          !function t() {
                              var e = parseFloat(r[0].style.opacity);
                              if ((e -= c) < 0) {
                                  var o, i = h(r);
                                  try {
                                      for (i.s(); !(o = i.n()).done; ) {
                                          var n = o.value;
                                          n.style.display = "none",
                                          n.style.opacity = ""
                                      }
                                  } catch (t) {
                                      i.e(t)
                                  } finally {
                                      i.f()
                                  }
                                  l && l.call(d, r)
                              } else {
                                  var s, a = h(r);
                                  try {
                                      for (a.s(); !(s = a.n()).done; ) {
                                          s.value.style.opacity = e
                                      }
                                  } catch (t) {
                                      a.e(t)
                                  } finally {
                                      a.f()
                                  }
                                  requestAnimationFrame(t)
                              }
                          }()
                      }
                  }, {
                      key: "fadeIn",
                      value: function(a, t, r, e) {
                          var o, l = this, i = h(a = this.wrap(a));
                          try {
                              for (i.s(); !(o = i.n()).done; ) {
                                  var n = o.value;
                                  n.style.opacity = 0,
                                  n.style.display = e || "block"
                              }
                          } catch (t) {
                              i.e(t)
                          } finally {
                              i.f()
                          }
                          this.isFadeIn = !0;
                          var d = parseFloat(a[0].dataset.opacityTarget || 1)
                            , c = 16.66666 * d / (t || this.options.fadeSpeed);
                          !function t() {
                              var e = parseFloat(a[0].style.opacity);
                              if ((e += c) > d) {
                                  var o, i = h(a);
                                  try {
                                      for (i.s(); !(o = i.n()).done; ) {
                                          o.value.style.opacity = ""
                                      }
                                  } catch (t) {
                                      i.e(t)
                                  } finally {
                                      i.f()
                                  }
                                  r && r.call(l, a)
                              } else {
                                  var n, s = h(a);
                                  try {
                                      for (s.s(); !(n = s.n()).done; ) {
                                          n.value.style.opacity = e
                                      }
                                  } catch (t) {
                                      s.e(t)
                                  } finally {
                                      s.f()
                                  }
                                  if (!l.isFadeIn)
                                      return;
                                  requestAnimationFrame(t)
                              }
                          }()
                      }
                  }, {
                      key: "hide",
                      value: function(t) {
                          var e, o = h(t = this.wrap(t));
                          try {
                              for (o.s(); !(e = o.n()).done; ) {
                                  var i = e.value;
                                  i.dataset.initialDisplay = i.style.display,
                                  i.style.display = "none"
                              }
                          } catch (t) {
                              o.e(t)
                          } finally {
                              o.f()
                          }
                      }
                  }, {
                      key: "show",
                      value: function(t, e) {
                          var o, i = h(t = this.wrap(t));
                          try {
                              for (i.s(); !(o = i.n()).done; ) {
                                  var n = o.value;
                                  n.style.display = n.dataset.initialDisplay || e || "block"
                              }
                          } catch (t) {
                              i.e(t)
                          } finally {
                              i.f()
                          }
                      }
                  }, {
                      key: "wrap",
                      value: function(t) {
                          return "function" == typeof t[Symbol.iterator] && "string" != typeof t ? t : [t]
                      }
                  }, {
                      key: "on",
                      value: function(t, e) {
                          t = this.wrap(t);
                          var o, i = h(this.elements);
                          try {
                              for (i.s(); !(o = i.n()).done; ) {
                                  var n = o.value;
                                  n.fullyNamespacedEvents || (n.fullyNamespacedEvents = {});
                                  var s, a = h(t);
                                  try {
                                      for (a.s(); !(s = a.n()).done; ) {
                                          var r = s.value;
                                          n.fullyNamespacedEvents[r] = e,
                                          n.addEventListener(r, e)
                                      }
                                  } catch (t) {
                                      a.e(t)
                                  } finally {
                                      a.f()
                                  }
                              }
                          } catch (t) {
                              i.e(t)
                          } finally {
                              i.f()
                          }
                          return this
                      }
                  }, {
                      key: "off",
                      value: function(t) {
                          t = this.wrap(t);
                          var e, o = h(this.elements);
                          try {
                              for (o.s(); !(e = o.n()).done; ) {
                                  var i, n = e.value, s = h(t);
                                  try {
                                      for (s.s(); !(i = s.n()).done; ) {
                                          var a = i.value;
                                          void 0 !== n.fullyNamespacedEvents && a in n.fullyNamespacedEvents && n.removeEventListener(a, n.fullyNamespacedEvents[a])
                                      }
                                  } catch (t) {
                                      s.e(t)
                                  } finally {
                                      s.f()
                                  }
                              }
                          } catch (t) {
                              o.e(t)
                          } finally {
                              o.f()
                          }
                          return this
                      }
                  }, {
                      key: "open",
                      value: function(t) {
                          t = t || this.elements[0],
                          "undefined" != typeof jQuery && t instanceof jQuery && (t = t.get(0)),
                          this.initialImageIndex = this.elements.indexOf(t),
                          -1 < this.initialImageIndex && this.openImage(t)
                      }
                  }, {
                      key: "next",
                      value: function() {
                          this.loadImage(1)
                      }
                  }, {
                      key: "prev",
                      value: function() {
                          this.loadImage(-1)
                      }
                  }, {
                      key: "destroy",
                      value: function() {
                          this.off(["close." + this.eventNamespace, "closed." + this.eventNamespace, "nextImageLoaded." + this.eventNamespace, "prevImageLoaded." + this.eventNamespace, "change." + this.eventNamespace, "nextDone." + this.eventNamespace, "prevDone." + this.eventNamespace, "error." + this.eventNamespace, "changed." + this.eventNamespace, "next." + this.eventNamespace, "prev." + this.eventNamespace, "show." + this.eventNamespace, "shown." + this.eventNamespace]),
                          this.removeEventListener(this.elements, "click." + this.eventNamespace),
                          this.removeEventListener(document, "focusin." + this.eventNamespace),
                          this.removeEventListener(document.body, "contextmenu." + this.eventNamespace),
                          this.removeEventListener(document.body, "keyup." + this.eventNamespace),
                          this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace),
                          this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace),
                          this.removeEventListener(window, "resize." + this.eventNamespace),
                          this.removeEventListener(window, "hashchange." + this.eventNamespace),
                          this.close(),
                          this.isOpen && (document.body.removeChild(this.domNodes.wrapper),
                          document.body.removeChild(this.domNodes.overlay)),
                          this.elements = null
                      }
                  }, {
                      key: "refresh",
                      value: function() {
                          if (!this.initialSelector)
                              throw "refreshing only works when you initialize using a selector!";
                          var t = this.options
                            , e = this.initialSelector;
                          return this.destroy(),
                          this.constructor(e, t),
                          this
                      }
                  }, {
                      key: "hash",
                      get: function() {
                          return window.location.hash.substring(1)
                      }
                  }]) && i(t.prototype, e),
                  o && i(t, o),
                  n
              }()
                , e = t;
              n.default = e,
              o.SimpleLightbox = t
          }
          ).call(this)
      }
      ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }
  , {}]
}, {}, [1]);
