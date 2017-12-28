export default () => {
	const btnOpen = document.querySelector('.sidenav__btn');
	const btnClose = document.querySelector('.sidenav__close');
	const overlay = document.querySelector('.sidenav__overlay');
	const body = document.querySelector('body');
	const page = document.querySelector('html');
	const wrap = document.querySelector('.sidenav__body');
	const activeClass = 'page_open-side';
	const appVersion = navigator.appVersion;
	const isAndroid = (/android/gi).test(appVersion);
	const isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
	const probablyMobile = (isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
	let scrollbarSize;

	const _getScrollbarSize = function() {
		// thx David
		if(scrollbarSize === undefined) {
			const scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return scrollbarSize;
	};

	const _hasScrollbar = function() {
		const d = document;
		const b = d.body;
		const e = d.documentElement;
		const c = "client" + 'Height';
		const a = "scroll" + 'Height';

		const hasScroll = /CSS/.test(d.compatMode) ? (e[c]< e[a]) : (b[c]< b[a]);
		return hasScroll;
	};

	const scroll = _hasScrollbar() ? _getScrollbarSize() : 0;
	
	const open = () => {
		if (probablyMobile) {
			page.style.overflow = 'hidden';
		} else {
			page.style.overflow = 'hidden';
			page.style.marginRight = scroll + 'px';
		}
		body.classList.add(activeClass);
	};

	const close = () => {
		if (probablyMobile) {
			page.style.overflow = 'auto';
		} else {
			page.style.overflow = 'auto';
			page.style.marginRight = 0;
		}
		body.classList.remove(activeClass);
	};

	btnOpen.addEventListener('click', open);
	overlay.addEventListener('click', close);
	btnClose.addEventListener('click', close);
};