import {useState} from "react";
import './App.css';
import OthelloBanner from "./components/OthelloBanner.jsx";
import PlayerCard from "./components/PlayerCard.jsx";
import Button from "./components/Button.jsx";
import GameBoard from "./components/GameBoard.jsx";
import './components/Components.css';

import {makeTable, checkAchievement, checkCanMoveAtAll, opponent} from './components/util.js';


function App() {
  //could also be 'draw', 'won'
  const [playState, setPlayState] = useState('playing')
  const [winner, setWinner] = useState(null);

  const [table, setTable] = useState(makeTable());
  const [score, setScore] = useState([2, 2]);
  const [turn, setTurn] = useState('w');//either 'w' or 'b'

  function checkWon() {
    if (score[0] === 0) {
      setWinner('b');
    } else if (score[1] === 0) {
      setWinner('w');
    } else if (score[0] + score[1] === 64) {
      if (score[0] > score[1]) {
        setWinner('w');
      } else if (score[1] > score[0]) {
        setWinner('b');
      } else {
        setPlayState('draw');
      }
    }
  }

  function switchTurn() {
    //check if someone won
    checkWon();
    //switch the turn
    setTurn(opponent);
    //check if the user with updated turn, can apply any move at all?
    if (!checkCanMoveAtAll(table, opponent(turn))) {
      //switch back
      setTurn(opponent);
      if (!checkCanMoveAtAll(table, turn)) {
        console.log('Draw!!!')
        setPlayState('draw');
      }
    }
  }

  function handleSquareClick(row, col) {
    if (winner) {
      setPlayState('won');
      console.log(winner + ' won!!!')
      return;
    }
    if (playState === 'draw') {
      console.log('Draw!!!')
      return;
    }
    //if (!winner && playState !== 'playing')return; //if its won or draw
    //validate this choice
    //if is already empty
    if (table[row][col]) return;
    //check if with this move, he will gain anything or not
    let gains = checkAchievement(table, turn, row, col);
    //if cannot gain anything, dont accept
    if (gains.length === 0) {
      //todo: alert that this has no conquer
      console.log('Has no conquer!!!')
      return;
    }
    //manipulate scores
    setScore((prevScore) => {
      prevScore = [...prevScore];//make a copy
      if (turn === 'w') {
        prevScore[0] += (gains.length + 1);
        prevScore[1] -= (gains.length);
      } else {
        prevScore[1] += (gains.length + 1);
        prevScore[0] -= (gains.length);
      }
      return prevScore;
    })

    //switch the victim pieces
    let newTable = [...table];
    for (let e of gains) {
      newTable[e[0]] [e[1]] = turn;
    }
    setTable(newTable);

    //fill the square that player just clicked
    setTable((t) => {
        t = [...t];
        t[row][col] = turn;
        return t;
      }
    );

    //inside switchTurn check if is player locked ?
    switchTurn();
  }

  return <div id='total-container'>
    <div id='sidebar-container'>
      <OthelloBanner id='banner'/>
      <PlayerCard className="player-card" id='w' turn={turn} score={score}></PlayerCard>
      <PlayerCard className="player-card" id='b' turn={turn} score={score}></PlayerCard>
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
