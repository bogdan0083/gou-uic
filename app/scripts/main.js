$(document).ready(function () {

    // SVG FOR EVERYBODY! (svg polyfill)
    svg4everybody();

    $('.nav-trigger-wrap').on('click', function(e) {
        e.preventDefault();

        $(this).find('.nav-trigger').toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });

    var $megaSlider = $('.mega-slider'),
        $doubleSlider = $('.double-slider');

    $megaSlider.find('.wrapper').slick({
        arrows: false,
        dots: false
    });

    $doubleSlider.slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        infinite: false,
        autoplay: false,
        fade: true
    });

    $('.features-and-types .tab').click(function (e) {
        e.preventDefault();
        $doubleSlider.slick('slickGoTo', $(this).index());

        $('.features-and-types .tab').removeClass('js-active');
        $(this).addClass('js-active');
    });
});