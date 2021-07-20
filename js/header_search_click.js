document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-top__search-btn').addEventListener('click', function() {
    searchClick()
  })

  document.querySelector('.header-top__search-x').addEventListener('click', function() {
    searchClick()
  })

  document.querySelector('.header-top__search-btn').addEventListener('keydown', function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault()
      searchClick()
    }
  })

})

function searchClick() {
  document.querySelector('.header-top__burger').classList.toggle('search-on')
  document.querySelector('.header-top__logo').classList.toggle('search-on')
  document.querySelector('.header-top__search-btn').classList.toggle('search-on')
  document.querySelector('.header-top__search').classList.toggle('search-on')
}
