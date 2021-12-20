let openFormBtn = document.getElementById('edit');
let popup = document.querySelector('.popup');
let saveFormBtn = popup.querySelector('.popup__save-button');
let closeFormBtn = popup.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let nameInput = popup.querySelector('.popup__item_el_user-name');
let aboutInput = popup.querySelector('.popup__item_el_user-about');

let openForm = () => {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;

    popup.classList.toggle('popup_visible');
}

let closeForm = () => {
    popup.classList.toggle('popup_visible');
}

function handleProfileFormSubmit(evt){
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    
    closeForm();
}

openFormBtn.addEventListener('click', openForm);
saveFormBtn.addEventListener('click', handleProfileFormSubmit);
closeFormBtn.addEventListener('click', closeForm);