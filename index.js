let driverId = 0;
let allTrips = [];
class Driver {
  constructor(name){
    this.name=name;
    this.id=++driverId;
  }
  trips(){
    return allTrips.filter(function(trip){
      console.log(this)
      trip.driverId === this.id;
    }).bind(this)
    
  }
}

let passengerId=0;
class Passenger {
  constructor(name){
    this.name=name;
    this.id=++passengerId;
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger){
    this.id = ++ tripId;
    this.driverId = driver.id;
    this.passengerId=passenger.id;
    allTrips.push(this);
  }
}