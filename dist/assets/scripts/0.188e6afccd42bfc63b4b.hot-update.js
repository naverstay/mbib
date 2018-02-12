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
	
	_jquery2.default.fn.select2.amd.define("CustomSelectionAdapter", ["select2/utils", "select2/selection/multiple", "select2/selection/placeholder", "select2/selection/eventRelay", "select2/selection/single"], function (Utils, MultipleSelection, Placeholder, EventRelay, SingleSelection) {
	
	  // Decorates MultipleSelection with Placeholder
	  var adapter = Utils.Decorate(MultipleSelection, Placeholder);
	  // Decorates adapter with EventRelay - ensures events will continue to fire
	  // e.g. selected, changed
	  adapter = Utils.Decorate(adapter, EventRelay);
	
	  adapter.prototype.render = function () {
	    // Use selection-box from SingleSelection adapter
	    // This implementation overrides the default implementation
	    var $selection = SingleSelection.prototype.render.call(this);
	    return $selection;
	  };
	
	  adapter.prototype.update = function (data) {
	    // copy and modify SingleSelection adapter
	    this.clear();
	
	    var $rendered = this.$selection.find('.select2-selection__rendered');
	    var noItemsSelected = data.length === 0;
	    var formatted = "";
	
	    if (noItemsSelected) {
	      formatted = this.options.get("placeholder") || "";
	    } else {
	      var itemsData = {
	        selected: data || [],
	        all: this.$element.find("option") || []
	      };
	      // Pass selected and all items to display method
	      // which calls templateSelection
	      formatted = this.display(itemsData, $rendered);
	    }
	
	    $rendered.empty().append(formatted);
	    $rendered.prop('title', formatted);
	  };
	
	  return adapter;
	});
	
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
	      // dropdownParent: $('#modal .modal__body')
	      closeOnSelect: false,
	      // Make selection-box similar to single select
	      // selectionAdapter: $.fn.select2.amd.require("CustomSelectionAdapter"),
	      dropdownAdapter: _jquery2.default.fn.select2.amd.require("CustomDropdownAdapter")
	    });
	
	    /*$('.select').on('select2:opening', function(e) {
	    	console.log('asfs');
	    	$.magnificPopup.open({
	    		items: {
	    			src: '#modal', // can be a HTML string, jQuery object, or CSS selector
	    			type: 'inline'
	    		}
	    	});
	    })*/
	  }
	};

/***/ })

})
//# sourceMappingURL=0.188e6afccd42bfc63b4b.hot-update.js.map