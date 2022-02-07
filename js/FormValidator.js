<<<<<<< HEAD
import { config } from "./config.js";

class FormValidator {
    constructor(formElement) {
        this._config = config;
        this._formElement = formElement;
        this.enableValidation();
        this.resetVaidation();
    }

    enableValidation() {
        this._formElement.addEventListener("submit", evt => evt.preventDefault());
        this._setEventListeners();
    }

    resetVaidation() {
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
    
        this._toggleButtonState();
    }

    resetForm() {
        this._formElement.reset();
=======
class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
>>>>>>> refactoring2
    }

    _showInputError(inputElement) {
        const {
            inputErrorClass,
            errorClass
        } = this._config || {}; 

        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(errorClass);
    }

    _hideInputError(inputElement) {
        const {
            inputErrorClass,
            errorClass
        } = this._config || {};

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

    _toggleButtonState() {
        const {
            submitButtonSelector,
            inactiveButtonClass
        } = this._config || {};

        this._buttonElement = this._formElement.querySelector(submitButtonSelector);
    
<<<<<<< HEAD
        if (this._hasInvalidInput()) {
=======
        if(this._hasInvalidInput()) {
>>>>>>> refactoring2
            this._buttonElement.classList.add(inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        const { inputSelector } = this._config || {};
    
        this._inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
    
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }
<<<<<<< HEAD
}

export default FormValidator;

=======

    enableValidation() {
        this._formElement.addEventListener("submit", evt => evt.preventDefault());
        this._setEventListeners();
        this.resetVaidation();
    }

    resetVaidation() {
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
    
        this._toggleButtonState();
    }

    resetForm() {
        this._formElement.reset();
    }
}

export default FormValidator;
>>>>>>> refactoring2
