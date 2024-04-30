//AVM'LER SECTİONu İÇİN YAPILAN KOD DİZİNİ
var swiper = new Swiper(".mall.mySwiper", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
    loop: true,
    effect: "coverflow",
    speed: 1000,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-navBtnNxt",
        prevEl: ".swiper-navBtnPrv",
    },
    });