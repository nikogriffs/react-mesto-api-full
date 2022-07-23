import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleUpdateName(e) {
    setName(e.target.value);
  }

  function handleUpdateDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitBtnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleUpdateName}
        value={name || ''}
        className="popup__input popup__input_title_name"
        id="name"
        type="text"
        name="name"
        placeholder="Имя"
        required
        minLength={2}
        maxLength={40}
        autoComplete="off"
      />

      <span className="popup__error" id="name-error" />

      <input
        onChange={handleUpdateDescription}
        value={description || ''}
        className="popup__input popup__input_title_job"
        id="job"
        type="text"
        name="job"
        placeholder="О себе"
        required
        minLength={2}
        maxLength={200}
        autoComplete="off"
      />

      <span className="popup__error" id="job-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
