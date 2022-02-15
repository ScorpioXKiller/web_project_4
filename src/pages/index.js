import "./index.css";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { 
    profileInfoElements, 
    cardPreviewPopupElements, 
    cardCreatorPopupElements, 
    profileEditPopupElements,
    initialCards,
    cardGrid,
    config
} from "../utils/constants";


import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";

const { profileName, profileAbout } = profileInfoElements;

const { cardPreviewPopup } = cardPreviewPopupElements;

const { 
    cardCreatorPopupElement,
    cardCreatorPopupForm, 
    openCardCreatorPopupButton,

} = cardCreatorPopupElements;

const {
    profileEditPopupElement, 
    profileEditPopupForm, 
    profileNameInput, 
    profileAboutInput,
    openProfileEditPopupButton,

} = profileEditPopupElements;

const profileEditFormValidator = new FormValidator(config, profileEditPopupForm);
profileEditFormValidator.enableValidation();

const cardCreatorFormValidator = new FormValidator(config, cardCreatorPopupForm);
cardCreatorFormValidator.enableValidation();

const userInfo = new UserInfo({
    userNameElement: profileName,
    userAboutElement: profileAbout
});

const popupImagePreview = new PopupWithImage(cardPreviewPopup);

const createCard = (data) => {
    const card = new Card({
        data, 
        handleCardClick: () => {
            popupImagePreview.open(data);
        }
    }, "#userCard");
    
    const cardElement = card.create();
    return cardElement;
}

const cardCreatorPopup = new PopupWithForm({
    popupElement: cardCreatorPopupElement,
    handleFormSubmit: (data) => {
        cardList.addItemToBegin(createCard(data));
    }
});

const profileEditPopup = new PopupWithForm({
    popupElement: profileEditPopupElement,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
})

const cardList = new Section({
    items: initialCards, 
    renderer: (data) => {
        cardList.addItemToEnd(createCard(data));
    }
}, cardGrid);

cardList.renderItems();

openCardCreatorPopupButton.addEventListener("click", () => {
    cardCreatorFormValidator.resetValidation();
    cardCreatorFormValidator.resetForm();
    cardCreatorPopup.open();
});

openProfileEditPopupButton.addEventListener("click", () => {
    profileEditFormValidator.resetValidation();
    const data = userInfo.getUserInfo();
    profileEditPopup.open();

    profileNameInput.value = data.profileName;
    profileAboutInput.value = data.profileAbout;
});