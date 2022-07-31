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

window.addEventListener('scroll', function (event) {
    if (this.scrollY > 80 && !headerLogo.classList.contains('_active')) {
        headerLogo.style.top = '-100vh'
    }
    if (this.scrollY < 80) {
        headerLogo.style.top = '0'
    }
})


const animItems = document.querySelectorAll('._anim-items') // получаю все элементы с классом
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) { 
            const animItem = animItems[index]; // записываю элемент массива
            const animItemHeight = animItem.offsetHeight; // высота элемента
            const animItemOffset = offset(animItem).top; // позиция объекта
            const animStart = 4; // коэффициент момента старта анимации относительно объекта типо 1/4

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) { // если объект высота объекта выше высоты окна браузера
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) { // чтобы не анимировался повторно
                    animItem.classList.remove('_active');
                }
            }
        } 
    }
    function offset(el) { // кроссбраузерное нахождение положения объекта на странице
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}    
    }  
    setTimeout(() => { // задержка
        animOnScroll();
    }, 300);
}



