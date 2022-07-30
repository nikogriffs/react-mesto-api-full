import React from 'react';

const PopupWithForm = ({
  children,
  name,
  title,
  submitBtnText,
  isOpen,
  onSubmit,
  onClose,
}) => {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`form-${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          <fieldset className="popup__fieldset">
            {children}
            <button type="submit" className="popup__save-button">
              {submitBtnText}
            </button>
          </fieldset>
        </form>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default PopupWithForm;
