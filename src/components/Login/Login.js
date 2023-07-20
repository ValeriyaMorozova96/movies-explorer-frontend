import React from 'react';
import Logo from "../../images/header-logo.svg";
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    return (
        <section className='login'>
            <Link className="login__link" to="/">
                <img className="login__logo" src={Logo} alt='Логотип'></img>
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form className="login__form" action="#" name="login-form" noValidate>
                <fieldset className='login__form-fieldset'>
                    <div className='login__form-container'>
                        <label className='login__form-label' htmlFor='login-form__input-email'>E-mail</label>
                        <input type="email" id="login__form-input-email" className="login__form-input" placeholder='Введите email' name="email" required minLength="5" maxLength="30" />
                    </div>
                    <div className='login__form-container'>
                        <label className='login__form-label' htmlFor='login-form__input-password'>Пароль</label>
                        <input type="password" id="login__form-input-password" className="login__form-input" placeholder='Введите пароль' name="password" required minLength="6" maxLength="30" />
                    </div>
                </fieldset>
                <span className="login__form-error login__form-input-{type-error}"></span>
                <button className='login__form-button' type='submit'>Войти</button>
                <div className='login__form-question-container'>
                    <p className='login__form-question'>Ещё не зарегистрированы?</p>
                    <Link className="login__form-link" to="/signup">Регистрация</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;