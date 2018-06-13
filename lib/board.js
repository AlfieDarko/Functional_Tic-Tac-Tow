function Board() {
  this.grid = Array(9).fill("")
}

Board.prototype.hasAnybodyWon = function(position) {
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

  const result = winningLines.find(i => {
    const [a, b, c] = i
    const checkPositions = position => position[a] && position[a] === position[b] && position[a] === position[c] ? true : false
    return checkPositions(position)
  })

  const checkForWinningLine = x => x == null ? false : true
  return checkForWinningLine(result)
};

module.exports = Board