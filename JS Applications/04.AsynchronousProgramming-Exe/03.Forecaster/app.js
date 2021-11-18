function attachEvents() {

    const getWeatherBtn = document.querySelector('#submit');
    getWeatherBtn.addEventListener('click', onClick);

    async function onClick() {

        const location = document.querySelector('#location');
        const city = location.value;
        const forecastSection = document.querySelector('#forecast');

        const symbols = {
            'Sunny': '☀',
            'Partly sunny': '⛅',
            'Overcast': '☁',
            'Rain': '☂',
            'Degrees': '°',
        };

        const url = 'http://localhost:3030/jsonstore/forecaster/locations';

        try {
            const response = await fetch(url);
            const data = await response.json();

            clearDivForDataEntry();

            if (!response.ok || city == '' || city == undefined || !typeof(data).isArray) {
                throw new Error('error');
            }

            const target = data.find(c => c.name == city);

            try {
                const urlConditions = `http://localhost:3030/jsonstore/forecaster/today/${target.code}`;

                const responseConditions = await fetch(urlConditions);
                const dataConditions = await responseConditions.json();

                location.value = '';

                forecastSection.style.display = 'block';
                const divElement = document.querySelector('#current');

                let divForecats = e('div', { className: 'forecast' });

                let spanCondSymbol = e('span', { className: 'condition symbol' });
                spanCondSymbol.textContent = symbols[dataConditions.forecast.condition];

                let spanCondition = e('span', { className: 'condition' });

                let firstSpan = e('span', { className: 'forecast-data' }, dataConditions.name);
                let secondSpan = e('span', { className: 'forecast-data' });
                secondSpan.textContent = `${dataConditions.forecast.low}°/${dataConditions.forecast.high}°`;
                let thirdSpan = e('span', { className: 'forecast-data' }, dataConditions.forecast.condition);

                spanCondition.appendChild(firstSpan);
                spanCondition.appendChild(secondSpan);
                spanCondition.appendChild(thirdSpan);

                divForecats.appendChild(spanCondSymbol);
                divForecats.appendChild(spanCondition);

                divElement.appendChild(divForecats);

            } catch (error) {
                forecastSection.style.display = 'block';
                forecastSection.innerHTML = 'Error';
            }

            try {
                const urlConditions = `http://localhost:3030/jsonstore/forecaster/upcoming/${target.code}`;

                const responseUpcoming = await fetch(urlConditions);
                const dataUpcoming = await responseUpcoming.json();

                forecastSection.style.display = 'block';
                const divUpcoming = document.querySelector('#upcoming');

                let divForecastInfo = e('div', { className: 'forecast-info' });

                dataUpcoming.forecast.forEach(element => {

                    let spanUpcomming = e('span', { className: 'upcoming' });

                    let firstSpan = e('span', { className: 'symbol' }, );
                    firstSpan.textContent = symbols[element.condition];
                    let secondSpan = e('span', { className: 'forecast-data' });
                    secondSpan.textContent = `${element.low}°/${element.high}°`;
                    let thirdSpan = e('span', { className: 'forecast-data' }, element.condition);

                    spanUpcomming.appendChild(firstSpan);
                    spanUpcomming.appendChild(secondSpan);
                    spanUpcomming.appendChild(thirdSpan);

                    divForecastInfo.appendChild(spanUpcomming);
                });

                divUpcoming.appendChild(divForecastInfo);

            } catch (error) {
                forecastSection.style.display = 'block';
                forecastSection.innerHTML = 'Error';
            }

        } catch (error) {
            forecastSection.style.display = 'block';
            forecastSection.innerHTML = 'Error';
        }
    }
}

attachEvents();

function clearDivForDataEntry() {
    document.querySelector('#forecast').style.display = 'block';
    document.querySelector('#forecast').innerHTML = '<div id="current"><div class="label">Current conditions</div></div><div id="upcoming"><div class="label">Three-day forecast</div></div>';
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