import avatar1 from "./ui/images/av1.png";
import avatar2 from "./ui/images/av2.png";
import avatar3 from "./ui/images/av3.png";
import avatar4 from "./ui/images/av4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRINGLE: "tringle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRINGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Sultan",
    rating: 1900,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
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
