document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-top__burger').addEventListener('click', function() {
    document.querySelector('#nav').classList.toggle('burger-on')
    document.querySelector('.header-top__burger').classList.toggle('burger-close')
  })

})

