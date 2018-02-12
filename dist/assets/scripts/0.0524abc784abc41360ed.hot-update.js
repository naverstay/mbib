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
			var d = document;
			var b = d.body;
			var e = d.documentElement;
			var c = "client" + 'Height';
			var a = "scroll" + 'Height';
	
			var hasScroll = /CSS/.test(d.compatMode) ? e[c] < e[a] : b[c] < b[a];
			return hasScroll;
		};
	
		var open = function open() {
			var scroll = _hasScrollbar() ? _getScrollbarSize() : 0;
			if (probablyMobile) {
				page.style.overflow = 'hidden';
			} else {
				page.style.overflow = 'hidden';
				page.style.marginRight = scroll + 'px';
			}
			body.classList.add(activeClass);
		};
	
		var close = function close() {
			if (probablyMobile) {
				page.style.overflow = 'auto';
			} else {
				page.style.overflow = 'auto';
				page.style.marginRight = 0;
			}
			body.classList.remove(activeClass);
		};
	
		btnOpen.addEventListener('click', open);
		overlay.addEventListener('click', close);
		btnClose.addEventListener('click', close);
	};

/***/ }

})
//# sourceMappingURL=0.0524abc784abc41360ed.hot-update.js.map