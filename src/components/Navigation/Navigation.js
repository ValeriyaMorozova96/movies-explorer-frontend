import './Navigation.css'
import { Routes, Route, Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <Routes>
         <div className="navigation">
            <Route path="/sign-up"
               element={<Link to="/sign-up" className="navigation__signup">Регистрация</Link>}
            />
            <Route path="/sign-in"
            element={<Link to="/signin">
               <button className="navigation__signin">
                  Войти
               </button>
            </Link>}
            />
         </div>
      </Routes>
   )
}

export default Navigation;