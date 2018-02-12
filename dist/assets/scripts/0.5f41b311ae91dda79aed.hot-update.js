webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _tab = __webpack_require__(5);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	__webpack_require__(6);
	
	var _carousel = __webpack_require__(7);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _gallery = __webpack_require__(9);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _input = __webpack_require__(11);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _cardList = __webpack_require__(12);
	
	var _cardList2 = _interopRequireDefault(_cardList);
	
	var _sidenav = __webpack_require__(13);
	
	var _sidenav2 = _interopRequireDefault(_sidenav);
	
	var _modal = __webpack_require__(14);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _form = __webpack_require__(16);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _geoplace = __webpack_require__(18);
	
	var _geoplace2 = _interopRequireDefault(_geoplace);
	
	__webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		checkTouch();
	
		(0, _sidenav2.default)();
	
		_carousel2.default.init();
	
		(0, _jquery2.default)('.select').select2({
			width: "100%"
		});
	
		// select.init();
	
		_gallery2.default.init();
	
		(0, _input2.default)();
	});
	// import select from '../blocks/tab/tab';
	
	// import styler from 'jquery-form-styler';
	
	
	var checkTouch = function checkTouch() {
		if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
			document.body.classList.add('page_touch');
		}
	};

/***/ },

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var btnOpen = document.querySelector('.sidenav__btn');
		var btnClose = document.querySelector('.sidenav__close');
		var overlay = document.querySelector('.sidenav__overlay');
		var body = document.querySelector('body');
		var page = document.querySelector('html');
		var wrap = document.querySelector('.sidenav__body');
		var activeClass = 'page_open-side';
		var appVersion = navigator.appVersion;
		var isAndroid = /android/gi.test(appVersion);
		var isIOS = /iphone|ipad|ipod/gi.test(appVersion);
		var probablyMobile = undefined.isAndroid || undefined.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
		var scrollbarSize = void 0;
	
		var _getScrollbarSize = function _getScrollbarSize() {
			// thx David
			if (scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return scrollbarSize;
		};
	
		var _hasScrollbar = function _hasScrollbar() {
			var d = document,
			    b = d.body,
			    e = d.documentElement,
			    c = "client" + 'Height';
			a = "scroll" + 'Height';
	
			var hasScroll = /CSS/.test(d.compatMode) ? e[c] < e[a] : b[c] < b[a];
			return hasScroll;
		};
	
		var open = function open() {
			var s = _hasScrollbar() ? _getScrollbarSize() : 0;
			if (probablyMobile) {
				page.css({
					'margin-right': s,
					'overflow': 'hidden'
				});
			} else {
				page.wrap.css({
					'overflow': 'hidden'
				});
			};
			body.classList.add(activeClass);
		};
	
		var close = function close() {
			body.classList.remove(activeClass);
		};
	
		btnOpen.addEventListener('click', open);
		overlay.addEventListener('click', close);
		btnClose.addEventListener('click', close);
	
		/*(function() {
	 	Nav = function(target) {
	 		function t(target) {
	 			this.status = false;
	 			this.overlay = $('.overlay');
	 			this._menuTimer = void 0;
	 			this.body = $('#'+target);
	 			this.closeBtn = this.body.find('.side__btn');
	 			this.menuButton = $('.link-modal[href=' + target + ']');
	 		};
	 		return t.prototype._initEvents = function() {
	 			return this.menuButton.on(Event.CLICK, this._onMenuButtonClick),
	 			this.overlay.on(Event.CLICK, this._onNavOverlayClick)
	 		},
	 		t.prototype._onMenuButtonClick = function() {
	 			return this.status === false ? this.openMenu() : this.closeMenu()
	 		},
	 		t.prototype._onNavOverlayClick = function() {
	 			return this.status === true ? this.closeMenu() : void 0
	 		},
	 		t.prototype.openMenu = function(){
	 			this.status = true;
	 			this._savedScrollTop = $(window).scrollTop();
	 			var s = (this._hasScrollbar()) ? this._getScrollbarSize() : 0;
	 			if (!this.probablyMobile) {
	 				this.helper.css({
	 					'right' : s
	 				});
	 				this.wrap.css({
	 					'margin-right' : s,
	 					'overflow' : 'hidden'
	 				});
	 			} else {
	 				this.wrap.css({
	 					'overflow' : 'hidden'
	 				});
	 			};
	 
	 			this.overlay.css('display', 'block');
	 			this.body.css('display', 'block');
	 			this.overlay.addClass('showed');
	 			this.wrap.css({
	 				'overlay' : 'hidden'
	 			});
	 			this._menuTimer = setTimeout(function(t) {
	 				return function() {
	 					return t.body.addClass("showed")
	 				}
	 			}(this), 100);
	 			$('.form__file').trigger('refresh');
	 		},
	 		t.prototype.closeMenu = function(){
	 			this.status = false;
	 			this.overlay.css('display', 'none');
	 			this.body.css('display', 'none');
	 			if (!this.probablyMobile) {
	 				this.wrap.css({
	 					'margin-right' : '0',
	 					'overflow' : 'auto'
	 				});
	 				this.helper.css({
	 					'right' : '0'
	 				})
	 			} else {
	 				this.wrap.css({
	 					'overflow' : 'auto'
	 				});
	 			};
	 			this.overlay.removeClass('showed');
	 			this.body.removeClass('showed filled');
	 		},
	 		t;
	 	}();*/
	};

/***/ }

})
//# sourceMappingURL=0.5f41b311ae91dda79aed.hot-update.js.map