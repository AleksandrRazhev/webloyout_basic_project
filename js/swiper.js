const heroSwiper = new Swiper('.back-hero-img__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  scrollbar: {
    hide: true,
  },

  a11y: false,
});

const gallerySwiper = new Swiper('.gallery__swiper-container', {

  slidesPerColumnFill: "row",
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 20,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },

  breakpoints: {
    577: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },

    1201: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50
    }
  },

  // Optional parameters
  direction: 'horizontal',


  // Navigation arrows
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  scrollbar: {
    hide: true,
  },

  a11y: false,
});

const eventsSwiperClass = document.querySelector('.events__swiper-container')
let eventsSwiper 

initialEventsSwiper()

window.addEventListener('resize', () => {
  initialEventsSwiper()
})


function initialEventsSwiper() {
  if (window.innerWidth <= 650 && eventsSwiperClass.dataset.mobile == 'false'){
    eventsSwiper = new Swiper (eventsSwiperClass, {
      slidesPerView: 1,
      spaceBetween: 27,
      loop: true,
    })

    eventsSwiperClass.dataset.mobile = 'true'
  }

  if (window.innerWidth > 650) {
    eventsSwiperClass.dataset.mobile = 'false'
    if (eventsSwiperClass.classList.contains('swiper-container-initialized')) {
      eventsSwiper.destroy()
    }
  }
}

