webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _select = __webpack_require__(5);
	
	var _select2 = _interopRequireDefault(_select);
	
	__webpack_require__(6);
	
	var _carousel = __webpack_require__(7);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _gallery = __webpack_require__(9);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _input = __webpack_require__(11);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _sidenav = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../blocks/sidenav/sidenav\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _sidenav2 = _interopRequireDefault(_sidenav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import select from '../blocks/tab/tab';
	
	// import styler from 'jquery-form-styler';
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		checkTouch();
	
		_carousel2.default.init();
	
		// $('.select').styler();
	
		(0, _jquery2.default)('.select').select2({
			width: "100%"
		});
	
		// select.init();
	
		_gallery2.default.init();
	
		(0, _input2.default)();
	});
	
	var checkTouch = function checkTouch() {
		if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
			document.body.classList.add('page_touch');
		}
	};

/***/ }
])
//# sourceMappingURL=0.498b9ae6059460681c95.hot-update.js.map