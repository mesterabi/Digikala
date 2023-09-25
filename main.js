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

// footer read more start
const parentContainer = document.querySelector(".text");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes(".read-bore-btn");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("مشاهده بیشتر")
    ? "بستن"
    : "مشاهده بیشتر";
});
// footer read more end
