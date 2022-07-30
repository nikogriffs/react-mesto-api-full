import React from 'react';

const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup-card ${card ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_card">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <figure className="popup__figure">
          <img src={card?.link} alt={card?.name} className="popup__image" />
          <figcaption className="popup__caption">{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;
