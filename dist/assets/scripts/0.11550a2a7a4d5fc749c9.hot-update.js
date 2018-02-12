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
	  var dropdownWithSearch = Utils.Decorate(Dropdown, Search);
	  dropdownWithSearch.prototype.render = function () {
	    // Copy and modify default search render method
	    var $rendered = Dropdown.prototype.render.call(this);
	    // Add ability for a placeholder in the search box
	    var placeholder = this.options.get("placeholderForSearch") || "";
	    var $search = (0, _jquery2.default)('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" placeholder="' + placeholder + '" type="search"' + ' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" />' + '</span>');
	
	    this.$searchContainer = $search;
	    this.$search = $search.find('input');
	
	    $rendered.prepend($search);
	    console.log($rendered.css("position"));
	    return $rendered;
	  };
	
	  // Decorate the dropdown+search with necessary containers
	  var adapter = Utils.Decorate(dropdownWithSearch, AttachContainer);
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
//# sourceMappingURL=0.11550a2a7a4d5fc749c9.hot-update.js.map