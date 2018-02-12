webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var btnOpen = document.querySelector('.sidenav__btn');
		var body = document.querySelector('body');
		var wrap = document.querySelector('.sidenav__body');
		var activeClass = 'open-side';
	
		var open = function open(e) {
			body.classList.add(activeClass);
		};
		btnOpen.addEventListener('click', open);
	};

/***/ }

})
//# sourceMappingURL=0.5444fdfa3ee7fe889b32.hot-update.js.map