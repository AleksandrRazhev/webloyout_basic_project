const heroSwiper = new Swiper('.back-hero-img__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  scrollbar: {
    hide: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  a11y: false,
  autoplay: {
    delay: 20000
  },
});

const gallerySwiper = new Swiper('.gallery__swiper-container', {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: 'row',
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },

  breakpoints: {
    577: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34
    },

    1201: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
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

function initialEventsSwiper() {
  if (window.innerWidth <= 650 && eventsSwiperClass.dataset.mobile == 'false'){
    eventsSwiper = new Swiper (eventsSwiperClass, {
      slidesPerView: 1,
      spaceBetween: 27,
      loop: true,
      pagination: {
        el: ".events__pagination",
        type: 'bullets',
      },
    })
    
    eventsSwiperClass.dataset.mobile = 'true'
  }
  
  if (window.innerWidth > 650) {
    eventsSwiperClass.dataset.mobile = 'false'
    if (eventsSwiperClass.classList.contains('swiper-initialized')) {
      eventsSwiper.destroy()
    }
  }
}

// publicationsSwiper

const publicationsSwiperClass = document.querySelector('.publications__swiper')
let publicationsSwiper

const initialPublicationsSwiper = () => {

  console.log("window.innerWidth = " + window.innerWidth)

  if (window.innerWidth >= 576 && publicationsSwiperClass.dataset.mobile == 'true'){
    publicationsSwiper = new Swiper('.publications__swiper', {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 34,
      pagination: {
        el: ".publications__pagination",
        type: "fraction"
      },
      
      breakpoints: {
        993: {
          slidesPerView: 2,
          grid: {
            rows: 1,
          },
          spaceBetween: 49
        },
        1201: {
          slidesPerView: 3,
          grid: {
            rows: 1,
          },
          spaceBetween: 50
        }
      },
      
      // Optional parameters
      direction: 'horizontal',
      
      
      // Navigation arrows
      navigation: {
        nextEl: '.publications__swiper-button-next',
        prevEl: '.publications__swiper-button-prev',
      },
      
      scrollbar: {
        hide: true,
      },
      
      a11y: false,
    });
    
    publicationsSwiperClass.dataset.mobile = 'false'
  }
  
  if (window.innerWidth < 576) {
    publicationsSwiperClass.dataset.mobile = 'true'
    if (publicationsSwiperClass.classList.contains('swiper-initialized')) {
      publicationsSwiper.destroy()
    }
  }
}

initialPublicationsSwiper()

window.addEventListener('resize', () => {
  initialEventsSwiper()
  initialPublicationsSwiper()
})

const projectsSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  spaceBetween: 22,
  breakpoints: {
    577: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  scrollbar: {
    hide: true,
  },
  a11y: false,
});
