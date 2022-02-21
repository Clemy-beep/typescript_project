export class User {
    #firstname: string;
    #lastname: string;

    constructor(firstname: string, lastname: string) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    getFirstName(): string {
        return this.#firstname;
    }
    setFirstName(firstname: string) {
        this.#firstname = firstname;
        return this.#firstname;
    }

    getLastName(): string {
        return this.#lastname;
    }
    setLastName(lastname: string) {
        this.#lastname = lastname;
        return this.#lastname;
    }

    getFullName(): string {
        return `${this.#firstname} ${this.#lastname}`;
    }
}