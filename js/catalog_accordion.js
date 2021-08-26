document.addEventListener('DOMContentLoaded', () => {
    

    let accordionOpenElem
    let accordionOpenElemParent


    const addAccorionClasses = () => {
        accordionOpenElem.classList.toggle('accordion-open')
        accordionOpenElemParent.classList.toggle('accordion-open-parent')
    }

    const removeAccordionClasses = () => {
        document.querySelectorAll('.catalog__menu-description').forEach(item => item.classList.remove('accordion-open'))
        document.querySelectorAll('.catalog__menu-item').forEach(item => item.classList.remove('accordion-open-parent'))
    }

    const removeListClasses = () => {
        setTimeout(() => {
            document.querySelectorAll('.catalog__menu-item-block').forEach(item => item.classList.remove('.catalog__menu-item-block-on'))
        }, 300)
    }

    const addEmptyBlockClasses = () => {
        accordionOpenElemParent.querySelector('.catalog__menu-empty-block').classList.add('catalog__menu-empty-block-on')
        setTimeout(addAccorionClasses, 0)
    }

    document.querySelectorAll('.catalog__menu-description').forEach(item => {
        item.addEventListener('click', (event) => {

            accordionOpenElem = event.currentTarget
            accordionOpenElemParent = event.currentTarget.parentNode

            if (accordionOpenElem.classList.contains('accordion-open')) {
                if (accordionOpenElemParent.querySelector('.catalog__menu-item-block')) {
                    setTimeout(() => document.querySelector('.catalog__menu-item-block-on').classList.remove('catalog__menu-item-block-on'), 300)
                } else if (accordionOpenElemParent.querySelector('.catalog__menu-empty-block')) {
                    setTimeout(() => document.querySelector('.catalog__menu-empty-block-on').classList.remove('catalog__menu-empty-block-on'), 300)
                }
                accordionOpenElem.classList.remove('accordion-open')
                accordionOpenElemParent.classList.remove('accordion-open-parent')    
            } else {
                removeAccordionClasses()
                removeListClasses()
                if (accordionOpenElemParent.querySelector('.catalog__menu-item-block')) {
                    accordionOpenElemParent.querySelector('.catalog__menu-item-block').classList.add('catalog__menu-item-block-on')
                    setTimeout(addAccorionClasses, 0)
                } else if (accordionOpenElemParent.querySelector('.catalog__menu-empty-block')) {
                    addEmptyBlockClasses()
                } else {
                    let artistEmptyInner = document.createElement('div')
                    artistEmptyInner.classList.add('catalog__menu-empty-block')
                    artistEmptyInner.innerHTML = `
                    <span class="catalog__empty-block-img"></span>
                    <div class="catalog__empty-block-right">
                    <strong class="catalog__empty-block-strong">Здесь пока пусто</strong>
                    <p class="catalog__empty-block-text">А в галерее вы всегда можете найти что-то интересное для себя</p>
                    <a class="catalog__empty-block-link" href="#gallery">В галерею</a>
                    </div>
                    `
                    accordionOpenElemParent.append(artistEmptyInner)

                    addEmptyBlockClasses()

                }
            }
        })
    })
})