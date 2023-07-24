import { NavLink } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
   return (
      <section className="error-page">
         <h2 className="error-page__name">404</h2>
         <p className="error-page__description">Страница не найдена</p>
         <NavLink to="/" className="error-page__link">Назад</NavLink>
      </section>
   )
}

export default ErrorPage;