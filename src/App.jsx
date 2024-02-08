import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs"
import {useState} from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [logs, setLogs] = useState([]);

  const handleSelectSquare = ()=> {
      setActivePlayer((prevActive) => {
        return prevActive==='X' ? 'O' : 'X';
      })
  };

  const getLogHandler = (x,y) => {
    setLogs(prevLogs => {
        return [{x, y, activePlayer},...prevLogs];
      }
    )
  };

  const handleGameOver = (symbol) => {
    window.alert(symbol + ' has won!!!');
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard gameOver={handleGameOver} activeSymbol={activePlayer} onSelectSquare={handleSelectSquare} getLog={getLogHandler}/>
      </div>    
      <Logs id='log' logs={logs}/>
    </main>
  )
}

export default App
