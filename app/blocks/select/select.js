import $ from 'jquery';
import 'magnific-popup';
import 'select2';
import checkIsMobile from '../../scripts/isMobile.js';

export default {
	init() {
		const isMobile = checkIsMobile();
		if (!isMobile) {
			$('.select_search').select2({
				width : '100%'
			});
		} else {
			$('.select_search').select2({
				width : '100%',
				dropdownParent: $('#modal .modal__body')
			});

			$('.select_search').on('select2:open', function() {
				const modal = $('.modal_mobile-select');
				const modalTitle = modal.find('.modal__title');
				const dropdown = modal.find('.select2-dropdown');
				const placeholder = $(this).attr('data-placeholder');

				modal.find('.select2-container').css({
					'position' : 'relative',
					'top' : 0,
					'left' : 0
				});

				dropdown.css({
					'position' : 'relative',
					'top' : 0,
					'left' : 0,
					'width' : '100%'
				});

				modalTitle.text(placeholder);

				setTimeout(() => {
					$.magnificPopup.open({
						alignTop : true,
						fixedContentPos : true,
						items: {
							src: modal, // can be a HTML string, jQuery object, or CSS selector
							type: 'inline'
						}
					});
				}, 0)
			});

			$('.select_search').on('select2:close', function() {
				const modal = $('.modal_mobile-select');
				$.magnificPopup.close({
					items: {
						src: modal, // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
			});
		}

		$('.pagination .select, .sort .select').select2({
			width : '100%'
		});
	}
}