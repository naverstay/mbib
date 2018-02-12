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
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve"
				// dropdownParent: $('#modal .modal__body')
			});
	
			/*$('.select').on('select2:opening', function(e) {
	  	console.log('asfs');
	  	$.magnificPopup.open({
	  		items: {
	  			src: '#modal', // can be a HTML string, jQuery object, or CSS selector
	  			type: 'inline'
	  		}
	  	});
	  })*/
		}
	};

/***/ }

})
//# sourceMappingURL=0.4217d47aa3e77264d835.hot-update.js.map