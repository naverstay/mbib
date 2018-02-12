webpackHotUpdate(0,{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var collapse = function () {
		var wrap = (0, _jquery2.default)('.collapse');
		var head = (0, _jquery2.default)('.collapse').find('.collapse__head');
		var body = (0, _jquery2.default)('.collapse').find('.collapse__body');
	
		function toggle() {
			wrap.toggleClass('collapse_open');
		};
	
		function close() {
			wrap.removeClass('collapse_open');
		};
	
		head.on('click', toggle);
	}();
	
	exports.default = collapse;

/***/ })

})
//# sourceMappingURL=0.afb408df1ac50bc44579.hot-update.js.map