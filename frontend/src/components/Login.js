import React from 'react';

function Login(props) {

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

    props.onLogin(email, password);
  }

  return (
    <div className="authorization">
      <h2 className="authorization__title">
        Вход
      </h2>
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

          <button type="submit" className="authorization__button">Войти</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;