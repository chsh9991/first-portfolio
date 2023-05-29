$(function(){
	var $button  = $('.gallery a'),
		$target = $('#lightbox-overlay'),
		$targetImg = $target.find('img');
		
		$button.click(function(){
			var newImg = $(this).find('img').attr('data-lightbox');
			console.log(newImg);
			$target.addClass('visible');
			$targetImg.attr('src', newImg);
		});
		$target.click(function(){
			$target.removeClass('visible');
		});
	
});



