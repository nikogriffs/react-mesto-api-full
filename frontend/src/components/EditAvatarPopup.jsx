import React from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onEditAvatarSubmit }) => {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onEditAvatarSubmit({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitBtnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className="popup__input popup__input_title_avatar"
        id="avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        autoComplete="off"
        required
      />

      <span className="popup__error" id="avatar-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
