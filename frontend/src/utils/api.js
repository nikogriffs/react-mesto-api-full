class Api {
  constructor(options) {
    this._address = options.baseUrl;
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
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

  // Метод получения информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

  // Метод отправки инфоормации о пользователе на сервер
  setUserInfo(name, job) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
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
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, link: link })
    })
      .then(this._checkAnswer)
  }

  // Метод отправки и удаления лайка на сервере
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._address}/cards/${cardId}/likes/`, {
      method: isLiked ? 'DELETE' : 'PUT',
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

  // Метод удаления карточки с сервера
  delCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

  // Метод обновления аватара на сервере
  updateAvatar(avatar) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar: avatar })
    })
      .then(this._checkAnswer)
  }
}

const api = new Api({
  baseUrl: 'https://api.mesto.nikogriffs.nomoredomains.work',
});

export default api;