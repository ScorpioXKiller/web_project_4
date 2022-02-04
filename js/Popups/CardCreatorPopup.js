import Popup from "./Popup.js";
import FormValidator from "../FormValidator.js";
import Card from "../Card.js";

class CardCreatorPopup extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupElement = popupElement;

        this._cardCreatorPopupForm = this._popupElement.querySelector(".form");
        this._formValidator = new FormValidator(this._cardCreatorPopupForm); // example of composition (FormValidator cannot exsist without Popup)

        this._openCardCreatorPopupButton = document.getElementById("add");
        this._closeCardCreatorPopupButton = this._popupElement.querySelector(".popup__close-button");

        this._cardTitleInput = this._popupElement.querySelector(".form__input_el_card-title");
        this._imageLinkInput = this._popupElement.querySelector(".form__input_el_image-link");
    }

    handleOpenButton() {
        this._openCardCreatorPopupButton.addEventListener('click', this._display);
    }

    handleCreateButton() {
        this._cardCreatorPopupForm.addEventListener('submit', this._addNewCard);
    }

    _display = () => {
        this.openPopup();

        this._formValidator.resetForm();
        this._formValidator.resetVaidation();
    }

    _addNewCard = (evt) => {
        evt.preventDefault();

        const cardTemplate = document.querySelector("#userCard");
        const cards = document.querySelector(".cards");

        const cardData = {
            name: this._cardTitleInput.value,
            link: this._imageLinkInput.value
        }

        const cardObject = new Card(cardData, cardTemplate);
        cards.prepend(cardObject.create());

        this._closePopup();
    }
}

export default CardCreatorPopup;