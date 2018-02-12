webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _tab = __webpack_require__(5);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _select = __webpack_require__(6);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _carousel = __webpack_require__(10);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _gallery = __webpack_require__(12);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _input = __webpack_require__(14);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _cardList = __webpack_require__(15);
	
	var _cardList2 = _interopRequireDefault(_cardList);
	
	var _sidenav = __webpack_require__(16);
	
	var _sidenav2 = _interopRequireDefault(_sidenav);
	
	var _modal = __webpack_require__(17);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _form = __webpack_require__(18);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _collapse = __webpack_require__(20);
	
	var _collapse2 = _interopRequireDefault(_collapse);
	
	var _geoplace = __webpack_require__(21);
	
	var _geoplace2 = _interopRequireDefault(_geoplace);
	
	__webpack_require__(22);
	
	__webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import 'select2';
	var checkTouch = function checkTouch() {
		if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
			document.body.classList.add('page_touch');
		}
	};
	// import styler from 'jquery-form-styler';
	
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		checkTouch();
	
		window.addEventListener('resize', checkTouch);
	
		(0, _sidenav2.default)();
	
		_carousel2.default.init();
	
		(0, _jquery2.default)('.select').select2({
			width: "100%"
		});
	
		_select2.default.init();
	
		_gallery2.default.init();
	
		(0, _collapse2.default)();
	
		(0, _input2.default)();
	
		/*var notyf = new Notyf();
	 	// Display an alert notification
	 notyf.alert('You must fill out the form before moving forward');
	 	// Display a success notification
	 notyf.confirm('Your changes have been successfully saved!');*/
	});

/***/ })
])
//# sourceMappingURL=0.1051c8c8ef0b0a88ec48.hot-update.js.map