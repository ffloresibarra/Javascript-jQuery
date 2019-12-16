function Car(){

}

let Car=new Car();

///////////////////////////
function Car(id){
    this.carId=id;
}

let Car=new Car(123);
console.log(car.carId);