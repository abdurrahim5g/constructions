// A $( document ).ready() block.
$(document).ready(function() {

	// smuth scroll JQuary start
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();
	  // Store hash
	  var hash = this.hash;
	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 800, function(){
	    // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	  });
	} // End if
	});
	// smuth scroll JQuary end

	// accordion start
   	$(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.accordion-container'), false);
	});
    // accordion end


    // magnificPopup custom js
	$('.play-btn').magnificPopup({type:'iframe'});


	// owl-carowsel custom js with hero-area 
	$('.hero-area').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		autoplayHoverPause:false,
		autoplaySpeed:1000,
		nav:false,
		dots:true,

	});


	// owl-carowsel custom js with news-img-slider
	$('.teem-slider-area').owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		autoplaySpeed:1000,
		autoplayHoverPause:true,
		nav:false,
		dots:true,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        575.98:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        991:{
	            items:4,
	        }
	    }
	});


	// owl-carowsel custom js with slide-logo
	$('.slide-logo').owlCarousel({
		items:6,
		loop:true,
		autoplay:true,
		autoplaySpeed: 1000,
		nav:false,
		dots:false,
		margin:10,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        767:{
	            items:3,
	        },
	        991:{
	            items:4,
	        },
	        1200:{
	            items:6,
	        }
	    }
	});


	// owl-carowsel custom js with projects-img
	$('.projects-img').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		nav:true,
		dots:false,
		navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
	});



	// counter up js
	$('.counter').counterUp({
	    delay: 5,
	    time: 2000,
	});

	//wow js advance start --------------------------//
	new WOW().init();
	//wow js advance end --------------------------//



	// slick nav start
	$(function(){
	       $('#menu').slicknav({prependTo:"#menu"});
	   });
	// slick nav end







	




	 

    



    
});














