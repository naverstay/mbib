import $ from 'jquery';
import checkIsMobile from '../../scripts/isMobile.js';
import 'slick-carousel';

const thumbGallery = (() => {

  const isMobile = checkIsMobile();

  let slick = $('.js-best-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 0,
    lazyLoad: 'ondemand',
    dots: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

  const loader = '<div class="loader loader_active thumb-gallery__loader"><div class="loader__overlay"><div class="loader__spiner"></div></div></div>';


  $('.thumb-gallery__inner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const curSlide = $(slick.$slides.get(nextSlide));
    const notLoadedImage = curSlide.find('img[data-lazy]');

    if (notLoadedImage.length !== 0) {
      const wrap = $(event.target).parent();
      wrap.append(loader);
    }
  });

  $('.thumb-gallery__inner').on('lazyLoaded', function (event) {
    const wrap = $(event.target).parent();
    const loaderThumb = wrap.find('.loader');
    loaderThumb.remove();
  });

  if (!isMobile) {
    $('.thumb-gallery__inner .slick-dots:not(.slick-active) button').mouseenter((e) => {
      $(e.target).trigger('click');
    });
  }

  return slick;
})();

export default thumbGallery;
