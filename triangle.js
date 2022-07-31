for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

let sq = Number(prompt("enter a number"));
for (let e = "#"; e.length <= sq; e += "#") {
  console.log(e);
}

//Fuzz Buzz FuzzBuzz fcn
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log("Fizz");
  }
  if (num % 5 === 0) {
    console.log("Buzz");
  }
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  }
  console.log(num);
}
