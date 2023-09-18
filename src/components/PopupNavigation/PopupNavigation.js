import './PopupNavigation.css';
import { NavLink, Link } from 'react-router-dom';

const PopupNavigation = ({ isOpen, onClose }) => {
    const popupIsOpen = isOpen ? 'popup_opened' : '';
    return (
        <div className={`popup ${popupIsOpen}`}>
            <div className='popup__container'>
                <button type='button' className='popup__close-button' onClick={onClose} />
                <ul className='popup__menu' onClick={onClose}>
                    <li className='popup__menu-item'>
                        <NavLink to='/' className={({ isActive }) => `popup__link ${isActive ? "popup__link_active" : ""}`}>
                            Главная
                        </NavLink>
                    </li>
                    <li className='popup__menu-item'>
                        <NavLink to='/movies' className={({ isActive }) => `popup__link ${isActive ? "popup__link_active" : ""}`}>
                            Фильмы
                        </NavLink>
                    </li>
                    <li className='popup__menu-item'>
                        <NavLink to='/saved-movies' className={({ isActive }) => `popup__link ${isActive ? "popup__link_active" : ""}`}>
                            Сохранённые фильмы
                        </NavLink>
                    </li >
                </ul>
                <Link to='/profile'>
                    <button className='popup__profile-button' onClick={onClose}></button>
                </Link>
            </div>
        </div>
    )
};

export default PopupNavigation;