webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				dropdownParent: (0, _jquery2.default)('#modal .modal__body'),
				closeOnSelect: false
			});
	
			(0, _jquery2.default)('.select').on('select2:open', function (e) {
				var modal = (0, _jquery2.default)('.modal_mobile-select');
				console.log(modal.find('li').length);
	
				_jquery2.default.magnificPopup.open({
					items: {
						src: modal, // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					},
					callbacks: {
						open: function open() {
							// console.log(modal.find('li').length);
						}
					}
				});
			});
		}
	};

/***/ })

})
//# sourceMappingURL=0.86fea57074d6b84ce0ac.hot-update.js.map