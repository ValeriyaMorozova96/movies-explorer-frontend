import './Navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className="navigation">
         <NavLink to="/sign-up" className="navigation__signup">Регистрация</NavLink>
         <NavLink to="/signin">
            <button className="navigation__signin">
               Войти
            </button>
         </NavLink>
      </div>
   )
}

export default Navigation;