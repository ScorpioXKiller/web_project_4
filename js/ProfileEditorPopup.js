import Popup from "./Popup.js";

class ProfileEditorPopup extends Popup {
    constructor(popupElement, formValidator) {
        super(popupElement);
        this._formValidator = formValidator;
        this._popupElement = document.querySelector(".profile-popup");
        this._openProfilePopupButton = document.getElementById('edit');
        this._closeProfilePopupButton = this._popupElement.querySelector('.popup__close-button');
    }

    _display() {
        this._popupElement = document.querySelector(".profile-popup");
        this._profileName = document.querySelector('.profile__name').textContent;
        this._profileAbout = document.querySelector('.profile__about').textContent;
        this._nameInput = document.querySelector('.form__input_el_user-name');
        this._aboutInput = document.querySelector('.form__input_el_user-about');

        this._nameInput.value = this._profileName;
        this._aboutInput.value = this._profileAbout;
        
        super.openPopup();
    
        //this._formValidator.resetVaidation();
    }

    handleOpenButton() {
        this._openProfilePopupButton.addEventListener('click', this._display);
    }

    handleCloseButton() {
        this._closeProfilePopupButton.addEventListener('click', this._closePopup);
    }
}

export default ProfileEditorPopup;