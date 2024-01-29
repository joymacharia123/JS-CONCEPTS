function groupBy(objects, Car) {
    let groupedByColor = {};

    for (let i = 0; i < objects.length; i++) {
        let Color = objects[i][Car];

        if (groupedByColor[Color]) {
            groupedByColor[Color].push(objects[i]);
        } else {
            groupedByColor[Color] = [objects[i]];
        }
    }

    return groupedByColor;
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


