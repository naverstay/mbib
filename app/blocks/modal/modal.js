import $ from 'jquery';
import 'magnific-popup';

const modal = (() => {
	$('.link-modal').magnificPopup({
		type:'inline',
		closeBtnInside:true,
		removalDelay: 500,
		fixedContentPos : true,
		mainClass: 'mfp-zoom-in'
		/*callbacks: {
			beforeOpen: function() {
				// if($(window).width() < 700) {
				// 	this.st.focus = false;
				// } else {
				// 	this.st.focus = 'input';
				// };
				console.log(this.st.el);
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}*/
	});
})();

export default modal