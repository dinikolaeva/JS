function pie(arr, firtsFlavor, secondFlavor) {

    let startIndex = arr.indexOf(firtsFlavor);
    let endIndex = arr.indexOf(secondFlavor);

    return arr.slice(startIndex, endIndex + 1);
}

console.log(pie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

console.log(pie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));