function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      console.log(`ops, ${current} is too big`);

      return null;
    } else {
      console.log("curent in els", current);
      console.log("histo in else", history);
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(1));
