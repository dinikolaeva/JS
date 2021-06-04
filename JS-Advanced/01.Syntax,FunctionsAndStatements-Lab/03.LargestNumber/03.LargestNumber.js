function largestNumber(first, second, third) {
    let maxNumber;
    
    if (first > second && first > third) {
        maxNumber = first;
    }
    else if (second > first && second > third) {
        maxNumber = second;
    }
    else {
        maxNumber = third
    }
    console.log(`The largest number is ${maxNumber}.`);
}

largestNumber(-3, -5, -22.5)