import { render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';
import card from './card.js';

const divElement = document.querySelector('#contacts');
const result = contacts.map(card);
render(result, divElement);