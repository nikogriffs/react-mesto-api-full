import React, { useState } from 'react';
import { initialValues } from '../utils/constants';

const Login = ({ onLoginFormSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLoginFormSubmit(values);
  };

  return (
    <div className="authorization">
      <h2 className="authorization__title">Вход</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="authorization__fieldset">
          <input
            className="authorization__input"
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
          />

          <input
            className="authorization__input"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Пароль"
          />

          <button type="submit" className="authorization__button">
            Войти
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
