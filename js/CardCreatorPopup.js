import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";

class CardCreatorPopup extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupElement = popupElement;

        const cardCreatorForm = document.querySelector(".form_type_card-creator");
        this._formValidator = new FormValidator(cardCreatorForm);

        this._openCardCreatorPopupButton = document.getElementById("add");
        this._closeCardCreatorPopupButton = this._popupElement.querySelector(".popup__close-button");
    }

    _display = () => {
        this._popupElement = document.querySelector(".card-creator-popup");
        super.openPopup();

        this._formValidator.resetForm();
        this._formValidator.resetVaidation();
    }

    handleOpenButton() {
        this._openCardCreatorPopupButton.addEventListener('click', this._display);
    }

    handleCloseButton() {
        this._closeCardCreatorPopupButton.addEventListener('click', this._closePopup);
    }

    handleCardCreatorFormSubmit = (evt) => {
        evt.preventDefault();
        
    evt.preventDefault();

    const cardElement = {
        name: cardTitleInput.value,
        link: imageLinkInput.value
    }
    
    addCardToBegin(cardElement);
    closePopup(cardCreatorPopup);
}
}

export default CardCreatorPopup;