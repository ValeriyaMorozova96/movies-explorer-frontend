import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
   return (
      <>
      <main className="saved-movies">
         <SearchForm />
         <MoviesCardList isAllMovies={false} />
      </main>
      </>
   )
}

export default SavedMovies;