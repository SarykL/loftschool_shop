// Slideshow

;$(document).ready(function () {
	$('.products__slideshow-pic').on('click', function (e) {
		e.preventDefault();
		var $this = $(this),
			item = $this.closest('.products__slideshow-item'),
			container = $this.closest('.products__slideshow-display-wrapper'),
			display = container.find('.products__slideshow-display'),
			path = item.find('img').attr('src'),
			duration = 200;

		if (!item.hasClass('.active')) {
			item.addClass('.active').siblings().removeClass('.active');

			display.find('img').fadeOut(duration, function () {
				$(this).attr('src', path).fadeIn(duration);
			});
		}
	});
});