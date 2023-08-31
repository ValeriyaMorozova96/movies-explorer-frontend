import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = ({
   onSubmit,
   onCheckbox,
   checked,
   searchByKeyword,
   isLoadingOn,
   movies,
   notFoundMessage,
   serverErrorMessage,
   isSavedMovie,
   onDeleteMovie,
   onSaveMovie,
   savedMovies,
}) => {
   return (
      <>
         <main className="movies">
            <SearchForm
               onSubmit={onSubmit}
               onCheckbox={onCheckbox}
               checked={checked}
               searchByKeyword={searchByKeyword}
            />
            {isLoadingOn ? (
               <Preloader />
            ) : (
               <MoviesCardList
                  isAllMovies={true}
                  movies={movies}
                  notFoundMessage={notFoundMessage}
                  serverErrorMessage={serverErrorMessage}
                  isSavedMovie={isSavedMovie}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                  savedMovies={savedMovies}
               />
            )}
         </main>
      </>
   )
}

export default Movies;