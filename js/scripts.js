
var menu = $('#menu');
var headerContactInfo = $('.header-contact-info');

$(window).resize(function() {
	if ($(window).width() < 992) {
			$(menu).addClass('nav-stacked');
			$(headerContactInfo).hide();
	} else {
		$(menu).removeClass('nav-stacked');
		$(headerContactInfo).show();
}

}).resize();

jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});