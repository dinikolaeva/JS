function car(carObject) {

    const car = {};

    car.model = carObject.model;

    if (carObject.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
    } else if (carObject.power > 90 && carObject.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
    } else if (carObject.power <= 200) {
        car.engine = { power: 200, volume: 3500 };
    }

    if (carObject.carriage == 'hatchback') {
        car.carriage = { type: 'hatchback', color: carObject.color };
    } else if (carObject.carriage == 'coupe') {
        car.carriage = { type: 'coupe', color: carObject.color };
    }

    let wheels = carObject.wheelsize;

    if (carObject.wheelsize % 2 == 0) {
        wheels = carObject.wheelsize - 1;
    }

    car.wheels = Array(4).fill(wheels);

    return car;
}

console.log(car({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(car({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));