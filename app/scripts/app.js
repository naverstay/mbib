import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import styler from 'jquery-form-styler';
import tab from '../blocks/tab/tab';
import 'select2';
// import select from '../blocks/tab/tab';
import carousel from '../blocks/carousel/carousel';
import gallery from '../blocks/gallery/gallery';
import digitpretify from '../blocks/input/input';
import sidenav from '../blocks/sidenav/sidenav';
import modal from '../blocks/modal/modal';

$(() => {
	svg4everybody();

	checkTouch();

	sidenav();

	carousel.init();

	$('.select').select2({
		width : "100%"
	});

	// select.init();

	gallery.init();

	digitpretify();
	
});

const checkTouch = () => {
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		document.body.classList.add('page_touch');
	}
}