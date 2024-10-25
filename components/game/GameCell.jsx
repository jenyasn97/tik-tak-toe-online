import GameSymbol from "./GameSymbol";
import clsx from "clsx";

function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        `border  border-gray-400 -mt-px -ml-px flex justify-center items-center bg-transparent)`,
        isWinner && "bg-red-300",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}

export default GameCell;
