import './SearchForm.css';
import FindIcon from '../../images/find-icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React, { useState, useEffect } from 'react';

const SearchForm = ({ onSubmit, onCheckbox, checked, searchByKeyword }) => {
   const [errorMessage, setErrorMessage] = useState('');
   const [searchData, setSearchData] = useState('');
   const [isFormValid, setIsFormValid] = useState(false);

   useEffect(() => {
      setSearchData(searchByKeyword)
   }, [searchByKeyword])

   const handleSearchSubmit = (evt) => {
      evt.preventDefault();
      if (searchData) {
         onSubmit(searchData);
      } else {
         return setErrorMessage('Необходимо ввести ключевое слово')
      }
   };

   const handleChange = (evt) => {
      setSearchData(evt.target.value);
      setIsFormValid(evt.target.closest('form').checkValidity());
   };

   return (
      <section className="search">
         <form className="search__form" noValidate onSubmit={handleSearchSubmit}>
            <input
               className="search__input"
               id="movie"
               name="movie"
               type="text"
               placeholder="Фильм"
               onChange={handleChange}
               value={searchData || ''}
               required
            />
            <button className="search__button">
               <img className="search__icon" src={FindIcon} alt="Иконка лупа" />
            </button>
         </form>
         <FilterCheckbox
            onCheckbox={onCheckbox}
            checked={checked} />
            <span className='search__form-error'>{!isFormValid && errorMessage}</span>
      </section>
   )
};

export default SearchForm;