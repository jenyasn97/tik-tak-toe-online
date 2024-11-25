import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
});

export const gameStateReducer = (state, action) => {

  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { idx } = action;
  

      if (state.cells[idx]) {
        return state; // Если клетка уже занята, возвращаем текущее состояние
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        cells: updateCell(state, idx),
      };
    }
    default: {
      return state;
    }
  }
};

function updateCell(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell,
  );
}
