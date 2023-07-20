import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile'
import React, { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
