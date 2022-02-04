//import resetVaidation from "./validate.js";
import Card from "./Card.js";
import { data } from "./CardData.js";
import ProfileEditorPopup from "./ProfileEditorPopup.js";
import CardCreatorPopup from "./CardCreatorPopup.js";
import FormValidator from "./FormValidator.js";

const config = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
}

const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#userCard");
const profileEditForm = document.querySelector(".form_type_profile-edit");
const cardCreatorForm = document.querySelector(".form_type_card-creator");

const cardCreatorPopupElement = document.querySelector(".card-creator-popup");

//const profileEditFormValidator = new FormValidator(config, profileEditForm);
//profileEditFormValidator.enableValidation();

//const cardCreatorFormValidator = new FormValidator(config, cardCreatorForm);
//cardCreatorFormValidator.enableValidation();

//const cardPreviewPopup = new CardPreviewPopup();
//cardPreviewPopup.showInfo();

// const profileEditorPopup = new ProfileEditorPopup(new FormValidator(config, profileEditForm));
// profileEditorPopup.handleOpenButton();
// profileEditorPopup.handleCloseButton();
//profileEditorPopup.showInfo();

const cardCreatorPopup = new CardCreatorPopup(cardCreatorPopupElement);
cardCreatorPopup.handleOpenButton();

const displayCards = () => {
    data.forEach(data => {
        const cardObject = new Card(data, cardTemplate);
        cards.append(cardObject.create());
    });
}

displayCards();

// const openProfilePopupButton = document.getElementById('edit');
// const profilePopup = document.querySelector('.profile-popup');
// const profilePopupForm = profilePopup.querySelector('.form');
// const closeProfilePopupButton = profilePopup.querySelector('.popup__close-button');
// const profileName = document.querySelector('.profile__name');
// const profileAbout = document.querySelector('.profile__about');
// const nameInput = profilePopup.querySelector('.form__input_el_user-name');
// const aboutInput = profilePopup.querySelector('.form__input_el_user-about');


// const cardPopup = document.querySelector(".card-popup");
// const closeCardPopupButton = cardPopup.querySelector(".card-popup__close-button");

// const openCardCreatorPopupButton = document.getElementById("add");
// const cardCreatorPopup = document.querySelector(".card-creator-popup");
// const cardCreatorPopupForm = cardCreatorPopup.querySelector(".form");
// const closeCardCreatorPopupButton = cardCreatorPopup.querySelector(".popup__close-button");
// const cardTitleInput = cardCreatorPopup.querySelector(".form__input_el_card-title");
// const imageLinkInput = cardCreatorPopup.querySelector(".form__input_el_image-link");

// const initialCards = [
//     {
//         name: "Yellowstone National Park",
//         link: "images/yellowstone-national-park.jpg"
//     },
//     {
//         name: "Golden Gate Bridge",
//         link: "images/golden-gate-bridge.jpg"
//     },
//     {
//         name: "Statue Of Liberty",
//         link: "images/statue-of-liberty.jpg"
//     },
//     {
//         name: "Grand Canyon",
//         link: "images/grand-canyon.jpg"
//     },
//     {
//         name: "Washington Monument",
//         link: "images/washington-monument.jpg"
//     },
//     {
//         name: "Mount-Rushmore",
//         link: "images/mount-rushmore.jpg"
//     }
// ];

// const createCard = (cardObject) => {
//     const cardElement = cardTemplate.querySelector(".cards__item").cloneNode(true);
//     const cardImage = cardElement.querySelector(".cards__photo");
//     const cardName = cardElement.querySelector(".cards__name");
//     const cardPopupImage = cardPopup.querySelector(".card-popup__image"); 

//     const cardPopupName = cardPopup.querySelector(".card-popup__name"); 

//     cardImage.src = cardObject.link;
//     cardName.textContent = cardObject.name;
//     cardImage.alt = `Photo of ${cardObject.name}`;

//     cardElement.querySelector(".cards__like-button").addEventListener("click", evt => { 
//         evt.target.classList.toggle("cards__like-button_active"); 
//     }); 

//     cardElement.querySelector(".cards__delete-button").addEventListener("click", evt => { 
//         evt.target.parentElement.remove(); 
//     }); 

//     cardImage.addEventListener("click", () => { 
//         cardPopupImage.src = cardImage.src; 
//         cardPopupName.textContent = cardName.textContent; 
//         cardPopupImage.alt = cardImage.alt; 
//         openPopup(cardPopup); 
//     }); 

//     return cardElement;
// }

// const addCardToEnd = (cardObject) => {
//     cards.append(createCard(cardObject));
// }

// const addCardToBegin = (cardObject) => {
//     cards.prepend(createCard(cardObject));
// }

// const initCardObject = (card) => {
//     const cardObject = {
//         name: card.name,
//         link: card.link,
//         cardTemplate: cardTemplate
//     }
//     return cardObject;
// }

// const displayCards = () => {
//     initialCards.forEach(card => addCardToEnd(initCardObject(card)));
// }

// const handleKeyDown = (evt) => {
//     if(evt.key === "Escape") {
//         const popupElement = document.querySelector(".popup_visible");
//         closePopup(popupElement);
//     }
// }

// const handleRemoteClick = (evt) => {
//     const outsideElement = document.querySelector(".popup__page-overlay");
//     const popupElement = document.querySelector(".popup_visible");

//     if(evt.target.isEqualNode(outsideElement)) {
//         closePopup(popupElement);
//     }
// }

// const openPopup = (popupElement) => {
//     popupElement.classList.add("popup_visible");
//     document.addEventListener("keydown", handleKeyDown);
//     popupElement.addEventListener("click", handleRemoteClick);
// }

// const closePopup = (popupElement) => {
//     popupElement.classList.remove("popup_visible");
//     document.removeEventListener("keydown", handleKeyDown);
//     popupElement.removeEventListener("click", handleRemoteClick);
// }

// const openProfilePopup = () => {
//     nameInput.value = profileName.textContent;
//     aboutInput.value = profileAbout.textContent;
    
//     openPopup(profilePopup);
// }

// const openCardCreatorPopup = () => {
//     openPopup(cardCreatorPopup);

//     cardCreatorPopupForm.reset();

//     cardCreatorFormValidator.resetVaidation();
// }

// const handleProfileFormSubmit = (evt) => {
//     evt.preventDefault();

//     profileName.textContent = nameInput.value;
//     profileAbout.textContent = aboutInput.value;

//     closePopup(profilePopup);
// }

// const handleCardCreatorFormSubmit = (evt) => {
//     evt.preventDefault();

//     const cardElement = {
//         name: cardTitleInput.value,
//         link: imageLinkInput.value
//     }
    
//     addCardToBegin(cardElement);
//     closePopup(cardCreatorPopup);
// }

// displayCards();

// closeCardPopupButton.addEventListener("click", () => closePopup(cardPopup));

// openProfilePopupButton.addEventListener('click', openProfilePopup);
// closeProfilePopupButton.addEventListener('click', () => closePopup(profilePopup));
// profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

// openCardCreatorPopupButton.addEventListener("click", openCardCreatorPopup);
// closeCardCreatorPopupButton.addEventListener("click", () => closePopup(cardCreatorPopup));
// cardCreatorPopupForm.addEventListener("submit", handleCardCreatorFormSubmit);