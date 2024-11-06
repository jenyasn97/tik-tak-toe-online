import clsx from "clsx";
import UiButton from "../uikit/UIButton";
import GameSymbol from "./GameSymol";

function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequance,
}) {
  const actions = (
    <>
      <UiButton variant="primary" size="md">
        Ничья
      </UiButton>
      <UiButton variant="outline" size="md">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, idx) => {
          return (
            <GameCell
              onClick={() => {
                handleCellClick(idx);
              }}
              key={idx}
              isWinner={winnerSequance?.includes(idx)}
            >
              {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
            </GameCell>
          );
        })}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий:
          <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}

function GameCell({ children, onClick, isWinner }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border -ml-px -mb-px border-slate-200  flex items-center justify-center",
        isWinner ? "bg-orange-300" : "",
      )}
    >
      {children}
    </button>
  );
}

export default GameField;
