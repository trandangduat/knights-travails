import { handleKnightPiece, knightPieceDOM } from "./knight.js";
import { BOARD_SIZE, createBoardDOM, newPiece } from "./board.js";
import { findShortestPath } from "./shortestPath.js";
import destinationPiece from "./destination_piece.png";
import hintPieceSouce from "./hint_piece.png";

let source = {
  row: parseInt(Math.random() * BOARD_SIZE),
  col: parseInt(Math.random() * BOARD_SIZE)
};

let destination = {
  row: parseInt(Math.random() * BOARD_SIZE),
  col: parseInt(Math.random() * BOARD_SIZE)
};

while (Math.abs(source.row - destination.row) + Math.abs(source.col - destination.col) <= 4) {
  destination = {
    row: parseInt(Math.random() * BOARD_SIZE),
    col: parseInt(Math.random() * BOARD_SIZE)
  }
}

const board = createBoardDOM();
const moveHistory = [];
const shortestPath = findShortestPath(source, destination);
const showShortestPathButton = document.querySelector("#show-sp")

function DOM() {
  // Place a piece in random cell as destination 
  const desPiece = newPiece(destinationPiece, destination.row, destination.col);
  desPiece.style.pointerEvents = "none";
  
  // Place a knight in random cell as source
  const knightPiece = knightPieceDOM(source.row, source.col);
  knightPiece.setAttribute("data-count", "0");
  knightPiece.classList.add("knight");
  
  // Append them to the board
  board.appendChild(desPiece);
  board.appendChild(knightPiece);

  knightPiece.addEventListener("mousedown", handleKnightPiece);
  
  // Automove the shortest path when clicking the buttonk
  const hintPiece = newPiece(hintPieceSouce, source.row, source.col);
  hintPiece.setAttribute("data-count", "0");
  hintPiece.classList.add("knight");
  hintPiece.classList.add("black");
  hintPiece.style.pointerEvents = "none";
  let hintPieceCreated = false;
  
  showShortestPathButton.addEventListener("click", (e) => {
    // Create new piece at source 
    if (hintPieceCreated === false) {
      board.appendChild(hintPiece);
      hintPieceCreated = true;
    } else {
      moveTo(hintPiece, source.row, source.col);
    }
    
    hintPiece.setAttribute("data-count", 0);
    autoMove(hintPiece, shortestPath); 
  });
}

function moveTo (piece, row, col) {
  piece.style.transform = `translate(${col * 100}%, ${row * 100}%)`;
}

function autoMove (piece, movesList) {
  piece.style.transition = "200ms"; 
  let i = 0;
  let moving = setInterval(() => {
    if (i == movesList.length) {
      clearInterval(moving);
      piece.style.transition = "none";
      console.log("done automove!");
      return;
    }
    moveTo(piece, movesList[i].row, movesList[i].col);
    piece.setAttribute("data-count", i + 1);
    i++;
  }, 1000);
}

function afterPlayerTurn (playerWins) {
  if (playerWins) {
    alert("congratz!");
  } else {
    alert("loser");
  }
}

export {
  board, 
  moveHistory,
  destination,
  DOM,
  afterPlayerTurn,
  shortestPath,
}
