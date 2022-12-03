
/*
A function that takes 2 arguments, but returns true if the first argument (string),
ends in the second argument(also a string).
psudocode
1. The function will take 2 parameters
2. Use the .endsWith() method to return the value of the parameters.
*/

function argument(a, b) {
  return a.endsWith(b);
}
console.log(argument("learnable", "able"));
module.exports = { console }