function radar(speed, area) {

    speed = Number(speed);
    let limit;

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;;
    }

    let difference = limit - speed;
    let result;

    if (speed > limit) {
        if (Math.abs(difference) <= 20) {
            result = 'speeding';
        }
        else if (Math.abs(difference) <= 40) {
            result = 'excessive speeding';
        }
        else {
            result = 'reckless driving';
        }

        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${limit} - ${result}`);
    }
    else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');
