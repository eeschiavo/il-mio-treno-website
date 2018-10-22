(function($) {
    "use strict"; // Start of use strict

    function getWindowRelativeOffset(parentWindow, elem) {
            var offset = {
                left : 0,
                top : 0
            };
            // relative to the target field's document
            offset.left = elem.getBoundingClientRect().left;
            offset.top = elem.getBoundingClientRect().top;
            // now we will calculate according to the current document, this current
            // document might be same as the document of target field or it may be
            // parent of the document of the target field
            var childWindow = elem.document.frames.window;
            while (childWindow != parentWindow) {
                offset.left = offset.left + childWindow.frameElement.getBoundingClientRect().left;
                offset.top = offset.top + childWindow.frameElement.getBoundingClientRect().top;
                childWindow = childWindow.parent;
            }
            return offset;
        };

    window.animateItem = function(id) {
        console.log($(id).offset().top);
        console.log($(id).offset().top - $(window).scrollTop());
        $('html, body').animate({
            scrollTop: ($(id).offset().top - 48)
        }, 1000, "easeInOutExpo");
    }

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    //disabilito il drag delle immagini
    $('img').on('dragstart', function(event) {
        event.preventDefault();
    });


    $('.carousel').slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },

          ]
    });

})(jQuery); // End of use strict
