
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

	 function validateEmail(emailAddress) {
  		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  		return emailReg.test( emailAddress );
	}

	$('#send-btn').click(function() {
		//show hint if no name is entered
		if($('#name').val() < 1) {
			nameHint.show();
		}
		else {
			//hide hint if name is entered
			nameHint.hide();
		}
		//get value of email address field
		var emailAddress = $('#email').val();
		//check to see if email address is valid
		if( !validateEmail(emailAddress)) {
			emailHint.show();
		}
		else {
			emailHint.hide();
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