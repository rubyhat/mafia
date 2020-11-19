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

    eventIndexFilterGames();
    function eventIndexFilterGames() {
        const gamesWrapper = document.querySelector('.event-games'),
              allGamesBtn = document.querySelector('[data-filter = all-games]'),
              newGamesBtn = document.querySelector('[data-filter = new-games]');

        if (gamesWrapper && allGamesBtn && newGamesBtn) {
            const games = gamesWrapper.querySelectorAll('.event-games__item');
            newGamesBtn.addEventListener('click', () => {
                newGamesBtn.classList.add('filter-bar__btn_active');
                allGamesBtn.classList.remove('filter-bar__btn_active');
                games.forEach(game => {
                    if (game.getAttribute('data-age') === "old") {
                        game.classList.add('d-none')
                    }
                });
            });
            allGamesBtn.addEventListener('click', () => {
                allGamesBtn.classList.add('filter-bar__btn_active');
                newGamesBtn.classList.remove('filter-bar__btn_active');
                games.forEach(game => {
                    game.classList.remove('d-none');
                });
            });
        }
    }
}