function walk(steps, stride, speed) {

    let distaceInMetres = steps * stride;
    let speedInMetresInSeconds = speed / 3.6;
    let breaksInSeconds = Math.floor(distaceInMetres / 500) * 60;
    let totalTimeInSeconds = distaceInMetres / speedInMetresInSeconds + breaksInSeconds;

    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = Math.ceil(totalTimeInSeconds % 60);

    if (hours < 10) {
        if (minutes < 10) {
            console.log(`0${hours}:0${minutes}:${seconds}`);
        }
        else {
            console.log(`0${hours}:${minutes}:${seconds}`)
        }
    }
    else {
        if (minutes < 10) {
            console.log(`${hours}:0${minutes}:${seconds}`);
        }
        else {
            console.log(`${hours}:${minutes}:${seconds}`)
        }
    }
}

walk(4000, 0.60, 5);
walk(2564, 0.70, 5.5);