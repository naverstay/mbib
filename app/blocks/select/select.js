import $ from 'jquery';
import 'select2';
import 'magnific-popup';

export default {

	init() {
		$('.select').select2({
			width : "resolve",
			dropdownParent: $('#modal .modal__body')
		});

		$('.select').on('select2:open', function(e) {
			const modal = $('.modal_mobile-select');
			const modalTitle = modal.find('.modal__title')
			const dropdown = modal.find('.select2-dropdown');
			const placeholder = $(this).attr('data-placeholder');

			modal.find('.select2-container').css({
				position : 'relative',
				top : 0,
				left : 0
			});

			dropdown.css({
				position : 'relative',
				top : 0,
				left : 0,
				width : '100%'
			});

			modalTitle.text(placeholder);

			$.magnificPopup.open({
				items: {
					src: modal, // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			});
		})

		$('.select').on('select2:close', function(e) {
			$.magnificPopup.close({
				items: {
					src: modal, // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			});
		})
	}

};