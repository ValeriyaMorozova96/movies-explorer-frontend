import './MoviesCard.css';
import MovieCover from '../../images/film-cover.svg'

const MoviesCard = () => {
   return (
      <div className="card">
         <img className="card__movie-cover" src={MovieCover} alt="Обложка фильма" />
         <div className="card__movie-description">
            <p className="card__movie-name">33 слова о дизайне</p>
            <p className="card__movie-time">1ч 42м</p>
         </div>
         <button className="card__button" />
         <button className="card__button_saved card__button_delete" />
      </div>
   )
}

export default MoviesCard;