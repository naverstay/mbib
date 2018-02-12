webpackHotUpdate(0,{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modal = function () {
		(0, _jquery2.default)('.link-modal').magnificPopup({
			type: 'inline',
			closeBtnInside: true,
			removalDelay: 500,
			mainClass: 'mfp-zoom-in'
			/*callbacks: {
	  	beforeOpen: function() {
	  		// if($(window).width() < 700) {
	  		// 	this.st.focus = false;
	  		// } else {
	  		// 	this.st.focus = 'input';
	  		// };
	  		console.log(this.st.el);
	  		this.st.mainClass = this.st.el.attr('data-effect');
	  	}
	  }*/
		});
	}();
	
	exports.default = modal;

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(6);
	
	__webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
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
//# sourceMappingURL=0.5906001c9771fe08d3c1.hot-update.js.map