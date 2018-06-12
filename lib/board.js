function Board() {
  this.grid = Array(9).fill("")
}

Board.prototype.hasAnybodyWon = function(squares) {
  // board will have a grid with 9 elements
  // has someone won?
  // check if row -> 012/345/678
  // check if col ->036/147/258
  // check if 048/246

  // if not then draw

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  winningLines.forEach(x => console.log(x))

  for (let i = 0; i < winningLines.length; i++) {
    loops through winning
    const [a, b, c] = winningLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }

  }

};

module.exports = Board