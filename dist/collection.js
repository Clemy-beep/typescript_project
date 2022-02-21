export class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] ?? "no items";
    }
}
//# sourceMappingURL=collection.js.map