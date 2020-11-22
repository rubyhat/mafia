'use strict';
document.addEventListener('turbolinks:load', ready);

function ready() {
    headerBurgerMenu();
    function headerBurgerMenu() {
        const burgerBtn = document.querySelector('.main-header__burger-icon');

        if (burgerBtn) {
            burgerBtn.addEventListener('click', () => {
               const menuWrap = document.querySelector('.main-header__links-wrap');
               menuWrap.classList.toggle('main-header__links-wrap_active');
            });
        }
    }

}