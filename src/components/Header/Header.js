import { NavLink } from 'react-router-dom';
import './Header.css'
import HeaderLogo from '../../images/header-logo.svg' 
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
   const headerColor = (`header ${loggedIn ? 'header_white' : 'header'}`);
   return (
      <header className={headerColor}>
         <NavLink to='/'>
         <img className='header__logo' src={HeaderLogo} alt='Логотип' />
         </NavLink>
         <Navigation loggedIn={loggedIn}/>
      </header>
   )
}

export default Header;