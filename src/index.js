import './style.css';

import { Knight } from "./knight.js";
import { findShortestPath } from "./shortestPath.js";
import { BOARD_SIZE } from "./board.js";

let S = Knight(0, 0);
let D = Knight(3, 3);

console.log(findShortestPath(BOARD_SIZE, S, D));
