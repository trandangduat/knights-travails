import { BOARD_SIZE } from "./board.js";
import { rowDir, colDir } from "./knight.js";
import { isInsideBoard } from "./board.js";


function findShortestPath (S, D, N = BOARD_SIZE) {
  // N: size of the board
  // S: source knight
  // D: destination knight
  
  let dist = {}; 
  let trace = {}; 
  for (let i = 0; i < N; i++) {
    dist[i] = {};
    trace[i] = {}; 
  }

  // Using BFS to search for the shortest path
  let queue = new Array();
  let top = 0;
  dist[S.row][S.col] = 0;
  queue.push({ 
    row : S.row, 
    col : S.col
  }); 
  
  while (top < queue.length) {
    let u = queue[top];
    top++;
    for (let i = 0; i < 8; i++) {
      let newRow = rowDir[i] + u.row;
      let newCol = colDir[i] + u.col;
      if (isInsideBoard(newRow, newCol, N) && dist[newRow][newCol] === undefined) {
        dist[newRow][newCol] = dist[u.row][u.col] + 1;
        trace[newRow][newCol] = u;
        queue.push({row: newRow, col: newCol});
      }
    }
  }

  // Trace back the shortest path
  let path = [];
  let x = D.row, y = D.col;
  path.push({row: x, col: y});
  while (trace[x][y] !== undefined) {
    path.push(trace[x][y]);
    let u = trace[x][y].row;
    let v = trace[x][y].col;
    x = u;
    y = v;
  }
  path.reverse();
  path.shift();
  return path;
}

export { findShortestPath };
