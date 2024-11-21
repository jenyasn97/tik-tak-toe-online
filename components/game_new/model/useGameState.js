import { useState } from "react";
import { GAME_SYMBOLS} from "../constants";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";


export function useGameState(playersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }),
  );

  const winnerSequance = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : cells[winnerSequance?.[0]];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState; // Если клетка уже занята, возвращаем текущее состояние
      }

      const newCells = lastGameState.cells.map((cell, i) =>
        i === index ? lastGameState.currentMove : cell,
      );

      return {
        ...lastGameState,
        cells: newCells,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequance,
    winnerSymbol,
  };
}
