
import './Portfolio.css';

const Portfolio = () => {
   return (
      <div className="portfolio">
         <h3 className="portfolio__title">Портфолио</h3>
         <ul className="portfolio__links">
            <li className="portfolio__link-container">
               <a className="portfolio__link" rel='noreferrer' href="https://valeriyamorozova96.github.io/how-to-learn/" target="_blank">
                  Статичный сайт
               </a>
               <span>↗</span>
            </li>
            <li className="portfolio__link-container">
               <a className="portfolio__link" rel='noreferrer' href="https://valeriyamorozova96.github.io/russian-travel/" target="_blank">
                  Адаптивный сайт
               </a>
               <span>↗</span>
            </li>
            <li className="portfolio__link-container">
               <a className="portfolio__link" rel='noreferrer' href="https://morozovavs.nomoreparties.sbs" target="_blank">
                  Одностраничное приложение
               </a>
               <span>↗</span>
            </li>
         </ul>
      </div>
   )
}

export default Portfolio;