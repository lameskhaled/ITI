class Attack {
  newPlan() {
    return "2-3-5";
  }
}
class Defence {
  newPlan() {
    return "4-2-4";
  }
}
class Meduim {
  newPlan() {
    return "1-2-3";
  }
}
class PlayStation {
  setStrategy(plan) {
    this.plan = plan;
  }
  newPlan() {
    return this.plan.newPlan();
  }
}

var attack = new Attack();
var meduim = new Meduim();
var defence = new Defence();
var playStation = new PlayStation();

playStation.setStrategy(attack);
console.log(playStation.newPlan());
