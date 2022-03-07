class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems(renderItems) {
        renderItems.forEach(item => {
            this._renderer(item);
        });
    }

    addItemToEnd(element) {
        this._container.append(element);
    }

    addItemToBegin(element) {
        this._container.prepend(element);
    }
}

export default Section;