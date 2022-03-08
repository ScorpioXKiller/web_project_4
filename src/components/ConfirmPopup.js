import Popup from "./Popup";

class ConfirmPopup extends Popup {
    handleSubmit = (handler) => {
        this._submitButtonHandler = handler;
    }
    open = () => {
        super.open();
        this.addConfirmButtonListener();
    }

    close() {
        super.close();
        this.removeConfirmButtonListener();
    }

    addConfirmButtonListener = () => {
        this._popupElement.addEventListener("submit", this._handlePopupConfirmButton);
    }

    removeConfirmButtonListener = () => {
        this._popupElement.removeEventListener("submit", this._handlePopupConfirmButton);
    }

    _handlePopupConfirmButton = (evt) => {
        evt.preventDefault();
        this._submitButtonHandler();
    }

}

export default ConfirmPopup;