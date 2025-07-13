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
  width: '750px',
  height: '750px',
  borderRadius: '30px'
}

//inherit a pointer to table
export default function GameBoard({table, clickHandler}) {
  return <div id='game-board' style={styles}>
    {table.map((row, i) => <SquareRow key={i}>
      {row.map((cell, j) => <Square key={j} row={i} col={j}
                                    onClick={()=>clickHandler(i, j)}
                                    tableReference={table}/>
      )}
    </SquareRow>)}
  </div>;
}

