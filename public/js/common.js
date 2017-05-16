$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	navText: ["Попередня","Наступна"],
  	items: 1,
  	loop: true,
  });
  
});

$(document).ready(function(){
	$('.item').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
});