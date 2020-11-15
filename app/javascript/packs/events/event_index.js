'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {

    // Events - Index - show|hide new event form
    eventCreateNew();
    function eventCreateNew() {
        const filterWrap = document.querySelector('.filter-wrap')
        const createBtn = filterWrap.querySelector('.create-form__btn');

        if (createBtn) {
            createBtn.addEventListener('click', () => {
                const formWrap = filterWrap.querySelector('.event-form');

                formWrap.classList.toggle('event-form_active');
            });
        }
    }
}