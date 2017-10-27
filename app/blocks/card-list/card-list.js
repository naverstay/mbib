import $ from 'jquery';

const cardList = (() => {
	$('.card-list__phone-button').on('click', function(){
		const parent = $(this).parent();
		parent.addClass('card-list__phone_showed');
	})
})();

export default cardList