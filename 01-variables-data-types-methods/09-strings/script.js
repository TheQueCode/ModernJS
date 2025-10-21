let x;

const name = 'Que';
const age = 30;

// Template literals (Template strings)
x = `Hello, my name is ${name} and I am ${age} years old.`

// String Properties and Methods

const s = 'Hello World';

x = s.length;

// Access value by number keys
x = s[0];
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0); // H

x = s.indexOf('l'); // 2

x = s.substring(0, 4); // Hell

x = s.substring(7); // orld

x = s.slice(0, 4); // Hell

x = s.slice(-11, -6) // Hello

x = '          Hello World';
x = x.trim()

x = s.replace('World', 'Everyone');

x = s.includes('Hello'); // true

x = s.valueOf(); // Hello World

x = s.split('');


console.log(x);