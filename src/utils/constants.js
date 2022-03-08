export const config = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
}

const cardPreviewPopup = document.querySelector(".card-popup");
const cardCreatorPopupElement = document.querySelector(".card-creator-popup");
const profileEditPopupElement = document.querySelector('.profile-popup');
const profileAvatarEditPopupElement = document.querySelector(".profile-avatar-popup");
const popupConfirmElement = document.querySelector(".confirm-popup");

export const profileInfoElements = {
    profileName: document.querySelector('.profile__name'),
    profileAbout: document.querySelector('.profile__about'),
    profileAvatar: document.querySelector(".profile__avatar")
}

export const profileAvatarEditButton = document.querySelector(".profile__avatar-edit-button");

export const cardGrid = document.querySelector(".cards");

export const cardPreviewPopupElements = {
    cardPreviewPopup,
    cardPreviewPopupImage: cardPreviewPopup.querySelector(".card-popup__image"),
    cardPreviewPopupTitle: cardPreviewPopup.querySelector(".card-popup__name"),
    closeCardPreviewPopupButton: cardPreviewPopup.querySelector(".card-popup__close-button")
}

export const confirmPopupElements = {
    popupConfirmElement,
}

export const cardCreatorPopupElements = {
    cardCreatorPopupElement,
    openCardCreatorPopupButton: document.getElementById("add"),
}

export const profileEditPopupElements = {
    profileEditPopupElement,
    profileNameInput: profileEditPopupElement.querySelector('.form__input_el_user-name'),
    profileAboutInput: profileEditPopupElement.querySelector('.form__input_el_user-about'),
    openProfileEditPopupButton: document.getElementById('info-edit'),
}

export const profileAvatarEditPopupElements = {
    profileAvatarEditPopupElement,
    profileAvatarLinkInput: profileAvatarEditPopupElement.querySelector(".form__input_el_avatar-link"),
    openProfileAvatarEditPopupButton: document.getElementById("avatar-edit")
}

export const FormElements = {
    profileEditForm: profileEditPopupElement.querySelector(".form"),
    profileAvatarEditForm: profileAvatarEditPopupElement.querySelector(".form"),
    cardCreatorForm: cardCreatorPopupElement.querySelector(".form")
}

export const formValidators = {}
