webpackHotUpdate(0,[
/* 0 */
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

/***/ }
])
//# sourceMappingURL=0.60710241b85215b1b030.hot-update.js.map