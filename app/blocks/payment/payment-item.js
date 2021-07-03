import $ from 'jquery';

const paymentItem = (() => {
    const item = $('.js-payment-item')
    const itemClassActive = 'js-payment-item_active'
    item.on('click', function() {
        item.removeClass(itemClassActive)
        const el = $(this);
        el.addClass(itemClassActive)
    })
})();

export default paymentItem