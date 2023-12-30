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
const undoButton = document.querySelector("#undo");
const startButton = document.querySelector("#start-game");
const countDownProgressBar = document.querySelector("#countdown #progress");

// Add cell indicator for mouse position
const cellBorderHover = document.createElement("div");
cellBorderHover.setAttribute("id", "hover-border");
cellBorderHover.style.visibility = "hidden";
board.appendChild(cellBorderHover);

// Place a piece in random cell as destination 
const desPiece = newPiece(destinationPiece, destination.row, destination.col);
desPiece.style.pointerEvents = "none";

// Place a knight in random cell as source
const knightPiece = knightPieceDOM(source.row, source.col);
knightPiece.setAttribute("data-count", "0");
knightPiece.classList.add("knight");

// Automove the shortest path when clicking the button
const hintPiece = newPiece(hintPieceSouce, source.row, source.col);
hintPiece.setAttribute("data-count", "0");
hintPiece.classList.add("knight");
hintPiece.classList.add("black");
hintPiece.style.pointerEvents = "none";

let hintPieceCreated = false;
let alreadyEndGame = false;

function domManipulate() {
  appendToBoard();

  knightPiece.addEventListener("mousedown", handleKnightPiece);
  
  showShortestPathButton.addEventListener("click", (event) => {
    if (hintPieceCreated === false) {
      board.appendChild(hintPiece);
      hintPieceCreated = true;
    } else {
      moveTo(hintPiece, source.row, source.col);
    }
    
    hintPiece.setAttribute("data-count", 0);
    autoMove(hintPiece, shortestPath); 
  });
  
  undoButton.addEventListener("click", (event) => {
    undoMove(knightPiece); 
  });

  startButton.addEventListener("click", (event) => {
    console.log("start countDown");
    const SECONDS = 5;
    let milisec = 0;
    
    const updateCountdown = setInterval(() => {
      if (milisec && milisec % 1000 === 0) {
        console.log(milisec / 1000 + " seconds");
      }
      if (alreadyEndGame) {
        console.log("already end game");
        clearTimeout(countDown);
        clearInterval(updateCountdown);
        return;
      }
      milisec += 100;
      countDownProgressBar.style.width = `${milisec / (SECONDS * 10)}%`;
    }, 100);
    
    const countDown = setTimeout(() => {
      if (!alreadyEndGame) {
        afterPlayerTurn(false);
      } 
      clearTimeout(countDown);
      clearInterval(updateCountdown);
    }, 1000 * SECONDS);
  });
}

function appendToBoard() {
  board.appendChild(desPiece);
  board.appendChild(knightPiece);
}

function moveTo (piece, row, col) {
  piece.style.transform = `translate(${col * 100}%, ${row * 100}%)`;
}

function autoMove (piece, movesList) {
  let i = 0;
  piece.style.transition = "300ms";
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

function undoMove(piece) {
  if (moveHistory.length === 0) return;
  moveHistory.pop();
  if (moveHistory.length > 0) {
    moveTo(piece, moveHistory[moveHistory.length-1].row, moveHistory[moveHistory.length-1].col);
  } else { 
    moveTo(piece, source.row, source.col);
  }
  piece.setAttribute("data-count", moveHistory.length);
}

function afterPlayerTurn (playerWins) {
  alreadyEndGame = true;
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
  domManipulate,
  afterPlayerTurn,
  shortestPath,
  cellBorderHover,
  undoButton,
}
