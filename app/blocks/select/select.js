// import $ from 'jquery';
import 'magnific-popup';
import 'select2';
import checkIsMobile from '../../scripts/isMobile.js';

export default (() => {
  const isMobile = checkIsMobile();
  const formatBrandResult = state => {
    if (!state.id) {
      return state.text;
    }
    const brandName = state.hasOwnProperty('element') ? state.element.getAttribute('data-brand') : '';
    if (!brandName) {
      return state.text;
    }

    const $state = $(
      `<span class="select2-results__option-brand">
          <span class="select2-results__option-icon brand brand_${brandName}"></span>
          <span class="select2-results-name">${state.text}</span>
          <span class="select2-results__option-close">
            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/icon.svg#icon_close"></use></svg>
          </span>
          </span>`
    );

    return $state;
  };

  const formatBrandSelection = state => {
    if (!state.id) {
      return state.text;
    }
    const brandName = state.hasOwnProperty('element') ? state.element.getAttribute('data-brand') : '';
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
    const baseUrl = 'assets/images/generations/';
    const $state = $(
      '<span class="select2-results__option-photo"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" /></span>'
      + '<span>' + state.text + '</span>'
    );

    return $state;
  };

  if (!isMobile) {
    $('.select_search').each((index, select) => {
      let selectSearch = $(select);

      selectSearch.find('.select__control').select2({
        width: '100%',
        tags: selectSearch.hasClass('select_tags'),
        minimumResultsForSearch: 20,
        templateResult: (data) => {
          if (!data.id) {
            return data.text;
          }
          const term = $(`option[value=${data.id}]`).first().closest('select').data('select2').dropdown.$search.val();
          const reg = new RegExp(term, 'gi');
          const $res = $('<div></div>');
          const text = data.text;
          const boldTermText = text.replace(reg, (optionText) => `<mark class="select2-results__option-highlight">${optionText}</mark>`);
          $res.html(boldTermText);
          $res.addClass('select2-results__option-inner');

          return $res;
        }
      });
    });

    $('.select_has-image').each((index, select) => {
      let selectSearch = $(select);

      selectSearch.find('.select__control').select2({
        width: '100%',
        tags: selectSearch.hasClass('select_tags'),
        templateResult: formatState
      });
    });

    $('.select_for-brand').each((index, select) => {
      let selectSearch = $(select);

      selectSearch.find('.select__control').select2({
        width: '100%',
        tags: selectSearch.hasClass('select_tags'),
        minimumResultsForSearch: 20,
        templateResult: formatBrandResult,
        templateSelection: formatBrandSelection
      });
    });

  } else {
    $('.select_search').each((index, select) => {
      let selectSearch = $(select);

      selectSearch.find('.select__control').select2({
        width: '100%',
        tags: selectSearch.hasClass('select_tags'),
        minimumResultsForSearch: 20,
        dropdownParent: $('#modal .modal__body'),
        templateResult: (data) => {
          if (!data.id) {
            return data.text;
          }
          const term = $(`option[value=${data.id}]`).first().closest('select').data('select2').dropdown.$search.val();
          const reg = new RegExp(term, 'gi');
          const $res = $('<div></div>');
          const text = data.text;
          const boldTermText = text.replace(reg, (optionText) => `<mark class="select2-results__option-highlight">${optionText}</mark>`);
          $res.html(boldTermText);
          $res.addClass('select2-results__option-inner');

          return $res;
        }
      });
    });

    $('.select_for-brand').each((index, select) => {
      let selectSearch = $(select);

      selectSearch.find('.select__control')
        .on('select2:open', function () {
          const modal = $('.modal_mobile-select');
          const modalTitle = modal.find('.modal__title');
          const dropdown = modal.find('.select2-dropdown');
          const placeholder = $(this).attr('data-placeholder');

          modal.find('.select2-container').css({
            'position': 'relative',
            'top': 0,
            'left': 0
          });

          dropdown.css({
            'position': 'relative',
            'top': 0,
            'left': 0,
            'width': '100%'
          });

          modalTitle.text(placeholder);

          setTimeout(() => {
            const clearSelect = $('.select2-results__option--highlighted').find('.select2-results__option-close');
            const selectContainer = selectSearch.find('.select__control');

            clearSelect.on('click', function () {
              selectContainer.val(null).trigger('change');
            });

            $.magnificPopup.open({
              alignTop: true,
              fixedContentPos: true,
              items: {
                src: modal, // can be a HTML string, jQuery object, or CSS selector
                type: 'inline'
              }
            });
          }, 0);
        })
        .on('select2:close', function () {
          const modal = $('.modal_mobile-select');
          $.magnificPopup.close({
            items: {
              src: modal, // can be a HTML string, jQuery object, or CSS selector
              type: 'inline'
            }
          });
        })
        .select2({
          width: '100%',
          minimumResultsForSearch: 20,
          tags: selectSearch.hasClass('select_tags'),
          dropdownParent: $('#modal .modal__body'),
          templateResult: formatBrandResult
        });
    });

    $('.select_has-image').each((index, select) => {
      let selectSearch = $(select);

      selectSearch.find('.select__control').select2({
        width: '100%',
        minimumResultsForSearch: 20,
        tags: selectSearch.hasClass('select_tags'),
        dropdownParent: $('#modal .modal__body'),
        templateResult: formatState
      });
    });
  }

  $('.pagination .select, .sort .select, .select_simple').each((index, select) => {
    let selectSearch = $(select);

    selectSearch.find('.select__control').select2({
      width: '100%',
      tags: selectSearch.hasClass('select_tags'),
      minimumResultsForSearch: -1
    });
  });

  return false;
})();
