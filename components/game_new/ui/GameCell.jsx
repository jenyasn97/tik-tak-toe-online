import clsx from "clsx";
import GameSymbol from "./GameSymbol";
import { memo } from "react";

const GameCell = memo(function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol,
  idx,
}) {
  console.log(`render memo`);

  return (
    <button
      disabled={disabled}
      onClick={() => onClick(idx)}
      className={clsx(
        "border -ml-px -mb-px border-slate-200  flex items-center justify-center",
        isWinner ? "bg-orange-300" : "",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
});

export default GameCell;
