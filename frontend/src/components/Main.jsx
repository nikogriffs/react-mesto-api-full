import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({
  cards,
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  onCardLike,
  onCardDelete,
}) => {
  const { avatar, name, about } = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__card">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatarClick}
          />
          <img
            src={avatar}
            alt="Фотография профиля"
            className="profile__avatar"
          />
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__name">{name}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfileClick}
              />
            </div>
            <p className="profile__job">{about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlaceClick}
        />
      </section>

      <section className="places">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
