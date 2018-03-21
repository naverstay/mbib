import $ from 'jquery';
import 'select2';

const geoplace = (() => {
	const placeField = $('.geoplace__field').select2({
		width : '100%',
		dropdownParent: $('#modalPlace .modal__body')
	});;
	const placePopup = $('.popup.geoplace__popup');
	const area = $('.geoplace__area');
	const listItems = $('.geoplace-list__item');

	placeField.on('select2:select', function (e) {
		var data = e.params.data;
		console.log(data);
		addItem(data.text);
		console.log(e);
		$(e.target).val(null).trigger("change");
	});

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
		// closePopup();
	}

	listItems.on('click', function(){
		const el = $(this);
		placeField.val('');
		addItem(el.text());
	})

})();

export default geoplace