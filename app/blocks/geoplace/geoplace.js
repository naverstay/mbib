import $ from 'jquery';

const geoplace = (() => {
	const placeField = $('.geoplace__field');
	const placePopup = $('.popup.geoplace__popup');
	const area = $('.geoplace__area');
	const listItems = $('.geoplace-list__item');

	const openPopup = () => {
		placePopup.addClass('popup_show');
	};

	const closePopup = () => {
		placePopup.removeClass('popup_show');
	};

	const addItem = function(place){
		const btn = $('<a>', {
			class : 'btn btn_theme_pseudo btn_size_s geoplace__item',
			href: '',
			append : $('<span>', {
					class: 'btn__text',
					text: place
				})
				.add($('<span class="btn__remove"><svg class="btn__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/icon.svg#icon_close"></use></svg></span>'))
		}).appendTo(area);
		closePopup();
	}

	placeField.on('keyup', function(){
		$(this).val() !== '' ? openPopup() : closePopup();
	});

	listItems.on('click', function(){
		const el = $(this);
		console.log(el.html());
		placeField.val('');
		addItem(el.text());
	})

})();

export default geoplace