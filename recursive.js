function recursivePower(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * recursivePower(base, expo - 1);
  }
}
console.log(recursivePower(2, 3));

//normal function
const power = (base, expo) => {
  let result = 1;
  for (let i = 0; i < expo; i++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 3));
