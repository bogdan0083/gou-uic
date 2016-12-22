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

    // custom slider (in special offers)

    $(function() {

        var $customSlider = $('.custom-slider');
        var minWindowWidth = 880;

        if ($(window).width() >= 880 && $customSlider) {

            var $children = $customSlider.children();
            var childrenCount = $children.length;
            var activeClass = 'js-active';
            var slideClass = 'slide';
            var initialSlide = 0;

            var activeSlide;
            var activeSlideIndex = initialSlide;

            // ATTENTION!
            // slide width used as a percentage. use it like that: (slideWidth + '%')
            var slideWidth = 3;

            var arrowClassLeft = 'arr-left';
            var arrowClassRight = 'arr-right';
            var $arrLeft = $customSlider.find('.' + arrowClassLeft);
            var $arrRight = $customSlider.find('.' + arrowClassRight);

            if (childrenCount > 1) {
                activeSlide = $children.eq(initialSlide).addClass(activeClass).css('width', (100 - slideWidth * (childrenCount - 1)) + '%');

                $children.not(activeSlide).css('width', slideWidth + '%');

                changeSlidesWidth();
            }

            // events
            $customSlider.on('click', '.' + slideClass, onClick);
            $arrLeft.on('click', slidePrev);
            $arrRight.on('click', slideNext);

            // on click event handler
            function onClick(e) {
                e.preventDefault();
                // e.stopPropagation();
                activeSlide.removeClass(activeClass);

                activeSlide = $(this).addClass(activeClass);
                activeSlideIndex = activeSlide.index();
                console.log(activeSlideIndex);

                console.log('mouse change')
                changeSlidesWidth();
            }

            function changeSlidesWidth() {
                activeSlide.css('width', (100 - slideWidth * (childrenCount - 1)) + '%');
                $children.not(activeSlide).css('width', slideWidth + '%');
            }

            function slidePrev(e) {

                e.preventDefault();
                e.stopPropagation();
                activeSlide.removeClass(activeClass);
                activeSlide = $children.eq(activeSlideIndex - 1).addClass(activeClass);
                activeSlideIndex = activeSlide.index();


                changeSlidesWidth();
            }

            function slideNext(e) {
                e.preventDefault();
                e.stopPropagation();
                activeSlide.removeClass(activeClass);
                activeSlideIndex = activeSlide.index() == childrenCount - 1 ? 0 : activeSlide.index() + 1;
                activeSlide = $children.eq(activeSlideIndex).addClass(activeClass);

                changeSlidesWidth();
            }

        }
    });



});