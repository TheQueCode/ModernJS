let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers.length; // 5

fruits[1] = 'pear';
// fruits.length = 2;

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);