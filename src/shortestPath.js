import { rowDir, colDir } from "./knight.js";
import { isInsideBoard } from "./board.js";


function findShortestPath (N, S, D) {
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
  dist[S.x][S.y] = 0;
  queue.push({ 
    x : S.x, 
    y : S.y
  }); 
  
  while (top < queue.length) {
    let u = queue[top];
    top++;
    for (let i = 0; i < 8; i++) {
      let x = rowDir[i] + u.x;
      let y = colDir[i] + u.y;
      if (isInsideBoard(x, y, N) && dist[x][y] === undefined) {
        dist[x][y] = dist[u.x][u.y] + 1;
        trace[x][y] = u;
        queue.push({x, y});
      }
    }
  }

  // Trace back the shortest path
  let path = [];
  let x = D.x, y = D.y;
  path.push({x, y});
  while (trace[x][y] !== undefined) {
    path.push(trace[x][y]);
    let u = trace[x][y].x;
    let v = trace[x][y].y;
    x = u;
    y = v;
  }
  path.reverse();
  return path;
}

export { findShortestPath };
