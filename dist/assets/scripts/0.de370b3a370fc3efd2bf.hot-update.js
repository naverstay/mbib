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
		var placePopup = (0, _jquery2.default)('.popup.geoplace__popup');
		var area = (0, _jquery2.default)('.geoplace__area');
	
		var openPopup = function openPopup() {
			placePopup.addClass('popup_show');
		};
	
		var closePopup = function closePopup() {
			placePopup.removeClass('popup_show');
		};
	
		placeField.on('keyup', function () {
			var el = (0, _jquery2.default)(this);
			console.log(el.val());
			el.val() !== '' ? openPopup() : closePopup();
		});
	}();
	
	exports.default = geoplace;

/***/ }

})
//# sourceMappingURL=0.de370b3a370fc3efd2bf.hot-update.js.map