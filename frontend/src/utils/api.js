class Api {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`/cards`, {
      credentials: 'include',
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`/users/me`, {
      credentials: 'include',
    }).then(this._checkResponse);
  }

  setUserInfo(name, about) {
    return fetch(`/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, about }),
    }).then(this._checkResponse);
  }

  createCard(name, link) {
    return fetch(`/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  toggleLikeButton(cardId, isLiked) {
    return fetch(`/cards/${cardId}/likes/`, {
      method: isLiked ? 'DELETE' : 'PUT',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(`/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ avatar }),
    }).then(this._checkResponse);
  }
}

const api = new Api();

export default api;
