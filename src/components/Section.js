class Section {
    constructor(data, containerSelector) {
        const { items, renderer } = data;
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._renderedItems.forEach(data => {
            this._renderer(data);
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