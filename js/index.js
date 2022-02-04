import CardViewer from "./CardViewer.js";
import ProfileEditorPopup from "./Popups/ProfileEditorPopup.js";
import CardCreatorPopup from "./Popups/CardCreatorPopup.js";

const cardCreatorPopupElement = document.querySelector(".card-creator-popup");
const profileEditorPopupElement = document.querySelector(".profile-popup");

const cardViewer = new CardViewer();
cardViewer.displayCards();

const profileEditorPopup = new ProfileEditorPopup(profileEditorPopupElement);
profileEditorPopup.handleOpenButton();
profileEditorPopup.handleSubmitButton();

const cardCreatorPopup = new CardCreatorPopup(cardCreatorPopupElement);
cardCreatorPopup.handleOpenButton();
cardCreatorPopup.handleCreateButton();