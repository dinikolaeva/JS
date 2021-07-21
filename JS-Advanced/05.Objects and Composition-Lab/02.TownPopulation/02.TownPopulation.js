function townPopulation(inputObj) {

    let result = {};

    for (let obj of inputObj) {

        let [name, population] = obj.split(' <-> ');
        population = Number(population);

        if (result[name]) {
            population += result[name];
        }

        result[name] = population;
    }

    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}


townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);