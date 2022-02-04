import Popup from "./Popup.js";
import FormValidator from "../FormValidator.js";

class ProfileEditorPopup extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupElement = popupElement;

        this._profileEditorPopupForm = this._popupElement.querySelector(".form");
        this._formValidator = new FormValidator(this._profileEditorPopupForm);

        this._openProfilePopupButton = document.getElementById("edit");
        this._closeProfilePopupButton = this._popupElement.querySelector(".popup__close-button");
    
        this._profileNameInput = this._popupElement.querySelector('.form__input_el_user-name');
        this._profileAboutInput = this._popupElement.querySelector('.form__input_el_user-about');

        this._profileName = document.querySelector('.profile__name');
        this._profileAbout = document.querySelector('.profile__about');
    }

    handleOpenButton() {
        this._openProfilePopupButton.addEventListener('click', this._display);
    }

    handleSubmitButton() {
        this._profileEditorPopupForm.addEventListener('submit', this._setInputValue);
    }

    _display = () => {
        this._profileNameInput.value = this._profileName.textContent;
        this._profileAboutInput.value = this._profileAbout.textContent;
        
        this.openPopup();
    
        this._formValidator.resetVaidation();
    }

    _setInputValue = (evt) => {
        evt.preventDefault();
        
        this._profileName.textContent = this._profileNameInput.value;
        this._profileAbout.textContent = this._profileAboutInput.value;

        this._closePopup();
    }
}

export default ProfileEditorPopup;