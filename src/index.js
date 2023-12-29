import './style.css';

import { rowDir, colDir, Knight, knightPieceDOM } from "./knight.js";
import { BOARD_SIZE, isInsideBoard, boardContainer, toggleHighlight, createBoardDOM, getCellDOM } from "./board.js";
import { findShortestPath } from "./shortestPath.js";


const DOMmanip = (function() {
  const board = createBoardDOM();
  
  // Create a piece at position (0, 0)
  const piece = knightPieceDOM(1, 1);
  board.appendChild(piece);

  piece.addEventListener("mousedown", (event) => {
    const validNextMoves = []; 
    const guideDots = [];
    
    // Get current position of the piece
    let match = piece.style.transform.match(/translate\((.*?)\)/); // capture all matching of "translate(...)" 
    let translateValues = match[1].split(','); // translate(100%, 100%) should return "100%, 100%"
    const initCell = {
      row: parseInt(translateValues[1]) / 100,
      col: parseInt(translateValues[0]) / 100,
    }; 

    // Highlight current cell the piece is in
    toggleHighlight(initCell.row, initCell.col);
    
    // Insert all valid next moves into the array 'validNextMoves'
    getValidNextMoves(initCell.row, initCell.col);

    // Show indicators for valid next moves
    console.log(initCell);
    console.log("validNextMoves", validNextMoves);
    validNextMoves.forEach((move) => {
      let guideDot = getCellDOM(move.row, move.col).querySelector(".guide-dot"); 
      guideDot.style.display = "block";
      guideDots.push(guideDot);
    })

    // Moving along with the cursor
    document.addEventListener("mousemove", handleMouseMove);

    // Done dragging
    piece.addEventListener("mouseup", handleMouseUp);
   
    // METHODS:
    function movingToCell (row, col) {
      piece.style.transform = `translate(${col * 100}%, ${row * 100}%)`;
    }

    function movingTo (x, y) {
      piece.style.transform = `translate(${x * 100}%, ${y * 100}%)`;
    }
    
    function handleMouseMove (event) {
      movingTo(
        (event.pageX - board.offsetLeft - piece.offsetWidth / 2) / getCellDOM(0, 0).offsetWidth, 
        (event.pageY - board.offsetTop - piece.offsetHeight / 2) / getCellDOM(0, 0).offsetHeight, 
      );
    }

    function handleMouseUp (event) {
      // Get the cell under cursor
      let cellPos = boardCellAtPosition(event.pageX - board.offsetLeft, event.pageY - board.offsetTop);
      console.log(cellPos)

      // If the cell is valid next move then places it there, else goes back to inital position
      if (validNextMoves.some(move => move.row === cellPos.row && move.col === cellPos.col)) {
        movingToCell(cellPos.row, cellPos.col);
      } else {
        movingToCell(initCell.row, initCell.col);
      }
      
      // Remove unneccessary event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      piece.removeEventListener("mouseup", handleMouseUp);
      
      // Remove next move indicators (guide dots)
      guideDots.forEach((dot) => { 
        dot.style.display = "none" 
      });
      
      // Remove Highlight
      toggleHighlight(initCell.row, initCell.col);
    }

    function boardCellAtPosition (x, y) {
      let row = (y + 1) / getCellDOM(0, 0).offsetHeight; // +1 to avoid decimal error, position got from offsetHeight is round to interger
      let col = (x + 1) / getCellDOM(0, 0).offsetWidth;
      row = parseInt(row);
      col = parseInt(col);
      return {row, col};
    }

    function getValidNextMoves (pieceRow, pieceCol) {
      for (let i = 0; i < 8; i++) {
        let nextMoveRow = pieceRow + rowDir[i];
        let nextMoveCol = pieceCol + colDir[i];
        if (isInsideBoard(nextMoveRow, nextMoveCol)) {
          validNextMoves.push({row: nextMoveRow, col: nextMoveCol});
        } 
      }
    }
    
  });
  
})();

// let S = Knight(0, 0);
// let D = Knight(3, 3);
// console.log(findShortestPath(BOARD_SIZE, S, D));
