import './style.css';

import { rowDir, colDir, Knight, knightPieceDOM } from "./knight.js";
import { BOARD_SIZE, isInsideBoard, boardContainer, toggleHighlight, createBoardDOM, getCellDOM } from "./board.js";
import { findShortestPath } from "./shortestPath.js";


const DOMmanip = (function() {
  const board = createBoardDOM();
  const CELL_SIDE_LENGTH = getCellDOM(0, 0).offsetWidth;
  
  // Create a piece at position (0, 0)
  const piece = knightPieceDOM(0, 0);
  board.appendChild(piece);

  piece.addEventListener("mousedown", (event) => {
    const currentPieceLeft = parseFloat(piece.style.left);
    const currentPieceTop = parseFloat(piece.style.top);
    const currentPieceCell = boardCellAtPosition(currentPieceLeft, currentPieceTop);
    const guideDots = [];

    function movingTo (x, y) {
      // This assumes anchor point of the piece is in its center
      piece.style.left = x - piece.offsetWidth / 2 + 'px';
      piece.style.top = y - piece.offsetHeight / 2 + 'px';
    }
    
    function handleMouseMove (event) {
      movingTo(event.pageX - board.offsetLeft, event.pageY - board.offsetTop);
    }

    function handleMouseUp (event) {
      // console.log("mouse up");
      // console.log(boardCellAtPosition(event.pageX, event.pageY));
      // Place the piece in the cell under cursor
      let cellPos = boardCellAtPosition(event.pageX - board.offsetLeft, event.pageY - board.offsetTop);
      let cell = getCellDOM(cellPos.row, cellPos.col);
      
      piece.style.left = cell.offsetLeft + 'px';
      piece.style.top = cell.offsetTop + 'px';
      // Remove unneccessary event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      piece.removeEventListener("mouseup", handleMouseUp);
      // Remove next move indicators (guide dots)
      guideDots.forEach((dot) => { 
        dot.style.display = "none" 
      });
      // Remove Highlight
      toggleHighlight(currentPieceCell.row, currentPieceCell.col);
    }

    function boardCellAtPosition (x, y) {
      let row = (y + 1) / CELL_SIDE_LENGTH; // +1 to avoid decimal error, position got from offsetHeight is round to interger
      let col = (x + 1) / CELL_SIDE_LENGTH;
      row = parseInt(row);
      col = parseInt(col);
      return {row, col};
    }

    // Change piece position to under cursor right after "mousedown" event
    movingTo(event.pageX - board.offsetLeft, event.pageY - board.offsetTop);
    // Highlight current cell the piece is in
    toggleHighlight(currentPieceCell.row, currentPieceCell.col);
    // Show indicators for valid next moves
    console.log(currentPieceLeft, currentPieceTop);
    console.log(currentPieceCell);
    for (let i = 0; i < 8; i++) {
      let nextMoveRow = currentPieceCell.row + rowDir[i];
      let nextMoveCol = currentPieceCell.col + colDir[i];
      if (isInsideBoard(nextMoveRow, nextMoveCol)) {
        // console.log(nextMoveRow, nextMoveCol);
        let guideDot = document.querySelector(`.cell[data-row="${nextMoveRow}"][data-col="${nextMoveCol}"] > .guide-dot`);
        guideDot.style.display = "block";
        guideDots.push(guideDot);
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
