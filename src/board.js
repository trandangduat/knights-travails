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

export {
  BOARD_SIZE,
  boardContainer,
  isInsideBoard,
  toggleHighlight,
  createBoardDOM,
  getCellDOM,
};
