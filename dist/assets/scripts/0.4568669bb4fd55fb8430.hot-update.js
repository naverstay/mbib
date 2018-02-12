webpackHotUpdate(0,{

/***/ 11:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var digitpretify = function digitpretify() {
		var inputs = document.querySelectorAll('.input_digit-pretify');
		var oldValue = void 0;
		var oldCursor = void 0;
		var regex = new RegExp(/^\d{0,16}$/g);
		var mask = function mask(value) {
			var output = [];
			for (var i = 0; i < value.length; i++) {
				if (i !== 0 && i % 3 === 0) {
					output.push(" "); // add the separator
				}
				output.push(value[i]);
			}
			return output.join("");
		};
		var unmask = function unmask(value) {
			var output = value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character
			return output;
		};
	
		var checkSeparator = function checkSeparator(position, interval) {
			return Math.floor(position / (interval + 1));
		};
	
		var keydownHandler = function keydownHandler(e) {
			var el = e.target;
	
			oldValue = el.value;
			oldCursor = el.selectionEnd;
		};
	
		var inputHandler = function inputHandler(e) {
			var el = e.target;
			var newCursorPosition = void 0;
			var newValue = unmask(el.value);
	
			if (newValue.match(regex)) {
				newValue = mask(newValue);
	
				newCursorPosition = oldCursor - checkSeparator(oldCursor, 3) + checkSeparator(oldCursor + (newValue.length - oldValue.length), 3) + (unmask(newValue).length - unmask(oldValue).length);
	
				if (newValue !== '') {
					el.value = newValue;
				} else {
					el.value = '';
				}
			} else {
				el.value = oldValue;
				newCursorPosition = oldCursor;
			}
			el.setSelectionRange(newCursorPosition, newCursorPosition);
		};
	
		inputs.forEach(function (input) {
			input.addEventListener('keydown', keydownHandler);
			input.addEventListener('input', inputHandler);
		});
	};
	
	exports.default = digitpretify;

/***/ }

})
//# sourceMappingURL=0.4568669bb4fd55fb8430.hot-update.js.map