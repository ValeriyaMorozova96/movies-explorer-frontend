import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setIsLoggedIn] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({});
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies"
            element={<ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
            />}
          />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
            />}
          />
          <Route path="/profile"
            element={<ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
            />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
