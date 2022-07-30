import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister(email, password);
  }

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
            onChange={handleChangeEmail}
            value={email}
            placeholder="Email"
          />

          <input
            className="authorization__input"
            id="password"
            name="password"
            type="password"
            onChange={handleChangePassword}
            value={password}
            placeholder="Пароль"
          />

          <button type="submit" className="authorization__button">
            Зарегистрироваться
          </button>
        </fieldset>
      </form>

      <div className="authorization__menu-link">
        <span>Уже зарегистрированы? </span>
        <Link to="/signin" className="authorization__link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
