import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ isAllMovies }) => {
   return (
      <section className="cards">
         <div className="cards__container">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
         </div>
         <button className={isAllMovies ? 'cards__button' : 'cards__button_hidden'}>Ещё</button>
      </section>
   )
}

export default MoviesCardList;