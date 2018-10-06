import $ from 'jquery';
import '../../../node_modules/fotorama/fotorama';
export default {
	init() {
		$('.card__gallery-list').fotorama({
			nav : "thumbs",
			width : "100%",
			maxheight : "400px",
			thumbwidth : "100",
			thumbheight : "75",
			allowfullscreen : "true"
		});

		$('.gallery__list').fotorama({
			nav : "thumbs",
			width : "100%",
			arrows: 'always',
			thumbwidth : "100",
			thumbheight : "75",
			allowfullscreen : "true"
		});
	}
};