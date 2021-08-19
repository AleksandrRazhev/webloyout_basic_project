document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__menu-description').forEach(function(accordionClick) {
        accordionClick.addEventListener('click', function(event) {

            const accordionOpenElem = event.currentTarget
            const accordionOpenElemParent = event.currentTarget.parentNode

            if (accordionOpenElem.classList.contains('accordion-open')) {
                if (accordionOpenElemParent.querySelector('.catalog__menu-item-block')) {
                    setTimeout(function() {
                        document.querySelector('.catalog__menu-item-block-on').classList.remove('catalog__menu-item-block-on')
                    }, 300)
                } else if (accordionOpenElemParent.querySelector('.catalog__menu-empty-block')) {
                    setTimeout(function() {
                        document.querySelector('.catalog__menu-empty-block-on').classList.remove('catalog__menu-empty-block-on')
                    }, 300)
                }
                accordionOpenElem.classList.remove('accordion-open')
                accordionOpenElemParent.classList.remove('accordion-open-parent')    
            } else {
                removeAccordionClasses()
                removeListClasses()
                if (accordionOpenElemParent.querySelector('.catalog__menu-item-block')) {
                    //accordionOpenElemParent.querySelector('.catalog__menu-item-block').classList.add('catalog__menu-item-block-on')
                    //setTimeout(addAccorionClasses, 0, accordionOpenElem, accordionOpenElemParent)
                    let blockOn = () => {
                        console.log('blockOn')
                        accordionOpenElemParent.querySelector('.catalog__menu-item-block').classList.add('catalog__menu-item-block-on')
                    }
                    blockOn()
                    let startAddAccorionClasses = () => {
                        console.log('accordionClassesFunction')
                        addAccorionClasses(accordionOpenElem, accordionOpenElemParent)
                    }
                    startAddAccorionClasses()
                } else if (accordionOpenElemParent.querySelector('.catalog__menu-empty-block')) {
                    addEmptyBlockClasses(accordionOpenElem, accordionOpenElemParent)
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

                    addEmptyBlockClasses(accordionOpenElem, accordionOpenElemParent)
                }
            }
        })
    })
})

function addAccorionClasses(accordionOpenElem, accordionOpenElemParent) {
    accordionOpenElem.classList.toggle('accordion-open')
    accordionOpenElemParent.classList.toggle('accordion-open-parent')
}

function removeAccordionClasses() {
    document.querySelectorAll('.catalog__menu-description').forEach(function(classRemove1) {
        classRemove1.classList.remove('accordion-open')
    })
    document.querySelectorAll('.catalog__menu-item').forEach(function(classRemove2) {
        classRemove2.classList.remove('accordion-open-parent')
    })
}

function removeEmptyBlockClasses() {
    setTimeout(function() {
        document.querySelectorAll('.catalog__menu-empty-block-on').forEach(function(classRemove3) {
            classRemove3.classList.remove('.catalog__menu-empty-block-on')
        })
    }, 300)
}

function removeListClasses() {
    setTimeout(function() {
        document.querySelectorAll('.catalog__menu-item-block').forEach(function(classRemove3) {
            classRemove3.classList.remove('.catalog__menu-item-block-on')
        })
    }, 300)
}

function addEmptyBlockClasses(accordionOpenElem, accordionOpenElemParent) {
    accordionOpenElemParent.querySelector('.catalog__menu-empty-block').classList.add('catalog__menu-empty-block-on')
    setTimeout(addAccorionClasses, 0, accordionOpenElem, accordionOpenElemParent)
}