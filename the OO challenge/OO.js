/*Part one: Create a class for vehicle where each has:
Make
Model
Year
*/

class vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep!";
    }

    toString() {
        return 'The vehicle is a ${this.make} ${this.model} from ${this.year}.';
    }
}

let myFirstVehicle = newVechicle("HotWheels", "Silver", "2004");
myFirstVehicle.honk();
myFirstVehicle.toString();


/* Part two: create a class for a car.The Car class 
should inherit from Vehicle and each car instance 
should have a property called numWheels which has a 
value of 4
*/

class Car extends vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar =  new Car ("Toyota", "Corolla", 2014);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;


/*Part three: Create a class for a Motorcycle
This class should inherit from Vehicle and each 
motorcycle instance should have a property called 
numWheels which has a value of 2
 It should also have a revEngine method which returns
  “VROOM!!!”
*/

class motorcycle extends vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!"
    }
}

let myFirstMotorcycle = new motorcycle ("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels();


/*Part four:Create a class for a garage. SHould have porperty
called vechiles, and stores an array of them. Has a propperty
called capacity that can fit in garage. 
Should have an add method to add vehciles and if not a 
vehcile then messsage should say 
“Only vehicles are allowed in here!”. 
Also, if the garage is at capacity, it should say 
“Sorry, we’re full.”
*/

class garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVechicle){
        if (!(newVechicle instanceof vehicle)){
            return "ONly vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVechicle);
        return "Vehicle added!";
    }
}

let garage = new garage (2);
garage.vehicles;
garage.add(new Car ("Hyundai", "Sonata", 2014));
garage.vehicles;
garage.add(Cooler);
garage.add(new motorcycle("HarlyDavidson", "streetGlide", 2022));


