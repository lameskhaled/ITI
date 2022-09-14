let myProxy = {
  set: (inObj, props, inValue) => {
    if (props === "username") {
      if (inValue.length == 7) {
        inObj[props] = inValue;
      } else {
        throw Error("username must be less than or equal to seven letters");
      }
    } else if (props === "userAddress") {
      if (typeof inValue == "string") {
        inObj[props] = inValue;
      } else {
        throw Error("user address msut be a string");
      }
    } else if (props === "userAge") {
      if (inValue >= 25 && inValue <= 50) {
        inObj[props] = inValue;
      } else {
        throw Error("user age must be between 25 and 50");
      }
    }
  },
};

let newProxy = new Proxy({}, myProxy);

newProxy.username = "tarek";
newProxy.userAddress = "damietta";
newProxy.userAge = 25;
