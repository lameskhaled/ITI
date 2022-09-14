function CarShop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CarBuilder() {
  this.car = null;
  this.step1 = function () {
    this.car = new Car();
  };
  this.step2 = function () {
    this.car.addobjects();
  };
  this.get = function () {
    return this.car.print();
  };
}

function TruckBuilder() {
  this.truck = null;
  this.step1 = function () {
    this.truck = new Truck();
  };
  this.step2 = function () {
    this.truck.addobjects();
  };
  this.get = function () {
    return this.truck.print();
  };
}

function Car() {
  this.wheels = 0;
  this.addobjects = function () {
    this.wheels = 4;
  };
  this.print = function () {
    console.log(`this is a ${this.wheels} wheels car`);
  };
}

function Truck() {
  this.wheels = 0;
  this.addobjects = function () {
    this.wheels = 8;
  };
  this.print = function () {
    console.log(`this is a ${this.wheels} wheels truck`);
  };
}

var carShop = new CarShop();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
var car = carShop.construct(carBuilder);
var truck = carShop.construct(truckBuilder);
