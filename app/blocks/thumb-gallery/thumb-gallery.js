import $ from 'jquery';
import checkIsMobile from '../../scripts/isMobile.js';
import 'slick-carousel';

const thumbGallery = (() => {

  const isMobile = checkIsMobile();

  $('.thumb-gallery__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 0,
    lazyLoad: 'ondemand',
    dots: true
  });

  const loader = '<div class="loader loader_active thumb-gallery__loader"><div class="loader__overlay"><div class="loader__spiner"></div></div></div>';

  $('.thumb-gallery__inner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const wrap = $(event.target).parent();
    const notLoadedImage = wrap.find('slick-loading');
    if (notLoadedImage.length === 0) {
      wrap.append(loader);
    }
  });

  $('.thumb-gallery__inner').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    const wrap = $(event.target).parent();
    const loaderThumb = wrap.find('.loader');
    const notLoadedImage = $(currentSlide).find('img[data-lazy]');
    console.log(notLoadedImage);
    if (notLoadedImage.length === 0) {
      loaderThumb.remove();
    }

  });

  if (!isMobile) {
    $('.thumb-gallery__inner .slick-dots:not(.slick-active) button').mouseenter((e) => {
      $(e.target).trigger('click');
    });
  }

})();

export default thumbGallery;
