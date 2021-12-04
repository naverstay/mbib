// import $ from 'jquery';
import 'slick-carousel';

export default {
  init() {
    $('.carousel').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 5
          }
        }
      ]
    });
  }
};
