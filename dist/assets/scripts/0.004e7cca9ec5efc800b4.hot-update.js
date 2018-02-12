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
	
		/*placeField
	  .keyup(function() {
	    var value = $( this ).val();
	    console.log(value);
	  })
	  .keyup();*/
	}();
	
	exports.default = geoplace;

/***/ }

})
//# sourceMappingURL=0.004e7cca9ec5efc800b4.hot-update.js.map