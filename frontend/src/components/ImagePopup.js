import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup-card ${props.card ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_card">
                <button type="button" className="popup__close-button" onClick={props.onClose} />
                <figure className="popup__figure">
                    <img src={props.card?.link} alt={props.card?.name} className="popup__image" />
                    <figcaption className="popup__caption">{props.card?.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;