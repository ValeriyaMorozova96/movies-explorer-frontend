import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import MovieCover from '../../images/film-cover.svg'

const MoviesCard = () => {
   const location = useLocation();
   return (
      <div className="card">
         <img className="card__movie-cover" src={MovieCover} alt="Обложка фильма" />
         <div className="card__movie-description">
            <div className="card__name-container">
               <p className="card__movie-name">33 слова о дизайне</p>
               {(location.pathname === '/movies') && <button className='card__button' type='button'></button>}
               {(location.pathname === '/saved-movies') && <button className='card__button_delete' type='button'></button>}
            </div>
            <p className="card__movie-time">1ч 42м</p>
         </div>
      </div>
   )
}

export default MoviesCard;