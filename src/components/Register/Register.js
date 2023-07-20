import React from 'react';
import Logo from '../../images/header-logo.svg' 
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    return (
        <section className='register'>
            <Link className='register__link' to="/">
                <img className="register__logo" src={Logo} alt='Логотип'></img>
            </Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className="register__form" action="#" name="register-form" noValidate>
                <fieldset className='register__form-fieldset'>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-name'>Имя</label>
                        <input type="email" id="register__form-input-name" className="register__form-input" placeholder='Введите имя' name="name" required minLength="2" maxLength="30" />
                    </div>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-email'>E-mail</label>
                        <input type="email" id="register__form-input-email" className="register__form-input" placeholder='Введите email' name="email" required minLength="5" maxLength="30" />
                    </div>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-password'>Пароль</label>
                        <input type="password" id="register__form-input-password" className="register__form-input" placeholder='Введите пароль' name="password" required minLength="6" maxLength="30" />
                    </div>
                </fieldset>
                <span className="register__form-error register__form-input-{type-error}"></span>
                <button className='register__form-button' type='submit'>Зарегестрироваться</button>
                <div className='register__form-question-container'>
                    <p className='register__form-question'>Уже зарегистрированы?</p>
                    <Link className="register__form-link" to="/signin">Войти</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;