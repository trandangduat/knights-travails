import knightImage from "./knight_piece.png";
import knightImage_right from "./knight_piece_right.png";
import knightMovingImage from "./knight_piece_mousemove.png";
import knightMovingImage_right from "./knight_piece_mousemove_right.png";
import {
  board,
  moveHistory,
  destination,
  endGame,
  shortestPath,
  cellBorderHover,
  alreadyEndGame,
  playerPath,
} from "./DOM.js";
import { 
  isInsideBoard, 
  toggleHighlight, 
  getCellDOM, 
  boardCellAtPosition,
  newPiece,
  createLine,
} from "./board.js";

function Knight (row, col) {
  return { row, col }; 
}

const BOARD_BORDER = 20;

let rowDir = [-2, -1, 1, 2,  2,  1, -1, -2];
let colDir = [ 1,  2, 2, 1, -1, -2, -2, -1];
// let dirAngle = [-60, -30, 30, 60, 120, 150, -150, -120];
let dirAngle = [-63, -27, 27, 63, 117, 153, -153, -117];
let angleDirMap = {};

for (let i = 0; i < rowDir.length; i++) {
  const key = rowDir[i] + ',' + colDir[i];
  angleDirMap[key] = dirAngle[i];
}

// Function to map rowDir and colDir to dirAngle
function getDirAngle(rowDif, colDif) {
  const key = rowDif + ',' + colDif;
  return angleDirMap[key] || null; // Return null if pair not found
}

function knightPieceDOM (cellRow = 0, cellCol = 0, isBlack = false) {
  if (!isBlack) {
    return newPiece(knightImage, cellRow, cellCol);
  } else {
    return newPiece(knightImage, cellRow, cellCol);
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
    let xCord = event.pageX - board.offsetLeft - BOARD_BORDER;
    let yCord = event.pageY - board.offsetTop - BOARD_BORDER;
    let nextCell = boardCellAtPosition(xCord, yCord);
    //Change piece background state
    if (nextCell.col < initCell.col) {
      piece.style.backgroundImage = `url(${knightMovingImage})`;
    } else {
      piece.style.backgroundImage = `url(${knightMovingImage_right})`;
    }
    
    cellBorderHover.style.transform = `translate(${nextCell.col * 100}%, ${nextCell.row * 100}%)`;
    movingTo(
      (event.pageX - board.offsetLeft - piece.offsetWidth / 2 - BOARD_BORDER) / getCellDOM(0, 0).offsetWidth, 
      (event.pageY - board.offsetTop - piece.offsetHeight / 2 - BOARD_BORDER) / getCellDOM(0, 0).offsetHeight, 
    );
    if (alreadyEndGame) {
      handleMouseUp(event);
    }
  }


  function handleMouseUp (event) {
    // Get the cell under cursor
    let xCord = event.pageX - board.offsetLeft - BOARD_BORDER;
    let yCord = event.pageY - board.offsetTop - BOARD_BORDER;
    let nextCell = boardCellAtPosition(xCord, yCord);

    // Set piece background to normal (cat staying still) 
    if (nextCell.col < initCell.col) {
      piece.style.backgroundImage = `url(${knightImage})`;
    } else {
      piece.style.backgroundImage = `url(${knightImage_right})`;
    }
    
    // If the cell is valid next move then places it there, else goes back to initial position
    if (validNextMoves.some(move => move.row === nextCell.row && move.col === nextCell.col)) {
      // Create a line connecting initCell & nextCell
      playerPath.appendChild(createLine(initCell.row, initCell.col, nextCell.row, nextCell.col));
      
      moveHistory.push(nextCell);
      movingToCell(nextCell.row, nextCell.col);
      piece.setAttribute("data-count", moveHistory.length);
      
      // If we reach the destination
      if (nextCell.row === destination.row && nextCell.col === destination.col) {
        setTimeout(endGame.bind(null, true), 100);
      }
      // If the number of moves exceeds the smallest number of moves needed
      else if (moveHistory.length >= shortestPath.length) {
        setTimeout(endGame.bind(null, false, "You're out of moves!"), 100);
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
  getDirAngle,
};

