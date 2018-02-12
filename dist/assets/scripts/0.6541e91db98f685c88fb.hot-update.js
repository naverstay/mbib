webpackHotUpdate(0,{

/***/ 0:
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
	
	__webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		_carousel2.default.init();
	
		// $('.select').styler();
	
		(0, _jquery2.default)('.select').select2();
	
		// select.init();
	
		_gallery2.default.init();
	});
	// import select from '../blocks/tab/tab';
	
	// import styler from 'jquery-form-styler';
	
	
	(0, _jquery2.default)(document).ready(function () {
		(0, _jquery2.default)('.select').select2();
	});

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function digitpretify() {
		var inputs = document.querySelectorAll('.input_digit-pretify');
		var oldvalue = void 0;
		var mask = function mask(value) {
			var output = [];
	
			for (var i = 0; i < value.length; i++) {
				if (i !== 0 && i % 4 === 0) {
					output.push(' ');
				}
				output.push(value[i]);
			}
	
			return output.join[''];
		};
	
		var unmask = function unmask(value) {
			var output = value.replace(new RegExp(/[^\d]/, 'g'), '');
			return output;
		};
	
		var keydownHandler = function keydownHandler(e) {
			var oldValue = e.target.value;
		};
	
		var inputHandler = function inputHandler(e) {
			var el = e.target;
			var newValue = el.value;
	
			newValue = unmask(newValue);
	
			if (newValue.match(regex)) {
				newValue = mask(newValue);
				el.value = newValue;
			} else {
				el.value = oldValue;
			}
		};
	
		var init = function init() {
			inputs.map(function (input) {
				input.addEventListener('keydown', keydownHandler);
				input.addEventListener('input', inputHandler);
			});
		};
	}
	
	exports.default = digitpretify;

/***/ }

})
//# sourceMappingURL=0.6541e91db98f685c88fb.hot-update.js.map