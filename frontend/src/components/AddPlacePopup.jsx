import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlaceSubmit }) => {
  const placeRef = useRef();
  const linkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name: placeRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      submitBtnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={placeRef}
        className="popup__input popup__input_title_place"
        id="place"
        type="text"
        name="place"
        placeholder="Название"
        required
        minLength={2}
        maxLength={30}
        autoComplete="off"
      />

      <span className="popup__error" id="place-error" />

      <input
        ref={linkRef}
        className="popup__input popup__input_title_link"
        id="link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        autoComplete="off"
        required
      />

      <span className="popup__error" id="link-error" />
    </PopupWithForm>
  );
};
export default AddPlacePopup;
