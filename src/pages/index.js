import "./index.css";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidator from "../utils/FormValidator.js";
import { 
    profileInfoElements, 
    cardPreviewPopupElements, 
    cardCreatorPopupElements, 
    profileEditPopupElements,
    cardGrid,
    config,
    confirmPopupElements,
    formValidators,
    profileAvatarEditPopupElements
} from "../utils/constants";


import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import ConfirmPopup from "../components/ConfirmPopup";
import Api from "../utils/Api";

const { profileName, profileAbout, profileAvatar } = profileInfoElements;

const { cardPreviewPopup } = cardPreviewPopupElements;

const { popupConfirmElement } = confirmPopupElements;

const { 
    cardCreatorPopupElement,
    openCardCreatorPopupButton,

} = cardCreatorPopupElements;

const {
    profileEditPopupElement, 
    profileNameInput, 
    profileAboutInput,
    openProfileEditPopupButton,

} = profileEditPopupElements;

const { 
    profileAvatarEditPopupElement,
    openProfileAvatarEditPopupButton

} = profileAvatarEditPopupElements

let userId;

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "21827e70-d261-4f64-a3bc-4b52f52216ed",
        "Content-Type": "application/json",
    }
});

api.initAllPromise()
.then(([cards, user]) => {
  userInfo.setUserInfo({name: user.name, job: user.about, id: user._id});
  userInfo.setUserAvatar(user.avatar);
  userId = user._id;
})

api.getUserInfo()
    .then(res => {
        userInfo.setUserInfo({name: res.name, about: res.about});
    })

api.getInitialCards()
    .then(res => {
        console.log(res);
        cardList.renderItems(res);
    });

const enableValidation = () =>  {
    const formList = [...document.querySelectorAll(config.formSelector)];
    formList.forEach(form => {
        const validator = new FormValidator(config, form);
        const formName = form.getAttribute("name");
        formValidators[formName] = validator;
        validator.enableValidation();
    });
}

const userInfo = new UserInfo({
    userNameElement: profileName,
    userAboutElement: profileAbout,
    userAvatarElement: profileAvatar 
});

const popupImagePreview = new PopupWithImage(cardPreviewPopup);
const popupConfirm = new ConfirmPopup(popupConfirmElement);

const cardList = new Section({
    renderer: (item) => {
        cardList.addItemToEnd(createCard(item));
    }
}, cardGrid);

const createCard = (data) => {
    const card = new Card({
        data, 
        handleCardClick: () => {
            popupImagePreview.open(data);
        },
        handleDeleteCard: () => {
            popupConfirm.open();

            popupConfirm.setAction(() => {
                api.deleteCard(data._id)
                    .then(() => {
                        card.delete();
                        popupConfirm.close();
                    });
            });
        },
        handleLikeCard: () => {
            debugger
            const hasLike = card.isLiked();

            if(hasLike) {
                api.dislikeCard(data._id)
                    .then(res => {
                        card.updateLikes(res.likes);
                    });
            } else {
                api.likeCard(data._id)
                    .then(res => {
                        card.updateLikes(res.likes);
                    });
            }
        }
    }, "#userCard", userId);
    
    return card.create();
}

const cardCreatorPopup = new PopupWithForm({
    popupElement: cardCreatorPopupElement,
    handleFormSubmit: (data, button) => {
        api.uploadCard(data)
            .then(() => {
                cardList.addItemToBegin(createCard(data));
                cardCreatorPopup.close();
            })
            .finally((setTimeout(() => {
                button.textContent = "Create";
            }, 1000)));
    }
});

const profileEditPopup = new PopupWithForm({
    popupElement: profileEditPopupElement,
    handleFormSubmit: (data, button) => {
        api.uploadUserInfo(data)
            .then(() => {
                userInfo.setUserInfo(data);
                profileEditPopup.close();
            })
            .finally((setTimeout(() => {
                button.textContent = "Save";
            }, 1000)));
    }
})

const profileAvatarEditPopup = new PopupWithForm({
    popupElement: profileAvatarEditPopupElement,
    handleFormSubmit: (data, button) => {
        api.uploadProfileAvatar(data.link)
            .then(() => {
                userInfo.setUserAvatar(data.link);
                profileAvatarEditPopup.close();
            })
            .finally((setTimeout(() => {
                button.textContent = "Save";
            }, 1000)));
    }
})

enableValidation();

openCardCreatorPopupButton.addEventListener("click", () => {
    formValidators["cardCreatorForm"].resetValidation();
    formValidators["cardCreatorForm"].resetFormInputs();
    cardCreatorPopup.open();
});

openProfileEditPopupButton.addEventListener("click", () => {
    formValidators["profileEditForm"].resetValidation();
    const data = userInfo.getUserInfo();
    profileEditPopup.open();

    profileNameInput.value = data.profileName;
    profileAboutInput.value = data.profileAbout;
});

openProfileAvatarEditPopupButton.addEventListener("click", () => {
    formValidators["profileAvatarEditForm"].resetValidation();
    formValidators["profileAvatarEditForm"].resetFormInputs();
    profileAvatarEditPopup.open();
});