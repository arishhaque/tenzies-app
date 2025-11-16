type DiceProps = {
  id: string;
  diceValue: number;
  isHeld?: boolean;
  holdDice?: (id: string) => void;
};

export function Dice({ id, diceValue, isHeld = false, holdDice }: DiceProps) {
  const styles = {
    backgroundColor: isHeld ? '#59E391' : 'white'
  };

  return (
    <div className="dice-container">
      <button
        style={styles}
        aria-label={`Dice value ${diceValue}, ${isHeld ? 'held' : 'not held'}`}
        type="button"
        value={diceValue}
        onClick={() => id && holdDice?.(id)}
      >
        {diceValue}
      </button>
    </div>
  );
}

export default Dice;
