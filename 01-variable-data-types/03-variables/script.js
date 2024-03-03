//ways to declare variables
//var , let and const

let firstName = "West";
let lastName = "yeezy";

console.log(firstName, lastName);

let age = 30;

console.log(age);

//Naming conventions
// -only letters, numbers, underscores and dollar signs
//cant start with a number

//multi-word Formatting
//firstName = camelCase
//first_name = underscore
//FirstName = PascalCase
//firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

console.log(x);

// We can not re-assign a const variable
// x = 200 // Will result in an error

const arr = [1, 2, 3, 4];
arr.push(5, 6, 7);
console.log(arr);

const person = {
  name: "Brad",
};
person.name = "John";
person.email = "brad@gmail.com";
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
