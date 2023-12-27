import { Knight } from "./knight.js";
import { findShortestPath } from "./shortestPath.js";


const BOARD_SIZE = 8;

let S = Knight(1, 1);
let D = Knight(4, 6);

console.log(findShortestPath(BOARD_SIZE, S, D));
