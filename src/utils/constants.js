export const initialCards = [
    {
        cardTitle: "Yellowstone National Park",
        cardLink: new URL("../images/yellowstone-national-park.jpg", import.meta.url)
    },
    {
        cardTitle: "Golden Gate Bridge",
        cardLink: new URL("../images/golden-gate-bridge.jpg", import.meta.url)
    },
    {
        cardTitle: "Statue Of Liberty",
        cardLink: new URL("../images/statue-of-liberty.jpg", import.meta.url)
    },
    {
        cardTitle: "Grand Canyon",
        cardLink: new URL("../images/grand-canyon.jpg", import.meta.url)
    },
    {
        cardTitle: "Washington Monument",
        cardLink: new URL("../images/washington-monument.jpg", import.meta.url)
    },
    {
        cardTitle: "Mount-Rushmore",
        cardLink: new URL("../images/mount-rushmore.jpg", import.meta.url)
    }
];

export const config = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
}

const cardPreviewPopup = document.querySelector(".card-popup");
const cardCreatorPopupElement = document.querySelector(".card-creator-popup");
const profileEditPopupElement = document.querySelector('.profile-popup');

export const profileInfoElements = {
    profileName: document.querySelector('.profile__name'),
    profileAbout: document.querySelector('.profile__about')
}

export const cardGrid = document.querySelector(".cards");

export const cardPreviewPopupElements = {
    cardPreviewPopup,
    cardPreviewPopupImage: cardPreviewPopup.querySelector(".card-popup__image"),
    cardPreviewPopupTitle: cardPreviewPopup.querySelector(".card-popup__name"),
    closeCardPreviewPopupButton: cardPreviewPopup.querySelector(".card-popup__close-button")
}

export const cardCreatorPopupElements = {
    cardCreatorPopupElement,
    cardCreatorPopupForm: cardCreatorPopupElement.querySelector(".form"),
    cardTitleInput: cardCreatorPopupElement.querySelector(".form__input_el_card-title"),
    cardLinkInput: cardCreatorPopupElement.querySelector(".form__input_el_image-link"),
    openCardCreatorPopupButton: document.getElementById("add"),
    closeCardCreatorPopupButton: cardCreatorPopupElement.querySelector(".popup__close-button")
}

export const profileEditPopupElements = {
    profileEditPopupElement,
    profileEditPopupForm: profileEditPopupElement.querySelector(".form"),
    profileNameInput: profileEditPopupElement.querySelector('.form__input_el_user-name'),
    profileAboutInput: profileEditPopupElement.querySelector('.form__input_el_user-about'),
    openProfileEditPopupButton: document.getElementById('edit'),
    closeProfileEditPopupButton: profileEditPopupElement.querySelector('.popup__close-button')
}