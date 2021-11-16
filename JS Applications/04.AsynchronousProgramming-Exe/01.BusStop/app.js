async function getInfo() {

    let busIdElement = document.querySelector('#stopId');
    const stopNameElement = document.querySelector('#stopName');
    const busesData = document.querySelector('#buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busIdElement.value}`;

    try {

        const response = await fetch(url);

        if (!response.ok || busIdElement.value !== '1287' &&
            busIdElement.value != '1308' && busIdElement.value != '1327' &&
            busIdElement.value != '2334') {
            throw new Error('Error');
        }
        busesData.innerHTML = '';

        const data = await response.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]}`;
            busesData.appendChild(liElement);
        });

        busIdElement.value = '';

    } catch (error) {
        stopNameElement.textContent = error.message;
        busIdElement.value = '';
    }

}