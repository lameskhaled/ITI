
class LOGAN {
    constructor(enginePower, numberOfDoors, price) {
        this.enginePower = enginePower;
        this.numberOfDoors = numberOfDoors;
        this.price = price;
    }
    returnModelAndPrice() {
        return `LOGAN car and the price is ${this.price}`
    }
    returnEnginePower() {
        return `LOGAN Engine Power Is ${this.enginePower}`;
      }
      returnNumberOfDoors() {
    return `LOGAN Number of Doors Is ${this.numberOfDoors}`;
    }
}

class Tipo {
    constructor(enginePower, numberOfDoors, price) {
        this.enginePower = enginePower;
        this.numberOfDoors = numberOfDoors;
        this.price = price;
    }
    returnModelAndPrice() {
        return `Tipo car and the price is ${this.price}`
    }
    returnEnginePower() {
        return `Tipo Engine Power Is ${this.enginePower}`;
      }
      returnNumberOfDoors() {
    return `Tipo Number of Doors Is ${this.numberOfDoors}`;
    }
}

class Fiat {
    constructor(enginePower, numberOfDoors, price) {
        this.enginePower = enginePower;
        this.numberOfDoors = numberOfDoors;
        this.price = price;
    }
    returnModelAndPrice() {
        return `Fiat car and the price is ${this.price}`
    }
    returnEnginePower() {
        return `Fiat Engine Power Is ${this.enginePower}`;
      }
      returnNumberOfDoors() {
    return `Fiat Number of Doors Is ${this.numberOfDoors}`;
    }
}

class CarFactory {
    constructor(carType) {
        this.carType = carType;
    }

    returnModelAndPrice() {
        switch (this.carType) {
            case 'LOGAN':
                return new LOGAN(1600,4,'30000LE');
            case 'TIPO' :
                return new Tipo(1600,4,'40000LE') ;
            case 'Fiat' :
                return new Tipo(1500,4,'25000LE') ;
            default :
                console.log('Invalid car')       

        }
    }
}

let TipoCar = new CarFactory('TIPO');
let Obj=TipoCar.returnModelAndPrice();
console.log(Obj)