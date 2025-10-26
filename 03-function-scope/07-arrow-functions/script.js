// function add(a,b){
//   return a + b;
// }

// console.log(add(1,2));

const add = (a,b) => {return a + b};

console.log(add(3,4));

//Implicit Return
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));

// Can leave off () with a single param
const double = a => a * 2;

console.log(double(4));

// Returning an object

const createObj = () => ({
  name: 'Brad'
});

console.log(createObj());


const numbers = [1,2,3,4,5];

numbers.forEach(n => console.log(n));