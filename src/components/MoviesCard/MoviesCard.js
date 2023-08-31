import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ movie, isAllMovies, onSaveMovie, onDeleteMovie, isSavedMovie }) => {
   const location = useLocation();
   const movieDuration = `${Math.floor(movie.duration / 60)}ч ${
      movie.duration % 60
    }м`;
   const saveMovie = () => {
      onSaveMovie(movie)
   }

   const deleteMovie = () => {
      onDeleteMovie(movie)
   }
   return (
      <div className="card">
         <a
            href={movie.trailerLink}
            className='card__trailer-link'
            target='_blank'
            rel='noreferrer'
         >
            {location.pathname === '/movies' && (
               <img src={`https://api.nomoreparties.co/${movie.image.url}`}
                  alt={movie.nameRU} className='card__movie-cover' />
            )}
            {location.pathname === '/saved-movies' && (
               <img src={movie.image}
                  alt={movie.nameRU} className='card__movie-cover' />
            )}
         </a>
         <div className="card__movie-description">
            <div className="card__name-container">
               <p className="card__movie-name">{movie.nameRU}</p>
               {isAllMovies ?
                  (isSavedMovie(movie) ?
                     <button className='card__button card__button_saved' onClick={deleteMovie} type="button" />
                     :
                     <button className='card__button' onClick={saveMovie} type='button' />)
                  :
                  <button className='card__button card__button_delete' onClick={deleteMovie} type='button' />}
            </div>
            <p className="card__movie-time">{movieDuration}</p>
         </div>
      </div>
   )
}

export default MoviesCard;