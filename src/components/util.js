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

