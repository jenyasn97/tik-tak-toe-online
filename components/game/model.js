import { MOVE_ORDER } from "./constants";

export function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(index) {
    const res = [[], [], [], []];

    for (let i = 0; i < sequenceSize; i++) {
      res[0].push(i - gap + index);
      res[1].push(fieldSize * (i - gap) + (i - gap) + index);
      res[2].push(-fieldSize * (i - gap) + (i - gap) + index);
      res[3].push(fieldSize * (i - gap) + index);
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndex = indexRows.find((row) => {
        return compareElements(row);
      });
      if (winnerIndex) {
        return winnerIndex;
      }
    }
  }
  return undefined;
}
