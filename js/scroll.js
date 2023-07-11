const animes = document.querySelectorAll('[data-anime]')

function animação() {
    const distanciaTop = window.scrollY + (window.innerHeight * 9) / 10;
    animes.forEach(el => {
        distanciaTop > el.offsetTop ? el.classList.add('animated') : false
    })
}

window.addEventListener('scroll', animação)