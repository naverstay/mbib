const addPhoto = (() => {
	const addPhotoField = document.querySelector('#addPhotoField');
	const wrapper = document.querySelector('.add-photo');
	let queue = [];
	let temp = [];
	
	if (!addPhotoField) return;
	
	addPhotoField.addEventListener('change', function() {
		[].forEach.call(this.files, function(file) {
			if (file.type.match(/image.*/)) {
				var reader = new FileReader();

				reader.onload = function(event) {
					const img = document.createElement('img');
					const placeholder = document.querySelector('.add-photo__item_placeholder');
					const block = document.createElement('div');
					block.className = 'add-photo__item';

					const removeBtn = document.createElement('span');
					removeBtn.className = 'add-photo__item-remove'
					block.appendChild(removeBtn);

					img.src = event.target.result;
					if (placeholder) temp.push(wrapper.removeChild(placeholder));
					block.appendChild(img);
					wrapper.appendChild(block);
					
					queue.push({file: file, element: img});

					removeBtn.addEventListener('click', function(){
						removePreview(block);
					});
				};

				reader.readAsDataURL(file);
			}
		});
	}, false);

	const removePreview = (element) => {
		const img = element.querySelector('img');
		queue = queue.filter((file) => {
			return file.element != img;
		});

		element.parentNode.removeChild(element);
		if (temp.length) {
			wrapper.appendChild(temp[temp.length - 1]);
			temp.pop();
		}
	}
})();