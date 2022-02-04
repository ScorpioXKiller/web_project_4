import { data } from "./CardData.js";
import Card from "./Card.js";

class CardViewer {
    constructor() {
        this._cards = document.querySelector(".cards");
        this._cardTemplate = document.querySelector("#userCard");
    }

    displayCards = () => {
        data.forEach(data => {
            const cardObject = new Card(data, this._cardTemplate);
            this._cards.append(cardObject.create());
        });
    }
}

export default CardViewer;