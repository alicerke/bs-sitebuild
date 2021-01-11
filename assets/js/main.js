        ///////////////// fixed menu on scroll for desktop
        if ($(window).width() > 992) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 40) {
                    $('#navbar_top').removeClass("navbar-dark");
                    $('#navbar_top').addClass("fixed-top navbar-light bg-light");
                    // add padding top to show content behind navbar
                    $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
                } else {
                    $('#navbar_top').removeClass("fixed-top navbar-light bg-light");
                    $('#navbar_top').addClass("navbar-dark");
                    // remove padding top from body
                    $('body').css('padding-top', '0');
                }
            });
        } // end if