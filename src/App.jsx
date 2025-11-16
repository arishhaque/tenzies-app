import './App.css';
import { nanoid } from 'nanoid';
import { useState, useRef, useEffect } from 'react';
import Dice from './components/Dice';
import Counter from './components/Counter';
import Confetti from 'react-confetti';
import Timer from './components/Timer';

function App() {

  function generateRandom() {
    return Math.ceil(Math.random() * 6);
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: generateRandom(),
      isHeld: false
    }));
  }

  const [dice, setDice] = useState(() => generateAllNewDice()); // lazy initialization
  const buttonRef = useRef(null);
  const counterRef = useRef(null);
  const gameWon = dice.every(die => die.isHeld && die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function rollDice() {
    if (gameWon) {
      setDice(generateAllNewDice());
      counterRef.current?.reset();
      return;
    }
    // Roll only dice that are not held
    setDice((prev) => prev.map(d => d.isHeld ? d : { ...d, value: generateRandom() }));
    counterRef.current?.increment();
  }

  function holdDice(id) {
    setDice((prev) => prev.map(d => d.id === id ? { ...d, isHeld: !d.isHeld } : d));
  }

  function resetCounter() {
    setDice(generateAllNewDice());
    counterRef.current?.reset();
  }

  return (
    <>
      <main>
        <h1>Tenzies Game</h1>
        <p>Roll until all dice are same. Click each die to freeze it at its current value between rolls.</p>
        {gameWon && <Confetti />}
        <div className='dice-container'>
          {dice.map((dieObj) => (
            <Dice key={dieObj.id} id={dieObj.id} diceValue={dieObj.value} isHeld={dieObj.isHeld} holdDice={holdDice} />
          ))}
        </div>

        <button className='roll-button' ref={buttonRef} onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
        <Counter ref={counterRef} />
        <button className='reset-counter-button' onClick={resetCounter}>Reset Counter</button>
        <Timer />
      </main>
    </>
  )
}

export default App;
