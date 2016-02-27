// Accordion

;$(document).ready(function () {
	$('.filter-list-item__trigger').on('click', function (e) {
		e.preventDefault();
		
		var $this = $(this),
			item = $this.closest('.filter-list-item'),
			list = $this.closest('.filter-list'),
			items = list.find('.filter-list-item'),
			content = item.find('.filter-list-item__inner-list'),
			otherContent = list.find('.filter-list-item__inner-list'),
			duration = 250;

		if (!item.hasClass('active')) {
			// items.stop(true, true).removeClass('active');
			item.addClass('active');
			// otherContent.stop(true, true).slideUp(duration);
			content.stop(true, true).slideDown(duration);
		} else {
			content.stop(true, true).slideUp(duration);
			item.stop(true, true).removeClass('active');
		}
	});

	// Color box picker
	
	$('.color-box-item').on('click', function (e) {
		e.preventDefault();
		
		var $this = $(this),
			item = $this.closest('.color-box-item'),
			list = $this.closest('.color-box-cont'),
			items = list.find('.color-box-item');

		if (!item.hasClass('checked')) {
			items.removeClass('checked');
			item.addClass('checked');
		} else {
			item.removeClass('checked');
		}

	});
});