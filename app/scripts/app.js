import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import tab from '../blocks/tab/tab';
import select from '../blocks/select/select';
import multiselect from '../blocks/select/multiselect';
import carousel from '../blocks/carousel/carousel';
import gallery from '../blocks/gallery/gallery';
import digitpretify from '../blocks/input/input';
import cardList from '../blocks/card-list/card-list';
import sidenav from '../blocks/sidenav/sidenav';
import modal from '../blocks/modal/modal';
import form from '../blocks/form/form';
import collapse from '../blocks/collapse/collapse';
import geoplace from '../blocks/geoplace/geoplace';
import search from '../blocks/search/search';
import '../blocks/add-photo/add-photo';
import '../blocks/range/range';
import '../blocks/thumb-gallery/thumb-gallery';
import '../blocks/phone-field/phoneField';
import '../blocks/show-phone/show-phone';
import '../blocks/card/card';
import 'lazysizes';
import 'notyf';

const checkTouch = () => {
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    document.body.classList.add('page_touch');
  }
};

$(() => {
  svg4everybody();

  checkTouch();

  sidenav();

  carousel.init();

  gallery.init();

  collapse();

  digitpretify();

  $('.tile').on('click', () => {return true;});

});
