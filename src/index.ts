import hello from './hello.js';
import { User } from './user.js';
import { Collection } from './collection.js';


function ifTitleNull(): HTMLElement {
    var newTitle = document.createElement('div');
    newTitle.setAttribute('id', 'title');
    document.body.insertAdjacentElement('afterbegin', newTitle);
    return document.getElementById('title')!;
}
var title = document.getElementById('title') ?? ifTitleNull();
title.innerText = hello() ?? 'Welcome';
let user = new User("Clementine", "Digny");
var name = user.getFullName();
var displayName = document.getElementById('firstname');
var items = new Collection([98]);
items.add(87);
var first = items.first();
var item = document.getElementById('items');
item!.innerText = first.toString();
displayName!.innerText = name;

