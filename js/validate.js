const showInputError = (formElement, inputElement, configObject) => {
    const {
        inputErrorClass,
        errorClass
    } = configObject || {};

    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, configObject) => {
    const {
        inputErrorClass,
        errorClass
    } = configObject || {};

    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
}

const checkInputValidity = (formElement, inputElement, configObject) => {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, configObject);
    } else {
        hideInputError(formElement, inputElement, configObject);
    }
}

const hasInvalidInput = inputList => {
    return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, configObject) => {
    const {
        inactiveButtonClass
    } = configObject || {};

    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

const setEventListeners = (formElement, configObject) => {
    const {
        inputSelector,
        submitButtonSelector
    } = configObject || {};

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const button = formElement.querySelector(submitButtonSelector);

    inputList.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement, configObject);
            toggleButtonState(inputList, button, configObject);
        });
    });
}

const enableValidation = (configObject) => {
    const {
        formSelector
    } = configObject || {};

    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener("submit", evt => evt.preventDefault());
        setEventListeners(formElement, configObject);
    });
}

const resetVaidation = (formElement, configObject) => {
    const {
        inputSelector,
        inputErrorClass,
        errorClass,
        submitButtonSelector
    } = configObject || {};

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const button = formElement.querySelector(submitButtonSelector);

    inputList.forEach(inputElement => {
        inputElement.classList.remove(inputErrorClass);
        inputElement.nextElementSibling.classList.remove(errorClass);
    });

    toggleButtonState(inputList, button, configObject);
}

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
}); 

export default resetVaidation;