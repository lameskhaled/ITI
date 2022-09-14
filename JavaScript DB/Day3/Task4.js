class Phone {
  get weight() {
    return 0;
  }
}
class Telephone extends Phone {
  constructor(mass, gravity) {
    super();
    this.mass = mass;
    this.gravity = gravity;
  }
  get weight() {
    return this.mass * this.gravity;
  }
}
class Mobile extends Phone {
  constructor(mass, gravity) {
    super();
    this.mass = mass;
    this.gravity = gravity;
  }
  get weight() {
    return this.mass * this.gravity;
  }
}

const phones = [new Telephone(10, 9.8), new Mobile(5, 9.8)];
for (let s of phones) {
  console.log(s.weight);
}
