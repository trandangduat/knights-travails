import { getDirAngle } from "./knight.js";

const BOARD_SIZE = 8;
const boardContainer = document.querySelector("#board-container");

function isInsideBoard (row, col, N = BOARD_SIZE) {
  return (row >= 0 && col >= 0 && row < N && col < N);
}

function toggleHighlight (cellRow, cellCol) {
  let cell = getCellDOM(cellRow, cellCol);
  if (cell.classList.contains("highlight")) {
    cell.classList.remove("highlight");
  } else {
    cell.classList.add("highlight");
  }
}

function getCellDOM (cellRow, cellCol) {
  return document.querySelector(`.cell[data-row="${cellRow}"][data-col="${cellCol}"]`);
}

function boardCellAtPosition (x, y) {
  let row = (y + 1) / getCellDOM(0, 0).offsetHeight; // +1 to avoid decimal error, position got from offsetHeight is round to interger
  let col = (x + 1) / getCellDOM(0, 0).offsetWidth;
  row = parseInt(row);
  col = parseInt(col);
  return {row, col};
}

function createLine (r1, c1, r2, c2) { // create a line connected cell (r1, c1) with cell (r2, c2)
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "0%");
  line.setAttribute("y1", "0%");
  line.setAttribute("x2", "27.951%"); // Using Pythagoras: sqrt(1 * 1 + 2 * 2) * 12.5%
  line.setAttribute("y2", "0%");
  
  let _translate = `translate(calc(12.5% * ${parseFloat(c1) + 0.5}), calc(12.5% * ${parseFloat(r1) + 0.5}))`;
  let _rotate = `rotate(${getDirAngle(r2 - r1, c2 - c1)}deg)`;
  line.setAttribute("style", `transform: ${_translate} ${_rotate}`);
  line.classList.add("line");
  return line;
}

function createBoardDOM() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    const boardRow = document.createElement("div");
    boardRow.classList.add("row");
    boardRow.setAttribute("data-index", i);
    
    for (let j = 0; j < BOARD_SIZE; j++) {
      const rowCell = document.createElement("div");
      rowCell.setAttribute("data-row", i);
      rowCell.setAttribute("data-col", j);
      rowCell.classList.add("cell");
      if ((i + j) % 2 != 0) { 
        rowCell.classList.add("black");
      }
      rowCell.innerHTML = `<span class = "guide-dot"></div>`;
      boardRow.appendChild(rowCell);
    }
    boardContainer.appendChild(boardRow);
  }
  return boardContainer;
}

function newPiece (pieceImage, cellRow = 0, cellCol = 0) {
  let piece = document.createElement("div");
  piece.classList.add("piece");
  piece.style.transform = `translate(${cellCol * 100}%, ${cellRow * 100}%)`;
  piece.style.background = `url(${pieceImage})`;
  piece.style.background += ` no-repeat center/contain`;
  return piece;
}

export {
  BOARD_SIZE,
  boardContainer,
  isInsideBoard,
  toggleHighlight,
  createBoardDOM,
  getCellDOM,
  boardCellAtPosition,
  newPiece,
  createLine,
};
