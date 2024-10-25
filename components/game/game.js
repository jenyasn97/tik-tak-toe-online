import useGameState from "../../components/game/useGameState";
import GameInfo from "./GameInfo";
import GameCell from "./GameCell";
import ResetButton from "./ResetButton";

function Game() {
  const { cells, currentStep, winnerSymbol, isDraw, resetGame, toggleCell, getWinnerCell } = useGameState();

  return (
    <>
      <div className="flex flex-col items-center w-48 mx-auto my-24 border border-black py-5">
        <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
        <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]  pt-px pl-px">
          {cells.map((symbol, index) => (
            <GameCell key={index} symbol={symbol} isWinner={getWinnerCell(index)} onClick={() => toggleCell(index)} />
          ))}
        </div>
        <ResetButton onClick={resetGame} />
      </div>
    </>
  );
}
export default Game;
