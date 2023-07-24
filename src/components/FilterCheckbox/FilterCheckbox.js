import './FilterCheckbox.css';

const FilterCheckbox = () => {
   return (
      <div className="checkbox">
         <input
            className="checkbox__input"
            id="checkbox"
            type="checkbox"
         />
         <label className="checkbox__label" htmlFor="checkbox">Короткометражки</label>
      </div>
   );
}

export default FilterCheckbox;