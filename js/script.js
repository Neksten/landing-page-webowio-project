const body = document.body
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');

headerBurger.addEventListener('click', function(e) {
    let windowScrollTop = window.pageYOffset;
    headerMenu.classList.toggle('_active')
    header.classList.toggle('_active')
    headerLogo.classList.toggle('_active')
    if (headerLogoActive() || windowScrollTop < 80) {
        headerLogo.style.top = '0'
    } else {
        headerLogo.style.top = '-100vh'
    }
})


function headerLogoActive() {
    return (headerLogo.classList.contains("_active"));
}
// function htmlScrollY() {
//     window.addEventListener('scroll', function (event) {
//         return this.scrollY;
//     })
// }

window.addEventListener('scroll', function (event) {
    if (this.scrollY > 80 && !headerLogo.classList.contains('_active')) {
        headerLogo.style.top = '-100vh'
    }
    if (this.scrollY < 80) {
        headerLogo.style.top = '0'
    }
})