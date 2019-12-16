function startCars(car1, car2, car3, ...rest){
    console.log(car1, car2, car3, rest)
}

let carIds=[1,2,3,4,5,6];
startCars(...carIds);