class Polygon {
  constructor(_height, _width) {
    this.height = _height;
    this.width = _width;
  }
  Area() {}

  Perimeter() {}
}

class Square extends Polygon {
  constructor(_length) {
    super(_length, _length);
    this.length = _length;
  }

  Area() {
    return `area: ${this.length * this.length}`;
  }
  Perimeter() {
    return `perimeter: ${this.length * 4}`;
  }
}

class Rectangle extends Polygon {
  constructor(_length, _width) {
    super(_length, _width);
    this.length = _length;
    this.width = _width;
  }

  Area() {
    return `area: ${this.length * this.width}`;
  }
  Perimeter() {
    return `perimeter: ${(this.length + this.width) * 2}`;
  }
}

class Triangle extends Polygon {
  constructor(_length, _height, _base) {
    super(_length, _height, _base);
    this.length = _length;
    this.height = _height;
    this.base = _base;
  }

  Area() {
    return `area: ${0.5 * this.height * this.base}`;
  }
  Perimeter() {
    return `perimeter: ${this.length + this.height + this.base}`;
  }
}

class Circle extends Polygon {
  constructor(_radius) {
    super(_radius, _radius);
    this.radius = _radius;
  }

  Area() {
    return `area: ${3.14 * this.radius * this.radius}`;
  }
  Perimeter() {
    return `perimeter: ${2 * 3.14 * this.radius}`;
  }
}

let mySquare = new Square(8);
console.log(mySquare.Area());
console.log(mySquare.Perimeter());

let myRect = new Rectangle(5, 8);
console.log(myRect.Area());
console.log(myRect.Perimeter());

let myTriangle = new Triangle(5, 8, 9);
console.log(myTriangle.Area());
console.log(myTriangle.Perimeter());

let myCircle = new Circle(5, 8, 9);
console.log(myCircle.Area());
console.log(myCircle.Perimeter());
