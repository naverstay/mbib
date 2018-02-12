webpackHotUpdate(0,{

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var inputs = document.querySelectorAll('.input_digit-pretify');
		var oldvalue = void 0;
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
			var output = value.replace(new RegExp(/[^\d]/, 'g'), '');
			return output;
		};
	
		var keydownHandler = function keydownHandler(e) {
			var oldValue = e.target.value;
		};
	
		var inputHandler = function inputHandler(e) {
			var el = e.target;
			var newValue = el.value;
	
			newValue = unmask(newValue);
	
			if (newValue.match(regex)) {
				newValue = mask(newValue);
				el.value = newValue;
			} else {
				el.value = oldValue;
			}
		};
	
		inputs.map(function (input) {
			input.addEventListener('keydown', keydownHandler);
			input.addEventListener('input', inputHandler);
		});
	};

/***/ }

})
//# sourceMappingURL=0.88fa4c463f75ea6f14e4.hot-update.js.map