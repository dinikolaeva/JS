function juiseFlavors(data) {

    let result = new Map();
    let bottles = new Map();

    data.forEach(line => {
        let row = line.split(' => ');
        let juise = row[0];
        let quantity = Number(row[1]);

        if (result.has(juise)) {
            let element = result.get(juise);
            element += quantity;
            result.set(juise, element);

            if (result.get(juise) >= 1000) {
                let countOfBottles = Math.trunc(key[1] / 1000);
                let currBottles = bottles.get(juise);
                currBottles += countOfBottles;
                bottles.set(juise, currBottles);
            }

        } else {
            result.set(juise, quantity);
            if (result.get(juise) >= 1000) {
                let countOfBottles = Math.trunc(key[1] / 1000);
                let currBottles = bottles.get(juise);
                currBottles += countOfBottles;
                bottles.set(juise, currBottles);
            }
        }
    })

    Object.entries(bottles)
        .forEach(element => {
            console.log(`${element[0]} => ${element[1]}`);
        });
}

juiseFlavors(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]);

console.log('------------------------------------');

juiseFlavors(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]);