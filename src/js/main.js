import sliders from './modules/sliders';
import showMoreCards from './modules/showMoreCards';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    sliders('.main__slider__nav__item1', '.main__slider__item1', '.main__slider__item2', '.main__slider__item3');
    sliders('.main__slider__nav__item2', '.main__slider__item1', '.main__slider__item2', '.main__slider__item3');
    sliders('.main__slider__nav__item3', '.main__slider__item1', '.main__slider__item2', '.main__slider__item3');
    showMoreCards('.loadMore', '#cards .cards__wrapper');
    modals();
});