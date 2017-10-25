$(document).ready(function() {

	$(window).scroll(function() {
		if ( $(window).scrollTop() > 100 ) {
			$('div#logo').hide();
		} else {
			$('div#logo').show();
		}
	});

	$('.owl-carousel').owlCarousel({
  	loop:true,
  	autoplay:true,
  	autoplaySpeed:2000,
  	autoplayTimeout: 1000,
  	dots: true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        }
    }
  });

  $('.owl-carousel').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  removalDelay: 350,
  	mainClass: 'mfp-fade',
  	gallery: {
    // options for gallery
    enabled: true
  	}
	});

  $('.magnif').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    removalDelay: 350,
    mainClass: 'mfp-fade',
    gallery: {
    // options for gallery
    enabled: true
    }
  });

  $("#lightgallery").lightGallery();

});