import data from '../../data/cars.json';

const card = (() => {
  const car = data[0];
  const spec = document.querySelector('.card_spec');
  const cardMetaPhone = `
    <div class="short-poster card__data-sticky">
      <h4 class="short-poster__title">${car.name}</h4>
      <div class="short-poster__price">${car.price}
        <span class="short-poster__price-currency rouble">a</span>
        <div class="action action_only-icon action_is-visible short-poster__action">
          <a href="" class="action__item action__item_simple">
            <span class="action__icon">
              <svg class="action__icon-img action__icon-img_like"><use xlink:href="/assets/images/icon.svg#icon_like"></use></svg>
              <svg class="action__icon-img action__icon-img_like action__icon-img_like_fill"><use xlink:href="/assets/images/icon.svg#icon_like_fill"></use></svg>
            </span>
            <span class="action__item-text">В избранное</span>
          </a>
        </div>
      </div>
      <div class="short-poster__owner">${car.author}
        <span class="short-poster__remark">(${car.authorStatus})</span>
      </div>
      <div class="short-poster__address">${car.inspect.city} ${car.inspect.address}</div>
      <div class="short-poster__contact">
        <div class="show-phone card__meta-phone">
          <button class="btn btn_size_xxl btn_theme_${spec ? 'main' : 'secondary'} show-phone__button show-phone" type="button">
            <span class="show-phone__text">
              <span class="show-phone__label">Показать телефон</span>
              <span class="show-phone__placeholder">+7&nbsp;***&nbsp;***&nbsp;**&nbsp;**</span>
            </span>
          </button>
          <a href="tel:+7 912 669-66-66" class="show-phone__link show-phone__link_small-size">+7 912 669-66-66</a>
          <a href="tel:+7 912 669-66-66" class="show-phone__link show-phone__link_small-size">+7 912 669-66-66</a>
        </div>
      </div>
    </div>
  `;

  const cardDataSide = document.querySelector('.card__data-side');
  const getWindowWidth = () => window.innerWidth;

  if (!cardDataSide) {
    return;
  }

  const isHeightAvaible = () => {
    const featureCardHeight = document.querySelector('.card__feature').offsetHeight;
    const cardDataSideHeight = cardDataSide.offsetHeight;

    return (cardDataSideHeight - featureCardHeight) >= 300;
  };


  window.addEventListener('load', () => {
    if (getWindowWidth() >= 1024 && isHeightAvaible()) {
      cardDataSide.insertAdjacentHTML('beforeEnd', cardMetaPhone);
    }
  });

  window.addEventListener('resize', () => {
    if (getWindowWidth() >= 1024 && isHeightAvaible()) {
      if (!cardDataSide.querySelector('.short-poster')) {
        cardDataSide.insertAdjacentHTML('beforeEnd', cardMetaPhone);
      }
    } else {
      let card = document.querySelector('.card__data-sticky');
      if (card) {
        card.remove();
      }
    }
  });
})();

export default card;
