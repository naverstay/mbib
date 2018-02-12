webpackHotUpdate(0,{

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var digitpretify = function digitpretify() {
		var inputs = document.querySelectorAll('.input_digit-pretify');
		var oldvalue = void 0;
		var regex = new RegExp(/^\d{0,16}$/g);
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
	
		function keydownHandler(e) {
			return oldValue = e.target.value;
		};
	
		function inputHandler(e) {
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
	
		inputs.forEach(function (input) {
			console.log(input.attr.placeholder);
			input.addEventListener('keydown', keydownHandler);
			input.addEventListener('input', inputHandler);
		});
	};
	
	exports.default = digitpretify;

/***/ }

})
//# sourceMappingURL=0.1d369ffa9504cf4cd82d.hot-update.js.map