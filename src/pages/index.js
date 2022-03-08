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
    profileAvatarEditPopupElements,
    formElements
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

const {
    profileEditForm,
    profileAvatarEditForm,
    cardCreatorForm

} = formElements;

const cardList = new Section({
    renderer: (item) => {
        const ownerId = item.owner._id;
        const isOwner = item.owner._id == userInfo.getUserId();
        const cardId = item._id;
        cardList.addItemToEnd(createCard(item, isOwner, cardId, ownerId));
    }
}, cardGrid);

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "21827e70-d261-4f64-a3bc-4b52f52216ed",
        "Content-Type": "application/json",
    }
});

api.getInitialData()
.then(([cards, user]) => {
    userInfo.setUserInfo({name: user.name, about: user.about, id: user._id});
    userInfo.setUserAvatar(user.avatar);
    cardList.renderItems(cards);
    console.log(cards);
})
.catch(err => console.log(`Error: ${err}`));

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

const createCard = (data, isOwner, id, ownerId) => {
    const card = new Card({
        data, isOwner, id, ownerId, 

        handleCardClick: () => {
            popupImagePreview.open(data);
        },

        handleDeleteCard: () => {
            popupConfirm.open();

            popupConfirm.handleSubmit(() => {
                api.deleteCard(id)
                    .then(() => {
                        card.delete();
                        popupConfirm.close();
                    })
                    .catch(err => console.log(`Error with a deleting card: ${err}`));
            });
        },

        handleLikeCard: () => {
            const hasLike = card.isLiked();

            if(hasLike) {
                api.dislikeCard(id)
                    .then(res => {
                        card.updateLikes(res.likes);
                    })
                    .catch(err => console.log(`Error with a removing like: ${err}`));
            } else {
                api.likeCard(id)
                    .then(res => {
                        card.updateLikes(res.likes);
                    })
                    .catch(err => console.log(`Error with an ading like: ${err}`));
            }
        }
        
    }, "#userCard", userInfo.getUserId());
    
    return card.create();
}

const cardCreatorPopup = new PopupWithForm({
    popupElement: cardCreatorPopupElement,
    handleFormSubmit: (data) => {
        api.uploadCard(data)
            .then(res => {
                cardList.addItemToBegin(createCard(data, true, res._id));
                cardCreatorPopup.close();
            })
            .catch(err => console.log(`Error with a creating card: ${err}`))
            .finally(() => {
                profileEditPopup.resetButtonText("Create");
            });
    }
});

const profileEditPopup = new PopupWithForm({
    popupElement: profileEditPopupElement,
    handleFormSubmit: (data) => {
        api.uploadUserInfo(data)
            .then(() => {
                userInfo.setUserInfo(data);
                profileEditPopup.close();
            })
            .catch(err => console.log(`Error with an editing profile: ${err}`))
            .finally(() => {
                profileEditPopup.resetButtonText("Save");
            });
    }
})

const profileAvatarEditPopup = new PopupWithForm({
    popupElement: profileAvatarEditPopupElement,
    handleFormSubmit: (data) => {
        api.uploadProfileAvatar(data.link)
            .then(() => {
                userInfo.setUserAvatar(data.link);
                profileAvatarEditPopup.close();
            })
            .catch(err => console.log(`Error with an editing profile avatar: ${err}`))
            .finally(() => {
                profileAvatarEditPopup.resetButtonText("Save");
            });
    }
})

enableValidation();

openCardCreatorPopupButton.addEventListener("click", () => {
    formValidators[cardCreatorForm.getAttribute("name")].resetValidation();
    formValidators[cardCreatorForm.getAttribute("name")].resetFormInputs();
    cardCreatorPopup.open();
});

openProfileEditPopupButton.addEventListener("click", () => {
    formValidators[profileEditForm.getAttribute("name")].resetValidation();
    const data = userInfo.getUserInfo();
    profileEditPopup.open();

    profileNameInput.value = data.profileName;
    profileAboutInput.value = data.profileAbout;
});

openProfileAvatarEditPopupButton.addEventListener("click", () => {
    formValidators[profileAvatarEditForm.getAttribute("name")].resetValidation();
    formValidators[profileAvatarEditForm.getAttribute("name")].resetFormInputs();
    profileAvatarEditPopup.open();
});