class Vehicle{
    constructor(year, make, model){
        this.year = year,
        this.make = make,
        this.model = model
    }
    honk(){
        return('beep');
    }
    toString(){
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`
    }
}

class Car extends Vehicle{
    constructor(year, make, model){
        super(year, make, model)
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(year, make, model){
        super(year, make, model)
        this.numWheels = 2;
    }

    revEngine(){
        return 'VROOOM!'
    }

}

class Garage{
    constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity
    }
    
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return 'Garages are for Cars, not that!';
        }
        if(this.vehicles.length >= this.capacity){
            return 'Garage is full!';
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle parked!'
    }
}