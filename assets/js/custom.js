$(document).ready(function() {
    new WOW().init();
    // smoothscroll
    // $(document).on("scroll", onScroll);
    // $('.nav-link').on('click', function(e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
    //     $('.navbar-nav .nav-item').each(function() {
    //         $('.navbar-nav .nav-item').removeClass('active');
    //     })
    //     $(this).closest('.navbar-nav .nav-item').addClass('active');
    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top + 2
    //     }, 1500, 'swing', function() {
    //         $(document).on("scroll", onScroll);
    //     });
    // });

    // function onScroll(event) {
    //     var scrollPos = $(document).scrollTop();
    //     $('.navbar-nav .nav-item .nav-link').each(function() {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //             $('.navbar-nav .nav-item').removeClass("active");
    //             $(this).closest('.navbar-nav .nav-item').addClass("active");
    //         } else {
    //             currLink.removeClass("active");
    //         }
    //     });
    // }

    // navbar fixed postion
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });

    $("form").on("change", ".file-upload-field", function() {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    });

    // scroll down arrow
    $('a.scroll-down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

    // nav mobile show and hidden
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').show();
        $(".navbar-toggler").hide();
    })
    $(".close").click(function() {
        $(".navbar-collapse").removeClass('show');
        $(".navbar-toggler").show();
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});

// loading screen
$(window).on('load', function() {
    $(".overlay-loading .spinner").fadeOut(2000, function() {
        $(this).parent().fadeOut(2000, function() {
            $(this).remove();
        });
    });
});