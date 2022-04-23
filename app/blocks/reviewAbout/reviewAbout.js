// import $ from 'jquery';
import checkIsMobile from '../../scripts/isMobile.js';
import 'slick-carousel';

const reviewGallery = (() => {
  const breakPoint = 1170;
  let slick = null;

  // Создание слайдера
  const breakpoint = window.matchMedia(`(min-width:${breakPoint}px)`);

  const enableSlider = function () {
    slick = $('.js-aside-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 700,
      lazyLoad: 'ondemand',
      infinite: true,
      mobileFirst: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: breakPoint,
          settings: "unslick"
        }
      ]
    });
  };

  $('.js-aside-slider-all').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 700,
    lazyLoad: 'ondemand',
    infinite: true,
    mobileFirst: true,
    variableWidth: true,
  });

  const breakpointChecker = function () {
    if (window.innerWidth < breakPoint) {
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
