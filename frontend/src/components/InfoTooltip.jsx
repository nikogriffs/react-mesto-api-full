import React from 'react';
import successLogo from '../images/success.svg';
import failLogo from '../images/fail.svg';

const InfoTooltip = ({ isOpen, isSuccessfulMessage, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img
          src={isSuccessfulMessage ? successLogo : failLogo}
          className="popup__infotooltip-image"
          alt="Иконка результата"
        />
        <h2 className="popup__infotooltip-title">
          {isSuccessfulMessage
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default InfoTooltip;
