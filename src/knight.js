let rowDir = [-2, -1, 1, 2,  2,  1, -1, -2];
let colDir = [ 1,  2, 2, 1, -1, -2, -2, -1];

function Knight (x, y) {
  return { x, y }; 
}

export { 
  rowDir,
  colDir,
  Knight,
};

