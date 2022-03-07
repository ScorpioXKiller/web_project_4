import Popup from "./Popup";
import { cardPreviewPopupElements } from "../utils/constants";

class PopupWithImage extends Popup {
    open = (data) => {
        const { name, link } = data;
        const { cardPreviewPopupTitle, cardPreviewPopupImage } = cardPreviewPopupElements;

        cardPreviewPopupTitle.textContent = name;
        cardPreviewPopupImage.src = link;
        cardPreviewPopupImage.alt = `Photo of ${link}`;
        
        super.open();
    }
}

export default PopupWithImage;