import {useState} from "react";
import './App.css';
import OthelloBanner from "./components/OthelloBanner.jsx";
import PlayerCard from "./components/PlayerCard.jsx";
import Button from "./components/Button.jsx";
import GameBoard from "./components/GameBoard.jsx";
import './components/Components.css';
import {makeTable, resetTable} from './components/util.js';


function App() {
  const [table, setTable] = useState(makeTable());
  const [score, setScore] = useState([2, 2]);
  const [turn, setTurn] = useState('w');//either 'w' or 'b'

  function handleSquareClick(row, col) {
    //todo
    //if is already empty

    if (!table[row][col]) {
      setTable((t)=> {t[row][col] = turn; return t;})
    }
    // for (let i of table) console.log(i);
    // console.log('++++++++++++++++++++++')
  }

  return <div id='total-container'>
    <div id='sidebar-container'>
      <OthelloBanner id='banner'/>
      <PlayerCard className="player-card" id='w'></PlayerCard>
      <PlayerCard className="player-card" id='b'></PlayerCard>
      <div id='buttons-container'>
        <Button id='restart-button'>
          Restart
        </Button>
        <Button id='settings-button'>
          Settings
        </Button>
      </div>
    </div>

    <GameBoard table={table} clickHandler={handleSquareClick} />
  </div>;
}

export default App;
