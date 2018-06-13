function Board() {
  this.grid = Array(9).fill("")
  this.winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
}

// change parameter name to grid to be more
// clear about what is the expected input
Board.prototype.hasAnybodyWon = function(position) {
  const result = this.winningLines.find(i => {
    const lines = i.map((i) => i)
    let [a, b, c] = lines
    const checkPositions = (position) => position[a] &&
      position[a] === position[b] &&
      position[a] === position[c] ? true : false
    return checkPositions(position)
  })
  const checkForWinningLine = (x) => x == null ? false : true
  return checkForWinningLine(result)
};

Board.prototype.draw = function(grid) {
  const squaresLeft = grid.find(i => {
    return i == ""
  })

  const anySquaresLeft = (squaresLeft) => squaresLeft !== "" ? true : false
  const resultAnySquaresLeft = anySquaresLeft(squaresLeft)
  const resultHasAnybodyWon = this.hasAnybodyWon(grid)
  const isTheGameADraw = (resultAnySquaresLeft, resultHasAnybodyWon) =>
    (resultAnySquaresLeft && !resultHasAnybodyWon) ? true : false

  return isTheGameADraw(resultAnySquaresLeft, resultHasAnybodyWon)
}

Board.prototype.availableSquares = function(grid) {
  const availableSquaresIndex = grid.map((element, index) => {
    if (element == "") {
      return index
    }
  }).filter(n => n)
  return availableSquaresIndex
};



module.exports = Board