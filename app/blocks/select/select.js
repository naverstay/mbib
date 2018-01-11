import $ from 'jquery';
import 'select2';
import 'magnific-popup';

export default {
	init() {
		$('.select').select2({
			width : "resolve",
		});
	}
};