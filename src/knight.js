let rowDir = [-2, -1, 1, 2,  2,  1, -1, -2];
let colDir = [ 1,  2, 2, 1, -1, -2, -2, -1];
import blackKnightImage from "./knight_piece.png";
import whiteKnightImage from "./knight_piece.png";

function Knight (x, y) {
  return { x, y }; 
}

function knightPieceDOM (cellRow = 0, cellCol = 0, isBlack = false) {
  let piece = document.createElement("div");
  piece.classList.add("piece");
  piece.style.transform = `translate(${cellCol * 100}%, ${cellRow * 100}%)`;
  if (!isBlack) {
    piece.style.background = `url(${whiteKnightImage})`;
  } else {
    piece.style.background = `url(${blackKnightImage})`;
  }
  piece.style.background += ` no-repeat center/contain`;
  return piece;
}

export { 
  rowDir,
  colDir,
  Knight,
  knightPieceDOM,
};

