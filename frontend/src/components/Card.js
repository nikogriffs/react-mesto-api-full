import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext)

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = `places__trash-button ${!isOwn && "places__trash-button_hidden"}`;

    const isLiked = card.likes.some(like => like._id === currentUser._id);
    const cardLikeButtonClassName = `places__like-button ${isLiked && "places__like-button_active"}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="places__card">
            <img src={card.link} alt={card.name} className="places__image" onClick={handleClick} />
            <h2 className="places__title">{card.name}</h2>
            <div className="places__like">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
                <span className="places__like-counter">{card.likes.length}</span>
            </div>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} />
        </li>
    )
}

export default Card;