import React from "react";
import Logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';
import './Register.css';
import useFormValidation from '../../validation/UseFormValidation'

const Register = ({ errorMessage, onRegister }) => {

    const { handleChange, resetForm, isValid, values, errors } = useFormValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!values.name || !values.email || !values.password) {
            return;
        }
        onRegister(values);
        resetForm()
    }

    return (
        <section className='register'>
            <Link className='register__link' to="/">
                <img className="register__logo" src={Logo} alt='Логотип'></img>
            </Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className="register__form" action="#" name="register-form" onSubmit={handleSubmit}>
                <fieldset className='register__form-fieldset'>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-name'>Имя</label>
                        <input
                            type="name"
                            id="register__form-input-name"
                            className="register__form-input"
                            placeholder='Введите имя'
                            name="name"
                            required
                            minLength="2"
                            maxLength="30"
                            value={values.name || ''}
                            onChange={handleChange} />
                        {errors.name && <span className="register__form-error">{errors.name}</span>}
                    </div>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-email'>E-mail</label>
                        <input
                            type="email"
                            id="register__form-input-email"
                            className="register__form-input"
                            placeholder='Введите email'
                            name="email"
                            required
                            minLength="5"
                            maxLength="30"
                            pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
                            value={values.email || ''}
                            onChange={handleChange} />
                        {errors.email && <span className="register__form-error">{errors.email}</span>}
                    </div>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-password'>Пароль</label>
                        <input
                            type="password"
                            id="register__form-input-password"
                            className="register__form-input"
                            placeholder='Введите пароль'
                            name="password"
                            required
                            minLength="6"
                            maxLength="30"
                            value={values.password || ''}
                            onChange={handleChange} />
                        {errors.password && <span className="register__form-error">{errors.password}</span>}
                    </div>
                </fieldset>
                <span className="register__form-error">{errorMessage}</span>
                <button className={`register__form-button ${!isValid ? 'register__form-button_disabled' : ''}`} disabled={!isValid}>Зарегестрироваться</button>
                <div className='register__form-question-container'>
                    <p className='register__form-question'>Уже зарегистрированы?</p>
                    <Link className="register__form-link" to="/signin">Войти</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;