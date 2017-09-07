import $ from 'jquery';
import '../../../node_modules/fotorama/fotorama';
export default {
	init() {
		$('.card__gallery-list').fotorama({
			nav : "thumbs"
		});
	}
};