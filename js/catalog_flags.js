document.addEventListener('DOMContentLoaded', function() {
    
    const flags = document.querySelectorAll('.flag')
    const flagButtons = document.querySelectorAll('.flag')
    let nameState
    
    const removeClassFlag = elem => elem.classList.remove('flag-on')
    const addClassesFlags = elem => elem.classList.add('flag-on')
    const removeFlagsClasses = () => flagButtons.forEach(item => removeClassFlag(item))
    const stateBlocks = document.querySelectorAll('.catalog__state')
    const removeBlockClass = elem => elem.classList.remove('catalog__state-on', 'catalog__state-fade-on')
    const removeBlocksClasses = () => stateBlocks.forEach(item => removeBlockClass(item))
    const getNameState = (elem) => nameState = elem.dataset.catalogStateBtn
    const addBlockClass = () => document.querySelector(`[data-catalog-state-block = "${nameState}"]`).classList.add('catalog__state-on', 'catalog__state-fade-on')

    flags.forEach(function(elem) {
        elem.addEventListener('click', function(event) {
            removeFlagsClasses()
            addClassesFlags(event.currentTarget)
            removeBlocksClasses()
            getNameState(event.currentTarget)
            addBlockClass()
        })
    })

})