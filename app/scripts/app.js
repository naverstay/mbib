import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import tab from '../blocks/tab/tab';
import select from '../blocks/select/select';
import carousel from '../blocks/carousel/carousel';
import gallery from '../blocks/gallery/gallery';
import digitpretify from '../blocks/input/input';
import cardList from '../blocks/card-list/card-list';
import sidenav from '../blocks/sidenav/sidenav';
import modal from '../blocks/modal/modal';
import form from '../blocks/form/form';
import collapse from '../blocks/collapse/collapse';
import geoplace from '../blocks/geoplace/geoplace';
import search from '../blocks/search/search';
import '../blocks/add-photo/add-photo';
import '../blocks/range/range';
import '../blocks/phone-field/phoneField';
import 'lazysizes';
import 'notyf';

const checkTouch = () => {
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		document.body.classList.add('page_touch');
	}
}

$(() => {
	svg4everybody();

	checkTouch();

	sidenav();

	carousel.init();

	select.init();

	gallery.init();

	collapse();

	digitpretify();

	$('.tile').on('click', ()=> {return true});

	/*var notyf = new Notyf();

	// Display an alert notification
	notyf.alert('You must fill out the form before moving forward');

	// Display a success notification
	notyf.confirm('Your changes have been successfully saved!');*/
	
});
