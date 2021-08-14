document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.flag').forEach(function(flagClick) {
        flagClick.addEventListener('click', function(event) {
            flagClickElem = event.currentTarget
            removeFlagsClasses()
            flagClickElem.classList.add('flag-on')
        })
    })
})

function removeFlagsClasses() {
    document.querySelectorAll('.flag').forEach(function(classRemove) {
        classRemove.classList.remove('flag-on')
    })
}