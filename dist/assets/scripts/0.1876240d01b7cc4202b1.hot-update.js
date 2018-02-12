webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CustomDropdown = _jquery2.default.fn.select2.amd.define("ModalDropdown", ["select2/utils", "select2/dropdown", "select2/dropdown/attachBody"], function (Utils, Dropdown, AttachBody) {
		// Here goes the code of this custom adapter
	});
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				dropdownAdapter: CustomDropdown,
				dropdownParent: (0, _jquery2.default)('#modal .modal__body')
			});
	
			(0, _jquery2.default)('.select').on('select2:opening', function (e) {
				console.log('asfs');
				_jquery2.default.magnificPopup.open({
					items: {
						src: '#modal', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
			});
		}
	};

/***/ }

})
//# sourceMappingURL=0.1876240d01b7cc4202b1.hot-update.js.map