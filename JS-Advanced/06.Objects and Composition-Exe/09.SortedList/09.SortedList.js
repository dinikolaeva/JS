function createSortedList() {
    let result = [];
    return {

        add(el) {
            result.push(el)
            this.size++;
            result.some((a, b) => a - b);
        },
        remove(index) {

            if (index < 0 || index >= result.length) {
                throw new RangeError();
            }
            result.splice(index, 1);
            this.size--;
        },
        get(index) {
            if (index < 0 || index >= result.length) {
                throw new RangeError();
            }
            return result[index]
        },
        size: 0
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));