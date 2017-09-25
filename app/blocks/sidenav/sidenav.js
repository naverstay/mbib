export default () => {
	const btnOpen = document.querySelector('.sidenav__btn');
	const body = document.querySelector('body');
	const wrap = document.querySelector('.sidenav__body');
	const activeClass = 'open-side';

	const open = e => {
		body.classList.add(activeClass);
	};

	btnOpen.addEventListener('click', open);
};