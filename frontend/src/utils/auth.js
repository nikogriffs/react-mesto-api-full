const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (email, password) => {
  return fetch(`/register`, {
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
  return fetch(`/login`, {
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
