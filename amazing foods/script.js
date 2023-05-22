const menuEl = document.querySelector('.menu');

setInterval(() => {
    const activeIconEl = document.querySelector('.section-1-icons .change');

    if (!!activeIconEl.nextElementSibling) {
        activeIconEl.nextElementSibling.classList.add('change');
    } else {
        document.querySelector('.section-1-icons').firstElementChild.classList.add('change');
    }

    activeIconEl.classList.remove('change');
}, 4000);

const menuToggleHandler = ev => {
    if (ev.target === menuEl) {
        document.querySelector('.navbar').classList.toggle('change-toggle');
        menuEl.classList.toggle('change-toggle');
    }
}

menuEl.addEventListener("click", menuToggleHandler);