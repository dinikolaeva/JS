import { html } from './node_modules/lit-html/lit-html.js';

const card = (data) => html `
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${onClick} class="detailsBtn">Details</button>
        <div class="details" id=${data.id}>
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>`;

function onClick(event) {

    const parentElement = event.target.parentNode;
    const currentStyle = parentElement.querySelector('.details').style.display;

    if (currentStyle == 'none') {
        parentElement.querySelector('.details').style.display = 'block';
    } else {
        parentElement.querySelector('.details').style.display = 'none';
    }
}

export default card;