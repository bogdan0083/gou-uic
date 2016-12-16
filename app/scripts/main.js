$(document).ready(function () {

    // SVG FOR EVERYBODY! (svg polyfill)
    svg4everybody();

    $('.nav-trigger-wrap').on('click', function(e) {
        e.preventDefault();

        $(this).find('.nav-trigger').toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });

    var $megaSlider = $('.mega-slider');

    $megaSlider.find('.wrapper').slick({
        arrows: false,
        dots: false
    });
});