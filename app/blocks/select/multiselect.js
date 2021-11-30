import jQuery from 'jquery';
import 'magnific-popup';
import checkIsMobile from '../../scripts/isMobile.js';

export default (() => {
  jQuery(function ($) {
    $.fn.select2.amd.require([
      'select2/selection/single',
      'select2/selection/placeholder',
      'select2/selection/eventRelay',
      'select2/dropdown',
      'select2/dropdown/search',
      'select2/dropdown/attachBody',
      'select2/utils'
    ], function (SingleSelection, Placeholder, EventRelay, Dropdown, DropdownSearch, AttachBody, Utils) {

      const isMobile = checkIsMobile();

      // let SelectionAdapter = Utils.Decorate(
      //   SingleSelection,
      //   Placeholder
      // );

      // SelectionAdapter = Utils.Decorate(
      //   Utils.Decorate(
      //     SelectionAdapter,
      //   ),
      //   EventRelay
      // );

      let SelectionAdapter = Utils.Decorate(SingleSelection, Placeholder);
      SelectionAdapter = Utils.Decorate(SelectionAdapter, EventRelay);


      const DropdownAdapter = Utils.Decorate(
        Utils.Decorate(
          Dropdown,
          DropdownSearch
        ),
        AttachBody
      );

      const multiSelects = document.querySelectorAll('.select_multi .select__control');

      multiSelects.forEach(select => {
        const sel = $(select).select2({
          selectionAdapter: SelectionAdapter,
          dropdownAdapter: DropdownAdapter,
          width: '100%',
          dropdownParent: isMobile ? $('#modal .modal__body') : null,
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
          },
          templateSelection: (data) => {

            if (!data.id) {
              return data.text;
            }

            const selected = ($(select).val() || []).length;
            const placeholder = $(data.element.parentNode).attr('data-placeholder');

            return selected >= 2 ? `${placeholder} (${selected})` : data.text;
          }
        });

        const magnificPopup = $.magnificPopup.instance;

        if (isMobile) {

          sel.on('select2:open', function () {
            const modal = $('.modal_mobile-select');
            const modalTitle = modal.find('.modal__title');
            const dropdown = modal.find('.select2-dropdown');
            const placeholder = $(this).attr('data-placeholder');
            modal.addClass('modal_mobile-select-multi');

            modal.find('.select2-container').css({
              position: 'relative',
              top: 0,
              left: 0
            });

            dropdown.css({
              position: 'relative',
              top: 0,
              left: 0,
              width: '100%'
            });

            modalTitle.text(placeholder);


            setTimeout(() => {
              magnificPopup.open({
                alignTop: true,
                fixedContentPos: true,
                items: {
                  src: modal, // can be a HTML string, jQuery object, or CSS selector
                  type: 'inline'
                }
              });
            }, 0);
          });

          sel.on('select2:close', function () {
            const modal = $('.modal_mobile-select');
            modal.removeClass('modal_mobile-select-multi');
            magnificPopup.close();
          });

        }
      });

    });

  });

})();
