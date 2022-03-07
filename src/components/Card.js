class Card {
    constructor({data, handleCardClick, handleDeleteCard, handleLikeCard}, cardTemplateSelector, userId) {
        const { name, link, likes = [], owner = {} } = data;
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._ownerId = owner._id;

        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeCard = handleLikeCard;
        this._cardTemplateSelector = document.querySelector(cardTemplateSelector).content;
        this._userId = userId;
        this._cardElement = this._cardTemplateSelector.querySelector(".cards__item").cloneNode(true);
        this._deleteButton = this._cardElement.querySelector(".cards__delete-button");
        this._likeButton = this._cardElement.querySelector(".cards__like-button");
        this._likesAmount = this._cardElement.querySelector(".cards__likes-amount");

        if(this._ownerId == undefined) {
            this._ownerId = userId;
        }
    }

    create() {
        const card = {
            image: this._cardElement.querySelector(".cards__photo"),
            name: this._cardElement.querySelector(".cards__name"),
        }
    
        card.image.src = this._link;
        card.name.textContent = this._name;
        card.image.alt = `Photo of ${this._name}`;

        this._setEventListeners(card.image);

        if(this._ownerId !== this._userId) {
            this._deleteButton.classList.add("card__delete-button_hidden");
        }

        this._likesAmount.textContent = this._likes.length;

        if(this.isLiked()) {
            this.updateLikes(this._likes);
            this._likeButton.title = "Dislike";
        }
    
        return this._cardElement;
    }

    delete = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }

    isLiked = () => this._likes.some(user => user._id === this._userId);

    updateLikes = (likes) => {
        this._likes = likes;
        this._likesAmount.textContent = this._likes.length;
        this._likeButton.classList.toggle("cards__like-button_active");
    }

    _setEventListeners = () => {
        const cardImage = this._cardElement.querySelector(".cards__photo");

        this._likeButton.addEventListener("click", this._handleLikeCard);
        this._deleteButton.addEventListener("click", this._handleDeleteCard);
        cardImage.addEventListener("click", this._handleCardClick);
    }
}

export default Card;