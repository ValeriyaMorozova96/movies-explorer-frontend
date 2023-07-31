export class ApiMain {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }
    _getServerReply(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    setToken(token) {
        this._headers.authorization = `Bearer ${token}`;
    }
    getMyInfo() {
        return fetch(`${this._url}/users/me`,
            {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getServerReply)
    }

    //изменение профайла пользователя
    changeProfileData({ name, about }) {
        return fetch(`${this._url}/users/me`,
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({ name, about })
            })
            .then(this._getServerReply)
    }


    //сохранить фильм
    saveMovie = (movie) => {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
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
        })
            .then(this._getServerReply)
    }

    //удалить фильм
    deleteMovie = (id) => {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._getServerReply)
    }

    //получить фильмы
    getMovies = () => {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._getServerReply)
    }
}
const apiMain = new ApiMain({
    //url: 'http://localhost:3000',
    url: 'https://api.morozovavs.movies.nomoreparties.sbs',
    headers: {
        'content-type': 'application/json',
        Authorization: '',
    },
});

export default apiMain;