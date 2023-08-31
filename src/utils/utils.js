import { useState, useEffect } from 'react';

// изменение размера экрана
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWindowSize]);
    return windowSize;
}

// Ширина экрана
const WIDTH_BIG = 1200;
const WIDTH_MIDDLE = 910;
const WIDTH_SMALL = 768;
// Стартовое количество карточек на странице до нажатия кнопки "Еще"
const START_MOVIE_NUMBER_BIG = 16;
const START_MOVIE_NUMBER_MIDDLE_12 = 12;
const START_MOVIE_NUMBER_MIDDLE_8 = 8;
const START_MOVIE_NUMBER_SMALL = 5
// Добавить (кол-во) фильм
const ADD_4_MOVIES = 4;
const ADD_3_MOVIES = 3;
const ADD_2_MOVIES = 2;

export {
    WIDTH_BIG,
    WIDTH_MIDDLE,
    WIDTH_SMALL,
    START_MOVIE_NUMBER_BIG,
    START_MOVIE_NUMBER_MIDDLE_12,
    START_MOVIE_NUMBER_MIDDLE_8,
    START_MOVIE_NUMBER_SMALL,
    ADD_4_MOVIES,
    ADD_3_MOVIES,
    ADD_2_MOVIES
};