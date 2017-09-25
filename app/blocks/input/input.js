const digitpretify = () => {
	const inputs = document.querySelectorAll('.input_digit-pretify');
	let oldValue;
	let oldCursor;
	const regex = new RegExp(/^\d{0,16}$/g);
	const mask = function (value) {
		const output = [];
		for (let i = 0; i < value.length; i++) {
			if (i !== 0 && i % 3 === 0) {
				output.push(' '); // add the separator
			}
			output.push(value[i]);
		}
		return output.join('');
	};

	const unmask = function (value) {
		const output = value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character
		return output;
	};

	const checkSeparator = function (position, interval) {
		return Math.floor(position / (interval + 1));
	};

	const keydownHandler = function (e) {
		const el = e.target;

		oldValue = el.value;
		oldCursor = el.selectionEnd;
	};

	const inputHandler = function (e) {
		const el = e.target;
		let newCursorPosition;
		let newValue = unmask(el.value);

		if ( newValue.match(regex) ) {
			newValue = mask(newValue);

			newCursorPosition = oldCursor - checkSeparator(oldCursor, 3) + checkSeparator(oldCursor + (newValue.length - oldValue.length), 3) + (unmask(newValue).length - unmask(oldValue).length);

			if ( newValue !== '' ) {
				el.value = newValue;
			}
			else
			{
				el.value = '';
			}
		}
		else
		{
			el.value = oldValue;
			newCursorPosition = oldCursor;
		}
		el.setSelectionRange(newCursorPosition, newCursorPosition);
	};

	inputs.forEach( input => {
		input.addEventListener('keydown', keydownHandler);
		input.addEventListener('input', inputHandler);
	});
};

export default digitpretify;