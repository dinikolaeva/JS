window.addEventListener('load', () => {
    getRecipesList();
});

async function getRecipesList() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    const main = document.querySelector('main');

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const recipes = await response.json();
        main.innerHTML = '';

        Object.values(recipes)
            .map(createPreview)
            .forEach(r => main.appendChild(r));

    } catch (error) {
        alert(error.message);
    };
}

//create preview for each recipe:
function createPreview(recipe) {
    const result = e('article', { className: 'preview' },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img }))
    );

    result.addEventListener('click', () => getRecipeDetails(recipe._id, result));

    return result;
}

//get details of select recipe and replace little card with bigger with new data:
async function getRecipeDetails(id, firstResult) {
    const url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();

    const result = e('article', {},
        e('h2', {}, data.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' },
                e('img', { src: data.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, data.ingredients.map(i => e('li', {}, i)))
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            data.steps.map(s => e('p', {}, s))
        )
    );

    //firstResult.parentNode.replaceChild(result, firstResult);

    //other way:
    firstResult.replaceWith(result);
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