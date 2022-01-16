import resetVaidation from "./validate.js";

const openProfilePopupBtn = document.getElementById('edit');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupForm = profilePopup.querySelector('.form');
const closeProfilePopupBtn = profilePopup.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = profilePopup.querySelector('.form__input_el_user-name');
const aboutInput = profilePopup.querySelector('.form__input_el_user-about');

const cards = document.querySelector(".cards");
const cardPopup = document.querySelector(".card-popup");
const closeCardPopupBtn = cardPopup.querySelector(".card-popup__close-button");

const openCardCreatorPopupBtn = document.getElementById("add");
const cardCreatorPopup = document.querySelector(".card-creator-popup");
const cardCreatorPopupForm = cardCreatorPopup.querySelector(".form");
const closeCardCreatorPopupBtn = cardCreatorPopup.querySelector(".popup__close-button");
const cardTitleInput = cardCreatorPopup.querySelector(".form__input_el_card-title");
const imageLinkInput = cardCreatorPopup.querySelector(".form__input_el_image-link");

const cardTemplate = document.querySelector("#userCard").content;

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


const displayCards = () => {
    initialCards.forEach(card => addCardToEnd(initCardObject(card)));
}

const addCardToEnd = (cardObj) => {
    cards.append(createCard(cardObj));
}

const addCardToBegin = (cardObj) => {
    cards.prepend(createCard(cardObj));
}

const initCardObject = (cardObj) => {
    const cardObject = {
        name: cardObj.name,
        link: cardObj.link,
        cardTemplate: cardTemplate
    }
    return cardObject;
}

const createCard = (cardObj) => {
    const cardElement = cardTemplate.querySelector(".cards__item").cloneNode(true);
    const cardImage = cardElement.querySelector(".cards__photo");
    const cardName = cardElement.querySelector(".cards__name");

    cardImage.src = cardObj.link;
    cardName.textContent = cardObj.name;
    cardImage.alt = `Photo of ${cardObj.name}`;

    return cardElement;
}

const closePopupByKey = (evt, popupElement) => {
    if(evt.key === "Escape") {
        closePopup(popupElement);
        window.removeEventListener("keydown", evt => closePopupByKey(evt, popupElement));
    }
}

const openPopup = (popupElement) => {
    popupElement.classList.add("popup_visible");
    window.addEventListener("keydown", evt => closePopupByKey(evt, popupElement));
}

const closePopup = (popupElement) => {
    resetVaidation(popupElement);
    popupElement.classList.remove("popup_visible");
}

const openCardPopup = (card) => {
    const cardPopupImage = cardPopup.querySelector(".card-popup__image");
    const cardPopupName = cardPopup.querySelector(".card-popup__name");

    cardPopupImage.src = card.src;
    cardPopupName.textContent = card.parentElement.lastElementChild.firstElementChild.textContent;
    cardPopupImage.alt = card.alt;
    openPopup(cardPopup);
}

const openProfilePopup = () => {
    openPopup(profilePopup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;

    closePopup(profilePopup);
}

function handleCardCreatorFormSubmit(evt) {
    evt.preventDefault();
    addCardToBegin({name: cardTitleInput.value, link: imageLinkInput.value});
    closePopup(cardCreatorPopup);
}

const closePopupByClickOnOverlay = () => {
    const overlayList = Array.from(document.querySelectorAll(".popup__page-overlay"));
    overlayList.forEach(overlay => {
        overlay.addEventListener("click", () => {
            closePopup(overlay.parentElement);
        });
    });
}

displayCards();

cards.addEventListener("click", evt => {
    if(evt.target.classList.contains("cards__like-button")){
        evt.target.classList.toggle("cards__like-button_active");
    }else if(evt.target.classList.contains("cards__delete-button")){
        evt.target.parentElement.remove();
    }else if(evt.target.classList.contains("cards__photo")){
        openCardPopup(evt.target);
    }
});

closeCardPopupBtn.addEventListener("click", () => closePopup(cardPopup));

openProfilePopupBtn.addEventListener('click', openProfilePopup);
closeProfilePopupBtn.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

openCardCreatorPopupBtn.addEventListener("click", () => {
    openPopup(cardCreatorPopup);
    cardTitleInput.form.reset()
    imageLinkInput.form.reset();
});

closeCardCreatorPopupBtn.addEventListener("click", () => closePopup(cardCreatorPopup));
cardCreatorPopupForm.addEventListener("submit", handleCardCreatorFormSubmit);
closePopupByClickOnOverlay();