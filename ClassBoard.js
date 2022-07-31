//chessboard fcn

for (let l = 1; l < 8; l++) {
  let board = "";
  for (let n = 0; n < 8; n++) {
    if (l % 2 === 0 && n % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }

  board += "\n";
  console.log(board);
}
