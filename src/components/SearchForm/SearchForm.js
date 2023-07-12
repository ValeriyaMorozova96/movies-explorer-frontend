import './SearchForm.css';
import FindIcon from '../../images/find-icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
   return (
      <section className="search">
         <form className="search__form">
            <input
               className="search__input"
               id="movie"
               name="movie"
               type="text"
               placeholder="Фильм"
               required
            />
            <button className="search__button">
               <img className="search__icon" src={FindIcon} alt="Иконка лупа" />
            </button>
         </form>
         <FilterCheckbox />
      </section>
   )
};

export default SearchForm;