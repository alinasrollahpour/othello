import './Components.css';

export default ({id})=> {
  let styles = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '10px',
    marginTop: '10px'
  }
  if (id === 'w') {styles.backgroundColor = 'white'; styles.color = 'black'; }
  else if (id === 'b') {styles.backgroundColor = 'black'; styles.color = 'white';}

  return <div className='player-card' style={styles}>
    <p className='player-name'>Sample Name</p>
    <p className='player-score'>Score</p>
  </div>
}