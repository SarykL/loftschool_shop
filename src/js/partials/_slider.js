// Range slider

;$(document).ready(function () {
	$(function () {
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 25000,
		values: [ 0, 25000 ],
		slide: function( event, ui ) {
			$( ".range-slider__input-start" ).val( ui.values[ 0 ] );
			$( ".range-slider__input-end" ).val( ui.values[ 1 ] );
		}
	});
	$(".range-slider__input-start").val($("#slider-range").slider("values", 0));
	$(".range-slider__input-end").val($("#slider-range").slider("values", 1));

	});
});