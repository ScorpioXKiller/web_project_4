class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const {
            inputErrorClass,
            errorClass
        } = this._config; 

        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(errorClass);
    }

    _hideInputError(inputElement) {
        const {
            inputErrorClass,
            errorClass
        } = this._config;

        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(inputErrorClass);
        errorElement.classList.remove(errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity(inputElement) {
        if(!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput = () => this._inputList.some(inputElement => !inputElement.validity.valid);

    _toggleButtonState(buttonElement) {
        const { inactiveButtonClass } = this._config;
    
        if(this._hasInvalidInput()) {
            buttonElement.classList.add(inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        const { inputSelector, submitButtonSelector } = this._config;
    
        this._inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
        this._buttonElement = this._formElement.querySelector(submitButtonSelector);
    
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._buttonElement);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", evt => evt.preventDefault());
        this._setEventListeners();
        this.resetValidation();
    }

    resetValidation() {
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
    }

    resetFormInputs() {
        this._formElement.reset();
        this._toggleButtonState(this._buttonElement);
    }
}

export default FormValidator;
