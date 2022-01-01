const openProfilePopupBtn = document.getElementById('edit');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const closeProfilePopupBtn = profilePopup.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = profilePopup.querySelector('.popup__item_el_user-name');
const aboutInput = profilePopup.querySelector('.popup__item_el_user-about');

const cards = document.querySelector(".cards");
const cardPopup = document.querySelector(".card-popup");
const closeCardPopupBtn = cardPopup.querySelector(".card-popup__close-button");

const openCardCreatorPopupBtn = document.getElementById("add");
const cardCreatorPopup = document.querySelector(".card-creator-popup");
const cardCreatorPopupForm = cardCreatorPopup.querySelector(".popup__form");
const closeCardCreatorPopupBtn = cardCreatorPopup.querySelector(".popup__close-button");
const cardTitleInput = cardCreatorPopup.querySelector(".popup__item_el_card-title");
const imageLinkInput = cardCreatorPopup.querySelector(".popup__item_el_image-link");

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


const renderCards = () => {
    initialCards.forEach(card => addCardToEnd(card));
}

const addCardToEnd = (cardObj) => {
    cards.append(createCard(cardObj));
}

const addCardToBegin = (cardObj) => {
    cards.prepend(createCard(cardObj));
}

const createCard = (cardObj) => {
    const cardElement = cardTemplate.querySelector(".cards__item").cloneNode(true);
    const cardImage = cardElement.querySelector(".cards__photo");
    const cardName = cardElement.querySelector(".cards__name");
    const cardPopupImage = cardPopup.querySelector(".card-popup__image");
    const cardPopupName = cardPopup.querySelector(".card-popup__name");

    cardImage.src = cardObj.link;
    cardName.textContent = cardObj.name;
    cardImage.alt = `Photo of ${cardObj.name}`;

    cardElement.querySelector(".cards__like-button").addEventListener("click", evt => {
        evt.target.classList.toggle("cards__like-button_active");
    });

    cardElement.querySelector(".cards__delete-button").addEventListener("click", evt => {
        evt.target.parentElement.remove();
    });

    cardImage.addEventListener("click", () => {
        cardPopupImage.src = cardImage.src;
        cardPopupName.textContent = cardName.textContent;
        cardPopupImage.alt = cardImage.alt;
        openPopup(cardPopup);
    });

    return cardElement;
}

const openPopup = (element) => {
    element.classList.toggle("popup_visible");
}

const closePopup = (element) => {
    element.classList.toggle("popup_visible");
}

const openProfilePopup = () => {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    openPopup(profilePopup);
}

function handleProfileFormSubmit(evt){
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

renderCards();

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