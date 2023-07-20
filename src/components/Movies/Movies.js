import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({ loggedIn }) => {
   return (
      <>
      <Header loggedIn={loggedIn}/>
      <section className="movies">
         <SearchForm />
         <MoviesCardList isAllMovies={true}/>
      </section>
      <Footer />
      </>
   )
}

export default Movies;