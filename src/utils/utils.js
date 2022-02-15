import { cardCreatorPopupElements, profileEditPopupElements, profileInfoElements } from "./constants.js";

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
