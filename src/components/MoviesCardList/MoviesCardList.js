import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useWindowSize } from "../../utils/utils";
import {
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
} from '../../utils/utils'

const MoviesCardList = ({ movies, notFoundMessage, serverErrorMessage, isAllMovies, onDeleteMovie, onSaveMovie, isSavedMovie }) => {

  const windowSize = useWindowSize();
  const [startMovies, setStartMovies] = useState({});
  const [addMovies, setAddMovies] = useState({});

  useEffect(() => {
    if (windowSize >= WIDTH_BIG) {
      setStartMovies(START_MOVIE_NUMBER_BIG);
      setAddMovies(ADD_4_MOVIES);
    }
    if (windowSize < WIDTH_BIG && windowSize >= WIDTH_MIDDLE) {
      setStartMovies(START_MOVIE_NUMBER_MIDDLE_12);
      setAddMovies(ADD_3_MOVIES);
    }
    if (windowSize < WIDTH_MIDDLE && windowSize >= WIDTH_SMALL) {
      setStartMovies(START_MOVIE_NUMBER_MIDDLE_8);
      setAddMovies(ADD_2_MOVIES);
    }
    if (windowSize < WIDTH_SMALL) {
      setStartMovies(START_MOVIE_NUMBER_SMALL);
      setAddMovies(ADD_2_MOVIES);
    }
  }, [windowSize])

  function handleAddMovieButton() {
    setStartMovies(startMovies + addMovies);
  }

  return (
    <section className="cards">
      {isAllMovies ? (
        <>
          <p className={notFoundMessage
            ? 'cards__error'
            : 'cards__error_none'}>Фильмы по указанному запросу не найдены.
          </p>
          <p className={serverErrorMessage
            ? 'cards__error'
            : 'cards__error_none'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
          <div className="cards__container">
            {movies.slice(0, startMovies).map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  onDeleteMovie={onDeleteMovie}
                  onSaveMovie={onSaveMovie}
                  isSavedMovie={isSavedMovie}
                  isAllMovies={isAllMovies}
                />
              );
            })}
          </div>
          <button
            type='button'
            onClick={handleAddMovieButton}
            className={
             startMovies >= movies.length
                ? 'cards__button_hidden'
                : 'cards__button'
            }>
            Ещё
          </button>
        </>
      ) : (
        <>
          <p className={notFoundMessage
            ? 'cards__error'
            : 'cards__error_none'}>Фильмы по указанному запросу не найдены.
          </p>
          <p className={serverErrorMessage
            ? 'cards__error'
            : 'cards__error_none'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
          <div className='cards__container'>
            {movies.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.movieId}
                  onDeleteMovie={onDeleteMovie}
                  isSavedMovie={isSavedMovie}
                  isAllMovies={isAllMovies}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  )
}

export default MoviesCardList;