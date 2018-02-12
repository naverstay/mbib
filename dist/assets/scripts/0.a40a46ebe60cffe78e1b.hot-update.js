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
	
	_jquery2.default.fn.select2.amd.define("CustomDropdownAdapter", ["select2/utils", "select2/dropdown", "select2/dropdown/attachBody", "select2/dropdown/attachContainer", "select2/dropdown/search", "select2/dropdown/minimumResultsForSearch"], function (Utils, Dropdown, AttachBody, AttachContainer) {
	
	  // Decorate Dropdown with Search functionalities
	  var dropdownWithSearch = Utils.Decorate(Dropdown);
	  dropdownWithSearch.prototype.render = function () {
	    // Copy and modify default search render method
	    var $rendered = Dropdown.prototype.render.call(this);
	    // Add ability for a placeholder in the search box
	
	
	    $rendered.css('position', 'relative');
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
//# sourceMappingURL=0.a40a46ebe60cffe78e1b.hot-update.js.map