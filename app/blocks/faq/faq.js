import $ from 'jquery';

const faqItem = (() => {
  $('.js-faq-item').on('click', function () {
    let element = $(this);

    if (element.hasClass('open')) {
      element.removeClass('open').find('.js-faq-text').slideUp();
    } else {
      element.addClass('open').find('.js-faq-text').slideDown();
    }
  });

  return false;
})();

export default faqItem;
