webpackHotUpdate(0,{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cardList = function () {
		(0, _jquery2.default)('.card-list__phone-button').on('click', function () {
			var parent = (0, _jquery2.default)(this).parent();
			parent.addClass('card-list__phone_showed');
		});
	}();
	
	exports.default = cardList;

/***/ }

})
//# sourceMappingURL=0.bf0e4325fc226f474076.hot-update.js.map