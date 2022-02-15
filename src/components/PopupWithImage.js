import Popup from "./Popup";
import { cardPreviewPopupElements } from "../utils/constants";

class PopupWithImage extends Popup {
    open = (data) => {
        const { cardTitle, cardLink } = data;
        const { cardPreviewPopupTitle, cardPreviewPopupImage } = cardPreviewPopupElements;

        cardPreviewPopupTitle.textContent = cardTitle;
        cardPreviewPopupImage.src = cardLink;
        cardPreviewPopupImage.alt = `Photo of ${cardTitle}`;
        
        super.open();
    }
}

export default PopupWithImage;