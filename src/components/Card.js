import { openPopup } from "../utils/utils.js";
import { cardPreviewPopupElements } from "../utils/constants.js";

class Card {
    constructor({data, handleCardClick}, cardTemplateSelector) {
        const { cardTitle, cardLink } = data;
        this._name = cardTitle;
        this._link = cardLink;
        this._handleCardClick = handleCardClick;
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

    _setEventListeners(cardImage) {
        this._handleLikeButton();
        this._handleDeleteButton();
        cardImage.addEventListener("click", () => this._handleCardClick());
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

        this._setEventListeners(card.image);
    
        return this._cardElement;
    }
}

export default Card;