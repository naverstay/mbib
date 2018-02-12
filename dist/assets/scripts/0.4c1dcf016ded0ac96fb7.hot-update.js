webpackHotUpdate(0,{

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
	
		console.log(isAndroid);
	
		var isIOS = /iphone|ipad|ipod/gi.test(appVersion);
		var probablyMobile = isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
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
			var scroll = _hasScrollbar() ? _getScrollbarSize() : 0;
			if (probablyMobile) {
				page.css({
					'margin-right': scroll,
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
//# sourceMappingURL=0.4c1dcf016ded0ac96fb7.hot-update.js.map