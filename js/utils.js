import { cardCreatorPopupElements, profileEditPopupElements, profileInfoElements } from "./constants.js";

const handleKeyDown = (evt) => {
    if(evt.key === "Escape") {
        const popupElement = document.querySelector(".popup_visible");
        closePopup(popupElement);
    }
}

const handleRemoteClick = (evt) => {
    const outsideElement = document.querySelector(".popup__page-overlay");
    const popupElement = document.querySelector(".popup_visible");

    if(evt.target.isEqualNode(outsideElement)) {
        closePopup(popupElement);
    }
}

export const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();

    const { profileName, profileAbout } = profileInfoElements;
    const { profileEditPopup, profileNameInput, profileAboutInput} = profileEditPopupElements;

    profileName.textContent = profileNameInput.value;
    profileAbout.textContent = profileAboutInput.value;

    closePopup(profileEditPopup);
}

export const handleCardCreatorFormSubmit = (evt) => {
    evt.preventDefault();

    const { cardCreatorPopup } = cardCreatorPopupElements;

    closePopup(cardCreatorPopup);
}

export const openPopup = (popupElement) => {
    popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", handleKeyDown);
    popupElement.addEventListener("click", handleRemoteClick);
}

export const closePopup = (popupElement) => {
    popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", handleKeyDown);
    popupElement.addEventListener("click", handleRemoteClick);
}