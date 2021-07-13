document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header-bottom__nav-item').forEach(function(openList) {
    openList.addEventListener('click', function() {
      if (this.classList.contains('dropdown-list-active')) {
        this.classList.add('dropdown-list-opacity')
        setTimeout(this.classList.remove('dropdown-list-active'), 5000)
        setTimeout(this.classList.remove('dropdown-list-opacity'), 5000)
      } else {
          document.querySelectorAll('.header-bottom__nav-item').forEach(function(classRemove) {
            classRemove.classList.remove('dropdown-list-opacity')
            classRemove.classList.remove('dropdown-list-active')
        })
        this.classList.add('dropdown-list-active')
      }
    })
  })
})


