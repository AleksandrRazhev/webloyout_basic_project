document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__menu-item-item-artist').forEach(function(artistClick) {
        artistClick.addEventListener('click', function(event) {
            const artistClickElem = event.currentTarget
            const artistClickParent = artistClickElem.parentNode
            const artistClickNumber = artistClickParent.dataset.catalogItem
            const artistClickArticle = document.querySelector(`[data-catalog-artist = "${artistClickNumber}"]`)

            const artistEmptyInner = `
            <button class="artist-card-item-picture">
              <picture>
                <source srcset="img/artist-x_320.png" media="(max-width: 576px)">
                <source srcset="img/artist-x_768.png" media="(max-width: 768px)">
                <source srcset="img/artist-x_1024.png" media="(max-width: 1024px)">
                <source srcset="img/artist-x_1920.png" media="(min-width: 1025px)">
                <img class="artist-card-item-img" src="img/artist-x_1920.png" alt="">
              </picture>
            </button>
            <span class="artist-card-item-name">Что мы о нём знаем?</span>
            <span class="artist-card-item-years"></span>
            <p class="artist-card-item-description">
              Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
            </p>
            <a class="artist-card-item-link" href="#gallery">В галерею</a>
            `

            if (artistClickArticle.childNodes.length > 0) {
                removeArtistOpen()
                addArtist(artistClickArticle, artistClickElem)
            } else {
                artistClickArticle.innerHTML = artistEmptyInner
                removeArtistOpen()
                addArtist(artistClickArticle, artistClickElem)
            }
        })
    })
})

function removeArtistOpen() {
    document.querySelectorAll('.catalog__artist-card-item').forEach(function(classRemove0) {
        classRemove0.classList.remove('catalog__artist-card-item-on')
    })
    document.querySelectorAll('.catalog__menu-item-item-artist').forEach(function(classRemove1) {
        classRemove1.classList.remove('catalog__item-artist-on')
    })
}

function addArtist(artistClickArticle, artistClickElem) {
    artistClickArticle.classList.add('catalog__artist-card-item-on')
    artistClickElem.classList.add('catalog__item-artist-on')
}