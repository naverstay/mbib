import $ from 'jquery';
import 'magnific-popup';
import 'select2';
import checkIsMobile from '../../scripts/isMobile.js';

export default {
	
	init() {
		const isMobile = checkIsMobile();
		const formatBrandResult = state => {
			if (!state.id) {
				return state.text;
			}
			const brandName = state.element.getAttribute('data-brand');
			if (!brandName) {
				return state.text;
			}
			const $state = $(
				`<span class="select2-results__option-brand">
					<span class="select2-results__option-icon brand brand_${brandName}"></span>
					<span>${state.text}</span>
				</span>`
			);

			return $state;
		};

		const formatBrandSelection = state => {
			if (!state.id) {
				return state.text;
			}
			const brandName = state.element.getAttribute('data-brand');
			if (!brandName) {
				return state.text;
			}
			const $state = $(
			`<span class="select2-selection__value">
				<span class="select2-selection__value-icon brand brand_${brandName}"></span>
				${state.text}
			</span>`
			);
			return $state;
		};

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
				width : '100%',
				minimumResultsForSearch: 20
			});

			$('.select_has-image').select2({
				width : '100%',
				templateResult: formatState
			});

			$('.select_for-brand').select2({
				width : '100%',
				minimumResultsForSearch: 20,
				templateResult: formatBrandResult,
				templateSelection: formatBrandSelection,
				allowClear: true,
			});
		} else {
			$('.select_search').select2({
				width : '100%',
				minimumResultsForSearch: 20,
				dropdownParent: $('#modal .modal__body')
			});

			$('.select_has-image').select2({
				width : '100%',
				minimumResultsForSearch: 20,
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