import $ from 'jquery';
import '../../../node_modules/fotorama/fotorama';
export default {
	init() {
		$('.card__gallery-list').fotorama({
			nav : "thumbs",
			thumbwidth : "100",
			thumbheight : "75",
			allowfullscreen : "true"
		});
	}
};