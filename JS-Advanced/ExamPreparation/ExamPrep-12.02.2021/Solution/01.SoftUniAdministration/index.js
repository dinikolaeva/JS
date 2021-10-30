function solve() {
    document.querySelector('button').addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();

        const lectureName = document.querySelector('form > div:nth-child(1) > input[type=text]');
        let date = document.querySelector('form > div:nth-child(2) > input[type=datetime-local]');
        const module = document.querySelector('form > div:nth-child(3) > select');

        if (lectureName.value != '' && date.value != '' && module.value != 'Select module') {

            const modulesElements = document.querySelector('.modules');

            date = date.value.split('-').join('/').replace('T', ' - ');

            const divElement = e('div', { className: 'module' },
                e('h3', {}, `${module.value.toUpperCase()}-MODULE`),
                e('ul', {},
                    e('li', { className: 'flex' },
                        e('h4', {}, `${lectureName.value} - ${date}`),
                        e('button', { className: 'red' }, 'Del')))
            );

            const allModules = Array.from(modulesElements.children);
            const found = allModules.find(m => m.querySelector('h3')
                .textContent == `${module.value.toUpperCase()}-MODULE`);

            if (found) {
                const ul = found.querySelector('ul');

                const newLi = e('li', { className: 'flex' },
                    e('h4', {}, `${lectureName.value} - ${date}`),
                    e('button', { className: 'red' }, 'Del'));

                ul.appendChild(newLi);

                Array.from(ul.children)
                    .sort((a, b) => {
                        a.date = a.querySelector('h4').textContent.split(' - ')[1];
                        b.date = b.querySelector('h4').textContent.split(' - ')[1];
                        return a.date.localeCompare(b.date);
                    })
                    .forEach(li => ul.appendChild(li));
            } else {
                modulesElements.appendChild(divElement);
            }
        }

        const deleteBtns = [...document.querySelectorAll('.red')];
        deleteBtns.forEach(b => b.addEventListener('click', onDeleteClick));

        function onDeleteClick(ev) {
            const button = ev.target;
            const ulElement = button.parentNode.parentNode;

            if (ulElement.children.length == 1) {
                ulElement.parentNode.remove();
            } else {
                button.parentNode.remove();
            }
        }

        lectureName.value = '';
        date.value = '';
        module.value = 'Select module';
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
};