window.addEventListener('load', solve);

function solve() {

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', onAddClick);

    function onAddClick(event) {
        event.preventDefault();

        const model = document.querySelector('#model').value;
        const year = document.querySelector('#year').value;
        const description = document.querySelector('#description').value;
        const price = document.querySelector('#price').value;

        if (model == '' || year == '' ||
            year <= 0 || description == '' ||
            price == '' || price <= 0) {
            return alert('Please, fill all fields correct!');
        }

        const furnitureList = document.querySelector('#furniture-list');

        const trInfoEl =
            e('tr', { className: 'info' },
                e('td', {}, `${model}`),
                e('td', {}, `${Number(price).toFixed(2)}`),
                e('td', {}, ``,
                    e('button', { className: 'moreBtn' }, 'More Info'),
                    e('button', { className: 'buyBtn' }, 'Buy it')));

        const trHideElement = e('tr', { className: 'hide' },
            e('td', {}, `Year: ${year}`),
            e('td', { colSpan: '3' }, `Description: ${description}`));

        furnitureList.appendChild(trInfoEl);
        furnitureList.appendChild(trHideElement);

        const moreBtns = [...document.querySelectorAll('.moreBtn')];
        moreBtns.forEach(mb => mb.addEventListener('click', onMoreClick));

        const buyBtns = [...document.querySelectorAll('.buyBtn')];
        buyBtns.forEach(mb => mb.addEventListener('click', onBuyClick));

        function onMoreClick(ev) {

            const btn = ev.target;
            const parentTr = ev.target.parentNode.parentNode;
            const hideTr = parentTr.nextSibling;

            if (btn.textContent == 'More Info') {

                btn.textContent = 'Less Info';
                hideTr.style.display = 'contents';
            } else {
                btn.textContent = 'More Info';
                hideTr.style.display = 'none';
            }
        }

        function onBuyClick(ev) {

            const btn = ev.target;
            const trToRemove = btn.parentNode.parentNode;
            const hideTr = trToRemove.nextSibling;
            const price = trToRemove.querySelector('#furniture-list > tr.info > td:nth-child(2)').textContent;
            const totalPriceElement = document.querySelector('.total-price');

            let currentTotal = totalPriceElement.textContent;
            let totalSum = Number(currentTotal) + Number(price);

            totalPriceElement.textContent = Number(totalSum).toFixed(2);
            trToRemove.remove();
            hideTr.remove();
        }

        document.querySelector('#model').value = '';
        document.querySelector('#year').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#price').value = '';

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