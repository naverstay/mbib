import $ from 'jquery';
import 'slick-carousel';
export default {
	init() {
		$('.carousel').slick({
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1
		});
	}
};