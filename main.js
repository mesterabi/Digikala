//first swiper start
var swiper = new Swiper(".firstSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//first swiper end

//second swiper start
var swiper = new Swiper(".secondSwiper", {
  slidesPerView: 7,
  centeredSlides: false,
  spaceBetween: 2,
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//second swiper end
// barnds swiper start
var swiper = new Swiper(".brand-swiper", {
  slidesPerView: 9.5,
  centeredSlides: false,
  spaceBetween: 0,
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});
// brands swiper end
// best seller swiper start
var swiper = new Swiper(".bestseller-swiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// best seller swiper end