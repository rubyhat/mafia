'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {

    // Events - Index - show|hide new event form
    eventCreateNew();
    function eventCreateNew() {
        const createBtn = document.querySelector('.create-form__btn');

        if (createBtn) {
            createBtn.addEventListener('click', () => {
                const formWrap = document.querySelector('.event-games__form');
                formWrap.classList.toggle('event-games__form_active');
            });
        }
    }
}