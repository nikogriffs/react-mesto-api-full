import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { initialPlaceValues } from '../utils/constants';

const AddPlacePopup = ({ isOpen, onClose, onAddPlaceSubmit }) => {
  const [place, setPlace] = useState(initialPlaceValues);

  useEffect(() => {
    setPlace(initialPlaceValues);
  }, [isOpen]);

  function handleChange(e) {
    const { name, value } = e.target;

    setPlace({ ...place, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit(place);
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      submitButtonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        value={place.name}
        className="popup__input popup__input_title_place"
        type="text"
        name="name"
        placeholder="Название"
        required
        minLength={2}
        maxLength={30}
        autoComplete="off"
      />

      <input
        onChange={handleChange}
        value={place.link}
        className="popup__input popup__input_title_link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        autoComplete="off"
        required
      />
    </PopupWithForm>
  );
};
export default AddPlacePopup;
