import $ from 'jquery';

const thumbGallery = (() => {
	const isTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
	const galleryItem = $('.thumb-gallery__item');
	const hoverMarkerClass = 'thumb-gallery__item_hovered';

	if (!isTouch) {
		galleryItem.on('mouseenter', (e) => {
			const el = $(e.target);

			el.siblings().removeClass(hoverMarkerClass);
			el.addClass(hoverMarkerClass);
		})
	} else {
		galleryItem.on('touchstart', (e) => {
			const el = $(e.target);
			el.siblings().removeClass(hoverMarkerClass);
			el.addClass(hoverMarkerClass);
		})
	}
})();

export default thumbGallery