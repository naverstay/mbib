import $ from 'jquery';

export default (() => {
  $('.tooltipParent').each(function (ind) {
    let tooltip = $(this);

    tooltip.on('mouseenter', function () {
      let parent = tooltip.find('.tooltip').show();
      let popup = parent.find('.tooltip__popup');
      let popupW = Math.round(popup[0].getBoundingClientRect().width);
      let newX = -popupW / 2;
      let minGap = 20;
      let correction = Math.round(tooltip.offset().left + newX);

      if (correction < minGap) {
        newX -= correction - minGap;
      }

      if ((correction + minGap + popupW) > window.innerWidth) {
        newX -= correction + minGap + popupW - window.innerWidth;
      }

      popup.css('left', Math.min(popupW - minGap, Math.min(-minGap, newX)));
    }).on('mouseleave', function () {
      tooltip.find('.tooltip').hide();
    });
  });
})();
