(function () {
	var __webpack_modules__ = {
			6557: function (e, t, r) {
				"use strict";
				r(2222), r(7327), r(9826), r(6699), r(2772), r(6992), r(9600), r(1249), r(5827), r(7042), r(9601), r(7941), r(1539), r(4916), r(9714), r(2023), r(8783), r(5306), r(4765), r(3123), r(3948), r(285);
				var o = r(7112);

				function n(e, t, r, o, n, i) {
					var a, s = (a = e.prototype[t], function () {
						return a.apply(i(this), arguments)
					});
					Object.defineProperty(o.prototype, n, {
						get: function () {
							return s
						},
						set: function (o) {
							e.prototype[t] = function () {
								var t = this instanceof e ? r(this) : this;
								return o.apply(t, arguments)
							}, s = o
						}
					})
				}
				var i = {
						fragmentChange: "fragmentChange",
						PostInit: "PostInit",
						stop: "stop",
						resize: "resize",
						navToggled: "navToggled",
						fullscreenToggled: "fullscreenToggled",
						zoomOut: "zoomOut",
						zoomIn: "zoomIn",
						"1PageViewSelected": "1PageViewSelected",
						"2PageViewSelected": "2PageViewSelected",
						"3PageViewSelected": "3PageViewSelected",
						mobileNavOpen: "mobileNavOpen"
					},
					a = r(3609);

				function s(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				var u = function () {
					function e(t) {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.br = t, this.$root = null, this.$nav = null, this.maxPageNum = null
					}
					var t, r;
					return t = e, (r = [{
						key: "controlFor",
						value: function (e) {
							var t = this.br.options.controls[e];
							return t.visible ? t.template ? "<li>".concat(t.template(this.br), "</li>") : '<li>\n      <button class="BRicon '.concat(t.className, '" title="').concat(t.label, '">\n        <div class="icon icon-').concat(t.className, '"></div>\n        <span class="tooltip">').concat(t.label, "</span>\n      </button>\n    </li>") : ""
						}
					}, {
						key: "_viewModeControls",
						value: function () {
							var e = this;
							return this.br.options.controls.viewmode.visible ? this.controlFor("viewmode") : ["onePage", "twoPage", "thumbnail"].map((function (t) {
								return e.controlFor(t)
							})).join("")
						}
					}, {
						key: "_bindViewModeButton",
						value: function () {
							var e = this,
								t = this.br,
								r = t.options.controls.viewmode,
								o = [{
									mode: t.constMode1up,
									className: "onepg",
									title: "One-page view"
								}, {
									mode: t.constMode2up,
									className: "twopg",
									title: "Two-page view"
								}, {
									mode: t.constModeThumb,
									className: "thumb",
									title: "Thumbnail view"
								}].filter((function (e) {
									return !r.excludedModes.includes(e.mode)
								})),
								n = o.map((function (e) {
									return e.mode
								}));
							r.excludedModes.includes(t.mode) && t.switchMode(n[0]);
							for (var s = n.indexOf(t.mode), u = 0; u <= s; u++) n.push(n.shift());
							o.length < 2 && this.$nav.find(".".concat(r.className)).remove(), this.br.bind(i.PostInit, (function () {
								var i = e.$nav.find(".".concat(r.className)).off(".bindNavigationHandlers").on("click", (function (r) {
										var i = n.shift(),
											s = o.find((function (e) {
												return e.mode === i
											})),
											u = o.find((function (e) {
												return e.mode === n[0]
											}));
										n.push(i), e._updateViewModeButton(a(r.currentTarget), u.className, u.title), t.switchMode(s.mode)
									})),
									s = o.find((function (e) {
										return e.mode === n[0]
									}));
								e._updateViewModeButton(i, s.className, s.title)
							}))
						}
					}, {
						key: "_updateViewModeButton",
						value: function (e, t, r) {
							e.attr("title", r).find(".icon").removeClass().addClass("icon icon-".concat(t)).end().find(".tooltip").text(r)
						}
					}, {
						key: "init",
						value: function () {
							var e = this,
								t = this.br,
								r = t.options.navbarTitle,
								o = "rl" === t.pageProgression;
							t.refs.$BRfooter = this.$root = a('<div class="BRfooter"></div>'), t.refs.$BRnav = this.$nav = a('<div class="BRnav BRnavDesktop">\n          <div class="BRnavCntl BRnavCntlBtm BRdn js-tooltip" title="Toggle toolbars"></div>\n          '.concat(r ? '<div class="BRnavTitle">'.concat(r, "</div>") : "", '\n          <nav class="BRcontrols">\n            <ul class="controls">\n              <li class="scrubber">\n                <div class="BRnavpos">\n                  <div class="BRpager"></div>\n                  <div class="BRnavline"></div>\n                </div>\n                <p><span class=\'BRcurrentpage\'></span></p>\n              </li>\n              <li>\n                <button class="BRicon book_left hide-mobile ').concat(o ? "book_flip_next" : "book_flip_prev", '" title="Flip left">\n                  <div class="icon icon-left-arrow"></div>\n                  <span class="tooltip">Flip left</span>\n                </button>\n              </li>\n              <li>\n                <button class="BRicon book_right hide-mobile ').concat(o ? "book_flip_prev" : "book_flip_next", '" title="Flip right">\n                  <div class="icon icon-left-arrow hflip"></div>\n                  <span class="tooltip">Flip right</span>\n                </button>\n              </li>\n              ').concat(this._viewModeControls(), '\n              <li>\n                <button class="BRicon zoom_out hide-mobile" title="Zoom out">\n                  <div class="icon icon-magnify"></div>\n                  <span class="tooltip">Zoom out</span>\n                </button>\n              </li>\n              <li>\n                <button class="BRicon zoom_in hide-mobile" title="Zoom in">\n                  <div class="icon icon-magnify plus"></div>\n                  <span class="tooltip">Zoom in</span>\n                </button>\n              </li>\n              <li>\n                <button class="BRicon full" title="Toggle fullscreen">\n                  <div class="icon icon-fullscreen"></div>\n                  <span class="tooltip">Toggle fullscreen</span>\n                </button>\n              </li>\n            </ul>\n          </nav>\n        </div>')), this.$root.append(this.$nav), t.refs.$br.append(this.$root);
							var n = this.$root.find(".BRpager").slider({
								animate: !0,
								min: 0,
								max: t.getNumLeafs() - 1,
								value: t.currentIndex(),
								range: "min"
							});
							return n.on("slide", (function (t, r) {
								return e.updateNavPageNum(r.value), !0
							})), n.on("slidechange", (function (r, o) {
								return e.updateNavPageNum(o.value), n.data("swallowchange") ? n.data("swallowchange", !1) : t.jumpToIndex(o.value), !0
							})), t.options.controls.viewmode.visible && this._bindViewModeButton(), this.updateNavPageNum(t.currentIndex()), this.$nav
						}
					}, {
						key: "initEmbed",
						value: function () {
							var e = this.br,
								t = (window.location + "").replace("?ui=embed", "").replace("/stream/", "/details/").replace("#", "/"),
								r = e.showLogo ? '<a class="logo" href="'.concat(e.logoURL, '" target="_blank"></a>') : "";
							e.refs.$BRfooter = this.$root = a('<div class="BRfooter"></div>'), e.refs.$BRnav = this.$nav = a('<div class="BRnav BRnavEmbed">\n          '.concat(r, '\n          <span class="BRembedreturn">\n             <a href="').concat(t, '" target="_blank">').concat(e.bookTitle, '</a>\n          </span>\n          <span class="BRtoolbarbuttons">\n            <button class="BRicon book_left"></button>\n            <button class="BRicon book_right"></button>\n            <button class="BRicon full"></button>\n          </span>\n      </div>')), this.$root.append(this.$nav), e.refs.$br.append(this.$root)
						}
					}, {
						key: "getNavPageNumString",
						value: function (e) {
							var t = this.br,
								r = t.getPageNum(e),
								o = (t.getPageProp(e, "pageType"), t.getNumLeafs());
							if (!this.maxPageNum) {
								for (var n, i = 0, a = 0; a < o; a++) n = t.getPageNum(a), !isNaN(n) && n > i && (i = n);
								this.maxPageNum = i
							}
							return c(e, o, r, 0, this.maxPageNum)
						}
					}, {
						key: "updateNavPageNum",
						value: function (e) {
							this.$root.find(".BRcurrentpage").html(this.getNavPageNumString(e))
						}
					}, {
						key: "updateNavIndex",
						value: function (e) {
							e = void 0 !== e ? e : this.br.currentIndex(), this.$root.find(".BRpager").data("swallowchange", !0).slider("value", e)
						}
					}]) && s(t.prototype, r), e
				}();

				function c(e, t, r, o, n) {
					if ("n" == r[0]) return "Page (".concat(e + 1, " of ").concat(t, ")");
					var i = n ? " of ".concat(n) : "";
					return "Page ".concat(r).concat(i)
				}
				var l = r(6100),
					h = (r(6977), r(3609));

				function p(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
					return o
				}

				function d(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				var f = function () {
					function e(t) {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.br = t
					}
					var t, r;
					return t = e, (r = [{
						key: "buildToolbarElement",
						value: function () {
							var e = this.br,
								t = e.showLogo ? '\n      <span class="BRtoolbarSection BRtoolbarSectionLogo">\n        <a class="logo" href="'.concat(e.logoURL, '"></a>\n      </span>') : "";
							e.refs.$BRtoolbar = h('\n      <div class="BRtoolbar header">\n        <div class="BRtoolbarbuttons">\n          <div class="BRtoolbarLeft">\n            '.concat(t, '\n            <span class="BRtoolbarSection BRtoolbarSectionTitle"></span>\n          </div>\n          <div class="BRtoolbarRight">\n            <span class="BRtoolbarSection BRtoolbarSectionInfo">\n              <button class="BRpill info js-tooltip">Info</button>\n              <button class="BRpill share js-tooltip">Share</button>\n            </span>\n          </div>\n        </div>\n      </div>'));
							var r = e.refs.$BRtoolbar.find(".BRtoolbarSectionTitle");
							return e.bookUrl && e.options.enableBookTitleLink ? r.append(h("<a>").attr({
								href: e.bookUrl,
								title: e.bookUrlTitle
							}).addClass("BRreturn").html(e.bookUrlText || e.bookTitle)) : e.bookTitle && r.append(e.bookUrlText || e.bookTitle), e.refs.$BRtoolbar
						}
					}, {
						key: "initToolbar",
						value: function (e, t) {
							var r = this.br;
							r.refs.$br.append(this.buildToolbarElement()), r.$(".BRnavCntl").addClass("BRup"), r.$(".pause").hide(), this.updateToolbarZoom(r.reduce), r.refs.$BRtoolbar.append(), r.canSwitchToMode(r.constMode2up) || r.$(".two_page_mode, .play, .pause").hide(), r.canSwitchToMode(r.constModeThumb) || r.$(".thumbnail_mode").hide(), r.canSwitchToMode(r.constMode2up) || r.canSwitchToMode(r.constModeThumb) || r.$(".one_page_mode").hide(), h('<div style="display: none;"></div>').append(b()).append(g()).appendTo(r.refs.$br), r.$(".BRinfo .BRfloatTitle a").attr({
								href: r.bookUrl
							}).text(r.bookTitle).addClass("title"), this.buildInfoDiv(r.$(".BRinfo")), this.buildShareDiv(r.$(".BRshare")), r.$(".share").colorbox({
								inline: !0,
								opacity: "0.5",
								href: r.$(".BRshare"),
								onLoad: function () {
									r.trigger(i.stop), r.$(".BRpageviewValue").val(window.location.href)
								}
							}), r.$(".info").colorbox({
								inline: !0,
								opacity: "0.5",
								href: r.$(".BRinfo"),
								onLoad: function () {
									r.trigger(i.stop)
								}
							})
						}
					}, {
						key: "updateToolbarZoom",
						value: function (e) {
							var t, r = this.br,
								o = r.mode == r.constMode2up ? r.twoPage.autofit : r.onePage.autofit;
							t = o ? o.slice(0, 1).toUpperCase() + o.slice(1) : (100 / e).toFixed(2).replace(/0+$/, "").replace(/\.$/, "") + "%", r.$(".BRzoom").text(t)
						}
					}, {
						key: "buildShareDiv",
						value: function (e) {
							var t = this,
								r = this.br,
								o = document.location + "",
								n = (o + "").replace(/#.*/, ""),
								i = r.getEmbedCode ? '\n      <div class="share-embed">\n        <p class="share-embed-prompt">Copy and paste one of these options to share this book elsewhere.</p>\n        <form method="post" action="">\n          <fieldset class="fieldset-share-pageview">\n            <label for="pageview">Link to this page view</label>\n            <input type="text" name="pageview" class="BRpageviewValue" value="'.concat(o, '"/>\n          </fieldset>\n          <fieldset class="fieldset-share-book-link">\n            <label for="booklink">Link to the book</label>\n            <input type="text" name="booklink" class="booklink" value="').concat(n, '"/>\n          </fieldset>\n          <fieldset class="fieldset-embed">\n            <label for="iframe">Embed a mini Book Reader</label>\n            <fieldset class="sub">\n              <label class="sub">\n                <input type="radio" name="pages" value="').concat(r.constMode1up, '" checked="checked"/>\n                1 page\n              </label>\n              <label class="sub">\n                <input type="radio" name="pages" value="').concat(r.constMode2up, '"/>\n                2 pages\n              </label>\n              <label class="sub">\n                <input type="checkbox" name="thispage" value="thispage"/>\n                Open to this page?\n              </label>\n            </fieldset>\n            <textarea cols="30" rows="4" name="iframe" class="BRframeEmbed"></textarea>\n          </fieldset>\n        </form>\n      </div>') : "",
								a = h('\n      <div class="share-title">Share this book</div>\n      <div class="share-social">\n        <label class="sub open-to-this-page">\n          <input class="thispage-social" type="checkbox" />\n          Open to this page?\n        </label>\n        <div><button class="BRaction share facebook-share-button"><i class="BRicon fb" /> Facebook</button></div>\n        <div><button class="BRaction share twitter-share-button"><i class="BRicon twitter" /> Twitter</button></div>\n        <div><button class="BRaction share email-share-button"><i class="BRicon email" /> Email</button></div>\n      </div>\n      '.concat(i, '\n      <div class="BRfloatFoot">\n        <button class="share-finished" type="button" onclick="$.fn.colorbox.close();">Finished</button>\n      </div>'));
							a.appendTo(e), a.find(".fieldset-embed input").on("change", (function (e) {
								var t = h(e.target).parents("form:first"),
									o = {};
								o.mode = h(t.find(".fieldset-embed input[name=pages]:checked")).val(), t.find(".fieldset-embed input[name=thispage]").prop("checked") && (o.page = r.getPageNum(r.currentIndex())), r.getEmbedCode && t.find(".BRframeEmbed").val(r.getEmbedCode("480px", "430px", o))
							})), a.find("input, textarea").on("focus", (function (e) {
								return e.target.select()
							})), a.find(".facebook-share-button").click((function () {
								v("https://www.facebook.com/sharer.php?" + h.param({
									u: t._getSocialShareUrl()
								}), 600, 400, "Share")
							})), a.find(".twitter-share-button").click((function () {
								v("https://twitter.com/intent/tweet?" + h.param({
									url: t._getSocialShareUrl(),
									text: r.bookTitle
								}), 600, 400, "Share")
							})), a.find(".email-share-button").click((function () {
								var e = "".concat(r.bookTitle, "\n\n").concat(t._getSocialShareUrl());
								window.location.href = "mailto:?subject=".concat(encodeURI(r.bookTitle), "&body=").concat(encodeURI(e))
							})), a.find("input[name=thispage]").trigger("change"), a.appendTo(e)
						}
					}, {
						key: "_getSocialShareUrl",
						value: function () {
							return this.br.$(".thispage-social").prop("checked") ? window.location.href : "".concat(document.location.protocol, "//").concat(window.location.hostname).concat(window.location.pathname)
						}
					}, {
						key: "buildInfoDiv",
						value: function (e) {
							var t = this.br;
							e.find(".BRfloatBody, .BRfloatCover, .BRfloatFoot").remove();
							var r = h('<div class="BRinfoLeftCol"></div>');
							t.thumbnail && r.append(h('\n        <div class="BRimageW">\n          <img src="'.concat(t.thumbnail, '" alt="').concat((0, o.escapeHTML)(t.bookTitle), '" />\n        </div>')));
							var n, i = h('<div class="BRinfoRightCol">'),
								a = function (e, t) {
									var r;
									if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
										if (Array.isArray(e) || (r = function (e, t) {
												if (e) {
													if ("string" == typeof e) return p(e, t);
													var r = Object.prototype.toString.call(e).slice(8, -1);
													return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
												}
											}(e)) || t && e && "number" == typeof e.length) {
											r && (e = r);
											var o = 0,
												n = function () {};
											return {
												s: n,
												n: function () {
													return o >= e.length ? {
														done: !0
													} : {
														done: !1,
														value: e[o++]
													}
												},
												e: function (e) {
													throw e
												},
												f: n
											}
										}
										throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
									}
									var i, a = !0,
										s = !1;
									return {
										s: function () {
											r = e[Symbol.iterator]()
										},
										n: function () {
											var e = r.next();
											return a = e.done, e
										},
										e: function (e) {
											s = !0, i = e
										},
										f: function () {
											try {
												a || null == r.return || r.return()
											} finally {
												if (s) throw i
											}
										}
									}
								}(t.metadata);
							try {
								for (a.s(); !(n = a.n()).done;) {
									var s = n.value,
										u = s.extraValueClass,
										c = void 0 === u ? "" : u,
										l = s.label,
										d = s.value,
										f = "Title" === l ? (0, o.escapeHTML)(d) : d;
									i.append(h('\n        <div class="BRinfoValueWrapper">\n          <div class="BRinfoLabel">'.concat(l, '</div>\n          <div class="BRinfoValue ').concat(c, '">').concat(f, "</div>\n        </div>")))
								}
							} catch (e) {
								a.e(e)
							} finally {
								a.f()
							}
							var g = t.bookUrlMoreInfo ? t.bookUrlMoreInfo : t.bookTitle;
							g && t.bookUrl && i.append(h('\n        <div class="BRinfoValueWrapper">\n          <div class="BRinfoMoreInfoWrapper">\n            <a class="BRinfoMoreInfo" href="'.concat(t.bookUrl, '">\n              ').concat((0, o.escapeHTML)(g), "\n            </a>\n          </div>\n        </div>")));
							var b = h('<div class="BRfloatFoot BRinfoFooter"></div>'),
								v = h('<div class="BRinfoW mv20-lg">').append([r, i, h('<br style="clear:both"/>')]);
							e.append(v, b).addClass("wide")
						}
					}, {
						key: "getToolBarHeight",
						value: function () {
							var e = this.br.refs.$BRtoolbar;
							return e && "block" === e.css("display") ? e.outerHeight() + parseInt(e.css("top")) : 0
						}
					}]) && d(t.prototype, r), e
				}();

				function g() {
					return h('\n    <div class="BRfloat BRinfo">\n      <div class="BRfloatHead">About this book\n        <button class="floatShut" href="javascript:;" onclick="$.fn.colorbox.close();"><span class="shift">Close</span></button>\n      </div>\n      <div class="BRfloatBody">\n        <div class="BRfloatCover"></div>\n        <div class="BRfloatMeta">\n          <div class="BRfloatTitle">\n            <h2><a /></h2>\n          </div>\n        </div>\n      </div>\n      <div class="BRfloatFoot">\n        <a href="https://openlibrary.org/dev/docs/bookreader">About the BookReader</a>\n      </div>\n    </div>')
				}

				function b() {
					return h('\n    <div class="BRfloat BRshare">\n      <div class="BRfloatHead">\n        Share\n        <button class="floatShut" href="javascript:;" onclick="$.fn.colorbox.close();"><span class="shift">Close</span></button>\n      </div>\n    </div>')
				}

				function v(e, t, r, o) {
					var n = null != window.screenLeft ? window.screenLeft : screen.left,
						i = null != window.screenTop ? window.screenTop : screen.top,
						a = (window.innerWidth || document.documentElement.clientWidth || screen.width) / 2 - t / 2 + n,
						s = (window.innerHeight || document.documentElement.clientHeight || screen.height) / 2 - r / 2 + i,
						u = "status=1,width=".concat(t, ",height=").concat(r, ",top=").concat(s, ",left=").concat(a);
					window.open(e, o, u)
				}

				function m(e, t) {
					var r;
					if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
						if (Array.isArray(e) || (r = function (e, t) {
								if (e) {
									if ("string" == typeof e) return w(e, t);
									var r = Object.prototype.toString.call(e).slice(8, -1);
									return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
								}
							}(e)) || t && e && "number" == typeof e.length) {
							r && (e = r);
							var o = 0,
								n = function () {};
							return {
								s: n,
								n: function () {
									return o >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[o++]
									}
								},
								e: function (e) {
									throw e
								},
								f: n
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var i, a = !0,
						s = !1;
					return {
						s: function () {
							r = e[Symbol.iterator]()
						},
						n: function () {
							var e = r.next();
							return a = e.done, e
						},
						e: function (e) {
							s = !0, i = e
						},
						f: function () {
							try {
								a || null == r.return || r.return()
							} finally {
								if (s) throw i
							}
						}
					}
				}

				function w(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
					return o
				}

				function y(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function P(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}

				function x(e, t, r) {
					return t && P(e.prototype, t), r && P(e, r), e
				}
				r(4553), r(6535), r(9244), r(5666);
				var _ = function () {
						function e(t) {
							y(this, e), this.br = t, this._medianPageSize = null, this._getDataFlattenedCached = null
						}
						return x(e, [{
							key: "getMedianPageSize",
							value: function () {
								if (this._medianPageSize) return this._medianPageSize;
								for (var e = [], t = [], r = 0; r < this.getNumLeafs(); r++) e.push(this.getPageWidth(r)), t.push(this.getPageHeight(r));
								return e.sort(), t.sort(), this._medianPageSize = {
									width: e[Math.floor(e.length / 2)],
									height: t[Math.floor(t.length / 2)]
								}, this._medianPageSize
							}
						}, {
							key: "_getPageWidth",
							value: function (e) {
								return e = (0, o.clamp)(e, 0, this.getNumLeafs() - 1), this.getPageWidth(e)
							}
						}, {
							key: "_getPageHeight",
							value: function (e) {
								var t = (0, o.clamp)(e, 0, this.getNumLeafs() - 1);
								return this.getPageHeight(t)
							}
						}, {
							key: "getPageIndex",
							value: function (e) {
								var t = this.getPageIndices(e);
								return t.length ? t[t.length - 1] : void 0
							}
						}, {
							key: "getPageIndices",
							value: function (e) {
								var t = [];
								if ("n" == e.slice(0, 1)) try {
									var r = e.slice(1, e.length),
										o = parseInt(r);
									return t.push(o), t
								} catch (e) {}
								for (var n = 0; n < this.getNumLeafs(); n++) this.getPageNum(n) == e && t.push(n);
								return t
							}
						}, {
							key: "getPageName",
							value: function (e) {
								return "Page " + this.getPageNum(e)
							}
						}, {
							key: "getNumLeafs",
							value: function () {
								return void 0 !== this.br.numLeafs ? this.br.numLeafs : this._getDataFlattened().length
							}
						}, {
							key: "getPageWidth",
							value: function (e) {
								return this.getPageProp(e, "width")
							}
						}, {
							key: "getPageHeight",
							value: function (e) {
								return this.getPageProp(e, "height")
							}
						}, {
							key: "getPageURI",
							value: function (e, t, r) {
								return this.getPageProp(e, "viewable", !0) ? this.getPageProp(e, "uri") : "/bookreader/static/preview-default.png"
							}
						}, {
							key: "getPageSide",
							value: function (e) {
								return this.getPageProp(e, "pageSide") || (e % 2 == 0 ? "R" : "L")
							}
						}, {
							key: "getPageNum",
							value: function (e) {
								var t = this.getPageProp(e, "pageNum");
								return void 0 === t ? "n".concat(e) : t
							}
						}, {
							key: "getPageProp",
							value: function (e, t) {
								var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
								return this._getDataProp(e, t, r)
							}
						}, {
							key: "getSpreadIndices",
							value: function (e) {
								return "rl" == this.br.pageProgression ? "R" == this.getPageSide(e) ? [e + 1, e] : [e, e - 1] : "L" == this.getPageSide(e) ? [e, e + 1] : [e - 1, e]
							}
						}, {
							key: "leafNumToIndex",
							value: function (e) {
								var t = this._getDataFlattened().findIndex((function (t) {
									return t.leafNum == e
								}));
								return t > -1 ? t : e
							}
						}, {
							key: "parsePageString",
							value: function (e) {
								var t, r = /^leaf(\d+)/.exec(e);
								return r ? null === (t = this.leafNumToIndex(parseInt(r[1], 10))) && (t = void 0) : t = this.getPageIndex(e), t
							}
						}, {
							key: "getPage",
							value: function (e) {
								var t = this.getNumLeafs();
								return e < 0 && e >= -t && (e += t), new k(this, e)
							}
						}, {
							key: "pagesIterator",
							value: regeneratorRuntime.mark((function e() {
								var t, r, o, n, i, a, s, u, c, l = arguments;
								return regeneratorRuntime.wrap((function (e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											t = l.length > 0 && void 0 !== l[0] ? l[0] : {}, r = t.start, o = void 0 === r ? 0 : r, n = t.end, i = void 0 === n ? 1 / 0 : n, a = t.combineConsecutiveUnviewables, s = void 0 !== a && a, o = Math.max(0, o), i = Math.min(i, this.getNumLeafs()), u = o;
										case 4:
											if (!(u < i)) {
												e.next = 13;
												break
											}
											if (c = this.getPage(u), !s || !c.isConsecutiveUnviewable) {
												e.next = 8;
												break
											}
											return e.abrupt("continue", 10);
										case 8:
											return e.next = 10, c;
										case 10:
											u++, e.next = 4;
											break;
										case 13:
										case "end":
											return e.stop()
									}
								}), e, this)
							}))
						}, {
							key: "_getDataFlattened",
							value: function () {
								if (this._getDataFlattenedCached && this._getDataFlattenedCached[1] === this.br.data.length) return this._getDataFlattenedCached[0];
								var e = null,
									t = null,
									r = 0,
									o = this.br.data.flatMap((function (o) {
										return o.map((function (n) {
											return n.pageSide || (n.pageSide = null === e ? 2 === o.length ? "L" : "R" : "L" === e ? "R" : "L"), e = n.pageSide, !1 === n.viewable ? n.unviewablesStart = null === t ? t = r : t : t = null, r++, n
										}))
									}));
								return this._getDataFlattenedCached = [o, this.br.data.length], o
							}
						}, {
							key: "_getDataProp",
							value: function (e, t) {
								var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
									o = this._getDataFlattened(),
									n = isNaN(e) || e < 0 || e >= o.length;
								return n || void 0 === o[e][t] ? r : o[e][t]
							}
						}]), e
					}(),
					k = function () {
						function e(t, r) {
							y(this, e), this.book = t, this.index = r, this.width = t.getPageWidth(r), this.height = t.getPageHeight(r), this.pageSide = t.getPageSide(r), this.leafNum = t._getDataProp(r, "leafNum", this.index), this.isViewable = t._getDataProp(r, "viewable", !0), this.unviewablesStart = t._getDataProp(r, "unviewablesStart") || null, this.isConsecutiveUnviewable = !this.isViewable && this.unviewablesStart != this.index, this._rawData = this.book._getDataFlattened()[this.index]
						}
						return x(e, [{
							key: "makeViewable",
							value: function () {
								var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
								if (this.isViewable != e)
									if (e) {
										this._rawData.viewable = !0, delete this._rawData.unviewablesStart;
										var t, r = m(this.book.pagesIterator({
											start: this.index + 1
										}));
										try {
											for (r.s(); !(t = r.n()).done;) {
												var o = t.value;
												if (o.isViewable) break;
												o._rawData.unviewablesStart = this.index + 1
											}
										} catch (e) {
											r.e(e)
										} finally {
											r.f()
										}
									} else {
										this._rawData.viewable = !1, this._rawData.unviewablesStart = this.prev && !this.prev.isViewable ? this.prev.unviewablesStart : this.index;
										var n, i = m(this.book.pagesIterator({
											start: this.index + 1
										}));
										try {
											for (i.s(); !(n = i.n()).done;) {
												var a = n.value;
												if (!a.isViewable) break;
												a._rawData.unviewablesStart = this._rawData.unviewablesStart
											}
										} catch (e) {
											i.e(e)
										} finally {
											i.f()
										}
									}
							}
						}, {
							key: "getURI",
							value: function (e, t) {
								return this.book.getPageURI(this.index, e, t)
							}
						}, {
							key: "findNext",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									t = e.combineConsecutiveUnviewables,
									r = void 0 !== t && t;
								return this.book.pagesIterator({
									start: this.index + 1,
									combineConsecutiveUnviewables: r
								}).next().value
							}
						}, {
							key: "findPrev",
							value: function () {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = t.combineConsecutiveUnviewables,
									o = void 0 !== r && r;
								if (0 != this.index) {
									if (o) {
										if (this.isConsecutiveUnviewable) return this.book.getPage(this.unviewablesStart);
										var n = new e(this.book, this.index - 1);
										return n.isViewable ? n : n.findPrev({
											combineConsecutiveUnviewables: o
										})
									}
									return new e(this.book, this.index - 1)
								}
							}
						}, {
							key: "prev",
							get: function () {
								return this.findPrev()
							}
						}, {
							key: "next",
							get: function () {
								return this.findNext()
							}
						}]), e
					}(),
					R = r(3609);

				function I(e, t) {
					var r;
					if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
						if (Array.isArray(e) || (r = function (e, t) {
								if (e) {
									if ("string" == typeof e) return S(e, t);
									var r = Object.prototype.toString.call(e).slice(8, -1);
									return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S(e, t) : void 0
								}
							}(e)) || t && e && "number" == typeof e.length) {
							r && (e = r);
							var o = 0,
								n = function () {};
							return {
								s: n,
								n: function () {
									return o >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[o++]
									}
								},
								e: function (e) {
									throw e
								},
								f: n
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var i, a = !0,
						s = !1;
					return {
						s: function () {
							r = e[Symbol.iterator]()
						},
						n: function () {
							var e = r.next();
							return a = e.done, e
						},
						e: function (e) {
							s = !0, i = e
						},
						f: function () {
							try {
								a || null == r.return || r.return()
							} finally {
								if (s) throw i
							}
						}
					}
				}

				function S(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
					return o
				}

				function T(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				var C = function () {
						function e(t, r) {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, e), this.br = t, this.book = r
						}
						var t, r;
						return t = e, (r = [{
							key: "prepare",
							value: function () {
								var e = this.br.currentIndex();
								this.br.refs.$brContainer.empty(), this.br.refs.$brContainer.css({
									overflowY: "scroll",
									overflowX: "auto"
								}), this.br.refs.$brPageViewEl = R("<div class='BRpageview'></div>"), this.br.refs.$brContainer.append(this.br.refs.$brPageViewEl), this.br.refs.$brContainer.dragscrollable(), this.br.bindGestures(this.br.refs.$brContainer), this.resizePageView(), this.br.jumpToIndex(e), this.br.updateBrClasses()
							}
						}, {
							key: "drawLeafs",
							value: function () {
								var e, t = this.book,
									r = this.br.refs.$brContainer.height(),
									n = this.br.refs.$brPageViewEl.width(),
									i = this.br.refs.$brContainer.prop("scrollTop"),
									a = i + r,
									s = [],
									u = 0,
									c = 0,
									l = I(t.pagesIterator({
										combineConsecutiveUnviewables: !0
									}));
								try {
									for (l.s(); !(e = l.n()).done;) {
										var h = e.value,
											p = Math.floor(h.height / this.br.reduce);
										c += p, (u >= i && u <= a || c >= i && c <= a || u <= i && c >= a) && s.push(h.index), u += p + 10, c += 10
									}
								} catch (e) {
									l.e(e)
								} finally {
									l.f()
								}
								var d = s[0];
								if (this.br.updateFirstIndex(d), this.br.reduce > 1) {
									var f = t.getPage(d).findPrev({
										combineConsecutiveUnviewables: !0
									});
									f && s.unshift(d = f.index);
									var g = s[s.length - 1],
										b = t.getPage(g).findNext({
											combineConsecutiveUnviewables: !0
										});
									b && s.push(b.index)
								}
								var v = this.br.refs.$brPageViewEl.get(0);
								u = 0;
								var m, w = I(t.pagesIterator({
									end: d,
									combineConsecutiveUnviewables: !0
								}));
								try {
									for (w.s(); !(m = w.n()).done;) {
										var y = m.value;
										u += Math.floor(y.height / this.br.reduce) + 10
									}
								} catch (e) {
									w.e(e)
								} finally {
									w.f()
								}
								for (var P = 0, x = s; P < x.length; P++) {
									var _ = x[P],
										k = t.getPage(_),
										S = Math.floor(k.height / this.br.reduce);
									if (!this.br.displayedIndices.includes(_)) {
										var T = Math.floor(k.width / this.br.reduce),
											C = Math.floor((n - T) / 2),
											L = this.br._createPageContainer(_, {
												width: T,
												height: S,
												top: u,
												left: C
											}),
											E = R("<img />", {
												src: k.getURI(this.br.reduce, 0),
												srcset: this.br._getPageURISrcset(_, this.br.reduce, 0)
											});
										L.append(E), v.appendChild(L[0])
									}
									u += S + 10
								}
								var B, M = I(this.br.displayedIndices);
								try {
									for (M.s(); !(B = M.n()).done;) {
										var $ = B.value;
										(0, o.notInArray)($, s) && this.br.$(".pagediv".concat($)).remove()
									}
								} catch (e) {
									M.e(e)
								} finally {
									M.f()
								}
								this.br.displayedIndices = s.slice(), this.br.enableSearch && this.br.updateSearchHilites(), this.br.updateToolbarZoom(this.br.reduce), this.br.updateNavIndexThrottled()
							}
						}, {
							key: "zoom",
							value: function (e) {
								var t = this.br.nextReduce(this.br.reduce, e, this.br.onePage.reductionFactors);
								this.br.reduce != t.reduce && (this.br.reduce = t.reduce, this.br.onePage.autofit = t.autofit, this.br.pageScale = this.br.reduce, this.resizePageView(), this.br.updateToolbarZoom(this.br.reduce), this.br.enableSearch && (this.br.removeSearchHilites(), this.br.updateSearchHilites()))
							}
						}, {
							key: "getAutofitWidth",
							value: function () {
								return this.book.getMedianPageSize().width / (this.br.refs.$brContainer.prop("clientWidth") - 40)
							}
						}, {
							key: "getAutofitHeight",
							value: function () {
								return this.book.getMedianPageSize().height / (this.br.refs.$brContainer.innerHeight() - 2 * this.br.padding)
							}
						}, {
							key: "getPageTop",
							value: function (e) {
								var t, r = Math.floor,
									o = 0,
									n = I(this.book.pagesIterator({
										end: e,
										combineConsecutiveUnviewables: !0
									}));
								try {
									for (n.s(); !(t = n.n()).done;) o += r(t.value.height / this.br.reduce) + this.br.padding
								} catch (e) {
									n.e(e)
								} finally {
									n.f()
								}
								return o
							}
						}, {
							key: "calculateReductionFactors",
							value: function () {
								this.br.onePage.reductionFactors = this.br.reductionFactors.concat([{
									reduce: this.getAutofitWidth(),
									autofit: "width"
								}, {
									reduce: this.getAutofitHeight(),
									autofit: "height"
								}]), this.br.onePage.reductionFactors.sort(this.br._reduceSort)
							}
						}, {
							key: "resizePageView",
							value: function () {
								var e, t = this.br.refs.$brContainer.prop("clientWidth"),
									r = this.br.refs.$brContainer.prop("scrollTop"),
									o = this.br.refs.$brPageViewEl.height(),
									n = this.br.refs.$brPageViewEl.width(),
									i = 0;
								if (r > 0) {
									var a = this.centerY();
									e = this.centerX(), i = a / o
								} else {
									var s = this.book.getPageHeight(this.br.currentIndex()) / this.br.reduce * .6;
									i = (this.getPageTop(this.br.currentIndex()) + s) / this.calculateViewDimensions(this.br.reduce, this.br.padding).height
								}
								if (this.calculateReductionFactors(), this.br.onePage.autofit) {
									var u = this.br.nextReduce(this.br.reduce, this.br.onePage.autofit, this.br.onePage.reductionFactors);
									this.br.reduce = u.reduce
								}
								var c = this.calculateViewDimensions(this.br.reduce, this.br.padding);
								this.br.refs.$brPageViewEl.height(c.height), this.br.refs.$brPageViewEl.width(c.width);
								var l = i * c.height,
									h = Math.max(0, Math.floor(l - this.br.refs.$brContainer.height() / 2));
								this.br.refs.$brContainer.prop("scrollTop", h);
								var p = e * (t / n) - this.br.refs.$brContainer.prop("clientWidth") / 2;
								p = Math.max(p, 0), this.br.refs.$brContainer.prop("scrollLeft", p), this.br.refs.$brPageViewEl.empty(), this.br.displayedIndices = [], this.drawLeafs(), this.br.enableSearch && (this.br.removeSearchHilites(), this.br.updateSearchHilites())
							}
						}, {
							key: "calculateViewDimensions",
							value: function (e, t) {
								var r, o = Math.floor,
									n = 0,
									i = 0,
									a = I(this.book.pagesIterator({
										combineConsecutiveUnviewables: !0
									}));
								try {
									for (a.s(); !(r = a.n()).done;) {
										var s = r.value;
										i += o(s.height / e) + t;
										var u = o(s.width / e);
										u > n && (n = u)
									}
								} catch (e) {
									a.e(e)
								} finally {
									a.f()
								}
								return {
									width: n,
									height: i
								}
							}
						}, {
							key: "centerX",
							value: function () {
								var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.br.refs.$brContainer,
									r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.br.refs.$brPageViewEl;
								return e = r.width() < t.prop("clientWidth") ? r.width() : t.scrollLeft() + t.prop("clientWidth") / 2, Math.floor(e)
							}
						}, {
							key: "centerY",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.br.refs.$brContainer,
									t = e.scrollTop() + e.height() / 2;
								return Math.floor(t)
							}
						}]) && T(t.prototype, r), e
					}(),
					L = r(3609);

				function E(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				var B = function () {
						function e(t, r) {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, e), this.br = t, this.book = r, this.leafEdgeL = null, this.leafEdgeR = null
						}
						var t, r;
						return t = e, (r = [{
							key: "setClickHandler",
							value: function (e, t, r) {
								L(e).unbind("mouseup").bind("mouseup", t, (function (e) {
									r(this, e)
								}))
							}
						}, {
							key: "drawLeafs",
							value: function () {
								var e = this.br.refs.$brTwoPageView,
									t = this.br.twoPage.currentIndexL,
									r = this.top();
								this.br.twoPage.scaledWL = this.getPageWidth(t), this.br.twoPage.gutter = this.gutter(), this.br.prefetchImg(t), L(this.br.prefetchedImgs[t]).css({
									position: "absolute",
									left: "".concat(this.br.twoPage.gutter - this.br.twoPage.scaledWL, "px"),
									right: "",
									top: "".concat(r, "px"),
									height: "".concat(this.br.twoPage.height, "px"),
									width: "".concat(this.br.twoPage.scaledWL, "px"),
									zIndex: 2
								}).appendTo(e);
								var o = this.br.twoPage.currentIndexR;
								this.br.twoPage.scaledWR = this.getPageWidth(o), this.br.prefetchImg(o), L(this.br.prefetchedImgs[o]).css({
									position: "absolute",
									left: "".concat(this.br.twoPage.gutter, "px"),
									right: "",
									top: "".concat(r, "px"),
									height: "".concat(this.br.twoPage.height, "px"),
									width: "".concat(this.br.twoPage.scaledWR, "px"),
									zIndex: 2
								}).appendTo(e), this.displayedIndices = [this.br.twoPage.currentIndexL, this.br.twoPage.currentIndexR], this.setMouseHandlers(), this.br.displayedIndices = this.displayedIndices, this.br.updateToolbarZoom(this.br.reduce), this.br.trigger("pageChanged")
							}
						}, {
							key: "zoom",
							value: function (e) {
								this.br.stopFlipAnimations(), this.calculateReductionFactors();
								var t = this.br.nextReduce(this.br.reduce, e, this.br.twoPage.reductionFactors);
								if (this.br.reduce != t.reduce || this.br.twoPage.autofit != t.autofit) {
									this.br.twoPage.autofit = t.autofit, this.br.reduce = t.reduce, this.br.pageScale = this.br.reduce;
									var r = this.getViewCenter();
									if (1 == e)
										for (var o in this.br.prefetchedImgs) delete this.br.prefetchedImgs[o];
									this.prepareTwoPageView(r.percentageX, r.percentageY)
								}
							}
						}, {
							key: "prepareTwoPageView",
							value: function (e, t) {
								this.br.refs.$brContainer.empty(), this.br.refs.$brContainer.css("overflow", "auto");
								var r = (0, o.clamp)(this.br.firstIndex, this.br.firstDisplayableIndex(), this.br.lastDisplayableIndex()),
									n = this.book.getSpreadIndices(r);
								this.br.twoPage.currentIndexL = n[0], this.br.twoPage.currentIndexR = n[1], this.calculateSpreadSize(), this.br.pruneUnusedImgs(), this.br.prefetch();
								var i = L('<div class="BRtwopageview"></div>');
								this.br.refs.$brTwoPageView = i, this.br.refs.$brContainer.append(i), this.br.refs.$brContainer.dragscrollable({
									preventDefault: !0
								}), this.br.bindGestures(this.br.refs.$brContainer), this.br.refs.$brTwoPageView.css({
									height: "".concat(this.br.twoPage.totalHeight, "px"),
									width: "".concat(this.br.twoPage.totalWidth, "px"),
									position: "absolute"
								}), this.br.twoPage.totalWidth < this.br.refs.$brContainer.prop("clientWidth") && (e = .5), this.br.twoPage.totalHeight < this.br.refs.$brContainer.prop("clientHeight") && (t = .5), this.centerView(e, t), this.br.twoPage.coverDiv = document.createElement("div"), L(this.br.twoPage.coverDiv).attr("class", "BRbookcover").css({
									width: "".concat(this.br.twoPage.bookCoverDivWidth, "px"),
									height: "".concat(this.br.twoPage.bookCoverDivHeight, "px"),
									visibility: "visible"
								}).appendTo(this.br.refs.$brTwoPageView), this.leafEdgeR = document.createElement("div"), this.leafEdgeR.className = "BRleafEdgeR", L(this.leafEdgeR).css({
									width: "".concat(this.br.twoPage.leafEdgeWidthR, "px"),
									height: "".concat(this.br.twoPage.height, "px"),
									left: "".concat(this.br.twoPage.gutter + this.br.twoPage.scaledWR, "px"),
									top: "".concat(this.br.twoPage.bookCoverDivTop + this.br.twoPage.coverInternalPadding, "px"),
									border: 0 === this.br.twoPage.leafEdgeWidthR ? "none" : null
								}).appendTo(this.br.refs.$brTwoPageView), this.leafEdgeL = document.createElement("div"), this.leafEdgeL.className = "BRleafEdgeL", L(this.leafEdgeL).css({
									width: "".concat(this.br.twoPage.leafEdgeWidthL, "px"),
									height: "".concat(this.br.twoPage.height, "px"),
									left: "".concat(this.br.twoPage.bookCoverDivLeft + this.br.twoPage.coverInternalPadding, "px"),
									top: "".concat(this.br.twoPage.bookCoverDivTop + this.br.twoPage.coverInternalPadding, "px"),
									border: 0 === this.br.twoPage.leafEdgeWidthL ? "none" : null
								}).appendTo(this.br.refs.$brTwoPageView);
								var a = document.createElement("div");
								L(a).attr("class", "BRgutter").css({
									width: "".concat(this.br.twoPage.bookSpineDivWidth, "px"),
									height: "".concat(this.br.twoPage.bookSpineDivHeight, "px"),
									left: "".concat(this.br.twoPage.gutter - .5 * this.br.twoPage.bookSpineDivWidth, "px"),
									top: "".concat(this.br.twoPage.bookSpineDivTop, "px")
								}).appendTo(this.br.refs.$brTwoPageView), this.preparePopUp(), this.br.displayedIndices = [], this.drawLeafs(), this.br.updateToolbarZoom(this.br.reduce), this.br.prefetch(), this.br.enableSearch && (this.br.removeSearchHilites(), this.br.updateSearchHilites()), this.br.updateBrClasses()
							}
						}, {
							key: "preparePopUp",
							value: function () {
								var e = this;
								this.br.twoPagePopUp = document.createElement("div"), this.br.twoPagePopUp.className = "BRtwoPagePopUp", L(this.br.twoPagePopUp).css({
									zIndex: "1000"
								}).appendTo(this.br.refs.$brContainer), L(this.br.twoPagePopUp).hide();
								for (var t = [{
										$leafEdge: L(this.leafEdgeL),
										jumpIndexForPageX: this.jumpIndexForLeftEdgePageX.bind(this),
										leftOffset: function () {
											return 120 - L(e.br.twoPagePopUp).width()
										}
									}, {
										$leafEdge: L(this.leafEdgeR),
										jumpIndexForPageX: this.jumpIndexForRightEdgePageX.bind(this),
										leftOffset: function () {
											return -120
										}
									}], r = function () {
										var t = a[n],
											r = t.$leafEdge,
											s = t.jumpIndexForPageX,
											u = t.leftOffset;
										r.on("mouseenter", (function () {
											return L(e.br.twoPagePopUp).show()
										})), r.on("mouseleave", (function () {
											return L(e.br.twoPagePopUp).hide()
										})), r.on("click", (function (t) {
											e.br.trigger(i.stop), e.br.jumpToIndex(s(t.pageX))
										})), r.on("mousemove", (function (t) {
											var r = (0, o.clamp)(s(t.pageX), 0, e.book.getNumLeafs() - 1);
											L(e.br.twoPagePopUp).text("View ".concat(e.book.getPageName(r))), L(e.br.twoPagePopUp).css({
												left: "".concat(t.pageX - e.br.refs.$brContainer.offset().left + e.br.refs.$brContainer.scrollLeft() + u(), "px"),
												top: "".concat(t.pageY - e.br.refs.$brContainer.offset().top + e.br.refs.$brContainer.scrollTop(), "px")
											})
										}))
									}, n = 0, a = t; n < a.length; n++) r()
							}
						}, {
							key: "calculateSpreadSize",
							value: function () {
								var e, t = this.br.twoPage.currentIndexL,
									r = this.br.twoPage.currentIndexR;
								e = this.br.twoPage.autofit ? this.getIdealSpreadSize(t, r) : this.getSpreadSizeFromReduce(t, r, this.br.reduce), this.br.twoPage.height = e.height, this.br.twoPage.width = e.width, this.br.twoPage.scaledWL = this.getPageWidth(t), this.br.twoPage.scaledWR = this.getPageWidth(r), this.br.twoPage.edgeWidth = e.totalLeafEdgeWidth, this.br.twoPage.leafEdgeWidthL = this.br.leafEdgeWidth(this.br.twoPage.currentIndexL), this.br.twoPage.leafEdgeWidthR = this.br.twoPage.edgeWidth - this.br.twoPage.leafEdgeWidthL, this.br.twoPage.bookCoverDivWidth = this.coverWidth(this.br.twoPage.scaledWL + this.br.twoPage.scaledWR), this.br.twoPage.bookCoverDivHeight = this.br.twoPage.height + 2 * this.br.twoPage.coverInternalPadding;
								var o = this.gutterOffsetForIndex(t),
									n = this.br.twoPage.scaledWL - o + this.br.twoPage.leafEdgeWidthL,
									i = this.br.twoPage.scaledWR + o + this.br.twoPage.leafEdgeWidthR,
									a = Math.max(n, i);
								this.br.twoPage.totalWidth = 2 * (a + this.br.twoPage.coverInternalPadding + this.br.twoPage.coverExternalPadding), this.br.twoPage.totalHeight = this.br.twoPage.height + 2 * (this.br.twoPage.coverInternalPadding + this.br.twoPage.coverExternalPadding), this.br.twoPage.middle = this.br.twoPage.totalWidth >> 1, this.br.twoPage.gutter = this.br.twoPage.middle + this.gutterOffsetForIndex(t), this.br.twoPage.bookCoverDivLeft = this.br.twoPage.gutter - this.br.twoPage.scaledWL - this.br.twoPage.leafEdgeWidthL - this.br.twoPage.coverInternalPadding, this.br.twoPage.bookCoverDivTop = this.br.twoPage.coverExternalPadding, this.br.twoPage.bookSpineDivHeight = this.br.twoPage.height + 2 * this.br.twoPage.coverInternalPadding, this.br.twoPage.bookSpineDivLeft = this.br.twoPage.middle - (this.br.twoPage.bookSpineDivWidth >> 1), this.br.twoPage.bookSpineDivTop = this.br.twoPage.bookCoverDivTop, this.br.reduce = e.reduce
							}
						}, {
							key: "getIdealSpreadSize",
							value: function (e, t) {
								var r, o = {},
									n = this.book._getPageHeight(e),
									i = this.book._getPageWidth(e),
									a = this.book._getPageHeight(t),
									s = n / i,
									u = a / this.book._getPageWidth(t);
								r = Math.abs(s - 1.5) < Math.abs(u - 1.5) ? s : u;
								var c = Math.floor(.1 * this.book.getNumLeafs()),
									l = Math.floor(.1 * this.br.refs.$brContainer.prop("clientWidth"));
								o.totalLeafEdgeWidth = Math.min(c, l);
								var h = 2 * (this.br.twoPage.coverInternalPadding + this.br.twoPage.coverExternalPadding) + o.totalLeafEdgeWidth,
									p = 2 * (this.br.twoPage.coverInternalPadding + this.br.twoPage.coverExternalPadding);
								return o.width = this.br.refs.$brContainer.width() - h >> 1, o.width -= 10, o.height = this.br.refs.$brContainer.height() - p, o.height -= 15, o.height / r <= o.width ? o.width = Math.floor(o.height / r) : o.height = Math.floor(o.width * r), o.reduce = (n + a) / 2 / o.height, o
							}
						}, {
							key: "getSpreadSizeFromReduce",
							value: function (e, t, r) {
								var o = {},
									n = Math.floor(.1 * this.book.getNumLeafs()),
									i = Math.floor(.1 * this.br.refs.$brContainer.prop("clientWidth"));
								o.totalLeafEdgeWidth = Math.min(n, i);
								var a = this.book._getPageWidth(e) + this.book._getPageWidth(t),
									s = this.book._getPageHeight(e) + this.book._getPageHeight(t);
								return o.height = Math.floor(s / 2 / this.br.reduce), o.width = Math.floor(a / 2 / this.br.reduce), o.reduce = r, o
							}
						}, {
							key: "getAutofitReduce",
							value: function () {
								return this.getIdealSpreadSize(this.br.twoPage.currentIndexL, this.br.twoPage.currentIndexR).reduce
							}
						}, {
							key: "isZoomedIn",
							value: function () {
								var e = !1;
								return "auto" != this.br.twoPage.autofit && this.br.reduce < this.getAutofitReduce() && (e = !0), e
							}
						}, {
							key: "calculateReductionFactors",
							value: function () {
								this.br.twoPage.reductionFactors = this.br.reductionFactors.concat([{
									reduce: this.getIdealSpreadSize(this.br.twoPage.currentIndexL, this.br.twoPage.currentIndexR).reduce,
									autofit: "auto"
								}]), this.br.twoPage.reductionFactors.sort(this.br._reduceSort)
							}
						}, {
							key: "setCursor",
							value: function () {
								var e = this.br.refs.$brTwoPageView;
								e.width() > this.br.refs.$brContainer.prop("clientWidth") || e.height() > this.br.refs.$brContainer.prop("clientHeight") ? (this.br.prefetchedImgs[this.br.twoPage.currentIndexL] && (this.br.prefetchedImgs[this.br.twoPage.currentIndexL].style.cursor = "move"), this.br.prefetchedImgs[this.br.twoPage.currentIndexR] && (this.br.prefetchedImgs[this.br.twoPage.currentIndexR].style.cursor = "move")) : (this.br.prefetchedImgs[this.br.twoPage.currentIndexL] && (this.br.prefetchedImgs[this.br.twoPage.currentIndexL].style.cursor = ""), this.br.prefetchedImgs[this.br.twoPage.currentIndexR] && (this.br.prefetchedImgs[this.br.twoPage.currentIndexR].style.cursor = ""))
							}
						}, {
							key: "flipBackToIndex",
							value: function (e) {
								if (this.br.constMode1up != this.br.mode && !this.br.animating)
									if (null == this.br.leafEdgeTmp) {
										if (null == e) {
											var t = this.br.twoPage,
												r = t.currentIndexL,
												o = t.currentIndexR,
												n = Math.min(r, o),
												i = this.book.getPage(n).findPrev({
													combineConsecutiveUnviewables: !0
												});
											if (!i) return;
											e = i.index, "R" == i.pageSide && e--
										}
										this.br.updateNavIndexThrottled(e);
										var a = this.book.getSpreadIndices(e);
										a[0] < this.br.firstDisplayableIndex() || a[1] < this.br.firstDisplayableIndex() || (this.br.animating = !0, "rl" != this.br.pageProgression ? (this.prepareFlipLeftToRight(a[0], a[1]), this.flipLeftToRight(a[0], a[1])) : (this.prepareFlipRightToLeft(a[0], a[1]), this.flipRightToLeft(a[0], a[1])))
									} else alert("error: leafEdgeTmp should be null!")
							}
						}, {
							key: "flipLeftToRight",
							value: function (e, t) {
								var r = this;
								this.br.refs.$brContainer.addClass("BRpageFlipping");
								var o = this.br.twoPage.currentIndexL,
									n = this.br.leafEdgeWidth(this.br.twoPage.currentIndexL),
									i = this.br.leafEdgeWidth(e),
									a = n - i,
									s = this.getPageWidth(o),
									u = this.getPageWidth(e),
									c = this.getPageWidth(t),
									l = this.top(),
									h = this.br.twoPage.middle + this.gutterOffsetForIndex(e),
									p = this.br.refs.$brTwoPageView,
									d = h - s - a;
								this.br.leafEdgeTmp = document.createElement("div"), this.br.leafEdgeTmp.className = "BRleafEdgeTmp", L(this.br.leafEdgeTmp).css({
									width: "".concat(a, "px"),
									height: "".concat(this.br.twoPage.height, "px"),
									left: "".concat(d, "px"),
									top: "".concat(l, "px"),
									zIndex: 1e3
								}).appendTo(p), L(this.leafEdgeL).css({
									width: "".concat(i, "px"),
									left: "".concat(h - s - i, "px")
								});
								var f = L(this.br.prefetchedImgs[o]).offset().left,
									g = "".concat(p.prop("clientWidth") - f - L(this.br.prefetchedImgs[o]).width() + p.offset().left - 2, "px");
								L(this.br.prefetchedImgs[o]).css({
									right: g,
									left: ""
								}), L(this.br.leafEdgeTmp).animate({
									left: h
								}, this.br.flipSpeed, "easeInSine"), this.br.enableSearch && this.br.removeSearchHilites(), L(this.br.prefetchedImgs[o]).animate({
									width: "0px"
								}, this.br.flipSpeed, "easeInSine", (function () {
									L(r.br.leafEdgeTmp).animate({
										left: "".concat(h + c, "px")
									}, r.br.flipSpeed, "easeOutSine"), r.br.$(".BRgutter").css({
										left: "".concat(h - .5 * r.br.twoPage.bookSpineDivWidth, "px")
									}), L(r.br.prefetchedImgs[t]).animate({
										width: "".concat(c, "px")
									}, r.br.flipSpeed, "easeOutSine", (function () {
										var o;
										L(r.br.prefetchedImgs[e]).css("zIndex", 2), L(r.br.prefetchedImgs[e]).css("display", ""), L(r.br.prefetchedImgs[t]).css("display", ""), L(r.leafEdgeR).css({
											width: "".concat(r.br.twoPage.edgeWidth - i, "px"),
											left: "".concat(h + c, "px")
										}), L(r.leafEdgeL).css({
											width: "".concat(i, "px"),
											left: "".concat(h - u - i, "px")
										}), L(r.br.twoPage.coverDiv).css({
											width: "".concat(r.coverWidth(u + c), "px"),
											left: "".concat(h - u - i - r.br.twoPage.coverInternalPadding, "px")
										}), L(r.br.leafEdgeTmp).remove(), r.br.leafEdgeTmp = null, r.br.twoPage.currentIndexL = e, r.br.twoPage.currentIndexR = t, r.br.twoPage.scaledWL = u, r.br.twoPage.scaledWR = c, r.br.twoPage.gutter = h, r.br.updateFirstIndex(r.br.twoPage.currentIndexL), r.br.displayedIndices = [e, t], r.br.pruneUnusedImgs(), r.br.prefetch(), r.br.animating = !1, r.br.enableSearch && r.br.updateSearchHilites(), r.setMouseHandlers(), r.br.animationFinishedCallback && (r.br.animationFinishedCallback(), r.br.animationFinishedCallback = null), r.br.refs.$brContainer.removeClass("BRpageFlipping"), null === (o = r.br.textSelectionPlugin) || void 0 === o || o.stopPageFlip(r.br.refs.$brContainer), r.br.trigger("pageChanged")
									}))
								}))
							}
						}, {
							key: "flipFwdToIndex",
							value: function (e) {
								if (!this.br.animating)
									if (null == this.br.leafEdgeTmp) {
										if (null == e) {
											var t = this.br.twoPage,
												r = t.currentIndexL,
												o = t.currentIndexR,
												n = Math.max(r, o),
												i = this.book.getPage(n).findNext({
													combineConsecutiveUnviewables: !0
												});
											if (!i) return;
											e = i.index
										}
										if (!(e > this.br.lastDisplayableIndex())) {
											this.br.updateNavIndexThrottled(e), this.br.animating = !0;
											var a = this.book.getSpreadIndices(e);
											"rl" != this.br.pageProgression ? (this.prepareFlipRightToLeft(a[0], a[1]), this.flipRightToLeft(a[0], a[1])) : (this.prepareFlipLeftToRight(a[0], a[1]), this.flipLeftToRight(a[0], a[1]))
										}
									} else alert("error: leafEdgeTmp should be null!")
							}
						}, {
							key: "flipRightToLeft",
							value: function (e, t) {
								var r = this;
								this.br.refs.$brContainer.addClass("BRpageFlipping");
								var o = this.br.leafEdgeWidth(this.br.twoPage.currentIndexL),
									n = this.br.twoPage.edgeWidth - o,
									i = this.br.leafEdgeWidth(e),
									a = this.br.twoPage.edgeWidth - i,
									s = n - a,
									u = this.top(),
									c = this.getPageWidth(this.br.twoPage.currentIndexR),
									l = this.br.twoPage.middle + this.gutterOffsetForIndex(e),
									h = this.br.refs.$brTwoPageView;
								this.br.leafEdgeTmp = document.createElement("div"), this.br.leafEdgeTmp.className = "BRleafEdgeTmp", L(this.br.leafEdgeTmp).css({
									width: "".concat(s, "px"),
									height: "".concat(this.br.twoPage.height, "px"),
									left: "".concat(l + c, "px"),
									top: "".concat(u, "px"),
									zIndex: 1e3
								}).appendTo(h);
								var p = this.getPageWidth(e),
									d = this.getPageWidth(t);
								L(this.leafEdgeR).css({
									width: "".concat(a, "px"),
									left: "".concat(l + d, "px")
								});
								var f = this.br.flipSpeed;
								this.br.enableSearch && this.br.removeSearchHilites(), L(this.br.leafEdgeTmp).animate({
									left: l
								}, f, "easeInSine"), L(this.br.prefetchedImgs[this.br.twoPage.currentIndexR]).animate({
									width: "0px"
								}, f, "easeInSine", (function () {
									r.br.$("BRgutter").css({
										left: "".concat(l - .5 * r.br.twoPage.bookSpineDivWidth, "px")
									}), L(r.br.leafEdgeTmp).animate({
										left: "".concat(l - p - s, "px")
									}, f, "easeOutSine"), L(r.br.prefetchedImgs[e]).animate({
										width: "".concat(p, "px")
									}, f, "easeOutSine", (function () {
										var o;
										L(r.br.prefetchedImgs[t]).css("zIndex", 2), L(r.br.prefetchedImgs[e]).css("display", ""), L(r.br.prefetchedImgs[t]).css("display", ""), L(r.leafEdgeL).css({
											width: "".concat(i, "px"),
											left: "".concat(l - p - i, "px")
										}), L(r.br.twoPage.coverDiv).css({
											width: "".concat(r.coverWidth(p + d), "px"),
											left: "".concat(l - p - i - r.br.twoPage.coverInternalPadding, "px")
										}), L(r.br.leafEdgeTmp).remove(), r.br.leafEdgeTmp = null, r.br.twoPage.currentIndexL = e, r.br.twoPage.currentIndexR = t, r.br.twoPage.scaledWL = p, r.br.twoPage.scaledWR = d, r.br.twoPage.gutter = l, r.br.updateFirstIndex(r.br.twoPage.currentIndexL), r.br.displayedIndices = [e, t], r.br.pruneUnusedImgs(), r.br.prefetch(), r.br.animating = !1, r.br.enableSearch && r.br.updateSearchHilites(), r.setMouseHandlers(), r.br.animationFinishedCallback && (r.br.animationFinishedCallback(), r.br.animationFinishedCallback = null), r.br.refs.$brContainer.removeClass("BRpageFlipping"), null === (o = r.br.textSelectionPlugin) || void 0 === o || o.stopPageFlip(r.br.refs.$brContainer), r.br.trigger("pageChanged")
									}))
								}))
							}
						}, {
							key: "setMouseHandlers",
							value: function () {
								var e = function (e, t) {
									if (3 == t.which) return !t.data.self.br.protected;
									t.data.self.br.trigger(i.stop), t.data.self.br["L" === t.data.direction ? "left" : "right"]()
								};
								this.setClickHandler(this.br.prefetchedImgs[this.br.twoPage.currentIndexR], {
									self: this,
									direction: "R"
								}, e), this.setClickHandler(this.br.prefetchedImgs[this.br.twoPage.currentIndexL], {
									self: this,
									direction: "L"
								}, e)
							}
						}, {
							key: "prepareFlipLeftToRight",
							value: function (e, t) {
								this.br.prefetchImg(e), this.br.prefetchImg(t);
								var r = this.book._getPageHeight(e),
									o = this.book._getPageWidth(e),
									n = this.br.twoPage.middle,
									i = this.top(),
									a = this.br.twoPage.height * o / r,
									s = n + this.gutterOffsetForIndex(e),
									u = {
										position: "absolute",
										left: "".concat(s - a, "px"),
										right: "",
										top: "".concat(i, "px"),
										height: this.br.twoPage.height,
										width: "".concat(a, "px"),
										zIndex: 1
									};
								L(this.br.prefetchedImgs[e]).css(u);
								var c = this.br.refs.$brTwoPageView;
								c.append(this.br.prefetchedImgs[e]);
								var l = {
									position: "absolute",
									left: "".concat(s, "px"),
									right: "",
									top: "".concat(i, "px"),
									height: this.br.twoPage.height,
									width: "0",
									zIndex: 2
								};
								L(this.br.prefetchedImgs[t]).css(l), c.append(this.br.prefetchedImgs[t])
							}
						}, {
							key: "prepareFlipRightToLeft",
							value: function (e, t) {
								this.br.prefetchImg(e), this.br.prefetchImg(t);
								var r = this.book._getPageHeight(t),
									o = this.book._getPageWidth(t),
									n = this.br.twoPage.middle,
									i = this.top(),
									a = this.br.twoPage.height * o / r,
									s = n + this.gutterOffsetForIndex(e);
								L(this.br.prefetchedImgs[t]).css({
									position: "absolute",
									left: "".concat(s, "px"),
									top: "".concat(i, "px"),
									height: this.br.twoPage.height,
									width: "".concat(a, "px"),
									zIndex: 1
								});
								var u = this.br.refs.$brTwoPageView;
								u.append(this.br.prefetchedImgs[t]), r = this.book._getPageHeight(e), o = this.book._getPageWidth(e), a = this.br.twoPage.height * o / r, L(this.br.prefetchedImgs[e]).css({
									position: "absolute",
									right: "".concat(u.prop("clientWidth") - s, "px"),
									top: "".concat(i, "px"),
									height: this.br.twoPage.height,
									width: "0px",
									zIndex: 2
								}), u.append(this.br.prefetchedImgs[e])
							}
						}, {
							key: "getPageWidth",
							value: function (e) {
								var t = this.book._getPageHeight(e),
									r = this.book._getPageWidth(e);
								return Math.floor(this.br.twoPage.height * r / t)
							}
						}, {
							key: "gutter",
							value: function () {
								return this.br.twoPage.middle + this.gutterOffsetForIndex(this.br.twoPage.currentIndexL)
							}
						}, {
							key: "top",
							value: function () {
								return this.br.twoPage.coverExternalPadding + this.br.twoPage.coverInternalPadding
							}
						}, {
							key: "coverWidth",
							value: function (e) {
								return e + this.br.twoPage.edgeWidth + 2 * this.br.twoPage.coverInternalPadding
							}
						}, {
							key: "getViewCenter",
							value: function () {
								var e = this.br.refs,
									t = e.$brContainer,
									r = e.$brTwoPageView,
									o = {},
									n = t.offset(),
									i = r.offset();
								return o.percentageX = (n.left - i.left + (t.prop("clientWidth") >> 1)) / this.br.twoPage.totalWidth, o.percentageY = (n.top - i.top + (t.prop("clientHeight") >> 1)) / this.br.twoPage.totalHeight, o
							}
						}, {
							key: "centerView",
							value: function (e, t) {
								void 0 === e && (e = .5), void 0 === t && (t = .5);
								var r = this.br.refs.$brTwoPageView.width(),
									o = this.br.refs.$brContainer.prop("clientWidth"),
									n = e * r,
									i = this.br.refs.$brTwoPageView.height(),
									a = this.br.refs.$brContainer.prop("clientHeight"),
									s = t * i;
								r < o ? this.br.refs.$brTwoPageView.css("left", "".concat((o >> 1) - n, "px")) : (this.br.refs.$brTwoPageView.css("left", 0), this.br.refs.$brContainer.scrollLeft(n - (o >> 1))), i < a ? this.br.refs.$brTwoPageView.css("top", "".concat((a >> 1) - s, "px")) : (this.br.refs.$brTwoPageView.css("top", 0), this.br.refs.$brContainer.scrollTop(s - (a >> 1)))
							}
						}, {
							key: "flipAreaHeight",
							value: function () {
								return Math.floor(this.br.twoPage.height)
							}
						}, {
							key: "flipAreaWidth",
							value: function () {
								var e = .15 * this.br.twoPage.width;
								return Math.floor((0, o.clamp)(e, 10, 100))
							}
						}, {
							key: "flipAreaTop",
							value: function () {
								return Math.floor(this.br.twoPage.bookCoverDivTop + this.br.twoPage.coverInternalPadding)
							}
						}, {
							key: "leftFlipAreaLeft",
							value: function () {
								return Math.floor(this.br.twoPage.gutter - this.br.twoPage.scaledWL)
							}
						}, {
							key: "rightFlipAreaLeft",
							value: function () {
								return Math.floor(this.br.twoPage.gutter + this.br.twoPage.scaledWR - this.flipAreaWidth())
							}
						}, {
							key: "setHilightCss",
							value: function (e, t, r, o, n, i) {
								var a, s = this.book._getPageHeight(t),
									u = this.book._getPageWidth(t),
									c = this.br.twoPage.height / s,
									l = Math.floor(u * c),
									h = this.gutter();
								a = "L" == this.book.getPageSide(t) ? h - l : h;
								var p = this.top();
								L(e).css({
									width: "".concat((o - r) * c, "px"),
									height: "".concat((i - n) * c, "px"),
									left: "".concat(a + r * c, "px"),
									top: "".concat(p + n * c, "px")
								})
							}
						}, {
							key: "gutterOffsetForIndex",
							value: function (e) {
								var t = Math.floor((e / this.book.getNumLeafs() - .5) * this.br.twoPage.edgeWidth);
								return "rl" == this.br.pageProgression && (t *= -1), t
							}
						}, {
							key: "leafEdgeWidth",
							value: function (e) {
								return "L" == this.book.getPageSide(e) && "rl" != this.br.pageProgression ? Math.floor(e / this.book.getNumLeafs() * this.br.twoPage.edgeWidth + .5) : Math.floor((1 - e / this.book.getNumLeafs()) * this.br.twoPage.edgeWidth + .5)
							}
						}, {
							key: "jumpIndexForLeftEdgePageX",
							value: function (e) {
								var t;
								return "rl" != this.br.pageProgression ? (t = this.br.twoPage.currentIndexL - 10 * (L(this.leafEdgeL).offset().left + L(this.leafEdgeL).width() - e), t = (0, o.clamp)(Math.round(t), this.br.firstDisplayableIndex(), this.br.twoPage.currentIndexL - 2)) : (t = this.br.twoPage.currentIndexL + 10 * (L(this.leafEdgeL).offset().left + L(this.leafEdgeL).width() - e), t = (0, o.clamp)(Math.round(t), this.br.twoPage.currentIndexL + 2, this.br.lastDisplayableIndex()))
							}
						}, {
							key: "jumpIndexForRightEdgePageX",
							value: function (e) {
								var t;
								return "rl" != this.br.pageProgression ? (t = this.br.twoPage.currentIndexL + 10 * (e - L(this.leafEdgeR).offset().left), t = (0, o.clamp)(Math.round(t), this.br.twoPage.currentIndexL + 2, this.br.lastDisplayableIndex())) : (t = this.br.twoPage.currentIndexL - 10 * (e - L(this.leafEdgeR).offset().left), t = (0, o.clamp)(Math.round(t), this.br.firstDisplayableIndex(), this.br.twoPage.currentIndexL - 2))
							}
						}, {
							key: "prefetch",
							value: function () {
								for (var e = Math.max, t = Math.min, r = this.book, o = this.br.twoPage, n = o.currentIndexL, i = o.currentIndexR, a = r.getPage(e(0, t(n, i))), s = r.getPage(e(n, i)), u = 0; u < 4; u++) a && (this.br.prefetchImg(a.index), a = a.findPrev({
									combineConsecutiveUnviewables: !0
								})), s && (this.br.prefetchImg(s.index), s = s.findNext({
									combineConsecutiveUnviewables: !0
								}))
							}
						}]) && E(t.prototype, r), e
					}(),
					M = r(3609),
					$ = r(3609);

				function U(e, t) {
					var r;
					if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
						if (Array.isArray(e) || (r = function (e, t) {
								if (e) {
									if ("string" == typeof e) return F(e, t);
									var r = Object.prototype.toString.call(e).slice(8, -1);
									return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? F(e, t) : void 0
								}
							}(e)) || t && e && "number" == typeof e.length) {
							r && (e = r);
							var o = 0,
								n = function () {};
							return {
								s: n,
								n: function () {
									return o >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[o++]
									}
								},
								e: function (e) {
									throw e
								},
								f: n
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var i, a = !0,
						s = !1;
					return {
						s: function () {
							r = e[Symbol.iterator]()
						},
						n: function () {
							var e = r.next();
							return a = e.done, e
						},
						e: function (e) {
							s = !0, i = e
						},
						f: function () {
							try {
								a || null == r.return || r.return()
							} finally {
								if (s) throw i
							}
						}
					}
				}

				function F(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
					return o
				}

				function N(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function A() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = $.extend(!0, {}, A.defaultOptions, e, A.optionOverrides);
					this.setup(t)
				}

				function O(e, t, r) {
					var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
						i = function (e) {
							return e.br
						},
						a = function (e) {
							return e._overrideable[t]
						};
					n(e, r, i, A, o, a)
				} - 1 != location.toString().indexOf("_debugShowConsole=true") && M((function () {
					return (new l.E).init()
				})), A.version = "4.25.0", A.constMode1up = 1, A.constMode2up = 2, A.constModeThumb = 3, A.constNavAnimationDuration = 300, A.constResizeAnimationDuration = 100, A.eventNames = i, A.defaultOptions = {
					defaults: null,
					padding: 10,
					ui: "full",
					uiAutoHide: !1,
					thumbRowBuffer: 2,
					thumbColumns: 6,
					thumbMaxLoading: 4,
					thumbPadding: 10,
					flipSpeed: "fast",
					showToolbar: !0,
					showNavbar: !0,
					navBarTitle: "",
					showLogo: !0,
					logoURL: "https://archive.org",
					imagesBaseURL: "/BookReader/images/",
					reductionFactors: [{
						reduce: .5,
						autofit: null
					}, {
						reduce: 1,
						autofit: null
					}, {
						reduce: 2,
						autofit: null
					}, {
						reduce: 3,
						autofit: null
					}, {
						reduce: 4,
						autofit: null
					}, {
						reduce: 6,
						autofit: null
					}],
					onePage: {
						autofit: "auto"
					},
					twoPage: {
						coverInternalPadding: 0,
						coverExternalPadding: 0,
						bookSpineDivWidth: 64,
						autofit: "auto"
					},
					onePageMinBreakpoint: 800,
					bookTitle: "",
					bookUrl: null,
					bookUrlText: null,
					bookUrlTitle: null,
					enableBookTitleLink: !0,
					bookLanguage: null,
					metadata: [],
					thumbnail: null,
					bookUrlMoreInfo: null,
					enableExperimentalControls: !1,
					el: "#BookReader",
					pageProgression: "lr",
					protected: !1,
					plugins: {
						textSelection: null
					},
					vars: {},
					data: [],
					getNumLeafs: null,
					getPageWidth: null,
					getPageHeight: null,
					getPageURI: null,
					getPageSide: null,
					getSpreadIndices: null,
					getPageNum: null,
					getPageProp: null,
					leafNumToIndex: null,
					getEmbedCode: null,
					controls: {
						onePage: {
							label: "One-page view",
							visible: !0,
							className: "onepg"
						},
						twoPage: {
							label: "Two-page view",
							visible: !0,
							className: "twopg"
						},
						thumbnail: {
							label: "Thumbnail view",
							visible: !0,
							className: "thumb"
						},
						viewmode: {
							visible: !1,
							className: "viewmode",
							excludedModes: []
						}
					},
					startFullscreen: !1
				}, A.optionOverrides = {}, A.prototype.setup = function (e) {
					this.options = e, this.numLeafs = void 0, this.enableSearch = !1, this.suppressFragmentChange = !1, this.animationFinishedCallback = null, this.constMode1up = A.constMode1up, this.constMode2up = A.constMode2up, this.constModeThumb = A.constModeThumb, this.reduce = 4, this.defaults = e.defaults, this.padding = e.padding, this.mode = null, this.prevReadMode = null, this.ui = e.ui, this.uiAutoHide = e.uiAutoHide, this.thumbWidth = 100, this.thumbRowBuffer = e.thumbRowBuffer, this.thumbColumns = e.thumbColumns, this.thumbMaxLoading = e.thumbMaxLoading, this.thumbPadding = e.thumbPadding, this.displayedRows = [], this.displayedIndices = [], this.imgs = {}, this.prefetchedImgs = {}, this.animating = !1, this.flipSpeed = e.flipSpeed, this.flipDelay = e.flipDelay, this.twoPagePopUp = null, this.leafEdgeTmp = null, this.firstIndex = null, this.lastDisplayableIndex2up = null, this.isFullscreenActive = !1, this.lastScroll = null, this.showLogo = e.showLogo, this.logoURL = e.logoURL, this.imagesBaseURL = e.imagesBaseURL, this.reductionFactors = e.reductionFactors, this.onePage = e.onePage, this.twoPage = e.twoPage, this.onePageMinBreakpoint = e.onePageMinBreakpoint, this.bookTitle = e.bookTitle, this.bookUrl = e.bookUrl, this.bookUrlText = e.bookUrlText, this.bookUrlTitle = e.bookUrlTitle, this.titleLeaf = e.titleLeaf, this.metadata = e.metadata, this.thumbnail = e.thumbnail, this.bookUrlMoreInfo = e.bookUrlMoreInfo, this.enableExperimentalControls = e.enableExperimentalControls, this.el = e.el, this.pageProgression = e.pageProgression, this.protected = e.protected, this.getEmbedCode = e.getEmbedCode, this.popup = null, this.data = e.data, e.getNumLeafs && (A.prototype.getNumLeafs = e.getNumLeafs), e.getPageWidth && (A.prototype.getPageWidth = e.getPageWidth), e.getPageHeight && (A.prototype.getPageHeight = e.getPageHeight), e.getPageURI && (A.prototype.getPageURI = e.getPageURI), e.getPageSide && (A.prototype.getPageSide = e.getPageSide), e.getPageNum && (A.prototype.getPageNum = e.getPageNum), e.getPageProp && (A.prototype.getPageProp = e.getPageProp), e.getSpreadIndices && (A.prototype.getSpreadIndices = e.getSpreadIndices), e.leafNumToIndex && (A.prototype.leafNumToIndex = e.leafNumToIndex), this.refs = {}, this._models = {
						book: new _(this)
					}, this._components = {
						navbar: new u(this),
						toolbar: new f(this)
					}, this._modes = {
						mode1Up: new C(this, this._models.book),
						mode2Up: new B(this, this._models.book)
					}, this._overrideable = {
						"_models.book": this._models.book,
						"_components.navbar": this._components.navbar,
						"_components.toolbar": this._components.toolbar,
						"_modes.mode1Up": this._modes.mode1Up,
						"_modes.mode2Up": this._modes.mode2Up
					}
				}, Object.defineProperty(A.prototype, "leafEdgeL", {
					get: function () {
						return this._modes.mode2Up.leafEdgeL
					},
					set: function (e) {
						this._modes.mode2Up.leafEdgeL = e
					}
				}), Object.defineProperty(A.prototype, "leafEdgeR", {
					get: function () {
						return this._modes.mode2Up.leafEdgeR
					},
					set: function (e) {
						this._modes.mode2Up.leafEdgeR = e
					}
				}), A.util = o, A.prototype.extendParams = function (e, t) {
					var r = M.extend({}, t);
					if (void 0 !== r.page) {
						var o = this._models.book.parsePageString(r.page);
						isNaN(o) || (r.index = o), delete r.page
					}
					M.extend(e, r)
				}, A.prototype.initParams = function () {
					var e = {
						init: !0,
						pageFound: !1,
						fragmentChange: !1
					};
					if (void 0 !== this.titleLeaf && this._models.book.getNumLeafs() > 2 ? e.index = this._models.book.leafNumToIndex(this.titleLeaf) : e.index = 0, this.defaults) {
						var t = this.paramsFromFragment(this.defaults);
						void 0 !== t.page && (e.pageFound = !0), this.extendParams(e, t)
					}
					if (this.options.enablePageResume) {
						var r = this.getResumeValue();
						null !== r && (e.index !== r && (e.fragmentChange = !0), e.index = r)
					}
					if (this.options.enableUrlPlugin) {
						var n = this.paramsFromFragment(this.urlReadFragment());
						!Object.keys(n).length && this.urlReadHashFragment() && "history" === this.options.urlMode && (n = this.paramsFromFragment(this.urlReadHashFragment())), Object.keys(n).length && (void 0 !== n.page && (e.pageFound = !0), this.extendParams(e, n), e.fragmentChange = !0)
					}
					if (this.options.enableSearch && (this.goToFirstResult = !e.pageFound, !this.options.initialSearchTerm))
						if (e.search) this.options.initialSearchTerm = e.search;
						else {
							var i = new URLSearchParams(this.readQueryString()).get("q");
							i && (this.options.initialSearchTerm = o.decodeURIComponentPlus(i))
						}
					return this.suppressFragmentChange = !e.fragmentChange, e
				}, A.prototype.getLocationSearch = function () {
					return window.location.search
				}, A.prototype.getLocationHash = function () {
					return window.location.hash
				}, A.prototype.readQueryString = function () {
					var e = this.getLocationSearch();
					if (e) return e;
					var t = this.getLocationHash(),
						r = t.search(/\?\w+=/);
					return r > -1 ? t.slice(r) : ""
				}, A.prototype.getInitialMode = function (e) {
					var t, r = M(window).width();
					return t = void 0 !== e.mode ? e.mode : "full" == this.ui && this.enableMobileNav && this.isFullscreenActive && r <= this.onePageMinBreakpoint ? this.constMode1up : this.constMode2up, this.canSwitchToMode(t) || (t = this.constMode1up), t
				}, A.prototype.init = function () {
					this.init.initComplete = !1, this.pageScale = this.reduce;
					var e = this.initParams();
					this.firstIndex = e.index ? e.index : 0, this.isTouchDevice = !!("ontouchstart" in window) || !!("msmaxtouchpoints" in window.navigator), this.refs.$br = M(this.el).empty().removeClass().addClass("ui-" + this.ui).addClass("br-ui-" + this.ui).addClass("BookReader"), this.isTouchDevice ? this.refs.$br.addClass("touch") : this.refs.$br.addClass("no-touch"), this.refs.$brContainer = M("<div class='BRcontainer' dir='ltr'></div>"), this.refs.$br.append(this.refs.$brContainer), e.mode = this.getInitialMode(e), this.mode = e.mode, "embed" == this.ui && this.options.showNavbar ? this.initEmbedNavbar() : (this.options.showToolbar && this.initToolbar(this.mode, this.ui), this.options.showNavbar && this.initNavbar()), this.resizeBRcontainer(), this.updateFromParams(e), this.initUIStrings(), this.bindNavigationHandlers(), this.setupKeyListeners(), this.lastScroll = (new Date).getTime(), this.refs.$brContainer.bind("scroll", this, (function (e) {
						e.data.lastScroll = (new Date).getTime(), e.data.constMode2up != e.data.mode && e.data.drawLeafsThrottled()
					})), M(window).bind("resize", this, (function (e) {
						e.data.resize()
					})), M(window).on("orientationchange", this, function (e) {
						e.data.resize()
					}.bind(this)), this.protected && this.$(".BRicon.share").hide(), this.trigger(A.eventNames.PostInit), this.options.initialSearchTerm || (this.suppressFragmentChange = !1), this.init.initComplete = !0, this.options.startFullscreen && this.toggleFullscreen()
				}, A.prototype.trigger = function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
						r = "BookReader:" + e;
					M(document).trigger(r, t), o.polyfillCustomEvent(window), window.dispatchEvent(new CustomEvent(r, {
						bubbles: !0,
						composed: !0,
						detail: {
							props: t
						}
					}))
				}, A.prototype.bind = function (e, t) {
					M(document).bind("BookReader:" + e, t)
				}, A.prototype.unbind = function (e, t) {
					M(document).unbind("BookReader:" + e, t)
				}, A.prototype.resize = function () {
					if (this.init.initComplete) {
						if (this.resizeBRcontainer(), this.constMode1up == this.mode) "none" != this.onePage.autofit ? (this.resizePageView1up(), this.centerPageView(), this.enableSearch && this.updateSearchHilites()) : (this.centerPageView(), this.displayedIndices = [], this.enableSearch && this.updateSearchHilites(), this.drawLeafsThrottled());
						else if (this.constModeThumb == this.mode) this.prepareThumbnailView();
						else if (this.twoPage.autofit) this.prepareTwoPageView();
						else {
							var e = this.twoPageGetViewCenter(),
								t = !1;
							this.twoPage.totalWidth < this.refs.$brContainer.prop("clientWidth") && (e.percentageX = .5, t = !0), this.twoPage.totalHeight < this.refs.$brContainer.prop("clientHeight") && (e.percentageY = .5, t = !0), t && this.twoPageCenterView(e.percentageX, e.percentageY)
						}
						this.trigger(A.eventNames.resize)
					}
				}, A.prototype.setupKeyListeners = function () {
					var e = this;
					M(document).keydown((function (t) {
						if (!e.keyboardNavigationIsDisabled(t)) switch (t.keyCode) {
							case 33:
							case 38:
								e.constMode2up == e.mode && (t.preventDefault(), e.prev());
								break;
							case 40:
							case 34:
								e.constMode2up == e.mode && (t.preventDefault(), e.next());
								break;
							case 35:
								t.preventDefault(), e.last();
								break;
							case 36:
								t.preventDefault(), e.first();
								break;
							case 37:
								e.constModeThumb != e.mode && (t.preventDefault(), e.left());
								break;
							case 39:
								e.constModeThumb != e.mode && (t.preventDefault(), e.right());
								break;
							case 189:
							case 173:
							case 109:
								t.preventDefault(), e.zoom(-1);
								break;
							case 187:
							case 61:
							case 107:
								t.preventDefault(), e.zoom(1)
						}
					}))
				}, A.prototype.drawLeafs = function () {
					this.constMode1up == this.mode ? this.drawLeafsOnePage() : this.constModeThumb == this.mode ? this.drawLeafsThumbnail() : this.drawLeafsTwoPage()
				}, A.prototype._createPageContainer = function (e, t) {
					var r, o = this._models.book.getPage(e).pageSide,
						n = Object.assign({
							position: "absolute"
						}, t),
						i = (N(r = {}, this.constMode1up, "1up"), N(r, this.constMode2up, "2up"), N(r, this.constModeThumb, "thumb"), r),
						a = M("<div />", {
							class: "BRpagecontainer BRmode".concat(i[this.mode], " pagediv").concat(e),
							css: n
						}).attr("data-side", o).append(M("<div />", {
							class: "BRscreen"
						}));
					return a.toggleClass("protected", this.protected), a
				}, A.prototype.bindGestures = function (e) {
					var t = this,
						r = 1;
					e.unbind("touchmove").bind("touchmove", (function (e) {
						e.originalEvent.cancelable && (r = e.originalEvent.touches.length), e.stopPropagation()
					})), e.unbind("gesturechange").bind("gesturechange", (function (e) {
						e.preventDefault(), 2 !== r || (new Date).getTime() - t.lastScroll < 500 || (e.originalEvent.scale > 1.5 ? t.zoom(1) : e.originalEvent.scale < .6 && t.zoom(-1))
					}))
				}, A.prototype.drawLeafsThumbnail = function (e) {
					var t, r, n, i = this,
						a = Math.floor,
						s = this._models.book,
						u = this.refs.$brContainer.prop("scrollWidth") - 20,
						c = 0,
						l = 0,
						h = 0,
						p = 0,
						d = 0,
						f = [],
						g = U(s.pagesIterator({
							combineConsecutiveUnviewables: !0
						}));
					try {
						for (g.s(); !(n = g.n()).done;) {
							var b = n.value,
								v = this.thumbWidth;
							c + (v + this.thumbPadding) > u && (p++, c = 0, d = 0), f[p] || (f[p] = {}), f[p].leafs || (f[p].leafs = [], f[p].height = 0, f[p].top = 0), f[p].leafs[d] = {
								num: b.index,
								left: c
							}, (t = a(b.height * this.thumbWidth / b.width)) > f[p].height && (f[p].height = t), 0 === d && (l += this.thumbPadding + f[p].height), (c += v + this.thumbPadding) > h && (h = c), d++, b.index == e && (r = l - this.thumbPadding - f[p].height)
						}
					} catch (e) {
						g.e(e)
					} finally {
						g.f()
					}
					this.refs.$brPageViewEl.height(l);
					var m = a((this.refs.$brContainer.prop("scrollWidth") - h) / 2) - 14;
					void 0 !== r && this.refs.$brContainer.scrollTop(r);
					for (var w = this.refs.$brContainer.prop("scrollTop"), y = w + this.refs.$brContainer.height(), P = 0, x = 0, _ = [], k = s.getNumLeafs() - 1, R = 0, I = 0; I < f.length; I++) f[I] && (x += this.thumbPadding + f[I].height, (P >= w && P <= y || x >= w && x <= y || P <= w && x >= y) && (_.push(I), f[I].leafs[0].num < k && (k = f[I].leafs[0].num), f[I].leafs[f[I].leafs.length - 1].num > R && (R = f[I].leafs[f[I].leafs.length - 1].num)), P > f[I].top && (f[I].top = P), P = x);
					for (var S = _[0], T = _[_.length - 1], C = 1; C < this.thumbRowBuffer + 1; C++) T + C < f.length && _.push(T + C);
					for (var L = 1; L < this.thumbRowBuffer + 1; L++) S - L >= 0 && _.push(S - L);
					for (var E = 0, B = _; E < B.length; E++) {
						var $ = B[E];
						if (o.notInArray($, this.displayedRows)) {
							if (!f[$]) continue;
							var F, N = U(f[$].leafs);
							try {
								var O = function () {
									var e = F.value,
										t = e.num,
										r = e.left,
										o = i.thumbWidth,
										n = a(s.getPageHeight(t) * i.thumbWidth / s.getPageWidth(t)),
										c = f[$].top,
										l = r + m;
									"rl" == i.pageProgression && (l = u - o - l), l += i.thumbPadding;
									var h = i._createPageContainer(t, {
										width: "".concat(o, "px"),
										height: "".concat(n, "px"),
										top: "".concat(c, "px"),
										left: "".concat(l, "px")
									});
									h.data("leaf", t).on("mouseup", (function (e) {
										i.updateFirstIndex(t, {
											suppressFragmentChange: !0
										}), i.prevReadMode === i.constMode1up || i.prevReadMode === i.constMode2up ? i.switchMode(i.prevReadMode, {
											suppressFragmentChange: !0
										}) : i.switchMode(i.constMode1up, {
											suppressFragmentChange: !0
										}), i.trigger(A.eventNames.fragmentChange), e.stopPropagation()
									})), i.refs.$brPageViewEl.append(h);
									var p = document.createElement("img"),
										d = a(s.getPageWidth(t) / i.thumbWidth);
									M(p).attr("src", "".concat(i.imagesBaseURL, "transparent.png")).css({
										width: "".concat(o, "px"),
										height: "".concat(n, "px")
									}).addClass("BRlazyload").data("srcURL", i._getPageURI(t, d)), h.append(p)
								};
								for (N.s(); !(F = N.n()).done;) O()
							} catch (e) {
								N.e(e)
							} finally {
								N.f()
							}
						}
					}
					var D, W = U(this.displayedRows);
					try {
						for (W.s(); !(D = W.n()).done;) {
							var j = D.value;
							if (o.notInArray(j, _)) {
								var H, z = U(f[j].leafs);
								try {
									for (z.s(); !(H = z.n()).done;) {
										var V = H.value.num;
										this.$(".pagediv".concat(V)).remove()
									}
								} catch (e) {
									z.e(e)
								} finally {
									z.f()
								}
							}
						}
					} catch (e) {
						W.e(e)
					} finally {
						W.f()
					}
					var q = this.currentIndex();
					q < k ? this.updateFirstIndex(k) : q > R && this.updateFirstIndex(R), this.displayedRows = _.slice(), this.$(".BRpagedivthumb_highlight").removeClass("BRpagedivthumb_highlight"), this.$(".pagediv" + this.currentIndex()).addClass("BRpagedivthumb_highlight"), this.lazyLoadThumbnails(), this.updateToolbarZoom(this.reduce)
				}, A.prototype.lazyLoadThumbnails = function () {
					this.$(".BRlazyloading").filter("[complete=true]").removeClass("BRlazyloading");
					var e = this.$(".BRlazyloading").length,
						t = this.thumbMaxLoading - e,
						r = this;
					t > 0 && this.refs.$brPageViewEl.find("img.BRlazyload").filter(":lt(" + t + ")").each((function () {
						r.lazyLoadImage(this)
					}))
				}, A.prototype.lazyLoadImage = function (e) {
					var t = new Image,
						r = this;
					M(t).addClass("BRlazyloading").one("load", (function () {
						M(this).removeClass("BRlazyloading"), setTimeout((function () {
							r.lazyLoadThumbnails()
						}), 100)
					})).one("error", (function () {
						M(this).removeClass("BRlazyloading")
					})).css({
						width: M(e).width() + "px",
						height: M(e).height() + "px"
					}).attr({
						width: M(e).width(),
						height: M(e).height(),
						src: M(e).data("srcURL")
					}), M(e).before(t).remove(), t = null
				}, A.prototype.drawLeafsThrottled = o.throttle(A.prototype.drawLeafs, 250), A.prototype.zoom = function (e) {
					var t;
					switch (this.mode) {
						case this.constMode1up:
							1 == e ? this.zoom1up("in") : this.zoom1up("out");
							break;
						case this.constMode2up:
							1 == e ? this.zoom2up("in") : this.zoom2up("out");
							break;
						case this.constModeThumb:
							this.zoomThumb(e)
					}
					null === (t = this.textSelectionPlugin) || void 0 === t || t.stopPageFlip(this.refs.$brContainer)
				}, A.prototype.resizeBRcontainer = function (e) {
					e ? this.refs.$brContainer.animate({
						top: this.getToolBarHeight(),
						bottom: this.getFooterHeight()
					}, this.constResizeAnimationDuration, "linear") : this.refs.$brContainer.css({
						top: this.getToolBarHeight(),
						bottom: this.getFooterHeight()
					})
				}, A.prototype.centerPageView = function () {
					var e = this.refs.$brContainer.prop("scrollWidth"),
						t = this.refs.$brContainer.prop("clientWidth");
					e > t && this.refs.$brContainer.prop("scrollLeft", (e - t) / 2)
				}, A.prototype.zoomThumb = function (e) {
					var t = this.thumbColumns;
					switch (e) {
						case -1:
							this.thumbColumns += 1;
							break;
						case 1:
							this.thumbColumns -= 1
					}
					this.thumbColumns < 2 ? this.thumbColumns = 2 : this.thumbColumns > 8 && (this.thumbColumns = 8), this.thumbColumns != t && this.prepareThumbnailView()
				}, A.prototype.getThumbnailWidth = function (e) {
					var t = (e + 1) * this.thumbPadding,
						r = (this.refs.$brPageViewEl.width() - t) / (e + .5);
					return parseInt(r)
				}, A.prototype.quantizeReduce = function (e, t) {
					for (var r = t[0].reduce, o = Math.abs(e - r), n = 1; n < t.length; n++) {
						var i = Math.abs(e - t[n].reduce);
						i < o && (o = i, r = t[n].reduce)
					}
					return r
				}, A.prototype.nextReduce = function (e, t, r) {
					if ("in" === t) {
						for (var o = 0, n = 1; n < r.length; n++) r[n].reduce < e && (o = n);
						return r[o]
					}
					if ("out" === t) {
						for (var i = r.length - 1, a = i, s = i; s >= 0; s--) r[s].reduce > e && (a = s);
						return r[a]
					}
					if ("auto" === t) {
						var u = r.find((function (e) {
							return "auto" == e.autofit
						}));
						if (u) return u;
						for (var c = r.filter((function (e) {
								var t = e.autofit;
								return "height" == t || "width" == t
							})), l = null, h = 0; h < c.length; h++)(null === l || l.reduce < c[h].reduce) && (l = c[h]);
						if (l) return l
					} else if ("height" === t || "width" === t) {
						var p = r.find((function (e) {
							return e.autofit == t
						}));
						if (p) return p
					}
					return console.error("Could not find reduction factor for direction " + t), r[0]
				}, A.prototype._reduceSort = function (e, t) {
					return e.reduce - t.reduce
				}, A.prototype.jumpToPage = function (e) {
					var t = this._models.book.parsePageString(e);
					return void 0 !== t && (this.jumpToIndex(t), !0)
				}, A.prototype._isIndexDisplayed = function (e) {
					return this.constMode1up == this.mode ? this.displayedIndices.slice(1, -1).includes(e) : this.displayedIndices ? this.displayedIndices.includes(e) : this.currentIndex() == e
				}, A.prototype.jumpToIndex = function (e, t, r, o) {
					var n = this,
						i = this.currentIndex(),
						a = this._models.book.getPage(e);
					if (!a.isViewable && a.unviewablesStart != a.index) {
						var s = this._isIndexDisplayed(a.unviewablesStart) ? a.findNext({
							combineConsecutiveUnviewables: !0
						}).index : a.unviewablesStart;
						return this.jumpToIndex(s, t, r, o)
					}
					if (this.trigger(A.eventNames.stop), this.constMode2up == this.mode) e < Math.min(this.twoPage.currentIndexL, this.twoPage.currentIndexR) ? this.flipBackToIndex(e) : e > Math.max(this.twoPage.currentIndexL, this.twoPage.currentIndexR) && this.flipFwdToIndex(e);
					else if (this.constModeThumb == this.mode) {
						for (var u = Math.floor, c = this._models.book, l = this.refs.$brContainer.prop("scrollWidth") - 20, h = this.thumbWidth, p = 0, d = 0, f = 0, g = 0, b = 0, v = 0; v <= e; v++) {
							d + (h + this.thumbPadding) > l && (d = 0, g = 0, b = 0);
							var m = u(c.getPageHeight(b) * this.thumbWidth / c.getPageWidth(b), 10);
							m > g && (g = m), 0 == b && (p = f, f += this.thumbPadding + g), d += h + this.thumbPadding, b++
						}
						this.updateFirstIndex(e), this.refs.$brContainer.prop("scrollTop") == p ? this.drawLeafs() : (this.animating = !0, this.refs.$brContainer.stop(!0).animate({
							scrollTop: p
						}, "fast", (function () {
							n.animating = !1
						})))
					} else {
						var w = Math.abs,
							y = Math.floor,
							P = this.onePageGetPageTop(e),
							x = 0;
						if (r) {
							var _ = this.refs.$brContainer.prop("clientHeight");
							P += y(r / this.reduce) - y(_ / 2)
						} else P -= this.padding / 2;
						if (t) {
							var k = this.refs.$brContainer.prop("clientWidth");
							x += y(t / this.reduce) - y(k / 2)
						} else x = this.refs.$brContainer.scrollLeft();
						!o && w(i - e) <= 4 ? (this.animating = !0, this.refs.$brContainer.stop(!0).animate({
							scrollTop: P,
							scrollLeft: x
						}, "fast", (function () {
							n.animating = !1
						}))) : this.refs.$brContainer.stop(!0).prop("scrollTop", P)
					}
				}, A.prototype.getPrevReadMode = function (e) {
					return e === A.constMode1up || e === A.constMode2up ? e : null === this.prevReadMode ? A.constMode1up : void 0
				}, A.prototype.switchMode = function (e) {
					var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						o = r.suppressFragmentChange,
						n = void 0 !== o && o;
					if (this.init.initComplete) {
						if (e === this.mode) return;
						if (!this.canSwitchToMode(e)) return
					}
					this.trigger(A.eventNames.stop), this.enableSearch && this.removeSearchHilites(), this.prevReadMode = this.getPrevReadMode(this.mode), this.mode = e, this.pageScale !== this.reduce && (this.reduce = this.pageScale), this.constMode1up == e ? (this.onePageCalculateReductionFactors(), this.reduce = this.quantizeReduce(this.reduce, this.onePage.reductionFactors), this.prepareOnePageView()) : this.constModeThumb == e ? (this.reduce = this.quantizeReduce(this.reduce, this.reductionFactors), this.prepareThumbnailView()) : (this.twoPageCalculateReductionFactors(), this.reduce = this.quantizeReduce(this.reduce, this.twoPage.reductionFactors), this.prepareTwoPageView(), this.twoPageCenterView(.5, .5)), this.suppressFragmentChange || n || this.trigger(A.eventNames.fragmentChange);
					var i = e + "PageViewSelected";
					this.trigger(A.eventNames[i]), null === (t = this.textSelectionPlugin) || void 0 === t || t.stopPageFlip(this.refs.$brContainer)
				}, A.prototype.updateBrClasses = function () {
					var e = {};
					e[this.constMode1up] = "BRmode1up", e[this.constMode2up] = "BRmode2Up", e[this.constModeThumb] = "BRmodeThumb", this.refs.$br.removeClass("BRmode1up BRmode2Up BRmodeThumb").addClass(e[this.mode]), this.isFullscreen() ? (this.refs.$br.addClass("fullscreenActive"), M(document.body).addClass("BRfullscreenActive")) : (this.refs.$br.removeClass("fullscreenActive"), M(document.body).removeClass("BRfullscreenActive"))
				}, A.prototype.isFullscreen = function () {
					return this.isFullscreenActive
				}, A.prototype.toggleFullscreen = function () {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					this.isFullscreen() ? this.exitFullScreen() : this.enterFullscreen(e)
				}, A.prototype.enterFullscreen = function () {
					var e, t = this,
						r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						o = this.currentIndex();
					this.refs.$brContainer.css("opacity", 0), r && (this._fullscreenCloseHandler = function (e) {
						27 === e.keyCode && t.toggleFullscreen()
					}, M(document).keyup(this._fullscreenCloseHandler));
					var n = M(window).width();
					n <= this.onePageMinBreakpoint && this.switchMode(this.constMode1up), this.isFullscreenActive = !0, this.updateBrClasses(), this.refs.$brContainer.animate({
						opacity: 1
					}, "fast", "linear", (function () {
						t.resize(), t.jumpToIndex(o)
					})), null === (e = this.textSelectionPlugin) || void 0 === e || e.stopPageFlip(this.refs.$brContainer), this.trigger("fullscreenToggled")
				}, A.prototype.exitFullScreen = function () {
					var e;
					this.refs.$brContainer.css("opacity", 0), M(document).unbind("keyup", this._fullscreenCloseHandler), M(window).width() <= this.onePageMinBreakpoint && this.switchMode(this.constMode2up), this.isFullscreenActive = !1, this.updateBrClasses(), this.resize(), this.refs.$brContainer.animate({
						opacity: 1
					}, 400, "linear"), null === (e = this.textSelectionPlugin) || void 0 === e || e.stopPageFlip(this.refs.$brContainer), this.trigger("fullscreenToggled")
				}, A.prototype.prepareThumbnailView = function () {
					this.refs.$brContainer.empty(), this.refs.$brContainer.css({
						overflowY: "scroll",
						overflowX: "auto"
					}), this.refs.$brPageViewEl = M("<div class='BRpageview'></div>"), this.refs.$brContainer.append(this.refs.$brPageViewEl), this.refs.$brContainer.dragscrollable({
						preventDefault: !0
					}), this.bindGestures(this.refs.$brContainer), this.thumbWidth = this.getThumbnailWidth(this.thumbColumns), this.reduce = this._models.book.getPageWidth(0) / this.thumbWidth, this.displayedRows = [], this.drawLeafsThumbnail(this.currentIndex()), this.updateBrClasses()
				}, A.prototype.currentIndex = function () {
					if (this.mode == this.constMode1up || this.mode == this.constModeThumb) return this.firstIndex;
					if (this.mode == this.constMode2up) return o.clamp(this.firstIndex, 0, this._models.book.getNumLeafs() - 1);
					throw "currentIndex called for unimplemented mode " + this.mode
				}, A.prototype.updateFirstIndex = function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = t.suppressFragmentChange,
						o = void 0 !== r && r;
					this.firstIndex === e && (o = !0), this.firstIndex = e, this.suppressFragmentChange || o || this.trigger(A.eventNames.fragmentChange), this.options.initialSearchTerm && !o && (this.suppressFragmentChange = !1), this.trigger("pageChanged"), this.updateNavIndexThrottled(e)
				}, A.prototype.right = function () {
					"rl" != this.pageProgression ? this.next() : this.prev()
				}, A.prototype.rightmost = function () {
					"rl" != this.pageProgression ? this.last() : this.first()
				}, A.prototype.left = function () {
					"rl" != this.pageProgression ? this.prev() : this.next()
				}, A.prototype.leftmost = function () {
					"rl" != this.pageProgression ? this.first() : this.last()
				}, A.prototype.next = function () {
					this.constMode2up == this.mode ? (this.trigger(A.eventNames.stop), this.flipFwdToIndex(null)) : this.firstIndex < this.lastDisplayableIndex() && this.jumpToIndex(this.firstIndex + 1)
				}, A.prototype.prev = function () {
					this.firstIndex < 1 || (this.constMode2up == this.mode ? (this.trigger(A.eventNames.stop), this.flipBackToIndex(null)) : this.firstIndex >= 1 && this.jumpToIndex(this.firstIndex - 1))
				}, A.prototype.first = function () {
					this.jumpToIndex(this.firstDisplayableIndex())
				}, A.prototype.last = function () {
					this.jumpToIndex(this.lastDisplayableIndex())
				}, A.prototype.scrollDown = function () {
					return M.inArray(this.mode, [this.constMode1up, this.constModeThumb]) >= 0 && (this.mode == this.constMode1up && this.reduce >= this.onePageGetAutofitHeight() ? this.next() : (this.refs.$brContainer.stop(!0).animate({
						scrollTop: "+=" + this._scrollAmount() + "px"
					}, 400, "easeInOutExpo"), !0))
				}, A.prototype.scrollUp = function () {
					return M.inArray(this.mode, [this.constMode1up, this.constModeThumb]) >= 0 && (this.mode == this.constMode1up && this.reduce >= this.onePageGetAutofitHeight() ? this.prev() : (this.refs.$brContainer.stop(!0).animate({
						scrollTop: "-=" + this._scrollAmount() + "px"
					}, 400, "easeInOutExpo"), !0))
				}, A.prototype._scrollAmount = function () {
					return this.constMode1up == this.mode ? parseInt(this.refs.$brContainer.prop("clientHeight") - this._models.book.getPageHeight(this.currentIndex()) / this.reduce * .03) : parseInt(.9 * this.refs.$brContainer.prop("clientHeight"))
				}, A.prototype.prefetchImg = function (e) {
					var t = this._getPageURI(e),
						r = this._getPageURISrcset(e),
						o = !1;
					if ((null == this.prefetchedImgs[e] || t != this.prefetchedImgs[e].uri) && (o = !0), o) {
						var n = this._createPageContainer(e);
						M("<img />", {
							class: "BRpageimage",
							src: t,
							srcset: r
						}).appendTo(n), (e < 0 || e > this._models.book.getNumLeafs() - 1) && n.addClass("BRemptypage"), n[0].uri = t, this.prefetchedImgs[e] = n[0]
					}
				}, A.prototype.pruneUnusedImgs = function () {
					for (var e in this.prefetchedImgs) e != this.twoPage.currentIndexL && e != this.twoPage.currentIndexR && M(this.prefetchedImgs[e]).remove(), (e < this.twoPage.currentIndexL - 4 || e > this.twoPage.currentIndexR + 4) && delete this.prefetchedImgs[e]
				}, A.prototype.prepareOnePageView = C.prototype.prepare, O(C, "_modes.mode1Up", "prepare", "prepareOnePageView"), A.prototype.drawLeafsOnePage = C.prototype.drawLeafs, O(C, "_modes.mode1Up", "drawLeafs", "drawLeafsOnePage"), A.prototype.zoom1up = C.prototype.zoom, O(C, "_modes.mode1Up", "zoom", "zoom1up"), A.prototype.onePageGetAutofitWidth = C.prototype.getAutofitWidth, O(C, "_modes.mode1Up", "getAutofitWidth", "onePageGetAutofitWidth"), A.prototype.onePageGetAutofitHeight = C.prototype.getAutofitHeight, O(C, "_modes.mode1Up", "getAutofitHeight", "onePageGetAutofitHeight"), A.prototype.onePageGetPageTop = C.prototype.getPageTop, O(C, "_modes.mode1Up", "getPageTop", "onePageGetPageTop"), A.prototype.onePageCalculateReductionFactors = C.prototype.calculateReductionFactors, O(C, "_modes.mode1Up", "calculateReductionFactors", "onePageCalculateReductionFactors"), A.prototype.resizePageView1up = C.prototype.resizePageView, O(C, "_modes.mode1Up", "resizePageView", "resizePageView1up"), A.prototype.onePageCalculateViewDimensions = C.prototype.calculateViewDimensions, O(C, "_modes.mode1Up", "calculateViewDimensions", "onePageCalculateViewDimensions"), A.prototype.centerX1up = C.prototype.centerX, O(C, "_modes.mode1Up", "centerX", "centerX1up"), A.prototype.centerY1up = C.prototype.centerY, O(C, "_modes.mode1Up", "centerY", "centerY1up"), A.prototype.zoom2up = B.prototype.zoom, O(B, "_modes.mode2Up", "zoom", "zoom2up"), A.prototype.twoPageGetAutofitReduce = B.prototype.getAutofitReduce, O(B, "_modes.mode2Up", "getAutofitReduce", "twoPageGetAutofitReduce"), A.prototype.flipBackToIndex = B.prototype.flipBackToIndex, O(B, "_modes.mode2Up", "flipBackToIndex", "flipBackToIndex"), A.prototype.flipFwdToIndex = B.prototype.flipFwdToIndex, O(B, "_modes.mode2Up", "flipFwdToIndex", "flipFwdToIndex"), A.prototype.setHilightCss2UP = B.prototype.setHilightCss, O(B, "_modes.mode2Up", "setHilightCss", "setHilightCss2UP"), A.prototype.setClickHandler2UP = B.prototype.setClickHandler, O(B, "_modes.mode2Up", "setClickHandler", "setClickHandler2UP"), A.prototype.drawLeafsTwoPage = B.prototype.drawLeafs, O(B, "_modes.mode2Up", "drawLeafs", "drawLeafsTwoPage"), A.prototype.prepareTwoPageView = B.prototype.prepareTwoPageView, O(B, "_modes.mode2Up", "prepareTwoPageView", "prepareTwoPageView"), A.prototype.prepareTwoPagePopUp = B.prototype.preparePopUp, O(B, "_modes.mode2Up", "preparePopUp", "prepareTwoPagePopUp"), A.prototype.calculateSpreadSize = B.prototype.calculateSpreadSize, O(B, "_modes.mode2Up", "calculateSpreadSize", "calculateSpreadSize"), A.prototype.getIdealSpreadSize = B.prototype.getIdealSpreadSize, O(B, "_modes.mode2Up", "getIdealSpreadSize", "getIdealSpreadSize"), A.prototype.getSpreadSizeFromReduce = B.prototype.getSpreadSizeFromReduce, O(B, "_modes.mode2Up", "getSpreadSizeFromReduce", "getSpreadSizeFromReduce"), A.prototype.twoPageIsZoomedIn = B.prototype.isZoomedIn, O(B, "_modes.mode2Up", "isZoomedIn", "twoPageIsZoomedIn"), A.prototype.twoPageCalculateReductionFactors = B.prototype.calculateReductionFactors, O(B, "_modes.mode2Up", "calculateReductionFactors", "twoPageCalculateReductionFactors"), A.prototype.twoPageSetCursor = B.prototype.setCursor, O(B, "_modes.mode2Up", "setCursor", "twoPageSetCursor"), A.prototype.flipLeftToRight = B.prototype.flipLeftToRight, O(B, "_modes.mode2Up", "flipLeftToRight", "flipLeftToRight"), A.prototype.flipRightToLeft = B.prototype.flipRightToLeft, O(B, "_modes.mode2Up", "flipRightToLeft", "flipRightToLeft"), A.prototype.setMouseHandlers2UP = B.prototype.setMouseHandlers, O(B, "_modes.mode2Up", "setMouseHandlers", "setMouseHandlers2UP"), A.prototype.prepareFlipLeftToRight = B.prototype.prepareFlipLeftToRight, O(B, "_modes.mode2Up", "prepareFlipLeftToRight", "prepareFlipLeftToRight"), A.prototype.prepareFlipRightToLeft = B.prototype.prepareFlipRightToLeft, O(B, "_modes.mode2Up", "prepareFlipRightToLeft", "prepareFlipRightToLeft"), A.prototype.getPageWidth2UP = B.prototype.getPageWidth, O(B, "_modes.mode2Up", "getPageWidth", "getPageWidth2UP"), A.prototype.twoPageGutter = B.prototype.gutter, O(B, "_modes.mode2Up", "gutter", "twoPageGutter"), A.prototype.twoPageTop = B.prototype.top, O(B, "_modes.mode2Up", "top", "twoPageTop"), A.prototype.twoPageCoverWidth = B.prototype.coverWidth, O(B, "_modes.mode2Up", "coverWidth", "twoPageCoverWidth"), A.prototype.twoPageGetViewCenter = B.prototype.getViewCenter, O(B, "_modes.mode2Up", "getViewCenter", "twoPageGetViewCenter"), A.prototype.twoPageCenterView = B.prototype.centerView, O(B, "_modes.mode2Up", "centerView", "twoPageCenterView"), A.prototype.twoPageFlipAreaHeight = B.prototype.flipAreaHeight, O(B, "_modes.mode2Up", "flipAreaHeight", "twoPageFlipAreaHeight"), A.prototype.twoPageFlipAreaWidth = B.prototype.flipAreaWidth, O(B, "_modes.mode2Up", "flipAreaWidth", "twoPageFlipAreaWidth"), A.prototype.twoPageFlipAreaTop = B.prototype.flipAreaTop, O(B, "_modes.mode2Up", "flipAreaTop", "twoPageFlipAreaTop"), A.prototype.twoPageLeftFlipAreaLeft = B.prototype.leftFlipAreaLeft, O(B, "_modes.mode2Up", "leftFlipAreaLeft", "twoPageLeftFlipAreaLeft"), A.prototype.twoPageRightFlipAreaLeft = B.prototype.rightFlipAreaLeft, O(B, "_modes.mode2Up", "rightFlipAreaLeft", "twoPageRightFlipAreaLeft"), A.prototype.gutterOffsetForIndex = B.prototype.gutterOffsetForIndex, O(B, "_modes.mode2Up", "gutterOffsetForIndex", "gutterOffsetForIndex"), A.prototype.leafEdgeWidth = B.prototype.leafEdgeWidth, O(B, "_modes.mode2Up", "leafEdgeWidth", "leafEdgeWidth"), A.prototype.jumpIndexForLeftEdgePageX = B.prototype.jumpIndexForLeftEdgePageX, O(B, "_modes.mode2Up", "jumpIndexForLeftEdgePageX", "jumpIndexForLeftEdgePageX"), A.prototype.jumpIndexForRightEdgePageX = B.prototype.jumpIndexForRightEdgePageX, O(B, "_modes.mode2Up", "jumpIndexForRightEdgePageX", "jumpIndexForRightEdgePageX"), A.prototype.prefetch = B.prototype.prefetch, O(B, "_modes.mode2Up", "prefetch", "prefetch"), A.prototype.stopFlipAnimations = function () {
					this.trigger(A.eventNames.stop), this.leafEdgeTmp && M(this.leafEdgeTmp).stop(!1, !0), $.each(this.prefetchedImgs, (function () {
						M(this).stop(!1, !0)
					})), this.leafEdgeTmp && M(this.leafEdgeTmp).stop(!1, !0), $.each(this.prefetchedImgs, (function () {
						M(this).stop(!1, !0)
					}))
				}, A.prototype.keyboardNavigationIsDisabled = function (e) {
					return "INPUT" == e.target.tagName
				}, A.prototype.initNavbar = u.prototype.init, O(u, "_components.navbar", "init", "initNavbar"), A.prototype.getNavPageNumString = u.prototype.getNavPageNumString, O(u, "_components.navbar", "getNavPageNumString"), A.prototype.initEmbedNavbar = u.prototype.initEmbed, O(u, "_components.navbar", "initEmbed", "initEmbedNavbar"), A.prototype.getNavPageNumHtml = c, A.prototype.updateNavPageNum = u.prototype.updateNavPageNum, O(u, "_components.navbar", "updateNavPageNum"), A.prototype.updateNavIndex = u.prototype.updateNavIndex, O(u, "_components.navbar", "updateNavIndex"), A.prototype.updateNavIndexThrottled = o.throttle(A.prototype.updateNavIndex, 250, !1), A.prototype.updateNavIndexDebounced = o.debounce(A.prototype.updateNavIndex, 500, !1), A.prototype.buildToolbarElement = f.prototype.buildToolbarElement, O(f, "_components.toolbar", "buildToolbarElement"), A.prototype.initToolbar = f.prototype.initToolbar, O(f, "_components.toolbar", "initToolbar"), A.prototype.buildShareDiv = f.prototype.buildShareDiv, O(f, "_components.toolbar", "buildShareDiv"), A.prototype.buildInfoDiv = f.prototype.buildInfoDiv, O(f, "_components.toolbar", "buildInfoDiv"), A.prototype.getToolBarHeight = f.prototype.getToolBarHeight, O(f, "_components.toolbar", "getToolBarHeight"), A.prototype.updateToolbarZoom = f.prototype.updateToolbarZoom, O(f, "_components.toolbar", "updateToolbarZoom"), A.prototype.blankInfoDiv = g, A.prototype.blankShareDiv = b, A.prototype.createPopup = v, A.prototype.bindNavigationHandlers = function () {
					var e = this,
						t = this,
						r = this.$(".BRicon").add(".BRmobileMenu .BRicon"),
						o = {
							book_left: function () {
								e.trigger(A.eventNames.stop), e.left()
							},
							book_right: function () {
								e.trigger(A.eventNames.stop), e.right()
							},
							book_up: function () {
								M.inArray(e.mode, [e.constMode1up, e.constModeThumb]) >= 0 ? e.scrollUp() : e.prev()
							},
							book_down: function () {
								M.inArray(e.mode, [e.constMode1up, e.constModeThumb]) >= 0 ? e.scrollDown() : e.next()
							},
							book_top: this.first.bind(this),
							book_bottom: this.last.bind(this),
							book_leftmost: this.leftmost.bind(this),
							book_rightmost: this.rightmost.bind(this),
							onepg: function () {
								e.switchMode(t.constMode1up)
							},
							thumb: function () {
								e.switchMode(t.constModeThumb)
							},
							twopg: function () {
								e.switchMode(t.constMode2up)
							},
							zoom_in: function () {
								e.trigger(A.eventNames.stop), e.zoom(1), e.trigger(A.eventNames.zoomIn)
							},
							zoom_out: function () {
								e.trigger(A.eventNames.stop), e.zoom(-1), e.trigger(A.eventNames.zoomOut)
							},
							full: function () {
								if ("embed" == e.ui) {
									var t = e.$(".BRembedreturn a").attr("href");
									window.open(t)
								} else e.toggleFullscreen()
							}
						};
					r.filter(".fit").bind("fit", (function () {}));
					var n = function (e) {
						r.filter(".".concat(e)).on("click.bindNavigationHandlers", (function () {
							return o[e](), !1
						}))
					};
					for (var i in o) n(i);
					var a = this.$(".BRnavCntlBtm"),
						s = this.$(".BRnavCntlTop");
					this.$(".BRnavCntl").click((function () {
						var e = [];
						a.hasClass("BRdn") ? (t.refs.$BRtoolbar && e.push(t.refs.$BRtoolbar.animate({
							top: -1 * t.getToolBarHeight()
						}).promise()), e.push(t.$(".BRfooter").animate({
							bottom: -1 * t.getFooterHeight()
						}).promise()), a.addClass("BRup").removeClass("BRdn"), s.addClass("BRdn").removeClass("BRup"), t.$(".BRnavCntlBtm.BRnavCntl").animate({
							height: "45px"
						}), t.$(".BRnavCntl").delay(1e3).animate({
							opacity: .75
						}, 1e3)) : (t.refs.$BRtoolbar && e.push(t.refs.$BRtoolbar.animate({
							top: 0
						}).promise()), e.push(t.$(".BRfooter").animate({
							bottom: 0
						}).promise()), a.addClass("BRdn").removeClass("BRup"), s.addClass("BRup").removeClass("BRdn"), t.$(".BRnavCntlBtm.BRnavCntl").animate({
							height: "30px"
						}), t.$(".BRvavCntl").animate({
							opacity: 1
						})), M.when.apply(M, e).done((function () {
							t.mode == t.constMode2up && null != t.twoPage.autofit && "none" != t.twoPage.autofit || t.mode == t.constMode1up && null != t.onePage.autofit && "none" != t.onePage.autofit ? t.resize() : t.resizeBRcontainer()
						}))
					})), a.mouseover((function () {
						M(this).hasClass("BRup") && t.$(".BRnavCntl").animate({
							opacity: 1
						}, 250)
					})).mouseleave((function () {
						M(this).hasClass("BRup") && t.$(".BRnavCntl").animate({
							opacity: .75
						}, 250)
					})), s.mouseover((function () {
						M(this).hasClass("BRdn") && t.$(".BRnavCntl").animate({
							opacity: 1
						}, 250)
					})).mouseleave((function () {
						M(this).hasClass("BRdn") && t.$(".BRnavCntl").animate({
							opacity: .75
						}, 250)
					})), this.initSwipeData(), M(document).off("mousemove.navigation", this.el), M(document).on("mousemove.navigation", this.el, {
						br: this
					}, this.navigationMousemoveHandler), M(document).off("mousedown.swipe", ".BRpageimage"), M(document).on("mousedown.swipe", ".BRpageimage", {
						br: this
					}, this.swipeMousedownHandler), this.bindMozTouchHandlers()
				}, A.prototype.unbindNavigationHandlers = function () {
					M(document).off("mousemove.navigation", this.el)
				}, A.prototype.navigationMousemoveHandler = function (e) {
					if (e.data.br.uiAutoHide) {
						var t = M(document).height() - 75;
						e.pageY < 76 || e.pageY > t ? e.data.br.hideNavigation() : e.data.br.showNavigation()
					}
				}, A.prototype.initSwipeData = function (e, t) {
					this._swipe = {
						mightBeSwiping: !1,
						didSwipe: !1,
						mightBeDraggin: !1,
						didDrag: !1,
						startTime: (new Date).getTime(),
						startX: e,
						startY: t,
						lastX: e,
						lastY: t,
						deltaX: 0,
						deltaY: 0,
						deltaT: 0
					}
				}, A.prototype.swipeMousedownHandler = function (e) {
					var t = e.data.br;
					return 3 == e.which ? !t.protected : (M(e.target).bind("mouseout.swipe", {
						br: t
					}, t.swipeMouseupHandler).bind("mouseup.swipe", {
						br: t
					}, t.swipeMouseupHandler).bind("mousemove.swipe", {
						br: t
					}, t.swipeMousemoveHandler), t.initSwipeData(e.clientX, e.clientY), t._swipe.mightBeSwiping = !0, t._swipe.mightBeDragging = !0, e.preventDefault(), e.returnValue = !1, e.cancelBubble = !0, !1)
				}, A.prototype.swipeMousemoveHandler = function (e) {
					var t = e.data.br,
						r = t._swipe;
					if (r.mightBeSwiping) {
						r.deltaX = e.clientX - r.startX, r.deltaY = e.clientY - r.startY, r.deltaT = (new Date).getTime() - r.startTime;
						var o = Math.abs(r.deltaX),
							n = Math.abs(r.deltaY),
							i = Math.min(t.refs.$br.width() / 5, 80);
						return o > n && o > i && r.deltaT < 400 && (r.mightBeSwiping = !1, r.didSwipe = !0, t.mode == t.constMode2up && (r.deltaX < 0 ? t.right() : t.left())), r.deltaT > 400 && !r.didSwipe && r.mightBeDragging && (r.didDrag = !0, t.refs.$brContainer.scrollTop(t.refs.$brContainer.scrollTop() - e.clientY + r.lastY).scrollLeft(t.refs.$brContainer.scrollLeft() - e.clientX + r.lastX)), r.lastX = e.clientX, r.lastY = e.clientY, e.preventDefault(), e.returnValue = !1, e.cancelBubble = !0, !1
					}
				}, A.prototype.swipeMouseupHandler = function (e) {
					var t = e.data.br._swipe;
					return t.mightBeSwiping = !1, t.mightBeDragging = !1, M(e.target).unbind("mouseout.swipe").unbind("mouseup.swipe").unbind("mousemove.swipe"), !t.didSwipe && !t.didDrag || (e.preventDefault(), e.returnValue = !1, e.cancelBubble = !0, !1)
				}, A.prototype.bindMozTouchHandlers = function () {
					var e = this;
					this.refs.$br.bind("MozTouchDown", (function (t) {
						this.mode == e.constMode2up && t.preventDefault()
					})).bind("MozTouchMove", (function (t) {
						this.mode == e.constMode2up && t.preventDefault()
					})).bind("MozTouchUp", (function (t) {
						this.mode == e.constMode2up && t.preventDefault()
					}))
				}, A.prototype.navigationIsVisible = function () {
					return 0 == this.refs.$BRtoolbar.position().top
				}, A.prototype.setNavigationView = function (e) {
					var t = this.constNavAnimationDuration,
						r = "linear",
						o = function () {
							this.constMode2up !== this.mode && this.resizeBRcontainer(!0), this.trigger(A.eventNames.navToggled)
						}.bind(this),
						n = 0,
						i = 0;
					e ? (n = -1 * this.getToolBarHeight(), i = -1 * this.getFooterHeight(), this.refs.$BRtoolbar.addClass("js-menu-hide"), this.refs.$BRfooter.addClass("js-menu-hide")) : (this.refs.$BRtoolbar.removeClass("js-menu-hide"), this.refs.$BRfooter.removeClass("js-menu-hide")), this.refs.$BRtoolbar.animate({
						top: n
					}, t, r, o), this.refs.$BRfooter.animate({
						bottom: i
					}, t, r, o)
				}, A.prototype.hideNavigation = function () {
					this.navigationIsVisible() && this.setNavigationView(!0)
				}, A.prototype.showNavigation = function () {
					this.navigationIsVisible() || this.setNavigationView()
				}, A.prototype.firstDisplayableIndex = function () {
					return this.mode != this.constMode2up ? 0 : "rl" != this.pageProgression ? "L" == this._models.book.getPageSide(0) ? 0 : -1 : "R" == this._models.book.getPageSide(0) ? 0 : -1
				}, A.prototype.lastDisplayableIndex = function () {
					var e = this._models.book.getNumLeafs() - 1;
					return this.mode != this.constMode2up ? e : "rl" != this.pageProgression ? "R" == this._models.book.getPageSide(e) ? e : e + 1 : "L" == this._models.book.getPageSide(e) ? e : e + 1
				}, A.prototype.getMedianPageSize = _.prototype.getMedianPageSize, O(_, "_models.book", "getMedianPageSize"), A.prototype._getPageWidth = _.prototype._getPageWidth, O(_, "_models.book", "_getPageWidth"), A.prototype._getPageHeight = _.prototype._getPageHeight, O(_, "_models.book", "_getPageHeight"), A.prototype.getPageIndex = _.prototype.getPageIndex, O(_, "_models.book", "getPageIndex"), A.prototype.getPageIndices = _.prototype.getPageIndices, O(_, "_models.book", "getPageIndices"), A.prototype.getPageName = _.prototype.getPageName, O(_, "_models.book", "getPageName"), A.prototype.getNumLeafs = _.prototype.getNumLeafs, O(_, "_models.book", "getNumLeafs"), A.prototype.getPageWidth = _.prototype.getPageWidth, O(_, "_models.book", "getPageWidth"), A.prototype.getPageHeight = _.prototype.getPageHeight, O(_, "_models.book", "getPageHeight"), A.prototype.getPageURI = _.prototype.getPageURI, O(_, "_models.book", "getPageURI"), A.prototype.getPageSide = _.prototype.getPageSide, O(_, "_models.book", "getPageSide"), A.prototype.getPageNum = _.prototype.getPageNum, O(_, "_models.book", "getPageNum"), A.prototype.getPageProp = _.prototype.getPageProp, O(_, "_models.book", "getPageProp"), A.prototype.getSpreadIndices = _.prototype.getSpreadIndices, O(_, "_models.book", "getSpreadIndices"), A.prototype.leafNumToIndex = _.prototype.leafNumToIndex, O(_, "_models.book", "leafNumToIndex"), A.prototype.parsePageString = _.prototype.parsePageString, O(_, "_models.book", "parsePageString"), A.prototype._getDataFlattened = _.prototype._getDataFlattened, O(_, "_models.book", "_getDataFlattened"), A.prototype._getDataProp = _.prototype._getDataProp, O(_, "_models.book", "_getDataProp"), A.prototype.updateFromParams = function (e) {
					var t = e.mode,
						r = void 0 === t ? 0 : t,
						o = e.init,
						n = void 0 !== o && o,
						i = e.fragmentChange,
						a = void 0 !== i && i;
					r && this.switchMode(r, {
						init: n,
						suppressFragmentChange: !a
					}), void 0 !== e.index ? e.index != this.currentIndex() && this.jumpToIndex(e.index) : void 0 !== e.page && e.page != this._models.book.getPageNum(this.currentIndex()) && this.jumpToPage(e.page), this.enableSearch && void 0 !== e.search && this.searchTerm !== e.search && this.$(".BRsearchInput").val(e.search), this.enableThemesPlugin && void 0 !== e.theme && this.updateTheme(e.theme)
				}, A.prototype.canSwitchToMode = function (e) {
					return e != this.constMode2up && e != this.constModeThumb || !(this._models.book.getNumLeafs() < 2)
				}, A.prototype._getPageURISrcset = function (e, t, r) {
					var o = this;
					if (e < 0 || e >= this._models.book.getNumLeafs()) return "";
					var n = t;
					void 0 === t && (n = this._models.book.getPageHeight(e) / this.twoPage.height);
					var i = [16, 8, 4, 2, 1];
					return n < 2 ? "" : (n < 4 ? i = [1] : n < 8 ? i = [2, 1] : n < 16 ? i = [4, 2, 1] : n < 32 && (i = [8, 4, 2, 1]), i.map((function (t, n) {
						return o._models.book.getPageURI(e, i[n], r) + " " + Math.pow(2, n + 1) + "x"
					})).join(", "))
				}, A.prototype._getPageURI = function (e, t, r) {
					if (e < 0 || e >= this._models.book.getNumLeafs()) return this.imagesBaseURL + "transparent.png";
					if (void 0 === t) {
						var o = this._models.book.getPageHeight(e) / this.twoPage.height;
						t = o < 2 ? 1 : o < 4 ? 2 : o < 8 ? 4 : o < 16 ? 8 : o < 32 ? 16 : 32
					}
					return this._models.book.getPageURI(e, t, r)
				}, A.prototype.showProgressPopup = function (e) {
					if (!this.popup) {
						this.popup = document.createElement("div"), M(this.popup).prop("className", "BRprogresspopup");
						var t = document.createElement("div");
						if (M(t).css({
								height: "20px"
							}).prop("className", "BRprogressbar"), M(this.popup).append(t), e) {
							var r = document.createElement("div");
							r.innerHTML = e, M(this.popup).append(r)
						}
						M(this.popup).appendTo(this.refs.$br)
					}
				}, A.prototype.removeProgressPopup = function () {
					M(this.popup).remove(), this.$(".BRprogresspopup").remove(), this.popup = null
				}, A.prototype.initUIStrings = function () {
					var e = {
						".logo": "Go to Archive.org",
						".zoom_in": "Zoom in",
						".zoom_out": "Zoom out",
						".onepg": "One-page view",
						".twopg": "Two-page view",
						".thumb": "Thumbnail view",
						".print": "Print this page",
						".embed": "Embed BookReader",
						".link": "Link to this book (and page)",
						".bookmark": "Bookmark this page",
						".share": "Share this book",
						".info": "About this book",
						".full": "Toggle fullscreen",
						".book_left": "Flip left",
						".book_right": "Flip right",
						".book_up": "Page up",
						".book_down": "Page down",
						".play": "Play",
						".pause": "Pause",
						".BRdn": "Show/hide nav bar",
						".BRup": "Show/hide nav bar",
						".book_top": "First page",
						".book_bottom": "Last page",
						".book_leftmost": "First page",
						".book_rightmost": "Last page"
					};
					for (var t in "rl" == this.pageProgression && (e[".book_leftmost"] = "Last page", e[".book_rightmost"] = "First page"), e) this.$(t).prop("title", e[t])
				}, A.prototype.reloadImages = function () {
					this.refs.$brContainer.find("img").each((function (e, t) {
						if (!t.complete || 0 === t.naturalHeight) {
							var r = t.src;
							t.src = "", setTimeout((function () {
								t.src = r
							}), 1e3)
						}
					}))
				}, A.prototype.getFooterHeight = function () {
					var e = this.mode == this.constMode2up ? this.refs.$BRfooter : this.refs.$BRnav;
					if (e && this.refs.$BRfooter) {
						var t = e.outerHeight(),
							r = parseInt(this.refs.$BRfooter.css("bottom"));
						if (!isNaN(t) && !isNaN(r)) return t + r
					}
					return 0
				}, A.prototype.paramsFromCurrent = function () {
					var e = {},
						t = this.currentIndex(),
						r = this._models.book.getPageNum(t);
					return (0 === r || r) && (e.page = r), e.index = t, e.mode = this.mode, this.enableSearch && (e.search = this.searchTerm), e
				}, A.prototype.paramsFromFragment = function (e) {
					var t = {};
					"#" == e.substr(0, 1) && (e = e.substr(1));
					var r = parseInt(/^\d+$/.exec(e));
					if (!isNaN(r)) return t.index = r, t;
					for (var n = e.split("/"), i = {}, a = 0; a < n.length; a += 2) i[n[a]] = n[a + 1];
					return "1up" == i.mode ? t.mode = this.constMode1up : "2up" == i.mode ? t.mode = this.constMode2up : "thumb" == i.mode && (t.mode = this.constModeThumb), void 0 !== i.page && (t.page = i.page), null != i.search && (t.search = o.decodeURIComponentPlus(i.search)), null != i.theme && (t.theme = i.theme), t
				}, A.prototype.fragmentFromParams = function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hash",
						r = "/",
						n = [];
					if (void 0 !== e.page ? n.push("page", e.page) : void 0 !== e.index && n.push("page", "n" + e.index), void 0 !== e.mode)
						if (e.mode == this.constMode1up) n.push("mode", "1up");
						else if (e.mode == this.constMode2up) n.push("mode", "2up");
					else {
						if (e.mode != this.constModeThumb) throw "fragmentFromParams called with unknown mode " + e.mode;
						n.push("mode", "thumb")
					}
					return e.search && "hash" === t && n.push("search", e.search), o.encodeURIComponentPlus(n.join(r)).replace(/%2F/g, "/")
				}, A.prototype.queryStringFromParams = function (e, t) {
					var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hash",
						o = new URLSearchParams(t);
					e.search && "history" === r && o.set("q", e.search);
					var n = o.toString();
					return n ? "?" + n : ""
				}, A.prototype.$ = function (e) {
					return this.refs.$br.find(e)
				}, $.curCSS = function (e, t, r) {
					return $(e).css(t, r)
				}, window.BookReader = A
			},
			6100: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.d(__webpack_exports__, {
					E: function () {
						return DebugConsole
					}
				});
				var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9826),
					core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__),
					core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9600),
					core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__),
					core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1249),
					core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__),
					$ = __webpack_require__(3609);

				function _classCallCheck(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function _defineProperties(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}

				function _createClass(e, t, r) {
					return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
				}
				var DebugConsole = function () {
					function DebugConsole() {
						_classCallCheck(this, DebugConsole), this.currentRun = 0
					}
					return _createClass(DebugConsole, [{
						key: "init",
						value: function init() {
							var _this = this;
							this.$log = $('<div id="_debugLog" style="width: 100%; height: 300px; overflow: auto" />'), $(document.body).prepend(this.$log), this.$form = $('\n    <form>\n      <input style="width:100%; font-family: monospace;" id="_debugLogInput">\n    </form>'), this.$log.append(this.$form), this.$form.submit((function (ev) {
								ev.preventDefault();
								var result = eval(_this.$form.find("input").val());
								_this.logToScreen([result])
							}));
							var _realLog = console.log.bind(console);
							console.log = function () {
								for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
								_realLog.apply(void 0, t), _this.logToScreen(t)
							}, window.onerror = function () {
								for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
								return _this.logToScreen(t)
							}
						}
					}, {
						key: "logToScreen",
						value: function (e) {
							var t = e.map(JSON.stringify).join(","),
								r = this.$log.children(".log-entry:last-child");
							r.find(".entry-code").html() == t ? r.find(".count").text("(".concat(++this.currentRun, ")")) : (this.currentRun = 1, this.$log.append($('\n        <div class="log-entry">\n          <code class="count"></code> <code class="entry-code">'.concat(t, "</code>\n        </div>"))))
						}
					}]), DebugConsole
				}()
			},
			7112: function (e, t, r) {
				"use strict";

				function o(e) {
					e.bind("mousedown", (function () {
						return !1
					})), e[0].onselectstart = function () {
						return !1
					}
				}

				function n(e, t, r) {
					return Math.min(Math.max(e, t), r)
				}

				function i(e, t) {
					return e / t * 100 + "%"
				}

				function a(e, t) {
					return !t.includes(e)
				}

				function s(e) {
					var t = e.contentWindow || e.contentDocument;
					return t.document || t
				}

				function u(e) {
					return e.replace(/&/g, "&").replace(/>/g, ">").replace(/</g, "<").replace(/"/g, "")
				}

				function c(e) {
					return decodeURIComponent(e).replace(/\+/g, " ")
				}

				function l(e) {
					return encodeURIComponent(e).replace(/%20/g, "+")
				}

				function h(e, t, r) {
					var o;
					return function () {
						var n = this,
							i = arguments,
							a = function () {
								o = null, r || e.apply(n, i)
							},
							s = r && !o;
						clearTimeout(o), o = setTimeout(a, t), s && e.apply(n, i)
					}
				}

				function p(e, t, r) {
					var o, n;
					return t || (t = 250), r && (o = +new Date),
						function () {
							var r = this,
								i = +new Date,
								a = arguments;
							o && i < o + t ? (clearTimeout(n), n = setTimeout((function () {
								o = i, e.apply(r, a)
							}), t)) : (o = i, e.apply(r, a))
						}
				}

				function d(e) {
					if ("function" == typeof e.CustomEvent) return !1;
					e.CustomEvent = f
				}

				function f(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = t.bubbles,
						o = void 0 !== r && r,
						n = t.cancelable,
						i = void 0 !== n && n,
						a = t.detail,
						s = void 0 === a ? null : a,
						u = document.createEvent("CustomEvent");
					return u.initCustomEvent(e, o, i, s), u
				}
				r.r(t), r.d(t, {
					disableSelect: function () {
						return o
					},
					clamp: function () {
						return n
					},
					cssPercentage: function () {
						return i
					},
					notInArray: function () {
						return a
					},
					getIFrameDocument: function () {
						return s
					},
					escapeHTML: function () {
						return u
					},
					decodeURIComponentPlus: function () {
						return c
					},
					encodeURIComponentPlus: function () {
						return l
					},
					debounce: function () {
						return h
					},
					throttle: function () {
						return p
					},
					polyfillCustomEvent: function () {
						return d
					},
					PolyfilledCustomEvent: function () {
						return f
					}
				}), r(6699), r(4916), r(2023), r(5306)
			},
			3099: function (e) {
				e.exports = function (e) {
					if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
					return e
				}
			},
			6077: function (e, t, r) {
				var o = r(111);
				e.exports = function (e) {
					if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
					return e
				}
			},
			1223: function (e, t, r) {
				var o = r(5112),
					n = r(30),
					i = r(3070),
					a = o("unscopables"),
					s = Array.prototype;
				null == s[a] && i.f(s, a, {
					configurable: !0,
					value: n(null)
				}), e.exports = function (e) {
					s[a][e] = !0
				}
			},
			1530: function (e, t, r) {
				"use strict";
				var o = r(8710).charAt;
				e.exports = function (e, t, r) {
					return t + (r ? o(e, t).length : 1)
				}
			},
			5787: function (e) {
				e.exports = function (e, t, r) {
					if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
					return e
				}
			},
			9670: function (e, t, r) {
				var o = r(111);
				e.exports = function (e) {
					if (!o(e)) throw TypeError(String(e) + " is not an object");
					return e
				}
			},
			8457: function (e, t, r) {
				"use strict";
				var o = r(9974),
					n = r(7908),
					i = r(3411),
					a = r(7659),
					s = r(7466),
					u = r(6135),
					c = r(1246);
				e.exports = function (e) {
					var t, r, l, h, p, d, f = n(e),
						g = "function" == typeof this ? this : Array,
						b = arguments.length,
						v = b > 1 ? arguments[1] : void 0,
						m = void 0 !== v,
						w = c(f),
						y = 0;
					if (m && (v = o(v, b > 2 ? arguments[2] : void 0, 2)), null == w || g == Array && a(w))
						for (r = new g(t = s(f.length)); t > y; y++) d = m ? v(f[y], y) : f[y], u(r, y, d);
					else
						for (p = (h = w.call(f)).next, r = new g; !(l = p.call(h)).done; y++) d = m ? i(h, v, [l.value, y], !0) : l.value, u(r, y, d);
					return r.length = y, r
				}
			},
			1318: function (e, t, r) {
				var o = r(5656),
					n = r(7466),
					i = r(1400),
					a = function (e) {
						return function (t, r, a) {
							var s, u = o(t),
								c = n(u.length),
								l = i(a, c);
							if (e && r != r) {
								for (; c > l;)
									if ((s = u[l++]) != s) return !0
							} else
								for (; c > l; l++)
									if ((e || l in u) && u[l] === r) return e || l || 0;
							return !e && -1
						}
					};
				e.exports = {
					includes: a(!0),
					indexOf: a(!1)
				}
			},
			2092: function (e, t, r) {
				var o = r(9974),
					n = r(8361),
					i = r(7908),
					a = r(7466),
					s = r(5417),
					u = [].push,
					c = function (e) {
						var t = 1 == e,
							r = 2 == e,
							c = 3 == e,
							l = 4 == e,
							h = 6 == e,
							p = 7 == e,
							d = 5 == e || h;
						return function (f, g, b, v) {
							for (var m, w, y = i(f), P = n(y), x = o(g, b, 3), _ = a(P.length), k = 0, R = v || s, I = t ? R(f, _) : r || p ? R(f, 0) : void 0; _ > k; k++)
								if ((d || k in P) && (w = x(m = P[k], k, y), e))
									if (t) I[k] = w;
									else if (w) switch (e) {
								case 3:
									return !0;
								case 5:
									return m;
								case 6:
									return k;
								case 2:
									u.call(I, m)
							} else switch (e) {
								case 4:
									return !1;
								case 7:
									u.call(I, m)
							}
							return h ? -1 : c || l ? l : I
						}
					};
				e.exports = {
					forEach: c(0),
					map: c(1),
					filter: c(2),
					some: c(3),
					every: c(4),
					find: c(5),
					findIndex: c(6),
					filterOut: c(7)
				}
			},
			1194: function (e, t, r) {
				var o = r(7293),
					n = r(5112),
					i = r(7392),
					a = n("species");
				e.exports = function (e) {
					return i >= 51 || !o((function () {
						var t = [];
						return (t.constructor = {})[a] = function () {
							return {
								foo: 1
							}
						}, 1 !== t[e](Boolean).foo
					}))
				}
			},
			9341: function (e, t, r) {
				"use strict";
				var o = r(7293);
				e.exports = function (e, t) {
					var r = [][e];
					return !!r && o((function () {
						r.call(null, t || function () {
							throw 1
						}, 1)
					}))
				}
			},
			9207: function (e, t, r) {
				var o = r(9781),
					n = r(7293),
					i = r(6656),
					a = Object.defineProperty,
					s = {},
					u = function (e) {
						throw e
					};
				e.exports = function (e, t) {
					if (i(s, e)) return s[e];
					t || (t = {});
					var r = [][e],
						c = !!i(t, "ACCESSORS") && t.ACCESSORS,
						l = i(t, 0) ? t[0] : u,
						h = i(t, 1) ? t[1] : void 0;
					return s[e] = !!r && !n((function () {
						if (c && !o) return !0;
						var e = {
							length: -1
						};
						c ? a(e, 1, {
							enumerable: !0,
							get: u
						}) : e[1] = 1, r.call(e, l, h)
					}))
				}
			},
			3671: function (e, t, r) {
				var o = r(3099),
					n = r(7908),
					i = r(8361),
					a = r(7466),
					s = function (e) {
						return function (t, r, s, u) {
							o(r);
							var c = n(t),
								l = i(c),
								h = a(c.length),
								p = e ? h - 1 : 0,
								d = e ? -1 : 1;
							if (s < 2)
								for (;;) {
									if (p in l) {
										u = l[p], p += d;
										break
									}
									if (p += d, e ? p < 0 : h <= p) throw TypeError("Reduce of empty array with no initial value")
								}
							for (; e ? p >= 0 : h > p; p += d) p in l && (u = r(u, l[p], p, c));
							return u
						}
					};
				e.exports = {
					left: s(!1),
					right: s(!0)
				}
			},
			5417: function (e, t, r) {
				var o = r(111),
					n = r(3157),
					i = r(5112)("species");
				e.exports = function (e, t) {
					var r;
					return n(e) && ("function" != typeof (r = e.constructor) || r !== Array && !n(r.prototype) ? o(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === t ? 0 : t)
				}
			},
			3411: function (e, t, r) {
				var o = r(9670),
					n = r(9212);
				e.exports = function (e, t, r, i) {
					try {
						return i ? t(o(r)[0], r[1]) : t(r)
					} catch (t) {
						throw n(e), t
					}
				}
			},
			4326: function (e) {
				var t = {}.toString;
				e.exports = function (e) {
					return t.call(e).slice(8, -1)
				}
			},
			648: function (e, t, r) {
				var o = r(1694),
					n = r(4326),
					i = r(5112)("toStringTag"),
					a = "Arguments" == n(function () {
						return arguments
					}());
				e.exports = o ? n : function (e) {
					var t, r, o;
					return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
						try {
							return e[t]
						} catch (e) {}
					}(t = Object(e), i)) ? r : a ? n(t) : "Object" == (o = n(t)) && "function" == typeof t.callee ? "Arguments" : o
				}
			},
			9920: function (e, t, r) {
				var o = r(6656),
					n = r(3887),
					i = r(1236),
					a = r(3070);
				e.exports = function (e, t) {
					for (var r = n(t), s = a.f, u = i.f, c = 0; c < r.length; c++) {
						var l = r[c];
						o(e, l) || s(e, l, u(t, l))
					}
				}
			},
			4964: function (e, t, r) {
				var o = r(5112)("match");
				e.exports = function (e) {
					var t = /./;
					try {
						"/./" [e](t)
					} catch (r) {
						try {
							return t[o] = !1, "/./" [e](t)
						} catch (e) {}
					}
					return !1
				}
			},
			8544: function (e, t, r) {
				var o = r(7293);
				e.exports = !o((function () {
					function e() {}
					return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
				}))
			},
			4994: function (e, t, r) {
				"use strict";
				var o = r(3383).IteratorPrototype,
					n = r(30),
					i = r(9114),
					a = r(8003),
					s = r(7497),
					u = function () {
						return this
					};
				e.exports = function (e, t, r) {
					var c = t + " Iterator";
					return e.prototype = n(o, {
						next: i(1, r)
					}), a(e, c, !1, !0), s[c] = u, e
				}
			},
			8880: function (e, t, r) {
				var o = r(9781),
					n = r(3070),
					i = r(9114);
				e.exports = o ? function (e, t, r) {
					return n.f(e, t, i(1, r))
				} : function (e, t, r) {
					return e[t] = r, e
				}
			},
			9114: function (e) {
				e.exports = function (e, t) {
					return {
						enumerable: !(1 & e),
						configurable: !(2 & e),
						writable: !(4 & e),
						value: t
					}
				}
			},
			6135: function (e, t, r) {
				"use strict";
				var o = r(7593),
					n = r(3070),
					i = r(9114);
				e.exports = function (e, t, r) {
					var a = o(t);
					a in e ? n.f(e, a, i(0, r)) : e[a] = r
				}
			},
			654: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(4994),
					i = r(9518),
					a = r(7674),
					s = r(8003),
					u = r(8880),
					c = r(1320),
					l = r(5112),
					h = r(1913),
					p = r(7497),
					d = r(3383),
					f = d.IteratorPrototype,
					g = d.BUGGY_SAFARI_ITERATORS,
					b = l("iterator"),
					v = "keys",
					m = "values",
					w = "entries",
					y = function () {
						return this
					};
				e.exports = function (e, t, r, l, d, P, x) {
					n(r, t, l);
					var _, k, R, I = function (e) {
							if (e === d && E) return E;
							if (!g && e in C) return C[e];
							switch (e) {
								case v:
								case m:
								case w:
									return function () {
										return new r(this, e)
									}
							}
							return function () {
								return new r(this)
							}
						},
						S = t + " Iterator",
						T = !1,
						C = e.prototype,
						L = C[b] || C["@@iterator"] || d && C[d],
						E = !g && L || I(d),
						B = "Array" == t && C.entries || L;
					if (B && (_ = i(B.call(new e)), f !== Object.prototype && _.next && (h || i(_) === f || (a ? a(_, f) : "function" != typeof _[b] && u(_, b, y)), s(_, S, !0, !0), h && (p[S] = y))), d == m && L && L.name !== m && (T = !0, E = function () {
							return L.call(this)
						}), h && !x || C[b] === E || u(C, b, E), p[t] = E, d)
						if (k = {
								values: I(m),
								keys: P ? E : I(v),
								entries: I(w)
							}, x)
							for (R in k)(g || T || !(R in C)) && c(C, R, k[R]);
						else o({
							target: t,
							proto: !0,
							forced: g || T
						}, k);
					return k
				}
			},
			9781: function (e, t, r) {
				var o = r(7293);
				e.exports = !o((function () {
					return 7 != Object.defineProperty({}, 1, {
						get: function () {
							return 7
						}
					})[1]
				}))
			},
			317: function (e, t, r) {
				var o = r(7854),
					n = r(111),
					i = o.document,
					a = n(i) && n(i.createElement);
				e.exports = function (e) {
					return a ? i.createElement(e) : {}
				}
			},
			8324: function (e) {
				e.exports = {
					CSSRuleList: 0,
					CSSStyleDeclaration: 0,
					CSSValueList: 0,
					ClientRectList: 0,
					DOMRectList: 0,
					DOMStringList: 0,
					DOMTokenList: 1,
					DataTransferItemList: 0,
					FileList: 0,
					HTMLAllCollection: 0,
					HTMLCollection: 0,
					HTMLFormElement: 0,
					HTMLSelectElement: 0,
					MediaList: 0,
					MimeTypeArray: 0,
					NamedNodeMap: 0,
					NodeList: 1,
					PaintRequestList: 0,
					Plugin: 0,
					PluginArray: 0,
					SVGLengthList: 0,
					SVGNumberList: 0,
					SVGPathSegList: 0,
					SVGPointList: 0,
					SVGStringList: 0,
					SVGTransformList: 0,
					SourceBufferList: 0,
					StyleSheetList: 0,
					TextTrackCueList: 0,
					TextTrackList: 0,
					TouchList: 0
				}
			},
			5268: function (e, t, r) {
				var o = r(4326),
					n = r(7854);
				e.exports = "process" == o(n.process)
			},
			8113: function (e, t, r) {
				var o = r(5005);
				e.exports = o("navigator", "userAgent") || ""
			},
			7392: function (e, t, r) {
				var o, n, i = r(7854),
					a = r(8113),
					s = i.process,
					u = s && s.versions,
					c = u && u.v8;
				c ? n = (o = c.split("."))[0] + o[1] : a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (n = o[1]), e.exports = n && +n
			},
			748: function (e) {
				e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
			},
			2109: function (e, t, r) {
				var o = r(7854),
					n = r(1236).f,
					i = r(8880),
					a = r(1320),
					s = r(3505),
					u = r(9920),
					c = r(4705);
				e.exports = function (e, t) {
					var r, l, h, p, d, f = e.target,
						g = e.global,
						b = e.stat;
					if (r = g ? o : b ? o[f] || s(f, {}) : (o[f] || {}).prototype)
						for (l in t) {
							if (p = t[l], h = e.noTargetGet ? (d = n(r, l)) && d.value : r[l], !c(g ? l : f + (b ? "." : "#") + l, e.forced) && void 0 !== h) {
								if (typeof p == typeof h) continue;
								u(p, h)
							}(e.sham || h && h.sham) && i(p, "sham", !0), a(r, l, p, e)
						}
				}
			},
			7293: function (e) {
				e.exports = function (e) {
					try {
						return !!e()
					} catch (e) {
						return !0
					}
				}
			},
			7007: function (e, t, r) {
				"use strict";
				r(4916);
				var o = r(1320),
					n = r(7293),
					i = r(5112),
					a = r(2261),
					s = r(8880),
					u = i("species"),
					c = !n((function () {
						var e = /./;
						return e.exec = function () {
							var e = [];
							return e.groups = {
								a: "7"
							}, e
						}, "7" !== "".replace(e, "$<a>")
					})),
					l = "$0" === "a".replace(/./, "$0"),
					h = i("replace"),
					p = !!/./ [h] && "" === /./ [h]("a", "$0"),
					d = !n((function () {
						var e = /(?:)/,
							t = e.exec;
						e.exec = function () {
							return t.apply(this, arguments)
						};
						var r = "ab".split(e);
						return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
					}));
				e.exports = function (e, t, r, h) {
					var f = i(e),
						g = !n((function () {
							var t = {};
							return t[f] = function () {
								return 7
							}, 7 != "" [e](t)
						})),
						b = g && !n((function () {
							var t = !1,
								r = /a/;
							return "split" === e && ((r = {}).constructor = {}, r.constructor[u] = function () {
								return r
							}, r.flags = "", r[f] = /./ [f]), r.exec = function () {
								return t = !0, null
							}, r[f](""), !t
						}));
					if (!g || !b || "replace" === e && (!c || !l || p) || "split" === e && !d) {
						var v = /./ [f],
							m = r(f, "" [e], (function (e, t, r, o, n) {
								return t.exec === a ? g && !n ? {
									done: !0,
									value: v.call(t, r, o)
								} : {
									done: !0,
									value: e.call(r, t, o)
								} : {
									done: !1
								}
							}), {
								REPLACE_KEEPS_$0: l,
								REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
							}),
							w = m[0],
							y = m[1];
						o(String.prototype, e, w), o(RegExp.prototype, f, 2 == t ? function (e, t) {
							return y.call(e, this, t)
						} : function (e) {
							return y.call(e, this)
						})
					}
					h && s(RegExp.prototype[f], "sham", !0)
				}
			},
			6790: function (e, t, r) {
				"use strict";
				var o = r(3157),
					n = r(7466),
					i = r(9974),
					a = function (e, t, r, s, u, c, l, h) {
						for (var p, d = u, f = 0, g = !!l && i(l, h, 3); f < s;) {
							if (f in r) {
								if (p = g ? g(r[f], f, t) : r[f], c > 0 && o(p)) d = a(e, t, p, n(p.length), d, c - 1) - 1;
								else {
									if (d >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
									e[d] = p
								}
								d++
							}
							f++
						}
						return d
					};
				e.exports = a
			},
			9974: function (e, t, r) {
				var o = r(3099);
				e.exports = function (e, t, r) {
					if (o(e), void 0 === t) return e;
					switch (r) {
						case 0:
							return function () {
								return e.call(t)
							};
						case 1:
							return function (r) {
								return e.call(t, r)
							};
						case 2:
							return function (r, o) {
								return e.call(t, r, o)
							};
						case 3:
							return function (r, o, n) {
								return e.call(t, r, o, n)
							}
					}
					return function () {
						return e.apply(t, arguments)
					}
				}
			},
			5005: function (e, t, r) {
				var o = r(857),
					n = r(7854),
					i = function (e) {
						return "function" == typeof e ? e : void 0
					};
				e.exports = function (e, t) {
					return arguments.length < 2 ? i(o[e]) || i(n[e]) : o[e] && o[e][t] || n[e] && n[e][t]
				}
			},
			1246: function (e, t, r) {
				var o = r(648),
					n = r(7497),
					i = r(5112)("iterator");
				e.exports = function (e) {
					if (null != e) return e[i] || e["@@iterator"] || n[o(e)]
				}
			},
			8554: function (e, t, r) {
				var o = r(9670),
					n = r(1246);
				e.exports = function (e) {
					var t = n(e);
					if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
					return o(t.call(e))
				}
			},
			7854: function (e, t, r) {
				var o = function (e) {
					return e && e.Math == Math && e
				};
				e.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof r.g && r.g) || function () {
					return this
				}() || Function("return this")()
			},
			6656: function (e) {
				var t = {}.hasOwnProperty;
				e.exports = function (e, r) {
					return t.call(e, r)
				}
			},
			3501: function (e) {
				e.exports = {}
			},
			490: function (e, t, r) {
				var o = r(5005);
				e.exports = o("document", "documentElement")
			},
			4664: function (e, t, r) {
				var o = r(9781),
					n = r(7293),
					i = r(317);
				e.exports = !o && !n((function () {
					return 7 != Object.defineProperty(i("div"), "a", {
						get: function () {
							return 7
						}
					}).a
				}))
			},
			8361: function (e, t, r) {
				var o = r(7293),
					n = r(4326),
					i = "".split;
				e.exports = o((function () {
					return !Object("z").propertyIsEnumerable(0)
				})) ? function (e) {
					return "String" == n(e) ? i.call(e, "") : Object(e)
				} : Object
			},
			2788: function (e, t, r) {
				var o = r(5465),
					n = Function.toString;
				"function" != typeof o.inspectSource && (o.inspectSource = function (e) {
					return n.call(e)
				}), e.exports = o.inspectSource
			},
			9909: function (e, t, r) {
				var o, n, i, a = r(8536),
					s = r(7854),
					u = r(111),
					c = r(8880),
					l = r(6656),
					h = r(5465),
					p = r(6200),
					d = r(3501),
					f = s.WeakMap;
				if (a) {
					var g = h.state || (h.state = new f),
						b = g.get,
						v = g.has,
						m = g.set;
					o = function (e, t) {
						return t.facade = e, m.call(g, e, t), t
					}, n = function (e) {
						return b.call(g, e) || {}
					}, i = function (e) {
						return v.call(g, e)
					}
				} else {
					var w = p("state");
					d[w] = !0, o = function (e, t) {
						return t.facade = e, c(e, w, t), t
					}, n = function (e) {
						return l(e, w) ? e[w] : {}
					}, i = function (e) {
						return l(e, w)
					}
				}
				e.exports = {
					set: o,
					get: n,
					has: i,
					enforce: function (e) {
						return i(e) ? n(e) : o(e, {})
					},
					getterFor: function (e) {
						return function (t) {
							var r;
							if (!u(t) || (r = n(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
							return r
						}
					}
				}
			},
			7659: function (e, t, r) {
				var o = r(5112),
					n = r(7497),
					i = o("iterator"),
					a = Array.prototype;
				e.exports = function (e) {
					return void 0 !== e && (n.Array === e || a[i] === e)
				}
			},
			3157: function (e, t, r) {
				var o = r(4326);
				e.exports = Array.isArray || function (e) {
					return "Array" == o(e)
				}
			},
			4705: function (e, t, r) {
				var o = r(7293),
					n = /#|\.prototype\./,
					i = function (e, t) {
						var r = s[a(e)];
						return r == c || r != u && ("function" == typeof t ? o(t) : !!t)
					},
					a = i.normalize = function (e) {
						return String(e).replace(n, ".").toLowerCase()
					},
					s = i.data = {},
					u = i.NATIVE = "N",
					c = i.POLYFILL = "P";
				e.exports = i
			},
			111: function (e) {
				e.exports = function (e) {
					return "object" == typeof e ? null !== e : "function" == typeof e
				}
			},
			1913: function (e) {
				e.exports = !1
			},
			7850: function (e, t, r) {
				var o = r(111),
					n = r(4326),
					i = r(5112)("match");
				e.exports = function (e) {
					var t;
					return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == n(e))
				}
			},
			9212: function (e, t, r) {
				var o = r(9670);
				e.exports = function (e) {
					var t = e.return;
					if (void 0 !== t) return o(t.call(e)).value
				}
			},
			3383: function (e, t, r) {
				"use strict";
				var o, n, i, a = r(9518),
					s = r(8880),
					u = r(6656),
					c = r(5112),
					l = r(1913),
					h = c("iterator"),
					p = !1;
				[].keys && ("next" in (i = [].keys()) ? (n = a(a(i))) !== Object.prototype && (o = n) : p = !0), null == o && (o = {}), l || u(o, h) || s(o, h, (function () {
					return this
				})), e.exports = {
					IteratorPrototype: o,
					BUGGY_SAFARI_ITERATORS: p
				}
			},
			7497: function (e) {
				e.exports = {}
			},
			133: function (e, t, r) {
				var o = r(7293);
				e.exports = !!Object.getOwnPropertySymbols && !o((function () {
					return !String(Symbol())
				}))
			},
			590: function (e, t, r) {
				var o = r(7293),
					n = r(5112),
					i = r(1913),
					a = n("iterator");
				e.exports = !o((function () {
					var e = new URL("b?a=1&b=2&c=3", "http://a"),
						t = e.searchParams,
						r = "";
					return e.pathname = "c%20d", t.forEach((function (e, o) {
						t.delete("b"), r += o + e
					})), i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host
				}))
			},
			8536: function (e, t, r) {
				var o = r(7854),
					n = r(2788),
					i = o.WeakMap;
				e.exports = "function" == typeof i && /native code/.test(n(i))
			},
			3929: function (e, t, r) {
				var o = r(7850);
				e.exports = function (e) {
					if (o(e)) throw TypeError("The method doesn't accept regular expressions");
					return e
				}
			},
			1574: function (e, t, r) {
				"use strict";
				var o = r(9781),
					n = r(7293),
					i = r(1956),
					a = r(5181),
					s = r(5296),
					u = r(7908),
					c = r(8361),
					l = Object.assign,
					h = Object.defineProperty;
				e.exports = !l || n((function () {
					if (o && 1 !== l({
							b: 1
						}, l(h({}, "a", {
							enumerable: !0,
							get: function () {
								h(this, "b", {
									value: 3,
									enumerable: !1
								})
							}
						}), {
							b: 2
						})).b) return !0;
					var e = {},
						t = {},
						r = Symbol(),
						n = "abcdefghijklmnopqrst";
					return e[r] = 7, n.split("").forEach((function (e) {
						t[e] = e
					})), 7 != l({}, e)[r] || i(l({}, t)).join("") != n
				})) ? function (e, t) {
					for (var r = u(e), n = arguments.length, l = 1, h = a.f, p = s.f; n > l;)
						for (var d, f = c(arguments[l++]), g = h ? i(f).concat(h(f)) : i(f), b = g.length, v = 0; b > v;) d = g[v++], o && !p.call(f, d) || (r[d] = f[d]);
					return r
				} : l
			},
			30: function (e, t, r) {
				var o, n = r(9670),
					i = r(6048),
					a = r(748),
					s = r(3501),
					u = r(490),
					c = r(317),
					l = r(6200)("IE_PROTO"),
					h = function () {},
					p = function (e) {
						return "<script>" + e + "<\/script>"
					},
					d = function () {
						try {
							o = document.domain && new ActiveXObject("htmlfile")
						} catch (e) {}
						var e, t;
						d = o ? function (e) {
							e.write(p("")), e.close();
							var t = e.parentWindow.Object;
							return e = null, t
						}(o) : ((t = c("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F);
						for (var r = a.length; r--;) delete d.prototype[a[r]];
						return d()
					};
				s[l] = !0, e.exports = Object.create || function (e, t) {
					var r;
					return null !== e ? (h.prototype = n(e), r = new h, h.prototype = null, r[l] = e) : r = d(), void 0 === t ? r : i(r, t)
				}
			},
			6048: function (e, t, r) {
				var o = r(9781),
					n = r(3070),
					i = r(9670),
					a = r(1956);
				e.exports = o ? Object.defineProperties : function (e, t) {
					i(e);
					for (var r, o = a(t), s = o.length, u = 0; s > u;) n.f(e, r = o[u++], t[r]);
					return e
				}
			},
			3070: function (e, t, r) {
				var o = r(9781),
					n = r(4664),
					i = r(9670),
					a = r(7593),
					s = Object.defineProperty;
				t.f = o ? s : function (e, t, r) {
					if (i(e), t = a(t, !0), i(r), n) try {
						return s(e, t, r)
					} catch (e) {}
					if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
					return "value" in r && (e[t] = r.value), e
				}
			},
			1236: function (e, t, r) {
				var o = r(9781),
					n = r(5296),
					i = r(9114),
					a = r(5656),
					s = r(7593),
					u = r(6656),
					c = r(4664),
					l = Object.getOwnPropertyDescriptor;
				t.f = o ? l : function (e, t) {
					if (e = a(e), t = s(t, !0), c) try {
						return l(e, t)
					} catch (e) {}
					if (u(e, t)) return i(!n.f.call(e, t), e[t])
				}
			},
			8006: function (e, t, r) {
				var o = r(6324),
					n = r(748).concat("length", "prototype");
				t.f = Object.getOwnPropertyNames || function (e) {
					return o(e, n)
				}
			},
			5181: function (e, t) {
				t.f = Object.getOwnPropertySymbols
			},
			9518: function (e, t, r) {
				var o = r(6656),
					n = r(7908),
					i = r(6200),
					a = r(8544),
					s = i("IE_PROTO"),
					u = Object.prototype;
				e.exports = a ? Object.getPrototypeOf : function (e) {
					return e = n(e), o(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
				}
			},
			6324: function (e, t, r) {
				var o = r(6656),
					n = r(5656),
					i = r(1318).indexOf,
					a = r(3501);
				e.exports = function (e, t) {
					var r, s = n(e),
						u = 0,
						c = [];
					for (r in s) !o(a, r) && o(s, r) && c.push(r);
					for (; t.length > u;) o(s, r = t[u++]) && (~i(c, r) || c.push(r));
					return c
				}
			},
			1956: function (e, t, r) {
				var o = r(6324),
					n = r(748);
				e.exports = Object.keys || function (e) {
					return o(e, n)
				}
			},
			5296: function (e, t) {
				"use strict";
				var r = {}.propertyIsEnumerable,
					o = Object.getOwnPropertyDescriptor,
					n = o && !r.call({
						1: 2
					}, 1);
				t.f = n ? function (e) {
					var t = o(this, e);
					return !!t && t.enumerable
				} : r
			},
			7674: function (e, t, r) {
				var o = r(9670),
					n = r(6077);
				e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
					var e, t = !1,
						r = {};
					try {
						(e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array
					} catch (e) {}
					return function (r, i) {
						return o(r), n(i), t ? e.call(r, i) : r.__proto__ = i, r
					}
				}() : void 0)
			},
			288: function (e, t, r) {
				"use strict";
				var o = r(1694),
					n = r(648);
				e.exports = o ? {}.toString : function () {
					return "[object " + n(this) + "]"
				}
			},
			3887: function (e, t, r) {
				var o = r(5005),
					n = r(8006),
					i = r(5181),
					a = r(9670);
				e.exports = o("Reflect", "ownKeys") || function (e) {
					var t = n.f(a(e)),
						r = i.f;
					return r ? t.concat(r(e)) : t
				}
			},
			857: function (e, t, r) {
				var o = r(7854);
				e.exports = o
			},
			2248: function (e, t, r) {
				var o = r(1320);
				e.exports = function (e, t, r) {
					for (var n in t) o(e, n, t[n], r);
					return e
				}
			},
			1320: function (e, t, r) {
				var o = r(7854),
					n = r(8880),
					i = r(6656),
					a = r(3505),
					s = r(2788),
					u = r(9909),
					c = u.get,
					l = u.enforce,
					h = String(String).split("String");
				(e.exports = function (e, t, r, s) {
					var u, c = !!s && !!s.unsafe,
						p = !!s && !!s.enumerable,
						d = !!s && !!s.noTargetGet;
					"function" == typeof r && ("string" != typeof t || i(r, "name") || n(r, "name", t), (u = l(r)).source || (u.source = h.join("string" == typeof t ? t : ""))), e !== o ? (c ? !d && e[t] && (p = !0) : delete e[t], p ? e[t] = r : n(e, t, r)) : p ? e[t] = r : a(t, r)
				})(Function.prototype, "toString", (function () {
					return "function" == typeof this && c(this).source || s(this)
				}))
			},
			7651: function (e, t, r) {
				var o = r(4326),
					n = r(2261);
				e.exports = function (e, t) {
					var r = e.exec;
					if ("function" == typeof r) {
						var i = r.call(e, t);
						if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
						return i
					}
					if ("RegExp" !== o(e)) throw TypeError("RegExp#exec called on incompatible receiver");
					return n.call(e, t)
				}
			},
			2261: function (e, t, r) {
				"use strict";
				var o, n, i = r(7066),
					a = r(2999),
					s = RegExp.prototype.exec,
					u = String.prototype.replace,
					c = s,
					l = (o = /a/, n = /b*/g, s.call(o, "a"), s.call(n, "a"), 0 !== o.lastIndex || 0 !== n.lastIndex),
					h = a.UNSUPPORTED_Y || a.BROKEN_CARET,
					p = void 0 !== /()??/.exec("")[1];
				(l || p || h) && (c = function (e) {
					var t, r, o, n, a = this,
						c = h && a.sticky,
						d = i.call(a),
						f = a.source,
						g = 0,
						b = e;
					return c && (-1 === (d = d.replace("y", "")).indexOf("g") && (d += "g"), b = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (f = "(?: " + f + ")", b = " " + b, g++), r = new RegExp("^(?:" + f + ")", d)), p && (r = new RegExp("^" + f + "$(?!\\s)", d)), l && (t = a.lastIndex), o = s.call(c ? r : a, b), c ? o ? (o.input = o.input.slice(g), o[0] = o[0].slice(g), o.index = a.lastIndex, a.lastIndex += o[0].length) : a.lastIndex = 0 : l && o && (a.lastIndex = a.global ? o.index + o[0].length : t), p && o && o.length > 1 && u.call(o[0], r, (function () {
						for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (o[n] = void 0)
					})), o
				}), e.exports = c
			},
			7066: function (e, t, r) {
				"use strict";
				var o = r(9670);
				e.exports = function () {
					var e = o(this),
						t = "";
					return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
				}
			},
			2999: function (e, t, r) {
				"use strict";
				var o = r(7293);

				function n(e, t) {
					return RegExp(e, t)
				}
				t.UNSUPPORTED_Y = o((function () {
					var e = n("a", "y");
					return e.lastIndex = 2, null != e.exec("abcd")
				})), t.BROKEN_CARET = o((function () {
					var e = n("^r", "gy");
					return e.lastIndex = 2, null != e.exec("str")
				}))
			},
			4488: function (e) {
				e.exports = function (e) {
					if (null == e) throw TypeError("Can't call method on " + e);
					return e
				}
			},
			1150: function (e) {
				e.exports = Object.is || function (e, t) {
					return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
				}
			},
			3505: function (e, t, r) {
				var o = r(7854),
					n = r(8880);
				e.exports = function (e, t) {
					try {
						n(o, e, t)
					} catch (r) {
						o[e] = t
					}
					return t
				}
			},
			8003: function (e, t, r) {
				var o = r(3070).f,
					n = r(6656),
					i = r(5112)("toStringTag");
				e.exports = function (e, t, r) {
					e && !n(e = r ? e : e.prototype, i) && o(e, i, {
						configurable: !0,
						value: t
					})
				}
			},
			6200: function (e, t, r) {
				var o = r(2309),
					n = r(9711),
					i = o("keys");
				e.exports = function (e) {
					return i[e] || (i[e] = n(e))
				}
			},
			5465: function (e, t, r) {
				var o = r(7854),
					n = r(3505),
					i = "__core-js_shared__",
					a = o[i] || n(i, {});
				e.exports = a
			},
			2309: function (e, t, r) {
				var o = r(1913),
					n = r(5465);
				(e.exports = function (e, t) {
					return n[e] || (n[e] = void 0 !== t ? t : {})
				})("versions", []).push({
					version: "3.8.0",
					mode: o ? "pure" : "global",
					copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
				})
			},
			6707: function (e, t, r) {
				var o = r(9670),
					n = r(3099),
					i = r(5112)("species");
				e.exports = function (e, t) {
					var r, a = o(e).constructor;
					return void 0 === a || null == (r = o(a)[i]) ? t : n(r)
				}
			},
			8710: function (e, t, r) {
				var o = r(9958),
					n = r(4488),
					i = function (e) {
						return function (t, r) {
							var i, a, s = String(n(t)),
								u = o(r),
								c = s.length;
							return u < 0 || u >= c ? e ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : i : e ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
						}
					};
				e.exports = {
					codeAt: i(!1),
					charAt: i(!0)
				}
			},
			3197: function (e) {
				"use strict";
				var t = 2147483647,
					r = /[^\0-\u007E]/,
					o = /[.\u3002\uFF0E\uFF61]/g,
					n = "Overflow: input needs wider integers to process",
					i = Math.floor,
					a = String.fromCharCode,
					s = function (e) {
						return e + 22 + 75 * (e < 26)
					},
					u = function (e, t, r) {
						var o = 0;
						for (e = r ? i(e / 700) : e >> 1, e += i(e / t); e > 455; o += 36) e = i(e / 35);
						return i(o + 36 * e / (e + 38))
					},
					c = function (e) {
						var r, o, c = [],
							l = (e = function (e) {
								for (var t = [], r = 0, o = e.length; r < o;) {
									var n = e.charCodeAt(r++);
									if (n >= 55296 && n <= 56319 && r < o) {
										var i = e.charCodeAt(r++);
										56320 == (64512 & i) ? t.push(((1023 & n) << 10) + (1023 & i) + 65536) : (t.push(n), r--)
									} else t.push(n)
								}
								return t
							}(e)).length,
							h = 128,
							p = 0,
							d = 72;
						for (r = 0; r < e.length; r++)(o = e[r]) < 128 && c.push(a(o));
						var f = c.length,
							g = f;
						for (f && c.push("-"); g < l;) {
							var b = t;
							for (r = 0; r < e.length; r++)(o = e[r]) >= h && o < b && (b = o);
							var v = g + 1;
							if (b - h > i((t - p) / v)) throw RangeError(n);
							for (p += (b - h) * v, h = b, r = 0; r < e.length; r++) {
								if ((o = e[r]) < h && ++p > t) throw RangeError(n);
								if (o == h) {
									for (var m = p, w = 36;; w += 36) {
										var y = w <= d ? 1 : w >= d + 26 ? 26 : w - d;
										if (m < y) break;
										var P = m - y,
											x = 36 - y;
										c.push(a(s(y + P % x))), m = i(P / x)
									}
									c.push(a(s(m))), d = u(p, v, g == f), p = 0, ++g
								}
							}++p, ++h
						}
						return c.join("")
					};
				e.exports = function (e) {
					var t, n, i = [],
						a = e.toLowerCase().replace(o, ".").split(".");
					for (t = 0; t < a.length; t++) n = a[t], i.push(r.test(n) ? "xn--" + c(n) : n);
					return i.join(".")
				}
			},
			8415: function (e, t, r) {
				"use strict";
				var o = r(9958),
					n = r(4488);
				e.exports = "".repeat || function (e) {
					var t = String(n(this)),
						r = "",
						i = o(e);
					if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
					for (; i > 0;
						(i >>>= 1) && (t += t)) 1 & i && (r += t);
					return r
				}
			},
			863: function (e, t, r) {
				var o = r(4326);
				e.exports = function (e) {
					if ("number" != typeof e && "Number" != o(e)) throw TypeError("Incorrect invocation");
					return +e
				}
			},
			1400: function (e, t, r) {
				var o = r(9958),
					n = Math.max,
					i = Math.min;
				e.exports = function (e, t) {
					var r = o(e);
					return r < 0 ? n(r + t, 0) : i(r, t)
				}
			},
			5656: function (e, t, r) {
				var o = r(8361),
					n = r(4488);
				e.exports = function (e) {
					return o(n(e))
				}
			},
			9958: function (e) {
				var t = Math.ceil,
					r = Math.floor;
				e.exports = function (e) {
					return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
				}
			},
			7466: function (e, t, r) {
				var o = r(9958),
					n = Math.min;
				e.exports = function (e) {
					return e > 0 ? n(o(e), 9007199254740991) : 0
				}
			},
			7908: function (e, t, r) {
				var o = r(4488);
				e.exports = function (e) {
					return Object(o(e))
				}
			},
			7593: function (e, t, r) {
				var o = r(111);
				e.exports = function (e, t) {
					if (!o(e)) return e;
					var r, n;
					if (t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;
					if ("function" == typeof (r = e.valueOf) && !o(n = r.call(e))) return n;
					if (!t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;
					throw TypeError("Can't convert object to primitive value")
				}
			},
			1694: function (e, t, r) {
				var o = {};
				o[r(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(o)
			},
			9711: function (e) {
				var t = 0,
					r = Math.random();
				e.exports = function (e) {
					return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + r).toString(36)
				}
			},
			3307: function (e, t, r) {
				var o = r(133);
				e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
			},
			5112: function (e, t, r) {
				var o = r(7854),
					n = r(2309),
					i = r(6656),
					a = r(9711),
					s = r(133),
					u = r(3307),
					c = n("wks"),
					l = o.Symbol,
					h = u ? l : l && l.withoutSetter || a;
				e.exports = function (e) {
					return i(c, e) || (s && i(l, e) ? c[e] = l[e] : c[e] = h("Symbol." + e)), c[e]
				}
			},
			2222: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(7293),
					i = r(3157),
					a = r(111),
					s = r(7908),
					u = r(7466),
					c = r(6135),
					l = r(5417),
					h = r(1194),
					p = r(5112),
					d = r(7392),
					f = p("isConcatSpreadable"),
					g = 9007199254740991,
					b = "Maximum allowed index exceeded",
					v = d >= 51 || !n((function () {
						var e = [];
						return e[f] = !1, e.concat()[0] !== e
					})),
					m = h("concat"),
					w = function (e) {
						if (!a(e)) return !1;
						var t = e[f];
						return void 0 !== t ? !!t : i(e)
					};
				o({
					target: "Array",
					proto: !0,
					forced: !v || !m
				}, {
					concat: function (e) {
						var t, r, o, n, i, a = s(this),
							h = l(a, 0),
							p = 0;
						for (t = -1, o = arguments.length; t < o; t++)
							if (w(i = -1 === t ? a : arguments[t])) {
								if (p + (n = u(i.length)) > g) throw TypeError(b);
								for (r = 0; r < n; r++, p++) r in i && c(h, p, i[r])
							} else {
								if (p >= g) throw TypeError(b);
								c(h, p++, i)
							}
						return h.length = p, h
					}
				})
			},
			7327: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(2092).filter,
					i = r(1194),
					a = r(9207),
					s = i("filter"),
					u = a("filter");
				o({
					target: "Array",
					proto: !0,
					forced: !s || !u
				}, {
					filter: function (e) {
						return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				})
			},
			4553: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(2092).findIndex,
					i = r(1223),
					a = r(9207),
					s = "findIndex",
					u = !0,
					c = a(s);
				s in [] && Array(1).findIndex((function () {
					u = !1
				})), o({
					target: "Array",
					proto: !0,
					forced: u || !c
				}, {
					findIndex: function (e) {
						return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				}), i(s)
			},
			9826: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(2092).find,
					i = r(1223),
					a = r(9207),
					s = "find",
					u = !0,
					c = a(s);
				s in [] && Array(1).find((function () {
					u = !1
				})), o({
					target: "Array",
					proto: !0,
					forced: u || !c
				}, {
					find: function (e) {
						return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				}), i(s)
			},
			6535: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(6790),
					i = r(7908),
					a = r(7466),
					s = r(3099),
					u = r(5417);
				o({
					target: "Array",
					proto: !0
				}, {
					flatMap: function (e) {
						var t, r = i(this),
							o = a(r.length);
						return s(e), (t = u(r, 0)).length = n(t, r, r, o, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
					}
				})
			},
			6699: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(1318).includes,
					i = r(1223);
				o({
					target: "Array",
					proto: !0,
					forced: !r(9207)("indexOf", {
						ACCESSORS: !0,
						1: 0
					})
				}, {
					includes: function (e) {
						return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				}), i("includes")
			},
			2772: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(1318).indexOf,
					i = r(9341),
					a = r(9207),
					s = [].indexOf,
					u = !!s && 1 / [1].indexOf(1, -0) < 0,
					c = i("indexOf"),
					l = a("indexOf", {
						ACCESSORS: !0,
						1: 0
					});
				o({
					target: "Array",
					proto: !0,
					forced: u || !c || !l
				}, {
					indexOf: function (e) {
						return u ? s.apply(this, arguments) || 0 : n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				})
			},
			6992: function (e, t, r) {
				"use strict";
				var o = r(5656),
					n = r(1223),
					i = r(7497),
					a = r(9909),
					s = r(654),
					u = "Array Iterator",
					c = a.set,
					l = a.getterFor(u);
				e.exports = s(Array, "Array", (function (e, t) {
					c(this, {
						type: u,
						target: o(e),
						index: 0,
						kind: t
					})
				}), (function () {
					var e = l(this),
						t = e.target,
						r = e.kind,
						o = e.index++;
					return !t || o >= t.length ? (e.target = void 0, {
						value: void 0,
						done: !0
					}) : "keys" == r ? {
						value: o,
						done: !1
					} : "values" == r ? {
						value: t[o],
						done: !1
					} : {
						value: [o, t[o]],
						done: !1
					}
				}), "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries")
			},
			9600: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(8361),
					i = r(5656),
					a = r(9341),
					s = [].join,
					u = n != Object,
					c = a("join", ",");
				o({
					target: "Array",
					proto: !0,
					forced: u || !c
				}, {
					join: function (e) {
						return s.call(i(this), void 0 === e ? "," : e)
					}
				})
			},
			1249: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(2092).map,
					i = r(1194),
					a = r(9207),
					s = i("map"),
					u = a("map");
				o({
					target: "Array",
					proto: !0,
					forced: !s || !u
				}, {
					map: function (e) {
						return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				})
			},
			5827: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(3671).left,
					i = r(9341),
					a = r(9207),
					s = r(7392),
					u = r(5268),
					c = i("reduce"),
					l = a("reduce", {
						1: 0
					});
				o({
					target: "Array",
					proto: !0,
					forced: !c || !l || !u && s > 79 && s < 83
				}, {
					reduce: function (e) {
						return n(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
					}
				})
			},
			7042: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(111),
					i = r(3157),
					a = r(1400),
					s = r(7466),
					u = r(5656),
					c = r(6135),
					l = r(5112),
					h = r(1194),
					p = r(9207),
					d = h("slice"),
					f = p("slice", {
						ACCESSORS: !0,
						0: 0,
						1: 2
					}),
					g = l("species"),
					b = [].slice,
					v = Math.max;
				o({
					target: "Array",
					proto: !0,
					forced: !d || !f
				}, {
					slice: function (e, t) {
						var r, o, l, h = u(this),
							p = s(h.length),
							d = a(e, p),
							f = a(void 0 === t ? p : t, p);
						if (i(h) && ("function" != typeof (r = h.constructor) || r !== Array && !i(r.prototype) ? n(r) && null === (r = r[g]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return b.call(h, d, f);
						for (o = new(void 0 === r ? Array : r)(v(f - d, 0)), l = 0; d < f; d++, l++) d in h && c(o, l, h[d]);
						return o.length = l, o
					}
				})
			},
			9244: function (e, t, r) {
				r(1223)("flatMap")
			},
			6977: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(9958),
					i = r(863),
					a = r(8415),
					s = r(7293),
					u = 1..toFixed,
					c = Math.floor,
					l = function (e, t, r) {
						return 0 === t ? r : t % 2 == 1 ? l(e, t - 1, r * e) : l(e * e, t / 2, r)
					};
				o({
					target: "Number",
					proto: !0,
					forced: u && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !s((function () {
						u.call({})
					}))
				}, {
					toFixed: function (e) {
						var t, r, o, s, u = i(this),
							h = n(e),
							p = [0, 0, 0, 0, 0, 0],
							d = "",
							f = "0",
							g = function (e, t) {
								for (var r = -1, o = t; ++r < 6;) o += e * p[r], p[r] = o % 1e7, o = c(o / 1e7)
							},
							b = function (e) {
								for (var t = 6, r = 0; --t >= 0;) r += p[t], p[t] = c(r / e), r = r % e * 1e7
							},
							v = function () {
								for (var e = 6, t = ""; --e >= 0;)
									if ("" !== t || 0 === e || 0 !== p[e]) {
										var r = String(p[e]);
										t = "" === t ? r : t + a.call("0", 7 - r.length) + r
									}
								return t
							};
						if (h < 0 || h > 20) throw RangeError("Incorrect fraction digits");
						if (u != u) return "NaN";
						if (u <= -1e21 || u >= 1e21) return String(u);
						if (u < 0 && (d = "-", u = -u), u > 1e-21)
							if (r = (t = function (e) {
									for (var t = 0, r = e; r >= 4096;) t += 12, r /= 4096;
									for (; r >= 2;) t += 1, r /= 2;
									return t
								}(u * l(2, 69, 1)) - 69) < 0 ? u * l(2, -t, 1) : u / l(2, t, 1), r *= 4503599627370496, (t = 52 - t) > 0) {
								for (g(0, r), o = h; o >= 7;) g(1e7, 0), o -= 7;
								for (g(l(10, o, 1), 0), o = t - 1; o >= 23;) b(1 << 23), o -= 23;
								b(1 << o), g(1, 1), b(2), f = v()
							} else g(0, r), g(1 << -t, 0), f = v() + a.call("0", h);
						return h > 0 ? d + ((s = f.length) <= h ? "0." + a.call("0", h - s) + f : f.slice(0, s - h) + "." + f.slice(s - h)) : d + f
					}
				})
			},
			9601: function (e, t, r) {
				var o = r(2109),
					n = r(1574);
				o({
					target: "Object",
					stat: !0,
					forced: Object.assign !== n
				}, {
					assign: n
				})
			},
			7941: function (e, t, r) {
				var o = r(2109),
					n = r(7908),
					i = r(1956);
				o({
					target: "Object",
					stat: !0,
					forced: r(7293)((function () {
						i(1)
					}))
				}, {
					keys: function (e) {
						return i(n(e))
					}
				})
			},
			1539: function (e, t, r) {
				var o = r(1694),
					n = r(1320),
					i = r(288);
				o || n(Object.prototype, "toString", i, {
					unsafe: !0
				})
			},
			4916: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(2261);
				o({
					target: "RegExp",
					proto: !0,
					forced: /./.exec !== n
				}, {
					exec: n
				})
			},
			9714: function (e, t, r) {
				"use strict";
				var o = r(1320),
					n = r(9670),
					i = r(7293),
					a = r(7066),
					s = "toString",
					u = RegExp.prototype,
					c = u.toString,
					l = i((function () {
						return "/a/b" != c.call({
							source: "a",
							flags: "b"
						})
					})),
					h = c.name != s;
				(l || h) && o(RegExp.prototype, s, (function () {
					var e = n(this),
						t = String(e.source),
						r = e.flags;
					return "/" + t + "/" + String(void 0 === r && e instanceof RegExp && !("flags" in u) ? a.call(e) : r)
				}), {
					unsafe: !0
				})
			},
			2023: function (e, t, r) {
				"use strict";
				var o = r(2109),
					n = r(3929),
					i = r(4488);
				o({
					target: "String",
					proto: !0,
					forced: !r(4964)("includes")
				}, {
					includes: function (e) {
						return !!~String(i(this)).indexOf(n(e), arguments.length > 1 ? arguments[1] : void 0)
					}
				})
			},
			8783: function (e, t, r) {
				"use strict";
				var o = r(8710).charAt,
					n = r(9909),
					i = r(654),
					a = "String Iterator",
					s = n.set,
					u = n.getterFor(a);
				i(String, "String", (function (e) {
					s(this, {
						type: a,
						string: String(e),
						index: 0
					})
				}), (function () {
					var e, t = u(this),
						r = t.string,
						n = t.index;
					return n >= r.length ? {
						value: void 0,
						done: !0
					} : (e = o(r, n), t.index += e.length, {
						value: e,
						done: !1
					})
				}))
			},
			5306: function (e, t, r) {
				"use strict";
				var o = r(7007),
					n = r(9670),
					i = r(7908),
					a = r(7466),
					s = r(9958),
					u = r(4488),
					c = r(1530),
					l = r(7651),
					h = Math.max,
					p = Math.min,
					d = Math.floor,
					f = /\$([$&'`]|\d\d?|<[^>]*>)/g,
					g = /\$([$&'`]|\d\d?)/g;
				o("replace", 2, (function (e, t, r, o) {
					var b = o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
						v = o.REPLACE_KEEPS_$0,
						m = b ? "$" : "$0";
					return [function (r, o) {
						var n = u(this),
							i = null == r ? void 0 : r[e];
						return void 0 !== i ? i.call(r, n, o) : t.call(String(n), r, o)
					}, function (e, o) {
						if (!b && v || "string" == typeof o && -1 === o.indexOf(m)) {
							var i = r(t, e, this, o);
							if (i.done) return i.value
						}
						var u = n(e),
							d = String(this),
							f = "function" == typeof o;
						f || (o = String(o));
						var g = u.global;
						if (g) {
							var y = u.unicode;
							u.lastIndex = 0
						}
						for (var P = [];;) {
							var x = l(u, d);
							if (null === x) break;
							if (P.push(x), !g) break;
							"" === String(x[0]) && (u.lastIndex = c(d, a(u.lastIndex), y))
						}
						for (var _, k = "", R = 0, I = 0; I < P.length; I++) {
							x = P[I];
							for (var S = String(x[0]), T = h(p(s(x.index), d.length), 0), C = [], L = 1; L < x.length; L++) C.push(void 0 === (_ = x[L]) ? _ : String(_));
							var E = x.groups;
							if (f) {
								var B = [S].concat(C, T, d);
								void 0 !== E && B.push(E);
								var M = String(o.apply(void 0, B))
							} else M = w(S, d, T, C, E, o);
							T >= R && (k += d.slice(R, T) + M, R = T + S.length)
						}
						return k + d.slice(R)
					}];

					function w(e, r, o, n, a, s) {
						var u = o + e.length,
							c = n.length,
							l = g;
						return void 0 !== a && (a = i(a), l = f), t.call(s, l, (function (t, i) {
							var s;
							switch (i.charAt(0)) {
								case "$":
									return "$";
								case "&":
									return e;
								case "`":
									return r.slice(0, o);
								case "'":
									return r.slice(u);
								case "<":
									s = a[i.slice(1, -1)];
									break;
								default:
									var l = +i;
									if (0 === l) return t;
									if (l > c) {
										var h = d(l / 10);
										return 0 === h ? t : h <= c ? void 0 === n[h - 1] ? i.charAt(1) : n[h - 1] + i.charAt(1) : t
									}
									s = n[l - 1]
							}
							return void 0 === s ? "" : s
						}))
					}
				}))
			},
			4765: function (e, t, r) {
				"use strict";
				var o = r(7007),
					n = r(9670),
					i = r(4488),
					a = r(1150),
					s = r(7651);
				o("search", 1, (function (e, t, r) {
					return [function (t) {
						var r = i(this),
							o = null == t ? void 0 : t[e];
						return void 0 !== o ? o.call(t, r) : new RegExp(t)[e](String(r))
					}, function (e) {
						var o = r(t, e, this);
						if (o.done) return o.value;
						var i = n(e),
							u = String(this),
							c = i.lastIndex;
						a(c, 0) || (i.lastIndex = 0);
						var l = s(i, u);
						return a(i.lastIndex, c) || (i.lastIndex = c), null === l ? -1 : l.index
					}]
				}))
			},
			3123: function (e, t, r) {
				"use strict";
				var o = r(7007),
					n = r(7850),
					i = r(9670),
					a = r(4488),
					s = r(6707),
					u = r(1530),
					c = r(7466),
					l = r(7651),
					h = r(2261),
					p = r(7293),
					d = [].push,
					f = Math.min,
					g = 4294967295,
					b = !p((function () {
						return !RegExp(g, "y")
					}));
				o("split", 2, (function (e, t, r) {
					var o;
					return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
						var o = String(a(this)),
							i = void 0 === r ? g : r >>> 0;
						if (0 === i) return [];
						if (void 0 === e) return [o];
						if (!n(e)) return t.call(o, e, i);
						for (var s, u, c, l = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, b = new RegExp(e.source, p + "g");
							(s = h.call(b, o)) && !((u = b.lastIndex) > f && (l.push(o.slice(f, s.index)), s.length > 1 && s.index < o.length && d.apply(l, s.slice(1)), c = s[0].length, f = u, l.length >= i));) b.lastIndex === s.index && b.lastIndex++;
						return f === o.length ? !c && b.test("") || l.push("") : l.push(o.slice(f)), l.length > i ? l.slice(0, i) : l
					} : "0".split(void 0, 0).length ? function (e, r) {
						return void 0 === e && 0 === r ? [] : t.call(this, e, r)
					} : t, [function (t, r) {
						var n = a(this),
							i = null == t ? void 0 : t[e];
						return void 0 !== i ? i.call(t, n, r) : o.call(String(n), t, r)
					}, function (e, n) {
						var a = r(o, e, this, n, o !== t);
						if (a.done) return a.value;
						var h = i(e),
							p = String(this),
							d = s(h, RegExp),
							v = h.unicode,
							m = (h.ignoreCase ? "i" : "") + (h.multiline ? "m" : "") + (h.unicode ? "u" : "") + (b ? "y" : "g"),
							w = new d(b ? h : "^(?:" + h.source + ")", m),
							y = void 0 === n ? g : n >>> 0;
						if (0 === y) return [];
						if (0 === p.length) return null === l(w, p) ? [p] : [];
						for (var P = 0, x = 0, _ = []; x < p.length;) {
							w.lastIndex = b ? x : 0;
							var k, R = l(w, b ? p : p.slice(x));
							if (null === R || (k = f(c(w.lastIndex + (b ? 0 : x)), p.length)) === P) x = u(p, x, v);
							else {
								if (_.push(p.slice(P, x)), _.length === y) return _;
								for (var I = 1; I <= R.length - 1; I++)
									if (_.push(R[I]), _.length === y) return _;
								x = P = k
							}
						}
						return _.push(p.slice(P)), _
					}]
				}), !b)
			},
			3948: function (e, t, r) {
				var o = r(7854),
					n = r(8324),
					i = r(6992),
					a = r(8880),
					s = r(5112),
					u = s("iterator"),
					c = s("toStringTag"),
					l = i.values;
				for (var h in n) {
					var p = o[h],
						d = p && p.prototype;
					if (d) {
						if (d[u] !== l) try {
							a(d, u, l)
						} catch (e) {
							d[u] = l
						}
						if (d[c] || a(d, c, h), n[h])
							for (var f in i)
								if (d[f] !== i[f]) try {
									a(d, f, i[f])
								} catch (e) {
									d[f] = i[f]
								}
					}
				}
			},
			1637: function (e, t, r) {
				"use strict";
				r(6992);
				var o = r(2109),
					n = r(5005),
					i = r(590),
					a = r(1320),
					s = r(2248),
					u = r(8003),
					c = r(4994),
					l = r(9909),
					h = r(5787),
					p = r(6656),
					d = r(9974),
					f = r(648),
					g = r(9670),
					b = r(111),
					v = r(30),
					m = r(9114),
					w = r(8554),
					y = r(1246),
					P = r(5112),
					x = n("fetch"),
					_ = n("Headers"),
					k = P("iterator"),
					R = "URLSearchParams",
					I = "URLSearchParamsIterator",
					S = l.set,
					T = l.getterFor(R),
					C = l.getterFor(I),
					L = /\+/g,
					E = Array(4),
					B = function (e) {
						return E[e - 1] || (E[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
					},
					M = function (e) {
						try {
							return decodeURIComponent(e)
						} catch (t) {
							return e
						}
					},
					$ = function (e) {
						var t = e.replace(L, " "),
							r = 4;
						try {
							return decodeURIComponent(t)
						} catch (e) {
							for (; r;) t = t.replace(B(r--), M);
							return t
						}
					},
					U = /[!'()~]|%20/g,
					F = {
						"!": "%21",
						"'": "%27",
						"(": "%28",
						")": "%29",
						"~": "%7E",
						"%20": "+"
					},
					N = function (e) {
						return F[e]
					},
					A = function (e) {
						return encodeURIComponent(e).replace(U, N)
					},
					O = function (e, t) {
						if (t)
							for (var r, o, n = t.split("&"), i = 0; i < n.length;)(r = n[i++]).length && (o = r.split("="), e.push({
								key: $(o.shift()),
								value: $(o.join("="))
							}))
					},
					D = function (e) {
						this.entries.length = 0, O(this.entries, e)
					},
					W = function (e, t) {
						if (e < t) throw TypeError("Not enough arguments")
					},
					j = c((function (e, t) {
						S(this, {
							type: I,
							iterator: w(T(e).entries),
							kind: t
						})
					}), "Iterator", (function () {
						var e = C(this),
							t = e.kind,
							r = e.iterator.next(),
							o = r.value;
						return r.done || (r.value = "keys" === t ? o.key : "values" === t ? o.value : [o.key, o.value]), r
					})),
					H = function () {
						h(this, H, R);
						var e, t, r, o, n, i, a, s, u, c = arguments.length > 0 ? arguments[0] : void 0,
							l = this,
							d = [];
						if (S(l, {
								type: R,
								entries: d,
								updateURL: function () {},
								updateSearchParams: D
							}), void 0 !== c)
							if (b(c))
								if ("function" == typeof (e = y(c)))
									for (r = (t = e.call(c)).next; !(o = r.call(t)).done;) {
										if ((a = (i = (n = w(g(o.value))).next).call(n)).done || (s = i.call(n)).done || !i.call(n).done) throw TypeError("Expected sequence with length 2");
										d.push({
											key: a.value + "",
											value: s.value + ""
										})
									} else
										for (u in c) p(c, u) && d.push({
											key: u,
											value: c[u] + ""
										});
								else O(d, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "")
					},
					z = H.prototype;
				s(z, {
					append: function (e, t) {
						W(arguments.length, 2);
						var r = T(this);
						r.entries.push({
							key: e + "",
							value: t + ""
						}), r.updateURL()
					},
					delete: function (e) {
						W(arguments.length, 1);
						for (var t = T(this), r = t.entries, o = e + "", n = 0; n < r.length;) r[n].key === o ? r.splice(n, 1) : n++;
						t.updateURL()
					},
					get: function (e) {
						W(arguments.length, 1);
						for (var t = T(this).entries, r = e + "", o = 0; o < t.length; o++)
							if (t[o].key === r) return t[o].value;
						return null
					},
					getAll: function (e) {
						W(arguments.length, 1);
						for (var t = T(this).entries, r = e + "", o = [], n = 0; n < t.length; n++) t[n].key === r && o.push(t[n].value);
						return o
					},
					has: function (e) {
						W(arguments.length, 1);
						for (var t = T(this).entries, r = e + "", o = 0; o < t.length;)
							if (t[o++].key === r) return !0;
						return !1
					},
					set: function (e, t) {
						W(arguments.length, 1);
						for (var r, o = T(this), n = o.entries, i = !1, a = e + "", s = t + "", u = 0; u < n.length; u++)(r = n[u]).key === a && (i ? n.splice(u--, 1) : (i = !0, r.value = s));
						i || n.push({
							key: a,
							value: s
						}), o.updateURL()
					},
					sort: function () {
						var e, t, r, o = T(this),
							n = o.entries,
							i = n.slice();
						for (n.length = 0, r = 0; r < i.length; r++) {
							for (e = i[r], t = 0; t < r; t++)
								if (n[t].key > e.key) {
									n.splice(t, 0, e);
									break
								}
							t === r && n.push(e)
						}
						o.updateURL()
					},
					forEach: function (e) {
						for (var t, r = T(this).entries, o = d(e, arguments.length > 1 ? arguments[1] : void 0, 3), n = 0; n < r.length;) o((t = r[n++]).value, t.key, this)
					},
					keys: function () {
						return new j(this, "keys")
					},
					values: function () {
						return new j(this, "values")
					},
					entries: function () {
						return new j(this, "entries")
					}
				}, {
					enumerable: !0
				}), a(z, k, z.entries), a(z, "toString", (function () {
					for (var e, t = T(this).entries, r = [], o = 0; o < t.length;) e = t[o++], r.push(A(e.key) + "=" + A(e.value));
					return r.join("&")
				}), {
					enumerable: !0
				}), u(H, R), o({
					global: !0,
					forced: !i
				}, {
					URLSearchParams: H
				}), i || "function" != typeof x || "function" != typeof _ || o({
					global: !0,
					enumerable: !0,
					forced: !0
				}, {
					fetch: function (e) {
						var t, r, o, n = [e];
						return arguments.length > 1 && (b(t = arguments[1]) && (r = t.body, f(r) === R && ((o = t.headers ? new _(t.headers) : new _).has("content-type") || o.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = v(t, {
							body: m(0, String(r)),
							headers: m(0, o)
						}))), n.push(t)), x.apply(this, n)
					}
				}), e.exports = {
					URLSearchParams: H,
					getState: T
				}
			},
			285: function (e, t, r) {
				"use strict";
				r(8783);
				var o, n = r(2109),
					i = r(9781),
					a = r(590),
					s = r(7854),
					u = r(6048),
					c = r(1320),
					l = r(5787),
					h = r(6656),
					p = r(1574),
					d = r(8457),
					f = r(8710).codeAt,
					g = r(3197),
					b = r(8003),
					v = r(1637),
					m = r(9909),
					w = s.URL,
					y = v.URLSearchParams,
					P = v.getState,
					x = m.set,
					_ = m.getterFor("URL"),
					k = Math.floor,
					R = Math.pow,
					I = "Invalid scheme",
					S = "Invalid host",
					T = "Invalid port",
					C = /[A-Za-z]/,
					L = /[\d+-.A-Za-z]/,
					E = /\d/,
					B = /^(0x|0X)/,
					M = /^[0-7]+$/,
					$ = /^\d+$/,
					U = /^[\dA-Fa-f]+$/,
					F = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
					N = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
					A = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
					O = /[\u0009\u000A\u000D]/g,
					D = function (e, t) {
						var r, o, n;
						if ("[" == t.charAt(0)) {
							if ("]" != t.charAt(t.length - 1)) return S;
							if (!(r = j(t.slice(1, -1)))) return S;
							e.host = r
						} else if (Z(e)) {
							if (t = g(t), F.test(t)) return S;
							if (null === (r = W(t))) return S;
							e.host = r
						} else {
							if (N.test(t)) return S;
							for (r = "", o = d(t), n = 0; n < o.length; n++) r += G(o[n], z);
							e.host = r
						}
					},
					W = function (e) {
						var t, r, o, n, i, a, s, u = e.split(".");
						if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
						for (r = [], o = 0; o < t; o++) {
							if ("" == (n = u[o])) return e;
							if (i = 10, n.length > 1 && "0" == n.charAt(0) && (i = B.test(n) ? 16 : 8, n = n.slice(8 == i ? 1 : 2)), "" === n) a = 0;
							else {
								if (!(10 == i ? $ : 8 == i ? M : U).test(n)) return e;
								a = parseInt(n, i)
							}
							r.push(a)
						}
						for (o = 0; o < t; o++)
							if (a = r[o], o == t - 1) {
								if (a >= R(256, 5 - t)) return null
							} else if (a > 255) return null;
						for (s = r.pop(), o = 0; o < r.length; o++) s += r[o] * R(256, 3 - o);
						return s
					},
					j = function (e) {
						var t, r, o, n, i, a, s, u = [0, 0, 0, 0, 0, 0, 0, 0],
							c = 0,
							l = null,
							h = 0,
							p = function () {
								return e.charAt(h)
							};
						if (":" == p()) {
							if (":" != e.charAt(1)) return;
							h += 2, l = ++c
						}
						for (; p();) {
							if (8 == c) return;
							if (":" != p()) {
								for (t = r = 0; r < 4 && U.test(p());) t = 16 * t + parseInt(p(), 16), h++, r++;
								if ("." == p()) {
									if (0 == r) return;
									if (h -= r, c > 6) return;
									for (o = 0; p();) {
										if (n = null, o > 0) {
											if (!("." == p() && o < 4)) return;
											h++
										}
										if (!E.test(p())) return;
										for (; E.test(p());) {
											if (i = parseInt(p(), 10), null === n) n = i;
											else {
												if (0 == n) return;
												n = 10 * n + i
											}
											if (n > 255) return;
											h++
										}
										u[c] = 256 * u[c] + n, 2 != ++o && 4 != o || c++
									}
									if (4 != o) return;
									break
								}
								if (":" == p()) {
									if (h++, !p()) return
								} else if (p()) return;
								u[c++] = t
							} else {
								if (null !== l) return;
								h++, l = ++c
							}
						}
						if (null !== l)
							for (a = c - l, c = 7; 0 != c && a > 0;) s = u[c], u[c--] = u[l + a - 1], u[l + --a] = s;
						else if (8 != c) return;
						return u
					},
					H = function (e) {
						var t, r, o, n;
						if ("number" == typeof e) {
							for (t = [], r = 0; r < 4; r++) t.unshift(e % 256), e = k(e / 256);
							return t.join(".")
						}
						if ("object" == typeof e) {
							for (t = "", o = function (e) {
									for (var t = null, r = 1, o = null, n = 0, i = 0; i < 8; i++) 0 !== e[i] ? (n > r && (t = o, r = n), o = null, n = 0) : (null === o && (o = i), ++n);
									return n > r && (t = o, r = n), t
								}(e), r = 0; r < 8; r++) n && 0 === e[r] || (n && (n = !1), o === r ? (t += r ? ":" : "::", n = !0) : (t += e[r].toString(16), r < 7 && (t += ":")));
							return "[" + t + "]"
						}
						return e
					},
					z = {},
					V = p({}, z, {
						" ": 1,
						'"': 1,
						"<": 1,
						">": 1,
						"`": 1
					}),
					q = p({}, V, {
						"#": 1,
						"?": 1,
						"{": 1,
						"}": 1
					}),
					X = p({}, q, {
						"/": 1,
						":": 1,
						";": 1,
						"=": 1,
						"@": 1,
						"[": 1,
						"\\": 1,
						"]": 1,
						"^": 1,
						"|": 1
					}),
					G = function (e, t) {
						var r = f(e, 0);
						return r > 32 && r < 127 && !h(t, e) ? e : encodeURIComponent(e)
					},
					Y = {
						ftp: 21,
						file: null,
						http: 80,
						https: 443,
						ws: 80,
						wss: 443
					},
					Z = function (e) {
						return h(Y, e.scheme)
					},
					K = function (e) {
						return "" != e.username || "" != e.password
					},
					J = function (e) {
						return !e.host || e.cannotBeABaseURL || "file" == e.scheme
					},
					Q = function (e, t) {
						var r;
						return 2 == e.length && C.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r)
					},
					ee = function (e) {
						var t;
						return e.length > 1 && Q(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
					},
					te = function (e) {
						var t = e.path,
							r = t.length;
						!r || "file" == e.scheme && 1 == r && Q(t[0], !0) || t.pop()
					},
					re = function (e) {
						return "." === e || "%2e" === e.toLowerCase()
					},
					oe = {},
					ne = {},
					ie = {},
					ae = {},
					se = {},
					ue = {},
					ce = {},
					le = {},
					he = {},
					pe = {},
					de = {},
					fe = {},
					ge = {},
					be = {},
					ve = {},
					me = {},
					we = {},
					ye = {},
					Pe = {},
					xe = {},
					_e = {},
					ke = function (e, t, r, n) {
						var i, a, s, u, c, l = r || oe,
							p = 0,
							f = "",
							g = !1,
							b = !1,
							v = !1;
						for (r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(A, "")), t = t.replace(O, ""), i = d(t); p <= i.length;) {
							switch (a = i[p], l) {
								case oe:
									if (!a || !C.test(a)) {
										if (r) return I;
										l = ie;
										continue
									}
									f += a.toLowerCase(), l = ne;
									break;
								case ne:
									if (a && (L.test(a) || "+" == a || "-" == a || "." == a)) f += a.toLowerCase();
									else {
										if (":" != a) {
											if (r) return I;
											f = "", l = ie, p = 0;
											continue
										}
										if (r && (Z(e) != h(Y, f) || "file" == f && (K(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
										if (e.scheme = f, r) return void(Z(e) && Y[e.scheme] == e.port && (e.port = null));
										f = "", "file" == e.scheme ? l = be : Z(e) && n && n.scheme == e.scheme ? l = ae : Z(e) ? l = le : "/" == i[p + 1] ? (l = se, p++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = Pe)
									}
									break;
								case ie:
									if (!n || n.cannotBeABaseURL && "#" != a) return I;
									if (n.cannotBeABaseURL && "#" == a) {
										e.scheme = n.scheme, e.path = n.path.slice(), e.query = n.query, e.fragment = "", e.cannotBeABaseURL = !0, l = _e;
										break
									}
									l = "file" == n.scheme ? be : ue;
									continue;
								case ae:
									if ("/" != a || "/" != i[p + 1]) {
										l = ue;
										continue
									}
									l = he, p++;
									break;
								case se:
									if ("/" == a) {
										l = pe;
										break
									}
									l = ye;
									continue;
								case ue:
									if (e.scheme = n.scheme, a == o) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query;
									else if ("/" == a || "\\" == a && Z(e)) l = ce;
									else if ("?" == a) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = "", l = xe;
									else {
										if ("#" != a) {
											e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.path.pop(), l = ye;
											continue
										}
										e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query, e.fragment = "", l = _e
									}
									break;
								case ce:
									if (!Z(e) || "/" != a && "\\" != a) {
										if ("/" != a) {
											e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, l = ye;
											continue
										}
										l = pe
									} else l = he;
									break;
								case le:
									if (l = he, "/" != a || "/" != f.charAt(p + 1)) continue;
									p++;
									break;
								case he:
									if ("/" != a && "\\" != a) {
										l = pe;
										continue
									}
									break;
								case pe:
									if ("@" == a) {
										g && (f = "%40" + f), g = !0, s = d(f);
										for (var m = 0; m < s.length; m++) {
											var w = s[m];
											if (":" != w || v) {
												var y = G(w, X);
												v ? e.password += y : e.username += y
											} else v = !0
										}
										f = ""
									} else if (a == o || "/" == a || "?" == a || "#" == a || "\\" == a && Z(e)) {
										if (g && "" == f) return "Invalid authority";
										p -= d(f).length + 1, f = "", l = de
									} else f += a;
									break;
								case de:
								case fe:
									if (r && "file" == e.scheme) {
										l = me;
										continue
									}
									if (":" != a || b) {
										if (a == o || "/" == a || "?" == a || "#" == a || "\\" == a && Z(e)) {
											if (Z(e) && "" == f) return S;
											if (r && "" == f && (K(e) || null !== e.port)) return;
											if (u = D(e, f)) return u;
											if (f = "", l = we, r) return;
											continue
										}
										"[" == a ? b = !0 : "]" == a && (b = !1), f += a
									} else {
										if ("" == f) return S;
										if (u = D(e, f)) return u;
										if (f = "", l = ge, r == fe) return
									}
									break;
								case ge:
									if (!E.test(a)) {
										if (a == o || "/" == a || "?" == a || "#" == a || "\\" == a && Z(e) || r) {
											if ("" != f) {
												var P = parseInt(f, 10);
												if (P > 65535) return T;
												e.port = Z(e) && P === Y[e.scheme] ? null : P, f = ""
											}
											if (r) return;
											l = we;
											continue
										}
										return T
									}
									f += a;
									break;
								case be:
									if (e.scheme = "file", "/" == a || "\\" == a) l = ve;
									else {
										if (!n || "file" != n.scheme) {
											l = ye;
											continue
										}
										if (a == o) e.host = n.host, e.path = n.path.slice(), e.query = n.query;
										else if ("?" == a) e.host = n.host, e.path = n.path.slice(), e.query = "", l = xe;
										else {
											if ("#" != a) {
												ee(i.slice(p).join("")) || (e.host = n.host, e.path = n.path.slice(), te(e)), l = ye;
												continue
											}
											e.host = n.host, e.path = n.path.slice(), e.query = n.query, e.fragment = "", l = _e
										}
									}
									break;
								case ve:
									if ("/" == a || "\\" == a) {
										l = me;
										break
									}
									n && "file" == n.scheme && !ee(i.slice(p).join("")) && (Q(n.path[0], !0) ? e.path.push(n.path[0]) : e.host = n.host), l = ye;
									continue;
								case me:
									if (a == o || "/" == a || "\\" == a || "?" == a || "#" == a) {
										if (!r && Q(f)) l = ye;
										else if ("" == f) {
											if (e.host = "", r) return;
											l = we
										} else {
											if (u = D(e, f)) return u;
											if ("localhost" == e.host && (e.host = ""), r) return;
											f = "", l = we
										}
										continue
									}
									f += a;
									break;
								case we:
									if (Z(e)) {
										if (l = ye, "/" != a && "\\" != a) continue
									} else if (r || "?" != a)
										if (r || "#" != a) {
											if (a != o && (l = ye, "/" != a)) continue
										} else e.fragment = "", l = _e;
									else e.query = "", l = xe;
									break;
								case ye:
									if (a == o || "/" == a || "\\" == a && Z(e) || !r && ("?" == a || "#" == a)) {
										if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (te(e), "/" == a || "\\" == a && Z(e) || e.path.push("")) : re(f) ? "/" == a || "\\" == a && Z(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Q(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (a == o || "?" == a || "#" == a))
											for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
										"?" == a ? (e.query = "", l = xe) : "#" == a && (e.fragment = "", l = _e)
									} else f += G(a, q);
									break;
								case Pe:
									"?" == a ? (e.query = "", l = xe) : "#" == a ? (e.fragment = "", l = _e) : a != o && (e.path[0] += G(a, z));
									break;
								case xe:
									r || "#" != a ? a != o && ("'" == a && Z(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : G(a, z)) : (e.fragment = "", l = _e);
									break;
								case _e:
									a != o && (e.fragment += G(a, V))
							}
							p++
						}
					},
					Re = function (e) {
						var t, r, o = l(this, Re, "URL"),
							n = arguments.length > 1 ? arguments[1] : void 0,
							a = String(e),
							s = x(o, {
								type: "URL"
							});
						if (void 0 !== n)
							if (n instanceof Re) t = _(n);
							else if (r = ke(t = {}, String(n))) throw TypeError(r);
						if (r = ke(s, a, null, t)) throw TypeError(r);
						var u = s.searchParams = new y,
							c = P(u);
						c.updateSearchParams(s.query), c.updateURL = function () {
							s.query = String(u) || null
						}, i || (o.href = Se.call(o), o.origin = Te.call(o), o.protocol = Ce.call(o), o.username = Le.call(o), o.password = Ee.call(o), o.host = Be.call(o), o.hostname = Me.call(o), o.port = $e.call(o), o.pathname = Ue.call(o), o.search = Fe.call(o), o.searchParams = Ne.call(o), o.hash = Ae.call(o))
					},
					Ie = Re.prototype,
					Se = function () {
						var e = _(this),
							t = e.scheme,
							r = e.username,
							o = e.password,
							n = e.host,
							i = e.port,
							a = e.path,
							s = e.query,
							u = e.fragment,
							c = t + ":";
						return null !== n ? (c += "//", K(e) && (c += r + (o ? ":" + o : "") + "@"), c += H(n), null !== i && (c += ":" + i)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (c += "?" + s), null !== u && (c += "#" + u), c
					},
					Te = function () {
						var e = _(this),
							t = e.scheme,
							r = e.port;
						if ("blob" == t) try {
							return new URL(t.path[0]).origin
						} catch (e) {
							return "null"
						}
						return "file" != t && Z(e) ? t + "://" + H(e.host) + (null !== r ? ":" + r : "") : "null"
					},
					Ce = function () {
						return _(this).scheme + ":"
					},
					Le = function () {
						return _(this).username
					},
					Ee = function () {
						return _(this).password
					},
					Be = function () {
						var e = _(this),
							t = e.host,
							r = e.port;
						return null === t ? "" : null === r ? H(t) : H(t) + ":" + r
					},
					Me = function () {
						var e = _(this).host;
						return null === e ? "" : H(e)
					},
					$e = function () {
						var e = _(this).port;
						return null === e ? "" : String(e)
					},
					Ue = function () {
						var e = _(this),
							t = e.path;
						return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
					},
					Fe = function () {
						var e = _(this).query;
						return e ? "?" + e : ""
					},
					Ne = function () {
						return _(this).searchParams
					},
					Ae = function () {
						var e = _(this).fragment;
						return e ? "#" + e : ""
					},
					Oe = function (e, t) {
						return {
							get: e,
							set: t,
							configurable: !0,
							enumerable: !0
						}
					};
				if (i && u(Ie, {
						href: Oe(Se, (function (e) {
							var t = _(this),
								r = String(e),
								o = ke(t, r);
							if (o) throw TypeError(o);
							P(t.searchParams).updateSearchParams(t.query)
						})),
						origin: Oe(Te),
						protocol: Oe(Ce, (function (e) {
							var t = _(this);
							ke(t, String(e) + ":", oe)
						})),
						username: Oe(Le, (function (e) {
							var t = _(this),
								r = d(String(e));
							if (!J(t)) {
								t.username = "";
								for (var o = 0; o < r.length; o++) t.username += G(r[o], X)
							}
						})),
						password: Oe(Ee, (function (e) {
							var t = _(this),
								r = d(String(e));
							if (!J(t)) {
								t.password = "";
								for (var o = 0; o < r.length; o++) t.password += G(r[o], X)
							}
						})),
						host: Oe(Be, (function (e) {
							var t = _(this);
							t.cannotBeABaseURL || ke(t, String(e), de)
						})),
						hostname: Oe(Me, (function (e) {
							var t = _(this);
							t.cannotBeABaseURL || ke(t, String(e), fe)
						})),
						port: Oe($e, (function (e) {
							var t = _(this);
							J(t) || ("" == (e = String(e)) ? t.port = null : ke(t, e, ge))
						})),
						pathname: Oe(Ue, (function (e) {
							var t = _(this);
							t.cannotBeABaseURL || (t.path = [], ke(t, e + "", we))
						})),
						search: Oe(Fe, (function (e) {
							var t = _(this);
							"" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", ke(t, e, xe)), P(t.searchParams).updateSearchParams(t.query)
						})),
						searchParams: Oe(Ne),
						hash: Oe(Ae, (function (e) {
							var t = _(this);
							"" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", ke(t, e, _e)) : t.fragment = null
						}))
					}), c(Ie, "toJSON", (function () {
						return Se.call(this)
					}), {
						enumerable: !0
					}), c(Ie, "toString", (function () {
						return Se.call(this)
					}), {
						enumerable: !0
					}), w) {
					var De = w.createObjectURL,
						We = w.revokeObjectURL;
					De && c(Re, "createObjectURL", (function (e) {
						return De.apply(w, arguments)
					})), We && c(Re, "revokeObjectURL", (function (e) {
						return We.apply(w, arguments)
					}))
				}
				b(Re, "URL"), n({
					global: !0,
					forced: !a,
					sham: !i
				}, {
					URL: Re
				})
			},
			5666: function (e) {
				var t = function (e) {
					"use strict";
					var t, r = Object.prototype,
						o = r.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						i = n.iterator || "@@iterator",
						a = n.asyncIterator || "@@asyncIterator",
						s = n.toStringTag || "@@toStringTag";

					function u(e, t, r) {
						return Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						u({}, "")
					} catch (e) {
						u = function (e, t, r) {
							return e[t] = r
						}
					}

					function c(e, t, r, o) {
						var n = t && t.prototype instanceof b ? t : b,
							i = Object.create(n.prototype),
							a = new T(o || []);
						return i._invoke = function (e, t, r) {
							var o = h;
							return function (n, i) {
								if (o === d) throw new Error("Generator is already running");
								if (o === f) {
									if ("throw" === n) throw i;
									return L()
								}
								for (r.method = n, r.arg = i;;) {
									var a = r.delegate;
									if (a) {
										var s = R(a, r);
										if (s) {
											if (s === g) continue;
											return s
										}
									}
									if ("next" === r.method) r.sent = r._sent = r.arg;
									else if ("throw" === r.method) {
										if (o === h) throw o = f, r.arg;
										r.dispatchException(r.arg)
									} else "return" === r.method && r.abrupt("return", r.arg);
									o = d;
									var u = l(e, t, r);
									if ("normal" === u.type) {
										if (o = r.done ? f : p, u.arg === g) continue;
										return {
											value: u.arg,
											done: r.done
										}
									}
									"throw" === u.type && (o = f, r.method = "throw", r.arg = u.arg)
								}
							}
						}(e, r, a), i
					}

					function l(e, t, r) {
						try {
							return {
								type: "normal",
								arg: e.call(t, r)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = c;
					var h = "suspendedStart",
						p = "suspendedYield",
						d = "executing",
						f = "completed",
						g = {};

					function b() {}

					function v() {}

					function m() {}
					var w = {};
					w[i] = function () {
						return this
					};
					var y = Object.getPrototypeOf,
						P = y && y(y(C([])));
					P && P !== r && o.call(P, i) && (w = P);
					var x = m.prototype = b.prototype = Object.create(w);

					function _(e) {
						["next", "throw", "return"].forEach((function (t) {
							u(e, t, (function (e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function k(e, t) {
						function r(n, i, a, s) {
							var u = l(e[n], e, i);
							if ("throw" !== u.type) {
								var c = u.arg,
									h = c.value;
								return h && "object" == typeof h && o.call(h, "__await") ? t.resolve(h.__await).then((function (e) {
									r("next", e, a, s)
								}), (function (e) {
									r("throw", e, a, s)
								})) : t.resolve(h).then((function (e) {
									c.value = e, a(c)
								}), (function (e) {
									return r("throw", e, a, s)
								}))
							}
							s(u.arg)
						}
						var n;
						this._invoke = function (e, o) {
							function i() {
								return new t((function (t, n) {
									r(e, o, t, n)
								}))
							}
							return n = n ? n.then(i, i) : i()
						}
					}

					function R(e, r) {
						var o = e.iterator[r.method];
						if (o === t) {
							if (r.delegate = null, "throw" === r.method) {
								if (e.iterator.return && (r.method = "return", r.arg = t, R(e, r), "throw" === r.method)) return g;
								r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
							}
							return g
						}
						var n = l(o, e.iterator, r.arg);
						if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, g;
						var i = n.arg;
						return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
					}

					function I(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function S(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function T(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(I, this), this.reset(!0)
					}

					function C(e) {
						if (e) {
							var r = e[i];
							if (r) return r.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var n = -1,
									a = function r() {
										for (; ++n < e.length;)
											if (o.call(e, n)) return r.value = e[n], r.done = !1, r;
										return r.value = t, r.done = !0, r
									};
								return a.next = a
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: t,
							done: !0
						}
					}
					return v.prototype = x.constructor = m, m.constructor = v, v.displayName = u(m, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function (e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, u(e, s, "GeneratorFunction")), e.prototype = Object.create(x), e
					}, e.awrap = function (e) {
						return {
							__await: e
						}
					}, _(k.prototype), k.prototype[a] = function () {
						return this
					}, e.AsyncIterator = k, e.async = function (t, r, o, n, i) {
						void 0 === i && (i = Promise);
						var a = new k(c(t, r, o, n), i);
						return e.isGeneratorFunction(r) ? a : a.next().then((function (e) {
							return e.done ? e.value : a.next()
						}))
					}, _(x), u(x, s, "Generator"), x[i] = function () {
						return this
					}, x.toString = function () {
						return "[object Generator]"
					}, e.keys = function (e) {
						var t = [];
						for (var r in e) t.push(r);
						return t.reverse(),
							function r() {
								for (; t.length;) {
									var o = t.pop();
									if (o in e) return r.value = o, r.done = !1, r
								}
								return r.done = !0, r
							}
					}, e.values = C, T.prototype = {
						constructor: T,
						reset: function (e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(S), !e)
								for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
						},
						stop: function () {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;

							function n(o, n) {
								return s.type = "throw", s.arg = e, r.next = o, n && (r.method = "next", r.arg = t), !!n
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									s = a.completion;
								if ("root" === a.tryLoc) return n("end");
								if (a.tryLoc <= this.prev) {
									var u = o.call(a, "catchLoc"),
										c = o.call(a, "finallyLoc");
									if (u && c) {
										if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return n(a.finallyLoc)
									} else if (u) {
										if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return n(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function (e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var n = this.tryEntries[r];
								if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
									var i = n;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
						},
						complete: function (e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
						},
						finish: function (e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), g
							}
						},
						catch: function (e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.tryLoc === e) {
									var o = r.completion;
									if ("throw" === o.type) {
										var n = o.arg;
										S(r)
									}
									return n
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function (e, r, o) {
							return this.delegate = {
								iterator: C(e),
								resultName: r,
								nextLoc: o
							}, "next" === this.method && (this.arg = t), g
						}
					}, e
				}(e.exports);
				try {
					regeneratorRuntime = t
				} catch (e) {
					Function("r", "regeneratorRuntime = r")(t)
				}
			},
			3609: function (e) {
				"use strict";
				e.exports = jQuery
			}
		},
		__webpack_module_cache__ = {};

	function __webpack_require__(e) {
		if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
		var t = __webpack_module_cache__[e] = {
			exports: {}
		};
		return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports
	}
	__webpack_require__.m = __webpack_modules__, __webpack_require__.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return __webpack_require__.d(t, {
				a: t
			}), t
		}, __webpack_require__.d = function (e, t) {
			for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: t[r]
			})
		}, __webpack_require__.g = function () {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" == typeof window) return window
			}
		}(), __webpack_require__.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, __webpack_require__.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		function () {
			var e = {
					898: 0
				},
				t = [
					[6557]
				],
				r = function () {};

			function o() {
				for (var r, o = 0; o < t.length; o++) {
					for (var n = t[o], i = !0, a = 1; a < n.length; a++) {
						var s = n[a];
						0 !== e[s] && (i = !1)
					}
					i && (t.splice(o--, 1), r = __webpack_require__(__webpack_require__.s = n[0]))
				}
				return 0 === t.length && (__webpack_require__.x(), __webpack_require__.x = function () {}), r
			}
			__webpack_require__.x = function () {
				__webpack_require__.x = function () {}, i = i.slice();
				for (var e = 0; e < i.length; e++) n(i[e]);
				return (r = o)()
			};
			var n = function (o) {
					for (var n, i, s = o[0], u = o[1], c = o[2], l = o[3], h = 0, p = []; h < s.length; h++) i = s[h], __webpack_require__.o(e, i) && e[i] && p.push(e[i][0]), e[i] = 0;
					for (n in u) __webpack_require__.o(u, n) && (__webpack_require__.m[n] = u[n]);
					for (c && c(__webpack_require__), a(o); p.length;) p.shift()();
					return l && t.push.apply(t, l), r()
				},
				i = self.webpackChunk_internetarchive_bookreader = self.webpackChunk_internetarchive_bookreader || [],
				a = i.push.bind(i);
			i.push = n
		}(), __webpack_require__.x()
})();
//# sourceMappingURL=BookReader.js.map