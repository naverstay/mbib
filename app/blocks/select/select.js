import $ from 'jquery';
import 'select2';
export default {
	init() {
		$('.select').select2({
			width : "resolve"
		});
	}
};