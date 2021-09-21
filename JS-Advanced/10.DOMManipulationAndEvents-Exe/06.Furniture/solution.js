function solve() {
    let textAreas = document.querySelectorAll('#exercise textarea');
    let generateTextarea = textAreas[0];
    let buyTextarea = textAreas[1];

    let buttons = document.querySelectorAll('#exercise button');
    let generateBtn = buttons[0];
    let buyBtn = buttons[1];

    generateBtn.addEventListener('click', onGenerateClick);

    function onGenerateClick() {
        let furnitureObj = JSON.parse(generateTextarea.value);
        let table = document.querySelector('.table tbody')

        furnitureObj.forEach(f => {
            let newTr = document.createElement('tr');

            let imgTd = document.createElement('td');
            let img = document.createElement('img');
            img.src = f.img;
            imgTd.appendChild(img);

            let nameTd = document.createElement('td');
            let nameP = document.createElement('p');
            nameP.textContent = f.name;
            nameTd.appendChild(nameP);

            let priceTd = document.createElement('td');
            let priceP = document.createElement('p');
            priceP.textContent = f.price;
            priceTd.appendChild(priceP);

            let decFactorTd = document.createElement('td');
            let decFactorP = document.createElement('p');
            decFactorP.textContent = f.decFactor;
            decFactorTd.appendChild(decFactorP);

            let checkboxTd = document.createElement('td');
            let checkboxType = document.createElement('input');
            checkboxType.type = 'checkbox';
            checkboxTd.appendChild(checkboxType);

            newTr.appendChild(imgTd);
            newTr.appendChild(nameTd);
            newTr.appendChild(priceTd);
            newTr.appendChild(decFactorTd);
            newTr.appendChild(checkboxTd);

            table.appendChild(newTr);
        })
    }

    buyBtn.addEventListener('click', onBuyClick);

    function onBuyClick() {

        let tableRows = Array.from(document.querySelectorAll('.wrapper tbody tr'));
        let chekedRows = tableRows.filter(r => r.querySelectorAll('input:checked').length > 0);

        let names = chekedRows.map(r => r.querySelector('td:nth-child(2) p'))
            .map(r => r.textContent)
            .join(', ');

        let prices = chekedRows.map(r => r.querySelector('td:nth-child(3) p'))
            .map(r => Number(r.textContent));


        let decFactors = chekedRows.map(r => r.querySelector('td:nth-child(4) p'))
            .map(r => Number(r.textContent));

        let totalPrice = prices.reduce((acc, el) => acc + el, 0).toFixed(2);
        let averageDecFactor = decFactors.reduce((acc, el) => acc + el, 0) / decFactors.length;

        let nameText = `Bought furniture: ${names}`;
        let priceText = `Total price: ${totalPrice}`;
        let decFactorText = `Average decoration factor: ${averageDecFactor}`;

        buyTextarea.value = `${nameText}\n${priceText}\n${decFactorText}`;
    }
}