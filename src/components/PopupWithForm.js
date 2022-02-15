import Popup from "./Popup";

class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormSubmit }) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".form");
    }

    open = () => {
        super.open();
        this.setEventListeners();
    }

    close() {
        super.close();
        this._formElement.removeEventListener("submit", this._handlePopupFormSubmit);
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._formElement.addEventListener("submit", this._handlePopupFormSubmit);
    }

    _handlePopupFormSubmit = (evt) => {
        evt.preventDefault();

        this._handleFormSubmit(this._getInputValues());
        this.close();
    }
    

    _getInputValues = () => {
        const data = {};
        const inputs = [...this._formElement.querySelectorAll(".form__input")];

        inputs.forEach(input => data[input.name] = input.value);

        return data;
    }
}

export default PopupWithForm;