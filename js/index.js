let editFormBtn = document.getElementById('edit');
let pageOverlay = document.querySelector('.page__overlay');
let popup = document.querySelector('.popup');
let closeFormBtn = popup.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let nameInput = popup.querySelector('.popup__item_el_user-name');
let aboutInput = popup.querySelector('.popup__item_el_user-about');

let openForm = () => {
    popup.style.display = "block";
}

let closeForm = () => {
    popup.style.display = "none";
}

let enablePageOverlay = () => {
    pageOverlay.style.display = "block";
}

let disablePageOverlay = () => {
    pageOverlay.style.display = "none";
}

function handleProfileFormSubmit(evt){
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
}

function tuggleForm(){
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

editFormBtn.addEventListener('click', openForm);
editFormBtn.addEventListener('click', enablePageOverlay);

closeFormBtn.addEventListener('click', closeForm);
closeFormBtn.addEventListener('click', disablePageOverlay);

tuggleForm();
popup.addEventListener('submit', handleProfileFormSubmit);