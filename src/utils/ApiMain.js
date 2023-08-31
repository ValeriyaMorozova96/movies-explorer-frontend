export const BASE_URL = 'https://api.morozovavs.movies.nomoreparties.sbs';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: ''
};

const getServerReply = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const setToken = (token) => {
  headers.Authorization = `Bearer ${token}`;
};

export const getMyInfo = () => {
  return fetch(`${BASE_URL}/users/me`,
    {
      method: 'GET',
      headers: headers
    })
    .then(getServerReply)
};

export const changeProfileData = ({ email, name }) => {
  return fetch(`${BASE_URL}/users/me`,
    {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({
        name, email
      })
    })
    .then(getServerReply)
};

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then(getServerReply);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: headers
  }).then(getServerReply);
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: headers,
  }).then(getServerReply);
}