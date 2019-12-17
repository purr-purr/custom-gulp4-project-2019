var main = function () {
    
    // handle on page scroll
    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $("body").addClass("page-on-scroll");
        } else {
            $("body").removeClass("page-on-scroll");
        }
    }

    return {
        init: function () {
            // initial setup for fixed header
            handleHeaderOnScroll();

            // handle minimized header on page scroll
            $(window).scroll(function() {
                handleHeaderOnScroll();
            });
        },
    };
}();

$(document).ready(function() {
    main.init();
});