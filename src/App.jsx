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

  function switchTurn() {
    //todo: complete the logic
    setTurn((prevTurn) => {
        if (prevTurn === 'w') return 'b';
        else return 'w';
      }
    )
    //todo: check if the user with updated turn, can apply any move at all?

  }

  function handleSquareClick(row, col) {
    //todo
    //if is already empty

    //validate this choice
    if (table[row][col]) return;
    //todo: check if with this move, hev will gain anything or not
    //if cannot gai

    //
    setTable((t) => {
        t = [...t];
        t[row][col] = turn;
        return t;
      }
    );

    switchTurn();
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

    <GameBoard table={table} clickHandler={handleSquareClick}/>
  </div>;
}

export default App;
