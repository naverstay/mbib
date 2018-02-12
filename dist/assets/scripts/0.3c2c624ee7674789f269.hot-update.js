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
			mainClass: 'mfp-fade'
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

/***/ }

})
//# sourceMappingURL=0.3c2c624ee7674789f269.hot-update.js.map