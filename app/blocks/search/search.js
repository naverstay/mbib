const search = (() => {
  const wrap = document.querySelector('.search');

  if (!wrap) {
    return false;
  }

  try {
    const switcher = wrap.querySelector('.search__switcher');

    if (!switcher) {
      return;
    }

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
  } catch (err) {
    throw new Error(err);
  }

  try {
    const dropSwitcher = wrap.querySelector('.search__drop-switcher');
    const showDropClass = 'search_show-drop';

    dropSwitcher.addEventListener('click', () => {
      wrap.classList.toggle(showDropClass);
    });

  } catch (err) {
  }

  try {
    const header = wrap.querySelector('.search__header');
    const headerButton = wrap.querySelector('.search__header-toggler');
    const advanced = wrap.querySelector('.search__row_advanced');

    headerButton.addEventListener('click', () => {
      if (wrap.classList.contains('search_show-advanced')) {
        advanced.style.overflow = 'hidden';
      }

      header.classList.toggle('search__header_open');
      wrap.classList.toggle('search_show-advanced');
    });

    wrap.addEventListener('transitionend', () => {
      wrap.classList.contains('search_show-advanced') ? advanced.style.overflow = 'visible' : '';
    });


  } catch (err) {
  }

  try {
    const toggler = wrap.querySelector('.search__toggler-button');
    const toggleBody = wrap.querySelector('.search__toggle-body');
    const toggleBodyActiveClass = 'search__toggle-body_open';

    if (toggler) {
      toggler.addEventListener('click', () => {
        toggleBody.classList.toggle(toggleBodyActiveClass);
      });
    }
  } catch (err) {
    throw new Error(err);
  }

})();

export default search;
