function sort(arr) {
    return arr.sort((a, b) => {

        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).join('\n');
}

console.log(sort(['alpha',
    'beta',
    'gamma']));

console.log(sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']));

console.log(sort(['test',
    'Deny',
    'omen',
    'Default']));