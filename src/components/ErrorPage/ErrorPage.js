import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {

   const navigate = useNavigate();
   const goBack = () => {
      navigate(-1);
   }
   return (
      <section className="error-page">
         <h2 className="error-page__name">404</h2>
         <p className="error-page__description">Страница не найдена</p>
         <button className="error-page__link" type="button" onClick={goBack}>Назад</button>
      </section>
   )
}

export default ErrorPage;