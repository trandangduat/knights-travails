import './style.css';

import { rowDir, colDir, Knight, knightPieceDOM } from "./knight.js";
import { BOARD_SIZE, isInsideBoard, boardContainer, toggleHighlight, createBoardDOM } from "./board.js";
import { findShortestPath } from "./shortestPath.js";

const DOMmanip = (function() {
  const board = createBoardDOM();
  
  // Create a piece at position (0, 0)
  const piece = knightPieceDOM(0, 0);
  board.appendChild(piece);

  piece.addEventListener("mousedown", (event) => {
    const oldLeft = parseInt(piece.style.left, 10);
    const oldTop = parseInt(piece.style.top, 10);
    const currentPieceCell = boardCellAtPosition(oldLeft, oldTop);
    
    function movingTo (x, y) {
      piece.style.left = x - piece.offsetWidth / 2 + 'px';
      piece.style.top = y - piece.offsetHeight / 2 + 'px';
    }
    
    function handleMouseMove (event) {
      movingTo(event.pageX, event.pageY);
    }

    function handleMouseUp (event) {
      console.log("mouse up");
      console.log(boardCellAtPosition(event.pageX, event.pageY));
      // Remove unneccessary event listener
      document.removeEventListener("mousemove", handleMouseMove);
      piece.removeEventListener("mouseup", handleMouseUp);
    }

    function boardCellAtPosition (x, y) {
      let cellSideLength = board.offsetHeight / 8;
      let row = (y - board.offsetTop) / cellSideLength;
      let col = (x - board.offsetLeft) / cellSideLength;
      row = parseInt(row);
      col = parseInt(col);
      return {row, col};
    }

    // Change piece position to under cursor right after "mousedown" event
    movingTo(event.pageX, event.pageY);
    // Highlight current cell the piece is in
    toggleHighlight(currentPieceCell.row, currentPieceCell.col);
    // Show valid next moves
    for (let i = 0; i < 8; i++) {
      let nextMoveRow = currentPieceCell.row + rowDir[i];
      let nextMoveCol = currentPieceCell.col + colDir[i];
      if (isInsideBoard(nextMoveRow, nextMoveCol)) {
        console.log(nextMoveRow, nextMoveCol);
        let guideDot = document.querySelector(`.cell[data-row="${nextMoveRow}"][data-col="${nextMoveCol}"] > .guide-dot`);
        guideDot.style.display = "block";
      } 
    }

    // Moving along with the cursor
    document.addEventListener("mousemove", handleMouseMove);

    // Done dragging
    piece.addEventListener("mouseup", handleMouseUp);
  });
  
})();



// let S = Knight(0, 0);
// let D = Knight(3, 3);
// console.log(findShortestPath(BOARD_SIZE, S, D));
