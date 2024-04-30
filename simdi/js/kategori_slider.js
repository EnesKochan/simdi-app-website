//KATEGORİLER SLİDERı İÇİN KULLANILAN JS DOSYASI

var swiper = new Swiper(".category_content.slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".category_next",
        prevEl: ".category_prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
    

  });