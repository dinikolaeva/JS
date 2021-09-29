function listProcessor(arr) {

    let actions = () => {
        let string = [];
        return {
            add: (slice) => {
                string.push(slice);
            },
            remove: (slice) => {
                string = string.filter(el => el !== slice)
            },
            print: () => {
                console.log(string);
            }
        }
    }

    const result = actions();
    arr.map(e => e.split(' '))
        .map(([act, string]) => result[act](string));
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);