import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onEditAvatarSubmit }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setAvatar('');
  }, [isOpen]);

  function handleChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onEditAvatarSubmit(avatar);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitButtonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        value={avatar}
        className="popup__input popup__input_title_avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        autoComplete="off"
        required
      />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
