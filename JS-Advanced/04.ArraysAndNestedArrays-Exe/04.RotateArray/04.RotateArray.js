function rotate(arr, times) {

    for (let i = 0; i < times; i++) {

        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2);

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);