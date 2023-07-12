import { NavLink } from 'react-router-dom';
import './Header.css'
import HeaderLogo from '../../images/header-logo.svg' 
import Navigation from '../Navigation/Navigation';

const Header = () => {
   return (
      <header className='header'>
         <NavLink to='/'>
         <img className='header__logo' src={HeaderLogo} alt='Логотип' />
         </NavLink>
         <Navigation />
      </header>
   )
}

export default Header;