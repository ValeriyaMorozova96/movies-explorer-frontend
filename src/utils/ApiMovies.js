export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class ApiMovies {
    constructor(url) {
        this._url = url;
    }

    _getServerReply(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getAllMovies() {
        return fetch(this._url)
            .then((res) => this._getServerReply(res));
    }
}

export const apiMovies = new ApiMovies(MOVIES_URL);