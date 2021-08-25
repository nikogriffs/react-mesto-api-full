import React from 'react';
import successPath from "../images/success.svg";
import failPath from "../images/fail.svg";

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} >
            <div className="popup__container">
                <img src={props.isSuccess ? successPath : failPath} className="popup__infotooltip-image" alt="Иконка результата" />
                <h2 className="popup__infotooltip-title">
                    {props.isSuccess
                        ? "Вы успешно зарегистрировались!"
                        : "Что-то пошло не так! Попробуйте ещё раз."}
                </h2>
                <button type="button" className="popup__close-button" onClick={props.onClose} />
            </div>
        </div>
    )
}

export default InfoTooltip;