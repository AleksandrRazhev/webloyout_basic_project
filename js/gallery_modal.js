document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery__swiper-slide').forEach(function(galleryPicture) {
        galleryPicture.addEventListener('click', function(event) {
            event.preventDefault()
            const galleryNumberElement = event.currentTarget.dataset.galleryImg
            const eventCopy = event.currentTarget.cloneNode(true)
            const descriptonCopy = document.querySelector(`[data-gallery-txt="${galleryNumberElement}"]`).cloneNode(true)
            openModalWindow(eventCopy, descriptonCopy)
            return imgModalWindow = eventCopy, txtModalWindow = descriptonCopy
        }, false)
        document.querySelector('.gallery__mod-win-close').addEventListener('click', function(){
            closeModalWindow(imgModalWindow, txtModalWindow)
        })
    })
  })
  
  function openModalWindow(elemImg, elemTxt) {
    document.querySelectorAll('.gallery__swiper-slide').forEach(function(classRemove) {
        classRemove.classList.remove('open__swiper-slide')
    })
    elemImg.style.marginTop=0
    elemImg.style.marginBottom=0
    elemImg.style.marginRight=0
    elemImg.style.marginLeft=0
    elemImg.style.width='auto'
    elemImg.classList.add('open__swiper-slide')
    document.body.classList.toggle('body__background')
    document.querySelector('.gallery__mod-win').classList.toggle('gallery__mod-win-on')
    document.querySelector('.gallery__swiper-text').classList.toggle('.gallery__swiper-text-on')
    document.querySelector('.gallery__mod-win-left').appendChild(elemImg)
    document.querySelector('.gallery__mod-win-right').appendChild(elemTxt)
  }

  function closeModalWindow(elemImg, elemTxt) {
    document.querySelector('.gallery__mod-win-left').removeChild(elemImg)
    document.querySelector('.gallery__mod-win-right').removeChild(elemTxt)
    document.body.classList.remove('body__background')
    document.querySelector('.gallery__mod-win').classList.remove('gallery__mod-win-on')
    document.querySelector('.gallery__swiper-text').classList.remove('.gallery__swiper-text-on')
  }