//arrow function

const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = function (name) {
  if (name) {
    return "Olá" + name + "!";
  } else {
    return "Olá!";
  }
};
console.log(greeting("Charles"));
console.log(greeting());

const testarrow = () => console.log("teste de arrow");
testarrow();

const user = {
  name: "charles",
  sayUsername: () => {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUsernameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

//user.sayUsername();
//user.sayUsernameArrow();

//filter
const arr = [1, 2, 3, 4, 5];
const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});
console.log(highNumbers);

const users = [
  { name: "Charles", available: true },
  { name: "Ana", available: false },
  { name: "Júlia", available: true },
  { name: "Pedro", available: false },
];
const availableUsers = users.filter((user) => user.available);
console.log(availableUsers);
