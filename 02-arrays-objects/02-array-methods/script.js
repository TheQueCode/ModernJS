let x;

const arr = [34, 55, 95, 20, 15];

arr.push(100);

arr.pop();

arr.unshift(13);

arr.shift();

// arr.reverse();

x = arr.includes(20); //true
x = arr.includes(200); //false

x = arr.indexOf(15); //4

x = arr.indexOf(340); // -1

x = arr.slice(1);

// x = arr.splice(-2); //changes original array

x = arr.slice(1, 4).reverse();

console.log(x);