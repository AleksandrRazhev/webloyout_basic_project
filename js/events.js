document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.events__show-all').addEventListener('click', function () {
        this.classList.add('events__btn-off')
        document.querySelectorAll('.events__block-item').forEach(function (event) {
            event.classList.add('events-on')
        })
    })
    /* if (window.matchMedia("(max-width: 576px)").matches) {
        const swiperContainer = document.querySelector('.events__block')
        swiperContainer.classList.add('swiper-container')
        swiperContainer.classList.add('event__swiper-container')
    } */
})