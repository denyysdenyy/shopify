const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__btn')

menuBtn.addEventListener ('click', () => {
    menu.classList.toggle ('active');
    menuBtn.classList.toggle ('active');
})