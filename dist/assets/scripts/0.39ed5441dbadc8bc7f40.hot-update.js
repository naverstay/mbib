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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.carousel').slick({
				dots: false,
				slidesToShow: 5,
				slidesToScroll: 1,
				mobileFirst: true,
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 4
					}
				}, {
					breakpoint: 320,
					settings: {
						slidesToShow: 1
					}
				}]
			});
		}
	};

/***/ }

})
//# sourceMappingURL=0.39ed5441dbadc8bc7f40.hot-update.js.map