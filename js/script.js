$(document).ready(function(){

    setInterval (function(){
        $('.in_banner').delay(4000);
        $('.in_banner').animate({marginLeft : '-100%'});
        $('.in_banner').delay(4000);
        $('.in_banner').animate({marginLeft : '-200%'});
        $('.in_banner').delay(4000);
        $('.in_banner').animate({marginLeft : '-300%'});
        $('.in_banner').delay(4000);
        $('.in_banner').animate({marginLeft : '-400%'});
        $('.in_banner').delay(4000);
        $('.in_banner').animate({marginLeft : '-500%'});
        $('.in_banner').delay(4000);
        $('.in_banner').animate({marginLeft : '0%'});
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup : 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup : 2,
            },
            1441: {
                slidesPerView: 3,
                slidesPerGroup : 3,
            }
        }
    });

});//end