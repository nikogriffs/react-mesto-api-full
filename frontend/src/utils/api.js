class Api {
  // constructor(options) {
  //   this._address = options.baseUrl;
  // }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`/cards`, {
      credentials: 'include',
    }).then(this._checkAnswer);
  }

  getUserInfo() {
    return fetch(`/users/me`, {
      credentials: 'include',
    }).then(this._checkAnswer);
  }

  setUserInfo(name, job) {
    return fetch(`/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, about: job }),
    }).then(this._checkAnswer);
  }

  createCard(name, link) {
    return fetch(`/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, link: link }),
    }).then(this._checkAnswer);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`/cards/${cardId}/likes/`, {
      method: isLiked ? 'DELETE' : 'PUT',
      credentials: 'include',
    }).then(this._checkAnswer);
  }

  delCard(cardId) {
    return fetch(`/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(this._checkAnswer);
  }

  updateAvatar(avatar) {
    return fetch(`/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ avatar: avatar }),
    }).then(this._checkAnswer);
  }
}

const api = new Api();

export default api;
