webpackHotUpdate(0,{

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var geoplace = function () {
		var placeField = (0, _jquery2.default)('.geoplace__field');
		var placePopup = (0, _jquery2.default)('.popup.geoplace__place');
		var area = (0, _jquery2.default)('.geoplace__area');
	
		placeField.on('focus', function () {
			placePopup.addClass('popup_show');
		});
	}();
	
	exports.default = geoplace;

/***/ }

})
//# sourceMappingURL=0.104972a62a1eabb462ac.hot-update.js.map