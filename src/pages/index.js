import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { profileInfoElements, cardPreviewPopupElements, cardCreatorPopupElements, profileEditPopupElements, cardTemplate, cardGrid } from "../utils/constants";
import { openPopup, closePopup, handleProfileFormSubmit, handleCardCreatorFormSubmit } from "../utils/utils";

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
        link: new URL("../images/yellowstone-national-park.jpg", import.meta.url)
    },
    {
        name: "Golden Gate Bridge",
        link: new URL("../images/golden-gate-bridge.jpg", import.meta.url)
    },
    {
        name: "Statue Of Liberty",
        link: new URL("../images/statue-of-liberty.jpg", import.meta.url)
    },
    {
        name: "Grand Canyon",
        link: new URL("../images/grand-canyon.jpg", import.meta.url)
    },
    {
        name: "Washington Monument",
        link: new URL("../images/washington-monument.jpg", import.meta.url)
    },
    {
        name: "Mount-Rushmore",
        link: new URL("../images/mount-rushmore.jpg", import.meta.url)
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

const initCard = (data) => {
    const card = new Card(data, cardTemplate);
    return card;
}

const displayInitCards = () => {
    initialCards.forEach(data => {
        cardGrid.append(initCard(data).create());
    });
}

const displayNewCard = () => {
    const data = {
        name: cardTitleInput.value,
        link: cardLinkInput.value
    }

    cardGrid.prepend(initCard(data).create());
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
