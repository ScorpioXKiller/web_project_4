class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
    }

    open() {
        this._popupElement.classList.add("popup_visible");
    }
    
    close() {
        this._popupElement.classList.remove("popup_visible");
        this._removeEventListeners();
    }

    setEventListeners() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popupElement.addEventListener("click", this._handleRemoteClick);
        this._popupElement.querySelector(".popup__close-button").addEventListener("click", this._handleCloseButton);
    }

    _removeEventListeners = () => {
        document.removeEventListener("keydown", this._handleEscClose);
        this._popupElement.removeEventListener("click", this._handleRemoteClick);
        this._popupElement.querySelector(".popup__close-button").removeEventListener("click", this._handleCloseButton);
    }


    _handleEscClose = (evt) => {
        if(evt.key === "Escape") {
            this.close();
        }
    }

    _handleRemoteClick = (evt) => {
        const outsideElement = document.querySelector(".popup__page-overlay");

        if(evt.target.isEqualNode(outsideElement)) {
            this.close();
        }
    }

    _handleCloseButton = () => {
        this.close();
    }
}

export default Popup;