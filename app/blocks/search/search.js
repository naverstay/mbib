const search = (() => {
	const wrap = document.querySelector('.search');

	if (!wrap) { return false; }

	try {
		const switcher = wrap.querySelector('.search__switcher');
		const switcherText = switcher.querySelector('.btn__text');
		const switcherLabelOpen = 'Скрыть поиск';
		const switcherLabelСlose = 'Расширенный поиск';
		const advanced = wrap.querySelector('.search__advanced');

		switcher.addEventListener('click', () => {
			switcherText.textContent = switcherLabelOpen;
			if (wrap.classList.contains('search_show-advanced')) {
				switcherText.textContent = switcherLabelСlose;
				advanced.style.overflow = 'hidden';
			}
			wrap.classList.toggle('search_show-advanced');
		});

		wrap.addEventListener('transitionend', () => {
			wrap.classList.contains('search_show-advanced') ? advanced.style.overflow = 'visible' : '';
		});

		const switcherGroup = document.querySelectorAll('.search .form__group-name');

		for (let switcherItem of switcherGroup) {
			switcherItem.addEventListener('click', event => {
				const wrapper = event.target.closest('.form__group_is-accordion');
				wrapper.classList.toggle('form__group_is-accordion-open');
			});
		}
	} catch(err) {
	};

	try {
		const dropSwitcher = wrap.querySelector('.search__drop-switcher');
		const showDropClass = 'search_show-drop';

		dropSwitcher.addEventListener('click', () => {
			wrap.classList.toggle(showDropClass);
		});

	} catch(err) {}

})();

export default search;
