
//Mobile Menu

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
			$('.my-slider').unslider({
				autoplay: true,
				speed: 800,
				delay: 4000
			});
		});





//Contact form validation

	//Hide hints
	var nameHint = $('.name-hint');
	var emailHint = $('.email-hint');

	$("form span").hide();

	$('#send-btn').click(function() {
		//show hint if no name is entered
		if($('#name').val() < 1) {
			nameHint.show();
		}
		else {
			//hide hint if name is entered
			nameHint.hide();
		}
	})

//Contact Page Google Map

function initMap() {
		var myLatLng = {lat: 35.378109, lng: -98.782017};

        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: myLatLng,
            zoom: 9
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
      });
    }