document.addEventListener('DOMContentLoaded', function () {
  const swiperThumbs = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  const swiperMain = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });
});
