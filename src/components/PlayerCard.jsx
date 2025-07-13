import './Components.css';

export default ({id, turn, score}) => {
  let cardStyles = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '10px',
    marginTop: '10px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  let inputStyles = {
    marginLeft: '10px',
    height: '50px',
    width: '200px',
    fontSize: '26px',
    border: 'none',
    padding: '1px',
    paddingLeft: '20px',
    paddingRight: '10px',
    background: 'none',
    borderColor: 'lightgray',
    borderRadius: '1000px',
    borderWidth: '1px',
  }

  let scoreStyles = {
    fontSize: '26px',
    fontWeight: 'bold',
    paddingLeft: '10px',
    paddingRight: '10px',
  }

  if (id === 'w') {
    cardStyles.backgroundColor = 'white';
    cardStyles.color = 'black';
    inputStyles.color = 'black';
  } else if (id === 'b') {
    cardStyles.backgroundColor = 'black';
    cardStyles.color = 'white';
    inputStyles.color = 'white';
  }

  return <div className={`player-card ${ id === turn ? 'active' : null}`} style={cardStyles}>
    <input className='player-name' defaultValue={'Player'} style={inputStyles}/>
    <p className='player-score' style={scoreStyles}>{id === 'w' ? score[0] : score[1]}</p>
  </div>
}