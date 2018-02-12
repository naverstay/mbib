webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _tab = __webpack_require__(5);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	__webpack_require__(6);
	
	var _carousel = __webpack_require__(7);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _gallery = __webpack_require__(9);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _input = __webpack_require__(11);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _cardList = __webpack_require__(12);
	
	var _cardList2 = _interopRequireDefault(_cardList);
	
	var _sidenav = __webpack_require__(13);
	
	var _sidenav2 = _interopRequireDefault(_sidenav);
	
	var _modal = __webpack_require__(14);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _form = __webpack_require__(16);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _geoplace = __webpack_require__(18);
	
	var _geoplace2 = _interopRequireDefault(_geoplace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import select from '../blocks/tab/tab';
	
	// import styler from 'jquery-form-styler';
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		checkTouch();
	
		(0, _sidenav2.default)();
	
		_carousel2.default.init();
	
		(0, _jquery2.default)('.select').select2({
			width: "100%"
		});
	
		// select.init();
	
		_gallery2.default.init();
	
		(0, _input2.default)();
	});
	
	var checkTouch = function checkTouch() {
		if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
			document.body.classList.add('page_touch');
		}
	};

/***/ },

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
				href: "",
				append: (0, _jquery2.default)('span.btn__text', {
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
			addItem(el.text());
		});
	}();
	
	exports.default = geoplace;

/***/ }

})
//# sourceMappingURL=0.951be5ca43e1d5b9619e.hot-update.js.map