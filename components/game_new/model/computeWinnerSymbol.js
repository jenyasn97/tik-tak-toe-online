export function computeWinnerSymbol(gameState, { winnerSequance, nextMove }) {

  return nextMove === gameState.currentMove
    ? gameState.currentMove
    : gameState.cells[winnerSequance?.[0]];
}
