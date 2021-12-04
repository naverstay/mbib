// import $ from 'jquery';

const showPhone = (() => {
	$('.show-phone__button').on('click', function(){
		const parent = $(this).parent();
		parent.addClass('show-phone_visible-phone');
	})
})();

export default showPhone;
