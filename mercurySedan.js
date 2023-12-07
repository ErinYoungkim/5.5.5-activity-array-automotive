
import Vehicle from "./vehicleBaseClass.js";

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
  // I HAD A PROBLEM with my method bc of scheduleService.
  // With the code above, it was written as 'this.scheduleService' before and trying to invoke it w/o ternary will call onto two things that have the same name.
  // which led me to change it to this.service in the constructor. BUT if i uncomment out my ternary it should work regardless of if i had them both named as scheduleService.
  
  // loadPassenger(num) {
  //   this.passenger = num;
  //   return this.passenger < this.maxPassenger ? true : false;
  // }
  
  // in the code above i tested it with ternary again and was able to figure it out and i got it working by taking the properties of my constructor and setting the parameter to num
  // which then i understand that im trying to tell my code if this.passenger is less than this.maxPassenger its true "?" else ":" false.

  loadPassenger(num){
    this.num = num;
    if (num > this.maxPassenger) {
      console.log("NO ROOM GET OUT");
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

// const result = myCar.loadPassenger(3);
// console.log(result);

// i wanted to know how id get the result for my ternary for loadPassenger and figured that i can make a const for results which will = Mycar.load()
// which i then can console.log(results)
// and in this case since 3 is less than 5 the results should come out as true. and it did and double checking it when i put (7) the result came out as false. 7 is not less than 5.
// :) happy coding LOL ps this made me want to rip my hair out before i actually started to grasp the concept.

