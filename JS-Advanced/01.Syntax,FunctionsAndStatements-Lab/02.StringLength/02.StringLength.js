let sum = 0;

function stringLength(first, second, third) {
    sum = first.length + second.length + third.length;
    console.log(sum);
    console.log(Math.floor(sum/3));
}

stringLength('pasta', '5', '22.3');