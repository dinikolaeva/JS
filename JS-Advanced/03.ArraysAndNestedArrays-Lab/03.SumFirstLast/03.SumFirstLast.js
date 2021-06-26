function sum(arr){

    let result = Number(arr.shift()) + Number(arr.pop());

    return result;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));