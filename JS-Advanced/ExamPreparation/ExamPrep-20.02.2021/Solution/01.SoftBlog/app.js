function solve() {
    const createBtn = document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');
    createBtn.addEventListener('click', onClickCreate);


    function onClickCreate(ev) {
        ev.preventDefault();

        const author = document.querySelector('#creator');
        const title = document.querySelector('#title');
        const category = document.querySelector('#category');
        const content = document.querySelector('#content');

        const articlePlace = document.querySelector('body > div > div > main > section');

        const article = e('article', {},
            e('h1', {}, `${title.value}`),
            e('p', {}, 'Category:',
                e('strong', {}, `${category.value}`)),
            e('p', {}, 'Creator:',
                e('strong', {}, `${ author.value }`)),
            e('p', {}, `${content.value}`),
            e('div', { className: 'buttons' },
                e('button', { className: 'btn delete' }, 'Delete'),
                e('button', { className: 'btn archive' }, 'Archive')));

        articlePlace.appendChild(article);
        author.value = '';
        title.value = '';
        category.value = '';
        content.value = '';

        [...document.querySelectorAll('.delete')]
        .forEach(b => b.addEventListener('click', onDeleteClick));

        [...document.querySelectorAll('.archive')]
        .forEach(b => b.addEventListener('click', onArchiveClick));
    }



    function onDeleteClick(ev) {
        const articleToDelete = ev.target.parentNode.parentNode;
        articleToDelete.remove();
    }

    function onArchiveClick(ev) {
        const articleToDelete = ev.target.parentNode.parentNode;
        const title = articleToDelete.querySelector('h1').textContent;
        const olElement = document.querySelector('body > div > div > aside > section.archive-section > ol');
        const liElement = e('li', {}, `${title}`)
        olElement.appendChild(liElement);
        Array.from(olElement.querySelectorAll('li')).sort((a, b) =>
            a.textContent.localeCompare(b.textContent)).forEach(li => olElement.appendChild(li))
        articleToDelete.remove();


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
}