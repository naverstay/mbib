webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modal = function () {
		(0, _jquery2.default)('.link-modal').magnificPopup({
			type: 'inline',
			closeBtnInside: true,
			callbacks: {
				beforeOpen: function beforeOpen() {
					// if($(window).width() < 700) {
					// 	this.st.focus = false;
					// } else {
					// 	this.st.focus = 'input';
					// };
					console.log(this.st);
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			}
		});
	}();
	
	exports.default = modal;

/***/ }

})
//# sourceMappingURL=0.069539a4d7381eb3fde6.hot-update.js.map