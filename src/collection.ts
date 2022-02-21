export class Collection<T>{
    constructor(private items: T[]) {

    }
    add(item: T): this {
       this.items.push(item);
       return this;
    }
    first(): T | string {
        return this.items[0] ?? "no items";
    }
}