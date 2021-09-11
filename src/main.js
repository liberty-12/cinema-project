const FILM_COUNT = 5;
const EXTRA_FILM_COUNT = 2;
const EXTRA_FILM_CONTAINER_COUNT = 2;

import {createProfileTemplate} from "./view/profile.js";
import {createMenuTemplate} from "./view/menu.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmContainerTemplate} from "./view/film-container.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createExtraFilmContainer} from "./view/extra-film.js";


const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('main');
// const footerElement = document.querySelector('footer');

render(headerElement, createProfileTemplate());

render(mainElement, createMenuTemplate());
render(mainElement, createSortTemplate());
render(mainElement, createFilmContainerTemplate());

const filmElement = mainElement.querySelector('.films');
const filmListElement = filmElement.querySelector('.films-list');
const filmContainerElement = filmListElement.querySelector('.films-list__container');

for (let i = 0; i < FILM_COUNT; i++) {
    render(filmContainerElement, createFilmCardTemplate());
}

render(filmListElement, createShowMoreButtonTemplate());

for (let i = 0; i < EXTRA_FILM_CONTAINER_COUNT; i++) {
    render(filmElement, createExtraFilmContainer());
}

const extraFilmListElements = filmElement.querySelectorAll('.films-list--extra');

for (let i = 0; i < extraFilmListElements.length; i++) {
    const extraFilmContainerElement = extraFilmListElements[i].querySelector('.films-list__container');
    for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
        render(extraFilmContainerElement, createFilmCardTemplate());
    }
}

