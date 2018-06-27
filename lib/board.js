class Board {
  constructor() {
    this.grid = Array(9).fill("");
    // this.allWinningLines = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6]
    // ];

    this.allWinningLines = []
  }

  // groupby
  hasAnybodyWon(grid) {
    const theAnswer = this.allWinningLines.find(winnerLine => {
      let [a, b, c] = winnerLine.map(winnerLine => winnerLine);
      console.log(winnerLine)
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

    findWinningLines(grid) {

      let times = Math.sqrt(grid.length)
      // add winningLines from all the rows
      for (let index = 0, timesAccumulated = 0, gridIndex = 0;
         index < times; index++, timesAccumulated+=times, 
         gridIndex++) {
        this.allWinningLines.push([timesAccumulated])
      for(let x = 0; x < times - 1  ; x++){
        this.allWinningLines[index].push(gridIndex+=1)
      }
      }

      // add winningLines from all columns
      for (let i = 0, j = 0, k = times; i < times; i++, j+=1, k++) {
        this.allWinningLines.push([j])
        for(let x = 0, w = times; x < times - 1; x++, w+=times){
          this.allWinningLines[k].push(j+w)
        }
      }

      // find right to left diagonal winning line
      for (let i = 0, j = 0; i < 1; i++){
        this.allWinningLines.push([times - 1])
        for(let k = 0, l = 2; k < times - 1; k++, l++){
          this.allWinningLines[this.allWinningLines.length-1]
            .push((times - 1 )* l)
        }
      }

      // find left to right diagonal winning line
      for (let i = 0, j = 0; i < 1; i++){
        console.log(this.winningLines2)
        this.allWinningLines.push([i])
        for(let k = 0, l = 1; k < times - 1; k++, l++){
          this.allWinningLines[this.allWinningLines.length-1]
            .push(l += times)
        }

      
      }





    }

}

module.exports = Board;
