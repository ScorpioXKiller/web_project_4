class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
    }

    _handleKeyDown = (evt) => {
        if(evt.key === "Escape") {
            this._closePopup();
        }
    }

    _handleRemoteClick = (evt) => {
        const outsideElement = document.querySelector(".popup__page-overlay");

        if(evt.target.isEqualNode(outsideElement)) {
            this._closePopup();
        }
    }

    _handleCloseButton = () => {
        this._closePopup()
    }

    openPopup() {
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keydown", this._handleKeyDown);
        this._popupElement.addEventListener("click", this._handleRemoteClick);
        this._popupElement.querySelector(".popup__close-button").addEventListener("click", this._handleCloseButton);
    }
    
    _closePopup() {
        this._popupElement.classList.remove("popup_visible");
        document.removeEventListener("keydown", this._handleKeyDown);
        this._popupElement.removeEventListener("click", this._handleRemoteClick);
        this._popupElement.querySelector(".popup__close-button").removeEventListener("click", this._handleCloseButton);
    }
}

export default Popup;