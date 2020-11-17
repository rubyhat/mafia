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
                if (formWrap) {
                    formWrap.classList.toggle('event-games__form_active');
                }
            });
        }
    }

    eventShowUsersInEvent();
    function eventShowUsersInEvent() {
        const eventWrapper = document.querySelector('.event-games');
        function eventShowUpdateWrapper() {
            const gameWrapper = eventWrapper.querySelectorAll('.event-games__item');
            const paginationLinks = eventWrapper.querySelectorAll('.event-games__pagination-link');

            paginationLinks.forEach(link => {
                link.addEventListener('click', () => {
                    console.log('link click')
                    const gameWrapper = eventWrapper.querySelectorAll('.event-games__item');
                });
            });
        }

        if (eventWrapper) {
            eventShowUpdateWrapper();
            const dropDownButtons = eventWrapper.querySelectorAll('.event-games__icon_drop');

            if (dropDownButtons) {
                dropDownButtons.forEach(button => {
                   button.addEventListener('click', () => {
                       const buttonParent = button.closest('.event-games__item');
                       buttonParent.classList.toggle('event-games__item_hide');
                   });
                });
            }
        }
    }
}