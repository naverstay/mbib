// import $ from 'jquery';

const collapse = () => {
	const wrap = $('.collapse');
	const head = $('.collapse').find('.collapse__head');
	// const body = $('.collapse').find('.collapse__body');

	function toggle(e) {
		const parent = $(e.target).closest('.collapse')
		parent.toggleClass('collapse_open');
	}

	function close() {
		wrap.removeClass('collapse_open');
	}

	head.on('click', toggle);
};

export default collapse
