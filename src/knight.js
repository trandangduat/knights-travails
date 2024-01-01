import blackKnightImage from "./knight_piece.png";
import whiteKnightImage from "./knight_piece.png";
import {
  board,
  moveHistory,
  destination,
  afterPlayerTurn,
  shortestPath,
  cellBorderHover,
} from "./DOM.js";
import { 
  isInsideBoard, 
  toggleHighlight, 
  getCellDOM, 
  boardCellAtPosition,
  newPiece,
} from "./board.js";

let rowDir = [-2, -1, 1, 2,  2,  1, -1, -2];
let colDir = [ 1,  2, 2, 1, -1, -2, -2, -1];

function Knight (row, col) {
  return { row, col }; 
}

function knightPieceDOM (cellRow = 0, cellCol = 0, isBlack = false) {
  if (!isBlack) {
    return newPiece(whiteKnightImage, cellRow, cellCol);
  } else {
    return newPiece(blackKnightImage, cellRow, cellCol);
  }
}

function handleKnightPiece (event) {
  const piece = event.target;
  
  const initCell = getPieceCell(); // Get current position of the piece
  const validNextMoves = getValidNextMoves(initCell.row, initCell.col); 
  const guideDots = [];

  // Highlight current cell the piece is in
  toggleHighlight(initCell.row, initCell.col);

  // Show indicators for valid next moves
  validNextMoves.forEach((move) => {
    let guideDot = getCellDOM(move.row, move.col).querySelector(".guide-dot"); 
    guideDot.style.display= "block";
    guideDots.push(guideDot);
  })

  // Moving along with the cursor
  document.addEventListener("mousemove", handleMouseMove);

  // Done dragging
  piece.addEventListener("mouseup", handleMouseUp);
 
  // METHODS:
  function getPieceCell() {
    let match = piece.style.transform.match(/translate\((.*?)\)/); // capture all matching of "translate(...)" 
    let translateValues = match[1].split(','); // translate(100%, 100%) should return "100%, 100%"
    return {
      row: parseInt(translateValues[1]) / 100,
      col: parseInt(translateValues[0]) / 100,
    }; 
  }
  
  function getValidNextMoves (pieceRow, pieceCol) {
    const validNextMoves = [];
    for (let i = 0; i < rowDir.length; i++) {
      let nextMoveRow = pieceRow + rowDir[i];
      let nextMoveCol = pieceCol + colDir[i];
      if (isInsideBoard(nextMoveRow, nextMoveCol)) {
        validNextMoves.push({
          row: nextMoveRow, 
          col: nextMoveCol
        });
      } 
    }
    return validNextMoves;
  }

  function movingToCell (row, col) {
    piece.style.transform = `translate(${col * 100}%, ${row * 100}%)`;
  }

  function movingTo (x, y) {
    piece.style.transform = `translate(${x * 100}%, ${y * 100}%)`;
  }
  
  function handleMouseMove (event) {
    cellBorderHover.style.visibility = "visible";
    let cellPos = boardCellAtPosition(event.pageX - board.offsetLeft, event.pageY - board.offsetTop);
    cellBorderHover.style.transform = `translate(${cellPos.col * 100}%, ${cellPos.row * 100}%)`;
    movingTo(
      (event.pageX - board.offsetLeft - piece.offsetWidth / 2) / getCellDOM(0, 0).offsetWidth, 
      (event.pageY - board.offsetTop - piece.offsetHeight / 2) / getCellDOM(0, 0).offsetHeight, 
    );
  }

  function handleMouseUp (event) {
    // Get the cell under cursor
    let cellPos = boardCellAtPosition(event.pageX - board.offsetLeft, event.pageY - board.offsetTop);

    // If the cell is valid next move then places it there, else goes back to initial position
    if (validNextMoves.some(move => move.row === cellPos.row && move.col === cellPos.col)) {
      moveHistory.push(cellPos);
      movingToCell(cellPos.row, cellPos.col);
      piece.setAttribute("data-count", moveHistory.length);
      // If we reach the destination
      if (cellPos.row === destination.row && cellPos.col === destination.col) {
        setTimeout(afterPlayerTurn.bind(null, true), 100);
      }
      // If the number of moves exceeds the smallest number of moves needed
      else if (moveHistory.length >= shortestPath.length) {
        setTimeout(afterPlayerTurn.bind(null, false), 100);
      }      
    } else {
      movingToCell(initCell.row, initCell.col);
    }
    
    // Remove unneccessary event listeners
    document.removeEventListener("mousemove", handleMouseMove);
    piece.removeEventListener("mouseup", handleMouseUp);
    
    // Remove indicators (next valid moves indicator, cell on mouse position indicator)
    guideDots.forEach((dot) => { 
      dot.style.display = "none" 
    });
    cellBorderHover.style.visibility = "hidden";
    
    // Remove Highlight
    toggleHighlight(initCell.row, initCell.col);
  }

}

export { 
  rowDir,
  colDir,
  Knight,
  knightPieceDOM,
  handleKnightPiece,
};

