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
	
	__webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var form = function () {
		var authForm = document.querySelector('.form[name=auth]');
		var registrForm = document.querySelector('.form[name=registr]');
		var validatorClasses = {
			classes: {
				warning: 'form__warning',
				valid: 'input_valid',
				invalid: 'input_invalid',
				validated: 'input_validated'
			}
		};
		if (authForm) {
			var $formAuth = (0, _hyperform2.default)(authForm, validatorClasses);
		}
	
		if (registrForm) {
			var $formRegistr = (0, _hyperform2.default)(registrForm, validatorClasses);
		}
	}();
	
	exports.default = form;

/***/ }

})
//# sourceMappingURL=0.a9d305af267839976967.hot-update.js.map