import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initialValues } from '../utils/constants';

const Register = ({ onSubmitRegister }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitRegister(values);
  };

  return (
    <div className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
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
            Зарегистрироваться
          </button>
        </fieldset>
      </form>

      <div className="authorization__menu-link">
        <span>Уже зарегистрированы? </span>
        <Link to="/login" className="authorization__link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
