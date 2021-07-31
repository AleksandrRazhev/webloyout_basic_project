document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery__swiper-slide').forEach(function(galleryPicture) {
        galleryPicture.addEventListener('click', function(event) {
            event.preventDefault()
            openGalleryPicture(event.currentTarget)
        }, false)
    })
  })
  
  function openGalleryPicture(elem) {
    document.querySelectorAll('.gallery__swiper-slide').forEach(function(classRemove) {
        classRemove.classList.remove('open__swiper-slide')
    })
    elem.classList.add('open__swiper-slide')
    document.body.classList.toggle('body__background')
    document.querySelector('.gallery__inner').classList.toggle('gallery__inner-on')
    let innerChild = document.querySelector('.gallery__inner-img').querySelector('.gallery__swiper-slide')
    parent.querySelector('.gallery__inner-img').replaceChild(innerChild, elem)
  }