import CardPreviewPopup from "./CardPreviewPopup.js";

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
        this._cardElement.querySelector(".cards__delete-button").addEventListener("click", evt => { 
            evt.target.parentElement.remove(); 
        }); 
    }

    _handleClickOnCard(cardImage, cardName) {
        const cardPopup = document.querySelector(".card-popup");
        const cardPopupImage = cardPopup.querySelector(".card-popup__image"); 
        const cardPopupName = cardPopup.querySelector(".card-popup__name"); 

        cardImage.addEventListener("click", () => { 
            cardPopupImage.src = cardImage.src; 
            cardPopupName.textContent = cardName.textContent; 
            cardPopupImage.alt = cardImage.alt;

            const cardPreviewPopup = new CardPreviewPopup();
            cardPreviewPopup.openPopup();
        }); 
    }

    create() {
        this._cardElement = this._cardTemplateSelector.querySelector(".cards__item").cloneNode(true);
        const cardImage = this._cardElement.querySelector(".cards__photo");
        const cardName = this._cardElement.querySelector(".cards__name");
    
        cardImage.src = this._link;
        cardName.textContent = this._name;
        cardImage.alt = `Photo of ${this._name}`;
    
        this._handleLikeButton();
        this._handleDeleteButton();
        this._handleClickOnCard(cardImage, cardName);
    
        return this._cardElement;
    }
}

export default Card;