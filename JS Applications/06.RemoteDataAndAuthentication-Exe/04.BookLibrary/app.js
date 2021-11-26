document.getElementById('loadBooks').addEventListener('click', onClickLoad);
const form = document.querySelector('form');
form.addEventListener('submit', onSubmitLoad);

const url = 'http://localhost:3030/jsonstore/collections/books';
const table = document.querySelector('tbody');

async function onClickLoad(event) {
    event.preventDefault();
    table.innerHTML = '';

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json;
        alert(error.message);
        return;
    }

    const books = await response.json();

    Object.entries(books).forEach(b => {
        const id = b[0];
        const author = b[1].author;
        const title = b[1].title;

        createRowInTable(id, title, author);
    });
}

async function onSubmitLoad(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const id = formData.get('id');
    const title = formData.get('title');
    const author = formData.get('author');

    if (title == '' || author == '') {
        alert('All fields are reqired!');
        return;
    }

    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: author, title: title })
    });

    if (!response.ok) {
        const error = await response.json;
        alert(error.message);
        return;
    }

    createRowInTable(id, title, author);

    const inputField = Array.from(event.target);
    inputField.forEach(e => e.value = '');

    onClickLoad();
}

async function onEditClick(ev) {
    ev.preventDefault();

    const idToEdit = ev.target.id;
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${idToEdit}`);
    const book = await response.json();

    const titleField = document.getElementsByName('title')[0];
    titleField.value = book.title;
    const authorField = document.getElementsByName('author')[0];
    authorField.value = book.author;

    const form = document.querySelector('form');
    form.querySelector('h3').textContent = 'Edit FORM';
    form.querySelector('button').textContent = 'Save';

    form.setAttribute('id', idToEdit);
    form.removeEventListener('submit', onSubmitLoad);
    form.addEventListener('submit', onFormSave);

    onClickLoad();
}

async function onFormSave(event) {
    event.preventDefault();
    const idToEdit = event.target.id;

    let updateTitle = document.getElementsByName('title')[0].value;
    let updateAuthor = document.getElementsByName('author')[0].value;

    if (updateTitle == '' || updateAuthor == '') {
        alert('All fields are reqired!');
        return;
    }

    let updateBook = { title: updateTitle, author: updateAuthor };

    const update = await fetch(`http://localhost:3030/jsonstore/collections/books/${idToEdit}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateBook)
    });

    onClickLoad()

    const form = document.querySelector('form');
    form.querySelector('h3').textContent = 'FORM';
    form.querySelector('button').textContent = 'Submit';
    document.getElementsByName('title')[0].value = '';
    document.getElementsByName('author')[0].value = '';
}

async function onDeleteClick(event) {
    const idToDelete = event.target.id;
    event.target.parentNode.parentNode.remove();
    const deleteBook = await fetch(`http://localhost:3030/jsonstore/collections/books/${idToDelete}`, {
        method: 'delete'
    });

    onClickLoad();
}

//create row in table:
function createRowInTable(id, title, author) {

    const table = document.querySelector('tbody');
    const tr = e('tr', {});

    const authorCell = tr.insertCell(0);
    authorCell.innerText = author;

    const titleCell = tr.insertCell(1);
    titleCell.innerText = title;

    const actionCell = tr.insertCell(2);
    authorCell.innerText = author;

    const editBtn = e('button', { id: `${id}` }, 'Edit');
    const deleteBtn = e('button', { id: `${id}` }, 'Delete');


    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);

    tr.appendChild(titleCell);
    tr.appendChild(authorCell);
    tr.appendChild(actionCell);

    table.appendChild(tr);

    editBtn.addEventListener('click', onEditClick);
    deleteBtn.addEventListener('click', onDeleteClick);
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