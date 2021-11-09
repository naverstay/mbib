import $ from 'jquery';
import checkIsMobile from '../../scripts/isMobile.js';
import 'slick-carousel';

const reviewGallery = (() => {
  let slick = null;
  const isMobile = checkIsMobile();
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

  // Создание слайдера
  const breakpoint = window.matchMedia('(min-width:768px)');

  const enableSlider = function () {
    slick = $('.js-best-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 700,
      lazyLoad: 'ondemand',
      infinite: false,
      mobileFirst: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    });
  };

  const breakpointChecker = function () {
    if (window.innerWidth < 768) {
      return enableSlider();
    } else {
      return false;
    }
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();

  return slick;
})();

export default reviewGallery;
