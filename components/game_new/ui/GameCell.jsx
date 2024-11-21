import clsx from "clsx";
import GameSymbol from "./GameSymbol";

function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border -ml-px -mb-px border-slate-200  flex items-center justify-center",
        isWinner ? "bg-orange-300" : "",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}

export default GameCell;
