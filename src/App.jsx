import {useState} from "react";
import './App.css';
import OthelloBanner from "./components/OthelloBanner.jsx";
import PlayerCard from "./components/PlayerCard.jsx";
import Button from "./components/Button.jsx";
import GameBoard from "./components/GameBoard.jsx";
import './components/Components.css';

function App() {
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

    <GameBoard/>
  </div>;
}

export default App;
