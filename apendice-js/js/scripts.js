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
const notAvailableUsers = users.filter((user) => !user.available);
console.log(availableUsers);
console.log(notAvailableUsers);

//map
const products = [
  { name: "Camisa", category: "Roupas", price: 10.98 },
  { name: "Bermuda", category: "Roupas", price: 23.4 },
  { name: "Tênis", category: "Calçados", price: 55.0 },
  { name: "fogão", category: "Eletrodomésticos", price: 150.0 },
  { name: "geladeira", category: "Eletrodomésticos", price: 850.0 },
];
products.map((product) => {
  if (product.category !== "Roupas") product.onSale = true;
});
console.log(products);

//template literals
const userName = "Charles";
const age = 28;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

//destructuring
const fruits = ["Maçã", "Banana", "Morango"];
const [i1, i2, i3] = fruits;
console.log(i1, i2, i3);
const productDetails = { name: "Tênis", price: 89.99, category: "Calçados" };
const { name: productName, price, category } = productDetails;
console.log(productName, price, category);
//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const car = { brand: "Ford", model: "Ka", year: 2020 };
const carClone = { ...car, color: "red" };
console.log(carClone);

//classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return (this.price * (100 - discount)) / 100;
  }
}
const shirt = new Product("Camisa", 20);
console.log(shirt.name);
console.log(shirt.price);
console.log(shirt.productWithDiscount(20));
console.log(shirt.productWithDiscount(50));

//herança
class SuperProduct extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }
  showColors() {
    console.log("As cores disponíveis são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}
const tenis = new SuperProduct("Tênis", 120, ["preto", "branco", "azul"]);
console.log(tenis.name);
console.log(tenis.price);
console.log(tenis.productWithDiscount(30));
tenis.showColors();
