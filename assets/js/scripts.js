document.addEventListener("DOMContentLoaded", function(){
    // OWLSLIDER
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            }
        }
    });
    // SITE FUNCTIONS
    const toggleScroll = () =>{
         var body = document.querySelector("body");
         if(body.classList.contains("no-scroll")){
            body.classList.remove("no-scroll");
         }else{
            body.classList.add("no-scroll");
         }
    }

    const toggleSearchModal = () =>{
        var searchModal = document.getElementById("searchbox");
       
        if(searchModal.classList.contains("open")){
            searchModal.classList.remove("open");
            toggleScroll();
        }else{
            searchModal.classList.add("open");
            toggleScroll();
        }
    }

    const toggleMobileMenu = () =>{
        var mobileMenu = document.getElementById("mobilemenu");
        if(mobileMenu.classList.contains("open")){
            mobileMenu.classList.remove("open");
            toggleScroll();
        }else{
            mobileMenu.classList.add("open");
            toggleScroll();
        }
    }

    // SEARCH MODAL
    var openSearchBtn = document.getElementById("open-search");
    var closeSearchBtn = document.getElementById("close-search")

    openSearchBtn.addEventListener("click",()=>{
        toggleSearchModal();
    });
    closeSearchBtn.addEventListener("click",()=>{
        toggleSearchModal();
    });

    // MOBILE MENU
    var openMenu = document.getElementById("open-menu");
    var closeMenu = document.getElementById("close-menu");
    var menuOverlay = document.getElementById("menu-overlay");

    openMenu.addEventListener("click", ()=>{
        toggleMobileMenu();
    });
    closeMenu.addEventListener("click", ()=>{
        toggleMobileMenu();
    });
    menuOverlay.addEventListener("click", ()=>{
        toggleMobileMenu();
    })
});