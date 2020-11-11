const yadSticky = (() => {
  const sticky = document.querySelector('.yad-sticky');
  const contentBlock = document.querySelector('.content > .inner');
  const getWindowWidth = () => window.innerWidth;
  const getWindowHeight = () => window.innerHeight;

  const getSizes = () => {
    return {
      innerOffsetY: contentBlock.getBoundingClientRect().top,
      isWidthAvailable: (getWindowWidth() - 1200) / 2 > 300,
      isHeightAvailable: getWindowHeight() > 300
    };
  };

  const toggleSticky = () => {
    const sizes = getSizes();
    const scrollHeight = window.pageYOffset;

    const isAvailableDimension =
      sizes.isWidthAvailable && sizes.isHeightAvailable;
    const shouldShowAside = scrollHeight >= sizes.innerOffsetY && isAvailableDimension;

    const asideContent = document.querySelector('.yad-sticky__content');
    const asideContentDiv = `
      <div class="yad-sticky__content" id="yandex_rtb_R-A-242460-26">
        <img src="assets/images/yad2.jpg" alt="">
        <p>ddddddddddddddddd1121 321321321</p>
      </div>
    `;

    if (shouldShowAside) {
      if (asideContent) {
        sticky.classList.add('yad-sticky_active');
        return;
      }

      sticky.insertAdjacentHTML('beforeEnd', asideContentDiv);
      sticky.classList.add('yad-sticky_active');
    }else {
      sticky.innerHTML = '';
      sticky.classList.remove('yad-sticky_active');
    }
  };

  toggleSticky();

  window.addEventListener('resize', () => {
    toggleSticky();
  });

  window.addEventListener('scroll', () => {
    toggleSticky();
  });

})();

export default yadSticky;
