let swiper = new Swiper(".mySwiper", {
    //   spaceBetween: 30,
    speed: 3000,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next"
      },
      loop: true
    });