function optional(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}

console.log(optional(10));
console.log(optional(3, 5));

//square
function squres(a) {
  return a * a;
}
console.log(squres(4, true, "optional"));

//powe ex 2**10
const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count <= exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

//arrow fcn
const arrowPower = (base, expo) => {
  let r = 1;
  for (let c = 0; c < expo; c++) {
    r *= base;
  }
  return r;
};
console.log(arrowPower(2, 5));

//clossure
//a fcn returning its local bind
function clos(a) {
  let local = a;
  return () => local * local;
}

let sq = clos(3);
console.log(sq); // output: () => (local * local)
console.log(sq()); // output: 9

//note when a return key is returning a function, to call that function,
//we need to create a variable to grasp the first function and then
//invoque that variable with open and close parantheses.

let multiplier = (factor) => {
  return (anotherNumber) => anotherNumber * factor;
};

console.log(multiplier(3));
let returning = multiplier(3); //
console.log(returning(2));
