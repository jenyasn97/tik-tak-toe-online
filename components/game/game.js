import useGameState from "../../components/game/useGameState";
import styles from "../../styles/game.module.css";
import GameInfo from "./GameInfo";
import GameCell from "./GameCell";

function Game() {
  const { cells, currentStep, winnerSymbol, isDraw, resetGame, toggleCell, getWinnerCell } = useGameState();

  return (
    <>
      <div className={styles[`game`]}>
        <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
        <div className={styles["game-field"]}>
          {cells.map((symbol, index) => (
            <GameCell key={index} symbol={symbol} isWinner={getWinnerCell(index)} onClick={() => toggleCell(index)} />
          ))}
        </div>
        <button className={styles["reset"]} onClick={resetGame}>
          Сбросить
        </button>
      </div>
    </>
  );
}
export default Game;
