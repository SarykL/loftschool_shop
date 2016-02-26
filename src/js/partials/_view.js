;$(document).ready(function() {
	$('.catalog-view_rows').on('click', function (){
		$('.products-item').removeClass('products-item_list');
		$('.products-item').removeClass('products-item_thumbnails');
		$('.products-item').addClass('products-item_row');
	});
		$('.catalog-view_thumbnails').on('click', function (){
		$('.products-item').removeClass('products-item_list');
		$('.products-item').removeClass('products-item_row');
		$('.products-item').addClass('products-item_thumbnails');
	});
		$('.catalog-view_list').on('click', function (){
		$('.products-item').removeClass('products-item_row');
		$('.products-item').removeClass('products-item_thumbnails');
		$('.products-item').addClass('products-item_list');
	});

});