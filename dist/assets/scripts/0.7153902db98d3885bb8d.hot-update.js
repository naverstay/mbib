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
		var listItems = (0, _jquery2.default)('.geoplace-list__item');
	
		var openPopup = function openPopup() {
			placePopup.addClass('popup_show');
		};
	
		var closePopup = function closePopup() {
			placePopup.removeClass('popup_show');
		};
	
		var addItem = function addItem(place) {
			var btn = (0, _jquery2.default)('<a>', {
				class: 'btn btn_theme_pseudo btn_size_s geoplace__item',
				href: '',
				append: (0, _jquery2.default)('<span>', {
					class: 'btn__text',
					text: place
				}).add((0, _jquery2.default)('<span class="btn__remove"><svg class="btn__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/icon.svg#icon_close"></use></svg></span>'))
			}).appendTo(area);
			closePopup();
		};
	
		placeField.on('keyup', function () {
			(0, _jquery2.default)(this).val() !== '' ? openPopup() : closePopup();
		});
	
		listItems.on('click', function () {
			var el = (0, _jquery2.default)(this);
			console.log(el.html());
			placeField.val('');
			addItem(el.text());
		});
	}();
	
	exports.default = geoplace;

/***/ }

})
//# sourceMappingURL=0.7153902db98d3885bb8d.hot-update.js.map