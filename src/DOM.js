import { handleKnightPiece, knightPieceDOM } from "./knight.js";
import { BOARD_SIZE, createBoardDOM, newPiece } from "./board.js";
import destinationPiece from "./destination_piece.png";

const board = createBoardDOM();
const moveHistory = [];
const destination = {
  row: parseInt(Math.random() * BOARD_SIZE),
  col: parseInt(Math.random() * BOARD_SIZE),
}

function DOM() {
  // Place a piece in random cell as destination 
  const desPiece = newPiece(destinationPiece, destination.row, destination.col);
  board.appendChild(desPiece);
  
  // Create a knight piece at position (0, 0)
  const knightPiece = knightPieceDOM(0, 0);
  knightPiece.setAttribute("data-count", "0");
  knightPiece.classList.add("knight");
  board.appendChild(knightPiece);
  
  knightPiece.addEventListener("mousedown", handleKnightPiece);

}

function afterPlayerTurn() {
  alert(moveHistory.length + " steps!");
}

export {
  board, 
  moveHistory,
  destination,
  DOM,
  afterPlayerTurn,
}
