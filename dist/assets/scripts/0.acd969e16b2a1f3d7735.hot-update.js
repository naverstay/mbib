webpackHotUpdate(0,{

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var digitpretify = function digitpretify() {
	  var inputs = document.querySelectorAll('.input_digit-pretify');
	  var input = document.querySelector('#credit-card-mask'),
	      oldValue,
	      oldCursor,
	      regex = new RegExp(/^\d{0,16}$/g),
	      mask = function mask(value) {
	    var output = [];
	    for (var i = 0; i < value.length; i++) {
	      if (i !== 0 && i % 3 === 0) {
	        output.push(" "); // add the separator
	      }
	      output.push(value[i]);
	    }
	    return output.join("");
	  },
	      unmask = function unmask(value) {
	    var output = value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character
	    return output;
	  },
	      checkSeparator = function checkSeparator(position, interval) {
	    return Math.floor(position / (interval + 1));
	  },
	      keydownHandler = function keydownHandler(e) {
	    var el = e.target;
	
	    oldValue = el.value;
	    oldCursor = el.selectionEnd;
	  },
	      inputHandler = function inputHandler(e) {
	    var el = e.target,
	        newCursorPosition,
	        newValue = unmask(el.value);
	
	    if (newValue.match(regex)) {
	      newValue = mask(newValue);
	
	      newCursorPosition = oldCursor - checkSeparator(oldCursor, 3) + checkSeparator(oldCursor + (newValue.length - oldValue.length), 3) + (unmask(newValue).length - unmask(oldValue).length);
	
	      if (newValue !== "") {
	        el.value = newValue;
	      } else {
	        el.value = "";
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
//# sourceMappingURL=0.acd969e16b2a1f3d7735.hot-update.js.map