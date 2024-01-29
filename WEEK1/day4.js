

let cardata = [
    { Car: 'Mercedes', Color: 'Grey' },
    { Car: 'Range Rover', Color: 'Black' },
    { Car: 'Honda', Color: 'White' },
    { Car: 'Toyota', Color: 'Red' },
    { Car: 'Lexus', Color: 'Aqua' }
];

let groupedByColor = groupBy(cardata, 'Color');
console.log('Grouped By Color', groupedByColor);


