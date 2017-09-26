export default () => {
	const btnOpen = document.querySelector('.sidenav__btn');
	const btnClose = document.querySelector('.sidenav__close');
	const overlay = document.querySelector('.sidenav__overlay');
	const body = document.querySelector('body');
	const wrap = document.querySelector('.sidenav__body');
	const activeClass = 'page_open-side';

	const open = () => {
		body.classList.add(activeClass);
	};

	const close = () => {
		body.classList.remove(activeClass);
	};

	btnOpen.addEventListener('click', open);
	overlay.addEventListener('click', close);
	btnClose.addEventListener('click', close);
};