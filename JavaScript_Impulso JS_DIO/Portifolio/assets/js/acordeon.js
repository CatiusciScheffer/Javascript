const acordeonTriggers = document.querySelectorAll('.acordeon .btn_acordeon')

acordeonTriggers.forEach((btn_acordeon) => {
    btn_acordeon.addEventListener('click', (e) => {
        const acordeon = btn_acordeon.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})
