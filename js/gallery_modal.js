document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery__swiper-slide').forEach(function(galleryPicture) {
        galleryPicture.addEventListener('click', function(event) {
            event.preventDefault()
            openModalWindow(event.currentTarget)
            return imgModalWindow = event.currentTarget
        }, false)
        document.querySelector('.gallery__mod-win-close').addEventListener('click', function(){
            closeModalWindow(imgModalWindow)
        })
    })
  })
  
  function openModalWindow(elem) {
    document.querySelectorAll('.gallery__swiper-slide').forEach(function(classRemove) {
        classRemove.classList.remove('open__swiper-slide')
    })
    elem.style.marginTop=0
    elem.style.marginBottom=0
    elem.style.marginRight=0
    elem.style.marginLeft=0
    elem.classList.add('open__swiper-slide')
    document.body.classList.toggle('body__background')
    document.querySelector('.gallery__mod-win').classList.toggle('gallery__mod-win-on')

    document.querySelector('.gallery__mod-win-img').appendChild(elem)
  }

  function closeModalWindow(elem) {
    document.querySelector('.gallery__mod-win-img').removeChild(elem)
    document.body.classList.remove('body__background')
    document.querySelector('.gallery__mod-win').classList.remove('gallery__mod-win-on')
  }