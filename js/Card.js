import { openPopup } from "./utils.js";
import { cardPreviewPopupElements } from "./constants.js";

class Card {
    constructor(data, cardTemplateSelector) {
        const { name, link } = data;
        this._name = name;
        this._link = link;
        this._cardTemplateSelector = cardTemplateSelector.content;
    }

    _handleLikeButton() {
        this._cardElement.querySelector(".cards__like-button").addEventListener("click", evt => { 
            evt.target.classList.toggle("cards__like-button_active");
        }); 
    }

    _handleDeleteButton() {
        this._cardElement.querySelector(".cards__delete-button").addEventListener("click", () => { 
            this._cardElement.remove();
        }); 
    }

    _handleClickOnCard(card) {
        const { image, name } = card;
        const { cardPreviewPopup, cardPreviewPopupName, cardPreviewPopupImage } = cardPreviewPopupElements;

        image.addEventListener("click", () => { 
            cardPreviewPopupImage.src = image.src; 
            cardPreviewPopupName.textContent = name.textContent; 
            cardPreviewPopupImage.alt = image.alt;
            openPopup(cardPreviewPopup);
        }); 
    }

    _setEventListeners(card) {
        this._handleLikeButton();
        this._handleDeleteButton();
        this._handleClickOnCard(card);
    }

    create() {
        this._cardElement = this._cardTemplateSelector.querySelector(".cards__item").cloneNode(true);

        const card = {
            image: this._cardElement.querySelector(".cards__photo"),
            name: this._cardElement.querySelector(".cards__name")
        }
    
        card.image.src = this._link;
        card.name.textContent = this._name;
        card.image.alt = `Photo of ${this._name}`;

        this._setEventListeners(card);
    
        return this._cardElement;
    }
}

export default Card;