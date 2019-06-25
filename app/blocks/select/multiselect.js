import jQuery from 'jquery';
import 'magnific-popup';
import checkIsMobile from '../../scripts/isMobile.js';

export default (() => {
    jQuery(function ($) {
      $.fn.select2.amd.require([
        'select2/selection/single',
        'select2/selection/placeholder',
        'select2/selection/eventRelay',
        'select2/selection/allowClear',
        'select2/dropdown',
        'select2/dropdown/search',
        'select2/dropdown/attachBody',
        'select2/utils'
      ], function (SingleSelection, Placeholder, EventRelay, AllowClear, Dropdown, DropdownSearch, AttachBody, Utils) {

        const isMobile = checkIsMobile();

        let SelectionAdapter = Utils.Decorate(
          SingleSelection,
          Placeholder
        );

        SelectionAdapter = Utils.Decorate(
          Utils.Decorate(
            SelectionAdapter,
            AllowClear
          ),
          EventRelay
        );


        const DropdownAdapter = Utils.Decorate(
          Utils.Decorate(
            Dropdown,
            DropdownSearch,
          ),
          AttachBody,
        );

        const multiSelects = document.querySelectorAll('.select_multi');

        multiSelects.forEach(select => {
          const sel = $(select).select2({
            selectionAdapter: SelectionAdapter,
            dropdownAdapter: DropdownAdapter,
            width: 'resolve',
            allowClear: true,
            dropdownParent: isMobile ? $('#modal .modal__body') : null,
            templateResult: (data) => {
              if (!data.id) { return data.text; }

              const $res = $('<div></div>');

              $res.text(data.text);
              $res.addClass('wrap');

              return $res;
            },
            templateSelection: (data) => {
              if (!data.id) { return data.text; }

              const selected = ($(select).val() || []).length;
              const placeholder = $(data.element.parentNode).attr('data-placeholder');

              return selected >= 2 ? `${placeholder} (${selected})` : data.text;
            }
          });

          if (isMobile ) {
            sel.on('select2:open', function () {
              const modal = $('.modal_mobile-select');
              const modalTitle = modal.find('.modal__title');
              const dropdown = modal.find('.select2-dropdown');
              const placeholder = $(this).attr('data-placeholder');

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
                $.magnificPopup.open({
                  alignTop: true,
                  fixedContentPos: true,
                  items: {
                    src: modal, // can be a HTML string, jQuery object, or CSS selector
                    type: 'inline'
                  }
                });
              }, 0);
            });
          }
        });

      });

    });

})();
