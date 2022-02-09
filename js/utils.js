import { cardCreatorPopupElements, profileEditPopupElements, profileInfoElements } from "./constants.js";

const handleKeyDown = (evt) => {
    if(evt.key === "Escape") {
        const popupElement = document.querySelector(".popup_visible");
        closePopup(popupElement);
    }
}

const handleRemoteClick = (evt) => {
    if(evt.target.classList.contains("popup__page-overlay")) {
        const popupElement = evt.target.closest('.popup');
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