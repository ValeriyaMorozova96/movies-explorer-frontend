import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({
   movies,
   onDeleteMovie,
   isSavedMovie,
   onCheckbox,
   onSubmit,
   isLoadingOn,
   checked,
   notFoundMessage,
   savedMovies }) => {
   return (
         <main className="saved-movies">
            <SearchForm
               onSubmit={onSubmit}
               onCheckbox={onCheckbox}
               checked={checked}
            />
            {isLoadingOn ? (
               <Preloader />
            ) : (
               <MoviesCardList
                  movies={movies}
                  isAllMovies={false}
                  onDeleteMovie={onDeleteMovie}
                  isSavedMovie={isSavedMovie}
                  notFoundMessage={notFoundMessage}
                  savedMovies={savedMovies}
               />
            )}
         </main>
   )
}

export default SavedMovies;