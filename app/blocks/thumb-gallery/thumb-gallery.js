import $ from 'jquery';
import checkIsMobile from '../../scripts/isMobile.js';
import 'slick-carousel';

const thumbGallery = (() => {

  const isMobile = checkIsMobile();

  $('.thumb-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 0,
    lazyLoad: 'progressive',
    dots: true
  });

  if (!isMobile) {
    $('.thumb-gallery .slick-dots button').mouseenter((e) => {
      $(e.target).trigger('click');
    });
  }

})();

export default thumbGallery;
