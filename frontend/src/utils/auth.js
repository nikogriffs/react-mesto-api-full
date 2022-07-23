// export const BASE_URL = 'https://react-mesto.herokuapp.com';

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (email, password) => {
  return fetch(`/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkAnswer);
};

export const authorize = (email, password) => {
  return fetch(`/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkAnswer);
};

export const checkToken = () => {
  return fetch(`/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(checkAnswer);
};

export const logout = () => {
  return fetch(`/logout`, {
    method: 'GET',
    credentials: 'include',
  }).then(checkAnswer);
};
