function getCelsius(fahrenheit){
  const celsius = ((fahrenheit - 32) / 1.8).toFixed(0)
  return `The temperature in Celsius is: ${celsius}\xB0C`
}

const oneLine = fah => `The temperature in Celsius is:  ${(fah-32)/1.8}\xB0C`

console.log(oneLine(13));
console.log(oneLine(122));
console.log(getCelsius(32));
console.log(getCelsius(110));

const minMax = (...arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(minMax(1,2,3,4,5,6,7,8,9,10));
console.log(minMax(1110, 888, 1313, 666, 999, 777, 360));

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`

  console.log(output);
})(10, 5);