class Reading {
  valid() {
    console.log(`Reading successfully`);
  }
}

class Editing {
  valid() {
    console.log(`Editing successfully`);
  }
}

class Deleting {
  valid() {
    console.log(`Deleting successfully`);
  }
}

var roles = [new Reading(), new Editing(), new Deleting()];

function assignRole(roles) {
  roles.forEach((role) => {
    role.valid();
  });
}

assignRole(roles);
