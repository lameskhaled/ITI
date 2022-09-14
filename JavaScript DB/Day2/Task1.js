class Store {
  constructor() {
    this.product = "";
    this.customers = [];
  }

  newProduct(name) {
    this.product = name;
    this.notifyAll();
  }

  register(customer) {
    this.customers.push(customer);
  }

  unRegister(customer) {
    this.customers = this.customers.filter((cust) => cust != customer);
  }
  notifyAll() {
    return this.customers.forEach((cust) => cust.update(this));
  }
}

class IndividualCustomer {
  update(Store) {
    console.log(`check the new product: ${Store.product}`);
  }
}

const storeOne = new Store();
const customerNoOne = new IndividualCustomer();
const customerNoTwo = new IndividualCustomer();

storeOne.register(customerNoOne);
storeOne.register(customerNoTwo);
storeOne.newProduct("Polo T-shirt");