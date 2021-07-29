document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header-bottom__nav-item').forEach(function(openList) {
    openList.addEventListener('click', function(event) {
      open(event.currentTarget)
    })
    openList.addEventListener('keydown', function (event) {
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault()
        open(event.currentTarget)
      }
    })
  })
})

function open(elem) {

  if (elem.classList.contains('dropdown-list-active')) {
    elem.classList.toggle('dropdown-list-opacity')
    setTimeout(function() {
      elem.classList.remove('dropdown-list-active')
    }, 300)
  } else {
      document.querySelectorAll('.header-bottom__nav-item').forEach(function(classRemove) {
        classRemove.classList.remove('dropdown-list-opacity')
        classRemove.classList.remove('dropdown-list-active')
    })
    elem.classList.add('dropdown-list-active')
    setTimeout(function() {
      elem.classList.add('dropdown-list-opacity')
    })
  }
}
