import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import apiMovies from "../../utils/ApiMovies";
import apiMain from '../../utils/ApiMain'
import * as apiAuth from '../../utils/ApiAuth';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMainPage = pathname === "/";
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      apiAuth
        .checkToken(token)
        .then((res) => {
          if (res) {
            apiMain.setToken(token);
            setIsLoggedIn(true);
            setCurrentUser()
            setIsTokenChecked(true);
          }
        })
        .catch(err => {
          setIsLoggedIn(false);
          if (err === 'Ошибка: 401') {
            setErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
          } else if (err === 'Ошибка: 403') {
            setErrorMessage('При авторизации произошла ошибка. Переданный токен некорректен');
          }
        })
    }
  }, [loggedIn]);

  function handleRegisterSubmit(name, email, password) {
    apiAuth
      .register(name, email, password)
      .then(() => {
        navigate('/signin');
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с таким email уже существует')
        } else {
          setErrorMessage('При регистрации пользователя произошла ошибка');
        }
      })
      .finally(() => {
        setTimeout(() => setErrorMessage(''), 3000);
      });
  }

  function handleLoginSubmit(email, password) {
    apiAuth
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        apiMain.setToken(res.token);
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch(err => {
        if (err === "Ошибка: 401") {
          setErrorMessage('Вы ввели неправильный логин или пароль')
        } else {
          setErrorMessage('Что-то пошло не так...');
        }
        setIsLoggedIn(false);
      })
      .finally(() => {
        setTimeout(() => setErrorMessage(''), 3000);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    apiMain.setToken(null);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {pathname === "/signin" ||
          pathname === "/signup" ? (
          ""
        ) : (
          <Header loggedIn={loggedIn} isMainPage={isMainPage} />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies"
            element={<ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              isTokenChecked={isTokenChecked}
            />}
          />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              isTokenChecked={isTokenChecked}
            />}
          />
          <Route path="/profile"
            element={<ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onSignOut={handleSignOut}
              isTokenChecked={isTokenChecked}
            />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Register onRegister={handleRegisterSubmit} errorMessage={errorMessage} />
              )
            }
          />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Login onLogin={handleLoginSubmit} errorMessage={errorMessage} />
              )
            }
          />
        </Routes>
        {pathname === "/profile" ||
          pathname === "/signin" ||
          pathname === "/signup" ? (
          ""
        ) : (
          <Footer />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
