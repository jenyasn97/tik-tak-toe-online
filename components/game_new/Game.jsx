import { PLAYERS } from "./constants";
import BackLink from "./ui/BackLink";
import GameCell from "./ui/GameCell";
import GameInfo from "./ui/GameInfo";
import GameLayout from "./ui/GameLayout";
import GameMoveInfo from "./ui/GameMoveInfo";
import GameTitle from "./ui/GameTitle";
import PlayerInfo from "./ui/PlayerInfo";
import GameOverModal from "./ui/GameOverModal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/gameStateReducer";
import { getNextMove } from "./model/getNextMove";
import { computeWinner } from "./model/computeWinner";
import { useMemo, useReducer } from "react";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";

const PLAYERS_COUNT = 2;

export default function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );

  const winnerSequance = computeWinner(gameState);
  const nextMove = getNextMove(gameState);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequance,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);
  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              isRight={index % 2 === 1}
              seconds={60}
              symbol={player.symbol}
              name={player.name}
              rating={player.rating}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={currentMove}
            nextMove={nextMove}
            winnerSequance={winnerSequance}
            winnerSymbol={winnerSymbol}
          />
        }
        gameCells={cells.map((cell, idx) => {
          return (
            <GameCell
              key={idx}
              isWinner={winnerSequance?.includes(idx)}
              disabled={!!winnerSymbol}
              onClick={() => {
                dispatch({ type: GAME_STATE_ACTIONS.CELL_CLICK, idx });
              }}
              symbol={cell}
            />
          );
        })}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              isRight={index % 2 === 1}
              seconds={60}
              symbol={player.symbol}
              name={player.name}
              rating={player.rating}
            />
          );
        })}
      />
    </>
  );
}
