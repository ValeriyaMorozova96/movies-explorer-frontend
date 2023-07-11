import './AboutMe.css';
import MyPhoto from '../../images/my-photo.jpeg';

const AboutMe = () => {
   return (
      <section id="student" className="about-me">
         <h2 className="about-me__title">Студент</h2>
         <div className="about-me__container">
            <div className="about-me__info">
               <h3 className="about-me__name">Валерия</h3>
               <h4 className="about-me__job">Фронтенд-разработчик, 27 лет</h4>
               <p className="about-me__description"> Я живу в Москве. Люблю слушать музыку, участвовать в викторинах, занимаюсь в спортзале. 
               Училась на логиста, но по профессии так и не стала работать. Работала на телевидении, но решила попробовать себя в програмировании. Мне понравилось и вот я здесь.
               </p>
               <a className="about-me__link" href='https://github.com/ValeriyaMorozova96' target="_blank" rel="noreferrer">Github</a>
            </div>
            <img className="about-me__photo" src={MyPhoto} alt="Фотография" />
         </div>
      </section>
   )
}

export default AboutMe;