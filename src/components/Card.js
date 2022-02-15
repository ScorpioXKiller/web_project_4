class Card {
    constructor({data, handleCardClick}, cardTemplateSelector) {
        const { cardTitle, cardLink } = data;
        this._name = cardTitle;
        this._link = cardLink;
        this._handleCardClick = handleCardClick;
        this._cardTemplateSelector = document.querySelector(cardTemplateSelector).content;
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

    _setEventListeners = () => {
        const likeButton = this._cardElement.querySelector(".cards__like-button");
        const deleteButton = this._cardElement.querySelector(".cards__delete-button");
        const cardImage = this._cardElement.querySelector(".cards__photo");

        likeButton.addEventListener("click", this._handleLikeButton);
        deleteButton.addEventListener("click", this._handleDeleteButton);
        cardImage.addEventListener("click", this._handleCardClick);
    }

    _handleLikeButton = (evt) => {
        evt.target.classList.toggle("cards__like-button_active");
    }

    _handleDeleteButton = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }
}

export default Card;