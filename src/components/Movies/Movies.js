import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ loggedIn }) => {
   return (
      <>
      <main className="movies">
         <SearchForm />
         <MoviesCardList isAllMovies={true}/>
      </main>
      </>
   )
}

export default Movies;