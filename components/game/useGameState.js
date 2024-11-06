import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const winnerSequance = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount);

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
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequance
  };
}
