document.addEventListener('DOMContentLoaded', () => {

  const buttonClicked = document.querySelectorAll('.header-bottom__btn');
  const navItem = document.querySelectorAll('.header-bottom__nav-item');
  const dropdown = document.querySelectorAll('.dropdown-list');

  const removeClasses = (elem) => {
    navItem.forEach((item) => {
      item.classList.remove('dropdown-list-opacity');
    })
    
    setTimeout(() => {
        navItem.forEach((item) => {
          if (elem != item) {
            item.classList.remove('dropdown-list-active');
          }
        })
      }, 300)
  }

  const addClasses = (elem) => {
    elem.classList.add('dropdown-list-active');
    setTimeout(() => {
      elem.classList.add('dropdown-list-opacity');
    })
  }

  const open = (elem) => {
    if (elem.classList.contains('dropdown-list-active')) {
      elem.classList.toggle('dropdown-list-opacity');
      setTimeout(() => {
        elem.classList.remove('dropdown-list-active');
      }, 300);
    } else {
      removeClasses(elem);
      addClasses(elem);
    }
  }

  const clickButton = () => {
    buttonClicked.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        open(event.currentTarget.parentElement);
      })
      item.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
          event.preventDefault();
          open(event.currentTarget.parentElement);
        }
      })
    })
  }

  const clickDropdown = () => {
    dropdown.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
      })
    })
  }

  const clickOutside = () => {
    document.querySelector('.back-hero-img').addEventListener('click', (event) => {
        removeClasses()
    })
  }
  
  clickButton();
  clickDropdown();
  clickOutside();
})

