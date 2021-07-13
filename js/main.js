document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header-bottom__nav-item').forEach(function(openList) {
    openList.addEventListener('click', function() {

      const elem = this

      if (elem.classList.contains('dropdown-list-active')) {
        this.classList.toggle('dropdown-list-opacity')
        setTimeout(function() {
          elem.classList.remove('dropdown-list-active')
        }, 3000)
      } else {
          document.querySelectorAll('.header-bottom__nav-item').forEach(function(classRemove) {
            classRemove.classList.remove('dropdown-list-opacity')
            classRemove.classList.remove('dropdown-list-active')
        })
        this.classList.add('dropdown-list-active')
        setTimeout(function() {
          elem.classList.add('dropdown-list-opacity')
        })
      }
    })
  })
})


