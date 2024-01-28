function groupBy(objects, propertyName) {
    let groupedData = {};

    for (let i = 0; i < objects.length; i++) {
        let propertyValue = objects[i][propertyName];

        if (groupedData[propertyValue]) {
            groupedData[propertyValue].push(objects[i]);
        } else {
            groupedData[propertyValue] = [objects[i]];
        }
    }

    return groupedData;
}

let cardata = [
    { Car: 'Mercedes', Color: 'Grey' },
    { Car: 'Range Rover', Color: 'Black' },
    { Car: 'Honda', Color: 'White' },
    { Car: 'Toyota', Color: 'Red' },
    { Car: 'Lexus', Color: 'Aqua' }
];

let groupedByColor = groupBy(cardata, 'Color');
console.log('Grouped By Color', groupedByColor);


