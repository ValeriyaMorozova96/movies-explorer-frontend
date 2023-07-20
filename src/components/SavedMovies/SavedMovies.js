import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = ({ loggedIn }) => {
   return (
      <>
      <Header loggedIn={loggedIn}/>
      <section className="saved-movies">
         <SearchForm />
         <MoviesCardList isAllMovies={false} />
      </section>
      <Footer />
      </>
   )
}

export default SavedMovies;