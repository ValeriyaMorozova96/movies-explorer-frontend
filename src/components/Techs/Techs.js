import './Techs.css';

const Techs = () => {
   return (
      <section id='techs' className="techs">
         <h2 className="techs__title">Технологии</h2>
         <div className="techs__container">
            <h3 className="techs__title-number">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
               <li className="techs__box">HTML</li>
               <li className="techs__box">CSS</li>
               <li className="techs__box">JS</li>
               <li className="techs__box">React</li>
               <li className="techs__box">Git</li>
               <li className="techs__box">Express.js</li>
               <li className="techs__box">mongoDB</li>
            </ul>
         </div>
      </section>
   )
}

export default Techs;