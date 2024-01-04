import { handleKnightPiece, knightPieceDOM } from "./knight.js";
import { BOARD_SIZE, createBoardDOM, newPiece, createLine } from "./board.js";
import { findShortestPath } from "./shortestPath.js";
import destinationPiece from "./destination_piece.png";
import hintPieceSrc from "./hint_piece.png";
import hintPieceSrc_left from "./hint_piece_left.png";
import { Noti } from "./noti.js";
import backgroundMusic from "./background_music.mp3";
import victorySound from "./victory_sound.mp3";
import failSound from "./fail_sound.mp3";

let hintPieceCreated = false;
let alreadyEndGame = false;
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
const playerPath = document.querySelector("#player-path svg");
const hintPath = document.querySelector("#hint-path svg");
const bgMusic = new Audio(backgroundMusic);
const winSFX = new Audio(victorySound);
const loseSFX = new Audio(failSound);

// Add cell indicator for mouse position
const cellBorderHover = document.createElement("div");
cellBorderHover.setAttribute("id", "hover-border");
cellBorderHover.style.visibility = "hidden";
board.appendChild(cellBorderHover);

// Place a piece in random cell as destination 
const desPiece = newPiece(destinationPiece, destination.row, destination.col);
desPiece.classList.add("destination");
desPiece.style.pointerEvents = "none";

// Place a knight in random cell as source
const knightPiece = knightPieceDOM(source.row, source.col);
knightPiece.setAttribute("data-count", "0");
knightPiece.classList.add("knight");

// Automove the shortest path when clicking the button
const hintPiece = newPiece(hintPieceSrc, source.row, source.col);
hintPiece.setAttribute("data-count", "0");
hintPiece.classList.add("knight");
hintPiece.classList.add("hint");
hintPiece.style.pointerEvents = "none";

function domManipulate() {
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
    bgMusic.play();
    appendToBoard();
    removeClass("disabled"); // remove "disabled" class for all elements include "disabled" class
    
    startButton.remove();
    
    const SECONDS = 5;
    let total = 0;
    const updateCountdown = setInterval(() => {
      countDownProgressBar.style.width = `${total / (SECONDS * 10)}%`;
      if (alreadyEndGame) {
        clearTimeout(countDown);
        clearInterval(updateCountdown);
        return;
      }
      total += 10;
    }, 10);
    
    const countDown = setTimeout(() => {
      if (!alreadyEndGame) {
        endGame(false, "You're out of time!");
      } 
      clearTimeout(countDown);
      clearInterval(updateCountdown);
    }, 1000 * SECONDS);
  });
}

function removeClass (className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((element) => {
    element.classList.remove(className); 
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
  let moving = setInterval(() => {
    if (i == movesList.length) {
      clearInterval(moving);
      return;
    }
    if (i > 0) {
      hintPath.appendChild(createLine(movesList[i - 1].row, movesList[i - 1].col, movesList[i].row, movesList[i].col));
      if (movesList[i - 1].col > movesList[i].col) {
        piece.style.backgroundImage = `url(${hintPieceSrc_left})`;
      } else {
        piece.style.backgroundImage = `url(${hintPieceSrc})`;
      }
    } else {
      hintPath.appendChild(createLine(source.row, source.col, movesList[i].row, movesList[i].col));
      if (source.col > movesList[i].col) {
        piece.style.backgroundImage = `url(${hintPieceSrc_left})`;
      } else {
        piece.style.backgroundImage = `url(${hintPieceSrc})`;
      }
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
  // remove the previous line drawn
  playerPath.lastElementChild.remove();
}

const randomWinGif = [
  "https://giphy.com/embed/CXCDyaiHnEm2m0OuWG",
  "https://giphy.com/embed/3oEduKoCblNVAgAbYI",
  "https://giphy.com/embed/Cdkk6wFFqisTe",
];

function getRandomGif() {
  return randomWinGif[parseInt(Math.random() * 2)];
}

function endGame (playerWins, description = "") {
  bgMusic.pause();
  alreadyEndGame = true;
  board.style.pointerEvents = "none";
  undoButton.classList.add("disabled");
  knightPiece.classList.add("disabled");
  let header = "";
  if (playerWins) {
    winSFX.play();
    header = "<h1 id = 'win'>You've won</h1>";
    description = `<iframe src=${getRandomGif()} width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
  } else {
    loseSFX.play();
    header = "<h1 id = 'lost'>You've lost</h1>";
  }
  Noti(`
    <div id = "header">${header}</div>
    <div id = "body">
      <p>${description}</p>
    </div>
    <div id = "footer">
      <div class = "btn close-noti" id = "show-sp">Solution</div>
      <a href = "javascript:location.reload();" class = "btn">Try again</a>
    </div>
  `);
  const closeNoti = document.querySelector(".close-noti");
  closeNoti.addEventListener("click", () => {
    const notis = document.querySelectorAll("#noti-overlay");
    notis.forEach((noti) => {noti.remove()});
    
    // show shortest path
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

export {
  board, 
  moveHistory,
  destination,
  domManipulate,
  endGame,
  shortestPath,
  cellBorderHover,
  undoButton,
  alreadyEndGame,
  playerPath,
}
