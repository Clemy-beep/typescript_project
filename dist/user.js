var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_firstname, _User_lastname;
export class User {
    constructor(firstname, lastname) {
        _User_firstname.set(this, void 0);
        _User_lastname.set(this, void 0);
        __classPrivateFieldSet(this, _User_firstname, firstname, "f");
        __classPrivateFieldSet(this, _User_lastname, lastname, "f");
    }
    getFirstName() {
        return __classPrivateFieldGet(this, _User_firstname, "f");
    }
    setFirstName(firstname) {
        __classPrivateFieldSet(this, _User_firstname, firstname, "f");
        return __classPrivateFieldGet(this, _User_firstname, "f");
    }
    getLastName() {
        return __classPrivateFieldGet(this, _User_lastname, "f");
    }
    setLastName(lastname) {
        __classPrivateFieldSet(this, _User_lastname, lastname, "f");
        return __classPrivateFieldGet(this, _User_lastname, "f");
    }
    getFullName() {
        return `${__classPrivateFieldGet(this, _User_firstname, "f")} ${__classPrivateFieldGet(this, _User_lastname, "f")}`;
    }
}
_User_firstname = new WeakMap(), _User_lastname = new WeakMap();
//# sourceMappingURL=user.js.map