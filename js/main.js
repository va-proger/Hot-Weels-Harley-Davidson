
$(document).ready(function(){
    // nav menu
    document.querySelector('.menu-icon-wrapper').onclick = function(){
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    };
    // Owl Corousel
    $(".owl-carousel").owlCarousel({
        items:1
    });

    // Scroll To Top

    const scrollBtn = $('.scroll-to-top-btn');
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 500){
            scrollBtn.fadeIn();
        } else {
            scrollBtn.fadeOut();
        }
    })
    scrollBtn.click(function(){
        $('html, body').animate({ scrollTop: 0 }, 360);
        return false;
    })
    var mixer = mixitup('.products__row');
});
