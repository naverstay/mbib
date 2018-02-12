webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _slickCarousel = __webpack_require__(5);
	
	var _slickCarousel2 = _interopRequireDefault(_slickCarousel);
	
	var _tab = __webpack_require__(7);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _special = __webpack_require__(8);
	
	var _special2 = _interopRequireDefault(_special);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		(0, _jquery2.default)('.select').styler();
		// special();
		(0, _jquery2.default)(".special__list").slick({
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 3
		});
	});
	// import styler from 'jquery-form-styler';

/***/ }
])
//# sourceMappingURL=0.4e5785d85d1797179569.hot-update.js.map