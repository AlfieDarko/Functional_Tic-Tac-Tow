class Board {
  constructor() {
    this.grid = Array(9).fill("");
    this.allWinningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  // groupby
  hasAnybodyWon(grid) {
    const theAnswer = this.allWinningLines.find(winnerLine => {
      let [a, b, c] = winnerLine.map(winnerLine => winnerLine);
      return grid[a] && grid[a] === grid[b] && grid[a] === grid[c]
        ? true
        : false;
    });
    return theAnswer == null ? false : true;
  }

  draw(grid) {
    const anySquaresLeftBool = grid
      .filter(gridElement => {
        gridElement == "";
      })
      .every(gridElement => gridElement !== "");
    return anySquaresLeftBool && !this.hasAnybodyWon(grid) ? true : false;
  }

  availableSquares(grid) {
    return grid
      .map((elementInGrid, indexOfElementInGrid) => {
        if (elementInGrid == "") return indexOfElementInGrid;
      })
      .filter(gridElement => gridElement !== undefined);
  }

  nextPlayer(grid) {
    const countGridMovesByLength = grid => {
      return grid.filter(
        gridElement => gridElement == "X" || gridElement == "O"
      ).length;
    };
    return countGridMovesByLength(grid) % 2 == 0 ? "X" : "O";
  }

  setGridSize(number) {
    this.grid=Array(number*number).fill("")
  }
}

module.exports = Board;
