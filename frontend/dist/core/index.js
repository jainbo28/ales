/** Initiate AOS */
AOS.init();

(function() {

    'use strict';
  
    // preloader
    $(window).on('load', function() {
      $('.loader').fadeOut('slow');
    });
  
    // smooth scroll
    $("a").on("click", function(event) {
  
        if (this.hash !== "") {
            event.preventDefault();
  
            var hash = this.hash;
  
            $("html, body").animate({
  
                scrollTop: $(hash).offset().top - 50
  
            }, 850);
  
        }
  
    });
  
    // magnific popup
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.popup-image', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            },
        });
    });
  
    // hide navbar on click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
  
    // navbar on scroll
    $(window).on("scroll", function() {
  
        var onScroll = $(this).scrollTop();
  
        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }
  
    });
  
  })();