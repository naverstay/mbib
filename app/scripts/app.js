import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import styler from 'jquery-form-styler';
import tab from '../blocks/tab/tab';
// import 'select2';
import select from '../blocks/select/select';
import carousel from '../blocks/carousel/carousel';
import gallery from '../blocks/gallery/gallery';
import digitpretify from '../blocks/input/input';
import cardList from '../blocks/card-list/card-list';
import sidenav from '../blocks/sidenav/sidenav';
import modal from '../blocks/modal/modal';
import form from '../blocks/form/form';
import geoplace from '../blocks/geoplace/geoplace';
import 'lazysizes';

$(() => {
	svg4everybody();

	checkTouch();

	sidenav();

	carousel.init();

	$('.select').select2({
		width : "100%"
	});

	select.init();

	gallery.init();

	digitpretify();
	
});

const checkTouch = () => {
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		document.body.classList.add('page_touch');
	}
}