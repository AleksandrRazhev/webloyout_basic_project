document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.publications__form-categories-item')
    const inputs = document.querySelectorAll('.publications__form-categories-checkbox')
    const categoriesListBtn = document.querySelector('.publications__form-categories-article')
    const categoriesList = document.querySelector('.publications__form-categories-block')
    const categoriesButton = document.querySelector('.publications__form-categories-article')
    
    const showCloseBtn = () => {
        inputs.forEach(item => {
            if (item.checked) {
                item.parentElement.parentElement.classList.add('publications__form-categories-item-shown')
            } else {
                item.parentElement.parentElement.classList.remove('publications__form-categories-item-shown')
            }
        })
    }
    
    const listenClickCategorie = () => {
        categories.forEach(item => {
            item.addEventListener('click', event => {
                showCloseBtn()
            })
        })
    }

    const closeCategorieShown = elem => {
        elem.preventDefault()
        elem.currentTarget.parentElement.querySelector('.publications__form-categories-checkbox').checked = false
    }
        
    const listenClickCategorieShown = () => {
        const categorieShown = document.querySelectorAll('.publications__form-categories-close-btn')
        categorieShown.forEach(item => item.addEventListener('click', closeCategorieShown))
    }

    const closeList = (event) => {
        event.preventDefault()
        categoriesList.classList.toggle('publications__form-categories-block-close')
        categoriesButton.classList.toggle('publications__form-categories-article-close')
    }

    const listenClosedList = () => categoriesListBtn.addEventListener('click', closeList)


    showCloseBtn()
    listenClickCategorie()
    listenClickCategorieShown()
    listenClosedList()
})