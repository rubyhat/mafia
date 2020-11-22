'use strict';
document.addEventListener('turbolinks:load', ready);

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

    // Events - Index - show|hide users in event
    eventShowUsersInEvent();
    function eventShowUsersInEvent() {
        const eventWrapper = document.querySelector('.event-games');

        if (eventWrapper) {
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

    // Events - Index - filter all|new games
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

    // Events - user number count
    eventsUserNumInGame();
    function eventsUserNumInGame() {
        const gamesWrapper = document.querySelector('.event-games');

        if (gamesWrapper) {
            const gameItems = gamesWrapper.querySelectorAll('.event-games__item');

            gameItems.forEach(item => {
                const userNums = item.querySelectorAll('.event-games__user-num');

                userNums.forEach((num, index) => {
                    console.log(num.innerHTML)
                    num.innerHTML = '#' + (index + 1);
                });
            });
        }
    }
}