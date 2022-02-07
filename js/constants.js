const cardPreviewPopup = document.querySelector(".card-popup");
const cardCreatorPopup = document.querySelector(".card-creator-popup");
const profileEditPopup = document.querySelector('.profile-popup');

export const profileInfoElements = {
    profileName: document.querySelector('.profile__name'),
    profileAbout: document.querySelector('.profile__about')
}

export const cardGrid = document.querySelector(".cards");
export const cardTemplate = document.querySelector("#userCard");

export const cardPreviewPopupElements = {
    cardPreviewPopup,
    cardPreviewPopupImage: cardPreviewPopup.querySelector(".card-popup__image"),
    cardPreviewPopupName: cardPreviewPopup.querySelector(".card-popup__name"),
    closeCardPreviewPopupButton: cardPreviewPopup.querySelector(".card-popup__close-button")
}

export const cardCreatorPopupElements = {
    cardCreatorPopup,
    cardCreatorPopupForm: cardCreatorPopup.querySelector(".popup__form_card-creator"),
    cardTitleInput: cardCreatorPopup.querySelector(".form__input_el_card-title"),
    cardLinkInput: cardCreatorPopup.querySelector(".form__input_el_image-link"),
    openCardCreatorPopupButton: document.getElementById("add"),
    closeCardCreatorPopupButton: cardCreatorPopup.querySelector(".popup__close-button")
}

export const profileEditPopupElements = {
    profileEditPopup,
    profileEditPopupForm: profileEditPopup.querySelector(".popup__form_edit-profile"),
    profileNameInput: profileEditPopup.querySelector('.form__input_el_user-name'),
    profileAboutInput: profileEditPopup.querySelector('.form__input_el_user-about'),
    openProfileEditPopupButton: document.getElementById('edit'),
    closeProfileEditPopupButton: profileEditPopup.querySelector('.popup__close-button')
}