import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose, onEditProfileSubmit }) => {
  const { name, about } = useContext(CurrentUserContext);
  const [profile, setProfile] = useState({ name, about });

  useEffect(() => {
    setProfile({ name, about });
  }, [name, about, isOpen]);

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile({ ...profile, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onEditProfileSubmit(profile);
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitButtonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        value={profile.name}
        className="popup__input popup__input_title_name"
        type="text"
        name="name"
        placeholder="Имя"
        required
        minLength={2}
        maxLength={40}
        autoComplete="off"
      />

      <input
        onChange={handleChange}
        value={profile.about}
        className="popup__input popup__input_title_job"
        type="text"
        name="about"
        placeholder="О себе"
        required
        minLength={2}
        maxLength={200}
        autoComplete="off"
      />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
