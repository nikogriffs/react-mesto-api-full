class Api {
  constructor(options) {
    this._address = options.baseUrl;
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

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

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._address}/cards/${cardId}/likes/`, {
      method: isLiked ? 'DELETE' : 'PUT',
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

  delCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(this._checkAnswer)
  }

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