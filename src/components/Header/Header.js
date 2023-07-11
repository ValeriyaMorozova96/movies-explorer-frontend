import './Header.css'
import HeaderLogo from '../../images/header-logo.svg' 
import Navigation from '../Navigation/Navigation';

const Header = () => {
   return (
      <header className="header">
         <img className="header__logo" src={HeaderLogo} alt="Логотип" />
         <Navigation />
      </header>
   )
}

export default Header;