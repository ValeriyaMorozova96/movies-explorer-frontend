import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = ({ loggedIn }) => {
   return (
      <>
      <Header loggedIn={loggedIn}/>
      <main className="saved-movies">
         <SearchForm />
         <MoviesCardList isAllMovies={false} />
      </main>
      <Footer />
      </>
   )
}

export default SavedMovies;