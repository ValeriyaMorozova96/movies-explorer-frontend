import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

const Profile = ({ loggedIn }) => {

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <section className="profile">
                <h2 className='profile__title'>Привет, Валерия!</h2>
                <form className="profile__form" action="#" name="profile-form">
                    <fieldset className='profile__form-fieldset'>
                        <div className='profile__form-container'>
                            <label className='profile__form-label' htmlFor='profile__form-input-name'>Имя</label>
                            <input type="text" id="profile__form-input-name" className="profile__form-input" value="Валерия" name="name" required minLength="2" maxLength="30" />
                        </div>
                        <div className='profile__form-container'>
                            <label className='profile__form-label' htmlFor='profile-form__input-email'>E-mail</label>
                            <input type="email" id="profile__form-input-email" className="profile__form-input" value="potcha@yandex.ru" name="email" required />
                        </div>
                    </fieldset>
                    <button className='profile__form-button-change' type='submit'>Изменить</button>
                </form>
                <button className='profile__form-button-exit' type='button'>Выйти из акаунта</button>
            </section>
        </>
    );
}

export default Profile;