webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var btnOpen = document.querySelector('.sidenav__btn');
		var btnClose = document.querySelector('.sidenav__close');
		var body = document.querySelector('body');
		var wrap = document.querySelector('.sidenav__body');
		var activeClass = 'open-side';
	
		var open = function open() {
			body.classList.add(activeClass);
		};
	
		var close = function close() {
			body.classList.remove(activeClass);
		};
	
		btnOpen.addEventListener('click', open);
	};

/***/ }

})
//# sourceMappingURL=0.f6b1e1ed96e900f30af4.hot-update.js.map