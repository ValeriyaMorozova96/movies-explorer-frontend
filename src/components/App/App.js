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
import apiMovies from "../../utils/ApiMovies";
import * as apiMain from '../../utils/ApiMain'
import * as apiAuth from '../../utils/ApiAuth';

function App() {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMainPage = pathname === "/";

  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // ошибки и загрузка
  const [errorMessage, setErrorMessage] = useState('');
  const [profileMessage, setProfileMessage] = useState('');
  const [serverErrorMessage, setServerErrorMessage] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState(false);
  const [isLoadingOn, setIsLoadingOn] = useState(false);

  // данные всех фильмов
  const [moviesData, setMoviesData] = useState([]);
  const [startMovies, setStartMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);

  // сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState(savedMovies);

  //поиск и чекбокс
  const [searchByKeyword, setSearchByKeyword] = useState('');
  const [checkboxIsGreen, setCheckboxIsGreen] = useState(false);
  const [checkboxIsGreenSavedMovies, setCheckboxIsGreenSavedMovies] = useState(false);

  const shortMovieLengthMax = 40;

  // страница "Фильмы"
  useEffect(() => {
    setSearchByKeyword(localStorage.getItem('searchByKeyword'));
    setCheckboxIsGreen(localStorage.getItem('checkboxIsGreen') === 'true');
    if (localStorage.getItem('foundMovies')) {
      const foundMoviesData = JSON.parse(
        localStorage.getItem('foundMovies')
      );
      setStartMovies(foundMoviesData);
      if (localStorage.getItem('checkboxIsGreen') === 'true') {
        setFoundMovies(searchShortMovies(foundMoviesData));
      } else {
        setFoundMovies(foundMoviesData);
      }
    }
  }, []);

  // действия с чекбоксом на страницу всех фильмов
  const toggleCheckbox = () => {
    setCheckboxIsGreen(!checkboxIsGreen);
    if (!checkboxIsGreen) {
      setFoundMovies(searchShortMovies(startMovies));
      if (foundMovies.length === 0) {
        setNotFoundMessage(true);
      }
    } else {
      setFoundMovies(startMovies);
    }
    localStorage.setItem('checkboxIsGreen', !checkboxIsGreen);
  };

  // запрос фильмов с сервера
  const handleFindMovies = (keyword) => {
    localStorage.setItem('searchByKeyword', keyword);
    localStorage.setItem('checkboxIsGreen', checkboxIsGreen);
    if (moviesData.length === 0) {
      setIsLoadingOn(true);
      apiMovies
        .getAllMovies()
        .then((movies) => {
          setIsLoadingOn(true);
          localStorage.setItem('moviesData', JSON.stringify(movies));
          setMoviesData(movies);
          handleFoundMoviesByKeyword(movies, keyword, checkboxIsGreen)
        })
        .catch(() => {
          setServerErrorMessage(true)
        })
        .finally(() => {
          setTimeout(() => setIsLoadingOn(false), 1000)
        });
    } else {
      handleFoundMoviesByKeyword(moviesData, keyword, checkboxIsGreen);
    }
  };

  // поиск фильмов
  const searchMovies = (movies, keyword, checkbox) => {
    const moviesSearchByKeyword = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
    })
    if (checkbox) {
      return searchShortMovies(moviesSearchByKeyword);
    } else {
      return moviesSearchByKeyword;
    }
  }

  // поиск короткометражек
  const searchShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= shortMovieLengthMax);
  };

  const handleFoundMoviesByKeyword = (movies, keyword, checkbox) => {
    setIsLoadingOn(true);
    const moviesCardList = searchMovies(movies, keyword, false);
    if (moviesCardList.length === 0) {
      setNotFoundMessage(true);
    } else {
      setNotFoundMessage(false);
    }
    setStartMovies(moviesCardList);
    setFoundMovies(
      checkbox ? searchShortMovies(moviesCardList) : moviesCardList
    );
    localStorage.setItem('foundMovies', JSON.stringify(moviesCardList));
    setTimeout(() => setIsLoadingOn(false), 1000)
    setTimeout(() => setNotFoundMessage(false), 5000)
  }

  // страница "Сохраненные фильмы"
  useEffect(() => {
    if (localStorage.getItem('checkboxSavedMovies') === 'false') {
      setCheckboxIsGreenSavedMovies(false)
      setSortedMovies(savedMovies)
    } else {
      setCheckboxIsGreenSavedMovies(true)
      setSortedMovies(searchShortMovies(savedMovies))
    }
  }, [savedMovies]);


  //действия с чекбоксом на странице сохраненных фильмов
  const toggleCheckboxSavedMovies = () => {
    if (!checkboxIsGreenSavedMovies) {
      setCheckboxIsGreenSavedMovies(true)
      localStorage.setItem('checkboxSavedMovies', true);
      setSortedMovies(searchShortMovies(savedMovies));
      if (searchShortMovies(savedMovies).length === 0) {
        setNotFoundMessage(true)
      }
      setNotFoundMessage(false)
    } else {
      setCheckboxIsGreenSavedMovies(false)
      localStorage.setItem('checkboxSavedMovies', false);
      if (savedMovies.length === 0) {
        setNotFoundMessage(true)
      }
      setNotFoundMessage(false)
      setSortedMovies(savedMovies)
    }
  }

  // поиск сохраненных фильмов по ключевому слову
  const handleFindSavedMovies = (keyword) => {
    setIsLoadingOn(true);
    if (searchMovies(savedMovies, keyword, checkboxIsGreenSavedMovies).length === 0) {
      setNotFoundMessage(true)
      setSortedMovies([])
    } else {
      setNotFoundMessage(false)
      setSavedMovies(searchMovies(savedMovies, keyword, checkboxIsGreenSavedMovies))
    }
    setTimeout(() => setNotFoundMessage(false), 5000)
    setTimeout(() => setIsLoadingOn(false), 1000)
  }

  // сохранить фильм
  const handleSaveMovie = (movie) => {
    apiMain.saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  // проверка сохранен ли фильм
  const isSavedMovie = (movie) => {
    return savedMovies.some(item => item.movieId === movie.id && item.owner === currentUser._id)
  }

  // удаление фильма из сохраненных
  const handleDeleteMovie = (movie) => {
    const deleteMovie = savedMovies.find(item => item.movieId === (movie.id || movie.movieId) && item.owner === currentUser._id)
    if (!deleteMovie) return
    apiMain.deleteMovie(deleteMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => movie._id !== deleteMovie._id))
      })
      .catch((err) => {
        console.log(err);
      })
  }
  // проверка токена
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    apiMain.setToken(token);
    if (token) {
      apiAuth.checkToken(token)
      apiMain
        .getMyInfo()
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          setIsTokenChecked(true);
        })
      apiMain
        .getMovies()
        .then((movies) => {
          setIsLoggedIn(true);
          setSavedMovies(movies);
        })
        .catch(err => {
          setIsLoggedIn(false);
          if (err === 'Ошибка: 401') {
            setErrorMessage(
              'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'
            );
          }
          else if (err === 'Ошибка: 403') {
            setErrorMessage(
              'При авторизации произошла ошибка. Переданный токен некорректен.'
            );
          }
        })
        .finally(() => {
          setTimeout(() => setErrorMessage(''), 3000);
        });
    }
  }, [loggedIn]);

  // регистрация
  const handleRegisterSubmit = ({ name, email, password }) => {
    apiAuth
      .register({ name, email, password })
      .then(() => {
        handleLoginSubmit({ email, password })
      })
      .catch(err => {
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

  // вход в аккаунт
  const handleLoginSubmit = ({ email, password }) => {
    apiAuth
      .login({ email, password })
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

  // выход из аккаунта
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    apiMain.setToken(null);
    setCurrentUser({});
    setFoundMovies([]);
    setStartMovies([]);
    setSavedMovies([]);
    setCheckboxIsGreen(false)
    setSearchByKeyword('');
    navigate('/');
  }

  // изменить профиль
  const handleChangeProfile = (userData) => {
    apiMain
      .changeProfileData(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setProfileMessage('Данные успешно обновлены');
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setProfileMessage('Пользователь с таким email уже существует');
        } else {
          setProfileMessage('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => {
        setTimeout(() => setProfileMessage(''), 3000);
      });
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
              movies={foundMovies}
              notFoundMessage={notFoundMessage}
              serverErrorMessage={serverErrorMessage}
              isSavedMovie={isSavedMovie}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              isLoadingOn={isLoadingOn}
              savedMovies={savedMovies}
              checked={checkboxIsGreen}
              searchByKeyword={searchByKeyword}
              onCheckbox={toggleCheckbox}
              onSubmit={handleFindMovies}
            />}
          />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              isTokenChecked={isTokenChecked}
              movies={sortedMovies}
              notFoundMessage={notFoundMessage}
              onDeleteMovie={handleDeleteMovie}
              isLoadingOn={isLoadingOn}
              isSavedMovie={isSavedMovie}
              savedMovies={savedMovies}
              checked={checkboxIsGreenSavedMovies}
              onCheckbox={toggleCheckboxSavedMovies}
              onSubmit={handleFindSavedMovies}
            />}
          />
          <Route path="/profile"
            element={<ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onSignOut={handleSignOut}
              onProfileChange={handleChangeProfile}
              isTokenChecked={isTokenChecked}
              profileMessage={profileMessage}
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
