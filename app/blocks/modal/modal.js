import $ from 'jquery';
import 'magnific-popup';
import checkIsMobile from '../../scripts/isMobile.js';

const modal = (() => {
  const isMobile = checkIsMobile();

  const options = {
    type: 'inline',
    closeBtnInside: true,
    removalDelay: 500,
    fixedContentPos: true,
    mainClass: 'mfp-zoom-in',
    alignTop: isMobile ? true : false
  };

  $('.link-modal').magnificPopup(options);
})();

export default modal;
