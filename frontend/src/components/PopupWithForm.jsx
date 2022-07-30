import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={`form-${props.name}`}
          onSubmit={props.onSubmit}
          noValidate
        >
          <fieldset className="popup__fieldset">
            {props.children}
            <button type="submit" className="popup__save-button">
              {props.submitBtnText}
            </button>
          </fieldset>
        </form>
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
