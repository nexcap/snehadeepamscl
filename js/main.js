(function ($) {
    "use strict";




    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);




// preloader 

$(document).ready(function () {

    preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.pre-loder');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});















