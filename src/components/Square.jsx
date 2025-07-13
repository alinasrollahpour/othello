import './Components.css';

let squareStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1px',
  backgroundColor: 'green',
  border: 'none',
  width: '100%',
  height: '100%',

}

let rowStyles = {
  marginTop: '2px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'none',
  width: '100%',
  height: '100%',
}

function Piece({color}) {
  let pieceStyles = {
    borderRadius: '1000px',
    border: 'none',
    width: '80px',
    height: '80px',
  }
  if (color === 'b') {pieceStyles.backgroundColor = 'black'}
  else if (color === 'w') {pieceStyles.backgroundColor = 'white'}
  return <div style={pieceStyles}></div>
}

export function SquareRow(props) {
  return <div style={rowStyles}>
    {props.children}
  </div>
}

//'Square' shows black or white or nothing, regarding tableReference
export function Square({onClick, row, col, tableReference}) {
  let piece = tableReference[row][col]; //maybe null or 'w' or 'b'
  if (piece) piece = <Piece color={piece}/>
  return <button onClick={onClick} style={squareStyles} className='square'>
    {piece}
  </button>
}