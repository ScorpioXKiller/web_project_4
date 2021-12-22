let openPopupBtn = document.getElementById('edit');
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let closeFormBtn = popup.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let nameInput = popup.querySelector('.popup__item_el_user-name');
let aboutInput = popup.querySelector('.popup__item_el_user-about');

let openPopup = () => {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;

    popup.classList.toggle('popup_visible');
}

let closePopup = () => {
    popup.classList.toggle('popup_visible');
}

function handleProfileFormSubmit(evt){
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    
    closePopup();
}

openPopupBtn.addEventListener('click', openPopup);
closeFormBtn.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleProfileFormSubmit);