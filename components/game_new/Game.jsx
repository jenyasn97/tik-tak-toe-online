import GameTitle from "./ui/GameTitle";
import GameInfo from "./ui/GameInfo";
import BackLink from "./ui/BackLink";
import GameLayout from "./ui/GameLayout";
import { PLAYERS } from "./constants";
import PlayerInfo from "./ui/PlayerInfo";
import GameMoveInfo from "./ui/GameMoveInfo";
import GameCell from "./ui/GameCell";
import { useGameState } from "./model/useGameState";
import GameOverModal from "./ui/GameOverModal";

const PLAYERS_COUNT = 2;

export default function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequance,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

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
                handleCellClick(idx);
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
