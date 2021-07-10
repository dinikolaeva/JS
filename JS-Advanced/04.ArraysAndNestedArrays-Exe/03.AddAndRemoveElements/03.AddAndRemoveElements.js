function addRemove(arr) {

    let number = 1;
    let result = [1];

    for (let i = 1; i < arr.length; i++) {

        number++;

        if (arr[i] == 'add') {
            result.push(number);
        } else {
            result.pop();
        }
    }

    if (result.length == 0) {
        console.log(`Empty`);
    } else {
        console.log(result.join("\n"));
    }
}

addRemove(['add', 
'add', 
'add', 
'add']);

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']);

addRemove(['remove', 
'remove', 
'remove']);