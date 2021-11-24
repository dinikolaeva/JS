function attachEvents() {
    const loadBtn = document.querySelector('#btnLoad');
    loadBtn.addEventListener('click', onLoadClick);

    const createBtn = document.querySelector('#btnCreate');
    createBtn.addEventListener('click', onCreateClick);

    const ulElement = document.querySelector('#phonebook');

    const getAndPostUrl = 'http://localhost:3030/jsonstore/phonebook';

    async function onLoadClick() {

        ulElement.innerHTML = '';
        const response = await fetch(getAndPostUrl);

        if (!response.ok) {
            const error = await response.json;
            alert(error.message);
            return;
        }

        const data = await response.json();

        Object.values(data).forEach(element => {
            const liElement = e('li', {}, `${element.person}: ${element.phone}`);
            const deleteBtn = e('button', {}, 'Delete');
            liElement.append(deleteBtn);
            ulElement.appendChild(liElement);
            deleteBtn.addEventListener('click', onDeleteClick);
        })
    }

    async function onCreateClick() {
        const person = document.querySelector('#person');
        const phone = document.querySelector('#phone');

        if (person.value == '' || phone.value == '') {
            alert('All fields are required!');
            return;
        }

        const createResponse = await fetch(getAndPostUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person: person.value, phone: phone.value })
        });

        if (!createResponse.ok) {
            const error = await response.json;
            alert(error.message);
            return;
        }

        person.value = '';
        phone.value = '';
    }
}

attachEvents();

async function onDeleteClick(ev) {
    const id = ev.target.parentNode.id;
    ev.target.parentNode.remove();

    const deleteResponse = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: 'delete'
    });

    if (!deleteResponse.ok) {
        const error = await response.json;
        alert(error.message);
        return;
    }
}

//create DOM elements: 
function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}