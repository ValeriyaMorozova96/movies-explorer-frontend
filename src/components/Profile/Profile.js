import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidation from '../../validation/UseFormValidation';

const Profile = ({ onSignOut, onProfileChange, profileMessage }) => {
    const { handleChange, setValues, values, errors, isValid, resetForm } = useFormValidation();
    const [isDisabledInput, setIsDisabledInput] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)
    const currentUser = useContext(CurrentUserContext);
    const DisabledButton = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

    useEffect(() => {
        setValues(currentUser)
    }, [currentUser, setValues])

    function handleSubmit(evt) {
        evt.preventDefault();
        onProfileChange({
            name: values.name,
            email: values.email
        })
        setTimeout(() => {
            setIsDisabledInput((state) => !state)
            setIsSuccess((state) => !state)
        }, 3000);
        resetForm()
    }

    function handleChangeProfileData() {
        setIsDisabledInput((state) => !state);
    }

    function handleChangesSave() {
        setIsSuccess((state) => !state);
    }

    return (
        <section className="profile">
            <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
            <form className="profile__form" action="#" name="profile-form" onSubmit={handleSubmit}>
                <fieldset className='profile__form-fieldset'>
                    <div className='profile__form-container'>
                        <label className='profile__form-label' htmlFor='profile__form-input-name'>Имя</label>
                        <input
                            type="text"
                            id="profile__form-input-name"
                            className="profile__form-input"
                            value={values.name ?? currentUser.name}
                            name="name"
                            required
                            disabled={isDisabledInput}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30" />
                    </div>
                    {errors.name && <span className="profile__form-error">{errors.name}</span>}
                    <div className='profile__form-container'>
                        <label className='profile__form-label' htmlFor='profile-form__input-email'>E-mail</label>
                        <input
                            type="email"
                            id="profile__form-input-email"
                            className="profile__form-input"
                            value={values.email ?? currentUser.email}
                            name="email"
                            disabled={isDisabledInput}
                            onChange={handleChange}
                            pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
                            required />
                    </div>
                    {errors.email && <span className="profile__form-error">{errors.email}</span>}
                </fieldset>
                {isSuccess && <span className='profile__form-message'>{profileMessage}</span>}
                {!isDisabledInput ? (
                    <button
                        className={`profile__form-button-save ${isValid && !DisabledButton ? '' : 'profile__form-button-save_disabled'
                            }`}
                        type='submit'
                        onClick={handleChangesSave}
                        disabled={DisabledButton}
                    >
                        Сохранить
                    </button>
                ) : (
                    <>
                        <button
                            className='profile__form-button-change'
                            type='button'
                            onClick={handleChangeProfileData}
                        >
                            Редактировать
                        </button>
                        <button
                            className='profile__form-button-exit'
                            type='button'
                            onClick={onSignOut}
                        >
                            Выйти из аккаунта
                        </button>
                    </>
                )}
            </form>

        </section>
    );
}

export default Profile;

