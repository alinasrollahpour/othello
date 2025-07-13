export function resetTable(table) {
  for (let row of table) {
    for (let i = row.length - 1; i >= 0; i--) {
      row[i] = null
    }
  }
  //prepare that 4 squares
  table[3][3] = 'b';
  table[4][4] = 'b';
  table[3][4] = 'w';
  table[4][3] = 'w';
}

export function makeTable() {
  //make and return a 8x8 table
  const table = [[null, null, null, null, null, null, null, null]];
  for (let i = 0; i < 7; i++) {
    table.push([...table[0]]);
  }
  resetTable(table);
  return table;
}

export function isInBoundary(row, col) {
  return (0 <= row && row < 8 && 0 <= col && col < 8);
}
export function opponent(color) {
  //return the opposite color
  if (color === 'w') return 'b';
  if (color === 'b') return 'w';
}

export function checkAchievement(table, color, row, col) {
  //returns a list of coordinates that will be conquered
  //if the player 'color' make a move at [row, col]
  let achievements = [];
  //check for each 8 directions
  for (let i of [-1, 0, 1]) {
    for (let j of [-1, 0, 1]) {
      if (i === 0 && j === 0) continue;
      let directionAchievement = [];
      //inside these loops we now have a direction, which is [i, j]
      if (isInBoundary(row+i, col+j) && table[row+i][col+j] === opponent(color)) {
        while (isInBoundary(row+i, col+j) && table[row+i][col+j] === opponent(color)) {
          row += i; col += j;
          directionAchievement.push([row, col]);
        }
        //check if at the end, some piece with same color exists
        if (isInBoundary(row+i, col+j) && table[row+i][col+j] === color) {
          //then these in directionAchievement are valid, and we have to add them to achievement
          achievements = [...achievements, ...directionAchievement];
        }
      }
    }
  }
}

export function checkCanMoveAtAll(table, color) {

}
