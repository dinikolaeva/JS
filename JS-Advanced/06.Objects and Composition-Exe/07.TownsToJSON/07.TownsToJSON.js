function towns(input) {

    let result = [];
    for (const town of input.splice(1)) {
        let [empty, currTown, lat, long] = town.split(/\s*\|\s*/gm);
        let obj = {
            Town: currTown,
            Latitude: Number(Number(lat).toFixed(2)),
            Longitude: Number(Number(long).toFixed(2))
        };

        result.push(obj);
    }

    return JSON.stringify(result);
}

console.log(towns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
console.log('-------------------------');
console.log(towns([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));