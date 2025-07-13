import {Square, SquareRow} from "./Square.jsx";
import './Components.css';

let styles = {
  padding: 'none',
  borderColor: 'black',
  borderWidth: '1px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '15px',
  marginBottom: '15px',
  backgroundColor: 'darkGreen',
  width: '70%',
  height: '0%10',
  borderRadius: '30px'
}

//first initialize a 8x8 table of squares
//each square contains null or 'w' or 'b'
const table = [];
table.push([null, null, null, null, null, null, null, null]);
for (let i = 0; i < 7; i++) {
  table.push([...table[0]]);
}
//now we have a 8x8 array of null

function resetTable() {
  for (let row of table) {
    for (let i = row.length - 1; i >= 0; i--) {row[i] = null}
  }
  //prepare that 4 squares
  table[3][3] = 'b';
  table[4][4] = 'b';
  table[3][4] = 'w';
  table[4][3] = 'w';
}
//initially reset the table
resetTable();

function handleSquareClick(row, col) {
  //todo
}

export default () => <div id='game-board' style={styles}>
  {table.map((row, i) => <SquareRow key={i}>
    {row.map((cell, j) => <Square key={j} row={i} col={j}
                                  onClick={handleSquareClick}
                                  tableReference={table}/>
    )}
  </SquareRow>)}
</div>;

