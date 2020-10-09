const nav = (() => {
  const triggers = document.querySelectorAll('.nav_sidenav .nav__trigger');
    for (let trigger of triggers) {
      trigger.addEventListener('click', function (event) {
        const nv = event.currentTarget.closest('.nav__item');
        const dropdown = nv.querySelector('.nav__dropdown');
        dropdown.classList.toggle('nav__dropdown_open');
      });
    }

})();

export default nav;
