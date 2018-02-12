webpackHotUpdate(0,{

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var inputs = document.querySelectorAll('.input_digit-pretify');
	
		var mask = function mask(value) {
			var output = [];
	
			for (var i = 0; i < value.length; i++) {
				if (i !== 0 && i % 4 === 0) {
					output.push(' ');
				}
				output.push(value[i]);
			}
	
			return output.join[''];
		};
	
		var unmask = function unmask(value) {
			/^\d{0,16}$/g;
			var output = value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character
			return output;
		};
	};

/***/ }

})
//# sourceMappingURL=0.a4944eaf41c020b1b40a.hot-update.js.map