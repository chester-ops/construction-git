document.addEventListener("DOMContentLoaded", ()=>{
    // MAIN SLIDER
    $(".owl-carousel.site-slider__slides").owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 12000,
        items: 1
    });

    // WIDGET SLIDER
    $(".owl-carousel.latest-posts__list").owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 6000,
        items: 1
    });

});