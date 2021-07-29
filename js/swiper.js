const heroSwiper = new Swiper('.back-hero-img__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    hide: true,
  },

  a11y: false,
});

const gallerySwiper = new Swiper('.gallery__swiper-container', {

  slidesPerColumnFill: "row",
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },

  // Optional parameters
  direction: 'horizontal',


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    hide: true,
  },

  a11y: false,
});

