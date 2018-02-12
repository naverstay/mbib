webpackHotUpdate(0,{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(8);
	
	var _isMobile = __webpack_require__(9);
	
	var _isMobile2 = _interopRequireDefault(_isMobile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modal = function () {
		var isMobile = (0, _isMobile2.default)();
		var options = {
			type: 'inline',
			closeBtnInside: true,
			removalDelay: 500,
			fixedContentPos: true,
			mainClass: 'mfp-zoom-in'
		};
	
		(0, _jquery2.default)('.link-modal').magnificPopup(options);
	}();
	
	exports.default = modal;

/***/ })

})
//# sourceMappingURL=0.916628789ccde9f4129c.hot-update.js.map