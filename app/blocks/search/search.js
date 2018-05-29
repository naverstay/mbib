const search = (() => {
	const wrap = document.querySelector('.search');

	if (!wrap) return;

	const switcher = wrap.querySelector('.search__switcher');
	const switcherText = switcher.querySelector('.btn__text');
	const switcherLabelOpen = "Скрыть поиск";
	const switcherLabelСlose = "Расширенный поиск";
	const advanced = wrap.querySelector('.search__advanced');

	switcher.addEventListener('click', () => {
		switcherText.textContent = switcherLabelOpen;
		if (wrap.classList.contains('search_show-advanced')) {
			switcherText.textContent = switcherLabelСlose
			advanced.style.overflow = 'hidden';
		}
		wrap.classList.toggle('search_show-advanced');
	})

	wrap.addEventListener('transitionend', () => {
		wrap.classList.contains('search_show-advanced') ? advanced.style.overflow = 'visible' : '';
	})

	const switcherGroup = document.querySelectorAll('.search .form__group-name');

	for (let switcher of switcherGroup) {
		switcher.addEventListener('click', event => {
			console.log('click');
			const wrap = event.target.closest('.form__group_is-accordion');
			wrap.classList.toggle('form__group_is-accordion-open');
		})
	}
})();

export default search