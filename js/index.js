import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { profileInfoElements, cardPreviewPopupElements, cardCreatorPopupElements, profileEditPopupElements, cardTemplate, cardGrid } from "./constants.js";
import { openPopup, closePopup, handleProfileFormSubmit, handleCardCreatorFormSubmit } from "./utils.js";

const config = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
}

const initialCards = [
    {
        name: "Yellowstone National Park",
        link: "images/yellowstone-national-park.jpg"
    },
    {
        name: "Golden Gate Bridge",
        link: "images/golden-gate-bridge.jpg"
    },
    {
        name: "Statue Of Liberty",
        link: "images/statue-of-liberty.jpg"
    },
    {
        name: "Grand Canyon",
        link: "images/grand-canyon.jpg"
    },
    {
        name: "Washington Monument",
        link: "images/washington-monument.jpg"
    },
    {
        name: "Mount-Rushmore",
        link: "images/mount-rushmore.jpg"
    }
];

const { profileName, profileAbout } = profileInfoElements;

const { cardPreviewPopup, closeCardPreviewPopupButton } = cardPreviewPopupElements;

const { 
    cardCreatorPopup,
    cardCreatorPopupForm, 
    cardTitleInput, 
    cardLinkInput, 
    openCardCreatorPopupButton,
    closeCardCreatorPopupButton

} = cardCreatorPopupElements;

const {
    profileEditPopup, 
    profileEditPopupForm, 
    profileNameInput, 
    profileAboutInput,
    openProfileEditPopupButton,
    closeProfileEditPopupButton

} = profileEditPopupElements;

const displayInitCards = () => {
    initialCards.forEach(data => {
        const card = new Card(data, cardTemplate);
        cardGrid.append(card.create());
    });
}

const displayNewCard = () => {
    const data = {
        name: cardTitleInput.value,
        link: cardLinkInput.value
    }

    const card = new Card(data, cardTemplate);
    cardGrid.prepend(card.create());
}

const initProfilePopup = () => {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent;
    
    openPopup(profileEditPopup);

    profileEditFormValidator.resetVaidation()
}

const initCardCreatorPopup = () => {
    openPopup(cardCreatorPopup);

    cardCreatorFormValidator.resetForm();
    cardCreatorFormValidator.resetVaidation();
}

const profileEditFormValidator = new FormValidator(config, profileEditPopupForm);
profileEditFormValidator.enableValidation();

const cardCreatorFormValidator = new FormValidator(config, cardCreatorPopupForm);
cardCreatorFormValidator.enableValidation();


displayInitCards();

closeCardPreviewPopupButton.addEventListener("click", () => closePopup(cardPreviewPopup));

openProfileEditPopupButton.addEventListener('click', initProfilePopup);
closeProfileEditPopupButton.addEventListener('click', () => closePopup(profileEditPopup));
profileEditPopupForm.addEventListener('submit', handleProfileFormSubmit);

openCardCreatorPopupButton.addEventListener("click", initCardCreatorPopup);
closeCardCreatorPopupButton.addEventListener("click", () => closePopup(cardCreatorPopup));
cardCreatorPopupForm.addEventListener("submit", evt => {
    handleCardCreatorFormSubmit(evt);
    displayNewCard();
});
