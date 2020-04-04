
$(document).ready(function(){
    // nav menu
    // const menuToggle = document.querySelector('#menu-toggle');
    // menuToggle.onclick = function(){
    //     menuToggle.classList.toggle('menu-icon-active');
    // }
    
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
    var mixer = mixitup('.productsItems');
    function toggle(){
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
});
