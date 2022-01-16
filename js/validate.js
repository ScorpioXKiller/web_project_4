const showInputError = (formElement, inputElement, configObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(configObject.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(configObject.errorClass);
}

const hideInputError = (formElement, inputElement, configObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(configObject.inputErrorClass);
    errorElement.classList.remove(configObject.errorClass);
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
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(configObject.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(configObject.inactiveButtonClass);
    }
}

const setEventListeners = (formElement, configObject) => {
    const inputList = Array.from(formElement.querySelectorAll(configObject.inputSelector));
    const button = formElement.querySelector(configObject.submitButtonSelector);

    toggleButtonState(inputList, button, configObject);

    inputList.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement, configObject);
            toggleButtonState(inputList, button, configObject);
        });
    });
    
}

const enableValidation = (configObject) => {
    const formList = Array.from(document.querySelectorAll(configObject.formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener("submit", evt => evt.preventDefault());
        setEventListeners(formElement, configObject);
    });
}

const resetVaidation = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    inputList.forEach(inputElement => {
        inputElement.form.reset();
        inputElement.classList.remove("form__input_type_error");
        inputElement.nextElementSibling.classList.remove("form__input_error_active");
    });
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

