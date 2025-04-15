import { useState } from 'react';
import './App.css';

function App() {

  const [diceValue, setDiceValue] = useState('');
  const [isDroped, setIsDroped] = useState(false);

  const [leftMatrix, setLeftMatrix] = useState([[], [], []]);
  const [rightMatrix, setRightMatrix] = useState([[], [], []]);

  const dropTheDice = () => {
    if (!isDroped) {
      let dice = Math.floor(Math.random() * 6);
      setDiceValue(dice + 1);
      setIsDroped(true);
    }
  };

  const setDice = (e) => {
    e.preventDefault();
    if (diceValue > 0) {
      e.target.innerHTML = diceValue;
      writeToMatrix(e.target.id, diceValue);
      setIsDroped(false);
      setDiceValue(0)
    }
  };

  const writeToMatrix = (id, value) => {
    let split = id.split('-');
    let row = Math.floor((split[1] - 1) / 3);
    let col = (split[1] - 1) % 3;
    if (split[0] === "left") {
      updateMatrix(row, col, value, setLeftMatrix);
    } else {
      updateMatrix(row, col, value, setRightMatrix);
    }
  };

  const updateMatrix = (row, col, value, setMatrix) => {
    setMatrix(prevMatrix => {
      const newMatrix = prevMatrix.map(inner => [...inner]); // копия всех строк
      newMatrix[row][col] = value;
      return newMatrix;
    });
  };


  return (
    <div className="App">
      <header>
        <button
          onClick={() => dropTheDice()}
          disabled={isDroped}>Drop</button>
        <span className='diceValue'>{diceValue}</span>
      </header>
      <div>
        <div>{leftMatrix}</div>
        <div>{rightMatrix}</div>
      </div>
      <main>
        <div className='leftPanel'>
          <button id='left-1' onClick={(e) => setDice(e)}>0</button>
          <button id='left-2' onClick={(e) => setDice(e)}>0</button>
          <button id='left-3' onClick={(e) => setDice(e)}>0</button>
          <button id='left-4' onClick={(e) => setDice(e)}>0</button>
          <button id='left-5' onClick={(e) => setDice(e)}>0</button>
          <button id='left-6' onClick={(e) => setDice(e)}>0</button>
          <button id='left-7' onClick={(e) => setDice(e)}>0</button>
          <button id='left-8' onClick={(e) => setDice(e)}>0</button>
          <button id='left-9' onClick={(e) => setDice(e)}>0</button>
        </div>
        <div className='rightPanel'>
          <button id='right-1' onClick={(e) => setDice(e)}>0</button>
          <button id='right-2' onClick={(e) => setDice(e)}>0</button>
          <button id='right-3' onClick={(e) => setDice(e)}>0</button>
          <button id='right-4' onClick={(e) => setDice(e)}>0</button>
          <button id='right-5' onClick={(e) => setDice(e)}>0</button>
          <button id='right-6' onClick={(e) => setDice(e)}>0</button>
          <button id='right-7' onClick={(e) => setDice(e)}>0</button>
          <button id='right-8' onClick={(e) => setDice(e)}>0</button>
          <button id='right-9' onClick={(e) => setDice(e)}>0</button>
        </div>
      </main>
    </div>
  );
}

export default App;
