import $ from 'jquery';
import 'magnific-popup';
import rangeSlider from 'rangeslider-pure';

import checkIsMobile from '../../scripts/isMobile.js';

const modal = (() => {
  const isMobile = checkIsMobile();

  const options = {
    type: 'inline',
    closeBtnInside: true,
    removalDelay: 500,
    fixedContentPos: true,
    mainClass: 'mfp-zoom-in',
    alignTop: isMobile ? true : false,
    callbacks: {
      open() {
        const radiusRange = document.querySelectorAll('.geoplace__radius');

        if (radiusRange.length) {
          rangeSlider.create(radiusRange, {
            polyfill: true
          });
        }
      }
    }
  };

  $('.link-modal').magnificPopup(options);
})();

export default modal;
