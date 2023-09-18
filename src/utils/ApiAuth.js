export const BASE_URL = 'https://api.morozovavs.movies.nomoreparties.sbs'

function getServerReply(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

//регистрация
export const register = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name, email, password 
        }),
    })
        .then(getServerReply)
}
//вход в аккаунт
export const login = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email, password
        }),
    })
        .then(getServerReply)
        .then((data) => {
          if (data.token) {
            localStorage.setItem("jwt", data.token);
            return data;
          }
        })
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(getServerReply)
  };