import $ from 'jquery';

export default (() => {
  $('.tooltipParent').each(function (ind) {
    let tooltip = $(this);

    tooltip.on('mouseenter', function () {
      let tooltipBody = tooltip.find('.tooltip').show();
      let popup = tooltipBody.find('.tooltip__popup');
      popup.css('left', 'auto');
      let offsetLeft = popup.offset().left;
      let popupW = Math.round(popup[0].getBoundingClientRect().width);
      let newX = -popupW / 2;
      let minGap = 20;
      let correction = Math.round(offsetLeft + newX);

      if (correction < minGap) {
        newX -= correction - minGap;
      }

      if ((correction + minGap + popupW) > document.body.offsetWidth) {
        newX -= correction + minGap + popupW - document.body.offsetWidth;
      }

      popup.css('left', Math.min(popupW - minGap, Math.min(-minGap, newX)));
    }).on('mouseleave', function () {
      tooltip.find('.tooltip').hide();
    });
  });
})();
