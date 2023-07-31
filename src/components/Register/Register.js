import React, { useState } from "react";
import Logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';
import './Register.css';

const Register = ({ errorMessage, onRegister }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister({name, email, password});
    }

    return (
        <section className='register'>
            <Link className='register__link' to="/">
                <img className="register__logo" src={Logo} alt='Логотип'></img>
            </Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className="register__form" action="#" name="register-form" noValidate onSubmit={handleSubmit}>
                <fieldset className='register__form-fieldset'>
                    <div className='register__form-container'>
                        <label className='register__form-label' htmlFor='register__form-input-name'>Имя</label>
                        <input
                            type="email"
                            id="register__form-input-name"
                            className="register__form-input"
                            placeholder='Введите имя'
                            name="name"
                            required
                            minLength="2"
                            maxLength="30"
                            value={name || ""}
                            onChange={handleName} />
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
                            value={email || ""}
                            onChange={handleEmail} />
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
                            value={password || ""}
                            onChange={handlePassword} />
                    </div>
                </fieldset>
                <span className="register__form-error register__form-input-{type-error}">{errorMessage}</span>
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