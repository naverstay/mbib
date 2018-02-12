webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(21);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jquery2.default.fn.select2.amd.define("CustomDropdownAdapter", ["select2/utils", "select2/dropdown", "select2/dropdown/attachBody", "select2/dropdown/attachContainer", "select2/dropdown/search", "select2/dropdown/minimumResultsForSearch"], function (Utils, Dropdown, AttachBody, AttachContainer, Search, MinimumResultsForSearch) {
	
	  // Decorate Dropdown with Search functionalities
	  var adapter = Utils.Decorate(Utils.Decorate(Dropdown, AttachContainer), AttachContainer);
	
	  adapter.prototype.render = function () {
	    var $rendered = Dropdown.prototype.render.call(this);
	    $rendered.css('position', 'relative');
	    console.log($rendered);
	    return $rendered;
	  };
	
	  adapter = Utils.Decorate(adapter, AttachBody);
	  return adapter;
	});
	
	exports.default = {
	  init: function init() {
	    (0, _jquery2.default)('.select').select2({
	      // width : "resolve",
	      // dropdownAdapter: $.fn.select2.amd.require("ModalDropdown")
	      dropdownParent: (0, _jquery2.default)('#modal .modal__body'),
	      closeOnSelect: false,
	      // Make selection-box similar to single select
	      // selectionAdapter: $.fn.select2.amd.require("CustomSelectionAdapter"),
	      dropdownAdapter: _jquery2.default.fn.select2.amd.require("CustomDropdownAdapter")
	    });
	
	    (0, _jquery2.default)('.select').on('select2:opening', function (e) {
	      _jquery2.default.magnificPopup.open({
	        items: {
	          src: '#modal', // can be a HTML string, jQuery object, or CSS selector
	          type: 'inline'
	        }
	      });
	    });
	  }
	};

/***/ })

})
//# sourceMappingURL=0.44a8cc2cb3a73f7c302b.hot-update.js.map