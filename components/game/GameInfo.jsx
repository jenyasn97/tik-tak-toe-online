import clsx from "clsx";
import { Profile } from "../profile";
import CrossIcon from "./icons/CrossIcon";
import ZeroIcon from "./icons/ZeroIcon";
import GameSymbol from "./GameSymol";
import { GAME_SYMBOLS } from "./constants";

import avatar1 from "./images/av1.png";
import avatar2 from "./images/av2.png";
import avatar3 from "./images/av3.png";
import avatar4 from "./images/av4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Sultan",
    rating: 1900,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 3,
    name: "VereIntedinglapotur",
    rating: 1231,
    avatar: avatar2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rating: 1123,
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: 4,
    name: "Larat",
    rating: 1443,
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4  justify-between grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, idx) => {
        return (
          <PlayerInfo
            key={player.id}
            playerInfo={player}
            isRight={idx % 2 === 1}
            isTimerRunning={currentMove === player.symbol}
          />
        );
      })}
    </div>
  );
}

export default GameInfo;

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    } else {
      return "text-slate-200";
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-[180px]"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} className="w-3 h-3" />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
