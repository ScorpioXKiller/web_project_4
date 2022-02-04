import Popup from "./Popup.js";

class CardPreviewPopup extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupElement = document.querySelector(".card-popup");
    }
}

export default CardPreviewPopup;