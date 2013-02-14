
(function($) {
$(document).ready(function() {		
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop >= 150) {
					$('.zone-user-wrapper').stop().css('background', 'rgba(255, 255, 255, 1)');
					$('.zone-user-wrapper').stop().css('box-shadow', '0 0 5px rgba(0, 0, 0, 0.5)');
					$('.zone-user-wrapper').stop().css('padding', '0');
					$('.tjc-brand').stop().css('color', '#000');
				}
				else   {
					$('.zone-user-wrapper').stop().css('background', 'rgba(255, 255, 255, 0.25)');
					$('.zone-user-wrapper').stop().css('box-shadow', '0 0 0 rgba(0, 0, 0, 0.5)');
					$('.zone-user-wrapper').stop().css('padding', '15px 0');
					$('.tjc-brand').stop().css('color', '#fff');
				}
			});
		});
}(jQuery));

(function($) {
$(document).ready(function() {	
	$('.zone-content-wrapper').stickem();
		});
}(jQuery));