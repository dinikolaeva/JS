window.addEventListener('load', () => {
    solution();
});

async function solution() {

    const mainElement = document.getElementById('main');

    try {
        const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

        const response = await fetch(url);
        const articles = await response.json();

        articles.forEach(element => {
            let divAccordition =
                e('div', { className: 'accordion' },
                    e('div', { className: 'head' },
                        e('span', {}, `${element.title}`),
                        e('button', { className: 'button', id: `${element._id}` }, 'More')),
                    e('div', { className: 'extra' },
                        e('p', {})));

            mainElement.appendChild(divAccordition);
        });
    } catch (error) {
        console.log(error.message);
    }

    let moreBtns = [...document.querySelectorAll('.button')].forEach(btn => {
        btn.addEventListener('click', onClick);
    });

    async function onClick(ev) {

        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${ev.target.id}`;

        const response = await fetch(url);
        const extra = await response.json();

        let btn = ev.target;
        let divExtra = btn.parentNode.parentNode.querySelector('.extra');

        if (btn.textContent == 'More') {
            divExtra.textContent = extra.content;
            divExtra.style.display = 'block';
            btn.textContent = 'Less';
        } else {
            divExtra.style.display = 'none';
            btn.textContent = 'More';
        }
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