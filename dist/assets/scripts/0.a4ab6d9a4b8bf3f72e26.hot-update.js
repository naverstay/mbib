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
	
	var _carousel = __webpack_require__(6);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _gallery = __webpack_require__(8);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		_carousel2.default.init();
	
		(0, _jquery2.default)('.select').styler();
	
		_gallery2.default.init();
	});
	// import styler from 'jquery-form-styler';

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fotorama\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.card__gallery-list').fotorama({});
		}
	};

/***/ }

})
//# sourceMappingURL=0.a4ab6d9a4b8bf3f72e26.hot-update.js.map