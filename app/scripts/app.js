import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import styler from 'jquery-form-styler';
import tab from '../blocks/tab/tab';
import carousel from '../blocks/carousel/carousel';
import gallery from '../blocks/gallery/gallery';

$(() => {
	svg4everybody();

	carousel.init();

	$('.select').styler();

	gallery.init();
});
