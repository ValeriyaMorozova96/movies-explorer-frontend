import React, { useState } from 'react';
import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';
import PopupNavigation from '../PopupNavigation/PopupNavigation';

const Navigation = ({ loggedIn }) => {
   const [isPopupNavigation, setIsPopupNavigation] = useState(false);

   const openPopup = () => {
      setIsPopupNavigation(true);
   };

   const closePopup = () => {
      setIsPopupNavigation(false)
   }

   return (
      <>
         {loggedIn ? (
            <>
               <div className='navigation navigation_movies'>
                  <nav className='navigation__links'>
                     <NavLink to='/movies' className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                        Фильмы
                     </NavLink>
                     <NavLink to='/saved-movies' className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                        Сохранённые фильмы
                     </NavLink>
                  </nav>
                  <Link to='/profile'>
                     <button className='navigation__button'></button>
                  </Link>
                  <button className='navigation__button-burger' type='button' onClick={openPopup} />
               </div>
            </>
         ) : (
            <div className="navigation">
               <NavLink to="/signup" className="navigation__signup">Регистрация</NavLink>
               <NavLink to="/signin">
                  <button className="navigation__signin">
                     Войти
                  </button>
               </NavLink>
            </div>
         )
         }
         <PopupNavigation isOpen={isPopupNavigation} onClose={closePopup} />
      </>
   )
}

export default Navigation;