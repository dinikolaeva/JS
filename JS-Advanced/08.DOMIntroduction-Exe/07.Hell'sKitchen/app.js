function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        let input = JSON.parse(document.querySelector('#inputs textarea').value);

        let restaurants = {};

        input.forEach(item => {

            let [restaurantName, data] = item.split(' - ');
            let workersInfo = data.split(', ');

            let workers = [];

            for (const element of workersInfo) {
                let [workerName, workerSalary] = element.split(' ');

                let worker = {
                    workerName,
                    workerSalary
                };

                workers.push(worker);
            }

            if (restaurants[restaurantName]) {

                workers = workers.concat(restaurants[restaurantName].workers);
            }

            workers.sort((a, b) => b.workerSalary - a.workerSalary);

            let averageSalary = workers.reduce((sum, curWorker) => sum + Number(curWorker.workerSalary), 0) / workers.length;

            let bestSalary = Number(workers[0].workerSalary);

            restaurants[restaurantName] = {
                workers,
                averageSalary,
                bestSalary
            };

        });

        let bestRestaurant = undefined;
        let bestSalary = 0;

        for (const curRestaurant in restaurants) {

            if (restaurants[curRestaurant].averageSalary > bestSalary) {
                bestRestaurant = curRestaurant;
                bestSalary = restaurants[curRestaurant].averageSalary;
            }
        }

        let bestAverageSalary = restaurants[bestRestaurant].averageSalary.toFixed(2);
        let bestSalaryOfRestaurant = restaurants[bestRestaurant].bestSalary.toFixed(2);
        let bestRestaurantTextContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary} Best Salary: ${bestSalaryOfRestaurant}`;

        let bestRestaurantElement = document.querySelector('#bestRestaurant p');
        bestRestaurantElement.textContent = bestRestaurantTextContent;

        let workersTextContent = [];

        restaurants[bestRestaurant].workers.forEach(worker => {
            workersTextContent.push(`Name: ${worker.workerName} With Salary: ${worker.workerSalary}`)
        });

        let bestWorkersElement = document.querySelector('#workers p');
        bestWorkersElement.textContent = workersTextContent.join(' ');
    }
}