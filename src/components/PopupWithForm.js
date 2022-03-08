import Popup from "./Popup";

class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormSubmit }) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".form");
        this._submitButton = this._popupElement.querySelector(".form__submit-button");
    }

    open() {
        super.open();
        this.addSubmitButtonListener();
    }

    close() {
        super.close();
        this.removeSubmitButtonListener();
    }

    showLoadingButtonText() {
        this._submitButton.textContent = "Saving...";
    }

    resetButtonText(buttonText) {
        setTimeout(() => {
            this._submitButton.textContent = buttonText;
        }, 1000);
    }

    addSubmitButtonListener = () => {
        this._formElement.addEventListener("submit", this._handlePopupFormSubmit);
    }

    removeSubmitButtonListener = () => {
        this._formElement.removeEventListener("submit", this._handlePopupFormSubmit);
    }

    _handlePopupFormSubmit = (evt) => {
        evt.preventDefault();
        this.showLoadingButtonText();
        this._handleFormSubmit(this._getInputValues(), this._submitButton);
    }
    
    _getInputValues = () => {
        const data = {};
        const inputs = [...this._formElement.querySelectorAll(".form__input")];

        inputs.forEach(input => data[input.name] = input.value);

        return data;
    }
}

export default PopupWithForm;