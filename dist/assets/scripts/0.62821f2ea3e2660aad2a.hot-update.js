webpackHotUpdate(0,{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _hyperform = __webpack_require__(17);
	
	var _hyperform2 = _interopRequireDefault(_hyperform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var form = function () {
		var nextBtn = (0, _jquery2.default)('.form__btn-next');
		nextBtn.on('click', function (e) {
			e.preventDefault();
			var parent = (0, _jquery2.default)(this).closest('.form__step');
	
			parent.removeClass('form__step_active');
			parent.next().addClass('form__step_active');
		});
	}();
	
	exports.default = form;

/***/ }

})
//# sourceMappingURL=0.62821f2ea3e2660aad2a.hot-update.js.map