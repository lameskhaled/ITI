class Shipment {
  constructor(type, pickupDate, deliveryDate, commodities, from, to) {
    this.type = type;
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commodities = commodities;
    this.from = from;
    this.to = to;
  }
  toString() {
    return console.log(JSON.stringify(this));
  }
}

class Shipper {
  type(type) {
    this.type = type;
    return this;
  }
  pickupDate(pickupDate) {
    this.pickupDate = pickupDate;
    return this;
  }
  deliveryDate(deliveryDate) {
    this.deliveryDate = deliveryDate;
    return this;
  }
  commodities(commodities) {
    this.commodities = commodities;
    return this;
  }
  from(from) {
    this.from = from;
    return this;
  }
  to(to) {
    this.to = to;
    return this;
  }
  build() {
    return new Shipment(
      this.type,
      this.pickupDate,
      this.deliveryDate,
      this.commodities,
      this.from,
      this.to
    );
  }
}

const shipperOne = new Shipper()
  .type("playground")
  .pickupDate("22/8/2022")
  .deliveryDate("22/9/2022")
  .commodities(["toys", "clothes", "bag"])
  .from("USA")
  .to("Egypt")
  .build();
shipperOne.toString();
