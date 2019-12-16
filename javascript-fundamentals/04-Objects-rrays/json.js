var jsonIn = [ 
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'sedan' }
];

var carIds = JSON.parse(jsonIn);
console.log(carIds);