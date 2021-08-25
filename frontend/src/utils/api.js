class Api {
  constructor(options) {
    this._address = options.baseUrl;
    this._token = options.headers.authorization;
  }

  // Метод проверки ответа от сервера
  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // Метод получения начальных карточек
  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkAnswer)
  }

  // Метод получения информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkAnswer)
  }

  // Метод отправки инфоормации о пользователе на сервер
  setUserInfo(name, job) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, about: job })
    })
      .then(this._checkAnswer)
  }

  // Метод создания карточки на сервере
  createCard(name, link) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, link: link })
    })
      .then(this._checkAnswer)
  }

  // Метод отправки и удаления лайка на сервере
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkAnswer)
  }

  // Метод удаления карточки с сервера
  delCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkAnswer)
  }

  // Метод обновления аватара на сервере
  updateAvatar(avatar) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar: avatar })
    })
      .then(this._checkAnswer)
  }
}

const api = new Api({
  baseUrl: 'http://mesto.nikogriffs.nomoredomains.monster',
  // headers: {
  //   authorization: '8e28ef26-30e7-43b7-b459-31efb2dce5c1'
  // }
});

export default api;