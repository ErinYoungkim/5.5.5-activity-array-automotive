//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
import Vehicle from './vehicleBaseClass.js'

class Car extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassenger = 5;
    this.passenger = 0;
    this.numberOFWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.serivce = false;
  }

      loadPassenger(num) {
          this.num = num
          if (num > this.maxPassenger) {
          console.log('NO ROOM GET OUT');
        } else {
            console.log(`it's roomy in here`);
        }
  }

  start() {
    if (this.fuel > 0) {
      console.log("Has fuel!");
      return (this.fuel = true);
    } else {
      console.log("Has no fuel");
    }
  }

  scheduleService(mileage) {
    this.mileage = mileage;
    // return this.mileage > 30000 ? true : false;
    if (mileage > 30000) {
      console.log("time for maintenance");
      return (mileage = true);
    } else {
      console.log("All set");
    }
  }
}

const myCar = new Car("Honda", "S5", "2005", "Blue", 15000);
myCar.loadPassenger(3);
myCar.start();
myCar.scheduleService(40000);



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
