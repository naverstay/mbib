import $ from 'jquery';
import 'magnific-popup';
import 'select2';
import checkIsMobile from '../../scripts/isMobile.js';

export default {
	
	init() {
		const isMobile = checkIsMobile();
		const formatState = state => {
			if (!state.id) {
				return state.text;
			}
			const imgName = state.element.getAttribute('data-image');
			if (!imgName) {
				return state.text;
			}
			const baseUrl = "assets/images/generations/";
			const $state = $(
				'<span class="select2-results__option-photo"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" /></span>'
				+'<span>' + state.text + '</span>'
			);

			return $state;
		};

		if (!isMobile) {
			$('.select_search').select2({
				width : '100%'
			});

			$('.select_has-image').select2({
				width : '100%',
				templateResult: formatState
			});
		} else {
			$('.select_search').select2({
				width : '100%',
				dropdownParent: $('#modal .modal__body')
			});

			$('.select_has-image').select2({
				width : '100%',
				dropdownParent: $('#modal .modal__body'),
				templateResult: formatState
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