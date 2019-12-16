(function(){
    console.log('in function');
})();

let app = (function(){
    let carId=123;
    console.log('in function');
    return {};
})();

console.log(app);

let app = function(){
    let carId=123;
    let getId=function(){
        return carId;
    };
    return {
        getId:getId
    };
};

console.log(app.getId());

let trackCar = function(carId, city='NY') {
    console.log(`Tracking ${carId} in ${city}.`);
  };
  console.log( trackCar(123) );  
  console.log( trackCar(123, 'Chicago'));
  