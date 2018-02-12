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
		var authForm = document.querySelector('.form[name=auth]');
		var validatorClasses = {
			warning: 'form__warning',
			valid: 'input_valid',
			invalid: 'input_invalid',
			validated: 'input_validated'
		};
		var $form = (0, _hyperform2.default)(authForm, validatorClasses);
	}();
	
	exports.default = form;

/***/ }

})
//# sourceMappingURL=0.9bd595ec6d4b9c7987a4.hot-update.js.map