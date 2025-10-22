let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// x = fruits[3][1];

// Spread Operator (...)
const allFruits = [...fruits, ...berries];

x = allFruits;

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat();


// Static methods on Array object

x = Array.isArray(fruits); //true

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;


x = Array.of(a, b, c);



console.log(x);