import './FilterCheckbox.css';

const FilterCheckbox = ({ onCheckbox, checked }) => {
   return (
      <div className="checkbox">
         <input
            className="checkbox__input"
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={checked}
            onChange={onCheckbox}
         />
         <label className="checkbox__label" htmlFor="checkbox">Короткометражки</label>
      </div>
   );
}

export default FilterCheckbox;