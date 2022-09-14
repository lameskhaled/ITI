class UserModel {
  objUser = [
    {
      username: "Lamees",
      password: "123",
    },
    {
      username: "Khaled",
      password: "456",
    },
    {
      username: "Abdelrazek",
      password: "789",
    },
  ];
}

class UserController {
  auth(token) {
    for (var i = 0; i < new UserModel().objUser.length; i++) {
      if (
        (
          new UserModel().objUser[i].username +
          new UserModel().objUser[i].password
        ).toString(20) == token
      ) {
        console.log("successful login");
        return;
      }
    }
    console.log("wrong username or password");
  }
}

class UserLog {
  signin(username, password) {
    this.username = username;
    this.password = password;

    this.token = (this.username + this.password).toString(20);
    new UserController().auth(this.token);
  }
}

const userOne = new UserLog();
userOne.signin("Ahmed", "Mohamed");
