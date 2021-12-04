// import $ from 'jquery';
import 'slick-carousel';

const reviewGallery = (() => {
  const breakPoint = 768;
  let slick = null;

  // Создание слайдера
  const breakpoint = window.matchMedia(`(min-width:${breakPoint}px)`);

  const enableSlider = function () {
    slick = $('.js-credit-steps').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 700,
      lazyLoad: 'ondemand',
      infinite: false,
      mobileFirst: true,
      variableWidth: false,
      responsive: [
        {
          breakpoint: breakPoint,
          settings: "unslick"
        }
      ]
    });
  };

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
