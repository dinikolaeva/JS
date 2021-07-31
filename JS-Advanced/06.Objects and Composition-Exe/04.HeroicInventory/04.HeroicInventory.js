function invetory(heroInfo) {
    let result = [];

    for (let i of heroInfo) {
        let [name, level, items] = i.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));
}

invetory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

invetory(['Jake / 1000 / Gauss, HolidayGrenade']);