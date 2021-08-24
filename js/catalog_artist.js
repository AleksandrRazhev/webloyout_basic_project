document.addEventListener('DOMContentLoaded', () => {

    const listCatalogArtists = document.querySelectorAll('.catalog__artist-card-item')
    const listItemArtist = document.querySelectorAll('.catalog__menu-item-item-artist')

    listCatalogArtists.forEach(item => {
        let eventNumber = item.dataset.catalogArtist
        item.id = 'catalog' + eventNumber
    })

    let artistClickElem
    let artistClickElemParentList
    let artistClickNumber
    let artistClickArticle
    let artistClickParentList
    let artistEmptyInner

    
    const followLink = artistClickNumber => location.href = '#catalog' + artistClickNumber
    
    const addArtistTransition = () => {
        artistClickArticle.classList.add('catalog__artist-card-item-opacity')
        followLink(artistClickNumber)
    }

    const removeArtistDisplay = () => artistClickParentList.querySelectorAll('.catalog__artist-card-item-on').forEach(item => item.classList.remove('catalog__artist-card-item-on'))
    
    const removeArtistOpen = () => {
        artistClickParentList.querySelectorAll('.catalog__artist-card-item').forEach(item => item.classList.remove('catalog__artist-card-item-opacity'))
        artistClickElemParentList.querySelectorAll('.catalog__menu-item-item-artist').forEach( item => item.classList.remove('catalog__item-artist-on'))
    }
        
    const addArtist = () => {
        artistClickArticle.classList.add('catalog__artist-card-item-on')
        artistClickElem.classList.add('catalog__item-artist-on')
        setTimeout(addArtistTransition, 0, artistClickArticle, artistClickNumber)
    }

    const manipulatingClasses = () => {
        removeArtistOpen()
        removeArtistDisplay()
        addArtist()
    }


    listItemArtist.forEach( item => {
        item.addEventListener('click', function(event) {
            artistClickElem = event.currentTarget
            artistClickElemParentList = artistClickElem.parentNode.parentNode
            artistClickNumber = artistClickElem.parentNode.dataset.catalogItem
            artistClickArticle = document.querySelector(`[data-catalog-artist = "${artistClickNumber}"]`)
            artistClickParentList = artistClickArticle.parentNode
            artistEmptyInner = `
            <div class="artist-card-item-picture">
              <picture>
                <source srcset="img/artist-x_320.png" media="(max-width: 576px)">
                <source srcset="img/artist-x_768.png" media="(max-width: 768px)">
                <source srcset="img/artist-x_1024.png" media="(max-width: 1024px)">
                <source srcset="img/artist-x_1920.png" media="(min-width: 1025px)">
                <img class="artist-card-item-img" src="img/artist-x_1920.png" alt="">
              </picture>
            </div>
            <span class="artist-card-item-name">Что мы о нём знаем?</span>
            <span class="artist-card-item-years"></span>
            <p class="artist-card-item-description">
              Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
            </p>
            <a class="artist-card-item-link" href="#gallery">В галерею</a>
            `

            if (artistClickArticle.childNodes.length > 0) {
                manipulatingClasses ()
            } else {
                artistClickArticle.innerHTML = artistEmptyInner
                manipulatingClasses ()
            }
        })
    })
})
