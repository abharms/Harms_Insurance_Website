
var menu = $('.nav');
var headerContactInfo = $('.header-contact-info');

$(window).resize(function() {
	if ($(window).width() < 992) {
			$(menu).addClass('nav-stacked');
			
	} else {
		$(menu).removeClass('nav-stacked');

}

});

jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});