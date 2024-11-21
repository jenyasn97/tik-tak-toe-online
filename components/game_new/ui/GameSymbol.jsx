import CrossIcon from "./icons/CrossIcon";
import ZeroIcon from "./icons/ZeroIcon";
import SquareIcon from "./icons/SquareIcon";
import TringleIcon from "./icons/TringleIcon";
import { GAME_SYMBOLS } from "../constants";

function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRINGLE]: TringleIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}

export default GameSymbol;
