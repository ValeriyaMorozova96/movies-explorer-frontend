import React from "react";
import Logo from "../../images/header-logo.svg";
import { Link } from 'react-router-dom';
import './Login.css';
import useFormValidation from '../../validation/UseFormValidation'

const Login = ({ errorMessage, onLogin }) => {

    const { handleChange, resetForm, isValid, values, errors } = useFormValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
        onLogin(values);
        resetForm()
    }

    return (
        <section className='login'>
            <Link className="login__link" to="/">
                <img className="login__logo" src={Logo} alt='Логотип'></img>
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form className="login__form" action="#" name="login-form" onSubmit={handleSubmit}>
                <fieldset className='login__form-fieldset'>
                    <div className='login__form-container'>
                        <label className='login__form-label' htmlFor='login-form__input-email'>E-mail</label>
                        <input
                            type="email"
                            id="login__form-input-email"
                            className="login__form-input"
                            placeholder='Введите email'
                            name="email"
                            required
                            minLength="5"
                            maxLength="30"
                            value={values.email || ''}
                            pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
                            onChange={handleChange} />
                        {errors.email && <span className="login__form-error">{errors.email}</span>}
                    </div>
                    <div className='login__form-container'>
                        <label className='login__form-label' htmlFor='login-form__input-password'>Пароль</label>
                        <input
                            type="password"
                            id="login__form-input-password"
                            className="login__form-input"
                            placeholder='Введите пароль'
                            name="password"
                            required
                            minLength="6"
                            maxLength="30"
                            value={values.password || ''}
                            onChange={handleChange} />
                        {errors.password && <span className="login__form-error">{errors.password}</span>}
                    </div>
                </fieldset>
                <span className="login__form-error">{errorMessage}</span>
                <button className={`login__form-button ${!isValid ? 'login__form-button_disabled' : ''}`} type='submit' disabled={!isValid}>Войти</button>
                <div className='login__form-question-container'>
                    <p className='login__form-question'>Ещё не зарегистрированы?</p>
                    <Link className="login__form-link" to="/signup">Регистрация</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;