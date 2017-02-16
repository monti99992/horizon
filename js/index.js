var totalItems = $('#myCarousel .item').length;
var currentIndex = $('div.active').index() + 1;
$('.num').html(''+currentIndex+'/'+totalItems+'');

$('#myCarousel').carousel({
    interval:false
});
$('#myCarousel').on('slide.bs.carousel', function() {
    currentIndex = $('div.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
});
    $(window).load(function(){
      $('#flexslider1').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider2').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider3').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider4').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider5').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider6').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });

	 $(window).load(function(){
      $('#flexslider7').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider8').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider9').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	 $(window).load(function(){
      $('#flexslider10').flexslider({
        animation: "false",
        animationLoop: false,
        itemWidth: 250,
        itemMargin:10,
		minItems: 1,
        maxItems: 4,
		slideshow: false
      });
    });
	$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});
$(document).ready(function() {
    $('#san_carousel').carousel({
		pause: false,
        interval: false,
	})
	$('#san_carousel2').carousel({
		pause: false,
        interval: false,
	})
	$('#san_carousel3').carousel({
		pause: false,
        interval: false,
	})
});